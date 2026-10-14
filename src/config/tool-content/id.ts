import { localizedRedactionContent } from './redaction-locales';
/**
 * Konten alat berbahasa Indonesia untuk SEO
 * Berisi deskripsi mendetail, langkah penggunaan, contoh penggunaan, dan FAQ untuk semua 67 alat
 * Requirements: 4.2-4.5 - Tool page content (description, how-to, use cases, FAQ)
 */

import { ToolContent } from '@/types/tool';

/**
 * Peta konten alat bahasa Indonesia
 * Setiap alat memiliki: title, metaDescription, keywords, description, howToUse (3+ langkah), useCases (3+ skenario), faq (3+ pertanyaan)
 */
export const toolContentId: Record<string, ToolContent> = {
  // ==================== ALAT POPULER ====================
  'pdf-multi-tool': {
    title: 'Alat PDF Multi-Fungsi',
    metaDescription: 'Editor PDF serbaguna: gabungkan, pisahkan, atur, hapus, putar, dan ekstrak halaman dalam satu alat yang tangguh.',
    keywords: ['alat pdf multi', 'editor pdf', 'gabung pdf', 'pisah pdf', 'atur pdf', 'pdf serbaguna'],
    description: `
      <p>Alat PDF Multi-Fungsi adalah solusi komprehensif untuk semua tugas manajemen halaman PDF Anda. Alat serbaguna yang tangguh ini menggabungkan berbagai operasi PDF ke dalam satu antarmuka yang intuitif, sehingga menghemat waktu dan tenaga Anda.</p>
      <p>Baik Anda perlu menggabungkan beberapa dokumen, memisahkan PDF besar menjadi file yang lebih kecil, mengatur ulang halaman, menghapus konten yang tidak diinginkan, memutar halaman, atau mengekstrak bagian tertentu, alat ini menangani semuanya tanpa perlu berpindah aplikasi.</p>
      <p>Semua pemrosesan terjadi langsung di browser Anda, memastikan dokumen Anda tetap privat dan aman. Tidak ada file yang diunggah ke server mana pun.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda ke area unggahan, atau klik untuk menelusuri dan memilih file dari perangkat Anda.' },
      { step: 2, title: 'Pilih Operasi Anda', description: 'Pilih dari operasi yang tersedia: gabung, pisah, atur, hapus halaman, putar, tambah halaman kosong, atau ekstrak halaman.' },
      { step: 3, title: 'Konfigurasi Opsi', description: 'Sesuaikan pengaturan khusus untuk operasi pilihan Anda, seperti rentang halaman, sudut rotasi, atau urutan penggabungan.' },
      { step: 4, title: 'Proses dan Unduh', description: 'Klik tombol proses dan unduh PDF Anda yang telah dimodifikasi setelah operasi selesai.' },
    ],
    useCases: [
      { title: 'Persiapan Dokumen', description: 'Siapkan dokumen untuk dikirim dengan menghapus halaman yang tidak perlu, mengatur ulang konten, dan menggabungkan beberapa file.', icon: "file-check" },
      { title: 'Penyusunan Laporan', description: 'Gabungkan beberapa bagian laporan, tambahkan halaman sampul, dan atur bab-bab ke dalam satu dokumen profesional.', icon: "book-open" },
      { title: 'Manajemen Arsip', description: 'Pisahkan file arsip berukuran besar menjadi bagian-bagian yang lebih mudah dikelola, ekstrak halaman yang relevan, dan atur ulang dokumen historis.', icon: "archive" },
    ],
    faq: [
      { question: 'Berapa banyak PDF yang dapat saya proses sekaligus?', answer: 'Anda dapat mengunggah dan memproses hingga 10 file PDF secara bersamaan, dengan ukuran gabungan maksimum 500MB.' },
      { question: 'Apakah markah (bookmark) saya akan dipertahankan?', answer: 'Ya, saat menggabungkan PDF, alat ini mempertahankan markah yang ada dan secara opsional dapat menggabungkannya ke dalam struktur markah yang terpadu.' },
      { question: 'Apakah ada batasan halaman?', answer: 'Tidak ada batasan halaman yang ketat. Alat ini dapat menangani dokumen dengan ratusan halaman, meskipun file yang sangat besar mungkin memerlukan waktu proses yang lebih lama.' },
    ],
  },

  'merge-pdf': {
    title: 'Gabungkan PDF',
    metaDescription: 'Gabungkan beberapa file PDF menjadi satu dokumen. Penggabung PDF online gratis dengan fitur tarik-dan-lepas untuk menyusun ulang.',
    keywords: ['gabung pdf', 'kombinasi pdf', 'satukan pdf', 'penggabung pdf'],
    description: `
      <p>Gabungkan PDF memungkinkan Anda menggabungkan beberapa dokumen PDF menjadi satu file dengan cepat dan mudah. Baik Anda sedang mengonsolidasikan laporan, menggabungkan dokumen pindaian, atau merakit presentasi, alat ini membuat prosesnya menjadi mulus.</p>
      <p>Cukup unggah file Anda, susun sesuai urutan yang Anda inginkan menggunakan fitur tarik-dan-lepas (drag-and-drop), lalu gabungkan menjadi satu dokumen yang kohesif. Alat ini mempertahankan kualitas file asli Anda dan dapat secara opsional mempertahankan markah dari setiap dokumen sumber.</p>
      <p>Semua penggabungan terjadi secara lokal di browser Anda, memastikan privasi penuh untuk dokumen sensitif Anda.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File PDF', description: 'Tarik dan lepas beberapa file PDF ke area unggahan, atau klik untuk memilih file dari perangkat Anda.' },
      { step: 2, title: 'Susun Urutan', description: 'Tarik dan lepas gambar mini file untuk menyusunnya dalam urutan yang Anda inginkan.' },
      { step: 3, title: 'Gabungkan dan Unduh', description: 'Klik tombol Gabungkan untuk menyatukan semua file, lalu unduh PDF gabungan Anda.' },
    ],
    useCases: [
      { title: 'Gabungkan Laporan', description: 'Gabungkan laporan bulanan atau kuartalan menjadi satu dokumen tahunan untuk memudahkan distribusi dan pengarsipan.', icon: "file-text" },
      { title: 'Rakit Portofolio', description: 'Kombinasikan beberapa dokumen proyek, sertifikat, atau sampel pekerjaan menjadi portofolio profesional.', icon: "briefcase" },
      { title: 'Konsolidasi Faktur', description: 'Gabungkan beberapa faktur atau tanda terima menjadi satu dokumen untuk keperluan akuntansi dan pembukuan.', icon: "receipt" },
    ],
    faq: [
      { question: 'Berapa banyak PDF yang dapat saya gabungkan?', answer: 'Anda dapat menggabungkan hingga 100 file PDF sekaligus, dengan total ukuran gabungan hingga 500MB.' },
      { question: 'Apakah PDF yang digabungkan akan mempertahankan kualitas aslinya?', answer: 'Ya, proses penggabungan mempertahankan kualitas asli semua dokumen tanpa kompresi atau penurunan kualitas.' },
      { question: 'Bisakah saya menggabungkan PDF yang dilindungi kata sandi?', answer: 'PDF yang dilindungi kata sandi harus didekripsi terlebih dahulu. Gunakan alat Dekripsi PDF kami untuk menghapus kata sandi sebelum menggabungkan.' },
    ],
  },

  'rotate-custom': {
    title: 'Putar dengan Derajat Kustom',
    metaDescription: 'Putar halaman PDF dengan sudut berapa pun. Rotasi kustom yang presisi untuk meluruskan dokumen hasil pindaian.',
    keywords: ['putar pdf sudut kustom', 'luruskan pdf', "pdf meja", 'rotasi pdf kustom'],
    description: `
      <p>Putar dengan Derajat Kustom memberi Anda kendali presisi atas orientasi halaman PDF Anda. Tidak seperti alat rotasi standar yang hanya mendukung kelipatan 90 derajat, alat ini memungkinkan Anda memutar halaman pada sudut tertentu.</p>
      <p>Sangat cocok untuk meluruskan dokumen hasil pindaian yang dimasukkan agak miring, atau menyesuaikan diagram dan bagan ke orientasi yang benar. Anda dapat mengoreksi halaman satu per satu atau menerapkan rotasi yang sama ke seluruh dokumen.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat sekaligus mendapatkan perataan yang sempurna.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF', description: 'Unggah file PDF yang berisi halaman yang perlu Anda putar.' },
      { step: 2, title: 'Atur Sudut Rotasi', description: 'Masukkan derajat rotasi yang tepat untuk setiap halaman, atau atur sudut massal untuk semua halaman.' },
      { step: 3, title: 'Pratinjau dan Sesuaikan', description: 'Gunakan pratinjau waktu-nyata untuk memastikan halaman sejajar sempurna.' },
      { step: 4, title: 'Terapkan dan Unduh', description: 'Klik Putar untuk menerapkan perubahan dan unduh PDF Anda yang telah diluruskan.' },
    ],
    useCases: [
      { title: 'Dokumen Pindaian', description: 'Luruskan halaman pindaian yang dimasukkan ke dalam pemindai pada posisi miring.', icon: "scan" },
      { title: 'Gambar Teknis', description: 'Sesuaikan orientasi diagram dan denah teknis dengan presisi tinggi.', icon: "ruler" },
      { title: 'Tata Letak Kreatif', description: 'Buat tata letak unik dengan memutar halaman ke sudut artistik tertentu.', icon: "pen-tool" },
    ],
    faq: [
      { question: 'Bisakah saya memutar dengan desimal, mis. 45,5 derajat?', answer: 'Saat ini alat ini mendukung derajat bilangan bulat, tetapi kami sedang berupaya mengaktifkan presisi desimal.' },
      { question: 'Apakah ini memengaruhi konten halaman?', answer: 'Konten diputar secara visual. Ukuran halaman disesuaikan secara otomatis agar sesuai dengan konten yang diputar.' },
      { question: 'Bisakah saya memutar satu halaman saja?', answer: 'Ya, Anda dapat mengatur sudut rotasi kustom untuk setiap halaman satu per satu sementara halaman lainnya tidak berubah.' },
    ],
  },

  'grid-combine': {
    title: 'Kombinasi Kisi PDF',
    metaDescription: 'Kombinasikan beberapa file PDF ke dalam satu halaman dengan tata letak kisi yang fleksibel. Susun 2, 4, 6, 9 atau lebih PDF per halaman dengan bingkai dan jarak.',
    keywords: ['kombinasi kisi', 'gabung pdf kisi', 'kolase pdf', 'beberapa pdf satu halaman', 'pdf n-up', 'gabung pdf grid'],
    description: `
      <p>Alat Kombinasi Kisi menawarkan cara unik untuk menggabungkan beberapa file PDF terpisah ke dalam satu halaman. Tidak seperti alat "Gabungkan PDF" standar yang hanya menambahkan halaman, atau alat "N-Up" yang menyusun ulang halaman dari satu dokumen, Kombinasi Kisi mengambil beberapa file masukan dan menyusunnya berdampingan dalam tata letak kisi (grid) yang dapat disesuaikan.</p>
      <p>Anda dapat memilih berbagai konfigurasi kisi seperti 2x1, 2x2, 3x3, dll. Ini sempurna untuk membandingkan beberapa dokumen, membuat selebaran dari berbagai sumber, atau mencetak versi ringkas dari beberapa file.</p>
      <p>Sesuaikan hasil akhir dengan kontrol atas ukuran halaman, orientasi, margin, jarak, dan bingkai. Semua pemrosesan terjadi secara lokal di browser Anda untuk privasi maksimal.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File PDF', description: 'Unggah dua atau lebih file PDF yang ingin Anda kombinasikan. Anda dapat mengatur ulang file sesuai urutan yang Anda inginkan.' },
      { step: 2, title: 'Pilih Tata Letak Kisi', description: 'Pilih tata letak kisi yang Anda inginkan (misalnya, 2x2 untuk 4 file per halaman, 3x3 untuk 9 file per halaman).' },
      { step: 3, title: 'Sesuaikan Penampilan', description: 'Sesuaikan pengaturan seperti ukuran halaman (A4, Letter), orientasi, jarak antar item, dan bingkai.' },
      { step: 4, title: 'Kombinasikan dan Unduh', description: 'Klik "Kombinasikan PDF" untuk menghasilkan dokumen tata letak kisi baru Anda dan unduh hasilnya.' },
    ],
    useCases: [
      { title: 'Perbandingan Visual', description: 'Tempatkan berbagai versi desain atau dokumen berdampingan pada satu halaman untuk memudahkan perbandingan.', icon: "layout-grid" },
      { title: 'Mencetak Selebaran', description: 'Gabungkan beberapa dokumen atau slide pendek ke dalam satu lembar kertas untuk menghemat biaya pencetakan.', icon: "printer" },
      { title: 'Pembuatan Portofolio', description: 'Tampilkan beberapa file proyek dalam tinjauan kisi yang bersih dan teratur.', icon: "image" },
    ],
    faq: [
      { question: 'Apa bedanya alat ini dengan N-Up?', answer: 'N-Up mengambil halaman dari SATU PDF dan meletakkannya dalam satu lembar. Kombinasi Kisi mengambil BEBERAPA file PDF BERBEDA dan meletakkannya dalam satu lembar.' },
      { question: 'Berapa banyak file yang dapat saya kombinasikan?', answer: 'Anda dapat mengombinasikan hingga 100 file tergantung pada memori browser Anda, tetapi tata letak seperti 4x4 dapat menampung hingga 16 file per halaman.' },
      { question: 'Bisakah saya menambahkan bingkai?', answer: 'Ya, Anda dapat menambahkan bingkai di sekitar setiap file PDF dan menyesuaikan warna bingkai tersebut.' },
    ],
  },

  'split-pdf': {
    title: 'Pisahkan PDF',
    metaDescription: 'Pisahkan file PDF menjadi beberapa dokumen. Ekstrak halaman tertentu atau bagi berdasarkan rentang halaman.',
    keywords: ['pisah pdf', 'bagi pdf', 'pisahkan pdf', 'ekstrak halaman', 'pemisah pdf'],
    description: `
      <p>Pisahkan PDF memungkinkan Anda membagi satu dokumen PDF menjadi beberapa file yang lebih kecil. Ini sangat cocok untuk mengekstrak bab-bab tertentu, memisahkan dokumen yang digabungkan, atau membuat file individual dari PDF multi-halaman.</p>
      <p>Anda dapat memisahkan berdasarkan rentang halaman tertentu, mengekstrak halaman satu per satu, atau membagi dokumen pada interval yang teratur. Alat ini memberikan pratinjau visual dari halaman Anda, membuatnya mudah untuk memilih apa yang Anda butuhkan secara tepat.</p>
      <p>Semua pemrosesan dilakukan secara lokal di browser Anda, memastikan dokumen Anda tetap privat dan aman.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk menelusuri dan memilih file yang ingin Anda pisahkan.' },
      { step: 2, title: 'Pilih Metode Pemisahan', description: 'Pilih cara memisahkan: berdasarkan rentang halaman, ekstrak halaman tertentu, atau pisahkan secara berkala.' },
      { step: 3, title: 'Tentukan Rentang Halaman', description: 'Masukkan nomor halaman atau rentang yang ingin Anda ekstrak (misalnya, 1-5, 8, 10-15).' },
      { step: 4, title: 'Pisahkan dan Unduh', description: 'Klik Pisahkan untuk membuat file PDF baru Anda dan unduh satu per satu atau sebagai arsip ZIP.' },
    ],
    useCases: [
      { title: 'Ekstrak Bab', description: 'Pisahkan buku atau manual menjadi bab-bab tersendiri agar lebih mudah dibaca atau didistribusikan.', icon: "book" },
      { title: 'Pisahkan Hasil Pindaian Gabungan', description: 'Bagi dokumen pindaian massal menjadi file individual untuk setiap dokumen asli.', icon: "copy" },
      { title: 'Buat Selebaran', description: 'Ekstrak slide atau halaman tertentu dari presentasi untuk membuat selebaran terfokus.', icon: "presentation" },
    ],
    faq: [
      { question: 'Bisakah saya memisahkan PDF menjadi file halaman individual?', answer: 'Ya, Anda dapat memisahkan PDF menjadi file satu halaman masing-masing dengan memilih opsi "Pisahkan setiap halaman".' },
      { question: 'Apa yang terjadi pada markah (bookmark) saat memisahkan?', answer: 'Markah yang berada dalam rentang halaman yang diekstrak akan tetap dipertahankan pada file PDF yang dihasilkan.' },
      { question: 'Bisakah saya memisahkan PDF yang dilindungi kata sandi?', answer: 'Anda perlu mendekripsi PDF terlebih dahulu menggunakan alat Dekripsi PDF kami sebelum memisahkannya.' },
    ],
  },

  'compress-pdf': {
    title: 'Kompres PDF',
    metaDescription: 'Kurangi ukuran file PDF dengan tetap mempertahankan kualitasnya. Kompresor PDF online gratis untuk file yang lebih kecil.',
    keywords: ['kompres pdf', 'kurangi ukuran pdf', 'kompresor pdf', 'perkecil pdf', 'optimalkan pdf'],
    description: `
      <p>Kompres PDF mengurangi ukuran file dokumen PDF Anda dengan tetap mempertahankan kualitas yang dapat diterima. Ini sangat penting untuk lampiran email, unggahan web, atau menghemat ruang penyimpanan.</p>
      <p>Alat ini menawarkan beberapa tingkat kompresi untuk menyeimbangkan antara pengurangan ukuran file dan pelestarian kualitas. Anda dapat memilih kompresi agresif untuk pengurangan ukuran maksimal atau kompresi ringan untuk mempertahankan kualitas yang lebih tinggi.</p>
      <p>Semua kompresi terjadi di browser Anda, memastikan dokumen Anda tidak pernah meninggalkan perangkat Anda.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen yang ingin Anda kompres.' },
      { step: 2, title: 'Pilih Tingkat Kompresi', description: 'Pilih tingkat kompresi pilihan Anda: Rendah (kualitas terbaik), Sedang (seimbang), atau Tinggi (ukuran terkecil).' },
      { step: 3, title: 'Kompres dan Unduh', description: 'Klik Kompres untuk mengurangi ukuran file, lalu unduh PDF yang telah dioptimalkan.' },
    ],
    useCases: [
      { title: 'Lampiran Email', description: 'Kurangi ukuran PDF untuk memenuhi batas lampiran email dan memastikan pengiriman yang lebih cepat.', icon: "mail" },
      { title: 'Publikasi Web', description: 'Optimalkan PDF untuk unduhan web guna meningkatkan waktu muat halaman dan pengalaman pengguna.', icon: "globe" },
      { title: 'Optimasi Penyimpanan', description: 'Kompres dokumen yang diarsipkan untuk menghemat ruang disk namun tetap dapat diakses.', icon: "hard-drive" },
    ],
    faq: [
      { question: 'Seberapa besar saya dapat mengurangi ukuran file?', answer: 'Hasil kompresi bervariasi berdasarkan konten PDF. PDF yang banyak berisi gambar sering kali dapat dikurangi sebesar 50-80%, sementara PDF yang hanya berisi teks mungkin mengalami pengurangan yang lebih kecil.' },
      { question: 'Apakah kompresi akan memengaruhi kualitas teks?', answer: 'Teks tetap tajam dan dapat dibaca di semua tingkat kompresi. Hanya gambar dan grafik yang terpengaruh oleh kompresi.' },
      { question: 'Bisakah saya mengompres beberapa PDF sekaligus?', answer: 'Ya, Anda dapat mengunggah dan mengompres hingga 10 file PDF secara bersamaan.' },
    ],
  },

  'edit-pdf': {
    title: "Sunting PDF",
    metaDescription: 'Edit file PDF secara online. Tambahkan teks, gambar, anotasi, sorotan, dan bentuk ke dokumen Anda.',
    keywords: ['edit pdf', 'editor pdf', 'anotasi pdf', 'tambah teks ke pdf', 'markup pdf'],
    description: `
      <p>Edit PDF menyediakan serangkaian alat komprehensif untuk memodifikasi dan menganotasi dokumen PDF Anda. Tambahkan teks, gambar, bentuk, sorotan, komentar, dan lainnya tanpa memerlukan perangkat lunak desktop yang mahal.</p>
      <p>Antarmuka editor yang intuitif memudahkan markup dokumen untuk ditinjau, menambahkan catatan untuk kolaborasi, meredaksi informasi sensitif, atau menyempurnakan dokumen dengan konten tambahan.</p>
      <p>Semua pengeditan terjadi secara lokal di browser Anda, memastikan privasi penuh untuk dokumen sensitif Anda.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen yang ingin Anda edit.' },
      { step: 2, title: 'Pilih Alat Edit', description: 'Pilih dari bilah alat: teks, sorotan, bentuk, gambar, komentar, atau alat redaksi.' },
      { step: 3, title: 'Lakukan Pengeditan', description: 'Klik pada dokumen untuk menambahkan anotasi, tarik untuk memposisikan elemen, dan gunakan panel properti untuk menyesuaikannya.' },
      { step: 4, title: 'Simpan dan Unduh', description: 'Klik Simpan untuk menerapkan perubahan Anda dan mengunduh PDF yang telah diedit.' },
    ],
    useCases: [
      { title: 'Tinjauan Dokumen', description: 'Tambahkan komentar, sorotan, dan markup ke dokumen untuk proses peninjauan kolaboratif.', icon: 'message-square' },
      { title: 'Penyelesaian Formulir', description: 'Isi bidang teks, tambahkan tanda tangan, dan lengkapi formulir PDF tanpa mencetak.', icon: "edit-3" },
      { title: 'Redaksi Konten', description: 'Hapus informasi sensitif secara permanen dari dokumen sebelum dibagikan.', icon: "eye-off" },
    ],
    faq: [
      { question: 'Bisakah saya mengedit teks asli di PDF?', answer: 'Alat ini berfokus pada penambahan anotasi dan konten baru. Untuk mengedit teks yang ada, Anda mungkin perlu menggunakan dokumen sumber aslinya.' },
      { question: 'Apakah hasil edit saya permanen?', answer: 'Anotasi dapat diratakan (flattened) untuk menjadikannya permanen, atau disimpan sebagai lapisan yang dapat diedit tergantung pada preferensi Anda.' },
      { question: 'Bisakah saya mengurungkan (undo) perubahan saya?', answer: 'Ya, editor ini mendukung fungsi urungkan/ulangi (undo/redo). Anda juga dapat mengatur ulang (reset) ke dokumen asli kapan saja sebelum menyimpan.' },
    ],
  },

  'jpg-to-pdf': {
    title: 'JPG ke PDF',
    metaDescription: 'Konversi gambar JPG ke PDF. Gabungkan beberapa file JPG menjadi satu dokumen PDF.',
    keywords: ['jpg ke pdf', 'jpeg ke pdf', 'konversi jpg', 'gambar ke pdf', 'foto ke pdf'],
    description: `
      <p>JPG ke PDF mengonversi gambar JPEG Anda menjadi dokumen PDF dengan cepat dan mudah. Baik Anda memiliki satu foto atau beberapa gambar, alat ini dapat membuat file PDF yang tampak profesional.</p>
      <p>Anda dapat menggabungkan beberapa file JPG menjadi satu PDF, menyusunnya dalam urutan apa pun, dan menyesuaikan ukuran serta orientasi halaman. Konversi ini mempertahankan kualitas gambar sekaligus membuat file PDF yang ringkas dan mudah dibagikan.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan foto Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah Gambar JPG', description: 'Tarik dan lepas file JPG Anda atau klik untuk memilih gambar dari perangkat Anda.' },
      { step: 2, title: 'Susun dan Konfigurasi', description: 'Urutkan ulang gambar dengan menariknya, dan pilih opsi ukuran serta orientasi halaman.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk membuat PDF Anda dan unduh hasilnya.' },
    ],
    useCases: [
      { title: 'Album Foto', description: 'Buat album foto PDF dari gambar liburan atau foto acara agar mudah dibagikan.', icon: "image" },
      { title: 'Pemindaian Dokumen', description: 'Konversi foto dokumen dari kamera ponsel menjadi file PDF yang tepat.', icon: "camera" },
      { title: 'Pembuatan Portofolio', description: 'Kumpulkan karya fotografi atau sampel desain ke dalam portofolio PDF profesional.', icon: "folder" },
    ],
    faq: [
      { question: 'Berapa banyak gambar yang dapat saya konversi?', answer: 'Anda dapat mengonversi hingga 100 gambar JPG menjadi satu dokumen PDF.' },
      { question: 'Apakah kualitas gambar akan dipertahankan?', answer: 'Ya, gambar disematkan pada kualitas aslinya. Anda dapat secara opsional mengompresnya untuk mengurangi ukuran file.' },
      { question: 'Bisakah saya mengatur ukuran halaman yang berbeda untuk gambar yang berbeda?', answer: 'Alat ini menerapkan ukuran halaman yang seragam untuk semua halaman. Setiap gambar diskalakan agar sesuai dengan ukuran halaman yang dipilih dengan tetap mempertahankan rasio aspek.' },
    ],
  },

  'sign-pdf': {
    title: 'Tanda Tangani PDF',
    metaDescription: 'Tambahkan tanda tangan elektronik ke dokumen PDF. Gambar, ketik, atau unggah tanda tangan Anda.',
    keywords: ['tanda tangani pdf', 'tanda tangan elektronik', "tanda tangan elektronik", 'tanda tangan pdf', 'tanda tangan digital'],
    description: `
      <p>Tanda Tangani PDF memungkinkan Anda menambahkan tanda tangan elektronik ke dokumen PDF Anda dengan cepat dan aman. Buat tanda tangan Anda dengan menggambar, mengetik, atau mengunggah gambar, lalu tempatkan di mana saja pada dokumen Anda.</p>
      <p>Anda dapat menambahkan beberapa tanda tangan ke satu dokumen, mengubah ukuran dan memposisikannya dengan tepat, serta menyimpan tanda tangan Anda untuk penggunaan di masa mendatang. Alat ini sempurna untuk kontrak, perjanjian, formulir, dan dokumen apa pun yang memerlukan tanda tangan Anda.</p>
      <p>Semua proses penandatanganan terjadi secara lokal di browser Anda, memastikan dokumen dan tanda tangan Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen yang perlu Anda tanda tangani.' },
      { step: 2, title: 'Buat Tanda Tangan Anda', description: 'Gambar tanda tangan Anda dengan mouse atau sentuhan, ketik nama Anda untuk menghasilkan tanda tangan, atau unggah gambar tanda tangan. Anda juga dapat memindai foto tanda tangan yang ditulis di atas kertas.' },
      { step: 3, title: 'Tempatkan dan Sesuaikan', description: 'Klik pada dokumen untuk menempatkan tanda tangan Anda, lalu tarik untuk memposisikan dan mengubah ukuran sesuai kebutuhan.' },
      { step: 4, title: 'Simpan dan Unduh', description: 'Klik Simpan untuk menerapkan tanda tangan Anda dan mengunduh PDF yang telah ditandatangani.' },
    ],
    useCases: [
      { title: 'Penandatanganan Kontrak', description: 'Tanda tangani kontrak dan perjanjian secara elektronik tanpa perlu mencetak dan memindai.', icon: "file-signature" },
      { title: 'Penyelesaian Formulir', description: 'Tambahkan tanda tangan Anda ke formulir aplikasi, formulir persetujuan, dan dokumen resmi.', icon: "clipboard" },
      { title: 'Alur Kerja Persetujuan', description: 'Tanda tangani dokumen sebagai bagian dari proses peninjauan dan persetujuan.', icon: "check-circle" },
    ],
    faq: [
      { question: 'Apakah tanda tangan elektronik mengikat secara hukum?', answer: 'Tanda tangan elektronik diakui secara hukum di sebagian besar negara. Namun, beberapa dokumen mungkin memerlukan jenis tanda tangan digital tertentu. Periksa peraturan setempat Anda.' },
      { question: 'Bisakah saya menyimpan tanda tangan saya untuk penggunaan di masa mendatang?', answer: 'Ya, Anda dapat menyimpan tanda tangan Anda ke penyimpanan lokal browser Anda untuk akses cepat saat menandatangani dokumen di masa mendatang.' },
      { question: 'Bisakah saya menambahkan beberapa tanda tangan ke satu dokumen?', answer: 'Ya, Anda dapat menambahkan tanda tangan sebanyak yang diperlukan, memposisikan masing-masing secara independen di halaman mana pun.' },
    ],
  },

  'crop-pdf': {
    title: 'Potong PDF',
    metaDescription: 'Potong halaman PDF untuk menghapus margin dan area yang tidak diinginkan. Pangkas dokumen PDF dengan presisi.',
    keywords: ['potong pdf', 'pangkas pdf', 'potong margin pdf', 'ubah ukuran halaman pdf', 'pemotong pdf'],
    description: `
      <p>Potong PDF memungkinkan Anda memangkas margin dan menghapus area yang tidak diinginkan dari halaman PDF Anda. Ini berguna untuk menghilangkan ruang putih berlebih, berfokus pada area konten tertentu, atau menstandardisasi dimensi halaman.</p>
      <p>Anda dapat memotong semua halaman secara seragam atau menyesuaikan setiap halaman satu per satu. Antarmuka visual menunjukkan dengan tepat apa yang akan dipertahankan, sehingga mudah untuk mencapai hasil yang presisi.</p>
      <p>Semua pemotongan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen yang ingin Anda potong.' },
      { step: 2, title: 'Tentukan Area Potong', description: 'Tarik gagang potong (crop handles) untuk menentukan area yang ingin Anda simpan, atau masukkan ukuran pastinya.' },
      { step: 3, title: 'Terapkan ke Halaman', description: 'Pilih untuk menerapkan potongan ke semua halaman atau pilih halaman tertentu untuk dipotong.' },
      { step: 4, title: 'Potong dan Unduh', description: 'Klik Potong untuk menerapkan perubahan dan mengunduh PDF Anda yang telah dipotong.' },
    ],
    useCases: [
      { title: 'Hapus Margin', description: 'Pangkas margin berlebih dari dokumen pindaian atau PDF dengan batas yang besar.', icon: "maximize-2" },
      { title: 'Fokuskan Konten', description: 'Potong untuk menyorot area konten tertentu, menghapus header, footer, atau bilah sisi.', icon: "target" },
      { title: 'Standardisasi Halaman', description: 'Jadikan semua halaman berukuran sama dengan memotongnya ke dimensi yang seragam.', icon: "square" },
    ],
    faq: [
      { question: 'Apakah memotong menghapus konten secara permanen?', answer: 'Ya, memotong akan menghapus konten di luar area potongan. Pastikan untuk menyimpan cadangan file asli Anda.' },
      { question: 'Bisakah saya memotong halaman yang berbeda secara berbeda?', answer: 'Ya, Anda dapat menerapkan pengaturan potongan yang berbeda untuk setiap halaman individu atau sekelompok halaman.' },
      { question: 'Apakah memotong akan memengaruhi kualitas teks?', answer: 'Tidak, memotong hanya menghapus area di luar batas potongan. Konten yang tersisa mempertahankan kualitas aslinya.' },
    ],
  },

  'extract-pages': {
    title: 'Ekstrak Halaman',
    metaDescription: 'Ekstrak halaman tertentu dari file PDF. Pilih dan simpan halaman individual sebagai dokumen baru.',
    keywords: ['ekstrak halaman pdf', 'simpan halaman pdf', 'salin halaman pdf', 'pengekstrak halaman pdf'],
    description: `
      <p>Ekstrak Halaman memungkinkan Anda memilih dan menyimpan halaman tertentu dari dokumen PDF sebagai file baru. Ini sempurna untuk menarik keluar bagian yang relevan, membuat kutipan, atau memisahkan dokumen yang digabungkan.</p>
      <p>Anda dapat mengekstrak halaman individual, rentang halaman, atau beberapa halaman yang tidak berurutan. Pratinjau halaman visual memudahkan untuk mengidentifikasi dan memilih halaman yang Anda butuhkan secara tepat.</p>
      <p>Semua ekstraksi terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen dari mana Anda ingin mengekstrak halamannya.' },
      { step: 2, title: 'Pilih Halaman', description: 'Klik pada gambar mini halaman untuk memilihnya, atau masukkan nomor halaman dan rentangnya di bidang input.' },
      { step: 3, title: 'Ekstrak dan Unduh', description: 'Klik Ekstrak untuk membuat PDF baru dengan halaman yang Anda pilih dan unduh file tersebut.' },
    ],
    useCases: [
      { title: 'Buat Kutipan', description: 'Ekstrak halaman yang relevan dari laporan atau buku untuk membuat dokumen referensi yang terfokus.', icon: 'file-minus' },
      { title: 'Bagikan Konten Tertentu', description: 'Tarik halaman tertentu untuk dibagikan tanpa harus mengirim seluruh dokumen.', icon: "share-2" },
      { title: 'Arsipkan Halaman Penting', description: 'Ekstrak dan simpan halaman utama dari dokumen untuk pengarsipan jangka panjang.', icon: "archive" },
    ],
    faq: [
      { question: 'Bisakah saya mengekstrak halaman yang tidak berurutan?', answer: 'Ya, Anda dapat memilih kombinasi halaman mana pun, baik berurutan atau tersebar di seluruh dokumen.' },
      { question: 'Apakah markah (bookmark) akan dipertahankan?', answer: 'Markah yang menunjuk ke halaman yang diekstrak akan dipertahankan di dokumen baru.' },
      { question: 'Bisakah saya mengekstrak halaman dari beberapa PDF?', answer: 'Alat ini bekerja dengan satu PDF dalam satu waktu. Untuk menggabungkan halaman dari beberapa PDF, gunakan alat Gabungkan PDF.' },
    ],
  },

  'organize-pdf': {
    title: 'Atur PDF',
    metaDescription: 'Atur ulang, gandakan, dan hapus halaman PDF. Tarik dan lepas untuk mengatur ulang dokumen Anda.',
    keywords: ['atur pdf', 'atur ulang halaman pdf', 'susun ulang pdf', 'pengatur halaman pdf'],
    description: `
      <p>Atur PDF menyediakan antarmuka tarik-dan-lepas (drag-and-drop) yang intuitif untuk mengatur ulang halaman dalam dokumen PDF Anda. Urutkan kembali halaman, gandakan bagian yang penting, atau hapus halaman yang tidak diinginkan dengan mudah.</p>
      <p>Gambar mini (thumbnail) halaman visual memudahkan untuk mengidentifikasi konten dan menyusun halaman persis seperti yang Anda butuhkan. Sempurna untuk merestrukturisasi dokumen, membuat urutan halaman kustom, atau membersihkan file pindaian.</p>
      <p>Semua pengorganisasian terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen yang ingin Anda atur.' },
      { step: 2, title: 'Susun Ulang Halaman', description: 'Tarik gambar mini halaman untuk mengurutkannya kembali. Klik tombol gandakan atau hapus pada setiap halaman sesuai kebutuhan.' },
      { step: 3, title: 'Simpan dan Unduh', description: 'Klik Simpan untuk menerapkan perubahan Anda dan mengunduh PDF yang telah diatur ulang.' },
    ],
    useCases: [
      { title: 'Perbaiki Urutan Halaman', description: 'Koreksi urutan halaman yang dipindai atau digabungkan secara tidak benar.', icon: "arrow-up-down" },
      { title: 'Buat Urutan Kustom', description: 'Susun halaman dalam urutan tertentu untuk presentasi atau laporan.', icon: "list" },
      { title: 'Hapus Halaman Tidak Diinginkan', description: 'Hapus halaman kosong, duplikat, atau konten yang tidak relevan dari dokumen.', icon: "trash-2" },
    ],
    faq: [
      { question: 'Bisakah saya menggandakan halaman?', answer: 'Ya, Anda dapat menggandakan halaman mana pun dan menempatkan salinannya di mana saja di dalam dokumen.' },
      { question: 'Apakah ada fungsi urungkan (undo)?', answer: 'Ya, Anda dapat mengurungkan dan mengulangi perubahan. Anda juga dapat mengatur ulang ke urutan asli kapan saja.' },
      { question: 'Bisakah saya mengatur beberapa PDF sekaligus?', answer: 'Alat ini bekerja dengan satu PDF dalam satu waktu. Untuk menggabungkan dan mengatur beberapa PDF, gabungkan terlebih dahulu menggunakan alat Gabungkan PDF.' },
    ],
  },

  'delete-pages': {
    title: 'Hapus Halaman',
    metaDescription: 'Hapus halaman yang tidak diinginkan dari file PDF. Pilih dan hapus halaman tertentu dengan mudah.',
    keywords: ['hapus halaman pdf', 'hilangkan halaman pdf', 'penghapus halaman pdf', 'hapus halaman dari pdf'],
    description: `
      <p>Hapus Halaman memungkinkan Anda membuang halaman yang tidak diinginkan dari dokumen PDF Anda dengan cepat dan mudah. Baik Anda perlu menghapus halaman kosong, konten kedaluwarsa, atau informasi sensitif, alat ini membuatnya menjadi sederhana.</p>
      <p>Gambar mini halaman visual membantu Anda mengidentifikasi dengan tepat halaman mana yang harus dihapus. Anda dapat menghapus halaman satu per satu atau beberapa halaman sekaligus.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen dari mana Anda ingin menghapus halamannya.' },
      { step: 2, title: 'Pilih Halaman untuk Dihapus', description: 'Klik pada gambar mini halaman untuk menandainya agar dihapus, atau masukkan nomor halaman di bidang input.' },
      { step: 3, title: 'Hapus dan Unduh', description: 'Klik Hapus untuk membuang halaman yang dipilih dan mengunduh PDF Anda yang telah diperbarui.' },
    ],
    useCases: [
      { title: 'Hapus Halaman Kosong', description: 'Bersihkan dokumen dengan menghapus halaman kosong yang tidak sengaja disertakan.', icon: 'file-x' },
      { title: 'Hapus Konten Sensitif', description: 'Hapus halaman yang berisi informasi rahasia sebelum membagikan dokumen.', icon: "shield" },
      { title: 'Sederhanakan Dokumen', description: 'Hapus halaman yang kedaluwarsa atau tidak relevan untuk membuat dokumen yang lebih terfokus.', icon: "filter" },
    ],
    faq: [
      { question: 'Bisakah saya memulihkan halaman yang dihapus?', answer: 'Penghapusan bersifat permanen di file output. Simpan cadangan dokumen asli Anda jika Anda mungkin memerlukan halaman tersebut nanti.' },
      { question: 'Bisakah saya menghapus beberapa halaman sekaligus?', answer: 'Ya, Anda dapat memilih dan menghapus beberapa halaman secara bersamaan.' },
      { question: 'Apakah menghapus halaman akan memengaruhi markah?', answer: 'Markah (bookmark) yang menunjuk ke halaman yang dihapus akan dihilangkan. Markah ke halaman yang tersisa akan tetap dipertahankan.' },
    ],
  },
  // ==================== EDIT & ANNOTATE ====================
  'bookmark': {
    title: 'Edit Markah (Bookmark)',
    metaDescription: 'Tambah, edit, atur, atau hapus semua markah PDF. Kelola navigasi dokumen secara lokal di browser Anda.',
    keywords: ['markah pdf', 'edit markah', 'tambah markah', 'navigasi pdf', 'daftar isi', 'hapus semua markah pdf', 'pindahkan markah'],
    description: `
      <p>Edit Markah memungkinkan Anda membuat, memodifikasi, dan mengatur markah di dokumen PDF Anda. Markah memberikan navigasi cepat ke bagian tertentu, sehingga dokumen panjang lebih mudah digunakan.</p>
      <p>Anda dapat menambahkan markah baru, mengedit yang sudah ada, mengatur ulang hierarki markah, atau mengimpor markah dari sumber eksternal. Alat ini penting untuk membuat dokumen yang profesional dan mudah dinavigasi.</p>
      <p>Semua pengeditan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
      <p>Untuk menghapus semuanya, klik Hapus semua markah dan konfirmasikan. Simpan dan unduh untuk mengekspor PDF tanpa markah.</p>
      <p>Tambah Markah menyisipkan setelah entri yang dipilih pada tingkat yang sama dan menautkan halaman pratinjau. Tanpa pilihan, markah ditambahkan di akhir. Seret pegangan sebelum, sesudah, atau di dalam markah lain. Klik atau ketuk untuk memilih tujuan.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen yang ingin Anda edit.' },
      { step: 2, title: 'Kelola Markah', description: 'Tambahkan markah baru, edit yang sudah ada, atau tarik untuk mengatur ulang hierarkinya. Untuk menghapus semuanya, klik Hapus semua markah dan konfirmasikan. Simpan dan unduh untuk mengekspor PDF tanpa markah. Tambah Markah menyisipkan setelah entri yang dipilih pada tingkat yang sama dan menautkan halaman pratinjau. Tanpa pilihan, markah ditambahkan di akhir. Seret pegangan sebelum, sesudah, atau di dalam markah lain. Klik atau ketuk untuk memilih tujuan.' },
      { step: 3, title: 'Simpan dan Unduh', description: 'Klik Simpan untuk menerapkan perubahan Anda dan mengunduh PDF dengan markah yang telah diperbarui.' },
    ],
    useCases: [
      { title: 'Buat Navigasi', description: 'Tambahkan markah ke dokumen panjang untuk membantu pembaca menavigasi ke bagian tertentu dengan cepat.', icon: "navigation" },
      { title: 'Atur Bab', description: 'Buat struktur markah hierarkis yang mencerminkan organisasi bab dokumen Anda.', icon: "book-open" },
      { title: 'Tingkatkan Aksesibilitas', description: 'Tambahkan markah untuk membuat dokumen lebih mudah diakses dan ramah pengguna.', icon: "accessibility" },
    ],
    faq: [
      { question: 'Bisakah saya membuat markah bersarang (nested)?', answer: 'Ya, Anda dapat membuat struktur hierarkis dengan markah induk (parent) dan turunan (child).' },
      { question: 'Bisakah saya mengimpor markah dari sebuah file?', answer: 'Ya, Anda dapat mengimpor struktur markah dari file JSON atau teks.' },
      { question: 'Apakah markah akan berfungsi di semua pembaca PDF?', answer: 'Ya, markah adalah fitur PDF standar yang didukung oleh semua pembaca PDF utama.' },
      { question: "Bisakah saya menghapus semua markah sekaligus?", answer: "Untuk menghapus semuanya, klik Hapus semua markah dan konfirmasikan. Simpan dan unduh untuk mengekspor PDF tanpa markah." },
    ],
  },

  'table-of-contents': {
    title: 'Daftar Isi',
    metaDescription: 'Buat daftar isi untuk PDF Anda. Buat navigasi yang dapat diklik dari markah.',
    keywords: ['daftar isi pdf', 'pembuat daftar isi', 'indeks pdf', 'navigasi dokumen'],
    description: `
      <p>Daftar Isi menghasilkan halaman daftar isi yang dapat dinavigasi untuk dokumen PDF Anda. Daftar isi dapat dibuat dari markah yang ada atau entri kustom, memberikan ikhtisar dan navigasi cepat kepada pembaca.</p>
      <p>Sesuaikan tampilan dengan berbagai gaya, font, dan tata letak. Daftar isi yang dihasilkan mencakup tautan yang dapat diklik yang langsung melompat ke halaman yang dirujuk.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen.' },
      { step: 2, title: 'Konfigurasi Daftar Isi', description: 'Pilih untuk membuat dari markah atau buat entri kustom. Pilih gaya dan opsi penempatan.' },
      { step: 3, title: 'Buat dan Unduh', description: 'Klik Buat untuk menghasilkan daftar isi dan mengunduh PDF Anda yang telah diperbarui.' },
    ],
    useCases: [
      { title: 'Makalah Akademik', description: 'Tambahkan daftar isi profesional ke tesis, disertasi, dan makalah penelitian.', icon: "graduation-cap" },
      { title: 'Laporan Bisnis', description: 'Buat laporan yang dapat dinavigasi dengan daftar bagian yang jelas bagi pemangku kepentingan.', icon: "bar-chart" },
      { title: 'Panduan Pengguna', description: 'Hasilkan daftar isi yang komprehensif untuk dokumentasi teknis dan panduan pengguna.', icon: "book" },
    ],
    faq: [
      { question: 'Bisakah saya menyesuaikan tampilan Daftar Isi?', answer: 'Ya, Anda dapat memilih dari berbagai gaya, font, dan tata letak untuk daftar isi Anda.' },
      { question: 'Di mana Daftar Isi disisipkan?', answer: 'Secara bawaan, Daftar Isi disisipkan di awal dokumen, tetapi Anda dapat memilih lokasi yang berbeda.' },
      { question: 'Apakah entri Daftar Isi dapat diklik?', answer: 'Ya, setiap entri adalah tautan yang dapat diklik untuk bernavigasi ke halaman yang sesuai.' },
    ],
  },

  'page-numbers': {
    title: 'Nomor Halaman',
    metaDescription: 'Tambahkan nomor halaman ke dokumen PDF. Sesuaikan posisi, format, dan nomor awal.',
    keywords: ['tambah nomor halaman', 'nomor halaman pdf', 'penomoran halaman pdf', 'paginasi pdf'],
    description: `
      <p>Nomor Halaman menambahkan penomoran halaman yang dapat disesuaikan ke dokumen PDF Anda. Pilih dari berbagai format, posisi, dan gaya yang sesuai dengan desain dokumen Anda.</p>
      <p>Anda dapat mengatur nomor awal, melewati halaman tertentu, dan menggunakan format penomoran yang berbeda (1, 2, 3 atau i, ii, iii). Sempurna untuk membuat dokumen profesional dengan paginasi yang tepat.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen.' },
      { step: 2, title: 'Konfigurasi Penomoran', description: 'Pilih posisi, format, nomor awal, dan halaman mana yang akan diberi nomor.' },
      { step: 3, title: 'Terapkan dan Unduh', description: 'Klik Terapkan untuk menambahkan nomor halaman dan mengunduh PDF Anda yang telah diperbarui.' },
    ],
    useCases: [
      { title: 'Dokumen Profesional', description: 'Tambahkan nomor halaman ke laporan, proposal, dan dokumen bisnis.', icon: "file-text" },
      { title: 'Makalah Akademik', description: 'Beri nomor halaman sesuai dengan persyaratan format akademik.', icon: "graduation-cap" },
      { title: 'Dokumen Hukum', description: 'Tambahkan paginasi yang tepat ke kontrak dan pengajuan hukum.', icon: "scale" },
    ],
    faq: [
      { question: 'Bisakah saya melewati halaman pertama?', answer: 'Ya, Anda dapat menentukan halaman mana yang diberi nomor dan mana yang dilewati, seperti halaman judul atau sampul.' },
      { question: 'Format angka apa saja yang tersedia?', answer: 'Anda dapat menggunakan angka Arab (1, 2, 3), angka Romawi (i, ii, iii atau I, II, III), atau huruf (a, b, c).' },
      { question: 'Bisakah saya menambahkan format "Halaman X dari Y"?', answer: 'Ya, Anda dapat menyertakan total jumlah halaman dalam format penomoran Anda.' },
    ],
  },

  'add-watermark': {
    title: 'Tambahkan Tanda Air (Watermark)',
    metaDescription: 'Tambahkan tanda air berupa teks atau gambar ke file PDF. Lindungi dan beri merek pada dokumen Anda.',
    keywords: ['tambah tanda air', 'tanda air pdf', 'stempel pdf', 'merek pdf', 'lindungi pdf', "tanda air pdf"],
    description: `
      <p>Tambahkan Tanda Air memungkinkan Anda menempatkan tanda air teks atau gambar pada dokumen PDF Anda. Tanda air dapat menunjukkan status dokumen (Draf, Rahasia), menambahkan merek, atau mencegah penyalinan tanpa izin.</p>
      <p>Sesuaikan posisi, ukuran, opasitas, rotasi, dan warna tanda air. Terapkan ke semua halaman atau pilih halaman tertentu. Alat ini mendukung tanda air teks maupun gambar.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen.' },
      { step: 2, title: 'Buat Tanda Air', description: 'Masukkan teks atau unggah gambar untuk tanda air Anda. Sesuaikan posisi, ukuran, opasitas, dan rotasi.' },
      { step: 3, title: 'Terapkan dan Unduh', description: 'Klik Terapkan untuk menambahkan tanda air dan mengunduh PDF Anda yang telah diperbarui.' },
    ],
    useCases: [
      { title: 'Perlindungan Dokumen', description: 'Tambahkan tanda air "Rahasia" atau "Draf" untuk menunjukkan status dokumen.', icon: "shield" },
      { title: 'Dokumen Merek', description: 'Tambahkan logo atau nama perusahaan ke dokumen resmi.', icon: "award" },
      { title: 'Pemberitahuan Hak Cipta', description: 'Tambahkan informasi hak cipta untuk melindungi kekayaan intelektual.', icon: "copyright" },
    ],
    faq: [
      { question: 'Bisakah saya menggunakan gambar sebagai tanda air?', answer: 'Ya, Anda dapat mengunggah gambar PNG, JPG, atau SVG untuk digunakan sebagai tanda air.' },
      { question: 'Bisakah saya membuat tanda air menjadi semi-transparan?', answer: 'Ya, Anda dapat menyesuaikan opasitas dari sepenuhnya transparan hingga sepenuhnya pekat.' },
      { question: 'Bisakah saya menerapkan tanda air yang berbeda ke halaman yang berbeda?', answer: 'Alat ini menerapkan tanda air yang sama ke halaman yang dipilih. Untuk tanda air yang berbeda, proses dokumen tersebut beberapa kali.' },
    ],
  },

  'header-footer': {
    title: "Tajuk & Kaki",
    metaDescription: 'Tambahkan header dan footer ke dokumen PDF. Sertakan nomor halaman, tanggal, dan teks kustom.',
    keywords: ['header pdf', 'footer pdf', 'tambah header footer', 'kop surat pdf'],
    description: `
      <p>Header & Footer menambahkan header dan footer yang dapat disesuaikan ke dokumen PDF Anda. Sertakan nomor halaman, tanggal, judul dokumen, atau teks kustom apa pun di area header atau footer.</p>
      <p>Posisikan konten di kiri, tengah, atau kanan header/footer. Gunakan konten yang berbeda untuk halaman ganjil dan genap jika diperlukan. Sempurna untuk membuat dokumen profesional dengan format yang konsisten.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen.' },
      { step: 2, title: 'Konfigurasi Header/Footer', description: 'Masukkan teks untuk area header dan footer. Tambahkan nomor halaman, tanggal, atau teks kustom.' },
      { step: 3, title: 'Terapkan dan Unduh', description: 'Klik Terapkan untuk menambahkan header/footer dan mengunduh PDF Anda yang telah diperbarui.' },
    ],
    useCases: [
      { title: 'Dokumen Bisnis', description: 'Tambahkan nama perusahaan dan nomor halaman ke dokumen profesional.', icon: "briefcase" },
      { title: 'Dokumen Hukum', description: 'Sertakan nomor kasus, tanggal, dan referensi halaman dalam pengajuan hukum.', icon: "scale" },
      { title: 'Makalah Akademik', description: 'Tambahkan header berjalan (running header) dengan judul makalah dan nama penulis.', icon: "graduation-cap" },
    ],
    faq: [
      { question: 'Bisakah saya menggunakan header yang berbeda pada halaman ganjil dan genap?', answer: 'Ya, Anda dapat mengonfigurasi konten yang berbeda untuk halaman ganjil dan genap.' },
      { question: 'Bisakah saya menyertakan tanggal saat ini?', answer: 'Ya, Anda dapat menyisipkan kolom tanggal dinamis yang menampilkan tanggal saat ini.' },
      { question: 'Bisakah saya melewati header/footer pada halaman tertentu?', answer: 'Ya, Anda dapat menentukan halaman mana yang harus memiliki header/footer dan mana yang harus dilewati.' },
    ],
  },

  'invert-colors': {
    title: 'Balikkan Warna',
    metaDescription: 'Balikkan warna PDF untuk membaca dalam mode gelap. Ubah dokumen menjadi warna negatif.',
    keywords: ['balikkan warna pdf', 'pdf mode gelap', 'pdf negatif', 'balik warna'],
    description: `
      <p>Balikkan Warna (Invert Colors) membalikkan warna dalam dokumen PDF Anda, menciptakan efek gambar negatif. Hal ini sangat berguna untuk membuat versi dokumen dalam mode gelap agar lebih mudah dibaca dalam kondisi minim cahaya.</p>
      <p>Alat ini dapat membalikkan semua warna atau secara selektif mempertahankan elemen tertentu seperti gambar. Sempurna untuk mengurangi ketegangan mata saat membaca dokumen di malam hari.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen.' },
      { step: 2, title: 'Konfigurasi Opsi', description: 'Pilih apakah akan membalikkan semua konten atau mempertahankan gambar.' },
      { step: 3, title: 'Balikkan dan Unduh', description: 'Klik Balikkan untuk memproses dokumen dan mengunduh hasilnya.' },
    ],
    useCases: [
      { title: 'Membaca di Malam Hari', description: 'Buat versi mode gelap dari dokumen agar nyaman dibaca di malam hari.', icon: "moon" },
      { title: 'Kurangi Ketegangan Mata', description: 'Balikkan dokumen yang terang untuk mengurangi kelelahan mata saat membaca terlalu lama.', icon: "eye" },
      { title: 'Penghematan Cetak', description: 'Balikkan dokumen untuk mengurangi penggunaan tinta saat mencetak draf.', icon: "printer" },
    ],
    faq: [
      { question: 'Apakah gambar juga akan dibalikkan?', answer: 'Secara bawaan, ya. Anda dapat memilih untuk mempertahankan gambar aslinya sekaligus membalikkan teks dan latar belakangnya.' },
      { question: 'Bisakah saya membalikkan halaman tertentu saja?', answer: 'Ya, Anda dapat memilih halaman mana yang akan dibalikkan warnanya.' },
      { question: 'Apakah pembalikan warna ini dapat diubah kembali (reversible)?', answer: 'Anda dapat membalikkan dokumen itu lagi untuk mengembalikannya ke warna yang kurang lebih sama dengan aslinya.' },
    ],
  },

  'background-color': {
    title: 'Warna Latar Belakang',
    metaDescription: 'Ubah warna latar belakang PDF. Tambahkan latar belakang berwarna ke halaman dokumen.',
    keywords: ['warna latar belakang pdf', 'ubah latar belakang pdf', 'pdf berwarna', 'warna halaman pdf'],
    description: `
      <p>Warna Latar Belakang memungkinkan Anda mengubah atau menambahkan warna latar belakang ke halaman PDF Anda. Hal ini dapat meningkatkan keterbacaan, menambah daya tarik visual, atau mencocokkan dengan kebutuhan merek Anda.</p>
      <p>Pilih warna apa pun untuk latar belakang dan terapkan ke semua halaman atau halaman tertentu saja. Alat ini mempertahankan semua konten yang ada sambil menambahkan lapisan latar belakang.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen.' },
      { step: 2, title: 'Pilih Warna', description: 'Pilih warna latar belakang menggunakan pemilih warna atau masukkan kode hex.' },
      { step: 3, title: 'Terapkan dan Unduh', description: 'Klik Terapkan untuk menambahkan latar belakang dan mengunduh PDF Anda yang telah diperbarui.' },
    ],
    useCases: [
      { title: 'Tingkatkan Keterbacaan', description: 'Tambahkan latar belakang warna krem muda atau sepia untuk mengurangi ketegangan mata.', icon: "eye" },
      { title: 'Dokumen Merek', description: 'Gunakan warna merek sebagai latar belakang untuk materi pemasaran.', icon: "palette" },
      { title: 'Sorot Bagian', description: 'Gunakan warna latar belakang yang berbeda untuk membedakan bagian-bagian dokumen.', icon: "layers" },
    ],
    faq: [
      { question: 'Apakah latar belakang akan menutupi konten yang ada?', answer: 'Tidak, latar belakang ditambahkan di belakang konten yang ada, sehingga semua teks dan gambar tetap terjaga.' },
      { question: 'Bisakah saya menggunakan warna yang berbeda untuk halaman yang berbeda?', answer: 'Anda perlu memproses dokumen tersebut beberapa kali untuk memberikan warna yang berbeda pada halaman yang berbeda.' },
      { question: 'Bisakah saya menghapus latar belakang yang sudah ada?', answer: 'Alat ini berfungsi untuk menambahkan latar belakang. Untuk menghapus latar belakang, Anda mungkin perlu menggunakan alat Edit PDF.' },
    ],
  },

  'text-color': {
    title: 'Ubah Warna Teks',
    metaDescription: 'Ubah warna teks di dalam dokumen PDF. Ubah warna seluruh konten teks.',
    keywords: ['ubah warna teks pdf', 'warna teks pdf', 'modifikasi warna teks', 'warnai ulang teks pdf'],
    description: `
      <p>Ubah Warna Teks memungkinkan Anda mengubah warna teks di dalam dokumen PDF Anda. Ini berguna untuk meningkatkan kontras, mencocokkan warna merek, atau membuat variasi visual pada dokumen.</p>
      <p>Pilih warna baru dan terapkan ke seluruh teks di dalam dokumen. Alat ini memproses elemen teks sambil mempertahankan gambar dan konten lainnya.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen.' },
      { step: 2, title: 'Pilih Warna', description: 'Pilih warna teks baru menggunakan pemilih warna atau masukkan kode hex.' },
      { step: 3, title: 'Terapkan dan Unduh', description: 'Klik Terapkan untuk mengubah warna teks dan mengunduh PDF Anda yang telah diperbarui.' },
    ],
    useCases: [
      { title: 'Tingkatkan Kontras', description: 'Ubah warna teks untuk meningkatkan keterbacaan terhadap latar belakang.', icon: "contrast" },
      { title: 'Konsistensi Merek', description: 'Perbarui warna teks agar sesuai dengan panduan merek (brand guidelines).', icon: "palette" },
      { title: 'Aksesibilitas', description: 'Sesuaikan warna teks untuk memenuhi persyaratan kontras aksesibilitas.', icon: "accessibility" },
    ],
    faq: [
      { question: 'Apakah semua teks akan diubah?', answer: 'Ya, alat ini mengubah warna seluruh elemen teks dalam dokumen.' },
      { question: 'Bisakah saya hanya mengubah teks tertentu saja?', answer: 'Alat ini mengubah semua teks. Untuk perubahan selektif, gunakan alat Edit PDF.' },
      { question: 'Apakah teks yang diformat (tebal, miring) akan dipertahankan?', answer: 'Ya, format teks dipertahankan; hanya warnanya saja yang diubah.' },
    ],
  },

  'add-stamps': {
    title: 'Tambahkan Stempel',
    metaDescription: 'Tambahkan stempel ke dokumen PDF. Gunakan stempel prasetel atau kustom untuk persetujuan, peninjauan, dan lainnya.',
    keywords: ['stempel pdf', 'tambah stempel', 'stempel persetujuan', 'stempel karet pdf'],
    description: `
      <p>Tambahkan Stempel memungkinkan Anda menempatkan gambar stempel di dokumen PDF Anda. Gunakan stempel prasetel (preset) seperti "Disetujui", "Ditolak", "Draf", atau unggah gambar stempel kustom Anda sendiri.</p>
      <p>Tempatkan stempel di mana saja pada halaman, ubah ukurannya, dan terapkan ke satu atau beberapa halaman. Sempurna untuk alur kerja dokumen, persetujuan, dan indikator status.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen.' },
      { step: 2, title: 'Pilih Stempel', description: 'Pilih stempel prasetel atau unggah gambar stempel kustom.' },
      { step: 3, title: 'Posisikan dan Terapkan', description: 'Klik untuk menempatkan stempel, sesuaikan posisi dan ukuran, lalu unduh.' },
    ],
    useCases: [
      { title: 'Persetujuan Dokumen', description: 'Tambahkan stempel "Disetujui" atau "Ditolak" ke dokumen dalam alur kerja peninjauan.', icon: "check-circle" },
      { title: 'Indikasi Status', description: 'Tandai dokumen sebagai "Draf", "Final", atau "Rahasia".', icon: "tag" },
      { title: 'Kontrol Kualitas', description: 'Tambahkan stempel QC untuk menunjukkan penyelesaian inspeksi atau peninjauan.', icon: "clipboard-check" },
    ],
    faq: [
      { question: 'Stempel prasetel apa saja yang tersedia?', answer: 'Prasetel yang tersedia antara lain Approved (Disetujui), Rejected (Ditolak), Draft (Draf), Final, Confidential (Rahasia), Copy (Salinan), dan banyak lagi.' },
      { question: 'Bisakah saya mengunggah stempel kustom?', answer: 'Ya, Anda dapat mengunggah gambar PNG atau JPG untuk digunakan sebagai stempel kustom.' },
      { question: 'Bisakah saya menambahkan beberapa stempel ke satu dokumen?', answer: 'Ya, Anda dapat menambahkan beberapa stempel dan memposisikan masing-masing secara independen.' },
    ],
  },

  'remove-annotations': {
    title: 'Hapus Anotasi',
    metaDescription: 'Hapus anotasi dari file PDF. Hapus komentar, sorotan, dan markup.',
    keywords: ['hapus anotasi pdf', 'hapus komentar', 'hapus sorotan', 'bersihkan pdf'],
    description: `
      <p>Hapus Anotasi akan melucuti komentar, sorotan, catatan tempel, dan anotasi lainnya dari dokumen PDF Anda. Hal ini akan menghasilkan versi dokumen yang bersih tanpa ada markup.</p>
      <p>Anda dapat menghapus semua anotasi atau secara selektif menghapus jenis tertentu. Sempurna untuk membuat versi akhir dari dokumen yang telah ditinjau atau menghapus komentar yang sensitif.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen.' },
      { step: 2, title: 'Pilih Jenis Anotasi', description: 'Pilih jenis anotasi apa saja yang akan dihapus: komentar, sorotan, tautan, dll.' },
      { step: 3, title: 'Hapus dan Unduh', description: 'Klik Hapus untuk melucuti anotasi dan mengunduh PDF yang sudah bersih.' },
    ],
    useCases: [
      { title: 'Selesaikan Dokumen', description: 'Hapus komentar tinjauan dan markup sebelum memublikasikan dokumen akhir.', icon: "file-check" },
      { title: 'Perlindungan Privasi', description: 'Hapus komentar yang mungkin berisi informasi sensitif sebelum dibagikan.', icon: "shield" },
      { title: 'Distribusi Bersih', description: 'Buat salinan bersih dari dokumen yang dianotasi untuk didistribusikan.', icon: "copy" },
    ],
    faq: [
      { question: 'Jenis anotasi apa saja yang dapat dihapus?', answer: 'Komentar, sorotan, garis bawah, coretan, catatan tempel, stempel, dan tautan semuanya dapat dihapus.' },
      { question: 'Bisakah saya mempertahankan beberapa anotasi?', answer: 'Ya, Anda dapat memilih jenis anotasi mana yang akan dihapus dan mana yang akan dipertahankan.' },
      { question: 'Apakah proses ini dapat dikembalikan (reversible)?', answer: 'Tidak, penghapusan anotasi bersifat permanen. Simpan cadangan file aslinya jika diperlukan.' },
    ],
  },

  'form-filler': {
    title: 'Pengisi Formulir',
    metaDescription: 'Isi formulir PDF secara online. Lengkapi formulir PDF interaktif tanpa perlu mencetaknya.',
    keywords: ['isi formulir pdf', 'pengisi formulir pdf', 'lengkapi formulir pdf', 'pdf interaktif'],
    description: `
      <p>Pengisi Formulir memungkinkan Anda untuk melengkapi formulir PDF interaktif secara langsung di browser Anda. Isi bidang teks, centang kotak, pilih opsi, dan tambahkan tanda tangan tanpa perlu mencetak dokumen tersebut.</p>
      <p>Alat ini mendukung formulir PDF standar maupun formulir XFA. Data yang Anda isi dapat disimpan dan formulir dapat diratakan (flattened) untuk mencegah pengeditan lebih lanjut.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan data formulir Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah Formulir PDF Anda', description: 'Tarik dan lepas formulir PDF Anda atau klik untuk memilih file.' },
      { step: 2, title: 'Isi Formulir', description: 'Klik pada bidang formulir untuk memasukkan teks, mencentang kotak, atau memilih opsi.' },
      { step: 3, title: 'Simpan dan Unduh', description: 'Klik Simpan untuk mempertahankan entri Anda dan mengunduh formulir yang telah diisi.' },
    ],
    useCases: [
      { title: 'Formulir Aplikasi', description: 'Lengkapi aplikasi pekerjaan, permohonan izin, dan formulir pendaftaran.', icon: "clipboard" },
      { title: 'Formulir Pajak', description: 'Isi dokumen pajak dan formulir keuangan secara elektronik.', icon: "file-text" },
      { title: 'Kontrak', description: 'Lengkapi formulir kontrak dengan informasi Anda sebelum menandatanganinya.', icon: "file-signature" },
    ],
    faq: [
      { question: 'Bisakah saya menyimpan progres saya?', answer: 'Ya, Anda dapat menyimpan formulir yang diisi sebagian dan melanjutkannya nanti.' },
      { question: 'Apa yang dimaksud dengan meratakan (flattening) formulir?', answer: 'Meratakan (flattening) mengonversi bidang formulir menjadi konten statis, sehingga mencegah pengeditan lebih lanjut.' },
      { question: 'Apakah formulir XFA didukung?', answer: 'Ya, alat ini mendukung AcroForms standar dan formulir XFA.' },
    ],
  },

  'form-creator': {
    title: 'Pembuat Formulir',
    metaDescription: 'Buat formulir PDF yang dapat diisi. Tambahkan bidang teks, kotak centang, dan dropdown ke dalam dokumen.',
    keywords: ['buat formulir pdf', 'pembuat formulir pdf', 'pdf dapat diisi', 'tambah bidang formulir'],
    description: `
      <p>Pembuat Formulir mengubah dokumen PDF statis menjadi formulir interaktif yang dapat diisi. Tambahkan bidang teks, kotak centang, tombol radio, dropdown, dan lainnya untuk membuat formulir profesional.</p>
      <p>Tarik dan lepas elemen formulir ke dokumen Anda, konfigurasikan properti bidang, dan buat formulir yang dapat diisi secara elektronik. Sempurna untuk membuat aplikasi, survei, dan formulir pengumpulan data.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen yang akan diubah menjadi formulir.' },
      { step: 2, title: 'Tambahkan Bidang Formulir', description: 'Pilih jenis bidang dari bilah alat dan klik untuk menempatkannya di dokumen.' },
      { step: 3, title: 'Konfigurasi dan Simpan', description: 'Atur properti bidang, lalu simpan dan unduh formulir PDF yang dapat diisi tersebut.' },
    ],
    useCases: [
      { title: 'Formulir Aplikasi', description: 'Buat aplikasi pekerjaan, formulir keanggotaan, dan pendaftaran yang dapat diisi.', icon: "user-plus" },
      { title: 'Survei', description: 'Buat survei dan kuesioner interaktif untuk pengumpulan data.', icon: "clipboard-list" },
      { title: 'Formulir Pesanan', description: 'Buat formulir pesanan produk dengan bidang kuantitas dan kotak centang.', icon: "shopping-cart" },
    ],
    faq: [
      { question: 'Jenis bidang apa saja yang dapat saya tambahkan?', answer: 'Bidang teks, kotak centang, tombol radio, dropdown, pemilih tanggal, dan bidang tanda tangan.' },
      { question: 'Bisakah saya membuat bidang yang wajib diisi (required)?', answer: 'Ya, Anda dapat menandai bidang sebagai wajib diisi dan menambahkan aturan validasi.' },
      { question: 'Bisakah saya menambahkan perhitungan (calculation)?', answer: 'Perhitungan dasar seperti jumlah (sum) dan rata-rata dapat ditambahkan ke bidang numerik.' },
    ],
  },

  'remove-blank-pages': {
    title: 'Hapus Halaman Kosong',
    metaDescription: 'Deteksi dan hapus halaman kosong dari dokumen PDF secara otomatis.',
    keywords: ['hapus halaman kosong', 'hapus halaman kosong pdf', 'bersihkan pdf', 'penghapus halaman kosong pdf'],
    description: `
      <p>Hapus Halaman Kosong secara otomatis mendeteksi dan menghapus halaman yang kosong dari dokumen PDF Anda. Ini berguna untuk membersihkan dokumen pindaian, menghapus halaman pemisah, atau menghilangkan halaman kosong yang tidak sengaja disertakan.</p>
      <p>Alat ini menggunakan deteksi cerdas untuk mengidentifikasi halaman yang benar-benar kosong sekaligus mempertahankan halaman dengan konten minimal. Anda dapat menyesuaikan ambang batas (threshold) sensitivitas untuk mengontrol apa yang dianggap sebagai "kosong".</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih dokumen.' },
      { step: 2, title: 'Sesuaikan Ambang Batas', description: 'Atur ambang batas deteksi kosong jika diperlukan (pengaturan bawaan sudah berfungsi baik untuk sebagian besar dokumen).' },
      { step: 3, title: 'Hapus dan Unduh', description: 'Klik Hapus untuk membuang halaman kosong dan mengunduh PDF yang sudah bersih.' },
    ],
    useCases: [
      { title: 'Bersihkan Dokumen Pindaian', description: 'Hapus halaman kosong dari dokumen yang dipindai secara massal.', icon: "scan" },
      { title: 'Hapus Pemisah', description: 'Hapus halaman pemisah kosong dari dokumen yang digabungkan.', icon: "minus" },
      { title: 'Kurangi Ukuran File', description: 'Hapus halaman kosong yang tidak perlu untuk mengurangi ukuran dokumen.', icon: "minimize-2" },
    ],
    faq: [
      { question: 'Bagaimana cara kerja deteksi halaman kosong?', answer: 'Alat ini menganalisis konten halaman dan menganggap halaman dengan konten visual minimal atau tidak ada sama sekali sebagai halaman kosong.' },
      { question: 'Bisakah saya meninjau halaman mana saja yang akan dihapus?', answer: 'Ya, halaman kosong yang terdeteksi akan disorot untuk ditinjau sebelum penghapusan dilakukan.' },
      { question: 'Bagaimana jika sebuah halaman hanya memiliki header/footer?', answer: 'Anda dapat menyesuaikan ambang batas untuk menentukan apakah halaman dengan konten minimal tersebut harus dianggap kosong atau tidak.' },
    ],
  },
  // ==================== CONVERT TO PDF ====================
  'image-to-pdf': {
    title: 'Gambar ke PDF',
    metaDescription: 'Konversi gambar apa pun menjadi PDF. Mendukung format JPG, PNG, WebP, BMP, TIFF, SVG, dan HEIC.',
    keywords: ['gambar ke pdf', 'konversi gambar', 'foto ke pdf', 'picture ke pdf'],
    description: `
      <p>Gambar ke PDF mengonversi gambar format apa pun menjadi dokumen PDF. Dukungan untuk format JPG, PNG, WebP, BMP, TIFF, SVG, dan HEIC menjadikan ini alat konverter gambar yang universal.</p>
      <p>Gabungkan beberapa gambar menjadi satu PDF, atur dalam urutan apa pun, dan sesuaikan ukuran halaman serta orientasinya. Sempurna untuk membuat album foto, arsip dokumen, atau portofolio.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan gambar Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah Gambar', description: 'Tarik dan lepas gambar dengan format yang didukung atau klik untuk memilih file.' },
      { step: 2, title: 'Susun dan Konfigurasi', description: 'Atur ulang gambar dan pilih opsi ukuran halaman serta orientasinya.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk membuat PDF Anda dan unduh hasilnya.' },
    ],
    useCases: [
      { title: 'Koleksi Foto', description: 'Gabungkan foto dari berbagai sumber menjadi satu album PDF.', icon: "images" },
      { title: 'Dokumen Beragam Format', description: 'Konversi gambar dari berbagai format menjadi satu PDF yang seragam.', icon: "file-stack" },
      { title: 'Pembuatan Arsip', description: 'Buat arsip PDF dari koleksi gambar untuk penyimpanan jangka panjang.', icon: "archive" },
    ],
    faq: [
      { question: 'Format gambar apa saja yang didukung?', answer: 'Format JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC, dan HEIF semuanya didukung.' },
      { question: 'Bisakah saya mencampur format gambar yang berbeda?', answer: 'Ya, Anda dapat menggabungkan gambar dari berbagai format ke dalam satu PDF.' },
      { question: 'Apakah kualitas gambar akan dipertahankan?', answer: 'Ya, gambar disematkan pada kualitas aslinya kecuali jika Anda memilih untuk mengompresnya.' },
    ],
  },

  'png-to-pdf': {
    title: 'PNG ke PDF',
    metaDescription: 'Konversi gambar PNG menjadi PDF. Pertahankan transparansi dan gabungkan beberapa file PNG.',
    keywords: ['png ke pdf', 'konversi png', 'konverter png', 'gambar transparan ke pdf'],
    description: `
      <p>PNG ke PDF mengonversi gambar PNG Anda menjadi dokumen PDF dengan tetap mempertahankan transparansinya. Sempurna untuk grafik, logo, tangkapan layar, dan gambar dengan latar belakang transparan.</p>
      <p>Gabungkan beberapa file PNG menjadi satu PDF, atur dalam urutan apa pun, dan sesuaikan pengaturan halaman. Konversi ini mempertahankan kualitas tinggi dari gambar asli Anda.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan gambar Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File PNG', description: 'Tarik dan lepas gambar PNG Anda atau klik untuk memilih file.' },
      { step: 2, title: 'Susun dan Konfigurasi', description: 'Atur ulang gambar dan pilih opsi ukuran halaman.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk membuat PDF Anda dan unduh.' },
    ],
    useCases: [
      { title: 'Portofolio Grafik', description: 'Kompilasikan grafik PNG dan desain ke dalam portofolio profesional.', icon: "palette" },
      { title: 'Dokumentasi Tangkapan Layar', description: 'Konversi tangkapan layar menjadi dokumentasi PDF.', icon: 'monitor' },
      { title: 'Koleksi Logo', description: 'Buat katalog PDF yang berisi sekumpulan logo dan aset merek.', icon: "award" },
    ],
    faq: [
      { question: 'Apakah transparansi dipertahankan?', answer: 'Transparansi PNG dipertahankan dalam hasil output PDF.' },
      { question: 'Bagaimana dengan animasi PNG?', answer: 'PNG beranimasi dikonversi sebagai gambar statis menggunakan frame pertamanya.' },
      { question: 'Bisakah saya mengatur warna latar belakang?', answer: 'Ya, Anda dapat memilih warna latar belakang untuk area yang transparan.' },
    ],
  },

  'webp-to-pdf': {
    title: 'WebP ke PDF',
    metaDescription: 'Konversi gambar WebP ke PDF. Konversi format gambar modern dengan mempertahankan kualitas.',
    keywords: ['webp ke pdf', 'konversi webp', 'konverter webp', 'gambar web ke pdf'],
    description: `
      <p>WebP ke PDF mengonversi gambar WebP modern menjadi dokumen PDF. WebP adalah format gambar web yang populer, dan alat ini memudahkan Anda mengonversi gambar-gambar tersebut untuk dicetak atau diarsipkan.</p>
      <p>Gabungkan beberapa file WebP menjadi satu PDF dengan pengaturan halaman yang dapat disesuaikan. Konversi ini mempertahankan kualitas gambar sembari menciptakan file PDF yang ringkas.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan gambar Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File WebP', description: 'Tarik dan lepas gambar WebP Anda atau klik untuk memilih file.' },
      { step: 2, title: 'Konfigurasi Opsi', description: 'Atur ulang gambar dan pilih ukuran halaman serta orientasinya.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk membuat PDF Anda.' },
    ],
    useCases: [
      { title: 'Pengarsipan Konten Web', description: 'Konversi gambar web menjadi PDF untuk pengarsipan offline.', icon: "globe" },
      { title: 'Persiapan Cetak', description: 'Konversi gambar WebP ke PDF untuk keperluan pencetakan.', icon: "printer" },
      { title: 'Standardisasi Format', description: 'Konversi WebP modern menjadi format PDF yang kompatibel secara universal.', icon: "file-check" },
    ],
    faq: [
      { question: 'Apa itu format WebP?', answer: 'WebP adalah format gambar modern yang dikembangkan oleh Google yang memberikan kompresi superior untuk gambar web.' },
      { question: 'Apakah kualitasnya dipertahankan?', answer: 'Ya, konversi ini mempertahankan kualitas gambar aslinya.' },
      { question: 'Bisakah saya mengonversi WebP beranimasi?', answer: 'File WebP beranimasi akan dikonversi sebagai gambar statis.' },
    ],
  },

  'svg-to-pdf': {
    title: 'SVG ke PDF',
    metaDescription: 'Konversi grafik vektor SVG ke PDF. Pertahankan skalabilitas dan kualitas.',
    keywords: ['svg ke pdf', 'konversi svg', 'vektor ke pdf', 'grafik yang dapat diskalakan ke pdf'],
    description: `
      <p>SVG ke PDF mengonversi grafik vektor yang dapat diskalakan menjadi dokumen PDF sembari mempertahankan kualitas vektornya. File SVG tetap tajam pada ukuran apa pun, dan kualitas ini dipertahankan di dalam output PDF.</p>
      <p>Sempurna untuk mengonversi logo, ikon, ilustrasi, dan gambar teknis. PDF yang dihasilkan akan mempertahankan skalabilitas grafik vektor aslinya.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan file Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File SVG', description: 'Tarik dan lepas file SVG Anda atau klik untuk memilih.' },
      { step: 2, title: 'Konfigurasi Pengaturan', description: 'Pilih ukuran halaman dan opsi tata letak.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk membuat PDF vektor Anda.' },
    ],
    useCases: [
      { title: 'Konversi Logo', description: 'Konversi logo SVG menjadi PDF untuk materi cetak.', icon: "award" },
      { title: 'Gambar Teknis', description: 'Konversi ekspor CAD dan ilustrasi teknis ke PDF.', icon: "ruler" },
      { title: 'Koleksi Ikon', description: 'Buat katalog PDF yang berisi kumpulan ikon dan grafik.', icon: "grid" },
    ],
    faq: [
      { question: 'Apakah kualitas vektor dipertahankan?', answer: 'Ya, kualitas vektor SVG dipertahankan sepenuhnya dalam output PDF.' },
      { question: 'Bisakah saya mengonversi SVG yang kompleks?', answer: 'Ya, SVG yang kompleks dengan gradasi, filter, dan efek juga didukung.' },
      { question: 'Bagaimana dengan font yang disematkan?', answer: 'Font yang disematkan di dalam file SVG akan dipertahankan dalam PDF.' },
    ],
  },

  'bmp-to-pdf': {
    title: 'BMP ke PDF',
    metaDescription: 'Konversi gambar bitmap BMP ke PDF. Dukungan format lama (legacy) dengan pelestarian kualitas.',
    keywords: ['bmp ke pdf', 'konversi bmp', 'bitmap ke pdf', 'konverter bmp'],
    description: `
      <p>BMP ke PDF mengonversi gambar bitmap menjadi dokumen PDF. BMP adalah format gambar lawas yang biasa digunakan di lingkungan Windows, dan alat ini memudahkan Anda mengonversi file-file tersebut ke format PDF modern.</p>
      <p>Gabungkan beberapa file BMP menjadi satu PDF dengan pengaturan yang dapat disesuaikan. Konversi ini akan mengompres file BMP yang biasanya berukuran besar dengan tetap mempertahankan kualitas gambar.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan gambar Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File BMP', description: 'Tarik dan lepas gambar BMP Anda atau klik untuk memilih file.' },
      { step: 2, title: 'Konfigurasi Opsi', description: 'Atur ulang gambar dan pilih pengaturan halaman.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk membuat PDF Anda.' },
    ],
    useCases: [
      { title: 'Konversi File Lawas', description: 'Konversi file BMP lama ke format PDF modern.', icon: "history" },
      { title: 'Tangkapan Layar Windows', description: 'Konversi tangkapan layar bitmap Windows ke PDF.', icon: 'monitor' },
      { title: 'Modernisasi Arsip', description: 'Perbarui arsip gambar lawas ke dalam format PDF.', icon: "archive" },
    ],
    faq: [
      { question: 'Apakah ukuran file akan berkurang?', answer: 'Ya, file BMP biasanya dikompres secara signifikan ketika dikonversi ke PDF.' },
      { question: 'Apakah kualitasnya dipertahankan?', answer: 'Ya, kualitas gambar tetap dipertahankan selama konversi.' },
      { question: 'Kedalaman warna BMP apa saja yang didukung?', answer: 'Semua kedalaman warna BMP standar didukung, termasuk 24-bit dan 32-bit.' },
    ],
  },

  'psd-to-pdf': {
    title: 'PSD ke PDF',
    metaDescription: 'Konversi file Adobe Photoshop (PSD) ke format PDF. Mendukung beberapa file sekaligus dan mempertahankan kualitas gambar.',
    keywords: ['psd ke pdf', 'konversi psd', 'photoshop ke pdf', 'konverter psd', 'adobe psd ke pdf'],
    description: `
      <p>PSD ke PDF mengonversi file Adobe Photoshop (PSD) menjadi dokumen PDF. Alat ini memungkinkan Anda melihat dan membagikan desain PSD tanpa perlu menginstal program Photoshop.</p>
      <p>Anda dapat mengonversi beberapa file PSD sekaligus dan menggabungkannya menjadi satu dokumen PDF. Alat ini memproses setiap file PSD, merender lapisan (layer) yang terlihat ke dalam halaman PDF berkualitas tinggi.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda, memastikan desain Anda tetap privat dan aman.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File PSD', description: 'Tarik dan lepas file PSD atau PSB Anda, atau klik untuk memilihnya dari perangkat Anda.' },
      { step: 2, title: 'Susun Urutan', description: 'Tarik dan lepas gambar mini file untuk menyusunnya sesuai urutan yang Anda inginkan.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk merender file PSD dan unduh dokumen PDF Anda.' },
    ],
    useCases: [
      { title: 'Bagikan Desain', description: 'Bagikan desain Photoshop dengan klien atau kolega yang tidak memiliki program Photoshop.', icon: "share-2" },
      { title: 'Pembuatan Portofolio', description: 'Kompilasikan karya desain Anda ke dalam portofolio PDF yang profesional.', icon: "layout" },
      { title: 'Persiapan Cetak', description: 'Konversi desain ke dalam bentuk PDF untuk keperluan pencetakan.', icon: "printer" },
    ],
    faq: [
      { question: 'Apakah saya perlu menginstal Photoshop?', answer: 'Tidak, alat ini berfungsi sepenuhnya di browser Anda tanpa memerlukan Adobe Photoshop.' },
      { question: 'Apakah lapisan (layer) dipertahankan?', answer: 'Alat ini merender file PSD berdasarkan status tampilannya saat ini (gambar komposit). Lapisan (layer) individu akan diratakan (flattened) di dalam PDF.' },
      { question: 'Berapa ukuran file maksimum?', answer: 'Anda dapat mengunggah file hingga 100MB per file. File PSD berukuran besar mungkin memerlukan waktu lebih lama untuk diproses.' },
    ],
  },

  'heic-to-pdf': {
    title: 'HEIC ke PDF',
    metaDescription: 'Konversi foto iPhone HEIC menjadi PDF. Konversi format gambar Apple jadi lebih mudah.',
    keywords: ['heic ke pdf', 'konversi heic', 'foto iphone ke pdf', 'gambar apple ke pdf'],
    description: `
      <p>HEIC ke PDF mengonversi foto High Efficiency Image Format milik Apple menjadi dokumen PDF. HEIC adalah format foto bawaan di iPhone dan iPad, dan alat ini akan mempermudah Anda untuk membagikan foto-foto tersebut.</p>
      <p>Gabungkan beberapa foto HEIC menjadi satu PDF, sangat cocok untuk membuat album foto atau arsip dokumen yang berasal dari foto iPhone Anda.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan foto Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File HEIC', description: 'Tarik dan lepas foto HEIC Anda atau klik untuk memilih file.' },
      { step: 2, title: 'Susun Foto', description: 'Atur ulang urutan foto dan pilih pengaturan halamannya.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk membuat PDF Anda.' },
    ],
    useCases: [
      { title: 'Album Foto iPhone', description: 'Buat album PDF dari foto iPhone untuk dibagikan.', icon: "smartphone" },
      { title: 'Pemindaian Dokumen', description: 'Konversi hasil pindai dokumen di iPhone menjadi format PDF.', icon: "scan" },
      { title: 'Berbagi Lintas Platform', description: 'Konversi HEIC ke PDF untuk kompatibilitas yang lebih universal.', icon: "share-2" },
    ],
    faq: [
      { question: 'Apa itu format HEIC?', answer: 'HEIC (High Efficiency Image Container) adalah format gambar buatan Apple yang memberikan kompresi yang lebih baik dibandingkan JPEG.' },
      { question: 'Apakah Live Photos didukung?', answer: 'Live Photos akan dikonversi menjadi gambar statis menggunakan bingkai utamanya (key frame).' },
      { question: 'Apakah data EXIF dipertahankan?', answer: 'Metadata foto dapat secara opsional dipertahankan atau dihapus selama konversi berlangsung.' },
    ],
  },

  'tiff-to-pdf': {
    title: 'TIFF ke PDF',
    metaDescription: 'Konversi gambar TIFF menjadi PDF. Mendukung file TIFF multi-halaman dan konversi berkualitas tinggi.',
    keywords: ['tiff ke pdf', 'konversi tiff', 'tif ke pdf', 'tiff multi-halaman'],
    description: `
      <p>TIFF ke PDF mengonversi gambar TIFF, termasuk file TIFF multi-halaman, menjadi dokumen PDF. TIFF umumnya digunakan untuk pindaian berkualitas tinggi dan grafik profesional.</p>
      <p>File TIFF multi-halaman secara otomatis akan dikonversi menjadi PDF multi-halaman. Konversi ini mempertahankan kualitas tinggi dari gambar asli Anda.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan file Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File TIFF', description: 'Tarik dan lepas file TIFF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Konfigurasi Opsi', description: 'Pilih pengaturan halaman dan opsi kompresi.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk membuat PDF Anda.' },
    ],
    useCases: [
      { title: 'Dokumen Pindaian', description: 'Konversi pindaian berkualitas tinggi dari TIFF ke PDF.', icon: "scan" },
      { title: 'Grafik Profesional', description: 'Konversi grafik TIFF profesional untuk didistribusikan.', icon: "image" },
      { title: 'Konversi Arsip', description: 'Konversi arsip TIFF ke format PDF yang lebih mudah diakses.', icon: "archive" },
    ],
    faq: [
      { question: 'Apakah TIFF multi-halaman didukung?', answer: 'Ya, file TIFF multi-halaman akan dikonversi secara otomatis menjadi PDF multi-halaman.' },
      { question: 'Apakah kualitasnya dipertahankan?', answer: 'Ya, kualitas TIFF dipertahankan sepenuhnya di dalam hasil PDF.' },
      { question: 'Kompresi apa yang digunakan?', answer: 'Anda dapat memilih antara opsi kompresi lossless dan lossy.' },
    ],
  },

  'txt-to-pdf': {
    title: 'Teks ke PDF',
    metaDescription: 'Konversi file teks biasa ke PDF. Sesuaikan font, margin, dan tata letak halaman.',
    keywords: ['txt ke pdf', 'teks ke pdf', 'konversi file teks', 'teks biasa ke pdf'],
    description: `
      <p>Teks ke PDF mengonversi file teks biasa menjadi dokumen PDF yang berformat. Sesuaikan font, ukuran, margin, dan tata letak halaman untuk membuat dokumen yang terlihat profesional dari teks biasa.</p>
      <p>Sangat cocok untuk mengonversi file kode, log, catatan, atau konten teks biasa apa pun ke dalam format PDF yang mudah dibagikan.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan file Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File Teks', description: 'Tarik dan lepas file .txt Anda atau klik untuk memilih.' },
      { step: 2, title: 'Sesuaikan Format', description: 'Pilih font, ukuran, margin, dan pengaturan halaman.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk membuat PDF berformat Anda.' },
    ],
    useCases: [
      { title: 'Dokumentasi Kode', description: 'Konversi file kode sumber menjadi PDF untuk dokumentasi.', icon: "code" },
      { title: 'Arsip Log', description: 'Konversi file log menjadi PDF untuk tujuan pengarsipan.', icon: "file-text" },
      { title: 'Konversi Catatan', description: 'Konversi catatan teks biasa menjadi dokumen PDF berformat.', icon: "sticky-note" },
    ],
    faq: [
      { question: 'Font apa saja yang tersedia?', answer: 'Tersedia berbagai pilihan font, termasuk font monospace (spasi tunggal) untuk kode.' },
      { question: 'Apakah barisnya dibungkus (wrap) secara otomatis?', answer: 'Ya, baris yang terlalu panjang akan dibungkus secara otomatis agar muat di halaman.' },
      { question: 'Bisakah saya mempertahankan format aslinya?', answer: 'Ruang kosong (whitespace) dan indentasi dari teks aslinya akan dipertahankan.' },
    ],
  },

  'json-to-pdf': {
    title: 'JSON ke PDF',
    metaDescription: 'Konversi file JSON menjadi PDF berformat. Dengan penyorotan sintaks dan output terstruktur.',
    keywords: ['json ke pdf', 'konversi json', 'penampil json', 'pemformat json'],
    description: `
      <p>JSON ke PDF mengonversi file data JSON menjadi dokumen PDF yang mudah dibaca dan berformat rapi. Hasil output mencakup penyorotan sintaks (syntax highlighting) dan indentasi yang tepat untuk memudahkan proses membaca.</p>
      <p>Sangat cocok untuk mendokumentasikan respons API, file konfigurasi, atau data JSON apa pun yang perlu dibagikan atau diarsipkan dalam format yang rapi.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan data Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File JSON', description: 'Tarik dan lepas file .json Anda atau klik untuk memilih.' },
      { step: 2, title: 'Konfigurasi Tampilan', description: 'Pilih opsi pemformatan dan penyorotan sintaks.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk membuat PDF berformat Anda.' },
    ],
    useCases: [
      { title: 'Dokumentasi API', description: 'Konversi respons API menjadi PDF untuk kebutuhan dokumentasi.', icon: "code" },
      { title: 'Arsip Konfigurasi', description: 'Arsipkan file konfigurasi ke dalam format PDF yang mudah dibaca.', icon: "settings" },
      { title: 'Laporan Data', description: 'Buat laporan PDF dari ekspor data JSON.', icon: "bar-chart" },
    ],
    faq: [
      { question: 'Apakah penyorotan sintaks disertakan?', answer: 'Ya, sintaks JSON akan diberi warna yang berbeda untuk kunci (keys), nilai (values), dan tipe datanya.' },
      { question: 'Bagaimana data bertingkat (nested) ditangani?', answer: 'Objek dan array bertingkat akan diberikan indentasi yang rapi agar lebih mudah dibaca.' },
      { question: 'Bagaimana jika file JSON sangat besar?', answer: 'File besar akan dibagi-bagi ke dalam beberapa halaman (paginasi) secara otomatis.' },
    ],
  },

  'word-to-pdf': {
    title: 'Word ke PDF',
    metaDescription: 'Konversi dokumen Word (DOCX) menjadi PDF. Pertahankan format dan tata letak dalam dokumen yang Anda konversi.',
    keywords: ['word ke pdf', 'docx ke pdf', 'konversi word', 'konverter word', 'microsoft word ke pdf'],
    description: `
      <p>Word ke PDF mengonversi dokumen Microsoft Word menjadi format PDF sembari mempertahankan format asli, tata letak, dan struktur kontennya.</p>
      <p>Unggah file DOCX Anda dan dapatkan output PDF berkualitas tinggi yang siap untuk dibagikan, dicetak, atau diarsipkan. Konversi ini mempertahankan format teks, gaya paragraf, dan struktur dokumen dasar.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat dan aman.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah Dokumen Word', description: 'Tarik dan lepas file .docx Anda atau klik untuk memilih dari perangkat Anda.' },
      { step: 2, title: 'Tunggu Pemrosesan', description: 'Alat ini akan memuat dokumen dan menyiapkannya untuk dikonversi.' },
      { step: 3, title: 'Unduh PDF', description: 'Klik Unduh untuk menyimpan dokumen PDF hasil konversi Anda.' },
    ],
    useCases: [
      { title: 'Berbagi Dokumen', description: 'Konversi dokumen Word ke PDF agar dapat dibagikan dan dilihat secara universal.', icon: "share-2" },
      { title: 'Persiapan Cetak', description: 'Buat file PDF yang siap cetak dari dokumen Word.', icon: "printer" },
      { title: 'Arsip Dokumen', description: 'Arsipkan dokumen Word dalam format PDF yang stabil untuk penyimpanan jangka panjang.', icon: "archive" },
    ],
    faq: [
      { question: 'Apakah format .doc didukung?', answer: 'Saat ini hanya format .docx yang didukung. Harap konversi file .doc ke .docx terlebih dahulu menggunakan Microsoft Word atau LibreOffice.' },
      { question: 'Apakah gambar dipertahankan?', answer: 'Konten teks dan pemformatan dasar dipertahankan. Tata letak yang kompleks dengan banyak gambar mungkin akan dirender secara lebih sederhana.' },
      { question: 'Apakah konversinya aman?', answer: 'Ya, semua pemrosesan terjadi di dalam browser Anda. Dokumen Anda tidak akan pernah meninggalkan perangkat Anda.' },
    ],
  },

  'excel-to-pdf': {
    title: 'Excel ke PDF',
    metaDescription: 'Konversi lembar kerja Excel (XLSX) menjadi PDF. Pertahankan tabel dan data di dokumen hasil konversi Anda.',
    keywords: ['excel ke pdf', 'xlsx ke pdf', 'konversi excel', 'spreadsheet ke pdf', 'microsoft excel ke pdf'],
    description: `
      <p>Excel ke PDF mengonversi lembar kerja Microsoft Excel menjadi format PDF sembari mempertahankan struktur tabel dan pengaturan datanya.</p>
      <p>Unggah file XLSX Anda dan dapatkan output PDF yang rapi dengan tabel yang terformat dengan baik. Setiap lembar di dalam workbook Anda akan menjadi bagian terpisah di dalam PDF.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda, memastikan data Anda tetap privat dan aman.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File Excel', description: 'Tarik dan lepas file .xlsx Anda atau klik untuk memilih dari perangkat Anda.' },
      { step: 2, title: 'Tunggu Pemrosesan', description: 'Alat ini akan memuat spreadsheet Anda dan mengonversi semua lembarnya.' },
      { step: 3, title: 'Unduh PDF', description: 'Klik Unduh untuk menyimpan dokumen PDF hasil konversi Anda.' },
    ],
    useCases: [
      { title: 'Berbagi Laporan', description: 'Konversi laporan Excel ke PDF untuk dibagikan kepada para pemangku kepentingan.', icon: "file-text" },
      { title: 'Pengarsipan Data', description: 'Arsipkan data spreadsheet dalam format PDF yang lebih stabil.', icon: "archive" },
      { title: 'Persiapan Cetak', description: 'Buat file PDF siap cetak dari lembar kerja Excel.', icon: "printer" },
    ],
    faq: [
      { question: 'Apakah multi-lembar (multiple sheets) didukung?', answer: 'Ya, semua lembar di dalam workbook akan dikonversi dan disertakan ke dalam file PDF.' },
      { question: 'Apakah format .xls didukung?', answer: 'Saat ini hanya format .xlsx yang didukung. Harap simpan file .xls sebagai .xlsx terlebih dahulu.' },
      { question: 'Apakah formula dipertahankan?', answer: 'PDF akan menampilkan nilai hasil perhitungannya. Formula itu sendiri tidak bisa dieksekusi di dalam format PDF.' },
    ],
  },

  'pptx-to-pdf': {
    title: 'PowerPoint ke PDF',
    metaDescription: 'Konversi presentasi PowerPoint (PPTX) menjadi PDF. Pertahankan slide dan konten untuk memudahkan berbagi.',
    keywords: ['powerpoint ke pdf', 'pptx ke pdf', 'konversi pptx', 'presentasi ke pdf', 'slide ke pdf'],
    description: `
      <p>PowerPoint ke PDF mengonversi presentasi Microsoft PowerPoint Anda ke dalam format PDF, mempertahankan konten slide dan teks sehingga lebih mudah dibagikan dan dilihat.</p>
      <p>Setiap slide akan menjadi satu halaman di dalam PDF, menjaga kelancaran alur presentasi. Alat ini sangat sempurna untuk membagikan presentasi kepada mereka yang tidak memiliki program PowerPoint.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda, memastikan presentasi Anda tetap privat dan aman.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File PowerPoint', description: 'Tarik dan lepas file .pptx Anda atau klik untuk memilih dari perangkat Anda.' },
      { step: 2, title: 'Tunggu Pemrosesan', description: 'Alat ini akan mengekstrak konten slide dan membuat file PDF-nya.' },
      { step: 3, title: 'Unduh PDF', description: 'Klik Unduh untuk menyimpan dokumen PDF hasil konversi Anda.' },
    ],
    useCases: [
      { title: 'Berbagi Presentasi', description: 'Bagikan presentasi kepada siapa saja tanpa mewajibkan mereka memiliki PowerPoint.', icon: "share-2" },
      { title: 'Pembuatan Handout', description: 'Buat selebaran PDF dari slide presentasi Anda.', icon: "file-text" },
      { title: 'Arsip Presentasi', description: 'Arsipkan presentasi dalam format PDF yang stabil.', icon: "archive" },
    ],
    faq: [
      { question: 'Apakah animasi dipertahankan?', answer: 'PDF adalah format statis, sehingga animasi dan transisi tidak akan dipertahankan. Setiap slide menjadi satu halaman statis.' },
      { question: 'Apakah format .ppt didukung?', answer: 'Saat ini hanya format .pptx yang didukung. Harap konversi file .ppt ke .pptx terlebih dahulu.' },
      { question: 'Apakah catatan pembicara (speaker notes) disertakan?', answer: 'Saat ini, catatan pembicara tidak disertakan di dalam hasil PDF.' },
    ],
  },

  'xps-to-pdf': {
    title: 'XPS ke PDF',
    metaDescription: 'Konversi dokumen XPS ke format PDF. Konversi berakurasi tinggi (high-fidelity) yang mempertahankan tata letak dan grafik.',
    keywords: ['xps ke pdf', 'konversi xps', 'konverter xps', 'microsoft xps ke pdf', 'oxps ke pdf'],
    description: `
      <p>XPS ke PDF mengonversi dokumen Microsoft XPS (XML Paper Specification) menjadi format PDF sembari mempertahankan tata letak asli, teks, dan grafik vektornya.</p>
      <p>XPS adalah format dokumen tetap yang mirip dengan PDF. Alat ini menyediakan konversi dengan akurasi tinggi (high-fidelity) menggunakan parser XPS secara native, sehingga reproduksi dokumen Anda sangat akurat.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat dan aman.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File XPS', description: 'Tarik dan lepas file .xps Anda atau klik untuk memilih dari perangkat Anda.' },
      { step: 2, title: 'Tunggu Pemrosesan', description: 'Alat ini akan mem-parsing dan mengonversi dokumen XPS.' },
      { step: 3, title: 'Unduh PDF', description: 'Klik Unduh untuk menyimpan dokumen PDF hasil konversi Anda.' },
    ],
    useCases: [
      { title: 'Konversi Format', description: 'Konversi dokumen XPS menjadi format PDF yang lebih umum didukung.', icon: "file" },
      { title: 'Berbagi Dokumen', description: 'Bagikan dokumen XPS kepada pengguna yang tidak memiliki penampil XPS.', icon: "share-2" },
      { title: 'Migrasi Arsip', description: 'Migrasikan arsip XPS ke format PDF demi kompatibilitas yang lebih baik.', icon: "archive" },
    ],
    faq: [
      { question: 'Apa itu format XPS?', answer: 'XPS (XML Paper Specification) adalah format dokumen berstruktur tetap (fixed-document) milik Microsoft, mirip dengan PDF. Biasanya format ini digunakan untuk pencetakan di Windows.' },
      { question: 'Apakah konversinya tanpa penurunan kualitas (lossless)?', answer: 'Ya, konversi ini mempertahankan teks, grafik, dan tata letak dengan akurasi yang tinggi (high fidelity).' },
      { question: 'Apakah file XPS multi-halaman didukung?', answer: 'Ya, semua halaman di dalam dokumen XPS akan dikonversi ke PDF.' },
    ],
  },

  'rtf-to-pdf': {
    title: 'RTF ke PDF',
    metaDescription: 'Konversi file RTF (Rich Text Format) menjadi PDF. Pertahankan pemformatan teks di dalam dokumen Anda.',
    keywords: ['rtf ke pdf', 'konversi rtf', 'rich text ke pdf', 'konverter rtf'],
    description: `
      <p>RTF ke PDF mengonversi file Rich Text Format menjadi dokumen PDF. RTF adalah format teks yang didukung secara luas dan menyertakan pemformatan dasar seperti font, warna, dan gaya karakter.</p>
      <p>Unggah file RTF Anda dan dapatkan output PDF yang bersih sambil mempertahankan konten teks dan pemformatan dasar. Sangat cocok untuk mengonversi dokumen lama ke format PDF modern.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat dan aman.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File RTF', description: 'Tarik dan lepas file .rtf Anda atau klik untuk memilih dari perangkat Anda.' },
      { step: 2, title: 'Tunggu Pemrosesan', description: 'Alat ini akan mem-parsing dan mengonversi konten RTF.' },
      { step: 3, title: 'Unduh PDF', description: 'Klik Unduh untuk menyimpan dokumen PDF hasil konversi Anda.' },
    ],
    useCases: [
      { title: 'Konversi Dokumen Lawas', description: 'Konversi dokumen RTF lama ke format PDF modern.', icon: "history" },
      { title: 'Berbagi Dokumen', description: 'Bagikan dokumen RTF dalam format PDF yang bisa dilihat oleh siapa saja.', icon: "share-2" },
      { title: 'Arsip Dokumen', description: 'Arsipkan file RTF dalam format PDF yang stabil untuk penyimpanan jangka panjang.', icon: "archive" },
    ],
    faq: [
      { question: 'Pemformatan apa saja yang dipertahankan?', answer: 'Pemformatan teks dasar termasuk font, paragraf, dan gaya (style) akan dikonversi. Fitur RTF yang kompleks mungkin disederhanakan.' },
      { question: 'Bisakah saya mengonversi beberapa file RTF?', answer: 'Saat ini, Anda hanya bisa mengonversi satu file pada satu waktu. Gunakan fitur Gabungkan PDF untuk menggabungkan file yang sudah dikonversi.' },
      { question: 'Apakah objek gambar yang disematkan didukung?', answer: 'Fokus utamanya adalah pada konten teks. Objek gambar yang disematkan mungkin tidak akan dirender.' },
    ],
  },

  'epub-to-pdf': {
    title: 'EPUB ke PDF',
    metaDescription: 'Konversi e-book EPUB menjadi PDF. Pertahankan pemformatan, gambar, dan struktur bab.',
    keywords: ['epub ke pdf', 'konversi epub', 'ebook ke pdf', 'konverter epub'],
    description: `
      <p>EPUB ke PDF mengonversi file buku elektronik (e-book) Anda menjadi dokumen PDF berkualitas tinggi. EPUB adalah format e-book paling populer yang digunakan oleh sebagian besar e-reader dan perpustakaan digital.</p>
      <p>Alat ini mempertahankan format teks, gambar, dan struktur bab dari e-book Anda. Sangat sempurna untuk dicetak, diarsipkan, atau jika Anda ingin membagikan e-book tersebut dalam format yang bisa dilihat di perangkat apa pun.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda dengan teknologi render tingkat lanjut, memastikan buku Anda tetap privat dan prosesnya berlangsung cepat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File EPUB', description: 'Tarik dan lepas file .epub Anda atau klik untuk memilih dari perangkat Anda.' },
      { step: 2, title: 'Tunggu Konversi', description: 'Alat ini akan merender dan mengonversi semua halaman dari e-book Anda.' },
      { step: 3, title: 'Unduh PDF', description: 'Klik Unduh untuk menyimpan dokumen PDF hasil konversi Anda.' },
    ],
    useCases: [
      { title: 'Cetak E-book', description: 'Konversi e-book ke format PDF untuk keperluan cetak fisik.', icon: "printer" },
      { title: 'Arsipkan Buku', description: 'Simpan e-book dalam format PDF yang stabil untuk jangka panjang.', icon: "archive" },
      { title: 'Bagikan Dokumen', description: 'Bagikan e-book kepada siapa saja, bahkan kepada mereka yang tidak memiliki e-reader.', icon: "share-2" },
    ],
    faq: [
      { question: 'Apakah pemformatannya dipertahankan?', answer: 'Ya! Alat ini menggunakan rendering EPUB secara native, sehingga teks, gambar, dan tata letak dipertahankan dengan tingkat akurasi tinggi (high fidelity).' },
      { question: 'Apakah EPUB yang dilindungi DRM didukung?', answer: 'Tidak, e-book yang dilindungi DRM tidak dapat dikonversi. Hanya file EPUB bebas DRM yang didukung.' },
      { question: 'Bagaimana ukuran halaman ditentukan?', answer: 'Konten EPUB akan dirender pada ukuran halaman standar A4 agar optimal saat dibaca.' },
    ],
  },

  'mobi-to-pdf': {
    title: 'MOBI ke PDF',
    metaDescription: 'Konversi e-book MOBI menjadi PDF. Mendukung format Kindle dengan rendering berkualitas tinggi.',
    keywords: ['mobi ke pdf', 'konversi mobi', 'kindle ke pdf', 'azw ke pdf', 'konverter mobi'],
    description: `
      <p>MOBI ke PDF mengonversi file e-book Amazon Kindle Anda menjadi dokumen PDF berkualitas tinggi. Format MOBI (termasuk AZW dan AZW3) adalah format e-book eksklusif milik Amazon yang digunakan di perangkat Kindle.</p>
      <p>Alat ini mempertahankan pemformatan teks, gambar, dan struktur dari buku Kindle Anda. Sempurna untuk mencetak, mengarsipkan, atau membaca di perangkat yang tidak mendukung format MOBI.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda dengan teknologi render tingkat lanjut, memastikan buku Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File MOBI', description: 'Tarik dan lepas file .mobi, .azw, atau .azw3 Anda, atau klik untuk memilih dari perangkat Anda.' },
      { step: 2, title: 'Tunggu Konversi', description: 'Alat ini akan merender dan mengonversi semua halaman dari e-book Anda.' },
      { step: 3, title: 'Unduh PDF', description: 'Klik Unduh untuk menyimpan dokumen PDF hasil konversi Anda.' },
    ],
    useCases: [
      { title: 'Cetak Buku Kindle', description: 'Konversi e-book Kindle ke PDF untuk pencetakan fisik.', icon: "printer" },
      { title: 'Arsipkan Buku', description: 'Simpan buku Kindle dalam format PDF yang lebih universal.', icon: "archive" },
      { title: 'Membaca Lintas Perangkat', description: 'Baca buku Kindle di perangkat yang hanya mendukung file PDF.', icon: 'tablet-smartphone' },
    ],
    faq: [
      { question: 'Format MOBI apa saja yang didukung?', answer: 'Alat ini mendukung file .mobi, .azw, dan .azw3 (versi bebas DRM).' },
      { question: 'Apakah buku Kindle yang dilindungi DRM didukung?', answer: 'Tidak, e-book yang dilindungi DRM tidak dapat dikonversi. Hanya file bebas DRM yang didukung.' },
      { question: 'Apakah pemformatan saya akan dipertahankan?', answer: 'Ya! Alat ini menggunakan rendering MOBI secara native untuk mempertahankan teks, gambar, dan tata letaknya.' },
    ],
  },

  'djvu-to-pdf': {
    title: 'DJVU ke PDF',
    metaDescription: 'Konversi file dokumen DJVU menjadi PDF. Rendering berkualitas tinggi untuk dokumen pindaian dan buku.',
    keywords: ['djvu ke pdf', 'konversi djvu', 'konverter djvu', 'djvu pdf', 'djv ke pdf'],
    description: `
      <p>DJVU ke PDF mengonversi file dokumen DjVu menjadi dokumen PDF berkualitas tinggi. DjVu adalah format file komputer yang utamanya dirancang untuk menyimpan dokumen hasil pindaian, terutama yang berisi kombinasi antara teks, gambar garis (line drawings), dan foto.</p>
      <p>Alat ini merender setiap halaman dari file DJVU Anda sesuai dengan ukuran DPI (dots per inch) yang Anda pilih dan menggabungkannya menjadi dokumen PDF yang dapat dicari. Alat ini sangat sempurna untuk mengonversi pindaian buku, manual teknis, dan dokumen arsip.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat dan aman.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File DJVU', description: 'Tarik dan lepas file .djvu atau .djv Anda, atau klik untuk memilih dari perangkat Anda.' },
      { step: 2, title: 'Konfigurasi Opsi', description: 'Pilih output DPI (72, 150, atau 300) dan atur kualitas gambar untuk file PDF-nya.' },
      { step: 3, title: 'Konversi & Unduh', description: 'Klik Konversi ke PDF dan unduh dokumen hasil konversinya.' },
    ],
    useCases: [
      { title: 'Arsip Dokumen', description: 'Konversi arsip DJVU ke dalam format PDF yang universal.', icon: "archive" },
      { title: 'Bagikan Buku Pindaian', description: 'Bagikan buku yang dipindai dalam format PDF agar kompatibilitasnya lebih luas.', icon: "share-2" },
      { title: 'Cetak Dokumen', description: 'Konversi DJVU menjadi PDF berkualitas tinggi untuk dicetak.', icon: "printer" },
    ],
    faq: [
      { question: 'Apa itu format DJVU?', answer: 'DjVu adalah format file yang dirancang khusus untuk menyimpan dokumen pindaian, terutama yang mengandung teks, gambar, dan foto. Format ini menawarkan kompresi yang lebih baik ketimbang PDF untuk konten hasil pindaian.' },
      { question: 'Berapa ukuran DPI yang harus saya pilih?', answer: '72 DPI cocok untuk tampilan web, 150 DPI untuk dokumen standar, dan 300 DPI untuk cetakan berkualitas tinggi.' },
      { question: 'Apakah teksnya dapat dicari?', answer: 'Teks akan dirender sebagai gambar. Jika Anda memerlukan teks yang bisa dicari, pertimbangkan untuk menggunakan alat OCR PDF kami setelah proses konversi selesai.' },
    ],
  },

  'fb2-to-pdf': {
    title: 'FB2 ke PDF',
    metaDescription: 'Konversi e-book FictionBook (FB2) menjadi PDF. Mendukung beberapa file sekaligus dengan rendering berkualitas tinggi.',
    keywords: ['fb2 ke pdf', 'konversi fb2', 'fictionbook ke pdf', 'konverter fb2', 'fb2.zip ke pdf'],
    description: `
      <p>FB2 ke PDF mengonversi file e-book FictionBook (FB2) menjadi dokumen PDF berkualitas tinggi. FB2 adalah format e-book berbasis XML yang populer dan banyak digunakan di Rusia serta Eropa Timur.</p>
      <p>Alat ini mendukung file .fb2 maupun .fb2.zip, serta dapat memproses beberapa file sekaligus. Alat ini akan mempertahankan format teks, gambar, dan struktur bab dari e-book Anda.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda dengan teknologi render tingkat lanjut, memastikan buku Anda tetap privat dan prosesnya berlangsung cepat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File FB2', description: 'Tarik dan lepas satu atau beberapa file .fb2 maupun .fb2.zip, atau klik untuk memilih dari perangkat Anda.' },
      { step: 2, title: 'Pilih Kualitas', description: 'Pilih kualitas output: Rendah (72 DPI), Sedang (150 DPI), atau Tinggi (300 DPI).' },
      { step: 3, title: 'Konversi & Unduh', description: 'Klik Konversi ke PDF dan unduh dokumen hasil konversinya.' },
    ],
    useCases: [
      { title: 'Cetak E-book', description: 'Konversi e-book FB2 ke PDF untuk pencetakan fisik.', icon: "printer" },
      { title: 'Konversi Massal', description: 'Konversi beberapa file FB2 ke PDF sekaligus secara bersamaan.', icon: "layers" },
      { title: 'Format Universal', description: 'Bagikan e-book dalam format PDF yang dapat dibuka di perangkat apa pun.', icon: "share-2" },
    ],
    faq: [
      { question: 'Bisakah saya mengonversi beberapa file FB2 sekaligus?', answer: 'Ya! Alat ini mendukung konversi massal (batch) hingga 20 file FB2 secara bersamaan.' },
      { question: 'Apakah file .fb2.zip didukung?', answer: 'Ya, alat ini akan otomatis mengekstrak dan mengonversi file FB2 yang ada di dalam arsip .fb2.zip.' },
      { question: 'Apakah pemformatannya dipertahankan?', answer: 'Ya! Alat ini menggunakan rendering FB2 secara native, mempertahankan pemformatan teks, gambar, dan struktur bab dengan tingkat akurasi yang tinggi (high fidelity).' },
    ],
  },
  // ==================== CONVERT FROM PDF ====================

  'pdf-to-jpg': {
    title: 'PDF ke JPG',
    metaDescription: 'Konversi halaman PDF menjadi gambar JPG. Ekstraksi berkualitas tinggi dengan resolusi yang dapat disesuaikan.',
    keywords: ['pdf ke jpg', 'pdf ke jpeg', 'konversi pdf ke gambar', 'ekstrak gambar pdf'],
    description: `
      <p>PDF ke JPG mengonversi halaman dokumen PDF menjadi gambar JPG berkualitas tinggi. Ekstrak semua halaman atau pilih halaman tertentu untuk dikonversi, dengan resolusi dan kualitas yang dapat disesuaikan.</p>
      <p>Sempurna untuk mengekstrak gambar dari PDF, membuat gambar mini (thumbnail), atau mengonversi dokumen untuk penggunaan di web.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Pilih Halaman dan Kualitas', description: 'Pilih halaman mana yang akan dikonversi dan atur opsi kualitas/DPI.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk mengekstrak gambar dan unduh sebagai arsip ZIP.' },
    ],
    useCases: [
      { title: 'Publikasi Web', description: 'Konversi halaman PDF menjadi gambar untuk penggunaan di situs web.', icon: "globe" },
      { title: 'Media Sosial', description: 'Ekstrak halaman sebagai gambar untuk dibagikan di media sosial.', icon: "share-2" },
      { title: 'Presentasi', description: 'Konversi slide PDF menjadi gambar untuk keperluan presentasi.', icon: "presentation" },
    ],
    faq: [
      { question: 'Pengaturan kualitas apa saja yang tersedia?', answer: 'Anda dapat mengatur DPI dari 72 hingga 300 dan kualitas JPEG dari 1-100.' },
      { question: 'Bisakah saya hanya mengonversi halaman tertentu?', answer: 'Ya, Anda dapat memilih halaman satu per satu atau rentang halaman untuk dikonversi.' },
      { question: 'Bagaimana penanganan file dengan banyak halaman?', answer: 'Setiap halaman akan menjadi file JPG terpisah, lalu diunduh sebagai arsip ZIP.' },
    ],
  },

  'pdf-to-png': {
    title: 'PDF ke PNG',
    metaDescription: 'Konversi halaman PDF menjadi gambar PNG. Kualitas tanpa penurunan (lossless) dengan dukungan transparansi.',
    keywords: ['pdf ke png', 'konversi pdf ke png', 'ekstraksi gambar pdf', 'konversi pdf lossless'],
    description: `
      <p>PDF ke PNG mengonversi halaman dokumen PDF menjadi gambar PNG berkualitas tinggi dengan kompresi lossless. Format PNG mempertahankan kualitas gambar dengan sempurna dan mendukung transparansi.</p>
      <p>Sangat ideal untuk mengekstrak grafik, diagram, atau konten apa pun di mana kualitas adalah hal yang sangat penting.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Konfigurasi Opsi', description: 'Pilih halaman dan atur opsi resolusi (DPI).' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk mengekstrak gambar PNG.' },
    ],
    useCases: [
      { title: 'Ekstraksi Grafik', description: 'Ekstrak diagram dan grafik dengan kualitas yang sempurna.', icon: "image" },
      { title: 'Aset Desain', description: 'Konversi desain PDF menjadi PNG untuk perangkat lunak pengeditan.', icon: "palette" },
      { title: 'Dokumentasi', description: 'Buat gambar berkualitas tinggi untuk dokumentasi teknis.', icon: "file-text" },
    ],
    faq: [
      { question: 'Mengapa memilih PNG daripada JPG?', answer: 'PNG menawarkan kompresi lossless (tanpa penurunan kualitas) dan dukungan transparansi, ideal untuk grafik dan teks.' },
      { question: 'Apakah latar belakang transparan didukung?', answer: 'Ya, halaman PDF yang memiliki transparansi akan dipertahankan di dalam output PNG.' },
      { question: 'Berapa DPI yang harus saya gunakan?', answer: 'Gunakan 150 DPI untuk dilihat di layar, dan 300 DPI untuk keperluan pencetakan.' },
    ],
  },

  'pdf-to-webp': {
    title: 'PDF ke WebP',
    metaDescription: 'Konversi halaman PDF menjadi gambar WebP. Format modern dengan kompresi yang sangat baik.',
    keywords: ['pdf ke webp', 'konversi pdf ke webp', 'format gambar modern', 'gambar untuk web'],
    description: `
      <p>PDF ke WebP mengonversi halaman dokumen PDF menjadi gambar WebP, format gambar modern dari Google yang menawarkan kompresi sangat baik sekaligus mempertahankan kualitas yang tinggi.</p>
      <p>Gambar WebP memiliki ukuran yang lebih kecil dari JPG atau PNG dengan kualitas yang sebanding, menjadikannya ideal untuk penggunaan di web.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Atur Opsi Kualitas', description: 'Pilih halaman dan atur pengaturan kualitas/kompresi.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk membuat gambar WebP.' },
    ],
    useCases: [
      { title: 'Optimasi Web', description: 'Buat gambar yang dioptimalkan untuk web dari konten PDF.', icon: "globe" },
      { title: 'Penghematan Bandwidth', description: 'Kurangi ukuran file gambar demi pemuatan halaman yang lebih cepat.', icon: 'zap' },
      { title: 'Situs Web Modern', description: 'Gunakan format gambar modern untuk proyek web masa kini.', icon: "layout" },
    ],
    faq: [
      { question: 'Apa itu format WebP?', answer: 'WebP adalah format gambar modern buatan Google yang menawarkan kompresi superior.' },
      { question: 'Apakah WebP didukung secara luas?', answer: 'Ya, semua browser modern telah mendukung format WebP.' },
      { question: 'Seberapa kecil file WebP?', answer: 'File WebP biasanya berukuran 25-35% lebih kecil dibandingkan file JPG yang setara.' },
    ],
  },

  'pdf-to-bmp': {
    title: 'PDF ke BMP',
    metaDescription: 'Konversi halaman PDF menjadi gambar bitmap BMP. Format tidak terkompresi untuk kompatibilitas maksimum.',
    keywords: ['pdf ke bmp', 'konversi pdf ke bitmap', 'gambar tidak terkompresi', 'format lawas'],
    description: `
      <p>PDF ke BMP mengonversi halaman dokumen PDF menjadi gambar bitmap BMP. BMP adalah format yang tidak dikompresi yang memastikan kompatibilitas maksimum dengan sistem dan aplikasi lawas.</p>
      <p>Meskipun file BMP lebih besar daripada format terkompresi, file ini menawarkan kualitas yang sempurna dan kompatibilitas yang universal.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Pilih Halaman', description: 'Pilih halaman yang akan dikonversi dan atur ukuran DPI.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk membuat gambar BMP.' },
    ],
    useCases: [
      { title: 'Sistem Lawas', description: 'Buat gambar yang kompatibel dengan perangkat lunak yang lebih lama.', icon: "history" },
      { title: 'Aplikasi Windows', description: 'Hasilkan file BMP untuk aplikasi khusus Windows.', icon: 'monitor' },
      { title: 'Arsip Tidak Terkompresi', description: 'Buat arsip gambar tanpa kompresi dari file PDF.', icon: "archive" },
    ],
    faq: [
      { question: 'Mengapa menggunakan format BMP?', answer: 'BMP menawarkan kualitas tanpa kompresi dan kompatibilitas maksimum dengan sistem lawas.' },
      { question: 'Apakah file BMP berukuran lebih besar?', answer: 'Ya, file BMP tidak dikompresi sehingga ukurannya jauh lebih besar daripada JPG atau PNG.' },
      { question: 'Kedalaman warna apa saja yang didukung?', answer: 'Kedalaman warna 24-bit dan 32-bit didukung.' },
    ],
  },

  'pdf-to-tiff': {
    title: 'PDF ke TIFF',
    metaDescription: 'Konversi PDF ke gambar TIFF. Kualitas profesional dengan dukungan multi-halaman.',
    keywords: ['pdf ke tiff', 'konversi pdf ke tiff', 'gambar profesional', 'tiff multi-halaman'],
    description: `
      <p>PDF ke TIFF mengonversi dokumen PDF menjadi gambar TIFF berkualitas tinggi. TIFF adalah format yang sering digunakan untuk pencetakan profesional dan pengarsipan karena menggunakan kompresi lossless.</p>
      <p>Buat TIFF satu halaman atau gabungkan semua halaman menjadi satu file TIFF multi-halaman. Sempurna untuk keperluan profesional maupun arsip.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Konfigurasi Output', description: 'Pilih TIFF satu halaman atau multi-halaman dan atur ukuran DPI.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk membuat gambar TIFF.' },
    ],
    useCases: [
      { title: 'Pencetakan Profesional', description: 'Buat file TIFF siap cetak dari dokumen PDF.', icon: "printer" },
      { title: 'Pengarsipan Dokumen', description: 'Arsipkan dokumen dalam format TIFF berkualitas tinggi.', icon: "archive" },
      { title: 'Penerbitan', description: 'Konversi PDF ke TIFF untuk alur kerja penerbitan.', icon: "book" },
    ],
    faq: [
      { question: 'Bisakah saya membuat TIFF multi-halaman?', answer: 'Ya, Anda dapat menggabungkan seluruh halaman PDF ke dalam satu file TIFF multi-halaman.' },
      { question: 'Opsi kompresi apa saja yang tersedia?', answer: 'Tersedia opsi LZW, ZIP, dan tanpa kompresi.' },
      { question: 'Berapa DPI yang harus digunakan untuk mencetak?', answer: 'Gunakan 300 DPI atau lebih tinggi untuk kualitas pencetakan profesional.' },
    ],
  },

  'pdf-to-svg': {
    title: 'PDF ke SVG',
    metaDescription: 'Konversi halaman PDF menjadi grafik vektor SVG. Skalabilitas sempurna di segala ukuran dengan kemampuan ekspor halaman individu.',
    keywords: ['pdf ke svg', 'konversi pdf ke svg', 'grafik vektor', 'pdf skalabel', 'konverter svg'],
    description: `
      <p>PDF ke SVG mengonversi setiap halaman dari dokumen PDF Anda menjadi Scalable Vector Graphic (SVG). SVG adalah format vektor yang mempertahankan kualitas yang sempurna di berbagai tingkat perbesaran (zoom) atau ukuran cetak.</p>
      <p>Berbeda dengan format raster (JPG, PNG), grafik SVG tidak pernah pecah atau berbintik (pixelated) saat diskalakan. Format ini sangat ideal untuk logo, diagram, gambar teknis, dan konten apa pun yang perlu ditampilkan dalam berbagai ukuran.</p>
      <p>Pratinjau setiap halaman yang dikonversi dan unduh satu per satu atau sebagai file ZIP. Semua pemrosesan terjadi secara lokal di browser Anda, memastikan privasi penuh untuk dokumen Anda.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk menelusuri dan memilih.' },
      { step: 2, title: 'Konfigurasi Opsi', description: 'Tetapkan kualitas resolusi dan secara opsional tentukan rentang halamannya.' },
      { step: 3, title: 'Pratinjau dan Konversi', description: 'Klik Konversi untuk memproses. Pratinjau setiap halaman dengan mengklik gambar mini (thumbnail).' },
      { step: 4, title: 'Unduh', description: 'Unduh file SVG satu per satu atau semua halaman sebagai arsip ZIP.' },
    ],
    useCases: [
      { title: 'Logo dan Grafik', description: 'Ekstrak logo dan grafik vektor dari PDF untuk digunakan pada perangkat lunak desain.', icon: "pen-tool" },
      { title: 'Diagram Teknis', description: 'Konversi gambar dan diagram teknis ke dalam format SVG yang dapat diskalakan.', icon: "ruler" },
      { title: 'Pengembangan Web', description: 'Buat file SVG yang siap untuk web dari konten PDF untuk kebutuhan situs web responsif.', icon: "globe" },
      { title: 'Cetak di Segala Ukuran', description: 'Hasilkan grafik vektor yang dapat dicetak dengan sempurna dalam berbagai ukuran.', icon: "printer" },
    ],
    faq: [
      { question: 'Apa itu format SVG?', answer: 'SVG (Scalable Vector Graphics) adalah format gambar vektor yang dapat diskalakan ke ukuran berapa pun tanpa kehilangan kualitas. Format ini banyak digunakan untuk logo, ikon, dan grafik web.' },
      { question: 'Apakah hasil SVG akan benar-benar berupa vektor?', answer: 'SVG akan berisi rendering halaman PDF beresolusi tinggi. Untuk PDF yang berisi konten vektor, Anda akan mendapatkan output yang tajam pada skala apa pun.' },
      { question: 'Bisakah saya melihat pratinjau sebelum mengunduh?', answer: 'Ya! Klik pada gambar mini mana saja untuk melihat pratinjau SVG ukuran penuh. Anda dapat mengunduh setiap halamannya satu per satu atau sekaligus.' },
      { question: 'Resolusi apa yang sebaiknya saya pilih?', answer: 'Resolusi yang lebih tinggi (216 atau 288 DPI) menghasilkan SVG yang lebih besar dan lebih detail. Gunakan pengaturan yang lebih rendah untuk pemrosesan yang lebih cepat dan ukuran file yang lebih kecil.' },
    ],
  },

  'pdf-to-greyscale': {
    title: 'PDF ke Hitam Putih (Greyscale)',
    metaDescription: 'Konversi PDF berwarna menjadi hitam putih. Kurangi ukuran file dan persiapkan untuk pencetakan hitam-putih.',
    keywords: ['pdf ke hitam putih', 'pdf grayscale', 'pdf hitam putih', 'hapus warna pdf'],
    description: `
      <p>PDF ke Hitam Putih mengonversi dokumen PDF berwarna menjadi skala abu-abu (greyscale). Hal ini akan mengurangi ukuran file dan menyiapkan dokumen untuk dicetak dalam warna hitam-putih.</p>
      <p>Konversi ini tetap mempertahankan kejernihan teks dan detail gambar sambil menghapus informasi warnanya. Sangat cocok untuk mencetak dokumen draf atau versi dokumen yang ramah mesin cetak.</p>
      <p>Semua konversi terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF berwarna Anda atau klik untuk memilih.' },
      { step: 2, title: 'Pratinjau Konversi', description: 'Lihat pratinjau bagaimana tampilan versi hitam putih nantinya.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk membuat PDF hitam putih.' },
    ],
    useCases: [
      { title: 'Penghematan Pencetakan', description: 'Ubah menjadi hitam putih untuk menghemat biaya pencetakan warna.', icon: "printer" },
      { title: 'Dokumen Draf', description: 'Buat draf hitam putih untuk keperluan peninjauan.', icon: "file-text" },
      { title: 'Pengurangan Ukuran File', description: 'Kurangi ukuran PDF dengan menghapus informasi warnanya.', icon: "minimize-2" },
    ],
    faq: [
      { question: 'Apakah teksnya akan tetap terbaca?', answer: 'Ya, kejernihan teks dipertahankan selama konversi hitam putih.' },
      { question: 'Seberapa besar ukuran file akan berkurang?', answer: 'Pengurangan ukuran bervariasi, tetapi bisa mencapai 20-50% untuk dokumen yang penuh dengan warna.' },
      { question: 'Bisakah saya hanya mengonversi halaman tertentu?', answer: 'Ya, Anda dapat memilih halaman mana yang akan dikonversi menjadi hitam putih.' },
    ],
  },

  'pdf-to-json': {
    title: 'PDF ke JSON',
    metaDescription: 'Ekstrak konten PDF menjadi format JSON. Dapatkan data terstruktur dari dokumen PDF.',
    keywords: ['pdf ke json', 'ekstrak data pdf', 'parser pdf', 'data pdf terstruktur'],
    description: `
      <p>PDF ke JSON mengekstrak konten dari dokumen PDF ke dalam format JSON yang terstruktur. Ekstrak teks, metadata, info halaman, dan struktur dokumen untuk penggunaan terprogram (programmatic).</p>
      <p>Sempurna untuk ekstraksi data, analisis dokumen, atau mengintegrasikan konten PDF ke dalam suatu aplikasi maupun alur kerja.</p>
      <p>Semua ekstraksi terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Pilih Data untuk Diekstrak', description: 'Pilih konten yang akan diekstrak: teks, metadata, atau strukturnya.' },
      { step: 3, title: 'Ekstrak dan Unduh', description: 'Klik Ekstrak untuk menghasilkan file JSON lalu unduh.' },
    ],
    useCases: [
      { title: 'Ekstraksi Data', description: 'Ekstrak data terstruktur dari dokumen PDF.', icon: "database" },
      { title: 'Analisis Dokumen', description: 'Analisis struktur dan konten PDF secara terprogram.', icon: "search" },
      { title: 'Integrasi', description: 'Impor konten PDF ke dalam aplikasi melalui JSON.', icon: "plug" },
    ],
    faq: [
      { question: 'Data apa saja yang diekstrak?', answer: 'Konten teks, metadata, dimensi halaman, font, dan struktur dokumen.' },
      { question: 'Apakah format JSON-nya terdokumentasi?', answer: 'Ya, skema JSON-nya konsisten dan terdokumentasi dengan baik.' },
      { question: 'Bisakah saya mengekstrak dari PDF hasil pindaian?', answer: 'PDF hasil pindaian membutuhkan OCR terlebih dahulu. Gunakan alat OCR PDF kami sebelum melakukan ekstraksi.' },
    ],
  },

  'pdf-to-pptx': {
    title: 'PDF ke PowerPoint',
    metaDescription: 'Konversi PDF menjadi presentasi PowerPoint. Setiap halaman menjadi satu slide berkualitas tinggi.',
    keywords: ['pdf ke pptx', 'pdf ke powerpoint', 'konversi slide pdf', 'presentasi pdf'],
    description: `
      <p>PDF ke PowerPoint mengonversi dokumen PDF Anda menjadi file presentasi PowerPoint yang dapat diedit (PPTX). Setiap halaman PDF akan diubah menjadi satu slide berkualitas tinggi, mempertahankan tata letak visualnya secara sempurna.</p>
      <p>Alat ini sangat ideal untuk mengonversi laporan, selebaran, atau konten PDF apa pun ke dalam format presentasi. Anda dapat memilih kualitas gambar (DPI) untuk menyeimbangkan antara ukuran file dan kejernihan visualnya.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat dan aman.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilihnya dari perangkat Anda.' },
      { step: 2, title: 'Pilih Pengaturan Kualitas', description: 'Pilih kualitas gambar (DPI) untuk setiap slide. DPI yang lebih tinggi menghasilkan kualitas lebih baik tetapi ukuran filenya menjadi lebih besar.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk membuat presentasi PowerPoint dan unduh file PPTX-nya.' },
    ],
    useCases: [
      { title: 'Pembuatan Presentasi', description: 'Konversi laporan atau dokumen PDF menjadi slide presentasi untuk sebuah rapat.', icon: "presentation" },
      { title: 'Materi Pelatihan', description: 'Ubah dokumen pelatihan PDF menjadi presentasi PowerPoint yang interaktif.', icon: "book-open" },
      { title: 'Repurposing Konten', description: 'Konversi konten PDF yang sudah ada ke format slide yang dapat diedit untuk kustomisasi lebih lanjut.', icon: "refresh-cw" },
    ],
    faq: [
      { question: 'Apakah slide-nya bisa diedit?', answer: 'Setiap slide berisi gambar berkualitas tinggi dari halaman PDF Anda. Anda kemudian dapat menambahkan teks, bentuk, atau anotasi di atasnya menggunakan PowerPoint.' },
      { question: 'Berapa DPI yang harus saya pilih?', answer: 'Gunakan 150 DPI untuk presentasi yang ditampilkan di layar. Gunakan 300 DPI jika ingin mencetak atau memerlukan kualitas tertinggi.' },
      { question: 'Bisakah saya mengonversi PDF yang berisi banyak halaman?', answer: 'Ya, setiap halaman PDF Anda akan menjadi satu slide tersendiri di dalam presentasi PowerPoint.' },
    ],
  },

  'pdf-to-excel': {
    title: 'PDF ke Excel',
    metaDescription: 'Konversi PDF menjadi lembar kerja Excel. Ekstrak tabel menjadi format XLSX.',
    keywords: ['pdf ke excel', 'pdf ke xlsx', 'konversi tabel pdf', 'ekstrak tabel'],
    description: `
      <p>PDF ke Excel mengonversi dokumen PDF Anda menjadi lembar kerja Microsoft Excel (XLSX) yang dapat diedit. Alat ini secara otomatis mendeteksi tabel di dalam PDF Anda dan mengekstraknya ke dalam lembaran (sheet) yang terpisah.</p>
      <p>Alat ini sangat ideal untuk menganalisis laporan keuangan, faktur, atau data apa pun yang disajikan dalam bentuk tabel. Tabel di setiap halaman akan disusun ke dalam sheet untuk memudahkan manipulasi data.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda, memastikan data Anda tetap privat dan aman.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Proses', description: 'Alat ini akan secara otomatis mengidentifikasi dan mengekstrak tabel di dalamnya.' },
      { step: 3, title: 'Unduh Excel', description: 'Unduh file Excel Anda yang berisi tabel yang telah diekstrak.' },
    ],
    useCases: [
      { title: 'Analisis Keuangan', description: 'Konversi laporan bank atau faktur ke Excel untuk dianalisis.', icon: "trending-up" },
      { title: 'Ekstraksi Data', description: 'Tarik tabel data dari laporan atau makalah penelitian.', icon: "database" },
      { title: 'Manajemen Inventaris', description: 'Konversi daftar inventaris dari file PDF ke spreadsheet.', icon: "clipboard" },
    ],
    faq: [
      { question: 'Bagaimana tabel ini ditangani?', answer: 'Tabel yang terdeteksi di setiap halaman akan diekstrak ke dalam lembar (sheet) yang sesuai di file Excel.' },
      { question: 'Bagaimana jika tidak ada tabel?', answer: 'Sebuah sheet info akan dibuat dan memberitahukan bahwa tidak ada tabel yang ditemukan.' },
      { question: 'Apakah format aslinya dipertahankan?', answer: 'Data akan dipertahankan, namun pemformatan visual yang kompleks mungkin akan disederhanakan untuk penggunaan spreadsheet.' },
    ],
  },

  // ==================== ORGANIZE & MANAGE ====================
  'ocr-pdf': {
    title: "PDF OCR",
    metaDescription: 'Jadikan PDF pindaian Anda dapat dicari dengan OCR. Ekstrak teks dari gambar dan dokumen hasil pindaian.',
    keywords: ["ocr pdf\nTipe", 'pdf yang dapat dicari', 'pengenalan teks', 'pindai menjadi teks'],
    description: `
      <p>OCR PDF menggunakan Pengenalan Karakter Optik (Optical Character Recognition) untuk mengekstrak teks dari dokumen hasil pindaian dan gambar di dalam PDF. Ubah PDF berbasis gambar menjadi dokumen teks yang dapat dicari dan dipilih teksnya.</p>
      <p>Dukungan untuk berbagai bahasa memastikan pengenalan teks yang akurat tanpa memandang bahasa asli dokumen. Tata letak aslinya juga akan dipertahankan sambil menyisipkan lapisan teks yang dapat dicari.</p>
      <p>Semua pemrosesan OCR terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Pindaian', description: 'Tarik dan lepas PDF hasil pindaian Anda atau klik untuk memilih.' },
      { step: 2, title: 'Pilih Bahasa', description: 'Pilih bahasa dokumen untuk hasil pengenalan yang lebih akurat.' },
      { step: 3, title: 'Proses dan Unduh', description: 'Klik Proses untuk menjalankan OCR dan mengunduh PDF yang dapat dicari.' },
    ],
    useCases: [
      { title: 'Digitalisasi Arsip', description: 'Jadikan arsip dokumen pindaian Anda dapat dicari secara otomatis.', icon: "archive" },
      { title: 'Pencarian Dokumen', description: 'Aktifkan pencarian teks di dalam dokumen yang dipindai.', icon: "search" },
      { title: 'Ekstraksi Teks', description: 'Ekstrak teks dari dokumen pindaian untuk diedit.', icon: "type" },
    ],
    faq: [
      { question: 'Bahasa apa saja yang didukung?', answer: 'Lebih dari 100 bahasa didukung, termasuk Inggris, Mandarin, Jepang, Korea, dan lainnya.' },
      { question: 'Apakah tata letak aslinya dipertahankan?', answer: 'Ya, tata letak visual aslinya dipertahankan sembari ditambahkan lapisan teks yang dapat dicari.' },
      { question: 'Seberapa akurat hasil OCR ini?', answer: 'Akurasi bergantung pada kualitas pindaian tetapi biasanya melampaui 95% untuk dokumen yang jelas.' },
    ],
  },

  'alternate-merge': {
    title: 'Penggabungan Berselang (Alternate Merge)',
    metaDescription: 'Gabungkan PDF dengan halaman yang berselang-seling. Gabungkan pindaian bagian depan dan belakang ke dalam satu dokumen.',
    keywords: ['penggabungan berselang', "sisipkan pdf", 'gabung pindaian', 'gabung bolak-balik'],
    description: `
      <p>Penggabungan Berselang (Alternate Merge) menggabungkan dua buah PDF dengan menyelipkan halamannya secara berselang-seling. Ini sangat cocok untuk menyatukan pindaian halaman depan dan belakang yang terpisah menjadi satu dokumen yang utuh.</p>
      <p>Unggah dua PDF dan alat ini akan menggabungkannya dengan mengambil satu halaman dari masing-masing file secara bergantian. Anda juga dapat membalikkan urutan salah satu dokumen untuk pindaian dari belakang ke depan (back-to-front).</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah Dua PDF', description: 'Unggah file PDF halaman depan dan file PDF halaman belakang.' },
      { step: 2, title: 'Konfigurasi Urutan', description: 'Pilih apakah akan membalik urutan dokumen kedua untuk pindaian belakang-ke-depan.' },
      { step: 3, title: 'Gabungkan dan Unduh', description: 'Klik Gabungkan untuk menyelipkan halamannya secara bergantian lalu unduh.' },
    ],
    useCases: [
      { title: 'Pemindaian Dupleks', description: 'Gabungkan hasil pindaian halaman depan dan belakang yang dipisah.', icon: "copy" },
      { title: 'Penyusunan Dokumen', description: 'Selipkan halaman secara bergantian dari dua dokumen yang berkaitan.', icon: "layers" },
      { title: 'Pemindaian Buku', description: 'Kombinasikan pindaian halaman ganjil dan genap menjadi sebuah buku yang utuh.', icon: "book" },
    ],
    faq: [
      { question: 'Bagaimana jika halamannya berbeda jumlahnya?', answer: 'Sisa halaman dari dokumen yang lebih panjang akan ditambahkan di bagian paling akhir.' },
      { question: 'Bisakah saya membalik urutan halaman?', answer: 'Ya, Anda dapat membalikkan urutan salah satu dokumen sebelum digabungkan.' },
      { question: 'Apakah ini berbeda dengan penggabungan PDF biasa?', answer: 'Ya, penggabungan biasa akan menyambung seluruh dokumen; alat ini akan menyelipkannya (interleave) secara bergantian.' },
    ],
  },

  'add-attachments': {
    title: 'Tambahkan Lampiran',
    metaDescription: 'Sematkan file ke dalam dokumen PDF. Lampirkan jenis file apa pun ke PDF Anda.',
    keywords: ['lampiran pdf', 'sematkan file', 'lampirkan ke pdf', 'portofolio pdf'],
    description: `
      <p>Tambahkan Lampiran akan menyematkan file jenis apa pun ke dalam dokumen PDF Anda. Lampirkan spreadsheet, gambar, file sumber (source files), atau dokumen lainnya untuk membuat paket PDF yang komprehensif.</p>
      <p>Lampiran akan disematkan di dalam file PDF dan dapat diekstrak oleh penerima menggunakan penampil PDF (PDF reader) apa saja. Sangat cocok untuk mendistribusikan file-file yang saling berkaitan sekaligus.</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan file Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Tambahkan Lampiran', description: 'Pilih file-file yang akan dilampirkan ke dalam PDF.' },
      { step: 3, title: 'Simpan dan Unduh', description: 'Klik Simpan untuk menyematkan lampiran lalu unduh.' },
    ],
    useCases: [
      { title: 'Paket Proyek', description: 'Bundel file proyek bersamaan dengan PDF dokumentasinya.', icon: "package" },
      { title: 'Distribusi Laporan', description: 'Lampirkan file data sumber (source data) ke file laporan PDF.', icon: "paperclip" },
      { title: 'Bundel Kontrak', description: 'Sertakan dokumen pendukung bersama file kontraknya.', icon: "file-text" },
    ],
    faq: [
      { question: 'Jenis file apa yang bisa dilampirkan?', answer: 'Jenis file apa pun dapat dilampirkan ke dalam sebuah PDF.' },
      { question: 'Apakah ada batasan ukuran?', answer: 'Total ukuran PDF beserta lampirannya tidak boleh melebihi 500MB.' },
      { question: 'Bisakah penerima mengekstrak lampirannya?', answer: 'Ya, alat pembaca PDF (PDF reader) apa pun dapat mengekstrak file yang disematkan tersebut.' },
    ],
  },

  'extract-attachments': {
    title: 'Ekstrak Lampiran',
    metaDescription: 'Ekstrak file yang disematkan di dalam PDF. Unduh semua lampiran dari dokumen PDF.',
    keywords: ['ekstrak lampiran', 'lampiran pdf', 'unduh file tersemat', 'ekstraksi pdf'],
    description: `
      <p>Ekstrak Lampiran mengambil seluruh file yang disematkan di dalam dokumen PDF. Anda dapat mengunduh lampiran tersebut satu per satu atau menyatukannya ke dalam satu arsip ZIP.</p>
      <p>Sangat ideal untuk mengambil file sumber (source files), data, atau materi pendukung yang disematkan di dalam paket PDF.</p>
      <p>Semua ekstraksi terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Lihat Lampiran', description: 'Lihat daftar seluruh file yang disematkan di dalam PDF.' },
      { step: 3, title: 'Ekstrak dan Unduh', description: 'Unduh file secara individual atau unduh semua sebagai format ZIP.' },
    ],
    useCases: [
      { title: 'Akses File Sumber', description: 'Ekstrak data asli dari laporan PDF.', icon: "download" },
      { title: 'Pulihkan Lampiran', description: 'Ambil kembali file yang disematkan dari paket PDF.', icon: "folder-open" },
      { title: 'Ekstraksi Massal', description: 'Ekstrak lampiran dari beberapa file PDF sekaligus.', icon: "layers" },
    ],
    faq: [
      { question: 'Bagaimana jika tidak ada lampiran di dalamnya?', answer: 'Alat ini akan memberi tahu Anda jika tidak ditemukan file yang disematkan.' },
      { question: 'Apakah semua jenis lampiran didukung?', answer: 'Ya, semua jenis file yang disematkan bisa diekstrak.' },
      { question: 'Bisakah saya mengekstrak dari beberapa PDF sekaligus?', answer: 'Ya, Anda dapat memproses beberapa PDF dan mengunduh seluruh lampirannya.' },
    ],
  },

  'extract-images': {
    title: 'Ekstrak Gambar dari PDF',
    metaDescription: 'Ekstrak seluruh gambar yang ada di dalam file PDF. Unduh satu per satu atau sebagai arsip ZIP. Filter gambar kecil secara otomatis.',
    keywords: ['ekstrak gambar pdf', 'ekstraksi gambar pdf', 'ambil gambar dari pdf', 'unduh gambar pdf', 'pdf ke gambar'],
    description: `
      <p>Ekstrak Gambar dari PDF akan mengambil seluruh gambar yang tersemat di dalam dokumen PDF Anda. Unduh gambar berkualitas tinggi secara individual atau dalam bentuk arsip ZIP yang praktis.</p>
      <p>Alat ini secara otomatis akan menyaring (filter) gambar-gambar berukuran kecil seperti ikon maupun dekorasi, berdasarkan batas ukuran yang bisa disesuaikan. Proses beberapa PDF sekaligus untuk ekstraksi massal yang efisien.</p>
      <p>Semua ekstraksi terjadi di browser Anda, memastikan dokumen Anda tetap privat dan aman.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas satu atau lebih file PDF, atau klik untuk memilih dari perangkat Anda.' },
      { step: 2, title: 'Atur Opsi Filter', description: 'Sesuaikan lebar, tinggi, dan ukuran file minimum untuk menyaring gambar-gambar kecil yang tidak diinginkan.' },
      { step: 3, title: 'Ekstrak Gambar', description: 'Klik Ekstrak untuk mencari seluruh gambar yang disematkan di PDF Anda.' },
      { step: 4, title: 'Unduh', description: 'Unduh gambar satu per satu atau seluruh gambar sekaligus dalam arsip ZIP.' },
    ],
    useCases: [
      { title: 'Pemulihan Foto', description: 'Ekstrak foto dan gambar yang ada dalam dokumen PDF untuk digunakan kembali atau diarsipkan.', icon: "image" },
      { title: 'Koleksi Aset', description: 'Kumpulkan semua grafik dan gambar dari PDF laporan, presentasi, atau brosur.', icon: "folder" },
      { title: 'Repurposing Konten', description: 'Ekstrak gambar dari PDF untuk digunakan pada dokumen, situs web, atau presentasi lainnya.', icon: "refresh-cw" },
    ],
    faq: [
      { question: 'Format gambar apa yang diekstrak?', answer: 'Gambar diekstrak dalam format aslinya (JPEG, PNG, dll.) sebisa mungkin, atau diubah menjadi PNG untuk data gambar mentah (raw).' },
      { question: 'Mengapa ada beberapa gambar yang hilang?', answer: 'Gambar kecil di bawah batas ukuran akan difilter secara otomatis. Sesuaikan pengaturan filter untuk mengekstrak gambar yang lebih kecil.' },
      { question: 'Bisakah saya mengekstrak dari PDF hasil pindaian?', answer: 'PDF hasil pindaian biasanya memuat pindaian sebagai satu gambar besar per halamannya. Gunakan alat "PDF ke Gambar" sebagai gantinya jika ingin konversi halaman per halaman.' },
    ],
  },

  'edit-attachments': {
    title: 'Edit Lampiran',
    metaDescription: 'Kelola lampiran file PDF. Lihat, ganti nama, dan hapus file yang disematkan.',
    keywords: ['edit lampiran', 'kelola file pdf', 'hapus lampiran', 'ganti nama lampiran'],
    description: `
      <p>Edit Lampiran memungkinkan Anda mengelola file yang disematkan di dalam dokumen PDF. Anda dapat melihat semua lampiran, mengganti namanya, atau menghapus file yang tidak lagi diinginkan dari PDF.</p>
      <p>Sempurna untuk membersihkan dokumen paket PDF atau memperbarui informasi lampirannya sebelum disebarluaskan.</p>
      <p>Semua pengeditan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Kelola Lampiran', description: 'Lihat, ganti nama, atau hapus file yang disematkan di dalam PDF.' },
      { step: 3, title: 'Simpan dan Unduh', description: 'Klik Simpan untuk menerapkan perubahan Anda lalu unduh.' },
    ],
    useCases: [
      { title: 'Bersihkan PDF', description: 'Hapus lampiran yang tidak diperlukan dari paket PDF.', icon: "trash-2" },
      { title: 'Ganti Nama File', description: 'Perbarui nama file lampiran agar lebih jelas bagi penerima.', icon: "edit" },
      { title: 'Tinjau Isi Lampiran', description: 'Audit file-file yang disematkan sebelum disebarluaskan.', icon: "eye" },
    ],
    faq: [
      { question: 'Bisakah saya menambahkan lampiran baru di sini?', answer: 'Gunakan alat Tambahkan Lampiran untuk menyematkan file baru.' },
      { question: 'Apakah penghapusan ini bersifat permanen?', answer: 'Ya, lampiran yang dihapus tidak akan dapat dipulihkan dari file output Anda.' },
      { question: 'Bisakah saya melihat pratinjau lampiran?', answer: 'Anda bisa melihat nama dan ukuran filenya; gunakan alat Ekstrak Lampiran untuk melihat isi filenya.' },
    ],
  },

  'divide-pages': {
    title: 'Bagi Halaman',
    metaDescription: 'Bagi satu halaman PDF menjadi beberapa bagian. Pisahkan halaman secara horizontal maupun vertikal.',
    keywords: ['bagi halaman pdf', 'pisahkan halaman', 'potong halaman pdf', 'bagian halaman'],
    description: `
      <p>Bagi Halaman memisahkan halaman PDF menjadi beberapa bagian. Anda bisa memotong halaman secara horizontal, vertikal, maupun format kisi (grid) untuk menciptakan beberapa halaman baru dari satu halaman saja.</p>
      <p>Sangat cocok untuk memecah hasil pindaian dokumen yang berisi beberapa item per halaman, atau untuk memotong halaman berformat besar menjadi ukuran standar.</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Atur Pembagian', description: 'Pilih format horizontal, vertikal, atau kisi, dan atur jumlah bagiannya.' },
      { step: 3, title: 'Bagi dan Unduh', description: 'Klik Bagi Halaman untuk memecah halaman dan mengunduh hasilnya.' },
    ],
    useCases: [
      { title: 'Bagi Pindaian', description: 'Bagi halaman hasil pindaian yang memuat beberapa dokumen di dalamnya.', icon: "scissors" },
      { title: 'Ubah Ukuran Halaman', description: 'Bagi halaman besar menjadi beberapa halaman ukuran kertas standar.', icon: "maximize-2" },
      { title: 'Buat Kartu', description: 'Bagi halaman ke dalam beberapa bagian seukuran kartu untuk kebutuhan cetak.', icon: "grid" },
    ],
    faq: [
      { question: 'Bisakah saya membaginya ke dalam bagian yang tidak sama besar?', answer: 'Saat ini pembagian akan berukuran sama besar. Gunakan alat Potong PDF jika ingin ukuran kustom.' },
      { question: 'Apa yang terjadi pada konten di garis potong?', answer: 'Konten akan terpotong pada garis pembagian tersebut; pastikan konten penting tidak berada di pas garis potong.' },
      { question: 'Bisakah saya membagi halaman tertentu saja?', answer: 'Ya, Anda dapat memilih halaman mana saja yang akan dibagi.' },
    ],
  },

  'add-blank-page': {
    title: 'Tambahkan Halaman Kosong',
    metaDescription: 'Sisipkan halaman kosong ke dalam dokumen PDF. Tambahkan halaman kosong di posisi mana saja.',
    keywords: ['tambah halaman kosong', 'sisipkan halaman', 'halaman kosong', 'penyisipan halaman pdf'],
    description: `
      <p>Tambahkan Halaman Kosong akan menyisipkan halaman kosong ke dalam dokumen PDF Anda di posisi mana saja yang diinginkan. Tambahkan halaman sebelum, sesudah, atau di antara halaman-halaman yang ada, dengan ukuran halaman yang bisa disesuaikan.</p>
      <p>Sempurna untuk menyediakan ruang catatan, membuat halaman pembatas (divider), atau mempersiapkan dokumen untuk dicetak.</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Pilih Posisi', description: 'Tentukan di mana halaman kosong akan disisipkan dan berapa jumlah halamannya.' },
      { step: 3, title: 'Tambahkan dan Unduh', description: 'Klik Tambahkan untuk menyisipkan halaman dan mengunduh hasilnya.' },
    ],
    useCases: [
      { title: 'Ruang Catatan', description: 'Tambahkan halaman kosong khusus untuk mencatat dengan tulisan tangan.', icon: "edit-3" },
      { title: 'Pemisah Bagian', description: 'Sisipkan halaman kosong sebagai pemisah (divider) antar bab dokumen.', icon: "minus" },
      { title: 'Persiapan Cetak', description: 'Tambahkan halaman agar posisi halamannya tepat untuk pencetakan dua sisi (dupleks).', icon: "printer" },
    ],
    faq: [
      { question: 'Bisakah saya memilih ukuran halamannya?', answer: 'Ya, halaman kosong dapat menyesuaikan dengan ukuran halaman yang sudah ada atau menggunakan ukuran kustom.' },
      { question: 'Bisakah saya menambahkan beberapa halaman kosong sekaligus?', answer: 'Ya, Anda bisa menambahkan berapa pun jumlah halaman kosong dalam satu waktu.' },
      { question: 'Bisakah saya menambahkan halaman berwarna?', answer: 'Gunakan alat Warna Latar Belakang (Background Color) setelah menambahkan halaman kosong untuk memberikan warna.' },
    ],
  },

  'reverse-pages': {
    title: 'Balikkan Halaman',
    metaDescription: 'Balikkan urutan halaman PDF. Tukar posisi halaman dokumen dari halaman paling akhir menjadi yang pertama.',
    keywords: ['balikkan pdf', 'balik urutan halaman', 'balikan halaman', 'balikkan dokumen'],
    description: `
      <p>Balikkan Halaman (Reverse Pages) akan memutarbalikkan urutan halaman di dalam dokumen PDF Anda, di mana halaman terakhir akan menjadi halaman pertama dan halaman pertama menjadi yang terakhir. Sangat berguna untuk dokumen yang dipindai dengan urutan terbalik, atau untuk kebutuhan cetak tertentu.</p>
      <p>Alat ini akan memproses keseluruhan dokumen atau hanya pada rentang halaman yang dipilih, tanpa merusak konten atau formatnya.</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Pilih Halaman', description: 'Pilih apakah ingin membalikkan urutan untuk seluruh halaman atau pada rentang tertentu saja.' },
      { step: 3, title: 'Balikkan dan Unduh', description: 'Klik Balikkan untuk menukar urutan halamannya lalu unduh file-nya.' },
    ],
    useCases: [
      { title: 'Perbaiki Urutan Pindaian', description: 'Koreksi dokumen yang tidak sengaja dipindai dalam urutan yang terbalik.', icon: "refresh-cw" },
      { title: 'Persiapan Cetak', description: 'Balikkan urutan halaman untuk memenuhi kebutuhan pencetakan (printing) tertentu.', icon: "printer" },
      { title: 'Penyusunan Ulang Dokumen', description: 'Ubah urutan dokumen dengan cepat dari belakang ke depan untuk ditinjau.', icon: "arrow-up-down" },
    ],
    faq: [
      { question: 'Apakah daftar markah (bookmarks) akan ikut diperbarui?', answer: 'Ya, markah akan ikut diperbarui dan mengarah pada posisi halaman terbalik yang benar.' },
      { question: 'Bisakah saya membalikkan beberapa halaman tertentu saja?', answer: 'Ya, Anda dapat memilih rentang halaman (page range) untuk dibalik urutannya.' },
      { question: 'Apakah fungsinya sama dengan "Putar" (Rotate)?', answer: 'Tidak, Balikkan (Reverse) mengubah "urutan" halaman, sementara Putar (Rotate) mengubah "orientasi" atau posisi halamannya.' },
    ],
  },

  'rotate-pdf': {
    title: 'Putar PDF',
    metaDescription: 'Putar halaman PDF. Ubah orientasi halaman sebesar 90, 180, atau 270 derajat.',
    keywords: ['putar pdf', 'balik orientasi halaman pdf', 'rotasi pdf', 'perbaiki orientasi'],
    description: `
      <p>Putar PDF mengubah orientasi halaman dalam dokumen Anda sebesar 90, 180, atau 270 derajat. Alat ini sangat praktis untuk memperbaiki dokumen pindaian yang posisinya salah, memutar halaman lanskap, atau sekadar mengubah orientasinya agar lebih mudah dibaca.</p>
      <p>Putar seluruh halaman secara bersamaan atau pilih halaman tertentu untuk diputar secara individual. Alat ini tidak mengubah kualitas maupun memformat isi dokumen Anda.</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Pilih Sudut Putaran', description: 'Tentukan sudut putaran (90°, 180°, 270°) dan halaman mana saja yang ingin diputar.' },
      { step: 3, title: 'Putar dan Unduh', description: 'Klik Putar untuk memproses perubahannya dan unduh hasilnya.' },
    ],
    useCases: [
      { title: 'Perbaiki Dokumen Pindaian', description: 'Koreksi orientasi atau posisi dokumen yang dipindai terbalik.', icon: "rotate-cw" },
      { title: 'Halaman Lanskap', description: 'Putar halaman yang berformat lanskap (horizontal) agar terlihat tegak dan mudah dibaca.', icon: 'monitor' },
      { title: 'Orientasi Campuran', description: 'Seragamkan seluruh orientasi dokumen yang arahnya berbeda-beda.', icon: "layout" },
    ],
    faq: [
      { question: 'Bisakah saya memutar setiap halaman dengan derajat yang berbeda?', answer: 'Ya, Anda bisa menerapkan rotasi dengan arah putaran yang berbeda untuk halaman yang berbeda.' },
      { question: 'Apakah memutar halaman akan mengurangi kualitas pencetakan?', answer: 'Tidak, memutar halaman hanya akan mengubah arah penampilannya, tidak mengurangi kualitas konten.' },
      { question: 'Bisakah saya memutar halaman dengan sudut bebas (custom)?', answer: 'Untuk alat "Putar PDF" ini, rotasi dibatasi kelipatan 90 derajat (90, 180, 270). Gunakan alat "Putar Kustom" untuk memutar di luar derajat tersebut.' },
    ],
  },

  'n-up-pdf': {
    title: "PDF N-Up",
    metaDescription: 'Cetak beberapa halaman PDF dalam satu lembar kertas. Buat tata letak 2-up, 4-up, atau tata letak kisi kustom.',
    keywords: ['n-up pdf', 'banyak halaman per lembar', 'pencetakan 2-up', 'penyusunan halaman'],
    description: `
      <p>N-Up PDF menyusun beberapa halaman dokumen dan menggabungkannya ke dalam satu lembar halaman. Alat ini dapat membuat tata letak jenis 2-up, 4-up, 6-up, 9-up, maupun format kustom. Sangat ideal untuk menghemat kertas saat dicetak atau jika Anda ingin membuat format selebaran (handout).</p>
      <p>Pilih dari templat yang sudah ada atau buat sendiri pengaturannya. Alat ini akan menyesuaikan skala serta memosisikan halamannya secara otomatis untuk hasil yang optimal.</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Pilih Tata Letak', description: 'Tentukan opsi 2-up, 4-up, 6-up, 9-up, atau gunakan kisi khusus (custom grid).' },
      { step: 3, title: 'Buat dan Unduh', description: 'Klik Buat untuk menyusun PDF n-up-nya dan unduh.' },
    ],
    useCases: [
      { title: 'Menghemat Kertas', description: 'Cetak beberapa halaman sekaligus dalam satu lembar kertas.', icon: "leaf" },
      { title: 'Membuat Selebaran', description: 'Buat selebaran dari banyak slide presentasi menjadi bentuk yang lebih ringkas.', icon: "file-text" },
      { title: 'Meninjau Dokumen', description: 'Cetak dokumen berukuran lebih kecil jika hanya digunakan untuk draft atau ditinjau ulang.', icon: "eye" },
    ],
    faq: [
      { question: 'Tata letak (layout) apa saja yang didukung?', answer: 'Tata letak berupa 2-up, 4-up, 6-up, 9-up, serta tata letak kisi (grid) yang bisa Anda atur sendiri.' },
      { question: 'Bisakah saya menambahkan batas pemisah (border) di setiap halamannya?', answer: 'Ya, Anda dapat menambahkan batas pemisah (borders) serta jarak spasi (gutters) antar halaman yang digabung.' },
      { question: 'Apakah urutan membacanya dipertahankan?', answer: 'Ya, halaman-halaman akan diurutkan secara wajar sesuai urutan membaca (dari kiri ke kanan, lalu atas ke bawah).' },
    ],
  },

  'combine-single-page': {
    title: 'Kombinasikan ke Satu Halaman',
    metaDescription: 'Rangkai halaman PDF menjadi satu halaman yang tersambung. Buat dokumen satu halaman yang dapat digulir.',
    keywords: ['kombinasi halaman', 'pdf halaman tunggal', 'rangkai halaman', 'gulir terus menerus'],
    description: `
      <p>Kombinasikan ke Satu Halaman (Combine to Single Page) merangkai semua halaman PDF menjadi satu halaman panjang yang utuh dan tersambung. Sangat sempurna jika Anda ingin membuat dokumen yang bisa digulir (scrolling) dengan halus, terutama untuk tampilan web atau bahan bacaan yang tidak ingin terputus-putus.</p>
      <p>Halaman akan digabungkan secara vertikal lengkap dengan jarak spasi (spacing) yang bisa Anda atur. Hasil akhirnya adalah sebuah halaman panjang yang berisikan semua konten dari dokumen tersebut.</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Atur Jarak Spasi', description: 'Tentukan jarak celah (gap) antara setiap halamannya.' },
      { step: 3, title: 'Kombinasikan dan Unduh', description: 'Klik Kombinasikan untuk merangkai halaman ke dalam bentuk PDF halaman tunggal (single-page).' },
    ],
    useCases: [
      { title: 'Dokumen Khusus Web', description: 'Buat file PDF panjang yang dapat digulir (scrolling) untuk disematkan pada sebuah website.', icon: "globe" },
      { title: 'Bahan Bacaan yang Mengalir', description: 'Ubah format halaman terpisah menjadi dokumen yang mengalir agar nyaman dibaca tanpa henti.', icon: "scroll" },
      { title: 'Konten Bentuk Panjang', description: 'Gabungkan seluruh halaman demi kelancaran saat membaca tulisan atau laporan yang sangat panjang.', icon: "file-text" },
    ],
    faq: [
      { question: 'Apakah ada batasan halamannya?', answer: 'Dokumen yang terlalu panjang mungkin saja terbatas oleh alokasi memori browser komputer Anda.' },
      { question: 'Bisakah saya menyertakan batas/garis pemisah di antara setiap halamannya?', answer: 'Ya, Anda bisa menambahkan garis atau ruang kosong sebagai pembatas antar halaman aslinya.' },
      { question: 'Apakah hasilnya bagus jika dicetak?', answer: 'Hasilnya jauh lebih optimal untuk dilihat di layar perangkat. Jika ingin dicetak, lebih baik gunakan alat "N-Up PDF".' },
    ],
  },
'view-metadata': {
    title: 'Lihat Metadata',
    metaDescription: 'Lihat properti dokumen PDF. Lihat penulis, judul, tanggal, dan metadata lainnya.',
    keywords: ['metadata pdf', 'properti dokumen', 'info pdf', 'lihat detail pdf'],
    description: `
      <p>Lihat Metadata akan menampilkan seluruh properti dokumen dan metadata dari file PDF Anda. Lihat nama penulis, judul, subjek, kata kunci, tanggal pembuatan, tanggal modifikasi, dan masih banyak lagi.</p>
      <p>Sangat berguna untuk melakukan audit dokumen, memeriksa informasi file, atau memverifikasi keaslian dokumen.</p>
      <p>Semua peninjauan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Lihat Properti', description: 'Lihat semua metadata yang ditampilkan dalam format yang terorganisir dengan rapi.' },
      { step: 3, title: 'Ekspor Jika Perlu', description: 'Ekspor metadata sebagai file JSON secara opsional.' },
    ],
    useCases: [
      { title: 'Audit Dokumen', description: 'Tinjau properti dokumen untuk keperluan kepatuhan (compliance).', icon: "clipboard-check" },
      { title: 'Verifikasi Keaslian', description: 'Periksa tanggal pembuatan dan informasi penulis.', icon: "shield" },
      { title: 'Informasi File', description: 'Dapatkan informasi terperinci mengenai file PDF.', icon: "info" },
    ],
    faq: [
      { question: 'Metadata apa saja yang ditampilkan?', answer: 'Judul, penulis, subjek, kata kunci, aplikasi pembuat, produsen (producer), tanggal, dan versi PDF.' },
      { question: 'Bisakah saya mengedit metadatanya di sini?', answer: 'Gunakan alat Edit Metadata untuk mengubah properti dokumen.' },
      { question: 'Apakah metadata XMP juga disertakan?', answer: 'Ya, baik metadata standar maupun XMP akan ditampilkan.' },
    ],
  },

  'edit-metadata': {
    title: 'Edit Metadata',
    metaDescription: 'Edit properti dokumen PDF. Ubah judul, penulis, subjek, dan kata kunci.',
    keywords: ['edit metadata pdf', 'ubah properti pdf', 'penulis pdf', 'info dokumen'],
    description: `
      <p>Edit Metadata memungkinkan Anda untuk memodifikasi properti dokumen di dalam file PDF Anda. Ubah judul, nama penulis, subjek, kata kunci, dan berbagai kolom metadata lainnya.</p>
      <p>Sempurna untuk mengoreksi informasi dokumen, menambahkan atribusi yang tepat, atau mempersiapkan file sebelum disebarluaskan.</p>
      <p>Semua pengeditan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Edit Properti', description: 'Ubah judul, penulis, subjek, kata kunci, dan kolom lainnya.' },
      { step: 3, title: 'Simpan dan Unduh', description: 'Klik Simpan untuk menerapkan perubahan lalu unduh.' },
    ],
    useCases: [
      { title: 'Tambahkan Atribusi', description: 'Tetapkan informasi penulis dan pembuat yang benar.', icon: "user" },
      { title: 'Optimasi SEO', description: 'Tambahkan kata kunci dan deskripsi agar mudah dicari.', icon: "search" },
      { title: 'Persiapan Dokumen', description: 'Siapkan dokumen dengan metadata yang tepat sebelum dibagikan.', icon: "file-check" },
    ],
    faq: [
      { question: 'Kolom apa saja yang bisa diedit?', answer: 'Kolom judul, penulis, subjek, kata kunci, pembuat (creator), dan produsen (producer).' },
      { question: 'Bisakah saya menghapus semua metadata?', answer: 'Gunakan alat Hapus Metadata untuk melucuti semua properti dokumen sekaligus.' },
      { question: 'Apakah tanggalnya bisa diedit?', answer: 'Tanggal pembuatan dan modifikasi akan diperbarui secara otomatis.' },
    ],
  },

  'pdf-to-zip': {
    title: 'PDF ke ZIP',
    metaDescription: 'Kemas beberapa file PDF menjadi satu arsip ZIP. Kompres dan bundel file PDF.',
    keywords: ['pdf ke zip', 'kompres pdf', 'bundel pdf', 'arsip pdf'],
    description: `
      <p>PDF ke ZIP akan mengemas beberapa file PDF menjadi satu buah arsip ZIP. Kompres dan bundel PDF Anda agar lebih mudah dibagikan, disimpan, atau dicadangkan (backup).</p>
      <p>Alat ini membuat arsip terkompresi yang berisi seluruh file PDF Anda, sehingga mengurangi ukuran total dan menyederhanakan manajemen file.</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan file Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF', description: 'Tarik dan lepas beberapa file PDF sekaligus atau klik untuk memilih.' },
      { step: 2, title: 'Konfigurasi Arsip', description: 'Atur nama arsip dan tingkat kompresinya secara opsional.' },
      { step: 3, title: 'Buat dan Unduh', description: 'Klik Buat untuk menghasilkan arsip ZIP.' },
    ],
    useCases: [
      { title: 'Berbagi File', description: 'Bundel beberapa PDF agar lebih mudah dibagikan sekaligus.', icon: "share-2" },
      { title: 'Pembuatan Cadangan', description: 'Buat cadangan yang terkompresi dari koleksi PDF Anda.', icon: "archive" },
      { title: 'Lampiran Email', description: 'Kombinasikan PDF ke dalam satu lampiran untuk dikirim melalui email.', icon: "mail" },
    ],
    faq: [
      { question: 'Berapa besar kompresi yang diterapkan?', answer: 'Kompresi ZIP biasanya mengurangi ukuran total sekitar 10-30%.' },
      { question: 'Apakah ada batasan jumlah file?', answer: 'Anda dapat memasukkan hingga 100 PDF ke dalam satu arsip.' },
      { question: 'Bisakah saya menambahkan kata sandi?', answer: 'Pembuatan ZIP yang dilindungi kata sandi saat ini belum didukung.' },
    ],
  },

  'compare-pdfs': {
    title: 'Bandingkan PDF',
    metaDescription: 'Bandingkan dua dokumen PDF. Sorot perbedaan antara beberapa versi.',
    keywords: ['bandingkan pdf', "perbedaan pdf", 'perbandingan dokumen', 'perbandingan versi'],
    description: "\n      <p>Bandingkan PDF akan menganalisis dua dokumen PDF dan menyorot perbedaan yang ada di antara keduanya. Sempurna untuk meninjau revisi dokumen, memeriksa perubahan kontrak, atau memverifikasi pengeditan.</p>\n      <p>Lihat halaman berdampingan, berpindah antar pasangan halaman, dan saring perubahan yang disorot. Membandingkan teks yang diekstrak dan nama font. Gambar pindaian dan perubahan visual lain tidak dibandingkan.</p>\n      <p>Semua perbandingan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>\n    ",
    howToUse: [
      { step: 1, title: 'Unggah Dua PDF', description: 'Unggah dokumen PDF versi asli dan versi yang dimodifikasi.' },
      { step: 2, title: "Bandingkan PDF", description: "Lihat halaman berdampingan, berpindah antar pasangan halaman, dan saring perubahan yang disorot." },
      { step: 3, title: "Filter Sorotan", description: "Perubahan Teks · Perubahan font · Header dan footer · Teks yang dipindahkan" },
    ],
    useCases: [
      { title: 'Tinjauan Kontrak', description: 'Bandingkan berbagai versi kontrak untuk mengidentifikasi perubahan yang ada.', icon: "file-text" },
      { title: 'Revisi Dokumen', description: 'Tinjau setiap hasil pengeditan di antara beberapa versi dokumen.', icon: "git-compare" },
      { title: 'Jaminan Kualitas', description: 'Pastikan bahwa hanya perubahan yang diinginkan saja yang telah dilakukan.', icon: "check-circle" },
    ],
    faq: [
      { question: 'Jenis perbedaan apa saja yang dapat dideteksi?', answer: "Perubahan Teks · Perubahan font · Header dan footer · Teks yang dipindahkan" },
      { question: 'Bisakah saya membandingkan dokumen hasil pindaian?', answer: "Membandingkan teks yang diekstrak dan nama font. Gambar pindaian dan perubahan visual lain tidak dibandingkan." },
      { question: 'Apakah perbandingan visual (gambar) juga tersedia?', answer: "Lihat halaman berdampingan, berpindah antar pasangan halaman, dan saring perubahan yang disorot. Membandingkan teks yang diekstrak dan nama font. Gambar pindaian dan perubahan visual lain tidak dibandingkan." },
    ],
  },

  'posterize-pdf': {
    title: 'Posterisasi PDF',
    metaDescription: 'Bagi halaman PDF berukuran besar menjadi potongan yang bisa dicetak. Buat poster dari halaman PDF.',
    keywords: ['posterisasi pdf', 'potongan pdf', 'cetak format besar', 'poster pdf'],
    description: `
      <p>Posterisasi PDF memecah halaman PDF berukuran besar ke dalam potongan-potongan (tiles) kecil yang bisa dicetak pada kertas standar lalu dirangkai menjadi sebuah poster. Sempurna untuk mencetak diagram besar, peta, atau karya seni.</p>
      <p>Atur ukuran kisi (grid) dan tumpang-tindih (overlap) untuk memudahkan perakitan. Alat ini secara otomatis akan menghitung dimensi setiap potongan untuk menyesuaikan dengan target ukuran output Anda.</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas PDF berformat besar milik Anda atau klik untuk memilih.' },
      { step: 2, title: 'Konfigurasi Potongan', description: 'Atur ukuran kisi, overlap (tumpang tindih), dan ukuran kertas cetak (output).' },
      { step: 3, title: 'Buat dan Unduh', description: 'Klik Buat untuk menghasilkan potongan-potongan yang siap dicetak.' },
    ],
    useCases: [
      { title: 'Pencetakan Poster', description: 'Cetak poster berukuran besar menggunakan kertas standar.', icon: "maximize-2" },
      { title: 'Pencetakan Peta', description: 'Cetak peta besar yang terbagi-bagi untuk dirangkai nantinya.', icon: "map" },
      { title: 'Reproduksi Karya Seni', description: 'Buat cetakan berukuran besar dari karya seni PDF.', icon: "image" },
    ],
    faq: [
      { question: 'Berapa jarak tumpang tindih (overlap) yang harus saya gunakan?', answer: 'Overlap sebesar 10-20mm sangat disarankan agar lebih mudah disejajarkan saat dirangkai.' },
      { question: 'Bisakah saya menambahkan tanda potong (crop marks)?', answer: 'Ya, tanda potong dapat ditambahkan untuk membantu pemotongan dan penjajarannya.' },
      { question: 'Ukuran kertas apa saja yang didukung?', answer: 'A4, Letter, A3, dan ukuran kustom lainnya juga didukung.' },
    ],
  },

  // ==================== OPTIMIZE & REPAIR ====================
  'fix-page-size': {
    title: 'Perbaiki Ukuran Halaman',
    metaDescription: 'Standarkan ukuran halaman PDF. Konversi semua halaman menjadi satu ukuran (dimensi) yang seragam.',
    keywords: ['perbaiki ukuran halaman', 'standarisasi pdf', 'halaman seragam', 'ubah ukuran halaman pdf'],
    description: `
      <p>Perbaiki Ukuran Halaman akan menstandardisasi semua halaman di dalam PDF Anda ke dalam dimensi yang seragam. Ubah dokumen dengan ukuran campuran menjadi ukuran halaman yang konsisten untuk presentasi atau pencetakan yang profesional.</p>
      <p>Pilih ukuran standar (A4, Letter, dll.) atau masukkan dimensi kustom. Konten akan diskalakan (diperbesar/diperkecil) atau diposisikan ke tengah agar pas dengan ukuran halaman yang baru.</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Pilih Target Ukuran', description: 'Pilih ukuran kertas standar atau masukkan dimensi kustom.' },
      { step: 3, title: 'Terapkan dan Unduh', description: 'Klik Terapkan untuk menstandardisasi halamannya lalu unduh.' },
    ],
    useCases: [
      { title: 'Persiapan Cetak', description: 'Standarkan halaman untuk hasil cetak yang konsisten.', icon: "printer" },
      { title: 'Pembersihan Dokumen', description: 'Perbaiki dokumen yang ukuran halamannya tidak rata.', icon: "file-check" },
      { title: 'Dokumen Profesional', description: 'Buat dokumen seragam yang siap untuk disebarluaskan.', icon: "briefcase" },
    ],
    faq: [
      { question: 'Bagaimana penanganan pada kontennya?', answer: 'Konten akan diskalakan agar muat (fit) atau diposisikan ke tengah (center) pada halaman ukuran baru.' },
      { question: 'Bisakah saya mempertahankan rasio aspeknya?', answer: 'Ya, konten dapat diskalakan secara proporsional agar muat dengan sempurna.' },
      { question: 'Ukuran standar apa saja yang tersedia?', answer: 'A4, A3, Letter, Legal, serta beberapa ukuran umum lainnya.' },
    ],
  },

  'linearize-pdf': {
    title: 'Linearisasi PDF',
    metaDescription: 'Optimalkan PDF untuk tampilan web yang cepat. Aktifkan pemuatan secara bertahap (progressive loading).',
    keywords: ['linearisasi pdf', 'tampilan web cepat', 'optimasi pdf', 'pdf progresif'],
    description: `
      <p>Linearisasi PDF mengoptimalkan dokumen Anda demi tampilan web yang lebih cepat. PDF yang telah dilinearisasi dapat mulai ditampilkan bahkan sebelum keseluruhan file selesai diunduh, sehingga meningkatkan pengalaman pengguna (UX).</p>
      <p>Proses ini, yang juga dikenal sebagai "Tampilan Web Cepat" (Fast Web View), menyusun ulang struktur PDF agar dapat dimuat secara bertahap di web browser.</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Linearisasi', description: 'Klik Linearisasi untuk mengoptimalkan tampilannya untuk web.' },
      { step: 3, title: 'Unduh', description: 'Unduh file PDF Anda yang telah dioptimalkan.' },
    ],
    useCases: [
      { title: 'Penerbitan Web', description: 'Optimalkan PDF agar cepat diunduh dari situs web.', icon: "globe" },
      { title: 'Lampiran Email', description: 'Buat file PDF yang lebih cepat dibuka oleh penerimanya.', icon: "mail" },
      { title: 'Dokumen Online', description: 'Tingkatkan pengalaman membaca dokumen secara online.', icon: "cloud" },
    ],
    faq: [
      { question: 'Apa itu linearisasi?', answer: 'Linearisasi mengatur ulang struktur data PDF agar bisa dimuat secara progresif.' },
      { question: 'Apakah hal ini mengurangi ukuran file?', answer: 'Linearisasi terkadang dapat sedikit memperbesar ukuran file akibat adanya penambahan struktur.' },
      { question: 'Apakah ini kompatibel dengan semua alat penampil (viewer)?', answer: 'Ya, PDF yang dilinearisasi dapat dibuka di semua alat pembaca PDF (PDF readers).' },
    ],
  },

  'page-dimensions': {
    title: 'Dimensi Halaman',
    metaDescription: 'Analisis ukuran halaman PDF. Lihat dimensi dari seluruh halaman di dalam dokumen Anda.',
    keywords: ['ukuran halaman pdf', 'dimensi halaman', 'pengukuran pdf', 'ukuran dokumen'],
    description: `
      <p>Dimensi Halaman akan menganalisis dan menampilkan ukuran setiap halaman di dokumen PDF Anda. Lihat dimensinya dalam berbagai satuan (inci, mm, poin) dan identifikasi halaman-halaman yang berukuran tidak standar.</p>
      <p>Sangat berguna untuk persiapan pencetakan, analisis dokumen, atau mengidentifikasi ukuran halaman yang tidak konsisten.</p>
      <p>Semua analisis terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Lihat Dimensi', description: 'Lihat ukuran halaman yang ditampilkan untuk seluruh halamannya.' },
      { step: 3, title: 'Ekspor Laporan', description: 'Ekspor data dimensinya dalam format JSON secara opsional.' },
    ],
    useCases: [
      { title: 'Perencanaan Cetak', description: 'Periksa kembali ukuran halamannya sebelum proses mencetak.', icon: "printer" },
      { title: 'Analisis Dokumen', description: 'Identifikasi halaman-halaman dengan dimensi yang tidak lazim.', icon: "search" },
      { title: 'Kontrol Kualitas', description: 'Verifikasi apakah ukuran halaman sudah sesuai dengan spesifikasinya.', icon: "check-circle" },
    ],
    faq: [
      { question: 'Satuan ukuran apa saja yang tersedia?', answer: 'Inci, milimeter, sentimeter, dan poin.' },
      { question: 'Apakah hal ini juga menunjukkan orientasinya?', answer: 'Ya, indikator orientasi potret (portrait) atau lanskap (landscape) juga ditampilkan.' },
      { question: 'Bisakah saya memperbaiki ukurannya yang tidak seragam?', answer: 'Gunakan alat Perbaiki Ukuran Halaman untuk menstandardisasi dimensi tersebut.' },
    ],
  },

  'remove-restrictions': {
    title: 'Hapus Batasan',
    metaDescription: 'Hapus berbagai batasan di dalam PDF. Buka kunci agar dokumen bisa dicetak, disalin, dan diedit.',
    keywords: ['hapus batasan pdf', 'buka kunci pdf', 'izin pdf', 'bebaskan pdf'],
    description: `
      <p>Hapus Batasan akan membuka kunci pada PDF yang dibatasi hak aksesnya sehingga tidak bisa dicetak, disalin, atau diedit. Alat ini menghapus batasan kata sandi pemilik (owner password) namun tetap menjaga isi dokumennya secara utuh.</p>
      <p>Catatan: Alat ini tidak dapat menghapus kata sandi pengguna (user password) yang mencegah dokumen tersebut untuk dibuka. Gunakan alat Dekripsi PDF untuk file yang dikunci menggunakan kata sandi pengguna.</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF yang Dibatasi', description: 'Tarik dan lepas file PDF Anda yang dibatasi hak aksesnya atau klik untuk memilih.' },
      { step: 2, title: 'Hapus Batasan', description: 'Klik Hapus untuk membuka kunci dokumen tersebut.' },
      { step: 3, title: 'Unduh', description: 'Unduh file PDF yang batasan aksesnya sudah dibebaskan.' },
    ],
    useCases: [
      { title: 'Bebaskan Pencetakan', description: 'Buka kunci file PDF yang tidak mengizinkan pencetakan (printing).', icon: "printer" },
      { title: 'Bebaskan Penyalinan', description: 'Izinkan pemilihan (selection) dan penyalinan teks pada dokumen.', icon: "copy" },
      { title: 'Bebaskan Pengeditan', description: 'Hapus batasan yang mencegah pengeditan di dalam dokumen.', icon: "edit" },
    ],
    faq: [
      { question: 'Apakah ini tindakan yang legal?', answer: 'Menghapus batasan dari dokumen milik Anda sendiri atau yang hak ciptanya Anda miliki pada umumnya merupakan tindakan yang legal.' },
      { question: 'Bisakah alat ini menghapus kata sandi pembuka (open password)?', answer: 'Tidak, gunakan alat Dekripsi PDF untuk membuka dokumen yang dilindungi kata sandi.' },
      { question: 'Apakah isinya akan terpengaruh?', answer: 'Tidak, hanya pembatasannya saja yang dihapus; isi dokumennya akan tetap tidak berubah.' },
    ],
  },

  'repair-pdf': {
    title: 'Perbaiki PDF',
    metaDescription: 'Perbaiki file PDF yang rusak (corrupted). Pulihkan dan perbaiki dokumen yang tidak bisa dibuka.',
    keywords: ['perbaiki pdf', 'betulkan pdf', 'pulihkan pdf', 'pdf rusak'],
    description: `
      <p>Perbaiki PDF berupaya untuk membetulkan file PDF yang rusak (corrupted). Alat ini menganalisis struktur dokumen dan membangunnya kembali (rebuild) untuk memulihkan isi konten sebanyak mungkin.</p>
      <p>Sangat berguna untuk menyelamatkan file yang tidak mau dibuka, file yang menampilkan pesan kesalahan (error), atau yang kehilangan sebagian konten akibat kerusakan data (corruption).</p>
      <p>Semua perbaikan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF yang Rusak', description: 'Tarik dan lepas file PDF Anda yang rusak atau klik untuk memilih.' },
      { step: 2, title: 'Perbaiki Dokumen', description: 'Klik Perbaiki untuk mencoba melakukan pemulihan.' },
      { step: 3, title: 'Unduh', description: 'Unduh file PDF yang telah berhasil diperbaiki (jika prosesnya berhasil).' },
    ],
    useCases: [
      { title: 'Pemulihan File', description: 'Pulihkan PDF yang tidak bisa dibuka secara normal.', icon: "refresh-cw" },
      { title: 'Perbaiki Pesan Error', description: 'Perbaiki file yang terus menerus menampilkan pesan kesalahan.', icon: "wrench" },
      { title: 'Kembalikan Konten', description: 'Pulihkan konten dari file yang rusak sebagian.', icon: "file-check" },
    ],
    faq: [
      { question: 'Bisakah semua PDF diperbaiki?', answer: 'Tingkat keberhasilannya sangat bergantung pada jenis dan seberapa parah kerusakan datanya.' },
      { question: 'Apakah semua isinya bisa dipulihkan?', answer: 'Alat ini memulihkan sebanyak yang ia bisa; file yang rusaknya parah kemungkinan besar akan mengalami kehilangan beberapa data.' },
      { question: 'Haruskah saya tetap menyimpan file aslinya?', answer: 'Ya, selalu simpan file aslinya untuk cadangan (backup).' },
    ],
  },

  // ==================== SECURE PDF ====================
  'encrypt-pdf': {
    title: 'Enkripsi PDF',
    metaDescription: 'Lindungi file PDF dengan kata sandi. Tambahkan enkripsi dan atur izin akses (permissions).',
    keywords: ['enkripsi pdf', 'kata sandi pdf', 'amankan pdf', 'pengamanan pdf'],
    description: `
      <p>Enkripsi PDF menambahkan perlindungan kata sandi dan enkripsi ke dalam dokumen PDF Anda. Atur kata sandi pengguna untuk mencegah dokumen dibuka, serta kata sandi pemilik untuk membatasi izin (permissions) seperti mencetak dan menyalin dokumen.</p>
      <p>Pilih dari beberapa tingkat enkripsi (AES 128-bit atau AES 256-bit) yang sesuai dengan berbagai kebutuhan keamanan (security) Anda.</p>
      <p>Semua enkripsi terjadi di browser Anda, memastikan dokumen maupun kata sandi Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Atur Kata Sandi', description: 'Masukkan kata sandi pengguna dan/atau kata sandi pemilik. Konfigurasikan perizinannya.' },
      { step: 3, title: 'Enkripsi dan Unduh', description: 'Klik Enkripsi untuk mengamankan file PDF Anda lalu unduh hasilnya.' },
    ],
    useCases: [
      { title: 'Dokumen Rahasia', description: 'Lindungi berbagai dokumen bisnis yang sensitif.', icon: "lock" },
      { title: 'File Pribadi', description: 'Amankan dokumen pribadi seperti file pengembalian pajak.', icon: "shield" },
      { title: 'Distribusi Terkendali', description: 'Batasi apa saja yang boleh dilakukan penerima terhadap dokumen tersebut.', icon: "key" },
    ],
    faq: [
      { question: 'Apa bedanya kata sandi pengguna dan pemilik?', answer: 'Kata sandi pengguna mencegah agar file tidak bisa dibuka; sedangkan kata sandi pemilik mengontrol hak akses / izin (permissions).' },
      { question: 'Enkripsi apa yang digunakan?', answer: 'Tersedia pilihan enkripsi tingkat lanjut AES 128-bit atau AES 256-bit.' },
      { question: 'Bisakah saya membatasi izin tanpa perlu kata sandi pengguna?', answer: 'Ya, Anda bisa mengatur kata sandi pemilik saja guna membatasi izinnya tanpa menghalangi orang untuk membukanya.' },
    ],
  },

  'sanitize-pdf': {
    title: 'Bersihkan PDF',
    metaDescription: 'Hapus data tersembunyi dari PDF. Bersihkan metadata, skrip, dan informasi sensitif.',
    keywords: ['bersihkan pdf', "membersihkan pdf", 'hapus data tersembunyi', 'privasi pdf'],
    description: `
      <p>Bersihkan PDF (Sanitize PDF) akan menghapus data yang tersembunyi serta informasi yang berpotensi sensitif dari dokumen Anda. Alat ini dapat melucuti metadata, skrip tersemat (embedded scripts), lampiran, komentar, dan berbagai konten tersembunyi lainnya.</p>
      <p>Ini adalah hal yang wajib dilakukan sebelum Anda mempersiapkan sebuah dokumen untuk diedarkan ke publik, atau ketika menjaga privasi adalah sebuah keharusan.</p>
      <p>Semua pembersihan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Pilih Data yang Akan Dihapus', description: 'Pilih jenis-jenis data tersembunyi yang akan dilucuti.' },
      { step: 3, title: 'Bersihkan dan Unduh', description: 'Klik Bersihkan untuk membersihkan file PDF lalu unduh hasilnya.' },
    ],
    useCases: [
      { title: 'Rilis ke Publik', description: 'Siapkan dokumen agar aman untuk diedarkan kepada khalayak umum.', icon: "globe" },
      { title: 'Perlindungan Privasi', description: 'Hapus informasi personal sebelum dokumen dibagikan.', icon: "shield" },
      { title: 'Kepatuhan Keamanan', description: 'Penuhi segala persyaratan keamanan untuk penanganan dokumen.', icon: "check-circle" },
    ],
    faq: [
      { question: 'Data tersembunyi apa saja yang dihapus?', answer: 'Metadata, skrip, lampiran, komentar, data formulir, serta lapisan (layer) yang tersembunyi.' },
      { question: 'Apakah konten yang terlihat (tampak) juga akan terpengaruh?', answer: 'Tidak, hanya data yang tersembunyi saja yang akan dihapus; konten yang terlihat akan tetap utuh.' },
      { question: 'Apakah proses ini bisa dibatalkan?', answer: 'Tidak, data yang telah dihapus tidak dapat dipulihkan. Pastikan Anda memiliki cadangan aslinya.' },
    ],
  },

  'find-and-redact': localizedRedactionContent('id', 'find-and-redact', 'Cari dan Redaksi'),

  'decrypt-pdf': {
    title: 'Dekripsi PDF',
    metaDescription: 'Hapus kata sandi dari file PDF. Buka kunci (unlock) dokumen yang dilindungi kata sandi.',
    keywords: ['dekripsi pdf', 'hapus kata sandi pdf', 'buka kunci pdf', 'penghapus kata sandi pdf'],
    description: `
      <p>Dekripsi PDF akan menghapus perlindungan kata sandi dari dokumen PDF. Cukup masukkan kata sandi yang valid saat ini untuk membuka kunci file tersebut, dan buatlah salinan file baru yang tidak lagi diproteksi.</p>
      <p>Alat ini mensyaratkan Anda harus mengetahui kata sandi saat ini. Alat ini tidak dapat meretas (crack) atau melewati kata sandi yang tidak diketahui.</p>
      <p>Semua dekripsi terjadi di browser Anda, memastikan kata sandi maupun dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF yang Dilindungi', description: 'Tarik dan lepas file PDF Anda yang dilindungi kata sandi.' },
      { step: 2, title: 'Masukkan Kata Sandi', description: 'Ketikkan kata sandi yang berlaku saat ini pada dokumen tersebut.' },
      { step: 3, title: 'Dekripsi dan Unduh', description: 'Klik Dekripsi untuk menghapus perlindungannya dan unduh file PDF barunya.' },
    ],
    useCases: [
      { title: 'Hapus Sandi Lama', description: 'Buka kunci dokumen ketika perlindungan kata sandi tidak lagi diperlukan.', icon: "unlock" },
      { title: 'Permudah Akses', description: 'Buat salinan file tanpa kunci agar lebih mudah dibagikan kepada rekan.', icon: "share-2" },
      { title: 'Pengarsipan Dokumen', description: 'Hapus seluruh kata sandi sebelum dokumen masuk tahap penyimpanan/pengarsipan jangka panjang.', icon: "archive" },
    ],
    faq: [
      { question: 'Bisakah alat ini meretas (crack) kata sandi yang tidak saya ketahui?', answer: 'Tidak, Anda wajib mengetahui kata sandi saat ini untuk melakukan dekripsi.' },
      { question: 'Apakah file aslinya akan dimodifikasi?', answer: 'Tidak, alat ini akan membuat salinan dokumen baru yang tidak terproteksi.' },
      { question: 'Bagaimana jika saya lupa kata sandinya?', answer: 'Sayangnya, kami tidak dapat memulihkan kata sandi yang terlupa.' },
    ],
  },

  'flatten-pdf': {
    title: 'Ratakan PDF (Flatten)',
    metaDescription: 'Ratakan (flatten) form dan anotasi pada PDF. Jadikan isinya bersifat statis dan tidak bisa diedit lagi.',
    keywords: ['ratakan pdf', "ratakan pdf", 'ratakan form', 'ratakan anotasi', 'pdf tidak bisa diedit'],
    description: `
      <p>Ratakan PDF (Flatten PDF) akan mengubah berbagai elemen interaktif—seperti kolom formulir (form fields) dan anotasi—menjadi konten statis. File PDF yang diratakan secara visual akan terlihat sama, namun elemen-elemen tersebut tidak bisa diedit lagi.</p>
      <p>Sangat cocok untuk menyelesaikan (finalisasi) pengisian formulir, mempertahankan anotasi secara permanen, atau membuat dokumen dengan versi akhir yang tidak dapat diubah-ubah.</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda yang memiliki kolom form atau anotasi.' },
      { step: 2, title: 'Pilih yang Akan Diratakan', description: 'Pilih apakah ingin meratakan kolom form, anotasi, atau keduanya.' },
      { step: 3, title: 'Ratakan dan Unduh', description: 'Klik Ratakan untuk membuat versi PDF yang statis.' },
    ],
    useCases: [
      { title: 'Finalisasi Formulir', description: 'Kunci data isian formulir untuk mencegah diubah oleh orang lain.', icon: "lock" },
      { title: 'Pertahankan Anotasi', description: 'Jadikan anotasi dan komentar melekat permanen di dalam dokumen.', icon: "check-circle" },
      { title: 'Pengarsipan Dokumen', description: 'Buat dokumen versi statis (non-editable) untuk tujuan pengarsipan.', icon: "archive" },
    ],
    faq: [
      { question: 'Apakah proses "meratakan" ini bisa di-undo?', answer: 'Tidak, meratakan (flattening) bersifat permanen. Selalu simpan file cadangannya.' },
      { question: 'Apakah tampilannya akan berubah?', answer: 'Tidak, dokumen akan tampak sama persis, tetapi kehilangan fitur interaktifnya (tidak bisa diklik/diedit).' },
      { question: 'Apakah ukuran filenya akan berkurang?', answer: 'Terkadang ya, karena struktur elemen interaktifnya dikonversi menjadi elemen statis yang lebih sederhana.' },
    ],
  },

  'remove-metadata': {
    title: 'Hapus Metadata',
    metaDescription: 'Lucuti metadata dari file PDF. Hapus penulis, tanggal, dan berbagai properti dokumen.',
    keywords: ['hapus metadata pdf', 'lucuti metadata', 'privasi pdf', 'pdf anonim'],
    description: `
      <p>Hapus Metadata (Remove Metadata) akan melucuti semua properti dan metadata dokumen dari file PDF Anda. Hapus nama penulis, tanggal pembuatan, info perangkat lunak (software), serta berbagai data pengidentifikasi (identifying data) lainnya.</p>
      <p>Hal ini sangat krusial untuk menjaga privasi saat Anda ingin membagikan dokumen ke pihak luar, atau saat metadata tersebut dapat mengungkap sebuah informasi sensitif.</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Hapus Metadata', description: 'Klik Hapus untuk melucuti semua metadatanya.' },
      { step: 3, title: 'Unduh', description: 'Unduh file PDF Anda yang telah bersih dari metadata.' },
    ],
    useCases: [
      { title: 'Perlindungan Privasi', description: 'Hapus semua informasi personal sebelum membagikan dokumen ke pihak luar.', icon: "shield" },
      { title: 'Dokumen Anonim', description: 'Buat file dokumen tanpa menyebutkan atribusi nama penulis aslinya.', icon: "user-x" },
      { title: 'Distribusi Bersih', description: 'Edarkan dokumen tanpa membawa jejak metadata bawaan dari perangkat Anda.', icon: "send" },
    ],
    faq: [
      { question: 'Metadata apa saja yang akan dihapus?', answer: 'Penulis, judul, subjek, kata kunci, daftar penanggalan, alat pembuat, hingga informasi alat produsennya.' },
      { question: 'Apakah metadata XMP juga akan dihapus?', answer: 'Ya, baik metadata standar maupun metadata berformat XMP akan dilucuti semua.' },
      { question: 'Apakah isi (konten) dokumennya juga akan terpengaruh?', answer: 'Tidak, alat ini hanya melucuti metadatanya; isi dokumen tetap sama seperti aslinya.' },
    ],
  },

  'change-permissions': {
    title: 'Ubah Izin (Permissions)',
    metaDescription: 'Ubah kontrol izin dokumen PDF. Atur hak akses untuk pencetakan, penyalinan, serta pengeditan.',
    keywords: ['izin pdf', 'ubah akses pdf', 'batasi pdf', 'keamanan pdf'],
    description: `
      <p>Ubah Izin (Change Permissions) akan mengubah kontrol akses (access controls) di dalam dokumen PDF Anda. Aktifkan atau nonaktifkan fitur untuk mencetak, menyalin isi, mengedit, serta menambah anotasi (permissions).</p>
      <p>Tetapkan kata sandi pemilik (owner password) agar batasan-batasan tersebut berlaku secara teguh. Penerima (recipient) tetap bisa melihat dokumennya tetapi memiliki batasan terhadap apa yang boleh mereka lakukan pada file tersebut.</p>
      <p>Semua pemrosesan terjadi di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Atur Perizinan', description: 'Centang atau hilangkan centang untuk opsi pencetakan, penyalinan, pengeditan, serta anotasi.' },
      { step: 3, title: 'Terapkan dan Unduh', description: 'Tetapkan kata sandi pemilik lalu unduh PDF yang sudah Anda batasi hak aksesnya.' },
    ],
    useCases: [
      { title: 'Cegah Penyalinan', description: 'Nonaktifkan fitur pemilihan (selection) dan salin teks demi melindungi konten berhak cipta.', icon: "copy" },
      { title: 'Kontrol Pencetakan', description: 'Izinkan atau blokir kemampuan dokumen tersebut untuk dicetak.', icon: "printer" },
      { title: 'Batasi Pengeditan', description: 'Blokir kemampuan penerima untuk mengubah atau memodifikasi file dokumen Anda.', icon: "edit-3" },
    ],
    faq: [
      { question: 'Apakah saya membutuhkan sebuah kata sandi?', answer: 'Sebuah kata sandi pemilik (owner password) diwajibkan untuk menerapkan batasan-batasan ini secara efektif.' },
      { question: 'Bisakah batasan/izin tersebut dihilangkan kelak?', answer: 'Ya, dengan memasukkan kata sandi pemilik yang benar, atau dengan menggunakan alat Hapus Batasan.' },
      { question: 'Apakah batasan tersebut dapat terbaca (kompatibel) di semua alat pembaca PDF?', answer: 'Sebagian besar PDF reader profesional akan menghormati batasan yang diatur ini, tetapi ada juga beberapa penampil sederhana yang mungkin tidak memberlakukannya.' },
    ],
  },
  'pdf-to-docx': {
    title: 'PDF ke Word',
    metaDescription: 'Konversi PDF menjadi dokumen Word (DOCX) yang dapat diedit. Pertahankan pemformatan dan tata letak.',
    keywords: ['pdf ke word', 'konversi pdf ke docx', 'pdf ke doc', 'pdf dapat diedit'],
    description: `
      <p>PDF ke Word mengonversi dokumen PDF Anda menjadi file Microsoft Word (DOCX) yang dapat diedit. Alat ini mempertahankan tata letak asli, pemformatan, gambar, dan alur teksnya.</p>
      <p>Edit konten PDF Anda dengan mudah di Word tanpa perlu mengetik ulang. Sangat sempurna untuk kontrak, laporan, dan resume (CV).</p>
      <p>Semua konversi terjadi secara lokal di browser Anda menggunakan teknologi WebAssembly, memastikan dokumen Anda tidak pernah meninggalkan perangkat Anda.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Konversi', description: 'Tunggu proses konversinya hingga selesai.' },
      { step: 3, title: 'Unduh Dokumen Word', description: 'Unduh file DOCX Anda yang sudah bisa diedit sepenuhnya.' },
    ],
    useCases: [
      { title: 'Edit Kontrak', description: 'Konversi kontrak PDF ke Word untuk proses pengeditan dan revisi.', icon: "file-text" },
      { title: 'Pembaruan Resume', description: 'Perbarui resume PDF lama Anda dengan mengonversinya ke Word.', icon: "user" },
      { title: 'Repurposing Konten', description: 'Ekstrak teks dari laporan PDF untuk digunakan pada dokumen lain.', icon: "copy" },
    ],
    faq: [
      { question: 'Apakah format aslinya dipertahankan?', answer: 'Ya, alat ini berupaya mempertahankan tata letak, font, dan gambar semirip mungkin dengan aslinya.' },
      { question: 'Bisakah saya mengonversi PDF hasil pindaian (scan)?', answer: 'PDF pindaian akan dikonversi sebagai gambar di dalam Word, kecuali jika Anda menggunakan alat OCR terlebih dahulu.' },
      { question: 'Apakah hasilnya kompatibel dengan Word?', answer: 'Ya, outputnya adalah file .docx standar yang sepenuhnya kompatibel dengan Microsoft Word dan Google Docs.' },
    ],
  },

  'pdf-to-markdown': {
    title: 'PDF ke Markdown',
    metaDescription: 'Konversi PDF ke format Markdown. Ekstrak teks dan pertahankan pemformatan seperti judul (heading) dan daftar (list).',
    keywords: ['pdf ke markdown', 'konversi pdf ke md', 'ekstraksi teks pdf', 'konverter markdown', 'pdf ke teks'],
    description: `
      <p>PDF ke Markdown mengonversi dokumen PDF Anda menjadi file Markdown yang bersih dan terstruktur dengan baik. Alat ini mengekstrak konten teks secara cerdas dan berupaya mempertahankan format seperti judul (headings), daftar (lists), dan paragraf.</p>
      <p>Sempurna untuk mengonversi dokumen PDF ke format yang dapat diedit untuk kebutuhan dokumentasi, pencatatan, atau sistem manajemen konten (CMS) yang mendukung Markdown.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat dan aman.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Konfigurasi Opsi', description: 'Atur rentang halaman, pilih untuk menyertakan nomor halaman, dan atur pemisah baris (line breaks).' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Klik Konversi untuk menghasilkan file Markdown Anda lalu unduh hasilnya.' },
    ],
    useCases: [
      { title: 'Dokumentasi', description: 'Konversi panduan dan manual PDF ke Markdown untuk dokumentasi yang terkontrol versinya (version-controlled).', icon: "file-text" },
      { title: 'Pencatatan (Note Taking)', description: 'Ekstrak konten dari artikel atau buku PDF untuk sistem pencatatan Anda.', icon: "edit-3" },
      { title: 'Migrasi Konten', description: 'Migrasikan konten PDF ke platform CMS yang mendukung format Markdown.', icon: "copy" },
    ],
    faq: [
      { question: 'Apakah formatnya dipertahankan?', answer: 'Alat ini berusaha mendeteksi judul berdasarkan ukuran font dan mendeteksi daftar berpoin/bernomor. Tata letak yang sangat kompleks mungkin memerlukan sedikit penyesuaian manual.' },
      { question: 'Bisakah saya mengonversi halaman tertentu saja?', answer: 'Ya, Anda dapat menentukan rentang halaman (misal: "1-3, 5, 7") untuk mengonversi halaman-halaman tersebut saja.' },
      { question: 'Apakah ini berfungsi untuk PDF pindaian?', answer: 'PDF pindaian hanya berisi gambar, bukan teks. Gunakan alat OCR kami terlebih dahulu untuk mengekstrak teksnya sebelum dikonversi ke Markdown.' },
    ],
  },

  // ==================== NEW TOOLS ====================
  'deskew-pdf': {
    title: 'Luruskan PDF (Deskew)',
    metaDescription: 'Luruskan halaman PDF pindaian atau halaman yang miring secara otomatis. Perbaiki dokumen miring dengan deteksi sudut presisi.',
    keywords: ['luruskan pdf', "pdf meja", 'perbaiki pindaian miring', 'putar pdf otomatis', 'koreksi sudut pdf'],
    description: `
      <p>Luruskan PDF (Deskew PDF) secara otomatis mendeteksi dan mengoreksi halaman yang miring atau tidak rata pada dokumen PDF Anda menggunakan analisis varian profil proyeksi yang canggih. Ini sangat penting untuk dokumen pindaian yang posisinya tidak lurus saat masuk ke mesin pemindai.</p>
      <p>Alat ini menganalisis teks dan perataan konten pada berbagai sudut untuk menemukan tingkat rotasi yang paling optimal, lalu menerapkan koreksinya. Anda bisa menyesuaikan ambang batas sensitivitas (1-30) dan pengaturan DPI (72-300) untuk hasil yang lebih baik.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda menggunakan teknologi WebAssembly, memastikan dokumen Anda tetap privat dan aman.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF pindaian Anda atau klik untuk memilih.' },
      { step: 2, title: 'Konfigurasi Pengaturan', description: 'Sesuaikan sensitivitas ambang batas dan DPI jika diperlukan untuk deteksi yang lebih baik.' },
      { step: 3, title: 'Proses dan Unduh', description: 'Klik Luruskan untuk mengoreksi posisi halaman lalu unduh PDF yang telah diperbaiki.' },
    ],
    useCases: [
      { title: 'Dokumen Pindaian', description: 'Perbaiki halaman yang dipindai dalam keadaan miring dari mesin scanner.', icon: "scan" },
      { title: 'Pindaian Ponsel', description: 'Koreksi foto dokumen yang miring saat difoto menggunakan ponsel pintar.', icon: "smartphone" },
      { title: 'Restorasi Arsip', description: 'Luruskan kembali arsip pindaian lawas agar lebih rapi dan mudah dibaca.', icon: "archive" },
    ],
    faq: [
      { question: 'Seberapa akurat deteksi sudutnya?', answer: 'Alat ini menggunakan analisis varian profil proyeksi untuk mendeteksi sudut kemiringan hingga ±10 derajat dengan akurasi tinggi. Alat ini otomatis melewati halaman dengan kemiringan kurang dari 0,3 derajat.' },
      { question: 'Apakah kualitas teks akan terpengaruh?', answer: 'Untuk rotasi dengan kelipatan 90 derajat, tidak akan ada penurunan kualitas. Untuk sudut lainnya, alat ini akan membulatkannya ke derajat terdekat dan mempertahankan kualitas sebaik mungkin.' },
      { question: 'Bisakah saya meluruskan halaman tertentu saja?', answer: 'Alat ini akan menganalisis semua halaman, tetapi hanya memperbaiki halaman dengan kemiringan di atas ambang batas (threshold). Halaman yang hanya sedikit miring akan dibiarkan apa adanya.' },
      { question: 'Apa itu sensitivitas ambang batas (threshold)?', answer: 'Nilai 1-10 mengoreksi kemiringan yang sangat jelas, 11-20 untuk kemiringan sedang, dan 21-30 mendeteksi kemiringan yang sangat halus. Nilai bawaannya adalah 10 agar lebih seimbang.' },
      { question: 'Berapa lama prosesnya berlangsung?', answer: 'Waktu pemrosesan bergantung pada ukuran file dan DPI. 150 DPI (bawaan) memberikan keseimbangan antara kecepatan dan akurasi. DPI yang lebih tinggi akan lebih akurat namun sedikit lebih lambat.' },
    ],
  },

  'pdf-booklet': {
    title: 'Pembuat Buklet PDF',
    metaDescription: 'Buat tata letak buklet dari PDF untuk dicetak. Susun halaman untuk penjilidan jahitan kawat (saddle-stitch) dengan berbagai opsi kisi.',
    keywords: ['buklet pdf', 'pembuat buklet', 'cetak buklet', "jahitan pelana", 'imposisi'],
    description: `
      <p>Pembuat Buklet PDF (PDF Booklet Creator) menyusun halaman PDF Anda menjadi format tata letak buklet yang siap untuk langsung dicetak dan dilipat. Sangat sempurna untuk membuat brosur, zine, buku kecil, dan publikasi dengan jahitan kawat di tengah (saddle-stitched).</p>
      <p>Pilih dari berbagai mode kisi (1x2, 2x2, 2x4, 4x4), ukuran kertas, dan opsi orientasi. Alat ini otomatis menangani imposisi halamannya agar urutan lipatannya tepat.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Unggah dokumen PDF yang ingin Anda ubah menjadi sebuah buklet.' },
      { step: 2, title: 'Pilih Tata Letak', description: 'Pilih mode kisi, ukuran kertas, orientasi, dan opsi putaran (rotasi).' },
      { step: 3, title: 'Buat dan Unduh', description: 'Hasilkan tata letak buklet dan unduh untuk dicetak.' },
    ],
    useCases: [
      { title: 'Brosur', description: 'Buat brosur yang siap dilipat dari dokumen PDF standar Anda.', icon: "book-open" },
      { title: 'Zine', description: 'Produksi zine buatan sendiri dengan susunan halaman (imposisi) yang tepat.', icon: "book" },
      { title: 'Program Acara', description: 'Buat buklet acara yang profesional untuk berbagai kegiatan.', icon: "calendar" },
    ],
    faq: [
      { question: 'Apa itu penjilidan saddle-stitch?', answer: 'Saddle-stitch adalah metode penjilidan di mana beberapa lembar kertas ditumpuk menjadi satu lalu distaples tepat di garis lipatan tengahnya.' },
      { question: 'Mode kisi apa yang sebaiknya saya gunakan?', answer: '1x2 adalah ukuran standar untuk buklet. Gunakan 2x2 atau lebih besar untuk pencetakan multi-up demi menghemat kertas.' },
      { question: 'Bisakah saya melihat pratinjau tata letaknya?', answer: 'Ya, alat ini menyediakan pratinjau visual sebelum Anda membuat (generate) buklet akhirnya.' },
    ],
  },

  'rasterize-pdf': {
    title: 'Rasterisasi PDF',
    metaDescription: 'Konversi halaman PDF menjadi gambar berkualitas tinggi. Ekspor sebagai PNG, JPEG, atau WebP dengan pengaturan DPI khusus.',
    keywords: ['rasterisasi pdf', 'pdf ke gambar', 'pdf ke png', 'pdf ke jpeg', 'konversi halaman pdf'],
    description: `
      <p>Rasterisasi PDF mengonversi halaman PDF Anda menjadi gambar raster berkualitas tinggi. Pilih format output antara PNG, JPEG, atau WebP dengan kontrol penuh atas pengaturan DPI dan kualitas.</p>
      <p>Sempurna untuk membuat gambar mini (thumbnail), grafik media sosial, atau mengarsipkan konten PDF sebagai gambar. Alat ini mendukung pemilihan rentang halaman (page range) serta pemrosesan massal (batch).</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Tarik dan lepas file PDF Anda atau klik untuk memilih.' },
      { step: 2, title: 'Konfigurasi Output', description: 'Pilih DPI, format output (PNG/JPEG/WebP), kualitas, dan rentang halamannya.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Proses halamannya dan unduh gambarnya satu per satu atau sebagai arsip ZIP.' },
    ],
    useCases: [
      { title: 'Media Sosial', description: 'Konversi slide presentasi PDF menjadi gambar untuk diposting di media sosial.', icon: "share-2" },
      { title: 'Gambar Mini (Thumbnails)', description: 'Hasilkan gambar pratinjau mini (thumbnail) untuk dokumen PDF.', icon: "image" },
      { title: 'Penerbitan Web', description: 'Konversi konten PDF ke format gambar yang ramah digunakan di web.', icon: "globe" },
    ],
    faq: [
      { question: 'Berapa DPI yang harus saya gunakan?', answer: '72 DPI untuk tampilan di layar, 150 DPI untuk penggunaan umum, 300 DPI untuk kualitas cetak resolusi tinggi.' },
      { question: 'Format mana yang paling baik?', answer: 'PNG untuk kualitas/transparansi, JPEG untuk ukuran file yang lebih kecil, WebP untuk penggunaan web modern yang ringan.' },
      { question: 'Bisakah saya mengonversi halaman tertentu saja?', answer: 'Ya, tentukan rentang halaman seperti "1-5, 8, 10-15" untuk mengonversi halaman-halaman tersebut saja.' },
    ],
  },

  'markdown-to-pdf': {
    title: 'Markdown ke PDF',
    metaDescription: 'Konversi file Markdown menjadi dokumen PDF dengan format yang cantik. Mendukung GitHub Flavored Markdown dan penyorotan sintaks.',
    keywords: ['markdown ke pdf', 'md ke pdf', 'konversi markdown', 'gfm ke pdf', 'konverter markdown'],
    description: `
      <p>Markdown ke PDF mengonversi file Markdown Anda menjadi dokumen PDF dengan gaya yang profesional. Alat ini mendukung format CommonMark serta GitHub Flavored Markdown (GFM) termasuk pembuatan tabel, daftar tugas (task lists), dan blok kode (code blocks).</p>
      <p>Pilih dari berbagai tema (terang, gelap, GitHub) dan sesuaikan ukuran halaman serta marginnya. Blok kode di dalamnya juga dilengkapi dengan penyorotan sintaks (syntax highlighting) agar mudah dibaca.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda, memastikan konten Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File Markdown', description: 'Unggah file .md atau .markdown Anda.' },
      { step: 2, title: 'Pilih Tema', description: 'Pilih tema visual (theme) dan konfigurasi pengaturan halamannya.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Hasilkan file PDF yang sudah tertata gayanya lalu unduh.' },
    ],
    useCases: [
      { title: 'Dokumentasi', description: 'Konversi file README dan dokumentasi lain ke format PDF agar mudah dibagikan.', icon: "file-text" },
      { title: 'Ekspor Catatan', description: 'Ekspor catatan format Markdown ke PDF untuk dicetak atau dibagikan.', icon: "edit-3" },
      { title: 'Pembuatan Laporan', description: 'Buat laporan tertulis dari Markdown dengan sentuhan gaya profesional.', icon: "bar-chart" },
    ],
    faq: [
      { question: 'Apakah GitHub Flavored Markdown didukung?', answer: 'Ya, elemen seperti tabel, daftar tugas, coretan (strikethrough), dan fitur GFM lainnya sepenuhnya didukung.' },
      { question: 'Bisakah saya menyesuaikan gayanya?', answer: 'Pilih dari berbagai tema yang sudah tersedia, atau tambahkan CSS kustom (custom CSS) untuk kendali penuh.' },
      { question: 'Apakah blok kode (code blocks) akan disorot warnanya?', answer: 'Ya, blok kode memuat fitur penyorotan sintaks otomatis untuk berbagai bahasa pemrograman umum.' },
    ],
  },

  'email-to-pdf': {
    title: 'Email ke PDF',
    metaDescription: 'Konversi file email (.eml, .msg) menjadi dokumen PDF. Pertahankan pemformatan, gambar sebaris, tautan, dan sematkan lampirannya.',
    keywords: ['email ke pdf', 'eml ke pdf', 'msg ke pdf', 'konversi email', 'konverter email', 'simpan email sebagai pdf', 'outlook ke pdf'],
    description: `
      <p>Email ke PDF mengonversi file email (format .eml dan .msg) menjadi dokumen PDF yang rapi. Alat ini mempertahankan informasi header, isi pesan, gambar sebaris (inline) dengan penggantian CID, tautan yang bisa diklik, serta turut menyematkan lampirannya langsung ke dalam PDF.</p>
      <p>Sesuaikan opsi output termasuk ukuran halaman (A4, Letter, Legal), pemformatan tanggal dengan dukungan zona waktu, dan apakah Anda ingin menyertakan informasi CC/BCC serta daftar lampirannya.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda, memastikan email Anda tetap privat dan aman.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File Email', description: 'Unggah file email .eml atau .msg Anda.' },
      { step: 2, title: 'Konfigurasi Opsi', description: 'Atur ukuran halaman, format tanggal, zona waktu, dan pilih kolom apa saja yang disertakan.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Konversi menjadi PDF (lengkap dengan lampirannya yang disematkan) lalu unduh hasilnya.' },
    ],
    useCases: [
      { title: 'Catatan Hukum', description: 'Arsipkan pesan email penting ke bentuk PDF (berserta lampirannya) untuk kebutuhan dokumentasi hukum.', icon: "scale" },
      { title: 'Arsip Bisnis', description: 'Konversi korespondensi bisnis ke dalam PDF untuk penyimpanan catatan jangka panjang.', icon: "briefcase" },
      { title: 'Pemeliharaan Bukti', description: 'Simpan bukti email beserta gambar sebaris dan lampirannya ke dalam format PDF yang tidak bisa diedit.', icon: "shield" },
    ],
    faq: [
      { question: 'Format email apa saja yang didukung?', answer: 'File .eml (RFC 822) dan file .msg (Microsoft Outlook) didukung sepenuhnya.' },
      { question: 'Apakah lampiran ikut disertakan?', answer: 'Ya! Lampiran akan disematkan langsung di dalam file PDF. Anda dapat mengekstraknya dari PDF tersebut menggunakan aplikasi pembaca PDF (PDF reader) yang kompatibel.' },
      { question: 'Apakah gambar di dalam isi email (inline images) juga ditampilkan?', answer: 'Ya, gambar sebaris (inline) yang direferensikan melalui CID (Content-ID) akan diubah otomatis menjadi data URI base64 dan langsung ditampilkan pada PDF.' },
      { question: 'Apakah tautannya bisa diklik?', answer: 'Ya, seluruh tautan HTML (tag <a>) serta URL yang berbentuk teks biasa di email akan diubah menjadi tautan yang bisa diklik di dalam PDF.' },
      { question: 'Apakah pemformatan aslinya tetap terjaga?', answer: 'Ya, email berformat HTML akan dipertahankan gaya tampilannya semirip mungkin, termasuk style, gambar, maupun tautannya.' },
    ],
  },

  'cbz-to-pdf': {
    title: 'CBZ ke PDF',
    metaDescription: 'Konversi arsip buku komik (CBZ) menjadi PDF. Pertahankan urutan gambar dan kualitas untuk komik digital.',
    keywords: ['cbz ke pdf', 'komik ke pdf', 'konversi cbz', 'konverter buku komik', 'konverter cbz'],
    description: `
      <p>CBZ ke PDF mengonversi file Arsip Buku Komik menjadi dokumen PDF. Alat ini mengekstrak semua gambar dari dalam arsip CBZ dan menggabungkannya ke dalam sebuah PDF sembari menjaga urutan membaca yang tepat.</p>
      <p>Pilih dari berbagai opsi ukuran halaman termasuk dimensi asli dari gambarnya atau ukuran standar buku komik. Sangat sempurna untuk membaca komik di perangkat yang mendukung format PDF tapi tidak mengenali format CBZ.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda, memastikan file komik Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File CBZ', description: 'Unggah file arsip komik .cbz milik Anda.' },
      { step: 2, title: 'Pilih Opsi', description: 'Pilih ukuran halaman dan pengaturan kualitas gambarnya.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Konversi menjadi PDF lalu unduh file komik Anda.' },
    ],
    useCases: [
      { title: 'Kompatibilitas E-Reader', description: 'Konversi file CBZ ke PDF untuk e-reader yang hanya mendukung format PDF.', icon: "book" },
      { title: 'Arsip Komik', description: 'Buat arsip PDF khusus dari koleksi komik digital Anda.', icon: "archive" },
      { title: 'Persiapan Cetak', description: 'Konversi komik digital Anda menjadi PDF untuk keperluan pencetakan.', icon: "printer" },
    ],
    faq: [
      { question: 'Apa itu format CBZ?', answer: 'CBZ adalah arsip ZIP yang memuat halaman-halaman buku komik berupa file gambar, yang kemudian diubah ekstensinya menjadi .cbz.' },
      { question: 'Apakah kualitas gambar dipertahankan?', answer: 'Ya, gambar disematkan pada kualitas aslinya di dalam PDF.' },
      { question: 'Apakah folder bertingkat (nested folders) juga didukung?', answer: 'Ya, seluruh gambar yang ada di semua folder di dalam arsip akan diekstrak dan diurutkan.' },
    ],
  },

  'pdf-to-pdfa': {
    title: 'PDF ke PDF/A',
    metaDescription: 'Konversi PDF ke format arsip PDF/A. Pastikan preservasi dokumen jangka panjang sesuai standar ISO.',
    keywords: ['pdf ke pdfa', 'konverter pdfa', 'arsip pdf', 'pengarsipan pdf', 'preservasi jangka panjang'],
    description: `
      <p>PDF ke PDF/A mengonversi dokumen PDF Anda ke format PDF/A, yakni standar ISO yang digunakan khusus untuk pengarsipan dokumen jangka panjang. Format PDF/A menjamin bahwa dokumen tersebut akan tetap bisa dilihat dan direproduksi persis seperti aslinya selama beberapa dekade mendatang.</p>
      <p>Pilih dari standar PDF/A-1b (kesesuaian dasar), PDF/A-2b (paling direkomendasikan, mendukung transparansi), atau PDF/A-3b (mengizinkan file yang disematkan). Alat ini akan menyematkan font dan meratakan efek transparan sesuai kebutuhan standar tersebut.</p>
      <p>Semua konversi terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Unggah PDF yang ingin Anda konversi ke format PDF/A.' },
      { step: 2, title: 'Pilih Level PDF/A', description: 'Pilih level kesesuaian antara PDF/A-1b, PDF/A-2b, atau PDF/A-3b.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Lakukan konversi ke PDF/A lalu unduh dokumen arsip tersebut.' },
    ],
    useCases: [
      { title: 'Arsip Hukum', description: 'Konversi dokumen hukum ke PDF/A sebagai format penyimpanan jangka panjang yang diakui pengadilan.', icon: "scale" },
      { title: 'Catatan Pemerintah', description: 'Penuhi persyaratan standar pengarsipan pemerintah menggunakan format PDF/A.', icon: "building" },
      { title: 'Arsip Bisnis', description: 'Lindungi dokumen-dokumen bisnis penting agar selalu bisa diakses dan tidak berubah di masa depan.', icon: "archive" },
    ],
    faq: [
      { question: 'Level PDF/A mana yang sebaiknya saya pilih?', answer: 'PDF/A-2b sangat direkomendasikan untuk sebagian besar keperluan. Gunakan 1b untuk kompatibilitas yang sangat lawas, atau 3b jika Anda perlu menyematkan (embed) file lain di dalamnya.' },
      { question: 'Apa yang membedakan format PDF/A dengan PDF biasa?', answer: 'PDF/A menyematkan (embed) semua font secara langsung, menonaktifkan fitur enkripsi, dan memastikan seluruh elemennya mandiri (self-contained) agar tetap sama saat dibuka bertahun-tahun kemudian.' },
      { question: 'Bisakah saya mengonversinya kembali dari PDF/A?', answer: 'File PDF/A pada dasarnya tetaplah file PDF standar yang dapat dibuka secara normal. Fitur PDF/A hanya menambahkan regulasi tertentu pada struktur filenya, bukan merusak isinya.' },
    ],
  },

  'font-to-outline': {
    title: 'Font ke Garis Besar (Outline)',
    metaDescription: 'Hapus ketergantungan font dari dokumen PDF dengan mengonversi halamannya menjadi gambar berkualitas tinggi. Menjamin kompatibilitas di semua sistem komputer.',
    keywords: ['font ke garis besar', 'font outline', 'hapus font', 'kompatibilitas font', 'meratakan font pdf', 'penghapusan font pdf'],
    description: `
      <p>Font ke Garis Besar (Font to Outline) akan menghilangkan semua bentuk ketergantungan font di dalam file PDF dengan mengubah setiap halamannya menjadi konten raster (gambar) berkualitas tinggi. Hal ini akan memastikan dokumen Anda tetap terlihat sama persis di komputer atau sistem apa pun, sekalipun font aslinya tidak terinstal.</p>
      <p>Alat ini akan merender setiap halaman berdasarkan besaran DPI yang Anda pilih (150-600), lalu menghapus font yang disematkan sembari menjaga tampilan visualnya. Sebagai opsional, Anda bisa menambahkan lapisan teks transparan (invisible) agar file tersebut tetap dapat dicari teksnya.</p>
      <p>Alat ini sangat penting untuk persiapan pencetakan, masalah kompatibilitas antar platform (OS), dan juga untuk menghindari masalah lisensi font ketika mendistribusikan dokumen. Semua pemrosesan terjadi secara lokal di browser Anda.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Unggah PDF yang memuat font yang ingin Anda hapus ketergantungannya.' },
      { step: 2, title: 'Konfigurasi Kualitas', description: 'Pilih besaran DPI (sangat dianjurkan 300 untuk dicetak, atau 150 untuk dilihat di layar). Aktifkan teks pencarian jika perlu.' },
      { step: 3, title: 'Konversi dan Unduh', description: 'Proses file-nya dan unduh hasil PDF yang tidak lagi bergantung pada font eksternal tersebut.' },
    ],
    useCases: [
      { title: 'Persiapan Cetak', description: 'Eliminasi masalah rendering font di mesin percetakan komersial dengan membuang semua ketergantungan font.', icon: "printer" },
      { title: 'Berbagi Lintas Platform', description: 'Bagikan dokumen yang terlihat sama persis di perangkat apa saja, tidak peduli apakah font-nya ada di perangkat tersebut atau tidak.', icon: "share-2" },
      { title: 'Lisensi Font', description: 'Hapus font yang disematkan (embedded) untuk mencegah potensi pelanggaran lisensi hak cipta font saat mendistribusikannya.', icon: "shield" },
    ],
    faq: [
      { question: 'Bagaimana cara kerja alat ini?', answer: 'Alat ini merender setiap halaman ke dalam gambar beresolusi tinggi (sesuai DPI pilihan Anda) dan membuat ulang PDF-nya dari gambar tersebut, sehingga semua data font aslinya dibuang tanpa mengubah tampilannya.' },
      { question: 'Apakah saya masih bisa menyorot (select) teks setelah proses konversi?', answer: 'Secara bawaan, tidak. Teks telah menyatu menjadi bagian dari gambar. Namun, Anda dapat mengaktifkan fitur "Pertahankan teks pencarian" untuk membuat lapisan teks tersembunyi agar teksnya tetap bisa di-copy atau dicari.' },
      { question: 'Berapa DPI yang sebaiknya saya pilih?', answer: '300 DPI adalah standar yang direkomendasikan untuk output siap cetak. 150 DPI cukup memadai jika hanya dilihat di layar dan membuat ukuran filenya kecil. Sedangkan 600 DPI ditujukan untuk kualitas presisi terbaik namun menghasilkan file yang sangat besar.' },
      { question: 'Apakah ukuran filenya akan membengkak?', answer: 'Ukuran file akan sangat bergantung pada pilihan DPI dan jenis kontennya. 150 DPI biasanya cukup kecil, 300 DPI mungkin akan memperbesar ukuran file aslinya, dan 600 DPI akan membuatnya sangat besar. Kompresi otomatis selalu diterapkan.' },
      { question: 'Apakah proses ini bisa dibatalkan?', answer: 'Tidak, data font aslinya akan dihilangkan secara permanen. Simpan cadangan (backup) file asli Anda jika kelak butuh untuk diedit teksnya kembali.' },
      { question: 'Lalu bagaimana nasib grafik vektor yang ada?', answer: 'Grafik vektor (berbagai bentuk shape atau garis) di dalam PDF asli akan diubah seluruhnya menjadi format raster bersama dengan teksnya. Kualitas tampilannya dipertahankan sesuai DPI yang dipilih.' },
    ],
  },

  'extract-tables': {
    title: 'Ekstrak Tabel dari PDF',
    metaDescription: 'Deteksi dan ekstrak tabel dari dokumen PDF. Ekspor menjadi format JSON, Markdown, atau CSV.',
    keywords: ['ekstrak tabel', 'ekstraksi tabel pdf', 'pdf ke csv', 'pdf ke excel', 'deteksi tabel'],
    description: `
      <p>Ekstrak Tabel dari PDF akan mendeteksi data berbentuk tabel di dalam dokumen PDF Anda dan mengekspornya ke dalam format yang terstruktur. Pilih JSON untuk keperluan integrasi data, Markdown untuk dokumentasi, atau CSV untuk diolah kembali sebagai spreadsheet.</p>
      <p>Alat ini menggunakan algoritma deteksi cerdas yang mampu mengidentifikasi struktur tabel meskipun format dokumennya tergolong rumit. Tentukan rentang halaman serta sesuaikan parameter deteksinya guna memperoleh hasil yang optimal.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Unggah PDF yang memuat tabel yang ingin Anda ekstrak.' },
      { step: 2, title: 'Konfigurasi Deteksi', description: 'Atur batas rentang halamannya beserta jumlah ambang minimum untuk kolom/baris yang ingin dideteksi.' },
      { step: 3, title: 'Ekspor dan Unduh', description: 'Pilih format outputnya (JSON/Markdown/CSV) lalu unduh file tersebut.' },
    ],
    useCases: [
      { title: 'Analisis Data', description: 'Ekstrak tabel data untuk mempermudah proses analisis di spreadsheet maupun database.', icon: "bar-chart" },
      { title: 'Pemrosesan Laporan', description: 'Tarik tabel dari dalam laporan PDF untuk diolah lebih lanjut.', icon: "file-text" },
      { title: 'Dokumentasi', description: 'Ubah tabel PDF ke dalam format Markdown untuk diintegrasikan pada dokumentasi teknis.', icon: "book" },
    ],
    faq: [
      { question: 'Apakah alat ini mampu mendeteksi tabel yang sangat kompleks?', answer: 'Alat ini bekerja sangat optimal pada tabel grid yang sederhana. Jika ada banyak sel yang di-merger (merged cells) yang kompleks, kemungkinan besar dibutuhkan sedikit penyesuaian manual nantinya.' },
      { question: 'Bagaimana jika alat ini gagal menemukan satu tabel pun?', answer: 'Coba turunkan ambang batas minimum (minimum threshold) kolom/baris di menu pengaturannya, atau pastikan ulang apakah struktur tabel PDF tersebut secara internal memang dikenali sebagai tabel atau hanyalah bentuk teks yang kebetulan terlihat seperti tabel.' },
      { question: 'Bisakah saya mengekstrak pada halaman tertentu saja?', answer: 'Ya, masukkan rentang halaman spesifik agar alat ini hanya mendeteksi tabel pada halaman-halaman tersebut.' },
    ],
  },

  'ocg-manager': {
    title: 'Pengelola Lapisan PDF (OCG)',
    metaDescription: 'Kelola lapisan PDF (Optional Content Groups). Lihat, nyalakan/matikan, tambahkan, hapus, dan ganti nama layer dokumen PDF Anda.',
    keywords: ['layer pdf', 'lapisan pdf', "manajer og", "grup konten opsional", 'visibilitas layer pdf', 'kelola lapisan pdf'],
    description: `
      <p>Pengelola Lapisan PDF memungkinkan Anda untuk melihat serta mengelola Optional Content Groups (OCG) pada dokumen PDF Anda. Layer OCG umumnya digunakan dalam bidang gambar arsitektur/teknis (CAD), peta, maupun dokumen kompleks lainnya untuk mengatur konten ke dalam berbagai layer yang bisa ditampilkan atau disembunyikan secara terpisah (toggleable).</p>
      <p>Anda bisa meninjau semua layer di dalam PDF, menyalakan atau mematikan status visibilitasnya (visibility), menambahkan layer baru, menghapus layer yang tidak diperlukan, atau mengganti nama pada layer yang sudah ada. Alat ini amat berguna saat harus berurusan dengan PDF arsitektur, hasil ekspor CAD, maupun desain yang sudah siap untuk masuk ke tahap percetakan.</p>
      <p>Semua pemrosesan terjadi secara lokal di browser Anda, memastikan dokumen Anda tetap privat dan aman.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah PDF Anda', description: 'Unggah file PDF yang telah memuat layer (OCG) atau file yang ingin Anda tambahkan layer barunya.' },
      { step: 2, title: 'Lihat Layer', description: 'Alat ini secara otomatis akan mendata seluruh layer yang terdapat pada dokumen beserta dengan status visibilitas asalnya.' },
      { step: 3, title: 'Kelola Layer', description: 'Anda bebas untuk menampilkan (show)/menyembunyikan (hide) layer, merubah nama, menambahkan layer baru, atau membuang layer yang tidak dipakai.' },
      { step: 4, title: 'Simpan dan Unduh', description: 'Unduh file PDF Anda yang telah dimodifikasi pengaturannya.' },
    ],
    useCases: [
      { title: 'Gambar Teknis (CAD)', description: 'Kelola pengaturan layer pada hasil output CAD agar bisa menyembunyikan/memunculkan keterangan dimensi, catatan teks, atau tampilan arsitektur tertentu.', icon: "ruler" },
      { title: 'Pengeditan Peta', description: 'Nyalakan atau matikan layer spesifik (seperti layer topografi, jalan, maupun penamaan jalan) untuk mendapatkan hasil peta kustom yang berbeda saat dicetak.', icon: "map" },
      { title: 'Persiapan Cetak', description: 'Siapkan file cetak yang berlapis-lapis (layered) dengan mengatur layer mana saja yang akan dimunculkan ke mesin pencetak untuk tipe edisi (versi) yang berbeda-beda.', icon: "printer" },
    ],
    faq: [
      { question: 'Apa itu layer PDF (OCG)?', answer: 'Optional Content Groups (OCG) merupakan sekumpulan layer di dalam dokumen PDF yang dapat diatur untuk "Tampil" atau "Sembunyi". Fitur ini amat identik dan lumrah dipakai di aplikasi CAD, pemetaan (GIS), hingga alat pengolah desain berlayer.' },
      { question: 'Mengapa file PDF saya tidak mendeteksi adanya layer satu pun?', answer: 'Tidak semua file PDF dirancang menggunakan pengaturan layer. Layer tersebut lazimnya terbentuk (di-generate) sejak proses awal saat file PDF diciptakan dari perangkat lunak pengedit desain arsitektur maupun aplikasi pembuat CAD.' },
      { question: 'Apakah memodifikasi status layer akan memengaruhi struktur konten aslinya?', answer: 'Mengubah status "Tampil" atau "Sembunyi" dari sebuah layer semata-mata hanya memengaruhi apakah gambar tersebut diperlihatkan di layar (dan sewaktu dicetak) atau tidak. Seluruh datanya aslinya tetaplah terjaga dan terbawa utuh di dalam dokumen file PDF.' },
    ],
  },

  'pdf-reader': {
    title: 'Pembaca PDF',
    metaDescription: 'Pembaca PDF online gratis. Lihat, navigasi, perbesar, putar, dan cetak dokumen PDF langsung di dalam web browser Anda.',
    keywords: ['pembaca pdf', "pembaca pdf", 'penampil pdf', 'lihat pdf online', 'baca pdf', 'browser pdf viewer'],
    description: `
      <p>Pembaca PDF adalah sebuah alat penampil PDF berfitur lengkap yang memudahkan Anda untuk membaca dan melakukan navigasi pada dokumen PDF langsung dari dalam web browser. Tanpa perlu menginstal perangkat lunak pihak ketiga, cukup unggah PDF Anda dan Anda sudah bisa langsung membacanya.</p>
      <p>Navigasi di antara halamannya dengan lincah, atur tingkat perbesaran (zoom), putar arah tampilan (rotate), atau gunakan fitur layar penuh (fullscreen) agar nyaman dibaca bebas dari berbagai gangguan antarmuka. Anda bahkan dapat mencetak dokumennya langsung atau mengunduhnya kembali untuk akses secara offline.</p>
      <p>Seluruh proses peninjauan ini berjalan murni di lokal perangkat/browser komputer Anda. File dokumen PDF Anda sama sekali tidak pernah diunggah menuju server di internet, memastikannya privasi dan keamanannya 100% mutlak.</p>
    `,
    howToUse: [
      { step: 1, title: 'Buka PDF Anda', description: 'Klik tautan untuk mengunggah atau langsung tarik dan lepas file PDF-nya untuk menampilkannya di jendela pembaca (reader) ini.' },
      { step: 2, title: 'Navigasi Halaman', description: 'Manfaatkan fitur kontrol pada menu pembaca untuk berpindah ke halaman berikut/sebelumnya secara teratur, atau langsung melompat masuk ke angka halaman tertentu dengan seketika.' },
      { step: 3, title: 'Sesuaikan Tampilan', description: 'Gunakan fitur perbesar (zoom in), perkecil (zoom out), atau bahkan ubah rotasi arah pandang teksnya untuk posisi posisi yang nyaman, hingga opsi mode layar penuh (fullscreen).' },
      { step: 4, title: 'Cetak atau Unduh Kembali', description: 'Lakukan proses mencetak (print) secara presisi, maupun unduh file-nya kembali guna diakses saat status perangkat tanpa jaringan (offline).' },
    ],
    useCases: [
      { title: 'Meninjau Dokumen', description: 'Meninjau cepat sebuah dokumen atau berkas file PDF dengan instan tanpa harus menginstal software tambahan apa pun ke perangkat PC/HP.', icon: "book-open" },
      { title: 'Membaca di Ponsel/HP', description: 'Baca file dokumen dalam format PDF di bermacam-macam tipe perangkat yang setidaknya telah mendukung fitur web browser secara standar.', icon: "smartphone" },
      { title: 'Pratinjau Instan', description: 'Lakukan pratinjau secara kilat (quick preview) terlebih dahulu dengan cermat di aplikasi ini sebelum kemudian Anda setujui keputusannya untuk mencetaknya di printer.', icon: "eye" },
    ],
    faq: [
      { question: 'Apakah file dokumen privat saya terjamin aman?', answer: 'Ya, seluruh isi dokumen PDF Anda hanya akan diproses murni di perangkat (browser) Anda, sama sekali tidak akan dikirimkan ke server kami atau pihak ke-3 manapun.' },
      { question: 'Apakah bisa digunakan untuk menambah corat-coret atau mengedit filenya?', answer: 'Alat "Pembaca PDF" yang satu ini hanya difungsikan khusus sebagai "alat baca (viewing)". Untuk melakukan pengeditan teks dan memberi corat-coret silakan memakai alat utama "Edit PDF", sedangkan untuk menandatangani pakailah alat "Tanda Tangan Digital".' },
      { question: 'Apakah tampilan aplikasi ini berfungsi di perangkat ponsel pintar (HP) atau layar tablet?', answer: 'Sangat berfungsi dengan baik, Pembaca PDF kami dirancang khusus agar berjalan optimal dalam platform lintas gadget dan ukuran layar apa pun yang telah memuat kapabilitas browser web pada umumnya.' },
    ],
  },

  'digital-sign-pdf': {
    title: 'Tanda Tangan Digital',
    metaDescription: "Tanda tangani dokumen PDF secara digital dengan sertifikat PFX, P12, atau PEM. Tambahkan tanda tangan berbasis sertifikat secara lokal di browser Anda.",
    keywords: ['tanda tangan digital pdf', 'sertifikat x509', 'pfx pdf sign', "p12 tanda tangani pdf", "pem tanda pdf", 'tanda tangan pdf legal'],
    description: `
      <p>Tanda Tangan Digital ini memampukan Anda menorehkan stempel tanda tangan kriptografis digital berstandar (X.509) pada berbagai dokumen file PDF. Tidak seperti alat penandatangan gambar corat-coret sederhana, penandatanganan versi digital ini bisa tervalidasi secara mengikat untuk keabsahan berstandar legalitas hukum serta sebagai validasi integritas struktur filenya agar dapat terlindungi secara nyata.</p>
      <p>Prosedurnya cukup mudah, cukup unggah file kunci sertifikat (berupa format PFX, P12, atau PEM) Anda, input kata sandi yang digunakan, dan laksanakan penandatanganan PDF tersebut dengan sekejap. Anda pun berhak memutuskan apakah sekadar membuat tanda tangan yang tak terlihat (invisible, untuk validitas tersembunyi), atau malah menorehkannya secara nampak (visible) yang telah disertai kustom teks grafis/gambar maupun atur tata letaknya.</p>
      <p>Semua penandatanganan kriptografis berlangsung hanya di lingkungan ruang lokal web browser Anda; data kata sandi, kode rahasia sertifikat maupun dokumen Anda pun tidak dibagikan atau dipindah tangankan ke sebuah fasilitas web hosting (server) apa pun itu demi kepastian privasi mutlak.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah File PDF', description: 'Pilih lalu unggah dokumen file PDF-nya yang perlu untuk diterapkan tanda tangan sah digital tersebut.' },
      { step: 2, title: 'Muat Otoritas Sertifikat', description: 'Unggah file identitas digital berbasis standar X.509 (.pfx, .p12, atau .pem), lantas isikan sebuah kata sandinya.' },
      { step: 3, title: 'Atur Pengaturan Parameter', description: 'Sebagai fitur tambahan, berikan sedikit keterangan tentang maksud dan tujuan penandatanganannya, posisinya dan juga tambahkan parameter visual gambar atau tulisan yang muncul (visible).' },
      { step: 4, title: 'Tanda Tangani dan Unduh Hasil', description: 'Aktivasi tombol Tanda Tangani PDF agar aplikasi secara otomatif mencap validasi berkasnya, setelahnya akan mengunduh dokumen file tersebut.' },
    ],
    useCases: [
      { title: 'Tujuan Dokumen Hukum (Legal)', description: 'Otentikasi seluruh formulir dokumen kontrak secara legal (mengikat secara absah di hukum) maupun berkas nota pengajuan menggunakan metode standarisasi validasi identitas digital tingkat institusi/firma.', icon: "scale" },
      { title: 'Persetujuan Keuangan / Bisnis', description: 'Sahkah semua arus faktur belanja perusahaan, bukti kwitansi order dari pelanggan (purchase orders), serta berbagai lampiran berkas guna mematikan siklus rute kelengkapan audit pembukuan yang kuat.', icon: "briefcase" },
      { title: 'Mengunci Validitas Dokumen', description: 'Pertahankan dan awasi kredibilitas dokumen ini secara pasti dengan memblokir celah resiko perubahan dan mengukuhkan validasinya jika diubah usai tanda tangannya sah.', icon: "shield-check" },
    ],
    faq: [
      { question: 'Format validasi setifikat seperti apa yang secara teknis dapat dibaca (support)?', answer: 'Hanya diizinkan masuk jenis data format PKCS#12 (.p12), data .pfx, dan format pengenal rahasia standar Privacy-Enhanced Mail yakni format PEM (.pem).' },
      { question: 'Apakah format cap ini akan mengikat di sistem regulasi (sah)?', answer: 'Sebagian besar, validasi tanda tangan model X.509 merupakan wujud jaminan sah pada standar banyak negara dan yurisdiksi. Syaratnya; dokumen dan identitas pembuat (sertifikat rootnya) telah sah, diakui dan tercatat tanpa kedaluwarsa secara universal.' },
      { question: 'Apakah cap stempel validasinya akan kelihatan secara bentuk visual juga?', answer: 'Tentu saja, jika parameter (opsi "Tambahkan tanda tangan yang nampak") difungsikan dan pengguna mengisi kustom posisinya maupun gambar atau baris kalimat di kolom yang ada.' },
    ],
  },

  'validate-signature': {
    title: 'Validasi Tanda Tangan',
    metaDescription: 'Lakukan verifikasi integritas atas tanda tangan digital dari berbagai dokumen berformat PDF. Konfirmasi legalitas status kebenaran otoritas dan rekam detil integritas sertifikat identitasnya.',
    keywords: ['validasi tanda tangan pdf', 'verifikasi keabsahan digital', 'cek sertifikat pdf', 'pemeriksaan otoritas dokumen'],
    description: `
      <p>Fitur Alat Validasi Tanda Tangan ini akan menjamin peninjauan keaslian dari setiap jenis data dokumen PDF bersertifikasi stempel elektronik yang pernah Anda miliki atau yang telah diserahkan dari suatu badan berwenang. Melacak silang untuk mengetahui apakah cap tersebut secara legal masuk klasifikasi valid, menampilkan identifikasi info rinci yang berwenang menorehkan sertifikatnya (signer profile), serta mengetahui langsung bila ada modifikasi manipulatif dalam data sesudahnya (integrity confirmation).</p>
      <p>Cukup hanya meletakkan sebuah file yang diyakini sudah disegel (signed) ke dalam fitur ini agar kemudian diurai secara gamblang akan eksistensinya dan memperlihatkan keseluruhan cap sertifikasi stempel mana yang sah maupun tidak, waktu pembuatan stempel tersebut pada saat disegel, plus menunjukan rekam jejaknya apakah telah terjamah pihak tak berotoritas lainnya lagi.</p>
      <p>Seluruh tahap validasinya berlangsung murni tanpa henti pada area sesi (session) browser perangkat lokal komputer/ponsel ini. Kerahasiaannya tentu amat privasi; data sensitif tersebut tidak sama sekali keluar diproses maupun disuplai ulang menuju portal eksternal penyedia layanan hosting pihak ketiga.</p>
    `,
    howToUse: [
      { step: 1, title: 'Unggah Dokumen PDF Bersertifikasi', description: 'Unggah file PDF yang telah tercatat status legalnya (yang sebelumnya dirasa memiliki rekam jejak cap tanda tangan/sertifikasi digital).' },
      { step: 2, title: 'Pantau Panel Hasil Evaluasi', description: 'Sebuah rekam panel layar akan segera ditampilkan membeberkan apa saja rentetan stempel rahasia sertifikasinya yang bisa ditemukan di dalamnya.' },
      { step: 3, title: 'Audit Perincian Data Otoritasnya', description: 'Klik menu rinci di setiap panelnya jika berniat mau mencari tahu keabsahannya meliputi data sang pemilik yang membubuhi tanda tangannya (signer) dan durasi masa aktif status otoritas digitalnya secara legal.' },
      { step: 4, title: 'Buat Dokumen Salinan Berupa Laporan', description: 'Apabila dibutuhkan untuk laporan secara faktual, Anda secara khusus juga mengunduhnya (export) data output kesimpulannya tadi dalam versi berkas file berektensi .json ke disk lokal PC / smartphone Anda.' },
    ],
    useCases: [
      { title: 'Melacak Legitimasi / Validasi Surat', description: 'Yakinkan dengan pasti apakah status dokumen berkas PDF yang tercap itu murni tulen keabsahannya sehingga menguatkan asumsi dasar bahwa tidak terdapat praktek mengelabui secara manipulasi / menyunting di dokumen bersangkutan ini sejak penandatanganan awal.', icon: "shield-check" },
      { title: 'Persiapan Audit dan Hukum Kepatuhan', description: 'Aplikasi alat periksa instan dalam skenario reguler pada lembaga pengatur kepatuhan untuk merumuskan secepatnya akreditasi kelengkapan dari syarat sah-nya file persetujuan.', icon: "clipboard-check" },
      { title: 'Tinjau Rincian Profil Otoritas Stempel', description: 'Melongok sekilas terkait umur kedaluwarsanya di rekam data jejak dan riwayat spesifik sertifikat si pemilik otoritas asli pembuat tanda tangannya untuk sebuah kebutuhan konfirmasi rincian sertifikasinya secara spesifik.', icon: "award" },
    ],
    faq: [
      { question: 'Apa tafsir spesifik dari makna "valid"?', answer: 'Kata sah/valid memiliki arti gamblang bahwa pasca cap (signature) dibubuhkan secara kriptografi, file aslinya tak diendus/dirubah sama sekali isinya, sekaligus sang penerbit (Certificate Authority root) dari sertifikat digital bersangkutan dipercaya serta kondisinya masih berada dalam masa waktu tak kadaluwarsa (active lifecycle) atau sah dirunut berantai (intact).' },
      { question: 'Bisakah alat ini menjalankan fitur mengecek validasi bagi dokumen lebih dari 10 atau masal (banyak)?', answer: 'Tentu. Tarik dan lepas (Drag and Drop) semua koleksi dokumen tersebut pada antarmukanya sekalian. Ia secara otomatis mengekseskusi peninjauan semua rentetan datanya sekaligus dengan tipe pengerjaan secara banyak (batch method).' },
      { question: 'Apakah hal-hal standar yang menjadi faktor kegagalan tanda tangannya untuk mendapatkan titel divalidasi sah?', answer: 'Penyebab kegagalan yang banyak mencolok seperti; isi datanya terbukti dimodifikasi (diedit), waktu kadaluwarsa (expired) durasi stempel otoritas asli si penandatangannya telah lama usai, hingga parahnya jika file rantai otentikasi kunci otorisasi pembuatnya (Trust CA certs)-nya tersebut ternyata bersifat meragukan dan tidak dimasukkan ke dalam daftar terpercaya global di lingkup public/private standard.' },
    ],
  },
  'form-logic-designer': {
    "title": "Desain Logika Formulir",
    "metaDescription": "Buat aturan formulir PDF dengan desainer visual. Hubungkan bidang dan tambahkan perhitungan interaktif dan logika validasi.",
    "keywords": [
        "logika formulir PDF",
        "injeksi AcroJS",
        "alur simpul",
        "PDF interaktif",
        "dependensi bidang"
    ],
    "description": "\n        <p>Desainer Logika Formulir Interaktif adalah alat pelopor yang mengisi celah besar dalam kemampuan PDF: membuat bidang aktif dan responsif, bukan formulir yang datar dan statis.</p>\n        <p>Melalui kanvas visual kami yang menampilkan \"simpul glassmorphism menyala\" (dibangun di atas React Flow), bidang formulir direpresentasikan sebagai modul yang terhubung. Anda dapat menyeret tautan untuk menentukan hubungan: misal, saat kotak centang dicentang ➜ aktifkan input teks ➜ hitung nilai secara otomatis dan perbarui bidang total.</p>\n        <p>Setelah dirancang, mesin AcroJS menyusun logika tersebut ke dalam Acrobat JavaScript resmi dan menginjeksikannya ke dalam kamus '/AA' (Tindakan Tambahan) dari AcroForm. Perilaku interaktif tersebut kemudian dijalankan secara asli di dalam pembaca PDF standar apa pun.</p>\n      ",
    "howToUse": [
        {
            "step": 1,
            "title": "Unggah PDF Interaktif",
            "description": "Sediakan file PDF yang sudah memiliki bidang formulir aktif (AcroForm)."
        },
        {
            "step": 2,
            "title": "Petakan Logika di Kanvas",
            "description": "Hubungkan bidang sebagai simpul. Tautkan peristiwa output (ubah, blur) ke tindakan target (tampilkan, sembunyikan, hitung, nonaktifkan)."
        },
        {
            "step": 3,
            "title": "Kompilasi dan Injeksikan",
            "description": "Injeksikan logika JavaScript yang dikompilasi ke dalam kamus PDF dan simpan dokumen pintar terakhir."
        }
    ],
    "useCases": [
        {
            "title": "Kontrak Bisnis Pintar",
            "description": "Tampilkan atau sembunyikan bidang input tambahan secara dinamis berdasarkan ketentuan yang dipilih klien.",
            "icon": "file-signature"
        },
        {
            "title": "Formulir Pengeluaran Otomatis",
            "description": "Jumlahkan beberapa baris pengeluaran dan hitung pajak secara dinamis tanpa penghitungan manual.",
            "icon": "calculator"
        },
        {
            "title": "Kuesioner Interaktif",
            "description": "Lewati pertanyaan yang tidak relevan berdasarkan jawaban sebelumnya, memberikan pengalaman pengisian seluler yang lebih bersih.",
            "icon": "form-input"
        }
    ],
    "faq": [
        {
            "question": "Apakah saya memerlukan PDF dengan bidang yang sudah ada sebelumnya?",
            "answer": "Ya. Alat ini dirancang untuk mengikat aturan logika ke bidang yang ada. Jika PDF Anda tidak memiliki bidang interaktif, gunakan alat Pembuat Formulir kami terlebih dahulu untuk menambahkan input dan kotak centang."
        },
        {
            "question": "Apakah logika ini akan berjalan di semua pembaca PDF?",
            "answer": "Ini berjalan pada semua pembaca PDF yang mematuhi standar Adobe PDF dan mendukung Acrobat JavaScript (seperti Adobe Acrobat Reader, Foxit Reader, dan peramban web utama). Pembaca seluler minimalis mungkin hanya mendukung tindakan dasar."
        },
        {
            "question": "Apakah ini memengaruhi pencetakan kertas?",
            "answer": "Sama sekali tidak. Skrip yang diinjeksikan hanya berjalan di layar selama pengisian formulir. Saat mencetak, status bidang saat ini dicetak secara statis tanpa visualisasi simpul."
        }
    ]
},

  'global-invoice-parser': {
    "title": "Pengonversi Jumlah Faktur PDF",
    "metaDescription": "Ekstrak jumlah faktur dari PDF, konversi total antar mata uang dan tambahkan ringkasan perhitungan ke dokumen.",
    "keywords": [
        "terjemahkan faktur",
        "konverter mata uang faktur",
        "kalkulator nilai tukar pdf",
        "stempel mata uang lokal",
        "alat faktur global"
    ],
    "description": "\n        <p>Penerjemah Faktur Global memberikan kejelasan maksimal bagi tim keuangan internasional dan pembeli global.</p>\n        <p>Menangani faktur dalam berbagai mata uang ($, €, ¥) sering kali melibatkan perhitungan manual yang menjemukan. Alat ini memungkinkan <strong>terjemahan label di tempat dan konversi nilai tukar waktu nyata</strong>.</p>\n        <p>Ini memindai dokumen untuk total harga, menjalankan perhitungan berdasarkan tolok ukur mata uang, dan secara fisik mencetak stempel \"Exchange Rate ledger\" glassmorphism semi-transparan yang elegan di margin halaman. Ini merender dengan efek visual numerik mesin slot berputar yang menawan, membawa kontrol mutlak pada penagihan global.</p>\n      ",
    "howToUse": [
        {
            "step": 1,
            "title": "Unggah Faktur PDF",
            "description": "Impor faktur apa pun yang ditagih dalam mata uang asing (misalnya USD, EUR, JPY)."
        },
        {
            "step": 2,
            "title": "Pilih Mata Uang Lokal",
            "description": "Pilih mata uang lokal Anda (misalnya IDR) dan tentukan nilai tukar kustom atau waktu nyata."
        },
        {
            "step": 3,
            "title": "Terapkan Stempel Buku Besar",
            "description": "Klik jalankan untuk melapisi stempel buku besar nilai tukar yang siap untuk akuntansi."
        }
    ],
    "useCases": [
        {
            "title": "Reimbursement Perjalanan Bisnis Asing",
            "description": "Konversikan tagihan perjalanan ke mata uang lokal dan cetak stempel detail konversi, memudahkan alur kerja akuntansi.",
            "icon": "plane"
        },
        {
            "title": "Audit Belanja Lintas Batas",
            "description": "Terjemahkan kolom faktur dan isolasi biaya sebenarnya dari barang-barang e-commerce.",
            "icon": "credit-card"
        },
        {
            "title": "Pembukuan Bisnis Internasional",
            "description": "Cetak stempel buku besar konversi yang konsisten pada faktur perusahaan untuk merampingkan audit akhir tahun.",
            "icon": "folder-open"
        }
    ],
    "faq": [
        {
            "question": "Bagaimana cara mendeteksi jumlah faktur?",
            "answer": "Ini memindai aliran karakter untuk simbol mata uang dan menganalisis tajuk semantik seperti \"Total\" atau \"Jatuh Tempo\" untuk menemukan jumlah akhir faktur."
        },
        {
            "question": "Apakah nilai tukar diambil secara waktu nyata?",
            "answer": "Ya. Secara default, ini mengambil kurs dasar dari API keuangan standar. Anda juga dapat menentukan kurs kustom untuk audit internal."
        },
        {
            "question": "Apakah stempel tersebut akan menutupi detail faktur yang penting?",
            "answer": "Mesin memindai margin halaman untuk menemukan posisi optimal. Stempel tersebut semi-transparan, sejajar dengan elegan dengan tata letak Anda."
        }
    ]
},

  'pdf-to-cbz': {
    title: 'PDF ke CBZ',
    metaDescription: 'Konversi file PDF ke arsip komik CBZ. Mempertahankan urutan dan kualitas gambar.',
    keywords: ["pdf ke cbz","konversi komik","konverter cbz"],
    description: "<p>PDF ke CBZ dirancang khusus untuk penggemar komik dan pengarsip ebook digital. Ini merender setiap halaman volume PDF Anda menjadi grafik raster dengan fidelitas tinggi dan mengompilasinya ke dalam paket Comic Book ZIP (.cbz) standar.</p>\n      <p>Untuk menghilangkan pengikisan manual yang membuat frustrasi dalam sistem seperti Calibre, Komga, Kavita, atau CDisplayEx, prosesor secara otomatis membuat dan memasukkan file <strong>ComicInfo.xml</strong> dan <strong>metadata.opf</strong> secara internal, sekaligus menulis payload <strong>ComicBookInfo JSON</strong> standar langsung ke metadata komentar file ZIP.</p>\n      <p>Termasuk penggeser konfigurasi lengkap untuk kualitas kompresi gambar, skala dimensi halaman, tombol baca tata letak kanan ke kiri (mode Manga), dan pemfilteran warna skala abu-abu hitam-putih.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah PDF Komik",
    "description": "Seret dan lepas file PDF komik, buku seni, atau manga utama Anda."
  },
  {
    "step": 2,
    "title": "Masukkan Metadata Komik",
    "description": "Isi bidang Seri, Volume, Judul, Penulis, dan Penerbit, dan alihkan tata letak atau pengoptimalan skala abu-abu."
  },
  {
    "step": 3,
    "title": "Kompilasi dan Unduh",
    "description": "Klik Konversi untuk mengkompilasi dan mengambil file .cbz yang kaya metadata dan langsung siap untuk Calibre."
  }
],
    useCases: [
  {
    "title": "Kemasan Komik Retrograde",
    "description": "Ubah buku PDF pindaian mentah menjadi file komik CBZ yang ringkas dan sesuai standar yang mudah dihapus oleh pengelola perpustakaan komik.",
    "icon": "book"
  },
  {
    "title": "Integrasi Kaliber Tanpa Upaya",
    "description": "Skema metadata.opf bawaan memungkinkan Calibre mengambil dan mengklasifikasikan pembuat konten dan masalah volume tanpa pencarian manual.",
    "icon": "database"
  },
  {
    "title": "Peningkatan Layar E-Ink",
    "description": "Pra-filter saluran warna grafis menjadi skala abu-abu kontras tinggi saat kompilasi, meningkatkan penyegaran dan kejelasan visual pada layar E-ink sekaligus menghemat penyimpanan.",
    "icon": "eye"
  }
],
    faq: [
  {
    "question": "Apa itu berkas .cbz?",
    "answer": "File CBZ adalah format wadah arsip khusus untuk seri buku komik. Ini diformat secara internal sebagai paket ZIP yang berisi gambar halaman bernomor urut bersama dengan file XML metadata struktural."
  },
  {
    "question": "Bagaimana metadatanya kompatibel?",
    "answer": "Kami mengkompilasi dan menyematkan ComicInfo.xml, metadata.opf, dan Komentar File ZIP dalam satu pass. Hal ini menjamin kepatuhan mutlak di berbagai ekosistem komik dan e-book."
  },
  {
    "question": "Mengapa menggunakan mode Skala Abu-abu?",
    "answer": "Jika Anda membaca pada pembaca E-ink skala abu-abu (seperti Kindle atau Kobo), kompilasi langsung dalam Grayscale mengurangi bayangan artefak, memberikan tingkat kontras yang unggul, dan memperkecil ukuran file CBZ akhir."
  }
],
  },

  'overlay-pdf': {
    title: 'Hamparan PDF',
    metaDescription: 'Tumpuk dua halaman PDF menjadi satu halaman. Sempurna untuk menyematkan stempel, latar belakang, dan tanda air.',
    keywords: ["hamparan pdf","pdf overlay","stempel pdf"],
    description: "<p>Overlay PDF memungkinkan Anda melapisi halaman satu dokumen PDF di atas atau di bawah dokumen PDF lainnya. Ini sempurna untuk menerapkan kop surat, menambahkan kisi latar belakang, memberi cap tanda air, atau menggabungkan draf tata letak menjadi satu.</p>\n      <p>Mendukung mode Overlay (lapisan berada di atas) dan mode Underlay (lapisan berada di bawah). Tentukan rentang halaman target khusus atau putar dokumen overlay yang lebih pendek untuk mencakup seluruh file dasar secara otomatis.</p>\n      <p>Semua pemrosesan dijalankan sepenuhnya di dalam browser web Anda secara lokal, sehingga menjamin keamanan total dan privasi data.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah PDF Utama",
    "description": "Seret dan lepas dokumen PDF dasar utama Anda."
  },
  {
    "step": 2,
    "title": "Unggah Lapisan PDF",
    "description": "Menyediakan dokumen overlay/underlay yang berfungsi sebagai lapisan."
  },
  {
    "step": 3,
    "title": "Konfigurasikan Pelapisan",
    "description": "Pilih mode overlay atau underlay, tentukan rentang halaman, dan aktifkan perulangan halaman."
  },
  {
    "step": 4,
    "title": "Kompilasi dan Unduh",
    "description": "Klik Kompilasi untuk memproses dan mengunduh PDF hasil berlapis."
  }
],
    useCases: [
  {
    "title": "Kop Surat Perusahaan",
    "description": "Lapisi isi faktur di atas templat kop surat standar perusahaan.",
    "icon": "file-text"
  },
  {
    "title": "Tanda Air & Segel",
    "description": "Hamparkan stempel keamanan, segel tanda tangan, atau latar belakang di seluruh dokumen.",
    "icon": "shield"
  },
  {
    "title": "Menggambar Cetak Biru",
    "description": "Gabungkan rancangan arsitektur atau kisi tata letak di bawah blok teks.",
    "icon": "layout"
  }
],
    faq: [
  {
    "question": "Apa perbedaan antara Overlay dan Underlay?",
    "answer": "Hamparan menempatkan lapisan sekunder di atas konten utama Anda. Underlay menempatkannya di bagian paling bawah, bertindak sebagai templat latar belakang."
  },
  {
    "question": "Bisakah saya mengulang lapisan overlay?",
    "answer": "Ya, jika lapisan PDF lebih pendek dari dokumen dasar, mengaktifkan Loop akan memutarnya (misalnya halaman 1, 2, 1, 2) untuk mencakup semua halaman dasar."
  },
  {
    "question": "Apakah rentang halaman didukung?",
    "answer": "Ya, Anda dapat menargetkan halaman tertentu menggunakan sintaks rentang seperti \"1-5\", \"ganjil\", \"genap\", atau daftar yang dipisahkan koma."
  }
],
  },

  'timestamp-pdf': {
    "title": "Stempel Waktu PDF Lokal",
    "metaDescription": "Alat ini membuat stempel waktu lokal yang ditandatangani sendiri menggunakan jam perangkat. Alat ini tidak meminta atau memverifikasi stempel waktu dari TSA yang dipilih.",
    "keywords": [
      "Stempel Waktu PDF Lokal",
      "PDF",
      "Waktu perangkat"
    ],
    "description": "<p>Pilih PDF untuk menambahkan stempel waktu lokal.</p><p>Alat ini membuat stempel waktu lokal yang ditandatangani sendiri menggunakan jam perangkat. Alat ini tidak meminta atau memverifikasi stempel waktu dari TSA yang dipilih.</p><p>Pemrosesan tetap di browser; dokumen maupun hash tidak dikirim ke TSA.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Unggah PDF",
        "description": "Pilih PDF untuk menambahkan stempel waktu lokal."
      },
      {
        "step": 2,
        "title": "Label otoritas yang dipilih",
        "description": "Pilih nama untuk tanda tangan lokal. Nama ini tidak membuat koneksi ke TSA."
      },
      {
        "step": 3,
        "title": "Tambah stempel waktu lokal",
        "description": "Proses file, periksa hasilnya, lalu unduh PDF."
      }
    ],
    "useCases": [
      {
        "title": "Draf kerja",
        "description": "Simpan salinan dokumen kerja dengan tanggal lokal.",
        "icon": "file-text"
      },
      {
        "title": "Arsip pribadi",
        "description": "Simpan salinan berstempel waktu untuk referensi pribadi.",
        "icon": "archive"
      },
      {
        "title": "Pemeriksaan tanda tangan",
        "description": "Periksa tanda tangan yang dibuat dan metadata di pembaca PDF.",
        "icon": "search"
      }
    ],
    "faq": [
      {
        "question": "Apakah stempel waktu diverifikasi secara independen?",
        "answer": "Alat ini membuat stempel waktu lokal yang ditandatangani sendiri menggunakan jam perangkat. Alat ini tidak meminta atau memverifikasi stempel waktu dari TSA yang dipilih."
      },
      {
        "question": "Apakah saya harus mengunggah sertifikat digital?",
        "answer": "Tidak. Alat ini membuat sertifikat lokal yang ditandatangani sendiri untuk operasi ini."
      },
      {
        "question": "Jam mana yang menyediakan waktu?",
        "answer": "Waktu berasal dari jam perangkat dan tidak diverifikasi secara independen."
      }
    ]
  },

  'add-page-labels': {
    title: 'Tambah Label Halaman',
    metaDescription: 'Atur label halaman kustom (misal, I, II untuk kata pengantar, 1, 2 untuk isi). Meningkatkan navigasi pembaca.',
    keywords: ["label halaman","nomor halaman logis","navigasi pdf"],
    description: "<p>Tambahkan Label Halaman memungkinkan Anda memasukkan metadata pelabelan halaman khusus (/PageLabels) ke dalam kamus Katalog akar PDF Anda. Tindakan ini menyesuaikan label yang ditampilkan di sidebar navigasi pembaca PDF profesional dan panel lompat nomor halaman atas (misalnya menggunakan angka Romawi untuk bagian depan, urutan desimal untuk isi utama, atau awalan khusus seperti A-0, A-1 untuk subbagian teknis).</p>\n      <p>Mendukung penggabungan beberapa aturan khusus dengan lancar. Yang terpenting, kami telah membuat <strong>algoritme pemotongan rentang terpisah</strong> yang sangat optimal: bahkan jika Anda mendeklarasikan pola bolak-balik yang kompleks (misalnya halaman ganjil gaya A, halaman genap gaya B), alat ini akan membedah dan menyusun batasan dengan elegan untuk memastikan tampilan sesuai standar yang tepat tanpa membocorkan format ke halaman yang belum dipetakan.</p>\n      <p>Semua operasi diproses seluruhnya di dalam sandbox browser lokal Anda, sehingga menjamin privasi data mutlak.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah Dokumen PDF",
    "description": "Berikan dokumen PDF target yang ingin Anda beri label."
  },
  {
    "step": 2,
    "title": "Konfigurasikan Aturan Pelabelan",
    "description": "Tambahkan satu atau lebih aturan yang menentukan rentang halaman (misalnya, \"1-5\", \"ganjil\", atau daftar yang dipisahkan koma), awalan, gaya, dan urutan awal."
  },
  {
    "step": 3,
    "title": "Pratinjau dan Unduh",
    "description": "Tinjau pratinjau daftar label halaman langsung di bawah, lalu kompilasi dan unduh dokumen PDF Anda yang telah diperbarui."
  }
],
    useCases: [
  {
    "title": "Pemformatan Tesis Akademik",
    "description": "Tetapkan angka Romawi kecil (i, ii, iii) untuk materi depan pendahuluan dan transisi ke desimal untuk bab utama.",
    "icon": "book"
  },
  {
    "title": "Awalan Cetak Biru Teknik",
    "description": "Lampirkan singkatan subsistem (misalnya, \"A-1\", \"M-5\") sebagai awalan label halaman, sehingga tim dapat mencari dan menemukan halaman dalam hitungan detik.",
    "icon": "layout"
  },
  {
    "title": "Tata Letak Bergantian Kustom",
    "description": "Terapkan pengindeksan rentang halaman yang sangat spesifik pada urutan ganjil/genap atau bagian yang tidak bersebelahan dengan kebebasan maksimum.",
    "icon": "shuffle"
  }
],
    faq: [
  {
    "question": "Apa yang dimaksud dengan label halaman vs nomor halaman?",
    "answer": "Nomor halaman biasa adalah blok teks visual yang ditampilkan langsung di atas kanvas kertas (terlihat saat dicetak). Label halaman, bagaimanapun, adalah metadata struktural yang dimasukkan ke dalam katalog PDF. Mereka mengontrol apa yang ditampilkan di bawah thumbnail dan di kotak pencarian halaman di dalam perangkat lunak seperti Adobe Acrobat atau Apple Preview."
  },
  {
    "question": "Apa yang terjadi jika saya membiarkan Rentang Halaman kosong?",
    "answer": "Membiarkan rentang halaman kosong menyebabkan aturan diterapkan secara global ke semua halaman dokumen."
  },
  {
    "question": "Bagaimana cara menangani peraturan yang tumpang tindih?",
    "answer": "Aturan dievaluasi secara berurutan sesuai urutan pencatatannya. Jika rentang halaman dari aturan berikutnya tumpang tindih dengan aturan sebelumnya, aturan selanjutnya akan mengambil prioritas dan mengambil alih label untuk halaman tersebut."
  }
],
  },

  'ai-pdf-reflower': {
    title: 'Aliran Ulang PDF AI',
    metaDescription: "Alur ulang teks PDF agar lebih mudah dibaca di ponsel. Ekspor konten yang diekstraksi sebagai Markdown atau EPUB di browser Anda.",
    keywords: ["aliran ulang pdf","pdf responsif","pdf ke markdown","ekspor epub"],
    description: "<p>AI PDF Layout Reflower adalah teman utama Anda untuk membaca dokumen PDF di perangkat seluler. PDF tradisional menggunakan tata letak tetap, yang sering kali memerlukan pembesaran tanpa henti dan pengguliran horizontal pada ponsel cerdas atau tablet, sehingga menghasilkan pengalaman membaca yang membosankan.</p>\n      <p>Alat ini secara cerdas mengurai alur teks, spasi baris, dan koordinat fisik halaman PDF, merekonstruksi paragraf semantik dan hierarki judul. Untuk dokumen multi-kolom atau dua kolom, secara cerdas menggabungkan alur kolom menjadi satu alur responsif, sehingga memastikan pembacaan lancar.</p>\n      <p>Selain itu, ini mendukung rendering rumus matematika ke dalam LaTeX/MathJax dan menawarkan beberapa tema bacaan (Sepia, Gelap, Hijau Pelindung Mata). Anda dapat mengekspor tata letak yang diubah bentuknya sebagai Markdown atau eBook EPUB standar dengan satu klik.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah Berkas PDF",
    "description": "Seret dan lepas file PDF Anda atau klik untuk menelusuri dan memilihnya."
  },
  {
    "step": 2,
    "title": "Pilih Tema Bacaan",
    "description": "Pilih ukuran font dan warna tema pilihan Anda di simulator seluler 3D di sebelah kanan."
  },
  {
    "step": 3,
    "title": "Ekspor Dokumen",
    "description": "Setelah puas, gunakan tali tarik fisik untuk mengekspor dokumen sebagai Markdown atau EPUB."
  }
],
    useCases: [
  {
    "title": "Bacaan Sastra Seluler",
    "description": "Baca makalah akademis dan laporan penelitian di ponsel Anda dengan lancar tanpa perlu melakukan zoom terus-menerus.",
    "icon": "smartphone"
  },
  {
    "title": "Konversi Ebuku",
    "description": "Ubah PDF berisi teks menjadi file EPUB dan impor ke Kindle atau pembaca ebook lainnya.",
    "icon": "book"
  },
  {
    "title": "Arsip Catatan",
    "description": "Konversi langsung konten PDF terstruktur menjadi file Markdown yang bersih untuk basis pengetahuan pribadi Anda.",
    "icon": "file-text"
  }
],
    faq: [
  {
    "question": "Apakah ini menangani PDF dua kolom dengan benar?",
    "answer": "Ya, tata letak reflower mendeteksi koordinat horizontal blok teks dan menyusun kolom kiri dan kanan secara berurutan, mencegah interleaving garis."
  },
  {
    "question": "Apakah gambar dan rumus matematika akan hilang?",
    "answer": "Rumus matematika dikonversi ke sintaksis LaTeX/MathJax untuk rendering web yang bersih, dan gambar dipertahankan pada posisi semantik yang sesuai."
  },
  {
    "question": "Apakah konversi dilakukan di cloud?",
    "answer": "Tidak, semua analisis tata letak dan pengemasan format dilakukan secara lokal di browser Anda untuk menjamin privasi mutlak dokumen Anda."
  }
],
  },

  'citation-linker': {
    title: 'Aktivator Tautan Sitasi',
    metaDescription: "Ubah penanda kutipan dalam PDF menjadi tautan DOI atau referensi halaman yang dapat diklik. Tambahkan navigasi yang berguna ke dokumen penelitian.",
    keywords: ["tautan sitasi","hiperlink pdf","pencocokan doi","pdf akademis"],
    description: "<p>Citation Linker dirancang khusus untuk peneliti akademis. Di banyak makalah PDF, penanda kutipan (misalnya, [1], [2]) berupa teks biasa, sehingga memaksa pembaca untuk menggulir bolak-balik ke daftar referensi di akhir dokumen, sehingga mengganggu fokus mereka.</p>\n      <p>Alat ini membaca teks PDF secara lokal, menggunakan pengenalan pola untuk mencocokkan penanda kutipan dengan entri referensi terkait, dan melapisi anotasi tautan PDF yang dapat diklik menggunakan pencarian DOI atau koordinat lompat halaman.</p>\n      <p>Ini juga menghasilkan peta hubungan kutipan interaktif untuk menavigasi jaringan referensi dokumen secara visual.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah PDF Akademik",
    "description": "Unggah makalah atau tesis PDF yang berisi bagian bibliografi/referensi."
  },
  {
    "step": 2,
    "title": "Tinjau Kutipan",
    "description": "Periksa pasangan kutipan di peta interaktif dan edit atau tambahkan tautan DOI secara manual jika perlu."
  },
  {
    "step": 3,
    "title": "Suntikkan Tautan",
    "description": "Klik tombol aktifkan untuk menampilkan hyperlink ke PDF dan mengunduh dokumen yang diperbarui."
  }
],
    useCases: [
  {
    "title": "Bacaan Sastra Mendalam",
    "description": "Klik penanda kutipan untuk segera melihat detail referensi atau menavigasi ke halaman DOI eksternal.",
    "icon": "link"
  },
  {
    "title": "Persiapan Pra-publikasi",
    "description": "Pastikan makalah akademis tertulis Anda memiliki navigasi hyperlink yang aktif sepenuhnya sebelum penyerahan akhir.",
    "icon": "award"
  },
  {
    "title": "Analisis Peta Referensi",
    "description": "Memahami hierarki literatur dan koneksi melalui peta topologi jaringan interaktif.",
    "icon": "git-network"
  }
],
    faq: [
  {
    "question": "Bagaimana jika referensi tidak memiliki DOI?",
    "answer": "Jika DOI tidak dapat ditemukan, alat akan kembali ke tindakan internal \"GoTo Page\", yang memungkinkan Anda mengklik penanda dan melompat langsung ke halaman referensi."
  },
  {
    "question": "Format kutipan apa yang didukung?",
    "answer": "Mendukung tanda kurung numerik umum (misalnya, [1], [1-3]) dan kutipan tahun penulis (misalnya, Penulis et al., 202X)."
  },
  {
    "question": "Apakah ini akan mengubah tampilan PDF saya?",
    "answer": "Tidak, ini memasukkan anotasi Tautan yang tidak terlihat di atas teks, mempertahankan tata letak, font, dan gaya asli dokumen Anda."
  }
],
  },

  'vector-extractor': {
    title: 'Ekstraktor Vektor PDF',
    metaDescription: "Ekstrak grafik vektor dari halaman PDF sebagai SVG. Pilih bagan, diagram, dan logo untuk diwarnai ulang dan diekspor.",
    keywords: ["ekstrak vektor pdf","ekspor svg","ekstrak logo","grafis vektor"],
    description: "<p>PDF Vector Extractor membuka jalur vektor dan karya seni yang tertanam di dalam file PDF. Ekstrak bagan, diagram, atau logo vektor dengan mudah dari dokumen untuk pekerjaan desain atau pencetakan.</p>\n      <p>Di balik terpalnya, ia menggunakan rendering SVG fidelitas tinggi untuk mendekonstruksi jalur vektor PDF menjadi pohon elemen SVG standar yang bersih tanpa kehilangan presisi.</p>\n      <p>Antarmuka menyoroti elemen hover dengan efek ledakan lapisan 3D sumbu Z, lengkap dengan panel pemilih warna bagi desainer untuk menyesuaikan dan mengekstrak node vektor.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah Dokumen PDF",
    "description": "Unggah PDF yang berisi aset vektor, diagram, bagan, atau logo."
  },
  {
    "step": 2,
    "title": "Pilih Elemen",
    "description": "Arahkan kursor ke kanvas vektor untuk menyorot elemen, lalu klik untuk memilih simpul."
  },
  {
    "step": 3,
    "title": "Sesuaikan dan Ekspor",
    "description": "Sesuaikan atribut jalur di panel, lalu unduh sebagai SVG atau salin kode sumber SVG."
  }
],
    useCases: [
  {
    "title": "Desain Ekstraksi Aset",
    "description": "Ekstrak logo, ikon, dan ilustrasi perusahaan dengan cepat dari pedoman merek atau brosur.",
    "icon": "bezier"
  },
  {
    "title": "Ekspor Bagan Ilmiah",
    "description": "Ekstrak bagan vektor dari makalah penelitian untuk digunakan dalam pencetakan atau presentasi resolusi tinggi.",
    "icon": "presentation"
  },
  {
    "title": "Pewarnaan Ulang Aset Vektor",
    "description": "Ubah warna guratan dan isian aset yang diekstraksi sebelum menyimpannya untuk proyek web.",
    "icon": "crown"
  }
],
    faq: [
  {
    "question": "Mengapa saya tidak dapat memilih gambar tertentu?",
    "answer": "PDF berisi gambar raster (seperti foto atau halaman pindaian) dan karya seni vektor (seperti bentuk dan kurva). Hanya jalur vektor yang dapat didekonstruksi menjadi jalur SVG."
  },
  {
    "question": "Apakah keluaran SVG berisi gaya?",
    "answer": "Ya, SVG yang diekspor mempertahankan semua properti asli termasuk isian, guratan, opasitas, gradien, dan transformasi koordinat."
  },
  {
    "question": "Apakah file besar akan lag?",
    "answer": "Kami menggunakan akselerasi WebAssembly, tetapi PDF dengan gambar CAD yang sangat kompleks atau ribuan jalur vektor mungkin memerlukan waktu beberapa detik untuk dirender."
  }
],
  },

  'deep-sanitize': {
    title: 'Pembersihan Metadata Mendalam',
    metaDescription: "Hapus metadata, lapisan tersembunyi, dan objek yang tidak digunakan dari PDF. Bersihkan informasi dokumen secara lokal sebelum dibagikan.",
    keywords: ["pembersihan metadata","menganonimkan pdf","keamanan berkas","hapus jejak pdf"],
    description: "<p>Deep Metadata Sanitizer adalah pertahanan utama Anda terhadap kebocoran metadata dan pelacakan tersembunyi. Menggambar kotak hitam di atas teks yang terlihat dalam file PDF saja tidak cukup untuk melindungi rahasia komersial.</p>\n      <p>Alat ini memindai struktur biner PDF untuk menghapus sepenuhnya informasi penulis, perangkat lunak pembuat, log pengeditan (Metadata XMP), cache PieceInfo milik, dan grup konten opsional OCG (sering digunakan untuk tanda air yang tidak terlihat).</p>\n      <p>Ini juga menulis ulang tabel referensi silang (xref) sepenuhnya, membuang semua blok pembaruan tambahan untuk memastikan bahwa data historis yang dihapus atau diubah tidak dapat dipulihkan.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah PDF",
    "description": "Pilih file PDF yang berisi data sensitif atau riwayat modifikasi."
  },
  {
    "step": 2,
    "title": "Jalankan Pemindai",
    "description": "Memicu pemindai penahanan 3D untuk memeriksa file untuk metadata dan lapisan tersembunyi."
  },
  {
    "step": 3,
    "title": "Sanitasi Mendalam",
    "description": "Klik sanitasi untuk menghapus elemen pelacakan dan unduh PDF yang sepenuhnya bersih."
  }
],
    useCases: [
  {
    "title": "Pembagian Kontrak",
    "description": "Hapus catatan penyusunan, jalur, dan revisi sebelumnya sebelum membagikan kontrak bisnis dengan pihak ketiga.",
    "icon": "file-signature"
  },
  {
    "title": "Penerbitan Anonim",
    "description": "Hapus anotasi dan tanda air yang tidak terlihat untuk mempublikasikan dokumen secara anonim dan aman.",
    "icon": "eye-off"
  },
  {
    "title": "Pengoptimalan PDF",
    "description": "Hapus objek yatim piatu dan aliran data sampah untuk membuat file dimuat lebih cepat di web.",
    "icon": "zap"
  }
],
    faq: [
  {
    "question": "Apa bedanya dengan penghapusan metadata standar?",
    "answer": "Alat standar hanya menghapus bidang dasar seperti judul atau penulis. Deep Sanitizer merekonstruksi seluruh tabel xref PDF, menghapus PieceInfo, tanda air tersembunyi, dan revisi bertahap historis."
  },
  {
    "question": "Apakah ini akan memengaruhi tata letak atau teks dokumen?",
    "answer": "Tidak, ini hanya menghapus aliran deskripsi dan data struktur yang tersembunyi. Tata letak, teks, dan grafik yang terlihat tetap tidak berubah."
  },
  {
    "question": "Apakah ini menghapus kata sandi PDF?",
    "answer": "Tidak, jika PDF dienkripsi, Anda harus membuka kuncinya terlebih dahulu sebelum melakukan sanitasi mendalam."
  }
],
  },

  'booklet-folding-simulator': {
    title: 'Simulator Lipat Buku 3D',
    metaDescription: "Susun halaman PDF untuk pencetakan buklet. Pratinjau lembar terlipat dan tata letak jahitan pelana sebelum mengekspor dokumen siap cetak Anda.",
    keywords: ["imposisi 3d","lipat kertas","jilid kawat","layout percetakan"],
    description: "<p>Buklet & Simulator Lipat 3D adalah alat canggih yang dirancang untuk desainer cetak dan profesional penerbitan. Tata letak buku tradisional memerlukan perhitungan overlay halaman yang rumit dan urutan penomoran halaman. Alat ini memvisualisasikan dan mengotomatiskan seluruh proses tersebut.</p>\n      <p>Di balik terpalnya, algoritme penerapan khusus kami memetakan daftar halaman PDF berurutan ke dalam tata letak lembar cetak standar (seperti lipatan setengah halaman 4 halaman, jahitan pelana 8 halaman, atau lipatan akordeon), menggabungkan halaman ke bagian depan dan belakang lembar fisik besar.</p>\n      <p>Di bagian depan, kami menggunakan transformasi Matriks 3D CSS murni dan kurva fisika massa pegas untuk menganimasikan lipatan lembaran secara horizontal dan vertikal, sehingga menghadirkan pratinjau penjilidan seperti fisik dengan faktor WOW yang tinggi.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah Berkas PDF",
    "description": "Seret dan lepas dokumen PDF yang ingin Anda tata letak untuk dicetak."
  },
  {
    "step": 2,
    "title": "Pilih Tata Letak Lipat",
    "description": "Pilih skema pemaksaan yang Anda sukai (misalnya, lipatan 4 halaman, jahitan sadel 8 halaman, akordeon 4 halaman)."
  },
  {
    "step": 3,
    "title": "Pratinjau 3D Interaktif",
    "description": "Tarik penggeser untuk melihat lembaran terlipat dalam 3D dan periksa tata letak penomoran halaman akhir."
  },
  {
    "step": 4,
    "title": "Hasilkan PDF yang Dipaksakan",
    "description": "Klik hasilkan untuk mengunduh lembar fisik PDF yang disusun ulang dan digabungkan, siap untuk pencetakan dua sisi."
  }
],
    useCases: [
  {
    "title": "Pembuatan Prototipe Brosur",
    "description": "Visualisasikan terlebih dahulu urutan lipatan tiga dan pamflet untuk mencegah halaman terbalik setelah dicetak.",
    "icon": "book-open"
  },
  {
    "title": "Jahitan Sadel Buku",
    "description": "Menghasilkan lembar cetak yang dikenakan untuk majalah atau buklet multi-halaman secara otomatis.",
    "icon": "layers"
  },
  {
    "title": "Alat Bantu Visual Toko Percetakan",
    "description": "Bantu klien memvisualisasikan bagaimana halaman didistribusikan secara fisik dan dilipat pada lembaran cetak.",
    "icon": "printer"
  }
],
    faq: [
  {
    "question": "Apa itu \"Pembebanan\"?",
    "answer": "Pengenaan adalah langkah mendasar dalam pencetakan pracetak. Karena mesin cetak komersial mencetak pada lembaran besar, halaman-halamannya disusun tidak berurutan sehingga setelah dicetak, dilipat, dan dijilid, halaman-halaman tersebut muncul dalam urutan yang benar. Alat ini secara otomatis menghitung tata letak itu."
  },
  {
    "question": "Apakah pratinjau 3D mengubah konten PDF saya?",
    "answer": "Tidak, konten PDF asli hanya ditampilkan sebagai pemetaan tekstur ke lembar 3D. PDF yang dihasilkan hanya menyesuaikan urutan halaman dan penempatan; kualitas teks dan grafis tetap utuh."
  },
  {
    "question": "Bagaimana jika jumlah halaman PDF saya bukan kelipatan 4 atau 8?",
    "answer": "Pengoptimal secara otomatis menambahkan halaman kosong di bagian akhir untuk memenuhi persyaratan jumlah halaman matematis dari tata letak lipat yang dipilih."
  }
],
  },

  'pdf-to-slide': {
    title: 'PDF ke Slide',
    metaDescription: "Konversi konten PDF ke slide PowerPoint. Ekspor presentasi PPTX dengan teks dan gambar untuk pengeditan lebih lanjut.",
    keywords: ["pdf ke ppt","rekonstruksi slide","ekstrak diagram","file pptx"],
    description: "<p>AI PDF-to-Slide Reconstructor memberikan kehidupan baru ke dalam dokumen PDF statis, mengubahnya menjadi slide PowerPoint (PPTX) yang modern dan sangat dapat disesuaikan.</p>\n      <p>Alat ini menggunakan ekstraktor kerangka tata letak tingkat lanjut yang secara otomatis menguraikan tingkat judul dokumen, baris paragraf, dan bobot font untuk membuat kerangka slide yang logis. Ini juga mengisolasi diagram vektor dan tabel resolusi tinggi, menghapus artefak latar belakang untuk menyematkannya dengan rapi sebagai aset independen yang dapat diedit.</p>\n      <p>Semua keluaran PPTX dibuat menggunakan elemen Office Open XML standar, yang berarti semua teks tetap dapat diedit sepenuhnya dan vektor tidak kehilangan resolusi. Bagian depan menampilkan animasi transisi kartu \"starfield\" yang lancar dan memvisualisasikan rekonstruksi dengan cara yang menarik.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah PDF Akademik/Bisnis",
    "description": "Unggah dokumen PDF yang berisi bagian dan diagram terstruktur."
  },
  {
    "step": 2,
    "title": "Analisis Garis Besar Slide",
    "description": "Periksa struktur slide yang diekstraksi, sesuaikan judul, atau hapus blok kartu yang tidak diperlukan."
  },
  {
    "step": 3,
    "title": "Rekonstruksi ke PPTX",
    "description": "Jalankan mesin kompilasi untuk menerima file presentasi standar yang dapat diedit."
  }
],
    useCases: [
  {
    "title": "Presentasi Makalah Penelitian",
    "description": "Ubah PDF jurnal akademis, struktur teks, dan diagram vektor menjadi kumpulan slide yang siap untuk diskusi.",
    "icon": "graduation-cap"
  },
  {
    "title": "Ringkasan Laporan Bisnis",
    "description": "Saring laporan perusahaan tahunan dalam jumlah besar menjadi draf presentasi yang rapi dan berpoin secara instan.",
    "icon": "presentation"
  },
  {
    "title": "Demo Multi-Perangkat",
    "description": "Hindari menyalin tangkapan layar secara manual. Dapatkan kerangka tata letak yang bersih dan dapat diedit sepenuhnya dalam hitungan detik.",
    "icon": "laptop"
  }
],
    faq: [
  {
    "question": "Apakah slide dapat diedit di Microsoft Office?",
    "answer": "Ya. File dihasilkan secara asli di memori sesuai dengan spesifikasi resmi Office Open XML (OOXML). Teks, tabel, dan placeholder sepenuhnya interaktif di PowerPoint, Keynote, dan WPS."
  },
  {
    "question": "Bagaimana cara mengekstrak grafik?",
    "answer": "Mesin memindai jalur vektor dan lapisan raster dalam PDF, mendeteksi area terbatas yang mewakili grafik, dan memotongnya sebagai node SVG mandiri atau gambar DPI tinggi."
  },
  {
    "question": "Apakah ini berfungsi pada dokumen yang dipindai?",
    "answer": "Untuk PDF pindaian yang tidak memiliki lapisan teks sebenarnya, sebaiknya jalankan alat OCR kami terlebih dahulu sebelum meneruskan file ke Slide Reconstructor."
  }
],
  },

  'eink-optimizer': {
    title: 'Pengoptimal Pembaca e-Ink',
    metaDescription: "Optimalkan halaman PDF untuk pembaca e-ink. Bersihkan latar belakang, tingkatkan kontras teks, dan sesuaikan dokumen agar lebih mudah dibaca.",
    keywords: ["optimasi eink","binarisasi otsu","tebalkan tulisan","baca e-reader"],
    description: "<p>e-Ink Reader Optimizer adalah alat yang wajib dimiliki dan dibuat khusus untuk penggemar e-Reader yang menggunakan Kindle, Onyx Boox, Kobo, atau perangkat e-paper lainnya.</p>\n      <p>Banyak e-book PDF yang dipindai memiliki tulisan samar, latar belakang abu-abu berlumpur, kebisingan, atau bayangan pemindaian saat dilihat di layar e-Ink. Alat ini menganalisis histogram nilai abu-abu dan menerapkan Ambang Batas Binarisasi Otsu untuk memisahkan teks dari latar belakang, mengubah latar belakang abu-abu menjadi putih bersih.</p>\n      <p>Selain itu, ini mengintegrasikan pelebaran morfologi untuk menebalkan dan mempertebal karakter tipis dan pudar, menghasilkan tipografi yang tajam dan kontras tinggi. Penggeser kontras dengan peredam inersia memungkinkan Anda menyempurnakan kontras seperti kertas secara real-time.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah PDF yang Dipindai",
    "description": "Unggah e-book atau dokumen pindaian dengan teks samar atau latar belakang abu-abu."
  },
  {
    "step": 2,
    "title": "Sesuaikan Penggeser Kontras",
    "description": "Tarik penggeser teredam untuk menyeimbangkan penghapusan latar belakang dan penebalan karakter secara real-time."
  },
  {
    "step": 3,
    "title": "Optimalkan dan Unduh",
    "description": "Proses seluruh PDF untuk menghasilkan dokumen dengan kontras tinggi dan ramah mata yang disesuaikan untuk e-Ink."
  }
],
    useCases: [
  {
    "title": "Restorasi Naskah Kuno",
    "description": "Menebalkan teks pudar pada pindaian buku sejarah atau manuskrip tulisan tangan agar mudah dibaca.",
    "icon": "scroll"
  },
  {
    "title": "Pembersihan Lembar Ujian",
    "description": "Memutihkan bayangan latar belakang dari ujian yang difotokopi atau difoto, mengembalikan teks hitam bersih di atas kertas putih.",
    "icon": "file-text"
  },
  {
    "title": "Penjahitan Perangkat E-paper",
    "description": "Konversikan PDF berwarna ke skala abu-abu yang dioptimalkan, mencegah artefak berantakan dan ragu-ragu di layar monokrom.",
    "icon": "tablet"
  }
],
    faq: [
  {
    "question": "Bagaimana cara kerja \"huruf tebal\"?",
    "answer": "Dalam pemrosesan gambar, ini disebut dilatasi. Ia menggunakan matriks penataan untuk memperluas margin karakter sebesar satu piksel, secara fisik mempertebal guratan samar agar dapat dibaca."
  },
  {
    "question": "Apakah proses ini akan membuat ukuran file membengkak?",
    "answer": "Justru sebaliknya. Dengan melakukan binarisasi gambar berwarna/skala abu-abu yang kompleks menjadi tata letak hitam-putih sederhana, kompresi standar (seperti CCITT Grup 4) dapat memperkecil ukuran file PDF secara signifikan."
  },
  {
    "question": "Apakah ini mendukung PDF teks asli?",
    "answer": "Ya. PDF vektor asli dirasterisasi pada resolusi tinggi di latar belakang, dioptimalkan, dan dikompilasi kembali, memastikan pembacaan kontras tinggi yang terpadu."
  }
],
  },

  'cert-cryptor': {
    title: 'Enkripsi Sertifikat',
    metaDescription: "Enkripsi dan tandatangani dokumen PDF secara digital menggunakan sertifikat. Bekerja dengan file sertifikat secara lokal di browser Anda.",
    keywords: ["enkripsi sertifikat","segel lilin 3d","tanda tangan digital","pkcs7"],
    description: "<p>Segel Lilin 3D & Sertifikat Cryptor memberikan keamanan tingkat militer dan estetika tingkat fisik premium untuk file, gelar, atau perjanjian perusahaan yang sensitif.</p>\n      <p>Secara teknis, ia menawarkan enkripsi kunci publik asimetris: mengimpor sertifikat kunci publik penerima (.cer/.crt) untuk mengunci aliran PDF; hanya pemegang kunci pribadi yang cocok (.pfx) yang dapat mendekripsinya. Ini juga menghasilkan tanda tangan digital standar PKCS#7 untuk memastikan integritas dokumen yang tahan terhadap kerusakan.</p>\n      <p>Secara visual, kami menampilkan stempel segel lilin emas atau merah fisik 3D. Saat Anda menandatangani, prangko yang ditampilkan dengan indah akan muncul dengan suara mekanis yang memuaskan, meninggalkan segel lilin 3D dengan variasi ketinggian yang dipetakan normal dan aliran lilin yang realistis di halaman, dikelilingi oleh trek kriptografi yang bersinar.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah PDF dan Sertifikat",
    "description": "Tambahkan PDF Anda dan impor sertifikat penandatanganan Anda (.pfx) atau sertifikat publik penerima (.cer)."
  },
  {
    "step": 2,
    "title": "Tempatkan Stempel 3D",
    "description": "Seret dan temukan segel pada pratinjau dokumen, lalu pilih gaya lilin (misalnya, emas, merah tua)."
  },
  {
    "step": 3,
    "title": "Tekan dan Tanda Tangan",
    "description": "Klik jalankan untuk menyaksikan upacara pencetakan segel lilin 3D, yang menghasilkan tanda tangan digital tingkat fisik."
  },
  {
    "step": 4,
    "title": "Unduh PDF Aman",
    "description": "Simpan dokumen keluaran, sekarang dikunci dan dicap secara kriptografis."
  }
],
    useCases: [
  {
    "title": "Ijazah dan Sertifikat",
    "description": "Tempelkan lencana segel lilin 3D yang bernilai tinggi pada ijazah dan penghargaan digital, yang didukung dengan tanda tangan digital asli.",
    "icon": "award"
  },
  {
    "title": "Perjanjian Rahasia",
    "description": "Kunci kontrak sensitif menggunakan sertifikat publik klien sehingga hanya kartu kunci fisik aman yang dapat membuka kuncinya.",
    "icon": "shield-alert"
  },
  {
    "title": "Siaran Pers Resmi",
    "description": "Menandatangani pengumuman publik secara digital untuk mencegah pengeditan teks yang berbahaya atau spoofing.",
    "icon": "stamp"
  }
],
    faq: [
  {
    "question": "Apakah segel lilin hanya sebuah gambar atau tanda tangan asli?",
    "answer": "Keduanya. Sistem ini menghasilkan cetakan lilin 3D yang sangat realistis dengan kedalaman yang dipetakan secara normal (lapisan visual) dan mengkodekan tanda tangan kriptografi PKCS#7 yang autentik dan tahan kerusakan di dalam PDF (lapisan data)."
  },
  {
    "question": "Apa itu \"Enkripsi Berbasis Sertifikat\"?",
    "answer": "Ini adalah teknik enkripsi tanpa kata sandi. Anda mengenkripsi file menggunakan kunci publik penerima. Pembaca secara otomatis mencari sertifikat pribadi lokalnya untuk mendekripsi file dengan lancar, memastikan keamanan yang kuat."
  },
  {
    "question": "Bisakah saya menyesuaikan desain prangko?",
    "answer": "Ya. Kami menyediakan beberapa desain seperti tanda air AwsomePDF atau lambang Royal, dan Anda dapat menyesuaikan radius leleh lilin dan kedalaman lekukan peta normal di panel."
  }
],
  },

  'passport-id-composer': {
    title: 'Salin ID Dua Sisi',
    metaDescription: "Gabungkan bagian depan dan belakang KTP atau paspor dalam satu halaman PDF A4. Atur pindaian dan tambahkan tanda air opsional.",
    keywords: ["salinan ktp","ktp bolak balik a4","salinan paspor","watermark ktp"],
    description: "<p>Komposer Dua Sisi Paspor & ID adalah utilitas produktivitas yang sangat berguna untuk operasi standar bisnis dan pribadi.</p>\n      <p>Saat mengajukan permohonan rekening bank, orientasi, atau penandatanganan perjanjian, kami sering kali memerlukan salinan kedua sisi kartu identitas. Alat ini menerima gambar depan/belakang atau halaman PDF dan menyusunnya secara tepat ke dalam satu halaman A4 sesuai dengan resolusi tata letak standar nasional.</p>\n      <p>Selanjutnya, Anda dapat menyesuaikan tanda air anti-pemalsuan tembus pandang yang tumpang tindih (misalnya, \"KHUSUS UNTUK ONBOARDING\") untuk mencegah penggunaan kembali dokumen yang tidak sah. Bahkan dilengkapi efek visual pintu pemindai mesin fotokopi penyapu laser cahaya 3D untuk memberikan masukan premium.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah file ID",
    "description": "Unggah foto depan dan belakang/scan KTP atau paspor Anda (maksimal 2 file)."
  },
  {
    "step": 2,
    "title": "Konfigurasikan tanda air aman",
    "description": "Masukkan hamparan teks khusus untuk membatasi replikasi dokumen yang tidak sah."
  },
  {
    "step": 3,
    "title": "Tulis & unduh",
    "description": "Klik jalankan untuk menghasilkan satu halaman PDF A4 siap cetak."
  }
],
    useCases: [
  {
    "title": "Pengajuan orientasi SDM",
    "description": "Sejajarkan salinan ID karyawan dengan cepat dan terapkan tanda air pelindung.",
    "icon": "user"
  },
  {
    "title": "Layanan pemerintah & perbankan",
    "description": "Menyiapkan cetakan tanda pengenal standar yang memenuhi persyaratan arsip fisik.",
    "icon": "landmark"
  },
  {
    "title": "Cadangan perjalanan",
    "description": "Susun halaman paspor dan rincian visa ke dalam kertas A4 terpadu.",
    "icon": "plane"
  }
],
    faq: [
  {
    "question": "Akankah tanda air memblokir detail teks identitas?",
    "answer": "Tidak. Tanda air diberikan pada opasitas 15% yang disetel dengan cermat untuk memblokir pemalsuan tanpa mengorbankan keterbacaan bidang teks atau foto."
  },
  {
    "question": "Apakah ukuran kartu gabungan akurat?",
    "answer": "Ya. Ini menampilkan kartu ID pada dimensi fisik standar 85,6mm × 54mm dengan skala sempurna pada halaman A4."
  },
  {
    "question": "Apakah ini mendukung SIM?",
    "answer": "Ya, ini berfungsi dengan baik untuk semua pemindaian identitas berbasis kartu."
  }
],
  },

  'annotation-exporter': {
    title: 'Ekspor Catatan',
    metaDescription: "Ekspor komentar PDF, catatan, sorotan, dan garis bawah ke Markdown atau JSON. Atur anotasi untuk studi, ulasan, dan penelitian.",
    keywords: ["ekstrak anotasi pdf","ekspor highlight","catatan bacaan","file markdown"],
    description: "<p>Pengekspor Anotasi Cerdas adalah ruang kerja canggih yang memberikan manfaat penuh dari anotasi PDF Anda.</p>\n      <p>Saat melakukan tinjauan pustaka atau membaca eBook ekstensif, kami banyak menggunakan sorotan dan catatan tempel. Alat ini membatalkan serialisasi kamus <code>/Annots</code> PDF tingkat rendah dan mengekstrak semua sorotan, catatan, garis bawah, dan penanda tinta yang digambar tangan.</p>\n      <p>Secara otomatis menyelaraskan komentar dengan header kerangka masing-masing, menghasilkan Markdown terstruktur atau notebook JSON dengan jangkar referensi halaman. Saksikan sorotan Anda terlihat indah di panel buku catatan kaca buram.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Impor PDF beranotasi",
    "description": "Unggah esai atau buku PDF apa pun yang berisi garis bawah, sorotan, atau komentar Anda."
  },
  {
    "step": 2,
    "title": "Konfigurasikan filter & format",
    "description": "Pilih jenis anotasi yang ingin Anda ekstrak dan pilih Penurunan harga atau JSON."
  },
  {
    "step": 3,
    "title": "Ekstrak buku catatan",
    "description": "Klik jalankan untuk mengurai aliran komentar dan menyusun ringkasan kerangka Anda."
  }
],
    useCases: [
  {
    "title": "Sintesis literatur ilmiah",
    "description": "Ekstrak catatan bacaan di beberapa makalah ke dalam templat penurunan harga untuk membuat ulasan yang menarik secara instan.",
    "icon": "graduation-cap"
  },
  {
    "title": "Penyusunan jurnal studi",
    "description": "Kumpulkan wawasan indah dan komentar pribadi dari buku teks ke dalam database Obsidian.",
    "icon": "book"
  },
  {
    "title": "Dokumentasikan audit kolaboratif",
    "description": "Kumpulkan koreksi tinjauan dari anggota tim yang berbeda dan buat daftar tugas yang dapat ditindaklanjuti.",
    "icon": "users"
  }
],
    faq: [
  {
    "question": "Bisakah ia mengekstrak goresan tinta tablet yang digambar tangan?",
    "answer": "Ya. Selama tanda yang digambar tangan disimpan sebagai anotasi Tinta PDF standar, alat ini dapat dengan sempurna mengisolasi dan menyusun posisi halamannya."
  },
  {
    "question": "Mengapa beberapa ekstrak yang disorot kosong?",
    "answer": "Jika PDF merupakan pindaian gambar yang tidak dapat dicari dan tidak memiliki teks dasar, sorotan hanya akan menyimpan koordinat. Jalankan OCR pada PDF terlebih dahulu, lalu ekstrak anotasi."
  },
  {
    "question": "Apakah tautan penurunan harga melompat kembali ke PDF?",
    "answer": "File yang diekspor mencantumkan nomor halaman yang tepat dan judul kerangka asli untuk membuat referensi silang menjadi lancar."
  }
],
  },

  'batch-watermark-remover': {
    title: 'Hapus Tanda Air',
    metaDescription: "Hapus tanda air teks dan gambar yang cocok dari PDF. Tinjau hasilnya untuk memeriksa apakah konten dokumen dipertahankan.",
    keywords: ["hapus watermark pdf","bersihkan logo halaman","pengeditan dokumen"],
    description: "<p>Penghilang Tanda Air Batch adalah pembersih PDF canggih yang membersihkan dokumen secara fisik.</p>\n      <p>Penghapus watermark umum biasanya hanya melapisi blok putih atau mengubah spasi dokumen. Alat ini menggunakan teknik <strong>Pembersihan Aliran Konten</strong> yang canggih.</p>\n      <p>Ini mem-parsing operator rendering tingkat rendah setiap halaman, mengidentifikasi perintah string tanda air tertentu (misalnya \"Rahasia\", \"DRAFT\") atau objek gambar latar belakang, dan secara fisik menghapus atau menimpanya. Tanda air hilang sepenuhnya, mempertahankan format asli dan kualitas vektor.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah file yang diberi tanda air",
    "description": "Berikan dokumen PDF yang menunjukkan logo komersial atau label keamanan."
  },
  {
    "step": 2,
    "title": "Tentukan tanda air target",
    "description": "Masukkan string yang ingin dihapus, atau alihkan pembersihan gambar XObject tembus pandang."
  },
  {
    "step": 3,
    "title": "Jalankan pembersihan fisik",
    "description": "Klik jalankan untuk menghapus operator konten dengan fidelitas tinggi."
  }
],
    useCases: [
  {
    "title": "Pengarsipan aset perusahaan",
    "description": "Hapus tanda air \"Rahasia\" atau \"Draft\" yang sudah kadaluwarsa untuk distribusi ke masyarakat umum.",
    "icon": "archive"
  },
  {
    "title": "Membersihkan kekacauan latar belakang",
    "description": "Gosok gambar latar belakang tebal yang mengalihkan perhatian pembaca dari pemindaian teks.",
    "icon": "eye"
  },
  {
    "title": "Penggunaan kembali dokumen",
    "description": "Bersihkan elemen branding footer halaman lama untuk menerapkan template perusahaan baru dengan mudah.",
    "icon": "copy"
  }
],
    faq: [
  {
    "question": "Apakah tanda air yang telah dihapus dapat dipulihkan?",
    "answer": "Tidak. Tidak seperti masker visual, kami menulis ulang aliran biner halaman untuk menghapus operator, tanpa meninggalkan jejak."
  },
  {
    "question": "Apakah ini mendukung gradien kompleks?",
    "answer": "Jika tanda air disimpan sebagai simpul teks terpisah atau gambar XObject, alat dapat mengisolasi dan menghapusnya secara fisik."
  },
  {
    "question": "Apakah ini akan mengubah teks halaman normal?",
    "answer": "Tidak. Mesin scrubbing hanya menargetkan operator yang cocok dengan tanda air yang ditentukan; teks biasa tetap tidak tersentuh."
  }
],
  },

  'smart-data-redactor': localizedRedactionContent('id', 'smart-data-redactor', 'Redaksi Data Sensitif'),

  'bookmarks-auto-generator': {
    title: 'Buat Buku Petunjuk',
    metaDescription: "Hasilkan bookmark PDF dari judul dan pola teks. Tambahkan garis besar yang dapat dinavigasi ke dokumen, manual, dan laporan yang panjang.",
    keywords: ["bookmark otomatis pdf","pohon navigasi","struktur dokumen"],
    description: "<p>Generator Bookmark Otomatis menghadirkan kejelasan mutlak pada dokumen PDF yang panjang dan tidak terstruktur.</p>\n      <p>Memindai buku atau buklet tanpa navigasi garis besar memang menyakitkan. Alat ini menguraikan hierarki tipografi (seperti ukuran dan bobot font) bersama dengan aturan ekspresi reguler (seperti \"Bab 1\", \"Bagian 1.1\") untuk menyimpulkan judul secara otomatis.</p>\n      <p>Kemudian mengkompilasi dan memasukkan judul-judul ini langsung ke kamus <code>/Garis Besar</code> PDF. Setiap penampil standar kemudian akan menampilkan sidebar navigasi multi-level yang terstruktur dengan indah, didukung oleh pratinjau pohon garis 3D interaktif.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Menyediakan PDF tidak terstruktur",
    "description": "Unggah brosur besar, makalah akademis, atau eBook yang tidak memiliki sidebar katalog."
  },
  {
    "step": 2,
    "title": "Sesuaikan aturan judul",
    "description": "Konfigurasikan strategi yang menentukan ambang batas ukuran font minimum dan aturan kecocokan."
  },
  {
    "step": 3,
    "title": "Bangun dan suntikkan",
    "description": "Klik jalankan untuk merender simpul kerangka dan secara fisik menulis penanda kerangka."
  }
],
    useCases: [
  {
    "title": "Pengorganisasian manual teknis",
    "description": "Kompilasi otomatis bab multi-level untuk pedoman standar, menghemat waktu pengindeksan manual.",
    "icon": "tool"
  },
  {
    "title": "Persiapan Tesis",
    "description": "Masukkan bookmark bersarang yang bersih dan sesuai dengan standar penyerahan akademik yang tepat.",
    "icon": "graduation-cap"
  },
  {
    "title": "Pengoptimalan navigasi ebook",
    "description": "Susun publikasi teks yang dipindai menjadi bab-bab yang dapat dibaca untuk tablet atau pembaca seluler.",
    "icon": "tablet"
  }
],
    faq: [
  {
    "question": "Bisakah cocok dengan format bab khusus?",
    "answer": "Ya. Anda dapat menambahkan pola regex khusus di panel sidebar (misalnya, `^Part\\s+\\w+`) untuk menargetkan tata letak unik."
  },
  {
    "question": "Apakah ini akan mempengaruhi presentasi halaman visual?",
    "answer": "Tidak. Alat ini hanya menambahkan katalog penanda struktural internal. Teks dan aset visual halaman tetap tidak tersentuh."
  },
  {
    "question": "Berapa banyak level penanda yang didukung?",
    "answer": "Alat ini mendukung struktur bookmark yang sangat bertumpuk, memungkinkan tata letak bab, bagian, dan subbagian."
  }
],
  },

  'batch-barcode-injector': {
    title: 'Suntik Barcode Massal',
    metaDescription: "Tambahkan kode QR atau kode batang Kode 128 ke halaman PDF secara massal. Sesuaikan penempatan untuk pelacakan dokumen, label, dan alur kerja pencetakan.",
    keywords: ["suntik qr pdf","barcode massal","penomoran dokumen"],
    description: "<p>Injektor presisi Batch Barcode menjembatani pelacakan aset digital dengan pengindeksan dokumen fisik.</p>\n      <p>Dalam pergudangan, peninjauan kontrak, atau logistik, kita sering kali perlu memberi stempel kode batang unik pada faktur atau kartu perangkat. Alat ini membuatnya sangat mudah.</p>\n      <p>Buat kode QR atau kode batang Code128 yang sangat mudah dibaca, dan gunakan ruang kerja penyelarasan kami yang indah dengan panduan laser hijau untuk memposisikannya. Bunyi bip audio pemindaian yang bersih terpicu saat penempatan, memberikan masukan yang sangat premium.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah dokumen",
    "description": "Seret dan lepas PDF satu atau beberapa halaman yang mewakili perjanjian atau daftar pengiriman."
  },
  {
    "step": 2,
    "title": "Posisikan koordinat kode batang",
    "description": "Tetapkan jenis kode, nilai, dan seret kotak penempatan untuk menentukan koordinat."
  },
  {
    "step": 3,
    "title": "Perangko dan unduh",
    "description": "Klik jalankan untuk merender lapisan kode ke indeks halaman yang ditargetkan."
  }
],
    useCases: [
  {
    "title": "Penelusuran validasi kontrak",
    "description": "Terapkan kode QR unik yang menunjukkan detail anti-pemalsuan pada header kontrak.",
    "icon": "file-check"
  },
  {
    "title": "Pengkodean daftar pengiriman",
    "description": "Tempatkan kode batang Code128 di tempat target untuk validasi senjata pemindaian gudang dengan cepat.",
    "icon": "truck"
  },
  {
    "title": "Carding pendaftaran aset",
    "description": "Tambahkan kode QR inventaris yang menampilkan spesifikasi pemeliharaan ke lembar peralatan fisik.",
    "icon": "archive"
  }
],
    faq: [
  {
    "question": "Apakah kode batang yang dihasilkan mudah dipindai?",
    "answer": "Ya. Kami menyematkan representasi PNG resolusi tinggi lossless yang tetap tajam bahkan ketika dicetak pada dimensi yang sangat kecil."
  },
  {
    "question": "Bisakah saya memasukkan nilai unik di setiap halaman?",
    "answer": "Saat ini, proses batch menerapkan kode terkonfigurasi yang sama ke semua halaman yang dipilih. Impor excel multi-nilai direncanakan dalam pembaruan mendatang."
  },
  {
    "question": "Apa yang diwakili oleh koordinat `pt`?",
    "answer": "`pt` (Titik) adalah unit fisik PDF standar (72 pt = 1 inci). Halaman A4 direpresentasikan sebagai 595 × 842 pt."
  }
],
  },

  'signature-ink-optimizer': {
    title: 'Ekstrak Tanda Tangan',
    metaDescription: "Ekstrak tanda tangan atau stempel dari foto dan hapus latar belakangnya. Unduh PNG transparan untuk digunakan dalam dokumen.",
    keywords: ["ekstrak tanda tangan","stempel transparan","bersihkan coretan kertas"],
    description: "<p>Pengoptimal Tinta Kroma Tanda Tangan & Stempel berfungsi sebagai pemurni tinta profesional dengan ketelitian tinggi.</p>\n      <p>Tanda tangan atau stempel perusahaan yang terekam di ponsel sering kali memiliki warna kertas kuning, bayangan tidak rata, dan halaman berkerut. Menempelkannya langsung ke PDF kontrak terlihat amatir.</p>\n      <p>Alat ini memisahkan saluran Alpha berdasarkan pencahayaan dan ruang warna. Ini benar-benar memutihkan latar belakang kertas sambil mempertajam stempel merah (Tinta Chroma) dan tulisan tangan menjadi hitam. Hasilnya adalah stempel PNG transparan premium dengan tekstur tinta asli.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah foto segel",
    "description": "Berikan foto tanda tangan atau stempel Anda yang diambil melalui telepon."
  },
  {
    "step": 2,
    "title": "Sesuaikan penggeser pembersih",
    "description": "Pindahkan penggeser kontras dan pencahayaan untuk mengisolasi kebisingan latar belakang secara real-time."
  },
  {
    "step": 3,
    "title": "Unduh tanda tangan bersih",
    "description": "Ekspor sebagai PNG transparan dan siap untuk dicap pada perjanjian dokumen formal."
  }
],
    useCases: [
  {
    "title": "Persiapan tanda tangan elektronik profesional",
    "description": "Ubah foto tanda tangan abu-abu menjadi lapisan transparan yang indah untuk menandatangani perjanjian.",
    "icon": "file-signature"
  },
  {
    "title": "Sanitasi segel perusahaan",
    "description": "Bersihkan pindaian prangko fisik dengan menghilangkan kebisingan serat kertas, siapkan segel prangko transparan yang tajam.",
    "icon": "stamp"
  },
  {
    "title": "Ekstraksi seni garis yang ditarik",
    "description": "Pisahkan guratan hitam dari buku sketsa gambar untuk memudahkan alur kerja pewarnaan Photoshop.",
    "icon": "edit"
  }
],
    faq: [
  {
    "question": "Apa perbedaan ekstraksi Alpha adaptif mandiri dengan penguncian normal?",
    "answer": "Penguncian kroma standar sering kali membuat detail guratan tanda tangan terlihat kotak-kotak dan berpiksel. Algoritme kami hanya mengisolasi kebisingan latar belakang putih/kuning dan menghaluskan batas tinta."
  },
  {
    "question": "Format gambar apa yang didukung?",
    "answer": "Kami mendukung JPG, JPEG, dan PNG. Untuk hasil terbaik, ambil foto khas Anda di bawah pencahayaan yang terang dan merata."
  },
  {
    "question": "Apakah detail tulisan tangan akan diubah?",
    "answer": "Tidak. Pemfilteran piksel bekerja pada koordinat asli, mempertajam kontras sambil mempertahankan tekstur guratan asli."
  }
],
  },

  'dead-link-debugger': {
    title: 'Perbaiki Tautan Rusak',
    metaDescription: "Periksa hyperlink PDF dan ganti tujuan yang rusak atau ketinggalan jaman. Pindai anotasi tautan dan simpan dokumen yang diperbarui.",
    keywords: ["tautan rusak pdf","perbaiki link pdf","edit url dokumen"],
    description: "<p>Dead Link Debugger adalah editor struktural mendalam yang menjamin kualitas interaksi tautan dalam file yang dipublikasikan.</p>\n      <p>URL yang rusak (404/500) di dalam manual, whitepaper, atau panduan mengurangi otoritas pencitraan merek. Alat ini memungkinkan Anda mengelola database hyperlink dengan lancar.</p>\n      <p>Ini mem-parsing kamus <code>/Link</code> tingkat rendah di setiap halaman, memeriksanya, dan menampilkan status tautan dalam kotak interaktif (merah untuk tautan mati, oranye untuk pengalihan). Cukup ketikkan URL pengalihan yang diperbarui, dan alat tersebut akan langsung menulis target baru kembali ke aliran biner PDF.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Berikan dokumen target",
    "description": "Unggah manual PDF atau katalog yang berisi tautan untuk melakukan debug."
  },
  {
    "step": 2,
    "title": "Pindai dan perbarui",
    "description": "Biarkan debugger mengekstrak semua entitas URL. Masukkan URL pengalihan baru untuk item yang rusak."
  },
  {
    "step": 3,
    "title": "Simpan pembaruan pengalihan",
    "description": "Klik jalankan untuk menulis ulang tindakan /URI dan mengunduh PDF yang telah diperbaiki."
  }
],
    useCases: [
  {
    "title": "Perbaikan terbaru tautan rusak pamflet",
    "description": "Segera perbaiki url yang salah pada pamflet yang diterbitkan tanpa membuka kembali editor desain asli.",
    "icon": "refresh-cw"
  },
  {
    "title": "Verifikasi tautan bibliografi",
    "description": "Verifikasi tautan bibliografi akademik dalam laporan, perbarui referensi untuk menjaga otoritas.",
    "icon": "book"
  },
  {
    "title": "Pembaruan rebranding perusahaan",
    "description": "Perbarui URL lama secara batch di seluruh PDF perusahaan ketika nama domain perusahaan diubah.",
    "icon": "globe"
  }
],
    faq: [
  {
    "question": "Mengapa keterjangkauan tautan tidak sepenuhnya diperiksa secara online?",
    "answer": "Browser web menerapkan kebijakan CORS ketat yang memblokir pemeriksaan tautan multi-asal secara langsung. Alat kami mencantumkan tautan dengan jelas dan memungkinkan Anda memperbaikinya secara manual."
  },
  {
    "question": "Apakah ini akan mengubah representasi teks visual pada halaman?",
    "answer": "Tidak. Ini hanya mengubah tindakan navigasi `/URI` yang mendasarinya. Teks tautan visual tetap tidak berubah."
  },
  {
    "question": "Apakah ini mendukung modifikasi penanda halaman internal?",
    "answer": "Alat ini menangani hyperlink `/URI` eksternal. Untuk navigasi tata letak internal, gunakan alat TOC interaktif kami."
  }
],
  },

  'interactive-toc-generator': {
    title: 'Daftar Isi Interaktif',
    metaDescription: "Tambahkan daftar isi yang dapat diklik ke PDF Anda. Buat tautan bab dan kembalikan navigasi untuk penelusuran dokumen yang lebih mudah.",
    keywords: ["daftar isi interaktif","generator toc","kembali ke daftar isi"],
    description: "<p>Pembuat TOC Interaktif memperkenalkan pengalaman navigasi revolusioner pada PDF yang luas.</p>\n      <p>Membolak-balik ratusan halaman dalam dokumen tidak terstruktur untuk menemukan bab target memang membuat frustrasi. Alat ini memperkenalkan <strong>kompilasi TOC dua arah</strong>.</p>\n      <p>Ini memindai header dan menghasilkan halaman Daftar Isi premium yang terinspirasi origami yang disisipkan tepat setelah sampul. Selain membuat tautan /GoTo yang dapat diklik untuk setiap baris indeks, ini juga memasukkan jangkar kecil \"TOC ↩\" yang elegan di sudut setiap halaman bab target. Pembaca dapat melompat-lompat seketika, menikmati navigasi seperti web.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Menyediakan dokumen PDF",
    "description": "Unggah laporan, eBuku, atau proposal yang memerlukan katalog interaktif."
  },
  {
    "step": 2,
    "title": "Tetapkan judul & indeks TOC",
    "description": "Sesuaikan judul utama dan pilih indeks halaman untuk menyisipkan halaman TOC."
  },
  {
    "step": 3,
    "title": "Menenun jangkar & menyimpan",
    "description": "Klik jalankan untuk mengkompilasi halaman dan menulis navigasi tautan ganda."
  }
],
    useCases: [
  {
    "title": "Pemolesan laporan perusahaan tahunan",
    "description": "Sisipkan halaman indeks yang indah setelah lembar sampul untuk memungkinkan pemegang saham berpindah antar grafik keuangan.",
    "icon": "file-bar"
  },
  {
    "title": "Pengindeksan tesis",
    "description": "Kompilasi cepat indeks standar yang selaras dengan aturan format universitas.",
    "icon": "bookmark"
  },
  {
    "title": "Navigasi manual pengoperasian",
    "description": "Bantu pembaca buku pegangan dengan cepat melompat dari lembar pemecahan masalah kembali ke TOC utama.",
    "icon": "check-circle"
  }
],
    faq: [
  {
    "question": "Bagaimana cara kerja jangkar dua arah?",
    "answer": "Kami membuat anotasi Tautan standar pada halaman Daftar Isi yang menargetkan halaman masing-masing; lalu kita sematkan link kembali ke halaman TOC di semua lembar bab target."
  },
  {
    "question": "Apakah penyisipan halaman TOC akan merusak nomor halaman yang sudah ada?",
    "answer": "Tidak. Kompiler memperhitungkan offset halaman TOC yang baru disisipkan, memastikan semua tujuan target selaras."
  },
  {
    "question": "Apakah halaman TOC valid jika dicetak secara fisik?",
    "answer": "Ya. TOC yang dihasilkan mencantumkan nomor halaman fisik yang bersih untuk memandu pembaca kertas sekaligus mengaktifkan tautan yang dapat diklik di layar."
  }
],
  },

  'pdf-deskew-aligner': {
    title: 'Koreksi Kemiringan Scan',
    metaDescription: "Deteksi garis teks miring secara lokal dan sesuaikan konten yang dikoreksi di dalam halaman asli.",
    keywords: ["luruskan scan pdf","koreksi miring dokumen","deskew otomatis"],
    description: "\n      <p>Deteksi garis teks miring secara lokal dan sesuaikan konten yang dikoreksi di dalam halaman asli.</p>\n      <p>Halaman kosong, pindaian yang tidak jelas, dan halaman beranotasi tetap tidak berubah.</p>\n      <p>Resolusi lebih tinggi membutuhkan waktu lebih lama. Halaman sangat besar memakai resolusi analisis lebih rendah.</p>\n    ",
    howToUse: [
  {
    "step": 1,
    "title": "Berikan PDF miring",
    "description": "Unggah lembar PDF apa pun yang memuat dokumen pindaian yang diputar atau tidak sejajar."
  },
  {
    "step": 2,
    "title": "Pindai pengaturan penyelarasan",
    "description": "Resolusi analisis · Sudut koreksi maksimum"
  },
  {
    "step": 3,
    "title": "Analisis dan luruskan",
    "description": "Unduh · PDF selaras"
  }
],
    useCases: [
  {
    "title": "Tanda Terima & Pengarsipan Kontrak",
    "description": "Luruskan pemindaian kontrak seluler genggam dengan cepat sebelum menyimpannya sebagai arsip PDF digital formal.",
    "icon": "file-text"
  },
  {
    "title": "Digitalisasi Buku Akademik",
    "description": "Sanitasi pindaian buku mikrofilm yang garis teksnya keluar dari margin horizontal.",
    "icon": "book"
  },
  {
    "title": "Penilaian Pekerjaan Rumah Siswa",
    "description": "Memperbaiki gambar pekerjaan rumah yang diambil oleh ponsel siswa, menenangkan mata guru yang menilai.",
    "icon": "edit-3"
  }
],
    faq: [
  {
    "question": "Bagaimana cara mendeteksi kemiringan dokumen?",
    "answer": "Deteksi garis tinta yang miring secara lokal dan sesuaikan konten yang dikoreksi ke dalam halaman asli."
  },
  {
    "question": "Apakah proses ini akan memangkas tepi halaman?",
    "answer": "Deteksi garis tinta yang miring secara lokal dan sesuaikan konten yang dikoreksi ke dalam halaman asli."
  },
  {
    "question": "Apakah mendukung dokumen yang berisi diagram?",
    "answer": "Halaman kosong, pindaian tidak pasti, dan halaman dengan anotasi tetap tidak berubah."
  }
],
  },

  'pdf-two-column-reflower': {
    title: 'Aliran Ulang Dua Kolom',
    metaDescription: "Ubah susunan kertas PDF dua kolom menjadi satu kolom untuk memudahkan pembacaan seluler. Sesuaikan dokumen akademis untuk layar yang lebih kecil.",
    keywords: ["makalah dua kolom","pdf satu kolom","split cropbox halaman"],
    description: "<p>Reflower Dua Kolom Akademik memecahkan permasalahan paling signifikan dalam penelitian digital: membaca makalah di layar seluler standar.</p>\n      <p>Tata letak kolom ganda (digunakan oleh IEEE, ACM, Nature, dan laporan utama) dirancang untuk kertas A4. Menavigasinya di layar ponsel atau perangkat Kindle memerlukan zoom yang konstan, menyeret ke kanan, menggulir ke bawah, dan menggeser kembali ke atas. Ini merusak pemahaman bacaan sepenuhnya.</p>\n      <p>Prosesor kami menerapkan <strong>pengaturan ulang paragraf cerdas dan pemindaian penghalang partisi vertikal</strong>. Ini menganalisis koordinat karakter untuk memetakan talang dua kolom, membagi tata letak, dan menjalin segmen secara vertikal (kolom kiri terlebih dahulu, lalu kanan). Grafik, rumus, dan judul disusun ulang dengan mulus menjadi PDF gulir vertikal satu kolom yang dapat mengalir.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah PDF dua kolom",
    "description": "Menyediakan laporan jurnal IEEE/ACM atau lembar PDF multi-kolom."
  },
  {
    "step": 2,
    "title": "Periksa selokan partisi",
    "description": "Verifikasi panduan irisan partisi vertikal berwarna merah. Sesuaikan margin untuk mencegah elemen yang tumpang tindih."
  },
  {
    "step": 3,
    "title": "Putar ulang dan simpan",
    "description": "Klik jalankan untuk mengkompilasi halaman menjadi tata letak yang mengalir dan unduh secara instan."
  }
],
    useCases: [
  {
    "title": "Impor Buku e-Reader",
    "description": "Ubah esai dua kolom yang padat menjadi dokumen satu kolom yang nyaman dan cocok dengan layar Kindle dan Onyx.",
    "icon": "tablet"
  },
  {
    "title": "Membaca Telepon Kereta Bawah Tanah",
    "description": "Baca literatur penelitian dengan nyaman menggunakan gerakan menggesek vertikal satu tangan selama transit.",
    "icon": "smartphone"
  },
  {
    "title": "Pemformatan Jurnal Arsip",
    "description": "Memodernisasi surat kabar lama berkolom sempit menjadi format web satu kolom yang mudah dibaca.",
    "icon": "book-open"
  }
],
    faq: [
  {
    "question": "Bagaimana cara menangani bagan dan persamaan yang luas?",
    "answer": "Mesin kami menerapkan \"deteksi elemen rentang\". Jika persamaan atau diagram melebihi lebar kolom normal, persamaan atau diagram tersebut diisolasi sebagai item dengan lebar penuh, mempertahankan proporsi aslinya tanpa terpotong."
  },
  {
    "question": "Apakah ini akan mengubah resolusi teks vektor?",
    "answer": "Tidak sama sekali. Kami menulis ulang matriks transformasi objek teks PDF pada tingkat pohon objek alih-alih melakukan rasterisasi, yang berarti teks tetap 100% vektor dan dapat dipilih sepenuhnya."
  },
  {
    "question": "Apakah ini berfungsi pada dokumen gambar yang dipindai?",
    "answer": "Untuk PDF berbasis gambar datar, kami sangat menyarankan untuk menjalankan alat OCR kami terlebih dahulu sebelum menjalankan proses Reflow."
  }
],
  },

  'pdf-page-resizer-uniform': {
    title: 'Seragamkan Ukuran Halaman',
    metaDescription: "Ubah ukuran halaman PDF campuran menjadi ukuran seragam. Normalisasikan halaman A4, A3 dan Letter dengan skala proporsional dan margin terpusat.",
    keywords: ["seragamkan ukuran pdf","skala halaman a4","pusatkan isi halaman"],
    description: "<p>Multi-Format PDF Resizer adalah standarisasi terbaik untuk dokumen perusahaan yang berantakan dan tidak cocok.</p>\n      <p>Menggabungkan faktur, kontrak, dan bagan tambahan sering kali menghasilkan PDF yang berisi halaman buku besar A3, perjanjian A4 standar, dan amplop berukuran Letter. Membolak-baliknya sangat mengganggu, dan mengirimkannya ke printer kantor fisik sering kali menyebabkan kesalahan kemacetan karena ketidakcocokan ukuran.</p>\n      <p>Alat ini menulis ulang grid <code>/MediaBox</code> dan <code>/CropBox</code> tingkat rendah pada setiap halaman. Ini memetakan lebar dan tinggi yang ada, menskalakan halaman asli secara proporsional agar sesuai dengan preset target (misalnya A4 standar), dan memperkenalkan margin sekeliling yang elegan dan konsisten, membuat keseluruhan file terlihat sangat halus.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Menyediakan PDF ukuran campuran",
    "description": "Unggah dokumen PDF gabungan yang berisi ukuran halaman yang tidak cocok dan berantakan."
  },
  {
    "step": 2,
    "title": "Pilih target yang telah ditetapkan",
    "description": "Pilih ukuran seragam target (misalnya A4, Letter, A3) dan alihkan mode skala."
  },
  {
    "step": 3,
    "title": "Sejajarkan dan unduh",
    "description": "Klik jalankan untuk memicu penyelarasan lembar 3D, mengunduh PDF standar yang indah."
  }
],
    useCases: [
  {
    "title": "Proposal RFP Perusahaan",
    "description": "Standarisasi sertifikat kualifikasi yang dipindai dan lembar penawaran A4 sebelum pencetakan fisik.",
    "icon": "file-text"
  },
  {
    "title": "Integrasi Bagan Keuangan",
    "description": "Skalakan arus kas keuangan A3 yang luas ke dalam halaman A4 yang rapi, dengan menjaga standar pencetakan.",
    "icon": "layout"
  },
  {
    "title": "Standardisasi Margin Buku",
    "description": "Paksa halaman buku pindaian yang sedikit bervariasi ke dalam dimensi yang benar-benar seragam agar nyaman dibaca.",
    "icon": "book"
  }
],
    faq: [
  {
    "question": "Apakah ini akan mengubah konten saya?",
    "answer": "Tidak pernah. Kami mendukung \"Contain\" (penskalaan proporsional dengan bilah putih) dan \"Cover\" (pemangkasan di tengah). Mode Contain default mempertahankan rasio aspek, mencegah distorsi."
  },
  {
    "question": "Apakah formulir dan anotasi yang sudah ada tetap dapat diklik?",
    "answer": "Ya. Algoritme memetakan faktor penskalaan ke susunan koordinat Anotasi, kotak tautan penskalaan, batas tanda, dan masukan agar disejajarkan dengan sempurna setelah diubah ukurannya."
  },
  {
    "question": "Apakah ada batasan berapa banyak halaman yang dapat saya ubah ukurannya?",
    "answer": "Tidak. Karena semua operasi dijalankan secara lokal di sandbox klien Anda menggunakan JavaScript asli, Anda dapat memproses PDF ekstensif yang berisi ratusan halaman dalam hitungan detik."
  }
],
  },

  'handwriting-ink-contrast-booster': {
    title: 'Tingkatkan Kontras Tulisan',
    metaDescription: "Meningkatkan kontras tulisan tangan dan tanda tangan pada gambar yang dipindai. Mengurangi kebisingan latar belakang kertas dan membuat tinta lebih mudah dibaca.",
    keywords: ["pertajam tanda tangan","hilangkan bayangan kertas","peningkat kontras tinta"],
    description: "<p>Penguat Kontras Tinta Tulisan Tangan adalah penyelamat untuk digitalisasi perjanjian yang ditandatangani dan arsip naskah sejarah.</p>\n      <p>Pemindaian dokumen yang ditandatangani dengan tangan sering kali terlihat kusam karena pantulan kaca pemindai berwarna abu-abu, warna kertas kuning, atau tinta pudar. Mencetak ulang atau memfotokopi file-file ini menghasilkan tanda tangan yang buram dan tidak terbaca. Alat kontras tradisional menggelapkan seluruh latar belakang, sehingga memperburuk tata letak.</p>\n      <p>Alat ini menggunakan **Contrast Limited Adaptive Histogram Equalization (CLAHE) dan pemisahan warna berdasarkan rona**. Dalam proses Canvas lokal yang aman, teknologi ini mengisolasi goresan tulisan tangan (hitam dan biru) dari perkamen latar belakang, memutihkan bayangan kerutan sepenuhnya, dan memasukkan tinta pudar dengan kontras yang dalam dan jenuh, sehingga dokumen Anda terlihat sangat tajam dan bersih.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Impor dokumen yang ditandatangani tangan",
    "description": "Berikan PDF yang berisi tanda tangan pudar, buku harian tulisan tangan, atau sketsa."
  },
  {
    "step": 2,
    "title": "Konfigurasikan filter tinta",
    "description": "Pilih profil warna yang akan diisolasi (misalnya tinta biru, tinta hitam, atau keduanya) dan sesuaikan penajaman."
  },
  {
    "step": 3,
    "title": "Pertajam dan unduh",
    "description": "Klik jalankan untuk melacak warna dengan efek pemindai radar dan unduh PDF yang dimurnikan."
  }
],
    useCases: [
  {
    "title": "Perbaikan Kontrak yang Dilaksanakan",
    "description": "Memperbaiki perjanjian yang dipindai dengan buruk, mempertajam tanda tangan, dan memutihkan latar belakang kertas menjadi A4 putih bersih.",
    "icon": "file-check"
  },
  {
    "title": "Arsip Naskah Tulisan Tangan",
    "description": "Mendigitalkan jurnal atau buku harian tertulis, mengekstrak guratan hitam bening sambil menghapus noda terkait usia.",
    "icon": "book"
  },
  {
    "title": "Restorasi Buku Besar Historis",
    "description": "Kembalikan detail tinta yang samar pada buku besar arsip yang sudah tua, selamatkan koordinat tulisan tangan yang berharga.",
    "icon": "archive"
  }
],
    faq: [
  {
    "question": "Apa bedanya dengan konversi skala abu-abu normal?",
    "answer": "Skala abu-abu mengubah bayangan kertas menjadi nilai abu-abu. Algoritme adaptif kami memisahkan pencahayaan latar belakang dan mengisolasi \"spektrum tinta\" yang khas, memurnikan latar belakang menjadi putih mutlak sekaligus menjaga tepi guratan tetap tajam."
  },
  {
    "question": "Apakah saya akan kehilangan tekstur guratan tulisan tangan?",
    "answer": "Tidak. Algoritme CLAHE bekerja pada tingkat subpiksel, menjaga tekanan goresan pena alami, pemudaran tinta, dan bobot garis dinamis."
  },
  {
    "question": "Bisakah saya menyimpan tanda stempel perusahaan berwarna merah?",
    "answer": "Ya. Dengan mengaktifkan \"Pelestarian Tinta Chroma\", booster ini memutihkan latar belakang kertas dan menggelapkan tulisan, sekaligus mempertahankan warna cerah segel merah dan tanda tangan tinta biru."
  }
],
  },

  'pdf-spine-bookbinder': {
    title: 'Hitung Lebar Punggung Buku',
    metaDescription: "Hitung lebar punggung buku dari jumlah halaman dan berat kertas. Hasilkan templat sampul yang dapat dicetak dengan garis lipatan punggung.",
    keywords: ["hitung punggung buku","desain cover buku","ketebalan jilid lem"],
    description: "<p>Penjilid Buku Tulang Belakang PDF adalah penyelamat pra-pers bagi para desainer, penulis penerbitan mandiri, dan tim penawaran komersial.</p>\n      <p>Saat menyusun katalog buku tebal, proposal penawaran, atau direktori tahunan, penjilidan sempurna (penjilidan lem) memerlukan sampul dengan koordinat tulang belakang yang tepat. Jika lebar tulang belakang melenceng 1 mm saja, penutup yang terikat akan melengkung, bergeser, atau kusut. Menghitung jumlah halaman terhadap berat kertas adalah hal yang rumit dan rawan kesalahan.</p>\n      <p>Alat ini menggunakan <strong>pustaka kertas-ke-ketebalan GSM yang dimodelkan secara fisik</strong>. Cukup masukkan jumlah halaman PDF Anda dan pilih stok kertas (mis. 80 GSM offset, 100 GSM glossy). Mesin ini menghitung lebar punggung hingga mikrometer dan menyusun PDF sampul ekstra lebar yang siap cetak, lengkap dengan penutup depan/belakang standar dan lipatan tanda lipatan yang presisi.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Atur halaman & jenis stok",
    "description": "Masukkan jumlah halaman dokumen dan pilih spesifikasi stok kertas target."
  },
  {
    "step": 2,
    "title": "Masukkan teks tulang belakang",
    "description": "Masukkan judul buku, detail penulis, dan sesuaikan latar belakang/sampul."
  },
  {
    "step": 3,
    "title": "Pratinjau & Ekspor 3D",
    "description": "Putar dan periksa sampul buku Anda dalam pengikat 3D interaktif. Ekspor PDF vektor resolusi tinggi."
  }
],
    useCases: [
  {
    "title": "Proposal Penawaran Tebal",
    "description": "Rancang lembaran sampul profesional dengan keselarasan lipatan tulang belakang yang tepat untuk tawaran tender yang tebal.",
    "icon": "layers"
  },
  {
    "title": "Pengikatan Hardcover Skripsi",
    "description": "Petakan lebar tata letak tulang belakang yang sempurna untuk tesis gelar master/doktor universitas.",
    "icon": "award"
  },
  {
    "title": "Sampul Novel yang Diterbitkan Sendiri",
    "description": "Hitung lebar punggung buku dengan mudah sebelum mengirimkan file ke layanan penerbitan Print-on-Demand.",
    "icon": "book-open"
  }
],
    faq: [
  {
    "question": "Seberapa akurat penghitungan ketebalan kertas GSM?",
    "answer": "Sangat akurat. Perpustakaan fisika kami sesuai dengan rata-rata industri (misalnya 70 GSM = 0,09mm, 80 GSM = 0,10mm, 150 GSM glossy = 0,125mm). Kami juga menyertakan tombol \"Pencetakan dua sisi\" untuk membagi separuh penghitungan secara otomatis."
  },
  {
    "question": "Apakah sampul yang diekspor siap untuk dicetak langsung?",
    "answer": "Ya. File-file tersebut adalah PDF vektor sempurna yang membawa tanda registrasi standar, bilah warna, dan panduan tulang belakang, sepenuhnya sesuai dengan mesin cetak offset dan komersial digital."
  },
  {
    "question": "Bolehkah saya mengunggah gambar latar belakang sepanjang tulang belakang?",
    "answer": "Ya. Anda dapat mengunggah tata letak khusus, dan kompositor kami akan membungkus dan menyelaraskan grafik di sepanjang lipatan punggung secara otomatis."
  }
],
  },

  'pdf-signature-anchor-helper': {
    title: 'Panduan Posisi Tanda Tangan',
    metaDescription: "Tempatkan panduan tanda tangan pada halaman PDF menggunakan koordinat X/Y. Pratinjau posisi mereka sebelum menyimpan dokumen yang diperbarui.",
    keywords: ["jangkar tanda tangan","petunjuk tanda tangan","link tanda tangan"],
    description: "<p>Injektor Panduan Tanda Tangan PDF menjamin alur kerja penandatanganan yang bersih dan bebas kesalahan untuk perjanjian multi-halaman.</p>\n      <p>Saat mengirim perjanjian NDA multi-halaman, laporan keuangan, atau sewa komersial, klien sering kali melewatkan kotak penandatanganan penting, sehingga memerlukan perulangan email bolak-balik yang tak ada habisnya dan transaksi bisnis yang tertunda.</p>\n      <p>Alat kami menggunakan <strong>pemetaan semantik regex alami</strong>. Ini memindai peta karakter PDF untuk menemukan istilah seperti <code>Tanda tangan:</code>, <code>签字：</code>, <code>Saksi:</code>, atau <code>签署日期：</code>. Kemudian memanfaatkan <code>pdf-lib</code> untuk memasukkan anotasi Tautan interaktif PDF standar. Saat dibuka di pembaca standar mana pun, klien akan melihat panah berkedip dengan batas neon yang langsung memandu mereka ke kotak yang benar, sehingga penandatanganan menjadi sangat mudah.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Impor kontrak bisnis",
    "description": "Unggah kontrak PDF atau NDA yang memerlukan koordinat tanda tangan."
  },
  {
    "step": 2,
    "title": "X / Y",
    "description": "Klik pratinjau PDF sebenarnya atau masukkan koordinat X dan Y untuk halaman yang dipilih."
  },
  {
    "step": 3,
    "title": "Proses",
    "description": "Proses file, tinjau hasilnya dan unduh PDF."
  }
],
    useCases: [
  {
    "title": "Perjanjian NDA Perusahaan",
    "description": "Cantumkan panduan yang jelas dan berkedip di sebelah blok tanda untuk mencegah karyawan orientasi melewatkan klausul.",
    "icon": "file-text"
  },
  {
    "title": "Kontrak Sewa Komersial",
    "description": "Pandu banyak penandatangan bersama melalui dokumen real estat multi-halaman dengan tab berwarna khusus.",
    "icon": "users"
  },
  {
    "title": "Tanda Tangan PO Pengadaan",
    "description": "Hamparkan petunjuk interaktif pada faktur dan pesanan pembelian untuk mempercepat putaran persetujuan akuntansi.",
    "icon": "briefcase"
  }
],
    faq: [
  {
    "question": "Apakah panduan ini akan muncul saat saya mencetak kontrak?",
    "answer": "Tidak. Jangkar dimasukkan dengan tanda PDF `Dapat Dicetak` standar yang disetel ke false. Mereka ditampilkan dengan indah di layar komputer/tablet namun tetap tidak terlihat sama sekali saat dicetak."
  },
  {
    "question": "Bisakah klien berpindah antar kolom tanda tangan dengan mudah?",
    "answer": "Ya. Kami menenun jangkar internal dua arah. Klien dapat mengklik penanda \"Panduan Tanda Tangan\" untuk secara otomatis melompat ke slot tanda tangan kosong berikutnya secara instan."
  },
  {
    "question": "Apakah ini berfungsi pada dokumen gambar yang dipindai?",
    "answer": "Ya. Selain mencari aliran teks, pengurai tata letak spasial kami memperkirakan garis tanda tangan berdasarkan aturan horizontal dan kotak pembatas pada lembar yang dipindai."
  }
],
  },

  'pdf-lossless-slicer': {
    title: 'Potong Gambar Tanpa Rusak',
    metaDescription: "Pangkas wilayah gambar, peta, atau bagan PDF menggunakan koordinat yang tepat. Pertahankan konten vektor dalam PDF yang diekspor.",
    keywords: ["potong gambar pdf","crop gambar cetak","vektor crop tanpa rusak"],
    description: "<p>Pengiris Gambar PDF Lossless adalah alat bedah berpresisi tinggi yang dibuat untuk arsitek, insinyur, dan detailer peta.</p>\n      <p>Saat mengekstrak ruang pompa atau inti chip tertentu dari cetak biru teknik CAD besar atau peta geografis PDF, tangkapan layar tradisional menghasilkan teks berpiksel dan buram. Alat pemangkasan normal cukup menempatkan mask di atas lembar, yang berarti file sebesar 100 MB tetap berukuran besar, dan konten tersembunyi masih dapat diekstraksi.</p>\n      <p>Alat ini mengedit matriks <code>/MediaBox</code>, <code>/CropBox</code>, dan <code>/BleedBox</code> pada tingkat pohon objek. Ini secara fisik mengisolasi node vektor di luar wilayah yang dipilih, menjaga area target 100% sempurna untuk vektor (memungkinkan pembesaran zoom tanpa batas) sambil membersihkan jalur dan gambar di luar layar yang berlebihan untuk memperkecil ukuran file sebesar 95%!</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Impor cetak biru besar",
    "description": "Unggah CAD, peta GIS, atau PDF katalog resolusi tinggi yang kaya vektor."
  },
  {
    "step": 2,
    "title": "Pangkas persegi panjang",
    "description": "Masukkan X, Y, lebar dan tinggi, lalu periksa halaman yang dipilih di pratinjau."
  },
  {
    "step": 3,
    "title": "Proses",
    "description": "Proses file, tinjau hasilnya dan unduh PDF."
  }
],
    useCases: [
  {
    "title": "Isolasi Cetak Biru CAD",
    "description": "Potong detail \"sistem pendingin\" dari cetak biru denah lantai berukuran 100 MB untuk dibagikan kepada sub-kontraktor.",
    "icon": "crop"
  },
  {
    "title": "Pemotongan Peta GIS",
    "description": "Ekstrak blok peta jalan kota yang bebas vektor dan lossless untuk slide presentasi tanpa kehilangan resolusi.",
    "icon": "map"
  },
  {
    "title": "Penelusuran Ilustrasi Manual",
    "description": "Gambar buku ilmiah isolasi lossless untuk dimasukkan ke dalam makalah akademis berkualitas tinggi.",
    "icon": "image"
  }
],
    faq: [
  {
    "question": "Apa bedanya dengan tanam standar?",
    "answer": "Pemangkasan standar hanya menyesuaikan batas visual; vektor yang tersembunyi tetap ada di file. Pemotong kami memangkas jalur vektor yang tumpang tindih dan membersihkan gambar XObject di luar batas, memastikan isolasi data lengkap dan kompresi file maksimum."
  },
  {
    "question": "Akankah lapisan teks tetap dapat dicari?",
    "answer": "Ya. Karakter teks apa pun yang berada di dalam batas irisan tetap sepenuhnya bebas vektor, dapat dicari, dan dipilih."
  },
  {
    "question": "Bisakah saya mengekspor wilayah yang diiris ke SVG?",
    "answer": "Outputnya adalah PDF vektor standar. Anda dapat meneruskan file yang dihasilkan ke alat PDF-ke-SVG kami untuk mengonversinya menjadi format grafik vektor yang dapat diskalakan web."
  }
],
  },

  'pdf-scratchpad-canvas': {
    title: 'Kanvas Kertas Buram',
    metaDescription: "Tambahkan margin kotak, garis, atau catatan Cornell ke halaman PDF. Ciptakan ruang menulis ekstra untuk catatan belajar, perhitungan, dan persiapan ujian.",
    keywords: ["kertas buram pdf","tambah catatan samping","halaman kotak kotak"],
    description: "<p>PDF Scratchpad Margin Extender adalah pendamping belajar penting yang dirancang untuk pelajar, peneliti, dan kandidat ujian profesional.</p>\n      <p>Saat menyelesaikan soal latihan, meninjau slide, atau membaca buku teks akademis di tablet digital, margin halaman sangat ketat. Membuka aplikasi catatan terpisah memaksa Anda untuk berpindah layar terus-menerus, sehingga merusak fokus. Menambahkan lembar datar kosong akan mencegah Anda melihat soal dan penghitungan secara berdampingan.</p>\n      <p>Alat ini menulis ulang dimensi lebar atau tinggi halaman dalam struktur PDF tingkat rendah, memperluas margin <code>/MediaBox</code> sebesar 200~250 pt di kanan atau bawah. Kemudian dihamparkan dengan garis grid yang bersih, garis buku catatan perguruan tinggi, atau tata letak Cornell di margin baru, sehingga memberi Anda papan draf khusus yang berdekatan di samping setiap slide atau pertanyaan!</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Unggah slide kuliah",
    "description": "Sediakan buku teks PDF, slide, atau makalah belajar."
  },
  {
    "step": 2,
    "title": "Pilih margin & gaya kisi",
    "description": "Pilih arah perluasan margin (misalnya sisi kanan untuk tablet) dan pilih templat kisi."
  },
  {
    "step": 3,
    "title": "Jahit kanvas & unduh",
    "description": "Klik jalankan untuk menghasilkan halaman yang diperluas lengkap dengan kisi-kisi draf yang indah."
  }
],
    useCases: [
  {
    "title": "Persiapan Ujian STEM",
    "description": "Jahit margin grid di sebelah soal ujian matematika dan fisika, selesaikan derivasi tepat di sebelah soal.",
    "icon": "edit-3"
  },
  {
    "title": "Analisis Pembacaan Bahasa",
    "description": "Tambahkan margin buku catatan di sebelah esai bahasa asing untuk analisis kosakata dan terjemahan paragraf.",
    "icon": "book"
  },
  {
    "title": "Audit Cetak Biru Arsitektur",
    "description": "Tambahkan ruang margin kosong di sisi cetak biru untuk perhitungan teknik dan komentar ulasan klien.",
    "icon": "columns"
  }
],
    faq: [
  {
    "question": "Apakah ini akan menekan teks PDF asli saya?",
    "answer": "Tidak sama sekali. Algoritme memperluas dimensi kertas ke arah luar. Konten asli mempertahankan tata letak, font, dan resolusinya; kita cukup merentangkan ruang putih di tepinya dan menggambar kisi-kisi di atasnya."
  },
  {
    "question": "Bisakah pena tulisan tangan standar menulis di papan gores?",
    "answer": "Ya. Halaman PDF baru dikompilasi secara asli. Aplikasi pencatatan tablet populer seperti Goodnotes, Notability, Xodo, dan Acrobat dapat menulis, menyorot, dan mencoret-coret langsung di ruang grid baru."
  },
  {
    "question": "Apakah garis grid gelap dan mengganggu?",
    "answer": "Kami memilih tiga warna yang halus dan ramah mata (biru-abu-abu lembut, coklat hangat, dan hijau bersinar). Garisnya tipis dan lembut, berfungsi sebagai panduan tanpa mengganggu Anda dari konten halaman asli."
  }
],
  },

  'photo-tiling-prepress': {
    title: 'Cetak Pas Foto Mandiri',
    metaDescription: "Pangkas dan susun foto ID atau paspor pada kertas foto standar. Tambahkan tanda potong cetak untuk membantu memotong lembar yang sudah jadi.",
    keywords: ["cetak pas foto","layout kertas foto","batas gunting foto"],
    description: "<p>Alat Prepress Photo Tiling adalah kompiler tata letak berpresisi tinggi dan hemat biaya yang dibuat untuk kartu registrasi pribadi dan studio fotografi.</p>\n      <p>Mencetak foto paspor, foto identitas, atau SIM di rumah sering kali mengakibatkan dimensi fisik yang salah (sering kali dicetak terlalu besar atau terlalu kecil), kertas foto terbuang, dan susunannya tidak rata. Pergi ke percetakan profesional untuk membuat tata letak memakan waktu.</p>\n      <p>Alat kami mengintegrasikan <strong>mesin matriks pracetak presisi</strong>. Ia menerima foto potret atau pemindaian kartu identitas, memotongnya ke dimensi standar (misalnya spesifikasi paspor 1\" atau 2\"), menghitung jumlah ubin optimal untuk kertas foto standar (misalnya lembar 5\" atau 6\"), dan memasukkan garis pemangkasan mikropiksel yang tajam untuk kemudahan pemotongan fisik, sehingga menghasilkan PDF sempurna yang dapat dicetak.</p>",
    howToUse: [
  {
    "step": 1,
    "title": "Impor foto paspor",
    "description": "Unggah foto potret kamera atau gambar kartu ID dua sisi."
  },
  {
    "step": 2,
    "title": "Konfigurasikan kertas & tata letak",
    "description": "Pilih ukuran kertas cetak target (misalnya 6\") dan pilih tata letak kisi (misalnya 8 salinan foto 1\")."
  },
  {
    "step": 3,
    "title": "Ubin dan ekspor",
    "description": "Periksa ubin foto di grid kami, dan ekspor PDF yang dapat dicetak dengan DPI tinggi."
  }
],
    useCases: [
  {
    "title": "Foto Paspor Swalayan",
    "description": "Susun potret paspor hasil jepretan seluler Anda ke dalam satu kotak kertas foto berukuran 6\", dan cetak 8 salinan dengan biaya studio standar yang lebih murah.",
    "icon": "user"
  },
  {
    "title": "Fotokopi Dua Sisi KTP",
    "description": "Format scan depan dan belakang KTP dengan rapi pada lembar standar Letter/A4 untuk penyerahan resmi.",
    "icon": "file-text"
  },
  {
    "title": "Lembar Gambar Kecil Foto Kumpulan",
    "description": "Susun beberapa kenangan keluarga atau desain foto ke dalam kertas kotak untuk mencetak lembar kontak thumbnail secara efisien.",
    "icon": "grid"
  }
],
    faq: [
  {
    "question": "Apakah dimensi yang dicetak akan sesuai dengan spesifikasi resmi 1\" atau 2\"?",
    "answer": "Ya. Mesin grid mengukur menggunakan titik PDF standar (72 pt = 1 inci), merender foto berukuran 1\" tepat pada ukuran 25x35mm, dan foto berukuran 2\" pada ukuran 35x49mm. Pastikan Anda mencetak pada \"Ukuran Sebenarnya / Skala 100%\" di pengaturan printer Anda."
  },
  {
    "question": "Bisakah saya menggabungkan foto berukuran 1\" dan 2\" dalam satu lembar?",
    "answer": "Ya. Kami menyediakan preset tata letak hibrid yang dikurasi (misalnya, \"4 salinan 1\" + 4 salinan 2\"\"), memungkinkan Anda memaksimalkan ruang kertas foto."
  },
  {
    "question": "Apakah template menyertakan border bleed?",
    "answer": "Ya. Tata letak pracetak memiliki margin aman cetak standar 4mm pada tepi kertas, sehingga mencegah rol printer fisik memotong foto."
  }
],
  },


"redact-pdf": localizedRedactionContent('id', 'redact-pdf', "Sensor PDF")
};
