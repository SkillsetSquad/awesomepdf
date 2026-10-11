/**
 * Spanish Tool Content / Contenido de Herramientas en Español
 * Requirements: 3.1 - Multi-language support
 * 
 * Contains detailed descriptions, how-to steps, use cases, and FAQs for all 67 tools
 */

import type { ToolContent } from '@/types/tool';

/**
 * Spanish tool content map
 * Each tool has: title, metaDescription, keywords, description, howToUse (3+ steps), useCases (3+ scenarios), faq (3+ questions)
 */
export const toolContentEs: Record<string, ToolContent> = {
  "pdf-multi-tool": {
    "title": "Herramienta Múltiple PDF",
    "metaDescription": "Editor PDF todo en uno: combina, divide, organiza, elimina, rota y extrae páginas en una sola herramienta.",
    "keywords": [
      "herramienta múltiple pdf",
      "editor pdf",
      "combinar pdf",
      "dividir pdf",
      "organizar pdf"
    ],
    "description": "<p>La Herramienta Múltiple PDF es tu solución integral para todas las tareas de gestión de páginas PDF. Combina múltiples operaciones en una única interfaz intuitiva.</p><p>Todo el procesamiento ocurre en tu navegador, asegurando privacidad completa.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta tu archivo PDF o haz clic para seleccionar."
      },
      {
        "step": 2,
        "title": "Elige la Operación",
        "description": "Selecciona entre combinar, dividir, organizar, eliminar, rotar o extraer páginas."
      },
      {
        "step": 3,
        "title": "Procesa y Descarga",
        "description": "Haz clic en procesar y descarga tu PDF modificado."
      }
    ],
    "useCases": [
      {
        "title": "Preparación de Documentos",
        "description": "Prepara documentos eliminando páginas innecesarias y reordenando contenido.",
        "icon": "file-check"
      },
      {
        "title": "Ensamblaje de Informes",
        "description": "Combina secciones de informes en un único documento profesional.",
        "icon": "book-open"
      },
      {
        "title": "Gestión de Archivos",
        "description": "Divide archivos grandes y extrae páginas relevantes.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Cuántos PDFs puedo procesar?",
        "answer": "Puedes procesar hasta 10 archivos PDF simultáneamente, con un tamaño máximo de 500MB."
      },
      {
        "question": "¿Se conservan los marcadores?",
        "answer": "Sí, al combinar PDFs se conservan los marcadores existentes."
      },
      {
        "question": "¿Hay límite de páginas?",
        "answer": "No hay límite estricto. La herramienta maneja documentos con cientos de páginas."
      }
    ]
  },
  "merge-pdf": {
    "title": "Combinar PDF",
    "metaDescription": "Combina múltiples archivos PDF en un solo documento. Combinador de PDF gratuito con reordenamiento.",
    "keywords": [
      "combinar pdf",
      "unir pdf",
      "fusionar pdf",
      "combinador pdf"
    ],
    "description": "<p>Combinar PDF te permite unir múltiples documentos PDF en un solo archivo. Sube tus archivos, ordénalos y combínalos en un documento cohesivo.</p><p>Todo ocurre localmente en tu navegador para máxima privacidad.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Archivos PDF",
        "description": "Arrastra y suelta múltiples archivos PDF o haz clic para seleccionar."
      },
      {
        "step": 2,
        "title": "Ordena los Archivos",
        "description": "Arrastra las miniaturas para ordenarlos como desees."
      },
      {
        "step": 3,
        "title": "Combina y Descarga",
        "description": "Haz clic en Combinar y descarga tu PDF unificado."
      }
    ],
    "useCases": [
      {
        "title": "Combinar Informes",
        "description": "Une informes mensuales en un documento anual.",
        "icon": "file-text"
      },
      {
        "title": "Crear Portafolios",
        "description": "Combina documentos de proyectos en un portafolio profesional.",
        "icon": "briefcase"
      },
      {
        "title": "Consolidar Facturas",
        "description": "Une facturas para propósitos contables.",
        "icon": "receipt"
      }
    ],
    "faq": [
      {
        "question": "¿Cuántos PDFs puedo combinar?",
        "answer": "Hasta 100 archivos PDF con un tamaño total de 500MB."
      },
      {
        "question": "¿Se mantiene la calidad?",
        "answer": "Sí, se preserva la calidad original sin compresión."
      },
      {
        "question": "¿Puedo combinar PDFs protegidos?",
        "answer": "Necesitas descifrarlos primero con nuestra herramienta Descifrar PDF."
      }
    ]
  },
  "rotate-custom": {
    "title": "Rotar por Grados Personalizados",
    "metaDescription": "Rota páginas PDF en cualquier ángulo. Rotación precisa para enderezar documentos escaneados.",
    "keywords": [
      "rotar pdf ángulo personalizado",
      "enderezar pdf",
      "enderezar pdf",
      "rotación personalizada pdf"
    ],
    "description": "<p>Rotar por Grados Personalizados te da control preciso sobre la orientación de tus páginas PDF. A diferencia de las herramientas estándar que solo rotan en incrementos de 90 grados, esta herramienta te permite rotar páginas en cualquier ángulo específico.</p><p>Perfecto para enderezar documentos escaneados torcidos o ajustar diagramas. Puedes corregir páginas individuales o aplicar la misma rotación a todo el documento.</p><p>Todo el procesamiento ocurre localmente en tu navegador, asegurando privacidad total mientras logras una alineación perfecta.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Sube el archivo PDF con las páginas que necesitas rotar."
      },
      {
        "step": 2,
        "title": "Establece el Ángulo",
        "description": "Ingresa el grado exacto de rotación para cada página, o un ángulo para todas."
      },
      {
        "step": 3,
        "title": "Vista Previa y Ajuste",
        "description": "Usa la vista previa en tiempo real para asegurar una alineación perfecta."
      },
      {
        "step": 4,
        "title": "Aplica y Descarga",
        "description": "Haz clic en Rotar para aplicar los cambios y descargar tu PDF enderezado."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Escaneados",
        "description": "Endereza páginas escaneadas que quedaron torcidas.",
        "icon": "scan"
      },
      {
        "title": "Dibujos Técnicos",
        "description": "Ajusta la orientación de planos y diagramas con precisión.",
        "icon": "ruler"
      },
      {
        "title": "Diseños Creativos",
        "description": "Crea diseños únicos rotando páginas en ángulos artísticos.",
        "icon": "pen-tool"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo rotar con decimales?",
        "answer": "Actualmente soporta grados enteros, pero estamos trabajando en precisión decimal."
      },
      {
        "question": "¿Afecta el contenido?",
        "answer": "El contenido se rota visualmente. El tamaño de página se ajusta automáticamente."
      },
      {
        "question": "¿Puedo rotar solo una página?",
        "answer": "Sí, puedes establecer un ángulo personalizado para cualquier página individual."
      }
    ]
  },
  "grid-combine": {
    "title": "Combinar en Cuadrícula PDF",
    "metaDescription": "Combinar múltiples archivos PDF en páginas individuales con un diseño de cuadrícula flexible. Organice 2, 4, 6, 9 o más PDF por página con bordes y espaciado.",
    "keywords": [
      "combinar cuadrícula",
      "fusionar pdf cuadrícula",
      "collage pdf",
      "múltiples pdf una página",
      "pdf n-up",
      "cuadrícula pdf"
    ],
    "description": "\n      <p>La herramienta Combinar en Cuadrícula ofrece una forma única de fusionar múltiples archivos PDF separados en páginas individuales. A diferencia de la herramienta estándar \"Fusionar PDF\" que simplemente añade páginas, o la herramienta \"N-Up\" que reorganiza páginas de un solo documento, Combinar en Cuadrícula toma múltiples archivos de entrada y los organiza uno al lado del otro en un diseño de cuadrícula personalizable.</p>\n      <p>Puede elegir entre varias configuraciones de cuadrícula como 2x1, 2x2, 3x3, etc. Esto es perfecto para comparar múltiples documentos, crear folletos de diferentes fuentes o imprimir versiones compactas de varios archivos.</p>\n      <p>Personalice la salida controlando el tamaño de página, la orientación, los márgenes, el espaciado y los bordes. Todo el procesamiento ocurre localmente en su navegador para máxima privacidad.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir Archivos PDF",
        "description": "Suba dos o más archivos PDF que desee combinar. Puede reorganizarlos en el orden deseado."
      },
      {
        "step": 2,
        "title": "Elegir Diseño de Cuadrícula",
        "description": "Seleccione el diseño de cuadrícula deseado (ej: 2x2 para 4 archivos por página, 3x3 para 9 archivos por página)."
      },
      {
        "step": 3,
        "title": "Personalizar Apariencia",
        "description": "Ajuste configuraciones como tamaño de página (A4, Carta), orientación, espaciado entre elementos y bordes."
      },
      {
        "step": 4,
        "title": "Combinar y Descargar",
        "description": "Haga clic en \"Combinar PDFs\" para generar su nuevo documento con diseño de cuadrícula y descargue el resultado."
      }
    ],
    "useCases": [
      {
        "title": "Comparación Visual",
        "description": "Coloque diferentes versiones de un diseño o documento una al lado de la otra en una sola página para una fácil comparación.",
        "icon": "layout-grid"
      },
      {
        "title": "Imprimir Folletos",
        "description": "Combine múltiples documentos cortos o diapositivas en una sola hoja para ahorrar costos de impresión.",
        "icon": "printer"
      },
      {
        "title": "Creación de Portafolios",
        "description": "Muestre múltiples archivos de proyecto en una vista general de cuadrícula limpia y organizada.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "¿En qué se diferencia de N-Up?",
        "answer": "N-Up toma páginas de UN PDF y las pone en una hoja. Combinar en Cuadrícula toma MÚLTIPLES ARCHIVOS PDF DIFERENTES y los pone en una hoja."
      },
      {
        "question": "¿Cuántos archivos puedo combinar?",
        "answer": "Puede combinar hasta 100 archivos dependiendo de la memoria de su navegador, pero los diseños como 4x4 acomodan hasta 16 archivos por página."
      },
      {
        "question": "¿Puedo añadir bordes?",
        "answer": "Sí, puede añadir bordes alrededor de cada archivo PDF y personalizar el color del borde."
      }
    ]
  },
  "split-pdf": {
    "title": "Dividir PDF",
    "metaDescription": "Divide archivos PDF en múltiples documentos. Extrae páginas específicas o divide por rangos.",
    "keywords": [
      "dividir pdf",
      "separar pdf",
      "extraer páginas",
      "divisor pdf"
    ],
    "description": "<p>Dividir PDF te permite separar un documento PDF en múltiples archivos. Perfecto para extraer capítulos o crear archivos individuales.</p><p>Procesamiento local para máxima seguridad.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el archivo a dividir."
      },
      {
        "step": 2,
        "title": "Define los Rangos",
        "description": "Ingresa los números de página o rangos (ej: 1-5, 8, 10-15)."
      },
      {
        "step": 3,
        "title": "Divide y Descarga",
        "description": "Haz clic en Dividir y descarga los archivos resultantes."
      }
    ],
    "useCases": [
      {
        "title": "Extraer Capítulos",
        "description": "Divide libros en capítulos individuales.",
        "icon": "book"
      },
      {
        "title": "Separar Escaneos",
        "description": "Divide documentos escaneados en archivos individuales.",
        "icon": "copy"
      },
      {
        "title": "Crear Material",
        "description": "Extrae páginas específicas para material de apoyo.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo dividir en páginas individuales?",
        "answer": "Sí, selecciona \"Dividir cada página\" para crear archivos de una página."
      },
      {
        "question": "¿Qué pasa con los marcadores?",
        "answer": "Los marcadores dentro del rango extraído se conservan."
      },
      {
        "question": "¿Puedo dividir PDFs protegidos?",
        "answer": "Primero descifra el PDF con nuestra herramienta Descifrar PDF."
      }
    ]
  },
  "compress-pdf": {
    "title": "Comprimir PDF",
    "metaDescription": "Reduce el tamaño de archivos PDF manteniendo la calidad. Compresor de PDF gratuito.",
    "keywords": [
      "comprimir pdf",
      "reducir tamaño pdf",
      "compresor pdf",
      "optimizar pdf"
    ],
    "description": "<p>Comprimir PDF reduce el tamaño de tus documentos manteniendo calidad aceptable. Ideal para correos electrónicos y almacenamiento.</p><p>Compresión local en tu navegador.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento a comprimir."
      },
      {
        "step": 2,
        "title": "Elige el Nivel",
        "description": "Selecciona: Bajo (mejor calidad), Medio o Alto (menor tamaño)."
      },
      {
        "step": 3,
        "title": "Comprime y Descarga",
        "description": "Haz clic en Comprimir y descarga el PDF optimizado."
      }
    ],
    "useCases": [
      {
        "title": "Adjuntos de Correo",
        "description": "Reduce el tamaño para cumplir límites de correo.",
        "icon": "mail"
      },
      {
        "title": "Publicación Web",
        "description": "Optimiza PDFs para descarga web rápida.",
        "icon": "globe"
      },
      {
        "title": "Ahorro de Espacio",
        "description": "Comprime documentos archivados.",
        "icon": "hard-drive"
      }
    ],
    "faq": [
      {
        "question": "¿Cuánto puedo reducir?",
        "answer": "PDFs con imágenes pueden reducirse 50-80%. Solo texto tiene menor reducción."
      },
      {
        "question": "¿Afecta la calidad del texto?",
        "answer": "No, el texto permanece nítido. Solo las imágenes se comprimen."
      },
      {
        "question": "¿Puedo comprimir varios PDFs?",
        "answer": "Sí, hasta 10 archivos simultáneamente."
      }
    ]
  },
  "edit-pdf": {
    "title": "Editar PDF",
    "metaDescription": "Edita archivos PDF en línea. Añade texto, imágenes, anotaciones y formas.",
    "keywords": [
      "editar pdf",
      "editor pdf",
      "anotar pdf",
      "añadir texto pdf"
    ],
    "description": "<p>Editar PDF proporciona herramientas completas para modificar y anotar documentos. Añade texto, imágenes, formas y comentarios.</p><p>Edición local para privacidad total.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento a editar."
      },
      {
        "step": 2,
        "title": "Selecciona Herramienta",
        "description": "Elige: texto, resaltado, formas, imágenes o comentarios."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Aplica los cambios y descarga el PDF editado."
      }
    ],
    "useCases": [
      {
        "title": "Revisión de Documentos",
        "description": "Añade comentarios y marcas para revisión colaborativa.",
        "icon": "message-square"
      },
      {
        "title": "Completar Formularios",
        "description": "Rellena campos y añade firmas sin imprimir.",
        "icon": "edit-3"
      },
      {
        "title": "Redacción",
        "description": "Elimina información sensible antes de compartir.",
        "icon": "eye-off"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo editar texto original?",
        "answer": "Sí. Selecciona Editar texto en la barra del PDF, pulsa un bloque existente, introduce el reemplazo y aplícalo. El texto se sustituye permanentemente en el PDF exportado."
      },
      {
        "question": "¿Las ediciones son permanentes?",
        "answer": "Puedes aplanarlas para hacerlas permanentes o mantenerlas editables."
      },
      {
        "question": "¿Hay función deshacer?",
        "answer": "Sí, soporta deshacer/rehacer y restablecer al original."
      }
    ]
  },
  "jpg-to-pdf": {
    "title": "JPG a PDF",
    "metaDescription": "Convierte imágenes JPG a PDF. Combina múltiples JPG en un documento PDF.",
    "keywords": [
      "jpg a pdf",
      "jpeg a pdf",
      "convertir jpg",
      "imagen a pdf"
    ],
    "description": "<p>JPG a PDF convierte tus imágenes JPEG en documentos PDF. Combina múltiples imágenes en un único PDF profesional.</p><p>Conversión local para privacidad.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Imágenes",
        "description": "Arrastra y suelta archivos JPG o haz clic para seleccionar."
      },
      {
        "step": 2,
        "title": "Ordena y Configura",
        "description": "Reordena imágenes y selecciona tamaño de página."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Haz clic en Convertir y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Álbumes de Fotos",
        "description": "Crea álbumes PDF de fotos para compartir.",
        "icon": "image"
      },
      {
        "title": "Escaneo de Documentos",
        "description": "Convierte fotos de documentos en PDFs.",
        "icon": "camera"
      },
      {
        "title": "Portafolios",
        "description": "Compila trabajos fotográficos en un portafolio.",
        "icon": "folder"
      }
    ],
    "faq": [
      {
        "question": "¿Cuántas imágenes puedo convertir?",
        "answer": "Hasta 100 imágenes JPG en un único PDF."
      },
      {
        "question": "¿Se preserva la calidad?",
        "answer": "Sí, las imágenes se incrustan en calidad original."
      },
      {
        "question": "¿Puedo establecer diferentes tamaños?",
        "answer": "Se aplica un tamaño uniforme. Las imágenes se escalan manteniendo proporción."
      }
    ]
  },
  "sign-pdf": {
    "title": "Firmar PDF",
    "metaDescription": "Añade firmas electrónicas a documentos PDF. Dibuja, escribe o sube tu firma.",
    "keywords": [
      "firmar pdf",
      "firma electrónica",
      "e-firma",
      "firma digital"
    ],
    "description": "<p>Firmar PDF te permite añadir firmas electrónicas a tus documentos. Crea tu firma dibujando, escribiendo o subiendo una imagen.</p><p>Firma local para seguridad.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento a firmar."
      },
      {
        "step": 2,
        "title": "Crea tu Firma",
        "description": "Dibuja, escribe o sube una imagen de firma. También puedes escanear una foto de una firma escrita en papel."
      },
      {
        "step": 3,
        "title": "Coloca y Descarga",
        "description": "Posiciona la firma y descarga el PDF firmado."
      }
    ],
    "useCases": [
      {
        "title": "Firma de Contratos",
        "description": "Firma contratos electrónicamente sin imprimir.",
        "icon": "file-signature"
      },
      {
        "title": "Completar Formularios",
        "description": "Añade firma a formularios y documentos oficiales.",
        "icon": "clipboard"
      },
      {
        "title": "Aprobaciones",
        "description": "Firma documentos en procesos de aprobación.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "¿Es legalmente vinculante?",
        "answer": "Las firmas electrónicas son reconocidas en la mayoría de países. Consulta regulaciones locales."
      },
      {
        "question": "¿Puedo guardar mi firma?",
        "answer": "Sí, se guarda en el almacenamiento local del navegador."
      },
      {
        "question": "¿Puedo añadir múltiples firmas?",
        "answer": "Sí, añade tantas firmas como necesites en cualquier página."
      }
    ]
  },
  "crop-pdf": {
    "title": "Recortar PDF",
    "metaDescription": "Recorta páginas PDF para eliminar márgenes y áreas no deseadas.",
    "keywords": [
      "recortar pdf",
      "cortar pdf",
      "eliminar márgenes",
      "redimensionar pdf"
    ],
    "description": "<p>Recortar PDF elimina márgenes y áreas no deseadas de tus páginas. Útil para eliminar espacios en blanco o estandarizar dimensiones.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento a recortar."
      },
      {
        "step": 2,
        "title": "Define el Área",
        "description": "Arrastra los controles o ingresa medidas precisas."
      },
      {
        "step": 3,
        "title": "Recorta y Descarga",
        "description": "Aplica el recorte y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Eliminar Márgenes",
        "description": "Recorta márgenes excesivos de documentos escaneados.",
        "icon": "maximize-2"
      },
      {
        "title": "Enfocar Contenido",
        "description": "Recorta para resaltar áreas específicas.",
        "icon": "target"
      },
      {
        "title": "Estandarizar Páginas",
        "description": "Haz que todas las páginas tengan el mismo tamaño.",
        "icon": "square"
      }
    ],
    "faq": [
      {
        "question": "¿El recorte es permanente?",
        "answer": "Sí, el contenido fuera del área se elimina. Guarda una copia de seguridad."
      },
      {
        "question": "¿Puedo recortar páginas diferentes?",
        "answer": "Sí, puedes aplicar diferentes configuraciones a cada página."
      },
      {
        "question": "¿Afecta la calidad del texto?",
        "answer": "No, el contenido restante mantiene su calidad original."
      }
    ]
  },
  "extract-pages": {
    "title": "Extraer Páginas",
    "metaDescription": "Extrae páginas específicas de archivos PDF. Guarda páginas individuales como nuevos documentos.",
    "keywords": [
      "extraer páginas pdf",
      "guardar páginas",
      "copiar páginas pdf"
    ],
    "description": "<p>Extraer Páginas te permite seleccionar y guardar páginas específicas de un PDF como nuevos archivos. Perfecto para crear extractos.</p><p>Extracción local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Páginas",
        "description": "Haz clic en miniaturas o ingresa números de página."
      },
      {
        "step": 3,
        "title": "Extrae y Descarga",
        "description": "Crea el nuevo PDF con las páginas seleccionadas."
      }
    ],
    "useCases": [
      {
        "title": "Crear Extractos",
        "description": "Extrae páginas relevantes para documentos de referencia.",
        "icon": "file-minus"
      },
      {
        "title": "Compartir Contenido",
        "description": "Extrae páginas específicas para compartir.",
        "icon": "share-2"
      },
      {
        "title": "Archivar",
        "description": "Guarda páginas clave para archivo a largo plazo.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo extraer páginas no consecutivas?",
        "answer": "Sí, selecciona cualquier combinación de páginas."
      },
      {
        "question": "¿Se conservan los marcadores?",
        "answer": "Los marcadores a páginas extraídas se conservan."
      },
      {
        "question": "¿Puedo extraer de múltiples PDFs?",
        "answer": "Esta herramienta trabaja con un PDF. Usa Combinar PDF para múltiples archivos."
      }
    ]
  },
  "organize-pdf": {
    "title": "Organizar PDF",
    "metaDescription": "Reordena, duplica y elimina páginas PDF. Arrastra y suelta para reorganizar.",
    "keywords": [
      "organizar pdf",
      "reordenar páginas",
      "reorganizar pdf"
    ],
    "description": "<p>Organizar PDF proporciona una interfaz de arrastrar y soltar para reorganizar páginas. Reordena, duplica o elimina páginas fácilmente.</p><p>Organización local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Reorganiza",
        "description": "Arrastra miniaturas para reordenar, duplicar o eliminar."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Aplica los cambios y descarga el PDF reorganizado."
      }
    ],
    "useCases": [
      {
        "title": "Corregir Orden",
        "description": "Corrige el orden de páginas escaneadas incorrectamente.",
        "icon": "arrow-up-down"
      },
      {
        "title": "Orden Personalizado",
        "description": "Ordena páginas para presentaciones específicas.",
        "icon": "list"
      },
      {
        "title": "Eliminar Páginas",
        "description": "Elimina páginas en blanco o irrelevantes.",
        "icon": "trash-2"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo duplicar páginas?",
        "answer": "Sí, duplica cualquier página y colócala donde quieras."
      },
      {
        "question": "¿Hay función deshacer?",
        "answer": "Sí, soporta deshacer/rehacer y restablecer al original."
      },
      {
        "question": "¿Puedo organizar múltiples PDFs?",
        "answer": "Trabaja con un PDF. Primero combínalos con Combinar PDF."
      }
    ]
  },
  "delete-pages": {
    "title": "Eliminar Páginas",
    "metaDescription": "Elimina páginas no deseadas de archivos PDF. Selecciona y elimina páginas específicas.",
    "keywords": [
      "eliminar páginas pdf",
      "quitar páginas",
      "borrar páginas pdf"
    ],
    "description": "<p>Eliminar Páginas te permite quitar páginas no deseadas de tus documentos PDF. Elimina páginas en blanco o contenido innecesario.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Páginas",
        "description": "Haz clic en miniaturas o ingresa números de página."
      },
      {
        "step": 3,
        "title": "Elimina y Descarga",
        "description": "Elimina las páginas seleccionadas y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Eliminar Páginas en Blanco",
        "description": "Limpia documentos eliminando páginas vacías.",
        "icon": "file-x"
      },
      {
        "title": "Eliminar Contenido Sensible",
        "description": "Elimina páginas confidenciales antes de compartir.",
        "icon": "shield"
      },
      {
        "title": "Optimizar Documentos",
        "description": "Elimina páginas desactualizadas o irrelevantes.",
        "icon": "filter"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo recuperar páginas eliminadas?",
        "answer": "No, la eliminación es permanente. Guarda una copia de seguridad."
      },
      {
        "question": "¿Puedo eliminar múltiples páginas?",
        "answer": "Sí, selecciona y elimina múltiples páginas a la vez."
      },
      {
        "question": "¿Afecta los marcadores?",
        "answer": "Los marcadores a páginas eliminadas se remueven."
      }
    ]
  },
  "bookmark": {
    "title": "Editar Marcadores",
    "metaDescription": "Añade, edita y organiza marcadores en archivos PDF para navegación fácil.",
    "keywords": [
      "marcadores pdf",
      "editar marcadores",
      "índice pdf",
      "navegación pdf"
    ],
    "description": "<p>Editar Marcadores te permite crear y gestionar marcadores en tus documentos PDF para facilitar la navegación.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Gestiona Marcadores",
        "description": "Añade, edita, elimina o reorganiza marcadores."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Aplica los cambios y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Crear Índice",
        "description": "Añade marcadores para crear un índice navegable.",
        "icon": "bookmark"
      },
      {
        "title": "Organizar Documentos",
        "description": "Estructura documentos largos con marcadores.",
        "icon": "list"
      },
      {
        "title": "Mejorar Accesibilidad",
        "description": "Facilita la navegación en documentos extensos.",
        "icon": "navigation"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo crear marcadores anidados?",
        "answer": "Sí, puedes crear jerarquías de marcadores."
      },
      {
        "question": "¿Los marcadores funcionan en todos los lectores?",
        "answer": "Sí, son compatibles con todos los lectores PDF estándar."
      },
      {
        "question": "¿Puedo importar marcadores?",
        "answer": "Puedes crear marcadores manualmente o desde el índice existente."
      }
    ]
  },
  "table-of-contents": {
    "title": "Tabla de Contenidos",
    "metaDescription": "Genera automáticamente una tabla de contenidos para documentos PDF.",
    "keywords": [
      "tabla de contenidos pdf",
      "índice pdf",
      "toc pdf",
      "generar índice"
    ],
    "description": "<p>Tabla de Contenidos genera automáticamente un índice navegable para tus documentos PDF basado en encabezados.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona niveles de encabezado y estilo."
      },
      {
        "step": 3,
        "title": "Genera y Descarga",
        "description": "Crea la tabla de contenidos y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Largos",
        "description": "Añade navegación a manuales y libros.",
        "icon": "book"
      },
      {
        "title": "Informes",
        "description": "Crea índices para informes profesionales.",
        "icon": "file-text"
      },
      {
        "title": "Documentación",
        "description": "Mejora la navegación en documentación técnica.",
        "icon": "file-code"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo detecta los encabezados?",
        "answer": "Analiza el formato del texto para identificar encabezados."
      },
      {
        "question": "¿Puedo personalizar el estilo?",
        "answer": "Sí, puedes ajustar fuente, tamaño y formato."
      },
      {
        "question": "¿Dónde se inserta la tabla?",
        "answer": "Puedes elegir insertarla al inicio o en una página específica."
      }
    ]
  },
  "page-numbers": {
    "title": "Números de Página",
    "metaDescription": "Añade números de página a documentos PDF con formato personalizable.",
    "keywords": [
      "números de página pdf",
      "numerar páginas",
      "paginación pdf"
    ],
    "description": "<p>Números de Página te permite añadir numeración a tus documentos PDF con posición y formato personalizables.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Formato",
        "description": "Selecciona posición, fuente, tamaño y formato."
      },
      {
        "step": 3,
        "title": "Aplica y Descarga",
        "description": "Añade los números y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Profesionales",
        "description": "Añade numeración a informes y propuestas.",
        "icon": "file-text"
      },
      {
        "title": "Libros y Manuales",
        "description": "Numera páginas de publicaciones.",
        "icon": "book"
      },
      {
        "title": "Documentos Legales",
        "description": "Añade numeración requerida para documentos oficiales.",
        "icon": "scale"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo excluir páginas?",
        "answer": "Sí, puedes excluir portadas u otras páginas específicas."
      },
      {
        "question": "¿Qué formatos están disponibles?",
        "answer": "Números arábigos, romanos, letras y formatos personalizados."
      },
      {
        "question": "¿Puedo cambiar la posición?",
        "answer": "Sí, elige entre 9 posiciones diferentes en la página."
      }
    ]
  },
  "add-watermark": {
    "title": "Añadir Marca de Agua",
    "metaDescription": "Añade marcas de agua de texto o imagen a documentos PDF.",
    "keywords": [
      "marca de agua pdf",
      "pdf de marca de agua",
      "añadir marca",
      "proteger pdf"
    ],
    "description": "<p>Añadir Marca de Agua te permite insertar marcas de agua de texto o imagen en tus documentos PDF para protección o branding.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Marca de Agua",
        "description": "Ingresa texto o sube imagen, ajusta posición y opacidad."
      },
      {
        "step": 3,
        "title": "Aplica y Descarga",
        "description": "Añade la marca de agua y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Proteger Documentos",
        "description": "Marca documentos como confidenciales o borradores.",
        "icon": "shield"
      },
      {
        "title": "Branding",
        "description": "Añade logo de empresa a documentos.",
        "icon": "image"
      },
      {
        "title": "Derechos de Autor",
        "description": "Protege contenido con marcas de copyright.",
        "icon": "copyright"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo usar imágenes?",
        "answer": "Sí, soporta PNG, JPG y otros formatos de imagen."
      },
      {
        "question": "¿Puedo ajustar la opacidad?",
        "answer": "Sí, ajusta la transparencia de 0% a 100%."
      },
      {
        "question": "¿Se aplica a todas las páginas?",
        "answer": "Puedes aplicar a todas o seleccionar páginas específicas."
      }
    ]
  },
  "header-footer": {
    "title": "Encabezado y Pie de Página",
    "metaDescription": "Añade encabezados y pies de página personalizados a documentos PDF.",
    "keywords": [
      "encabezado pdf",
      "pie de página pdf",
      "header footer pdf"
    ],
    "description": "<p>Encabezado y Pie de Página te permite añadir texto personalizado en la parte superior e inferior de tus páginas PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Contenido",
        "description": "Ingresa texto para encabezado y/o pie de página."
      },
      {
        "step": 3,
        "title": "Aplica y Descarga",
        "description": "Añade el contenido y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Corporativos",
        "description": "Añade nombre de empresa y fecha.",
        "icon": "building"
      },
      {
        "title": "Informes",
        "description": "Incluye título del documento y números de página.",
        "icon": "file-text"
      },
      {
        "title": "Documentos Legales",
        "description": "Añade información de confidencialidad.",
        "icon": "scale"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo usar variables?",
        "answer": "Sí, incluye fecha, número de página y total de páginas."
      },
      {
        "question": "¿Puedo personalizar la fuente?",
        "answer": "Sí, ajusta fuente, tamaño, color y alineación."
      },
      {
        "question": "¿Puedo tener diferentes encabezados?",
        "answer": "Puedes configurar diferentes para páginas pares e impares."
      }
    ]
  },
  "invert-colors": {
    "title": "Invertir Colores",
    "metaDescription": "Invierte los colores de documentos PDF para modo oscuro o efectos especiales.",
    "keywords": [
      "invertir colores pdf",
      "modo oscuro pdf",
      "negativo pdf"
    ],
    "description": "<p>Invertir Colores cambia los colores de tu PDF a su negativo, útil para modo oscuro o efectos visuales.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona páginas y opciones de inversión."
      },
      {
        "step": 3,
        "title": "Invierte y Descarga",
        "description": "Aplica la inversión y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Modo Oscuro",
        "description": "Crea versiones de modo oscuro para lectura nocturna.",
        "icon": "moon"
      },
      {
        "title": "Accesibilidad",
        "description": "Mejora la legibilidad para usuarios con sensibilidad a la luz.",
        "icon": "eye"
      },
      {
        "title": "Efectos Visuales",
        "description": "Crea efectos de negativo para diseño.",
        "icon": "palette"
      }
    ],
    "faq": [
      {
        "question": "¿Afecta las imágenes?",
        "answer": "Sí, todos los elementos visuales se invierten."
      },
      {
        "question": "¿Puedo invertir páginas específicas?",
        "answer": "Sí, selecciona las páginas a invertir."
      },
      {
        "question": "¿Es reversible?",
        "answer": "Sí, invierte de nuevo para restaurar los colores originales."
      }
    ]
  },
  "background-color": {
    "title": "Color de Fondo",
    "metaDescription": "Cambia el color de fondo de páginas PDF.",
    "keywords": [
      "color de fondo pdf",
      "fondo pdf",
      "cambiar fondo"
    ],
    "description": "<p>Color de Fondo te permite cambiar el color de fondo de tus páginas PDF para mejorar la legibilidad o estética.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Color",
        "description": "Elige el color de fondo deseado."
      },
      {
        "step": 3,
        "title": "Aplica y Descarga",
        "description": "Cambia el fondo y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Lectura Cómoda",
        "description": "Usa fondos crema o sepia para reducir fatiga visual.",
        "icon": "eye"
      },
      {
        "title": "Branding",
        "description": "Aplica colores corporativos a documentos.",
        "icon": "palette"
      },
      {
        "title": "Impresión",
        "description": "Prepara documentos con fondos específicos para impresión.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo usar cualquier color?",
        "answer": "Sí, selecciona cualquier color del selector o ingresa código hex."
      },
      {
        "question": "¿Afecta el contenido?",
        "answer": "No, solo cambia el fondo. El contenido permanece intacto."
      },
      {
        "question": "¿Puedo aplicar a páginas específicas?",
        "answer": "Sí, selecciona las páginas a modificar."
      }
    ]
  },
  "text-color": {
    "title": "Cambiar Color de Texto",
    "metaDescription": "Cambia el color del texto en documentos PDF.",
    "keywords": [
      "color de texto pdf",
      "cambiar texto pdf",
      "modificar texto"
    ],
    "description": "<p>Cambiar Color de Texto te permite modificar el color del texto en tus documentos PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Colores",
        "description": "Elige el color original y el nuevo color."
      },
      {
        "step": 3,
        "title": "Aplica y Descarga",
        "description": "Cambia el color y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Accesibilidad",
        "description": "Mejora el contraste para mejor legibilidad.",
        "icon": "eye"
      },
      {
        "title": "Branding",
        "description": "Aplica colores corporativos al texto.",
        "icon": "palette"
      },
      {
        "title": "Impresión",
        "description": "Prepara documentos para impresión en blanco y negro.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo cambiar colores específicos?",
        "answer": "Sí, selecciona el color a reemplazar y el nuevo color."
      },
      {
        "question": "¿Afecta las imágenes?",
        "answer": "No, solo afecta el texto del documento."
      },
      {
        "question": "¿Funciona con todos los PDFs?",
        "answer": "Funciona mejor con PDFs que contienen texto real, no imágenes de texto."
      }
    ]
  },
  "add-stamps": {
    "title": "Añadir Sellos",
    "metaDescription": "Añade sellos predefinidos o personalizados a documentos PDF.",
    "keywords": [
      "sellos pdf",
      "stamps pdf",
      "añadir sello",
      "marcar pdf"
    ],
    "description": "<p>Añadir Sellos te permite insertar sellos predefinidos como \"Aprobado\", \"Confidencial\" o sellos personalizados.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Sello",
        "description": "Elige un sello predefinido o crea uno personalizado."
      },
      {
        "step": 3,
        "title": "Coloca y Descarga",
        "description": "Posiciona el sello y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Aprobación de Documentos",
        "description": "Marca documentos como aprobados o rechazados.",
        "icon": "check-circle"
      },
      {
        "title": "Confidencialidad",
        "description": "Añade sellos de confidencial o uso interno.",
        "icon": "lock"
      },
      {
        "title": "Estado de Documentos",
        "description": "Marca como borrador, final o revisado.",
        "icon": "tag"
      }
    ],
    "faq": [
      {
        "question": "¿Qué sellos predefinidos hay?",
        "answer": "Incluye Aprobado, Rechazado, Confidencial, Borrador, Final y más."
      },
      {
        "question": "¿Puedo crear sellos personalizados?",
        "answer": "Sí, crea sellos con texto e imagen personalizados."
      },
      {
        "question": "¿Puedo añadir múltiples sellos?",
        "answer": "Sí, añade tantos sellos como necesites."
      }
    ]
  },
  "remove-annotations": {
    "title": "Eliminar Anotaciones",
    "metaDescription": "Elimina todas las anotaciones y comentarios de documentos PDF.",
    "keywords": [
      "eliminar anotaciones pdf",
      "quitar comentarios",
      "limpiar pdf"
    ],
    "description": "<p>Eliminar Anotaciones quita todos los comentarios, resaltados, notas y otras anotaciones de tus documentos PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Tipos",
        "description": "Elige qué tipos de anotaciones eliminar."
      },
      {
        "step": 3,
        "title": "Elimina y Descarga",
        "description": "Quita las anotaciones y descarga el PDF limpio."
      }
    ],
    "useCases": [
      {
        "title": "Limpiar Documentos",
        "description": "Elimina marcas de revisión antes de publicar.",
        "icon": "eraser"
      },
      {
        "title": "Privacidad",
        "description": "Quita comentarios antes de compartir externamente.",
        "icon": "shield"
      },
      {
        "title": "Versión Final",
        "description": "Crea versiones limpias de documentos revisados.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "¿Qué tipos de anotaciones se eliminan?",
        "answer": "Comentarios, resaltados, notas adhesivas, dibujos y más."
      },
      {
        "question": "¿Puedo eliminar selectivamente?",
        "answer": "Sí, elige qué tipos de anotaciones eliminar."
      },
      {
        "question": "¿Es reversible?",
        "answer": "No, guarda una copia de seguridad antes de eliminar."
      }
    ]
  },
  "form-filler": {
    "title": "Rellenar Formularios",
    "metaDescription": "Rellena formularios PDF interactivos en línea.",
    "keywords": [
      "rellenar formularios pdf",
      "completar pdf",
      "formularios interactivos"
    ],
    "description": "<p>Rellenar Formularios te permite completar formularios PDF interactivos directamente en tu navegador.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el formulario."
      },
      {
        "step": 2,
        "title": "Completa Campos",
        "description": "Rellena los campos del formulario."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Guarda el formulario completado."
      }
    ],
    "useCases": [
      {
        "title": "Formularios Oficiales",
        "description": "Completa formularios gubernamentales o legales.",
        "icon": "file-text"
      },
      {
        "title": "Solicitudes",
        "description": "Rellena solicitudes de empleo o servicios.",
        "icon": "clipboard"
      },
      {
        "title": "Contratos",
        "description": "Completa contratos y acuerdos.",
        "icon": "file-signature"
      }
    ],
    "faq": [
      {
        "question": "¿Funciona con todos los formularios?",
        "answer": "Funciona con formularios PDF interactivos estándar."
      },
      {
        "question": "¿Puedo guardar y continuar después?",
        "answer": "Sí, guarda el progreso y continúa más tarde."
      },
      {
        "question": "¿Puedo añadir firma?",
        "answer": "Sí, usa la herramienta Firmar PDF para añadir firmas."
      }
    ]
  },
  "form-creator": {
    "title": "Crear Formularios",
    "metaDescription": "Crea formularios PDF interactivos con campos rellenables.",
    "keywords": [
      "crear formularios pdf",
      "formularios interactivos",
      "campos pdf"
    ],
    "description": "<p>Crear Formularios te permite añadir campos interactivos a documentos PDF para crear formularios rellenables.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento base."
      },
      {
        "step": 2,
        "title": "Añade Campos",
        "description": "Inserta campos de texto, casillas, botones de radio, etc."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Guarda el formulario interactivo."
      }
    ],
    "useCases": [
      {
        "title": "Formularios de Empresa",
        "description": "Crea formularios internos rellenables.",
        "icon": "building"
      },
      {
        "title": "Encuestas",
        "description": "Diseña encuestas y cuestionarios.",
        "icon": "clipboard-list"
      },
      {
        "title": "Solicitudes",
        "description": "Crea formularios de solicitud profesionales.",
        "icon": "file-plus"
      }
    ],
    "faq": [
      {
        "question": "¿Qué tipos de campos puedo añadir?",
        "answer": "Texto, casillas, botones de radio, listas desplegables, fechas y más."
      },
      {
        "question": "¿Puedo hacer campos obligatorios?",
        "answer": "Sí, configura validación y campos requeridos."
      },
      {
        "question": "¿Los formularios funcionan en todos los lectores?",
        "answer": "Sí, son compatibles con lectores PDF estándar."
      }
    ]
  },
  "remove-blank-pages": {
    "title": "Eliminar Páginas en Blanco",
    "metaDescription": "Detecta y elimina automáticamente páginas en blanco de documentos PDF.",
    "keywords": [
      "eliminar páginas en blanco",
      "quitar páginas vacías",
      "limpiar pdf"
    ],
    "description": "<p>Eliminar Páginas en Blanco detecta y elimina automáticamente las páginas vacías de tus documentos PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Sensibilidad",
        "description": "Ajusta el umbral de detección de páginas en blanco."
      },
      {
        "step": 3,
        "title": "Elimina y Descarga",
        "description": "Quita las páginas en blanco y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Limpiar Escaneos",
        "description": "Elimina páginas en blanco de documentos escaneados.",
        "icon": "file-minus"
      },
      {
        "title": "Optimizar Documentos",
        "description": "Reduce el tamaño eliminando páginas vacías.",
        "icon": "zap"
      },
      {
        "title": "Preparar para Impresión",
        "description": "Elimina páginas innecesarias antes de imprimir.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo detecta páginas en blanco?",
        "answer": "Analiza el contenido de cada página para detectar vacías."
      },
      {
        "question": "¿Puedo revisar antes de eliminar?",
        "answer": "Sí, muestra las páginas detectadas para confirmación."
      },
      {
        "question": "¿Detecta páginas casi en blanco?",
        "answer": "Sí, ajusta la sensibilidad para incluir páginas con poco contenido."
      }
    ]
  },
  "image-to-pdf": {
    "title": "Imagen a PDF",
    "metaDescription": "Convierte múltiples formatos de imagen a PDF. Soporta JPG, PNG, WebP, BMP, TIFF, SVG, HEIC.",
    "keywords": [
      "imagen a pdf",
      "convertir imagen",
      "foto a pdf",
      "múltiples imágenes pdf"
    ],
    "description": "<p>Imagen a PDF convierte varios formatos de imagen en documentos PDF. Soporta JPG, PNG, WebP, BMP, TIFF, SVG y HEIC.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Imágenes",
        "description": "Arrastra y suelta imágenes o haz clic para seleccionar."
      },
      {
        "step": 2,
        "title": "Ordena y Configura",
        "description": "Reordena y selecciona opciones de página."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Documentación",
        "description": "Convierte capturas de pantalla en documentación.",
        "icon": "image"
      },
      {
        "title": "Portafolios",
        "description": "Crea portafolios de imágenes en PDF.",
        "icon": "folder"
      },
      {
        "title": "Archivos",
        "description": "Archiva imágenes en formato PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Qué formatos soporta?",
        "answer": "JPG, PNG, WebP, BMP, TIFF, SVG y HEIC."
      },
      {
        "question": "¿Se mantiene la calidad?",
        "answer": "Sí, las imágenes se incrustan en calidad original."
      },
      {
        "question": "¿Puedo combinar diferentes formatos?",
        "answer": "Sí, mezcla cualquier formato de imagen soportado."
      }
    ]
  },
  "png-to-pdf": {
    "title": "PNG a PDF",
    "metaDescription": "Convierte imágenes PNG a documentos PDF con transparencia preservada.",
    "keywords": [
      "png a pdf",
      "convertir png",
      "imagen png pdf"
    ],
    "description": "<p>PNG a PDF convierte imágenes PNG en documentos PDF, preservando la transparencia cuando es posible.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Imágenes PNG",
        "description": "Arrastra y suelta archivos PNG."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona tamaño de página y orientación."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Gráficos",
        "description": "Convierte gráficos PNG con transparencia.",
        "icon": "image"
      },
      {
        "title": "Logos",
        "description": "Crea PDFs de logos para impresión.",
        "icon": "star"
      },
      {
        "title": "Capturas",
        "description": "Convierte capturas de pantalla en PDF.",
        "icon": "monitor"
      }
    ],
    "faq": [
      {
        "question": "¿Se preserva la transparencia?",
        "answer": "La transparencia se preserva en el PDF resultante."
      },
      {
        "question": "¿Puedo convertir múltiples PNGs?",
        "answer": "Sí, combina múltiples PNGs en un PDF."
      },
      {
        "question": "¿Qué calidad tiene el resultado?",
        "answer": "Se mantiene la calidad original de las imágenes."
      }
    ]
  },
  "webp-to-pdf": {
    "title": "WebP a PDF",
    "metaDescription": "Convierte imágenes WebP a documentos PDF.",
    "keywords": [
      "webp a pdf",
      "convertir webp",
      "imagen webp pdf"
    ],
    "description": "<p>WebP a PDF convierte imágenes en formato WebP a documentos PDF.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Imágenes WebP",
        "description": "Arrastra y suelta archivos WebP."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona tamaño de página."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Imágenes Web",
        "description": "Convierte imágenes descargadas de la web.",
        "icon": "globe"
      },
      {
        "title": "Archivos",
        "description": "Archiva imágenes WebP en formato PDF.",
        "icon": "archive"
      },
      {
        "title": "Documentación",
        "description": "Incluye imágenes WebP en documentos.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es WebP?",
        "answer": "WebP es un formato de imagen moderno desarrollado por Google."
      },
      {
        "question": "¿Se mantiene la calidad?",
        "answer": "Sí, se preserva la calidad de la imagen original."
      },
      {
        "question": "¿Soporta WebP animado?",
        "answer": "Se convierte el primer fotograma de WebP animados."
      }
    ]
  },
  "svg-to-pdf": {
    "title": "SVG a PDF",
    "metaDescription": "Convierte gráficos vectoriales SVG a documentos PDF.",
    "keywords": [
      "svg a pdf",
      "convertir svg",
      "vector a pdf"
    ],
    "description": "<p>SVG a PDF convierte gráficos vectoriales SVG en documentos PDF, manteniendo la escalabilidad.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Archivos SVG",
        "description": "Arrastra y suelta archivos SVG."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona tamaño de página."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Logos",
        "description": "Convierte logos vectoriales para impresión.",
        "icon": "star"
      },
      {
        "title": "Ilustraciones",
        "description": "Crea PDFs de ilustraciones vectoriales.",
        "icon": "pen-tool"
      },
      {
        "title": "Diagramas",
        "description": "Convierte diagramas SVG a PDF.",
        "icon": "git-branch"
      }
    ],
    "faq": [
      {
        "question": "¿Se mantiene la calidad vectorial?",
        "answer": "Sí, los gráficos permanecen escalables en el PDF."
      },
      {
        "question": "¿Soporta SVG complejos?",
        "answer": "Sí, soporta la mayoría de características SVG."
      },
      {
        "question": "¿Puedo convertir múltiples SVGs?",
        "answer": "Sí, combina múltiples SVGs en un PDF."
      }
    ]
  },
  "bmp-to-pdf": {
    "title": "BMP a PDF",
    "metaDescription": "Convierte imágenes BMP a documentos PDF.",
    "keywords": [
      "bmp a pdf",
      "convertir bmp",
      "bitmap a pdf"
    ],
    "description": "<p>BMP a PDF convierte imágenes en formato BMP (bitmap) a documentos PDF.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Imágenes BMP",
        "description": "Arrastra y suelta archivos BMP."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona tamaño de página."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Imágenes Antiguas",
        "description": "Convierte archivos BMP heredados.",
        "icon": "image"
      },
      {
        "title": "Capturas Windows",
        "description": "Convierte capturas en formato BMP.",
        "icon": "monitor"
      },
      {
        "title": "Archivos",
        "description": "Archiva imágenes BMP en PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es BMP?",
        "answer": "BMP es un formato de imagen sin compresión de Windows."
      },
      {
        "question": "¿Se reduce el tamaño?",
        "answer": "Sí, el PDF resultante suele ser más pequeño que el BMP original."
      },
      {
        "question": "¿Se mantiene la calidad?",
        "answer": "Sí, se preserva la calidad de la imagen."
      }
    ]
  },
  "heic-to-pdf": {
    "title": "HEIC a PDF",
    "metaDescription": "Convierte imágenes HEIC de iPhone a documentos PDF.",
    "keywords": [
      "heic a pdf",
      "convertir heic",
      "iphone foto pdf"
    ],
    "description": "<p>HEIC a PDF convierte imágenes HEIC (formato de iPhone) a documentos PDF.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Imágenes HEIC",
        "description": "Arrastra y suelta archivos HEIC."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona tamaño de página."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Fotos de iPhone",
        "description": "Convierte fotos de iPhone a PDF.",
        "icon": "smartphone"
      },
      {
        "title": "Álbumes",
        "description": "Crea álbumes PDF de fotos HEIC.",
        "icon": "image"
      },
      {
        "title": "Compartir",
        "description": "Convierte para compartir con usuarios sin soporte HEIC.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es HEIC?",
        "answer": "HEIC es el formato de imagen predeterminado de iPhone desde iOS 11."
      },
      {
        "question": "¿Se mantiene la calidad?",
        "answer": "Sí, se preserva la calidad de la imagen original."
      },
      {
        "question": "¿Soporta Live Photos?",
        "answer": "Se convierte la imagen estática de Live Photos."
      }
    ]
  },
  "tiff-to-pdf": {
    "title": "TIFF a PDF",
    "metaDescription": "Convierte imágenes TIFF a documentos PDF.",
    "keywords": [
      "tiff a pdf",
      "convertir tiff",
      "tif a pdf"
    ],
    "description": "<p>TIFF a PDF convierte imágenes TIFF de alta calidad a documentos PDF.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Imágenes TIFF",
        "description": "Arrastra y suelta archivos TIFF."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona tamaño de página."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Escaneados",
        "description": "Convierte escaneos TIFF a PDF.",
        "icon": "scan"
      },
      {
        "title": "Fotografía Profesional",
        "description": "Crea PDFs de fotos de alta calidad.",
        "icon": "camera"
      },
      {
        "title": "Archivos",
        "description": "Archiva imágenes TIFF en PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Soporta TIFF multipágina?",
        "answer": "Sí, cada página TIFF se convierte en una página PDF."
      },
      {
        "question": "¿Se mantiene la calidad?",
        "answer": "Sí, se preserva la calidad de la imagen."
      },
      {
        "question": "¿Soporta TIFF con capas?",
        "answer": "Se aplana el TIFF al convertir."
      }
    ]
  },
  "txt-to-pdf": {
    "title": "Texto a PDF",
    "metaDescription": "Convierte archivos de texto plano a documentos PDF.",
    "keywords": [
      "texto a pdf",
      "txt a pdf",
      "convertir texto"
    ],
    "description": "<p>Texto a PDF convierte archivos de texto plano (.txt) en documentos PDF con formato personalizable.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Archivo de Texto",
        "description": "Arrastra y suelta o pega texto."
      },
      {
        "step": 2,
        "title": "Configura Formato",
        "description": "Selecciona fuente, tamaño y márgenes."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Documentación",
        "description": "Convierte archivos README y documentación.",
        "icon": "file-text"
      },
      {
        "title": "Código",
        "description": "Crea PDFs de código fuente.",
        "icon": "code"
      },
      {
        "title": "Notas",
        "description": "Convierte notas de texto a PDF.",
        "icon": "sticky-note"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo personalizar la fuente?",
        "answer": "Sí, selecciona fuente, tamaño y color."
      },
      {
        "question": "¿Soporta caracteres especiales?",
        "answer": "Sí, soporta Unicode y caracteres especiales."
      },
      {
        "question": "¿Puedo añadir encabezados?",
        "answer": "Sí, configura encabezados y pies de página."
      }
    ]
  },
  "json-to-pdf": {
    "title": "JSON a PDF",
    "metaDescription": "Convierte datos JSON a documentos PDF formateados.",
    "keywords": [
      "json a pdf",
      "convertir json",
      "datos a pdf"
    ],
    "description": "<p>JSON a PDF convierte datos JSON en documentos PDF con formato legible.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Archivo JSON",
        "description": "Arrastra y suelta o pega JSON."
      },
      {
        "step": 2,
        "title": "Configura Formato",
        "description": "Selecciona estilo de presentación."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Documentación API",
        "description": "Crea documentación de respuestas API.",
        "icon": "code"
      },
      {
        "title": "Informes de Datos",
        "description": "Genera informes de datos JSON.",
        "icon": "bar-chart"
      },
      {
        "title": "Configuraciones",
        "description": "Documenta archivos de configuración.",
        "icon": "settings"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo se formatea el JSON?",
        "answer": "Se presenta con indentación y resaltado de sintaxis."
      },
      {
        "question": "¿Soporta JSON grandes?",
        "answer": "Sí, maneja archivos JSON de cualquier tamaño."
      },
      {
        "question": "¿Puedo personalizar colores?",
        "answer": "Sí, configura el esquema de colores del resaltado."
      }
    ]
  },
  "pdf-to-jpg": {
    "title": "PDF a JPG",
    "metaDescription": "Convierte páginas PDF a imágenes JPG de alta calidad.",
    "keywords": [
      "pdf a jpg",
      "pdf a jpeg",
      "convertir pdf imagen"
    ],
    "description": "<p>PDF a JPG convierte las páginas de tu documento PDF en imágenes JPG de alta calidad.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona calidad y páginas a convertir."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Descarga las imágenes JPG."
      }
    ],
    "useCases": [
      {
        "title": "Compartir en Redes",
        "description": "Convierte páginas para compartir en redes sociales.",
        "icon": "share-2"
      },
      {
        "title": "Presentaciones",
        "description": "Usa páginas PDF como imágenes en presentaciones.",
        "icon": "presentation"
      },
      {
        "title": "Web",
        "description": "Convierte para usar en sitios web.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "¿Qué calidad tienen las imágenes?",
        "answer": "Configura la calidad de 1 a 100, con 100 siendo la máxima."
      },
      {
        "question": "¿Puedo convertir páginas específicas?",
        "answer": "Sí, selecciona las páginas a convertir."
      },
      {
        "question": "¿Cómo descargo múltiples imágenes?",
        "answer": "Se descargan como archivo ZIP."
      }
    ]
  },
  "pdf-to-png": {
    "title": "PDF a PNG",
    "metaDescription": "Convierte páginas PDF a imágenes PNG con transparencia.",
    "keywords": [
      "pdf a png",
      "convertir pdf png",
      "pdf imagen png"
    ],
    "description": "<p>PDF a PNG convierte las páginas de tu documento PDF en imágenes PNG de alta calidad.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona resolución y páginas."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Descarga las imágenes PNG."
      }
    ],
    "useCases": [
      {
        "title": "Gráficos",
        "description": "Extrae gráficos con transparencia.",
        "icon": "image"
      },
      {
        "title": "Diseño",
        "description": "Usa páginas en proyectos de diseño.",
        "icon": "palette"
      },
      {
        "title": "Documentación",
        "description": "Incluye páginas como imágenes en documentos.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "¿Soporta transparencia?",
        "answer": "Sí, las áreas transparentes se preservan."
      },
      {
        "question": "¿Qué resolución tienen?",
        "answer": "Configura la resolución en DPI (72-600)."
      },
      {
        "question": "¿Puedo convertir todas las páginas?",
        "answer": "Sí, convierte todas o selecciona específicas."
      }
    ]
  },
  "pdf-to-webp": {
    "title": "PDF a WebP",
    "metaDescription": "Convierte páginas PDF a imágenes WebP optimizadas para web.",
    "keywords": [
      "pdf a webp",
      "convertir pdf webp",
      "pdf imagen web"
    ],
    "description": "<p>PDF a WebP convierte las páginas de tu documento PDF en imágenes WebP optimizadas para web.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona calidad y páginas."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Descarga las imágenes WebP."
      }
    ],
    "useCases": [
      {
        "title": "Sitios Web",
        "description": "Crea imágenes optimizadas para web.",
        "icon": "globe"
      },
      {
        "title": "Rendimiento",
        "description": "Reduce el tamaño de imágenes para carga rápida.",
        "icon": "zap"
      },
      {
        "title": "Blogs",
        "description": "Convierte páginas para artículos de blog.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "¿Por qué WebP?",
        "answer": "WebP ofrece mejor compresión que JPG y PNG."
      },
      {
        "question": "¿Es compatible con todos los navegadores?",
        "answer": "Sí, todos los navegadores modernos soportan WebP."
      },
      {
        "question": "¿Puedo ajustar la compresión?",
        "answer": "Sí, configura el nivel de calidad."
      }
    ]
  },
  "pdf-to-bmp": {
    "title": "PDF a BMP",
    "metaDescription": "Convierte páginas PDF a imágenes BMP sin compresión.",
    "keywords": [
      "pdf a bmp",
      "convertir pdf bmp",
      "pdf bitmap"
    ],
    "description": "<p>PDF a BMP convierte las páginas de tu documento PDF en imágenes BMP sin compresión.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona resolución y páginas."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Descarga las imágenes BMP."
      }
    ],
    "useCases": [
      {
        "title": "Compatibilidad",
        "description": "Crea imágenes para software antiguo.",
        "icon": "monitor"
      },
      {
        "title": "Impresión",
        "description": "Genera imágenes sin pérdida para impresión.",
        "icon": "printer"
      },
      {
        "title": "Edición",
        "description": "Crea imágenes para edición sin pérdida.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "¿Por qué BMP?",
        "answer": "BMP no tiene compresión, ideal para máxima calidad."
      },
      {
        "question": "¿Los archivos son grandes?",
        "answer": "Sí, BMP produce archivos más grandes que otros formatos."
      },
      {
        "question": "¿Puedo convertir múltiples páginas?",
        "answer": "Sí, se descargan como archivo ZIP."
      }
    ]
  },
  "pdf-to-tiff": {
    "title": "PDF a TIFF",
    "metaDescription": "Convierte páginas PDF a imágenes TIFF de alta calidad.",
    "keywords": [
      "pdf a tiff",
      "convertir pdf tiff",
      "pdf tif"
    ],
    "description": "<p>PDF a TIFF convierte las páginas de tu documento PDF en imágenes TIFF de alta calidad.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona resolución y compresión."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Descarga las imágenes TIFF."
      }
    ],
    "useCases": [
      {
        "title": "Impresión Profesional",
        "description": "Crea imágenes para impresión de alta calidad.",
        "icon": "printer"
      },
      {
        "title": "Archivos",
        "description": "Archiva documentos en formato TIFF.",
        "icon": "archive"
      },
      {
        "title": "Escaneo",
        "description": "Convierte para flujos de trabajo de escaneo.",
        "icon": "scan"
      }
    ],
    "faq": [
      {
        "question": "¿Soporta TIFF multipágina?",
        "answer": "Sí, puede crear un TIFF multipágina o archivos separados."
      },
      {
        "question": "¿Qué compresión usa?",
        "answer": "Soporta LZW, ZIP y sin compresión."
      },
      {
        "question": "¿Qué resolución recomiendas?",
        "answer": "300 DPI para impresión, 150 DPI para pantalla."
      }
    ]
  },
  "pdf-to-greyscale": {
    "title": "PDF a Escala de Grises",
    "metaDescription": "Convierte documentos PDF a color a escala de grises.",
    "keywords": [
      "pdf escala de grises",
      "pdf blanco y negro",
      "convertir pdf gris"
    ],
    "description": "<p>PDF a Escala de Grises convierte documentos PDF a color en versiones en escala de grises.</p><p>Conversión local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona páginas a convertir."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Descarga el PDF en escala de grises."
      }
    ],
    "useCases": [
      {
        "title": "Ahorro de Tinta",
        "description": "Prepara documentos para impresión económica.",
        "icon": "printer"
      },
      {
        "title": "Documentos Formales",
        "description": "Crea versiones formales en blanco y negro.",
        "icon": "file-text"
      },
      {
        "title": "Accesibilidad",
        "description": "Mejora la legibilidad para algunos usuarios.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "¿Es reversible?",
        "answer": "No, guarda una copia del original a color."
      },
      {
        "question": "¿Afecta las imágenes?",
        "answer": "Sí, todas las imágenes se convierten a grises."
      },
      {
        "question": "¿Reduce el tamaño del archivo?",
        "answer": "Puede reducir ligeramente el tamaño."
      }
    ]
  },
  "pdf-to-json": {
    "title": "PDF a JSON",
    "metaDescription": "Extrae datos estructurados de documentos PDF a formato JSON.",
    "keywords": [
      "pdf a json",
      "extraer datos pdf",
      "pdf datos json"
    ],
    "description": "<p>PDF a JSON extrae el contenido y estructura de documentos PDF en formato JSON.</p><p>Extracción local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona qué datos extraer."
      },
      {
        "step": 3,
        "title": "Extrae y Descarga",
        "description": "Descarga el archivo JSON."
      }
    ],
    "useCases": [
      {
        "title": "Procesamiento de Datos",
        "description": "Extrae datos para procesamiento automatizado.",
        "icon": "database"
      },
      {
        "title": "Integración",
        "description": "Integra contenido PDF en aplicaciones.",
        "icon": "plug"
      },
      {
        "title": "Análisis",
        "description": "Analiza estructura y contenido de PDFs.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "¿Qué datos se extraen?",
        "answer": "Texto, metadatos, estructura de páginas y más."
      },
      {
        "question": "¿Extrae tablas?",
        "answer": "Intenta detectar y estructurar tablas."
      },
      {
        "question": "¿Funciona con PDFs escaneados?",
        "answer": "Para PDFs escaneados, usa primero OCR PDF."
      }
    ]
  },
  "ocr-pdf": {
    "title": "PDF con reconocimiento óptico de caracteres",
    "metaDescription": "Reconocimiento óptico de caracteres para hacer PDFs escaneados buscables.",
    "keywords": [
      "ocr pdf",
      "reconocimiento texto",
      "pdf buscable",
      "escaneo a texto"
    ],
    "description": "<p>OCR PDF aplica reconocimiento óptico de caracteres a PDFs escaneados para hacerlos buscables y editables.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el PDF escaneado."
      },
      {
        "step": 2,
        "title": "Selecciona Idioma",
        "description": "Elige el idioma del documento."
      },
      {
        "step": 3,
        "title": "Procesa y Descarga",
        "description": "Aplica OCR y descarga el PDF buscable."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Escaneados",
        "description": "Haz buscables documentos escaneados.",
        "icon": "scan"
      },
      {
        "title": "Archivos Históricos",
        "description": "Digitaliza documentos antiguos.",
        "icon": "archive"
      },
      {
        "title": "Accesibilidad",
        "description": "Permite lectores de pantalla en PDFs escaneados.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "¿Qué idiomas soporta?",
        "answer": "Soporta más de 100 idiomas incluyendo español, inglés, chino y más."
      },
      {
        "question": "¿Qué precisión tiene?",
        "answer": "La precisión depende de la calidad del escaneo, típicamente 95%+."
      },
      {
        "question": "¿Modifica el aspecto del PDF?",
        "answer": "No, añade una capa de texto invisible sobre la imagen."
      }
    ]
  },
  "alternate-merge": {
    "title": "Combinación Alternada",
    "metaDescription": "Combina dos PDFs alternando páginas de cada documento.",
    "keywords": [
      "combinar alternado",
      "intercalar pdf",
      "mezclar páginas"
    ],
    "description": "<p>Combinación Alternada combina dos PDFs alternando páginas de cada documento, útil para documentos de doble cara.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Dos PDFs",
        "description": "Arrastra y suelta los dos documentos."
      },
      {
        "step": 2,
        "title": "Configura Orden",
        "description": "Selecciona el orden de alternancia."
      },
      {
        "step": 3,
        "title": "Combina y Descarga",
        "description": "Crea el PDF combinado."
      }
    ],
    "useCases": [
      {
        "title": "Escaneos Doble Cara",
        "description": "Combina escaneos de anverso y reverso.",
        "icon": "copy"
      },
      {
        "title": "Documentos Bilingües",
        "description": "Alterna páginas en dos idiomas.",
        "icon": "languages"
      },
      {
        "title": "Comparación",
        "description": "Alterna versiones para comparación.",
        "icon": "git-compare"
      }
    ],
    "faq": [
      {
        "question": "¿Qué pasa si tienen diferente número de páginas?",
        "answer": "Las páginas extra se añaden al final."
      },
      {
        "question": "¿Puedo invertir el orden de uno?",
        "answer": "Sí, puedes invertir el orden de cualquier documento."
      },
      {
        "question": "¿Puedo combinar más de dos PDFs?",
        "answer": "Esta herramienta es para dos PDFs. Usa Combinar PDF para más."
      }
    ]
  },
  "add-attachments": {
    "title": "Añadir Adjuntos",
    "metaDescription": "Añade archivos adjuntos a documentos PDF.",
    "keywords": [
      "adjuntos pdf",
      "añadir archivos pdf",
      "incrustar archivos"
    ],
    "description": "<p>Añadir Adjuntos te permite incrustar archivos dentro de documentos PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Añade Archivos",
        "description": "Selecciona los archivos a adjuntar."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Descarga el PDF con adjuntos."
      }
    ],
    "useCases": [
      {
        "title": "Documentación",
        "description": "Incluye archivos de soporte en documentos.",
        "icon": "paperclip"
      },
      {
        "title": "Informes",
        "description": "Adjunta datos fuente a informes.",
        "icon": "file-text"
      },
      {
        "title": "Contratos",
        "description": "Incluye anexos en contratos.",
        "icon": "file-signature"
      }
    ],
    "faq": [
      {
        "question": "¿Qué tipos de archivos puedo adjuntar?",
        "answer": "Cualquier tipo de archivo: documentos, imágenes, hojas de cálculo, etc."
      },
      {
        "question": "¿Hay límite de tamaño?",
        "answer": "El tamaño total del PDF con adjuntos no debe exceder 500MB."
      },
      {
        "question": "¿Cómo se accede a los adjuntos?",
        "answer": "Los lectores PDF muestran los adjuntos en un panel lateral."
      }
    ]
  },
  "extract-attachments": {
    "title": "Extraer Adjuntos",
    "metaDescription": "Extrae archivos adjuntos de documentos PDF.",
    "keywords": [
      "extraer adjuntos pdf",
      "descargar adjuntos",
      "archivos incrustados"
    ],
    "description": "<p>Extraer Adjuntos te permite descargar los archivos incrustados en documentos PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Revisa Adjuntos",
        "description": "Ve la lista de archivos adjuntos."
      },
      {
        "step": 3,
        "title": "Extrae y Descarga",
        "description": "Descarga los adjuntos seleccionados."
      }
    ],
    "useCases": [
      {
        "title": "Recuperar Archivos",
        "description": "Extrae archivos de documentos recibidos.",
        "icon": "download"
      },
      {
        "title": "Organización",
        "description": "Separa adjuntos para organización.",
        "icon": "folder"
      },
      {
        "title": "Análisis",
        "description": "Extrae datos adjuntos para análisis.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo sé si un PDF tiene adjuntos?",
        "answer": "La herramienta muestra todos los adjuntos encontrados."
      },
      {
        "question": "¿Puedo extraer adjuntos específicos?",
        "answer": "Sí, selecciona los adjuntos a extraer."
      },
      {
        "question": "¿Se modifica el PDF original?",
        "answer": "No, solo se extraen copias de los adjuntos."
      }
    ]
  },
  "edit-attachments": {
    "title": "Editar Adjuntos",
    "metaDescription": "Gestiona los archivos adjuntos en documentos PDF.",
    "keywords": [
      "editar adjuntos pdf",
      "gestionar adjuntos",
      "modificar adjuntos"
    ],
    "description": "<p>Editar Adjuntos te permite añadir, eliminar y renombrar archivos adjuntos en documentos PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Gestiona Adjuntos",
        "description": "Añade, elimina o renombra adjuntos."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Descarga el PDF modificado."
      }
    ],
    "useCases": [
      {
        "title": "Actualizar Adjuntos",
        "description": "Reemplaza adjuntos desactualizados.",
        "icon": "refresh-cw"
      },
      {
        "title": "Limpiar PDFs",
        "description": "Elimina adjuntos innecesarios.",
        "icon": "trash-2"
      },
      {
        "title": "Organizar",
        "description": "Renombra adjuntos para mejor organización.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo reemplazar un adjunto?",
        "answer": "Sí, elimina el existente y añade el nuevo."
      },
      {
        "question": "¿Puedo cambiar el nombre?",
        "answer": "Sí, renombra cualquier adjunto."
      },
      {
        "question": "¿Afecta el contenido del PDF?",
        "answer": "No, solo modifica los adjuntos."
      }
    ]
  },
  "divide-pages": {
    "title": "Dividir Páginas",
    "metaDescription": "Divide páginas PDF grandes en múltiples páginas más pequeñas.",
    "keywords": [
      "dividir páginas pdf",
      "cortar páginas",
      "separar páginas"
    ],
    "description": "<p>Dividir Páginas corta páginas PDF grandes en múltiples páginas más pequeñas.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Configura División",
        "description": "Selecciona cómo dividir las páginas."
      },
      {
        "step": 3,
        "title": "Divide y Descarga",
        "description": "Descarga el PDF con páginas divididas."
      }
    ],
    "useCases": [
      {
        "title": "Posters",
        "description": "Divide posters grandes para impresión en partes.",
        "icon": "layout-grid"
      },
      {
        "title": "Planos",
        "description": "Divide planos grandes en secciones.",
        "icon": "map"
      },
      {
        "title": "Presentaciones",
        "description": "Divide diapositivas anchas en páginas estándar.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo se dividen las páginas?",
        "answer": "Puedes dividir horizontal, vertical o en cuadrícula."
      },
      {
        "question": "¿Puedo especificar el tamaño?",
        "answer": "Sí, define el tamaño de las páginas resultantes."
      },
      {
        "question": "¿Se pierde contenido?",
        "answer": "No, todo el contenido se preserva en las páginas divididas."
      }
    ]
  },
  "add-blank-page": {
    "title": "Añadir Página en Blanco",
    "metaDescription": "Inserta páginas en blanco en documentos PDF.",
    "keywords": [
      "añadir página blanco",
      "insertar página pdf",
      "página vacía"
    ],
    "description": "<p>Añadir Página en Blanco te permite insertar páginas vacías en cualquier posición de tu documento PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Posición",
        "description": "Elige dónde insertar la página en blanco."
      },
      {
        "step": 3,
        "title": "Añade y Descarga",
        "description": "Inserta la página y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Separadores",
        "description": "Añade páginas en blanco como separadores de sección.",
        "icon": "file-plus"
      },
      {
        "title": "Impresión",
        "description": "Añade páginas para impresión a doble cara.",
        "icon": "printer"
      },
      {
        "title": "Notas",
        "description": "Inserta páginas para notas manuscritas.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo añadir múltiples páginas?",
        "answer": "Sí, añade tantas páginas en blanco como necesites."
      },
      {
        "question": "¿Puedo elegir el tamaño?",
        "answer": "Las páginas en blanco coinciden con el tamaño del documento."
      },
      {
        "question": "¿Puedo añadir al inicio o final?",
        "answer": "Sí, inserta en cualquier posición."
      }
    ]
  },
  "reverse-pages": {
    "title": "Invertir Páginas",
    "metaDescription": "Invierte el orden de las páginas en documentos PDF.",
    "keywords": [
      "invertir páginas pdf",
      "orden inverso",
      "voltear pdf"
    ],
    "description": "<p>Invertir Páginas cambia el orden de las páginas de tu PDF, poniendo la última primero.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Confirma",
        "description": "Revisa la vista previa del orden invertido."
      },
      {
        "step": 3,
        "title": "Invierte y Descarga",
        "description": "Aplica la inversión y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Corregir Escaneos",
        "description": "Corrige documentos escaneados en orden inverso.",
        "icon": "refresh-cw"
      },
      {
        "title": "Presentaciones",
        "description": "Invierte el orden para presentaciones inversas.",
        "icon": "presentation"
      },
      {
        "title": "Impresión",
        "description": "Prepara documentos para ciertos tipos de impresión.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo invertir páginas específicas?",
        "answer": "Esta herramienta invierte todas las páginas. Usa Organizar PDF para reordenar específicas."
      },
      {
        "question": "¿Afecta el contenido de las páginas?",
        "answer": "No, solo cambia el orden, no el contenido."
      },
      {
        "question": "¿Es reversible?",
        "answer": "Sí, invierte de nuevo para restaurar el orden original."
      }
    ]
  },
  "rotate-pdf": {
    "title": "Rotar PDF",
    "metaDescription": "Rota páginas PDF 90, 180 o 270 grados.",
    "keywords": [
      "rotar pdf",
      "girar páginas",
      "orientación pdf"
    ],
    "description": "<p>Rotar PDF te permite girar páginas de tu documento 90, 180 o 270 grados.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Rotación",
        "description": "Elige el ángulo y las páginas a rotar."
      },
      {
        "step": 3,
        "title": "Rota y Descarga",
        "description": "Aplica la rotación y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Corregir Orientación",
        "description": "Corrige páginas escaneadas con orientación incorrecta.",
        "icon": "rotate-cw"
      },
      {
        "title": "Documentos Mixtos",
        "description": "Unifica orientación en documentos con páginas mixtas.",
        "icon": "file-text"
      },
      {
        "title": "Presentaciones",
        "description": "Ajusta orientación para presentaciones.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo rotar páginas específicas?",
        "answer": "Sí, selecciona las páginas a rotar."
      },
      {
        "question": "¿Qué ángulos están disponibles?",
        "answer": "90° (derecha), 180° (invertir), 270° (izquierda)."
      },
      {
        "question": "¿Afecta la calidad?",
        "answer": "No, la rotación no afecta la calidad del contenido."
      }
    ]
  },
  "n-up-pdf": {
    "title": "PDF de varias páginas en una",
    "metaDescription": "Coloca múltiples páginas PDF en una sola página (2-up, 4-up, etc.).",
    "keywords": [
      "n-arriba pdf",
      "múltiples páginas",
      "2-up",
      "4-up",
      "imprimir múltiple"
    ],
    "description": "<p>N-Up PDF coloca múltiples páginas de tu documento en una sola página, útil para ahorrar papel al imprimir.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Diseño",
        "description": "Elige 2-up, 4-up, 6-up o 9-up."
      },
      {
        "step": 3,
        "title": "Procesa y Descarga",
        "description": "Crea el PDF N-up y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Ahorro de Papel",
        "description": "Imprime múltiples páginas por hoja.",
        "icon": "file-minus"
      },
      {
        "title": "Resúmenes",
        "description": "Crea resúmenes visuales de documentos.",
        "icon": "layout-grid"
      },
      {
        "title": "Revisión",
        "description": "Revisa documentos con vista general.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "¿Qué significa N-up?",
        "answer": "N páginas por hoja: 2-up = 2 páginas, 4-up = 4 páginas, etc."
      },
      {
        "question": "¿Puedo personalizar el orden?",
        "answer": "Sí, elige el orden de lectura (izquierda-derecha, arriba-abajo)."
      },
      {
        "question": "¿Se reduce la calidad?",
        "answer": "Las páginas se escalan para ajustarse, pero mantienen legibilidad."
      }
    ]
  },
  "combine-single-page": {
    "title": "Combinar en Página Única",
    "metaDescription": "Combina todas las páginas PDF en una sola página larga.",
    "keywords": [
      "combinar página única",
      "página continua",
      "unir páginas"
    ],
    "description": "<p>Combinar en Página Única une todas las páginas de tu PDF en una sola página larga continua.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona orientación y espaciado."
      },
      {
        "step": 3,
        "title": "Combina y Descarga",
        "description": "Crea la página única y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Infografías",
        "description": "Crea documentos de desplazamiento continuo.",
        "icon": "scroll"
      },
      {
        "title": "Impresión de Banners",
        "description": "Prepara documentos para impresión de banners.",
        "icon": "printer"
      },
      {
        "title": "Visualización",
        "description": "Crea vistas panorámicas de documentos.",
        "icon": "maximize"
      }
    ],
    "faq": [
      {
        "question": "¿Hay límite de páginas?",
        "answer": "No hay límite, pero documentos muy largos pueden ser difíciles de manejar."
      },
      {
        "question": "¿Puedo añadir espacio entre páginas?",
        "answer": "Sí, configura el espaciado entre páginas originales."
      },
      {
        "question": "¿Funciona con páginas de diferentes tamaños?",
        "answer": "Sí, las páginas se ajustan al ancho máximo."
      }
    ]
  },
  "view-metadata": {
    "title": "Ver Metadatos",
    "metaDescription": "Visualiza los metadatos y propiedades de documentos PDF.",
    "keywords": [
      "ver metadatos pdf",
      "propiedades pdf",
      "información pdf"
    ],
    "description": "<p>Ver Metadatos muestra toda la información de propiedades de tu documento PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Revisa Metadatos",
        "description": "Ve título, autor, fechas, palabras clave, etc."
      },
      {
        "step": 3,
        "title": "Exporta si Necesitas",
        "description": "Exporta los metadatos a JSON."
      }
    ],
    "useCases": [
      {
        "title": "Auditoría",
        "description": "Revisa información de documentos recibidos.",
        "icon": "search"
      },
      {
        "title": "Verificación",
        "description": "Verifica autor y fechas de documentos.",
        "icon": "check-circle"
      },
      {
        "title": "Catalogación",
        "description": "Extrae información para catalogar documentos.",
        "icon": "database"
      }
    ],
    "faq": [
      {
        "question": "¿Qué metadatos se muestran?",
        "answer": "Título, autor, asunto, palabras clave, fechas de creación y modificación, productor, etc."
      },
      {
        "question": "¿Puedo editar los metadatos?",
        "answer": "Usa la herramienta Editar Metadatos para modificarlos."
      },
      {
        "question": "¿Se modifica el PDF?",
        "answer": "No, solo se visualiza la información."
      }
    ]
  },
  "edit-metadata": {
    "title": "Editar Metadatos",
    "metaDescription": "Edita los metadatos y propiedades de documentos PDF.",
    "keywords": [
      "editar metadatos pdf",
      "modificar propiedades",
      "cambiar autor pdf"
    ],
    "description": "<p>Editar Metadatos te permite modificar las propiedades de tu documento PDF como título, autor y palabras clave.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Edita Metadatos",
        "description": "Modifica título, autor, asunto, palabras clave."
      },
      {
        "step": 3,
        "title": "Guarda y Descarga",
        "description": "Aplica los cambios y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Branding",
        "description": "Añade información de empresa a documentos.",
        "icon": "building"
      },
      {
        "title": "SEO",
        "description": "Optimiza metadatos para búsqueda.",
        "icon": "search"
      },
      {
        "title": "Organización",
        "description": "Añade palabras clave para catalogación.",
        "icon": "tag"
      }
    ],
    "faq": [
      {
        "question": "¿Qué metadatos puedo editar?",
        "answer": "Título, autor, asunto, palabras clave, productor y más."
      },
      {
        "question": "¿Puedo eliminar metadatos?",
        "answer": "Sí, deja campos vacíos o usa Eliminar Metadatos."
      },
      {
        "question": "¿Afecta el contenido?",
        "answer": "No, solo modifica las propiedades del documento."
      }
    ]
  },
  "pdf-to-zip": {
    "title": "PDFs a ZIP",
    "metaDescription": "Empaqueta múltiples archivos PDF en un archivo ZIP.",
    "keywords": [
      "pdf a zip",
      "comprimir pdfs",
      "empaquetar pdf"
    ],
    "description": "<p>PDFs a ZIP empaqueta múltiples archivos PDF en un único archivo ZIP comprimido.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube PDFs",
        "description": "Arrastra y suelta múltiples archivos PDF."
      },
      {
        "step": 2,
        "title": "Configura Opciones",
        "description": "Selecciona nivel de compresión."
      },
      {
        "step": 3,
        "title": "Crea y Descarga",
        "description": "Genera el archivo ZIP y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Envío por Correo",
        "description": "Empaqueta múltiples PDFs para enviar por email.",
        "icon": "mail"
      },
      {
        "title": "Archivos",
        "description": "Comprime documentos para almacenamiento.",
        "icon": "archive"
      },
      {
        "title": "Distribución",
        "description": "Prepara paquetes de documentos para distribución.",
        "icon": "package"
      }
    ],
    "faq": [
      {
        "question": "¿Cuántos PDFs puedo empaquetar?",
        "answer": "Hasta 100 archivos PDF."
      },
      {
        "question": "¿Se comprimen los PDFs?",
        "answer": "El ZIP comprime el paquete, no los PDFs individuales."
      },
      {
        "question": "¿Puedo añadir otros archivos?",
        "answer": "Esta herramienta es específica para PDFs."
      }
    ]
  },
  "compare-pdfs": {
    "title": "Comparar PDFs",
    "metaDescription": "Compara dos documentos PDF lado a lado y resalta diferencias.",
    "keywords": [
      "comparar pdf",
      "diferencias pdf",
      "comparación documentos"
    ],
    "description": "<p>Comparar PDFs muestra dos documentos lado a lado y resalta las diferencias entre ellos.</p>\n      <p>Vea las páginas una junto a otra, navegue entre pares de páginas y filtre los cambios resaltados. Compara el texto extraído y los nombres de fuentes. No compara imágenes escaneadas ni otros cambios visuales.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube Dos PDFs",
        "description": "Arrastra y suelta los dos documentos a comparar."
      },
      {
        "step": 2,
        "title": "Comparar PDF",
        "description": "Vea las páginas una junto a otra, navegue entre pares de páginas y filtre los cambios resaltados."
      },
      {
        "step": 3,
        "title": "Filtros de resaltado",
        "description": "Cambios de texto · Cambios de fuente · Encabezados y pies de página · Texto movido"
      }
    ],
    "useCases": [
      {
        "title": "Control de Versiones",
        "description": "Compara diferentes versiones de documentos.",
        "icon": "git-compare"
      },
      {
        "title": "Revisión de Contratos",
        "description": "Identifica cambios en contratos.",
        "icon": "file-signature"
      },
      {
        "title": "Auditoría",
        "description": "Verifica cambios en documentos oficiales.",
        "icon": "search"
      }
    ],
    "faq": [
      {
        "question": "¿Qué diferencias detecta?",
        "answer": "Cambios de texto · Cambios de fuente · Encabezados y pies de página · Texto movido"
      },
      {
        "question": "¿Funciona con PDFs escaneados?",
        "answer": "Compara el texto extraído y los nombres de fuentes. No compara imágenes escaneadas ni otros cambios visuales."
      },
      {
        "question": "¿Puedo comparar más de dos PDFs?",
        "answer": "Vea las páginas una junto a otra, navegue entre pares de páginas y filtre los cambios resaltados. Compara el texto extraído y los nombres de fuentes. No compara imágenes escaneadas ni otros cambios visuales."
      }
    ]
  },
  "posterize-pdf": {
    "title": "Posterizar PDF",
    "metaDescription": "Divide páginas PDF grandes en múltiples páginas para impresión de posters.",
    "keywords": [
      "posterizar pdf",
      "imprimir poster",
      "dividir página grande"
    ],
    "description": "<p>Posterizar PDF divide páginas grandes en múltiples páginas más pequeñas para imprimir posters en impresoras estándar.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Configura Cuadrícula",
        "description": "Selecciona el número de filas y columnas."
      },
      {
        "step": 3,
        "title": "Posteriza y Descarga",
        "description": "Crea las páginas divididas y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Posters",
        "description": "Imprime posters grandes en hojas A4.",
        "icon": "maximize"
      },
      {
        "title": "Planos",
        "description": "Divide planos para impresión en partes.",
        "icon": "map"
      },
      {
        "title": "Banners",
        "description": "Crea banners imprimibles en secciones.",
        "icon": "layout-grid"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo funciona?",
        "answer": "Divide cada página en una cuadrícula de páginas más pequeñas."
      },
      {
        "question": "¿Puedo añadir marcas de corte?",
        "answer": "Sí, añade marcas de corte y superposición."
      },
      {
        "question": "¿Qué tamaño de cuadrícula puedo usar?",
        "answer": "Desde 2x2 hasta 10x10 o personalizado."
      }
    ]
  },
  "fix-page-size": {
    "title": "Corregir Tamaño de Página",
    "metaDescription": "Estandariza el tamaño de página de documentos PDF.",
    "keywords": [
      "corregir tamaño pdf",
      "estandarizar páginas",
      "tamaño página pdf"
    ],
    "description": "<p>Corregir Tamaño de Página estandariza todas las páginas de tu PDF a un tamaño uniforme.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Tamaño",
        "description": "Elige el tamaño de página deseado (A4, Letter, etc.)."
      },
      {
        "step": 3,
        "title": "Aplica y Descarga",
        "description": "Estandariza las páginas y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Impresión",
        "description": "Prepara documentos para impresión uniforme.",
        "icon": "printer"
      },
      {
        "title": "Combinación",
        "description": "Estandariza antes de combinar documentos.",
        "icon": "combine"
      },
      {
        "title": "Presentación",
        "description": "Unifica tamaños para presentaciones profesionales.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "¿Qué tamaños están disponibles?",
        "answer": "A4, Letter, Legal, A3, A5 y tamaños personalizados."
      },
      {
        "question": "¿Se escala el contenido?",
        "answer": "Puedes elegir escalar, recortar o añadir márgenes."
      },
      {
        "question": "¿Afecta la calidad?",
        "answer": "El contenido mantiene su calidad original."
      }
    ]
  },
  "linearize-pdf": {
    "title": "Linearizar PDF",
    "metaDescription": "Optimiza PDFs para visualización web rápida (Fast Web View).",
    "keywords": [
      "linearizar pdf",
      "vista web rápida",
      "optimizar pdf web"
    ],
    "description": "<p>Linearizar PDF optimiza documentos para visualización web rápida, permitiendo ver la primera página mientras se descarga el resto.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Confirma",
        "description": "Revisa las opciones de linearización."
      },
      {
        "step": 3,
        "title": "Lineariza y Descarga",
        "description": "Optimiza el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Publicación Web",
        "description": "Optimiza PDFs para sitios web.",
        "icon": "globe"
      },
      {
        "title": "Documentos Grandes",
        "description": "Mejora la experiencia con PDFs grandes.",
        "icon": "file-text"
      },
      {
        "title": "Distribución",
        "description": "Prepara documentos para distribución en línea.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es linearización?",
        "answer": "Reorganiza el PDF para que la primera página se muestre inmediatamente."
      },
      {
        "question": "¿Reduce el tamaño?",
        "answer": "No significativamente, pero mejora la velocidad de visualización."
      },
      {
        "question": "¿Afecta la compatibilidad?",
        "answer": "No, los PDFs linearizados son compatibles con todos los lectores."
      }
    ]
  },
  "page-dimensions": {
    "title": "Dimensiones de Página",
    "metaDescription": "Analiza y muestra las dimensiones de cada página en documentos PDF.",
    "keywords": [
      "dimensiones pdf",
      "tamaño páginas",
      "medidas pdf"
    ],
    "description": "<p>Dimensiones de Página analiza y muestra el tamaño de cada página en tu documento PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Revisa Dimensiones",
        "description": "Ve el tamaño de cada página."
      },
      {
        "step": 3,
        "title": "Exporta si Necesitas",
        "description": "Exporta el informe de dimensiones."
      }
    ],
    "useCases": [
      {
        "title": "Verificación",
        "description": "Verifica tamaños antes de imprimir.",
        "icon": "ruler"
      },
      {
        "title": "Análisis",
        "description": "Analiza documentos con páginas mixtas.",
        "icon": "search"
      },
      {
        "title": "Preparación",
        "description": "Identifica páginas que necesitan ajuste.",
        "icon": "settings"
      }
    ],
    "faq": [
      {
        "question": "¿Qué unidades se muestran?",
        "answer": "Milímetros, pulgadas y puntos."
      },
      {
        "question": "¿Detecta orientación?",
        "answer": "Sí, muestra si cada página es vertical u horizontal."
      },
      {
        "question": "¿Puedo cambiar las dimensiones?",
        "answer": "Usa Corregir Tamaño de Página para modificar dimensiones."
      }
    ]
  },
  "remove-restrictions": {
    "title": "Eliminar Restricciones",
    "metaDescription": "Elimina restricciones de seguridad de documentos PDF.",
    "keywords": [
      "eliminar restricciones pdf",
      "desbloquear pdf",
      "quitar seguridad"
    ],
    "description": "<p>Eliminar Restricciones quita las restricciones de seguridad de PDFs que impiden copiar, imprimir o editar.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento restringido."
      },
      {
        "step": 2,
        "title": "Ingresa Contraseña",
        "description": "Si es necesario, ingresa la contraseña del propietario."
      },
      {
        "step": 3,
        "title": "Elimina y Descarga",
        "description": "Quita las restricciones y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Imprimir Documentos",
        "description": "Habilita impresión en PDFs restringidos.",
        "icon": "printer"
      },
      {
        "title": "Copiar Texto",
        "description": "Permite copiar texto de documentos bloqueados.",
        "icon": "copy"
      },
      {
        "title": "Editar PDFs",
        "description": "Habilita edición en documentos protegidos.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "¿Necesito la contraseña?",
        "answer": "Depende del tipo de protección. Algunas restricciones requieren contraseña."
      },
      {
        "question": "¿Es legal?",
        "answer": "Solo usa esta herramienta con documentos que tienes derecho a modificar."
      },
      {
        "question": "¿Funciona con todos los PDFs?",
        "answer": "Funciona con la mayoría de PDFs con restricciones estándar."
      }
    ]
  },
  "repair-pdf": {
    "title": "Reparar PDF",
    "metaDescription": "Repara archivos PDF dañados o corruptos.",
    "keywords": [
      "reparar pdf",
      "arreglar pdf",
      "pdf corrupto",
      "recuperar pdf"
    ],
    "description": "<p>Reparar PDF intenta recuperar y reparar archivos PDF dañados o corruptos.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el archivo dañado."
      },
      {
        "step": 2,
        "title": "Inicia Reparación",
        "description": "La herramienta analiza y repara el archivo."
      },
      {
        "step": 3,
        "title": "Descarga Reparado",
        "description": "Descarga el PDF reparado."
      }
    ],
    "useCases": [
      {
        "title": "Archivos Corruptos",
        "description": "Recupera PDFs que no se abren correctamente.",
        "icon": "wrench"
      },
      {
        "title": "Descargas Incompletas",
        "description": "Repara PDFs de descargas interrumpidas.",
        "icon": "download"
      },
      {
        "title": "Archivos Antiguos",
        "description": "Recupera documentos de archivos dañados.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Qué problemas puede reparar?",
        "answer": "Estructura dañada, referencias rotas, objetos corruptos."
      },
      {
        "question": "¿Siempre funciona?",
        "answer": "Depende del nivel de daño. Archivos muy dañados pueden no ser recuperables."
      },
      {
        "question": "¿Se pierde contenido?",
        "answer": "La herramienta intenta preservar todo el contenido posible."
      }
    ]
  },
  "encrypt-pdf": {
    "title": "Cifrar PDF",
    "metaDescription": "Protege documentos PDF con contraseña y cifrado.",
    "keywords": [
      "cifrar pdf",
      "proteger pdf",
      "contraseña pdf",
      "seguridad pdf"
    ],
    "description": "<p>Cifrar PDF protege tus documentos con contraseña y cifrado AES para máxima seguridad.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Configura Seguridad",
        "description": "Establece contraseña y permisos."
      },
      {
        "step": 3,
        "title": "Cifra y Descarga",
        "description": "Aplica el cifrado y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Confidenciales",
        "description": "Protege información sensible.",
        "icon": "lock"
      },
      {
        "title": "Envío Seguro",
        "description": "Cifra documentos antes de enviar por email.",
        "icon": "mail"
      },
      {
        "title": "Cumplimiento",
        "description": "Cumple con requisitos de seguridad de datos.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "¿Qué cifrado se usa?",
        "answer": "AES de 128 o 256 bits, el estándar de la industria."
      },
      {
        "question": "¿Puedo establecer permisos?",
        "answer": "Sí, controla impresión, copia, edición y más."
      },
      {
        "question": "¿Qué pasa si olvido la contraseña?",
        "answer": "No hay forma de recuperar PDFs cifrados sin la contraseña."
      }
    ]
  },
  "sanitize-pdf": {
    "title": "Sanitizar PDF",
    "metaDescription": "Elimina información oculta y metadatos de documentos PDF.",
    "keywords": [
      "sanitizar pdf",
      "limpiar pdf",
      "eliminar información oculta"
    ],
    "description": "<p>Sanitizar PDF elimina toda la información oculta, metadatos, scripts y datos sensibles de tus documentos.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Opciones",
        "description": "Elige qué elementos eliminar."
      },
      {
        "step": 3,
        "title": "Sanitiza y Descarga",
        "description": "Limpia el PDF y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Privacidad",
        "description": "Elimina información personal antes de compartir.",
        "icon": "shield"
      },
      {
        "title": "Seguridad",
        "description": "Quita scripts y elementos potencialmente peligrosos.",
        "icon": "alert-triangle"
      },
      {
        "title": "Publicación",
        "description": "Prepara documentos para publicación pública.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "¿Qué se elimina?",
        "answer": "Metadatos, comentarios, adjuntos, scripts, capas ocultas y más."
      },
      {
        "question": "¿Afecta el contenido visible?",
        "answer": "No, solo elimina información oculta."
      },
      {
        "question": "¿Es reversible?",
        "answer": "No, guarda una copia del original."
      }
    ]
  },
  "decrypt-pdf": {
    "title": "Descifrar PDF",
    "metaDescription": "Elimina la protección con contraseña de documentos PDF.",
    "keywords": [
      "descifrar pdf",
      "quitar contraseña",
      "desbloquear pdf"
    ],
    "description": "<p>Descifrar PDF elimina la protección con contraseña de documentos PDF cifrados.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento cifrado."
      },
      {
        "step": 2,
        "title": "Ingresa Contraseña",
        "description": "Ingresa la contraseña del documento."
      },
      {
        "step": 3,
        "title": "Descifra y Descarga",
        "description": "Elimina el cifrado y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Acceso a Documentos",
        "description": "Desbloquea PDFs para los que tienes la contraseña.",
        "icon": "unlock"
      },
      {
        "title": "Archivos",
        "description": "Elimina cifrado de documentos archivados.",
        "icon": "archive"
      },
      {
        "title": "Procesamiento",
        "description": "Prepara PDFs cifrados para otras operaciones.",
        "icon": "settings"
      }
    ],
    "faq": [
      {
        "question": "¿Necesito la contraseña?",
        "answer": "Sí, necesitas la contraseña correcta para descifrar."
      },
      {
        "question": "¿Puedo descifrar sin contraseña?",
        "answer": "No, esta herramienta requiere la contraseña legítima."
      },
      {
        "question": "¿Se elimina toda la protección?",
        "answer": "Sí, el PDF resultante no tiene cifrado ni restricciones."
      }
    ]
  },
  "flatten-pdf": {
    "title": "Aplanar PDF",
    "metaDescription": "Aplana formularios y anotaciones en documentos PDF.",
    "keywords": [
      "aplanar pdf",
      "aplanar pdf",
      "formularios pdf"
    ],
    "description": "<p>Aplanar PDF convierte formularios interactivos y anotaciones en contenido estático no editable.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Selecciona Opciones",
        "description": "Elige qué elementos aplanar."
      },
      {
        "step": 3,
        "title": "Aplana y Descarga",
        "description": "Convierte a estático y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Formularios Completados",
        "description": "Convierte formularios rellenados en documentos finales.",
        "icon": "file-check"
      },
      {
        "title": "Archivos",
        "description": "Crea versiones permanentes de documentos anotados.",
        "icon": "archive"
      },
      {
        "title": "Distribución",
        "description": "Prepara documentos para distribución sin edición.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "¿Qué se aplana?",
        "answer": "Campos de formulario, anotaciones, comentarios y capas."
      },
      {
        "question": "¿Es reversible?",
        "answer": "No, guarda una copia del original con elementos editables."
      },
      {
        "question": "¿Afecta la apariencia?",
        "answer": "No, el documento se ve igual pero los elementos son estáticos."
      }
    ]
  },
  "remove-metadata": {
    "title": "Eliminar Metadatos",
    "metaDescription": "Elimina todos los metadatos de documentos PDF.",
    "keywords": [
      "eliminar metadatos pdf",
      "quitar propiedades",
      "limpiar metadatos"
    ],
    "description": "<p>Eliminar Metadatos quita toda la información de propiedades de tus documentos PDF para proteger la privacidad.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Confirma",
        "description": "Revisa los metadatos a eliminar."
      },
      {
        "step": 3,
        "title": "Elimina y Descarga",
        "description": "Quita los metadatos y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Privacidad",
        "description": "Elimina información de autor y fechas.",
        "icon": "shield"
      },
      {
        "title": "Anonimización",
        "description": "Prepara documentos para compartir anónimamente.",
        "icon": "user-x"
      },
      {
        "title": "Publicación",
        "description": "Limpia metadatos antes de publicar.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "¿Qué metadatos se eliminan?",
        "answer": "Autor, título, asunto, palabras clave, fechas, productor, etc."
      },
      {
        "question": "¿Afecta el contenido?",
        "answer": "No, solo elimina las propiedades del documento."
      },
      {
        "question": "¿Es reversible?",
        "answer": "No, guarda una copia si necesitas los metadatos."
      }
    ]
  },
  "change-permissions": {
    "title": "Cambiar Permisos",
    "metaDescription": "Modifica los permisos de seguridad de documentos PDF.",
    "keywords": [
      "permisos pdf",
      "cambiar permisos",
      "seguridad pdf"
    ],
    "description": "<p>Cambiar Permisos te permite modificar qué acciones están permitidas en tu documento PDF.</p><p>Procesamiento local.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta el documento."
      },
      {
        "step": 2,
        "title": "Configura Permisos",
        "description": "Selecciona qué acciones permitir o restringir."
      },
      {
        "step": 3,
        "title": "Aplica y Descarga",
        "description": "Guarda los nuevos permisos y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Proteger Contenido",
        "description": "Restringe copia y edición de documentos.",
        "icon": "lock"
      },
      {
        "title": "Control de Impresión",
        "description": "Limita o permite impresión.",
        "icon": "printer"
      },
      {
        "title": "Distribución",
        "description": "Configura permisos para distribución controlada.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "¿Qué permisos puedo cambiar?",
        "answer": "Impresión, copia, edición, anotaciones, extracción de páginas."
      },
      {
        "question": "¿Necesito contraseña?",
        "answer": "Puedes establecer una contraseña de propietario para proteger los permisos."
      },
      {
        "question": "¿Son los permisos seguros?",
        "answer": "Los permisos pueden ser eludidos con herramientas especializadas."
      }
    ]
  },
  "pdf-to-pptx": {
    "title": "PDF a PowerPoint",
    "metaDescription": "Convierte PDF a presentación PowerPoint (PPTX). Cada página se convierte en una diapositiva.",
    "keywords": [
      "pdf a pptx",
      "pdf a powerpoint",
      "convertir pdf ppt",
      "pdf diapositiva"
    ],
    "description": "\n      <p>PDF a PowerPoint convierte tus documentos PDF en presentaciones de PowerPoint (PPTX) editables. Cada página del PDF se transforma en una diapositiva de alta calidad, preservando el diseño visual.</p>\n      <p>Ideal para convertir informes o documentos en formato de presentación.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Arrastra y suelta o selecciona el documento."
      },
      {
        "step": 2,
        "title": "Configura Calidad",
        "description": "Selecciona la calidad de imagen (DPI) de las diapositivas."
      },
      {
        "step": 3,
        "title": "Convierte y Descarga",
        "description": "Crea tu presentación PPTX y descarga."
      }
    ],
    "useCases": [
      {
        "title": "Crear Presentaciones",
        "description": "Convierte informes PDF en diapositivas para reuniones.",
        "icon": "presentation"
      },
      {
        "title": "Material de Formación",
        "description": "Transforma manuales PDF en presentaciones interactivas.",
        "icon": "book-open"
      },
      {
        "title": "Reutilizar Contenido",
        "description": "Usa contenido PDF existente en nuevas presentaciones.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "¿Son editables las diapositivas?",
        "answer": "Cada diapositiva contiene una imagen de la página. Puedes añadir elementos encima."
      },
      {
        "question": "¿Qué DPI debo usar?",
        "answer": "150 DPI para pantalla, 300 DPI para impresión."
      },
      {
        "question": "¿Funciona con múltiples páginas?",
        "answer": "Sí, cada página se convierte en una diapositiva separada."
      }
    ]
  },
  "pdf-to-excel": {
    "title": "PDF a Excel",
    "metaDescription": "Convierte PDF a hoja de cálculo Excel. Extrae tablas a formato XLSX.",
    "keywords": [
      "pdf a excel",
      "pdf a xlsx",
      "extraer tablas",
      "datos pdf"
    ],
    "description": "\n      <p>PDF a Excel convierte tus documentos PDF en hojas de cálculo Microsoft Excel (XLSX) editables. La herramienta detecta automáticamente las tablas en tu PDF y las extrae en hojas separadas.</p>\n      <p>Ideal para analizar informes financieros, facturas o cualquier dato tabular.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Sube tu PDF",
        "description": "Sube el archivo PDF con tablas."
      },
      {
        "step": 2,
        "title": "Procesar",
        "description": "La herramienta identifica y extrae tablas automáticamente."
      },
      {
        "step": 3,
        "title": "Descarga Excel",
        "description": "Descarga el archivo Excel con los datos extraídos."
      }
    ],
    "useCases": [
      {
        "title": "Análisis Financiero",
        "description": "Convierte estados de cuenta o facturas a Excel.",
        "icon": "trending-up"
      },
      {
        "title": "Extracción de Datos",
        "description": "Saca tablas de informes de investigación.",
        "icon": "database"
      },
      {
        "title": "Gestión de Inventario",
        "description": "Convierte listas de inventario de PDF a hoja de cálculo.",
        "icon": "clipboard"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo maneja las tablas?",
        "answer": "Las tablas detectadas se extraen a hojas correspondientes en el Excel."
      },
      {
        "question": "¿Si no hay tablas?",
        "answer": "Se crea una hoja de información indicando que no se encontraron tablas."
      },
      {
        "question": "¿Se preserva el formato?",
        "answer": "Los datos se preservan, pero el formato visual complejo puede simplificarse."
      }
    ]
  },
  "email-to-pdf": {
    "title": "Email a PDF",
    "metaDescription": "Convierte archivos de correo electrónico (.eml, .msg) a documentos PDF. Preserva formato, imágenes en línea, enlaces clicables y adjuntos.",
    "keywords": [
      "email a pdf",
      "eml a pdf",
      "msg a pdf",
      "convertir email",
      "outlook a pdf"
    ],
    "description": "\n      <p>Email a PDF convierte tus archivos de correo electrónico (formatos .eml y .msg) en documentos PDF bien formateados. La herramienta preserva la información del encabezado del correo, el contenido del cuerpo, imágenes en línea con reemplazo CID, enlaces clicables e incrusta adjuntos directamente en el PDF.</p>\n      <p>Personaliza las opciones de salida incluyendo tamaño de página (A4, Letter, Legal), formato de fecha con soporte de zona horaria, y si incluir campos CC/BCC e información de adjuntos.</p>\n      <p>Toda la conversión ocurre localmente en tu navegador, asegurando que tus correos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir Archivo de Email",
        "description": "Sube tu archivo de correo .eml o .msg."
      },
      {
        "step": 2,
        "title": "Configurar Opciones",
        "description": "Establece el tamaño de página, formato de fecha, zona horaria y elige qué campos incluir."
      },
      {
        "step": 3,
        "title": "Convertir y Descargar",
        "description": "Convierte a PDF con adjuntos incrustados y descarga el resultado."
      }
    ],
    "useCases": [
      {
        "title": "Registros Legales",
        "description": "Archiva correos importantes como PDF con adjuntos incrustados para documentación legal.",
        "icon": "scale"
      },
      {
        "title": "Archivos Empresariales",
        "description": "Convierte correspondencia empresarial a PDF para conservación a largo plazo.",
        "icon": "briefcase"
      },
      {
        "title": "Preservación de Evidencia",
        "description": "Guarda evidencia de correos con imágenes en línea y adjuntos en formato PDF no editable.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "¿Qué formatos de email son compatibles?",
        "answer": "Tanto archivos .eml (RFC 822) como .msg (Microsoft Outlook) son totalmente compatibles."
      },
      {
        "question": "¿Se incluyen los adjuntos?",
        "answer": "¡Sí! Los adjuntos se incrustan directamente en el archivo PDF. Puedes extraerlos del PDF usando un lector PDF compatible."
      },
      {
        "question": "¿Se muestran las imágenes en línea?",
        "answer": "Sí, las imágenes en línea referenciadas vía CID (Content-ID) se convierten automáticamente a URIs de datos base64 y se muestran en el PDF."
      },
      {
        "question": "¿Los enlaces son clicables?",
        "answer": "Sí, todos los enlaces HTML (etiquetas <a>) y URLs en correos de texto plano se convierten en enlaces clicables en el PDF."
      },
      {
        "question": "¿Se preserva el formato del email?",
        "answer": "Sí, los correos HTML mantienen su formato lo más posible, incluyendo estilos, imágenes y enlaces."
      }
    ]
  },
  "djvu-to-pdf": {
    "title": "DJVU a PDF",
    "metaDescription": "Convierte archivos de documentos DJVU a PDF. Renderizado de alta calidad para documentos escaneados y libros.",
    "keywords": [
      "djvu a pdf",
      "convertir djvu",
      "convertidor djvu",
      "djvu pdf",
      "djv a pdf"
    ],
    "description": "\n      <p>DJVU a PDF convierte archivos de documentos DjVu en documentos PDF de alta calidad. DjVu es un formato de archivo informático diseñado principalmente para almacenar documentos escaneados, especialmente aquellos que contienen una combinación de texto, dibujos lineales y fotografías.</p>\n      <p>Esta herramienta renderiza cada página de tu archivo DJVU en el DPI elegido (puntos por pulgada) y los combina en un documento PDF buscable. Perfecto para convertir libros escaneados, manuales técnicos y documentos de archivo.</p>\n      <p>Toda la conversión ocurre localmente en tu navegador, asegurando que tus documentos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir Archivo DJVU",
        "description": "Arrastra y suelta tu archivo .djvu o .djv, o haz clic para seleccionar desde tu dispositivo."
      },
      {
        "step": 2,
        "title": "Configurar Opciones",
        "description": "Elige el DPI de salida (72, 150 o 300) y la calidad de imagen para el PDF."
      },
      {
        "step": 3,
        "title": "Convertir y Descargar",
        "description": "Haz clic en Convertir a PDF y descarga tu documento convertido."
      }
    ],
    "useCases": [
      {
        "title": "Documentos de Archivo",
        "description": "Convierte archivos DJVU a formato PDF universal.",
        "icon": "archive"
      },
      {
        "title": "Compartir Libros Escaneados",
        "description": "Comparte libros escaneados en formato PDF para mayor compatibilidad.",
        "icon": "share-2"
      },
      {
        "title": "Imprimir Documentos",
        "description": "Convierte DJVU a PDF de alta calidad para impresión.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es el formato DJVU?",
        "answer": "DjVu es un formato de archivo diseñado para almacenar documentos escaneados, especialmente aquellos con texto, dibujos e imágenes. Ofrece mejor compresión que PDF para contenido escaneado."
      },
      {
        "question": "¿Qué DPI debo elegir?",
        "answer": "72 DPI es adecuado para visualización web, 150 DPI para documentos estándar y 300 DPI para impresión de alta calidad."
      },
      {
        "question": "¿El texto será buscable?",
        "answer": "El texto se renderizará como imágenes. Si necesitas texto buscable, considera usar nuestra herramienta OCR PDF después de la conversión."
      }
    ]
  },
  "fb2-to-pdf": {
    "title": "FB2 a PDF",
    "metaDescription": "Convierte libros electrónicos FictionBook (FB2) a PDF. Soporta múltiples archivos con renderizado de alta calidad.",
    "keywords": [
      "fb2 a pdf",
      "convertir fb2",
      "fictionbook a pdf",
      "convertidor fb2",
      "fb2.zip a pdf"
    ],
    "description": "\n      <p>FB2 a PDF convierte archivos de libros electrónicos FictionBook (FB2) en documentos PDF de alta calidad. FB2 es un formato de libro electrónico basado en XML muy popular ampliamente utilizado en Rusia y Europa del Este.</p>\n      <p>Esta herramienta soporta tanto archivos .fb2 como .fb2.zip, y puede procesar múltiples archivos a la vez. Preserva el formato de texto, imágenes y la estructura de capítulos de tus libros electrónicos.</p>\n      <p>Toda la conversión ocurre localmente en tu navegador usando tecnología de renderizado avanzada, asegurando que tus libros permanezcan privados y la conversión sea rápida.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir Archivos FB2",
        "description": "Arrastra y suelta uno o más archivos .fb2 o .fb2.zip, o haz clic para seleccionar desde tu dispositivo."
      },
      {
        "step": 2,
        "title": "Seleccionar Calidad",
        "description": "Elige la calidad de salida: Baja (72 DPI), Media (150 DPI) o Alta (300 DPI)."
      },
      {
        "step": 3,
        "title": "Convertir y Descargar",
        "description": "Haz clic en Convertir a PDF y descarga tu(s) documento(s) convertido(s)."
      }
    ],
    "useCases": [
      {
        "title": "Imprimir Libros Electrónicos",
        "description": "Convierte libros electrónicos FB2 a PDF para impresión física.",
        "icon": "printer"
      },
      {
        "title": "Conversión por Lotes",
        "description": "Convierte múltiples archivos FB2 a PDF a la vez.",
        "icon": "layers"
      },
      {
        "title": "Formato Universal",
        "description": "Comparte libros electrónicos en formato PDF que funciona en cualquier dispositivo.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "¿Puedo convertir múltiples archivos FB2 a la vez?",
        "answer": "¡Sí! Esta herramienta soporta conversión por lotes de hasta 20 archivos FB2 simultáneamente."
      },
      {
        "question": "¿Se soportan archivos .fb2.zip?",
        "answer": "Sí, la herramienta extrae y convierte automáticamente archivos FB2 desde archivos .fb2.zip."
      },
      {
        "question": "¿Se preserva el formato?",
        "answer": "¡Sí! La herramienta usa renderizado nativo FB2, preservando el formato de texto, imágenes y estructura de capítulos con alta fidelidad."
      }
    ]
  },
  "deskew-pdf": {
    "title": "Enderezar PDF",
    "metaDescription": "Endereza automáticamente páginas PDF escaneadas o inclinadas. Corrige documentos sesgados con detección precisa de ángulos.",
    "keywords": [
      "enderezar pdf",
      "corregir pdf inclinado",
      "arreglar escaneo inclinado",
      "rotar pdf automático",
      "corregir ángulo pdf"
    ],
    "description": "\n      <p>Enderezar PDF detecta y corrige automáticamente páginas inclinadas o sesgadas en tus documentos PDF usando análisis avanzado de varianza de perfil de proyección. Esto es esencial para documentos escaneados que se alimentaron al escáner en un ángulo.</p>\n      <p>La herramienta analiza la alineación de texto y contenido en diferentes ángulos para encontrar la rotación óptima, luego aplica la corrección. Puedes ajustar el umbral de sensibilidad (1-30) y la configuración DPI (72-300) para obtener resultados óptimos.</p>\n      <p>Todo el procesamiento ocurre localmente en tu navegador usando tecnología WebAssembly, asegurando que tus documentos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir tu PDF",
        "description": "Arrastra y suelta tu archivo PDF escaneado o haz clic para seleccionar."
      },
      {
        "step": 2,
        "title": "Configurar Ajustes",
        "description": "Ajusta la sensibilidad del umbral y DPI si es necesario para una mejor detección."
      },
      {
        "step": 3,
        "title": "Procesar y Descargar",
        "description": "Haz clic en Enderezar para enderezar las páginas y descargar el PDF corregido."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Escaneados",
        "description": "Corrige páginas que se escanearon en un ángulo desde alimentadores de documentos.",
        "icon": "scan"
      },
      {
        "title": "Escaneos Móviles",
        "description": "Corrige fotos inclinadas de documentos tomadas con smartphones.",
        "icon": "smartphone"
      },
      {
        "title": "Restauración de Archivos",
        "description": "Endereza archivos escaneados antiguos para mejor legibilidad.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Qué tan precisa es la detección de ángulos?",
        "answer": "La herramienta usa análisis de varianza de perfil de proyección para detectar ángulos de sesgo de hasta ±10 grados con alta precisión. Omite automáticamente páginas con ángulos menores a 0.3 grados."
      },
      {
        "question": "¿Se verá afectada la calidad del texto?",
        "answer": "Para rotaciones en múltiplos de 90 grados, no ocurre pérdida de calidad. Para otros ángulos, la herramienta redondea al grado más cercano y mantiene buena calidad."
      },
      {
        "question": "¿Puedo enderezar solo páginas específicas?",
        "answer": "La herramienta analiza todas las páginas pero solo corrige aquellas con sesgo detectado por encima del umbral de sensibilidad. Las páginas con sesgo mínimo se dejan sin cambios."
      },
      {
        "question": "¿Qué es el umbral de sensibilidad?",
        "answer": "Los valores 1-10 corrigen solo inclinaciones obvias, 11-20 detectan sesgo moderado, y 21-30 capturan ángulos sutiles. El predeterminado es 10 para detección equilibrada."
      },
      {
        "question": "¿Cuánto tiempo toma el procesamiento?",
        "answer": "El tiempo de procesamiento depende del tamaño del archivo y DPI. 150 DPI (predeterminado) proporciona un buen equilibrio entre velocidad y precisión. DPI más alto es más preciso pero más lento."
      }
    ]
  },
  "pdf-to-pdfa": {
    "title": "PDF a PDF/A",
    "metaDescription": "Convierte PDF a formato de archivo PDF/A. Asegura la preservación de documentos a largo plazo con estándares ISO.",
    "keywords": [
      "pdf a pdfa",
      "convertidor pdfa",
      "archivar pdf",
      "archivo pdf",
      "preservación a largo plazo"
    ],
    "description": "\n      <p>PDF a PDF/A convierte tus documentos PDF al formato PDF/A, el estándar ISO para archivo de documentos a largo plazo. PDF/A asegura que los documentos serán visibles y reproducibles durante décadas.</p>\n      <p>Elige entre PDF/A-1b (conformidad básica), PDF/A-2b (recomendado, soporta transparencia) o PDF/A-3b (permite archivos incrustados). La herramienta incrusta fuentes y aplana la transparencia según sea necesario.</p>\n      <p>Toda la conversión ocurre localmente en tu navegador, asegurando que tus documentos permanezcan privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir tu PDF",
        "description": "Sube el PDF que deseas convertir a PDF/A."
      },
      {
        "step": 2,
        "title": "Seleccionar Nivel PDF/A",
        "description": "Elige el nivel de conformidad PDF/A-1b, PDF/A-2b o PDF/A-3b."
      },
      {
        "step": 3,
        "title": "Convertir y Descargar",
        "description": "Convierte a PDF/A y descarga el documento de archivo."
      }
    ],
    "useCases": [
      {
        "title": "Archivos Legales",
        "description": "Convierte documentos legales a PDF/A para almacenamiento a largo plazo admisible en tribunales.",
        "icon": "scale"
      },
      {
        "title": "Registros Gubernamentales",
        "description": "Cumple con los requisitos de archivo gubernamental usando PDF/A.",
        "icon": "building"
      },
      {
        "title": "Archivos Empresariales",
        "description": "Preserva documentos empresariales importantes para accesibilidad futura.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Qué nivel de PDF/A debo usar?",
        "answer": "PDF/A-2b es recomendado para la mayoría de usos. Usa 1b para máxima compatibilidad o 3b si necesitas archivos incrustados."
      },
      {
        "question": "¿Qué hace diferente a PDF/A?",
        "answer": "PDF/A incrusta fuentes, deshabilita el cifrado y asegura que todos los elementos sean autocontenidos para visualización futura."
      },
      {
        "question": "¿Puedo convertir de vuelta desde PDF/A?",
        "answer": "Los archivos PDF/A son PDFs estándar y se pueden abrir normalmente. Las características de archivo agregan restricciones, no limitaciones."
      }
    ]
  },
  "digital-sign-pdf": {
    "title": "Firma Digital",
    "metaDescription": "Firmar digitalmente documentos PDF con certificados PFX, P12 o PEM. Agregue firmas basadas en certificados localmente en su navegador.",
    "keywords": [
      "firma digital pdf",
      "certificado x509",
      "firma pfx",
      "firma p12",
      "firma pem",
      "firma electrónica"
    ],
    "description": "<p>La herramienta de Firma Digital te permite añadir firmas digitales X.509 criptográficas a documentos PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir PDF",
        "description": "Sube el documento PDF que deseas firmar digitalmente."
      },
      {
        "step": 2,
        "title": "Cargar Certificado",
        "description": "Sube tu archivo de certificado X.509 (.pfx, .p12 o .pem) e ingresa la contraseña."
      },
      {
        "step": 3,
        "title": "Firmar y Descargar",
        "description": "Haz clic en Firmar PDF para aplicar la firma digital y descarga el documento firmado."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Legales",
        "description": "Firma contratos y documentos legales con firmas digitales legalmente vinculantes.",
        "icon": "scale"
      },
      {
        "title": "Aprobaciones Empresariales",
        "description": "Firma digitalmente facturas y documentos de aprobación para pistas de auditoría.",
        "icon": "briefcase"
      },
      {
        "title": "Integridad del Documento",
        "description": "Asegura que los documentos no han sido alterados después de firmar.",
        "icon": "shield-check"
      }
    ],
    "faq": [
      {
        "question": "¿Qué formatos de certificado son compatibles?",
        "answer": "Se admiten los formatos de certificado PFX (.pfx), PKCS#12 (.p12) y PEM (.pem)."
      },
      {
        "question": "¿La firma es legalmente válida?",
        "answer": "Sí, las firmas digitales X.509 con un certificado válido son legalmente reconocidas en la mayoría de jurisdicciones."
      },
      {
        "question": "¿Puedo añadir una firma visible?",
        "answer": "Sí, puedes añadir una firma visible con texto, imagen, posición y estilo personalizados."
      }
    ]
  },
  "validate-signature": {
    "title": "Validar Firma",
    "metaDescription": "Verifica firmas digitales en documentos PDF. Comprueba la validez del certificado, información del firmante e integridad del documento.",
    "keywords": [
      "validar firma pdf",
      "verificar firma digital",
      "comprobar certificado pdf",
      "verificación de firma"
    ],
    "description": "<p>La herramienta Validar Firma te permite verificar firmas digitales en documentos PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir PDF Firmado",
        "description": "Sube un documento PDF que contenga firmas digitales."
      },
      {
        "step": 2,
        "title": "Ver Resultados",
        "description": "Ve todas las firmas encontradas en el documento con su estado de validez."
      },
      {
        "step": 3,
        "title": "Exportar Informe",
        "description": "Opcionalmente descarga un informe JSON de los resultados de validación."
      }
    ],
    "useCases": [
      {
        "title": "Verificación de Documentos",
        "description": "Verifica que los documentos firmados son auténticos y no han sido alterados.",
        "icon": "shield-check"
      },
      {
        "title": "Auditoría de Cumplimiento",
        "description": "Comprueba la validez de las firmas para propósitos de cumplimiento y auditoría.",
        "icon": "clipboard-check"
      },
      {
        "title": "Revisión de Certificados",
        "description": "Ve los detalles del certificado y fechas de expiración de documentos firmados.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "¿Qué significa \"válido\"?",
        "answer": "Una firma válida significa que el documento no ha sido modificado desde la firma y la cadena de certificados está intacta."
      },
      {
        "question": "¿Puedo validar múltiples PDFs?",
        "answer": "Sí, puedes subir múltiples PDFs y validar todas las firmas en lote."
      },
      {
        "question": "¿Por qué una firma podría ser inválida?",
        "answer": "Las firmas pueden ser inválidas si el documento fue modificado, el certificado expiró o el certificado no es de confianza."
      }
    ]
  },
  "form-logic-designer": {
    "title": "Lógica de Formularios",
    "metaDescription": "Cree reglas de formulario PDF con un diseñador visual. Conecte campos y agregue lógica de validación y cálculo interactivo.",
    "keywords": [
      "lógica de formulario PDF",
      "inyección AcroJS",
      "flujo de nodos",
      "PDF interactivo",
      "dependencias de campos"
    ],
    "description": "\n        <p>El Diseñador de Lógica de Formularios Interactivos es una herramienta pionera que llena un gran vacío en las capacidades de PDF: la creación de campos activos y adaptables en lugar de formularios planos y estáticos.</p>\n        <p>A través de nuestro lienzo visual con \"nodos de glassmorphism brillantes\" (basado en React Flow), los campos del formulario se representan como módulos conectados. Puede arrastrar enlaces para definir relaciones: por ejemplo, cuando se marca una casilla de verificación ➜ habilitar una entrada de texto ➜ autocalcular valores y actualizar un campo total.</p>\n        <p>Una vez diseñado, el motor AcroJS compila la lógica en Acrobat JavaScript oficial y la inyecta en los diccionarios '/AA' (Acciones Adicionales) del AcroForm. Los comportamientos interactivos se ejecutan de forma nativa en cualquier lector de PDF estándar.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir PDF Interactivo",
        "description": "Proporcione un archivo PDF que ya contenga campos de formulario activos (AcroForm)."
      },
      {
        "step": 2,
        "title": "Diseñar la Lógica en el Lienzo",
        "description": "Conecte los campos como nodos. Vincule eventos de salida (cambio, pérdida de foco) con acciones de destino (mostrar, ocultar, calcular, deshabilitar)."
      },
      {
        "step": 3,
        "title": "Compilar e Inyectar",
        "description": "Inyecte la lógica JavaScript compilada en el diccionario PDF y guarde el documento inteligente final."
      }
    ],
    "useCases": [
      {
        "title": "Contratos Comerciales Inteligentes",
        "description": "Muestre u oculte campos de entrada complementarios dinámicamente según los términos seleccionados por el cliente.",
        "icon": "file-signature"
      },
      {
        "title": "Formularios de Gastos Automatizados",
        "description": "Sume múltiples líneas de gastos y calcule impuestos dinámicamente sin cálculos manuales.",
        "icon": "calculator"
      },
      {
        "title": "Cuestionarios Interactivos",
        "description": "Omita preguntas irrelevantes según las respuestas anteriores, proporcionando una experiencia de llenado móvil más limpia.",
        "icon": "form-input"
      }
    ],
    "faq": [
      {
        "question": "¿Necesito un PDF con campos preexistentes?",
        "answer": "Sí. Esta herramienta está diseñada para vincular reglas lógicas a campos existentes. Si su PDF no tiene campos interactivos, use primero nuestra herramienta Creador de Formularios para agregar entradas y casillas de verificación."
      },
      {
        "question": "¿Funcionará esta lógica en cualquier lector de PDF?",
        "answer": "Funciona en todos los lectores de PDF que cumplan con los estándares de Adobe PDF y admitan Acrobat JavaScript (como Adobe Acrobat Reader, Foxit Reader y los principales navegadores web). Los lectores móviles minimalistas pueden admitir solo acciones básicas."
      },
      {
        "question": "¿Afecta esto a la impresión física?",
        "answer": "En absoluto. Los scripts inyectados solo se ejecutan en pantalla durante el llenado del formulario. Al imprimir, el estado actual de los campos se imprime de forma estática sin visualización de nodos."
      }
    ]
  },
  "global-invoice-parser": {
    "title": "Conversor de importes de facturas en PDF",
    "metaDescription": "Extraiga los importes de las facturas de archivos PDF, convierta totales entre monedas y agregue un resumen de cálculo al documento.",
    "keywords": [
      "traducir factura",
      "conversor de divisas de factura",
      "calculadora de tipo de cambio pdf",
      "sellar moneda local",
      "herramienta de factura global"
    ],
    "description": "\n        <p>El Traductor de Facturas Globales brinda máxima claridad a los equipos financieros internacionales y compradores globales.</p>\n        <p>El manejo de facturas en múltiples divisas ($, €, ¥) a menudo implica tediosa aritmética manual. Esta herramienta permite la <strong>traducción de etiquetas en el lugar y la conversión de tipos de cambio en tiempo real</strong>.</p>\n        <p>Escanea el documento en busca de totales de precios, realiza cálculos basados en referencias de divisas e imprime físicamente un elegante registro de tipo de cambio de vidrio esmerilado semitransparente en el margen de la página. Se representa con un magnífico efecto visual numérico de máquina tragamonedas, aportando un control absoluto a la facturación global.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir Factura en PDF",
        "description": "Importe cualquier factura facturada en moneda extranjera (por ejemplo, USD, EUR, JPY)."
      },
      {
        "step": 2,
        "title": "Seleccionar Moneda Local",
        "description": "Elija su moneda local (por ejemplo, CNY) y especifique un tipo de cambio personalizado o en tiempo real."
      },
      {
        "step": 3,
        "title": "Aplicar Sello de Registro",
        "description": "Haga clic en ejecutar para superponer el registro de tipo de cambio listo para la contabilidad."
      }
    ],
    "useCases": [
      {
        "title": "Reembolso de Viajes de Negocios",
        "description": "Convierta facturas de viajes a la moneda local y selle los detalles de conversión, facilitando los flujos de trabajo contables.",
        "icon": "plane"
      },
      {
        "title": "Auditoría de Compras Transfronterizas",
        "description": "Traduzca columnas de facturas e identifique el costo real de los bienes de comercio electrónico.",
        "icon": "credit-card"
      },
      {
        "title": "Contabilidad Comercial Internacional",
        "description": "Selle registros de conversión consistentes en facturas corporativas para optimizar las auditorías de fin de año.",
        "icon": "folder-open"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo detecta los importes de las facturas?",
        "answer": "Busca flujos de caracteres en busca de símbolos de divisas y analiza encabezados semánticos como \"Total\" o \"Vencimiento\" para ubicar la suma final de la factura."
      },
      {
        "question": "¿Los tipos de cambio se obtienen en tiempo real?",
        "answer": "Sí. Por defecto, recupera tipos de cambio base de APIs financieras estándar. También puede especificar tipos de cambio personalizados para auditorías internas."
      },
      {
        "question": "¿El sello cubrirá detalles importantes de la factura?",
        "answer": "El motor escanea el margen de la página para encontrar el posicionamiento óptimo. El sello es semitransparente, alineándose de manera elegante con sus diseños."
      }
    ]
  },
  "pdf-to-cbz": {
    "title": "PDF a CBZ",
    "metaDescription": "Convierta archivos PDF a formato de cómic CBZ. Conserva el orden y la calidad de las imágenes.",
    "keywords": [
      "pdf a cbz",
      "conversor comic",
      "cbz pdf"
    ],
    "description": "<p>PDF to CBZ está diseñado a medida para entusiastas del cómic y archiveros de libros electrónicos digitales. Representa cada página de sus volúmenes PDF en gráficos rasterizados de alta fidelidad y los compila en un paquete ZIP (.cbz) de cómic estándar.</p>\n      <p>Para eliminar el frustrante raspado manual en sistemas como Calibre, Komga, Kavita o CDisplayEx, el procesador genera e inyecta automáticamente archivos <strong>ComicInfo.xml</strong> y <strong>metadata.opf</strong> internamente, mientras escribe simultáneamente una carga útil estandarizada <strong>ComicBookInfo JSON</strong> directamente en los metadatos de comentarios del archivo ZIP.</p>\n      <p>Incluye controles deslizantes de configuración completos para la calidad de compresión de imágenes, escala de dimensiones de página, alternancia de lectura de diseño de derecha a izquierda (modo Manga) y filtrado de color en escala de grises en blanco y negro.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir cómic PDF",
        "description": "Arrastre y suelte su archivo PDF principal de cómic, libro de arte o manga."
      },
      {
        "step": 2,
        "title": "Introducir metadatos de cómic",
        "description": "Complete los campos Serie, Volumen, Título, Escritor y Editor, y alterne el diseño o la optimización en escala de grises."
      },
      {
        "step": 3,
        "title": "Compilar y descargar",
        "description": "Haga clic en Convertir para compilar y recuperar su archivo .cbz rico en metadatos, listo al instante para Calibre."
      }
    ],
    "useCases": [
      {
        "title": "Embalaje de cómic retrógrado",
        "description": "Transforme libros PDF escaneados sin formato en archivos de cómics CBZ compactos y compatibles con los estándares que los administradores de bibliotecas de cómics puedan eliminar fácilmente.",
        "icon": "book"
      },
      {
        "title": "Integración de calibre sin esfuerzo",
        "description": "El esquema metadata.opf incorporado permite a Calibre buscar y clasificar creadores y problemas de volumen sin búsqueda manual.",
        "icon": "database"
      },
      {
        "title": "Mejora de la pantalla de tinta electrónica",
        "description": "Filtre previamente los canales de color gráficos en escala de grises de alto contraste al compilar, lo que aumenta la actualización visual y la claridad en las pantallas de tinta electrónica y, al mismo tiempo, ahorra almacenamiento.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es un archivo .cbz?",
        "answer": "Un archivo CBZ es un formato contenedor de archivo especializado para series de cómics. Tiene el formato interno como un paquete ZIP que contiene imágenes de páginas numeradas secuencialmente junto con archivos XML de metadatos estructurales."
      },
      {
        "question": "¿Cómo son compatibles los metadatos?",
        "answer": "Compilamos e incrustamos ComicInfo.xml, metadata.opf y comentarios de archivos ZIP de una sola vez. Esto garantiza un cumplimiento absoluto en múltiples ecosistemas de cómics y libros electrónicos."
      },
      {
        "question": "¿Por qué utilizar el modo Escala de grises?",
        "answer": "Si lee en un lector de tinta electrónica en escala de grises (como Kindle o Kobo), compilar directamente en escala de grises reduce las imágenes fantasma, ofrece niveles de contraste superiores y reduce el tamaño del archivo CBZ final."
      }
    ]
  },
  "overlay-pdf": {
    "title": "Superponer PDF",
    "metaDescription": "Superponga dos páginas PDF en una sola. Ideal para agregar sellos, fondos y marcas de agua.",
    "keywords": [
      "superponer pdf",
      "pdf overlay",
      "sellar pdf"
    ],
    "description": "<p>Superponer PDF le permite superponer páginas de un documento PDF encima o debajo de otro documento PDF. Es perfecto para aplicar membretes, agregar cuadrículas de fondo, estampar marcas de agua o fusionar borradores de diseño.</p>\n      <p>Admite el modo Superposición (la capa va encima) y el modo Subrayado (la capa va debajo). Especifique rangos de páginas de destino personalizados o recorra documentos superpuestos más cortos para cubrir todo el archivo base automáticamente.</p>\n      <p>Todo el procesamiento se ejecuta íntegramente dentro de su navegador web localmente, garantizando total seguridad y privacidad de los datos.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir PDF principal",
        "description": "Arrastre y suelte su documento PDF base principal."
      },
      {
        "step": 2,
        "title": "Subir capa PDF",
        "description": "Proporcione el documento superpuesto/subyacente que actúa como capa."
      },
      {
        "step": 3,
        "title": "Configurar capas",
        "description": "Elija el modo de superposición o subyacente, especifique rangos de páginas y habilite el bucle de páginas."
      },
      {
        "step": 4,
        "title": "Compilar y descargar",
        "description": "Haga clic en Compilar para procesar y descargar el PDF del resultado en capas."
      }
    ],
    "useCases": [
      {
        "title": "Membretes Corporativos",
        "description": "Coloque el contenido de la factura sobre las plantillas de membrete estándar de la empresa.",
        "icon": "file-text"
      },
      {
        "title": "Marcas de agua y sellos",
        "description": "Superponer sellos de seguridad, sellos de firma o fondos en todos los documentos.",
        "icon": "shield"
      },
      {
        "title": "Planos de dibujo",
        "description": "Combine borradores de arquitectura o cuadrículas de diseño debajo de bloques de texto.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "¿Cuál es la diferencia entre Superposición y Subrayación?",
        "answer": "Superposición coloca la capa secundaria encima de su contenido principal. Underlay lo coloca en la parte inferior, actuando como plantilla de fondo."
      },
      {
        "question": "¿Puedo realizar un bucle en la capa superpuesta?",
        "answer": "Sí, si la capa PDF es más corta que el documento base, al habilitar Loop se realizará un ciclo (por ejemplo, página 1, 2, 1, 2) para cubrir todas las páginas base."
      },
      {
        "question": "¿Se admite el rango de páginas?",
        "answer": "Sí, puede orientar sus anuncios a páginas específicas utilizando una sintaxis de rango como \"1-5\", \"impar\", \"par\" o listas separadas por comas."
      }
    ]
  },
  "timestamp-pdf": {
    "title": "Marca de tiempo local para PDF",
    "metaDescription": "Esta herramienta crea un sello de tiempo local autofirmado con el reloj del dispositivo. No solicita ni verifica un sello de la TSA seleccionada.",
    "keywords": [
      "Marca de tiempo local para PDF",
      "PDF",
      "Hora del dispositivo"
    ],
    "description": "<p>Seleccione un PDF para añadir un sello de tiempo local.</p><p>Esta herramienta crea un sello de tiempo local autofirmado con el reloj del dispositivo. No solicita ni verifica un sello de la TSA seleccionada.</p><p>El procesamiento permanece en el navegador; no se envía el documento ni su hash a una TSA.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir PDF",
        "description": "Seleccione un PDF para añadir un sello de tiempo local."
      },
      {
        "step": 2,
        "title": "Etiqueta de autoridad seleccionada",
        "description": "Elige un nombre para la firma local. Ese nombre no establece una conexión con una TSA."
      },
      {
        "step": 3,
        "title": "Añadir sello de tiempo local",
        "description": "Procesa el archivo, revisa el resultado y descarga el PDF."
      }
    ],
    "useCases": [
      {
        "title": "Borradores de trabajo",
        "description": "Conserva una copia del documento con una fecha local.",
        "icon": "file-text"
      },
      {
        "title": "Archivos personales",
        "description": "Guarda una copia con marca de tiempo para tu propia consulta.",
        "icon": "archive"
      },
      {
        "title": "Inspección de firmas",
        "description": "Revisa la firma generada y los metadatos en un lector de PDF.",
        "icon": "search"
      }
    ],
    "faq": [
      {
        "question": "¿La marca de tiempo se verifica de forma independiente?",
        "answer": "Esta herramienta crea un sello de tiempo local autofirmado con el reloj del dispositivo. No solicita ni verifica un sello de la TSA seleccionada."
      },
      {
        "question": "¿Debo subir un certificado digital?",
        "answer": "No. La herramienta genera un certificado local autofirmado para esta operación."
      },
      {
        "question": "¿Qué reloj proporciona la hora?",
        "answer": "La hora proviene del reloj del dispositivo y no se verifica de forma independiente."
      }
    ]
  },
  "add-page-labels": {
    "title": "Agregar Etiquetas de Página",
    "metaDescription": "Defina etiquetas de página personalizadas (p. ej., I, II para prefacios). Mejora la navegación.",
    "keywords": [
      "etiquetas de pagina",
      "numerar paginas pdf",
      "paginas logicas"
    ],
    "description": "<p>Agregar etiquetas de página le permite insertar metadatos de etiquetado de páginas personalizados (/PageLabels) en el diccionario raíz del catálogo de su PDF. Esto personaliza las etiquetas que se muestran en las barras laterales de navegación del lector de PDF profesional y en los paneles de salto de números de página superior (por ejemplo, usando números romanos para la introducción, secuencias decimales para el cuerpo principal o prefijos personalizados como A-0, A-1 para las subsecciones técnicas).</p>\n      <p>Admite la combinación de múltiples reglas personalizadas sin problemas. Fundamentalmente, hemos creado un <strong>algoritmo de corte de rango disjunto</strong> altamente optimizado: incluso si declara patrones alternos complejos (por ejemplo, páginas impares estilo A, páginas pares estilo B), la herramienta diseccionará y compondrá elegantemente los límites para garantizar una visualización adecuada que cumpla con los estándares sin filtrar formatos en páginas no asignadas.</p>\n      <p>Todas las operaciones se procesan íntegramente dentro de la zona de pruebas de su navegador local, lo que garantiza la privacidad absoluta de los datos.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir documento PDF",
        "description": "Proporcione el documento PDF de destino que desea etiquetar."
      },
      {
        "step": 2,
        "title": "Configurar reglas de etiquetado",
        "description": "Agregue una o más reglas que especifiquen rangos de páginas (por ejemplo, listas \"1-5\", \"impar\" o separadas por comas), prefijo, estilo y secuencia inicial."
      },
      {
        "step": 3,
        "title": "Vista previa y descarga",
        "description": "Revise la vista previa de la lista de etiquetas de páginas en vivo a continuación, luego compile y descargue su documento PDF actualizado."
      }
    ],
    "useCases": [
      {
        "title": "Formato de tesis académica",
        "description": "Establezca números romanos en minúscula (i, ii, iii) para la introducción y la transición a decimal para los capítulos principales.",
        "icon": "book"
      },
      {
        "title": "Prefijos de planos de ingeniería",
        "description": "Adjunte abreviaturas de subsistema (por ejemplo, \"A-1\", \"M-5\") como prefijos de etiquetas de página, lo que permitirá a los equipos buscar y ubicar páginas en segundos.",
        "icon": "layout"
      },
      {
        "title": "Diseños alternos personalizados",
        "description": "Aplique indexación de rangos de páginas altamente específica a secuencias pares/impares o secciones no contiguas con la máxima libertad.",
        "icon": "shuffle"
      }
    ],
    "faq": [
      {
        "question": "¿Qué son las etiquetas de página y los números de página?",
        "answer": "Los números de página normales son bloques de texto visuales representados directamente en el lienzo de papel (visibles cuando se imprimen). Sin embargo, las etiquetas de página son metadatos estructurales inyectados en el catálogo PDF. Controlan lo que se muestra debajo de las miniaturas y en el cuadro de búsqueda de páginas dentro de software como Adobe Acrobat o Apple Preview."
      },
      {
        "question": "¿Qué sucede si dejo el rango de páginas vacío?",
        "answer": "Dejar el rango de páginas vacío hace que la regla se aplique globalmente a todas las páginas del documento."
      },
      {
        "question": "¿Cómo se manejan las reglas superpuestas?",
        "answer": "Las reglas se evalúan secuencialmente en el orden en que aparecen. Si un rango de páginas de una regla posterior se superpone con una anterior, la regla posterior tiene prioridad y anula la etiqueta de esa página."
      }
    ]
  },
  "ai-pdf-reflower": {
    "title": "Adaptación de Flujo PDF con IA",
    "metaDescription": "Redistribuir el texto PDF para facilitar la lectura en el móvil. Exporte el contenido extraído como Markdown o EPUB en su navegador.",
    "keywords": [
      "flujo pdf",
      "pdf adaptativo",
      "pdf a markdown",
      "exportar epub"
    ],
    "description": "<p>AI PDF Layout Reflower es su mejor compañero para leer documentos PDF en dispositivos móviles. Los archivos PDF tradicionales utilizan un diseño fijo, que a menudo requiere un zoom interminable y un desplazamiento horizontal en teléfonos inteligentes o tabletas, lo que resulta en una experiencia de lectura tediosa.</p>\n      <p>Esta herramienta analiza de forma inteligente el flujo de texto, el interlineado y las coordenadas físicas de las páginas PDF, reconstruyendo los párrafos semánticos y las jerarquías de encabezados. Para documentos de varias o dos columnas, combina de forma inteligente los flujos de columnas en un único flujo responsivo, lo que garantiza una lectura fluida.</p>\n      <p>Además, admite la representación de fórmulas matemáticas en LaTeX/MathJax y ofrece múltiples temas de lectura (Sepia, Oscuro, Verde que protege los ojos). Puedes exportar el diseño redistribuido como Markdown o un libro electrónico EPUB estándar con un solo clic.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo PDF",
        "description": "Arrastre y suelte su archivo PDF o haga clic para explorarlo y seleccionarlo."
      },
      {
        "step": 2,
        "title": "Seleccionar tema de lectura",
        "description": "Elija el tamaño de fuente y los colores del tema que prefiera en el simulador móvil 3D de la derecha."
      },
      {
        "step": 3,
        "title": "Exportar documento",
        "description": "Una vez satisfecho, utilice la cuerda de tracción física para exportar el documento como Markdown o EPUB."
      }
    ],
    "useCases": [
      {
        "title": "Lectura de literatura móvil",
        "description": "Lea artículos académicos e informes de investigación en su teléfono sin problemas y sin hacer zoom constantemente.",
        "icon": "smartphone"
      },
      {
        "title": "Conversión de libros electrónicos",
        "description": "Convierta archivos PDF con mucho texto en archivos EPUB e impórtelos a Kindle u otros lectores de libros electrónicos.",
        "icon": "book"
      },
      {
        "title": "Archivo de notas",
        "description": "Convierta directamente contenido PDF estructurado en archivos Markdown limpios para su base de conocimientos personal.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "¿Maneja correctamente archivos PDF de dos columnas?",
        "answer": "Sí, el cambio de diseño detecta las coordenadas horizontales de los bloques de texto y estructura las columnas izquierda y derecha secuencialmente, evitando el entrelazado de líneas."
      },
      {
        "question": "¿Se perderán imágenes y fórmulas matemáticas?",
        "answer": "Las fórmulas matemáticas se convierten a la sintaxis LaTeX/MathJax para una representación web limpia y las imágenes se conservan en sus posiciones semánticas correspondientes."
      },
      {
        "question": "¿La conversión se realiza en la nube?",
        "answer": "No, todos los análisis de diseño y empaquetado de formatos se realizan localmente en su navegador para garantizar la absoluta privacidad de sus documentos."
      }
    ]
  },
  "citation-linker": {
    "title": "Activador de Enlaces de Citas",
    "metaDescription": "Convierta los marcadores de citas en archivos PDF en enlaces DOI o referencias de páginas en los que se puede hacer clic. Agregue navegación útil a los documentos de investigación.",
    "keywords": [
      "enlaces de citas",
      "hipervinculo pdf",
      "coincidencia doi",
      "citas academicas"
    ],
    "description": "<p>Citation Linker está diseñado específicamente para investigadores académicos. En muchos artículos PDF, los marcadores de citas (por ejemplo, [1], [2]) son texto sin formato, lo que obliga a los lectores a desplazarse hacia adelante y hacia atrás hasta la lista de referencias al final del documento, interrumpiendo su atención.</p>\n      <p>Esta herramienta lee texto PDF localmente, utiliza reconocimiento de patrones para hacer coincidir los marcadores de citas con sus entradas de referencia correspondientes y superpone anotaciones de enlaces PDF en los que se puede hacer clic mediante búsquedas DOI o coordenadas de salto de página.</p>\n      <p>También genera un mapa interactivo de relaciones de citas para navegar visualmente por la red de referencia del documento.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir PDF Académico",
        "description": "Cargue un artículo o tesis en PDF que contenga una sección de bibliografía/referencia."
      },
      {
        "step": 2,
        "title": "Revisar citas",
        "description": "Inspeccione los pares de citas en el mapa interactivo y edite o agregue manualmente enlaces DOI si es necesario."
      },
      {
        "step": 3,
        "title": "Inyectar enlaces",
        "description": "Haga clic en el botón Activar para superponer hipervínculos en el PDF y descargar el documento actualizado."
      }
    ],
    "useCases": [
      {
        "title": "Lectura profunda de literatura",
        "description": "Haga clic en los marcadores de citas para ver inmediatamente los detalles de la referencia o navegar a páginas DOI externas.",
        "icon": "link"
      },
      {
        "title": "Preparación previa a la publicación",
        "description": "Asegúrese de que sus trabajos académicos escritos tengan navegaciones de hipervínculos completamente activas antes del envío final.",
        "icon": "award"
      },
      {
        "title": "Análisis de mapas de referencia",
        "description": "Comprenda las jerarquías y conexiones de la literatura a través del mapa de topología de red interactivo.",
        "icon": "git-network"
      }
    ],
    "faq": [
      {
        "question": "¿Qué pasa si una referencia no tiene DOI?",
        "answer": "Si no se puede encontrar un DOI, la herramienta recurre a una acción interna \"Ir a página\", que le permite hacer clic en el marcador y saltar directamente a la página de referencia."
      },
      {
        "question": "¿Qué formatos de citas se admiten?",
        "answer": "Admite corchetes numéricos comunes (p. ej., [1], [1-3]) y citas de autor y año (p. ej., Autor et al., 202X)."
      },
      {
        "question": "¿Modificará la apariencia de mi PDF?",
        "answer": "No, inyecta anotaciones de enlaces invisibles encima del texto, preservando el diseño, las fuentes y el estilo originales de su documento."
      }
    ]
  },
  "vector-extractor": {
    "title": "Extractor de Vectores PDF",
    "metaDescription": "Extraiga gráficos vectoriales de páginas PDF como SVG. Seleccione cuadros, diagramas y logotipos para volver a colorearlos y exportarlos.",
    "keywords": [
      "extraer vectores pdf",
      "exportar svg",
      "extraer logotipos",
      "graficos vectoriales"
    ],
    "description": "<p>PDF Vector Extractor desbloquea rutas vectoriales e ilustraciones incrustadas dentro de archivos PDF. Extraiga fácilmente gráficos vectoriales, diagramas o logotipos de documentos para trabajos de diseño o impresión.</p>\n      <p>Bajo el capó, utiliza renderizado SVG de alta fidelidad para deconstruir rutas vectoriales de PDF en árboles de elementos SVG estándar y limpios sin pérdida de precisión.</p>\n      <p>La interfaz resalta los elementos flotantes con un efecto de explosión de capa 3D en el eje Z, completo con un panel de selección de color para que los diseñadores ajusten y extraigan nodos vectoriales.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir documento PDF",
        "description": "Cargue un PDF que contenga recursos vectoriales, diagramas, tablas o logotipos."
      },
      {
        "step": 2,
        "title": "Seleccionar elementos",
        "description": "Pase el cursor sobre el lienzo vectorial para resaltar elementos y luego haga clic para seleccionar un nodo."
      },
      {
        "step": 3,
        "title": "Personalizar y exportar",
        "description": "Ajuste los atributos de ruta en el panel, luego descárguelo como SVG o copie el código fuente SVG."
      }
    ],
    "useCases": [
      {
        "title": "Extracción de activos de diseño",
        "description": "Extraiga rápidamente logotipos, íconos e ilustraciones de empresas de folletos o pautas de marca.",
        "icon": "bezier"
      },
      {
        "title": "Exportación de gráficos científicos",
        "description": "Extraiga gráficos vectoriales de artículos de investigación para utilizarlos en presentaciones o impresiones de alta resolución.",
        "icon": "presentation"
      },
      {
        "title": "Cambio de color de recursos vectoriales",
        "description": "Modifique el trazo y los colores de relleno de los recursos extraídos antes de guardarlos para proyectos web.",
        "icon": "crown"
      }
    ],
    "faq": [
      {
        "question": "¿Por qué no puedo seleccionar ciertas imágenes?",
        "answer": "Los archivos PDF contienen imágenes rasterizadas (como fotografías o páginas escaneadas) e ilustraciones vectoriales (como formas y curvas). Sólo las rutas vectoriales se pueden deconstruir en rutas SVG."
      },
      {
        "question": "¿El SVG de salida contiene estilos?",
        "answer": "Sí, el SVG exportado conserva todas las propiedades originales, incluidos rellenos, trazos, opacidad, degradados y transformaciones de coordenadas."
      },
      {
        "question": "¿Se retrasarán los archivos grandes?",
        "answer": "Usamos la aceleración de WebAssembly, pero los archivos PDF con dibujos CAD extremadamente complejos o miles de rutas vectoriales pueden tardar unos segundos en renderizarse."
      }
    ]
  },
  "deep-sanitize": {
    "title": "Desinfección Profunda de Metadatos",
    "metaDescription": "Elimina metadatos, capas ocultas y objetos no utilizados de los archivos PDF. Limpie la información del documento localmente antes de compartirla.",
    "keywords": [
      "desinfectar pdf",
      "limpiar metadatos",
      "privacidad pdf",
      "seguridad pdf"
    ],
    "description": "<p>Deep Metadata Sanitizer es su defensa definitiva contra las fugas de metadatos y el seguimiento oculto. Simplemente dibujar cuadros negros sobre el texto visible en archivos PDF no es suficiente para proteger los secretos comerciales.</p>\n      <p>Esta herramienta escanea la estructura binaria del PDF para borrar completamente la información del autor, el software del creador, los registros de edición (metadatos XMP), las cachés patentadas de PieceInfo y los grupos de contenido opcionales OCG (a menudo utilizados para marcas de agua invisibles).</p>\n      <p>También reescribe completamente las tablas de referencias cruzadas (xref), descartando todos los bloques de actualización incrementales para garantizar que los datos históricos eliminados o modificados no puedan restaurarse.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir PDF",
        "description": "Seleccione el archivo PDF que contiene datos confidenciales o historial de modificaciones."
      },
      {
        "step": 2,
        "title": "Ejecutar escáner",
        "description": "Active el escáner de contención 3D para comprobar si el archivo tiene metadatos y capas ocultos."
      },
      {
        "step": 3,
        "title": "Desinfección profunda",
        "description": "Haga clic en desinfectar para eliminar los elementos de seguimiento y descargar el PDF completamente limpio."
      }
    ],
    "useCases": [
      {
        "title": "Contrato compartido",
        "description": "Elimine registros de redacción, rutas y revisiones anteriores antes de compartir contratos comerciales con terceros.",
        "icon": "file-signature"
      },
      {
        "title": "Publicación anónima",
        "description": "Borre anotaciones y marcas de agua invisibles para publicar documentos de forma anónima y segura.",
        "icon": "eye-off"
      },
      {
        "title": "Optimización de PDF",
        "description": "Elimine objetos huérfanos y flujos de datos basura para que los archivos se carguen más rápido en la web.",
        "icon": "zap"
      }
    ],
    "faq": [
      {
        "question": "¿En qué se diferencia esto de la eliminación de metadatos estándar?",
        "answer": "Las herramientas estándar solo borran campos básicos como título o autor. Deep Sanitizer reconstruye toda la tabla de referencias externas de PDF, limpiando PieceInfo, marcas de agua ocultas y revisiones incrementales históricas."
      },
      {
        "question": "¿Esto afectará el diseño o el texto del documento?",
        "answer": "No, solo elimina los flujos de descripción ocultos y los datos de estructura. El diseño, los textos y los gráficos visibles permanecen sin cambios."
      },
      {
        "question": "¿Esto elimina las contraseñas de PDF?",
        "answer": "No, si un PDF está cifrado, primero debes desbloquearlo antes de realizar una desinfección profunda."
      }
    ]
  },
  "booklet-folding-simulator": {
    "title": "Simulador 3D de Plegado e Imposición",
    "metaDescription": "Organice páginas PDF para imprimir folletos. Obtenga una vista previa de las hojas plegadas y los diseños de encuadernación antes de exportar su documento listo para imprimir.",
    "keywords": [
      "imposicion 3d",
      "simulador de plegado",
      "encuadernacion grapada",
      "diseño editorial"
    ],
    "description": "<p>3D Booklet & Folding Simulator es una herramienta avanzada diseñada para diseñadores de impresión y profesionales editoriales. El diseño de libros tradicional requiere calcular superposiciones de páginas complejas y secuencias de paginación de imposición. Esta herramienta visualiza y automatiza todo ese proceso.</p>\n      <p>Bajo el capó, nuestro algoritmo de imposición personalizado asigna una lista secuencial de páginas PDF a diseños de hojas de impresión estándar (como pliegues por la mitad de 4 páginas, encuadernados de 8 páginas o pliegues en acordeón), fusionando las páginas en el anverso y el reverso de hojas físicas grandes.</p>\n      <p>En la interfaz, utilizamos transformaciones Matrix 3D CSS puras y curvas físicas de masa de resorte para animar el plegado de hojas horizontal y verticalmente, brindando una vista previa de encuadernación similar a la física con un alto factor WOW.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo PDF",
        "description": "Arrastre y suelte el documento PDF que desea diseñar para imprimir."
      },
      {
        "step": 2,
        "title": "Seleccionar diseño plegable",
        "description": "Elija su esquema de imposición preferido (por ejemplo, plegado de 4 páginas, encuadernado de 8 páginas, acordeón de 4 páginas)."
      },
      {
        "step": 3,
        "title": "Vista previa interactiva en 3D",
        "description": "Arrastre el control deslizante para observar cómo se dobla la hoja en 3D e inspeccionar el diseño final de numeración de páginas."
      },
      {
        "step": 4,
        "title": "Generar PDF impuesto",
        "description": "Haga clic en generar para descargar el PDF de la hoja física reorganizada y fusionada, listo para imprimir a doble cara."
      }
    ],
    "useCases": [
      {
        "title": "Creación de prototipos de folletos",
        "description": "Visualice previamente la secuencia de plegado de trípticos y folletos para evitar páginas al revés después de la impresión.",
        "icon": "book-open"
      },
      {
        "title": "Encuadernación de libros",
        "description": "Genere automáticamente hojas de impresión impuestas para revistas o folletos de varias páginas.",
        "icon": "layers"
      },
      {
        "title": "Ayudas visuales para imprentas",
        "description": "Ayude a los clientes a visualizar cómo se distribuyen físicamente y se pliegan las páginas en las hojas impresas.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es la \"Imposición\"?",
        "answer": "La imposición es un paso fundamental en la impresión de preimpresión. Dado que las imprentas comerciales imprimen en hojas grandes, las páginas se organizan desordenadamente de modo que una vez impresas, plegadas y encuadernadas, aparecen en el orden secuencial correcto. Esta herramienta calcula automáticamente ese diseño."
      },
      {
        "question": "¿La vista previa 3D altera el contenido de mi PDF?",
        "answer": "No, el contenido del PDF original simplemente se representa como asignaciones de textura en la hoja 3D. El PDF generado sólo ajusta el orden y la ubicación de las páginas; Las cualidades textuales y gráficas se mantienen intactas."
      },
      {
        "question": "¿Qué pasa si el número de páginas de mi PDF no es múltiplo de 4 u 8?",
        "answer": "El optimizador agrega automáticamente páginas en blanco al final para satisfacer los requisitos matemáticos de recuento de páginas del diseño de plegado seleccionado."
      }
    ]
  },
  "pdf-to-slide": {
    "title": "PDF a Presentación",
    "metaDescription": "Convierta contenido PDF en diapositivas de PowerPoint. Exporte una presentación PPTX con texto e imágenes para editarla más.",
    "keywords": [
      "pdf a ppt",
      "crear diapositivas",
      "convertidor pptx",
      "extraer diagramas"
    ],
    "description": "<p>AI PDF-to-Slide Reconstructor da nueva vida a los documentos PDF estáticos, transformándolos en diapositivas de PowerPoint (PPTX) modernas y altamente personalizables.</p>\n      <p>La herramienta utiliza un extractor de esquemas de diseño avanzado que analiza automáticamente los niveles de encabezado del documento, las líneas de párrafo y los pesos de fuente para establecer un marco de diapositiva lógico. También aísla gráficos vectoriales y tablas de alta resolución, eliminando artefactos de fondo para incrustarlos limpiamente como recursos editables independientes.</p>\n      <p>Todas las salidas PPTX se crean utilizando elementos estándar de Office Open XML, lo que significa que todo el texto sigue siendo totalmente editable y los vectores no pierden resolución. La interfaz muestra una animación fluida de transición de tarjeta \"campo de estrellas\" que visualiza la reconstrucción de una manera atractiva.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Cargar PDF académico/comercial",
        "description": "Sube un documento PDF que contenga secciones y diagramas estructurados."
      },
      {
        "step": 2,
        "title": "Analizar esquemas de diapositivas",
        "description": "Inspeccione la estructura de diapositivas extraída, ajuste títulos o elimine bloques de tarjetas innecesarios."
      },
      {
        "step": 3,
        "title": "Reconstruir a PPTX",
        "description": "Inicie el motor de compilación para recibir un archivo de presentación editable estándar."
      }
    ],
    "useCases": [
      {
        "title": "Presentación del trabajo de investigación",
        "description": "Convierta archivos PDF de revistas académicas, estructuras de texto y diagramas vectoriales en presentaciones de diapositivas listas para charlas.",
        "icon": "graduation-cap"
      },
      {
        "title": "Resumen del informe comercial",
        "description": "Convierta instantáneamente informes corporativos anuales masivos en borradores de presentación limpios y con viñetas.",
        "icon": "presentation"
      },
      {
        "title": "Demostraciones multidispositivo",
        "description": "Evite copiar capturas de pantalla manualmente. Obtenga un marco de diseño limpio y totalmente editable en segundos.",
        "icon": "laptop"
      }
    ],
    "faq": [
      {
        "question": "¿Las diapositivas son editables en Microsoft Office?",
        "answer": "Sí. Los archivos se generan de forma nativa en la memoria según la especificación oficial Office Open XML (OOXML). Los textos, tablas y marcadores de posición son completamente interactivos en PowerPoint, Keynote y WPS."
      },
      {
        "question": "¿Cómo se extraen los gráficos?",
        "answer": "El motor escanea rutas vectoriales y capas ráster en el PDF, detecta áreas delimitadas que representan gráficos y las recorta como nodos SVG independientes o imágenes de alto DPI."
      },
      {
        "question": "¿Esto funciona con documentos escaneados?",
        "answer": "Para archivos PDF escaneados que carecen de capas de texto reales, recomendamos ejecutar primero nuestra herramienta OCR antes de pasar el archivo al Reconstructor de diapositivas."
      }
    ]
  },
  "eink-optimizer": {
    "title": "Optimizador para Lectores e-Ink",
    "metaDescription": "Optimice las páginas PDF para lectores de tinta electrónica. Limpie fondos, aumente el contraste del texto y ajuste los documentos para una lectura más fácil.",
    "keywords": [
      "optimizar eink",
      "binarizacion otsu",
      "engrosar letra",
      "lectores de tinta"
    ],
    "description": "<p>e-Ink Reader Optimizer es una herramienta imprescindible hecha a medida para los entusiastas de los lectores electrónicos que utilizan Kindle, Onyx Boox, Kobo u otros dispositivos de papel electrónico.</p>\n      <p>Muchos libros electrónicos PDF escaneados presentan letras tenues, fondos grises turbios, ruido o sombras escaneadas cuando se ven en pantallas de tinta electrónica. Esta herramienta analiza histogramas de valores de grises y aplica el umbral de binarización de Otsu para separar el texto del fondo, convirtiendo fondos grises en un blanco limpio.</p>\n      <p>Además, integra dilatación morfológica para negrita y espesar caracteres finos y descoloridos, proporcionando una tipografía nítida y de alto contraste. El control deslizante de contraste amortiguado por inercia le permite ajustar el contraste similar al del papel en tiempo real.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir PDF escaneado",
        "description": "Cargue libros electrónicos o documentos escaneados con texto tenue o fondos grises."
      },
      {
        "step": 2,
        "title": "Ajustar el control deslizante de contraste",
        "description": "Arrastre el control deslizante amortiguado para equilibrar la eliminación del fondo y la negrita de los caracteres en tiempo real."
      },
      {
        "step": 3,
        "title": "Optimizar y descargar",
        "description": "Procese el PDF completo para generar un documento de alto contraste y fácil de ver diseñado para e-Ink."
      }
    ],
    "useCases": [
      {
        "title": "Restauración de manuscritos antiguos",
        "description": "Espesa el texto descolorido en escaneos de libros históricos o manuscritos para hacerlos legibles.",
        "icon": "scroll"
      },
      {
        "title": "Limpieza de la hoja de examen",
        "description": "Blanquea las sombras de fondo de exámenes fotocopiados o fotografiados, devolviendo texto negro limpio sobre papel blanco.",
        "icon": "file-text"
      },
      {
        "title": "Adaptación de dispositivos de papel electrónico",
        "description": "Convierta archivos PDF en color a escala de grises optimizada, evitando artefactos desordenados y difuminados en pantallas monocromáticas.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo funciona el \"carácter en negrita\"?",
        "answer": "En el procesamiento de imágenes, esto se llama dilatación. Utiliza una matriz estructurante para expandir los márgenes de los caracteres en un píxel, engrosando físicamente los trazos tenues para hacerlos legibles."
      },
      {
        "question": "¿Este proceso aumentará el tamaño del archivo?",
        "answer": "Todo lo contrario. Al binarizar imágenes complejas en color/escala de grises en diseños simples en blanco y negro, la compresión estándar (como CCITT Grupo 4) puede reducir significativamente el tamaño del archivo PDF."
      },
      {
        "question": "¿Esto admite archivos PDF con texto nativo?",
        "answer": "Sí. Los archivos PDF vectoriales nativos se rasterizan en alta resolución en segundo plano, se optimizan y se vuelven a compilar, lo que garantiza una lectura unificada de alto contraste."
      }
    ]
  },
  "cert-cryptor": {
    "title": "Cifrar Certificado",
    "metaDescription": "Cifre y firme digitalmente documentos PDF mediante certificados. Trabaje con archivos de certificados localmente en su navegador.",
    "keywords": [
      "cifrado de certificados",
      "sello de lacre 3d",
      "firma digital",
      "pkcs7"
    ],
    "description": "<p>3D Wax-Seal & Certificate Cryptor proporciona seguridad de grado militar y una estética de grado físico premium para archivos, títulos o acuerdos corporativos confidenciales.</p>\n      <p>Técnicamente, ofrece cifrado de clave pública asimétrica: importe el certificado de clave pública de un destinatario (.cer/.crt) para bloquear el flujo de PDF; sólo el titular de la clave privada correspondiente (.pfx) puede descifrarla. También genera firmas digitales estándar PKCS#7 para garantizar la integridad del documento a prueba de manipulaciones.</p>\n      <p>Visualmente, presentamos un sello de cera rojo o dorado físico en 3D. Cuando firmas, un sello bellamente renderizado desciende con un sonido mecánico satisfactorio, dejando un sello de cera en 3D con variaciones de altura realistas y escurrimientos de cera en la página, rodeado de pistas criptográficas brillantes.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Cargar PDF y certificado",
        "description": "Agregue su PDF e importe su certificado de firma (.pfx) o el certificado público del destinatario (.cer)."
      },
      {
        "step": 2,
        "title": "Coloca el sello 3D",
        "description": "Arrastre y ubique el sello en la vista previa del documento y elija un estilo de cera (por ejemplo, dorado, carmesí)."
      },
      {
        "step": 3,
        "title": "Presione y firme",
        "description": "Haga clic en ejecutar para ver la ceremonia de impresión del sello de cera en 3D, generando una firma digital de grado físico."
      },
      {
        "step": 4,
        "title": "Descargar PDF seguro",
        "description": "Guarde el documento de salida, ahora bloqueado y sellado criptográficamente."
      }
    ],
    "useCases": [
      {
        "title": "Diplomas y Certificados",
        "description": "Coloque insignias con sellos de cera 3D de gran valor en diplomas y premios digitales, respaldados por firmas digitales genuinas.",
        "icon": "award"
      },
      {
        "title": "Acuerdos confidenciales",
        "description": "Bloquee contratos confidenciales utilizando el certificado público del cliente para que solo su tarjeta física segura pueda desbloquearlos.",
        "icon": "shield-alert"
      },
      {
        "title": "Comunicados de prensa oficiales",
        "description": "Firme digitalmente anuncios públicos para evitar ediciones de texto maliciosas o suplantaciones de identidad.",
        "icon": "stamp"
      }
    ],
    "faq": [
      {
        "question": "¿El sello de cera es sólo una imagen o una firma real?",
        "answer": "Ambos. El sistema genera una impresión de cera 3D increíblemente realista con una profundidad mapeada normal (capa visual) y codifica una firma criptográfica PKCS#7 auténtica y a prueba de manipulaciones dentro del PDF (capa de datos)."
      },
      {
        "question": "¿Qué es el \"cifrado basado en certificados\"?",
        "answer": "Es una técnica de cifrado sin contraseña. Cifra el archivo utilizando la clave pública del destinatario. El lector busca automáticamente su certificado privado local para descifrar el archivo sin problemas, garantizando una seguridad sólida."
      },
      {
        "question": "¿Puedo personalizar el diseño del sello?",
        "answer": "Sí. Proporcionamos múltiples diseños, como la marca de agua PDFCraft o un escudo real, y usted puede ajustar el radio de fusión de la cera y la profundidad de sangría del mapa normal en el panel."
      }
    ]
  },
  "passport-id-composer": {
    "title": "Copiar Identificación Doble Cara",
    "metaDescription": "Combine el anverso y el reverso de un documento de identidad o pasaporte en una página PDF A4. Organice escaneos y agregue una marca de agua opcional.",
    "keywords": [
      "copia de identificacion",
      "anverso reverso a4",
      "copia de pasaporte",
      "marca de agua"
    ],
    "description": "<p>El compositor de doble cara de Passport & ID es una utilidad de productividad increíblemente útil para operaciones comerciales y personales estándar.</p>\n      <p>Al solicitar cuentas bancarias, incorporarnos o firmar acuerdos, con frecuencia necesitamos copias de ambos lados de los documentos de identidad. Esta herramienta acepta imágenes frontales y posteriores o páginas PDF y las organiza con precisión en una sola página A4 cumpliendo con las resoluciones de diseño estándar nacionales.</p>\n      <p>Además, puede personalizar marcas de agua translúcidas antifalsificación superpuestas (por ejemplo, \"SOLO PARA INGRESO\") para evitar la reutilización no autorizada de documentos. Incluso cuenta con un efecto visual en la puerta del escáner, fotocopiadora y barrido láser con brillo 3D para ofrecer una respuesta de primera calidad.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Cargar archivos de identificación",
        "description": "Cargue fotografías/escaneos del anverso y reverso de su documento de identidad o pasaporte (hasta 2 archivos)."
      },
      {
        "step": 2,
        "title": "Configurar marca de agua segura",
        "description": "Ingrese texto personalizado superpuesto para restringir la replicación no autorizada de documentos."
      },
      {
        "step": 3,
        "title": "Redactar y descargar",
        "description": "Haga clic en ejecutar para generar un PDF A4 de una sola página listo para imprimir."
      }
    ],
    "useCases": [
      {
        "title": "Envío de incorporación de recursos humanos",
        "description": "Alinee rápidamente las copias de identificación de los empleados y aplique marcas de agua protectoras.",
        "icon": "user"
      },
      {
        "title": "Servicio gubernamental y bancario",
        "description": "Prepare impresiones de identificación estandarizadas que cumplan con los requisitos de archivo físico.",
        "icon": "landmark"
      },
      {
        "title": "Copias de seguridad de viajes",
        "description": "Organice las páginas del pasaporte y los detalles del visado en un papel A4 unificado.",
        "icon": "plane"
      }
    ],
    "faq": [
      {
        "question": "¿Las marcas de agua bloquearán los detalles del texto de identidad?",
        "answer": "No. La marca de agua se representa con una opacidad cuidadosamente ajustada del 15 % para bloquear la falsificación sin sacrificar la legibilidad de los campos de texto o fotografía."
      },
      {
        "question": "¿Es exacto el tamaño de la tarjeta compuesta?",
        "answer": "Sí. Representa la tarjeta de identificación en la dimensión física estándar de 85,6 mm × 54 mm escalada perfectamente en la página A4."
      },
      {
        "question": "¿Admite licencias de conducir?",
        "answer": "Sí, funciona muy bien para cualquier escaneo de identidad basado en tarjetas."
      }
    ]
  },
  "annotation-exporter": {
    "title": "Exportar Anotaciones",
    "metaDescription": "Exporte comentarios, notas, resaltados y subrayados en PDF a Markdown o JSON. Organizar anotaciones para estudio, revisión e investigación.",
    "keywords": [
      "exportar anotaciones pdf",
      "extraer resaltados",
      "notas de estudio",
      "markdown"
    ],
    "description": "<p>El Exportador de anotaciones inteligentes es un potente espacio de trabajo que libera todo el valor de sus anotaciones en PDF.</p>\n      <p>Mientras realizamos reseñas literarias o leemos libros electrónicos extensos, hacemos un uso intensivo de resaltados y notas adhesivas. Esta herramienta deserializa el diccionario PDF <code>/Annots</code> de bajo nivel y extrae todos los resaltados, notas, subrayados y marcadores de tinta dibujados a mano.</p>\n      <p>Alinea automáticamente los comentarios con sus respectivos encabezados de esquema, generando un cuaderno Markdown o JSON estructurado con anclajes de referencia de página. Observe cómo sus reflejos flotan maravillosamente en el panel de vidrio esmerilado del cuaderno.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importar PDF anotado",
        "description": "Cargue cualquier ensayo o libro en PDF que contenga subrayados, aspectos destacados o comentarios."
      },
      {
        "step": 2,
        "title": "Configurar filtros y formato",
        "description": "Seleccione los tipos de anotaciones que desea extraer y elija Markdown o JSON."
      },
      {
        "step": 3,
        "title": "Extraer cuaderno",
        "description": "Haga clic en ejecutar para analizar el flujo de comentarios y crear su resumen general."
      }
    ],
    "useCases": [
      {
        "title": "Síntesis de literatura científica",
        "description": "Extraiga notas de lectura de varios artículos en plantillas de Markdown para redactar reseñas ilustradas al instante.",
        "icon": "graduation-cap"
      },
      {
        "title": "Compilación del diario de estudio",
        "description": "Recopile hermosas ideas y comentarios personales de libros de texto en bases de datos de Obsidian.",
        "icon": "book"
      },
      {
        "title": "Auditoría colaborativa de documentos",
        "description": "Reúna correcciones de revisión de diferentes miembros del equipo y establezca listas de tareas procesables.",
        "icon": "users"
      }
    ],
    "faq": [
      {
        "question": "¿Puede extraer trazos de tinta dibujados a mano en tabletas?",
        "answer": "Sí. Siempre que las marcas dibujadas a mano se almacenen como anotaciones estándar de PDF Ink, la herramienta puede aislar y estructurar perfectamente las posiciones de sus páginas."
      },
      {
        "question": "¿Por qué algunos extractos resaltados están vacíos?",
        "answer": "Si el PDF es una imagen escaneada que no permite realizar búsquedas y carece de texto subyacente, resalta solo las coordenadas de la tienda. Primero ejecute OCR en el PDF y luego extraiga las anotaciones."
      },
      {
        "question": "¿Los enlaces de Markdown regresan al PDF?",
        "answer": "El archivo exportado enumera números de página precisos y encabezados de esquema originales para que las referencias cruzadas sean perfectas."
      }
    ]
  },
  "batch-watermark-remover": {
    "title": "Quitar Marcas de Agua",
    "metaDescription": "Elimine las marcas de agua de imágenes y texto coincidentes de los archivos PDF. Revise el resultado para comprobar que se conserva el contenido del documento.",
    "keywords": [
      "eliminar marca de agua pdf",
      "quitar logos pdf",
      "limpieza de pdf"
    ],
    "description": "<p>Batch Watermark Remover es un desinfectante de PDF de última generación que limpia físicamente los documentos.</p>\n      <p>Los eliminadores de marcas de agua genéricos normalmente solo superponen bloques blancos o distorsionan el espaciado de los documentos. Esta herramienta utiliza una sólida técnica de <strong>depuración de flujo de contenido</strong>.</p>\n      <p>Analiza los operadores de representación de bajo nivel de cada página, identifica comandos de cadena de marca de agua específicos (por ejemplo, \"Confidencial\", \"BORRADOR\") u objetos de imagen de fondo, y los elimina o sobrescribe físicamente. Las marcas de agua desaparecen por completo, conservando el formato original y la calidad vectorial.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo con marca de agua",
        "description": "Proporcionar el documento PDF que muestre logotipos comerciales o etiquetas de seguridad."
      },
      {
        "step": 2,
        "title": "Definir marca de agua de destino",
        "description": "Ingrese la cadena exacta para eliminar o active la limpieza de imágenes translúcidas de XObject."
      },
      {
        "step": 3,
        "title": "Ejecutar purga física",
        "description": "Haga clic en ejecutar para eliminar los operadores de contenido con alta fidelidad."
      }
    ],
    "useCases": [
      {
        "title": "Archivar activos corporativos",
        "description": "Elimine las marcas de agua \"Confidenciales\" o \"Borrador\" caducadas para su distribución al público en general.",
        "icon": "archive"
      },
      {
        "title": "Limpiar el desorden del fondo",
        "description": "Elimina las imágenes de fondo pesadas que distraen a los lectores de escanear el texto.",
        "icon": "eye"
      },
      {
        "title": "Reutilización de documentos",
        "description": "Limpie los elementos de marca antiguos del pie de página para aplicar nuevas plantillas corporativas fácilmente.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "¿Se pueden recuperar las marcas de agua eliminadas?",
        "answer": "No. A diferencia de las máscaras visuales, reescribimos el flujo binario de la página para borrar los operadores, sin dejar rastros."
      },
      {
        "question": "¿Admite gradientes complejos?",
        "answer": "Si la marca de agua se almacena como un nodo de texto separado o un XObject de imagen, la herramienta puede aislarla y borrarla físicamente."
      },
      {
        "question": "¿Modificará el texto normal de la página?",
        "answer": "No. El motor de depuración solo se dirige a operadores que coincidan con la firma de marca de agua especificada; El texto normal permanece intacto."
      }
    ]
  },
  "smart-data-redactor": {
    "title": "Redactar Datos Sensibles",
    "metaDescription": "Encuentre direcciones de correo electrónico, números de teléfono y patrones de identificación en archivos PDF. Revise coincidencias y redacte contenido confidencial localmente.",
    "keywords": [
      "censurar pdf",
      "ocultar datos sensibles",
      "redaccion de documentos"
    ],
    "description": "<p>Smart Privacy Data Redactor es una herramienta automatizada diseñada para garantizar un sólido cumplimiento de la privacidad de los documentos.</p>\n      <p>Simplemente superponer cuadros negros en editores normales no es seguro porque el texto subyacente aún se puede copiar. Esta herramienta implementa una verdadera <strong>coincidencia de patrones de PNL y desinfección del flujo de contenido físico</strong>.</p>\n      <p>Escanea el documento en busca de correos electrónicos, números de teléfono, números de seguridad social o palabras clave personalizadas, coloca una máscara negra mate premium sobre las coordenadas y sobrescribe permanentemente el flujo de caracteres con <code>[REDACTED]</code>, bloqueando las filtraciones de copiar y pegar.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir PDF de destino",
        "description": "Proporcione el contrato o declaración que muestre detalles confidenciales del cliente."
      },
      {
        "step": 2,
        "title": "Seleccionar reglas de redacción",
        "description": "Verifique los patrones de destino (correo electrónico, teléfono, identificación) o defina palabras confidenciales personalizadas."
      },
      {
        "step": 3,
        "title": "Redacción y descarga automáticas",
        "description": "Haga clic en ejecutar para superponer máscaras seguras y borrar los flujos de texto."
      }
    ],
    "useCases": [
      {
        "title": "Intercambio de acuerdos comerciales",
        "description": "Publique de forma segura documentos comerciales ocultando salarios personales, números de teléfono o correos electrónicos.",
        "icon": "file-signature"
      },
      {
        "title": "Reanudar la anonimización de la base de datos",
        "description": "Elimina los nombres, la información de contacto o las direcciones de los solicitantes para cumplir con estrictas normas de privacidad.",
        "icon": "user-check"
      },
      {
        "title": "Distribución de estados financieros",
        "description": "Ocultar números de libro mayor específicos o nombres de accionistas antes de publicar informes.",
        "icon": "pie-chart"
      }
    ],
    "faq": [
      {
        "question": "¿Los detalles redactados realmente no se pueden copiar?",
        "answer": "Sí. Reescribimos el flujo de contenido de la página para borrar los caracteres. Copiar y pegar desde el cuadro redactado solo extraerá la cadena \"[ELIMINADO]\"."
      },
      {
        "question": "¿Funciona con archivos PDF de imágenes escaneadas?",
        "answer": "Esta herramienta apunta a flujos de texto vectoriales. Para archivos de imágenes escaneadas, utilice primero nuestra herramienta OCR o recórtela manualmente."
      },
      {
        "question": "¿Está guardado el alcance objetivo del HUD rojo en el archivo?",
        "answer": "No, ese es un magnífico efecto de carga interactivo en la interfaz. El PDF de salida muestra rectángulos negros limpios estándar."
      }
    ]
  },
  "bookmarks-auto-generator": {
    "title": "Generar Marcadores",
    "metaDescription": "Genere marcadores PDF a partir de títulos y patrones de texto. Agregue un esquema navegable a documentos, manuales e informes extensos.",
    "keywords": [
      "marcadores pdf",
      "esquema de navegacion",
      "crear marcadores automaticos"
    ],
    "description": "<p>El generador automático de marcadores aporta claridad absoluta a documentos PDF extensos y no estructurados.</p>\n      <p>Escanear libros o folletos sin un esquema de navegación es doloroso. Esta herramienta analiza jerarquías tipográficas (como tamaños y pesos de fuente) junto con reglas de expresiones regulares (como \"Capítulo 1\", \"Sección 1.1\") para deducir encabezados automáticamente.</p>\n      <p>Luego compila e inyecta estos encabezados directamente en el diccionario PDF <code>/Outline</code>. Cualquier visor estándar mostrará una barra lateral de navegación de varios niveles bellamente estructurada, respaldada por una vista previa interactiva de árbol de esquemas en 3D.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Proporcionar PDF no estructurado",
        "description": "Sube folletos grandes, artículos académicos o libros electrónicos que no tengan una barra lateral de catálogo."
      },
      {
        "step": 2,
        "title": "Reglas de sintonización de rumbo",
        "description": "Configure estrategias que especifiquen umbrales mínimos de tamaño de fuente y reglas de coincidencia."
      },
      {
        "step": 3,
        "title": "Construir e inyectar",
        "description": "Haga clic en ejecutar para representar los nodos del esquema y escribir físicamente los marcadores del esquema."
      }
    ],
    "useCases": [
      {
        "title": "Organización de manuales técnicos",
        "description": "Compile automáticamente capítulos de varios niveles para pautas estándar, lo que ahorra horas de indexación manual.",
        "icon": "tool"
      },
      {
        "title": "Preparación de tesis",
        "description": "Inyecte marcadores anidados limpios que coincidan exactamente con los estándares de presentación académica.",
        "icon": "graduation-cap"
      },
      {
        "title": "Optimización de la navegación de libros electrónicos",
        "description": "Estructurar las publicaciones de texto escaneadas en capítulos legibles para tabletas o lectores móviles.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "¿Puede coincidir con formatos de capítulos personalizados?",
        "answer": "Sí. Puede agregar patrones de expresiones regulares personalizados en el panel de la barra lateral (por ejemplo, `^Part\\s+\\w+`) para apuntar a diseños únicos."
      },
      {
        "question": "¿Esto afectará la presentación visual de la página?",
        "answer": "No. La herramienta solo agrega un catálogo de marcadores estructurales internos. El texto y los recursos visuales de las páginas permanecen intactos."
      },
      {
        "question": "¿Cuántos niveles de marcadores se admiten?",
        "answer": "La herramienta admite estructuras de marcadores profundamente anidadas, lo que permite diseños de capítulos, secciones y subsecciones."
      }
    ]
  },
  "batch-barcode-injector": {
    "title": "Insertar Códigos en Lote",
    "metaDescription": "Agregue códigos QR o códigos de barras Código 128 a páginas PDF de forma masiva. Ajuste la ubicación para el seguimiento de documentos, etiquetas y flujos de trabajo de impresión.",
    "keywords": [
      "insertar qr pdf",
      "códigos de barras en lote",
      "etiquetado pdf"
    ],
    "description": "<p>El inyector de precisión Batch Barcode une el seguimiento de activos digitales con la indexación de documentos físicos.</p>\n      <p>En el almacenamiento, la revisión de contratos o la logística, a menudo necesitamos sellar códigos de barras únicos en facturas o tarjetas de dispositivos. Esta herramienta lo hace increíblemente fácil.</p>\n      <p>Genere códigos QR o códigos de barras Code128 altamente legibles y utilice nuestro magnífico espacio de trabajo de alineación con guías láser verdes para posicionarlos. Un pitido de audio de escaneo limpio se activa al momento de la colocación, lo que proporciona una respuesta de alta calidad.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir documento",
        "description": "Arrastre y suelte archivos PDF de una o varias páginas que representan acuerdos o listas de envío."
      },
      {
        "step": 2,
        "title": "Coordenadas del código de barras de posición",
        "description": "Establezca el tipo de código, el valor y arrastre el cuadro de ubicación para especificar las coordenadas."
      },
      {
        "step": 3,
        "title": "Sellos y descarga",
        "description": "Haga clic en ejecutar para representar la capa de código en los índices de la página de destino."
      }
    ],
    "useCases": [
      {
        "title": "Seguimiento de validación de contratos",
        "description": "Aplique un código QR único que muestre detalles antifalsificación en el encabezado de los contratos.",
        "icon": "file-check"
      },
      {
        "title": "Codificación de listas de envío",
        "description": "Coloque códigos de barras Code128 en los puntos de destino para una validación rápida de las armas de escaneo en el almacén.",
        "icon": "truck"
      },
      {
        "title": "Tarjeta de registro de activos",
        "description": "Agregue códigos QR de inventario que muestren especificaciones de mantenimiento en hojas de equipos físicos.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Los códigos de barras generados son altamente escaneables?",
        "answer": "Sí. Incorporamos representaciones PNG de alta resolución sin pérdidas que permanecen nítidas incluso cuando se imprimen en dimensiones muy pequeñas."
      },
      {
        "question": "¿Puedo inyectar valores únicos en cada página?",
        "answer": "Actualmente, la ejecución por lotes aplica el mismo código configurado en todas las páginas seleccionadas. La importación de Excel de valores múltiples está prevista en una actualización futura."
      },
      {
        "question": "¿Qué representa la coordenada `pt`?",
        "answer": "`pt` (Punto) es la unidad física estándar de PDF (72 pt = 1 pulgada). Las páginas A4 se representan como 595 × 842 pt."
      }
    ]
  },
  "signature-ink-optimizer": {
    "title": "Extraer Firmas y Sellos",
    "metaDescription": "Extrae una firma o sello de una foto y elimina su fondo. Descargue un PNG transparente para usarlo en documentos.",
    "keywords": [
      "extraer firma pdf",
      "digitalizar sellos",
      "fondo transparente png"
    ],
    "description": "<p>El optimizador de tinta Chroma Signature & Stamp funciona como un purificador de tinta profesional de alta fidelidad.</p>\n      <p>Las firmas o sellos corporativos capturados en teléfonos a menudo presentan un tinte de papel amarillo, sombras desiguales y arrugas en las páginas. Pegarlos directamente en archivos PDF de contratos parece un trabajo amateur.</p>\n      <p>Esta herramienta separa el canal Alfa según la luminancia y el espacio de color. Blanquea completamente los fondos de papel mientras afila el rojo del sello (Chroma Ink) y la escritura a mano en negro. El resultado es un sello PNG transparente de primera calidad con texturas de tinta genuinas.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir foto del sello",
        "description": "Proporcione una foto capturada por teléfono de su firma o sello."
      },
      {
        "step": 2,
        "title": "Ajustar los controles deslizantes de limpieza",
        "description": "Mueva los controles deslizantes de contraste y luminancia para aislar el ruido de fondo en tiempo real."
      },
      {
        "step": 3,
        "title": "Descargar firma limpia",
        "description": "Exporte como PNG transparente listo para estampar en acuerdos de documentos formales."
      }
    ],
    "useCases": [
      {
        "title": "Preparación profesional de firma electrónica",
        "description": "Convierta fotografías de firmas grises en hermosas capas transparentes para firmar acuerdos.",
        "icon": "file-signature"
      },
      {
        "title": "Sanitización del sello corporativo",
        "description": "Limpie los escaneos de sellos físicos descartando el ruido de la fibra del papel y preparando sellos de sellos transparentes y nítidos.",
        "icon": "stamp"
      },
      {
        "title": "Extracción de arte lineal dibujado",
        "description": "Aísle los trazos negros de los cuadernos de dibujo para facilitar los flujos de trabajo de coloración en Photoshop.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "¿En qué se diferencia la extracción Alfa autoadaptativa de la codificación normal?",
        "answer": "La incrustación cromática estándar a menudo hace que los detalles del trazo característico parezcan bloques y pixelados. Nuestro algoritmo aísla sólo el ruido de fondo blanco/amarillo y suaviza los bordes de la tinta."
      },
      {
        "question": "¿Qué formatos de imagen son compatibles?",
        "answer": "Admitimos JPG, JPEG y PNG. Para obtener mejores resultados, capture su fotografía distintiva bajo una iluminación brillante y uniforme."
      },
      {
        "question": "¿Se modificará el detalle de escritura a mano?",
        "answer": "No. El filtrado de píxeles actúa sobre las coordenadas originales, agudizando el contraste y manteniendo texturas de trazo genuinas."
      }
    ]
  },
  "dead-link-debugger": {
    "title": "Reparar Enlaces Rotos",
    "metaDescription": "Inspeccione los hipervínculos de PDF y reemplace los destinos rotos u obsoletos. Escanee las anotaciones de los enlaces y guarde el documento actualizado.",
    "keywords": [
      "enlaces rotos pdf",
      "corregir url pdf",
      "depurar hipervinculos"
    ],
    "description": "<p>Dead Link Debugger es un editor estructural profundo que garantiza la calidad de la interacción de enlaces en archivos publicados.</p>\n      <p>Las URL rotas (404/500) dentro de manuales, documentos técnicos o guías reducen la autoridad de la marca. Esta herramienta le permite administrar la base de datos de hipervínculos sin problemas.</p>\n      <p>Analiza los diccionarios <code>/Link</code> de bajo nivel en cada página, los sondea y muestra el estado de los enlaces en una cuadrícula interactiva (rojo para enlaces inactivos, naranja para redireccionamientos). Simplemente escriba la URL de redireccionamiento actualizada y la herramienta escribirá el nuevo destino directamente en la secuencia binaria del PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Proporcionar documento de destino",
        "description": "Cargue el manual o catálogo en PDF que contenga enlaces para depurar."
      },
      {
        "step": 2,
        "title": "Escanear y actualizar",
        "description": "Deje que el depurador extraiga todas las entidades URL. Ingrese nuevas URL de redireccionamiento para elementos rotos."
      },
      {
        "step": 3,
        "title": "Guardar actualizaciones de redireccionamiento",
        "description": "Haga clic en ejecutar para reescribir las acciones /URI y descargar el PDF corregido."
      }
    ],
    "useCases": [
      {
        "title": "Revisión de enlaces rotos del folleto",
        "description": "Corrija instantáneamente las URL incorrectas en los folletos publicados sin volver a abrir los editores de diseño originales.",
        "icon": "refresh-cw"
      },
      {
        "title": "Verificación de enlaces de bibliografía",
        "description": "Verificar enlaces de bibliografía académica en informes, actualizando referencias para mantener la autoridad.",
        "icon": "book"
      },
      {
        "title": "Actualizaciones de cambio de marca corporativa",
        "description": "Actualice por lotes las URL antiguas en los PDF corporativos cuando se cambian los nombres de dominio de la empresa.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "¿Por qué no se verifica completamente en línea la accesibilidad del enlace?",
        "answer": "Los navegadores web aplican políticas CORS estrictas que bloquean la verificación directa de enlaces de múltiples orígenes. Nuestra herramienta enumera los enlaces claramente y le permite corregirlos manualmente."
      },
      {
        "question": "¿Esto modificará la representación visual del texto en la página?",
        "answer": "No. Solo altera la acción de navegación `/URI` subyacente. El texto del enlace visual permanece sin cambios."
      },
      {
        "question": "¿Admite la modificación de marcadores de páginas internas?",
        "answer": "Esta herramienta maneja hipervínculos `/URI` externos. Para navegar por el diseño interno, utilice nuestra herramienta TOC interactiva."
      }
    ]
  },
  "interactive-toc-generator": {
    "title": "Generar Índice Interactivo",
    "metaDescription": "Agregue una tabla de contenido en la que se pueda hacer clic a su PDF. Cree enlaces de capítulos y regrese a la navegación para facilitar la navegación de documentos.",
    "keywords": [
      "indice interactivo pdf",
      "tabla de contenido pdf",
      "enlaces de navegacion"
    ],
    "description": "<p>El generador interactivo de TOC presenta una experiencia de navegación revolucionaria para archivos PDF extensos.</p>\n      <p>Hojear cientos de páginas en documentos no estructurados para localizar los capítulos de destino es frustrante. Esta herramienta presenta la <strong>compilación TOC bidireccional</strong>.</p>\n      <p>Escanea los encabezados y genera una página de índice premium inspirada en el origami, insertada justo después de la portada. Además de crear enlaces /Ir a en los que se puede hacer clic para cada fila del índice, inyecta un ancla flotante pequeña y elegante \"TOC ↩\" en la esquina de cada página del capítulo de destino. Los lectores pueden avanzar y retroceder instantáneamente, disfrutando de una navegación similar a la web.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Proporcionar documento PDF",
        "description": "Cargue un informe, libro electrónico o propuesta que necesite un catálogo interactivo."
      },
      {
        "step": 2,
        "title": "Establecer título e índice de TOC",
        "description": "Personaliza el título principal y elige el índice de la página para insertar la página TOC."
      },
      {
        "step": 3,
        "title": "Tejer anclas y guardar",
        "description": "Haga clic en ejecutar para compilar las páginas y escribir la navegación de doble enlace."
      }
    ],
    "useCases": [
      {
        "title": "Pulido del informe corporativo anual",
        "description": "Inyecte una hermosa página de índice después de la portada para permitir a los accionistas saltar entre los gráficos financieros.",
        "icon": "file-bar"
      },
      {
        "title": "Indexación de tesis",
        "description": "Compilación rápida de índices estándar alineados con las reglas de formato de la universidad.",
        "icon": "bookmark"
      },
      {
        "title": "Navegación del manual de operación",
        "description": "Ayude a los lectores del manual a pasar rápidamente de las hojas de solución de problemas al índice de contenido principal.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo funcionan los anclajes bidireccionales?",
        "answer": "Creamos anotaciones de enlaces estándar en la página TOC dirigidas a las páginas respectivas; luego incorporamos un enlace a la página TOC en todas las hojas de capítulos de destino."
      },
      {
        "question": "¿La inserción de la página TOC alterará los números de página existentes?",
        "answer": "No. El compilador tiene en cuenta el desplazamiento de la página TOC recién insertada, asegurando que todos los destinos de destino estén alineados."
      },
      {
        "question": "¿Es válida la página TOC cuando se imprime físicamente?",
        "answer": "Sí. El TOC generado enumera números de páginas físicas limpios para guiar a los lectores en papel y al mismo tiempo permite hacer clic en enlaces en la pantalla."
      }
    ]
  },
  "pdf-deskew-aligner": {
    "title": "Corrección de Escaneos Torcidos",
    "metaDescription": "Detecta líneas de texto inclinadas localmente y ajusta el contenido corregido a la página original.",
    "keywords": [
      "corregir inclinacion pdf",
      "alinear escaneo pdf",
      "deskew automatico"
    ],
    "description": "\n      <p>Detecta líneas de texto inclinadas localmente y ajusta el contenido corregido a la página original.</p>\n      <p>Las páginas en blanco, los escaneos inciertos y las páginas con anotaciones se conservan sin cambios.</p>\n      <p>Las resoluciones altas tardan más. Las páginas muy grandes usan una resolución de análisis menor.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Proporcionar PDF sesgado",
        "description": "Cargue cualquier hoja PDF que contenga documentos escaneados rotados o mal alineados."
      },
      {
        "step": 2,
        "title": "Ajustes de alineación",
        "description": "Resolución de análisis · Ángulo máximo de corrección"
      },
      {
        "step": 3,
        "title": "Analizar y enderezar",
        "description": "Descargar · PDF alineado"
      }
    ],
    "useCases": [
      {
        "title": "Archivado de recibos y contratos",
        "description": "Enderece escaneos rápidos de contratos móviles antes de guardarlos como archivos PDF digitales formales.",
        "icon": "file-text"
      },
      {
        "title": "Digitalización de libros académicos",
        "description": "Desinfecte los escaneos de libros en microfilmes donde las líneas de texto se salen de los márgenes horizontales.",
        "icon": "book"
      },
      {
        "title": "Calificación de tareas de estudiantes",
        "description": "Corregir instantáneas de tareas tomadas por los teléfonos de los estudiantes, lo que relaja los ojos de los profesores que califican.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo se detecta la inclinación del documento?",
        "answer": "Detecta líneas de texto inclinadas localmente y ajusta el contenido corregido a la página original."
      },
      {
        "question": "¿Este proceso recortará los bordes de la página?",
        "answer": "Detecta líneas de texto inclinadas localmente y ajusta el contenido corregido a la página original."
      },
      {
        "question": "¿Admite documentos llenos de diagramas?",
        "answer": "Las páginas en blanco, los escaneos inciertos y las páginas con anotaciones se conservan sin cambios."
      }
    ]
  },
  "pdf-two-column-reflower": {
    "title": "Reorganizar PDFs de Dos Columnas",
    "metaDescription": "Redistribuya documentos PDF de dos columnas en una sola columna para facilitar la lectura móvil. Ajuste los documentos académicos para pantallas más pequeñas.",
    "keywords": [
      "redistribuir columnas",
      "pdf doble columna a una",
      "ajustar cropbox"
    ],
    "description": "<p>El Academic Two-Column Reflower resuelve el problema más importante de la investigación digital: leer artículos en pantallas móviles estándar.</p>\n      <p>Los diseños de dos columnas (utilizados por IEEE, ACM, Nature y los principales informes) están diseñados para papel A4. Navegar por ellos en las pantallas de los teléfonos o dispositivos Kindle requiere hacer zoom constantemente, arrastrar hacia la derecha, desplazarse hacia abajo y volver a desplazarse hacia arriba. Rompe completamente la comprensión lectora.</p>\n      <p>Nuestro procesador implementa un <strong>reflujo de párrafos inteligente y un escaneo de barrera de partición vertical</strong>. Analiza las coordenadas de los caracteres para mapear canalones de dos columnas, divide el diseño y teje segmentos verticalmente (primero la columna izquierda, luego la derecha). Los gráficos, fórmulas y títulos se reorganizan perfectamente en un PDF fluido de desplazamiento vertical de una sola columna.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir PDF a doble columna",
        "description": "Proporcione el informe del diario IEEE/ACM o la hoja PDF de varias columnas."
      },
      {
        "step": 2,
        "title": "Inspeccionar el canal de partición",
        "description": "Verifique las guías rojas de corte de partición vertical. Ajuste los márgenes para evitar la superposición de elementos."
      },
      {
        "step": 3,
        "title": "Redistribuir y guardar",
        "description": "Haga clic en ejecutar para compilar las páginas en diseños fluidos y descargarlas al instante."
      }
    ],
    "useCases": [
      {
        "title": "Importación de libros de lector electrónico",
        "description": "Convierta ensayos densos de dos columnas en cómodos documentos de una sola columna que coincidan con las pantallas de Kindle y Onyx.",
        "icon": "tablet"
      },
      {
        "title": "Lectura del teléfono del metro",
        "description": "Lea literatura de investigación cómodamente con gestos de deslizamiento vertical con una sola mano durante el tránsito.",
        "icon": "smartphone"
      },
      {
        "title": "Formato de revistas de archivo",
        "description": "Modernizar periódicos antiguos de columnas estrechas a formatos web legibles de una sola columna.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo se manejan los gráficos y ecuaciones generales?",
        "answer": "Nuestro motor aplica \"detección de elementos de tramo\". Cuando una ecuación o diagrama excede el ancho de columna normal, se aísla como un elemento de ancho completo, manteniendo las proporciones originales sin recortes."
      },
      {
        "question": "¿Esto modificará la resolución del texto vectorial?",
        "answer": "En absoluto. Reescribimos matrices de transformación de objetos de texto PDF en el nivel del árbol de objetos en lugar de rasterizarlos, lo que significa que el texto sigue siendo 100 % vectorial y totalmente seleccionable."
      },
      {
        "question": "¿Esto funciona en documentos con imágenes escaneadas?",
        "answer": "Para archivos PDF basados ​​en imágenes planas, recomendamos encarecidamente ejecutar nuestra herramienta OCR primero antes de ejecutar el proceso de reflujo."
      }
    ]
  },
  "pdf-page-resizer-uniform": {
    "title": "Uniformar Tamaño de Páginas PDF",
    "metaDescription": "Cambie el tamaño de las páginas PDF mixtas a un tamaño uniforme. Normalice páginas A4, A3 y Carta con escala proporcional y márgenes centrados.",
    "keywords": [
      "dimensionar paginas pdf",
      "uniformar pdf a a4",
      "centrar contenido paginas"
    ],
    "description": "<p>Multi-Format PDF Resizer es el estandarizador definitivo para documentos corporativos desordenados y que no coinciden.</p>\n      <p>La combinación de facturas, contratos y cuadros complementarios a menudo da como resultado un PDF que contiene enormes páginas de libro mayor A3, acuerdos estándar A4 y sobres tamaño Carta. Hojearlos distrae mucho y enviarlos a impresoras físicas de oficina a menudo provoca errores de atasco debido a que el tamaño no coincide.</p>\n      <p>Esta herramienta reescribe las cuadrículas <code>/MediaBox</code> y <code>/CropBox</code> de bajo nivel en cada página. Mapea los anchos y altos existentes, escala las páginas originales proporcionalmente para que coincidan con los ajustes preestablecidos de destino (por ejemplo, A4 estándar) e introduce márgenes circundantes elegantes y consistentes, lo que hace que todo el archivo se vea increíblemente pulido.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Proporcionar PDF de varios tamaños",
        "description": "Cargue un documento PDF combinado que contenga tamaños de página desordenados y que no coincidan."
      },
      {
        "step": 2,
        "title": "Elija el objetivo preestablecido",
        "description": "Seleccione el tamaño uniforme de destino (por ejemplo, A4, Carta, A3) y alterne los modos de escala."
      },
      {
        "step": 3,
        "title": "Alinear y descargar",
        "description": "Haga clic en ejecutar para activar la alineación de la hoja 3D y descargar un PDF bellamente estandarizado."
      }
    ],
    "useCases": [
      {
        "title": "Propuestas de RFP corporativas",
        "description": "Estandarice los certificados de calificación escaneados y las hojas de oferta A4 antes de la impresión física.",
        "icon": "file-text"
      },
      {
        "title": "Integración del gráfico financiero",
        "description": "Escale amplios flujos de efectivo financieros A3 a páginas ordenadas A4, preservando los estándares de impresión.",
        "icon": "layout"
      },
      {
        "title": "Estandarización de márgenes de libros",
        "description": "Fuerza las páginas de libros escaneadas ligeramente variadas a una dimensión absolutamente uniforme para una lectura cómoda.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "¿Esto deformará mi contenido?",
        "answer": "Nunca. Admitimos tanto \"Contener\" (escala proporcional con barras blancas) como \"Cubrir\" (recorte centrado). El modo Contener predeterminado conserva las relaciones de aspecto, evitando la distorsión."
      },
      {
        "question": "¿Se podrán hacer clic en los formularios y anotaciones existentes?",
        "answer": "Sí. El algoritmo asigna los factores de escala a las matrices de coordenadas de anotación, los cuadros de enlace de escala, los límites de los signos y las entradas para alinearlos perfectamente después de cambiar el tamaño."
      },
      {
        "question": "¿Existe un límite en la cantidad de páginas que puedo cambiar de tamaño?",
        "answer": "No. Dado que todas las operaciones se ejecutan localmente en la zona de pruebas de su cliente utilizando JavaScript nativo, puede procesar archivos PDF extensos que contengan cientos de páginas en segundos."
      }
    ]
  },
  "handwriting-ink-contrast-booster": {
    "title": "Mejorar Contraste de Manuscritos",
    "metaDescription": "Mejore el contraste de la escritura a mano y la firma en imágenes escaneadas. Reduzca el ruido de fondo del papel y facilite la lectura de la tinta.",
    "keywords": [
      "resaltar escritura a mano",
      "blanquear papel escaneado",
      "contraste de firmas"
    ],
    "description": "<p>El potenciador de contraste de tinta para escritura a mano es un salvavidas para digitalizar acuerdos firmados y archivos de manuscritos históricos.</p>\n      <p>Los escaneos de documentos firmados a mano a menudo tienen un aspecto opaco debido al reflejo gris del cristal del escáner, el tinte amarillo del papel o la tinta descolorida. Reimprimir o fotocopiar estos archivos da como resultado firmas borrosas e ilegibles. Las herramientas de contraste tradicionales oscurecen todo el fondo, empeorando el diseño.</p>\n      <p>Esta herramienta utiliza **Ecualización de histograma adaptativo limitado por contraste (CLAHE) y separación de colores basada en tonos**. En un proceso Canvas local seguro, aísla los trazos de escritura a mano (tanto negros como azules) del pergamino del fondo, blanquea las arrugas de las sombras por completo e infunde tintas descoloridas con un contraste profundo y saturado, dejando sus documentos con un aspecto increíblemente nítido y limpio.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importar documento firmado a mano",
        "description": "Proporcione un PDF que contenga firmas descoloridas, diarios escritos a mano o bocetos."
      },
      {
        "step": 2,
        "title": "Configurar filtro de tinta",
        "description": "Seleccione el perfil de color que desea aislar (por ejemplo, tinta azul, tinta negra o ambas) y ajuste la nitidez."
      },
      {
        "step": 3,
        "title": "Afilar y descargar",
        "description": "Haga clic en ejecutar para trazar colores con un efecto de escáner de radar y descargar el PDF purificado."
      }
    ],
    "useCases": [
      {
        "title": "Reparación de Contratos Ejecutados",
        "description": "Reparar acuerdos mal escaneados, afinar firmas y blanquear el fondo del papel a A4, blanco puro.",
        "icon": "file-check"
      },
      {
        "title": "Archivo de manuscritos manuscritos",
        "description": "Digitalice diarios o diarios escritos, extrayendo trazos negros claros y borrando manchas relacionadas con la edad.",
        "icon": "book"
      },
      {
        "title": "Restauración del libro mayor histórico",
        "description": "Restaure detalles de tinta tenue en libros de contabilidad antiguos, rescatando valiosas coordenadas escritas a mano.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿En qué se diferencia esto de la conversión normal en escala de grises?",
        "answer": "La escala de grises convierte las sombras del papel en valores de grises. Nuestro algoritmo adaptativo separa la luminancia del fondo y aísla los \"espectros de tinta\" característicos, purificando el fondo a un blanco absoluto y dejando los bordes de los trazos nítidos."
      },
      {
        "question": "¿Perderé la textura del trazo de escritura a mano?",
        "answer": "No. El algoritmo CLAHE funciona a nivel de subpíxeles, preservando la presión natural del trazo del lápiz, la decoloración de la tinta y los grosores de línea dinámicos."
      },
      {
        "question": "¿Puedo conservar los sellos corporativos rojos?",
        "answer": "Sí. Al habilitar \"Preservación de tinta cromática\", el potenciador blanquea el fondo del papel y oscurece la escritura, mientras mantiene los colores brillantes de los sellos rojos y las firmas en tinta azul."
      }
    ]
  },
  "pdf-spine-bookbinder": {
    "title": "Calcular Ancho de Lomo",
    "metaDescription": "Calcule el ancho del lomo del libro a partir del recuento de páginas y el peso del papel. Genere una plantilla de portada imprimible con líneas de plegado del lomo.",
    "keywords": [
      "calcular lomo libro",
      "grosor de lomo",
      "plantilla de portada pdf"
    ],
    "description": "<p>PDF Spine Bookbinder es un salvavidas de preimpresión para diseñadores, autores de autoedición y equipos de licitaciones comerciales.</p>\n      <p>Al compilar catálogos de libros gruesos, propuestas de licitación o directorios anuales, la encuadernación perfecta (encuadernación con pegamento) requiere una cubierta con coordenadas precisas del lomo. Si el ancho del lomo se desvía incluso en 1 mm, la cubierta encuadernada se deformará, se desplazará o se arrugará. Calcular el número de páginas en función del peso del papel es complejo y propenso a errores.</p>\n      <p>Esta herramienta utiliza una <strong>biblioteca GSM de espesor de papel modelada físicamente</strong>. Simplemente ingrese el número de páginas de su PDF y seleccione el tipo de papel (por ejemplo, 80 GSM offset, 100 GSM satinado). El motor calcula el ancho del lomo hasta en micrómetros y compila un PDF de portada extra ancha listo para imprimir, completo con solapas frontales y posteriores estándar y pliegues precisos con marcas de pliegue.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Establecer páginas y tipo de stock",
        "description": "Ingrese el recuento de páginas del documento y seleccione las especificaciones del stock de papel de destino."
      },
      {
        "step": 2,
        "title": "Ingrese el texto del lomo",
        "description": "Ingrese títulos de libros, detalles del autor y personalice los fondos del lomo/cubierta."
      },
      {
        "step": 3,
        "title": "Vista previa y exportación 3D",
        "description": "Gira e inspecciona la portada de tu libro en una carpeta 3D interactiva. Exporte PDF vectorial de alta resolución."
      }
    ],
    "useCases": [
      {
        "title": "Propuestas de licitación gruesas",
        "description": "Diseñe portadas profesionales con alineaciones precisas del pliegue del lomo para ofertas tiernas y gruesas.",
        "icon": "layers"
      },
      {
        "title": "Encuadernación de tapa dura de tesis",
        "description": "Trace los anchos de diseño de lomo perfectos para tesis universitarias de maestría/doctorado.",
        "icon": "award"
      },
      {
        "title": "Portadas de novelas de autoedición",
        "description": "Calcule fácilmente el ancho del lomo del libro antes de enviar archivos a los servicios de publicación de impresión bajo demanda.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "¿Qué tan preciso es el cálculo del espesor del papel GSM?",
        "answer": "Altamente preciso. Nuestra biblioteca de física coincide con los promedios de la industria (por ejemplo, 70 GSM = 0,09 mm, 80 GSM = 0,10 mm, 150 GSM brillante = 0,125 mm). También incluimos una opción de \"Impresión a doble cara\" para reducir a la mitad los cálculos automáticamente."
      },
      {
        "question": "¿Las portadas exportadas están listas para impresión directa?",
        "answer": "Sí. Los archivos son archivos PDF con vectores perfectos que llevan marcas de registro estándar, barras de color y guías de lomo, totalmente compatibles con las prensas comerciales digitales y offset."
      },
      {
        "question": "¿Puedo cargar una imagen de fondo que abarque el lomo?",
        "answer": "Sí. Puede cargar diseños personalizados y nuestro compositor ajustará y alineará los gráficos en los pliegues del lomo automáticamente."
      }
    ]
  },
  "pdf-signature-anchor-helper": {
    "title": "Guía de Posición de Firma",
    "metaDescription": "Coloque guías de firma en páginas PDF usando coordenadas X/Y. Obtenga una vista previa de sus posiciones antes de guardar el documento actualizado.",
    "keywords": [
      "anclaje de firma",
      "marcador de firma pdf",
      "guiar firmante"
    ],
    "description": "<p>El PDF Signature Guide Injector garantiza flujos de trabajo de firma limpios y sin errores para acuerdos de varias páginas.</p>\n      <p>Al enviar acuerdos de confidencialidad de varias páginas, estados financieros o arrendamientos comerciales, los clientes a menudo pasan por alto casillas de firma críticas, lo que requiere interminables bucles de correo electrónico de ida y vuelta y transacciones comerciales retrasadas.</p>\n      <p>Nuestra herramienta utiliza <strong>mapeo semántico de expresiones regulares</strong>. Escanea el mapa de caracteres PDF para localizar términos como <code>Firma:</code>, <code>签字：</code>, <code>Testigo:</code> o <code>签署日期：</code>. Luego aprovecha <code>pdf-lib</code> para inyectar anotaciones de enlaces interactivos en PDF estándar. Cuando se abre en cualquier lector estándar, los clientes ven flechas parpadeantes con bordes de neón que los guían instantáneamente a las casillas correctas, lo que hace que la firma sea infalible.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Contrato comercial de importación",
        "description": "Cargue el contrato en PDF o NDA que necesita coordenadas de firma."
      },
      {"step":2,"title":"X / Y","description":"Haz clic en la vista previa real del PDF o introduce las coordenadas X e Y de la página seleccionada."},
      {"step":3,"title":"Procesar","description":"Procesa el archivo, revisa el resultado y descarga el PDF."},
    ],
    "useCases": [
      {
        "title": "Acuerdos NDA corporativos",
        "description": "Inyecte guías transparentes y parpadeantes junto a los bloques de letreros para evitar que los empleados incorporados pierdan cláusulas.",
        "icon": "file-text"
      },
      {
        "title": "Contratos de arrendamiento comercial",
        "description": "Guíe a varios cofirmantes a través de documentos inmobiliarios de varias páginas con pestañas de colores personalizados.",
        "icon": "users"
      },
      {
        "title": "Firmas de orden de compra de adquisiciones",
        "description": "Superponga punteros interactivos en facturas y órdenes de compra para acelerar los ciclos de aprobación contable.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "¿Estas guías aparecerán cuando imprima el contrato?",
        "answer": "No. Los anclajes se inyectan con el indicador estándar de PDF \"Imprimible\" establecido en falso. Se muestran bellamente en las pantallas de computadoras o tabletas, pero permanecen completamente invisibles cuando se imprimen."
      },
      {
        "question": "¿Pueden los clientes saltar fácilmente entre los campos de firma?",
        "answer": "Sí. Tejemos anclajes internos bidireccionales. Los clientes pueden hacer clic en el marcador \"Guía de firmas\" para saltar automáticamente al siguiente espacio de firma vacío al instante."
      },
      {
        "question": "¿Esto funciona en documentos con imágenes escaneadas?",
        "answer": "Sí. Además de buscar secuencias de texto, nuestro analizador de diseño espacial estima líneas de firma basándose en reglas horizontales y cuadros delimitadores en hojas escaneadas."
      }
    ]
  },
  "pdf-lossless-slicer": {
    "title": "Recorte de Planos sin Pérdidas",
    "metaDescription": "Recorta una región de un dibujo, mapa o gráfico PDF usando coordenadas precisas. Conserve el contenido vectorial en el PDF exportado.",
    "keywords": [
      "recortar planos pdf",
      "recorte vectorial pdf",
      "modificar mediabox"
    ],
    "description": "<p>PDF Lossless Drawing Slicer es una herramienta quirúrgica de alta precisión diseñada para arquitectos, ingenieros y cartógrafos.</p>\n      <p>Al extraer una sala de bombas o un núcleo de chip específico de un enorme plano de ingeniería CAD o de un mapa geográfico PDF, las capturas de pantalla tradicionales dan como resultado un texto borroso y pixelado. Las herramientas de recorte normales simplemente colocan una máscara sobre la hoja, lo que significa que el enorme archivo de 100 MB sigue siendo enorme y aún se puede extraer el contenido oculto.</p>\n      <p>Esta herramienta edita las matrices de página <code>/MediaBox</code>, <code>/CropBox</code> y <code>/BleedBox</code> en el nivel del árbol de objetos. Aísla físicamente los nodos vectoriales fuera de la región seleccionada, manteniendo el área de destino 100% vectorialmente perfecta (lo que permite una ampliación de zoom infinita) mientras elimina rutas e imágenes redundantes fuera de la pantalla para reducir el tamaño del archivo en un 95%.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importar plano grande",
        "description": "Cargue el CAD rico en vectores, el mapa GIS o el PDF del catálogo de alta resolución."
      },
      {"step":2,"title":"Rectángulo de recorte","description":"Introduce X, Y, anchura y altura; comprueba la página seleccionada en la vista previa."},
      {"step":3,"title":"Procesar","description":"Procesa el archivo, revisa el resultado y descarga el PDF."},
    ],
    "useCases": [
      {
        "title": "Aislamiento de planos CAD",
        "description": "Extraiga un detalle del \"sistema de refrigeración\" de un enorme plano de planta de 100 MB para compartirlo con los subcontratistas.",
        "icon": "crop"
      },
      {
        "title": "Recorte de mapas SIG",
        "description": "Extraiga un bloque sin pérdidas y sin vectores de un mapa de calles de la ciudad para una diapositiva de presentación sin pérdida de resolución.",
        "icon": "map"
      },
      {
        "title": "Seguimiento manual de ilustraciones",
        "description": "Aísle figuras de libros científicos sin pérdidas para incorporarlas en artículos académicos de alta calidad.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "¿En qué se diferencia esto del recorte estándar?",
        "answer": "El recorte estándar simplemente ajusta los límites visuales; los vectores ocultos permanecen en el archivo. Nuestro cortador recorta las rutas vectoriales superpuestas y purga las imágenes XObject fuera de los límites, lo que garantiza un aislamiento completo de los datos y una máxima compresión de archivos."
      },
      {
        "question": "¿Se podrán realizar búsquedas en las capas de texto?",
        "answer": "Sí. Cualquier carácter de texto que se encuentre dentro del límite cortado permanece completamente claro como vector, se puede buscar y seleccionar."
      },
      {
        "question": "¿Puedo exportar regiones cortadas a SVG?",
        "answer": "El resultado es un PDF vectorial estandarizado. Puede pasar el archivo resultante a nuestra herramienta de PDF a SVG para convertirlo a un formato de gráficos vectoriales escalable en la web."
      }
    ]
  },
  "pdf-scratchpad-canvas": {
    "title": "Lienzo de Notas Cuadriculado",
    "metaDescription": "Agregue márgenes de notas de cuadrícula, rayados o Cornell a páginas PDF. Cree espacio de escritura adicional para notas de estudio, cálculos y preparación de exámenes.",
    "keywords": [
      "margen para notas pdf",
      "papel cuadriculado pdf",
      "lienzo de escritura"
    ],
    "description": "<p>PDF Scratchpad Margin Extender es un compañero de estudio esencial diseñado para estudiantes, investigadores y candidatos a exámenes profesionales.</p>\n      <p>Al resolver exámenes de práctica, revisar diapositivas o leer libros de texto académicos en tabletas digitales, los márgenes de las páginas son increíblemente ajustados. Abrir una aplicación de notas separada te obliga a alternar pantallas constantemente, rompiendo el enfoque. Agregar hojas en blanco le impide ver el problema y su cálculo uno al lado del otro.</p>\n      <p>Esta herramienta reescribe las dimensiones de ancho o alto de la página en la estructura PDF de bajo nivel, expandiendo los márgenes de <code>/MediaBox</code> entre 200 y 250 puntos a la derecha o en la parte inferior. Luego, superpone líneas de cuadrícula limpias, líneas de cuadernos con reglas universitarias o diseños de Cornell en los nuevos márgenes, brindándole tableros de borrador adyacentes y dedicados junto a cada diapositiva o pregunta.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir diapositivas de la conferencia",
        "description": "Proporcione el libro de texto, las diapositivas o los trabajos de estudio en PDF."
      },
      {
        "step": 2,
        "title": "Elige el estilo de margen y cuadrícula",
        "description": "Elija la dirección de expansión del margen (por ejemplo, lado derecho para tabletas) y seleccione la plantilla de cuadrícula."
      },
      {
        "step": 3,
        "title": "Coser lienzo y descargar",
        "description": "Haga clic en ejecutar para generar páginas ampliadas con hermosas cuadrículas de borrador."
      }
    ],
    "useCases": [
      {
        "title": "Preparación para el examen STEM",
        "description": "Cose los márgenes de la cuadrícula junto a las preguntas de los exámenes de matemáticas y física, resolviendo derivaciones justo al lado de la pregunta.",
        "icon": "edit-3"
      },
      {
        "title": "Análisis de lectura del lenguaje",
        "description": "Agregue márgenes de cuaderno rayados junto a ensayos en idiomas extranjeros para análisis de vocabulario y traducción de párrafos.",
        "icon": "book"
      },
      {
        "title": "Auditoría de planos arquitectónicos",
        "description": "Agregue espacios de margen vacíos al costado de los planos para cálculos de ingeniería y comentarios de revisión de clientes.",
        "icon": "columns"
      }
    ],
    "faq": [
      {
        "question": "¿Esto aplastará mi texto PDF original?",
        "answer": "Para nada. El algoritmo expande la dimensión del papel hacia afuera. El contenido original conserva su diseño, fuentes y resolución; simplemente estiramos el espacio en blanco en los bordes y dibujamos cuadrículas en ellos."
      },
      {
        "question": "¿Pueden los bolígrafos estándar escribir en el bloc de notas?",
        "answer": "Sí. Las nuevas páginas PDF se compilan de forma nativa. Las aplicaciones populares para tomar notas en tabletas, como Goodnotes, Notability, Xodo y Acrobat, pueden escribir, resaltar y garabatear directamente en el nuevo espacio de la cuadrícula."
      },
      {
        "question": "¿Las líneas de la cuadrícula son oscuras y distraen?",
        "answer": "Seleccionamos tres colores sutiles y agradables a la vista (azul grisáceo suave, marrón cálido y verde brillante). Las líneas son finas y suaves y sirven como guías sin distraerte del contenido de la página original."
      }
    ]
  },
  "photo-tiling-prepress": {
    "title": "Imprimir Fotos de Identificación",
    "metaDescription": "Recorte y organice fotografías de identificación o pasaporte en papel fotográfico estándar. Agregue marcas de corte de impresión para ayudar a cortar la hoja terminada.",
    "keywords": [
      "imprimir fotos carnet",
      "papel fotográfico matriz",
      "guias de corte"
    ],
    "description": "<p>La herramienta Prepress Photo Tiling es un compilador de diseño rentable y de alta precisión creado para tarjetas de registro personales y estudios de fotografía.</p>\n      <p>La impresión de fotografías de pasaporte, de identificación o de permisos de conducir en casa a menudo genera dimensiones físicas incorrectas (a menudo impresas demasiado grandes o demasiado pequeñas), desperdicio de papel fotográfico y alineaciones desiguales. Ir a imprentas profesionales para realizar los diseños lleva mucho tiempo.</p>\n      <p>Nuestra herramienta integra un <strong>motor matricial de preimpresión de precisión</strong>. Acepta fotografías de retratos o escaneos de tarjetas de identificación, los recorta a dimensiones estándar (por ejemplo, especificaciones de pasaporte de 1\" o 2\"), calcula el número óptimo de mosaicos para papeles fotográficos estándar (por ejemplo, hojas de 5\" o 6\") e inyecta líneas de recorte nítidas de micropíxeles para facilitar el corte físico, generando un PDF imprimible perfecto.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importar foto de pasaporte",
        "description": "Cargue la instantánea de retrato de la cámara o las imágenes de tarjetas de identificación de doble cara."
      },
      {
        "step": 2,
        "title": "Configurar papel y diseño",
        "description": "Seleccione el tamaño del papel de impresión de destino (por ejemplo, 6\") y elija los diseños de cuadrícula (por ejemplo, 8 copias de fotografías de 1\")."
      },
      {
        "step": 3,
        "title": "Mosaico y exportación",
        "description": "Inspeccione mosaicos de fotografías en nuestra cuadrícula y exporte el PDF imprimible de alto DPI."
      }
    ],
    "useCases": [
      {
        "title": "Fotos de pasaporte de autoservicio",
        "description": "Organice sus retratos de pasaporte tomados con su dispositivo móvil en una sola cuadrícula de papel fotográfico de 6\" e imprima 8 copias por una fracción de los costos estándar de estudio.",
        "icon": "user"
      },
      {
        "title": "Copia de tarjeta de identificación a doble cara",
        "description": "Formatee cuidadosamente los escaneos del anverso y el reverso de los documentos de identidad nacionales en hojas estándar Carta/A4 para presentaciones oficiales.",
        "icon": "file-text"
      },
      {
        "title": "Hojas de miniaturas de fotografías por lotes",
        "description": "Coloca múltiples recuerdos familiares o diseña instantáneas en un papel cuadriculado para imprimir hojas de contactos en miniatura de manera eficiente.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "¿Las dimensiones impresas coincidirán con las especificaciones oficiales de 1\" o 2\"?",
        "answer": "Sí. El motor de cuadrícula mide utilizando puntos PDF estándar (72 pt = 1 pulgada), renderizando fotos de 1\" exactamente a 25x35 mm y fotos de 2\" a 35x49 mm. Asegúrese de imprimir en \"Tamaño real / Escala 100%\" en la configuración de su impresora."
      },
      {
        "question": "¿Puedo combinar fotografías de 1\" y 2\" en una sola hoja?",
        "answer": "Sí. Proporcionamos ajustes preestablecidos de diseño híbrido seleccionados (por ejemplo, \"4 copias de 1\" + 4 copias de 2\"), lo que le permite maximizar el espacio en papel fotográfico."
      },
      {
        "question": "¿La plantilla incluye sangrados en los bordes?",
        "answer": "Sí. Los diseños de preimpresión reservan un margen seguro de impresión estándar de 4 mm en los bordes del papel, lo que evita que los rodillos físicos de la impresora recorten las fotografías."
      }
    ]
  },
  "psd-to-pdf": {
    "title": "PSD a PDF",
    "metaDescription": "Convierte archivos de Adobe Photoshop (PSD) al formato PDF. Admite múltiples archivos y conserva la calidad de la imagen.",
    "keywords": [
      "psd a pdf",
      "convertir psd",
      "photoshop a pdf",
      "conversor psd",
      "adobe psd a pdf"
    ],
    "description": "\n      <p>PSD a PDF convierte archivos de Adobe Photoshop (PSD) en documentos PDF. Esta herramienta le permite visualizar y compartir diseños PSD sin necesidad de tener instalado Photoshop.</p>\n      <p>Puede convertir múltiples archivos PSD a la vez y combinarlos en un único documento PDF. La herramienta procesa cada archivo PSD renderizando las capas visibles en páginas PDF de alta calidad.</p>\n      <p>Toda la conversión se realiza localmente en su navegador, garantizando que sus diseños permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivos PSD",
        "description": "Arrastre y suelte sus archivos PSD o PSB, o haga clic para seleccionarlos desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Organizar el orden",
        "description": "Arrastre y suelte las miniaturas de los archivos para ordenarlos como desee."
      },
      {
        "step": 3,
        "title": "Convertir y descargar",
        "description": "Haga clic en Convertir para renderizar los PSD y descargar su documento PDF."
      }
    ],
    "useCases": [
      {
        "title": "Compartir diseños",
        "description": "Comparta diseños de Photoshop con clientes o colegas que no tengan instalado Photoshop.",
        "icon": "share-2"
      },
      {
        "title": "Creación de portafolios",
        "description": "Compile sus trabajos de diseño en un portafolio profesional en PDF.",
        "icon": "layout"
      },
      {
        "title": "Preparación para impresión",
        "description": "Convierta diseños a PDF listos para fines de impresión.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Necesito tener instalado Photoshop?",
        "answer": "No, esta herramienta funciona completamente en su navegador sin requerir Adobe Photoshop."
      },
      {
        "question": "¿Se conservan las capas?",
        "answer": "La herramienta renderiza el estado visible del PSD (imagen compuesta). Las capas individuales se acoplan en el PDF."
      },
      {
        "question": "¿Cuál es el tamaño máximo de archivo?",
        "answer": "Puede subir archivos de hasta 100 MB cada uno. Los archivos PSD grandes pueden tardar un momento en procesarse."
      }
    ]
  },
  "word-to-pdf": {
    "title": "Word a PDF",
    "metaDescription": "Convierte documentos de Word (DOCX) a PDF. Preserva el formato y la distribución en los documentos convertidos.",
    "keywords": [
      "word a pdf",
      "docx a pdf",
      "convertir word",
      "conversor de word",
      "microsoft word a pdf"
    ],
    "description": "\n      <p>Word a PDF convierte documentos de Microsoft Word al formato PDF mientras preserva el formato original, la distribución de la página y la estructura del contenido.</p>\n      <p>Suba sus archivos DOCX y obtenga un PDF de alta calidad ideal para compartir, imprimir o archivar. La conversión mantiene el formato del texto, los estilos de párrafo y la estructura básica del documento.</p>\n      <p>Toda la conversión se realiza de forma local en su navegador, garantizando la privacidad y seguridad de sus documentos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir documento de Word",
        "description": "Arrastre y suelte su archivo .docx o haga clic para seleccionarlo desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Esperar el procesamiento",
        "description": "La herramienta cargará el documento y lo preparará para la conversión."
      },
      {
        "step": 3,
        "title": "Descargar PDF",
        "description": "Haga clic en Descargar para guardar su documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Compartir documentos",
        "description": "Convierta documentos de Word a PDF para compartirlos y visualizarlos de forma universal.",
        "icon": "share-2"
      },
      {
        "title": "Preparación para impresión",
        "description": "Cree archivos PDF listos para imprimir a partir de documentos de Word.",
        "icon": "printer"
      },
      {
        "title": "Archivo de documentos",
        "description": "Archive documentos de Word en un formato PDF estable para su almacenamiento a largo plazo.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Se admite el formato .doc?",
        "answer": "Actualmente solo se admite el formato .docx. Convierta primero sus archivos .doc a .docx usando Microsoft Word o LibreOffice."
      },
      {
        "question": "¿Se conservan las imágenes?",
        "answer": "Se conservan el contenido de texto y el formato básico. Los diseños complejos con muchas imágenes pueden presentar una renderización simplificada."
      },
      {
        "question": "¿Es segura la conversión?",
        "answer": "Sí, todo el procesamiento se realiza en su navegador. Sus documentos nunca salen de su dispositivo."
      }
    ]
  },
  "excel-to-pdf": {
    "title": "Excel a PDF",
    "metaDescription": "Convierte hojas de cálculo de Excel (XLSX) a PDF. Preserva las tablas y los datos en los documentos convertidos.",
    "keywords": [
      "excel a pdf",
      "xlsx a pdf",
      "convertir excel",
      "hoja de calculo a pdf",
      "microsoft excel a pdf"
    ],
    "description": "\n      <p>Excel a PDF convierte hojas de cálculo de Microsoft Excel al formato PDF preservando la estructura de las tablas y la organización de los datos.</p>\n      <p>Suba sus archivos XLSX y obtenga un documento PDF limpio con tablas correctamente formateadas. Cada hoja de su libro de trabajo se convierte en una sección separada del PDF.</p>\n      <p>Toda la conversión se realiza de forma local en su navegador, garantizando que sus datos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo de Excel",
        "description": "Arrastre y suelte su archivo .xlsx o haga clic para seleccionarlo desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Esperar el procesamiento",
        "description": "La herramienta cargará la hoja de cálculo y convertirá todas las hojas."
      },
      {
        "step": 3,
        "title": "Descargar PDF",
        "description": "Haga clic en Descargar para guardar su documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Compartir informes",
        "description": "Convierta informes de Excel a PDF para distribuirlos a las partes interesadas.",
        "icon": "file-text"
      },
      {
        "title": "Archivo de datos",
        "description": "Archive datos de hojas de cálculo en un formato PDF estable.",
        "icon": "archive"
      },
      {
        "title": "Preparación para impresión",
        "description": "Cree archivos PDF listos para imprimir a partir de hojas de cálculo de Excel.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Se admiten múltiples hojas?",
        "answer": "Sí, todas las hojas de trabajo del libro de Excel se convierten e incluyen en el PDF."
      },
      {
        "question": "¿Se admite el formato .xls?",
        "answer": "Actualmente solo se admite el formato .xlsx. Guarde primero los archivos .xls como .xlsx."
      },
      {
        "question": "¿Se conservan las fórmulas?",
        "answer": "El PDF muestra los valores calculados. Las fórmulas no son ejecutables dentro del formato PDF."
      }
    ]
  },
  "pptx-to-pdf": {
    "title": "PowerPoint a PDF",
    "metaDescription": "Convierte presentaciones de PowerPoint (PPTX) a PDF. Preserva las diapositivas y el contenido para compartirlos fácilmente.",
    "keywords": [
      "powerpoint a pdf",
      "pptx a pdf",
      "convertir pptx",
      "presentacion a pdf",
      "diapositivas a pdf"
    ],
    "description": "\n      <p>PowerPoint a PDF convierte presentaciones de Microsoft PowerPoint al formato PDF, preservando el contenido de las diapositivas y el texto para compartirlos y visualizarlos fácilmente.</p>\n      <p>Cada diapositiva se convierte en una página del PDF, manteniendo el flujo de la presentación. Es ideal para compartir presentaciones con personas que no tienen instalado PowerPoint.</p>\n      <p>Toda la conversión se realiza de forma local en su navegador, asegurando la privacidad y seguridad de sus presentaciones.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo de PowerPoint",
        "description": "Arrastre y suelte su archivo .pptx o haga clic para seleccionarlo desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Esperar el procesamiento",
        "description": "La herramienta extraerá el contenido de las diapositivas y creará el PDF."
      },
      {
        "step": 3,
        "title": "Descargar PDF",
        "description": "Haga clic en Descargar para guardar su documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Compartir presentaciones",
        "description": "Comparta presentaciones con cualquier persona sin necesidad de PowerPoint.",
        "icon": "share-2"
      },
      {
        "title": "Creación de folletos",
        "description": "Cree folletos en PDF a partir de las diapositivas de su presentación.",
        "icon": "file-text"
      },
      {
        "title": "Archivar presentaciones",
        "description": "Archive presentaciones en un formato PDF estable.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Se conservan las animaciones?",
        "answer": "El PDF es un formato estático, por lo que las animaciones y transiciones no se conservan. Cada diapositiva se convierte en una página estática."
      },
      {
        "question": "¿Se admite el formato .ppt?",
        "answer": "Actualmente solo se admite el formato .pptx. Convierta primero sus archivos .ppt a .pptx."
      },
      {
        "question": "¿Se incluyen las notas del orador?",
        "answer": "Actualmente, las notas del orador no se incluyen en el documento PDF de salida."
      }
    ]
  },
  "xps-to-pdf": {
    "title": "XPS a PDF",
    "metaDescription": "Convierte documentos XPS al formato PDF. Conversión de alta fidelidad que preserva el diseño y los gráficos.",
    "keywords": [
      "xps a pdf",
      "convertir xps",
      "conversor xps",
      "microsoft xps a pdf",
      "oxps a pdf"
    ],
    "description": "\n      <p>XPS a PDF convierte documentos XPS (XML Paper Specification) de Microsoft al formato PDF, preservando el diseño, texto y gráficos vectoriales originales.</p>\n      <p>XPS es un formato de documento fijo similar al PDF. Esta herramienta proporciona una conversión de alta fidelidad mediante un procesamiento nativo de XPS, asegurando una reproducción exacta de sus documentos.</p>\n      <p>Toda la conversión se realiza localmente en su navegador, garantizando que sus documentos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo XPS",
        "description": "Arrastre y suelte su archivo .xps o haga clic para seleccionarlo desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Esperar el procesamiento",
        "description": "La herramienta analizará y convertirá el documento XPS."
      },
      {
        "step": 3,
        "title": "Descargar PDF",
        "description": "Haga clic en Descargar para guardar su documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Conversión de formato",
        "description": "Convierta documentos XPS al formato PDF, que cuenta con una compatibilidad mucho más amplia.",
        "icon": "file"
      },
      {
        "title": "Compartir documentos",
        "description": "Comparta documentos XPS con usuarios que no disponen de visores de XPS.",
        "icon": "share-2"
      },
      {
        "title": "Migración de archivos",
        "description": "Migre archivos históricos XPS al formato PDF para una mejor compatibilidad a futuro.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es el formato XPS?",
        "answer": "XPS (XML Paper Specification) es el formato de documento fijo de Microsoft, similar al PDF. Se utiliza comúnmente en el sistema de impresión de Windows."
      },
      {
        "question": "¿La conversión es sin pérdidas?",
        "answer": "Sí, la conversión preserva el texto, los gráficos y el diseño con alta fidelidad."
      },
      {
        "question": "¿Se admiten archivos XPS de varias páginas?",
        "answer": "Sí, todas las páginas del documento XPS original se convierten e integran en el archivo PDF."
      }
    ]
  },
  "rtf-to-pdf": {
    "title": "RTF a PDF",
    "metaDescription": "Convierte archivos RTF (formato de texto enriquecido) a PDF. Preserva el formato del texto en sus documentos.",
    "keywords": [
      "rtf a pdf",
      "convertir rtf",
      "texto enriquecido a pdf",
      "conversor rtf"
    ],
    "description": "\n      <p>RTF a PDF convierte archivos de Formato de Texto Enriquecido (RTF) en documentos PDF. RTF es un formato de texto ampliamente compatible que incluye formato básico como fuentes, colores y estilos.</p>\n      <p>Suba sus archivos RTF y obtenga un documento PDF limpio mientras conserva el contenido del texto y su formato esencial. Perfecto para actualizar documentos antiguos a un formato PDF moderno.</p>\n      <p>Toda la conversión se realiza localmente en su navegador, garantizando la privacidad y seguridad de sus documentos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo RTF",
        "description": "Arrastre y suelte su archivo .rtf o haga clic para seleccionarlo desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Esperar el procesamiento",
        "description": "La herramienta analizará y convertirá el contenido RTF."
      },
      {
        "step": 3,
        "title": "Descargar PDF",
        "description": "Haga clic en Descargar para guardar su documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Conversión de documentos heredados",
        "description": "Convierta documentos RTF antiguos al formato PDF moderno.",
        "icon": "history"
      },
      {
        "title": "Compartir documentos",
        "description": "Comparta documentos RTF en un formato PDF visible universalmente.",
        "icon": "share-2"
      },
      {
        "title": "Archivar documentos",
        "description": "Archive archivos RTF en un formato PDF estable para almacenamiento a largo plazo.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "¿Qué formato se conserva?",
        "answer": "Se convierte el formato de texto básico, incluyendo fuentes, párrafos y estilos. Las características complejas de RTF podrían verse simplificadas."
      },
      {
        "question": "¿Puedo convertir múltiples archivos RTF?",
        "answer": "Actualmente se convierte un archivo a la vez. Utilice la herramienta Fusionar PDF para combinar múltiples archivos convertidos."
      },
      {
        "question": "¿Se admiten imágenes incrustadas?",
        "answer": "El foco principal es el contenido de texto. Los objetos incrustados podrían no renderizarse."
      }
    ]
  },
  "epub-to-pdf": {
    "title": "EPUB a PDF",
    "metaDescription": "Convierte libros electrónicos EPUB a PDF. Preserva el formato, las imágenes y la estructura de capítulos.",
    "keywords": [
      "epub a pdf",
      "convertir epub",
      "libro electronico a pdf",
      "conversor epub"
    ],
    "description": "\n      <p>EPUB a PDF convierte archivos de libros electrónicos en documentos PDF de alta calidad. EPUB es el formato de libro electrónico más popular, utilizado por la mayoría de los lectores digitales y bibliotecas virtuales.</p>\n      <p>Esta herramienta conserva el formato del texto, las imágenes y la estructura de capítulos de sus libros electrónicos. Es ideal para imprimir, archivar o compartir e-books en un formato universalmente legible.</p>\n      <p>Toda la conversión se realiza de forma local en su navegador utilizando tecnología de renderizado avanzada, garantizando la privacidad de sus libros y un procesamiento rápido.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo EPUB",
        "description": "Arrastre y suelte su archivo .epub o haga clic para seleccionarlo desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Esperar la conversión",
        "description": "La herramienta renderizará y convertirá todas las páginas de su libro electrónico."
      },
      {
        "step": 3,
        "title": "Descargar PDF",
        "description": "Haga clic en Descargar para guardar su documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Imprimir libros electrónicos",
        "description": "Convierta libros electrónicos a PDF para realizar una impresión física.",
        "icon": "printer"
      },
      {
        "title": "Archivar libros",
        "description": "Almacene e-books en un formato PDF estable a largo plazo.",
        "icon": "archive"
      },
      {
        "title": "Compartir documentos",
        "description": "Comparta libros electrónicos con cualquier persona, incluso si no dispone de un lector de e-books.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "¿Se conserva el formato?",
        "answer": "¡Sí! Esta herramienta utiliza renderizado nativo de EPUB, preservando el formato de texto, imágenes y diseño con alta fidelidad."
      },
      {
        "question": "¿Se admiten archivos EPUB protegidos por DRM?",
        "answer": "No, los libros electrónicos protegidos por DRM no se pueden convertir. Solo se admiten archivos EPUB libres de DRM."
      },
      {
        "question": "¿Cómo se determina el tamaño de la página?",
        "answer": "El contenido de EPUB se renderiza al tamaño de página estándar A4 para una lectura óptima."
      }
    ]
  },
  "mobi-to-pdf": {
    "title": "MOBI a PDF",
    "metaDescription": "Convierte libros electrónicos MOBI a PDF. Soporte para el formato Kindle con renderizado de alta calidad.",
    "keywords": [
      "mobi a pdf",
      "convertir mobi",
      "kindle a pdf",
      "azw a pdf",
      "conversor mobi"
    ],
    "description": "\n      <p>MOBI a PDF convierte archivos de libros electrónicos Kindle de Amazon en documentos PDF de alta calidad. El formato MOBI (incluyendo AZW y AZW3) es el formato patentado de Amazon utilizado en dispositivos Kindle.</p>\n      <p>Esta herramienta conserva el formato del texto, las imágenes y la estructura de sus libros Kindle. Es ideal para imprimir, archivar o leer en dispositivos que no son compatibles con el formato MOBI.</p>\n      <p>Toda la conversión se realiza de forma local en su navegador utilizando tecnología de renderizado avanzada, garantizando la privacidad de sus libros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo MOBI",
        "description": "Arrastre y suelte su archivo .mobi, .azw o .azw3, o haga clic para seleccionarlo desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Esperar la conversión",
        "description": "La herramienta renderizará y convertirá todas las páginas de su libro electrónico."
      },
      {
        "step": 3,
        "title": "Descargar PDF",
        "description": "Haga clic en Descargar para guardar su documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Imprimir libros Kindle",
        "description": "Convierta libros electrónicos Kindle a PDF para impresión física.",
        "icon": "printer"
      },
      {
        "title": "Archivar libros",
        "description": "Guarde libros Kindle en el formato universal PDF.",
        "icon": "archive"
      },
      {
        "title": "Lectura multiplataforma",
        "description": "Lea libros de Kindle en dispositivos que solo admiten el formato PDF.",
        "icon": "tablet-smartphone"
      }
    ],
    "faq": [
      {
        "question": "¿Qué formatos MOBI son compatibles?",
        "answer": "Esta herramienta admite archivos .mobi, .azw y .azw3 (versiones sin DRM)."
      },
      {
        "question": "¿Se admiten libros Kindle protegidos por DRM?",
        "answer": "No, los libros electrónicos protegidos por DRM no se pueden convertir. Solo se admiten archivos libres de DRM."
      },
      {
        "question": "¿Se conservará el formato de mi documento?",
        "answer": "¡Sí! La herramienta utiliza un renderizado nativo de MOBI para conservar el texto, las imágenes y el diseño original."
      }
    ]
  },
  "pdf-to-svg": {
    "title": "PDF a SVG",
    "metaDescription": "Convierte páginas de PDF a gráficos vectoriales SVG. Escalabilidad perfecta a cualquier tamaño con exportación de páginas individuales.",
    "keywords": [
      "pdf a svg",
      "convertir pdf a svg",
      "graficos vectoriales",
      "pdf escalable",
      "conversor svg"
    ],
    "description": "\n      <p>PDF a SVG convierte cada página de su documento PDF en un gráfico vectorial escalable (SVG). El formato SVG es un formato vectorial que mantiene una calidad perfecta en cualquier nivel de zoom o tamaño de impresión.</p>\n      <p>A diferencia de los formatos rasterizados (JPG, PNG), los gráficos SVG nunca se pixelan al escalarse. Esto los hace ideales para logotipos, diagramas, dibujos técnicos y cualquier contenido que necesite mostrarse a diferentes tamaños.</p>\n      <p>Previsualice cada página convertida y descárguelas de manera individual o todas juntas en un archivo ZIP. Todo el procesamiento se realiza localmente en su navegador, garantizando una privacidad absoluta para sus documentos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Arrastre y suelte su archivo PDF o haga clic para buscar y seleccionar."
      },
      {
        "step": 2,
        "title": "Configurar opciones",
        "description": "Establezca la resolución de calidad y, opcionalmente, especifique los rangos de páginas."
      },
      {
        "step": 3,
        "title": "Previsualizar y convertir",
        "description": "Haga clic en Convertir para procesar. Previsualice cada página haciendo clic en las miniaturas."
      },
      {
        "step": 4,
        "title": "Descargar",
        "description": "Descargue archivos SVG individuales o todas las páginas en un archivo comprimido ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Logotipos y gráficos",
        "description": "Extraiga logotipos y gráficos vectoriales de archivos PDF para su uso en software de diseño.",
        "icon": "pen-tool"
      },
      {
        "title": "Diagramas técnicos",
        "description": "Convierta planos y diagramas técnicos al formato vectorial escalable SVG.",
        "icon": "ruler"
      },
      {
        "title": "Desarrollo web",
        "description": "Cree archivos SVG optimizados para la web a partir del contenido de un PDF para sitios web adaptables.",
        "icon": "globe"
      },
      {
        "title": "Impresión a cualquier tamaño",
        "description": "Genere gráficos vectoriales que se imprimen perfectamente a cualquier escala sin perder definición.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es el formato SVG?",
        "answer": "SVG (Scalable Vector Graphics) es un formato de imagen vectorial que puede escalarse a cualquier tamaño sin perder calidad. Se utiliza ampliamente para logotipos, iconos y gráficos web."
      },
      {
        "question": "¿El archivo SVG será realmente vectorial?",
        "answer": "El SVG contendrá una renderización de alta resolución de la página del PDF. Para los PDF con contenido vectorial original, obtendrá una salida vectorizada nítida en cualquier escala."
      },
      {
        "question": "¿Puedo previsualizar antes de descargar?",
        "answer": "¡Sí! Haga clic en cualquier miniatura para ver una vista previa a tamaño completo del SVG. Puede descargar páginas individuales o todas a la vez."
      },
      {
        "question": "¿Qué resolución debo elegir?",
        "answer": "Una resolución más alta (216 o 288 DPI) produce archivos SVG más detallados pero de mayor tamaño. Use configuraciones más bajas para un procesamiento más rápido y archivos más ligeros."
      }
    ]
  },
  "extract-images": {
    "title": "Extraer imágenes de PDF",
    "metaDescription": "Extrae todas las imágenes incrustadas de archivos PDF. Descárgalas individualmente o en un archivo ZIP. Filtra imágenes pequeñas automáticamente.",
    "keywords": [
      "extraer imagenes de pdf",
      "extraccion de imagenes pdf",
      "obtener imagenes de pdf",
      "descargar imagenes pdf",
      "pdf a imagenes"
    ],
    "description": "\n      <p>Extraer imágenes de PDF recupera todas las imágenes integradas en sus documentos PDF. Descargue imágenes de alta calidad de forma individual o en un cómodo archivo ZIP.</p>\n      <p>La herramienta filtra automáticamente imágenes pequeñas como iconos y elementos decorativos basándose en umbrales de tamaño personalizables. Procese múltiples PDF a la vez para una extracción por lotes eficiente.</p>\n      <p>Toda la extracción ocurre en su navegador, garantizando que sus documentos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir sus archivos PDF",
        "description": "Arrastre y suelte uno o más archivos PDF, o haga clic para seleccionarlos desde su dispositivo."
      },
      {
        "step": 2,
        "title": "Configurar opciones de filtrado",
        "description": "Ajuste el ancho, alto y tamaño mínimo de archivo para filtrar las imágenes pequeñas no deseadas."
      },
      {
        "step": 3,
        "title": "Extraer imágenes",
        "description": "Haga clic en Extraer para encontrar todas las imágenes incrustadas en sus PDF."
      },
      {
        "step": 4,
        "title": "Descargar",
        "description": "Descargue imágenes individuales o todas ellas en un archivo comprimido ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Recuperación de fotos",
        "description": "Extraiga fotos e imágenes incrustadas en documentos PDF para su reutilización o archivado.",
        "icon": "image"
      },
      {
        "title": "Recopilación de recursos gráficos",
        "description": "Reúna todos los gráficos e imágenes de informes, presentaciones o folletos en PDF.",
        "icon": "folder"
      },
      {
        "title": "Reutilización de contenido",
        "description": "Extraiga imágenes de PDF para utilizarlas en otros documentos, sitios web o presentaciones.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "¿En qué formatos se extraen las imágenes?",
        "answer": "Las imágenes se extraen en su formato nativo (JPEG, PNG, etc.) cuando es posible, o se convierten a PNG si se trata de datos de imagen sin procesar."
      },
      {
        "question": "¿Por qué faltan algunas imágenes?",
        "answer": "Las imágenes pequeñas por debajo del umbral de tamaño se filtran automáticamente. Ajuste la configuración del filtro para extraer imágenes más pequeñas."
      },
      {
        "question": "¿Puedo extraer imágenes de PDF escaneados?",
        "answer": "Los PDF escaneados suelen contener el escaneo como una sola imagen grande por página. Utilice la herramienta PDF a Imagen en su lugar para la conversión página por página."
      }
    ]
  },
  "find-and-redact": {
    "title": "Buscar y censurar",
    "metaDescription": "Busca y censura texto en todas las páginas de un PDF. Realice censura por lotes de información confidencial como números de cuenta, nombres y más.",
    "keywords": [
      "censurar pdf",
      "buscar y censurar",
      "censurar por lotes",
      "eliminar texto de pdf",
      "ofuscar pdf",
      "ocultar datos confidenciales"
    ],
    "description": "\n      <p>Buscar y censurar le permite buscar texto, números o patrones específicos en todas las páginas de su PDF y ofuscar todas las coincidencias a la vez. Es perfecto para eliminar información confidencial como números de cuenta, nombres, direcciones o cualquier dato confidencial.</p>\n      <p>Previsualice todas las coincidencias antes de aplicar la censura y elija selectivamente qué elementos desea ocultar. Admite búsqueda con distinción de mayúsculas y minúsculas, coincidencia de palabras completas y expresiones regulares para patrones de búsqueda avanzados.</p>\n      <p>Todo el procesamiento se realiza en su navegador, garantizando que sus documentos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Arrastre y suelte su archivo PDF o haga clic para seleccionarlo."
      },
      {
        "step": 2,
        "title": "Buscar texto",
        "description": "Introduzca el texto, número o patrón de expresión regular que desea buscar y censurar."
      },
      {
        "step": 3,
        "title": "Revisar y seleccionar",
        "description": "Previsualice todas las coincidencias encontradas y seleccione cuáles desea censurar."
      },
      {
        "step": 4,
        "title": "Aplicar censura",
        "description": "Personalice la apariencia del bloque de censura y aplíquelo a las coincidencias seleccionadas."
      }
    ],
    "useCases": [
      {
        "title": "Cumplimiento de privacidad",
        "description": "Censure información personal para cumplir con normativas como RGPD, HIPAA u otras regulaciones.",
        "icon": "shield"
      },
      {
        "title": "Documentos legales",
        "description": "Elimine datos confidenciales de documentos legales antes de compartirlos públicamente.",
        "icon": "scale"
      },
      {
        "title": "Registros financieros",
        "description": "Oculte números de cuenta, números de seguridad social o datos financieros en extractos bancarios.",
        "icon": "credit-card"
      }
    ],
    "faq": [
      {
        "question": "¿La censura es permanente?",
        "answer": "Sí, la censura elimina de forma permanente el texto subyacente. El contenido original no se puede recuperar. Mantenga siempre una copia de seguridad del archivo original."
      },
      {
        "question": "¿Puedo censurar imágenes o texto escaneado?",
        "answer": "Esta herramienta funciona con archivos PDF basados en texto digital. Para documentos escaneados, necesitará utilizar la censura manual basada en áreas."
      },
      {
        "question": "¿Puedo personalizar la apariencia de la censura?",
        "answer": "Sí, puede establecer el color de la censura (usualmente negro), añadir bordes y, opcionalmente, incluir un texto de reemplazo como \"[CENSURADO]\"."
      },
      {
        "question": "¿Cómo funciona la búsqueda por expresiones regulares (regex)?",
        "answer": "Active la opción \"Usar expresión regular\" para buscar utilizando patrones de regex. Por ejemplo, \\d{4}-\\d{4}-\\d{4}-\\d{4} para encontrar números de tarjetas de crédito."
      }
    ]
  },
  "pdf-to-docx": {
    "title": "PDF a Word",
    "metaDescription": "Convierte PDF a documentos de Word (DOCX) editables. Preserva el formato y el diseño original.",
    "keywords": [
      "pdf a word",
      "convertir pdf a docx",
      "pdf a doc",
      "pdf editable",
      "conversor de pdf a word"
    ],
    "description": "\n      <p>PDF a Word convierte sus documentos PDF en archivos editables de Microsoft Word (DOCX). La herramienta preserva al máximo la distribución, el formato, las imágenes y el flujo de texto originales.</p>\n      <p>Edite fácilmente el contenido de sus PDF en Word sin tener que volver a escribir nada. Perfecto para contratos, informes y currículums.</p>\n      <p>Toda la conversión se realiza localmente en su navegador mediante tecnología WebAssembly, garantizando que sus documentos nunca salgan de su dispositivo.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Arrastre y suelte su archivo PDF o haga clic para seleccionarlo."
      },
      {
        "step": 2,
        "title": "Convertir",
        "description": "Espere a que se complete el proceso de conversión de su documento."
      },
      {
        "step": 3,
        "title": "Descargar documento de Word",
        "description": "Descargue su archivo DOCX completamente editable."
      }
    ],
    "useCases": [
      {
        "title": "Editar contratos",
        "description": "Convierta contratos PDF a Word para realizar modificaciones y revisiones de texto.",
        "icon": "file-text"
      },
      {
        "title": "Actualización de currículum",
        "description": "Actualice currículums antiguos en PDF convirtiéndolos a Word para cambiar datos rápidamente.",
        "icon": "user"
      },
      {
        "title": "Reutilización de contenido",
        "description": "Extraiga contenido e información de informes en PDF para utilizarlos en otros documentos.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "¿Se preserva el formato?",
        "answer": "Sí, la herramienta tiene como objetivo conservar el diseño, las fuentes y las imágenes de la forma más fiel posible al documento original."
      },
      {
        "question": "¿Puedo convertir PDF escaneados?",
        "answer": "Los PDF escaneados se convertirán como imágenes dentro de Word a menos que aplique un proceso de OCR (reconocimiento óptico de caracteres) primero."
      },
      {
        "question": "¿Es compatible con programas de oficina?",
        "answer": "Sí, el archivo de salida es un documento estándar .docx compatible con Microsoft Word, WPS Office, Google Docs y LibreOffice."
      }
    ]
  },
  "pdf-to-markdown": {
    "title": "PDF a Markdown",
    "metaDescription": "Convierte PDF al formato Markdown. Extrae texto y preserva la estructura como encabezados y listas.",
    "keywords": [
      "pdf a markdown",
      "convertir pdf a md",
      "extraccion de texto pdf",
      "conversor markdown",
      "pdf a texto"
    ],
    "description": "\n      <p>PDF a Markdown convierte sus documentos PDF en archivos Markdown limpios y bien estructurados. La herramienta extrae el contenido de texto de manera inteligente e intenta conservar elementos de formato como encabezados, listas y párrafos.</p>\n      <p>Es perfecto para convertir documentos PDF a formatos editables destinados a documentación, toma de notas o sistemas de gestión de contenido (CMS) que admiten Markdown.</p>\n      <p>Toda la conversión se realiza localmente en su navegador, garantizando que sus documentos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Arrastre y suelte su archivo PDF o haga clic para seleccionarlo."
      },
      {
        "step": 2,
        "title": "Configurar opciones",
        "description": "Establezca el rango de páginas, elija si desea incluir números de página y ajuste la configuración de saltos de línea."
      },
      {
        "step": 3,
        "title": "Convertir y descargar",
        "description": "Haga clic en Convertir para generar su archivo Markdown y descargarlo."
      }
    ],
    "useCases": [
      {
        "title": "Documentación",
        "description": "Convierta manuales y guías en PDF a Markdown para integrarlos en documentación con control de versiones.",
        "icon": "file-text"
      },
      {
        "title": "Toma de notas",
        "description": "Extraiga contenido de libros y artículos en PDF para incorporarlo a su sistema personal de toma de notas.",
        "icon": "edit-3"
      },
      {
        "title": "Migración de contenido",
        "description": "Migre contenidos de documentos PDF a plataformas de CMS que admitan Markdown.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "¿Se conserva el formato?",
        "answer": "La herramienta intenta detectar los encabezados basándose en el tamaño de fuente, así como las listas numeradas o con viñetas. Las distribuciones complejas pueden requerir ajustes manuales."
      },
      {
        "question": "¿Puedo convertir páginas específicas?",
        "answer": "Sí, puede especificar un rango de páginas como \"1-3, 5, 7\" para convertir únicamente dichas páginas."
      },
      {
        "question": "¿Funciona con PDF escaneados?",
        "answer": "Los PDF escaneados contienen imágenes de páginas en lugar de texto digital. Utilice primero nuestra herramienta OCR para extraer el texto antes de convertir a Markdown."
      }
    ]
  },
  "pdf-booklet": {
    "title": "Creador de folletos PDF",
    "metaDescription": "Crea diseños de folletos en PDF para imprimir. Organiza las páginas para encuadernación de tipo revistilla (saddle-stitch) con múltiples opciones de cuadrícula.",
    "keywords": [
      "folleto pdf",
      "creador de folletos",
      "imprimir folleto",
      "encuadernacion grapada",
      "imposicion de paginas"
    ],
    "description": "\n      <p>Creador de folletos PDF organiza las páginas de su documento PDF en diseños de folletos listos para impresión y plegado. Es ideal para crear folletos publicitarios, fanzines y publicaciones con encuadernación grapada o plegada.</p>\n      <p>Elija entre varios modos de cuadrícula (1x2, 2x2, 2x4, 4x4), tamaños de papel y opciones de orientación. La herramienta gestiona automáticamente la imposición de páginas para una secuencia de plegado correcta.</p>\n      <p>Todo el procesamiento se realiza localmente en su navegador, garantizando que sus documentos permanezcan privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Suba el documento PDF que desea convertir en un folleto."
      },
      {
        "step": 2,
        "title": "Elegir diseño",
        "description": "Seleccione el modo de cuadrícula, el tamaño del papel, la orientación y las opciones de rotación."
      },
      {
        "step": 3,
        "title": "Crear y descargar",
        "description": "Genere la plantilla de folleto resultante y descárguela para proceder a su impresión."
      }
    ],
    "useCases": [
      {
        "title": "Folletos",
        "description": "Cree folletos listos para plegar a partir de documentos PDF estándar.",
        "icon": "book-open"
      },
      {
        "title": "Fanzines",
        "description": "Produzca fanzines autoeditados con una imposición de páginas correcta para su grapado.",
        "icon": "book"
      },
      {
        "title": "Programas de eventos",
        "description": "Cree folletos profesionales de programas e información para sus eventos.",
        "icon": "calendar"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es la encuadernación a caballete o grapada (saddle-stitch)?",
        "answer": "Es un método de encuadernación donde los pliegos doblados se anidan unos dentro de otros y se grapan a lo largo del pliegue central."
      },
      {
        "question": "¿Qué modo de cuadrícula debo utilizar?",
        "answer": "El formato 1x2 es el estándar para folletos comunes. Utilice 2x2 o superior para imprimir varios pliegos en una sola hoja y ahorrar papel."
      },
      {
        "question": "¿Puedo previsualizar el diseño?",
        "answer": "Sí, la herramienta proporciona una vista previa visual interactiva antes de generar el folleto final."
      }
    ]
  },
  "rasterize-pdf": {
    "title": "Rasterizar PDF",
    "metaDescription": "Convierte páginas de PDF en imágenes de alta calidad. Exporta a PNG, JPEG o WebP con ajustes personalizados de DPI.",
    "keywords": [
      "rasterizar pdf",
      "pdf a imagen",
      "pdf a png",
      "pdf a jpeg",
      "convertir paginas pdf"
    ],
    "description": "\n      <p>Rasterizar PDF convierte las páginas de su documento PDF en imágenes rasterizadas de alta resolución. Elija entre los formatos de salida PNG, JPEG o WebP con control total sobre la configuración de calidad y DPI (puntos por pulgada).</p>\n      <p>Es perfecto para crear miniaturas de previsualización, gráficos para redes sociales o para archivar contenidos de PDF en formato de imagen protegida. Admite la selección de rangos de páginas y el procesamiento por lotes.</p>\n      <p>Todo el procesamiento se realiza localmente en su navegador, garantizando que sus documentos permanezcan privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Arrastre y suelte su archivo PDF o haga clic para seleccionarlo."
      },
      {
        "step": 2,
        "title": "Configurar salida",
        "description": "Seleccione los DPI, el formato de salida (PNG/JPEG/WebP), la calidad y el rango de páginas."
      },
      {
        "step": 3,
        "title": "Convertir y descargar",
        "description": "Procese las páginas y descargue las imágenes de forma individual o en un archivo ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Redes sociales",
        "description": "Convierta diapositivas o páginas de PDF en imágenes optimizadas para publicarlas en redes sociales.",
        "icon": "share-2"
      },
      {
        "title": "Miniaturas",
        "description": "Genere imágenes de vista previa en miniatura para catalogar documentos PDF.",
        "icon": "image"
      },
      {
        "title": "Publicación web",
        "description": "Convierta contenidos de archivos PDF a formatos de imagen optimizados para la web.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "¿Qué resolución de DPI debo usar?",
        "answer": "Se recomienda 72 DPI para pantallas, 150 DPI para uso general y 300 DPI o superior para calidad de impresión física."
      },
      {
        "question": "¿Qué formato de imagen es mejor?",
        "answer": "PNG es ideal para conservar calidad y transparencia; JPEG es óptimo para archivos de tamaño reducido; WebP es idóneo para el uso moderno en la web."
      },
      {
        "question": "¿Puedo convertir páginas específicas?",
        "answer": "Sí, puede especificar rangos de páginas como \"1-5, 8, 10-15\" para rasterizar únicamente dichas páginas."
      }
    ]
  },
  "markdown-to-pdf": {
    "title": "Markdown a PDF",
    "metaDescription": "Convierte archivos Markdown en documentos PDF con un formato elegante. Soporte para GitHub Flavored Markdown y resaltado de sintaxis.",
    "keywords": [
      "markdown a pdf",
      "md a pdf",
      "convertir markdown",
      "gfm a pdf",
      "conversor markdown"
    ],
    "description": "\n      <p>Markdown a PDF convierte sus archivos Markdown en documentos PDF con estilos profesionales. Es compatible con las especificaciones CommonMark y GitHub Flavored Markdown (GFM), incluyendo tablas, listas de tareas y bloques de código.</p>\n      <p>Elija entre múltiples temas visuales (claro, oscuro, GitHub) y configure el tamaño de página y los márgenes de impresión. Los bloques de código se colorean mediante resaltado de sintaxis para una mejor legibilidad.</p>\n      <p>Toda la conversión se realiza localmente en su navegador, garantizando que su contenido permanezcan privado.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo Markdown",
        "description": "Suba su archivo con extensión .md o .markdown."
      },
      {
        "step": 2,
        "title": "Elegir tema",
        "description": "Seleccione un tema visual y configure los parámetros de página."
      },
      {
        "step": 3,
        "title": "Convertir y descargar",
        "description": "Genere el documento PDF con estilo y descárguelo."
      }
    ],
    "useCases": [
      {
        "title": "Documentación técnica",
        "description": "Convierta archivos README y documentación en PDF fáciles de compartir.",
        "icon": "file-text"
      },
      {
        "title": "Exportar notas",
        "description": "Exporte sus notas de Markdown a PDF para imprimirlas o compartirlas con terceros.",
        "icon": "edit-3"
      },
      {
        "title": "Informes profesionales",
        "description": "Cree informes estructurados a partir de Markdown con un diseño visual impecable.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "¿Se admite la variante GitHub Flavored Markdown?",
        "answer": "Sí, las tablas, listas de tareas, textos tachados y otras características específicas de GFM son totalmente compatibles."
      },
      {
        "question": "¿Puedo personalizar el diseño visual?",
        "answer": "Puede elegir entre varios temas preestablecidos o añadir su propio código CSS personalizado para un control total."
      },
      {
        "question": "¿Se resaltan los bloques de código?",
        "answer": "Sí, los bloques de código incluyen resaltado de sintaxis automático para los lenguajes de programación más comunes."
      }
    ]
  },
  "cbz-to-pdf": {
    "title": "CBZ a PDF",
    "metaDescription": "Convierte archivos de cómic archivados (CBZ) a PDF. Preserva el orden de las imágenes y la calidad para cómics digitales.",
    "keywords": [
      "cbz a pdf",
      "comic a pdf",
      "convertir cbz",
      "conversor de comics",
      "conversor cbz"
    ],
    "description": "\n      <p>CBZ a PDF convierte archivos de archivo de cómic (Comic Book Archive) en documentos PDF. La herramienta extrae todas las imágenes del archivo CBZ y las compila en un PDF manteniendo el orden de lectura correcto.</p>\n      <p>Elija entre varias opciones de tamaño de página, incluyendo las dimensiones originales de las imágenes o tamaños estandarizados de cómics. Es ideal para leer cómics en dispositivos que admiten PDF pero no el formato CBZ.</p>\n      <p>Toda la conversión se realiza localmente en su navegador, garantizando que sus cómics permanezcan privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir archivo CBZ",
        "description": "Suba su archivo de cómic digital con extensión .cbz."
      },
      {
        "step": 2,
        "title": "Seleccionar opciones",
        "description": "Configure las preferencias de tamaño de página y calidad de la imagen."
      },
      {
        "step": 3,
        "title": "Convertir y descargar",
        "description": "Realice la conversión a PDF y descargue su cómic digital."
      }
    ],
    "useCases": [
      {
        "title": "Compatibilidad con lectores electrónicos",
        "description": "Convierta archivos CBZ a PDF para poder leerlos en dispositivos de e-reading que solo admiten PDF.",
        "icon": "book"
      },
      {
        "title": "Archivo de cómics",
        "description": "Cree archivos PDF estables de su colección digital de cómics.",
        "icon": "archive"
      },
      {
        "title": "Preparación para impresión",
        "description": "Convierta cómics digitales a PDF listos para imprimir físicamente.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Qué es el formato CBZ?",
        "answer": "CBZ es un archivo comprimido en formato ZIP que contiene las páginas del cómic como archivos de imagen individuales, renombrado con la extensión .cbz."
      },
      {
        "question": "¿Se conserva la calidad de las imágenes?",
        "answer": "Sí, las imágenes se integran en el documento PDF conservando su resolución y calidad originales."
      },
      {
        "question": "¿Se admiten carpetas anidadas?",
        "answer": "Sí, la herramienta extrae y ordena de forma secuencial las imágenes contenidas en cualquier subcarpeta dentro del archivo."
      }
    ]
  },
  "font-to-outline": {
    "title": "Trazar fuentes de PDF",
    "metaDescription": "Elimina las dependencias de fuentes de los documentos PDF convirtiendo las páginas a imágenes de alta calidad. Garantiza la compatibilidad en todos los sistemas.",
    "keywords": [
      "trazar fuentes pdf",
      "convertir fuentes a contorno",
      "vectorizar fuentes pdf",
      "eliminar fuentes pdf",
      "acoplar fuentes pdf",
      "compatibilidad de fuentes pdf"
    ],
    "description": "\n      <p>Trazar fuentes de PDF elimina todas las dependencias de fuentes de su archivo PDF mediante la conversión de cada página en un contenido rasterizado de alta calidad. Esto garantiza que su documento se visualice exactamente igual en cualquier sistema, incluso si las fuentes originales no están instaladas.</p>\n      <p>La herramienta procesa cada página a los DPI seleccionados (de 150 a 600), eliminando las fuentes incrustadas mientras conserva el aspecto visual exacto. Opcionalmente, puede añadir una capa de texto invisible para mantener la capacidad de búsqueda.</p>\n      <p>Este proceso es indispensable para la preparación de archivos para imprenta, garantizar la compatibilidad multiplataforma y evitar problemas de licencias de fuentes al compartir documentos. Todo el procesamiento se realiza en su navegador de forma local.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Suba el archivo PDF que contiene las fuentes que desea eliminar o trazar."
      },
      {
        "step": 2,
        "title": "Configurar calidad",
        "description": "Elija los DPI (se recomiendan 300 para impresión, 150 para pantalla). Active la opción de texto buscable si la requiere."
      },
      {
        "step": 3,
        "title": "Convertir y descargar",
        "description": "Procese el archivo y descargue el PDF resultante libre de dependencias de fuentes."
      }
    ],
    "useCases": [
      {
        "title": "Preparación para imprenta",
        "description": "Evite errores de visualización o sustitución de tipografías en imprentas comerciales al eliminar la dependencia de fuentes.",
        "icon": "printer"
      },
      {
        "title": "Compartido multiplataforma",
        "description": "Comparta documentos con la total seguridad de que se verán idénticos en cualquier dispositivo, sin importar las fuentes instaladas.",
        "icon": "share-2"
      },
      {
        "title": "Licencias de fuentes",
        "description": "Elimine las fuentes incrustadas para evitar infracciones de derechos de autor y licencias al distribuir documentos.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "¿Cómo funciona este proceso?",
        "answer": "La herramienta renderiza cada página a alta resolución (según los DPI que elija) y vuelve a ensamblar el PDF a partir de estas imágenes, descartando los archivos de fuentes originales pero preservando la apariencia visual exacta."
      },
      {
        "question": "¿Podré seguir seleccionando texto después de la conversión?",
        "answer": "Por defecto, no, ya que el texto pasa a formar parte de una imagen. Sin embargo, puede activar la opción \"Preservar texto buscable\" para añadir una capa invisible que mantenga las funciones de búsqueda y copia de texto."
      },
      {
        "question": "¿Qué cantidad de DPI debo elegir?",
        "answer": "Se recomiendan 300 DPI para obtener una calidad apta para impresión física. 150 DPI es suficiente para visualización en pantalla y reduce el tamaño del archivo. 600 DPI ofrece la máxima calidad pero genera archivos muy grandes."
      },
      {
        "question": "¿Aumentará el tamaño del archivo?",
        "answer": "Depende de los DPI y el contenido. 150 DPI suele reducir el tamaño del archivo; 300 DPI puede incrementarlo y 600 DPI aumentará el peso de manera muy notable. Se aplica compresión automáticamente para optimizar el resultado."
      },
      {
        "question": "¿Este proceso es reversible?",
        "answer": "No, los datos tipográficos originales se eliminan permanentemente. Mantenga siempre una copia de seguridad del documento original si necesita volver a editar el texto con las fuentes originales."
      },
      {
        "question": "¿Qué ocurre con los gráficos vectoriales?",
        "answer": "Los gráficos vectoriales (formas, líneas) presentes en el PDF original se rasterizarán junto con el texto. La calidad visual se preserva de acuerdo con la resolución de DPI seleccionada."
      }
    ]
  },
  "extract-tables": {
    "title": "Extraer tablas de PDF",
    "metaDescription": "Detecta y extrae tablas de documentos PDF. Exporta los datos resultantes a formatos JSON, Markdown o CSV.",
    "keywords": [
      "extraer tablas pdf",
      "extraccion de tablas de pdf",
      "pdf a csv",
      "pdf a excel",
      "deteccion de tablas"
    ],
    "description": "\n      <p>Extraer tablas de PDF detecta datos organizados en tablas dentro de sus documentos PDF y los exporta en formatos estructurados. Elija JSON para integraciones de desarrollo, Markdown para documentación de texto o CSV para editar en hojas de cálculo.</p>\n      <p>La herramienta utiliza algoritmos de detección inteligentes para identificar estructuras tabulares incluso en documentos con diseños complejos. Defina rangos de páginas y ajuste los parámetros de detección para obtener resultados óptimos.</p>\n      <p>Todo el procesamiento se realiza localmente en su navegador, garantizando la privacidad absoluta de sus documentos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Suba el documento PDF que contiene las tablas que desea extraer."
      },
      {
        "step": 2,
        "title": "Configurar la detección",
        "description": "Establezca el rango de páginas y configure los umbrales mínimos de filas y columnas."
      },
      {
        "step": 3,
        "title": "Exportar y descargar",
        "description": "Seleccione el formato de salida deseado (JSON/Markdown/CSV) y realice la descarga."
      }
    ],
    "useCases": [
      {
        "title": "Análisis de datos",
        "description": "Extraiga datos tabulares para su análisis en herramientas de hojas de cálculo o bases de datos.",
        "icon": "bar-chart"
      },
      {
        "title": "Procesamiento de informes",
        "description": "Extraiga tablas de informes y balances en PDF para utilizarlas en flujos de trabajo adicionales.",
        "icon": "file-text"
      },
      {
        "title": "Documentación",
        "description": "Convierta las tablas de sus PDF a formato Markdown para incluirlas en documentación técnica.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "¿Es capaz de detectar tablas complejas?",
        "answer": "La herramienta funciona de forma óptima con tablas de cuadrícula simple. Aquellas celdas complejas que estén combinadas pueden requerir ciertos ajustes manuales posteriores."
      },
      {
        "question": "¿Qué ocurre si no se encuentra ninguna tabla?",
        "answer": "Intente reducir el umbral de columnas o filas mínimas, o compruebe si el documento PDF contiene estructuras de tablas reales y no solo texto suelto."
      },
      {
        "question": "¿Puedo realizar la extracción en páginas específicas?",
        "answer": "Sí, puede especificar un rango de páginas para delimitar el análisis únicamente a las zonas que contienen las tablas."
      }
    ]
  },
  "ocg-manager": {
    "title": "Gestor de capas PDF (OCG)",
    "metaDescription": "Administra las capas de un PDF (Grupos de Contenido Opcional). Visualice, active, añada, elimine y renombre capas en sus documentos.",
    "keywords": [
      "capas pdf",
      "gestor ocg pdf",
      "grupos de contenido opcional",
      "visibilidad de capas pdf",
      "administrar capas pdf"
    ],
    "description": "\n      <p>El Gestor de capas PDF le permite visualizar y administrar los Grupos de Contenido Opcional (OCG) presentes en sus documentos PDF. Las capas OCG se utilizan habitualmente en planos técnicos, mapas y documentos complejos para organizar el contenido en niveles activables y desactivables.</p>\n      <p>Visualice todas las capas de su PDF, alterne su visibilidad de pantalla o impresión, añada nuevas capas, elimine las innecesarias o renombre las existentes. Esta herramienta es esencial para profesionales que trabajan con PDF estructurados por capas, como planos arquitectónicos, exportaciones de CAD y documentos listos para imprenta.</p>\n      <p>Todo el procesamiento se realiza localmente en su navegador, garantizando que sus documentos permanezcan privados y seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Subir su PDF",
        "description": "Suba un archivo PDF que contenga capas (OCG) o uno al cual desee añadir nuevas capas."
      },
      {
        "step": 2,
        "title": "Visualizar capas",
        "description": "La herramienta listará automáticamente todas las capas encontradas en el documento junto con su estado de visibilidad."
      },
      {
        "step": 3,
        "title": "Administrar capas",
        "description": "Active o desactive la visibilidad de las capas, renombre capas existentes, añada niveles nuevos o elimine las capas innecesarias."
      },
      {
        "step": 4,
        "title": "Guardar y descargar",
        "description": "Descargue su archivo PDF modificado con todos los cambios de capas aplicados."
      }
    ],
    "useCases": [
      {
        "title": "Planos técnicos",
        "description": "Gestione las capas de exportaciones de CAD para mostrar u ocultar cotas, anotaciones o vistas específicas.",
        "icon": "ruler"
      },
      {
        "title": "Edición de mapas",
        "description": "Alterne diferentes capas de mapas como topografía, carreteras y etiquetas para impresiones personalizadas.",
        "icon": "map"
      },
      {
        "title": "Preparación para impresión",
        "description": "Prepare PDF por capas para impresión desactivando los elementos que correspondan a diferentes versiones del trabajo.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "¿Qué son las capas PDF (OCG)?",
        "answer": "Los Grupos de Contenido Opcional (OCG, por sus siglas en inglés) son capas dentro de un PDF que pueden mostrarse u ocultarse. Se utilizan comúnmente en planos de ingeniería, mapas y diseños complejos."
      },
      {
        "question": "¿Por qué mi PDF no muestra ninguna capa?",
        "answer": "No todos los archivos PDF contienen capas. Las capas se añaden habitualmente al generar el PDF desde aplicaciones de diseño profesional o herramientas CAD."
      },
      {
        "question": "¿Los cambios en las capas alteran el contenido original?",
        "answer": "Modificar la visibilidad de las capas solo altera lo que se muestra en pantalla o se imprime. El contenido real permanece intacto dentro del documento."
      }
    ]
  },
  "pdf-reader": {
    "title": "Lector de PDF",
    "metaDescription": "Lector de PDF en línea gratuito. Visualice, navegue, amplíe, rote e imprima documentos PDF directamente en su navegador.",
    "keywords": [
      "lector pdf",
      "visor pdf",
      "ver pdf online",
      "leer pdf",
      "visor pdf navegador"
    ],
    "description": "\n      <p>Lector de PDF es un visor de PDF completo que le permite leer y navegar por sus documentos directamente en su navegador. No requiere instalación de software: simplemente suba su archivo PDF y comience a leer.</p>\n      <p>Navegue de forma cómoda entre páginas, aplique zoom de ampliación o reducción, rote la orientación de la vista y utilice el modo de pantalla completa para una lectura sin distracciones. También puede imprimir los documentos o descargarlos para su acceso sin conexión.</p>\n      <p>Toda la visualización se ejecuta de manera local en su navegador. Sus documentos nunca se suben a ningún servidor, garantizando una privacidad absoluta.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Abrir su PDF",
        "description": "Haga clic para subir o arrastre y suelte un archivo PDF para abrirlo inmediatamente en el lector."
      },
      {
        "step": 2,
        "title": "Navegar por las páginas",
        "description": "Utilice los controles de página para avanzar a la siguiente, retroceder a la anterior o ir directamente a un número de página específico."
      },
      {
        "step": 3,
        "title": "Ajustar la vista",
        "description": "Ajuste el zoom de ampliación o reducción, rote la visualización o entre en el modo de pantalla completa para una lectura confortable."
      },
      {
        "step": 4,
        "title": "Imprimir o descargar",
        "description": "Imprima el documento directamente o descárguelo para guardarlo en su almacenamiento local y consultarlo sin conexión."
      }
    ],
    "useCases": [
      {
        "title": "Revisión de documentos",
        "description": "Revise de forma rápida y sencilla documentos PDF sin necesidad de instalar visores externos.",
        "icon": "book-open"
      },
      {
        "title": "Lectura en dispositivos móviles",
        "description": "Lea libros y documentos PDF de forma cómoda desde cualquier teléfono o tableta con navegador web.",
        "icon": "smartphone"
      },
      {
        "title": "Vista previa rápida",
        "description": "Previsualice el contenido de sus PDF antes de decidir descargarlos o imprimirlos.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "¿Es seguro mi documento?",
        "answer": "Sí, el documento se procesa en la memoria local de su navegador y nunca se envía a ningún servidor externo."
      },
      {
        "question": "¿Puedo realizar anotaciones o editar el PDF?",
        "answer": "Esta herramienta está destinada exclusivamente a la visualización. Utilice nuestras herramientas Firmar PDF o Anotar PDF para realizar ediciones."
      },
      {
        "question": "¿Funciona en dispositivos móviles?",
        "answer": "Sí, el Lector de PDF es compatible y funciona en cualquier smartphone o tableta con un navegador web moderno."
      }
    ]
  }
