// Keep editor UI requests local to the current window; document data stays in memory.
/** @param {{ kind: 'password' | 'altText', retry?: boolean, value?: string }} options */
export function requestEditorInput(options) {
  return new Promise(resolve => {
    const detail = { ...options, respond: resolve, handled: false };
    window.dispatchEvent(new CustomEvent('AWSOMEPDF_EDITOR_INPUT', { detail }));
    if (!detail.handled) resolve(null);
  });
}
