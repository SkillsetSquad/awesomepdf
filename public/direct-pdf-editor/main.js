// Direct PDF Editor Controller
import * as appModule from './app.js';
window.appModule = appModule;

// URL params and locale setup
const urlParams = new URLSearchParams(window.location.search);
const currentLang = (urlParams.get('lang') || navigator.language || 'en').toLowerCase();
const isZh = currentLang.startsWith('zh');

// Translations
const I18N = {
  zh: {
    back: '返回上传',
    open: '打开',
    export: '导出 (⌘S)',
    undo: '撤销 (⌘Z)',
    redo: '重做 (⇧⌘Z)',
    editAll: '编辑全部',
    editText: '仅编辑正文',
    editImages: '仅编辑图片',
    editShapes: '仅编辑形状',
    addText: '添加文本框',
    find: '查找与替换',
    docInfo: '文档属性',
    fitPage: '适合页面',
    fitWidth: '适合宽度',
    saved: '保存成功！文件已导出。',
    loading: '正在加载 PDF 编辑引擎...',
    errLoad: '加载 PDF 失败，请检查文件格式。',
    font: '字体',
    size: '字号',
    color: '颜色',
    align: '对齐',
    spacing: '间距',
    lineSp: '行距',
    paraSp: '段距',
    charSp: '字距',
    wordSp: '词距',
    rotate: '旋转',
    flip: '翻转',
    replaceImg: '替换图片',
    toFront: '置于顶层',
    toBack: '置于底层',
    duplicate: '复制',
    delete: '删除'
  },
  en: {
    back: 'Back to upload',
    open: 'Open',
    export: 'Export (⌘S)',
    undo: 'Undo (⌘Z)',
    redo: 'Redo (⇧⌘Z)',
    editAll: 'Edit All',
    editText: 'Edit Text',
    editImages: 'Edit Images',
    editShapes: 'Edit Shapes',
    addText: 'Add Text',
    find: 'Find & Replace',
    docInfo: 'Document Properties',
    fitPage: 'Fit to Page',
    fitWidth: 'Fit to Width',
    saved: 'Saved successfully! File exported.',
    loading: 'Loading PDF editor engine...',
    errLoad: 'Failed to load PDF, please check file format.',
    font: 'Font',
    size: 'Size',
    color: 'Color',
    align: 'Alignment',
    spacing: 'Spacing',
    lineSp: 'Line',
    paraSp: 'Paragraph',
    charSp: 'Character',
    wordSp: 'Word',
    rotate: 'Rotate',
    flip: 'Flip',
    replaceImg: 'Replace Image',
    toFront: 'Bring to Front',
    toBack: 'Send to Back',
    duplicate: 'Duplicate',
    delete: 'Delete'
  }
};

const t = isZh ? I18N.zh : I18N.en;

function applyI18n() {
  if (!isZh) return;
  const exitBtn = document.getElementById('exitEditor');
  if (exitBtn) exitBtn.title = t.back;
  
  const openLabel = document.querySelector('label[for="file"] span');
  if (openLabel) openLabel.textContent = t.open;
  
  const saveBtn = document.querySelector('#save span');
  if (saveBtn) saveBtn.textContent = isZh ? '导出' : 'Export';
  
  const addTextBtn = document.querySelector('[data-tool="addText"] span');
  if (addTextBtn) addTextBtn.textContent = t.addText;
  
  const editLabel = document.getElementById('editLabel');
  if (editLabel && editLabel.textContent.includes('Edit All')) {
    editLabel.textContent = t.editAll;
  }
}

function setupBarCollapse() {
  const viewbar = document.getElementById('viewbar');
  const collapse = document.getElementById('vbCollapse');
  const restore = document.getElementById('vbRestore');
  if (!viewbar || !collapse || !restore) return;
  collapse.addEventListener('click', () => {
    viewbar.setAttribute('hidden', '');
    restore.removeAttribute('hidden');
  });
  restore.addEventListener('click', () => {
    viewbar.removeAttribute('hidden');
    restore.setAttribute('hidden', '');
  });
}

