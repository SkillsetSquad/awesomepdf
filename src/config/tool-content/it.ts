import { localizedRedactionContent } from './redaction-locales';
/**
 * Italian tool content for SEO
 * Contains detailed descriptions, how-to steps, use cases, and FAQs for all 67 tools
 * Requirements: 4.2-4.5 - Tool page content (description, how-to, use cases, FAQ)
 */

import { ToolContent } from '@/types/tool';

/**
 * Contenuti degli strumenti in italiano per SEO
 * Contiene descrizioni dettagliate, guide passo-passo, casi d’uso e FAQ per tutti i 67 strumenti
 * Requisiti: 4.2–4.5 - Contenuti delle pagine degli strumenti (descrizione, guida, casi d’uso, FAQ)
 */
export const toolContentIt: Record<string, ToolContent> = {
  "pdf-multi-tool": {
    "title": "Strumento PDF multifunzione",
    "metaDescription": "Editor PDF tutto-in-uno: unisci, dividi, organizza, elimina, ruota ed estrai pagine in un unico potente strumento.",
    "keywords": [
      "pdf multifunzione",
      "editor pdf",
      "unisci pdf",
      "dividi pdf",
      "organizza pdf",
      "pdf tutto in uno"
    ],
    "description": "\n      <p>Lo Strumento PDF multifunzione è la tua soluzione completa per tutte le attività di gestione delle pagine PDF. Questo potente strumento tutto‑in‑uno combina più operazioni PDF in un'unica interfaccia intuitiva, facendoti risparmiare tempo e fatica.</p>\n      <p>Che tu debba unire più documenti, dividere un PDF grande in file più piccoli, riorganizzare le pagine, eliminare contenuti indesiderati, ruotare le pagine o estrarre sezioni specifiche, questo strumento gestisce tutto senza passare tra applicazioni diverse.</p>\n      <p>Tutta l'elaborazione avviene direttamente nel tuo browser, garantendo che i tuoi documenti rimangano privati e sicuri. Nessun file viene caricato su alcun server.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il tuo PDF",
        "description": "Trascina e rilascia il tuo file PDF nell’area di caricamento, oppure clicca per sfogliare e selezionare i file dal tuo dispositivo."
      },
      {
        "step": 2,
        "title": "Scegli l’operazione",
        "description": "Seleziona tra le operazioni disponibili: unisci, dividi, organizza, elimina pagine, ruota, aggiungi pagine vuote o estrai pagine."
      },
      {
        "step": 3,
        "title": "Configura le opzioni",
        "description": "Regola le impostazioni specifiche dell’operazione scelta, come intervalli di pagine, angoli di rotazione o ordine di unione."
      },
      {
        "step": 4,
        "title": "Elabora e scarica",
        "description": "Clicca sul pulsante di elaborazione e scarica il PDF modificato una volta completata l’operazione."
      }
    ],
    "useCases": [
      {
        "title": "Preparazione documenti",
        "description": "Prepara i documenti per l’invio rimuovendo pagine superflue, riordinando i contenuti e combinando più file.",
        "icon": "file-check"
      },
      {
        "title": "Assemblaggio report",
        "description": "Combina più sezioni di report, aggiungi copertine e organizza i capitoli in un unico documento professionale.",
        "icon": "book-open"
      },
      {
        "title": "Gestione archivi",
        "description": "Dividi grandi file d’archivio in sezioni gestibili, estrai pagine rilevanti e riorganizza documenti storici.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quanti PDF posso elaborare contemporaneamente?",
        "answer": "Puoi caricare ed elaborare fino a 10 file PDF in simultanea, con dimensione complessiva massima di 500MB."
      },
      {
        "question": "I segnalibri verranno preservati?",
        "answer": "Sì, durante l’unione il tool preserva i segnalibri esistenti e può opzionalmente combinarli in una struttura unificata."
      },
      {
        "question": "C’è un limite di pagine?",
        "answer": "Non c’è un limite rigoroso. Il tool gestisce documenti con centinaia di pagine; i file molto grandi possono richiedere più tempo di elaborazione."
      }
    ]
  },
  "merge-pdf": {
    "title": "Unisci PDF",
    "metaDescription": "Combina più file PDF in un unico documento. Unione PDF online gratuita con riordinamento tramite drag‑and‑drop.",
    "keywords": [
      "unisci pdf",
      "combina pdf",
      "unire pdf",
      "unione pdf",
      "concatena pdf"
    ],
    "description": "\n      <p>Unisci PDF ti consente di combinare rapidamente e facilmente più documenti PDF in un unico file. Che tu stia consolidando report, unendo documenti scansionati o assemblando una presentazione, questo strumento rende il processo fluido.</p>\n      <p>Carica i file, disponili nell’ordine desiderato tramite drag‑and‑drop e uniscili in un unico documento coerente. Il tool preserva la qualità dei file originali e può opzionalmente mantenere i segnalibri di ciascun documento sorgente.</p>\n      <p>L’unione avviene interamente nel tuo browser, garantendo piena privacy per i tuoi documenti sensibili.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica i PDF",
        "description": "Trascina e rilascia più file PDF nell’area di caricamento, oppure clicca per selezionarli dal tuo dispositivo."
      },
      {
        "step": 2,
        "title": "Ordina i file",
        "description": "Trascina e rilascia le miniature dei file per disporle nell’ordine desiderato."
      },
      {
        "step": 3,
        "title": "Unisci e scarica",
        "description": "Clicca su “Unisci” per combinare tutti i file, quindi scarica il PDF unito."
      }
    ],
    "useCases": [
      {
        "title": "Combina report",
        "description": "Unisci report mensili o trimestrali in un unico documento annuale per semplificare distribuzione e archiviazione.",
        "icon": "file-text"
      },
      {
        "title": "Assembla portfolio",
        "description": "Combina documenti di progetto, certificati o campioni di lavoro in un portfolio professionale.",
        "icon": "briefcase"
      },
      {
        "title": "Consolida fatture",
        "description": "Unisci più fatture o ricevute in un unico documento per contabilità e conservazione.",
        "icon": "receipt"
      }
    ],
    "faq": [
      {
        "question": "Quanti PDF posso unire?",
        "answer": "Puoi unire fino a 100 PDF contemporaneamente, con dimensione totale massima di 500MB."
      },
      {
        "question": "La qualità originale viene mantenuta?",
        "answer": "Sì, il processo di unione preserva la qualità originale dei documenti senza compressione o perdita di qualità."
      },
      {
        "question": "Posso unire PDF protetti da password?",
        "answer": "Prima occorre rimuovere la password. Usa lo strumento “Decripta PDF” per sbloccare i file prima dell’unione."
      }
    ]
  },
  "rotate-custom": {
    "title": "Ruota con gradi personalizzati",
    "metaDescription": "Ruota le pagine PDF con qualsiasi angolo. Rotazione personalizzata precisa per raddrizzare documenti scansionati.",
    "keywords": [
      "ruota pdf angolo personalizzato",
      "raddrizza pdf",
      "correggi inclinazione pdf",
      "rotazione pdf personalizzata"
    ],
    "description": "\n      <p>La rotazione con gradi personalizzati ti offre un controllo preciso sull’orientamento delle pagine PDF. A differenza degli strumenti standard che supportano solo incrementi di 90°, questo tool consente di ruotare le pagine con qualsiasi angolo specifico.</p>\n      <p>È perfetto per raddrizzare documenti scansionati leggermente inclinati o per regolare diagrammi e grafici alla corretta orientazione. Puoi correggere singole pagine oppure applicare la stessa rotazione all’intero documento.</p>\n      <p>L’elaborazione avviene localmente nel tuo browser, garantendo privacy e un allineamento impeccabile.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Carica il file PDF contenente le pagine da ruotare."
      },
      {
        "step": 2,
        "title": "Imposta l’angolo",
        "description": "Inserisci il grado esatto di rotazione per ogni pagina oppure imposta un angolo batch per tutte le pagine."
      },
      {
        "step": 3,
        "title": "Anteprima e regolazioni",
        "description": "Usa l’anteprima in tempo reale per garantire un allineamento perfetto delle pagine."
      },
      {
        "step": 4,
        "title": "Applica e scarica",
        "description": "Clicca su “Ruota” per applicare le modifiche e scaricare il PDF raddrizzato."
      }
    ],
    "useCases": [
      {
        "title": "Documenti scansionati",
        "description": "Raddrizza pagine scansionate inserite nello scanner con un angolo.",
        "icon": "scan"
      },
      {
        "title": "Disegni tecnici",
        "description": "Regola con precisione l’orientamento di diagrammi tecnici e planimetrie.",
        "icon": "ruler"
      },
      {
        "title": "Layout creativi",
        "description": "Crea layout originali ruotando le pagine a specifici angoli artistici.",
        "icon": "pen-tool"
      }
    ],
    "faq": [
      {
        "question": "Posso ruotare con decimali, ad es. 45,5°?",
        "answer": "Al momento il tool supporta gradi interi; stiamo lavorando per abilitare la precisione decimale."
      },
      {
        "question": "La rotazione influisce sul contenuto?",
        "answer": "Il contenuto viene ruotato visivamente. La dimensione della pagina si adatta automaticamente al contenuto ruotato."
      },
      {
        "question": "Posso ruotare solo una pagina?",
        "answer": "Sì, puoi impostare un angolo di rotazione personalizzato per una singola pagina lasciando invariate le altre."
      }
    ]
  },
  "grid-combine": {
    "title": "Combina PDF in griglia",
    "metaDescription": "Combina più file PDF su pagine singole con un layout a griglia flessibile. Disponi 2, 4, 6, 9 o più PDF per pagina con bordi e spaziatura.",
    "keywords": [
      "griglia pdf",
      "unisci pdf in griglia",
      "collage pdf",
      "più pdf su una pagina",
      "pdf n-up",
      "combina pdf in griglia"
    ],
    "description": "\n      <p>Lo strumento “Combina in griglia” offre un modo unico per unire più file PDF distinti su pagine singole. Diversamente da “Unisci PDF”, che accoda le pagine, o da “N‑Up”, che riorganizza le pagine di un singolo documento, la griglia prende più file in input e li dispone affiancati in un layout personalizzabile.</p>\n      <p>Puoi scegliere tra diverse configurazioni di griglia, come 2×1, 2×2, 3×3, ecc. È ideale per confrontare più documenti, creare dispense da fonti diverse o stampare versioni compatte di vari file.</p>\n      <p>Personalizza l’output controllando dimensione pagina, orientamento, margini, spaziatura e bordi. Tutta l’elaborazione avviene localmente nel browser per la massima privacy.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica i PDF",
        "description": "Carica due o più file PDF da combinare. Puoi riordinarli nell’ordine desiderato."
      },
      {
        "step": 2,
        "title": "Scegli il layout di griglia",
        "description": "Seleziona il layout di griglia (es. 2×2 per 4 file a pagina, 3×3 per 9 file a pagina)."
      },
      {
        "step": 3,
        "title": "Personalizza l’aspetto",
        "description": "Regola impostazioni come dimensione pagina (A4, Letter), orientamento, spaziatura e bordi."
      },
      {
        "step": 4,
        "title": "Combina e scarica",
        "description": "Clicca su “Combina PDF” per generare il documento con layout a griglia e scaricare il risultato."
      }
    ],
    "useCases": [
      {
        "title": "Confronto visivo",
        "description": "Metti versioni diverse di un progetto o documento affiancate sulla stessa pagina per un confronto rapido.",
        "icon": "layout-grid"
      },
      {
        "title": "Stampa dispense",
        "description": "Combina più documenti brevi o slide su un unico foglio per risparmiare sui costi di stampa.",
        "icon": "printer"
      },
      {
        "title": "Creazione portfolio",
        "description": "Mostra più file di progetto in una panoramica ordinata e pulita in griglia.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "In cosa differisce da N‑Up?",
        "answer": "N‑Up prende pagine da UN solo PDF e le mette su un foglio. La griglia prende PIÙ PDF DIVERSI e li mette sullo stesso foglio."
      },
      {
        "question": "Quanti file posso combinare?",
        "answer": "Puoi combinare fino a 100 file a seconda della memoria del browser; layout come 4×4 consentono fino a 16 file per pagina."
      },
      {
        "question": "Posso aggiungere bordi?",
        "answer": "Sì, puoi aggiungere i bordi intorno a ciascun file PDF e personalizzare il colore del bordo."
      }
    ]
  },
  "split-pdf": {
    "title": "Dividi PDF",
    "metaDescription": "Dividi i file PDF in più documenti. Estrai pagine specifiche o suddividi per intervalli di pagine.",
    "keywords": [
      "dividi pdf",
      "separa pdf",
      "estrai pagine",
      "divisione pdf"
    ],
    "description": "\n      <p>Dividi PDF consente di suddividere un singolo documento PDF in più file più piccoli. È ideale per estrarre capitoli specifici, separare documenti combinati o creare file individuali da un PDF multipagina.</p>\n      <p>Puoi dividere per intervalli di pagine, estrarre pagine singole o suddividere il documento a intervalli regolari. Il tool offre un’anteprima visiva delle pagine, rendendo facile selezionare esattamente ciò che ti serve.</p>\n      <p>Tutta l’elaborazione avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il PDF oppure clicca per sfogliare e selezionare il file da dividere."
      },
      {
        "step": 2,
        "title": "Seleziona il metodo",
        "description": "Scegli come dividere: per intervalli di pagine, estrai pagine specifiche oppure dividi a intervalli regolari."
      },
      {
        "step": 3,
        "title": "Definisci gli intervalli",
        "description": "Inserisci i numeri di pagina o gli intervalli da estrarre (es. 1‑5, 8, 10‑15)."
      },
      {
        "step": 4,
        "title": "Dividi e scarica",
        "description": "Clicca su “Dividi” per creare i nuovi PDF e scaricarli singolarmente o come archivio ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Estrai capitoli",
        "description": "Dividi un libro o un manuale in capitoli singoli per una lettura o distribuzione più agevole.",
        "icon": "book"
      },
      {
        "title": "Separa scansioni combinate",
        "description": "Suddividi un documento scansionato in batch in file individuali per ciascun documento originale.",
        "icon": "copy"
      },
      {
        "title": "Crea dispense",
        "description": "Estrai slide o pagine specifiche da una presentazione per creare dispense mirate.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Posso dividere un PDF in pagine singole?",
        "answer": "Sì, puoi dividere un PDF in file a pagina singola selezionando l’opzione “Dividi ogni pagina”."
      },
      {
        "question": "Cosa succede ai segnalibri durante la divisione?",
        "answer": "I segnalibri che ricadono nell’intervallo estratto vengono preservati nei PDF risultanti."
      },
      {
        "question": "Posso dividere PDF protetti da password?",
        "answer": "Prima occorre decriptare il PDF usando lo strumento “Decripta PDF” e poi effettuare la divisione."
      }
    ]
  },
  "compress-pdf": {
    "title": "Comprimi PDF",
    "metaDescription": "Riduci la dimensione dei file PDF mantenendo una qualità accettabile. Compressione PDF online gratuita per file più leggeri.",
    "keywords": [
      "comprimi pdf",
      "riduci dimensione pdf",
      "compressore pdf",
      "riduci pdf",
      "ottimizza pdf"
    ],
    "description": "\n      <p>Comprimi PDF riduce la dimensione dei tuoi documenti PDF mantenendo una qualità accettabile. È fondamentale per allegati email, caricamenti web o risparmio di spazio di archiviazione.</p>\n      <p>Il tool offre più livelli di compressione per bilanciare riduzione della dimensione e preservazione della qualità. Puoi scegliere una compressione aggressiva per la massima riduzione o leggera per mantenere maggiore qualità.</p>\n      <p>Tutta la compressione avviene nel browser, assicurando che i tuoi documenti non lascino mai il dispositivo.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il tuo PDF oppure clicca per selezionare il documento da comprimere."
      },
      {
        "step": 2,
        "title": "Scegli il livello di compressione",
        "description": "Seleziona il livello preferito: Basso (migliore qualità), Medio (bilanciato) o Alto (dimensione più piccola)."
      },
      {
        "step": 3,
        "title": "Comprimi e scarica",
        "description": "Clicca su “Comprimi” per ridurre la dimensione, quindi scarica il PDF ottimizzato."
      }
    ],
    "useCases": [
      {
        "title": "Allegati email",
        "description": "Riduci la dimensione dei PDF per rispettare i limiti degli allegati e garantire una consegna più rapida.",
        "icon": "mail"
      },
      {
        "title": "Pubblicazione web",
        "description": "Ottimizza i PDF per il download sul web, migliorando tempi di caricamento ed esperienza utente.",
        "icon": "globe"
      },
      {
        "title": "Ottimizzazione archiviazione",
        "description": "Comprimi documenti archiviati per risparmiare spazio su disco mantenendo l’accessibilità.",
        "icon": "hard-drive"
      }
    ],
    "faq": [
      {
        "question": "Di quanto posso ridurre la dimensione?",
        "answer": "I risultati variano in base al contenuto. PDF ricchi di immagini spesso si riducono del 50‑80%, mentre i PDF solo testo hanno riduzioni minori."
      },
      {
        "question": "La compressione influisce sulla qualità del testo?",
        "answer": "Il testo resta nitido e leggibile a tutti i livelli. La compressione incide principalmente su immagini e grafica."
      },
      {
        "question": "Posso comprimere più PDF contemporaneamente?",
        "answer": "Sì, puoi caricare e comprimere fino a 10 file PDF in simultanea."
      }
    ]
  },
  "edit-pdf": {
    "title": "Modifica PDF",
    "metaDescription": "Modifica i file PDF online. Aggiungi testo, immagini, annotazioni, evidenziazioni e forme ai tuoi documenti.",
    "keywords": [
      "modifica pdf",
      "editor pdf",
      "annota pdf",
      "aggiungi testo a pdf",
      "markup pdf"
    ],
    "description": "\n      <p>Modifica PDF offre un set completo di strumenti per modificare e annotare i tuoi documenti PDF. Aggiungi testo, immagini, forme, evidenziazioni, commenti e altro senza software desktop costosi.</p>\n      <p>L’interfaccia intuitiva rende facile contrassegnare i documenti per la revisione, aggiungere note per la collaborazione, oscurare informazioni sensibili o arricchire i documenti con contenuti aggiuntivi.</p>\n      <p>Tutte le modifiche avvengono localmente nel tuo browser, garantendo piena privacy ai tuoi documenti sensibili.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il tuo file PDF oppure clicca per selezionare il documento da modificare."
      },
      {
        "step": 2,
        "title": "Seleziona lo strumento",
        "description": "Scegli dalla toolbar: testo, evidenziazione, forme, immagini, commenti o strumenti di redazione."
      },
      {
        "step": 3,
        "title": "Esegui le modifiche",
        "description": "Clicca sul documento per aggiungere annotazioni, trascina per posizionare gli elementi e usa il pannello proprietà per personalizzare."
      },
      {
        "step": 4,
        "title": "Salva e scarica",
        "description": "Clicca su “Salva” per applicare le modifiche e scaricare il PDF modificato."
      }
    ],
    "useCases": [
      {
        "title": "Revisione documenti",
        "description": "Aggiungi commenti, evidenziazioni e markup ai documenti per revisioni collaborative.",
        "icon": "message-square"
      },
      {
        "title": "Compilazione moduli",
        "description": "Compila campi di testo, aggiungi firme e completa moduli PDF senza stampare.",
        "icon": "edit-3"
      },
      {
        "title": "Redazione contenuti",
        "description": "Rimuovi in modo permanente informazioni sensibili dai documenti prima di condividerli.",
        "icon": "eye-off"
      }
    ],
    "faq": [
      {
        "question": "Posso modificare il testo originale nel PDF?",
        "answer": "Questo strumento si concentra sull’aggiunta di annotazioni e nuovi contenuti. Per modificare il testo esistente, potrebbe essere necessario usare il documento sorgente."
      },
      {
        "question": "Le modifiche sono permanenti?",
        "answer": "Le annotazioni possono essere appiattite per renderle permanenti oppure mantenute come livelli modificabili, a seconda della preferenza."
      },
      {
        "question": "Posso annullare le modifiche?",
        "answer": "Sì, l’editor supporta annulla/ripristina. Puoi anche ripristinare il documento originale in qualsiasi momento prima di salvare."
      }
    ]
  },
  "jpg-to-pdf": {
    "title": "JPG in PDF",
    "metaDescription": "Converti immagini JPG in PDF. Combina più file JPG in un unico documento PDF.",
    "keywords": [
      "jpg in pdf",
      "jpeg in pdf",
      "converti jpg",
      "immagine in pdf",
      "foto in pdf"
    ],
    "description": "\n      <p>JPG in PDF converte rapidamente e facilmente le tue immagini JPEG in documenti PDF. Che si tratti di una singola foto o di più immagini, questo tool crea PDF dall’aspetto professionale.</p>\n      <p>Puoi combinare più file JPG in un unico PDF, ordinarli in qualsiasi ordine e personalizzare dimensione e orientamento della pagina. La conversione preserva la qualità delle immagini creando PDF compatti e condivisibili.</p>\n      <p>Tutta la conversione avviene nel browser, garantendo che le tue foto rimangano private.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica immagini JPG",
        "description": "Trascina e rilascia i file JPG oppure clicca per selezionare le immagini dal tuo dispositivo."
      },
      {
        "step": 2,
        "title": "Disponi e configura",
        "description": "Riordina le immagini trascinando e seleziona le opzioni di dimensione e orientamento della pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca su “Converti” per creare il PDF e scaricare il risultato."
      }
    ],
    "useCases": [
      {
        "title": "Album fotografici",
        "description": "Crea album fotografici PDF da foto di vacanza o eventi per una condivisione semplice.",
        "icon": "image"
      },
      {
        "title": "Scansione documenti",
        "description": "Converti foto di documenti scattate con il telefono in veri file PDF.",
        "icon": "camera"
      },
      {
        "title": "Creazione portfolio",
        "description": "Raggruppa lavori fotografici o campioni di design in un portfolio PDF professionale.",
        "icon": "folder"
      }
    ],
    "faq": [
      {
        "question": "Quante immagini posso convertire?",
        "answer": "Puoi convertire fino a 100 immagini JPG in un unico documento PDF."
      },
      {
        "question": "La qualità delle immagini viene preservata?",
        "answer": "Sì, le immagini sono incorporate alla loro qualità originale. Puoi opzionalmente comprimerle per ridurre la dimensione del file."
      },
      {
        "question": "Posso impostare dimensioni di pagina diverse?",
        "answer": "Il tool applica una dimensione pagina uniforme a tutte le pagine. Ogni immagine viene scalata per adattarsi alla dimensione selezionata mantenendo le proporzioni."
      }
    ]
  },
  "sign-pdf": {
    "title": "Firma PDF",
    "metaDescription": "Aggiungi firme elettroniche ai documenti PDF. Disegna, digita o carica la tua firma.",
    "keywords": [
      "firma pdf",
      "firma elettronica",
      "firma elettronica",
      "firma digitale",
      "firma documento pdf"
    ],
    "description": "\n      <p>Firma PDF ti consente di aggiungere firme elettroniche ai tuoi documenti PDF in modo rapido e sicuro. Crea la tua firma disegnandola, digitando il nome o caricando un’immagine, quindi posizionala dove preferisci.</p>\n      <p>Puoi aggiungere più firme allo stesso documento, ridimensionarle e posizionarle con precisione, e salvare la firma per utilizzi futuri. Lo strumento è ideale per contratti, accordi, moduli e qualsiasi documento che richieda la tua firma.</p>\n      <p>Tutta la firma avviene localmente nel browser, garantendo che documenti e firme restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento da firmare."
      },
      {
        "step": 2,
        "title": "Crea la firma",
        "description": "Disegna la firma con mouse o touch, digita il tuo nome per generarla oppure carica un’immagine della firma. Puoi anche scansionare la foto di una firma scritta su carta."
      },
      {
        "step": 3,
        "title": "Posiziona e regola",
        "description": "Clicca sul documento per posizionare la firma, poi trascina per spostarla e ridimensionarla secondo necessità."
      },
      {
        "step": 4,
        "title": "Salva e scarica",
        "description": "Clicca su “Salva” per applicare la firma e scaricare il PDF firmato."
      }
    ],
    "useCases": [
      {
        "title": "Firma contratti",
        "description": "Firma contratti e accordi elettronicamente senza stampare o scansionare.",
        "icon": "file-signature"
      },
      {
        "title": "Compilazione moduli",
        "description": "Aggiungi la tua firma a moduli di richiesta, consensi e documenti ufficiali.",
        "icon": "clipboard"
      },
      {
        "title": "Flussi di approvazione",
        "description": "Approva documenti come parte di processi di revisione e approvazione.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "La firma elettronica è giuridicamente vincolante?",
        "answer": "Le firme elettroniche sono legalmente riconosciute nella maggior parte dei paesi. Tuttavia, alcuni documenti possono richiedere tipi specifici di firme digitali. Verifica le normative locali."
      },
      {
        "question": "Posso salvare la firma per usi futuri?",
        "answer": "Sì, puoi salvare la tua firma nella memoria locale del browser per un accesso rapido quando firmi altri documenti."
      },
      {
        "question": "Posso aggiungere più firme allo stesso documento?",
        "answer": "Sì, puoi aggiungere tutte le firme necessarie, posizionando ciascuna indipendentemente su qualunque pagina."
      }
    ]
  },
  "crop-pdf": {
    "title": "Taglia PDF",
    "metaDescription": "Taglia le pagine PDF per rimuovere margini e aree indesiderate. Rifila i documenti PDF con precisione.",
    "keywords": [
      "taglia pdf",
      "rifila pdf",
      "rimuovi margini pdf",
      "ridimensiona pagine pdf",
      "taglierina pdf"
    ],
    "description": "\n      <p>Taglia PDF consente di rifilare i margini e rimuovere aree indesiderate dalle pagine PDF. È utile per eliminare spazi bianchi in eccesso, focalizzarsi su aree di contenuto specifiche o standardizzare le dimensioni delle pagine.</p>\n      <p>Puoi ritagliare tutte le pagine in modo uniforme oppure regolare ciascuna pagina individualmente. L’interfaccia visiva mostra esattamente cosa verrà mantenuto, facilitando risultati precisi.</p>\n      <p>Tutto il ritaglio avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il tuo PDF oppure clicca per selezionare il documento da ritagliare."
      },
      {
        "step": 2,
        "title": "Definisci l’area di taglio",
        "description": "Trascina le maniglie di ritaglio per definire l’area da mantenere oppure inserisci misure precise."
      },
      {
        "step": 3,
        "title": "Applica alle pagine",
        "description": "Scegli se applicare il ritaglio a tutte le pagine o solo a pagine specifiche."
      },
      {
        "step": 4,
        "title": "Taglia e scarica",
        "description": "Clicca su “Taglia” per applicare le modifiche e scaricare il PDF ritagliato."
      }
    ],
    "useCases": [
      {
        "title": "Rimuovi margini",
        "description": "Rifila margini eccessivi da documenti scansionati o PDF con bordi ampi.",
        "icon": "maximize-2"
      },
      {
        "title": "Focalizza contenuto",
        "description": "Ritaglia per evidenziare aree di contenuto specifiche, rimuovendo intestazioni, piè di pagina o sidebar.",
        "icon": "target"
      },
      {
        "title": "Standardizza pagine",
        "description": "Rendi tutte le pagine della stessa dimensione ritagliando a misure uniformi.",
        "icon": "square"
      }
    ],
    "faq": [
      {
        "question": "Il ritaglio rimuove definitivamente il contenuto?",
        "answer": "Sì, il ritaglio elimina il contenuto fuori dall’area di taglio. Tieni una copia di backup del file originale."
      },
      {
        "question": "Posso ritagliare pagine in modo diverso?",
        "answer": "Sì, puoi applicare impostazioni di ritaglio differenti a singole pagine o gruppi di pagine."
      },
      {
        "question": "Il ritaglio influisce sulla qualità del testo?",
        "answer": "No, il ritaglio rimuove solo le aree fuori dal bordo di taglio. Il contenuto restante mantiene la qualità originale."
      }
    ]
  },
  "extract-pages": {
    "title": "Estrai pagine",
    "metaDescription": "Estrai pagine specifiche dai file PDF. Seleziona e salva pagine singole come nuovi documenti.",
    "keywords": [
      "estrai pagine pdf",
      "salva pagine pdf",
      "copia pagine pdf",
      "estrattore pagine pdf"
    ],
    "description": "\n      <p>Estrai pagine consente di selezionare e salvare pagine specifiche di un documento PDF come nuovi file. È perfetto per estrarre sezioni rilevanti, creare estratti o separare documenti combinati.</p>\n      <p>Puoi estrarre pagine singole, intervalli di pagine o più pagine non consecutive. L’anteprima visiva rende facile identificare e selezionare esattamente le pagine necessarie.</p>\n      <p>Tutta l’estrazione avviene localmente nel tuo browser, garantendo la privacy dei documenti.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento da cui estrarre pagine."
      },
      {
        "step": 2,
        "title": "Seleziona le pagine",
        "description": "Clicca sulle miniature per selezionarle oppure inserisci numeri e intervalli di pagina nel campo di input."
      },
      {
        "step": 3,
        "title": "Estrai e scarica",
        "description": "Clicca su “Estrai” per creare un nuovo PDF con le pagine selezionate e scaricarlo."
      }
    ],
    "useCases": [
      {
        "title": "Crea estratti",
        "description": "Estrai pagine rilevanti da report o libri per creare documenti di riferimento mirati.",
        "icon": "file-minus"
      },
      {
        "title": "Condividi contenuti specifici",
        "description": "Estrai pagine specifiche da condividere senza inviare l’intero documento.",
        "icon": "share-2"
      },
      {
        "title": "Archivia pagine importanti",
        "description": "Estrai e salva pagine chiave per l’archiviazione a lungo termine.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Posso estrarre pagine non consecutive?",
        "answer": "Sì, puoi selezionare qualsiasi combinazione di pagine, consecutive o distribuite nel documento."
      },
      {
        "question": "I segnalibri verranno preservati?",
        "answer": "I segnalibri che puntano alle pagine estratte vengono preservati nel nuovo documento."
      },
      {
        "question": "Posso estrarre da più PDF?",
        "answer": "Questo strumento lavora con un PDF alla volta. Per combinare pagine da più PDF, usa lo strumento Unisci PDF."
      }
    ]
  },
  "organize-pdf": {
    "title": "Organizza PDF",
    "metaDescription": "Riordina, duplica ed elimina pagine PDF. Trascina e rilascia per riorganizzare i tuoi documenti.",
    "keywords": [
      "organizza pdf",
      "riordina pagine pdf",
      "riallinea pdf",
      "organizzatore pagine pdf"
    ],
    "description": "\n      <p>Organizza PDF offre un’interfaccia intuitiva di drag‑and‑drop per riordinare le pagine dei tuoi documenti PDF. Riordina pagine, duplica sezioni importanti o rimuovi pagine indesiderate con facilità.</p>\n      <p>Le miniature delle pagine facilitano l’identificazione dei contenuti e la disposizione esattamente come ti serve. Perfetto per ristrutturare documenti, creare ordini di pagina personalizzati o pulire file scansionati.</p>\n      <p>Tutta l’organizzazione avviene localmente nel browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il tuo file PDF oppure clicca per selezionare il documento da organizzare."
      },
      {
        "step": 2,
        "title": "Riordina le pagine",
        "description": "Trascina le miniature delle pagine per riordinarle. Usa i pulsanti duplica o elimina su ciascuna pagina se necessario."
      },
      {
        "step": 3,
        "title": "Salva e scarica",
        "description": "Clicca su “Salva” per applicare le modifiche e scaricare il PDF riorganizzato."
      }
    ],
    "useCases": [
      {
        "title": "Correggi ordine pagine",
        "description": "Correggi l’ordine di pagine scansionate o combinate in modo errato.",
        "icon": "arrow-up-down"
      },
      {
        "title": "Crea ordine personalizzato",
        "description": "Disponi le pagine in una sequenza specifica per presentazioni o report.",
        "icon": "list"
      },
      {
        "title": "Rimuovi pagine indesiderate",
        "description": "Elimina pagine vuote, duplicati o contenuti irrilevanti dai documenti.",
        "icon": "trash-2"
      }
    ],
    "faq": [
      {
        "question": "Posso duplicare pagine?",
        "answer": "Sì, puoi duplicare qualsiasi pagina e posizionare la copia ovunque nel documento."
      },
      {
        "question": "Esiste una funzione annulla?",
        "answer": "Sì, puoi annullare e ripristinare le modifiche. Puoi anche ripristinare l’ordine originale in qualsiasi momento."
      },
      {
        "question": "Posso organizzare più PDF insieme?",
        "answer": "Questo strumento lavora con un PDF alla volta. Per combinare e organizzare più PDF, uniscili prima con lo strumento Unisci PDF."
      }
    ]
  },
  "delete-pages": {
    "title": "Elimina pagine",
    "metaDescription": "Rimuovi pagine indesiderate dai file PDF. Seleziona ed elimina pagine specifiche con facilità.",
    "keywords": [
      "elimina pagine pdf",
      "rimuovi pagine pdf",
      "rimozione pagine pdf",
      "elimina pagine da pdf"
    ],
    "description": "\n      <p>Elimina pagine consente di rimuovere rapidamente e facilmente pagine indesiderate dai tuoi PDF. Che tu debba eliminare pagine vuote, contenuti obsoleti o informazioni sensibili, questo strumento semplifica il processo.</p>\n      <p>Le miniature delle pagine aiutano a identificare esattamente quali pagine rimuovere. Puoi eliminare singole pagine o più pagine contemporaneamente.</p>\n      <p>Tutta l’elaborazione avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il tuo file PDF oppure clicca per selezionare il documento da cui eliminare pagine."
      },
      {
        "step": 2,
        "title": "Seleziona le pagine da eliminare",
        "description": "Clicca sulle miniature per marcarle per l’eliminazione oppure inserisci i numeri di pagina nel campo di input."
      },
      {
        "step": 3,
        "title": "Elimina e scarica",
        "description": "Clicca su “Elimina” per rimuovere le pagine selezionate e scaricare il PDF aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Rimuovi pagine vuote",
        "description": "Pulisci i documenti rimuovendo pagine vuote incluse accidentalmente.",
        "icon": "file-x"
      },
      {
        "title": "Rimuovi contenuti sensibili",
        "description": "Elimina pagine con informazioni riservate prima di condividere i documenti.",
        "icon": "shield"
      },
      {
        "title": "Snellisci i documenti",
        "description": "Rimuovi pagine obsolete o irrilevanti per creare documenti più mirati.",
        "icon": "filter"
      }
    ],
    "faq": [
      {
        "question": "Posso recuperare le pagine eliminate?",
        "answer": "L’eliminazione è permanente nel file di output. Conserva una copia di backup del documento originale se potresti aver bisogno delle pagine in seguito."
      },
      {
        "question": "Posso eliminare più pagine contemporaneamente?",
        "answer": "Sì, puoi selezionare ed eliminare più pagine in simultanea."
      },
      {
        "question": "L’eliminazione influisce sui segnalibri?",
        "answer": "I segnalibri che puntano alle pagine eliminate vengono rimossi. I segnalibri verso le pagine restanti sono preservati."
      }
    ]
  },
  "bookmark": {
    "title": "Modifica segnalibri",
    "metaDescription": "Aggiungi, modifica e gestisci i segnalibri PDF. Crea una struttura di navigazione per i tuoi documenti.",
    "keywords": [
      "segnalibri pdf",
      "modifica segnalibri",
      "aggiungi segnalibri",
      "navigazione pdf",
      "sommario"
    ],
    "description": "\n      <p>Modifica segnalibri consente di creare, modificare e organizzare i segnalibri nei tuoi documenti PDF. I segnalibri offrono una navigazione rapida verso sezioni specifiche, rendendo più semplici i documenti lunghi.</p>\n      <p>Puoi aggiungere nuovi segnalibri, modificare quelli esistenti, riorganizzare la gerarchia o importare segnalibri da fonti esterne. Questo strumento è essenziale per creare documenti professionali e ben navigabili.</p>\n      <p>Tutte le modifiche avvengono localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il tuo file PDF oppure clicca per selezionare il documento da modificare."
      },
      {
        "step": 2,
        "title": "Gestisci i segnalibri",
        "description": "Aggiungi nuovi segnalibri, modifica quelli esistenti o trascina per riorganizzare la gerarchia."
      },
      {
        "step": 3,
        "title": "Salva e scarica",
        "description": "Clicca su “Salva” per applicare le modifiche e scaricare il PDF con i segnalibri aggiornati."
      }
    ],
    "useCases": [
      {
        "title": "Crea navigazione",
        "description": "Aggiungi segnalibri a documenti lunghi per aiutare i lettori a raggiungere rapidamente sezioni specifiche.",
        "icon": "navigation"
      },
      {
        "title": "Organizza capitoli",
        "description": "Crea una struttura gerarchica di segnalibri che rispecchi l’organizzazione dei capitoli del documento.",
        "icon": "book-open"
      },
      {
        "title": "Migliora accessibilità",
        "description": "Aggiungi segnalibri per rendere i documenti più accessibili e facili da usare.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Posso creare segnalibri nidificati?",
        "answer": "Sì, puoi creare una struttura gerarchica con segnalibri genitore e figli."
      },
      {
        "question": "Posso importare segnalibri da un file?",
        "answer": "Sì, puoi importare strutture di segnalibri da file JSON o di testo."
      },
      {
        "question": "I segnalibri funzionano in tutti i lettori PDF?",
        "answer": "Sì, i segnalibri sono una funzione standard supportata da tutti i principali lettori PDF."
      }
    ]
  },
  "table-of-contents": {
    "title": "Sommario",
    "metaDescription": "Genera un sommario per il tuo PDF. Crea una navigazione cliccabile dai segnalibri.",
    "keywords": [
      "sommario pdf",
      "generatore toc",
      "indice pdf",
      "navigazione documento"
    ],
    "description": "\n      <p>Sommario genera una pagina di indice navigabile per i tuoi documenti PDF. Il TOC può essere creato da segnalibri esistenti o da voci personalizzate, offrendo ai lettori una panoramica e una navigazione rapida.</p>\n      <p>Personalizza l’aspetto con stili, font e layout differenti. Il TOC generato include link cliccabili che portano direttamente alle pagine di riferimento.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento."
      },
      {
        "step": 2,
        "title": "Configura il TOC",
        "description": "Scegli se generare dai segnalibri o creare voci personalizzate. Seleziona stile e posizionamento."
      },
      {
        "step": 3,
        "title": "Genera e scarica",
        "description": "Clicca su “Genera” per creare il sommario e scaricare il PDF aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Lavori accademici",
        "description": "Aggiungi un sommario professionale a tesi, dissertazioni e lavori di ricerca.",
        "icon": "graduation-cap"
      },
      {
        "title": "Report aziendali",
        "description": "Crea report navigabili con elenchi chiari di sezioni per gli stakeholder.",
        "icon": "bar-chart"
      },
      {
        "title": "Manuali utente",
        "description": "Genera TOC completi per documentazione tecnica e guide utente.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Posso personalizzare l’aspetto del TOC?",
        "answer": "Sì, puoi scegliere tra stili, font e layout diversi per il tuo sommario."
      },
      {
        "question": "Dove viene inserito il TOC?",
        "answer": "Per impostazione predefinita, il TOC viene inserito all’inizio del documento, ma puoi scegliere una posizione diversa."
      },
      {
        "question": "Le voci del TOC sono cliccabili?",
        "answer": "Sì, ogni voce è un link cliccabile che porta alla pagina corrispondente."
      }
    ]
  },
  "page-numbers": {
    "title": "Numeri di pagina",
    "metaDescription": "Aggiungi numeri di pagina ai documenti PDF. Personalizza posizione, formato e numero iniziale.",
    "keywords": [
      "aggiungi numeri di pagina",
      "numeri di pagina pdf",
      "numerazione pagine pdf",
      "paginazione pdf"
    ],
    "description": "\n      <p>Numeri di pagina aggiunge una numerazione personalizzabile ai tuoi documenti PDF. Scegli tra vari formati, posizioni e stili per adattarti al design del documento.</p>\n      <p>Puoi impostare il numero iniziale, saltare determinate pagine e usare formati diversi (1, 2, 3 oppure i, ii, iii). Perfetto per creare documenti professionali con paginazione corretta.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento."
      },
      {
        "step": 2,
        "title": "Configura la numerazione",
        "description": "Scegli posizione, formato, numero iniziale e quali pagine numerare."
      },
      {
        "step": 3,
        "title": "Applica e scarica",
        "description": "Clicca su “Applica” per aggiungere i numeri di pagina e scaricare il PDF aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Documenti professionali",
        "description": "Aggiungi numeri di pagina a report, proposte e documenti aziendali.",
        "icon": "file-text"
      },
      {
        "title": "Lavori accademici",
        "description": "Numera le pagine secondo i requisiti di formattazione accademica.",
        "icon": "graduation-cap"
      },
      {
        "title": "Documenti legali",
        "description": "Aggiungi paginazione corretta a contratti e atti legali.",
        "icon": "scale"
      }
    ],
    "faq": [
      {
        "question": "Posso saltare la prima pagina?",
        "answer": "Sì, puoi specificare quali pagine numerare e quali saltare, come pagina del titolo o copertina."
      },
      {
        "question": "Quali formati di numerazione sono disponibili?",
        "answer": "Puoi usare numeri arabi (1, 2, 3), numeri romani (i, ii, iii oppure I, II, III) o lettere (a, b, c)."
      },
      {
        "question": "Posso aggiungere il formato “Pagina X di Y”?",
        "answer": "Sì, puoi includere il conteggio totale delle pagine nel formato di numerazione."
      }
    ]
  },
  "add-watermark": {
    "title": "Aggiungi filigrana",
    "metaDescription": "Aggiungi filigrane di testo o immagine ai file PDF. Proteggi e personalizza i tuoi documenti.",
    "keywords": [
      "aggiungi filigrana",
      "filigrana pdf",
      "timbra pdf",
      "brandizza pdf",
      "proteggi pdf"
    ],
    "description": "\n      <p>Aggiungi filigrana ti consente di inserire filigrane di testo o immagine sui tuoi documenti PDF. Le filigrane possono indicare lo stato del documento (Bozza, Riservato), aggiungere branding o scoraggiare copie non autorizzate.</p>\n      <p>Personalizza posizione, dimensione, opacità, rotazione e colore della filigrana. Applica a tutte le pagine o seleziona pagine specifiche. Il tool supporta sia filigrane di testo sia filigrane immagine.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento."
      },
      {
        "step": 2,
        "title": "Crea la filigrana",
        "description": "Inserisci il testo o carica un’immagine per la filigrana. Regola posizione, dimensione, opacità e rotazione."
      },
      {
        "step": 3,
        "title": "Applica e scarica",
        "description": "Clicca su “Applica” per aggiungere la filigrana e scaricare il PDF aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Protezione documenti",
        "description": "Aggiungi filigrane “Riservato” o “Bozza” per indicare lo stato del documento.",
        "icon": "shield"
      },
      {
        "title": "Branding documenti",
        "description": "Inserisci loghi o nomi aziendali nei documenti ufficiali.",
        "icon": "award"
      },
      {
        "title": "Avviso copyright",
        "description": "Aggiungi informazioni sul copyright per proteggere la proprietà intellettuale.",
        "icon": "copyright"
      }
    ],
    "faq": [
      {
        "question": "Posso usare un’immagine come filigrana?",
        "answer": "Sì, puoi caricare immagini PNG, JPG o SVG da usare come filigrana."
      },
      {
        "question": "Posso rendere la filigrana semitrasparente?",
        "answer": "Sì, puoi regolare l’opacità da completamente trasparente a completamente opaca."
      },
      {
        "question": "Posso applicare filigrane diverse a pagine diverse?",
        "answer": "Il tool applica la stessa filigrana alle pagine selezionate. Per filigrane diverse, elabora il documento più volte."
      }
    ]
  },
  "header-footer": {
    "title": "Intestazione e piè di pagina",
    "metaDescription": "Aggiungi intestazioni e piè di pagina ai documenti PDF. Includi numeri di pagina, date e testo personalizzato.",
    "keywords": [
      "intestazione pdf",
      "piè di pagina pdf",
      "aggiungi intestazione piè di pagina",
      "carta intestata pdf"
    ],
    "description": "\n      <p>Intestazione e piè di pagina aggiunge intestazioni e piè di pagina personalizzabili ai tuoi PDF. Includi numeri di pagina, date, titoli del documento o qualsiasi testo personalizzato nelle aree dedicate.</p>\n      <p>Posiziona il contenuto a sinistra, al centro o a destra di intestazione/piè di pagina. Usa contenuti differenti per pagine pari e dispari, se necessario. Perfetto per creare documenti professionali con formattazione coerente.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento."
      },
      {
        "step": 2,
        "title": "Configura intestazione/piè di pagina",
        "description": "Inserisci il testo per le aree di intestazione e piè di pagina. Aggiungi numeri di pagina, date o testo personalizzato."
      },
      {
        "step": 3,
        "title": "Applica e scarica",
        "description": "Clicca su “Applica” per aggiungere intestazioni/piè di pagina e scaricare il PDF aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Documenti aziendali",
        "description": "Aggiungi nome dell’azienda e numeri di pagina ai documenti professionali.",
        "icon": "briefcase"
      },
      {
        "title": "Documenti legali",
        "description": "Includi numeri di causa, date e riferimenti di pagina negli atti legali.",
        "icon": "scale"
      },
      {
        "title": "Lavori accademici",
        "description": "Aggiungi intestazioni in corsa con titolo e autore del lavoro.",
        "icon": "graduation-cap"
      }
    ],
    "faq": [
      {
        "question": "Posso avere intestazioni diverse su pagine pari e dispari?",
        "answer": "Sì, puoi configurare contenuti differenti per pagine dispari e pari."
      },
      {
        "question": "Posso includere la data corrente?",
        "answer": "Sì, puoi inserire campi data dinamici che mostrano la data corrente."
      },
      {
        "question": "Posso saltare intestazione/piè di pagina su alcune pagine?",
        "answer": "Sì, puoi specificare quali pagine devono avere intestazione/piè di pagina e quali devono essere escluse."
      }
    ]
  },
  "invert-colors": {
    "title": "Inverti colori",
    "metaDescription": "Inverti i colori dei PDF per la lettura in modalità scura. Converti i documenti in colori negativi.",
    "keywords": [
      "inverti colori pdf",
      "pdf modalità scura",
      "pdf negativo",
      "inverti colori"
    ],
    "description": "\n      <p>Inverti colori invertisce i colori nei tuoi documenti PDF, creando un effetto immagine negativa. È particolarmente utile per creare versioni in modalità scura dei documenti, facilitando la lettura in condizioni di scarsa luminosità.</p>\n      <p>Il tool può invertire tutti i colori oppure preservare selettivamente alcuni elementi come le immagini. Perfetto per ridurre l’affaticamento visivo durante la lettura notturna.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento."
      },
      {
        "step": 2,
        "title": "Configura le opzioni",
        "description": "Scegli se invertire tutto il contenuto o preservare le immagini."
      },
      {
        "step": 3,
        "title": "Inverti e scarica",
        "description": "Clicca su “Inverti” per elaborare il documento e scaricare il risultato."
      }
    ],
    "useCases": [
      {
        "title": "Lettura notturna",
        "description": "Crea versioni in modalità scura dei documenti per una lettura confortevole di notte.",
        "icon": "moon"
      },
      {
        "title": "Riduci affaticamento visivo",
        "description": "Inverti documenti molto luminosi per ridurre l’affaticamento degli occhi durante letture prolungate.",
        "icon": "eye"
      },
      {
        "title": "Risparmio stampa",
        "description": "Inverti i documenti per ridurre l’uso di inchiostro nella stampa di bozze.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Le immagini verranno invertite?",
        "answer": "Per impostazione predefinita sì. Puoi scegliere di preservare le immagini originali invertendo solo testo e sfondi."
      },
      {
        "question": "Posso invertire solo alcune pagine?",
        "answer": "Sì, puoi selezionare quali pagine invertire."
      },
      {
        "question": "L'inversione è reversibile?",
        "answer": "Puoi invertire nuovamente il documento per tornare approssimativamente ai colori originali."
      }
    ]
  },
  "background-color": {
    "title": "Colore di sfondo",
    "metaDescription": "Cambia il colore di sfondo del PDF. Aggiungi sfondi colorati alle pagine del documento.",
    "keywords": [
      "pdf colore sfondo",
      "cambia sfondo pdf",
      "pdf colorato",
      "colore pagina pdf"
    ],
    "description": "\n      <p>Colore di sfondo consente di cambiare o aggiungere colori di sfondo alle pagine del tuo PDF. Può migliorare la leggibilità, aggiungere interesse visivo o rispettare i requisiti di branding.</p>\n      <p>Scegli qualsiasi colore e applicalo a tutte le pagine o solo a quelle selezionate. Lo strumento preserva i contenuti esistenti aggiungendo uno strato di sfondo.</p>\n      <p>Tutto l'elaborato avviene localmente nel tuo browser, mantenendo privati i tuoi documenti.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Scegli il colore",
        "description": "Seleziona un colore con il selettore o inserisci un codice hex."
      },
      {
        "step": 3,
        "title": "Applica e scarica",
        "description": "Clicca Applica per aggiungere lo sfondo e scaricare il PDF aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Migliora la leggibilità",
        "description": "Aggiungi uno sfondo crema o seppia per ridurre l’affaticamento visivo.",
        "icon": "eye"
      },
      {
        "title": "Branding dei documenti",
        "description": "Usa i colori del brand come sfondo per i materiali di marketing.",
        "icon": "palette"
      },
      {
        "title": "Evidenzia sezioni",
        "description": "Usa sfondi diversi per distinguere le sezioni del documento.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "Lo sfondo copre i contenuti esistenti?",
        "answer": "No, lo sfondo viene aggiunto dietro ai contenuti esistenti, preservando testo e immagini."
      },
      {
        "question": "Posso usare colori diversi per pagine diverse?",
        "answer": "Sì, ma dovrai elaborare il documento più volte per applicare colori differenti a pagine diverse."
      },
      {
        "question": "Posso rimuovere uno sfondo esistente?",
        "answer": "Questo strumento aggiunge sfondi. Per rimuoverli, usa lo strumento Modifica PDF."
      }
    ]
  },
  "text-color": {
    "title": "Cambia colore del testo",
    "metaDescription": "Modifica il colore del testo nei documenti PDF. Cambia il colore di tutti i contenuti testuali.",
    "keywords": [
      "cambia colore testo pdf",
      "colore testo pdf",
      "modifica colore testo",
      "ricolora testo pdf"
    ],
    "description": "\n      <p>Cambia colore del testo consente di modificare il colore del testo nei tuoi documenti PDF. È utile per migliorare il contrasto, rispettare il branding o creare varianti visive dei documenti.</p>\n      <p>Seleziona un nuovo colore e applicalo a tutto il testo del documento. Lo strumento elabora gli elementi testuali preservando immagini e altri contenuti.</p>\n      <p>Tutto l'elaborato avviene localmente nel tuo browser, mantenendo privati i tuoi documenti.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Scegli il colore",
        "description": "Seleziona un nuovo colore per il testo con il selettore o inserisci un codice hex."
      },
      {
        "step": 3,
        "title": "Applica e scarica",
        "description": "Clicca Applica per cambiare il colore del testo e scaricare il PDF aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Migliora il contrasto",
        "description": "Cambia il colore del testo per migliorare la leggibilità rispetto allo sfondo.",
        "icon": "contrast"
      },
      {
        "title": "Coerenza di brand",
        "description": "Aggiorna i colori del testo in base alle linee guida del brand.",
        "icon": "palette"
      },
      {
        "title": "Accessibilità",
        "description": "Adegua i colori del testo ai requisiti di contrasto per l’accessibilità.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Tutto il testo verrà modificato?",
        "answer": "Sì, lo strumento cambia il colore di tutti gli elementi di testo nel documento."
      },
      {
        "question": "Posso cambiare solo parti di testo?",
        "answer": "Questo strumento modifica tutto il testo. Per cambi selettivi, usa lo strumento Modifica PDF."
      },
      {
        "question": "Il testo formattato (grassetto, corsivo) viene preservato?",
        "answer": "Sì, la formattazione del testo viene preservata; cambia solo il colore."
      }
    ]
  },
  "add-stamps": {
    "title": "Aggiungi timbri",
    "metaDescription": "Aggiungi timbri ai documenti PDF. Usa timbri predefiniti o personalizzati per approvazioni, revisioni e altro.",
    "keywords": [
      "timbri pdf",
      "aggiungi timbro",
      "timbro approvazione",
      "timbro pdf"
    ],
    "description": "\n      <p>Aggiungi timbri consente di posizionare immagini di timbri sui tuoi documenti PDF. Usa timbri predefiniti come “Approvato”, “Respinto”, “Bozza”, oppure carica immagini di timbri personalizzati.</p>\n      <p>Posiziona i timbri ovunque nella pagina, ridimensionali e applicali a singole o multiple pagine. Perfetto per flussi documentali, approvazioni e indicatori di stato.</p>\n      <p>Tutto l'elaborato avviene localmente nel tuo browser, mantenendo privati i tuoi documenti.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona il timbro",
        "description": "Scegli un timbro predefinito oppure carica un’immagine personalizzata."
      },
      {
        "step": 3,
        "title": "Posiziona e applica",
        "description": "Clicca per posizionare il timbro, regola posizione e dimensione, quindi scarica."
      }
    ],
    "useCases": [
      {
        "title": "Approvazione documenti",
        "description": "Aggiungi timbri “Approvato” o “Respinto” nei flussi di revisione.",
        "icon": "check-circle"
      },
      {
        "title": "Indicazione stato",
        "description": "Contrassegna i documenti come “Bozza”, “Finale” o “Confidenziale”.",
        "icon": "tag"
      },
      {
        "title": "Controllo qualità",
        "description": "Aggiungi timbri QC per indicare ispezione o conclusione revisione.",
        "icon": "clipboard-check"
      }
    ],
    "faq": [
      {
        "question": "Quali timbri predefiniti sono disponibili?",
        "answer": "Tra i predefiniti: Approvato, Respinto, Bozza, Finale, Confidenziale, Copia e altri."
      },
      {
        "question": "Posso caricare timbri personalizzati?",
        "answer": "Sì, puoi caricare immagini PNG o JPG da usare come timbri personalizzati."
      },
      {
        "question": "Posso aggiungere più timbri in un documento?",
        "answer": "Sì, puoi aggiungere più timbri e posizionarli indipendentemente."
      }
    ]
  },
  "remove-annotations": {
    "title": "Rimuovi annotazioni",
    "metaDescription": "Rimuovi annotazioni dai file PDF. Elimina commenti, evidenziazioni e markup.",
    "keywords": [
      "rimuovi annotazioni pdf",
      "elimina commenti",
      "rimuovi evidenziazioni",
      "pulisci pdf"
    ],
    "description": "\n      <p>Rimuovi annotazioni elimina commenti, evidenziazioni, note adesive e altre annotazioni dai tuoi documenti PDF. Crea una versione pulita del documento senza marcature.</p>\n      <p>Puoi rimuovere tutte le annotazioni o scegliere selettivamente i tipi da rimuovere. Ideale per creare versioni finali di documenti revisionati o per togliere commenti sensibili.</p>\n      <p>Tutto l'elaborato avviene localmente nel tuo browser, mantenendo privati i tuoi documenti.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona i tipi di annotazione",
        "description": "Scegli quali tipi rimuovere: commenti, evidenziazioni, link, ecc."
      },
      {
        "step": 3,
        "title": "Rimuovi e scarica",
        "description": "Clicca Rimuovi per eliminare le annotazioni e scaricare il PDF pulito."
      }
    ],
    "useCases": [
      {
        "title": "Finalizza documenti",
        "description": "Rimuovi commenti di revisione e marcature prima della pubblicazione.",
        "icon": "file-check"
      },
      {
        "title": "Protezione della privacy",
        "description": "Elimina commenti che possono contenere informazioni sensibili prima di condividere.",
        "icon": "shield"
      },
      {
        "title": "Distribuzione pulita",
        "description": "Crea copie pulite di documenti annotati per la distribuzione.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Quali tipi di annotazioni posso rimuovere?",
        "answer": "Commenti, evidenziazioni, sottolineature, barrature, note adesive, timbri e link."
      },
      {
        "question": "Posso mantenere alcune annotazioni?",
        "answer": "Sì, puoi selezionare quali tipi rimuovere e quali mantenere."
      },
      {
        "question": "È reversibile?",
        "answer": "No, la rimozione è permanente. Conserva una copia di backup se necessario."
      }
    ]
  },
  "form-filler": {
    "title": "Compila moduli",
    "metaDescription": "Compila moduli PDF online. Completa moduli PDF interattivi senza stampare.",
    "keywords": [
      "compila modulo pdf",
      "compilatore moduli pdf",
      "compila moduli",
      "pdf interattivo"
    ],
    "description": "\n      <p>Compila moduli consente di completare moduli PDF interattivi direttamente nel browser. Compila campi di testo, seleziona caselle di controllo, scegli opzioni e aggiungi firme senza stampare.</p>\n      <p>Lo strumento supporta moduli PDF standard e moduli XFA. I dati inseriti possono essere salvati e il modulo può essere “piatto” (flatten) per impedire ulteriori modifiche.</p>\n      <p>Tutto l'elaborato avviene localmente nel tuo browser, mantenendo privati i tuoi dati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il modulo PDF",
        "description": "Trascina e rilascia il modulo oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Compila il modulo",
        "description": "Clicca sui campi per inserire testo, spuntare caselle o selezionare opzioni."
      },
      {
        "step": 3,
        "title": "Salva e scarica",
        "description": "Clicca Salva per preservare i dati e scaricare il modulo compilato."
      }
    ],
    "useCases": [
      {
        "title": "Moduli di candidatura",
        "description": "Completa candidature di lavoro, richieste di permessi e moduli di registrazione.",
        "icon": "clipboard"
      },
      {
        "title": "Moduli fiscali",
        "description": "Compila documenti fiscali e moduli finanziari in modo elettronico.",
        "icon": "file-text"
      },
      {
        "title": "Contratti",
        "description": "Compila moduli contrattuali con le tue informazioni prima della firma.",
        "icon": "file-signature"
      }
    ],
    "faq": [
      {
        "question": "Posso salvare i progressi?",
        "answer": "Sì, puoi salvare moduli compilati parzialmente e riprendere in seguito."
      },
      {
        "question": "Cos’è il “flattening” del modulo?",
        "answer": "Il flattening converte i campi dei moduli in contenuto statico, impedendo ulteriori modifiche."
      },
      {
        "question": "I moduli XFA sono supportati?",
        "answer": "Sì, lo strumento supporta sia AcroForms standard sia moduli XFA."
      }
    ]
  },
  "form-creator": {
    "title": "Crea moduli",
    "metaDescription": "Crea moduli PDF compilabili. Aggiungi campi di testo, caselle di selezione e menu a discesa ai documenti.",
    "keywords": [
      "crea modulo pdf",
      "creatore moduli pdf",
      "pdf compilabile",
      "aggiungi campi modulo"
    ],
    "description": "\n      <p>Crea moduli trasforma documenti PDF statici in moduli interattivi compilabili. Aggiungi campi di testo, caselle di selezione, pulsanti di opzione, menu a discesa e altro per creare moduli professionali.</p>\n      <p>Trascina e rilascia gli elementi del modulo sul documento, configura le proprietà dei campi e crea moduli compilabili elettronicamente. Perfetto per candidature, sondaggi e moduli di raccolta dati.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento da trasformare in modulo."
      },
      {
        "step": 2,
        "title": "Aggiungi campi modulo",
        "description": "Seleziona i tipi di campo dalla toolbar e clicca per posizionarli nel documento."
      },
      {
        "step": 3,
        "title": "Configura e salva",
        "description": "Imposta le proprietà dei campi, poi salva e scarica il modulo PDF compilabile."
      }
    ],
    "useCases": [
      {
        "title": "Moduli di candidatura",
        "description": "Crea candidature di lavoro, moduli di iscrizione e registrazioni compilabili.",
        "icon": "user-plus"
      },
      {
        "title": "Sondaggi",
        "description": "Costruisci sondaggi interattivi e questionari per la raccolta dati.",
        "icon": "clipboard-list"
      },
      {
        "title": "Moduli d'ordine",
        "description": "Crea moduli d’ordine prodotti con campi quantità e caselle di selezione.",
        "icon": "shopping-cart"
      }
    ],
    "faq": [
      {
        "question": "Quali tipi di campi posso aggiungere?",
        "answer": "Campi di testo, caselle di selezione, pulsanti di opzione, menu a discesa, selettori di data e campi firma."
      },
      {
        "question": "Posso rendere i campi obbligatori?",
        "answer": "Sì, puoi contrassegnare i campi come obbligatori e aggiungere regole di validazione."
      },
      {
        "question": "Posso aggiungere calcoli?",
        "answer": "Puoi aggiungere calcoli di base come somma e media ai campi numerici."
      }
    ]
  },
  "remove-blank-pages": {
    "title": "Rimuovi pagine vuote",
    "metaDescription": "Rileva e rimuove automaticamente le pagine vuote dai documenti PDF.",
    "keywords": [
      "rimuovi pagine vuote",
      "elimina pagine vuote",
      "pulisci pdf",
      "rimozione pagine vuote pdf"
    ],
    "description": "\n      <p>Rimuovi pagine vuote rileva automaticamente e rimuove le pagine vuote dai tuoi documenti PDF. Utile per ripulire documenti scansionati, rimuovere pagine separatrici o eliminare pagine vuote inserite accidentalmente.</p>\n      <p>Il tool usa un rilevamento intelligente per identificare le pagine realmente vuote, preservando quelle con contenuto minimo. Puoi regolare la soglia di sensibilità per controllare cosa viene considerato “vuoto”.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento."
      },
      {
        "step": 2,
        "title": "Regola la soglia",
        "description": "Imposta la soglia di rilevamento del vuoto se necessario (il valore predefinito va bene per la maggior parte dei documenti)."
      },
      {
        "step": 3,
        "title": "Rimuovi e scarica",
        "description": "Clicca Rimuovi per eliminare le pagine vuote e scaricare il PDF pulito."
      }
    ],
    "useCases": [
      {
        "title": "Pulisci documenti scansionati",
        "description": "Rimuovi pagine vuote dai documenti scansionati in batch.",
        "icon": "scan"
      },
      {
        "title": "Rimuovi separatori",
        "description": "Elimina pagine separatrici vuote dai documenti uniti.",
        "icon": "minus"
      },
      {
        "title": "Riduci dimensioni file",
        "description": "Rimuovi pagine vuote non necessarie per ridurre la dimensione del documento.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Come funziona il rilevamento delle pagine vuote?",
        "answer": "Il tool analizza il contenuto della pagina e considera vuote quelle con contenuto minimo o non visibile."
      },
      {
        "question": "Posso vedere l’anteprima delle pagine che verranno rimosse?",
        "answer": "Sì, le pagine vuote rilevate vengono evidenziate per revisione prima della rimozione."
      },
      {
        "question": "E se una pagina ha solo intestazione/piè di pagina?",
        "answer": "Puoi regolare la soglia per decidere se le pagine con contenuto minimo devono essere considerate vuote."
      }
    ]
  },
  "image-to-pdf": {
    "title": "Immagine in PDF",
    "metaDescription": "Converti qualsiasi immagine in PDF. Supporto per i formati JPG, PNG, WebP, BMP, TIFF, SVG e HEIC.",
    "keywords": [
      "immagine in pdf",
      "converti immagine",
      "foto in pdf",
      "immagini in pdf"
    ],
    "description": "\n      <p>Immagine in PDF converte immagini di qualsiasi formato in documenti PDF. Il supporto per JPG, PNG, WebP, BMP, TIFF, SVG e HEIC rende questo uno strumento universale di conversione.</p>\n      <p>Combina più immagini in un unico PDF, disponile nell’ordine preferito e personalizza dimensioni e orientamento della pagina. Perfetto per album fotografici, archivi documentali o portfolio.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che le immagini restino private.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica immagini",
        "description": "Trascina e rilascia immagini di qualsiasi formato supportato oppure clicca per selezionare i file."
      },
      {
        "step": 2,
        "title": "Ordina e configura",
        "description": "Riordina le immagini e seleziona dimensioni e orientamento della pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il PDF e scaricare il risultato."
      }
    ],
    "useCases": [
      {
        "title": "Raccolte fotografiche",
        "description": "Combina foto da diverse sorgenti in un unico album PDF.",
        "icon": "images"
      },
      {
        "title": "Documenti a formato misto",
        "description": "Converti immagini di formati diversi in un PDF uniforme.",
        "icon": "file-stack"
      },
      {
        "title": "Creazione archivi",
        "description": "Crea archivi PDF da raccolte di immagini per conservazione a lungo termine.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quali formati di immagine sono supportati?",
        "answer": "JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC e HEIF sono tutti supportati."
      },
      {
        "question": "Posso mescolare formati di immagine diversi?",
        "answer": "Sì, puoi combinare immagini di formati differenti in un unico PDF."
      },
      {
        "question": "La qualità delle immagini viene preservata?",
        "answer": "Sì, le immagini vengono incorporate alla qualità originale, salvo che tu scelga di comprimerle."
      }
    ]
  },
  "png-to-pdf": {
    "title": "PNG in PDF",
    "metaDescription": "Converti immagini PNG in PDF. Preserva la trasparenza e combina più file PNG.",
    "keywords": [
      "png in pdf",
      "converti png",
      "convertitore png",
      "immagine trasparente in pdf"
    ],
    "description": "\n      <p>PNG in PDF converte le tue immagini PNG in documenti PDF preservando la trasparenza. Perfetto per grafiche, loghi, screenshot e immagini con sfondi trasparenti.</p>\n      <p>Combina più file PNG in un unico PDF, disponili nell’ordine preferito e personalizza le impostazioni di pagina. La conversione mantiene l’alta qualità delle immagini originali.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che le immagini restino private.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file PNG",
        "description": "Trascina e rilascia le immagini PNG oppure clicca per selezionarle."
      },
      {
        "step": 2,
        "title": "Ordina e configura",
        "description": "Riordina le immagini e seleziona le opzioni di dimensione pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il tuo PDF e scaricarlo."
      }
    ],
    "useCases": [
      {
        "title": "Portfolio grafico",
        "description": "Compila grafiche e design PNG in un portfolio professionale.",
        "icon": "palette"
      },
      {
        "title": "Documentazione screenshot",
        "description": "Converti screenshot in documentazione PDF.",
        "icon": "monitor"
      },
      {
        "title": "Raccolte di loghi",
        "description": "Crea cataloghi PDF di loghi e asset di brand.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "La trasparenza viene preservata?",
        "answer": "La trasparenza PNG è preservata nell’output PDF."
      },
      {
        "question": "E le PNG animate?",
        "answer": "Le PNG animate vengono convertite come immagini statiche usando il primo fotogramma."
      },
      {
        "question": "Posso impostare un colore di sfondo?",
        "answer": "Sì, puoi scegliere un colore di sfondo per le aree trasparenti."
      }
    ]
  },
  "webp-to-pdf": {
    "title": "WebP in PDF",
    "metaDescription": "Converti immagini WebP in PDF. Conversione del formato moderno con preservazione della qualità.",
    "keywords": [
      "webp in pdf",
      "converti webp",
      "convertitore webp",
      "immagine web in pdf"
    ],
    "description": "\n      <p>WebP in PDF converte immagini WebP moderne in documenti PDF. WebP è un formato molto diffuso sul web e questo strumento semplifica la conversione per stampa o archiviazione.</p>\n      <p>Combina più file WebP in un unico PDF con impostazioni di pagina personalizzabili. La conversione preserva la qualità delle immagini creando file PDF compatti.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che le immagini restino private.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file WebP",
        "description": "Trascina e rilascia le immagini WebP oppure clicca per selezionarle."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Disponi le immagini e seleziona dimensioni e orientamento della pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il tuo PDF."
      }
    ],
    "useCases": [
      {
        "title": "Archivio contenuti web",
        "description": "Converti immagini dal web in PDF per l’archiviazione offline.",
        "icon": "globe"
      },
      {
        "title": "Preparazione alla stampa",
        "description": "Converti immagini WebP in PDF per scopi di stampa.",
        "icon": "printer"
      },
      {
        "title": "Standardizzazione formato",
        "description": "Converti WebP moderni in PDF universalmente compatibili.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Cos’è il formato WebP?",
        "answer": "WebP è un formato immagine moderno sviluppato da Google che offre compressione superiore per le immagini web."
      },
      {
        "question": "La qualità è preservata?",
        "answer": "Sì, la conversione preserva la qualità originale dell’immagine."
      },
      {
        "question": "Posso convertire WebP animati?",
        "answer": "I file WebP animati vengono convertiti come immagini statiche."
      }
    ]
  },
  "svg-to-pdf": {
    "title": "SVG in PDF",
    "metaDescription": "Converti grafica vettoriale SVG in PDF. Mantieni scalabilità e qualità.",
    "keywords": [
      "svg in pdf",
      "converti svg",
      "vettoriale in pdf",
      "grafica scalabile in pdf"
    ],
    "description": "\n      <p>SVG in PDF converte grafica vettoriale scalabile in documenti PDF preservando la qualità vettoriale. I file SVG restano nitidi a qualsiasi dimensione e questa qualità è mantenuta nell’output PDF.</p>\n      <p>Perfetto per convertire loghi, icone, illustrazioni e disegni tecnici. Il PDF risultante mantiene la scalabilità della grafica vettoriale originale.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i file restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file SVG",
        "description": "Trascina e rilascia i file SVG oppure clicca per selezionarli."
      },
      {
        "step": 2,
        "title": "Configura impostazioni",
        "description": "Seleziona dimensioni della pagina e opzioni di disposizione."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il tuo PDF vettoriale."
      }
    ],
    "useCases": [
      {
        "title": "Conversione loghi",
        "description": "Converti loghi SVG in PDF per materiali di stampa.",
        "icon": "award"
      },
      {
        "title": "Disegni tecnici",
        "description": "Converti esportazioni CAD e illustrazioni tecniche in PDF.",
        "icon": "ruler"
      },
      {
        "title": "Raccolte di icone",
        "description": "Crea cataloghi PDF di set di icone e grafiche.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "La qualità vettoriale è preservata?",
        "answer": "Sì, la qualità vettoriale degli SVG è completamente preservata nell’output PDF."
      },
      {
        "question": "Posso convertire SVG complessi?",
        "answer": "Sì, SVG complessi con gradienti, filtri ed effetti sono supportati."
      },
      {
        "question": "Che succede ai font incorporati?",
        "answer": "I font incorporati nei file SVG vengono preservati nel PDF."
      }
    ]
  },
  "bmp-to-pdf": {
    "title": "BMP in PDF",
    "metaDescription": "Converti immagini bitmap BMP in PDF. Supporto al formato legacy con preservazione della qualità.",
    "keywords": [
      "bmp in pdf",
      "converti bmp",
      "bitmap in pdf",
      "convertitore bmp"
    ],
    "description": "\n      <p>BMP in PDF converte immagini bitmap in documenti PDF. BMP è un formato immagine legacy comunemente usato negli ambienti Windows; questo strumento semplifica la conversione in moderno formato PDF.</p>\n      <p>Combina più file BMP in un unico PDF con impostazioni personalizzabili. La conversione comprime i file BMP solitamente grandi preservando la qualità dell’immagine.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che le immagini restino private.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file BMP",
        "description": "Trascina e rilascia le immagini BMP oppure clicca per selezionare i file."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Disponi le immagini e seleziona le impostazioni di pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il PDF."
      }
    ],
    "useCases": [
      {
        "title": "Conversione file legacy",
        "description": "Converti vecchi file BMP in moderno formato PDF.",
        "icon": "history"
      },
      {
        "title": "Screenshot Windows",
        "description": "Converti screenshot bitmap di Windows in PDF.",
        "icon": "monitor"
      },
      {
        "title": "Modernizzazione archivi",
        "description": "Aggiorna archivi di immagini legacy al formato PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "La dimensione del file sarà ridotta?",
        "answer": "Sì, i file BMP vengono generalmente compressi in modo significativo quando convertiti in PDF."
      },
      {
        "question": "La qualità viene preservata?",
        "answer": "Sì, la qualità dell’immagine è mantenuta durante la conversione."
      },
      {
        "question": "Quali profondità di colore BMP sono supportate?",
        "answer": "Sono supportate tutte le profondità di colore standard, incluse 24 e 32 bit."
      }
    ]
  },
  "psd-to-pdf": {
    "title": "PSD in PDF",
    "metaDescription": "Converti file Adobe Photoshop (PSD) in formato PDF. Supporta più file e preserva la qualità delle immagini.",
    "keywords": [
      "psd in pdf",
      "converti psd",
      "photoshop in pdf",
      "convertitore psd",
      "adobe psd in pdf"
    ],
    "description": "\n      <p>PSD in PDF converte file Adobe Photoshop (PSD) in documenti PDF. Questo strumento ti permette di visualizzare e condividere i design PSD senza avere Photoshop installato.</p>\n      <p>Puoi convertire più file PSD contemporaneamente e combinarli in un unico documento PDF. Lo strumento elabora ogni PSD renderizzando i livelli visibili in pagine PDF di alta qualità.</p>\n      <p>Tutta la conversione avviene localmente nel tuo browser, garantendo che i tuoi design restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file PSD",
        "description": "Trascina e rilascia i file PSD o PSB oppure clicca per selezionarli dal dispositivo."
      },
      {
        "step": 2,
        "title": "Ordina i file",
        "description": "Trascina le miniature per disporre i file nell’ordine desiderato."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per renderizzare i PSD e scaricare il documento PDF."
      }
    ],
    "useCases": [
      {
        "title": "Condividi design",
        "description": "Condividi design Photoshop con clienti o colleghi che non hanno Photoshop.",
        "icon": "share-2"
      },
      {
        "title": "Creazione portfolio",
        "description": "Compila il tuo lavoro di design in un portfolio PDF professionale.",
        "icon": "layout"
      },
      {
        "title": "Preparazione alla stampa",
        "description": "Converti i design in PDF per scopi di stampa.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Serve avere Photoshop installato?",
        "answer": "No, questo strumento funziona interamente nel browser senza richiedere Adobe Photoshop."
      },
      {
        "question": "I livelli vengono preservati?",
        "answer": "Lo strumento rende lo stato visibile del PSD (immagine composita). I singoli livelli vengono appiattiti nel PDF."
      },
      {
        "question": "Qual è la dimensione massima del file?",
        "answer": "Puoi caricare file fino a 100MB ciascuno. I PSD di grandi dimensioni possono richiedere qualche istante di elaborazione."
      }
    ]
  },
  "heic-to-pdf": {
    "title": "HEIC in PDF",
    "metaDescription": "Converti foto HEIC di iPhone in PDF. Conversione del formato immagine Apple semplificata.",
    "keywords": [
      "heic in pdf",
      "converti heic",
      "foto iphone in pdf",
      "immagine apple in pdf"
    ],
    "description": "\n      <p>HEIC in PDF converte le foto in formato HEIC (High Efficiency Image Format) di Apple in documenti PDF. HEIC è il formato predefinito su iPhone e iPad; questo strumento rende facile condividere queste foto.</p>\n      <p>Combina più foto HEIC in un unico PDF, perfetto per creare album fotografici o archivi di documenti dalle foto del tuo iPhone.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che le foto restino private.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file HEIC",
        "description": "Trascina e rilascia le foto HEIC oppure clicca per selezionare i file."
      },
      {
        "step": 2,
        "title": "Ordina le foto",
        "description": "Riordina le foto e seleziona le impostazioni di pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il PDF."
      }
    ],
    "useCases": [
      {
        "title": "Album foto iPhone",
        "description": "Crea album PDF dalle foto iPhone per condivisione.",
        "icon": "smartphone"
      },
      {
        "title": "Scansione documenti",
        "description": "Converti scansioni di documenti da iPhone in PDF.",
        "icon": "scan"
      },
      {
        "title": "Condivisione multipiattaforma",
        "description": "Converti HEIC in PDF per compatibilità universale.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Cos’è il formato HEIC?",
        "answer": "HEIC (High Efficiency Image Container) è il formato immagine di Apple che offre migliore compressione rispetto a JPEG."
      },
      {
        "question": "Le Live Photos sono supportate?",
        "answer": "Le Live Photos vengono convertite come immagini statiche usando il fotogramma chiave."
      },
      {
        "question": "I dati EXIF vengono preservati?",
        "answer": "I metadati delle foto possono essere preservati o rimossi durante la conversione, a scelta."
      }
    ]
  },
  "tiff-to-pdf": {
    "title": "TIFF in PDF",
    "metaDescription": "Converti immagini TIFF in PDF. Supporto per TIFF multipagina e conversione di alta qualità.",
    "keywords": [
      "tiff in pdf",
      "converti tiff",
      "tif in pdf",
      "tiff multipagina"
    ],
    "description": "\n      <p>TIFF in PDF converte immagini TIFF, inclusi file TIFF multipagina, in documenti PDF. TIFF è comunemente usato per scansioni di alta qualità e grafica professionale.</p>\n      <p>I file TIFF multipagina vengono convertiti automaticamente in PDF multipagina. La conversione preserva l’alta qualità delle immagini originali.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i file restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file TIFF",
        "description": "Trascina e rilascia i file TIFF oppure clicca per selezionarli."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Seleziona impostazioni di pagina e opzioni di compressione."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il PDF."
      }
    ],
    "useCases": [
      {
        "title": "Documenti scansionati",
        "description": "Converti scansioni di alta qualità da TIFF a PDF.",
        "icon": "scan"
      },
      {
        "title": "Grafica professionale",
        "description": "Converti grafica TIFF professionale per la distribuzione.",
        "icon": "image"
      },
      {
        "title": "Conversione archivi",
        "description": "Converti archivi TIFF in formato PDF più accessibile.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "I TIFF multipagina sono supportati?",
        "answer": "Sì, i file TIFF multipagina vengono convertiti automaticamente in PDF multipagina."
      },
      {
        "question": "La qualità è preservata?",
        "answer": "Sì, la qualità TIFF è completamente preservata nell’output PDF."
      },
      {
        "question": "Che compressione viene usata?",
        "answer": "Puoi scegliere tra opzioni di compressione senza perdita o con perdita."
      }
    ]
  },
  "txt-to-pdf": {
    "title": "Testo in PDF",
    "metaDescription": "Converti file di testo in PDF. Personalizza font, margini e layout pagina.",
    "keywords": [
      "txt in pdf",
      "testo in pdf",
      "converti file di testo",
      "testo semplice in pdf"
    ],
    "description": "\n      <p>Testo in PDF converte file di testo semplice in documenti PDF formattati. Personalizza font, dimensioni, margini e layout pagina per creare documenti professionali a partire da testo semplice.</p>\n      <p>Perfetto per convertire file di codice, log, note o qualsiasi contenuto di testo semplice in formato PDF condivisibile.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i file restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file di testo",
        "description": "Trascina e rilascia il file .txt oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Personalizza formattazione",
        "description": "Scegli font, dimensione, margini e impostazioni di pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il tuo PDF formattato."
      }
    ],
    "useCases": [
      {
        "title": "Documentazione codice",
        "description": "Converti file di sorgente in PDF per documentazione.",
        "icon": "code"
      },
      {
        "title": "Archivi di log",
        "description": "Converti file di log in PDF per archiviazione.",
        "icon": "file-text"
      },
      {
        "title": "Conversione note",
        "description": "Trasforma note di testo semplice in documenti PDF formattati.",
        "icon": "sticky-note"
      }
    ],
    "faq": [
      {
        "question": "Quali font sono disponibili?",
        "answer": "Sono disponibili più font incluse famiglie monospazi per il codice."
      },
      {
        "question": "Il ritorno a capo è automatico?",
        "answer": "Sì, le righe lunghe vengono automaticamente spezzate per adattarsi alla pagina."
      },
      {
        "question": "Posso preservare la formattazione?",
        "answer": "Spazi bianchi e indentazione del testo originale vengono preservati."
      }
    ]
  },
  "json-to-pdf": {
    "title": "JSON in PDF",
    "metaDescription": "Converti file JSON in PDF formattato. Evidenziazione sintattica e output strutturato.",
    "keywords": [
      "json in pdf",
      "converti json",
      "visualizzatore json",
      "formattatore json"
    ],
    "description": "\n      <p>JSON in PDF converte file di dati JSON in documenti PDF formattati e leggibili. L’output include evidenziazione sintattica e corretta indentazione per una lettura facilitata.</p>\n      <p>Perfetto per documentare risposte API, file di configurazione o qualsiasi dato JSON da condividere o archiviare in formato leggibile.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i dati restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file JSON",
        "description": "Trascina e rilascia il file .json oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura visualizzazione",
        "description": "Scegli opzioni di formattazione ed evidenziazione della sintassi."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il PDF formattato."
      }
    ],
    "useCases": [
      {
        "title": "Documentazione API",
        "description": "Converti risposte API in PDF per documentazione.",
        "icon": "code"
      },
      {
        "title": "Archivi config",
        "description": "Archivia file di configurazione in PDF leggibile.",
        "icon": "settings"
      },
      {
        "title": "Report dati",
        "description": "Crea report PDF a partire da esportazioni JSON.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "È inclusa l’evidenziazione sintattica?",
        "answer": "Sì, la sintassi JSON è evidenziata con colori per chiavi, valori e tipi."
      },
      {
        "question": "Come viene gestito il dato annidato?",
        "answer": "Oggetti e array annidati vengono correttamente indentati per migliorare la leggibilità."
      },
      {
        "question": "E i file JSON molto grandi?",
        "answer": "I file di grandi dimensioni vengono paginati automaticamente su più pagine."
      }
    ]
  },
  "word-to-pdf": {
    "title": "Word in PDF",
    "metaDescription": "Converti documenti Word (DOCX) in PDF. Preserva formattazione e layout nei documenti convertiti.",
    "keywords": [
      "word in pdf",
      "docx in pdf",
      "converti word",
      "convertitore word",
      "microsoft word in pdf"
    ],
    "description": "\n      <p>Word in PDF converte documenti Microsoft Word in formato PDF preservando formattazione originale, layout e struttura del contenuto.</p>\n      <p>Carica i tuoi file DOCX e ottieni PDF di alta qualità, adatti a condivisione, stampa o archiviazione. La conversione mantiene formattazione del testo, stili di paragrafo e struttura base del documento.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica documento Word",
        "description": "Trascina e rilascia il file .docx oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Attendi l’elaborazione",
        "description": "Lo strumento caricherà il documento e lo preparerà alla conversione."
      },
      {
        "step": 3,
        "title": "Scarica il PDF",
        "description": "Clicca Scarica per salvare il documento PDF convertito."
      }
    ],
    "useCases": [
      {
        "title": "Condivisione documenti",
        "description": "Converti documenti Word in PDF per condivisione e visualizzazione universale.",
        "icon": "share-2"
      },
      {
        "title": "Preparazione alla stampa",
        "description": "Crea PDF pronti per la stampa da documenti Word.",
        "icon": "printer"
      },
      {
        "title": "Archivio documenti",
        "description": "Archivia documenti Word in formato PDF stabile per conservazione a lungo termine.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Il formato .doc è supportato?",
        "answer": "Attualmente è supportato solo .docx. Converti i file .doc in .docx con Microsoft Word o LibreOffice."
      },
      {
        "question": "Le immagini vengono preservate?",
        "answer": "Il contenuto testuale e la formattazione base sono preservati. Layout complessi con molte immagini potrebbero avere un rendering semplificato."
      },
      {
        "question": "La conversione è sicura?",
        "answer": "Sì, tutta l’elaborazione avviene nel browser. I documenti non lasciano mai il tuo dispositivo."
      }
    ]
  },
  "excel-to-pdf": {
    "title": "Excel in PDF",
    "metaDescription": "Converti fogli di calcolo Excel (XLSX) in PDF. Preserva tabelle e dati nei documenti convertiti.",
    "keywords": [
      "excel in pdf",
      "xlsx in pdf",
      "converti excel",
      "foglio di calcolo in pdf",
      "microsoft excel in pdf"
    ],
    "description": "\n      <p>Excel in PDF converte fogli di calcolo Microsoft Excel in formato PDF preservando struttura delle tabelle e organizzazione dei dati.</p>\n      <p>Carica i tuoi file XLSX e ottieni un PDF pulito con tabelle formattate correttamente. Ogni foglio del workbook diventa una sezione separata nel PDF.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i dati restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file Excel",
        "description": "Trascina e rilascia il file .xlsx oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Attendi l’elaborazione",
        "description": "Lo strumento caricherà il foglio e convertirà tutti i fogli."
      },
      {
        "step": 3,
        "title": "Scarica il PDF",
        "description": "Clicca Scarica per salvare il documento PDF convertito."
      }
    ],
    "useCases": [
      {
        "title": "Condivisione report",
        "description": "Converti report Excel in PDF per distribuzione agli stakeholder.",
        "icon": "file-text"
      },
      {
        "title": "Archiviazione dati",
        "description": "Archivia dati dei fogli di calcolo in formato PDF stabile.",
        "icon": "archive"
      },
      {
        "title": "Preparazione alla stampa",
        "description": "Crea PDF pronti per la stampa dai fogli Excel.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Sono supportati più fogli?",
        "answer": "Sì, tutti i fogli del workbook sono convertiti e inclusi nel PDF."
      },
      {
        "question": "Il formato .xls è supportato?",
        "answer": "Attualmente è supportato solo .xlsx. Salva i file .xls come .xlsx prima."
      },
      {
        "question": "Le formule vengono preservate?",
        "answer": "Il PDF mostra i valori calcolati. Le formule non sono eseguibili in formato PDF."
      }
    ]
  },
  "pptx-to-pdf": {
    "title": "PowerPoint in PDF",
    "metaDescription": "Converti presentazioni PowerPoint (PPTX) in PDF. Preserva slide e contenuti per una facile condivisione.",
    "keywords": [
      "powerpoint in pdf",
      "pptx in pdf",
      "converti pptx",
      "presentazione in pdf",
      "slide in pdf"
    ],
    "description": "\n      <p>PowerPoint in PDF converte presentazioni Microsoft PowerPoint in formato PDF, preservando contenuti delle slide e testo per una facile condivisione e visualizzazione.</p>\n      <p>Ogni slide diventa una pagina nel PDF, mantenendo il flusso della presentazione. Perfetto per condividere presentazioni con chi non ha PowerPoint installato.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che le presentazioni restino private e sicure.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file PowerPoint",
        "description": "Trascina e rilascia il file .pptx oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Attendi l’elaborazione",
        "description": "Lo strumento estrarrà i contenuti delle slide e creerà il PDF."
      },
      {
        "step": 3,
        "title": "Scarica il PDF",
        "description": "Clicca Scarica per salvare il documento PDF convertito."
      }
    ],
    "useCases": [
      {
        "title": "Condivisione presentazioni",
        "description": "Condividi presentazioni con chiunque senza richiedere PowerPoint.",
        "icon": "share-2"
      },
      {
        "title": "Creazione dispense",
        "description": "Crea dispense PDF a partire dalle slide della presentazione.",
        "icon": "file-text"
      },
      {
        "title": "Archivio presentazioni",
        "description": "Archivia presentazioni in formato PDF stabile.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Le animazioni vengono preservate?",
        "answer": "Il PDF è un formato statico, quindi animazioni e transizioni non sono preservate. Ogni slide diventa una pagina statica."
      },
      {
        "question": "Il formato .ppt è supportato?",
        "answer": "Attualmente è supportato solo .pptx. Converti i file .ppt in .pptx prima."
      },
      {
        "question": "Le note del relatore sono incluse?",
        "answer": "Al momento, le note del relatore non sono incluse nell’output PDF."
      }
    ]
  },
  "xps-to-pdf": {
    "title": "XPS in PDF",
    "metaDescription": "Converti documenti XPS in PDF. Conversione ad alta fedeltà che preserva layout e grafica.",
    "keywords": [
      "xps in pdf",
      "converti xps",
      "convertitore xps",
      "microsoft xps in pdf",
      "oxps in pdf"
    ],
    "description": "\n      <p>XPS in PDF converte documenti Microsoft XPS (XML Paper Specification) in formato PDF preservando layout originale, testo e grafica vettoriale.</p>\n      <p>XPS è un formato a documento fisso simile al PDF. Questo strumento offre conversione ad alta fedeltà usando parsing XPS nativo, garantendo riproduzione accurata dei documenti.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file XPS",
        "description": "Trascina e rilascia il file .xps oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Attendi l’elaborazione",
        "description": "Lo strumento analizzerà e convertirà il documento XPS."
      },
      {
        "step": 3,
        "title": "Scarica il PDF",
        "description": "Clicca Scarica per salvare il documento PDF convertito."
      }
    ],
    "useCases": [
      {
        "title": "Conversione formato",
        "description": "Converti documenti XPS in PDF, formato più supportato.",
        "icon": "file"
      },
      {
        "title": "Condivisione documenti",
        "description": "Condividi XPS con utenti senza visualizzatori dedicati.",
        "icon": "share-2"
      },
      {
        "title": "Migrazione archivi",
        "description": "Migra archivi XPS in formato PDF per migliore compatibilità.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Cos’è il formato XPS?",
        "answer": "XPS (XML Paper Specification) è il formato a documento fisso di Microsoft, simile al PDF. È usato comunemente per la stampa in Windows."
      },
      {
        "question": "La conversione è senza perdita?",
        "answer": "Sì, testo, grafica e layout sono preservati con alta fedeltà."
      },
      {
        "question": "I file XPS multipagina sono supportati?",
        "answer": "Sì, tutte le pagine del documento XPS vengono convertite nel PDF."
      }
    ]
  },
  "rtf-to-pdf": {
    "title": "RTF in PDF",
    "metaDescription": "Converti file RTF (Rich Text Format) in PDF. Preserva la formattazione del testo nei documenti.",
    "keywords": [
      "rtf in pdf",
      "converti rtf",
      "rich text in pdf",
      "convertitore rtf"
    ],
    "description": "\n      <p>RTF in PDF converte file in formato Rich Text in documenti PDF. RTF è un formato di testo ampiamente supportato che include formattazioni base come font, colori e stili.</p>\n      <p>Carica i tuoi file RTF e ottieni un PDF pulito preservando contenuto testuale e formattazione base. Perfetto per convertire documenti legacy in formato PDF moderno.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file RTF",
        "description": "Trascina e rilascia il file .rtf oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Attendi l’elaborazione",
        "description": "Lo strumento analizzerà e convertirà il contenuto RTF."
      },
      {
        "step": 3,
        "title": "Scarica il PDF",
        "description": "Clicca Scarica per salvare il documento PDF convertito."
      }
    ],
    "useCases": [
      {
        "title": "Conversione legacy",
        "description": "Converti vecchi documenti RTF in formato PDF moderno.",
        "icon": "history"
      },
      {
        "title": "Condivisione documenti",
        "description": "Condividi documenti RTF in formato PDF universalmente visualizzabile.",
        "icon": "share-2"
      },
      {
        "title": "Archivia documenti",
        "description": "Archivia file RTF in formato PDF stabile per conservazione a lungo termine.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quale formattazione viene preservata?",
        "answer": "Formattazione base del testo inclusi font, paragrafi e stili viene convertita. Funzionalità RTF complesse possono essere semplificate."
      },
      {
        "question": "Posso convertire più file RTF?",
        "answer": "Attualmente si converte un file alla volta. Usa Unisci PDF per combinare più file convertiti."
      },
      {
        "question": "Le immagini incorporate sono supportate?",
        "answer": "Il focus è sul contenuto testuale. Oggetti incorporati potrebbero non essere renderizzati."
      }
    ]
  },
  "epub-to-pdf": {
    "title": "EPUB in PDF",
    "metaDescription": "Converti e-book EPUB in PDF. Preserva formattazione, immagini e struttura dei capitoli.",
    "keywords": [
      "epub in pdf",
      "converti epub",
      "ebook in pdf",
      "convertitore epub"
    ],
    "description": "\n      <p>EPUB in PDF converte file di e-book in documenti PDF di alta qualità. EPUB è il formato di e-book più popolare, usato dalla maggior parte dei lettori e delle biblioteche digitali.</p>\n      <p>Questo strumento preserva formattazione del testo, immagini e struttura dei capitoli dei tuoi e-book. Perfetto per stampa, archiviazione o condivisione in formato universalmente visualizzabile.</p>\n      <p>Tutto avviene localmente nel tuo browser usando tecnologia di rendering avanzata, garantendo privacy e conversione veloce.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file EPUB",
        "description": "Trascina e rilascia il file .epub oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Attendi la conversione",
        "description": "Lo strumento renderizzerà e convertirà tutte le pagine del tuo e-book."
      },
      {
        "step": 3,
        "title": "Scarica il PDF",
        "description": "Clicca Scarica per salvare il documento PDF convertito."
      }
    ],
    "useCases": [
      {
        "title": "Stampa e-book",
        "description": "Converti e-book in PDF per stampa fisica.",
        "icon": "printer"
      },
      {
        "title": "Archivia libri",
        "description": "Conserva e-book in formato PDF stabile a lungo termine.",
        "icon": "archive"
      },
      {
        "title": "Condividi documenti",
        "description": "Condividi e-book con chiunque, anche senza e-reader.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "La formattazione viene preservata?",
        "answer": "Sì! Questo strumento usa rendering EPUB nativo, preservando formattazione del testo, immagini e layout con alta fedeltà."
      },
      {
        "question": "Gli EPUB con DRM sono supportati?",
        "answer": "No, gli e-book protetti da DRM non possono essere convertiti. Sono supportati solo file EPUB senza DRM."
      },
      {
        "question": "Come viene determinata la dimensione pagina?",
        "answer": "Il contenuto EPUB viene renderizzato su formato A4 standard per leggibilità ottimale."
      }
    ]
  },
  "mobi-to-pdf": {
    "title": "MOBI in PDF",
    "metaDescription": "Converti e-book MOBI in PDF. Supporto per formato Kindle con rendering di alta qualità.",
    "keywords": [
      "mobi in pdf",
      "converti mobi",
      "kindle in pdf",
      "azw in pdf",
      "convertitore mobi"
    ],
    "description": "\n      <p>MOBI in PDF converte file e-book Amazon Kindle in documenti PDF di alta qualità. Il formato MOBI (inclusi AZW e AZW3) è il formato proprietario di Amazon usato sui dispositivi Kindle.</p>\n      <p>Questo strumento preserva formattazione del testo, immagini e struttura dei tuoi libri Kindle. Perfetto per stampa, archiviazione o lettura su dispositivi che non supportano il formato MOBI.</p>\n      <p>Tutto avviene localmente nel tuo browser usando tecnologia di rendering avanzata, garantendo privacy.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file MOBI",
        "description": "Trascina e rilascia file .mobi, .azw o .azw3 oppure clicca per selezionarli dal dispositivo."
      },
      {
        "step": 2,
        "title": "Attendi la conversione",
        "description": "Lo strumento renderizzerà e convertirà tutte le pagine del tuo e-book."
      },
      {
        "step": 3,
        "title": "Scarica il PDF",
        "description": "Clicca Scarica per salvare il documento PDF convertito."
      }
    ],
    "useCases": [
      {
        "title": "Stampa libri Kindle",
        "description": "Converti e-book Kindle in PDF per stampa fisica.",
        "icon": "printer"
      },
      {
        "title": "Archivia libri",
        "description": "Conserva libri Kindle in formato PDF universale.",
        "icon": "archive"
      },
      {
        "title": "Lettura cross-device",
        "description": "Leggi libri Kindle su dispositivi che supportano solo PDF.",
        "icon": "tablet-smartphone"
      }
    ],
    "faq": [
      {
        "question": "Quali formati MOBI sono supportati?",
        "answer": "Lo strumento supporta file .mobi, .azw e .azw3 (versioni senza DRM)."
      },
      {
        "question": "I libri Kindle con DRM sono supportati?",
        "answer": "No, gli e-book protetti da DRM non possono essere convertiti. Sono supportati solo file senza DRM."
      },
      {
        "question": "La formattazione viene preservata?",
        "answer": "Sì! Lo strumento usa rendering MOBI nativo per preservare testo, immagini e layout."
      }
    ]
  },
  "djvu-to-pdf": {
    "title": "DJVU in PDF",
    "metaDescription": "Converti file documento DJVU in PDF. Rendering di alta qualità per documenti e libri scansionati.",
    "keywords": [
      "djvu in pdf",
      "converti djvu",
      "convertitore djvu",
      "djvu pdf",
      "djv in pdf"
    ],
    "description": "\n      <p>DJVU in PDF converte file documento DjVu in PDF di alta qualità. DjVu è un formato ideato principalmente per archiviare documenti scansionati, specialmente con combinazioni di testo, disegni e fotografie.</p>\n      <p>Questo strumento renderizza ogni pagina del tuo file DJVU al DPI scelto (punti per pollice) e le combina in un PDF ricercabile. Perfetto per convertire libri scansionati, manuali tecnici e documenti d’archivio.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file DJVU",
        "description": "Trascina e rilascia il file .djvu o .djv oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Scegli DPI di output (72, 150 o 300) e qualità immagine per il PDF."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti in PDF e scarica il documento convertito."
      }
    ],
    "useCases": [
      {
        "title": "Archivia documenti",
        "description": "Converti archivi DJVU in formato PDF universale.",
        "icon": "archive"
      },
      {
        "title": "Condividi libri scansionati",
        "description": "Condividi libri scansionati in PDF per compatibilità più ampia.",
        "icon": "share-2"
      },
      {
        "title": "Stampa documenti",
        "description": "Converti DJVU in PDF di alta qualità per la stampa.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Cos’è il formato DJVU?",
        "answer": "DjVu è un formato pensato per memorizzare documenti scansionati, con testo, disegni e immagini. Offre compressione migliore del PDF per contenuti scansionati."
      },
      {
        "question": "Quale DPI dovrei scegliere?",
        "answer": "72 DPI è adatto alla visualizzazione web, 150 DPI per documenti standard e 300 DPI per stampa di alta qualità."
      },
      {
        "question": "Il testo sarà ricercabile?",
        "answer": "Il testo viene renderizzato come immagini. Se ti serve testo ricercabile, usa lo strumento OCR PDF dopo la conversione."
      }
    ]
  },
  "fb2-to-pdf": {
    "title": "FB2 in PDF",
    "metaDescription": "Converti e-book FictionBook (FB2) in PDF. Supporta più file con rendering di alta qualità.",
    "keywords": [
      "fb2 in pdf",
      "converti fb2",
      "fictionbook in pdf",
      "convertitore fb2",
      "fb2.zip in pdf"
    ],
    "description": "\n      <p>FB2 in PDF converte file e-book FictionBook (FB2) in documenti PDF di alta qualità. FB2 è un formato e-book XML molto diffuso in Russia e nell’Europa orientale.</p>\n      <p>Questo strumento supporta sia file .fb2 sia .fb2.zip e può elaborare più file contemporaneamente. Preserva formattazione del testo, immagini e struttura dei capitoli dei tuoi e-book.</p>\n      <p>Tutto avviene localmente nel tuo browser usando tecnologia di rendering avanzata, garantendo privacy e conversione veloce.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file FB2",
        "description": "Trascina e rilascia uno o più file .fb2 o .fb2.zip oppure clicca per selezionarli dal dispositivo."
      },
      {
        "step": 2,
        "title": "Seleziona qualità",
        "description": "Scegli qualità di output: Bassa (72 DPI), Media (150 DPI) o Alta (300 DPI)."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti in PDF e scarica i documenti convertiti."
      }
    ],
    "useCases": [
      {
        "title": "Stampa e-book",
        "description": "Converti e-book FB2 in PDF per stampa fisica.",
        "icon": "printer"
      },
      {
        "title": "Conversione batch",
        "description": "Converti più file FB2 in PDF contemporaneamente.",
        "icon": "layers"
      },
      {
        "title": "Formato universale",
        "description": "Condividi e-book in formato PDF che funziona su qualsiasi dispositivo.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Posso convertire più file FB2 insieme?",
        "answer": "Sì! Lo strumento supporta conversione batch fino a 20 file FB2 simultaneamente."
      },
      {
        "question": "I file .fb2.zip sono supportati?",
        "answer": "Sì, lo strumento estrae e converte automaticamente i file FB2 dagli archivi .fb2.zip."
      },
      {
        "question": "La formattazione viene preservata?",
        "answer": "Sì! Lo strumento usa rendering FB2 nativo, preservando formattazione del testo, immagini e struttura dei capitoli con alta fedeltà."
      }
    ]
  },
  "pdf-to-jpg": {
    "title": "PDF in JPG",
    "metaDescription": "Converti pagine PDF in immagini JPG. Estrazione di alta qualità con risoluzione personalizzabile.",
    "keywords": [
      "pdf in jpg",
      "pdf in jpeg",
      "converti pdf in immagine",
      "estrai immagini pdf"
    ],
    "description": "\n      <p>PDF in JPG converte le pagine dei documenti PDF in immagini JPG di alta qualità. Estrai tutte le pagine o selezionane alcune, con impostazioni personalizzabili di risoluzione e qualità.</p>\n      <p>Perfetto per estrarre immagini dai PDF, creare miniature o convertire documenti per uso web.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona pagine e qualità",
        "description": "Scegli quali pagine convertire e imposta opzioni di qualità/DPI."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per estrarre le immagini e scaricare come ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Pubblicazione web",
        "description": "Converti pagine PDF in immagini per siti web.",
        "icon": "globe"
      },
      {
        "title": "Social media",
        "description": "Estrai pagine come immagini per condivisione sui social.",
        "icon": "share-2"
      },
      {
        "title": "Presentazioni",
        "description": "Converti slide PDF in immagini per presentazioni.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Quali impostazioni di qualità sono disponibili?",
        "answer": "Puoi impostare DPI da 72 a 300 e qualità JPEG da 1 a 100."
      },
      {
        "question": "Posso convertire solo alcune pagine?",
        "answer": "Sì, puoi selezionare pagine singole o intervalli di pagine da convertire."
      },
      {
        "question": "Come vengono gestite più pagine?",
        "answer": "Ogni pagina diventa un file JPG separato, scaricato come archivio ZIP."
      }
    ]
  },
  "pdf-to-png": {
    "title": "PDF in PNG",
    "metaDescription": "Converti pagine PDF in immagini PNG. Qualità senza perdita con supporto alla trasparenza.",
    "keywords": [
      "pdf in png",
      "converti pdf in png",
      "estrazione immagini pdf",
      "conversione pdf lossless"
    ],
    "description": "\n      <p>PDF in PNG converte le pagine dei documenti PDF in immagini PNG di alta qualità con compressione senza perdita. Il formato PNG preserva perfettamente la qualità e supporta la trasparenza.</p>\n      <p>Ideale per estrarre grafici, diagrammi o qualsiasi contenuto in cui la preservazione della qualità è critica.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Seleziona le pagine e imposta opzioni di risoluzione (DPI)."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per estrarre le immagini PNG."
      }
    ],
    "useCases": [
      {
        "title": "Estrazione grafica",
        "description": "Estrai diagrammi e grafici con qualità perfetta.",
        "icon": "image"
      },
      {
        "title": "Asset di design",
        "description": "Converti design PDF in PNG per software di editing.",
        "icon": "palette"
      },
      {
        "title": "Documentazione",
        "description": "Crea immagini di alta qualità per documentazione tecnica.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Perché scegliere PNG rispetto a JPG?",
        "answer": "PNG offre compressione senza perdita e supporto alla trasparenza, ideale per grafica e testo."
      },
      {
        "question": "Gli sfondi trasparenti sono supportati?",
        "answer": "Sì, le pagine PDF con trasparenza sono preservate nell’output PNG."
      },
      {
        "question": "Quale DPI dovrei usare?",
        "answer": "Usa 150 DPI per visualizzazione a schermo, 300 DPI per stampa."
      }
    ]
  },
  "pdf-to-webp": {
    "title": "PDF in WebP",
    "metaDescription": "Converti pagine PDF in immagini WebP. Formato moderno con ottima compressione.",
    "keywords": [
      "pdf in webp",
      "converti pdf in webp",
      "formato immagine moderno",
      "immagini ottimizzate web"
    ],
    "description": "\n      <p>PDF in WebP converte le pagine dei documenti PDF in immagini WebP, il formato moderno di Google che offre ottima compressione con alta qualità.</p>\n      <p>Le immagini WebP sono più piccole di JPG o PNG mantenendo qualità comparabile, ideali per uso web.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Imposta qualità",
        "description": "Scegli le pagine e imposta opzioni di qualità/compressione."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare le immagini WebP."
      }
    ],
    "useCases": [
      {
        "title": "Ottimizzazione web",
        "description": "Crea immagini ottimizzate per il web dai contenuti PDF.",
        "icon": "globe"
      },
      {
        "title": "Risparmio banda",
        "description": "Riduci la dimensione dei file immagine per caricamenti più rapidi.",
        "icon": "zap"
      },
      {
        "title": "Siti moderni",
        "description": "Usa formati immagine moderni per progetti web contemporanei.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Cos’è il formato WebP?",
        "answer": "WebP è un formato immagine moderno di Google che offre compressione superiore."
      },
      {
        "question": "WebP è ampiamente supportato?",
        "answer": "Sì, tutti i browser moderni supportano il formato WebP."
      },
      {
        "question": "Quanto sono più piccoli i file WebP?",
        "answer": "I file WebP sono tipicamente il 25-35% più piccoli rispetto ai JPG equivalenti."
      }
    ]
  },
  "pdf-to-bmp": {
    "title": "PDF in BMP",
    "metaDescription": "Converti pagine PDF in immagini bitmap BMP. Formato non compresso per massima compatibilità.",
    "keywords": [
      "pdf in bmp",
      "converti pdf in bitmap",
      "immagini non compresse",
      "formato legacy"
    ],
    "description": "\n      <p>PDF in BMP converte le pagine dei documenti PDF in immagini bitmap BMP. BMP è un formato non compresso che garantisce massima compatibilità con sistemi e applicazioni legacy.</p>\n      <p>Sebbene i file BMP siano più grandi dei formati compressi, offrono qualità perfetta e compatibilità universale.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona pagine",
        "description": "Scegli quali pagine convertire e imposta il DPI."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare le immagini BMP."
      }
    ],
    "useCases": [
      {
        "title": "Sistemi legacy",
        "description": "Crea immagini compatibili con software più vecchi.",
        "icon": "history"
      },
      {
        "title": "Applicazioni Windows",
        "description": "Genera file BMP per applicazioni specifiche Windows.",
        "icon": "monitor"
      },
      {
        "title": "Archivi non compressi",
        "description": "Crea archivi di immagini non compressi dai PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Perché usare il formato BMP?",
        "answer": "BMP offre qualità non compressa e massima compatibilità con sistemi legacy."
      },
      {
        "question": "I file BMP sono più grandi?",
        "answer": "Sì, i BMP sono non compressi e significativamente più grandi di JPG o PNG."
      },
      {
        "question": "Quali profondità di colore sono supportate?",
        "answer": "Sono supportate profondità colore a 24 e 32 bit."
      }
    ]
  },
  "pdf-to-tiff": {
    "title": "PDF in TIFF",
    "metaDescription": "Converti PDF in immagini TIFF. Qualità professionale con supporto multipagina.",
    "keywords": [
      "pdf in tiff",
      "converti pdf in tiff",
      "immagini professionali",
      "tiff multipagina"
    ],
    "description": "\n      <p>PDF in TIFF converte i documenti PDF in immagini TIFF di alta qualità. TIFF è il formato preferito per stampa professionale e archiviazione grazie alla compressione senza perdita.</p>\n      <p>Crea TIFF a pagina singola oppure combina tutte le pagine in un file TIFF multipagina. Perfetto per scopi professionali e di archivio.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura l’output",
        "description": "Scegli TIFF a pagina singola o multipagina e imposta il DPI."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare le immagini TIFF."
      }
    ],
    "useCases": [
      {
        "title": "Stampa professionale",
        "description": "Crea file TIFF pronti per la stampa dai documenti PDF.",
        "icon": "printer"
      },
      {
        "title": "Archiviazione documenti",
        "description": "Archivia documenti in formato TIFF di alta qualità.",
        "icon": "archive"
      },
      {
        "title": "Editoria",
        "description": "Converti PDF in TIFF per flussi di pubblicazione.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Posso creare TIFF multipagina?",
        "answer": "Sì, puoi combinare tutte le pagine PDF in un unico TIFF multipagina."
      },
      {
        "question": "Quali opzioni di compressione sono disponibili?",
        "answer": "Sono disponibili LZW, ZIP e nessuna compressione."
      },
      {
        "question": "Quale DPI usare per la stampa?",
        "answer": "Usa 300 DPI o superiore per stampa professionale."
      }
    ]
  },
  "pdf-to-svg": {
    "title": "PDF in SVG",
    "metaDescription": "Converti pagine PDF in grafica vettoriale SVG. Scalabilità perfetta a qualsiasi dimensione con esportazione per pagina.",
    "keywords": [
      "pdf in svg",
      "converti pdf in svg",
      "grafica vettoriale",
      "pdf scalabile",
      "convertitore svg"
    ],
    "description": "\n      <p>PDF in SVG converte ogni pagina del tuo documento PDF in grafica vettoriale scalabile (SVG). SVG è un formato vettoriale che mantiene qualità perfetta a qualsiasi livello di zoom o dimensione di stampa.</p>\n      <p>A differenza dei formati raster (JPG, PNG), la grafica SVG non diventa mai pixelata quando viene scalata. Ideale per loghi, diagrammi, disegni tecnici e contenuti da mostrare a dimensioni diverse.</p>\n      <p>Visualizza l’anteprima di ogni pagina convertita e scaricale singolarmente o come archivio ZIP. Tutto avviene localmente nel tuo browser, garantendo piena privacy.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Imposta qualità della risoluzione e, opzionalmente, specifica intervalli di pagine."
      },
      {
        "step": 3,
        "title": "Anteprima e conversione",
        "description": "Clicca Converti per elaborare. Visualizza l’anteprima cliccando sulle miniature."
      },
      {
        "step": 4,
        "title": "Scarica",
        "description": "Scarica file SVG individuali o tutte le pagine come archivio ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Loghi e grafica",
        "description": "Estrai loghi e grafica vettoriale dai PDF per usarli nei software di design.",
        "icon": "pen-tool"
      },
      {
        "title": "Diagrammi tecnici",
        "description": "Converti disegni tecnici e diagrammi in formato SVG scalabile.",
        "icon": "ruler"
      },
      {
        "title": "Sviluppo web",
        "description": "Crea file SVG pronti per il web dai contenuti PDF.",
        "icon": "globe"
      },
      {
        "title": "Stampa a qualsiasi dimensione",
        "description": "Genera grafica vettoriale che stampa perfettamente a qualsiasi dimensione.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Cos’è il formato SVG?",
        "answer": "SVG (Scalable Vector Graphics) è un formato di immagine vettoriale scalabile a qualsiasi dimensione senza perdita di qualità. È ampiamente usato per loghi, icone e grafica web."
      },
      {
        "question": "L’SVG sarà davvero vettoriale?",
        "answer": "L’SVG contiene un rendering ad alta risoluzione della pagina PDF. Per PDF con contenuti vettoriali, otterrai output nitido a qualsiasi scala."
      },
      {
        "question": "Posso vedere l’anteprima prima di scaricare?",
        "answer": "Sì! Clicca su una miniatura per vedere l’anteprima a dimensione intera e scaricare pagine singole o tutte insieme."
      },
      {
        "question": "Che risoluzione dovrei scegliere?",
        "answer": "Risoluzioni più alte (216 o 288 DPI) producono SVG più grandi e dettagliati. Usa valori inferiori per elaborazione più rapida e file più piccoli."
      }
    ]
  },
  "pdf-to-greyscale": {
    "title": "PDF in scala di grigi",
    "metaDescription": "Converti PDF a colori in scala di grigi. Riduci la dimensione del file e prepara per stampa in bianco e nero.",
    "keywords": [
      "pdf in scala di grigi",
      "pdf in bianco e nero",
      "rimuovi colori pdf",
      "PDF in scala di grigi"
    ],
    "description": "\n      <p>PDF in scala di grigi converte documenti PDF a colori in bianco e nero (scala di grigi). Questo riduce la dimensione del file e prepara i documenti alla stampa in bianco e nero.</p>\n      <p>La conversione preserva la nitidezza del testo e il dettaglio delle immagini rimuovendo le informazioni di colore. Perfetto per stampe di bozza o versioni ottimizzate per la stampante.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF a colori",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Anteprima conversione",
        "description": "Visualizza l’anteprima dell’aspetto della versione in scala di grigi."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il PDF in scala di grigi."
      }
    ],
    "useCases": [
      {
        "title": "Risparmio stampa",
        "description": "Converti in scala di grigi per ridurre i costi di stampa a colori.",
        "icon": "printer"
      },
      {
        "title": "Documenti di bozza",
        "description": "Crea bozze in bianco e nero per revisione.",
        "icon": "file-text"
      },
      {
        "title": "Riduzione dimensioni",
        "description": "Riduci le dimensioni del PDF rimuovendo le informazioni di colore.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Il testo rimarrà leggibile?",
        "answer": "Sì, la nitidezza del testo è preservata durante la conversione."
      },
      {
        "question": "Quanto si riduce la dimensione del file?",
        "answer": "La riduzione varia, ma può essere del 20-50% per documenti ricchi di colore."
      },
      {
        "question": "Posso convertire solo alcune pagine?",
        "answer": "Sì, puoi selezionare quali pagine convertire in scala di grigi."
      }
    ]
  },
  "pdf-to-json": {
    "title": "PDF in JSON",
    "metaDescription": "Estrai contenuti PDF in formato JSON. Ottieni dati strutturati dai documenti PDF.",
    "keywords": [
      "pdf in json",
      "estrai dati pdf",
      "parser pdf",
      "dati pdf strutturati"
    ],
    "description": "\n      <p>PDF in JSON estrae contenuti dai documenti PDF in formato JSON strutturato. Estrai testo, metadati, informazioni sulle pagine e struttura del documento per uso programmatico.</p>\n      <p>Perfetto per estrazione dati, analisi documenti o integrazione dei contenuti PDF in applicazioni e flussi di lavoro.</p>\n      <p>Tutta l’estrazione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona i dati",
        "description": "Scegli quali contenuti estrarre: testo, metadati, struttura."
      },
      {
        "step": 3,
        "title": "Estrai e scarica",
        "description": "Clicca Estrai per generare il JSON e scaricarlo."
      }
    ],
    "useCases": [
      {
        "title": "Estrazione dati",
        "description": "Estrai dati strutturati dai documenti PDF.",
        "icon": "database"
      },
      {
        "title": "Analisi documenti",
        "description": "Analizza struttura e contenuti PDF in modo programmatico.",
        "icon": "search"
      },
      {
        "title": "Integrazione",
        "description": "Importa contenuti PDF nelle applicazioni via JSON.",
        "icon": "plug"
      }
    ],
    "faq": [
      {
        "question": "Quali dati vengono estratti?",
        "answer": "Contenuto testuale, metadati, dimensioni pagina, font e struttura del documento."
      },
      {
        "question": "Il formato JSON è documentato?",
        "answer": "Sì, lo schema JSON è coerente e ben documentato."
      },
      {
        "question": "Posso estrarre da PDF scansionati?",
        "answer": "I PDF scansionati richiedono prima l’OCR. Usa lo strumento OCR PDF prima dell’estrazione."
      }
    ]
  },
  "pdf-to-pptx": {
    "title": "PDF in PowerPoint",
    "metaDescription": "Converti PDF in presentazioni PowerPoint. Ogni pagina diventa una slide di alta qualità.",
    "keywords": [
      "pdf in pptx",
      "pdf in powerpoint",
      "converti slide pdf",
      "presentazione pdf"
    ],
    "description": "\n      <p>PDF in PowerPoint converte i tuoi documenti PDF in presentazioni PowerPoint (PPTX) modificabili. Ogni pagina PDF viene trasformata in una slide di alta qualità, preservando perfettamente il layout visivo.</p>\n      <p>Ideale per convertire report, dispense o qualsiasi contenuto PDF in formato presentazione. Puoi scegliere la qualità immagine (DPI) per bilanciare dimensione del file e nitidezza.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Scegli la qualità",
        "description": "Seleziona la qualità immagine (DPI) per le slide. DPI più alti significano migliore qualità ma file più grande."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare la presentazione PowerPoint e scaricare il file PPTX."
      }
    ],
    "useCases": [
      {
        "title": "Creazione presentazioni",
        "description": "Converti report o documenti PDF in slide per riunioni.",
        "icon": "presentation"
      },
      {
        "title": "Materiali di formazione",
        "description": "Trasforma documenti formativi PDF in presentazioni PowerPoint interattive.",
        "icon": "book-open"
      },
      {
        "title": "Riutilizzo contenuti",
        "description": "Converti contenuti PDF esistenti in formato slide modificabile.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Le slide saranno modificabili?",
        "answer": "Ogni slide contiene un’immagine di alta qualità della pagina PDF. Puoi aggiungere testi, forme e annotazioni in PowerPoint."
      },
      {
        "question": "Quale DPI scegliere?",
        "answer": "Usa 150 DPI per presentazioni su schermo. Usa 300 DPI per stampa o quando serve la massima qualità."
      },
      {
        "question": "Posso convertire PDF multipagina?",
        "answer": "Sì, ogni pagina del PDF diventa una slide separata nella presentazione."
      }
    ]
  },
  "pdf-to-excel": {
    "title": "PDF in Excel",
    "metaDescription": "Converti PDF in fogli di calcolo Excel. Estrai tabelle in formato XLSX.",
    "keywords": [
      "pdf in excel",
      "pdf in xlsx",
      "converti tabelle pdf",
      "estrai tabelle"
    ],
    "description": "\n      <p>PDF in Excel converte i tuoi documenti PDF in fogli di calcolo Microsoft Excel (XLSX) modificabili. Lo strumento rileva automaticamente le tabelle nel PDF ed estrae ciascuna in fogli separati.</p>\n      <p>Ideale per analizzare report finanziari, fatture o qualsiasi dato presentato in tabelle. Le tabelle di ogni pagina vengono organizzate in fogli per una facile manipolazione.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i dati restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Elabora",
        "description": "Lo strumento identificherà automaticamente ed estrarrà le tabelle."
      },
      {
        "step": 3,
        "title": "Scarica Excel",
        "description": "Scarica il file Excel con le tabelle estratte."
      }
    ],
    "useCases": [
      {
        "title": "Analisi finanziaria",
        "description": "Converti estratti conto o fatture in Excel per l’analisi.",
        "icon": "trending-up"
      },
      {
        "title": "Estrazione dati",
        "description": "Estrai tabelle da articoli di ricerca o report.",
        "icon": "database"
      },
      {
        "title": "Gestione inventario",
        "description": "Converti elenchi inventario da PDF a foglio di calcolo.",
        "icon": "clipboard"
      }
    ],
    "faq": [
      {
        "question": "Come vengono gestite le tabelle?",
        "answer": "Le tabelle rilevate su ogni pagina vengono estratte in fogli corrispondenti nel file Excel."
      },
      {
        "question": "E se non ci sono tabelle?",
        "answer": "Verrà creato un foglio informativo che indica che non sono state trovate tabelle."
      },
      {
        "question": "La formattazione è preservata?",
        "answer": "I dati sono preservati, ma la formattazione visiva complessa può essere semplificata per l’uso nel foglio."
      }
    ]
  },
  "ocr-pdf": {
    "title": "PDF OCR",
    "metaDescription": "Rendi i PDF scansionati ricercabili con OCR. Estrai testo da immagini e documenti scansionati.",
    "keywords": [
      "ocr pdf",
      "pdf ricercabile",
      "riconoscimento testo",
      "scansione in testo"
    ],
    "description": "\n      <p>OCR PDF utilizza il Riconoscimento Ottico dei Caratteri per estrarre testo da documenti scansionati e immagini contenute nei PDF. Converte PDF basati su immagini in documenti con testo ricercabile e selezionabile.</p>\n      <p>Il supporto multilingue garantisce un riconoscimento accurato indipendentemente dalla lingua del documento. Il layout originale viene preservato aggiungendo un livello di testo ricercabile.</p>\n      <p>Tutto l’elaborato OCR avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF scansionato",
        "description": "Trascina e rilascia il PDF scansionato oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona lingua",
        "description": "Scegli la lingua del documento per un riconoscimento accurato."
      },
      {
        "step": 3,
        "title": "Elabora e scarica",
        "description": "Clicca Elabora per eseguire l’OCR e scaricare il PDF ricercabile."
      }
    ],
    "useCases": [
      {
        "title": "Digitalizza archivi",
        "description": "Rendi ricercabili archivi di documenti scansionati.",
        "icon": "archive"
      },
      {
        "title": "Ricerca nei documenti",
        "description": "Abilita la ricerca testuale nei documenti scansionati.",
        "icon": "search"
      },
      {
        "title": "Estrazione del testo",
        "description": "Estrai testo da documenti scansionati per la modifica.",
        "icon": "type"
      }
    ],
    "faq": [
      {
        "question": "Quali lingue sono supportate?",
        "answer": "Sono supportate oltre 100 lingue, tra cui inglese, cinese, giapponese, coreano e molte altre."
      },
      {
        "question": "Il layout originale viene preservato?",
        "answer": "Sì, il layout visivo originale è preservato aggiungendo un livello di testo ricercabile."
      },
      {
        "question": "Quanto è accurato l’OCR?",
        "answer": "L’accuratezza dipende dalla qualità della scansione, ma di solito supera il 95% per documenti nitidi."
      }
    ]
  },
  "alternate-merge": {
    "title": "Unione alternata",
    "metaDescription": "Unisci PDF alternando le pagine. Combina scansioni fronte/retro in un unico documento.",
    "keywords": [
      "unione alternata",
      "intercalare pagine pdf",
      "combina scansioni",
      "unisci fronte-retro"
    ],
    "description": "\n      <p>L’Unione alternata combina due PDF intercalando le loro pagine in modo alternato. Perfetta per unire in un unico documento le pagine fronte e retro scansionate separatamente.</p>\n      <p>Carica due PDF e lo strumento li unirà prendendo a turno una pagina da ciascuno. Puoi anche invertire l’ordine di uno dei documenti per scansioni retro→fronte.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica due PDF",
        "description": "Carica il PDF delle pagine fronte e quello delle pagine retro."
      },
      {
        "step": 2,
        "title": "Configura l’ordine",
        "description": "Scegli se invertire il secondo documento per scansioni retro→fronte."
      },
      {
        "step": 3,
        "title": "Unisci e scarica",
        "description": "Clicca Unisci per intercalare le pagine e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Scansione duplex",
        "description": "Combina pagine fronte e retro scansionate separatamente.",
        "icon": "copy"
      },
      {
        "title": "Assemblaggio documenti",
        "description": "Intercala pagine da due documenti correlati.",
        "icon": "layers"
      },
      {
        "title": "Scansione libri",
        "description": "Combina scansioni di pagine pari e dispari in libri completi.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "E se i documenti hanno pagine diverse?",
        "answer": "Le pagine extra del documento più lungo vengono aggiunte alla fine."
      },
      {
        "question": "Posso invertire l’ordine delle pagine?",
        "answer": "Sì, puoi invertire uno dei due documenti prima dell’unione."
      },
      {
        "question": "È diverso dalla fusione normale?",
        "answer": "Sì, la fusione normale accoda i documenti; l’unione alternata interseca le pagine."
      }
    ]
  },
  "add-attachments": {
    "title": "Aggiungi allegati",
    "metaDescription": "Incorpora file nei documenti PDF. Allega qualsiasi tipo di file ai tuoi PDF.",
    "keywords": [
      "allegati pdf",
      "incorpora file",
      "allega a pdf",
      "portfolio pdf"
    ],
    "description": "\n      <p>Aggiungi allegati incorpora file di qualsiasi tipo nei tuoi documenti PDF. Allega fogli di calcolo, immagini, file sorgente o altri documenti per creare pacchetti PDF completi.</p>\n      <p>Gli allegati sono incorporati nel PDF e possono essere estratti dai destinatari con qualsiasi lettore PDF. Perfetto per distribuire file correlati insieme.</p>\n      <p>Tutto avviene nel tuo browser, garantendo che i tuoi file restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Aggiungi allegati",
        "description": "Seleziona i file da allegare al PDF."
      },
      {
        "step": 3,
        "title": "Salva e scarica",
        "description": "Clicca Salva per incorporare gli allegati e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Pacchetti di progetto",
        "description": "Raggruppa file di progetto con PDF di documentazione.",
        "icon": "package"
      },
      {
        "title": "Distribuzione report",
        "description": "Allega file di dati sorgente ai PDF dei report.",
        "icon": "paperclip"
      },
      {
        "title": "Bundle di contratti",
        "description": "Includi documenti di supporto con i contratti.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Quali tipi di file posso allegare?",
        "answer": "Qualsiasi tipo di file può essere allegato a un PDF."
      },
      {
        "question": "Esiste un limite di dimensione?",
        "answer": "La dimensione totale del PDF, inclusi gli allegati, non dovrebbe superare i 500 MB."
      },
      {
        "question": "I destinatari possono estrarre gli allegati?",
        "answer": "Sì, qualsiasi lettore PDF può estrarre gli allegati incorporati."
      }
    ]
  },
  "extract-attachments": {
    "title": "Estrai allegati",
    "metaDescription": "Estrai i file incorporati dai PDF. Scarica tutti gli allegati dai documenti PDF.",
    "keywords": [
      "estrai allegati",
      "allegati pdf",
      "scarica file incorporati",
      "estrazione pdf"
    ],
    "description": "\n      <p>Estrai allegati recupera tutti i file incorporati nei documenti PDF. Scarica gli allegati singolarmente o come archivio ZIP contenente tutti i file.</p>\n      <p>Perfetto per accedere a file sorgente, dati o materiali supplementari incorporati nei pacchetti PDF.</p>\n      <p>Tutta l’estrazione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Visualizza allegati",
        "description": "Vedi l’elenco di tutti i file incorporati nel PDF."
      },
      {
        "step": 3,
        "title": "Estrai e scarica",
        "description": "Scarica i file singolarmente o tutti insieme come ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Accedi ai file sorgente",
        "description": "Estrai i file di dati originali dai report PDF.",
        "icon": "download"
      },
      {
        "title": "Recupera allegati",
        "description": "Recupera i file incorporati dai pacchetti PDF.",
        "icon": "folder-open"
      },
      {
        "title": "Estrazione in batch",
        "description": "Estrai allegati da più PDF contemporaneamente.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "E se non ci sono allegati?",
        "answer": "Lo strumento indicherà se non vengono trovati file incorporati."
      },
      {
        "question": "Sono supportati tutti i tipi di allegati?",
        "answer": "Sì, tutti i tipi di file incorporati possono essere estratti."
      },
      {
        "question": "Posso estrarre da più PDF?",
        "answer": "Sì, puoi elaborare più PDF e scaricare tutti gli allegati."
      }
    ]
  },
  "extract-images": {
    "title": "Estrai immagini dal PDF",
    "metaDescription": "Estrai tutte le immagini incorporate dai PDF. Scarica singolarmente o come archivio ZIP. Filtra automaticamente le immagini troppo piccole.",
    "keywords": [
      "estrai immagini pdf",
      "estrazione immagini pdf",
      "recupera immagini da pdf",
      "scarica immagini pdf",
      "pdf in immagini"
    ],
    "description": "\n      <p>Estrai immagini dal PDF recupera tutte le immagini incorporate nei tuoi documenti PDF. Scarica immagini di alta qualità singolarmente o come comodo archivio ZIP.</p>\n      <p>Lo strumento filtra automaticamente immagini piccole come icone e decorazioni in base a soglie di dimensione personalizzabili. Elabora più PDF contemporaneamente per un’estrazione efficiente in batch.</p>\n      <p>Tutta l’estrazione avviene nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica i PDF",
        "description": "Trascina e rilascia uno o più file PDF oppure clicca per selezionarli dal dispositivo."
      },
      {
        "step": 2,
        "title": "Imposta i filtri",
        "description": "Regola larghezza, altezza e dimensione minima per filtrare le immagini indesiderate."
      },
      {
        "step": 3,
        "title": "Estrai immagini",
        "description": "Clicca Estrai per trovare tutte le immagini incorporate nei PDF."
      },
      {
        "step": 4,
        "title": "Scarica",
        "description": "Scarica immagini singole o tutte le immagini come archivio ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Recupero foto",
        "description": "Estrai foto e immagini incorporate nei PDF per riutilizzo o archivio.",
        "icon": "image"
      },
      {
        "title": "Raccolta asset",
        "description": "Raccogli tutte le grafiche e immagini da report, presentazioni o brochure in PDF.",
        "icon": "folder"
      },
      {
        "title": "Riutilizzo contenuti",
        "description": "Estrai immagini dai PDF per usarle in altri documenti, siti web o presentazioni.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Quali formati di immagine vengono estratti?",
        "answer": "Le immagini vengono estratte nel loro formato nativo (JPEG, PNG, ecc.) quando possibile, oppure convertite in PNG per dati immagine grezzi."
      },
      {
        "question": "Perché alcune immagini mancano?",
        "answer": "Le immagini troppo piccole sotto la soglia impostata vengono filtrate. Regola i filtri per estrarre immagini più piccole."
      },
      {
        "question": "Posso estrarre da PDF scansionati?",
        "answer": "I PDF scansionati di solito contengono una grande immagine per pagina. Usa invece lo strumento PDF in Immagini per la conversione pagina per pagina."
      }
    ]
  },
  "edit-attachments": {
    "title": "Modifica allegati",
    "metaDescription": "Gestisci gli allegati nei PDF. Visualizza, rinomina e rimuovi i file incorporati.",
    "keywords": [
      "modifica allegati",
      "gestisci file pdf",
      "rimuovi allegati",
      "rinomina allegati"
    ],
    "description": "\n      <p>Modifica allegati ti consente di gestire i file incorporati nei documenti PDF. Visualizza tutti gli allegati, rinominali oppure rimuovi i file indesiderati dal PDF.</p>\n      <p>Perfetto per ripulire i pacchetti PDF o aggiornare le informazioni degli allegati prima della distribuzione.</p>\n      <p>Tutte le modifiche avvengono nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Gestisci allegati",
        "description": "Visualizza, rinomina o elimina i file incorporati."
      },
      {
        "step": 3,
        "title": "Salva e scarica",
        "description": "Clicca Salva per applicare le modifiche e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Ripulisci i PDF",
        "description": "Rimuovi allegati non necessari dai pacchetti PDF.",
        "icon": "trash-2"
      },
      {
        "title": "Rinomina file",
        "description": "Aggiorna i nomi degli allegati per maggiore chiarezza.",
        "icon": "edit"
      },
      {
        "title": "Revisiona contenuti",
        "description": "Verifica i file incorporati prima della distribuzione.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Posso aggiungere nuovi allegati qui?",
        "answer": "Usa lo strumento Aggiungi allegati per incorporare nuovi file."
      },
      {
        "question": "La rimozione è permanente?",
        "answer": "Sì, gli allegati rimossi non possono essere recuperati dal file di output."
      },
      {
        "question": "Posso visualizzare un’anteprima degli allegati?",
        "answer": "Puoi vedere nomi e dimensioni; usa Estrai allegati per visualizzare i contenuti."
      }
    ]
  },
  "divide-pages": {
    "title": "Dividi pagine",
    "metaDescription": "Dividi le pagine PDF in più sezioni. Suddivisione orizzontale, verticale o a griglia.",
    "keywords": [
      "dividi pagine pdf",
      "suddividi pagina",
      "taglia pagina pdf",
      "sezioni pagina"
    ],
    "description": "\n      <p>Dividi pagine suddivide le singole pagine PDF in più sezioni. Taglia le pagine in orizzontale, verticale o in una griglia per creare più pagine da una sola.</p>\n      <p>Perfetto per dividere documenti scansionati con più elementi per pagina o per separare pagine in grande formato in dimensioni standard.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Imposta la suddivisione",
        "description": "Scegli suddivisione orizzontale, verticale o a griglia e imposta il numero di sezioni."
      },
      {
        "step": 3,
        "title": "Dividi e scarica",
        "description": "Clicca Dividi per separare le pagine e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Dividere scansioni",
        "description": "Separa pagine scansionate che contengono più documenti.",
        "icon": "scissors"
      },
      {
        "title": "Ridimensionare pagine",
        "description": "Dividi pagine grandi in formati carta standard.",
        "icon": "maximize-2"
      },
      {
        "title": "Creare schede",
        "description": "Dividi pagine in sezioni formato tessera per la stampa.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Posso dividere in sezioni disuguali?",
        "answer": "Attualmente le suddivisioni sono uguali. Usa lo strumento Ritaglia PDF per sezioni personalizzate."
      },
      {
        "question": "Cosa succede al contenuto sulle linee di divisione?",
        "answer": "Il contenuto viene tagliato sulla linea di divisione; assicurati che elementi importanti non cadano sui bordi."
      },
      {
        "question": "Posso dividere solo alcune pagine?",
        "answer": "Sì, puoi selezionare quali pagine dividere."
      }
    ]
  },
  "add-blank-page": {
    "title": "Aggiungi pagina vuota",
    "metaDescription": "Inserisci pagine vuote nei PDF. Aggiungi pagine vuote in qualsiasi posizione.",
    "keywords": [
      "aggiungi pagina vuota",
      "inserisci pagina",
      "pagina vuota",
      "inserimento pagine pdf"
    ],
    "description": "\n      <p>Aggiungi pagina vuota inserisce pagine vuote nei tuoi PDF in qualsiasi posizione. Aggiungi pagine prima, dopo o tra quelle esistenti con dimensione personalizzabile.</p>\n      <p>Perfetto per aggiungere spazio per note, creare divisori di sezione o preparare i documenti per la stampa.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Scegli la posizione",
        "description": "Seleziona dove inserire le pagine vuote e quante aggiungerne."
      },
      {
        "step": 3,
        "title": "Aggiungi e scarica",
        "description": "Clicca Aggiungi per inserire le pagine e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Spazio per note",
        "description": "Aggiungi pagine vuote per appunti a mano.",
        "icon": "edit-3"
      },
      {
        "title": "Divisori di sezione",
        "description": "Inserisci pagine vuote tra le sezioni del documento.",
        "icon": "minus"
      },
      {
        "title": "Preparazione stampa",
        "description": "Aggiungi pagine per l’allineamento nella stampa fronte/retro.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Posso scegliere la dimensione della pagina?",
        "answer": "Sì, le pagine vuote possono corrispondere a quelle esistenti o usare dimensioni personalizzate."
      },
      {
        "question": "Posso aggiungere più pagine vuote?",
        "answer": "Sì, puoi aggiungere qualsiasi numero di pagine vuote in una volta."
      },
      {
        "question": "Posso aggiungere pagine colorate?",
        "answer": "Usa lo strumento Colore di sfondo dopo l’inserimento per aggiungere colore."
      }
    ]
  },
  "reverse-pages": {
    "title": "Inverti pagine",
    "metaDescription": "Inverti l’ordine delle pagine PDF. Capovolgi le pagine dalla fine all’inizio.",
    "keywords": [
      "inverti pdf",
      "inverti ordine pagine",
      "capovolgi pagine",
      "inverti documento"
    ],
    "description": "\n      <p>Inverti pagine capovolge l’ordine delle pagine nel tuo PDF, mettendo l’ultima per prima e la prima per ultima. Utile per documenti scansionati al contrario o per esigenze di stampa specifiche.</p>\n      <p>Lo strumento elabora l’intero documento o intervalli di pagine selezionati, mantenendo intatti contenuti e formattazione.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona le pagine",
        "description": "Scegli se invertire tutte le pagine o un intervallo."
      },
      {
        "step": 3,
        "title": "Inverti e scarica",
        "description": "Clicca Inverti per capovolgere l’ordine e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Correggi l’ordine di scansione",
        "description": "Sistema documenti scansionati in ordine inverso.",
        "icon": "refresh-cw"
      },
      {
        "title": "Preparazione stampa",
        "description": "Inverti le pagine per requisiti di stampa specifici.",
        "icon": "printer"
      },
      {
        "title": "Riordino documenti",
        "description": "Capovolgi rapidamente l’ordine per la revisione.",
        "icon": "arrow-up-down"
      }
    ],
    "faq": [
      {
        "question": "I segnalibri vengono aggiornati?",
        "answer": "Sì, i segnalibri vengono aggiornati per puntare alle pagine invertite corrette."
      },
      {
        "question": "Posso invertire solo alcune pagine?",
        "answer": "Sì, puoi selezionare un intervallo di pagine da invertire."
      },
      {
        "question": "È la stessa cosa della rotazione?",
        "answer": "No, invertire cambia l’ordine delle pagine; ruotare cambia l’orientamento."
      }
    ]
  },
  "rotate-pdf": {
    "title": "Ruota PDF",
    "metaDescription": "Ruota le pagine PDF di 90, 180 o 270 gradi.",
    "keywords": [
      "ruota pdf",
      "ruota pagine pdf",
      "rotazione pdf",
      "correggi orientamento"
    ],
    "description": "\n      <p>Ruota PDF gira le pagine del documento di 90, 180 o 270 gradi. Correggi scansioni con orientamento errato, ruota pagine orizzontali o regola l’orientamento per la visualizzazione.</p>\n      <p>Ruota tutte le pagine in modo uniforme oppure seleziona pagine specifiche da ruotare singolarmente. Lo strumento preserva contenuti e formattazione.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona la rotazione",
        "description": "Scegli l’angolo di rotazione e le pagine da ruotare."
      },
      {
        "step": 3,
        "title": "Ruota e scarica",
        "description": "Clicca Ruota per applicare le modifiche e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Correggi scansioni",
        "description": "Correggi l’orientamento dei documenti scansionati.",
        "icon": "rotate-cw"
      },
      {
        "title": "Pagine orizzontali",
        "description": "Ruota le pagine in orizzontale per una corretta visualizzazione.",
        "icon": "monitor"
      },
      {
        "title": "Orientamento misto",
        "description": "Uniforma l’orientamento in documenti con pagine miste.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Posso ruotare pagine diverse in modo diverso?",
        "answer": "Sì, puoi applicare rotazioni differenti a pagine differenti."
      },
      {
        "question": "La rotazione influisce sulla qualità di stampa?",
        "answer": "No, la rotazione preserva la qualità dei contenuti."
      },
      {
        "question": "Posso ruotare di angoli personalizzati?",
        "answer": "La rotazione è limitata a incrementi di 90° (90, 180, 270)."
      }
    ]
  },
  "n-up-pdf": {
    "title": "N-up PDF",
    "metaDescription": "Stampa più pagine PDF per foglio. Crea layout 2-up, 4-up o personalizzati.",
    "keywords": [
      "n-up pdf",
      "più pagine per foglio",
      "stampa 2-up",
      "imposizione pagine"
    ],
    "description": "\n      <p>N-up PDF dispone più pagine su un unico foglio, creando layout 2-up, 4-up, 6-up, 9-up o personalizzati. Perfetto per risparmiare carta in stampa o creare dispense.</p>\n      <p>Scegli tra layout predefiniti o crea disposizioni personalizzate. Lo strumento ridimensiona e posiziona automaticamente le pagine per risultati ottimali.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Scegli il layout",
        "description": "Seleziona 2-up, 4-up, 6-up, 9-up o griglia personalizzata."
      },
      {
        "step": 3,
        "title": "Crea e scarica",
        "description": "Clicca Crea per generare il PDF n-up e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Risparmio carta",
        "description": "Stampa più pagine per foglio per ridurre l’uso di carta.",
        "icon": "leaf"
      },
      {
        "title": "Crea dispense",
        "description": "Crea dispense compatte da slide di presentazioni.",
        "icon": "file-text"
      },
      {
        "title": "Revisioni",
        "description": "Stampa documenti ridotti per la revisione.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Quali layout sono disponibili?",
        "answer": "2-up, 4-up, 6-up, 9-up e griglie personalizzate."
      },
      {
        "question": "Posso aggiungere bordi tra le pagine?",
        "answer": "Sì, puoi aggiungere bordi e spazi (gutter) tra le pagine."
      },
      {
        "question": "L’ordine delle pagine è preservato?",
        "answer": "Sì, le pagine sono disposte in ordine di lettura (da sinistra a destra, dall’alto in basso)."
      }
    ]
  },
  "combine-single-page": {
    "title": "Combina in pagina singola",
    "metaDescription": "Cuci le pagine PDF in un’unica pagina continua. Crea documenti scorrevoli su una sola pagina.",
    "keywords": [
      "combina pagine",
      "pdf pagina singola",
      "unisci pagine",
      "scorrimento continuo"
    ],
    "description": "\n      <p>Combina in pagina singola unisce tutte le pagine del PDF in un’unica pagina continua. Ideale per documenti scorrevoli perfetti per la visualizzazione web o la lettura continua.</p>\n      <p>Le pagine sono unite verticalmente con spaziatura personalizzabile. Il risultato è una singola pagina lunga contenente tutto il contenuto.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Imposta spaziatura",
        "description": "Scegli lo spazio tra le pagine unite."
      },
      {
        "step": 3,
        "title": "Combina e scarica",
        "description": "Clicca Combina per creare il PDF a pagina singola."
      }
    ],
    "useCases": [
      {
        "title": "Documenti web",
        "description": "Crea PDF scorrevoli da incorporare sul web.",
        "icon": "globe"
      },
      {
        "title": "Lettura continua",
        "description": "Converti documenti impaginati in scorrimento continuo.",
        "icon": "scroll"
      },
      {
        "title": "Contenuti lunghi",
        "description": "Combina pagine per lettura lunga senza interruzioni.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Esiste un limite di pagine?",
        "answer": "Documenti molto lunghi possono essere limitati dalla memoria del browser."
      },
      {
        "question": "Posso aggiungere separatori tra le pagine?",
        "answer": "Sì, puoi aggiungere spazi o linee tra le pagine originali."
      },
      {
        "question": "Funziona per la stampa?",
        "answer": "Il risultato è ideale per lo schermo; per la stampa usa N-up per i layout."
      }
    ]
  },
  "view-metadata": {
    "title": "Visualizza metadati",
    "metaDescription": "Visualizza le proprietà dei PDF. Vedi autore, titolo, date e altri metadati.",
    "keywords": [
      "metadati pdf",
      "proprietà documento",
      "info pdf",
      "dettagli pdf"
    ],
    "description": "\n      <p>Visualizza metadati mostra tutte le proprietà e i metadati dei tuoi file PDF. Vedi autore, titolo, oggetto, parole chiave, data di creazione, data di modifica e altro.</p>\n      <p>Utile per audit dei documenti, verifica delle informazioni del file o controllo dell’autenticità.</p>\n      <p>Tutta la visualizzazione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Visualizza proprietà",
        "description": "Consulta tutti i metadati mostrati in formato organizzato."
      },
      {
        "step": 3,
        "title": "Esporta se necessario",
        "description": "Esporta opzionalmente i metadati in JSON."
      }
    ],
    "useCases": [
      {
        "title": "Audit documenti",
        "description": "Revisiona le proprietà per conformità.",
        "icon": "clipboard-check"
      },
      {
        "title": "Verifica autenticità",
        "description": "Controlla date di creazione e informazioni sull’autore.",
        "icon": "shield"
      },
      {
        "title": "Informazioni file",
        "description": "Ottieni informazioni dettagliate sui PDF.",
        "icon": "info"
      }
    ],
    "faq": [
      {
        "question": "Quali metadati vengono mostrati?",
        "answer": "Titolo, autore, oggetto, parole chiave, creatore, produttore, date e versione PDF."
      },
      {
        "question": "Posso modificare i metadati qui?",
        "answer": "Usa lo strumento Modifica metadati per modificare le proprietà."
      },
      {
        "question": "I metadati XMP sono inclusi?",
        "answer": "Sì, vengono mostrati sia i metadati standard che quelli XMP."
      }
    ]
  },
  "edit-metadata": {
    "title": "Modifica metadati",
    "metaDescription": "Modifica le proprietà dei PDF. Cambia titolo, autore, oggetto e parole chiave.",
    "keywords": [
      "modifica metadati pdf",
      "cambia proprietà pdf",
      "autore pdf",
      "info documento"
    ],
    "description": "\n      <p>Modifica metadati ti consente di aggiornare le proprietà del documento nei tuoi PDF. Cambia titolo, autore, oggetto, parole chiave e altri campi di metadati.</p>\n      <p>Perfetto per correggere informazioni, aggiungere attribuzioni corrette o preparare i file alla distribuzione.</p>\n      <p>Tutte le modifiche avvengono nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Modifica proprietà",
        "description": "Aggiorna titolo, autore, oggetto, parole chiave e altri campi."
      },
      {
        "step": 3,
        "title": "Salva e scarica",
        "description": "Clicca Salva per applicare le modifiche e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Aggiungi attribuzione",
        "description": "Imposta correttamente autore e creatore.",
        "icon": "user"
      },
      {
        "title": "Ottimizzazione SEO",
        "description": "Aggiungi parole chiave e descrizioni per la ricercabilità.",
        "icon": "search"
      },
      {
        "title": "Preparazione documenti",
        "description": "Prepara documenti con metadati corretti prima della condivisione.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Quali campi posso modificare?",
        "answer": "Titolo, autore, oggetto, parole chiave, creatore e produttore."
      },
      {
        "question": "Posso rimuovere tutti i metadati?",
        "answer": "Usa lo strumento Rimuovi metadati per eliminare tutte le proprietà."
      },
      {
        "question": "Le date sono modificabili?",
        "answer": "Le date di creazione e modifica vengono aggiornate automaticamente."
      }
    ]
  },
  "pdf-to-zip": {
    "title": "PDF in ZIP",
    "metaDescription": "Raggruppa più PDF in un archivio ZIP. Comprimi e combina i file PDF.",
    "keywords": [
      "pdf in zip",
      "comprimere pdf",
      "raggruppa pdf",
      "archiviare pdf"
    ],
    "description": "\n      <p>PDF in ZIP raggruppa più file PDF in un unico archivio ZIP. Comprimi e combina i tuoi PDF per condivisione, archiviazione o backup più semplici.</p>\n      <p>Lo strumento crea un archivio compresso con tutti i file PDF, riducendo la dimensione totale e semplificando la gestione dei file.</p>\n      <p>Tutto avviene nel tuo browser, garantendo che i tuoi file restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica i PDF",
        "description": "Trascina e rilascia più file PDF oppure clicca per selezionarli."
      },
      {
        "step": 2,
        "title": "Configura archivio",
        "description": "Imposta facoltativamente nome dell’archivio e livello di compressione."
      },
      {
        "step": 3,
        "title": "Crea e scarica",
        "description": "Clicca Crea per generare l’archivio ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Condivisione file",
        "description": "Raggruppa più PDF per condividerli più facilmente.",
        "icon": "share-2"
      },
      {
        "title": "Creazione backup",
        "description": "Crea backup compressi di raccolte PDF.",
        "icon": "archive"
      },
      {
        "title": "Allegati email",
        "description": "Combina PDF in un unico allegato per l’email.",
        "icon": "mail"
      }
    ],
    "faq": [
      {
        "question": "Quanta compressione viene applicata?",
        "answer": "La compressione ZIP in genere riduce la dimensione totale del 10-30%."
      },
      {
        "question": "Esiste un limite di file?",
        "answer": "Puoi includere fino a 100 PDF in un singolo archivio."
      },
      {
        "question": "Posso impostare una password?",
        "answer": "La creazione di ZIP protetti da password non è attualmente supportata."
      }
    ]
  },
  "compare-pdfs": {
    "title": "Confronta PDF",
    "metaDescription": "Confronta due documenti PDF. Evidenzia le differenze tra versioni.",
    "keywords": [
      "confronta pdf",
      "diff pdf",
      "confronto documenti",
      "confronto versioni"
    ],
    "description": "\n      <p>Confronta PDF analizza due documenti PDF ed evidenzia le differenze tra di essi. Perfetto per rivedere revisioni, controllare modifiche ai contratti o verificare gli interventi.</p>\n      <p>Visualizza le pagine affiancate, passa tra le coppie di pagine e filtra le modifiche evidenziate. Confronta il testo estratto e i nomi dei caratteri. Le immagini scansionate e le altre modifiche visive non vengono confrontate.</p>\n      <p>Tutto il confronto avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica due PDF",
        "description": "Carica i documenti PDF originale e modificato."
      },
      {
        "step": 2,
        "title": "Confronta PDF",
        "description": "Visualizza le pagine affiancate, passa tra le coppie di pagine e filtra le modifiche evidenziate."
      },
      {
        "step": 3,
        "title": "Filtri evidenziati",
        "description": "Modifiche del testo · Modifiche al carattere · Intestazioni e piè di pagina · Testo spostato"
      }
    ],
    "useCases": [
      {
        "title": "Revisione contratti",
        "description": "Confronta versioni dei contratti per identificare cambiamenti.",
        "icon": "file-text"
      },
      {
        "title": "Revisioni documento",
        "description": "Controlla le modifiche tra versioni del documento.",
        "icon": "git-compare"
      },
      {
        "title": "Quality assurance",
        "description": "Verifica che siano stati applicati solo i cambiamenti previsti.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Quali differenze vengono rilevate?",
        "answer": "Modifiche del testo · Modifiche al carattere · Intestazioni e piè di pagina · Testo spostato"
      },
      {
        "question": "Posso confrontare documenti scansionati?",
        "answer": "Confronta il testo estratto e i nomi dei caratteri. Le immagini scansionate e le altre modifiche visive non vengono confrontate."
      },
      {
        "question": "È disponibile il confronto visivo?",
        "answer": "Visualizza le pagine affiancate, passa tra le coppie di pagine e filtra le modifiche evidenziate. Confronta il testo estratto e i nomi dei caratteri. Le immagini scansionate e le altre modifiche visive non vengono confrontate."
      }
    ]
  },
  "posterize-pdf": {
    "title": "Posterizza PDF",
    "metaDescription": "Dividi grandi pagine PDF in riquadri stampabili. Crea poster da pagine PDF.",
    "keywords": [
      "posterizza pdf",
      "suddividi pdf in riquadri",
      "stampa grande formato",
      "poster pdf"
    ],
    "description": "\n      <p>Posterizza PDF divide grandi pagine PDF in riquadri più piccoli stampabili su carta standard e assemblabili in poster. Perfetto per stampare diagrammi, mappe o illustrazioni di grande formato.</p>\n      <p>Configura dimensione della griglia e sovrapposizione per un facile assemblaggio. Lo strumento calcola automaticamente le dimensioni dei riquadri per l’output desiderato.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il PDF in grande formato oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura riquadri",
        "description": "Imposta dimensione griglia, sovrapposizione e formato carta di output."
      },
      {
        "step": 3,
        "title": "Crea e scarica",
        "description": "Clicca Crea per generare i riquadri stampabili."
      }
    ],
    "useCases": [
      {
        "title": "Stampa poster",
        "description": "Stampa grandi poster su carta standard.",
        "icon": "maximize-2"
      },
      {
        "title": "Stampa mappe",
        "description": "Stampa grandi mappe in sezioni da assemblare.",
        "icon": "map"
      },
      {
        "title": "Riproduzione artwork",
        "description": "Crea stampe di grande formato da illustrazioni PDF.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Quanta sovrapposizione usare?",
        "answer": "È consigliata una sovrapposizione di 10–20 mm per un facile allineamento in fase di assemblaggio."
      },
      {
        "question": "Posso aggiungere crocini di taglio?",
        "answer": "Sì, è possibile aggiungere crocini per facilitare taglio e allineamento."
      },
      {
        "question": "Quali formati di carta sono supportati?",
        "answer": "Sono supportati A4, Letter, A3 e formati personalizzati."
      }
    ]
  },
  "fix-page-size": {
    "title": "Uniforma dimensione pagina",
    "metaDescription": "Standardizza le dimensioni delle pagine PDF. Converte tutte le pagine a misure uniformi.",
    "keywords": [
      "uniforma dimensione pagina",
      "standardizza pdf",
      "pagine uniformi",
      "ridimensiona pagine pdf"
    ],
    "description": "\n      <p>Uniforma dimensione pagina rende tutte le pagine del tuo PDF di dimensioni uniformi. Converte documenti con pagine di misure diverse in formati coerenti per una presentazione o stampa professionale.</p>\n      <p>Scegli tra formati standard (A4, Letter, ecc.) oppure imposta dimensioni personalizzate. Il contenuto viene ridimensionato o posizionato per adattarsi alla nuova pagina.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona dimensione target",
        "description": "Scegli un formato standard o inserisci dimensioni personalizzate."
      },
      {
        "step": 3,
        "title": "Applica e scarica",
        "description": "Clicca Applica per uniformare le pagine e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Preparazione stampa",
        "description": "Standardizza le pagine per una stampa coerente.",
        "icon": "printer"
      },
      {
        "title": "Pulizia documenti",
        "description": "Correggi documenti con dimensioni di pagina incoerenti.",
        "icon": "file-check"
      },
      {
        "title": "Documenti professionali",
        "description": "Crea documenti uniformi per la distribuzione.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Come viene gestito il contenuto?",
        "answer": "Il contenuto viene ridimensionato per adattarsi o centrato sulla nuova pagina."
      },
      {
        "question": "Posso preservare le proporzioni?",
        "answer": "Sì, il contenuto può essere scalato proporzionalmente per adattarsi."
      },
      {
        "question": "Quali formati standard sono disponibili?",
        "answer": "A4, A3, Letter, Legal e altri formati comuni."
      }
    ]
  },
  "linearize-pdf": {
    "title": "Linearizza PDF",
    "metaDescription": "Ottimizza i PDF per la visualizzazione web veloce. Abilita il caricamento progressivo.",
    "keywords": [
      "linearizza pdf",
      "visualizzazione web veloce",
      "ottimizza pdf",
      "pdf progressivo"
    ],
    "description": "\n      <p>Linearizza PDF ottimizza i documenti per una visualizzazione rapida sul web. I PDF linearizzati possono iniziare a essere mostrati prima che l’intero file sia scaricato, migliorando l’esperienza utente.</p>\n      <p>Conosciuta anche come \"Visualizzazione web veloce\", questa ottimizzazione riorganizza la struttura del PDF per il caricamento progressivo nei browser.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Linearizza",
        "description": "Clicca Linearizza per ottimizzare la visualizzazione web."
      },
      {
        "step": 3,
        "title": "Scarica",
        "description": "Scarica il PDF ottimizzato."
      }
    ],
    "useCases": [
      {
        "title": "Pubblicazione web",
        "description": "Ottimizza i PDF per il download sui siti web.",
        "icon": "globe"
      },
      {
        "title": "Allegati email",
        "description": "Crea PDF che si aprono più velocemente per i destinatari.",
        "icon": "mail"
      },
      {
        "title": "Documenti online",
        "description": "Migliora l’esperienza di visualizzazione dei documenti online.",
        "icon": "cloud"
      }
    ],
    "faq": [
      {
        "question": "Cos’è la linearizzazione?",
        "answer": "La linearizzazione riorganizza i dati del PDF per il caricamento progressivo."
      },
      {
        "question": "Riduce la dimensione del file?",
        "answer": "La linearizzazione può aumentare leggermente la dimensione a causa della struttura aggiunta."
      },
      {
        "question": "È compatibile con tutti i lettori?",
        "answer": "Sì, i PDF linearizzati funzionano in tutti i lettori PDF."
      }
    ]
  },
  "page-dimensions": {
    "title": "Dimensioni pagina",
    "metaDescription": "Analizza le dimensioni delle pagine PDF. Visualizza le misure di tutte le pagine del documento.",
    "keywords": [
      "dimensione pagina pdf",
      "dimensioni pagine",
      "misure pdf",
      "dimensione documento"
    ],
    "description": "\n      <p>Dimensioni pagina analizza e mostra la misura di ogni pagina del tuo PDF. Visualizza le dimensioni in varie unità (pollici, mm, punti) e identifica pagine con formati non standard.</p>\n      <p>Utile per preparazione alla stampa, analisi del documento o per individuare incoerenze nelle dimensioni delle pagine.</p>\n      <p>Tutta l’analisi avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Visualizza dimensioni",
        "description": "Consulta le dimensioni mostrate per tutte le pagine."
      },
      {
        "step": 3,
        "title": "Esporta report",
        "description": "Esporta facoltativamente le dimensioni in JSON."
      }
    ],
    "useCases": [
      {
        "title": "Pianificazione stampa",
        "description": "Controlla le dimensioni pagina prima della stampa.",
        "icon": "printer"
      },
      {
        "title": "Analisi documenti",
        "description": "Individua pagine con dimensioni insolite.",
        "icon": "search"
      },
      {
        "title": "Controllo qualità",
        "description": "Verifica che le dimensioni soddisfino le specifiche.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Quali unità sono disponibili?",
        "answer": "Pollici, millimetri, centimetri e punti."
      },
      {
        "question": "Mostra anche l’orientamento?",
        "answer": "Sì, viene indicato se la pagina è verticale o orizzontale."
      },
      {
        "question": "Posso correggere dimensioni incoerenti?",
        "answer": "Usa lo strumento Uniforma dimensione pagina per standardizzare le misure."
      }
    ]
  },
  "remove-restrictions": {
    "title": "Rimuovi restrizioni",
    "metaDescription": "Rimuovi le restrizioni dai PDF. Sblocca permessi di stampa, copia e modifica.",
    "keywords": [
      "rimuovi restrizioni pdf",
      "sblocca pdf",
      "permessi pdf",
      "rimuovi limitazioni"
    ],
    "description": "\n      <p>Rimuovi restrizioni sblocca i PDF che hanno limitazioni di permesso che impediscono stampa, copia o modifica. Questo strumento rimuove le restrizioni protette da password proprietario preservando i contenuti.</p>\n      <p>Nota: questo strumento non può rimuovere password utente che impediscono l’apertura del documento. Usa Decrypt PDF per i file protetti da password.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF con restrizioni",
        "description": "Trascina e rilascia il PDF con restrizioni oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Rimuovi restrizioni",
        "description": "Clicca Rimuovi per sbloccare il documento."
      },
      {
        "step": 3,
        "title": "Scarica",
        "description": "Scarica il PDF senza restrizioni."
      }
    ],
    "useCases": [
      {
        "title": "Abilita stampa",
        "description": "Sblocca PDF che impediscono la stampa.",
        "icon": "printer"
      },
      {
        "title": "Abilita copia",
        "description": "Consenti selezione e copia del testo.",
        "icon": "copy"
      },
      {
        "title": "Abilita modifica",
        "description": "Rimuovi le restrizioni sulla modifica del documento.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "È legale?",
        "answer": "La rimozione di restrizioni da documenti di tua proprietà o per i quali hai diritti è generalmente legale."
      },
      {
        "question": "Può rimuovere password di apertura?",
        "answer": "No, usa Decrypt PDF per i documenti protetti da password."
      },
      {
        "question": "Il contenuto viene alterato?",
        "answer": "No, vengono rimosse solo le restrizioni; i contenuti restano invariati."
      }
    ]
  },
  "repair-pdf": {
    "title": "Ripara PDF",
    "metaDescription": "Correggi file PDF danneggiati. Recupera e ripara documenti corrotti.",
    "keywords": [
      "ripara pdf",
      "correggi pdf",
      "recupera pdf",
      "pdf danneggiato"
    ],
    "description": "\n      <p>Ripara PDF tenta di correggere file PDF corrotti o danneggiati. Lo strumento analizza la struttura del documento e la ricostruisce per recuperare il maggior contenuto possibile.</p>\n      <p>Utile per recuperare file che non si aprono, mostrano errori o hanno contenuti mancanti a causa di corruzione.</p>\n      <p>Tutte le operazioni di riparazione avvengono nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF danneggiato",
        "description": "Trascina e rilascia il PDF corrotto oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Ripara documento",
        "description": "Clicca Ripara per tentare il recupero."
      },
      {
        "step": 3,
        "title": "Scarica",
        "description": "Scarica il PDF riparato, se il recupero ha successo."
      }
    ],
    "useCases": [
      {
        "title": "Recupera file",
        "description": "Recupera PDF che non si aprono correttamente.",
        "icon": "refresh-cw"
      },
      {
        "title": "Correggi errori",
        "description": "Ripara file che mostrano messaggi di errore.",
        "icon": "wrench"
      },
      {
        "title": "Ripristina contenuti",
        "description": "Recupera contenuti da file parzialmente corrotti.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Tutti i PDF possono essere riparati?",
        "answer": "Il successo dipende dal tipo e dall’entità della corruzione."
      },
      {
        "question": "Tutto il contenuto verrà recuperato?",
        "answer": "Lo strumento recupera il più possibile; file gravemente danneggiati possono avere perdite."
      },
      {
        "question": "Devo conservare l’originale?",
        "answer": "Sì, conserva sempre il file originale come backup."
      }
    ]
  },
  "encrypt-pdf": {
    "title": "Crittografa PDF",
    "metaDescription": "Proteggi i PDF con password. Aggiungi crittografia e imposta i permessi.",
    "keywords": [
      "crittografa pdf",
      "proteggi pdf con password",
      "pdf sicuro",
      "crittografia pdf"
    ],
    "description": "\n      <p>Crittografa PDF aggiunge protezione con password e crittografia ai tuoi documenti PDF. Imposta la password utente per impedirne l’apertura e la password proprietario per controllare permessi come stampa e copia.</p>\n      <p>Scegli tra diversi livelli di crittografia (AES a 128 o 256 bit) in base alle tue esigenze di sicurezza.</p>\n      <p>Tutta la crittografia avviene nel tuo browser, garantendo che password e documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Imposta le password",
        "description": "Inserisci password utente e/o password proprietario. Configura i permessi."
      },
      {
        "step": 3,
        "title": "Crittografa e scarica",
        "description": "Clicca Crittografa per proteggere il PDF e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Documenti riservati",
        "description": "Proteggi documenti aziendali sensibili.",
        "icon": "lock"
      },
      {
        "title": "File personali",
        "description": "Metti al sicuro documenti personali come dichiarazioni dei redditi.",
        "icon": "shield"
      },
      {
        "title": "Distribuzione controllata",
        "description": "Limita ciò che i destinatari possono fare con i documenti.",
        "icon": "key"
      }
    ],
    "faq": [
      {
        "question": "Differenza tra password utente e proprietario?",
        "answer": "La password utente impedisce l’apertura; la password proprietario controlla i permessi."
      },
      {
        "question": "Che crittografia viene usata?",
        "answer": "Sono disponibili opzioni AES a 128 o 256 bit."
      },
      {
        "question": "Posso impostare permessi senza password utente?",
        "answer": "Sì, puoi impostare solo la password proprietario per controllare i permessi."
      }
    ]
  },
  "sanitize-pdf": {
    "title": "Pulisci PDF",
    "metaDescription": "Rimuovi dati nascosti dai PDF. Pulisci metadati, script e informazioni sensibili.",
    "keywords": [
      "pulisci pdf",
      "sanifica pdf",
      "rimuovi dati nascosti",
      "privacy pdf"
    ],
    "description": "\n      <p>Pulisci PDF rimuove dati nascosti e potenzialmente sensibili dai tuoi documenti. Elimina metadati, script incorporati, allegati, commenti e altri contenuti nascosti.</p>\n      <p>Essenziale per preparare documenti alla distribuzione pubblica o quando la privacy è una priorità.</p>\n      <p>Tutto avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona cosa rimuovere",
        "description": "Scegli i tipi di dati nascosti da eliminare."
      },
      {
        "step": 3,
        "title": "Pulisci e scarica",
        "description": "Clicca Pulisci per ripulire il PDF e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Pubblica online",
        "description": "Prepara documenti per distribuzione pubblica.",
        "icon": "globe"
      },
      {
        "title": "Protezione privacy",
        "description": "Rimuovi informazioni personali prima di condividere.",
        "icon": "shield"
      },
      {
        "title": "Conformità sicurezza",
        "description": "Rispetta i requisiti di sicurezza nella gestione dei documenti.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Quali dati nascosti vengono rimossi?",
        "answer": "Metadati, script, allegati, commenti, dati dei moduli e livelli nascosti."
      },
      {
        "question": "Il contenuto visibile viene modificato?",
        "answer": "No, viene rimosso solo il contenuto nascosto; il contenuto visibile resta intatto."
      },
      {
        "question": "È reversibile?",
        "answer": "No, i dati rimossi non possono essere recuperati. Conserva una copia dell’originale."
      }
    ]
  },
  "decrypt-pdf": {
    "title": "Decripta PDF",
    "metaDescription": "Rimuovi la password dai PDF. Sblocca documenti protetti da password.",
    "keywords": [
      "decripta pdf",
      "rimuovi password pdf",
      "sblocca pdf",
      "rimozione password pdf"
    ],
    "description": "\n      <p>Decripta PDF rimuove la protezione con password dai documenti PDF. Inserisci la password attuale per sbloccare il file e creare una copia non protetta.</p>\n      <p>Questo strumento richiede che tu conosca la password attuale. Non può decifrare o aggirare password sconosciute.</p>\n      <p>Tutta la decrittazione avviene nel tuo browser, garantendo che password e documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF protetto",
        "description": "Trascina e rilascia il PDF protetto da password."
      },
      {
        "step": 2,
        "title": "Inserisci la password",
        "description": "Inserisci la password attuale del documento."
      },
      {
        "step": 3,
        "title": "Decripta e scarica",
        "description": "Clicca Decripta per rimuovere la protezione e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Rimuovi vecchie password",
        "description": "Sblocca documenti quando la password non è più necessaria.",
        "icon": "unlock"
      },
      {
        "title": "Accesso semplificato",
        "description": "Crea copie non protette per una condivisione più semplice.",
        "icon": "share-2"
      },
      {
        "title": "Archivia documenti",
        "description": "Rimuovi password prima dell’archiviazione a lungo termine.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Può decifrare password sconosciute?",
        "answer": "No, devi conoscere la password attuale per decriptare."
      },
      {
        "question": "Il file originale viene modificato?",
        "answer": "No, viene creata una nuova copia non protetta."
      },
      {
        "question": "E se ho dimenticato la password?",
        "answer": "Purtroppo non possiamo recuperare password dimenticate."
      }
    ]
  },
  "flatten-pdf": {
    "title": "Appiattisci PDF",
    "metaDescription": "Appiattisci moduli e annotazioni nei PDF. Rendi il contenuto non modificabile.",
    "keywords": [
      "appiattisci pdf",
      "appiattisci moduli",
      "appiattisci annotazioni",
      "pdf non modificabile"
    ],
    "description": "\n      <p>Appiattisci PDF converte elementi interattivi come campi modulo e annotazioni in contenuto statico. Il PDF appiattito appare uguale ma non può più essere modificato.</p>\n      <p>Perfetto per finalizzare moduli compilati, preservare annotazioni o creare versioni non modificabili.</p>\n      <p>Tutto avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il PDF con moduli o annotazioni."
      },
      {
        "step": 2,
        "title": "Seleziona cosa appiattire",
        "description": "Scegli se appiattire moduli, annotazioni o entrambi."
      },
      {
        "step": 3,
        "title": "Appiattisci e scarica",
        "description": "Clicca Appiattisci per creare il PDF statico."
      }
    ],
    "useCases": [
      {
        "title": "Finalizza moduli",
        "description": "Blocca i dati dei moduli compilati per evitare modifiche.",
        "icon": "lock"
      },
      {
        "title": "Preserva annotazioni",
        "description": "Rendi permanenti le annotazioni nel documento.",
        "icon": "check-circle"
      },
      {
        "title": "Archivio documenti",
        "description": "Crea versioni non modificabili per l’archiviazione.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "L’appiattimento è reversibile?",
        "answer": "No, l’appiattimento è permanente. Conserva un backup dell’originale."
      },
      {
        "question": "Cambia l’aspetto?",
        "answer": "No, il documento appare uguale ma non è più interattivo."
      },
      {
        "question": "Riduce la dimensione del file?",
        "answer": "Talvolta sì, poiché gli elementi interattivi vengono convertiti in contenuto più semplice."
      }
    ]
  },
  "remove-metadata": {
    "title": "Rimuovi metadati",
    "metaDescription": "Elimina i metadati dai PDF. Rimuovi autore, date e proprietà del documento.",
    "keywords": [
      "rimuovi metadati pdf",
      "elimina metadati",
      "privacy pdf",
      "pdf anonimo"
    ],
    "description": "\n      <p>Rimuovi metadati elimina tutte le proprietà e i metadati dai tuoi PDF. Rimuovi nomi dell’autore, date di creazione, informazioni sul software e altri dati identificativi.</p>\n      <p>Essenziale per la privacy nella condivisione di documenti o quando i metadati potrebbero rivelare informazioni sensibili.</p>\n      <p>Tutto avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Rimuovi metadati",
        "description": "Clicca Rimuovi per eliminare tutti i metadati."
      },
      {
        "step": 3,
        "title": "Scarica",
        "description": "Scarica il PDF privo di metadati."
      }
    ],
    "useCases": [
      {
        "title": "Protezione privacy",
        "description": "Rimuovi informazioni personali prima di condividere.",
        "icon": "shield"
      },
      {
        "title": "Documenti anonimi",
        "description": "Crea documenti senza attribuzione dell’autore.",
        "icon": "user-x"
      },
      {
        "title": "Distribuzione pulita",
        "description": "Distribuisci documenti senza metadati interni.",
        "icon": "send"
      }
    ],
    "faq": [
      {
        "question": "Quali metadati vengono rimossi?",
        "answer": "Autore, titolo, oggetto, parole chiave, date, informazioni su creatore e produttore."
      },
      {
        "question": "I metadati XMP vengono rimossi?",
        "answer": "Sì, vengono eliminati sia i metadati standard che quelli XMP."
      },
      {
        "question": "Il contenuto viene modificato?",
        "answer": "No, viene rimosso solo il metadata; il contenuto del documento resta invariato."
      }
    ]
  },
  "change-permissions": {
    "title": "Modifica permessi",
    "metaDescription": "Modifica i permessi dei PDF. Controlla accesso a stampa, copia e modifica.",
    "keywords": [
      "permessi pdf",
      "modifica accesso pdf",
      "restrizioni pdf",
      "sicurezza pdf"
    ],
    "description": "\n      <p>Modifica permessi aggiorna i controlli di accesso sui tuoi PDF. Abilita o disabilita permessi di stampa, copia, modifica e annotazione.</p>\n      <p>Imposta una password proprietario per far rispettare queste restrizioni. I destinatari possono vedere il documento ma hanno azioni limitate.</p>\n      <p>Tutto avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Imposta i permessi",
        "description": "Abilita o disabilita stampa, copia, modifica e annotazioni."
      },
      {
        "step": 3,
        "title": "Applica e scarica",
        "description": "Imposta la password proprietario e scarica il PDF con restrizioni."
      }
    ],
    "useCases": [
      {
        "title": "Impedisci la copia",
        "description": "Disabilita la copia del testo per proteggere i contenuti.",
        "icon": "copy"
      },
      {
        "title": "Controlla la stampa",
        "description": "Limita o consenti la stampa del documento.",
        "icon": "printer"
      },
      {
        "title": "Limita le modifiche",
        "description": "Impedisci modifiche al documento.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Serve una password?",
        "answer": "È necessaria una password proprietario per far rispettare i permessi."
      },
      {
        "question": "Le restrizioni possono essere rimosse?",
        "answer": "Sì, con la password proprietario o usando lo strumento Rimuovi restrizioni."
      },
      {
        "question": "Tutti i lettori PDF sono compatibili?",
        "answer": "La maggior parte rispetta i permessi, ma alcuni potrebbero non applicarli."
      }
    ]
  },
  "pdf-to-docx": {
    "title": "PDF in Word",
    "metaDescription": "Converti PDF in documenti Word (DOCX) modificabili. Preserva formattazione e layout.",
    "keywords": [
      "pdf in word",
      "converti pdf in docx",
      "pdf in doc",
      "pdf modificabile"
    ],
    "description": "\n      <p>PDF in Word converte i tuoi PDF in file Microsoft Word (DOCX) modificabili. Lo strumento preserva il layout originale, la formattazione, le immagini e il flusso del testo.</p>\n      <p>Modifica facilmente i contenuti del PDF in Word senza dover riscrivere. Perfetto per contratti, report e curriculum.</p>\n      <p>Tutta la conversione avviene localmente nel tuo browser con tecnologia WebAssembly, garantendo che i documenti non lascino mai il tuo dispositivo.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Converti",
        "description": "Attendi il completamento del processo di conversione."
      },
      {
        "step": 3,
        "title": "Scarica Word",
        "description": "Scarica il file DOCX completamente modificabile."
      }
    ],
    "useCases": [
      {
        "title": "Modifica contratti",
        "description": "Converti contratti PDF in Word per modifica e revisione.",
        "icon": "file-text"
      },
      {
        "title": "Aggiorna CV",
        "description": "Aggiorna vecchi curriculum PDF convertendoli in Word.",
        "icon": "user"
      },
      {
        "title": "Riutilizzo contenuti",
        "description": "Estrai contenuti da report PDF per altri documenti.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "La formattazione è preservata?",
        "answer": "Sì, lo strumento mira a preservare layout, font e immagini il più fedelmente possibile."
      },
      {
        "question": "Posso convertire PDF scansionati?",
        "answer": "I PDF scansionati vengono convertiti come immagini in Word a meno di usare prima l’OCR."
      },
      {
        "question": "È compatibile con Word?",
        "answer": "Sì, l’output è un file .docx standard compatibile con Microsoft Word e Google Docs."
      }
    ]
  },
  "pdf-to-markdown": {
    "title": "PDF in Markdown",
    "metaDescription": "Converti PDF in formato Markdown. Estrai testo e preserva formattazione come titoli e liste.",
    "keywords": [
      "pdf in markdown",
      "converti pdf in md",
      "estrazione testo pdf",
      "convertitore markdown",
      "pdf in testo"
    ],
    "description": "\n      <p>PDF in Markdown converte i tuoi documenti PDF in file Markdown puliti e ben strutturati. Lo strumento estrae intelligentemente il testo e cerca di preservare la formattazione come titoli, liste e paragrafi.</p>\n      <p>Perfetto per convertire PDF in formati modificabili per documentazione, appunti o sistemi di gestione contenuti che supportano Markdown.</p>\n      <p>Tutta la conversione avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Imposta intervallo pagine, includi numeri di pagina e regola le interruzioni di riga."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per generare il file Markdown e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Documentazione",
        "description": "Converti manuali e guide PDF in Markdown per documentazione versionata.",
        "icon": "file-text"
      },
      {
        "title": "Presa di appunti",
        "description": "Estrai contenuti da articoli e libri PDF per il tuo sistema di note.",
        "icon": "edit-3"
      },
      {
        "title": "Migrazione contenuti",
        "description": "Migra contenuti PDF in piattaforme CMS che supportano Markdown.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "La formattazione è preservata?",
        "answer": "Lo strumento cerca di rilevare i titoli in base alla dimensione del font e liste puntate/numerate. Layout complessi possono richiedere aggiustamenti manuali."
      },
      {
        "question": "Posso convertire pagine specifiche?",
        "answer": "Sì, puoi specificare un intervallo come \"1-3, 5, 7\" per convertire solo quelle pagine."
      },
      {
        "question": "Funziona con PDF scansionati?",
        "answer": "I PDF scansionati contengono immagini, non testo. Usa prima il nostro strumento OCR per estrarre il testo, poi converti in Markdown."
      }
    ]
  },
  "deskew-pdf": {
    "title": "Raddrizza PDF",
    "metaDescription": "Raddrizza automaticamente pagine PDF scansionate o inclinate. Correggi l’inclinazione con rilevamento preciso dell’angolo.",
    "keywords": [
      "raddrizza pdf",
      "allinea pdf",
      "correggi scansione inclinata",
      "rotazione automatica pdf",
      "correggi angolo pdf"
    ],
    "description": "\n      <p>Raddrizza PDF rileva e corregge automaticamente pagine inclinate nei tuoi documenti PDF usando analisi avanzata della varianza del profilo di proiezione. È essenziale per documenti scansionati inseriti nello scanner con angolo.</p>\n      <p>Lo strumento analizza l’allineamento di testo e contenuti a diversi angoli per trovare la rotazione ottimale, quindi applica la correzione. Puoi regolare la soglia di sensibilità (1-30) e il DPI (72-300) per risultati ottimali.</p>\n      <p>Tutto avviene localmente nel tuo browser con tecnologia WebAssembly, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF scansionato",
        "description": "Trascina e rilascia il PDF scansionato oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura impostazioni",
        "description": "Regola sensibilità della soglia e DPI se necessario per rilevamento migliore."
      },
      {
        "step": 3,
        "title": "Elabora e scarica",
        "description": "Clicca Raddrizza per correggere le pagine e scaricare il PDF."
      }
    ],
    "useCases": [
      {
        "title": "Documenti scansionati",
        "description": "Correggi pagine scansionate con inclinazione dai feeder.",
        "icon": "scan"
      },
      {
        "title": "Scansioni da mobile",
        "description": "Correggi foto inclinate di documenti scattate con smartphone.",
        "icon": "smartphone"
      },
      {
        "title": "Restauro archivi",
        "description": "Raddrizza vecchi archivi scansionati per migliore leggibilità.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quanto è accurato il rilevamento dell’angolo?",
        "answer": "Lo strumento usa l’analisi del profilo di proiezione per rilevare angoli fino a ±10° con alta accuratezza. Salta automaticamente pagine con angolo inferiore a 0,3°."
      },
      {
        "question": "La qualità del testo ne risente?",
        "answer": "Per rotazioni multiple di 90° non c’è perdita di qualità. Per altri angoli, lo strumento arrotonda al grado più vicino mantenendo buona qualità."
      },
      {
        "question": "Posso raddrizzare solo alcune pagine?",
        "answer": "Analizza tutte le pagine ma corregge solo quelle con inclinazione oltre la soglia. Le pagine con minima inclinazione restano inalterate."
      },
      {
        "question": "Cos’è la soglia di sensibilità?",
        "answer": "Valori 1-10 correggono solo inclinazioni evidenti, 11-20 rilevano inclinazioni moderate, 21-30 catturano angoli sottili. Default 10 per equilibrio."
      },
      {
        "question": "Quanto dura l’elaborazione?",
        "answer": "Dipende da dimensione file e DPI. 150 DPI (default) offre buon equilibrio tra velocità e accuratezza. DPI più alti sono più accurati ma lenti."
      }
    ]
  },
  "pdf-booklet": {
    "title": "Creatore opuscoli PDF",
    "metaDescription": "Crea layout opuscolo da PDF per la stampa. Dispone le pagine per rilegatura a sella con varie griglie.",
    "keywords": [
      "opuscolo pdf",
      "creatore opuscoli",
      "stampa opuscolo",
      "punto a sella",
      "imposizione"
    ],
    "description": "\n      <p>Creatore opuscoli PDF dispone le pagine del tuo PDF in layout opuscolo pronti per stampa e piega. Perfetto per creare brochure, zine, opuscoli e pubblicazioni con rilegatura a sella.</p>\n      <p>Scegli fra varie modalità di griglia (1x2, 2x2, 2x4, 4x4), formati carta e opzioni di orientamento. Lo strumento gestisce automaticamente l’imposizione per la sequenza di piega corretta.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Carica il documento PDF che vuoi convertire in opuscolo."
      },
      {
        "step": 2,
        "title": "Scegli il layout",
        "description": "Seleziona modalità griglia, formato carta, orientamento e opzioni di rotazione."
      },
      {
        "step": 3,
        "title": "Crea e scarica",
        "description": "Genera il layout opuscolo e scarica per la stampa."
      }
    ],
    "useCases": [
      {
        "title": "Brochure",
        "description": "Crea brochure pronte alla piega da PDF standard.",
        "icon": "book-open"
      },
      {
        "title": "Zine",
        "description": "Produci zine autopubblicate con imposizione corretta.",
        "icon": "book"
      },
      {
        "title": "Programmi eventi",
        "description": "Crea opuscoli professionali per eventi.",
        "icon": "calendar"
      }
    ],
    "faq": [
      {
        "question": "Cos’è la rilegatura a sella?",
        "answer": "È una tecnica in cui i fogli piegati sono annidati e spillati lungo la piega."
      },
      {
        "question": "Quale modalità di griglia usare?",
        "answer": "1x2 è lo standard per opuscoli. Usa 2x2 o superiori per multi-up e risparmio carta."
      },
      {
        "question": "Posso vedere un’anteprima?",
        "answer": "Sì, lo strumento fornisce un’anteprima visiva prima di generare l’opuscolo."
      }
    ]
  },
  "rasterize-pdf": {
    "title": "Rasterizza PDF",
    "metaDescription": "Converti pagine PDF in immagini di alta qualità. Esporta in PNG, JPEG o WebP con DPI personalizzato.",
    "keywords": [
      "rasterizza pdf",
      "pdf in immagine",
      "pdf in png",
      "pdf in jpeg",
      "converti pagine pdf"
    ],
    "description": "\n      <p>Rasterizza PDF converte le pagine del tuo PDF in immagini raster di alta qualità. Scegli tra formati di output PNG, JPEG o WebP con pieno controllo su DPI e qualità.</p>\n      <p>Perfetto per creare miniature, grafiche social o archiviare contenuti PDF come immagini. Supporta selezione dell’intervallo pagine e elaborazione in batch.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura output",
        "description": "Seleziona DPI, formato (PNG/JPEG/WebP), qualità e intervallo pagine."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Elabora le pagine e scarica le immagini singolarmente o come archivio ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Social media",
        "description": "Converti slide PDF in immagini per la pubblicazione sui social.",
        "icon": "share-2"
      },
      {
        "title": "Miniature",
        "description": "Genera anteprime in miniatura per documenti PDF.",
        "icon": "image"
      },
      {
        "title": "Pubblicazione web",
        "description": "Converti contenuti PDF in formati immagine adatti al web.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Quale DPI usare?",
        "answer": "72 DPI per schermo, 150 DPI per uso generale, 300 DPI per qualità di stampa."
      },
      {
        "question": "Quale formato è migliore?",
        "answer": "PNG per qualità/trasparenza, JPEG per dimensioni ridotte, WebP per uso web moderno."
      },
      {
        "question": "Posso convertire pagine specifiche?",
        "answer": "Sì, specifica intervalli come \"1-5, 8, 10-15\" per convertire solo quelle pagine."
      }
    ]
  },
  "markdown-to-pdf": {
    "title": "Markdown in PDF",
    "metaDescription": "Converti file Markdown in PDF ben formattati. Supporta GFM e evidenziazione della sintassi.",
    "keywords": [
      "markdown in pdf",
      "md in pdf",
      "converti markdown",
      "gfm in pdf",
      "convertitore markdown"
    ],
    "description": "\n      <p>Markdown in PDF converte i tuoi file Markdown in documenti PDF con stile professionale. Supporta CommonMark e GitHub Flavored Markdown (GFM), inclusi tabelle, liste di attività e blocchi di codice.</p>\n      <p>Scegli tra più temi (chiaro, scuro, GitHub) e personalizza dimensione e margini pagina. I blocchi di codice sono evidenziati per migliorare la leggibilità.</p>\n      <p>Tutta la conversione avviene localmente nel tuo browser, garantendo che i contenuti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file Markdown",
        "description": "Carica il tuo file .md o .markdown."
      },
      {
        "step": 2,
        "title": "Scegli il tema",
        "description": "Seleziona un tema visivo e configura le impostazioni della pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Genera il PDF stilizzato e scarica."
      }
    ],
    "useCases": [
      {
        "title": "Documentazione",
        "description": "Converti README e documenti in PDF condivisibili.",
        "icon": "file-text"
      },
      {
        "title": "Esporta note",
        "description": "Esporta note Markdown in PDF per stampa o condivisione.",
        "icon": "edit-3"
      },
      {
        "title": "Report",
        "description": "Crea report da Markdown con stile professionale.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "GFM è supportato?",
        "answer": "Sì, sono supportati tabelle, liste di attività, barrati e altre funzionalità GFM."
      },
      {
        "question": "Posso personalizzare lo stile?",
        "answer": "Scegli tra temi preimpostati o aggiungi CSS personalizzato per controllo totale."
      },
      {
        "question": "I blocchi di codice sono evidenziati?",
        "answer": "Sì, i blocchi includono evidenziazione della sintassi per i linguaggi comuni."
      }
    ]
  },
  "email-to-pdf": {
    "title": "Email in PDF",
    "metaDescription": "Converti file email (.eml, .msg) in documenti PDF. Preserva formattazione, immagini inline, link cliccabili e incorpora allegati.",
    "keywords": [
      "email in pdf",
      "eml in pdf",
      "msg in pdf",
      "converti email",
      "convertitore email",
      "salva email come pdf",
      "outlook in pdf"
    ],
    "description": "\n      <p>Email in PDF converte i tuoi file email (.eml e .msg) in documenti PDF ben formattati. Lo strumento preserva intestazioni, corpo del messaggio, immagini inline con sostituzione CID, link cliccabili e incorpora gli allegati direttamente nel PDF.</p>\n      <p>Personalizza le opzioni di output tra dimensione pagina (A4, Letter, Legal), formato data con supporto fuso orario e inclusione dei campi CC/BCC e informazioni sugli allegati.</p>\n      <p>Tutta la conversione avviene localmente nel tuo browser, garantendo che le email restino private e sicure.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file email",
        "description": "Carica il tuo file .eml o .msg."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Imposta dimensione pagina, formato data, fuso orario e scegli i campi da includere."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Converti in PDF con allegati incorporati e scarica il risultato."
      }
    ],
    "useCases": [
      {
        "title": "Archivi legali",
        "description": "Archivia email importanti come PDF con allegati incorporati per documentazione legale.",
        "icon": "scale"
      },
      {
        "title": "Archivi aziendali",
        "description": "Converti corrispondenza aziendale in PDF per conservazione a lungo termine.",
        "icon": "briefcase"
      },
      {
        "title": "Conservazione prove",
        "description": "Salva prove email con immagini inline e allegati in formato PDF non modificabile.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Quali formati email sono supportati?",
        "answer": "Sono pienamente supportati i file .eml (RFC 822) e .msg (Microsoft Outlook)."
      },
      {
        "question": "Gli allegati sono inclusi?",
        "answer": "Sì! Gli allegati sono incorporati direttamente nel PDF. Puoi estrarli con un lettore PDF compatibile."
      },
      {
        "question": "Le immagini inline vengono visualizzate?",
        "answer": "Sì, le immagini riferite via CID vengono convertite in data URI base64 e visualizzate nel PDF."
      },
      {
        "question": "I link sono cliccabili?",
        "answer": "Sì, tutti i link HTML (tag a) e gli URL in email testuali diventano link cliccabili nel PDF."
      },
      {
        "question": "La formattazione dell’email è preservata?",
        "answer": "Sì, le email HTML mantengono la formattazione il più fedelmente possibile, inclusi stili, immagini e link."
      }
    ]
  },
  "cbz-to-pdf": {
    "title": "CBZ in PDF",
    "metaDescription": "Converti archivi di fumetti (CBZ) in PDF. Preserva ordine e qualità delle immagini per fumetti digitali.",
    "keywords": [
      "cbz in pdf",
      "fumetti in pdf",
      "converti cbz",
      "convertitore fumetti",
      "convertitore cbz"
    ],
    "description": "\n      <p>CBZ in PDF converte gli archivi di fumetti (Comic Book Archive) in documenti PDF. Lo strumento estrae tutte le immagini dall’archivio CBZ e le compila in un PDF mantenendo l’ordine di lettura corretto.</p>\n      <p>Scegli tra opzioni di dimensione pagina, inclusa la dimensione originale dell’immagine o formati standard dei fumetti. Perfetto per leggere fumetti su dispositivi che supportano PDF ma non CBZ.</p>\n      <p>Tutta la conversione avviene localmente nel tuo browser, garantendo che i fumetti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file CBZ",
        "description": "Carica il tuo archivio fumetti .cbz."
      },
      {
        "step": 2,
        "title": "Seleziona opzioni",
        "description": "Scegli dimensione pagina e impostazioni di qualità immagine."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Converti in PDF e scarica il fumetto."
      }
    ],
    "useCases": [
      {
        "title": "Compatibilità e-reader",
        "description": "Converti CBZ in PDF per e-reader che supportano solo PDF.",
        "icon": "book"
      },
      {
        "title": "Archivi fumetti",
        "description": "Crea archivi PDF della tua collezione di fumetti digitali.",
        "icon": "archive"
      },
      {
        "title": "Preparazione stampa",
        "description": "Converti fumetti digitali in PDF per la stampa.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Cos’è il formato CBZ?",
        "answer": "CBZ è un archivio ZIP contenente pagine del fumetto come file immagine, con estensione .cbz."
      },
      {
        "question": "La qualità delle immagini è preservata?",
        "answer": "Sì, le immagini sono incorporate alla qualità originale nel PDF."
      },
      {
        "question": "Sono supportate cartelle annidate?",
        "answer": "Sì, le immagini di tutte le cartelle nell’archivio vengono estratte e ordinate."
      }
    ]
  },
  "pdf-to-pdfa": {
    "title": "PDF in PDF/A",
    "metaDescription": "Converti PDF in formato d’archivio PDF/A. Garantisci conservazione a lungo termine conforme agli standard ISO.",
    "keywords": [
      "pdf in pdfa",
      "convertitore pdfa",
      "archivia pdf",
      "archivio pdf",
      "conservazione lungo termine"
    ],
    "description": "\n      <p>PDF in PDF/A converte i tuoi documenti PDF in formato PDF/A, lo standard ISO per l’archiviazione a lungo termine. PDF/A garantisce che i documenti saranno visualizzabili e riproducibili per decenni.</p>\n      <p>Scegli tra PDF/A-1b (conformità base), PDF/A-2b (raccomandato, supporta trasparenze) o PDF/A-3b (consente file incorporati). Lo strumento incorpora i font e appiattisce le trasparenze quando necessario.</p>\n      <p>Tutta la conversione avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Carica il PDF che vuoi convertire in PDF/A."
      },
      {
        "step": 2,
        "title": "Seleziona livello PDF/A",
        "description": "Scegli conformità PDF/A-1b, PDF/A-2b o PDF/A-3b."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Converti in PDF/A e scarica il documento d’archivio."
      }
    ],
    "useCases": [
      {
        "title": "Archivi legali",
        "description": "Converti documenti legali in PDF/A per archiviazione ammissibile in tribunale.",
        "icon": "scale"
      },
      {
        "title": "Registri governativi",
        "description": "Rispetta i requisiti di archiviazione amministrativa con PDF/A.",
        "icon": "building"
      },
      {
        "title": "Archivi aziendali",
        "description": "Preserva documenti aziendali importanti per accessibilità futura.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quale livello PDF/A usare?",
        "answer": "PDF/A-2b è consigliato nella maggior parte dei casi. Usa 1b per massima compatibilità o 3b se servono file incorporati."
      },
      {
        "question": "Cosa distingue PDF/A?",
        "answer": "PDF/A incorpora i font, disabilita la crittografia e rende tutti gli elementi auto-consistenti per la visione futura."
      },
      {
        "question": "Posso tornare indietro da PDF/A?",
        "answer": "I PDF/A sono PDF standard e si aprono normalmente. Le caratteristiche d’archivio aggiungono restrizioni, non limitazioni."
      }
    ]
  },
  "font-to-outline": {
    "title": "Font in tracciati",
    "metaDescription": "Rimuovi dipendenze dai font convertendo le pagine in immagini di alta qualità. Garantisce compatibilità su tutti i sistemi.",
    "keywords": [
      "font in tracciati",
      "converti font in contorni",
      "rimuovi font",
      "compatibilità font",
      "appiattisci font pdf",
      "rimozione font pdf"
    ],
    "description": "\n      <p>Font in tracciati rimuove tutte le dipendenze dai font nel tuo PDF convertendo ogni pagina in contenuto raster ad alta qualità. Garantisce che il documento appaia identico su qualsiasi sistema, anche senza i font originali installati.</p>\n      <p>Lo strumento renderizza ogni pagina al DPI scelto (150–600), rimuovendo i font incorporati e preservando l’aspetto visivo esatto. Facoltativamente, puoi aggiungere un livello di testo invisibile per mantenere la ricercabilità.</p>\n      <p>È essenziale per preparazione alla stampa, compatibilità multipiattaforma e per evitare problemi di licenza dei font nella condivisione. Tutto avviene localmente nel tuo browser.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Carica il PDF che contiene i font da rimuovere."
      },
      {
        "step": 2,
        "title": "Configura qualità",
        "description": "Scegli il DPI (300 raccomandato per stampa, 150 per schermo). Abilita testo ricercabile se necessario."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Elabora il file e scarica il PDF indipendente dai font."
      }
    ],
    "useCases": [
      {
        "title": "Preparazione stampa",
        "description": "Elimina problemi di font in tipografia rimuovendo tutte le dipendenze.",
        "icon": "printer"
      },
      {
        "title": "Condivisione multipiattaforma",
        "description": "Condividi documenti identici su qualsiasi dispositivo, indipendentemente dai font installati.",
        "icon": "share-2"
      },
      {
        "title": "Licenze font",
        "description": "Rimuovi font incorporati per evitare questioni di licenza nella distribuzione.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Come funziona?",
        "answer": "Lo strumento renderizza ogni pagina ad alta risoluzione (DPI scelto) e ricrea il PDF da queste immagini, rimuovendo le dipendenze dai font preservando l’aspetto."
      },
      {
        "question": "Posso ancora selezionare il testo?",
        "answer": "Di default no: il testo diventa parte dell’immagine. Puoi però abilitare \"Mantieni testo ricercabile\" per aggiungere un livello di testo invisibile."
      },
      {
        "question": "Quale DPI usare?",
        "answer": "300 DPI è consigliato per stampa; 150 DPI basta per schermo e produce file più piccoli; 600 DPI massima qualità ma file grandi."
      },
      {
        "question": "La dimensione del file aumenta?",
        "answer": "Dipende da DPI e contenuto: 150 DPI spesso riduce la dimensione, 300 può aumentarla, 600 la aumenta molto. Viene applicata compressione automaticamente."
      },
      {
        "question": "È reversibile?",
        "answer": "No, i dati dei font vengono rimossi in modo permanente. Conserva l’originale se ti serve testo modificabile con i font originali."
      },
      {
        "question": "E le grafiche vettoriali?",
        "answer": "Le grafiche vettoriali (forme, linee) nel PDF originale saranno convertite in raster insieme al testo. La qualità visiva è preservata al DPI scelto."
      }
    ]
  },
  "extract-tables": {
    "title": "Estrai tabelle dal PDF",
    "metaDescription": "Rileva ed estrai tabelle dai PDF. Esporta in JSON, Markdown o CSV.",
    "keywords": [
      "estrai tabelle",
      "estrazione tabelle pdf",
      "pdf in csv",
      "pdf in excel",
      "rilevamento tabelle"
    ],
    "description": "\n      <p>Estrai tabelle dal PDF rileva dati tabellari nei tuoi documenti PDF e li esporta in formati strutturati. Scegli JSON per integrazione dati, Markdown per documentazione o CSV per fogli di calcolo.</p>\n      <p>Lo strumento usa algoritmi di rilevamento intelligenti per identificare strutture di tabelle anche in documenti complessi. Specifica intervalli di pagine e regola parametri di rilevamento per risultati ottimali.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Carica il PDF contenente le tabelle da estrarre."
      },
      {
        "step": 2,
        "title": "Configura rilevamento",
        "description": "Imposta intervallo pagine e soglie minime di colonne/righe."
      },
      {
        "step": 3,
        "title": "Esporta e scarica",
        "description": "Scegli il formato (JSON/Markdown/CSV) e scarica."
      }
    ],
    "useCases": [
      {
        "title": "Analisi dati",
        "description": "Estrai dati tabellari per analisi in fogli o database.",
        "icon": "bar-chart"
      },
      {
        "title": "Elaborazione report",
        "description": "Recupera tabelle da report PDF per ulteriore elaborazione.",
        "icon": "file-text"
      },
      {
        "title": "Documentazione",
        "description": "Converti tabelle PDF in Markdown per documentazione tecnica.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Rileva tabelle complesse?",
        "answer": "Funziona al meglio con tabelle a griglia semplice. Celle unite complesse possono richiedere aggiustamenti manuali."
      },
      {
        "question": "E se non trova tabelle?",
        "answer": "Prova ad aumentare le soglie minime di colonne/righe o verifica che nel PDF ci siano vere strutture tabellari."
      },
      {
        "question": "Posso estrarre da pagine specifiche?",
        "answer": "Sì, specifica un intervallo di pagine per limitare l’estrazione."
      }
    ]
  },
  "ocg-manager": {
    "title": "Gestore livelli PDF (OCG)",
    "metaDescription": "Gestisci i livelli PDF (Optional Content Groups). Visualizza, attiva/disattiva, aggiungi, elimina e rinomina i livelli nei tuoi PDF.",
    "keywords": [
      "livelli pdf",
      "gestore ocg",
      "gruppi di contenuti opzionali",
      "visibilità livelli pdf",
      "gestisci livelli pdf"
    ],
    "description": "\n      <p>Gestore livelli PDF ti consente di visualizzare e gestire gli Optional Content Groups (OCG) nei tuoi documenti PDF. I livelli OCG sono usati in disegni tecnici, mappe e documenti complessi per organizzare contenuti in livelli attivabili/disattivabili.</p>\n      <p>Visualizza tutti i livelli nel PDF, alterna la visibilità, aggiungi nuovi livelli, elimina quelli indesiderati o rinomina quelli esistenti. Strumento essenziale per PDF a livelli come planimetrie, esportazioni CAD e documenti pronti per la stampa.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Carica un PDF che contiene livelli (OCG) o uno a cui vuoi aggiungere livelli."
      },
      {
        "step": 2,
        "title": "Visualizza livelli",
        "description": "Lo strumento elenca automaticamente tutti i livelli trovati nel documento con stato di visibilità."
      },
      {
        "step": 3,
        "title": "Gestisci livelli",
        "description": "Alterna visibilità, rinomina livelli, aggiungine di nuovi o elimina quelli indesiderati."
      },
      {
        "step": 4,
        "title": "Salva e scarica",
        "description": "Scarica il PDF modificato con i cambiamenti ai livelli applicati."
      }
    ],
    "useCases": [
      {
        "title": "Disegni tecnici",
        "description": "Gestisci livelli nelle esportazioni CAD per mostrare/nascondere quote, annotazioni o viste.",
        "icon": "ruler"
      },
      {
        "title": "Modifica mappe",
        "description": "Alterna livelli come topografia, strade ed etichette per stampe personalizzate.",
        "icon": "map"
      },
      {
        "title": "Preparazione stampa",
        "description": "Prepara PDF a livelli per la stampa attivando i livelli appropriati per le diverse versioni.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Cosa sono i livelli PDF (OCG)?",
        "answer": "Gli Optional Content Groups sono livelli in un PDF che possono essere mostrati o nascosti. Usati comunemente in disegni CAD, mappe e documenti complessi."
      },
      {
        "question": "Perché il mio PDF non mostra livelli?",
        "answer": "Non tutti i PDF contengono livelli. Di solito vengono aggiunti durante la creazione da software di design o CAD."
      },
      {
        "question": "Le modifiche ai livelli influiscono sul contenuto?",
        "answer": "Le modifiche alla visibilità influiscono solo su ciò che viene mostrato o stampato. Il contenuto resta nel documento."
      }
    ]
  },
  "pdf-reader": {
    "title": "Lettore PDF",
    "metaDescription": "Lettore PDF online gratuito. Visualizza, naviga, zooma, ruota e stampa documenti PDF direttamente nel browser.",
    "keywords": [
      "lettore pdf",
      "visualizzatore pdf",
      "visualizza pdf online",
      "leggi pdf",
      "viewer pdf browser"
    ],
    "description": "\n      <p>Lettore PDF è un visualizzatore completo che ti consente di leggere e navigare documenti PDF direttamente nel browser. Nessuna installazione richiesta: carica il PDF e inizia a leggere.</p>\n      <p>Passa tra le pagine, esegui zoom in/out, ruota la vista e usa la modalità a schermo intero per una lettura senza distrazioni. Puoi anche stampare o scaricare i documenti per l’accesso offline.</p>\n      <p>Tutta la visualizzazione avviene localmente nel tuo browser. I tuoi documenti non vengono mai caricati su alcun server, garantendo massima privacy.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Apri il PDF",
        "description": "Clicca per caricare o trascina e rilascia un file PDF per aprirlo nel lettore."
      },
      {
        "step": 2,
        "title": "Naviga tra le pagine",
        "description": "Usa i controlli per andare alla pagina precedente/successiva o salta a un numero di pagina specifico."
      },
      {
        "step": 3,
        "title": "Regola la vista",
        "description": "Zoom in/out, ruota la vista o entra in modalità a schermo intero per una lettura confortevole."
      },
      {
        "step": 4,
        "title": "Stampa o scarica",
        "description": "Stampa il documento o scaricalo per l’accesso offline quando necessario."
      }
    ],
    "useCases": [
      {
        "title": "Revisione documenti",
        "description": "Rivedi rapidamente PDF senza installare software.",
        "icon": "book-open"
      },
      {
        "title": "Lettura mobile",
        "description": "Leggi PDF su qualsiasi dispositivo con un browser web.",
        "icon": "smartphone"
      },
      {
        "title": "Anteprima rapida",
        "description": "Visualizza PDF prima di decidere se scaricare o stampare.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Il mio documento è al sicuro?",
        "answer": "Sì, il documento è elaborato interamente nel tuo browser e non viene caricato su alcun server."
      },
      {
        "question": "Posso annotare o modificare il PDF?",
        "answer": "Questo strumento serve solo per la visualizzazione. Usa i nostri strumenti Firma PDF o Annotazione PDF per modifiche."
      },
      {
        "question": "Funziona su dispositivi mobili?",
        "answer": "Sì, il Lettore PDF funziona su tutti i dispositivi con browser moderno."
      }
    ]
  },
  "digital-sign-pdf": {
    "title": "Firma Digitale",
    "metaDescription": "Firma digitalmente i documenti PDF con certificati PFX, P12 o PEM. Aggiungi firme basate su certificato localmente nel tuo browser.",
    "keywords": [
      "firma digitale pdf",
      "certificato x509",
      "firma pfx",
      "firma p12",
      "firma pem",
      "firma elettronica"
    ],
    "description": "<p>Lo strumento Firma Digitale ti permette di aggiungere firme digitali X.509 crittografiche ai documenti PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF",
        "description": "Carica il documento PDF che vuoi firmare digitalmente."
      },
      {
        "step": 2,
        "title": "Carica Certificato",
        "description": "Carica il tuo file certificato X.509 (.pfx, .p12 o .pem) e inserisci la password."
      },
      {
        "step": 3,
        "title": "Firma e Scarica",
        "description": "Clicca su Firma PDF per applicare la firma digitale e scarica il documento firmato."
      }
    ],
    "useCases": [
      {
        "title": "Documenti Legali",
        "description": "Firma contratti e documenti legali con firme digitali legalmente vincolanti.",
        "icon": "scale"
      },
      {
        "title": "Approvazioni Aziendali",
        "description": "Firma digitalmente fatture e documenti di approvazione per tracce di audit.",
        "icon": "briefcase"
      },
      {
        "title": "Integrità del Documento",
        "description": "Assicurati che i documenti non siano stati alterati dopo la firma.",
        "icon": "shield-check"
      }
    ],
    "faq": [
      {
        "question": "Quali formati di certificato sono supportati?",
        "answer": "Sono supportati i formati di certificato PFX (.pfx), PKCS#12 (.p12) e PEM (.pem)."
      },
      {
        "question": "La firma è legalmente valida?",
        "answer": "Sì, le firme digitali X.509 con un certificato valido sono legalmente riconosciute nella maggior parte delle giurisdizioni."
      },
      {
        "question": "Posso aggiungere una firma visibile?",
        "answer": "Sì, puoi aggiungere una firma visibile con testo, immagine, posizione e stile personalizzati."
      }
    ]
  },
  "validate-signature": {
    "title": "Valida Firma",
    "metaDescription": "Verifica le firme digitali nei documenti PDF. Controlla la validità del certificato, le informazioni del firmatario e l'integrità del documento.",
    "keywords": [
      "valida firma pdf",
      "verifica firma digitale",
      "controlla certificato pdf",
      "verifica firma"
    ],
    "description": "<p>Lo strumento Valida Firma ti permette di verificare le firme digitali nei documenti PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF Firmato",
        "description": "Carica un documento PDF che contiene firme digitali."
      },
      {
        "step": 2,
        "title": "Visualizza Risultati",
        "description": "Vedi tutte le firme trovate nel documento con il loro stato di validità."
      },
      {
        "step": 3,
        "title": "Esporta Report",
        "description": "Opzionalmente scarica un report JSON dei risultati di validazione."
      }
    ],
    "useCases": [
      {
        "title": "Verifica Documenti",
        "description": "Verifica che i documenti firmati siano autentici e non siano stati alterati.",
        "icon": "shield-check"
      },
      {
        "title": "Audit di Conformità",
        "description": "Controlla la validità delle firme per scopi di conformità e audit.",
        "icon": "clipboard-check"
      },
      {
        "title": "Revisione Certificati",
        "description": "Visualizza i dettagli del certificato e le date di scadenza dei documenti firmati.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "Cosa significa \"valido\"?",
        "answer": "Una firma valida significa che il documento non è stato modificato dalla firma e la catena di certificati è intatta."
      },
      {
        "question": "Posso validare più PDF?",
        "answer": "Sì, puoi caricare più PDF e validare tutte le firme in batch."
      },
      {
        "question": "Perché una firma potrebbe essere invalida?",
        "answer": "Le firme possono essere invalide se il documento è stato modificato, il certificato è scaduto o il certificato non è attendibile."
      }
    ]
  },
  "form-logic-designer": {
    "title": "Logica Moduli",
    "metaDescription": "Crea regole per moduli PDF con un designer visivo. Collega i campi e aggiungi calcoli interattivi e logica di convalida.",
    "keywords": [
      "logica modulo PDF",
      "iniezione AcroJS",
      "flusso nodi",
      "PDF interattivo",
      "dipendenze campi"
    ],
    "description": "\n        <p>Il Progettista Logico di Moduli Interattivi è uno strumento pionieristico che colma una grande lacuna nelle funzionalità PDF: la creazione di campi attivi e reattivi invece di moduli piatti e statici.</p>\n        <p>Attraverso la nostra tela visiva con \"nodi in stile glassmorphic luminosi\" (basata su React Flow), i campi del modulo sono rappresentati come moduli collegati. È possibile trascinare i collegamenti per definire le relazioni: ad es., quando una casella di controllo viene selezionata ➜ abilitare un inserimento di testo ➜ calcolare automaticamente i valori e aggiornare un campo totale.</p>\n        <p>Una volta progettato, il motore AcroJS compila la logica in Acrobat JavaScript ufficiale e la inietta nei dizionari '/AA' (Azioni Aggiuntive) dell'AcroForm. I comportamenti interattivi vengono eseguiti nativamente in qualsiasi lettore PDF standard.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF Interattivo",
        "description": "Fornisci un file PDF che contiene già campi modulo attivi (AcroForm)."
      },
      {
        "step": 2,
        "title": "Progetta la Logica sulla Tela",
        "description": "Collega i campi come nodi. Collega gli eventi di output (modifica, perdita di focus) alle azioni di destinazione (mostra, nascondi, calcola, disabilita)."
      },
      {
        "step": 3,
        "title": "Compila e Inietta",
        "description": "Inietta la logica JavaScript compilata nel dizionario PDF e salva il documento intelligente finale."
      }
    ],
    "useCases": [
      {
        "title": "Contratti Commerciali Intelligenti",
        "description": "Mostra o nascondi campi di inserimento supplementari in modo dinamico in base alle condizioni selezionate dal cliente.",
        "icon": "file-signature"
      },
      {
        "title": "Moduli Spese Automatizzati",
        "description": "Somma più righe di spesa e calcola le tasse in modo dinamico senza calcoli manuali.",
        "icon": "calculator"
      },
      {
        "title": "Questionari Interattivi",
        "description": "Salta domande irrilevanti in base alle risposte precedenti, offrendo un'esperienza di compilazione mobile più pulita.",
        "icon": "form-input"
      }
    ],
    "faq": [
      {
        "question": "Ho bisogno di un PDF con campi preesistenti?",
        "answer": "Sì. Questo strumento è progettato per associare regole logiche ai campi esistenti. Se il tuo PDF non ha campi interattivi, usa prima il nostro strumento Creatore di Moduli per aggiungere inserimenti e caselle di controllo."
      },
      {
        "question": "Questa logica funzionerà su qualsiasi lettore PDF?",
        "answer": "Funziona su tutti i lettori PDF conformi agli standard Adobe e che supportano Acrobat JavaScript (come Adobe Acrobat Reader, Foxit Reader e i principali browser web). I lettori mobili minimalisti potrebbero supportare solo azioni di base."
      },
      {
        "question": "Questo influisce sulla stampa su carta?",
        "answer": "Per niente. Gli script iniettati vengono eseguiti solo sullo schermo durante la compilazione del modulo. Al momento della stampa, lo stato attuale dei campi viene stampato in modo statico senza alcuna visualizzazione dei nodi."
      }
    ]
  },
  "global-invoice-parser": {
    "title": "Convertitore importo fattura PDF",
    "metaDescription": "Estrai gli importi delle fatture dai PDF, converti i totali tra le valute e aggiungi un riepilogo dei calcoli al documento.",
    "keywords": [
      "tradurre fattura",
      "convertitore valuta fattura",
      "calcolatrice tasso di cambio pdf",
      "timbro valuta locale",
      "strumento fattura globale"
    ],
    "description": "\n        <p>Il Traduttore di Fatture Globali offre la massima chiarezza per i team finanziari internazionali e gli acquirenti globali.</p>\n        <p>La gestione di fatture in più valute ($, €, ¥) comporta spesso una noiosa aritmetica manuale. Questo strumento consente la <strong>traduzione delle etichette sul posto e la conversione dei tassi di cambio in tempo real</strong>.</p>\n        <p>Scansiona il documento alla ricerca dei totali dei prezzi, esegue calcoli basati su valute di riferimento e applica fisicamente un elegante registro del tasso di cambio in stile glassmorphic semitrasparente nel margine della pagina. Viene visualizzato con uno splendido effetto visivo di cifre rotanti stile slot-machine, portando il controllo assoluto sulla fatturazione globale.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica la Fattura PDF",
        "description": "Importa qualsiasi fattura emessa in valuta estera (ad esempio, USD, EUR, JPY)."
      },
      {
        "step": 2,
        "title": "Seleziona Valuta Locale",
        "description": "Scegli la tua valuta locale (ad esempio, EUR) e specifica un tasso di cambio personalizzato o in tempo reale."
      },
      {
        "step": 3,
        "title": "Applica il Timbro",
        "description": "Fare clic su Esegui per sovrapporre il registro del tasso di cambio pronto per la contabilità."
      }
    ],
    "useCases": [
      {
        "title": "Rimborso di Trasferte di Lavoro",
        "description": "Converti le fatture di viaggio nella valuta locale e applica il timbro con i dettagli di conversione, semplificando i flussi di lavoro contabili.",
        "icon": "plane"
      },
      {
        "title": "Verifica di Acquisti Transfrontalieri",
        "description": "Traduci le colonne delle fatture e individua il costo effettivo dei beni acquistati via e-commerce.",
        "icon": "credit-card"
      },
      {
        "title": "Contabilità Commerciale Internazionale",
        "description": "Applica timbri di conversione coerenti sulle fatture aziendali per ottimizzare gli audit di fine anno.",
        "icon": "folder-open"
      }
    ],
    "faq": [
      {
        "question": "Come rileva gli importi delle fatture?",
        "answer": "Scansiona il flusso di caratteri alla ricerca di simboli di valuta e analizza le intestazioni semantiche come \"Totale\" o \"Dovuto\" per individuare la somma finale della fattura."
      },
      {
        "question": "I tassi di cambio vengono recuperati in tempo reale?",
        "answer": "Sì. Per impostazione predefinita, recupera i tassi di base da API finanziarie standard. È anche possibile specificare tassi personalizzati per audit interni."
      },
      {
        "question": "Il timbro coprirà dettagli importanti della fattura?",
        "answer": "Il motore scansiona il margine della pagina per trovare il posizionamento ottimale. Il timbro è semitransparente, allineandosi in modo elegante con i tuoi layout."
      }
    ]
  },
  "pdf-to-cbz": {
    "title": "PDF in CBZ",
    "metaDescription": "Converti file PDF in archivi di fumetti CBZ. Mantiene l'ordine e la qualità delle immagini.",
    "keywords": [
      "pdf in cbz",
      "convertitore fumetti",
      "cbz pdf"
    ],
    "description": "<p>PDF in CBZ è progettato su misura per gli appassionati di fumetti e gli archivisti di ebook digitali. Trasforma ogni pagina dei tuoi volumi PDF in grafica rasterizzata ad alta fedeltà e la compila in un pacchetto standard Comic Book ZIP (.cbz).</p>\n      <p>Per eliminare il frustrante scraping manuale in sistemi come Calibre, Komga, Kavita o CDisplayEx, il processore genera e inserisce automaticamente sia i file <strong>ComicInfo.xml</strong> che <strong>metadata.opf</strong> internamente, scrivendo contemporaneamente un payload <strong>ComicBookInfo JSON</strong> standardizzato direttamente nei metadati dei commenti del file ZIP.</p>\n      <p>Include cursori di configurazione completi per la qualità di compressione delle immagini, la scala delle dimensioni della pagina, i pulsanti di lettura del layout da destra a sinistra (modalità Manga) e il filtraggio dei colori in scala di grigi in bianco e nero.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF fumetto",
        "description": "Trascina e rilascia il file PDF principale del tuo fumetto, artbook o manga."
      },
      {
        "step": 2,
        "title": "Inserisci metadati dei fumetti",
        "description": "Compila i campi Serie, Volume, Titolo, Autore ed Editore e attiva il layout o l'ottimizzazione della scala di grigi."
      },
      {
        "step": 3,
        "title": "Compila e scarica",
        "description": "Fai clic su Converti per compilare e recuperare il tuo file .cbz ricco di metadati immediatamente pronto per Calibre."
      }
    ],
    "useCases": [
      {
        "title": "Confezione comica retrograda",
        "description": "Trasforma i libri PDF scansionati grezzi in file di fumetti CBZ compatti e conformi agli standard facilmente recuperabili dai gestori delle librerie di fumetti.",
        "icon": "book"
      },
      {
        "title": "Integrazione del calibro a sforzo zero",
        "description": "Lo schema metadata.opf integrato consente a Calibre di recuperare e classificare creatori e problemi di volume senza ricerca manuale.",
        "icon": "database"
      },
      {
        "title": "Miglioramento dello schermo E-Ink",
        "description": "Pre-filtra i canali di colore grafico in scala di grigi ad alto contrasto durante la compilazione, aumentando l'aggiornamento visivo e la chiarezza sugli schermi E-ink risparmiando spazio di archiviazione.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Cos'è un file .cbz?",
        "answer": "Un file CBZ è un formato contenitore di archivio specializzato per serie di fumetti. È formattato internamente come un pacchetto ZIP contenente immagini di pagine numerate in sequenza insieme a file XML di metadati strutturali."
      },
      {
        "question": "Come sono compatibili i metadati?",
        "answer": "Compiliamo e incorporiamo ComicInfo.xml, metadata.opf e commenti su file ZIP in un unico passaggio. Ciò garantisce la conformità assoluta tra più ecosistemi di fumetti ed e-book."
      },
      {
        "question": "Perché utilizzare la modalità Scala di grigi?",
        "answer": "Se leggi su un lettore E-ink in scala di grigi (come Kindle o Kobo), la compilazione direttamente in scala di grigi riduce l'effetto ghosting degli artefatti, offre livelli di contrasto superiori e riduce la dimensione finale del file CBZ."
      }
    ]
  },
  "overlay-pdf": {
    "title": "Sovrapponi PDF",
    "metaDescription": "Sovrapponi due pagine PDF in una sola. Ideale per timbri, sfondi e filigrane.",
    "keywords": [
      "sovrapponi pdf",
      "pdf overlay",
      "timbro pdf"
    ],
    "description": "<p>Overlay PDF ti consente di sovrapporre le pagine di un documento PDF sopra o sotto un altro documento PDF. È perfetto per applicare carta intestata, aggiungere griglie di sfondo, timbrare filigrane o fondere insieme bozze di layout.</p>\n      <p>Supporta sia la modalità Overlay (il livello va in alto) che la modalità Underlay (il livello va sotto). Specifica intervalli di pagine di destinazione personalizzati o esegui il loop di documenti sovrapposti più brevi per coprire automaticamente l'intero file di base.</p>\n      <p>Tutta l'elaborazione viene eseguita interamente all'interno del tuo browser web localmente, garantendo totale sicurezza e privacy dei dati.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF principale",
        "description": "Trascina e rilascia il documento PDF di base principale."
      },
      {
        "step": 2,
        "title": "Carica PDF livello",
        "description": "Fornire il documento overlay/underlay che funge da livello."
      },
      {
        "step": 3,
        "title": "Configura la stratificazione",
        "description": "Scegli la modalità overlay o underlay, specifica gli intervalli di pagine e abilita il looping delle pagine."
      },
      {
        "step": 4,
        "title": "Compila e scarica",
        "description": "Fare clic su Compila per elaborare e scaricare il PDF dei risultati a più livelli."
      }
    ],
    "useCases": [
      {
        "title": "Carta intestata aziendale",
        "description": "Sovrapponi i contenuti delle fatture ai modelli di carta intestata standard dell'azienda.",
        "icon": "file-text"
      },
      {
        "title": "Filigrane e sigilli",
        "description": "Sovrapponi timbri di sicurezza, sigilli di firma o sfondi tra i documenti.",
        "icon": "shield"
      },
      {
        "title": "Disegnare progetti",
        "description": "Combina bozze di architetture o griglie di layout sotto i blocchi di testo.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Qual è la differenza tra Overlay e Underlay?",
        "answer": "La sovrapposizione posiziona il livello secondario sopra il contenuto principale. Il underlay lo posiziona in fondo, fungendo da modello di sfondo."
      },
      {
        "question": "Posso ripetere il livello di sovrapposizione?",
        "answer": "Sì, se il livello PDF è più corto del documento base, abilitando Loop lo farà scorrere (ad esempio pagina 1, 2, 1, 2) per coprire tutte le pagine base."
      },
      {
        "question": "L'intervallo di pagine è supportato?",
        "answer": "Sì, puoi scegliere come target pagine specifiche utilizzando la sintassi dell'intervallo come \"1-5\", \"dispari\", \"pari\" o elenchi separati da virgole."
      }
    ]
  },
  "timestamp-pdf": {
    "title": "Marca temporale locale per PDF",
    "metaDescription": "Questo strumento crea una marca temporale locale autofirmata con l’orologio del dispositivo. Non richiede né verifica una marca della TSA selezionata.",
    "keywords": [
      "Marca temporale locale per PDF",
      "PDF",
      "Ora del dispositivo"
    ],
    "description": "<p>Seleziona un PDF per aggiungere una marca temporale locale.</p><p>Questo strumento crea una marca temporale locale autofirmata con l’orologio del dispositivo. Non richiede né verifica una marca della TSA selezionata.</p><p>L’elaborazione avviene nel browser; nessun documento o hash viene inviato a una TSA.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF",
        "description": "Seleziona un PDF per aggiungere una marca temporale locale."
      },
      {
        "step": 2,
        "title": "Nome dell’autorità selezionata",
        "description": "Scegli un nome per la firma locale. Questo nome non avvia una connessione a una TSA."
      },
      {
        "step": 3,
        "title": "Aggiungi marca temporale locale",
        "description": "Elabora il file, controlla il risultato e scarica il PDF."
      }
    ],
    "useCases": [
      {
        "title": "Bozze di lavoro",
        "description": "Conserva una copia del documento con una data locale.",
        "icon": "file-text"
      },
      {
        "title": "Archivi personali",
        "description": "Salva una copia con marca temporale per il tuo riferimento personale.",
        "icon": "archive"
      },
      {
        "title": "Ispezione della firma",
        "description": "Controlla la firma generata e i metadati in un lettore PDF.",
        "icon": "search"
      }
    ],
    "faq": [
      {
        "question": "La marca temporale viene verificata in modo indipendente?",
        "answer": "Questo strumento crea una marca temporale locale autofirmata con l’orologio del dispositivo. Non richiede né verifica una marca della TSA selezionata."
      },
      {
        "question": "Devo caricare un certificato digitale?",
        "answer": "No. Lo strumento genera un certificato locale autofirmato per questa operazione."
      },
      {
        "question": "Quale orologio fornisce l’ora?",
        "answer": "L’ora proviene dall’orologio del dispositivo e non viene verificata in modo indipendente."
      }
    ]
  },
  "add-page-labels": {
    "title": "Aggiungi Etichette di Pagina",
    "metaDescription": "Imposta etichette di pagina personalizzate (es. I, II per la prefazione). Migliora la navigazione.",
    "keywords": [
      "etichette di pagina",
      "numerazione pagine pdf",
      "navigazione pdf"
    ],
    "description": "<p>Aggiungi etichette di pagina ti consente di inserire metadati di etichettatura di pagina personalizzati (/PageLabels) nel dizionario del catalogo principale del tuo PDF. Ciò personalizza le etichette visualizzate nelle barre laterali di navigazione del lettore PDF professionale e nei pannelli di salto dei numeri di pagina principali (ad esempio utilizzando numeri romani per l'introduzione, sequenze decimali per il corpo principale o prefissi personalizzati come A-0, A-1 per le sottosezioni tecniche).</p>\n      <p>Supporta la combinazione di più regole personalizzate senza problemi. Fondamentalmente, abbiamo creato un <strong>algoritmo di suddivisione in intervalli disgiunti</strong> altamente ottimizzato: anche se dichiari modelli alternati complessi (ad esempio, pagine dispari stile A, pagine pari stile B), lo strumento analizzerà e comporrà elegantemente i confini per garantire una corretta visualizzazione conforme agli standard senza perdite di formati in pagine non mappate.</p>\n      <p>Tutte le operazioni vengono elaborate interamente all'interno della sandbox del browser locale, garantendo l'assoluta privacy dei dati.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica documento PDF",
        "description": "Fornisci il documento PDF di destinazione che desideri etichettare."
      },
      {
        "step": 2,
        "title": "Configura le regole di etichettatura",
        "description": "Aggiungi una o più regole specificando intervalli di pagine (ad esempio, \"1-5\", \"dispari\" o elenchi separati da virgole), prefisso, stile e sequenza iniziale."
      },
      {
        "step": 3,
        "title": "Anteprima e download",
        "description": "Esamina l'anteprima dell'elenco delle etichette delle pagine attive di seguito, quindi compila e scarica il documento PDF aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Formattazione tesi accademiche",
        "description": "Imposta i numeri romani minuscoli (i, ii, iii) per l'introduzione e il passaggio al decimale per i capitoli principali.",
        "icon": "book"
      },
      {
        "title": "Prefissi del progetto di ingegneria",
        "description": "Allega le abbreviazioni del sottosistema (ad esempio, \"A-1\", \"M-5\") come prefissi delle etichette delle pagine, consentendo ai team di cercare e individuare le pagine in pochi secondi.",
        "icon": "layout"
      },
      {
        "title": "Layout alternati personalizzati",
        "description": "Applica un'indicizzazione di intervalli di pagine altamente specifica a sequenze pari/dispari o a sezioni non contigue con la massima libertà.",
        "icon": "shuffle"
      }
    ],
    "faq": [
      {
        "question": "Cosa sono le etichette delle pagine e i numeri delle pagine?",
        "answer": "I numeri di pagina ordinari sono blocchi di testo visivi resi direttamente sulla tela di carta (visibili una volta stampati). Le etichette delle pagine, tuttavia, sono metadati strutturali inseriti nel catalogo PDF. Controllano ciò che viene visualizzato sotto le miniature e nella casella di ricerca della pagina all'interno di software come Adobe Acrobat o Apple Preview."
      },
      {
        "question": "Cosa succede se lascio vuoto l'intervallo di pagine?",
        "answer": "Lasciare vuoto l'intervallo di pagine fa sì che la regola venga applicata globalmente a tutte le pagine del documento."
      },
      {
        "question": "Come vengono gestite le regole sovrapposte?",
        "answer": "Le regole vengono valutate in sequenza nell'ordine in cui sono elencate. Se un intervallo di pagine di una regola successiva si sovrappone a uno precedente, la regola successiva ha la priorità e sovrascrive l'etichetta di quella pagina."
      }
    ]
  },
  "ai-pdf-reflower": {
    "title": "Riorganizzazione PDF con IA",
    "metaDescription": "Ridisponi il testo PDF per una lettura più semplice sui dispositivi mobili. Esporta il contenuto estratto come Markdown o EPUB nel tuo browser.",
    "keywords": [
      "riflusso pdf",
      "pdf responsive",
      "pdf in markdown",
      "esportazione epub"
    ],
    "description": "<p>AI PDF Layout Reflower è il tuo compagno ideale per leggere documenti PDF su dispositivi mobili. I PDF tradizionali utilizzano un layout fisso, che spesso richiede uno zoom infinito e uno scorrimento orizzontale su smartphone o tablet, risultando in un'esperienza di lettura noiosa.</p>\n      <p>Questo strumento analizza in modo intelligente il flusso del testo, l'interlinea e le coordinate fisiche delle pagine PDF, ricostruendo i paragrafi semantici e le gerarchie dei titoli. Per i documenti a più colonne o a due colonne, unisce in modo intelligente i flussi di colonne in un unico flusso reattivo, garantendo una lettura fluida.</p>\n      <p>Inoltre, supporta il rendering di formule matematiche in LaTeX/MathJax e offre più temi di lettura (Seppia, Scuro, Verde protezione occhi). Puoi esportare il layout ridisposto come Markdown o un ebook EPUB standard con un solo clic.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file PDF",
        "description": "Trascina e rilascia il tuo file PDF o fai clic per sfogliarlo e selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona Tema di lettura",
        "description": "Scegli la dimensione del carattere e i colori del tema preferiti nel simulatore mobile 3D sulla destra."
      },
      {
        "step": 3,
        "title": "Esporta documento",
        "description": "Una volta soddisfatto, utilizza la fune fisica per esportare il documento come Markdown o EPUB."
      }
    ],
    "useCases": [
      {
        "title": "Lettura della letteratura mobile",
        "description": "Leggi documenti accademici e rapporti di ricerca sul tuo telefono senza interruzioni, senza zoomare costantemente.",
        "icon": "smartphone"
      },
      {
        "title": "Conversione di ebook",
        "description": "Converti PDF ricchi di testo in file EPUB e importali in Kindle o altri lettori di ebook.",
        "icon": "book"
      },
      {
        "title": "Archivio delle note",
        "description": "Converti direttamente il contenuto PDF strutturato in file Markdown puliti per la tua knowledge base personale.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Gestisce correttamente i PDF a doppia colonna?",
        "answer": "Sì, il reflower del layout rileva le coordinate orizzontali dei blocchi di testo e struttura le colonne sinistra e destra in sequenza, impedendo l'interlacciamento delle righe."
      },
      {
        "question": "Le immagini e le formule matematiche andranno perse?",
        "answer": "Le formule matematiche vengono convertite nella sintassi LaTeX/MathJax per un rendering web pulito e le immagini vengono conservate nelle posizioni semantiche corrispondenti."
      },
      {
        "question": "La conversione viene eseguita nel cloud?",
        "answer": "No, tutta l'analisi del layout e il confezionamento del formato vengono eseguiti localmente nel tuo browser per garantire l'assoluta privacy dei tuoi documenti."
      }
    ]
  },
  "citation-linker": {
    "title": "Attivatore di Link di Citazione",
    "metaDescription": "Trasforma gli indicatori di citazione nei PDF in collegamenti DOI cliccabili o riferimenti a pagine. Aggiungi navigazione utile ai documenti di ricerca.",
    "keywords": [
      "link citazioni",
      "collegamento pdf",
      "corrispondenza doi",
      "pdf accademico"
    ],
    "description": "<p>Citation Linker è progettato specificamente per i ricercatori accademici. In molti documenti PDF, gli indicatori di citazione (ad esempio, [1], [2]) sono testo semplice, costringendo i lettori a scorrere avanti e indietro fino all'elenco di riferimenti alla fine del documento, interrompendo la loro attenzione.</p>\n      <p>Questo strumento legge il testo PDF localmente, utilizza il riconoscimento di pattern per abbinare gli indicatori di citazione alle voci di riferimento corrispondenti e sovrappone annotazioni di collegamenti PDF selezionabili utilizzando ricerche DOI o coordinate di salto di pagina.</p>\n      <p>Genera inoltre una mappa interattiva delle relazioni tra citazioni per navigare visivamente nella rete di riferimento del documento.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF accademico",
        "description": "Carica un documento PDF o una tesi contenente una sezione bibliografica/riferimento."
      },
      {
        "step": 2,
        "title": "Citazioni di revisione",
        "description": "Ispeziona le coppie di citazioni nella mappa interattiva e modifica o aggiungi manualmente collegamenti DOI, se necessario."
      },
      {
        "step": 3,
        "title": "Inserisci collegamenti",
        "description": "Fare clic sul pulsante di attivazione per sovrapporre i collegamenti ipertestuali al PDF e scaricare il documento aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Lettura approfondita della letteratura",
        "description": "Fare clic sugli indicatori di citazione per visualizzare immediatamente i dettagli di riferimento o navigare verso pagine DOI esterne.",
        "icon": "link"
      },
      {
        "title": "Preparazione pre-pubblicazione",
        "description": "Assicurati che i tuoi documenti accademici scritti abbiano navigazioni di collegamenti ipertestuali completamente attive prima dell'invio finale.",
        "icon": "award"
      },
      {
        "title": "Analisi della mappa di riferimento",
        "description": "Comprendere le gerarchie e le connessioni della letteratura tramite la mappa interattiva della topologia della rete.",
        "icon": "git-network"
      }
    ],
    "faq": [
      {
        "question": "Cosa succede se un riferimento non ha DOI?",
        "answer": "Se non è possibile trovare un DOI, lo strumento ricorre a un'azione interna \"Vai a pagina\", che consente di fare clic sul marcatore e passare direttamente alla pagina di riferimento."
      },
      {
        "question": "Quali formati di citazione sono supportati?",
        "answer": "Supporta parentesi numeriche comuni (ad esempio, [1], [1-3]) e citazioni autore-anno (ad esempio, Autore et al., 202X)."
      },
      {
        "question": "Modificherà l'aspetto del mio PDF?",
        "answer": "No, inserisce annotazioni di collegamento invisibili sopra il testo, preservando il layout, i caratteri e lo stile originali del documento."
      }
    ]
  },
  "vector-extractor": {
    "title": "Estrattore di Vettori PDF",
    "metaDescription": "Estrai la grafica vettoriale dalle pagine PDF come SVG. Seleziona grafici, diagrammi e loghi per ricolorarli ed esportarli.",
    "keywords": [
      "estrarre vettori pdf",
      "esportazione svg",
      "estrarre loghi",
      "grafica vettoriale"
    ],
    "description": "<p>PDF Vector Extractor sblocca percorsi vettoriali e grafica incorporati nei file PDF. Estrai facilmente grafici vettoriali, diagrammi o loghi dai documenti per lavori di progettazione o stampa.</p>\n      <p>Nel profondo, utilizza il rendering SVG ad alta fedeltà per scomporre i percorsi vettoriali PDF in alberi di elementi SVG standard e puliti senza perdita di precisione.</p>\n      <p>L'interfaccia evidenzia gli elementi al passaggio del mouse con un effetto di esplosione del livello 3D sull'asse Z, completo di un pannello di selezione colori che consente ai designer di regolare ed estrarre i nodi vettoriali.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica documento PDF",
        "description": "Carica un PDF contenente risorse vettoriali, diagrammi, grafici o loghi."
      },
      {
        "step": 2,
        "title": "Seleziona Elementi",
        "description": "Passa il mouse sopra la tela vettoriale per evidenziare gli elementi, quindi fai clic per selezionare un nodo."
      },
      {
        "step": 3,
        "title": "Personalizza ed esporta",
        "description": "Regola gli attributi del percorso nel pannello, quindi scarica come SVG o copia il codice sorgente SVG."
      }
    ],
    "useCases": [
      {
        "title": "Estrazione delle risorse di progettazione",
        "description": "Estrai rapidamente loghi, icone e illustrazioni aziendali dalle linee guida o dalle brochure del marchio.",
        "icon": "bezier"
      },
      {
        "title": "Esportazione di grafici scientifici",
        "description": "Estrai grafici vettoriali da documenti di ricerca da utilizzare nella stampa o nelle presentazioni ad alta risoluzione.",
        "icon": "presentation"
      },
      {
        "title": "Ricolorazione delle risorse vettoriali",
        "description": "Modifica il tratto e i colori di riempimento delle risorse estratte prima di salvarle per progetti web.",
        "icon": "crown"
      }
    ],
    "faq": [
      {
        "question": "Perché non riesco a selezionare determinate immagini?",
        "answer": "I PDF contengono sia immagini raster (come foto o pagine scansionate) sia grafica vettoriale (come forme e curve). Solo i percorsi vettoriali possono essere decostruiti in percorsi SVG."
      },
      {
        "question": "L'output SVG contiene stili?",
        "answer": "Sì, l'SVG esportato mantiene tutte le proprietà originali inclusi riempimenti, tratti, opacità, gradienti e trasformazioni di coordinate."
      },
      {
        "question": "I file di grandi dimensioni subiranno ritardi?",
        "answer": "Utilizziamo l'accelerazione WebAssembly, ma il rendering di PDF con disegni CAD estremamente complessi o migliaia di percorsi vettoriali potrebbe richiedere alcuni secondi."
      }
    ]
  },
  "deep-sanitize": {
    "title": "Sanificazione Profonda dei Metadati",
    "metaDescription": "Rimuovi metadati, livelli nascosti e oggetti inutilizzati dai PDF. Pulisci le informazioni del documento localmente prima di condividerle.",
    "keywords": [
      "sanificare pdf",
      "eliminare metadati",
      "privacy pdf",
      "sicurezza documento"
    ],
    "description": "<p>Deep Metadata Sanitizer è la tua difesa definitiva contro le fughe di metadati e il tracciamento nascosto. Disegnare semplicemente delle caselle nere sul testo visibile nei file PDF non è sufficiente per proteggere i segreti commerciali.</p>\n      <p>Questo strumento esegue la scansione della struttura binaria del PDF per cancellare completamente le informazioni sull'autore, il software dell'autore, i registri di modifica (metadati XMP), le cache PieceInfo proprietarie e i gruppi di contenuti opzionali OCG (spesso utilizzati per filigrane invisibili).</p>\n      <p>Riscrive inoltre completamente le tabelle dei riferimenti incrociati (xref), eliminando tutti i blocchi di aggiornamento incrementali per garantire che i dati storici eliminati o modificati non possano essere ripristinati.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF",
        "description": "Seleziona il file PDF contenente dati sensibili o cronologia delle modifiche."
      },
      {
        "step": 2,
        "title": "Esegui lo scanner",
        "description": "Attiva lo scanner di contenimento 3D per verificare la presenza di metadati e livelli nascosti nel file."
      },
      {
        "step": 3,
        "title": "Igienizzazione profonda",
        "description": "Fai clic su disinfetta per eliminare gli elementi di tracciamento e scaricare il PDF completamente pulito."
      }
    ],
    "useCases": [
      {
        "title": "Condivisione del contratto",
        "description": "Rimuovere documenti di redazione, percorsi e revisioni precedenti prima di condividere contratti commerciali con terze parti.",
        "icon": "file-signature"
      },
      {
        "title": "Pubblicazione anonima",
        "description": "Elimina annotazioni e filigrane invisibili per pubblicare documenti in modo anonimo e sicuro.",
        "icon": "eye-off"
      },
      {
        "title": "Ottimizzazione PDF",
        "description": "Rimuovi oggetti orfani e flussi di dati spazzatura per velocizzare il caricamento dei file sul web.",
        "icon": "zap"
      }
    ],
    "faq": [
      {
        "question": "In cosa differisce dalla rimozione standard dei metadati?",
        "answer": "Gli strumenti standard cancellano solo i campi di base come titolo o autore. Deep Sanitizer ricostruisce l'intera tabella xrif del PDF, cancellando PieceInfo, filigrane nascoste e revisioni incrementali storiche."
      },
      {
        "question": "Ciò influirà sul layout o sul testo del documento?",
        "answer": "No, rimuove solo i flussi di descrizione nascosti e i dati della struttura. Il layout visibile, i testi e la grafica rimangono invariati."
      },
      {
        "question": "Questa operazione rimuove le password PDF?",
        "answer": "No, se un PDF è crittografato, è necessario sbloccarlo prima di eseguire una sanificazione approfondita."
      }
    ]
  },
  "booklet-folding-simulator": {
    "title": "Simulatore 3D di Piegatura e Imposizione",
    "metaDescription": "Organizzare le pagine PDF per la stampa dell'opuscolo. Visualizza in anteprima i fogli piegati e i layout con pinzatura a sella prima di esportare il tuo documento pronto per la stampa.",
    "keywords": [
      "imposizione 3d",
      "piegatura carta",
      "rilegatura a punto metallico",
      "impaginazione"
    ],
    "description": "<p>Il simulatore di opuscoli e pieghevoli 3D è uno strumento avanzato progettato per designer di stampa e professionisti dell'editoria. Il layout tradizionale dei libri richiede il calcolo di complesse sovrapposizioni di pagine e sequenze di impaginazione di imposizione. Questo strumento visualizza e automatizza l'intero processo.</p>\n      <p>Di nascosto, il nostro algoritmo di imposizione personalizzato mappa un elenco sequenziale di pagine PDF in layout di fogli di stampa standard (come pieghe a metà di 4 pagine, pinzature a sella di 8 pagine o pieghe a fisarmonica), unendo le pagine sul fronte e sul retro di fogli fisici di grandi dimensioni.</p>\n      <p>Nel front-end, utilizziamo trasformazioni CSS 3D Matrix pure e curve fisiche di massa elastica per animare la piegatura del foglio in senso orizzontale e verticale, offrendo un'anteprima di rilegatura simile a quella fisica con un elevato fattore WOW.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file PDF",
        "description": "Trascina e rilascia il documento PDF che desideri impaginare per la stampa."
      },
      {
        "step": 2,
        "title": "Seleziona il layout di piegatura",
        "description": "Scegli il tuo schema di imposizione preferito (ad esempio, piega di 4 pagine, pinzatura a sella di 8 pagine, fisarmonica di 4 pagine)."
      },
      {
        "step": 3,
        "title": "Anteprima 3D interattiva",
        "description": "Trascina il cursore per osservare la piegatura del foglio in 3D e controllare il layout finale della numerazione delle pagine."
      },
      {
        "step": 4,
        "title": "Genera PDF imposto",
        "description": "Fare clic su Genera per scaricare il PDF del foglio fisico riorganizzato e unito, pronto per la stampa fronte-retro."
      }
    ],
    "useCases": [
      {
        "title": "Prototipazione brochure",
        "description": "Pre-visualizzare la sequenza di piegatura di piegature a tre e opuscoli per evitare pagine capovolte dopo la stampa.",
        "icon": "book-open"
      },
      {
        "title": "Libro Cucitura a sella",
        "description": "Genera automaticamente fogli di stampa con imposizione per riviste o opuscoli multipagina.",
        "icon": "layers"
      },
      {
        "title": "Supporti visivi per tipografia",
        "description": "Aiuta i clienti a visualizzare come le pagine sono fisicamente distribuite e piegate sui fogli di stampa.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Cos'è l'\"imposizione\"?",
        "answer": "L'imposizione è un passaggio fondamentale nella stampa prestampa. Poiché le macchine da stampa commerciali stampano su fogli di grandi dimensioni, le pagine vengono disposte in modo disordinato in modo che, una volta stampate, piegate e rilegate, vengano visualizzate nell'ordine sequenziale corretto. Questo strumento calcola automaticamente quel layout."
      },
      {
        "question": "L'anteprima 3D altera il contenuto del mio PDF?",
        "answer": "No, il contenuto PDF originale viene semplicemente reso come mappatura delle texture sul foglio 3D. Il PDF generato modifica solo l'ordine e il posizionamento delle pagine; il testo e le qualità grafiche vengono mantenute intatte."
      },
      {
        "question": "Cosa succede se il conteggio delle pagine del mio PDF non è un multiplo di 4 o 8?",
        "answer": "L'ottimizzatore aggiunge automaticamente le pagine vuote alla fine per soddisfare i requisiti matematici di conteggio delle pagine del layout di piegatura selezionato."
      }
    ]
  },
  "pdf-to-slide": {
    "title": "PDF a Presentazione",
    "metaDescription": "Converti contenuti PDF in diapositive PowerPoint. Esporta una presentazione PPTX con testo e immagini per ulteriori modifiche.",
    "keywords": [
      "pdf in ppt",
      "creare diapositive",
      "convertitore pptx",
      "estrazione grafici"
    ],
    "description": "<p>AI PDF-to-Slide Reconstructor dà nuova vita ai documenti PDF statici, trasformandoli in diapositive PowerPoint (PPTX) moderne e altamente personalizzabili.</p>\n      <p>Lo strumento utilizza un estrattore avanzato di contorni del layout che analizza automaticamente i livelli di intestazione del documento, le linee di paragrafo e gli spessori dei caratteri per stabilire una struttura logica della diapositiva. Isola inoltre i grafici vettoriali e le tabelle ad alta risoluzione, eliminando gli artefatti dello sfondo per incorporarli in modo pulito come risorse modificabili indipendenti.</p>\n      <p>Tutti gli output PPTX sono creati utilizzando elementi standard Office Open XML, il che significa che tutto il testo rimane completamente modificabile e i vettori non perdono risoluzione. Il front-end mostra un'animazione fluida di transizione delle carte \"campo stellare\" che visualizza la ricostruzione in modo coinvolgente.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF accademico/aziendale",
        "description": "Carica un documento PDF che contenga sezioni e diagrammi strutturati."
      },
      {
        "step": 2,
        "title": "Analizza i contorni delle diapositive",
        "description": "Esamina la struttura della diapositiva estratta, regola i titoli o elimina i blocchi di carte non necessari."
      },
      {
        "step": 3,
        "title": "Ricostruisci in PPTX",
        "description": "Avvia il motore di compilazione per ricevere un file di presentazione standard e modificabile."
      }
    ],
    "useCases": [
      {
        "title": "Presentazione del documento di ricerca",
        "description": "Converti PDF di riviste accademiche, strutture di testo e diagrammi vettoriali in diapositive pronte per le conferenze.",
        "icon": "graduation-cap"
      },
      {
        "title": "Riepilogo del rapporto aziendale",
        "description": "Distilla istantaneamente enormi report aziendali annuali in bozze di presentazione pulite e puntate.",
        "icon": "presentation"
      },
      {
        "title": "Demo multidispositivo",
        "description": "Evita di copiare manualmente gli screenshot. Ottieni una struttura di layout pulita e completamente modificabile in pochi secondi.",
        "icon": "laptop"
      }
    ],
    "faq": [
      {
        "question": "Le diapositive sono modificabili in Microsoft Office?",
        "answer": "Sì. I file vengono generati nativamente in memoria secondo la specifica ufficiale Office Open XML (OOXML). Testi, tabelle e segnaposto sono completamente interattivi in ​​PowerPoint, Keynote e WPS."
      },
      {
        "question": "Come vengono estratti i grafici?",
        "answer": "Il motore esegue la scansione dei percorsi vettoriali e dei livelli raster nel PDF, rileva le aree delimitate che rappresentano i grafici e le ritaglia come nodi SVG autonomi o immagini ad alto DPI."
      },
      {
        "question": "Funziona con i documenti scansionati?",
        "answer": "Per i PDF scansionati privi di livelli di testo effettivi, consigliamo di eseguire il nostro strumento OCR prima di passare il file allo Slide Reconstructor."
      }
    ]
  },
  "eink-optimizer": {
    "title": "Ottimizzatore per e-Ink Reader",
    "metaDescription": "Ottimizza le pagine PDF per i lettori e-ink. Pulisci gli sfondi, aumenta il contrasto del testo e regola i documenti per una lettura più semplice.",
    "keywords": [
      "ottimizzazione eink",
      "binarizzazione otsu",
      "ingrandire tratti",
      "lettura ereader"
    ],
    "description": "<p>e-Ink Reader Optimizer è uno strumento indispensabile creato su misura per gli appassionati di e-Reader che utilizzano Kindle, Onyx Boox, Kobo o altri dispositivi e-paper.</p>\n      <p>Molti e-book PDF scansionati presentano caratteri sbiaditi, sfondi grigi confusi, rumore o ombre di scansione quando vengono visualizzati su schermi e-Ink. Questo strumento analizza gli istogrammi dei valori di grigio e applica la soglia di binarizzazione di Otsu per separare il testo dallo sfondo, convertendo gli sfondi grigi in bianco pulito.</p>\n      <p>Inoltre, integra la dilatazione morfologica per caratteri audaci e ispessiti, sottili e sbiaditi, fornendo una tipografia nitida e ad alto contrasto. Il dispositivo di scorrimento del contrasto con smorzamento dell'inerzia ti consente di ottimizzare il contrasto simile alla carta in tempo reale.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF scansionato",
        "description": "Carica e-book o documenti scansionati con testo sbiadito o sfondi grigi."
      },
      {
        "step": 2,
        "title": "Regola il cursore del contrasto",
        "description": "Trascina il cursore attenuato per bilanciare la rimozione dello sfondo e il grassetto dei caratteri in tempo reale."
      },
      {
        "step": 3,
        "title": "Ottimizza e scarica",
        "description": "Elabora l'intero PDF per generare un documento ad alto contrasto e gradevole alla vista, su misura per e-Ink."
      }
    ],
    "useCases": [
      {
        "title": "Restauro di manoscritti antichi",
        "description": "Addensare il testo sbiadito nelle scansioni di libri storici o manoscritti scritti a mano per renderli leggibili.",
        "icon": "scroll"
      },
      {
        "title": "Pulizia del foglio dell'esame",
        "description": "Sbiancare le ombre dello sfondo da esami fotocopiati o fotografati, restituendo testo nero pulito su carta bianca.",
        "icon": "file-text"
      },
      {
        "title": "E-paper Device Tailoring",
        "description": "Converti PDF colorati in scala di grigi ottimizzata, prevenendo artefatti dithering e disordinati sugli schermi monocromatici.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Come funziona il \"grassetto dei caratteri\"?",
        "answer": "Nell'elaborazione delle immagini, questa si chiama dilatazione. Utilizza una matrice di strutturazione per espandere i margini dei caratteri di un pixel, ispessendo fisicamente i tratti deboli per renderli leggibili."
      },
      {
        "question": "Questo processo aumenterà le dimensioni del file?",
        "answer": "Tutto il contrario. Binarizzando immagini complesse a colori/in scala di grigi in semplici layout in bianco e nero, la compressione standard (come CCITT Gruppo 4) può ridurre significativamente le dimensioni del file PDF."
      },
      {
        "question": "Supporta PDF con testo nativo?",
        "answer": "Sì. I PDF vettoriali nativi vengono rasterizzati ad alta risoluzione in background, ottimizzati e compilati nuovamente, garantendo una lettura unificata ad alto contrasto."
      }
    ]
  },
  "cert-cryptor": {
    "title": "Cifra Certificato",
    "metaDescription": "Crittografa e firma digitalmente i documenti PDF utilizzando i certificati. Lavora con i file del certificato localmente nel tuo browser.",
    "keywords": [
      "cifratura certificati",
      "sigillo ceralacca 3d",
      "firma digitale",
      "pkcs7"
    ],
    "description": "<p>Sigillo in ceralacca 3D e certificato Cryptor offre sicurezza di livello militare ed estetica premium di livello fisico per file aziendali, diplomi o accordi sensibili.</p>\n      <p>Tecnicamente, offre crittografia asimmetrica a chiave pubblica: importa il certificato a chiave pubblica del destinatario (.cer/.crt) per bloccare il flusso PDF; solo il titolare della chiave privata corrispondente (.pfx) può decrittografarla. Genera inoltre firme digitali PKCS#7 standard per garantire l'integrità dei documenti a prova di manomissione.</p>\n      <p>Visivamente, presentiamo un timbro fisico 3D con sigillo in ceralacca rossa o dorata. Quando firmi, un timbro dalla resa meravigliosa scende con un suono meccanico soddisfacente, lasciando un sigillo di cera 3D con variazioni di altezza realistiche sulla mappa normale e colature di cera sulla pagina, circondato da tracce crittografiche luminose.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF e certificato",
        "description": "Aggiungi il tuo PDF e importa il tuo certificato di firma (.pfx) o il certificato pubblico del destinatario (.cer)."
      },
      {
        "step": 2,
        "title": "Posiziona il timbro 3D",
        "description": "Trascina e individua il sigillo sull'anteprima del documento e scegli uno stile di cera (ad esempio oro, cremisi)."
      },
      {
        "step": 3,
        "title": "Premi e firma",
        "description": "Fai clic su Esegui per guardare la cerimonia di impronta del sigillo di ceralacca 3D, che genera una firma digitale di livello fisico."
      },
      {
        "step": 4,
        "title": "Scarica PDF protetto",
        "description": "Salva il documento di output, ora bloccato e timbrato crittograficamente."
      }
    ],
    "useCases": [
      {
        "title": "Diplomi e Certificati",
        "description": "Apporre distintivi con sigillo di ceralacca 3D di grande valore su diplomi e premi digitali, supportati da firme digitali autentiche.",
        "icon": "award"
      },
      {
        "title": "Accordi riservati",
        "description": "Blocca i contratti sensibili utilizzando il certificato pubblico del cliente in modo che solo la sua chiave magnetica fisica sicura possa sbloccarlo.",
        "icon": "shield-alert"
      },
      {
        "title": "Comunicati Stampa Ufficiali",
        "description": "Firma digitalmente gli annunci pubblici per impedire modifiche dannose del testo o spoofing.",
        "icon": "stamp"
      }
    ],
    "faq": [
      {
        "question": "Il sigillo in ceralacca è solo un'immagine o una vera e propria firma?",
        "answer": "Entrambi. Il sistema esegue il rendering di un'impronta in cera 3D incredibilmente realistica con profondità mappata normalmente (livello visivo) e codifica una firma crittografica PKCS#7 autentica e a prova di manomissione all'interno del PDF (livello dati)."
      },
      {
        "question": "Che cos'è la \"crittografia basata su certificato\"?",
        "answer": "È una tecnica di crittografia senza password. Crittografi il file utilizzando la chiave pubblica del destinatario. Il lettore cerca automaticamente il proprio certificato privato locale per decrittografare il file senza problemi, garantendo una solida sicurezza."
      },
      {
        "question": "Posso personalizzare il design del timbro?",
        "answer": "Sì. Forniamo più design come la filigrana AwsomePDF o uno stemma reale e puoi regolare il raggio di fusione della cera e la profondità del rientro della mappa normale nel pannello."
      }
    ]
  },
  "passport-id-composer": {
    "title": "Copia ID Fronte Retro'Identità",
    "metaDescription": "Combina il fronte e il retro di una carta d'identità o di un passaporto su una pagina PDF A4. Organizza le scansioni e aggiungi una filigrana opzionale.",
    "keywords": [
      "copia carta identita",
      "fronte retro a4",
      "copia passaporto",
      "filigrana"
    ],
    "description": "<p>Il compositore fronte-retro Passport & ID è un'utilità di produttività incredibilmente utile per operazioni personali e aziendali standard.</p>\n      <p>Quando richiediamo conti bancari, onboarding o firmiamo contratti, spesso abbiamo bisogno di copie di entrambi i lati delle carte d'identità. Questo strumento accetta immagini fronte/retro o pagine PDF e le dispone con precisione su un'unica pagina A4 conforme alle risoluzioni di layout standard nazionali.</p>\n      <p>Inoltre, puoi personalizzare filigrane anticontraffazione traslucide sovrapposte (ad esempio \"SOLO PER ONBOARDING\") per impedire il riutilizzo non autorizzato dei documenti. Dispone anche di un effetto visivo della porta dello scanner della fotocopiatrice con scansione laser 3D per fornire un feedback eccezionale.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file ID",
        "description": "Carica foto/scansioni fronte e retro del tuo documento d'identità o passaporto (fino a 2 file)."
      },
      {
        "step": 2,
        "title": "Configura filigrana sicura",
        "description": "Inserisci una sovrapposizione di testo personalizzata per limitare la replica non autorizzata del documento."
      },
      {
        "step": 3,
        "title": "Scrivi e scarica",
        "description": "Fare clic su Esegui per generare un PDF A4 a pagina singola pronto per la stampa."
      }
    ],
    "useCases": [
      {
        "title": "Presentazione dell'onboarding delle risorse umane",
        "description": "Allinea rapidamente le copie degli ID dei dipendenti e applica filigrane protettive.",
        "icon": "user"
      },
      {
        "title": "Servizi governativi e bancari",
        "description": "Preparare stampe identificative standardizzate che soddisfino i requisiti di archivio fisico.",
        "icon": "landmark"
      },
      {
        "title": "Backup di viaggio",
        "description": "Disporre le pagine del passaporto e i dettagli del visto su un foglio A4 unificato.",
        "icon": "plane"
      }
    ],
    "faq": [
      {
        "question": "Le filigrane bloccheranno i dettagli del testo identificativo?",
        "answer": "No. La filigrana viene resa con un'opacità del 15% attentamente ottimizzata per bloccare la falsificazione senza sacrificare la leggibilità dei campi di testo o foto."
      },
      {
        "question": "Le dimensioni della carta composita sono accurate?",
        "answer": "Sì. Rende la carta d'identità nella dimensione fisica standard di 85,6 mm × 54 mm perfettamente scalata sulla pagina A4."
      },
      {
        "question": "Supporta le patenti di guida?",
        "answer": "Sì, funziona magnificamente per qualsiasi scansione di identità basata su carte."
      }
    ]
  },
  "annotation-exporter": {
    "title": "Esporta Annotazioni",
    "metaDescription": "Esporta commenti, note, evidenziazioni e sottolineature PDF in Markdown o JSON. Organizzare annotazioni per studio, revisione e ricerca.",
    "keywords": [
      "esportare annotazioni",
      "estrarre evidenziature",
      "note lettura",
      "markdown"
    ],
    "description": "<p>L'esportatore di annotazioni intelligenti è un potente spazio di lavoro che libera tutto il valore dalle tue annotazioni PDF.</p>\n      <p>Quando conduciamo revisioni della letteratura o leggiamo e-book estesi, facciamo un uso massiccio di evidenziazioni e note adesive. Questo strumento deserializza il dizionario PDF <code>/Annots</code> di basso livello ed estrae tutte le evidenziazioni, le note, le sottolineature e gli indicatori di inchiostro disegnati a mano.</p>\n      <p>Allinea automaticamente i commenti con le rispettive intestazioni di struttura, generando un taccuino Markdown o JSON strutturato con ancoraggi di riferimento alla pagina. Guarda i tuoi momenti salienti galleggiare magnificamente sul pannello del notebook in vetro smerigliato.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importa PDF con annotazioni",
        "description": "Carica qualsiasi saggio o libro in PDF contenente sottolineature, evidenziazioni o commenti."
      },
      {
        "step": 2,
        "title": "Configura filtri e formato",
        "description": "Seleziona i tipi di annotazioni che desideri estrarre e scegli Markdown o JSON."
      },
      {
        "step": 3,
        "title": "Estrai taccuino",
        "description": "Fai clic su Esegui per analizzare il flusso di commenti e assemblare il riepilogo della struttura."
      }
    ],
    "useCases": [
      {
        "title": "Sintesi della letteratura scientifica",
        "description": "Estrai le note di lettura su più documenti nei modelli Markdown per comporre istantaneamente recensioni illuminate.",
        "icon": "graduation-cap"
      },
      {
        "title": "Compilazione del diario di studio",
        "description": "Raccogli splendidi spunti e osservazioni personali dai libri di testo nei database di Obsidian.",
        "icon": "book"
      },
      {
        "title": "Documentare l'audit collaborativo",
        "description": "Raccogli le correzioni di revisione da diversi membri del team e stabilisci elenchi di attività attuabili.",
        "icon": "users"
      }
    ],
    "faq": [
      {
        "question": "Può estrarre tratti di inchiostro disegnati a mano dalla tavoletta?",
        "answer": "Sì. Finché i segni disegnati a mano vengono archiviati come annotazioni PDF Ink standard, lo strumento può isolare e strutturare perfettamente le posizioni delle pagine."
      },
      {
        "question": "Perché alcuni estratti evidenziati sono vuoti?",
        "answer": "Se il PDF è una scansione di immagine non ricercabile priva di testo sottostante, evidenzia solo le coordinate del negozio. Esegui prima l'OCR sul PDF, quindi estrai le annotazioni."
      },
      {
        "question": "I collegamenti Markdown tornano al PDF?",
        "answer": "Il file esportato elenca i numeri di pagina precisi e le intestazioni dello schema originale per facilitare i riferimenti incrociati."
      }
    ]
  },
  "batch-watermark-remover": {
    "title": "Rimuovi Filigrana",
    "metaDescription": "Rimuovi le filigrane di testo e immagini corrispondenti dai PDF. Esaminare l'output per verificare che il contenuto del documento venga preservato.",
    "keywords": [
      "rimuovere filigrana",
      "cancellare logo pdf",
      "pulizia documento"
    ],
    "description": "<p>Batch Watermark Remover è un disinfettante per PDF all'avanguardia che pulisce fisicamente i documenti.</p>\n      <p>I dispositivi di rimozione filigrana generici di solito si limitano a sovrapporre blocchi bianchi o a distorcere la spaziatura del documento. Questo strumento utilizza una solida tecnica di <strong>Content Stream Purge</strong>.</p>\n      <p>Analizza gli operatori di rendering di basso livello di ciascuna pagina, identifica comandi specifici della stringa di filigrana (ad esempio \"Confidenziale\", \"DRAFT\") o oggetti immagine di sfondo e li elimina o sovrascrive fisicamente. Le filigrane scompaiono completamente, preservando la formattazione originale e la qualità vettoriale.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file con filigrana",
        "description": "Fornisci il documento PDF riportante i loghi commerciali o le etichette di sicurezza."
      },
      {
        "step": 2,
        "title": "Definire la filigrana di destinazione",
        "description": "Inserisci la stringa esatta da eliminare o attiva la pulizia dell'immagine XObject traslucida."
      },
      {
        "step": 3,
        "title": "Esegue l'eliminazione fisica",
        "description": "Fare clic su Esegui per pulire gli operatori di contenuto con alta fedeltà."
      }
    ],
    "useCases": [
      {
        "title": "Archiviazione del patrimonio aziendale",
        "description": "Rimuovere le filigrane \"Confidenziale\" o \"Bozza\" scadute per la distribuzione al pubblico generale.",
        "icon": "archive"
      },
      {
        "title": "Eliminare il disordine dello sfondo",
        "description": "Elimina le immagini di sfondo pesanti che distraggono i lettori dalla scansione del testo.",
        "icon": "eye"
      },
      {
        "title": "Riutilizzo dei documenti",
        "description": "Pulisci i vecchi elementi di branding del piè di pagina per applicare facilmente nuovi modelli aziendali.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "È possibile recuperare le filigrane eliminate?",
        "answer": "No. A differenza delle maschere visive, riscriviamo il flusso binario della pagina per cancellare gli operatori, senza lasciare tracce."
      },
      {
        "question": "Supporta gradienti complessi?",
        "answer": "Se la filigrana viene archiviata come nodo di testo separato o immagine XObject, lo strumento può isolarla e cancellarla fisicamente."
      },
      {
        "question": "Modificherà il normale testo della pagina?",
        "answer": "No. Il motore di scrubbing prende di mira solo gli operatori che corrispondono alla firma della filigrana specificata; il testo normale rimane intatto."
      }
    ]
  },
  "smart-data-redactor": localizedRedactionContent('it', 'smart-data-redactor', "Redigi Dati Sensibili"),
  "bookmarks-auto-generator": {
    "title": "Genera Segnalibri",
    "metaDescription": "Genera segnalibri PDF da intestazioni e modelli di testo. Aggiungi una struttura navigabile a documenti, manuali e report lunghi.",
    "keywords": [
      "segnalibri pdf",
      "albero navigazione",
      "indice strutturato"
    ],
    "description": "<p>Il generatore automatico di segnalibri offre assoluta chiarezza ai documenti PDF lunghi e non strutturati.</p>\n      <p>Scansionare libri o opuscoli senza la navigazione della struttura è doloroso. Questo strumento analizza le gerarchie tipografiche (come dimensioni e pesi dei caratteri) insieme alle regole regex (come \"Capitolo 1\", \"Sezione 1.1\") per dedurre automaticamente le intestazioni.</p>\n      <p>Quindi compila e inserisce queste intestazioni direttamente nel dizionario PDF <code>/Outline</code>. Qualsiasi visualizzatore standard mostrerà quindi una barra laterale di navigazione multilivello splendidamente strutturata, supportata da un'anteprima interattiva della struttura ad albero 3D.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Fornisci PDF non strutturato",
        "description": "Carica brochure di grandi dimensioni, documenti accademici o ebook privi di barra laterale del catalogo."
      },
      {
        "step": 2,
        "title": "Ottimizza le regole della direzione",
        "description": "Configura strategie specificando le soglie minime della dimensione del carattere e le regole di corrispondenza."
      },
      {
        "step": 3,
        "title": "Costruisci e inietta",
        "description": "Fare clic su Esegui per eseguire il rendering dei nodi del contorno e scrivere fisicamente i segnalibri del contorno."
      }
    ],
    "useCases": [
      {
        "title": "Organizzazione manuali tecnici",
        "description": "Compila automaticamente capitoli multilivello per linee guida standard, risparmiando ore di indicizzazione manuale.",
        "icon": "tool"
      },
      {
        "title": "Preparazione della tesi",
        "description": "Inserisci segnalibri nidificati puliti che corrispondono agli esatti standard di invio accademico.",
        "icon": "graduation-cap"
      },
      {
        "title": "Ottimizzazione della navigazione degli ebook",
        "description": "Struttura le pubblicazioni di testo scansionato in capitoli leggibili per tablet o lettori mobili.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Può corrispondere ai formati di capitolo personalizzati?",
        "answer": "Sì. Puoi aggiungere modelli regex personalizzati nel pannello della barra laterale (ad esempio, `^Part\\s+\\w+`) per scegliere come target layout univoci."
      },
      {
        "question": "Ciò influenzerà la presentazione visiva della pagina?",
        "answer": "No. Lo strumento aggiunge solo un catalogo di segnalibri strutturali interni. Il testo e le risorse visive delle pagine rimangono intatti."
      },
      {
        "question": "Quanti livelli di segnalibri sono supportati?",
        "answer": "Lo strumento supporta strutture di segnalibri profondamente annidate, consentendo layout di capitoli, sezioni e sottosezioni."
      }
    ]
  },
  "batch-barcode-injector": {
    "title": "Inserisci Codici in Blocco",
    "metaDescription": "Aggiungi codici QR o codici a barre Code 128 alle pagine PDF in blocco. Regola il posizionamento per il tracciamento dei documenti, le etichette e i flussi di lavoro di stampa.",
    "keywords": [
      "inserire qr code",
      "codice a barre pdf",
      "tracciabilità documenti"
    ],
    "description": "<p>L'iniettore di precisione Batch Barcode collega il monitoraggio delle risorse digitali con l'indicizzazione dei documenti fisici.</p>\n      <p>Nei settori dello stoccaggio, della revisione dei contratti o della logistica, spesso abbiamo bisogno di stampare codici a barre univoci sulle fatture o sulle schede dei dispositivi. Questo strumento lo rende incredibilmente semplice.</p>\n      <p>Genera codici QR o codici a barre Code128 altamente leggibili e utilizza il nostro splendido spazio di lavoro di allineamento con guide laser verdi per posizionarli. Un segnale acustico di scansione pulito si attiva al momento del posizionamento, fornendo un feedback di alta qualità.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica documento",
        "description": "Trascina e rilascia PDF a una o più pagine che rappresentano accordi o liste di spedizione."
      },
      {
        "step": 2,
        "title": "Posiziona le coordinate del codice a barre",
        "description": "Imposta il tipo di codice, il valore e trascina la casella di posizionamento per specificare le coordinate."
      },
      {
        "step": 3,
        "title": "Francobolli e download",
        "description": "Fare clic su Esegui per eseguire il rendering del livello di codice sugli indici della pagina di destinazione."
      }
    ],
    "useCases": [
      {
        "title": "Tracciamento della convalida del contratto",
        "description": "Applica sull'intestazione dei contratti un codice QR univoco che mostra i dettagli anticontraffazione.",
        "icon": "file-check"
      },
      {
        "title": "Codifica liste di spedizione",
        "description": "Posiziona i codici a barre Code128 nei punti target per una rapida convalida della pistola a scansione del magazzino.",
        "icon": "truck"
      },
      {
        "title": "Tesseratura registrazione beni",
        "description": "Aggiungi codici QR di inventario che mostrano le specifiche di manutenzione sulle schede delle apparecchiature fisiche.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "I codici a barre generati sono altamente scansionabili?",
        "answer": "Sì. Incorporiamo rappresentazioni PNG ad alta risoluzione senza perdita di dati che rimangono nitide anche se stampate a dimensioni molto ridotte."
      },
      {
        "question": "Posso inserire valori univoci su ogni pagina?",
        "answer": "Attualmente, l'esecuzione batch applica lo stesso codice configurato a tutte le pagine selezionate. L'importazione Excel multivalore è pianificata in un aggiornamento futuro."
      },
      {
        "question": "Cosa rappresenta la coordinata `pt`?",
        "answer": "`pt` (Punto) è l'unità fisica standard del PDF (72 pt = 1 pollice). Le pagine A4 sono rappresentate come 595 × 842 pt."
      }
    ]
  },
  "signature-ink-optimizer": {
    "title": "Estrai Firme e Timbri",
    "metaDescription": "Estrai una firma o un timbro da una foto e rimuovi lo sfondo. Scarica un PNG trasparente da utilizzare nei documenti.",
    "keywords": [
      "estrarre firma",
      "digitalizzare timbro",
      "sfondo trasparente png"
    ],
    "description": "<p>Il Signature & Stamp Chroma Ink Optimizer funziona come un purificatore di inchiostro professionale ad alta fedeltà.</p>\n      <p>Le firme o i sigilli aziendali catturati sui telefoni spesso presentano una tinta gialla sulla carta, ombre irregolari e sgualciture sulle pagine. Incollarli direttamente sui PDF contrattuali sembra amatoriale.</p>\n      <p>Questo strumento separa il canale alfa in base alla luminanza e allo spazio colore. Sbianca completamente gli sfondi di carta mentre rende più nitido il rosso del timbro (inchiostro Chroma) e il nero della scrittura. Il risultato è un timbro PNG trasparente e di alta qualità con texture di inchiostro autentiche.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica la foto del sigillo",
        "description": "Fornisci una foto della tua firma o del timbro scattata dal telefono."
      },
      {
        "step": 2,
        "title": "Regola i cursori di pulizia",
        "description": "Sposta i cursori di contrasto e luminanza per isolare il rumore di fondo in tempo reale."
      },
      {
        "step": 3,
        "title": "Scarica firma pulita",
        "description": "Esporta come PNG trasparente pronto per essere stampato su accordi di documenti formali."
      }
    ],
    "useCases": [
      {
        "title": "Preparazione professionale della firma elettronica",
        "description": "Converti foto di firme grigie in bellissimi livelli trasparenti per firmare accordi.",
        "icon": "file-signature"
      },
      {
        "title": "Sanificazione sigilli aziendali",
        "description": "Pulisci le scansioni dei timbri fisici eliminando il rumore delle fibre di carta e preparando sigilli trasparenti e nitidi.",
        "icon": "stamp"
      },
      {
        "title": "Estrazione di disegni al tratto disegnato",
        "description": "Isola i tratti neri dai quaderni di schizzi per semplificare i flussi di lavoro di colorazione di Photoshop.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "In che modo l'estrazione autoadattativa Alpha differisce dalla normale codifica?",
        "answer": "Il chroma keying standard spesso fa sì che i dettagli del tratto distintivo sembrino squadrati e pixelati. Il nostro algoritmo isola solo il rumore di fondo bianco/giallo e smussa i bordi dell'inchiostro."
      },
      {
        "question": "Quali formati di immagine sono supportati?",
        "answer": "Supportiamo JPG, JPEG e PNG. Per ottenere i migliori risultati, scatta la tua foto personale con un'illuminazione intensa e uniforme."
      },
      {
        "question": "I dettagli della grafia verranno modificati?",
        "answer": "No. Il filtraggio dei pixel agisce sulle coordinate originali, aumentando il contrasto e mantenendo le texture dei tratti autentiche."
      }
    ]
  },
  "dead-link-debugger": {
    "title": "Ripara Link Interrotti",
    "metaDescription": "Ispeziona i collegamenti ipertestuali PDF e sostituisci le destinazioni non funzionanti o obsolete. Scansiona le annotazioni dei collegamenti e salva il documento aggiornato.",
    "keywords": [
      "link rotti pdf",
      "correggere url pdf",
      "verifica collegamenti"
    ],
    "description": "<p>Dead Link Debugger è un editor strutturale profondo che garantisce la qualità dell'interazione dei collegamenti nei file pubblicati.</p>\n      <p>Gli URL non funzionanti (404/500) all'interno di manuali, white paper o guide riducono l'autorità del brand. Questo strumento ti consente di gestire il database dei collegamenti ipertestuali senza problemi.</p>\n      <p>Analizza i dizionari <code>/Link</code> di basso livello su ciascuna pagina, li analizza e visualizza lo stato dei collegamenti in una griglia interattiva (rosso per i collegamenti non funzionanti, arancione per i reindirizzamenti). Basta digitare l'URL di reindirizzamento aggiornato e lo strumento riscrive la nuova destinazione direttamente nel flusso binario PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Fornire il documento di destinazione",
        "description": "Carica il manuale o il catalogo in PDF contenente i collegamenti per eseguire il debug."
      },
      {
        "step": 2,
        "title": "Scansiona e aggiorna",
        "description": "Lascia che il debugger estragga tutte le entità URL. Inserisci nuovi URL di reindirizzamento per gli elementi danneggiati."
      },
      {
        "step": 3,
        "title": "Salva gli aggiornamenti di reindirizzamento",
        "description": "Fare clic su Esegui per riscrivere le azioni /URI e scaricare il PDF corretto."
      }
    ],
    "useCases": [
      {
        "title": "Hotfix per i collegamenti interrotti del volantino",
        "description": "Correggi istantaneamente gli URL errati sui volantini pubblicati senza riaprire gli editor del design originale.",
        "icon": "refresh-cw"
      },
      {
        "title": "Verifica dei collegamenti bibliografici",
        "description": "Verificare i collegamenti alla bibliografia accademica nei rapporti, aggiornando i riferimenti per mantenere l'autorità.",
        "icon": "book"
      },
      {
        "title": "Aggiornamenti del rebranding aziendale",
        "description": "Aggiorna in batch i vecchi URL nei PDF aziendali quando i nomi di dominio aziendali vengono modificati.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Perché la raggiungibilità dei collegamenti non viene completamente verificata online?",
        "answer": "I browser Web applicano rigide policy CORS che bloccano il controllo diretto dei collegamenti multiorigine. Il nostro strumento elenca i collegamenti in modo chiaro e ti consente di correggerli manualmente."
      },
      {
        "question": "Ciò modificherà la rappresentazione visiva del testo sulla pagina?",
        "answer": "No. Altera solo l'azione di navigazione `/URI` sottostante. Il testo del collegamento visivo rimane invariato."
      },
      {
        "question": "Supporta la modifica dei segnalibri delle pagine interne?",
        "answer": "Questo strumento gestisce i collegamenti ipertestuali `/URI` esterni. Per la navigazione nel layout interno, utilizza il nostro strumento TOC interattivo."
      }
    ]
  },
  "interactive-toc-generator": {
    "title": "Genera Indice Interattivo",
    "metaDescription": "Aggiungi un sommario cliccabile al tuo PDF. Crea collegamenti ai capitoli e ritorna alla navigazione per facilitare la navigazione dei documenti.",
    "keywords": [
      "indice interattivo",
      "creare sommario pdf",
      "indice con link"
    ],
    "description": "<p>Il generatore di TOC interattivo introduce un'esperienza di navigazione rivoluzionaria in PDF estesi.</p>\n      <p>Sfogliare centinaia di pagine di documenti non strutturati per individuare i capitoli di destinazione è frustrante. Questo strumento introduce la <strong>compilazione bidirezionale del sommario</strong>.</p>\n      <p>Esegue la scansione delle intestazioni e genera una pagina di contenuto premium ispirata agli origami inserita subito dopo la copertina. Oltre a creare collegamenti /GoTo cliccabili per ogni riga dell'indice, inserisce un piccolo ed elegante ancoraggio sospeso \"TOC ↩\" nell'angolo di ogni pagina del capitolo di destinazione. I lettori possono spostarsi avanti e indietro istantaneamente, godendosi una navigazione simile al Web.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Fornire il documento PDF",
        "description": "Carica un report, un eBook o una proposta che necessita di un catalogo interattivo."
      },
      {
        "step": 2,
        "title": "Imposta il titolo e l'indice del sommario",
        "description": "Personalizza il titolo principale e scegli l'indice della pagina per inserire la pagina del sommario."
      },
      {
        "step": 3,
        "title": "Intreccia ancore e salva",
        "description": "Fare clic su Esegui per compilare le pagine e scrivere la navigazione a doppio collegamento."
      }
    ],
    "useCases": [
      {
        "title": "Affinamento della relazione societaria annuale",
        "description": "Inserisci una bella pagina indice dopo la copertina per consentire agli azionisti di saltare tra i grafici finanziari.",
        "icon": "file-bar"
      },
      {
        "title": "Indicizzazione tesi",
        "description": "Compilazione rapida di indici standard allineati con le regole di formattazione universitarie.",
        "icon": "bookmark"
      },
      {
        "title": "Navigazione manuale operativa",
        "description": "Aiuta i lettori del manuale a passare rapidamente dai fogli di risoluzione dei problemi al sommario principale.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Come funzionano gli ancoraggi bidirezionali?",
        "answer": "Creiamo annotazioni Link standard sulla pagina TOC mirate alle rispettive pagine; quindi incorporiamo un collegamento alla pagina del sommario in tutti i fogli dei capitoli di destinazione."
      },
      {
        "question": "L'inserimento della pagina del sommario interromperà i numeri di pagina esistenti?",
        "answer": "No. Il compilatore tiene conto dell'offset della pagina TOC appena inserita, garantendo che tutte le destinazioni di destinazione siano allineate."
      },
      {
        "question": "La pagina del sommario è valida se stampata fisicamente?",
        "answer": "Sì. Il sommario generato elenca numeri di pagina fisici puliti per guidare i lettori cartacei abilitando collegamenti cliccabili sullo schermo."
      }
    ]
  },
  "pdf-deskew-aligner": {
    "title": "Correzione Inclinazione Scansioni",
    "metaDescription": "Rileva localmente le righe inclinate e adatta il contenuto corretto alla pagina originale.",
    "keywords": [
      "raddrizzare pdf",
      "correzione storto scansione",
      "allineamento fogli"
    ],
    "description": "\n      <p>Rileva localmente le righe inclinate e adatta il contenuto corretto alla pagina originale.</p>\n      <p>Le pagine vuote, le scansioni incerte e le pagine con annotazioni restano invariate.</p>\n      <p>Le risoluzioni alte richiedono più tempo. Le pagine molto grandi usano una risoluzione di analisi ridotta.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Fornisci PDF inclinato",
        "description": "Carica qualsiasi foglio PDF contenente documenti scansionati ruotati o mal allineati."
      },
      {
        "step": 2,
        "title": "Impostazioni di allineamento",
        "description": "Risoluzione di analisi · Angolo massimo di correzione"
      },
      {
        "step": 3,
        "title": "Analizza e raddrizza",
        "description": "Scarica · PDF allineato"
      }
    ],
    "useCases": [
      {
        "title": "Archiviazione di ricevute e contratti",
        "description": "Raddrizza le scansioni rapide dei contratti mobili portatili prima di salvarle come archivi PDF digitali formali.",
        "icon": "file-text"
      },
      {
        "title": "Digitalizzazione di libri accademici",
        "description": "Disinfetta le scansioni di libri su microfilm nei punti in cui le linee di testo escono dai margini orizzontali.",
        "icon": "book"
      },
      {
        "title": "Valutazione dei compiti degli studenti",
        "description": "Correggi le istantanee dei compiti scattate dai telefoni degli studenti, rilassando gli occhi degli insegnanti che valutano.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Come viene rilevata l'inclinazione del documento?",
        "answer": "Rileva localmente le righe inclinate e adatta il contenuto corretto alla pagina originale."
      },
      {
        "question": "Questo processo ritaglierà i bordi della pagina?",
        "answer": "Rileva localmente le righe inclinate e adatta il contenuto corretto alla pagina originale."
      },
      {
        "question": "Supporta documenti pieni di diagrammi?",
        "answer": "Le pagine vuote, le scansioni incerte e le pagine con annotazioni restano invariate."
      }
    ]
  },
  "pdf-two-column-reflower": {
    "title": "Riorganizza PDF a Due Colonne",
    "metaDescription": "Ridisponi i documenti PDF a due colonne in un'unica colonna per una lettura mobile più semplice. Adatta i documenti accademici agli schermi più piccoli.",
    "keywords": [
      "due colonne a una",
      "riflusso articoli",
      "split cropbox"
    ],
    "description": "<p>L'Academic Two-Column Reflower risolve il problema più importante della ricerca digitale: leggere articoli su schermi mobili standard.</p>\n      <p>I layout a doppia colonna (utilizzati da IEEE, ACM, Nature e dai principali report) sono progettati per fogli A4. La navigazione sugli schermi del telefono o sui dispositivi Kindle richiede uno zoom costante, il trascinamento verso destra, lo scorrimento verso il basso e la panoramica verso l'alto. Interrompe completamente la comprensione della lettura.</p>\n      <p>Il nostro processore implementa un <strong>ridisposizione intelligente dei paragrafi e una scansione della barriera delle partizioni verticali</strong>. Analizza le coordinate dei caratteri per mappare i margini interni a doppia colonna, divide il layout e intreccia i segmenti verticalmente (prima la colonna sinistra, poi quella destra). Grafici, formule e titoli vengono riorganizzati perfettamente in un PDF fluido a scorrimento verticale a colonna singola.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF a doppia colonna",
        "description": "Fornire il rapporto del journal IEEE/ACM o un foglio PDF a più colonne."
      },
      {
        "step": 2,
        "title": "Ispezionare la grondaia della partizione",
        "description": "Verificare le guide rosse delle sezioni della partizione verticale. Regola i margini per evitare la sovrapposizione di elementi."
      },
      {
        "step": 3,
        "title": "Riscorri e salva",
        "description": "Fai clic su Esegui per compilare le pagine in layout fluidi e scaricarle immediatamente."
      }
    ],
    "useCases": [
      {
        "title": "Importazione di libri da e-Reader",
        "description": "Converti densi saggi a doppia colonna in comodi documenti a colonna singola corrispondenti agli schermi Kindle e Onyx.",
        "icon": "tablet"
      },
      {
        "title": "Lettura del telefono della metropolitana",
        "description": "Leggi comodamente la letteratura scientifica con i gesti di scorrimento verticale con una sola mano durante il trasporto.",
        "icon": "smartphone"
      },
      {
        "title": "Formattazione del diario d'archivio",
        "description": "Modernizzare i vecchi giornali a colonne strette in formati web leggibili a colonna singola.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "Come vengono gestiti i grafici generali e le equazioni?",
        "answer": "Il nostro motore applica il \"rilevamento degli elementi di campata\". Quando un'equazione o un diagramma supera la larghezza normale delle colonne, viene isolato come elemento a larghezza intera, mantenendo le proporzioni originali senza ritagli."
      },
      {
        "question": "Ciò modificherà la risoluzione del testo vettoriale?",
        "answer": "Niente affatto. Riscriviamo le matrici di trasformazione degli oggetti di testo PDF a livello dell'albero degli oggetti invece di rasterizzarli, il che significa che il testo rimane vettoriale al 100% e completamente selezionabile."
      },
      {
        "question": "Funziona su documenti di immagini scansionate?",
        "answer": "Per i PDF piatti basati su immagini, consigliamo vivamente di eseguire il nostro strumento OCR prima di eseguire il processo di ridisposizione."
      }
    ]
  },
  "pdf-page-resizer-uniform": {
    "title": "Uniforma Dimensioni Pagine",
    "metaDescription": "Ridimensiona le pagine PDF miste a una dimensione uniforme. Normalizza le pagine A4, A3 e Letter con ridimensionamento proporzionale e margini centrati.",
    "keywords": [
      "uniformare pagine",
      "ridimensionare pdf a4",
      "centrare pagine pdf"
    ],
    "description": "<p>Il ridimensionatore PDF multiformato è lo standardizzatore definitivo per documenti aziendali disordinati e non corrispondenti.</p>\n      <p>La combinazione di fatture, contratti e grafici supplementari spesso dà come risultato un PDF contenente enormi pagine di registro in formato A3, accordi standard in formato A4 e buste in formato Lettera. Sfogliarli crea molta distrazione e inviarli alle stampanti dell'ufficio fisico spesso causa errori di inceppamento dovuti alla mancata corrispondenza delle dimensioni.</p>\n      <p>Questo strumento riscrive le griglie di basso livello <code>/MediaBox</code> e <code>/CropBox</code> su ogni pagina. Mappa le larghezze e le altezze esistenti, ridimensiona proporzionalmente le pagine originali per corrispondere alle preimpostazioni di destinazione (ad esempio A4 standard) e introduce margini circostanti eleganti e coerenti, rendendo l'intero file incredibilmente rifinito.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Fornisci PDF di dimensioni miste",
        "description": "Carica un documento PDF unito contenente dimensioni di pagina non corrispondenti e disordinate."
      },
      {
        "step": 2,
        "title": "Scegli la preimpostazione di destinazione",
        "description": "Seleziona la dimensione uniforme di destinazione (ad esempio A4, Lettera, A3) e attiva/disattiva le modalità di scala."
      },
      {
        "step": 3,
        "title": "Allinea e scarica",
        "description": "Fai clic su Esegui per attivare l'allineamento del foglio 3D, scaricando un PDF splendidamente standardizzato."
      }
    ],
    "useCases": [
      {
        "title": "Proposte RFP aziendali",
        "description": "Standardizzare i certificati di qualificazione scansionati e i fogli di gara A4 prima della stampa fisica.",
        "icon": "file-text"
      },
      {
        "title": "Integrazione del grafico finanziario",
        "description": "Ridimensiona i flussi di cassa finanziari A3 in pagine A4 ordinate, preservando gli standard di stampa.",
        "icon": "layout"
      },
      {
        "title": "Standardizzazione del margine del libro",
        "description": "Forza le pagine del libro scansionato leggermente diverse in una dimensione assolutamente uniforme per una lettura confortevole.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Ciò deformerà i miei contenuti?",
        "answer": "Mai. Supportiamo sia \"Contain\" (ridimensionamento proporzionale con barre bianche) che \"Cover\" (ritaglio centrato). La modalità Contenimento predefinita preserva le proporzioni, prevenendo la distorsione."
      },
      {
        "question": "I moduli e le annotazioni esistenti rimarranno cliccabili?",
        "answer": "Sì. L'algoritmo mappa i fattori di scala sugli array di coordinate di annotazione, sulle caselle di collegamento di ridimensionamento, sui limiti dei segni e sugli input per allinearli perfettamente dopo il ridimensionamento."
      },
      {
        "question": "C'è un limite al numero di pagine che posso ridimensionare?",
        "answer": "No. Poiché tutte le operazioni vengono eseguite localmente nella sandbox del tuo client utilizzando JavaScript nativo, puoi elaborare PDF estesi contenenti centinaia di pagine in pochi secondi."
      }
    ]
  },
  "handwriting-ink-contrast-booster": {
    "title": "Migliora Contrasto Scrittura",
    "metaDescription": "Migliora il contrasto della grafia e della firma nelle immagini scansionate. Riduci il rumore di fondo della carta e facilita la lettura dell'inchiostro.",
    "keywords": [
      "contrastare firme",
      "sbiancare foglio scansione",
      "inchiostro nitido"
    ],
    "description": "<p>Handwriting Ink Contrast Booster è un salvatore per la digitalizzazione degli accordi firmati e degli archivi storici dei manoscritti.</p>\n      <p>Le scansioni di documenti firmati a mano spesso appaiono opache a causa del riflesso grigio del vetro dello scanner, della tinta gialla della carta o dell'inchiostro sbiadito. La ristampa o la fotocopia di questi file produce firme sfocate e illeggibili. Gli strumenti di contrasto tradizionali scuriscono l'intero sfondo, peggiorando il layout.</p>\n      <p>Questo strumento utilizza l'**Equalizzazione adattiva dell'istogramma (CLAHE) con contrasto limitato e la separazione dei colori basata sulla tonalità**. In un processo Canvas locale sicuro, isola i tratti della grafia (sia neri che blu) dalla pergamena dello sfondo, sbianca completamente le rughe d'ombra e infonde agli inchiostri sbiaditi un contrasto profondo e saturo, lasciando i tuoi documenti incredibilmente nitidi e puliti.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importa documento firmato a mano",
        "description": "Fornisci un PDF contenente firme sbiadite, diari scritti a mano o schizzi."
      },
      {
        "step": 2,
        "title": "Configura il filtro dell'inchiostro",
        "description": "Seleziona il profilo colore da isolare (ad esempio inchiostro blu, inchiostro nero o entrambi) e regola la nitidezza."
      },
      {
        "step": 3,
        "title": "Contrasta e scarica",
        "description": "Fai clic su Esegui per tracciare i colori con un effetto scanner radar e scaricare il PDF purificato."
      }
    ],
    "useCases": [
      {
        "title": "Riparazione dei contratti eseguiti",
        "description": "Ripara gli accordi scansionati male, affinando le firme e sbiancando lo sfondo della carta riportandolo al bianco puro A4.",
        "icon": "file-check"
      },
      {
        "title": "Archivio dei manoscritti",
        "description": "Digitalizza diari o diari scritti, estraendo tratti neri chiari e cancellando le macchie legate all'età.",
        "icon": "book"
      },
      {
        "title": "Restauro del registro storico",
        "description": "Ripristina i deboli dettagli dell'inchiostro su vecchi registri d'archivio, salvando preziose coordinate scritte a mano.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "In cosa differisce dalla normale conversione in scala di grigi?",
        "answer": "Scala di grigi converte le ombre della carta in valori di grigio. Il nostro algoritmo adattivo separa la luminanza dello sfondo e isola gli \"spettri dell'inchiostro\" caratteristici, purificando lo sfondo fino al bianco assoluto e lasciando i bordi del tratto nitidi."
      },
      {
        "question": "Perderò la trama del tratto della scrittura a mano?",
        "answer": "No. L'algoritmo CLAHE funziona a livello sub-pixel, preservando la pressione naturale del tratto della penna, lo sbiadimento dell'inchiostro e gli spessori dinamici delle linee."
      },
      {
        "question": "Posso mantenere i timbri aziendali rossi?",
        "answer": "Sì. Abilitando la \"Preservazione inchiostro cromatico\", il booster sbianca lo sfondo della carta e scurisce la scrittura, mantenendo i colori brillanti dei sigilli rossi e delle firme con inchiostro blu."
      }
    ]
  },
  "pdf-spine-bookbinder": {
    "title": "Calcola Spessore Dorso",
    "metaDescription": "Calcola la larghezza del dorso del libro dal numero di pagine e dal peso della carta. Genera un modello di copertina stampabile con linee di piegatura del dorso.",
    "keywords": [
      "calcolo dorso libro",
      "rilegatura brossura",
      "copertina con pieghe"
    ],
    "description": "<p>PDF Spine Bookbinder è un salvatore di prestampa per designer, autori autopubblicati e team di offerenti commerciali.</p>\n      <p>Quando si compilano cataloghi di libri spessi, proposte di offerta o elenchi annuali, la rilegatura a colla (rilegatura con colla) richiede una copertina con coordinate precise del dorso. Se la larghezza del dorso è spostata anche di 1 mm, la copertina rilegata si deformerà, si sposterà o si sgualcirà. Il calcolo del conteggio delle pagine rispetto alla grammatura della carta è complesso e soggetto a errori.</p>\n      <p>Questo strumento utilizza una <strong>libreria carta-spessore GSM modellata fisicamente</strong>. Basta inserire il numero di pagine del PDF e selezionare il tipo di carta (ad esempio 80 GSM offset, 100 GSM lucido). Il motore calcola la larghezza del dorso fino ai micrometri e compila una copertina PDF extra larga, pronta per la stampa, completa di alette fronte/retro standard e pieghe precise con segni di piega.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Imposta pagine e tipo di supporto",
        "description": "Immettere il conteggio delle pagine del documento e selezionare le specifiche dello stock di carta di destinazione."
      },
      {
        "step": 2,
        "title": "Inserisci il testo del dorso",
        "description": "Inserisci i titoli dei libri, i dettagli dell'autore e personalizza gli sfondi del dorso/copertina."
      },
      {
        "step": 3,
        "title": "Anteprima ed esportazione 3D",
        "description": "Gira e controlla la copertina del tuo libro in un raccoglitore 3D interattivo. Esporta PDF vettoriale ad alta risoluzione."
      }
    ],
    "useCases": [
      {
        "title": "Proposte di offerte spesse",
        "description": "Progetta copertine professionali con allineamenti precisi delle pieghe del dorso per offerte spesse e tenere.",
        "icon": "layers"
      },
      {
        "title": "Rilegatura con copertina rigida di tesi",
        "description": "Mappa la larghezza perfetta del layout della colonna vertebrale per tesi di laurea magistrale/dottorato.",
        "icon": "award"
      },
      {
        "title": "Copertine di romanzi autopubblicate",
        "description": "Calcola facilmente la larghezza del dorso del libro prima di inviare i file ai servizi di pubblicazione di stampa su richiesta.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "Quanto è accurato il calcolo dello spessore della carta GSM?",
        "answer": "Altamente accurato. La nostra libreria fisica corrisponde alle medie del settore (ad esempio 70 GSM = 0,09 mm, 80 GSM = 0,10 mm, 150 GSM lucido = 0,125 mm). Includiamo anche un interruttore \"Stampa fronte-retro\" per dimezzare automaticamente i calcoli."
      },
      {
        "question": "Le copertine esportate sono pronte per la stampa diretta?",
        "answer": "Sì. I file sono PDF vettoriali perfetti con segni di registrazione standard, barre di colore e guide del dorso, pienamente compatibili con le macchine da stampa commerciali offset e digitali."
      },
      {
        "question": "Posso caricare un'immagine di sfondo che copre tutta la colonna vertebrale?",
        "answer": "Sì. Puoi caricare layout personalizzati e il nostro compositore avvolgerà e allineerà automaticamente la grafica lungo le pieghe del dorso."
      }
    ]
  },
  "pdf-signature-anchor-helper": {
    "title": "Guida Posizionamento Firma",
    "metaDescription": "Posiziona le guide per la firma sulle pagine PDF utilizzando le coordinate X/Y. Visualizza l'anteprima delle loro posizioni prima di salvare il documento aggiornato.",
    "keywords": [
      "ancoraggio firma",
      "invito alla firma",
      "navigazione contratti"
    ],
    "description": "<p>PDF Signature Guide Injector garantisce flussi di lavoro di firma puliti e privi di errori per accordi multipagina.</p>\n      <p>Quando si inviano accordi NDA di più pagine, rendiconti finanziari o contratti di locazione commerciale, i clienti spesso perdono caselle di firma fondamentali, richiedendo infiniti cicli di email avanti e indietro e transazioni commerciali ritardate.</p>\n      <p>Il nostro strumento utilizza la <strong>mappatura semantica regex naturale</strong>. Esegue la scansione della mappa caratteri PDF per individuare termini come <code>Firma:</code>, <code>签字：</code>, <code>Testimone:</code> o <code>签署日期：</code>. Quindi sfrutta <code>pdf-lib</code> per inserire annotazioni di collegamento interattive PDF standard. Quando vengono aperti in qualsiasi lettore standard, i clienti vedono frecce lampeggianti con bordi al neon che li guidano immediatamente alle caselle corrette, rendendo la firma infallibile.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Contratto commerciale di importazione",
        "description": "Carica il contratto PDF o la NDA che necessita delle coordinate della firma."
      },
      {"step":2,"title":"X / Y","description":"Fai clic sull’anteprima reale del PDF oppure inserisci le coordinate X e Y della pagina selezionata."},
      {"step":3,"title":"Elabora","description":"Elabora il file, controlla il risultato e scarica il PDF."},
    ],
    "useCases": [
      {
        "title": "Accordi NDA aziendali",
        "description": "Inserisci guide chiare e lampeggianti accanto ai blocchi di segnaletica per evitare che i dipendenti in fase di onboarding manchino di clausole.",
        "icon": "file-text"
      },
      {
        "title": "Contratti di locazione commerciale",
        "description": "Guida più cofirmatari attraverso documenti immobiliari multipagina con schede dai colori personalizzati.",
        "icon": "users"
      },
      {
        "title": "Firme degli ordini di acquisto",
        "description": "Sovrapponi puntatori interattivi su fatture e ordini di acquisto per accelerare i cicli di approvazione contabile.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Queste guide appariranno quando stamperò il contratto?",
        "answer": "No. Le ancore vengono inserite con il flag standard PDF `Printable` impostato su false. Vengono visualizzati magnificamente sugli schermi di computer/tablet ma rimangono completamente invisibili una volta stampati."
      },
      {
        "question": "I clienti possono passare facilmente da un campo firma all'altro?",
        "answer": "Sì. Tessiamo ancore interne bidirezionali. I clienti possono fare clic sul segnalibro \"Guida alla firma\" per passare automaticamente e istantaneamente allo slot di firma vuoto successivo."
      },
      {
        "question": "Funziona su documenti di immagini scansionate?",
        "answer": "Sì. Oltre a cercare flussi di testo, il nostro parser di layout spaziale stima le linee della firma in base a regole orizzontali e riquadri di delimitazione sui fogli scansionati."
      }
    ]
  },
  "pdf-lossless-slicer": {
    "title": "Ritaglio Planimetrie senza Perdite",
    "metaDescription": "Ritaglia una regione di un disegno, mappa o grafico PDF utilizzando coordinate precise. Conserva il contenuto vettoriale nel PDF esportato.",
    "keywords": [
      "ritagliare planimetrie",
      "ritaglio vettoriale",
      "cropbox disegni"
    ],
    "description": "<p>Il PDF Lossless Drawing Slicer è uno strumento chirurgico ad alta precisione creato per architetti, ingegneri e disegnatori di mappe.</p>\n      <p>Quando si estrae una specifica sala pompe o un nucleo di chip da un enorme progetto di ingegneria CAD o da una mappa geografica in formato PDF, gli screenshot tradizionali restituiscono testo pixelato e sfocato. I normali strumenti di ritaglio posizionano semplicemente una maschera sul foglio, il che significa che l'enorme file da 100 MB rimane enorme e il contenuto nascosto può ancora essere estratto.</p>\n      <p>Questo strumento modifica le matrici della pagina <code>/MediaBox</code>, <code>/CropBox</code> e <code>/BleedBox</code> a livello dell'albero degli oggetti. Isola fisicamente i nodi vettoriali all'esterno della regione selezionata, mantenendo l'area di destinazione perfetta per il vettore al 100% (consentendo un ingrandimento zoom infinito) eliminando al contempo percorsi e immagini fuori schermo ridondanti per ridurre le dimensioni del file del 95%!</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importa un progetto di grandi dimensioni",
        "description": "Carica il CAD ricco di vettori, la mappa GIS o il PDF del catalogo ad alta risoluzione."
      },
      {"step":2,"title":"Rettangolo di ritaglio","description":"Inserisci X, Y, larghezza e altezza, quindi controlla la pagina selezionata nell’anteprima."},
      {"step":3,"title":"Elabora","description":"Elabora il file, controlla il risultato e scarica il PDF."},
    ],
    "useCases": [
      {
        "title": "Isolamento del progetto CAD",
        "description": "Ritaglia un dettaglio del \"sistema di raffreddamento\" da un enorme progetto di planimetria da 100 MB da condividere con i subappaltatori.",
        "icon": "crop"
      },
      {
        "title": "Cattura mappa GIS",
        "description": "Estrai un blocco senza perdita di dati di una mappa stradale della città per una diapositiva di presentazione senza perdita di risoluzione.",
        "icon": "map"
      },
      {
        "title": "Tracciamento manuale delle illustrazioni",
        "description": "Figure di libri scientifici isolate senza perdita di dati da incorporare in documenti accademici di alta qualità.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "In cosa differisce dal ritaglio standard?",
        "answer": "Il ritaglio standard regola semplicemente i limiti visivi; i vettori nascosti rimangono nel file. Il nostro filtro dei dati taglia i percorsi vettoriali sovrapposti ed elimina le immagini XObject fuori dai limiti, garantendo l'isolamento completo dei dati e la massima compressione dei file."
      },
      {
        "question": "I livelli di testo rimarranno ricercabili?",
        "answer": "Sì. Tutti i caratteri di testo che rientrano nel limite suddiviso rimangono completamente trasparenti da vettore, ricercabili e selezionabili."
      },
      {
        "question": "Posso esportare regioni tagliate in SVG?",
        "answer": "L'output è un PDF vettoriale standardizzato. Puoi passare il file risultante al nostro strumento PDF-to-SVG per convertirlo in un formato di grafica vettoriale scalabile sul web."
      }
    ]
  },
  "pdf-scratchpad-canvas": {
    "title": "Quaderno Appunti Quadricolato",
    "metaDescription": "Aggiungi margini di griglia, righe o note di Cornell alle pagine PDF. Crea spazio di scrittura extra per appunti di studio, calcoli e preparazione agli esami.",
    "keywords": [
      "estendere foglio pdf",
      "bordo appunti",
      "quaderno a quadretti"
    ],
    "description": "<p>PDF Scratchpad Margin Extender è un compagno di studio essenziale su misura per studenti, ricercatori e candidati agli esami professionali.</p>\n      <p>Quando si risolvono prove pratiche, si rivedono diapositive o si leggono libri di testo accademici su tablet digitali, i margini delle pagine sono incredibilmente stretti. L'apertura di un'app per le note separata ti costringe a cambiare costantemente schermata, interrompendo la messa a fuoco. L'aggiunta di fogli bianchi piatti ti impedisce di visualizzare il problema e il tuo calcolo fianco a fianco.</p>\n      <p>Questo strumento riscrive le dimensioni della larghezza o dell'altezza della pagina nella struttura del PDF di basso livello, espandendo i margini <code>/MediaBox</code> di 200~250 pt a destra o in basso. Quindi sovrappone linee di griglia pulite, righe di quaderni a righe universitari o layout di Cornell nei nuovi margini, offrendo tavole da disegno adiacenti e dedicate accanto a ogni singola diapositiva o domanda!</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica le diapositive delle lezioni",
        "description": "Fornisci il libro di testo in PDF, le diapositive o i documenti di studio."
      },
      {
        "step": 2,
        "title": "Scegli il margine e lo stile della griglia",
        "description": "Scegli la direzione di espansione del margine (ad esempio, lato destro per i tablet) e seleziona il modello di griglia."
      },
      {
        "step": 3,
        "title": "Cuci tela e scarica",
        "description": "Fai clic su Esegui per generare pagine espanse complete di bellissime griglie di bozze."
      }
    ],
    "useCases": [
      {
        "title": "Preparazione all'esame STEM",
        "description": "Cuci i margini della griglia accanto alle domande dell'esame di matematica e fisica, risolvendo le derivazioni proprio accanto alla domanda.",
        "icon": "edit-3"
      },
      {
        "title": "Analisi della lettura del linguaggio",
        "description": "Aggiungi margini a righe del taccuino accanto ai saggi in lingua straniera per l'analisi del vocabolario e la traduzione dei paragrafi.",
        "icon": "book"
      },
      {
        "title": "Verifica del progetto architettonico",
        "description": "Aggiungi spazi di margine vuoti sul lato dei progetti per calcoli tecnici e commenti di revisione del cliente.",
        "icon": "columns"
      }
    ],
    "faq": [
      {
        "question": "Questo schiaccerà il mio testo PDF originale?",
        "answer": "Niente affatto. L'algoritmo espande la dimensione della carta verso l'esterno. Il contenuto originale mantiene il layout, i caratteri e la risoluzione; allunghiamo semplicemente lo spazio bianco sui bordi e disegniamo delle griglie su di essi."
      },
      {
        "question": "Le penne standard per la scrittura a mano possono scrivere sul blocco note?",
        "answer": "Sì. Le nuove pagine PDF sono compilate in modo nativo. Le popolari applicazioni per prendere appunti su tablet come Goodnotes, Notability, Xodo e Acrobat possono scrivere, evidenziare e scarabocchiare direttamente nel nuovo spazio della griglia."
      },
      {
        "question": "Le linee della griglia sono scure e distraggono?",
        "answer": "Abbiamo selezionato tre colori delicati e gradevoli alla vista (blu-grigio tenue, marrone caldo e verde brillante). Le linee sono sottili e delicate e fungono da guide senza distrarti dal contenuto della pagina originale."
      }
    ]
  },
  "photo-tiling-prepress": {
    "title": "Impaginazione Foto Tessera",
    "metaDescription": "Ritaglia e organizza le foto di documenti d'identità o passaporti su carta fotografica standard. Aggiungi segni di ritaglio di stampa per facilitare il taglio del foglio finito.",
    "keywords": [
      "fototessera stampa",
      "impaginazione foto",
      "crocini di taglio"
    ],
    "description": "<p>Lo strumento Prepress Photo Tiling è un compilatore di layout conveniente e ad alta precisione creato per schede di registrazione personali e studi fotografici.</p>\n      <p>La stampa di foto tessera, fototessere o patenti di guida a casa spesso comporta dimensioni fisiche errate (spesso stampate troppo grandi o troppo piccole), carta fotografica sprecata e allineamenti non uniformi. Rivolgersi a tipografie professionali per realizzare layout richiede molto tempo.</p>\n      <p>Il nostro strumento integra un <strong>motore di matrice di prestampa di precisione</strong>. Accetta fotografie di ritratti o scansioni di carte d'identità, le ritaglia in dimensioni standard (ad esempio specifiche del passaporto da 1\" o 2\"), calcola il numero ottimale di tessere per carte fotografiche standard (ad esempio fogli da 5\" o 6\") e inserisce linee di ritaglio nitide in micro-pixel per un facile taglio fisico, generando un PDF stampabile perfetto.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importa foto tessera",
        "description": "Carica l'istantanea del ritratto della fotocamera o le immagini della carta d'identità fronte-retro."
      },
      {
        "step": 2,
        "title": "Configura carta e layout",
        "description": "Seleziona il formato carta di stampa target (ad esempio 6\") e scegli i layout della griglia (ad esempio 8 copie di foto da 1\")."
      },
      {
        "step": 3,
        "title": "Affianca ed esporta",
        "description": "Ispeziona i riquadri fotografici sulla nostra griglia ed esporta il PDF stampabile ad alta DPI."
      }
    ],
    "useCases": [
      {
        "title": "Foto di passaporti self-service",
        "description": "Disponi i tuoi ritratti passaporto scattati con il cellulare su un'unica griglia di carta fotografica da 6\" e stampa 8 copie per una frazione dei costi standard dello studio.",
        "icon": "user"
      },
      {
        "title": "Copia fronte-retro della carta d'identità",
        "description": "Formatta ordinatamente le scansioni fronte e retro delle carte d'identità nazionali su fogli standard Lettera/A4 per le presentazioni ufficiali.",
        "icon": "file-text"
      },
      {
        "title": "Fogli di miniature di foto in batch",
        "description": "Affianca più ricordi di famiglia o progetta istantanee su un foglio di carta quadrettata per stampare in modo efficiente provini a contatto in miniatura.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Le dimensioni stampate corrisponderanno alle specifiche ufficiali di 1\" o 2\"?",
        "answer": "Sì. Il motore della griglia misura utilizzando punti PDF standard (72 pt = 1 pollice), rendendo le foto da 1\" esattamente a 25x35 mm e le foto da 2\" a 35x49 mm. Assicurati di stampare a \"Dimensioni reali/Scala 100%\" nelle impostazioni della stampante."
      },
      {
        "question": "Posso unire foto da 1\" e 2\" su un unico foglio?",
        "answer": "Sì. Forniamo preimpostazioni di layout ibride curate (ad esempio \"4 copie da 1\" + 4 copie da 2\"\"), che ti consentono di massimizzare lo spazio sulla carta fotografica."
      },
      {
        "question": "Il modello include le margini al vivo?",
        "answer": "Sì. I layout di prestampa riservano un margine di sicurezza per la stampa standard di 4 mm sui bordi della carta, impedendo ai rulli fisici della stampante di ritagliare le foto."
      }
    ]
  },
  "find-and-redact": localizedRedactionContent('it', 'find-and-redact', "Trova e Oscura")
,
"redact-pdf": localizedRedactionContent('it', 'redact-pdf', "Oscura PDF")
};
