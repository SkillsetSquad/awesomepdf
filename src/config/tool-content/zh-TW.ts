import { localizedRedactionContent } from './redaction-locales';
/**
 * Traditional Chinese Tool Content
 * Requirements: 3.1 - Multi-language support
 * 
 * 繁中工具内容 - 包含所有67個PDF工具的詳細描述、使用說明、範例和常見問題
 */

import type { ToolContent } from '@/types/tool';

export const toolContentZhTW: Record<string, ToolContent> = {
  // ==================== 熱門工具 ====================
  'pdf-multi-tool': {
    title: 'PDF多功能工具',
    metaDescription: '一站式PDF編輯器：合併、拆分、整理、刪除、旋轉和提取頁面，功能強大。',
    keywords: ['pdf多功能工具', 'pdf編輯器', '合併pdf', '拆分pdf', '整理pdf', '一站式pdf'],
    description: `
      <p>PDF 多功能工具是您處理所有 PDF 頁面管理任務的綜合解決方案。這款強大的單一介面將多種 PDF 操作整合在一起，幫您節省時間與精力。</p>
      <p>無論您要合併多個檔案、將大型 PDF 拆分為小檔案、重新整理頁面、刪除不需要的頁面、旋轉頁面或提取特定段落，這個工具都能輕鬆完成，無需在多個應用間切換。</p>
      <p>所有處理皆在您的瀏覽器中本地執行，確保檔案隱私與安全，不會將任何檔案上傳至伺服器。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '將PDF檔案拖放到上傳區域，或點擊瀏覽並從裝置中選擇檔案。' },
      { step: 2, title: '選擇操作', description: '從可用操作中選擇：合併、拆分、整理、刪除頁面、旋轉、新增空白頁或提取頁面。' },
      { step: 3, title: '設定選項', description: '根據所選操作調整設定，如頁面範圍、旋轉角度或合併順序。' },
      { step: 4, title: '處理並下載', description: '點擊處理按鈕，操作完成後下載修改後的PDF。' },
    ],
    useCases: [
      { title: '檔案準備', description: '透過刪除不必要的頁面、重新排序內容和合併多個檔案來準備提交檔案。', icon: "file-check" },
      { title: '報告匯編', description: '合併多個報告部分，新增封面頁，將章節整理成一個專業文檔。', icon: "book-open" },
      { title: '檔案管理', description: '將大型檔案拆分成可管理的部分，提取相關頁面，重新整理歷史文件。', icon: "archive" },
    ],
    faq: [
      { question: '一次可以處理多少個PDF？', answer: '您可以同時上傳和處理最多10個PDF檔案，合併最大大小為500MB。' },
      { question: '書籤會被保留嗎？', answer: '是的，合併PDF時，工具會保留現有書籤，並可選擇將它們合併成統一的書籤結構。' },
      { question: '有頁數限制嗎？', answer: '沒有嚴格的頁數限制。該工具可以處理數百頁的檔案，但非常大的檔案可能需要更長的處理時間。' },
    ],
  },

  'merge-pdf': {
    title: '合併PDF',
    metaDescription: '將多個PDF檔案合併成一個檔案。免費線上PDF合併器，支援拖放重新排序。',
    keywords: ['合併pdf', '組合pdf', '連接pdf', 'pdf合併器', '拼接pdf'],
    description: `
      <p>合併PDF允許您快速輕鬆地將多個PDF檔案合併成一個檔案。無論您是整合報告、合併掃描檔案還是組裝簡報，這個工具都能使過程變得無縫。</p>
      <p>只需上傳檔案，使用拖放功能按所需順序排列，然後將它們合併成一個連貫的檔案。該工具保留原始檔案的品質，並可選擇保留每個來源檔案的書籤。</p>
      <p>所有合併操作都在您的瀏覽器本地進行，確保敏感文檔的完全隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '將多個PDF檔案拖放到上傳區域，或點擊從裝置中選擇檔案。' },
      { step: 2, title: '排列順序', description: '拖放檔案縮略圖以按所需順序排列。' },
      { step: 3, title: '合併並下載', description: '點擊合併按鈕組合所有檔案，然後下載合併後的PDF。' },
    ],
    useCases: [
      { title: '合併報告', description: '將月度或季度報告合併成一個年度文檔，便於分發和存檔。', icon: "file-text" },
      { title: '組裝作品集', description: '將多個項目文檔、證書或工作樣本合併成專業作品集。', icon: "briefcase" },
      { title: '整合發票', description: '將多張發票或收據合併成一個文檔，用於會計和記錄保存。', icon: "receipt" },
    ],
    faq: [
      { question: '可以合併多少個PDF？', answer: '您可以一次合併最多100個PDF檔案，總大小最高可達500MB。' },
      { question: '合併後的PDF會保持原始品質嗎？', answer: '是的，合併過程保留所有文檔的原始品質，不會進行任何壓縮或品質損失。' },
      { question: '可以合併受密碼保護的PDF嗎？', answer: '受密碼保護的PDF需要先解密。請使用我們的解密PDF工具在合併前移除密碼。' },
    ],
  },

  'rotate-custom': {
    title: '自定義旋轉 PDF',
    metaDescription: '按任意角度旋轉PDF頁面。精確的自定義旋轉，用於校正掃描文檔。',
    keywords: ['自定義旋轉pdf', 'pdf旋轉任意角度', '校正pdf', 'pdf歪斜校正'],
    description: `
      <p>自定義旋轉 PDF 工具讓您可以精確控制PDF頁面的方向。與僅支援90度增量的標準旋轉工具不同，此工具允許您按任何特定角度旋轉頁面。</p>
      <p>非常適合校正掃描時稍微傾斜的文檔，或將圖表和圖紙調整到正確的方向。您可以校正單個頁面或對整個文檔應用相同的旋轉。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔在實現完美對齊的同時保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '上傳包含需要旋轉頁面的PDF檔案。' },
      { step: 2, title: '設定旋轉角度', description: '為每個頁面輸入精確的旋轉度數，或為所有頁面設定批量角度。' },
      { step: 3, title: '預覽和調整', description: '使用實時預覽確保頁面完美對齊。' },
      { step: 4, title: '應用並下載', description: '點擊旋轉應用更改並下載校正後的PDF。' },
    ],
    useCases: [
      { title: '掃描文檔', description: '校正掃描時進紙傾斜的頁面。', icon: "scan" },
      { title: '技術圖紙', description: '精確調整技術圖表和平面圖的方向。', icon: "ruler" },
      { title: '創意排版', description: '通過將頁面旋轉到特定藝術角度來創建獨特的布局。', icon: "pen-tool" },
    ],
    faq: [
      { question: '可以按小數旋轉嗎，例如45.5度？', answer: '目前工具僅支援整數度數，但我們正在努力啟用小數精度。' },
      { question: '這會影響頁面內容嗎？', answer: '內容會被視覺旋轉。頁面大小會自動調整以適應旋轉後的內容。' },
      { question: '可以只旋轉一個頁面嗎？', answer: '是的，您可以為任何單個頁面設置自定義旋轉角度，同時保持其他頁面不變。' },
    ],
  },

  'grid-combine': {
    title: '網格組合 PDF',
    metaDescription: '將多個PDF檔案組合到單頁面上的靈活網格配置中。每頁排列2、4、6、9個或更多PDF，支援邊框和間距。',
    keywords: ['網格組合', '合併pdf網格', 'pdf拼貼', '多pdf一頁', "pdf 合一", '組合pdf網格'],
    description: `
      <p>網格組合工具提供了一種將多個獨立的PDF檔案合併到單頁面上的獨特方式。與簡單追加頁面的標準“合併PDF”工具或重新排列單個檔案頁面的“N-Up”工具不同，網格組合獲取多個輸入檔案並將它們並排排列在可自訂的網格配置中。</p>
      <p>您可以選擇各種網格配置，如2x1、2x2、3x3等。這非常適合比較多個檔案、從不同來源創建講義或列印多個檔案的緊湊版本。</p>
      <p>通過控制頁面大小、方向、邊距、間距和邊框來自訂輸出。所有處理都在您的瀏覽器本地進行，以實現最大的隱私保護。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '上傳兩個或更多您想要組合的PDF檔案。您可以按所需順序重新排列它們。' },
      { step: 2, title: '選擇網格配置', description: '選擇您想要的網格配置（例如，2x2表示每頁4個檔案，3x3表示每頁9個檔案）。' },
      { step: 3, title: '自訂外觀', description: '調整設定，如頁面大小（A4、Letter）、方向、項目之間的間距和邊框。' },
      { step: 4, title: '組合並下載', description: '點擊“組合PDF”生成您的新網格配置檔案並下載結果。' },
    ],
    useCases: [
      { title: '視覺比較', description: '將設計或文檔的不同版本並排放置在單個頁面上以便於比較。', icon: "layout-grid" },
      { title: '列印講義', description: '將多個短檔案或幻燈片合併到單張紙上以節省列印成本。', icon: "printer" },
      { title: '作品集創建', description: '在清晰、有組織的網格概覽中展示多個項目檔案。', icon: "image" },
    ],
    faq: [
      { question: '這與N-Up有什麼不同？', answer: 'N-Up從一個PDF中取得頁面並將它們放在一張紙上。網格組合取得多個不同的PDF檔案並將它們放在一張紙上。' },
      { question: '我可以組合多少個檔案？', answer: '您可以根據瀏覽器記憶體組合多達100個檔案，但像4x4這樣的配置每頁最多可容納16個檔案。' },
      { question: '我可以新增邊框嗎？', answer: '是的，您可以在每個PDF檔案周圍新增邊框並自訂邊框顏色。' },
    ],
  },

  'split-pdf': {
    title: '拆分PDF',
    metaDescription: '將PDF檔案拆分成多個檔案。提取特定頁面或按頁面範圍分割。',
    keywords: ['拆分pdf', '分割pdf', '分離pdf', '提取頁面', 'pdf拆分器'],
    description: `
      <p>拆分PDF使您能夠將單個PDF檔案分成多個較小的檔案。這非常適合提取特定章節、分離合併的檔案或從多頁PDF創建單獨的檔案。</p>
      <p>您可以按特定頁面範圍拆分、提取單個頁面或按固定間隔分割檔案。該工具提供頁面的可視預覽，使您能夠輕鬆選擇所需的內容。</p>
      <p>所有處理都在您的瀏覽器本地完成，確保您的檔案保持隱私和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊瀏覽並選擇要拆分的檔案。' },
      { step: 2, title: '選擇拆分方式', description: '選擇拆分方式：按頁面範圍、提取特定頁面或按固定間隔拆分。' },
      { step: 3, title: '定義頁面範圍', description: '輸入要提取的頁碼或範圍（例如：1-5, 8, 10-15）。' },
      { step: 4, title: '拆分並下載', description: '點擊拆分創建新的PDF檔案，單獨下載或作為ZIP壓縮包下載。' },
    ],
    useCases: [
      { title: '提取章節', description: '將書籍或手冊拆分成單獨的章節，便於閱讀或分發。', icon: "book" },
      { title: '分離合併掃描', description: '將批量掃描的文檔分成每個原始文檔的單獨檔案。', icon: "copy" },
      { title: '創建講義', description: '從演示文稿中提取特定幻燈片或頁面以創建重點講義。', icon: "presentation" },
    ],
    faq: [
      { question: '可以將PDF拆分成單獨的頁面嗎？', answer: '是的，您可以通過選擇"每頁拆分"選項將PDF拆分成單獨的單頁檔案。' },
      { question: '拆分時書籤會怎樣？', answer: '落在提取頁面範圍內的書籤會保留在生成的PDF檔案中。' },
      { question: '可以拆分受密碼保護的PDF嗎？', answer: '您需要先使用我們的解密PDF工具解密PDF，然後再進行拆分。' },
    ],
  },

  'compress-pdf': {
    title: '壓縮PDF',
    metaDescription: '減小PDF檔案大小同時保持品質。免費線上PDF壓縮器，生成更小的檔案。',
    keywords: ['壓縮pdf', '減小pdf大小', 'pdf壓縮器', '縮小pdf', '優化pdf'],
    description: `
      <p>壓縮PDF在保持可接受品質的同時減小PDF檔案的大小。這對於電子郵件附件、網絡上傳或節省存儲空間至關重要。</p>
      <p>該工具提供多種壓縮級別，以平衡檔案大小減少和品質保持。您可以選擇激進壓縮以獲得最大的大小減少，或選擇輕度壓縮以保持更高的品質。</p>
      <p>所有壓縮都在您的瀏覽器中進行，確保您的檔案永遠不會離開您的設備。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇要壓縮的檔案。' },
      { step: 2, title: '選擇壓縮級別', description: '選擇您偏好的壓縮級別：低（最佳品質）、中（平衡）或高（最小文件）。' },
      { step: 3, title: '壓縮並下載', description: '點擊壓縮以減小檔案大小，然後下載優化後的PDF。' },
    ],
    useCases: [
      { title: '電子郵件附件', description: '減小PDF大小以滿足電子郵件附件限制並確保更快的發送。', icon: "mail" },
      { title: '網絡發布', description: '優化PDF以供網絡下載，提高頁面加載時間和使用者體驗。', icon: "globe" },
      { title: '存儲優化', description: '壓縮存檔檔案以節省磁盤空間同時保持可訪問性。', icon: "hard-drive" },
    ],
    faq: [
      { question: '可以減少多少檔案大小？', answer: '壓縮結果因PDF內容而異。圖像密集的PDF通常可以減少50-80%，而純文本PDF可能減少較少。' },
      { question: '壓縮會影響文本品質嗎？', answer: '文本在所有壓縮級別下都保持清晰可讀。只有圖像和圖形會受到壓縮影響。' },
      { question: '可以一次壓縮多個PDF嗎？', answer: '是的，您可以同時上傳和壓縮最多10個PDF檔案。' },
    ],
  },

  'edit-pdf': {
    title: '編輯PDF',
    metaDescription: '線上編輯PDF檔案。新增文字、圖像、註解、高亮和形狀到您的檔案。',
    keywords: ['編輯pdf', 'pdf編輯器', '註解pdf', '新增文字到pdf', 'pdf標記'],
    description: `
      <p>編輯PDF提供一套全面的工具來修改和註解您的PDF檔案。新增文字、圖像、形狀、高亮、評論等，無需昂貴的桌面軟體。</p>
      <p>直觀的編輯器介面使您可以輕鬆標記檔案以供審閱、新增協作註解、編輯敏感資訊或用額外內容增強檔案。</p>
      <p>所有編輯都在您的瀏覽器本地進行，確保敏感文檔的完全隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇要編輯的檔案。' },
      { step: 2, title: '選擇編輯工具', description: '從工具列中選擇：文字、高亮、形狀、圖片、評論或編輯工具。' },
      { step: 3, title: '進行編輯', description: '點擊文件新增註解，拖動定位元素，使用屬性面板進行客製化。' },
      { step: 4, title: '儲存並下載', description: '點擊儲存套用更改並下載編輯後的PDF。' },
    ],
    useCases: [
      { title: '文件審閱', description: '為協作審閱過程添加評論、高亮和標記到文件。', icon: 'message-square' },
      { title: '表單填寫', description: '填寫文字欄位、新增簽名並完成PDF表單，無需列印。', icon: "edit-3" },
      { title: '內容編輯', description: '在共享前永久刪除文件中的敏感信息。', icon: "eye-off" },
    ],
    faq: [
      { question: '可以編輯PDF中的原始文字嗎？', answer: '此工具專注新增註解和新內容。要編輯現有文字，您可能需要使用原始檔案。' },
      { question: '我的編輯是永久的嗎？', answer: '註解可以扁平化使其永久，或根據您的偏好保持為可編輯圖層。' },
      { question: '可以撤銷更改嗎？', answer: '是的，編輯器支援撤銷/重做功能。您也可以在儲存前隨時重設為原始文件。' },
    ],
  },

  'jpg-to-pdf': {
    title: 'JPG轉PDF',
    metaDescription: '將JPG圖片轉換為PDF。將多個JPG檔案合併成一個PDF檔案。',
    keywords: ['jpg轉pdf', 'jpeg轉pdf', '轉換jpg', '圖片轉pdf', '照片轉pdf'],
    description: `
      <p>JPG轉PDF可以快速輕鬆地將您的JPEG圖像轉換為PDF檔案。無論您有單張照片還是多張圖片，這個工具都能創建專業外觀的PDF檔案。</p>
      <p>您可以將多個JPG檔案合併成一個PDF，按任意順序排列，並自定義頁面大小和方向。轉換過程保留圖像品質，同時創建緊湊、可共享的PDF檔案。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的照片保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳JPG圖片', description: '拖放您的JPG檔案或點擊從設備中選擇圖像。' },
      { step: 2, title: '排列和配置', description: '通過拖動重新排序圖像，選擇頁面大小和方向選項。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換創建PDF並下載結果。' },
    ],
    useCases: [
      { title: '照片相冊', description: '從假期照片或活動照片創建PDF相冊，便於分享。', icon: "image" },
      { title: '文件掃描', description: '將手機拍攝的文檔照片轉換為正式的PDF檔案。', icon: "camera" },
      { title: '作品集創建', description: '將攝影作品或設計樣本編譯成專業的PDF作品集。', icon: "folder" },
    ],
    faq: [
      { question: '可以轉換多少張圖片？', answer: '您可以將最多100張JPG圖片轉換成一個PDF檔案。' },
      { question: '圖片品質會保留嗎？', answer: '是的，圖片以原始品質嵌入。您可以選擇壓縮它們以減小文件大小。' },
      { question: '可以為不同圖片設置不同的頁面大小嗎？', answer: '該工具對所有頁面應用統一的頁面大小。每張圖片都會縮放以適應所選頁面大小，同時保持縱橫比。' },
    ],
  },

  'sign-pdf': {
    title: '簽署PDF',
    metaDescription: '為PDF檔案新增電子簽名。繪制、輸入或上傳您的簽名。',
    keywords: ['簽署pdf', '電子簽名', '電子簽章', 'pdf簽名', '數字簽名'],
    description: `
      <p>簽署PDF允許您快速安全地為PDF檔案新增電子簽名。通過繪制、輸入或上傳圖像創建您的簽名，然後將其放置在文件的任何位置。</p>
      <p>您可以在單個文件中新增多個簽名，精確調整大小和位置，並保存簽名以供將來使用。該工具非常適合合同、協議、表單和任何需要簽名的文件。</p>
      <p>所有簽名操作都在您的瀏覽器本地進行，確保您的文件和簽名保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇需要簽名的檔案。' },
      { step: 2, title: '創建簽名', description: '用鼠標或觸摸繪制簽名，輸入姓名生成簽名，或上傳簽名圖像。也可以掃描寫在紙上的簽名照片。' },
      { step: 3, title: '放置和調整', description: '點擊文件放置簽名，然後拖動定位和調整大小。' },
      { step: 4, title: '保存並下載', description: '點擊保存應用簽名並下載已簽名的PDF。' },
    ],
    useCases: [
      { title: '合同簽署', description: '電子簽署合同和協議，無需列印和掃描。', icon: "file-signature" },
      { title: '表單填寫', description: '為申請表、同意書和官方文件新增簽名。', icon: "clipboard" },
      { title: '審批流程', description: '作為審閱和審批流程的一部分簽署文件。', icon: "check-circle" },
    ],
    faq: [
      { question: '電子簽名具有法律效力嗎？', answer: '電子簽名在大多數國家都被法律認可。但是，某些文檔可能需要特定類型的數字簽名。請查閱當地法規。' },
      { question: '可以保存簽名以供將來使用嗎？', answer: '是的，您可以將簽名保存到瀏覽器的本地存儲中，以便在簽署未來文件時快速訪問。' },
      { question: '可以在一個文檔中新增多個簽名嗎？', answer: '是的，您可以新增任意數量的簽名，在任何頁面上獨立定位每個簽名。' },
    ],
  },

  'crop-pdf': {
    title: '裁剪PDF',
    metaDescription: '裁剪PDF頁面以刪除邊距和不需要的區域。精確修剪PDF檔案。',
    keywords: ['裁剪pdf', '修剪pdf', '剪切pdf邊距', '調整pdf頁面大小', 'pdf裁剪器'],
    description: `
      <p>裁剪PDF允許您修剪邊距並從PDF頁面中刪除不需要的區域。這對於刪除多餘的空白、聚焦特定內容區域或標準化頁面尺寸非常有用。</p>
      <p>您可以統一裁剪所有頁面或單獨調整每個頁面。可視界面準確顯示將保留的內容，使您能夠輕鬆獲得精確的結果。</p>
      <p>所有裁剪操作都在您的瀏覽器本地進行，確保您的檔案保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇要裁剪的檔案。' },
      { step: 2, title: '定義裁剪區域', description: '拖動裁剪手柄定義要保留的區域，或輸入精確的尺寸。' },
      { step: 3, title: '應用到頁面', description: '選擇將裁剪應用到所有頁面或選擇特定頁面進行裁剪。' },
      { step: 4, title: '裁剪並下載', description: '點擊裁剪應用更改並下載裁剪後的PDF。' },
    ],
    useCases: [
      { title: '刪除邊距', description: '修剪掃描文檔或具有大邊框的PDF的過多邊距。', icon: "maximize-2" },
      { title: '聚焦內容', description: '裁剪以突出特定內容區域，刪除頁首、頁尾或側邊欄。', icon: "target" },
      { title: '標準化頁面', description: '通過裁剪到統一尺寸使所有頁面大小相同。', icon: "square" },
    ],
    faq: [
      { question: '裁剪會永久刪除內容嗎？', answer: '是的，裁剪會刪除裁剪區域外的內容。請確保保留原始檔案的備份。' },
      { question: '可以對不同頁面進行不同的裁剪嗎？', answer: '是的，您可以對單個頁面或頁面組應用不同的裁剪設置。' },
      { question: '裁剪會影響文本品質嗎？', answer: '不會，裁剪只刪除裁剪邊界外的區域。剩餘內容保持原始品質。' },
    ],
  },

  'extract-pages': {
    title: '提取頁面',
    metaDescription: '從PDF檔案中提取特定頁面。選擇並儲存單個頁面為新檔案。',
    keywords: ['提取pdf頁面', '儲存pdf頁面', '複製pdf頁面', 'pdf頁面提取器'],
    description: `
      <p>提取頁面允許您從PDF檔案中選擇並儲存特定頁面為新檔案。這非常適合提取相關部分、建立摘錄或分離合併的檔案。</p>
      <p>您可以提取單個頁面、頁面範圍或多個不連續的頁面。可視頁面預覽使您能夠輕鬆識別和選擇所需的頁面。</p>
      <p>所有提取操作都在您的瀏覽器本地進行，確保您的檔案保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇要從中提取頁面的檔案。' },
      { step: 2, title: '選擇頁面', description: '點擊頁面縮略圖選擇它們，或在輸入欄位中輸入頁碼和範圍。' },
      { step: 3, title: '提取並下載', description: '點擊提取創建包含所選頁面的新PDF並下載。' },
    ],
    useCases: [
      { title: '創建摘錄', description: '從報告或書籍中提取相關頁面以創建重點參考文件。', icon: "file-minus" },
      { title: '分享特定內容', description: '提取特定頁面進行分享，無需發送整個文檔。', icon: "share-2" },
      { title: '存檔重要頁面', description: '提取並儲存檔案中的關鍵頁面以供長期存檔。', icon: "archive" },
    ],
    faq: [
      { question: '可以提取不連續的頁面嗎？', answer: '是的，您可以選擇任意頁面組合，無論是連續的還是分散在整個文檔中的。' },
      { question: '書籤會保留嗎？', answer: '指向提取頁面的書籤會保留在新檔案中。' },
      { question: '可以從多個PDF中提取頁面嗎？', answer: '此工具一次處理一個PDF。要合併來自多個PDF的頁面，請使用合併PDF工具。' },
    ],
  },

  'organize-pdf': {
    title: '整理PDF',
    metaDescription: '重新排序、複製和刪除PDF頁面。拖放重新整理您的檔案。',
    keywords: ['整理pdf', '重新排序pdf頁面', '重新排列pdf', 'pdf頁面整理器'],
    description: `
      <p>整理PDF提供直觀的拖放介面來重新排列PDF檔案中的頁面。輕鬆重新排序頁面、複製重要部分或刪除不需要的頁面。</p>
      <p>可視頁面縮略圖使您能夠輕鬆識別內容並按需排列頁面。非常適合重組檔案、建立自訂頁面順序或清理掃描檔案。</p>
      <p>所有整理操作都在您的瀏覽器本地進行，確保您的檔案保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇要整理的文件。' },
      { step: 2, title: '重新排列頁面', description: '拖動頁面縮略圖重新排序。根據需要點擊每個頁面上的複製或刪除按鈕。' },
      { step: 3, title: '儲存並下載', description: '點擊儲存套用更改並下載重新整理的PDF。' },
    ],
    useCases: [
      { title: '修正頁面順序', description: '糾正掃描或合併錯誤的頁面順序。', icon: "arrow-up-down" },
      { title: '建立自訂順序', description: '為簡報或報告按特定順序排列頁面。', icon: "list" },
      { title: '刪除不需要的頁面', description: '從檔案中刪除空白頁、重複頁或不相關的內容。', icon: "trash-2" },
    ],
    faq: [
      { question: '可以複製頁面嗎？', answer: '是的，您可以複製任何頁面並將副本放置在檔案中的任何位置。' },
      { question: '有撤銷功能嗎？', answer: '是的，您可以撤銷和重做更改。您也可以隨時重置為原始順序。' },
      { question: '可以同時整理多個PDF嗎？', answer: '此工具一次處理一個PDF。要合併和整理多個PDF，請先使用合併PDF工具合併它們。' },
    ],
  },

  'delete-pages': {
    title: '刪除頁面',
    metaDescription: '從PDF檔案中刪除不需要的頁面。輕鬆選擇和刪除特定頁面。',
    keywords: ['刪除pdf頁面', '移除pdf頁面', 'pdf頁面刪除器', '從pdf刪除頁面'],
    description: `
      <p>刪除頁面允許您快速輕鬆地從PDF檔案中刪除不需要的頁面。無論您需要刪除空白頁、過時內容還是敏感信息，這個工具都能簡化操作。</p>
      <p>可視頁面縮略圖幫助您準確識別要刪除的頁面。您可以刪除單個頁面或一次刪除多個頁面。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的檔案保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇要從中刪除頁面的檔案。' },
      { step: 2, title: '選擇要刪除的頁面', description: '點擊頁面縮略圖標記要刪除的頁面，或在輸入欄位中輸入頁碼。' },
      { step: 3, title: '刪除並下載', description: '點擊刪除移除所選頁面並下載更新後的PDF。' },
    ],
    useCases: [
      { title: '刪除空白頁', description: '通過刪除意外包含的空白頁來清理文檔。', icon: "file-x" },
      { title: '刪除敏感內容', description: '在共享文檔前刪除包含機密信息的頁面。', icon: "shield" },
      { title: '精簡文件', description: '刪除過時或不相關的頁面以創建更集中的文件。', icon: "filter" },
    ],
    faq: [
      { question: '可以恢復已刪除的頁面嗎？', answer: '刪除在輸出檔案中是永久的。如果以後可能需要這些頁面，請保留原始文件的備份。' },
      { question: '可以一次刪除多個頁面嗎？', answer: '是的，您可以同時選擇和刪除多個頁面。' },
      { question: '刪除頁面會影響書籤嗎？', answer: '指向已刪除頁面的書籤將被移除。指向剩餘頁面的書籤會保留。' },
    ],
  },

  // ==================== 編輯與注釋 ====================
  'bookmark': {
    title: '編輯書籤',
    metaDescription: '新增、編輯和管理PDF書籤。為您的PDF檔案創建導航結構。',
    keywords: ['pdf書籤', '編輯書籤', '新增書籤', 'pdf導航', '目錄'],
    description: `
      <p>編輯書籤允許您在PDF檔案中創建、修改和整理書籤。書籤提供快速導航到特定部分的功能，使長文件更易於使用。</p>
      <p>您可以新增新書籤、編輯現有書籤、重新整理書籤層次結構或從外部來源導入書籤。這個工具對於創建專業、可導航的文件至關重要。</p>
      <p>所有編輯都在您的瀏覽器本地進行，確保您的檔案保持隱私.</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇要編輯的檔案。' },
      { step: 2, title: '管理書籤', description: '新增新書籤、編輯現有書籤或拖動重新整理層次結構。' },
      { step: 3, title: '保存並下載', description: '點擊保存應用更改並下載帶有更新書籤的PDF。' },
    ],
    useCases: [
      { title: '創建導航', description: '為長文檔新增書籤，幫助讀者快速導航到特定部分。', icon: "navigation" },
      { title: '整理章節', description: '創建反映文檔章節組織的層次書籤結構。', icon: "book-open" },
      { title: '提高可訪問性', description: '新增書籤使文檔更易於訪問和友好使用者。', icon: "accessibility" },
    ],
    faq: [
      { question: '可以創建嵌套書籤嗎？', answer: '是的，您可以創建具有父書籤和子書籤的層次結構。' },
      { question: '可以從文件匯入書籤嗎？', answer: '是的，您可以從JSON或文字檔案匯入書籤結構。' },
      { question: '書籤在所有PDF閱讀器中都能工作嗎？', answer: '是的，書籤是所有主要PDF閱讀器都支援的標準PDF功能。' },
    ],
  },

  'table-of-contents': {
    title: '目錄',
    metaDescription: '為您的PDF生成目錄。從書籤創建可點擊的導航。',
    keywords: ['pdf目錄', '目錄生成器', 'pdf索引', '文檔導航'],
    description: `
      <p>目錄為您的PDF文檔生成可導航的目錄頁面。目錄可以從現有書籤或自定義條目創建，為讀者提供概覽和快速導航。</p>
      <p>使用不同的樣式、字體和版面配置自訂外觀。生成的目錄包含可點擊的連結，直接跳轉到引用的頁面。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇文件。' },
      { step: 2, title: '配置目錄', description: '選擇從書籤生成或創建自定義條目。選擇樣式和位置選項。' },
      { step: 3, title: '生成並下載', description: '點擊生成創建目錄並下載更新後的PDF。' },
    ],
    useCases: [
      { title: '學術論文', description: '為論文、學位論文和研究報告新增專業目錄。', icon: "graduation-cap" },
      { title: '商業報告', description: '為利益相關者創建具有清晰章節列表的可導航報告。', icon: "bar-chart" },
      { title: '使用者手冊', description: '為技術文檔和使用者指南生成全面的目錄。', icon: "book" },
    ],
    faq: [
      { question: '可以自定義目錄外觀嗎？', answer: '是的，您可以為目錄選擇不同的樣式、字體和布局。' },
      { question: '目錄插入在哪里？', answer: '默認情況下，目錄插入在文檔開頭，但您可以選擇不同的位置。' },
      { question: '目錄條目可以點擊嗎？', answer: '是的，每個條目都是可點擊的超連結，導航到相應的頁面。' },
    ],
  },

  'page-numbers': {
    title: '頁碼',
    metaDescription: '為PDF檔案新增頁碼。自定義位置、格式和起始編號。',
    keywords: ['新增頁碼', 'pdf頁碼', '編號pdf頁面', 'pdf分頁'],
    description: `
      <p>頁碼為您的PDF檔案新增可自定義的頁碼編號。從各種格式、位置和樣式中選擇以匹配您文件的設計。</p>
      <p>您可以設置起始編號、跳過某些頁面並使用不同的編號格式（1, 2, 3 或 i, ii, iii）。非常適合創建具有正確分頁的專業文檔。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的檔案保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇檔案。' },
      { step: 2, title: '配置編號', description: '選擇位置、格式、起始編號以及要編號的頁面。' },
      { step: 3, title: '應用並下載', description: '點擊應用新增頁碼並下載更新後的PDF。' },
    ],
    useCases: [
      { title: '專業文檔', description: '為報告、提案和商業文檔新增頁碼。', icon: "file-text" },
      { title: '學術論文', description: '根據學術格式要求編號頁面。', icon: "graduation-cap" },
      { title: '法律文檔', description: '為合同和法律文件新增正確的分頁。', icon: "scale" },
    ],
    faq: [
      { question: '可以跳過第一頁嗎？', answer: '是的，您可以指定要編號的頁面和要跳過的頁面，如標題頁或封面頁。' },
      { question: '有哪些編號格式可用？', answer: '您可以使用阿拉伯數字（1, 2, 3）、羅馬數字（i, ii, iii 或 I, II, III）或字母（a, b, c）。' },
      { question: '可以新增"第X頁，共Y頁"格式嗎？', answer: '是的，您可以在編號格式中包含總頁數。' },
    ],
  },

  'add-watermark': {
    title: '新增水印',
    metaDescription: '為PDF檔案新增文字或圖像浮水印。保護和品牌化您的文件。',
    keywords: ['新增水印', 'pdf水印', '蓋章pdf', '品牌pdf', '保護pdf'],
    description: `
      <p>新增浮水印允許您在PDF檔案上放置文字或圖像浮水印。浮水印可以指示文件狀態（草稿、機密）、新增品牌或阻止未經授權的複製。</p>
      <p>自訂浮水印的位置、大小、不透明度、旋轉和顏色。套用到所有頁面或選擇特定頁面。該工具支援文字浮水印和圖像浮水印。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的檔案保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇檔案。' },
      { step: 2, title: '創建水印', description: '輸入文本或上傳圖像作為水印。調整位置、大小、不透明度和旋轉。' },
      { step: 3, title: '應用並下載', description: '點擊應用新增水印並下載更新後的PDF。' },
    ],
    useCases: [
      { title: '文件保護', description: '新增"機密"或"草稿"水印以指示文件狀態。', icon: "shield" },
      { title: '品牌文件', description: '為官方文件新增公司標誌或名稱。', icon: "award" },
      { title: '版權聲明', description: '新增著作權信息以保護著作權。', icon: "copyright" },
    ],
    faq: [
      { question: '可以使用圖像作為水印嗎？', answer: '是的，您可以上傳PNG、JPG或SVG圖片作為水印。' },
      { question: '可以使水印半透明嗎？', answer: '是的，您可以調整透明度，從完全透明到完全不透明。' },
      { question: '可以對不同頁面應用不同的水印嗎？', answer: '該工具對選定的頁面應用相同的水印。對於不同的水印，需要多次處理文檔。' },
    ],
  },

  'header-footer': {
    title: '頁首頁尾',
    metaDescription: '為PDF文檔新增頁首和頁尾。包含頁碼、日期和自定義文本。',
    keywords: ['pdf頁首', 'pdf頁尾', '新增頁首頁尾', 'pdf信頭'],
    description: `
      <p>頁首頁尾為您的PDF文檔新增可自定義的頁首和頁尾。在頁首或頁尾區域包含頁碼、日期、文檔標題或任何自定義文本。</p>
      <p>將內容定位在頁首/頁尾的左側、中間或右側。如果需要，可以為奇數頁和偶數頁使用不同的內容。非常適合創建具有一致格式的專業文檔。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇檔案。' },
      { step: 2, title: '配置頁首/頁尾', description: '為頁首和頁尾區域輸入文字。新增頁碼、日期或自訂文字。' },
      { step: 3, title: '應用並下載', description: '點擊應用新增頁首/頁尾並下載更新後的PDF。' },
    ],
    useCases: [
      { title: '商業文檔', description: '為專業文檔新增公司名稱和頁碼。', icon: "briefcase" },
      { title: '法律文檔', description: '在法律文件中包含案件編號、日期和頁面引用。', icon: "scale" },
      { title: '學術論文', description: '新增帶有論文標題和作者姓名的頁首。', icon: "graduation-cap" },
    ],
    faq: [
      { question: '可以在奇數頁和偶數頁上有不同的頁首嗎？', answer: '是的，您可以為奇數頁和偶數頁配置不同的內容。' },
      { question: '可以包含當前日期嗎？', answer: '是的，您可以插入顯示當前日期的動態日期欄位。' },
      { question: '可以在某些頁面上跳過頁首/頁尾嗎？', answer: '是的，您可以指定哪些頁面應該有頁首/頁尾，哪些應該跳過。' },
    ],
  },

  'invert-colors': {
    title: '反轉顏色',
    metaDescription: '反轉PDF顏色以進行暗模式閱讀。將檔案轉換為負片顏色。',
    keywords: ['反轉pdf顏色', 'pdf暗模式', '負片pdf', '反轉顏色'],
    description: `
      <p>反轉顏色可以反轉PDF檔案中的顏色，創建負片圖像效果。這對於創建文件的暗模式版本特別有用，便於在低光條件下閱讀。</p>
      <p>該工具可以反轉所有顏色或選擇性地保留某些元素（如圖像）。非常適合在夜間閱讀時減少眼睛疲勞。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的檔案保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇檔案。' },
      { step: 2, title: '配置選項', description: '選擇是反轉所有內容還是保留圖像。' },
      { step: 3, title: '反轉並下載', description: '點擊反轉處理文檔並下載結果。' },
    ],
    useCases: [
      { title: '夜間閱讀', description: '創建文件的暗模式版本，便於夜間舒適閱讀。', icon: "moon" },
      { title: '減少眼睛疲勞', description: '反轉明亮的文件以減少長時間閱讀時的眼睛疲勞。', icon: "eye" },
      { title: '節省列印', description: '反轉文件以減少列印草稿時的墨水使用。', icon: "printer" },
    ],
    faq: [
      { question: '圖像也會被反轉嗎？', answer: '默認情況下會。您可以選擇在反轉文本和背景的同時保留原始圖像。' },
      { question: '可以只反轉特定頁面嗎？', answer: '是的，您可以選擇要反轉的頁面。' },
      { question: '反轉是可逆的嗎？', answer: '您可以再次反轉文件以大致恢復原始顏色。' },
    ],
  },

  'background-color': {
    title: '背景顏色',
    metaDescription: '更改PDF背景顏色。為PDF頁面新增彩色背景。',
    keywords: ['pdf背景顏色', '更改pdf背景', '彩色pdf', 'pdf頁面顏色'],
    description: `
      <p>背景顏色允許您更改或新增PDF頁面的背景顏色。這可以提高可讀性、增加視覺趣味或滿足您的品牌要求。</p>
      <p>為背景選擇任何顏色並應用到所有頁面或選定的頁面。該工具在新增背景圖層的同時保留所有現有內容。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的檔案保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇檔案。' },
      { step: 2, title: '選擇顏色', description: '使用顏色選擇器選擇背景顏色或輸入十六進制代碼。' },
      { step: 3, title: '應用並下載', description: '點擊應用新增背景並下載更新後的PDF。' },
    ],
    useCases: [
      { title: '提高可讀性', description: '新增淺奶油色或棕褐色背景以減少眼睛疲勞。', icon: "eye" },
      { title: '品牌文件', description: '使用品牌顏色作為營銷材料的背景。', icon: "palette" },
      { title: '突出部分', description: '使用不同的背景顏色來區分文件部分。', icon: "layers" },
    ],
    faq: [
      { question: '背景會覆蓋現有內容嗎？', answer: '不會，背景新增在現有內容後面，保留所有文字和圖片。' },
      { question: '可以為不同頁面使用不同的顏色嗎？', answer: '您需要多次處理文檔才能在不同頁面上使用不同的顏色。' },
      { question: '可以刪除現有背景嗎？', answer: '此工具新增背景。要刪除背景，您可能需要使用編輯PDF工具。' },
    ],
  },

  'text-color': {
    title: '更改文字顏色',
    metaDescription: '更改PDF檔案中的文字顏色。修改所有文字內容的顏色。',
    keywords: ['更改pdf文字顏色', 'pdf文字顏色', '修改文字顏色', '重新著色pdf文字'],
    description: `
      <p>更改文字顏色允許您修改PDF檔案中文字的顏色。這對於改善對比度、匹配品牌或創建文件的視覺變體非常有用。</p>
      <p>選擇新顏色並套用到文件中的所有文字。該工具處理文字元素的同時保留圖片和其他內容。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的檔案保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇檔案。' },
      { step: 2, title: '選擇顏色', description: '使用顏色選擇器選擇新的文字顏色或輸入十六進制代碼。' },
      { step: 3, title: '套用並下載', description: '點擊套用更改文字顏色並下載更新後的PDF。' },
    ],
    useCases: [
      { title: '改善對比度', description: '更改文字顏色以提高與背景的可讀性。', icon: "contrast" },
      { title: '品牌一致性', description: '更新文字顏色以匹配品牌指南。', icon: "palette" },
      { title: '無障礙性', description: '調整文字顏色以滿足無障礙對比度要求。', icon: "accessibility" },
    ],
    faq: [
      { question: '所有文字都會被更改嗎？', answer: '是的，該工具更改檔案中所有文字元素的顏色。' },
      { question: '可以只更改特定文字嗎？', answer: '此工具更改所有文字。對於選擇性更改，請使用編輯PDF工具。' },
      { question: '格式化的文字（粗體、斜體）會保留嗎？', answer: '是的，文字格式會保留；只有顏色會更改。' },
    ],
  },

  'add-stamps': {
    title: '添加印章',
    metaDescription: '為PDF檔案添加印章。使用預設或自定義印章進行審批、審閱等。',
    keywords: ['pdf印章', '添加印章', '審批印章', 'pdf橡皮章'],
    description: `
      <p>添加印章允許您在PDF檔案上放置印章圖像。使用預設印章如"已批準"、"已拒絕"、"草稿"，或上傳自定義印章圖像。</p>
      <p>將印章定位在頁面的任何位置，調整大小，並應用到單個或多個頁面。非常適合文件工作流程、審批和狀態指示。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的檔案保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇檔案。' },
      { step: 2, title: '選擇印章', description: '選擇預設印章或上傳自定義印章圖像。' },
      { step: 3, title: '定位並應用', description: '點擊放置印章，調整位置和大小，然後下載。' },
    ],
    useCases: [
      { title: '文件審批', description: '在審閱工作流程中為文件新增"已批準"或"已拒絕"印章。', icon: "check-circle" },
      { title: '狀態指示', description: '將文件標記為"草稿"、"最終版"或"機密"。', icon: "tag" },
      { title: '品質控制', description: '新增質檢印章以指示檢查或審閱完成。', icon: "clipboard-check" },
    ],
    faq: [
      { question: '有哪些預設印章可用？', answer: '預設包括已批準、已拒絕、草稿、最終版、機密、副本等。' },
      { question: '可以上傳自定義印章嗎？', answer: '是的，您可以上傳PNG或JPG圖像作為自定義印章。' },
      { question: '可以在一個文檔中新增多個印章嗎？', answer: '是的，您可以新增多個印章並獨立定位每個印章。' },
    ],
  },

  'remove-annotations': {
    title: '刪除注釋',
    metaDescription: '從PDF檔案中刪除注釋。刪除評論、高亮和標記。',
    keywords: ['刪除pdf注釋', '刪除評論', '刪除高亮', '清理pdf'],
    description: `
      <p>刪除注釋可以從PDF檔案中去除評論、高亮、便簽和其他注釋。這將創建一個沒有標記的幹淨文件版本。</p>
      <p>您可以刪除所有注釋或選擇性地刪除特定類型。非常適合創建已審閱文件的最終版本或刪除敏感評論。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的檔案保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇檔案。' },
      { step: 2, title: '選擇注釋類型', description: '選擇要刪除的注釋類型：評論、高亮、超連結等。' },
      { step: 3, title: '刪除並下載', description: '點擊刪除去除注釋並下載乾淨的PDF。' },
    ],
    useCases: [
      { title: '完成文件', description: '在發布最終文件前刪除審閱評論和標記。', icon: "file-check" },
      { title: '隱私保護', description: '在共享前刪除可能包含敏感信息的評論。', icon: "shield" },
      { title: '乾淨分發', description: '創建已注釋文檔的乾淨副本以供分發。', icon: "copy" },
    ],
    faq: [
      { question: '可以刪除哪些類型的注釋？', answer: '評論、高亮、下劃線、刪除線、便簽、印章和超連結都可以刪除。' },
      { question: '可以保留一些注釋嗎？', answer: '是的，您可以選擇要刪除的注釋類型和要保留的類型。' },
      { question: '這是可逆的嗎？', answer: '不，注釋刪除是永久的。如果需要，請保留原始檔案的備份。' },
    ],
  },

  'form-filler': {
    title: '表單填寫',
    metaDescription: '線上填寫PDF表單。無需列印即可完成互動式PDF表單。',
    keywords: ['填寫pdf表單', 'pdf表單填寫器', '完成pdf表單', '交互式pdf'],
    description: `
      <p>表單填寫允許您直接在瀏覽器中完成互動式PDF表單。填寫文字欄位、勾選核取方塊、選擇選項並新增簽名，無需列印文件。</p>
      <p>該工具支援標準PDF表單和XFA表單。您填寫的資料可以儲存，表單可以扁平化以防止進一步編輯。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的表單數據保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF表單', description: '拖放您的PDF表單或點擊選擇檔案。' },
      { step: 2, title: '填寫表單', description: '點擊表單欄位輸入文字、勾選核取方塊或選擇選項。' },
      { step: 3, title: '儲存並下載', description: '點擊儲存保留您的輸入並下載已填寫的表單。' },
    ],
    useCases: [
      { title: '申請表', description: '完成工作申請、許可申請和注冊表單。', icon: "clipboard" },
      { title: '稅務表單', description: '電子填寫稅務文件和財務表單。', icon: "file-text" },
      { title: '契約', description: '在簽署前用您的信息完成契約表單。', icon: "file-signature" },
    ],
    faq: [
      { question: '可以儲存進度嗎？', answer: '是的，您可以儲存部分填寫的表單並稍後繼續。' },
      { question: '什麼是表單扁平化？', answer: '扁平化將表單欄位轉換為靜態內容，防止進一步編輯。' },
      { question: '支援XFA表單嗎？', answer: '是的，該工具支援標準AcroForms和XFA表單。' },
    ],
  },

  'form-creator': {
    title: '表單創建',
    metaDescription: '建立可填寫的PDF表單。新增文字欄位、核取方塊和下拉選單到檔案。',
    keywords: ['創建pdf表單', 'pdf表單創建器', '可填寫pdf', '新增表單欄位'],
    description: `
      <p>表單建立將靜態PDF檔案轉換為互動式可填寫表單。新增文字欄位、核取方塊、單選按鈕、下拉選單等以建立專業表單。</p>
      <p>將表單元素拖放到文件上，配置欄位屬性，創建可以電子填寫的表單。非常適合創建申請表、調查問卷和數據收集表單。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的檔案保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇要轉換為表單的檔案。' },
      { step: 2, title: '新增表單欄位', description: '從工具欄選擇欄位類型並點擊將其放置在文檔上。' },
      { step: 3, title: '配置並儲存', description: '設定欄位屬性，然後儲存並下載可填寫的PDF表單。' },
    ],
    useCases: [
      { title: '申請表', description: '創建可填寫的工作申請、會員表單和注冊表。', icon: "user-plus" },
      { title: '調查問卷', description: '構建用於數據收集的交互式調查和問卷。', icon: "clipboard-list" },
      { title: '訂單表', description: '創建帶有數量欄位和覆選框的產品訂單表。', icon: "shopping-cart" },
    ],
    faq: [
      { question: '可以新增哪些欄位類型？', answer: '文字欄位、核取方塊、單選按鈕、下拉選單、日期選擇器和簽名欄位。' },
      { question: '可以將欄位設為必填嗎？', answer: '是的，您可以將欄位標記為必填並新增驗證規則。' },
      { question: '可以新增計算嗎？', answer: '可以為數字欄位新增基本計算，如求和和平均值。' },
    ],
  },

  'remove-blank-pages': {
    title: '刪除空白頁',
    metaDescription: '自動檢測並從PDF檔案中刪除空白頁。',
    keywords: ['刪除空白頁', '刪除空頁', '清理pdf', 'pdf空白頁刪除器'],
    description: `
      <p>刪除空白頁自動檢測並從PDF檔案中刪除空頁。這對於清理掃描文件、刪除分隔頁或消除意外包含的空白頁非常有用。</p>
      <p>該工具使用智能檢測來識別真正的空白頁，同時保留內容最少的頁面。您可以調整靈敏度閾值來控制什麼算作"空白"。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的檔案保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖放您的PDF檔案或點擊選擇檔案。' },
      { step: 2, title: '調整閾值', description: '如果需要，設定空白檢測閾值（預設值適用於大多數文件）。' },
      { step: 3, title: '刪除並下載', description: '點擊刪除刪除空白頁並下載清理後的PDF。' },
    ],
    useCases: [
      { title: '清理掃描文件', description: '從批量掃描的檔案中刪除空白頁。', icon: "scan" },
      { title: '刪除分隔符', description: '從合併檔案中刪除空白分隔頁。', icon: "minus" },
      { title: '減小檔案大小', description: '刪除不必要的空白頁以減小檔案大小。', icon: "minimize-2" },
    ],
    faq: [
      { question: '空白檢測如何工作？', answer: '該工具分析頁面內容，將內容最少或沒有可見內容的頁面視為空白。' },
      { question: '可以預覽哪些頁面將被刪除嗎？', answer: '是的，檢測到的空白頁在刪除前會高亮顯示以供審閱。' },
      { question: '如果頁面只有頁首/頁尾怎麼辦？', answer: '您可以調整閾值來確定內容最少的頁面是否應被視為空白。' },
    ],
  },

  // ==================== 轉換為PDF ====================
  'image-to-pdf': {
    title: '圖像轉PDF',
    metaDescription: '將任何圖像轉換為PDF。支援JPG、PNG、WebP、BMP、TIFF、SVG和HEIC格式。',
    keywords: ['圖像轉pdf', '轉換圖像', '照片轉pdf', '圖片轉pdf'],
    description: `
      <p>圖像轉PDF將任何格式的圖像轉換為PDF檔案。支援JPG、PNG、WebP、BMP、TIFF、SVG和HEIC格式，使其成為通用的圖像轉換器。</p>
      <p>將多個圖像合併成一個PDF，按任意順序排列，並自定義頁面大小和方向。非常適合創建照片相冊、文件存檔或作品集。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的圖像保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳圖像', description: '拖放任何支援格式的圖像或點擊選擇檔案。' },
      { step: 2, title: '排列和配置', description: '重新排序圖像並選擇頁面大小和方向選項。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換創建PDF並下載結果。' },
    ],
    useCases: [
      { title: '照片集', description: '將來自各種來源的照片合併成一個PDF相冊。', icon: "images" },
      { title: '混合格式文檔', description: '將不同格式的圖像轉換為統一的PDF。', icon: "file-stack" },
      { title: '存檔創建', description: '從圖像集創建PDF存檔以供長期存儲。', icon: "archive" },
    ],
    faq: [
      { question: '支援哪些圖像格式？', answer: '支援JPG、JPEG、PNG、WebP、BMP、TIFF、TIF、SVG、HEIC和HEIF格式。' },
      { question: '可以混合不同的圖像格式嗎？', answer: '是的，您可以將不同格式的圖像合併成一個PDF。' },
      { question: '圖像品質會保留嗎？', answer: '是的，除非您選擇壓縮，否則圖像以原始品質嵌入。' },
    ],
  },

  'png-to-pdf': {
    title: 'PNG轉PDF',
    metaDescription: '將PNG圖像轉換為PDF。保留透明度並合併多個PNG檔案。',
    keywords: ['png轉pdf', '轉換png', 'png轉換器', '透明圖像轉pdf'],
    description: `
      <p>PNG轉PDF將您的PNG圖像轉換為PDF檔案，同時保留透明度。非常適合圖形、標誌、截圖和具有透明背景的圖像。</p>
      <p>將多個PNG檔案合併成一個PDF，按任意順序排列，並自訂頁面設定。轉換過程保持原始圖像的高品質。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的圖像保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PNG檔案', description: '拖放您的PNG圖像或點擊選擇檔案。' },
      { step: 2, title: '排列和配置', description: '重新排序圖像並選擇頁面大小選項。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換創建PDF並下載。' },
    ],
    useCases: [
      { title: '圖形作品集', description: '將PNG圖形和設計編譯成專業作品集。', icon: "palette" },
      { title: '截圖文件', description: '將截圖轉換為PDF檔案。', icon: "monitor" },
      { title: '標誌集', description: '創建標誌和品牌資產的PDF目錄。', icon: "award" },
    ],
    faq: [
      { question: '透明度會保留嗎？', answer: 'PNG透明度在PDF輸出中會保留。' },
      { question: 'PNG動畫怎麼辦？', answer: '動畫PNG使用第一幀轉換為靜態圖像。' },
      { question: '可以設定背景顏色嗎？', answer: '是的，您可以為透明區域選擇背景顏色。' },
    ],
  },

  'webp-to-pdf': {
    title: 'WebP轉PDF',
    metaDescription: '將WebP圖像轉換為PDF。現代圖像格式轉換，保持品質。',
    keywords: ['webp轉pdf', '轉換webp', 'webp轉換器', '網絡圖像轉pdf'],
    description: `
      <p>WebP轉PDF將現代WebP圖像轉換為PDF檔案。WebP是一種流行的網路圖像格式，這個工具使轉換這些圖像變得簡單，便於列印或存檔。</p>
      <p>將多個WebP檔案合併成一個PDF，並可自訂頁面設定。轉換過程在建立緊湊PDF檔案的同時保留圖像品質。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的圖像保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳WebP檔案', description: '拖放您的WebP圖像或點擊選擇檔案。' },
      { step: 2, title: '配置選項', description: '排列圖像並選擇頁面大小和方向。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換創建PDF。' },
    ],
    useCases: [
      { title: '網絡內容存檔', description: '將網絡圖像轉換為PDF以供離線存檔。', icon: "globe" },
      { title: '列印準備', description: '將WebP圖像轉換為PDF以供列印。', icon: "printer" },
      { title: '格式標準化', description: '將現代WebP轉換為通用兼容的PDF。', icon: "file-check" },
    ],
    faq: [
      { question: '什麼是WebP格式？', answer: 'WebP是Google開發的現代圖像格式，為網絡圖像提供卓越的壓縮。' },
      { question: '品質會保留嗎？', answer: '是的，轉換過程保留原始圖像品質。' },
      { question: '可以轉換動畫WebP嗎？', answer: '動畫WebP文件轉換為靜態圖像。' },
    ],
  },

  'svg-to-pdf': {
    title: 'SVG轉PDF',
    metaDescription: '將SVG向量圖形轉換為PDF。保留可縮放性和品質。',
    keywords: ['svg轉pdf', '轉換svg', '向量轉pdf', '可縮放圖形轉pdf'],
    description: `
      <p>SVG轉PDF將可縮放向量圖形轉換為PDF檔案，同時保留其向量品質。SVG文件在任何尺寸下都保持清晰，這種品質在PDF輸出中得以保持。</p>
      <p>非常適合轉換標誌、圖標、插圖和技術圖紙。生成的PDF保持原始向量圖形的可縮放性。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的檔案保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳SVG檔案', description: '拖放您的SVG檔案或點擊選擇。' },
      { step: 2, title: '配置設定', description: '選擇頁面大小和排列選項。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換創建向量PDF。' },
    ],
    useCases: [
      { title: '標誌轉換', description: '將SVG標誌轉換為PDF以供印刷材料使用。', icon: "award" },
      { title: '技術圖紙', description: '將CAD導出和技術插圖轉換為PDF。', icon: "ruler" },
      { title: '圖標集', description: '創建圖標集和圖形的PDF目錄。', icon: "grid" },
    ],
    faq: [
      { question: '向量品質會保留嗎？', answer: '是的，SVG向量品質在PDF輸出中完全保留。' },
      { question: '可以轉換複雜的SVG嗎？', answer: '是的，支援帶有漸變、濾鏡和效果的複雜SVG。' },
      { question: '嵌入字體怎麼辦？', answer: 'SVG文件中的嵌入字體在PDF中會保留。' },
    ],
  },

  'bmp-to-pdf': {
    title: 'BMP轉PDF',
    metaDescription: '將BMP位圖圖像轉換為PDF。傳統格式支援，保持品質。',
    keywords: ['bmp轉pdf', '轉換bmp', '位圖轉pdf', 'bmp轉換器'],
    description: `
      <p>BMP轉PDF將位圖圖像轉換為PDF檔案。BMP是Windows環境中常用的傳統圖像格式，這個工具使將這些檔案轉換為現代PDF格式變得簡單。</p>
      <p>將多個BMP檔案合併成一個PDF，並可自定義設置。轉換過程在保持圖像品質的同時壓縮通常較大的BMP檔案。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的圖像保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳BMP檔案', description: '拖放您的BMP圖像或點擊選擇檔案。' },
      { step: 2, title: '配置選項', description: '排列圖像並選擇頁面設置。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換創建PDF。' },
    ],
    useCases: [
      { title: '傳統文件轉換', description: '將舊的BMP檔案轉換為現代PDF格式。', icon: "history" },
      { title: 'Windows截圖', description: '將Windows位圖截圖轉換為PDF檔案。', icon: "monitor" },
      { title: '存檔現代化', description: '將傳統圖像存檔更新為PDF格式。', icon: "archive" },
    ],
    faq: [
      { question: '文件大小會減小嗎？', answer: '是的，BMP文件在轉換為PDF時通常會顯著壓縮。' },
      { question: '品質會保留嗎？', answer: '是的，轉換過程中圖像品質得以保持。' },
      { question: '支援哪些BMP顏色深度？', answer: '支援所有標準BMP顏色深度，包括24位和32位。' },
    ],
  },

  'heic-to-pdf': {
    title: 'HEIC轉PDF',
    metaDescription: '將iPhone HEIC照片轉換為PDF。Apple圖像格式轉換變得簡單。',
    keywords: ['heic轉pdf', '轉換heic', 'iphone照片轉pdf', 'apple圖像轉pdf'],
    description: `
      <p>HEIC轉PDF將Apple的高效圖像格式照片轉換為PDF文檔。HEIC是iPhone和iPad上的默認照片格式，這個工具使分享這些照片變得簡單。</p>
      <p>將多張HEIC照片合併成一個PDF，非常適合從iPhone照片創建照片相冊或文檔存檔。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的照片保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳HEIC文件', description: '拖放您的HEIC照片或點擊選擇文件。' },
      { step: 2, title: '排列照片', description: '重新排序照片並選擇頁面設置。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換創建PDF。' },
    ],
    useCases: [
      { title: 'iPhone照片相冊', description: '從iPhone照片創建PDF相冊以供分享。', icon: "smartphone" },
      { title: '文檔掃描', description: '將iPhone文檔掃描轉換為PDF格式。', icon: "scan" },
      { title: '跨平台分享', description: '將HEIC轉換為PDF以實現通用兼容性。', icon: "share-2" },
    ],
    faq: [
      { question: '什麼是HEIC格式？', answer: 'HEIC（高效圖像容器）是Apple的圖像格式，比JPEG提供更好的壓縮。' },
      { question: '支援實況照片嗎？', answer: '實況照片使用關鍵幀轉換為靜態圖像。' },
      { question: 'EXIF數據會保留嗎？', answer: '照片後設資料可以在轉換過程中選擇性保留或刪除。' },
    ],
  },

  'tiff-to-pdf': {
    title: 'TIFF轉PDF',
    metaDescription: '將TIFF圖像轉換為PDF。支援多頁TIFF文件和高品質轉換。',
    keywords: ['tiff轉pdf', '轉換tiff', 'tif轉pdf', '多頁tiff'],
    description: `
      <p>TIFF轉PDF將TIFF圖像（包括多頁TIFF文件）轉換為PDF文檔。TIFF常用於高品質掃描和專業圖形。</p>
      <p>多頁TIFF文件自動轉換為多頁PDF。轉換過程保留原始圖像的高品質。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的文件保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳TIFF文件', description: '拖放您的TIFF文件或點擊選擇。' },
      { step: 2, title: '配置選項', description: '選擇頁面設置和壓縮選項。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換創建PDF。' },
    ],
    useCases: [
      { title: '掃描文檔', description: '將高品質掃描從TIFF轉換為PDF。', icon: "scan" },
      { title: '專業圖形', description: '轉換專業TIFF圖形以供分發。', icon: "image" },
      { title: '存檔轉換', description: '將TIFF存檔轉換為更易訪問的PDF格式。', icon: "archive" },
    ],
    faq: [
      { question: '支援多頁TIFF嗎？', answer: '是的，多頁TIFF文件自動轉換為多頁PDF。' },
      { question: '品質會保留嗎？', answer: '是的，TIFF品質在PDF輸出中完全保留。' },
      { question: '使用什麼壓縮？', answer: '您可以選擇無損和有損壓縮選項。' },
    ],
  },

  'txt-to-pdf': {
    title: '文本轉PDF',
    metaDescription: '將純文本文件轉換為PDF。自定義字體、邊距和頁面布局。',
    keywords: ['txt轉pdf', '文本轉pdf', '轉換文本文件', '純文本轉pdf'],
    description: `
      <p>文本轉PDF將純文本文件轉換為格式化的PDF文檔。自定義字體、大小、邊距和頁面布局，從簡單文本創建專業外觀的文檔。</p>
      <p>非常適合轉換代碼文件、日誌、筆記或任何純文本內容為可共享的PDF格式。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的文件保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳文本文件', description: '拖放您的.txt文件或點擊選擇。' },
      { step: 2, title: '自定義格式', description: '選擇字體、大小、邊距和頁面設置。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換創建格式化的PDF。' },
    ],
    useCases: [
      { title: '代碼文檔', description: '將源代碼文件轉換為PDF以供文檔使用。', icon: "code" },
      { title: '日誌存檔', description: '將日誌文件轉換為PDF以供存檔。', icon: "file-text" },
      { title: '筆記轉換', description: '將純文本筆記轉換為格式化的PDF文檔。', icon: "sticky-note" },
    ],
    faq: [
      { question: '有哪些字體可用？', answer: '有多種字體可用，包括用於代碼的等寬字體。' },
      { question: '自動換行嗎？', answer: '是的，長行會自動換行以適應頁面。' },
      { question: '可以保留格式嗎？', answer: '原始文本中的空白和縮進會保留。' },
    ],
  },

  'json-to-pdf': {
    title: 'JSON轉PDF',
    metaDescription: '將JSON文件轉換為格式化的PDF。語法高亮和結構化輸出。',
    keywords: ['json轉pdf', '轉換json', 'json查看器', 'json格式化器'],
    description: `
      <p>JSON轉PDF將JSON數據文件轉換為格式化、可讀的PDF文檔。輸出包括語法高亮和正確的縮進，便於閱讀。</p>
      <p>非常適合記錄API響應、配置文件或任何需要以可讀格式共享或存檔的JSON數據。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的數據保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳JSON文件', description: '拖放您的.json文件或點擊選擇。' },
      { step: 2, title: '配置顯示', description: '選擇格式化選項和語法高亮。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換創建格式化的PDF。' },
    ],
    useCases: [
      { title: 'API文檔', description: '將API響應轉換為PDF以供文檔使用。', icon: "code" },
      { title: '配置存檔', description: '以可讀的PDF格式存檔配置文件。', icon: "settings" },
      { title: '數據報告', description: '從JSON數據導出創建PDF報告。', icon: "bar-chart" },
    ],
    faq: [
      { question: '包含語法高亮嗎？', answer: '是的，JSON語法用顏色高亮顯示鍵、值和類型。' },
      { question: '嵌套數據如何處理？', answer: '嵌套對象和數組會正確縮進以提高可讀性。' },
      { question: '大型JSON文件怎麼辦？', answer: '大文件會自動分頁到多個頁面。' },
    ],
  },

  'word-to-pdf': {
    title: 'Word轉PDF',
    metaDescription: '將Word文檔（DOCX）轉換為PDF。保留格式和布局。',
    keywords: ['word轉pdf', 'docx轉pdf', '轉換word', 'word轉換器', '微軟word轉pdf'],
    description: `
      <p>Word轉PDF將Microsoft Word文檔轉換為PDF格式，同時保留原始格式、布局和內容結構。</p>
      <p>上傳您的DOCX文件，獲得適合分享、列印或存檔的高品質PDF輸出。轉換過程保持文本格式、段落樣式和基本文檔結構。</p>
      <p>所有轉換都在您的瀏覽器本地進行，確保您的文檔保持隱私和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳Word文檔', description: '拖放您的.docx文件或點擊從設備中選擇。' },
      { step: 2, title: '等待處理', description: '工具將加載文檔並準備進行轉換。' },
      { step: 3, title: '下載PDF', description: '點擊下載保存轉換後的PDF文檔。' },
    ],
    useCases: [
      { title: '文檔分享', description: '將Word文檔轉換為PDF以便通用分享和查看。', icon: "share-2" },
      { title: '列印準備', description: '從Word文檔創建可列印的PDF。', icon: "printer" },
      { title: '文檔存檔', description: '以穩定的PDF格式存檔Word文檔以供長期保存。', icon: "archive" },
    ],
    faq: [
      { question: '支援.doc格式嗎？', answer: '目前僅支援.docx格式。請先使用Microsoft Word或LibreOffice將.doc文件轉換為.docx。' },
      { question: '圖像會保留嗎？', answer: '文本內容和基本格式會保留。包含許多圖像的覆雜布局可能會簡化渲染。' },
      { question: '轉換安全嗎？', answer: '是的，所有處理都在您的瀏覽器中進行。您的文檔永遠不會離開您的設備。' },
    ],
  },

  'excel-to-pdf': {
    title: 'Excel轉PDF',
    metaDescription: '將Excel電子表格（XLSX）轉換為PDF。保留表格和數據。',
    keywords: ['excel轉pdf', 'xlsx轉pdf', '轉換excel', '電子表格轉pdf', '微軟excel轉pdf'],
    description: `
      <p>Excel轉PDF將Microsoft Excel電子表格轉換為PDF格式，同時保留表格結構和數據組織。</p>
      <p>上傳您的XLSX文件，獲得具有正確格式化表格的清晰PDF輸出。工作簿中的每個工作表都會成為PDF中的單獨部分。</p>
      <p>所有轉換都在您的瀏覽器本地進行，確保您的數據保持隱私和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳Excel文件', description: '拖放您的.xlsx文件或點擊從設備中選擇。' },
      { step: 2, title: '等待處理', description: '工具將加載電子表格並轉換所有工作表。' },
      { step: 3, title: '下載PDF', description: '點擊下載保存轉換後的PDF文檔。' },
    ],
    useCases: [
      { title: '報告分享', description: '將Excel報告轉換為PDF以供利益相關者分發。', icon: "file-text" },
      { title: '數據存檔', description: '以穩定的PDF格式存檔電子表格數據。', icon: "archive" },
      { title: '列印準備', description: '從Excel工作表創建可列印的PDF。', icon: "printer" },
    ],
    faq: [
      { question: '支援多個工作表嗎？', answer: '是的，工作簿中的所有工作表都會被轉換並包含在PDF中。' },
      { question: '支援.xls格式嗎？', answer: '目前僅支援.xlsx格式。請先將.xls文件另存為.xlsx。' },
      { question: '公式會保留嗎？', answer: 'PDF顯示計算值。公式在PDF格式中不可執行。' },
    ],
  },

  'pptx-to-pdf': {
    title: 'PowerPoint轉PDF',
    metaDescription: '將PowerPoint演示文稿（PPTX）轉換為PDF。保留幻燈片內容便於分享。',
    keywords: ['powerpoint轉pdf', 'pptx轉pdf', '轉換pptx', '演示文稿轉pdf', '幻燈片轉pdf'],
    description: `
      <p>PowerPoint轉PDF將Microsoft PowerPoint演示文稿轉換為PDF格式，保留幻燈片內容和文本以便輕鬆分享和查看。</p>
      <p>每張幻燈片成為PDF中的一頁，保持演示流程。非常適合與沒有安裝PowerPoint的人分享演示文稿。</p>
      <p>所有轉換都在您的瀏覽器本地進行，確保您的演示文稿保持隱私和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PowerPoint文件', description: '拖放您的.pptx文件或點擊從設備中選擇。' },
      { step: 2, title: '等待處理', description: '工具將提取幻燈片內容並創建PDF。' },
      { step: 3, title: '下載PDF', description: '點擊下載保存轉換後的PDF文檔。' },
    ],
    useCases: [
      { title: '演示文稿分享', description: '與任何人分享演示文稿，無需PowerPoint。', icon: "share-2" },
      { title: '講義創建', description: '從演示幻燈片創建PDF講義。', icon: "file-text" },
      { title: '存檔演示文稿', description: '以穩定的PDF格式存檔演示文稿。', icon: "archive" },
    ],
    faq: [
      { question: '動畫會保留嗎？', answer: 'PDF是靜態格式，因此動畫和過渡不會保留。每張幻燈片變成靜態頁面。' },
      { question: '支援.ppt格式嗎？', answer: '目前僅支援.pptx格式。請先將.ppt文件轉換為.pptx。' },
      { question: '演講者備注會包含嗎？', answer: '目前演講者備注不會包含在PDF輸出中。' },
    ],
  },

  'xps-to-pdf': {
    title: 'XPS轉PDF',
    metaDescription: '將XPS文檔轉換為PDF格式。高保真轉換，保留布局和圖形。',
    keywords: ['xps轉pdf', '轉換xps', 'xps轉換器', '微軟xps轉pdf', 'oxps轉pdf'],
    description: `
      <p>XPS轉PDF將Microsoft XPS（XML紙規範）文檔轉換為PDF格式，同時保留原始布局、文本和向量圖形。</p>
      <p>XPS是一種類似於PDF的固定文檔格式。此工具使用原生XPS解析提供高保真轉換，確保文檔的準確再現。</p>
      <p>所有轉換都在您的瀏覽器本地進行，確保您的文檔保持隱私和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳XPS文件', description: '拖放您的.xps文件或點擊從設備中選擇。' },
      { step: 2, title: '等待處理', description: '工具將解析並轉換XPS文檔。' },
      { step: 3, title: '下載PDF', description: '點擊下載保存轉換後的PDF文檔。' },
    ],
    useCases: [
      { title: '格式轉換', description: '將XPS文檔轉換為更廣泛支援的PDF格式。', icon: "file" },
      { title: '文檔分享', description: '與沒有XPS查看器的使用者分享XPS文檔。', icon: "share-2" },
      { title: '存檔遷移', description: '將XPS存檔遷移到PDF格式以獲得更好的兼容性。', icon: "archive" },
    ],
    faq: [
      { question: '什麼是XPS格式？', answer: 'XPS（XML紙規範）是Microsoft的固定文檔格式，類似於PDF。它常用於Windows列印。' },
      { question: '轉換是無損的嗎？', answer: '是的，轉換以高保真度保留文本、圖形和布局。' },
      { question: '支援多頁XPS文件嗎？', answer: '是的，XPS文檔中的所有頁面都會轉換到PDF中。' },
    ],
  },

  'rtf-to-pdf': {
    title: 'RTF轉PDF',
    metaDescription: '將RTF（富文本格式）文件轉換為PDF。保留文檔中的文本格式。',
    keywords: ['rtf轉pdf', '轉換rtf', '富文本轉pdf', 'rtf轉換器'],
    description: `
      <p>RTF轉PDF將富文本格式文件轉換為PDF文檔。RTF是一種廣泛支援的文本格式，包含基本格式如字體、顏色和樣式。</p>
      <p>上傳您的RTF文件，獲得乾淨的PDF輸出，同時保留文本內容和基本格式。非常適合將舊文檔轉換為現代PDF格式。</p>
      <p>所有轉換都在您的瀏覽器本地進行，確保您的文檔保持隱私和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳RTF文件', description: '拖放您的.rtf文件或點擊從設備中選擇。' },
      { step: 2, title: '等待處理', description: '工具將解析並轉換RTF內容。' },
      { step: 3, title: '下載PDF', description: '點擊下載保存轉換後的PDF文檔。' },
    ],
    useCases: [
      { title: '舊版轉換', description: '將舊的RTF文檔轉換為現代PDF格式。', icon: "history" },
      { title: '文檔分享', description: '以通用可查看的PDF格式分享RTF文檔。', icon: "share-2" },
      { title: '存檔文檔', description: '以穩定的PDF格式存檔RTF文件以供長期保存。', icon: "archive" },
    ],
    faq: [
      { question: '保留哪些格式？', answer: '包括字體、段落和樣式在內的基本文本格式會被轉換。覆雜的RTF功能可能會被簡化。' },
      { question: '可以轉換多個RTF文件嗎？', answer: '目前一次只能轉換一個文件。使用合併PDF來合併多個轉換後的文件。' },
      { question: '支援嵌入圖像嗎？', answer: '文本內容是主要焦點。嵌入對象可能無法渲染。' },
    ],
  },

  'epub-to-pdf': {
    title: 'EPUB轉PDF',
    metaDescription: '將EPUB電子書轉換為PDF。保留格式、圖片和章節結構。',
    keywords: ['epub轉pdf', '轉換epub', '電子書轉pdf', 'epub轉換器'],
    description: `
      <p>EPUB轉PDF將電子書文件轉換為高品質的PDF文檔。EPUB是最流行的電子書格式，被大多數電子閱讀器和數字圖書館使用。</p>
      <p>此工具可保留電子書的文本格式、圖片和章節結構。非常適合列印、存檔或以通用格式分享電子書。</p>
      <p>所有轉換都在您的瀏覽器本地進行，使用先進的渲染技術，確保您的書籍保持隱私，轉換速度快。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳EPUB文件', description: '拖放您的.epub文件或點擊從設備中選擇。' },
      { step: 2, title: '等待轉換', description: '工具將渲染並轉換電子書的所有頁面。' },
      { step: 3, title: '下載PDF', description: '點擊下載保存轉換後的PDF文檔。' },
    ],
    useCases: [
      { title: '列印電子書', description: '將電子書轉換為PDF以便物理列印。', icon: "printer" },
      { title: '存檔書籍', description: '以長期穩定的PDF格式存儲電子書。', icon: "archive" },
      { title: '分享文檔', description: '與任何人分享電子書，即使沒有電子閱讀器。', icon: "share-2" },
    ],
    faq: [
      { question: '格式會保留嗎？', answer: '是的！此工具使用原生EPUB渲染，以高保真度保留文本格式、圖片和布局。' },
      { question: '支援受DRM保護的EPUB嗎？', answer: '不支援，受DRM保護的電子書無法轉換。僅支援無DRM的EPUB文件。' },
      { question: '頁面大小是如何確定的？', answer: 'EPUB內容被渲染為標準A4頁面大小，以獲得最佳可讀性。' },
    ],
  },

  'mobi-to-pdf': {
    title: 'MOBI轉PDF',
    metaDescription: '將MOBI電子書轉換為PDF。支援Kindle格式的高品質渲染。',
    keywords: ['mobi轉pdf', '轉換mobi', 'kindle轉pdf', 'azw轉pdf', 'mobi轉換器'],
    description: `
      <p>MOBI轉PDF將亞馬遜Kindle電子書文件轉換為高品質的PDF文檔。MOBI格式（包括AZW和AZW3）是亞馬遜專有的電子書格式，用於Kindle設備。</p>
      <p>此工具可保留Kindle書籍的文本格式、圖片和結構。非常適合列印、存檔或在不支援MOBI格式的設備上閱讀。</p>
      <p>所有轉換都在您的瀏覽器本地進行，使用先進的渲染技術，確保您的書籍保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳MOBI文件', description: '拖放您的.mobi、.azw或.azw3文件，或點擊從設備中選擇。' },
      { step: 2, title: '等待轉換', description: '工具將渲染並轉換電子書的所有頁面。' },
      { step: 3, title: '下載PDF', description: '點擊下載保存轉換後的PDF文檔。' },
    ],
    useCases: [
      { title: '列印Kindle書籍', description: '將Kindle電子書轉換為PDF以便物理列印。', icon: "printer" },
      { title: '存檔書籍', description: '以通用PDF格式存儲Kindle書籍。', icon: "archive" },
      { title: '跨設備閱讀', description: '在只支援PDF的設備上閱讀Kindle書籍。', icon: "tablet-smartphone" },
    ],
    faq: [
      { question: '支援哪些MOBI格式？', answer: '此工具支援.mobi、.azw和.azw3文件（非DRM版本）。' },
      { question: '支援受DRM保護的Kindle書籍嗎？', answer: '不支援，受DRM保護的電子書無法轉換。僅支援無DRM的文件。' },
      { question: '格式會保留嗎？', answer: '是的！該工具使用原生MOBI渲染來保留文本、圖片和布局。' },
    ],
  },

  'djvu-to-pdf': {
    title: 'DJVU轉PDF',
    metaDescription: '將DJVU文檔文件轉換為PDF。掃描文檔和書籍的高品質渲染。',
    keywords: ['djvu轉pdf', '轉換djvu', 'djvu轉換器', 'djvu pdf', 'djv轉pdf'],
    description: `
      <p>DJVU轉PDF將DjVu文檔文件轉換為高品質的PDF文檔。DjVu是一種計算機文件格式，主要用於存儲掃描文檔，特別是包含文本、線條圖和照片組合的文檔。</p>
      <p>此工具以您選擇的DPI（每英寸點數）渲染DJVU文件的每一頁，並將它們合併為PDF文檔。非常適合轉換掃描書籍、技術手冊和檔案文檔。</p>
      <p>所有轉換都在您的瀏覽器本地進行，確保您的文檔保持隱私和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳DJVU文件', description: '拖放您的.djvu或.djv文件，或點擊從設備中選擇。' },
      { step: 2, title: '配置選項', description: '選擇輸出DPI（72、150或300）和PDF的圖像品質。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換為PDF並下載轉換後的文檔。' },
    ],
    useCases: [
      { title: '存檔文檔', description: '將DJVU檔案轉換為通用PDF格式。', icon: "archive" },
      { title: '分享掃描書籍', description: '以PDF格式分享掃描書籍以獲得更廣泛的兼容性。', icon: "share-2" },
      { title: '列印文檔', description: '將DJVU轉換為高品質PDF以進行列印。', icon: "printer" },
    ],
    faq: [
      { question: '什麼是DJVU格式？', answer: 'DjVu是一種文件格式，設計用於存儲掃描文檔，特別是包含文本、圖形和圖像的文檔。它為掃描內容提供比PDF更好的壓縮。' },
      { question: '我應該選擇多少DPI？', answer: '72 DPI適合網頁瀏覽，150 DPI適合標準文檔，300 DPI適合高品質列印。' },
      { question: '文字是否可搜尋？', answer: '文字將渲染為圖像。如果您需要可搜尋的文字，請在轉換後使用我們的OCR PDF工具。' },
    ],
  },

  'fb2-to-pdf': {
    title: 'FB2轉PDF',
    metaDescription: '將FictionBook (FB2)電子書轉換為PDF。支援多個文件的高品質渲染。',
    keywords: ['fb2轉pdf', '轉換fb2', 'fictionbook轉pdf', 'fb2轉換器', 'fb2.zip轉pdf'],
    description: `
      <p>FB2轉PDF將FictionBook (FB2)電子書文件轉換為高品質的PDF文檔。FB2是一種流行的基於XML的電子書格式，在俄羅斯和東歐廣泛使用。</p>
      <p>此工具支援.fb2和.fb2.zip文件，並可一次處理多個文件。它保留電子書的文本格式、圖片和章節結構。</p>
      <p>所有轉換都在您的瀏覽器本地進行，使用先進的渲染技術，確保您的書籍保持隱私，轉換速度快。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳FB2文件', description: '拖放一個或多個.fb2或.fb2.zip文件，或點擊從設備中選擇。' },
      { step: 2, title: '選擇品質', description: '選擇輸出品質：低（72 DPI）、中（150 DPI）或高（300 DPI）。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換為PDF並下載轉換後的文檔。' },
    ],
    useCases: [
      { title: '列印電子書', description: '將FB2電子書轉換為PDF以便物理列印。', icon: "printer" },
      { title: '批量轉換', description: '一次將多個FB2文件轉換為PDF。', icon: "layers" },
      { title: '通用格式', description: '以適用於任何設備的PDF格式分享電子書。', icon: "share-2" },
    ],
    faq: [
      { question: '可以一次轉換多個FB2文件嗎？', answer: '可以！此工具支援同時批量轉換最多20個FB2文件。' },
      { question: '支援.fb2.zip文件嗎？', answer: '支援，該工具會自動從.fb2.zip壓縮包中提取並轉換FB2文件。' },
      { question: '格式會保留嗎？', answer: '是的！該工具使用原生FB2渲染，以高保真度保留文本格式、圖片和章節結構。' },
    ],
  },

  // ==================== 從PDF轉換 ====================

  'pdf-to-jpg': {
    title: 'PDF轉JPG',
    metaDescription: '將PDF頁面轉換為JPG圖像。高品質提取，可自定義分辨率。',
    keywords: ['pdf轉jpg', 'pdf轉jpeg', '轉換pdf為圖像', '提取pdf圖像'],
    description: `
      <p>PDF轉JPG將PDF文檔頁面轉換為高品質的JPG圖像。提取所有頁面或選擇特定頁面進行轉換，可自定義分辨率和品質設置。</p>
      <p>非常適合從PDF中提取圖像、創建縮略圖或轉換文檔以供網絡使用。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '選擇頁面和品質', description: '選擇要轉換的頁面並設置品質/DPI選項。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換提取圖像並作為ZIP下載。' },
    ],
    useCases: [
      { title: '網絡發布', description: '將PDF頁面轉換為圖像以供網站使用。', icon: "globe" },
      { title: '社交媒體', description: '提取頁面作為圖像以供社交媒體分享。', icon: "share-2" },
      { title: '演示文稿', description: '將PDF幻燈片轉換為圖像以供演示。', icon: "presentation" },
    ],
    faq: [
      { question: '有哪些品質設置可用？', answer: '您可以設置72到300的DPI和1-100的JPEG品質。' },
      { question: '可以只轉換特定頁面嗎？', answer: '是的，您可以選擇單個頁面或頁面範圍進行轉換。' },
      { question: '多個頁面如何處理？', answer: '每個頁面成為單獨的JPG文件，作為ZIP壓縮包下載。' },
    ],
  },

  'pdf-to-png': {
    title: 'PDF轉PNG',
    metaDescription: '將PDF頁面轉換為PNG圖像。無損品質，支援透明度。',
    keywords: ['pdf轉png', '轉換pdf為png', 'pdf圖像提取', '無損pdf轉換'],
    description: `
      <p>PDF轉PNG將PDF文檔頁面轉換為具有無損壓縮的高品質PNG圖像。PNG格式完美保留圖像品質並支援透明度。</p>
      <p>非常適合提取圖形、圖表或任何品質保持至關重要的內容。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '配置選項', description: '選擇頁面並設置分辨率（DPI）選項。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換提取PNG圖像。' },
    ],
    useCases: [
      { title: '圖形提取', description: '以完美品質提取圖表和圖形。', icon: "image" },
      { title: '設計資產', description: '將PDF設計轉換為PNG以供編輯軟件使用。', icon: "palette" },
      { title: '文檔', description: '為技術文檔創建高品質圖像。', icon: "file-text" },
    ],
    faq: [
      { question: '為什麼選擇PNG而不是JPG？', answer: 'PNG提供無損壓縮和透明度支援，非常適合圖形和文本。' },
      { question: '支援透明背景嗎？', answer: '是的，具有透明度的PDF頁面在PNG輸出中會保留。' },
      { question: '應該使用什麼DPI？', answer: '螢幕查看使用150 DPI，列印使用300 DPI。' },
    ],
  },

  'pdf-to-webp': {
    title: 'PDF轉WebP',
    metaDescription: '將PDF頁面轉換為WebP圖像。現代格式，出色的壓縮。',
    keywords: ['pdf轉webp', '轉換pdf為webp', '現代圖像格式', '網絡優化圖像'],
    description: `
      <p>PDF轉WebP將PDF文檔頁面轉換為WebP圖像，這是Google的現代圖像格式，提供出色的壓縮和高品質。</p>
      <p>WebP圖像比JPG或PNG更小，同時保持相當的品質，非常適合網絡使用。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '設置品質選項', description: '選擇頁面並設置品質/壓縮設置。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換創建WebP圖像。' },
    ],
    useCases: [
      { title: '網絡優化', description: '從PDF內容創建網絡優化的圖像。', icon: "globe" },
      { title: '帶寬節省', description: '減小圖像文件大小以加快加載速度。', icon: "zap" },
      { title: '現代網站', description: '為現代網絡項目使用現代圖像格式。', icon: "layout" },
    ],
    faq: [
      { question: '什麼是WebP格式？', answer: 'WebP是Google的現代圖像格式，提供卓越的壓縮。' },
      { question: 'WebP被廣泛支援嗎？', answer: '是的，所有現代瀏覽器都支援WebP格式。' },
      { question: 'WebP文件小多少？', answer: 'WebP文件通常比同等JPG文件小25-35%。' },
    ],
  },

  'pdf-to-bmp': {
    title: 'PDF轉BMP',
    metaDescription: '將PDF頁面轉換為BMP位圖圖像。未壓縮格式，最大兼容性。',
    keywords: ['pdf轉bmp', '轉換pdf為位圖', '未壓縮圖像', '傳統格式'],
    description: `
      <p>PDF轉BMP將PDF文檔頁面轉換為BMP位圖圖像。BMP是一種未壓縮格式，確保與傳統系統和應用程式的最大兼容性。</p>
      <p>雖然BMP文件比壓縮格式大，但它們提供完美的品質和通用兼容性。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '選擇頁面', description: '選擇要轉換的頁面並設置DPI。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換創建BMP圖像。' },
    ],
    useCases: [
      { title: '傳統系統', description: '創建與舊軟件兼容的圖像。', icon: "history" },
      { title: 'Windows應用程式', description: '為Windows特定應用程式生成BMP文件。', icon: "monitor" },
      { title: '未壓縮存檔', description: '從PDF創建未壓縮的圖像存檔。', icon: "archive" },
    ],
    faq: [
      { question: '為什麼使用BMP格式？', answer: 'BMP提供未壓縮的品質和與傳統系統的最大兼容性。' },
      { question: 'BMP文件更大嗎？', answer: '是的，BMP文件未壓縮，比JPG或PNG大得多。' },
      { question: '支援哪些顏色深度？', answer: '支援24位和32位顏色深度。' },
    ],
  },

  'pdf-to-tiff': {
    title: 'PDF轉TIFF',
    metaDescription: '將PDF轉換為TIFF圖像。專業品質，支援多頁。',
    keywords: ['pdf轉tiff', '轉換pdf為tiff', '專業圖像', '多頁tiff'],
    description: `
      <p>PDF轉TIFF將PDF文檔轉換為高品質的TIFF圖像。由於其無損壓縮，TIFF是專業列印和存檔的首選格式。</p>
      <p>創建單頁TIFF或將所有頁面合併成多頁TIFF文件。非常適合專業和存檔目的。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '配置輸出', description: '選擇單頁或多頁TIFF並設置DPI。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換創建TIFF圖像。' },
    ],
    useCases: [
      { title: '專業列印', description: '從PDF文檔創建可列印的TIFF文件。', icon: "printer" },
      { title: '文檔存檔', description: '以高品質TIFF格式存檔文檔。', icon: "archive" },
      { title: '出版', description: '將PDF轉換為TIFF以供出版工作流程使用。', icon: "book" },
    ],
    faq: [
      { question: '可以創建多頁TIFF嗎？', answer: '是的，您可以將所有PDF頁面合併成一個多頁TIFF。' },
      { question: '有哪些壓縮選項？', answer: 'LZW、ZIP和無壓縮選項可用。' },
      { question: '列印應該使用什麼DPI？', answer: '專業列印使用300 DPI或更高。' },
    ],
  },

  'pdf-to-svg': {
    title: 'PDF轉SVG',
    metaDescription: '將PDF頁面轉換為SVG向量圖形。任意尺寸完美縮放，支援單獨導出每頁。',
    keywords: ['pdf轉svg', '轉換pdf為svg', '向量圖形', '可縮放pdf', 'svg轉換器'],
    description: `
      <p>PDF轉SVG將您的PDF文檔的每一頁轉換為可縮放向量圖形（SVG）。SVG是一種向量格式，在任何縮放級別或列印尺寸下都能保持完美品質。</p>
      <p>與光柵格式（JPG、PNG）不同，SVG圖形在縮放時永遠不會變得模糊。這使其非常適合標誌、圖表、技術圖紙以及任何需要以不同尺寸顯示的內容。</p>
      <p>預覽每個轉換後的頁面，可以單獨下載或作為ZIP文件下載。所有處理都在您的瀏覽器本地進行，確保您的文檔完全隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊瀏覽選擇。' },
      { step: 2, title: '配置選項', description: '設置分辨率品質，可選擇指定頁面範圍。' },
      { step: 3, title: '預覽和轉換', description: '點擊轉換進行處理。點擊縮略圖預覽每個頁面。' },
      { step: 4, title: '下載', description: '下載單個SVG文件或將所有頁面打包為ZIP壓縮包。' },
    ],
    useCases: [
      { title: '標誌和圖形', description: '從PDF中提取標誌和向量圖形，用於設計軟件。', icon: "pen-tool" },
      { title: '技術圖紙', description: '將技術圖紙和圖表轉換為可縮放的SVG格式。', icon: "ruler" },
      { title: '網頁開發', description: '從PDF內容創建網頁友好的SVG文件，用於響應式網站。', icon: "globe" },
      { title: '任意尺寸列印', description: '生成可以任意尺寸完美列印的向量圖形。', icon: "printer" },
    ],
    faq: [
      { question: '什麼是SVG格式？', answer: 'SVG（可縮放向量圖形）是一種可以縮放到任意尺寸而不損失品質的向量圖像格式。它廣泛用於標誌、圖標和網頁圖形。' },
      { question: 'SVG是真正的向量嗎？', answer: 'SVG包含PDF頁面的高分辨率渲染。對於具有向量內容的PDF，您可以在任何縮放級別獲得清晰的輸出。' },
      { question: '可以在下載前預覽嗎？', answer: '可以！點擊任何縮略圖查看SVG的完整尺寸預覽。您可以下載單個頁面或全部下載。' },
      { question: '應該選擇什麼分辨率？', answer: '更高的分辨率（216或288 DPI）會產生更大、更詳細的SVG。使用較低設置可以加快處理速度並獲得更小的文件。' },
    ],
  },

  'pdf-to-greyscale': {
    title: 'PDF轉灰度',
    metaDescription: '將彩色PDF轉換為灰度。減小文件大小並準備黑白列印。',
    keywords: ['pdf轉灰度', '灰度pdf', '黑白pdf', '刪除顏色'],
    description: `
      <p>PDF轉灰度將彩色PDF文檔轉換為灰度（黑白）。這可以減小文件大小並為黑白列印準備文檔。</p>
      <p>轉換過程在刪除顏色信息的同時保留文本清晰度和圖像細節。非常適合草稿列印或創建列印機友好版本。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的彩色PDF文件或點擊選擇。' },
      { step: 2, title: '預覽轉換', description: '預覽灰度版本的外觀。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換創建灰度PDF。' },
    ],
    useCases: [
      { title: '節省列印', description: '轉換為灰度以節省彩色列印成本。', icon: "printer" },
      { title: '草稿文檔', description: '創建黑白草稿以供審閱。', icon: "file-text" },
      { title: '減小文件大小', description: '通過刪除顏色信息減小PDF大小。', icon: "minimize-2" },
    ],
    faq: [
      { question: '文本會保持可讀嗎？', answer: '是的，灰度轉換過程中文本清晰度得以保留。' },
      { question: '文件會小多少？', answer: '文件大小減少因情況而異，但對於顏色密集的文檔可以減少20-50%。' },
      { question: '可以只轉換特定頁面嗎？', answer: '是的，您可以選擇要轉換為灰度的頁面。' },
    ],
  },

  'pdf-to-json': {
    title: 'PDF轉JSON',
    metaDescription: '將PDF內容提取為JSON格式。從PDF文檔獲取結構化數據。',
    keywords: ['pdf轉json', '提取pdf數據', 'pdf解析器', '結構化pdf數據'],
    description: `
      <p>PDF轉JSON將PDF文檔中的內容提取為結構化的JSON格式。提取文本、後設資料、頁面信息和文檔結構以供程式化使用。</p>
      <p>非常適合數據提取、文檔分析或將PDF內容集成到應用程式和工作流程中。</p>
      <p>所有提取都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '選擇要提取的數據', description: '選擇要提取的內容：文本、後設資料、結構。' },
      { step: 3, title: '提取並下載', description: '點擊提取生成JSON並下載。' },
    ],
    useCases: [
      { title: '數據提取', description: '從PDF文檔中提取結構化數據。', icon: "database" },
      { title: '文檔分析', description: '以程式分析PDF結構和內容。', icon: "search" },
      { title: '集成', description: '通過JSON將PDF內容導入應用程式。', icon: "plug" },
    ],
    faq: [
      { question: '提取哪些數據？', answer: '文本內容、後設資料、頁面尺寸、字體和文檔結構。' },
      { question: 'JSON格式有文檔嗎？', answer: '是的，JSON模式是一致且有良好文檔的。' },
      { question: '可以從掃描的PDF中提取嗎？', answer: '掃描的PDF需要先進行OCR。在提取前使用我們的OCR PDF工具。' },
    ],
  },

  'pdf-to-pptx': {
    title: 'PDF轉PowerPoint',
    metaDescription: '將PDF轉換為PowerPoint (PPTX)演示文稿。每一頁轉為高品質幻燈片。',
    keywords: ['pdf轉ppt', 'pdf轉pptx', 'pdf轉powerpoint', 'pdf演示文稿'],
    description: `
      <p>PDF轉PowerPoint將您的PDF文檔轉換為可編輯的PowerPoint演示文稿(PPTX)。每個PDF頁面都會轉換為保持完美視覺布局的高品質幻燈片。</p>
      <p>此工具非常適合將報告、講義或任何PDF內容轉換為演示格式。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的文檔隱私安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '選擇品質', description: '選擇幻燈片的圖像品質(DPI)。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換創建PowerPoint演示文稿。' },
    ],
    useCases: [
      { title: '創建演示', description: '將PDF文檔轉換為會議幻燈片。', icon: "presentation" },
      { title: '培訓材料', description: '將教材轉換為交互式演示文稿。', icon: "book-open" },
      { title: '內容覆用', description: '將現有內容轉換為可編輯幻燈片。', icon: "refresh-cw" },
    ],
    faq: [
      { question: '幻燈片可編輯嗎？', answer: '每張幻燈片包含PDF頁面的圖像。您可以在頂部新增內容。' },
      { question: '應該選什麼DPI？', answer: '螢幕展示選150 DPI，列印選300 DPI。' },
      { question: '支援多頁嗎？', answer: '是的，每一頁都會成為一張單獨的幻燈片。' },
    ],
  },

  'pdf-to-excel': {
    title: 'PDF轉Excel',
    metaDescription: '將PDF轉換為Excel表格。將表格提取為XLSX格式。',
    keywords: ['pdf轉excel', 'pdf轉xlsx', '提取表格', 'pdf數據提取'],
    description: `
      <p>PDF轉Excel將您的PDF文檔轉換為可編輯的Excel電子表格(XLSX)。工具自動檢測並提取表格。</p>
      <p>非常適合分析財務報告或數據表。每頁的表格提取到單獨的Sheet中。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的數據隱私安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '處理', description: '工具將自動識別表格。' },
      { step: 3, title: '下載Excel', description: '下載包含提取表格的文件。' },
    ],
    useCases: [
      { title: '財務分析', description: '轉換銀行賬單或發票。', icon: "trending-up" },
      { title: '數據提取', description: '從報告中提取數據表。', icon: "database" },
      { title: '清單轉換', description: '將PDF庫存清單轉換為表格。', icon: "clipboard" },
    ],
    faq: [
      { question: '如何處理表格？', answer: '每頁的表格提取到對應的Excel工作表中。' },
      { question: '如果沒有表格？', answer: '將創建一個提示信息工作表。' },
      { question: '保留格式嗎？', answer: '數據保留，視覺格式可能簡化。' },
    ],
  },

  'psd-to-pdf': {
    title: 'PSD轉PDF',
    metaDescription: '將Adobe Photoshop (PSD)文件轉換為PDF。保留圖層和高品質。',
    keywords: ['psd轉pdf', '轉換psd', 'photoshop轉pdf', 'adobe psd轉pdf'],
    description: `
      <p>直接在瀏覽器中將Adobe Photoshop (PSD)文件轉換為PDF格式。此工具處理覆雜的PSD文件，並在轉換過程中保持高品質的視覺效果。</p>
      <p>非常適合設計師和藝術家與沒有安裝Photoshop的客戶或同事分享他們的作品。轉換生成乾淨、可視化的PDF文檔。</p>
      <p>所有處理都在本地完成，確保您的設計和作品保留在設備上，保持隱私和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PSD文件', description: '將PSD文件拖放到上傳區域。支援大文件。' },
      { step: 2, title: '處理', description: '工具將讀取PSD數據並將其轉換為PDF格式。' },
      { step: 3, title: '下載', description: '立即下載轉換後的PDF文件。' },
    ],
    useCases: [
      { title: '客戶預覽', description: '以通用的PDF格式向客戶發送設計稿。', icon: "image" },
      { title: '作品集創建', description: '將Photoshop作品編譯成PDF作品集以供求職申請。', icon: "briefcase" },
      { title: '列印準備', description: '將PSD設計轉換為PDF，以便列印服務更好地處理。', icon: "printer" },
    ],
    faq: [
      { question: '需要安裝Photoshop嗎？', answer: '不需要，此工具完全在瀏覽器中運行，無需Adobe Photoshop。' },
      { question: '圖層會保留嗎？', answer: '生成的PDF是用於查看的PSD扁平化版本。' },
      { question: '有文件大小限制嗎？', answer: '我們支援大文件，但非常大的高分辨率PSD可能需要更長的處理時間。' },
    ],
  },

  // ==================== 整理與管理 ====================
  'ocr-pdf': {
    title: 'OCR PDF',
    metaDescription: '使用OCR使掃描的PDF可搜尋。從圖像和掃描文檔中提取文本。',
    keywords: ['ocr pdf', '可搜尋pdf', '文本識別', '掃描轉文本'],
    description: `
      <p>OCR PDF使用光學字符識別從PDF中的掃描文檔和圖像中提取文本。將基於圖像的PDF轉換為可搜尋、可選擇文本的文檔。</p>
      <p>支援多種語言，確保無論文檔語言如何都能準確識別文本。在新增可搜尋文本層的同時保留原始布局。</p>
      <p>所有OCR處理都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳掃描的PDF', description: '拖放您的掃描PDF或點擊選擇。' },
      { step: 2, title: '選擇語言', description: '選擇文檔語言以獲得準確識別。' },
      { step: 3, title: '處理並下載', description: '點擊處理運行OCR並下載可搜尋的PDF。' },
    ],
    useCases: [
      { title: '數字化存檔', description: '使掃描的文檔存檔可搜尋。', icon: "archive" },
      { title: '文檔搜尋', description: '在掃描文檔中啟用文本搜尋。', icon: "search" },
      { title: '文本提取', description: '從掃描文檔中提取文本以供編輯。', icon: "type" },
    ],
    faq: [
      { question: '支援哪些語言？', answer: '支援100多種語言，包括英語、中文、日語、韓語等。' },
      { question: '原始布局會保留嗎？', answer: '是的，原始視覺布局會保留，並新增可搜尋的文本層。' },
      { question: 'OCR有多準確？', answer: '準確性取決於掃描品質，但對於清晰的文檔通常超過95%。' },
    ],
  },

  'alternate-merge': {
    title: '交替合併',
    metaDescription: '通過交替頁面合併PDF。將正面和背面掃描合併成一個文檔。',
    keywords: ['交替合併', '交錯pdf', '合併掃描', '正反面合併'],
    description: `
      <p>交替合併通過交替交錯兩個PDF的頁面來合併它們。這非常適合將分別掃描的正面和背面頁面合併成一個文檔。</p>
      <p>上傳兩個PDF，工具將通過交替從每個PDF中取一頁來合併它們。您還可以反轉其中一個文檔的順序以適應從後到前的掃描。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳兩個PDF', description: '上傳正面頁面PDF和背面頁面PDF。' },
      { step: 2, title: '配置順序', description: '選擇是否為從後到前的掃描反轉第二個文檔。' },
      { step: 3, title: '合併並下載', description: '點擊合併交錯頁面並下載。' },
    ],
    useCases: [
      { title: '雙面掃描', description: '合併分別掃描的正面和背面頁面。', icon: "copy" },
      { title: '文檔組裝', description: '交錯來自兩個相關文檔的頁面。', icon: "layers" },
      { title: '書籍掃描', description: '將奇數頁和偶數頁掃描合併成完整的書籍。', icon: "book" },
    ],
    faq: [
      { question: '如果文檔頁數不同怎麼辦？', answer: '較長文檔的額外頁面會附加在末尾。' },
      { question: '可以反轉頁面順序嗎？', answer: '是的，您可以在合併前反轉任一文檔。' },
      { question: '這與普通合併有什麼不同？', answer: '是的，普通合併是追加文檔；交替合併是交錯頁面。' },
    ],
  },

  'add-attachments': {
    title: '新增附件',
    metaDescription: '在PDF文檔中嵌入文件。將任何文件類型附加到您的PDF。',
    keywords: ['pdf附件', '嵌入文件', '附加到pdf', 'pdf組合'],
    description: `
      <p>新增附件將任何類型的文件嵌入到您的PDF文檔中。附加電子表格、圖像、源文件或任何其他文檔以創建全面的PDF包。</p>
      <p>附件嵌入在PDF中，收件人可以使用任何PDF閱讀器提取。非常適合將相關文件一起分發。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文件保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '新增附件', description: '選擇要附加到PDF的文件。' },
      { step: 3, title: '保存並下載', description: '點擊保存嵌入附件並下載。' },
    ],
    useCases: [
      { title: '項目包', description: '將項目文件與文檔PDF捆綁在一起。', icon: "package" },
      { title: '報告分發', description: '將源數據文件附加到報告PDF。', icon: "paperclip" },
      { title: '合同包', description: '在合同中包含支援文檔。', icon: "file-text" },
    ],
    faq: [
      { question: '可以附加哪些文件類型？', answer: '任何文件類型都可以附加到PDF。' },
      { question: '有大小限制嗎？', answer: '包括附件在內的PDF總大小不應超過500MB。' },
      { question: '收件人可以提取附件嗎？', answer: '是的，任何PDF閱讀器都可以提取嵌入的附件。' },
    ],
  },

  'extract-attachments': {
    title: '提取附件',
    metaDescription: '從PDF中提取嵌入的文件。從PDF文檔下載所有附件。',
    keywords: ['提取附件', 'pdf附件', '下載嵌入文件', 'pdf提取'],
    description: `
      <p>提取附件從PDF文檔中檢索所有嵌入的文件。單獨下載附件或作為包含所有文件的ZIP壓縮包下載。</p>
      <p>非常適合訪問嵌入在PDF包中的源文件、數據或補充材料。</p>
      <p>所有提取都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '查看附件', description: '查看PDF中所有嵌入文件的列表。' },
      { step: 3, title: '提取並下載', description: '下載單個文件或全部作為ZIP。' },
    ],
    useCases: [
      { title: '訪問源文件', description: '從PDF報告中提取原始數據文件。', icon: "download" },
      { title: '恢復附件', description: '從PDF包中檢索嵌入的文件。', icon: "folder-open" },
      { title: '批量提取', description: '一次從多個PDF中提取附件。', icon: "layers" },
    ],
    faq: [
      { question: '如果沒有附件怎麼辦？', answer: '如果沒有找到嵌入文件，工具會提示。' },
      { question: '支援所有附件類型嗎？', answer: '是的，所有嵌入的文件類型都可以提取。' },
      { question: '可以從多個PDF中提取嗎？', answer: '是的，您可以處理多個PDF並下載所有附件。' },
    ],
  },

  'edit-attachments': {
    title: '編輯附件',
    metaDescription: '管理PDF附件。查看、重命名和刪除嵌入的文件。',
    keywords: ['編輯附件', '管理pdf文件', '刪除附件', '重命名附件'],
    description: `
      <p>編輯附件讓您管理PDF文檔中的嵌入文件。查看所有附件、重命名它們或從PDF中刪除不需要的文件。</p>
      <p>非常適合在分發前清理PDF包或更新附件信息。</p>
      <p>所有編輯都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '管理附件', description: '查看、重命名或刪除嵌入的文件。' },
      { step: 3, title: '保存並下載', description: '點擊保存應用更改並下載。' },
    ],
    useCases: [
      { title: '清理PDF', description: '從PDF包中刪除不必要的附件。', icon: "trash-2" },
      { title: '重命名文件', description: '更新附件名稱以提高清晰度。', icon: "edit" },
      { title: '審閱內容', description: '在分發前審核嵌入的文件。', icon: "eye" },
    ],
    faq: [
      { question: '可以在這里新增新附件嗎？', answer: '使用新增附件工具嵌入新文件。' },
      { question: '刪除是永久的嗎？', answer: '是的，刪除的附件無法從輸出文件中恢復。' },
      { question: '可以預覽附件嗎？', answer: '您可以看到文件名和大小；使用提取附件查看內容。' },
    ],
  },

  'divide-pages': {
    title: '分割頁面',
    metaDescription: '將PDF頁面分割成多個部分。水平或垂直分割頁面。',
    keywords: ['分割pdf頁面', '拆分頁面', '剪切pdf頁面', '頁面部分'],
    description: `
      <p>分割頁面將單個PDF頁面分割成多個部分。水平、垂直或網格分割頁面，從一頁創建多頁。</p>
      <p>非常適合分割每頁包含多個項目的掃描文檔，或將大幅面頁面分割成標準尺寸。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '設置分割', description: '選擇水平、垂直或網格分割並設置部分數量。' },
      { step: 3, title: '分割並下載', description: '點擊分割拆分頁面並下載。' },
    ],
    useCases: [
      { title: '分割掃描', description: '分割包含多個文檔的掃描頁面。', icon: "scissors" },
      { title: '調整頁面大小', description: '將大頁面分割成標準紙張尺寸。', icon: "maximize-2" },
      { title: '創建卡片', description: '將頁面分割成卡片大小的部分以供列印。', icon: "grid" },
    ],
    faq: [
      { question: '可以分割成不等的部分嗎？', answer: '目前分割是等分的。使用裁剪PDF進行自定義部分。' },
      { question: '分割線處的內容會怎樣？', answer: '內容在分割線處被分割；確保重要內容不在邊界處。' },
      { question: '可以只分割特定頁面嗎？', answer: '是的，您可以選擇要分割的頁面。' },
    ],
  },

  'add-blank-page': {
    title: '新增空白頁',
    metaDescription: '在PDF文檔中插入空白頁。在任何位置新增空頁。',
    keywords: ['新增空白頁', '插入頁面', '空頁', 'pdf頁面插入'],
    description: `
      <p>新增空白頁在PDF文檔的任何位置插入空頁。在現有頁面之前、之後或之間新增頁面，可自定義頁面大小。</p>
      <p>非常適合新增筆記空間、創建章節分隔符或為列印準備文檔。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '選擇位置', description: '選擇在哪里插入空白頁以及插入多少頁。' },
      { step: 3, title: '新增並下載', description: '點擊新增插入頁面並下載。' },
    ],
    useCases: [
      { title: '筆記空間', description: '新增空白頁以供手寫筆記。', icon: "edit-3" },
      { title: '章節分隔符', description: '在文檔章節之間插入空白頁。', icon: "minus" },
      { title: '列印準備', description: '新增頁面以對齊雙面列印。', icon: "printer" },
    ],
    faq: [
      { question: '可以選擇頁面大小嗎？', answer: '是的，空白頁可以匹配現有頁面或使用自定義尺寸。' },
      { question: '可以新增多個空白頁嗎？', answer: '是的，您可以一次新增任意數量的空白頁。' },
      { question: '可以新增彩色頁面嗎？', answer: '新增空白頁後使用背景顏色工具新增顏色。' },
    ],
  },

  'reverse-pages': {
    title: '反轉頁面',
    metaDescription: '反轉PDF頁面順序。將文檔頁面從最後翻到最前。',
    keywords: ['反轉pdf', '翻轉頁面順序', '倒置頁面', '反轉文檔'],
    description: `
      <p>反轉頁面翻轉PDF文檔中頁面的順序，將最後一頁放在最前，第一頁放在最後。對於以相反順序掃描的文檔或特定列印需求非常有用。</p>
      <p>該工具處理整個文檔或選定的頁面範圍，保持所有內容和格式。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '選擇頁面', description: '選擇反轉所有頁面或特定範圍。' },
      { step: 3, title: '反轉並下載', description: '點擊反轉翻轉頁面順序並下載。' },
    ],
    useCases: [
      { title: '修覆掃描順序', description: '糾正以相反順序掃描的文檔。', icon: "refresh-cw" },
      { title: '列印準備', description: '為特定列印要求反轉頁面。', icon: "printer" },
      { title: '文檔重新排序', description: '快速翻轉文檔順序以供審閱。', icon: "arrow-up-down" },
    ],
    faq: [
      { question: '書籤會更新嗎？', answer: '是的，書籤會更新以指向正確的反轉頁面。' },
      { question: '可以只反轉部分頁面嗎？', answer: '是的，您可以選擇要反轉的頁面範圍。' },
      { question: '這和旋轉一樣嗎？', answer: '不，反轉改變頁面順序；旋轉改變頁面方向。' },
    ],
  },

  'rotate-pdf': {
    title: '旋轉PDF',
    metaDescription: '旋轉PDF頁面。將頁面旋轉90、180或270度。',
    keywords: ['旋轉pdf', '轉動pdf頁面', 'pdf旋轉', '修覆方向'],
    description: `
      <p>旋轉PDF將文檔中的頁面旋轉90、180或270度。修覆方向不正確的掃描、旋轉橫向頁面或調整頁面方向以供查看。</p>
      <p>統一旋轉所有頁面或選擇特定頁面單獨旋轉。該工具保留所有內容和格式。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '選擇旋轉', description: '選擇旋轉角度和要旋轉的頁面。' },
      { step: 3, title: '旋轉並下載', description: '點擊旋轉應用更改並下載。' },
    ],
    useCases: [
      { title: '修覆掃描', description: '糾正掃描文檔的方向。', icon: "rotate-cw" },
      { title: '橫向頁面', description: '旋轉橫向頁面以正確查看。', icon: "monitor" },
      { title: '混合方向', description: '標準化混合文檔中的頁面方向。', icon: "layout" },
    ],
    faq: [
      { question: '可以對不同頁面進行不同的旋轉嗎？', answer: '是的，您可以對不同頁面應用不同的旋轉。' },
      { question: '旋轉會影響列印品質嗎？', answer: '不會，旋轉保留所有內容品質。' },
      { question: '可以按自定義角度旋轉嗎？', answer: '旋轉限於90度增量（90、180、270）。' },
    ],
  },

  'n-up-pdf': {
    title: 'N合一PDF',
    metaDescription: '每張紙列印多個PDF頁面。創建2合1、4合1或自定義布局。',
    keywords: ['n合一pdf', '每張多頁', '2合1列印', '頁面拼版'],
    description: `
      <p>N合一PDF將多個頁面排列到單張紙上，創建2合1、4合1、6合1、9合1或自定義布局。非常適合列印時節省紙張或創建講義。</p>
      <p>從預設布局中選擇或創建自定義排列。該工具自動縮放和定位頁面以獲得最佳效果。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '選擇布局', description: '選擇2合1、4合1、6合1、9合1或自定義網格。' },
      { step: 3, title: '創建並下載', description: '點擊創建生成N合一PDF並下載。' },
    ],
    useCases: [
      { title: '節省紙張', description: '每張紙列印多頁以減少紙張使用。', icon: "leaf" },
      { title: '創建講義', description: '從演示幻燈片制作緊湊的講義。', icon: "file-text" },
      { title: '審閱文檔', description: '以縮小尺寸列印文檔以供審閱。', icon: "eye" },
    ],
    faq: [
      { question: '有哪些布局可用？', answer: '2合1、4合1、6合1、9合1和自定義網格布局可用。' },
      { question: '可以在頁面之間新增邊框嗎？', answer: '是的，您可以在頁面之間新增邊框和間距。' },
      { question: '頁面順序會保留嗎？', answer: '是的，頁面按閱讀順序排列（從左到右，從上到下）。' },
    ],
  },

  'combine-single-page': {
    title: '合併為單頁',
    metaDescription: '將PDF頁面拼接成一個連續頁面。創建可滾動的單頁文檔。',
    keywords: ['合併頁面', '單頁pdf', '拼接頁面', '連續滾動'],
    description: `
      <p>合併為單頁將所有PDF頁面拼接成一個連續頁面。創建非常適合網絡查看或連續閱讀的可滾動文檔。</p>
      <p>頁面垂直連接，間距可自定義。結果是包含所有內容的單個長頁面。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '設置間距', description: '選擇拼接頁面之間的間隙。' },
      { step: 3, title: '合併並下載', description: '點擊合併創建單頁PDF。' },
    ],
    useCases: [
      { title: '網絡文檔', description: '創建可滾動的PDF以供網頁嵌入。', icon: "globe" },
      { title: '連續閱讀', description: '將分頁文檔轉換為連續滾動。', icon: "scroll" },
      { title: '長篇內容', description: '合併頁面以實現無縫的長篇閱讀。', icon: "file-text" },
    ],
    faq: [
      { question: '有頁數限制嗎？', answer: '非常長的文檔可能受瀏覽器內存限制。' },
      { question: '可以在頁面之間新增分隔符嗎？', answer: '是的，您可以在原始頁面之間新增間距或線條。' },
      { question: '這適合列印嗎？', answer: '結果最適合螢幕查看；列印布局請使用N合一。' },
    ],
  },

  'view-metadata': {
    title: '查看後設資料',
    metaDescription: '查看PDF文檔屬性。查看作者、標題、日期和其他後設資料。',
    keywords: ['pdf後設資料', '文檔屬性', 'pdf信息', '查看pdf詳情'],
    description: `
      <p>查看後設資料顯示PDF文件中的所有文檔屬性和後設資料。查看作者、標題、主題、關鍵詞、創建日期、修改日期等。</p>
      <p>對於審核文檔、檢查文件信息或驗證文檔真實性非常有用。</p>
      <p>所有查看都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '查看屬性', description: '查看以有組織格式顯示的所有後設資料。' },
      { step: 3, title: '如需導出', description: '可選擇將後設資料導出為JSON。' },
    ],
    useCases: [
      { title: '文檔審核', description: '審閱文檔屬性以確保合規性。', icon: "clipboard-check" },
      { title: '驗證真實性', description: '檢查創建日期和作者信息。', icon: "shield" },
      { title: '文件信息', description: '獲取PDF文件的詳細信息。', icon: "info" },
    ],
    faq: [
      { question: '顯示哪些後設資料？', answer: '標題、作者、主題、關鍵詞、創建者、生產者、日期和PDF版本。' },
      { question: '可以在這里編輯後設資料嗎？', answer: '使用編輯後設資料工具修改文檔屬性。' },
      { question: '包含XMP後設資料嗎？', answer: '是的，標準和XMP後設資料都會顯示。' },
    ],
  },

  'edit-metadata': {
    title: '編輯後設資料',
    metaDescription: '編輯PDF文檔屬性。更改標題、作者、主題和關鍵詞。',
    keywords: ['編輯pdf後設資料', '更改pdf屬性', 'pdf作者', '文檔信息'],
    description: `
      <p>編輯後設資料允許您修改PDF文件中的文檔屬性。更改標題、作者、主題、關鍵詞和其他後設資料欄位。</p>
      <p>非常適合糾正文檔信息、新增正確的歸屬或為分發準備文件。</p>
      <p>所有編輯都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '編輯屬性', description: '修改標題、作者、主題、關鍵詞和其他欄位。' },
      { step: 3, title: '保存並下載', description: '點擊保存應用更改並下載。' },
    ],
    useCases: [
      { title: '新增歸屬', description: '設置正確的作者和創建者信息。', icon: "user" },
      { title: 'SEO優化', description: '新增關鍵詞和描述以提高可搜尋性。', icon: "search" },
      { title: '文檔準備', description: '在共享前準備具有正確後設資料的文檔。', icon: "file-check" },
    ],
    faq: [
      { question: '可以編輯哪些欄位？', answer: '標題、作者、主題、關鍵詞、創建者和生產者欄位。' },
      { question: '可以清除所有後設資料嗎？', answer: '使用刪除後設資料工具去除所有文檔屬性。' },
      { question: '日期可以編輯嗎？', answer: '創建和修改日期會自動更新。' },
    ],
  },

  'pdf-to-zip': {
    title: 'PDF轉ZIP',
    metaDescription: '將多個PDF打包成ZIP壓縮包。壓縮和捆綁PDF文件。',
    keywords: ['pdf轉zip', '壓縮pdf', '捆綁pdf', '存檔pdf'],
    description: `
      <p>PDF轉ZIP將多個PDF文件打包成一個ZIP壓縮包。壓縮和捆綁您的PDF以便於共享、存儲或備份。</p>
      <p>該工具創建包含所有PDF文件的壓縮存檔，減少總大小並簡化文件管理。</p>
      <p>所有處理都在您的瀏覽器中進行，確保您的文件保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF', description: '拖放多個PDF文件或點擊選擇。' },
      { step: 2, title: '配置存檔', description: '可選設置存檔名稱和壓縮級別。' },
      { step: 3, title: '創建並下載', description: '點擊創建生成ZIP壓縮包。' },
    ],
    useCases: [
      { title: '文件共享', description: '捆綁多個PDF以便於共享。', icon: "share-2" },
      { title: '創建備份', description: '創建PDF集合的壓縮備份。', icon: "archive" },
      { title: '電子郵件附件', description: '將PDF合併成一個附件以供電子郵件使用。', icon: "mail" },
    ],
    faq: [
      { question: '應用多少壓縮？', answer: 'ZIP壓縮通常將總大小減少10-30%。' },
      { question: '有文件限制嗎？', answer: '您可以在單個存檔中包含最多100個PDF。' },
      { question: '可以設置密碼嗎？', answer: '目前不支援創建受密碼保護的ZIP。' },
    ],
  },

  'compare-pdfs': {
    title: '比較PDF',
    metaDescription: '比較兩個PDF文檔。高亮顯示版本之間的差異。',
    keywords: ['比較pdf', 'pdf差異', '文檔比較', '版本比較'],
    description: "\n      <p>比較PDF分析兩個PDF文檔並高亮顯示它們之間的差異。非常適合審閱文檔修訂、檢查合同更改或驗證編輯。</p>\n      <p>並排查看算繪的頁面，切換頁面對，並篩選反白顯示的變更。 比較擷取的文字和字型名稱。不比較掃描影像和其他視覺變更。</p>\n      <p>所有比較都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>\n    ",
    howToUse: [
      { step: 1, title: '上傳兩個PDF', description: '上傳原始和修改後的PDF文檔。' },
      { step: 2, title: "比較 PDF", description: "並排查看算繪的頁面，切換頁面對，並篩選反白顯示的變更。" },
      { step: 3, title: "高亮過濾項", description: "文本內容變更 · 字型變更 · 頁首和頁尾 · 移動的文字" },
    ],
    useCases: [
      { title: '合同審閱', description: '比較合同版本以識別更改。', icon: "file-text" },
      { title: '文檔修訂', description: '審閱文檔版本之間的編輯。', icon: "git-compare" },
      { title: '品質保證', description: '驗證只進行了預期的更改。', icon: "check-circle" },
    ],
    faq: [
      { question: '檢測哪些類型的差異？', answer: "文本內容變更 · 字型變更 · 頁首和頁尾 · 移動的文字" },
      { question: '可以比較掃描的文檔嗎？', answer: "比較擷取的文字和字型名稱。不比較掃描影像和其他視覺變更。" },
      { question: '有視覺比較嗎？', answer: "並排查看算繪的頁面，切換頁面對，並篩選反白顯示的變更。 比較擷取的文字和字型名稱。不比較掃描影像和其他視覺變更。" },
    ],
  },

  'posterize-pdf': {
    title: '海報化PDF',
    metaDescription: '將大型PDF頁面分割成可列印的瓷磚。從PDF頁面創建海報。',
    keywords: ['海報化pdf', '瓷磚pdf', '大幅面列印', 'pdf海報'],
    description: `
      <p>海報化PDF將大型PDF頁面分割成可以在標準紙張上列印並組裝成海報的較小瓷磚。非常適合列印大型圖表、地圖或藝術品。</p>
      <p>配置網格大小和重疊以便於組裝。該工具自動計算目標輸出尺寸的瓷磚尺寸。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的大幅面PDF或點擊選擇。' },
      { step: 2, title: '配置瓷磚', description: '設置網格大小、重疊和輸出紙張尺寸。' },
      { step: 3, title: '創建並下載', description: '點擊創建生成可列印的瓷磚。' },
    ],
    useCases: [
      { title: '海報列印', description: '在標準紙張上列印大型海報。', icon: "maximize-2" },
      { title: '地圖列印', description: '分段列印大型地圖以供組裝。', icon: "map" },
      { title: '藝術品複製', description: '從PDF藝術品創建大型列印品。', icon: "image" },
    ],
    faq: [
      { question: '應該使用多少重疊？', answer: '建議10-20mm的重疊以便於組裝時對齊。' },
      { question: '可以新增裁切標記嗎？', answer: '是的，可以新增裁切標記以幫助切割和對齊。' },
      { question: '支援哪些紙張尺寸？', answer: '支援A4、Letter、A3和自定義尺寸。' },
    ],
  },

  // ==================== 優化與修覆 ====================
  'fix-page-size': {
    title: '修覆頁面大小',
    metaDescription: '標準化PDF頁面大小。將所有頁面轉換為統一尺寸。',
    keywords: ['修覆頁面大小', '標準化pdf', '統一頁面', '調整pdf頁面大小'],
    description: `
      <p>修覆頁面大小將PDF中的所有頁面標準化為統一尺寸。將混合尺寸文檔轉換為一致的頁面大小，以便專業展示或列印。</p>
      <p>從標準尺寸（A4、Letter等）中選擇或設置自定義尺寸。內容會縮放或定位以適應新的頁面大小。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '選擇目標大小', description: '選擇標準尺寸或輸入自定義尺寸。' },
      { step: 3, title: '應用並下載', description: '點擊應用標準化頁面並下載。' },
    ],
    useCases: [
      { title: '列印準備', description: '標準化頁面以實現一致的列印。', icon: "printer" },
      { title: '文檔清理', description: '修覆頁面大小不一致的文檔。', icon: "file-check" },
      { title: '專業文檔', description: '創建統一的文檔以供分發。', icon: "briefcase" },
    ],
    faq: [
      { question: '內容如何處理？', answer: '內容會縮放以適應或居中在新頁面大小上。' },
      { question: '可以保持縱橫比嗎？', answer: '是的，內容可以按比例縮放以適應。' },
      { question: '有哪些標準尺寸可用？', answer: 'A4、A3、Letter、Legal和其他常見尺寸。' },
    ],
  },

  'linearize-pdf': {
    title: '線性化PDF',
    metaDescription: '優化PDF以實現快速網絡查看。啟用漸進式加載。',
    keywords: ['線性化pdf', '快速網絡查看', '優化pdf', '漸進式pdf'],
    description: `
      <p>線性化PDF優化您的文檔以實現快速網絡查看。線性化的PDF可以在整個文件下載完成之前開始顯示，改善使用者體驗。</p>
      <p>也稱為"快速網絡查看"，此優化重新組織PDF結構以實現網絡瀏覽器中的漸進式加載。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '線性化', description: '點擊線性化優化以供網絡查看。' },
      { step: 3, title: '下載', description: '下載優化後的PDF。' },
    ],
    useCases: [
      { title: '網絡發布', description: '優化PDF以供網站下載。', icon: "globe" },
      { title: '電子郵件附件', description: '創建為收件人更快打開的PDF。', icon: "mail" },
      { title: '在線文檔', description: '改善在線文檔的查看體驗。', icon: "cloud" },
    ],
    faq: [
      { question: '什麼是線性化？', answer: '線性化重新組織PDF數據以實現漸進式加載。' },
      { question: '會減小文件大小嗎？', answer: '線性化可能由於新增的結構而略微增加文件大小。' },
      { question: '與所有查看器兼容嗎？', answer: '是的，線性化的PDF在所有PDF閱讀器中都能工作。' },
    ],
  },

  'page-dimensions': {
    title: '頁面尺寸',
    metaDescription: '分析PDF頁面大小。查看文檔中所有頁面的尺寸。',
    keywords: ['pdf頁面大小', '頁面尺寸', 'pdf測量', '文檔大小'],
    description: `
      <p>頁面尺寸分析並顯示PDF文檔中每個頁面的大小。以各種單位（英寸、毫米、點）查看尺寸並識別非標準大小的頁面。</p>
      <p>對於列印準備、文檔分析或識別不一致的頁面大小非常有用。</p>
      <p>所有分析都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '查看尺寸', description: '查看所有頁面顯示的頁面大小。' },
      { step: 3, title: '導出報告', description: '可選擇將尺寸導出為JSON。' },
    ],
    useCases: [
      { title: '列印規劃', description: '列印前檢查頁面大小。', icon: "printer" },
      { title: '文檔分析', description: '識別尺寸異常的頁面。', icon: "search" },
      { title: '品質控制', description: '驗證頁面大小符合規格。', icon: "check-circle" },
    ],
    faq: [
      { question: '有哪些單位可用？', answer: '英寸、毫米、厘米和點。' },
      { question: '會顯示方向嗎？', answer: '是的，會指示縱向或橫向方向。' },
      { question: '可以修覆不一致的大小嗎？', answer: '使用修覆頁面大小工具標準化尺寸。' },
    ],
  },

  'remove-restrictions': {
    title: '刪除限制',
    metaDescription: '刪除PDF限制。解鎖列印、複製和編輯權限。',
    keywords: ['刪除pdf限制', '解鎖pdf', 'pdf權限', '取消pdf限制'],
    description: `
      <p>刪除限制解鎖具有權限限制的PDF，這些限制阻止列印、複製或編輯。此工具在保留文檔內容的同時刪除所有者密碼限制。</p>
      <p>注意：此工具無法刪除阻止打開文檔的使用者密碼。對於受密碼保護的文件，請使用解密PDF。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳受限PDF', description: '拖放您的受限PDF或點擊選擇。' },
      { step: 2, title: '刪除限制', description: '點擊刪除解鎖文檔。' },
      { step: 3, title: '下載', description: '下載不受限制的PDF。' },
    ],
    useCases: [
      { title: '啟用列印', description: '解鎖阻止列印的PDF。', icon: "printer" },
      { title: '啟用複製', description: '允許文本選擇和複製。', icon: "copy" },
      { title: '啟用編輯', description: '刪除文檔編輯限制。', icon: "edit" },
    ],
    faq: [
      { question: '這合法嗎？', answer: '從您擁有或有權使用的文檔中刪除限制通常是合法的。' },
      { question: '可以刪除打開密碼嗎？', answer: '不能，對於受密碼保護的文檔請使用解密PDF。' },
      { question: '內容會受影響嗎？', answer: '不會，只刪除限制；內容保持不變。' },
    ],
  },

  'repair-pdf': {
    title: '修覆PDF',
    metaDescription: '修覆損壞的PDF文件。恢復和修覆受損文檔。',
    keywords: ['修覆pdf', '修覆pdf', '恢復pdf', '損壞的pdf'],
    description: `
      <p>修覆PDF嘗試修覆損壞或受損的PDF文件。該工具分析文檔結構並重建它以盡可能多地恢復內容。</p>
      <p>對於恢復無法打開、顯示錯誤或由於損壞而缺少內容的文件非常有用。</p>
      <p>所有修覆都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳損壞的PDF', description: '拖放您損壞的PDF或點擊選擇。' },
      { step: 2, title: '修覆文檔', description: '點擊修覆嘗試恢復。' },
      { step: 3, title: '下載', description: '如果成功，下載修覆後的PDF。' },
    ],
    useCases: [
      { title: '恢復文件', description: '恢復無法正常打開的PDF。', icon: "refresh-cw" },
      { title: '修覆錯誤', description: '修覆顯示錯誤消息的文件。', icon: "wrench" },
      { title: '恢復內容', description: '從部分損壞的文件中恢復內容。', icon: "file-check" },
    ],
    faq: [
      { question: '所有PDF都可以修覆嗎？', answer: '成功取決於損壞的類型和程度。' },
      { question: '所有內容都會恢復嗎？', answer: '該工具盡可能多地恢復；嚴重損壞的文件可能有損失。' },
      { question: '應該保留原件嗎？', answer: '是的，始終保留原始文件作為備份。' },
    ],
  },

  // ==================== 安全PDF ====================
  'encrypt-pdf': {
    title: '加密PDF',
    metaDescription: '為PDF文件新增密碼保護。新增加密並設置權限。',
    keywords: ['加密pdf', '密碼保護pdf', '安全pdf', 'pdf加密'],
    description: `
      <p>加密PDF為您的PDF文檔新增密碼保護和加密。設置使用者密碼以防止打開，設置所有者密碼以控制列印和複製等權限。</p>
      <p>根據不同的安全需求選擇不同的加密級別（128位或256位AES）。</p>
      <p>所有加密都在您的瀏覽器中進行，確保您的密碼和文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '設置密碼', description: '輸入使用者密碼和/或所有者密碼。配置權限。' },
      { step: 3, title: '加密並下載', description: '點擊加密保護您的PDF並下載。' },
    ],
    useCases: [
      { title: '機密文檔', description: '保護敏感的商業文檔。', icon: "lock" },
      { title: '個人文件', description: '保護個人文檔如稅務申報表。', icon: "shield" },
      { title: '受控分發', description: '限制收件人對文檔的操作。', icon: "key" },
    ],
    faq: [
      { question: '使用者密碼和所有者密碼有什麼區別？', answer: '使用者密碼防止打開；所有者密碼控制權限。' },
      { question: '使用什麼加密？', answer: '提供128位或256位AES加密選項。' },
      { question: '可以只設置權限而不設置使用者密碼嗎？', answer: '是的，您可以只設置所有者密碼來控制權限。' },
    ],
  },

  'sanitize-pdf': {
    title: '清理PDF',
    metaDescription: '從PDF中刪除隱藏數據。清除後設資料、腳本和敏感信息。',
    keywords: ['清理pdf', '清潔pdf', '刪除隱藏數據', 'pdf隱私'],
    description: `
      <p>清理PDF從您的文檔中刪除隱藏數據和潛在敏感信息。去除後設資料、嵌入腳本、附件、評論和其他隱藏內容。</p>
      <p>對於準備公開分發的文檔或當隱私是關注點時至關重要。</p>
      <p>所有清理都在您的瀏覽器中進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '選擇要刪除的內容', description: '選擇要去除的隱藏數據類型。' },
      { step: 3, title: '清理並下載', description: '點擊清理清潔PDF並下載。' },
    ],
    useCases: [
      { title: '公開發布', description: '準備文檔以供公開分發。', icon: "globe" },
      { title: '隱私保護', description: '在共享前刪除個人信息。', icon: "shield" },
      { title: '安全合規', description: '滿足文檔處理的安全要求。', icon: "check-circle" },
    ],
    faq: [
      { question: '刪除哪些隱藏數據？', answer: '後設資料、腳本、附件、評論、表單數據和隱藏圖層。' },
      { question: '可見內容會受影響嗎？', answer: '不會，只刪除隱藏數據；可見內容保持不變。' },
      { question: '這是可逆的嗎？', answer: '不，刪除的數據無法恢復。保留原件的備份。' },
    ],
  },

  'find-and-redact': localizedRedactionContent('zh-TW', 'find-and-redact', '查找並遮蓋'),

  'decrypt-pdf': {
    title: '解密PDF',
    metaDescription: '從PDF文件中刪除密碼。解鎖受密碼保護的文檔。',
    keywords: ['解密pdf', '刪除pdf密碼', '解鎖pdf', 'pdf密碼刪除器'],
    description: `
      <p>解密PDF從PDF文檔中刪除密碼保護。輸入當前密碼以解鎖文件並創建不受保護的副本。</p>
      <p>此工具要求您知道當前密碼。它無法破解或繞過未知密碼。</p>
      <p>所有解密都在您的瀏覽器中進行，確保您的密碼和文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳受保護的PDF', description: '拖放您受密碼保護的PDF。' },
      { step: 2, title: '輸入密碼', description: '輸入當前文檔密碼。' },
      { step: 3, title: '解密並下載', description: '點擊解密刪除保護並下載。' },
    ],
    useCases: [
      { title: '刪除舊密碼', description: '當不再需要密碼時解鎖文檔。', icon: "unlock" },
      { title: '簡化訪問', description: '創建不受保護的副本以便於共享。', icon: "share-2" },
      { title: '存檔文檔', description: '在長期存檔前刪除密碼。', icon: "archive" },
    ],
    faq: [
      { question: '可以破解未知密碼嗎？', answer: '不能，您必須知道當前密碼才能解密。' },
      { question: '原始文件會被修改嗎？', answer: '不會，會創建一個新的不受保護的副本。' },
      { question: '如果忘記密碼怎麼辦？', answer: '很遺憾，我們無法恢復忘記的密碼。' },
    ],
  },

  'flatten-pdf': {
    title: '扁平化PDF',
    metaDescription: '扁平化PDF表單和注釋。使內容不可編輯。',
    keywords: ['扁平化pdf', '扁平化表單', '扁平化注釋', '不可編輯pdf'],
    description: `
      <p>扁平化PDF將表單欄位和注釋等交互元素轉換為靜態內容。扁平化的PDF看起來相同，但不能再編輯。</p>
      <p>非常適合完成已填寫的表單、保留注釋或創建不可編輯的文檔版本。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您帶有表單或注釋的PDF。' },
      { step: 2, title: '選擇要扁平化的內容', description: '選擇扁平化表單、注釋或兩者。' },
      { step: 3, title: '扁平化並下載', description: '點擊扁平化創建靜態PDF。' },
    ],
    useCases: [
      { title: '完成表單', description: '鎖定已填寫的表單數據以防止更改。', icon: "lock" },
      { title: '保留注釋', description: '使注釋在文檔中永久化。', icon: "check-circle" },
      { title: '存檔文檔', description: '創建不可編輯的版本以供存檔。', icon: "archive" },
    ],
    faq: [
      { question: '扁平化是可逆的嗎？', answer: '不，扁平化是永久的。保留原件的備份。' },
      { question: '外觀會改變嗎？', answer: '不會，文檔看起來相同，但不再是交互式的。' },
      { question: '會減小文件大小嗎？', answer: '有時會，因為交互元素被轉換為更簡單的內容。' },
    ],
  },

  'remove-metadata-full': {
    title: '後設資料的完全刪除',
    metaDescription: '從 PDF 文件中剝離所有後設資料和屬性。清理以增加匿名性。',
    keywords: ['pdf 後設資料 刪除', 'pdf 屬性 清除', 'pdf 匿名化', 'pdf 隱私'],
    description: `
      <p>刪除 PDF 文件中隱藏的所有信息，如作者、創建軟件和創建日期/時間。這在從公開發布的材料中清除內部信息時非常重要。</p>
    `,
    howToUse: [
      { step: 1, title: '選擇 PDF', description: '上傳您想要清理的 PDF 文件。' },
      { step: 2, title: '執行刪除', description: '點擊“刪除後設資料”按鈕。' },
      { step: 3, title: '保存', description: '下載屬性為空的 PDF。' },
    ],
    useCases: [
      { title: '公共文檔分發', description: '在網際網路上發布之前刪除作者的個人姓名。', icon: 'shield' },
      { title: '企業對企業交易', description: '清除不必要的後設資料（如創建歷史記錄）以保持機密性。', icon: 'briefcase' },
      { title: '匿名材料創建', description: '確保無法通過屬性識別身份。', icon: 'user-x' },
    ],
    faq: [
      { question: '文件內容會改變嗎？', answer: '不會，任何可見內容（如文本或圖像）都不會改變。' },
      { question: '哪些項目會消失？', answer: '標題、作者、主題、關鍵詞、創建日期、修改日期、PDF 創建程式名稱等將被刪除。' },
      { question: '可以恢復嗎？', answer: '刪除後的文件中的後設資料無法恢復。' },
    ],
  },

  'remove-metadata': {
    title: '刪除後設資料',
    metaDescription: '從PDF文件中去除後設資料。刪除作者、日期和文檔屬性。',
    keywords: ['刪除pdf後設資料', '去除後設資料', 'pdf隱私', '匿名pdf'],
    description: `
      <p>刪除後設資料從您的PDF文件中去除所有文檔屬性和後設資料。刪除作者姓名、創建日期、軟件信息和其他識別數據。</p>
      <p>在共享文檔或當後設資料可能泄露敏感信息時，對於隱私至關重要。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '刪除後設資料', description: '點擊刪除去除所有後設資料。' },
      { step: 3, title: '下載', description: '下載無後設資料的PDF。' },
    ],
    useCases: [
      { title: '隱私保護', description: '在共享前刪除個人信息。', icon: "shield" },
      { title: '匿名文檔', description: '創建沒有作者歸屬的文檔。', icon: "user-x" },
      { title: '乾淨分發', description: '分發沒有內部後設資料的文檔。', icon: "send" },
    ],
    faq: [
      { question: '刪除哪些後設資料？', answer: '作者、標題、主題、關鍵詞、日期、創建者和生產者信息。' },
      { question: 'XMP後設資料會刪除嗎？', answer: '是的，標準和XMP後設資料都會去除。' },
      { question: '內容會受影響嗎？', answer: '不會，只刪除後設資料；文檔內容保持不變。' },
    ],
  },

  'change-permissions': {
    title: '更改權限',
    metaDescription: '修改PDF權限。控制列印、複製和編輯訪問。',
    keywords: ['pdf權限', '更改pdf訪問', '限制pdf', 'pdf安全'],
    description: `
      <p>更改權限修改PDF文檔的訪問控制。啟用或禁用列印、複製、編輯和注釋權限。</p>
      <p>設置所有者密碼以強制執行這些限制。收件人可以查看文檔，但在可執行的操作上受到限制。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '設置權限', description: '啟用或禁用列印、複製、編輯和注釋。' },
      { step: 3, title: '應用並下載', description: '設置所有者密碼並下載受限PDF。' },
    ],
    useCases: [
      { title: '防止複製', description: '禁用文本複製以保護內容。', icon: "copy" },
      { title: '控制列印', description: '限制或允許文檔列印。', icon: "printer" },
      { title: '限制編輯', description: '防止對文檔的修改。', icon: "edit-3" },
    ],
    faq: [
      { question: '需要密碼嗎？', answer: '需要所有者密碼來強制執行權限。' },
      { question: '權限可以刪除嗎？', answer: '是的，使用所有者密碼或刪除限制工具。' },
      { question: '所有PDF閱讀器都兼容嗎？', answer: '大多數PDF閱讀器尊重權限，但有些可能不強制執行。' },
    ],
  },
  'pdf-to-docx': {
    title: 'PDF轉Word',
    metaDescription: '將PDF轉換為可編輯的Word文檔（DOCX）。保留原始布局、格式和圖像。',
    keywords: ['pdf轉word', 'pdf轉docx', 'pdf轉可編輯文檔', 'pdf轉換器'],
    description: `
      <p>PDF轉Word工具可將您的PDF文檔轉換為完全可編輯的Microsoft Word (DOCX)文件。該工具采用先進的解析技術，能夠最大限度地保留原始文檔的排版、字體、表格和圖像。</p>
      <p>無需重新打字，即可輕鬆修改PDF內容。非常適合處理合同、報告、簡歷以及任何需要深度編輯的文檔。</p>
      <p>所有轉換均在您的瀏覽器本地完成，確保您的商業機密和個人隱私不會被泄露。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放PDF文件或點擊選擇要轉換的文檔。' },
      { step: 2, title: '開始轉換', description: '等待系統自動解析並重建文檔結構。' },
      { step: 3, title: '下載Word文檔', description: '點擊下載生成的DOCX文件，並在Microsoft Word或WPS中打開。' },
    ],
    useCases: [
      { title: '合同修改', description: '將PDF格式的合同轉回Word，以便進行條款修訂和版本對比。', icon: "file-text" },
      { title: '簡歷更新', description: '找回以前制作的PDF簡歷，轉換為Word格式快速更新工作經歷。', icon: "user" },
      { title: '資料整理', description: '從大型PDF報告中提取文本和表格，用於撰寫新的文檔或分析報告。', icon: "copy" },
    ],
    faq: [
      { question: '轉換後的排版會亂嗎？', answer: '對於標準文檔，我們的算法能實現極高的還原度。但如果原PDF是由圖片生成的掃描件，建議先使用OCR工具。' },
      { question: '支援WPS或Google Docs嗎？', answer: '生成的.docx文件是國際標準格式，完全兼容Microsoft Word、WPS Office、Google Docs和LibreOffice。' },
      { question: '轉換受保護的PDF嗎？', answer: '如果PDF設置了打開權限，您需要先使用"解密PDF"工具移除密碼。' },
    ],
  },



  'pdf-to-txt': {
    title: 'PDF轉文本',
    metaDescription: '從PDF中提取純文本。移除所有格式和圖像，獲取最簡潔的文字內容。',
    keywords: ['pdf轉txt', 'pdf提取文本', '獲取pdf文字', 'pdf純文本'],
    description: `
      <p>PDF轉文本工具旨在為您提供最純粹的文字提取體驗。它會剝離文檔中的背景、圖像、超連結和覆雜的排版，僅保留最核心的文字內容。</p>
      <p>適合需要將PDF內容導入文本編輯器、進行代碼分析或準備機器翻譯語料的使用者。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放PDF文件到此處。' },
      { step: 2, title: '提取文字', description: '系統將快速掃描所有頁面的字符流。' },
      { step: 3, title: '下載文本文件', description: '獲取.txt格式的純文本文件。' },
    ],
    useCases: [
      { title: '電子書轉文本', description: '將PDF格式的小說轉換為純文本，方便在舊款電子書閱讀器上使用。', icon: 'book' },
      { title: '語料庫建設', description: '批量從PDF文檔中提取文字內容，用於AI訓練或大數據分析。', icon: 'code' },
      { title: '翻譯準備', description: '提取純文本內容，方便導入CAT工具或網頁翻譯器。', icon: 'languages' },
    ],
    faq: [
      { question: '掃描件能轉成文本嗎？', answer: '普通轉換工具無法處理掃描件，請點擊導航欄中的"OCR PDF"進行識別。' },
      { question: '排版會亂嗎？', answer: 'TXT不支援樣式，但我們會盡力通過空格和換行保留原始文本的邏輯順序。' },
      { question: '支援特殊字符嗎？', answer: '支援。提取出的文本默認采用UTF-8編碼，兼容中文、韓文、日文等全球語言。' },
    ],
  },

  'deskew-pdf': {
    title: '校正PDF傾斜',
    metaDescription: '自動校正掃描或傾斜的PDF頁面。使用精確的角度檢測修覆傾斜文檔。',
    keywords: ['校正pdf傾斜', '修正pdf', '修覆傾斜掃描', '自動旋轉pdf', '校正pdf角度'],
    description: `
      <p>校正PDF傾斜使用先進的投影輪廓方差分析自動檢測並校正PDF文檔中的傾斜或歪斜頁面。這對於以一定角度送入掃描儀的掃描文檔至關重要。</p>
      <p>該工具分析不同角度下的文本和內容對齊情況，找到最佳旋轉角度，然後應用校正。您可以調整敏感度閾值（1-30）和DPI設置（72-300）以獲得最佳結果。</p>
      <p>所有處理都在您的瀏覽器中使用WebAssembly技術本地進行，確保您的文檔保持隱私和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的掃描PDF文件或點擊選擇。' },
      { step: 2, title: '配置設置', description: '如需要，調整閾值敏感度和DPI以獲得更好的檢測效果。' },
      { step: 3, title: '處理並下載', description: '點擊校正以拉直頁面並下載校正後的PDF。' },
    ],
    useCases: [
      { title: '掃描文檔', description: '修覆從文檔進紙器以一定角度掃描的頁面。', icon: "scan" },
      { title: '手機掃描', description: '校正使用智能手機拍攝的傾斜文檔照片。', icon: "smartphone" },
      { title: '檔案修覆', description: '拉直舊掃描檔案以提高可讀性。', icon: "archive" },
    ],
    faq: [
      { question: '角度檢測有多準確？', answer: '該工具使用投影輪廓方差分析來檢測高達±10度的傾斜角度，具有高精度。它會自動跳過角度小於0.3度的頁面。' },
      { question: '文本品質會受到影響嗎？', answer: '對於90度的倍數旋轉，不會發生品質損失。對於其他角度，工具會四舍五入到最近的度數並保持良好的品質。' },
      { question: '我可以只校正特定頁面嗎？', answer: '該工具會分析所有頁面，但只校正檢測到的傾斜超過敏感度閾值的頁面。傾斜最小的頁面保持不變。' },
      { question: '什麼是敏感度閾值？', answer: '值1-10僅校正明顯的傾斜，11-20檢測中等傾斜，21-30捕獲細微角度。默認值為10，用於平衡檢測。' },
      { question: '處理需要多長時間？', answer: '處理時間取決於文件大小和DPI。150 DPI（默認值）在速度和準確性之間提供了良好的平衡。更高的DPI更準確但更慢。' },
    ],
  },
  'pdf-to-pdfa': {
    title: 'PDF轉PDF/A',
    metaDescription: '將普通PDF轉換為適合長期存檔的PDF/A格式。符合ISO標準。',
    keywords: ['pdf轉pdfa', 'pdf長期存檔', '符合性轉換', 'iso標準pdf'],
    description: `
      <p>PDF/A是PDF的ISO標準化版本，專門用於電子文檔的長期保存和存檔。它確保了文檔在未來幾十年內即使軟件環境發生變化，其顯示效果依然保持一致。</p>
      <p>該工具會嵌入所有字體並移除不符合存檔規範的動態元素（如JavaScript），使文檔變得更加穩健和透明。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF', description: '選擇需要永久存檔的重要文件。' },
      { step: 2, title: '轉換標準', description: '系統將自動調整文檔屬性以符合PDF/A-1b、2b或3b規範。' },
      { step: 3, title: '下載存檔文件', description: '獲取適用於政府、法律或學術要求的存檔PDF。' },
    ],
    useCases: [
      { title: '法律文書存檔', description: '將合同和裁決書轉換為PDF/A，確保長期司法效力。', icon: "scale" },
      { title: '政府公文遞交', description: '滿足政府部門對遞交文件必須為PDF/A格式的要求。', icon: "landmark" },
      { title: '論文提交', description: '高校圖書館通常要求畢業論文采用PDF/A格式以進行永久館藏。', icon: "graduation-cap" },
    ],
    faq: [
      { question: 'PDF/A有什麼好處？', answer: '它具有自包含性，這意味著顯示文檔所需的所有信息（如字體）都已保存在文件內，不依賴外部超連結。' },
      { question: '普通PDF查看器能打開嗎？', answer: '完全可以。PDF/A與所有現有的PDF閱讀器完美兼容。' },
      { question: '轉換後文件會變大嗎？', answer: '通常會，因為必須嵌入所有字體文件以確保長期顯示的準確性。' },
    ],
  },

  'pdf-to-html': {
    title: 'PDF轉HTML',
    metaDescription: '將PDF頁面轉換為網頁格式（HTML）。支援自適應布局和跨平台瀏覽。',
    keywords: ['pdf轉html', 'pdf轉網頁', 'pdf在線發布', 'pdf發布為網頁'],
    description: `
      <p>PDF轉HTML工具可以將您的靜態PDF文檔轉化為可直接在瀏覽器中瀏覽的網頁。轉換後的內容支援文字檢索，並能自適應不同的螢幕尺寸。</p>
      <p>非常適合將PDF手冊、宣傳冊或研究論文發布到網站上，提供比下載PDF文件更好的使用者體驗。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF', description: '選擇要網頁化的PDF文件。' },
      { step: 2, title: '生成HTML', description: '系統將頁面結構、樣式和圖片重新編碼為HTML/CSS。' },
      { step: 3, title: '下載或查看', description: '下載包含HTML文件和資源的壓縮包。' },
    ],
    useCases: [
      { title: '在線展示手冊', description: '將產品手冊轉換為網頁，方便客戶直接通過手機瀏覽器查閱。', icon: 'monitor' },
      { title: 'SEO增強', description: '將PDF內容轉為HTML頁面，更容易被搜尋引擎索引，提高網站流量。', icon: 'search' },
      { title: '內容分發', description: '制作可以在不安裝PDF閱讀器的情況下就能查看的輕量化內容。', icon: 'share-2' },
    ],
    faq: [
      { question: '轉換後的網頁支援響應式嗎？', answer: '是的，我們生成的代碼能適應手機、平板和桌面設備。' },
      { question: '圖片能保留嗎？', answer: '可以，PDF中的所有插圖和照片都會被優化並保存為網頁適用的圖像格式。' },
      { question: 'HTML文件里會有亂碼嗎？', answer: '不會。系統會正確映射編碼，確保轉換後的文字內容準確無誤。' },
    ],
  },

  'extract-images': {
    title: '從PDF提取圖片',
    metaDescription: '從PDF文件中提取所有嵌入的圖片。支援單獨下載或打包成ZIP下載。自動過濾小尺寸圖片。',
    keywords: ['提取pdf圖片', 'pdf圖片提取', '從pdf獲取圖片', '下載pdf圖片', 'pdf轉圖片'],
    description: `
      <p>從PDF提取圖片工具可以從您的PDF文檔中檢索所有嵌入的圖片。您可以單獨下載高品質圖片，也可以將所有圖片打包成ZIP壓縮包一次性下載。</p>
      <p>該工具會根據可自定義的尺寸閾值自動過濾掉小圖片（如圖標和裝飾圖案）。支援批量處理多個PDF文件，高效便捷。</p>
      <p>所有提取過程都在您的瀏覽器中進行，確保您的文檔保持隱私和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放一個或多個PDF文件，或點擊從設備中選擇文件。' },
      { step: 2, title: '設置過濾選項', description: '調整最小寬度、高度和文件大小，過濾掉不需要的小圖片。' },
      { step: 3, title: '提取圖片', description: '點擊提取按鈕，查找PDF中所有嵌入的圖片。' },
      { step: 4, title: '下載', description: '單獨下載每張圖片，或將所有圖片打包成ZIP壓縮包下載。' },
    ],
    useCases: [
      { title: '圖片恢復', description: '從PDF文檔中提取照片和圖片，用於重覆使用或存檔。', icon: "image" },
      { title: '素材收集', description: '收集PDF報告、演示文稿或宣傳冊中的所有圖形和圖片。', icon: "folder" },
      { title: '內容再利用', description: '從PDF中提取圖片，用於其他文檔、網站或演示文稿。', icon: "refresh-cw" },
    ],
    faq: [
      { question: '提取的圖片是什麼格式？', answer: '圖片會盡可能保持原始格式（JPEG、PNG等）提取，原始像素數據會轉換為PNG格式。' },
      { question: '為什麼有些圖片沒有提取出來？', answer: '小於設定尺寸閾值的圖片會被過濾掉。調整過濾設置可以提取更小的圖片。' },
      { question: '可以從掃描的PDF中提取圖片嗎？', answer: '掃描的PDF通常每頁包含一張大圖片。如需逐頁轉換，請使用"PDF轉圖片"工具。' },
    ],
  },

  'ocg-manager': {
    title: 'PDF圖層管理器',
    metaDescription: '管理PDF圖層。查看、切換、新增、刪除和重命名圖層。',
    keywords: ['pdf圖層', 'ocg管理器'],
    description: '<p>管理PDF文檔中的可選內容組（OCG）。</p>',
    howToUse: [
      { step: 1, title: '上傳PDF', description: '上傳包含圖層的PDF文件。' },
      { step: 2, title: '查看圖層', description: '工具自動列出所有圖層。' },
      { step: 3, title: '管理圖層', description: '切換、新增或刪除圖層。' },
    ],
    useCases: [
      { title: '技術圖紙', description: '管理CAD導出中的圖層。', icon: "ruler" },
      { title: '地圖編輯', description: '切換地圖圖層。', icon: "map" },
      { title: '印刷準備', description: '準備分層PDF進行列印。', icon: "printer" },
    ],
    faq: [
      { question: '什麼是PDF圖層？', answer: 'OCG是PDF中可以顯示或隱藏的圖層。' },
      { question: '為什麼沒有圖層？', answer: '並非所有PDF都包含圖層。' },
      { question: '會影響原始內容嗎？', answer: '圖層可見性更改僅影響顯示。' },
    ],
  },

  'pdf-reader': {
    title: 'PDF閱讀器',
    metaDescription: '免費在線PDF閱讀器。在瀏覽器中查看PDF。',
    keywords: ['pdf閱讀器', 'pdf查看器'],
    description: '<p>在瀏覽器中查看PDF文檔。</p>',
    howToUse: [
      { step: 1, title: '打開PDF', description: '上傳PDF文件。' },
      { step: 2, title: '導航頁面', description: '使用頁面控制導航。' },
      { step: 3, title: '調整視圖', description: '放大、縮小或旋轉。' },
    ],
    useCases: [
      { title: '文件審閱', description: '快速審閱PDF文件。', icon: "book-open" },
      { title: '移動閱讀', description: '在任何設備上閱讀PDF。', icon: "smartphone" },
      { title: '快速預覽', description: '預覽PDF。', icon: "eye" },
    ],
    faq: [
      { question: '文件安全嗎？', answer: '是的，完全在瀏覽器中處理。' },
      { question: '可以編輯嗎？', answer: '此工具僅用於查看。' },
      { question: '支援移動裝置嗎？', answer: '是的。' },
    ],
  },

  'digital-sign-pdf': {
    title: '數字簽名',
    metaDescription: "使用 PFX、P12 或 PEM 憑證對 PDF 文件進行數位簽章。在瀏覽器本機新增基於憑證的簽章。",
    keywords: ['pdf數字簽名', 'x509證書', 'pfx簽名', 'p12簽名', 'pem簽名', '電子簽名'],
    description: `
      <p>數字簽名工具允許您為PDF文檔新增加密的X.509數字簽名。與簡單的手繪簽名不同，數字簽名提供法律效力和文檔完整性驗證。</p>
      <p>上傳您的證書文件（PFX、P12或PEM格式），輸入密碼，即可簽署PDF。您可以新增帶有自定義文本、圖像和位置的可見簽名，或僅用於文檔完整性的不可見簽名。</p>
      <p>所有簽名操作都在瀏覽器本地進行，您的證書和文檔永遠不會上傳到任何伺服器。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF', description: '上傳需要數字簽名的PDF文檔。' },
      { step: 2, title: '加載證書', description: '上傳X.509證書文件（.pfx、.p12或.pem）並輸入密碼。' },
      { step: 3, title: '配置簽名', description: '可選新增簽名原因、位置，以及帶有自定義文本或圖像的可見簽名。' },
      { step: 4, title: '簽名並下載', description: '點擊簽名PDF應用數字簽名並下載簽名後的文檔。' },
    ],
    useCases: [
      { title: '法律文件', description: '使用具有法律約束力的數字簽名簽署合同、協議和法律文件。', icon: "scale" },
      { title: '商業審批', description: '數字簽署發票、采購訂單和審批文件以建立稽核軌跡。', icon: "briefcase" },
      { title: '文檔完整性', description: '確保文檔在簽名後未被篡改。', icon: "shield-check" },
    ],
    faq: [
      { question: '支援哪些證書格式？', answer: '支援PFX（.pfx）、PKCS#12（.p12）和PEM（.pem）證書格式。' },
      { question: '簽名具有法律效力嗎？', answer: '是的，使用有效證書的X.509數字簽名在大多數司法管轄區具有法律認可。' },
      { question: '可以新增可見簽名嗎？', answer: '是的，您可以新增帶有自定義文本、圖像、位置和樣式的可見簽名。' },
    ],
  },

  'validate-signature': {
    title: '驗證簽名',
    metaDescription: '驗證PDF文檔中的數字簽名。檢查證書有效性、簽名者信息和文檔完整性。',
    keywords: ['驗證pdf簽名', '驗證數字簽名', '檢查pdf證書', '簽名驗證'],
    description: `
      <p>驗證簽名工具允許您驗證PDF文檔中的數字簽名。檢查簽名是否有效，查看證書信息，並確認文檔完整性。</p>
      <p>上傳已簽名的PDF，查看所有簽名、其有效性狀態、簽名者信息，以及文檔在簽名後是否被修改。</p>
      <p>所有驗證都在瀏覽器本地進行，您的文檔永遠不會上傳到任何伺服器。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳已簽名PDF', description: '上傳包含數字簽名的PDF文檔。' },
      { step: 2, title: '查看結果', description: '查看文檔中找到的所有簽名及其有效性狀態。' },
      { step: 3, title: '檢查詳情', description: '查看證書信息、簽名者詳情和簽名時間戳。' },
      { step: 4, title: '導出報告', description: '可選下載驗證結果的JSON報告。' },
    ],
    useCases: [
      { title: '文檔驗證', description: '驗證簽名文檔是否真實且未被篡改。', icon: "shield-check" },
      { title: '合規審計', description: '檢查簽名有效性以滿足合規和審計要求。', icon: "clipboard-check" },
      { title: '證書審查', description: '查看已簽名文檔的證書詳情和到期日期。', icon: "award" },
    ],
    faq: [
      { question: '"有效"是什麼意思？', answer: '有效簽名意味著文檔自簽名以來未被修改，且證書鏈完整。' },
      { question: '可以驗證多個PDF嗎？', answer: '是的，您可以上傳多個PDF並批量驗證所有簽名。' },
      { question: '為什麼簽名可能無效？', answer: '如果文檔被修改、證書過期或證書不受信任，簽名可能無效。' },
    ],
  },
  'email-to-pdf': {
    title: '郵件轉PDF',
    metaDescription: '將郵件文件（.eml、.msg）轉換為PDF文檔。保留格式、內聯圖像、可點擊超連結和嵌入附件。',
    keywords: ['郵件轉pdf', 'eml轉pdf', 'msg轉pdf', '轉換郵件', '郵件轉換器', '保存郵件為pdf', 'outlook轉pdf'],
    description: `
      <p>郵件轉PDF將您的郵件文件（.eml和.msg格式）轉換為格式良好的PDF文檔。該工具保留郵件頭信息、正文內容、內聯圖像（CID替換）、可點擊超連結，並將附件直接嵌入PDF中。</p>
      <p>自定義輸出選項，包括頁面大小（A4、Letter、Legal）、帶時區支援的日期格式，以及是否包含副本/密件副本欄位和附件信息。</p>
      <p>所有轉換都在您的瀏覽器本地進行，確保您的郵件保持隱私和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳郵件文件', description: '上傳您的.eml或.msg郵件文件。' },
      { step: 2, title: '配置選項', description: '設置頁面大小、日期格式、時區，並選擇要包含的欄位。' },
      { step: 3, title: '轉換並下載', description: '轉換為PDF並下載包含嵌入附件的結果。' },
    ],
    useCases: [
      { title: '法律記錄', description: '將重要郵件存檔為PDF，並嵌入附件用於法律文檔。', icon: "scale" },
      { title: '商業檔案', description: '將商業往來轉換為PDF以進行長期記錄保存。', icon: "briefcase" },
      { title: '證據保存', description: '以不可編輯的PDF格式保存包含內聯圖像和附件的郵件證據。', icon: "shield" },
    ],
    faq: [
      { question: '支援哪些郵件格式？', answer: '.eml（RFC 822）和.msg（Microsoft Outlook）文件都完全支援。' },
      { question: '是否包含附件？', answer: '是的！附件直接嵌入到PDF文件中。您可以使用兼容的PDF閱讀器從PDF中提取它們。' },
      { question: '內聯圖像是否顯示？', answer: '是的，通過CID（Content-ID）引用的內聯圖像會自動轉換為base64數據URI並在PDF中顯示。' },
      { question: '超連結是否可點擊？', answer: '是的，所有HTML超連結（<a>標簽）和純文本郵件中的URL都會轉換為PDF中的可點擊超連結。' },
      { question: '郵件格式是否保留？', answer: '是的，HTML郵件盡可能保留其格式，包括樣式、圖像和超連結。' },
    ],
  },

  'cbz-to-pdf': {
    title: 'CBZ轉PDF',
    metaDescription: '將漫畫書歸檔文件（CBZ）轉換為PDF。保留圖像順序和品質，適用於數字漫畫。',
    keywords: ['cbz轉pdf', '漫畫轉pdf', '轉換cbz', '漫畫書轉換器', 'cbz轉換器'],
    description: `
      <p>CBZ轉PDF將漫畫書歸檔文件轉換為PDF文檔。該工具從CBZ歸檔中提取所有圖像，並將它們編譯成PDF，同時保持正確的閱讀順序。</p>
      <p>從各種頁面大小選項中選擇，包括原始圖像尺寸或標準化的漫畫書尺寸。非常適合在支援PDF但不支援CBZ的設備上閱讀漫畫。</p>
      <p>所有轉換都在您的瀏覽器本地進行，確保您的漫畫保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳CBZ文件', description: '上傳您的.cbz漫畫書歸檔文件。' },
      { step: 2, title: '選擇選項', description: '選擇頁面大小和圖像品質設置。' },
      { step: 3, title: '轉換並下載', description: '轉換為PDF並下載您的漫畫。' },
    ],
    useCases: [
      { title: '電子閱讀器兼容性', description: '將CBZ轉換為PDF，適用於僅支援PDF的電子閱讀器。', icon: "book" },
      { title: '漫畫歸檔', description: '為您的數字漫畫收藏創建PDF歸檔。', icon: "archive" },
      { title: '列印準備', description: '將數字漫畫轉換為PDF以供列印。', icon: "printer" },
    ],
    faq: [
      { question: '什麼是CBZ格式？', answer: 'CBZ是一個包含漫畫書頁面圖像文件的ZIP歸檔，重命名為.cbz副檔名。' },
      { question: '圖像品質是否保留？', answer: '是的，圖像以原始品質嵌入到PDF中。' },
      { question: '是否支援嵌套文件夾？', answer: '是的，歸檔中所有文件夾的圖像都會被提取和排序。' },
    ],
  },

  'pdf-booklet': {
    title: 'PDF小冊子制作',
    metaDescription: '從PDF創建小冊子布局以供列印。為騎馬釘裝訂排列頁面，支援多種網格選項。',
    keywords: ['pdf小冊子', '小冊子制作', '列印小冊子', '騎馬釘', '拼版'],
    description: `
      <p>PDF小冊子制作將您的PDF頁面排列成適合列印和折疊制作的小冊子布局。非常適合創建宣傳冊、雜誌、小冊子和騎馬釘裝訂出版物。</p>
      <p>從各種網格模式（1x2、2x2、2x4、4x4）、紙張尺寸和方向選項中選擇。該工具自動處理頁面拼版以實現正確的折疊順序。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '上傳您想要轉換為小冊子的PDF文檔。' },
      { step: 2, title: '選擇布局', description: '選擇網格模式、紙張大小、方向和旋轉選項。' },
      { step: 3, title: '創建並下載', description: '生成小冊子布局並下載以供列印。' },
    ],
    useCases: [
      { title: '宣傳冊', description: '從標準PDF文檔創建可折疊的宣傳冊。', icon: "book-open" },
      { title: '雜誌', description: '制作具有正確頁面拼版的自出版雜誌。', icon: "book" },
      { title: '活動手冊', description: '為活動創建專業的手冊小冊子。', icon: "calendar" },
    ],
    faq: [
      { question: '什麼是騎馬釘裝訂？', answer: '騎馬釘是一種裝訂方法，將折疊的紙張嵌套並通過折痕釘合。' },
      { question: '我應該使用哪種網格模式？', answer: '1x2是小冊子的標準模式。使用2x2或更大的模式進行多頁列印以節省紙張。' },
      { question: '可以預覽布局嗎？', answer: '是的，該工具在生成最終小冊子之前提供可視預覽。' },
    ],
  },

  'rasterize-pdf': {
    title: '光柵化PDF',
    metaDescription: '將PDF頁面轉換為高品質圖像。導出為PNG、JPEG或WebP，支援自定義DPI設置。',
    keywords: ['光柵化pdf', 'pdf轉圖像', 'pdf轉png', 'pdf轉jpeg', '轉換pdf頁面'],
    description: `
      <p>光柵化PDF將您的PDF頁面轉換為高品質的光柵圖像。從PNG、JPEG或WebP輸出格式中選擇，完全控制DPI和品質設置。</p>
      <p>非常適合創建縮略圖、社交媒體圖形或將PDF內容歸檔為圖像。支援頁面範圍選擇和批量處理。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '配置輸出', description: '選擇DPI、輸出格式（PNG/JPEG/WebP）、品質和頁面範圍。' },
      { step: 3, title: '轉換並下載', description: '處理頁面並單獨下載圖像或作為ZIP歸檔下載。' },
    ],
    useCases: [
      { title: '社交媒體', description: '將PDF幻燈片轉換為圖像以在社交媒體上發布。', icon: "share-2" },
      { title: '縮略圖', description: '為PDF文檔生成預覽縮略圖。', icon: "image" },
      { title: '網絡發布', description: '將PDF內容轉換為網絡友好的圖像格式。', icon: "globe" },
    ],
    faq: [
      { question: '我應該使用什麼DPI？', answer: '螢幕使用72 DPI，一般使用150 DPI，列印品質使用300 DPI。' },
      { question: '哪種格式最好？', answer: 'PNG用於品質/透明度，JPEG用於小尺寸，WebP用於現代網絡使用。' },
      { question: '可以轉換特定頁面嗎？', answer: '是的，指定頁面範圍如"1-5, 8, 10-15"以僅轉換這些頁面。' },
    ],
  },

  'markdown-to-pdf': {
    title: 'Markdown轉PDF',
    metaDescription: '將Markdown文件轉換為格式精美的PDF文檔。支援GitHub風格Markdown和語法高亮。',
    keywords: ['markdown轉pdf', 'md轉pdf', '轉換markdown', 'gfm轉pdf', 'markdown轉換器'],
    description: `
      <p>Markdown轉PDF將您的Markdown文件轉換為專業樣式的PDF文檔。支援CommonMark和GitHub風格Markdown（GFM），包括表格、任務列表和程式碼區塊。</p>
      <p>從多個主題（淺色、深色、GitHub）中選擇，並自定義頁面大小和邊距。程式碼區塊具有語法高亮以提高可讀性。</p>
      <p>所有轉換都在您的瀏覽器本地進行，確保您的內容保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳Markdown文件', description: '上傳您的.md或.markdown文件。' },
      { step: 2, title: '選擇主題', description: '選擇視覺主題並配置頁面設置。' },
      { step: 3, title: '轉換並下載', description: '生成樣式化的PDF並下載。' },
    ],
    useCases: [
      { title: '文檔', description: '將README文件和文檔轉換為可共享的PDF。', icon: "file-text" },
      { title: '筆記導出', description: '將Markdown筆記導出為PDF以供列印或共享。', icon: "edit-3" },
      { title: '報告', description: '從Markdown創建具有專業樣式的報告。', icon: "bar-chart" },
    ],
    faq: [
      { question: '是否支援GitHub風格Markdown？', answer: '是的，支援表格、任務列表、刪除線和其他GFM功能。' },
      { question: '可以自定義樣式嗎？', answer: '從預設主題中選擇或新增自定義CSS以完全控制。' },
      { question: '程式碼區塊是否高亮？', answer: '是的，程式碼區塊包含常見語言的語法高亮。' },
    ],
  },

  'font-to-outline': {
    title: '字體轉輪廓',
    metaDescription: '通過將頁面轉換為高品質圖像來刪除PDF文檔的字體依賴。確保在所有系統上的兼容性。',
    keywords: ['字體轉輪廓', '輪廓字體', '刪除字體', '字體兼容性', '扁平化pdf字體', 'pdf字體刪除'],
    description: `
      <p>字體轉輪廓通過將每個頁面轉換為高品質的光柵化內容來刪除PDF中的所有字體依賴。這確保您的文檔在任何系統上看起來完全相同，即使未安裝原始字體。</p>
      <p>該工具以您選擇的DPI（150-600）渲染每個頁面，刪除嵌入的字體同時保留確切的視覺外觀。可選地，您可以新增不可見的文本層以保持可搜尋性。</p>
      <p>這對於列印準備、跨平台兼容性以及在共享文檔時避免字體許可問題至關重要。所有處理都在您的瀏覽器本地進行。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '上傳包含要刪除字體的PDF。' },
      { step: 2, title: '設定品質', description: '選擇DPI（列印推薦300，螢幕推薦150）。如需要，啟用可搜尋文本。' },
      { step: 3, title: '轉換並下載', description: '處理文件並下載獨立於字體的PDF。' },
    ],
    useCases: [
      { title: '列印準備', description: '通過刪除所有字體依賴來消除商業列印機的字體問題。', icon: "printer" },
      { title: '跨平台共享', description: '共享在任何設備上看起來相同的文檔，無論安裝了什麼字體。', icon: "share-2" },
      { title: '字體許可', description: '刪除嵌入的字體以避免分發文檔時的許可問題。', icon: "shield" },
    ],
    faq: [
      { question: '這是如何工作的？', answer: '該工具以高分辨率（您選擇的DPI）渲染每個頁面，並從這些圖像重新創建PDF，刪除所有字體依賴同時保留視覺外觀。' },
      { question: '轉換後還能選擇文本嗎？', answer: '默認情況下不能。文本成為圖像的一部分。但是，您可以啟用"保留可搜尋文本"以新增不可見的文本層用於搜尋和複製功能。' },
      { question: '我應該使用什麼DPI？', answer: '列印品質輸出推薦300 DPI。螢幕查看150 DPI就足夠了，並產生較小的文件。600 DPI用於最高品質但會創建大文件。' },
      { question: '文件大小會增加嗎？', answer: '文件大小取決於DPI和內容。150 DPI通常產生較小的文件，300 DPI可能增加大小，600 DPI顯著增加大小。會自動應用壓縮。' },
      { question: '這是可逆的嗎？', answer: '不，字體數據被永久刪除。如果需要使用原始字體的可編輯文本，請保留原始文件的備份。' },
      { question: '向量圖形怎麼辦？', answer: '原始PDF中的向量圖形（形狀、線條）將與文本一起轉換為光柵。視覺品質在您選擇的DPI下得以保留。' },
    ],
  },

  'pdf-to-markdown': {
    title: 'PDF轉Markdown',
    metaDescription: '將PDF轉換為Markdown格式。提取文本並保留標題和列表等格式。',
    keywords: ['pdf轉markdown', 'pdf轉md', 'pdf文本提取', 'markdown轉換器', 'pdf轉文本'],
    description: `
      <p>PDF轉Markdown將您的PDF文檔轉換為乾淨、結構良好的Markdown文件。該工具智能提取文本內容，並嘗試保留標題、列表和段落等格式。</p>
      <p>非常適合將PDF文檔轉換為可編輯格式，用於文檔編寫、筆記記錄或支援Markdown的內容管理系統。</p>
      <p>所有轉換都在您的瀏覽器本地進行，確保您的文檔保持隱私和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '拖放您的PDF文件或點擊選擇。' },
      { step: 2, title: '配置選項', description: '設置頁面範圍，選擇是否包含頁碼，並調整換行設置。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換生成Markdown文件並下載。' },
    ],
    useCases: [
      { title: '文檔編寫', description: '將PDF手冊和指南轉換為Markdown，用於版本控制的文檔。', icon: "file-text" },
      { title: '筆記記錄', description: '從PDF文章和書籍中提取內容到您的筆記系統。', icon: "edit-3" },
      { title: '內容遷移', description: '將PDF內容遷移到支援Markdown的CMS平台。', icon: "copy" },
    ],
    faq: [
      { question: '格式會保留嗎？', answer: '該工具會根據字體大小檢測標題，以及項目符號/編號列表。覆雜布局可能需要手動調整。' },
      { question: '可以轉換特定頁面嗎？', answer: '是的，您可以指定頁面範圍如"1-3, 5, 7"以僅轉換這些頁面。' },
      { question: '掃描的PDF能用嗎？', answer: '掃描的PDF包含圖像而非文本。請先使用我們的OCR工具提取文本，然後再轉換為Markdown。' },
    ],
  },
  'extract-tables': {
    title: '從PDF提取表格',
    metaDescription: '檢測並從PDF文檔中提取表格。導出為JSON、Markdown或CSV格式。',
    keywords: ['提取表格', 'pdf表格提取', 'pdf轉csv', 'pdf轉excel', '表格檢測'],
    description: `
      <p>從PDF提取表格檢測PDF文檔中的表格數據並以結構化格式導出。選擇JSON用於數據集成，Markdown用於文檔，或CSV用於電子表格。</p>
      <p>該工具使用智能檢測算法來識別表格結構，即使在覆雜文檔中也是如此。指定頁面範圍並調整檢測參數以獲得最佳結果。</p>
      <p>所有處理都在您的瀏覽器本地進行，確保您的文檔保持隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF文件', description: '上傳包含要提取表格的PDF。' },
      { step: 2, title: '配置檢測', description: '設置頁面範圍和最小列/行閾值。' },
      { step: 3, title: '導出並下載', description: '選擇輸出格式（JSON/Markdown/CSV）並下載。' },
    ],
    useCases: [
      { title: '數據分析', description: '提取表格數據以在電子表格或數據庫中進行分析。', icon: "bar-chart" },
      { title: '報告處理', description: '從PDF報告中提取表格以進行進一步處理。', icon: "file-text" },
      { title: '文檔', description: '將PDF表格轉換為Markdown用於技術文檔。', icon: "book" },
    ],
    faq: [
      { question: '可以檢測覆雜表格嗎？', answer: '該工具最適合簡單的網格表格。覆雜的合併單元格可能需要手動調整。' },
      { question: '如果找不到表格怎麼辦？', answer: '嘗試調整最小列/行閾值或檢查PDF是否包含實際的表格結構。' },
      { question: '可以從特定頁面提取嗎？', answer: '是的，指定頁面範圍以將提取限制在某些頁面。' },
    ],
  },
  'form-logic-designer': {
    "title": "表單邏輯設計",
    "metaDescription": "使用視覺化設計器建立 PDF 表單規則。連接字段並添加互動式計算和驗證邏輯。",
    "keywords": [
        "PDF表單邏輯",
        "AcroJS注入",
        "節點連線",
        "交互式PDF",
        "表單連動"
    ],
    "description": "\n        <p>可編程PDF表單邏輯設計艙是填補PDF高級交互空白的革新性工具。傳統的PDF表單都是死板的靜態欄位，而本工具能讓您的PDF表單像現代Web應用一樣具備動態交互邏輯。</p>\n        <p>通過基於 React Flow 構建的“毛玻璃發光節點”視覺化畫布，您的PDF表單欄位會變成可交互的邏輯節點。您可以通過拖拽連線，為它們定義各種觸發條件與行為動作（如：當複選框被勾選 ➜ 啟用原本禁用的輸入框 ➜ 自動計算總價並填充）。</p>\n        <p>設計完畢後，底層的 AcroJS 腳本注入引擎會將邏輯完全編譯為標準的 Acrobat JavaScript 並埋入 PDF 的交互表單字典 '/AA' 中，使該文檔在任意標準 PDF 閱讀器中均能生效。</p>\n      ",
    "howToUse": [
        {
            "step": 1,
            "title": "上傳交互式PDF表單",
            "description": "上傳已包含交互表單欄位（AcroForm）的PDF文件。"
        },
        {
            "step": 2,
            "title": "在畫布設計邏輯連線",
            "description": "各個欄位自動呈現為節點，從源欄位事件（如改變、失去焦點）拉出連線，指向目標欄位的動作（如隱藏、禁用、設值）。"
        },
        {
            "step": 3,
            "title": "編譯注入並下載",
            "description": "點擊編譯，系統生成 JavaScript 腳本並注入 PDF 字典，輸出具備高交互性的智能PDF。"
        }
    ],
    "useCases": [
        {
            "title": "智能商業合約樣本",
            "description": "根據用戶勾選的條款，動態顯示或隱藏附加補充協議輸入框，保持介面清爽。",
            "icon": "file-signature"
        },
        {
            "title": "動態財務報銷單",
            "description": "多行報銷金額自動求和，並根據填寫的稅率自動計算最終扣稅，完全零手動輸入。",
            "icon": "calculator"
        },
        {
            "title": "交互式問卷調研表",
            "description": "利用條件跳轉邏輯，跳過不適用的問題，提升用戶在移動端填寫表單的體驗。",
            "icon": "form-input"
        }
    ],
    "faq": [
        {
            "question": "這需要我的 PDF 預先有表單欄位嗎？",
            "answer": "是的。該工具用於為已有的 PDF 表單欄位添加高級邏輯。如果您沒有表單欄位，可以先使用我們的表單創建工具添加輸入框和複選框。"
        },
        {
            "question": "生成的交互邏輯在所有 PDF 閱讀器上都能運行嗎？",
            "answer": "只要閱讀器遵循 Adobe PDF 標準並支持 Acrobat JavaScript（如 Adobe Reader, Foxit Reader, Chrome/Edge 瀏覽器內置閱讀器等），聯動邏輯均能完美執行。部分精簡版移動端閱讀器可能支持有限。"
        },
        {
            "question": "會影響 PDF 的正常打印嗎？",
            "answer": "完全不會。注入的腳本只在屏幕交互時運行，打印時會根據當前的表單內容靜態度量打印，不包含任何連線痕迹。"
        }
    ]
},

  'global-invoice-parser': {
    "title": "PDF發票金額轉換器",
    "metaDescription": "從 PDF 提取發票金額、在貨幣之間轉換總計並向文件添加計算摘要。",
    "keywords": [
        "發票翻譯",
        "發票匯率折算",
        "外幣帳單換算",
        "發票原地替換",
        "多幣種發票"
    ],
    "description": "\n        <p>全球發票版式智能翻譯與多幣種匯率折算艙是跨國財務人員與海淘用戶的“掌控感福音”。</p>\n        <p>拿到美元、歐元、日圓等外幣發票時，繁雜的匯率計算和語種障礙令人頭疼。本工具不僅實現了 <strong>發票表格條目的原地翻譯</strong>，更接入了實時國際匯率機制。</p>\n        <p>自動在發票右下角或頁腳留白位置，物理覆蓋印蓋一個 HSL 毛玻璃效果、印有三維貨幣符號發光的“Exchange Rate ledger”匯率折算帳本，並伴隨老虎機滾輪數字翻轉的震撼特效。不破壞原有發票排版格式，清晰呈現本幣合計及匯率，財務掌控感滿分。</p>\n      ",
    "howToUse": [
        {
            "step": 1,
            "title": "上傳外幣發票PDF",
            "description": "拖入一張包含美元 ($), 歐元 (€) 或日圓 (¥) 的 PDF 發票或帳單。"
        },
        {
            "step": 2,
            "title": "設定本幣與匯率",
            "description": "選擇您希望折算的目标本幣（如 CNY），可手動填入自定義匯率或使用實時匯率。"
        },
        {
            "step": 3,
            "title": "生成折算帳本",
            "description": "點擊折算，發票總額旁邊被優雅 stamped 本地匯率帳本並開放下載。"
        }
    ],
    "useCases": [
        {
            "title": "跨國差旅費報銷",
            "description": "員工海外出差的發票（如美元計價），一鍵折算為人民幣總額，並物理印蓋匯率快照，方便財務極速報銷。",
            "icon": "plane"
        },
        {
            "title": "跨境海淘對帳結算",
            "description": "將海淘帳單上的歐元/日圓原地折算，一眼看清真實的本地貨幣支出。",
            "icon": "credit-card"
        },
        {
            "title": "外貿企業發票建檔",
            "description": "為日常繁雜的外幣結算單加蓋本幣標記及核算快照，統一財務歸檔度量衡。",
            "icon": "folder-open"
        }
    ],
    "faq": [
        {
            "question": "它是如何自動獲取發票金額的？",
            "answer": "系統後台利用 PDFJS 文本字元流分析，通過金錢正則匹配帶有 `$`、`€`、`£` 等符號的數字。同時分析 `Total` 等關鍵詞以鎖定真實的發票最終金額。"
        },
        {
            "question": "匯率是實時的嗎？",
            "answer": "是的。默認情況下，系統會基於國際匯率接口自動拉取當天的基準匯率。當然，您也可以完全自由地手動填入公司財務統一要求的內部結算匯率。"
        },
        {
            "question": "蓋印的“轉換帳本”會遮擋原發票的關鍵信息嗎？",
            "answer": "系統會智能探測發票底部的空白位置進行蓋印。同時，該帳本背景具有高品質半透明毛玻璃特效，能夠以優雅、不破壞原文檔格式的形態貼在頁面上。"
        }
    ]
},

  'pdf-to-cbz': {
    title: 'PDF 轉 CBZ',
    metaDescription: '將 PDF 文件轉換為 CBZ 漫畫書歸檔。保留圖像順序和質量。',
    keywords: ["pdf 轉 cbz","漫畫轉換","cbz 轉換器"],
    description: "<p>PDF 到 CBZ 是為漫畫愛好者和數位電子書檔案管理員量身設計的。它將 PDF 卷的每一頁渲染為高保真光柵化圖形，並將它們編譯成標準漫畫書 ZIP (.cbz) 套件。 </p>\n      <p>為了消除 Calibre、Komga、Kavita 或 CDisplayEx 等系統中令人沮喪的手動抓取，處理器會在內部自動生成並註入 <strong>ComicInfo.xml</strong> 和 <strong>metadata.opf</strong> 文件，同時將標準化的 <strong>ComicBookInfo JSON</strong> 有效負載直接寫入 ZIP 文件元數據中。 </p>\n      <p>包括影像壓縮品質、頁面尺寸比例、從右到左佈局閱讀切換（漫畫模式）和黑白灰階顏色過濾的完整配置滑桿。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳漫畫PDF",
    "description": "拖放您的主要漫畫、畫冊或漫畫 PDF 檔案。"
  },
  {
    "step": 2,
    "title": "輸入漫畫元數據",
    "description": "填寫系列、卷、標題、作者和出版商字段，並切換佈局或灰階優化。"
  },
  {
    "step": 3,
    "title": "編譯下載",
    "description": "點擊「轉換」即可編譯並檢索元資料豐富的 .cbz 文件，立即為 Calibre 做好準備。"
  }
],
    useCases: [
  {
    "title": "逆行漫畫包裝",
    "description": "將原始掃描 PDF 書籍轉換為緊湊、符合標準的 CBZ 漫畫文件，漫畫庫管理員可以輕鬆抓取。",
    "icon": "book"
  },
  {
    "title": "零費力的口徑集成",
    "description": "內建的metadata.opf模式允許Calibre獲取和分類創建者和數量問題，而無需手動查找。",
    "icon": "database"
  },
  {
    "title": "電子墨水屏增強",
    "description": "在編譯時將圖形色彩通道預先過濾為高對比度灰度，提高電子墨水螢幕上的視覺刷新和清晰度，同時節省儲存空間。",
    "icon": "eye"
  }
],
    faq: [
  {
    "question": "什麼是 .cbz 檔？",
    "answer": "CBZ 檔案是漫畫系列的專用存檔容器格式。它的內部格式為 ZIP 包，其中包含按順序編號的頁面影像以及結構元資料 XML 檔案。"
  },
  {
    "question": "元資料如何相容？",
    "answer": "我們一次編譯並嵌入 ComicInfo.xml、metadata.opf 和 ZIP 檔案註解。這保證了多個漫畫和電子書生態系統的絕對合規性。"
  },
  {
    "question": "為什麼要使用灰階模式？",
    "answer": "如果您在灰階電子墨水閱讀器（如 Kindle 或 Kobo）上閱讀，直接以灰度進行編譯可以減少偽影，提供卓越的對比度，並縮小最終 CBZ 檔案大小。"
  }
],
  },

  'overlay-pdf': {
    title: '疊加 PDF',
    metaDescription: '將兩個 PDF 頁面疊加合併為一頁。適用於印章、背景與水印疊加。',
    keywords: ["pdf 疊加","合併 pdf","浮水印疊加","頁面覆蓋"],
    description: "<p>疊加 PDF 可讓您將一個 PDF 文件的頁面層疊在另一個 PDF 文件的上面或下面。它非常適合應用信頭、添加背景網格、加蓋浮水印或將佈局草稿融合在一起。 </p>\n      <p>支援疊加模式（圖層在頂部）和底層模式（圖層在下方）。指定自訂目標頁面範圍或循環較短的覆蓋文件以自動覆蓋整個基本文件。 </p>\n      <p>所有處理完全在本地網路瀏覽器內執行，確保全面的安全性和資料隱私。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳主要 PDF",
    "description": "拖放您的主要基礎 PDF 文件。"
  },
  {
    "step": 2,
    "title": "上傳圖層PDF",
    "description": "提供充當圖層的overlay/underlay文件。"
  },
  {
    "step": 3,
    "title": "配置分層",
    "description": "選擇疊加或底層模式、指定頁面範圍並啟用頁面循環。"
  },
  {
    "step": 4,
    "title": "編譯下載",
    "description": "點選編譯，處理並下載分層結果PDF。"
  }
],
    useCases: [
  {
    "title": "公司信箋",
    "description": "在標準公司信頭範本之上分層發票內容。",
    "icon": "file-text"
  },
  {
    "title": "水印與印章",
    "description": "在文件上疊加安全印章、簽名印章或背景。",
    "icon": "shield"
  },
  {
    "title": "繪製藍圖",
    "description": "在文字區塊下方組合草稿架構或版面配置網格。",
    "icon": "layout"
  }
],
    faq: [
  {
    "question": "Overlay 和 Underlay 有什麼不同？",
    "answer": "疊加將輔助圖層放置在主要內容之上。 Underlay 將其放置在最底部，充當背景模板。"
  },
  {
    "question": "我可以循環疊加層嗎？",
    "answer": "是的，如果圖層PDF比基礎文件短，啟用循環將循環它（例如第1,2,1,2頁）以覆蓋所有基礎頁面。"
  },
  {
    "question": "支援頁面範圍嗎？",
    "answer": "是的，您可以使用範圍語法（例如「1-5」、「奇數」、「偶數」或逗號分隔清單）來定位特定頁面。"
  }
],
  },

  'timestamp-pdf': {
    "title": "PDF 本機時間戳記",
    "metaDescription": "此工具使用裝置時鐘建立本機自我簽署的時間戳記。它不會向所選 TSA 要求或驗證時間戳記。",
    "keywords": [
      "PDF 本機時間戳記",
      "PDF",
      "裝置時間"
    ],
    "description": "<p>選擇 PDF 以新增本機時間戳記。</p><p>此工具使用裝置時鐘建立本機自我簽署的時間戳記。它不會向所選 TSA 要求或驗證時間戳記。</p><p>處理在瀏覽器中完成；不會向 TSA 傳送文件或雜湊值。</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "上傳 PDF",
        "description": "選擇 PDF 以新增本機時間戳記。"
      },
      {
        "step": 2,
        "title": "所選機構名稱",
        "description": "選擇本機簽章的名稱。此名稱不會連線至 TSA。"
      },
      {
        "step": 3,
        "title": "新增本機時間戳記",
        "description": "處理檔案、查看結果並下載 PDF。"
      }
    ],
    "useCases": [
      {
        "title": "工作草稿",
        "description": "保留一份以本機時間標記的工作文件副本。",
        "icon": "file-text"
      },
      {
        "title": "個人檔案",
        "description": "儲存附有時間戳記的副本供自己參考。",
        "icon": "archive"
      },
      {
        "title": "檢查簽章",
        "description": "在 PDF 閱讀器中檢查產生的簽章和中繼資料。",
        "icon": "search"
      }
    ],
    "faq": [
      {
        "question": "時間戳記經過獨立驗證嗎？",
        "answer": "此工具使用裝置時鐘建立本機自我簽署的時間戳記。它不會向所選 TSA 要求或驗證時間戳記。"
      },
      {
        "question": "需要上傳數位憑證嗎？",
        "answer": "不需要。工具會為本次操作在本機產生自我簽署的憑證。"
      },
      {
        "question": "時間來自哪個時鐘？",
        "answer": "時間來自裝置時鐘，未經獨立驗證。"
      }
    ]
  },

  'add-page-labels': {
    title: '添加頁面標籤',
    metaDescription: '為 PDF 設定自定義頁面標籤（如前言用 I, II，正文用 1, 2）。改善閱讀器導航。',
    keywords: ["頁面標籤","pdf 頁面編號","pdf 邏輯頁碼","閱讀器導航"],
    description: "<p>新增頁面標籤可讓您將自訂頁面標籤元資料 (/PageLabels) 插入 PDF 的根目錄字典中。這可以自訂專業 PDF 閱讀器導覽側邊欄和頂部頁碼跳轉面板中顯示的標籤（例如，使用羅馬數字作為前言，使用十進位序列作為主體，或使用自訂前綴，例如 A-0、A-1 作為技術小節）。 </p>\n      <p>支援無縫組合多個自訂規則。至關重要的是，我們建立了高度優化的<strong>不相交範圍切片演算法</strong>：即使您聲明複雜的交替模式（例如，奇數頁樣式 A，偶數頁樣式 B），該工具也會優雅地剖析和組合邊界，以確保正確的符合標準的顯示，而不會將格式洩漏到未映射的頁面中洩漏。 </p>\n      <p>所有操作都完全在本機瀏覽器沙箱內處理，確保絕對的資料隱私。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳PDF文檔",
    "description": "提供您要標記的目標 PDF 文件。"
  },
  {
    "step": 2,
    "title": "配置標籤規則",
    "description": "新增一個或多個規則，指定頁面範圍（例如，「1-5」、「奇數」或逗號分隔清單）、前綴、樣式和起始順序。"
  },
  {
    "step": 3,
    "title": "預覽與下載",
    "description": "查看下面的即時頁面標籤清單預覽，然後編譯並下載更新的 PDF 文件。"
  }
],
    useCases: [
  {
    "title": "學術論文格式",
    "description": "設定小寫羅馬數字（i、ii、iii）作為介紹性的前面內容，並為主要章節過渡到十進制。",
    "icon": "book"
  },
  {
    "title": "工程藍圖前綴",
    "description": "附加子系統縮寫（例如「A-1」、「M-5」）作為頁面標籤前綴，讓團隊在幾秒鐘內搜尋和定位頁面。",
    "icon": "layout"
  },
  {
    "title": "自訂交替佈局",
    "description": "以最大的自由度將高度特定的頁面範圍索引應用於奇數/偶數序列或非連續部分。",
    "icon": "shuffle"
  }
],
    faq: [
  {
    "question": "什麼是頁面標籤與頁碼？",
    "answer": "普通頁碼是直接呈現在畫布上的可視文字區塊（列印時可見）。然而，頁面標籤是注入到 PDF 目錄中的結構元資料。它們控制縮圖下方以及 Adob​​e Acrobat 或 Apple Preview 等軟體內的頁面查找框中顯示的內容。"
  },
  {
    "question": "如果我將頁面範圍留空會發生什麼事？",
    "answer": "將頁面範圍留空會導致規則全域套用至文件的所有頁面。"
  },
  {
    "question": "重疊規則如何處理？",
    "answer": "規則依照列出的順序依序評估。如果後面的規則的頁面範圍與前面的規則重疊，則後面的規則優先並覆蓋該頁面的標籤。"
  }
],
  },

  'ai-pdf-reflower': {
    title: 'AI 智能自適應重排',
    metaDescription: "重排 PDF 文本，以便於在行動裝置上閱讀。在瀏覽器中將擷取的內容匯出為 Markdown 或 EPUB。",
    keywords: ["pdf 重排","自適應 pdf","pdf 轉 markdown","epub 導出"],
    description: "<p>AI PDF Layout Reflower 是您在行動裝置上閱讀 PDF 文件的終極伴侶。傳統 PDF 使用固定佈局，通常需要在智慧型手機或平板電腦上無休止地縮放和水平滾動，從而導致乏味的閱讀體驗。 </p>\n      <p>此工具智慧解析 PDF 頁面的文字流、行距和物理座標，重建語意段落和標題層次結構。對於多欄或雙欄文檔，它會智慧地將欄流合併為單一響應流，確保閱讀流暢。 </p>\n      <p>此外，它還支援將數學公式渲染為LaTeX/MathJax，並提供多種閱讀主題（棕褐色、深色、護眼綠）。您只需單擊即可將重排版式匯出為 Markdown 或標準 EPUB 電子書。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳PDF文件",
    "description": "拖放 PDF 檔案或按一下瀏覽並選擇它。"
  },
  {
    "step": 2,
    "title": "選擇閱讀主題",
    "description": "在右側的 3D 行動模擬器中選擇您喜歡的字體大小和主題顏色。"
  },
  {
    "step": 3,
    "title": "出口文件",
    "description": "滿足後，使用實體拉繩將文件匯出為 Markdown 或 EPUB。"
  }
],
    useCases: [
  {
    "title": "手機文學閱讀",
    "description": "在手機上無縫閱讀學術論文和研究報告，無需不斷縮放。",
    "icon": "smartphone"
  },
  {
    "title": "電子書轉換",
    "description": "將文字較多的 PDF 轉換為 EPUB 檔案並匯入 Kindle 或其他電子書閱讀器。",
    "icon": "book"
  },
  {
    "title": "筆記存檔",
    "description": "直接將結構化 PDF 內容轉換為乾淨的 Markdown 文件，作為您的個人知識庫。",
    "icon": "file-text"
  }
],
    faq: [
  {
    "question": "它能正確處理雙欄 PDF 嗎？",
    "answer": "是的，佈局重排會依序偵測文字區塊的水平座標並建構左右列，以防止行交錯。"
  },
  {
    "question": "圖片和數學公式會遺失嗎？",
    "answer": "數學公式轉換為 LaTeX/MathJax 語法以進行乾淨的 Web 渲染，並且圖像保留在相應的語義位置。"
  },
  {
    "question": "轉換是在雲端完成的嗎？",
    "answer": "不會，所有佈局分析和格式打包均在您的瀏覽器本地執行，以確保您文件的絕對隱私。"
  }
],
  },

  'citation-linker': {
    title: '引文連結啟動器',
    metaDescription: "將 PDF 中的引文標記轉換為可點擊的 DOI 連結或頁面引用。為研究文件添加有用的導航。",
    keywords: ["引文激活","pdf 超連結","doi 匹配","學術 pdf 助手"],
    description: "<p>引文連結器專為學術研究人員設計。在許多 PDF 論文中，引文標記（例如 [1]、[2]）是純文本，迫使讀者來回滾動到文件末尾的參考列表，從而乾擾了他們的注意力。 </p>\n      <p>該工具在本地讀取 PDF 文本，使用模式識別將引文標記與其相應的參考條目進行匹配，並使用 DOI 查找或頁面跳轉坐標覆蓋可點擊的 PDF 鏈接註釋。 </p>\n      <p>它還產生互動式引用關係圖，以直觀地導航文件的參考網路。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳學術PDF",
    "description": "上傳包含參考書目/參考部分的 PDF 論文或論文。"
  },
  {
    "step": 2,
    "title": "評論引用",
    "description": "檢查互動式地圖中的引文對，並在必要時手動編輯或新增 DOI 連結。"
  },
  {
    "step": 3,
    "title": "注入鏈接",
    "description": "點擊啟動按鈕將超連結疊加到 PDF 上並下載更新的文件。"
  }
],
    useCases: [
  {
    "title": "深度文學閱讀",
    "description": "點擊引文標記可立即查看參考文獻詳細資訊或導航至外部 DOI 頁面。",
    "icon": "link"
  },
  {
    "title": "發表前準備",
    "description": "確保您的書面學術論文在最終提交之前具有完全活躍的超連結導航。",
    "icon": "award"
  },
  {
    "title": "參考圖分析",
    "description": "透過互動式網路拓樸圖了解文獻層次結構和連結。",
    "icon": "git-network"
  }
],
    faq: [
  {
    "question": "如果參考文獻沒有 DOI 怎麼辦？",
    "answer": "如果找不到 DOI，工具將退回到內部「前往頁面」操作，允許您點擊標記並直接跳到參考頁面。"
  },
  {
    "question": "支援哪些引文格式？",
    "answer": "它支援常見的數字括號（例如，[1]、[1-3]）和作者年份引用（例如，Author et al., 202X）。"
  },
  {
    "question": "它會修改我的 PDF 的外觀嗎？",
    "answer": "不，它會在文字頂部注入不可見的連結註釋，保留文件的原始佈局、字體和樣式。"
  }
],
  },

  'vector-extractor': {
    title: 'PDF 矢量提取器',
    metaDescription: "從 PDF 頁面中提取向量圖形作為 SVG。選擇圖表、圖表和徽標進行重新著色和匯出。",
    keywords: ["pdf 提取矢量","svg 導出","矢量圖表提取","提取 logo"],
    description: "<p>PDF 向量擷取器可解鎖 PDF 檔案中嵌入的向量路徑和圖稿。輕鬆從文件中提取向量圖、圖表或徽標以進行設計工作或列印。 </p>\n      <p>在底層，它利用高保真 SVG 渲染將 PDF 向量路徑解構為乾淨、標準的 SVG 元素樹，而不會損失精度。 </p>\n      <p>介面突出顯示具有 Z 軸 3D 圖層爆炸效果的懸停元素，並配有顏色選擇器面板，供設計人員調整和提取向量節點。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳PDF文檔",
    "description": "上傳包含向量資源、圖表、圖表或標誌的 PDF。"
  },
  {
    "step": 2,
    "title": "選擇元素",
    "description": "將滑鼠懸停在向量畫布上以突出顯示元素，然後按一下以選擇節點。"
  },
  {
    "step": 3,
    "title": "客製與導出",
    "description": "在面板中調整路徑屬性，然後下載為SVG或複製SVG原始碼。"
  }
],
    useCases: [
  {
    "title": "設計資產提取",
    "description": "從品牌指南或宣傳冊中快速擷取公司商標、圖示和插圖。",
    "icon": "bezier"
  },
  {
    "title": "科學圖表導出",
    "description": "從研究論文中提取向量圖以用於高解析度列印或演示。",
    "icon": "presentation"
  },
  {
    "title": "向量資源重新著色",
    "description": "在將提取的資源儲存到 Web 專案之前修改其描邊和填滿顏色。",
    "icon": "crown"
  }
],
    faq: [
  {
    "question": "為什麼我無法選擇某些圖像？",
    "answer": "PDF 包含光柵影像（如相片或掃描頁）和向量圖稿（如形狀和曲線）。只有向量路徑可以解構為 SVG 路徑。"
  },
  {
    "question": "輸出的 SVG 是否包含樣式？",
    "answer": "是的，匯出的 SVG 保留所有原始屬性，包括填滿、描邊、不透明度、漸層和座標變換。"
  },
  {
    "question": "大檔案會卡頓嗎？",
    "answer": "我們使用 WebAssembly 加速，但具有極其複雜的 CAD 繪圖或數千個向量路徑的 PDF 可能需要幾秒鐘的時間才能渲染。"
  }
],
  },

  'deep-sanitize': {
    title: '深度元數據清洗',
    metaDescription: "從 PDF 中刪除元資料、隱藏圖層和未使用的物件。共享之前在本地清理文檔資訊。",
    keywords: ["pdf 脫敏","清除元數據","防溯源","安全 pdf"],
    description: "<p>Deep Metadata Sanitizer 是您抵禦元資料外洩和隱藏追蹤的終極防御手段。僅僅在 PDF 文件中的可見文字上繪製黑框不足以保護商業機密。 </p>\n      <p>此工具掃描 PDF 二進位結構，以完全刪除作者資訊、創建者軟體、編輯日誌（XMP 元資料）、專有的 PieceInfo 快取和 OCG 可選內容群組（通常用於隱形浮水印）。 </p>\n      <p>它也完全重寫交叉引用表（xref），丟棄所有增量更新區塊，以確保刪除或修改的歷史資料無法恢復。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳PDF",
    "description": "選擇包含敏感資料或修改歷史記錄的 PDF 檔案。"
  },
  {
    "step": 2,
    "title": "運行掃描儀",
    "description": "觸發 3D 遏制掃描器檢查文件中隱藏的元資料和圖層。"
  },
  {
    "step": 3,
    "title": "深層消毒",
    "description": "點擊清理以清除追蹤元素並下載完全乾淨的 PDF。"
  }
],
    useCases: [
  {
    "title": "合約共享",
    "description": "在與第三方共享業務合約之前刪除起草記錄、路徑和先前的修訂。",
    "icon": "file-signature"
  },
  {
    "title": "匿名發布",
    "description": "擦除不可見的註解和浮水印，以匿名、安全的方式發布文件。",
    "icon": "eye-off"
  },
  {
    "title": "PDF 優化",
    "description": "刪除孤立物件和垃圾資料流，使檔案在網路上載入速度更快。",
    "icon": "zap"
  }
],
    faq: [
  {
    "question": "這與標準元資料刪除有何不同？",
    "answer": "標準工具僅清除標題或作者等基本欄位。 Deep Sanitizer 重建整個 PDF 外部參考表，擦除 PieceInfo、隱藏浮水印和歷史增量修訂。"
  },
  {
    "question": "這會影響文件版面或文字嗎？",
    "answer": "不，它只剝離隱藏的描述流和結構資料。可見版面、文字和圖形保持不變。"
  },
  {
    "question": "這會刪除 PDF 密碼嗎？",
    "answer": "不可以，如果 PDF 已加密，您必須先將其解鎖，然後才能進行深度清潔。"
  }
],
  },

  'booklet-folding-simulator': {
    title: '3D 裝訂拼版與折頁模擬器',
    metaDescription: "排列 PDF 頁面以進行小冊子列印。在匯出可列印的文件之前預覽折疊的紙張和騎馬訂佈局。",
    keywords: ["3D 拼版","折頁模擬","騎馬釘裝訂","書籍排版"],
    description: "<p>3D 小冊子和折疊模擬器是專為印刷設計師和出版專業人士設計的高級工具。傳統的書籍佈局需要計算複雜的頁面覆蓋和拼版分頁序列。該工具可以可視化並自動化整個過程。 </p>\n      <p>在底層，我們的自訂拼版演算法將連續的 PDF 頁面清單對應到標準列印紙張佈局（例如 4 頁對折、8 頁騎馬訂或手風琴折疊），將頁面合併到大型實體紙張的正面和背面。 </p>\n      <p>在前端，我們利用純 CSS 3D 矩陣變換和彈簧質量物理曲線來製作水平和垂直紙張折疊的動畫，從而提供具有高 WOW 係數的類似物理的裝訂預覽。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳PDF文件",
    "description": "拖放您想要佈局列印的 PDF 文件。"
  },
  {
    "step": 2,
    "title": "選擇折疊佈局",
    "description": "選擇您喜歡的拼版方案（例如，4 頁折疊、8 頁騎馬訂、4 頁手風琴）。"
  },
  {
    "step": 3,
    "title": "互動3D預覽",
    "description": "拖曳滑桿以 3D 形式觀看紙張折疊並檢查最終的頁碼佈局。"
  },
  {
    "step": 4,
    "title": "生成拼版 PDF",
    "description": "點選「產生」下載重新排列並合併的實體表 PDF，準備雙面列印。"
  }
],
    useCases: [
  {
    "title": "手冊原型設計",
    "description": "預先視覺化三摺頁和小冊子的折疊順序，以防止列印後頁面顛倒。",
    "icon": "book-open"
  },
  {
    "title": "書籍騎馬訂",
    "description": "自動產生多頁雜誌或小冊子的拼版列印頁。",
    "icon": "layers"
  },
  {
    "title": "印刷店視覺輔助工具",
    "description": "幫助客戶直觀地了解頁面在列印紙上的物理分佈和折疊方式。",
    "icon": "printer"
  }
],
    faq: [
  {
    "question": "什麼是「強加」？",
    "answer": "拼版是印前印刷的基本步驟。由於商業印刷機在大紙張上進行印刷，頁面的排列順序是無序的，因此一旦列印、折疊和裝訂，頁面就會以正確的順序出現。該工具會自動計算該佈局。"
  },
  {
    "question": "3D 預覽會改變我的 PDF 內容嗎？",
    "answer": "不，原始 PDF 內容僅以紋理映射渲染到 3D 圖紙上。產生的PDF僅調整頁面順序和位置；文字和圖形品質保持完整。"
  },
  {
    "question": "如果我的 PDF 頁數不是 4 或 8 的倍數怎麼辦？",
    "answer": "最佳化器會自動在最後附加空白頁，以符合所選折疊佈局的數學頁數要求。"
  }
],
  },

  'pdf-to-slide': {
    title: 'PDF 轉 Slide',
    metaDescription: "將 PDF 內容轉換為 PowerPoint 投影片。匯出包含文字和圖像的 PPTX 簡報以供進一步編輯。",
    keywords: ["PDF 轉 PPT","投影片重建","圖表提取","PPTX 生成"],
    description: "<p>AI PDF-to-Slide Reconstructor 為靜態 PDF 文件注入了新的活力，將其轉換為現代、高度可自訂的 PowerPoint 投影片 (PPTX)。 </p>\n      <p>此工具使用進階版面配置輪廓擷取器，可自動解析文件標題層級、段落行和字型粗細，以建立邏輯投影片框架。它還隔離向量圖和高解析度表格，剝離背景偽影，將它們乾淨地嵌入為獨立的可編輯資產。 </p>\n      <p>所有 PPTX 輸出均使用標準 Office Open XML 元素構建，這表示所有文字均保持完全可編輯，且向量不會遺失解析度。前端展示了流暢的“星空”卡片過渡動畫，以引人入勝的方式可視化重建。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳學術/商業 PDF",
    "description": "上傳包含結構化部分和圖表的 PDF 文件。"
  },
  {
    "step": 2,
    "title": "分析投影片輪廓",
    "description": "檢查擷取的投影片結構，調整標題或刪除不需要的卡片塊。"
  },
  {
    "step": 3,
    "title": "重建為 PPTX",
    "description": "啟動編譯引擎，接收標準的、可編輯的簡報檔。"
  }
],
    useCases: [
  {
    "title": "研究論文展示",
    "description": "將學術期刊 PDF、文字結構和向量圖轉換為可供演講使用的投影片。",
    "icon": "graduation-cap"
  },
  {
    "title": "業務報告摘要",
    "description": "立即將大量年度公司報告提煉成清晰的、項目符號式的簡報草稿。",
    "icon": "presentation"
  },
  {
    "title": "多設備演示",
    "description": "避免手動複製螢幕截圖。在幾秒鐘內獲得一個乾淨、完全可編輯的佈局框架。",
    "icon": "laptop"
  }
],
    faq: [
  {
    "question": "投影片可以在 Microsoft Office 中編輯嗎？",
    "answer": "是的。這些文件是根據官方 Office Open XML (OOXML) 規範在記憶體中本機產生的。文字、表格和占位符在 PowerPoint、Keynote 和 WPS 中完全互動。"
  },
  {
    "question": "圖表是如何提取的？",
    "answer": "引擎掃描 PDF 中的向量路徑和柵格圖層，偵測表示圖形的有界區域，並將它們剪切為獨立的 SVG 節點或高 DPI 影像。"
  },
  {
    "question": "這對掃描文件有效嗎？",
    "answer": "對於缺少實際文字圖層的掃描 PDF，我們建議先執行我們的 OCR 工具，然後再將檔案傳送到投影片重構器。"
  }
],
  },

  'eink-optimizer': {
    title: '電子墨水屏護眼調色艙',
    metaDescription: "為電子墨水閱讀器優化 PDF 頁面。清潔背景、增加文字對比並調整文件以便於閱讀。",
    keywords: ["墨水屏優化","二值化去噪","字跡加粗","護眼閱讀"],
    description: "<p>e-Ink Reader Optimizer是專為使用Kindle、Onyx Boox、Kobo或其他電子紙設備的電子閱讀器愛好者量身定制的必備工具。 </p>\n      <p>許多掃描的 PDF 電子書在電子墨水螢幕上查看時都存在字體模糊、灰色背景渾濁、噪音或掃描陰影的問題。該工具分析灰階值直方圖，並應用 Otsu 的二值化閾值將文字與背景分離，將灰色背景轉換為乾淨的白色。 </p>\n      <p>此外，它還整合了形態擴張功能，可將細長、褪色的字元加粗和加粗，從而提供清晰、高對比度的版式。慣性阻尼對比度滑桿可讓您即時微調紙張般的對比。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳掃描版 PDF",
    "description": "上傳文字模糊或背景灰色的電子書或掃描文件。"
  },
  {
    "step": 2,
    "title": "調整對比滑桿",
    "description": "拖曳阻尼滑塊可即時平衡背景去除和字元加粗。"
  },
  {
    "step": 3,
    "title": "優化並下載",
    "description": "處理整個 PDF，產生專為電子墨水量身訂做的高對比、護眼文件。"
  }
],
    useCases: [
  {
    "title": "古文獻修復",
    "description": "將歷史書或手寫手稿的掃描件中褪色的文本加粗以使其可讀。",
    "icon": "scroll"
  },
  {
    "title": "試卷清理",
    "description": "漂白影印或拍攝的考試中的背景陰影，在白紙上返回乾淨的黑色文字。",
    "icon": "file-text"
  },
  {
    "title": "電子紙設備訂製",
    "description": "將彩色 PDF 轉換為最佳化的灰度，防止單色螢幕上出現雜亂、抖動的偽影。",
    "icon": "tablet"
  }
],
    faq: [
  {
    "question": "「字元加粗」是如何運作的？",
    "answer": "在影像處理中，稱為膨脹。它使用結構化矩陣將字元邊距擴大一個像素，物理上加粗微弱的筆畫以使它們清晰可辨。"
  },
  {
    "question": "此過程會使檔案大小膨脹嗎？",
    "answer": "恰恰相反。透過將複雜的彩色/灰階影像二值化為簡單的黑白佈局，標準壓縮（如 CCITT Group 4）可以顯著縮小 PDF 檔案大小。"
  },
  {
    "question": "這支援原生文字 PDF 嗎？",
    "answer": "是的。原生向量 PDF 在後台以高解析度進行光柵化、最佳化和編譯，確保統一的高對比度閱讀。"
  }
],
  },

  'cert-cryptor': {
    title: '證書加密與簽名',
    metaDescription: "使用憑證對 PDF 文件進行加密和數位簽章。在瀏覽器中本機處理憑證檔案。",
    keywords: ["證書加密","火漆簽名","數字簽名","非對稱加密"],
    description: "<p>3D 蠟封和證書 Cryptor 為敏感的公司文件、學位或協議提供軍用級安全性和優質的物理級美觀。 </p>\n      <p>從技術上講，它提供了非對稱公鑰加密：匯入收件人的公鑰憑證（.cer/.crt）來鎖定 PDF 串流；只有匹配私鑰 (.pfx) 的持有者才能解密它。它還會產生標準 PKCS#7 數位簽名，以確保文件防篡改完整性。 </p>\n      <p>從視覺上看，我們採用了 3D 實體金色或紅色蠟封印章。當您簽名時，精美渲染的印章會伴隨著令人滿意的機械聲音下降，在頁面上留下具有逼真的法線貼圖高度變化和蠟徑流的 3D 蠟封，周圍環繞著發光的加密軌道。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳PDF與證書",
    "description": "新增您的 PDF 並匯入您的簽章憑證 (.pfx) 或收件者的公共憑證 (.cer)。"
  },
  {
    "step": 2,
    "title": "放置 3D 印章",
    "description": "在文件預覽中拖曳並找到印章，然後選擇蠟樣式（例如金色、深紅色）。"
  },
  {
    "step": 3,
    "title": "按下並簽名",
    "description": "點擊執行即可觀看3D蠟印壓印儀式，產生實體級數位簽章。"
  },
  {
    "step": 4,
    "title": "下載受保護的 PDF",
    "description": "儲存輸出文檔，現已加密鎖定並蓋章。"
  }
],
    useCases: [
  {
    "title": "文憑和證書",
    "description": "將高價值的 3D 蠟封徽章貼在數位文憑和獎項上，並有真正的數位簽名作為支持。",
    "icon": "award"
  },
  {
    "title": "保密協議",
    "description": "使用客戶的公共憑證鎖定敏感合約，以便只有他們的安全實體鑰匙卡才能解鎖它。",
    "icon": "shield-alert"
  },
  {
    "title": "官方新聞稿",
    "description": "對公告進行數位簽名，以防止惡意文字編輯或欺騙。",
    "icon": "stamp"
  }
],
    faq: [
  {
    "question": "蠟印只是圖像還是真實的簽名？",
    "answer": "兩者都有。該系統渲染出具有法線映射深度（視覺層）的極其逼真的 3D 蠟印，並在 PDF（資料層）內編碼真實、防篡改的 PKCS#7 加密簽章。"
  },
  {
    "question": "什麼是「基於憑證的加密」？",
    "answer": "這是一種無密碼加密技術。您使用收件人的公鑰加密該檔案。閱讀器會自動搜尋本機私有憑證以無縫解密文件，確保強大的安全性。"
  },
  {
    "question": "我可以訂製印章設計嗎？",
    "answer": "是的。我們提供多種設計，例如 AwsomePDF 浮水印或皇家徽章，您可以在面板中調整蠟熔化半徑和法線貼圖壓痕深度。"
  }
],
  },

  'passport-id-composer': {
    title: '證件雙面拼版',
    metaDescription: "將身分證或護照的正反面合併在一張 A4 PDF 頁面上。安排掃描並添加可選浮水印。",
    keywords: ["身份證拼版","護照拼大版","證件複印合成","身份證水印"],
    description: "<p>Passport & ID 雙面 Composer 是一款非常有用的生產力實用程序，適用於標準商業和個人操作。 </p>\n      <p>在申請銀行帳戶、入職或簽訂協議時，我們經常需要身分證正反面的複印件。該工具接受正面/背面圖像或PDF頁面，並將它們精確排列到符合國家標準佈局解析度的單一A4頁面上。 </p>\n      <p>此外，您還可以自訂重疊的半透明防偽浮水印（例如「僅限入職」），以防止未經授權的文件重複使用。它甚至具有 3D 發光雷射掃描影印機掃描器門視覺效果，可提供優質回饋。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳ID文件",
    "description": "上傳身分證或護照的正面和背面照片/掃描件（最多 2 個文件）。"
  },
  {
    "step": 2,
    "title": "配置安全水印",
    "description": "輸入自訂文字覆蓋以限制未經授權的文件複製。"
  },
  {
    "step": 3,
    "title": "撰寫並下載",
    "description": "按一下「執行」產生單頁可列印的 A4 PDF。"
  }
],
    useCases: [
  {
    "title": "人力資源入職提交",
    "description": "快速對齊員工 ID 副本並套用保護浮水印。",
    "icon": "user"
  },
  {
    "title": "政府與銀行服務",
    "description": "準備符合實體存檔要求的標準化 ID 列印件。",
    "icon": "landmark"
  },
  {
    "title": "旅行備份",
    "description": "將護照頁和簽證詳細資料整理到統一的 A4 紙上。",
    "icon": "plane"
  }
],
    faq: [
  {
    "question": "浮水印會遮擋身分文字詳細資料嗎？",
    "answer": "否。水印以精心調整的 15% 不透明度渲染，以阻止偽造，而不會犧牲文字或照片欄位的易讀性。"
  },
  {
    "question": "複合卡尺寸準確嗎？",
    "answer": "是的。它以 85.6mm × 54mm 的標準實體尺寸呈現 ID 卡，並在 A4 頁面上完美縮放。"
  },
  {
    "question": "支援駕照嗎？",
    "answer": "是的，它非常適合任何基於卡片的身份掃描。"
  }
],
  },

  'annotation-exporter': {
    title: '批註與高亮導出',
    metaDescription: "將 PDF 註解、註解、反白和下劃線匯出為 Markdown 或 JSON。整理註釋以供學習、回顧和研究。",
    keywords: ["pdf 導出批註","文獻閱讀筆記","提取高亮","markdown 導出"],
    description: "<p>智慧註解匯出器是一個功能強大的工作區，可釋放 PDF 註解的全部價值。 </p>\n      <p>在進行文獻綜述或閱讀大量電子書時，我們大量使用突出顯示和便條。此工具反序列化低階 PDF <code>/Annots</code> 字典並提取所有反白、註解、底線和手繪墨跡標記。 </p>\n      <p>它會自動將註釋與其各自的大綱標題對齊，產生帶有頁面引用錨點的結構化 Markdown 或 JSON 筆記本。觀看您的亮點精美地漂浮在磨砂玻璃筆記本面板中。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "匯入附註解的 PDF",
    "description": "上傳任何包含下劃線、反白或評論的 PDF 文章或書籍。"
  },
  {
    "step": 2,
    "title": "配置過濾器和格式",
    "description": "選擇要擷取的註解類型，然後選擇 Markdown 或 JSON。"
  },
  {
    "step": 3,
    "title": "提取筆記本",
    "description": "按一下「執行」以解析評論流並組合您的大綱摘要。"
  }
],
    useCases: [
  {
    "title": "科學文獻綜合",
    "description": "將多篇論文的閱讀筆記擷取到 Markdown 範本中，並立即撰寫精彩評論。",
    "icon": "graduation-cap"
  },
  {
    "title": "學習日記整理",
    "description": "將教科書中的美好見解和個人言論收集到 Obsidian 資料庫中。",
    "icon": "book"
  },
  {
    "title": "文件協同審核",
    "description": "收集不同團隊成員的審查更正並建立可操作的任務清單。",
    "icon": "users"
  }
],
    faq: [
  {
    "question": "可以提取平板手繪墨跡嗎？",
    "answer": "是的。只要將手繪標記儲存為標準 PDF Ink 註釋，該工具就可以完美地隔離和建立其頁面位置。"
  },
  {
    "question": "為什麼一些突出顯示的摘錄是空的？",
    "answer": "如果 PDF 是缺乏底層文字的不可搜尋影像掃描，則反白僅儲存座標。首先對 PDF 執行 OCR，然後提取註釋。"
  },
  {
    "question": "Markdown 連結會跳回 PDF 嗎？",
    "answer": "匯出的文件列出了精確的頁碼和原始大綱標題，以實現無縫交叉引用。"
  }
],
  },

  'batch-watermark-remover': {
    title: '批量去水印',
    metaDescription: "從 PDF 中刪除相符的文字和圖像浮水印。查看輸出以檢查文件內容是否已保留。",
    keywords: ["pdf 去水印","批量刪除浮水印","內容流優化","pdf 清潔"],
    description: "<p>批量水印去除器是一款最先進的 PDF 清理工具，可以實際清理文件。 </p>\n      <p>通用浮水印去除器通常只是覆蓋白色塊或扭曲文件間距。該工具利用強大的<strong>內容流清除</strong>技術。 </p>\n      <p>它解析每個頁面的低階渲染運算符，識別特定的水印字串命令（例如「機密」、「草稿」）或背景圖像對象，並物理刪除或覆蓋它們。水印完全消失，保留原始格式和向量品質。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳帶有浮水印的文件",
    "description": "提供包含商業標誌或安全標籤的PDF文件。"
  },
  {
    "step": 2,
    "title": "定義目標浮水印",
    "description": "輸入要刪除的確切字串，或切換半透明 XObject 影像清理。"
  },
  {
    "step": 3,
    "title": "進行物理淨化",
    "description": "點選執行，高保真地擦洗內容運算子。"
  }
],
    useCases: [
  {
    "title": "企業資產歸檔",
    "description": "刪除過期的「機密」或「草稿」浮水印以供公眾分發。",
    "icon": "archive"
  },
  {
    "title": "清除背景雜亂",
    "description": "擦掉那些分散讀者掃描文字注意力的厚重背景圖片。",
    "icon": "eye"
  },
  {
    "title": "文檔重用",
    "description": "清理舊的頁腳品牌元素，輕鬆套用新的企業模板。",
    "icon": "copy"
  }
],
    faq: [
  {
    "question": "清除的水印還能恢復嗎？",
    "answer": "不，與視覺遮罩不同，我們重寫頁面二進位流以擦除運算符，不留下任何痕跡。"
  },
  {
    "question": "支援複雜漸層嗎？",
    "answer": "如果浮水印儲存為單獨的文字節點或圖像 XObject，則該工具可以隔離並物理擦除它。"
  },
  {
    "question": "會修改正常的頁面文字嗎？",
    "answer": "否。清洗引擎僅針對與指定浮水印簽名相符的算子；常規文字保持不變。"
  }
],
  },

  'smart-data-redactor': localizedRedactionContent('zh-TW', 'smart-data-redactor', '敏感訊息脫敏'),

  'bookmarks-auto-generator': {
    title: '自動生成書籤',
    metaDescription: "從標題和文字模式產生 PDF 書籤。為長文件、手冊和報告新增可導航的大綱。",
    keywords: ["pdf 自動書籤","大綱目錄樹","pdf 導航結構","自動大綱"],
    description: "<p>自動書籤產生器為冗長、非結構化的 PDF 文件帶來絕對的清晰度。 </p>\n      <p>瀏覽沒有大綱導航的書籍或小冊子是很痛苦的。此工具解析排版層次結構（例如字體大小和粗細）以及正規表示式規則（例如「第 1 章」、「第 1.1 節」）以自動推斷標題。 </p>\n      <p>然後，它會編譯這些標題並將其直接插入 PDF <code>/Outline</code> 字典中。然後，任何標準檢視器都會顯示結構精美的多層導航側邊欄，並由互動式 3D 輪廓樹預覽支援。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "提供非結構化PDF",
    "description": "上傳大型手冊、學術論文或缺少目錄側邊欄的電子書。"
  },
  {
    "step": 2,
    "title": "調整標題規則",
    "description": "配置指定最小字體大小閾值和匹配規則的策略。"
  },
  {
    "step": 3,
    "title": "建造並注入",
    "description": "點選執行渲染大綱節點並實體寫入大綱書籤。"
  }
],
    useCases: [
  {
    "title": "技術手冊整理",
    "description": "自動編譯標準指南的多層章節，節省手動索引的時間。",
    "icon": "tool"
  },
  {
    "title": "論文準備",
    "description": "注入符合精確學術提交標準的乾淨嵌套書籤。",
    "icon": "graduation-cap"
  },
  {
    "title": "電子書導航優化",
    "description": "將掃描的文本出版物建構成平板電腦或行動閱讀器可讀的章節。",
    "icon": "tablet"
  }
],
    faq: [
  {
    "question": "可以匹配自訂章節格式嗎？",
    "answer": "是的。您可以在側邊欄面板中新增自訂正規表示式模式（例如「^Part\\s+\\w+」）以定位獨特的佈局。"
  },
  {
    "question": "這會影響頁面視覺呈現嗎？",
    "answer": "否。此工具僅新增內部結構書籤目錄。頁面的文字和視覺資源保持不變。"
  },
  {
    "question": "支援多少級書籤？",
    "answer": "此工具支援深度嵌套的書籤結構，允許章、節和小節佈局。"
  }
],
  },

  'batch-barcode-injector': {
    title: '批量注入條碼',
    metaDescription: "批次新增QR碼或Code 128條碼到PDF頁面。調整文件追蹤、標籤和列印工作流程的位置。",
    keywords: ["pdf 注入條碼","二維碼合埋","批次二維碼","條形碼嵌入"],
    description: "<p>批次條碼精確注入器將數位資產追蹤與實體文件索引連接起來。 </p>\n      <p>在倉儲、合約審查或物流中，我們經常需要在發票或設備卡上標記唯一的條碼。這個工具使它變得異常簡單。 </p>\n      <p>產生高度可讀的 QR 碼或 Code128 條碼，並使用我們帶有綠色雷射導軌的華麗對齊工作區來定位它們。放置時會觸發乾淨的掃描音訊蜂鳴聲，提供非常優質的回饋。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳文件",
    "description": "拖放代表協議或出貨清單的單頁或多頁 PDF。"
  },
  {
    "step": 2,
    "title": "位置條碼座標",
    "description": "設定代碼類型、值，並拖曳放置框指定座標。"
  },
  {
    "step": 3,
    "title": "郵票及下載",
    "description": "點選執行將程式碼圖層渲染到目標頁面索引上。"
  }
],
    useCases: [
  {
    "title": "合約驗證追蹤",
    "description": "在合約標題上新增顯示防偽詳細資訊的唯一二維碼。",
    "icon": "file-check"
  },
  {
    "title": "出貨清單編碼",
    "description": "將 Code128 條碼放置在目標點，以便快速進行倉庫掃描槍驗證。",
    "icon": "truck"
  },
  {
    "title": "資產登記梳理",
    "description": "在實體設備表上新增顯示維護規格的庫存二維碼。",
    "icon": "archive"
  }
],
    faq: [
  {
    "question": "產生的條碼是否具有良好的可掃描性？",
    "answer": "是的。我們嵌入了無損高解析度 PNG 表示，即使以非常小的尺寸列印也能保持清晰。"
  },
  {
    "question": "我可以在每個頁面上註入唯一的值嗎？",
    "answer": "目前，批量運行將相同的配置代碼應用於所有選定的頁面。計劃在未來的更新中進行多值 Excel 匯入。"
  },
  {
    "question": "`pt` 座標代表什麼？",
    "answer": "`pt`（點）是標準 PDF 物理單位（72 pt = 1 英吋）。 A4 頁面表示為 595 × 842 pt。"
  }
],
  },

  'signature-ink-optimizer': {
    title: '簽名印章提取',
    metaDescription: "從照片中提取簽名或印章並刪除其背景。下載透明 PNG 以在文件中使用。",
    keywords: ["簽名提取","印章透明化","筆跡純化","印章漂白"],
    description: "<p>Signature & Stamp Chroma Ink Optimizer 可用作專業的高保真墨水淨化器。 </p>\n      <p>手機捕獲的簽名或公司印章通常會出現紙色發黃、陰影不均勻和頁面褶皺的問題。將它們直接貼到合約 PDF 上看起來很業餘。 </p>\n      <p>工具根據亮度和色彩空間分離 Alpha 通道。它完全漂白紙張背景，同時銳化紅色印章（色度墨水）和黑色筆跡。結果是帶有真實墨水紋理的優質透明 PNG 印章。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳印章照片",
    "description": "提供手機拍攝的簽名或印章照片。"
  },
  {
    "step": 2,
    "title": "調整清潔滑塊",
    "description": "移動對比度和亮度滑桿以即時隔離背景噪音。"
  },
  {
    "step": 3,
    "title": "下載乾淨的簽名",
    "description": "匯出為透明 PNG，準備蓋章到正式文件協議上。"
  }
],
    useCases: [
  {
    "title": "專業電子簽名準備",
    "description": "將灰色簽名照片轉換為漂亮的透明圖層以簽署協議。",
    "icon": "file-signature"
  },
  {
    "title": "企業印章消毒",
    "description": "透過丟棄紙纖維噪音來清潔實體郵票掃描，準備清晰的透明郵票密封件。",
    "icon": "stamp"
  },
  {
    "title": "繪製線稿擷取",
    "description": "從繪圖素描本中分離出黑色筆劃，以實現輕鬆的 Photoshop 著色工作流程。",
    "icon": "edit"
  }
],
    faq: [
  {
    "question": "自適應 Alpha 提取與普通摳像有何不同？",
    "answer": "標準色度鍵控通常會使簽章筆畫細節看起來塊狀和像素化。我們的演算法僅隔離白色/黃色背景雜訊並平滑墨水邊界。"
  },
  {
    "question": "支援哪些影像格式？",
    "answer": "我們支援 JPG、JPEG 和 PNG。為了獲得最佳效果，請在明亮、均勻的燈光下拍攝您的標誌性照片。"
  },
  {
    "question": "筆跡細節會修改嗎？",
    "answer": "否。像素濾波作用於原始座標，銳化對比度，同時保持真實的筆畫紋理。"
  }
],
  },

  'dead-link-debugger': {
    title: '失效鏈接修復',
    metaDescription: "檢查 PDF 超連結並替換損壞或過時的目的地。掃描連結註解並儲存更新的文件。",
    keywords: ["pdf 死鏈診斷","修改鏈接","pdf 鏈接修復","網頁鏈接調試"],
    description: "<p>死連結偵錯器是深層結構編輯器，可保證已發佈文件中的連結互動品質。 </p>\n      <p>手冊、白皮書或指南中的損壞網址 (404/500) 會降低品牌權威。該工具可讓您無縫管理超連結資料庫。 </p>\n      <p>它解析每個頁面上的低階 <code>/Link</code> 字典，探測它們，並在互動網格中顯示連結狀態（紅色表示死鏈接，橙色表示重定向）。只需輸入更新的重定向 URL，該工具就會將新目標直接寫回 PDF 二進位流中。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "提供目標文件",
    "description": "上傳包含調試連結的 PDF 手冊或目錄。"
  },
  {
    "step": 2,
    "title": "掃描更新",
    "description": "讓偵錯器提取所有 URL 實體。輸入損壞項目的新重定向 URL。"
  },
  {
    "step": 3,
    "title": "儲存重定向更新",
    "description": "按一下執行以重寫 /URI 操作並下載修正後的 PDF。"
  }
],
    useCases: [
  {
    "title": "傳單損壞連結修補程序",
    "description": "立即修正已發布傳單上的錯誤網址，無需重新開啟原始設計編輯器。",
    "icon": "refresh-cw"
  },
  {
    "title": "參考書目連結驗證",
    "description": "驗證報告中的學術參考書目鏈接，更新參考文獻以保持權威。",
    "icon": "book"
  },
  {
    "title": "企業品牌重塑更新",
    "description": "公司網域變更時，大量更新公司 PDF 中的舊 URL。",
    "icon": "globe"
  }
],
    faq: [
  {
    "question": "為什麼沒有線上全面檢查連結可及性？",
    "answer": "Web 瀏覽器強制執行嚴格的 CORS 策略，阻止直接多來源連結檢查。我們的工具清楚地列出了鏈接，並允許您手動熱修復它們。"
  },
  {
    "question": "這會修改頁面上的視覺文字表示嗎？",
    "answer": "否。它僅更改底層的“/URI”導航操作。視覺連結文字保持不變。"
  },
  {
    "question": "支持修改內頁書籤嗎？",
    "answer": "此工具處理外部「/URI」超連結。對於內部佈局導航，請使用我們的互動式目錄工具。"
  }
],
  },

  'interactive-toc-generator': {
    title: '生成互動目錄',
    metaDescription: "在 PDF 中新增可點選的目錄。建立章節連結和返回導航以更輕鬆地瀏覽文件。",
    keywords: ["pdf 互動目錄","自動目錄頁","頁面錨定","雙向導航"],
    description: "<p>互動式 TOC 產生器為大量 PDF 引入了革命性的導航體驗。 </p>\n      <p>翻閱非結構化文件中的數百頁來尋找目標章節是令人沮喪的。該工具引入了<strong>雙向 TOC 編譯</strong>。 </p>\n      <p>它會掃描標題並產生一個受摺紙啟發的高級目錄頁面，插入到封面之後。除了為每個索引行建立可點擊的/GoTo 連結之外，它還在每個目標章節頁面的角落注入了一個微小、優雅的「TOC ↩」懸停錨點。讀者可以立即來回跳轉，享受類似網路的導航。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "提供PDF文檔",
    "description": "上傳需要互動式目錄的報告、電子書或提案。"
  },
  {
    "step": 2,
    "title": "設定目錄標題和索引",
    "description": "自訂主標題並選擇頁面索引以插入目錄頁。"
  },
  {
    "step": 3,
    "title": "編織錨並保存",
    "description": "點選執行編譯頁面並撰寫雙連結導覽。"
  }
],
    useCases: [
  {
    "title": "年度公司報告打磨",
    "description": "在封面後插入漂亮的索引頁，以允許股東在財務圖表之間跳轉。",
    "icon": "file-bar"
  },
  {
    "title": "論文索引",
    "description": "快速編譯符合大學格式規則的標準索引。",
    "icon": "bookmark"
  },
  {
    "title": "操作手冊導航",
    "description": "幫助手冊讀者快速從故障排除表跳回主目錄。",
    "icon": "check-circle"
  }
],
    faq: [
  {
    "question": "雙向錨點如何運作？",
    "answer": "我們在針對各個頁面的目錄頁面上建立標準連結註解；然後我們在所有目標章節表上嵌入返回目錄頁面的連結。"
  },
  {
    "question": "插入目錄頁會破壞現有頁碼嗎？",
    "answer": "否。編譯器會考慮新插入的 TOC 頁的偏移量，確保所有目標位置對齊。"
  },
  {
    "question": "TOC 頁實體列印時有效嗎？",
    "answer": "是的。生成的目錄列出了乾淨的實體頁碼，以指導紙質讀者，同時在螢幕上啟用可點擊的連結。"
  }
],
  },

  'pdf-deskew-aligner': {
    title: '掃描件自動糾偏',
    metaDescription: "在本機偵測傾斜的文字行，並將校正後的內容適配到原始頁面內。",
    keywords: ["pdf 傾斜校正","掃描糾偏","水平對齊","自動糾偏"],
    description: "\n      <p>在本機偵測傾斜的文字行，並將校正後的內容適配到原始頁面內。</p>\n      <p>空白頁、不確定的掃描頁以及有註解的頁面保持不變。</p>\n      <p>較高解析度需要更多時間。非常大的頁面會使用較低的分析解析度。</p>\n    ",
    howToUse: [
  {
    "step": 1,
    "title": "提供傾斜PDF",
    "description": "上傳包含旋轉或對齊不良的掃描文件的任何 PDF 頁。"
  },
  {
    "step": 2,
    "title": "掃描對齊設定",
    "description": "分析解析度 · 最大校正角度"
  },
  {
    "step": 3,
    "title": "分析並矯正",
    "description": "下載·對齊 PDF"
  }
],
    useCases: [
  {
    "title": "收據及合約歸檔",
    "description": "整理快速手持行動合約掃描件，然後儲存為正式的數位 PDF 檔案。",
    "icon": "file-text"
  },
  {
    "title": "學術書籍數位化",
    "description": "清理縮微膠卷書籍掃描件中文字行超出水平邊距的地方。",
    "icon": "book"
  },
  {
    "title": "學生作業評分",
    "description": "修正學生手機拍攝的作業快照，放鬆批改老師的眼睛。",
    "icon": "edit-3"
  }
],
    faq: [
  {
    "question": "如何偵測文件傾斜？",
    "answer": "局部偵測傾斜的墨線並將校正後的內容放入原始頁面中。"
  },
  {
    "question": "此過程會裁切掉頁面邊緣嗎？",
    "answer": "局部偵測傾斜的墨線並將校正後的內容放入原始頁面中。"
  },
  {
    "question": "支持圖表文檔嗎？",
    "answer": "空白頁、不確定的掃描件和帶有註釋的頁面保持不變。"
  }
],
  },

  'pdf-two-column-reflower': {
    title: '雙欄論文重排',
    metaDescription: "將兩欄 PDF 論文重排為單欄，以便於移動閱讀。調整學術文件以適應較小的螢幕。",
    keywords: ["雙欄重排","學術論文單欄","CropBox 裁剪","pdf 視口分裂"],
    description: "<p>學術兩欄 Reflower 解決了數位研究最重要的痛點：在標準行動螢幕上閱讀論文。 </p>\n      <p>雙欄佈局（IEEE、ACM、Nature 和主要報告使用）專為 A4 紙設計。在手機螢幕或 Kindle 裝置上導航它們需要不斷縮放、向右拖曳、向下滾動和平移。它完全破壞了閱讀理解能力。 </p>\n      <p>我們的處理器實現了<strong>智慧段落回流和垂直分區屏障掃描</strong>。它分析字元座標以映射雙列裝訂線，劃分佈局，並垂直編織分段（先左列，然後右列）。圖形、公式和標題無縫地重新排列成單列、可流動的垂直滾動 PDF。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳雙欄PDF",
    "description": "提供IEEE/ACM期刊報告或多欄PDF表。"
  },
  {
    "step": 2,
    "title": "檢查隔間天溝",
    "description": "驗證紅色垂直分區切片導軌。調整邊距以防止元素重疊。"
  },
  {
    "step": 3,
    "title": "回流並保存",
    "description": "按一下「執行」將頁面編譯成可流動的佈局並立即下載。"
  }
],
    useCases: [
  {
    "title": "電子閱讀器圖書導入",
    "description": "將密集的雙欄文章轉換為與 Kindle 和 Onyx 螢幕相符的舒適單欄文件。",
    "icon": "tablet"
  },
  {
    "title": "地鐵電話閱讀",
    "description": "在旅途中透過單手垂直滑動手勢舒適地閱讀研究文獻。",
    "icon": "smartphone"
  },
  {
    "title": "檔案期刊格式",
    "description": "將舊的窄欄報紙現代化為可讀的單欄網路格式。",
    "icon": "book-open"
  }
],
    faq: [
  {
    "question": "如何處理廣泛的圖表和方程式？",
    "answer": "我們的引擎採用「跨度元素檢測」。當方程式或圖表超過正常列寬時，它會被隔離為全寬項目，保持原始比例而不進行裁剪。"
  },
  {
    "question": "這會修改向量文字解析度嗎？",
    "answer": "完全沒有。我們在物件樹層級重寫 PDF 文字物件變換矩陣而不是光柵化，這意味著文字仍然是 100% 向量且完全可選。"
  },
  {
    "question": "這適用於掃描的影像文件嗎？",
    "answer": "對於基於平面圖像的 PDF，我們強烈建議在執行回流流程之前先執行我們的 OCR 工具。"
  }
],
  },

  'pdf-page-resizer-uniform': {
    title: 'PDF 尺寸統一',
    metaDescription: "將混合 PDF 頁面調整為統一尺寸。使用比例縮放和居中邊距標準化 A4、A3 和 Letter 頁面。",
    keywords: ["pdf 頁面縮放","頁面尺寸統一","a4 歸一","pdf 重塑尺寸"],
    description: "<p>多格式 PDF Resizer 是雜亂、不符的公司文件的終極標準化工具。 </p>\n      <p>合併發票、合約和補充圖表通常會產生包含大量 A3 分類帳頁、標準 A4 協議和信紙大小的信封的 PDF。翻閱它們非常分散注意力，並且將它們發送到實體辦公室印表機通常會因尺寸不匹配而導致卡紙錯誤。 </p>\n      <p>此工具會重寫每個頁面上的低階 <code>/MediaBox</code> 和 <code>/CropBox</code> 網格。它會對應現有的寬度和高度，按比例縮放原始頁面以匹配目標預設（例如標準 A4），並引入優雅、一致的周圍邊距，使整個文件看起來非常精美。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "提供混合尺寸PDF",
    "description": "上傳包含不符、混亂頁面尺寸的合併 PDF 文件。"
  },
  {
    "step": 2,
    "title": "選擇目標預設",
    "description": "選擇目標統一尺寸（例如 A4、Letter、A3）並切換縮放模式。"
  },
  {
    "step": 3,
    "title": "對齊並下載",
    "description": "按一下「執行」觸發 3D 圖紙對齊，下載精美的標準化 PDF。"
  }
],
    useCases: [
  {
    "title": "企業 RFP 提案",
    "description": "實物列印前將資質證明及A4招標單掃描件標準化。",
    "icon": "file-text"
  },
  {
    "title": "金融圖整合",
    "description": "將廣泛的 A3 財務現金流量擴展到整齊的 A4 頁面，以保持列印標準。",
    "icon": "layout"
  },
  {
    "title": "帳面保證金標準化",
    "description": "將略有不同的掃描書頁強制調整為絕對統一的尺寸，以實現舒適的閱讀。",
    "icon": "book"
  }
],
    faq: [
  {
    "question": "這會扭曲我的內容嗎？",
    "answer": "從來沒有。我們支援“包含”（帶有白條的比例縮放）和“覆蓋”（居中裁剪）。預設的包含模式保留縱橫比，防止失真。"
  },
  {
    "question": "現有的表單和註解是否仍可點擊？",
    "answer": "是的。該演算法將縮放因子映射到註釋座標數組、縮放連結框、符號邊界和輸入，以在調整大小後完美對齊。"
  },
  {
    "question": "我可以調整的頁面大小有限制嗎？",
    "answer": "不需要。由於所有操作都使用本機 JavaScript 在客戶端沙箱中本地運行，因此您可以在幾秒鐘內處理包含數百頁的大量 PDF。"
  }
],
  },

  'handwriting-ink-contrast-booster': {
    title: '手寫筆跡增強',
    metaDescription: "增強掃描影像中的手寫和簽名對比。減少紙張背景噪音並使墨水更易於閱讀。",
    keywords: ["筆跡增強","去除背景雜色","手寫優化","合同筆跡增強"],
    description: "<p>手寫墨水對比增強器是數位簽署協議和歷史手稿檔案的救世主。 </p>\n      <p>由於灰色掃描器玻璃反射、黃色紙張色調或褪色墨水，手簽名文件的掃描件通常看起來暗淡無光。重新列印或影印這些文件會導致簽名模糊、難以辨認。傳統的對比工具會使整個背景變暗，從而使佈局惡化。 </p>\n      <p>該工具利用**對比度有限自適應直方圖均衡化 (CLAHE) 和基於色調的顏色分離**。在安全的本地 Canvas 流程中，它將手寫筆畫（黑色和藍色）與背景羊皮紙隔離，完全漂白陰影皺紋，並為褪色的墨水注入深、飽和的對比度，使您的文件看起來非常清晰和乾淨。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "匯入手簽文件",
    "description": "提供包含褪色簽名、手寫日記或草圖的 PDF。"
  },
  {
    "step": 2,
    "title": "配置墨水過濾器",
    "description": "選擇要隔離的顏色設定檔（例如藍色墨水、黑色墨水或兩者）並調整銳利化。"
  },
  {
    "step": 3,
    "title": "銳化並下載",
    "description": "按一下「執行」以使用雷達掃描器效果追蹤顏色並下載純化的 PDF。"
  }
],
    useCases: [
  {
    "title": "已執行的合約修復",
    "description": "修復掃描不良的協議，銳化簽名並將紙張背景漂白為A4純白色。",
    "icon": "file-check"
  },
  {
    "title": "手寫手稿檔案",
    "description": "將書面日記或日記數位化，提取清晰的黑色筆劃，同時擦除與年齡相關的污漬。",
    "icon": "book"
  },
  {
    "title": "歷史帳本修復",
    "description": "恢復陳舊檔案帳本上微弱的墨水細節，挽救寶貴的手寫座標。",
    "icon": "archive"
  }
],
    faq: [
  {
    "question": "這與普通的灰階轉換有何不同？",
    "answer": "灰階將紙張陰影轉換為灰階值。我們的自適應演算法可分離背景亮度並隔離特徵“墨水光譜”，將背景淨化為絕對白色，同時使筆畫邊緣清晰。"
  },
  {
    "question": "我會失去手寫筆畫紋理嗎？",
    "answer": "否。 CLAHE 演算法在子像素層級工作，保留自然的筆觸壓力、墨水褪色和動態線寬。"
  },
  {
    "question": "可以保留紅色企業印章嗎？",
    "answer": "是的。透過啟用“色度墨水保存”，增強器可以使紙張背景變白並使文字變暗，同時保持紅色印章和藍色墨水簽名的明亮顏色。"
  }
],
  },

  'pdf-spine-bookbinder': {
    title: '書脊厚度計算',
    metaDescription: "根據頁數和紙張重量計算書脊寬度。產生帶有書脊折疊線的可列印封面範本。",
    keywords: ["書脊厚度計算","書籍裝訂","封面排版","膠裝書脊"],
    description: "<p>PDF Spine Bookbinder 是設計師、自助出版作者和商業投標團隊的印前救星。 </p>\n      <p>在編寫厚厚的書籍目錄、投標建議或年度目錄時，膠裝（膠裝）需要封面具有精確的書脊座標。如果書脊寬度有哪怕 1 毫米的偏差，裝訂的封面就會變形、移位或起皺。根據紙張重量計算頁數非常複雜且容易出錯。 </p>\n      <p>該工具利用<strong>物理建模的 GSM 紙張厚度庫</strong>。只需輸入您的 PDF 頁數並選擇紙材（例如 80 GSM 膠印紙、100 GSM 光面紙）。引擎可計算精確至微米的書脊寬度，並編譯可列印的超寬封面 PDF，配有標準的前/後翻蓋和精確的折疊標記摺痕。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "設定頁面和庫存類型",
    "description": "輸入文件頁數並選擇目標紙材規格。"
  },
  {
    "step": 2,
    "title": "輸入書脊文字",
    "description": "輸入書名、作者詳細信息，並自訂書脊/封面背景。"
  },
  {
    "step": 3,
    "title": "3D 預覽與匯出",
    "description": "在互動式 3D 活頁夾中旋轉並檢查書籍封面。導出高解析度向量 PDF。"
  }
],
    useCases: [
  {
    "title": "厚厚的投標建議書",
    "description": "設計專業的封面頁，具有精確的書脊摺痕對齊方式，適用於厚標。",
    "icon": "layers"
  },
  {
    "title": "論文精裝裝訂",
    "description": "為大學碩士/博士論文制定完美的書脊佈局寬度。",
    "icon": "award"
  },
  {
    "title": "自出版小說封面",
    "description": "在將文件提交到按需印刷出版服務之前，輕鬆計算書脊寬度。",
    "icon": "book-open"
  }
],
    faq: [
  {
    "question": "GSM紙張厚度計算有多準確？",
    "answer": "高度準確。我們的實體庫符合業界平均值（例如 70 GSM = 0.09mm、80 GSM = 0.10mm、150 GSM 光澤 = 0.125mm）。我們還包括一個“雙面列印”開關，可以自動將計算量減半。"
  },
  {
    "question": "導出的封面是否可以直接列印？",
    "answer": "是的。這些文件是向量完美的 PDF，帶有標準套準標記、色條和書脊指南，完全符合膠印機和數位商業印刷機的要求。"
  },
  {
    "question": "我可以上傳橫跨書脊的背景圖片嗎？",
    "answer": "是的。您可以上傳自訂佈局，我們的合成器將自動包裝並對齊書脊折疊處的圖形。"
  }
],
  },

  'pdf-signature-anchor-helper': {
    title: '簽名位置引導',
    metaDescription: "使用 X/Y 座標將簽名指南放置在 PDF 頁面上。在儲存更新的文件之前預覽他們的位置。",
    keywords: ["簽名引導","簽字錨定","跳轉連結","合同引導圖層"],
    description: "<p>PDF 簽章指南注入器可確保多頁協定的乾淨、無錯誤的簽章工作流程。 </p>\n      <p>在發送多頁保密協議、財務報表或商業租賃時，客戶經常會錯過關鍵的簽名框，從而需要無休止的來回電子郵件循環並延遲業務交易。 </p>\n      <p>我們的工具使用<strong>自然正規表示式語意映射</strong>。它掃描 PDF 字元映射表以查找諸如 <code>簽名：</code>、<code>簽署：</code>、<code>見證人：</code> 或 <code>簽署日期：</code> 等術語。然後，它利用 pdf-lib 注入標準 PDF 互動式連結註釋。當在任何標準閱讀器中打開時，客戶會看到閃爍的霓虹燈邊框箭頭，這些箭頭會立即引導他們到正確的框，從而使簽名萬無一失。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "進口業務合約",
    "description": "上傳需要簽名座標的PDF合約或NDA。"
  },
  {
    "step": 2,
    "title": "X / Y",
    "description": "按一下實際 PDF 預覽或輸入所選頁面的 X 和 Y 座標。"
  },
  {
    "step": 3,
    "title": "流程",
    "description": "處理文件，查看結果並下載 PDF。"
  }
],
    useCases: [
  {
    "title": "公司 NDA 協議",
    "description": "在標誌區塊旁插入清晰、閃爍的指南，以防止入職員工遺漏條款。",
    "icon": "file-text"
  },
  {
    "title": "商業租賃合約",
    "description": "使用自訂顏色標籤引導多個共同簽署者完成多頁房地產文件。",
    "icon": "users"
  },
  {
    "title": "採購訂單簽名",
    "description": "在發票和採購訂單上疊加互動式指針，以加速會計審批循環。",
    "icon": "briefcase"
  }
],
    faq: [
  {
    "question": "當我列印合約時這些指南會出現嗎？",
    "answer": "否。錨點是在標準 PDF「可列印」標誌設定為 false 的情況下注入的。它們在電腦/平板電腦螢幕上顯示精美，但在列印時完全不可見。"
  },
  {
    "question": "客戶端可以輕鬆地在簽章欄位之間跳轉嗎？",
    "answer": "是的。我們編織雙向內部錨。客戶可以點選「簽名精靈」書籤，立即自動跳到下一個空簽名位。"
  },
  {
    "question": "這適用於掃描的影像文件嗎？",
    "answer": "是的。除了尋找文字流之外，我們的空間佈局解析器還根據掃描紙張上的水平規則和邊界框來估計簽章行。"
  }
],
  },

  'pdf-lossless-slicer': {
    title: '大圖紙無損裁剪',
    metaDescription: "使用精確座標裁切 PDF 繪圖、地圖或圖表的區域。在匯出的 PDF 中保留向量內容。",
    keywords: ["pdf 無損裁剪","圖紙切片","CropBox 重塑","pdf 矢量裁剪"],
    description: "<p>PDF 無損繪圖切片器是一款專為建築師、工程師和地圖詳細設計人員打造的高精度手術工具。 </p>\n      <p>當從大量 CAD 工程藍圖或地理地圖 PDF 中提取特定的泵房或晶片核心時，傳統的螢幕截圖會導致像素化、模糊的文字。普通的裁剪工具只是在紙張上放置一個遮罩，這意味著 100MB 的海量文件仍然很大，並且仍然可以提取隱藏的內容。 </p>\n      <p>此工具可在物件樹層級編輯頁面 <code>/MediaBox</code>、<code>/CropBox</code> 和 <code>/BleedBox</code> 矩陣。它在物理上隔離所選區域之外的向量節點，保持目標區域 100% 向量完美（允許無限縮放放大），同時清除冗餘的螢幕外路徑和圖像，將檔案大小縮小 95%！ </p>",
    howToUse: [
  {
    "step": 1,
    "title": "導入大藍圖",
    "description": "上傳富含向量的 CAD、GIS 地圖或高解析度目錄 PDF。"
  },
  {
    "step": 2,
    "title": "裁剪長方形",
    "description": "輸入X、Y、寬度和高度，然後在預覽中檢查所選頁面。"
  },
  {
    "step": 3,
    "title": "流程",
    "description": "處理文件，查看結果並下載 PDF。"
  }
],
    useCases: [
  {
    "title": "CAD 藍圖隔離",
    "description": "從巨大的 100MB 平面圖藍圖中切出「冷卻系統」細節，以便與分包商共享。",
    "icon": "crop"
  },
  {
    "title": "GIS地圖截圖",
    "description": "提取城市街道地圖的無損、向量清晰塊以用於演示幻燈片，而不會損失解析度。",
    "icon": "map"
  },
  {
    "title": "手動描圖",
    "description": "無損分離科學書籍圖，嵌入高品質的學術論文中。",
    "icon": "image"
  }
],
    faq: [
  {
    "question": "這與標準裁切有何不同？",
    "answer": "標準裁切僅調整視覺邊界；隱藏的向量保留在檔案中。我們的切片器修剪重疊的向量路徑並清除越界的 XObject 影像，確保完整的資料隔離和最大程度的檔案壓縮。"
  },
  {
    "question": "文字圖層仍可搜尋嗎？",
    "answer": "是的。落在切片邊界內的任何文字字元都保持完全向量清晰、可搜尋和可選擇。"
  },
  {
    "question": "我可以將切片區域匯出為 SVG 嗎？",
    "answer": "輸出是標準化向量 PDF。您可以將生成的文件傳遞到我們的 PDF 到 SVG 工具，將其轉換為可網絡擴展的向量圖形格式。"
  }
],
  },

  'pdf-scratchpad-canvas': {
    title: '草稿拼接畫布',
    metaDescription: "為 PDF 頁面新增網格、直紋或康乃爾筆記邊距。為學習筆記、計算和考試準備創造額外的寫作空間。",
    keywords: ["pdf 草稿紙","頁面拼接","網格背景","pdf 筆記畫布"],
    description: "<p>PDF Scratchpad Margin Extender 是為學生、研究人員和專業考試考生量身定制的必備學習夥伴。 </p>\n      <p>在數位平板電腦上解答練習考卷、審查投影片或閱讀學術教科書時，頁邊距非常緊張。打開單獨的筆記應用程式會迫使您不斷切換螢幕，從而破壞焦點。新增空白表格可防止您並排查看問題和計算。 </p>\n      <p>此工具重寫低階 PDF 結構中的頁面寬度或高度尺寸，將右側或底部的 <code>/MediaBox</code> 邊距擴展 200~250 pt。然後，它會在新的邊距中覆蓋乾淨的網格線、大學規則的筆記本線或康奈爾大學佈局，為您在每張投影片或問題旁邊提供專用的相鄰草稿板！ </p>",
    howToUse: [
  {
    "step": 1,
    "title": "上傳講座投影片",
    "description": "提供 PDF 教科書、投影片或研究論文。"
  },
  {
    "step": 2,
    "title": "選擇邊距和網格樣式",
    "description": "選擇邊距擴展方向（例如平板電腦的右側）並選擇網格模板。"
  },
  {
    "step": 3,
    "title": "縫合畫布並下載",
    "description": "按一下「執行」以產生具有漂亮草稿網格的擴充頁面。"
  }
],
    useCases: [
  {
    "title": "STEM 考試準備",
    "description": "在數學和物理考試問題旁縫合網格邊距，解決問題旁的推導問題。",
    "icon": "edit-3"
  },
  {
    "title": "語言閱讀分析",
    "description": "在外文論文旁邊加入規則筆記本邊距，用於詞彙分析和段落翻譯。",
    "icon": "book"
  },
  {
    "title": "架構藍圖審核",
    "description": "圖紙一側留有空白，用於工程計算和客戶評審意見。",
    "icon": "columns"
  }
],
    faq: [
  {
    "question": "這會壓扁我的原始 PDF 文字嗎？",
    "answer": "完全沒有。該演算法向外擴展紙張尺寸。原始內容保留其佈局、字體和解析度；我們只需拉伸邊框上的空白並在其上繪製網格即可。"
  },
  {
    "question": "標準手寫筆可以在便條本上寫字嗎？",
    "answer": "是的。新的 PDF 頁面是本機編譯的。 Goodnotes、Notability、Xodo 和 Acrobat 等流行的平板電腦筆記應用程式可以直接在新的網格空間中書寫、突出顯示和塗鴉。"
  },
  {
    "question": "網格線是否黑暗且分散注意力？",
    "answer": "我們精心設計了三種微妙、護眼的顏色（柔和的藍灰色、暖棕色和亮綠色）。線條細而柔和，可以作為引導，而不會分散您對原始頁面內容的注意力。"
  }
],
  },

  'photo-tiling-prepress': {
    title: '證件照自助拼版',
    metaDescription: "在標準相片紙上裁剪並排列身分證或護照照片。新增列印裁剪標記以幫助切割成品紙張。",
    keywords: ["證件照排版","相紙貼版","印前拼版","證件照拼版"],
    description: "<p>印前照片平鋪工具是一款經濟高效、高精度的佈局編譯器，專為個人登記卡和攝影工作室打造。 </p>\n      <p>在家中列印護照照片、身分證照片或駕駛執照通常會導致實體尺寸不正確（通常列印太大或太小）、浪費照片紙以及對齊不均勻。去專業印刷店製作佈置非常耗時。 </p>\n      <p>我們的工具整合了<strong>精密印前矩陣引擎</strong>。它接受肖像照片或身份證掃描件，將其裁剪為標準尺寸（例如 1 英寸或 2 英寸護照規格），計算標準相紙（例如 5 英寸或 6 英寸紙張）的最佳平鋪數量，並註入清晰的微像素裁剪線以方便物理切割，生成完美的可打印 PDF。 </p>",
    howToUse: [
  {
    "step": 1,
    "title": "進口護照照片",
    "description": "上傳相機人像抓拍或雙面身分證圖片。"
  },
  {
    "step": 2,
    "title": "配置紙張和佈局",
    "description": "選擇目標列印紙張尺寸（例如 6 吋）並選擇網格佈局（例如 8 份 1 吋照片）。"
  },
  {
    "step": 3,
    "title": "平鋪與導出",
    "description": "檢查網格上的照片圖塊，並匯出高 DPI 可列印 PDF。"
  }
],
    useCases: [
  {
    "title": "自助護照照片",
    "description": "將手機拍攝的護照肖像排列在一張 6 英寸相紙網格上，然後打印 8 份，只需標準工作室成本的一小部分。",
    "icon": "user"
  },
  {
    "title": "身分證雙面影印",
    "description": "將國民身分證的正面和背面掃描件整齊地格式化在標準 Letter/A4 紙張上，以供正式提交。",
    "icon": "file-text"
  },
  {
    "title": "批次照片縮圖",
    "description": "將多個家庭記憶或設計快照平鋪到網格紙上，以高效列印縮圖聯繫表。",
    "icon": "grid"
  }
],
    faq: [
  {
    "question": "印刷尺寸是否符合官方 1 吋或 2 吋規格？",
    "answer": "是的。網格引擎使用標準 PDF 點（72 點 = 1 吋）進行測量，將 1 吋照片精確渲染為 25x35 毫米，將 2 吋照片渲染為 35x49 毫米。請確保在印表機設定中以「實際尺寸/100% 比例」列印。"
  },
  {
    "question": "我可以將 1 英吋和 2 英吋的照片合併在一張紙上嗎？",
    "answer": "是的。我們提供精心策劃的混合版面預設（例如「4 份 1」+ 4 份 2」），讓您盡量利用相片紙空間。"
  },
  {
    "question": "模板是否包含邊框出血？",
    "answer": "是的。印前佈局在紙張邊框上保留標準的 4 毫米列印安全邊距，防止實體印表機滾筒裁切照片。"
  }
],
  },

  'redact-pdf': localizedRedactionContent('zh-TW', 'redact-pdf', 'PDF塗黑與馬賽克脫敏'),
};

