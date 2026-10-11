/**
 * Vietnamese Tool Content
 * Requirements: 3.1 - Multi-language support
 *
 * Vietnamese tool content - contains detailed descriptions, usage instructions, use cases and FAQs for all 67 PDF tools
 */

import type { ToolContent } from '@/types/tool';

/**
 * Vietnamese tool content map
 * Each tool has: title, metaDescription, keywords, description, howToUse (3+ steps), useCases (3+ scenarios), faq (3+ questions)
 */
export const toolContentVn: Record<string, ToolContent> = {
  "pdf-multi-tool": {
    "title": "Công cụ đa năng PDF",
    "metaDescription": "Công cụ chỉnh sửa PDF toàn diện: hợp nhất, tách, tổ chức, xóa, xoay và trích xuất trang trong một công cụ mạnh mẽ.",
    "keywords": [
      "công cụ đa năng pdf",
      "chỉnh sửa pdf",
      "hợp nhất pdf",
      "tách pdf",
      "tổ chức pdf",
      "tất cả trong một pdf"
    ],
    "description": "\n      <p>Công cụ đa năng PDF là giải pháp toàn diện của bạn cho tất cả các tác vụ quản lý trang PDF. Công cụ toàn diện này kết hợp nhiều thao tác PDF thành một giao diện trực quan duy nhất, tiết kiệm thời gian và công sức của bạn.</p>\n      <p>Cho dù bạn cần hợp nhất nhiều tài liệu, tách PDF lớn thành các tệp nhỏ hơn, tổ chức lại các trang, xóa nội dung không mong muốn, xoay trang hoặc trích xuất các phần cụ thể, công cụ này xử lý tất cả mà không cần chuyển đổi giữa các ứng dụng khác nhau.</p>\n      <p>Tất cả quá trình xử lý diễn ra trực tiếp trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn. Không có tệp nào được tải lên bất kỳ máy chủ nào.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn vào khu vực tải lên, hoặc nhấp để duyệt và chọn tệp từ thiết bị của bạn."
      },
      {
        "step": 2,
        "title": "Chọn thao tác của bạn",
        "description": "Chọn từ các thao tác có sẵn: hợp nhất, tách, tổ chức, xóa trang, xoay, thêm trang trống hoặc trích xuất trang."
      },
      {
        "step": 3,
        "title": "Định cấu hình tùy chọn",
        "description": "Điều chỉnh cài đặt cụ thể cho thao tác đã chọn của bạn, chẳng hạn như phạm vi trang, góc xoay hoặc thứ tự hợp nhất."
      },
      {
        "step": 4,
        "title": "Xử lý và tải xuống",
        "description": "Nhấp nút xử lý và tải xuống PDF đã sửa đổi của bạn sau khi thao tác hoàn thành."
      }
    ],
    "useCases": [
      {
        "title": "Chuẩn bị tài liệu",
        "description": "Chuẩn bị tài liệu để nộp bằng cách loại bỏ các trang không cần thiết, sắp xếp lại nội dung và kết hợp nhiều tệp thành một tài liệu chuyên nghiệp.",
        "icon": "file-check"
      },
      {
        "title": "Lắp ráp báo cáo",
        "description": "Kết hợp nhiều phần báo cáo, thêm trang bìa và tổ chức các chương thành một tài liệu mạch lạc duy nhất.",
        "icon": "book-open"
      },
      {
        "title": "Quản lý lưu trữ",
        "description": "Tách các tệp lưu trữ lớn thành các phần có thể quản lý, trích xuất các trang liên quan và sắp xếp lại tài liệu lịch sử.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể xử lý bao nhiêu PDF cùng lúc?",
        "answer": "Bạn có thể tải lên và xử lý tối đa 10 tệp PDF cùng lúc, với tổng kích thước kết hợp tối đa 500MB."
      },
      {
        "question": "Đánh dấu trang của tôi có được bảo toàn không?",
        "answer": "Có, khi hợp nhất PDF, công cụ bảo toàn đánh dấu trang hiện có và có thể kết hợp chúng thành cấu trúc đánh dấu trang thống nhất."
      },
      {
        "question": "Có giới hạn trang không?",
        "answer": "Không có giới hạn trang nghiêm ngặt. Công cụ có thể xử lý tài liệu có hàng trăm trang, mặc dù các tệp lớn hơn có thể mất nhiều thời gian hơn để xử lý."
      }
    ]
  },
  "merge-pdf": {
    "title": "Hợp nhất PDF",
    "metaDescription": "Kết hợp nhiều tệp PDF thành một tài liệu. Công cụ hợp nhất PDF trực tuyến miễn phí với kéo và thả để sắp xếp lại.",
    "keywords": [
      "hợp nhất pdf",
      "kết hợp pdf",
      "nối pdf",
      "công cụ hợp nhất pdf",
      "ghép pdf"
    ],
    "description": "\n      <p>Hợp nhất PDF cho phép bạn kết hợp nhiều tài liệu PDF thành một tệp một cách nhanh chóng và dễ dàng. Cho dù bạn đang hợp nhất báo cáo, kết hợp tài liệu đã quét hay lắp ráp bản trình bày, công cụ này làm cho quá trình trở nên liền mạch.</p>\n      <p>Chỉ cần tải lên tệp của bạn, sắp xếp chúng theo thứ tự mong muốn bằng cách kéo và thả, và hợp nhất chúng thành một tài liệu mạch lạc. Công cụ bảo toàn chất lượng của tệp gốc và có thể bảo toàn đánh dấu trang từ mỗi tài liệu nguồn.</p>\n      <p>Tất cả quá trình hợp nhất diễn ra cục bộ trong trình duyệt của bạn, đảm bảo quyền riêng tư hoàn toàn cho tài liệu nhạy cảm của bạn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp PDF",
        "description": "Kéo và thả nhiều tệp PDF vào khu vực tải lên, hoặc nhấp để chọn tệp từ thiết bị của bạn."
      },
      {
        "step": 2,
        "title": "Sắp xếp thứ tự",
        "description": "Kéo và thả hình thu nhỏ tệp để sắp xếp chúng theo thứ tự mong muốn."
      },
      {
        "step": 3,
        "title": "Hợp nhất và tải xuống",
        "description": "Nhấp nút Hợp nhất để kết hợp tất cả tệp, sau đó tải xuống PDF đã hợp nhất của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Kết hợp báo cáo",
        "description": "Hợp nhất báo cáo hàng tháng hoặc hàng quý thành một tài liệu hàng năm duy nhất để phân phối và lưu trữ dễ dàng hơn.",
        "icon": "file-text"
      },
      {
        "title": "Lắp ráp danh mục đầu tư",
        "description": "Kết hợp nhiều tài liệu dự án, chứng chỉ hoặc mẫu công việc thành một danh mục đầu tư chuyên nghiệp.",
        "icon": "briefcase"
      },
      {
        "title": "Hợp nhất hóa đơn",
        "description": "Hợp nhất nhiều hóa đơn hoặc biên lai thành một tài liệu duy nhất để kế toán và lưu trữ hồ sơ.",
        "icon": "receipt"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể hợp nhất bao nhiêu PDF?",
        "answer": "Bạn có thể hợp nhất tối đa 100 tệp PDF cùng lúc, với tổng kích thước kết hợp tối đa 500MB."
      },
      {
        "question": "PDF đã hợp nhất có bảo toàn chất lượng gốc không?",
        "answer": "Có, quá trình hợp nhất bảo toàn chất lượng gốc của tất cả tài liệu mà không có bất kỳ nén hoặc mất chất lượng nào."
      },
      {
        "question": "Tôi có thể hợp nhất PDF được bảo vệ bằng mật khẩu không?",
        "answer": "PDF được bảo vệ bằng mật khẩu cần được giải mã trước. Sử dụng công cụ Giải mã PDF của chúng tôi để xóa mật khẩu trước khi hợp nhất."
      }
    ]
  },
  "rotate-custom": {
    "title": "Xoay theo độ tùy chỉnh",
    "metaDescription": "Xoay trang PDF theo bất kỳ góc độ nào. Xoay tùy chỉnh chính xác cho tài liệu đã quét bị lệch.",
    "keywords": [
      "xoay pdf tùy chỉnh góc",
      "làm thẳng pdf",
      "hiệu chỉnh pdf",
      "xoay tùy chỉnh pdf"
    ],
    "description": "\n      <p>Xoay theo độ tùy chỉnh mang lại cho bạn khả năng kiểm soát chính xác định hướng trang PDF. Không giống như các công cụ xoay tiêu chuẩn chỉ hỗ trợ gia số 90 độ, công cụ này cho phép bạn xoay trang theo bất kỳ góc cụ thể nào.</p>\n      <p>Hoàn hảo để làm thẳng tài liệu đã quét được đưa vào máy quét hơi lệch, hoặc điều chỉnh sơ đồ và biểu đồ theo định hướng chính xác của chúng. Bạn có thể sửa từng trang riêng lẻ hoặc áp dụng cùng một xoay cho toàn bộ tài liệu.</p>\n      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư trong khi đạt được sự căn chỉnh hoàn hảo.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF",
        "description": "Tải lên tệp PDF chứa các trang bạn cần xoay."
      },
      {
        "step": 2,
        "title": "Đặt góc xoay",
        "description": "Nhập độ xoay chính xác cho từng trang, hoặc đặt góc hàng loạt cho tất cả trang."
      },
      {
        "step": 3,
        "title": "Xem trước và điều chỉnh",
        "description": "Sử dụng xem trước thời gian thực để đảm bảo các trang được căn chỉnh hoàn hảo."
      },
      {
        "step": 4,
        "title": "Áp dụng và tải xuống",
        "description": "Nhấp Xoay để áp dụng các thay đổi và tải xuống PDF đã làm thẳng của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Tài liệu đã quét",
        "description": "Làm thẳng các trang đã quét được đưa vào máy quét theo góc độ.",
        "icon": "scan"
      },
      {
        "title": "Bản vẽ kỹ thuật",
        "description": "Điều chỉnh định hướng của bản vẽ kỹ thuật và kế hoạch với độ chính xác.",
        "icon": "ruler"
      },
      {
        "title": "Bố cục sáng tạo",
        "description": "Tạo bố cục độc đáo bằng cách xoay trang theo góc nghệ thuật cụ thể.",
        "icon": "pen-tool"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể xoay theo số thập phân, ví dụ 45.5 độ không?",
        "answer": "Hiện tại công cụ hỗ trợ độ nguyên, nhưng chúng tôi đang làm việc để kích hoạt độ chính xác thập phân."
      },
      {
        "question": "Điều này có ảnh hưởng đến nội dung trang không?",
        "answer": "Nội dung được xoay trực quan. Kích thước trang được điều chỉnh tự động để phù hợp với nội dung đã xoay."
      },
      {
        "question": "Tôi có thể xoay chỉ một trang không?",
        "answer": "Có, bạn có thể đặt góc xoay tùy chỉnh cho bất kỳ trang riêng lẻ nào trong khi để các trang khác không thay đổi."
      }
    ]
  },
  "grid-combine": {
    "title": "Kết hợp lưới PDF",
    "metaDescription": "Kết hợp nhiều tệp PDF lên các trang đơn với bố cục lưới linh hoạt. Sắp xếp 2, 4, 6, 9 hoặc nhiều PDF hơn mỗi trang với đường viền và khoảng cách.",
    "keywords": [
      "kết hợp lưới",
      "hợp nhất pdf lưới",
      "bố cục pdf",
      "nhiều pdf trên một trang",
      "pdf n-up",
      "kết hợp pdf lưới"
    ],
    "description": "\n      <p>Công cụ Kết hợp lưới cung cấp cách độc đáo để hợp nhất nhiều tệp PDF riêng biệt lên các trang đơn. Không giống như công cụ \"Hợp nhất PDF\" tiêu chuẩn chỉ đơn giản là nối các trang, hoặc công cụ \"N-Up\" chỉ sắp xếp lại các trang từ một tài liệu duy nhất, Kết hợp lưới lấy nhiều tệp đầu vào và sắp xếp chúng cạnh nhau trong bố cục lưới có thể tùy chỉnh.</p>\n      <p>Bạn có thể chọn từ các cấu hình lưới khác nhau như 2x1, 2x2, 3x3, v.v. Điều này hoàn hảo để so sánh nhiều tài liệu, tạo tài liệu phân phát từ các nguồn khác nhau, hoặc in phiên bản nhỏ gọn của một số tệp.</p>\n      <p>Tùy chỉnh đầu ra với khả năng kiểm soát kích thước trang, định hướng, lề, khoảng cách và đường viền. Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn để đảm bảo quyền riêng tư tối đa.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp PDF",
        "description": "Tải lên hai hoặc nhiều tệp PDF bạn muốn kết hợp. Bạn có thể sắp xếp lại chúng theo thứ tự mong muốn."
      },
      {
        "step": 2,
        "title": "Chọn bố cục lưới",
        "description": "Chọn bố cục lưới mong muốn của bạn (ví dụ: 2x2 cho 4 tệp mỗi trang, 3x3 cho 9 tệp mỗi trang)."
      },
      {
        "step": 3,
        "title": "Tùy chỉnh giao diện",
        "description": "Điều chỉnh cài đặt như kích thước trang (A4, Letter), định hướng, khoảng cách giữa các mục và đường viền."
      },
      {
        "step": 4,
        "title": "Kết hợp và tải xuống",
        "description": "Nhấp \"Kết hợp PDF\" để tạo bố cục lưới mới của bạn và tải xuống kết quả."
      }
    ],
    "useCases": [
      {
        "title": "So sánh trực quan",
        "description": "Đặt các phiên bản khác nhau của thiết kế hoặc tài liệu cạnh nhau trên một trang để so sánh dễ dàng.",
        "icon": "layout-grid"
      },
      {
        "title": "In tài liệu phân phát",
        "description": "Kết hợp nhiều tài liệu ngắn hoặc trang trình bày lên một tờ giấy để tiết kiệm chi phí in ấn.",
        "icon": "printer"
      },
      {
        "title": "Tạo danh mục đầu tư",
        "description": "Trưng bày nhiều tệp dự án trong tổng quan lưới sạch sẽ, có tổ chức.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Điều này khác với N-Up như thế nào?",
        "answer": "N-Up lấy trang từ MỘT PDF và đặt chúng lên một tờ. Kết hợp lưới lấy NHIỀU tệp PDF khác nhau và đặt chúng lên một tờ."
      },
      {
        "question": "Tôi có thể kết hợp bao nhiêu tệp?",
        "answer": "Bạn có thể kết hợp tối đa 100 tệp tùy thuộc vào bộ nhớ trình duyệt của bạn, nhưng các bố cục như 4x4 có thể chứa tối đa 16 tệp mỗi trang."
      },
      {
        "question": "Tôi có thể thêm đường viền không?",
        "answer": "Có, bạn có thể thêm đường viền xung quanh mỗi tệp PDF và tùy chỉnh màu đường viền."
      }
    ]
  },
  "split-pdf": {
    "title": "Tách PDF",
    "metaDescription": "Tách tệp PDF thành nhiều tài liệu. Trích xuất trang cụ thể hoặc chia theo phạm vi trang.",
    "keywords": [
      "tách pdf",
      "chia pdf",
      "tách riêng pdf",
      "trích xuất trang",
      "công cụ tách pdf"
    ],
    "description": "\n      <p>Tách PDF cho phép bạn chia một tài liệu PDF duy nhất thành nhiều tệp nhỏ hơn. Điều này hoàn hảo để trích xuất các chương cụ thể, tách các tài liệu kết hợp hoặc tạo tệp riêng cho mỗi PDF nhiều trang.</p>\n      <p>Bạn có thể tách theo phạm vi trang cụ thể, trích xuất trang riêng lẻ hoặc chia tài liệu theo khoảng thời gian đều đặn. Công cụ cung cấp xem trước trực quan của các trang của bạn, giúp dễ dàng chọn chính xác những gì bạn cần.</p>\n      <p>Tất cả quá trình xử lý được thực hiện cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để duyệt và chọn tệp bạn muốn tách."
      },
      {
        "step": 2,
        "title": "Chọn phương pháp tách",
        "description": "Chọn cách tách: theo phạm vi trang, trích xuất trang cụ thể hoặc tách theo khoảng thời gian đều đặn."
      },
      {
        "step": 3,
        "title": "Xác định phạm vi trang",
        "description": "Nhập số trang hoặc phạm vi bạn muốn trích xuất (ví dụ: 1-5, 8, 10-15)."
      },
      {
        "step": 4,
        "title": "Tách và tải xuống",
        "description": "Nhấp Tách để tạo tệp PDF mới của bạn và tải xuống chúng riêng lẻ hoặc dưới dạng kho lưu trữ ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Trích xuất chương",
        "description": "Tách một cuốn sách hoặc hướng dẫn thành các chương riêng để đọc hoặc phân phối dễ dàng hơn.",
        "icon": "book"
      },
      {
        "title": "Tách quét kết hợp",
        "description": "Chia tài liệu quét hàng loạt thành tệp riêng cho mỗi tài liệu gốc.",
        "icon": "copy"
      },
      {
        "title": "Tạo tài liệu phân phát",
        "description": "Trích xuất trang trình bày hoặc trang cụ thể để tạo tài liệu phân phát tập trung.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể tách PDF thành trang riêng lẻ không?",
        "answer": "Có, bạn có thể tách PDF thành tệp trang đơn bằng cách chọn tùy chọn \"Tách mỗi trang\"."
      },
      {
        "question": "Điều gì xảy ra với đánh dấu trang khi tách?",
        "answer": "Đánh dấu trang rơi trong phạm vi trang được trích xuất được bảo toàn trong tệp PDF kết quả."
      },
      {
        "question": "Tôi có thể tách PDF được bảo vệ bằng mật khẩu không?",
        "answer": "Bạn cần giải mã PDF trước bằng công cụ Giải mã PDF của chúng tôi."
      }
    ]
  },
  "compress-pdf": {
    "title": "Nén PDF",
    "metaDescription": "Giảm kích thước tệp PDF trong khi duy trì chất lượng. Công cụ nén PDF trực tuyến miễn phí cho tệp nhỏ hơn.",
    "keywords": [
      "nén pdf",
      "giảm kích thước pdf",
      "công cụ nén pdf",
      "thu nhỏ pdf",
      "tối ưu hóa pdf"
    ],
    "description": "\n      <p>Nén PDF giảm kích thước tệp của tài liệu PDF của bạn trong khi duy trì chất lượng chấp nhận được. Điều này cần thiết cho tệp đính kèm email, tải lên web hoặc tiết kiệm dung lượng lưu trữ.</p>\n      <p>Công cụ cung cấp nhiều mức nén để cân bằng giữa giảm kích thước tệp và bảo toàn chất lượng. Bạn có thể chọn nén tích cực để giảm kích thước tối đa hoặc nén nhẹ để duy trì chất lượng cao hơn.</p>\n      <p>Tất cả nén diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn không bao giờ rời khỏi thiết bị của bạn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn muốn nén."
      },
      {
        "step": 2,
        "title": "Chọn mức nén",
        "description": "Chọn mức nén ưa thích của bạn: Thấp (chất lượng tốt nhất), Trung bình (cân bằng) hoặc Cao (kích thước nhỏ nhất)."
      },
      {
        "step": 3,
        "title": "Nén và tải xuống",
        "description": "Nhấp Nén để giảm kích thước tệp, sau đó tải xuống PDF đã tối ưu hóa của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Tệp đính kèm email",
        "description": "Giảm kích thước PDF để đáp ứng giới hạn tệp đính kèm email và đảm bảo giao hàng nhanh hơn.",
        "icon": "mail"
      },
      {
        "title": "Xuất bản web",
        "description": "Tối ưu hóa PDF cho tải xuống web để cải thiện tốc độ tải trang và trải nghiệm người dùng.",
        "icon": "globe"
      },
      {
        "title": "Tối ưu hóa lưu trữ",
        "description": "Nén tài liệu lưu trữ để tiết kiệm dung lượng đĩa trong khi vẫn duy trì khả năng truy cập.",
        "icon": "hard-drive"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể giảm kích thước tệp bao nhiêu?",
        "answer": "Kết quả nén thay đổi dựa trên nội dung PDF. PDF nặng hình ảnh có thể giảm 50-80%, trong khi PDF chỉ văn bản có thể giảm ít hơn."
      },
      {
        "question": "Nén có ảnh hưởng đến chất lượng văn bản không?",
        "answer": "Văn bản vẫn sắc nét và có thể đọc được ở tất cả mức nén. Chỉ hình ảnh và đồ họa bị ảnh hưởng bởi nén."
      },
      {
        "question": "Tôi có thể nén nhiều PDF cùng lúc không?",
        "answer": "Có, bạn có thể tải lên và nén tối đa 10 tệp PDF cùng lúc."
      }
    ]
  },
  "edit-pdf": {
    "title": "Chỉnh sửa PDF",
    "metaDescription": "Chỉnh sửa tệp PDF trực tuyến. Thêm văn bản, hình ảnh, chú thích, đánh dấu và hình dạng vào tài liệu của bạn.",
    "keywords": [
      "chỉnh sửa pdf",
      "trình chỉnh sửa pdf",
      "chú thích pdf",
      "thêm văn bản vào pdf",
      "đánh dấu pdf"
    ],
    "description": "\n      <p>Chỉnh sửa PDF cung cấp bộ công cụ toàn diện để sửa đổi và chú thích tài liệu PDF của bạn. Thêm văn bản, hình ảnh, hình dạng, đánh dấu, nhận xét và nhiều hơn nữa mà không cần phần mềm máy tính để bàn đắt tiền.</p>\n      <p>Giao diện trình chỉnh sửa trực quan giúp dễ dàng đánh dấu tài liệu để xem xét, thêm ghi chú để cộng tác hoặc xóa thông tin nhạy cảm. Công cụ hoàn hảo để đánh dấu tài liệu để xem xét, thêm ghi chú để cộng tác hoặc xóa thông tin nhạy cảm.</p>\n      <p>Tất cả chỉnh sửa diễn ra cục bộ trong trình duyệt của bạn, đảm bảo quyền riêng tư hoàn toàn cho tài liệu nhạy cảm của bạn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn muốn chỉnh sửa."
      },
      {
        "step": 2,
        "title": "Chọn công cụ chỉnh sửa",
        "description": "Chọn từ thanh công cụ: văn bản, đánh dấu, hình dạng, hình ảnh, nhận xét hoặc công cụ xóa."
      },
      {
        "step": 3,
        "title": "Thực hiện chỉnh sửa của bạn",
        "description": "Nhấp vào tài liệu để thêm chú thích, kéo để định vị phần tử và sử dụng bảng thuộc tính để tùy chỉnh."
      },
      {
        "step": 4,
        "title": "Lưu và tải xuống",
        "description": "Nhấp Lưu để áp dụng thay đổi của bạn và tải xuống PDF đã chỉnh sửa."
      }
    ],
    "useCases": [
      {
        "title": "Xem xét tài liệu",
        "description": "Thêm nhận xét, đánh dấu và đánh dấu vào tài liệu để xem xét cộng tác.",
        "icon": "message-square"
      },
      {
        "title": "Điền biểu mẫu",
        "description": "Điền văn bản, thêm chữ ký và hoàn thành biểu mẫu PDF mà không cần in ấn.",
        "icon": "edit-3"
      },
      {
        "title": "Xóa nội dung",
        "description": "Loại bỏ vĩnh viễn thông tin nhạy cảm khỏi tài liệu trước khi chia sẻ.",
        "icon": "eye-off"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể chỉnh sửa văn bản gốc trong PDF không?",
        "answer": "Công cụ này tập trung vào việc thêm chú thích và nội dung mới. Để chỉnh sửa văn bản hiện có, bạn có thể cần sử dụng tài liệu nguồn gốc."
      },
      {
        "question": "Chỉnh sửa của tôi có vĩnh viễn không?",
        "answer": "Chú thích có thể được làm phẳng để vĩnh viễn, hoặc được giữ dưới dạng lớp có thể chỉnh sửa tùy thuộc vào sở thích của bạn."
      },
      {
        "question": "Tôi có thể hoàn tác thay đổi của mình không?",
        "answer": "Có, trình chỉnh sửa hỗ trợ hoàn tác/làm lại. Bạn cũng có thể đặt lại về tài liệu gốc bất kỳ lúc nào trước khi lưu."
      }
    ]
  },
  "jpg-to-pdf": {
    "title": "JPG sang PDF",
    "metaDescription": "Chuyển đổi hình ảnh JPG sang PDF. Kết hợp nhiều tệp JPG thành một tài liệu PDF duy nhất.",
    "keywords": [
      "jpg sang pdf",
      "jpeg sang pdf",
      "chuyển đổi jpg",
      "hình ảnh sang pdf",
      "ảnh sang pdf"
    ],
    "description": "\n      <p>JPG sang PDF chuyển đổi hình ảnh JPEG của bạn thành tài liệu PDF một cách nhanh chóng và dễ dàng. Cho dù bạn có một ảnh duy nhất hay nhiều hình ảnh, công cụ này tạo tệp PDF có vẻ ngoài chuyên nghiệp.</p>\n      <p>Bạn có thể kết hợp nhiều tệp JPG thành một PDF duy nhất, sắp xếp chúng theo bất kỳ thứ tự nào và tùy chỉnh kích thước trang và định hướng. Việc chuyển đổi bảo toàn chất lượng hình ảnh trong khi tạo tệp PDF nhỏ gọn, có thể chia sẻ.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo ảnh của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên hình ảnh JPG",
        "description": "Kéo và thả tệp JPG của bạn hoặc nhấp để chọn hình ảnh từ thiết bị của bạn."
      },
      {
        "step": 2,
        "title": "Sắp xếp và định cấu hình",
        "description": "Sắp xếp lại hình ảnh bằng cách kéo, và chọn tùy chọn kích thước trang và định hướng."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để tạo PDF của bạn và tải xuống kết quả."
      }
    ],
    "useCases": [
      {
        "title": "Album ảnh",
        "description": "Tạo album PDF từ ảnh kỳ nghỉ hoặc ảnh sự kiện để chia sẻ dễ dàng.",
        "icon": "image"
      },
      {
        "title": "Quét tài liệu",
        "description": "Chuyển đổi ảnh máy ảnh điện thoại của tài liệu thành tệp PDF thích hợp.",
        "icon": "camera"
      },
      {
        "title": "Tạo danh mục đầu tư",
        "description": "Sắp xếp công việc nhiếp ảnh hoặc mẫu thiết kế thành danh mục PDF chuyên nghiệp.",
        "icon": "folder"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể chuyển đổi bao nhiêu hình ảnh?",
        "answer": "Bạn có thể chuyển đổi tối đa 100 hình ảnh JPG thành một tài liệu PDF duy nhất."
      },
      {
        "question": "Chất lượng hình ảnh có được bảo toàn không?",
        "answer": "Có, hình ảnh được nhúng ở chất lượng gốc của chúng. Bạn có thể tùy chọn nén chúng để giảm kích thước tệp."
      },
      {
        "question": "Tôi có thể đặt kích thước trang khác nhau cho hình ảnh khác nhau không?",
        "answer": "Công cụ áp dụng kích thước trang thống nhất cho tất cả trang. Mỗi hình ảnh được chia tỷ lệ để vừa với kích thước trang đã chọn trong khi duy trì tỷ lệ khung hình."
      }
    ]
  },
  "sign-pdf": {
    "title": "Ký PDF",
    "metaDescription": "Thêm chữ ký điện tử vào tài liệu PDF. Vẽ, nhập hoặc tải lên chữ ký của bạn.",
    "keywords": [
      "ký pdf",
      "chữ ký điện tử",
      "e-ký",
      "chữ ký pdf",
      "chữ ký số"
    ],
    "description": "\n      <p>Ký PDF cho phép bạn thêm chữ ký điện tử vào tài liệu PDF của mình một cách nhanh chóng và an toàn. Tạo chữ ký của bạn bằng cách vẽ, nhập hoặc tải lên hình ảnh, sau đó đặt nó ở bất kỳ đâu trên tài liệu của bạn.</p>\n      <p>Bạn có thể thêm nhiều chữ ký vào một tài liệu duy nhất, thay đổi kích thước và định vị chúng một cách chính xác và lưu chữ ký của bạn để sử dụng trong tương lai. Công cụ hoàn hảo cho hợp đồng, thỏa thuận, biểu mẫu và bất kỳ tài liệu nào yêu cầu chữ ký của bạn.</p>\n      <p>Tất cả ký diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu và chữ ký của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn cần ký."
      },
      {
        "step": 2,
        "title": "Tạo chữ ký của bạn",
        "description": "Vẽ chữ ký của bạn bằng chuột hoặc chạm, nhập tên của bạn để tạo chữ ký hoặc tải lên hình ảnh chữ ký. Bạn cũng có thể quét ảnh chụp chữ ký viết trên giấy."
      },
      {
        "step": 3,
        "title": "Đặt và điều chỉnh",
        "description": "Nhấp vào tài liệu để đặt chữ ký của bạn, sau đó kéo để định vị và thay đổi kích thước nếu cần."
      },
      {
        "step": 4,
        "title": "Lưu và tải xuống",
        "description": "Nhấp Lưu để áp dụng chữ ký của bạn và tải xuống PDF đã ký."
      }
    ],
    "useCases": [
      {
        "title": "Ký hợp đồng",
        "description": "Ký hợp đồng và thỏa thuận điện tử mà không cần in và quét.",
        "icon": "file-signature"
      },
      {
        "title": "Điền biểu mẫu",
        "description": "Thêm chữ ký của bạn vào biểu mẫu ứng dụng, biểu mẫu đồng ý và tài liệu chính thức.",
        "icon": "clipboard"
      },
      {
        "title": "Quy trình phê duyệt",
        "description": "Ký tắt tài liệu trong quy trình xem xét và phê duyệt.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Chữ ký điện tử có ràng buộc pháp lý không?",
        "answer": "Chữ ký điện tử được công nhận pháp lý ở hầu hết các quốc gia. Tuy nhiên, một số tài liệu có thể yêu cầu loại chữ ký số cụ thể. Kiểm tra quy định địa phương của bạn."
      },
      {
        "question": "Tôi có thể lưu chữ ký của mình để sử dụng trong tương lai không?",
        "answer": "Có, bạn có thể lưu chữ ký của mình vào bộ nhớ cục bộ của trình duyệt để truy cập nhanh khi ký tài liệu trong tương lai."
      },
      {
        "question": "Tôi có thể thêm nhiều chữ ký vào một tài liệu không?",
        "answer": "Có, bạn có thể thêm bao nhiêu chữ ký tùy thích, định vị từng chữ ký một cách độc lập trên bất kỳ trang nào."
      }
    ]
  },
  "crop-pdf": {
    "title": "Cắt PDF",
    "metaDescription": "Cắt trang PDF để loại bỏ lề và khu vực không mong muốn. Cắt tài liệu PDF một cách chính xác.",
    "keywords": [
      "cắt pdf",
      "cắt tỉa pdf",
      "cắt lề pdf",
      "thay đổi kích thước trang pdf",
      "công cụ cắt pdf"
    ],
    "description": "\n      <p>Cắt PDF cho phép bạn cắt tỉa lề và loại bỏ khu vực không mong muốn từ trang PDF của bạn. Điều này hữu ích để loại bỏ khoảng trắng dư thừa, tập trung vào khu vực nội dung cụ thể hoặc chuẩn hóa kích thước trang.</p>\n      <p>Bạn có thể cắt tất cả trang thống nhất hoặc điều chỉnh từng trang riêng lẻ. Giao diện trực quan hiển thị chính xác những gì sẽ được giữ, giúp dễ dàng đạt được kết quả chính xác.</p>\n      <p>Tất cả cắt diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn muốn cắt."
      },
      {
        "step": 2,
        "title": "Xác định khu vực cắt",
        "description": "Kéo tay cầm cắt để xác định khu vực bạn muốn giữ, hoặc nhập số đo chính xác."
      },
      {
        "step": 3,
        "title": "Áp dụng cho trang",
        "description": "Chọn áp dụng cắt cho tất cả trang hoặc chọn trang cụ thể để cắt."
      },
      {
        "step": 4,
        "title": "Cắt và tải xuống",
        "description": "Nhấp Cắt để áp dụng thay đổi và tải xuống PDF đã cắt của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Loại bỏ lề",
        "description": "Cắt tỉa lề dư thừa từ tài liệu đã quét hoặc PDF có đường viền lớn.",
        "icon": "maximize-2"
      },
      {
        "title": "Tập trung nội dung",
        "description": "Cắt để làm nổi bật khu vực nội dung cụ thể, loại bỏ tiêu đề, chân trang hoặc thanh bên.",
        "icon": "target"
      },
      {
        "title": "Chuẩn hóa trang",
        "description": "Làm cho tất cả trang có cùng kích thước bằng cách cắt theo kích thước thống nhất.",
        "icon": "square"
      }
    ],
    "faq": [
      {
        "question": "Cắt có loại bỏ nội dung vĩnh viễn không?",
        "answer": "Có, cắt loại bỏ nội dung bên ngoài khu vực cắt. Đảm bảo giữ bản sao của tệp gốc của bạn."
      },
      {
        "question": "Tôi có thể cắt các trang khác nhau khác nhau không?",
        "answer": "Có, bạn có thể áp dụng cài đặt cắt khác nhau cho từng trang hoặc nhóm trang."
      },
      {
        "question": "Cắt có ảnh hưởng đến chất lượng văn bản không?",
        "answer": "Không, cắt chỉ loại bỏ khu vực bên ngoài ranh giới cắt. Nội dung còn lại duy trì chất lượng gốc."
      }
    ]
  },
  "extract-pages": {
    "title": "Trích xuất trang",
    "metaDescription": "Trích xuất trang cụ thể từ tệp PDF. Chọn và lưu trang riêng lẻ dưới dạng tài liệu mới.",
    "keywords": [
      "trích xuất trang pdf",
      "lưu trang pdf",
      "sao chép trang pdf",
      "công cụ trích xuất trang pdf"
    ],
    "description": "\n      <p>Trích xuất trang cho phép bạn chọn và lưu trang cụ thể từ tài liệu PDF dưới dạng tệp mới. Điều này hoàn hảo để kéo ra các phần liên quan, tạo đoạn trích hoặc tách tài liệu kết hợp.</p>\n      <p>Bạn có thể trích xuất trang riêng lẻ, phạm vi trang hoặc nhiều trang không liên tiếp. Xem trước trang trực quan giúp dễ dàng xác định và chọn chính xác các trang bạn cần.</p>\n      <p>Tất cả trích xuất diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn muốn trích xuất trang từ đó."
      },
      {
        "step": 2,
        "title": "Chọn trang",
        "description": "Nhấp vào hình thu nhỏ trang để chọn chúng, hoặc nhập số trang trong trường nhập liệu."
      },
      {
        "step": 3,
        "title": "Trích xuất và tải xuống",
        "description": "Nhấp Trích xuất để tạo PDF mới với các trang đã chọn của bạn và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Tạo đoạn trích",
        "description": "Trích xuất trang liên quan từ báo cáo hoặc sách để tạo tài liệu tham khảo tập trung.",
        "icon": "file-minus"
      },
      {
        "title": "Chia sẻ nội dung cụ thể",
        "description": "Kéo ra trang cụ thể để chia sẻ mà không gửi toàn bộ tài liệu.",
        "icon": "share-2"
      },
      {
        "title": "Lưu trữ trang quan trọng",
        "description": "Trích xuất và lưu trang chính từ tài liệu để lưu trữ lâu dài.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể trích xuất trang không liên tiếp không?",
        "answer": "Có, bạn có thể chọn bất kỳ kết hợp trang nào, cho dù liên tiếp hay rải rác trong tài liệu."
      },
      {
        "question": "Đánh dấu trang có được bảo toàn không?",
        "answer": "Đánh dấu trang trỏ đến trang được trích xuất được bảo toàn trong tài liệu PDF mới."
      },
      {
        "question": "Tôi có thể trích xuất từ nhiều PDF không?",
        "answer": "Công cụ này hoạt động với một PDF tại một thời điểm. Để kết hợp trang từ nhiều PDF, hãy sử dụng công cụ Hợp nhất PDF trước."
      }
    ]
  },
  "organize-pdf": {
    "title": "Tổ chức PDF",
    "metaDescription": "Sắp xếp lại, sao chép và xóa trang PDF. Kéo và thả để tổ chức tài liệu của bạn.",
    "keywords": [
      "tổ chức pdf",
      "sắp xếp lại trang pdf",
      "sắp xếp lại pdf",
      "công cụ tổ chức trang pdf"
    ],
    "description": "\n      <p>Tổ chức PDF cung cấp giao diện kéo và thả trực quan để sắp xếp lại trang trong tài liệu PDF của bạn. Sắp xếp lại trang, sao chép phần quan trọng hoặc loại bỏ trang không mong muốn với sự dễ dàng.</p>\n      <p>Hình thu nhỏ trang trực quan giúp dễ dàng xác định nội dung và sắp xếp trang chính xác theo cách bạn cần. Hoàn hảo để cấu trúc lại tài liệu, tạo thứ tự trang tùy chỉnh hoặc dọn dẹp tệp đã quét.</p>\n      <p>Tất cả tổ chức diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn muốn tổ chức."
      },
      {
        "step": 2,
        "title": "Sắp xếp lại trang",
        "description": "Kéo hình thu nhỏ trang để sắp xếp lại chúng. Nhấp vào nút sao chép hoặc xóa trên mỗi trang nếu cần."
      },
      {
        "step": 3,
        "title": "Lưu và tải xuống",
        "description": "Nhấp Lưu để áp dụng thay đổi của bạn và tải xuống PDF đã tổ chức lại."
      }
    ],
    "useCases": [
      {
        "title": "Khắc phục thứ tự trang",
        "description": "Sửa thứ tự trang đã được quét hoặc kết hợp sai.",
        "icon": "arrow-up-down"
      },
      {
        "title": "Tạo thứ tự tùy chỉnh",
        "description": "Sắp xếp trang theo thứ tự cụ thể cho bản trình bày hoặc báo cáo.",
        "icon": "list"
      },
      {
        "title": "Loại bỏ trang không mong muốn",
        "description": "Xóa trang trống, bản sao hoặc nội dung không liên quan khỏi tài liệu.",
        "icon": "trash-2"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể sao chép trang không?",
        "answer": "Có, bạn có thể sao chép bất kỳ trang nào và đặt bản sao ở bất kỳ đâu trong tài liệu."
      },
      {
        "question": "Có chức năng hoàn tác không?",
        "answer": "Có, bạn có thể hoàn tác và làm lại thay đổi. Bạn cũng có thể đặt lại về thứ tự gốc bất kỳ lúc nào."
      },
      {
        "question": "Tôi có thể tổ chức nhiều PDF cùng nhau không?",
        "answer": "Công cụ này hoạt động với một PDF tại một thời điểm. Để kết hợp và tổ chức nhiều PDF, hãy hợp nhất chúng bằng công cụ Hợp nhất PDF trước."
      }
    ]
  },
  "delete-pages": {
    "title": "Xóa trang",
    "metaDescription": "Loại bỏ trang không mong muốn khỏi tệp PDF. Chọn và xóa trang cụ thể dễ dàng.",
    "keywords": [
      "xóa trang pdf",
      "loại bỏ trang pdf",
      "công cụ xóa trang pdf",
      "xóa trang khỏi pdf"
    ],
    "description": "\n      <p>Xóa trang cho phép bạn loại bỏ trang không mong muốn khỏi tài liệu PDF của mình một cách nhanh chóng và dễ dàng. Cho dù bạn cần loại bỏ trang trống, nội dung lỗi thời hoặc thông tin nhạy cảm, công cụ này giúp đơn giản hóa.</p>\n      <p>Hình thu nhỏ trang trực quan giúp bạn xác định chính xác trang nào cần loại bỏ. Bạn có thể xóa trang riêng lẻ hoặc nhiều trang cùng lúc.</p>\n      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn muốn xóa trang từ đó."
      },
      {
        "step": 2,
        "title": "Chọn trang để xóa",
        "description": "Nhấp vào hình thu nhỏ trang để đánh dấu chúng để xóa, hoặc nhập số trang trong trường nhập liệu."
      },
      {
        "step": 3,
        "title": "Xóa và tải xuống",
        "description": "Nhấp Xóa để loại bỏ trang đã chọn và tải xuống PDF đã cập nhật của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Loại bỏ trang trống",
        "description": "Dọn dẹp tài liệu bằng cách loại bỏ trang trống được bao gồm một cách tình cờ.",
        "icon": "file-x"
      },
      {
        "title": "Loại bỏ nội dung nhạy cảm",
        "description": "Xóa trang chứa thông tin bí mật trước khi chia sẻ tài liệu.",
        "icon": "shield"
      },
      {
        "title": "Hợp lý hóa tài liệu",
        "description": "Loại bỏ trang lỗi thời hoặc không liên quan để tạo tài liệu tập trung hơn.",
        "icon": "filter"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể khôi phục trang đã xóa không?",
        "answer": "Xóa là vĩnh viễn trong tệp đầu ra. Giữ bản sao của tài liệu gốc của bạn nếu bạn có thể cần trang sau này."
      },
      {
        "question": "Tôi có thể xóa nhiều trang cùng lúc không?",
        "answer": "Có, bạn có thể chọn và xóa nhiều trang đồng thời."
      },
      {
        "question": "Xóa trang có ảnh hưởng đến đánh dấu trang không?",
        "answer": "Đánh dấu trang trỏ đến trang đã xóa sẽ bị xóa. Đánh dấu trang đến trang còn lại được bảo toàn."
      }
    ]
  },
  "bookmark": {
    "title": "Chỉnh sửa đánh dấu trang",
    "metaDescription": "Thêm, chỉnh sửa và quản lý đánh dấu trang PDF. Tạo cấu trúc điều hướng cho tài liệu của bạn.",
    "keywords": [
      "đánh dấu trang pdf",
      "chỉnh sửa đánh dấu trang",
      "thêm đánh dấu trang",
      "điều hướng pdf",
      "mục lục"
    ],
    "description": "\n      <p>Chỉnh sửa đánh dấu trang cho phép bạn tạo, sửa đổi và tổ chức đánh dấu trang trong tài liệu PDF của mình. Đánh dấu trang cung cấp điều hướng nhanh đến các phần cụ thể, giúp tài liệu dài dễ sử dụng hơn.</p>\n      <p>Bạn có thể thêm đánh dấu trang mới, chỉnh sửa đánh dấu trang hiện có, tổ chức lại cấu trúc phân cấp đánh dấu trang hoặc nhập đánh dấu trang từ nguồn bên ngoài. Công cụ này thiết yếu để tạo tài liệu chuyên nghiệp, có thể điều hướng.</p>\n      <p>Tất cả chỉnh sửa diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn muốn chỉnh sửa."
      },
      {
        "step": 2,
        "title": "Quản lý đánh dấu trang",
        "description": "Thêm đánh dấu trang mới, chỉnh sửa đánh dấu trang hiện có hoặc kéo để tổ chức lại cấu trúc phân cấp."
      },
      {
        "step": 3,
        "title": "Lưu và tải xuống",
        "description": "Nhấp Lưu để áp dụng thay đổi của bạn và tải xuống PDF với đánh dấu trang đã cập nhật."
      }
    ],
    "useCases": [
      {
        "title": "Tạo điều hướng",
        "description": "Thêm đánh dấu trang vào tài liệu dài để giúp người đọc điều hướng nhanh đến các phần cụ thể.",
        "icon": "navigation"
      },
      {
        "title": "Tổ chức chương",
        "description": "Tạo cấu trúc đánh dấu trang phân cấp phản ánh tổ chức chương của tài liệu của bạn.",
        "icon": "book-open"
      },
      {
        "title": "Cải thiện khả năng truy cập",
        "description": "Thêm đánh dấu trang để làm cho tài liệu dễ truy cập và thân thiện với người dùng hơn.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể tạo đánh dấu trang lồng nhau không?",
        "answer": "Có, bạn có thể tạo cấu trúc phân cấp với đánh dấu trang cha và con."
      },
      {
        "question": "Tôi có thể nhập đánh dấu trang từ tệp không?",
        "answer": "Có, bạn có thể nhập cấu trúc đánh dấu trang từ tệp JSON hoặc văn bản."
      },
      {
        "question": "Đánh dấu trang có hoạt động trong tất cả trình đọc PDF không?",
        "answer": "Có, đánh dấu trang là tính năng PDF tiêu chuẩn được hỗ trợ bởi tất cả trình đọc PDF chính."
      }
    ]
  },
  "table-of-contents": {
    "title": "Mục lục",
    "metaDescription": "Tạo mục lục cho PDF của bạn. Tạo điều hướng có thể nhấp từ đánh dấu trang.",
    "keywords": [
      "mục lục pdf",
      "trình tạo toc",
      "chỉ mục pdf",
      "điều hướng tài liệu"
    ],
    "description": "\n      <p>Mục lục tạo trang mục lục có thể điều hướng cho tài liệu PDF của bạn. TOC có thể được tạo từ đánh dấu trang hiện có hoặc mục nhập tùy chỉnh, cung cấp cho người đọc tổng quan và điều hướng nhanh.</p>\n      <p>Tùy chỉnh giao diện với các kiểu dáng, phông chữ và bố cục khác nhau. TOC được tạo bao gồm liên kết có thể nhấp nhảy trực tiếp đến trang được tham chiếu.</p>\n      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu."
      },
      {
        "step": 2,
        "title": "Định cấu hình TOC",
        "description": "Chọn tạo từ đánh dấu trang hoặc tạo mục nhập tùy chỉnh. Chọn tùy chọn kiểu dáng và định vị."
      },
      {
        "step": 3,
        "title": "Tạo và tải xuống",
        "description": "Nhấp Tạo để tạo mục lục và tải xuống PDF đã cập nhật của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Bài báo học thuật",
        "description": "Thêm mục lục chuyên nghiệp vào luận án, luận văn và bài nghiên cứu.",
        "icon": "graduation-cap"
      },
      {
        "title": "Báo cáo kinh doanh",
        "description": "Tạo báo cáo có thể điều hướng với danh sách phần rõ ràng cho các bên liên quan.",
        "icon": "bar-chart"
      },
      {
        "title": "Hướng dẫn sử dụng",
        "description": "Tạo TOC toàn diện cho tài liệu kỹ thuật và hướng dẫn sử dụng.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể tùy chỉnh giao diện TOC không?",
        "answer": "Có, bạn có thể chọn từ các kiểu dáng, phông chữ và bố cục khác nhau cho mục lục của mình."
      },
      {
        "question": "TOC được chèn ở đâu?",
        "answer": "Theo mặc định, TOC được chèn ở đầu tài liệu, nhưng bạn có thể chọn vị trí khác."
      },
      {
        "question": "Các mục nhập TOC có thể nhấp không?",
        "answer": "Có, mỗi mục nhập là liên kết có thể nhấp điều hướng đến trang tương ứng."
      }
    ]
  },
  "page-numbers": {
    "title": "Số trang",
    "metaDescription": "Thêm số trang vào tài liệu PDF. Tùy chỉnh vị trí, định dạng và số bắt đầu.",
    "keywords": [
      "thêm số trang",
      "số trang pdf",
      "đánh số trang pdf",
      "phân trang pdf"
    ],
    "description": "\n      <p>Số trang thêm đánh số trang có thể tùy chỉnh vào tài liệu PDF của bạn. Chọn từ các định dạng khác nhau, vị trí và kiểu dáng để phù hợp với thiết kế tài liệu của bạn.</p>\n      <p>Đặt số bắt đầu, bỏ qua các trang nhất định và sử dụng các định dạng đánh số khác nhau (1, 2, 3 hoặc i, ii, iii). Hoàn hảo để tạo tài liệu chuyên nghiệp với phân trang thích hợp.</p>\n      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu."
      },
      {
        "step": 2,
        "title": "Định cấu hình đánh số",
        "description": "Chọn vị trí, định dạng, số bắt đầu và trang nào để đánh số."
      },
      {
        "step": 3,
        "title": "Áp dụng và tải xuống",
        "description": "Nhấp Áp dụng để thêm số trang và tải xuống PDF đã cập nhật của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Tài liệu chuyên nghiệp",
        "description": "Thêm số trang vào báo cáo, đề xuất và tài liệu kinh doanh.",
        "icon": "file-text"
      },
      {
        "title": "Bài báo học thuật",
        "description": "Đánh số trang theo yêu cầu định dạng học thuật.",
        "icon": "graduation-cap"
      },
      {
        "title": "Tài liệu pháp lý",
        "description": "Thêm phân trang thích hợp vào hợp đồng và hồ sơ tòa án.",
        "icon": "scale"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể bỏ qua trang đầu không?",
        "answer": "Có, bạn có thể chỉ định trang nào có số trang và trang nào được bỏ qua, chẳng hạn như trang tiêu đề hoặc trang bìa."
      },
      {
        "question": "Định dạng số nào có sẵn?",
        "answer": "Bạn có thể sử dụng chữ số Ả Rập (1, 2, 3), chữ số La Mã (i, ii, iii hoặc I, II, III) hoặc chữ cái (a, b, c)."
      },
      {
        "question": "Tôi có thể thêm định dạng \"Trang X của Y\" không?",
        "answer": "Có, bạn có thể bao gồm số trang tổng trong định dạng đánh số của mình."
      }
    ]
  },
  "add-watermark": {
    "title": "Thêm hình mờ",
    "metaDescription": "Thêm hình mờ văn bản hoặc hình ảnh vào tệp PDF. Bảo vệ và thương hiệu tài liệu của bạn.",
    "keywords": [
      "thêm hình mờ",
      "hình mờ pdf",
      "đóng dấu pdf",
      "thương hiệu pdf",
      "bảo vệ pdf"
    ],
    "description": "\n      <p>Thêm hình mờ cho phép bạn đặt hình mờ văn bản hoặc hình ảnh trên tài liệu PDF của mình. Hình mờ có thể chỉ ra trạng thái tài liệu (Bản nháp, Bí mật), thêm thương hiệu hoặc ngăn chặn sao chép trái phép.</p>\n      <p>Tùy chỉnh vị trí hình mờ, kích thước, độ trong suốt, xoay và màu sắc. Áp dụng cho tất cả trang hoặc trang đã chọn. Công cụ hỗ trợ cả hình mờ văn bản và hình ảnh.</p>\n      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu."
      },
      {
        "step": 2,
        "title": "Tạo hình mờ",
        "description": "Nhập văn bản hoặc tải lên hình ảnh cho hình mờ của bạn. Điều chỉnh vị trí, kích thước, độ trong suốt và xoay."
      },
      {
        "step": 3,
        "title": "Áp dụng và tải xuống",
        "description": "Nhấp Áp dụng để thêm hình mờ và tải xuống PDF đã cập nhật của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Bảo vệ tài liệu",
        "description": "Thêm hình mờ \"Bí mật\" hoặc \"Bản nháp\" để chỉ ra trạng thái tài liệu.",
        "icon": "shield"
      },
      {
        "title": "Thương hiệu tài liệu",
        "description": "Thêm logo công ty hoặc tên vào tài liệu chính thức.",
        "icon": "award"
      },
      {
        "title": "Thông báo bản quyền",
        "description": "Thêm thông tin bản quyền để bảo vệ tài sản trí tuệ.",
        "icon": "copyright"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể sử dụng hình ảnh làm hình mờ không?",
        "answer": "Có, bạn có thể tải lên hình ảnh PNG, JPG hoặc SVG để sử dụng làm hình mờ."
      },
      {
        "question": "Tôi có thể làm cho hình mờ bán trong suốt không?",
        "answer": "Có, bạn có thể điều chỉnh độ trong suốt từ hoàn toàn trong suốt đến hoàn toàn mờ."
      },
      {
        "question": "Tôi có thể áp dụng hình mờ khác nhau cho các trang khác nhau không?",
        "answer": "Công cụ áp dụng cùng một hình mờ cho các trang đã chọn. Để có hình mờ khác nhau, hãy xử lý tài liệu nhiều lần."
      }
    ]
  },
  "header-footer": {
    "title": "Tiêu đề & Chân trang",
    "metaDescription": "Thêm tiêu đề và chân trang vào tài liệu PDF. Bao gồm số trang, ngày tháng và văn bản tùy chỉnh.",
    "keywords": [
      "tiêu đề pdf",
      "chân trang pdf",
      "thêm tiêu đề chân trang",
      "giấy tiêu đề pdf"
    ],
    "description": "\n      <p>Tiêu đề & Chân trang thêm tiêu đề và chân trang có thể tùy chỉnh vào tài liệu PDF của bạn. Bao gồm số trang, ngày tháng, tiêu đề tài liệu hoặc bất kỳ văn bản tùy chỉnh nào trong khu vực tiêu đề hoặc chân trang.</p>\n      <p>Định vị nội dung ở bên trái, giữa hoặc bên phải của tiêu đề/chân trang. Sử dụng nội dung khác nhau cho trang lẻ và chẵn nếu cần. Hoàn hảo để tạo tài liệu chuyên nghiệp với định dạng nhất quán.</p>\n      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu."
      },
      {
        "step": 2,
        "title": "Định cấu hình Tiêu đề/Chân trang",
        "description": "Nhập văn bản cho khu vực tiêu đề và chân trang. Thêm số trang, ngày tháng hoặc văn bản tùy chỉnh."
      },
      {
        "step": 3,
        "title": "Áp dụng và tải xuống",
        "description": "Nhấp Áp dụng để thêm tiêu đề/chân trang và tải xuống PDF đã cập nhật của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Tài liệu kinh doanh",
        "description": "Thêm tên công ty và số trang vào tài liệu chuyên nghiệp.",
        "icon": "briefcase"
      },
      {
        "title": "Tài liệu pháp lý",
        "description": "Bao gồm số trường hợp, ngày tháng và tham chiếu trang trong hồ sơ tòa án.",
        "icon": "scale"
      },
      {
        "title": "Bài báo học thuật",
        "description": "Thêm tiêu đề chạy với tiêu đề bài báo và tên tác giả.",
        "icon": "graduation-cap"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể có tiêu đề khác nhau trên trang lẻ và chẵn không?",
        "answer": "Có, bạn có thể định cấu hình nội dung khác nhau cho trang lẻ và chẵn."
      },
      {
        "question": "Tôi có thể bao gồm ngày hiện tại không?",
        "answer": "Có, bạn có thể chèn trường ngày động hiển thị ngày hiện tại."
      },
      {
        "question": "Tôi có thể bỏ qua tiêu đề/chân trang trên các trang nhất định không?",
        "answer": "Có, bạn có thể chỉ định trang nào có tiêu đề/chân trang và trang nào được bỏ qua."
      }
    ]
  },
  "invert-colors": {
    "title": "Đảo ngược màu sắc",
    "metaDescription": "Đảo ngược màu sắc PDF để đọc chế độ tối. Chuyển đổi tài liệu thành màu âm.",
    "keywords": [
      "đảo ngược màu sắc pdf",
      "chế độ tối pdf",
      "âm bản pdf",
      "đảo ngược màu sắc"
    ],
    "description": "\n      <p>Đảo ngược màu sắc đảo ngược màu sắc trong tài liệu PDF của bạn, tạo hiệu ứng hình ảnh âm. Điều này đặc biệt hữu ích để tạo phiên bản chế độ tối của tài liệu để đọc thoải mái trong điều kiện ánh sáng thấp.</p>\n      <p>Công cụ có thể đảo ngược tất cả màu sắc hoặc loại trừ có chọn lọc một số phần tử như hình ảnh. Hoàn hảo để giảm mỏi mắt khi đọc tài liệu trong thời gian dài vào ban đêm.</p>\n      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu."
      },
      {
        "step": 2,
        "title": "Định cấu hình tùy chọn",
        "description": "Chọn đảo ngược tất cả nội dung hoặc bảo toàn hình ảnh."
      },
      {
        "step": 3,
        "title": "Đảo ngược và tải xuống",
        "description": "Nhấp Đảo ngược để xử lý tài liệu và tải xuống kết quả."
      }
    ],
    "useCases": [
      {
        "title": "Đọc ban đêm",
        "description": "Tạo phiên bản chế độ tối của tài liệu để đọc thoải mái vào ban đêm.",
        "icon": "moon"
      },
      {
        "title": "Giảm mỏi mắt",
        "description": "Đảo ngược tài liệu sáng để giảm mỏi mắt trong khi đọc kéo dài.",
        "icon": "eye"
      },
      {
        "title": "Tiết kiệm in ấn",
        "description": "Đảo ngược tài liệu để giảm mức sử dụng mực khi in bản nháp.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Hình ảnh có bị đảo ngược không?",
        "answer": "Theo mặc định, có. Bạn có thể chọn bảo toàn hình ảnh gốc trong khi đảo ngược văn bản và nền."
      },
      {
        "question": "Tôi có thể đảo ngược chỉ một số trang không?",
        "answer": "Có, bạn có thể chọn trang nào để đảo ngược."
      },
      {
        "question": "Việc đảo ngược có thể đảo ngược không?",
        "answer": "Bạn có thể đảo ngược tài liệu lại để trở về màu sắc gần như gốc."
      }
    ]
  },
  "background-color": {
    "title": "Màu nền",
    "metaDescription": "Thay đổi màu nền PDF. Thêm nền màu cho trang tài liệu.",
    "keywords": [
      "màu nền pdf",
      "thay đổi nền pdf",
      "pdf màu",
      "màu trang pdf"
    ],
    "description": "\n      <p>Màu nền cho phép bạn thay đổi hoặc thêm màu nền cho trang PDF của mình. Điều này có thể cải thiện độ tương phản, thêm sự hấp dẫn trực quan hoặc đáp ứng yêu cầu thương hiệu của bạn.</p>\n      <p>Chọn bất kỳ màu nào cho nền và áp dụng cho tất cả trang hoặc trang đã chọn. Công cụ bảo toàn tất cả nội dung hiện có trong khi thêm lớp nền.</p>\n      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu."
      },
      {
        "step": 2,
        "title": "Chọn màu",
        "description": "Chọn màu nền bằng bộ chọn màu hoặc nhập mã hex."
      },
      {
        "step": 3,
        "title": "Áp dụng và tải xuống",
        "description": "Nhấp Áp dụng để thêm nền và tải xuống PDF đã cập nhật của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Cải thiện độ tương phản",
        "description": "Thêm nền kem nhạt hoặc sepia để giảm mỏi mắt.",
        "icon": "eye"
      },
      {
        "title": "Thương hiệu tài liệu",
        "description": "Sử dụng màu thương hiệu làm nền cho tài liệu marketing.",
        "icon": "palette"
      },
      {
        "title": "Làm nổi bật phần",
        "description": "Sử dụng màu nền khác nhau để phân biệt phần tài liệu.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "Nền có che nội dung hiện có không?",
        "answer": "Không, nền được thêm phía sau nội dung hiện có, bảo toàn tất cả văn bản và hình ảnh."
      },
      {
        "question": "Tôi có thể sử dụng màu khác nhau cho các trang khác nhau không?",
        "answer": "Bạn sẽ cần xử lý tài liệu nhiều lần cho màu khác nhau trên các trang khác nhau."
      },
      {
        "question": "Tôi có thể xóa nền hiện có không?",
        "answer": "Công cụ này thêm nền. Để xóa nền, bạn có thể cần sử dụng công cụ Chỉnh sửa PDF."
      }
    ]
  },
  "text-color": {
    "title": "Thay đổi màu văn bản",
    "metaDescription": "Thay đổi màu văn bản trong tài liệu PDF. Sửa đổi màu của tất cả nội dung văn bản.",
    "keywords": [
      "thay đổi màu văn bản pdf",
      "màu văn bản pdf",
      "sửa đổi màu văn bản",
      "tái màu văn bản pdf"
    ],
    "description": "\n      <p>Thay đổi màu văn bản cho phép bạn sửa đổi màu của văn bản trong tài liệu PDF của mình. Điều này hữu ích để cải thiện độ tương phản, phù hợp thương hiệu hoặc tạo biến thể trực quan của tài liệu.</p>\n      <p>Chọn màu mới và áp dụng cho tất cả văn bản trong tài liệu. Công cụ xử lý các phần tử văn bản trong khi bảo toàn hình ảnh và nội dung khác.</p>\n      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu."
      },
      {
        "step": 2,
        "title": "Chọn màu",
        "description": "Chọn màu văn bản mới bằng bộ chọn màu hoặc nhập mã hex."
      },
      {
        "step": 3,
        "title": "Áp dụng và tải xuống",
        "description": "Nhấp Áp dụng để thay đổi màu văn bản và tải xuống PDF đã cập nhật của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Cải thiện độ tương phản",
        "description": "Thay đổi màu văn bản để cải thiện khả năng đọc so với nền.",
        "icon": "contrast"
      },
      {
        "title": "Nhất quán thương hiệu",
        "description": "Cập nhật màu văn bản để phù hợp với hướng dẫn thương hiệu.",
        "icon": "palette"
      },
      {
        "title": "Khả năng truy cập",
        "description": "Điều chỉnh màu văn bản để đáp ứng yêu cầu độ tương phản về khả năng truy cập.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Tất cả văn bản có bị thay đổi không?",
        "answer": "Có, công cụ thay đổi màu của tất cả phần tử văn bản trong tài liệu."
      },
      {
        "question": "Tôi có thể thay đổi chỉ văn bản cụ thể không?",
        "answer": "Công cụ này thay đổi tất cả văn bản. Để thay đổi có chọn lọc, hãy sử dụng công cụ Chỉnh sửa PDF."
      },
      {
        "question": "Định dạng văn bản (đậm, nghiêng) có được bảo toàn không?",
        "answer": "Có, định dạng văn bản được bảo toàn; chỉ màu sắc bị thay đổi."
      }
    ]
  },
  "add-stamps": {
    "title": "Thêm dấu",
    "metaDescription": "Thêm dấu vào tài liệu PDF. Sử dụng dấu đặt sẵn hoặc tùy chỉnh cho phê duyệt, xem xét và hơn thế nữa.",
    "keywords": [
      "dấu pdf",
      "thêm dấu",
      "dấu phê duyệt",
      "dấu cao su pdf"
    ],
    "description": "\n      <p>Thêm dấu cho phép bạn đặt hình ảnh dấu trên tài liệu PDF của mình. Sử dụng dấu đặt sẵn như \"Đã phê duyệt\", \"Từ chối\", \"Bản nháp\" hoặc tải lên hình ảnh dấu tùy chỉnh.</p>\n      <p>Định vị dấu ở bất kỳ đâu trên trang, thay đổi kích thước chúng và áp dụng cho một hoặc nhiều trang. Hoàn hảo cho quy trình tài liệu, phê duyệt và chỉ báo trạng thái.</p>\n      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu."
      },
      {
        "step": 2,
        "title": "Chọn dấu",
        "description": "Chọn dấu đặt sẵn hoặc tải lên hình ảnh dấu tùy chỉnh."
      },
      {
        "step": 3,
        "title": "Định vị và áp dụng",
        "description": "Nhấp để đặt dấu, điều chỉnh vị trí và kích thước, sau đó tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Phê duyệt tài liệu",
        "description": "Thêm dấu \"Đã phê duyệt\" hoặc \"Từ chối\" vào tài liệu trong quy trình xem xét.",
        "icon": "check-circle"
      },
      {
        "title": "Chỉ báo trạng thái",
        "description": "Đánh dấu tài liệu là \"Bản nháp\", \"Cuối cùng\" hoặc \"Bí mật\".",
        "icon": "tag"
      },
      {
        "title": "Kiểm soát chất lượng",
        "description": "Thêm dấu QC để chỉ ra hoàn thành kiểm tra hoặc xem xét.",
        "icon": "clipboard-check"
      }
    ],
    "faq": [
      {
        "question": "Dấu đặt sẵn nào có sẵn?",
        "answer": "Đặt sẵn bao gồm Đã phê duyệt, Từ chối, Bản nháp, Cuối cùng, Bí mật, Sao chép và nhiều hơn nữa."
      },
      {
        "question": "Tôi có thể tải lên dấu tùy chỉnh không?",
        "answer": "Có, bạn có thể tải lên hình ảnh PNG hoặc JPG để sử dụng làm dấu tùy chỉnh."
      },
      {
        "question": "Tôi có thể thêm nhiều dấu vào một tài liệu không?",
        "answer": "Có, bạn có thể thêm nhiều dấu và định vị từng dấu một cách độc lập."
      }
    ]
  },
  "remove-annotations": {
    "title": "Loại bỏ chú thích",
    "metaDescription": "Loại bỏ chú thích khỏi tệp PDF. Xóa nhận xét, đánh dấu và đánh dấu.",
    "keywords": [
      "loại bỏ chú thích pdf",
      "xóa nhận xét",
      "loại bỏ đánh dấu",
      "dọn dẹp pdf"
    ],
    "description": "\n      <p>Loại bỏ chú thích loại bỏ nhận xét, đánh dấu, ghi chú dính và chú thích khác khỏi tài liệu PDF của bạn. Điều này tạo phiên bản sạch của tài liệu mà không có đánh dấu.</p>\n      <p>Bạn có thể loại bỏ tất cả chú thích hoặc loại bỏ có chọn lọc các loại cụ thể. Hoàn hảo để tạo phiên bản cuối cùng của tài liệu đã xem xét hoặc loại bỏ nhận xét nhạy cảm.</p>\n      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu."
      },
      {
        "step": 2,
        "title": "Chọn loại chú thích",
        "description": "Chọn loại chú thích nào để loại bỏ: nhận xét, đánh dấu, liên kết, v.v."
      },
      {
        "step": 3,
        "title": "Loại bỏ và tải xuống",
        "description": "Nhấp Loại bỏ để loại bỏ chú thích và tải xuống PDF sạch."
      }
    ],
    "useCases": [
      {
        "title": "Hoàn thiện tài liệu",
        "description": "Loại bỏ nhận xét xem xét và đánh dấu trước khi xuất bản tài liệu cuối cùng.",
        "icon": "file-check"
      },
      {
        "title": "Bảo vệ quyền riêng tư",
        "description": "Loại bỏ nhận xét có thể chứa thông tin nhạy cảm trước khi chia sẻ.",
        "icon": "shield"
      },
      {
        "title": "Phân phối sạch",
        "description": "Tạo bản sao sạch của tài liệu đã chú thích để phân phối.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Loại chú thích nào có thể loại bỏ?",
        "answer": "Nhận xét, đánh dấu, gạch dưới, gạch ngang, ghi chú dính, dấu và liên kết đều có thể loại bỏ."
      },
      {
        "question": "Tôi có thể giữ một số chú thích không?",
        "answer": "Có, bạn có thể chọn loại chú thích nào để loại bỏ và loại nào để giữ."
      },
      {
        "question": "Điều này có thể đảo ngược không?",
        "answer": "Không, việc loại bỏ chú thích là vĩnh viễn. Giữ bản sao của bản gốc nếu cần."
      }
    ]
  },
  "form-filler": {
    "title": "Điền biểu mẫu",
    "metaDescription": "Điền biểu mẫu PDF trực tuyến. Hoàn thành biểu mẫu PDF tương tác mà không cần in ấn.",
    "keywords": [
      "điền biểu mẫu pdf",
      "trình điền biểu mẫu pdf",
      "hoàn thành biểu mẫu pdf",
      "pdf tương tác"
    ],
    "description": "\n      <p>Điền biểu mẫu cho phép bạn hoàn thành biểu mẫu PDF tương tác trực tiếp trong trình duyệt của mình. Điền trường văn bản, đánh dấu hộp kiểm, chọn tùy chọn và thêm chữ ký mà không cần in tài liệu.</p>\n      <p>Công cụ hỗ trợ biểu mẫu PDF tiêu chuẩn và biểu mẫu XFA. Dữ liệu đã điền của bạn có thể được lưu và biểu mẫu có thể được làm phẳng để ngăn chặn chỉnh sửa thêm.</p>\n      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo dữ liệu biểu mẫu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên biểu mẫu PDF của bạn",
        "description": "Kéo và thả biểu mẫu PDF của bạn hoặc nhấp để chọn tệp."
      },
      {
        "step": 2,
        "title": "Điền biểu mẫu",
        "description": "Nhấp vào trường biểu mẫu để nhập văn bản, đánh dấu hộp kiểm hoặc chọn tùy chọn."
      },
      {
        "step": 3,
        "title": "Lưu và tải xuống",
        "description": "Nhấp Lưu để bảo toàn mục nhập của bạn và tải xuống biểu mẫu đã điền."
      }
    ],
    "useCases": [
      {
        "title": "Biểu mẫu ứng dụng",
        "description": "Hoàn thành đơn xin việc, đơn xin phép và đơn đăng ký.",
        "icon": "clipboard"
      },
      {
        "title": "Biểu mẫu thuế",
        "description": "Điền tài liệu thuế và biểu mẫu tài chính điện tử.",
        "icon": "file-text"
      },
      {
        "title": "Hợp đồng",
        "description": "Hoàn thành biểu mẫu hợp đồng với thông tin của bạn trước khi ký.",
        "icon": "file-signature"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể lưu tiến trình của mình không?",
        "answer": "Có, bạn có thể lưu biểu mẫu đã điền một phần và tiếp tục sau."
      },
      {
        "question": "Làm phẳng biểu mẫu là gì?",
        "answer": "Làm phẳng chuyển đổi trường biểu mẫu thành nội dung tĩnh, ngăn chặn chỉnh sửa thêm."
      },
      {
        "question": "Biểu mẫu XFA có được hỗ trợ không?",
        "answer": "Có, công cụ hỗ trợ cả biểu mẫu AcroForms tiêu chuẩn và biểu mẫu XFA."
      }
    ]
  },
  "form-creator": {
    "title": "Tạo biểu mẫu",
    "metaDescription": "Tạo biểu mẫu PDF có thể điền. Thêm trường văn bản, hộp kiểm và menu thả xuống vào tài liệu.",
    "keywords": [
      "tạo biểu mẫu pdf",
      "trình tạo biểu mẫu pdf",
      "pdf có thể điền",
      "thêm trường biểu mẫu"
    ],
    "description": "\n      <p>Tạo biểu mẫu biến đổi tài liệu PDF tĩnh thành biểu mẫu tương tác có thể điền. Thêm trường văn bản, hộp kiểm, nút radio, menu thả xuống và nhiều hơn nữa để tạo biểu mẫu chuyên nghiệp.</p>\n      <p>Kéo và thả phần tử biểu mẫu lên tài liệu của bạn, định cấu hình thuộc tính trường và tạo biểu mẫu có thể điền điện tử. Hoàn hảo để tạo ứng dụng, khảo sát và thu thập dữ liệu.</p>\n      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu để chuyển đổi thành biểu mẫu."
      },
      {
        "step": 2,
        "title": "Thêm trường biểu mẫu",
        "description": "Chọn loại trường từ thanh công cụ và nhấp để đặt chúng trên tài liệu."
      },
      {
        "step": 3,
        "title": "Định cấu hình và lưu",
        "description": "Đặt thuộc tính trường, sau đó lưu và tải xuống PDF biểu mẫu có thể điền của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Biểu mẫu ứng dụng",
        "description": "Tạo đơn xin việc có thể điền, biểu mẫu thành viên và đăng ký.",
        "icon": "user-plus"
      },
      {
        "title": "Khảo sát",
        "description": "Xây dựng khảo sát và bảng câu hỏi tương tác để thu thập dữ liệu.",
        "icon": "clipboard-list"
      },
      {
        "title": "Biểu mẫu đặt hàng",
        "description": "Tạo biểu mẫu đặt hàng sản phẩm với trường số lượng và hộp kiểm.",
        "icon": "shopping-cart"
      }
    ],
    "faq": [
      {
        "question": "Loại trường nào tôi có thể thêm?",
        "answer": "Trường văn bản, hộp kiểm, nút radio, menu thả xuống, bộ chọn ngày và trường chữ ký."
      },
      {
        "question": "Tôi có thể làm cho trường bắt buộc không?",
        "answer": "Có, bạn có thể đánh dấu trường là bắt buộc và thêm quy tắc xác thực."
      },
      {
        "question": "Tôi có thể thêm tính toán không?",
        "answer": "Tính toán cơ bản như tổng và trung bình có thể được thêm vào trường số."
      }
    ]
  },
  "remove-blank-pages": {
    "title": "Loại bỏ trang trống",
    "metaDescription": "Tự động phát hiện và loại bỏ trang trống khỏi tài liệu PDF.",
    "keywords": [
      "loại bỏ trang trống",
      "xóa trang trống",
      "dọn dẹp pdf",
      "công cụ loại bỏ trang trống pdf"
    ],
    "description": "\n      <p>Loại bỏ trang trống tự động phát hiện và loại bỏ trang trống khỏi tài liệu PDF của bạn. Điều này hữu ích để dọn dẹp tài liệu đã quét, loại bỏ trang ngăn cách hoặc loại bỏ trang trống được bao gồm một cách tình cờ.</p>\n      <p>Công cụ sử dụng phát hiện thông minh để xác định trang thực sự trống trong khi bảo toàn trang có nội dung tối thiểu. Bạn có thể điều chỉnh ngưỡng độ nhạy để kiểm soát những gì được coi là \"trống\".</p>\n      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu."
      },
      {
        "step": 2,
        "title": "Điều chỉnh ngưỡng",
        "description": "Đặt ngưỡng phát hiện trống nếu cần (mặc định hoạt động cho hầu hết tài liệu)."
      },
      {
        "step": 3,
        "title": "Loại bỏ và tải xuống",
        "description": "Nhấp Loại bỏ để xóa trang trống và tải xuống PDF đã dọn dẹp."
      }
    ],
    "useCases": [
      {
        "title": "Dọn dẹp tài liệu đã quét",
        "description": "Loại bỏ trang trống từ tài liệu quét hàng loạt.",
        "icon": "scan"
      },
      {
        "title": "Loại bỏ ngăn cách",
        "description": "Xóa trang ngăn cách trống từ tài liệu đã hợp nhất.",
        "icon": "minus"
      },
      {
        "title": "Giảm kích thước tệp",
        "description": "Loại bỏ trang trống không cần thiết để giảm kích thước tài liệu.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Phát hiện trống hoạt động như thế nào?",
        "answer": "Công cụ phân tích nội dung trang và coi trang có nội dung tối thiểu hoặc không có nội dung hiển thị là trống."
      },
      {
        "question": "Tôi có thể xem trước trang nào sẽ bị loại bỏ không?",
        "answer": "Có, trang trống được phát hiện được đánh dấu để xem xét trước khi loại bỏ."
      },
      {
        "question": "Điều gì nếu một trang chỉ có tiêu đề/chân trang?",
        "answer": "Bạn có thể điều chỉnh ngưỡng để xác định xem trang có nội dung tối thiểu có được coi là trống không."
      }
    ]
  },
  "image-to-pdf": {
    "title": "Hình ảnh sang PDF",
    "metaDescription": "Chuyển đổi bất kỳ hình ảnh nào sang PDF. Hỗ trợ định dạng JPG, PNG, WebP, BMP, TIFF, SVG và HEIC.",
    "keywords": [
      "hình ảnh sang pdf",
      "chuyển đổi hình ảnh",
      "ảnh sang pdf",
      "hình ảnh sang pdf"
    ],
    "description": "\n      <p>Hình ảnh sang PDF chuyển đổi hình ảnh của bất kỳ định dạng nào thành tài liệu PDF. Hỗ trợ định dạng JPG, PNG, WebP, BMP, TIFF, SVG và HEIC giúp công cụ này trở thành trình chuyển đổi hình ảnh phổ quát.</p>\n      <p>Kết hợp nhiều tệp hình ảnh thành một PDF duy nhất, sắp xếp chúng theo bất kỳ thứ tự nào và tùy chỉnh kích thước trang và định hướng. Hoàn hảo để tạo album ảnh, lưu trữ tài liệu hoặc danh mục đầu tư.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo hình ảnh của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên hình ảnh",
        "description": "Kéo và thả hình ảnh của bất kỳ định dạng được hỗ trợ nào hoặc nhấp để chọn tệp."
      },
      {
        "step": 2,
        "title": "Sắp xếp và định cấu hình",
        "description": "Sắp xếp lại hình ảnh bằng cách kéo, và chọn tùy chọn kích thước trang và định hướng."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để tạo PDF của bạn và tải xuống kết quả."
      }
    ],
    "useCases": [
      {
        "title": "Bộ sưu tập ảnh",
        "description": "Kết hợp ảnh từ nhiều nguồn khác nhau thành một album PDF duy nhất.",
        "icon": "images"
      },
      {
        "title": "Tài liệu định dạng hỗn hợp",
        "description": "Chuyển đổi hình ảnh từ định dạng khác nhau thành PDF thống nhất.",
        "icon": "file-stack"
      },
      {
        "title": "Tạo lưu trữ",
        "description": "Tạo lưu trữ PDF từ bộ sưu tập hình ảnh để lưu trữ lâu dài.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Định dạng hình ảnh nào được hỗ trợ?",
        "answer": "Định dạng JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC và HEIF đều được hỗ trợ."
      },
      {
        "question": "Tôi có thể trộn các định dạng hình ảnh khác nhau không?",
        "answer": "Có, bạn có thể kết hợp hình ảnh của các định dạng khác nhau thành một PDF duy nhất."
      },
      {
        "question": "Chất lượng hình ảnh có được bảo toàn không?",
        "answer": "Có, hình ảnh được nhúng ở chất lượng gốc của chúng trừ khi bạn chọn nén chúng để giảm kích thước tệp."
      }
    ]
  },
  "png-to-pdf": {
    "title": "PNG sang PDF",
    "metaDescription": "Chuyển đổi hình ảnh PNG sang PDF. Bảo toàn độ trong suốt và kết hợp nhiều tệp PNG.",
    "keywords": [
      "png sang pdf",
      "chuyển đổi png",
      "trình chuyển đổi png",
      "hình ảnh trong suốt sang pdf"
    ],
    "description": "\n      <p>PNG sang PDF chuyển đổi hình ảnh PNG của bạn thành tài liệu PDF trong khi bảo toàn độ trong suốt. Hoàn hảo cho đồ họa, logo, ảnh chụp màn hình, và hình ảnh với nền trong suốt.</p>\n      <p>Kết hợp nhiều tệp PNG thành một PDF duy nhất với cài đặt trang có thể tùy chỉnh. Việc chuyển đổi bảo toàn chất lượng cao của hình ảnh gốc của bạn.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo hình ảnh của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp PNG",
        "description": "Kéo và thả hình ảnh PNG của bạn hoặc nhấp để chọn tệp."
      },
      {
        "step": 2,
        "title": "Sắp xếp và định cấu hình",
        "description": "Sắp xếp lại hình ảnh và chọn tùy chọn kích thước trang."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để tạo PDF của bạn và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Danh mục đồ họa",
        "description": "Sắp xếp đồ họa PNG và thiết kế thành danh mục chuyên nghiệp.",
        "icon": "palette"
      },
      {
        "title": "Tài liệu ảnh chụp màn hình",
        "description": "Chuyển đổi ảnh chụp màn hình thành định dạng PDF.",
        "icon": "monitor"
      },
      {
        "title": "Bộ sưu tập logo",
        "description": "Tạo danh mục PDF của bộ logo và tài sản thương hiệu.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "Độ trong suốt có được bảo toàn không?",
        "answer": "Độ trong suốt PNG được bảo toàn trong đầu ra PDF."
      },
      {
        "question": "Điều gì về PNG động?",
        "answer": "PNG động được chuyển đổi dưới dạng hình ảnh tĩnh bằng khung đầu tiên."
      },
      {
        "question": "Tôi có thể đặt màu nền không?",
        "answer": "Có, bạn có thể chọn màu nền cho khu vực trong suốt."
      }
    ]
  },
  "webp-to-pdf": {
    "title": "WebP sang PDF",
    "metaDescription": "Chuyển đổi hình ảnh WebP sang PDF. Chuyển đổi định dạng hình ảnh hiện đại với bảo toàn chất lượng.",
    "keywords": [
      "webp sang pdf",
      "chuyển đổi webp",
      "trình chuyển đổi webp",
      "hình ảnh web sang pdf"
    ],
    "description": "\n      <p>WebP sang PDF chuyển đổi hình ảnh WebP hiện đại thành tài liệu PDF. WebP là định dạng hình ảnh web phổ biến, và công cụ này giúp chia sẻ những hình ảnh này dễ dàng.</p>\n      <p>Kết hợp nhiều tệp WebP thành một PDF duy nhất với cài đặt trang có thể tùy chỉnh. Việc chuyển đổi bảo toàn chất lượng hình ảnh trong khi tạo tệp PDF nhỏ gọn.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo hình ảnh của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp WebP",
        "description": "Kéo và thả hình ảnh WebP của bạn hoặc nhấp để chọn tệp."
      },
      {
        "step": 2,
        "title": "Định cấu hình tùy chọn",
        "description": "Sắp xếp hình ảnh và chọn kích thước trang và định hướng."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để tạo PDF của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Lưu trữ nội dung web",
        "description": "Chuyển đổi hình ảnh web sang PDF để lưu trữ ngoại tuyến.",
        "icon": "globe"
      },
      {
        "title": "Chuẩn bị in ấn",
        "description": "Chuyển đổi hình ảnh WebP sang PDF cho mục đích in ấn.",
        "icon": "printer"
      },
      {
        "title": "Chuẩn hóa định dạng",
        "description": "Chuyển đổi WebP hiện đại sang PDF tương thích phổ quát.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Định dạng WebP là gì?",
        "answer": "WebP là định dạng hình ảnh được phát triển bởi Google cung cấp nén tốt hơn JPEG."
      },
      {
        "question": "Chất lượng có được bảo toàn không?",
        "answer": "Có, việc chuyển đổi bảo toàn chất lượng hình ảnh gốc."
      },
      {
        "question": "Tôi có thể chuyển đổi WebP động không?",
        "answer": "WebP động được chuyển đổi dưới dạng hình ảnh tĩnh."
      }
    ]
  },
  "svg-to-pdf": {
    "title": "SVG sang PDF",
    "metaDescription": "Chuyển đổi đồ họa vector SVG sang PDF. Bảo toàn khả năng mở rộng và chất lượng.",
    "keywords": [
      "svg sang pdf",
      "chuyển đổi svg",
      "vector sang pdf",
      "đồ họa có thể mở rộng sang pdf"
    ],
    "description": "\n      <p>SVG sang PDF chuyển đổi đồ họa vector có thể mở rộng thành tài liệu PDF trong khi bảo toàn chất lượng vector. Tệp SVG vẫn sắc nét ở bất kỳ kích thước nào, và chất lượng này được duy trì trong đầu ra PDF.</p>\n      <p>Hoàn hảo để chuyển đổi logo, biểu tượng, minh họa và bản vẽ kỹ thuật. PDF kết quả duy trì khả năng mở rộng của đồ họa vector gốc.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tệp của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp SVG",
        "description": "Kéo và thả tệp SVG của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Định cấu hình cài đặt",
        "description": "Chọn kích thước trang và tùy chọn sắp xếp."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để tạo PDF vector của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Chuyển đổi logo",
        "description": "Chuyển đổi logo SVG sang PDF cho tài liệu in ấn.",
        "icon": "award"
      },
      {
        "title": "Bản vẽ kỹ thuật",
        "description": "Chuyển đổi bản vẽ kỹ thuật và minh họa xuất CAD sang PDF.",
        "icon": "ruler"
      },
      {
        "title": "Bộ sưu tập biểu tượng",
        "description": "Tạo danh mục PDF của bộ biểu tượng và đồ họa.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Chất lượng vector có được bảo toàn không?",
        "answer": "Có, chất lượng vector SVG được bảo toàn hoàn toàn trong đầu ra PDF."
      },
      {
        "question": "Tôi có thể chuyển đổi SVG phức tạp không?",
        "answer": "Có, SVG phức tạp với gradient, bộ lọc và hiệu ứng được hỗ trợ."
      },
      {
        "question": "Điều gì về phông chữ nhúng?",
        "answer": "Phông chữ nhúng trong tệp SVG được bảo toàn trong PDF."
      }
    ]
  },
  "bmp-to-pdf": {
    "title": "BMP sang PDF",
    "metaDescription": "Chuyển đổi hình ảnh bitmap BMP sang PDF. Hỗ trợ định dạng kế thừa với bảo toàn chất lượng.",
    "keywords": [
      "bmp sang pdf",
      "chuyển đổi bmp",
      "bitmap sang pdf",
      "trình chuyển đổi bmp"
    ],
    "description": "\n      <p>BMP sang PDF chuyển đổi hình ảnh bitmap thành tài liệu PDF. BMP là định dạng hình ảnh kế thừa thường được sử dụng trong môi trường Windows, và công cụ này giúp chuyển đổi những tệp này sang định dạng PDF hiện đại.</p>\n      <p>Kết hợp nhiều tệp BMP thành một PDF duy nhất với cài đặt có thể tùy chỉnh. Việc chuyển đổi nén các tệp BMP thường lớn trong khi duy trì chất lượng hình ảnh.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo hình ảnh của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp BMP",
        "description": "Kéo và thả hình ảnh BMP của bạn hoặc nhấp để chọn tệp."
      },
      {
        "step": 2,
        "title": "Định cấu hình tùy chọn",
        "description": "Sắp xếp hình ảnh và chọn cài đặt trang."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để tạo PDF của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Chuyển đổi định dạng kế thừa",
        "description": "Chuyển đổi tệp BMP cũ sang định dạng PDF hiện đại.",
        "icon": "history"
      },
      {
        "title": "Ảnh chụp màn hình Windows",
        "description": "Chuyển đổi ảnh chụp màn hình bitmap Windows sang PDF.",
        "icon": "monitor"
      },
      {
        "title": "Hiện đại hóa lưu trữ",
        "description": "Cập nhật lưu trữ kế thừa sang định dạng PDF để tương thích tốt hơn.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Kích thước tệp có được giảm không?",
        "answer": "Có, tệp BMP thường được nén đáng kể khi chuyển đổi sang PDF."
      },
      {
        "question": "Chất lượng có được bảo toàn không?",
        "answer": "Có, chất lượng hình ảnh được duy trì trong quá trình chuyển đổi."
      },
      {
        "question": "Độ sâu màu BMP nào được hỗ trợ?",
        "answer": "Độ sâu màu tiêu chuẩn BMP, bao gồm 24-bit và 32-bit, được hỗ trợ."
      }
    ]
  },
  "psd-to-pdf": {
    "title": "PSD sang PDF",
    "metaDescription": "Chuyển đổi tệp Adobe Photoshop (PSD) sang định dạng PDF. Hỗ trợ nhiều tệp và bảo toàn chất lượng hình ảnh.",
    "keywords": [
      "psd sang pdf",
      "chuyển đổi psd",
      "photoshop sang pdf",
      "trình chuyển đổi psd",
      "adobe psd sang pdf"
    ],
    "description": "\n      <p>PSD sang PDF chuyển đổi tệp Adobe Photoshop (PSD) thành tài liệu PDF chất lượng cao. Công cụ này cho phép bạn xem và chia sẻ thiết kế PSD mà không cần cài đặt Photoshop.</p>\n      <p>Bạn có thể chuyển đổi nhiều tệp PSD cùng lúc và kết hợp chúng thành một tài liệu PDF duy nhất. Công cụ xử lý từng tệp PSD, kết xuất các lớp hiển thị thành trang PDF chất lượng cao.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo thiết kế của bạn vẫn riêng tư và an toàn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp PSD",
        "description": "Kéo và thả tệp PSD hoặc PSB của bạn, hoặc nhấp để chọn từ thiết bị của bạn."
      },
      {
        "step": 2,
        "title": "Sắp xếp thứ tự",
        "description": "Kéo và thả hình thu nhỏ tệp để sắp xếp chúng theo thứ tự mong muốn."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để kết xuất PSD và tải xuống tài liệu PDF của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Chia sẻ thiết kế",
        "description": "Chia sẻ thiết kế Photoshop với khách hàng hoặc đồng nghiệp không có Photoshop.",
        "icon": "share-2"
      },
      {
        "title": "Tạo danh mục đầu tư",
        "description": "Sắp xếp công việc thiết kế của bạn thành danh mục PDF chuyên nghiệp.",
        "icon": "layout"
      },
      {
        "title": "Chuẩn bị in ấn",
        "description": "Chuyển đổi thiết kế sang PDF cho mục đích in ấn.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Tôi có cần cài đặt Photoshop không?",
        "answer": "Không, công cụ này hoạt động hoàn toàn trong trình duyệt của bạn mà không yêu cầu Adobe Photoshop."
      },
      {
        "question": "Lớp có được bảo toàn không?",
        "answer": "Công cụ kết xuất trạng thái hiển thị của PSD (hình ảnh tổng hợp). Các lớp riêng lẻ được làm phẳng trong PDF."
      },
      {
        "question": "Kích thước tệp tối đa là bao nhiêu?",
        "answer": "Bạn có thể tải lên tệp lên đến 100MB mỗi tệp. Tệp PSD lớn có thể mất một chút thời gian để xử lý."
      }
    ]
  },
  "heic-to-pdf": {
    "title": "HEIC sang PDF",
    "metaDescription": "Chuyển đổi ảnh iPhone HEIC sang PDF. Chuyển đổi định dạng hình ảnh Apple dễ dàng.",
    "keywords": [
      "heic sang pdf",
      "chuyển đổi heic",
      "ảnh iPhone sang pdf",
      "hình ảnh apple sang pdf"
    ],
    "description": "\n      <p>HEIC sang PDF chuyển đổi ảnh High Efficiency Image Format của Apple thành tài liệu PDF. HEIC là định dạng ảnh mặc định trên iPhone và iPad, và công cụ này giúp chia sẻ những ảnh này dễ dàng.</p>\n      <p>Kết hợp nhiều ảnh HEIC thành một PDF duy nhất, hoàn hảo để tạo album ảnh hoặc lưu trữ tài liệu từ ảnh iPhone của bạn.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo ảnh của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp HEIC",
        "description": "Kéo và thả ảnh HEIC của bạn hoặc nhấp để chọn tệp."
      },
      {
        "step": 2,
        "title": "Sắp xếp ảnh",
        "description": "Sắp xếp lại ảnh và chọn cài đặt trang."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để tạo PDF của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Album ảnh iPhone",
        "description": "Tạo album PDF từ ảnh iPhone để chia sẻ.",
        "icon": "smartphone"
      },
      {
        "title": "Quét tài liệu",
        "description": "Chuyển đổi ảnh quét tài liệu iPhone sang định dạng PDF.",
        "icon": "scan"
      },
      {
        "title": "Chia sẻ đa nền tảng",
        "description": "Chuyển đổi HEIC sang PDF để tương thích phổ quát.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Định dạng HEIC là gì?",
        "answer": "HEIC (High Efficiency Image Container) là định dạng hình ảnh của Apple cung cấp nén tốt hơn JPEG."
      },
      {
        "question": "Ảnh động có được hỗ trợ không?",
        "answer": "Ảnh động được chuyển đổi dưới dạng hình ảnh tĩnh bằng khung chính."
      },
      {
        "question": "Dữ liệu EXIF có được bảo toàn không?",
        "answer": "Siêu dữ liệu ảnh có thể được bảo toàn hoặc loại bỏ trong quá trình chuyển đổi."
      }
    ]
  },
  "tiff-to-pdf": {
    "title": "TIFF sang PDF",
    "metaDescription": "Chuyển đổi hình ảnh TIFF sang PDF. Chất lượng chuyên nghiệp với hỗ trợ đa trang.",
    "keywords": [
      "tiff sang pdf",
      "chuyển đổi tiff",
      "tif sang pdf",
      "tiff đa trang"
    ],
    "description": "\n      <p>TIFF sang PDF chuyển đổi hình ảnh TIFF, bao gồm tệp TIFF đa trang, thành tài liệu PDF. TIFF thường được sử dụng cho quét chất lượng cao và đồ họa chuyên nghiệp.</p>\n      <p>Tệp TIFF đa trang được chuyển đổi tự động thành PDF đa trang. Việc chuyển đổi bảo toàn chất lượng cao của hình ảnh gốc của bạn.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tệp của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp TIFF",
        "description": "Kéo và thả tệp TIFF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Định cấu hình tùy chọn",
        "description": "Chọn cài đặt trang và tùy chọn nén."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để tạo PDF của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Tài liệu đã quét",
        "description": "Chuyển đổi quét chất lượng cao từ TIFF sang PDF.",
        "icon": "scan"
      },
      {
        "title": "Đồ họa chuyên nghiệp",
        "description": "Chuyển đổi đồ họa TIFF chuyên nghiệp để phân phối.",
        "icon": "image"
      },
      {
        "title": "Chuyển đổi lưu trữ",
        "description": "Chuyển đổi lưu trữ TIFF sang định dạng PDF dễ truy cập hơn.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Tệp TIFF đa trang có được hỗ trợ không?",
        "answer": "Có, tệp TIFF đa trang được chuyển đổi thành PDF đa trang tự động."
      },
      {
        "question": "Chất lượng có được bảo toàn không?",
        "answer": "Có, chất lượng TIFF được bảo toàn hoàn toàn trong đầu ra PDF."
      },
      {
        "question": "Tùy chọn nén nào có sẵn?",
        "answer": "Tùy chọn LZW, ZIP và không nén có sẵn."
      }
    ]
  },
  "txt-to-pdf": {
    "title": "Văn bản sang PDF",
    "metaDescription": "Chuyển đổi tệp văn bản thuần túy sang PDF. Tùy chỉnh phông chữ, lề và bố cục trang.",
    "keywords": [
      "txt sang pdf",
      "văn bản sang pdf",
      "chuyển đổi tệp văn bản",
      "văn bản thuần túy sang pdf"
    ],
    "description": "\n      <p>Văn bản sang PDF chuyển đổi tệp văn bản thuần túy thành tài liệu PDF được định dạng. Tùy chỉnh phông chữ, kích thước, lề và bố cục trang để tạo tài liệu có vẻ ngoài chuyên nghiệp từ văn bản đơn giản.</p>\n      <p>Hoàn hảo để chuyển đổi tệp mã, nhật ký, ghi chú hoặc bất kỳ nội dung văn bản thuần túy nào thành định dạng PDF có thể chia sẻ.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tệp của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp văn bản",
        "description": "Kéo và thả tệp .txt của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Tùy chỉnh định dạng",
        "description": "Chọn phông chữ, kích thước, lề và cài đặt trang."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để tạo PDF được định dạng của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Tài liệu mã",
        "description": "Chuyển đổi tệp mã nguồn sang PDF để tài liệu.",
        "icon": "code"
      },
      {
        "title": "Lưu trữ nhật ký",
        "description": "Chuyển đổi tệp nhật ký sang PDF để lưu trữ.",
        "icon": "file-text"
      },
      {
        "title": "Chuyển đổi ghi chú",
        "description": "Chuyển đổi ghi chú văn bản thuần túy sang tài liệu PDF được định dạng.",
        "icon": "sticky-note"
      }
    ],
    "faq": [
      {
        "question": "Phông chữ nào có sẵn?",
        "answer": "Nhiều phông chữ có sẵn bao gồm phông chữ monospace cho mã."
      },
      {
        "question": "Ngắt dòng có tự động không?",
        "answer": "Có, dòng dài được tự động ngắt để vừa với trang."
      },
      {
        "question": "Tôi có thể bảo toàn định dạng không?",
        "answer": "Khoảng trắng và thụt lề từ văn bản gốc được bảo toàn."
      }
    ]
  },
  "json-to-pdf": {
    "title": "JSON sang PDF",
    "metaDescription": "Chuyển đổi tệp JSON sang định dạng PDF. Làm nổi bật cú pháp và đầu ra có cấu trúc.",
    "keywords": [
      "json sang pdf",
      "chuyển đổi json",
      "trình xem json",
      "định dạng json"
    ],
    "description": "\n      <p>JSON sang PDF chuyển đổi dữ liệu tệp JSON thành tài liệu PDF có thể đọc được. Đầu ra bao gồm làm nổi bật cú pháp và thụt lề thích hợp để dễ đọc.</p>\n      <p>Hoàn hảo để ghi lại phản hồi API, tệp cấu hình hoặc bất kỳ dữ liệu JSON nào cần được chia sẻ hoặc lưu trữ ở định dạng có thể đọc được.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo dữ liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp JSON",
        "description": "Kéo và thả tệp .json của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Hiển thị cấu hình",
        "description": "Chọn tùy chọn định dạng và làm nổi bật cú pháp."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để tạo PDF được định dạng của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Tài liệu API",
        "description": "Chuyển đổi phản hồi API sang PDF để tài liệu.",
        "icon": "code"
      },
      {
        "title": "Lưu trữ cấu hình",
        "description": "Lưu trữ tệp cấu hình ở định dạng PDF có thể đọc được.",
        "icon": "settings"
      },
      {
        "title": "Báo cáo dữ liệu",
        "description": "Tạo báo cáo PDF từ dữ liệu xuất JSON.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "Làm nổi bật cú pháp có được bao gồm không?",
        "answer": "Có, cú pháp JSON được làm nổi bật với màu sắc cho khóa, giá trị và kiểu."
      },
      {
        "question": "Dữ liệu lồng nhau được xử lý như thế nào?",
        "answer": "Đối tượng và mảng lồng nhau được thụt lề thích hợp để dễ đọc."
      },
      {
        "question": "Điều gì về tệp JSON lớn?",
        "answer": "Tệp lớn được phân trang tự động trên nhiều trang."
      }
    ]
  },
  "word-to-pdf": {
    "title": "Word sang PDF",
    "metaDescription": "Chuyển đổi tài liệu Word (DOCX) sang PDF. Bảo toàn định dạng và bố cục trong tài liệu đã chuyển đổi của bạn.",
    "keywords": [
      "word sang pdf",
      "docx sang pdf",
      "chuyển đổi word",
      "trình chuyển đổi word",
      "microsoft word sang pdf"
    ],
    "description": "\n      <p>Word sang PDF chuyển đổi tài liệu Microsoft Word thành định dạng PDF trong khi bảo toàn định dạng, bố cục và cấu trúc nội dung gốc.</p>\n      <p>Tải lên tệp DOCX của bạn và nhận đầu ra PDF chất lượng cao phù hợp để chia sẻ, in ấn hoặc lưu trữ. Việc chuyển đổi duy trì định dạng văn bản, kiểu đoạn văn và cấu trúc tài liệu cơ bản.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn không bao giờ rời khỏi thiết bị của bạn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tài liệu Word",
        "description": "Kéo và thả tệp .docx của bạn hoặc nhấp để chọn từ thiết bị của bạn."
      },
      {
        "step": 2,
        "title": "Chờ xử lý",
        "description": "Công cụ sẽ tải tài liệu và chuẩn bị chuyển đổi."
      },
      {
        "step": 3,
        "title": "Tải xuống PDF",
        "description": "Nhấp Tải xuống để lưu tài liệu PDF đã chuyển đổi của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Chia sẻ tài liệu",
        "description": "Chuyển đổi tài liệu Word sang PDF để chia sẻ và xem phổ quát.",
        "icon": "share-2"
      },
      {
        "title": "Chuẩn bị in ấn",
        "description": "Tạo PDF sẵn sàng in từ tài liệu Word.",
        "icon": "printer"
      },
      {
        "title": "Lưu trữ tài liệu",
        "description": "Lưu trữ tài liệu Word ở định dạng PDF ổn định để lưu trữ lâu dài.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Định dạng .doc có được hỗ trợ không?",
        "answer": "Hiện tại chỉ định dạng .docx được hỗ trợ. Vui lòng chuyển đổi tệp .doc sang .docx trước bằng Microsoft Word hoặc LibreOffice."
      },
      {
        "question": "Hình ảnh có được bảo toàn không?",
        "answer": "Nội dung văn bản và định dạng cơ bản được bảo toàn. Bố cục phức tạp với nhiều hình ảnh có thể có kết xuất đơn giản hóa."
      },
      {
        "question": "Việc chuyển đổi có an toàn không?",
        "answer": "Có, tất cả xử lý diễn ra trong trình duyệt của bạn. Tài liệu của bạn không bao giờ được tải lên máy chủ nào."
      }
    ]
  },
  "excel-to-pdf": {
    "title": "Excel sang PDF",
    "metaDescription": "Chuyển đổi bảng tính Excel (XLSX) sang PDF. Bảo toàn bảng và dữ liệu trong tài liệu đã chuyển đổi của bạn.",
    "keywords": [
      "excel sang pdf",
      "xlsx sang pdf",
      "chuyển đổi excel",
      "bảng tính sang pdf",
      "microsoft excel sang pdf"
    ],
    "description": "\n      <p>Excel sang PDF chuyển đổi bảng tính Microsoft Excel thành định dạng PDF trong khi bảo toàn cấu trúc bảng và tổ chức dữ liệu.</p>\n      <p>Tải lên tệp XLSX của bạn và nhận đầu ra PDF sạch với bảng được định dạng đúng. Mỗi trang tính trong sổ làm việc của bạn trở thành một phần riêng biệt trong PDF.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo dữ liệu của bạn vẫn riêng tư và an toàn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp Excel",
        "description": "Kéo và thả tệp .xlsx của bạn hoặc nhấp để chọn từ thiết bị của bạn."
      },
      {
        "step": 2,
        "title": "Chờ xử lý",
        "description": "Công cụ sẽ tải bảng tính và chuyển đổi tất cả trang tính."
      },
      {
        "step": 3,
        "title": "Tải xuống PDF",
        "description": "Nhấp Tải xuống để lưu tài liệu PDF đã chuyển đổi của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Chia sẻ báo cáo",
        "description": "Chuyển đổi báo cáo Excel sang PDF để phân phối cho các bên liên quan.",
        "icon": "file-text"
      },
      {
        "title": "Lưu trữ dữ liệu",
        "description": "Lưu trữ dữ liệu bảng tính ở định dạng PDF ổn định.",
        "icon": "archive"
      },
      {
        "title": "Chuẩn bị in ấn",
        "description": "Tạo PDF sẵn sàng in từ trang tính Excel.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Nhiều trang tính có được hỗ trợ không?",
        "answer": "Có, tất cả trang tính trong sổ làm việc được chuyển đổi và bao gồm trong PDF."
      },
      {
        "question": "Định dạng .xls có được hỗ trợ không?",
        "answer": "Hiện tại chỉ định dạng .xlsx được hỗ trợ. Vui lòng lưu tệp .xls dưới dạng .xlsx trước."
      },
      {
        "question": "Công thức có được bảo toàn không?",
        "answer": "PDF hiển thị giá trị được tính toán. Công thức không thể thực thi được trong định dạng PDF."
      }
    ]
  },
  "pptx-to-pdf": {
    "title": "PowerPoint sang PDF",
    "metaDescription": "Chuyển đổi bản trình bày PowerPoint (PPTX) sang PDF. Bảo toàn trang trình bày và nội dung để chia sẻ dễ dàng.",
    "keywords": [
      "powerpoint sang pdf",
      "pptx sang pdf",
      "chuyển đổi pptx",
      "bản trình bày sang pdf",
      "trang trình bày sang pdf"
    ],
    "description": "\n      <p>PowerPoint sang PDF chuyển đổi bản trình bày Microsoft PowerPoint thành định dạng PDF, bảo toàn nội dung trang trình bày để chia sẻ và xem dễ dàng.</p>\n      <p>Mỗi trang trình bày trở thành một trang trong PDF, duy trì luồng bản trình bày. Hoàn hảo để chia sẻ bản trình bày với những người không có PowerPoint.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo bản trình bày của bạn vẫn riêng tư và an toàn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp PowerPoint",
        "description": "Kéo và thả tệp .pptx của bạn hoặc nhấp để chọn từ thiết bị của bạn."
      },
      {
        "step": 2,
        "title": "Chờ xử lý",
        "description": "Công cụ sẽ trích xuất nội dung trang trình bày và tạo PDF."
      },
      {
        "step": 3,
        "title": "Tải xuống PDF",
        "description": "Nhấp Tải xuống để lưu tài liệu PDF đã chuyển đổi của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Chia sẻ bản trình bày",
        "description": "Chia sẻ bản trình bày với bất kỳ ai mà không yêu cầu PowerPoint.",
        "icon": "share-2"
      },
      {
        "title": "Tạo tài liệu phân phát",
        "description": "Tạo tài liệu phân phát PDF từ trang trình bày của bạn.",
        "icon": "file-text"
      },
      {
        "title": "Lưu trữ bản trình bày",
        "description": "Lưu trữ bản trình bày ở định dạng PDF ổn định.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Hoạt hình có được bảo toàn không?",
        "answer": "PDF là định dạng tĩnh, vì vậy hoạt hình và chuyển tiếp không được bảo toàn. Mỗi trang trình bày trở thành một trang tĩnh."
      },
      {
        "question": "Định dạng .ppt có được hỗ trợ không?",
        "answer": "Hiện tại chỉ định dạng .pptx được hỗ trợ. Vui lòng chuyển đổi tệp .ppt sang .pptx trước."
      },
      {
        "question": "Ghi chú của người trình bày có được bao gồm không?",
        "answer": "Hiện tại, ghi chú của người trình bày không được bao gồm trong đầu ra PDF."
      }
    ]
  },
  "xps-to-pdf": {
    "title": "XPS sang PDF",
    "metaDescription": "Chuyển đổi tài liệu XPS sang định dạng PDF. Chuyển đổi độ trung thực cao bảo toàn bố cục và đồ họa.",
    "keywords": [
      "xps sang pdf",
      "chuyển đổi xps",
      "trình chuyển đổi xps",
      "microsoft xps sang pdf",
      "oxps sang pdf"
    ],
    "description": "\n      <p>XPS sang PDF chuyển đổi tài liệu Microsoft XPS (XML Paper Specification) thành định dạng PDF trong khi bảo toàn bố cục, văn bản và đồ họa vector gốc.</p>\n      <p>XPS là định dạng tài liệu cố định tương tự như PDF. Công cụ này cung cấp chuyển đổi độ trung thực cao bằng cách phân tích cú pháp XPS gốc, đảm bảo tái tạo chính xác tài liệu của bạn.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp XPS",
        "description": "Kéo và thả tệp .xps của bạn hoặc nhấp để chọn từ thiết bị của bạn."
      },
      {
        "step": 2,
        "title": "Chờ xử lý",
        "description": "Công cụ sẽ phân tích cú pháp và chuyển đổi tài liệu XPS."
      },
      {
        "step": 3,
        "title": "Tải xuống PDF",
        "description": "Nhấp Tải xuống để lưu tài liệu PDF đã chuyển đổi của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Chuyển đổi định dạng",
        "description": "Chuyển đổi tài liệu XPS sang định dạng PDF được hỗ trợ rộng hơn.",
        "icon": "file"
      },
      {
        "title": "Chia sẻ tài liệu",
        "description": "Chia sẻ tài liệu XPS với người dùng không có trình xem XPS.",
        "icon": "share-2"
      },
      {
        "title": "Di chuyển lưu trữ",
        "description": "Di chuyển lưu trữ XPS sang PDF để tương thích tốt hơn.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Định dạng XPS là gì?",
        "answer": "XPS (XML Paper Specification) là định dạng tài liệu cố định của Microsoft, thường được sử dụng cho in ấn Windows."
      },
      {
        "question": "Việc chuyển đổi có không mất mát không?",
        "answer": "Có, việc chuyển đổi bảo toàn văn bản, đồ họa và bố cục với độ trung thực cao."
      },
      {
        "question": "Tệp XPS đa trang có được hỗ trợ không?",
        "answer": "Có, tất cả trang trong tài liệu XPS được chuyển đổi sang PDF."
      }
    ]
  },
  "rtf-to-pdf": {
    "title": "RTF sang PDF",
    "metaDescription": "Chuyển đổi tệp RTF (Rich Text Format) sang PDF. Bảo toàn định dạng văn bản trong tài liệu của bạn.",
    "keywords": [
      "rtf sang pdf",
      "chuyển đổi rtf",
      "văn bản giàu sang pdf",
      "trình chuyển đổi rtf"
    ],
    "description": "\n      <p>RTF sang PDF chuyển đổi tệp Rich Text Format thành tài liệu PDF. RTF là định dạng văn bản được hỗ trợ rộng rãi bao gồm định dạng cơ bản như phông chữ, màu sắc và kiểu dáng.</p>\n      <p>Tải lên tệp RTF của bạn và nhận đầu ra PDF sạch trong khi bảo toàn nội dung văn bản và định dạng cơ bản. Hoàn hảo để chuyển đổi tài liệu kế thừa sang định dạng PDF hiện đại.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp RTF",
        "description": "Kéo và thả tệp .rtf của bạn hoặc nhấp để chọn từ thiết bị của bạn."
      },
      {
        "step": 2,
        "title": "Chờ xử lý",
        "description": "Công cụ sẽ phân tích cú pháp và chuyển đổi nội dung RTF."
      },
      {
        "step": 3,
        "title": "Tải xuống PDF",
        "description": "Nhấp Tải xuống để lưu tài liệu PDF đã chuyển đổi của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Chuyển đổi kế thừa",
        "description": "Chuyển đổi tài liệu RTF cũ sang định dạng PDF hiện đại.",
        "icon": "history"
      },
      {
        "title": "Chia sẻ tài liệu",
        "description": "Chia sẻ tài liệu RTF ở định dạng PDF có thể xem phổ quát.",
        "icon": "share-2"
      },
      {
        "title": "Lưu trữ tài liệu",
        "description": "Lưu trữ tệp RTF ở định dạng PDF ổn định để lưu trữ lâu dài.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Định dạng nào được bảo toàn?",
        "answer": "Định dạng văn bản cơ bản bao gồm phông chữ, đoạn văn và kiểu dáng được chuyển đổi. Tính năng RTF phức tạp có thể được đơn giản hóa."
      },
      {
        "question": "Tôi có thể chuyển đổi nhiều tệp RTF cùng lúc không?",
        "answer": "Hiện tại, một tệp được chuyển đổi tại một thời điểm. Sử dụng Hợp nhất PDF để kết hợp nhiều tệp đã chuyển đổi."
      },
      {
        "question": "Hình ảnh nhúng có được hỗ trợ không?",
        "answer": "Nội dung văn bản là trọng tâm chính. Đối tượng nhúng có thể không được kết xuất."
      }
    ]
  },
  "epub-to-pdf": {
    "title": "EPUB sang PDF",
    "metaDescription": "Chuyển đổi sách điện tử EPUB sang PDF. Bảo toàn định dạng, hình ảnh và cấu trúc chương.",
    "keywords": [
      "epub sang pdf",
      "chuyển đổi epub",
      "sách điện tử sang pdf",
      "trình chuyển đổi epub"
    ],
    "description": "\n      <p>EPUB sang PDF chuyển đổi tệp sách điện tử thành tài liệu PDF chất lượng cao. EPUB là định dạng sách điện tử phổ biến nhất, được sử dụng bởi hầu hết các thiết bị đọc sách điện tử và thư viện kỹ thuật số.</p>\n      <p>Công cụ này bảo toàn định dạng văn bản, hình ảnh và cấu trúc chương của sách điện tử của bạn. Hoàn hảo để in ấn, lưu trữ hoặc chia sẻ sách điện tử ở định dạng có thể xem phổ quát.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn bằng công nghệ kết xuất nâng cao, đảm bảo sách của bạn vẫn riêng tư và chuyển đổi nhanh chóng.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp EPUB",
        "description": "Kéo và thả tệp .epub của bạn hoặc nhấp để chọn từ thiết bị của bạn."
      },
      {
        "step": 2,
        "title": "Chờ chuyển đổi",
        "description": "Công cụ sẽ kết xuất và chuyển đổi tất cả trang của sách điện tử của bạn."
      },
      {
        "step": 3,
        "title": "Tải xuống PDF",
        "description": "Nhấp Tải xuống để lưu tài liệu PDF đã chuyển đổi của bạn."
      }
    ],
    "useCases": [
      {
        "title": "In sách điện tử",
        "description": "Chuyển đổi sách điện tử sang PDF để in ấn vật lý.",
        "icon": "printer"
      },
      {
        "title": "Lưu trữ sách",
        "description": "Lưu trữ sách điện tử ở định dạng PDF ổn định lâu dài.",
        "icon": "archive"
      },
      {
        "title": "Chia sẻ tài liệu",
        "description": "Chia sẻ sách điện tử với bất kỳ ai, ngay cả khi không có thiết bị đọc sách điện tử.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Định dạng có được bảo toàn không?",
        "answer": "Có! Công cụ này sử dụng kết xuất EPUB gốc, bảo toàn định dạng văn bản, hình ảnh và bố cục với độ trung thực cao."
      },
      {
        "question": "Sách điện tử được bảo vệ DRM có được hỗ trợ không?",
        "answer": "Không, sách điện tử được bảo vệ DRM không thể chuyển đổi. Chỉ tệp EPUB không DRM được hỗ trợ."
      },
      {
        "question": "Kích thước trang được xác định như thế nào?",
        "answer": "Nội dung EPUB được kết xuất thành kích thước trang A4 tiêu chuẩn để đọc tối ưu."
      }
    ]
  },
  "mobi-to-pdf": {
    "title": "MOBI sang PDF",
    "metaDescription": "Chuyển đổi sách điện tử MOBI sang PDF. Hỗ trợ định dạng Kindle với kết xuất chất lượng cao.",
    "keywords": [
      "mobi sang pdf",
      "chuyển đổi mobi",
      "kindle sang pdf",
      "azw sang pdf",
      "trình chuyển đổi mobi"
    ],
    "description": "\n      <p>MOBI sang PDF chuyển đổi tệp sách điện tử Amazon Kindle thành tài liệu PDF chất lượng cao. MOBI (bao gồm AZW và AZW3) là định dạng sách điện tử độc quyền của Amazon được sử dụng trên thiết bị Kindle.</p>\n      <p>Công cụ này bảo toàn định dạng văn bản, hình ảnh và cấu trúc của sách Kindle của bạn. Hoàn hảo để in ấn, lưu trữ hoặc đọc sách Kindle trên thiết bị không hỗ trợ MOBI.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn bằng công nghệ kết xuất nâng cao, đảm bảo sách của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp MOBI",
        "description": "Kéo và thả tệp .mobi, .azw hoặc .azw3 của bạn hoặc nhấp để chọn từ thiết bị của bạn."
      },
      {
        "step": 2,
        "title": "Chờ chuyển đổi",
        "description": "Công cụ sẽ kết xuất và chuyển đổi tất cả trang của sách điện tử của bạn."
      },
      {
        "step": 3,
        "title": "Tải xuống PDF",
        "description": "Nhấp Tải xuống để lưu tài liệu PDF đã chuyển đổi của bạn."
      }
    ],
    "useCases": [
      {
        "title": "In sách Kindle",
        "description": "Chuyển đổi sách điện tử Kindle sang PDF để in ấn vật lý.",
        "icon": "printer"
      },
      {
        "title": "Lưu trữ sách",
        "description": "Lưu trữ sách Kindle ở định dạng PDF phổ quát.",
        "icon": "archive"
      },
      {
        "title": "Đọc đa thiết bị",
        "description": "Đọc sách Kindle trên thiết bị chỉ hỗ trợ PDF.",
        "icon": "tablet-smartphone"
      }
    ],
    "faq": [
      {
        "question": "Định dạng MOBI nào được hỗ trợ?",
        "answer": "Công cụ này hỗ trợ .mobi, .azw và .azw3 (phiên bản không DRM)."
      },
      {
        "question": "Sách Kindle được bảo vệ DRM có được hỗ trợ không?",
        "answer": "Không, sách điện tử được bảo vệ DRM không thể chuyển đổi. Chỉ tệp không DRM được hỗ trợ."
      },
      {
        "question": "Định dạng của tôi có được bảo toàn không?",
        "answer": "Có! Công cụ sử dụng kết xuất MOBI gốc để bảo toàn văn bản, hình ảnh và bố cục."
      }
    ]
  },
  "djvu-to-pdf": {
    "title": "DJVU sang PDF",
    "metaDescription": "Chuyển đổi tệp tài liệu DJVU sang PDF. Kết xuất chất lượng cao cho tài liệu đã quét và sách.",
    "keywords": [
      "djvu sang pdf",
      "chuyển đổi djvu",
      "trình chuyển đổi djvu",
      "djvu pdf",
      "djv sang pdf"
    ],
    "description": "\n      <p>DJVU sang PDF chuyển đổi tệp tài liệu DjVu thành tài liệu PDF chất lượng cao. DjVu là định dạng tệp máy tính được thiết kế chủ yếu để lưu trữ tài liệu đã quét, đặc biệt là những tài liệu chứa sự kết hợp của văn bản, bản vẽ đường và ảnh chụp.</p>\n      <p>Công cụ này kết xuất từng trang của tệp DJVU của bạn ở DPI (điểm trên inch) đã chọn và kết hợp chúng thành tài liệu PDF có thể tìm kiếm. Hoàn hảo để chuyển đổi sách đã quét, hướng dẫn kỹ thuật và tài liệu lưu trữ.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp DJVU",
        "description": "Kéo và thả tệp .djvu hoặc .djv của bạn, hoặc nhấp để chọn từ thiết bị của bạn."
      },
      {
        "step": 2,
        "title": "Định cấu hình tùy chọn",
        "description": "Chọn DPI đầu ra (72, 150 hoặc 300) và chất lượng hình ảnh cho PDF."
      },
      {
        "step": 3,
        "title": "Chuyển đổi & Tải xuống",
        "description": "Nhấp Chuyển đổi sang PDF và tải xuống tài liệu đã chuyển đổi của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Lưu trữ tài liệu",
        "description": "Chuyển đổi lưu trữ DJVU sang định dạng PDF phổ quát.",
        "icon": "archive"
      },
      {
        "title": "Chia sẻ sách đã quét",
        "description": "Chia sẻ sách đã quét ở định dạng PDF để tương thích rộng hơn.",
        "icon": "share-2"
      },
      {
        "title": "In tài liệu",
        "description": "Chuyển đổi DJVU sang PDF chất lượng cao để in ấn.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Định dạng DJVU là gì?",
        "answer": "DjVu là định dạng tệp được thiết kế để lưu trữ tài liệu đã quét, đặc biệt là những tài liệu có văn bản, bản vẽ và hình ảnh. Nó cung cấp nén tốt hơn PDF cho nội dung đã quét."
      },
      {
        "question": "Tôi nên chọn DPI nào?",
        "answer": "72 DPI phù hợp cho xem web, 150 DPI cho tài liệu tiêu chuẩn, và 300 DPI cho in ấn chất lượng cao."
      },
      {
        "question": "Văn bản có thể tìm kiếm không?",
        "answer": "Văn bản được kết xuất dưới dạng hình ảnh. Nếu bạn cần văn bản có thể tìm kiếm, hãy sử dụng công cụ OCR PDF của chúng tôi sau khi chuyển đổi."
      }
    ]
  },
  "fb2-to-pdf": {
    "title": "FB2 sang PDF",
    "metaDescription": "Chuyển đổi sách điện tử FictionBook (FB2) sang PDF. Hỗ trợ nhiều tệp với kết xuất chất lượng cao.",
    "keywords": [
      "fb2 sang pdf",
      "chuyển đổi fb2",
      "fictionbook sang pdf",
      "trình chuyển đổi fb2",
      "fb2.zip sang pdf"
    ],
    "description": "\n      <p>FB2 sang PDF chuyển đổi tệp sách điện tử FictionBook (FB2) thành tài liệu PDF chất lượng cao. FB2 là định dạng sách điện tử XML phổ biến được sử dụng rộng rãi ở Nga và Đông Âu.</p>\n      <p>Công cụ này hỗ trợ cả tệp .fb2 và .fb2.zip, và có thể xử lý nhiều tệp cùng lúc. Nó bảo toàn định dạng văn bản, hình ảnh và cấu trúc chương của sách điện tử của bạn.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn bằng công nghệ kết xuất nâng cao, đảm bảo sách của bạn vẫn riêng tư và chuyển đổi nhanh chóng.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp FB2",
        "description": "Kéo và thả một hoặc nhiều tệp .fb2 hoặc .fb2.zip, hoặc nhấp để chọn từ thiết bị của bạn."
      },
      {
        "step": 2,
        "title": "Chọn chất lượng",
        "description": "Chọn chất lượng đầu ra: Thấp (72 DPI), Trung bình (150 DPI) hoặc Cao (300 DPI)."
      },
      {
        "step": 3,
        "title": "Chuyển đổi & Tải xuống",
        "description": "Nhấp Chuyển đổi sang PDF và tải xuống tài liệu đã chuyển đổi của bạn."
      }
    ],
    "useCases": [
      {
        "title": "In sách điện tử",
        "description": "Chuyển đổi sách điện tử FB2 sang PDF để in ấn vật lý.",
        "icon": "printer"
      },
      {
        "title": "Chuyển đổi hàng loạt",
        "description": "Chuyển đổi nhiều tệp FB2 sang PDF cùng lúc.",
        "icon": "layers"
      },
      {
        "title": "Định dạng phổ quát",
        "description": "Chia sẻ sách điện tử ở định dạng PDF hoạt động trên mọi thiết bị.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể chuyển đổi nhiều tệp FB2 cùng lúc không?",
        "answer": "Có! Công cụ này hỗ trợ chuyển đổi hàng loạt lên đến 20 tệp FB2 cùng lúc."
      },
      {
        "question": "Tệp .fb2.zip có được hỗ trợ không?",
        "answer": "Có, công cụ tự động trích xuất và chuyển đổi tệp FB2 từ kho lưu trữ .fb2.zip."
      },
      {
        "question": "Định dạng có được bảo toàn không?",
        "answer": "Có! Công cụ sử dụng kết xuất FB2 gốc, bảo toàn định dạng văn bản, hình ảnh và cấu trúc chương với độ trung thực cao."
      }
    ]
  },
  "pdf-to-jpg": {
    "title": "PDF sang JPG",
    "metaDescription": "Chuyển đổi trang PDF sang hình ảnh JPG. Trích xuất chất lượng cao với DPI có thể tùy chỉnh.",
    "keywords": [
      "pdf sang jpg",
      "pdf sang jpeg",
      "chuyển đổi pdf sang hình ảnh",
      "trích xuất hình ảnh pdf"
    ],
    "description": "\n      <p>PDF sang JPG chuyển đổi trang tài liệu PDF thành hình ảnh JPG chất lượng cao. Trích xuất tất cả trang hoặc chọn trang cụ thể để chuyển đổi, với cài đặt DPI và chất lượng có thể tùy chỉnh.</p>\n      <p>Hoàn hảo để trích xuất hình ảnh từ PDF, tạo hình thu nhỏ hoặc chuyển đổi tài liệu để sử dụng web.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Chọn trang và chất lượng",
        "description": "Chọn trang nào để chuyển đổi và đặt tùy chọn DPI/chất lượng."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để trích xuất hình ảnh và tải xuống dưới dạng ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Xuất bản web",
        "description": "Chuyển đổi trang PDF sang hình ảnh để sử dụng trên trang web.",
        "icon": "globe"
      },
      {
        "title": "Mạng xã hội",
        "description": "Trích xuất trang dưới dạng hình ảnh để chia sẻ trên mạng xã hội.",
        "icon": "share-2"
      },
      {
        "title": "Bản trình bày",
        "description": "Chuyển đổi trang trình bày PDF sang hình ảnh cho bản trình bày.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Cài đặt chất lượng nào có sẵn?",
        "answer": "Bạn có thể đặt DPI từ 72 đến 300 và chất lượng JPEG từ 1-100."
      },
      {
        "question": "Tôi có thể chuyển đổi chỉ trang cụ thể không?",
        "answer": "Có, bạn có thể chọn trang riêng lẻ hoặc phạm vi trang để chuyển đổi."
      },
      {
        "question": "Trang nhiều được xử lý như thế nào?",
        "answer": "Mỗi trang trở thành một tệp JPG riêng biệt, được tải xuống dưới dạng kho lưu trữ ZIP."
      }
    ]
  },
  "pdf-to-png": {
    "title": "PDF sang PNG",
    "metaDescription": "Chuyển đổi trang PDF sang hình ảnh PNG. Chất lượng không mất mát với hỗ trợ độ trong suốt.",
    "keywords": [
      "pdf sang png",
      "chuyển đổi pdf sang png",
      "trích xuất hình ảnh pdf",
      "chuyển đổi pdf không mất mát"
    ],
    "description": "\n      <p>PDF sang PNG chuyển đổi trang tài liệu PDF thành hình ảnh PNG chất lượng cao với nén không mất mát. Định dạng PNG bảo toàn chất lượng hình ảnh hoàn hảo và hỗ trợ độ trong suốt.</p>\n      <p>Lý tưởng để trích xuất đồ họa, sơ đồ hoặc bất kỳ nội dung nào mà việc bảo toàn chất lượng là quan trọng.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Định cấu hình tùy chọn",
        "description": "Chọn trang và đặt cài đặt DPI (điểm trên inch)."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để trích xuất hình ảnh PNG."
      }
    ],
    "useCases": [
      {
        "title": "Trích xuất đồ họa",
        "description": "Trích xuất sơ đồ và đồ họa với chất lượng hoàn hảo.",
        "icon": "image"
      },
      {
        "title": "Tài sản thiết kế",
        "description": "Chuyển đổi PDF thiết kế sang PNG cho phần mềm chỉnh sửa.",
        "icon": "palette"
      },
      {
        "title": "Tài liệu",
        "description": "Tạo hình ảnh chất lượng cao cho tài liệu kỹ thuật.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Tại sao chọn PNG thay vì JPG?",
        "answer": "PNG cung cấp nén không mất mát và hỗ trợ độ trong suốt, lý tưởng cho đồ họa và văn bản."
      },
      {
        "question": "Độ trong suốt nền có được hỗ trợ không?",
        "answer": "Có, trang PDF với độ trong suốt được bảo toàn trong đầu ra PNG."
      },
      {
        "question": "Tôi nên dùng DPI nào?",
        "answer": "Dùng 150 DPI cho xem màn hình, 300 DPI cho in ấn."
      }
    ]
  },
  "pdf-to-webp": {
    "title": "PDF sang WebP",
    "metaDescription": "Chuyển đổi trang PDF sang hình ảnh WebP. Định dạng hiện đại với nén tuyệt vời.",
    "keywords": [
      "pdf sang webp",
      "chuyển đổi pdf sang webp",
      "định dạng hình ảnh hiện đại",
      "hình ảnh web được tối ưu hóa"
    ],
    "description": "\n      <p>PDF sang WebP chuyển đổi trang tài liệu PDF thành hình ảnh WebP, định dạng hình ảnh hiện đại của Google cung cấp nén tuyệt vời với chất lượng cao.</p>\n      <p>Hình ảnh WebP nhỏ hơn JPG hoặc PNG trong khi duy trì chất lượng tương đương, khiến chúng lý tưởng cho sử dụng web.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Đặt tùy chọn chất lượng",
        "description": "Chọn trang và đặt cài đặt chất lượng/nén."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để tạo hình ảnh WebP."
      }
    ],
    "useCases": [
      {
        "title": "Tối ưu hóa web",
        "description": "Tạo hình ảnh web được tối ưu hóa từ nội dung PDF.",
        "icon": "globe"
      },
      {
        "title": "Tiết kiệm băng thông",
        "description": "Giảm kích thước tệp hình ảnh để tải nhanh hơn.",
        "icon": "zap"
      },
      {
        "title": "Trang web hiện đại",
        "description": "Sử dụng định dạng hình ảnh hiện đại cho dự án web đương đại.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Định dạng WebP là gì?",
        "answer": "WebP là định dạng hình ảnh của Google cung cấp nén vượt trội."
      },
      {
        "question": "WebP có được hỗ trợ rộng rãi không?",
        "answer": "Có, tất cả trình duyệt hiện đại hỗ trợ định dạng WebP."
      },
      {
        "question": "Hình ảnh WebP nhỏ hơn bao nhiêu?",
        "answer": "Hình ảnh WebP thường nhỏ hơn 25-35% so với hình ảnh JPG tương đương."
      }
    ]
  },
  "pdf-to-bmp": {
    "title": "PDF sang BMP",
    "metaDescription": "Chuyển đổi trang PDF sang hình ảnh bitmap BMP. Định dạng không nén để tương thích tối đa.",
    "keywords": [
      "pdf sang bmp",
      "chuyển đổi pdf sang bitmap",
      "hình ảnh không nén",
      "định dạng kế thừa"
    ],
    "description": "\n      <p>PDF sang BMP chuyển đổi trang tài liệu PDF thành hình ảnh bitmap BMP. BMP là định dạng không nén đảm bảo tương thích tối đa với hệ thống và ứng dụng kế thừa.</p>\n      <p>Mặc dù tệp BMP lớn hơn định dạng nén, chúng cung cấp chất lượng hoàn hảo và tương thích phổ quát.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Chọn trang",
        "description": "Chọn trang nào để chuyển đổi và đặt DPI."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để tạo hình ảnh BMP."
      }
    ],
    "useCases": [
      {
        "title": "Hệ thống kế thừa",
        "description": "Tạo hình ảnh tương thích với phần mềm cũ.",
        "icon": "history"
      },
      {
        "title": "Ứng dụng Windows",
        "description": "Tạo tệp BMP cho ứng dụng cụ thể của Windows.",
        "icon": "monitor"
      },
      {
        "title": "Lưu trữ không nén",
        "description": "Tạo lưu trữ hình ảnh không nén từ PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Tại sao dùng định dạng BMP?",
        "answer": "BMP cung cấp chất lượng không nén và tương thích tối đa với hệ thống kế thừa."
      },
      {
        "question": "Tệp BMP có lớn không?",
        "answer": "Có, tệp BMP không nén và lớn đáng kể hơn JPG hoặc PNG."
      },
      {
        "question": "Độ sâu màu nào được hỗ trợ?",
        "answer": "Độ sâu màu 24-bit và 32-bit được hỗ trợ."
      }
    ]
  },
  "pdf-to-tiff": {
    "title": "PDF sang TIFF",
    "metaDescription": "Chuyển đổi PDF sang hình ảnh TIFF. Chất lượng chuyên nghiệp với hỗ trợ đa trang.",
    "keywords": [
      "pdf sang tiff",
      "chuyển đổi pdf sang tiff",
      "hình ảnh chuyên nghiệp",
      "tiff đa trang"
    ],
    "description": "\n      <p>PDF sang TIFF chuyển đổi tài liệu PDF thành hình ảnh TIFF chất lượng cao. TIFF là định dạng ưa thích cho in ấn chuyên nghiệp và lưu trữ do nén không mất mát.</p>\n      <p>Tạo tệp TIFF trang đơn hoặc kết hợp tất cả trang thành một tệp TIFF đa trang. Hoàn hảo cho mục đích chuyên nghiệp và lưu trữ.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Định cấu hình đầu ra",
        "description": "Chọn TIFF trang đơn hoặc đa trang và đặt DPI."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để tạo hình ảnh TIFF."
      }
    ],
    "useCases": [
      {
        "title": "In ấn chuyên nghiệp",
        "description": "Tạo tệp TIFF sẵn sàng in từ tài liệu PDF.",
        "icon": "printer"
      },
      {
        "title": "Lưu trữ tài liệu",
        "description": "Lưu trữ tài liệu ở định dạng TIFF chất lượng cao.",
        "icon": "archive"
      },
      {
        "title": "Xuất bản",
        "description": "Chuyển đổi PDF sang TIFF cho quy trình xuất bản.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể tạo TIFF đa trang không?",
        "answer": "Có, bạn có thể kết hợp tất cả trang PDF thành một tệp TIFF đa trang duy nhất."
      },
      {
        "question": "Tùy chọn nén nào có sẵn?",
        "answer": "Tùy chọn LZW, ZIP và không nén có sẵn."
      },
      {
        "question": "Tôi nên dùng DPI nào cho in ấn?",
        "answer": "Dùng 300 DPI hoặc cao hơn cho in ấn chuyên nghiệp."
      }
    ]
  },
  "pdf-to-svg": {
    "title": "PDF sang SVG",
    "metaDescription": "Chuyển đổi trang PDF sang đồ họa vector SVG. Khả năng mở rộng hoàn hảo ở mọi kích thước với xuất trang riêng lẻ.",
    "keywords": [
      "pdf sang svg",
      "chuyển đổi pdf sang svg",
      "đồ họa vector",
      "pdf có thể mở rộng",
      "trình chuyển đổi svg"
    ],
    "description": "\n      <p>PDF sang SVG chuyển đổi từng trang của PDF tài liệu thành đồ họa vector có thể mở rộng (SVG). SVG là định dạng hình ảnh vector có thể mở rộng hoàn hảo ở mọi mức thu phóng hoặc kích thước in.</p>\n      <p>Không giống như định dạng raster (JPG, PNG), đồ họa SVG không bao giờ trở nên pixelated khi được mở rộng. Điều này làm cho chúng lý tưởng cho logo, sơ đồ, bản vẽ kỹ thuật và bất kỳ nội dung nào cần được hiển thị ở các kích thước khác nhau.</p>\n      <p>Xem trước từng trang đã chuyển đổi và tải xuống chúng riêng lẻ hoặc dưới dạng tệp ZIP. Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo quyền riêng tư hoàn toàn cho tài liệu của bạn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để duyệt và chọn."
      },
      {
        "step": 2,
        "title": "Định cấu hình tùy chọn",
        "description": "Đặt chất lượng DPI và tùy chọn chỉ định phạm vi trang."
      },
      {
        "step": 3,
        "title": "Xem trước và chuyển đổi",
        "description": "Nhấp Chuyển đổi để xử lý. Nhấp vào hình thu nhỏ để xem trang SVG ở kích thước đầy đủ."
      },
      {
        "step": 4,
        "title": "Tải xuống",
        "description": "Tải xuống tệp SVG riêng lẻ hoặc tất cả dưới dạng kho lưu trữ ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Logo và đồ họa",
        "description": "Trích xuất logo và đồ họa vector từ PDF để sử dụng lại trong phần mềm thiết kế.",
        "icon": "pen-tool"
      },
      {
        "title": "Sơ đồ kỹ thuật",
        "description": "Chuyển đổi bản vẽ kỹ thuật và sơ đồ sang định dạng SVG có thể mở rộng.",
        "icon": "ruler"
      },
      {
        "title": "Phát triển web",
        "description": "Tạo tệp SVG sẵn sàng web từ nội dung PDF cho trang web đáp ứng.",
        "icon": "globe"
      },
      {
        "title": "In ở mọi kích thước",
        "description": "Tạo đồ họa vector in hoàn hảo ở mọi kích thước.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Định dạng SVG là gì?",
        "answer": "SVG (Scalable Vector Graphics) là định dạng hình ảnh vector có thể mở rộng ở mọi kích thước mà không mất chất lượng. Nó được sử dụng rộng rãi cho logo, biểu tượng và đồ họa web."
      },
      {
        "question": "SVG có thực sự vector không?",
        "answer": "SVG chứa kết xuất độ phân giải cao của trang PDF. Đối với PDF có nội dung vector, bạn nhận được đầu ra sắc nét ở mọi tỷ lệ."
      },
      {
        "question": "Tôi có thể xem trước trước khi tải xuống không?",
        "answer": "Có! Nhấp vào bất kỳ hình thu nhỏ nào để xem SVG ở kích thước đầy đủ. Bạn có thể tải xuống trang riêng lẻ hoặc tất cả cùng lúc."
      },
      {
        "question": "Tôi nên chọn chất lượng DPI nào?",
        "answer": "Chất lượng DPI cao hơn (216 hoặc 288 DPI) tạo SVG lớn hơn, chi tiết hơn. Dùng cài đặt thấp hơn cho xử lý nhanh hơn và tệp nhỏ hơn."
      }
    ]
  },
  "pdf-to-greyscale": {
    "title": "PDF sang Xám",
    "metaDescription": "Chuyển đổi PDF màu sang xám. Giảm kích thước tệp và chuẩn bị cho in ấn đen trắng.",
    "keywords": [
      "pdf sang xám",
      "pdf xám",
      "đen trắng pdf",
      "loại bỏ màu sắc"
    ],
    "description": "\n      <p>PDF sang Xám chuyển đổi tài liệu PDF màu thành xám (đen trắng). Điều này giảm kích thước tệp và chuẩn bị tài liệu cho in ấn đen trắng.</p>\n      <p>Việc chuyển đổi bảo toàn độ rõ ràng của văn bản và chi tiết hình ảnh trong khi loại bỏ thông tin màu sắc. Hoàn hảo để in bản nháp hoặc tạo phiên bản thân thiện với máy in.</p>\n      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF màu của bạn",
        "description": "Kéo và thả tệp PDF màu của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Xem trước chuyển đổi",
        "description": "Xem trước phiên bản xám sẽ trông như thế nào."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để tạo PDF xám."
      }
    ],
    "useCases": [
      {
        "title": "Tiết kiệm in ấn",
        "description": "Chuyển đổi sang xám để tiết kiệm chi phí in màu.",
        "icon": "printer"
      },
      {
        "title": "Tài liệu bản nháp",
        "description": "Tạo bản nháp đen trắng để xem xét.",
        "icon": "file-text"
      },
      {
        "title": "Giảm kích thước tệp",
        "description": "Giảm kích thước PDF bằng cách loại bỏ thông tin màu sắc.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Văn bản có vẫn rõ ràng không?",
        "answer": "Có, độ rõ ràng của văn bản được bảo toàn trong chuyển đổi xám."
      },
      {
        "question": "Kích thước tệp giảm bao nhiêu?",
        "answer": "Kết quả thay đổi dựa trên nội dung PDF. PDF nặng màu có thể giảm 20-50%."
      },
      {
        "question": "Tôi có thể chuyển đổi chỉ trang cụ thể không?",
        "answer": "Có, bạn có thể chọn trang nào để chuyển đổi sang xám."
      }
    ]
  },
  "pdf-to-json": {
    "title": "PDF sang JSON",
    "metaDescription": "Trích xuất nội dung PDF sang định dạng JSON. Nhận dữ liệu có cấu trúc từ tài liệu PDF.",
    "keywords": [
      "pdf sang json",
      "trích xuất dữ liệu pdf",
      "trình phân tích cú pháp pdf",
      "dữ liệu pdf có cấu trúc"
    ],
    "description": "\n      <p>PDF sang JSON trích xuất nội dung từ tài liệu PDF thành định dạng JSON có cấu trúc. Trích xuất văn bản, siêu dữ liệu, thông tin trang và cấu trúc tài liệu để sử dụng lập trình.</p>\n      <p>Hoàn hảo để trích xuất dữ liệu, phân tích tài liệu hoặc tích hợp nội dung PDF vào ứng dụng và quy trình làm việc.</p>\n      <p>Tất cả trích xuất diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Chọn nội dung để trích xuất",
        "description": "Chọn nội dung nào để trích xuất: văn bản, siêu dữ liệu, cấu trúc."
      },
      {
        "step": 3,
        "title": "Trích xuất và tải xuống",
        "description": "Nhấp Trích xuất để tạo JSON và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Trích xuất dữ liệu",
        "description": "Trích xuất dữ liệu có cấu trúc từ tài liệu PDF.",
        "icon": "database"
      },
      {
        "title": "Phân tích tài liệu",
        "description": "Phân tích cấu trúc và nội dung PDF theo lập trình.",
        "icon": "search"
      },
      {
        "title": "Tích hợp",
        "description": "Nhập nội dung PDF vào ứng dụng qua JSON.",
        "icon": "plug"
      }
    ],
    "faq": [
      {
        "question": "Dữ liệu nào được trích xuất?",
        "answer": "Nội dung văn bản, siêu dữ liệu, kích thước trang, phông chữ và cấu trúc tài liệu."
      },
      {
        "question": "Định dạng JSON có được ghi lại không?",
        "answer": "Có, lược đồ JSON nhất quán và được ghi lại đầy đủ."
      },
      {
        "question": "Tôi có thể trích xuất từ PDF đã quét không?",
        "answer": "PDF đã quét cần OCR trước. Sử dụng công cụ OCR PDF của chúng tôi trước khi trích xuất."
      }
    ]
  },
  "pdf-to-pptx": {
    "title": "PDF sang PowerPoint",
    "metaDescription": "Chuyển đổi PDF sang bản trình bày PowerPoint. Mỗi trang trở thành trang trình bày chất lượng cao.",
    "keywords": [
      "pdf sang pptx",
      "pdf sang powerpoint",
      "chuyển đổi trang trình bày pdf",
      "pdf bản trình bày"
    ],
    "description": "\n      <p>PDF sang PowerPoint chuyển đổi tài liệu PDF của bạn thành bản trình bày PowerPoint có thể chỉnh sửa (PPTX). Mỗi trang PDF được biến đổi thành trang trình bày chất lượng cao, bảo toàn bố cục trực quan hoàn hảo.</p>\n      <p>Công cụ này lý tưởng để chuyển đổi báo cáo, tài liệu phân phát hoặc bất kỳ nội dung PDF nào thành định dạng trang trình bày. Bạn có thể chọn chất lượng hình ảnh (DPI) để cân bằng giữa kích thước tệp và độ rõ ràng trực quan.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn từ thiết bị của bạn."
      },
      {
        "step": 2,
        "title": "Chọn cài đặt chất lượng",
        "description": "Chọn chất lượng hình ảnh (DPI) cho các trang trình bày. DPI cao hơn có nghĩa là chất lượng tốt hơn nhưng kích thước tệp lớn hơn."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp Chuyển đổi để tạo bản trình bày PowerPoint của bạn và tải xuống tệp PPTX."
      }
    ],
    "useCases": [
      {
        "title": "Tạo bản trình bày",
        "description": "Chuyển đổi báo cáo PDF thành trang trình bày cho các cuộc họp.",
        "icon": "presentation"
      },
      {
        "title": "Tài liệu đào tạo",
        "description": "Biến đổi tài liệu đào tạo PDF thành bản trình bày PowerPoint tương tác.",
        "icon": "book-open"
      },
      {
        "title": "Tái sử dụng nội dung",
        "description": "Chuyển đổi nội dung PDF hiện có thành định dạng trang trình bày có thể chỉnh sửa để tùy chỉnh thêm.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Các trang trình bày có thể chỉnh sửa không?",
        "answer": "Mỗi trang trình bày chứa hình ảnh chất lượng cao của trang PDF. Bạn có thể thêm văn bản, hình dạng và chú thích lên trên trong PowerPoint."
      },
      {
        "question": "Tôi nên chọn DPI nào?",
        "answer": "Dùng 150 DPI cho bản trình bày hiển thị trên màn hình. Dùng 300 DPI cho in ấn hoặc khi bạn cần chất lượng cao nhất."
      },
      {
        "question": "Tôi có thể chuyển đổi PDF đa trang không?",
        "answer": "Có, mỗi trang của PDF trở thành một trang trình bày riêng biệt trong bản trình bày PowerPoint."
      }
    ]
  },
  "pdf-to-excel": {
    "title": "PDF sang Excel",
    "metaDescription": "Chuyển đổi PDF sang bảng tính Excel. Trích xuất bảng sang định dạng XLSX.",
    "keywords": [
      "pdf sang excel",
      "pdf sang xlsx",
      "chuyển đổi bảng pdf",
      "trích xuất bảng"
    ],
    "description": "\n      <p>PDF sang Excel chuyển đổi tài liệu PDF của bạn thành bảng tính Microsoft Excel có thể chỉnh sửa (XLSX). Công cụ tự động phát hiện bảng trong PDF và trích xuất chúng thành các trang tính riêng biệt.</p>\n      <p>Công cụ này lý tưởng để phân tích báo cáo tài chính, hóa đơn hoặc bất kỳ dữ liệu nào được trình bày ở định dạng bảng. Mỗi trang của bảng tính được tổ chức thành các trang tính để thao tác dữ liệu dễ dàng.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo dữ liệu của bạn vẫn riêng tư và an toàn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Xử lý",
        "description": "Công cụ sẽ tự động xác định và trích xuất bảng."
      },
      {
        "step": 3,
        "title": "Tải xuống Excel",
        "description": "Tải xuống tệp Excel của bạn với bảng đã trích xuất."
      }
    ],
    "useCases": [
      {
        "title": "Phân tích tài chính",
        "description": "Chuyển đổi sao kê ngân hàng hoặc hóa đơn sang Excel để phân tích.",
        "icon": "trending-up"
      },
      {
        "title": "Trích xuất dữ liệu",
        "description": "Kéo dữ liệu bảng từ báo cáo nghiên cứu hoặc tài liệu.",
        "icon": "database"
      },
      {
        "title": "Quản lý hàng tồn kho",
        "description": "Chuyển đổi danh sách hàng tồn kho từ PDF sang bảng tính.",
        "icon": "clipboard"
      }
    ],
    "faq": [
      {
        "question": "Bảng được xử lý như thế nào?",
        "answer": "Bảng được phát hiện trên mỗi trang được trích xuất thành các trang tính tương ứng trong tệp Excel."
      },
      {
        "question": "Điều gì nếu không có bảng?",
        "answer": "Một trang tính thông tin sẽ được tạo để chỉ ra không tìm thấy bảng."
      },
      {
        "question": "Định dạng có được bảo toàn không?",
        "answer": "Dữ liệu được bảo toàn, nhưng định dạng trực quan phức tạp có thể được đơn giản hóa cho bảng tính."
      }
    ]
  },
  "ocr-pdf": {
    "title": "OCR PDF",
    "metaDescription": "Làm cho PDF đã quét có thể tìm kiếm với OCR. Trích xuất văn bản từ hình ảnh và tài liệu đã quét.",
    "keywords": [
      "ocr pdf\nloại",
      "pdf có thể tìm kiếm",
      "nhận dạng văn bản",
      "quét sang văn bản"
    ],
    "description": "\n      <p>OCR PDF sử dụng Nhận dạng ký tự quang học để trích xuất văn bản từ tài liệu đã quét và hình ảnh trong PDF. Chuyển đổi PDF dựa trên hình ảnh thành tài liệu văn bản có thể chọn và tìm kiếm.</p>\n      <p>Hỗ trợ nhiều ngôn ngữ đảm bảo nhận dạng văn bản chính xác bất kể ngôn ngữ của tài liệu. Bố cục gốc được bảo toàn trong khi thêm lớp văn bản có thể tìm kiếm.</p>\n      <p>Tất cả xử lý OCR diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF đã quét",
        "description": "Kéo và thả PDF đã quét của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Chọn ngôn ngữ",
        "description": "Chọn ngôn ngữ tài liệu để nhận dạng chính xác."
      },
      {
        "step": 3,
        "title": "Xử lý và tải xuống",
        "description": "Nhấp Xử lý để chạy OCR và tải xuống PDF có thể tìm kiếm."
      }
    ],
    "useCases": [
      {
        "title": "Số hóa lưu trữ",
        "description": "Làm cho lưu trữ tài liệu đã quét có thể tìm kiếm.",
        "icon": "archive"
      },
      {
        "title": "Tìm kiếm tài liệu",
        "description": "Bật tìm kiếm văn bản trong tài liệu đã quét.",
        "icon": "search"
      },
      {
        "title": "Trích xuất văn bản",
        "description": "Trích xuất văn bản từ tài liệu đã quét để chỉnh sửa.",
        "icon": "type"
      }
    ],
    "faq": [
      {
        "question": "Ngôn ngữ nào được hỗ trợ?",
        "answer": "Hơn 100 ngôn ngữ được hỗ trợ bao gồm tiếng Anh, tiếng Trung, tiếng Nhật, tiếng Hàn và nhiều hơn nữa."
      },
      {
        "question": "Bố cục gốc có được bảo toàn không?",
        "answer": "Có, bố cục trực quan gốc được bảo toàn với lớp văn bản có thể tìm kiếm được thêm vào."
      },
      {
        "question": "OCR chính xác đến mức nào?",
        "answer": "Độ chính xác phụ thuộc vào chất lượng quét nhưng thường vượt quá 95% cho tài liệu rõ ràng."
      }
    ]
  },
  "alternate-merge": {
    "title": "Hợp nhất xen kẽ",
    "metaDescription": "Hợp nhất PDF theo trang xen kẽ. Kết hợp quét mặt trước và mặt sau thành một tài liệu.",
    "keywords": [
      "hợp nhất xen kẽ",
      "xen kẽ pdf",
      "kết hợp quét",
      "hợp nhất mặt trước mặt sau"
    ],
    "description": "\n      <p>Hợp nhất xen kẽ kết hợp hai PDF bằng cách xen kẽ các trang của chúng. Điều này hoàn hảo để kết hợp các trang mặt trước và mặt sau được quét riêng biệt thành một tài liệu duy nhất.</p>\n      <p>Tải lên hai PDF và công cụ sẽ hợp nhất chúng bằng cách lấy một trang từ mỗi trang xen kẽ. Bạn cũng có thể đảo ngược thứ tự của một tài liệu cho quét mặt sau.</p>\n      <p>Tất cả xử lý diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên hai PDF",
        "description": "Tải lên PDF trang mặt trước và trang mặt sau."
      },
      {
        "step": 2,
        "title": "Định cấu hình thứ tự",
        "description": "Chọn có đảo ngược tài liệu thứ hai cho quét mặt sau không."
      },
      {
        "step": 3,
        "title": "Hợp nhất và tải xuống",
        "description": "Nhấp Hợp nhất để xen kẽ trang và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Quét duplex",
        "description": "Kết hợp mặt trước và mặt sau được quét riêng biệt.",
        "icon": "copy"
      },
      {
        "title": "Lắp ráp tài liệu",
        "description": "Xen kẽ trang từ hai tài liệu liên quan.",
        "icon": "layers"
      },
      {
        "title": "Quét sách",
        "description": "Kết hợp trang lẻ và chẵn đã quét thành sách hoàn chỉnh.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Điều gì nếu tài liệu có số trang khác nhau?",
        "answer": "Trang dư từ tài liệu dài hơn được thêm vào cuối."
      },
      {
        "question": "Tôi có thể đảo ngược thứ tự trang không?",
        "answer": "Có, bạn có thể đảo ngược tài liệu nào để hợp nhất."
      },
      {
        "question": "Điều này khác với hợp nhất thông thường như thế nào?",
        "answer": "Hợp nhất thông thường nối tài liệu; hợp nhất xen kẽ xen kẽ trang."
      }
    ]
  },
  "add-attachments": {
    "title": "Thêm tệp đính kèm",
    "metaDescription": "Nhúng tệp vào tài liệu PDF. Đính kèm bất kỳ loại tệp nào vào PDF của bạn.",
    "keywords": [
      "tệp đính kèm pdf",
      "nhúng tệp",
      "đính kèm vào pdf",
      "công cụ pdf"
    ],
    "description": "\n      <p>Thêm tệp đính kèm nhúng tệp của bất kỳ loại nào vào tài liệu PDF của bạn. Đính kèm bảng tính, hình ảnh, tệp nguồn hoặc bất kỳ tài liệu nào khác để tạo gói PDF toàn diện.</p>\n      <p>Tệp đính kèm được nhúng trong PDF và có thể được trích xuất bởi người nhận bằng bất kỳ trình đọc PDF nào. Hoàn hảo để phân phối tệp liên quan cùng nhau.</p>\n      <p>Tất cả xử lý diễn ra trong trình duyệt của bạn, đảm bảo tệp của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Thêm tệp đính kèm",
        "description": "Chọn tệp để đính kèm vào PDF."
      },
      {
        "step": 3,
        "title": "Lưu và tải xuống",
        "description": "Nhấp Lưu để nhúng tệp đính kèm và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Gói dự án",
        "description": "Gói tệp dự án với tài liệu PDF.",
        "icon": "package"
      },
      {
        "title": "Phân phối báo cáo",
        "description": "Đính kèm tệp dữ liệu nguồn với báo cáo PDF.",
        "icon": "paperclip"
      },
      {
        "title": "Gói hợp đồng",
        "description": "Bao gồm tài liệu hỗ trợ với hợp đồng.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Loại tệp nào có thể đính kèm?",
        "answer": "Bất kỳ loại tệp nào có thể được đính kèm vào PDF."
      },
      {
        "question": "Có giới hạn kích thước không?",
        "answer": "Tổng kích thước PDF bao gồm tệp đính kèm không được vượt quá 500MB."
      },
      {
        "question": "Người nhận có thể trích xuất tệp đính kèm không?",
        "answer": "Có, bất kỳ trình đọc PDF nào cũng có thể trích xuất tệp đính kèm nhúng."
      }
    ]
  },
  "extract-attachments": {
    "title": "Trích xuất tệp đính kèm",
    "metaDescription": "Trích xuất tệp nhúng từ PDF. Tải xuống tất cả tệp đính kèm từ tài liệu PDF.",
    "keywords": [
      "trích xuất tệp đính kèm",
      "tệp đính kèm pdf",
      "tải xuống tệp nhúng",
      "trích xuất pdf"
    ],
    "description": "\n      <p>Trích xuất tệp đính kèm lấy tất cả tệp nhúng từ tài liệu PDF. Tải xuống tệp đính kèm riêng lẻ hoặc dưới dạng kho lưu trữ ZIP chứa tất cả tệp.</p>\n      <p>Hoàn hảo để truy cập tệp nguồn, dữ liệu hoặc tài liệu bổ sung được nhúng trong gói PDF.</p>\n      <p>Tất cả trích xuất diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Xem tệp đính kèm",
        "description": "Xem danh sách tất cả tệp nhúng trong PDF."
      },
      {
        "step": 3,
        "title": "Trích xuất và tải xuống",
        "description": "Tải xuống tệp riêng lẻ hoặc tất cả dưới dạng ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Truy cập tệp nguồn",
        "description": "Trích xuất tệp dữ liệu gốc từ báo cáo PDF.",
        "icon": "download"
      },
      {
        "title": "Khôi phục tệp đính kèm",
        "description": "Trích xuất tệp nhúng từ gói PDF.",
        "icon": "folder-open"
      },
      {
        "title": "Trích xuất hàng loạt",
        "description": "Trích xuất tệp đính kèm từ nhiều PDF cùng lúc.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "Điều gì nếu không có tệp đính kèm?",
        "answer": "Công cụ sẽ chỉ ra nếu không tìm thấy tệp nhúng."
      },
      {
        "question": "Tất cả loại tệp đính kèm có được hỗ trợ không?",
        "answer": "Có, tất cả loại tệp nhúng có thể được trích xuất."
      },
      {
        "question": "Tôi có thể trích xuất từ nhiều PDF không?",
        "answer": "Có, bạn có thể xử lý nhiều PDF và tải xuống tất cả tệp đính kèm."
      }
    ]
  },
  "extract-images": {
    "title": "Trích xuất hình ảnh từ PDF",
    "metaDescription": "Trích xuất tất cả hình ảnh nhúng từ tệp PDF. Tải xuống riêng lẻ hoặc dưới dạng kho lưu trữ ZIP. Lọc hình ảnh nhỏ tự động.",
    "keywords": [
      "trích xuất hình ảnh pdf",
      "trích xuất hình ảnh pdf",
      "nhận hình ảnh từ pdf",
      "tải xuống hình ảnh pdf",
      "pdf sang hình ảnh"
    ],
    "description": "\n      <p>Trích xuất hình ảnh từ PDF lấy tất cả hình ảnh nhúng từ tài liệu PDF của bạn. Tải xuống hình ảnh chất lượng cao riêng lẻ hoặc dưới dạng kho lưu trữ ZIP tiện lợi.</p>\n      <p>Công cụ tự động lọc hình ảnh nhỏ như biểu tượng và trang trí dựa trên ngưỡng kích thước có thể tùy chỉnh. Xử lý nhiều PDF cùng lúc để trích xuất hàng loạt hiệu quả.</p>\n      <p>Tất cả trích xuất diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả một hoặc nhiều tệp PDF hoặc nhấp để chọn từ thiết bị của bạn."
      },
      {
        "step": 2,
        "title": "Đặt tùy chọn lọc",
        "description": "Điều chỉnh chiều rộng tối thiểu, chiều cao và kích thước tệp để lọc hình ảnh nhỏ không mong muốn."
      },
      {
        "step": 3,
        "title": "Trích xuất hình ảnh",
        "description": "Nhấp Trích xuất để tìm tất cả hình ảnh nhúng trong PDF của bạn."
      },
      {
        "step": 4,
        "title": "Tải xuống",
        "description": "Tải xuống hình ảnh riêng lẻ hoặc tất cả hình ảnh dưới dạng kho lưu trữ ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Khôi phục ảnh",
        "description": "Trích xuất ảnh và hình ảnh nhúng trong tài liệu PDF để sử dụng lại hoặc lưu trữ.",
        "icon": "image"
      },
      {
        "title": "Thu thập tài sản",
        "description": "Thu thập tất cả đồ họa và hình ảnh từ báo cáo PDF, bản trình bày hoặc brochure.",
        "icon": "folder"
      },
      {
        "title": "Tái sử dụng nội dung",
        "description": "Trích xuất hình ảnh từ PDF để sử dụng trong tài liệu, trang web hoặc bản trình bày khác.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Định dạng hình ảnh nào được trích xuất?",
        "answer": "Hình ảnh được trích xuất ở định dạng gốc của chúng (JPEG, PNG, v.v.) khi có thể, hoặc chuyển đổi sang PNG cho dữ liệu hình ảnh thô."
      },
      {
        "question": "Tại sao một số hình ảnh bị thiếu?",
        "answer": "Hình ảnh nhỏ dưới ngưỡng kích thước bị lọc. Điều chỉnh cài đặt lọc để trích xuất hình ảnh nhỏ hơn."
      },
      {
        "question": "Tôi có thể trích xuất từ PDF đã quét không?",
        "answer": "PDF đã quét thường chứa quét dưới dạng hình ảnh lớn mỗi trang. Sử dụng công cụ PDF sang Hình ảnh thay thế để chuyển đổi trang theo trang."
      }
    ]
  },
  "edit-attachments": {
    "title": "Chỉnh sửa tệp đính kèm",
    "metaDescription": "Quản lý tệp đính kèm PDF. Xem, đổi tên và xóa tệp nhúng.",
    "keywords": [
      "chỉnh sửa tệp đính kèm",
      "quản lý tệp pdf",
      "xóa tệp đính kèm",
      "đổi tên tệp đính kèm"
    ],
    "description": "\n      <p>Chỉnh sửa tệp đính kèm cho phép bạn quản lý tệp nhúng trong tài liệu PDF. Xem tất cả tệp đính kèm, đổi tên chúng hoặc xóa tệp không mong muốn khỏi PDF.</p>\n      <p>Hoàn hảo để dọn dẹp gói PDF hoặc cập nhật thông tin tệp đính kèm trước khi phân phối.</p>\n      <p>Tất cả chỉnh sửa diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Quản lý tệp đính kèm",
        "description": "Xem, đổi tên hoặc xóa tệp nhúng."
      },
      {
        "step": 3,
        "title": "Lưu và tải xuống",
        "description": "Nhấp Lưu để áp dụng thay đổi và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Dọn dẹp PDF",
        "description": "Xóa tệp đính kèm không cần thiết khỏi gói PDF.",
        "icon": "trash-2"
      },
      {
        "title": "Đổi tên tệp",
        "description": "Cập nhật tên tệp đính kèm để rõ ràng.",
        "icon": "edit"
      },
      {
        "title": "Xem xét nội dung",
        "description": "Kiểm tra tệp nhúng trước khi phân phối.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể thêm tệp đính kèm mới ở đây không?",
        "answer": "Sử dụng công cụ Thêm tệp đính kèm để nhúng tệp mới."
      },
      {
        "question": "Việc xóa có vĩnh viễn không?",
        "answer": "Có, tệp đính kèm đã xóa không thể khôi phục từ tệp đầu ra."
      },
      {
        "question": "Tôi có thể xem trước tệp đính kèm không?",
        "answer": "Bạn có thể xem tên và kích thước tệp; sử dụng Trích xuất tệp đính kèm để xem nội dung."
      }
    ]
  },
  "divide-pages": {
    "title": "Chia trang",
    "metaDescription": "Chia trang PDF thành nhiều phần. Chia trang theo chiều ngang hoặc dọc.",
    "keywords": [
      "chia trang pdf",
      "tách trang",
      "cắt trang pdf",
      "phần trang"
    ],
    "description": "\n      <p>Chia trang chia trang PDF riêng lẻ thành nhiều phần. Cắt trang theo chiều ngang, dọc hoặc theo lưới để tạo nhiều trang từ một trang.</p>\n      <p>Hoàn hảo để chia tài liệu đã quét có nhiều mục mỗi trang, hoặc chia trang khổ lớn thành khổ tiêu chuẩn.</p>\n      <p>Tất cả xử lý diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Đặt chia",
        "description": "Chọn chia theo chiều ngang, dọc hoặc lưới và đặt số phần."
      },
      {
        "step": 3,
        "title": "Chia và tải xuống",
        "description": "Nhấp Chia để tách trang và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Chia quét",
        "description": "Chia trang đã quét chứa nhiều tài liệu.",
        "icon": "scissors"
      },
      {
        "title": "Thay đổi kích thước trang",
        "description": "Chia trang lớn thành khổ giấy tiêu chuẩn.",
        "icon": "maximize-2"
      },
      {
        "title": "Tạo thẻ",
        "description": "Chia trang thành phần kích thước thẻ để in.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể chia thành phần không đều không?",
        "answer": "Hiện tại, các phần chia đều. Sử dụng Cắt PDF cho phần tùy chỉnh."
      },
      {
        "question": "Nội dung ở đường chia được xử lý như thế nào?",
        "answer": "Nội dung được tách ở đường chia; đảm bảo nội dung quan trọng không ở ranh giới."
      },
      {
        "question": "Tôi có thể chia chỉ trang cụ thể không?",
        "answer": "Có, bạn có thể chọn trang nào để chia."
      }
    ]
  },
  "add-blank-page": {
    "title": "Thêm trang trống",
    "metaDescription": "Chèn trang trống vào tài liệu PDF. Thêm trang trống ở bất kỳ vị trí nào.",
    "keywords": [
      "thêm trang trống",
      "chèn trang",
      "trang trống",
      "chèn trang pdf"
    ],
    "description": "\n      <p>Thêm trang trống chèn trang trống vào tài liệu PDF của bạn ở bất kỳ vị trí nào. Thêm trang trước, sau hoặc giữa các trang hiện có với kích thước trang có thể tùy chỉnh.</p>\n      <p>Hoàn hảo để thêm không gian cho ghi chú, tạo ngăn cách phần hoặc chuẩn bị tài liệu để in ấn.</p>\n      <p>Tất cả xử lý diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Chọn vị trí",
        "description": "Chọn nơi chèn trang trống và bao nhiêu trang."
      },
      {
        "step": 3,
        "title": "Thêm và tải xuống",
        "description": "Nhấp Thêm để chèn trang và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Không gian ghi chú",
        "description": "Thêm trang trống cho ghi chú viết tay.",
        "icon": "edit-3"
      },
      {
        "title": "Ngăn cách phần",
        "description": "Chèn trang trống giữa các phần tài liệu.",
        "icon": "minus"
      },
      {
        "title": "Chuẩn bị in ấn",
        "description": "Thêm trang để căn chỉnh in duplex.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể chọn kích thước trang không?",
        "answer": "Có, trang trống có thể khớp với trang hiện có hoặc sử dụng kích thước tùy chỉnh."
      },
      {
        "question": "Tôi có thể thêm nhiều trang trống không?",
        "answer": "Có, bạn có thể thêm bất kỳ số trang trống nào cùng lúc."
      },
      {
        "question": "Tôi có thể thêm trang màu không?",
        "answer": "Sử dụng công cụ Màu nền sau khi thêm trang trống để thêm màu."
      }
    ]
  },
  "reverse-pages": {
    "title": "Đảo ngược trang",
    "metaDescription": "Đảo ngược thứ tự trang PDF. Lật trang tài liệu từ cuối lên đầu.",
    "keywords": [
      "đảo ngược pdf",
      "lật thứ tự trang",
      "đảo ngược trang",
      "đảo ngược tài liệu"
    ],
    "description": "\n      <p>Đảo ngược trang lật thứ tự trang trong tài liệu PDF của bạn, đặt trang cuối cùng lên đầu và trang đầu tiên xuống cuối. Hữu ích cho tài liệu được quét theo thứ tự ngược hoặc cho nhu cầu in ấn cụ thể.</p>\n      <p>Công cụ xử lý toàn bộ tài liệu hoặc phạm vi trang đã chọn, duy trì tất cả nội dung và định dạng.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Chọn trang",
        "description": "Chọn đảo ngược tất cả trang hoặc phạm vi cụ thể."
      },
      {
        "step": 3,
        "title": "Đảo ngược và tải xuống",
        "description": "Nhấp Đảo ngược để lật thứ tự trang và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Khắc phục thứ tự quét",
        "description": "Sửa tài liệu được quét theo thứ tự ngược.",
        "icon": "refresh-cw"
      },
      {
        "title": "Chuẩn bị in ấn",
        "description": "Đảo ngược trang cho yêu cầu in ấn cụ thể.",
        "icon": "printer"
      },
      {
        "title": "Sắp xếp lại tài liệu",
        "description": "Lật thứ tự tài liệu nhanh chóng để xem xét.",
        "icon": "arrow-up-down"
      }
    ],
    "faq": [
      {
        "question": "Đánh dấu trang có được cập nhật không?",
        "answer": "Có, đánh dấu trang được cập nhật để trỏ đến trang đảo ngược chính xác."
      },
      {
        "question": "Tôi có thể đảo ngược chỉ một số trang không?",
        "answer": "Có, bạn có thể chọn phạm vi trang để đảo ngược."
      },
      {
        "question": "Điều này giống với xoay không?",
        "answer": "Không, đảo ngược thay đổi thứ tự trang; xoay thay đổi định hướng trang."
      }
    ]
  },
  "rotate-pdf": {
    "title": "Xoay PDF",
    "metaDescription": "Xoay trang PDF. Quay trang 90, 180 hoặc 270 độ.",
    "keywords": [
      "xoay pdf",
      "quay trang pdf",
      "pdf xoay",
      "khắc phục định hướng"
    ],
    "description": "\n      <p>Xoay PDF quay trang trong tài liệu của bạn theo 90, 180 hoặc 270 độ. Khắc phục trang được định hướng sai, quay trang ngang hoặc điều chỉnh định hướng trang để xem.</p>\n      <p>Xoay tất cả trang thống nhất hoặc chọn trang cụ thể để xoay riêng lẻ. Công cụ bảo toàn tất cả nội dung và định dạng.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Chọn xoay",
        "description": "Chọn góc xoay và trang nào để xoay."
      },
      {
        "step": 3,
        "title": "Xoay và tải xuống",
        "description": "Nhấp Xoay để áp dụng thay đổi và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Khắc phục quét",
        "description": "Sửa định hướng của tài liệu đã quét.",
        "icon": "rotate-cw"
      },
      {
        "title": "Trang ngang",
        "description": "Xoay trang ngang để xem đúng.",
        "icon": "monitor"
      },
      {
        "title": "Định hướng hỗn hợp",
        "description": "Chuẩn hóa định hướng trang trong tài liệu hỗn hợp.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Tôi có thể xoay các trang khác nhau khác nhau không?",
        "answer": "Có, bạn có thể áp dụng xoay khác nhau cho các trang khác nhau."
      },
      {
        "question": "Xoay có ảnh hưởng đến chất lượng in ấn không?",
        "answer": "Không, xoay bảo toàn tất cả chất lượng nội dung."
      },
      {
        "question": "Tôi có thể xoay theo góc tùy chỉnh không?",
        "answer": "Xoay bị giới hạn ở gia số 90 độ (90, 180, 270)."
      }
    ]
  },
  "n-up-pdf": {
    "title": "N-Up PDF",
    "metaDescription": "In nhiều trang PDF mỗi tờ. Tạo bố cục 2-up, 4-up hoặc tùy chỉnh.",
    "keywords": [
      "n-up pdf",
      "nhiều trang mỗi tờ",
      "in 2-up",
      "áp đặt"
    ],
    "description": "\n      <p>N-Up PDF sắp xếp nhiều trang lên các tờ đơn, tạo bố cục 2-up, 4-up, 6-up, 9-up hoặc tùy chỉnh. Hoàn hảo để tiết kiệm giấy khi in ấn hoặc tạo tài liệu phân phát.</p>\n      <p>Chọn từ bố cục đặt sẵn hoặc tạo sắp xếp tùy chỉnh. Công cụ tự động chia tỷ lệ và định vị trang để kết quả tối ưu.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Chọn bố cục",
        "description": "Chọn 2-up, 4-up, 6-up, 9-up hoặc lưới tùy chỉnh."
      },
      {
        "step": 3,
        "title": "Tạo và tải xuống",
        "description": "Nhấp Tạo để tạo PDF n-up và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Tiết kiệm giấy",
        "description": "In nhiều trang mỗi tờ để giảm sử dụng giấy.",
        "icon": "leaf"
      },
      {
        "title": "Tạo tài liệu phân phát",
        "description": "Làm tài liệu phân phát nhỏ gọn từ trang trình bày.",
        "icon": "file-text"
      },
      {
        "title": "Xem xét tài liệu",
        "description": "In tài liệu ở kích thước giảm để xem xét.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Bố cục nào có sẵn?",
        "answer": "Bố cục 2-up, 4-up, 6-up, 9-up và lưới tùy chỉnh có sẵn."
      },
      {
        "question": "Tôi có thể thêm đường viền giữa các trang không?",
        "answer": "Có, bạn có thể thêm đường viền và kênh giữa các trang."
      },
      {
        "question": "Thứ tự trang có được bảo toàn không?",
        "answer": "Có, trang được sắp xếp theo thứ tự đọc (trái sang phải, trên xuống dưới)."
      }
    ]
  },
  "combine-single-page": {
    "title": "Kết hợp thành trang đơn",
    "metaDescription": "Ghép trang PDF thành trang liên tục. Tạo tài liệu cuộn trang đơn.",
    "keywords": [
      "kết hợp trang",
      "trang đơn pdf",
      "ghép trang",
      "cuộn liên tục"
    ],
    "description": "\n      <p>Kết hợp thành trang đơn ghép tất cả trang PDF thành một trang liên tục. Tạo tài liệu cuộn hoàn hảo để xem trên web hoặc đọc liên tục.</p>\n      <p>Trang được nối dọc với khoảng cách có thể tùy chỉnh. Kết quả là một trang dài chứa tất cả nội dung.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Đặt khoảng cách",
        "description": "Chọn khoảng trống giữa trang được ghép."
      },
      {
        "step": 3,
        "title": "Kết hợp và tải xuống",
        "description": "Nhấp Kết hợp để tạo PDF trang đơn."
      }
    ],
    "useCases": [
      {
        "title": "Tài liệu web",
        "description": "Tạo PDF cuộn để nhúng web.",
        "icon": "globe"
      },
      {
        "title": "Đọc liên tục",
        "description": "Chuyển đổi tài liệu phân trang thành cuộn liên tục.",
        "icon": "scroll"
      },
      {
        "title": "Nội dung dài dạng",
        "description": "Kết hợp trang để đọc liên tục dài dạng.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Có giới hạn trang không?",
        "answer": "Tài liệu rất dài có thể bị giới hạn bởi bộ nhớ trình duyệt."
      },
      {
        "question": "Tôi có thể thêm ngăn cách giữa trang không?",
        "answer": "Có, bạn có thể thêm khoảng cách hoặc đường giữa trang gốc."
      },
      {
        "question": "Điều này có hoạt động cho in ấn không?",
        "answer": "Kết quả tốt nhất cho xem màn hình; sử dụng N-Up cho bố cục in."
      }
    ]
  },
  "view-metadata": {
    "title": "Xem siêu dữ liệu",
    "metaDescription": "Xem thuộc tính tài liệu PDF. Xem tác giả, tiêu đề, ngày tháng và siêu dữ liệu khác.",
    "keywords": [
      "siêu dữ liệu pdf",
      "thuộc tính tài liệu",
      "thông tin pdf",
      "xem chi tiết pdf"
    ],
    "description": "\n      <p>Xem siêu dữ liệu hiển thị tất cả thuộc tính và siêu dữ liệu từ tệp PDF của bạn. Xem tác giả, tiêu đề, chủ đề, từ khóa, ngày tạo, ngày sửa đổi và nhiều hơn nữa.</p>\n      <p>Hữu ích để kiểm tra tài liệu, xem thông tin tệp hoặc xác minh tính xác thực của tài liệu.</p>\n      <p>Tất cả xem diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Xem thuộc tính",
        "description": "Xem tất cả siêu dữ liệu được hiển thị ở định dạng có tổ chức."
      },
      {
        "step": 3,
        "title": "Xuất nếu cần",
        "description": "Tùp chọn xuất siêu dữ liệu dưới dạng JSON."
      }
    ],
    "useCases": [
      {
        "title": "Kiểm tra tài liệu",
        "description": "Xem xét thuộc tính tài liệu để tuân thủ.",
        "icon": "clipboard-check"
      },
      {
        "title": "Xác minh tính xác thực",
        "description": "Kiểm tra ngày tạo và thông tin tác giả.",
        "icon": "shield"
      },
      {
        "title": "Thông tin tệp",
        "description": "Nhận thông tin chi tiết về tệp PDF.",
        "icon": "info"
      }
    ],
    "faq": [
      {
        "question": "Siêu dữ liệu nào được hiển thị?",
        "answer": "Tiêu đề, tác giả, chủ đề, từ khóa, người tạo, nhà sản xuất, ngày tháng và phiên bản PDF."
      },
      {
        "question": "Siêu dữ liệu XMP có được bao gồm không?",
        "answer": "Có, cả siêu dữ liệu tiêu chuẩn và XMP được hiển thị."
      },
      {
        "question": "Tôi có thể chỉnh sửa siêu dữ liệu ở đây không?",
        "answer": "Sử dụng công cụ Chỉnh sửa siêu dữ liệu để sửa đổi thuộc tính tài liệu."
      }
    ]
  },
  "edit-metadata": {
    "title": "Chỉnh sửa siêu dữ liệu",
    "metaDescription": "Chỉnh sửa thuộc tính tài liệu PDF. Thay đổi tiêu đề, tác giả, chủ đề và từ khóa.",
    "keywords": [
      "chỉnh sửa siêu dữ liệu pdf",
      "thay đổi thuộc tính pdf",
      "tác giả pdf",
      "thông tin tài liệu"
    ],
    "description": "\n      <p>Chỉnh sửa siêu dữ liệu cho phép bạn sửa đổi thuộc tính trong tệp PDF của mình. Thay đổi tiêu đề, tác giả, chủ đề, từ khóa và các trường siêu dữ liệu khác.</p>\n      <p>Hoàn hảo để sửa thông tin tài liệu, thêm ghi công thích hợp hoặc chuẩn bị tệp để phân phối.</p>\n      <p>Tất cả chỉnh sửa diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Chỉnh sửa thuộc tính",
        "description": "Sửa đổi tiêu đề, tác giả, chủ đề, từ khóa và các trường khác."
      },
      {
        "step": 3,
        "title": "Lưu và tải xuống",
        "description": "Nhấp Lưu để áp dụng thay đổi và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Thêm ghi công",
        "description": "Đặt thông tin tác giả và người tạo thích hợp.",
        "icon": "user"
      },
      {
        "title": "Tối ưu hóa SEO",
        "description": "Thêm từ khóa và mô tả để tìm kiếm.",
        "icon": "search"
      },
      {
        "title": "Chuẩn bị tài liệu",
        "description": "Chuẩn bị tài liệu với siêu dữ liệu thích hợp trước khi chia sẻ.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Trường nào tôi có thể chỉnh sửa?",
        "answer": "Tiêu đề, tác giả, chủ đề, từ khóa, người tạo và trường nhà sản xuất."
      },
      {
        "question": "Tôi có thể xóa tất cả siêu dữ liệu không?",
        "answer": "Sử dụng công cụ Xóa siêu dữ liệu để loại bỏ tất cả thuộc tính tài liệu."
      },
      {
        "question": "Ngày tháng có thể chỉnh sửa không?",
        "answer": "Ngày tạo và sửa đổi được cập nhật tự động."
      }
    ]
  },
  "pdf-to-zip": {
    "title": "PDF sang ZIP",
    "metaDescription": "Gói nhiều PDF vào kho lưu trữ ZIP. Nén và gói tệp PDF.",
    "keywords": [
      "pdf sang zip",
      "nén pdf",
      "gói pdf",
      "lưu trữ pdf"
    ],
    "description": "\n      <p>PDF sang ZIP gói nhiều tệp PDF vào một kho lưu trữ ZIP duy nhất. Nén và gói PDF của bạn để chia sẻ, lưu trữ hoặc sao lưu dễ dàng hơn.</p>\n      <p>Công cụ tạo kho lưu trữ nén chứa tất cả tệp PDF của bạn, giảm kích thước tổng và đơn giản hóa quản lý tệp.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tệp của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF",
        "description": "Kéo và thả nhiều tệp PDF hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Định cấu hình kho lưu trữ",
        "description": "Tùp chọn đặt tên kho lưu trữ và mức nén."
      },
      {
        "step": 3,
        "title": "Tạo và tải xuống",
        "description": "Nhấp Tạo để tạo kho lưu trữ ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Chia sẻ tệp",
        "description": "Gói nhiều PDF để chia sẻ dễ dàng.",
        "icon": "share-2"
      },
      {
        "title": "Tạo sao lưu",
        "description": "Tạo sao lưu nén của bộ sưu tập PDF.",
        "icon": "archive"
      },
      {
        "title": "Đính kèm email",
        "description": "Kết hợp PDF thành một tệp đính kèm cho email.",
        "icon": "mail"
      }
    ],
    "faq": [
      {
        "question": "Mức nén nào được áp dụng?",
        "answer": "Nén ZIP thường giảm kích thước tổng 10-30%."
      },
      {
        "question": "Có giới hạn tệp không?",
        "answer": "Bạn có thể bao gồm tối đa 100 PDF trong một kho lưu trữ."
      },
      {
        "question": "Tôi có thể đặt mật khẩu không?",
        "answer": "Tạo ZIP được bảo vệ bằng mật khẩu hiện không được hỗ trợ."
      }
    ]
  },
  "compare-pdfs": {
    "title": "So sánh PDF",
    "metaDescription": "So sánh hai tài liệu PDF. Làm nổi bật sự khác biệt giữa các phiên bản.",
    "keywords": [
      "so sánh pdf",
      "pdf khác biệt",
      "so sánh tài liệu",
      "so sánh phiên bản"
    ],
    "description": "\n      <p>So sánh PDF phân tích hai tài liệu PDF và làm nổi bật sự khác biệt giữa chúng. Hoàn hảo để xem xét sửa đổi tài liệu, kiểm tra thay đổi hợp đồng hoặc xác minh chỉnh sửa.</p>\n      <p>Xem các trang cạnh nhau, chuyển giữa các cặp trang và lọc những thay đổi được tô sáng. So sánh văn bản trích xuất và tên phông chữ. Không so sánh ảnh quét hoặc các thay đổi trực quan khác.</p>\n      <p>Tất cả so sánh diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên hai PDF",
        "description": "Tải lên tài liệu gốc và đã sửa đổi."
      },
      {
        "step": 2,
        "title": "So sánh PDF",
        "description": "Xem các trang cạnh nhau, chuyển giữa các cặp trang và lọc những thay đổi được tô sáng."
      },
      {
        "step": 3,
        "title": "Bộ lọc làm nổi bật",
        "description": "Thay đổi văn bản · Thay đổi phông chữ · Đầu trang và chân trang · Văn bản đã di chuyển"
      }
    ],
    "useCases": [
      {
        "title": "Xem xét hợp đồng",
        "description": "So sánh phiên bản hợp đồng để xác định thay đổi.",
        "icon": "file-text"
      },
      {
        "title": "Sửa đổi tài liệu",
        "description": "Xem xét chỉnh sửa giữa các phiên bản tài liệu.",
        "icon": "git-compare"
      },
      {
        "title": "Kiểm soát chất lượng",
        "description": "Xác minh rằng chỉ thay đổi dự định được thực hiện.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Loại sự khác biệt nào được phát hiện?",
        "answer": "Thay đổi văn bản · Thay đổi phông chữ · Đầu trang và chân trang · Văn bản đã di chuyển"
      },
      {
        "question": "Tôi có thể so sánh tài liệu đã quét không?",
        "answer": "So sánh văn bản trích xuất và tên phông chữ. Không so sánh ảnh quét hoặc các thay đổi trực quan khác."
      },
      {
        "question": "So sánh trực quan có sẵn không?",
        "answer": "Xem các trang cạnh nhau, chuyển giữa các cặp trang và lọc những thay đổi được tô sáng. So sánh văn bản trích xuất và tên phông chữ. Không so sánh ảnh quét hoặc các thay đổi trực quan khác."
      }
    ]
  },
  "posterize-pdf": {
    "title": "Áp phích PDF",
    "metaDescription": "Chia trang PDF lớn thành ô in. Tạo áp phích từ trang PDF.",
    "keywords": [
      "áp phích pdf\nbản đồ",
      "ô pdf",
      "in khổ lớn",
      "áp phích pdf"
    ],
    "description": "\n      <p>Posterize PDF chia trang PDF lớn thành ô nhỏ hơn có thể in trên giấy tiêu chuẩn và lắp ráp thành áp phích. Hoàn hảo để in sơ đồ lớn, bản đồ hoặc nghệ thuật.</p>\n      <p>Định cấu hình kích thước lưới và chồng lên để lắp ráp dễ dàng. Công cụ tự động tính toán kích thước ô cho đầu ra mục tiêu của bạn.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả PDF khổ lớn của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Định cấu hình ô",
        "description": "Đặt kích thước lưới, chồng lên và kích thước giấy đầu ra."
      },
      {
        "step": 3,
        "title": "Tạo và tải xuống",
        "description": "Nhấp Tạo để tạo ô in và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "In áp phích",
        "description": "In áp phích lớn trên giấy tiêu chuẩn.",
        "icon": "maximize-2"
      },
      {
        "title": "In bản đồ",
        "description": "In bản đồ lớn theo phần để lắp ráp.",
        "icon": "map"
      },
      {
        "title": "Sản xuất nghệ thuật",
        "description": "Tạo bản in lớn từ nghệ thuật PDF.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Chồng lên bao nhiêu là đủ?",
        "answer": "Chồng lên 10-20mm được khuyến nghị để căn chỉnh dễ dàng trong quá trình lắp ráp."
      },
      {
        "question": "Tôi có thể thêm dấu cắt không?",
        "answer": "Có, dấu cắt có thể được thêm để giúp cắt và căn chỉnh."
      },
      {
        "question": "Kích thước giấy nào được hỗ trợ?",
        "answer": "A4, Letter, A3 và kích thước tùy chỉnh được hỗ trợ."
      }
    ]
  },
  "fix-page-size": {
    "title": "Khắc phục kích thước trang",
    "metaDescription": "Chuẩn hóa kích thước trang PDF. Chuyển đổi tất cả trang thành kích thước thống nhất.",
    "keywords": [
      "khắc phục kích thước trang",
      "chuẩn hóa pdf",
      "trang thống nhất",
      "thay đổi kích thước trang pdf"
    ],
    "description": "\n      <p>Khắc phục kích thước trang chuẩn hóa tất cả trang trong PDF của bạn thành kích thước thống nhất. Chuyển đổi tài liệu kích thước hỗn hợp thành kích thước trang nhất quán để trình bày chuyên nghiệp hoặc in ấn.</p>\n      <p>Chọn từ kích thước tiêu chuẩn (A4, Letter, v.v.) hoặc đặt kích thước tùy chỉnh. Nội dung được chia tỷ lệ hoặc định vị để vừa với kích thước trang mới.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Chọn kích thước mục tiêu",
        "description": "Chọn kích thước tiêu chuẩn hoặc nhập kích thước tùy chỉnh."
      },
      {
        "step": 3,
        "title": "Áp dụng và tải xuống",
        "description": "Nhấp Áp dụng để chuẩn hóa trang và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Chuẩn bị in ấn",
        "description": "Chuẩn hóa trang để in nhất quán.",
        "icon": "printer"
      },
      {
        "title": "Dọn dẹp tài liệu",
        "description": "Khắc phục tài liệu có kích thước trang không nhất quán.",
        "icon": "file-check"
      },
      {
        "title": "Tài liệu chuyên nghiệp",
        "description": "Tạo tài liệu thống nhất để phân phối.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Nội dung được xử lý như thế nào?",
        "answer": "Nội dung được chia tỷ lệ để vừa hoặc căn giữa kích thước trang mới."
      },
      {
        "question": "Tôi có thể bảo toàn tỷ lệ khung hình không?",
        "answer": "Có, nội dung có thể được chia tỷ lệ theo tỷ lệ để vừa."
      },
      {
        "question": "Kích thước tiêu chuẩn nào có sẵn?",
        "answer": "A4, A3, Letter, Legal và các kích thước phổ biến khác."
      }
    ]
  },
  "linearize-pdf": {
    "title": "Tuyến tính hóa PDF",
    "metaDescription": "Tối ưu hóa PDF để xem web nhanh. Bật tải tiến triển.",
    "keywords": [
      "tuyến tính hóa pdf",
      "xem web nhanh",
      "tối ưu hóa pdf",
      "pdf tiến triển"
    ],
    "description": "\n      <p>Linearize PDF tối ưu hóa tài liệu của bạn để xem web nhanh. PDF được linearize có thể bắt đầu hiển thị trước khi toàn bộ tệp được tải xuống, cải thiện trải nghiệm người dùng.</p>\n      <p>Cũng được gọi là \"Fast Web View,\" tối ưu hóa này sắp xếp lại cấu trúc PDF để tải tiến triển trong trình duyệt web.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Tuyến tính hóa",
        "description": "Nhấp Linearize để tối ưu hóa cho xem web."
      },
      {
        "step": 3,
        "title": "Tải xuống",
        "description": "Tải xuống PDF đã tối ưu hóa của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Xuất bản web",
        "description": "Tối ưu hóa PDF cho tải xuống trang web.",
        "icon": "globe"
      },
      {
        "title": "Đính kèm email",
        "description": "Tạo PDF mở nhanh hơn cho người nhận.",
        "icon": "mail"
      },
      {
        "title": "Tài liệu trực tuyến",
        "description": "Cải thiện trải nghiệm xem cho tài liệu trực tuyến.",
        "icon": "cloud"
      }
    ],
    "faq": [
      {
        "question": "Linearization là gì?",
        "answer": "Linearization sắp xếp lại dữ liệu PDF để tải tiến triển."
      },
      {
        "question": "Nó có giảm kích thước tệp không?",
        "answer": "Linearization có thể tăng nhẹ kích thước tệp do cấu trúc được thêm."
      },
      {
        "question": "Nó tương thích với tất cả trình xem không?",
        "answer": "Có, PDF được linearize hoạt động trong tất cả trình đọc PDF."
      }
    ]
  },
  "page-dimensions": {
    "title": "Kích thước trang",
    "metaDescription": "Phân tích kích thước trang PDF. Xem kích thước của tất cả trang trong tài liệu của bạn.",
    "keywords": [
      "kích thước trang pdf",
      "đo lường pdf",
      "kích thước tài liệu",
      "kích thước trang"
    ],
    "description": "\n      <p>Kích thước trang phân tích và hiển thị kích thước của mọi trang trong tài liệu PDF của bạn. Xem kích thước ở các đơn vị khác nhau (inch, mm, điểm) và xác định trang có kích thước không tiêu chuẩn.</p>\n      <p>Hữu ích cho chuẩn bị in ấn, phân tích tài liệu hoặc xác định kích thước trang không nhất quán.</p>\n      <p>Tất cả phân tích diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Xem kích thước",
        "description": "Xem kích thước trang được hiển thị cho tất cả trang."
      },
      {
        "step": 3,
        "title": "Xuất báo cáo",
        "description": "Tùp chọn xuất kích thước dưới dạng JSON."
      }
    ],
    "useCases": [
      {
        "title": "Lập kế hoạch in ấn",
        "description": "Kiểm tra kích thước trang trước khi in.",
        "icon": "printer"
      },
      {
        "title": "Phân tích tài liệu",
        "description": "Xác định trang có kích thước bất thường.",
        "icon": "search"
      },
      {
        "title": "Kiểm soát chất lượng",
        "description": "Xác minh kích thước trang đáp ứng thông số kỹ thuật.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Đơn vị nào có sẵn?",
        "answer": "Inch, millimeter, centimeter và điểm."
      },
      {
        "question": "Nó có hiển thị định hướng không?",
        "answer": "Có, định hướng dọc hoặc ngang được chỉ ra."
      },
      {
        "question": "Tôi có thể khắc phục kích thước không nhất quán không?",
        "answer": "Sử dụng công cụ Khắc phục kích thước trang để chuẩn hóa kích thước."
      }
    ]
  },
  "remove-restrictions": {
    "title": "Loại bỏ hạn chế",
    "metaDescription": "Loại bỏ hạn chế PDF. Mở khóa quyền in ấn, sao chép và chỉnh sửa.",
    "keywords": [
      "loại bỏ hạn chế pdf",
      "mở khóa pdf",
      "quyền pdf",
      "bỏ hạn chế pdf"
    ],
    "description": "\n      <p>Loại bỏ hạn chế mở khóa PDF có hạn chế quyền ngăn cản in ấn, sao chép hoặc chỉnh sửa. Công cụ này loại bỏ mật khẩu chủ sở hữu trong khi bảo toàn nội dung tài liệu.</p>\n      <p>Lưu ý: Công cụ này không thể loại bỏ mật khẩu người dùng ngăn mở tài liệu. Sử dụng Giải mã PDF cho tệp được bảo vệ bằng mật khẩu.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF bị hạn chế",
        "description": "Kéo và thả PDF bị hạn chế của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Loại bỏ hạn chế",
        "description": "Nhấp Loại bỏ để mở khóa tài liệu."
      },
      {
        "step": 3,
        "title": "Tải xuống",
        "description": "Tải xuống PDF không hạn chế."
      }
    ],
    "useCases": [
      {
        "title": "Bật in ấn",
        "description": "Mở khóa PDF ngăn in ấn.",
        "icon": "printer"
      },
      {
        "title": "Bật sao chép",
        "description": "Cho phép chọn và sao chép văn bản.",
        "icon": "copy"
      },
      {
        "title": "Bật chỉnh sửa",
        "description": "Loại bỏ hạn chế trên chỉnh sửa tài liệu.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "Điều này có hợp pháp không?",
        "answer": "Loại bỏ hạn chế từ tài liệu bạn sở hữu hoặc có quyền thường hợp pháp."
      },
      {
        "question": "Nó có thể loại bỏ mật khẩu mở không?",
        "answer": "Không, bạn phải biết mật khẩu hiện tại để giải mã."
      },
      {
        "question": "Nội dung có bị ảnh hưởng không?",
        "answer": "Không, chỉ hạn chế bị loại bỏ; nội dung không thay đổi."
      }
    ]
  },
  "repair-pdf": {
    "title": "Sửa chữa PDF",
    "metaDescription": "Khắc phục tệp PDF bị hỏng. Khôi phục và sửa chữa tài liệu bị hỏng.",
    "keywords": [
      "sửa chữa pdf",
      "khắc phục pdf",
      "khôi phục pdf",
      "pdf bị hỏng"
    ],
    "description": "\n      <p>Sửa chữa PDF cố gắng khắc phục tệp PDF bị hỏng hoặc bị hỏng. Công cụ phân tích cấu trúc tài liệu và xây dựng lại để khôi phục nhiều nội dung nhất có thể.</p>\n      <p>Hữu ích để khôi phục tệp không mở được, hiển thị lỗi hoặc có nội dung bị thiếu do hỏng.</p>\n      <p>Tất cả sửa chữa diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF bị hỏng",
        "description": "Kéo và thả PDF bị hỏng của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Sửa chữa tài liệu",
        "description": "Nhấp Sửa chữa để cố gắng khôi phục."
      },
      {
        "step": 3,
        "title": "Tải xuống",
        "description": "Tải xuống PDF đã sửa chữa nếu thành công."
      }
    ],
    "useCases": [
      {
        "title": "Khôi phục tệp",
        "description": "Khôi phục PDF không mở đúng cách.",
        "icon": "refresh-cw"
      },
      {
        "title": "Khắc phục lỗi",
        "description": "Sửa chữa tệp hiển thị thông báo lỗi.",
        "icon": "wrench"
      },
      {
        "title": "Khôi phục nội dung",
        "description": "Khôi phục nội dung từ tệp bị hỏng một phần.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Tất cả PDF có thể sửa chữa được không?",
        "answer": "Thành công phụ thuộc vào loại và mức độ hỏng."
      },
      {
        "question": "Tất cả nội dung có được khôi phục không?",
        "answer": "Công cụ khôi phục nhiều nhất có thể; tệp bị hỏng nghiêm trọng có thể có mất mát."
      },
      {
        "question": "Tôi nên giữ tệp gốc không?",
        "answer": "Có, luôn giữ tệp gốc làm bản sao lưu."
      }
    ]
  },
  "encrypt-pdf": {
    "title": "Mã hóa PDF",
    "metaDescription": "Bảo vệ bằng mật khẩu tệp PDF. Thêm mã hóa và đặt quyền.",
    "keywords": [
      "mã hóa pdf",
      "bảo vệ bằng mật khẩu pdf",
      "bảo mật pdf",
      "mã hóa pdf"
    ],
    "description": "\n      <p>Mã hóa PDF thêm bảo vệ bằng mật khẩu và mã hóa vào tài liệu PDF của bạn. Đặt mật khẩu người dùng để ngăn mở, và mật khẩu chủ sở hữu để kiểm soát quyền như in ấn và sao chép.</p>\n      <p>Chọn từ các mức mã hóa khác nhau (128-bit hoặc 256-bit AES) cho nhu cầu bảo mật khác nhau.</p>\n      <p>Tất cả mã hóa diễn ra cục bộ trong trình duyệt của bạn, đảm bảo mật khẩu và tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Đặt mật khẩu",
        "description": "Nhập mật khẩu người dùng và/hoặc mật khẩu chủ sở hữu. Định cấu hình quyền."
      },
      {
        "step": 3,
        "title": "Mã hóa và tải xuống",
        "description": "Nhấp Mã hóa để bảo mật PDF của bạn và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Tài liệu bí mật",
        "description": "Bảo vệ tài liệu kinh doanh nhạy cảm.",
        "icon": "lock"
      },
      {
        "title": "Tệp cá nhân",
        "description": "Bảo mật tài liệu cá nhân như tờ khai thuế.",
        "icon": "shield"
      },
      {
        "title": "Phân phối được kiểm soát",
        "description": "Giới hạn những gì người nhận có thể làm với tài liệu.",
        "icon": "key"
      }
    ],
    "faq": [
      {
        "question": "Sự khác biệt giữa mật khẩu người dùng và chủ sở hữu là gì?",
        "answer": "Mật khẩu người dùng ngăn mở; mật khẩu chủ sở hữu kiểm soát quyền."
      },
      {
        "question": "Mã hóa nào được sử dụng?",
        "answer": "Tùy chọn mã hóa 128-bit hoặc 256-bit AES có sẵn."
      },
      {
        "question": "Tôi có thể đặt quyền mà không có mật khẩu người dùng không?",
        "answer": "Có, bạn có thể đặt mật khẩu chủ sở hữu chỉ để kiểm soát quyền."
      }
    ]
  },
  "sanitize-pdf": {
    "title": "Vệ sinh PDF",
    "metaDescription": "Loại bỏ dữ liệu ẩn khỏi PDF. Dọn dẹp siêu dữ liệu, tập lệnh và thông tin nhạy cảm.",
    "keywords": [
      "vệ sinh pdf",
      "dọn dẹp pdf",
      "loại bỏ dữ liệu ẩn",
      "quyền riêng tư pdf"
    ],
    "description": "\n      <p>Vệ sinh PDF loại bỏ dữ liệu ẩn và thông tin nhạy cảm tiềm ẩn khỏi tài liệu của bạn. Loại bỏ siêu dữ liệu, tập lệnh nhúng, tệp đính kèm, nhận xét và nội dung ẩn khác.</p>\n      <p>Cần thiết để chuẩn bị tài liệu cho phân phối công khai hoặc khi quyền riêng tư là vấn đề.</p>\n      <p>Tất cả vệ sinh diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Chọn loại bỏ gì",
        "description": "Chọn loại dữ liệu ẩn nào để loại bỏ."
      },
      {
        "step": 3,
        "title": "Vệ sinh và tải xuống",
        "description": "Nhấp Vệ sinh để dọn dẹp PDF và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Phát hành công khai",
        "description": "Chuẩn bị tài liệu cho phân phối công khai.",
        "icon": "globe"
      },
      {
        "title": "Bảo vệ quyền riêng tư",
        "description": "Loại bỏ thông tin cá nhân trước khi chia sẻ.",
        "icon": "shield"
      },
      {
        "title": "Tuân thủ bảo mật",
        "description": "Đáp ứng yêu cầu bảo mật cho xử lý tài liệu.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Dữ liệu ẩn nào bị loại bỏ?",
        "answer": "Siêu dữ liệu, tập lệnh, tệp đính kèm, nhận xét, dữ liệu biểu mẫu và lớp ẩn."
      },
      {
        "question": "Nội dung hiển thị có bị ảnh hưởng không?",
        "answer": "Không, chỉ dữ liệu ẩn bị loại bỏ; nội dung tài liệu không thay đổi."
      },
      {
        "question": "Điều này có thể đảo ngược không?",
        "answer": "Không, dữ liệu đã loại bỏ không thể khôi phục. Giữ bản sao của bản gốc."
      }
    ]
  },
  "decrypt-pdf": {
    "title": "Giải mã PDF",
    "metaDescription": "Loại bỏ mật khẩu khỏi tệp PDF. Mở khóa tài liệu được bảo vệ bằng mật khẩu.",
    "keywords": [
      "giải mã pdf",
      "loại bỏ mật khẩu pdf",
      "mở khóa pdf",
      "công cụ loại bỏ mật khẩu pdf"
    ],
    "description": "\n      <p>Giải mã PDF loại bỏ bảo vệ bằng mật khẩu khỏi tài liệu PDF. Nhập mật khẩu hiện tại để mở khóa tệp và tạo bản sao không bảo vệ.</p>\n      <p>Công cụ này yêu cầu bạn biết mật khẩu hiện tại. Nó không thể crack hoặc bỏ qua mật khẩu không xác định.</p>\n      <p>Tất cả giải mã diễn ra cục bộ trong trình duyệt của bạn, đảm bảo mật khẩu và tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF được bảo vệ",
        "description": "Kéo và thả PDF được bảo vệ bằng mật khẩu của bạn."
      },
      {
        "step": 2,
        "title": "Nhập mật khẩu",
        "description": "Nhập mật khẩu tài liệu hiện tại."
      },
      {
        "step": 3,
        "title": "Giải mã và tải xuống",
        "description": "Nhấp Giải mã để loại bỏ bảo vệ và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Loại bỏ mật khẩu cũ",
        "description": "Mở khóa tài liệu khi mật khẩu không còn cần thiết.",
        "icon": "unlock"
      },
      {
        "title": "Đơn giản hóa truy cập",
        "description": "Tạo bản sao không bảo vệ để chia sẻ dễ dàng.",
        "icon": "share-2"
      },
      {
        "title": "Lưu trữ tài liệu",
        "description": "Loại bỏ mật khẩu trước khi lưu trữ lâu dài.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Nó có thể crack mật khẩu không xác định không?",
        "answer": "Không, bạn phải biết mật khẩu hiện tại để giải mã."
      },
      {
        "question": "Tệp gốc có bị sửa đổi không?",
        "answer": "Không, bản sao không bảo vệ mới được tạo."
      },
      {
        "question": "Điều gì nếu tôi quên mật khẩu?",
        "answer": "Thật không may, chúng tôi không thể khôi phục mật khẩu bị quên."
      }
    ]
  },
  "flatten-pdf": {
    "title": "Làm phẳng PDF",
    "metaDescription": "Làm phẳng biểu mẫu và chú thích PDF. Làm cho nội dung không thể chỉnh sửa.",
    "keywords": [
      "làm phẳng pdf",
      "làm phẳng biểu mẫu",
      "làm phẳng chú thích",
      "pdf không thể chỉnh sửa"
    ],
    "description": "\n      <p>Làm phẳng PDF chuyển đổi các phần tử tương tác như trường biểu mẫu và chú thích thành nội dung tĩnh. PDF được làm phẳng trông giống nhau nhưng không thể chỉnh sửa được nữa.</p>\n      <p>Hoàn hảo để hoàn thiện biểu mẫu đã điền, bảo toàn chú thích hoặc tạo phiên bản tài liệu không thể chỉnh sửa.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả PDF có biểu mẫu hoặc chú thích của bạn."
      },
      {
        "step": 2,
        "title": "Chọn làm phẳng gì",
        "description": "Chọn làm phẳng biểu mẫu, chú thích hoặc cả hai."
      },
      {
        "step": 3,
        "title": "Làm phẳng và tải xuống",
        "description": "Nhấp Làm phẳng để tạo PDF tĩnh."
      }
    ],
    "useCases": [
      {
        "title": "Hoàn thiện biểu mẫu",
        "description": "Khóa dữ liệu biểu mẫu đã điền để ngăn thay đổi.",
        "icon": "lock"
      },
      {
        "title": "Bảo toàn chú thích",
        "description": "Làm cho chú thích vĩnh viễn trong tài liệu.",
        "icon": "check-circle"
      },
      {
        "title": "Lưu trữ tài liệu",
        "description": "Tạo phiên bản không thể chỉnh sửa để lưu trữ.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Làm phẳng có thể đảo ngược không?",
        "answer": "Không, làm phẳng là vĩnh viễn. Giữ bản sao của bản gốc."
      },
      {
        "question": "Giao diện có thay đổi không?",
        "answer": "Không, tài liệu trông giống nhau nhưng không còn tương tác."
      },
      {
        "question": "Nó có giảm kích thước tệp không?",
        "answer": "Đôi khi, vì các phần tử tương tác được chuyển đổi thành nội dung đơn giản hơn."
      }
    ]
  },
  "remove-metadata": {
    "title": "Loại bỏ siêu dữ liệu",
    "metaDescription": "Loại bỏ siêu dữ liệu khỏi tệp PDF. Loại bỏ tác giả, ngày tháng và thuộc tính tài liệu.",
    "keywords": [
      "loại bỏ siêu dữ liệu pdf",
      "loại bỏ siêu dữ liệu",
      "quyền riêng tư pdf",
      "pdf ẩn danh"
    ],
    "description": "\n      <p>Loại bỏ siêu dữ liệu loại bỏ tất cả thuộc tính và siêu dữ liệu khỏi tệp PDF của bạn. Loại bỏ tên tác giả, ngày tạo, thông tin phần mềm và dữ liệu nhận dạng khác.</p>\n      <p>Cần thiết cho quyền riêng tư khi chia sẻ tài liệu hoặc khi siêu dữ liệu có thể tiết lộ thông tin nhạy cảm.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Loại bỏ siêu dữ liệu",
        "description": "Nhấp Loại bỏ để loại bỏ tất cả siêu dữ liệu."
      },
      {
        "step": 3,
        "title": "Tải xuống",
        "description": "Tải xuống PDF không có siêu dữ liệu."
      }
    ],
    "useCases": [
      {
        "title": "Bảo vệ quyền riêng tư",
        "description": "Loại bỏ thông tin cá nhân trước khi chia sẻ.",
        "icon": "shield"
      },
      {
        "title": "Tài liệu ẩn danh",
        "description": "Tạo tài liệu mà không có ghi công tác giả.",
        "icon": "user-x"
      },
      {
        "title": "Phân phối sạch",
        "description": "Phân phối tài liệu mà không có siêu dữ liệu nội bộ.",
        "icon": "send"
      }
    ],
    "faq": [
      {
        "question": "Siêu dữ liệu nào bị loại bỏ?",
        "answer": "Tác giả, tiêu đề, chủ đề, từ khóa, ngày tháng, người tạo và nhà sản xuất."
      },
      {
        "question": "Siêu dữ liệu XMP có bị loại bỏ không?",
        "answer": "Có, cả siêu dữ liệu tiêu chuẩn và XMP đều bị loại bỏ."
      },
      {
        "question": "Nội dung có bị ảnh hưởng không?",
        "answer": "Không, chỉ siêu dữ liệu bị loại bỏ; nội dung tài liệu không thay đổi."
      }
    ]
  },
  "change-permissions": {
    "title": "Thay đổi quyền",
    "metaDescription": "Sửa đổi quyền PDF. Kiểm soát truy cập in ấn, sao chép và chỉnh sửa.",
    "keywords": [
      "quyền pdf",
      "thay đổi truy cập pdf",
      "hạn chế pdf",
      "bảo mật pdf"
    ],
    "description": "\n      <p>Thay đổi quyền sửa đổi các điều khiển truy cập trên tài liệu PDF của bạn. Bật hoặc tắt quyền in ấn, sao chép, chỉnh sửa và chú thích.</p>\n      <p>Đặt mật khẩu chủ sở hữu để thực thi các hạn chế này. Người nhận có thể xem tài liệu nhưng bị giới hạn trong các hành động họ có thể thực hiện.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Đặt quyền",
        "description": "Bật hoặc tắt in ấn, sao chép, chỉnh sửa và chú thích."
      },
      {
        "step": 3,
        "title": "Áp dụng và tải xuống",
        "description": "Đặt mật khẩu chủ sở hữu và tải xuống PDF bị hạn chế."
      }
    ],
    "useCases": [
      {
        "title": "Ngăn sao chép",
        "description": "Tắt sao chép văn bản để bảo vệ nội dung.",
        "icon": "copy"
      },
      {
        "title": "Kiểm soát in ấn",
        "description": "Hạn chế hoặc cho phép in tài liệu.",
        "icon": "printer"
      },
      {
        "title": "Giới hạn chỉnh sửa",
        "description": "Ngăn chặn sửa đổi tài liệu.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Tôi có cần mật khẩu không?",
        "answer": "Mật khẩu chủ sở hữu là cần thiết để thực thi quyền."
      },
      {
        "question": "Quyền có thể bị xóa không?",
        "answer": "Có, với mật khẩu chủ sở hữu hoặc sử dụng công cụ Loại bỏ hạn chế."
      },
      {
        "question": "Tất cả trình đọc PDF có tương thích không?",
        "answer": "Hầu hết trình đọc PDF tôn trọng quyền, nhưng một số có thể không thực thi chúng."
      }
    ]
  },
  "pdf-to-docx": {
    "title": "PDF sang Word",
    "metaDescription": "Chuyển đổi PDF sang tài liệu Word có thể chỉnh sửa. Bảo toàn định dạng và bố cục.",
    "keywords": [
      "pdf sang word",
      "docx sang pdf",
      "chuyển đổi word",
      "trình chuyển đổi word",
      "microsoft word sang pdf"
    ],
    "description": "\n      <p>PDF sang Word chuyển đổi tài liệu PDF của bạn thành tệp Microsoft Word có thể chỉnh sửa (DOCX). Công cụ bảo toàn bố cục gốc, định dạng, hình ảnh và luồng văn bản.</p>\n      <p>Dễ dàng chỉnh sửa nội dung PDF của bạn trong Word mà không cần gõ lại. Hoàn hảo cho hợp đồng, báo cáo và sơ yếu lý lịch.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn bằng công nghệ WebAssembly, đảm bảo tài liệu của bạn không bao giờ rời khỏi thiết bị của bạn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Chuyển đổi",
        "description": "Chờ quá trình chuyển đổi hoàn thành."
      },
      {
        "step": 3,
        "title": "Tải xuống Word Doc",
        "description": "Tải xuống tệp DOCX có thể chỉnh sửa đầy đủ của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Chỉnh sửa hợp đồng",
        "description": "Chuyển đổi PDF hợp đồng sang Word để chỉnh sửa và sửa đổi.",
        "icon": "file-text"
      },
      {
        "title": "Cập nhật sơ yếu lý lịch",
        "description": "Cập nhật sơ yếu lý lịch PDF cũ bằng cách chuyển đổi chúng sang Word.",
        "icon": "user"
      },
      {
        "title": "Tái sử dụng nội dung",
        "description": "Trích xuất nội dung từ PDF báo cáo để sử dụng trong tài liệu khác.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Định dạng có được bảo toàn không?",
        "answer": "Có, công cụ cố gắng bảo toàn bố cục, phông chữ và hình ảnh một cách chính xác nhất có thể."
      },
      {
        "question": "Tôi có thể chuyển đổi PDF đã quét không?",
        "answer": "PDF đã quét sẽ được chuyển đổi dưới dạng hình ảnh trong Word trừ khi bạn sử dụng OCR trước."
      },
      {
        "question": "Nó có tương thích với Word không?",
        "answer": "Có, đầu ra là tệp .docx tiêu chuẩn tương thích với Microsoft Word và Google Docs."
      }
    ]
  },
  "deskew-pdf": {
    "title": "PDF nghiêng",
    "metaDescription": "Tự động làm thẳng trang PDF đã quét hoặc bị nghiêng. Khắc phục tài liệu bị lệch với độ chính xác góc phát hiện.",
    "keywords": [
      "văn bản pdf\ntập sách pdf",
      "làm thẳng pdf",
      "khắc phục quét lệch",
      "tự động xoay pdf",
      "sửa góc pdf"
    ],
    "description": "\n      <p>Deskew PDF tự động phát hiện và sửa chữa trang bị nghiêng hoặc lệch trong tài liệu PDF của bạn. Điều này thiết yếu cho tài liệu đã quét được đưa vào máy quét theo góc độ.</p>\n      <p>Công cụ sử dụng phân tích hình ảnh nâng cao để phát hiện góc xoay chính xác của mỗi trang và sửa chữa nó thành căn chỉnh dọc. Bạn có thể điều chỉnh ngưỡng độ nhạy và cài đặt DPI để kết quả tối ưu.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn bằng công nghệ WebAssembly, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF đã quét của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Định cấu hình cài đặt",
        "description": "Điều chỉnh độ nhạy ngưỡng và DPI nếu cần để phát hiện tốt hơn."
      },
      {
        "step": 3,
        "title": "Xử lý và tải xuống",
        "description": "Nhấp Deskew để làm thẳng trang và tải xuống PDF đã sửa chữa."
      }
    ],
    "useCases": [
      {
        "title": "Tài liệu đã quét",
        "description": "Khắc phục trang được quét theo góc từ máy cấp giấy tài liệu.",
        "icon": "scan"
      },
      {
        "title": "Quét di động",
        "description": "Sửa chữa ảnh bị nghiêng của tài liệu được chụp bằng điện thoại thông minh.",
        "icon": "smartphone"
      },
      {
        "title": "Khôi phục lưu trữ",
        "description": "Làm thẳng lưu trữ đã quét cũ để dễ đọc hơn.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Độ chính xác phát hiện góc là bao nhiêu?",
        "answer": "Công cụ có thể phát hiện và sửa chữa góc nhỏ đến 0.1 độ để căn chỉnh chính xác."
      },
      {
        "question": "Chất lượng văn bản có bị ảnh hưởng không?",
        "answer": "Quá trình deskew duy trì chất lượng văn bản trong khi xoay nội dung trang."
      },
      {
        "question": "Tôi có thể deskew chỉ trang cụ thể không?",
        "answer": "Công cụ xử lý tất cả trang nhưng chỉ sửa chữa những trang được phát hiện là bị lệch."
      }
    ]
  },
  "pdf-booklet": {
    "title": "Tạo booklet PDF",
    "metaDescription": "Sắp xếp bố cục booklet từ PDF để in. Sắp xếp trang cho ràng buộc saddle-stitch với nhiều tùy chọn lưới.",
    "keywords": [
      "",
      "trình tạo booklet",
      "in booklet",
      "khâu yên ngựa\nlịch",
      "áp đặt"
    ],
    "description": "\n      <p>Tạo booklet PDF sắp xếp trang PDF của bạn thành bố cục booklet sẵn sàng in, hoàn hảo để tạo brochure, zine, booklet và ấn phẩm saddle-stitched.</p>\n      <p>Chọn từ nhiều chế độ lưới (1x2, 2x2, 2x4, 4x4), kích thước giấy và tùy chọn định hướng. Công cụ tự động xử lý imposition trang cho thứ tự gấp chính xác.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Tải lên tài liệu PDF bạn muốn chuyển đổi thành booklet."
      },
      {
        "step": 2,
        "title": "Chọn bố cục",
        "description": "Chọn chế độ lưới, kích thước giấy, định hướng và tùy chọn xoay."
      },
      {
        "step": 3,
        "title": "Tạo và tải xuống",
        "description": "Tạo bố cục booklet và tải xuống để in."
      }
    ],
    "useCases": [
      {
        "title": "Brochure",
        "description": "Tạo brochure gấp sẵn từ tài liệu PDF tiêu chuẩn.",
        "icon": "book-open"
      },
      {
        "title": "Zine",
        "description": "Sản xuất zine tự xuất bản với imposition trang thích hợp.",
        "icon": "book"
      },
      {
        "title": "Chương trình sự kiện",
        "description": "Tạo booklet chương trình chuyên nghiệp cho sự kiện.",
        "icon": "calendar"
      }
    ],
    "faq": [
      {
        "question": "Ràng buộc saddle-stitch là gì?",
        "answer": "Saddle-stitch là phương pháp ràng buộc nơi các tờ gấp được lồng vào nhau và đóng ghim qua nếp gấp."
      },
      {
        "question": "Chế độ lưới nào tôi nên sử dụng?",
        "answer": "1x2 là tiêu chuẩn cho booklet. Sử dụng 2x2 hoặc lớn hơn để in nhiều trang để tiết kiệm giấy."
      },
      {
        "question": "Tôi có thể xem trước bố cục không?",
        "answer": "Có, công cụ cung cấp xem trước trực quan trước khi tạo booklet cuối cùng."
      }
    ]
  },
  "rasterize-pdf": {
    "title": "Rasterize PDF",
    "metaDescription": "Chuyển đổi trang PDF thành hình ảnh chất lượng cao. Xuất dưới dạng PNG, JPEG hoặc WebP với cài đặt DPI tùy chỉnh.",
    "keywords": [
      "rasterize pdf",
      "pdf sang hình ảnh",
      "pdf sang png",
      "pdf sang jpeg",
      "chuyển đổi trang pdf"
    ],
    "description": "\n      <p>Rasterize PDF chuyển đổi trang PDF của bạn thành hình ảnh raster chất lượng cao. Chọn từ định dạng đầu ra PNG, JPEG hoặc WebP với kiểm soát đầy đủ DPI và chất lượng.</p>\n      <p>Hoàn hảo để tạo hình thu nhỏ, đồ họa mạng xã hội hoặc lưu trữ nội dung PDF dưới dạng hình ảnh. Hỗ trợ chọn phạm vi trang và xử lý hàng loạt.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Định cấu hình đầu ra",
        "description": "Chọn DPI, định dạng đầu ra (PNG/JPEG/WebP), chất lượng và phạm vi trang."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Xử lý trang và tải xuống hình ảnh riêng lẻ hoặc dưới dạng kho lưu trữ ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Mạng xã hội",
        "description": "Chuyển đổi trang trình bày PDF sang hình ảnh để đăng mạng xã hội.",
        "icon": "share-2"
      },
      {
        "title": "Hình thu nhỏ",
        "description": "Tạo hình thu nhỏ xem trước cho tài liệu PDF.",
        "icon": "image"
      },
      {
        "title": "Xuất bản web",
        "description": "Chuyển đổi nội dung PDF sang định dạng hình ảnh thân thiện với web.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Tôi nên dùng DPI nào?",
        "answer": "72 DPI cho xem màn hình, 150 DPI cho tài liệu tiêu chuẩn, 300 DPI cho chất lượng in."
      },
      {
        "question": "Định dạng nào tốt nhất?",
        "answer": "PNG cho chất lượng/độ trong suốt, JPEG cho kích thước nhỏ, WebP cho web hiện đại."
      },
      {
        "question": "Tôi có thể chuyển đổi chỉ trang cụ thể không?",
        "answer": "Có, chỉ định phạm vi trang như \"1-5, 8, 10-15\" để chuyển đổi chỉ những trang đó."
      }
    ]
  },
  "markdown-to-pdf": {
    "title": "Markdown sang PDF",
    "metaDescription": "Chuyển đổi tệp Markdown thành tài liệu PDF được định dạng đẹp. Hỗ trợ GitHub Flavored Markdown và làm nổi bật cú pháp.",
    "keywords": [
      "markdown sang pdf",
      "md sang pdf",
      "chuyển đổi markdown",
      "gfm sang pdf",
      "trình chuyển đổi markdown"
    ],
    "description": "\n      <p>Markdown sang PDF chuyển đổi tệp Markdown của bạn thành tài liệu PDF được định dạng chuyên nghiệp. Hỗ trợ CommonMark và GitHub Flavored Markdown (GFM) bao gồm bảng, danh sách nhiệm vụ và khối mã.</p>\n      <p>Chọn từ nhiều chủ đề (sáng, tối, GitHub) và tùy chỉnh kích thước trang và lề. Khối mã được làm nổi bật cú pháp để dễ đọc hơn.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo nội dung của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp Markdown",
        "description": "Tải lên tệp .md hoặc .markdown của bạn."
      },
      {
        "step": 2,
        "title": "Chọn chủ đề",
        "description": "Chọn chủ đề trực quan và định cấu hình cài đặt trang."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Tạo PDF được định dạng và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Tài liệu",
        "description": "Chuyển đổi tệp README và tài liệu sang PDF có thể chia sẻ.",
        "icon": "file-text"
      },
      {
        "title": "Xuất ghi chú",
        "description": "Xuất ghi chú Markdown sang PDF để in hoặc chia sẻ.",
        "icon": "edit-3"
      },
      {
        "title": "Báo cáo",
        "description": "Tạo báo cáo PDF từ Markdown với định dạng chuyên nghiệp.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "GitHub Flavored Markdown có được hỗ trợ không?",
        "answer": "Có, bảng, danh sách nhiệm vụ, gạch ngang và các tính năng GFM khác được hỗ trợ."
      },
      {
        "question": "Tôi có thể tùy chỉnh định dạng không?",
        "answer": "Chọn từ chủ đề đặt sẵn hoặc thêm CSS tùy chỉnh để kiểm soát đầy đủ."
      },
      {
        "question": "Khối mã có được làm nổi bật không?",
        "answer": "Có, khối mã bao gồm làm nổi bật cú pháp cho các ngôn ngữ phổ biến."
      }
    ]
  },
  "email-to-pdf": {
    "title": "Email sang PDF",
    "metaDescription": "Chuyển đổi tệp email (.eml) sang tài liệu PDF. Bảo toàn định dạng, hình ảnh nội tuyến và tệp đính kèm.",
    "keywords": [
      "email sang pdf",
      "eml sang pdf",
      "chuyển đổi email",
      "trình chuyển đổi email",
      "lưu email dưới dạng pdf"
    ],
    "description": "\n      <p>Email sang PDF chuyển đổi tệp email (.eml) của bạn thành tài liệu PDF được định dạng tốt. Công cụ bảo toàn thông tin tiêu đề email, nội dung cơ thể, hình ảnh nội tuyến và liệt kê tệp đính kèm.</p>\n      <p>Tùy chỉnh tùy chọn đầu ra bao gồm kích thước trang, định dạng ngày tháng và có bao gồm CC/BCC và thông tin tệp đính kèm hay không.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo email của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp Email",
        "description": "Tải lên tệp email .eml của bạn."
      },
      {
        "step": 2,
        "title": "Định cấu hình tùy chọn",
        "description": "Đặt kích thước trang và chọn trường nào để bao gồm."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Chuyển đổi sang PDF và tải xuống kết quả."
      }
    ],
    "useCases": [
      {
        "title": "Hồ sơ pháp lý",
        "description": "Lưu trữ email quan trọng dưới dạng PDF để ghi nhận pháp lý.",
        "icon": "scale"
      },
      {
        "title": "Lưu trữ kinh doanh",
        "description": "Chuyển đổi thư tín kinh doanh sang PDF để lưu trữ hồ sơ.",
        "icon": "briefcase"
      },
      {
        "title": "Bảo quản bằng chứng",
        "description": "Lưu bằng chứng email ở định dạng PDF không thể chỉnh sửa.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Định dạng email nào được hỗ trợ?",
        "answer": "Hiện tại tệp .eml được hỗ trợ đầy đủ. Hỗ trợ MSG sẽ có sớm."
      },
      {
        "question": "Tệp đính kèm có được bao gồm không?",
        "answer": "Tên tệp đính kèm được liệt kê trong PDF. Tệp thực tế không được nhúng."
      },
      {
        "question": "Định dạng email có được bảo toàn không?",
        "answer": "Có, email HTML duy trì định dạng của chúng một cách chính xác nhất có thể."
      }
    ]
  },
  "cbz-to-pdf": {
    "title": "CBZ sang PDF",
    "metaDescription": "Chuyển đổi kho lưu trữ truyện tranh (CBZ) sang PDF. Bảo toàn thứ tự hình ảnh và chất lượng để truyện tranh kỹ thuật số.",
    "keywords": [
      "cbz sang pdf",
      "truyện tranh sang pdf",
      "chuyển đổi cbz",
      "trình chuyển đổi truyện tranh",
      "công cụ chuyển đổi cbz\ntòa nhà"
    ],
    "description": "\n      <p>CBZ sang PDF chuyển đổi tệp Kho lưu trữ Truyện tranh (CBZ) thành tài liệu PDF. Công cụ trích xuất tất cả hình ảnh từ kho lưu trữ CBZ và biên soạn chúng thành PDF trong khi duy trì thứ tự đọc chính xác.</p>\n      <p>Chọn từ nhiều tùy chọn kích thước trang bao gồm kích thước hình ảnh gốc hoặc kích thước truyện tranh tiêu chuẩn. Hoàn hảo để đọc truyện tranh trên thiết bị hỗ trợ PDF nhưng không hỗ trợ CBZ.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo truyện tranh của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp CBZ",
        "description": "Tải lên tệp kho lưu trữ truyện tranh .cbz của bạn."
      },
      {
        "step": 2,
        "title": "Chọn tùy chọn",
        "description": "Chọn kích thước trang và cài đặt chất lượng hình ảnh."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Chuyển đổi sang PDF và tải xuống truyện tranh của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Tương thích E-Reader",
        "description": "Chuyển đổi CBZ sang PDF cho e-reader chỉ hỗ trợ PDF.",
        "icon": "book"
      },
      {
        "title": "Lưu trữ truyện tranh",
        "description": "Tạo lưu trữ PDF của bộ sưu tập truyện tranh kỹ thuật số của bạn.",
        "icon": "archive"
      },
      {
        "title": "Chuẩn bị in ấn",
        "description": "Chuyển đổi truyện tranh kỹ thuật số sang PDF để in ấn.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Định dạng CBZ là gì?",
        "answer": "CBZ là kho lưu trữ ZIP chứa trang truyện tranh dưới dạng tệp hình ảnh, được đổi tên với phần mở rộng .cbz."
      },
      {
        "question": "Chất lượng hình ảnh có được bảo toàn không?",
        "answer": "Có, hình ảnh được nhúng ở chất lượng gốc trong PDF."
      },
      {
        "question": "Thư mục lồng nhau có được hỗ trợ không?",
        "answer": "Có, hình ảnh từ tất cả thư mục trong kho lưu trữ được trích xuất và sắp xếp."
      }
    ]
  },
  "pdf-to-pdfa": {
    "title": "PDF sang PDF/A",
    "metaDescription": "Chuyển đổi PDF sang định dạng lưu trữ PDF/A. Đảm bảo bảo quản tài liệu lâu dài với tiêu chuẩn ISO.",
    "keywords": [
      "pdf sang pdfa",
      "trình chuyển đổi pdfa",
      "lưu trữ pdf",
      "bảo quản pdf lâu dài",
      "lưu trữ pdf"
    ],
    "description": "\n      <p>PDF sang PDF/A chuyển đổi tài liệu PDF của bạn sang định dạng PDF/A, tiêu chuẩn ISO cho lưu trữ tài liệu lâu dài. PDF/A đảm bảo tài liệu sẽ có thể xem và tái tạo trong hàng thập kỷ.</p>\n      <p>Chọn từ PDF/A-1b (tuân thủ cơ bản), PDF/A-2b (khuyến nghị, hỗ trợ độ trong suốt), hoặc PDF/A-3b (cho phép tệp nhúng). Công cụ nhúng phông chữ và làm phẳng độ trong suốt khi cần.</p>\n      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Tải lên PDF bạn muốn chuyển đổi sang PDF/A."
      },
      {
        "step": 2,
        "title": "Chọn cấp PDF/A",
        "description": "Chọn cấp tuân thủ PDF/A-1b, PDF/A-2b hoặc PDF/A-3b."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Chuyển đổi sang PDF/A và tải xuống tài liệu lưu trữ."
      }
    ],
    "useCases": [
      {
        "title": "Lưu trữ pháp lý",
        "description": "Chuyển đổi tài liệu pháp lý sang PDF/A để lưu trữ lâu dài có thể chấp nhận tòa án.",
        "icon": "scale"
      },
      {
        "title": "Hồ sơ chính phủ",
        "description": "Tuân thủ yêu cầu lưu trữ chính phủ bằng PDF/A.",
        "icon": "building"
      },
      {
        "title": "Lưu trữ kinh doanh",
        "description": "Bảo quản tài liệu kinh doanh quan trọng để truy cập trong tương lai.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Cấp PDF/A nào tôi nên sử dụng?",
        "answer": "PDF/A-2b được khuyến nghị cho hầu hết sử dụng. Sử dụng 1b cho tương thích tối đa hoặc 3b nếu bạn cần tệp nhúng."
      },
      {
        "question": "Điều gì làm PDF/A khác biệt?",
        "answer": "PDF/A nhúng phông chữ, vô hiệu hóa mã hóa và đảm bảo tất cả phần tử tự chứa cho xem trong tương lai."
      },
      {
        "question": "Tôi có thể chuyển đổi từ PDF/A không?",
        "answer": "Tệp PDF/A là PDF tiêu chuẩn và có thể mở bình thường. Các tính năng lưu trữ thêm hạn chế, không phải giới hạn."
      }
    ]
  },
  "font-to-outline": {
    "title": "Phông chữ sang Outline",
    "metaDescription": "Chuyển đổi phông chữ PDF sang đường viền vector. Đảm bảo tương thích khi phông chữ có thể không khả dụng.",
    "keywords": [
      "phông chữ sang outline",
      "outline phông chữ",
      "chuyển đổi phông chữ",
      "văn bản vector",
      "tương thích phông chữ"
    ],
    "description": "\n      <p>Phông chữ sang Outline chuyển đổi tất cả văn bản trong PDF của bạn thành đường dẫn vector (outline). Điều này đảm bảo tài liệu của bạn trông chính xác giống nhau trên bất kỳ hệ thống nào, ngay cả khi phông chữ gốc không được cài đặt.</p>\n      <p>Điều này thiết yếu cho chuẩn bị in ấn, đảm bảo đồ họa hiển thị chính xác và tránh vấn đề cấp phép phông chữ khi chia sẻ tài liệu.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Tải lên PDF chứa phông chữ bạn muốn chuyển đổi."
      },
      {
        "step": 2,
        "title": "Định cấu hình tùy chọn",
        "description": "Đặt DPI cho rasterization nếu cần cho phông chữ phức tạp."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Chuyển đổi phông chữ sang outline và tải xuống kết quả."
      }
    ],
    "useCases": [
      {
        "title": "Chuẩn bị in ấn",
        "description": "Đảm bảo phông chữ hiển thị chính xác tại nhà in thương mại.",
        "icon": "printer"
      },
      {
        "title": "Chia sẻ đa nền tảng",
        "description": "Chia sẻ tài liệu trông giống hệt nhau trên mọi thiết bị.",
        "icon": "share-2"
      },
      {
        "title": "Cấp phép phông chữ",
        "description": "Loại bỏ nhúng phông chữ để tránh vấn đề cấp phép.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Tôi vẫn có thể chọn văn bản sau khi chuyển đổi không?",
        "answer": "Không, văn bản outline trở thành đồ họa vector và không còn có thể tìm kiếm hoặc chọn được."
      },
      {
        "question": "Kích thước tệp có tăng không?",
        "answer": "Kích thước tệp có thể tăng vì vector có thể lớn hơn dữ liệu phông chữ, đặc biệt cho phông chữ phức tạp."
      },
      {
        "question": "Điều này có thể đảo ngược không?",
        "answer": "Không, giữ bản sao của bản gốc nếu bạn cần văn bản có thể chỉnh sửa."
      }
    ]
  },
  "extract-tables": {
    "title": "Trích xuất bảng từ PDF",
    "metaDescription": "Phát hiện và trích xuất bảng từ tài liệu PDF. Xuất sang định dạng JSON, Markdown hoặc CSV.",
    "keywords": [
      "trích xuất bảng",
      "trích xuất bảng pdf",
      "pdf sang csv",
      "pdf sang excel",
      "phát hiện bảng"
    ],
    "description": "\n      <p>Trích xuất bảng từ PDF phát hiện dữ liệu dạng bảng trong tài liệu PDF của bạn và xuất ở định dạng có cấu trúc. Chọn JSON để tích hợp dữ liệu, Markdown cho tài liệu hoặc CSV cho bảng tính.</p>\n      <p>Công cụ sử dụng thuật toán phát hiện thông minh để xác định cấu trúc bảng ngay cả trong tài liệu phức tạp. Chỉ định phạm vi trang và điều chỉnh tham số phát hiện để kết quả tối ưu.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Tải lên PDF chứa bảng bạn muốn trích xuất."
      },
      {
        "step": 2,
        "title": "Định cấu hình phát hiện",
        "description": "Đặt phạm vi trang và ngưỡng cột/hàng tối thiểu."
      },
      {
        "step": 3,
        "title": "Xuất và tải xuống",
        "description": "Chọn định dạng đầu ra (JSON/Markdown/CSV) và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Phân tích dữ liệu",
        "description": "Trích xuất dữ liệu bảng để phân tích trong bảng tính hoặc cơ sở dữ liệu.",
        "icon": "bar-chart"
      },
      {
        "title": "Xử lý báo cáo",
        "description": "Kéo bảng từ báo cáo PDF để xử lý thêm.",
        "icon": "file-text"
      },
      {
        "title": "Tài liệu",
        "description": "Chuyển đổi bảng PDF sang Markdown cho tài liệu kỹ thuật.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Nó có thể phát hiện bảng phức tạp không?",
        "answer": "Công cụ hoạt động tốt nhất với bảng lưới đơn giản. Ô được hợp nhất phức tạp có thể cần điều chỉnh thủ công."
      },
      {
        "question": "Điều gì nếu không tìm thấy bảng?",
        "answer": "Thử điều chỉnh ngưỡng cột/hàng tối thiểu hoặc kiểm tra xem PDF có chứa cấu trúc bảng thực tế không."
      },
      {
        "question": "Tôi có thể trích xuất từ trang cụ thể không?",
        "answer": "Có, chỉ định phạm vi trang để giới hạn trích xuất ở các trang nhất định."
      }
    ]
  },
  "ocg-manager": {
    "title": "Trình quản lý lớp PDF (OCG)",
    "metaDescription": "Quản lý lớp PDF (Nhóm nội dung tùy chọn). Xem, bật/tắt, thêm, xóa và đổi tên lớp trong tài liệu PDF của bạn.",
    "keywords": [
      "lớp pdf",
      "trình quản lý ocg",
      "nhóm nội dung tùy chọn",
      "khả năng hiển thị lớp pdf",
      "quản lý lớp pdf"
    ],
    "description": "\n      <p>Trình quản lý lớp PDF cho phép bạn xem và quản lý Nhóm nội dung tùy chọn (OCG) trong tài liệu PDF của mình. Lớp OCG được sử dụng trong bản vẽ kỹ thuật, bản đồ và tài liệu phức tạp để tổ chức nội dung thành lớp có thể bật/tắt.</p>\n      <p>Xem tất cả lớp trong PDF của bạn, bật/tắt khả năng hiển thị, thêm lớp mới, xóa lớp không mong muốn hoặc đổi tên lớp hiện có. Công cụ này thiết yếu để làm việc với PDF có lớp như kế hoạch kiến trúc, xuất CAD và tài liệu sẵn sàng in.</p>\n      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF của bạn",
        "description": "Tải lên tệp PDF có lớp (OCG) hoặc tệp bạn muốn thêm lớp vào."
      },
      {
        "step": 2,
        "title": "Xem lớp",
        "description": "Công cụ tự động liệt kê tất cả lớp được tìm thấy trong tài liệu với trạng thái khả năng hiển thị của chúng."
      },
      {
        "step": 3,
        "title": "Quản lý lớp",
        "description": "Bật/tắt khả năng hiển thị lớp, đổi tên lớp, thêm lớp mới hoặc xóa lớp không mong muốn."
      },
      {
        "step": 4,
        "title": "Lưu và tải xuống",
        "description": "Tải xuống PDF đã sửa đổi của bạn với thay đổi lớp được áp dụng."
      }
    ],
    "useCases": [
      {
        "title": "Bản vẽ kỹ thuật",
        "description": "Quản lý lớp trong xuất CAD để hiển thị/ẩn kích thước, chú thích hoặc chế độ xem khác nhau.",
        "icon": "ruler"
      },
      {
        "title": "Chỉnh sửa bản đồ",
        "description": "Bật/tắt các lớp bản đồ khác nhau như địa hình, đường phố và nhãn để in bản đồ tùy chỉnh.",
        "icon": "map"
      },
      {
        "title": "Chuẩn bị in ấn",
        "description": "Chuẩn bị PDF có lớp để in bằng cách bật/tắt lớp thích hợp cho các phiên bản khác nhau.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Lớp PDF (OCG) là gì?",
        "answer": "Nhóm nội dung tùy chọn (OCG) là lớp trong PDF có thể được hiển thị hoặc ẩn. Chúng thường được thêm trong quá trình tạo PDF từ phần mềm thiết kế hoặc CAD."
      },
      {
        "question": "Tại sao PDF của tôi hiển thị không có lớp?",
        "answer": "Không phải tất cả PDF chứa lớp. Lớp thường được thêm trong quá trình tạo PDF từ phần mềm thiết kế hoặc CAD."
      },
      {
        "question": "Thay đổi khả năng hiển thị lớp có ảnh hưởng đến nội dung gốc không?",
        "answer": "Thay đổi khả năng hiển thị lớp chỉ ảnh hưởng đến nội dung được hiển thị hoặc in. Nội dung thực tế vẫn còn trong tài liệu."
      }
    ]
  },
  "pdf-reader": {
    "title": "Trình đọc PDF",
    "metaDescription": "Trình đọc PDF trực tuyến miễn phí. Xem, điều hướng, thu phóng, xoay và in tài liệu PDF trực tiếp trong trình duyệt của bạn.",
    "keywords": [
      "trình đọc pdf",
      "trình xem pdf",
      "xem pdf trực tuyến",
      "đọc pdf",
      "trình xem pdf trình duyệt"
    ],
    "description": "\n      <p>Trình đọc PDF là công cụ xem PDF toàn diện cho phép bạn đọc và điều hướng tài liệu PDF trực tiếp trong trình duyệt của mình. Không cần cài đặt phần mềm - chỉ cần tải lên PDF của bạn và bắt đầu đọc.</p>\n      <p>Điều hướng giữa các trang, thu phóng vào và ra, xoay chế độ xem và sử dụng chế độ toàn màn hình để đọc không bị gián đoạn. Bạn cũng có thể in tài liệu hoặc tải xuống chúng để truy cập ngoại tuyến.</p>\n      <p>Tất cả xem diễn ra cục bộ trong trình duyệt của bạn. Tài liệu của bạn không được tải lên bất kỳ máy chủ nào, đảm bảo quyền riêng tư hoàn toàn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Mở PDF của bạn",
        "description": "Nhấp để tải lên hoặc kéo và thả tệp PDF để mở trong trình đọc."
      },
      {
        "step": 2,
        "title": "Điều hướng trang",
        "description": "Sử dụng điều khiển trang để đi đến trang trước hoặc trang tiếp theo, hoặc nhảy đến số trang cụ thể."
      },
      {
        "step": 3,
        "title": "Điều chỉnh chế độ xem",
        "description": "Thu phóng vào hoặc ra, xoay chế độ xem hoặc nhập chế độ toàn màn hình để đọc thoải mái."
      },
      {
        "step": 4,
        "title": "In hoặc tải xuống",
        "description": "In tài liệu hoặc tải xuống để truy cập ngoại tuyến khi cần."
      }
    ],
    "useCases": [
      {
        "title": "Xem xét tài liệu",
        "description": "Xem nhanh tài liệu PDF mà không cần cài đặt bất kỳ phần mềm nào.",
        "icon": "book-open"
      },
      {
        "title": "Đọc di động",
        "description": "Đọc tài liệu PDF trên bất kỳ thiết bị nào có trình duyệt web.",
        "icon": "smartphone"
      },
      {
        "title": "Xem trước nhanh",
        "description": "Xem trước PDF trước khi quyết định tải xuống hoặc in chúng.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Tài liệu của tôi có an toàn không?",
        "answer": "Có, tài liệu của bạn được xử lý hoàn toàn trong trình duyệt của bạn và không được tải lên bất kỳ máy chủ nào."
      },
      {
        "question": "Tôi có thể chú thích hoặc chỉnh sửa PDF không?",
        "answer": "Công cụ này chỉ dành cho xem. Sử dụng công cụ Ký PDF hoặc Chú thích PDF của chúng tôi để chỉnh sửa."
      },
      {
        "question": "Nó có hoạt động trên thiết bị di động không?",
        "answer": "Có, trình đọc PDF hoạt động trên tất cả thiết bị có trình duyệt web hiện đại."
      }
    ]
  },
  "form-logic-designer": {
    "title": "Logic biểu mẫu",
    "metaDescription": "Tạo quy tắc biểu mẫu PDF bằng trình thiết kế trực quan. Kết nối các trường và thêm logic tính toán và xác thực tương tác.",
    "keywords": [
      "logic biểu mẫu PDF",
      "nhúng AcroJS",
      "dòng nút",
      "PDF tương tác",
      "phụ thuộc trường"
    ],
    "description": "\n        <p>Trình Thiết Kế Logic Biểu Mẫu Tương Tác là một công cụ tiên phong lấp đầy khoảng trống lớn trong các tính năng PDF: tạo các trường hoạt động, phản hồi thay vì các biểu mẫu phẳng, tĩnh.</p>\n        <p>Thông qua khung hình trực quan của chúng tôi với các \"nút giả kính phát sáng\" (được xây dựng trên React Flow), các trường biểu mẫu được biểu diễn dưới dạng các mô-đun được kết nối. Bạn có thể kéo các liên kết để xác định mối quan hệ: ví dụ: khi một hộp kiểm được tích ➜ kích hoạt một ô nhập văn bản ➜ tự động tính toán các giá trị và cập nhật trường tổng số.</p>\n        <p>Sau khi được thiết kế, công cụ AcroJS sẽ biên dịch logic thành Acrobat JavaScript chính thức và nhúng nó vào từ điển '/AA' (Hành động bổ sung) của AcroForm. Các hành vi tương tác sau đó được thực thi trực tiếp bên trong bất kỳ trình đọc PDF tiêu chuẩn nào.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải Lên PDF Tương Tác",
        "description": "Cung cấp tệp PDF đã có sẵn các trường biểu mẫu hoạt động (AcroForm)."
      },
      {
        "step": 2,
        "title": "Thiết Lập Logic Trên Khung Hình",
        "description": "Kết nối các trường dưới dạng nút. Liên kết các sự kiện đầu ra (thay đổi, mất tập trung) với các hành động đích (hiển thị, ẩn, tính toán, vô hiệu hóa)."
      },
      {
        "step": 3,
        "title": "Biên Dịch và Nhúng",
        "description": "Nhúng logic JavaScript đã biên dịch vào từ điển PDF và lưu tài liệu thông minh cuối cùng."
      }
    ],
    "useCases": [
      {
        "title": "Hợp Đồng Thương Mại Thông Minh",
        "description": "Hiển thị hoặc ẩn các trường nhập bổ sung một cách linh hoạt dựa trên các điều khoản đã chọn của khách hàng.",
        "icon": "file-signature"
      },
      {
        "title": "Biểu Mẫu Chi Phí Tự Động",
        "description": "Cộng nhiều dòng chi phí và tính thuế một cách linh hoạt mà không cần tính toán thủ công.",
        "icon": "calculator"
      },
      {
        "title": "Bảng Câu Hỏi Tương Tác",
        "description": "Bỏ qua các câu hỏi không liên quan dựa trên các câu trả lời trước đó, mang lại trải nghiệm điền trên thiết bị di động gọn gàng hơn.",
        "icon": "form-input"
      }
    ],
    "faq": [
      {
        "question": "Tôi có cần một PDF có các trường sẵn có không?",
        "answer": "Có. Công cụ này được thiết kế để liên kết các quy tắc logic với các trường hiện có. Nếu PDF của bạn không có các trường tương tác, trước tiên hãy sử dụng công cụ Tạo Biểu Mẫu của chúng tôi để thêm các ô nhập và hộp kiểm."
      },
      {
        "question": "Logic này có chạy trên mọi trình đọc PDF không?",
        "answer": "Nó chạy trên tất cả các trình đọc PDF tuân thủ tiêu chuẩn Adobe PDF và hỗ trợ Acrobat JavaScript (như Adobe Acrobat Reader, Foxit Reader và các trình duyệt web lớn). Trình đọc di động tối giản có thể chỉ hỗ trợ các hành động cơ bản."
      },
      {
        "question": "Điều này có ảnh hưởng đến việc in giấy không?",
        "answer": "Hoàn toàn không. Các tập lệnh được nhúng chỉ chạy trên màn hình trong quá trình điền biểu mẫu. Khi in, trạng thái hiện tại của các trường được in tĩnh mà không có bất kỳ hình ảnh hiển thị nút nào."
      }
    ]
  },
  "global-invoice-parser": {
    "title": "Công cụ chuyển đổi số tiền hóa đơn PDF",
    "metaDescription": "Trích xuất số tiền hóa đơn từ tệp PDF, chuyển đổi tổng số giữa các loại tiền tệ và thêm bản tóm tắt tính toán vào tài liệu.",
    "keywords": [
      "dịch hóa đơn",
      "chuyển đổi tiền tệ hóa đơn",
      "tính tỷ giá pdf",
      "đóng dấu tiền tệ bản địa",
      "công cụ hóa đơn toàn cầu"
    ],
    "description": "\n        <p>Trình Dịch Hóa Đơn Toàn Cầu mang lại sự rõ ràng tối đa cho các nhóm tài chính quốc tế và người mua toàn cầu.</p>\n        <p>Xử lý hóa đơn bằng nhiều loại tiền tệ ($, €, ¥) thường liên quan đến các phép tính thủ công tẻ nhạt. Công cụ này cho phép <strong>dịch nhãn tại chỗ và chuyển đổi tỷ giá hối đoái theo thời gian thực</strong>.</p>\n        <p>Nó quét tài liệu để tìm tổng giá tiền, thực hiện các phép tính dựa trên điểm chuẩn tiền tệ và đóng dấu vật lý một sổ cái tỷ giá hối đoái giả kính bán trong suốt thanh lịch ở lề trang. Nó hiển thị với hiệu ứng hình ảnh số vòng quay máy đánh bạc tuyệt đẹp, mang lại sự kiểm soát tuyệt đối cho việc lập hóa đơn toàn cầu.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải Lên Hóa Đơn PDF",
        "description": "Nhập bất kỳ hóa đơn nào được lập hóa đơn bằng ngoại tệ (ví dụ: USD, EUR, JPY)."
      },
      {
        "step": 2,
        "title": "Chọn Tiền Tệ Bản Địa",
        "description": "Chọn tiền tệ bản địa của bạn (ví dụ: VND) và chỉ định tỷ giá tùy chỉnh hoặc thời gian thực."
      },
      {
        "step": 3,
        "title": "Áp Dụng Dấu Sổ Cái",
        "description": "Nhấp vào thực thi để phủ dấu sổ cái tỷ giá hối đoái sẵn sàng cho kế toán."
      }
    ],
    "useCases": [
      {
        "title": "Hoàn Tác Chi Phí Công Tác Nước Ngoài",
        "description": "Chuyển đổi hóa đơn du lịch sang tiền tệ bản địa và đóng dấu chi tiết chuyển đổi, đơn giản hóa quy trình làm việc kế toán.",
        "icon": "plane"
      },
      {
        "title": "Kiểm Toán Mua Sắm Xuyên Biên Giới",
        "description": "Dịch các cột hóa đơn và cô lập chi phí thực tế của hàng hóa thương mại điện tử.",
        "icon": "credit-card"
      },
      {
        "title": "Ghi Sổ Doanh Nghiệp Quốc Tế",
        "description": "Đóng dấu sổ cái chuyển đổi nhất quán trên các hóa đơn của công ty để hợp lý hóa các cuộc kiểm toán cuối năm.",
        "icon": "folder-open"
      }
    ],
    "faq": [
      {
        "question": "Làm thế nào để phát hiện số tiền hóa đơn?",
        "answer": "Nó quét các luồng ký tự để tìm các ký hiệu tiền tệ và phân tích các tiêu đề ngữ nghĩa như \"Total\" hoặc \"Due\" để xác định tổng số tiền cuối cùng của hóa đơn."
      },
      {
        "question": "Tỷ giá hối đoái có được tìm nạp theo thời gian thực không?",
        "answer": "Yes. Theo mặc định, nó truy xuất tỷ giá cơ sở từ các API tài chính tiêu chuẩn. Bạn cũng có thể chỉ định tỷ giá tùy chỉnh cho các cuộc kiểm toán nội bộ."
      },
      {
        "question": "Dấu được đóng có che khuất các chi tiết hóa đơn quan trọng không?",
        "answer": "Công cụ quét lề trang để tìm vị trí tối ưu. Dấu có màu bán trong suốt, căn chỉnh trang nhã với bố cục của bạn."
      }
    ]
  },
  "pdf-to-cbz": {
    "title": "PDF sang CBZ",
    "metaDescription": "Chuyển đổi tệp PDF sang kho lưu trữ truyện tranh CBZ. Giữ nguyên thứ tự và chất lượng hình ảnh.",
    "keywords": [
      "pdf sang cbz",
      "chuyển đổi cbz",
      "truyện tranh pdf"
    ],
    "description": "<p>PDF to CBZ được thiết kế tùy chỉnh dành cho những người đam mê truyện tranh và nhà lưu trữ sách điện tử kỹ thuật số. Nó hiển thị mọi trang trong các tập PDF của bạn thành đồ họa dạng raster có độ trung thực cao và biên dịch chúng thành gói ZIP Truyện tranh (.cbz) tiêu chuẩn.</p>\n      <p>Để loại bỏ việc quét thủ công gây khó chịu trong các hệ thống như Calibre, Komga, Kavita hoặc CDisplayEx, bộ xử lý sẽ tự động tạo và đưa cả tệp <strong>ComicInfo.xml</strong> và <strong>metadata.opf</strong> vào bên trong, đồng thời ghi trực tiếp tải trọng <strong>ComicBookInfo JSON</strong> được tiêu chuẩn hóa vào siêu dữ liệu nhận xét tệp ZIP.</p>\n      <p>Bao gồm các thanh trượt cấu hình hoàn chỉnh cho chất lượng nén hình ảnh, tỷ lệ kích thước trang, nút chuyển đổi đọc bố cục từ phải sang trái (chế độ Manga) và lọc màu thang độ xám đen trắng.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên bản PDF truyện tranh",
        "description": "Kéo và thả tệp PDF truyện tranh, sách nghệ thuật hoặc truyện tranh chính của bạn."
      },
      {
        "step": 2,
        "title": "Nhập siêu dữ liệu truyện tranh",
        "description": "Điền vào các trường Bộ sách, Tập, Tiêu đề, Người viết và Nhà xuất bản, đồng thời chuyển đổi bố cục hoặc tối ưu hóa thang độ xám."
      },
      {
        "step": 3,
        "title": "Biên dịch và tải xuống",
        "description": "Nhấp vào Chuyển đổi để biên dịch và truy xuất tệp .cbz giàu siêu dữ liệu của bạn, sẵn sàng ngay lập tức cho Calibre."
      }
    ],
    "useCases": [
      {
        "title": "Bao bì truyện tranh ngược dòng",
        "description": "Chuyển đổi sách PDF được quét thô thành tệp truyện tranh CBZ nhỏ gọn, tuân thủ tiêu chuẩn mà người quản lý thư viện truyện tranh có thể dễ dàng quét được.",
        "icon": "book"
      },
      {
        "title": "Tích hợp tầm cỡ không cần nỗ lực",
        "description": "Lược đồ siêu dữ liệu.opf tích hợp sẵn cho phép Calibre tìm nạp và phân loại các vấn đề về người sáng tạo cũng như khối lượng mà không cần tra cứu thủ công.",
        "icon": "database"
      },
      {
        "title": "Cải tiến màn hình E-Ink",
        "description": "Lọc trước các kênh màu đồ họa thành thang độ xám có độ tương phản cao khi biên dịch, tăng cường làm mới hình ảnh và độ rõ nét trên màn hình E-ink đồng thời tiết kiệm dung lượng.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Tệp .cbz là gì?",
        "answer": "Tệp CBZ là định dạng chứa kho lưu trữ chuyên dụng dành cho loạt truyện tranh. Nó được định dạng nội bộ dưới dạng gói ZIP chứa hình ảnh trang được đánh số tuần tự cùng với các tệp XML siêu dữ liệu cấu trúc."
      },
      {
        "question": "Siêu dữ liệu tương thích như thế nào?",
        "answer": "Chúng tôi biên dịch và nhúng Nhận xét Tệp ComicInfo.xml, siêu dữ liệu.opf và Tệp ZIP trong một lần chuyển. Điều này đảm bảo sự tuân thủ tuyệt đối trên nhiều hệ sinh thái truyện tranh và sách điện tử."
      },
      {
        "question": "Tại sao nên sử dụng chế độ Thang độ xám?",
        "answer": "Nếu bạn đọc trên đầu đọc E-ink thang độ xám (như Kindle hoặc Kobo), việc biên dịch trực tiếp trong Grayscale sẽ giảm hiện tượng bóng mờ giả tạo, mang lại mức độ tương phản vượt trội và thu nhỏ kích thước tệp CBZ cuối cùng."
      }
    ]
  },
  "overlay-pdf": {
    "title": "Đè chồng PDF",
    "metaDescription": "Đè chồng hai trang PDF thành một trang duy nhất. Lý tưởng cho việc chèn con dấu, hình nền và hình mờ.",
    "keywords": [
      "đè chồng pdf",
      "pdf overlay",
      "chèn con dấu pdf"
    ],
    "description": "<p>PDF lớp phủ cho phép bạn xếp lớp các trang của một tài liệu PDF lên trên hoặc bên dưới một tài liệu PDF khác. Nó hoàn hảo để áp dụng tiêu đề thư, thêm lưới nền, đóng dấu hình mờ hoặc kết hợp các bản nháp bố cục với nhau.</p>\n      <p>Hỗ trợ cả chế độ Lớp phủ (lớp nằm trên cùng) và chế độ Lớp phủ (lớp nằm bên dưới). Chỉ định phạm vi trang mục tiêu tùy chỉnh hoặc lặp lại các tài liệu lớp phủ ngắn hơn để tự động bao phủ toàn bộ tệp cơ sở.</p>\n      <p>Tất cả quá trình xử lý được thực hiện hoàn toàn bên trong trình duyệt web của bạn cục bộ, đảm bảo tính bảo mật và quyền riêng tư dữ liệu hoàn toàn.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên bản PDF chính",
        "description": "Kéo và thả tài liệu PDF cơ sở chính của bạn."
      },
      {
        "step": 2,
        "title": "Tải lên lớp PDF",
        "description": "Cung cấp tài liệu lớp phủ/lớp lót hoạt động như lớp."
      },
      {
        "step": 3,
        "title": "Định cấu hình phân lớp",
        "description": "Chọn chế độ lớp phủ hoặc lớp lót, chỉ định phạm vi trang và bật tính năng lặp trang."
      },
      {
        "step": 4,
        "title": "Biên dịch và tải xuống",
        "description": "Nhấp vào Biên dịch để xử lý và tải xuống bản PDF kết quả được xếp lớp."
      }
    ],
    "useCases": [
      {
        "title": "Tiêu đề thư công ty",
        "description": "Xếp nội dung hóa đơn lên trên các mẫu tiêu đề thư tiêu chuẩn của công ty.",
        "icon": "file-text"
      },
      {
        "title": "Hình mờ & Con dấu",
        "description": "Phủ tem bảo mật, con dấu chữ ký hoặc hình nền trên các tài liệu.",
        "icon": "shield"
      },
      {
        "title": "Vẽ bản thiết kế",
        "description": "Kết hợp các kiến ​​trúc phác thảo hoặc lưới bố cục bên dưới các khối văn bản.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Sự khác biệt giữa Lớp phủ và Lớp lót là gì?",
        "answer": "Lớp phủ đặt lớp phụ lên trên nội dung chính của bạn. Lớp lót đặt nó ở dưới cùng, hoạt động như một mẫu nền."
      },
      {
        "question": "Tôi có thể lặp lại lớp phủ không?",
        "answer": "Có, nếu lớp PDF ngắn hơn tài liệu cơ sở, việc bật Vòng lặp sẽ xoay vòng nó (ví dụ: trang 1, 2, 1, 2) để bao phủ tất cả các trang cơ sở."
      },
      {
        "question": "Phạm vi trang có được hỗ trợ không?",
        "answer": "Có, bạn có thể nhắm mục tiêu các trang cụ thể bằng cách sử dụng cú pháp phạm vi, chẳng hạn như \"1-5\", \"lẻ\", \"chẵn\" hoặc danh sách được phân tách bằng dấu phẩy."
      }
    ]
  },
  "timestamp-pdf": {
    "title": "Dấu thời gian PDF cục bộ",
    "metaDescription": "Công cụ này tạo dấu thời gian cục bộ tự ký bằng đồng hồ thiết bị. Công cụ không yêu cầu hoặc xác minh dấu thời gian từ TSA đã chọn.",
    "keywords": [
      "Dấu thời gian PDF cục bộ",
      "PDF",
      "Giờ thiết bị"
    ],
    "description": "<p>Chọn PDF để thêm dấu thời gian cục bộ.</p><p>Công cụ này tạo dấu thời gian cục bộ tự ký bằng đồng hồ thiết bị. Công cụ không yêu cầu hoặc xác minh dấu thời gian từ TSA đã chọn.</p><p>Việc xử lý diễn ra trong trình duyệt; tài liệu và mã băm không được gửi đến TSA.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải PDF lên",
        "description": "Chọn PDF để thêm dấu thời gian cục bộ."
      },
      {
        "step": 2,
        "title": "Tên cơ quan đã chọn",
        "description": "Chọn tên cho chữ ký cục bộ. Tên này không tạo kết nối với TSA."
      },
      {
        "step": 3,
        "title": "Thêm dấu thời gian cục bộ",
        "description": "Xử lý tệp, xem kết quả rồi tải PDF xuống."
      }
    ],
    "useCases": [
      {
        "title": "Bản nháp đang làm việc",
        "description": "Giữ một bản sao tài liệu có ngày giờ cục bộ.",
        "icon": "file-text"
      },
      {
        "title": "Lưu trữ cá nhân",
        "description": "Lưu bản sao có dấu thời gian để tham khảo cá nhân.",
        "icon": "archive"
      },
      {
        "title": "Kiểm tra chữ ký",
        "description": "Kiểm tra chữ ký đã tạo và siêu dữ liệu trong trình đọc PDF.",
        "icon": "search"
      }
    ],
    "faq": [
      {
        "question": "Dấu thời gian có được xác minh độc lập không?",
        "answer": "Công cụ này tạo dấu thời gian cục bộ tự ký bằng đồng hồ thiết bị. Công cụ không yêu cầu hoặc xác minh dấu thời gian từ TSA đã chọn."
      },
      {
        "question": "Tôi có cần tải chứng chỉ số lên không?",
        "answer": "Không. Công cụ tạo một chứng chỉ cục bộ tự ký cho thao tác này."
      },
      {
        "question": "Đồng hồ nào cung cấp thời gian?",
        "answer": "Thời gian lấy từ đồng hồ thiết bị và không được xác minh độc lập."
      }
    ]
  },
  "add-page-labels": {
    "title": "Thêm nhãn trang",
    "metaDescription": "Thiết lập nhãn trang tùy chỉnh (ví dụ: I, II cho lời mở đầu, 1, 2 cho nội dung). Cải thiện điều hướng trình đọc.",
    "keywords": [
      "nhãn trang pdf",
      "đánh số trang logic",
      "điều hướng pdf"
    ],
    "description": "<p>Thêm Nhãn Trang cho phép bạn đưa siêu dữ liệu ghi nhãn trang tùy chỉnh (/PageLabels) vào từ điển Danh mục gốc của tệp PDF. Điều này tùy chỉnh các nhãn được hiển thị trong thanh bên điều hướng trình đọc PDF chuyên nghiệp và bảng nhảy số trang trên cùng (ví dụ: sử dụng chữ số La Mã cho phần đầu, chuỗi thập phân cho nội dung chính hoặc tiền tố tùy chỉnh như A-0, A-1 cho các phần phụ kỹ thuật).</p>\n      <p>Hỗ trợ kết hợp nhiều quy tắc tùy chỉnh một cách liền mạch. Điều quan trọng là chúng tôi đã xây dựng một <strong>thuật toán cắt phạm vi rời rạc</strong> được tối ưu hóa cao: ngay cả khi bạn khai báo các mẫu xen kẽ phức tạp (ví dụ: kiểu trang lẻ A, kiểu trang chẵn B), công cụ sẽ phân tích và soạn thảo các ranh giới một cách tinh tế để đảm bảo hiển thị tuân thủ tiêu chuẩn phù hợp mà không làm rò rỉ định dạng vào các trang chưa được ánh xạ.</p>\n      <p>Mọi thao tác được xử lý hoàn toàn bên trong hộp cát trình duyệt cục bộ của bạn, đảm bảo quyền riêng tư dữ liệu tuyệt đối.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tài liệu PDF",
        "description": "Cung cấp tài liệu PDF mục tiêu mà bạn muốn gắn nhãn."
      },
      {
        "step": 2,
        "title": "Định cấu hình quy tắc ghi nhãn",
        "description": "Thêm một hoặc nhiều quy tắc chỉ định phạm vi trang (ví dụ: \"1-5\", \"lẻ\" hoặc danh sách được phân tách bằng dấu phẩy), tiền tố, kiểu và trình tự bắt đầu."
      },
      {
        "step": 3,
        "title": "Xem trước và tải xuống",
        "description": "Xem lại bản xem trước danh sách nhãn trang trực tiếp bên dưới, sau đó biên dịch và tải xuống tài liệu PDF cập nhật của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Định dạng luận văn học thuật",
        "description": "Đặt chữ số La Mã viết thường (i, ii, iii) cho phần mở đầu và chuyển sang số thập phân cho các chương chính.",
        "icon": "book"
      },
      {
        "title": "Tiền tố bản thiết kế kỹ thuật",
        "description": "Đính kèm các chữ viết tắt của hệ thống con (ví dụ: \"A-1\", \"M-5\") làm tiền tố nhãn trang, cho phép các nhóm tìm kiếm và định vị các trang trong vài giây.",
        "icon": "layout"
      },
      {
        "title": "Bố cục xen kẽ tùy chỉnh",
        "description": "Áp dụng tính năng lập chỉ mục phạm vi trang có tính cụ thể cao cho các chuỗi chẵn/lẻ hoặc các phần không liền kề với mức độ tự do tối đa.",
        "icon": "shuffle"
      }
    ],
    "faq": [
      {
        "question": "Nhãn trang và số trang là gì?",
        "answer": "Số trang thông thường là các khối văn bản trực quan được hiển thị trực tiếp trên khung giấy (hiển thị khi in). Tuy nhiên, nhãn trang là siêu dữ liệu cấu trúc được đưa vào danh mục PDF. Họ kiểm soát những gì được hiển thị bên dưới hình thu nhỏ và trong hộp tra cứu trang bên trong phần mềm như Adobe Acrobat hoặc Apple Preview."
      },
      {
        "question": "Điều gì xảy ra nếu tôi để trống Phạm vi Trang?",
        "answer": "Để trống phạm vi trang sẽ khiến quy tắc áp dụng chung cho tất cả các trang của tài liệu."
      },
      {
        "question": "Các quy tắc chồng chéo được xử lý như thế nào?",
        "answer": "Các quy tắc được đánh giá tuần tự theo thứ tự được liệt kê. Nếu phạm vi trang của quy tắc sau trùng lặp với phạm vi trang trước đó thì quy tắc sau sẽ được ưu tiên và ghi đè nhãn cho trang đó."
      }
    ]
  },
  "ai-pdf-reflower": {
    "title": "Tự động tái dàn trang AI",
    "metaDescription": "Chỉnh lại văn bản PDF để đọc dễ dàng hơn trên thiết bị di động. Xuất nội dung được trích xuất dưới dạng Markdown hoặc EPUB trong trình duyệt của bạn.",
    "keywords": [
      "dàn trang pdf",
      "pdf tự thích ứng",
      "pdf sang markdown",
      "xuất epub"
    ],
    "description": "<p>AI PDF Layout Reflower là người bạn đồng hành tối ưu của bạn để đọc tài liệu PDF trên thiết bị di động. Các tệp PDF truyền thống sử dụng bố cục cố định, thường yêu cầu phải thu phóng và cuộn ngang liên tục trên điện thoại thông minh hoặc máy tính bảng, dẫn đến trải nghiệm đọc tẻ nhạt.</p>\n      <p>Công cụ này phân tích cú pháp luồng văn bản, khoảng cách dòng và tọa độ vật lý của các trang PDF một cách thông minh, tái cấu trúc các đoạn ngữ nghĩa và phân cấp tiêu đề. Đối với các tài liệu nhiều cột hoặc hai cột, nó hợp nhất các luồng cột một cách thông minh thành một luồng phản hồi duy nhất, đảm bảo đọc trơn tru.</p>\n      <p>Ngoài ra, nó còn hỗ trợ hiển thị các công thức toán học sang LaTeX/MathJax và cung cấp nhiều chủ đề đọc (Sepia, Dark, Eye-protecting Green). Bạn có thể xuất bố cục đã chỉnh sửa dưới dạng Markdown hoặc sách điện tử EPUB tiêu chuẩn chỉ bằng một cú nhấp chuột.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp PDF",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để duyệt và chọn tệp đó."
      },
      {
        "step": 2,
        "title": "Chọn chủ đề đọc",
        "description": "Chọn kích thước phông chữ và màu chủ đề ưa thích của bạn trong trình mô phỏng di động 3D ở bên phải."
      },
      {
        "step": 3,
        "title": "Xuất tài liệu",
        "description": "Sau khi hài lòng, hãy sử dụng dây kéo vật lý để xuất tài liệu dưới dạng Markdown hoặc EPUB."
      }
    ],
    "useCases": [
      {
        "title": "Đọc văn học di động",
        "description": "Đọc các bài báo học thuật và báo cáo nghiên cứu trên điện thoại của bạn một cách liền mạch mà không cần phải phóng to liên tục.",
        "icon": "smartphone"
      },
      {
        "title": "Chuyển đổi sách điện tử",
        "description": "Chuyển đổi các tệp PDF nặng văn bản thành tệp EPUB và nhập chúng vào Kindle hoặc các trình đọc sách điện tử khác.",
        "icon": "book"
      },
      {
        "title": "Lưu trữ ghi chú",
        "description": "Chuyển đổi trực tiếp nội dung PDF có cấu trúc thành các tệp Markdown rõ ràng cho cơ sở kiến ​​thức cá nhân của bạn.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Nó có xử lý chính xác các tệp PDF cột kép không?",
        "answer": "Có, tính năng chỉnh lại bố cục sẽ phát hiện tọa độ ngang của các khối văn bản và cấu trúc cột bên trái và bên phải một cách tuần tự, ngăn chặn tình trạng xen kẽ dòng."
      },
      {
        "question": "Hình ảnh và công thức toán có bị mất không?",
        "answer": "Các công thức toán học được chuyển đổi sang cú pháp LaTeX/MathJax để hiển thị trang web rõ ràng và hình ảnh được giữ nguyên ở các vị trí ngữ nghĩa tương ứng của chúng."
      },
      {
        "question": "Quá trình chuyển đổi có được thực hiện trên đám mây không?",
        "answer": "Không, tất cả phân tích bố cục và đóng gói định dạng đều được thực hiện cục bộ trong trình duyệt của bạn để đảm bảo quyền riêng tư tuyệt đối cho tài liệu của bạn."
      }
    ]
  },
  "citation-linker": {
    "title": "Kích hoạt liên kết trích dẫn",
    "metaDescription": "Biến các điểm đánh dấu trích dẫn trong tệp PDF thành các liên kết DOI hoặc tài liệu tham khảo trang có thể nhấp vào. Thêm điều hướng hữu ích vào tài liệu nghiên cứu.",
    "keywords": [
      "liên kết trích dẫn",
      "hyperlink pdf",
      "so khớp doi",
      "pdf học thuật"
    ],
    "description": "<p>Trình liên kết trích dẫn được thiết kế dành riêng cho các nhà nghiên cứu học thuật. Trong nhiều tài liệu PDF, dấu trích dẫn (ví dụ: [1], [2]) là văn bản thuần túy, buộc người đọc phải cuộn qua lại để đến danh sách tham khảo ở cuối tài liệu, làm gián đoạn sự tập trung của họ.</p>\n      <p>Công cụ này đọc văn bản PDF cục bộ, sử dụng tính năng nhận dạng mẫu để khớp các dấu trích dẫn với các mục tham chiếu tương ứng và phủ các chú thích liên kết PDF có thể nhấp bằng cách sử dụng tra cứu DOI hoặc tọa độ nhảy trang.</p>\n      <p>Nó cũng tạo ra bản đồ mối quan hệ trích dẫn tương tác để điều hướng trực quan mạng tham chiếu của tài liệu.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên bản PDF học thuật",
        "description": "Tải lên một bài báo hoặc luận án PDF có chứa phần thư mục/tài liệu tham khảo."
      },
      {
        "step": 2,
        "title": "Xem lại trích dẫn",
        "description": "Kiểm tra các cặp trích dẫn trong bản đồ tương tác và chỉnh sửa hoặc thêm liên kết DOI theo cách thủ công nếu cần."
      },
      {
        "step": 3,
        "title": "Chèn liên kết",
        "description": "Nhấp vào nút kích hoạt để phủ các siêu liên kết lên tệp PDF và tải xuống tài liệu cập nhật."
      }
    ],
    "useCases": [
      {
        "title": "Đọc văn học sâu sắc",
        "description": "Nhấp vào dấu trích dẫn để xem ngay chi tiết tham chiếu hoặc điều hướng đến các trang DOI bên ngoài.\nliên kết",
        "icon": "link"
      },
      {
        "title": "Chuẩn bị trước khi xuất bản",
        "description": "Đảm bảo các bài viết học thuật bằng văn bản của bạn có điều hướng siêu liên kết hoạt động hoàn toàn trước khi gửi lần cuối.",
        "icon": "award"
      },
      {
        "title": "Phân tích bản đồ tham khảo",
        "description": "Hiểu hệ thống phân cấp và kết nối tài liệu thông qua bản đồ cấu trúc liên kết mạng tương tác.",
        "icon": "git-network"
      }
    ],
    "faq": [
      {
        "question": "Điều gì sẽ xảy ra nếu một tài liệu tham khảo không có DOI?",
        "answer": "Nếu không tìm thấy DOI, công cụ sẽ quay lại hành động \"Trang GoTo\" nội bộ, cho phép bạn nhấp vào điểm đánh dấu và chuyển trực tiếp đến trang tham chiếu."
      },
      {
        "question": "Hỗ trợ những định dạng trích dẫn nào?",
        "answer": "Nó hỗ trợ các dấu ngoặc số phổ biến (ví dụ: [1], [1-3]) và trích dẫn theo năm của tác giả (ví dụ: Tác giả và cộng sự, 202X)."
      },
      {
        "question": "Nó có sửa đổi giao diện của tệp PDF của tôi không?",
        "answer": "Không, nó chèn các chú thích Liên kết vô hình lên trên văn bản, giữ nguyên bố cục, phông chữ và kiểu dáng ban đầu của tài liệu của bạn."
      }
    ]
  },
  "vector-extractor": {
    "title": "Trích xuất vectơ PDF",
    "metaDescription": "Trích xuất đồ họa vector từ các trang PDF dưới dạng SVG. Chọn biểu đồ, sơ đồ và logo để đổi màu và xuất.",
    "keywords": [
      "trích xuất vectơ pdf",
      "xuất svg",
      "trích xuất logo",
      "đồ họa vectơ"
    ],
    "description": "<p>PDF Vector Extractor mở khóa các đường dẫn vectơ và tác phẩm nghệ thuật được nhúng bên trong tệp PDF. Dễ dàng trích xuất biểu đồ vector, sơ đồ hoặc biểu tượng từ tài liệu cho công việc thiết kế hoặc in ấn.</p>\n      <p>Bên trong, nó sử dụng khả năng kết xuất SVG có độ chính xác cao để giải cấu trúc các đường dẫn vectơ PDF thành các cây phần tử SVG tiêu chuẩn, rõ ràng mà không làm giảm độ chính xác.</p>\n      <p>Giao diện làm nổi bật các phần tử di chuột với hiệu ứng bùng nổ lớp 3D trục Z, hoàn chỉnh với bảng chọn màu để nhà thiết kế điều chỉnh và trích xuất các nút vectơ.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tài liệu PDF",
        "description": "Tải lên tệp PDF chứa nội dung vectơ, sơ đồ, biểu đồ hoặc biểu trưng."
      },
      {
        "step": 2,
        "title": "Chọn các phần tử",
        "description": "Di chuột qua khung vẽ vector để đánh dấu các phần tử, sau đó nhấp để chọn nút."
      },
      {
        "step": 3,
        "title": "Tùy chỉnh và xuất",
        "description": "Điều chỉnh thuộc tính đường dẫn trong bảng điều khiển, sau đó tải xuống dưới dạng SVG hoặc sao chép mã nguồn SVG."
      }
    ],
    "useCases": [
      {
        "title": "Khai thác tài sản thiết kế",
        "description": "Trích xuất nhanh chóng logo, biểu tượng và hình minh họa của công ty từ hướng dẫn thương hiệu hoặc tài liệu quảng cáo.",
        "icon": "bezier"
      },
      {
        "title": "Xuất biểu đồ khoa học",
        "description": "Trích xuất biểu đồ vector từ các tài liệu nghiên cứu để sử dụng trong in ấn hoặc thuyết trình có độ phân giải cao.",
        "icon": "presentation"
      },
      {
        "title": "Đổi màu nội dung vector",
        "description": "Sửa đổi nét và tô màu của nội dung được trích xuất trước khi lưu chúng cho các dự án web.",
        "icon": "crown"
      }
    ],
    "faq": [
      {
        "question": "Tại sao tôi không thể chọn một số hình ảnh nhất định?",
        "answer": "Tệp PDF chứa cả hình ảnh raster (như ảnh hoặc trang được quét) và tác phẩm nghệ thuật vector (như hình dạng và đường cong). Chỉ các đường dẫn vectơ mới có thể được giải cấu trúc thành các đường dẫn SVG."
      },
      {
        "question": "SVG đầu ra có chứa kiểu không?",
        "answer": "Có, SVG được xuất sẽ giữ lại tất cả các thuộc tính ban đầu bao gồm màu nền, nét, độ mờ, độ dốc và các phép biến đổi tọa độ."
      },
      {
        "question": "Các tệp lớn có bị lag không?",
        "answer": "Chúng tôi sử dụng tính năng tăng tốc WebAssugging nhưng các tệp PDF có bản vẽ CAD cực kỳ phức tạp hoặc hàng nghìn đường dẫn vectơ có thể mất vài giây để hiển thị."
      }
    ]
  },
  "deep-sanitize": {
    "title": "Làm sạch siêu dữ liệu sâu",
    "metaDescription": "Xóa siêu dữ liệu, lớp ẩn và các đối tượng không sử dụng khỏi tệp PDF. Làm sạch thông tin tài liệu cục bộ trước khi chia sẻ.",
    "keywords": [
      "làm sạch pdf",
      "xóa siêu dữ liệu",
      "bảo mật pdf",
      "chống truy vết"
    ],
    "description": "<p>Deep Metadata Sanitizer là biện pháp bảo vệ tối ưu chống rò rỉ siêu dữ liệu và theo dõi ẩn. Chỉ vẽ các hộp đen lên phần văn bản hiển thị trong tệp PDF là không đủ để bảo vệ bí mật thương mại.</p>\n      <p>Công cụ này quét cấu trúc nhị phân PDF để xóa hoàn toàn thông tin tác giả, phần mềm người sáng tạo, nhật ký chỉnh sửa (Siêu dữ liệu XMP), bộ đệm PieceInfo độc quyền và nhóm nội dung tùy chọn OCG (thường được sử dụng cho hình mờ vô hình).</p>\n      <p>Nó cũng viết lại hoàn toàn các bảng tham chiếu chéo (xref), loại bỏ tất cả các khối cập nhật gia tăng để đảm bảo rằng dữ liệu lịch sử đã bị xóa hoặc sửa đổi không thể khôi phục được.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên bản PDF",
        "description": "Chọn tệp PDF chứa dữ liệu nhạy cảm hoặc lịch sử sửa đổi."
      },
      {
        "step": 2,
        "title": "Chạy máy quét",
        "description": "Kích hoạt máy quét ngăn chặn 3D để kiểm tra tệp để tìm siêu dữ liệu và lớp ẩn."
      },
      {
        "step": 3,
        "title": "Vệ sinh sâu",
        "description": "Nhấp vào vệ sinh để xóa các phần tử theo dõi và tải xuống bản PDF hoàn toàn sạch sẽ."
      }
    ],
    "useCases": [
      {
        "title": "Chia sẻ hợp đồng",
        "description": "Xóa các bản ghi soạn thảo, đường dẫn và các bản sửa đổi trước đó trước khi chia sẻ hợp đồng kinh doanh với bên thứ ba.",
        "icon": "file-signature"
      },
      {
        "title": "Xuất bản ẩn danh",
        "description": "Xóa các chú thích và hình mờ vô hình để xuất bản tài liệu ẩn danh và an toàn.",
        "icon": "eye-off"
      },
      {
        "title": "Tối ưu hóa PDF",
        "description": "Loại bỏ các đối tượng mồ côi và luồng dữ liệu rác để giúp tệp tải nhanh hơn trên web.",
        "icon": "zap"
      }
    ],
    "faq": [
      {
        "question": "Điều này khác với việc xóa siêu dữ liệu tiêu chuẩn như thế nào?",
        "answer": "Công cụ tiêu chuẩn chỉ xóa các trường cơ bản như tiêu đề hoặc tác giả. Deep Sanitizer tái tạo lại toàn bộ bảng PDF xref, xóa PieceInfo, hình mờ ẩn và các bản sửa đổi gia tăng lịch sử."
      },
      {
        "question": "Điều này có ảnh hưởng đến bố cục hoặc văn bản tài liệu không?",
        "answer": "Không, nó chỉ loại bỏ các luồng mô tả và dữ liệu cấu trúc ẩn. Bố cục, văn bản và đồ họa hiển thị không thay đổi."
      },
      {
        "question": "Điều này có xóa mật khẩu PDF không?",
        "answer": "Không, nếu tệp PDF được mã hóa, bạn phải mở khóa nó trước khi thực hiện khử trùng sâu."
      }
    ]
  },
  "booklet-folding-simulator": {
    "title": "Mô phỏng gấp và bình trang 3D",
    "metaDescription": "Sắp xếp các trang PDF để in tập sách. Xem trước các tờ gấp và bố cục đường khâu yên ngựa trước khi xuất tài liệu sẵn sàng in của bạn.",
    "keywords": [
      "bình trang 3d",
      "mô phỏng gấp giấy",
      "đóng ghim giữa",
      "dàn trang in"
    ],
    "description": "<p>Trình mô phỏng gấp sách và gấp sách 3D là một công cụ nâng cao được thiết kế dành cho các nhà thiết kế in ấn và chuyên gia xuất bản. Bố cục sách truyền thống yêu cầu tính toán lớp phủ trang phức tạp và trình tự phân trang áp đặt. Công cụ này trực quan hóa và tự động hóa toàn bộ quá trình đó.</p>\n      <p>Thuật toán áp đặt tùy chỉnh của chúng tôi ánh xạ danh sách trang PDF tuần tự thành các bố cục trang in tiêu chuẩn (chẳng hạn như trang gấp 4 trang, đường gấp 8 trang hoặc đường gấp xếp), hợp nhất các trang vào mặt trước và mặt sau của các tờ giấy vật lý lớn.</p>\n      <p>Ở giao diện người dùng, chúng tôi sử dụng các phép biến đổi Ma trận 3D CSS thuần túy và các đường cong vật lý khối lượng lò xo để tạo hiệu ứng cho các trang gấp theo chiều ngang và chiều dọc, mang đến bản xem trước ràng buộc giống như vật lý với hệ số WOW cao.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp PDF",
        "description": "Kéo và thả tài liệu PDF bạn muốn bố trí để in."
      },
      {
        "step": 2,
        "title": "Chọn Bố cục gấp",
        "description": "Chọn sơ đồ áp đặt ưa thích của bạn (ví dụ: gấp 4 trang, khâu yên ngựa 8 trang, đàn accordion 4 trang)."
      },
      {
        "step": 3,
        "title": "Xem trước 3D tương tác",
        "description": "Kéo thanh trượt để xem tờ gấp ở dạng 3D và kiểm tra bố cục đánh số trang cuối cùng."
      },
      {
        "step": 4,
        "title": "Tạo PDF được áp dụng",
        "description": "Nhấp vào tạo để tải xuống bản PDF trang vật lý được sắp xếp lại và hợp nhất, sẵn sàng để in hai mặt."
      }
    ],
    "useCases": [
      {
        "title": "Tạo mẫu Brochure",
        "description": "Hình dung trước trình tự gấp gấp ba và tờ rơi để tránh tình trạng lộn ngược trang sau khi in.",
        "icon": "book-open"
      },
      {
        "title": "Khâu yên sách",
        "description": "Tự động tạo các trang in áp dụng cho các tạp chí hoặc tập sách nhiều trang.",
        "icon": "layers"
      },
      {
        "title": "Cửa hàng in Dụng cụ hỗ trợ trực quan",
        "description": "Giúp khách hàng hình dung cách các trang được phân bổ và gấp lại vật lý trên các tờ in.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "\"Áp đặt\" là gì?",
        "answer": "Đổ khuôn là bước cơ bản trong quá trình in sơ bộ. Vì máy in thương mại in trên những tờ giấy lớn nên các trang được sắp xếp không theo thứ tự sao cho khi được in, gấp và đóng bìa, các trang sẽ xuất hiện theo đúng thứ tự. Công cụ này tự động tính toán bố cục đó."
      },
      {
        "question": "Bản xem trước 3D có làm thay đổi nội dung PDF của tôi không?",
        "answer": "Không, nội dung PDF gốc chỉ được hiển thị dưới dạng ánh xạ kết cấu trên trang tính 3D. Tệp PDF được tạo chỉ điều chỉnh thứ tự và vị trí trang; chất lượng văn bản và đồ họa được giữ nguyên."
      },
      {
        "question": "Điều gì sẽ xảy ra nếu số trang PDF của tôi không phải là bội số của 4 hoặc 8?",
        "answer": "Trình tối ưu hóa tự động thêm các trang trống vào cuối để đáp ứng các yêu cầu về số trang toán học của bố cục gấp đã chọn."
      }
    ]
  },
  "pdf-to-slide": {
    "title": "PDF sang Slide",
    "metaDescription": "Chuyển đổi nội dung PDF sang slide PowerPoint. Xuất bản trình bày PPTX có văn bản và hình ảnh để chỉnh sửa thêm.",
    "keywords": [
      "pdf sang ppt",
      "tái tạo slide",
      "trích xuất biểu đồ",
      "tạo pptx"
    ],
    "description": "<p>AI PDF-to-Slide Reconstructor thổi sức sống mới vào các tài liệu PDF tĩnh, biến chúng thành các trang chiếu PowerPoint (PPTX) hiện đại, có khả năng tùy chỉnh cao.</p>\n      <p>Công cụ này sử dụng trình trích xuất phác thảo bố cục nâng cao để tự động phân tích các cấp độ tiêu đề, dòng đoạn văn và độ dày phông chữ của tài liệu để thiết lập khung trang chiếu hợp lý. Nó cũng tách biệt các biểu đồ vectơ và bảng có độ phân giải cao, loại bỏ các thành phần nền để nhúng chúng một cách rõ ràng dưới dạng nội dung có thể chỉnh sửa độc lập.</p>\n      <p>Tất cả đầu ra PPTX đều được xây dựng bằng cách sử dụng các phần tử Office Open XML tiêu chuẩn, nghĩa là tất cả văn bản vẫn có thể chỉnh sửa hoàn toàn và vectơ không bị mất độ phân giải. Giao diện người dùng hiển thị hoạt ảnh chuyển tiếp thẻ \"starfield\" linh hoạt giúp hình dung quá trình tái thiết một cách hấp dẫn.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên bản PDF Học thuật/Kinh doanh",
        "description": "Tải lên tài liệu PDF có chứa các phần và sơ đồ có cấu trúc."
      },
      {
        "step": 2,
        "title": "Phân tích dàn ý slide",
        "description": "Kiểm tra cấu trúc slide được trích xuất, điều chỉnh tiêu đề hoặc xóa các khối thẻ không cần thiết."
      },
      {
        "step": 3,
        "title": "Tái tạo thành PPTX",
        "description": "Khởi động công cụ biên dịch để nhận tệp trình bày tiêu chuẩn, có thể chỉnh sửa."
      }
    ],
    "useCases": [
      {
        "title": "Trình bày bài nghiên cứu",
        "description": "Chuyển đổi các tệp PDF tạp chí học thuật, cấu trúc văn bản và sơ đồ vectơ thành các bản trình bày sẵn sàng cho các buổi nói chuyện.",
        "icon": "graduation-cap"
      },
      {
        "title": "Tóm tắt báo cáo kinh doanh",
        "description": "Chắt lọc các báo cáo hàng năm lớn của công ty thành các bản thảo trình bày rõ ràng, có dấu đầu dòng ngay lập tức.",
        "icon": "presentation"
      },
      {
        "title": "Bản trình diễn trên nhiều thiết bị",
        "description": "Tránh sao chép ảnh chụp màn hình theo cách thủ công. Nhận khung bố cục rõ ràng, có thể chỉnh sửa hoàn toàn trong vài giây.",
        "icon": "laptop"
      }
    ],
    "faq": [
      {
        "question": "Các slide có thể chỉnh sửa được trong Microsoft Office không?",
        "answer": "Vâng. Các tệp được tạo nguyên bản trong bộ nhớ theo đặc tả chính thức của Office Open XML (OOXML). Văn bản, bảng và trình giữ chỗ hoàn toàn tương tác trong PowerPoint, Keynote và WPS."
      },
      {
        "question": "Biểu đồ được trích xuất như thế nào?",
        "answer": "Công cụ quét các đường dẫn vectơ và các lớp raster trong PDF, phát hiện các vùng giới hạn biểu thị đồ thị và cắt chúng ra dưới dạng các nút SVG độc lập hoặc hình ảnh có độ phân giải cao."
      },
      {
        "question": "Tính năng này có hoạt động trên các tài liệu được quét không?",
        "answer": "Đối với các tệp PDF được quét thiếu các lớp văn bản thực tế, chúng tôi khuyên bạn nên chạy công cụ OCR trước khi chuyển tệp tới Trình tái tạo trang chiếu."
      }
    ]
  },
  "eink-optimizer": {
    "title": "Tối ưu hóa màn hình E-ink",
    "metaDescription": "Tối ưu hóa các trang PDF cho trình đọc e-ink. Làm sạch nền, tăng độ tương phản của văn bản và điều chỉnh tài liệu để dễ đọc hơn.",
    "keywords": [
      "tối ưu e-ink",
      "nhị phân hóa khử nhiễu",
      "làm đậm nét chữ",
      "máy đọc sách"
    ],
    "description": "<p>e-Ink Reader Optimizer là công cụ bắt buộc phải có dành riêng cho những người đam mê thiết bị đọc sách điện tử sử dụng Kindle, Onyx Boox, Kobo hoặc các thiết bị giấy điện tử khác.</p>\n      <p>Nhiều sách điện tử PDF được quét có chữ mờ, nền xám đục, nhiễu hoặc bóng quét khi xem trên màn hình e-Ink. Công cụ này phân tích biểu đồ giá trị xám và áp dụng Ngưỡng nhị phân của Otsu để tách văn bản khỏi nền, chuyển đổi phông nền màu xám thành màu trắng rõ ràng.</p>\n      <p>Ngoài ra, nó còn tích hợp tính năng giãn nở hình thái để in đậm và làm dày các ký tự mỏng, mờ, cung cấp kiểu chữ sắc nét, có độ tương phản cao. Thanh trượt độ tương phản giảm quán tính cho phép bạn tinh chỉnh độ tương phản giống như tờ giấy trong thời gian thực.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên bản PDF đã quét",
        "description": "Tải lên sách điện tử hoặc tài liệu được quét có văn bản mờ hoặc nền xám."
      },
      {
        "step": 2,
        "title": "Điều chỉnh thanh trượt độ tương phản",
        "description": "Kéo thanh trượt giảm chấn để cân bằng việc loại bỏ nền và in đậm ký tự trong thời gian thực."
      },
      {
        "step": 3,
        "title": "Tối ưu hóa và tải xuống",
        "description": "Xử lý toàn bộ tệp PDF để tạo tài liệu có độ tương phản cao, thân thiện với mắt được thiết kế riêng cho e-Ink."
      }
    ],
    "useCases": [
      {
        "title": "Phục hồi bản thảo cổ",
        "description": "Làm dày văn bản bị mờ trong bản quét sách lịch sử hoặc bản thảo viết tay để chúng có thể đọc được.",
        "icon": "scroll"
      },
      {
        "title": "Dọn dẹp bài thi",
        "description": "Tẩy bóng nền của các bài kiểm tra được sao chụp hoặc chụp ảnh, trả lại văn bản đen sạch trên giấy trắng.",
        "icon": "file-text"
      },
      {
        "title": "May thiết bị giấy điện tử",
        "description": "Chuyển đổi các tệp PDF màu sang thang độ xám được tối ưu hóa, ngăn ngừa hiện tượng lộn xộn, phối màu trên màn hình đơn sắc.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Tính năng \"in đậm ký tự\" hoạt động như thế nào?",
        "answer": "Trong xử lý hình ảnh, điều này được gọi là giãn nở. Nó sử dụng ma trận cấu trúc để mở rộng lề ký tự thêm một pixel, làm dày các nét mờ về mặt vật lý để làm cho chúng dễ đọc."
      },
      {
        "question": "Quá trình này có làm tăng kích thước tệp không?",
        "answer": "Hoàn toàn ngược lại. Bằng cách nhị phân các hình ảnh màu/thang độ xám phức tạp thành bố cục đen trắng đơn giản, tính năng nén tiêu chuẩn (như CCITT Nhóm 4) có thể thu nhỏ kích thước tệp PDF một cách đáng kể."
      },
      {
        "question": "Điều này có hỗ trợ các tệp PDF văn bản gốc không?",
        "answer": "Vâng. Các tệp PDF vectơ gốc được rasterized ở độ phân giải cao ở chế độ nền, được tối ưu hóa và biên dịch lại, đảm bảo khả năng đọc có độ tương phản cao thống nhất."
      }
    ]
  },
  "cert-cryptor": {
    "title": "Mã hóa chứng thư",
    "metaDescription": "Mã hóa và ký điện tử các tài liệu PDF bằng chứng chỉ. Làm việc với các tệp chứng chỉ cục bộ trong trình duyệt của bạn.",
    "keywords": [
      "mã hóa chứng thư",
      "đóng dấu sáp 3d",
      "ký số pkcs7",
      "bảo mật pdf"
    ],
    "description": "<p>Con dấu sáp 3D & Mật mã chứng chỉ cung cấp khả năng bảo mật cấp quân sự và tính thẩm mỹ cao cấp ở cấp độ vật lý cho các tệp, bằng cấp hoặc thỏa thuận nhạy cảm của công ty.</p>\n      <p>Về mặt kỹ thuật, nó cung cấp mã hóa khóa công khai bất đối xứng: nhập chứng chỉ khóa chung của người nhận (.cer/.crt) để khóa luồng PDF; chỉ người nắm giữ khóa riêng phù hợp (.pfx) mới có thể giải mã được nó. Nó cũng tạo ra chữ ký số PKCS#7 tiêu chuẩn để đảm bảo tính toàn vẹn của tài liệu, chống giả mạo.</p>\n      <p>Nhìn bề ngoài, chúng tôi có con dấu sáp màu đỏ hoặc vàng vật lý 3D. Khi bạn ký, một con tem được hiển thị đẹp mắt sẽ hạ xuống với âm thanh cơ học thỏa mãn, để lại con dấu sáp 3D với các biến thể chiều cao được ánh xạ bình thường thực tế và các dòng sáp chảy ra trên trang, được bao quanh bởi các dấu vết mật mã phát sáng.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên bản PDF và chứng chỉ",
        "description": "Thêm tệp PDF của bạn và nhập chứng chỉ ký (.pfx) hoặc chứng chỉ công khai của người nhận (.cer)."
      },
      {
        "step": 2,
        "title": "Đặt tem 3D",
        "description": "Kéo và định vị con dấu trên bản xem trước tài liệu và chọn kiểu sáp (ví dụ: vàng, đỏ thẫm)."
      },
      {
        "step": 3,
        "title": "Nhấn và ký",
        "description": "Nhấp vào thực hiện để xem buổi lễ đóng dấu sáp 3D, tạo ra chữ ký số cấp vật lý."
      },
      {
        "step": 4,
        "title": "Tải xuống bản PDF bảo mật",
        "description": "Lưu tài liệu đầu ra, hiện đã được khóa và đóng dấu bằng mật mã."
      }
    ],
    "useCases": [
      {
        "title": "Văn bằng và Chứng chỉ",
        "description": "Dán huy hiệu con dấu sáp 3D có giá trị cao vào các bằng cấp và giải thưởng kỹ thuật số, được hỗ trợ bằng chữ ký số chính hãng.",
        "icon": "award"
      },
      {
        "title": "Thỏa thuận bí mật",
        "description": "Khóa các hợp đồng nhạy cảm bằng chứng chỉ công khai của khách hàng để chỉ thẻ khóa vật lý an toàn của họ mới có thể mở khóa.",
        "icon": "shield-alert"
      },
      {
        "title": "Thông cáo báo chí chính thức",
        "description": "Ký điện tử vào các thông báo công khai để ngăn chặn hành vi chỉnh sửa hoặc giả mạo văn bản độc hại.",
        "icon": "stamp"
      }
    ],
    "faq": [
      {
        "question": "Con dấu sáp chỉ là hình ảnh hay chữ ký thật?",
        "answer": "Cả hai. Hệ thống này tạo ra dấu ấn sáp 3D cực kỳ chân thực với độ sâu được ánh xạ thông thường (lớp trực quan) và mã hóa chữ ký mật mã PKCS#7 xác thực, chống giả mạo bên trong PDF (lớp dữ liệu)."
      },
      {
        "question": "\"Mã hóa dựa trên chứng chỉ\" là gì?",
        "answer": "Đây là một kỹ thuật mã hóa không cần mật khẩu. Bạn mã hóa tệp bằng khóa chung của người nhận. Người đọc tự động tìm kiếm chứng chỉ riêng cục bộ của họ để giải mã tệp một cách liền mạch, đảm bảo tính bảo mật mạnh mẽ."
      },
      {
        "question": "Tôi có thể tùy chỉnh thiết kế tem không?",
        "answer": "Vâng. Chúng tôi cung cấp nhiều thiết kế như hình mờ PDFCraft hoặc huy hiệu Hoàng gia và bạn có thể điều chỉnh bán kính tan chảy sáp và độ sâu thụt bản đồ thông thường trong bảng điều khiển."
      }
    ]
  },
  "passport-id-composer": {
    "title": "Ghép thẻ hai mặt",
    "metaDescription": "Gộp mặt trước và mặt sau của CMND hoặc hộ chiếu trên một trang PDF A4. Sắp xếp các bản quét và thêm hình mờ tùy chọn.",
    "keywords": [
      "ghép mặt căn cước",
      "photo chứng minh thư",
      "in hộ chiếu",
      "đóng dấu nước"
    ],
    "description": "<p>Trình soạn thảo hai mặt Hộ chiếu & ID là một tiện ích năng suất cực kỳ hữu ích cho các hoạt động cá nhân và kinh doanh tiêu chuẩn.</p>\n      <p>Khi đăng ký tài khoản ngân hàng, đăng ký tham gia hoặc ký kết thỏa thuận, chúng tôi thường cần bản sao của cả hai mặt chứng minh nhân dân. Công cụ này chấp nhận hình ảnh mặt trước/mặt sau hoặc trang PDF và sắp xếp chúng một cách chính xác trên một trang A4 duy nhất tuân thủ độ phân giải bố cục tiêu chuẩn quốc gia.</p>\n      <p>Hơn nữa, bạn có thể tùy chỉnh các hình mờ chống giả trong mờ chồng chéo (ví dụ: \"CHỈ DÀNH CHO MỞ RỘNG\") để ngăn chặn việc sử dụng lại tài liệu trái phép. Nó thậm chí còn có hiệu ứng hình ảnh cửa máy quét máy photocopy quét tia laser phát sáng 3D để mang lại phản hồi cao cấp.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp ID",
        "description": "Tải lên ảnh/bản scan mặt trước và mặt sau của CMND hoặc hộ chiếu của bạn (tối đa 2 tệp)."
      },
      {
        "step": 2,
        "title": "Định cấu hình hình mờ an toàn",
        "description": "Nhập lớp phủ văn bản tùy chỉnh để hạn chế sao chép tài liệu trái phép."
      },
      {
        "step": 3,
        "title": "Soạn và tải xuống",
        "description": "Nhấp vào thực hiện để tạo bản PDF A4 sẵn sàng in một trang."
      }
    ],
    "useCases": [
      {
        "title": "Nộp hồ sơ giới thiệu nhân sự",
        "description": "Nhanh chóng căn chỉnh các bản sao ID nhân viên và áp dụng hình mờ bảo vệ.",
        "icon": "user"
      },
      {
        "title": "Dịch vụ chính phủ và ngân hàng",
        "description": "Chuẩn bị các bản in ID tiêu chuẩn đáp ứng các yêu cầu lưu trữ vật lý.",
        "icon": "landmark"
      },
      {
        "title": "Dự phòng du lịch",
        "description": "Sắp xếp các trang hộ chiếu và chi tiết visa vào một tờ giấy A4 thống nhất.",
        "icon": "plane"
      }
    ],
    "faq": [
      {
        "question": "Hình mờ có chặn chi tiết văn bản nhận dạng không?",
        "answer": "Không. Hình mờ được hiển thị ở độ mờ 15% được điều chỉnh cẩn thận để chặn hành vi giả mạo mà không làm mất đi tính dễ đọc của trường văn bản hoặc ảnh."
      },
      {
        "question": "Kích thước thẻ tổng hợp có chính xác không?",
        "answer": "Vâng. Nó hiển thị thẻ ID ở kích thước vật lý tiêu chuẩn 85,6mm × 54mm được chia tỷ lệ hoàn hảo trên trang A4."
      },
      {
        "question": "Nó có hỗ trợ bằng lái xe không?",
        "answer": "Có, nó hoạt động rất tốt cho mọi hoạt động quét nhận dạng dựa trên thẻ."
      }
    ]
  },
  "annotation-exporter": {
    "title": "Trích chú thích & tô sáng",
    "metaDescription": "Xuất nhận xét, ghi chú, đánh dấu và gạch chân dưới dạng PDF sang Markdown hoặc JSON. Tổ chức các chú thích để học tập, đánh giá và nghiên cứu.",
    "keywords": [
      "trích xuất chú thích pdf",
      "xuất văn bản tô sáng",
      "ghi chú đọc sách"
    ],
    "description": "<p>Trình xuất chú thích thông minh là một không gian làm việc mạnh mẽ giúp khai thác toàn bộ giá trị từ các chú thích PDF của bạn.</p>\n      <p>Khi tiến hành đánh giá tài liệu hoặc đọc nhiều sách điện tử, chúng tôi sử dụng rất nhiều điểm đánh dấu và ghi chú. Công cụ này giải tuần tự hóa từ điển <code>/Chú thích</code> PDF cấp thấp và trích xuất tất cả các điểm đánh dấu, ghi chú, gạch chân và bút đánh dấu bằng mực vẽ tay.</p>\n      <p>Nó tự động căn chỉnh các nhận xét với các tiêu đề phác thảo tương ứng, tạo ra một sổ ghi chép Markdown hoặc JSON có cấu trúc với các neo tham chiếu trang. Xem những điểm nổi bật của bạn nổi đẹp mắt trên bảng sổ tay bằng kính mờ.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Nhập PDF có chú thích",
        "description": "Tải lên bất kỳ bài luận hoặc cuốn sách PDF nào có phần gạch chân, đánh dấu hoặc nhận xét của bạn."
      },
      {
        "step": 2,
        "title": "Định cấu hình bộ lọc và định dạng",
        "description": "Chọn loại chú thích bạn muốn trích xuất và chọn Markdown hoặc JSON."
      },
      {
        "step": 3,
        "title": "Trích xuất sổ ghi chép",
        "description": "Nhấp vào thực hiện để phân tích luồng nhận xét và tập hợp bản tóm tắt dàn ý của bạn."
      }
    ],
    "useCases": [
      {
        "title": "Tổng hợp tài liệu khoa học",
        "description": "Trích xuất các ghi chú đọc trên nhiều bài viết vào các mẫu Markdown để soạn các bài đánh giá ngắn gọn ngay lập tức.",
        "icon": "graduation-cap"
      },
      {
        "title": "Biên soạn nhật ký học tập",
        "description": "Thu thập những hiểu biết sâu sắc và nhận xét cá nhân từ sách giáo khoa vào cơ sở dữ liệu Obsidian.",
        "icon": "book"
      },
      {
        "title": "Kiểm tra hợp tác tài liệu",
        "description": "Thu thập các bản sửa lỗi đánh giá từ các thành viên khác nhau trong nhóm và thiết lập danh sách nhiệm vụ có thể thực hiện được.",
        "icon": "users"
      }
    ],
    "faq": [
      {
        "question": "Nó có thể trích xuất nét mực vẽ tay của máy tính bảng không?",
        "answer": "Vâng. Miễn là các dấu vẽ tay được lưu trữ dưới dạng chú thích PDF Ink tiêu chuẩn, công cụ này có thể tách biệt và cấu trúc các vị trí trang của chúng một cách hoàn hảo."
      },
      {
        "question": "Tại sao một số đoạn trích được đánh dấu lại trống?",
        "answer": "Nếu PDF là bản quét hình ảnh không thể tìm kiếm được, thiếu văn bản cơ bản, thì chỉ đánh dấu tọa độ lưu trữ. Trước tiên hãy chạy OCR trên tệp PDF, sau đó trích xuất chú thích."
      },
      {
        "question": "Các liên kết Markdown có quay lại bản PDF không?",
        "answer": "Tệp được xuất liệt kê số trang chính xác và tiêu đề dàn ý gốc để giúp việc tham chiếu chéo trở nên liền mạch."
      }
    ]
  },
  "batch-watermark-remover": {
    "title": "Xóa hình mờ hàng loạt",
    "metaDescription": "Xóa hình mờ văn bản và hình ảnh phù hợp khỏi tệp PDF. Xem lại kết quả đầu ra để kiểm tra xem nội dung tài liệu có được giữ nguyên hay không.",
    "keywords": [
      "xóa hình mờ pdf",
      "xóa watermark hàng loạt",
      "làm sạch nội dung pdf"
    ],
    "description": "<p>Batch Watermark Remover là công cụ khử trùng PDF tiên tiến giúp làm sạch tài liệu về mặt vật lý.</p>\n      <p>Các công cụ xóa hình mờ thông thường thường chỉ phủ lên các khối màu trắng hoặc làm biến dạng khoảng cách giữa các tài liệu. Công cụ này sử dụng kỹ thuật <strong>Thanh lọc luồng nội dung</strong> mạnh mẽ.</p>\n      <p>Nó phân tích cú pháp các toán tử hiển thị cấp thấp của mỗi trang, xác định các lệnh chuỗi hình mờ cụ thể (ví dụ: \"Bí mật\", \"DRAFT\") hoặc các đối tượng hình nền và xóa hoặc ghi đè chúng về mặt vật lý. Hình mờ biến mất hoàn toàn, giữ nguyên định dạng và chất lượng vectơ ban đầu.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tập tin có hình mờ",
        "description": "Cung cấp tài liệu PDF hiển thị logo thương mại hoặc nhãn bảo mật."
      },
      {
        "step": 2,
        "title": "Xác định hình mờ mục tiêu",
        "description": "Nhập chuỗi chính xác để xóa hoặc chuyển đổi chức năng dọn dẹp hình ảnh XObject mờ."
      },
      {
        "step": 3,
        "title": "Chạy thanh lọc vật lý",
        "description": "Nhấp vào thực thi để lọc các toán tử nội dung với độ trung thực cao."
      }
    ],
    "useCases": [
      {
        "title": "Lưu trữ tài sản doanh nghiệp",
        "description": "Xóa hình mờ \"Bí mật\" hoặc \"Bản nháp\" đã hết hạn để phân phối rộng rãi cho công chúng.",
        "icon": "archive"
      },
      {
        "title": "Xóa nền lộn xộn",
        "description": "Xóa các hình nền nặng khiến người đọc mất tập trung khi quét văn bản.",
        "icon": "eye"
      },
      {
        "title": "Tái sử dụng tài liệu",
        "description": "Làm sạch các thành phần thương hiệu chân trang cũ của trang để áp dụng các mẫu công ty mới một cách dễ dàng.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Các hình mờ đã bị xóa có thể phục hồi được không?",
        "answer": "Không. Không giống như mặt nạ trực quan, chúng tôi viết lại luồng nhị phân của trang để xóa các toán tử, không để lại dấu vết."
      },
      {
        "question": "Nó có hỗ trợ độ dốc phức tạp không?",
        "answer": "Nếu hình mờ được lưu trữ dưới dạng nút văn bản hoặc hình ảnh XObject riêng biệt, công cụ có thể cô lập và xóa sạch hình mờ đó một cách vật lý."
      },
      {
        "question": "Nó có sửa đổi văn bản trang bình thường không?",
        "answer": "Không. Công cụ lọc chỉ nhắm mục tiêu vào những người vận hành khớp với chữ ký hình mờ đã chỉ định; văn bản thông thường vẫn còn nguyên."
      }
    ]
  },
  "smart-data-redactor": {
    "title": "Che dữ liệu nhạy cảm",
    "metaDescription": "Tìm địa chỉ email, số điện thoại và mẫu ID trong tệp PDF. Xem lại các kết quả trùng khớp và biên tập lại nội dung nhạy cảm tại địa phương.",
    "keywords": [
      "che phủ dữ liệu nhạy cảm",
      "mã hóa thông tin cá nhân",
      "bảo mật thông tin"
    ],
    "description": "<p>Trình biên tập dữ liệu về quyền riêng tư thông minh là một công cụ tự động được thiết kế để đảm bảo tuân thủ mạnh mẽ về quyền riêng tư của tài liệu.</p>\n      <p>Chỉ phủ các hộp đen trong trình soạn thảo thông thường là không an toàn vì văn bản bên dưới vẫn có thể được sao chép. Công cụ này triển khai <strong>khớp mẫu NLP thực sự và dọn dẹp luồng nội dung vật lý</strong>.</p>\n      <p>Nó quét tài liệu để tìm email, số điện thoại, SSN hoặc từ khóa tùy chỉnh, đặt mặt nạ đen mờ cao cấp lên tọa độ và ghi đè vĩnh viễn luồng ký tự bằng <code>[REDACTED]</code>, chặn rò rỉ sao chép-dán.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên bản PDF mục tiêu",
        "description": "Cung cấp hợp đồng hoặc tuyên bố thể hiện thông tin chi tiết nhạy cảm của khách hàng."
      },
      {
        "step": 2,
        "title": "Chọn quy tắc biên tập",
        "description": "Kiểm tra các mẫu mục tiêu (email, điện thoại, ID) hoặc xác định các từ nhạy cảm tùy chỉnh."
      },
      {
        "step": 3,
        "title": "Tự động biên tập lại và tải xuống",
        "description": "Nhấp vào thực thi để phủ các mặt nạ bảo mật và xóa luồng văn bản."
      }
    ],
    "useCases": [
      {
        "title": "Chia sẻ thỏa thuận thương mại",
        "description": "Xuất bản an toàn các tài liệu kinh doanh bằng cách ẩn lương cá nhân, số điện thoại hoặc email.",
        "icon": "file-signature"
      },
      {
        "title": "Tiếp tục ẩn danh cơ sở dữ liệu",
        "description": "Loại bỏ tên, thông tin liên hệ hoặc địa chỉ của người nộp đơn để tuân thủ các quy định nghiêm ngặt về quyền riêng tư.",
        "icon": "user-check"
      },
      {
        "title": "Phân phối báo cáo tài chính",
        "description": "Che giấu số sổ cái hoặc tên cổ đông cụ thể trước khi công bố báo cáo.",
        "icon": "pie-chart"
      }
    ],
    "faq": [
      {
        "question": "Các chi tiết bị loại bỏ có thực sự không thể sao chép được không?",
        "answer": "Vâng. Chúng ta viết lại dòng nội dung trang để xóa ký tự. Việc dán sao chép từ hộp đã được xử lý lại sẽ chỉ trích xuất chuỗi \"[THÔNG TIN ĐÃ GIẤU]\"."
      },
      {
        "question": "Nó có hoạt động đối với các tệp PDF hình ảnh được quét không?",
        "answer": "Công cụ này nhắm mục tiêu các luồng văn bản vector. Đối với các tệp hình ảnh được quét, trước tiên hãy sử dụng công cụ OCR của chúng tôi hoặc cắt thủ công."
      },
      {
        "question": "Phạm vi mục tiêu HUD màu đỏ có được lưu trong tệp không?",
        "answer": "Không, đó là hiệu ứng tải tương tác giao diện người dùng tuyệt đẹp. Tệp PDF đầu ra hiển thị các hình chữ nhật màu đen sạch sẽ tiêu chuẩn."
      }
    ]
  },
  "bookmarks-auto-generator": {
    "title": "Tự động tạo mục lục",
    "metaDescription": "Tạo dấu trang PDF từ tiêu đề và mẫu văn bản. Thêm dàn bài có thể điều hướng vào các tài liệu, sổ tay và báo cáo dài.",
    "keywords": [
      "tạo bookmark tự động",
      "mục lục thông minh pdf",
      "cây mục lục"
    ],
    "description": "<p>Trình tạo dấu trang tự động mang lại sự rõ ràng tuyệt đối cho các tài liệu PDF dài, không có cấu trúc.</p>\n      <p>Việc quét qua sách hoặc tập sách nhỏ mà không có điều hướng theo dàn ý là điều khó khăn. Công cụ này phân tích các hệ thống phân cấp kiểu chữ (chẳng hạn như kích thước và độ đậm phông chữ) cùng với các quy tắc biểu thức chính quy (như \"Chương 1\", \"Phần 1.1\") để tự động suy ra các tiêu đề.</p>\n      <p>Sau đó, nó biên dịch và đưa trực tiếp các tiêu đề này vào từ điển PDF <code>/Outline</code>. Sau đó, bất kỳ trình xem tiêu chuẩn nào cũng sẽ hiển thị thanh bên điều hướng đa cấp, có cấu trúc đẹp mắt, được hỗ trợ bởi bản xem trước cây phác thảo 3D tương tác.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Cung cấp bản PDF không có cấu trúc",
        "description": "Tải lên các tài liệu quảng cáo lớn, tài liệu học thuật hoặc sách điện tử không có thanh bên danh mục."
      },
      {
        "step": 2,
        "title": "Điều chỉnh quy tắc tiêu đề",
        "description": "Định cấu hình chiến lược chỉ định ngưỡng kích thước phông chữ tối thiểu và quy tắc đối sánh."
      },
      {
        "step": 3,
        "title": "Xây dựng và tiêm",
        "description": "Nhấp vào thực hiện để hiển thị các nút phác thảo và ghi các dấu trang phác thảo một cách vật lý."
      }
    ],
    "useCases": [
      {
        "title": "Tổ chức hướng dẫn kỹ thuật",
        "description": "Tự động biên soạn các chương đa cấp theo hướng dẫn tiêu chuẩn, tiết kiệm thời gian lập chỉ mục thủ công.",
        "icon": "tool"
      },
      {
        "title": "Chuẩn bị luận văn",
        "description": "Chèn các dấu trang lồng nhau sạch sẽ phù hợp với tiêu chuẩn gửi học thuật chính xác.",
        "icon": "graduation-cap"
      },
      {
        "title": "Tối ưu hóa điều hướng sách điện tử",
        "description": "Cấu trúc các ấn phẩm văn bản được quét thành các chương có thể đọc được cho máy tính bảng hoặc thiết bị đọc trên thiết bị di động.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Nó có thể phù hợp với các định dạng chương tùy chỉnh không?",
        "answer": "Vâng. Bạn có thể thêm các mẫu biểu thức chính quy tùy chỉnh trong bảng điều khiển thanh bên (ví dụ: `^Part\\s+\\w+`) để nhắm mục tiêu các bố cục độc đáo."
      },
      {
        "question": "Điều này có ảnh hưởng đến việc trình bày trang trực quan không?",
        "answer": "Không. Công cụ chỉ thêm danh mục dấu trang cấu trúc nội bộ. Nội dung văn bản và hình ảnh của các trang vẫn còn nguyên."
      },
      {
        "question": "Hỗ trợ bao nhiêu cấp độ dấu trang?",
        "answer": "Công cụ này hỗ trợ các cấu trúc dấu trang được lồng sâu, cho phép bố cục chương, phần và phần phụ."
      }
    ]
  },
  "batch-barcode-injector": {
    "title": "Nhúng mã vạch hàng loạt",
    "metaDescription": "Thêm hàng loạt mã QR hoặc mã vạch Code 128 vào các trang PDF. Điều chỉnh vị trí để theo dõi tài liệu, nhãn và quy trình in.",
    "keywords": [
      "nhúng qr hàng loạt",
      "chèn mã vạch pdf",
      "in nhãn mã vạch"
    ],
    "description": "<p>Bộ tiêm mã vạch chính xác theo lô kết nối việc theo dõi tài sản kỹ thuật số với lập chỉ mục tài liệu vật lý.</p>\n      <p>Trong kho bãi, xem xét hợp đồng hoặc hậu cần, chúng ta thường cần Đóng dấu mã vạch duy nhất lên hóa đơn hoặc thẻ thiết bị. Công cụ này giúp việc này trở nên vô cùng dễ dàng.</p>\n      <p>Tạo mã QR hoặc mã vạch Code128 có khả năng đọc cao và sử dụng không gian làm việc căn chỉnh tuyệt đẹp của chúng tôi với các hướng dẫn bằng tia laser màu xanh lá cây để định vị chúng. Một tiếng bíp âm thanh quét sạch sẽ kích hoạt vị trí đặt, cung cấp phản hồi có chất lượng cao.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải tài liệu lên",
        "description": "Kéo và thả các tệp PDF đơn hoặc nhiều trang thể hiện các thỏa thuận hoặc danh sách vận chuyển."
      },
      {
        "step": 2,
        "title": "Vị trí tọa độ mã vạch",
        "description": "Đặt loại mã, giá trị và kéo hộp vị trí để chỉ định tọa độ."
      },
      {
        "step": 3,
        "title": "Tem và tải về",
        "description": "Nhấp vào thực thi để hiển thị lớp mã trên các chỉ mục trang được nhắm mục tiêu."
      }
    ],
    "useCases": [
      {
        "title": "Truy tìm xác thực hợp đồng",
        "description": "Áp dụng mã QR duy nhất hiển thị chi tiết chống hàng giả trên tiêu đề hợp đồng.",
        "icon": "file-check"
      },
      {
        "title": "Mã hóa danh sách vận chuyển",
        "description": "Đặt mã vạch Code128 tại các điểm mục tiêu để xác thực súng quét kho nhanh chóng.",
        "icon": "truck"
      },
      {
        "title": "Đăng ký thẻ tài sản",
        "description": "Thêm mã QR tồn kho hiển thị thông số kỹ thuật bảo trì vào trang thiết bị vật lý.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Mã vạch được tạo có dễ quét được không?",
        "answer": "Vâng. Chúng tôi nhúng các bản trình bày PNG có độ phân giải cao không mất dữ liệu mà vẫn sắc nét ngay cả khi được in ở kích thước rất nhỏ."
      },
      {
        "question": "Tôi có thể thêm các giá trị duy nhất vào mỗi trang không?",
        "answer": "Hiện tại, việc chạy hàng loạt sẽ áp dụng cùng một mã được định cấu hình trên tất cả các trang đã chọn. Nhập excel đa giá trị được lên kế hoạch trong bản cập nhật trong tương lai."
      },
      {
        "question": "Tọa độ `pt` thể hiện điều gì?",
        "answer": "`pt` (Điểm) là đơn vị vật lý PDF tiêu chuẩn (72 pt = 1 inch). Các trang A4 được biểu diễn dưới dạng 595 × 842 pt."
      }
    ]
  },
  "signature-ink-optimizer": {
    "title": "Trích chữ ký & con dấu",
    "metaDescription": "Trích xuất chữ ký hoặc tem từ ảnh và xóa nền của ảnh. Tải xuống PNG trong suốt để sử dụng trong tài liệu.",
    "keywords": [
      "tách chữ ký",
      "làm trong suốt con dấu",
      "tách dấu đỏ png"
    ],
    "description": "<p>Chroma Ink Optimizer có chức năng như một bộ lọc mực chuyên nghiệp có độ trung thực cao.</p>\n      <p>Chữ ký hoặc con dấu công ty chụp trên điện thoại thường bị ố vàng, đổ bóng không đều và bị nhăn trang. Dán chúng trực tiếp vào các tệp PDF hợp đồng trông có vẻ nghiệp dư.</p>\n      <p>Công cụ này phân tách kênh Alpha dựa trên độ sáng và không gian màu. Nó tẩy trắng hoàn toàn nền giấy trong khi làm sắc nét màu đỏ tem (Mực Chroma) và chữ viết tay màu đen. Kết quả là một con tem PNG trong suốt, cao cấp có họa tiết mực thật.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải ảnh con dấu lên",
        "description": "Cung cấp ảnh chụp chữ ký hoặc con dấu của bạn được chụp bằng điện thoại."
      },
      {
        "step": 2,
        "title": "Điều chỉnh thanh trượt làm sạch",
        "description": "Di chuyển các thanh trượt độ tương phản và độ sáng để tách tiếng ồn xung quanh trong thời gian thực."
      },
      {
        "step": 3,
        "title": "Tải xuống chữ ký sạch",
        "description": "Xuất dưới dạng PNG trong suốt, sẵn sàng để đóng dấu vào các thỏa thuận tài liệu chính thức."
      }
    ],
    "useCases": [
      {
        "title": "Chuẩn bị chữ ký điện tử chuyên nghiệp",
        "description": "Chuyển đổi ảnh chữ ký màu xám thành các lớp trong suốt, đẹp mắt để ký thỏa thuận.",
        "icon": "file-signature"
      },
      {
        "title": "Vệ sinh seal công ty",
        "description": "Làm sạch bản quét tem vật lý bằng cách loại bỏ tiếng ồn của sợi giấy, chuẩn bị con dấu tem trong suốt sắc nét.",
        "icon": "stamp"
      },
      {
        "title": "Trích xuất nghệ thuật đường vẽ",
        "description": "Tách biệt các nét đen khỏi sổ phác thảo để có quy trình tô màu Photoshop dễ dàng.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "Quá trình trích xuất Alpha tự thích ứng khác với khóa thông thường như thế nào?",
        "answer": "Khóa sắc độ tiêu chuẩn thường làm cho các chi tiết nét đặc trưng trông có vẻ khối và có pixel. Thuật toán của chúng tôi chỉ tách nhiễu nền trắng/vàng và làm mịn đường viền mực."
      },
      {
        "question": "Hỗ trợ những định dạng hình ảnh nào?",
        "answer": "Chúng tôi hỗ trợ JPG, JPEG và PNG. Để có kết quả tốt nhất, hãy chụp bức ảnh đặc trưng của bạn dưới ánh sáng sáng, đều."
      },
      {
        "question": "Chi tiết chữ viết tay có bị sửa đổi không?",
        "answer": "Không. Tính năng lọc pixel hoạt động theo tọa độ gốc, làm sắc nét độ tương phản trong khi vẫn duy trì họa tiết nét chân thực."
      }
    ]
  },
  "dead-link-debugger": {
    "title": "Sửa liên kết hỏng",
    "metaDescription": "Kiểm tra các siêu liên kết PDF và thay thế các đích đến bị hỏng hoặc lỗi thời. Quét chú thích liên kết và lưu tài liệu đã cập nhật.",
    "keywords": [
      "sửa liên kết hỏng",
      "kiểm tra link pdf",
      "điều hướng url pdf"
    ],
    "description": "<p>Trình gỡ lỗi liên kết chết là trình chỉnh sửa cấu trúc sâu đảm bảo chất lượng tương tác liên kết trong các tệp đã xuất bản.</p>\n      <p>Các url bị hỏng (404/500) bên trong sách hướng dẫn, sách trắng hoặc hướng dẫn sẽ làm giảm uy tín của thương hiệu. Công cụ này cho phép bạn quản lý cơ sở dữ liệu siêu liên kết một cách liền mạch.</p>\n      <p>Nó phân tích các từ điển <code>/Liên kết</code> cấp thấp trên mỗi trang, Thăm dò chúng và hiển thị trạng thái liên kết trong một lưới tương tác (màu đỏ cho các liên kết chết, màu cam cho các chuyển hướng). Chỉ cần nhập URL chuyển hướng đã cập nhật và công cụ sẽ ghi trực tiếp mục tiêu mới vào luồng nhị phân PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Cung cấp tài liệu mục tiêu",
        "description": "Tải lên hướng dẫn sử dụng hoặc danh mục PDF có chứa các liên kết để gỡ lỗi."
      },
      {
        "step": 2,
        "title": "Quét và cập nhật",
        "description": "Cho phép trình gỡ lỗi trích xuất tất cả các thực thể URL. Nhập URL chuyển hướng mới cho các mục bị hỏng."
      },
      {
        "step": 3,
        "title": "Lưu cập nhật chuyển hướng",
        "description": "Nhấp vào thực hiện để viết lại các hành động /URI và tải xuống bản PDF đã sửa."
      }
    ],
    "useCases": [
      {
        "title": "Hotfix liên kết bị hỏng tờ rơi",
        "description": "Sửa ngay lập tức các url sai trên các tờ rơi đã xuất bản mà không cần mở lại trình chỉnh sửa thiết kế ban đầu.",
        "icon": "refresh-cw"
      },
      {
        "title": "Xác minh liên kết thư mục",
        "description": "Xác minh các liên kết thư mục học thuật trong báo cáo, cập nhật tài liệu tham khảo để duy trì quyền lực.",
        "icon": "book"
      },
      {
        "title": "Cập nhật đổi thương hiệu doanh nghiệp",
        "description": "Cập nhật hàng loạt các URL cũ trên các tệp PDF của công ty khi tên miền của công ty được thay đổi.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Tại sao khả năng tiếp cận liên kết không được kiểm tra trực tuyến đầy đủ?",
        "answer": "Trình duyệt web thực thi các chính sách CORS nghiêm ngặt nhằm chặn việc kiểm tra liên kết đa nguồn trực tiếp. Công cụ của chúng tôi liệt kê các liên kết rõ ràng và cho phép bạn sửa nóng chúng theo cách thủ công."
      },
      {
        "question": "Điều này có sửa đổi cách trình bày văn bản trực quan trên trang không?",
        "answer": "Không. Nó chỉ thay đổi hành động điều hướng `/URI` cơ bản. Văn bản liên kết trực quan vẫn không thay đổi."
      },
      {
        "question": "Nó có hỗ trợ sửa đổi dấu trang trang nội bộ không?",
        "answer": "Công cụ này xử lý các siêu liên kết `/URI` bên ngoài. Để điều hướng bố cục nội bộ, hãy sử dụng công cụ TOC tương tác của chúng tôi."
      }
    ]
  },
  "interactive-toc-generator": {
    "title": "Tạo mục lục tương tác",
    "metaDescription": "Thêm mục lục có thể nhấp vào tệp PDF của bạn. Tạo liên kết chương và quay lại điều hướng để duyệt tài liệu dễ dàng hơn.",
    "keywords": [
      "tạo mục lục tương tác",
      "mục lục nhấp chuột",
      "nút quay lại mục lục"
    ],
    "description": "<p>Trình tạo TOC tương tác mang đến trải nghiệm điều hướng mang tính cách mạng cho các tệp PDF mở rộng.</p>\n      <p>Việc lật qua hàng trăm trang trong các tài liệu phi cấu trúc để tìm các chương mục tiêu thật là khó chịu. Công cụ này giới thiệu <strong>Biên dịch TOC hai chiều</strong>.</p>\n      <p>Nó quét các tiêu đề và tạo ra một trang Mục lục cao cấp, lấy cảm hứng từ origami được chèn ngay sau bìa. Ngoài việc tạo các liên kết /GoTo có thể nhấp vào cho mỗi hàng chỉ mục, nó còn chèn một mỏ neo lơ lửng \"TOC ↩\" nhỏ, trang nhã ở góc của mỗi trang chương mục tiêu. Người đọc có thể chuyển qua lại ngay lập tức và tận hưởng khả năng điều hướng giống như trên web.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Cung cấp tài liệu PDF",
        "description": "Tải lên báo cáo, Sách điện tử hoặc đề xuất cần danh mục tương tác."
      },
      {
        "step": 2,
        "title": "Đặt tiêu đề & chỉ mục TOC",
        "description": "Tùy chỉnh tiêu đề chính và chọn chỉ mục trang để chèn trang TOC."
      },
      {
        "step": 3,
        "title": "Đan neo và lưu lại",
        "description": "Nhấp vào thực hiện để biên dịch các trang và viết điều hướng liên kết kép."
      }
    ],
    "useCases": [
      {
        "title": "Đánh bóng báo cáo thường niên của công ty",
        "description": "Chèn một trang chỉ mục đẹp mắt sau trang bìa để cho phép các cổ đông chuyển đổi giữa các biểu đồ tài chính.",
        "icon": "file-bar"
      },
      {
        "title": "Lập chỉ mục luận văn",
        "description": "Biên dịch nhanh các chỉ mục tiêu chuẩn phù hợp với quy tắc định dạng của trường đại học.\ndấu trang",
        "icon": "bookmark"
      },
      {
        "title": "Điều hướng hướng dẫn vận hành",
        "description": "Giúp người đọc sổ tay nhanh chóng chuyển từ trang xử lý sự cố trở lại TOC chính.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Mỏ neo hai chiều hoạt động như thế nào?",
        "answer": "Chúng tôi tạo chú thích Liên kết tiêu chuẩn trên trang TOC nhắm mục tiêu đến các trang tương ứng; sau đó chúng tôi nhúng một liên kết quay lại trang TOC trên tất cả các trang chương mục tiêu."
      },
      {
        "question": "Việc chèn trang TOC có làm hỏng số trang hiện có không?",
        "answer": "Không. Trình biên dịch tính đến phần bù của trang TOC mới được chèn, đảm bảo tất cả các đích đến đều căn chỉnh."
      },
      {
        "question": "Trang TOC có hợp lệ khi được in vật lý không?",
        "answer": "Có. TOC được tạo liệt kê các số trang vật lý rõ ràng để hướng dẫn người đọc giấy đồng thời kích hoạt các liên kết có thể nhấp vào trên màn hình."
      }
    ]
  },
  "pdf-deskew-aligner": {
    "title": "Tự động thẳng trang quét",
    "metaDescription": "Phát hiện dòng chữ nghiêng ngay trên thiết bị và đặt nội dung đã chỉnh trong trang gốc.",
    "keywords": [
      "chỉnh thẳng trang pdf",
      "sửa nghiêng tài liệu quét",
      "căn thẳng lề"
    ],
    "description": "\n      <p>Phát hiện dòng chữ nghiêng ngay trên thiết bị và đặt nội dung đã chỉnh trong trang gốc.</p>\n      <p>Trang trống, bản quét không rõ và trang có chú thích được giữ nguyên.</p>\n      <p>Độ phân giải cao hơn mất nhiều thời gian hơn. Trang rất lớn dùng độ phân giải phân tích thấp hơn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Cung cấp bản PDF lệch",
        "description": "Tải lên bất kỳ trang PDF nào có tài liệu được quét bị xoay hoặc căn chỉnh kém."
      },
      {
        "step": 2,
        "title": "Cài đặt căn chỉnh bản quét",
        "description": "Độ phân giải phân tích · Góc chỉnh tối đa"
      },
      {
        "step": 3,
        "title": "Phân tích và làm thẳng",
        "description": "Tải xuống · PDF đã căn chỉnh"
      }
    ],
    "useCases": [
      {
        "title": "Lưu trữ biên lai và hợp đồng",
        "description": "Làm thẳng các bản quét hợp đồng di động cầm tay nhanh chóng trước khi lưu chúng dưới dạng kho lưu trữ PDF kỹ thuật số chính thức.",
        "icon": "file-text"
      },
      {
        "title": "Số hóa sách học thuật",
        "description": "Khử trùng các bản quét sách vi phim nơi các dòng văn bản tràn ra khỏi lề ngang.",
        "icon": "book"
      },
      {
        "title": "Chấm điểm bài tập về nhà của học sinh",
        "description": "Chỉnh sửa ảnh chụp nhanh bài tập được chụp bằng điện thoại của học sinh, giúp giáo viên chấm điểm thư giãn.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Làm cách nào để phát hiện độ lệch của tài liệu?",
        "answer": "Phát hiện dòng chữ nghiêng ngay trên thiết bị và đặt nội dung đã chỉnh trong trang gốc."
      },
      {
        "question": "Quá trình này có cắt bỏ các cạnh của trang không?",
        "answer": "Phát hiện dòng chữ nghiêng ngay trên thiết bị và đặt nội dung đã chỉnh trong trang gốc."
      },
      {
        "question": "Nó có hỗ trợ các tài liệu chứa đầy sơ đồ không?",
        "answer": "Trang trống, bản quét không rõ và trang có chú thích được giữ nguyên."
      }
    ]
  },
  "pdf-two-column-reflower": {
    "title": "Chuyển đổi tài liệu 2 cột",
    "metaDescription": "Sắp xếp lại các tài liệu PDF hai cột thành một cột duy nhất để đọc trên thiết bị di động dễ dàng hơn. Điều chỉnh tài liệu học thuật cho màn hình nhỏ hơn.",
    "keywords": [
      "chuyển hai cột sang một cột",
      "dàn trang luận văn",
      "chia hộp cắt pdf"
    ],
    "description": "<p>Reflower hai cột học thuật giải quyết điểm yếu quan trọng nhất của nghiên cứu kỹ thuật số: đọc bài viết trên màn hình di động tiêu chuẩn.</p>\n      <p>Bố cục hai cột (được IEEE, ACM, Nature và các báo cáo lớn sử dụng) được thiết kế cho giấy A4. Điều hướng chúng trên màn hình điện thoại hoặc thiết bị Kindle yêu cầu liên tục thu phóng, kéo sang phải, cuộn xuống và xoay ngược lên. Nó phá vỡ hoàn toàn khả năng đọc hiểu.</p>\n      <p>Bộ xử lý của chúng tôi triển khai <strong>quét chỉnh lại đoạn văn thông minh và quét rào cản phân vùng dọc</strong>. Nó phân tích tọa độ ký tự để ánh xạ các máng xối hai cột, phân chia bố cục và dệt các phân đoạn theo chiều dọc (cột trái trước, sau đó phải). Đồ thị, công thức và tiêu đề được sắp xếp lại liền mạch thành một bản PDF cuộn dọc, một cột, có thể di chuyển được.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên bản PDF hai cột",
        "description": "Cung cấp báo cáo tạp chí IEEE/ACM hoặc bảng PDF nhiều cột."
      },
      {
        "step": 2,
        "title": "Kiểm tra máng xối phân vùng",
        "description": "Xác minh các hướng dẫn lát phân vùng dọc màu đỏ. Điều chỉnh lề để tránh các phần tử chồng chéo."
      },
      {
        "step": 3,
        "title": "Chỉnh lại và lưu",
        "description": "Nhấp vào thực hiện để biên dịch các trang thành bố cục có thể điều chỉnh được và tải xuống ngay lập tức."
      }
    ],
    "useCases": [
      {
        "title": "Nhập sách e-Reader",
        "description": "Chuyển đổi các bài luận hai cột dày đặc thành tài liệu một cột thoải mái phù hợp với màn hình Kindle và Onyx.",
        "icon": "tablet"
      },
      {
        "title": "Đọc điện thoại tàu điện ngầm",
        "description": "Đọc tài liệu nghiên cứu một cách thoải mái bằng cử chỉ vuốt dọc bằng một tay trong khi di chuyển.",
        "icon": "smartphone"
      },
      {
        "title": "Định dạng tạp chí lưu trữ",
        "description": "Hiện đại hóa các tờ báo cột hẹp cũ thành các định dạng web một cột dễ đọc.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "Biểu đồ và phương trình rộng được xử lý như thế nào?",
        "answer": "Công cụ của chúng tôi áp dụng \"phát hiện phần tử nhịp\". Khi một phương trình hoặc sơ đồ vượt quá độ rộng cột bình thường, nó sẽ bị cô lập dưới dạng một mục có chiều rộng đầy đủ, duy trì tỷ lệ ban đầu mà không bị cắt bớt."
      },
      {
        "question": "Điều này có làm thay đổi độ phân giải của văn bản vector không?",
        "answer": "Không hề. Chúng tôi viết lại ma trận biến đổi đối tượng văn bản PDF ở cấp cây đối tượng thay vì rasterizing, nghĩa là văn bản vẫn là vectơ 100% và hoàn toàn có thể lựa chọn."
      },
      {
        "question": "Tính năng này có hoạt động trên tài liệu hình ảnh được quét không?",
        "answer": "Đối với các tệp PDF dựa trên hình ảnh phẳng, chúng tôi khuyên bạn nên chạy công cụ OCR trước khi thực hiện quy trình Reflow."
      }
    ]
  },
  "pdf-page-resizer-uniform": {
    "title": "Đồng nhất kích thước trang",
    "metaDescription": "Thay đổi kích thước các trang PDF hỗn hợp thành kích thước đồng nhất. Chuẩn hóa các trang A4, A3 và Letter với tỷ lệ tỷ lệ và lề giữa.",
    "keywords": [
      "đồng nhất khổ giấy pdf",
      "co giãn trang về a4",
      "căn giữa trang in"
    ],
    "description": "<p>Bộ điều chỉnh kích thước PDF đa định dạng là công cụ chuẩn hóa tối ưu cho các tài liệu công ty lộn xộn, không khớp.</p>\n      <p>Việc kết hợp hóa đơn, hợp đồng và biểu đồ bổ sung thường tạo ra một tệp PDF chứa các trang sổ cái A3 khổng lồ, các thỏa thuận A4 tiêu chuẩn và phong bì cỡ Letter. Việc lật qua chúng rất dễ gây mất tập trung và gửi chúng đến máy in văn phòng thực tế thường gây ra lỗi kẹt giấy do kích thước không khớp.</p>\n      <p>Công cụ này viết lại các lưới <code>/MediaBox</code> và <code>/CropBox</code> cấp thấp trên mỗi trang. Nó ánh xạ chiều rộng và chiều cao hiện có, chia tỷ lệ các trang gốc theo tỷ lệ để phù hợp với các mục tiêu đặt trước (ví dụ: A4 tiêu chuẩn) đồng thời giới thiệu các lề xung quanh trang nhã, nhất quán, làm cho toàn bộ tệp trông cực kỳ bóng bẩy.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Cung cấp PDF có kích thước hỗn hợp",
        "description": "Tải lên tài liệu PDF đã hợp nhất có chứa kích thước trang không khớp, lộn xộn."
      },
      {
        "step": 2,
        "title": "Chọn mục tiêu đặt trước",
        "description": "Chọn kích thước thống nhất mục tiêu (ví dụ: A4, Letter, A3) và chuyển đổi chế độ tỷ lệ."
      },
      {
        "step": 3,
        "title": "Căn chỉnh và tải xuống",
        "description": "Nhấp vào thực hiện để kích hoạt căn chỉnh trang tính 3D, tải xuống bản PDF được chuẩn hóa đẹp mắt."
      }
    ],
    "useCases": [
      {
        "title": "Đề xuất RFP của công ty",
        "description": "Chuẩn hóa các chứng chỉ năng lực được quét và bảng đấu thầu A4 trước khi in giấy.",
        "icon": "file-text"
      },
      {
        "title": "Tích hợp biểu đồ tài chính",
        "description": "Chia tỷ lệ dòng tiền tài chính A3 rộng thành các trang A4 gọn gàng, đảm bảo tiêu chuẩn in ấn.",
        "icon": "layout"
      },
      {
        "title": "Tiêu chuẩn hóa lề sách",
        "description": "Buộc các trang sách được quét hơi khác nhau thành một kích thước hoàn toàn thống nhất để đọc thoải mái.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Điều này có làm sai lệch nội dung của tôi không?",
        "answer": "Không bao giờ. Chúng tôi hỗ trợ cả \"Contain\" (tỷ lệ theo tỷ lệ với các thanh màu trắng) và \"Cover\" (cắt ở giữa). Chế độ Chứa mặc định duy trì tỷ lệ khung hình, ngăn ngừa biến dạng."
      },
      {
        "question": "Các biểu mẫu và chú thích hiện có vẫn có thể nhấp vào được chứ?",
        "answer": "Vâng. Thuật toán ánh xạ các hệ số tỷ lệ tới mảng tọa độ Chú thích, hộp liên kết tỷ lệ, ranh giới ký hiệu và đầu vào để căn chỉnh hoàn hảo sau khi thay đổi kích thước."
      },
      {
        "question": "Có giới hạn về số lượng trang tôi có thể thay đổi kích thước không?",
        "answer": "Không. Vì tất cả các thao tác đều chạy cục bộ trong hộp cát máy khách của bạn bằng cách sử dụng JavaScript gốc nên bạn có thể xử lý các tệp PDF mở rộng chứa hàng trăm trang trong vài giây."
      }
    ]
  },
  "handwriting-ink-contrast-booster": {
    "title": "Tăng độ nét chữ viết tay",
    "metaDescription": "Nâng cao độ tương phản chữ viết tay và chữ ký trong hình ảnh được quét. Giảm tiếng ồn nền giấy và làm cho mực dễ đọc hơn.",
    "keywords": [
      "tăng nét chữ viết tay",
      "làm sạch nền giấy quét",
      "làm rõ nét chữ ký"
    ],
    "description": "<p>Bộ tăng cường độ tương phản mực viết tay là cứu tinh cho việc số hóa các thỏa thuận đã ký và kho lưu trữ bản thảo lịch sử.</p>\n      <p>Các bản quét tài liệu được ký tay thường trông mờ do phản chiếu của kính máy quét màu xám, giấy ố vàng hoặc mực bị phai. Việc in lại hoặc sao chụp các tập tin này sẽ khiến chữ ký bị mờ, khó đọc. Các công cụ tương phản truyền thống làm tối toàn bộ nền, làm xấu bố cục.</p>\n      <p>Công cụ này sử dụng **Cân bằng biểu đồ thích ứng có giới hạn độ tương phản (CLAHE) và phân tách màu dựa trên màu sắc**. Trong quy trình Canvas cục bộ an toàn, nó tách biệt các nét viết tay (cả đen và xanh) khỏi giấy da nền, tẩy trắng hoàn toàn các nếp nhăn bóng và truyền các loại mực đã phai màu với độ tương phản sâu, bão hòa, giúp tài liệu của bạn trông cực kỳ sắc nét và sạch sẽ.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Nhập tài liệu được ký tay",
        "description": "Cung cấp bản PDF có chữ ký mờ, nhật ký viết tay hoặc bản phác thảo."
      },
      {
        "step": 2,
        "title": "Cấu hình bộ lọc mực",
        "description": "Chọn cấu hình màu để tách biệt (ví dụ: mực xanh, mực đen hoặc cả hai) và điều chỉnh độ sắc nét."
      },
      {
        "step": 3,
        "title": "Làm sắc nét và tải xuống",
        "description": "Nhấp vào thực hiện để theo dõi màu sắc bằng hiệu ứng máy quét radar và tải xuống bản PDF tinh khiết."
      }
    ],
    "useCases": [
      {
        "title": "Thực hiện sửa chữa hợp đồng",
        "description": "Sửa các thỏa thuận scan kém, mài chữ ký và tẩy nền giấy thành màu trắng tinh A4.",
        "icon": "file-check"
      },
      {
        "title": "Lưu trữ bản thảo viết tay",
        "description": "Số hóa nhật ký viết tay, trích xuất nét đen rõ ràng đồng thời xóa đi các vết bẩn do tuổi tác.",
        "icon": "book"
      },
      {
        "title": "Khôi phục sổ cái lịch sử",
        "description": "Khôi phục các chi tiết mực mờ trên sổ cái lưu trữ cũ, giải cứu tọa độ viết tay có giá trị.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Điều này khác với chuyển đổi thang độ xám thông thường như thế nào?",
        "answer": "Thang độ xám chuyển đổi bóng giấy thành giá trị màu xám. Thuật toán thích ứng của chúng tôi tách độ chói của nền và tách biệt \"phổ mực\" đặc trưng, ​​​​làm sạch phông nền thành màu trắng tuyệt đối trong khi vẫn làm sắc nét các cạnh nét vẽ."
      },
      {
        "question": "Tôi có bị mất kết cấu nét viết tay không?",
        "answer": "Không. Thuật toán CLAHE hoạt động ở cấp độ pixel phụ, duy trì áp lực nét bút tự nhiên, độ mờ của mực và độ dày của đường động."
      },
      {
        "question": "Tôi có thể giữ dấu tem màu đỏ của công ty không?",
        "answer": "Vâng. Bằng cách bật \"Bảo quản mực Chroma\", bộ tăng cường làm trắng nền giấy và làm tối chữ viết, đồng thời duy trì màu sắc tươi sáng của dấu đỏ và chữ ký mực xanh."
      }
    ]
  },
  "pdf-spine-bookbinder": {
    "title": "Tính độ dày gáy sách",
    "metaDescription": "Tính chiều rộng gáy sách từ số trang và trọng lượng giấy. Tạo mẫu bìa có thể in được với các đường gấp gáy.",
    "keywords": [
      "tính độ dày gáy sách",
      "thiết kế bìa sách",
      "khổ gáy sách brossure"
    ],
    "description": "<p>PDF Spine Bookbinder là cứu tinh trước khi in cho các nhà thiết kế, tác giả tự xuất bản và nhóm đấu thầu thương mại.</p>\n      <p>Khi biên soạn các danh mục sách dày, đề xuất đấu thầu hoặc thư mục hàng năm, việc đóng bìa hoàn hảo (đóng gáy bằng keo) cần có bìa có tọa độ gáy chính xác. Nếu chiều rộng gáy sách lệch đi dù chỉ 1 mm, bìa đóng sẽ bị cong, dịch chuyển hoặc bị nhàu. Việc tính số trang theo trọng lượng giấy rất phức tạp và dễ xảy ra lỗi.</p>\n      <p>Công cụ này sử dụng <strong>thư viện GSM theo độ dày giấy được mô hình hóa vật lý</strong>. Chỉ cần nhập số trang PDF của bạn và chọn loại giấy (ví dụ: 80 GSM offset, 100 GSM gloss). Công cụ này tính toán chiều rộng gáy sách đến từng micromet và biên soạn một bản PDF bìa cực rộng, sẵn sàng in hoàn chỉnh với các nắp trước/sau tiêu chuẩn và các nếp gấp chính xác.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Đặt trang và loại kho",
        "description": "Nhập số trang tài liệu và chọn thông số kỹ thuật của kho giấy mục tiêu."
      },
      {
        "step": 2,
        "title": "Nhập văn bản cột sống",
        "description": "Nhập tên sách, thông tin chi tiết về tác giả và tùy chỉnh hình nền gáy/bìa."
      },
      {
        "step": 3,
        "title": "Xem trước và xuất 3D",
        "description": "Xoay và kiểm tra bìa sách của bạn trong bìa sách 3D tương tác. Xuất PDF vector có độ phân giải cao."
      }
    ],
    "useCases": [
      {
        "title": "Đề xuất đấu thầu dày đặc",
        "description": "Thiết kế các tờ bìa chuyên nghiệp với khả năng căn chỉnh nếp gấp gáy chính xác cho các hồ sơ dự thầu dày.",
        "icon": "layers"
      },
      {
        "title": "Đóng bìa cứng luận văn",
        "description": "Vạch ra chiều rộng bố cục cột sống hoàn hảo cho luận văn thạc sĩ/tiến sĩ đại học.",
        "icon": "award"
      },
      {
        "title": "Bìa tiểu thuyết tự xuất bản",
        "description": "Dễ dàng tính toán chiều rộng gáy sách trước khi gửi tệp đến dịch vụ xuất bản In theo yêu cầu.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "Cách tính độ dày giấy GSM chính xác đến mức nào?",
        "answer": "Độ chính xác cao. Thư viện vật lý của chúng tôi phù hợp với mức trung bình của ngành (ví dụ: 70 GSM = 0,09mm, 80 GSM = 0,10mm, 150 GSM bóng = 0,125mm). Chúng tôi cũng bao gồm nút chuyển đổi \"In hai mặt\" để tự động giảm một nửa số phép tính."
      },
      {
        "question": "Bìa xuất khẩu đã sẵn sàng để in trực tiếp chưa?",
        "answer": "Vâng. Các tệp này là các tệp PDF hoàn hảo về vector có các dấu đăng ký tiêu chuẩn, thanh màu và hướng dẫn gáy, hoàn toàn tuân thủ các máy in thương mại kỹ thuật số và offset."
      },
      {
        "question": "Tôi có thể tải lên hình nền kéo dài cột sống không?",
        "answer": "Vâng. Bạn có thể tải lên các bố cục tùy chỉnh và bộ tổng hợp của chúng tôi sẽ tự động bao bọc và căn chỉnh đồ họa trên các nếp gấp gáy."
      }
    ]
  },
  "pdf-signature-anchor-helper": {
    "title": "Neo hướng dẫn ký tên",
    "metaDescription": "Đặt hướng dẫn chữ ký trên các trang PDF sử dụng tọa độ X/Y. Xem trước vị trí của họ trước khi lưu tài liệu cập nhật.",
    "keywords": [
      "hướng dẫn ký tên pdf",
      "neo vị trí ký",
      "ký tên liên kết"
    ],
    "description": "<p>Trình tạo hướng dẫn chữ ký PDF đảm bảo quy trình ký kết rõ ràng, không có lỗi cho các thỏa thuận nhiều trang.</p>\n      <p>Khi gửi các thỏa thuận NDA, báo cáo tài chính hoặc hợp đồng thuê thương mại dài nhiều trang, khách hàng thường bỏ lỡ các hộp ký quan trọng, yêu cầu các vòng lặp email qua lại vô tận và các giao dịch kinh doanh bị trì hoãn.</p>\n      <p>Công cụ của chúng tôi sử dụng <strong>ánh xạ ngữ nghĩa biểu thức chính quy tự nhiên</strong>. Nó quét bản đồ ký tự PDF để xác định các thuật ngữ như <code>Chữ ký:</code>, <code>签字:</code>, <code>Nhân chứng:</code> hoặc <code>签署日期:</code>. Sau đó, nó tận dụng <code>pdf-lib</code> để chèn các chú thích Liên kết tương tác PDF tiêu chuẩn. Khi mở bằng bất kỳ đầu đọc tiêu chuẩn nào, khách hàng sẽ nhìn thấy các mũi tên nhấp nháy có viền đèn neon ngay lập tức hướng dẫn họ đến đúng ô, giúp việc ký tên trở nên dễ dàng.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Hợp đồng kinh doanh nhập khẩu",
        "description": "Tải lên hợp đồng PDF hoặc NDA cần tọa độ chữ ký."
      },
      {"step":2,"title":"X / Y","description":"Nhấp vào phần xem trước PDF thực tế hoặc nhập tọa độ X và Y cho trang đã chọn."},
      {"step":3,"title":"Xử lý","description":"Xử lý tệp, xem kết quả rồi tải PDF xuống."},
    ],
    "useCases": [
      {
        "title": "Thỏa thuận NDA của doanh nghiệp",
        "description": "Đưa các hướng dẫn rõ ràng, nhấp nháy bên cạnh các khối ký tên để ngăn nhân viên tham gia thiếu các điều khoản.",
        "icon": "file-text"
      },
      {
        "title": "Hợp đồng cho thuê thương mại",
        "description": "Hướng dẫn nhiều người đồng ký tên thông qua các tài liệu bất động sản nhiều trang bằng các tab màu tùy chỉnh.",
        "icon": "users"
      },
      {
        "title": "Chữ ký PO mua sắm",
        "description": "Xếp chồng các con trỏ tương tác trên hóa đơn và đơn đặt hàng để đẩy nhanh vòng phê duyệt kế toán.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Những hướng dẫn này có xuất hiện khi tôi in hợp đồng không?",
        "answer": "Không. Các neo được thêm cờ PDF `Có thể in` tiêu chuẩn được đặt thành sai. Chúng hiển thị đẹp mắt trên màn hình máy tính/máy tính bảng nhưng vẫn hoàn toàn vô hình khi được in."
      },
      {
        "question": "Khách hàng có thể dễ dàng chuyển đổi giữa các trường chữ ký không?",
        "answer": "Vâng. Chúng tôi dệt neo nội bộ hai chiều. Khách hàng có thể nhấp vào dấu trang \"Hướng dẫn ký\" để tự động chuyển sang ô chữ ký trống tiếp theo ngay lập tức."
      },
      {
        "question": "Tính năng này có hoạt động trên tài liệu hình ảnh được quét không?",
        "answer": "Vâng. Bên cạnh việc tra cứu các luồng văn bản, trình phân tích cú pháp bố cục không gian của chúng tôi ước tính các dòng chữ ký dựa trên các quy tắc ngang và hộp giới hạn trên các trang được quét."
      }
    ]
  },
  "pdf-lossless-slicer": {
    "title": "Cắt bản vẽ không mất nét",
    "metaDescription": "Cắt một vùng của bản vẽ, bản đồ hoặc biểu đồ PDF bằng tọa độ chính xác. Giữ nguyên nội dung vector trong tệp PDF đã xuất.",
    "keywords": [
      "cắt bản vẽ lớn pdf",
      "cắt không mất dữ liệu",
      "cropbox bản vẽ"
    ],
    "description": "<p>Bộ cắt bản vẽ không mất dữ liệu PDF là một công cụ phẫu thuật có độ chính xác cao được thiết kế dành cho kiến trúc sư, kỹ sư và người vẽ chi tiết bản đồ.</p>\n      <p>Khi trích xuất một phòng máy bơm hoặc lõi chip cụ thể từ bản thiết kế kỹ thuật CAD đồ sộ hoặc bản đồ địa lý PDF, ảnh chụp màn hình truyền thống sẽ tạo ra văn bản mờ, có pixel. Các công cụ cắt xén thông thường chỉ cần đặt một mặt nạ lên trang tính, nghĩa là tệp lớn 100MB vẫn có dung lượng lớn và nội dung ẩn vẫn có thể được trích xuất.</p>\n      <p>Công cụ này chỉnh sửa các ma trận trang <code>/MediaBox</code>, <code>/CropBox</code> và <code>/BleedBox</code> ở cấp độ cây đối tượng. Nó cô lập về mặt vật lý các nút vectơ bên ngoài vùng đã chọn, giữ cho vùng mục tiêu hoàn hảo 100% về vectơ (cho phép phóng to thu phóng vô hạn) đồng thời loại bỏ các đường dẫn và hình ảnh ngoài màn hình dư thừa để thu nhỏ kích thước tệp xuống 95%!</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Nhập bản thiết kế lớn",
        "description": "Tải lên bản đồ CAD, GIS giàu vector hoặc bản PDF danh mục có độ phân giải cao."
      },
      {"step":2,"title":"Hình chữ nhật cắt","description":"Nhập X, Y, chiều rộng và chiều cao rồi kiểm tra trang đã chọn trong phần xem trước."},
      {"step":3,"title":"Xử lý","description":"Xử lý tệp, xem kết quả rồi tải PDF xuống."},
    ],
    "useCases": [
      {
        "title": "Cách ly bản thiết kế CAD",
        "description": "Cắt ra chi tiết \"hệ thống làm mát\" từ bản thiết kế sơ đồ mặt bằng khổng lồ 100 MB để chia sẻ với các nhà thầu phụ.",
        "icon": "crop"
      },
      {
        "title": "Cắt bản đồ GIS",
        "description": "Trích xuất khối bản đồ đường phố thành phố rõ ràng, không mất dữ liệu để tạo trang trình bày mà không làm giảm độ phân giải.",
        "icon": "map"
      },
      {
        "title": "Truy tìm minh họa thủ công",
        "description": "Lossless cô lập các số liệu sách khoa học để nhúng vào các bài báo học thuật chất lượng cao.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Điều này khác với cắt xén tiêu chuẩn như thế nào?",
        "answer": "Cắt xén tiêu chuẩn chỉ điều chỉnh giới hạn hình ảnh; các vectơ ẩn vẫn còn trong tệp. Bộ cắt của chúng tôi cắt các đường dẫn vectơ chồng chéo và lọc các hình ảnh XObject ngoài giới hạn, đảm bảo cách ly dữ liệu hoàn chỉnh và nén tệp tối đa."
      },
      {
        "question": "Các lớp văn bản có còn có thể tìm kiếm được không?",
        "answer": "Vâng. Bất kỳ ký tự văn bản nào nằm trong ranh giới được cắt vẫn hoàn toàn rõ ràng về vectơ, có thể tìm kiếm và chọn được."
      },
      {
        "question": "Tôi có thể xuất các vùng được cắt lát sang SVG không?",
        "answer": "Đầu ra là một tệp PDF vector được tiêu chuẩn hóa. Bạn có thể chuyển tệp kết quả sang công cụ PDF-to-SVG của chúng tôi để chuyển đổi tệp đó sang định dạng đồ họa vector có khả năng mở rộng trên web."
      }
    ]
  },
  "pdf-scratchpad-canvas": {
    "title": "Chèn nháp lưới ô vuông",
    "metaDescription": "Thêm lề lưới, đường kẻ hoặc lề ghi chú Cornell vào các trang PDF. Tạo thêm không gian viết để ghi chú học tập, tính toán và luyện thi.",
    "keywords": [
      "chèn lề nháp pdf",
      "mở rộng lề viết ghi chú",
      "lưới ô vuông nháp"
    ],
    "description": "<p>PDF Scratchpad Margin Extender là một công cụ học tập thiết yếu được thiết kế riêng cho sinh viên, nhà nghiên cứu và thí sinh thi chuyên nghiệp.</p>\n      <p>Khi giải bài kiểm tra thực hành, xem lại các trang trình bày hoặc đọc sách giáo khoa học thuật trên máy tính bảng kỹ thuật số, lề trang rất chặt chẽ. Việc mở một ứng dụng ghi chú riêng buộc bạn phải chuyển đổi màn hình liên tục, làm mất tập trung. Việc thêm các tờ giấy trắng phẳng sẽ ngăn bạn xem bài toán và phép tính cạnh nhau.</p>\n      <p>Công cụ này viết lại kích thước chiều rộng hoặc chiều cao của trang trong cấu trúc PDF cấp thấp, mở rộng lề <code>/MediaBox</code> thêm 200~250 pt ở bên phải hoặc dưới cùng. Sau đó, nó sẽ phủ các đường lưới rõ ràng, các dòng sổ ghi chép do trường đại học quản lý hoặc bố cục của Cornell vào các lề mới, cung cấp cho bạn các bảng nháp liền kề, chuyên dụng bên cạnh mỗi trang trình bày hoặc câu hỏi!</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải slide bài giảng lên",
        "description": "Cung cấp sách giáo khoa, slide hoặc tài liệu học tập dưới dạng PDF."
      },
      {
        "step": 2,
        "title": "Chọn kiểu lề và lưới",
        "description": "Chọn hướng mở rộng lề (ví dụ: bên phải cho máy tính bảng) và chọn mẫu lưới."
      },
      {
        "step": 3,
        "title": "Ghép canvas và tải xuống",
        "description": "Nhấp vào thực hiện để tạo các trang mở rộng hoàn chỉnh với các lưới nháp đẹp mắt."
      }
    ],
    "useCases": [
      {
        "title": "Luyện thi STEM",
        "description": "Ghép lề lưới bên cạnh đề thi toán, lý, giải đạo hàm ngay bên cạnh câu hỏi.",
        "icon": "edit-3"
      },
      {
        "title": "Phân tích khả năng đọc ngôn ngữ",
        "description": "Thêm lề sổ ghi chép có đường kẻ bên cạnh các bài tiểu luận ngoại ngữ để phân tích từ vựng và dịch đoạn văn.",
        "icon": "book"
      },
      {
        "title": "Kiểm tra bản thiết kế kiến trúc",
        "description": "Thêm khoảng trống lề bên cạnh bản thiết kế để tính toán kỹ thuật và nhận xét đánh giá của khách hàng.",
        "icon": "columns"
      }
    ],
    "faq": [
      {
        "question": "Điều này có làm hỏng văn bản PDF gốc của tôi không?",
        "answer": "Không hề. Thuật toán mở rộng kích thước giấy ra bên ngoài. Nội dung gốc vẫn giữ nguyên bố cục, phông chữ và độ phân giải; chúng tôi chỉ đơn giản kéo dài khoảng trắng trên các đường viền và vẽ các lưới trên chúng."
      },
      {
        "question": "Bút viết tay tiêu chuẩn có thể viết vào sổ ghi chép được không?",
        "answer": "Có. Các trang PDF mới được biên soạn nguyên bản. Các ứng dụng ghi chú phổ biến trên máy tính bảng như Goodnotes, Notability, Xodo và Acrobat có thể viết, đánh dấu và vẽ nguệch ngoạc trực tiếp trong không gian lưới mới."
      },
      {
        "question": "Các đường lưới có tối và gây mất tập trung không?",
        "answer": "Chúng tôi đã tuyển chọn ba màu tinh tế, thân thiện với mắt (xám xanh dịu, nâu ấm và xanh lục sáng). Các dòng mỏng và nhẹ nhàng, đóng vai trò như những hướng dẫn mà không làm bạn phân tâm khỏi nội dung trang gốc."
      }
    ]
  },
  "photo-tiling-prepress": {
    "title": "Ghép ảnh thẻ in ấn",
    "metaDescription": "Cắt và sắp xếp ảnh CMND hoặc hộ chiếu trên giấy ảnh tiêu chuẩn. Thêm dấu cắt in để giúp cắt tờ thành phẩm.",
    "keywords": [
      "in ảnh thẻ",
      "Xếp ảnh thẻ in giấy ảnh",
      "đường viền cắt ảnh"
    ],
    "description": "<p>Công cụ Prepress Photo Tiling là một trình biên dịch bố cục có độ chính xác cao, tiết kiệm chi phí được thiết kế cho thẻ đăng ký cá nhân và studio chụp ảnh.</p>\n      <p>In ảnh hộ chiếu, ảnh CMND hoặc bằng lái xe tại nhà thường dẫn đến kích thước vật lý không chính xác (thường in quá lớn hoặc quá nhỏ), lãng phí giấy ảnh và căn chỉnh không đều. Đến các cửa hàng in chuyên nghiệp để lấy bố cục rất tốn thời gian.</p>\n      <p>Công cụ của chúng tôi tích hợp <strong>công cụ ma trận ép trước chính xác</strong>. Nó chấp nhận ảnh chân dung hoặc bản quét thẻ căn cước, cắt chúng theo kích thước tiêu chuẩn (ví dụ: thông số hộ chiếu 1\" hoặc 2\", tính toán số lượng ô tối ưu cho giấy ảnh tiêu chuẩn (ví dụ: tờ 5\" hoặc 6\") và chèn các đường cắt sắc nét, có kích thước cực nhỏ để dễ dàng cắt vật lý, tạo ra bản PDF có thể in hoàn hảo.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ảnh hộ chiếu nhập khẩu",
        "description": "Tải lên ảnh chụp chân dung camera hoặc ảnh CMND hai mặt."
      },
      {
        "step": 2,
        "title": "Định cấu hình giấy và bố cục",
        "description": "Chọn kích thước giấy in mục tiêu (ví dụ: 6\") và chọn bố cục lưới (ví dụ: 8 bản sao của ảnh 1\")."
      },
      {
        "step": 3,
        "title": "Ngói và xuất khẩu",
        "description": "Kiểm tra các ô ảnh trên lưới của chúng tôi và xuất bản PDF có thể in được với độ phân giải cao."
      }
    ],
    "useCases": [
      {
        "title": "Ảnh hộ chiếu tự phục vụ",
        "description": "Sắp xếp các bức chân dung hộ chiếu được chụp bằng điện thoại di động của bạn trên một lưới giấy ảnh 6 inch duy nhất và in 8 bản sao với một phần chi phí studio tiêu chuẩn.",
        "icon": "user"
      },
      {
        "title": "CMND Copy 2 mặt",
        "description": "Định dạng bản scan mặt trước và mặt sau của CMND ngay ngắn trên tờ Letter/A4 tiêu chuẩn để nộp hồ sơ chính thức.",
        "icon": "file-text"
      },
      {
        "title": "Trang thu nhỏ ảnh hàng loạt",
        "description": "Xếp nhiều kỷ niệm của gia đình hoặc thiết kế ảnh chụp nhanh lên giấy lưới để in các tờ liên hệ hình thu nhỏ một cách hiệu quả.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Kích thước in có khớp với thông số kỹ thuật 1\" hoặc 2\" chính thức không?",
        "answer": "Vâng. Công cụ lưới đo lường bằng cách sử dụng các điểm PDF tiêu chuẩn (72 pt = 1 inch), hiển thị chính xác ảnh 1\" ở kích thước 25x35mm và 2\" ảnh ở kích thước 35x49mm. Đảm bảo bạn in ở \"Kích thước thực tế/Tỷ lệ 100%\" trong cài đặt máy in của bạn."
      },
      {
        "question": "Tôi có thể kết hợp ảnh 1\" và 2\" trên một tờ không?",
        "answer": "Vâng. Chúng tôi cung cấp các cài đặt trước bố cục kết hợp được tuyển chọn (ví dụ: \"4 bản sao của 1\" + 4 bản sao của 2\"), cho phép bạn tối đa hóa không gian giấy ảnh."
      },
      {
        "question": "Mẫu có bị tràn viền không?",
        "answer": "Có. Bố cục chế bản dành sẵn lề an toàn in 4mm tiêu chuẩn trên viền giấy, ngăn trục lăn máy in vật lý cắt xén ảnh."
      }
    ]
  },
  "find-and-redact": {
    "title": "Tìm và Che khuất",
    "metaDescription": "Tìm kiếm và che khuất văn bản trên tất cả các trang của PDF. Che khuất hàng loạt thông tin nhạy cảm như số tài khoản, tên, v.v.",
    "keywords": [
      "che khuất pdf",
      "tìm và che khuất",
      "che khuất hàng loạt",
      "xóa văn bản",
      "kiểm duyệt pdf",
      "ẩn dữ liệu nhạy cảm"
    ],
    "description": "\n      <p>Công cụ Tìm và Che khuất cho phép bạn tìm kiếm văn bản, số hoặc mẫu cụ thể trên tất cả các trang của tài liệu PDF và che khuất tất cả các kết quả trùng khớp cùng một lúc. Rất phù hợp để loại bỏ thông tin nhạy cảm như số tài khoản, tên, địa chỉ hoặc bất kỳ dữ liệu bảo mật nào.</p>\n      <p>Xem trước tất cả các kết quả trùng khớp trước khi áp dụng che khuất và chọn lọc những vị trí cần che khuất. Hỗ trợ tìm kiếm phân biệt chữ hoa chữ thường, khớp toàn bộ từ và biểu thức chính quy (regex) để khớp mẫu nâng cao.</p>\n      <p>Mọi quá trình xử lý đều diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu luôn riêng tư và an toàn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp PDF",
        "description": "Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tệp."
      },
      {
        "step": 2,
        "title": "Tìm kiếm văn bản",
        "description": "Nhập văn bản, số hoặc mẫu biểu thức chính quy (regex) mà bạn muốn tìm và che khuất."
      },
      {
        "step": 3,
        "title": "Xem lại và lựa chọn",
        "description": "Xem trước tất cả kết quả khớp và chọn các mục bạn muốn che khuất."
      },
      {
        "step": 4,
        "title": "Áp dụng che khuất",
        "description": "Tùy chỉnh giao diện che khuất và áp dụng cho các kết quả đã chọn."
      }
    ],
    "useCases": [
      {
        "title": "Tuân thủ quyền riêng tư",
        "description": "Che khuất thông tin cá nhân để tuân thủ GDPR, HIPAA hoặc các quy định khác.",
        "icon": "shield"
      },
      {
        "title": "Tài liệu pháp lý",
        "description": "Loại bỏ dữ liệu mật khỏi các tài liệu pháp lý trước khi chia sẻ.",
        "icon": "scale"
      },
      {
        "title": "Bản ghi tài chính",
        "description": "Che khuất số tài khoản, số định danh cá nhân (SSN) hoặc dữ liệu tài chính khỏi các bản sao kê.",
        "icon": "credit-card"
      }
    ],
    "faq": [
      {
        "question": "Việc che khuất có vĩnh viễn không?",
        "answer": "Có, việc che khuất sẽ xóa vĩnh viễn văn bản nằm bên dưới. Nội dung gốc không thể khôi phục lại được. Hãy luôn sao lưu tệp gốc trước khi thực hiện."
      },
      {
        "question": "Tôi có thể che khuất hình ảnh hoặc văn bản quét (scanned text) không?",
        "answer": "Công cụ này hoạt động trên các tệp PDF dạng văn bản. Đối với tài liệu quét, bạn cần sử dụng tính năng che khuất vùng thủ công."
      },
      {
        "question": "Tôi có thể tùy chỉnh giao diện của phần che khuất không?",
        "answer": "Có, bạn có thể thiết lập màu sắc của vùng che khuất, thêm viền và tùy chọn thêm văn bản thay thế như \"[ĐÃ CHE]\" hoặc \"[ĐÃ KIỂM DUYỆT]\"."
      },
      {
        "question": "Tìm kiếm bằng biểu thức chính quy (regex) hoạt động thế nào?",
        "answer": "Bật \"Sử dụng biểu thức chính quy\" để tìm kiếm bằng các mẫu regex. Ví dụ: sử dụng \\d{4}-\\d{4}-\\d{4}-\\d{4} để tìm số thẻ tín dụng."
      }
    ]
  },
  "pdf-to-markdown": {
    "title": "Chuyển PDF sang Markdown",
    "metaDescription": "Chuyển đổi PDF sang định dạng Markdown. Trích xuất văn bản và giữ nguyên các định dạng như tiêu đề và danh sách.",
    "keywords": [
      "chuyển pdf sang markdown",
      "chuyển pdf sang md",
      "trích xuất văn bản pdf",
      "bộ chuyển đổi markdown",
      "pdf sang văn bản"
    ],
    "description": "\n      <p>Công cụ Chuyển PDF sang Markdown giúp chuyển đổi tài liệu PDF của bạn thành các tệp Markdown sạch và có cấu trúc tốt. Công cụ này trích xuất nội dung văn bản một cách thông minh và cố gắng giữ nguyên các định dạng gốc như tiêu đề, danh sách và các đoạn văn.</p>\n      <p>Hoàn hảo để chuyển đổi tài liệu PDF sang các định dạng có thể chỉnh sửa phục vụ cho việc làm tài liệu, ghi chú hoặc nhập vào các hệ thống quản trị nội dung (CMS) hỗ trợ Markdown.</p>\n      <p>Mọi quá trình chuyển đổi đều diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu luôn riêng tư và an toàn.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên tệp PDF",
        "description": "Kéo và thả tệp PDF hoặc nhấp để chọn."
      },
      {
        "step": 2,
        "title": "Cấu hình tùy chọn",
        "description": "Đặt phạm vi trang, chọn có bao gồm số trang hay không và điều chỉnh cài đặt ngắt dòng."
      },
      {
        "step": 3,
        "title": "Chuyển đổi và tải xuống",
        "description": "Nhấp vào Chuyển đổi để tạo tệp Markdown của bạn và tải xuống."
      }
    ],
    "useCases": [
      {
        "title": "Làm tài liệu",
        "description": "Chuyển đổi tài liệu hướng dẫn và cẩm nang PDF sang Markdown để quản lý phiên bản.",
        "icon": "file-text"
      },
      {
        "title": "Ghi chú",
        "description": "Trích xuất nội dung từ các bài báo và sách PDF cho hệ thống ghi chú của bạn.",
        "icon": "edit-3"
      },
      {
        "title": "Di trú nội dung",
        "description": "Chuyển đổi nội dung PDF sang các nền tảng CMS hỗ trợ Markdown.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Định dạng có được giữ nguyên không?",
        "answer": "Công cụ cố gắng phát hiện các tiêu đề dựa trên kích thước phông chữ và các danh sách dạng ký tự/số. Các bố cục phức tạp có thể cần điều chỉnh thủ công."
      },
      {
        "question": "Tôi có thể chuyển đổi các trang cụ thể không?",
        "answer": "Có, bạn có thể chỉ định phạm vi trang như \"1-3, 5, 7\" để chỉ chuyển đổi các trang đó."
      },
      {
        "question": "Công cụ có hoạt động với các tài liệu PDF quét (scanned) không?",
        "answer": "Các tài liệu PDF quét chứa hình ảnh chứ không phải văn bản. Vui lòng sử dụng công cụ OCR của chúng tôi trước để trích xuất văn bản trước khi chuyển sang Markdown."
      }
    ]
  },
  "digital-sign-pdf": {
    "title": "Chữ ký số PDF",
    "metaDescription": "Ký điện tử các tài liệu PDF với chứng chỉ PFX, P12 hoặc PEM. Thêm chữ ký dựa trên chứng chỉ cục bộ trong trình duyệt của bạn.",
    "keywords": [
      "chữ ký số pdf",
      "chứng thư số x509",
      "ký pdf bằng pfx",
      "ký pdf bằng p12",
      "ký pdf bằng pem",
      "ký số pdf hợp pháp"
    ],
    "description": "\n      <p>Công cụ Chữ ký số cho phép bạn thêm các chữ ký số mã hóa X.509 vào tài liệu PDF. Khác với các chữ ký vẽ tay đơn giản, chữ ký số cung cấp giá trị pháp lý và xác minh tính toàn vẹn của tài liệu.</p>\n      <p>Tải lên tệp chứng thư số của bạn (định dạng PFX, P12 hoặc PEM), nhập mật khẩu và thực hiện ký PDF. Bạn có thể thêm chữ ký hiển thị trực quan với văn bản, hình ảnh và vị trí tùy chỉnh, hoặc chữ ký ẩn chỉ dùng để bảo vệ tính toàn vẹn của tài liệu.</p>\n      <p>Toàn bộ quá trình ký số diễn ra cục bộ trong trình duyệt của bạn. Chứng thư số và tài liệu của bạn không bao giờ bị tải lên bất kỳ máy chủ nào.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF",
        "description": "Tải lên tài liệu PDF bạn muốn ký số."
      },
      {
        "step": 2,
        "title": "Tải lên chứng thư số",
        "description": "Tải lên tệp chứng thư số X.509 của bạn (.pfx, .p12 hoặc .pem) và nhập mật khẩu tương ứng."
      },
      {
        "step": 3,
        "title": "Cấu hình chữ ký",
        "description": "Tùy chọn thêm lý do ký, địa điểm và chữ ký hiển thị với văn bản hoặc hình ảnh tùy chỉnh."
      },
      {
        "step": 4,
        "title": "Ký và tải xuống",
        "description": "Nhấp vào Ký PDF để áp dụng chữ ký số và tải xuống tài liệu đã ký."
      }
    ],
    "useCases": [
      {
        "title": "Tài liệu pháp lý",
        "description": "Ký kết hợp đồng, thỏa thuận và tài liệu pháp lý bằng chữ ký số có tính ràng buộc pháp lý.",
        "icon": "scale"
      },
      {
        "title": "Phê duyệt kinh doanh",
        "description": "Ký số hóa đơn, đơn đặt hàng và tài liệu phê duyệt để phục vụ đối chiếu, kiểm toán.",
        "icon": "briefcase"
      },
      {
        "title": "Toàn vẹn tài liệu",
        "description": "Đảm bảo rằng tài liệu không bị thay đổi hoặc giả mạo sau khi đã ký.",
        "icon": "shield-check"
      }
    ],
    "faq": [
      {
        "question": "Những định dạng chứng thư số nào được hỗ trợ?",
        "answer": "Hỗ trợ các định dạng chứng thư số PFX (.pfx), PKCS#12 (.p12) và PEM (.pem)."
      },
      {
        "question": "Chữ ký số này có giá trị pháp lý không?",
        "answer": "Có, chữ ký số X.509 được công nhận về mặt pháp lý ở hầu hết các quốc gia và vùng lãnh thổ khi sử dụng chứng thư số hợp lệ."
      },
      {
        "question": "Tôi có thể thêm chữ ký hiển thị trực quan không?",
        "answer": "Có, bạn có thể thêm hình ảnh chữ ký hoặc văn bản hiển thị kèm theo tùy chỉnh vị trí, kiểu dáng."
      }
    ]
  },
  "validate-signature": {
    "title": "Xác minh chữ ký số",
    "metaDescription": "Kiểm tra và xác minh chữ ký số trong tài liệu PDF. Xem tính hợp lệ của chứng thư số, thông tin người ký và tính toàn vẹn của tài liệu.",
    "keywords": [
      "xác minh chữ ký pdf",
      "kiểm tra chữ ký số",
      "xác thực chứng thư số pdf",
      "xác minh chữ ký"
    ],
    "description": "\n      <p>Công cụ Xác minh chữ ký số cho phép bạn kiểm tra các chữ ký số trong tài liệu PDF. Kiểm tra xem các chữ ký có hợp lệ hay không, xem thông tin chứng thư số và xác nhận tính toàn vẹn của tài liệu.</p>\n      <p>Tải lên tài liệu PDF đã ký để xem danh sách chữ ký, trạng thái hiệu lực của chúng, thông tin chi tiết về người ký và liệu tài liệu có bị sửa đổi sau khi ký hay không.</p>\n      <p>Mọi quá trình xác minh đều diễn ra cục bộ trong trình duyệt của bạn. Tài liệu của bạn không bao giờ bị tải lên bất kỳ máy chủ nào.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Tải lên PDF đã ký",
        "description": "Tải lên tài liệu PDF có chứa chữ ký số cần kiểm tra."
      },
      {
        "step": 2,
        "title": "Xem kết quả",
        "description": "Xem tất cả chữ ký được tìm thấy trong tài liệu cùng với trạng thái hiệu lực của chúng."
      },
      {
        "step": 3,
        "title": "Kiểm tra chi tiết",
        "description": "Xem chi tiết chứng thư số, thông tin người ký và dấu thời gian ký."
      },
      {
        "step": 4,
        "title": "Xuất báo cáo",
        "description": "Tùy chọn tải xuống báo cáo kết quả xác minh dưới định dạng JSON."
      }
    ],
    "useCases": [
      {
        "title": "Xác thực tài liệu",
        "description": "Xác minh rằng tài liệu đã ký là thật và không bị giả mạo hay chỉnh sửa trái phép.",
        "icon": "shield-check"
      },
      {
        "title": "Kiểm toán tuân thủ",
        "description": "Kiểm tra tính hợp lệ của chữ ký phục vụ cho mục đích tuân thủ quy trình và kiểm toán.",
        "icon": "clipboard-check"
      },
      {
        "title": "Xem xét chứng thư số",
        "description": "Xem thông tin chi tiết và ngày hết hạn của chứng thư số đã dùng để ký tài liệu.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "Chữ ký \"hợp lệ\" có nghĩa là gì?",
        "answer": "Chữ ký hợp lệ nghĩa là tài liệu chưa bị chỉnh sửa kể từ thời điểm ký và chuỗi chứng thư số vẫn nguyên vẹn, đáng tin cậy."
      },
      {
        "question": "Tôi có thể xác minh nhiều tài liệu PDF cùng lúc không?",
        "answer": "Có, bạn có thể tải lên nhiều tệp PDF và xác minh hàng loạt tất cả các chữ ký."
      },
      {
        "question": "Tại sao chữ ký lại báo không hợp lệ?",
        "answer": "Chữ ký có thể không hợp lệ nếu tài liệu đã bị sửa đổi sau khi ký, chứng thư số hết hạn hoặc chứng thư số đó không được hệ thống tin cậy."
      }
    ]
  }
,
"redact-pdf": {
  "title": "Che thông tin trong PDF",
  "metaDescription": "Bôi đen, làm mờ hoặc tạo pixel cho nội dung PDF nhạy cảm. Xuất các trang phẳng và xóa siêu dữ liệu cục bộ trong trình duyệt của bạn.",
  "keywords": [
    "biên tập lại pdf",
    "mất điện pdf",
    "khảm pdf",
    "mờ pdf",
    "quyền riêng tư pdf",
    "xóa dữ liệu nhạy cảm",
    "trình soạn thảo pdf an toàn"
  ],
  "description": "<p>Redact PDF cung cấp trình chỉnh sửa tương tác, trực quan để che giấu và bảo vệ vĩnh viễn dữ liệu nhạy cảm trong tài liệu PDF của bạn. Kéo để đánh dấu bất kỳ khu vực bí mật nào—chẳng hạn như tên, địa chỉ, số ID, chữ ký, con dấu chính thức, số liệu tài chính hoặc chân dung—và áp dụng các hiệu ứng bôi đen, bôi trắng, khảm hoặc làm mờ.</p>\n      <p>Không giống như các trình chỉnh sửa PDF tiêu chuẩn chỉ chồng các hình chữ nhật màu đen bề ngoài lên văn bản hiện có, công cụ này thực hiện <strong>tạo điểm ảnh vật lý không thể đảo ngược</strong>. Các lớp văn bản, đồ họa vector và luồng OCR bên dưới bị phá hủy hoàn toàn và không thể khôi phục được bằng cách dán sao chép hoặc kỹ thuật đảo ngược.</p>\n      <p>Ngoài ra, công cụ này còn thực hiện xóa siêu dữ liệu chuyên sâu, loại bỏ thông tin tác giả, lịch sử sáng tạo và luồng XMP. Tất cả quá trình xử lý diễn ra cục bộ 100% trong trình duyệt của bạn mà không cần tải lên máy chủ.</p>",
  "howToUse": [
    {
      "step": 1,
      "title": "Tải lên tài liệu PDF",
      "description": "Chọn hoặc kéo và thả tệp PDF bạn muốn biên tập lại."
    },
    {
      "step": 2,
      "title": "Đánh dấu vùng nhạy cảm",
      "description": "Nhấp và kéo trên bất kỳ trang nào để vẽ các hộp biên tập xung quanh nội dung bí mật."
    },
    {
      "step": 3,
      "title": "Chọn kiểu soạn thảo",
      "description": "Chọn bôi đen, làm trắng, khảm (kích thước pixel có thể điều chỉnh) hoặc làm mờ. Chuyển đổi xem trước thời gian thực để kiểm tra kết quả."
    },
    {
      "step": 4,
      "title": "Xuất PDF bảo mật",
      "description": "Nhấp vào \"Tạo PDF bảo mật\" để thực hiện làm phẳng, xóa siêu dữ liệu không thể đảo ngược và tải xuống tài liệu được bảo mật của bạn."
    }
  ],
  "useCases": [
    {
      "title": "Quyền riêng tư và tuân thủ quy định",
      "description": "Che dấu thông tin nhận dạng cá nhân (PII) một cách an toàn để tuân thủ các yêu cầu của GDPR, HIPAA hoặc CCPA.",
      "icon": "shield"
    },
    {
      "title": "Bí mật pháp lý & chia sẻ kinh doanh",
      "description": "Che giấu bí mật thương mại, điều khoản giải quyết, chữ ký và tem trước khi tiết lộ công khai hoặc phân phối ra bên ngoài.",
      "icon": "file-text"
    },
    {
      "title": "Bảo vệ tài chính và danh tính",
      "description": "Che giấu số tài khoản ngân hàng, mã số thuế, chi tiết thẻ tín dụng và số CMND khỏi bảng sao kê và hóa đơn.",
      "icon": "lock"
    }
  ],
  "faq": [
    {
      "question": "Có ai có thể khôi phục thông tin đã được biên tập lại bằng cách sao chép văn bản hoặc kiểm tra các lớp không?",
      "answer": "Không. Các khu vực được xử lý lại trải qua quá trình làm phẳng điểm ảnh vật lý. Văn bản, vectơ và đối tượng bên dưới bị xóa hoàn toàn khỏi cấu trúc tệp, khiến việc khôi phục không thể thực hiện được."
    },
    {
      "question": "Sự khác biệt giữa mất điện, khảm và mờ là gì?",
      "answer": "Blackout tạo ra một mặt nạ đen đặc (tiêu chuẩn cho văn bản pháp luật); Whiteout cung cấp một lớp mặt nạ trắng sạch; khảm tạo ra một lưới pixel; và độ mờ tạo ra hiệu ứng kính mờ mềm mại."
    },
    {
      "question": "Tệp có được tải lên máy chủ của bạn không?",
      "answer": "Không. Tất cả quá trình hiển thị, biên tập, làm phẳng và tạo PDF diễn ra hoàn toàn trong bộ nhớ trình duyệt của bạn. Tài liệu của bạn không bao giờ rời khỏi thiết bị của bạn."
    },
    {
      "question": "Siêu dữ liệu nào bị xóa?",
      "answer": "Tiêu đề tài liệu, Tác giả, Chủ đề, Từ khóa, Người tạo, Nhà sản xuất, Ngày tạo, Ngày sửa đổi và các luồng siêu dữ liệu XMP mở rộng đều bị xóa hoàn toàn."
    }
  ]
}
};
