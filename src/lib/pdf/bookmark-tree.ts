import type { BookmarkItem } from './processors/bookmark';

/** Editor tree state; PDF processing continues to use BookmarkItem. */
export interface BookmarkNode extends Omit<BookmarkItem, 'children' | 'expanded'> {
  children: BookmarkNode[];
  isExpanded?: boolean;
}

export type BookmarkPlacement = 'before' | 'after' | 'inside';

export function findBookmark(nodes: BookmarkNode[], id: string | null): BookmarkNode | undefined {
  if (!id) return undefined;
  for (const node of nodes) {
    if (node.id === id) return node;
    const child = findBookmark(node.children, id);
    if (child) return child;
  }
}

/** Return the original array when the node is absent, copying only the affected path. */
export function removeBookmark(nodes: BookmarkNode[], id: string): BookmarkNode[] {
  const index = nodes.findIndex(node => node.id === id);
  if (index !== -1) return [...nodes.slice(0, index), ...nodes.slice(index + 1)];
  let changed = false;
  const result = nodes.map(node => {
    const children = removeBookmark(node.children, id);
    if (children === node.children) return node;
    changed = true;
    return { ...node, children };
  });
  return changed ? result : nodes;
}

function insertAt(nodes: BookmarkNode[], node: BookmarkNode, targetId: string, placement: BookmarkPlacement): BookmarkNode[] {
  const index = nodes.findIndex(target => target.id === targetId);
  if (index !== -1) {
    const result = [...nodes];
    if (placement === 'inside') {
      result[index] = { ...nodes[index], children: [...nodes[index].children, node], isExpanded: true };
    } else {
      result.splice(index + (placement === 'after' ? 1 : 0), 0, node);
    }
    return result;
  }
  let changed = false;
  const result = nodes.map(parent => {
    const children = insertAt(parent.children, node, targetId, placement);
    if (children === parent.children) return parent;
    changed = true;
    return { ...parent, children, isExpanded: true };
  });
  return changed ? result : nodes;
}

/** A stale or empty selection adds at the root; insertion reveals collapsed ancestors. */
export function insertBookmarkAfter(nodes: BookmarkNode[], node: BookmarkNode, selectedId: string | null): BookmarkNode[] {
  if (findBookmark(nodes, node.id)) return nodes;
  const selected = findBookmark(nodes, selectedId);
  return selected
    ? insertAt(nodes, node, selected.id, 'after')
    : [...nodes, node];
}

export function appendChildBookmark(nodes: BookmarkNode[], node: BookmarkNode, parentId: string): BookmarkNode[] {
  return findBookmark(nodes, node.id) ? nodes : insertAt(nodes, node, parentId, 'inside');
}

export function canMoveBookmark(nodes: BookmarkNode[], sourceId: string, targetId: string): boolean {
  const source = findBookmark(nodes, sourceId);
  return Boolean(source && sourceId !== targetId && findBookmark(nodes, targetId) && !findBookmark(source.children, targetId));
}

function samePlacement(left: BookmarkNode[], right: BookmarkNode[]): boolean {
  return left.length === right.length && left.every((node, index) =>
    node.id === right[index].id && node.isExpanded === right[index].isExpanded && samePlacement(node.children, right[index].children)
  );
}

/** Validate before removal: self-drops, cycles, and missing targets never lose a subtree. */
export function moveBookmark(nodes: BookmarkNode[], sourceId: string, targetId: string, placement: BookmarkPlacement): BookmarkNode[] {
  const source = findBookmark(nodes, sourceId);
  if (!source || !canMoveBookmark(nodes, sourceId, targetId)) return nodes;
  const result = insertAt(removeBookmark(nodes, sourceId), source, targetId, placement);
  return samePlacement(nodes, result) ? nodes : result;
}

/** Flatten destinations in tree order, excluding the entire source subtree. */
export function getBookmarkMoveTargets(nodes: BookmarkNode[], sourceId: string): Array<{ node: BookmarkNode; depth: number }> {
  const result: Array<{ node: BookmarkNode; depth: number }> = [];
  const visit = (items: BookmarkNode[], depth: number) => {
    for (const node of items) {
      if (node.id === sourceId) continue;
      result.push({ node, depth });
      visit(node.children, depth + 1);
    }
  };
  visit(nodes, 0);
  return result;
}

/** Match the existing row zones, evaluated again on drop rather than using stale hover state. */
export function getBookmarkPlacement(clientY: number, top: number, height: number): BookmarkPlacement {
  const offset = clientY - top;
  return offset < height * 0.25 ? 'before' : offset > height * 0.75 ? 'after' : 'inside';
}
