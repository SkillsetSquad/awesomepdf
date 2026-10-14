import { localizedRedactionContent } from './redaction-locales';
/**
 * Conteúdo das ferramentas em Português para SEO
 * Contém descrições detalhadas, passos, casos de uso e FAQs
 */

import { ToolContent } from '@/types/tool';

/**
 * Mapa de conteúdo das ferramentas em Português
 */
export const toolContentPt: Record<string, ToolContent> = {
  "pdf-multi-tool": {
    "title": "Multi-Ferramenta PDF",
    "metaDescription": "Editor PDF tudo-em-um: juntar, dividir, organizar, excluir, girar e extrair páginas em uma única ferramenta poderosa.",
    "keywords": [
      "multi ferramenta pdf",
      "editor pdf online",
      "juntar pdf",
      "dividir pdf",
      "organizar pdf",
      "tudo em um pdf"
    ],
    "description": "\n      <p>A Multi-Ferramenta PDF é sua solução completa para todas as tarefas de gerenciamento de páginas PDF. Esta poderosa ferramenta combina múltiplas operações em uma interface única e intuitiva, economizando seu tempo e esforço.</p>\n      <p>Seja para mesclar vários documentos, dividir um PDF grande em arquivos menores, reorganizar páginas, excluir conteúdo indesejado, girar páginas ou extrair seções específicas, esta ferramenta faz tudo sem que você precise alternar entre diferentes aplicativos.</p>\n      <p>Todo o processamento acontece diretamente no seu navegador, garantindo que seus documentos permaneçam privados e seguros. Nenhum arquivo é carregado em nossos servidores.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Arraste e solte seu arquivo PDF na área de upload ou clique para navegar e selecionar arquivos do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Escolha a Operação",
        "description": "Selecione entre as operações disponíveis: mesclar, dividir, organizar, excluir páginas, girar ou extrair."
      },
      {
        "step": 3,
        "title": "Configure as Opções",
        "description": "Ajuste as configurações específicas, como intervalos de páginas, ângulos de rotação ou a ordem de mesclagem."
      },
      {
        "step": 4,
        "title": "Processar e Baixar",
        "description": "Clique no botão de processar e baixe seu PDF modificado assim que a operação for concluída."
      }
    ],
    "useCases": [
      {
        "title": "Preparação de Documentos",
        "description": "Prepare documentos para envio removendo páginas desnecessárias e combinando vários arquivos.",
        "icon": "file-check"
      },
      {
        "title": "Montagem de Relatórios",
        "description": "Combine seções de relatórios, adicione capas e organize capítulos em um único documento profissional.",
        "icon": "book-open"
      },
      {
        "title": "Gerenciamento de Arquivos",
        "description": "Divida arquivos grandes em seções gerenciáveis e extraia apenas as páginas relevantes.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quantos PDFs posso processar de uma vez?",
        "answer": "Você pode carregar e processar até 10 arquivos PDF simultaneamente, com um tamanho máximo combinado de 500MB."
      },
      {
        "question": "Meus marcadores serão preservados?",
        "answer": "Sim, ao mesclar PDFs, a ferramenta preserva os marcadores existentes e pode combiná-los em uma estrutura unificada."
      },
      {
        "question": "Existe um limite de páginas?",
        "answer": "Não há um limite estrito. A ferramenta lida com documentos de centenas de páginas, embora arquivos muito grandes possam demorar mais para processar."
      }
    ]
  },
  "merge-pdf": {
    "title": "Juntar PDF",
    "metaDescription": "Combine vários arquivos PDF em um único documento. Mesclador de PDF online gratuito com reordenação por arrastar e soltar.",
    "keywords": [
      "juntar pdf",
      "combinar pdf",
      "mesclar pdf",
      "unir pdf",
      "agrupar pdf"
    ],
    "description": "\n      <p>Juntar PDF permite combinar vários documentos PDF em um único arquivo de forma rápida e fácil. Seja para consolidar relatórios ou montar uma apresentação, esta ferramenta torna o processo perfeito.</p>\n      <p>Basta carregar seus arquivos, organizá-los na ordem desejada e mesclá-los. A ferramenta preserva a qualidade original e mantém os marcadores de cada documento fonte.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload de Arquivos",
        "description": "Arraste e solte vários arquivos PDF ou clique para selecionar do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Organize a Ordem",
        "description": "Arraste as miniaturas dos arquivos para organizá-los na ordem que você deseja que apareçam."
      },
      {
        "step": 3,
        "title": "Mesclar e Baixar",
        "description": "Clique no botão Mesclar e baixe seu PDF unificado."
      }
    ],
    "useCases": [
      {
        "title": "Combinar Relatórios",
        "description": "Mescle relatórios mensais ou trimestrais em um único documento anual.",
        "icon": "file-text"
      },
      {
        "title": "Montar Portfólios",
        "description": "Reuna certificados, amostras de trabalho e currículo em um portfólio profissional.",
        "icon": "briefcase"
      },
      {
        "title": "Consolidar Notas Fiscais",
        "description": "Agrupe várias faturas ou recibos em um único arquivo para contabilidade.",
        "icon": "receipt"
      }
    ],
    "faq": [
      {
        "question": "Quantos PDFs posso juntar?",
        "answer": "Você pode mesclar até 100 arquivos PDF de uma só vez, com um tamanho total de até 500MB."
      },
      {
        "question": "A qualidade original será mantida?",
        "answer": "Sim, o processo de mesclagem preserva a qualidade original sem qualquer compressão adicional."
      },
      {
        "question": "Posso juntar PDFs protegidos por senha?",
        "answer": "Eles precisam ser descriptografados primeiro. Use nossa ferramenta \"Descriptografar PDF\" antes de tentar mesclá-los."
      }
    ]
  },
  "split-pdf": {
    "title": "Dividir PDF",
    "metaDescription": "Divida arquivos PDF em vários documentos. Extraia páginas específicas ou divida por intervalos.",
    "keywords": [
      "dividir pdf",
      "separar pdf",
      "extrair páginas pdf",
      "cortar pdf"
    ],
    "description": "\n      <p>Dividir PDF permite separar um único documento em vários arquivos menores. Perfeito para extrair capítulos específicos ou separar documentos que foram digitalizados juntos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o arquivo que deseja dividir."
      },
      {
        "step": 2,
        "title": "Escolha o Método",
        "description": "Escolha entre extrair páginas individuais, intervalos específicos ou dividir em partes iguais."
      },
      {
        "step": 3,
        "title": "Dividir e Baixar",
        "description": "Clique em Dividir e baixe os arquivos resultantes (geralmente em um arquivo ZIP)."
      }
    ],
    "useCases": [
      {
        "title": "Extrair Capítulos",
        "description": "Divida um livro ou manual em capítulos individuais para facilitar a leitura.",
        "icon": "book"
      },
      {
        "title": "Separar Digitalizações",
        "description": "Divida um lote de documentos digitalizados em arquivos individuais.",
        "icon": "copy"
      },
      {
        "title": "Criar Material de Apoio",
        "description": "Extraia apenas os slides relevantes de uma apresentação para seus alunos.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Posso salvar cada página como um PDF separado?",
        "answer": "Sim, basta escolher a opção \"Dividir todas as páginas\"."
      },
      {
        "question": "O que acontece com os marcadores?",
        "answer": "Os marcadores que apontam para as páginas extraídas são preservados no novo arquivo."
      },
      {
        "question": "Posso dividir PDFs com senha?",
        "answer": "Você deve remover a senha usando nossa ferramenta de descriptografia antes de realizar a divisão."
      }
    ]
  },
  "compress-pdf": {
    "title": "Comprimir PDF",
    "metaDescription": "Reduza o tamanho do arquivo PDF mantendo a qualidade. Compressor de PDF online gratuito para arquivos menores.",
    "keywords": [
      "comprimir pdf",
      "reduzir tamanho pdf",
      "otimizar pdf",
      "diminuir arquivo pdf"
    ],
    "description": "\n      <p>Comprimir PDF reduz o tamanho dos seus documentos, ideal para anexos de e-mail ou uploads na web. Oferecemos vários níveis de compressão para equilibrar tamanho e qualidade.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o arquivo que você deseja diminuir."
      },
      {
        "step": 2,
        "title": "Escolha o Nível",
        "description": "Selecione: Baixa (Melhor qualidade), Média (Equilibrada) ou Alta (Menor tamanho)."
      },
      {
        "step": 3,
        "title": "Comprimir",
        "description": "Inicie o processo e baixe seu PDF otimizado."
      }
    ],
    "useCases": [
      {
        "title": "Anexos de E-mail",
        "description": "Reduza o PDF para caber nos limites de tamanho dos provedores de e-mail.",
        "icon": "mail"
      },
      {
        "title": "Publicação na Web",
        "description": "Melhore a velocidade de carregamento do seu site com PDFs menores.",
        "icon": "globe"
      },
      {
        "title": "Economia de Espaço",
        "description": "Arquive documentos ocupando menos espaço no seu disco rígido.",
        "icon": "hard-drive"
      }
    ],
    "faq": [
      {
        "question": "Quanto o tamanho será reduzido?",
        "answer": "Depende do conteúdo. PDFs com muitas imagens podem reduzir de 50% a 80%, enquanto PDFs só de texto reduzem menos."
      },
      {
        "question": "A qualidade do texto será afetada?",
        "answer": "Não, o texto permanece nítido. A compressão foca principalmente em imagens e gráficos."
      },
      {
        "question": "É seguro?",
        "answer": "Sim, a compressão é feita localmente no seu navegador; seus dados não saem do seu computador."
      }
    ]
  },
  "edit-pdf": {
    "title": "Editar PDF",
    "metaDescription": "Edite arquivos PDF online. Adicione texto, imagens, anotações e formas aos seus documentos.",
    "keywords": [
      "editar pdf",
      "editor pdf online gratuito",
      "escrever no pdf",
      "anotar pdf"
    ],
    "description": "\n      <p>Nosso editor de PDF oferece ferramentas para modificar e anotar seus documentos sem software caro. Adicione texto, imagens, formas e destaques facilmente.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o documento que deseja editar."
      },
      {
        "step": 2,
        "title": "Use as Ferramentas",
        "description": "Use a barra de ferramentas para inserir texto, realces ou imagens."
      },
      {
        "step": 3,
        "title": "Editar e Salvar",
        "description": "Posicione os elementos e baixe a versão editada."
      }
    ],
    "useCases": [
      {
        "title": "Revisão de Documentos",
        "description": "Adicione comentários e marcações em rascunhos de equipe.",
        "icon": "message-square"
      },
      {
        "title": "Preencher Formulários",
        "description": "Escreva em PDFs e adicione assinaturas digitais.",
        "icon": "edit-3"
      },
      {
        "title": "Ocultar Informações",
        "description": "Cubra dados sensíveis com formas antes de compartilhar.",
        "icon": "eye-off"
      }
    ],
    "faq": [
      {
        "question": "Posso alterar o texto original?",
        "answer": "Esta ferramenta foca em adicionar conteúdo. Para alterar o texto original, geralmente é necessário o arquivo fonte (ex: Word)."
      },
      {
        "question": "As alterações são permanentes?",
        "answer": "Sim, ao salvar, as edições são incorporadas às camadas do PDF."
      },
      {
        "question": "Posso desfazer ações?",
        "answer": "Sim, o editor suporta as funções de desfazer e refazer durante a edição."
      }
    ]
  },
  "invert-colors": {
    "title": "Inverter Cores",
    "metaDescription": "Inverta as cores do PDF para o modo escuro. Transforme documentos em cores negativas para facilitar a leitura.",
    "keywords": [
      "inverter cores pdf",
      "modo escuro pdf",
      "pdf negativo",
      "reduzir fadiga ocular"
    ],
    "description": "\n      <p>Inverta as cores de seus documentos PDF para criar um efeito de negativo. Isso é extremamente útil para leitura em ambientes com pouca luz (Modo Escuro), ajudando a reduzir a fadiga ocular.</p>\n      <p>A ferramenta permite inverter todas as cores ou preservar elementos específicos, como imagens. Perfeito para quem passa horas lendo documentos técnicos ou acadêmicos na tela.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Escolha o PDF que deseja transformar."
      },
      {
        "step": 2,
        "title": "Configurar Opções",
        "description": "Decida se deseja inverter todo o conteúdo ou apenas textos e fundos."
      },
      {
        "step": 3,
        "title": "Processar e Baixar",
        "description": "Baixe a versão com cores invertidas para uma leitura mais confortável."
      }
    ],
    "useCases": [
      {
        "title": "Leitura Noturna",
        "description": "Crie versões em modo escuro para ler à noite sem cansar os olhos.",
        "icon": "moon"
      },
      {
        "title": "Acessibilidade",
        "description": "Ajude usuários com sensibilidade à luz ou deficiência visual através do alto contraste.",
        "icon": "eye"
      },
      {
        "title": "Economia de Tinta",
        "description": "Inverta documentos com fundo escuro antes de imprimir para economizar cartucho.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "As imagens também serão invertidas?",
        "answer": "Por padrão, sim. No entanto, você pode optar por manter as imagens originais enquanto inverte o restante."
      },
      {
        "question": "Posso inverter apenas algumas páginas?",
        "answer": "Sim, você tem a opção de selecionar páginas específicas para a inversão."
      },
      {
        "question": "O processo é reversível?",
        "answer": "Sim, basta passar o arquivo resultante pela ferramenta novamente para voltar às cores originais."
      }
    ]
  },
  "background-color": {
    "title": "Cor de Fundo",
    "metaDescription": "Altere a cor de fundo do PDF. Adicione fundos coloridos às páginas do seu documento.",
    "keywords": [
      "cor de fundo pdf",
      "mudar cor pdf",
      "fundo colorido pdf",
      "personalizar pdf"
    ],
    "description": "\n      <p>Altere ou adicione uma cor de fundo às suas páginas PDF. Isso pode melhorar a legibilidade, adicionar um toque visual profissional ou alinhar o documento à sua identidade visual.</p>\n      <p>Escolha qualquer cor e aplique-a a todo o documento. A ferramenta preserva todo o conteúdo existente enquanto adiciona a camada de cor por baixo.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o arquivo que deseja colorir."
      },
      {
        "step": 2,
        "title": "Escolher Cor",
        "description": "Use o seletor de cores ou insira um código hexadecimal."
      },
      {
        "step": 3,
        "title": "Aplicar e Baixar",
        "description": "Aplique a cor de fundo e baixe o PDF atualizado."
      }
    ],
    "useCases": [
      {
        "title": "Melhorar Legibilidade",
        "description": "Adicione um fundo creme ou sépia para reduzir o cansaço visual ao ler.",
        "icon": "eye"
      },
      {
        "title": "Identidade Visual",
        "description": "Aplique cores da sua marca em apresentações ou propostas.",
        "icon": "palette"
      },
      {
        "title": "Destaque de Seções",
        "description": "Use cores diferentes para distinguir capítulos ou seções do documento.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "A cor vai cobrir meu texto?",
        "answer": "Não, a cor é adicionada como uma camada de fundo, mantendo textos e imagens visíveis."
      },
      {
        "question": "Posso usar cores diferentes em cada página?",
        "answer": "Atualmente, a ferramenta aplica uma cor por vez. Para cores variadas, processe os intervalos de páginas separadamente."
      },
      {
        "question": "Como remover uma cor de fundo existente?",
        "answer": "Esta ferramenta foca em adicionar. Para remover, utilize o nosso editor de PDF."
      }
    ]
  },
  "text-color": {
    "title": "Mudar Cor do Texto",
    "metaDescription": "Altere a cor do texto em documentos PDF. Modifique a cor de todo o conteúdo de texto globalmente.",
    "keywords": [
      "mudar cor texto pdf",
      "cor da fonte pdf",
      "alterar texto pdf",
      "recolorir pdf"
    ],
    "description": "\n      <p>Modifique a cor de todo o texto no seu PDF de uma só vez. Útil para melhorar o contraste, alinhar com diretrizes de marca ou preparar documentos para apresentações visuais.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Carregue seu documento PDF."
      },
      {
        "step": 2,
        "title": "Selecionar Cor",
        "description": "Escolha a nova cor desejada para o texto."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Baixe o documento com as cores de texto atualizadas."
      }
    ],
    "useCases": [
      {
        "title": "Aumentar Contraste",
        "description": "Mude cores claras para preto para garantir uma leitura perfeita.",
        "icon": "contrast"
      },
      {
        "title": "Padronização de Marca",
        "description": "Atualize as cores das fontes para as cores oficiais da sua empresa.",
        "icon": "palette"
      },
      {
        "title": "Acessibilidade Web",
        "description": "Ajuste cores para atender aos padrões de contraste para deficientes visuais.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Todo o texto será alterado?",
        "answer": "Sim, a ferramenta detecta elementos de texto e aplica a cor globalmente."
      },
      {
        "question": "O formato (negrito/itálico) é mantido?",
        "answer": "Sim, todas as formatações originais são preservadas, apenas o valor da cor é alterado."
      },
      {
        "question": "Funciona em textos dentro de imagens?",
        "answer": "Não, textos que fazem parte de uma imagem (rastreados) não podem ser recoloridos por esta ferramenta."
      }
    ]
  },
  "add-stamps": {
    "title": "Adicionar Carimbos",
    "metaDescription": "Adicione carimbos a documentos PDF. Use modelos predefinidos ou carimbos personalizados.",
    "keywords": [
      "carimbo pdf",
      "carimbos prontos pdf",
      "marcar pdf",
      "carimbo digital"
    ],
    "description": "\n      <p>Coloque carimbos digitais em seus PDFs. Utilize modelos clássicos como \"APROVADO\", \"REPROVADO\", \"RASCUNHO\" ou envie sua própria imagem para carimbar o documento.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o arquivo que deseja carimbar."
      },
      {
        "step": 2,
        "title": "Escolher Carimbo",
        "description": "Selecione um modelo pronto ou envie seu próprio logo/imagem."
      },
      {
        "step": 3,
        "title": "Posicionar e Salvar",
        "description": "Clique onde deseja o carimbo, ajuste o tamanho e baixe o arquivo."
      }
    ],
    "useCases": [
      {
        "title": "Fluxos de Aprovação",
        "description": "Marque faturas ou contratos como \"Pago\" ou \"Revisado\".",
        "icon": "check-circle"
      },
      {
        "title": "Status do Documento",
        "description": "Sinalize claramente documentos como \"Final\" ou \"Obsoleto\".",
        "icon": "tag"
      },
      {
        "title": "Controle de Qualidade",
        "description": "Adicione selos de inspeção em relatórios técnicos.",
        "icon": "clipboard-check"
      }
    ],
    "faq": [
      {
        "question": "Quais modelos estão disponíveis?",
        "answer": "Aprovado, Rejeitado, Rascunho, Confidencial, Cópia e muitos outros."
      },
      {
        "question": "Posso usar meu próprio logo?",
        "answer": "Sim, você pode carregar qualquer imagem PNG ou JPG para usar como carimbo personalizado."
      },
      {
        "question": "Posso colocar vários carimbos?",
        "answer": "Sim, você pode adicionar quantos carimbos desejar em páginas diferentes."
      }
    ]
  },
  "remove-annotations": {
    "title": "Remover Anotações",
    "metaDescription": "Remova anotações de arquivos PDF. Limpe comentários, realces e marcações.",
    "keywords": [
      "remover comentários pdf",
      "limpar anotações pdf",
      "pdf limpo",
      "excluir marcações"
    ],
    "description": "\n      <p>Remova todos os comentários, destaques e notas adesivas de seu PDF. Crie uma versão \"limpa\" para publicação final ou compartilhamento externo sem marcas de revisão.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Carregue o documento com as anotações."
      },
      {
        "step": 2,
        "title": "Selecionar Tipos",
        "description": "Escolha se deseja remover apenas comentários, apenas realces ou tudo."
      },
      {
        "step": 3,
        "title": "Limpar e Baixar",
        "description": "Baixe o PDF sem as marcas de edição."
      }
    ],
    "useCases": [
      {
        "title": "Finalização",
        "description": "Remova notas de revisão interna antes de enviar ao cliente final.",
        "icon": "file-check"
      },
      {
        "title": "Privacidade",
        "description": "Exclua comentários que possam conter informações sensíveis do processo de revisão.",
        "icon": "shield"
      },
      {
        "title": "Distribuição Limpa",
        "description": "Gere cópias para leitura sem distrações de marcações coloridas.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "O que exatamente é removido?",
        "answer": "Destaques, sublinhados, notas, carimbos e desenhos à mão livre."
      },
      {
        "question": "O texto original é apagado?",
        "answer": "Não, apenas as camadas de anotação por cima do texto são removidas."
      },
      {
        "question": "A remoção é permanente?",
        "answer": "No arquivo baixado, sim. Recomendamos sempre manter uma cópia original."
      }
    ]
  },
  "remove-blank-pages": {
    "title": "Remover Páginas Brancas",
    "metaDescription": "Detecte e remova automaticamente páginas em branco de documentos PDF.",
    "keywords": [
      "remover páginas vazias pdf",
      "deletar páginas em branco",
      "limpar scan pdf"
    ],
    "description": "\n      <p>Esta ferramenta inteligente detecta e elimina automaticamente páginas vazias. Ideal para limpar digitalizações ou remover divisores após mesclar vários documentos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o documento que deseja limpar."
      },
      {
        "step": 2,
        "title": "Ajustar Sensibilidade",
        "description": "Defina o nível de detecção (útil para ignorar pequenos pontos de poeira no scan)."
      },
      {
        "step": 3,
        "title": "Remover e Baixar",
        "description": "Baixe seu PDF otimizado e sem páginas inúteis."
      }
    ],
    "useCases": [
      {
        "title": "Otimizar Digitalizações",
        "description": "Remova versos em branco de documentos que foram escaneados em lote.",
        "icon": "scan"
      },
      {
        "title": "Reduzir Tamanho",
        "description": "Economize espaço removendo páginas que não contêm informação.",
        "icon": "minimize-2"
      },
      {
        "title": "Limpeza de Arquivos",
        "description": "Delete divisores de página após unir vários documentos.",
        "icon": "minus"
      }
    ],
    "faq": [
      {
        "question": "Como a detecção funciona?",
        "answer": "A ferramenta analisa o conteúdo da página. Se quase não houver pixels visíveis, ela é marcada como branca."
      },
      {
        "question": "E se a página tiver uma pequena mancha?",
        "answer": "Você pode ajustar o \"limiar\" de detecção para que páginas com pequenas sujeiras de scan ainda sejam consideradas brancas."
      },
      {
        "question": "Posso ver o que será deletado?",
        "answer": "Sim, as páginas detectadas são mostradas em uma prévia antes da confirmação."
      }
    ]
  },
  "image-to-pdf": {
    "title": "Imagem para PDF",
    "metaDescription": "Converta qualquer imagem em PDF. Suporte para JPG, PNG, WebP, BMP, TIFF, SVG e HEIC.",
    "keywords": [
      "imagem para pdf",
      "converter foto em pdf",
      "transformar imagem em pdf",
      "unir fotos em pdf"
    ],
    "description": "\n      <p>Transforme fotos e gráficos de qualquer formato em documentos PDF profissionais. Com suporte para JPG, PNG, WebP, BMP, TIFF, SVG e HEIC, esta é a sua ferramenta universal de conversão de imagem.</p>\n      <p>Combine várias imagens em um único arquivo PDF, organize-as na ordem que desejar e personalize o tamanho da página e a orientação conforme sua necessidade.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload de Imagens",
        "description": "Arraste as imagens para a área de upload ou selecione arquivos do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Organizar e Configurar",
        "description": "Reordene as fotos e escolha o tamanho da página (como A4 ou tamanho original)."
      },
      {
        "step": 3,
        "title": "Converter",
        "description": "Gere seu PDF e baixe o resultado imediatamente."
      }
    ],
    "useCases": [
      {
        "title": "Álbuns de Fotos",
        "description": "Reúna fotos de viagens ou eventos em um único álbum em formato PDF.",
        "icon": "images"
      },
      {
        "title": "Arquivamento de Documentos",
        "description": "Digitalize documentos físicos transformando fotos de scans em PDFs arquiváveis.",
        "icon": "archive"
      },
      {
        "title": "Portfólios",
        "description": "Crie uma apresentação profissional com seus trabalhos de design ou fotografia.",
        "icon": "file-stack"
      }
    ],
    "faq": [
      {
        "question": "Quais formatos são aceitos?",
        "answer": "JPG, PNG, WebP, BMP, TIFF, SVG e o formato HEIC da Apple."
      },
      {
        "question": "A qualidade da imagem é mantida?",
        "answer": "Sim, por padrão as imagens são incorporadas em sua resolução original."
      },
      {
        "question": "Posso mudar a ordem das fotos?",
        "answer": "Sim, você pode arrastar e soltar as imagens para ordenar antes de gerar o PDF."
      }
    ]
  },
  "png-to-pdf": {
    "title": "PNG para PDF",
    "metaDescription": "Converta imagens PNG em PDF. Preserve transparências e combine vários arquivos PNG.",
    "keywords": [
      "png para pdf",
      "converter png em pdf",
      "imagem transparente para pdf",
      "print para pdf"
    ],
    "description": "\n      <p>Converta arquivos PNG para PDF mantendo a transparência. Ideal para gráficos, logotipos e capturas de tela (screenshots) que possuem fundo transparente.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload de PNGs",
        "description": "Selecione seus arquivos PNG."
      },
      {
        "step": 2,
        "title": "Escolher Layout",
        "description": "Determine o tamanho da página e a disposição das imagens."
      },
      {
        "step": 3,
        "title": "Baixar",
        "description": "Baixe o documento PDF finalizado."
      }
    ],
    "useCases": [
      {
        "title": "Portfólios de Gráficos",
        "description": "Apresente logotipos e designs de interface em um documento limpo.",
        "icon": "palette"
      },
      {
        "title": "Documentação de Software",
        "description": "Reúna capturas de tela de programas em um manual de instruções.",
        "icon": "monitor"
      },
      {
        "title": "Catálogos de Logos",
        "description": "Crie uma visão geral dos assets da sua marca.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "A transparência é mantida?",
        "answer": "Sim, as áreas transparentes do PNG serão exibidas corretamente no PDF."
      },
      {
        "question": "O que acontece com PNGs animados?",
        "answer": "Eles serão convertidos como uma imagem estática (o primeiro quadro)."
      },
      {
        "question": "Posso definir uma cor de fundo?",
        "answer": "Sim, você pode optar por preencher áreas transparentes com uma cor específica no PDF."
      }
    ]
  },
  "webp-to-pdf": {
    "title": "WebP para PDF",
    "metaDescription": "Converter imagens WebP para PDF. Transforme o formato moderno do Google para impressão e arquivamento.",
    "keywords": [
      "webp para pdf",
      "converter webp em pdf",
      "transformar webp",
      "formato webp pdf"
    ],
    "description": "\n      <p>Converta imagens modernas no formato WebP para o padrão universal PDF. Ideal para preparar imagens baixadas da web para impressão ou arquivamento de longo prazo.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload de WebP",
        "description": "Selecione os arquivos WebP da sua pasta."
      },
      {
        "step": 2,
        "title": "Ajustar Opções",
        "description": "Escolha orientação Retrato ou Paisagem para suas páginas."
      },
      {
        "step": 3,
        "title": "Salvar",
        "description": "Gere o PDF a partir de seus gráficos WebP."
      }
    ],
    "useCases": [
      {
        "title": "Arquivar Conteúdo Web",
        "description": "Salve imagens de sites permanentemente em formato PDF.",
        "icon": "globe"
      },
      {
        "title": "Preparação para Impressão",
        "description": "Torne imagens modernas de web acessíveis para impressoras comuns.",
        "icon": "printer"
      },
      {
        "title": "Padronização de Formato",
        "description": "Converta WebP para o formato PDF multiplataforma.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "O que é WebP?",
        "answer": "Um formato desenvolvido pelo Google para alta compressão na web."
      },
      {
        "question": "A conversão perde qualidade?",
        "answer": "Não, a qualidade da imagem original WebP é mantida no PDF."
      },
      {
        "question": "Funciona com WebPs animados?",
        "answer": "Eles serão convertidos como imagens estáticas."
      }
    ]
  },
  "svg-to-pdf": {
    "title": "SVG para PDF",
    "metaDescription": "Converter gráficos vetoriais SVG para PDF. Preserve a escalabilidade e a qualidade sem perdas.",
    "keywords": [
      "svg para pdf",
      "vetor para pdf",
      "converter svg em pdf",
      "logo vetorial pdf"
    ],
    "description": "\n      <p>Converta gráficos vetoriais escaláveis (SVG) em PDF sem perder a nitidez. Como o PDF também suporta vetores, seu design permanecerá nítido em qualquer nível de zoom.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload de SVG",
        "description": "Selecione seus arquivos vetoriais SVG."
      },
      {
        "step": 2,
        "title": "Configurar Página",
        "description": "Escolha o formato ideal para seus gráficos."
      },
      {
        "step": 3,
        "title": "Converter",
        "description": "Baixe o PDF vetorial."
      }
    ],
    "useCases": [
      {
        "title": "Impressão de Logos",
        "description": "Prepare logotipos vetoriais para impressão profissional.",
        "icon": "award"
      },
      {
        "title": "Plantas Técnicas",
        "description": "Converta exportações de CAD ou diagramas em PDF.",
        "icon": "ruler"
      },
      {
        "title": "Ilustrações",
        "description": "Crie documentos de alta resolução a partir de artes vetoriais.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "A qualidade vetorial é mantida?",
        "answer": "Sim, o PDF preserva os caminhos matemáticos, mantendo o conteúdo infinitamente escalável."
      },
      {
        "question": "As fontes são incorporadas corretamente?",
        "answer": "Geralmente sim. Para melhores resultados, as fontes no SVG devem ser convertidas em curvas."
      },
      {
        "question": "Suporta filtros complexos?",
        "answer": "A maioria dos filtros e gradientes padrão do SVG é suportada."
      }
    ]
  },
  "heic-to-pdf": {
    "title": "HEIC para PDF",
    "metaDescription": "Converter fotos HEIC do iPhone para PDF. Torne fotos da Apple compatíveis com Windows e Android.",
    "keywords": [
      "heic para pdf",
      "converter foto iphone",
      "heic em pdf",
      "apple heic converter"
    ],
    "description": "\n      <p>Converta fotos HEIC do seu iPhone ou iPad diretamente para PDF. Embora o HEIC ofereça boa compressão, ele não é legível em todos os lugares — o PDF, por outro lado, sim.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload de HEIC",
        "description": "Selecione suas fotos da Apple."
      },
      {
        "step": 2,
        "title": "Ordenar",
        "description": "Coloque suas fotos na ordem desejada."
      },
      {
        "step": 3,
        "title": "Baixar",
        "description": "Baixe o documento PDF universal."
      }
    ],
    "useCases": [
      {
        "title": "Álbuns Mobile",
        "description": "Crie PDFs de suas fotos de celular para compartilhar com usuários de Windows ou Android.",
        "icon": "smartphone"
      },
      {
        "title": "Scans de iPhone",
        "description": "Transforme documentos fotografados com o celular em PDFs limpos.",
        "icon": "scan"
      },
      {
        "title": "Compatibilidade",
        "description": "Torne imagens HEIC utilizáveis em PCs e outros dispositivos não Apple.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "O que é HEIC?",
        "answer": "O formato padrão de imagem da Apple para armazenamento eficiente."
      },
      {
        "question": "Suporta Live Photos?",
        "answer": "A ferramenta converte a imagem principal da Live Photo para o PDF."
      },
      {
        "question": "Os metadados (Exif) são mantidos?",
        "answer": "Você pode escolher se deseja manter informações de local e data no documento."
      }
    ]
  },
  "txt-to-pdf": {
    "title": "Texto para PDF",
    "metaDescription": "Converter arquivos de texto (TXT) em PDF formatado. Personalize fontes e layout.",
    "keywords": [
      "txt para pdf",
      "converter texto em pdf",
      "texto para documento",
      "arquivo txt pdf"
    ],
    "description": "\n      <p>Transforme arquivos de texto simples (.txt) em documentos PDF formatados. Personalize fontes, margens e layout para transformar notas simples em documentos profissionais.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload de Arquivo TXT",
        "description": "Selecione seu arquivo .txt."
      },
      {
        "step": 2,
        "title": "Formatação",
        "description": "Escolha a fonte (ex: Monospace para código) e as margens."
      },
      {
        "step": 3,
        "title": "Salvar",
        "description": "Baixe o documento PDF formatado."
      }
    ],
    "useCases": [
      {
        "title": "Documentação de Código",
        "description": "Converta arquivos de código-fonte em PDFs legíveis.",
        "icon": "code"
      },
      {
        "title": "Arquivamento de Logs",
        "description": "Salve logs de servidor em um formato de documento fixo.",
        "icon": "file-text"
      },
      {
        "title": "Manuscritos",
        "description": "Transforme rascunhos de texto simples em PDFs prontos para impressão.",
        "icon": "sticky-note"
      }
    ],
    "faq": [
      {
        "question": "Suporta caracteres especiais?",
        "answer": "Sim, a ferramenta suporta codificação UTF-8 para caracteres internacionais."
      },
      {
        "question": "Há quebra de linha automática?",
        "answer": "Sim, linhas muito longas são ajustadas automaticamente à largura da página."
      },
      {
        "question": "Posso mudar o tamanho da fonte?",
        "answer": "Sim, você pode ajustar o tamanho para uma leitura ideal."
      }
    ]
  },
  "json-to-pdf": {
    "title": "JSON para PDF",
    "metaDescription": "Converter arquivos JSON em PDF formatado. Com realce de sintaxe e saída estruturada.",
    "keywords": [
      "json para pdf",
      "visualizar json",
      "converter dados api",
      "formatar json pdf"
    ],
    "description": "\n      <p>Transforme dados JSON em um PDF legível e bem formatado. A ferramenta oferece realce de sintaxe automático e recuos para visualizar estruturas de dados complexas.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload de JSON",
        "description": "Selecione seu arquivo .json."
      },
      {
        "step": 2,
        "title": "Escolher Estilo",
        "description": "Configure o esquema de cores para o realce de sintaxe."
      },
      {
        "step": 3,
        "title": "Gerar",
        "description": "Baixe o PDF de dados estruturados."
      }
    ],
    "useCases": [
      {
        "title": "Documentação de API",
        "description": "Apresente respostas de exemplo em um documento limpo.",
        "icon": "code"
      },
      {
        "title": "Backups de Configuração",
        "description": "Arquive configurações em um formato legível por humanos.",
        "icon": "settings"
      },
      {
        "title": "Relatórios de Dados",
        "description": "Crie relatórios a partir de exportações de dados JSON.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "O código é colorido?",
        "answer": "Sim, chaves, valores e tipos de dados são destacados para facilitar a visualização."
      },
      {
        "question": "Como lida com arquivos grandes?",
        "answer": "Estruturas JSON longas são distribuídas automaticamente por várias páginas."
      },
      {
        "question": "Preciso de conhecimentos de programação?",
        "answer": "Não, basta carregar o arquivo e a ferramenta cuida do layout."
      }
    ]
  },
  "pdf-to-jpg": {
    "title": "PDF para JPG",
    "metaDescription": "Converta páginas de PDF em imagens JPG. Extração de alta qualidade com resolução personalizável.",
    "keywords": [
      "pdf para jpg",
      "pdf em jpeg",
      "converter pdf para imagem",
      "extrair páginas pdf"
    ],
    "description": "\n      <p>Converta as páginas do seu documento PDF em imagens JPG de alta qualidade. Você pode converter todas as páginas ou selecionar páginas específicas, ajustando a resolução (DPI) e a qualidade da imagem conforme necessário.</p>\n      <p>Ideal para criar prévias de documentos, compartilhar conteúdos em redes sociais ou utilizar páginas de PDF em editores de imagem.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o arquivo PDF que deseja converter."
      },
      {
        "step": 2,
        "title": "Escolher Qualidade",
        "description": "Defina a resolução (DPI) desejada e o nível de compressão."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Baixe as imagens individualmente ou todas juntas em um arquivo ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Publicação na Web",
        "description": "Crie versões de imagem das páginas do seu PDF para o seu site.",
        "icon": "globe"
      },
      {
        "title": "Redes Sociais",
        "description": "Compartilhe conteúdos de documentos no Instagram, LinkedIn ou Facebook como imagens simples.",
        "icon": "share-2"
      },
      {
        "title": "Apresentações",
        "description": "Insira slides ou páginas de PDF como imagens no PowerPoint ou Keynote.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Qual resolução é suportada?",
        "answer": "Você pode escolher entre 72 DPI (web) até 300 DPI (qualidade de impressão)."
      },
      {
        "question": "Posso converter apenas algumas páginas?",
        "answer": "Sim, é possível selecionar páginas individuais ou intervalos específicos."
      },
      {
        "question": "Como recebo os arquivos?",
        "answer": "Se o documento tiver várias páginas, a ferramenta gera automaticamente um arquivo ZIP prático."
      }
    ]
  },
  "pdf-to-png": {
    "title": "PDF para PNG",
    "metaDescription": "Converta páginas de PDF em imagens PNG. Qualidade sem perdas com suporte a transparência.",
    "keywords": [
      "pdf para png",
      "pdf para imagem sem perda",
      "extração de gráficos pdf",
      "transparência pdf"
    ],
    "description": "\n      <p>Converta documentos PDF para o formato PNG sem perda de qualidade. Ao contrário do JPG, o PNG oferece uma qualidade de imagem perfeita, sem artefatos de compressão, e suporta fundos transparentes.</p>\n      <p>Especialmente indicado para PDFs que contêm diagramas, logotipos ou textos que precisam permanecer extremamente nítidos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Carregue seu documento."
      },
      {
        "step": 2,
        "title": "Configurar Opções",
        "description": "Selecione as páginas e a densidade de pixels desejada."
      },
      {
        "step": 3,
        "title": "Salvar PNGs",
        "description": "Extraia as páginas como arquivos PNG de alta fidelidade."
      }
    ],
    "useCases": [
      {
        "title": "Extração de Gráficos",
        "description": "Salve gráficos vetoriais de PDFs como imagens rasterizadas limpas.",
        "icon": "image"
      },
      {
        "title": "Assets de Design",
        "description": "Converta rascunhos de PDF em PNG para softwares de edição gráfica.",
        "icon": "palette"
      },
      {
        "title": "Documentação Técnica",
        "description": "Crie ilustrações nítidas para manuais e guias.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Por que usar PNG em vez de JPG?",
        "answer": "O PNG não tem perdas e é melhor para textos e gráficos com bordas nítidas."
      },
      {
        "question": "A transparência é mantida?",
        "answer": "Sim, se o PDF tiver camadas transparentes, elas serão preservadas no arquivo PNG."
      },
      {
        "question": "Qual DPI devo usar?",
        "answer": "150 DPI para telas e 300 DPI para máxima nitidez de detalhes."
      }
    ]
  },
  "pdf-to-webp": {
    "title": "PDF para WebP",
    "metaDescription": "Converta páginas de PDF em imagens WebP. Formato moderno com excelente compressão para web.",
    "keywords": [
      "pdf para webp",
      "formato de imagem moderno",
      "imagens otimizadas para web",
      "pdf converter"
    ],
    "description": "\n      <p>Transforme páginas de PDF no formato WebP da Google. O WebP oferece uma compressão significativamente melhor que JPG ou PNG, mantendo uma qualidade comparável.</p>\n      <p>Esta é a melhor escolha se você deseja exibir conteúdos de PDF em um site moderno com carregamento rápido.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o documento PDF."
      },
      {
        "step": 2,
        "title": "Escolher Compressão",
        "description": "Defina o equilíbrio entre tamanho do arquivo e qualidade visual."
      },
      {
        "step": 3,
        "title": "Baixar",
        "description": "Baixe as imagens WebP otimizadas para a internet."
      }
    ],
    "useCases": [
      {
        "title": "Otimização Web",
        "description": "Reduza o tempo de carregamento do seu site usando imagens WebP.",
        "icon": "globe"
      },
      {
        "title": "Economia de Banda",
        "description": "Ideal para aplicações móveis com planos de dados limitados.",
        "icon": "zap"
      },
      {
        "title": "Design Web Moderno",
        "description": "Utilize formatos de imagem prontos para o futuro em seus projetos.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "O WebP é compatível com todos os navegadores?",
        "answer": "Sim, todos os navegadores modernos como Chrome, Firefox, Edge e Safari suportam WebP."
      },
      {
        "question": "Quanto os arquivos ficam menores?",
        "answer": "Arquivos WebP costumam ser 25-35% menores que arquivos JPG equivalentes."
      },
      {
        "question": "Há perda de qualidade?",
        "answer": "O WebP oferece opções de compressão com e sem perdas (lossy e lossless)."
      }
    ]
  },
  "pdf-to-bmp": {
    "title": "PDF para BMP",
    "metaDescription": "Converta páginas de PDF em imagens BMP (Bitmap). Formato não compactado para máxima compatibilidade.",
    "keywords": [
      "pdf para bmp",
      "converter bitmap",
      "imagem sem compressão",
      "formato legado"
    ],
    "description": "\n      <p>Converta páginas de PDF no formato clássico BMP (Windows Bitmap). O BMP é um formato não compactado que garante compatibilidade universal com sistemas antigos e aplicações específicas do Windows.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Escolha seu arquivo."
      },
      {
        "step": 2,
        "title": "Selecionar Páginas",
        "description": "Determine quais páginas serão salvas como bitmap."
      },
      {
        "step": 3,
        "title": "Gerar BMP",
        "description": "Converta e baixe as imagens bitmap."
      }
    ],
    "useCases": [
      {
        "title": "Sistemas Antigos",
        "description": "Crie imagens para softwares que não suportam formatos modernos.",
        "icon": "history"
      },
      {
        "title": "Aplicações Windows",
        "description": "Gere arquivos compatíveis para ferramentas específicas do Windows.",
        "icon": "monitor"
      },
      {
        "title": "Arquivamento sem Perdas",
        "description": "Salve imagens sem nenhum artefato de compressão.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Por que ainda usar BMP?",
        "answer": "Principalmente para compatibilidade com softwares legados ou aplicações industriais."
      },
      {
        "question": "Os arquivos BMP são muito grandes?",
        "answer": "Sim, como não são compactados, são significativamente maiores que JPG ou PNG."
      },
      {
        "question": "Qual profundidade de cor é suportada?",
        "answer": "A ferramenta suporta bitmaps padrão de 24 bits e 32 bits."
      }
    ]
  },
  "pdf-to-tiff": {
    "title": "PDF para TIFF",
    "metaDescription": "Converta PDF em imagens TIFF. Qualidade profissional com suporte a arquivos TIFF de múltiplas páginas.",
    "keywords": [
      "pdf para tiff",
      "impressão profissional tiff",
      "tiff multipágina",
      "arquivamento"
    ],
    "description": "\n      <p>Converta PDFs para o formato de alta qualidade TIFF. O TIFF é o padrão na impressão profissional e no arquivamento de longo prazo, pois suporta profundidade de cor extrema e compressão sem perdas (LZW/ZIP).</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Carregue o documento."
      },
      {
        "step": 2,
        "title": "Escolher Formato",
        "description": "Escolha entre TIFFs individuais por página ou um único arquivo TIFF de múltiplas páginas."
      },
      {
        "step": 3,
        "title": "Baixar",
        "description": "Baixe os arquivos de imagem profissionais."
      }
    ],
    "useCases": [
      {
        "title": "Impressão Profissional",
        "description": "Crie arquivos TIFF prontos para gráficas e editoras.",
        "icon": "printer"
      },
      {
        "title": "Arquivamento Digital",
        "description": "Segure documentos em um formato de arquivo estável e de alta qualidade.",
        "icon": "archive"
      },
      {
        "title": "Publicações",
        "description": "Converta PDFs para processamento em softwares de diagramação.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Suporta TIFF de múltiplas páginas?",
        "answer": "Sim, você pode converter o PDF inteiro em um único arquivo TIFF multipágina."
      },
      {
        "question": "Qual compressão é utilizada?",
        "answer": "Você pode escolher entre LZW, ZIP ou saída totalmente sem compressão."
      },
      {
        "question": "Qual DPI é necessário para impressão?",
        "answer": "Para resultados profissionais, recomendamos pelo menos 300 DPI."
      }
    ]
  },
  "pdf-to-greyscale": {
    "title": "PDF para Tons de Cinza",
    "metaDescription": "Converta PDFs coloridos para preto e branco (escala de cinza). Reduza o tamanho do arquivo e economize na impressão.",
    "keywords": [
      "pdf escala de cinza",
      "pdf preto e branco",
      "economizar tinta pdf",
      "remover cor"
    ],
    "description": "\n      <p>Transforme um PDF colorido em uma versão em escala de cinza (preto e branco). Isso é ideal para reduzir o tamanho do arquivo e preparar documentos para impressão econômica.</p>\n      <p>Os textos permanecem nítidos e as imagens mantêm seus detalhes, enquanto todas as informações de cor são removidas.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o documento colorido."
      },
      {
        "step": 2,
        "title": "Verificar Prévia",
        "description": "Veja como ficará a conversão para escala de cinza."
      },
      {
        "step": 3,
        "title": "Baixar",
        "description": "Baixe o PDF otimizado em preto e branco."
      }
    ],
    "useCases": [
      {
        "title": "Economia de Impressão",
        "description": "Evite gastos desnecessários com tinta colorida em rascunhos.",
        "icon": "printer"
      },
      {
        "title": "Redução de Tamanho",
        "description": "Diminua o peso do arquivo removendo os canais de cor.",
        "icon": "minimize-2"
      },
      {
        "title": "Estética Profissional",
        "description": "Dê aos documentos um visual clássico em preto e branco.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "O texto continuará legível?",
        "answer": "Sim. A ferramenta otimiza os contrastes para que os textos continuem perfeitamente legíveis."
      },
      {
        "question": "Quanto espaço eu economizo?",
        "answer": "Em documentos com muitas imagens, o tamanho pode cair entre 20% e 50%."
      },
      {
        "question": "Posso converter apenas algumas páginas?",
        "answer": "Sim, você pode selecionar especificamente quais páginas deseja converter."
      }
    ]
  },
  "pdf-to-json": {
    "title": "PDF para JSON",
    "metaDescription": "Extraia o conteúdo do PDF para o formato JSON. Obtenha dados estruturados para suas aplicações.",
    "keywords": [
      "pdf para json",
      "extração de dados pdf",
      "parser pdf",
      "dados estruturados"
    ],
    "description": "\n      <p>Extraia texto, metadados e a estrutura do seu documento PDF para o formato JSON, legível por máquinas. Esta é a ferramenta perfeita para desenvolvedores e analistas de dados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o arquivo PDF de origem."
      },
      {
        "step": 2,
        "title": "Escolher Dados",
        "description": "Determine quais informações (texto, layout, metadados) deseja extrair."
      },
      {
        "step": 3,
        "title": "Exportar JSON",
        "description": "Baixe o arquivo JSON pronto para sua programação."
      }
    ],
    "useCases": [
      {
        "title": "Análise de Dados",
        "description": "Analise conteúdos de texto de PDFs de forma automatizada.",
        "icon": "database"
      },
      {
        "title": "Integração de Sistemas",
        "description": "Importe conteúdos de PDF diretamente para seu banco de dados ou app.",
        "icon": "plug"
      },
      {
        "title": "Auditoria de Metadados",
        "description": "Analise os detalhes técnicos de um grande volume de PDFs.",
        "icon": "search"
      }
    ],
    "faq": [
      {
        "question": "O que exatamente é salvo no JSON?",
        "answer": "Conteúdos de texto, dados de posição, fontes, dimensões das páginas e metadados."
      },
      {
        "question": "Funciona com documentos escaneados?",
        "answer": "Apenas se eles tiverem passado anteriormente por nossa ferramenta de OCR."
      },
      {
        "question": "O formato é padronizado?",
        "answer": "Sim, utilizamos um esquema padronizado para facilitar o processamento posterior."
      }
    ]
  },
  "alternate-merge": {
    "title": "Mesclagem Alternada",
    "metaDescription": "Combine PDFs alternando páginas. Perfeito para unir scans de frente e verso realizados separadamente.",
    "keywords": [
      "mesclagem alternada pdf",
      "combinar frente e verso",
      "intercalar páginas pdf",
      "unir scans"
    ],
    "description": "\n      <p>Com a \"Mesclagem Alternada\", você combina dois arquivos PDF intercalando suas páginas (uma de cada arquivo). Esta é a solução ideal para quem digitalizou as frentes e os versos de um documento em arquivos separados.</p>\n      <p>Basta carregar o arquivo das frentes e o das costas. A ferramenta os une automaticamente em um único documento lógico. Você também pode inverter a ordem de um dos arquivos, caso ele tenha sido digitalizado de trás para frente.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload de dois PDFs",
        "description": "Selecione o PDF com as páginas ímpares (frentes) e o com as páginas pares (versos)."
      },
      {
        "step": 2,
        "title": "Configurar Ordem",
        "description": "Se necessário, selecione \"Inverter ordem\" para o segundo documento (comum em scans de baixo para cima)."
      },
      {
        "step": 3,
        "title": "Mesclar",
        "description": "Clique em mesclar para intercalar as páginas e baixar o resultado."
      }
    ],
    "useCases": [
      {
        "title": "Digitalização Duplex",
        "description": "Combine scans de dispositivos que não possuem alimentador automático frente e verso.",
        "icon": "copy"
      },
      {
        "title": "Montagem de Documentos",
        "description": "Intercale páginas de dois relatórios complementares.",
        "icon": "layers"
      },
      {
        "title": "Scans de Livros",
        "description": "Una scans de páginas esquerdas e direitas de um livro em um fluxo contínuo.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "O que acontece se o número de páginas for diferente?",
        "answer": "As páginas excedentes do documento mais longo serão simplesmente anexadas ao final."
      },
      {
        "question": "Posso inverter a ordem das páginas?",
        "answer": "Sim, a ferramenta oferece a opção de inverter um dos arquivos antes da intercalação."
      },
      {
        "question": "É melhor que a mesclagem normal?",
        "answer": "Sim, a mesclagem normal apenas anexa um arquivo ao outro; esta ferramenta mistura as páginas como um baralho de cartas."
      }
    ]
  },
  "add-attachments": {
    "title": "Adicionar Anexos",
    "metaDescription": "Incorpore arquivos em documentos PDF. Adicione qualquer tipo de arquivo como anexo ao seu PDF.",
    "keywords": [
      "anexos pdf",
      "embutir arquivo no pdf",
      "portfólio pdf",
      "anexar ao pdf"
    ],
    "description": "\n      <p>Incorpore qualquer arquivo diretamente em seus documentos PDF. Seja uma planilha, imagem ou código-fonte – crie pacotes PDF completos contendo todos os dados relevantes.</p>\n      <p>Os anexos tornam-se parte do arquivo PDF e podem ser extraídos pelo destinatário usando qualquer leitor de PDF comum.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o documento PDF principal."
      },
      {
        "step": 2,
        "title": "Adicionar Arquivos",
        "description": "Escolha os arquivos que deseja embutir dentro do PDF."
      },
      {
        "step": 3,
        "title": "Salvar",
        "description": "Baixe o PDF com os anexos integrados."
      }
    ],
    "useCases": [
      {
        "title": "Pacotes de Projeto",
        "description": "Agrupe arquivos de design ou cálculos diretamente na documentação.",
        "icon": "package"
      },
      {
        "title": "Distribuição de Relatórios",
        "description": "Anexe dados brutos em Excel a um relatório analítico em PDF.",
        "icon": "paperclip"
      },
      {
        "title": "Documentação Contratual",
        "description": "Anexe documentos de apoio diretamente ao contrato principal.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Quais tipos de arquivo são suportados?",
        "answer": "Você pode embutir qualquer tipo de arquivo dentro de um PDF."
      },
      {
        "question": "Existe limite de tamanho?",
        "answer": "O tamanho total do PDF com anexos não deve exceder 500 MB para garantir o desempenho."
      },
      {
        "question": "Os destinatários conseguirão ver os arquivos?",
        "answer": "Sim, leitores de PDF modernos mostram os anexos em uma barra lateral específica."
      }
    ]
  },
  "extract-attachments": {
    "title": "Extrair Anexos",
    "metaDescription": "Extraia arquivos embutidos de PDFs. Baixe todos os anexos de um documento PDF.",
    "keywords": [
      "extrair anexos pdf",
      "baixar arquivos do pdf",
      "extrair arquivos embutidos"
    ],
    "description": "\n      <p>Recupere todos os arquivos incorporados em um documento PDF. Você pode baixar os anexos individualmente ou todos juntos em um arquivo ZIP prático.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o PDF que contém os anexos."
      },
      {
        "step": 2,
        "title": "Visualizar Anexos",
        "description": "Veja a lista de todos os arquivos ocultos dentro do PDF."
      },
      {
        "step": 3,
        "title": "Baixar",
        "description": "Salve os arquivos individualmente ou o pacote completo."
      }
    ],
    "useCases": [
      {
        "title": "Recuperar Dados",
        "description": "Extraia dados originais de relatórios científicos em PDF.",
        "icon": "download"
      },
      {
        "title": "Descompactar Portfólios",
        "description": "Acesse documentos que lhe foram enviados como um portfólio PDF.",
        "icon": "folder-open"
      },
      {
        "title": "Extração em Lote",
        "description": "Recupere anexos de vários PDFs simultaneamente.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "E se não houver anexos?",
        "answer": "A ferramenta informará imediatamente se o documento contém ou não arquivos embutidos."
      },
      {
        "question": "O PDF original é danificado?",
        "answer": "Não, os anexos são copiados; o PDF original permanece inalterado."
      },
      {
        "question": "Todos os formatos são suportados?",
        "answer": "Sim, a ferramenta extrai qualquer tipo de arquivo que tenha sido armazenado no PDF."
      }
    ]
  },
  "divide-pages": {
    "title": "Dividir Páginas",
    "metaDescription": "Divida páginas de PDF em várias seções. Corte páginas horizontalmente ou verticalmente.",
    "keywords": [
      "cortar página pdf",
      "dividir seção pdf",
      "cortar scan",
      "divisão em grade"
    ],
    "description": "\n      <p>Esta ferramenta corta páginas individuais de um PDF em várias partes. Você pode dividir páginas horizontalmente, verticalmente ou em grade para transformar uma única página em várias novas páginas.</p>\n      <p>Especialmente útil para scans onde vários documentos (ex: recibos) estão na mesma página, ou para tornar plantas de grande formato mais manejáveis.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Carregue o documento PDF."
      },
      {
        "step": 2,
        "title": "Definir Divisão",
        "description": "Escolha entre divisão horizontal/vertical ou uma grade (ex: 2x2)."
      },
      {
        "step": 3,
        "title": "Cortar",
        "description": "Baixe o PDF com as páginas individuais agora subdivididas."
      }
    ],
    "useCases": [
      {
        "title": "Separar Scans",
        "description": "Divida uma página com vários recibos digitalizados em imagens individuais.",
        "icon": "scissors"
      },
      {
        "title": "Ajustar Grandes Formatos",
        "description": "Corte um documento A3 em duas páginas A4.",
        "icon": "maximize-2"
      },
      {
        "title": "Criar Cartões",
        "description": "Subdivida páginas em seções do tamanho de cartões de visita.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Os cortes são precisos?",
        "answer": "Sim, a ferramenta divide a página exatamente conforme as suas especificações."
      },
      {
        "question": "O que acontece com o texto na linha de corte?",
        "answer": "Conteúdos sobre a linha serão separados; certifique-se de deixar margens adequadas."
      },
      {
        "question": "Posso dividir apenas algumas páginas?",
        "answer": "Sim, você pode aplicar a divisão a todo o documento ou a seleções específicas."
      }
    ]
  },
  "n-up-pdf": {
    "title": "N-Up (Múltiplas páginas por folha)",
    "metaDescription": "Imprima várias páginas de PDF em uma única folha. Crie layouts 2-Up, 4-Up ou personalizados.",
    "keywords": [
      "pdf n-up",
      "várias páginas por folha",
      "imposição pdf",
      "criar apostilas"
    ],
    "description": "\n      <p>O N-Up PDF organiza várias páginas do seu documento em uma única folha (ex: 2, 4, 6 ou 9 páginas por folha). Isso economiza papel na impressão e é ideal para criar apostilas e resumos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o documento que deseja imprimir."
      },
      {
        "step": 2,
        "title": "Escolher Layout",
        "description": "Decida por uma grade (ex: 2x2 para 4 páginas por folha)."
      },
      {
        "step": 3,
        "title": "Gerar",
        "description": "Baixe o layout otimizado."
      }
    ],
    "useCases": [
      {
        "title": "Economizar Papel",
        "description": "Reduza o consumo de papel ao fazer revisões ou rascunhos.",
        "icon": "leaf"
      },
      {
        "title": "Apostilas de Apresentação",
        "description": "Crie visões gerais compactas dos seus slides.",
        "icon": "file-text"
      },
      {
        "title": "Preparação de Brochuras",
        "description": "Organize páginas para formatos de impressão específicos.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "A ordem é mantida?",
        "answer": "Sim, as páginas são organizadas por padrão da esquerda para a direita e de cima para baixo."
      },
      {
        "question": "Posso adicionar margens?",
        "answer": "Sim, você pode definir o espaçamento entre cada miniatura de página."
      },
      {
        "question": "A qualidade diminui?",
        "answer": "Não, as páginas são apenas reduzidas; os detalhes permanecem nítidos."
      }
    ]
  },
  "grid-combine": {
    "title": "Combinar em Grade",
    "metaDescription": "Combine vários arquivos PDF em um único layout de grade. Crie planilhas de contatos, galerias de fotos e muito mais.",
    "keywords": [
      "combinar em grade",
      "mosaico pdf",
      "galeria pdf",
      "unir pdfs em grade"
    ],
    "description": "\n      <p>\"Combinar em Grade\" permite mesclar vários arquivos PDF (ou imagens convertidas em PDF) em um layout de grade estruturado. Ideal para criar galerias de fotos, portfólios visuais ou planilhas de contatos a partir de várias fontes.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload Arquivos",
        "description": "Selecione ou arraste seus arquivos PDF."
      },
      {
        "step": 2,
        "title": "Configurar Grade",
        "description": "Escolha a estrutura da grade (ex: 2x2, 3x3), tamanho da página e opções de margem."
      },
      {
        "step": 3,
        "title": "Mesclar",
        "description": "Combine os arquivos em um único PDF formatado."
      }
    ],
    "useCases": [
      {
        "title": "Criar Portfólios",
        "description": "Exiba vários designs ou exemplos em uma única página.",
        "icon": "grid"
      },
      {
        "title": "Planilhas de Contatos",
        "description": "Crie visões gerais rápidas de grandes coleções de documentos.",
        "icon": "users"
      },
      {
        "title": "Impressão Econômica",
        "description": "Combine vários recibos ou pequenos documentos em uma folha para imprimir.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Posso misturar tamanhos de arquivo?",
        "answer": "Sim, a ferramenta redimensiona automaticamente cada página para caber na célula da grade."
      },
      {
        "question": "Quantos arquivos posso combinar?",
        "answer": "Você pode combinar dezenas de arquivos, limitado apenas pela memória do seu navegador."
      }
    ]
  },
  "reverse-pages": {
    "title": "Inverter Ordem das Páginas",
    "metaDescription": "Inverta a ordem das páginas do PDF. Espelhe o documento do fim para o começo.",
    "keywords": [
      "inverter pdf",
      "espelhar páginas",
      "ordem reversa",
      "corrigir scan"
    ],
    "description": "\n      <p>Esta ferramenta inverte toda a ordem das páginas do seu PDF. A última página torna-se a primeira, a penúltima a segunda, e assim por diante. Ideal para documentos que foram digitalizados na ordem errada.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o arquivo."
      },
      {
        "step": 2,
        "title": "Escolher Intervalo",
        "description": "Selecione o documento inteiro ou apenas uma parte para inverter."
      },
      {
        "step": 3,
        "title": "Inverter",
        "description": "Salve o PDF com a nova ordenação."
      }
    ],
    "useCases": [
      {
        "title": "Corrigir Erros de Scan",
        "description": "Conserte digitalizações em lote que foram lidas na ordem inversa.",
        "icon": "refresh-cw"
      },
      {
        "title": "Preparação de Impressão",
        "description": "Prepare documentos para impressoras que ejetam páginas em ordem inversa.",
        "icon": "printer"
      },
      {
        "title": "Processos de Revisão",
        "description": "Visualize documentos rapidamente a partir de uma perspectiva diferente.",
        "icon": "arrow-up-down"
      }
    ],
    "faq": [
      {
        "question": "Os marcadores são ajustados?",
        "answer": "Sim, os links internos e marcadores são atualizados automaticamente para as novas posições das páginas."
      },
      {
        "question": "É o mesmo que girar?",
        "answer": "Não, girar altera a orientação da página; inverter altera sua posição no documento."
      },
      {
        "question": "Posso inverter apenas o final?",
        "answer": "Sim, você pode definir um intervalo específico (ex: páginas 10-20)."
      }
    ]
  },
  "compare-pdfs": {
    "title": "Comparar PDFs",
    "metaDescription": "Compare dois documentos PDF. Destaque as diferenças entre as versões com cores.",
    "keywords": [
      "comparar pdf",
      "diff de documentos",
      "controle de versão pdf",
      "encontrar alterações"
    ],
    "description": "\n      <p>Analise duas versões de um documento rapidamente. A ferramenta marca alterações de texto, adições e exclusões com cores, permitindo que você revise revisões instantaneamente.</p>\n      <p>Veja as páginas lado a lado, navegue entre pares de páginas e filtre as alterações destacadas. Compara o texto extraído e os nomes das fontes. Imagens digitalizadas e outras alterações visuais não são comparadas.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload de dois PDFs",
        "description": "Carregue o original e a versão editada."
      },
      {
        "step": 2,
        "title": "Comparar PDFs",
        "description": "Veja as páginas lado a lado, navegue entre pares de páginas e filtre as alterações destacadas."
      },
      {
        "step": 3,
        "title": "Filtros de realce",
        "description": "Alterações de texto · Alterações de fonte · Cabeçalhos e rodapés · Texto movido"
      }
    ],
    "useCases": [
      {
        "title": "Revisão de Contratos",
        "description": "Encontre alterações ocultas em novas minutas de contrato.",
        "icon": "file-text"
      },
      {
        "title": "Edição de Textos",
        "description": "Controle se todos os pedidos de correção foram implementados corretamente.",
        "icon": "git-compare"
      },
      {
        "title": "Garantia de Qualidade",
        "description": "Certifique-se de que nenhum conteúdo foi perdido durante a conversão.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "O que é detectado?",
        "answer": "Alterações de texto · Alterações de fonte · Cabeçalhos e rodapés · Texto movido"
      },
      {
        "question": "Funciona com scans?",
        "answer": "Compara o texto extraído e os nomes das fontes. Imagens digitalizadas e outras alterações visuais não são comparadas."
      },
      {
        "question": "Como as diferenças são mostradas?",
        "answer": "Veja as páginas lado a lado, navegue entre pares de páginas e filtre as alterações destacadas. Compara o texto extraído e os nomes das fontes. Imagens digitalizadas e outras alterações visuais não são comparadas."
      }
    ]
  },
  "fix-page-size": {
    "title": "Padronizar Tamanho das Páginas",
    "metaDescription": "Padronize as dimensões das páginas do seu PDF. Converta todas as páginas para um formato uniforme.",
    "keywords": [
      "ajustar tamanho pdf",
      "padronizar pdf",
      "corrigir formato página",
      "pdf para a4"
    ],
    "description": "\n      <p>Traga consistência ao seu PDF padronizando todas as páginas para uma dimensão única. Esta ferramenta converte documentos com tamanhos de página mistos em um formato uniforme para uma apresentação profissional ou impressão sem erros.</p>\n      <p>Escolha entre tamanhos padrão como A4 e Carta (US-Letter) ou defina dimensões personalizadas. O conteúdo é redimensionado ou centralizado de forma inteligente para caber no novo formato.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o PDF que possui formatos de página variados."
      },
      {
        "step": 2,
        "title": "Escolher Formato",
        "description": "Selecione A4, Carta ou insira dimensões personalizadas em mm ou polegadas."
      },
      {
        "step": 3,
        "title": "Aplicar e Baixar",
        "description": "Baixe o PDF com todas as páginas no tamanho padronizado."
      }
    ],
    "useCases": [
      {
        "title": "Preparação para Impressão",
        "description": "Garanta que todas as páginas sejam impressas corretamente sem erros de escala.",
        "icon": "printer"
      },
      {
        "title": "Limpeza de Documentos",
        "description": "Corrija layouts irregulares após mesclar arquivos de diferentes fontes.",
        "icon": "file-check"
      },
      {
        "title": "Dossiês Profissionais",
        "description": "Crie documentos uniformes para clientes ou órgãos governamentais.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "O conteúdo será distorcido?",
        "answer": "Não, você pode optar por redimensionar o conteúdo proporcionalmente ou apenas centralizá-lo."
      },
      {
        "question": "Posso manter a proporção?",
        "answer": "Sim, a ferramenta oferece opções para ajuste inteligente sem deformar imagens ou textos."
      },
      {
        "question": "Quais tamanhos estão disponíveis?",
        "answer": "Todos os formatos ISO (A0-A5), formatos americanos e medidas customizadas."
      }
    ]
  },
  "linearize-pdf": {
    "title": "Otimizar PDF para Web",
    "metaDescription": "Otimize seu PDF para visualização rápida na internet. Ative o carregamento progressivo (Fast Web View).",
    "keywords": [
      "linearizar pdf",
      "visualização rápida na web",
      "otimizar pdf web",
      "carregamento rápido pdf"
    ],
    "description": "\n      <p>Linearize seus documentos para uma exibição instantânea na web. PDFs linearizados (também conhecidos como \"Fast Web View\") permitem que o navegador comece a exibir o conteúdo antes mesmo de terminar o download do arquivo completo.</p>\n      <p>Isso melhora drasticamente a experiência do usuário em documentos grandes, pois a primeira página aparece imediatamente.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Carregue o documento que você deseja publicar online."
      },
      {
        "step": 2,
        "title": "Otimizar",
        "description": "Clique em \"Linearizar\" para reorganizar a estrutura interna do arquivo."
      },
      {
        "step": 3,
        "title": "Salvar",
        "description": "Baixe o PDF otimizado para a internet."
      }
    ],
    "useCases": [
      {
        "title": "Publicações Online",
        "description": "Otimize e-books ou catálogos para o seu site.",
        "icon": "globe"
      },
      {
        "title": "Anexos de E-mail",
        "description": "Permita que os destinatários abram documentos sem atrasos de carregamento.",
        "icon": "mail"
      },
      {
        "title": "Documentos em Nuvem",
        "description": "Melhor performance para arquivos lidos diretamente de serviços de armazenamento.",
        "icon": "cloud"
      }
    ],
    "faq": [
      {
        "question": "O que é linearização?",
        "answer": "É uma forma especial de estruturar os dados do PDF para permitir o \"streaming\" do conteúdo."
      },
      {
        "question": "O arquivo fica menor?",
        "answer": "Não necessariamente; às vezes ele aumenta um pouco, mas a percepção de velocidade de abertura é muito maior."
      },
      {
        "question": "É compatível com todos os leitores?",
        "answer": "Sim, PDFs linearizados funcionam em qualquer leitor padrão."
      }
    ]
  },
  "repair-pdf": {
    "title": "Reparar PDF",
    "metaDescription": "Recupere arquivos PDF corrompidos ou danificados. Tente restaurar conteúdos de documentos com erro.",
    "keywords": [
      "reparar pdf",
      "consertar pdf corrompido",
      "recuperar pdf",
      "fix pdf error"
    ],
    "description": "\n      <p>Tente recuperar arquivos PDF que apresentam erros ou estão corrompidos. Esta ferramenta analisa a estrutura do documento e tenta reconstruí-la para salvar o máximo de conteúdo possível.</p>\n      <p>Muito útil para arquivos que não abrem, mostram mensagens de erro ou foram danificados durante um download incompleto.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF Danificado",
        "description": "Selecione o arquivo que está apresentando problemas."
      },
      {
        "step": 2,
        "title": "Iniciar Reparo",
        "description": "A ferramenta tentará corrigir a tabela de referência cruzada e a estrutura de objetos."
      },
      {
        "step": 3,
        "title": "Verificar Resultado",
        "description": "Baixe a versão recuperada e verifique a integridade do conteúdo."
      }
    ],
    "useCases": [
      {
        "title": "Resgate de Arquivos",
        "description": "Recupere dados importantes de PDFs que não abrem mais.",
        "icon": "refresh-cw"
      },
      {
        "title": "Correção de Erros",
        "description": "Conserte arquivos que aparecem distorcidos em alguns visualizadores.",
        "icon": "wrench"
      },
      {
        "title": "Recuperação de Dados",
        "description": "Tente restaurar conteúdos de downloads incompletos ou falhas de transferência.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "O reparo funciona sempre?",
        "answer": "O sucesso depende do nível de corrupção. Em casos de perda severa de dados binários, a recuperação total pode não ser possível."
      },
      {
        "question": "As imagens são mantidas?",
        "answer": "A ferramenta tenta salvar tudo; se um objeto estiver muito danificado, ele pode ser perdido no processo."
      },
      {
        "question": "Meu arquivo original está seguro?",
        "answer": "Sim, processamos uma cópia; seu arquivo original em seu computador permanece intocado."
      }
    ]
  },
  "encrypt-pdf": {
    "title": "Criptografar PDF",
    "metaDescription": "Proteja seu PDF com senha. Adicione criptografia e defina permissões de uso.",
    "keywords": [
      "proteger pdf com senha",
      "criptografar pdf",
      "segurança pdf",
      "bloquear pdf"
    ],
    "description": "\n      <p>Proteja seus documentos confidenciais com criptografia forte. Defina uma senha de usuário para abertura e uma senha de proprietário para controlar permissões como impressão e cópia de texto.</p>\n      <p>Escolha entre criptografia AES de 128 ou 256 bits para garantir os mais altos padrões de segurança.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o arquivo que deseja proteger."
      },
      {
        "step": 2,
        "title": "Definir Senhas",
        "description": "Insira uma senha forte e escolha as permissões (ex: permitir ou não impressão)."
      },
      {
        "step": 3,
        "title": "Sinalizar e Baixar",
        "description": "Baixe o PDF criptografado e seguro."
      }
    ],
    "useCases": [
      {
        "title": "Dados Confidenciais",
        "description": "Proteja relatórios financeiros ou documentos pessoais.",
        "icon": "lock"
      },
      {
        "title": "Envio Seguro",
        "description": "Envie contratos protegidos por e-mail para evitar acessos indevidos.",
        "icon": "shield"
      },
      {
        "title": "Controle de Uso",
        "description": "Impeça que terceiros copiem seu conteúdo ou imprimam o arquivo.",
        "icon": "key"
      }
    ],
    "faq": [
      {
        "question": "Qual a diferença entre as senhas?",
        "answer": "A senha de usuário é para abrir o arquivo; a de proprietário é para alterar as restrições e direitos."
      },
      {
        "question": "Quão segura é a criptografia?",
        "answer": "Utilizamos o padrão AES, reconhecido mundialmente como extremamente seguro e difícil de quebrar."
      },
      {
        "question": "Posso mudar a senha depois?",
        "answer": "Sim, usando a senha de proprietário, você pode alterar ou remover a proteção quando quiser."
      }
    ]
  },
  "decrypt-pdf": {
    "title": "Descriptografar PDF",
    "metaDescription": "Remova senhas de arquivos PDF. Desbloqueie documentos protegidos permanentemente.",
    "keywords": [
      "remover senha pdf",
      "desbloquear pdf",
      "tirar proteção pdf",
      "pdf decrypt"
    ],
    "description": "\n      <p>Remova a proteção por senha de seus PDFs permanentemente. Ao inserir a senha correta uma vez, a ferramenta gera uma cópia desbloqueada para acesso livre.</p>\n      <p>Nota: Você deve conhecer a senha atual. Esta ferramenta não foi feita para quebrar senhas de terceiros sem autorização.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF Protegido",
        "description": "Selecione o arquivo que possui senha."
      },
      {
        "step": 2,
        "title": "Inserir Senha",
        "description": "Digite a senha válida para autorizar a remoção da proteção."
      },
      {
        "step": 3,
        "title": "Desbloquear",
        "description": "Baixe a versão do PDF totalmente livre de senhas."
      }
    ],
    "useCases": [
      {
        "title": "Remover Proteção",
        "description": "Facilite o acesso a documentos de uso frequente.",
        "icon": "unlock"
      },
      {
        "title": "Arquivamento",
        "description": "Remova senhas antes de arquivar para evitar a perda de acesso no futuro.",
        "icon": "archive"
      },
      {
        "title": "Simplificar Workflow",
        "description": "Crie cópias abertas para compartilhamento com sua equipe.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "A ferramenta descobre senhas desconhecidas?",
        "answer": "Não, por segurança, você precisa fornecer a senha para poder removê-la."
      },
      {
        "question": "O original é alterado?",
        "answer": "Não, uma nova versão desbloqueada é gerada para download."
      },
      {
        "question": "Os dados são mantidos?",
        "answer": "Sim, o conteúdo permanece exatamente igual, apenas a barreira de segurança é removida."
      }
    ]
  },
  "edit-metadata": {
    "title": "Editar Metadados",
    "metaDescription": "Altere as propriedades do documento PDF. Edite título, autor, assunto e palavras-chave.",
    "keywords": [
      "editar metadados pdf",
      "mudar autor pdf",
      "alterar título pdf",
      "info documento"
    ],
    "description": "\n      <p>Personalize as informações ocultas do seu PDF. Edite ou remova título, autor, assunto e palavras-chave para apresentar seus documentos de forma profissional ou proteger sua privacidade.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione seu documento."
      },
      {
        "step": 2,
        "title": "Preencher Campos",
        "description": "Insira as novas informações desejadas para cada metadado."
      },
      {
        "step": 3,
        "title": "Salvar",
        "description": "Baixe o PDF com os metadados atualizados."
      }
    ],
    "useCases": [
      {
        "title": "Otimização SEO",
        "description": "Insira palavras-chave e descrições para que seu PDF seja melhor indexado pelo Google.",
        "icon": "search"
      },
      {
        "title": "Identificação Profissional",
        "description": "Defina o nome correto da empresa ou autor do documento.",
        "icon": "user"
      },
      {
        "title": "Privacidade de Arquivo",
        "description": "Limpe propriedades do documento antes de publicá-lo na internet.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Quais campos posso editar?",
        "answer": "Título, autor, assunto, palavras-chave, criador e produtor."
      },
      {
        "question": "Posso limpar todos os dados?",
        "answer": "Sim, basta deixar os campos em branco para remover essas informações."
      },
      {
        "question": "Altera dados XMP?",
        "answer": "Sim, a ferramenta atualiza tanto os metadados padrão quanto os dados XMP modernos."
      }
    ]
  },
  "pdf-to-docx": {
    "title": "PDF para Word",
    "metaDescription": "Converta PDF para documentos Word (DOCX) editáveis. Mantenha a formatação e o layout original.",
    "keywords": [
      "pdf para word",
      "converter pdf em docx",
      "pdf editável",
      "pdf word converter"
    ],
    "description": "\n      <p>Transforme seus documentos PDF em arquivos Microsoft Word (DOCX) totalmente editáveis. Graças a algoritmos avançados, layouts, fontes e tabelas são mantidos com a maior precisão possível.</p>\n      <p>Edite seus textos diretamente no Word sem precisar digitar tudo do zero. Ideal para contratos, currículos e relatórios acadêmicos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload do PDF",
        "description": "Selecione o documento que deseja converter."
      },
      {
        "step": 2,
        "title": "Processamento",
        "description": "Aguarde enquanto a estrutura do documento é analisada e convertida."
      },
      {
        "step": 3,
        "title": "Baixar",
        "description": "Baixe o arquivo Word pronto para edição."
      }
    ],
    "useCases": [
      {
        "title": "Edição de Contratos",
        "description": "Converta minutas em PDF para Word para realizar revisões e negociações.",
        "icon": "file-text"
      },
      {
        "title": "Atualização de Currículo",
        "description": "Atualize currículos antigos em PDF sem perder a formatação original.",
        "icon": "user"
      },
      {
        "title": "Reuso de Conteúdo",
        "description": "Extraia parágrafos de relatórios para utilizá-los em novos documentos.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "O layout será idêntico?",
        "answer": "Buscamos a máxima precisão. Em designs extremamente complexos, pequenos ajustes manuais podem ser necessários."
      },
      {
        "question": "Funciona com PDFs escaneados?",
        "answer": "Para melhores resultados em scans, recomendamos usar nossa ferramenta de OCR antes da conversão."
      },
      {
        "question": "É compatível com Google Docs?",
        "answer": "Sim, o arquivo DOCX gerado funciona perfeitamente no Microsoft Word, Google Docs e LibreOffice."
      }
    ]
  },
  "email-to-pdf": {
    "title": "Email para PDF",
    "metaDescription": "Converta arquivos de email (.eml, .msg) em documentos PDF. Preserva formatação, imagens inline, links clicáveis e anexos.",
    "keywords": [
      "email para pdf",
      "eml para pdf",
      "msg para pdf",
      "converter email",
      "outlook para pdf"
    ],
    "description": "\n      <p>Email para PDF converte seus arquivos de email (formatos .eml e .msg) em documentos PDF bem formatados. A ferramenta preserva as informações do cabeçalho do email, conteúdo do corpo, imagens inline com substituição CID, links clicáveis e incorpora anexos diretamente no PDF.</p>\n      <p>Personalize as opções de saída incluindo tamanho de página (A4, Letter, Legal), formato de data com suporte a fuso horário, e se deseja incluir campos CC/BCC e informações de anexos.</p>\n      <p>Toda a conversão acontece localmente no seu navegador, garantindo que seus emails permaneçam privados e seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Enviar Arquivo de Email",
        "description": "Envie seu arquivo de email .eml ou .msg."
      },
      {
        "step": 2,
        "title": "Configurar Opções",
        "description": "Defina o tamanho da página, formato de data, fuso horário e escolha quais campos incluir."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Converta para PDF com anexos incorporados e baixe o resultado."
      }
    ],
    "useCases": [
      {
        "title": "Registros Legais",
        "description": "Arquive emails importantes como PDF com anexos incorporados para documentação legal.",
        "icon": "scale"
      },
      {
        "title": "Arquivos Empresariais",
        "description": "Converta correspondência empresarial para PDF para conservação a longo prazo.",
        "icon": "briefcase"
      },
      {
        "title": "Preservação de Evidências",
        "description": "Salve evidências de email com imagens inline e anexos em formato PDF não editável.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Quais formatos de email são suportados?",
        "answer": "Tanto arquivos .eml (RFC 822) quanto .msg (Microsoft Outlook) são totalmente suportados."
      },
      {
        "question": "Os anexos são incluídos?",
        "answer": "Sim! Os anexos são incorporados diretamente no arquivo PDF. Você pode extraí-los do PDF usando um leitor PDF compatível."
      },
      {
        "question": "As imagens inline são exibidas?",
        "answer": "Sim, imagens inline referenciadas via CID (Content-ID) são automaticamente convertidas para URIs de dados base64 e exibidas no PDF."
      },
      {
        "question": "Os links são clicáveis?",
        "answer": "Sim, todos os links HTML (tags <a>) e URLs em emails de texto simples são convertidos em links clicáveis no PDF."
      },
      {
        "question": "A formatação do email é preservada?",
        "answer": "Sim, emails HTML mantêm sua formatação o máximo possível, incluindo estilos, imagens e links."
      }
    ]
  },
  "djvu-to-pdf": {
    "title": "DJVU para PDF",
    "metaDescription": "Converta arquivos de documentos DJVU para PDF. Renderização de alta qualidade para documentos e livros digitalizados.",
    "keywords": [
      "djvu para pdf",
      "converter djvu",
      "conversor djvu",
      "djvu pdf",
      "djv para pdf"
    ],
    "description": "\n      <p>DJVU para PDF converte arquivos de documentos DjVu em documentos PDF de alta qualidade. DjVu é um formato de arquivo de computador projetado principalmente para armazenar documentos digitalizados, especialmente aqueles que contêm uma combinação de texto, desenhos em linha e fotografias.</p>\n      <p>Esta ferramenta renderiza cada página do seu arquivo DJVU no DPI escolhido (pontos por polegada) e os combina em um documento PDF pesquisável. Perfeito para converter livros digitalizados, manuais técnicos e documentos de arquivo.</p>\n      <p>Toda a conversão acontece localmente no seu navegador, garantindo que seus documentos permaneçam privados e seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Enviar Arquivo DJVU",
        "description": "Arraste e solte seu arquivo .djvu ou .djv, ou clique para selecionar do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Configurar Opções",
        "description": "Escolha o DPI de saída (72, 150 ou 300) e a qualidade da imagem para o PDF."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Clique em Converter para PDF e baixe seu documento convertido."
      }
    ],
    "useCases": [
      {
        "title": "Documentos de Arquivo",
        "description": "Converta arquivos DJVU para formato PDF universal.",
        "icon": "archive"
      },
      {
        "title": "Compartilhar Livros Digitalizados",
        "description": "Compartilhe livros digitalizados em formato PDF para maior compatibilidade.",
        "icon": "share-2"
      },
      {
        "title": "Imprimir Documentos",
        "description": "Converta DJVU para PDF de alta qualidade para impressão.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "O que é o formato DJVU?",
        "answer": "DjVu é um formato de arquivo projetado para armazenar documentos digitalizados, especialmente aqueles com texto, desenhos e imagens. Oferece melhor compressão que PDF para conteúdo digitalizado."
      },
      {
        "question": "Qual DPI devo escolher?",
        "answer": "72 DPI é adequado para visualização na web, 150 DPI para documentos padrão e 300 DPI para impressão de alta qualidade."
      },
      {
        "question": "O texto será pesquisável?",
        "answer": "O texto será renderizado como imagens. Se você precisar de texto pesquisável, considere usar nossa ferramenta OCR PDF após a conversão."
      }
    ]
  },
  "fb2-to-pdf": {
    "title": "FB2 para PDF",
    "metaDescription": "Converta livros eletrônicos FictionBook (FB2) para PDF. Suporta vários arquivos com renderização de alta qualidade.",
    "keywords": [
      "fb2 para pdf",
      "converter fb2",
      "fictionbook para pdf",
      "conversor fb2",
      "fb2.zip para pdf"
    ],
    "description": "\n      <p>FB2 para PDF converte arquivos de livros eletrônicos FictionBook (FB2) em documentos PDF de alta qualidade. FB2 é um formato popular de livro eletrônico baseado em XML amplamente usado na Rússia e no Leste Europeu.</p>\n      <p>Esta ferramenta suporta tanto arquivos .fb2 quanto .fb2.zip, e pode processar vários arquivos de uma vez. Preserva a formatação de texto, imagens e a estrutura de capítulos dos seus livros eletrônicos.</p>\n      <p>Toda a conversão acontece localmente no seu navegador usando tecnologia de renderização avançada, garantindo que seus livros permaneçam privados e a conversão seja rápida.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Enviar Arquivos FB2",
        "description": "Arraste e solte um ou mais arquivos .fb2 ou .fb2.zip, ou clique para selecionar do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Selecionar Qualidade",
        "description": "Escolha a qualidade de saída: Baixa (72 DPI), Média (150 DPI) ou Alta (300 DPI)."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Clique em Converter para PDF e baixe seu(s) documento(s) convertido(s)."
      }
    ],
    "useCases": [
      {
        "title": "Imprimir Livros Eletrônicos",
        "description": "Converta livros eletrônicos FB2 para PDF para impressão física.",
        "icon": "printer"
      },
      {
        "title": "Conversão em Lote",
        "description": "Converta vários arquivos FB2 para PDF de uma vez.",
        "icon": "layers"
      },
      {
        "title": "Formato Universal",
        "description": "Compartilhe livros eletrônicos em formato PDF que funciona em qualquer dispositivo.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Posso converter vários arquivos FB2 de uma vez?",
        "answer": "Sim! Esta ferramenta suporta conversão em lote de até 20 arquivos FB2 simultaneamente."
      },
      {
        "question": "Arquivos .fb2.zip são suportados?",
        "answer": "Sim, a ferramenta extrai e converte automaticamente arquivos FB2 de arquivos .fb2.zip."
      },
      {
        "question": "A formatação é preservada?",
        "answer": "Sim! A ferramenta usa renderização nativa FB2, preservando formatação de texto, imagens e estrutura de capítulos com alta fidelidade."
      }
    ]
  },
  "deskew-pdf": {
    "title": "Endireitar PDF",
    "metaDescription": "Endireite automaticamente páginas PDF digitalizadas ou inclinadas. Corrija documentos distorcidos com detecção precisa de ângulo.",
    "keywords": [
      "endireitar pdf",
      "corrigir pdf inclinado",
      "corrigir digitalização inclinada",
      "rotacionar pdf automático",
      "corrigir ângulo pdf"
    ],
    "description": "\n      <p>Endireitar PDF detecta e corrige automaticamente páginas inclinadas ou distorcidas nos seus documentos PDF usando análise avançada de variância de perfil de projeção. Isso é essencial para documentos digitalizados que foram inseridos no scanner em um ângulo.</p>\n      <p>A ferramenta analisa o alinhamento de texto e conteúdo em diferentes ângulos para encontrar a rotação ótima, depois aplica a correção. Você pode ajustar o limite de sensibilidade (1-30) e as configurações DPI (72-300) para resultados ótimos.</p>\n      <p>Todo o processamento acontece localmente no seu navegador usando tecnologia WebAssembly, garantindo que seus documentos permaneçam privados e seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Enviar seu PDF",
        "description": "Arraste e solte seu arquivo PDF digitalizado ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Configurar Ajustes",
        "description": "Ajuste a sensibilidade do limite e DPI se necessário para melhor detecção."
      },
      {
        "step": 3,
        "title": "Processar e Baixar",
        "description": "Clique em Endireitar para endireitar as páginas e baixar o PDF corrigido."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Digitalizados",
        "description": "Corrija páginas que foram digitalizadas em um ângulo de alimentadores de documentos.",
        "icon": "scan"
      },
      {
        "title": "Digitalizações Móveis",
        "description": "Corrija fotos inclinadas de documentos tiradas com smartphones.",
        "icon": "smartphone"
      },
      {
        "title": "Restauração de Arquivo",
        "description": "Endireite arquivos digitalizados antigos para melhor legibilidade.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quão precisa é a detecção de ângulo?",
        "answer": "A ferramenta usa análise de variância de perfil de projeção para detectar ângulos de distorção de até ±10 graus com alta precisão. Ignora automaticamente páginas com ângulos menores que 0,3 graus."
      },
      {
        "question": "A qualidade do texto será afetada?",
        "answer": "Para rotações em múltiplos de 90 graus, não ocorre perda de qualidade. Para outros ângulos, a ferramenta arredonda para o grau mais próximo e mantém boa qualidade."
      },
      {
        "question": "Posso endireitar apenas páginas específicas?",
        "answer": "A ferramenta analisa todas as páginas, mas corrige apenas aquelas com distorção detectada acima do limite de sensibilidade. Páginas com distorção mínima são deixadas inalteradas."
      },
      {
        "question": "O que é o limite de sensibilidade?",
        "answer": "Valores 1-10 corrigem apenas inclinações óbvias, 11-20 detectam distorção moderada e 21-30 capturam ângulos sutis. O padrão é 10 para detecção equilibrada."
      },
      {
        "question": "Quanto tempo leva o processamento?",
        "answer": "O tempo de processamento depende do tamanho do arquivo e DPI. 150 DPI (padrão) fornece um bom equilíbrio entre velocidade e precisão. DPI mais alto é mais preciso, mas mais lento."
      }
    ]
  },
  "pdf-to-pdfa": {
    "title": "PDF para PDF/A",
    "metaDescription": "Converta PDF para formato de arquivo PDF/A. Garanta preservação de documentos de longo prazo com padrões ISO.",
    "keywords": [
      "pdf para pdfa",
      "conversor pdfa",
      "arquivar pdf",
      "arquivo pdf",
      "preservação de longo prazo"
    ],
    "description": "\n      <p>PDF para PDF/A converte seus documentos PDF para o formato PDF/A, o padrão ISO para arquivamento de documentos de longo prazo. PDF/A garante que os documentos serão visualizáveis e reproduzíveis por décadas.</p>\n      <p>Escolha entre PDF/A-1b (conformidade básica), PDF/A-2b (recomendado, suporta transparência) ou PDF/A-3b (permite arquivos incorporados). A ferramenta incorpora fontes e achata transparência conforme necessário.</p>\n      <p>Toda a conversão acontece localmente no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Enviar seu PDF",
        "description": "Envie o PDF que deseja converter para PDF/A."
      },
      {
        "step": 2,
        "title": "Selecionar Nível PDF/A",
        "description": "Escolha o nível de conformidade PDF/A-1b, PDF/A-2b ou PDF/A-3b."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Converta para PDF/A e baixe o documento de arquivo."
      }
    ],
    "useCases": [
      {
        "title": "Arquivos Legais",
        "description": "Converta documentos legais para PDF/A para armazenamento de longo prazo admissível em tribunal.",
        "icon": "scale"
      },
      {
        "title": "Registros Governamentais",
        "description": "Cumpra requisitos de arquivo governamental usando PDF/A.",
        "icon": "building"
      },
      {
        "title": "Arquivos Empresariais",
        "description": "Preserve documentos empresariais importantes para acessibilidade futura.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Qual nível PDF/A devo usar?",
        "answer": "PDF/A-2b é recomendado para a maioria dos usos. Use 1b para máxima compatibilidade ou 3b se precisar de arquivos incorporados."
      },
      {
        "question": "O que torna PDF/A diferente?",
        "answer": "PDF/A incorpora fontes, desabilita criptografia e garante que todos os elementos sejam autocontidos para visualização futura."
      },
      {
        "question": "Posso converter de volta de PDF/A?",
        "answer": "Arquivos PDF/A são PDFs padrão e podem ser abertos normalmente. As características de arquivo adicionam restrições, não limitações."
      }
    ]
  },
  "digital-sign-pdf": {
    "title": "Assinatura Digital",
    "metaDescription": "Assine digitalmente documentos PDF com certificados PFX, P12 ou PEM. Adicione assinaturas baseadas em certificados localmente em seu navegador.",
    "keywords": [
      "assinatura digital pdf",
      "certificado x509",
      "assinatura pfx",
      "assinatura p12",
      "assinatura pem",
      "assinatura eletrônica"
    ],
    "description": "<p>A ferramenta de Assinatura Digital permite adicionar assinaturas digitais X.509 criptográficas a documentos PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Enviar PDF",
        "description": "Envie o documento PDF que deseja assinar digitalmente."
      },
      {
        "step": 2,
        "title": "Carregar Certificado",
        "description": "Envie seu arquivo de certificado X.509 (.pfx, .p12 ou .pem) e digite a senha."
      },
      {
        "step": 3,
        "title": "Assinar e Baixar",
        "description": "Clique em Assinar PDF para aplicar a assinatura digital e baixe o documento assinado."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Legais",
        "description": "Assine contratos e documentos legais com assinaturas digitais juridicamente vinculativas.",
        "icon": "scale"
      },
      {
        "title": "Aprovações Empresariais",
        "description": "Assine digitalmente faturas e documentos de aprovação para trilhas de auditoria.",
        "icon": "briefcase"
      },
      {
        "title": "Integridade do Documento",
        "description": "Garanta que os documentos não foram alterados após a assinatura.",
        "icon": "shield-check"
      }
    ],
    "faq": [
      {
        "question": "Quais formatos de certificado são suportados?",
        "answer": "Os formatos de certificado PFX (.pfx), PKCS#12 (.p12) e PEM (.pem) são suportados."
      },
      {
        "question": "A assinatura é legalmente válida?",
        "answer": "Sim, assinaturas digitais X.509 com um certificado válido são legalmente reconhecidas na maioria das jurisdições."
      },
      {
        "question": "Posso adicionar uma assinatura visível?",
        "answer": "Sim, você pode adicionar uma assinatura visível com texto, imagem, posição e estilo personalizados."
      }
    ]
  },
  "validate-signature": {
    "title": "Validar Assinatura",
    "metaDescription": "Verifique assinaturas digitais em documentos PDF. Verifique a validade do certificado, informações do signatário e integridade do documento.",
    "keywords": [
      "validar assinatura pdf",
      "verificar assinatura digital",
      "verificar certificado pdf",
      "verificação de assinatura"
    ],
    "description": "<p>A ferramenta Validar Assinatura permite verificar assinaturas digitais em documentos PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Enviar PDF Assinado",
        "description": "Envie um documento PDF que contenha assinaturas digitais."
      },
      {
        "step": 2,
        "title": "Ver Resultados",
        "description": "Veja todas as assinaturas encontradas no documento com seu status de validade."
      },
      {
        "step": 3,
        "title": "Exportar Relatório",
        "description": "Opcionalmente baixe um relatório JSON dos resultados de validação."
      }
    ],
    "useCases": [
      {
        "title": "Verificação de Documentos",
        "description": "Verifique se os documentos assinados são autênticos e não foram alterados.",
        "icon": "shield-check"
      },
      {
        "title": "Auditoria de Conformidade",
        "description": "Verifique a validade das assinaturas para fins de conformidade e auditoria.",
        "icon": "clipboard-check"
      },
      {
        "title": "Revisão de Certificados",
        "description": "Veja detalhes do certificado e datas de expiração de documentos assinados.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "O que significa \"válido\"?",
        "answer": "Uma assinatura válida significa que o documento não foi modificado desde a assinatura e a cadeia de certificados está intacta."
      },
      {
        "question": "Posso validar múltiplos PDFs?",
        "answer": "Sim, você pode enviar múltiplos PDFs e validar todas as assinaturas em lote."
      },
      {
        "question": "Por que uma assinatura pode ser inválida?",
        "answer": "Assinaturas podem ser inválidas se o documento foi modificado, o certificado expirou ou o certificado não é confiável."
      }
    ]
  },
  "form-logic-designer": {
    "title": "Lógica de Formulários",
    "metaDescription": "Crie regras de formulário PDF com um designer visual. Conecte campos e adicione cálculo interativo e lógica de validação.",
    "keywords": [
      "lógica de formulário PDF",
      "injeção AcroJS",
      "fluxo de nós",
      "PDF interativo",
      "dependências de campos"
    ],
    "description": "\n        <p>O Designer de Lógica de Formulário Interativo é uma ferramenta pioneira que preenche uma enorme lacuna nos recursos do PDF: a criação de campos ativos e responsivos em vez de formulários planos e estáticos.</p>\n        <p>Por meio de nossa tela visual com \"nós de glassmorphism brilhantes\" (construídos em React Flow), os campos de formulário são representados como módulos conectados. Você pode arrastar links para definir relações: por exemplo, quando uma caixa de seleção é marcada ➜ ativar uma entrada de texto ➜ autocalcular valores e atualizar um campo total.</p>\n        <p>Depois de projetado, o mecanismo AcroJS compila a lógica em Acrobat JavaScript oficial e a injeta nos dicionários '/AA' (Ações Adicionais) do AcroForm. Os comportamentos interativos são executados nativamente em qualquer leitor de PDF padrão.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar PDF Interativo",
        "description": "Forneça um arquivo PDF que já possua campos de formulário ativos (AcroForm)."
      },
      {
        "step": 2,
        "title": "Mapear Lógica na Tela",
        "description": "Conecte os campos como nós. Vincule eventos de saída (alteração, desfoque) às ações de destino (mostrar, ocultar, calcular, desabilitar)."
      },
      {
        "step": 3,
        "title": "Compilar e Injetar",
        "description": "Injete a lógica JavaScript compilada no dicionário do PDF e salve o documento inteligente final."
      }
    ],
    "useCases": [
      {
        "title": "Contratos Comerciais Inteligentes",
        "description": "Mostre ou oculte campos de entrada complementares dinamicamente com base nos termos selecionados pelo cliente.",
        "icon": "file-signature"
      },
      {
        "title": "Formulários de Despesas Automatizados",
        "description": "Some várias linhas de despesas e calcule os impostos dinamicamente, sem cálculos manuais.",
        "icon": "calculator"
      },
      {
        "title": "Questionários Interativos",
        "description": "Pule perguntas irrelevantes com base nas respostas anteriores, proporcionando uma experiência de preenchimento móvel mais limpa.",
        "icon": "form-input"
      }
    ],
    "faq": [
      {
        "question": "Preciso de um PDF com campos preexistentes?",
        "answer": "Sim. Esta ferramenta foi projetada para vincular regras lógicas a campos existentes. Se o seu PDF não tiver campos interativos, use primeiro nossa ferramenta Criador de Formulários para adicionar entradas e caixas de seleção."
      },
      {
        "question": "Essa lógica funcionará em qualquer leitor de PDF?",
        "answer": "Ela funciona em todos os leitores de PDF que estejam em conformidade com os padrões da Adobe e que suportem Acrobat JavaScript (como Adobe Acrobat Reader, Foxit Reader e os principais navegadores). Leitores móveis minimalistas podem suportar apenas ações básicas."
      },
      {
        "question": "Isso afeta a impressão em papel?",
        "answer": "Não. Os scripts injetados são executados apenas na tela durante o preenchimento do formulário. Ao imprimir, o estado atual dos campos é impresso estaticamente, sem visualização dos nós."
      }
    ]
  },
  "global-invoice-parser": {
    "title": "Conversor de valor da fatura em PDF",
    "metaDescription": "Extraia valores de faturas de PDFs, converta totais entre moedas e adicione um resumo de cálculo ao documento.",
    "keywords": [
      "traduzir fatura",
      "conversor de moeda de fatura",
      "calculadora de taxa de câmbio pdf",
      "carimbo de moeda local",
      "ferramenta de fatura global"
    ],
    "description": "\n        <p>O Tradutor de Faturas Globais oferece clareza máxima para equipes financeiras internacionais e compradores globais.</p>\n        <p>O gerenciamento de faturas em várias moedas ($, €, ¥) geralmente envolve uma aritmética manual tediosa. Esta ferramenta permite a <strong>tradução de rótulos no local e a conversão de taxas de câmbio em tempo real</strong>.</p>\n        <p>Ela varre o documento em busca de totais de preços, faz cálculos com base em moedas de referência e aplica fisicamente um elegante registro de taxa de câmbio semitransparente no estilo glassmorphism na margem da página. É renderizado com um visual magnífico de números rolando, trazendo controle absoluto para o faturamento global.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar PDF da Fatura",
        "description": "Importe qualquer fatura emitida em moeda estrangeira (por exemplo, USD, EUR, JPY)."
      },
      {
        "step": 2,
        "title": "Selecionar Moeda Local",
        "description": "Escolha sua moeda local (por exemplo, BRL) e especifique uma taxa de câmbio personalizada ou em tempo real."
      },
      {
        "step": 3,
        "title": "Aplicar Carimbo de Registro",
        "description": "Clique em executar para sobrepor o registro da taxa de câmbio pronto para a contabilidade."
      }
    ],
    "useCases": [
      {
        "title": "Reembolso de Viagens de Negócios",
        "description": "Converta faturas de viagens para a moeda local e aplique carimbos de conversão, simplificando os fluxos de trabalho contábeis.",
        "icon": "plane"
      },
      {
        "title": "Auditoria de Compras Transfronteiriças",
        "description": "Traduza colunas de faturas e identifique o custo real dos bens adquiridos por e-commerce.",
        "icon": "credit-card"
      },
      {
        "title": "Contabilidade Comercial Internacional",
        "description": "Aplique registros de conversão consistentes nas faturas corporativas para agilizar as auditorias de fim de ano.",
        "icon": "folder-open"
      }
    ],
    "faq": [
      {
        "question": "Como ele detecta os valores das faturas?",
        "answer": "Ele varre o fluxo de caracteres em busca de símbolos monetários e analisa cabeçalhos semânticos como \"Total\" ou \"Vencido\" para localizar a soma final da fatura."
      },
      {
        "question": "As taxas de câmbio são buscadas em tempo real?",
        "answer": "Sim. Por padrão, ele recupera taxas base de APIs financeiras padrão. Você também pode especificar taxas personalizadas para auditorias internas."
      },
      {
        "question": "O carimbo cobrirá detalhes importantes da fatura?",
        "answer": "O mecanismo varre a margem da página para encontrar o posicionamento ideal. O carimbo é semitransparente, alinhando-se elegantemente com seus layouts."
      }
    ]
  },
  "pdf-to-cbz": {
    "title": "PDF para CBZ",
    "metaDescription": "Converta arquivos PDF em arquivos de quadrinhos CBZ. Preserva a ordem e a qualidade das imagens.",
    "keywords": [
      "pdf para cbz",
      "conversor quadrinhos",
      "cbz pdf"
    ],
    "description": "<p>PDF to CBZ foi desenvolvido sob medida para entusiastas de quadrinhos e arquivistas de e-books digitais. Ele renderiza cada página dos seus volumes PDF em gráficos rasterizados de alta fidelidade e os compila em um pacote Comic Book ZIP (.cbz) padrão.</p>\n      <p>Para eliminar a frustrante extração manual em sistemas como Calibre, Komga, Kavita ou CDisplayEx, o processador gera e injeta automaticamente os arquivos <strong>ComicInfo.xml</strong> e <strong>metadata.opf</strong> internamente, enquanto grava simultaneamente uma carga útil <strong>ComicBookInfo JSON</strong> padronizada diretamente nos metadados de comentários do arquivo ZIP.</p>\n      <p>Inclui controles deslizantes de configuração completos para qualidade de compactação de imagem, escala de dimensão de página, alternância de leitura de layout da direita para esquerda (modo Mangá) e filtragem de cores em tons de cinza em preto e branco.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar PDF de quadrinhos",
        "description": "Arraste e solte seu arquivo PDF principal de quadrinhos, artbook ou mangá."
      },
      {
        "step": 2,
        "title": "Insira metadados de quadrinhos",
        "description": "Preencha os campos Série, Volume, Título, Escritor e Editor e alterne o layout ou a otimização da escala de cinza."
      },
      {
        "step": 3,
        "title": "Compilar e baixar",
        "description": "Clique em Converter para compilar e recuperar seu arquivo .cbz rico em metadados, pronto instantaneamente para o Calibre."
      }
    ],
    "useCases": [
      {
        "title": "Embalagem de quadrinhos retrógrada",
        "description": "Transforme livros PDF digitalizados brutos em arquivos de quadrinhos CBZ compactos e compatíveis com os padrões, facilmente descartáveis pelos gerentes de bibliotecas de quadrinhos.",
        "icon": "book"
      },
      {
        "title": "Integração do Calibre com Esforço Zero",
        "description": "O esquema metadata.opf integrado permite que o Calibre busque e classifique criadores e problemas de volume sem pesquisa manual.",
        "icon": "database"
      },
      {
        "title": "Aprimoramento de tela E-Ink",
        "description": "Pré-filtre canais de cores gráficas em tons de cinza de alto contraste na compilação, aumentando a atualização visual e a clareza nas telas E-ink enquanto economiza armazenamento.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "O que é um arquivo .cbz?",
        "answer": "Um arquivo CBZ é um formato de contêiner de arquivo especializado para séries de quadrinhos. Ele é formatado internamente como um pacote ZIP contendo imagens de páginas numeradas sequencialmente junto com arquivos XML de metadados estruturais."
      },
      {
        "question": "Como os metadados são compatíveis?",
        "answer": "Compilamos e incorporamos ComicInfo.xml, metadata.opf e comentários de arquivo ZIP em uma única passagem. Isso garante conformidade absoluta em vários ecossistemas de quadrinhos e e-books."
      },
      {
        "question": "Por que usar o modo Tons de cinza?",
        "answer": "Se você lê em um leitor E-ink em escala de cinza (como Kindle ou Kobo), compilar diretamente em escala de cinza reduz o efeito fantasma do artefato, oferece níveis de contraste superiores e reduz o tamanho final do arquivo CBZ."
      }
    ]
  },
  "overlay-pdf": {
    "title": "Sobrepor PDF",
    "metaDescription": "Sobreponha duas páginas PDF em uma única página. Perfeito para adicionar carimbos, fundos e marcas d'água.",
    "keywords": [
      "sobrepor pdf",
      "pdf overlay",
      "carimbo pdf"
    ],
    "description": "<p>Overlay PDF permite sobrepor páginas de um documento PDF sobre ou abaixo de outro documento PDF. É perfeito para aplicar papéis timbrados, adicionar grades de fundo, carimbar marcas d'água ou fundir rascunhos de layout.</p>\n      <p>Suporta o modo Overlay (a camada fica por cima) e o modo Underlay (a camada fica por baixo). Especifique intervalos de páginas de destino personalizados ou faça um loop em documentos de sobreposição mais curtos para cobrir todo o arquivo base automaticamente.</p>\n      <p>Todo o processamento é executado inteiramente dentro do seu navegador localmente, garantindo total segurança e privacidade dos dados.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar PDF principal",
        "description": "Arraste e solte seu documento PDF de base primária."
      },
      {
        "step": 2,
        "title": "Carregar PDF da camada",
        "description": "Forneça o documento de sobreposição/subjacência que atua como camada."
      },
      {
        "step": 3,
        "title": "Configurar camadas",
        "description": "Escolha o modo de sobreposição ou subposição, especifique intervalos de páginas e ative o loop de páginas."
      },
      {
        "step": 4,
        "title": "Compilar e baixar",
        "description": "Clique em Compilar para processar e baixar o PDF do resultado em camadas."
      }
    ],
    "useCases": [
      {
        "title": "Papéis timbrados corporativos",
        "description": "Coloque o conteúdo da fatura sobre os modelos de papel timbrado padrão da empresa.",
        "icon": "file-text"
      },
      {
        "title": "Marcas d'água e selos",
        "description": "Sobreponha carimbos de segurança, selos de assinatura ou fundos em documentos.",
        "icon": "shield"
      },
      {
        "title": "Desenho de plantas",
        "description": "Combine projetos de arquitetura ou grades de layout abaixo dos blocos de texto.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Qual é a diferença entre Overlay e Underlay?",
        "answer": "A sobreposição coloca a camada secundária sobre o conteúdo principal. Underlay o coloca bem na parte inferior, atuando como um modelo de plano de fundo."
      },
      {
        "question": "Posso fazer um loop na camada de sobreposição?",
        "answer": "Sim, se o PDF da camada for menor que o documento base, ativar o Loop irá ciclá-lo (por exemplo, página 1, 2, 1, 2) para cobrir todas as páginas base."
      },
      {
        "question": "O intervalo de páginas é compatível?",
        "answer": "Sim, você pode direcionar páginas específicas usando sintaxe de intervalo como \"1-5\", \"ímpar\", \"par\" ou listas separadas por vírgula."
      }
    ]
  },
  "timestamp-pdf": {
    "title": "Carimbo de data e hora local em PDF",
    "metaDescription": "Esta ferramenta cria um carimbo de tempo local autoassinado usando o relógio do dispositivo. Não solicita nem verifica um carimbo da TSA selecionada.",
    "keywords": [
      "Carimbo de data e hora local em PDF",
      "PDF",
      "Hora do dispositivo"
    ],
    "description": "<p>Selecione um PDF para adicionar um carimbo de tempo local.</p><p>Esta ferramenta cria um carimbo de tempo local autoassinado usando o relógio do dispositivo. Não solicita nem verifica um carimbo da TSA selecionada.</p><p>O processamento permanece no navegador; nenhum documento ou hash é enviado a uma TSA.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar PDF",
        "description": "Selecione um PDF para adicionar um carimbo de tempo local."
      },
      {
        "step": 2,
        "title": "Nome da autoridade selecionada",
        "description": "Escolha um nome para a assinatura local. Esse nome não estabelece uma ligação a uma TSA."
      },
      {
        "step": 3,
        "title": "Adicionar carimbo de tempo local",
        "description": "Processe o ficheiro, reveja o resultado e descarregue o PDF."
      }
    ],
    "useCases": [
      {
        "title": "Rascunhos de trabalho",
        "description": "Guarde uma cópia do documento de trabalho com uma data local.",
        "icon": "file-text"
      },
      {
        "title": "Arquivos pessoais",
        "description": "Guarde uma cópia com carimbo de data e hora para consulta pessoal.",
        "icon": "archive"
      },
      {
        "title": "Inspeção da assinatura",
        "description": "Examine a assinatura gerada e os metadados num leitor de PDF.",
        "icon": "search"
      }
    ],
    "faq": [
      {
        "question": "O carimbo de data e hora é verificado de forma independente?",
        "answer": "Esta ferramenta cria um carimbo de tempo local autoassinado usando o relógio do dispositivo. Não solicita nem verifica um carimbo da TSA selecionada."
      },
      {
        "question": "Preciso de carregar um certificado digital?",
        "answer": "Não. A ferramenta gera um certificado local autoassinado para esta operação."
      },
      {
        "question": "Que relógio fornece a hora?",
        "answer": "A hora vem do relógio do dispositivo e não é verificada de forma independente."
      }
    ]
  },
  "add-page-labels": {
    "title": "Adicionar Etiquetas de Página",
    "metaDescription": "Defina etiquetas de página personalizadas (por exemplo, I, II para prefácio). Melhora a navegação do leitor.",
    "keywords": [
      "etiquetas de pagina",
      "numeracao logica pdf",
      "paginas de documento"
    ],
    "description": "<p>Adicionar rótulos de página permite que você injete metadados de rótulos de páginas personalizados (/PageLabels) no dicionário raiz do Catálogo do seu PDF. Isso personaliza os rótulos exibidos nas barras laterais de navegação do leitor de PDF profissional e nos painéis de salto de número de página superior (por exemplo, usando algarismos romanos para o assunto inicial, sequências decimais para o corpo principal ou prefixos personalizados como A-0, A-1 para subseções técnicas).</p>\n      <p>Suporta a combinação perfeita de diversas regras personalizadas. Fundamentalmente, criamos um <strong>algoritmo de divisão de faixa disjunta</strong> altamente otimizado: mesmo se você declarar padrões alternados complexos (por exemplo, páginas ímpares estilo A, páginas pares estilo B), a ferramenta dissecará e comporá limites com elegância para garantir uma exibição adequada e compatível com o padrão sem vazar formatos em páginas não mapeadas.</p>\n      <p>Todas as operações são processadas inteiramente dentro da sandbox local do seu navegador, garantindo privacidade absoluta dos dados.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar documento PDF",
        "description": "Forneça o documento PDF de destino que deseja rotular."
      },
      {
        "step": 2,
        "title": "Configurar regras de rotulagem",
        "description": "Adicione uma ou mais regras especificando intervalos de páginas (por exemplo, \"1-5\", \"ímpares\" ou listas separadas por vírgula), prefixo, estilo e sequência inicial."
      },
      {
        "step": 3,
        "title": "Visualizar e baixar",
        "description": "Revise a visualização da lista de rótulos de páginas ao vivo abaixo e, em seguida, compile e baixe seu documento PDF atualizado."
      }
    ],
    "useCases": [
      {
        "title": "Formatação de Teses Acadêmicas",
        "description": "Defina algarismos romanos minúsculos (i, ii, iii) para o assunto introdutório e faça a transição para decimal para os capítulos principais.",
        "icon": "book"
      },
      {
        "title": "Prefixos do Projeto de Engenharia",
        "description": "Anexe abreviações de subsistemas (por exemplo, \"A-1\", \"M-5\") como prefixos de rótulos de páginas, permitindo que as equipes pesquisem e localizem páginas em segundos.",
        "icon": "layout"
      },
      {
        "title": "Layouts alternativos personalizados",
        "description": "Aplique indexação de intervalo de páginas altamente específica a sequências pares/ímpares ou seções não contíguas com máxima liberdade.",
        "icon": "shuffle"
      }
    ],
    "faq": [
      {
        "question": "O que são rótulos de página versus números de página?",
        "answer": "Os números de página comuns são blocos de texto visual renderizados diretamente na tela de papel (visíveis quando impressos). Os rótulos das páginas, entretanto, são metadados estruturais injetados no catálogo PDF. Eles controlam o que é exibido abaixo das miniaturas e na caixa de pesquisa de páginas em softwares como Adobe Acrobat ou Apple Preview."
      },
      {
        "question": "O que acontece se eu deixar o intervalo de páginas vazio?",
        "answer": "Deixar o intervalo de páginas vazio faz com que a regra seja aplicada globalmente a todas as páginas do documento."
      },
      {
        "question": "Como são tratadas as regras sobrepostas?",
        "answer": "As regras são avaliadas sequencialmente na ordem em que são listadas. Se um intervalo de páginas de uma regra posterior se sobrepuser a uma regra anterior, a regra posterior terá prioridade e substituirá o rótulo dessa página."
      }
    ]
  },
  "ai-pdf-reflower": {
    "title": "Ajuste de Fluxo PDF com IA",
    "metaDescription": "Reflua o texto do PDF para facilitar a leitura no celular. Exporte o conteúdo extraído como Markdown ou EPUB no seu navegador.",
    "keywords": [
      "refluxo pdf",
      "pdf responsivo",
      "pdf para markdown",
      "exportar epub"
    ],
    "description": "<p>AI PDF Layout Reflower é seu melhor companheiro para leitura de documentos PDF em dispositivos móveis. Os PDFs tradicionais usam um layout fixo, que muitas vezes requer zoom infinito e rolagem horizontal em smartphones ou tablets, resultando em uma experiência de leitura tediosa.</p>\n      <p>Esta ferramenta analisa de forma inteligente o fluxo do texto, o espaçamento entre linhas e as coordenadas físicas das páginas PDF, reconstruindo os parágrafos semânticos e as hierarquias de títulos. Para documentos com várias ou duas colunas, ele mescla de forma inteligente os fluxos das colunas em um único fluxo responsivo, garantindo uma leitura tranquila.</p>\n      <p>Além disso, ele suporta a renderização de fórmulas matemáticas em LaTeX/MathJax e oferece vários temas de leitura (Sépia, Escuro, Verde para proteção dos olhos). Você pode exportar o layout refluído como Markdown ou um e-book EPUB padrão com um único clique.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar arquivo PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para navegar e selecioná-lo."
      },
      {
        "step": 2,
        "title": "Selecione o tema de leitura",
        "description": "Escolha o tamanho da fonte e as cores do tema de sua preferência no simulador móvel 3D à direita."
      },
      {
        "step": 3,
        "title": "Documento de Exportação",
        "description": "Quando estiver satisfeito, use a corda física para exportar o documento como Markdown ou EPUB."
      }
    ],
    "useCases": [
      {
        "title": "Leitura de literatura móvel",
        "description": "Leia artigos acadêmicos e relatórios de pesquisa em seu telefone perfeitamente, sem zoom constante.",
        "icon": "smartphone"
      },
      {
        "title": "Conversão de e-book",
        "description": "Converta PDFs com muito texto em arquivos EPUB e importe-os para o Kindle ou outros leitores de e-books.",
        "icon": "book"
      },
      {
        "title": "Arquivo de notas",
        "description": "Converta diretamente conteúdo PDF estruturado em arquivos Markdown limpos para sua base de conhecimento pessoal.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Ele lida corretamente com PDFs de duas colunas?",
        "answer": "Sim, o reflower do layout detecta as coordenadas horizontais dos blocos de texto e estrutura as colunas esquerda e direita sequencialmente, evitando a intercalação de linhas."
      },
      {
        "question": "As imagens e fórmulas matemáticas serão perdidas?",
        "answer": "As fórmulas matemáticas são convertidas para a sintaxe LaTeX/MathJax para uma renderização web limpa, e as imagens são preservadas em suas posições semânticas correspondentes."
      },
      {
        "question": "A conversão é feita na nuvem?",
        "answer": "Não, todas as análises de layout e empacotamento de formatos são realizadas localmente no seu navegador para garantir a privacidade absoluta dos seus documentos."
      }
    ]
  },
  "citation-linker": {
    "title": "Ativador de Links de Citações",
    "metaDescription": "Transforme marcadores de citação em PDFs em links DOI clicáveis ​​ou referências de página. Adicione navegação útil a documentos de pesquisa.",
    "keywords": [
      "links de citacoes",
      "hiperlink pdf",
      "correspondencia doi",
      "pdf academico"
    ],
    "description": "<p>O Citation Linker foi desenvolvido especificamente para pesquisadores acadêmicos. Em muitos artigos PDF, os marcadores de citação (por exemplo, [1], [2]) são texto simples, forçando os leitores a rolar para frente e para trás até a lista de referências no final do documento, interrompendo o foco.</p>\n      <p>Essa ferramenta lê texto PDF localmente, usa reconhecimento de padrões para combinar marcadores de citação com suas entradas de referência correspondentes e sobrepõe anotações de links de PDF clicáveis usando pesquisas DOI ou coordenadas de salto de página.</p>\n      <p>Ele também gera um mapa interativo de relacionamento de citações para navegar visualmente pela rede de referência do documento.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar PDF Acadêmico",
        "description": "Carregue um artigo ou tese em PDF contendo uma seção de bibliografia/referência."
      },
      {
        "step": 2,
        "title": "Revisar citações",
        "description": "Inspecione os pares de citações no mapa interativo e edite manualmente ou adicione links DOI, se necessário."
      },
      {
        "step": 3,
        "title": "Injetar links",
        "description": "Clique no botão ativar para sobrepor hiperlinks no PDF e baixar o documento atualizado."
      }
    ],
    "useCases": [
      {
        "title": "Leitura Profunda de Literatura",
        "description": "Clique nos marcadores de citação para visualizar imediatamente os detalhes da referência ou navegar para páginas DOI externas.",
        "icon": "link"
      },
      {
        "title": "Preparação de pré-publicação",
        "description": "Certifique-se de que seus trabalhos acadêmicos escritos tenham navegações de hiperlinks totalmente ativas antes do envio final.",
        "icon": "award"
      },
      {
        "title": "Análise do Mapa de Referência",
        "description": "Compreenda as hierarquias e conexões da literatura por meio do mapa interativo de topologia de rede.",
        "icon": "git-network"
      }
    ],
    "faq": [
      {
        "question": "E se uma referência não tiver DOI?",
        "answer": "Se um DOI não puder ser encontrado, a ferramenta volta para uma ação interna \"GoTo Page\", permitindo que você clique no marcador e vá diretamente para a página de referência."
      },
      {
        "question": "Quais formatos de citação são suportados?",
        "answer": "Suporta colchetes numéricos comuns (por exemplo, [1], [1-3]) e citações autor-ano (por exemplo, Autor et al., 202X)."
      },
      {
        "question": "Isso modificará a aparência do meu PDF?",
        "answer": "Não, ele injeta anotações de Link invisíveis na parte superior do texto, preservando o layout, as fontes e o estilo originais do seu documento."
      }
    ]
  },
  "vector-extractor": {
    "title": "Extractor de Vetores PDF",
    "metaDescription": "Extraia gráficos vetoriais de páginas PDF como SVG. Selecione gráficos, diagramas e logotipos para recolorir e exportar.",
    "keywords": [
      "extrair vetores pdf",
      "exportar svg",
      "extrair logotipo",
      "desenho vetorial"
    ],
    "description": "<p>PDF Vector Extractor desbloqueia caminhos vetoriais e ilustrações incorporadas em arquivos PDF. Extraia facilmente gráficos vetoriais, diagramas ou logotipos de documentos para trabalhos de design ou impressão.</p>\n      <p>Em segundo plano, ele utiliza renderização SVG de alta fidelidade para desconstruir caminhos vetoriais de PDF em árvores de elementos SVG padrão e limpas, sem perda de precisão.</p>\n      <p>A interface destaca elementos flutuantes com um efeito de explosão de camada 3D no eixo Z, completo com um painel de seleção de cores para que os designers ajustem e extraiam nós vetoriais.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar documento PDF",
        "description": "Carregue um PDF contendo recursos vetoriais, diagramas, gráficos ou logotipos."
      },
      {
        "step": 2,
        "title": "Selecione os elementos",
        "description": "Passe o mouse sobre a tela de vetor para destacar os elementos e clique para selecionar um nó."
      },
      {
        "step": 3,
        "title": "Personalizar e exportar",
        "description": "Ajuste os atributos do caminho no painel e baixe como SVG ou copie o código-fonte SVG."
      }
    ],
    "useCases": [
      {
        "title": "Extração de ativos de projeto",
        "description": "Extraia rapidamente logotipos, ícones e ilustrações de empresas de diretrizes de marca ou folhetos.",
        "icon": "bezier"
      },
      {
        "title": "Exportação de Gráfico Científico",
        "description": "Extraia gráficos vetoriais de artigos de pesquisa para usar em impressões ou apresentações de alta resolução.",
        "icon": "presentation"
      },
      {
        "title": "Recoloração de ativos vetoriais",
        "description": "Modifique as cores de traçado e preenchimento dos ativos extraídos antes de salvá-los para projetos da web.",
        "icon": "crown"
      }
    ],
    "faq": [
      {
        "question": "Por que não consigo selecionar determinadas imagens?",
        "answer": "Os PDFs contêm imagens rasterizadas (como fotos ou páginas digitalizadas) e arte vetorial (como formas e curvas). Somente caminhos vetoriais podem ser desconstruídos em caminhos SVG."
      },
      {
        "question": "O SVG de saída contém estilos?",
        "answer": "Sim, o SVG exportado retém todas as propriedades originais, incluindo preenchimentos, traços, opacidade, gradientes e transformações de coordenadas."
      },
      {
        "question": "Arquivos grandes ficarão atrasados?",
        "answer": "Usamos aceleração WebAssembly, mas PDFs com desenhos CAD extremamente complexos ou milhares de caminhos vetoriais podem levar alguns segundos para serem renderizados."
      }
    ]
  },
  "deep-sanitize": {
    "title": "Sanetização Profunda de Metadados",
    "metaDescription": "Remova metadados, camadas ocultas e objetos não utilizados de PDFs. Limpe as informações do documento localmente antes de compartilhar.",
    "keywords": [
      "limpar metadados pdf",
      "anonimizar pdf",
      "seguranca de documentos"
    ],
    "description": "<p>O Deep Metadata Sanitizer é sua melhor defesa contra vazamentos de metadados e rastreamento oculto. Simplesmente desenhar caixas pretas sobre texto visível em arquivos PDF não é suficiente para proteger segredos comerciais.</p>\n      <p>Esta ferramenta verifica a estrutura binária do PDF para apagar completamente as informações do autor, software de criação, registros de edição (metadados XMP), caches proprietários do PieceInfo e grupos de conteúdo opcionais do OCG (geralmente usados para marcas d'água invisíveis).</p>\n      <p>Ele também reescreve completamente as tabelas de referência cruzada (refex), descartando todos os blocos de atualização incremental para garantir que os dados históricos excluídos ou modificados não possam ser restaurados.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar PDF",
        "description": "Selecione o arquivo PDF que contém dados confidenciais ou histórico de modificações."
      },
      {
        "step": 2,
        "title": "Executar scanner",
        "description": "Acione o scanner de contenção 3D para verificar se há metadados e camadas ocultas no arquivo."
      },
      {
        "step": 3,
        "title": "Higienização Profunda",
        "description": "Clique em higienizar para eliminar os elementos de rastreamento e baixar o PDF totalmente limpo."
      }
    ],
    "useCases": [
      {
        "title": "Compartilhamento de contrato",
        "description": "Remova registros de rascunhos, caminhos e revisões anteriores antes de compartilhar contratos comerciais com terceiros.",
        "icon": "file-signature"
      },
      {
        "title": "Publicação anônima",
        "description": "Limpe anotações e marcas d'água invisíveis para publicar documentos de forma anônima e segura.",
        "icon": "eye-off"
      },
      {
        "title": "Otimização de PDF",
        "description": "Remova objetos órfãos e fluxos de dados inúteis para acelerar o carregamento dos arquivos na web.",
        "icon": "zap"
      }
    ],
    "faq": [
      {
        "question": "Qual a diferença entre isso e a remoção padrão de metadados?",
        "answer": "As ferramentas padrão limpam apenas campos básicos como título ou autor. O Deep Sanitizer reconstrói toda a tabela refex do PDF, limpando PieceInfo, marcas d’água ocultas e revisões incrementais históricas."
      },
      {
        "question": "Isso afetará o layout ou o texto do documento?",
        "answer": "Não, ele apenas remove fluxos de descrição ocultos e dados de estrutura. O layout visível, textos e gráficos permanecem inalterados."
      },
      {
        "question": "Isso remove senhas de PDF?",
        "answer": "Não, se um PDF estiver criptografado, você deverá desbloqueá-lo primeiro antes de realizar uma higienização profunda."
      }
    ]
  },
  "booklet-folding-simulator": {
    "title": "Simulador 3D de Dobra e Imposição",
    "metaDescription": "Organize páginas PDF para impressão de livretos. Visualize folhas dobradas e layouts de lombada antes de exportar seu documento pronto para impressão.",
    "keywords": [
      "imposicao 3d",
      "simulador de dobra",
      "encadernacao grampeada",
      "pre-impressao"
    ],
    "description": "<p>3D Booklet & Folding Simulator é uma ferramenta avançada projetada para designers de impressão e profissionais de publicação. O layout tradicional do livro requer o cálculo de sobreposições de páginas complexas e sequências de paginação de imposição. Esta ferramenta visualiza e automatiza todo o processo.</p>\n      <p>Nos bastidores, nosso algoritmo de imposição personalizado mapeia uma lista sequencial de páginas PDF em layouts de folhas de impressão padrão (como dobras pela metade de 4 páginas, grampeamento na sela de 8 páginas ou dobras sanfonadas), mesclando as páginas na frente e no verso de folhas físicas grandes.</p>\n      <p>No front-end, utilizamos transformações de matriz 3D CSS puras e curvas físicas de massa elástica para animar a dobragem de folhas horizontal e verticalmente, proporcionando uma visualização de encadernação semelhante à física com um alto fator WOW.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar arquivo PDF",
        "description": "Arraste e solte o documento PDF que deseja preparar para impressão."
      },
      {
        "step": 2,
        "title": "Selecione o layout de dobra",
        "description": "Escolha seu esquema de imposição preferido (por exemplo, dobra de 4 páginas, grampeamento na sela de 8 páginas, acordeão de 4 páginas)."
      },
      {
        "step": 3,
        "title": "Visualização 3D interativa",
        "description": "Arraste o controle deslizante para observar a dobra da folha em 3D e inspecionar o layout final da numeração da página."
      },
      {
        "step": 4,
        "title": "Gerar PDF imposto",
        "description": "Clique em gerar para baixar o PDF da folha física reorganizada e mesclada, pronta para impressão frente e verso."
      }
    ],
    "useCases": [
      {
        "title": "Prototipagem de folheto",
        "description": "Pré-visualize a sequência de dobras de dobras triplas e panfletos para evitar páginas invertidas após a impressão.",
        "icon": "book-open"
      },
      {
        "title": "Livro de costura em sela",
        "description": "Gere automaticamente folhas de impressão impostas para revistas ou livretos de várias páginas.",
        "icon": "layers"
      },
      {
        "title": "Recursos visuais para gráfica",
        "description": "Ajude os clientes a visualizar como as páginas são fisicamente distribuídas e dobradas nas folhas impressas.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "O que é \"Imposição\"?",
        "answer": "A imposição é uma etapa fundamental na impressão pré-impressão. Como as impressoras comerciais imprimem em folhas grandes, as páginas são organizadas fora de ordem, de modo que, depois de impressas, dobradas e encadernadas, as páginas apareçam na ordem sequencial correta. Esta ferramenta calcula automaticamente esse layout."
      },
      {
        "question": "A visualização 3D altera o conteúdo do meu PDF?",
        "answer": "Não, o conteúdo original do PDF é meramente renderizado como mapeamentos de textura na folha 3D. O PDF gerado apenas ajusta a ordem e o posicionamento das páginas; as qualidades gráficas e de texto são mantidas intactas."
      },
      {
        "question": "E se a contagem de páginas do meu PDF não for múltiplo de 4 ou 8?",
        "answer": "O otimizador anexa automaticamente páginas em branco no final para satisfazer os requisitos matemáticos de contagem de páginas do layout de dobra selecionado."
      }
    ]
  },
  "pdf-to-slide": {
    "title": "PDF para Slides",
    "metaDescription": "Converta conteúdo PDF em slides do PowerPoint. Exporte uma apresentação PPTX com texto e imagens para edição posterior.",
    "keywords": [
      "pdf para ppt",
      "criar slides",
      "conversor pptx",
      "extrair graficos"
    ],
    "description": "<p>AI PDF-to-Slide Reconstructor dá nova vida a documentos PDF estáticos, transformando-os em slides do PowerPoint (PPTX) modernos e altamente personalizáveis.</p>\n      <p>A ferramenta usa um extrator de contorno de layout avançado que analisa automaticamente os níveis de cabeçalho do documento, linhas de parágrafo e espessuras de fonte para estabelecer uma estrutura lógica de slide. Ele também isola gráficos vetoriais e tabelas de alta resolução, eliminando artefatos de fundo para incorporá-los de forma limpa como ativos editáveis independentes.</p>\n      <p>Todas as saídas PPTX são criadas usando elementos padrão do Office Open XML, o que significa que todo o texto permanece totalmente editável e os vetores não perdem resolução. O front-end apresenta uma animação fluida de transição de cartão \"starfield\" que visualiza a reconstrução de uma maneira envolvente.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar PDF Acadêmico/Comercial",
        "description": "Carregue um documento PDF que contenha seções estruturadas e diagramas."
      },
      {
        "step": 2,
        "title": "Analisar contornos de slides",
        "description": "Inspecione a estrutura do slide extraída, ajuste títulos ou exclua blocos de cartão desnecessários."
      },
      {
        "step": 3,
        "title": "Reconstruir para PPTX",
        "description": "Inicie o mecanismo de compilação para receber um arquivo de apresentação padrão e editável."
      }
    ],
    "useCases": [
      {
        "title": "Apresentação de artigo de pesquisa",
        "description": "Converta PDFs de periódicos acadêmicos, estruturas de texto e diagramas vetoriais em apresentações de slides prontas para palestras.",
        "icon": "graduation-cap"
      },
      {
        "title": "Resumo do relatório de negócios",
        "description": "Transforme instantaneamente enormes relatórios corporativos anuais em rascunhos de apresentação limpos e com marcadores.",
        "icon": "presentation"
      },
      {
        "title": "Demonstrações para vários dispositivos",
        "description": "Evite copiar capturas de tela manualmente. Obtenha uma estrutura de layout limpa e totalmente editável em segundos.",
        "icon": "laptop"
      }
    ],
    "faq": [
      {
        "question": "Os slides são editáveis no Microsoft Office?",
        "answer": "Sim. Os arquivos são gerados nativamente na memória de acordo com a especificação oficial do Office Open XML (OOXML). Textos, tabelas e espaços reservados são totalmente interativos no PowerPoint, Keynote e WPS."
      },
      {
        "question": "Como os gráficos são extraídos?",
        "answer": "O mecanismo verifica caminhos vetoriais e camadas raster no PDF, detecta áreas delimitadas que representam gráficos e os recorta como nós SVG independentes ou imagens de alto DPI."
      },
      {
        "question": "Isso funciona em documentos digitalizados?",
        "answer": "Para PDFs digitalizados sem camadas de texto reais, recomendamos executar nossa ferramenta OCR antes de passar o arquivo para o Reconstrutor de slides."
      }
    ]
  },
  "eink-optimizer": {
    "title": "Otimizador de Leitor e-Ink",
    "metaDescription": "Otimize páginas PDF para leitores e-ink. Limpe fundos, aumente o contraste do texto e ajuste documentos para facilitar a leitura.",
    "keywords": [
      "otimizar eink",
      "binarizacao otsu",
      "engrossar letra",
      "leitura e-reader"
    ],
    "description": "<p>O e-Ink Reader Optimizer é uma ferramenta indispensável feita sob medida para entusiastas de e-Reader que usam Kindle, Onyx Boox, Kobo ou outros dispositivos de papel eletrônico.</p>\n      <p>Muitos e-books em PDF digitalizados apresentam letras fracas, fundos cinza turvos, ruído ou sombras de digitalização quando visualizados em telas e-Ink. Esta ferramenta analisa histogramas de valores de cinza e aplica o Limiar de Binarização da Otsu para separar o texto do fundo, convertendo fundos cinza em branco limpo.</p>\n      <p>Além disso, integra dilatação morfológica para caracteres em negrito e espessos, finos e desbotados, proporcionando uma tipografia nítida e de alto contraste. O controle deslizante de contraste com amortecimento de inércia permite ajustar o contraste semelhante ao do papel em tempo real.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar PDF digitalizado",
        "description": "Carregue e-books ou documentos digitalizados com texto esmaecido ou fundos cinza."
      },
      {
        "step": 2,
        "title": "Ajustar controle deslizante de contraste",
        "description": "Arraste o controle deslizante amortecido para equilibrar a remoção do fundo e o negrito dos caracteres em tempo real."
      },
      {
        "step": 3,
        "title": "Otimize e baixe",
        "description": "Processe todo o PDF para gerar um documento de alto contraste e fácil de visualizar, feito sob medida para e-Ink."
      }
    ],
    "useCases": [
      {
        "title": "Restauração de Manuscritos Antigos",
        "description": "Engrosse o texto desbotado em digitalizações de livros históricos ou manuscritos manuscritos para torná-los legíveis.",
        "icon": "scroll"
      },
      {
        "title": "Limpeza da folha de exame",
        "description": "Descolorir sombras de fundo de exames fotocopiados ou fotografados, retornando texto preto limpo em papel branco.",
        "icon": "file-text"
      },
      {
        "title": "Adaptação de dispositivos de papel eletrônico",
        "description": "Converta PDFs coloridos em tons de cinza otimizados, evitando artefatos confusos e pontilhados em telas monocromáticas.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Como funciona o “negrito de caracteres”?",
        "answer": "No processamento de imagens, isso é chamado de dilatação. Ele usa uma matriz estruturante para expandir as margens dos caracteres em um pixel, engrossando fisicamente os traços fracos para torná-los legíveis."
      },
      {
        "question": "Este processo aumentará o tamanho do arquivo?",
        "answer": "Muito pelo contrário. Ao binarizar imagens complexas em cores/tons de cinza em layouts simples em preto e branco, a compactação padrão (como CCITT Grupo 4) pode reduzir significativamente o tamanho do arquivo PDF."
      },
      {
        "question": "Suporta PDFs de texto nativo?",
        "answer": "Sim. PDFs vetoriais nativos são rasterizados em alta resolução em segundo plano, otimizados e compilados novamente, garantindo uma leitura unificada de alto contraste."
      }
    ]
  },
  "cert-cryptor": {
    "title": "Cifrar Certificado",
    "metaDescription": "Criptografe e assine digitalmente documentos PDF usando certificados. Trabalhe com arquivos de certificado localmente em seu navegador.",
    "keywords": [
      "cifragem de certificados",
      "selo de lacre 3d",
      "assinatura digital",
      "pkcs7"
    ],
    "description": "<p>O 3D Wax-Seal & Certificate Cryptor oferece segurança de nível militar e estética premium de nível físico para arquivos, diplomas ou contratos corporativos confidenciais.</p>\n      <p>Tecnicamente, oferece criptografia assimétrica de chave pública: importe o certificado de chave pública de um destinatário (.cer/.crt) para bloquear o fluxo de PDF; apenas o detentor da chave privada correspondente (.pfx) pode descriptografá-lo. Ele também gera assinaturas digitais padrão PKCS#7 para garantir a integridade à prova de falsificação dos documentos.</p>\n      <p>Visualmente, apresentamos um selo físico 3D dourado ou de cera vermelha. Quando você assina, um selo lindamente renderizado desce com um som mecânico satisfatório, deixando um selo de cera 3D com variações realistas de altura mapeadas normais e escoamentos de cera na página, cercado por trilhas criptográficas brilhantes.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar PDF e certificado",
        "description": "Adicione seu PDF e importe seu certificado de assinatura (.pfx) ou o certificado público do destinatário (.cer)."
      },
      {
        "step": 2,
        "title": "Coloque o carimbo 3D",
        "description": "Arraste e localize o selo na visualização do documento e escolha um estilo de cera (por exemplo, dourado, carmesim)."
      },
      {
        "step": 3,
        "title": "Pressione e assine",
        "description": "Clique em executar para assistir à cerimônia de impressão do selo de cera 3D, gerando uma assinatura digital de nível físico."
      },
      {
        "step": 4,
        "title": "Baixe PDF seguro",
        "description": "Salve o documento de saída, agora criptograficamente bloqueado e carimbado."
      }
    ],
    "useCases": [
      {
        "title": "Diplomas e Certificados",
        "description": "Fixe distintivos de selo de cera 3D de alto valor em diplomas e prêmios digitais, respaldados por assinaturas digitais genuínas.",
        "icon": "award"
      },
      {
        "title": "Acordos Confidenciais",
        "description": "Bloqueie contratos confidenciais usando o certificado público do cliente para que apenas seu cartão de acesso físico seguro possa desbloqueá-lo.",
        "icon": "shield-alert"
      },
      {
        "title": "Comunicados de imprensa oficiais",
        "description": "Assine digitalmente anúncios públicos para evitar edições maliciosas de texto ou falsificação.",
        "icon": "stamp"
      }
    ],
    "faq": [
      {
        "question": "O selo de cera é apenas uma imagem ou uma assinatura real?",
        "answer": "Ambos. O sistema renderiza uma impressão de cera 3D incrivelmente realista com profundidade mapeada normal (camada visual) e codifica uma assinatura criptográfica PKCS#7 autêntica e inviolável dentro do PDF (camada de dados)."
      },
      {
        "question": "O que é \"criptografia baseada em certificado\"?",
        "answer": "É uma técnica de criptografia sem senha. Você criptografa o arquivo usando a chave pública do destinatário. O leitor procura automaticamente seu certificado privado local para descriptografar o arquivo perfeitamente, garantindo segurança robusta."
      },
      {
        "question": "Posso personalizar o design do carimbo?",
        "answer": "Sim. Fornecemos vários designs, como a marca d'água AwsomePDF ou o brasão Royal, e você pode ajustar o raio de fusão da cera e a profundidade de recuo do mapa normal no painel."
      }
    ]
  },
  "passport-id-composer": {
    "title": "Copiar ID Frente e Verso",
    "metaDescription": "Combine a frente e o verso de uma carteira de identidade ou passaporte em uma página PDF A4. Organize digitalizações e adicione uma marca d'água opcional.",
    "keywords": [
      "copia de identidade",
      "frente verso a4",
      "copia de passaporte",
      "marca de agua"
    ],
    "description": "<p>O Passport & ID Double-sided Composer é um utilitário de produtividade incrivelmente útil para operações comerciais e pessoais padrão.</p>\n      <p>Ao solicitar contas bancárias, integração ou assinatura de contratos, frequentemente precisamos de cópias de ambos os lados dos cartões de identificação. Esta ferramenta aceita imagens de frente/verso ou páginas PDF e as organiza com precisão em uma única página A4, em conformidade com as resoluções de layout padrão nacionais.</p>\n      <p>Além disso, você pode personalizar marcas d'água antifalsificação translúcidas sobrepostas (por exemplo, \"SOMENTE PARA INTEGRAÇÃO\") para evitar a reutilização não autorizada de documentos. Ele ainda apresenta um efeito visual da porta do scanner de varredura a laser brilhante 3D para fornecer feedback premium.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar arquivos de ID",
        "description": "Carregue fotos/digitalizações de frente e verso de sua identidade ou passaporte (até 2 arquivos)."
      },
      {
        "step": 2,
        "title": "Configurar marca d'água segura",
        "description": "Insira sobreposição de texto personalizada para restringir a replicação não autorizada de documentos."
      },
      {
        "step": 3,
        "title": "Componha e baixe",
        "description": "Clique em executar para gerar um PDF A4 de página única pronto para impressão."
      }
    ],
    "useCases": [
      {
        "title": "Envio de integração de RH",
        "description": "Alinhe rapidamente as cópias de identificação dos funcionários e aplique marcas d’água protetoras.",
        "icon": "user"
      },
      {
        "title": "Serviços governamentais e bancários",
        "description": "Prepare impressões de identificação padronizadas que atendam aos requisitos de arquivo físico.",
        "icon": "landmark"
      },
      {
        "title": "Backups de viagens",
        "description": "Organize as páginas do passaporte e os detalhes do visto em um papel A4 unificado.",
        "icon": "plane"
      }
    ],
    "faq": [
      {
        "question": "As marcas d'água bloquearão os detalhes do texto de identidade?",
        "answer": "Não. A marca d'água é renderizada com uma opacidade cuidadosamente ajustada de 15% para bloquear falsificações sem sacrificar a legibilidade dos campos de texto ou foto."
      },
      {
        "question": "O tamanho do cartão composto está correto?",
        "answer": "Sim. Ele renderiza o cartão de identificação na dimensão física padrão de 85,6 mm × 54 mm, dimensionado perfeitamente na página A4."
      },
      {
        "question": "Suporta carteira de motorista?",
        "answer": "Sim, funciona perfeitamente para qualquer verificação de identidade baseada em cartão."
      }
    ]
  },
  "annotation-exporter": {
    "title": "Exportar Anotaciones",
    "metaDescription": "Exporte comentários, notas, destaques e sublinhados em PDF para Markdown ou JSON. Organize anotações para estudo, revisão e pesquisa.",
    "keywords": [
      "exportar anotacoes pdf",
      "extrair destaques",
      "notas de leitura",
      "markdown"
    ],
    "description": "<p>O Smart Annotation Exporter é um espaço de trabalho poderoso que revela todo o valor das suas anotações em PDF.</p>\n      <p>Ao realizar revisões de literatura ou ler extensos e-books, fazemos uso intenso de destaques e post-its. Esta ferramenta desserializa o dicionário <code>/Annots</code> de PDF de baixo nível e extrai todos os realces, notas, sublinhados e marcadores de tinta desenhados à mão.</p>\n      <p>Ele alinha automaticamente os comentários com seus respectivos cabeçalhos de esboço, gerando um Markdown estruturado ou bloco de notas JSON com âncoras de referência de página. Veja seus destaques flutuarem lindamente no painel de vidro fosco do notebook.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importar PDF anotado",
        "description": "Carregue qualquer ensaio ou livro em PDF contendo sublinhados, destaques ou comentários."
      },
      {
        "step": 2,
        "title": "Configurar filtros e formato",
        "description": "Selecione os tipos de anotação que deseja extrair e escolha Markdown ou JSON."
      },
      {
        "step": 3,
        "title": "Extrair caderno",
        "description": "Clique em executar para analisar o fluxo de comentários e montar seu resumo do esboço."
      }
    ],
    "useCases": [
      {
        "title": "Síntese de literatura científica",
        "description": "Extraia notas de leitura de vários artigos em modelos Markdown para redigir revisões rápidas instantaneamente.",
        "icon": "graduation-cap"
      },
      {
        "title": "Compilação do diário de estudo",
        "description": "Colete belos insights e comentários pessoais de livros didáticos em bancos de dados Obsidian.",
        "icon": "book"
      },
      {
        "title": "Documentar auditoria colaborativa",
        "description": "Reúna as correções de revisão de diferentes membros da equipe e estabeleça listas de tarefas acionáveis.",
        "icon": "users"
      }
    ],
    "faq": [
      {
        "question": "Ele consegue extrair traços de tinta desenhados à mão do tablet?",
        "answer": "Sim. Contanto que as marcas desenhadas à mão sejam armazenadas como anotações padrão do PDF Ink, a ferramenta pode isolar e estruturar perfeitamente as posições das páginas."
      },
      {
        "question": "Por que alguns extratos destacados estão vazios?",
        "answer": "Se o PDF for uma imagem digitalizada não pesquisável e sem texto subjacente, realçará apenas as coordenadas da loja. Execute primeiro o OCR no PDF e depois extraia as anotações."
      },
      {
        "question": "Os links do Markdown voltam para o PDF?",
        "answer": "O arquivo exportado lista números de página precisos e títulos originais para facilitar a referência cruzada."
      }
    ]
  },
  "batch-watermark-remover": {
    "title": "Remover Marcas d'Água'Água em Lote",
    "metaDescription": "Remova marcas d'água de texto e imagem correspondentes de PDFs. Revise a saída para verificar se o conteúdo do documento foi preservado.",
    "keywords": [
      "remover marca de agua pdf",
      "quitar logos pdf",
      "limpeza de arquivos"
    ],
    "description": "<p>O Batch Watermark Remover é um desinfetante de PDF de última geração que limpa fisicamente os documentos.</p>\n      <p>Os removedores genéricos de marcas d'água geralmente apenas sobrepõem blocos brancos ou distorcem o espaçamento dos documentos. Esta ferramenta utiliza uma técnica robusta de <strong>Content Stream Purge</strong>.</p>\n      <p>Ele analisa os operadores de renderização de baixo nível de cada página, identifica comandos específicos de string de marca d'água (por exemplo, \"Confidencial\", \"RASCUNHO\") ou objetos de imagem de fundo e os exclui ou sobrescreve fisicamente. As marcas d'água desaparecem completamente, preservando a formatação original e a qualidade vetorial.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar arquivo com marca d’água",
        "description": "Forneça o documento PDF mostrando logotipos comerciais ou etiquetas de segurança."
      },
      {
        "step": 2,
        "title": "Definir marca d'água alvo",
        "description": "Insira a string exata a ser excluída ou alterne a limpeza da imagem translúcida do XObject."
      },
      {
        "step": 3,
        "title": "Execute a limpeza física",
        "description": "Clique em executar para limpar os operadores de conteúdo com alta fidelidade."
      }
    ],
    "useCases": [
      {
        "title": "Arquivamento de ativos corporativos",
        "description": "Remova marcas d’água expiradas de “Confidencial” ou “Rascunho” para distribuição ao público em geral.",
        "icon": "archive"
      },
      {
        "title": "Limpando a desordem do fundo",
        "description": "Remova imagens de fundo pesadas que distraem os leitores da leitura do texto.",
        "icon": "eye"
      },
      {
        "title": "Reutilização de documentos",
        "description": "Limpe os elementos antigos da marca do rodapé da página para aplicar facilmente novos modelos corporativos.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "As marcas d'água eliminadas podem ser recuperadas?",
        "answer": "Não. Ao contrário das máscaras visuais, reescrevemos o fluxo binário da página para apagar os operadores, sem deixar rastros."
      },
      {
        "question": "Suporta gradientes complexos?",
        "answer": "Se a marca d’água estiver armazenada como um nó de texto ou XObject de imagem separado, a ferramenta poderá isolá-la e apagá-la fisicamente."
      },
      {
        "question": "Modificará o texto normal da página?",
        "answer": "Não. O mecanismo de depuração tem como alvo apenas os operadores que correspondem à assinatura da marca d'água especificada; o texto normal permanece intacto."
      }
    ]
  },
  "smart-data-redactor": localizedRedactionContent('pt', 'smart-data-redactor', "Redigir Dados Sensíveis"),
  "bookmarks-auto-generator": {
    "title": "Gerar Favoritos",
    "metaDescription": "Gere marcadores de PDF a partir de títulos e padrões de texto. Adicione um esboço navegável a documentos, manuais e relatórios longos.",
    "keywords": [
      "favoritos pdf",
      "marcador de pagina",
      "indice estruturado pdf"
    ],
    "description": "<p>O Gerador Automático de Marcadores traz clareza absoluta a documentos PDF longos e não estruturados.</p>\n      <p>Escanear livros ou livretos sem navegação por esboço é doloroso. Esta ferramenta analisa hierarquias tipográficas (como tamanhos e pesos de fonte) junto com regras regex (como \"Capítulo 1\", \"Seção 1.1\") para deduzir títulos automaticamente.</p>\n      <p>Em seguida, ele compila e injeta esses títulos diretamente no dicionário <code>/Outline</code> do PDF. Qualquer visualizador padrão mostrará uma barra lateral de navegação multinível lindamente estruturada, apoiada por uma visualização interativa de árvore de contorno em 3D.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Fornece PDF não estruturado",
        "description": "Faça upload de folhetos grandes, trabalhos acadêmicos ou e-books sem barra lateral de catálogo."
      },
      {
        "step": 2,
        "title": "Ajustar regras de rumo",
        "description": "Configure estratégias especificando limites mínimos de tamanho de fonte e regras de correspondência."
      },
      {
        "step": 3,
        "title": "Construir e injetar",
        "description": "Clique em executar para renderizar os nós do contorno e escrever fisicamente os marcadores do contorno."
      }
    ],
    "useCases": [
      {
        "title": "Organização de manuais técnicos",
        "description": "Compilar automaticamente capítulos de vários níveis para diretrizes padrão, economizando horas de indexação manual.\nferramenta",
        "icon": "tool"
      },
      {
        "title": "Preparação de tese",
        "description": "Injete marcadores aninhados limpos que correspondam aos padrões exatos de envio acadêmico.",
        "icon": "graduation-cap"
      },
      {
        "title": "Otimização da navegação do e-book",
        "description": "Estruture publicações de texto digitalizado em capítulos legíveis para tablets ou leitores móveis.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Pode corresponder aos formatos de capítulo personalizados?",
        "answer": "Sim. Você pode adicionar padrões regex personalizados no painel da barra lateral (por exemplo, `^Part\\s+\\w+`) para direcionar layouts exclusivos."
      },
      {
        "question": "Isso afetará a apresentação visual da página?",
        "answer": "Não. A ferramenta adiciona apenas um catálogo interno de marcadores estruturais. O texto e os recursos visuais das páginas permanecem intactos."
      },
      {
        "question": "Quantos níveis de marcadores são suportados?",
        "answer": "A ferramenta suporta estruturas de marcadores profundamente aninhadas, permitindo layouts de capítulos, seções e subseções."
      }
    ]
  },
  "batch-barcode-injector": {
    "title": "Inserir Códigos em Lote",
    "metaDescription": "Adicione códigos QR ou códigos de barras Code 128 às páginas PDF em massa. Ajuste o posicionamento para rastreamento de documentos, etiquetas e fluxos de trabalho de impressão.",
    "keywords": [
      "inserir qr pdf",
      "codigo de barras em lote",
      "etiquetagem pdf"
    ],
    "description": "<p>O injetor de precisão Batch Barcode une o rastreamento de ativos digitais à indexação de documentos físicos.</p>\n      <p>Em armazenamento, revisão de contratos ou logística, muitas vezes precisamos carimbar códigos de barras exclusivos em faturas ou cartões de dispositivos. Esta ferramenta torna tudo incrivelmente fácil.</p>\n      <p>Gere códigos QR ou códigos de barras Code128 altamente legíveis e use nosso lindo espaço de trabalho de alinhamento com guias de laser verdes para posicioná-los. Um bipe de áudio de varredura limpa é acionado no posicionamento, fornecendo feedback altamente premium.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar documento",
        "description": "Arraste e solte PDFs de uma ou várias páginas representando contratos ou listas de remessa."
      },
      {
        "step": 2,
        "title": "Coordenadas do código de barras de posição",
        "description": "Defina o tipo de código, valor e arraste a caixa de posicionamento para especificar as coordenadas."
      },
      {
        "step": 3,
        "title": "Selos e download",
        "description": "Clique em executar para renderizar a camada de código nos índices da página de destino."
      }
    ],
    "useCases": [
      {
        "title": "Rastreamento de validação de contrato",
        "description": "Aplique um código QR exclusivo mostrando detalhes antifalsificação no cabeçalho dos contratos.",
        "icon": "file-check"
      },
      {
        "title": "Codificação de listas de remessa",
        "description": "Coloque códigos de barras Code128 em pontos-alvo para validação rápida de armas de varredura de armazém.",
        "icon": "truck"
      },
      {
        "title": "Cartão de registro de ativos",
        "description": "Adicione códigos QR de inventário exibindo especificações de manutenção em planilhas de equipamentos físicos.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Os códigos de barras gerados são altamente escaneáveis?",
        "answer": "Sim. Incorporamos representações PNG de alta resolução sem perdas que permanecem nítidas mesmo quando impressas em dimensões muito pequenas."
      },
      {
        "question": "Posso injetar valores únicos em cada página?",
        "answer": "Atualmente, a execução em lote aplica o mesmo código configurado em todas as páginas selecionadas. A importação de Excel com vários valores está planejada em uma atualização futura."
      },
      {
        "question": "O que a coordenada `pt` representa?",
        "answer": "`pt` (Ponto) é a unidade física padrão do PDF (72 pt = 1 polegada). As páginas A4 são representadas como 595 × 842 pt."
      }
    ]
  },
  "signature-ink-optimizer": {
    "title": "Extrair Assinaturas",
    "metaDescription": "Extraia uma assinatura ou carimbo de uma foto e remova seu fundo. Baixe um PNG transparente para uso em documentos.",
    "keywords": [
      "extrair assinatura",
      "digitalizar carimbo",
      "png fundo transparente"
    ],
    "description": "<p>O Signature & Stamp Chroma Ink Optimizer funciona como um purificador de tinta profissional de alta fidelidade.</p>\n      <p>Assinaturas ou selos corporativos capturados em telefones geralmente apresentam coloração amarelada do papel, sombras irregulares e rugas nas páginas. Colá-los diretamente em PDFs de contrato parece amador.</p>\n      <p>Esta ferramenta separa o canal Alfa com base na luminância e no espaço de cores. Ele branqueia completamente os fundos de papel enquanto torna o vermelho do carimbo mais nítido (tinta cromada) e a caligrafia preta. O resultado é um carimbo PNG transparente e premium com texturas de tinta genuínas.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar foto do selo",
        "description": "Forneça uma foto capturada por telefone de sua assinatura ou selo."
      },
      {
        "step": 2,
        "title": "Ajuste os controles deslizantes de limpeza",
        "description": "Mova os controles deslizantes de contraste e luminância para isolar o ruído de fundo em tempo real."
      },
      {
        "step": 3,
        "title": "Baixe assinatura limpa",
        "description": "Exporte como PNG transparente pronto para ser carimbado em contratos formais de documentos."
      }
    ],
    "useCases": [
      {
        "title": "Preparação profissional de assinatura eletrônica",
        "description": "Converta fotos de assinatura cinza em camadas lindas e transparentes para assinar acordos.",
        "icon": "file-signature"
      },
      {
        "title": "Higienização de selos corporativos",
        "description": "Limpe as digitalizações de carimbos físicos descartando o ruído da fibra do papel e preparando selos de carimbo transparentes e nítidos.",
        "icon": "stamp"
      },
      {
        "title": "Extração de linhas desenhadas",
        "description": "Isole traços pretos de cadernos de desenho para fluxos de trabalho fáceis de colorir no Photoshop.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "Como a extração Alpha autoadaptável difere da codificação normal?",
        "answer": "O chroma key padrão geralmente faz com que os detalhes do traço característico pareçam bloqueados e pixelados. Nosso algoritmo isola apenas o ruído de fundo branco/amarelo e suaviza as bordas da tinta."
      },
      {
        "question": "Quais formatos de imagem são suportados?",
        "answer": "Suportamos JPG, JPEG e PNG. Para obter melhores resultados, capture sua foto exclusiva sob iluminação forte e uniforme."
      },
      {
        "question": "Os detalhes da caligrafia serão modificados?",
        "answer": "Não. A filtragem de pixels atua nas coordenadas originais, aprimorando o contraste enquanto mantém texturas de traçado genuínas."
      }
    ]
  },
  "dead-link-debugger": {
    "title": "Reparar Links Quebrados",
    "metaDescription": "Inspecione hiperlinks de PDF e substitua destinos corrompidos ou desatualizados. Digitalize as anotações do link e salve o documento atualizado.",
    "keywords": [
      "links quebrados pdf",
      "corrigir url pdf",
      "verificar hiperlinks"
    ],
    "description": "<p>O Dead Link Debugger é um editor estrutural profundo que garante a qualidade da interação do link em arquivos publicados.</p>\n      <p>URLs quebradas (404/500) em manuais, whitepapers ou guias reduzem a autoridade da marca. Esta ferramenta permite gerenciar o banco de dados de hiperlinks de maneira integrada.</p>\n      <p>Ele analisa os dicionários <code>/Link</code> de baixo nível em cada página, investiga-os e exibe o status do link em uma grade interativa (vermelho para links inativos, laranja para redirecionamentos). Basta digitar o URL de redirecionamento atualizado e a ferramenta grava o novo destino diretamente no fluxo binário do PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Fornecer documento de destino",
        "description": "Carregue o manual ou catálogo em PDF contendo links para depuração."
      },
      {
        "step": 2,
        "title": "Digitalizar e atualizar",
        "description": "Deixe o depurador extrair todas as entidades URL. Insira novos URLs de redirecionamento para itens quebrados."
      },
      {
        "step": 3,
        "title": "Salvar atualizações de redirecionamento",
        "description": "Clique em executar para reescrever as ações /URI e baixar o PDF corrigido."
      }
    ],
    "useCases": [
      {
        "title": "Hotfix de links quebrados de folheto",
        "description": "Corrija instantaneamente URLs errados em folhetos publicados sem reabrir os editores de design originais.",
        "icon": "refresh-cw"
      },
      {
        "title": "Verificação de links bibliográficos",
        "description": "Verificar links de bibliografias acadêmicas em relatórios, atualizando referências para manter a autoridade.",
        "icon": "book"
      },
      {
        "title": "Atualizações de reformulação da marca corporativa",
        "description": "Atualização em lote de URLs antigos em PDFs corporativos quando os nomes de domínio da empresa são alterados.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Por que a acessibilidade do link não é totalmente verificada online?",
        "answer": "Os navegadores da Web impõem políticas rígidas de CORS que bloqueiam a verificação direta de links de múltiplas origens. Nossa ferramenta lista os links de forma clara e permite corrigi-los manualmente."
      },
      {
        "question": "Isso modificará a representação visual do texto na página?",
        "answer": "Não. Ele apenas altera a ação de navegação `/URI` subjacente. O texto do link visual permanece inalterado."
      },
      {
        "question": "Suporta modificação de marcadores de páginas internas?",
        "answer": "Esta ferramenta lida com hiperlinks externos `/URI`. Para navegação no layout interno, use nossa ferramenta TOC interativa."
      }
    ]
  },
  "interactive-toc-generator": {
    "title": "Gerar Sumário Interativo",
    "metaDescription": "Adicione um índice clicável ao seu PDF. Crie links de capítulos e retorne a navegação para facilitar a navegação nos documentos.",
    "keywords": [
      "sumario interativo pdf",
      "tabela de conteudo",
      "links de retorno sumario"
    ],
    "description": "<p>O Interactive TOC Builder apresenta uma experiência de navegação revolucionária em PDFs extensos.</p>\n      <p>Folhear centenas de páginas em documentos não estruturados para localizar os capítulos alvo é frustrante. Esta ferramenta apresenta a <strong>compilação bidirecional de TOC</strong>.</p>\n      <p>Ele verifica os cabeçalhos e gera uma página de índice premium inspirada em origami, inserida logo após a capa. Além de criar links clicáveis ​​/GoTo para cada linha do índice, ele injeta uma pequena e elegante âncora flutuante \"TOC ↩\" no canto de cada página do capítulo de destino. Os leitores podem ir e voltar instantaneamente, desfrutando de uma navegação semelhante à da Web.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Fornecer documento PDF",
        "description": "Carregue um relatório, e-book ou proposta que precise de um catálogo interativo."
      },
      {
        "step": 2,
        "title": "Definir título e índice do sumário",
        "description": "Personalize o título principal e escolha o índice da página para inserir a página do TOC."
      },
      {
        "step": 3,
        "title": "Tecer âncoras e economizar",
        "description": "Clique em executar para compilar as páginas e escrever a navegação de link duplo."
      }
    ],
    "useCases": [
      {
        "title": "Polimento do relatório corporativo anual",
        "description": "Injete uma bela página de índice após a folha de rosto para permitir que os acionistas saltem entre os gráficos financeiros.",
        "icon": "file-bar"
      },
      {
        "title": "Indexação de teses",
        "description": "Compila rapidamente índices padrão alinhados com as regras de formatação da universidade.",
        "icon": "bookmark"
      },
      {
        "title": "Navegação manual de operação",
        "description": "Ajude os leitores do manual a saltar rapidamente das planilhas de solução de problemas para o sumário principal.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Como funcionam as âncoras bidirecionais?",
        "answer": "Criamos anotações de link padrão na página TOC direcionadas às respectivas páginas; em seguida, incorporamos um link para a página do sumário em todas as folhas dos capítulos alvo."
      },
      {
        "question": "A inserção da página do índice quebrará os números de páginas existentes?",
        "answer": "Não. O compilador considera o deslocamento da página TOC recém-inserida, garantindo o alinhamento de todos os destinos de destino."
      },
      {
        "question": "A página do sumário é válida quando impressa fisicamente?",
        "answer": "Sim. O sumário gerado lista números de páginas físicas limpas para orientar os leitores de papel e, ao mesmo tempo, ativar links clicáveis ​​na tela."
      }
    ]
  },
  "pdf-deskew-aligner": {
    "title": "Corrigir Inclinação de Digitalizações",
    "metaDescription": "Detecta linhas de texto inclinadas localmente e ajusta o conteúdo corrigido à página original.",
    "keywords": [
      "endireitar pdf digitalizado",
      "corrigir inclinacao",
      "deskew automatico"
    ],
    "description": "\n      <p>Detecta linhas de texto inclinadas localmente e ajusta o conteúdo corrigido à página original.</p>\n      <p>Páginas em branco, digitalizações incertas e páginas com anotações permanecem inalteradas.</p>\n      <p>Resoluções mais altas demoram mais. Páginas muito grandes usam uma resolução de análise menor.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Fornece PDF distorcido",
        "description": "Carregue qualquer folha PDF contendo documentos digitalizados girados ou mal alinhados."
      },
      {
        "step": 2,
        "title": "Configurações de alinhamento",
        "description": "Resolução de análise · Ângulo máximo de correção"
      },
      {
        "step": 3,
        "title": "Analisar e endireitar",
        "description": "Baixar · PDF alinhado"
      }
    ],
    "useCases": [
      {
        "title": "Arquivamento de recebimento e contrato",
        "description": "Endireite digitalizações rápidas de contratos móveis antes de salvá-las como arquivos PDF digitais formais.",
        "icon": "file-text"
      },
      {
        "title": "Digitalização de livros acadêmicos",
        "description": "Higienize digitalizações de livros em microfilme onde as linhas de texto saem das margens horizontais.",
        "icon": "book"
      },
      {
        "title": "Avaliação do dever de casa do aluno",
        "description": "Corrija instantâneos dos trabalhos de casa tirados pelos telefones dos alunos, relaxando os olhos dos professores que avaliam.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Como a distorção do documento é detectada?",
        "answer": "Detecta linhas de texto inclinadas localmente e ajusta o conteúdo corrigido à página original."
      },
      {
        "question": "Este processo cortará as bordas da página?",
        "answer": "Detecta linhas de texto inclinadas localmente e ajusta o conteúdo corrigido à página original."
      },
      {
        "question": "Suporta documentos preenchidos com diagramas?",
        "answer": "Páginas em branco, digitalizações incertas e páginas com anotações permanecem inalteradas."
      }
    ]
  },
  "pdf-two-column-reflower": {
    "title": "Reorganizar PDFs de Duas Colunas",
    "metaDescription": "Transforme documentos PDF de duas colunas em uma única coluna para facilitar a leitura móvel. Ajuste documentos acadêmicos para telas menores.",
    "keywords": [
      "coluna dupla para uma",
      "refluxo de artigos",
      "divisao de cropbox"
    ],
    "description": "<p>O Academic Two-Column Reflower resolve o problema mais significativo da pesquisa digital: a leitura de artigos em telas móveis padrão.</p>\n      <p>Layouts de coluna dupla (usados pelo IEEE, ACM, Nature e pelos principais relatórios) são projetados para papel A4. Navegá-los nas telas dos telefones ou dispositivos Kindle requer zoom constante, arrastar para a direita, rolar para baixo e voltar para cima. Isso quebra completamente a compreensão da leitura.</p>\n      <p>Nosso processador implementa um <strong>refluxo de parágrafo inteligente e varredura de barreira de partição vertical</strong>. Ele analisa as coordenadas dos caracteres para mapear calhas de coluna dupla, divide o layout e tece segmentos verticalmente (primeiro a coluna da esquerda, depois a direita). Gráficos, fórmulas e títulos são reorganizados perfeitamente em um PDF de rolagem vertical fluido e de coluna única.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar PDF de coluna dupla",
        "description": "Forneça o relatório do diário IEEE/ACM ou a folha PDF com várias colunas."
      },
      {
        "step": 2,
        "title": "Inspecione a calha da partição",
        "description": "Verifique as guias vermelhas da fatia da partição vertical. Ajuste as margens para evitar elementos sobrepostos."
      },
      {
        "step": 3,
        "title": "Refluir e salvar",
        "description": "Clique em executar para compilar as páginas em layouts fluidos e fazer download instantaneamente."
      }
    ],
    "useCases": [
      {
        "title": "Importação de livros do e-Reader",
        "description": "Converta ensaios densos de coluna dupla em documentos confortáveis de coluna única, combinando com as telas Kindle e Onyx.",
        "icon": "tablet"
      },
      {
        "title": "Leitura do telefone do metrô",
        "description": "Leia literatura de pesquisa confortavelmente com gestos de deslizamento vertical com uma só mão durante o trânsito.",
        "icon": "smartphone"
      },
      {
        "title": "Formatação de diário de arquivo",
        "description": "Modernizar jornais antigos de colunas estreitas em formatos web legíveis e de coluna única.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "Como são tratados os gráficos e equações gerais?",
        "answer": "Nosso mecanismo aplica \"detecção de elemento span\". Quando uma equação ou diagrama excede a largura normal da coluna, ele é isolado como um item de largura total, mantendo as proporções originais sem cortes."
      },
      {
        "question": "Isso modificará a resolução do texto vetorial?",
        "answer": "De jeito nenhum. Reescrevemos as matrizes de transformação de objetos de texto PDF no nível da árvore de objetos em vez de rasterizá-las, o que significa que o texto permanece 100% vetorial e totalmente selecionável."
      },
      {
        "question": "Isso funciona em documentos de imagem digitalizados?",
        "answer": "Para PDFs baseados em imagens planas, é altamente recomendável executar nossa ferramenta OCR antes de executar o processo de Reflow."
      }
    ]
  },
  "pdf-page-resizer-uniform": {
    "title": "Uniformizar Tamanho de Páginas",
    "metaDescription": "Redimensione páginas PDF mistas para um tamanho uniforme. Normalize páginas A4, A3 e Letter com escala proporcional e margens centralizadas.",
    "keywords": [
      "uniformizar paginas pdf",
      "ajustar tamanho para a4",
      "centralizar folha pdf"
    ],
    "description": "<p>O redimensionador de PDF multiformato é o padronizador definitivo para documentos corporativos desordenados e incompatíveis.</p>\n      <p>A combinação de faturas, contratos e gráficos complementares geralmente resulta em um PDF contendo enormes páginas contábeis A3, contratos padrão A4 e envelopes tamanho Carta. Folheá-los é altamente perturbador, e enviá-los para impressoras físicas de escritório geralmente causa erros de atolamento devido à incompatibilidade de tamanho.</p>\n      <p>Esta ferramenta reescreve as grades <code>/MediaBox</code> e <code>/CropBox</code> de baixo nível em cada página. Ele mapeia larguras e alturas existentes, dimensiona as páginas originais proporcionalmente para corresponder às predefinições de destino (por exemplo, A4 padrão) e introduz margens circundantes elegantes e consistentes, fazendo com que todo o arquivo pareça incrivelmente polido.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Fornece PDF de tamanhos mistos",
        "description": "Carregue um documento PDF mesclado contendo tamanhos de página incompatíveis e confusos."
      },
      {
        "step": 2,
        "title": "Escolha a predefinição de destino",
        "description": "Selecione o tamanho uniforme alvo (por exemplo, A4, Carta, A3) e alterne os modos de escala."
      },
      {
        "step": 3,
        "title": "Alinhar e baixar",
        "description": "Clique em executar para acionar o alinhamento da folha 3D, baixando um PDF lindamente padronizado."
      }
    ],
    "useCases": [
      {
        "title": "Propostas de RFP corporativas",
        "description": "Padronizar certificados de qualificação digitalizados e folhas de licitação A4 antes da impressão física.",
        "icon": "file-text"
      },
      {
        "title": "Integração de gráfico financeiro",
        "description": "Transforme amplos fluxos de caixa financeiros A3 em páginas A4 organizadas, preservando os padrões de impressão.",
        "icon": "layout"
      },
      {
        "title": "Padronização da margem contábil",
        "description": "Force páginas digitalizadas de livros ligeiramente variadas em uma dimensão absolutamente uniforme para uma leitura confortável.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Isso distorcerá meu conteúdo?",
        "answer": "Nunca. Oferecemos suporte para \"Conter\" (escala proporcional com barras brancas) e \"Cobrir\" (corte centralizado). O modo Conter padrão preserva as proporções, evitando distorções."
      },
      {
        "question": "Os formulários e anotações existentes permanecerão clicáveis?",
        "answer": "Sim. O algoritmo mapeia os fatores de escala para as matrizes de coordenadas da anotação, caixas de links de escala, limites de sinais e entradas para alinhar perfeitamente após o redimensionamento."
      },
      {
        "question": "Existe um limite de quantas páginas posso redimensionar?",
        "answer": "Não. Como todas as operações são executadas localmente na sandbox do cliente usando JavaScript nativo, você pode processar PDFs extensos contendo centenas de páginas em segundos."
      }
    ]
  },
  "handwriting-ink-contrast-booster": {
    "title": "Melhorar Contraste de Manuscritos",
    "metaDescription": "Melhore o contraste da escrita manual e da assinatura em imagens digitalizadas. Reduza o ruído de fundo do papel e facilite a leitura da tinta.",
    "keywords": [
      "melhorar escrita manual",
      "limpar fundo escaneado",
      "contraste de assinatura"
    ],
    "description": "<p>O Handwriting Ink Contrast Booster é um salvador para a digitalização de acordos assinados e arquivos históricos de manuscritos.</p>\n      <p>As digitalizações de documentos assinados à mão geralmente parecem opacas devido ao reflexo cinza do vidro do scanner, à tonalidade amarela do papel ou à tinta desbotada. A reimpressão ou fotocópia desses arquivos resulta em assinaturas borradas e ilegíveis. As ferramentas de contraste tradicionais escurecem todo o fundo, piorando o layout.</p>\n      <p>Esta ferramenta utiliza **Equalização de histograma adaptativo limitado por contraste (CLAHE) e separação de cores baseada em matiz**. Em um processo Canvas local seguro, ele isola traços de escrita (preto e azul) do pergaminho de fundo, descolore completamente as rugas de sombra e infunde tintas desbotadas com contraste profundo e saturado, deixando seus documentos com uma aparência incrivelmente nítida e limpa.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importar documento assinado à mão",
        "description": "Forneça um PDF contendo assinaturas desbotadas, diários manuscritos ou esboços."
      },
      {
        "step": 2,
        "title": "Configurar filtro de tinta",
        "description": "Selecione o perfil de cor a ser isolado (por exemplo, tinta azul, tinta preta ou ambos) e ajuste a nitidez."
      },
      {
        "step": 3,
        "title": "Afiar e baixar",
        "description": "Clique em executar para traçar cores com efeito de scanner de radar e baixar o PDF purificado."
      }
    ],
    "useCases": [
      {
        "title": "Reparo de Contratos Executados",
        "description": "Repare acordos mal digitalizados, tornando as assinaturas mais nítidas e descolorindo o fundo do papel para branco puro A4.",
        "icon": "file-check"
      },
      {
        "title": "Arquivo de manuscritos manuscritos",
        "description": "Digitalize diários ou diários escritos, extraindo traços pretos claros enquanto apaga manchas relacionadas à idade.",
        "icon": "book"
      },
      {
        "title": "Restauração do livro-razão histórico",
        "description": "Restaure detalhes de tinta fraca em livros de arquivo antigos, resgatando valiosas coordenadas manuscritas.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Como isso difere da conversão normal em escala de cinza?",
        "answer": "A escala de cinza converte sombras do papel em valores de cinza. Nosso algoritmo adaptativo separa a luminância do fundo e isola os \"espectros de tinta\" exclusivos, purificando o fundo para um branco absoluto e deixando as bordas do traço nítidas."
      },
      {
        "question": "Perderei a textura do traço manuscrito?",
        "answer": "Não. O algoritmo CLAHE funciona em nível de subpixel, preservando a pressão natural do traço da caneta, o desbotamento da tinta e a espessura dinâmica das linhas."
      },
      {
        "question": "Posso manter selos corporativos vermelhos?",
        "answer": "Sim. Ao ativar a \"Preservação de tinta Chroma\", o intensificador clareia o fundo do papel e escurece a escrita, enquanto mantém as cores brilhantes dos selos vermelhos e das assinaturas em tinta azul."
      }
    ]
  },
  "pdf-spine-bookbinder": {
    "title": "Calcular Largura da Lombada",
    "metaDescription": "Calcule a largura da lombada do livro a partir da contagem de páginas e da gramatura do papel. Gere um modelo de capa imprimível com linhas de dobra na lombada.",
    "keywords": [
      "calcular lombada livro",
      "grosor de lombada",
      "plantilha de capa pdf"
    ],
    "description": "<p>O PDF Spine Bookbinder é um salvador da pré-impressão para designers, autores de autopublicação e equipes de licitações comerciais.</p>\n      <p>Ao compilar catálogos de livros grossos, propostas de licitação ou diretórios anuais, a encadernação perfeita (encadernação com cola) requer uma capa com coordenadas precisas da lombada. Se a largura da lombada for inferior a 1 mm, a capa encadernada ficará deformada, deslocada ou vincada. Calcular contagens de páginas em relação à gramatura do papel é complexo e sujeito a erros.</p>\n      <p>Essa ferramenta utiliza uma <strong>biblioteca GSM de espessura de papel modelada fisicamente</strong>. Basta inserir a contagem de páginas do PDF e selecionar o tipo de papel (por exemplo, 80 GSM offset, 100 GSM brilhante). O mecanismo calcula a largura da lombada em micrômetros e compila um PDF de capa extralargo pronto para impressão, completo com abas frontais/traseiras padrão e vincos precisos nas marcas de dobra.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Definir páginas e tipo de estoque",
        "description": "Insira a contagem de páginas do documento e selecione as especificações do estoque de papel de destino."
      },
      {
        "step": 2,
        "title": "Insira o texto da lombada",
        "description": "Insira títulos de livros, detalhes do autor e personalize fundos de lombada/capa."
      },
      {
        "step": 3,
        "title": "Visualização e exportação 3D",
        "description": "Gire e inspecione a capa do seu livro em um fichário 3D interativo. Exporte PDF vetorial de alta resolução."
      }
    ],
    "useCases": [
      {
        "title": "Propostas de licitação espessas",
        "description": "Projete folhas de rosto profissionais com alinhamentos precisos das dobras da lombada para propostas grossas.",
        "icon": "layers"
      },
      {
        "title": "Encadernação de capa dura de tese",
        "description": "Mapeie larguras perfeitas de layout de lombada para teses universitárias de mestrado/doutorado.",
        "icon": "award"
      },
      {
        "title": "Capas de romances de autopublicação",
        "description": "Calcule facilmente a largura da lombada do livro antes de enviar arquivos para serviços de publicação de impressão sob demanda.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "Quão preciso é o cálculo da espessura do papel GSM?",
        "answer": "Altamente preciso. Nossa biblioteca de física corresponde às médias da indústria (por exemplo, 70 GSM = 0,09 mm, 80 GSM = 0,10 mm, 150 GSM brilhante = 0,125 mm). Também incluímos um botão de alternância \"Impressão frente e verso\" para reduzir os cálculos pela metade automaticamente."
      },
      {
        "question": "As capas exportadas estão prontas para impressão direta?",
        "answer": "Sim. Os arquivos são PDFs com vetores perfeitos, contendo marcas de registro padrão, barras coloridas e guias de lombada, totalmente compatíveis com impressoras comerciais offset e digitais."
      },
      {
        "question": "Posso fazer upload de uma imagem de fundo abrangendo a lombada?",
        "answer": "Sim. Você pode fazer upload de layouts personalizados e nosso compositor irá agrupar e alinhar os gráficos nas dobras da lombada automaticamente."
      }
    ]
  },
  "pdf-signature-anchor-helper": {
    "title": "Guia de Posição de Assinatura",
    "metaDescription": "Coloque guias de assinatura em páginas PDF usando coordenadas X/Y. Visualize suas posições antes de salvar o documento atualizado.",
    "keywords": [
      "ancora de assinatura",
      "marcador de assinatura pdf",
      "guia de signatario"
    ],
    "description": "<p>O PDF Signature Guide Injector garante fluxos de trabalho de assinatura limpos e sem erros para contratos de várias páginas.</p>\n      <p>Ao enviar contratos de NDA de várias páginas, demonstrações financeiras ou arrendamentos comerciais, os clientes muitas vezes perdem caixas de assinatura críticas, exigindo ciclos intermináveis de e-mails e transações comerciais atrasadas.</p>\n      <p>Nossa ferramenta usa <strong>mapeamento semântico de regex natural</strong>. Ele verifica o mapa de caracteres do PDF para localizar termos como <code>Assinatura:</code>, <code>签字：</code>, <code>Testemunha:</code> ou <code>签署日期：</code>. Em seguida, ele aproveita <code>pdf-lib</code> para injetar anotações de link interativas em PDF padrão. Quando aberto em qualquer leitor padrão, os clientes veem setas piscantes com bordas neon que os guiam instantaneamente para as caixas corretas, tornando a assinatura infalível.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Contrato comercial de importação",
        "description": "Carregue o contrato em PDF ou NDA que precisa de coordenadas de assinatura."
      },
      {"step":2,"title":"X / Y","description":"Clique na pré-visualização real do PDF ou introduza as coordenadas X e Y da página selecionada."},
      {"step":3,"title":"Processar","description":"Processe o ficheiro, reveja o resultado e descarregue o PDF."},
    ],
    "useCases": [
      {
        "title": "Acordos Corporativos de NDA",
        "description": "Injete guias claras e piscantes ao lado dos blocos de sinalização para evitar que os funcionários de integração percam cláusulas.",
        "icon": "file-text"
      },
      {
        "title": "Contratos de Locação Comercial",
        "description": "Oriente vários fiadores por meio de documentos imobiliários de várias páginas com guias de cores personalizadas.",
        "icon": "users"
      },
      {
        "title": "Assinaturas de ordem de compra de compras",
        "description": "Sobreponha indicadores interativos em faturas e pedidos de compra para acelerar os ciclos de aprovação contábil.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Esses guias aparecerão quando eu imprimir o contrato?",
        "answer": "Não. As âncoras são injetadas com o sinalizador padrão do PDF `Printable` definido como falso. Eles são exibidos lindamente em telas de computadores/tablets, mas permanecem completamente invisíveis quando impressos."
      },
      {
        "question": "Os clientes podem alternar facilmente entre os campos de assinatura?",
        "answer": "Sim. Tecemos âncoras internas bidirecionais. Os clientes podem clicar no marcador \"Guia de assinatura\" para pular automaticamente para o próximo slot de assinatura vazio."
      },
      {
        "question": "Isso funciona em documentos de imagem digitalizados?",
        "answer": "Sim. Além de procurar fluxos de texto, nosso analisador de layout espacial estima linhas de assinatura com base em regras horizontais e caixas delimitadoras em folhas digitalizadas."
      }
    ]
  },
  "pdf-lossless-slicer": {
    "title": "Recorte de Plantas sem Perdas",
    "metaDescription": "Corte uma região de um desenho, mapa ou gráfico PDF usando coordenadas precisas. Preserve o conteúdo vetorial no PDF exportado.",
    "keywords": [
      "cortar plantas pdf",
      "corte vetorial sem perdas",
      "cropbox desenho"
    ],
    "description": "<p>O PDF Lossless Drawing Slicer é uma ferramenta cirúrgica de alta precisão desenvolvida para arquitetos, engenheiros e detalhadores de mapas.</p>\n      <p>Ao extrair uma sala de bombas ou núcleo de chip específico de um enorme projeto de engenharia CAD ou PDF de mapa geográfico, as capturas de tela tradicionais resultam em texto pixelizado e borrado. As ferramentas normais de corte simplesmente colocam uma máscara sobre a planilha, o que significa que o enorme arquivo de 100 MB permanece enorme e o conteúdo oculto ainda pode ser extraído.</p>\n      <p>Esta ferramenta edita as matrizes de página <code>/MediaBox</code>, <code>/CropBox</code> e <code>/BleedBox</code> no nível da árvore de objetos. Ele isola fisicamente os nós vetoriais fora da região selecionada, mantendo a área de destino 100% perfeita como vetor (permitindo ampliação de zoom infinita) enquanto elimina caminhos e imagens redundantes fora da tela para reduzir o tamanho do arquivo em 95%!</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importar projeto grande",
        "description": "Carregue o CAD rico em vetores, o mapa GIS ou o catálogo em PDF de alta resolução."
      },
      {"step":2,"title":"Retângulo de recorte","description":"Introduza X, Y, largura e altura e verifique a página selecionada na pré-visualização."},
      {"step":3,"title":"Processar","description":"Processe o ficheiro, reveja o resultado e descarregue o PDF."},
    ],
    "useCases": [
      {
        "title": "Isolamento de projeto CAD",
        "description": "Corte um detalhe do \"sistema de resfriamento\" de um enorme projeto de planta baixa de 100 MB para compartilhar com os subcontratados.",
        "icon": "crop"
      },
      {
        "title": "Recorte de mapa GIS",
        "description": "Extraia um bloco sem perdas e com vetor claro de um mapa de ruas de uma cidade para um slide de apresentação sem perda de resolução.",
        "icon": "map"
      },
      {
        "title": "Rastreamento manual de ilustração",
        "description": "Figuras de livros científicos isoladas sem perdas para serem incorporadas em trabalhos acadêmicos de alta qualidade.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Qual a diferença entre isso e o corte padrão?",
        "answer": "O corte padrão apenas ajusta os limites visuais; os vetores ocultos permanecem no arquivo. Nosso slicer corta caminhos vetoriais sobrepostos e elimina imagens XObject fora dos limites, garantindo isolamento completo de dados e compactação máxima de arquivos."
      },
      {
        "question": "As camadas de texto permanecerão pesquisáveis?",
        "answer": "Sim. Quaisquer caracteres de texto que estejam dentro do limite fatiado permanecem totalmente transparentes, pesquisáveis ​​e selecionáveis."
      },
      {
        "question": "Posso exportar regiões fatiadas para SVG?",
        "answer": "A saída é um PDF vetorial padronizado. Você pode passar o arquivo resultante para nossa ferramenta PDF para SVG para convertê-lo em um formato gráfico vetorial escalonável na web."
      }
    ]
  },
  "pdf-scratchpad-canvas": {
    "title": "Tela de Notas Quadriculada",
    "metaDescription": "Adicione margens de grade, pautadas ou notas Cornell às páginas PDF. Crie espaço extra para escrever notas de estudo, cálculos e preparação para exames.",
    "keywords": [
      "margem de notas pdf",
      "papel quadriculado pdf",
      "tela de escrita"
    ],
    "description": "<p>O PDF Scratchpad Margin Extender é um companheiro de estudo essencial feito sob medida para estudantes, pesquisadores e candidatos a exames profissionais.</p>\n      <p>Ao resolver testes práticos, revisar slides ou ler livros acadêmicos em tablets digitais, as margens das páginas são incrivelmente estreitas. Abrir um aplicativo de notas separado força você a alternar as telas constantemente, quebrando o foco. Adicionar folhas planas em branco evita que você visualize o problema e o cálculo lado a lado.</p>\n      <p>Esta ferramenta reescreve as dimensões de largura ou altura da página na estrutura PDF de baixo nível, expandindo as margens <code>/MediaBox</code> em 200~250 pt à direita ou inferior. Em seguida, ele sobrepõe linhas de grade limpas, linhas de cadernos regulamentados pela faculdade ou layouts Cornell nas novas margens, fornecendo quadros de rascunhos adjacentes e dedicados ao lado de cada slide ou pergunta!</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar slides da aula",
        "description": "Forneça o livro didático em PDF, slides ou trabalhos de estudo."
      },
      {
        "step": 2,
        "title": "Escolha a margem e o estilo da grade",
        "description": "Escolha a direção de expansão da margem (por exemplo, lado direito para tablets) e selecione o modelo de grade."
      },
      {
        "step": 3,
        "title": "Costurar tela e baixar",
        "description": "Clique em executar para gerar páginas expandidas completas com lindas grades de rascunho."
      }
    ],
    "useCases": [
      {
        "title": "Preparação para o exame STEM",
        "description": "Costure as margens da grade ao lado das questões do exame de matemática e física, resolvendo derivações logo ao lado da questão.",
        "icon": "edit-3"
      },
      {
        "title": "Análise de leitura de linguagem",
        "description": "Adicione margens pautadas ao caderno ao lado de redações em língua estrangeira para análise de vocabulário e tradução de parágrafos.",
        "icon": "book"
      },
      {
        "title": "Auditoria de projeto arquitetônico",
        "description": "Adicione espaços de margem vazios nas laterais dos projetos para cálculos de engenharia e comentários de revisão do cliente.",
        "icon": "columns"
      }
    ],
    "faq": [
      {
        "question": "Isso comprimirá meu texto original em PDF?",
        "answer": "De jeito nenhum. O algoritmo expande a dimensão do papel para fora. O conteúdo original mantém seu layout, fontes e resolução; simplesmente esticamos o espaço em branco nas bordas e desenhamos grades nelas."
      },
      {
        "question": "Canetas manuais padrão podem escrever no bloco de notas?",
        "answer": "Sim. As novas páginas PDF são compiladas nativamente. Aplicativos populares de anotações para tablets, como Goodnotes, Notability, Xodo e Acrobat, podem escrever, destacar e rabiscar diretamente no novo espaço da grade."
      },
      {
        "question": "As linhas da grade são escuras e distraem?",
        "answer": "Selecionamos três cores sutis e agradáveis ​​aos olhos (azul acinzentado suave, marrom quente e verde brilhante). As linhas são finas e suaves, servindo como guias sem distrair você do conteúdo original da página."
      }
    ]
  },
  "photo-tiling-prepress": {
    "title": "Imprimir Fotos de Passe",
    "metaDescription": "Corte e organize fotos de identidade ou passaporte em papel fotográfico padrão. Adicione marcas de corte de impressão para ajudar a cortar a folha acabada.",
    "keywords": [
      "imprimir fotos passe",
      "papel fotografico matriz",
      "marcas de corte"
    ],
    "description": "<p>A ferramenta Prepress Photo Tiling é um compilador de layout econômico e de alta precisão desenvolvido para cartões de registro pessoais e estúdios fotográficos.</p>\n      <p>Imprimir fotos de passaporte, fotos de identidade ou carteiras de motorista em casa geralmente resulta em dimensões físicas incorretas (muitas vezes impressas muito grandes ou muito pequenas), desperdício de papel fotográfico e alinhamentos irregulares. Ir a gráficas profissionais para fazer layouts é demorado.</p>\n      <p>Nossa ferramenta integra um <strong>mecanismo de matriz de pré-impressão de precisão</strong>. Ele aceita retratos ou digitalizações de carteiras de identidade, corta-as em dimensões padrão (por exemplo, especificações de passaporte de 1\" ou 2\"), calcula a contagem ideal de blocos para papéis fotográficos padrão (por exemplo, folhas de 5\" ou 6\") e injeta linhas de corte nítidas de micro pixels para facilitar o corte físico, gerando um PDF imprimível perfeito.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importar foto do passaporte",
        "description": "Carregue o retrato da câmera ou imagens de cartão de identificação frente e verso."
      },
      {
        "step": 2,
        "title": "Configurar papel e layout",
        "description": "Selecione o tamanho do papel de impressão desejado (por exemplo, 6\") e escolha os layouts de grade (por exemplo, 8 cópias de fotos de 1\")."
      },
      {
        "step": 3,
        "title": "Bloco e exportação",
        "description": "Inspecione os blocos de fotos em nossa grade e exporte o PDF imprimível de alto DPI."
      }
    ],
    "useCases": [
      {
        "title": "Fotos de passaporte de autoatendimento",
        "description": "Organize seus retratos de passaporte fotográficos em uma única grade de papel fotográfico de 6\" e imprima 8 cópias por uma fração dos custos padrão de estúdio.",
        "icon": "user"
      },
      {
        "title": "Cópia frente e verso do cartão de identificação",
        "description": "Formatar digitalizações de frente e verso de carteiras de identidade nacionais ordenadamente em folhas padrão Carta/A4 para envios oficiais.",
        "icon": "file-text"
      },
      {
        "title": "Folhas de miniaturas de fotos em lote",
        "description": "Coloque várias memórias de família ou crie instantâneos em um papel quadriculado para imprimir folhas de contato em miniatura com eficiência.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "As dimensões impressas corresponderão às especificações oficiais de 1\" ou 2\"?",
        "answer": "Sim. O mecanismo de grade mede usando pontos PDF padrão (72 pt = 1 polegada), renderizando fotos de 1\" exatamente em 25x35mm e fotos de 2\" em 35x49mm. Certifique-se de imprimir em \"Tamanho real/escala de 100%\" nas configurações da impressora."
      },
      {
        "question": "Posso combinar fotos de 1\" e 2\" em uma única folha?",
        "answer": "Sim. Fornecemos predefinições de layout híbrido selecionadas (por exemplo, \"4 cópias de 1\" + 4 cópias de 2\"\"), permitindo maximizar o espaço do papel fotográfico."
      },
      {
        "question": "O modelo inclui sangramentos nas bordas?",
        "answer": "Sim. Os layouts de pré-impressão reservam uma margem padrão de segurança para impressão de 4 mm nas bordas do papel, evitando que os rolos físicos da impressora cortem as fotos."
      }
    ]
  },
  "rotate-custom": {
    "title": "Rotacionar PDF em Ângulo Personalizado",
    "metaDescription": "Rotacione páginas de PDF em qualquer ângulo. Rotação personalizada precisa para endireitar documentos digitalizados.",
    "keywords": [
      "rotacionar pdf angulo personalizado",
      "endireitar pdf",
      "corrigir inclinação de pdf",
      "rotação personalizada de pdf"
    ],
    "description": "\n      <p>A ferramenta Rotacionar PDF em Ângulo Personalizado oferece controle preciso sobre a orientação das páginas do seu PDF. Ao contrário das ferramentas de rotação padrão que suportam apenas incrementos de 90 graus, esta ferramenta permite rotacionar páginas em qualquer ângulo específico.</p>\n      <p>Perfeito para endireitar documentos digitalizados que foram alimentados de forma ligeiramente inclinada, ou ajustar diagramas e gráficos para a orientação correta. Você pode corrigir páginas individuais ou aplicar a mesma rotação a todo o documento.</p>\n      <p>Todo o processamento ocorre localmente no seu navegador, garantindo a privacidade dos seus documentos enquanto você obtém um alinhamento perfeito.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar PDF",
        "description": "Carregue o arquivo PDF que contém as páginas que você precisa rotacionar."
      },
      {
        "step": 2,
        "title": "Definir Ângulo de Rotação",
        "description": "Insira o ângulo exato de rotação para cada página ou defina um ângulo em lote para todas as páginas."
      },
      {
        "step": 3,
        "title": "Visualizar e Ajustar",
        "description": "Use a visualização em tempo real para garantir que as páginas estejam perfeitamente alinhadas."
      },
      {
        "step": 4,
        "title": "Aplicar e Baixar",
        "description": "Clique em Rotacionar para aplicar as alterações e baixar o seu PDF endireitado."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Digitalizados",
        "description": "Endireite páginas digitalizadas que foram alimentadas no scanner de forma inclinada.",
        "icon": "scan"
      },
      {
        "title": "Desenhos Técnicos",
        "description": "Ajuste a orientação de diagramas técnicos e plantas com precisão.",
        "icon": "ruler"
      },
      {
        "title": "Layouts Criativos",
        "description": "Crie layouts exclusivos rotacionando páginas em ângulos artísticos específicos.",
        "icon": "pen-tool"
      }
    ],
    "faq": [
      {
        "question": "Posso rotacionar por valores decimais, por exemplo, 45,5 graus?",
        "answer": "Atualmente, a ferramenta suporta apenas graus inteiros, mas estamos trabalhando para habilitar a precisão decimal."
      },
      {
        "question": "Isso afeta o conteúdo da página?",
        "answer": "O conteúdo é rotacionado visualmente. O tamanho da página é ajustado automaticamente para se adequar ao conteúdo rotacionado."
      },
      {
        "question": "Posso rotacionar apenas uma página?",
        "answer": "Sim, você pode definir um ângulo de rotação personalizado para qualquer página individual, mantendo as outras inalteradas."
      }
    ]
  },
  "jpg-to-pdf": {
    "title": "Converter JPG para PDF",
    "metaDescription": "Converta imagens JPG em PDF. Combine vários arquivos JPG em um único documento PDF.",
    "keywords": [
      "jpg para pdf",
      "jpeg para pdf",
      "converter jpg",
      "imagem para pdf",
      "foto para pdf"
    ],
    "description": "\n      <p>A ferramenta JPG para PDF converte suas imagens JPEG em documentos PDF de forma rápida e fácil. Quer você tenha uma única foto ou várias imagens, esta ferramenta cria arquivos PDF com aparência profissional.</p>\n      <p>Você pode combinar vários arquivos JPG em um único PDF, organizá-los em qualquer ordem e personalizar o tamanho e a orientação da página. A conversão preserva a qualidade da imagem enquanto cria arquivos PDF compactos e fáceis de compartilhar.</p>\n      <p>Toda a conversão ocorre no seu navegador, garantindo que suas photos permaneçam privadas.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar Imagens JPG",
        "description": "Arraste e solte seus arquivos JPG ou clique para selecionar imagens do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Organizar e Configurar",
        "description": "Reordene as imagens arrastando-as e selecione as opções de tamanho e orientação da página."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Clique em Converter para criar seu PDF e baixar o resultado."
      }
    ],
    "useCases": [
      {
        "title": "Álbuns de Fotos",
        "description": "Crie álbuns de fotos em PDF a partir de fotos de viagens ou de eventos para facilitar o compartilhamento.",
        "icon": "image"
      },
      {
        "title": "Digitalização de Documentos",
        "description": "Converta fotos de documentos tiradas com a câmera do celular em arquivos PDF adequados.",
        "icon": "camera"
      },
      {
        "title": "Criação de Portfólios",
        "description": "Reúna trabalhos de fotografia ou amostras de design em um portfólio profissional em PDF.",
        "icon": "folder"
      }
    ],
    "faq": [
      {
        "question": "Quantas imagens posso converter?",
        "answer": "Você pode converter até 100 imagens JPG em um único documento PDF."
      },
      {
        "question": "A qualidade da imagem será preservada?",
        "answer": "Sim, as imagens são incorporadas com sua qualidade original. Você pode opcionalmente compactá-las para reduzir o tamanho do arquivo."
      },
      {
        "question": "Posso definir tamanhos de página diferentes para imagens diferentes?",
        "answer": "A ferramenta aplica um tamanho de página uniforme a todas as páginas. Cada imagem é redimensionada para caber no tamanho de página selecionado, mantendo a proporção."
      }
    ]
  },
  "sign-pdf": {
    "title": "Assinar PDF",
    "metaDescription": "Adicione assinaturas eletrônicas a documentos PDF. Desenhe, digite ou carregue sua assinatura.",
    "keywords": [
      "assinar pdf",
      "assinatura eletronica",
      "e-assinatura",
      "assinatura pdf",
      "assinatura digital"
    ],
    "description": "\n      <p>A ferramenta Assinar PDF permite adicionar assinaturas eletrônicas aos seus documentos PDF de forma rápida e segura. Crie sua assinatura desenhando, digitando ou carregando uma imagem e, em seguida, posicione-a em qualquer lugar do documento.</p>\n      <p>Você pode adicionar várias assinaturas a um único documento, redimensioná-las e posicioná-las com precisão, e salvar sua assinatura para uso futuro. A ferramenta é perfeita para contratos, acordos, formulários e qualquer documento que exija sua assinatura.</p>\n      <p>Todo o processo de assinatura ocorre localmente no seu navegador, garantindo que seus documentos e assinatura permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar o documento que você precisa assinar."
      },
      {
        "step": 2,
        "title": "Criar sua Assinatura",
        "description": "Desenhe sua assinatura com o mouse ou tela de toque, digite seu nome para gerar uma assinatura ou carregue uma imagem de assinatura. Você também pode digitalizar uma foto de uma assinatura feita no papel."
      },
      {
        "step": 3,
        "title": "Posicionar e Ajustar",
        "description": "Clique no documento para posicionar sua assinatura, depois arraste para posicionar e redimensionar conforme necessário."
      },
      {
        "step": 4,
        "title": "Salvar e Baixar",
        "description": "Clique em Salvar para aplicar sua assinatura e baixar o PDF assinado."
      }
    ],
    "useCases": [
      {
        "title": "Assinatura de Contratos",
        "description": "Assine contratos e acordos eletronicamente, sem necessidade de imprimir e digitalizar.",
        "icon": "file-signature"
      },
      {
        "title": "Preenchimento de Formulários",
        "description": "Adicione sua assinatura a formulários de inscrição, consentimento e documentos oficiais.",
        "icon": "clipboard"
      },
      {
        "title": "Fluxos de Aprovação",
        "description": "Assine documentos como parte dos processos de revisão e aprovação.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Uma assinatura eletrônica é legalmente vinculativa?",
        "answer": "As assinaturas eletrônicas são legalmente reconhecidas na maioria dos países. No entanto, alguns documentos podem exigir tipos específicos de assinaturas digitais. Verifique as regulamentações locais."
      },
      {
        "question": "Posso salvar minha assinatura para uso futuro?",
        "answer": "Sim, você pode salvar sua assinatura no armazenamento local do seu navegador para acesso rápido ao assinar futuros documentos."
      },
      {
        "question": "Posso adicionar várias assinaturas a um único documento?",
        "answer": "Sim, você pode adicionar quantas assinaturas forem necessárias, posicionando cada uma de forma independente em qualquer página."
      }
    ]
  },
  "crop-pdf": {
    "title": "Cortar PDF",
    "metaDescription": "Corte páginas de PDF para remover margens e áreas indesejadas. Apare documentos PDF com precisão.",
    "keywords": [
      "cortar pdf",
      "aparar pdf",
      "cortar margens do pdf",
      "redimensionar paginas de pdf",
      "cortador de pdf"
    ],
    "description": "\n      <p>A ferramenta Cortar PDF permite aparar margens e remover áreas indesejadas das páginas do seu PDF. Isso é útil para remover espaços em branco excessivos, focar em áreas de conteúdo específicas ou padronizar as dimensões das páginas.</p>\n      <p>Você pode cortar todas as páginas uniformemente ou ajustar cada página individualmente. A interface visual mostra exatamente o que será mantido, facilitando a obtenção de resultados precisos.</p>\n      <p>Todo o corte ocorre localmente no seu navegador, garantindo a privacidade dos seus documentos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar o documento que deseja cortar."
      },
      {
        "step": 2,
        "title": "Definir Área de Corte",
        "description": "Arraste as alças de corte para definir a área que deseja manter ou insira medidas precisas."
      },
      {
        "step": 3,
        "title": "Aplicar às Páginas",
        "description": "Escolha aplicar o corte a todas as páginas ou selecione páginas específicas para cortar."
      },
      {
        "step": 4,
        "title": "Cortar e Baixar",
        "description": "Clique em Cortar para aplicar las alterações e baixar o PDF cortado."
      }
    ],
    "useCases": [
      {
        "title": "Remover Margens",
        "description": "Apare margens excessivas de documentos digitalizados ou PDFs com bordas grandes.",
        "icon": "maximize-2"
      },
      {
        "title": "Focar no Conteúdo",
        "description": "Corte para destacar áreas de conteúdo específicas, removendo cabeçalhos, rodapés ou barras laterais.",
        "icon": "target"
      },
      {
        "title": "Padronizar Páginas",
        "description": "Deixe todas as páginas com o mesmo tamanho cortando-as para dimensões uniformes.",
        "icon": "square"
      }
    ],
    "faq": [
      {
        "question": "O corte remove o conteúdo permanentemente?",
        "answer": "Sim, o corte remove o conteúdo fora da área delimitada. Certifique-se de manter um backup do arquivo original."
      },
      {
        "question": "Posso cortar páginas diferentes de maneiras diferentes?",
        "answer": "Sim, você pode aplicar configurações de corte diferentes a páginas individuais ou grupos de páginas."
      },
      {
        "question": "O corte afetará a qualidade do texto?",
        "answer": "Não, o corte remove apenas as áreas fora do limite de corte. O conteúdo restante mantém sua qualidade original."
      }
    ]
  },
  "extract-pages": {
    "title": "Extrair Páginas",
    "metaDescription": "Extraia páginas específicas de arquivos PDF. Selecione e salve páginas individuais como novos documentos.",
    "keywords": [
      "extrair paginas pdf",
      "salvar paginas pdf",
      "copiar paginas pdf",
      "extrator de paginas pdf"
    ],
    "description": "\n      <p>A ferramenta Extrair Páginas permite selecionar e salvar páginas específicas de um documento PDF como novos arquivos. Isso é perfeito para extrair seções relevantes, criar trechos ou separar documentos combinados.</p>\n      <p>Você pode extrair páginas individuais, intervalos de páginas ou várias páginas não consecutivas. A visualização de página facilita a identificação e seleção exata das páginas necessárias.</p>\n      <p>Toda a extração ocorre localmente no seu navegador, garantindo a privacidade dos seus documentos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar o documento do qual deseja extrair as páginas."
      },
      {
        "step": 2,
        "title": "Selecionar Páginas",
        "description": "Clique nas miniaturas das páginas para selecioná-las ou insira os números e intervalos de páginas no campo de entrada."
      },
      {
        "step": 3,
        "title": "Extrair e Baixar",
        "description": "Clique em Extrair para criar um novo PDF com as páginas selecionadas e baixá-lo."
      }
    ],
    "useCases": [
      {
        "title": "Criar Trechos",
        "description": "Extraia páginas relevantes de relatórios ou livros para criar documentos de referência focados.",
        "icon": "file-minus"
      },
      {
        "title": "Compartilhar Conteúdo Específico",
        "description": "Extraia páginas específicas para compartilhar sem a necessidade de enviar o documento completo.",
        "icon": "share-2"
      },
      {
        "title": "Arquivar Páginas Importantes",
        "description": "Extraia e salve páginas essenciais de documentos para arquivamento de longo prazo.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Posso extrair páginas não consecutivas?",
        "answer": "Sim, você pode selecionar qualquer combinação de páginas, sejam elas consecutivas ou espalhadas pelo documento."
      },
      {
        "question": "Os marcadores serão preservados?",
        "answer": "Os marcadores que apontam para as páginas extraídas são preservados no novo documento."
      },
      {
        "question": "Posso extrair páginas de múltiplos PDFs?",
        "answer": "Esta ferramenta funciona com um PDF por vez. Para combinar páginas de vários PDFs, use a ferramenta Juntar PDF (ou Mesclar PDF)."
      }
    ]
  },
  "organize-pdf": {
    "title": "Organizar PDF",
    "metaDescription": "Reordene, duplique e exclua páginas de PDF. Arraste e solte para reorganizar seus documentos.",
    "keywords": [
      "organizar pdf",
      "reordenar paginas de pdf",
      "reorganizar pdf",
      "organizador de paginas de pdf"
    ],
    "description": "\n      <p>A ferramenta Organizar PDF oferece uma interface intuitiva de arrastar e soltar para reorganizar as páginas nos seus documentos PDF. Reordene páginas, duplique seções importantes ou remova páginas indesejadas com facilidade.</p>\n      <p>As miniaturas visuais das páginas facilitam a identificação do conteúdo e a organização das páginas exatamente como você precisa. Perfeito para reestruturar documentos, criar ordens de páginas personalizadas ou limpar arquivos digitalizados.</p>\n      <p>Toda a organização ocorre localmente no seu navegador, garantindo a privacidade dos seus documentos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar o documento que deseja organizar."
      },
      {
        "step": 2,
        "title": "Reorganizar Páginas",
        "description": "Arraste as miniaturas das páginas para reordená-las. Clique nos botões de duplicar ou excluir em cada página, conforme necessário."
      },
      {
        "step": 3,
        "title": "Salvar e Baixar",
        "description": "Clique em Salvar para aplicar as alterações e baixar o PDF reorganizado."
      }
    ],
    "useCases": [
      {
        "title": "Corrigir Ordem das Páginas",
        "description": "Corrija a ordem de páginas que foram digitalizadas ou combinadas incorretamente.",
        "icon": "arrow-up-down"
      },
      {
        "title": "Criar Ordem Personalizada",
        "description": "Organize as páginas em uma sequência específica para apresentações ou relatórios.",
        "icon": "list"
      },
      {
        "title": "Remover Páginas Indesejadas",
        "description": "Exclua páginas em branco, duplicadas ou conteúdo irrelevante de documentos.",
        "icon": "trash-2"
      }
    ],
    "faq": [
      {
        "question": "Posso duplicar páginas?",
        "answer": "Sim, você pode duplicar qualquer página e colocar a cópia em qualquer lugar do documento."
      },
      {
        "question": "Existe uma função de desfazer?",
        "answer": "Sim, você pode desfazer e refazer alterações. Também pode redefinir para a ordem original a qualquer momento."
      },
      {
        "question": "Posso organizar múltiplos PDFs juntos?",
        "answer": "Esta ferramenta funciona com um PDF por vez. Para combinar e organizar vários PDFs, primeiro junte-os usando a ferramenta Juntar PDF (ou Mesclar PDF)."
      }
    ]
  },
  "delete-pages": {
    "title": "Excluir Páginas",
    "metaDescription": "Remova páginas indesejadas de arquivos PDF. Selecione e exclua páginas específicas facilmente.",
    "keywords": [
      "excluir paginas pdf",
      "remover paginas pdf",
      "removedor de paginas de pdf",
      "deletar paginas de pdf"
    ],
    "description": "\n      <p>A ferramenta Excluir Páginas permite remover páginas indesejadas de seus documentos PDF de forma rápida e fácil. Quer você precise remover páginas em branco, conteúdo desatualizado ou informações confidenciais, este ferramenta torna isso simples.</p>\n      <p>As miniaturas visuais de página ajudam a identificar exatamente quais páginas deseja remover. Você pode excluir páginas individuais ou várias páginas de uma só vez.</p>\n      <p>Todo o processamento ocorre localmente no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar o documento do qual deseja excluir as páginas."
      },
      {
        "step": 2,
        "title": "Selecionar Páginas para Excluir",
        "description": "Clique nas miniaturas das páginas para marcá-las para exclusão ou insira os números das páginas no campo de entrada."
      },
      {
        "step": 3,
        "title": "Excluir e Baixar",
        "description": "Clique em Excluir para remover as páginas selecionadas e baixar seu PDF atualizado."
      }
    ],
    "useCases": [
      {
        "title": "Remover Páginas em Branco",
        "description": "Limpe os documentos removendo páginas em branco incluídas acidentalmente.",
        "icon": "file-x"
      },
      {
        "title": "Remover Conteúdo Confidencial",
        "description": "Exclua páginas contendo informações confidenciais antes de compartilhar documentos.",
        "icon": "shield"
      },
      {
        "title": "Simplificar Documentos",
        "description": "Remova páginas desatualizadas ou irrelevantes para criar documentos mais focados.",
        "icon": "filter"
      }
    ],
    "faq": [
      {
        "question": "Posso recuperar páginas excluídas?",
        "answer": "A exclusão é permanente no arquivo gerado. Mantenha um backup do seu documento original caso precise das páginas mais tarde."
      },
      {
        "question": "Posso excluir várias páginas de uma só vez?",
        "answer": "Sim, você pode selecionar e excluir várias páginas simultaneamente."
      },
      {
        "question": "Excluir páginas afetará os marcadores?",
        "answer": "Os marcadores que apontam para as páginas excluídas serão removidos. Os marcadores das páginas restantes são preservados."
      }
    ]
  },
  "bookmark": {
    "title": "Editar Marcadores",
    "metaDescription": "Adicione, edite, organize ou remova todos os marcadores PDF. Gerencie a navegação do documento localmente no navegador.",
    "keywords": [
      "marcadores pdf",
      "editar marcadores",
      "adicionar marcadores pdf",
      "navegação de pdf",
      "indice de pdf",
      "remover todos os marcadores pdf"
    ],
    "description": "\n      <p>A ferramenta Editar Marcadores permite criar, modificar e organizar marcadores em seus documentos PDF. Os marcadores fornecem navegação rápida para seções específicas, tornando documentos longos mais fáceis de usar.</p>\n      <p>Você pode adicionar novos marcadores, editar os existentes, reorganizar a hierarquia de marcadores ou importar marcadores de fontes externas. Esta ferramenta é essencial para criar documentos profissionais e navegáveis.</p>\n      <p>Toda a edição ocorre localmente no seu navegador, garantindo a privacidade dos seus documentos.</p>\n      <p>Para remover todos, clique em Remover todos os marcadores e confirme. Salve e baixe para exportar um PDF sem marcadores.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar o documento que deseja editar."
      },
      {
        "step": 2,
        "title": "Gerenciar Marcadores",
        "description": "Adicione novos marcadores, edite os existentes ou arraste para reorganizar a hierarquia. Para remover todos, clique em Remover todos os marcadores e confirme. Salve e baixe para exportar um PDF sem marcadores."
      },
      {
        "step": 3,
        "title": "Salvar e Baixar",
        "description": "Clique em Salvar para aplicar as alterações e baixar o PDF com os marcadores atualizados."
      }
    ],
    "useCases": [
      {
        "title": "Criar Navegação",
        "description": "Adicione marcadores a documentos longos para ajudar os leitores a navegar rapidamente para seções específicas.",
        "icon": "navigation"
      },
      {
        "title": "Organizar Capítulos",
        "description": "Crie uma estrutura de marcadores hierárquica que reflita a organização dos capítulos do seu documento.",
        "icon": "book-open"
      },
      {
        "title": "Melhorar Acessibilidade",
        "description": "Adicione marcadores para tornar os documentos mais acessíveis e amigáveis ao usuário.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Posso criar marcadores aninhados?",
        "answer": "Sim, você pode criar uma estrutura hierárquica com marcadores pai e filho."
      },
      {
        "question": "Posso importar marcadores de um arquivo?",
        "answer": "Sim, você pode importar estruturas de marcadores de arquivos JSON ou de texto."
      },
      {
        "question": "Os marcadores funcionarão em todos os leitores de PDF?",
        "answer": "Sim, os marcadores são um recurso padrão do PDF suportado por todos os principais leitores de PDF."
      },
      { "question": "Posso remover todos os marcadores de uma vez?", "answer": "Para remover todos, clique em Remover todos os marcadores e confirme. Salve e baixe para exportar um PDF sem marcadores." }
    ]
  },
  "table-of-contents": {
    "title": "Sumário",
    "metaDescription": "Gere um sumário para o seu PDF. Crie navegação clicável a partir de marcadores.",
    "keywords": [
      "sumario pdf",
      "gerador de sumario",
      "indice de pdf",
      "navegacao de documento"
    ],
    "description": "\n      <p>A ferramenta Sumário gera uma página de sumário navegável para seus documentos PDF. O sumário pode ser criado a partir de marcadores existentes ou entradas personalizadas, fornecendo aos leitores uma visão geral e navegação rápida.</p>\n      <p>Personalize a aparência com diferentes estilos, fontes e layouts. O sumário gerado inclui links clicáveis que saltam diretamente para as páginas referenciadas.</p>\n      <p>Todo o processamento ocorre localmente no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar o documento."
      },
      {
        "step": 2,
        "title": "Configurar Sumário",
        "description": "Escolha gerar a partir de marcadores ou crie entradas personalizadas. Selecione opções de estilo e posicionamento."
      },
      {
        "step": 3,
        "title": "Gerar e Baixar",
        "description": "Clique em Gerar para criar o sumário e baixar seu PDF atualizado."
      }
    ],
    "useCases": [
      {
        "title": "Trabalhos Acadêmicos",
        "description": "Adicione um sumário profissional a teses, dissertações e artigos de pesquisa.",
        "icon": "graduation-cap"
      },
      {
        "title": "Relatórios Comerciais",
        "description": "Crie relatórios navegáveis com listagens de seções claras para as partes interessadas.",
        "icon": "bar-chart"
      },
      {
        "title": "Manuais do Usuário",
        "description": "Gere sumários abrangentes para documentação técnica e guias de usuário.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Posso personalizar a aparência do sumário?",
        "answer": "Sim, você pode escolher entre diferentes estilos, fontes e layouts para o seu sumário."
      },
      {
        "question": "Onde o sumário é inserido?",
        "answer": "Por padrão, o sumário é inserido no início do documento, mas você pode escolher uma localização diferente."
      },
      {
        "question": "As entradas do sumário são clicáveis?",
        "answer": "Sim, cada entrada é um link clicável que navega para a página correspondente."
      }
    ]
  },
  "page-numbers": {
    "title": "Números de Página",
    "metaDescription": "Adicione números de página a documentos PDF. Personalize posição, formato e número inicial.",
    "keywords": [
      "adicionar numeros de pagina",
      "numeros de pagina pdf",
      "numerar paginas pdf",
      "paginacao de pdf"
    ],
    "description": "\n      <p>A ferramenta Números de Página adiciona numeração de página personalizável aos seus documentos PDF. Escolha entre vários formatos, posições e estilos para combinar com o design do seu documento.</p>\n      <p>Você pode definir o número inicial, pular certas páginas e usar diferentes formatos de numeração (1, 2, 3 ou i, ii, iii). Perfeito para criar documentos profissionais com paginação adequada.</p>\n      <p>Todo o processamento ocorre localmente no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar o documento."
      },
      {
        "step": 2,
        "title": "Configurar Numeração",
        "description": "Escolha posição, formato, número inicial e quais páginas numerar."
      },
      {
        "step": 3,
        "title": "Aplicar e Baixar",
        "description": "Clique em Aplicar para adicionar números de página e baixar o PDF atualizado."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Profissionais",
        "description": "Adicione números de página a relatórios, propostas e documentos comerciais.",
        "icon": "file-text"
      },
      {
        "title": "Trabalhos Acadêmicos",
        "description": "Numere as páginas de acordo com os requisitos de formatação acadêmica.",
        "icon": "graduation-cap"
      },
      {
        "title": "Documentos Jurídicos",
        "description": "Adicione paginação adequada a contratos e petições judiciais.",
        "icon": "scale"
      }
    ],
    "faq": [
      {
        "question": "Posso pular a primeira página?",
        "answer": "Sim, você pode especificar quais páginas numerar e quais pular, como páginas de título ou capas."
      },
      {
        "question": "Quais formatos de número estão disponíveis?",
        "answer": "Você pode usar algarismos arábicos (1, 2, 3), algarismos romanos (i, ii, iii ou I, II, III) ou letras (a, b, c)."
      },
      {
        "question": "Posso adicionar o formato \"Página X de Y\"?",
        "answer": "Sim, você pode incluir a contagem total de páginas no seu formato de numeração."
      }
    ]
  },
  "add-watermark": {
    "title": "Adicionar Marca-d'água",
    "metaDescription": "Adicione marcas-d'água de texto ou imagem a arquivos PDF. Proteja e promova a marca de seus documentos.",
    "keywords": [
      "adicionar marca-d'agua",
      "marca-d'agua pdf",
      "carimbo pdf",
      "proteger pdf"
    ],
    "description": "\n      <p>A ferramenta Adicionar Marca-d'água permite colocar marcas-d'água de texto ou imagem nos seus documentos PDF. As marcas-d'água podem indicar o status do documento (Rascunho, Confidencial), adicionar a identidade da marca ou impedir a cópia não autorizada.</p>\n      <p>Personalize a posição, tamanho, opacidade, rotação e col da marca-d'água. Aplique a todas as páginas ou selecione páginas específicas. A ferramenta suporta marcas-d'água de texto e de imagem.</p>\n      <p>Todo o processamento ocorre localmente no seu navegador, garantindo a privacidade dos seus documentos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar o documento."
      },
      {
        "step": 2,
        "title": "Criar Marca-d'água",
        "description": "Insira o texto ou carregue uma imagem para a sua marca-d'água. Ajuste a posição, tamanho, opacidade e rotação."
      },
      {
        "step": 3,
        "title": "Aplicar e Baixar",
        "description": "Clique em Aplicar para adicionar a marca-d'água e baixar seu PDF atualizado."
      }
    ],
    "useCases": [
      {
        "title": "Proteção de Documentos",
        "description": "Adicione marcas-d'água como 'Confidencial' ou 'Rascunho' para indicar o status do documento.",
        "icon": "shield"
      },
      {
        "title": "Identidade de Marca",
        "description": "Adicione logotipos ou nomes da empresa a documentos oficiais.",
        "icon": "award"
      },
      {
        "title": "Aviso de Direitos Autorais",
        "description": "Adicione informações de direitos autorais para proteger a propriedade intelectual.",
        "icon": "copyright"
      }
    ],
    "faq": [
      {
        "question": "Posso usar uma imagem como marca-d'água?",
        "answer": "Sim, você pode carregar imagens nos formatos PNG, JPG ou SVG para usar como marcas-d'água."
      },
      {
        "question": "Posso tornar a marca-d'água semi-transparente?",
        "answer": "Sim, você pode ajustar a opacidade de totalmente transparente a totalmente opaca."
      },
      {
        "question": "Posso aplicar marcas-d'água diferentes em páginas diferentes?",
        "answer": "A ferramenta aplica a mesma marca-d'água às páginas selecionadas. Para marcas-d'água diferentes, processe o documento várias vezes."
      }
    ]
  },
  "header-footer": {
    "title": "Cabeçalho e Rodapé",
    "metaDescription": "Adicione cabeçalhos e rodapés a documentos PDF. Inclua números de página, datas e texto personalizado.",
    "keywords": [
      "cabecalho pdf",
      "rodape pdf",
      "adicionar cabecalho rodape",
      "timbre pdf"
    ],
    "description": "\n      <p>A ferramenta Cabeçalho e Rodapé adiciona cabeçalhos e rodapés personalizáveis aos seus documentos PDF. Inclua números de página, datas, títulos do documento ou qualquer texto personalizado nas áreas de cabeçalho ou rodapé.</p>\n      <p>Posicione o conteúdo à esquerda, no centro ou à direita do cabeçalho/rodapé. Use conteúdos diferentes para páginas ímpares e pares, se necessário. Perfeito para criar documentos profissionais com formatação consistente.</p>\n      <p>Todo o processamento ocorre localmente no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar o documento."
      },
      {
        "step": 2,
        "title": "Configurar Cabeçalho/Rodapé",
        "description": "Insira o texto para as áreas de cabeçalho e rodapé. Adicione números de página, datas ou texto personalizado."
      },
      {
        "step": 3,
        "title": "Aplicar e Baixar",
        "description": "Clique em Aplicar para adicionar cabeçalhos/rodapés e baixar o PDF atualizado."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Comerciais",
        "description": "Adicione o nome da empresa e números de página a documentos profissionais.",
        "icon": "briefcase"
      },
      {
        "title": "Documentos Jurídicos",
        "description": "Inclua números de processos, datas e referências de páginas em petições judiciais.",
        "icon": "scale"
      },
      {
        "title": "Trabalhos Acadêmicos",
        "description": "Adicione cabeçalhos dinâmicos com o título do artigo e o nome do autor.",
        "icon": "graduation-cap"
      }
    ],
    "faq": [
      {
        "question": "Posso ter cabeçalhos diferentes em páginas ímpares e pares?",
        "answer": "Sim, você pode configurar conteúdos diferentes para páginas ímpares e pares."
      },
      {
        "question": "Posso incluir a data atual?",
        "answer": "Sim, você pode inserir campos de data dinâmicos que mostram a data atual."
      },
      {
        "question": "Posso ignorar o cabeçalho/rodapé em certas páginas?",
        "answer": "Sim, você pode especificar quais páginas devem ter cabeçalhos/rodapés e quais devem ser ignoradas."
      }
    ]
  },
  "form-filler": {
    "title": "Preencher Formulário",
    "metaDescription": "Preencha formulários PDF online. Complete formulários PDF interativos sem precisar imprimir.",
    "keywords": [
      "preencher formulario pdf",
      "preenchedor de formulario pdf",
      "completar formulario pdf",
      "pdf interativo"
    ],
    "description": "\n      <p>A ferramenta Preencher Formulário permite preencher formulários PDF interativos diretamente no seu navegador. Preencha campos de texto, marque caixas de seleção, selecione opções e adicione assinaturas sem imprimir o documento.</p>\n      <p>A ferramenta suporta formulários PDF padrão e formulários XFA. Seus dados preenchidos podem ser salvos e o formulário pode ser mesclado (achatado/flattened) para evitar edições futuras.</p>\n      <p>Todo o processamento ocorre localmente no seu navegador, garantindo que os dados do seu formulário permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar Formulário PDF",
        "description": "Arraste e solte seu formulário PDF ou clique para selecionar o arquivo."
      },
      {
        "step": 2,
        "title": "Preencher o Formulário",
        "description": "Clique nos campos do formulário para inserir texto, marcar caixas ou selecionar opções."
      },
      {
        "step": 3,
        "title": "Salvar e Baixar",
        "description": "Clique em Salvar para preservar suas inserções e baixar o formulário preenchido."
      }
    ],
    "useCases": [
      {
        "title": "Formulários de Candidatura",
        "description": "Preencha candidaturas de emprego, solicitações de permissão e formulários de registro.",
        "icon": "clipboard"
      },
      {
        "title": "Formulários Fiscais",
        "description": "Preencha documentos fiscais e formulários financeiros eletronicamente.",
        "icon": "file-text"
      },
      {
        "title": "Contratos",
        "description": "Preencha formulários de contrato com suas informações antes de assinar.",
        "icon": "file-signature"
      }
    ],
    "faq": [
      {
        "question": "Posso salvar meu progresso?",
        "answer": "Sim, você pode salvar formulários parcialmente preenchidos e continuar mais tarde."
      },
      {
        "question": "O que é o achatamento (flattening) de formulário?",
        "answer": "O achatamento converte os campos do formulário em conteúdo estático, impedindo edições futuras."
      },
      {
        "question": "Formulários XFA são suportados?",
        "answer": "Sim, a ferramenta suporta tanto formulários AcroForms padrão quanto formulários XFA."
      }
    ]
  },
  "form-creator": {
    "title": "Criar Formulário",
    "metaDescription": "Crie formulários PDF preenchíveis. Adicione campos de texto, caixas de seleção e menus suspensos a documentos.",
    "keywords": [
      "criar formulario pdf",
      "criador de formulario pdf",
      "pdf preenchivel",
      "adicionar campos de formulario"
    ],
    "description": "\n      <p>A ferramenta Criar Formulário transforma documentos PDF estáticos em formulários interativos preenchíveis. Adicione campos de texto, caixas de seleção, botões de rádio, menus suspensos e muito mais para criar formulários profissionais.</p>\n      <p>Arraste e solte elementos de formulário em seu documento, configure as propriedades dos campos e crie formulários que podem ser preenchidos eletronicamente. Perfeito para criar solicitações, pesquisas e formulários de coleta de dados.</p>\n      <p>Todo o processamento ocorre localmente no seu navegador, garantindo a privacidade dos seus documentos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar o documento para converter em um formulário."
      },
      {
        "step": 2,
        "title": "Adicionar Campos de Formulário",
        "description": "Selecione os tipos de campo na barra de ferramentas e clique para posicioná-los no documento."
      },
      {
        "step": 3,
        "title": "Configurar e Salvar",
        "description": "Defina as propriedades dos campos, depois salve e baixe seu formulário PDF preenchível."
      }
    ],
    "useCases": [
      {
        "title": "Formulários de Inscrição",
        "description": "Crie fichas de emprego, formulários de associação e registros preenchíveis.",
        "icon": "user-plus"
      },
      {
        "title": "Pesquisas",
        "description": "Construa pesquisas e questionários interativos para coleta de dados.",
        "icon": "clipboard-list"
      },
      {
        "title": "Formulários de Pedido",
        "description": "Crie formulários de pedido de produtos com campos de quantidade e caixas de seleção.",
        "icon": "shopping-cart"
      }
    ],
    "faq": [
      {
        "question": "Quais tipos de campos posso adicionar?",
        "answer": "Campos de texto, caixas de seleção, botões de opção (radio buttons), menus suspensos, seletores de data e campos de assinatura."
      },
      {
        "question": "Posso tornar os campos obrigatórios?",
        "answer": "Sim, você pode marcar campos como obrigatórios e adicionar regras de validação."
      },
      {
        "question": "Posso adicionar cálculos?",
        "answer": "Cálculos básicos, como soma e média, podem ser adicionados a campos numéricos."
      }
    ]
  },
  "bmp-to-pdf": {
    "title": "Converter BMP para PDF",
    "metaDescription": "Converta imagens bitmap BMP em PDF. Suporte a formatos antigos com preservação de qualidade.",
    "keywords": [
      "bmp para pdf",
      "converter bmp",
      "bitmap para pdf",
      "conversor bmp"
    ],
    "description": "\n      <p>A ferramenta BMP para PDF converte imagens bitmap em documentos PDF. O BMP é um formato de imagem legado comumente usado em ambientes Windows, e esta ferramenta facilita a conversão desses arquivos para o formato PDF moderno.</p>\n      <p>Combine vários arquivos BMP em um único PDF com configurações personalizáveis. A conversão compacta os arquivos BMP, que costumam ser grandes, mantendo a qualidade da imagem.</p>\n      <p>Toda a conversão ocorre no seu navegador, garantindo que suas imagens permaneçam privadas.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar Arquivos BMP",
        "description": "Arraste e solte suas imagens BMP ou clique para selecionar os arquivos."
      },
      {
        "step": 2,
        "title": "Configurar Opções",
        "description": "Organize as imagens e selecione as configurações de página."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Clique em Converter para criar seu PDF."
      }
    ],
    "useCases": [
      {
        "title": "Conversão de Arquivos Antigos",
        "description": "Converta arquivos BMP antigos para o formato PDF moderno.",
        "icon": "history"
      },
      {
        "title": "Capturas de Tela do Windows",
        "description": "Converta capturas de tela em formato bitmap do Windows para PDF.",
        "icon": "monitor"
      },
      {
        "title": "Modernização de Arquivos",
        "description": "Atualize arquivos de imagens antigas para o formato PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "O tamanho do arquivo será reduzido?",
        "answer": "Sim, os arquivos BMP normalmente são compactados significativamente quando convertidos para PDF."
      },
      {
        "question": "A qualidade é preservada?",
        "answer": "Sim, a qualidade da imagem é mantida durante a conversão."
      },
      {
        "question": "Quais profundidades de cor BMP são suportadas?",
        "answer": "Todas as profundidades de cor BMP padrão são suportadas, incluindo 24 bits e 32 bits."
      }
    ]
  },
  "psd-to-pdf": {
    "title": "Converter PSD para PDF",
    "metaDescription": "Converta arquivos Adobe Photoshop (PSD) para o formato PDF. Suporta vários arquivos e preserva a qualidade da imagem.",
    "keywords": [
      "psd para pdf",
      "converter psd",
      "photoshop para pdf",
      "conversor psd",
      "adobe psd para pdf"
    ],
    "description": "\n      <p>A ferramenta PSD para PDF converte arquivos do Adobe Photoshop (PSD) em documentos PDF. Esta ferramenta permite visualizar e compartilhar layouts em PSD sem a necessidade de ter o Photoshop instalado.</p>\n      <p>Você pode converter vários arquivos PSD de uma vez e combiná-los em um único documento PDF. A ferramenta processa cada arquivo PSD, renderizando as camadas visíveis em páginas PDF de alta qualidade.</p>\n      <p>Toda a conversão acontece localmente no seu navegador, garantindo que seus designs permaneçam privados e seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar Arquivos PSD",
        "description": "Arraste e solte seus arquivos PSD ou PSB, ou clique para selecioná-los do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Organizar Ordem",
        "description": "Arraste e solte as miniaturas dos arquivos para organizá-los na ordem desejada."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Clique em Converter para renderizar os PSDs e baixar seu documento PDF."
      }
    ],
    "useCases": [
      {
        "title": "Compartilhar Projetos",
        "description": "Compartilhe designs do Photoshop com clientes ou colegas que não possuem o Photoshop instalado.",
        "icon": "share-2"
      },
      {
        "title": "Criação de Portfólio",
        "description": "Reúna seus trabalhos de design em um portfólio profissional em PDF.",
        "icon": "layout"
      },
      {
        "title": "Preparação para Impressão",
        "description": "Converta designs para PDF para fins de impressão.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Preciso do Photoshop instalado?",
        "answer": "Não, esta ferramenta funciona totalmente no seu navegador sem a necessidade do Adobe Photoshop."
      },
      {
        "question": "As camadas são preservadas?",
        "answer": "A ferramenta renderiza o estado visível do PSD (imagem composta). As camadas individuais são mescladas (achatadas) no PDF."
      },
      {
        "question": "Qual é o tamanho máximo de arquivo?",
        "answer": "Você pode carregar arquivos de até 100MB cada. Arquivos PSD grandes podem levar algum tempo para serem processados."
      }
    ]
  },
  "tiff-to-pdf": {
    "title": "Converter TIFF para PDF",
    "metaDescription": "Converta imagens TIFF em PDF. Suporte para arquivos TIFF de várias páginas e conversão de alta qualidade.",
    "keywords": [
      "tiff para pdf",
      "converter tiff",
      "tif para pdf",
      "tiff de varias paginas"
    ],
    "description": "\n      <p>A ferramenta TIFF para PDF converte imagens TIFF, incluindo arquivos TIFF de várias páginas, em documentos PDF. O TIFF é comumente usado para digitalizações de alta qualidade e gráficos profissionais.</p>\n      <p>Arquivos TIFF de várias páginas são convertidos automaticamente em PDFs de várias páginas. A conversão preserva a alta qualidade de suas imagens originais.</p>\n      <p>Toda a conversão ocorre no seu navegador, garantindo que seus arquivos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar Arquivos TIFF",
        "description": "Arraste e solte seus arquivos TIFF ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Configurar Opções",
        "description": "Selecione as configurações de página e opções de compressão."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Clique em Converter para criar seu PDF."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Digitalizados",
        "description": "Converta digitalizações de alta qualidade de TIFF para PDF.",
        "icon": "scan"
      },
      {
        "title": "Gráficos Profissionais",
        "description": "Converta gráficos TIFF profissionais para distribuição.",
        "icon": "image"
      },
      {
        "title": "Conversão de Arquivo",
        "description": "Converta arquivos TIFF para o formato PDF, que é mais acessível.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "TIFFs de várias páginas são suportados?",
        "answer": "Sim, arquivos TIFF de várias páginas são convertidos em PDFs de várias páginas automaticamente."
      },
      {
        "question": "A qualidade é preservada?",
        "answer": "Sim, a qualidade do TIFF é totalmente preservada no PDF gerado."
      },
      {
        "question": "Qual compressão é usada?",
        "answer": "Você pode escolher entre opções de compressão com perda ou sem perda (lossless)."
      }
    ]
  },
  "word-to-pdf": {
    "title": "Converter Word para PDF",
    "metaDescription": "Converta documentos do Word (DOCX) em PDF. Preserve a formatação e o layout em seus documentos convertidos.",
    "keywords": [
      "word para pdf",
      "docx para pdf",
      "converter word",
      "conversor word",
      "microsoft word para pdf"
    ],
    "description": "\n      <p>A ferramenta Word para PDF converte documentos do Microsoft Word no formato PDF enquanto preserva a formatação original, o layout e a estrutura do conteúdo.</p>\n      <p>Carregue seus arquivos DOCX e obtenha uma saída em PDF de alta qualidade, ideal para compartilhar, imprimir ou arquivar. A conversão mantém a formatação do texto, estilos de parágrafo e estrutura básica do documento.</p>\n      <p>Toda a conversão ocorre localmente no seu navegador, garantindo que seus documentos permaneçam privados e seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar Documento Word",
        "description": "Arraste e solte seu arquivo .docx ou clique para selecionar do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Aguardar Processamento",
        "description": "A ferramenta carregará o documento e o preparará para a conversão."
      },
      {
        "step": 3,
        "title": "Baixar PDF",
        "description": "Clique em Baixar para salvar seu documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Compartilhamento de Documentos",
        "description": "Converta documentos do Word para PDF para visualização e compartilhamento universal.",
        "icon": "share-2"
      },
      {
        "title": "Preparação para Impressão",
        "description": "Crie PDFs prontos para impressão a partir de documentos do Word.",
        "icon": "printer"
      },
      {
        "title": "Arquivamento de Documentos",
        "description": "Arquive documentos do Word no formato estável do PDF para armazenamento de longo prazo.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "O formato .doc é suportado?",
        "answer": "Atualmente, apenas o formato .docx é suportado. Converta arquivos .doc para .docx primeiro usando o Microsoft Word ou LibreOffice."
      },
      {
        "question": "As imagens são preservadas?",
        "answer": "O conteúdo do texto e a formatação básica são preservados. Layouts complexos com muitas imagens podem ter uma renderização simplificada."
      },
      {
        "question": "A conversão é segura?",
        "answer": "Sim, todo o processamento ocorre no seu navegador. Seus documentos nunca saem do seu dispositivo."
      }
    ]
  },
  "excel-to-pdf": {
    "title": "Converter Excel para PDF",
    "metaDescription": "Converta planilhas do Excel (XLSX) em PDF. Preserve tabelas e dados nos seus documentos convertidos.",
    "keywords": [
      "excel para pdf",
      "xlsx para pdf",
      "converter excel",
      "planilha para pdf",
      "microsoft excel para pdf"
    ],
    "description": "\n      <p>A ferramenta Excel para PDF converte planilhas do Microsoft Excel no formato PDF, preservando a estrutura das tabelas e a organização dos dados.</p>\n      <p>Carregue seus arquivos XLSX e obtenha uma saída em PDF limpa, com tabelas formatadas corretamente. Cada aba do arquivo se torna uma seção separada no PDF.</p>\n      <p>Toda a conversão ocorre localmente no seu navegador, garantindo que seus dados permaneçam privados e seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar Arquivo Excel",
        "description": "Arraste e solte seu arquivo .xlsx ou clique para selecionar do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Aguardar Processamento",
        "description": "A ferramenta carregará a planilha e converterá todas as abas."
      },
      {
        "step": 3,
        "title": "Baixar PDF",
        "description": "Clique em Baixar para salvar seu documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Compartilhamento de Relatórios",
        "description": "Converta relatórios do Excel para PDF para distribuição aos interessados.",
        "icon": "file-text"
      },
      {
        "title": "Arquivamento de Dados",
        "description": "Arquive dados de planilhas no formato estável do PDF.",
        "icon": "archive"
      },
      {
        "title": "Preparação para Impressão",
        "description": "Crie PDFs prontos para impressão a partir de planilhas do Excel.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Múltiplas abas são suportadas?",
        "answer": "Sim, todas as abas da pasta de trabalho são convertidas e incluídas no PDF."
      },
      {
        "question": "O formato .xls é suportado?",
        "answer": "Atualmente, apenas o formato .xlsx é suportado. Salve os arquivos .xls como .xlsx primeiro."
      },
      {
        "question": "As fórmulas são preservadas?",
        "answer": "O PDF mostra os valores calculados. As fórmulas não são executáveis no formato PDF."
      }
    ]
  },
  "pptx-to-pdf": {
    "title": "Converter PowerPoint para PDF",
    "metaDescription": "Converta apresentações do PowerPoint (PPTX) em PDF. Preserve slides e conteúdo para facilitar o compartilhamento.",
    "keywords": [
      "powerpoint para pdf",
      "pptx para pdf",
      "converter pptx",
      "apresentacao para pdf",
      "slides para pdf"
    ],
    "description": "\n      <p>A ferramenta PowerPoint para PDF converte apresentações do Microsoft PowerPoint no formato PDF, preservando o conteúdo e texto dos slides para facilitar o compartilhamento e visualização.</p>\n      <p>Cada slide se torna uma página no PDF, mantendo o fluxo da apresentação. Perfeito para compartilhar apresentações com pessoas que não têm o PowerPoint instalado.</p>\n      <p>Toda a conversão ocorre localmente no seu navegador, garantindo que suas apresentações permaneçam privadas e seguras.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar Arquivo PowerPoint",
        "description": "Arraste e solte seu arquivo .pptx ou clique para selecionar do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Aguardar Processamento",
        "description": "A ferramenta extrairá o conteúdo dos slides e criará o PDF."
      },
      {
        "step": 3,
        "title": "Baixar PDF",
        "description": "Clique em Baixar para salvar seu documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Compartilhamento de Apresentações",
        "description": "Compartilhe apresentações com qualquer pessoa, sem a necessidade de ter o PowerPoint.",
        "icon": "share-2"
      },
      {
        "title": "Criação de Folhetos",
        "description": "Crie folhetos em PDF a partir dos slides da sua apresentação.",
        "icon": "file-text"
      },
      {
        "title": "Arquivamento de Apresentações",
        "description": "Arquive apresentações no formato estável do PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "As animações são preservadas?",
        "answer": "O PDF é um formato estático, portanto, as animações e transições não são preservadas. Cada slide se torna uma página estática."
      },
      {
        "question": "O formato .ppt é suportado?",
        "answer": "Atualmente, apenas o formato .pptx é suportado. Converta arquivos .ppt para .pptx primeiro."
      },
      {
        "question": "As anotações do apresentador são incluídas?",
        "answer": "Atualmente, as anotações do apresentador não são incluídas no PDF gerado."
      }
    ]
  },
  "xps-to-pdf": {
    "title": "Converter XPS para PDF",
    "metaDescription": "Converta documentos XPS para o formato PDF. Conversão de alta fidelidade que preserva o layout e gráficos.",
    "keywords": [
      "xps para pdf",
      "converter xps",
      "conversor xps",
      "microsoft xps para pdf",
      "oxps para pdf"
    ],
    "description": "\n      <p>A ferramenta XPS para PDF converte documentos XPS (XML Paper Specification) da Microsoft no formato PDF, preservando o layout original, o texto e os gráficos vetoriais.</p>\n      <p>O XPS é um formato de documento de layout fixo semelhante ao PDF. Esta ferramenta oferece conversão de alta fidelidade usando análise nativa do XPS, garantindo a reprodução precisa de seus documentos.</p>\n      <p>Toda a conversão ocorre localmente no seu navegador, garantindo que seus documentos permaneçam privados e seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar Arquivo XPS",
        "description": "Arraste e solte seu arquivo .xps ou clique para selecionar do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Aguardar Processamento",
        "description": "A ferramenta analisará e converterá o documento XPS."
      },
      {
        "step": 3,
        "title": "Baixar PDF",
        "description": "Clique em Baixar para salvar seu documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Conversão de Formato",
        "description": "Converta documentos XPS para o formato PDF, que é amplamente suportado.",
        "icon": "file"
      },
      {
        "title": "Compartilhamento de Documentos",
        "description": "Compartilhe documentos XPS com usuários que não possuem leitores de XPS.",
        "icon": "share-2"
      },
      {
        "title": "Migração de Arquivo",
        "description": "Migre arquivos XPS para o formato PDF para melhor compatibilidade.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "O que é o formato XPS?",
        "answer": "O XPS (XML Paper Specification) é o formato de documento fixo da Microsoft, semelhante ao PDF. É comumente usado para impressão no Windows."
      },
      {
        "question": "A conversão é sem perdas (lossless)?",
        "answer": "Sim, a conversão preserva o texto, gráficos e o layout com alta fidelidade."
      },
      {
        "question": "Arquivos XPS de várias páginas são suportados?",
        "answer": "Sim, todas as páginas do documento XPS são convertidas no PDF."
      }
    ]
  },
  "rtf-to-pdf": {
    "title": "Converter RTF para PDF",
    "metaDescription": "Converta arquivos RTF (Rich Text Format) em PDF. Preserve a formatação do texto em seus documentos.",
    "keywords": [
      "rtf para pdf",
      "converter rtf",
      "rich text para pdf",
      "conversor rtf"
    ],
    "description": "\n      <p>A ferramenta RTF para PDF converte arquivos em formato de texto rico (Rich Text Format) em documentos PDF. O RTF é um formato de texto amplamente suportado que inclui formatação básica como fontes, cores e estilos.</p>\n      <p>Carregue seus arquivos RTF e obtenha uma saída em PDF limpa, preservando o conteúdo do texto e a formatação básica. Perfeito para converter documentos antigos para o formato PDF moderno.</p>\n      <p>Toda a conversão ocorre localmente no seu navegador, garantindo que seus documentos permaneçam privados e seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar Arquivo RTF",
        "description": "Arraste e solte seu arquivo .rtf ou clique para selecionar do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Aguardar Processamento",
        "description": "A ferramenta analisará e converterá o conteúdo RTF."
      },
      {
        "step": 3,
        "title": "Baixar PDF",
        "description": "Clique em Baixar para salvar seu documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Conversão Legada",
        "description": "Converta documentos RTF antigos para o formato PDF moderno.",
        "icon": "history"
      },
      {
        "title": "Compartilhamento de Documentos",
        "description": "Compartilhe documentos RTF no formato PDF, visível universalmente.",
        "icon": "share-2"
      },
      {
        "title": "Arquivar Documentos",
        "description": "Arquive arquivos RTF no formato PDF estável para armazenamento de longo prazo.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Qual formatação é preservada?",
        "answer": "A formatação de texto básica, incluindo fontes, parágrafos e estilos, é convertida. Recursos complexos do RTF podem ser simplificados."
      },
      {
        "question": "Posso converter vários arquivos RTF?",
        "answer": "Atualmente, um arquivo é convertido por vez. Use a ferramenta Juntar PDF (ou Mesclar PDF) para combinar múltiplos arquivos convertidos."
      },
      {
        "question": "Imagens incorporadas são suportadas?",
        "answer": "O foco principal é o conteúdo de texto. Objetos incorporados podem não ser renderizados."
      }
    ]
  },
  "epub-to-pdf": {
    "title": "Converter EPUB para PDF",
    "metaDescription": "Converta e-books EPUB em PDF. Preserve a formatação, imagens e estrutura dos capítulos.",
    "keywords": [
      "epub para pdf",
      "converter epub",
      "ebook para pdf",
      "conversor epub"
    ],
    "description": "\n      <p>A ferramenta EPUB para PDF converte arquivos de livros eletrônicos em documentos PDF de alta qualidade. O EPUB é o formato de e-book mais popular, utilizado pela maioria dos e-readers e bibliotecas digitais.</p>\n      <p>Esta ferramenta preserva a formatação do texto, as imagens e a estrutura de capítulos de seus e-books. Perfeito para imprimir, arquivar ou compartilhar e-books em um formato universalmente visível.</p>\n      <p>Toda a conversão ocorre localmente no seu navegador usando tecnologia avançada de renderização, garantindo que seus livros permaneçam privados e que a conversão seja rápida.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar Arquivo EPUB",
        "description": "Arraste e solte seu arquivo .epub ou clique para selecionar do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Aguardar Conversão",
        "description": "A ferramenta renderizará e converterá todas as páginas do seu e-book."
      },
      {
        "step": 3,
        "title": "Baixar PDF",
        "description": "Clique em Baixar para salvar seu documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Imprimir E-books",
        "description": "Converta e-books para PDF para impressão física.",
        "icon": "printer"
      },
      {
        "title": "Arquivar Livros",
        "description": "Armazene e-books no formato estável de PDF de longo prazo.",
        "icon": "archive"
      },
      {
        "title": "Compartilhar Documentos",
        "description": "Compartilhe e-books com qualquer pessoa, mesmo que ela não tenha um e-reader.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "A formatação é preservada?",
        "answer": "Sim! Esta ferramenta usa renderização nativa de EPUB, preservando a formatação de texto, imagens e layout com alta fidelidade."
      },
      {
        "question": "EPUBs protegidos por DRM são suportados?",
        "answer": "Não, e-books protegidos por DRM não podem ser convertidos. Apenas arquivos EPUB livres de DRM são suportados."
      },
      {
        "question": "Como o tamanho da página é determinado?",
        "answer": "O conteúdo do EPUB é renderizado para o tamanho de página A4 padrão para uma leitura ideal."
      }
    ]
  },
  "mobi-to-pdf": {
    "title": "Converter MOBI para PDF",
    "metaDescription": "Converta e-books MOBI em PDF. Suporte para formato Kindle com renderização de alta qualidade.",
    "keywords": [
      "mobi para pdf",
      "converter mobi",
      "kindle para pdf",
      "azw para pdf",
      "conversor mobi"
    ],
    "description": "\n      <p>A ferramenta MOBI para PDF converte arquivos de e-books do Amazon Kindle em documentos PDF de alta qualidade. O formato MOBI (incluindo AZW e AZW3) é o formato proprietário de e-book da Amazon usado nos dispositivos Kindle.</p>\n      <p>Esta ferramenta preserva a formatação de texto, imagens e a estrutura de seus livros do Kindle. Perfeito para imprimir, arquivar ou ler em dispositivos que não suportam o formato MOBI.</p>\n      <p>Toda a conversão ocorre localmente no seu navegador usando tecnologia de renderização avançada, garantindo que seus livros permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar Arquivo MOBI",
        "description": "Arraste e solte seu arquivo .mobi, .azw ou .azw3, ou clique para selecionar do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Aguardar Conversão",
        "description": "A ferramenta renderizará e converterá todas as páginas do seu e-book."
      },
      {
        "step": 3,
        "title": "Baixar PDF",
        "description": "Clique em Baixar para salvar seu documento PDF convertido."
      }
    ],
    "useCases": [
      {
        "title": "Imprimir Livros do Kindle",
        "description": "Converta e-books do Kindle para PDF para impressão física.",
        "icon": "printer"
      },
      {
        "title": "Arquivar Livros",
        "description": "Armazene livros do Kindle no formato estável do PDF.",
        "icon": "archive"
      },
      {
        "title": "Leitura em Múltiplos Dispositivos",
        "description": "Leia livros do Kindle em dispositivos que suportam apenas PDF.",
        "icon": "tablet-smartphone"
      }
    ],
    "faq": [
      {
        "question": "Quais formatos MOBI são suportados?",
        "answer": "Esta ferramenta suporta arquivos .mobi, .azw e .azw3 (versões sem proteção DRM)."
      },
      {
        "question": "Livros Kindle protegidos por DRM são suportados?",
        "answer": "Não, e-books protegidos por DRM não podem ser convertidos. Apenas arquivos livres de DRM são suportados."
      },
      {
        "question": "Minha formatação será preservada?",
        "answer": "Sim! A ferramenta usa renderização nativa de MOBI para preservar texto, imagens e layout."
      }
    ]
  },
  "pdf-to-svg": {
    "title": "Converter PDF para SVG",
    "metaDescription": "Converta páginas de PDF em gráficos vetoriais SVG. Escabilidade perfeita em qualquer tamanho com exportação de páginas individuais.",
    "keywords": [
      "pdf para svg",
      "converter pdf para svg",
      "graficos vetoriais",
      "pdf escalavel",
      "conversor svg"
    ],
    "description": "\n      <p>A ferramenta PDF para SVG converte cada página do seu documento PDF em um gráfico vetorial escalável (SVG). O SVG é um formato vetorial que mantém a qualidade perfeita em qualquer nível de zoom ou tamanho de impressão.</p>\n      <p>Ao contrário dos formatos rasterizados (JPG, PNG), os gráficos SVG nunca perdem a nitidez (pixelizam) ao serem redimensionados. Isso os torna ideais para logotipos, diagramas, desenhos técnicos e qualquer conteúdo que precise ser exibido em diferentes tamanhos.</p>\n      <p>Visualize cada página convertida e baixe-as individualmente ou como um arquivo ZIP. Todo o processamento ocorre localmente no seu navegador, garantindo total privacidade para os seus documentos.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para procurar e selecionar."
      },
      {
        "step": 2,
        "title": "Configurar Opções",
        "description": "Defina a qualidade de resolução e especifique intervalos de páginas (opcional)."
      },
      {
        "step": 3,
        "title": "Visualizar e Converter",
        "description": "Clique em Converter para processar. Visualize cada página clicando nas miniaturas."
      },
      {
        "step": 4,
        "title": "Baixar",
        "description": "Baixe arquivos SVG individuais ou todas as páginas como um arquivo ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Logotipos e Gráficos",
        "description": "Extraia logotipos e gráficos vetoriais de PDFs para usar em softwares de design.",
        "icon": "pen-tool"
      },
      {
        "title": "Diagramas Técnicos",
        "description": "Converta desenhos técnicos e diagramas para o formato SVG escalável.",
        "icon": "ruler"
      },
      {
        "title": "Desenvolvimento Web",
        "description": "Crie arquivos SVG prontos para a web a partir de conteúdo PDF para sites responsivos.",
        "icon": "globe"
      },
      {
        "title": "Imprimir em Qualquer Tamanho",
        "description": "Gere gráficos vetoriais que são impressos perfeitamente em qualquer tamanho.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "O que é o formato SVG?",
        "answer": "O SVG (Scalable Vector Graphics) é um formato de imagem vetorial que pode ser dimensionado para qualquer tamanho sem perder a qualidade. É amplamente utilizado para logotipos, ícones e gráficos web."
      },
      {
        "question": "O SVG será realmente vetorial?",
        "answer": "O SVG contém uma renderização de alta resolução da página do PDF. Para PDFs com conteúdo vetorial, você obtém uma saída nítida em qualquer escala."
      },
      {
        "question": "Posso visualizar antes de baixar?",
        "answer": "Sim! Clique em qualquer miniatura para ver uma visualização em tamanho real do SVG. Você pode baixar páginas individuais ou todas de uma vez."
      },
      {
        "question": "Qual resolução devo escolher?",
        "answer": "Resoluções mais altas (216 ou 288 DPI) produzem SVGs maiores e mais detalhados. Use configurações mais baixas para um processamento mais rápido e arquivos menores."
      }
    ]
  },
  "pdf-to-pptx": {
    "title": "Converter PDF para PowerPoint",
    "metaDescription": "Converta PDF em apresentação do PowerPoint. Cada página se torna um slide de alta qualidade.",
    "keywords": [
      "pdf para pptx",
      "pdf para powerpoint",
      "converter slides de pdf",
      "apresentacao em pdf"
    ],
    "description": "\n      <p>A ferramenta PDF para PowerPoint converte seus documentos PDF em apresentações do PowerPoint editáveis (PPTX). Cada página do PDF é transformada em um slide de alta qualidade, preservando o layout visual de forma perfeita.</p>\n      <p>Esta ferramenta é ideal para converter relatórios, folhetos ou qualquer conteúdo PDF no formato de apresentação. Você pode escolher a qualidade da imagem (DPI) para equilibrar entre o tamanho do arquivo e a clareza visual.</p>\n      <p>Toda a conversão ocorre localmente no seu navegador, garantindo que seus documentos permaneçam privados e seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Escolher Configurações de Qualidade",
        "description": "Selecione a qualidade da imagem (DPI) para os slides. Um DPI mais alto significa melhor qualidade, mas maior tamanho de arquivo."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Clique em Converter para criar sua apresentação do PowerPoint e baixar o arquivo PPTX."
      }
    ],
    "useCases": [
      {
        "title": "Criação de Apresentação",
        "description": "Converta relatórios ou documentos PDF em slides de apresentação para reuniões.",
        "icon": "presentation"
      },
      {
        "title": "Materiais de Treinamento",
        "description": "Transforme documentos de treinamento em PDF em apresentações interativas do PowerPoint.",
        "icon": "book-open"
      },
      {
        "title": "Reutilização de Conteúdo",
        "description": "Converta conteúdos PDF existentes em formato de slides editáveis para posterior personalização.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Os slides serão editáveis?",
        "answer": "Cada slide contém uma imagem de alta qualidade da página do PDF. Você pode adicionar texto, formas e anotações por cima no PowerPoint."
      },
      {
        "question": "Qual DPI devo escolher?",
        "answer": "Use 150 DPI para apresentações exibidas em telas. Use 300 DPI para impressão ou quando precisar da mais alta qualidade."
      },
      {
        "question": "Posso converter PDFs de várias páginas?",
        "answer": "Sim, cada página do seu PDF se torna um slide separado na apresentação do PowerPoint."
      }
    ]
  },
  "pdf-to-excel": {
    "title": "PDF para Excel",
    "metaDescription": "Converta PDF em planilha do Excel. Extraia tabelas para o formato XLSX.",
    "keywords": [
      "pdf para excel",
      "pdf para xlsx",
      "converter tabelas pdf",
      "extrair tabelas"
    ],
    "description": "\n      <p>O PDF para Excel converte seus documentos PDF em planilhas editáveis do Microsoft Excel (XLSX). A ferramenta detecta automaticamente as tabelas no seu PDF e as extrai para planilhas separadas.</p>\n      <p>Esta ferramenta é ideal para analisar relatórios financeiros, faturas ou quaisquer dados apresentados em tabelas. As tabelas de cada página são organizadas em planilhas para facilitar a manipulação dos dados.</p>\n      <p>Toda a conversão ocorre localmente no seu navegador, garantindo que seus dados permaneçam privados e seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Processar",
        "description": "A ferramenta identificará e extrairá as tabelas automaticamente."
      },
      {
        "step": 3,
        "title": "Baixar Excel",
        "description": "Baixe seu arquivo Excel com as tabelas extraídas."
      }
    ],
    "useCases": [
      {
        "title": "Análise Financeira",
        "description": "Converta extratos bancários ou faturas para o Excel para análise.",
        "icon": "trending-up"
      },
      {
        "title": "Extração de Dados",
        "description": "Extraia tabelas de dados de artigos de pesquisa ou relatórios.",
        "icon": "database"
      },
      {
        "title": "Gestão de Inventário",
        "description": "Converta listas de inventário de PDF para planilha.",
        "icon": "clipboard"
      }
    ],
    "faq": [
      {
        "question": "Como as tabelas são tratadas?",
        "answer": "As tabelas detectadas em cada página são extraídas para as planilhas correspondentes no arquivo Excel."
      },
      {
        "question": "E se não houver tabelas?",
        "answer": "Uma planilha informativa será criada indicando que nenhuma tabela foi encontrada."
      },
      {
        "question": "A formatação é preservada?",
        "answer": "Os dados são preservados, mas a formatação visual complexa pode ser simplificada para uso na planilha."
      }
    ]
  },
  "ocr-pdf": {
    "title": "OCR em PDF",
    "metaDescription": "Torne PDFs digitalizados pesquisáveis com OCR. Extraia texto de imagens e documentos digitalizados.",
    "keywords": [
      "ocr em pdf",
      "pdf pesquisavel",
      "reconhecimento de texto",
      "digitalizar para texto"
    ],
    "description": "\n      <p>O OCR em PDF usa o Reconhecimento Ótico de Caracteres para extrair texto de documentos digitalizados e imagens dentro de PDFs. Converta PDFs baseados em imagens em documentos com texto pesquisável e selecionável.</p>\n      <p>O suporte a múltiplos idiomas garante um reconhecimento de texto preciso, independentemente do idioma do documento. O layout original é preservado enquanto uma camada de texto pesquisável é adicionada.</p>\n      <p>Todo o processamento de OCR ocorre no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar PDF Digitalizado",
        "description": "Arraste e solte seu PDF digitalizado ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Selecionar Idioma",
        "description": "Escolha o idioma do documento para um reconhecimento preciso."
      },
      {
        "step": 3,
        "title": "Processar e Baixar",
        "description": "Clique em Processar para executar o OCR e baixar o PDF pesquisável."
      }
    ],
    "useCases": [
      {
        "title": "Digitalizar Arquivos",
        "description": "Torne pesquisáveis os arquivos de documentos digitalizados.",
        "icon": "archive"
      },
      {
        "title": "Pesquisa de Documentos",
        "description": "Ative a pesquisa de texto em documentos digitalizados.",
        "icon": "search"
      },
      {
        "title": "Extração de Texto",
        "description": "Extraia texto de documentos digitalizados para edição.",
        "icon": "type"
      }
    ],
    "faq": [
      {
        "question": "Quais idiomas são suportados?",
        "answer": "Mais de 100 idiomas são suportados, incluindo inglês, chinês, japonês, coreano e mais."
      },
      {
        "question": "O layout original será preservado?",
        "answer": "Sim, o layout visual original é preservado com a adição de uma camada de texto pesquisável."
      },
      {
        "question": "Qual é a precisão do OCR?",
        "answer": "A precisão depende da qualidade da digitalização, mas normalmente excede 95% para documentos claros."
      }
    ]
  },
  "extract-images": {
    "title": "Extrair Imagens de PDF",
    "metaDescription": "Extraia todas as imagens incorporadas de arquivos PDF. Baixe individualmente ou como um arquivo ZIP. Filtre imagens pequenas automaticamente.",
    "keywords": [
      "extrair imagens de pdf",
      "extracao de imagens pdf",
      "obter imagens de pdf",
      "baixar imagens de pdf",
      "pdf para imagens"
    ],
    "description": "\n      <p>A ferramenta Extrair Imagens de PDF recupera todas as imagens incorporadas dos seus documentos PDF. Baixe imagens de alta qualidade individualmente ou como um arquivo ZIP conveniente.</p>\n      <p>A ferramenta filtra automaticamente imagens pequenas, como ícones e decorações, com base em limites de tamanho personalizáveis. Processe vários PDFs de uma só vez para uma extração em lote eficiente.</p>\n      <p>Toda a extração ocorre no seu navegador, garantindo que seus documentos permaneçam privados e seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seus PDFs",
        "description": "Arraste e solte um ou mais arquivos PDF ou clique para selecionar do seu dispositivo."
      },
      {
        "step": 2,
        "title": "Definir Opções de Filtro",
        "description": "Ajuste a largura, altura e tamanho mínimo do arquivo para filtrar imagens pequenas indesejadas."
      },
      {
        "step": 3,
        "title": "Extrair Imagens",
        "description": "Clique em Extrair para encontrar todas as imagens incorporadas em seus PDFs."
      },
      {
        "step": 4,
        "title": "Baixar",
        "description": "Baixe imagens individuais ou todas as imagens como um arquivo ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Recuperação de Fotos",
        "description": "Extraia fotos e imagens incorporadas em documentos PDF para reutilização ou arquivamento.",
        "icon": "image"
      },
      {
        "title": "Coleção de Ativos",
        "description": "Reúna todos os gráficos e imagens de relatórios, apresentações ou folhetos em PDF.",
        "icon": "folder"
      },
      {
        "title": "Reutilização de Conteúdo",
        "description": "Extraia imagens de PDFs para usar em outros documentos, sites ou apresentações.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Quais formatos de imagem são extraídos?",
        "answer": "As imagens são extraídas em seu formato nativo (JPEG, PNG, etc.) quando possível, ou convertidas para PNG para dados de imagem brutos."
      },
      {
        "question": "Por que algumas imagens estão faltando?",
        "answer": "Imagens pequenas abaixo do limite de tamanho são filtradas. Ajuste as configurações de filtro para extrair imagens menores."
      },
      {
        "question": "Posso extrair de PDFs digitalizados?",
        "answer": "PDFs digitalizados normalmente contêm a digitalização como uma imagem grande por página. Use a ferramenta PDF para Imagem para conversão página por página."
      }
    ]
  },
  "edit-attachments": {
    "title": "Editar Anexos",
    "metaDescription": "Gerencie anexos de PDF. Visualize, renomeie e remova arquivos incorporados.",
    "keywords": [
      "editar anexos",
      "gerenciar arquivos pdf",
      "remover anexos",
      "renomear anexos"
    ],
    "description": "\n      <p>O Editar Anexos permite gerenciar arquivos incorporados em documentos PDF. Visualize todos os anexos, renomeie-os ou remova arquivos indesejados do PDF.</p>\n      <p>Perfeito para limpar pacotes de PDF ou atualizar informações de anexos antes da distribuição.</p>\n      <p>Toda a edição ocorre no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Gerenciar Anexos",
        "description": "Visualize, renomeie ou exclua arquivos incorporados."
      },
      {
        "step": 3,
        "title": "Salvar e Baixar",
        "description": "Clique em Salvar para aplicar as alterações e baixar."
      }
    ],
    "useCases": [
      {
        "title": "Limpar PDFs",
        "description": "Remova anexos desnecessários de pacotes de PDF.",
        "icon": "trash-2"
      },
      {
        "title": "Renomear Arquivos",
        "description": "Atualize os nomes dos anexos para maior clareza.",
        "icon": "edit"
      },
      {
        "title": "Revisar Conteúdos",
        "description": "Audite arquivos incorporados antes da distribuição.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Posso adicionar novos anexos aqui?",
        "answer": "Use a ferramenta Adicionar Anexos para incorporar novos arquivos."
      },
      {
        "question": "A remoção é permanente?",
        "answer": "Sim, os anexos removidos não podem ser recuperados do arquivo de saída."
      },
      {
        "question": "Posso visualizar os anexos?",
        "answer": "Você pode ver os nomes e tamanhos dos arquivos; use a ferramenta Extrair Anexos para visualizar os conteúdos."
      }
    ]
  },
  "add-blank-page": {
    "title": "Adicionar Página em Branco",
    "metaDescription": "Insira páginas em branco em documentos PDF. Adicione páginas vazias em qualquer posição.",
    "keywords": [
      "adicionar pagina em branco",
      "inserir pagina",
      "pagina vazia",
      "insercao de pagina pdf"
    ],
    "description": "\n      <p>O Adicionar Página em Branco insere páginas vazias em seus documentos PDF em qualquer posição. Adicione páginas antes, depois ou entre páginas existentes com tamanho de página personalizável.</p>\n      <p>Perfeito para adicionar espaço para anotações, criar divisórias de seção ou preparar documentos para impressão.</p>\n      <p>Todo o processamento ocorre no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Escolher Posição",
        "description": "Selecione onde inserir as páginas em branco e quantas."
      },
      {
        "step": 3,
        "title": "Adicionar e Baixar",
        "description": "Clique em Adicionar para inserir as páginas e baixar."
      }
    ],
    "useCases": [
      {
        "title": "Espaço para Notas",
        "description": "Adicione páginas em branco para anotações manuscritas.",
        "icon": "edit-3"
      },
      {
        "title": "Divisores de Seção",
        "description": "Insira páginas em branco entre as seções do documento.",
        "icon": "minus"
      },
      {
        "title": "Preparação para Impressão",
        "description": "Adicione páginas para alinhamento de impressão frente e verso.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Posso escolher o tamanho da página?",
        "answer": "Sim, as páginas em branco podem corresponder às páginas existentes ou usar dimensões personalizadas."
      },
      {
        "question": "Posso adicionar várias páginas em branco?",
        "answer": "Sim, você pode adicionar qualquer número de páginas em branco de uma só vez."
      },
      {
        "question": "Posso adicionar páginas coloridas?",
        "answer": "Use a ferramenta Cor de Fundo após adicionar páginas em branco para adicionar cor."
      }
    ]
  },
  "rotate-pdf": {
    "title": "Rotacionar PDF",
    "metaDescription": "Rotacione páginas de PDF. Gire páginas em 90, 180 ou 270 graus.",
    "keywords": [
      "rotacionar pdf",
      "girar paginas pdf",
      "rotacao de pdf",
      "corrigir orientacao"
    ],
    "description": "\n      <p>O Rotacionar PDF gira as páginas do seu documento em 90, 180 ou 270 graus. Corrija digitalizações orientadas incorretamente, rotacione páginas em paisagem ou ajuste a orientação da página para visualização.</p>\n      <p>Rotacione todas as páginas uniformemente ou selecione páginas específicas para girar individualmente. A ferramenta preserva todo o conteúdo e formatação.</p>\n      <p>Todo o processamento ocorre no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Selecionar Rotação",
        "description": "Escolha o ângulo de rotação e quais páginas rotacionar."
      },
      {
        "step": 3,
        "title": "Rotacionar e Baixar",
        "description": "Clique em Rotacionar para aplicar as alterações e baixar."
      }
    ],
    "useCases": [
      {
        "title": "Corrigir Digitalizações",
        "description": "Corrija a orientação de documentos digitalizados.",
        "icon": "rotate-cw"
      },
      {
        "title": "Páginas em Paisagem",
        "description": "Rotacione páginas em paisagem para visualização adequada.",
        "icon": "monitor"
      },
      {
        "title": "Orientação Mista",
        "description": "Padronize a orientação das páginas em documentos mistos.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Posso rotacionar páginas diferentes de formas diferentes?",
        "answer": "Sim, você pode aplicar rotações diferentes a páginas diferentes."
      },
      {
        "question": "A rotação afeta a qualidade de impressão?",
        "answer": "Não, a rotação preserva toda a qualidade do conteúdo."
      },
      {
        "question": "Posso rotacionar por ângulos personalizados?",
        "answer": "A rotação é limitada a incrementos de 90 graus (90, 180, 270)."
      }
    ]
  },
  "combine-single-page": {
    "title": "Combinar em uma Única Página",
    "metaDescription": "Junte as páginas de um PDF em uma única página contínua. Crie documentos de página única roláveis.",
    "keywords": [
      "combinar paginas",
      "pdf de pagina unica",
      "juntar paginas",
      "rolagem continua"
    ],
    "description": "\n      <p>O Combinar em uma Única Página junta todas as páginas do PDF em uma página contínua. Crie documentos roláveis perfeitos para visualização na web ou leitura contínua.</p>\n      <p>As páginas são unidas verticalmente com espaçamento personalizável. O resultado é uma única página longa contendo todo o conteúdo.</p>\n      <p>Todo o processamento ocorre no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Definir Espaçamento",
        "description": "Escolha o intervalo entre as páginas unidas."
      },
      {
        "step": 3,
        "title": "Combinar e Baixar",
        "description": "Clique em Combinar para criar o PDF de página única."
      }
    ],
    "useCases": [
      {
        "title": "Documentos Web",
        "description": "Crie PDFs roláveis para incorporação em páginas da web.",
        "icon": "globe"
      },
      {
        "title": "Leitura Contínua",
        "description": "Converta documentos paginados em rolagem contínua.",
        "icon": "scroll"
      },
      {
        "title": "Conteúdo de Formato Longo",
        "description": "Combine páginas para uma leitura contínua e sem interrupções.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Existe um limite de páginas?",
        "answer": "Documentos muito longos podem ser limitados pela memória do navegador."
      },
      {
        "question": "Posso adicionar separadores entre as páginas?",
        "answer": "Sim, você pode adicionar espaçamento ou linhas entre as páginas originais."
      },
      {
        "question": "Isso funciona para impressão?",
        "answer": "O resultado é ideal para visualização em tela; use o layout N-Up para impressão."
      }
    ]
  },
  "view-metadata": {
    "title": "Visualizar Metadados",
    "metaDescription": "Visualize as propriedades do documento PDF. Veja autor, título, datas e outros metadados.",
    "keywords": [
      "metadados do pdf",
      "propriedades do documento",
      "informacoes do pdf",
      "ver detalhes do pdf"
    ],
    "description": "\n      <p>O Visualizar Metadados exibe todas as propriedades do documento e metadados dos seus arquivos PDF. Veja autor, título, assunto, palavras-chave, data de criação, data de modificação e mais.</p>\n      <p>Útil para auditar documentos, verificar informações de arquivos ou confirmar a autenticidade do documento.</p>\n      <p>Toda a visualização ocorre no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Visualizar Propriedades",
        "description": "Veja todos os metadados exibidos em um formato organizado."
      },
      {
        "step": 3,
        "title": "Exportar se Necessário",
        "description": "Opcionalmente, exporte os metadados como JSON."
      }
    ],
    "useCases": [
      {
        "title": "Auditoria de Documentos",
        "description": "Revise as propriedades do documento para conformidade.",
        "icon": "clipboard-check"
      },
      {
        "title": "Verificar Autenticidade",
        "description": "Verifique datas de criação e informações do autor.",
        "icon": "shield"
      },
      {
        "title": "Informações do Arquivo",
        "description": "Obtenha informações detalhadas sobre os arquivos PDF.",
        "icon": "info"
      }
    ],
    "faq": [
      {
        "question": "Quais metadados são mostrados?",
        "answer": "Título, autor, assunto, palavras-chave, criador, produtor, datas e versão do PDF."
      },
      {
        "question": "Posso editar os metadados aqui?",
        "answer": "Use a ferramenta Editar Metadados para modificar as propriedades do documento."
      },
      {
        "question": "Os metadados XMP estão incluídos?",
        "answer": "Sim, os metadados padrão e XMP são exibidos."
      }
    ]
  },
  "pdf-to-zip": {
    "title": "PDFs para ZIP",
    "metaDescription": "Empacote múltiplos PDFs em um arquivo ZIP. Comprima e agrupe arquivos PDF.",
    "keywords": [
      "pdf para zip",
      "comprimir pdfs",
      "agrupar pdfs",
      "arquivar pdfs"
    ],
    "description": "\n      <p>O PDFs para ZIP empacota múltiplos arquivos PDF em um único arquivo ZIP. Comprima e agrupe seus PDFs para facilitar o compartilhamento, armazenamento ou backup.</p>\n      <p>A ferramenta cria um arquivo compactado contendo todos os seus arquivos PDF, reduzindo o tamanho total e simplificando o gerenciamento de arquivos.</p>\n      <p>Todo o processamento ocorre no seu navegador, garantindo que seus arquivos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar PDFs",
        "description": "Arraste e solte múltiplos arquivos PDF ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Configurar o Arquivo",
        "description": "Opcionalmente, defina o nome do arquivo ZIP e o nível de compressão."
      },
      {
        "step": 3,
        "title": "Criar e Baixar",
        "description": "Clique em Criar para gerar o arquivo ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Compartilhamento de Arquivos",
        "description": "Agrupe múltiplos PDFs para facilitar o compartilhamento.",
        "icon": "share-2"
      },
      {
        "title": "Criação de Backup",
        "description": "Crie backups compactados de coleções de PDFs.",
        "icon": "archive"
      },
      {
        "title": "Anexos de E-mail",
        "description": "Combine PDFs em um único anexo para e-mail.",
        "icon": "mail"
      }
    ],
    "faq": [
      {
        "question": "Quanta compressão é aplicada?",
        "answer": "A compressão ZIP normalmente reduz o tamanho total de 10% a 30%."
      },
      {
        "question": "Existe um limite de arquivos?",
        "answer": "Você pode incluir até 100 PDFs em um único arquivo ZIP."
      },
      {
        "question": "Posso definir uma senha?",
        "answer": "A criação de arquivos ZIP protegidos por senha não é suportada no momento."
      }
    ]
  },
  "posterize-pdf": {
    "title": "Posterizar PDF",
    "metaDescription": "Divida páginas grandes de PDF em blocos imprimíveis. Crie pôsteres a partir de páginas de PDF.",
    "keywords": [
      "posterizar pdf",
      "dividir pdf em mosaico",
      "impressao de grande formato",
      "poster em pdf"
    ],
    "description": "\n      <p>O Posterizar PDF divide páginas grandes de PDF em blocos (ladrilhos) menores que podem ser impressos em papel padrão e montados como pôsteres. Perfeito para imprimir diagramas grandes, mapas ou obras de arte.</p>\n      <p>Configure o tamanho da grade e a sobreposição para facilitar a montagem. A ferramenta calcula automaticamente as dimensões dos blocos para o tamanho de saída desejado.</p>\n      <p>Todo o processamento ocorre no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu PDF de grande formato ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Configurar Blocos",
        "description": "Defina o tamanho da grade, a sobreposição e o tamanho do papel de saída."
      },
      {
        "step": 3,
        "title": "Criar e Baixar",
        "description": "Clique em Criar para gerar os blocos imprimíveis."
      }
    ],
    "useCases": [
      {
        "title": "Impressão de Pôsteres",
        "description": "Imprima pôsteres grandes em papel padrão.",
        "icon": "maximize-2"
      },
      {
        "title": "Impressão de Mapas",
        "description": "Imprima mapas grandes em seções para posterior montagem.",
        "icon": "map"
      },
      {
        "title": "Reprodução de Arte",
        "description": "Crie impressões grandes a partir de artes em PDF.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Qual sobreposição devo usar?",
        "answer": "Recomenda-se uma sobreposição de 10 a 20 mm para facilitar o alinhamento durante a montagem."
      },
      {
        "question": "Posso adicionar marcas de corte?",
        "answer": "Sim, marcas de corte podem ser adicionadas para ajudar no corte e alinhamento."
      },
      {
        "question": "Quais tamanhos de papel são suportados?",
        "answer": "A4, Carta, A3 e tamanhos personalizados são suportados."
      }
    ]
  },
  "page-dimensions": {
    "title": "Dimensões da Página",
    "metaDescription": "Analise os tamanhos das páginas do PDF. Visualize as dimensões de todas as páginas em seu documento.",
    "keywords": [
      "tamanho da pagina pdf",
      "dimensoes da pagina",
      "medicoes de pdf",
      "tamanho do documento"
    ],
    "description": "\n      <p>O Dimensões da Página analisa e exibe o tamanho de cada página do seu documento PDF. Visualize as dimensões in várias unidades (polegadas, mm, pontos) e identifique páginas com tamanhos não padrão.</p>\n      <p>Útil para a preparação de impressão, análise de documentos ou identificação de tamanhos de página inconsistentes.</p>\n      <p>Toda a análise ocorre no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Visualizar Dimensões",
        "description": "Veja os tamanhos das páginas exibidos para todas as páginas."
      },
      {
        "step": 3,
        "title": "Exportar Relatório",
        "description": "Opcionalmente, exporte as dimensões como JSON."
      }
    ],
    "useCases": [
      {
        "title": "Planejamento de Impressão",
        "description": "Verifique os tamanhos das páginas antes de imprimir.",
        "icon": "printer"
      },
      {
        "title": "Análise de Documento",
        "description": "Identifique páginas com dimensões incomuns.",
        "icon": "search"
      },
      {
        "title": "Controle de Qualidade",
        "description": "Verifique se os tamanhos das páginas atendem às especificações.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Quais unidades estão disponíveis?",
        "answer": "Polegadas, milímetros, centímetros e pontos."
      },
      {
        "question": "Mostra a orientação?",
        "answer": "Sim, a orientação retrato ou paisagem é indicada."
      },
      {
        "question": "Posso corrigir tamanhos inconsistentes?",
        "answer": "Use a ferramenta Corrigir Tamanho da Página para padronizar as dimensões."
      }
    ]
  },
  "remove-restrictions": {
    "title": "Remover Restrições",
    "metaDescription": "Remova as restrições do PDF. Desbloqueie as permissões de impressão, cópia e edição.",
    "keywords": [
      "remover restricoes pdf",
      "desbloquear pdf",
      "permissoes do pdf",
      "desbloquear permissoes pdf"
    ],
    "description": "\n      <p>O Remover Restrições desbloqueia PDFs que possuem restrições de permissão que impedem a impressão, cópia ou edição. Esta ferramenta remove as restrições de senha do proprietário, preservando o conteúdo do documento.</p>\n      <p>Nota: Esta ferramenta não pode remover senhas de usuário que impedem a abertura do documento. Use a ferramenta Decodificar PDF para arquivos protegidos por senha.</p>\n      <p>Todo o processamento ocorre no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar PDF Restrito",
        "description": "Arraste e solte seu PDF restrito ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Remover Restrições",
        "description": "Clique em Remover para desbloquear o documento."
      },
      {
        "step": 3,
        "title": "Baixar",
        "description": "Baixe o PDF sem restrições."
      }
    ],
    "useCases": [
      {
        "title": "Permitir Impressão",
        "description": "Desbloqueie PDFs que impedem a impressão.",
        "icon": "printer"
      },
      {
        "title": "Permitir Cópia",
        "description": "Permita a seleção e cópia de texto.",
        "icon": "copy"
      },
      {
        "title": "Permitir Edição",
        "description": "Remova as restrições sobre a edição do documento.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "Isso é legal?",
        "answer": "Remover restrições de documentos que você possui ou tem direitos é geralmente legal."
      },
      {
        "question": "Pode remover senhas de abertura?",
        "answer": "Não, use a ferramenta Decodificar PDF para documentos protegidos por senha de abertura."
      },
      {
        "question": "O conteúdo será afetado?",
        "answer": "Não, apenas as restrições são removidas; o conteúdo permanece inalterado."
      }
    ]
  },
  "sanitize-pdf": {
    "title": "Sanitizar PDF",
    "metaDescription": "Remova dados ocultos de PDFs. Limpe metadados, scripts e informações confidenciais.",
    "keywords": [
      "sanitizar pdf",
      "limpar pdf",
      "remover dados ocultos",
      "privacidade do pdf"
    ],
    "description": "\n      <p>O Sanitizar PDF remove dados ocultos e informações potencialmente confidenciais dos seus documentos. Remova metadados, scripts incorporados, anexos, comentários e outros conteúdos ocultos.</p>\n      <p>Essencial para preparar documentos para distribuição pública ou quando a privacidade é uma preocupação.</p>\n      <p>Toda a sanitização ocorre no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Selecionar o que Remover",
        "description": "Escolha quais tipos de dados ocultos deseja remover."
      },
      {
        "step": 3,
        "title": "Sanitizar e Baixar",
        "description": "Clique em Sanitizar para limpar o PDF e baixe."
      }
    ],
    "useCases": [
      {
        "title": "Lançamento Público",
        "description": "Prepare documentos para distribuição pública.",
        "icon": "globe"
      },
      {
        "title": "Proteção de Privacidade",
        "description": "Remova informações pessoais antes do compartilhamento.",
        "icon": "shield"
      },
      {
        "title": "Conformidade de Segurança",
        "description": "Atenda aos requisitos de segurança para o manuseio de documentos.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Quais dados ocultos são removidos?",
        "answer": "Metadados, scripts, anexos, comentários, dados de formulários e camadas ocultas."
      },
      {
        "question": "O conteúdo visível será afetado?",
        "answer": "Não, apenas os dados ocultos são removidos; o conteúdo visível permanece."
      },
      {
        "question": "Isso é reversível?",
        "answer": "Não, os dados removidos não podem ser recuperados. Mantenha um backup do original."
      }
    ]
  },
  "find-and-redact": localizedRedactionContent('pt', 'find-and-redact', "Localizar e Censurar"),
  "flatten-pdf": {
    "title": "Achatar PDF",
    "metaDescription": "Achatamento de formulários e anotações do PDF. Torne o conteúdo não editável.",
    "keywords": [
      "achatar pdf",
      "achatar formularios",
      "achatar anotacoes",
      "pdf nao editavel"
    ],
    "description": "\n      <p>O Achatar PDF converte elementos interativos, como campos de formulário e anotações, em conteúdo estático. O PDF achatado mantém a mesma aparência, mas não pode mais ser editado.</p>\n      <p>Perfeito para finalizar formulários preenchidos, preservar anotações ou criar versões de documentos que não podem ser editadas.</p>\n      <p>Todo o processamento ocorre no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu PDF com formulários ou anotações."
      },
      {
        "step": 2,
        "title": "Selecionar o que Achatar",
        "description": "Escolha achatar formulários, anotações ou ambos."
      },
      {
        "step": 3,
        "title": "Achatar e Baixar",
        "description": "Clique em Achatar para criar o PDF estático."
      }
    ],
    "useCases": [
      {
        "title": "Finalizar Formulários",
        "description": "Bloqueie dados de formulários preenchidos para evitar alterações.",
        "icon": "lock"
      },
      {
        "title": "Preservar Anotações",
        "description": "Torne as anotações permanentes no documento.",
        "icon": "check-circle"
      },
      {
        "title": "Arquivar Documentos",
        "description": "Crie versões não editáveis para fins de arquivamento.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "O achatamento é reversível?",
        "answer": "Não, o achatamento é permanente. Mantenha um backup do original."
      },
      {
        "question": "A aparência vai mudar?",
        "answer": "Não, o documento permanece com a mesma aparência, mas deixa de ser interativo."
      },
      {
        "question": "Isso reduz o tamanho do arquivo?",
        "answer": "Às vezes, pois os elementos interativos são convertidos em conteúdo mais simples."
      }
    ]
  },
  "remove-metadata": {
    "title": "Remover Metadados",
    "metaDescription": "Remova os metadados de arquivos PDF. Remova autor, datas e propriedades do documento.",
    "keywords": [
      "remover metadados pdf",
      "limpar metadados",
      "privacidade do pdf",
      "pdf anonimo"
    ],
    "description": "\n      <p>O Remover Metadados limpa todas as propriedades do documento e metadados dos seus arquivos PDF. Remova nomes de autores, datas de criação, informações do software e outros dados de identificação.</p>\n      <p>Essencial para a privacidade ao compartilhar documentos ou quando os metadados podem revelar informações confidenciais.</p>\n      <p>Todo o processamento ocorre no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Remover Metadados",
        "description": "Clique em Remover para limpar todos os metadados."
      },
      {
        "step": 3,
        "title": "Baixar",
        "description": "Baixe o PDF sem metadados."
      }
    ],
    "useCases": [
      {
        "title": "Proteção de Privacidade",
        "description": "Remova informações pessoais antes do compartilhamento.",
        "icon": "shield"
      },
      {
        "title": "Documentos Anônimos",
        "description": "Crie documentos sem atribuição de autoria.",
        "icon": "user-x"
      },
      {
        "title": "Distribuição Limpa",
        "description": "Distribua documentos sem metadados internos.",
        "icon": "send"
      }
    ],
    "faq": [
      {
        "question": "Quais metadados são removidos?",
        "answer": "Informações de autor, título, assunto, palavras-chave, datas, criador e produtor."
      },
      {
        "question": "Os metadados XMP são removidos?",
        "answer": "Sim, tanto os metadados padrão quanto os XMP são limpos."
      },
      {
        "question": "O conteúdo será afetado?",
        "answer": "Não, apenas os metadados são removidos; o conteúdo do documento permanece inalterado."
      }
    ]
  },
  "change-permissions": {
    "title": "Alterar Permissões",
    "metaDescription": "Modifique as permissões de PDF. Controle o acesso de impressão, cópia e edição.",
    "keywords": [
      "permissoes do pdf",
      "alterar acesso pdf",
      "restringir pdf",
      "seguranca do pdf"
    ],
    "description": "\n      <p>O Alterar Permissões modifica os controles de acesso em seus documentos PDF. Habilite ou desabilite permissões de impressão, cópia, edição e anotação.</p>\n      <p>Defina uma senha de proprietário para impor essas restrições. Os destinatários poderão visualizar o documento, mas ficarão limitados nas ações que podem realizar.</p>\n      <p>Todo o processamento ocorre no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Definir Permissões",
        "description": "Habilite ou desabilite impressão, cópia, edição e anotações."
      },
      {
        "step": 3,
        "title": "Aplicar e Baixar",
        "description": "Defina a senha do proprietário e baixe o PDF restrito."
      }
    ],
    "useCases": [
      {
        "title": "Evitar Cópia",
        "description": "Desative a cópia de texto para proteger seu conteúdo.",
        "icon": "copy"
      },
      {
        "title": "Controlar Impressão",
        "description": "Restrinja ou permita a impressão de documentos.",
        "icon": "printer"
      },
      {
        "title": "Limitar Edição",
        "description": "Impeça modificações no documento.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Preciso de uma senha?",
        "answer": "Uma senha de proprietário é necessária para aplicar e garantir as permissões."
      },
      {
        "question": "As permissões podem ser removidas?",
        "answer": "Sim, com a senha do proprietário ou usando a ferramenta Remover Restrições."
      },
      {
        "question": "Todos os leitores de PDF são compatíveis?",
        "answer": "A maioria dos leitores de PDF respeita as permissões, mas alguns podem não aplicá-las estritamente."
      }
    ]
  },
  "pdf-to-markdown": {
    "title": "PDF para Markdown",
    "metaDescription": "Converta PDF para o formato Markdown. Extraia texto e preserve a formatação como títulos e listas.",
    "keywords": [
      "pdf para markdown",
      "converter pdf para md",
      "extracao de texto pdf",
      "conversor markdown",
      "pdf para texto"
    ],
    "description": "\n      <p>O PDF para Markdown converte seus documentos PDF em arquivos Markdown limpos e bem estruturados. A ferramenta extrai o conteúdo do texto de forma inteligente e tenta preservar a formatação, como cabeçalhos, listas e parágrafos.</p>\n      <p>Perfeito para converter documentos PDF em formatos editáveis para documentação, anotações ou sistemas de gerenciamento de conteúdo que suportam Markdown.</p>\n      <p>Toda a conversão ocorre localmente no seu navegador, garantindo que seus documentos permaneçam privados e seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Configurar Opções",
        "description": "Defina o intervalo de páginas, escolha se deseja incluir números de página e ajuste as configurações de quebra de linha."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Clique em Converter para gerar seu arquivo Markdown e baixe."
      }
    ],
    "useCases": [
      {
        "title": "Documentação",
        "description": "Converta manuais e guias em PDF para Markdown para documentação controlada por versão.",
        "icon": "file-text"
      },
      {
        "title": "Anotações",
        "description": "Extraia conteúdo de artigos e livros em PDF para seu sistema de notas pessoais.",
        "icon": "edit-3"
      },
      {
        "title": "Migração de Conteúdo",
        "description": "Migre conteúdo em PDF para plataformas CMS que suportam Markdown.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "A formatação é preservada?",
        "answer": "A ferramenta tenta detectar títulos com base no tamanho da fonte e listas com marcadores ou numeradas. Layouts complexos podem exigir ajustes manuais."
      },
      {
        "question": "Posso converter páginas específicas?",
        "answer": "Sim, você pode especificar um intervalo de páginas como \"1-3, 5, 7\" para converter apenas essas páginas."
      },
      {
        "question": "Funciona com PDFs digitalizados?",
        "answer": "PDFs digitalizados contêm imagens, não texto editável. Use nossa ferramenta de OCR primeiro para extrair o texto antes de convertê-lo para Markdown."
      }
    ]
  },
  "pdf-booklet": {
    "title": "Criador de Livreto PDF",
    "metaDescription": "Crie layouts de livreto a partir de PDF para impressão. Organize páginas para encadernação com grampo canoa com várias opções de grade.",
    "keywords": [
      "livreto pdf",
      "criador de livreto",
      "imprimir livreto",
      "grampo canoa",
      "imposicao pdf"
    ],
    "description": "\n      <p>O Criador de Livreto PDF organiza as páginas do seu PDF em layouts de livreto prontos para impressão e dobra. Perfeito para criar brochuras, zines, folhetos e publicações com encadernação em grampo canoa.</p>\n      <p>Escolha entre vários modos de grade (1x2, 2x2, 2x4, 4x4), tamanhos de papel e opções de orientação. A ferramenta lida automaticamente com a imposição de páginas para a sequência correta de dobra.</p>\n      <p>Todo o processamento ocorre localmente no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Carregue o documento PDF que deseja converter em um livreto."
      },
      {
        "step": 2,
        "title": "Escolher o Layout",
        "description": "Selecione o modo de grade, tamanho do papel, orientação e opções de rotação."
      },
      {
        "step": 3,
        "title": "Criar e Baixar",
        "description": "Gere o layout do livreto e baixe para impressão."
      }
    ],
    "useCases": [
      {
        "title": "Brochures e Folhetos",
        "description": "Crie brochuras prontas para dobra a partir de documentos PDF padrão.",
        "icon": "book-open"
      },
      {
        "title": "Zines",
        "description": "Produza zines de autopublicação com a imposição de páginas correta.",
        "icon": "book"
      },
      {
        "title": "Programas de Eventos",
        "description": "Crie livretos de programação profissional para eventos.",
        "icon": "calendar"
      }
    ],
    "faq": [
      {
        "question": "O que é encadernação com grampo canoa?",
        "answer": "A encadernação com grampo canoa (saddle-stitch) é um método onde folhas dobradas são encaixadas umas dentro das outras e grampeadas ao longo da dobra central."
      },
      {
        "question": "Qual modo de grade devo usar?",
        "answer": "O modo 1x2 é o padrão para livretos comuns. Use 2x2 ou maior para impressão de múltiplas páginas para economizar papel."
      },
      {
        "question": "Posso visualizar o layout?",
        "answer": "Sim, a ferramenta fornece uma visualização visual antes de gerar o livreto final."
      }
    ]
  },
  "rasterize-pdf": {
    "title": "Rasterizar PDF",
    "metaDescription": "Converta páginas de PDF em imagens de alta qualidade. Exporte como PNG, JPEG ou WebP com configurações de DPI personalizadas.",
    "keywords": [
      "rasterizar pdf",
      "pdf para imagem",
      "pdf para png",
      "pdf para jpeg",
      "converter paginas pdf"
    ],
    "description": "\n      <p>O Rasterizar PDF converte as páginas do seu PDF em imagens rasterizadas de alta qualidade. Escolha entre os formatos de saída PNG, JPEG ou WebP com controle total sobre as configurações de DPI e qualidade.</p>\n      <p>Perfeito para criar miniaturas, imagens para redes sociais ou arquivar o conteúdo do PDF como imagens. Suporta seleção de intervalo de páginas e processamento em lote.</p>\n      <p>Todo o processamento ocorre localmente no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Arraste e solte seu arquivo PDF ou clique para selecionar."
      },
      {
        "step": 2,
        "title": "Configurar Saída",
        "description": "Selecione o DPI, o formato de saída (PNG/JPEG/WebP), a qualidade e o intervalo de páginas."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Processe as páginas e baixe as imagens individualmente ou compactadas em um arquivo ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Redes Sociais",
        "description": "Converta slides de PDF em imagens para postagem em redes sociais.",
        "icon": "share-2"
      },
      {
        "title": "Miniaturas (Thumbnails)",
        "description": "Gere miniaturas de visualização para documentos PDF.",
        "icon": "image"
      },
      {
        "title": "Publicação na Web",
        "description": "Converta conteúdo de PDF em formatos de imagem otimizados para a web.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Qual DPI devo usar?",
        "answer": "72 DPI para tela, 150 DPI para uso geral, 300 DPI para qualidade de impressão."
      },
      {
        "question": "Qual formato é o melhor?",
        "answer": "PNG para qualidade/transparência, JPEG para tamanho reduzido e WebP para uso moderno na web."
      },
      {
        "question": "Posso converter páginas específicas?",
        "answer": "Sim, especifique intervalos de páginas como \"1-5, 8, 10-15\" para converter apenas essas páginas."
      }
    ]
  },
  "markdown-to-pdf": {
    "title": "Markdown para PDF",
    "metaDescription": "Converta arquivos Markdown em documentos PDF com formatação elegante. Suporte para GitHub Flavored Markdown e realce de sintaxe.",
    "keywords": [
      "markdown para pdf",
      "md para pdf",
      "converter markdown",
      "gfm para pdf",
      "conversor markdown"
    ],
    "description": "\n      <p>O Markdown para PDF converte seus arquivos Markdown em documentos PDF com estilo profissional. Suporta CommonMark e GitHub Flavored Markdown (GFM), incluindo tabelas, listas de tarefas e blocos de código.</p>\n      <p>Escolha entre vários temas (claro, escuro, GitHub) e personalize o tamanho da página e as margens. Os blocos de código possuem realce de sintaxe para melhor legibilidade.</p>\n      <p>Toda a conversão ocorre localmente no seu navegador, garantindo que seu conteúdo permaneça privado.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar Arquivo Markdown",
        "description": "Carregue seu arquivo com extensão .md ou .markdown."
      },
      {
        "step": 2,
        "title": "Escolher Tema",
        "description": "Selecione um tema visual e configure as definições da página."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Gere o PDF estilizado e baixe."
      }
    ],
    "useCases": [
      {
        "title": "Documentação",
        "description": "Converta arquivos README e documentações em PDFs prontos para compartilhamento.",
        "icon": "file-text"
      },
      {
        "title": "Exportação de Notas",
        "description": "Exporte notas em Markdown para PDF para impressão ou compartilhamento.",
        "icon": "edit-3"
      },
      {
        "title": "Relatórios",
        "description": "Crie relatórios a partir de Markdown com estilo profissional.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "O GitHub Flavored Markdown é suportado?",
        "answer": "Sim, tabelas, listas de tarefas, tachado e outros recursos do GFM são totalmente suportados."
      },
      {
        "question": "Posso personalizar o estilo?",
        "answer": "Escolha entre temas predefinidos ou adicione CSS personalizado para controle total."
      },
      {
        "question": "Os blocos de código são destacados?",
        "answer": "Sim, os blocos de código incluem realce de sintaxe para as linguagens de programação mais comuns."
      }
    ]
  },
  "cbz-to-pdf": {
    "title": "CBZ para PDF",
    "metaDescription": "Converta arquivos de quadrinhos (CBZ) para PDF. Preserve a ordem das imagens e a qualidade para quadrinhos digitais.",
    "keywords": [
      "cbz para pdf",
      "quadrinhos para pdf",
      "converter cbz",
      "conversor de quadrinhos",
      "conversor cbz"
    ],
    "description": "\n      <p>O CBZ para PDF converte arquivos de quadrinhos digitais (Comic Book Archive) em documentos PDF. A ferramenta extrai todas as imagens do arquivo CBZ e as compila em um PDF, mantendo a ordem correta de leitura.</p>\n      <p>Escolha entre várias opções de tamanho de página, incluindo as dimensões originais da imagem ou tamanhos padronizados de revistas em quadrinhos. Perfeito para ler quadrinhos em dispositivos que suportam PDF mas não abrem arquivos CBZ.</p>\n      <p>Toda a conversão ocorre localmente no seu navegador, garantindo que seus quadrinhos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar Arquivo CBZ",
        "description": "Carregue seu arquivo de quadrinhos com extensão .cbz."
      },
      {
        "step": 2,
        "title": "Selecionar Opções",
        "description": "Escolha as configurações de tamanho de página e qualidade da imagem."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Converta para PDF e baixe seus quadrinhos."
      }
    ],
    "useCases": [
      {
        "title": "Compatibilidade com E-Readers",
        "description": "Converta CBZ para PDF para e-readers que só aceitam o formato PDF.",
        "icon": "book"
      },
      {
        "title": "Arquivamento de Quadrinhos",
        "description": "Crie arquivos PDF da sua coleção de quadrinhos digitais.",
        "icon": "archive"
      },
      {
        "title": "Preparação para Impressão",
        "description": "Converta quadrinhos digitais para PDF para posterior impressão.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "O que é o formato CBZ?",
        "answer": "O CBZ é um arquivo ZIP que contém páginas de quadrinhos em formato de imagem, renomeado com a extensão .cbz."
      },
      {
        "question": "A qualidade das imagens é preservada?",
        "answer": "Sim, as imagens são incorporadas com sua qualidade original no arquivo PDF."
      },
      {
        "question": "Pastas aninhadas são suportadas?",
        "answer": "Sim, as imagens de todas as pastas contidas no arquivo compactado são extraídas e ordenadas corretamente."
      }
    ]
  },
  "font-to-outline": {
    "title": "Converter Fontes em Contornos",
    "metaDescription": "Remova as dependências de fontes de documentos PDF convertendo as páginas em imagens de alta qualidade. Garante a compatibilidade em todos os sistemas.",
    "keywords": [
      "fontes em contornos",
      "contornar fontes",
      "remover fontes",
      "compatibilidade de fontes",
      "achatar fontes pdf",
      "remocao de fontes pdf"
    ],
    "description": "\n      <p>O Converter Fontes em Contornos remove todas as dependências de fontes do seu PDF, convertendo cada página em conteúdo rasterizado de alta qualidade. Isso garante que seu documento tenha exatamente a mesma aparência em qualquer sistema, mesmo que as fontes originais não estejam instaladas.</p>\n      <p>A ferramenta renderiza cada página no DPI escolhido (150-600), removendo fontes incorporadas enquanto preserva a aparência visual exata. Opcionalmente, você pode adicionar uma camada de texto invisível para manter a capacidade de pesquisa.</p>\n      <p>Isso é essencial para preparação de impressão, compatibilidade multiplataforma e para evitar problemas de licenciamento de fontes ao compartilhar documentos. Todo o processamento ocorre localmente no seu navegador.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Carregue o PDF que contém as fontes que deseja remover."
      },
      {
        "step": 2,
        "title": "Configurar Qualidade",
        "description": "Escolha o DPI (300 recomendado para impressão, 150 para tela). Ative o texto pesquisável, se necessário."
      },
      {
        "step": 3,
        "title": "Converter e Baixar",
        "description": "Processe o arquivo e baixe o PDF independente de fontes."
      }
    ],
    "useCases": [
      {
        "title": "Preparação para Impressão",
        "description": "Elimine problemas de fontes em impressoras comerciais removendo todas as dependências de fontes.",
        "icon": "printer"
      },
      {
        "title": "Compartilhamento Multiplataforma",
        "description": "Compartilhe documentos que parecem idênticos em qualquer dispositivo, independentemente das fontes instaladas.",
        "icon": "share-2"
      },
      {
        "title": "Licenciamento de Fontes",
        "description": "Remova fontes incorporadas para evitar preocupações com licenciamento ao distribuir documentos.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Como isso funciona?",
        "answer": "A ferramenta renderiza cada página em alta resolução (no DPI escolhido) e recria o PDF a partir dessas imagens, removendo todas as dependências de fontes enquanto preserva a aparência visual."
      },
      {
        "question": "Ainda posso selecionar texto após a conversão?",
        "answer": "Por padrão, não. O texto se torna parte da imagem. No entanto, você pode ativar a opção \"Preservar texto pesquisável\" para adicionar uma camada de texto invisível para funcionalidades de pesquisa e cópia."
      },
      {
        "question": "Qual DPI devo usar?",
        "answer": "300 DPI é recomendado para saída com qualidade de impressão. 150 DPI é suficiente para visualização em tela e produz arquivos menores. 600 DPI fornece a mais alta qualidade, mas gera arquivos grandes."
      },
      {
        "question": "O tamanho do arquivo vai aumentar?",
        "answer": "O tamanho do arquivo depende do DPI e do conteúdo. 150 DPI geralmente produz arquivos menores, 300 DPI pode aumentar o tamanho e 600 DPI aumenta significativamente. A compactação é aplicada automaticamente."
      },
      {
        "question": "Isso é reversível?",
        "answer": "Não, os dados das fontes são removidos permanentemente. Mantenha um backup do original se precisar editar o texto com as fontes originais."
      },
      {
        "question": "E quanto aos gráficos vetoriais?",
        "answer": "Gráficos vetoriais (formas, linhas) no PDF original serão convertidos em raster juntamente com o texto. A qualidade visual é preservada no DPI escolhido."
      }
    ]
  },
  "extract-tables": {
    "title": "Extrair Tabelas de PDF",
    "metaDescription": "Detecte e extraia tabelas de documentos PDF. Exporte para os formatos JSON, Markdown ou CSV.",
    "keywords": [
      "extrair tabelas",
      "extracao de tabelas pdf",
      "pdf para csv",
      "pdf para excel",
      "deteccao de tabelas"
    ],
    "description": "\n      <p>O Extrair Tabelas de PDF detecta dados tabulares em seus documentos PDF e os exporta em formatos estruturados. Escolha JSON para integração de dados, Markdown para documentação ou CSV para planilhas.</p>\n      <p>A ferramenta usa algoritmos de detecção inteligente para identificar estruturas de tabelas mesmo em documentos complexos. Especifique intervalos de páginas e ajuste parâmetros de detecção para resultados ideais.</p>\n      <p>Todo o processamento ocorre localmente no seu navegador, garantindo que seus documentos permaneçam privados.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Carregue o PDF contendo as tabelas que deseja extrair."
      },
      {
        "step": 2,
        "title": "Configurar Detecção",
        "description": "Defina o intervalo de páginas e os limites mínimos de colunas/linhas."
      },
      {
        "step": 3,
        "title": "Exportar e Baixar",
        "description": "Escolha o formato de saída (JSON/Markdown/CSV) e baixe."
      }
    ],
    "useCases": [
      {
        "title": "Análise de Dados",
        "description": "Extraia dados de tabelas para análise em planilhas ou bancos de dados.",
        "icon": "bar-chart"
      },
      {
        "title": "Processamento de Relatórios",
        "description": "Extraia tabelas de relatórios em PDF para processamento posterior.",
        "icon": "file-text"
      },
      {
        "title": "Documentação",
        "description": "Converta tabelas de PDF para Markdown para documentação técnica.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Pode detectar tabelas complexas?",
        "answer": "A ferramenta funciona melhor com tabelas de grade simples. Células mescladas complexas podem exigir ajustes manuais."
      },
      {
        "question": "O que fazer se nenhuma tabela for encontrada?",
        "answer": "Tente ajustar o limite mínimo de colunas/linhas ou verifique se o PDF contém estruturas de tabelas reais."
      },
      {
        "question": "Posso extrair de páginas específicas?",
        "answer": "Sim, especifique um intervalo de páginas para limitar a extração a determinadas páginas."
      }
    ]
  },
  "ocg-manager": {
    "title": "Gerenciador de Camadas PDF (OCG)",
    "metaDescription": "Gerencie camadas de PDF (Grupos de Conteúdo Opcional). Visualize, ative/desative, adicione, exclua e renomeie camadas em seus documentos PDF.",
    "keywords": [
      "camadas pdf",
      "gerenciador ocg",
      "grupos de conteudo opcional",
      "visibilidade de camadas pdf",
      "gerenciar camadas pdf"
    ],
    "description": "\n      <p>O Gerenciador de Camadas PDF permite visualizar e gerenciar Grupos de Conteúdo Opcional (OCG) em seus documentos PDF. As camadas OCG são usadas em desenhos técnicos, mapas e documentos complexos para organizar o conteúdo em camadas ativáveis/desativáveis.</p>\n      <p>Visualize todas as camadas em seu PDF, alterne sua visibilidade, adicione novas camadas, exclua as indesejadas ou renomeie as existentes. Esta ferramenta é essencial para trabalhar com PDFs em camadas, como plantas arquitetônicas, exportações de CAD e documentos prontos para impressão.</p>\n      <p>Todo o processamento ocorre localmente no seu navegador, garantindo que seus documentos permaneçam privados e seguros.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carregar seu PDF",
        "description": "Carregue um arquivo PDF que contenha camadas (OCG) ou um no qual deseja adicionar camadas."
      },
      {
        "step": 2,
        "title": "Visualizar Camadas",
        "description": "A ferramenta lista automaticamente todas as camadas encontradas no documento com seu status de visibilidade."
      },
      {
        "step": 3,
        "title": "Gerenciar Camadas",
        "description": "Alterne a visibilidade das camadas, renomeie camadas, adicione novas ou exclua camadas indesejadas."
      },
      {
        "step": 4,
        "title": "Salvar e Baixar",
        "description": "Baixe o PDF modificado com as alterações de camadas aplicadas."
      }
    ],
    "useCases": [
      {
        "title": "Desenhos Técnicos",
        "description": "Gerencie camadas em exportações de CAD para mostrar/ocultar dimensões, anotações ou diferentes vistas.",
        "icon": "ruler"
      },
      {
        "title": "Edição de Mapas",
        "description": "Alterne diferentes camadas do mapa, como topografia, estradas e etiquetas, para impressões personalizadas.",
        "icon": "map"
      },
      {
        "title": "Preparação para Impressão",
        "description": "Prepare PDFs em camadas para impressão, alternando as camadas apropriadas para diferentes versões.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "O que são camadas de PDF (OCG)?",
        "answer": "Os Grupos de Conteúdo Opcional (OCG) são camadas em um PDF que podem ser exibidas ou ocultadas. São comumente usadas em desenhos CAD, mapas e documentos complexos."
      },
      {
        "question": "Por que meu PDF não mostra nenhuma camada?",
        "answer": "Nem todos os PDFs contêm camadas. As camadas são normalmente adicionadas durante a criação do PDF a partir de softwares de design ou aplicações CAD."
      },
      {
        "question": "As alterações de camadas afetarão o conteúdo original?",
        "answer": "As alterações de visibilidade das camadas afetam apenas o que é exibido ou impresso. O conteúdo real permanece no documento."
      }
    ]
  },
  "pdf-reader": {
    "title": "Leitor de PDF",
    "metaDescription": "Leitor de PDF online gratuito. Visualize, navegue, amplie, rotacione e imprima documentos PDF diretamente no seu navegador.",
    "keywords": [
      "leitor de pdf",
      "visualizador de pdf",
      "ver pdf online",
      "ler pdf",
      "visualizador pdf navegador"
    ],
    "description": "\n      <p>O Leitor de PDF é um visualizador completo que permite ler e navegar por documentos PDF diretamente no seu navegador. Nenhuma instalação de software é necessária - basta carregar seu PDF e começar a ler.</p>\n      <p>Navegue entre as páginas, amplie e reduza o zoom, rotacione a visualização e use o modo de tela cheia para uma leitura sem distrações. Você também pode imprimir documentos ou baixá-los para acesso offline.</p>\n      <p>Toda a visualização ocorre localmente no seu navegador. Seus documentos nunca são enviados para qualquer servidor, garantindo privacidade total.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Abrir seu PDF",
        "description": "Clique para carregar ou arraste e solte um arquivo PDF para abri-lo no leitor."
      },
      {
        "step": 2,
        "title": "Navegar pelas Páginas",
        "description": "Use os controles de página para ir para a página anterior ou seguinte, ou pule para um número de página específico."
      },
      {
        "step": 3,
        "title": "Ajustar Visualização",
        "description": "Aumente ou diminua o zoom, rotacione a visualização ou entre no modo de tela cheia para uma leitura confortável."
      },
      {
        "step": 4,
        "title": "Imprimir ou Baixar",
        "description": "Imprima o documento ou baixe-o para acesso offline quando necessário."
      }
    ],
    "useCases": [
      {
        "title": "Revisão de Documentos",
        "description": "Revise documentos PDF rapidamente sem instalar nenhum software.",
        "icon": "book-open"
      },
      {
        "title": "Leitura Móvel",
        "description": "Leia documentos PDF em qualquer dispositivo com um navegador da web.",
        "icon": "smartphone"
      },
      {
        "title": "Visualização Rápida",
        "description": "Visualize PDFs antes de decidir baixá-los ou imprimi-los.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Meu documento está seguro?",
        "answer": "Sim, seu documento é processado inteiramente no seu navegador e nunca é enviado para nenhum servidor."
      },
      {
        "question": "Posso fazer anotações ou editar o PDF?",
        "answer": "Esta ferramenta serve apenas para visualização. Use nossas ferramentas Assinar PDF ou Anotar PDF para edições."
      },
      {
        "question": "Funciona em dispositivos móveis?",
        "answer": "Sim, o Leitor de PDF funciona em todos os dispositivos com um navegador da web moderno."
      }
    ]
  }
,
"redact-pdf": localizedRedactionContent('pt', 'redact-pdf', "Ocultar dados do PDF")
};