function relocateAddText() {
  const addTextBtn = document.querySelector('#tools [data-tool="addText"]');
  const editBtn = document.querySelector('#tools [data-tool="edit"]');
  const findBtn = document.getElementById('find');
  if (!addTextBtn || !editBtn || !findBtn?.parentElement) return;
  const icon = addTextBtn.querySelector('svg');
  if (icon) addTextBtn.replaceChildren(icon);
  addTextBtn.classList.add('btn', 'icon');
  addTextBtn.title = t.addText;
  findBtn.parentElement.insertBefore(addTextBtn, findBtn);
  const sync = () =>
    addTextBtn.classList.toggle('on', !editBtn.classList.contains('on'));
  new MutationObserver(sync).observe(editBtn, {
    attributes: true,
    attributeFilter: ['class'],
  });
  sync();
}

function setupFindToggle() {
  const findBtn = document.getElementById('find');
  const findbar = document.getElementById('findbar');
  if (findBtn && findbar) {
    findBtn.title = t.find;
    const sync = () => findBtn.classList.toggle('on', !findbar.hidden);
    new MutationObserver(sync).observe(findbar, {
      attributes: true,
      attributeFilter: ['hidden'],
    });
    sync();
  }
}

// Exit and File Input
function setupExitAndFileInput() {
  const exitBtn = document.getElementById('exitEditor');
  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: 'PDFCRAFT_EXIT_EDITOR' }, '*');
      }
    });
  }

  const fileInput = document.getElementById('file');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const f = e.target.files?.[0];
      if (f) {
        appModule.openFile(f);
      }
    });
  }
}

// PostMessage Communication with Next.js Host
function setupHostBridge() {
  const applyTheme = (isDark) => {
    const app = document.getElementById('text-editor-app');
    if (isDark) {
      document.documentElement.classList.add('dark');
      app?.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      app?.classList.remove('dark');
    }
  };

  // Initial theme detection from URL param or media query
  const themeParam = urlParams.get('theme');
  if (themeParam === 'dark') {
    applyTheme(true);
  } else if (themeParam === 'light') {
    applyTheme(false);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme(true);
  }

  window.addEventListener('message', async (event) => {
    const { type, payload } = event.data || {};
    if (type === 'PDFCRAFT_THEME_CHANGE') {
      applyTheme(Boolean(payload?.isDark));
      return;
    }
    if (type === 'PDFCRAFT_LOAD_PDF' && payload) {
      try {
        console.log('[DirectEditor] Received PDF payload from parent:', payload);
        let fileObj = null;
        const fileName = payload.name || 'document.pdf';
        if (payload instanceof File) {
          fileObj = payload;
        } else if (payload instanceof Blob) {
          fileObj = new File([payload], fileName, { type: 'application/pdf' });
        } else if (payload instanceof ArrayBuffer) {
          fileObj = new File([payload], fileName, { type: 'application/pdf' });
        } else if (payload.buffer instanceof ArrayBuffer) {
          fileObj = new File([payload.buffer], fileName, { type: 'application/pdf' });
        } else if (payload.buffer) {
          fileObj = new File([payload.buffer], fileName, { type: 'application/pdf' });
        }
        if (fileObj) {
          const ready = await appModule.engineReady;
          console.log('[DirectEditor] Engine ready status:', ready, 'opening file:', fileObj.name, fileObj.size);
          await appModule.openFile(fileObj);
          if (window.parent && window.parent !== window) {
            window.parent.postMessage({ type: 'PDFCRAFT_LOADED_SUCCESS', name: fileObj.name }, '*');
          }
        }
      } catch (err) {
        console.error('[DirectEditor] Failed to open PDF from parent message:', err);
      }
    }
  });

  // Notify parent we are ready
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ type: 'PDFCRAFT_EDITOR_READY' }, '*');
  }
}

