import { describe, expect, it } from 'vitest';
import fc from 'fast-check';
import { appendChildBookmark, canMoveBookmark, findBookmark, getBookmarkMoveTargets, getBookmarkPlacement, getVisibleBookmarkIds, insertBookmarkAfter, moveBookmark, removeBookmark, removeBookmarks, selectBookmarkRange, type BookmarkNode, type BookmarkPlacement } from '@/lib/pdf/bookmark-tree';

function node(id: string, children: BookmarkNode[] = []): BookmarkNode {
  return { id, title: id, pageNumber: 2, children, isExpanded: true, color: '#123456', style: 'bold-italic' };
}
function fixture() { return [node('a', [node('a1', [node('a11')]), node('a2')]), node('b', [node('b1')]), node('c')]; }
function freeze(nodes: BookmarkNode[]): BookmarkNode[] {
  nodes.forEach(item => { freeze(item.children); Object.freeze(item); });
  Object.freeze(nodes); return nodes;
}
function ids(nodes: BookmarkNode[]): string[] { return nodes.flatMap(item => [item.id, ...ids(item.children)]); }

describe('Bookmark tree editing', () => {
  it('inserts after root and nested selections at the same level and reveals hidden entries', () => {
    const tree = freeze(fixture());
    const added = node('new');
    const root = insertBookmarkAfter(tree, added, 'a');
    expect(root.map(item => item.id)).toEqual(['a', 'new', 'b', 'c']);
    expect(root[0]).toBe(tree[0]);
    const nested = insertBookmarkAfter(tree, added, 'a1');
    expect(nested[0].children.map(item => item.id)).toEqual(['a1', 'new', 'a2']);
    expect(nested[0].children[0]).toBe(tree[0].children[0]);
    const next = insertBookmarkAfter(nested, node('next'), 'new');
    expect(next[0].children.map(item => item.id)).toEqual(['a1', 'new', 'next', 'a2']);
    const collapsed = [node('parent', [node('child')])]; collapsed[0].isExpanded = false;
    expect(insertBookmarkAfter(collapsed, added, 'child')[0].isExpanded).toBe(true);
    expect(collapsed[0].isExpanded).toBe(false);
  });

  it('appends at the root for empty or stale selection and keeps Add child separate', () => {
    const tree = freeze(fixture()); const added = node('new');
    expect(insertBookmarkAfter([], added, null)).toEqual([added]);
    for (const selected of [null, 'missing']) expect(insertBookmarkAfter(tree, added, selected).at(-1)).toBe(added);
    expect(appendChildBookmark(tree, added, 'a')[0].children.at(-1)).toBe(added);
    expect(appendChildBookmark(tree, added, 'missing')).toBe(tree);
    expect(insertBookmarkAfter(tree, tree[0], 'b')).toBe(tree);
  });

  it('moves full subtrees before and after targets at any level', () => {
    const tree = freeze(fixture());
    const before = moveBookmark(tree, 'b', 'a', 'before');
    expect(before.map(item => item.id)).toEqual(['b', 'a', 'c']);
    expect(before[0]).toBe(tree[1]);
    const nested = moveBookmark(tree, 'b', 'a1', 'after');
    expect(nested.map(item => item.id)).toEqual(['a', 'c']);
    expect(nested[0].children.map(item => item.id)).toEqual(['a1', 'b', 'a2']);
    expect(nested[0].children[1]).toBe(tree[1]);
    expect(ids(nested).sort()).toEqual(ids(tree).sort());
  });

  it('moves inside as the last child, expands the destination, and supports moving out to root', () => {
    const tree = fixture(); tree[1].isExpanded = false; freeze(tree);
    const inside = moveBookmark(tree, 'a', 'b', 'inside');
    expect(inside.map(item => item.id)).toEqual(['b', 'c']);
    expect(inside[0].children.map(item => item.id)).toEqual(['b1', 'a']);
    expect(inside[0].isExpanded).toBe(true); expect(tree[1].isExpanded).toBe(false);
    expect(findBookmark(inside, 'a')).toBe(tree[0]);
    const root = moveBookmark(tree, 'a1', 'c', 'after');
    expect(root.map(item => item.id)).toEqual(['a', 'b', 'c', 'a1']);
    expect(root[0].children.map(item => item.id)).toEqual(['a2']);
  });

  it('leaves self, descendant, missing, and unchanged drops completely untouched', () => {
    const tree = freeze(fixture());
    for (const [source, target] of [['a', 'a'], ['a', 'a11'], ['a', 'missing'], ['missing', 'a']]) {
      expect(canMoveBookmark(tree, source, target)).toBe(false);
      for (const placement of ['before', 'after', 'inside'] as const) expect(moveBookmark(tree, source, target, placement)).toBe(tree);
    }
    expect(moveBookmark(tree, 'a', 'b', 'before')).toBe(tree);
    expect(moveBookmark(tree, 'c', 'b', 'after')).toBe(tree);
  });

  it('excludes source descendants from destination choices and removes whole subtrees immutably', () => {
    const tree = freeze(fixture());
    expect(getBookmarkMoveTargets(tree, 'a').map(({ node, depth }) => [node.id, depth])).toEqual([['b', 0], ['b1', 1], ['c', 0]]);
    expect(ids(removeBookmark(tree, 'a1'))).toEqual(['a', 'a2', 'b', 'b1', 'c']);
    expect(removeBookmark(tree, 'missing')).toBe(tree);
  });

  it('calculates before, inside, and after from the actual row geometry', () => {
    expect(getBookmarkPlacement(102, 100, 40)).toBe('before');
    expect(getBookmarkPlacement(120, 100, 40)).toBe('inside');
    expect(getBookmarkPlacement(138, 100, 40)).toBe('after');
  });

  it('selects inclusive forward and reverse ranges through visible rows only', () => {
    const tree = fixture(); tree[0].children[0].isExpanded = false; freeze(tree);
    const visible = getVisibleBookmarkIds(tree);
    expect(visible).toEqual(['a', 'a1', 'a2', 'b', 'b1', 'c']);
    for (const [anchor, target] of [['a1', 'b1'], ['b1', 'a1']]) {
      expect([...selectBookmarkRange(visible, anchor, target)]).toEqual(['a1', 'a2', 'b', 'b1']);
    }
    expect([...selectBookmarkRange(visible, 'a1', 'a2', new Set(['c', 'a11']))]).toEqual(['c', 'a11', 'a1', 'a2']);
    for (const anchor of [null, 'missing', 'a11']) {
      expect([...selectBookmarkRange(visible, anchor, 'b', new Set(['c']))]).toEqual(['b']);
    }
  });

  it('removes overlapping selected subtrees once and preserves surviving identity and content', () => {
    const tree = fixture(); tree[0].isExpanded = false; freeze(tree);
    const result = removeBookmarks(tree, new Set(['a1', 'a11', 'b', 'stale']));
    expect(result.selectedCount).toBe(3); expect(result.removedCount).toBe(4);
    expect(ids(result.nodes)).toEqual(['a', 'a2', 'c']);
    expect(result.nodes[0]).toEqual({ ...tree[0], children: [tree[0].children[1]] });
    expect(result.nodes[0].children[0]).toBe(tree[0].children[1]);
    expect(result.nodes[1]).toBe(tree[2]);
    expect(ids(tree)).toEqual(['a', 'a1', 'a11', 'a2', 'b', 'b1', 'c']);
  });

  it('ignores stale selections, handles empty trees, and can remove the complete tree', () => {
    const tree = freeze(fixture());
    for (const selection of [new Set<string>(), new Set(['missing'])]) {
      expect(removeBookmarks(tree, selection)).toEqual({ nodes: tree, selectedCount: 0, removedCount: 0 });
      expect(removeBookmarks(tree, selection).nodes).toBe(tree);
    }
    expect(removeBookmarks([], new Set(['missing']))).toEqual({ nodes: [], selectedCount: 0, removedCount: 0 });
    expect(removeBookmarks(tree, new Set(['a', 'a1', 'b', 'c']))).toEqual({ nodes: [], selectedCount: 4, removedCount: 7 });
  });

  it('keeps every unremoved branch intact across generated bulk selections', () => {
    fc.assert(fc.property(fc.array(fc.nat(), { maxLength: 30 }), fc.array(fc.nat(), { maxLength: 30 }), (parents, choices) => {
      const tree: BookmarkNode[] = [], all: BookmarkNode[] = [];
      parents.forEach((parent, index) => {
        const item = node(String(index)); all.push(item);
        if (index > 0 && parent % 3 !== 0) all[parent % index].children.push(item);
        else tree.push(item);
      });
      const selection = new Set(choices.map(choice => String(choice % (all.length + 1))));
      const removed = new Set<string>();
      all.filter(item => selection.has(item.id)).forEach(item => ids([item]).forEach(id => removed.add(id)));
      const original = JSON.stringify(tree); freeze(tree);
      const result = removeBookmarks(tree, selection);
      expect(ids(result.nodes)).toEqual(ids(tree).filter(id => !removed.has(id)));
      expect(result.removedCount).toBe(removed.size);
      expect(result.selectedCount).toBe(all.filter(item => selection.has(item.id)).length);
      expect(JSON.stringify(tree)).toBe(original);
      all.filter(item => !removed.has(item.id)).forEach(item => {
        const surviving = findBookmark(result.nodes, item.id);
        expect(surviving).toEqual({ ...item, children: item.children.filter(child => !removed.has(child.id)).map(child => findBookmark(result.nodes, child.id)) });
      });
    }), { numRuns: 100 });
  });

  it('never loses, duplicates, or mutates bookmarks across generated nested moves', () => {
    fc.assert(fc.property(fc.array(fc.nat(), { minLength: 1, maxLength: 25 }), fc.nat(), fc.nat(), fc.constantFrom<BookmarkPlacement>('before', 'after', 'inside'), (parents, sourceIndex, targetIndex, placement) => {
      const tree: BookmarkNode[] = []; const nodes: BookmarkNode[] = [];
      parents.forEach((parent, index) => {
        const item = node(String(index)); nodes.push(item);
        if (index > 0 && parent % 3 !== 0) nodes[parent % index].children.push(item);
        else tree.push(item);
      });
      const original = JSON.stringify(tree); freeze(tree);
      const source = nodes[sourceIndex % nodes.length], target = nodes[targetIndex % nodes.length];
      const result = moveBookmark(tree, source.id, target.id, placement);
      expect(ids(result).sort()).toEqual(ids(tree).sort());
      expect(findBookmark(result, source.id)).toBe(source);
      expect(JSON.stringify(tree)).toBe(original);
    }), { numRuns: 100 });
  });
});
