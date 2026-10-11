'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

// Keep tool-specific processors out of every other tool's initial bundle.
const MergePDFTool = dynamic(() => import('@/components/tools/merge').then(module => module.MergePDFTool));
const SplitPDFTool = dynamic(() => import('@/components/tools/split').then(module => module.SplitPDFTool));
const DeletePagesTool = dynamic(() => import('@/components/tools/delete').then(module => module.DeletePagesTool));
const RotatePDFTool = dynamic(() => import('@/components/tools/rotate').then(module => module.RotatePDFTool));
const AddBlankPageTool = dynamic(() => import('@/components/tools/add-blank-page').then(module => module.AddBlankPageTool));
const ReversePagesTool = dynamic(() => import('@/components/tools/reverse').then(module => module.ReversePagesTool));
const NUpPDFTool = dynamic(() => import('@/components/tools/n-up').then(module => module.NUpPDFTool));
const AlternateMergeTool = dynamic(() => import('@/components/tools/alternate-merge').then(module => module.AlternateMergeTool));
const DividePagesTool = dynamic(() => import('@/components/tools/divide').then(module => module.DividePagesTool));
const CombineSinglePageTool = dynamic(() => import('@/components/tools/combine-single-page').then(module => module.CombineSinglePageTool));
const GridCombineTool = dynamic(() => import('@/components/tools/grid-combine').then(module => module.GridCombineTool));
const PosterizePDFTool = dynamic(() => import('@/components/tools/posterize').then(module => module.PosterizePDFTool));
const PDFMultiTool = dynamic(() => import('@/components/tools/pdf-multi-tool').then(module => module.PDFMultiTool));
const AddAttachmentsTool = dynamic(() => import('@/components/tools/add-attachments').then(module => module.AddAttachmentsTool));
const ExtractAttachmentsTool = dynamic(() => import('@/components/tools/extract-attachments').then(module => module.ExtractAttachmentsTool));
const ExtractImagesTool = dynamic(() => import('@/components/tools/extract-images').then(module => module.ExtractImagesTool));
const EditAttachmentsTool = dynamic(() => import('@/components/tools/edit-attachments').then(module => module.EditAttachmentsTool));
const ViewMetadataTool = dynamic(() => import('@/components/tools/view-metadata').then(module => module.ViewMetadataTool));
const EditMetadataTool = dynamic(() => import('@/components/tools/edit-metadata').then(module => module.EditMetadataTool));
const PDFsToZipTool = dynamic(() => import('@/components/tools/pdf-to-zip').then(module => module.PDFsToZipTool));
const ComparePDFsTool = dynamic(() => import('@/components/tools/compare-pdfs').then(module => module.ComparePDFsTool));
const EditPDFTool = dynamic(() => import('@/components/tools/edit-pdf').then(module => module.EditPDFTool));
const ImageToPDFTool = dynamic(() => import('@/components/tools/image-to-pdf').then(module => module.ImageToPDFTool));
const TextToPDFTool = dynamic(() => import('@/components/tools/text-to-pdf').then(module => module.TextToPDFTool));
const PSDToPDFTool = dynamic(() => import('@/components/tools/psd-to-pdf').then(module => module.PSDToPDFTool));
const JSONToPDFTool = dynamic(() => import('@/components/tools/json-to-pdf').then(module => module.JSONToPDFTool));
const FixPageSizeTool = dynamic(() => import('@/components/tools/fix-page-size').then(module => module.FixPageSizeTool));
const CompressPDFTool = dynamic(() => import('@/components/tools/compress').then(module => module.CompressPDFTool));
const SignPDFTool = dynamic(() => import('@/components/tools/sign').then(module => module.SignPDFTool));
const CropPDFTool = dynamic(() => import('@/components/tools/crop').then(module => module.CropPDFTool));
const OrganizePDFTool = dynamic(() => import('@/components/tools/organize').then(module => module.OrganizePDFTool));
const ExtractPagesTool = dynamic(() => import('@/components/tools/extract').then(module => module.ExtractPagesTool));
const BookmarkTool = dynamic(() => import('@/components/tools/bookmark').then(module => module.BookmarkTool));
const PageNumbersTool = dynamic(() => import('@/components/tools/page-numbers').then(module => module.PageNumbersTool));
const WatermarkTool = dynamic(() => import('@/components/tools/watermark').then(module => module.WatermarkTool));
const HeaderFooterTool = dynamic(() => import('@/components/tools/header-footer').then(module => module.HeaderFooterTool));
const InvertColorsTool = dynamic(() => import('@/components/tools/invert-colors').then(module => module.InvertColorsTool));
const BackgroundColorTool = dynamic(() => import('@/components/tools/background-color').then(module => module.BackgroundColorTool));
const StampsTool = dynamic(() => import('@/components/tools/stamps').then(module => module.StampsTool));
const RemoveAnnotationsTool = dynamic(() => import('@/components/tools/remove-annotations').then(module => module.RemoveAnnotationsTool));
const FormFillerTool = dynamic(() => import('@/components/tools/form-filler').then(module => module.FormFillerTool));
const FormCreatorTool = dynamic(() => import('@/components/tools/form-creator').then(module => module.FormCreatorTool));
const RemoveBlankPagesTool = dynamic(() => import('@/components/tools/remove-blank-pages').then(module => module.RemoveBlankPagesTool));
const PDFToImageTool = dynamic(() => import('@/components/tools/pdf-to-image').then(module => module.PDFToImageTool));
const PDFToGreyscaleTool = dynamic(() => import('@/components/tools/pdf-to-greyscale').then(module => module.PDFToGreyscaleTool));
const PDFToJSONTool = dynamic(() => import('@/components/tools/pdf-to-json').then(module => module.PDFToJSONTool));
const OCRPDFTool = dynamic(() => import('@/components/tools/ocr').then(module => module.OCRPDFTool));
const LinearizePDFTool = dynamic(() => import('@/components/tools/linearize').then(module => module.LinearizePDFTool));
const PageDimensionsTool = dynamic(() => import('@/components/tools/page-dimensions').then(module => module.PageDimensionsTool));
const RemoveRestrictionsTool = dynamic(() => import('@/components/tools/remove-restrictions').then(module => module.RemoveRestrictionsTool));
const EncryptPDFTool = dynamic(() => import('@/components/tools/encrypt').then(module => module.EncryptPDFTool));
const DecryptPDFTool = dynamic(() => import('@/components/tools/decrypt').then(module => module.DecryptPDFTool));
const SanitizePDFTool = dynamic(() => import('@/components/tools/sanitize').then(module => module.SanitizePDFTool));
const FindAndRedactTool = dynamic(() => import('@/components/tools/find-and-redact').then(module => module.FindAndRedactTool));
const RedactPDFTool = dynamic(() => import('@/components/tools/redact').then(module => module.RedactPDFTool));
const FlattenPDFTool = dynamic(() => import('@/components/tools/flatten').then(module => module.FlattenPDFTool));
const RemoveMetadataTool = dynamic(() => import('@/components/tools/remove-metadata').then(module => module.RemoveMetadataTool));
const ChangePermissionsTool = dynamic(() => import('@/components/tools/change-permissions').then(module => module.ChangePermissionsTool));
const RepairPDFTool = dynamic(() => import('@/components/tools/repair').then(module => module.RepairPDFTool));
const TableOfContentsTool = dynamic(() => import('@/components/tools/table-of-contents').then(module => module.TableOfContentsTool));
const TextColorTool = dynamic(() => import('@/components/tools/text-color').then(module => module.TextColorTool));
const PDFToDocxTool = dynamic(() => import('@/components/tools/pdf-to-docx').then(module => module.PDFToDocxTool));
const PDFToPptxTool = dynamic(() => import('@/components/tools/pdf-to-pptx').then(module => module.PDFToPptxTool));
const PDFToExcelTool = dynamic(() => import('@/components/tools/pdf-to-excel').then(module => module.PDFToExcelTool));
const RotateCustomTool = dynamic(() => import('@/components/tools/rotate-custom/RotateCustomTool').then(module => module.RotateCustomTool));
const OverlayPDFTool = dynamic(() => import('@/components/tools/overlay/OverlayPDFTool').then(module => module.OverlayPDFTool));
const TimestampPDFTool = dynamic(() => import('@/components/tools/timestamp/TimestampPDFTool').then(module => module.TimestampPDFTool));
const AddPageLabelsTool = dynamic(() => import('@/components/tools/page-labels/AddPageLabelsTool').then(module => module.AddPageLabelsTool));
const WordToPDFTool = dynamic(() => import('@/components/tools/word-to-pdf').then(module => module.WordToPDFTool));
const ExcelToPDFTool = dynamic(() => import('@/components/tools/excel-to-pdf').then(module => module.ExcelToPDFTool));
const PPTXToPDFTool = dynamic(() => import('@/components/tools/pptx-to-pdf').then(module => module.PPTXToPDFTool));
const XPSToPDFTool = dynamic(() => import('@/components/tools/xps-to-pdf').then(module => module.XPSToPDFTool));
const RTFToPDFTool = dynamic(() => import('@/components/tools/rtf-to-pdf').then(module => module.RTFToPDFTool));
const EPUBToPDFTool = dynamic(() => import('@/components/tools/epub-to-pdf').then(module => module.EPUBToPDFTool));
const MOBIToPDFTool = dynamic(() => import('@/components/tools/mobi-to-pdf').then(module => module.MOBIToPDFTool));
const FB2ToPDFTool = dynamic(() => import('@/components/tools/fb2-to-pdf').then(module => module.FB2ToPDFTool));
const DJVUToPDFTool = dynamic(() => import('@/components/tools/djvu-to-pdf').then(module => module.DJVUToPDFTool));
const PDFToSVGTool = dynamic(() => import('@/components/tools/pdf-to-svg').then(module => module.PDFToSVGTool));
const PDFToMarkdownTool = dynamic(() => import('@/components/tools/pdf-to-markdown').then(module => module.PDFToMarkdownTool));
const DeskewPDFTool = dynamic(() => import('@/components/tools/deskew').then(module => module.DeskewPDFTool));
const PDFBookletTool = dynamic(() => import('@/components/tools/pdf-booklet').then(module => module.PDFBookletTool));
const RasterizePDFTool = dynamic(() => import('@/components/tools/rasterize').then(module => module.RasterizePDFTool));
const MarkdownToPDFTool = dynamic(() => import('@/components/tools/markdown-to-pdf').then(module => module.MarkdownToPDFTool));
const EmailToPDFTool = dynamic(() => import('@/components/tools/email-to-pdf').then(module => module.EmailToPDFTool));
const CBZToPDFTool = dynamic(() => import('@/components/tools/cbz-to-pdf').then(module => module.CBZToPDFTool));
const PDFToCBZTool = dynamic(() => import('@/components/tools/pdf-to-cbz/PDFToCBZTool').then(module => module.PDFToCBZTool));
const PDFToTIFFTool = dynamic(() => import('@/components/tools/pdf-to-tiff/PDFToTIFFTool').then(module => module.PDFToTIFFTool));
const PDFToPDFATool = dynamic(() => import('@/components/tools/pdf-to-pdfa').then(module => module.PDFToPDFATool));
const FontToOutlineTool = dynamic(() => import('@/components/tools/font-to-outline').then(module => module.FontToOutlineTool));
const ExtractTablesTool = dynamic(() => import('@/components/tools/extract-tables').then(module => module.ExtractTablesTool));
const OCGManagerTool = dynamic(() => import('@/components/tools/ocg-manager').then(module => module.OCGManagerTool));
const PDFReaderTool = dynamic(() => import('@/components/tools/pdf-reader').then(module => module.PDFReaderTool));
const DigitalSignPDFTool = dynamic(() => import('@/components/tools/digital-sign').then(module => module.DigitalSignPDFTool));
const ValidateSignatureTool = dynamic(() => import('@/components/tools/validate-signature').then(module => module.ValidateSignatureTool));
const AIPDFReflowerTool = dynamic(() => import('@/components/tools/ai-pdf-reflower/AIPDFReflowerTool').then(module => module.AIPDFReflowerTool));
const CitationLinkerTool = dynamic(() => import('@/components/tools/citation-linker/CitationLinkerTool').then(module => module.CitationLinkerTool));
const PDFVectorExtractorTool = dynamic(() => import('@/components/tools/vector-extractor/PDFVectorExtractorTool').then(module => module.PDFVectorExtractorTool));
const DeepSanitizeTool = dynamic(() => import('@/components/tools/deep-sanitize/DeepSanitizeTool').then(module => module.DeepSanitizeTool));
const BookletFoldingSimulatorTool = dynamic(() => import('@/components/tools/booklet-folding-simulator/BookletFoldingSimulatorTool').then(module => module.BookletFoldingSimulatorTool));
const PDFToSlideTool = dynamic(() => import('@/components/tools/pdf-to-slide/PDFToSlideTool').then(module => module.PDFToSlideTool));
const FormLogicDesignerTool = dynamic(() => import('@/components/tools/form-logic-designer/FormLogicDesignerTool').then(module => module.FormLogicDesignerTool));
const EinkOptimizerTool = dynamic(() => import('@/components/tools/eink-optimizer/EinkOptimizerTool').then(module => module.EinkOptimizerTool));
const CertCryptorTool = dynamic(() => import('@/components/tools/cert-cryptor/CertCryptorTool').then(module => module.CertCryptorTool));
const PassportIdComposerTool = dynamic(() => import('@/components/tools/passport-id-composer/PassportIdComposerTool').then(module => module.PassportIdComposerTool));
const AnnotationExporterTool = dynamic(() => import('@/components/tools/annotation-exporter/AnnotationExporterTool').then(module => module.AnnotationExporterTool));
const BatchWatermarkRemoverTool = dynamic(() => import('@/components/tools/batch-watermark-remover/BatchWatermarkRemoverTool').then(module => module.BatchWatermarkRemoverTool));
const SmartDataRedactorTool = dynamic(() => import('@/components/tools/smart-data-redactor/SmartDataRedactorTool').then(module => module.SmartDataRedactorTool));
const BookmarksAutoGeneratorTool = dynamic(() => import('@/components/tools/bookmarks-auto-generator/BookmarksAutoGeneratorTool').then(module => module.BookmarksAutoGeneratorTool));
const BatchBarcodeInjectorTool = dynamic(() => import('@/components/tools/batch-barcode-injector/BatchBarcodeInjectorTool').then(module => module.BatchBarcodeInjectorTool));
const SignatureInkOptimizerTool = dynamic(() => import('@/components/tools/signature-ink-optimizer/SignatureInkOptimizerTool').then(module => module.SignatureInkOptimizerTool));
const DeadLinkDebuggerTool = dynamic(() => import('@/components/tools/dead-link-debugger/DeadLinkDebuggerTool').then(module => module.DeadLinkDebuggerTool));
const InteractiveTocGeneratorTool = dynamic(() => import('@/components/tools/interactive-toc-generator/InteractiveTocGeneratorTool').then(module => module.InteractiveTocGeneratorTool));
const GlobalInvoiceParserTool = dynamic(() => import('@/components/tools/global-invoice-parser/GlobalInvoiceParserTool').then(module => module.GlobalInvoiceParserTool));
const PdfDeskewAlignerTool = dynamic(() => import('@/components/tools/pdf-deskew-aligner/PdfDeskewAlignerTool').then(module => module.PdfDeskewAlignerTool));
const PdfTwoColumnReflowerTool = dynamic(() => import('@/components/tools/pdf-two-column-reflower/PdfTwoColumnReflowerTool').then(module => module.PdfTwoColumnReflowerTool));
const PdfPageResizerUniformTool = dynamic(() => import('@/components/tools/pdf-page-resizer-uniform/PdfPageResizerUniformTool').then(module => module.PdfPageResizerUniformTool));
const HandwritingInkContrastBoosterTool = dynamic(() => import('@/components/tools/handwriting-ink-contrast-booster/HandwritingInkContrastBoosterTool').then(module => module.HandwritingInkContrastBoosterTool));
const PdfSpineBookbinderTool = dynamic(() => import('@/components/tools/pdf-spine-bookbinder/PdfSpineBookbinderTool').then(module => module.PdfSpineBookbinderTool));
const PdfSignatureAnchorHelperTool = dynamic(() => import('@/components/tools/pdf-signature-anchor-helper/PdfSignatureAnchorHelperTool').then(module => module.PdfSignatureAnchorHelperTool));
const PdfLosslessSlicerTool = dynamic(() => import('@/components/tools/pdf-lossless-slicer/PdfLosslessSlicerTool').then(module => module.PdfLosslessSlicerTool));
const PdfScratchpadCanvasTool = dynamic(() => import('@/components/tools/pdf-scratchpad-canvas/PdfScratchpadCanvasTool').then(module => module.PdfScratchpadCanvasTool));
const PhotoTilingPrepressTool = dynamic(() => import('@/components/tools/photo-tiling-prepress/PhotoTilingPrepressTool').then(module => module.PhotoTilingPrepressTool));

