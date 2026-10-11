import type { ToolContent } from '@/types/tool';
import type { Locale } from '@/lib/i18n/config';
import { toolContentEn } from './en';

const descriptions: Record<Exclude<Locale, 'en'>, { meta: string; paragraphs: string[] }> = {
  "ja": {
    "meta": "選択したPDFの文字、画像の画素、図形を端末内で永久に削除します。",
    "paragraphs": [
      "領域または文字の一致箇所を選択します。ローカルエンジンは選択した文字、重なる画像の画素、接触する図形を永久に削除し、単色で塗りつぶします。残りの文字は、全ページを画像化しない限り選択できます。ぼかしやモザイクは使用しません。",
      "出力から旧版、未使用オブジェクト、メタデータ、添付ファイル、しおり、注釈、リンク、フォームを削除し、電子署名は無効になります。ブラシは周囲の内容も削除する場合があります。検索は抽出可能な文字のみを対象とし、OCRや行をまたぐ検索は行いません。スキャン文書は手動で領域を選択してください。未選択のコピーは残る場合があります。共有前にダウンロードしたPDFの全ページを確認してください。"
    ]
  },
  "ko": {
    "meta": "선택한 PDF 텍스트, 이미지 픽셀과 그래픽을 기기에서 영구적으로 삭제합니다.",
    "paragraphs": [
      "영역 또는 검색된 텍스트를 선택하세요. 로컬 엔진은 선택한 텍스트, 겹치는 이미지 픽셀과 닿는 그래픽을 영구적으로 삭제한 뒤 단색으로 채웁니다. 전체 페이지를 이미지로 변환하지 않으면 나머지 텍스트는 계속 선택할 수 있습니다. 흐림과 모자이크는 사용하지 않습니다.",
      "출력에서는 이전 버전, 사용하지 않는 객체, 메타데이터, 첨부 파일, 책갈피, 주석, 링크와 양식이 제거되며 디지털 서명이 무효화됩니다. 브러시는 주변 내용도 삭제할 수 있습니다. 검색은 추출 가능한 텍스트만 찾으며 OCR이나 여러 줄에 걸친 검색을 수행하지 않습니다. 스캔 문서는 영역을 직접 선택하세요. 선택하지 않은 사본은 남을 수 있습니다. 공유하기 전에 다운로드한 PDF의 모든 페이지를 확인하세요."
    ]
  },
  "es": {
    "meta": "Elimina de forma permanente texto, píxeles y gráficos seleccionados del PDF en tu dispositivo.",
    "paragraphs": [
      "Selecciona áreas o coincidencias de texto. El motor local elimina permanentemente el texto seleccionado, los píxeles de imagen superpuestos y los gráficos afectados antes de añadir un relleno sólido. El resto del texto sigue siendo seleccionable salvo que rasterices todas las páginas. No se usa desenfoque ni mosaico.",
      "El archivo nuevo elimina revisiones anteriores, objetos sin usar, metadatos, adjuntos, marcadores, anotaciones, enlaces y formularios; las firmas digitales dejan de ser válidas. El pincel puede borrar contenido cercano. La búsqueda solo encuentra texto extraíble, sin OCR ni coincidencias entre líneas; selecciona áreas manualmente en documentos escaneados. Pueden quedar copias no seleccionadas. Revisa todas las páginas del PDF descargado antes de compartirlo."
    ]
  },
  "fr": {
    "meta": "Supprimez définitivement le texte, les pixels et les graphiques sélectionnés du PDF sur votre appareil.",
    "paragraphs": [
      "Sélectionnez des zones ou des correspondances de texte. Le moteur local supprime définitivement le texte sélectionné, les pixels qui se chevauchent et les graphiques touchés, puis ajoute un remplissage uni. Le reste du texte reste sélectionnable sauf si toutes les pages sont rastérisées. Le flou et la mosaïque ne sont pas utilisés.",
      "Le nouveau fichier supprime les anciennes révisions, les objets inutilisés, les métadonnées, les pièces jointes, les signets, les annotations, les liens et les formulaires ; les signatures numériques deviennent invalides. Le pinceau peut supprimer du contenu voisin. La recherche trouve uniquement le texte extractible, sans OCR ni correspondances entre lignes ; sélectionnez manuellement les zones des documents numérisés. Des copies non sélectionnées peuvent subsister. Vérifiez chaque page du PDF téléchargé avant de le partager."
    ]
  },
  "de": {
    "meta": "Entfernen Sie ausgewählten PDF-Text, Bildpixel und Grafiken dauerhaft auf Ihrem Gerät.",
    "paragraphs": [
      "Wählen Sie Bereiche oder Texttreffer aus. Die lokale Engine entfernt ausgewählten Text, überlappende Bildpixel und berührte Grafiken dauerhaft und fügt danach eine einfarbige Füllung hinzu. Der übrige Text bleibt auswählbar, sofern nicht alle Seiten gerastert werden. Unschärfe und Mosaik werden nicht verwendet.",
      "Die neue Datei entfernt frühere Revisionen, ungenutzte Objekte, Metadaten, Anhänge, Lesezeichen, Anmerkungen, Links und Formulare; digitale Signaturen werden ungültig. Der Pinsel kann benachbarte Inhalte entfernen. Die Suche findet nur extrahierbaren Text, ohne OCR oder zeilenübergreifende Treffer; markieren Sie Bereiche in Scans manuell. Nicht ausgewählte Kopien können erhalten bleiben. Prüfen Sie jede Seite der heruntergeladenen PDF, bevor Sie sie teilen."
    ]
  },
  "zh": {
    "meta": "在设备上永久移除所选 PDF 文字、图像像素和图形。",
    "paragraphs": [
      "选择区域或文字匹配项。本地引擎会永久移除所选文字、重叠的图像像素及相交的图形，再填充纯色。除非将所有页面栅格化，其他文字仍可选取。模糊和马赛克不用于永久删改。",
      "新文件会清除旧版本、未使用对象、元数据、附件、书签、批注、链接和表单，并使数字签名失效。画笔可能移除附近内容。搜索仅查找可提取的文字，不执行 OCR，也不跨行匹配；扫描件应手动选择区域。未选中的副本可能保留。分享前请检查下载文件的每一页。"
    ]
  },
  "zh-TW": {
    "meta": "在裝置上永久移除選取的 PDF 文字、影像像素和圖形。",
    "paragraphs": [
      "選取範圍或文字符合項目。本機引擎會永久移除所選文字、重疊的影像像素及相交的圖形，再填入純色。除非將所有頁面點陣化，其他文字仍可選取。模糊和馬賽克不適用於永久遮蔽。",
      "新檔案會清除舊版本、未使用物件、中繼資料、附件、書籤、註解、連結和表單，並使數位簽章失效。畫筆可能移除附近內容。搜尋僅尋找可擷取的文字，不執行 OCR，也不跨行比對；掃描文件應手動選取範圍。未選取的副本可能保留。分享前請檢查下載檔案的每一頁。"
    ]
  },
  "pt": {
    "meta": "Remova permanentemente texto, pixels e gráficos selecionados do PDF no seu dispositivo.",
    "paragraphs": [
      "Selecione áreas ou correspondências de texto. O mecanismo local remove permanentemente o texto selecionado, os pixels de imagem sobrepostos e os gráficos tocados, depois adiciona um preenchimento sólido. O texto restante continua selecionável, a menos que todas as páginas sejam rasterizadas. Desfoque e mosaico não são usados.",
      "O novo arquivo remove revisões anteriores, objetos não utilizados, metadados, anexos, marcadores, anotações, links e formulários; assinaturas digitais tornam-se inválidas. O pincel pode remover conteúdo próximo. A busca encontra apenas texto extraível, sem OCR ou correspondências entre linhas; selecione áreas manualmente em documentos digitalizados. Cópias não selecionadas podem permanecer. Revise todas as páginas do PDF baixado antes de compartilhá-lo."
    ]
  },
  "ar": {
    "meta": "أزل النص وبكسلات الصور والرسومات المحددة من PDF نهائيًا على جهازك.",
    "paragraphs": [
      "حدد مناطق أو نتائج بحث نصية. يزيل المحرك المحلي النص المحدد وبكسلات الصور المتداخلة والرسومات التي تمس المنطقة نهائيًا، ثم يضيف تعبئة بلون ثابت. يظل النص الآخر قابلاً للتحديد ما لم تحول جميع الصفحات إلى صور. لا يُستخدم التمويه أو الفسيفساء للحذف الدائم.",
      "يزيل الملف الجديد النسخ السابقة والكائنات غير المستخدمة والبيانات الوصفية والمرفقات والإشارات المرجعية والتعليقات والروابط والنماذج، وتصبح التوقيعات الرقمية غير صالحة. قد تزيل الفرشاة محتوى مجاورًا. يبحث النظام في النص القابل للاستخراج فقط، دون OCR أو مطابقة عبر أسطر منفصلة؛ حدد مناطق المستندات الممسوحة يدويًا. قد تبقى نسخ لم تُحدد. راجع كل صفحة من ملف PDF الذي تم تنزيله قبل مشاركته."
    ]
  },
  "it": {
    "meta": "Rimuovi definitivamente testo, pixel e grafica selezionati dal PDF sul tuo dispositivo.",
    "paragraphs": [
      "Seleziona aree o corrispondenze di testo. Il motore locale rimuove definitivamente il testo selezionato, i pixel delle immagini sovrapposti e la grafica toccata, poi aggiunge un riempimento uniforme. Il resto del testo rimane selezionabile, salvo rasterizzazione di tutte le pagine. Sfocatura e mosaico non vengono usati.",
      "Il nuovo file elimina revisioni precedenti, oggetti inutilizzati, metadati, allegati, segnalibri, annotazioni, collegamenti e moduli; le firme digitali diventano non valide. Il pennello può eliminare contenuti vicini. La ricerca trova solo testo estraibile, senza OCR né corrispondenze tra righe; seleziona manualmente le aree nei documenti scansionati. Possono rimanere copie non selezionate. Controlla ogni pagina del PDF scaricato prima di condividerlo."
    ]
  },
  "id": {
    "meta": "Hapus permanen teks, piksel gambar, dan grafis PDF yang dipilih di perangkat Anda.",
    "paragraphs": [
      "Pilih area atau hasil pencarian teks. Mesin lokal menghapus permanen teks yang dipilih, piksel gambar yang bertumpang tindih, dan grafis yang tersentuh, lalu menambahkan warna solid. Teks lain tetap dapat dipilih kecuali semua halaman dirasterisasi. Blur dan mosaik tidak digunakan.",
      "Berkas baru menghapus revisi lama, objek yang tidak digunakan, metadata, lampiran, markah, anotasi, tautan, dan formulir; tanda tangan digital menjadi tidak valid. Kuas dapat menghapus konten di dekatnya. Pencarian hanya menemukan teks yang dapat diekstrak, tanpa OCR atau pencocokan lintas baris; pilih area secara manual untuk hasil pindai. Salinan yang tidak dipilih dapat tetap ada. Periksa setiap halaman PDF unduhan sebelum membagikannya."
    ]
  },
  "vi": {
    "meta": "Xóa vĩnh viễn văn bản, điểm ảnh và đồ họa PDF đã chọn ngay trên thiết bị của bạn.",
    "paragraphs": [
      "Chọn vùng hoặc kết quả tìm kiếm văn bản. Bộ xử lý cục bộ xóa vĩnh viễn văn bản đã chọn, các điểm ảnh chồng lấn và đồ họa chạm vào vùng, rồi thêm màu phủ đồng nhất. Văn bản còn lại vẫn chọn được, trừ khi chuyển toàn bộ trang thành ảnh. Không sử dụng làm mờ hay khảm điểm ảnh.",
      "Tệp mới loại bỏ các phiên bản cũ, đối tượng không dùng, siêu dữ liệu, tệp đính kèm, dấu trang, chú thích, liên kết và biểu mẫu; chữ ký số mất hiệu lực. Cọ có thể xóa nội dung lân cận. Tìm kiếm chỉ phát hiện văn bản có thể trích xuất, không chạy OCR hay tìm xuyên dòng; chọn vùng thủ công cho tài liệu quét. Các bản sao chưa chọn có thể còn lại. Kiểm tra từng trang của PDF đã tải xuống trước khi chia sẻ."
    ]
  },
  "ro": {
    "meta": "Eliminați definitiv textul, pixelii și grafica selectate din PDF pe dispozitivul dvs.",
    "paragraphs": [
      "Selectați zone sau rezultate ale căutării de text. Motorul local elimină definitiv textul selectat, pixelii de imagine suprapuși și grafica atinsă, apoi adaugă o umplere uniformă. Restul textului rămâne selectabil dacă nu rasterizați toate paginile. Nu se folosesc estomparea sau mozaicul.",
      "Fișierul nou elimină reviziile anterioare, obiectele neutilizate, metadatele, atașamentele, marcajele, adnotările, legăturile și formularele; semnăturile digitale devin nevalide. Pensula poate elimina conținutul din apropiere. Căutarea găsește doar text extractibil, fără OCR sau potriviri între rânduri; selectați manual zonele în documentele scanate. Copiile neselectate pot rămâne. Verificați fiecare pagină a PDF-ului descărcat înainte de distribuire."
    ]
  },
  "pl": {
    "meta": "Trwale usuń zaznaczony tekst, piksele obrazów i grafikę PDF na swoim urządzeniu.",
    "paragraphs": [
      "Zaznacz obszary lub wyniki wyszukiwania tekstu. Lokalny silnik trwale usuwa zaznaczony tekst, nakładające się piksele obrazów i dotkniętą grafikę, a następnie dodaje jednolite wypełnienie. Pozostały tekst można zaznaczać, chyba że wszystkie strony zostaną zrasteryzowane. Rozmycie i mozaika nie są używane.",
      "Nowy plik usuwa wcześniejsze wersje, nieużywane obiekty, metadane, załączniki, zakładki, adnotacje, linki i formularze; podpisy cyfrowe tracą ważność. Pędzel może usunąć pobliską treść. Wyszukiwanie obejmuje wyłącznie tekst możliwy do wyodrębnienia, bez OCR i dopasowań między wierszami; zaznacz obszary skanów ręcznie. Niezaznaczone kopie mogą pozostać. Przed udostępnieniem sprawdź każdą stronę pobranego PDF."
    ]
  }
};

export function localizedRedactionContent(locale: Exclude<Locale, 'en'>, toolId: 'redact-pdf' | 'find-and-redact' | 'smart-data-redactor', title: string): ToolContent {
  const text = descriptions[locale];
  return { ...toolContentEn[toolId], title, metaDescription: text.meta, description: text.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('') };
}