,
"redact-pdf": {
  "title": "Censurar PDF",
  "metaDescription": "Oscurece, difumina o pixela contenido PDF sensible. Exporte páginas aplanadas y elimine metadatos localmente en su navegador.",
  "keywords": [
    "redactar pdf",
    "apagón pdf",
    "mosaico pdf",
    "desenfocar pdf",
    "privacidad del pdf",
    "eliminar datos confidenciales",
    "editor de pdf seguro"
  ],
  "description": "<p>Redact PDF proporciona un editor visual e interactivo para ocultar y proteger permanentemente datos confidenciales en sus documentos PDF. Arrastra para marcar cualquier área confidencial (como nombres, direcciones, números de identificación, firmas, sellos oficiales, cifras financieras o retratos) y aplica efectos de oscurecimiento, oscurecimiento, mosaico o desenfoque.</p>\n      <p>A diferencia de los editores de PDF estándar que simplemente superponen rectángulos negros superficiales sobre el texto existente, esta herramienta realiza una <strong>rasterización física irreversible de píxeles</strong>. Las capas de texto subyacentes, los gráficos vectoriales y las secuencias de OCR se destruyen por completo y no se pueden recuperar copiando y pegando ni aplicando ingeniería inversa.</p>\n      <p>Además, la herramienta realiza una limpieza profunda de metadatos, eliminando la información del autor, el historial de creación y las transmisiones XMP. Todo el procesamiento se ejecuta 100% localmente en su navegador sin cargas en el servidor.</p>",
  "howToUse": [
    {
      "step": 1,
      "title": "Subir documento PDF",
      "description": "Seleccione o arrastre y suelte el archivo PDF que desea redactar."
    },
    {
      "step": 2,
      "title": "Marcar áreas sensibles",
      "description": "Haga clic y arrastre en cualquier página para dibujar cuadros de redacción alrededor del contenido confidencial."
    },
    {
      "step": 3,
      "title": "Elija estilo de redacción",
      "description": "Seleccione oscurecimiento, oscurecimiento, mosaico (tamaño de píxel ajustable) o desenfoque. Cambie la vista previa en tiempo real para inspeccionar el resultado."
    },
    {
      "step": 4,
      "title": "Exportar PDF seguro",
      "description": "Haga clic en \"Generar PDF seguro\" para ejecutar el acoplamiento irreversible, la eliminación de metadatos y descargar su documento seguro."
    }
  ],
  "useCases": [
    {
      "title": "Privacidad y cumplimiento normativo",
      "description": "Enmascare de forma segura la información de identificación personal (PII) para cumplir con los requisitos de GDPR, HIPAA o CCPA.",
      "icon": "shield"
    },
    {
      "title": "Intercambio confidencial legal y comercial",
      "description": "Secretos comerciales oscuros, términos de acuerdos, firmas y sellos antes de su divulgación pública o distribución externa.",
      "icon": "file-text"
    },
    {
      "title": "Protección financiera y de identidad",
      "description": "Ocultar números de cuentas bancarias, identificaciones fiscales, detalles de tarjetas de crédito y números de tarjetas de identificación en extractos y facturas.",
      "icon": "lock"
    }
  ],
  "faq": [
    {
      "question": "¿Alguien puede recuperar información redactada copiando texto o inspeccionando capas?",
      "answer": "No. Las áreas redactadas se someten a un aplanamiento físico de los píxeles. El texto, los vectores y los objetos subyacentes se eliminan por completo de la estructura del archivo, lo que imposibilita la recuperación."
    },
    {
      "question": "¿Cuál es la diferencia entre oscurecimiento, mosaico y desenfoque?",
      "answer": "Blackout crea una máscara negra sólida (estándar para documentos legales); whiteout proporciona una máscara blanca y limpia; el mosaico crea una cuadrícula pixelada; y el desenfoque produce un suave efecto de vidrio esmerilado."
    },
    {
      "question": "¿Se cargan archivos en sus servidores?",
      "answer": "No. Todo el procesamiento, la redacción, el acoplamiento y la generación de PDF se realizan completamente dentro de la memoria de su navegador. Tus documentos nunca salen de tu dispositivo."
    },
    {
      "question": "¿Qué metadatos se eliminan?",
      "answer": "El título del documento, el autor, el asunto, las palabras clave, el creador, el productor, la fecha de creación, la fecha de modificación y los flujos de metadatos XMP extendidos se borran por completo."
    }
  ]
}
};
