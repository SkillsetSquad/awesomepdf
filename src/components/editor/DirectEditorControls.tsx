'use client';

import { useEffect, useRef, useState, type ComponentProps } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { ALargeSmall, AlignCenter, AlignCenterHorizontal, AlignCenterVertical, AlignEndVertical, AlignJustify, AlignLeft, AlignRight, AlignStartVertical, ArrowDownToLine, ArrowLeft, ArrowUpToLine, Bold, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ChevronsDown, ChevronsUp, CircleMinus, CirclePlus, Clipboard, Columns2, Copy, Download, ExternalLink, FlipHorizontal, FlipVertical, FolderOpen, Image as ImageIcon, IndentDecrease, IndentIncrease, Info, Italic, List, ListOrdered, PanelRight, Pencil, Redo2, RotateCcw, RotateCw, Rows2, Scan, Search, SlidersHorizontal, Strikethrough, Subscript, Superscript, Tag, TextCursorInput, Trash2, Underline, Undo2, X } from 'lucide-react';
import { EditorEditMenu, EditorZoomMenu, EditorDocumentDialog } from './EditorMenus';
import { EditorNotifications } from './EditorNotifications';
import { EditorPanelToggle } from './EditorPanelToggle';
import { EditorInputDialog } from './EditorInputDialog';
import { withBasePath } from '@/lib/utils/path';

// Keep native input IDs and change events for the existing browser-only editor engine.
function EditorCheckbox({ id, defaultChecked = false, ...props }: ComponentProps<typeof Checkbox> & { defaultChecked?: boolean }) {
  const input = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(defaultChecked);
  return <>
    <input ref={input} id={id} type="checkbox" hidden defaultChecked={defaultChecked} />
    <Checkbox id={id + '-control'} checked={checked} {...props} onCheckedChange={value => {
      const next = value === true;
      setChecked(next);
      if (input.current) { input.current.checked = next; input.current.dispatchEvent(new Event('change', { bubbles: true })); }
    }} />
  </>;
}

export interface DirectEditorControlsProps { labels: Record<string, string>; locale: string; }

