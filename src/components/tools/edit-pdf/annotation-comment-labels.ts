import type { AnnotationCommentLabels } from './AnnotationCommentControls';

type Translate = (key: string, values?: { value: string | number }) => string;
export function annotationCommentLabels(t: Translate, toolbar: Translate, error: string): AnnotationCommentLabels {
  return {
    title: t('editPdf.comments'), filter: t('editPdf.commentFilter'), author: t('editPdf.stampAuthor'), type: t('editPdf.commentTypes'), empty: t('editPdf.commentEmpty'),
    reply: t('editPdf.commentReply'), edit: t('buttons.edit'), delete: t('buttons.delete'), save: t('buttons.save'), cancel: t('buttons.cancel'), selectAll: t('buttons.selectAll'), clear: t('buttons.clearAll'),
    actions: t('editPdf.commentActions'), status: t('editPdf.commentStatus'), text: t('editPdf.commentText'), replyText: t('editPdf.commentReplyText'), error,
    page: value => t('editPdf.commentPage', { value }), count: value => t('editPdf.commentCount', { value }), statusText: value => t('editPdf.commentStatusText', { value }),
    statuses: { Accepted: t('editPdf.commentAccepted'), Rejected: t('editPdf.commentRejected'), Cancelled: t('editPdf.commentCancelled'), Completed: t('editPdf.commentCompleted'), Closed: t('editPdf.commentClosed'), None: t('editPdf.commentNone') },
    subtypes: {
      Circle: t('editPdf.annCircle'), FreeText: t('editPdf.annFreeText'), Ink: t('editPdf.annFreehand'), Highlight: toolbar('toolbar.highlight'), Underline: toolbar('toolbar.underline'), Squiggly: t('editPdf.annFreeHighlight'), StrikeOut: toolbar('toolbar.strikethrough'), Stamp: t('editPdf.annStamp'), Line: t('editPdf.commentLine'), Square: t('editPdf.annRectangle'), Polygon: t('editPdf.commentPolygon'), PolyLine: t('editPdf.commentPolyline'), Caret: t('editPdf.annSignature'), Link: t('editPdf.commentLink'), Text: t('editPdf.annNote'), FileAttachment: t('editPdf.commentAttachment'), Popup: t('editPdf.commentPopup'), Widget: t('editPdf.commentWidget'), Note: t('editPdf.annNote'), Arrow: t('editPdf.annArrow'),
    },
  };
}
