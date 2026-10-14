import { localizedRedactionContent } from './redaction-locales';
/**
 * Korean tool content for SEO
 * Contains detailed descriptions, how-to steps, use cases, and FAQs for all tools
 * Requirements: 3.1 - Multi-language support (Korean)
 */

import { ToolContent } from '@/types/tool';

/**
 * Korean tool content map
 */
export const toolContentKo: Record<string, ToolContent> = {
  "pdf-multi-tool": {
    "title": "PDF 멀티 도구",
    "metaDescription": "올인원 PDF 편집기: 병합, 분할, 정리, 삭제, 회전, 페이지 추출을 하나의 강력한 도구로.",
    "keywords": [
      "pdf 멀티 도구",
      "pdf 편집기",
      "pdf 병합",
      "pdf 분할",
      "pdf 정리",
      "올인원 pdf"
    ],
    "description": "\n      <p>PDF 멀티 도구는 모든 PDF 페이지 관리 작업을 위한 포괄적인 솔루션입니다. 이 강력한 올인원 도구는 여러 PDF 작업을 단일 직관적인 인터페이스로 통합하여 시간과 노력을 절약합니다.</p>\n      <p>여러 문서 병합, 큰 PDF 분할, 페이지 재정렬, 불필요한 콘텐츠 삭제, 페이지 회전, 특정 섹션 추출 등 다른 애플리케이션 간 전환 없이 모든 작업을 처리할 수 있습니다.</p>\n      <p>모든 처리는 브라우저에서 직접 이루어지며, 문서의 개인 정보와 보안이 보장됩니다. 파일이 서버에 업로드되지 않습니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 업로드 영역에 드래그 앤 드롭하거나 클릭하여 장치에서 파일을 선택합니다."
      },
      {
        "step": 2,
        "title": "작업 선택",
        "description": "사용 가능한 작업 중 선택: 병합, 분할, 정리, 페이지 삭제, 회전, 빈 페이지 추가, 페이지 추출."
      },
      {
        "step": 3,
        "title": "옵션 구성",
        "description": "페이지 범위, 회전 각도, 병합 순서 등 선택한 작업에 특정한 설정을 조정합니다."
      },
      {
        "step": 4,
        "title": "처리 및 다운로드",
        "description": "처리 버튼을 클릭하고 작업이 완료되면 수정된 PDF를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "문서 준비",
        "description": "불필요한 페이지 제거, 콘텐츠 재정렬, 여러 파일 결합으로 제출용 문서를 준비합니다.",
        "icon": "file-check"
      },
      {
        "title": "보고서 조립",
        "description": "여러 보고서 섹션을 결합하고, 표지를 추가하고, 장을 하나의 전문 문서로 정리합니다.",
        "icon": "book-open"
      },
      {
        "title": "아카이브 관리",
        "description": "큰 아카이브 파일을 관리 가능한 섹션으로 분할하고, 관련 페이지를 추출하고, 기록 문서를 재정리합니다.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "한 번에 몇 개의 PDF를 처리할 수 있나요?",
        "answer": "최대 10개의 PDF 파일을 동시에 업로드하고 처리할 수 있으며, 총 최대 크기는 500MB입니다."
      },
      {
        "question": "북마크가 보존되나요?",
        "answer": "예, PDF를 병합할 때 도구는 기존 북마크를 보존하고 선택적으로 통합된 북마크 구조로 결합할 수 있습니다."
      },
      {
        "question": "페이지 제한이 있나요?",
        "answer": "엄격한 페이지 제한은 없습니다. 도구는 수백 페이지의 문서를 처리할 수 있지만, 매우 큰 파일은 처리 시간이 더 오래 걸릴 수 있습니다."
      }
    ]
  },
  "merge-pdf": {
    "title": "PDF 병합",
    "metaDescription": "여러 PDF 파일을 하나의 문서로 결합. 드래그 앤 드롭 재정렬이 가능한 무료 온라인 PDF 병합 도구.",
    "keywords": [
      "pdf 병합",
      "pdf 결합",
      "pdf 합치기",
      "pdf 머저",
      "pdf 연결"
    ],
    "description": "<p>PDF 병합을 사용하면 여러 PDF 문서를 빠르고 쉽게 하나의 파일로 결합할 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "여러 PDF 파일을 업로드 영역에 드래그 앤 드롭하거나 클릭하여 장치에서 파일을 선택합니다."
      },
      {
        "step": 2,
        "title": "순서 정렬",
        "description": "파일 썸네일을 드래그 앤 드롭하여 원하는 순서로 정렬합니다."
      },
      {
        "step": 3,
        "title": "병합 및 다운로드",
        "description": "병합 버튼을 클릭하여 모든 파일을 결합하고 병합된 PDF를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "보고서 결합",
        "description": "월간 또는 분기 보고서를 하나의 연간 문서로 병합합니다.",
        "icon": "file-text"
      },
      {
        "title": "포트폴리오 조립",
        "description": "여러 프로젝트 문서, 인증서, 작업 샘플을 전문 포트폴리오로 결합합니다.",
        "icon": "briefcase"
      },
      {
        "title": "청구서 통합",
        "description": "여러 청구서나 영수증을 하나의 문서로 병합합니다.",
        "icon": "receipt"
      }
    ],
    "faq": [
      {
        "question": "몇 개의 PDF를 병합할 수 있나요?",
        "answer": "최대 100개의 PDF 파일을 한 번에 병합할 수 있습니다."
      },
      {
        "question": "병합된 PDF는 원본 품질을 유지하나요?",
        "answer": "예, 병합 프로세스는 모든 문서의 원본 품질을 보존합니다."
      },
      {
        "question": "암호로 보호된 PDF를 병합할 수 있나요?",
        "answer": "암호로 보호된 PDF는 먼저 복호화해야 합니다."
      }
    ]
  },
  "split-pdf": {
    "title": "PDF 분할",
    "metaDescription": "PDF 파일을 여러 문서로 분할. 특정 페이지 추출 또는 페이지 범위로 나누기.",
    "keywords": [
      "pdf 분할",
      "pdf 나누기",
      "pdf 분리",
      "페이지 추출",
      "pdf 스플리터"
    ],
    "description": "<p>PDF 분할을 사용하면 하나의 PDF 문서를 여러 개의 작은 파일로 나눌 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 분할할 파일을 선택합니다."
      },
      {
        "step": 2,
        "title": "분할 방법 선택",
        "description": "페이지 범위, 특정 페이지 추출, 또는 일정 간격으로 분할을 선택합니다."
      },
      {
        "step": 3,
        "title": "페이지 범위 정의",
        "description": "추출할 페이지 번호 또는 범위를 입력합니다."
      },
      {
        "step": 4,
        "title": "분할 및 다운로드",
        "description": "분할을 클릭하여 새 PDF 파일을 만들고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "장 추출",
        "description": "책이나 매뉴얼을 개별 장으로 분할합니다.",
        "icon": "book"
      },
      {
        "title": "결합 스캔 분리",
        "description": "일괄 스캔된 문서를 개별 파일로 나눕니다.",
        "icon": "copy"
      },
      {
        "title": "유인물 만들기",
        "description": "프레젠테이션에서 특정 슬라이드를 추출합니다.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "PDF를 개별 페이지로 분할할 수 있나요?",
        "answer": "예, \"모든 페이지 분할\" 옵션을 선택하면 됩니다."
      },
      {
        "question": "분할 시 북마크는 어떻게 되나요?",
        "answer": "추출된 페이지 범위 내의 북마크는 보존됩니다."
      },
      {
        "question": "암호로 보호된 PDF를 분할할 수 있나요?",
        "answer": "분할 전에 PDF를 복호화해야 합니다."
      }
    ]
  },
  "compress-pdf": {
    "title": "PDF 압축",
    "metaDescription": "품질을 유지하면서 PDF 파일 크기 줄이기.",
    "keywords": [
      "pdf 압축",
      "pdf 크기 줄이기",
      "pdf 압축기",
      "pdf 축소",
      "pdf 최적화"
    ],
    "description": "<p>PDF 압축은 허용 가능한 품질을 유지하면서 PDF 문서의 파일 크기를 줄입니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 압축할 문서를 선택합니다."
      },
      {
        "step": 2,
        "title": "압축 수준 선택",
        "description": "낮음 (최고 품질), 중간 (균형), 높음 (최소 크기) 중 선택합니다."
      },
      {
        "step": 3,
        "title": "압축 및 다운로드",
        "description": "압축을 클릭하여 파일 크기를 줄이고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "이메일 첨부",
        "description": "이메일 첨부 제한을 충족하기 위해 PDF 크기를 줄입니다.",
        "icon": "mail"
      },
      {
        "title": "웹 게시",
        "description": "웹 다운로드용 PDF를 최적화합니다.",
        "icon": "globe"
      },
      {
        "title": "저장소 최적화",
        "description": "아카이브 문서를 압축하여 디스크 공간을 절약합니다.",
        "icon": "hard-drive"
      }
    ],
    "faq": [
      {
        "question": "파일 크기를 얼마나 줄일 수 있나요?",
        "answer": "이미지가 많은 PDF는 50-80% 줄일 수 있습니다."
      },
      {
        "question": "압축이 텍스트 품질에 영향을 미치나요?",
        "answer": "텍스트는 모든 압축 수준에서 선명하게 유지됩니다."
      },
      {
        "question": "여러 PDF를 한 번에 압축할 수 있나요?",
        "answer": "예, 최대 10개의 PDF 파일을 동시에 압축할 수 있습니다."
      }
    ]
  },
  "edit-pdf": {
    "title": "PDF 편집",
    "metaDescription": "온라인으로 PDF 파일 편집. 문서에 텍스트, 이미지, 주석 추가.",
    "keywords": [
      "pdf 편집",
      "pdf 편집기",
      "pdf 주석",
      "pdf에 텍스트 추가"
    ],
    "description": "<p>PDF 편집은 PDF 문서를 수정하고 주석을 달기 위한 포괄적인 도구 세트를 제공합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 편집할 문서를 선택합니다."
      },
      {
        "step": 2,
        "title": "편집 도구 선택",
        "description": "텍스트, 하이라이트, 도형, 이미지, 코멘트 도구 중 선택합니다."
      },
      {
        "step": 3,
        "title": "편집하기",
        "description": "문서를 클릭하여 주석을 추가하고 요소를 배치합니다."
      },
      {
        "step": 4,
        "title": "저장 및 다운로드",
        "description": "저장을 클릭하여 변경 사항을 적용하고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "문서 검토",
        "description": "협업 검토를 위해 코멘트와 마크업을 추가합니다.",
        "icon": "message-square"
      },
      {
        "title": "양식 작성",
        "description": "인쇄 없이 PDF 양식을 완성합니다.",
        "icon": "edit-3"
      },
      {
        "title": "콘텐츠 수정",
        "description": "공유 전에 민감한 정보를 제거합니다.",
        "icon": "eye-off"
      }
    ],
    "faq": [
      {
        "question": "PDF의 원본 텍스트를 편집할 수 있나요?",
        "answer": "이 도구는 주석과 새 콘텐츠 추가에 중점을 둡니다."
      },
      {
        "question": "편집이 영구적인가요?",
        "answer": "주석은 평면화하여 영구적으로 만들 수 있습니다."
      },
      {
        "question": "변경 사항을 취소할 수 있나요?",
        "answer": "예, 실행 취소/다시 실행 기능을 지원합니다."
      }
    ]
  },
  "jpg-to-pdf": {
    "title": "JPG를 PDF로",
    "metaDescription": "JPG 이미지를 PDF로 변환. 여러 JPG 파일을 하나의 PDF로 결합.",
    "keywords": [
      "jpg를 pdf로",
      "jpeg를 pdf로",
      "jpg 변환",
      "이미지를 pdf로"
    ],
    "description": "<p>JPG를 PDF로는 JPEG 이미지를 빠르고 쉽게 PDF 문서로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "JPG 이미지 업로드",
        "description": "JPG 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "정렬 및 구성",
        "description": "드래그하여 이미지를 재정렬하고 페이지 크기를 선택합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 PDF를 만들고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "사진 앨범",
        "description": "휴가 사진으로 PDF 앨범을 만듭니다.",
        "icon": "image"
      },
      {
        "title": "문서 스캔",
        "description": "휴대폰 사진을 PDF로 변환합니다.",
        "icon": "camera"
      },
      {
        "title": "포트폴리오 만들기",
        "description": "디자인 샘플을 PDF 포트폴리오로 컴파일합니다.",
        "icon": "folder"
      }
    ],
    "faq": [
      {
        "question": "몇 개의 이미지를 변환할 수 있나요?",
        "answer": "최대 100개의 JPG 이미지를 변환할 수 있습니다."
      },
      {
        "question": "이미지 품질이 보존되나요?",
        "answer": "예, 이미지는 원본 품질로 포함됩니다."
      },
      {
        "question": "다른 페이지 크기를 설정할 수 있나요?",
        "answer": "도구는 모든 페이지에 균일한 크기를 적용합니다."
      }
    ]
  },
  "sign-pdf": {
    "title": "PDF 서명",
    "metaDescription": "PDF 문서에 전자 서명 추가.",
    "keywords": [
      "pdf 서명",
      "전자 서명",
      "e-서명",
      "디지털 서명"
    ],
    "description": "<p>PDF 서명을 사용하면 PDF 문서에 전자 서명을 빠르고 안전하게 추가할 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "서명 만들기",
        "description": "서명을 그리거나, 입력하거나, 이미지를 업로드합니다. 종이에 쓴 서명의 사진을 스캔할 수도 있습니다."
      },
      {
        "step": 3,
        "title": "배치 및 조정",
        "description": "문서를 클릭하여 서명을 배치하고 크기를 조정합니다."
      },
      {
        "step": 4,
        "title": "저장 및 다운로드",
        "description": "저장을 클릭하여 서명된 PDF를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "계약서 서명",
        "description": "인쇄 없이 계약서에 전자 서명합니다.",
        "icon": "file-signature"
      },
      {
        "title": "양식 작성",
        "description": "신청서에 서명을 추가합니다.",
        "icon": "clipboard"
      },
      {
        "title": "승인 워크플로",
        "description": "검토 프로세스의 일부로 문서에 서명합니다.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "전자 서명은 법적으로 유효한가요?",
        "answer": "대부분의 국가에서 법적으로 인정됩니다."
      },
      {
        "question": "서명을 저장할 수 있나요?",
        "answer": "예, 브라우저의 로컬 저장소에 저장할 수 있습니다."
      },
      {
        "question": "여러 서명을 추가할 수 있나요?",
        "answer": "예, 필요한 만큼 서명을 추가할 수 있습니다."
      }
    ]
  },
  "crop-pdf": {
    "title": "PDF 자르기",
    "metaDescription": "PDF 페이지를 잘라 여백과 원하지 않는 영역 제거.",
    "keywords": [
      "pdf 자르기",
      "pdf 트리밍",
      "pdf 여백 제거"
    ],
    "description": "<p>PDF 자르기를 사용하면 PDF 페이지에서 여백과 원하지 않는 영역을 트리밍할 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "자르기 영역 정의",
        "description": "자르기 핸들을 드래그하여 유지할 영역을 정의합니다."
      },
      {
        "step": 3,
        "title": "페이지에 적용",
        "description": "모든 페이지 또는 특정 페이지에 자르기를 적용합니다."
      },
      {
        "step": 4,
        "title": "자르기 및 다운로드",
        "description": "자르기를 클릭하여 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "여백 제거",
        "description": "스캔 문서에서 과도한 여백을 트리밍합니다.",
        "icon": "maximize-2"
      },
      {
        "title": "콘텐츠 집중",
        "description": "특정 콘텐츠 영역을 강조합니다.",
        "icon": "target"
      },
      {
        "title": "페이지 표준화",
        "description": "모든 페이지를 동일한 크기로 만듭니다.",
        "icon": "square"
      }
    ],
    "faq": [
      {
        "question": "자르기가 콘텐츠를 영구적으로 제거하나요?",
        "answer": "예, 자르기 영역 외부의 콘텐츠가 제거됩니다."
      },
      {
        "question": "다른 페이지를 다르게 자를 수 있나요?",
        "answer": "예, 개별 페이지에 다른 설정을 적용할 수 있습니다."
      },
      {
        "question": "자르기가 텍스트 품질에 영향을 미치나요?",
        "answer": "아니요, 남은 콘텐츠는 원본 품질을 유지합니다."
      }
    ]
  },
  "extract-pages": {
    "title": "페이지 추출",
    "metaDescription": "PDF 파일에서 특정 페이지 추출.",
    "keywords": [
      "pdf 페이지 추출",
      "pdf 페이지 저장",
      "pdf 페이지 복사"
    ],
    "description": "<p>페이지 추출을 사용하면 PDF 문서에서 특정 페이지를 선택하여 새 파일로 저장할 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "페이지 선택",
        "description": "페이지 썸네일을 클릭하거나 페이지 번호를 입력합니다."
      },
      {
        "step": 3,
        "title": "추출 및 다운로드",
        "description": "추출을 클릭하여 새 PDF를 만들고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "발췌 만들기",
        "description": "보고서에서 관련 페이지를 추출합니다.",
        "icon": "file-minus"
      },
      {
        "title": "특정 콘텐츠 공유",
        "description": "특정 페이지만 추출하여 공유합니다.",
        "icon": "share-2"
      },
      {
        "title": "중요 페이지 보관",
        "description": "주요 페이지를 추출하여 저장합니다.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "비연속 페이지를 추출할 수 있나요?",
        "answer": "예, 모든 페이지 조합을 선택할 수 있습니다."
      },
      {
        "question": "북마크가 보존되나요?",
        "answer": "추출된 페이지의 북마크는 보존됩니다."
      },
      {
        "question": "여러 PDF에서 페이지를 추출할 수 있나요?",
        "answer": "이 도구는 한 번에 하나의 PDF로 작동합니다."
      }
    ]
  },
  "organize-pdf": {
    "title": "PDF 정리",
    "metaDescription": "PDF 페이지 재정렬, 복제, 삭제.",
    "keywords": [
      "pdf 정리",
      "pdf 페이지 재정렬",
      "pdf 재배열"
    ],
    "description": "<p>PDF 정리는 PDF 문서 내 페이지를 재배열하기 위한 직관적인 드래그 앤 드롭 인터페이스를 제공합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "페이지 재정렬",
        "description": "페이지 썸네일을 드래그하여 재정렬합니다."
      },
      {
        "step": 3,
        "title": "저장 및 다운로드",
        "description": "저장을 클릭하여 재구성된 PDF를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "페이지 순서 수정",
        "description": "잘못된 페이지 순서를 수정합니다.",
        "icon": "arrow-up-down"
      },
      {
        "title": "사용자 정의 순서 만들기",
        "description": "특정 순서로 페이지를 배열합니다.",
        "icon": "list"
      },
      {
        "title": "원하지 않는 페이지 제거",
        "description": "빈 페이지나 중복을 삭제합니다.",
        "icon": "trash-2"
      }
    ],
    "faq": [
      {
        "question": "페이지를 복제할 수 있나요?",
        "answer": "예, 모든 페이지를 복제할 수 있습니다."
      },
      {
        "question": "실행 취소 기능이 있나요?",
        "answer": "예, 변경 사항을 실행 취소할 수 있습니다."
      },
      {
        "question": "여러 PDF를 함께 정리할 수 있나요?",
        "answer": "이 도구는 한 번에 하나의 PDF로 작동합니다."
      }
    ]
  },
  "delete-pages": {
    "title": "페이지 삭제",
    "metaDescription": "PDF 파일에서 원하지 않는 페이지 제거.",
    "keywords": [
      "pdf 페이지 삭제",
      "pdf 페이지 제거"
    ],
    "description": "<p>페이지 삭제를 사용하면 PDF 문서에서 원하지 않는 페이지를 빠르고 쉽게 제거할 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "삭제할 페이지 선택",
        "description": "페이지 썸네일을 클릭하여 삭제 대상으로 표시합니다."
      },
      {
        "step": 3,
        "title": "삭제 및 다운로드",
        "description": "삭제를 클릭하여 업데이트된 PDF를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "빈 페이지 제거",
        "description": "실수로 포함된 빈 페이지를 제거합니다.",
        "icon": "file-x"
      },
      {
        "title": "민감한 콘텐츠 제거",
        "description": "기밀 정보가 포함된 페이지를 삭제합니다.",
        "icon": "shield"
      },
      {
        "title": "문서 간소화",
        "description": "관련 없는 페이지를 제거합니다.",
        "icon": "filter"
      }
    ],
    "faq": [
      {
        "question": "삭제된 페이지를 복구할 수 있나요?",
        "answer": "출력 파일에서 삭제는 영구적입니다."
      },
      {
        "question": "여러 페이지를 한 번에 삭제할 수 있나요?",
        "answer": "예, 여러 페이지를 동시에 삭제할 수 있습니다."
      },
      {
        "question": "페이지 삭제가 북마크에 영향을 미치나요?",
        "answer": "삭제된 페이지의 북마크는 제거됩니다."
      }
    ]
  },
  "bookmark": {
    "title": "북마크 편집",
    "metaDescription": "PDF 북마크를 추가, 편집, 정리하거나 모두 삭제하세요. 브라우저에서 문서 탐색 구조를 관리합니다.",
    "keywords": [
      "pdf 북마크",
      "북마크 편집",
      "북마크 추가",
      "pdf 탐색",
      "pdf 북마크 모두 삭제",
      "북마크 이동"
    ],
    "description": "<p>PDF 문서의 북마크를 생성, 수정, 정리할 수 있습니다.</p>\n      <p>모두 삭제하려면 모든 북마크 삭제를 클릭하고 확인하세요. 저장하고 다운로드하면 북마크가 없는 PDF를 내보냅니다.</p>\n      <p>북마크 추가는 선택한 항목 바로 뒤의 같은 수준에 삽입하며 미리 보는 페이지로 연결합니다. 선택하지 않으면 맨 끝에 추가합니다. 손잡이를 드래그하여 다른 북마크의 앞, 뒤 또는 하위로 이동하세요. 클릭하거나 탭하여 대상을 선택할 수도 있습니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "북마크 관리",
        "description": "새 북마크를 추가하거나 기존 북마크를 편집합니다. 모두 삭제하려면 모든 북마크 삭제를 클릭하고 확인하세요. 저장하고 다운로드하면 북마크가 없는 PDF를 내보냅니다. 북마크 추가는 선택한 항목 바로 뒤의 같은 수준에 삽입하며 미리 보는 페이지로 연결합니다. 선택하지 않으면 맨 끝에 추가합니다. 손잡이를 드래그하여 다른 북마크의 앞, 뒤 또는 하위로 이동하세요. 클릭하거나 탭하여 대상을 선택할 수도 있습니다."
      },
      {
        "step": 3,
        "title": "저장 및 다운로드",
        "description": "저장을 클릭하여 업데이트된 PDF를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "탐색 생성",
        "description": "긴 문서에 북마크를 추가합니다.",
        "icon": "navigation"
      },
      {
        "title": "장 정리",
        "description": "계층적 북마크 구조를 만듭니다.",
        "icon": "book-open"
      },
      {
        "title": "접근성 향상",
        "description": "문서를 더 사용하기 쉽게 만듭니다.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "중첩된 북마크를 만들 수 있나요?",
        "answer": "예, 계층 구조를 만들 수 있습니다."
      },
      {
        "question": "파일에서 북마크를 가져올 수 있나요?",
        "answer": "예, JSON 또는 텍스트 파일에서 가져올 수 있습니다."
      },
      {
        "question": "북마크가 모든 PDF 리더에서 작동하나요?",
        "answer": "예, 표준 PDF 기능입니다."
      },
      { "question": "모든 북마크를 한 번에 삭제할 수 있나요?", "answer": "모두 삭제하려면 모든 북마크 삭제를 클릭하고 확인하세요. 저장하고 다운로드하면 북마크가 없는 PDF를 내보냅니다." }
    ]
  },
  "table-of-contents": {
    "title": "목차",
    "metaDescription": "PDF 목차 생성. 북마크에서 클릭 가능한 탐색 생성.",
    "keywords": [
      "pdf 목차",
      "목차 생성",
      "pdf 인덱스"
    ],
    "description": "<p>PDF 문서의 탐색 가능한 목차 페이지를 생성합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "목차 설정",
        "description": "북마크에서 생성하거나 사용자 정의 항목을 만듭니다."
      },
      {
        "step": 3,
        "title": "생성 및 다운로드",
        "description": "생성을 클릭하여 목차를 만들고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "학술 논문",
        "description": "논문에 전문적인 목차를 추가합니다.",
        "icon": "graduation-cap"
      },
      {
        "title": "비즈니스 보고서",
        "description": "탐색 가능한 보고서를 만듭니다.",
        "icon": "bar-chart"
      },
      {
        "title": "사용자 매뉴얼",
        "description": "기술 문서의 목차를 생성합니다.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "목차 모양을 사용자 정의할 수 있나요?",
        "answer": "예, 스타일과 레이아웃을 선택할 수 있습니다."
      },
      {
        "question": "목차는 어디에 삽입되나요?",
        "answer": "기본적으로 문서 시작 부분에 삽입됩니다."
      },
      {
        "question": "목차 항목이 클릭 가능한가요?",
        "answer": "예, 각 항목은 해당 페이지로 이동하는 링크입니다."
      }
    ]
  },
  "page-numbers": {
    "title": "페이지 번호",
    "metaDescription": "PDF 문서에 페이지 번호 추가. 위치, 형식, 시작 번호 사용자 정의.",
    "keywords": [
      "페이지 번호 추가",
      "pdf 페이지 번호",
      "pdf 페이지 매기기"
    ],
    "description": "<p>PDF 문서에 사용자 정의 가능한 페이지 번호를 추가합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "번호 매기기 설정",
        "description": "위치, 형식, 시작 번호를 선택합니다."
      },
      {
        "step": 3,
        "title": "적용 및 다운로드",
        "description": "적용을 클릭하여 페이지 번호를 추가하고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "전문 문서",
        "description": "보고서와 제안서에 페이지 번호를 추가합니다.",
        "icon": "file-text"
      },
      {
        "title": "학술 논문",
        "description": "학술 형식 요구 사항에 따라 페이지에 번호를 매깁니다.",
        "icon": "graduation-cap"
      },
      {
        "title": "법적 문서",
        "description": "계약서에 적절한 페이지 매기기를 추가합니다.",
        "icon": "scale"
      }
    ],
    "faq": [
      {
        "question": "첫 페이지를 건너뛸 수 있나요?",
        "answer": "예, 번호를 매길 페이지를 지정할 수 있습니다."
      },
      {
        "question": "어떤 번호 형식을 사용할 수 있나요?",
        "answer": "아라비아 숫자, 로마 숫자, 문자를 사용할 수 있습니다."
      },
      {
        "question": "\"페이지 X/Y\" 형식을 추가할 수 있나요?",
        "answer": "예, 총 페이지 수를 포함할 수 있습니다."
      }
    ]
  },
  "add-watermark": {
    "title": "워터마크 추가",
    "metaDescription": "PDF 파일에 텍스트 또는 이미지 워터마크 추가.",
    "keywords": [
      "워터마크 추가",
      "pdf 워터마크",
      "pdf 스탬프",
      "pdf 보호"
    ],
    "description": "<p>PDF 문서에 텍스트 또는 이미지 워터마크를 배치할 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "워터마크 생성",
        "description": "텍스트를 입력하거나 이미지를 업로드합니다."
      },
      {
        "step": 3,
        "title": "적용 및 다운로드",
        "description": "적용을 클릭하여 워터마크를 추가하고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "문서 보호",
        "description": "\"기밀\" 또는 \"초안\" 워터마크를 추가합니다.",
        "icon": "shield"
      },
      {
        "title": "문서 브랜딩",
        "description": "공식 문서에 회사 로고를 추가합니다.",
        "icon": "award"
      },
      {
        "title": "저작권 표시",
        "description": "지적 재산을 보호하기 위해 저작권 정보를 추가합니다.",
        "icon": "copyright"
      }
    ],
    "faq": [
      {
        "question": "이미지를 워터마크로 사용할 수 있나요?",
        "answer": "예, PNG, JPG, SVG 이미지를 업로드할 수 있습니다."
      },
      {
        "question": "워터마크를 반투명하게 만들 수 있나요?",
        "answer": "예, 불투명도를 조정할 수 있습니다."
      },
      {
        "question": "다른 페이지에 다른 워터마크를 적용할 수 있나요?",
        "answer": "도구는 선택한 페이지에 동일한 워터마크를 적용합니다."
      }
    ]
  },
  "header-footer": {
    "title": "머리글 및 바닥글",
    "metaDescription": "PDF 문서에 머리글과 바닥글 추가.",
    "keywords": [
      "pdf 머리글",
      "pdf 바닥글",
      "머리글 바닥글 추가"
    ],
    "description": "<p>PDF 문서에 사용자 정의 가능한 머리글과 바닥글을 추가합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "머리글/바닥글 설정",
        "description": "머리글과 바닥글 영역의 텍스트를 입력합니다."
      },
      {
        "step": 3,
        "title": "적용 및 다운로드",
        "description": "적용을 클릭하여 머리글/바닥글을 추가하고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "비즈니스 문서",
        "description": "전문 문서에 회사명과 페이지 번호를 추가합니다.",
        "icon": "briefcase"
      },
      {
        "title": "법적 문서",
        "description": "법적 제출물에 사건 번호와 날짜를 포함합니다.",
        "icon": "scale"
      },
      {
        "title": "학술 논문",
        "description": "논문 제목과 저자명의 러닝 헤더를 추가합니다.",
        "icon": "graduation-cap"
      }
    ],
    "faq": [
      {
        "question": "홀수 페이지와 짝수 페이지에 다른 머리글을 설정할 수 있나요?",
        "answer": "예, 다른 콘텐츠를 설정할 수 있습니다."
      },
      {
        "question": "현재 날짜를 포함할 수 있나요?",
        "answer": "예, 동적 날짜 필드를 삽입할 수 있습니다."
      },
      {
        "question": "특정 페이지에서 머리글/바닥글을 건너뛸 수 있나요?",
        "answer": "예, 건너뛸 페이지를 지정할 수 있습니다."
      }
    ]
  },
  "invert-colors": {
    "title": "색상 반전",
    "metaDescription": "다크 모드 읽기를 위해 PDF 색상 반전.",
    "keywords": [
      "pdf 색상 반전",
      "pdf 다크 모드",
      "네거티브 pdf"
    ],
    "description": "<p>PDF 문서의 색상을 반전하여 네거티브 이미지 효과를 만듭니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "옵션 설정",
        "description": "모든 콘텐츠를 반전할지 이미지를 보존할지 선택합니다."
      },
      {
        "step": 3,
        "title": "반전 및 다운로드",
        "description": "반전을 클릭하여 문서를 처리하고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "야간 읽기",
        "description": "야간 편안한 읽기를 위한 다크 모드 버전을 만듭니다.",
        "icon": "moon"
      },
      {
        "title": "눈의 피로 감소",
        "description": "밝은 문서를 반전하여 눈의 피로를 줄입니다.",
        "icon": "eye"
      },
      {
        "title": "인쇄 절약",
        "description": "초안 인쇄 시 잉크 사용량을 줄이기 위해 문서를 반전합니다.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "이미지도 반전되나요?",
        "answer": "기본적으로 예. 원본 이미지를 보존하도록 선택할 수 있습니다."
      },
      {
        "question": "특정 페이지만 반전할 수 있나요?",
        "answer": "예, 반전할 페이지를 선택할 수 있습니다."
      },
      {
        "question": "반전을 되돌릴 수 있나요?",
        "answer": "문서를 다시 반전하여 대략 원래 색상으로 돌아갈 수 있습니다."
      }
    ]
  },
  "background-color": {
    "title": "배경색",
    "metaDescription": "PDF 배경색 변경. 문서 페이지에 색상 배경 추가.",
    "keywords": [
      "pdf 배경색",
      "pdf 배경 변경",
      "색상 pdf"
    ],
    "description": "<p>PDF 페이지의 배경색을 변경하거나 추가할 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "색상 선택",
        "description": "색상 선택기를 사용하거나 16진수 코드를 입력합니다."
      },
      {
        "step": 3,
        "title": "적용 및 다운로드",
        "description": "적용을 클릭하여 배경을 추가하고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "가독성 향상",
        "description": "눈의 피로를 줄이기 위해 연한 크림색 배경을 추가합니다.",
        "icon": "eye"
      },
      {
        "title": "문서 브랜딩",
        "description": "마케팅 자료에 브랜드 색상을 사용합니다.",
        "icon": "palette"
      },
      {
        "title": "섹션 강조",
        "description": "문서 섹션을 구분하기 위해 다른 배경색을 사용합니다.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "배경이 기존 콘텐츠를 덮나요?",
        "answer": "아니요, 배경은 기존 콘텐츠 뒤에 추가됩니다."
      },
      {
        "question": "다른 페이지에 다른 색상을 사용할 수 있나요?",
        "answer": "다른 색상을 위해 문서를 여러 번 처리해야 합니다."
      },
      {
        "question": "기존 배경을 제거할 수 있나요?",
        "answer": "이 도구는 배경을 추가합니다. 배경 제거는 PDF 편집 도구를 사용하세요."
      }
    ]
  },
  "text-color": {
    "title": "텍스트 색상 변경",
    "metaDescription": "PDF 문서의 텍스트 색상 변경.",
    "keywords": [
      "pdf 텍스트 색상 변경",
      "pdf 텍스트 색상"
    ],
    "description": "<p>PDF 문서 내 텍스트의 색상을 변경할 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "색상 선택",
        "description": "색상 선택기를 사용하거나 16진수 코드를 입력합니다."
      },
      {
        "step": 3,
        "title": "적용 및 다운로드",
        "description": "적용을 클릭하여 텍스트 색상을 변경하고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "대비 개선",
        "description": "배경에 대한 가독성을 향상시키기 위해 텍스트 색상을 변경합니다.",
        "icon": "contrast"
      },
      {
        "title": "브랜드 일관성",
        "description": "브랜드 가이드라인에 맞게 텍스트 색상을 업데이트합니다.",
        "icon": "palette"
      },
      {
        "title": "접근성",
        "description": "접근성 대비 요구 사항을 충족하도록 텍스트 색상을 조정합니다.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "모든 텍스트가 변경되나요?",
        "answer": "예, 도구는 문서의 모든 텍스트 요소의 색상을 변경합니다."
      },
      {
        "question": "특정 텍스트만 변경할 수 있나요?",
        "answer": "이 도구는 모든 텍스트를 변경합니다. 선택적 변경은 PDF 편집 도구를 사용하세요."
      },
      {
        "question": "서식이 지정된 텍스트(굵게, 기울임꼴)가 보존되나요?",
        "answer": "예, 텍스트 서식은 보존됩니다. 색상만 변경됩니다."
      }
    ]
  },
  "add-stamps": {
    "title": "스탬프 추가",
    "metaDescription": "PDF 문서에 스탬프 추가. 승인, 검토 등을 위한 프리셋 또는 사용자 정의 스탬프 사용.",
    "keywords": [
      "pdf 스탬프",
      "스탬프 추가",
      "승인 스탬프"
    ],
    "description": "<p>PDF 문서에 스탬프 이미지를 배치할 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "스탬프 선택",
        "description": "프리셋 스탬프를 선택하거나 사용자 정의 스탬프 이미지를 업로드합니다."
      },
      {
        "step": 3,
        "title": "배치 및 적용",
        "description": "클릭하여 스탬프를 배치하고 위치와 크기를 조정한 후 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "문서 승인",
        "description": "검토 워크플로에서 \"승인\" 또는 \"거부\" 스탬프를 추가합니다.",
        "icon": "check-circle"
      },
      {
        "title": "상태 표시",
        "description": "문서를 \"초안\", \"최종\", \"기밀\"로 표시합니다.",
        "icon": "tag"
      },
      {
        "title": "품질 관리",
        "description": "검사 또는 검토 완료를 나타내는 QC 스탬프를 추가합니다.",
        "icon": "clipboard-check"
      }
    ],
    "faq": [
      {
        "question": "어떤 프리셋 스탬프를 사용할 수 있나요?",
        "answer": "승인, 거부, 초안, 최종, 기밀, 복사 등이 있습니다."
      },
      {
        "question": "사용자 정의 스탬프를 업로드할 수 있나요?",
        "answer": "예, PNG 또는 JPG 이미지를 업로드할 수 있습니다."
      },
      {
        "question": "하나의 문서에 여러 스탬프를 추가할 수 있나요?",
        "answer": "예, 여러 스탬프를 추가하고 각각 독립적으로 배치할 수 있습니다."
      }
    ]
  },
  "remove-annotations": {
    "title": "주석 제거",
    "metaDescription": "PDF 파일에서 주석 제거. 코멘트, 하이라이트, 마크업 삭제.",
    "keywords": [
      "pdf 주석 제거",
      "코멘트 삭제",
      "하이라이트 제거"
    ],
    "description": "<p>PDF 문서에서 코멘트, 하이라이트, 스티커 노트 및 기타 주석을 제거합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "주석 유형 선택",
        "description": "제거할 주석 유형을 선택합니다."
      },
      {
        "step": 3,
        "title": "제거 및 다운로드",
        "description": "제거를 클릭하여 주석을 삭제하고 깨끗한 PDF를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "문서 최종화",
        "description": "최종 문서를 게시하기 전에 검토 코멘트를 제거합니다.",
        "icon": "file-check"
      },
      {
        "title": "개인 정보 보호",
        "description": "공유 전에 민감한 정보가 포함된 코멘트를 제거합니다.",
        "icon": "shield"
      },
      {
        "title": "깨끗한 배포",
        "description": "배포용으로 주석이 달린 문서의 깨끗한 사본을 만듭니다.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "어떤 유형의 주석을 제거할 수 있나요?",
        "answer": "코멘트, 하이라이트, 밑줄, 취소선, 스티커 노트, 스탬프, 링크를 모두 제거할 수 있습니다."
      },
      {
        "question": "일부 주석을 유지할 수 있나요?",
        "answer": "예, 제거할 주석 유형과 유지할 유형을 선택할 수 있습니다."
      },
      {
        "question": "이것은 되돌릴 수 있나요?",
        "answer": "아니요, 주석 제거는 영구적입니다. 필요한 경우 원본 백업을 유지하세요."
      }
    ]
  },
  "form-filler": {
    "title": "양식 작성",
    "metaDescription": "온라인으로 PDF 양식 작성. 인쇄 없이 대화형 PDF 양식 완성.",
    "keywords": [
      "pdf 양식 작성",
      "pdf 양식 필러",
      "pdf 양식 완성"
    ],
    "description": "<p>브라우저에서 직접 대화형 PDF 양식을 작성할 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 양식 업로드",
        "description": "PDF 양식을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "양식 작성",
        "description": "양식 필드를 클릭하여 텍스트를 입력하고 체크박스를 선택합니다."
      },
      {
        "step": 3,
        "title": "저장 및 다운로드",
        "description": "저장을 클릭하여 작성된 양식을 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "신청서 양식",
        "description": "취업 신청서, 허가 신청서, 등록 양식을 완성합니다.",
        "icon": "clipboard"
      },
      {
        "title": "세금 양식",
        "description": "세금 문서와 재무 양식을 전자적으로 작성합니다.",
        "icon": "file-text"
      },
      {
        "title": "계약서",
        "description": "서명 전에 계약서 양식에 정보를 입력합니다.",
        "icon": "file-signature"
      }
    ],
    "faq": [
      {
        "question": "진행 상황을 저장할 수 있나요?",
        "answer": "예, 부분적으로 작성된 양식을 저장하고 나중에 계속할 수 있습니다."
      },
      {
        "question": "양식 평면화란 무엇인가요?",
        "answer": "평면화는 양식 필드를 정적 콘텐츠로 변환하여 추가 편집을 방지합니다."
      },
      {
        "question": "XFA 양식이 지원되나요?",
        "answer": "예, 표준 AcroForms와 XFA 양식 모두 지원됩니다."
      }
    ]
  },
  "form-creator": {
    "title": "양식 생성",
    "metaDescription": "작성 가능한 PDF 양식 생성. 문서에 텍스트 필드, 체크박스, 드롭다운 추가.",
    "keywords": [
      "pdf 양식 생성",
      "pdf 양식 크리에이터",
      "작성 가능한 pdf"
    ],
    "description": "<p>정적 PDF 문서를 대화형 작성 가능한 양식으로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "양식 필드 추가",
        "description": "도구 모음에서 필드 유형을 선택하고 클릭하여 배치합니다."
      },
      {
        "step": 3,
        "title": "설정 및 저장",
        "description": "필드 속성을 설정한 후 작성 가능한 PDF 양식을 저장하고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "신청서 양식",
        "description": "작성 가능한 취업 신청서, 회원 양식, 등록 양식을 만듭니다.",
        "icon": "user-plus"
      },
      {
        "title": "설문조사",
        "description": "데이터 수집을 위한 대화형 설문조사와 질문지를 만듭니다.",
        "icon": "clipboard-list"
      },
      {
        "title": "주문 양식",
        "description": "수량 필드와 체크박스가 있는 제품 주문 양식을 만듭니다.",
        "icon": "shopping-cart"
      }
    ],
    "faq": [
      {
        "question": "어떤 필드 유형을 추가할 수 있나요?",
        "answer": "텍스트 필드, 체크박스, 라디오 버튼, 드롭다운, 날짜 선택기, 서명 필드."
      },
      {
        "question": "필드를 필수로 만들 수 있나요?",
        "answer": "예, 필드를 필수로 표시하고 유효성 검사 규칙을 추가할 수 있습니다."
      },
      {
        "question": "계산을 추가할 수 있나요?",
        "answer": "합계와 평균 같은 기본 계산을 숫자 필드에 추가할 수 있습니다."
      }
    ]
  },
  "remove-blank-pages": {
    "title": "빈 페이지 제거",
    "metaDescription": "PDF 문서에서 빈 페이지 자동 감지 및 제거.",
    "keywords": [
      "빈 페이지 제거",
      "빈 페이지 삭제",
      "pdf 정리"
    ],
    "description": "<p>PDF 문서에서 빈 페이지를 자동으로 감지하고 제거합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "임계값 조정",
        "description": "필요한 경우 빈 페이지 감지 임계값을 설정합니다."
      },
      {
        "step": 3,
        "title": "제거 및 다운로드",
        "description": "제거를 클릭하여 빈 페이지를 삭제하고 정리된 PDF를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "스캔 문서 정리",
        "description": "일괄 스캔된 문서에서 빈 페이지를 제거합니다.",
        "icon": "scan"
      },
      {
        "title": "구분자 제거",
        "description": "병합된 문서에서 빈 구분자 페이지를 삭제합니다.",
        "icon": "minus"
      },
      {
        "title": "파일 크기 줄이기",
        "description": "불필요한 빈 페이지를 제거하여 문서 크기를 줄입니다.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "빈 페이지 감지는 어떻게 작동하나요?",
        "answer": "도구는 페이지 콘텐츠를 분석하고 최소한의 콘텐츠가 있는 페이지를 빈 페이지로 간주합니다."
      },
      {
        "question": "제거될 페이지를 미리 볼 수 있나요?",
        "answer": "예, 감지된 빈 페이지는 제거 전에 검토를 위해 강조 표시됩니다."
      },
      {
        "question": "페이지에 머리글/바닥글만 있으면 어떻게 되나요?",
        "answer": "최소한의 콘텐츠가 있는 페이지를 빈 페이지로 간주할지 결정하기 위해 임계값을 조정할 수 있습니다."
      }
    ]
  },
  "image-to-pdf": {
    "title": "이미지를 PDF로",
    "metaDescription": "모든 이미지를 PDF로 변환. JPG, PNG, WebP, BMP, TIFF, SVG, HEIC 형식 지원.",
    "keywords": [
      "이미지를 pdf로",
      "이미지 변환",
      "사진을 pdf로"
    ],
    "description": "<p>모든 형식의 이미지를 PDF 문서로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "이미지 업로드",
        "description": "지원되는 형식의 이미지를 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "정렬 및 구성",
        "description": "이미지를 재정렬하고 페이지 크기와 방향을 선택합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 PDF를 만들고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "사진 컬렉션",
        "description": "다양한 소스의 사진을 단일 PDF 앨범으로 결합합니다.",
        "icon": "images"
      },
      {
        "title": "혼합 형식 문서",
        "description": "다른 형식의 이미지를 통합 PDF로 변환합니다.",
        "icon": "file-stack"
      },
      {
        "title": "아카이브 생성",
        "description": "장기 저장을 위해 이미지 컬렉션에서 PDF 아카이브를 만듭니다.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "어떤 이미지 형식이 지원되나요?",
        "answer": "JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC, HEIF 형식이 모두 지원됩니다."
      },
      {
        "question": "다른 이미지 형식을 혼합할 수 있나요?",
        "answer": "예, 다른 형식의 이미지를 단일 PDF로 결합할 수 있습니다."
      },
      {
        "question": "이미지 품질이 보존되나요?",
        "answer": "예, 압축을 선택하지 않는 한 이미지는 원본 품질로 포함됩니다."
      }
    ]
  },
  "png-to-pdf": {
    "title": "PNG를 PDF로",
    "metaDescription": "PNG 이미지를 PDF로 변환. 투명도 보존 및 여러 PNG 파일 결합.",
    "keywords": [
      "png를 pdf로",
      "png 변환",
      "png 변환기"
    ],
    "description": "<p>PNG 이미지를 투명도를 보존하면서 PDF 문서로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PNG 파일 업로드",
        "description": "PNG 이미지를 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "정렬 및 구성",
        "description": "이미지를 재정렬하고 페이지 크기 옵션을 선택합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 PDF를 만들고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "그래픽 포트폴리오",
        "description": "PNG 그래픽과 디자인을 전문 포트폴리오로 컴파일합니다.",
        "icon": "palette"
      },
      {
        "title": "스크린샷 문서화",
        "description": "스크린샷을 PDF 문서로 변환합니다.",
        "icon": "monitor"
      },
      {
        "title": "로고 컬렉션",
        "description": "로고와 브랜드 자산의 PDF 카탈로그를 만듭니다.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "투명도가 보존되나요?",
        "answer": "PNG 투명도는 PDF 출력에서 보존됩니다."
      },
      {
        "question": "PNG 애니메이션은 어떻게 되나요?",
        "answer": "애니메이션 PNG는 첫 번째 프레임을 사용하여 정적 이미지로 변환됩니다."
      },
      {
        "question": "배경색을 설정할 수 있나요?",
        "answer": "예, 투명 영역에 대한 배경색을 선택할 수 있습니다."
      }
    ]
  },
  "webp-to-pdf": {
    "title": "WebP를 PDF로",
    "metaDescription": "WebP 이미지를 PDF로 변환. 품질 보존과 함께 현대적인 이미지 형식 변환.",
    "keywords": [
      "webp를 pdf로",
      "webp 변환",
      "webp 변환기"
    ],
    "description": "<p>현대적인 WebP 이미지를 PDF 문서로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "WebP 파일 업로드",
        "description": "WebP 이미지를 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "옵션 구성",
        "description": "이미지를 정렬하고 페이지 크기와 방향을 선택합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 PDF를 만듭니다."
      }
    ],
    "useCases": [
      {
        "title": "웹 콘텐츠 아카이빙",
        "description": "오프라인 아카이빙을 위해 웹 이미지를 PDF로 변환합니다.",
        "icon": "globe"
      },
      {
        "title": "인쇄 준비",
        "description": "인쇄 목적으로 WebP 이미지를 PDF로 변환합니다.",
        "icon": "printer"
      },
      {
        "title": "형식 표준화",
        "description": "현대적인 WebP를 범용 호환 PDF로 변환합니다.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "WebP 형식이란 무엇인가요?",
        "answer": "WebP는 Google이 개발한 현대적인 이미지 형식으로 웹 이미지에 우수한 압축을 제공합니다."
      },
      {
        "question": "품질이 보존되나요?",
        "answer": "예, 변환은 원본 이미지 품질을 보존합니다."
      },
      {
        "question": "애니메이션 WebP를 변환할 수 있나요?",
        "answer": "애니메이션 WebP 파일은 정적 이미지로 변환됩니다."
      }
    ]
  },
  "svg-to-pdf": {
    "title": "SVG를 PDF로",
    "metaDescription": "SVG 벡터 그래픽을 PDF로 변환. 확장성과 품질 보존.",
    "keywords": [
      "svg를 pdf로",
      "svg 변환",
      "벡터를 pdf로"
    ],
    "description": "<p>확장 가능한 벡터 그래픽을 벡터 품질을 보존하면서 PDF 문서로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "SVG 파일 업로드",
        "description": "SVG 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "설정 구성",
        "description": "페이지 크기와 배열 옵션을 선택합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 벡터 PDF를 만듭니다."
      }
    ],
    "useCases": [
      {
        "title": "로고 변환",
        "description": "SVG 로고를 인쇄 자료용 PDF로 변환합니다.",
        "icon": "award"
      },
      {
        "title": "기술 도면",
        "description": "CAD 내보내기와 기술 일러스트레이션을 PDF로 변환합니다.",
        "icon": "ruler"
      },
      {
        "title": "아이콘 컬렉션",
        "description": "아이콘 세트와 그래픽의 PDF 카탈로그를 만듭니다.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "벡터 품질이 보존되나요?",
        "answer": "예, SVG 벡터 품질은 PDF 출력에서 완전히 보존됩니다."
      },
      {
        "question": "복잡한 SVG를 변환할 수 있나요?",
        "answer": "예, 그라디언트, 필터, 효과가 있는 복잡한 SVG가 지원됩니다."
      },
      {
        "question": "포함된 글꼴은 어떻게 되나요?",
        "answer": "SVG 파일에 포함된 글꼴은 PDF에서 보존됩니다."
      }
    ]
  },
  "bmp-to-pdf": {
    "title": "BMP를 PDF로",
    "metaDescription": "BMP 비트맵 이미지를 PDF로 변환. 품질 보존과 함께 레거시 형식 지원.",
    "keywords": [
      "bmp를 pdf로",
      "bmp 변환",
      "비트맵을 pdf로"
    ],
    "description": "<p>비트맵 이미지를 PDF 문서로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "BMP 파일 업로드",
        "description": "BMP 이미지를 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "옵션 구성",
        "description": "이미지를 정렬하고 페이지 설정을 선택합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 PDF를 만듭니다."
      }
    ],
    "useCases": [
      {
        "title": "레거시 파일 변환",
        "description": "오래된 BMP 파일을 현대적인 PDF 형식으로 변환합니다.",
        "icon": "history"
      },
      {
        "title": "Windows 스크린샷",
        "description": "Windows 비트맵 스크린샷을 PDF로 변환합니다.",
        "icon": "monitor"
      },
      {
        "title": "아카이브 현대화",
        "description": "레거시 이미지 아카이브를 PDF 형식으로 업데이트합니다.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "파일 크기가 줄어드나요?",
        "answer": "예, BMP 파일은 PDF로 변환할 때 일반적으로 상당히 압축됩니다."
      },
      {
        "question": "품질이 보존되나요?",
        "answer": "예, 변환 중 이미지 품질이 유지됩니다."
      },
      {
        "question": "어떤 BMP 색상 깊이가 지원되나요?",
        "answer": "24비트 및 32비트를 포함한 모든 표준 BMP 색상 깊이가 지원됩니다."
      }
    ]
  },
  "heic-to-pdf": {
    "title": "HEIC를 PDF로",
    "metaDescription": "iPhone HEIC 사진을 PDF로 변환. Apple 이미지 형식 변환이 쉬워집니다.",
    "keywords": [
      "heic를 pdf로",
      "heic 변환",
      "iphone 사진을 pdf로"
    ],
    "description": "<p>Apple의 고효율 이미지 형식 사진을 PDF 문서로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "HEIC 파일 업로드",
        "description": "HEIC 사진을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "사진 정렬",
        "description": "사진을 재정렬하고 페이지 설정을 선택합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 PDF를 만듭니다."
      }
    ],
    "useCases": [
      {
        "title": "iPhone 사진 앨범",
        "description": "공유를 위해 iPhone 사진에서 PDF 앨범을 만듭니다.",
        "icon": "smartphone"
      },
      {
        "title": "문서 스캔",
        "description": "iPhone 문서 스캔을 PDF 형식으로 변환합니다.",
        "icon": "scan"
      },
      {
        "title": "크로스 플랫폼 공유",
        "description": "범용 호환성을 위해 HEIC를 PDF로 변환합니다.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "HEIC 형식이란 무엇인가요?",
        "answer": "HEIC(고효율 이미지 컨테이너)는 JPEG보다 더 나은 압축을 제공하는 Apple의 이미지 형식입니다."
      },
      {
        "question": "Live Photos가 지원되나요?",
        "answer": "Live Photos는 키 프레임을 사용하여 정적 이미지로 변환됩니다."
      },
      {
        "question": "EXIF 데이터가 보존되나요?",
        "answer": "사진 메타데이터는 변환 중 선택적으로 보존하거나 제거할 수 있습니다."
      }
    ]
  },
  "tiff-to-pdf": {
    "title": "TIFF를 PDF로",
    "metaDescription": "TIFF 이미지를 PDF로 변환. 다중 페이지 TIFF 파일 지원 및 고품질 변환.",
    "keywords": [
      "tiff를 pdf로",
      "tiff 변환",
      "tif를 pdf로"
    ],
    "description": "<p>다중 페이지 TIFF 파일을 포함한 TIFF 이미지를 PDF 문서로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "TIFF 파일 업로드",
        "description": "TIFF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "옵션 구성",
        "description": "페이지 설정과 압축 옵션을 선택합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 PDF를 만듭니다."
      }
    ],
    "useCases": [
      {
        "title": "스캔 문서",
        "description": "고품질 스캔을 TIFF에서 PDF로 변환합니다.",
        "icon": "scan"
      },
      {
        "title": "전문 그래픽",
        "description": "배포를 위해 전문 TIFF 그래픽을 변환합니다.",
        "icon": "image"
      },
      {
        "title": "아카이브 변환",
        "description": "TIFF 아카이브를 더 접근하기 쉬운 PDF 형식으로 변환합니다.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "다중 페이지 TIFF가 지원되나요?",
        "answer": "예, 다중 페이지 TIFF 파일은 자동으로 다중 페이지 PDF로 변환됩니다."
      },
      {
        "question": "품질이 보존되나요?",
        "answer": "예, TIFF 품질은 PDF 출력에서 완전히 보존됩니다."
      },
      {
        "question": "어떤 압축이 사용되나요?",
        "answer": "무손실 및 손실 압축 옵션 중에서 선택할 수 있습니다."
      }
    ]
  },
  "txt-to-pdf": {
    "title": "텍스트를 PDF로",
    "metaDescription": "일반 텍스트 파일을 PDF로 변환. 글꼴, 여백, 페이지 레이아웃 사용자 정의.",
    "keywords": [
      "txt를 pdf로",
      "텍스트를 pdf로",
      "텍스트 파일 변환"
    ],
    "description": "<p>일반 텍스트 파일을 서식이 지정된 PDF 문서로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "텍스트 파일 업로드",
        "description": ".txt 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "서식 사용자 정의",
        "description": "글꼴, 크기, 여백, 페이지 설정을 선택합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 서식이 지정된 PDF를 만듭니다."
      }
    ],
    "useCases": [
      {
        "title": "코드 문서화",
        "description": "소스 코드 파일을 문서화용 PDF로 변환합니다.",
        "icon": "code"
      },
      {
        "title": "로그 아카이브",
        "description": "아카이브 목적으로 로그 파일을 PDF로 변환합니다.",
        "icon": "file-text"
      },
      {
        "title": "노트 변환",
        "description": "일반 텍스트 노트를 서식이 지정된 PDF 문서로 변환합니다.",
        "icon": "sticky-note"
      }
    ],
    "faq": [
      {
        "question": "어떤 글꼴을 사용할 수 있나요?",
        "answer": "코드용 고정폭 글꼴을 포함한 여러 글꼴을 사용할 수 있습니다."
      },
      {
        "question": "줄 바꿈이 자동으로 되나요?",
        "answer": "예, 긴 줄은 페이지에 맞게 자동으로 줄 바꿈됩니다."
      },
      {
        "question": "서식을 보존할 수 있나요?",
        "answer": "원본 텍스트의 공백과 들여쓰기가 보존됩니다."
      }
    ]
  },
  "json-to-pdf": {
    "title": "JSON을 PDF로",
    "metaDescription": "JSON 파일을 서식이 지정된 PDF로 변환. 구문 강조 및 구조화된 출력.",
    "keywords": [
      "json을 pdf로",
      "json 변환",
      "json 뷰어"
    ],
    "description": "<p>JSON 데이터 파일을 서식이 지정되고 읽기 쉬운 PDF 문서로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "JSON 파일 업로드",
        "description": ".json 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "표시 구성",
        "description": "서식 옵션과 구문 강조를 선택합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 서식이 지정된 PDF를 만듭니다."
      }
    ],
    "useCases": [
      {
        "title": "API 문서화",
        "description": "문서화를 위해 API 응답을 PDF로 변환합니다.",
        "icon": "code"
      },
      {
        "title": "설정 아카이브",
        "description": "읽기 쉬운 PDF 형식으로 설정 파일을 아카이브합니다.",
        "icon": "settings"
      },
      {
        "title": "데이터 보고서",
        "description": "JSON 데이터 내보내기에서 PDF 보고서를 만듭니다.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "구문 강조가 포함되나요?",
        "answer": "예, JSON 구문은 키, 값, 유형에 대해 색상으로 강조 표시됩니다."
      },
      {
        "question": "중첩된 데이터는 어떻게 처리되나요?",
        "answer": "중첩된 객체와 배열은 가독성을 위해 적절히 들여쓰기됩니다."
      },
      {
        "question": "큰 JSON 파일은 어떻게 되나요?",
        "answer": "큰 파일은 자동으로 여러 페이지에 걸쳐 페이지가 매겨집니다."
      }
    ]
  },
  "pdf-to-jpg": {
    "title": "PDF를 JPG로",
    "metaDescription": "PDF 페이지를 JPG 이미지로 변환. 사용자 정의 가능한 해상도로 고품질 추출.",
    "keywords": [
      "pdf를 jpg로",
      "pdf를 jpeg로",
      "pdf를 이미지로 변환"
    ],
    "description": "<p>PDF 문서 페이지를 고품질 JPG 이미지로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "페이지 및 품질 선택",
        "description": "변환할 페이지를 선택하고 품질/DPI 옵션을 설정합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 이미지를 추출하고 ZIP으로 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "웹 게시",
        "description": "웹사이트 사용을 위해 PDF 페이지를 이미지로 변환합니다.",
        "icon": "globe"
      },
      {
        "title": "소셜 미디어",
        "description": "소셜 미디어 공유를 위해 페이지를 이미지로 추출합니다.",
        "icon": "share-2"
      },
      {
        "title": "프레젠테이션",
        "description": "프레젠테이션용으로 PDF 슬라이드를 이미지로 변환합니다.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "어떤 품질 설정을 사용할 수 있나요?",
        "answer": "DPI를 72에서 300까지, JPEG 품질을 1-100까지 설정할 수 있습니다."
      },
      {
        "question": "특정 페이지만 변환할 수 있나요?",
        "answer": "예, 개별 페이지 또는 페이지 범위를 선택하여 변환할 수 있습니다."
      },
      {
        "question": "여러 페이지는 어떻게 처리되나요?",
        "answer": "각 페이지는 별도의 JPG 파일이 되어 ZIP 아카이브로 다운로드됩니다."
      }
    ]
  },
  "pdf-to-png": {
    "title": "PDF를 PNG로",
    "metaDescription": "PDF 페이지를 PNG 이미지로 변환. 투명도 지원과 함께 무손실 품질.",
    "keywords": [
      "pdf를 png로",
      "pdf를 png로 변환",
      "pdf 이미지 추출"
    ],
    "description": "<p>PDF 문서 페이지를 무손실 압축의 고품질 PNG 이미지로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "옵션 구성",
        "description": "페이지를 선택하고 해상도(DPI) 옵션을 설정합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 PNG 이미지를 추출합니다."
      }
    ],
    "useCases": [
      {
        "title": "그래픽 추출",
        "description": "완벽한 품질로 다이어그램과 그래픽을 추출합니다.",
        "icon": "image"
      },
      {
        "title": "디자인 자산",
        "description": "편집 소프트웨어용으로 PDF 디자인을 PNG로 변환합니다.",
        "icon": "palette"
      },
      {
        "title": "문서화",
        "description": "기술 문서용 고품질 이미지를 만듭니다.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "JPG 대신 PNG를 선택하는 이유는?",
        "answer": "PNG는 무손실 압축과 투명도 지원을 제공하여 그래픽과 텍스트에 이상적입니다."
      },
      {
        "question": "투명 배경이 지원되나요?",
        "answer": "예, 투명도가 있는 PDF 페이지는 PNG 출력에서 보존됩니다."
      },
      {
        "question": "어떤 DPI를 사용해야 하나요?",
        "answer": "화면 보기에는 150 DPI, 인쇄에는 300 DPI를 사용하세요."
      }
    ]
  },
  "pdf-to-webp": {
    "title": "PDF를 WebP로",
    "metaDescription": "PDF 페이지를 WebP 이미지로 변환. 우수한 압축의 현대적인 형식.",
    "keywords": [
      "pdf를 webp로",
      "pdf를 webp로 변환",
      "현대적인 이미지 형식"
    ],
    "description": "<p>PDF 문서 페이지를 Google의 현대적인 이미지 형식인 WebP 이미지로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "품질 옵션 설정",
        "description": "페이지를 선택하고 품질/압축 설정을 지정합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 WebP 이미지를 만듭니다."
      }
    ],
    "useCases": [
      {
        "title": "웹 최적화",
        "description": "PDF 콘텐츠에서 웹 최적화 이미지를 만듭니다.",
        "icon": "globe"
      },
      {
        "title": "대역폭 절약",
        "description": "더 빠른 로딩을 위해 이미지 파일 크기를 줄입니다.",
        "icon": "zap"
      },
      {
        "title": "현대적인 웹사이트",
        "description": "현대적인 웹 프로젝트에 현대적인 이미지 형식을 사용합니다.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "WebP 형식이란 무엇인가요?",
        "answer": "WebP는 우수한 압축을 제공하는 Google의 현대적인 이미지 형식입니다."
      },
      {
        "question": "WebP가 널리 지원되나요?",
        "answer": "예, 모든 현대적인 브라우저가 WebP 형식을 지원합니다."
      },
      {
        "question": "WebP 파일이 얼마나 작나요?",
        "answer": "WebP 파일은 일반적으로 동등한 JPG 파일보다 25-35% 작습니다."
      }
    ]
  },
  "pdf-to-bmp": {
    "title": "PDF를 BMP로",
    "metaDescription": "PDF 페이지를 BMP 비트맵 이미지로 변환. 최대 호환성을 위한 비압축 형식.",
    "keywords": [
      "pdf를 bmp로",
      "pdf를 비트맵으로 변환",
      "비압축 이미지"
    ],
    "description": "<p>PDF 문서 페이지를 BMP 비트맵 이미지로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "페이지 선택",
        "description": "변환할 페이지를 선택하고 DPI를 설정합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 BMP 이미지를 만듭니다."
      }
    ],
    "useCases": [
      {
        "title": "레거시 시스템",
        "description": "오래된 소프트웨어와 호환되는 이미지를 만듭니다.",
        "icon": "history"
      },
      {
        "title": "Windows 애플리케이션",
        "description": "Windows 전용 애플리케이션용 BMP 파일을 생성합니다.",
        "icon": "monitor"
      },
      {
        "title": "비압축 아카이브",
        "description": "PDF에서 비압축 이미지 아카이브를 만듭니다.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "BMP 형식을 사용하는 이유는?",
        "answer": "BMP는 비압축 품질과 레거시 시스템과의 최대 호환성을 제공합니다."
      },
      {
        "question": "BMP 파일이 더 큰가요?",
        "answer": "예, BMP 파일은 비압축이므로 JPG나 PNG보다 상당히 큽니다."
      },
      {
        "question": "어떤 색상 깊이가 지원되나요?",
        "answer": "24비트 및 32비트 색상 깊이가 지원됩니다."
      }
    ]
  },
  "pdf-to-tiff": {
    "title": "PDF를 TIFF로",
    "metaDescription": "PDF를 TIFF 이미지로 변환. 다중 페이지 지원과 함께 전문 품질.",
    "keywords": [
      "pdf를 tiff로",
      "pdf를 tiff로 변환",
      "전문 이미지"
    ],
    "description": "<p>PDF 문서를 고품질 TIFF 이미지로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "출력 구성",
        "description": "단일 또는 다중 페이지 TIFF를 선택하고 DPI를 설정합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 TIFF 이미지를 만듭니다."
      }
    ],
    "useCases": [
      {
        "title": "전문 인쇄",
        "description": "PDF 문서에서 인쇄 준비 TIFF 파일을 만듭니다.",
        "icon": "printer"
      },
      {
        "title": "문서 아카이빙",
        "description": "고품질 TIFF 형식으로 문서를 아카이브합니다.",
        "icon": "archive"
      },
      {
        "title": "출판",
        "description": "출판 워크플로를 위해 PDF를 TIFF로 변환합니다.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "다중 페이지 TIFF를 만들 수 있나요?",
        "answer": "예, 모든 PDF 페이지를 단일 다중 페이지 TIFF로 결합할 수 있습니다."
      },
      {
        "question": "어떤 압축 옵션을 사용할 수 있나요?",
        "answer": "LZW, ZIP, 무압축 옵션을 사용할 수 있습니다."
      },
      {
        "question": "인쇄에 어떤 DPI를 사용해야 하나요?",
        "answer": "전문 인쇄에는 300 DPI 이상을 사용하세요."
      }
    ]
  },
  "pdf-to-greyscale": {
    "title": "PDF를 그레이스케일로",
    "metaDescription": "컬러 PDF를 그레이스케일로 변환. 파일 크기 줄이기 및 흑백 인쇄 준비.",
    "keywords": [
      "pdf를 그레이스케일로",
      "그레이스케일 pdf",
      "흑백 pdf"
    ],
    "description": "<p>컬러 PDF 문서를 그레이스케일(흑백)로 변환합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "컬러 PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "변환 미리보기",
        "description": "그레이스케일 버전이 어떻게 보일지 미리 봅니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환을 클릭하여 그레이스케일 PDF를 만듭니다."
      }
    ],
    "useCases": [
      {
        "title": "인쇄 절약",
        "description": "컬러 인쇄 비용을 절약하기 위해 그레이스케일로 변환합니다.",
        "icon": "printer"
      },
      {
        "title": "초안 문서",
        "description": "검토용 흑백 초안을 만듭니다.",
        "icon": "file-text"
      },
      {
        "title": "파일 크기 줄이기",
        "description": "색상 정보를 제거하여 PDF 크기를 줄입니다.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "텍스트가 읽기 쉽게 유지되나요?",
        "answer": "예, 그레이스케일 변환 중 텍스트 선명도가 보존됩니다."
      },
      {
        "question": "파일이 얼마나 작아지나요?",
        "answer": "파일 크기 감소는 다양하지만 색상이 많은 문서의 경우 20-50%가 될 수 있습니다."
      },
      {
        "question": "특정 페이지만 변환할 수 있나요?",
        "answer": "예, 그레이스케일로 변환할 페이지를 선택할 수 있습니다."
      }
    ]
  },
  "pdf-to-json": {
    "title": "PDF를 JSON으로",
    "metaDescription": "PDF 콘텐츠를 JSON 형식으로 추출. PDF 문서에서 구조화된 데이터 가져오기.",
    "keywords": [
      "pdf를 json으로",
      "pdf 데이터 추출",
      "pdf 파서"
    ],
    "description": "<p>PDF 문서에서 콘텐츠를 구조화된 JSON 형식으로 추출합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "추출할 데이터 선택",
        "description": "추출할 콘텐츠를 선택합니다: 텍스트, 메타데이터, 구조."
      },
      {
        "step": 3,
        "title": "추출 및 다운로드",
        "description": "추출을 클릭하여 JSON을 생성하고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "데이터 추출",
        "description": "PDF 문서에서 구조화된 데이터를 추출합니다.",
        "icon": "database"
      },
      {
        "title": "문서 분석",
        "description": "PDF 구조와 콘텐츠를 프로그래밍 방식으로 분석합니다.",
        "icon": "search"
      },
      {
        "title": "통합",
        "description": "JSON을 통해 PDF 콘텐츠를 애플리케이션으로 가져옵니다.",
        "icon": "plug"
      }
    ],
    "faq": [
      {
        "question": "어떤 데이터가 추출되나요?",
        "answer": "텍스트 콘텐츠, 메타데이터, 페이지 크기, 글꼴, 문서 구조."
      },
      {
        "question": "JSON 형식이 문서화되어 있나요?",
        "answer": "예, JSON 스키마는 일관되고 잘 문서화되어 있습니다."
      },
      {
        "question": "스캔된 PDF에서 추출할 수 있나요?",
        "answer": "스캔된 PDF는 먼저 OCR이 필요합니다. 추출 전에 OCR PDF 도구를 사용하세요."
      }
    ]
  },
  "ocr-pdf": {
    "title": "OCR PDF (텍스트 인식)",
    "metaDescription": "스캔한 PDF를 검색 가능한 문서로 변환. 이미지에서 텍스트를 추출하고 인식합니다.",
    "keywords": [
      "ocr pdf",
      "pdf 텍스트 인식",
      "스캔 pdf 검색",
      "pdf 글자 추출"
    ],
    "description": "\n      <p>OCR PDF 도구는 광학 문자 인식 기술을 사용하여 스캔된 문서나 이미지 기반 PDF에서 텍스트를 추출합니다. 읽기 전용 이미지를 검색과 선택이 가능한 스마트한 문서로 변환하세요.</p>\n      <p>한국어, 영어 등 다양한 언어를 지원하며 원본 레이아웃을 최대한 유지하면서 검색 가능한 텍스트 레이어를 추가합니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "스캔된 PDF 업로드",
        "description": "텍스트 인식이 필요한 PDF 파일을 선택하거나 드래그 앤 드롭합니다."
      },
      {
        "step": 2,
        "title": "언어 설정",
        "description": "문서에 포함된 언어를 선택하여 인식 정확도를 높입니다."
      },
      {
        "step": 3,
        "title": "OCR 실행 및 다운로드",
        "description": "프로세스 버튼을 클릭하여 처리가 완료된 검색 가능 PDF를 저장합니다."
      }
    ],
    "useCases": [
      {
        "title": "문서 디지털화",
        "description": "종이 문서를 스캔한 파일을 디지털 데이터로 관리하고 검색합니다.",
        "icon": "archive"
      },
      {
        "title": "텍스트 복사",
        "description": "이미지로 된 문서에서 필요한 텍스트를 긁어내어 편집에 활용합니다.",
        "icon": "type"
      },
      {
        "title": "접근성 향상",
        "description": "스크린 리더가 읽을 수 없는 이미지를 텍스트로 바꾸어 접근성을 높입니다.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "인식률은 얼마나 되나요?",
        "answer": "원본 스캔 품질에 따라 다르지만, 깨끗한 문서의 경우 98% 이상의 정확도를 보입니다."
      },
      {
        "question": "여러 언어가 섞여 있어도 되나요?",
        "answer": "예, 다중 언어 설정을 통해 혼합된 언어를 인식할 수 있습니다."
      },
      {
        "question": "이미지 위치가 바뀌나요?",
        "answer": "아니요, 원본 이미지는 그대로 유지되고 그 위에 투명한 텍스트 레이어만 입혀집니다."
      }
    ]
  },
  "alternate-merge": {
    "title": "교차 병합",
    "metaDescription": "두 PDF의 페이지를 번갈아 가며 병합. 앞면과 뒷면 스캔 파일을 하나로 합치기에 최적입니다.",
    "keywords": [
      "pdf 교차 병합",
      "pdf 번갈아 합치기",
      "양면 스캔 병합"
    ],
    "description": "<p>두 개의 PDF 파일을 한 페이지씩 번갈아 가며 섞어 병합합니다. 앞면만 스캔한 파일과 뒷면만 스캔한 파일을 합칠 때 유용합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "두 PDF 업로드",
        "description": "앞면(홀수) PDF와 뒷면(짝수) PDF를 각각 선택합니다."
      },
      {
        "step": 2,
        "title": "순서 및 방향 설정",
        "description": "필요에 따라 뒷면 페이지의 순서를 역순으로 설정할 수 있습니다."
      },
      {
        "step": 3,
        "title": "병합 실행",
        "description": "두 파일을 섞어서 하나의 완성된 양면 문서로 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "양면 스캔 수정",
        "description": "단면 스캐너로 앞뒤를 따로 스캔한 결과물을 하나로 합칩니다.",
        "icon": "copy"
      },
      {
        "title": "문서 대조",
        "description": "두 문서의 내용을 한 페이지씩 교차로 배치하여 비교합니다.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "파일 크기가 달라도 되나요?",
        "answer": "예, 한쪽 파일의 페이지가 먼저 끝나면 나머지 페이지는 끝에 몰아서 붙습니다."
      },
      {
        "question": "역순 스캔도 지원하나요?",
        "answer": "예, \"역순 병합\" 옵션을 사용하면 거꾸로 스캔된 뒷면도 올바르게 합쳐집니다."
      }
    ]
  },
  "add-attachments": {
    "title": "첨부파일 추가",
    "metaDescription": "PDF 내부에 다른 파일을 포함시킵니다. 엑셀, 이미지 등 모든 형식을 첨부할 수 있습니다.",
    "keywords": [
      "pdf 첨부파일 추가",
      "pdf 파일 임베드",
      "pdf 포트폴리오"
    ],
    "description": "<p>PDF 문서 안에 엑셀, 코드, 이미지 등 관련 참고 자료를 파일 형태로 직접 임베드합니다. 배포 시 여러 파일을 하나로 묶는 효과가 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "메인 PDF 업로드",
        "description": "파일을 담을 베이스가 되는 PDF를 선택합니다."
      },
      {
        "step": 2,
        "title": "첨부할 파일 선택",
        "description": "내부에 포함시킬 파일들을 추가합니다."
      },
      {
        "step": 3,
        "title": "저장 및 다운로드",
        "description": "첨부파일이 포함된 최종 PDF를 생성합니다."
      }
    ],
    "useCases": [
      {
        "title": "프로젝트 제안서",
        "description": "제안서 PDF 안에 상세 수치 엑셀 파일을 첨부하여 보냅니다.",
        "icon": "package"
      },
      {
        "title": "증빙 서류 제출",
        "description": "메인 문서와 함께 관련 서류들을 하나의 PDF 안에 모아 제출합니다.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "어떤 파일 형식이 가능한가요?",
        "answer": "형식에 제한 없이 모든 종류의 파일을 첨부할 수 있습니다."
      },
      {
        "question": "받는 사람이 파일을 볼 수 있나요?",
        "answer": "예, 표준 PDF 뷰어의 첨부파일 탭에서 확인 및 저장이 가능합니다."
      }
    ]
  },
  "encrypt-pdf": {
    "title": "PDF 암호 설정",
    "metaDescription": "PDF 파일에 비밀번호를 설정하여 문서를 보호합니다. 열기 제한 및 권한 설정을 제어하세요.",
    "keywords": [
      "pdf 암호 설정",
      "pdf 비밀번호 잠금",
      "pdf 보안 설정"
    ],
    "description": "<p>강력한 암호화 알고리즘으로 PDF를 보호합니다. 문서를 열 때 필요한 비밀번호와 인쇄/복사 제한을 위한 마스터 비밀번호를 설정할 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "보호할 파일을 선택합니다."
      },
      {
        "step": 2,
        "title": "비밀번호 입력",
        "description": "열기 암호 또는 권한 암호를 입력합니다."
      },
      {
        "step": 3,
        "title": "암호화 실행",
        "description": "보안이 적용된 PDF를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "민감한 자료 공유",
        "description": "급여 명세서나 계약서 등 개인정보가 포함된 파일을 안전하게 전달합니다.",
        "icon": "lock"
      },
      {
        "title": "콘텐츠 도용 방지",
        "description": "복사나 인쇄 기능을 비활성화하여 내용을 보호합니다.",
        "icon": "key"
      }
    ],
    "faq": [
      {
        "question": "얼마나 안전한가요?",
        "answer": "AES 256비트 암호화 방식을 사용하여 매우 높은 수준의 보안을 제공합니다."
      },
      {
        "question": "비밀번호를 잊어버리면 어떻게 하나요?",
        "answer": "보안을 위해 암호화된 비밀번호는 본인 외에는 알 수 없으니 반드시 기억해 두시기 바랍니다."
      }
    ]
  },
  "decrypt-pdf": {
    "title": "PDF 암호 해제",
    "metaDescription": "암호로 보호된 PDF의 비밀번호를 제거하여 자유롭게 열람 및 편집할 수 있도록 합니다.",
    "keywords": [
      "pdf 암호 해제",
      "pdf 비밀번호 제거",
      "pdf 잠금 풀기"
    ],
    "description": "<p>매번 입력해야 하는 번거로운 PDF 비밀번호를 제거합니다. 비밀번호를 알고 있는 경우 이를 완전히 삭제하여 일반 PDF로 만듭니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "암호화된 PDF 업로드",
        "description": "잠금을 풀고자 하는 파일을 선택합니다."
      },
      {
        "step": 2,
        "title": "현재 암호 입력",
        "description": "현재 설정되어 있는 올바른 암호를 입력합니다."
      },
      {
        "step": 3,
        "title": "해제 및 다운로드",
        "description": "암호가 제거된 PDF를 저장합니다."
      }
    ],
    "useCases": [
      {
        "title": "반복 열람 문서",
        "description": "자주 열어봐야 하는 업무 매뉴얼의 암호를 풀어 편리하게 사용합니다.",
        "icon": "unlock"
      },
      {
        "title": "아카이브 보관",
        "description": "나중에 암호를 잊어버릴 상황을 대비해 보관용 파일의 암호를 미리 해제합니다.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "비밀번호를 몰라도 풀 수 있나요?",
        "answer": "아니요, 무단 사용 방지를 위해 반드시 기존 암호를 알고 있어야 해제가 가능합니다."
      },
      {
        "question": "원본 데이터가 손상되나요?",
        "answer": "아니요, 보안 설정만 변경될 뿐 본문 내용은 전혀 바뀌지 않습니다."
      }
    ]
  },
  "repair-pdf": {
    "title": "PDF 복구",
    "metaDescription": "손상되거나 열리지 않는 PDF 파일을 분석하여 복구합니다.",
    "keywords": [
      "pdf 복구",
      "깨진 pdf 고치기",
      "pdf 파일 수리"
    ],
    "description": "<p>파일 전송 오류나 시스템 충돌로 인해 깨진 PDF 구조를 분석하고 가능한 한 많은 데이터를 복구하여 다시 열 수 있는 상태로 만듭니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "손상된 PDF 업로드",
        "description": "열리지 않거나 에러가 발생하는 파일을 선택합니다."
      },
      {
        "step": 2,
        "title": "복구 프로세스 실행",
        "description": "도구가 파일 구조를 분석하고 재구성을 시도합니다."
      },
      {
        "step": 3,
        "title": "결과 다운로드",
        "description": "복구된 PDF를 확인하고 저장합니다."
      }
    ],
    "useCases": [
      {
        "title": "파일 에러 수정",
        "description": "뷰어에서 열리지 않는 파일을 복구해 중요한 내용을 살려냅니다.",
        "icon": "refresh-cw"
      },
      {
        "title": "데이터 유실 최소화",
        "description": "일부 데이터가 깨진 문서에서 텍스트와 이미지를 최대한 추출합니다.",
        "icon": "wrench"
      }
    ],
    "faq": [
      {
        "question": "모든 파일이 복구되나요?",
        "answer": "손상 정도에 따라 다릅니다. 구조적 오류는 대부분 고칠 수 있으나 데이터 자체가 삭제된 경우 어려울 수 있습니다."
      },
      {
        "question": "이미지가 사라졌어요.",
        "answer": "매우 심하게 손상된 객체는 복구 과정에서 누락될 수 있습니다."
      }
    ]
  },
  "pdf-to-docx": {
    "title": "PDF를 Word로 변환",
    "metaDescription": "PDF 문서를 편집 가능한 Word(DOCX) 파일로 변환합니다. 레이아웃과 서식을 완벽하게 유지하세요.",
    "keywords": [
      "pdf word 변환",
      "pdf 워드 변환",
      "pdf docx 변환",
      "pdf 편집 가능하게"
    ],
    "description": "\n      <p>PDF 문서를 완벽하게 편집 가능한 Microsoft Word(DOCX) 파일로 변환합니다. 최신 알고리즘을 통해 텍스트 흐름, 글꼴, 표 및 이미지를 원본과 거의 동일하게 재현합니다.</p>\n      <p>번거로운 타이핑 없이 PDF 내용을 Word에서 직접 수정하세요. 계약서 수정이나 보고서 재작성에 최적입니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "Word로 변환하고 싶은 파일을 선택합니다."
      },
      {
        "step": 2,
        "title": "변환 시작",
        "description": "문서 구조 분석이 완료될 때까지 잠시 기다립니다."
      },
      {
        "step": 3,
        "title": "Word 파일 다운로드",
        "description": "생성된 DOCX 파일을 열어 자유롭게 편집합니다."
      }
    ],
    "useCases": [
      {
        "title": "계약서 문구 수정",
        "description": "PDF로 된 계약 초안을 Word로 바꿔 조항을 수정하고 협의합니다.",
        "icon": "file-text"
      },
      {
        "title": "이력서 업데이트",
        "description": "오래된 PDF 이력서의 내용을 최신 경력으로 손쉽게 업데이트합니다.",
        "icon": "user"
      },
      {
        "title": "콘텐츠 재활용",
        "description": "보고서의 표나 텍스트를 복사해 새로운 문서를 작성할 때 활용합니다.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "서식이 깨지지는 않나요?",
        "answer": "표준적인 문서는 레이아웃이 잘 유지됩니다. 다만, 디자인 요소가 너무 복잡하면 미세한 조정이 필요할 수 있습니다."
      },
      {
        "question": "스캔한 PDF도 되나요?",
        "answer": "스캔본은 이미지로 인식되므로, 텍스트 편집을 원하시면 당사의 OCR 도구를 먼저 사용하시길 권장합니다."
      },
      {
        "question": "구글 문서와 호환되나요?",
        "answer": "네, 표준 DOCX 형식이므로 구글 문서나 리브레 오피스에서도 잘 열립니다."
      }
    ]
  },
  "rotate-custom": {
    "title": "사용자 지정 각도 회전",
    "metaDescription": "PDF 페이지를 원하는 각도로 정밀하게 회전합니다. 기울어진 스캔 문서 교정에 적합합니다.",
    "keywords": [
      "pdf 각도 회전",
      "pdf 기울기 보정",
      "pdf 수평 맞추기"
    ],
    "description": "<p>표준 90도 회전뿐만 아니라 1도 단위의 미세한 회전도 가능합니다. 잘못 들어간 스캔 문서의 수평을 맞추거나 도면의 방향을 정밀하게 조정할 때 사용하세요.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "회전이 필요한 페이지가 포함된 파일을 선택합니다."
      },
      {
        "step": 2,
        "title": "각도 입력",
        "description": "회전시키고 싶은 정확한 수치(도)를 입력합니다."
      },
      {
        "step": 3,
        "title": "미리보기 및 적용",
        "description": "수평이 맞는지 확인한 후 회전된 PDF를 저장합니다."
      }
    ],
    "useCases": [
      {
        "title": "스캔 문서 보정",
        "description": "비스듬하게 스캔된 종이 문서를 똑바로 세웁니다.",
        "icon": "scan"
      },
      {
        "title": "설계도 정밀 조정",
        "description": "도면이나 차트의 방향을 정확한 각도로 맞춥니다.",
        "icon": "ruler"
      }
    ],
    "faq": [
      {
        "question": "소수점 각도도 되나요?",
        "answer": "현재 정수 단위 회전을 지원하며, 더 정밀한 기능은 업데이트 예정입니다."
      },
      {
        "question": "이미지가 잘리나요?",
        "answer": "아니요, 회전된 내용이 모두 보일 수 있도록 페이지 크기가 자동으로 조정됩니다."
      }
    ]
  },
  "grid-combine": {
    "title": "그리드 결합 PDF",
    "metaDescription": "여러 PDF 파일을 유연한 그리드 레이아웃으로 단일 페이지에 결합합니다. 2개, 4개, 6개, 9개 이상의 PDF를 경계선 및 간격과 함께 한 페이지에 배치하세요.",
    "keywords": [
      "그리드 결합",
      "PDF 그리드 결합",
      "PDF 콜라주",
      "여러 PDF 한 페이지에",
      "PDF N-up",
      "PDF 그리드"
    ],
    "description": "\n      <p>그리드 결합 도구는 여러 개의 개별 PDF 파일을 단일 페이지로 결합하는 독특한 방법을 제공합니다. 페이지를 단순히 추가하는 표준 'PDF 병합' 도구나 단일 문서에서 페이지를 재배치하는 'N-Up' 도구와 달리, 그리드 결합은 여러 입력 파일을 받아 사용자 정의 가능한 그리드 레이아웃에 나란히 배치합니다.</p>\n      <p>2x1, 2x2, 3x3 등 다양한 그리드 구성을 선택할 수 있습니다. 이는 여러 문서를 비교하거나, 다른 소스의 유인물을 만들거나, 여러 파일의 컴팩트 버전을 인쇄하는 데 이상적입니다.</p>\n      <p>용지 크기, 방향, 여백, 간격, 테두리를 제어하여 출력을 사용자 정의하세요. 모든 처리는 브라우저 내에서 로컬로 수행되므로 개인 정보가 최대한 보장됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "결합할 2개 이상의 PDF 파일을 업로드합니다. 원하는 순서로 재정렬할 수 있습니다."
      },
      {
        "step": 2,
        "title": "그리드 레이아웃 선택",
        "description": "원하는 그리드 레이아웃을 선택합니다(예: 2x2는 페이지당 4개 파일, 3x3은 페이지당 9개 파일)."
      },
      {
        "step": 3,
        "title": "모양 사용자 정의",
        "description": "용지 크기(A4, Letter), 방향, 항목 간 간격, 테두리 설정을 조정합니다."
      },
      {
        "step": 4,
        "title": "결합 및 다운로드",
        "description": "'PDF 병합'을 클릭하여 새 그리드 레이아웃 문서를 생성하고 결과를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "시각적 비교",
        "description": "디자인이나 문서의 다른 버전을 한 페이지에 나란히 배치하여 쉽게 비교합니다.",
        "icon": "layout-grid"
      },
      {
        "title": "유인물 인쇄",
        "description": "여러 짧은 문서나 슬라이드를 한 장의 종이에 모아 인쇄 비용을 절약합니다.",
        "icon": "printer"
      },
      {
        "title": "포트폴리오 생성",
        "description": "여러 프로젝트 파일을 정돈된 그리드 개요로 표시합니다.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "N-Up과의 차이점은 무엇인가요?",
        "answer": "N-Up은 하나의 PDF에서 페이지를 가져와 시트에 배치합니다. 그리드 결합은 여러 개의 다른 PDF 파일을 가져와 배치합니다."
      },
      {
        "question": "몇 개의 파일을 결합할 수 있나요?",
        "answer": "브라우저 메모리에 따라 다르지만 최대 100개까지 가능하며, 레이아웃에 따라 페이지당 수용 가능한 수가 다릅니다(예: 4x4는 16개)."
      },
      {
        "question": "테두리를 추가할 수 있나요?",
        "answer": "네, 각 PDF 파일 주위에 테두리를 추가하고 테두리 색상을 사용자 지정할 수 있습니다."
      }
    ]
  },
  "email-to-pdf": {
    "title": "이메일을 PDF로",
    "metaDescription": "이메일 파일(.eml, .msg)을 PDF 문서로 변환합니다. 서식, 인라인 이미지, 클릭 가능한 링크 및 첨부 파일을 보존합니다.",
    "keywords": [
      "이메일 pdf 변환",
      "eml pdf",
      "msg pdf",
      "이메일 변환",
      "아웃룩 pdf"
    ],
    "description": "\n      <p>이메일을 PDF로는 이메일 파일(.eml 및 .msg 형식)을 잘 포맷된 PDF 문서로 변환합니다. 이 도구는 이메일 헤더 정보, 본문 내용, CID 교체를 통한 인라인 이미지, 클릭 가능한 링크를 보존하고 첨부 파일을 PDF에 직접 포함합니다.</p>\n      <p>페이지 크기(A4, Letter, Legal), 시간대 지원이 포함된 날짜 형식, CC/BCC 필드 및 첨부 파일 정보 포함 여부 등 출력 옵션을 사용자 지정할 수 있습니다.</p>\n      <p>모든 변환은 브라우저에서 로컬로 수행되므로 이메일의 개인 정보와 보안이 보장됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "이메일 파일 업로드",
        "description": ".eml 또는 .msg 이메일 파일을 업로드합니다."
      },
      {
        "step": 2,
        "title": "옵션 구성",
        "description": "페이지 크기, 날짜 형식, 시간대를 설정하고 포함할 필드를 선택합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "첨부 파일이 포함된 PDF로 변환하고 결과를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "법적 기록",
        "description": "법적 문서를 위해 첨부 파일이 포함된 PDF로 중요한 이메일을 보관합니다.",
        "icon": "scale"
      },
      {
        "title": "비즈니스 아카이브",
        "description": "장기 보관을 위해 비즈니스 서신을 PDF로 변환합니다.",
        "icon": "briefcase"
      },
      {
        "title": "증거 보존",
        "description": "인라인 이미지와 첨부 파일이 포함된 이메일 증거를 편집 불가능한 PDF 형식으로 저장합니다.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "어떤 이메일 형식이 지원되나요?",
        "answer": ".eml(RFC 822) 및 .msg(Microsoft Outlook) 파일이 모두 완전히 지원됩니다."
      },
      {
        "question": "첨부 파일이 포함되나요?",
        "answer": "네! 첨부 파일은 PDF 파일에 직접 포함됩니다. 호환되는 PDF 리더를 사용하여 PDF에서 추출할 수 있습니다."
      },
      {
        "question": "인라인 이미지가 표시되나요?",
        "answer": "네, CID(Content-ID)를 통해 참조되는 인라인 이미지는 자동으로 base64 데이터 URI로 변환되어 PDF에 표시됩니다."
      },
      {
        "question": "링크를 클릭할 수 있나요?",
        "answer": "네, 모든 HTML 링크(<a> 태그)와 일반 텍스트 이메일의 URL은 PDF에서 클릭 가능한 링크로 변환됩니다."
      },
      {
        "question": "이메일 서식이 보존되나요?",
        "answer": "네, HTML 이메일은 스타일, 이미지 및 링크를 포함하여 가능한 한 서식을 유지합니다."
      }
    ]
  },
  "djvu-to-pdf": {
    "title": "DJVU를 PDF로 변환",
    "metaDescription": "DJVU 문서 파일을 PDF로 변환합니다. 스캔된 문서와 책을 위한 고품질 렌더링.",
    "keywords": [
      "djvu pdf 변환",
      "djvu 변환",
      "djvu 변환기",
      "djvu pdf",
      "djv pdf"
    ],
    "description": "\n      <p>DJVU를 PDF로 변환은 DjVu 문서 파일을 고품질 PDF 문서로 변환합니다. DjVu는 주로 스캔된 문서, 특히 텍스트, 선화 및 사진의 조합을 포함하는 문서를 저장하도록 설계된 컴퓨터 파일 형식입니다.</p>\n      <p>이 도구는 선택한 DPI(인치당 도트 수)로 DJVU 파일의 각 페이지를 렌더링하고 검색 가능한 PDF 문서로 결합합니다. 스캔된 책, 기술 매뉴얼 및 아카이브 문서를 변환하는 데 완벽합니다.</p>\n      <p>모든 변환은 브라우저에서 로컬로 수행되므로 문서의 개인 정보와 보안이 보장됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "DJVU 파일 업로드",
        "description": ".djvu 또는 .djv 파일을 드래그 앤 드롭하거나 클릭하여 장치에서 선택합니다."
      },
      {
        "step": 2,
        "title": "옵션 구성",
        "description": "출력 DPI(72, 150 또는 300) 및 PDF의 이미지 품질을 선택합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "PDF로 변환을 클릭하고 변환된 문서를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "아카이브 문서",
        "description": "DJVU 아카이브를 범용 PDF 형식으로 변환합니다.",
        "icon": "archive"
      },
      {
        "title": "스캔된 책 공유",
        "description": "더 넓은 호환성을 위해 PDF 형식으로 스캔된 책을 공유합니다.",
        "icon": "share-2"
      },
      {
        "title": "문서 인쇄",
        "description": "인쇄를 위해 DJVU를 고품질 PDF로 변환합니다.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "DJVU 형식이란 무엇인가요?",
        "answer": "DjVu는 스캔된 문서, 특히 텍스트, 그림 및 이미지가 있는 문서를 저장하도록 설계된 파일 형식입니다. 스캔된 콘텐츠에 대해 PDF보다 더 나은 압축을 제공합니다."
      },
      {
        "question": "어떤 DPI를 선택해야 하나요?",
        "answer": "72 DPI는 웹 보기에 적합하고, 150 DPI는 표준 문서에, 300 DPI는 고품질 인쇄에 적합합니다."
      },
      {
        "question": "텍스트가 검색 가능한가요?",
        "answer": "텍스트는 이미지로 렌더링됩니다. 검색 가능한 텍스트가 필요한 경우 변환 후 OCR PDF 도구를 사용하는 것을 고려하세요."
      }
    ]
  },
  "fb2-to-pdf": {
    "title": "FB2를 PDF로 변환",
    "metaDescription": "FictionBook (FB2) 전자책을 PDF로 변환합니다. 여러 파일의 고품질 렌더링을 지원합니다.",
    "keywords": [
      "fb2 pdf 변환",
      "fb2 변환",
      "fictionbook pdf",
      "fb2 변환기",
      "fb2.zip pdf"
    ],
    "description": "\n      <p>FB2를 PDF로 변환은 FictionBook (FB2) 전자책 파일을 고품질 PDF 문서로 변환합니다. FB2는 러시아와 동유럽에서 널리 사용되는 인기 있는 XML 기반 전자책 형식입니다.</p>\n      <p>이 도구는 .fb2 및 .fb2.zip 파일을 모두 지원하며 한 번에 여러 파일을 처리할 수 있습니다. 전자책의 텍스트 서식, 이미지 및 장 구조를 보존합니다.</p>\n      <p>모든 변환은 고급 렌더링 기술을 사용하여 브라우저에서 로컬로 수행되므로 책의 개인 정보가 보장되고 변환이 빠릅니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "FB2 파일 업로드",
        "description": "하나 이상의 .fb2 또는 .fb2.zip 파일을 드래그 앤 드롭하거나 클릭하여 장치에서 선택합니다."
      },
      {
        "step": 2,
        "title": "품질 선택",
        "description": "출력 품질 선택: 낮음(72 DPI), 중간(150 DPI) 또는 높음(300 DPI)."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "PDF로 변환을 클릭하고 변환된 문서를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "전자책 인쇄",
        "description": "물리적 인쇄를 위해 FB2 전자책을 PDF로 변환합니다.",
        "icon": "printer"
      },
      {
        "title": "일괄 변환",
        "description": "한 번에 여러 FB2 파일을 PDF로 변환합니다.",
        "icon": "layers"
      },
      {
        "title": "범용 형식",
        "description": "모든 장치에서 작동하는 PDF 형식으로 전자책을 공유합니다.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "한 번에 여러 FB2 파일을 변환할 수 있나요?",
        "answer": "네! 이 도구는 최대 20개의 FB2 파일을 동시에 일괄 변환하는 것을 지원합니다."
      },
      {
        "question": ".fb2.zip 파일이 지원되나요?",
        "answer": "네, 도구는 .fb2.zip 아카이브에서 FB2 파일을 자동으로 추출하고 변환합니다."
      },
      {
        "question": "서식이 보존되나요?",
        "answer": "네! 도구는 네이티브 FB2 렌더링을 사용하여 높은 충실도로 텍스트 서식, 이미지 및 장 구조를 보존합니다."
      }
    ]
  },
  "deskew-pdf": {
    "title": "PDF 기울기 보정",
    "metaDescription": "스캔되거나 기울어진 PDF 페이지를 자동으로 똑바로 만듭니다. 정밀한 각도 감지로 기울어진 문서를 수정합니다.",
    "keywords": [
      "pdf 기울기 보정",
      "pdf 똑바로",
      "기울어진 스캔 수정",
      "자동 pdf 회전",
      "pdf 각도 보정"
    ],
    "description": "\n      <p>PDF 기울기 보정은 고급 투영 프로파일 분산 분석을 사용하여 PDF 문서의 기울어진 또는 왜곡된 페이지를 자동으로 감지하고 보정합니다. 스캐너에 일정한 각도로 공급된 스캔 문서에 필수적입니다.</p>\n      <p>도구는 다른 각도에서 텍스트와 콘텐츠 정렬을 분석하여 최적의 회전을 찾은 다음 보정을 적용합니다. 최적의 결과를 위해 감도 임계값(1-30)과 DPI 설정(72-300)을 조정할 수 있습니다.</p>\n      <p>모든 처리는 WebAssembly 기술을 사용하여 브라우저에서 로컬로 수행되므로 문서의 개인 정보와 보안이 보장됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "스캔된 PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "설정 구성",
        "description": "필요한 경우 더 나은 감지를 위해 임계값 감도와 DPI를 조정합니다."
      },
      {
        "step": 3,
        "title": "처리 및 다운로드",
        "description": "보정을 클릭하여 페이지를 똑바로 만들고 보정된 PDF를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "스캔 문서",
        "description": "문서 공급 장치에서 일정한 각도로 스캔된 페이지를 수정합니다.",
        "icon": "scan"
      },
      {
        "title": "모바일 스캔",
        "description": "스마트폰으로 촬영한 기울어진 문서 사진을 보정합니다.",
        "icon": "smartphone"
      },
      {
        "title": "아카이브 복원",
        "description": "가독성을 향상시키기 위해 오래된 스캔 아카이브를 똑바로 만듭니다.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "각도 감지는 얼마나 정확한가요?",
        "answer": "도구는 투영 프로파일 분산 분석을 사용하여 ±10도까지의 기울기 각도를 높은 정확도로 감지합니다. 0.3도 미만의 각도를 가진 페이지는 자동으로 건너뜁니다."
      },
      {
        "question": "텍스트 품질이 영향을 받나요?",
        "answer": "90도의 배수 회전의 경우 품질 손실이 발생하지 않습니다. 다른 각도의 경우 도구는 가장 가까운 도수로 반올림하고 좋은 품질을 유지합니다."
      },
      {
        "question": "특정 페이지만 보정할 수 있나요?",
        "answer": "도구는 모든 페이지를 분석하지만 감지된 기울기가 감도 임계값을 초과하는 페이지만 보정합니다. 최소 기울기를 가진 페이지는 변경되지 않습니다."
      },
      {
        "question": "감도 임계값이란 무엇인가요?",
        "answer": "값 1-10은 명백한 기울기만 보정하고, 11-20은 중간 기울기를 감지하며, 21-30은 미묘한 각도를 포착합니다. 기본값은 균형 잡힌 감지를 위해 10입니다."
      },
      {
        "question": "처리에는 얼마나 걸리나요?",
        "answer": "처리 시간은 파일 크기와 DPI에 따라 다릅니다. 150 DPI(기본값)는 속도와 정확도 사이의 좋은 균형을 제공합니다. 더 높은 DPI는 더 정확하지만 더 느립니다."
      }
    ]
  },
  "pdf-to-pdfa": {
    "title": "PDF를 PDF/A로 변환",
    "metaDescription": "PDF를 PDF/A 아카이브 형식으로 변환합니다. ISO 표준으로 장기 문서 보존을 보장합니다.",
    "keywords": [
      "pdf pdfa 변환",
      "pdfa 변환기",
      "pdf 아카이브",
      "pdf 장기 보존",
      "장기 보존"
    ],
    "description": "\n      <p>PDF를 PDF/A로 변환은 PDF 문서를 PDF/A 형식으로 변환합니다. PDF/A는 장기 문서 아카이빙을 위한 ISO 표준입니다. PDF/A는 문서가 수십 년 동안 볼 수 있고 재현 가능하도록 보장합니다.</p>\n      <p>PDF/A-1b(기본 준수), PDF/A-2b(권장, 투명도 지원) 또는 PDF/A-3b(임베드된 파일 허용) 중에서 선택할 수 있습니다. 도구는 필요에 따라 폰트를 임베드하고 투명도를 평탄화합니다.</p>\n      <p>모든 변환은 브라우저에서 로컬로 수행되므로 문서의 개인 정보가 보장됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF/A로 변환하려는 PDF를 업로드합니다."
      },
      {
        "step": 2,
        "title": "PDF/A 레벨 선택",
        "description": "PDF/A-1b, PDF/A-2b 또는 PDF/A-3b 준수 레벨을 선택합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "PDF/A로 변환하고 아카이브 문서를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "법적 아카이브",
        "description": "법정에서 허용 가능한 장기 저장을 위해 법적 문서를 PDF/A로 변환합니다.",
        "icon": "scale"
      },
      {
        "title": "정부 기록",
        "description": "PDF/A를 사용하여 정부 아카이브 요구 사항을 준수합니다.",
        "icon": "building"
      },
      {
        "title": "비즈니스 아카이브",
        "description": "미래의 접근성을 위해 중요한 비즈니스 문서를 보존합니다.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "어떤 PDF/A 레벨을 사용해야 하나요?",
        "answer": "PDF/A-2b는 대부분의 용도에 권장됩니다. 최대 호환성을 위해 1b를 사용하거나 임베드된 파일이 필요한 경우 3b를 사용하세요."
      },
      {
        "question": "PDF/A를 특별하게 만드는 것은 무엇인가요?",
        "answer": "PDF/A는 폰트를 임베드하고 암호화를 비활성화하며 미래의 보기를 위해 모든 요소가 자체 포함되도록 보장합니다."
      },
      {
        "question": "PDF/A에서 다시 변환할 수 있나요?",
        "answer": "PDF/A 파일은 표준 PDF이며 정상적으로 열 수 있습니다. 아카이브 기능은 제한을 추가하지만 제약은 아닙니다."
      }
    ]
  },
  "digital-sign-pdf": {
    "title": "디지털 서명",
    "metaDescription": "PFX, P12 또는 PEM 인증서를 사용하여 PDF 문서에 디지털 서명합니다. 브라우저에 로컬로 인증서 기반 서명을 추가하세요.",
    "keywords": [
      "pdf 디지털 서명",
      "x509 인증서",
      "pfx 서명",
      "p12 서명",
      "pem 서명",
      "전자 서명"
    ],
    "description": "<p>디지털 서명 도구를 사용하면 PDF 문서에 암호화된 X.509 디지털 서명을 추가할 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "디지털 서명할 PDF 문서를 업로드합니다."
      },
      {
        "step": 2,
        "title": "인증서 로드",
        "description": "X.509 인증서 파일(.pfx, .p12 또는 .pem)을 업로드하고 비밀번호를 입력합니다."
      },
      {
        "step": 3,
        "title": "서명 및 다운로드",
        "description": "PDF 서명을 클릭하여 디지털 서명을 적용하고 서명된 문서를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "법적 문서",
        "description": "법적 구속력이 있는 디지털 서명으로 계약서와 법적 문서에 서명합니다.",
        "icon": "scale"
      },
      {
        "title": "비즈니스 승인",
        "description": "감사 추적을 위해 송장과 승인 문서에 디지털 서명합니다.",
        "icon": "briefcase"
      },
      {
        "title": "문서 무결성",
        "description": "서명 후 문서가 변조되지 않았음을 확인합니다.",
        "icon": "shield-check"
      }
    ],
    "faq": [
      {
        "question": "어떤 인증서 형식이 지원되나요?",
        "answer": "PFX(.pfx), PKCS#12(.p12) 및 PEM(.pem) 인증서 형식이 지원됩니다."
      },
      {
        "question": "서명이 법적으로 유효한가요?",
        "answer": "예, 유효한 인증서를 사용한 X.509 디지털 서명은 대부분의 관할권에서 법적으로 인정됩니다."
      },
      {
        "question": "가시적 서명을 추가할 수 있나요?",
        "answer": "예, 사용자 정의 텍스트, 이미지, 위치 및 스타일이 있는 가시적 서명을 추가할 수 있습니다."
      }
    ]
  },
  "validate-signature": {
    "title": "서명 검증",
    "metaDescription": "PDF 문서의 디지털 서명을 검증합니다. 인증서 유효성, 서명자 정보 및 문서 무결성을 확인합니다.",
    "keywords": [
      "pdf 서명 검증",
      "디지털 서명 검증",
      "pdf 인증서 확인",
      "서명 검증"
    ],
    "description": "<p>서명 검증 도구를 사용하면 PDF 문서의 디지털 서명을 검증할 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "서명된 PDF 업로드",
        "description": "디지털 서명이 포함된 PDF 문서를 업로드합니다."
      },
      {
        "step": 2,
        "title": "결과 보기",
        "description": "문서에서 발견된 모든 서명과 유효성 상태를 확인합니다."
      },
      {
        "step": 3,
        "title": "보고서 내보내기",
        "description": "선택적으로 검증 결과의 JSON 보고서를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "문서 검증",
        "description": "서명된 문서가 진본이며 변조되지 않았음을 확인합니다.",
        "icon": "shield-check"
      },
      {
        "title": "규정 준수 감사",
        "description": "규정 준수 및 감사 목적으로 서명 유효성을 확인합니다.",
        "icon": "clipboard-check"
      },
      {
        "title": "인증서 검토",
        "description": "서명된 문서의 인증서 세부 정보와 만료 날짜를 봅니다.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "\"유효\"는 무엇을 의미하나요?",
        "answer": "유효한 서명은 서명 이후 문서가 수정되지 않았으며 인증서 체인이 완전함을 의미합니다."
      },
      {
        "question": "여러 PDF를 검증할 수 있나요?",
        "answer": "예, 여러 PDF를 업로드하고 모든 서명을 일괄 검증할 수 있습니다."
      },
      {
        "question": "서명이 무효가 되는 이유는?",
        "answer": "문서가 수정되었거나, 인증서가 만료되었거나, 인증서가 신뢰되지 않는 경우 서명이 무효가 될 수 있습니다."
      }
    ]
  },
  "form-logic-designer": {
    "title": "폼 로직 디자인",
    "metaDescription": "비주얼 디자이너로 PDF 양식 규칙을 만듭니다. 필드를 연결하고 대화형 계산 및 유효성 검사 논리를 추가합니다.",
    "keywords": [
      "PDF 양식 로직",
      "AcroJS 주입",
      "노드 플로우",
      "대화형 PDF",
      "필드 종속성"
    ],
    "description": "\n        <p>프로그래밍 가능 PDF 양식 로직 디자이너는 기존의 정적인 양식 대신 활성화된 동적 필드를 생성하여 PDF 기능의 큰 공백을 메우는 혁신적인 도구입니다.</p>\n        <p>React Flow를 기반으로 구축된 \"글래스모피즘 발광 노드\" 비주얼 캔버스를 통해 PDF 양식 필드가 대화형 노드로 변환됩니다. 드래그 앤 드롭으로 선을 연결하여 트리거 조건과 동작(예: 체크박스가 선택되면 ➜ 비활성화된 입력 상자 활성화 ➜ 총 금액 자동 계산 및 입력)을 정의할 수 있습니다.</p>\n        <p>설계가 완료되면 AcroJS 엔진이 로직을 표준 Acrobat JavaScript로 컴파일하여 PDF의 대화형 양식 사전인 '/AA'에 주입합니다. 이에 따라 모든 표준 PDF 뷰어에서 연동 로직이 기본적으로 실행됩니다.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "대화형 PDF 업로드",
        "description": "대화형 양식 필드(AcroForm)가 이미 포함된 PDF 파일을 업로드합니다."
      },
      {
        "step": 2,
        "title": "캔버스에서 로직 설계",
        "description": "각 필드를 노드로 연결합니다. 소스 필드 이벤트(값 변경, 포커스 아웃 등)를 대상 필드의 동작(숨기기, 비활성화, 값 설정 등)에 연결합니다."
      },
      {
        "step": 3,
        "title": "주입 및 다운로드",
        "description": "컴파일된 JavaScript 로직을 PDF 사전에 주입하고 대화형 스마트 PDF를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "스마트 상업 계약서",
        "description": "사용자가 선택한 약관에 따라 추가 서명란이나 계약 입력 상자를 동적으로 표시하거나 숨겨 레이아웃을 깔끔하게 유지합니다.",
        "icon": "file-signature"
      },
      {
        "title": "동적 지출 결의서",
        "description": "여러 항목의 청구 금액을 자동으로 합산하고 입력된 세율에 따라 최종 세금을 자동으로 계산하여 수동 입력을 방지합니다.",
        "icon": "calculator"
      },
      {
        "title": "대화형 설문지",
        "description": "조건부 분기 로직을 통해 해당되지 않는 질문을 건너뛰어 모바일 기기에서의 응답 입력 환경을 개선합니다.",
        "icon": "form-input"
      }
    ],
    "faq": [
      {
        "question": "PDF 파일에 양식 필드가 미리 설정되어 있어야 하나요?",
        "answer": "네, 그렇습니다. 이 도구는 기존 양식 필드에 고급 로직을 연결하도록 설계되었습니다. 양식 필드가 없는 경우 먼저 \"양식 작성\" 도구를 사용하여 입력란이나 체크박스를 생성해 주십시오."
      },
      {
        "question": "이 연동 로직이 모든 PDF 뷰어에서 실행되나요?",
        "answer": "Adobe PDF 표준을 준수하고 Acrobat JavaScript를 지원하는 뷰어(예: Adobe Acrobat Reader, Foxit Reader, Chrome/Edge 브라우저 내장 리더 등)라면 모두 실행됩니다. 모바일 기기의 일부 경량 뷰어에서는 지원이 제한될 수 있습니다."
      },
      {
        "question": "PDF 인쇄에 영향을 미치나요?",
        "answer": "전혀 영향을 주지 않습니다. 주입된 스크립트는 화면상에서 상호작용할 때만 작동합니다. 인쇄 시에는 현재 입력된 폼 값 상태 그대로 인쇄되며 로직 노드 연동선 등은 인쇄되지 않습니다."
      }
    ]
  },
  "global-invoice-parser": {
    "title": "PDF 송장 금액 변환기",
    "metaDescription": "PDF에서 송장 금액을 추출하고, 통화 간 총액을 변환하고, 문서에 계산 요약을 추가합니다.",
    "keywords": [
      "송장 번역",
      "송장 환율 환산",
      "외화 청구서 계산",
      "송장 스탬프",
      "글로벌 송장 도구"
    ],
    "description": "\n        <p>글로벌 송장 번역 및 환율 환산 도구는 다국적 기업이나 해외 구매를 관리하는 사용자에게 매우 명확한 정산 처리를 제공합니다.</p>\n        <p>여러 통화(달러, 유로, 엔 등)가 섞인 송장 처리는 수동 환산 작업으로 인해 번거롭기 마련입니다. 이 도구를 사용하면 <strong>송장 텍스트 필드의 인플레이스 번역과 실시간 환율 변환</strong>을 쉽게 결합하여 처리할 수 있습니다.</p>\n        <p>송장 내 청구 금액을 자동으로 분석하고 실시간 기준 환율에 따라 현지 통화로 계산합니다. 그런 다음, 기존 문서 배치를 보존하면서 페이지 여백에 아름다운 반투명 글래스모피즘 스타일의 \"Exchange Rate ledger\" 스탬프를 찍어줍니다. 회전식 숫자 다이얼 시각 효과와 함께 본국 통화 기준 비용을 명확하게 파악할 수 있습니다.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "외화 송장 PDF 업로드",
        "description": "외화(예: USD, EUR, JPY)로 청구된 PDF 송장 또는 청구서 파일을 업로드합니다."
      },
      {
        "step": 2,
        "title": "로컬 통화 및 환율 설정",
        "description": "환산하고자 하는 대상 통화(예: KRW)를 선택하고 고정 환율 또는 실시간 기준 환율을 지정합니다."
      },
      {
        "step": 3,
        "title": "변환 스탬프 찍기 및 다운로드",
        "description": "변환을 실행하여 환율 계산 결과가 인쇄된 고급 환율 대장 스탬프를 PDF에 Overlay하고 문서를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "해외 출장 경비 청구",
        "description": "외화로 지급한 영수증이나 인보이스를 한 번에 원화 금액으로 변환하고 환율 스냅샷 도장을 찍어 재무 부서의 확인 및 정산 속도를 높입니다.",
        "icon": "plane"
      },
      {
        "title": "해외 직구 거래 내역 대조",
        "description": "직구 청구서의 유로/엔화 등을 원화로 변환해 표시하여 실제 현지 통화로 발생한 카드 결제액을 즉시 대조합니다.",
        "icon": "credit-card"
      },
      {
        "title": "무역 송장 통합 관리",
        "description": "다양한 외화 결제 문서에 자국 통화 환산 스탬프를 일괄 삽입하여 기업 아카이빙 문서의 기준 규격을 통일합니다.",
        "icon": "folder-open"
      }
    ],
    "faq": [
      {
        "question": "송장 금액을 어떻게 자동으로 감지하나요?",
        "answer": "PDF 문자 스트림을 검색하여 통화 기호가 붙은 숫자를 파악하고 \"Total\"이나 \"Amount Due\" 같은 문맥적 헤더 키워드를 대조하여 최종 결제액 위치를 찾아냅니다."
      },
      {
        "question": "환율 정보는 실시간으로 조회되나요?",
        "answer": "네, 그렇습니다. 기본적으로 신뢰할 수 있는 글로벌 금융 환율 API에서 금일 고시 환율을 불러옵니다. 기업 내 회계 기준 환율이 있는 경우 수동으로 조정하여 직접 기입할 수도 있습니다."
      },
      {
        "question": "찍힌 도장이 송장의 글자를 가리지 않나요?",
        "answer": "이 엔진은 페이지 여백 및 하단의 여유 영역을 지능적으로 감지해 도장을 찍습니다. 도장 자체도 투명도가 적용된 반투명 아크릴 느낌이므로 글자가 겹쳐도 알아볼 수 있습니다."
      }
    ]
  },
  "pdf-to-cbz": {
    "title": "PDF를 CBZ로 변환",
    "metaDescription": "PDF 파일을 CBZ 만화 아카이브로 변환합니다. 이미지 순서와 해상도를 원본 그대로 보존합니다.",
    "keywords": [
      "pdf cbz 변환",
      "만화책 변환",
      "cbz 변환기"
    ],
    "description": "<p>PDF to CBZ는 만화 애호가와 디지털 전자책 기록 보관자를 위해 맞춤 설계되었습니다. PDF 볼륨의 모든 페이지를 고화질 래스터화된 그래픽으로 렌더링하고 표준 Comic Book ZIP(.cbz) 번들로 컴파일합니다.</p>\n      <p>Calibre, Komga, Kavita 또는 CDisplayEx와 같은 시스템에서 번거로운 수동 스크래핑을 제거하기 위해 프로세서는 내부적으로 <strong>ComicInfo.xml</strong> 및 <strong>metadata.opf</strong> 파일을 자동으로 생성하여 삽입하는 동시에 표준화된 <strong>ComicBookInfo JSON</strong> 페이로드를 ZIP 파일 주석 메타데이터에 직접 작성합니다.</p>\n      <p>이미지 압축 품질, 페이지 크기 배율, 오른쪽에서 왼쪽 레이아웃 읽기 토글(만화 모드) 및 흑백 회색조 색상 필터링을 위한 전체 구성 슬라이더가 포함되어 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "만화 PDF 업로드",
        "description": "기본 만화, 아트북 또는 만화 PDF 파일을 드래그 앤 드롭하세요."
      },
      {
        "step": 2,
        "title": "만화 메타데이터 입력",
        "description": "시리즈, 권, 제목, 작가 및 출판사 필드를 작성하고 레이아웃 또는 회색조 최적화를 전환합니다."
      },
      {
        "step": 3,
        "title": "컴파일 및 다운로드",
        "description": "변환을 클릭하여 Calibre에 즉시 사용할 수 있는 메타데이터가 풍부한 .cbz 파일을 컴파일하고 검색하세요."
      }
    ],
    "useCases": [
      {
        "title": "역행 만화 포장",
        "description": "원본으로 스캔한 PDF 책을 만화 도서관 관리자가 쉽게 스크랩할 수 있는 컴팩트한 표준 규격 CBZ 만화 파일로 변환합니다.",
        "icon": "book"
      },
      {
        "title": "제로 노력 구경 통합",
        "description": "내장된 메타데이터.opf 스키마를 통해 Calibre는 수동 조회 없이 작성자 및 볼륨 문제를 가져오고 분류할 수 있습니다.",
        "icon": "database"
      },
      {
        "title": "E-Ink 화면 개선",
        "description": "컴파일 시 그래픽 색상 채널을 고대비 회색조로 사전 필터링하여 저장 공간을 절약하는 동시에 E-잉크 화면의 시각적 새로고침과 선명도를 높입니다.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": ".cbz 파일이란 무엇인가요?",
        "answer": "CBZ 파일은 만화 시리즈의 특수 아카이브 컨테이너 형식입니다. 구조적 메타데이터 XML 파일과 함께 순차적으로 번호가 매겨진 페이지 이미지를 포함하는 ZIP 패키지로 내부적으로 형식이 지정됩니다."
      },
      {
        "question": "메타데이터는 어떻게 호환되나요?",
        "answer": "ComicInfo.xml, 메타데이터.opf 및 ZIP 파일 주석을 한 번에 컴파일하고 포함합니다. 이는 여러 만화 및 전자책 생태계 전반에 걸쳐 완벽한 규정 준수를 보장합니다."
      },
      {
        "question": "그레이스케일 모드를 사용하는 이유는 무엇입니까?",
        "answer": "회색조 E-ink 리더(예: Kindle 또는 Kobo)에서 읽는 경우 회색조에서 직접 컴파일하면 아티팩트 잔상이 줄어들고 뛰어난 대비 수준을 제공하며 최종 CBZ 파일 크기가 줄어듭니다."
      }
    ]
  },
  "overlay-pdf": {
    "title": "PDF 레이어 오버레이",
    "metaDescription": "두 개의 PDF 페이지를 하나로 겹쳐서 오버레이 병합합니다. 배경지, 인장, 워터마크 합성에 유용합니다.",
    "keywords": [
      "pdf 오버레이",
      "pdf 겹치기",
      "워터마크 레이어"
    ],
    "description": "<p>PDF 오버레이를 사용하면 한 PDF 문서의 페이지를 다른 PDF 문서 위나 아래에 겹쳐서 표시할 수 있습니다. 레터헤드 적용, 배경 격자 추가, 워터마크 스탬프 또는 레이아웃 초안 융합에 적합합니다.</p>\n      <p>오버레이 모드(레이어가 맨 위에 위치)와 언더레이 모드(레이어가 아래에 위치)를 모두 지원합니다. 사용자 정의 대상 페이지 범위를 지정하거나 더 짧은 오버레이 문서를 반복하여 전체 기본 파일을 자동으로 포괄합니다.</p>\n      <p>모든 처리는 완전히 웹 브라우저 내에서 로컬로 실행되므로 완전한 보안과 데이터 개인 정보 보호가 보장됩니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "기본 PDF 업로드",
        "description": "기본 기본 PDF 문서를 끌어서 놓습니다."
      },
      {
        "step": 2,
        "title": "레이어 PDF 업로드",
        "description": "레이어 역할을 하는 오버레이/언더레이 문서를 제공하세요."
      },
      {
        "step": 3,
        "title": "레이어링 구성",
        "description": "오버레이 또는 언더레이 모드를 선택하고, 페이지 범위를 지정하고, 페이지 반복을 활성화합니다."
      },
      {
        "step": 4,
        "title": "컴파일 및 다운로드",
        "description": "컴파일을 클릭하면 계층화된 결과 PDF를 처리하고 다운로드할 수 있습니다."
      }
    ],
    "useCases": [
      {
        "title": "기업 레터헤드",
        "description": "표준 회사 레터헤드 템플릿 위에 송장 내용을 추가합니다.",
        "icon": "file-text"
      },
      {
        "title": "워터마크 및 씰",
        "description": "문서 전체에 보안 스탬프, 서명 도장 또는 배경을 오버레이합니다.",
        "icon": "shield"
      },
      {
        "title": "청사진 그리기",
        "description": "초안 아키텍처 또는 레이아웃 그리드를 텍스트 블록 아래에 결합합니다.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "오버레이와 언더레이의 차이점은 무엇인가요?",
        "answer": "오버레이는 기본 콘텐츠 위에 보조 레이어를 배치합니다. 언더레이는 맨 아래에 배치하여 배경 템플릿 역할을 합니다."
      },
      {
        "question": "오버레이 레이어를 반복할 수 있나요?",
        "answer": "예, 레이어 PDF가 기본 문서보다 짧은 경우 루프를 활성화하면 모든 기본 페이지를 포함하도록 순환(예: 페이지 1, 2, 1, 2)됩니다."
      },
      {
        "question": "페이지 범위가 지원되나요?",
        "answer": "예, \"1-5\", \"홀수\", \"짝수\" 또는 쉼표로 구분된 목록과 같은 범위 구문을 사용하여 특정 페이지를 타겟팅할 수 있습니다."
      }
    ]
  },
  "timestamp-pdf": {
    "title": "PDF 로컬 타임스탬프",
    "metaDescription": "이 도구는 기기 시계로 자체 서명된 로컬 타임스탬프를 만듭니다. 선택한 TSA에 타임스탬프를 요청하거나 검증하지 않습니다.",
    "keywords": [
      "PDF 로컬 타임스탬프",
      "PDF",
      "기기 시간"
    ],
    "description": "<p>로컬 타임스탬프를 추가할 PDF를 선택하세요.</p><p>이 도구는 기기 시계로 자체 서명된 로컬 타임스탬프를 만듭니다. 선택한 TSA에 타임스탬프를 요청하거나 검증하지 않습니다.</p><p>처리는 브라우저에서 이루어지며 문서나 해시를 TSA에 보내지 않습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "로컬 타임스탬프를 추가할 PDF를 선택하세요."
      },
      {
        "step": 2,
        "title": "선택한 기관 이름",
        "description": "로컬 서명의 이름을 선택하세요. 이 이름으로 TSA에 연결하지 않습니다."
      },
      {
        "step": 3,
        "title": "로컬 타임스탬프 추가",
        "description": "파일을 처리하고 결과를 확인한 다음 PDF를 다운로드하세요."
      }
    ],
    "useCases": [
      {
        "title": "작업 초안",
        "description": "로컬 날짜가 표시된 작업 문서 사본을 보관하세요.",
        "icon": "file-text"
      },
      {
        "title": "개인 보관함",
        "description": "개인 참고용으로 타임스탬프가 있는 사본을 저장하세요.",
        "icon": "archive"
      },
      {
        "title": "서명 확인",
        "description": "PDF 리더에서 생성된 서명과 메타데이터를 확인하세요.",
        "icon": "search"
      }
    ],
    "faq": [
      {
        "question": "타임스탬프가 독립적으로 검증되나요?",
        "answer": "이 도구는 기기 시계로 자체 서명된 로컬 타임스탬프를 만듭니다. 선택한 TSA에 타임스탬프를 요청하거나 검증하지 않습니다."
      },
      {
        "question": "디지털 인증서를 업로드해야 하나요?",
        "answer": "아니요. 이 작업을 위한 로컬 자체 서명 인증서를 생성합니다."
      },
      {
        "question": "시간은 어떤 시계에서 가져오나요?",
        "answer": "시간은 기기 시계에서 가져오며 독립적으로 검증하지 않습니다."
      }
    ]
  },
  "add-page-labels": {
    "title": "페이지 레이블 추가",
    "metaDescription": "PDF에 사용자 정의 페이지 레이블(예: 서문은 I, II, 본문은 1, 2)을 구성하여 문서 탐색을 향상시킵니다.",
    "keywords": [
      "페이지 레이블",
      "pdf 레이블링",
      "논리 페이지 번호"
    ],
    "description": "<p>페이지 레이블 추가를 사용하면 사용자 정의 페이지 레이블 지정 메타데이터(/PageLabels)를 PDF의 루트 카탈로그 사전에 삽입할 수 있습니다. 이를 통해 전문 PDF 리더 탐색 사이드바 및 상위 페이지 번호 점프 패널에 표시되는 레이블을 사용자 정의합니다(예: 머리말에 로마 숫자 사용, 본문에 소수 순서 사용, 기술 하위 섹션에 A-0, A-1과 같은 사용자 정의 접두어 사용).</p>\n      <p>여러 맞춤 규칙을 원활하게 결합할 수 있도록 지원합니다. 결정적으로, 우리는 고도로 최적화된 <strong>분리 범위 분할 알고리즘</strong>을 구축했습니다. 복잡한 교대 패턴(예: 홀수 페이지 스타일 A, 짝수 페이지 스타일 B)을 선언하더라도 이 도구는 매핑되지 않은 페이지에 형식을 유출하지 않고 적절한 표준 호환 디스플레이를 보장하기 위해 경계를 우아하게 분석하고 구성합니다.</p>\n      <p>모든 작업은 전적으로 로컬 브라우저 샌드박스 내에서 처리되므로 절대적인 데이터 개인정보 보호가 보장됩니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 문서 업로드",
        "description": "라벨을 붙이고 싶은 대상 PDF 문서를 제공하세요."
      },
      {
        "step": 2,
        "title": "라벨링 규칙 구성",
        "description": "페이지 범위(예: '1-5', '홀수' 또는 쉼표로 구분된 목록), 접두사, 스타일 및 시작 순서를 지정하는 하나 이상의 규칙을 추가합니다."
      },
      {
        "step": 3,
        "title": "미리보기 및 다운로드",
        "description": "아래의 라이브 페이지 라벨 목록 미리보기를 검토한 후 업데이트된 PDF 문서를 컴파일하고 다운로드하세요."
      }
    ],
    "useCases": [
      {
        "title": "학술논문양식",
        "description": "서문에는 소문자 로마 숫자(i, ii, iii)를 설정하고 주요 장에는 소수점으로 전환합니다.",
        "icon": "book"
      },
      {
        "title": "엔지니어링 청사진 접두사",
        "description": "하위 시스템 약어(예: \"A-1\", \"M-5\")를 페이지 레이블 접두사로 첨부하여 팀이 몇 초 만에 페이지를 검색하고 찾을 수 있도록 합니다.",
        "icon": "layout"
      },
      {
        "title": "사용자 정의 대체 레이아웃",
        "description": "홀수/짝수 시퀀스 또는 비연속 섹션에 매우 구체적인 페이지 범위 인덱싱을 최대한 자유롭게 적용합니다.",
        "icon": "shuffle"
      }
    ],
    "faq": [
      {
        "question": "페이지 라벨과 페이지 번호란 무엇인가요?",
        "answer": "일반적인 페이지 번호는 종이 캔버스에 직접 렌더링된 시각적 텍스트 블록입니다(인쇄 시 표시됨). 그러나 페이지 레이블은 PDF 카탈로그에 삽입된 구조적 메타데이터입니다. Adobe Acrobat 또는 Apple Preview와 같은 소프트웨어 내부의 페이지 조회 상자와 축소판 아래에 표시되는 내용을 제어합니다."
      },
      {
        "question": "페이지 범위를 비워두면 어떻게 되나요?",
        "answer": "페이지 범위를 비워두면 규칙이 문서의 모든 페이지에 전체적으로 적용됩니다."
      },
      {
        "question": "중복되는 규칙은 어떻게 처리되나요?",
        "answer": "규칙은 나열된 순서대로 순차적으로 평가됩니다. 이후 규칙의 페이지 범위가 이전 규칙과 겹치는 경우 이후 규칙이 우선순위를 가지며 해당 페이지의 라벨을 재정의합니다."
      }
    ]
  },
  "ai-pdf-reflower": {
    "title": "AI PDF 모바일 재배열",
    "metaDescription": "모바일에서 더 쉽게 읽을 수 있도록 PDF 텍스트를 리플로우합니다. 추출된 콘텐츠를 브라우저에서 Markdown 또는 EPUB로 내보냅니다.",
    "keywords": [
      "pdf 리플로우",
      "반응형 pdf",
      "pdf 마크다운 변환",
      "epub 내보내기"
    ],
    "description": "<p>AI PDF Layout Reflower는 모바일 장치에서 PDF 문서를 읽을 수 있는 최고의 동반자입니다. 기존 PDF는 고정 레이아웃을 사용하므로 스마트폰이나 태블릿에서 끝없는 확대/축소와 가로 스크롤이 필요한 경우가 많아 지루한 읽기 환경을 초래하는 경우가 많습니다.</p>\n      <p>이 도구는 PDF 페이지의 텍스트 흐름, 줄 간격, 물리적 좌표를 지능적으로 분석하여 의미 있는 단락과 제목 계층을 재구성합니다. 다중 열 또는 이중 열 문서의 경우 열 흐름을 단일 반응형 흐름으로 지능적으로 병합하여 원활한 읽기를 보장합니다.</p>\n      <p>또한 LaTeX/MathJax로 수학 공식 렌더링을 지원하고 다양한 독서 테마(세피아, 어두움, 눈 보호 녹색)를 제공합니다. 클릭 한 번으로 리플로우된 레이아웃을 Markdown이나 표준 EPUB eBook으로 내보낼 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "PDF 파일을 끌어서 놓거나 클릭하여 찾아보고 선택하세요."
      },
      {
        "step": 2,
        "title": "독서 테마 선택",
        "description": "오른쪽의 3D 모바일 시뮬레이터에서 원하는 글꼴 크기와 테마 색상을 선택하세요."
      },
      {
        "step": 3,
        "title": "문서 내보내기",
        "description": "만족스러우면 물리적 당김줄을 사용하여 문서를 Markdown 또는 EPUB로 내보냅니다."
      }
    ],
    "useCases": [
      {
        "title": "모바일 문학읽기",
        "description": "지속적인 확대/축소 없이 휴대폰에서 학술 논문 및 연구 보고서를 원활하게 읽으세요.",
        "icon": "smartphone"
      },
      {
        "title": "전자책 전환",
        "description": "텍스트가 많은 PDF를 EPUB 파일로 변환하고 Kindle 또는 기타 eBook 리더로 가져옵니다.",
        "icon": "book"
      },
      {
        "title": "노트 아카이브",
        "description": "개인 지식 기반을 위해 구조화된 PDF 콘텐츠를 깨끗한 Markdown 파일로 직접 변환합니다.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "이중 열 PDF를 올바르게 처리합니까?",
        "answer": "예, 레이아웃 리플라워는 텍스트 블록의 수평 좌표를 감지하고 왼쪽 및 오른쪽 열을 순차적으로 구조화하여 줄 인터리빙을 방지합니다."
      },
      {
        "question": "이미지와 수학 공식이 손실되나요?",
        "answer": "깔끔한 웹 렌더링을 위해 수학 공식이 LaTeX/MathJax 구문으로 변환되고 이미지는 해당 의미 위치에 보존됩니다."
      },
      {
        "question": "클라우드에서 변환이 이루어지나요?",
        "answer": "아니요. 문서의 절대적인 개인정보 보호를 보장하기 위해 모든 레이아웃 분석 및 형식 패키징은 브라우저에서 로컬로 수행됩니다."
      }
    ]
  },
  "citation-linker": {
    "title": "인용 링크 활성화 도구",
    "metaDescription": "PDF의 인용 표시를 클릭 가능한 DOI 링크 또는 페이지 참조로 전환합니다. 연구 문서에 유용한 탐색 기능을 추가하세요.",
    "keywords": [
      "인용구 활성화",
      "pdf 하이퍼링크",
      "doi 매칭",
      "논문 도구"
    ],
    "description": "<p>인용 링커는 학술 연구자를 위해 특별히 설계되었습니다. 많은 PDF 논문에서 인용 표시(예: [1], [2])는 일반 텍스트이므로 독자가 문서 끝에 있는 참조 목록을 앞뒤로 스크롤해야 하므로 집중이 방해됩니다.</p>\n      <p>이 도구는 PDF 텍스트를 로컬에서 읽고, 패턴 인식을 사용하여 인용 표시를 해당 참조 항목과 일치시키고, DOI 조회 또는 페이지 점프 좌표를 사용하여 클릭 가능한 PDF 링크 주석을 오버레이합니다.</p>\n      <p>또한 문서의 참조 네트워크를 시각적으로 탐색할 수 있는 대화형 인용 관계 지도를 생성합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "학술 PDF 업로드",
        "description": "참고문헌/참고 섹션이 포함된 PDF 문서 또는 논문을 업로드하세요."
      },
      {
        "step": 2,
        "title": "인용 검토",
        "description": "대화형 지도에서 인용 쌍을 검사하고 필요한 경우 DOI 링크를 수동으로 편집하거나 추가합니다."
      },
      {
        "step": 3,
        "title": "링크 삽입",
        "description": "PDF에 하이퍼링크를 오버레이하고 업데이트된 문서를 다운로드하려면 활성화 버튼을 클릭하세요."
      }
    ],
    "useCases": [
      {
        "title": "심층문학읽기",
        "description": "인용 표시를 클릭하면 참조 세부 정보를 즉시 확인하거나 외부 DOI 페이지로 이동할 수 있습니다.",
        "icon": "link"
      },
      {
        "title": "출판 전 준비",
        "description": "귀하가 작성한 학술 논문이 최종 제출 전에 완전히 활성화된 하이퍼링크 탐색 기능을 갖추고 있는지 확인하세요.",
        "icon": "award"
      },
      {
        "title": "참고지도 분석",
        "description": "대화형 네트워크 토폴로지 맵을 통해 문헌 계층 및 연결을 이해합니다.",
        "icon": "git-network"
      }
    ],
    "faq": [
      {
        "question": "참고문헌에 DOI가 없으면 어떻게 되나요?",
        "answer": "DOI를 찾을 수 없는 경우 도구는 내부 \"페이지로 이동\" 동작으로 대체되어 마커를 클릭하고 참조 페이지로 직접 이동할 수 있습니다."
      },
      {
        "question": "어떤 인용 형식이 지원되나요?",
        "answer": "일반적인 숫자 괄호(예: [1], [1-3])와 저자 연도 인용(예: Author et al., 202X)을 지원합니다."
      },
      {
        "question": "내 PDF의 모양이 변경되나요?",
        "answer": "아니요, 텍스트 위에 보이지 않는 링크 주석을 삽입하여 문서의 원래 레이아웃, 글꼴 및 스타일을 유지합니다."
      }
    ]
  },
  "vector-extractor": {
    "title": "PDF 벡터 그래픽 추출기",
    "metaDescription": "PDF 페이지에서 벡터 그래픽을 SVG로 추출합니다. 다시 칠하고 내보낼 차트, 다이어그램, 로고를 선택하세요.",
    "keywords": [
      "pdf 벡터 추출",
      "svg 내보내기",
      "차트 추출",
      "일러스트 추출"
    ],
    "description": "<p>PDF 벡터 추출기는 PDF 파일에 포함된 벡터 경로와 아트웍을 잠금 해제합니다. 디자인 작업이나 인쇄를 위해 문서에서 벡터 차트, 다이어그램, 로고를 쉽게 추출할 수 있습니다.</p>\n      <p>내부적으로는 고품질 SVG 렌더링을 활용하여 정밀도 손실 없이 PDF 벡터 경로를 깔끔한 표준 SVG 요소 트리로 분해합니다.</p>\n      <p>인터페이스는 Z축 3D 레이어 폭발 효과로 호버 요소를 강조 표시하고 디자이너가 벡터 노드를 조정하고 추출할 수 있는 색상 선택 패널을 갖추고 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 문서 업로드",
        "description": "벡터 자산, 다이어그램, 차트 또는 로고가 포함된 PDF를 업로드하세요."
      },
      {
        "step": 2,
        "title": "요소 선택",
        "description": "벡터 캔버스 위에 마우스를 올려 요소를 강조 표시한 다음 클릭하여 노드를 선택하세요."
      },
      {
        "step": 3,
        "title": "사용자 정의 및 내보내기",
        "description": "패널에서 경로 속성을 조정한 다음 SVG로 다운로드하거나 SVG 소스 코드를 복사하세요."
      }
    ],
    "useCases": [
      {
        "title": "디자인 자산 추출",
        "description": "브랜드 가이드라인이나 브로셔에서 회사 로고, 아이콘, 일러스트레이션을 빠르게 추출합니다.",
        "icon": "bezier"
      },
      {
        "title": "과학 차트 내보내기",
        "description": "연구 논문에서 벡터 차트를 추출하여 고해상도 인쇄 또는 프리젠테이션에 사용할 수 있습니다.",
        "icon": "presentation"
      },
      {
        "title": "벡터 자산 다시 칠하기",
        "description": "웹 프로젝트용으로 저장하기 전에 추출된 자산의 획 및 채우기 색상을 수정하세요.",
        "icon": "crown"
      }
    ],
    "faq": [
      {
        "question": "왜 특정 이미지를 선택할 수 없나요?",
        "answer": "PDF에는 래스터 이미지(예: 사진 또는 스캔한 페이지)와 벡터 아트워크(예: 모양 및 곡선)가 모두 포함되어 있습니다. 벡터 경로만 SVG 경로로 분해될 수 있습니다."
      },
      {
        "question": "출력 SVG에 스타일이 포함되어 있나요?",
        "answer": "예, 내보낸 SVG는 채우기, 획, 불투명도, 그라디언트 및 좌표 변환을 포함한 모든 원본 속성을 유지합니다."
      },
      {
        "question": "대용량 파일이 지연되나요?",
        "answer": "WebAssembly 가속을 사용하지만 매우 복잡한 CAD 도면이나 수천 개의 벡터 경로가 포함된 PDF는 렌더링하는 데 몇 초가 걸릴 수 있습니다."
      }
    ]
  },
  "deep-sanitize": {
    "title": "딥 메타데이터 삭제 및 소독",
    "metaDescription": "PDF에서 메타데이터, 숨겨진 레이어 및 사용하지 않는 개체를 제거합니다. 공유하기 전에 로컬에서 문서 정보를 정리하세요.",
    "keywords": [
      "pdf 개인정보 삭제",
      "메타데이터 소독",
      "아카이브 클リーニング"
    ],
    "description": "<p>Deep Metadata Sanitizer는 메타데이터 유출 및 숨겨진 추적에 대한 궁극적인 방어책입니다. 단순히 PDF 파일에 보이는 텍스트 위에 검은색 상자를 그리는 것만으로는 상업적 비밀을 보호하기에 충분하지 않습니다.</p>\n      <p>이 도구는 PDF 바이너리 구조를 스캔하여 작성자 정보, 작성자 소프트웨어, 편집 로그(XMP 메타데이터), 독점적인 PieceInfo 캐시 및 OCG 선택적 콘텐츠 그룹(보통 보이지 않는 워터마크에 사용됨)을 완전히 삭제합니다.</p>\n      <p>또한 교차 참조 테이블(xref)을 완전히 다시 작성하여 삭제되거나 수정된 기록 데이터를 복원할 수 없도록 모든 증분 업데이트 블록을 삭제합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "민감한 데이터나 수정 내역이 포함된 PDF 파일을 선택하세요."
      },
      {
        "step": 2,
        "title": "스캐너 실행",
        "description": "3D 격리 스캐너를 작동하여 파일에 숨겨진 메타데이터 및 레이어가 있는지 확인하세요."
      },
      {
        "step": 3,
        "title": "철저한 소독",
        "description": "추적 요소를 제거하고 완전히 깨끗한 PDF를 다운로드하려면 삭제를 클릭하세요."
      }
    ],
    "useCases": [
      {
        "title": "계약 공유",
        "description": "비즈니스 계약을 제3자와 공유하기 전에 초안 기록, 경로 및 이전 수정 사항을 제거하세요.",
        "icon": "file-signature"
      },
      {
        "title": "익명 게시",
        "description": "보이지 않는 주석과 워터마크를 지워 문서를 익명으로 안전하게 게시하세요.",
        "icon": "eye-off"
      },
      {
        "title": "PDF 최적화",
        "description": "파일이 웹에서 더 빠르게 로드되도록 하려면 분리된 개체와 쓰레기 데이터 스트림을 제거하세요.",
        "icon": "zap"
      }
    ],
    "faq": [
      {
        "question": "이는 표준 메타데이터 제거와 어떻게 다릅니까?",
        "answer": "표준 도구는 제목이나 저자와 같은 기본 필드만 지웁니다. Deep Sanitizer는 전체 PDF 외부 참조 테이블을 재구성하여 PieceInfo, 숨겨진 워터마크 및 기록 증분 개정판을 삭제합니다."
      },
      {
        "question": "문서 레이아웃이나 텍스트에 영향을 미치나요?",
        "answer": "아니요, 숨겨진 설명 스트림과 구조 데이터만 제거합니다. 표시되는 레이아웃, 텍스트 및 그래픽은 변경되지 않습니다."
      },
      {
        "question": "이렇게 하면 PDF 비밀번호가 제거되나요?",
        "answer": "아니요, PDF가 암호화된 경우 철저한 삭제를 수행하기 전에 먼저 잠금을 해제해야 합니다."
      }
    ]
  },
  "booklet-folding-simulator": {
    "title": "3D 소책자 접지 시뮬레이터",
    "metaDescription": "소책자 인쇄를 위해 PDF 페이지를 정렬합니다. 인쇄용 문서를 내보내기 전에 접힌 시트와 중철 레이아웃을 미리 보세요.",
    "keywords": [
      "3d 임포지션",
      "종이 접기 시뮬레이션",
      "중철 제본",
      "출판 인쇄"
    ],
    "description": "<p>3D 소책자 및 접기 시뮬레이터는 인쇄 디자이너와 출판 전문가를 위해 설계된 고급 도구입니다. 기존의 책 레이아웃에는 복잡한 페이지 오버레이 계산과 페이지 매김 순서 정립이 필요합니다. 이 도구는 전체 프로세스를 시각화하고 자동화합니다.</p>\n      <p>내부적으로는 Google의 맞춤 정판 알고리즘이 순차 PDF 페이지 목록을 표준 인쇄 시트 레이아웃(예: 4페이지 반 접기, 8페이지 중철 또는 아코디언 접기)으로 매핑하여 대형 실제 시트의 앞면과 뒷면에 페이지를 병합합니다.</p>\n      <p>프런트엔드에서는 순수한 CSS 3D 매트릭스 변환과 스프링 질량 물리 곡선을 활용하여 수평 및 수직으로 시트를 접는 애니메이션을 구현하고 WOW 요소가 높은 물리적인 바인딩 미리보기를 제공합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "인쇄할 레이아웃을 원하는 PDF 문서를 끌어다 놓습니다."
      },
      {
        "step": 2,
        "title": "접는 레이아웃 선택",
        "description": "선호하는 정판 구성표(예: 4페이지 접기, 8페이지 중철, 4페이지 아코디언)를 선택하세요."
      },
      {
        "step": 3,
        "title": "대화형 3D 미리보기",
        "description": "슬라이더를 드래그하여 시트 접힘을 3D로 관찰하고 최종 페이지 번호 매기기 레이아웃을 검사하세요."
      },
      {
        "step": 4,
        "title": "임포징된 PDF 생성",
        "description": "양면 인쇄가 가능한 재정렬 및 병합된 실제 시트 PDF를 다운로드하려면 생성을 클릭하세요."
      }
    ],
    "useCases": [
      {
        "title": "브로셔 프로토타이핑",
        "description": "인쇄 후 페이지가 뒤집히는 것을 방지하기 위해 세 접기 및 팜플렛의 접는 순서를 미리 시각화합니다.",
        "icon": "book-open"
      },
      {
        "title": "책 중철 만들기",
        "description": "여러 페이지로 구성된 잡지나 소책자용 인쇄 시트를 자동으로 생성합니다.",
        "icon": "layers"
      },
      {
        "title": "인쇄소 시각 자료",
        "description": "고객이 인쇄 시트에서 페이지가 물리적으로 어떻게 배포되고 접혀 있는지 시각화할 수 있도록 도와주세요.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "'임포지션'이란 무엇인가요?",
        "answer": "정판은 프리프레스 인쇄의 기본 단계입니다. 상업용 인쇄기는 큰 용지에 인쇄하기 때문에 페이지가 순서 없이 배열되어 인쇄되고, 접히고, 제본되면 페이지가 올바른 순서대로 나타납니다. 이 도구는 해당 레이아웃을 자동으로 계산합니다."
      },
      {
        "question": "3D 미리보기가 내 PDF 콘텐츠를 변경합니까?",
        "answer": "아니요, 원본 PDF 콘텐츠는 단지 3D 시트에 텍스처 매핑으로 렌더링됩니다. 생성된 PDF는 페이지 순서와 배치만 조정합니다. 텍스트와 그래픽 품질은 그대로 유지됩니다."
      },
      {
        "question": "내 PDF 페이지 수가 4 또는 8의 배수가 아니면 어떻게 되나요?",
        "answer": "최적화 프로그램은 선택한 접기 레이아웃의 수학적 페이지 수 요구 사항을 충족하기 위해 끝에 빈 페이지를 자동으로 추가합니다."
      }
    ]
  },
  "pdf-to-slide": {
    "title": "PDF에서 슬라이드로",
    "metaDescription": "PDF 콘텐츠를 PowerPoint 슬라이드로 변환합니다. 추가 편집을 위해 텍스트와 이미지가 포함된 PPTX 프레젠테이션을 내보냅니다.",
    "keywords": [
      "pdf ppt 변환",
      "슬라이드 재구성",
      "도표 추출",
      "pptx 빌더"
    ],
    "description": "<p>AI PDF-to-Slide Reconstructor는 정적 PDF 문서에 새로운 생명을 불어넣고 이를 고도로 사용자 정의 가능한 최신 PowerPoint 슬라이드(PPTX)로 변환합니다.</p>\n      <p>이 도구는 문서 제목 수준, 단락 줄, 글꼴 두께를 자동으로 분석하여 논리적인 슬라이드 프레임워크를 구축하는 고급 레이아웃 개요 추출기를 사용합니다. 또한 벡터 차트와 고해상도 테이블을 분리하고 배경 아티팩트를 제거하여 독립적인 편집 가능한 자산으로 깔끔하게 삽입합니다.</p>\n      <p>모든 PPTX 출력은 표준 Office Open XML 요소를 사용하여 작성됩니다. 즉, 모든 텍스트는 완전히 편집 가능한 상태로 유지되고 벡터는 해상도를 잃지 않습니다. 프런트엔드는 흥미로운 방식으로 재구성을 시각화하는 유동적인 '스타필드' 카드 전환 애니메이션을 보여줍니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "학술/비즈니스 PDF 업로드",
        "description": "구조화된 섹션과 다이어그램이 포함된 PDF 문서를 업로드하세요."
      },
      {
        "step": 2,
        "title": "슬라이드 개요 분석",
        "description": "추출된 슬라이드 구조를 검사하고, 제목을 조정하거나, 불필요한 카드 블록을 삭제하세요."
      },
      {
        "step": 3,
        "title": "PPTX로 재구성",
        "description": "편집 가능한 표준 프리젠테이션 파일을 받으려면 컴파일 엔진을 시작하세요."
      }
    ],
    "useCases": [
      {
        "title": "연구 논문 발표",
        "description": "학술 저널 PDF, 텍스트 구조 및 벡터 다이어그램을 대화에 사용할 수 있는 슬라이드 데크로 변환합니다.",
        "icon": "graduation-cap"
      },
      {
        "title": "사업보고서 요약",
        "description": "방대한 연간 기업 보고서를 즉시 명확하고 글머리 기호가 있는 프레젠테이션 초안으로 정제합니다.",
        "icon": "presentation"
      },
      {
        "title": "다중 장치 데모",
        "description": "스크린샷을 수동으로 복사하지 마세요. 단 몇 초 만에 깨끗하고 완전히 편집 가능한 레이아웃 프레임워크를 얻을 수 있습니다.",
        "icon": "laptop"
      }
    ],
    "faq": [
      {
        "question": "Microsoft Office에서 슬라이드를 편집할 수 있나요?",
        "answer": "네. 파일은 공식 OOXML(Office Open XML) 사양에 따라 메모리에 기본적으로 생성됩니다. 텍스트, 표 및 자리 표시자는 PowerPoint, Keynote 및 WPS에서 완전히 대화형입니다."
      },
      {
        "question": "차트는 어떻게 추출되나요?",
        "answer": "엔진은 PDF에서 벡터 경로와 래스터 레이어를 스캔하고, 그래프를 나타내는 경계 영역을 감지하고, 이를 독립형 SVG 노드 또는 높은 DPI 이미지로 잘라냅니다."
      },
      {
        "question": "스캔한 문서에도 작동하나요?",
        "answer": "실제 텍스트 레이어가 없는 스캔한 PDF의 경우 파일을 Slide Reconstructor에 전달하기 전에 먼저 OCR 도구를 실행하는 것이 좋습니다."
      }
    ]
  },
  "eink-optimizer": {
    "title": "e-Ink 전자잉크 리더 최적화",
    "metaDescription": "e-ink 리더에 맞게 PDF 페이지를 최적화합니다. 읽기 쉽게 배경을 정리하고 텍스트 대비를 높이며 문서를 조정하세요.",
    "keywords": [
      "전자잉크 최적화",
      "이진화 노يز 제거",
      "글씨 굵게",
      "북리더 가독성"
    ],
    "description": "<p>e-Ink Reader Optimizer는 Kindle, Onyx Boox, Kobo 또는 기타 전자종이 장치를 사용하는 e-Reader 매니아를 위해 맞춤 제작된 필수 도구입니다.</p>\n      <p>스캔된 PDF 전자책 중 다수는 e-Ink 화면에서 볼 때 희미한 글자, 흐릿한 회색 배경, 노이즈 또는 스캔 그림자로 인해 어려움을 겪습니다. 이 도구는 회색 값 히스토그램을 분석하고 Otsu의 이진화 임계값을 적용하여 텍스트를 배경에서 분리하여 회색 배경을 깨끗한 흰색으로 변환합니다.</p>\n      <p>또한 형태적 확장을 통합하여 얇고 빛 바랜 문자를 굵고 두껍게 만들어 선명한 고대비 타이포그래피를 제공합니다. 관성 감쇠 대비 슬라이더를 사용하면 종이와 같은 대비를 실시간으로 미세 조정할 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "스캔한 PDF 업로드",
        "description": "텍스트가 희미하거나 배경이 회색인 전자책이나 스캔한 문서를 업로드하세요."
      },
      {
        "step": 2,
        "title": "대비 슬라이더 조정",
        "description": "감쇠 슬라이더를 드래그하여 실시간으로 배경 제거와 문자 굵게 표시의 균형을 맞춥니다."
      },
      {
        "step": 3,
        "title": "최적화 및 다운로드",
        "description": "전체 PDF를 처리하여 e-Ink에 맞춰 눈에 편안한 고대비 문서를 생성합니다."
      }
    ],
    "useCases": [
      {
        "title": "고대 원고 복원",
        "description": "역사서나 손으로 쓴 원고의 스캔본에서 빛바랜 텍스트를 두껍게 만들어 읽을 수 있도록 합니다.",
        "icon": "scroll"
      },
      {
        "title": "시험지 정리",
        "description": "사진 복사 또는 촬영된 시험에서 배경 그림자를 표백하여 흰색 종이에 깨끗한 검정색 텍스트를 반환합니다.",
        "icon": "file-text"
      },
      {
        "title": "전자종이 디바이스 테일러링",
        "description": "컬러 PDF를 최적화된 회색조로 변환하여 흑백 화면에서 지저분하고 디더링 현상이 발생하는 것을 방지합니다.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "\"문자 볼드체\"는 어떻게 작동하나요?",
        "answer": "이미지 처리에서는 이를 팽창이라고 합니다. 구조화 행렬을 사용하여 문자 여백을 픽셀 단위로 확장하고 희미한 획을 물리적으로 두껍게 하여 읽기 쉽게 만듭니다."
      },
      {
        "question": "이 프로세스로 인해 파일 크기가 커지나요?",
        "answer": "정반대죠. 복잡한 컬러/회색조 이미지를 단순한 흑백 레이아웃으로 이진화함으로써 표준 압축(예: CCITT Group 4)을 통해 PDF 파일 크기를 크게 줄일 수 있습니다."
      },
      {
        "question": "기본 텍스트 PDF를 지원합니까?",
        "answer": "네. 기본 벡터 PDF는 백그라운드에서 고해상도로 래스터화되고, 최적화되고, 다시 컴파일되어 통일된 고대비 판독을 보장합니다."
      }
    ]
  },
  "cert-cryptor": {
    "title": "인증서 암호화 및 서명",
    "metaDescription": "인증서를 사용하여 PDF 문서를 암호화하고 디지털 서명합니다. 브라우저에서 로컬로 인증서 파일을 사용하세요.",
    "keywords": [
      "인증서 암호화",
      "왁스 씰 서명",
      "디지털 서명",
      "비대칭 암호화"
    ],
    "description": "<p>3D Wax-Seal & Certificate Cryptor는 민감한 기업 파일, 학위 또는 계약서에 대해 군용 등급의 보안과 프리미엄 물리적 등급의 미학을 제공합니다.</p>\n      <p>기술적으로 비대칭 공개 키 암호화를 제공합니다. 수신자의 공개 키 인증서(.cer/.crt)를 가져와서 PDF 스트림을 잠급니다. 일치하는 개인 키(.pfx)를 보유한 사람만이 암호를 해독할 수 있습니다. 또한 문서 변조 방지 무결성을 보장하기 위해 표준 PKCS#7 디지털 서명을 생성합니다.</p>\n      <p>시각적으로 3D 실제 금색 또는 빨간색 왁스 도장 스탬프가 특징입니다. 서명하면 아름답게 렌더링된 우표가 만족스러운 기계 소리와 함께 내려오고, 빛나는 암호화 트랙으로 둘러싸인 페이지에 사실적인 노멀 매핑된 높이 변화와 왁스 유출이 포함된 3D 왁스 도장이 남습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 및 인증서 업로드",
        "description": "PDF를 추가하고 서명 인증서(.pfx) 또는 수신자의 공개 인증서(.cer)를 가져옵니다."
      },
      {
        "step": 2,
        "title": "3D 스탬프 배치",
        "description": "문서 미리보기에서 인장을 드래그하여 찾은 후 왁스 스타일(예: 금색, 진홍색)을 선택하세요."
      },
      {
        "step": 3,
        "title": "누르고 서명하세요",
        "description": "실행을 클릭하면 실제 등급의 디지털 서명이 생성되는 3D 왁스 도장 각인식을 볼 수 있습니다."
      },
      {
        "step": 4,
        "title": "보안 PDF 다운로드",
        "description": "이제 암호화되어 잠기고 스탬프가 찍힌 출력 문서를 저장합니다."
      }
    ],
    "useCases": [
      {
        "title": "졸업장 및 수료증",
        "description": "정품 디지털 서명으로 뒷받침되는 높은 가치의 3D 왁스 인감 배지를 디지털 졸업장 및 상장에 부착하세요.",
        "icon": "award"
      },
      {
        "title": "기밀 계약",
        "description": "안전한 물리적 키카드만 잠금 해제할 수 있도록 클라이언트의 공개 인증서를 사용하여 민감한 계약을 잠급니다.",
        "icon": "shield-alert"
      },
      {
        "title": "공식 보도자료",
        "description": "공개 공지에 디지털 서명을 하여 악의적인 텍스트 편집이나 스푸핑을 방지하세요.",
        "icon": "stamp"
      }
    ],
    "faq": [
      {
        "question": "왁스 도장은 이미지인가요 아니면 실제 서명인가요?",
        "answer": "둘 다. 이 시스템은 노멀 매핑된 깊이(시각적 레이어)로 믿을 수 없을 정도로 사실적인 3D 왁스 임프린트를 렌더링하고 PDF(데이터 레이어) 내부에 변조 방지 인증 PKCS#7 암호화 서명을 인코딩합니다."
      },
      {
        "question": "\"인증서 기반 암호화\"란?",
        "answer": "비밀번호 없는 암호화 기술입니다. 수신자의 공개 키를 사용하여 파일을 암호화합니다. 리더는 자동으로 로컬 개인 인증서를 검색하여 파일을 원활하게 해독하여 강력한 보안을 보장합니다."
      },
      {
        "question": "스탬프 디자인을 맞춤 설정할 수 있나요?",
        "answer": "네. 우리는 AwsomePDF 워터마크나 왕실 문장과 같은 다양한 디자인을 제공하며 패널에서 왁스 녹는 반경과 일반 맵 들여쓰기 깊이를 조정할 수 있습니다."
      }
    ]
  },
  "passport-id-composer": {
    "title": "신분증 양면 합성",
    "metaDescription": "신분증이나 여권의 앞면과 뒷면을 A4 PDF 한 장에 합칩니다. 스캔을 정렬하고 선택적 워터마크를 추가합니다.",
    "keywords": [
      "신분증 사본",
      "앞뒷면 합성",
      "A4 인쇄 정렬",
      "신분증 도용 방지"
    ],
    "description": "<p>Passport & ID 양면 작성기는 일반 비즈니스 및 개인 작업에 매우 유용한 생산성 유틸리티입니다.</p>\n      <p>은행 계좌 신청, 온보딩 또는 계약 체결 시 신분증 양면 사본이 필요한 경우가 많습니다. 이 도구는 앞/뒤 이미지 또는 PDF 페이지를 수용하여 국가 표준 레이아웃 해상도에 따라 단일 A4 페이지에 정확하게 배열합니다.</p>\n      <p>또한, 무단 문서 재사용을 방지하기 위해 겹치는 반투명 위조 방지 워터마크(예: '온보딩 전용')를 맞춤설정할 수 있습니다. 3D 글로우 레이저 스윕 복사기 스캐너 도어 시각 효과를 통해 프리미엄 피드백을 제공합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "ID 파일 업로드",
        "description": "신분증이나 여권의 앞면과 뒷면 사진/스캔본을 업로드하세요(최대 2개 파일)."
      },
      {
        "step": 2,
        "title": "보안 워터마크 구성",
        "description": "무단 문서 복제를 제한하기 위해 맞춤 텍스트 오버레이를 입력하세요."
      },
      {
        "step": 3,
        "title": "작성 및 다운로드",
        "description": "단일 페이지 인쇄용 A4 PDF를 생성하려면 실행을 클릭하세요."
      }
    ],
    "useCases": [
      {
        "title": "HR 온보딩 제출",
        "description": "직원 ID 사본을 신속하게 정렬하고 보호용 워터마크를 적용합니다.",
        "icon": "user"
      },
      {
        "title": "정부 및 은행 서비스",
        "description": "물리적 보관 요건을 충족하는 표준화된 신분증 인쇄를 준비합니다.",
        "icon": "landmark"
      },
      {
        "title": "여행 백업",
        "description": "여권 페이지와 비자 세부정보를 A4 용지에 정리합니다.",
        "icon": "plane"
      }
    ],
    "faq": [
      {
        "question": "워터마크가 신원 텍스트 세부정보를 차단합니까?",
        "answer": "아니요. 워터마크는 텍스트나 사진 필드의 가독성을 저하시키지 않고 위조를 차단하기 위해 신중하게 조정된 15% 불투명도로 렌더링됩니다."
      },
      {
        "question": "복합카드 사이즈가 정확한가요?",
        "answer": "네. A4 페이지에 완벽하게 확장된 85.6mm × 54mm의 표준 물리적 치수로 ID 카드를 렌더링합니다."
      },
      {
        "question": "운전면허도 지원되나요?",
        "answer": "예, 모든 카드 기반 신원 스캔에 완벽하게 작동합니다."
      }
    ]
  },
  "annotation-exporter": {
    "title": "주석 및 강조 내보내기",
    "metaDescription": "PDF 주석, 메모, 강조 표시 및 밑줄을 Markdown 또는 JSON으로 내보냅니다. 연구, 검토 및 조사를 위해 주석을 구성합니다.",
    "keywords": [
      "pdf 주석 추출",
      "하이라이트 수집",
      "독서 노트 생성",
      "마크다운 변환"
    ],
    "description": "<p>스마트 주석 내보내기는 PDF 주석의 가치를 최대한 활용하는 강력한 작업 공간입니다.</p>\n      <p>문헌을 검토하거나 광범위한 eBook을 읽을 때 강조표시와 스티커 메모를 많이 사용합니다. 이 도구는 하위 수준 PDF <code>/Annots</code> 사전을 역직렬화하고 모든 강조 표시, 메모, 밑줄 및 손으로 그린 잉크 마커를 추출합니다.</p>\n      <p>댓글을 해당 개요 헤더에 맞게 자동으로 정렬하여 페이지 참조 앵커가 있는 구조화된 Markdown 또는 JSON 노트북을 생성합니다. 반투명 유리 노트북 패널에 하이라이트가 아름답게 떠다니는 모습을 지켜보세요.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "주석이 달린 PDF 가져오기",
        "description": "밑줄, 하이라이트 또는 의견이 포함된 PDF 에세이나 책을 업로드하세요."
      },
      {
        "step": 2,
        "title": "필터 및 형식 구성",
        "description": "추출하려는 주석 유형을 선택하고 Markdown 또는 JSON을 선택하세요."
      },
      {
        "step": 3,
        "title": "노트 추출",
        "description": "댓글 스트림을 구문 분석하고 개요 요약을 정리하려면 실행을 클릭하세요."
      }
    ],
    "useCases": [
      {
        "title": "과학 문헌 종합",
        "description": "여러 논문의 독서 메모를 Markdown 템플릿으로 추출하여 즉시 명쾌한 리뷰를 작성합니다.",
        "icon": "graduation-cap"
      },
      {
        "title": "학습일지 작성",
        "description": "교과서에서 얻은 아름다운 통찰력과 개인적인 의견을 Obsidian 데이터베이스에 수집하세요.",
        "icon": "book"
      },
      {
        "title": "문서 공동 감사",
        "description": "여러 팀 구성원의 검토 수정 사항을 수집하고 실행 가능한 작업 목록을 수립합니다.",
        "icon": "users"
      }
    ],
    "faq": [
      {
        "question": "타블렛 손으로 그린 잉크 스트로크를 추출할 수 있나요?",
        "answer": "네. 손으로 그린 ​​표시가 표준 PDF 잉크 주석으로 저장되어 있는 한 도구는 페이지 위치를 완벽하게 분리하고 구조화할 수 있습니다."
      },
      {
        "question": "강조 표시된 일부 추출물이 비어 있는 이유는 무엇입니까?",
        "answer": "PDF가 기본 텍스트가 부족하여 검색할 수 없는 이미지 스캔인 경우 매장 좌표만 강조 표시됩니다. 먼저 PDF에서 OCR을 실행한 다음 주석을 추출하세요."
      },
      {
        "question": "Markdown 링크가 PDF로 다시 이동합니까?",
        "answer": "내보낸 파일에는 정확한 페이지 번호와 원본 개요 제목이 나열되어 상호 참조가 원활해집니다."
      }
    ]
  },
  "batch-watermark-remover": {
    "title": "워터마크 일괄 제거",
    "metaDescription": "PDF에서 일치하는 텍스트 및 이미지 워터마크를 제거합니다. 출력을 검토하여 문서 콘텐츠가 보존되는지 확인하세요.",
    "keywords": [
      "pdf 워터마크 삭제",
      "배경 로고 제거",
      "콘텐츠 스트림 편집"
    ],
    "description": "<p>Batch Watermark Remover는 문서를 물리적으로 정리하는 최첨단 PDF 삭제 도구입니다.</p>\n      <p>일반 워터마크 제거 프로그램은 일반적으로 흰색 블록을 오버레이하거나 문서 간격을 왜곡합니다. 이 도구는 강력한 <strong>콘텐츠 스트림 삭제</strong> 기술을 활용합니다.</p>\n      <p>각 페이지의 하위 수준 렌더링 연산자를 구문 분석하고 특정 워터마크 문자열 명령(예: \"기밀\", \"초안\") 또는 배경 이미지 개체를 식별하고 물리적으로 삭제하거나 덮어씁니다. 워터마크가 완전히 사라지고 원래 형식과 벡터 품질이 유지됩니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "워터마크가 있는 파일 업로드",
        "description": "상업용 로고나 보안 라벨이 표시된 PDF 문서를 제공하세요."
      },
      {
        "step": 2,
        "title": "대상 워터마크 정의",
        "description": "삭제할 정확한 문자열을 입력하거나 반투명 XObject 이미지 정리를 전환하세요."
      },
      {
        "step": 3,
        "title": "물리적 제거 실행",
        "description": "실행을 클릭하면 콘텐츠 운영자를 충실도 높게 스크러빙할 수 있습니다."
      }
    ],
    "useCases": [
      {
        "title": "기업 자산 보관",
        "description": "일반 공개 배포를 위해 만료된 \"기밀\" 또는 \"초안\" 워터마크를 제거합니다.",
        "icon": "archive"
      },
      {
        "title": "어수선한 배경 지우기",
        "description": "독자가 텍스트를 훑어보는 데 방해가 되는 무거운 배경 그림을 제거합니다.",
        "icon": "eye"
      },
      {
        "title": "문서 재사용",
        "description": "새로운 기업 템플릿을 쉽게 적용할 수 있도록 오래된 페이지 바닥글 브랜딩 요소를 정리합니다.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "삭제된 워터마크를 복구할 수 있나요?",
        "answer": "아니요. 시각적 마스크와 달리 페이지 바이너리 스트림을 다시 작성하여 연산자를 지우고 흔적을 남기지 않습니다."
      },
      {
        "question": "복잡한 그라데이션을 지원하나요?",
        "answer": "워터마크가 별도의 텍스트 노드 또는 이미지 XObject로 저장된 경우 도구는 워터마크를 분리하여 물리적으로 지울 수 있습니다."
      },
      {
        "question": "일반 페이지 텍스트도 수정되나요?",
        "answer": "아니요. 스크러빙 엔진은 지정된 워터마크 서명과 일치하는 연산자만 대상으로 합니다. 일반 텍스트는 그대로 유지됩니다."
      }
    ]
  },
  "smart-data-redactor": localizedRedactionContent('ko', 'smart-data-redactor', "민감 정보 비식별화"),
  "bookmarks-auto-generator": {
    "title": "북마크 자동 생성",
    "metaDescription": "제목과 텍스트 패턴에서 PDF 북마크를 생성합니다. 긴 문서, 매뉴얼, 보고서에 탐색 가능한 개요를 추가하세요.",
    "keywords": [
      "pdf 북마크 만들기",
      "목차 구조화",
      "자동 아웃라인"
    ],
    "description": "<p>자동 북마크 생성기는 길고 구조화되지 않은 PDF 문서에 절대적인 명확성을 제공합니다.</p>\n      <p>개요 탐색 없이 책이나 소책자를 훑어보는 것은 고통스럽습니다. 이 도구는 정규식 규칙(예: '1장', '섹션 1.1')과 함께 인쇄 계층(예: 글꼴 크기 및 두께)을 분석하여 제목을 자동으로 추론합니다.</p>\n      <p>그런 다음 이러한 제목을 컴파일하여 PDF <code>/Outline</code> 사전에 직접 삽입합니다. 그러면 모든 표준 뷰어에 대화형 3D 개요 트리 미리보기가 지원되는 아름답게 구조화된 다단계 탐색 사이드바가 표시됩니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "구조화되지 않은 PDF 제공",
        "description": "카탈로그 사이드바가 없는 대형 브로셔, 학술 논문 또는 전자책을 업로드하세요."
      },
      {
        "step": 2,
        "title": "제목 규칙 조정",
        "description": "최소 글꼴 크기 임계값 및 일치 규칙을 지정하는 전략을 구성합니다."
      },
      {
        "step": 3,
        "title": "빌드 및 주입",
        "description": "실행을 클릭하여 개요 노드를 렌더링하고 개요 책갈피를 물리적으로 작성합니다."
      }
    ],
    "useCases": [
      {
        "title": "기술 매뉴얼 정리",
        "description": "표준 지침에 대한 다단계 챕터를 자동 컴파일하여 수동 색인 생성 시간을 절약합니다.",
        "icon": "tool"
      },
      {
        "title": "논문 준비",
        "description": "정확한 학술 제출 표준과 일치하는 깔끔하게 중첩된 북마크를 삽입합니다.",
        "icon": "graduation-cap"
      },
      {
        "title": "전자책 탐색 최적화",
        "description": "스캔한 텍스트 출판물을 태블릿이나 모바일 리더가 읽을 수 있는 장으로 구성합니다.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "사용자 정의 챕터 형식과 일치할 수 있나요?",
        "answer": "네. 사이드바 패널에 사용자 정의 정규식 패턴(예: `^Part\\s+\\w+`)을 추가하여 고유한 레이아웃을 타겟팅할 수 있습니다."
      },
      {
        "question": "이것이 시각적 페이지 표시에 영향을 미치나요?",
        "answer": "아니요. 이 도구는 내부 구조 북마크 카탈로그만 추가합니다. 페이지의 텍스트 및 시각적 자산은 그대로 유지됩니다."
      },
      {
        "question": "북마크 수준은 몇 개까지 지원되나요?",
        "answer": "이 도구는 깊게 중첩된 북마크 구조를 지원하여 장, 섹션 및 하위 섹션 레이아웃을 허용합니다."
      }
    ]
  },
  "batch-barcode-injector": {
    "title": "바코드 일괄 삽입",
    "metaDescription": "PDF 페이지에 QR 코드 또는 코드 128 바코드를 대량으로 추가합니다. 문서 추적, 라벨 및 인쇄 작업 흐름에 대한 배치를 조정합니다.",
    "keywords": [
      "qr코드 주입",
      "바코드 병합",
      "송장 일괄 스탬프"
    ],
    "description": "<p>배치 바코드 정밀 인젝터는 디지털 자산 추적과 실제 문서 색인 생성을 연결합니다.</p>\n      <p>창고 보관, 계약 검토, 물류 과정에서 송장이나 기기 카드에 고유한 바코드를 찍어야 하는 경우가 많습니다. 이 도구를 사용하면 놀라울 정도로 쉽습니다.</p>\n      <p>가독성이 높은 QR 코드 또는 Code128 바코드를 생성하고 녹색 레이저 가이드가 있는 멋진 정렬 작업 공간을 사용하여 위치를 지정하세요. 배치 시 깨끗한 스캔 오디오 신호음이 울려 매우 고급스러운 피드백을 제공합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "문서 업로드",
        "description": "계약서 또는 배송 목록을 나타내는 단일 또는 다중 페이지 PDF를 끌어서 놓습니다."
      },
      {
        "step": 2,
        "title": "위치 바코드 좌표",
        "description": "코드 종류와 값을 설정하고 배치 상자를 드래그하여 좌표를 지정하세요."
      },
      {
        "step": 3,
        "title": "스탬프 및 다운로드",
        "description": "코드 레이어를 대상 페이지 색인에 렌더링하려면 실행을 클릭하세요."
      }
    ],
    "useCases": [
      {
        "title": "계약 유효성 추적",
        "description": "계약서 헤더에 위조 방지 세부정보를 표시하는 고유한 QR 코드를 적용합니다.",
        "icon": "file-check"
      },
      {
        "title": "배송 목록 코딩",
        "description": "빠른 창고 스캐닝 건 검증을 위해 대상 지점에 Code128 바코드를 배치합니다.",
        "icon": "truck"
      },
      {
        "title": "자산등록카드",
        "description": "물리적 장비 시트에 유지 관리 사양을 표시하는 인벤토리 QR 코드를 추가합니다.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "생성된 바코드는 스캔 가능성이 높나요?",
        "answer": "네. 우리는 매우 작은 크기로 인쇄할 때에도 선명한 상태를 유지하는 무손실 고해상도 PNG 표현을 포함합니다."
      },
      {
        "question": "각 페이지에 고유한 값을 삽입할 수 있나요?",
        "answer": "현재 일괄 실행은 선택된 모든 페이지에 동일한 구성 코드를 적용합니다. 다중 값 Excel 가져오기는 향후 업데이트에서 계획되어 있습니다."
      },
      {
        "question": "`pt` 좌표는 무엇을 나타냅니까?",
        "answer": "`pt`(포인트)는 표준 PDF 물리적 단위(72pt = 1인치)입니다. A4 페이지는 595 × 842pt로 표시됩니다."
      }
    ]
  },
  "signature-ink-optimizer": {
    "title": "서명 및 인장 추출",
    "metaDescription": "사진에서 서명이나 스탬프를 추출하고 배경을 제거합니다. 문서에 사용할 투명 PNG를 다운로드하세요.",
    "keywords": [
      "서명 추출",
      "도장 투명화",
      "도장 누끼",
      "필적 정화"
    ],
    "description": "<p>Signature & Stamp Chroma Ink Optimizer는 전문적인 고품질 잉크 정화기 역할을 합니다.</p>\n      <p>휴대전화로 캡처한 서명이나 회사 인감에는 노란 종이 색조, 고르지 못한 그림자, 페이지 주름 등이 나타나는 경우가 많습니다. 계약서 PDF에 직접 붙여넣는 것은 아마추어처럼 보입니다.</p>\n      <p>이 도구는 휘도와 색상 공간을 기준으로 알파 채널을 분리합니다. 스탬프 빨간색(크로마 잉크)과 필기 검정색을 선명하게 하면서 종이 배경을 완전히 표백합니다. 그 결과 정품 잉크 질감이 담긴 프리미엄 투명 PNG 스탬프가 탄생했습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "물개 사진 업로드",
        "description": "서명 또는 도장이 찍힌 휴대폰 촬영 사진을 제공해 주세요."
      },
      {
        "step": 2,
        "title": "청소 슬라이더 조정",
        "description": "대비 및 휘도 슬라이더를 움직여 배경 소음을 실시간으로 분리하세요."
      },
      {
        "step": 3,
        "title": "깨끗한 서명 다운로드",
        "description": "공식 문서 계약에 스탬프를 찍을 준비가 된 투명한 PNG로 내보냅니다."
      }
    ],
    "useCases": [
      {
        "title": "전문적인 전자 서명 준비",
        "description": "회색 서명 사진을 아름답고 투명한 레이어로 변환하여 계약서에 서명하세요.",
        "icon": "file-signature"
      },
      {
        "title": "법인 인감 소독",
        "description": "종이 섬유 노이즈를 버리고 선명한 투명 스탬프 봉인을 준비하여 물리적 스탬프 스캔을 청소합니다.",
        "icon": "stamp"
      },
      {
        "title": "그려진 선화 추출",
        "description": "손쉬운 Photoshop 색칠 작업 과정을 위해 그리기 스케치북에서 검은색 획을 분리합니다.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "자가 적응 알파 추출은 일반 키잉과 어떻게 다릅니까?",
        "answer": "표준 크로마 키잉을 사용하면 시그니처 획 세부 사항이 뭉툭하고 픽셀화되어 보이는 경우가 많습니다. 우리의 알고리즘은 흰색/노란색 배경 노이즈만 분리하고 잉크 테두리를 매끄럽게 만듭니다."
      },
      {
        "question": "어떤 이미지 형식이 지원되나요?",
        "answer": "JPG, JPEG, PNG를 지원합니다. 최상의 결과를 얻으려면 밝고 균일한 조명 아래에서 서명 사진을 촬영하세요."
      },
      {
        "question": "필기 디테일이 수정되나요?",
        "answer": "아니요. 픽셀 필터링은 원래 좌표에 작용하여 실제 획 텍스처를 유지하면서 대비를 선명하게 합니다."
      }
    ]
  },
  "dead-link-debugger": {
    "title": "깨진 링크 수정",
    "metaDescription": "PDF 하이퍼링크를 검사하고 끊어지거나 오래된 대상을 교체합니다. 링크 주석을 스캔하고 업데이트된 문서를 저장하세요.",
    "keywords": [
      "pdf 링크 복구",
      "url 디버깅",
      "하이퍼링크 수정"
    ],
    "description": "<p>데드 링크 디버거는 게시된 파일의 링크 상호 작용 품질을 보장하는 심층 구조 편집기입니다.</p>\n      <p>설명서, 백서 또는 가이드 내부의 깨진 URL(404/500)은 브랜드 권위를 감소시킵니다. 이 도구를 사용하면 하이퍼링크 데이터베이스를 원활하게 관리할 수 있습니다.</p>\n      <p>각 페이지의 하위 수준 <code>/Link</code> 사전을 구문 분석하고 조사한 후 대화형 그리드에 링크 상태를 표시합니다(데드 링크는 빨간색, 리디렉션은 주황색). 업데이트된 리디렉션 URL을 입력하기만 하면 도구가 새 대상을 PDF 바이너리 스트림에 직접 다시 작성합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "대상 문서 제공",
        "description": "디버그 링크가 포함된 PDF 매뉴얼이나 카탈로그를 업로드하세요."
      },
      {
        "step": 2,
        "title": "스캔 및 업데이트",
        "description": "디버거가 모든 URL 항목을 추출하도록 합니다. 깨진 항목에 대한 새로운 리디렉션 URL을 입력하세요."
      },
      {
        "step": 3,
        "title": "리디렉션 업데이트 저장",
        "description": "/URI 작업을 다시 작성하고 수정된 PDF를 다운로드하려면 실행을 클릭하세요."
      }
    ],
    "useCases": [
      {
        "title": "전단지 깨진 링크 핫픽스",
        "description": "원본 디자인 편집기를 다시 열지 않고도 게시된 전단지의 잘못된 URL을 즉시 수정합니다.",
        "icon": "refresh-cw"
      },
      {
        "title": "참고문헌 링크 확인",
        "description": "보고서의 학술 참고문헌 링크를 확인하고 권위를 유지하기 위해 참고문헌을 업데이트합니다.",
        "icon": "book"
      },
      {
        "title": "기업 브랜드 변경 업데이트",
        "description": "회사 도메인 이름이 변경되면 회사 PDF 전체에서 이전 URL을 일괄 업데이트합니다.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "링크 연결 가능성이 온라인에서 완전히 확인되지 않는 이유는 무엇입니까?",
        "answer": "웹 브라우저는 다중 출처 링크 직접 확인을 차단하는 엄격한 CORS 정책을 시행합니다. 우리의 도구는 링크를 명확하게 나열하고 수동으로 핫픽스를 제공합니다."
      },
      {
        "question": "이렇게 하면 페이지의 시각적 텍스트 표현이 수정되나요?",
        "answer": "아니요. 기본 `/URI` 탐색 동작만 변경합니다. 시각적 링크 텍스트는 변경되지 않습니다."
      },
      {
        "question": "내부 페이지 북마크 수정을 지원하나요?",
        "answer": "이 도구는 외부 `/URI` 하이퍼링크를 처리합니다. 내부 레이아웃 탐색을 위해서는 대화형 목차 도구를 사용하세요."
      }
    ]
  },
  "interactive-toc-generator": {
    "title": "대화형 목차 생성",
    "metaDescription": "PDF에 클릭 가능한 목차를 추가하세요. 보다 쉬운 문서 탐색을 위해 장 링크를 생성하고 탐색 기능을 반환합니다.",
    "keywords": [
      "pdf 목차 만들기",
      "양방향 링크 목차",
      "북마크 목차화"
    ],
    "description": "<p>Interactive TOC Builder는 광범위한 PDF에 혁신적인 탐색 경험을 제공합니다.</p>\n      <p>대상 장을 찾기 위해 구조화되지 않은 문서에서 수백 페이지를 넘기는 것은 실망스럽습니다. 이 도구에는 <strong>양방향 TOC 편집</strong>이 도입되었습니다.</p>\n      <p>머리글을 스캔하여 표지 바로 뒤에 삽입되는 종이접기 스타일의 프리미엄 목차 페이지를 생성합니다. 각 색인 행에 대해 클릭 가능한 /GoTo 링크를 생성하는 것 외에도 각 대상 장 페이지의 모서리에 작고 우아한 \"TOC ↩\" 호버링 앵커를 삽입합니다. 독자는 웹과 같은 탐색을 즐기면서 즉시 앞뒤로 이동할 수 있습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 문서 제공",
        "description": "대화형 카탈로그가 필요한 보고서, eBook 또는 제안서를 업로드하세요."
      },
      {
        "step": 2,
        "title": "목차 제목 및 색인 설정",
        "description": "주요 제목을 사용자 정의하고 페이지 색인을 선택하여 목차 페이지를 삽입하세요."
      },
      {
        "step": 3,
        "title": "앵커 짜기 및 저장",
        "description": "페이지를 컴파일하고 이중 링크 탐색을 작성하려면 실행을 클릭하세요."
      }
    ],
    "useCases": [
      {
        "title": "연간 기업 보고서 다듬기",
        "description": "주주들이 재무 차트 사이를 이동할 수 있도록 표지 뒤에 아름다운 색인 페이지를 삽입합니다.",
        "icon": "file-bar"
      },
      {
        "title": "논문 색인",
        "description": "대학 서식 규칙에 맞춰 표준 색인을 빠르게 컴파일합니다.",
        "icon": "bookmark"
      },
      {
        "title": "운영 매뉴얼 탐색",
        "description": "핸드북 독자가 문제 해결 시트에서 기본 목차로 빠르게 이동할 수 있도록 도와주세요.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "양방향 앵커는 어떻게 작동하나요?",
        "answer": "각 페이지를 대상으로 하는 TOC 페이지에 표준 링크 주석을 생성합니다. 그런 다음 모든 대상 장 시트에 목차 페이지로 돌아가는 링크를 삽입합니다."
      },
      {
        "question": "목차 페이지를 삽입하면 기존 페이지 번호가 깨지나요?",
        "answer": "아니요. 컴파일러는 새로 삽입된 목차 페이지의 오프셋을 고려하여 모든 대상 대상이 정렬되도록 합니다."
      },
      {
        "question": "목차 페이지는 물리적으로 인쇄했을 때 유효한가요?",
        "answer": "네. 생성된 목차에는 화면에서 클릭 가능한 링크를 활성화하는 동시에 종이 독자를 안내하기 위한 명확한 실제 페이지 번호가 나열되어 있습니다."
      }
    ]
  },
  "pdf-deskew-aligner": {
    "title": "스캔 자동 기울기 보정",
    "metaDescription": "기울어진 텍스트 줄을 로컬에서 감지하고 보정된 내용을 원래 페이지 안에 맞춥니다.",
    "keywords": [
      "pdf 수평 보정",
      "스캔 기울기 교정",
      "텍스트 라인 정렬"
    ],
    "description": "\n      <p>기울어진 텍스트 줄을 로컬에서 감지하고 보정된 내용을 원래 페이지 안에 맞춥니다.</p>\n      <p>빈 페이지, 불확실한 스캔 및 주석이 있는 페이지는 변경하지 않습니다.</p>\n      <p>해상도가 높으면 시간이 더 걸립니다. 매우 큰 페이지는 낮은 분석 해상도를 사용합니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "왜곡된 PDF 제공",
        "description": "회전되었거나 잘못 정렬된 스캔 문서가 포함된 PDF 시트를 업로드하세요."
      },
      {
        "step": 2,
        "title": "스캔 정렬 설정",
        "description": "분석 해상도 · 최대 보정 각도"
      },
      {
        "step": 3,
        "title": "분석하고 바로잡기",
        "description": "다운로드 · 정렬된 PDF"
      }
    ],
    "useCases": [
      {
        "title": "영수증 및 계약서 보관",
        "description": "휴대용 모바일 계약서 스캔을 공식 디지털 PDF 아카이브로 저장하기 전에 빠르게 정리하세요.",
        "icon": "file-text"
      },
      {
        "title": "학술 도서 디지털화",
        "description": "텍스트 줄이 수평 여백을 벗어나는 마이크로필름 북 스캔을 삭제합니다.",
        "icon": "book"
      },
      {
        "title": "학생 숙제 채점",
        "description": "학생 휴대폰으로 찍은 숙제 스냅샷을 수정하여 채점 교사의 눈을 편안하게 합니다.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "문서 기울어짐은 어떻게 감지되나요?",
        "answer": "기울어진 텍스트 줄을 로컬에서 감지하고 보정된 내용을 원래 페이지 안에 맞춥니다."
      },
      {
        "question": "이 과정에서 페이지 가장자리가 잘리나요?",
        "answer": "기울어진 텍스트 줄을 로컬에서 감지하고 보정된 내용을 원래 페이지 안에 맞춥니다."
      },
      {
        "question": "다이어그램으로 채워진 문서를 지원합니까?",
        "answer": "빈 페이지, 불확실한 스캔 및 주석이 있는 페이지는 변경하지 않습니다."
      }
    ]
  },
  "pdf-two-column-reflower": {
    "title": "학술 논문 2단 재배열",
    "metaDescription": "모바일에서 더 쉽게 읽을 수 있도록 2열로 구성된 PDF 문서를 단일 열로 리플로우합니다. 작은 화면에 맞게 학술 문서를 조정하세요.",
    "keywords": [
      "2단 논문 1단 변환",
      "크롭박스 레이아웃 분할",
      "모바일 전용 재배열"
    ],
    "description": "<p>Academic 2열 Reflower는 디지털 연구의 가장 중요한 문제점인 표준 모바일 화면에서 논문을 읽는 문제를 해결합니다.</p>\n      <p>이중 열 레이아웃(IEEE, ACM, Nature 및 주요 보고서에서 사용)은 A4 용지용으로 설계되었습니다. 휴대폰 화면이나 Kindle 장치에서 탐색하려면 지속적인 확대/축소, 오른쪽으로 드래그, 아래로 스크롤 및 위로 이동이 필요합니다. 독해력이 완전히 손상됩니다.</p>\n      <p>Google 프로세서는 <strong>스마트 단락 리플로우 및 수직 파티션 장벽 스캔</strong>을 구현합니다. 문자 좌표를 분석하여 이중 열 거터를 매핑하고, 레이아웃을 나누고, 세그먼트를 수직으로(왼쪽 열 먼저, 오른쪽 열 순으로) 엮습니다. 그래프, 수식, 제목이 단일 열의 흐름 가능한 세로 스크롤 PDF로 원활하게 재배열되었습니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "2단 PDF 업로드",
        "description": "IEEE/ACM 저널 보고서 또는 다중 열 PDF 시트를 제공하세요."
      },
      {
        "step": 2,
        "title": "파티션 홈통 검사",
        "description": "빨간색 수직 파티션 슬라이스 가이드를 확인하세요. 요소가 겹치는 것을 방지하려면 여백을 조정하세요."
      },
      {
        "step": 3,
        "title": "리플로우 및 저장",
        "description": "페이지를 흐름 가능한 레이아웃으로 컴파일하고 즉시 다운로드하려면 실행을 클릭하세요."
      }
    ],
    "useCases": [
      {
        "title": "e-Reader 도서 가져오기",
        "description": "빽빽한 2열 에세이를 Kindle 및 Onyx 화면과 일치하는 편안한 1열 문서로 변환하세요.",
        "icon": "tablet"
      },
      {
        "title": "지하철 전화읽기",
        "description": "이동 중에 한 손으로 세로로 스와이프하여 연구 문헌을 편안하게 읽으세요.",
        "icon": "smartphone"
      },
      {
        "title": "아카이브 저널 형식 지정",
        "description": "오래된 좁은 열 신문을 읽기 쉬운 단일 열 웹 형식으로 현대화합니다.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "광범위한 차트와 방정식은 어떻게 처리되나요?",
        "answer": "우리 엔진은 \"스팬 요소 감지\"를 적용합니다. 방정식이나 다이어그램이 일반 열 너비를 초과하면 전체 너비 항목으로 격리되어 잘림 없이 원래 비율을 유지합니다."
      },
      {
        "question": "벡터 텍스트 해상도가 수정되나요?",
        "answer": "전혀 그렇지 않습니다. 래스터화하는 대신 객체 트리 수준에서 PDF 텍스트 객체 변환 행렬을 다시 작성합니다. 즉, 텍스트는 100% 벡터로 유지되고 완전히 선택 가능합니다."
      },
      {
        "question": "스캔한 이미지 문서에도 작동하나요?",
        "answer": "평면 이미지 기반 PDF의 경우 리플로우 프로세스를 실행하기 전에 먼저 OCR 도구를 실행하는 것이 좋습니다."
      }
    ]
  },
  "pdf-page-resizer-uniform": {
    "title": "PDF 규격 단일화",
    "metaDescription": "혼합된 PDF 페이지의 크기를 균일한 크기로 조정합니다. 비례 배율 및 중앙 여백을 사용하여 A4, A3 및 Letter 페이지를 표준화합니다.",
    "keywords": [
      "pdf 크기 동일화",
      "A4 단일 변환",
      "여백 중앙 맞춤"
    ],
    "description": "<p>다중 형식 PDF Resizer는 복잡하고 일치하지 않는 기업 문서를 위한 최고의 표준화 도구입니다.</p>\n      <p>인보이스, 계약서, 보충 차트를 결합하면 대용량 A3 원장 페이지, 표준 A4 계약서, Letter 크기 봉투가 포함된 PDF가 생성되는 경우가 많습니다. 종이를 넘기는 것은 매우 산만하며 사무실의 실제 프린터로 보내는 경우 크기 불일치로 인해 용지 걸림 오류가 발생하는 경우가 많습니다.</p>\n      <p>이 도구는 각 페이지의 하위 수준 <code>/MediaBox</code> 및 <code>/CropBox</code> 그리드를 다시 작성합니다. 기존 너비와 높이를 매핑하고, 대상 사전 설정(예: 표준 A4)과 일치하도록 원본 페이지의 크기를 비례적으로 조정하며, 우아하고 일관된 주변 여백을 도입하여 전체 파일이 놀라울 정도로 세련되게 보입니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "다양한 크기의 PDF 제공",
        "description": "일치하지 않고 지저분한 페이지 크기가 포함된 병합된 PDF 문서를 업로드하세요."
      },
      {
        "step": 2,
        "title": "대상 사전 설정 선택",
        "description": "대상 균일 크기(예: A4, Letter, A3)를 선택하고 배율 모드를 전환합니다."
      },
      {
        "step": 3,
        "title": "정렬 및 다운로드",
        "description": "실행을 클릭하면 3D 시트 정렬이 실행되고 아름답게 표준화된 PDF가 다운로드됩니다."
      }
    ],
    "useCases": [
      {
        "title": "기업 RFP 제안",
        "description": "스캔한 자격증과 A4 입찰서를 실제 인쇄하기 전에 표준화합니다.",
        "icon": "file-text"
      },
      {
        "title": "금융 차트 통합",
        "description": "광범위한 A3 금융 현금 흐름을 깔끔한 A4 페이지로 확장하여 인쇄 표준을 유지합니다.",
        "icon": "layout"
      },
      {
        "title": "도서 여백 표준화",
        "description": "약간씩 다른 스캔 도서 페이지를 편안하게 읽을 수 있도록 절대적으로 균일한 크기로 만듭니다.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "이로 인해 내 콘텐츠가 왜곡되나요?",
        "answer": "절대로요. \"포함\"(흰색 막대를 사용한 비례 배율 조정) 및 \"표지\"(가운데 자르기)를 모두 지원합니다. 기본 포함 모드는 종횡비를 유지하여 왜곡을 방지합니다."
      },
      {
        "question": "기존 양식과 주석을 계속 클릭할 수 있나요?",
        "answer": "네. 알고리즘은 크기 조정 후 완벽하게 정렬되도록 크기 조정 요소를 주석 좌표 배열, 크기 조정 링크 상자, 기호 경계 및 입력에 매핑합니다."
      },
      {
        "question": "크기를 조정할 수 있는 페이지 수에 제한이 있나요?",
        "answer": "아니요. 모든 작업은 기본 JavaScript를 사용하여 클라이언트 샌드박스에서 로컬로 실행되므로 수백 페이지가 포함된 광범위한 PDF를 몇 초 안에 처리할 수 있습니다."
      }
    ]
  },
  "handwriting-ink-contrast-booster": {
    "title": "필기 대비 및 배경 강화",
    "metaDescription": "스캔한 이미지의 필기 및 서명 대비를 향상시킵니다. 용지 배경 소음을 줄이고 잉크를 읽기 쉽게 만듭니다.",
    "keywords": [
      "자필 서명 보정",
      "배경 그림자 표백",
      "도장 선명하게"
    ],
    "description": "<p>손글씨 잉크 대비 부스터(Handwriting Ink Contrast Booster)는 서명된 계약서와 역사적인 원고 기록 보관소를 디지털화하는 데 도움이 되는 구세주입니다.</p>\n      <p>손으로 서명한 문서의 스캔은 회색 스캐너 유리 반사, 노란색 종이 색조 또는 희미한 잉크로 인해 흐릿하게 보이는 경우가 많습니다. 이러한 파일을 다시 인쇄하거나 복사하면 서명이 흐릿하고 읽을 수 없게 됩니다. 기존 대비 도구는 배경 전체를 어둡게 만들어 레이아웃을 악화시킵니다.</p>\n      <p>이 도구는 **CLAHE(Contrast Limited Adaptive Histogram Equalization) 및 색상 기반 색상 분리**를 활용합니다. 안전한 로컬 캔버스 프로세스에서는 배경 양피지에서 손글씨 획(검은색과 파란색 모두)을 분리하고 그림자 주름을 완전히 표백하며 색 바랜 잉크에 깊고 채도가 높은 대비를 주입하여 문서가 놀라울 정도로 선명하고 깨끗하게 보입니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "손으로 서명한 문서 가져오기",
        "description": "빛바랜 서명, 손으로 쓴 일기, 스케치가 포함된 PDF를 제공하세요."
      },
      {
        "step": 2,
        "title": "잉크 필터 구성",
        "description": "분리할 색상 프로필(예: 파란색 잉크, 검정색 잉크 또는 둘 다)을 선택하고 선명도를 조정합니다."
      },
      {
        "step": 3,
        "title": "선명화 및 다운로드",
        "description": "실행을 클릭하면 레이더 스캐너 효과로 색상을 추적하고 정제된 PDF를 다운로드할 수 있습니다."
      }
    ],
    "useCases": [
      {
        "title": "실행된 계약 수리",
        "description": "제대로 스캔되지 않은 계약서를 수정하고 서명을 선명하게 하며 종이 배경을 A4 순백색으로 표백합니다.",
        "icon": "file-check"
      },
      {
        "title": "자필 원고 아카이브",
        "description": "기록된 일지나 일기를 디지털화하여 나이와 관련된 얼룩을 지우고 선명한 검은색 획을 추출합니다.",
        "icon": "book"
      },
      {
        "title": "장부내역 복원",
        "description": "오래된 보관 원장의 희미한 잉크 세부정보를 복원하여 귀중한 손으로 쓴 좌표를 복구하세요.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "이것이 일반적인 그레이스케일 변환과 어떻게 다릅니까?",
        "answer": "회색조는 종이 그림자를 회색 값으로 변환합니다. 당사의 적응형 알고리즘은 배경 휘도를 분리하고 시그니처 \"잉크 스펙트럼\"을 분리하여 획 가장자리를 선명하게 유지하면서 배경을 완전한 흰색으로 정화합니다."
      },
      {
        "question": "필기 획 질감이 사라지나요?",
        "answer": "아니요. CLAHE 알고리즘은 하위 픽셀 수준에서 작동하여 자연스러운 펜 스트로크 압력, 잉크 페이딩 및 동적 선 두께를 유지합니다."
      },
      {
        "question": "빨간색 기업 스탬프를 유지할 수 있나요?",
        "answer": "네. 부스터는 \"크로마 잉크 보존\"을 활성화함으로써 빨간색 도장과 파란색 잉크 서명의 밝은 색상을 유지하면서 종이 배경을 희게 하고 필기를 어둡게 합니다."
      }
    ]
  },
  "pdf-spine-bookbinder": {
    "title": "책등 두께 계산",
    "metaDescription": "페이지 수와 용지 무게로 책등 너비를 계산합니다. 등뼈 접는 선이 있는 인쇄 가능한 표지 템플릿을 생성합니다.",
    "keywords": [
      "책등 두께 계산",
      "도서 제본",
      "Spine 디자인",
      "책표지 템플릿"
    ],
    "description": "<p>PDF Spine Bookbinder는 디자이너, 자가 출판 작가, 상업 입찰 팀을 위한 인쇄 전 구세주입니다.</p>\n      <p>두꺼운 책 카탈로그, 입찰 제안서 또는 연간 디렉토리를 편집할 때 완벽한 제본(접착제 제본)을 위해서는 정확한 책등 좌표가 있는 표지가 필요합니다. 책등 너비가 1mm라도 벗어나면 제본된 표지가 뒤틀리거나 움직이거나 주름이 생길 수 있습니다. 용지 무게에 따른 페이지 수 계산은 복잡하고 오류가 발생하기 쉽습니다.</p>\n      <p>이 도구는 <strong>물리적으로 모델링된 GSM 종이 두께 라이브러리</strong>를 활용합니다. PDF 페이지 수를 입력하고 용지 용지(예: 80 GSM 오프셋, 100 GSM 광택)를 선택하기만 하면 됩니다. 엔진은 책등 너비를 마이크로미터까지 계산하고 표준 앞/뒤 덮개와 정밀한 접힘 표시 주름이 포함된 인쇄 가능한 매우 넓은 표지 PDF를 컴파일합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "페이지 및 주식 유형 설정",
        "description": "문서 페이지 수를 입력하고 대상 용지 사양을 선택합니다."
      },
      {
        "step": 2,
        "title": "척추 텍스트 입력",
        "description": "책 제목, 저자 세부정보를 입력하고 표지/표지 배경을 맞춤설정하세요."
      },
      {
        "step": 3,
        "title": "3D 미리보기 및 내보내기",
        "description": "대화형 3D 바인더에서 책 표지를 돌려서 검사해 보세요. 고해상도 벡터 PDF를 내보냅니다."
      }
    ],
    "useCases": [
      {
        "title": "두꺼운 입찰 제안",
        "description": "두꺼운 입찰을 위해 정확한 등뼈 주름 정렬로 전문적인 표지를 디자인합니다.",
        "icon": "layers"
      },
      {
        "title": "논문 하드커버 제본",
        "description": "대학 석사/박사 학위 논문을 위한 완벽한 척추 레이아웃 너비를 계획하세요.",
        "icon": "award"
      },
      {
        "title": "자체 출판 소설 표지",
        "description": "주문형 인쇄 출판 서비스에 파일을 제출하기 전에 책 등 너비를 쉽게 계산하세요.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "GSM 용지 두께 계산은 얼마나 정확합니까?",
        "answer": "매우 정확합니다. 우리의 물리 라이브러리는 업계 평균과 일치합니다(예: 70 GSM = 0.09mm, 80 GSM = 0.10mm, 150 GSM 광택 = 0.125mm). 또한 계산을 자동으로 절반으로 줄이는 \"양면 인쇄\" 토글도 포함되어 있습니다."
      },
      {
        "question": "수출된 표지는 다이렉트 프린팅 준비가 되었나요?",
        "answer": "네. 파일은 표준 등록 표시, 색상 막대 및 책등 안내선을 포함하는 완벽한 벡터 PDF이며 오프셋 및 디지털 상업용 인쇄기와 완벽하게 호환됩니다."
      },
      {
        "question": "척추에 걸쳐 있는 배경 이미지를 업로드할 수 있나요?",
        "answer": "네. 사용자 정의 레이아웃을 업로드할 수 있으며 합성기가 척추 접힌 부분에 걸쳐 그래픽을 자동으로 래핑하고 정렬합니다."
      }
    ]
  },
  "pdf-signature-anchor-helper": {
    "title": "서명 위치 안내",
    "metaDescription": "X/Y 좌표를 사용하여 PDF 페이지에 서명 가이드를 배치합니다. 업데이트된 문서를 저장하기 전에 위치를 미리 봅니다.",
    "keywords": [
      "서명 위치 지정",
      "사인 가이드",
      "이동 링크 매핑"
    ],
    "description": "<p>PDF 서명 가이드 인젝터는 여러 페이지로 구성된 계약서에 대해 깔끔하고 오류 없는 서명 작업 과정을 보장합니다.</p>\n      <p>여러 페이지로 구성된 NDA 계약서, 재무제표 또는 상업 임대 계약서를 보낼 때 고객이 중요한 서명 상자를 놓치는 경우가 많아 이메일을 끊임없이 주고받고 비즈니스 거래가 지연됩니다.</p>\n      <p>저희 도구는 <strong>자연 정규식 의미 매핑</strong>을 사용합니다. PDF 문자표를 스캔하여 <code>Signature:</code>, <code>签字：</code>, <code>Witness:</code> 또는 <code>签署日期：</code>와 같은 용어를 찾습니다. 그런 다음 <code>pdf-lib</code>를 활용하여 표준 PDF 대화형 링크 주석을 삽입합니다. 표준 리더에서 열면 고객에게 깜박이는 네온 테두리 화살표가 표시되어 즉시 올바른 상자로 안내하므로 서명이 간편해집니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "수입업 계약서",
        "description": "서명 좌표가 필요한 PDF 계약서 또는 NDA를 업로드하세요."
      },
      {"step":2,"title":"X / Y","description":"실제 PDF 미리보기를 클릭하거나 선택한 페이지의 X 및 Y 좌표를 입력하세요."},
      {"step":3,"title":"처리","description":"파일을 처리하고 결과를 확인한 다음 PDF를 다운로드하세요."},
    ],
    "useCases": [
      {
        "title": "기업 NDA 계약",
        "description": "입사 직원이 조항을 누락하는 것을 방지하기 위해 표지판 옆에 명확하고 깜박이는 가이드를 삽입합니다.",
        "icon": "file-text"
      },
      {
        "title": "상업 임대 계약",
        "description": "맞춤 색상 탭이 있는 여러 페이지의 부동산 문서를 통해 여러 공동 서명자를 안내합니다.",
        "icon": "users"
      },
      {
        "title": "조달 PO 서명",
        "description": "송장 및 구매 주문서에 대화형 포인터를 오버레이하여 회계 승인 루프를 가속화합니다.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "계약서를 인쇄하면 이 가이드가 나오나요?",
        "answer": "아니요. 앵커는 false로 설정된 표준 PDF '인쇄 가능' 플래그와 함께 삽입됩니다. 컴퓨터/태블릿 화면에서는 아름답게 표시되지만 인쇄할 때는 완전히 보이지 않습니다."
      },
      {
        "question": "클라이언트가 서명 필드 간에 쉽게 이동할 수 있나요?",
        "answer": "네. 우리는 양방향 내부 앵커를 엮습니다. 고객은 \"서명 가이드\" 북마크를 클릭하여 다음 빈 서명 슬롯으로 즉시 자동으로 이동할 수 있습니다."
      },
      {
        "question": "스캔한 이미지 문서에도 작동하나요?",
        "answer": "네. 텍스트 스트림을 찾는 것 외에도 공간 레이아웃 파서는 스캔한 시트의 가로 규칙과 경계 상자를 기반으로 서명 줄을 추정합니다."
      }
    ]
  },
  "pdf-lossless-slicer": {
    "title": "대형 도면 무손실 분할",
    "metaDescription": "정확한 좌표를 사용하여 PDF 그림, 지도 또는 차트의 영역을 자릅니다. 내보낸 PDF의 벡터 내용을 유지합니다.",
    "keywords": [
      "도면 크롭",
      "무손실 슬라이스",
      "벡터 자르기",
      "캐드도면 분할"
    ],
    "description": "<p>PDF Lossless Drawing Slicer는 건축가, 엔지니어, 지도 세부 설계자를 위해 제작된 고정밀 수술 도구입니다.</p>\n      <p>대규모 CAD 엔지니어링 청사진이나 지리적 지도 PDF에서 특정 펌프실이나 칩 코어를 추출할 때 기존 스크린샷에서는 텍스트가 픽셀화되고 흐릿해집니다. 일반 자르기 도구는 단순히 시트 위에 마스크를 배치하기만 하면 됩니다. 즉, 100MB의 대용량 파일은 그대로 유지되며 숨겨진 콘텐츠도 계속 추출할 수 있습니다.</p>\n      <p>이 도구는 개체 트리 수준에서 페이지 <code>/MediaBox</code>, <code>/CropBox</code> 및 <code>/BleedBox</code> 행렬을 편집합니다. 선택한 영역 외부의 벡터 노드를 물리적으로 격리하여 대상 영역을 벡터 완벽하게 100% 유지(무한 확대/축소 가능)하는 동시에 중복된 오프스크린 경로와 이미지를 제거하여 파일 크기를 95% 줄입니다!</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "대형 청사진 가져오기",
        "description": "벡터가 풍부한 CAD, GIS 지도 또는 고해상도 카탈로그 PDF를 업로드하세요."
      },
      {"step":2,"title":"자르기 사각형","description":"X, Y, 너비, 높이를 입력한 다음 미리보기에서 선택한 페이지를 확인하세요."},
      {"step":3,"title":"처리","description":"파일을 처리하고 결과를 확인한 다음 PDF를 다운로드하세요."},
    ],
    "useCases": [
      {
        "title": "CAD 청사진 분리",
        "description": "대규모 100MB 평면도 청사진에서 '냉각 시스템' 세부 정보를 잘라내어 하청업체와 공유하세요.",
        "icon": "crop"
      },
      {
        "title": "GIS 지도 캡처",
        "description": "해상도 손실 없이 프리젠테이션 슬라이드를 위해 도시 거리 지도의 무손실 벡터 클리어 블록을 추출합니다.",
        "icon": "map"
      },
      {
        "title": "수동 일러스트레이션 추적",
        "description": "과학 도서 수치를 무손실로 분리하여 고품질 학술 논문에 삽입합니다.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "이것이 표준 자르기와 어떻게 다릅니까?",
        "answer": "표준 자르기는 시각적 경계만 조정합니다. 숨겨진 벡터는 파일에 남아 있습니다. 당사의 슬라이서는 겹치는 벡터 경로를 자르고 경계를 벗어난 XObject 이미지를 제거하여 완전한 데이터 격리와 최대 파일 압축을 보장합니다."
      },
      {
        "question": "텍스트 레이어는 계속 검색 가능합니까?",
        "answer": "네. 분할된 경계 내부에 있는 모든 텍스트 문자는 완전히 벡터 명확하고 검색 및 선택 가능한 상태로 유지됩니다."
      },
      {
        "question": "슬라이스된 영역을 SVG로 내보낼 수 있나요?",
        "answer": "출력은 표준화된 벡터 PDF입니다. 결과 파일을 PDF-SVG 도구에 전달하여 웹 확장 가능한 벡터 그래픽 형식으로 변환할 수 있습니다."
      }
    ]
  },
  "pdf-scratchpad-canvas": {
    "title": "모눈종이 메모 연결",
    "metaDescription": "PDF 페이지에 격자선, 괘선 또는 코넬 메모 여백을 추가합니다. 학습 노트, 계산, 시험 준비를 위한 추가 쓰기 공간을 만드세요.",
    "keywords": [
      "필기장 연결",
      "노트 캔버스 병합",
      "모눈종이 여백 추가"
    ],
    "description": "<p>PDF Scratchpad Margin Extender는 학생, 연구원, 전문 시험 응시자를 위한 필수 학습 동반자입니다.</p>\n      <p>디지털 태블릿에서 연습 시험지를 풀거나 슬라이드를 검토하거나 학술 교과서를 읽을 때 페이지 여백이 엄청나게 좁습니다. 별도의 메모 앱을 열면 화면이 계속 전환되어 초점이 흐트러집니다. 평평한 빈 시트를 추가하면 문제와 계산을 나란히 볼 수 없습니다.</p>\n      <p>이 도구는 하위 수준 PDF 구조에서 페이지 너비 또는 높이 치수를 다시 작성하여 <code>/MediaBox</code> 여백을 오른쪽이나 아래쪽에서 200~250pt까지 확장합니다. 그런 다음 새로운 여백에 깨끗한 눈금선, 대학 기준 노트북 선 또는 코넬 레이아웃을 오버레이하여 모든 단일 슬라이드나 질문 옆에 전용 초안 보드를 제공합니다!</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "강의 슬라이드 업로드",
        "description": "PDF 교과서, 슬라이드, 학습 논문을 제공하세요."
      },
      {
        "step": 2,
        "title": "여백 및 격자 스타일 선택",
        "description": "여백 확장 방향(예: 태블릿의 경우 오른쪽)을 선택하고 그리드 템플릿을 선택합니다."
      },
      {
        "step": 3,
        "title": "스티치 캔버스 및 다운로드",
        "description": "아름다운 초안 그리드가 포함된 확장된 페이지를 생성하려면 실행을 클릭하세요."
      }
    ],
    "useCases": [
      {
        "title": "STEM 시험 준비",
        "description": "수학 및 물리학 시험 문제 옆에 그리드 여백을 연결하여 문제 바로 옆에서 파생 문제를 해결합니다.",
        "icon": "edit-3"
      },
      {
        "title": "언어 독해 분석",
        "description": "어휘 분석 및 단락 번역을 위해 외국어 에세이 옆에 괘선 노트 여백을 추가합니다.",
        "icon": "book"
      },
      {
        "title": "건축 청사진 감사",
        "description": "엔지니어링 계산 및 고객 검토 의견을 위해 청사진 측면에 빈 여백 공간을 추가합니다.",
        "icon": "columns"
      }
    ],
    "faq": [
      {
        "question": "원본 PDF 텍스트가 찌그러지나요?",
        "answer": "전혀 그렇지 않습니다. 알고리즘은 용지 크기를 바깥쪽으로 확장합니다. 원본 콘텐츠는 레이아웃, 글꼴, 해상도를 유지합니다. 간단히 테두리의 공백을 늘리고 그 위에 그리드를 그립니다."
      },
      {
        "question": "일반 필기펜으로 스크래치패드에 쓸 수 있나요?",
        "answer": "네. 새 PDF 페이지는 기본적으로 컴파일됩니다. Goodnotes, Notability, Xodo 및 Acrobat과 같은 인기 있는 태블릿 메모 작성 응용 프로그램은 새로운 그리드 공간에서 직접 쓰고 강조 표시하고 낙서할 수 있습니다."
      },
      {
        "question": "격자선이 어둡고 산만합니까?",
        "answer": "은은하고 눈에 편안한 세 가지 색상(부드러운 청회색, 따뜻한 갈색, 빛나는 녹색)을 선별했습니다. 선은 가늘고 완만하여 원본 페이지 내용을 방해하지 않으면서 안내선 역할을 합니다."
      }
    ]
  },
  "photo-tiling-prepress": {
    "title": "증명사진 셀프 정렬",
    "metaDescription": "표준 인화지에서 신분증 또는 여권 사진을 자르고 정리합니다. 완성된 시트를 자르는 데 도움이 되도록 인쇄 자르기 표시를 추가합니다.",
    "keywords": [
      "증명사진 인화",
      "인화지 꽉 차게",
      "재단선 포함",
      "사진 그리드 배치"
    ],
    "description": "<p>Prepress Photo Tiling 도구는 개인 등록 카드 및 사진 스튜디오를 위해 제작된 비용 효율적이고 정밀한 레이아웃 컴파일러입니다.</p>\n      <p>여권 사진, 신분증 사진, 운전면허증을 집에서 인쇄하면 실제 크기가 잘못되거나(종종 너무 크거나 작게 인쇄됨), 인화지 낭비가 발생하고 정렬이 고르지 않게 되는 경우가 많습니다. 레이아웃을 만들기 위해 전문 인쇄소에 가는 것은 시간이 많이 걸립니다.</p>\n      <p>저희 도구에는 <strong>정밀 시험 인쇄 매트릭스 엔진</strong>이 통합되어 있습니다. 인물 사진이나 신분증 스캔을 받아 표준 크기(예: 1인치 또는 2인치 여권 사양)로 자르고, 표준 인화지(예: 5인치 또는 6인치 시트)에 대한 최적의 타일 수를 계산하고, 손쉬운 물리적 절단을 위해 선명한 마이크로 픽셀 자르기 선을 삽입하여 완벽하게 인쇄 가능한 PDF를 생성합니다.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "여권 사진 가져오기",
        "description": "카메라 인물 사진이나 양면 신분증 이미지를 업로드하세요."
      },
      {
        "step": 2,
        "title": "용지 및 레이아웃 구성",
        "description": "대상 인쇄 용지 크기(예: 6인치)를 선택하고 그리드 레이아웃(예: 1인치 사진 8매)을 선택합니다."
      },
      {
        "step": 3,
        "title": "타일링 및 내보내기",
        "description": "그리드에서 사진 타일을 검사하고 높은 DPI로 인쇄 가능한 PDF를 내보냅니다."
      }
    ],
    "useCases": [
      {
        "title": "셀프 여권 사진",
        "description": "모바일로 촬영한 여권 인물 사진을 6인치 인화지 한 장에 배열하고 표준 스튜디오 비용보다 훨씬 저렴한 비용으로 8장을 인쇄할 수 있습니다.",
        "icon": "user"
      },
      {
        "title": "신분증 양면복사",
        "description": "공식 제출용으로 표준 Letter/A4 시트에 국가 ID 카드의 앞면과 뒷면 스캔 형식을 깔끔하게 지정하세요.",
        "icon": "file-text"
      },
      {
        "title": "일괄 사진 썸네일 시트",
        "description": "여러 가족 추억을 바둑판식으로 배열하거나 스냅샷을 디자인하여 모눈 종이에 썸네일 밀착 인화지를 효율적으로 인쇄합니다.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "인쇄된 치수가 공식 1인치 또는 2인치 사양과 일치합니까?",
        "answer": "네. 그리드 엔진은 표준 PDF 포인트(72pt = 1인치)를 사용하여 측정하여 1인치 사진을 25x35mm로, 2인치 사진을 35x49mm로 정확하게 렌더링합니다. 프린터 설정에서 \"실제 크기/100% 배율\"로 인쇄하는지 확인하세요."
      },
      {
        "question": "1인치 사진과 2인치 사진을 한 장에 합칠 수 있나요?",
        "answer": "네. 엄선된 하이브리드 레이아웃 사전 설정(예: \"1\"의 복사본 4개 + 2\"의 복사본 4개)을 제공하여 인화지 공간을 최대화할 수 있습니다."
      },
      {
        "question": "템플릿에 테두리 블리드가 포함되어 있나요?",
        "answer": "네. 시험 인쇄 레이아웃은 용지 테두리에 표준 4mm의 인쇄 안전 여백을 예약하여 실제 프린터 롤러가 사진을 자르는 것을 방지합니다."
      }
    ]
  },
  "psd-to-pdf": {
    "title": "PSD PDF 변환",
    "metaDescription": "Adobe Photoshop (PSD) 파일을 PDF 형식으로 변환합니다. 여러 파일 변환을 지원하며 이미지 품질을 보존합니다.",
    "keywords": [
      "psd pdf 변환",
      "psd 변환",
      "포토샵 pdf 변환",
      "psd 변환기",
      "adobe psd pdf 변환"
    ],
    "description": "\n      <p>PSD PDF 변환 도구는 Adobe Photoshop(PSD) 파일을 PDF 문서로 변환합니다. Photoshop이 설치되어 있지 않아도 PSD 디자인을 확인하고 공유할 수 있습니다.</p>\n      <p>여러 PSD 파일을 한 번에 변환하여 단일 PDF 문서로 병합할 수 있습니다. 각 PSD 파일을 처리하여 표시되는 레이어를 고품질 PDF 페이지로 렌더링합니다.</p>\n      <p>모든 변환은 브라우저 내에서 로컬로 실행되므로 디자인이 외부로 유출되지 않고 안전하게 보호됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PSD 파일 업로드",
        "description": "PSD 또는 PSB 파일을 끌어서 놓거나(드래그 앤 드롭), 클릭하여 기기에서 선택합니다."
      },
      {
        "step": 2,
        "title": "순서 조정",
        "description": "파일 썸네일을 끌어서 놓아 원하는 순서로 정렬합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환 버튼을 클릭하여 PSD를 렌더링하고 완성된 PDF 문서를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "디자인 공유",
        "description": "Photoshop이 없는 클라이언트나 동료에게 포토샵 디자인을 손쉽게 공유합니다.",
        "icon": "share-2"
      },
      {
        "title": "포트폴리오 제작",
        "description": "디자인 작업물을 전문적인 PDF 포트폴리오로 컴파일합니다.",
        "icon": "layout"
      },
      {
        "title": "인쇄 준비",
        "description": "인쇄용으로 활용할 수 있도록 디자인을 PDF로 변환합니다.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Photoshop이 설치되어 있어야 하나요?",
        "answer": "아니요, 이 도구는 Adobe Photoshop 없이도 웹 브라우저에서 완전히 작동합니다."
      },
      {
        "question": "레이어가 보존되나요?",
        "answer": "이 도구는 PSD의 표시된 상태(병합된 이미지)를 렌더링합니다. 개별 레이어는 PDF에서 단일 레이어로 병합(플랫화)됩니다."
      },
      {
        "question": "최대 파일 크기는 얼마인가요?",
        "answer": "파일당 최대 100MB까지 업로드할 수 있습니다. 크기가 큰 PSD 파일은 처리하는 데 시간이 약간 걸릴 수 있습니다."
      }
    ]
  },
  "word-to-pdf": {
    "title": "Word PDF 변환",
    "metaDescription": "Word 문서(DOCX)를 PDF로 변환합니다. 변환된 문서의 서식과 레이아웃을 그대로 유지합니다.",
    "keywords": [
      "word pdf 변환",
      "docx pdf 변환",
      "word 변환",
      "word 변환기",
      "ms word pdf 변환"
    ],
    "description": "\n      <p>Word PDF 변환 도구는 Microsoft Word 문서를 원본 서식, 레이아웃 및 콘텐츠 구조를 보존하면서 PDF 형식으로 변환합니다.</p>\n      <p>DOCX 파일을 업로드하면 공유, 인쇄 또는 보관에 적합한 고품질 PDF 결과를 얻을 수 있습니다. 변환 시 텍스트 서식, 단락 스타일 및 기본 문서 구조가 그대로 유지됩니다.</p>\n      <p>모든 변환은 브라우저 내에서 로컬로 실행되므로 문서가 외부로 전송되지 않고 안전하게 보호됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Word 문서 업로드",
        "description": ".docx 파일을 끌어서 놓거나, 클릭하여 기기에서 선택합니다."
      },
      {
        "step": 2,
        "title": "처리 대기",
        "description": "도구가 문서를 불러와 변환 준비를 수행합니다."
      },
      {
        "step": 3,
        "title": "PDF 다운로드",
        "description": "다운로드 버튼을 클릭하여 변환된 PDF 문서를 저장합니다."
      }
    ],
    "useCases": [
      {
        "title": "문서 공유",
        "description": "Word 문서를 범용 공유 및 조회가 가능한 PDF로 변환합니다.",
        "icon": "share-2"
      },
      {
        "title": "인쇄 준비",
        "description": "Word 문서에서 바로 인쇄할 수 있는 PDF를 생성합니다.",
        "icon": "printer"
      },
      {
        "title": "문서 보관",
        "description": "장기 보관을 위해 Word 문서를 안정적인 PDF 형식으로 아카이빙합니다.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": ".doc 형식이 지원되나요?",
        "answer": "현재는 .docx 형식만 지원됩니다. .doc 파일은 Microsoft Word 또는 LibreOffice를 사용하여 먼저 .docx로 변환해 주세요."
      },
      {
        "question": "이미지가 보존되나요?",
        "answer": "텍스트 콘텐츠와 기본 서식은 보존됩니다. 이미지가 많은 복잡한 레이아웃은 렌더링 과정에서 일부 단순화될 수 있습니다."
      },
      {
        "question": "변환 과정이 안전한가요?",
        "answer": "예, 모든 처리가 브라우저 내에서 로컬로 진행됩니다. 귀하의 문서는 기기를 절대 벗어나지 않습니다."
      }
    ]
  },
  "excel-to-pdf": {
    "title": "Excel PDF 변환",
    "metaDescription": "Excel 스프레드시트(XLSX)를 PDF로 변환합니다. 변환된 문서의 표와 데이터를 그대로 보존합니다.",
    "keywords": [
      "excel pdf 변환",
      "xlsx pdf 변환",
      "excel 변환",
      "스프레드시트 pdf 변환",
      "ms excel pdf 변환"
    ],
    "description": "\n      <p>Excel PDF 변환 도구는 Microsoft Excel 스프레드시트를 표 구조와 데이터 정렬을 그대로 유지하면서 PDF 형식으로 변환합니다.</p>\n      <p>XLSX 파일을 업로드하면 올바르게 서식이 지정된 표와 깔끔한 PDF 출력을 얻을 수 있습니다. 통합 문서의 각 워크시트는 PDF 내에서 별도의 섹션으로 생성됩니다.</p>\n      <p>모든 변환은 브라우저 내에서 로컬로 진행되므로 데이터가 외부로 유출되지 않고 프라이버시가 안전하게 보장됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Excel 파일 업로드",
        "description": ".xlsx 파일을 끌어서 놓거나, 클릭하여 기기에서 선택합니다."
      },
      {
        "step": 2,
        "title": "처리 대기",
        "description": "도구가 스프레드시트를 불러와 모든 시트를 변환합니다."
      },
      {
        "step": 3,
        "title": "PDF 다운로드",
        "description": "다운로드 버튼을 클릭하여 변환된 PDF 문서를 저장합니다."
      }
    ],
    "useCases": [
      {
        "title": "보고서 공유",
        "description": "이해관계자 배포를 위해 Excel 보고서를 PDF로 변환합니다.",
        "icon": "file-text"
      },
      {
        "title": "데이터 보관",
        "description": "스프레드시트 데이터를 안정적인 PDF 형식으로 아카이빙합니다.",
        "icon": "archive"
      },
      {
        "title": "인쇄 준비",
        "description": "Excel 워크시트에서 바로 인쇄 가능한 PDF를 만듭니다.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "다중 워크시트가 지원되나요?",
        "answer": "예, 통합 문서 내의 모든 워크시트가 변환되어 PDF에 포함됩니다."
      },
      {
        "question": ".xls 형식이 지원되나요?",
        "answer": "현재는 .xlsx 형식만 지원됩니다. .xls 파일은 먼저 .xlsx로 저장해 주세요."
      },
      {
        "question": "수식(함수)이 유지되나요?",
        "answer": "PDF에는 수식의 최종 계산된 값이 표시됩니다. PDF 형식 내에서는 수식이 실행되지 않습니다."
      }
    ]
  },
  "pptx-to-pdf": {
    "title": "PowerPoint PDF 변환",
    "metaDescription": "PowerPoint 프레젠테이션(PPTX)을 PDF로 변환합니다. 슬라이드와 콘텐츠를 보존하여 쉽게 공유할 수 있습니다.",
    "keywords": [
      "powerpoint pdf 변환",
      "pptx pdf 변환",
      "pptx 변환",
      "프레젠테이션 pdf 변환",
      "슬라이드 pdf 변환"
    ],
    "description": "\n      <p>PowerPoint PDF 변환 도구는 Microsoft PowerPoint 프레젠테이션을 PDF 형식으로 변환하여, 슬라이드 콘텐츠와 텍스트를 보존하고 쉽게 공유 및 조회할 수 있도록 돕습니다.</p>\n      <p>각 슬라이드는 PDF의 한 페이지로 변환되어 발표 흐름을 그대로 유지합니다. PowerPoint가 설치되어 있지 않은 사람들과 프레젠테이션 자료를 공유할 때 적합합니다.</p>\n      <p>모든 변환은 브라우저 내에서 로컬로 실행되므로 프레젠테이션 자료가 유출되지 않고 안전하게 보호됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PowerPoint 파일 업로드",
        "description": ".pptx 파일을 끌어서 놓거나, 클릭하여 기기에서 선택합니다."
      },
      {
        "step": 2,
        "title": "처리 대기",
        "description": "도구가 슬라이드 콘텐츠를 추출하여 PDF를 생성합니다."
      },
      {
        "step": 3,
        "title": "PDF 다운로드",
        "description": "다운로드 버튼을 클릭하여 변환된 PDF 문서를 저장합니다."
      }
    ],
    "useCases": [
      {
        "title": "프레젠테이션 공유",
        "description": "PowerPoint가 없는 상대방에게도 프레젠테이션을 즉시 공유합니다.",
        "icon": "share-2"
      },
      {
        "title": "유인물 제작",
        "description": "발표 슬라이드로 인쇄 및 배포용 PDF 유인물을 제작합니다.",
        "icon": "file-text"
      },
      {
        "title": "프레젠테이션 보관",
        "description": "안정적인 PDF 형식으로 프레젠테이션 자료를 아카이빙합니다.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "애니메이션 효과가 유지되나요?",
        "answer": "PDF는 정적 파일 형식이므로 애니메이션이나 화면 전환 효과는 보존되지 않습니다. 각 슬라이드는 정적인 페이지로 변환됩니다."
      },
      {
        "question": ".ppt 형식이 지원되나요?",
        "answer": "현재는 .pptx 형식만 지원됩니다. .ppt 파일은 먼저 .pptx로 변환해 주세요."
      },
      {
        "question": "발표자 노트도 포함되나요?",
        "answer": "현재 PDF 변환 출력 시 발표자 노트는 포함되지 않습니다."
      }
    ]
  },
  "xps-to-pdf": {
    "title": "XPS PDF 변환",
    "metaDescription": "XPS 문서를 PDF 형식으로 변환합니다. 레이아웃과 그래픽을 완벽하게 보존하는 고정밀 변환을 제공합니다.",
    "keywords": [
      "xps pdf 변환",
      "xps 변환",
      "xps 변환기",
      "ms xps pdf 변환",
      "oxps pdf 변환"
    ],
    "description": "\n      <p>XPS PDF 변환 도구는 Microsoft XPS(XML Paper Specification) 문서를 원본 레이아웃, 텍스트 및 벡터 그래픽을 그대로 유지하면서 PDF 형식으로 변환합니다.</p>\n      <p>XPS는 PDF와 유사한 고정 문서 형식입니다. 이 도구는 네이티브 XPS 파싱 기술을 사용하여 원본 문서와 완벽히 일치하는 고정밀 변환 결과를 제공합니다.</p>\n      <p>모든 변환은 브라우저 내에서 로컬로 진행되므로 문서의 프라이버시와 보안이 철저히 보호됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "XPS 파일 업로드",
        "description": ".xps 파일을 끌어서 놓거나, 클릭하여 기기에서 선택합니다."
      },
      {
        "step": 2,
        "title": "처리 대기",
        "description": "도구가 XPS 문서를 분석하고 변환을 진행합니다."
      },
      {
        "step": 3,
        "title": "PDF 다운로드",
        "description": "다운로드 버튼을 클릭하여 변환된 PDF 문서를 저장합니다."
      }
    ],
    "useCases": [
      {
        "title": "형식 변환",
        "description": "XPS 문서를 호환성이 더 뛰어난 범용 PDF 형식으로 변환합니다.",
        "icon": "file"
      },
      {
        "title": "문서 공유",
        "description": "XPS 뷰어가 없는 사용자에게도 문서를 볼 수 있도록 PDF로 공유합니다.",
        "icon": "share-2"
      },
      {
        "title": "아카이브 이전",
        "description": "호환성을 개선하기 위해 XPS 아카이브 문서를 PDF 형식으로 마이그레이션합니다.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "XPS 형식이란 무엇인가요?",
        "answer": "XPS(XML Paper Specification)는 Microsoft의 고정 레이아웃 문서 형식으로, PDF와 유사합니다. 주로 Windows 환경에서 문서 인쇄용 파일로 널리 사용됩니다."
      },
      {
        "question": "변환 시 화질 저하가 없나요?",
        "answer": "예, 원본 텍스트, 그래픽 및 레이아웃을 화질 저하 없이 고품질로 고스란히 보존합니다."
      },
      {
        "question": "다중 페이지 XPS 파일도 지원하나요?",
        "answer": "예, XPS 문서의 모든 페이지가 빠짐없이 PDF로 변환됩니다."
      }
    ]
  },
  "rtf-to-pdf": {
    "title": "RTF PDF 변환",
    "metaDescription": "RTF(서식 있는 텍스트) 파일을 PDF로 변환합니다. 문서의 텍스트 서식을 보존합니다.",
    "keywords": [
      "rtf pdf 변환",
      "rtf 변환",
      "서식 있는 텍스트 pdf 변환",
      "rtf 변환기"
    ],
    "description": "\n      <p>RTF PDF 변환 도구는 RTF(Rich Text Format) 파일을 PDF 문서로 변환합니다. RTF는 글꼴, 색상, 스타일 등 기본적인 서식을 포함하며 널리 지원되는 텍스트 형식입니다.</p>\n      <p>RTF 파일을 업로드하면 텍스트 내용과 기본 서식을 그대로 유지한 채 깔끔한 PDF로 출력해 드립니다. 오래된 레거시 문서를 현대적인 PDF 형식으로 변환하는 데 안성맞춤입니다.</p>\n      <p>모든 변환은 브라우저 내에서 로컬로 진행되므로 문서를 외부 노출 걱정 없이 안전하고 비공개로 유지할 수 있습니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "RTF 파일 업로드",
        "description": ".rtf 파일을 끌어서 놓거나, 클릭하여 기기에서 선택합니다."
      },
      {
        "step": 2,
        "title": "처리 대기",
        "description": "도구가 RTF 콘텐츠를 파싱하고 변환 작업을 수행합니다."
      },
      {
        "step": 3,
        "title": "PDF 다운로드",
        "description": "다운로드 버튼을 클릭하여 변환된 PDF 문서를 저장합니다."
      }
    ],
    "useCases": [
      {
        "title": "이전 문서 변환",
        "description": "오래된 구형 RTF 문서를 현대적인 PDF 형식으로 교체합니다.",
        "icon": "history"
      },
      {
        "title": "문서 공유",
        "description": "RTF 문서를 어디서나 쉽게 볼 수 있는 PDF 형식으로 변환하여 공유합니다.",
        "icon": "share-2"
      },
      {
        "title": "문서 보관",
        "description": "장기적인 안정적 보관을 위해 RTF 파일을 PDF 형식으로 보관합니다.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "어떤 서식들이 보존되나요?",
        "answer": "글꼴, 단락, 스타일을 포함한 기본 텍스트 서식은 성공적으로 변환됩니다. 다만 복잡한 특수 RTF 기능은 단순화될 수 있습니다."
      },
      {
        "question": "여러 개의 RTF 파일을 동시에 변환할 수 있나요?",
        "answer": "현재 버전은 한 번에 하나의 파일만 변환을 진행할 수 있습니다. 여러 개의 변환된 파일을 하나로 합치려면 'PDF 병합' 도구를 사용해 주세요."
      },
      {
        "question": "RTF 파일 내의 삽입 이미지도 지원되나요?",
        "answer": "해당 도구는 주로 텍스트 콘텐츠 변환에 초점을 맞추고 있습니다. 따라서 일부 포함된 개체나 이미지는 렌더링되지 않을 수 있습니다."
      }
    ]
  },
  "epub-to-pdf": {
    "title": "EPUB PDF 변환",
    "metaDescription": "EPUB 전자책을 PDF로 변환합니다. 서식, 이미지 및 챕터 구조를 그대로 보존합니다.",
    "keywords": [
      "epub pdf 변환",
      "epub 변환",
      "전자책 pdf 변환",
      "epub 변환기"
    ],
    "description": "\n      <p>EPUB PDF 변환 도구는 전자책 파일을 고품질 PDF 문서로 변환합니다. EPUB은 대부분의 e-북 리더기와 디지털 도서관에서 사용되는 가장 대중적인 전자책 파일 형식입니다.</p>\n      <p>이 도구는 전자책의 텍스트 서식, 이미지, 그리고 목차(챕터) 구조를 고스란히 보존합니다. 전자책을 인쇄하거나 보관할 때, 혹은 범용 형식으로 공유하고자 할 때 적합합니다.</p>\n      <p>모든 변환은 브라우저 내에서 고성능 렌더링 기술을 통해 로컬로 작동되므로 도서 내용의 보안을 보장하며 변환 속도 또한 매우 빠릅니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "EPUB 파일 업로드",
        "description": ".epub 파일을 끌어서 놓거나, 클릭하여 기기에서 선택합니다."
      },
      {
        "step": 2,
        "title": "변환 대기",
        "description": "도구가 전자책의 모든 페이지를 렌더링하고 변환을 시작합니다."
      },
      {
        "step": 3,
        "title": "PDF 다운로드",
        "description": "다운로드 버튼을 클릭하여 변환된 PDF 문서를 저장합니다."
      }
    ],
    "useCases": [
      {
        "title": "전자책 인쇄",
        "description": "실물 인쇄를 위해 전자책 파일을 PDF로 변환합니다.",
        "icon": "printer"
      },
      {
        "title": "책 보관",
        "description": "장기 보존이 가능한 안정적인 PDF 형식으로 전자책을 저장합니다.",
        "icon": "archive"
      },
      {
        "title": "문서 공유",
        "description": "e-북 리더기가 없는 상대방에게도 전달할 수 있도록 전자책을 공유합니다.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "서식이 그대로 보존되나요?",
        "answer": "예, 그렇습니다! 이 도구는 네이티브 EPUB 렌더링 방식을 활용하여 텍스트 서식, 이미지, 레이아웃을 고해상도로 충실히 보존해 변환합니다."
      },
      {
        "question": "DRM 보호가 적용된 EPUB도 지원하나요?",
        "answer": "아니요, 저작권 보호(DRM)가 적용된 전자책은 변환할 수 없습니다. DRM이 해제된 순수 EPUB 파일만 지원됩니다."
      },
      {
        "question": "페이지 크기는 어떻게 결정되나요?",
        "answer": "가독성을 극대화하기 위해 EPUB의 콘텐츠는 표준 A4 용지 크기에 맞춰 렌더링됩니다."
      }
    ]
  },
  "mobi-to-pdf": {
    "title": "MOBI PDF 변환",
    "metaDescription": "MOBI 전자책을 PDF로 변환합니다. 고화질 렌더링으로 킨들(Kindle) 형식을 지원합니다.",
    "keywords": [
      "mobi pdf 변환",
      "mobi 변환",
      "킨들 pdf 변환",
      "azw pdf 변환",
      "mobi 변환기"
    ],
    "description": "\n      <p>MOBI PDF 변환 도구는 Amazon Kindle 전자책 파일을 고품질 PDF 문서로 변환합니다. MOBI 형식(AZW 및 AZW3 포함)은 Kindle 기기에서 주로 쓰이는 Amazon 고유의 전자책 포맷입니다.</p>\n      <p>이 도구는 킨들 책의 텍스트 서식, 이미지 및 구조를 보존합니다. 인쇄, 보관 또는 MOBI 형식을 지원하지 않는 타 기기에서 읽을 때 완벽하게 어울립니다.</p>\n      <p>모든 변환은 브라우저 내에서 고성능 렌더링 기술을 통해 로컬로 실행되므로 도서 내용이 비공개로 유지됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "MOBI 파일 업로드",
        "description": ".mobi, .azw, 또는 .azw3 파일을 끌어서 놓거나, 클릭하여 기기에서 선택합니다."
      },
      {
        "step": 2,
        "title": "변환 대기",
        "description": "도구가 전자책의 모든 페이지를 렌더링하여 변환 작업을 진행합니다."
      },
      {
        "step": 3,
        "title": "PDF 다운로드",
        "description": "다운로드 버튼을 클릭하여 변환된 PDF 문서를 저장합니다."
      }
    ],
    "useCases": [
      {
        "title": "킨들 책 인쇄",
        "description": "실물 인쇄가 가능하도록 킨들 전자책을 PDF로 변환합니다.",
        "icon": "printer"
      },
      {
        "title": "책 보관",
        "description": "범용 PDF 형식으로 킨들 전자책을 장기 보관합니다.",
        "icon": "archive"
      },
      {
        "title": "기기 간 읽기",
        "description": "PDF 파일만 지원하는 다양한 스마트 기기에서 킨들 책을 읽습니다.",
        "icon": "tablet-smartphone"
      }
    ],
    "faq": [
      {
        "question": "어떤 MOBI 형식이 지원되나요?",
        "answer": "이 도구는 .mobi, .azw, .azw3 파일(DRM이 적용되지 않은 버전)을 지원합니다."
      },
      {
        "question": "DRM 보호가 적용된 킨들 책도 지원되나요?",
        "answer": "아니요, 복제 방지(DRM) 기술이 걸린 전자책은 변환할 수 없습니다. 오직 DRM이 없는 파일만 지원합니다."
      },
      {
        "question": "원본 서식이 유지되나요?",
        "answer": "예, 그렇습니다! 이 도구는 네이티브 MOBI 렌더링 방식을 거쳐 텍스트, 이미지 및 레이아웃을 최대한 정확히 재현해 줍니다."
      }
    ]
  },
  "pdf-to-svg": {
    "title": "PDF SVG 변환",
    "metaDescription": "PDF 페이지를 SVG 벡터 그래픽으로 변환합니다. 개별 페이지 단위로 완벽하게 확대 가능한 이미지 출력을 지원합니다.",
    "keywords": [
      "pdf svg 변환",
      "pdf to svg 변환",
      "벡터 그래픽",
      "스케일러블 pdf",
      "svg 변환기"
    ],
    "description": "\n      <p>PDF SVG 변환 도구는 PDF 문서의 각 페이지를 크기 조절이 용이한 SVG(Scalable Vector Graphic) 벡터 그래픽 파일로 변환합니다. SVG는 줌 레벨이나 인쇄 크기에 관계없이 선명한 품질을 유지하는 벡터 포맷입니다.</p>\n      <p>래스터 형식(JPG, PNG)과 다르게, SVG 그래픽은 확대해도 깨지거나 흐려지지 않습니다. 따라서 로고, 도표, 기술 도면 등 다양한 크기로 유연하게 표현되어야 하는 콘텐츠에 이상적입니다.</p>\n      <p>변환된 페이지를 미리 보고 개별 다운로드하거나 전체를 ZIP 파일로 한 번에 내려받을 수 있습니다. 모든 처리는 브라우저 내부에서 로컬로 안전하게 진행됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "PDF 파일을 끌어서 놓거나, 클릭하여 기기에서 선택합니다."
      },
      {
        "step": 2,
        "title": "옵션 구성",
        "description": "해상도 화질을 지정하고 필요한 경우 특정 페이지 범위를 설정합니다."
      },
      {
        "step": 3,
        "title": "미리보기 및 변환",
        "description": "변환 버튼을 클릭해 처리합니다. 썸네일을 누르면 각 페이지를 미리 볼 수 있습니다."
      },
      {
        "step": 4,
        "title": "다운로드",
        "description": "개별 SVG 파일을 다운로드하거나 모든 페이지를 하나의 ZIP 아카이브 파일로 받습니다."
      }
    ],
    "useCases": [
      {
        "title": "로고 및 그래픽 추출",
        "description": "디자인 프로그램에서 활용할 수 있도록 PDF에서 로고와 벡터 그래픽을 추출합니다.",
        "icon": "pen-tool"
      },
      {
        "title": "기술 도면 변환",
        "description": "기술 도면 및 다이어그램을 배율 확대가 자유로운 SVG 포맷으로 변환합니다.",
        "icon": "ruler"
      },
      {
        "title": "웹 개발 활용",
        "description": "반응형 웹 사이트에 최적화된 웹용 SVG 파일을 PDF 콘텐츠로부터 제작합니다.",
        "icon": "globe"
      },
      {
        "title": "자유로운 크기 인쇄",
        "description": "어떤 배율로 인쇄해도 깨짐 없는 벡터 그래픽 결과물을 만듭니다.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "SVG 형식이란 무엇인가요?",
        "answer": "SVG(Scalable Vector Graphics)는 화질 손실 없이 자유롭게 크기를 확대 또는 축소할 수 있는 벡터 이미지 포맷입니다. 로고, 아이콘, 웹 그래픽 등에 자주 쓰입니다."
      },
      {
        "question": "완전한 벡터 그래픽으로 변환되나요?",
        "answer": "네, 변환된 SVG는 PDF 페이지의 고해상도 그래픽 정보를 포함합니다. 원래 벡터 데이터로 구성된 PDF라면 배율과 무관하게 아주 또렷한 결과물을 보여줍니다."
      },
      {
        "question": "다운로드 전에 미리 볼 수 있나요?",
        "answer": "예, 그렇습니다! 썸네일을 클릭하면 실제 크기의 SVG 미리를 확인할 수 있으며 개별 혹은 전체 페이지 다운로드가 가능합니다."
      },
      {
        "question": "해상도는 무엇을 선택해야 하나요?",
        "answer": "해상도가 높을수록(216 또는 288 DPI) 더 디테일하고 정밀한 SVG를 생성하지만 파일 용량이 커집니다. 빠른 변환과 가벼운 용량을 원한다면 낮은 해상도를 선택하세요."
      }
    ]
  },
  "pdf-to-pptx": {
    "title": "PDF PowerPoint 변환",
    "metaDescription": "PDF를 PowerPoint 프레젠테이션으로 변환합니다. 각 페이지는 고해상도 슬라이드로 변환됩니다.",
    "keywords": [
      "pdf pptx 변환",
      "pdf powerpoint 변환",
      "pdf 슬라이드 변환",
      "pdf 프레젠테이션"
    ],
    "description": "\n      <p>PDF PowerPoint 변환 도구는 PDF 문서를 편집 가능한 PowerPoint 프레젠테이션(PPTX)으로 변환합니다. 각 PDF 페이지는 원본 비주얼 레이아웃을 완벽히 유지하면서 고화질 슬라이드로 재생성됩니다.</p>\n      <p>보고서, 유인물 또는 모든 PDF 콘텐츠를 발표용 자료 형식으로 전환할 때 이상적입니다. 이미지 화질(DPI) 옵션을 조절하여 용량과 화질 간의 균형을 맞출 수 있습니다.</p>\n      <p>모든 변환은 브라우저 내에서 로컬로 작동하므로 문서가 외부에 공개되지 않고 안전하게 보장됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "PDF 파일을 끌어서 놓거나, 클릭하여 기기에서 선택합니다."
      },
      {
        "step": 2,
        "title": "화질 설정 선택",
        "description": "슬라이드에 사용할 이미지 화질(DPI)을 설정합니다. DPI가 높을수록 화질은 우수하나 파일 용량은 늘어납니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환 버튼을 클릭하여 PowerPoint 프레젠테이션을 빌드하고 PPTX 파일을 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "프레젠테이션 제작",
        "description": "회의 발표를 위해 PDF 보고서나 문서를 발표용 슬라이드로 변환합니다.",
        "icon": "presentation"
      },
      {
        "title": "교육 자료 구축",
        "description": "PDF 형식의 교육용 서류들을 상호작용 가능한 PowerPoint 자료로 변경합니다.",
        "icon": "book-open"
      },
      {
        "title": "콘텐츠 재구성",
        "description": "기존 PDF 자료를 편집 가능한 슬라이드로 바꿔 추가적으로 디자인 및 내용을 수정합니다.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "슬라이드의 텍스트를 편집할 수 있나요?",
        "answer": "각 슬라이드는 PDF 페이지를 고화질 이미지로 렌더링한 형태를 담고 있습니다. PowerPoint 내에서 그 위에 새로운 텍스트 상자, 도형을 추가하거나 주석을 작성할 수 있습니다."
      },
      {
        "question": "몇 DPI를 지정하는 것이 좋습니까?",
        "answer": "일반 화면이나 빔 프로젝터에 표시할 프레젠테이션은 150 DPI를 권장합니다. 인쇄물로 사용하거나 최고 화질이 필요하다면 300 DPI를 선택하십시오."
      },
      {
        "question": "다중 페이지 PDF도 변환되나요?",
        "answer": "예, PDF의 각 페이지가 PowerPoint 프레젠테이션의 순서대로 각각 개별 슬라이드로 삽입됩니다."
      }
    ]
  },
  "pdf-to-excel": {
    "title": "PDF Excel 변환",
    "metaDescription": "PDF를 Excel 스프레드시트로 변환합니다. 테이블(표) 데이터를 XLSX 형식으로 추출합니다.",
    "keywords": [
      "pdf excel 변환",
      "pdf xlsx 변환",
      "pdf 표 변환",
      "표 추출"
    ],
    "description": "\n      <p>PDF Excel 변환 도구는 PDF 문서를 편집 가능한 Microsoft Excel 스프레드시트(XLSX)로 변환합니다. 이 도구는 PDF 내의 테이블(표)을 자동으로 감지하여 별도의 시트로 추출합니다.</p>\n      <p>금융 보고서, 송장(인보이스), 또는 표로 표현된 다양한 데이터를 분석할 때 매우 유용합니다. 각 페이지의 표들이 시트별로 깔끔하게 정리되어 데이터를 편리하게 가공할 수 있습니다.</p>\n      <p>모든 변환은 브라우저 내에서 로컬로 진행되므로 데이터가 외부에 노출되지 않고 안전하게 비밀이 유지됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "PDF 파일을 끌어서 놓거나, 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "처리",
        "description": "도구가 PDF에서 표를 자동으로 식별하고 데이터를 추출합니다."
      },
      {
        "step": 3,
        "title": "Excel 다운로드",
        "description": "표가 추출되어 완성된 Excel 파일을 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "재무 분석",
        "description": "은행 거래 내역서나 송장(인보이스) PDF를 Excel로 전환하여 분석합니다.",
        "icon": "trending-up"
      },
      {
        "title": "데이터 수집",
        "description": "연구 논문이나 보고서에 수록된 데이터 표를 추출합니다.",
        "icon": "database"
      },
      {
        "title": "재고 관리",
        "description": "PDF 형식의 재고 목록을 스프레드시트로 신속히 변환합니다.",
        "icon": "clipboard"
      }
    ],
    "faq": [
      {
        "question": "표는 어떻게 처리되나요?",
        "answer": "각 페이지에서 감지된 표들은 Excel 파일의 해당 시트에 나뉘어 차례로 추출됩니다."
      },
      {
        "question": "PDF 내에 표가 없으면 어떻게 되나요?",
        "answer": "표를 발견하지 못했다는 안내 정보 시트가 생성됩니다."
      },
      {
        "question": "서식이 완벽하게 유지되나요?",
        "answer": "텍스트와 숫자 데이터 자체는 안전하게 추출되지만, 스프레드시트 환경에 맞춰 복잡한 시각적 디자인 서식은 일부 단순화될 수 있습니다."
      }
    ]
  },
  "extract-attachments": {
    "title": "첨부 파일 추출",
    "metaDescription": "PDF에서 내장된 첨부 파일을 추출합니다. PDF 문서에 포함된 모든 첨부 파일을 즉시 다운로드해 보세요.",
    "keywords": [
      "첨부 파일 추출",
      "pdf 첨부파일",
      "내장 파일 다운로드",
      "pdf 추출"
    ],
    "description": "\n      <p>첨부 파일 추출 도구는 PDF 문서 내부에 내장된 모든 파일을 찾아 추출합니다. 첨부 파일을 하나씩 개별적으로 다운로드하거나 전체 파일을 담은 하나의 ZIP 압축 파일로 다운로드할 수 있습니다.</p>\n      <p>PDF 패키지 안에 삽입된 원본 소스 파일, 기초 데이터 또는 부가 보충 자료에 빠르게 접근할 때 완벽한 해결책을 제시합니다.</p>\n      <p>모든 추출 처리는 브라우저 내부에서 진행되므로 귀하의 문서 보안이 완벽히 유지됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "PDF 파일을 끌어서 놓거나, 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "첨부 파일 목록 조회",
        "description": "PDF 내부의 모든 내장 파일 목록을 시각적으로 확인합니다."
      },
      {
        "step": 3,
        "title": "추출 및 다운로드",
        "description": "개별적으로 파일을 받거나 전체를 ZIP 파일로 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "원본 소스 파일 접근",
        "description": "PDF 보고서 내에 심어진 원본 데이터 파일(예: Excel, CSV 등)을 안전하게 꺼냅니다.",
        "icon": "download"
      },
      {
        "title": "첨부 파일 복구",
        "description": "PDF 패키지 안에 보관되어 있던 내장 파일들을 신속하게 회수합니다.",
        "icon": "folder-open"
      },
      {
        "title": "일괄 추출",
        "description": "여러 PDF 문서에 포함된 첨부 파일들을 동시에 대량으로 추출합니다.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "첨부 파일이 없으면 어떻게 되나요?",
        "answer": "PDF 내에 내장된 파일이 없는 경우, 도구가 첨부 파일이 존재하지 않는다는 안내를 표시합니다."
      },
      {
        "question": "모든 유형의 첨부 파일이 지원되나요?",
        "answer": "예, 확장자와 관계없이 PDF 내부에 삽입된 모든 파일 형식을 있는 그대로 추출할 수 있습니다."
      },
      {
        "question": "여러 PDF 파일에서 한 번에 추출할 수 있나요?",
        "answer": "예, 여러 PDF를 함께 업로드하여 각각에 내장된 첨부 파일들을 일괄 처리하고 받아볼 수 있습니다."
      }
    ]
  },
  "extract-images": {
    "title": "PDF 이미지 추출",
    "metaDescription": "PDF 파일에 포함된 모든 내장 이미지를 추출합니다. 개별 다운로드 및 ZIP 다운로드를 지원하며, 작은 이미지를 자동으로 필터링합니다.",
    "keywords": [
      "pdf 이미지 추출",
      "pdf 이미지 저장",
      "pdf 이미지 다운로드",
      "pdf 이미지 꺼내기",
      "pdf에서 이미지 추출"
    ],
    "description": "\n      <p>PDF 이미지 추출 도구는 PDF 문서 내에 내장된 모든 이미지 파일들을 원본 화질 그대로 추출해 줍니다. 원하는 이미지만 개별 다운로드하거나 전체를 모아 간편하게 ZIP 압축 파일로 다운로드해 보세요.</p>\n      <p>사용자가 설정한 크기 기준에 따라 아이콘이나 장식용 요소 같은 불필요한 미세 이미지를 자동으로 걸러낼 수 있습니다. 여러 개의 PDF를 한 번에 업로드하여 다량의 이미지를 일괄 추출할 수 있습니다.</p>\n      <p>모든 이미지 추출 작업은 브라우저 내부에서 진행되므로 문서와 파일 내용의 보안이 보장됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "하나 이상의 PDF 파일을 끌어서 놓거나, 클릭하여 기기에서 선택합니다."
      },
      {
        "step": 2,
        "title": "필터 옵션 설정",
        "description": "원하지 않는 크기의 아이콘 등을 제외하기 위해 최소 너비, 높이 및 파일 용량 기준을 조정합니다."
      },
      {
        "step": 3,
        "title": "이미지 추출",
        "description": "추출 버튼을 눌러 PDF 내의 모든 이미지 자원을 찾아냅니다."
      },
      {
        "step": 4,
        "title": "다운로드",
        "description": "개별 이미지를 내려받거나 모든 이미지를 압축된 ZIP 파일로 소장합니다."
      }
    ],
    "useCases": [
      {
        "title": "사진 복구",
        "description": "재사용 및 보관을 위해 PDF 문서 안에 포함된 사진과 그림 리소스를 추출합니다.",
        "icon": "image"
      },
      {
        "title": "에셋 수집",
        "description": "PDF 형식의 보고서, 발표 자료, 브로셔 등에서 그래픽 및 이미지 요소들만 모아 수집합니다.",
        "icon": "folder"
      },
      {
        "title": "콘텐츠 재가공",
        "description": "다른 문서, 웹 사이트, 프레젠테이션 디자인에 쓸 목적으로 PDF 내부의 그림들을 추출합니다.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "어떤 이미지 파일 형식으로 추출되나요?",
        "answer": "가능한 경우 이미지의 원래 형식(JPEG, PNG 등) 그대로 추출되며, 원시(Raw) 이미지 데이터의 경우 PNG 포맷으로 전환되어 저장됩니다."
      },
      {
        "question": "일부 이미지가 나타나지 않는 이유는 무엇인가요?",
        "answer": "설정된 필터 기준보다 크기가 작은 파일들은 목록에서 제외됩니다. 더 작은 이미지까지 추출하려면 필터 크기 값을 낮춰 설정해 주세요."
      },
      {
        "question": "스캔된 PDF에서도 이미지 추출이 가능한가요?",
        "answer": "스캔된 PDF는 보통 페이지 전체가 하나의 큰 스캔 이미지로 구성되어 있습니다. 개별 이미지가 아닌 페이지 통째로 전환하려면 'PDF 이미지 변환' 도구를 이용하시는 것을 권장합니다."
      }
    ]
  },
  "edit-attachments": {
    "title": "첨부 파일 편집",
    "metaDescription": "PDF 첨부 파일을 관리합니다. 내장된 파일의 목록 보기, 이름 변경 및 삭제 작업을 수행할 수 있습니다.",
    "keywords": [
      "첨부 파일 편집",
      "pdf 파일 관리",
      "첨부파일 삭제",
      "첨부파일 이름 변경"
    ],
    "description": "\n      <p>첨부 파일 편집 도구를 사용하면 PDF 문서에 삽입된 내장 파일들을 유연하게 편집 및 관리할 수 있습니다. 첨부 파일들을 점검하고, 이름을 바꾸거나 불필요한 파일을 PDF에서 영구적으로 지울 수 있습니다.</p>\n      <p>문서를 배포하기 전에 불필요한 요소를 정리하여 용량을 최적화하고 정보를 갱신하는 데 큰 도움이 됩니다.</p>\n      <p>모든 편집은 외부 서버를 거치지 않고 브라우저 안에서 안전하게 실시간으로 이루어집니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "PDF 파일을 끌어서 놓거나, 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "첨부 파일 관리",
        "description": "목록에 나열된 내장 파일들의 이름을 수정하거나 삭제 아이콘을 클릭해 제거합니다."
      },
      {
        "step": 3,
        "title": "저장 및 다운로드",
        "description": "저장(Save) 버튼을 클릭하여 수정된 사항을 문서에 반영하고 새롭게 내려받습니다."
      }
    ],
    "useCases": [
      {
        "title": "PDF 내부 정리",
        "description": "불필요하게 용량을 차지하고 있는 첨부 파일들을 PDF 패키지에서 지워 최적화합니다.",
        "icon": "trash-2"
      },
      {
        "title": "이름 간결화",
        "description": "혼동을 주지 않도록 첨부된 파일명을 정돈하고 올바르게 지정합니다.",
        "icon": "edit"
      },
      {
        "title": "배포 전 최종 검토",
        "description": "문서 외부 배포 전 내장된 모든 자료들을 사전에 모니터링하고 점검합니다.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "이 도구에서 새 첨부 파일을 추가할 수도 있나요?",
        "answer": "새로운 파일을 추가하여 넣고 싶으시다면 '첨부 파일 추가' 도구를 사용해 주세요."
      },
      {
        "question": "첨부 파일을 삭제하면 영구히 지워지나요?",
        "answer": "예, 삭제된 첨부 파일은 새로 빌드되는 PDF 다운로드 파일에서 영구히 배제되어 복구할 수 없습니다."
      },
      {
        "question": "이 화면에서 바로 첨부 파일을 열어볼 수 있나요?",
        "answer": "이 도구에서는 파일 이름과 크기만 조회 가능합니다. 파일 내 정보를 열어보시려면 '첨부 파일 추출' 도구를 이용해 다운로드 후 조회해 주세요."
      }
    ]
  },
  "divide-pages": {
    "title": "페이지 분할",
    "metaDescription": "PDF 페이지를 여러 구역으로 나눕니다. 가로 또는 세로로 페이지를 분할해 보세요.",
    "keywords": [
      "pdf 페이지 분할",
      "페이지 자르기",
      "pdf 페이지 분리",
      "페이지 분할기"
    ],
    "description": "\n      <p>페이지 분할 도구는 개별 PDF 페이지를 여러 구역으로 잘라냅니다. 페이지를 가로, 세로 또는 그리드(격자) 모양으로 분할하여 하나의 페이지를 여러 개의 정밀한 페이지로 분리할 수 있습니다.</p>\n      <p>한 페이지에 여러 영수증이나 서류가 모여 있는 스캔 문서를 깔끔하게 자르거나, 거대한 크기의 도면 페이지를 표준 용지 규격으로 나누어 출력할 때 이상적입니다.</p>\n      <p>모든 분할 처리는 사용자 브라우저 내부에서 작동하므로 민감한 문서 정보가 안전하게 격리됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "PDF 파일을 끌어서 놓거나, 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "분할 방식 지정",
        "description": "가로, 세로 또는 그리드 분할 방식을 선택하고 나누고자 하는 개수를 입력합니다."
      },
      {
        "step": 3,
        "title": "분할 및 다운로드",
        "description": "분할 버튼을 클릭하여 페이지를 자르고 결과 파일을 내려받습니다."
      }
    ],
    "useCases": [
      {
        "title": "스캔 파일 개별 분리",
        "description": "여러 개의 문서가 한 장에 스캔된 페이지를 개별 영역으로 분할하여 분리합니다.",
        "icon": "scissors"
      },
      {
        "title": "용지 규격 변경",
        "description": "거대한 크기의 문서를 인쇄하기 편하도록 표준 규격 크기로 균등 조각 냅니다.",
        "icon": "maximize-2"
      },
      {
        "title": "카드/명함 제작",
        "description": "인쇄 및 배포를 위해 페이지를 명함이나 카드 크기 구간으로 작게 나눕니다.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "비균등하게 임의로 분할할 수도 있나요?",
        "answer": "현재 이 도구는 동일한 크기로 균등하게 분할하는 기능만 제공합니다. 원하는 임의의 크기로만 자르고 싶다면 'PDF 자르기(Crop)' 도구를 사용해 주세요."
      },
      {
        "question": "분할선에 걸친 내용(글자나 이미지)은 어떻게 처리되나요?",
        "answer": "콘텐츠가 분할선 부근에 있는 경우 해당 선을 기준으로 칼로 자르듯 분리됩니다. 중요 텍스트가 잘리지 않도록 분할선의 위치를 주의 깊게 확인해 주세요."
      },
      {
        "question": "특정 페이지만 선택해서 나눌 수 있나요?",
        "answer": "예, 전체 문서 중 원하는 특정 페이지들만 지정해서 분할 작업을 적용할 수 있습니다."
      }
    ]
  },
  "add-blank-page": {
    "title": "빈 페이지 추가",
    "metaDescription": "PDF 문서에 빈 페이지를 삽입합니다. 원하는 모든 위치에 공백 페이지를 추가해 보세요.",
    "keywords": [
      "빈 페이지 추가",
      "페이지 삽입",
      "공백 페이지",
      "pdf 페이지 추가"
    ],
    "description": "\n      <p>빈 페이지 추가 도구는 PDF 문서의 원하는 위치에 공백 페이지를 삽입해 줍니다. 기존 페이지 앞, 뒤 또는 사이에 사용자 정의 크기의 빈 페이지를 자유롭게 배치할 수 있습니다.</p>\n      <p>회의나 강의 중 필기할 공간을 확보하거나, 문서 중간에 섹션 구분 지면을 삽입할 때, 혹은 양면 인쇄용 레이아웃을 조절할 때 매우 유용합니다.</p>\n      <p>모든 처리는 로컬 브라우저에서 수행되므로 안심하고 문서를 관리할 수 있습니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "PDF 파일을 끌어서 놓거나, 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "위치 선택",
        "description": "빈 페이지를 넣을 세부 위치와 추가할 페이지 수를 지정합니다."
      },
      {
        "step": 3,
        "title": "추가 및 다운로드",
        "description": "추가 버튼을 클릭하여 빈 페이지를 끼워 넣고 수정된 PDF를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "필기 및 메모 공간 확보",
        "description": "직접 손으로 필기하거나 주석을 달 수 있는 빈 공간을 추가합니다.",
        "icon": "edit-3"
      },
      {
        "title": "섹션 구분 지면 삽입",
        "description": "문서의 챕터나 파트 사이에 구분선을 대신할 공백 페이지를 삽입합니다.",
        "icon": "minus"
      },
      {
        "title": "양면 인쇄 정렬 준비",
        "description": "양면 인쇄 시 첫 페이지 시작 위치나 여백을 맞추기 위해 빈 면을 삽입합니다.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "빈 페이지의 크기를 조절할 수 있나요?",
        "answer": "예, 기존 문서의 다른 페이지 크기에 맞추거나 원하는 가로세로 크기로 직접 커스텀하여 설정할 수 있습니다."
      },
      {
        "question": "여러 장의 빈 페이지를 한 번에 추가하는 것도 되나요?",
        "answer": "예, 원하는 수량만큼의 빈 페이지를 단번에 원하는 위치에 추가할 수 있습니다."
      },
      {
        "question": "흰색 말고 배경색이 들어간 빈 페이지도 추가할 수 있나요?",
        "answer": "이 도구로 흰색 빈 페이지를 추가한 다음, '배경색 설정' 도구를 사용하여 해당 페이지에 색상을 입힐 수 있습니다."
      }
    ]
  },
  "reverse-pages": {
    "title": "페이지 순서 뒤집기",
    "metaDescription": "PDF 페이지 순서를 반대로 뒤집습니다. 마지막 페이지부터 첫 페이지 순으로 순서를 반전시킵니다.",
    "keywords": [
      "pdf 순서 뒤집기",
      "페이지 순서 반전",
      "pdf 페이지 뒤집기",
      "역순 정렬"
    ],
    "description": "\n      <p>페이지 순서 뒤집기 도구는 PDF 문서의 페이지 정렬을 완전히 반대로 뒤집어 마지막 페이지가 첫 장이 되고 첫 페이지가 마지막 장이 되도록 재구성합니다. 스캔할 때 역순으로 처리되었거나 특정 인쇄 편의가 필요할 때 안성맞춤입니다.</p>\n      <p>이 도구는 문서 전체 또는 지정한 범위의 페이지를 원본 콘텐츠나 서식 훼손 없이 역순으로 재정렬합니다.</p>\n      <p>모든 프로세스는 웹 브라우저 내에서 로컬로 동작하므로 문서의 프라이버시를 안전하게 지킬 수 있습니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "PDF 파일을 끌어서 놓거나, 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "페이지 범위 선택",
        "description": "전체 페이지를 뒤집을지 또는 특정 페이지만 역순으로 구성할지 범위를 정합니다."
      },
      {
        "step": 3,
        "title": "정렬 반전 및 다운로드",
        "description": "뒤집기(Reverse) 버튼을 클릭하여 페이지 순서를 바꾸고 새로 빌드된 PDF를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "역순 스캔 바로잡기",
        "description": "스캐너 설정 오류 등으로 거꾸로 스캔된 문서의 순서를 올바르게 맞춥니다.",
        "icon": "refresh-cw"
      },
      {
        "title": "인쇄 출력 정렬 준비",
        "description": "단면/양면 인쇄 출력물이 올바른 면으로 순차 적재되도록 페이지를 역순으로 준비합니다.",
        "icon": "printer"
      },
      {
        "title": "문서 정렬 반전",
        "description": "검토용 문서의 순서를 손쉽게 반전시킵니다.",
        "icon": "arrow-up-down"
      }
    ],
    "faq": [
      {
        "question": "북마크(목차) 정보도 함께 업데이트되나요?",
        "answer": "예, 변경된 역순 페이지에 맞게 책갈피/북마크 링크도 그에 대응하는 페이지로 자동 갱신됩니다."
      },
      {
        "question": "일부 페이지만 골라 역순으로 바꿀 수 있나요?",
        "answer": "예, 전체 문서 중에서 원하시는 특정 페이지 범위만 입력하여 역순 정렬을 적용할 수 있습니다."
      },
      {
        "question": "이 기능이 페이지를 회전시키는 것과 같은가요?",
        "answer": "아니요, 페이지 순서 뒤집기는 말 그대로 페이지가 나타나는 순서만 뒤집는 것이며, 페이지의 가로세로 방향(회전)을 바꾸지는 않습니다."
      }
    ]
  },
  "rotate-pdf": {
    "title": "PDF 회전",
    "metaDescription": "PDF 페이지를 회전합니다. 페이지를 90도, 180도 또는 270도로 회전시켜 보세요.",
    "keywords": [
      "pdf 회전",
      "pdf 페이지 돌리기",
      "pdf 회전기",
      "방향 수정"
    ],
    "description": "\n      <p>PDF 회전 도구는 문서의 페이지를 90도, 180도, 또는 270도로 회전시킵니다. 잘못 놓인 방향으로 스캔된 문서를 똑바로 맞추거나, 가로 방향의 페이지를 세로로 수정하는 등 가독성을 극대화하기 위해 페이지 방향을 조절할 수 있습니다.</p>\n      <p>전체 페이지를 일괄적으로 회전시킬 수도 있고, 특정 페이지만 선택해서 개별적으로 각도를 지정하여 회전시킬 수도 있습니다. 변환 시 원본 문서의 모든 텍스트와 서식은 완벽히 보존됩니다.</p>\n      <p>모든 프로세스는 웹 브라우저 내에서 로컬로 안전하게 수행되므로 프라이버시 걱정이 없습니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "PDF 파일을 끌어서 놓거나, 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "회전 설정",
        "description": "회전시킬 각도 및 회전 작업을 적용할 페이지 범위를 결정합니다."
      },
      {
        "step": 3,
        "title": "회전 및 다운로드",
        "description": "회전(Rotate) 버튼을 클릭하여 변경 사항을 적용하고 파일을 저장합니다."
      }
    ],
    "useCases": [
      {
        "title": "스캔 파일 바로잡기",
        "description": "옆으로 누웠거나 거꾸로 스캔된 문서의 올바른 정방향을 맞춥니다.",
        "icon": "rotate-cw"
      },
      {
        "title": "가로 방향 페이지 조절",
        "description": "모니터 화면에서 편하게 볼 수 있도록 가로로 넓은 페이지들을 알맞게 회전시킵니다.",
        "icon": "monitor"
      },
      {
        "title": "혼합 방향 통일",
        "description": "가로세로 방향이 혼재된 복잡한 문서의 방향을 일정하게 표준화합니다.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "각 페이지마다 서로 다른 각도로 회전할 수 있나요?",
        "answer": "예, 가능합니다. 원하시는 특정 페이지별로 각각 개별 각도를 설정하여 회전할 수 있습니다."
      },
      {
        "question": "회전하면 인쇄 화질이나 품질에 영향을 미치나요?",
        "answer": "아니요, 회전 시 원본 그래픽이나 벡터 텍스트 데이터의 소실 없이 완벽한 화질을 그대로 유지합니다."
      },
      {
        "question": "임의의 세밀한 각도(예: 45도)로도 회전할 수 있나요?",
        "answer": "아닙니다. 회전 기능은 문서 구조 보존을 위해 90도 단위(90도, 180도, 270도) 회전만 지원합니다."
      }
    ]
  },
  "n-up-pdf": {
    "title": "PDF 모아찍기",
    "metaDescription": "한 페이지에 여러 PDF 페이지를 모아 배치합니다. 2-up, 4-up 또는 맞춤형 레이아웃을 생성해 보세요.",
    "keywords": [
      "pdf 모아찍기",
      "한 페이지에 여러 쪽",
      "2쪽 인쇄",
      "페이지 임포지션"
    ],
    "description": "\n      <p>PDF 모아찍기(N-Up) 도구는 여러 페이지의 내용을 단일 페이지 안에 배치하여 2-up, 4-up, 6-up, 9-up 또는 사용자 맞춤형 레이아웃을 구성해 줍니다. 인쇄 시 종이를 절약하거나 간략한 핸드아웃(유인물)을 만들 때 아주 좋습니다.</p>\n      <p>제공되는 기본 레이아웃 프리셋을 사용하거나 행과 열을 직접 설정해 나만의 배열을 만들어 보세요. 도구가 자동으로 페이지 크기를 조절하여 최적의 비율로 배치합니다.</p>\n      <p>모든 처리는 브라우저 내부에서 진행되므로 문서의 무단 노출 걱정 없이 안전하게 사용할 수 있습니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "PDF 파일을 끌어서 놓거나, 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "레이아웃 선택",
        "description": "2-up, 4-up, 6-up, 9-up 또는 원하는 격자(그리드) 규격을 선택합니다."
      },
      {
        "step": 3,
        "title": "생성 및 다운로드",
        "description": "생성(Create) 버튼을 눌러 모아보기 PDF를 형성하고 내려받습니다."
      }
    ],
    "useCases": [
      {
        "title": "종이 절약",
        "description": "한 장에 여러 페이지를 밀집 인쇄하여 종이 낭비를 줄입니다.",
        "icon": "leaf"
      },
      {
        "title": "유인물 제작",
        "description": "발표 슬라이드 등을 한눈에 볼 수 있도록 조밀한 유인물을 만듭니다.",
        "icon": "file-text"
      },
      {
        "title": "문서 초안 검토",
        "description": "검토 목적으로 축소된 크기로 문서 레이아웃을 한눈에 점검합니다.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "어떤 형태의 레이아웃이 가능한가요?",
        "answer": "기본 2-up, 4-up, 6-up, 9-up 외에도 사용자가 행과 열 값을 설정하는 다양한 격자 레이아웃을 지원합니다."
      },
      {
        "question": "페이지 사이에 테두리 선을 그을 수도 있나요?",
        "answer": "예, 페이지 간 경계선과 여백 크기를 취향대로 설정할 수 있습니다."
      },
      {
        "question": "페이지 흐름 순서는 유지되나요?",
        "answer": "예, 기본 읽기 방향인 왼쪽에서 오른쪽으로, 위에서 아래로 순차적으로 배치됩니다."
      }
    ]
  },
  "combine-single-page": {
    "title": "단일 페이지로 합치기",
    "metaDescription": "PDF 페이지들을 하나의 끊김 없는 페이지로 합칩니다. 세로로 스크롤할 수 있는 단일 페이지 문서를 생성해 보세요.",
    "keywords": [
      "페이지 합치기",
      "단일 페이지 pdf",
      "페이지 연결",
      "무한 스크롤 pdf"
    ],
    "description": "\n      <p>단일 페이지로 합치기 도구는 여러 PDF 페이지를 하나의 끊김 없는 연속된 단일 페이지로 이어 붙입니다. 웹 브라우저에서 편리하게 보거나 무한 스크롤로 읽기 편한 문서를 완성해 보세요.</p>\n      <p>페이지들이 세로 방향으로 길게 연결되며, 연결부 여백(간격)을 직접 조절할 수 있습니다. 결과물은 전체 내용을 담고 있는 하나의 아주 긴 단일 페이지 PDF가 됩니다.</p>\n      <p>모든 프로세스는 브라우저 내부에서 진행되므로 귀하의 문서 정보는 철저하게 비공개로 유지됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "PDF 파일을 끌어서 놓거나, 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "간격 설정",
        "description": "페이지와 페이지가 연결될 부위의 간격(여백) 크기를 지정합니다."
      },
      {
        "step": 3,
        "title": "결합 및 다운로드",
        "description": "결합(Combine) 버튼을 클릭하여 단일 페이지 PDF를 생성하고 내려받습니다."
      }
    ],
    "useCases": [
      {
        "title": "웹 문서화",
        "description": "웹 사이트에 스크롤이 편리하도록 임베드(삽입)할 PDF를 만듭니다.",
        "icon": "globe"
      },
      {
        "title": "끊김 없는 읽기",
        "description": "여러 쪽으로 나뉜 문서를 한눈에 스크롤하며 볼 수 있도록 변환합니다.",
        "icon": "scroll"
      },
      {
        "title": "롱폼 콘텐츠 처리",
        "description": "긴 글이나 웹툰, 인포그래픽 문서를 하나의 흐름으로 부드럽게 이어 봅니다.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "페이지 수에 제한이 있나요?",
        "answer": "페이지 수가 지나치게 많은 아주 긴 문서의 경우, 브라우저가 사용하는 컴퓨터의 메모리 한계로 인해 작동이 지연되거나 제한될 수 있습니다."
      },
      {
        "question": "연결되는 지점 사이에 구분선이나 여백을 넣을 수 있나요?",
        "answer": "예, 페이지 간 격차 여백 크기를 제어할 수 있으며 필요시 분할용 여백을 삽입할 수 있습니다."
      },
      {
        "question": "인쇄용으로도 적합한가요?",
        "answer": "결과물은 컴퓨터나 모바일 화면으로 보기에 가장 적당합니다. 인쇄 레이아웃을 최적화하려면 'PDF 모아찍기' 도구를 권장합니다."
      }
    ]
  },
  "view-metadata": {
    "title": "메타데이터 보기",
    "metaDescription": "PDF 문서의 속성을 조회합니다. 작성자, 제목, 작성 날짜 및 기타 메타데이터를 확인해 보세요.",
    "keywords": [
      "pdf 메타데이터",
      "문서 속성",
      "pdf 정보",
      "pdf 세부 정보 보기"
    ],
    "description": "\n      <p>메타데이터 보기 도구는 PDF 파일에 기록된 모든 문서 속성 및 메타데이터 정보를 보여줍니다. 제목, 작성자, 주제, 키워드, 생성 날짜, 수정 날짜 등 다양한 속성을 조회해 보세요.</p>\n      <p>문서에 포함된 내부 정보를 감사하거나 파일 내역 확인, 또는 문서의 신뢰성 및 작성 기록을 검증할 때 매우 유용합니다.</p>\n      <p>모든 조회는 외부 서버 통신 없이 귀하의 브라우저에서 직접 로컬로 수행되므로 안심하고 사용하셔도 됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "PDF 파일을 끌어서 놓거나, 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "속성 조회",
        "description": "깔끔하게 정리되어 화면에 표시되는 메타데이터 세부 목록을 확인합니다."
      },
      {
        "step": 3,
        "title": "필요 시 내보내기",
        "description": "원하는 경우 메타데이터 정보만 JSON 파일로 추출하여 내보낼 수 있습니다."
      }
    ],
    "useCases": [
      {
        "title": "문서 속성 감사",
        "description": "규정 준수 여부를 확인하기 위해 문서 내부 속성을 리뷰합니다.",
        "icon": "clipboard-check"
      },
      {
        "title": "신뢰성 검증",
        "description": "최초 생성일, 수정한 작성자 등의 기록을 추적 및 검증합니다.",
        "icon": "shield"
      },
      {
        "title": "세부 정보 입증",
        "description": "PDF 파일의 기술적인 상세 스펙 정보들을 취득합니다.",
        "icon": "info"
      }
    ],
    "faq": [
      {
        "question": "어떤 메타데이터 정보들을 볼 수 있나요?",
        "answer": "문서 제목, 작성자, 주제, 키워드, 생성 프로그램(Creator), PDF 변환 엔진(Producer), 생성/수정 날짜 및 PDF 버전 정보 등을 볼 수 있습니다."
      },
      {
        "question": "여기서 메타데이터를 직접 수정할 수도 있나요?",
        "answer": "아니요, 속성 정보를 편집하고 수정하시려면 '메타데이터 편집' 도구를 이용해 주세요."
      },
      {
        "question": "XMP 메타데이터 규격도 포함해서 보이나요?",
        "answer": "예, 표준 PDF 문서 속성 외에도 고급 XMP 규격 메타데이터까지 함께 검출하여 화면에 표시합니다."
      }
    ]
  },
  "edit-metadata": {
    "title": "메타데이터 편집",
    "metaDescription": "PDF 문서의 속성을 편집합니다. 제목, 작성자, 주제 및 키워드를 변경해 보세요.",
    "keywords": [
      "pdf 메타데이터 편집",
      "pdf 속성 변경",
      "pdf 작성자 수정",
      "문서 정보 수정"
    ],
    "description": "\n      <p>메타데이터 편집 도구를 사용하면 PDF 파일에 등록된 문서 속성을 원하는 대로 수정할 수 있습니다. 제목, 작성자, 주제, 키워드 및 기타 여러 메타데이터 필드 값을 손쉽게 편집해 보세요.</p>\n      <p>잘못 기재된 문서 정보를 정정하거나, 올바른 원작자 저작권 정보를 표시하고, 외부로 문서를 공개적으로 배포하기 위해 속성을 알맞게 정리할 때 제격입니다.</p>\n      <p>모든 편집 과정은 브라우저 로컬에서 은밀하게 진행되므로 업로드한 기밀문서가 외부로 유출될 염려가 전혀 없습니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 파일 업로드",
        "description": "PDF 파일을 끌어서 놓거나, 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "속성 값 편집",
        "description": "제목, 작성자, 주제, 키워드 등 변경을 원하는 입력 칸의 텍스트를 수정합니다."
      },
      {
        "step": 3,
        "title": "저장 및 다운로드",
        "description": "저장(Save) 버튼을 클릭하여 수정된 메타데이터를 적용하고 새 PDF 파일을 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "저작권 정보 추가",
        "description": "문서에 올바른 저자 및 생성 주체 정보를 부여합니다.",
        "icon": "user"
      },
      {
        "title": "SEO 검색 최적화",
        "description": "인터넷이나 검색 엔진에서 쉽게 찾아지도록 관련 키워드와 설명글을 명시합니다.",
        "icon": "search"
      },
      {
        "title": "배포용 문서 최종 정돈",
        "description": "타인이나 외부 기관에 공유하기 전에 메타데이터 필드를 정교하게 정리합니다.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "어떤 입력 필드를 편집할 수 있나요?",
        "answer": "제목, 작성자, 주제, 키워드, 생성기 및 생성 도구 필드를 수정할 수 있습니다."
      },
      {
        "question": "모든 메타데이터 정보를 완전히 삭제할 수도 있나요?",
        "answer": "문서에 남겨진 모든 속성 기록을 통째로 초기화하고 흔적을 없애려면 '메타데이터 제거' 도구를 사용하시는 것이 좋습니다."
      },
      {
        "question": "생성/수정 날짜 정보도 직접 수정 가능한가요?",
        "answer": "아니요. 문서의 최초 생성 및 마지막 수정 날짜 정보는 작업 시점에 맞춰 시스템 내부에서 자동으로 업데이트됩니다."
      }
    ]
  },
  "pdf-to-zip": {
    "title": "PDF를 ZIP으로 압축",
    "metaDescription": "여러 PDF 파일을 하나의 ZIP 압축 파일로 패키징합니다. PDF 파일을 압축하고 하나로 묶으세요.",
    "keywords": [
      "pdf zip 변환",
      "pdf 압축",
      "pdf 묶기",
      "pdf 아카이브"
    ],
    "description": "\n      <p>PDF를 ZIP으로 압축하는 기능은 여러 PDF 파일을 하나의 ZIP 아카이브로 패키징합니다. 더 쉽게 공유, 저장 또는 백업할 수 있도록 PDF 파일을 압축하고 묶어보세요.</p>\n      <p>이 도구는 모든 PDF 파일이 포함된 압축 아카이브를 생성하여 총 용량을 줄이고 파일 관리를 단순화합니다.</p>\n      <p>모든 처리는 브라우저 내에서 직접 수행되므로 파일의 개인정보가 안전하게 보호됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "여러 PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "아카이브 설정",
        "description": "옵션으로 아카이브 이름과 압축 수준을 설정합니다."
      },
      {
        "step": 3,
        "title": "생성 및 다운로드",
        "description": "생성 버튼을 클릭하여 ZIP 아카이브를 만듭니다."
      }
    ],
    "useCases": [
      {
        "title": "파일 공유",
        "description": "더 쉬운 공유를 위해 여러 PDF를 하나로 묶습니다.",
        "icon": "share-2"
      },
      {
        "title": "백업 생성",
        "description": "PDF 모음의 압축된 백업을 생성합니다.",
        "icon": "archive"
      },
      {
        "title": "이메일 첨부 파일",
        "description": "이메일 발송을 위해 여러 PDF를 하나의 첨부 파일로 결합합니다.",
        "icon": "mail"
      }
    ],
    "faq": [
      {
        "question": "압축률은 얼마나 되나요?",
        "answer": "ZIP 압축은 일반적으로 전체 크기를 10-30%가량 줄여줍니다."
      },
      {
        "question": "파일 수 제한이 있나요?",
        "answer": "단일 아카이브에 최대 100개의 PDF를 포함할 수 있습니다."
      },
      {
        "question": "비밀번호를 설정할 수 있나요?",
        "answer": "현재 비밀번호가 설정된 ZIP 생성은 지원하지 않습니다."
      }
    ]
  },
  "compare-pdfs": {
    "title": "PDF 비교",
    "metaDescription": "두 개의 PDF 문서를 비교합니다. 버전 간의 차이점을 강조하여 표시합니다.",
    "keywords": [
      "pdf 비교",
      "pdf 차이",
      "문서 비교",
      "버전 비교"
    ],
    "description": "\n      <p>PDF 비교 도구는 두 개의 PDF 문서를 분석하고 두 문서 사이의 차이점을 강조 표시합니다. 문서 개정본 검토, 계약서 변경 사항 확인 또는 수정 사항 검증에 이상적입니다.</p>\n      <p>렌더링된 페이지를 나란히 보고 페이지 쌍 사이를 이동하며 강조된 변경을 필터링하세요. 추출된 텍스트와 글꼴 이름을 비교합니다. 스캔 이미지 및 기타 시각적 변경은 비교하지 않습니다.</p>\n      <p>모든 비교 작업은 브라우저 내에서 직접 수행되므로 문서의 보안이 유지됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "두 개의 PDF 업로드",
        "description": "원본 PDF 문서와 수정된 PDF 문서를 업로드합니다."
      },
      {
        "step": 2,
        "title": "PDF 비교",
        "description": "렌더링된 페이지를 나란히 보고 페이지 쌍 사이를 이동하며 강조된 변경을 필터링하세요."
      },
      {
        "step": 3,
        "title": "강조 필터",
        "description": "텍스트 변경 사항 · 글꼴 변경 · 머리글과 바닥글 · 이동한 텍스트"
      }
    ],
    "useCases": [
      {
        "title": "계약서 검토",
        "description": "계약서 버전을 비교하여 변경 사항을 식별합니다.",
        "icon": "file-text"
      },
      {
        "title": "문서 개정",
        "description": "문서 버전 간의 수정 사항을 검토합니다.",
        "icon": "git-compare"
      },
      {
        "title": "품질 보증",
        "description": "의도한 변경 사항만 반영되었는지 확인합니다.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "어떤 종류의 차이점이 감지되나요?",
        "answer": "텍스트 변경 사항 · 글꼴 변경 · 머리글과 바닥글 · 이동한 텍스트"
      },
      {
        "question": "스캔된 문서도 비교할 수 있나요?",
        "answer": "추출된 텍스트와 글꼴 이름을 비교합니다. 스캔 이미지 및 기타 시각적 변경은 비교하지 않습니다."
      },
      {
        "question": "시각적 비교도 가능한가요?",
        "answer": "렌더링된 페이지를 나란히 보고 페이지 쌍 사이를 이동하며 강조된 변경을 필터링하세요. 추출된 텍스트와 글꼴 이름을 비교합니다. 스캔 이미지 및 기타 시각적 변경은 비교하지 않습니다."
      }
    ]
  },
  "posterize-pdf": {
    "title": "PDF 포스터 인쇄(분할)",
    "metaDescription": "대형 PDF 페이지를 인쇄 가능한 여러 타일로 분할합니다. PDF 페이지로 포스터를 제작하세요.",
    "keywords": [
      "pdf 포스터화",
      "pdf 타일 분할",
      "대형 인쇄",
      "pdf 포스터"
    ],
    "description": "\n      <p>PDF 포스터 인쇄 도구는 대형 PDF 페이지를 일반 프린터로 인쇄할 수 있는 작은 타일로 분할하여 포스터로 조립할 수 있게 합니다. 대형 다이어그램, 지도 또는 미술 작품을 인쇄할 때 완벽합니다.</p>\n      <p>조립이 쉽도록 그리드 크기와 겹침(오버랩) 영역을 설정하세요. 도구가 대상 출력 크기에 맞춰 타일 치수를 자동으로 계산합니다.</p>\n      <p>모든 처리는 브라우저에서 로컬로 진행되므로 문서의 개인정보가 보장됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "대형 규격의 PDF를 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "타일 구성",
        "description": "그리드 크기, 겹침 크기 및 출력 용지 크기를 설정합니다."
      },
      {
        "step": 3,
        "title": "생성 및 다운로드",
        "description": "생성 버튼을 클릭하여 인쇄 가능한 타일을 만듭니다."
      }
    ],
    "useCases": [
      {
        "title": "포스터 인쇄",
        "description": "표준 용지로 대형 포스터를 분할 인쇄합니다.",
        "icon": "maximize-2"
      },
      {
        "title": "지도 인쇄",
        "description": "조립할 수 있도록 대형 지도를 구역별로 나누어 인쇄합니다.",
        "icon": "map"
      },
      {
        "title": "미술 작품 복제",
        "description": "PDF 아트워크에서 대형 인쇄물을 만듭니다.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "겹침(오버랩) 영역은 어느 정도로 설정해야 하나요?",
        "answer": "조립 시 정렬하기 쉽도록 10-20mm의 겹침 영역 설정을 권장합니다."
      },
      {
        "question": "재단선(Crop marks)을 추가할 수 있나요?",
        "answer": "네, 절단 및 정렬을 돕기 위해 재단선을 추가할 수 있습니다."
      },
      {
        "question": "어떤 용지 크기가 지원되나요?",
        "answer": "A4, Letter, A3 및 사용자 정의 크기가 지원됩니다."
      }
    ]
  },
  "fix-page-size": {
    "title": "페이지 크기 통일",
    "metaDescription": "PDF 페이지 크기를 표준화합니다. 모든 페이지를 균일한 크기로 변환합니다.",
    "keywords": [
      "pdf 페이지 크기 수정",
      "pdf 표준화",
      "균일한 페이지",
      "pdf 크기 조절"
    ],
    "description": "\n      <p>페이지 크기 통일 도구는 PDF의 모든 페이지를 균일한 치수로 표준화합니다. 다양한 크기가 혼재된 문서를 일관된 페이지 크기로 변환하여 전문적인 프레젠테이션이나 인쇄물로 만드세요.</p>\n      <p>표준 크기(A4, Letter 등) 중에서 선택하거나 직접 원하는 치수를 설정할 수 있습니다. 콘텐츠는 새 페이지 크기에 맞게 크기가 조정되거나 정렬됩니다.</p>\n      <p>모든 처리는 브라우저에서 로컬로 진행되어 문서의 개인정보가 보호됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "대상 크기 선택",
        "description": "표준 크기를 선택하거나 사용자 정의 크기를 입력합니다."
      },
      {
        "step": 3,
        "title": "적용 및 다운로드",
        "description": "적용을 클릭하여 페이지를 표준화하고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "인쇄 준비",
        "description": "일관된 인쇄를 위해 페이지를 표준화합니다.",
        "icon": "printer"
      },
      {
        "title": "문서 정리",
        "description": "페이지 크기가 일관되지 않은 문서를 수정합니다.",
        "icon": "file-check"
      },
      {
        "title": "전문적인 문서 작성",
        "description": "배포를 위한 일관된 규격의 문서를 생성합니다.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "기존 콘텐츠는 어떻게 처리되나요?",
        "answer": "콘텐츠는 새 페이지 크기에 맞게 축소/확대되거나 중앙에 배치됩니다."
      },
      {
        "question": "가로세로 비율(종횡비)을 유지할 수 있나요?",
        "answer": "네, 콘텐츠가 비율에 맞게 크기가 조정되도록 설정할 수 있습니다."
      },
      {
        "question": "어떤 표준 크기가 제공되나요?",
        "answer": "A4, A3, Letter, Legal 및 기타 일반적인 크기가 지원됩니다."
      }
    ]
  },
  "linearize-pdf": {
    "title": "PDF 선형화(웹 최적화)",
    "metaDescription": "빠른 웹 뷰잉을 위해 PDF를 최적화합니다. 점진적 로딩을 활성화합니다.",
    "keywords": [
      "pdf 선형화",
      "빠른 웹 보기",
      "pdf 최적화",
      "점진적 pdf"
    ],
    "description": "\n      <p>PDF 선형화 도구는 웹에서 빠르게 볼 수 있도록 문서를 최적화합니다. 선형화된 PDF는 전체 파일이 다 다운로드되기 전에도 화면에 먼저 표시되기 시작하여 사용자 경험을 개선합니다.</p>\n      <p>\"빠른 웹 보기(Fast Web View)\"로도 잘 알려진 이 최적화 기술은 웹 브라우저에서 점진적으로 로딩할 수 있도록 PDF 파일 구조를 재구성합니다.</p>\n      <p>모든 처리는 브라우저에서 로컬로 진행되어 문서가 안전하게 보호됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "선형화",
        "description": "선형화 버튼을 클릭하여 웹 뷰잉용 최적화를 실행합니다."
      },
      {
        "step": 3,
        "title": "다운로드",
        "description": "최적화된 PDF 파일을 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "웹 게시",
        "description": "웹사이트 다운로드용 PDF를 최적화합니다.",
        "icon": "globe"
      },
      {
        "title": "이메일 첨부 파일",
        "description": "수신자가 더 빠르게 열어볼 수 있는 PDF를 생성합니다.",
        "icon": "mail"
      },
      {
        "title": "온라인 문서",
        "description": "온라인 문서의 뷰잉 품질 및 로딩 속도를 향상시킵니다.",
        "icon": "cloud"
      }
    ],
    "faq": [
      {
        "question": "선형화란 무엇인가요?",
        "answer": "선형화는 웹 브라우저에서 점진적으로 데이터를 로드할 수 있도록 PDF 데이터 구조를 재배치하는 작업입니다."
      },
      {
        "question": "파일 크기가 줄어드나요?",
        "answer": "선형화를 거치면 추가적인 구조적 메타데이터로 인해 파일 크기가 미세하게 증가할 수 있습니다."
      },
      {
        "question": "모든 뷰어와 호환되나요?",
        "answer": "네, 선형화된 PDF는 모든 표준 PDF 리더에서 정상적으로 작동합니다."
      }
    ]
  },
  "page-dimensions": {
    "title": "페이지 크기 측정",
    "metaDescription": "PDF 페이지 크기를 분석합니다. 문서 내 모든 페이지의 치수를 표시합니다.",
    "keywords": [
      "pdf 페이지 크기",
      "페이지 규격",
      "pdf 측정",
      "문서 크기"
    ],
    "description": "\n      <p>페이지 규격 분석 도구는 PDF 문서 내 각 페이지의 실제 크기를 분석하여 보여줍니다. 인치, 밀리미터, 포인트 등 다양한 단위로 크기를 확인하고 비표준 크기의 페이지를 찾아낼 수 있습니다.</p>\n      <p>인쇄 준비 단계, 문서 분석, 또는 일관되지 않은 규격의 페이지를 식별할 때 유용합니다.</p>\n      <p>모든 분석은 브라우저에서 진행되므로 문서 보안이 보장됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "크기 확인",
        "description": "전체 페이지에 대해 표시된 페이지 크기를 확인합니다."
      },
      {
        "step": 3,
        "title": "보고서 내보내기",
        "description": "원하는 경우 페이지 크기 목록을 JSON으로 내보냅니다."
      }
    ],
    "useCases": [
      {
        "title": "인쇄 계획",
        "description": "인쇄하기 전에 각 페이지의 크기를 확인합니다.",
        "icon": "printer"
      },
      {
        "title": "문서 분석",
        "description": "비정상적인 크기의 페이지를 찾아냅니다.",
        "icon": "search"
      },
      {
        "title": "품질 관리",
        "description": "페이지 크기가 사양에 맞는지 검증합니다.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "어떤 단위들을 사용할 수 있나요?",
        "answer": "인치(Inches), 밀리미터(Millimeters), 센티미터(Centimeters), 포인트(Points) 단위를 지원합니다."
      },
      {
        "question": "페이지 방향도 표시되나요?",
        "answer": "네, 포트레이트(세로) 또는 랜드스케이프(가로) 방향이 함께 표시됩니다."
      },
      {
        "question": "크기가 다른 페이지들을 일괄 수정할 수 있나요?",
        "answer": "\"페이지 크기 통일\" 도구를 사용하여 일관된 크기로 조정할 수 있습니다."
      }
    ]
  },
  "remove-restrictions": {
    "title": "권한 제한 해제",
    "metaDescription": "PDF 제한 사항을 제거합니다. 인쇄, 복사 및 편집 권한을 잠금 해제합니다.",
    "keywords": [
      "pdf 제한 제거",
      "pdf 잠금 해제",
      "pdf 권한",
      "pdf 제한 해제"
    ],
    "description": "\n      <p>권한 제한 해제 도구는 인쇄, 텍스트 복사 또는 편집을 차단하는 권한 제한이 설정된 PDF의 잠금을 해제합니다. 문서 내용은 그대로 유지하면서 소유자 비밀번호(Owner Password) 제한을 제거합니다.</p>\n      <p>참고: 이 도구는 문서를 열 때 필요한 사용자 비밀번호(열기 비밀번호)는 제거할 수 없습니다. 열기 비밀번호가 걸린 파일은 \"PDF 암호 해제(Decrypt)\" 도구를 사용해야 합니다.</p>\n      <p>모든 처리는 브라우저 내에서 로컬로 진행되므로 문서는 완전히 보호됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "제한된 PDF 업로드",
        "description": "제한 설정이 적용된 PDF를 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "제한 제거",
        "description": "제거 버튼을 클릭하여 문서 제한을 해제합니다."
      },
      {
        "step": 3,
        "title": "다운로드",
        "description": "제한이 해제된 PDF 파일을 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "인쇄 활성화",
        "description": "인쇄가 차단된 PDF 파일의 차단을 해제합니다.",
        "icon": "printer"
      },
      {
        "title": "복사 활성화",
        "description": "텍스트 선택 및 복사가 가능하도록 허용합니다.",
        "icon": "copy"
      },
      {
        "title": "편집 활성화",
        "description": "문서 수정에 대한 제한을 지웁니다.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "이 작업은 합법적인가요?",
        "answer": "귀하가 소유하거나 적법한 권한을 가진 문서의 제한을 제거하는 것은 대개 합법적입니다."
      },
      {
        "question": "문서 열기 비밀번호도 제거할 수 있나요?",
        "answer": "아니요, 열기 암호가 걸린 문서는 \"PDF 암호 해제\" 도구를 사용하십시오."
      },
      {
        "question": "문서 내용에 영향이 있나요?",
        "answer": "아니요, 권한 제한만 제거되며 텍스트와 레이아웃 등 문서 내용은 변하지 않습니다."
      }
    ]
  },
  "sanitize-pdf": {
    "title": "PDF 개인정보 완전 정리",
    "metaDescription": "PDF에서 숨겨진 데이터를 제거합니다. 메타데이터, 스크립트 및 민감한 정보를 삭제하세요.",
    "keywords": [
      "pdf 정리",
      "pdf 데이터 삭제",
      "숨겨진 데이터 제거",
      "pdf 프라이버시"
    ],
    "description": "\n      <p>PDF 개인정보 완전 정리 도구는 문서에서 숨겨진 메타데이터나 잠재적으로 민감한 정보들을 지워줍니다. 메타데이터, 내장 스크립트, 첨부 파일, 주석 및 기타 숨겨진 내용들을 깔끔하게 소거합니다.</p>\n      <p>공공 배포용 문서를 준비할 때나 개인정보 보호가 중요할 때 유용하게 쓰입니다.</p>\n      <p>모든 정리 과정은 브라우저 내에서 직접 수행되므로 문서가 외부 서버로 유출되지 않습니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "제거할 항목 선택",
        "description": "삭제하고자 하는 숨겨진 데이터 유형을 선택합니다."
      },
      {
        "step": 3,
        "title": "정리 및 다운로드",
        "description": "정리 버튼을 클릭하여 PDF를 깨끗하게 청소한 후 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "공식 배포",
        "description": "대중에게 배포할 문서를 깨끗한 상태로 준비합니다.",
        "icon": "globe"
      },
      {
        "title": "개인정보 보호",
        "description": "파일을 공유하기 전에 작성자 정보 등의 개인정보를 제거합니다.",
        "icon": "shield"
      },
      {
        "title": "보안 컴플라이언스",
        "description": "기업이나 기관의 문서 취급 보안 요건을 충족합니다.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "어떤 숨겨진 데이터가 제거되나요?",
        "answer": "메타데이터, 스크립트, 첨부 파일, 주석, 양식(Form) 데이터 및 숨겨진 레이어가 제거됩니다."
      },
      {
        "question": "눈에 보이는 본문 내용도 지워지나요?",
        "answer": "아니요, 숨겨진 데이터만 삭제되며 문서상에 나타나는 가시적인 텍스트나 이미지는 보존됩니다."
      },
      {
        "question": "이 작업은 취소할 수 있나요?",
        "answer": "아니요, 삭제된 데이터는 복구할 수 없습니다. 항상 원본 파일의 백업을 보관해 두세요."
      }
    ]
  },
  "find-and-redact": localizedRedactionContent('ko', 'find-and-redact', "텍스트 찾기 및 영구 삭제(마스킹)"),
  "flatten-pdf": {
    "title": "PDF 플래트닝(병합)",
    "metaDescription": "PDF 양식(Form) 필드와 주석을 병합(Flatten)하여 텍스트 및 개체들을 수정할 수 없는 고정 상태로 전환합니다.",
    "keywords": [
      "pdf 병합",
      "양식 병합",
      "주석 병합",
      "수정 불가능한 pdf"
    ],
    "description": "\n      <p>PDF 플래트닝 도구는 입력 폼 필드나 주석(메모, 스탬프 등)과 같은 인터랙티브 요소를 정적 그래픽 콘텐츠로 변환합니다. 변환 후에도 문서는 시각적으로 동일해 보이지만 더 이상 값이나 위치를 수정할 수 없습니다.</p>\n      <p>작성이 완료된 신청서를 확정하거나, 추가된 메모들을 문서 일부분으로 고정하고 싶을 때, 혹은 무단 편집이 불가능한 문서로 만들고자 할 때 사용하면 좋습니다.</p>\n      <p>모든 작업은 브라우저 로컬에서 안전하게 처리됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "양식 필드나 주석이 들어 있는 PDF를 업로드합니다."
      },
      {
        "step": 2,
        "title": "병합 대상 선택",
        "description": "양식 필드만 병합할지, 주석만 병합할지, 또는 둘 다 병합할지 선택합니다."
      },
      {
        "step": 3,
        "title": "병합 및 다운로드",
        "description": "병합 버튼을 눌러 정적인 문서로 만든 뒤 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "양식 데이터 확정",
        "description": "입력된 신청서 양식의 값이 임의로 바뀌지 않도록 잠급니다.",
        "icon": "lock"
      },
      {
        "title": "주석 및 메모 고정",
        "description": "추가한 피드백이나 메모 주석을 인쇄물처럼 문서에 영구적으로 입힙니다.",
        "icon": "check-circle"
      },
      {
        "title": "장기 보관용 문서 제작",
        "description": "수정이 불가능한 아카이빙용 버전을 생성합니다.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "병합 처리를 되돌릴 수 있나요?",
        "answer": "아니요, 병합(Flattening)은 되돌릴 수 없는 영구 작업입니다. 원본 파일을 항상 백업해 두십시오."
      },
      {
        "question": "시각적 레이아웃이나 품질이 변하나요?",
        "answer": "아니요, 문서는 눈으로 보는 모양 그대로 유지되지만 단순히 선택이나 수정만 할 수 없는 정적 형태로 바뀝니다."
      },
      {
        "question": "파일 용량이 작아지나요?",
        "answer": "그렇습니다. 복잡한 입력 폼 등의 개체가 래스터 그래픽이나 셰이프로 병합되므로 파일 용량이 다소 축소되는 경우가 많습니다."
      }
    ]
  },
  "remove-metadata": {
    "title": "메타데이터 제거",
    "metaDescription": "PDF 파일에서 메타데이터를 지웁니다. 작성자, 생성 날짜, 문서 속성 등을 소거합니다.",
    "keywords": [
      "pdf 메타데이터 삭제",
      "메타데이터 제거",
      "pdf 개인정보 보호",
      "익명 pdf"
    ],
    "description": "\n      <p>메타데이터 제거 도구는 PDF 파일 내부에 숨어 있는 모든 문서 속성 및 메타데이터 정보를 완전히 소거합니다. 작성자 이름, 작성일, 사용 소프트웨어 정보 및 기타 추적 가능한 속성을 지웁니다.</p>\n      <p>문서를 익명으로 공유하고 싶거나, 내부 메타데이터 유출로 인한 보안 위험을 차단하고 싶을 때 매우 중요합니다.</p>\n      <p>모든 처리는 로컬 브라우저에서 수행되므로 외부로 정보가 새어나가지 않습니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "메타데이터 제거",
        "description": "클릭하여 모든 메타데이터를 삭제합니다."
      },
      {
        "step": 3,
        "title": "다운로드",
        "description": "메타데이터가 깨끗하게 지워진 PDF를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "프라이버시 보호",
        "description": "문서 공유 전 개인 신원 정보를 제거합니다.",
        "icon": "shield"
      },
      {
        "title": "익명 문서 작성",
        "description": "작성자 귀속 정보가 없는 깨끗한 문서를 완성합니다.",
        "icon": "user-x"
      },
      {
        "title": "안전한 대외 배포",
        "description": "회사 내부 기밀이나 작성 내역 메타데이터가 담기지 않은 배포용 문서를 만듭니다.",
        "icon": "send"
      }
    ],
    "faq": [
      {
        "question": "정확히 어떤 데이터가 지워지나요?",
        "answer": "문서 제목, 작성자, 주제, 키워드, 생성일/수정일, 작성 프로그램 및 생산자 정보가 삭제됩니다."
      },
      {
        "question": "XMP 메타데이터도 함께 제거되나요?",
        "answer": "네, 표준 PDF 메타데이터 속성뿐만 아니라 XMP 메타데이터 스트림도 함께 지워집니다."
      },
      {
        "question": "본문 텍스트도 지워지나요?",
        "answer": "아니요, 메타데이터 정보만 삭제되며 본문의 글이나 그림 등 문서 내용은 일절 영향을 받지 않습니다."
      }
    ]
  },
  "change-permissions": {
    "title": "권한 변경",
    "metaDescription": "PDF 문서의 상세 권한을 변경합니다. 인쇄, 복사, 편집에 대한 접근을 제한하거나 허용하도록 제어합니다.",
    "keywords": [
      "pdf 권한 설정",
      "pdf 액세스 제어",
      "pdf 편집 제한",
      "pdf 보안"
    ],
    "description": "\n      <p>권한 변경 도구는 PDF 파일의 보안 및 접근 설정(사용 권한)을 수정합니다. 다른 사람이 문서를 인쇄, 텍스트 복사, 수정, 또는 주석 추가를 할 수 있는지 여부를 개별적으로 설정할 수 있습니다.</p>\n      <p>이러한 권한 제한 설정을 적용하려면 '소유자 비밀번호(Owner Password)'를 설정해야 합니다. 지정된 비밀번호 없이는 제한을 임의로 해제할 수 없습니다.</p>\n      <p>모든 처리는 로컬 브라우저 환경에서 작동하므로 문서가 완벽하게 보호됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다."
      },
      {
        "step": 2,
        "title": "권한 구성",
        "description": "인쇄, 텍스트 복사, 내용 수정 및 주석 작성 허용 여부를 체크합니다."
      },
      {
        "step": 3,
        "title": "적용 및 다운로드",
        "description": "소유자 비밀번호를 입력하고 적용을 완료한 뒤 제한된 PDF를 내려받습니다."
      }
    ],
    "useCases": [
      {
        "title": "복사 방지",
        "description": "텍스트 무단 복사를 방지하여 지적 재산을 보호합니다.",
        "icon": "copy"
      },
      {
        "title": "인쇄 제어",
        "description": "문서 인쇄를 허용하거나 제한합니다.",
        "icon": "printer"
      },
      {
        "title": "편집 제한",
        "description": "문서에 대한 임의 수정을 방지합니다.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "비밀번호가 필수인가요?",
        "answer": "네, 권한 제한을 적용하려면 소유자 비밀번호를 지정해야 합니다."
      },
      {
        "question": "적용한 권한을 지울 수 있나요?",
        "answer": "네, 소유자 비밀번호를 입력하거나 '권한 제한 해제' 도구를 사용하여 제거할 수 있습니다."
      },
      {
        "question": "모든 PDF 뷰어와 호환되나요?",
        "answer": "대부분의 표준 PDF 리더는 권한 설정을 준수하지만, 일부 프로그램에서는 이를 적용하지 않을 수 있습니다."
      }
    ]
  },
  "pdf-to-markdown": {
    "title": "PDF를 마크다운으로 변환",
    "metaDescription": "PDF 문서를 Markdown 파일로 변환합니다. 텍스트를 추출하고 제목, 목록 등의 포맷 스타일을 최대한 보존합니다.",
    "keywords": [
      "pdf 마크다운 변환",
      "pdf md 변환",
      "pdf 텍스트 추출",
      "마크다운 변환기",
      "pdf 텍스트 변환"
    ],
    "description": "\n      <p>PDF를 마크다운으로 변환해 주는 도구는 PDF 문서를 깨끗하고 구조화된 Markdown(.md) 텍스트 파일로 바꿔줍니다. 텍스트 내용을 스마트하게 추출하면서 글자 크기나 배치에 근거해 제목(Header), 목록(List), 문단 등의 기본 구조를 보존하려고 시도합니다.</p>\n      <p>매뉴얼이나 보고서 등의 PDF 정보를 마크다운 기반의 노트 작성 앱, 블로그, CMS(콘텐츠 관리 시스템) 등으로 옮길 때 최고의 효율을 냅니다.</p>\n      <p>모든 처리는 브라우저 로컬에서 이루어지므로 문서 유출 걱정이 없습니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "마크다운으로 바꾸고자 하는 PDF 문서를 끌어다 놓거나 선택합니다."
      },
      {
        "step": 2,
        "title": "옵션 설정",
        "description": "변환할 페이지 범위, 페이지 번호 포함 여부, 줄 바꿈 처리 규칙을 지정합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "변환하기 버튼을 눌러 결과물 마크다운 파일을 생성하고 내려받습니다."
      }
    ],
    "useCases": [
      {
        "title": "기술 문서 작성",
        "description": "기존 PDF 기술 가이드를 개발 문서로 관리하기 위해 마크다운으로 전환합니다.",
        "icon": "file-text"
      },
      {
        "title": "노트 정리 및 데이터 보관",
        "description": "책이나 논문 PDF 내용을 에버노트, 옵시디언 등 개인 메모 시스템으로 가져옵니다.",
        "icon": "edit-3"
      },
      {
        "title": "콘텐츠 이전",
        "description": "PDF 보도자료나 간행물을 마크다운 기반의 웹사이트 게시물로 손쉽게 이관합니다.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "문서 서식이 그대로 유지되나요?",
        "answer": "도구가 폰트 크기나 구조를 읽어 제목이나 글머리 기호 목록을 인식하지만, 표나 다단 레이아웃 등 복잡한 요소는 수동 수정이 필요할 수 있습니다."
      },
      {
        "question": "일부 페이지만 골라 변환할 수도 있나요?",
        "answer": "네, \"1-3, 5, 7\"과 같이 페이지 범위를 기입하여 원하는 페이지만 변환할 수 있습니다."
      },
      {
        "question": "스캔 이미지로 구성된 PDF도 지원되나요?",
        "answer": "글자 코드가 없는 스캔 PDF는 바로 텍스트 추출이 어렵습니다. 당사의 OCR 도구로 글자를 읽어낸 다음 마크다운 변환을 진행하세요."
      }
    ]
  },
  "pdf-booklet": {
    "title": "PDF 소책자 만들기(페이지 배치)",
    "metaDescription": "출력 및 제본이 가능하도록 PDF 소책자 레이아웃을 생성합니다. 여러 그리드 모드로 중철 제본에 맞게 페이지를 조립 및 배열합니다.",
    "keywords": [
      "pdf 소책자",
      "소책자 인쇄",
      "중철 제본",
      "페이지 임포지션",
      "책자 페이지 배열"
    ],
    "description": "\n      <p>PDF 소책자 제작 도구는 PDF 문서의 페이지 순서를 인쇄 후 반으로 접었을 때 올바른 순서가 되도록 소책자(Booklet) 레이아웃으로 편집(임포지션)해 줍니다. 팸플릿, 카탈로그, 매뉴얼, 독립 출판물 등의 제작에 유용합니다.</p>\n      <p>다양한 다중 페이지 배치 그리드(1x2, 2x2, 2x4, 4x4)와 출력 용지 사양, 회전 모드를 제공합니다. 수동 계산 없이 자동으로 최적의 제본 순서가 계산됩니다.</p>\n      <p>모든 처리는 사용자 컴퓨터 브라우저에서 수행됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "소책자 사양으로 바꿀 문서를 업로드합니다."
      },
      {
        "step": 2,
        "title": "레이아웃 선택",
        "description": "그리드 개수, 인쇄용지 크기, 방향 및 회전 옵션을 상세히 지정합니다."
      },
      {
        "step": 3,
        "title": "제작 및 다운로드",
        "description": "출력용 소책자 PDF를 생성하고 내려받아 인쇄합니다."
      }
    ],
    "useCases": [
      {
        "title": "안내장 및 브로셔",
        "description": "기본 A4 문서를 접어서 펼쳐볼 수 있는 안내장 형태로 인쇄 준비합니다.",
        "icon": "book-open"
      },
      {
        "title": "독립 출판 소책자",
        "description": "페이지 순서가 알맞게 섞인 인쇄용 원고(터잡기)를 손쉽게 마련합니다.",
        "icon": "book"
      },
      {
        "title": "행사 일정표 제작",
        "description": "행사장에서 나눠줄 소형 소책자 인쇄본을 기획 및 출력합니다.",
        "icon": "calendar"
      }
    ],
    "faq": [
      {
        "question": "중철 제본(Saddle-stitch)이 무엇인가요?",
        "answer": "종이를 반으로 접은 뒤 그 접힌 선(책등)에 스테이플러나 실을 엮어 책을 만드는 대중적인 제본 방식입니다."
      },
      {
        "question": "그리드 배치는 어떤 것을 골라야 하나요?",
        "answer": "가장 기본은 한 장에 두 쪽이 들어가는 '1x2' 모드입니다. 종이를 절약하고 작게 출력할 때는 '2x2' 이상의 축소 다중 인쇄 모드를 사용합니다."
      },
      {
        "question": "배치된 모양을 미리 볼 수 있나요?",
        "answer": "네, 최종 PDF를 내려받기 전에 도구 내에서 시각적인 레이아웃 미리보기를 제공합니다."
      }
    ]
  },
  "rasterize-pdf": {
    "title": "PDF 이미지 래스터화",
    "metaDescription": "PDF 페이지를 고화질 이미지로 변환합니다. 맞춤형 DPI 설정으로 PNG, JPEG, WebP 포맷으로 내보내세요.",
    "keywords": [
      "pdf 래스터화",
      "pdf 이미지 변환",
      "pdf png 변환",
      "pdf jpeg 변환",
      "pdf 웹 이미지"
    ],
    "description": "\n      <p>PDF 이미지 래스터화 도구는 PDF 문서의 각 페이지를 고해상도 비트맵 이미지로 변환합니다. DPI 해상도 및 압축 화질을 사용자가 자유롭게 제어하면서 PNG, JPEG, WebP 확장자로 저장할 수 있습니다.</p>\n      <p>문서 미리보기 썸네일 작성, 소셜 미디어용 이미지 클립 생성, 폰트 유실 방지를 위한 이미지형 아카이빙에 적합합니다. 일괄 변환 및 개별 다운로드를 지원합니다.</p>\n      <p>모든 변환 처리는 브라우저 로컬에서 실행됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "변환하고자 하는 PDF 파일을 끌어다 놓습니다."
      },
      {
        "step": 2,
        "title": "출력 설정",
        "description": "원하는 화질의 해상도(DPI), 저장할 이미지 포맷(PNG/JPEG/WebP), 변환할 범위를 설정합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "페이지들을 이미지로 변환하고, 각 파일로 받거나 하나의 ZIP 압축 파일로 묶어 내려받습니다."
      }
    ],
    "useCases": [
      {
        "title": "소셜 미디어 공유",
        "description": "PDF 발표 자료나 문서를 인스타그램, 페이스북 카드뉴스용 이미지로 변환합니다.",
        "icon": "share-2"
      },
      {
        "title": "썸네일 및 프리뷰",
        "description": "웹사이트 게시용 PDF 문서의 대표 이미지나 미리보기 썸네일을 생성합니다.",
        "icon": "image"
      },
      {
        "title": "웹 게시용 포맷",
        "description": "PDF 원본 배포 대신 웹 브라우저에서 바로 열리는 친화적 이미지 형태로 바꿉니다.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "DPI 해상도는 얼마로 잡는 것이 좋나요?",
        "answer": "화면 확인용은 72 DPI, 범용은 150 DPI, 고화질 인쇄물 수준의 품질을 얻으려면 300 DPI 이상을 추천합니다."
      },
      {
        "question": "어느 이미지 형식이 가장 적합한가요?",
        "answer": "배경이 투명하거나 글자가 선명해야 하면 PNG를, 파일 크기를 줄이려면 JPEG를, 차세대 웹 압축률이 필요하면 WebP를 사용하세요."
      },
      {
        "question": "원하는 페이지만 골라서 바꿀 수 있나요?",
        "answer": "네, \"1-5, 8, 10-15\" 등의 양식으로 페이지 영역을 지정할 수 있습니다."
      }
    ]
  },
  "markdown-to-pdf": {
    "title": "마크다운을 PDF로 변환",
    "metaDescription": "Markdown 파일을 수려한 스타일의 PDF 문서로 변환합니다. GitHub 스타일 마크다운 및 코드 구문 강조를 지원합니다.",
    "keywords": [
      "마크다운 pdf 변환",
      "md pdf 변환",
      "gfm pdf 변환",
      "마크다운 문서화"
    ],
    "description": "\n      <p>마크다운을 PDF로 변환하는 도구는 작성하신 Markdown(.md) 텍스트를 깔끔하고 현대적인 디자인의 PDF 문서로 조판해 줍니다. 일반 마크다운 표준은 물론 표(Table), 작업 목록(Task list), 소스코드 블록을 포함한 GitHub GFM 형식을 지원합니다.</p>\n      <p>다양한 테마 스타일(라이트, 다크, GitHub 테마)을 제공하며, 용지 규격과 상하좌우 여백을 조절할 수 있습니다. 특히 코드 블록은 언어별 신택스 하이라이팅이 적용되어 뛰어난 가독성을 보장합니다.</p>\n      <p>모든 변환 과정은 개인용 PC 브라우저 내부에서 완료됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "마크다운 파일 업로드",
        "description": ".md 또는 .markdown 확장자 파일을 선택하여 업로드합니다."
      },
      {
        "step": 2,
        "title": "테마 및 스타일 설정",
        "description": "시각적 테마 스타일을 선택하고 페이지 크기 및 여백 규격을 조정합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "깔끔하게 꾸며진 PDF 파일을 렌더링하고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "개발 가이드 및 문서 작성",
        "description": "프로젝트 README 파일이나 위키 문서를 즉시 공유 및 출력 가능한 PDF 문서로 만듭니다.",
        "icon": "file-text"
      },
      {
        "title": "작성 노트 내보내기",
        "description": "마크다운으로 작성한 학습노트나 메모를 친구나 동료에게 보낼 수 있도록 깔끔한 PDF로 출력합니다.",
        "icon": "edit-3"
      },
      {
        "title": "보고서 발행",
        "description": "텍스트 기반 보고서 원고를 세련된 표와 인쇄 레이아웃을 갖춘 공식 보고서 문서로 렌더링합니다.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "GitHub 스타일(GFM)의 표나 체크리스트도 구현되나요?",
        "answer": "네, 표(Table), 체크리스트 박스, 취소선 등 GFM의 확장 문법들이 오류 없이 정교하게 구현됩니다."
      },
      {
        "question": "출력 디자인을 추가로 수정할 수 있나요?",
        "answer": "기본 제공 프리셋 테마를 골라 쓰시거나, 고급 사용자의 경우 맞춤 CSS를 직접 편집하여 전체 스타일을 지정할 수 있습니다."
      },
      {
        "question": "코드 블록의 글자 색도 예쁘게 나오나요?",
        "answer": "네, 주요 프로그래밍 언어의 코드 문법을 자동으로 분석하여 보기 좋게 색상을 입혀주는 하이라이팅 기능이 적용됩니다."
      }
    ]
  },
  "cbz-to-pdf": {
    "title": "CBZ를 PDF로 변환",
    "metaDescription": "만화책 압축 파일(CBZ)을 PDF로 일괄 변환합니다. 디지털 만화책의 화질과 페이지 순서를 원본 그대로 보존합니다.",
    "keywords": [
      "cbz pdf 변환",
      "만화책 pdf 변환",
      "cbz 변환",
      "디지털 만화 변환"
    ],
    "description": "\n      <p>CBZ를 PDF로 변환하는 도구는 만화책 전용 아카이브 포맷인 CBZ 파일을 범용 PDF 문서로 마이그레이션해 줍니다. CBZ 내부에 들어 있는 그림 파일들을 신속하게 추출한 다음, 페이지 순서가 흐트러지지 않게 맞추어 한 권의 PDF 책으로 제본합니다.</p>\n      <p>그림 고유의 해상도를 유지하여 담는 방식이나, 특정 태블릿/만화 뷰어 규격의 페이지 크기에 맞추는 옵션을 선택할 수 있습니다. CBZ를 지원하지 않고 PDF만 지원하는 구형 e-북 리더기 등에서 만화를 볼 때 매우 유용합니다.</p>\n      <p>업로드 없이 브라우저 내에서만 안전하게 실행됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "CBZ 파일 업로드",
        "description": ".cbz 확장자를 가진 만화 파일 하나를 업로드합니다."
      },
      {
        "step": 2,
        "title": "옵션 지정",
        "description": "원하는 페이지 규격과 압축 이미지 품질을 선택합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "PDF 파일로 빌드를 완료한 후 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "전자책 단말기 호환",
        "description": "PDF만 읽을 수 있는 e-북 리더나 스마트 기기에서 만화를 감상할 수 있게 돕습니다.",
        "icon": "book"
      },
      {
        "title": "디지털 만화 아카이빙",
        "description": "소장 중인 CBZ 형태 만화 컬렉션을 보다 관리가 편리한 PDF 아카이브로 통합합니다.",
        "icon": "archive"
      },
      {
        "title": "실물 인쇄 준비",
        "description": "디지털 만화 원고를 책자로 종이 인쇄하기 위해 PDF 규격으로 전환합니다.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "CBZ 형식이 정확히 무엇인가요?",
        "answer": "CBZ는 만화책의 각 페이지 그림 파일들을 ZIP 방식으로 묶고 확장자명만 .cbz로 변경한 대중적인 디지털 만화 공유 규격입니다."
      },
      {
        "question": "그림 화질 저하가 있나요?",
        "answer": "아니요, 기본 설정 시 이미지를 압축하지 않고 원본 품질 그대로 PDF 문서 내부에 직접 주입하므로 원본 화질이 유지됩니다."
      },
      {
        "question": "만화 폴더 안의 하위 폴더에 있는 이미지도 정렬되나요?",
        "answer": "네, 압축 파일 속 모든 깊이의 하위 폴더들을 탐색하여 그 안에 위치한 이미지 파일명 순서대로 정확하게 정렬하여 구성합니다."
      }
    ]
  },
  "font-to-outline": {
    "title": "폰트 아웃라인 변환",
    "metaDescription": "PDF 문서 내의 글꼴을 고화질 이미지 형태(아웃라인)로 완전히 변환하여 폰트 종속성을 없앱니다. 모든 시스템에서 글꼴 유실 없이 동일하게 보여줍니다.",
    "keywords": [
      "폰트 아웃라인",
      "글꼴 깨기",
      "윤곽선 변환",
      "폰트 유실 방지",
      "pdf 폰트 병합",
      "pdf 아웃라인"
    ],
    "description": "\n      <p>폰트 아웃라인 변환 도구는 PDF의 각 페이지를 고화질 이미지 형태(래스터 콘텐츠)로 완전히 다시 렌더링함으로써 문서 내부의 모든 글꼴(Font) 파일 임베딩 정보를 제거합니다. 이 작업을 거치면 해당 폰트가 설치되어 있지 않은 모바일이나 다른 컴퓨터 기기에서도 글자 깨짐이나 대체 폰트 적용 없이 원본 디자인 그대로 표시됩니다.</p>\n      <p>각 페이지를 지정한 해상도(150~600 DPI)로 렌더링하여 폰트 의존성을 끊되 완벽한 시각 품질을 구현합니다. 만약 텍스트 드래그 및 검색 기능이 계속 필요하다면 '투명 텍스트 레이어 유지' 옵션을 켤 수 있습니다.</p>\n      <p>이는 인쇄소에 최종 출판용 파일을 보낼 때 발생하는 폰트 에러를 방지하고, 폰트 저작권 라이선스 충돌 문제를 안전하게 우회하고 싶을 때 매우 유용합니다. 모든 처리는 브라우저 로컬에서 자체 수행됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "글꼴을 깨트려 아웃라인으로 변환할 PDF 파일을 선택합니다."
      },
      {
        "step": 2,
        "title": "품질 해상도 구성",
        "description": "출력 DPI를 선택합니다 (인쇄용은 300 DPI 추천, 화면 확인용은 150 DPI). 검색용 텍스트를 보존하려면 관련 항목을 체크합니다."
      },
      {
        "step": 3,
        "title": "변환 및 다운로드",
        "description": "프로세스를 시작하고 글꼴 정보로부터 자유로워진 최종 PDF를 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "인쇄 출력소 전송 준비",
        "description": "인쇄소의 시스템 폰트 유실로 인해 인쇄물 글자가 다르게 나오는 사고를 원천 방지합니다.",
        "icon": "printer"
      },
      {
        "title": "완벽한 디자인 유지 배포",
        "description": "어떤 운영체제나 PDF 앱에서 열어보든 제작자가 기획한 서체와 레이아웃 그대로 화면에 나타나게 보장합니다.",
        "icon": "share-2"
      },
      {
        "title": "서체 저작권 분쟁 예방",
        "description": "임베딩된 폰트 파일 자체를 제거하여 폰트 라이선스 규정 위반 소지를 사전에 제거합니다.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "어떤 메커니즘으로 작동하나요?",
        "answer": "페이지를 고해상도 이미지(사용자가 정한 DPI)로 정밀하게 찍어낸 후, 이 이미지들을 결합하여 새로운 PDF 문서를 다시 조판합니다. 이 과정에서 글자 폰트 정보는 모두 제거되지만 시각적 외형은 똑같이 복원됩니다."
      },
      {
        "question": "변환 후에도 본문 글자 검색이나 복사가 되나요?",
        "answer": "기본 설정으로는 불가능하며 텍스트가 그림의 일부가 됩니다. 단, '가독/검색용 투명 텍스트 레이어 유지' 옵션을 체크하시면 글꼴 종속성은 없애면서 내부적으로 검색과 복사 기능을 남길 수 있습니다."
      },
      {
        "question": "DPI 수치는 어떻게 설정하는 것이 좋습니까?",
        "answer": "고급 실물 인쇄용 규격은 300 DPI 설정을 강력 권장합니다. 일반 컴퓨터/모바일 디바이스 뷰잉용은 150 DPI로 충분하며, 600 DPI는 최고 정밀도 출력을 보장하지만 파일 용량이 과하게 커질 수 있습니다."
      },
      {
        "question": "파일의 용량이 커지나요?",
        "answer": "DPI 설정과 파일 원고 성격에 좌우됩니다. 150 DPI 변환 시에는 대개 크기가 많이 작아지고, 300 DPI는 비슷하거나 다소 늘어날 수 있습니다. 내부 압축 처리가 기본 적용됩니다."
      },
      {
        "question": "작업을 되돌릴 수 있나요?",
        "answer": "아니요, 물리적인 폰트 파일 및 텍스트 데이터 정보가 사라지므로 복구가 불가능합니다. 추후 텍스트 수정을 해야 한다면 반드시 원본 파일을 백업해 두세요."
      },
      {
        "question": "일러스트나 도형 같은 벡터 그래픽 요소는 어떻게 되나요?",
        "answer": "PDF에 담긴 패스(Line, Curve) 등 벡터 요소들 역시 텍스트 글자들과 마찬가지로 지정 해상도의 래스터 그래픽으로 전환됩니다. 화질 저하는 선택하신 DPI에 맞춰 최소화됩니다."
      }
    ]
  },
  "extract-tables": {
    "title": "PDF에서 표 추출",
    "metaDescription": "PDF 문서에 포함된 테이블(표) 데이터를 감지하여 추출합니다. JSON, Markdown, CSV 등 구조화된 포맷으로 내보내세요.",
    "keywords": [
      "표 추출",
      "pdf 테이블 추출",
      "pdf csv 변환",
      "pdf 엑셀 변환",
      "표 감지"
    ],
    "description": "\n      <p>PDF에서 표 추출 도구는 PDF 본문 내에 배치된 다양한 표 형식의 데이터를 스마트하게 감지하여 데이터 활용이 쉬운 형태의 코드로 파싱해 줍니다. 프로그래밍용 JSON, 웹 문서용 마크다운(Markdown), 엑셀이나 스프레드시트 분석용 CSV 형식을 선택하여 다운로드할 수 있습니다.</p>\n      <p>지능형 행/열 식별 알고리즘을 사용하므로, 복잡하고 선이 뚜렷하지 않은 도표 구조도 상당 수준 잡아낼 수 있습니다. 추출 범위를 한정하거나 감지 임계값을 세부 조절할 수도 있습니다.</p>\n      <p>안전을 위해 모든 처리는 로컬 브라우저 내부에서 진행됩니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "표가 들어있는 PDF 문서를 드래그 앤 드롭으로 업로드합니다."
      },
      {
        "step": 2,
        "title": "검출 조건 구성",
        "description": "분석할 페이지 범위와 추출할 최소 행/열의 개수 임계치를 지정합니다."
      },
      {
        "step": 3,
        "title": "추출 및 내보내기",
        "description": "원하는 추출 포맷(JSON/Markdown/CSV)을 클릭하고 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "비즈니스 데이터 분석",
        "description": "PDF 보고서 내 수많은 실적 지표 표들을 엑셀(CSV)이나 데이터베이스로 옮겨 가공합니다.",
        "icon": "bar-chart"
      },
      {
        "title": "보고서 데이터 통합",
        "description": "여러 PDF 참고 문서에서 핵심 지표 테이블을 빠르게 긁어모아 재조합합니다.",
        "icon": "file-text"
      },
      {
        "title": "개발 문서 기술화",
        "description": "PDF에 정형화되어 수록된 명세 스펙 시트를 개발 마크다운 문서 규격으로 즉시 이전합니다.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "복잡하게 결합된 병합 셀 형태의 표도 완벽히 분리하나요?",
        "answer": "기본적인 가로세로 격자형 표에서 최고의 인식률을 보입니다. 행/열이 복잡하게 얽히고 병합된 경우 추출 후 스프레드시트에서 약간의 수동 정리가 필요할 수 있습니다."
      },
      {
        "question": "표를 제대로 감지하지 못할 때는 어떻게 해야 하나요?",
        "answer": "설정 창에서 '최소 열/행 수 임계치' 조절 바를 줄여 보시거나, 해당 PDF 본문의 표가 실제 텍스트 테이블 데이터가 맞는지(단순 이미지 컷이 아닌지) 검사해 보십시오."
      },
      {
        "question": "필요한 페이지만 콕 집어서 추출 가능한가요?",
        "answer": "네, 페이지 범위를 지정하여 관련 도표가 존재하는 페이지만 골라 스캔할 수 있습니다."
      }
    ]
  },
  "ocg-manager": {
    "title": "PDF 레이어 관리자(OCG)",
    "metaDescription": "PDF 레이어(Optional Content Groups)를 관리합니다. PDF 내 모든 레이어를 확인하고, 가시성을 전환하거나, 이름을 변경 및 삭제할 수 있습니다.",
    "keywords": [
      "pdf 레이어",
      "ocg 관리자",
      "선택적 콘텐츠 그룹",
      "pdf 도면 레이어",
      "pdf 레이어 켜기끄기"
    ],
    "description": "\n      <p>PDF 레이어 관리자 도구는 PDF 내부의 OCG(Optional Content Groups) 레이어를 직관적으로 조회하고 통제할 수 있게 돕습니다. OCG 레이어는 주로 복잡한 CAD 설계도, 수치지도, 그래픽 일러스트 문서 등에서 특정 개체 그룹들을 켜고 끌 수 있게 묶어둔 구성 요소를 뜻합니다.</p>\n      <p>문서에 포함된 전체 레이어 리스트를 파악하고, 각 레이어의 화면 가시성(보이기/숨기기)을 켜거나 끌 수 있으며, 불필요한 레이어를 지우거나 이름도 수정할 수 있습니다. 건축 설계 도면, 기계 조립도, 인쇄 판판용 원본 데이터 가공에 꼭 필요한 전용 도구입니다.</p>\n      <p>모든 처리는 로컬 브라우저에서 안전하게 실행되므로 보안에 민감한 도면 문서도 걱정 없이 작업하세요.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 업로드",
        "description": "OCG 레이어가 적용된 설계도 PDF나, 새로 레이어를 가공할 PDF를 업로드합니다."
      },
      {
        "step": 2,
        "title": "레이어 감지",
        "description": "프로그램이 PDF 파일을 해석하여 레이어 이름과 현재 보기/숨김 설정 상태를 리스트업합니다."
      },
      {
        "step": 3,
        "title": "레이어 편집 관리",
        "description": "보이기 토글 스위치 조작, 레이어 명칭 변경, 추가 생성 및 필요 없는 레이어 영구 삭제 작업을 수행합니다."
      },
      {
        "step": 4,
        "title": "저장 및 출력",
        "description": "레이어 레이아웃 편집본을 적용하여 최종 PDF를 내보내기하고 저장합니다."
      }
    ],
    "useCases": [
      {
        "title": "설계 기술 도면 편집",
        "description": "CAD에서 내보낸 PDF 도면에서 치수선, 한글 주석, 혹은 불필요한 레이어들을 끄고 켜서 원하는 뷰로 연출합니다.",
        "icon": "ruler"
      },
      {
        "title": "지도 그래픽 커스텀",
        "description": "지도 PDF 내 등고선, 도로망, 지명 라벨 레이어 등을 선택적으로 켜서 맞춤형 약도를 생성합니다.",
        "icon": "map"
      },
      {
        "title": "인쇄 판본 분리 준비",
        "description": "인쇄소 판화 분판 작업용 레이어를 켜고 끄며 결과물을 검수하고 정리합니다.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "PDF OCG 레이어란 무엇인가요?",
        "answer": "선택적 콘텐츠 그룹(Optional Content Groups)의 약자로, PDF 뷰어상에서 껐다 켰다 할 수 있는 '투명한 겹침 레이어'들을 뜻합니다. 주로 건축, GIS 지도, 고화질 드로잉 문서 등에 적용됩니다."
      },
      {
        "question": "제가 올린 PDF에선 레이어가 감지되지 않습니다.",
        "answer": "모든 PDF 파일에 레이어가 심어져 있는 것은 아닙니다. 설계용 캐드 프로그램이나 전문 벡터 일러스트레이터(Adobe Illustrator 등)에서 레이어 정보를 담아 출력한 PDF 파일에만 OCG 레이어가 존재합니다."
      },
      {
        "question": "레이어 설정을 변경하면 원본 개체 데이터가 유실되나요?",
        "answer": "아니요, 레이어 보이기/숨기기 토글은 말 그대로 눈에 보여줄지 말지를 제어하는 지시어일 뿐입니다. 내장된 물리 텍스트나 기하 벡터 라인은 파일 속에 안전하게 그대로 잔존합니다."
      }
    ]
  },
  "pdf-reader": {
    "title": "PDF 리더",
    "metaDescription": "무료 온라인 PDF 리더. 별도의 프로그램 설치 없이 웹 브라우저 안에서 편리하게 PDF 문서를 조회, 확대, 회전 및 인쇄하세요.",
    "keywords": [
      "pdf 리더",
      "pdf 뷰어",
      "pdf 온라인 보기",
      "pdf 읽기",
      "브라우저 pdf 뷰어"
    ],
    "description": "\n      <p>온라인 PDF 리더는 추가 소프트웨어 다운로드나 결제 없이 브라우저 내에서 즉석으로 PDF를 펼쳐서 읽고 탐색할 수 있는 다기능 뷰어입니다. 간편하게 PDF 파일만 끌어다 올리면 바로 독서 모드가 시작됩니다.</p>\n      <p>원활한 독서를 위해 페이지 이동 제어, 확대 및 축소, 보기 각도 회전, 전체화면 방해금지 뷰 모드를 완벽 지원합니다. 인쇄 장치 전송이나 오프라인 보관을 위한 로컬 다운로드도 손쉽게 구성되어 있습니다.</p>\n      <p>클라우드로 업로드되지 않고 전적으로 사용자 컴퓨터 내에서 구동되므로, 문서 유출이나 개인정보 우려 없이 안심하고 열람하셔도 좋습니다.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF 열기",
        "description": "PDF 파일을 드래그 앤 드롭하거나 선택하여 즉시 독서 뷰어 창에 띄웁니다."
      },
      {
        "step": 2,
        "title": "페이지 탐색",
        "description": "페이지 앞/뒤 컨트롤러를 사용하거나 상단 바에 특정 페이지 숫자를 기입하여 즉각 워프합니다."
      },
      {
        "step": 3,
        "title": "시각 뷰 조절",
        "description": "확대/축소 조작, 화면 회전 기능 또는 전체화면 모드를 켜서 나에게 최적화된 독서 환경을 연출합니다."
      },
      {
        "step": 4,
        "title": "프린트 또는 파일 저장",
        "description": "필요할 경우 즉석에서 인쇄 버튼을 눌러 인쇄하거나, 현재 상태의 문서를 개인 디스크에 다운로드합니다."
      }
    ],
    "useCases": [
      {
        "title": "무설치 문서 검토",
        "description": "공용 PC나 외부 기기에서 무거운 프로그램 설치를 기다릴 필요 없이 즉시 PDF 내용을 훑어봅니다.",
        "icon": "book-open"
      },
      {
        "title": "모바일 즉시 열람",
        "description": "화면 규격에 맞춰 반응형으로 연동되는 뷰어를 통해 스마트폰이나 태블릿 브라우저에서도 시원시원하게 책을 읽습니다.",
        "icon": "smartphone"
      },
      {
        "title": "인쇄 전 고속 프리뷰",
        "description": "대형 PDF를 로컬 저장소로 전송하거나 인쇄기에 날리기 전에 오류나 내용을 점검하는 간이 화면 뷰어로 씁니다.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "제가 읽는 문서의 안전과 비밀이 철저히 지켜지나요?",
        "answer": "네, 당사의 PDF 뷰어 모듈은 브라우저 샌드박스 내부에서만 작동하며 그 어떤 텍스트나 페이지 데이터도 웹 서버로 송출하지 않으므로 안심하셔도 됩니다."
      },
      {
        "question": "뷰어상에서 텍스트 형광펜이나 직접 수정이 가능합니까?",
        "answer": "본 도구는 순수한 열람 전용 뷰어입니다. 수정이나 메모 작성이 필요하신 경우에는 당사 메뉴 중 \"PDF 서명(Sign)\" 또는 \"PDF 주석 쓰기(Annotate)\" 전용 도구를 실행해 주시기 바랍니다."
      },
      {
        "question": "모바일 폰이나 구형 브라우저에서도 문제없이 작동하나요?",
        "answer": "최신 웹 표준(HTML5)을 준수하는 크롬, 사파리, 엣지, 파이어폭스 등 현대적 브라우저를 갖춘 모바일이나 데스크톱 디바이스라면 기종을 불문하고 쾌적하게 잘 열립니다."
      }
    ]
  }
,
"redact-pdf": localizedRedactionContent('ko', 'redact-pdf', "PDF 정보 가리기")
};