export function DirectEditorControls({ labels, locale }: DirectEditorControlsProps) {
  const label = (key: string, fallback: string) => labels[key.replace('tools:editPdfText.', '')] ?? fallback;
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    if (document.getElementById('direct-editor-engine')) return;
    const script = document.createElement('script');
    script.id = 'direct-editor-engine';
    script.type = 'module';
    script.src = withBasePath('/direct-pdf-editor/main.js');
    document.body.appendChild(script);
  }, [locale]);
  return (
    <div id="text-editor-app">
      <div id="toolbar">
        <div className="tgroup">
          <Button id="exitEditor" className="btn icon" title={label("tools:editPdfText.tipBackToUpload","Back to upload")} data-i18n-title="tools:editPdfText.tipBackToUpload" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipBackToUpload","Back to upload")}>
            <ArrowLeft aria-hidden="true" className="size-4" />
          </Button>
          <Button className="btn" title={label("tools:editPdfText.tipOpenAnotherPdf","Open another PDF")} data-i18n-title="tools:editPdfText.tipOpenAnotherPdf" variant="ghost" size="sm" aria-label={label("tools:editPdfText.tipOpenAnotherPdf","Open another PDF")} onClick={() => document.getElementById("file")?.click()}>
            <FolderOpen aria-hidden="true" className="size-4" />
            <span data-i18n="tools:editPdfText.open">
              {label("tools:editPdfText.open","Open")}
            </span>
          </Button>
          <input id="file" type="file" accept="application/pdf" hidden={true} />
          <Button id="save" className="btn" disabled={true} title={label("tools:editPdfText.tipExportS","Export (⌘S)")} data-i18n-title="tools:editPdfText.tipExportS" variant="default" size="sm" aria-label={label("tools:editPdfText.tipExportS","Export (⌘S)")}>
            <Download aria-hidden="true" className="size-4" />
            <span data-i18n="tools:editPdfText.export">
              {label("tools:editPdfText.export","Export")}
            </span>
          </Button>
          <Button id="undo" className="btn icon" disabled={true} hidden={true} title={label("tools:editPdfText.tipUndoZ","Undo (⌘Z)")} data-i18n-title="tools:editPdfText.tipUndoZ" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipUndoZ","Undo (⌘Z)")}>
            <Undo2 aria-hidden="true" className="size-4" />
          </Button>
          <Button id="redo" className="btn icon" disabled={true} hidden={true} title={label("tools:editPdfText.tipRedoZ","Redo (⇧⌘Z)")} data-i18n-title="tools:editPdfText.tipRedoZ" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipRedoZ","Redo (⇧⌘Z)")}>
            <Redo2 aria-hidden="true" className="size-4" />
          </Button>
        </div>
        <Button id="docName" className="docname" hidden={true} title={label("tools:editPdfText.tipFileDetails","File details")} data-i18n-title="tools:editPdfText.tipFileDetails" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipFileDetails","File details")}>
        </Button>
        <span className="sep">
        </span>
        <div id="tools" className="segmented">
          <EditorEditMenu locale={locale} labels={labels}><Button data-tool="edit" className="on" title={label("tools:editPdfText.tipEditExistingContent","Edit existing content")} data-i18n-title="tools:editPdfText.tipEditExistingContent" variant="ghost" size="sm" aria-label={label("tools:editPdfText.tipEditExistingContent","Edit existing content")}>
            <Pencil aria-hidden="true" className="size-4" />
            <span id="editLabel">
              {"Edit All"}
            </span>
            <ChevronDown aria-hidden="true" className="editcaret size-4" />
          </Button></EditorEditMenu>
          <NativeSelect id="editScope" hidden={true} title={label("tools:editPdfText.tipWhatTheEditToolTouchesNarrowTheScopeOnBus","What the Edit tool touches: narrow the scope on busy pages")} data-i18n-title="tools:editPdfText.tipWhatTheEditToolTouchesNarrowTheScopeOnBus" aria-label={label("tools:editPdfText.tipWhatTheEditToolTouchesNarrowTheScopeOnBus","What the Edit tool touches: narrow the scope on busy pages")} defaultValue="all">
            <NativeSelectOption value="all" data-i18n="tools:editPdfText.filterAll">
              {label("tools:editPdfText.filterAll","All")}
            </NativeSelectOption>
            <NativeSelectOption value="text" data-i18n="tools:editPdfText.filterText">
              {label("tools:editPdfText.filterText","Text")}
            </NativeSelectOption>
            <NativeSelectOption value="image" data-i18n="tools:editPdfText.filterImages">
              {label("tools:editPdfText.filterImages","Images")}
            </NativeSelectOption>
            <NativeSelectOption value="shape" data-i18n="tools:editPdfText.filterShapes">
              {label("tools:editPdfText.filterShapes","Shapes")}
            </NativeSelectOption>
          </NativeSelect>
          <Button data-tool="addText" title={label("tools:editPdfText.tipClickThePageToAddATextBox","Click the page to add a text box")} data-i18n-title="tools:editPdfText.tipClickThePageToAddATextBox" variant="ghost" size="sm" aria-label={label("tools:editPdfText.tipClickThePageToAddATextBox","Click the page to add a text box")}>
            <TextCursorInput aria-hidden="true" className="size-4" />
            <span data-i18n="tools:editPdfText.addText">
              {label("tools:editPdfText.addText","Add Text")}
            </span>
          </Button>
        </div>
        <input id="imgFile" type="file" accept="image/*" hidden={true} />
        <div className="tgroup viewopts" hidden={true}>
          <Label className="chk" htmlFor="spellchk-control">
            <EditorCheckbox id="spellchk" />
            {"Spelling"}
          </Label>
          <NativeSelect id="spellLang" title={label("tools:editPdfText.tipSpellCheckLanguage","Spell-check language")} data-i18n-title="tools:editPdfText.tipSpellCheckLanguage" aria-label={label("tools:editPdfText.tipSpellCheckLanguage","Spell-check language")} defaultValue="">
            <NativeSelectOption value="" data-i18n="tools:editPdfText.langAuto">
              {label("tools:editPdfText.langAuto","Auto")}
            </NativeSelectOption>
            <NativeSelectOption value="en">
              {"English (US)"}
            </NativeSelectOption>
            <NativeSelectOption value="en-GB">
              {"English (UK)"}
            </NativeSelectOption>
            <NativeSelectOption value="de">
              {"Deutsch"}
            </NativeSelectOption>
            <NativeSelectOption value="fr">
              {"Français"}
            </NativeSelectOption>
            <NativeSelectOption value="es">
              {"Español"}
            </NativeSelectOption>
            <NativeSelectOption value="it">
              {"Italiano"}
            </NativeSelectOption>
            <NativeSelectOption value="pt">
              {"Português"}
            </NativeSelectOption>
            <NativeSelectOption value="ar">
              {"العربية"}
            </NativeSelectOption>
            <NativeSelectOption value="hi">
              {"हिन्दी"}
            </NativeSelectOption>
          </NativeSelect>
          <Label className="chk" htmlFor="rulersChk-control">
            <EditorCheckbox id="rulersChk" />
            {"Rulers"}
          </Label>
        </div>
        <span id="info" className="info">
        </span>
        <div className="tgroup toolright">
          <Button id="find" className="btn icon" title={label("tools:editPdfText.tipFindAndReplace","Find & replace")} data-i18n-title="tools:editPdfText.tipFindAndReplace" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipFindAndReplace","Find & replace")}>
            <Search aria-hidden="true" className="size-4" />
          </Button>
          <Button id="addImage" className="btn icon" title={label("tools:editPdfText.tipAddAnImage","Add an image")} data-i18n-title="tools:editPdfText.tipAddAnImage" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipAddAnImage","Add an image")}>
            <ImageIcon aria-hidden="true" className="size-4" />
          </Button>
          <Button id="copyText" className="btn icon" hidden={true} title={label("tools:editPdfText.tipCopyThisPageSTextInReadingOrder","Copy this page's text in reading order")} data-i18n-title="tools:editPdfText.tipCopyThisPageSTextInReadingOrder" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipCopyThisPageSTextInReadingOrder","Copy this page's text in reading order")}>
            <Clipboard aria-hidden="true" className="size-4" />
          </Button>
          <Button id="spellPage" className="btn icon" hidden={true} title={label("tools:editPdfText.tipCheckTheSpellingOfThisPage","Check the spelling of this page")} data-i18n-title="tools:editPdfText.tipCheckTheSpellingOfThisPage" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipCheckTheSpellingOfThisPage","Check the spelling of this page")}>
            <ALargeSmall aria-hidden="true" className="size-4" />
          </Button>
          <span className="sep">
          </span>
          <EditorPanelToggle><Button id="toggleInspector" className="btn icon" title={label("tools:editPdfText.tipShowOrHideTheFormatPanel","Show or hide the format panel")} data-i18n-title="tools:editPdfText.tipShowOrHideTheFormatPanel" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipShowOrHideTheFormatPanel","Show or hide the format panel")}>
            <PanelRight aria-hidden="true" className="size-4" />
          </Button></EditorPanelToggle>
        </div>
      </div>
      <div id="spellbar" hidden={true}>
        <ALargeSmall aria-hidden="true" className="barlead size-4" />
        <span id="spellWord" className="info">
        </span>
        <Input id="spellFix" placeholder={label("tools:editPdfText.phReplaceWith","Replace with")} data-i18n-placeholder="tools:editPdfText.phReplaceWith" />
        <Button id="spellChange" className="btn" data-i18n="tools:editPdfText.change" variant="ghost" size="sm">
          {label("tools:editPdfText.change","Change")}
        </Button>
        <Button id="spellIgnore" className="btn" data-i18n="tools:editPdfText.ignore" variant="ghost" size="sm">
          {label("tools:editPdfText.ignore","Ignore")}
        </Button>
        <Button id="spellAdd" className="btn" title={label("tools:editPdfText.tipAddToYourDictionary","Add to your dictionary")} data-i18n="common.add" data-i18n-title="tools:editPdfText.tipAddToYourDictionary" variant="ghost" size="sm" aria-label={label("tools:editPdfText.tipAddToYourDictionary","Add to your dictionary")}>
          {label("common.add","Add")}
        </Button>
        <Button id="spellNext" className="btn" data-i18n="tools:editPdfText.next" variant="ghost" size="sm">
          {label("tools:editPdfText.next","Next")}
        </Button>
        <span id="spellStatus" className="info">
        </span>
        <Button id="spellDone" className="btn icon" title={label("tools:editPdfText.tipClose","Close")} data-i18n-title="tools:editPdfText.tipClose" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipClose","Close")}>
          <X aria-hidden="true" className="size-4" />
        </Button>
      </div>
      <div id="main">
        <div id="findbar" hidden={true}>
          <div className="findhead">
            <span className="findtitle">
              <Search aria-hidden="true" className="barlead size-4" />
              {"Find & Replace"}
            </span>
            <Button id="findDone" className="btn icon" title={label("tools:editPdfText.tipClose","Close")} data-i18n-title="tools:editPdfText.tipClose" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipClose","Close")}>
              <X aria-hidden="true" className="size-4" />
            </Button>
          </div>
          <div className="findfield">
            <Input id="findText" placeholder={label("tools:editPdfText.phFind","Find")} data-i18n-placeholder="tools:editPdfText.phFind" />
            <Button id="findPrev" className="btn icon" title={label("tools:editPdfText.tipPreviousMatch","Previous match")} data-i18n-title="tools:editPdfText.tipPreviousMatch" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipPreviousMatch","Previous match")}>
              <ChevronUp aria-hidden="true" className="size-4" />
            </Button>
            <Button id="findNext" className="btn icon" title={label("tools:editPdfText.tipNextMatch","Next match")} data-i18n-title="tools:editPdfText.tipNextMatch" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipNextMatch","Next match")}>
              <ChevronDown aria-hidden="true" className="size-4" />
            </Button>
          </div>
          <Input id="replText" placeholder={label("tools:editPdfText.phReplaceWith","Replace with")} data-i18n-placeholder="tools:editPdfText.phReplaceWith" />
          <div className="findrow">
            <Button id="replOne" className="btn grow" data-i18n="tools:editPdfText.replace" variant="ghost" size="sm">
              {label("tools:editPdfText.replace","Replace")}
            </Button>
            <Button id="replAll" className="btn grow" data-i18n="tools:editPdfText.replaceAll" variant="ghost" size="sm">
              {label("tools:editPdfText.replaceAll","Replace All")}
            </Button>
          </div>
          <Label className="chk" htmlFor="caseSens-control">
            <EditorCheckbox id="caseSens" />
            {"Match case"}
          </Label>
          <Label className="chk" htmlFor="wholeWord-control">
            <EditorCheckbox id="wholeWord" />
            {"Whole word"}
          </Label>
          <Label className="chk" htmlFor="noAccents-control">
            <EditorCheckbox id="noAccents" />
            {"Ignore accents"}
          </Label>
          <span id="findStatus" className="findstatus">
          </span>
        </div>
        <div id="stage">
          <Card id="empty" className="gap-3 text-center">
            <h2 data-i18n="tools:editPdfText.name">
              {label("tools:editPdfText.name","Edit PDF Text")}
            </h2>
            <p data-i18n="tools:editPdfText.emptyState">
              {label("tools:editPdfText.emptyState","Open a PDF to edit its text, images and shapes.")}
            </p>
            <Button className="btn big" data-i18n="tools:editPdfText.choosePdf" onClick={() => document.getElementById("file")?.click()}>
              {label("tools:editPdfText.choosePdf","Choose a PDF…")}
            </Button>
            <p className="hint">
              {"Everything runs locally in your browser, and nothing is uploaded."}
            </p>
          </Card>
          <div id="pageWrap" hidden={true}>
            <canvas id="page">
            </canvas>
            <div id="overlay">
            </div>
          </div>
        </div>
        <div id="zoomHud" hidden={true}>
        </div>
        <div id="contextbar">
          <div className="tgroup">
            <Button id="rotL" className="btn icon objbtn" hidden={true} title={label("tools:editPdfText.tipRotateLeft90","Rotate left 90°")} data-i18n-title="tools:editPdfText.tipRotateLeft90" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipRotateLeft90","Rotate left 90°")}>
              <RotateCcw aria-hidden="true" className="size-4" />
            </Button>
            <Button id="rotR" className="btn icon objbtn" hidden={true} title={label("tools:editPdfText.tipRotateRight90","Rotate right 90°")} data-i18n-title="tools:editPdfText.tipRotateRight90" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipRotateRight90","Rotate right 90°")}>
              <RotateCw aria-hidden="true" className="size-4" />
            </Button>
            <Button id="flipH" className="btn icon objbtn" hidden={true} title={label("tools:editPdfText.tipFlipHorizontal","Flip horizontal")} data-i18n-title="tools:editPdfText.tipFlipHorizontal" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipFlipHorizontal","Flip horizontal")}>
              <FlipHorizontal aria-hidden="true" className="size-4" />
            </Button>
            <Button id="flipV" className="btn icon objbtn" hidden={true} title={label("tools:editPdfText.tipFlipVertical","Flip vertical")} data-i18n-title="tools:editPdfText.tipFlipVertical" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipFlipVertical","Flip vertical")}>
              <FlipVertical aria-hidden="true" className="size-4" />
            </Button>
            <span className="sep objsep" hidden={true}>
            </span>
            <Button id="replImg" className="btn icon objbtn" hidden={true} title={label("tools:editPdfText.tipReplaceThisImageKeepingItsPlacement","Replace this image, keeping its placement")} data-i18n-title="tools:editPdfText.tipReplaceThisImageKeepingItsPlacement" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipReplaceThisImageKeepingItsPlacement","Replace this image, keeping its placement")}>
              <ImageIcon aria-hidden="true" className="size-4" />
            </Button>
            <Button id="extEdit" className="btn icon objbtn" hidden={true} title="Save this image as a PNG, edit it in any app; saved changes re-import automatically" variant="ghost" size="icon-sm" aria-label={label("","Save this image as a PNG, edit it in any app; saved changes re-import automatically")}>
              <ExternalLink aria-hidden="true" className="size-4" />
            </Button>
            <Button id="altText" className="btn icon objbtn" hidden={true} title={label("tools:editPdfText.tipAlternateTextForAccessibilityTaggedPdfs","Alternate text for accessibility (tagged PDFs)")} data-i18n-title="tools:editPdfText.tipAlternateTextForAccessibilityTaggedPdfs" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipAlternateTextForAccessibilityTaggedPdfs","Alternate text for accessibility (tagged PDFs)")}>
              <Tag aria-hidden="true" className="size-4" />
            </Button>
            <input id="replImgFile" type="file" accept="image/*" hidden={true} />
            <span className="sep objsep" hidden={true}>
            </span>
            <Button id="front" className="btn icon objbtn" hidden={true} title={label("tools:editPdfText.tipBringToFront","Bring to front")} data-i18n-title="tools:editPdfText.tipBringToFront" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipBringToFront","Bring to front")}>
              <ArrowUpToLine aria-hidden="true" className="size-4" />
            </Button>
            <Button id="back" className="btn icon objbtn" hidden={true} title={label("tools:editPdfText.tipSendToBack","Send to back")} data-i18n-title="tools:editPdfText.tipSendToBack" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipSendToBack","Send to back")}>
              <ArrowDownToLine aria-hidden="true" className="size-4" />
            </Button>
            <Button id="dupe" className="btn icon objbtn" hidden={true} title={label("tools:editPdfText.tipDuplicate","Duplicate")} data-i18n-title="tools:editPdfText.tipDuplicate" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipDuplicate","Duplicate")}>
              <Copy aria-hidden="true" className="size-4" />
            </Button>
            <Button id="del" className="btn icon objbtn" hidden={true} title={label("tools:editPdfText.tipDelete","Delete")} data-i18n-title="tools:editPdfText.tipDelete" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipDelete","Delete")}>
              <Trash2 aria-hidden="true" className="size-4" />
            </Button>
          </div>
          <div id="alignTools" className="segmented" hidden={true}>
            <Button data-al="left" title={label("tools:editPdfText.tipAlignLeftEdges","Align left edges")} data-i18n-title="tools:editPdfText.tipAlignLeftEdges" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipAlignLeftEdges","Align left edges")}>
              <AlignLeft aria-hidden="true" className="size-4" />
            </Button>
            <Button data-al="hcenter" title={label("tools:editPdfText.tipAlignHorizontalCenters","Align horizontal centers")} data-i18n-title="tools:editPdfText.tipAlignHorizontalCenters" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipAlignHorizontalCenters","Align horizontal centers")}>
              <AlignCenterHorizontal aria-hidden="true" className="size-4" />
            </Button>
            <Button data-al="right" title={label("tools:editPdfText.tipAlignRightEdges","Align right edges")} data-i18n-title="tools:editPdfText.tipAlignRightEdges" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipAlignRightEdges","Align right edges")}>
              <AlignRight aria-hidden="true" className="size-4" />
            </Button>
            <Button data-al="top" title={label("tools:editPdfText.tipAlignTops","Align tops")} data-i18n-title="tools:editPdfText.tipAlignTops" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipAlignTops","Align tops")}>
              <AlignStartVertical aria-hidden="true" className="size-4" />
            </Button>
            <Button data-al="vcenter" title={label("tools:editPdfText.tipAlignVerticalCenters","Align vertical centers")} data-i18n-title="tools:editPdfText.tipAlignVerticalCenters" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipAlignVerticalCenters","Align vertical centers")}>
              <AlignCenterVertical aria-hidden="true" className="size-4" />
            </Button>
            <Button data-al="bottom" title={label("tools:editPdfText.tipAlignBottoms","Align bottoms")} data-i18n-title="tools:editPdfText.tipAlignBottoms" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipAlignBottoms","Align bottoms")}>
              <AlignEndVertical aria-hidden="true" className="size-4" />
            </Button>
            <Button data-al="disth" title={label("tools:editPdfText.tipDistributeHorizontally","Distribute horizontally")} data-i18n-title="tools:editPdfText.tipDistributeHorizontally" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipDistributeHorizontally","Distribute horizontally")}>
              <Columns2 aria-hidden="true" className="size-4" />
            </Button>
            <Button data-al="distv" title={label("tools:editPdfText.tipDistributeVertically","Distribute vertically")} data-i18n-title="tools:editPdfText.tipDistributeVertically" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipDistributeVertically","Distribute vertically")}>
              <Rows2 aria-hidden="true" className="size-4" />
            </Button>
          </div>
        </div>
        <Card id="inspector" hidden={true}>
          <h2>
            <SlidersHorizontal aria-hidden="true" className="size-4" />
            {"Format"}
          </h2>
          <h3 className="sect" data-i18n="tools:editPdfText.font">
            {label("tools:editPdfText.font","Font")}
          </h3>
          <div className="row">
            <NativeSelect id="fFamily" aria-label={label("tools:editPdfText.font","Font")}>
            </NativeSelect>
            <Input id="fSize" type="number" min="1" max="400" step="1" className="num" title={label("tools:editPdfText.tipFontSize","Font size")} data-i18n-title="tools:editPdfText.tipFontSize" aria-label={label("tools:editPdfText.tipFontSize","Font size")} />
          </div>
          <div className="row">
            <Button id="sysFonts" className="btn grow" title={label("tools:editPdfText.tipListFontsInstalledOnThisDeviceChromium","List fonts installed on this device (Chromium)")} data-i18n-title="tools:editPdfText.tipListFontsInstalledOnThisDeviceChromium" variant="ghost" size="sm" aria-label={label("tools:editPdfText.tipListFontsInstalledOnThisDeviceChromium","List fonts installed on this device (Chromium)")}>
              <Download aria-hidden="true" className="size-4" />
              <span data-i18n="tools:editPdfText.systemFonts">
                {label("tools:editPdfText.systemFonts","System fonts")}
              </span>
            </Button>
          </div>
          <h3 className="sect" data-i18n="tools:editPdfText.color">
            {label("tools:editPdfText.color","Color")}
          </h3>
          <div className="row swatchrow">
            <div className="swatches" id="fSwatches">
            </div>
            <Input id="fColor" type="color" defaultValue="#000000" title={label("tools:editPdfText.tipCustomTextColor","Custom text color")} data-i18n-title="tools:editPdfText.tipCustomTextColor" aria-label={label("tools:editPdfText.tipCustomTextColor","Custom text color")} />
          </div>
          <h3 className="sect" data-i18n="tools:editPdfText.alignment">
            {label("tools:editPdfText.alignment","Alignment")}
          </h3>
          <div className="row">
            <div className="segmented small grow" id="fAlign">
              <Button data-a="0" title={label("tools:editPdfText.tipAlignLeft","Align left")} data-i18n-title="tools:editPdfText.tipAlignLeft" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipAlignLeft","Align left")}>
                <AlignLeft aria-hidden="true" className="size-4" />
              </Button>
              <Button data-a="1" title={label("tools:editPdfText.tipAlignCenter","Align center")} data-i18n-title="tools:editPdfText.tipAlignCenter" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipAlignCenter","Align center")}>
                <AlignCenter aria-hidden="true" className="size-4" />
              </Button>
              <Button data-a="2" title={label("tools:editPdfText.tipAlignRight","Align right")} data-i18n-title="tools:editPdfText.tipAlignRight" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipAlignRight","Align right")}>
                <AlignRight aria-hidden="true" className="size-4" />
              </Button>
              <Button data-a="3" title={label("tools:editPdfText.tipJustify","Justify")} data-i18n-title="tools:editPdfText.tipJustify" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipJustify","Justify")}>
                <AlignJustify aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </div>
          <h3 className="sect" data-i18n="tools:editPdfText.style">
            {label("tools:editPdfText.style","Style")}
          </h3>
          <div className="row toggles" id="fToggles">
            <Button data-t="bold" title={label("tools:editPdfText.tipBold","Bold")} data-i18n-title="tools:editPdfText.tipBold" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipBold","Bold")}>
              <Bold aria-hidden="true" className="size-4" />
            </Button>
            <Button data-t="italic" title={label("tools:editPdfText.tipItalic","Italic")} data-i18n-title="tools:editPdfText.tipItalic" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipItalic","Italic")}>
              <Italic aria-hidden="true" className="size-4" />
            </Button>
            <Button data-t="underline" title={label("tools:editPdfText.tipUnderline","Underline")} data-i18n-title="tools:editPdfText.tipUnderline" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipUnderline","Underline")}>
              <Underline aria-hidden="true" className="size-4" />
            </Button>
            <Button data-t="strike" title={label("tools:editPdfText.tipStrikethrough","Strikethrough")} data-i18n-title="tools:editPdfText.tipStrikethrough" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipStrikethrough","Strikethrough")}>
              <Strikethrough aria-hidden="true" className="size-4" />
            </Button>
            <Button data-t="sup" title={label("tools:editPdfText.tipSuperscript","Superscript")} data-i18n-title="tools:editPdfText.tipSuperscript" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipSuperscript","Superscript")}>
              <Superscript aria-hidden="true" className="size-4" />
            </Button>
            <Button data-t="sub" title={label("tools:editPdfText.tipSubscript","Subscript")} data-i18n-title="tools:editPdfText.tipSubscript" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipSubscript","Subscript")}>
              <Subscript aria-hidden="true" className="size-4" />
            </Button>
          </div>
          <h3 className="sect" data-i18n="tools:editPdfText.lists">
            {label("tools:editPdfText.lists","Lists")}
          </h3>
          <div className="row">
            <div className="segmented small" id="fList">
              <Button data-l="bullet" title={label("tools:editPdfText.tipToggleBulletedItem","Toggle bulleted item")} data-i18n-title="tools:editPdfText.tipToggleBulletedItem" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipToggleBulletedItem","Toggle bulleted item")}>
                <List aria-hidden="true" className="size-4" />
              </Button>
              <Button data-l="number" title={label("tools:editPdfText.tipToggleNumberedItem","Toggle numbered item")} data-i18n-title="tools:editPdfText.tipToggleNumberedItem" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipToggleNumberedItem","Toggle numbered item")}>
                <ListOrdered aria-hidden="true" className="size-4" />
              </Button>
            </div>
            <NativeSelect id="fMarkerStyle" title={label("tools:editPdfText.tipNumberedListMarkerStyle","Numbered-list marker style")} data-i18n-title="tools:editPdfText.tipNumberedListMarkerStyle" aria-label={label("tools:editPdfText.tipNumberedListMarkerStyle","Numbered-list marker style")} defaultValue="1">
              <NativeSelectOption value="1">
                {"1. 2. 3."}
              </NativeSelectOption>
              <NativeSelectOption value="a">
                {"a. b. c."}
              </NativeSelectOption>
              <NativeSelectOption value="A">
                {"A. B. C."}
              </NativeSelectOption>
              <NativeSelectOption value="i">
                {"i. ii. iii."}
              </NativeSelectOption>
              <NativeSelectOption value="I">
                {"I. II. III."}
              </NativeSelectOption>
            </NativeSelect>
            <div className="segmented small" id="fLevel">
              <Button data-lv="-1" title={label("tools:editPdfText.tipDecreaseListIndentTab","Decrease list indent (⇧Tab)")} data-i18n-title="tools:editPdfText.tipDecreaseListIndentTab" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipDecreaseListIndentTab","Decrease list indent (⇧Tab)")}>
                <IndentDecrease aria-hidden="true" className="size-4" />
              </Button>
              <Button data-lv="1" title={label("tools:editPdfText.tipIncreaseListIndentTab","Increase list indent (Tab)")} data-i18n-title="tools:editPdfText.tipIncreaseListIndentTab" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipIncreaseListIndentTab","Increase list indent (Tab)")}>
                <IndentIncrease aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </div>
          <h3 className="sect" data-i18n="tools:editPdfText.outline">
            {label("tools:editPdfText.outline","Outline")}
          </h3>
          <div className="row">
            <Input id="fStrokeColor" type="color" defaultValue="#000000" title={label("tools:editPdfText.tipTextOutlineColor","Text outline color")} data-i18n-title="tools:editPdfText.tipTextOutlineColor" aria-label={label("tools:editPdfText.tipTextOutlineColor","Text outline color")} />
            <Input id="fStrokeW" type="number" min="0" max="20" step="0.1" className="num" title={label("tools:editPdfText.tipOutlineWidth0None","Outline width (0 = none)")} data-i18n-title="tools:editPdfText.tipOutlineWidth0None" aria-label={label("tools:editPdfText.tipOutlineWidth0None","Outline width (0 = none)")} />
          </div>
          <h3 className="sect" data-i18n="tools:editPdfText.spacing">
            {label("tools:editPdfText.spacing","Spacing")}
          </h3>
          <Label className="field">
            {"Line Spacing"}
            <Input id="fLine" type="number" min="0.6" max="4" step="0.05" className="num" />
          </Label>
          <Label className="field">
            {"Paragraph Spacing"}
            <Input id="fPara" type="number" min="0" max="200" step="1" className="num" />
          </Label>
          <Label className="field">
            {"Character Spacing"}
            <Input id="fChar" type="number" min="-3" max="30" step="0.1" className="num" />
          </Label>
          <Label className="field">
            {"Word Spacing"}
            <Input id="fWordSp" type="number" min="-10" max="100" step="0.5" className="num" />
          </Label>
          <Label className="field">
            {"Horizontal Scale %"}
            <Input id="fHScale" type="number" min="10" max="400" step="1" className="num" />
          </Label>
          <Label className="field">
            {"First-line Indent"}
            <Input id="fFirstInd" type="number" min="0" max="300" step="1" className="num" />
          </Label>
          <Label className="field">
            {"Hanging Indent"}
            <Input id="fHangInd" type="number" min="0" max="300" step="1" className="num" />
          </Label>
          <h3 className="sect" data-i18n="tools:editPdfText.direction">
            {label("tools:editPdfText.direction","Direction")}
          </h3>
          <div className="row">
            <div className="segmented small grow" id="fDir">
              <Button data-d="0" title={label("tools:editPdfText.tipFromContent","From content")} data-i18n="tools:editPdfText.dirAuto" data-i18n-title="tools:editPdfText.tipFromContent" variant="ghost" size="sm" aria-label={label("tools:editPdfText.tipFromContent","From content")}>
                {label("tools:editPdfText.dirAuto","Auto")}
              </Button>
              <Button data-d="1" title={label("tools:editPdfText.tipLeftToRight","Left to right")} data-i18n-title="tools:editPdfText.tipLeftToRight" variant="ghost" size="sm" aria-label={label("tools:editPdfText.tipLeftToRight","Left to right")}>
                {"LTR"}
              </Button>
              <Button data-d="2" title={label("tools:editPdfText.tipRightToLeft","Right to left")} data-i18n-title="tools:editPdfText.tipRightToLeft" variant="ghost" size="sm" aria-label={label("tools:editPdfText.tipRightToLeft","Right to left")}>
                {"RTL"}
              </Button>
            </div>
          </div>
          <div className="row" id="pStrokeRow" hidden={true}>
            <span className="chk" data-i18n="tools:editPdfText.pathStroke">
              {label("tools:editPdfText.pathStroke","Path stroke")}
            </span>
            <Input id="pStrokeColor" type="color" defaultValue="#000000" title={label("tools:editPdfText.tipStrokeColor","Stroke color")} data-i18n-title="tools:editPdfText.tipStrokeColor" aria-label={label("tools:editPdfText.tipStrokeColor","Stroke color")} />
            <Input id="pStrokeW" type="number" min="0" max="40" step="0.5" className="num" title={label("tools:editPdfText.tipStrokeWidth","Stroke width")} data-i18n-title="tools:editPdfText.tipStrokeWidth" aria-label={label("tools:editPdfText.tipStrokeWidth","Stroke width")} />
          </div>
        </Card>
      </div>
      <div id="viewbar">
        <div className="vbzoom">
          <EditorZoomMenu locale={locale} labels={labels}><Button id="zoomMenuBtn" className="btn vbzoomlabel" title={label("tools:editPdfText.tipZoomPresets","Zoom presets")} data-i18n-title="tools:editPdfText.tipZoomPresets" variant="ghost" size="sm" aria-label={label("tools:editPdfText.tipZoomPresets","Zoom presets")}>
            <span id="zoomLabel" className="label">
              {"100%"}
            </span>
            <ChevronDown aria-hidden="true" className="editcaret size-4" />
          </Button></EditorZoomMenu>
          <Button id="zoomOut" className="btn icon" title={label("tools:editPdfText.tipZoomOut","Zoom out")} data-i18n-title="tools:editPdfText.tipZoomOut" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipZoomOut","Zoom out")}>
            <CircleMinus aria-hidden="true" className="size-4" />
          </Button>
          <Button id="zoomIn" className="btn icon" title={label("tools:editPdfText.tipZoomIn","Zoom in")} data-i18n-title="tools:editPdfText.tipZoomIn" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipZoomIn","Zoom in")}>
            <CirclePlus aria-hidden="true" className="size-4" />
          </Button>
          <Button id="zoomFit" className="btn icon" title={label("tools:editPdfText.tipFitPage","Fit page")} data-i18n-title="tools:editPdfText.tipFitPage" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipFitPage","Fit page")}>
            <Scan aria-hidden="true" className="size-4" />
          </Button>
        </div>
        <div className="vbcenter">
          <Button id="prev" className="btn icon" title={label("tools:editPdfText.tipPreviousPage","Previous page")} data-i18n-title="tools:editPdfText.tipPreviousPage" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipPreviousPage","Previous page")}>
            <ChevronLeft aria-hidden="true" className="size-4" />
          </Button>
          <span id="pageLabel" className="label">
            {"0 / 0"}
          </span>
          <Input id="pageInput" className="pagebox" type="number" min="1" step="1" title={label("tools:editPdfText.tipTypeAPageNumberAndPressEnter","Type a page number and press Enter")} data-i18n-title="tools:editPdfText.tipTypeAPageNumberAndPressEnter" aria-label={label("tools:editPdfText.tipTypeAPageNumberAndPressEnter","Type a page number and press Enter")} />
          <span id="pageTotal" className="label pagetotal">
            {"/ 0"}
          </span>
          <Button id="next" className="btn icon" title={label("tools:editPdfText.tipNextPage","Next page")} data-i18n-title="tools:editPdfText.tipNextPage" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipNextPage","Next page")}>
            <ChevronRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
        <div className="vbright">
          <EditorDocumentDialog locale={locale} labels={labels}><Button id="docInfoBtn" className="btn icon" title={label("tools:editPdfText.tipDocumentProperties","Document properties")} data-i18n-title="tools:editPdfText.tipDocumentProperties" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipDocumentProperties","Document properties")}>
            <Info aria-hidden="true" className="size-4" />
          </Button></EditorDocumentDialog>
          <Button id="vbCollapse" className="btn icon" title={label("tools:editPdfText.tipHideBar","Hide bar")} data-i18n-title="tools:editPdfText.tipHideBar" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipHideBar","Hide bar")}>
            <ChevronsDown aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </div>
      <Button id="vbRestore" className="btn icon" hidden={true} title={label("tools:editPdfText.tipShowBar","Show bar")} data-i18n-title="tools:editPdfText.tipShowBar" variant="ghost" size="icon-sm" aria-label={label("tools:editPdfText.tipShowBar","Show bar")}>
        <ChevronsUp aria-hidden="true" className="size-4" />
      </Button>
      <div id="toast" hidden={true} aria-hidden="true">
      </div>
      <EditorNotifications direction={locale === 'ar' ? 'rtl' : 'ltr'} />
      <EditorInputDialog labels={labels} locale={locale} />
    </div>
  );
}