// Save Callback
function setupSaveCallback() {
  if (typeof appModule.setOnSaved === 'function') {
    appModule.setOnSaved((kb, fileName) => {
      console.log('[DirectEditor] File saved:', fileName, kb, 'KB');
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({
          type: 'PDFCRAFT_SAVE_SUCCESS',
          fileName: fileName || 'edited-document.pdf',
          sizeKb: kb
        }, '*');
      }
    });
  }
}

// Preload bundled Chinese font (Noto Sans SC) for universal CJK editing support
async function loadBundledChineseFont() {
  try {
    const res = await fetch('/fonts/NotoSansSC-Regular.ttf');
    if (!res.ok) {
      console.warn('[DirectEditor] Bundled Chinese font not found (HTTP ' + res.status + ')');
      return;
    }
    const fontBuf = await res.arrayBuffer();
    const bytes = new Uint8Array(fontBuf);
    const PE = window.PdfEngine;
    if (!PE?.localFonts) {
      console.warn('[DirectEditor] PdfEngine.localFonts not ready yet');
      return;
    }
    const families = [
      'Noto Sans SC',
      'Noto Sans CJK SC',
      'Microsoft YaHei',
      'Microsoft YaHei UI',
      'SimSun',
      'SimHei',
      'PingFang SC',
      'Hiragino Sans GB',
      'Songti SC',
      'STHeiti',
      'KaiTi',
      'FangSong',
    ];
    for (const fam of families) {
      for (const sk of ['', '|00', '|10', '|01', '|11']) {
        if (!PE.localFonts.has(fam + sk) || fam.startsWith('Noto Sans')) {
          PE.localFonts.set(fam + sk, bytes);
        }
      }
    }
    console.log(
      '[DirectEditor] Bundled Chinese font (Noto Sans SC) successfully mounted into PdfEngine!'
    );

    // Update fFamily select box with friendly Chinese font names
    const sel = document.getElementById('fFamily');
    if (sel) {
      const cur = sel.value;
      const PREFERRED = [
        ['Noto Sans SC', isZh ? '思源黑体 (Noto Sans SC)' : 'Noto Sans SC'],
        ['Microsoft YaHei', isZh ? '微软雅黑 (Microsoft YaHei)' : 'Microsoft YaHei'],
        ['SimSun', isZh ? '宋体 (SimSun)' : 'SimSun'],
        ['SimHei', isZh ? '黑体 (SimHei)' : 'SimHei'],
        ['KaiTi', isZh ? '楷体 (KaiTi)' : 'KaiTi'],
        ['Helvetica', 'Helvetica'],
        ['Arial', 'Arial'],
        ['Times New Roman', 'Times New Roman'],
        ['Georgia', 'Georgia'],
        ['Courier New', 'Courier New'],
      ];
      const existingVals = new Set(PREFERRED.map(([v]) => v));
      const existingOpts = Array.from(sel.options)
        .map((o) => o.value)
        .filter((v) => !existingVals.has(v));
      sel.replaceChildren();
      for (const [val, label] of PREFERRED) {
        const opt = document.createElement('option');
        opt.value = val;
        opt.textContent = label;
        sel.appendChild(opt);
      }
      for (const val of existingOpts) {
        const opt = document.createElement('option');
        opt.value = opt.textContent = val;
        sel.appendChild(opt);
      }
      if (cur) sel.value = cur;
    }
  } catch (err) {
    console.warn('[DirectEditor] Error loading bundled Chinese font:', err);
  }
}

// Initialize on DOM Ready
async function init() {
  console.log('[DirectEditor] Initializing controller...');
  applyI18n();
  relocateAddText();
  setupBarCollapse();
  setupFindToggle();
  setupExitAndFileInput();
  setupSaveCallback();
  setupHostBridge();

  try {
    const ready = await appModule.engineReady;
    console.log('[DirectEditor] WASM engine status:', ready);
    await loadBundledChineseFont();
  } catch (e) {
    console.error('[DirectEditor] WASM engine initialization error:', e);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