/** Each route renders its own tool while preserving server-rendered markup. */
export function ToolInterface({ toolId }: { toolId: string }) {
  const t = useTranslations();
  switch (toolId) {
      case 'merge-pdf':
        return <MergePDFTool />;
      case 'split-pdf':
        return <SplitPDFTool />;
      case 'delete-pages':
        return <DeletePagesTool />;
      case 'rotate-pdf':
        return <RotatePDFTool />;
      case 'rotate-custom':
        return <RotateCustomTool />;
      case 'overlay-pdf':
        return <OverlayPDFTool />;
      case 'add-page-labels':
        return <AddPageLabelsTool />;
      case 'timestamp-pdf':
        return <TimestampPDFTool />;
      case 'add-blank-page':
        return <AddBlankPageTool />;
      case 'reverse-pages':
        return <ReversePagesTool />;
      case 'n-up-pdf':
        return <NUpPDFTool />;
      case 'grid-combine':
        return <GridCombineTool />;
      case 'alternate-merge':
        return <AlternateMergeTool />;
      case 'divide-pages':
        return <DividePagesTool />;
      case 'combine-single-page':
        return <CombineSinglePageTool />;
      case 'posterize-pdf':
        return <PosterizePDFTool />;
      case 'pdf-multi-tool':
        return <PDFMultiTool />;
      case 'add-attachments':
        return <AddAttachmentsTool />;
      case 'extract-attachments':
        return <ExtractAttachmentsTool />;
      case 'extract-images':
        return <ExtractImagesTool />;
      case 'edit-attachments':
        return <EditAttachmentsTool />;
      case 'view-metadata':
        return <ViewMetadataTool />;
      case 'edit-metadata':
        return <EditMetadataTool />;
      case 'pdf-to-zip':
        return <PDFsToZipTool />;
      case 'compare-pdfs':
        return <ComparePDFsTool />;
      case 'edit-pdf':
        return <EditPDFTool />;
      // Convert to PDF tools
      case 'image-to-pdf':
        return <ImageToPDFTool />;
      case 'jpg-to-pdf':
        return <ImageToPDFTool imageType="jpg" />;
      case 'png-to-pdf':
        return <ImageToPDFTool imageType="png" />;
      case 'webp-to-pdf':
        return <ImageToPDFTool imageType="webp" />;
      case 'bmp-to-pdf':
        return <ImageToPDFTool imageType="bmp" />;
      case 'tiff-to-pdf':
        return <ImageToPDFTool imageType="tiff" />;
      case 'svg-to-pdf':
        return <ImageToPDFTool imageType="svg" />;
      case 'heic-to-pdf':
        return <ImageToPDFTool imageType="heic" />;
      case 'psd-to-pdf':
        return <PSDToPDFTool />;
      case 'txt-to-pdf':
        return <TextToPDFTool />;
      case 'json-to-pdf':
        return <JSONToPDFTool />;
      // Optimize & Repair tools
      case 'compress-pdf':
        return <CompressPDFTool />;
      case 'sign-pdf':
        return <SignPDFTool />;
      case 'crop-pdf':
        return <CropPDFTool />;
      case 'fix-page-size':
        return <FixPageSizeTool />;
      case 'organize-pdf':
        return <OrganizePDFTool />;
      case 'extract-pages':
        return <ExtractPagesTool />;
      case 'bookmark':
        return <BookmarkTool />;
      case 'page-numbers':
        return <PageNumbersTool />;
      case 'add-watermark':
        return <WatermarkTool />;
      case 'header-footer':
        return <HeaderFooterTool />;
      case 'invert-colors':
        return <InvertColorsTool />;
      case 'background-color':
        return <BackgroundColorTool />;
      case 'text-color':
        return <TextColorTool />;
      case 'table-of-contents':
        return <TableOfContentsTool />;
      case 'add-stamps':
        return <StampsTool />;
      case 'remove-annotations':
        return <RemoveAnnotationsTool />;
      case 'form-filler':
        return <FormFillerTool />;
      case 'form-creator':
        return <FormCreatorTool />;
      case 'remove-blank-pages':
        return <RemoveBlankPagesTool />;
      case 'pdf-to-jpg':
        return <PDFToImageTool outputFormat="jpg" />;
      case 'pdf-to-png':
        return <PDFToImageTool outputFormat="png" />;
      case 'pdf-to-webp':
        return <PDFToImageTool outputFormat="webp" />;
      case 'pdf-to-bmp':
        return <PDFToImageTool outputFormat="bmp" />;
      case 'pdf-to-tiff':
        return <PDFToTIFFTool />;
      case 'pdf-to-svg':
        return <PDFToSVGTool />;
      case 'pdf-to-greyscale':
        return <PDFToGreyscaleTool />;
      case 'pdf-to-json':
        return <PDFToJSONTool />;
      case 'pdf-to-docx':
        return <PDFToDocxTool />;
      case 'pdf-to-pptx':
        return <PDFToPptxTool />;
      case 'pdf-to-excel':
        return <PDFToExcelTool />;
      case 'pdf-to-markdown':
        return <PDFToMarkdownTool />;
      case 'ocr-pdf':
        return <OCRPDFTool />;
      case 'linearize-pdf':
        return <LinearizePDFTool />;
      case 'page-dimensions':
        return <PageDimensionsTool />;
      case 'remove-restrictions':
        return <RemoveRestrictionsTool />;
      case 'repair-pdf':
        return <RepairPDFTool />;
      case 'encrypt-pdf':
        return <EncryptPDFTool />;
      case 'decrypt-pdf':
        return <DecryptPDFTool />;
      case 'sanitize-pdf':
        return <SanitizePDFTool />;
      case 'find-and-redact':
        return <FindAndRedactTool />;
      case 'redact-pdf':
        return <RedactPDFTool />;
      case 'flatten-pdf':
        return <FlattenPDFTool />;
      case 'remove-metadata':
        return <RemoveMetadataTool />;
      case 'change-permissions':
        return <ChangePermissionsTool />;
      // Office to PDF conversion tools
      case 'word-to-pdf':
        return <WordToPDFTool />;
      case 'excel-to-pdf':
        return <ExcelToPDFTool />;
      case 'pptx-to-pdf':
        return <PPTXToPDFTool />;
      case 'xps-to-pdf':
        return <XPSToPDFTool />;
      case 'rtf-to-pdf':
        return <RTFToPDFTool />;
      case 'epub-to-pdf':
        return <EPUBToPDFTool />;
      case 'mobi-to-pdf':
        return <MOBIToPDFTool />;
      case 'fb2-to-pdf':
        return <FB2ToPDFTool />;
      case 'djvu-to-pdf':
        return <DJVUToPDFTool />;
      // New tools
      case 'deskew-pdf':
        return <DeskewPDFTool />;
      case 'pdf-booklet':
        return <PDFBookletTool />;
      case 'rasterize-pdf':
        return <RasterizePDFTool />;
      case 'markdown-to-pdf':
        return <MarkdownToPDFTool />;
      case 'email-to-pdf':
        return <EmailToPDFTool />;
      case 'cbz-to-pdf':
        return <CBZToPDFTool />;
      case 'pdf-to-cbz':
        return <PDFToCBZTool />;
      case 'pdf-to-pdfa':
        return <PDFToPDFATool />;
      case 'font-to-outline':
        return <FontToOutlineTool />;
      case 'extract-tables':
        return <ExtractTablesTool />;
      case 'ocg-manager':
        return <OCGManagerTool />;
      case 'pdf-reader':
        return <PDFReaderTool />;
      case 'digital-sign-pdf':
        return <DigitalSignPDFTool />;
      case 'validate-signature':
        return <ValidateSignatureTool />;
      case 'ai-pdf-reflower':
        return <AIPDFReflowerTool />;
      case 'citation-linker':
        return <CitationLinkerTool />;
      case 'vector-extractor':
        return <PDFVectorExtractorTool />;
      case 'deep-sanitize':
        return <DeepSanitizeTool />;
      case 'booklet-folding-simulator':
        return <BookletFoldingSimulatorTool />;
      case 'pdf-to-slide':
        return <PDFToSlideTool />;
      case 'form-logic-designer':
        return <FormLogicDesignerTool />;
      case 'eink-optimizer':
        return <EinkOptimizerTool />;
      case 'cert-cryptor':
        return <CertCryptorTool />;
      case 'passport-id-composer':
        return <PassportIdComposerTool />;
      case 'annotation-exporter':
        return <AnnotationExporterTool />;
      case 'batch-watermark-remover':
        return <BatchWatermarkRemoverTool />;
      case 'smart-data-redactor':
        return <SmartDataRedactorTool />;
      case 'bookmarks-auto-generator':
        return <BookmarksAutoGeneratorTool />;
      case 'batch-barcode-injector':
        return <BatchBarcodeInjectorTool />;
      case 'signature-ink-optimizer':
        return <SignatureInkOptimizerTool />;
      case 'dead-link-debugger':
        return <DeadLinkDebuggerTool />;
      case 'interactive-toc-generator':
        return <InteractiveTocGeneratorTool />;
      case 'global-invoice-parser':
        return <GlobalInvoiceParserTool />;
      case 'pdf-deskew-aligner':
        return <PdfDeskewAlignerTool />;
      case 'pdf-two-column-reflower':
        return <PdfTwoColumnReflowerTool />;
      case 'pdf-page-resizer-uniform':
        return <PdfPageResizerUniformTool />;
      case 'handwriting-ink-contrast-booster':
        return <HandwritingInkContrastBoosterTool />;
      case 'pdf-spine-bookbinder':
        return <PdfSpineBookbinderTool />;
      case 'pdf-signature-anchor-helper':
        return <PdfSignatureAnchorHelperTool />;
      case 'pdf-lossless-slicer':
        return <PdfLosslessSlicerTool />;
      case 'pdf-scratchpad-canvas':
        return <PdfScratchpadCanvasTool />;
      case 'photo-tiling-prepress':
        return <PhotoTilingPrepressTool />;
      // Add more tool cases here as they are implemented
      default:
        return (
          <div className="p-8 text-center text-muted-foreground">
            <p>{t('tools.comingSoon')}</p>
          </div>
        );
    }
}
