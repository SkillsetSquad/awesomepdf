import { localizedRedactionContent } from './redaction-locales';
/** Romanian descriptions, instructions, use cases and FAQs for every PDF tool. */
import type { ToolContent } from '@/types/tool';

export const toolContentRo: Record<string, ToolContent> = {
  "pdf-multi-tool": {
    "title": "Instrument multiplu PDF",
    "metaDescription": "Editor PDF all-in-one: îmbinați, împărțiți, organizați, ștergeți, rotiți și extrageți pagini într-un singur instrument puternic.",
    "keywords": [
      "instrument multiplu pdf",
      "editor pdf",
      "îmbinare pdf",
      "pdf împărțit",
      "organiza pdf",
      "totul într-un singur pdf"
    ],
    "description": "<p>Instrumentul multiplu PDF este soluția dumneavoastră cuprinzătoare pentru toate sarcinile de gestionare a paginilor PDF. Acest instrument puternic all-in-one combină mai multe operații PDF într-o singură interfață intuitivă, economisind timp și efort.</p>\n      <p>Fie că trebuie să îmbinați mai multe documente, să împărțiți un PDF mare în fișiere mai mici, să reorganizați pagini, să ștergeți conținut nedorit, să rotiți pagini sau să extrageți anumite secțiuni, acest instrument se ocupă de totul fără a comuta între diferite aplicații.</p>\n      <p>Toată procesarea are loc direct în browserul dvs., asigurându-vă că documentele dvs. rămân private și securizate. Nu sunt încărcate fișiere pe niciun server.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF în zona de încărcare sau faceți clic pentru a căuta și selecta fișiere de pe dispozitiv."
      },
      {
        "step": 2,
        "title": "Alegeți operațiunea dvs",
        "description": "Selectați dintre operațiunile disponibile: îmbinați, împărțiți, organizați, ștergeți paginile, rotiți, adăugați pagini goale sau extrageți pagini."
      },
      {
        "step": 3,
        "title": "Configurați Opțiuni",
        "description": "Ajustați setările specifice operațiunii alese, cum ar fi intervalele de pagini, unghiurile de rotație sau ordinea de îmbinare."
      },
      {
        "step": 4,
        "title": "Procesați și descărcați",
        "description": "Faceți clic pe butonul de proces și descărcați PDF-ul modificat după finalizarea operațiunii."
      }
    ],
    "useCases": [
      {
        "title": "Pregătirea documentelor",
        "description": "Pregătiți documentele pentru trimitere eliminând paginile inutile, reordonând conținutul și combinând mai multe fișiere.",
        "icon": "file-check"
      },
      {
        "title": "Raport Adunare",
        "description": "Combinați mai multe secțiuni de raport, adăugați pagini de copertă și organizați capitolele într-un singur document profesional.",
        "icon": "book-open"
      },
      {
        "title": "Gestionarea arhivelor",
        "description": "Împărțiți fișierele mari de arhivă în secțiuni gestionabile, extrageți pagini relevante și reorganizați documentele istorice.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Câte PDF-uri pot procesa simultan?",
        "answer": "Puteți încărca și procesa până la 10 fișiere PDF simultan, cu o dimensiune maximă combinată de 500 MB."
      },
      {
        "question": "Vor fi păstrate marcajele mele?",
        "answer": "Da, la îmbinarea PDF-urilor, instrumentul păstrează marcajele existente și, opțional, le poate combina într-o structură unificată de marcaje."
      },
      {
        "question": "Există o limită de pagini?",
        "answer": "Nu există o limită strictă de pagini. Instrumentul poate gestiona documente cu sute de pagini, deși procesarea fișierelor foarte mari poate dura mai mult."
      }
    ]
  },
  "merge-pdf": {
    "title": "Combină PDF",
    "metaDescription": "Combinați mai multe fișiere PDF într-un singur document. Fuziune PDF online gratuită cu reordonare prin glisare și plasare.",
    "keywords": [
      "îmbinare pdf",
      "combina pdf",
      "alăturați-vă la pdf",
      "pdf fuziune",
      "concatenează pdf"
    ],
    "description": "<p>Merge PDF vă permite să combinați mai multe documente PDF într-un singur fișier rapid și ușor. Indiferent dacă consolidați rapoarte, combinați documente scanate sau asamblați o prezentare, acest instrument face procesul fără probleme.</p>\n      <p>Pur și simplu încărcați fișierele, aranjați-le în ordinea dorită folosind glisare și plasare și îmbinați-le într-un singur document coerent. Instrumentul păstrează calitatea fișierelor originale și, opțional, poate menține marcaje din fiecare document sursă.</p>\n      <p>Toate îmbinările au loc local în browserul dvs., asigurând confidențialitate completă pentru documentele dvs. sensibile.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișiere PDF",
        "description": "Trageți și plasați mai multe fișiere PDF în zona de încărcare sau faceți clic pentru a selecta fișiere de pe dispozitiv."
      },
      {
        "step": 2,
        "title": "Aranjați comanda",
        "description": "Trageți și plasați miniaturile fișierelor pentru a le aranja în ordinea dorită."
      },
      {
        "step": 3,
        "title": "Îmbinați și descărcați",
        "description": "Faceți clic pe butonul Merge pentru a combina toate fișierele, apoi descărcați PDF-ul îmbinat."
      }
    ],
    "useCases": [
      {
        "title": "Combinați rapoarte",
        "description": "Îmbinați rapoartele lunare sau trimestriale într-un singur document anual pentru distribuție și arhivare mai ușoare.",
        "icon": "file-text"
      },
      {
        "title": "Asamblați portofolii",
        "description": "Combinați mai multe documente de proiect, certificate sau mostre de lucru într-un portofoliu profesional.",
        "icon": "briefcase"
      },
      {
        "title": "Consolidați facturile",
        "description": "Îmbinați mai multe facturi sau chitanțe într-un singur document în scopuri contabile și de păstrare a evidenței.",
        "icon": "receipt"
      }
    ],
    "faq": [
      {
        "question": "Câte PDF-uri pot îmbina?",
        "answer": "Puteți îmbina până la 100 de fișiere PDF simultan, cu o dimensiune totală combinată de până la 500 MB."
      },
      {
        "question": "PDF-ul îmbinat va menține calitatea originală?",
        "answer": "Da, procesul de îmbinare păstrează calitatea originală a tuturor documentelor fără nicio compresie sau pierdere de calitate."
      },
      {
        "question": "Pot îmbina fișiere PDF protejate cu parolă?",
        "answer": "PDF-urile protejate prin parolă trebuie mai întâi decriptate. Utilizați instrumentul nostru Decriptare PDF pentru a elimina parola înainte de îmbinare."
      }
    ]
  },
  "rotate-custom": {
    "title": "Rotiți după grade personalizate",
    "metaDescription": "Rotiți paginile PDF cu orice unghi. Rotire personalizată precisă pentru îndreptarea documentelor scanate.",
    "keywords": [
      "rotiți unghiul personalizat pdf",
      "îndreptați pdf",
      "deskew pdf",
      "pdf rotație personalizată"
    ],
    "description": "<p>Rotirea după grade personalizate vă oferă un control precis asupra orientării paginii PDF. Spre deosebire de instrumentele standard de rotație care acceptă doar incremente de 90 de grade, acest instrument vă permite să rotiți paginile după orice unghi specific.</p>\n      <p>Perfect pentru a îndrepta documentele scanate care au fost alimentate ușor oblic sau pentru a ajusta diagramele și diagramele la orientarea lor corectă. Puteți corecta pagini individuale sau puteți aplica aceeași rotație întregului document.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private, în timp ce obțineți o aliniere perfectă.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF",
        "description": "Încărcați fișierul PDF care conține paginile pe care trebuie să le rotiți."
      },
      {
        "step": 2,
        "title": "Setați unghiul de rotație",
        "description": "Introduceți gradul exact de rotație pentru fiecare pagină sau setați un unghi de lot pentru toate paginile."
      },
      {
        "step": 3,
        "title": "Previzualizați și ajustați",
        "description": "Utilizați previzualizarea în timp real pentru a vă asigura că paginile sunt aliniate perfect."
      },
      {
        "step": 4,
        "title": "Aplicați și descărcați",
        "description": "Faceți clic pe Rotire pentru a aplica modificările și a descărca PDF-ul corectat."
      }
    ],
    "useCases": [
      {
        "title": "Documente scanate",
        "description": "Îndreptați paginile scanate care au fost introduse în scaner într-un unghi.",
        "icon": "scan"
      },
      {
        "title": "Desene tehnice",
        "description": "Reglați cu precizie orientarea diagramelor tehnice și a planurilor.",
        "icon": "ruler"
      },
      {
        "title": "Aspecte creative",
        "description": "Creați machete unice prin rotirea paginilor în unghiuri artistice specifice.",
        "icon": "pen-tool"
      }
    ],
    "faq": [
      {
        "question": "Pot să mă rotesc cu zecimale, de exemplu, 45,5 grade?",
        "answer": "În prezent, instrumentul acceptă grade întregi, dar lucrăm la activarea preciziei zecimale."
      },
      {
        "question": "Acest lucru afectează conținutul paginii?",
        "answer": "Conținutul este rotit vizual. Dimensiunea paginii este ajustată automat pentru a se potrivi cu conținutul rotit."
      },
      {
        "question": "Pot roti doar o pagină?",
        "answer": "Da, puteți seta un unghi personalizat de rotație pentru orice pagină individuală, lăsând altele neschimbate."
      }
    ]
  },
  "grid-combine": {
    "title": "Grid Combine PDF",
    "metaDescription": "Combinați mai multe fișiere PDF pe pagini individuale cu un aspect flexibil al grilei. Aranjați 2, 4, 6, 9 sau mai multe PDF-uri pe pagină, cu margini și spațiere.",
    "keywords": [
      "combina grilă",
      "îmbinați grila pdf",
      "colaj pdf",
      "mai multe pdf-uri o pagină",
      "pdf n-up",
      "combinați grila PDF-uri"
    ],
    "description": "<p>Instrumentul Grid Combine oferă o modalitate unică de a îmbina mai multe fișiere PDF separate pe pagini individuale. Spre deosebire de instrumentul standard „Merge PDF” care adaugă pur și simplu pagini sau de instrumentul „N-Up” care rearanjează paginile dintr-un singur document, Grid Combine preia mai multe fișiere de intrare și le aranjează unul lângă altul într-un aspect de grilă personalizabil.</p>\n      <p>Puteți alege dintre diferite configurații ale grilei, cum ar fi 2x1, 2x2, 3x3 etc. Acest lucru este perfect pentru a compara mai multe documente, pentru a crea fișe din diferite surse sau pentru a tipări versiuni compacte ale mai multor fișiere.</p>\n      <p>Personalizați rezultatul cu control asupra dimensiunii paginii, orientării, marginilor, spațierii și chenarelor. Toate procesările au loc local în browserul dvs. pentru confidențialitate maximă.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișiere PDF",
        "description": "Încărcați două sau mai multe fișiere PDF pe care doriți să le combinați. Le puteți rearanja în ordinea dorită."
      },
      {
        "step": 2,
        "title": "Alegeți Aspect grilă",
        "description": "Selectați aspectul grilăi dorit (de exemplu, 2x2 pentru 4 fișiere pe pagină, 3x3 pentru 9 fișiere pe pagină)."
      },
      {
        "step": 3,
        "title": "Personalizați aspectul",
        "description": "Ajustați setări precum dimensiunea paginii (A4, Letter), orientarea, distanța dintre elemente și chenarele."
      },
      {
        "step": 4,
        "title": "Combinați și descărcați",
        "description": "Faceți clic pe „Combină PDF-uri” pentru a genera noul document de aspect al grilei și a descărca rezultatul."
      }
    ],
    "useCases": [
      {
        "title": "Comparație vizuală",
        "description": "Plasați diferite versiuni ale unui design sau document una lângă alta pe o singură pagină pentru o comparație ușoară.",
        "icon": "layout-grid"
      },
      {
        "title": "Imprimarea documentelor",
        "description": "Combinați mai multe documente scurte sau diapozitive pe o singură coală de hârtie pentru a economisi costurile de imprimare.",
        "icon": "printer"
      },
      {
        "title": "Crearea portofoliului",
        "description": "Prezentați mai multe fișiere de proiect într-o imagine de ansamblu a grilei curată și organizată.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Cu ce este diferit de N-Up?",
        "answer": "N-Up preia pagini dintr-un singur PDF și le pune pe o foaie. Grid Combine preia MULTIPLE fișiere PDF DIFERITE și le pune pe o foaie."
      },
      {
        "question": "Câte fișiere pot combina?",
        "answer": "Puteți combina până la 100 de fișiere în funcție de memoria browserului dvs., dar aspecte precum 4x4 găzduiesc până la 16 fișiere pe pagină."
      },
      {
        "question": "Pot adăuga chenare?",
        "answer": "Da, puteți adăuga chenare în jurul fiecărui fișier PDF și puteți personaliza culoarea chenarului."
      }
    ]
  },
  "split-pdf": {
    "title": "Împarte PDF",
    "metaDescription": "Împărțiți fișierele PDF în mai multe documente. Extrageți anumite pagini sau împărțiți pe intervale de pagini.",
    "keywords": [
      "pdf împărțit",
      "împărțiți pdf",
      "pdf separat",
      "extrage pagini",
      "pdf splitter"
    ],
    "description": "<p>Split PDF vă permite să împărțiți un singur document PDF în mai multe fișiere mai mici. Acesta este perfect pentru extragerea anumitor capitole, separarea documentelor combinate sau crearea de fișiere individuale dintr-un PDF cu mai multe pagini.</p>\n      <p>Puteți împărți în anumite intervale de pagini, puteți extrage pagini individuale sau puteți împărți documentul la intervale regulate. Instrumentul oferă o previzualizare vizuală a paginilor dvs., facilitând selectarea exactă a ceea ce aveți nevoie.</p>\n      <p>Toată procesarea se face local în browserul dvs., asigurându-vă că documentele dvs. rămân private și securizate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a răsfoi și selectați fișierul pe care doriți să îl împărțiți."
      },
      {
        "step": 2,
        "title": "Selectați metoda de împărțire",
        "description": "Alegeți cum să împărțiți: după intervale de pagini, extrageți anumite pagini sau împărțiți la intervale regulate."
      },
      {
        "step": 3,
        "title": "Definiți intervale de pagini",
        "description": "Introduceți numerele paginilor sau intervalele pe care doriți să le extrageți (de exemplu, 1-5, 8, 10-15)."
      },
      {
        "step": 4,
        "title": "Împărțiți și descărcați",
        "description": "Faceți clic pe Split pentru a crea noile fișiere PDF și a le descărca individual sau ca arhivă ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Extrage capitole",
        "description": "Împărțiți o carte sau un manual în capitole individuale pentru o citire sau o distribuție mai ușoară.",
        "icon": "book"
      },
      {
        "title": "Scanări combinate separate",
        "description": "Împărțiți un document scanat în lot în fișiere individuale pentru fiecare document original.",
        "icon": "copy"
      },
      {
        "title": "Creați fișe",
        "description": "Extrageți anumite diapozitive sau pagini dintr-o prezentare pentru a crea fișe concentrate.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Pot împărți un PDF în pagini individuale?",
        "answer": "Da, puteți împărți un PDF în fișiere individuale cu o singură pagină, selectând opțiunea „Divizați fiecare pagină”."
      },
      {
        "question": "Ce se întâmplă cu marcajele la împărțire?",
        "answer": "Marcajele care se încadrează în intervalul de pagini extrase sunt păstrate în fișierele PDF rezultate."
      },
      {
        "question": "Pot împărți fișierele PDF protejate prin parolă?",
        "answer": "Mai întâi trebuie să decriptați PDF-ul folosind instrumentul nostru Decriptare PDF înainte de a împărți."
      }
    ]
  },
  "compress-pdf": {
    "title": "Comprimă PDF",
    "metaDescription": "Reduceți dimensiunea fișierului PDF, menținând în același timp calitatea. Compresor PDF online gratuit pentru fișiere mai mici.",
    "keywords": [
      "comprima pdf",
      "reduce dimensiunea pdf",
      "pdf compresor",
      "micșorare pdf",
      "optimizați pdf"
    ],
    "description": "<p>Comprimare PDF reduce dimensiunea fișierului documentelor PDF, menținând în același timp o calitate acceptabilă. Acest lucru este esențial pentru atașamentele de e-mail, încărcările de pe web sau pentru economisirea spațiului de stocare.</p>\n      <p>Instrumentul oferă mai multe niveluri de compresie pentru a echilibra între reducerea dimensiunii fișierului și conservarea calității. Puteți alege compresie agresivă pentru o reducere maximă a dimensiunii sau compresie ușoară pentru a menține o calitate superioară.</p>\n      <p>Toată compresia are loc în browserul dvs., asigurându-vă că documentele dvs. nu părăsesc dispozitivul dvs.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul pe care doriți să îl comprimați."
      },
      {
        "step": 2,
        "title": "Alegeți Nivelul de compresie",
        "description": "Selectați nivelul de compresie preferat: Scăzut (cea mai bună calitate), Mediu (echilibrat) sau Ridicat (dimensiunea cea mai mică)."
      },
      {
        "step": 3,
        "title": "Comprimați și descărcați",
        "description": "Faceți clic pe Comprimare pentru a reduce dimensiunea fișierului, apoi descărcați PDF-ul optimizat."
      }
    ],
    "useCases": [
      {
        "title": "Atașamente la e-mail",
        "description": "Reduceți dimensiunea PDF pentru a îndeplini limitele de atașare la e-mail și pentru a asigura o livrare mai rapidă.",
        "icon": "mail"
      },
      {
        "title": "Publicare web",
        "description": "Optimizați fișierele PDF pentru descărcare de pe web pentru a îmbunătăți timpul de încărcare a paginii și experiența utilizatorului.",
        "icon": "globe"
      },
      {
        "title": "Optimizarea stocării",
        "description": "Comprimați documentele arhivate pentru a economisi spațiu pe disc, menținând în același timp accesibilitatea.",
        "icon": "hard-drive"
      }
    ],
    "faq": [
      {
        "question": "Cât de mult pot reduce dimensiunea fișierului?",
        "answer": "Rezultatele compresiei variază în funcție de conținutul PDF. PDF-urile bogate în imagini pot fi adesea reduse cu 50-80%, în timp ce PDF-urile numai text pot înregistra reduceri mai mici."
      },
      {
        "question": "Va afecta compresia calitatea textului?",
        "answer": "Textul rămâne clar și lizibil la toate nivelurile de compresie. Doar imaginile și graficele sunt afectate de compresie."
      },
      {
        "question": "Pot comprima mai multe PDF-uri simultan?",
        "answer": "Da, puteți încărca și comprima până la 10 fișiere PDF simultan."
      }
    ]
  },
  "edit-pdf": {
    "title": "Editează PDF",
    "metaDescription": "Editați direct textul și imaginile PDF online. Faceți clic pe paragrafe pentru a edita în loc cu redistribuire live, pentru a înlocui imaginile și pentru a găsi și înlocui în documente.",
    "keywords": [
      "editați pdf",
      "editor pdf",
      "editați textul pdf",
      "editare directă pdf",
      "editor pdf pe loc",
      "modificați textul pdf"
    ],
    "description": "<p>Editare PDF oferă editare de înaltă fidelitate a textului și a imaginilor la locul lor, cu ajutorul motorului WebAssembly PDFium. Faceți clic direct în paragrafele existente pentru a edita textul la fel ca un procesor de text, cu reîncărcare automată a liniilor și redistribuire.</p>\n      <p>Reglați-vă aspectul folosind inspectorul de proprietăți (dimensiunea fontului, culoarea, înălțimea liniei, aliniere), înlocuiți sau răsturnați imaginile sau găsiți și înlocuiți textul în serie în întregul document. Treceți oricând la modul Adnotare clasică dacă aveți nevoie de desene cu mână liberă, ștampile sau semnături de formular.</p>\n      <p>Toate editările se desfășoară strict pe partea clientului în browserul dvs., garantând confidențialitate și securitate 100% pentru fișierele dvs.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul pe care doriți să îl editați."
      },
      {
        "step": 2,
        "title": "Faceți clic pentru a edita textul direct",
        "description": "Faceți clic sau dublu clic pe orice paragraf sau titlu pentru a începe editarea cu reflow live."
      },
      {
        "step": 3,
        "title": "Formatați și modificați imaginile",
        "description": "Reglați tipografia prin intermediul inspectorului de andocare sau faceți clic dreapta pe imagini pentru a le înlocui sau a le întoarce."
      },
      {
        "step": 4,
        "title": "Salvați și descărcați",
        "description": "Faceți clic pe Salvare modificări în bara de instrumente din dreapta sus pentru a exporta PDF-ul actualizat."
      }
    ],
    "useCases": [
      {
        "title": "Remediați erorile tipografice",
        "description": "Corectați greșelile de scriere, numele, datele sau prețurile direct pe documentul original, fără a deschide fișierele sursă.",
        "icon": "edit-3"
      },
      {
        "title": "Găsire și înlocuire globală",
        "description": "Căutați cuvinte cheie în toate paginile și înlocuiți-le fără probleme pe loc.",
        "icon": "search"
      },
      {
        "title": "Actualizați grafica și siglele",
        "description": "Schimbați siglele, diagramele sau semnăturile învechite cu imaginile nou încărcate.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Pot edita direct textul existent în PDF?",
        "answer": "Da! Editorul oferă editare directă de conținut. Pur și simplu faceți clic pe orice bloc de text sau paragraf existent pentru a tasta, șterge și reformata cu reflow live."
      },
      {
        "question": "Pot adăuga în continuare adnotări, ștampile și semnături?",
        "answer": "Da! Utilizați comutatorul de mod din antet oricând pentru a comuta la modul Adnotare clasică pentru ștampile, desene cu mână liberă și formulare."
      },
      {
        "question": "Fișierele mele sunt păstrate private și în siguranță?",
        "answer": "Absolut. Toate decodificarea PDF, gruparea textului, re-încheierea și îmbinarea fluxului rulează în întregime în browserul dvs. local prin WebAssembly."
      }
    ]
  },
  "jpg-to-pdf": {
    "title": "JPG în PDF",
    "metaDescription": "Convertiți imaginile JPG în PDF. Combinați mai multe fișiere JPG într-un singur document PDF.",
    "keywords": [
      "jpg în pdf",
      "jpeg în pdf",
      "converti jpg",
      "imagine în pdf",
      "fotografie în pdf"
    ],
    "description": "<p>JPG în PDF transformă imaginile dvs. JPEG în documente PDF rapid și ușor. Indiferent dacă aveți o singură fotografie sau mai multe imagini, acest instrument creează fișiere PDF cu aspect profesional.</p>\n      <p>Puteți combina mai multe fișiere JPG într-un singur PDF, le puteți aranja în orice ordine și puteți personaliza dimensiunea și orientarea paginii. Conversia păstrează calitatea imaginii în timp ce creează fișiere PDF compacte, care pot fi partajate.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că fotografiile dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați imagini JPG",
        "description": "Trageți și plasați fișierele JPG sau faceți clic pentru a selecta imagini de pe dispozitiv."
      },
      {
        "step": 2,
        "title": "Aranjați și configurați",
        "description": "Reordonați imaginile prin glisare și selectați dimensiunea paginii și opțiunile de orientare."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a crea PDF-ul și a descărca rezultatul."
      }
    ],
    "useCases": [
      {
        "title": "Albume foto",
        "description": "Creați albume foto PDF din fotografiile din vacanță sau din fotografiile evenimentelor pentru partajare ușoară.",
        "icon": "image"
      },
      {
        "title": "Scanarea documentelor",
        "description": "Convertiți fotografiile documentelor de pe camera telefonului în fișiere PDF adecvate.",
        "icon": "camera"
      },
      {
        "title": "Crearea portofoliului",
        "description": "Compilați lucrări de fotografie sau mostre de design într-un portofoliu profesional PDF.",
        "icon": "folder"
      }
    ],
    "faq": [
      {
        "question": "Câte imagini pot converti?",
        "answer": "Puteți converti până la 100 de imagini JPG într-un singur document PDF."
      },
      {
        "question": "Se va păstra calitatea imaginii?",
        "answer": "Da, imaginile sunt încorporate la calitatea lor originală. Opțional, le puteți comprima pentru a reduce dimensiunea fișierului."
      },
      {
        "question": "Pot seta diferite dimensiuni de pagină pentru diferite imagini?",
        "answer": "Instrumentul aplică o dimensiune uniformă a paginii tuturor paginilor. Fiecare imagine este scalată pentru a se potrivi cu dimensiunea paginii selectate, păstrând în același timp raportul de aspect."
      }
    ]
  },
  "sign-pdf": {
    "title": "Semnează PDF",
    "metaDescription": "Adăugați semnături electronice documentelor PDF. Desenați, introduceți sau încărcați semnătura dvs.",
    "keywords": [
      "semn pdf",
      "semnătură electronică",
      "semnătură electronică",
      "semnătură pdf",
      "semnătură digitală"
    ],
    "description": "<p>Semnați PDF vă permite să adăugați semnături electronice la documentele dumneavoastră PDF rapid și în siguranță. Creați-vă semnătura desenând, tastând sau încărcând o imagine, apoi plasați-o oriunde pe document.</p>\n      <p>Puteți să adăugați mai multe semnături la un singur document, să le redimensionați și să le poziționați cu precizie și să vă salvați semnătura pentru utilizare ulterioară. Instrumentul este perfect pentru contracte, acorduri, formulare și orice document care necesită semnătura dvs.</p>\n      <p>Toate semnările au loc local în browserul dvs., asigurându-vă că documentele și semnătura rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul pe care trebuie să îl semnați."
      },
      {
        "step": 2,
        "title": "Creați-vă semnătura",
        "description": "Desenați-vă semnătura cu mouse-ul sau atingerea, introduceți-vă numele pentru a genera o semnătură sau încărcați o imagine de semnătură. De asemenea, puteți scana o fotografie a unei semnături scrise pe hârtie."
      },
      {
        "step": 3,
        "title": "Plasați și reglați",
        "description": "Faceți clic pe document pentru a vă plasa semnătura, apoi trageți pentru a poziționa și redimensionați după cum este necesar."
      },
      {
        "step": 4,
        "title": "Salvați și descărcați",
        "description": "Faceți clic pe Salvare pentru a vă aplica semnătura și a descărca PDF-ul semnat."
      }
    ],
    "useCases": [
      {
        "title": "Semnarea contractului",
        "description": "Semnează contracte și acorduri electronic, fără tipărire și scanare.",
        "icon": "file-signature"
      },
      {
        "title": "Completarea formularului",
        "description": "Adăugați semnătura dvs. în formularele de cerere, formularele de consimțământ și documentele oficiale.",
        "icon": "clipboard"
      },
      {
        "title": "Fluxuri de lucru de aprobare",
        "description": "Închideți documentele ca parte a proceselor de revizuire și aprobare.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Este o semnătură electronică obligatorie din punct de vedere juridic?",
        "answer": "Semnăturile electronice sunt recunoscute legal în majoritatea țărilor. Cu toate acestea, unele documente pot necesita anumite tipuri de semnături digitale. Verificați reglementările locale."
      },
      {
        "question": "Îmi pot salva semnătura pentru o utilizare viitoare?",
        "answer": "Da, vă puteți salva semnătura în spațiul de stocare local al browserului pentru acces rapid atunci când semnați documente viitoare."
      },
      {
        "question": "Pot adăuga mai multe semnături la un document?",
        "answer": "Da, puteți adăuga oricâte semnături este nevoie, poziționând fiecare în mod independent pe orice pagină."
      }
    ]
  },
  "crop-pdf": {
    "title": "Decupați PDF",
    "metaDescription": "Decupați paginile PDF pentru a elimina marginile și zonele nedorite. Decupați documentele PDF cu precizie.",
    "keywords": [
      "decupați pdf",
      "tăiați pdf",
      "tăiați marginile pdf",
      "redimensionați paginile pdf",
      "pdf cropper"
    ],
    "description": "<p>Tăiere PDF vă permite să tăiați marginile și să eliminați zonele nedorite din paginile PDF. Acest lucru este util pentru eliminarea spațiului alb în exces, concentrarea pe anumite zone de conținut sau standardizarea dimensiunilor paginii.</p>\n      <p>Puteți decupa toate paginile în mod uniform sau puteți ajusta fiecare pagină în mod individual. Interfața vizuală arată exact ceea ce va fi păstrat, ceea ce facilitează obținerea de rezultate precise.</p>\n      <p>Toată decuparea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul pe care doriți să îl decupați."
      },
      {
        "step": 2,
        "title": "Definiți zona de decupare",
        "description": "Trageți mânerele de decupare pentru a defini zona pe care doriți să o păstrați sau introduceți măsurători precise."
      },
      {
        "step": 3,
        "title": "Aplicați la Pagini",
        "description": "Alegeți să aplicați decuparea tuturor paginilor sau selectați anumite pagini de decupat."
      },
      {
        "step": 4,
        "title": "Decupați și descărcați",
        "description": "Faceți clic pe Decupare pentru a aplica modificările și a descărca PDF-ul tăiat."
      }
    ],
    "useCases": [
      {
        "title": "Eliminați marjele",
        "description": "Tăiați marginile excesive din documentele scanate sau PDF-urile cu chenare mari.",
        "icon": "maximize-2"
      },
      {
        "title": "Concentrați conținutul",
        "description": "Decupați pentru a evidenția anumite zone de conținut, eliminând anteturile, subsolurile sau barele laterale.",
        "icon": "target"
      },
      {
        "title": "Standardizați paginile",
        "description": "Faceți toate paginile de aceeași dimensiune prin decuparea la dimensiuni uniforme.",
        "icon": "square"
      }
    ],
    "faq": [
      {
        "question": "Decuparea elimină permanent conținutul?",
        "answer": "Da, decuparea elimină conținutul din afara zonei de decupare. Asigurați-vă că păstrați o copie de rezervă a fișierului original."
      },
      {
        "question": "Pot decupa diferite pagini diferit?",
        "answer": "Da, puteți aplica diferite setări de decupare paginilor individuale sau grupurilor de pagini."
      },
      {
        "question": "Decuparea va afecta calitatea textului?",
        "answer": "Nu, decuparea elimină doar zonele din afara limitei culturii. Conținutul rămas își păstrează calitatea originală."
      }
    ]
  },
  "extract-pages": {
    "title": "Extrage pagini",
    "metaDescription": "Extrageți anumite pagini din fișierele PDF. Selectați și salvați pagini individuale ca documente noi.",
    "keywords": [
      "extrage pagini pdf",
      "salvați paginile pdf",
      "copiați paginile pdf",
      "extractor de pagini pdf"
    ],
    "description": "<p>Extract Pagini vă permite să selectați și să salvați anumite pagini dintr-un document PDF ca fișiere noi. Acesta este perfect pentru extragerea secțiunilor relevante, crearea de extrase sau separarea documentelor combinate.</p>\n      <p>Puteți extrage pagini individuale, intervale de pagini sau mai multe pagini neconsecutive. Previzualizarea vizuală a paginii facilitează identificarea și selectarea exactă a paginilor de care aveți nevoie.</p>\n      <p>Toată extragerea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul din care doriți să extrageți pagini."
      },
      {
        "step": 2,
        "title": "Selectați Pagini",
        "description": "Faceți clic pe miniaturile paginilor pentru a le selecta sau introduceți numerele paginilor și intervalele în câmpul de introducere."
      },
      {
        "step": 3,
        "title": "Extrageți și descărcați",
        "description": "Faceți clic pe Extras pentru a crea un nou PDF cu paginile selectate și pentru a-l descărca."
      }
    ],
    "useCases": [
      {
        "title": "Creați extrase",
        "description": "Extrageți pagini relevante din rapoarte sau cărți pentru a crea documente de referință concentrate.",
        "icon": "file-minus"
      },
      {
        "title": "Partajați conținut specific",
        "description": "Scoateți anumite pagini pentru a le partaja fără a trimite întregul document.",
        "icon": "share-2"
      },
      {
        "title": "Arhivați pagini importante",
        "description": "Extrageți și salvați pagini cheie din documente pentru arhivare pe termen lung.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Pot extrage pagini neconsecutive?",
        "answer": "Da, puteți selecta orice combinație de pagini, fie consecutive sau împrăștiate în document."
      },
      {
        "question": "Se vor păstra marcajele?",
        "answer": "Marcajele care indică paginile extrase sunt păstrate în noul document."
      },
      {
        "question": "Pot extrage pagini din mai multe PDF-uri?",
        "answer": "Acest instrument funcționează cu câte un PDF la un moment dat. Pentru a combina pagini din mai multe PDF-uri, utilizați instrumentul Merge PDF."
      }
    ]
  },
  "organize-pdf": {
    "title": "Organizați PDF",
    "metaDescription": "Reordonați, duplicați și ștergeți paginile PDF. Trageți și plasați pentru a vă reorganiza documentele.",
    "keywords": [
      "organiza pdf",
      "reordonați paginile pdf",
      "rearanjați pdf-ul",
      "organizator de pagini pdf"
    ],
    "description": "<p>Organizare PDF oferă o interfață intuitivă de glisare și plasare pentru rearanjarea paginilor din documentele PDF. Reordonați paginile, duplicați secțiuni importante sau eliminați cu ușurință paginile nedorite.</p>\n      <p>Minaturile vizuale ale paginilor facilitează identificarea conținutului și aranjarea paginilor exact așa cum aveți nevoie de ele. Perfect pentru restructurarea documentelor, crearea comenzilor de pagini personalizate sau curățarea fișierelor scanate.</p>\n      <p>Toată organizarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul pe care doriți să îl organizați."
      },
      {
        "step": 2,
        "title": "Rearanjați paginile",
        "description": "Trageți miniaturile paginilor pentru a le reordona. Faceți clic pe butoanele de duplicare sau de ștergere de pe fiecare pagină, după cum este necesar."
      },
      {
        "step": 3,
        "title": "Salvați și descărcați",
        "description": "Faceți clic pe Salvare pentru a aplica modificările și a descărca PDF-ul reorganizat."
      }
    ],
    "useCases": [
      {
        "title": "Remediați ordinea paginilor",
        "description": "Corectați ordinea paginilor care au fost scanate sau combinate incorect.",
        "icon": "arrow-up-down"
      },
      {
        "title": "Creați o comandă personalizată",
        "description": "Aranjați paginile într-o anumită secvență pentru prezentări sau rapoarte.",
        "icon": "list"
      },
      {
        "title": "Eliminați paginile nedorite",
        "description": "Ștergeți paginile goale, duplicatele sau conținutul irelevant din documente.",
        "icon": "trash-2"
      }
    ],
    "faq": [
      {
        "question": "Pot duplica paginile?",
        "answer": "Da, puteți duplica orice pagină și plasați copia oriunde în document."
      },
      {
        "question": "Există o funcție de anulare?",
        "answer": "Da, puteți anula și reface modificările. De asemenea, puteți reveni la comanda inițială în orice moment."
      },
      {
        "question": "Pot organiza mai multe PDF-uri împreună?",
        "answer": "Acest instrument funcționează cu câte un PDF la un moment dat. Pentru a combina și organiza mai multe PDF-uri, mai întâi îmbinați-le folosind instrumentul Îmbinați PDF."
      }
    ]
  },
  "delete-pages": {
    "title": "Ștergeți pagini",
    "metaDescription": "Eliminați paginile nedorite din fișierele PDF. Selectați și ștergeți cu ușurință anumite pagini.",
    "keywords": [
      "ștergeți paginile pdf",
      "eliminați paginile pdf",
      "dispozitiv de îndepărtare a paginilor pdf",
      "ștergeți paginile din pdf"
    ],
    "description": "<p>Ștergeți pagini vă permite să eliminați rapid și ușor paginile nedorite din documentele PDF. Indiferent dacă trebuie să eliminați pagini goale, conținut învechit sau informații sensibile, acest instrument simplifică totul.</p>\n      <p>Minaturile vizuale ale paginilor vă ajută să identificați exact ce pagini să eliminați. Puteți șterge pagini individuale sau mai multe pagini simultan.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul din care doriți să ștergeți paginile."
      },
      {
        "step": 2,
        "title": "Selectați Pagini de șters",
        "description": "Faceți clic pe miniaturile paginilor pentru a le marca pentru ștergere sau introduceți numerele paginii în câmpul de introducere."
      },
      {
        "step": 3,
        "title": "Ștergeți și descărcați",
        "description": "Faceți clic pe Ștergere pentru a elimina paginile selectate și a descărca PDF-ul actualizat."
      }
    ],
    "useCases": [
      {
        "title": "Eliminați paginile goale",
        "description": "Curățați documentele eliminând paginile goale incluse accidental.",
        "icon": "file-x"
      },
      {
        "title": "Eliminați conținutul sensibil",
        "description": "Ștergeți paginile care conțin informații confidențiale înainte de a partaja documente.",
        "icon": "shield"
      },
      {
        "title": "Simplificați documentele",
        "description": "Eliminați paginile învechite sau irelevante pentru a crea documente mai concentrate.",
        "icon": "filter"
      }
    ],
    "faq": [
      {
        "question": "Pot recupera paginile șterse?",
        "answer": "Ștergerea este permanentă în fișierul de ieșire. Păstrați o copie de rezervă a documentului original dacă este posibil să aveți nevoie de pagini mai târziu."
      },
      {
        "question": "Pot șterge mai multe pagini simultan?",
        "answer": "Da, puteți selecta și șterge mai multe pagini simultan."
      },
      {
        "question": "Ștergerea paginilor va afecta marcajele?",
        "answer": "Marcajele care indică paginile șterse vor fi eliminate. Marcajele pentru paginile rămase sunt păstrate."
      }
    ]
  },
  "bookmark": {
    "title": "Editați marcajele",
    "metaDescription": "Adaugă, editează, mută sau elimină marcajele PDF selectate ori toate marcajele. Gestionează navigarea local în browser.",
    "keywords": [
      "marcaje pdf",
      "editați marcajele",
      "adăugați marcaje",
      "navigare pdf",
      "cuprins",
      "elimină toate marcajele pdf",
      "mută marcajul",
      "elimină marcajele PDF selectate"
    ],
    "description": "<p>Editați marcaje vă permite să creați, să modificați și să organizați marcaje în documentele dvs. PDF. Marcajele oferă navigare rapidă către anumite secțiuni, făcând documentele lungi mai ușor de utilizat.</p>\n      <p>Puteți să adăugați marcaje noi, să le editați pe cele existente, să reorganizați ierarhia marcajelor sau să importați marcaje din surse externe. Acest instrument este esențial pentru crearea de documente profesionale, navigabile.</p>\n      <p>Toate editările au loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>\n      <p>Pentru a elimina totul, apasă Elimină toate marcajele și confirmă. Salvează și descarcă pentru a exporta un PDF fără marcaje.</p>\n      <p>Adaugă marcaj inserează după intrarea activă, la același nivel, și indică pagina previzualizată. Fără intrare activă, adaugă la final. Casetele nu schimbă poziția de inserare. Trage mânerul înainte, după sau în interiorul altui marcaj. Apasă sau atinge mânerul pentru a alege o destinație.</p>\n      <p>Selectează marcaje cu Shift+clic, Ctrl/Cmd+clic sau casetele, apoi apasă Elimină selecția și confirmă. Părinții selectați și toți copiii lor sunt eliminați. Salvează și descarcă pentru a aplica modificările.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul pe care doriți să îl editați."
      },
      {
        "step": 2,
        "title": "Gestionați marcajele",
        "description": "Adăugați marcaje noi, editați-le pe cele existente sau trageți pentru a reorganiza ierarhia. Pentru a elimina totul, apasă Elimină toate marcajele și confirmă. Salvează și descarcă pentru a exporta un PDF fără marcaje. Adaugă marcaj inserează după intrarea activă, la același nivel, și indică pagina previzualizată. Fără intrare activă, adaugă la final. Casetele nu schimbă poziția de inserare. Trage mânerul înainte, după sau în interiorul altui marcaj. Apasă sau atinge mânerul pentru a alege o destinație. Selectează marcaje cu Shift+clic, Ctrl/Cmd+clic sau casetele, apoi apasă Elimină selecția și confirmă. Părinții selectați și toți copiii lor sunt eliminați. Salvează și descarcă pentru a aplica modificările."
      },
      {
        "step": 3,
        "title": "Salvați și descărcați",
        "description": "Faceți clic pe Salvare pentru a aplica modificările și a descărca PDF-ul cu marcajele actualizate."
      }
    ],
    "useCases": [
      {
        "title": "Creați navigare",
        "description": "Adăugați marcaje la documente lungi pentru a ajuta cititorii să navigheze rapid la anumite secțiuni.",
        "icon": "navigation"
      },
      {
        "title": "Organizați capitole",
        "description": "Creați o structură de marcaje ierarhică care să reflecte organizarea capitolelor documentului dvs.",
        "icon": "book-open"
      },
      {
        "title": "Îmbunătățiți accesibilitatea",
        "description": "Adăugați marcaje pentru a face documentele mai accesibile și mai ușor de utilizat.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Pot crea marcaje imbricate?",
        "answer": "Da, puteți crea o structură ierarhică cu marcaje părinte și copil."
      },
      {
        "question": "Pot importa marcaje dintr-un fișier?",
        "answer": "Da, puteți importa structuri de marcaje din fișiere JSON sau text."
      },
      {
        "question": "Marcajele vor funcționa în toate cititoarele PDF?",
        "answer": "Da, marcajele sunt o caracteristică standard PDF acceptată de toate cititoarele PDF majore."
      },
      { "question": "Pot elimina toate marcajele dintr-o dată?", "answer": "Pentru a elimina totul, apasă Elimină toate marcajele și confirmă. Salvează și descarcă pentru a exporta un PDF fără marcaje." }
    ]
  },
  "table-of-contents": {
    "title": "Cuprins",
    "metaDescription": "Generați un cuprins pentru PDF-ul dvs. Creați o navigare pe care se poate face clic din marcaje.",
    "keywords": [
      "cuprins pdf",
      "generator de toc",
      "index pdf",
      "navigarea documentelor"
    ],
    "description": "<p>Cuprins generează o pagină de cuprins navigabilă pentru documentele dumneavoastră PDF. TOC poate fi creat din marcaje existente sau din intrări personalizate, oferind cititorilor o privire de ansamblu și o navigare rapidă.</p>\n      <p>Personalizați aspectul cu diferite stiluri, fonturi și machete. TOC generat include linkuri pe care se poate face clic care sar direct la paginile la care se face referire.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul."
      },
      {
        "step": 2,
        "title": "Configurați TOC",
        "description": "Alegeți să generați din marcaje sau să creați intrări personalizate. Selectați stilul și opțiunile de poziționare."
      },
      {
        "step": 3,
        "title": "Generați și descărcați",
        "description": "Faceți clic pe Generare pentru a crea cuprinsul și a descărca PDF-ul actualizat."
      }
    ],
    "useCases": [
      {
        "title": "Lucrări academice",
        "description": "Adăugați un cuprins profesional la teze, disertații și lucrări de cercetare.",
        "icon": "graduation-cap"
      },
      {
        "title": "Rapoarte de afaceri",
        "description": "Creați rapoarte navigabile cu liste clare de secțiuni pentru părțile interesate.",
        "icon": "bar-chart"
      },
      {
        "title": "Manuale de utilizare",
        "description": "Generați TOC cuprinzătoare pentru documentația tehnică și ghidurile utilizatorului.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Pot personaliza aspectul TOC?",
        "answer": "Da, puteți alege dintre diferite stiluri, fonturi și machete pentru cuprinsul dvs."
      },
      {
        "question": "Unde este introdus TOC?",
        "answer": "În mod implicit, TOC este inserat la începutul documentului, dar puteți alege o altă locație."
      },
      {
        "question": "Se pot face clic pe intrările TOC?",
        "answer": "Da, fiecare intrare este un link pe care se poate face clic care navighează la pagina corespunzătoare."
      }
    ]
  },
  "page-numbers": {
    "title": "Numerele paginilor",
    "metaDescription": "Adăugați numere de pagină în documentele PDF. Personalizați poziția, formatul și numărul de început.",
    "keywords": [
      "adăugați numere de pagină",
      "numere de pagină pdf",
      "număr pagini pdf",
      "paginare pdf"
    ],
    "description": "<p>Numere de pagină adaugă numerotare personalizabilă a paginilor documentelor dumneavoastră PDF. Alegeți dintre diverse formate, poziții și stiluri pentru a se potrivi cu designul documentului dvs.</p>\n      <p>Puteți seta numărul de început, puteți sări peste anumite pagini și puteți utiliza diferite formate de numerotare (1, 2, 3 sau i, ii, iii). Perfect pentru crearea de documente profesionale cu paginare adecvată.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul."
      },
      {
        "step": 2,
        "title": "Configurați numerotarea",
        "description": "Alegeți poziția, formatul, numărul de început și ce pagini să numerotați."
      },
      {
        "step": 3,
        "title": "Aplicați și descărcați",
        "description": "Faceți clic pe Aplicare pentru a adăuga numere de pagină și pentru a descărca PDF-ul actualizat."
      }
    ],
    "useCases": [
      {
        "title": "Documente profesionale",
        "description": "Adăugați numere de pagină în rapoarte, propuneri și documente de afaceri.",
        "icon": "file-text"
      },
      {
        "title": "Lucrări academice",
        "description": "Numără paginile conform cerințelor de formatare academică.",
        "icon": "graduation-cap"
      },
      {
        "title": "Documente legale",
        "description": "Adăugați o paginare adecvată la contracte și dosarele legale.",
        "icon": "scale"
      }
    ],
    "faq": [
      {
        "question": "Pot sări peste prima pagină?",
        "answer": "Da, puteți specifica ce pagini să numerotați și pe care să omiteți, cum ar fi paginile de titlu sau paginile de copertă."
      },
      {
        "question": "Ce formate de numere sunt disponibile?",
        "answer": "Puteți folosi cifre arabe (1, 2, 3), cifre romane (i, ii, iii sau I, II, III) sau litere (a, b, c)."
      },
      {
        "question": "Pot adăuga formatul „Pagina X din Y”?",
        "answer": "Da, puteți include numărul total de pagini în formatul dvs. de numerotare."
      }
    ]
  },
  "add-watermark": {
    "title": "Adăugați filigran",
    "metaDescription": "Adăugați filigrane text sau imagini la fișierele PDF. Protejați-vă și marcați documentele.",
    "keywords": [
      "adăugați filigran",
      "pdf filigran",
      "ștampila pdf",
      "marca pdf",
      "proteja pdf"
    ],
    "description": "<p>Adăugarea filigranului vă permite să plasați filigrane text sau imagine pe documentele PDF. Filigranele pot indica starea documentului (Ciornă, Confidențial), pot adăuga branding sau pot împiedica copierea neautorizată.</p>\n      <p>Personalizați poziția, dimensiunea, opacitatea, rotația și culoarea filigranului. Aplicați la toate paginile sau selectați anumite pagini. Instrumentul acceptă atât filigrane text, cât și filigrane imagine.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul."
      },
      {
        "step": 2,
        "title": "Creați filigran",
        "description": "Introduceți text sau încărcați o imagine pentru filigranul dvs. Reglați poziția, dimensiunea, opacitatea și rotația."
      },
      {
        "step": 3,
        "title": "Aplicați și descărcați",
        "description": "Faceți clic pe Aplicare pentru a adăuga filigranul și a descărca PDF-ul actualizat."
      }
    ],
    "useCases": [
      {
        "title": "Protecția documentelor",
        "description": "Adăugați filigrane „Confidențial” sau „Ciornă” pentru a indica starea documentului.",
        "icon": "shield"
      },
      {
        "title": "Documente de marcă",
        "description": "Adăugați sigle sau nume ale companiei în documentele oficiale.",
        "icon": "award"
      },
      {
        "title": "Notificare privind drepturile de autor",
        "description": "Adăugați informații despre drepturile de autor pentru a proteja proprietatea intelectuală.",
        "icon": "copyright"
      }
    ],
    "faq": [
      {
        "question": "Pot folosi o imagine ca filigran?",
        "answer": "Da, puteți încărca imagini PNG, JPG sau SVG pentru a le folosi ca filigrane."
      },
      {
        "question": "Pot face filigranul semi-transparent?",
        "answer": "Da, puteți ajusta opacitatea de la complet transparent la complet opac."
      },
      {
        "question": "Pot aplica diferite filigrane pe pagini diferite?",
        "answer": "Instrumentul aplică același filigran paginilor selectate. Pentru diferite filigrane, procesați documentul de mai multe ori."
      }
    ]
  },
  "header-footer": {
    "title": "Antet și subsol",
    "metaDescription": "Adăugați anteturi și subsoluri în documentele PDF. Includeți numerele paginilor, datele și textul personalizat.",
    "keywords": [
      "antet pdf",
      "subsol pdf",
      "adăugați subsol antet",
      "antet pdf"
    ],
    "description": "<p>Header & Footer adaugă antete și subsoluri personalizabile documentelor dvs. PDF. Includeți numerele paginilor, datele, titlurile documentelor sau orice text personalizat în zonele de antet sau de subsol.</p>\n      <p>Poziționați conținutul în stânga, în centrul sau în dreapta antetului/subsolului. Folosiți conținut diferit pentru paginile pare și impare, dacă este necesar. Perfect pentru a crea documente profesionale cu formatare consistentă.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul."
      },
      {
        "step": 2,
        "title": "Configurați antet/subsol",
        "description": "Introduceți text pentru zonele antet și subsol. Adăugați numere de pagină, date sau text personalizat."
      },
      {
        "step": 3,
        "title": "Aplicați și descărcați",
        "description": "Faceți clic pe Aplicare pentru a adăuga anteturi/subsoluri și pentru a descărca PDF-ul actualizat."
      }
    ],
    "useCases": [
      {
        "title": "Documente de afaceri",
        "description": "Adăugați numele companiei și numerele de pagină în documentele profesionale.",
        "icon": "briefcase"
      },
      {
        "title": "Documente legale",
        "description": "Includeți numerele de caz, datele și referințele la pagini în dosarele legale.",
        "icon": "scale"
      },
      {
        "title": "Lucrări academice",
        "description": "Adăugați anteturi curente cu titlul lucrării și numele autorului.",
        "icon": "graduation-cap"
      }
    ],
    "faq": [
      {
        "question": "Pot avea antete diferite pe paginile pare și impare?",
        "answer": "Da, puteți configura conținut diferit pentru paginile pare și impare."
      },
      {
        "question": "Pot include data curentă?",
        "answer": "Da, puteți insera câmpuri de date dinamice care arată data curentă."
      },
      {
        "question": "Pot sări peste antetul/subsolul pe anumite pagini?",
        "answer": "Da, puteți specifica ce pagini ar trebui să aibă antete/subsoluri și care ar trebui să fie ignorate."
      }
    ]
  },
  "invert-colors": {
    "title": "Inversați culorile",
    "metaDescription": "Inversați culorile PDF pentru citirea în modul întunecat. Convertiți documentele în culori negative.",
    "keywords": [
      "inversează culorile pdf",
      "pdf modul întunecat",
      "pdf negativ",
      "culori inversate"
    ],
    "description": "<p>Inversează culorile inversează culorile din documentele PDF, creând un efect de imagine negativ. Acest lucru este util în special pentru a crea versiuni în modul întunecat ale documentelor pentru o citire mai ușoară în condiții de lumină scăzută.</p>\n      <p>Instrumentul poate inversa toate culorile sau poate păstra selectiv anumite elemente, cum ar fi imaginile. Perfect pentru reducerea oboselii ochilor la citirea documentelor noaptea.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul."
      },
      {
        "step": 2,
        "title": "Configurați Opțiuni",
        "description": "Alegeți dacă doriți să inversați tot conținutul sau să păstrați imaginile."
      },
      {
        "step": 3,
        "title": "Inversați și descărcați",
        "description": "Faceți clic pe Inversare pentru a procesa documentul și a descărca rezultatul."
      }
    ],
    "useCases": [
      {
        "title": "Lectură de noapte",
        "description": "Creați versiuni în modul întunecat ale documentelor pentru o citire confortabilă pe timp de noapte.",
        "icon": "moon"
      },
      {
        "title": "Reduceți oboseala ochilor",
        "description": "Inversați documentele luminoase pentru a reduce oboseala ochilor în timpul citirii prelungite.",
        "icon": "eye"
      },
      {
        "title": "Print Economii",
        "description": "Inversați documentele pentru a reduce consumul de cerneală la tipărirea schițelor.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Vor fi și imaginile inversate?",
        "answer": "Implicit, da. Puteți alege să păstrați imaginile originale în timp ce inversați textul și fundalul."
      },
      {
        "question": "Pot inversa numai anumite pagini?",
        "answer": "Da, puteți selecta ce pagini să inversați."
      },
      {
        "question": "Este inversarea reversibilă?",
        "answer": "Puteți inversa din nou documentul pentru a reveni la aproximativ culorile originale."
      }
    ]
  },
  "background-color": {
    "title": "Culoare de fundal",
    "metaDescription": "Schimbați culoarea de fundal PDF. Adăugați fundaluri colorate paginilor documentului.",
    "keywords": [
      "culoare de fundal pdf",
      "schimba fundalul pdf",
      "pdf colorat",
      "culoarea paginii pdf"
    ],
    "description": "<p>Culoarea fundalului vă permite să modificați sau să adăugați culori de fundal paginilor PDF. Acest lucru poate îmbunătăți lizibilitatea, poate adăuga interes vizual sau poate corespunde cerințelor dvs. de branding.</p>\n      <p>Alegeți orice culoare pentru fundal și aplicați-o tuturor paginilor sau paginilor selectate. Instrumentul păstrează tot conținutul existent în timp ce adaugă stratul de fundal.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul."
      },
      {
        "step": 2,
        "title": "Alegeți Culoare",
        "description": "Selectați o culoare de fundal folosind selectorul de culori sau introduceți un cod hexadecimal."
      },
      {
        "step": 3,
        "title": "Aplicați și descărcați",
        "description": "Faceți clic pe Aplicare pentru a adăuga fundalul și a descărca PDF-ul actualizat."
      }
    ],
    "useCases": [
      {
        "title": "Îmbunătățiți lizibilitatea",
        "description": "Adăugați un fundal crem deschis sau sepia pentru a reduce oboseala ochilor.",
        "icon": "eye"
      },
      {
        "title": "Documente de marcă",
        "description": "Folosiți culorile mărcii ca fundal pentru materialele de marketing.",
        "icon": "palette"
      },
      {
        "title": "Evidențiați Secțiuni",
        "description": "Utilizați culori diferite de fundal pentru a distinge secțiunile documentului.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "Fundalul va acoperi conținutul existent?",
        "answer": "Nu, fundalul este adăugat în spatele conținutului existent, păstrând tot textul și imaginile."
      },
      {
        "question": "Pot folosi culori diferite pentru pagini diferite?",
        "answer": "Ar trebui să procesați documentul de mai multe ori pentru culori diferite pe pagini diferite."
      },
      {
        "question": "Pot elimina un fundal existent?",
        "answer": "Acest instrument adaugă fundaluri. Pentru a elimina fundalurile, poate fi necesar să utilizați instrumentul Editare PDF."
      }
    ]
  },
  "text-color": {
    "title": "Schimbați culoarea textului",
    "metaDescription": "Schimbați culoarea textului în documentele PDF. Modificați culoarea întregului conținut text.",
    "keywords": [
      "schimba culoarea textului PDF",
      "culoarea textului pdf",
      "modificați culoarea textului",
      "recolorează textul pdf"
    ],
    "description": "<p>Schimbarea culorii textului vă permite să modificați culoarea textului din documentele PDF. Acest lucru este util pentru îmbunătățirea contrastului, potrivirea mărcii sau crearea de variații vizuale ale documentelor.</p>\n      <p>Selectați o culoare nouă și aplicați-o întregului text din document. Instrumentul procesează elemente de text, păstrând în același timp imaginile și alt conținut.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul."
      },
      {
        "step": 2,
        "title": "Alegeți Culoare",
        "description": "Selectați o nouă culoare de text folosind selectorul de culori sau introduceți un cod hexadecimal."
      },
      {
        "step": 3,
        "title": "Aplicați și descărcați",
        "description": "Faceți clic pe Aplicare pentru a schimba culoarea textului și a descărca PDF-ul actualizat."
      }
    ],
    "useCases": [
      {
        "title": "Îmbunătățiți contrastul",
        "description": "Schimbați culoarea textului pentru a îmbunătăți lizibilitatea pe fundal.",
        "icon": "contrast"
      },
      {
        "title": "Consecvența mărcii",
        "description": "Actualizați culorile textului pentru a se potrivi cu regulile mărcii.",
        "icon": "palette"
      },
      {
        "title": "Accesibilitate",
        "description": "Ajustați culorile textului pentru a îndeplini cerințele de contrast de accesibilitate.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Va fi schimbat tot textul?",
        "answer": "Da, instrumentul schimbă culoarea tuturor elementelor de text din document."
      },
      {
        "question": "Pot schimba doar un anumit text?",
        "answer": "Acest instrument modifică tot textul. Pentru modificări selective, utilizați instrumentul Edit PDF."
      },
      {
        "question": "Va fi păstrat textul formatat (bold, italic)?",
        "answer": "Da, formatarea textului este păstrată; se schimba doar culoarea."
      }
    ]
  },
  "add-stamps": {
    "title": "Adăugați ștampile",
    "metaDescription": "Adăugați ștampile la documentele PDF. Utilizați ștampile prestabilite sau personalizate pentru aprobare, revizuire și multe altele.",
    "keywords": [
      "ștampile pdf",
      "adăugați ștampila",
      "ștampila de aprobare",
      "ștampilă de cauciuc pdf"
    ],
    "description": "<p>Adăugați ștampile vă permite să plasați imagini de ștampile pe documentele PDF. Folosiți ștampile prestabilite precum „Aprobat”, „Respins”, „Ciornă” sau încărcați imagini de ștampile personalizate.</p>\n      <p>Poziționați ștampilele oriunde pe pagină, redimensionați-le și aplicați-le unei pagini sau mai multor pagini. Perfect pentru fluxurile de lucru ale documentelor, aprobări și indicatori de stare.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul."
      },
      {
        "step": 2,
        "title": "Selectați Ștampila",
        "description": "Alegeți o ștampilă prestabilită sau încărcați o imagine de ștampilă personalizată."
      },
      {
        "step": 3,
        "title": "Poziționați și aplicați",
        "description": "Faceți clic pentru a plasa ștampila, ajustați poziția și dimensiunea, apoi descărcați."
      }
    ],
    "useCases": [
      {
        "title": "Aprobarea documentului",
        "description": "Adăugați ștampile „Aprobat” sau „Respins” la documente în fluxurile de lucru de revizuire.",
        "icon": "check-circle"
      },
      {
        "title": "Indicație de stare",
        "description": "Marcați documentele ca „Ciornă”, „Finală” sau „Confidențial”.",
        "icon": "tag"
      },
      {
        "title": "Controlul calității",
        "description": "Adăugați ștampile QC pentru a indica finalizarea inspecției sau revizuirii.",
        "icon": "clipboard-check"
      }
    ],
    "faq": [
      {
        "question": "Ce ștampile prestabilite sunt disponibile?",
        "answer": "Presetări includ Aprobat, Respins, Ciornă, Finală, Confidențială, Copie și multe altele."
      },
      {
        "question": "Pot încărca ștampile personalizate?",
        "answer": "Da, puteți încărca imagini PNG sau JPG pentru a le folosi ca ștampile personalizate."
      },
      {
        "question": "Pot adăuga mai multe ștampile la un document?",
        "answer": "Da, puteți adăuga mai multe ștampile și le puteți poziționa pe fiecare independent."
      }
    ]
  },
  "remove-annotations": {
    "title": "Eliminați adnotările",
    "metaDescription": "Eliminați adnotările din fișierele PDF. Ștergeți comentariile, evidențierile și marcajele.",
    "keywords": [
      "eliminați adnotările PDF",
      "șterge comentariile",
      "eliminați evidențierea",
      "pdf curat"
    ],
    "description": "<p>Eliminați Adnotările elimină comentarii, evidențieri, note lipicioase și alte adnotări din documentele PDF. Aceasta creează o versiune curată a documentului, fără marcaj.</p>\n      <p>Puteți să eliminați toate adnotările sau să eliminați selectiv anumite tipuri. Perfect pentru a crea versiuni finale ale documentelor examinate sau pentru a elimina comentariile sensibile.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul."
      },
      {
        "step": 2,
        "title": "Selectați Tipuri de adnotare",
        "description": "Alegeți ce tipuri de adnotări să eliminați: comentarii, evidențieri, linkuri etc."
      },
      {
        "step": 3,
        "title": "Eliminați și descărcați",
        "description": "Faceți clic pe Eliminare pentru a elimina adnotările și a descărca PDF-ul curat."
      }
    ],
    "useCases": [
      {
        "title": "Finalizați documentele",
        "description": "Eliminați comentariile de revizuire și marcajul înainte de a publica documentele finale.",
        "icon": "file-check"
      },
      {
        "title": "Protecție a confidențialității",
        "description": "Eliminați comentariile care pot conține informații sensibile înainte de partajare.",
        "icon": "shield"
      },
      {
        "title": "Distribuție curată",
        "description": "Creați copii curate ale documentelor adnotate pentru distribuire.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Ce tipuri de adnotări pot fi eliminate?",
        "answer": "Comentariile, evidențierea, sublinierea, barajele, note lipicioase, ștampile și legăturile pot fi toate eliminate."
      },
      {
        "question": "Pot să păstrez niște adnotări?",
        "answer": "Da, puteți selecta ce tipuri de adnotări să eliminați și pe care să le păstrați."
      },
      {
        "question": "Este reversibil?",
        "answer": "Nu, eliminarea adnotărilor este permanentă. Păstrați o copie de rezervă a originalului, dacă este necesar."
      }
    ]
  },
  "form-filler": {
    "title": "Formular de completare",
    "metaDescription": "Completați formulare PDF online. Completați formulare PDF interactive fără a le imprima.",
    "keywords": [
      "completați formularul pdf",
      "de completare a formularelor pdf",
      "completați formularul pdf",
      "pdf interactiv"
    ],
    "description": "<p>Form Filler vă permite să completați formulare PDF interactive direct în browser. Completați câmpuri de text, casete de selectare, selectați opțiuni și adăugați semnături fără a imprima documentul.</p>\n      <p>Instrumentul acceptă formulare PDF standard și formulare XFA. Datele dvs. completate pot fi salvate, iar formularul poate fi aplatizat pentru a preveni editarea ulterioară.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că datele din formular rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați formularul PDF",
        "description": "Trageți și plasați formularul PDF sau faceți clic pentru a selecta fișierul."
      },
      {
        "step": 2,
        "title": "Completați formularul",
        "description": "Faceți clic pe câmpurile de formular pentru a introduce text, casete de selectare sau pentru a selecta opțiuni."
      },
      {
        "step": 3,
        "title": "Salvați și descărcați",
        "description": "Faceți clic pe Salvare pentru a vă păstra intrările și a descărca formularul completat."
      }
    ],
    "useCases": [
      {
        "title": "Formulare de cerere",
        "description": "Completați cererile de angajare, cererile de permis și formularele de înregistrare.",
        "icon": "clipboard"
      },
      {
        "title": "Formulare fiscale",
        "description": "Completați electronic documentele fiscale și formularele financiare.",
        "icon": "file-text"
      },
      {
        "title": "Contracte",
        "description": "Completați formularele de contract cu informațiile dumneavoastră înainte de a semna.",
        "icon": "file-signature"
      }
    ],
    "faq": [
      {
        "question": "Îmi pot salva progresul?",
        "answer": "Da, puteți salva formularele parțial completate și puteți continua mai târziu."
      },
      {
        "question": "Ce este aplatizarea formei?",
        "answer": "Aplatizarea transformă câmpurile formularului în conținut static, împiedicând editarea ulterioară."
      },
      {
        "question": "Sunt acceptate formularele XFA?",
        "answer": "Da, instrumentul acceptă atât formularele standard AcroForms, cât și formularele XFA."
      }
    ]
  },
  "form-creator": {
    "title": "Creator de formulare",
    "metaDescription": "Creați formulare PDF care pot fi completate. Adăugați câmpuri de text, casete de selectare și meniuri derulante la documente.",
    "keywords": [
      "creați formularul pdf",
      "creator de formulare pdf",
      "pdf care poate fi completat",
      "adăugați câmpuri de formular"
    ],
    "description": "<p>Form Creator transformă documente PDF statice în formulare interactive care se pot completa. Adăugați câmpuri de text, casete de selectare, butoane radio, meniuri derulante și multe altele pentru a crea formulare profesionale.</p>\n      <p>Trageți și plasați elemente de formular pe document, configurați proprietățile câmpului și creați formulare care pot fi completate electronic. Perfect pentru crearea de aplicații, sondaje și formulare de colectare a datelor.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul de convertit într-un formular."
      },
      {
        "step": 2,
        "title": "Adăugați câmpuri de formular",
        "description": "Selectați tipurile de câmpuri din bara de instrumente și faceți clic pentru a le plasa pe document."
      },
      {
        "step": 3,
        "title": "Configurați și Salvați",
        "description": "Setați proprietățile câmpului, apoi salvați și descărcați formularul PDF care poate fi completat."
      }
    ],
    "useCases": [
      {
        "title": "Formulare de cerere",
        "description": "Creați cereri de angajare completabile, formulare de membru și înregistrări.",
        "icon": "user-plus"
      },
      {
        "title": "Sondaje",
        "description": "Creați anchete interactive și chestionare pentru colectarea datelor.",
        "icon": "clipboard-list"
      },
      {
        "title": "Formulare de comandă",
        "description": "Creați formulare de comandă de produse cu câmpuri de cantitate și casete de selectare.",
        "icon": "shopping-cart"
      }
    ],
    "faq": [
      {
        "question": "Ce tipuri de câmp pot adăuga?",
        "answer": "Câmpuri de text, casete de selectare, butoane radio, meniuri derulante, selectatori de date și câmpuri de semnătură."
      },
      {
        "question": "Pot să fac câmpuri obligatorii?",
        "answer": "Da, puteți marca câmpurile ca fiind necesare și puteți adăuga reguli de validare."
      },
      {
        "question": "Pot adăuga calcule?",
        "answer": "Calculele de bază precum suma și media pot fi adăugate câmpurilor numerice."
      }
    ]
  },
  "remove-blank-pages": {
    "title": "Eliminați paginile goale",
    "metaDescription": "Detectați și eliminați automat paginile goale din documentele PDF.",
    "keywords": [
      "elimina paginile goale",
      "ștergeți paginile goale",
      "pdf curat",
      "Eliminator de pagini goale pdf"
    ],
    "description": "<p>Eliminare pagini goale detectează și elimină automat paginile goale din documentele PDF. Acest lucru este util pentru curățarea documentelor scanate, eliminarea paginilor de separare sau eliminarea paginilor goale incluse accidental.</p>\n      <p>Instrumentul folosește detectarea inteligentă pentru a identifica paginile cu adevărat goale, păstrând în același timp paginile cu conținut minim. Puteți ajusta pragul de sensibilitate pentru a controla ceea ce este considerat „blank”.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta documentul."
      },
      {
        "step": 2,
        "title": "Ajustați pragul",
        "description": "Setați pragul de detectare a golurilor dacă este necesar (implicit funcționează pentru majoritatea documentelor)."
      },
      {
        "step": 3,
        "title": "Eliminați și descărcați",
        "description": "Faceți clic pe Eliminare pentru a șterge paginile goale și a descărca PDF-ul curățat."
      }
    ],
    "useCases": [
      {
        "title": "Curățați documentele scanate",
        "description": "Eliminați paginile goale din documentele scanate în lot.",
        "icon": "scan"
      },
      {
        "title": "Eliminați separatoarele",
        "description": "Ștergeți paginile de separare goale din documentele îmbinate.",
        "icon": "minus"
      },
      {
        "title": "Reduceți dimensiunea fișierului",
        "description": "Eliminați paginile goale inutile pentru a reduce dimensiunea documentului.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Cum funcționează detectarea golului?",
        "answer": "Instrumentul analizează conținutul paginii și consideră paginile cu conținut minim sau fără conținut vizibil ca fiind goale."
      },
      {
        "question": "Pot previzualiza ce pagini vor fi eliminate?",
        "answer": "Da, paginile goale detectate sunt evidențiate pentru examinare înainte de eliminare."
      },
      {
        "question": "Ce se întâmplă dacă o pagină are doar un antet/subsol?",
        "answer": "Puteți ajusta pragul pentru a determina dacă paginile cu conținut minim ar trebui considerate goale."
      }
    ]
  },
  "image-to-pdf": {
    "title": "Imagine în PDF",
    "metaDescription": "Convertiți orice imagine în PDF. Suport pentru formatele JPG, PNG, WebP, BMP, TIFF, SVG și HEIC.",
    "keywords": [
      "imagine în pdf",
      "converti imaginea",
      "fotografie în pdf",
      "poză în pdf"
    ],
    "description": "<p>Imagine în PDF convertește imagini de orice format în documente PDF. Suportul pentru formatele JPG, PNG, WebP, BMP, TIFF, SVG și HEIC face din acesta un convertor universal de imagini.</p>\n      <p>Combinați mai multe imagini într-un singur PDF, aranjați-le în orice ordine și personalizați dimensiunea și orientarea paginii. Perfect pentru crearea de albume foto, arhive de documente sau portofolii.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că imaginile dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați imagini",
        "description": "Trageți și plasați imagini din orice format acceptat sau faceți clic pentru a selecta fișiere."
      },
      {
        "step": 2,
        "title": "Aranjați și configurați",
        "description": "Reordonați imaginile și selectați dimensiunea paginii și opțiunile de orientare."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a crea PDF-ul și a descărca rezultatul."
      }
    ],
    "useCases": [
      {
        "title": "Colecții de fotografii",
        "description": "Combină fotografii din diverse surse într-un singur album PDF.",
        "icon": "images"
      },
      {
        "title": "Documente cu format mixt",
        "description": "Convertiți imagini din diferite formate într-un PDF unificat.",
        "icon": "file-stack"
      },
      {
        "title": "Crearea arhivei",
        "description": "Creați arhive PDF din colecțiile de imagini pentru stocare pe termen lung.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Ce formate de imagine sunt acceptate?",
        "answer": "Formatele JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC și HEIF sunt toate acceptate."
      },
      {
        "question": "Pot amesteca diferite formate de imagine?",
        "answer": "Da, puteți combina imagini de diferite formate într-un singur PDF."
      },
      {
        "question": "Se va păstra calitatea imaginii?",
        "answer": "Da, imaginile sunt încorporate la calitatea lor originală, cu excepția cazului în care alegeți să le comprimați."
      }
    ]
  },
  "png-to-pdf": {
    "title": "PNG în PDF",
    "metaDescription": "Convertiți imagini PNG în PDF. Păstrați transparența și combinați mai multe fișiere PNG.",
    "keywords": [
      "png în pdf",
      "converti PNG",
      "convertor png",
      "imagine transparentă în pdf"
    ],
    "description": "<p>PNG în PDF transformă imaginile dvs. PNG în documente PDF, păstrând în același timp transparența. Perfect pentru grafică, logo-uri, capturi de ecran și imagini cu fundal transparent.</p>\n      <p>Combinați mai multe fișiere PNG într-un singur PDF, aranjați-le în orice ordine și personalizați setările paginii. Conversia menține calitatea înaltă a imaginilor dvs. originale.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că imaginile dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișiere PNG",
        "description": "Trageți și plasați imaginile PNG sau faceți clic pentru a selecta fișiere."
      },
      {
        "step": 2,
        "title": "Aranjați și configurați",
        "description": "Reordonați imaginile și selectați opțiunile pentru dimensiunea paginii."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a crea PDF-ul și a descărca."
      }
    ],
    "useCases": [
      {
        "title": "Portofoliu grafic",
        "description": "Compilați grafice și desene PNG într-un portofoliu profesional.",
        "icon": "palette"
      },
      {
        "title": "Documentația capturii de ecran",
        "description": "Convertiți capturile de ecran în documentație PDF.",
        "icon": "monitor"
      },
      {
        "title": "Colecții de sigle",
        "description": "Creați cataloage PDF cu logo-uri și active de marcă.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "Se păstrează transparența?",
        "answer": "Transparența PNG este păstrată în rezultatul PDF."
      },
      {
        "question": "Ce zici de animațiile PNG?",
        "answer": "PNG-urile animate sunt convertite ca imagini statice folosind primul cadru."
      },
      {
        "question": "Pot seta o culoare de fundal?",
        "answer": "Da, puteți alege o culoare de fundal pentru zonele transparente."
      }
    ]
  },
  "webp-to-pdf": {
    "title": "WebP în PDF",
    "metaDescription": "Convertiți imaginile WebP în PDF. Conversie modernă a formatului de imagine cu păstrarea calității.",
    "keywords": [
      "webp în pdf",
      "converti webp",
      "convertor webp",
      "imagine web în pdf"
    ],
    "description": "<p>WebP to PDF convertește imaginile WebP moderne în documente PDF. WebP este un format de imagine web popular, iar acest instrument facilitează convertirea acestor imagini pentru imprimare sau arhivare.</p>\n      <p>Combinați mai multe fișiere WebP într-un singur PDF cu setări de pagină personalizabile. Conversia păstrează calitatea imaginii în timp ce creează fișiere PDF compacte.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că imaginile dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișiere WebP",
        "description": "Trageți și plasați imaginile WebP sau faceți clic pentru a selecta fișiere."
      },
      {
        "step": 2,
        "title": "Configurați Opțiuni",
        "description": "Aranjați imaginile și selectați dimensiunea și orientarea paginii."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a vă crea PDF-ul."
      }
    ],
    "useCases": [
      {
        "title": "Arhivarea conținutului web",
        "description": "Convertiți imaginile web în PDF pentru arhivare offline.",
        "icon": "globe"
      },
      {
        "title": "Pregătirea imprimării",
        "description": "Convertiți imaginile WebP în PDF pentru imprimare.",
        "icon": "printer"
      },
      {
        "title": "Standardizare format",
        "description": "Convertiți WebP modern în PDF compatibil universal.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Ce este formatul WebP?",
        "answer": "WebP este un format de imagine modern dezvoltat de Google care oferă o compresie superioară pentru imaginile web."
      },
      {
        "question": "Calitatea este păstrată?",
        "answer": "Da, conversia păstrează calitatea originală a imaginii."
      },
      {
        "question": "Pot converti WebP animat?",
        "answer": "Fișierele animate WebP sunt convertite ca imagini statice."
      }
    ]
  },
  "svg-to-pdf": {
    "title": "SVG în PDF",
    "metaDescription": "Convertiți grafica vectorială SVG în PDF. Păstrați scalabilitatea și calitatea.",
    "keywords": [
      "svg în pdf",
      "converti svg",
      "vector în pdf",
      "grafică scalabilă în pdf"
    ],
    "description": "<p>SVG în PDF convertește grafica vectorială scalabilă în documente PDF, păstrând în același timp calitatea vectorială a acestora. Fișierele SVG rămân clare la orice dimensiune, iar această calitate este menținută în rezultatul PDF.</p>\n      <p>Perfect pentru a converti sigle, pictograme, ilustrații și desene tehnice. PDF-ul rezultat menține scalabilitatea graficelor vectoriale originale.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că fișierele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișiere SVG",
        "description": "Trageți și plasați fișierele SVG sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Configurați setările",
        "description": "Selectați dimensiunea paginii și opțiunile de aranjare."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a crea PDF-ul dvs. vectorial."
      }
    ],
    "useCases": [
      {
        "title": "Conversie logo",
        "description": "Convertiți siglele SVG în PDF pentru materiale de imprimare.",
        "icon": "award"
      },
      {
        "title": "Desene tehnice",
        "description": "Convertiți exporturile CAD și ilustrațiile tehnice în PDF.",
        "icon": "ruler"
      },
      {
        "title": "Colecții de pictograme",
        "description": "Creați cataloage PDF cu seturi de pictograme și grafică.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Calitatea vectorului este păstrată?",
        "answer": "Da, calitatea vectorului SVG este păstrată pe deplin în rezultatul PDF."
      },
      {
        "question": "Pot converti SVG-uri complexe?",
        "answer": "Da, sunt acceptate SVG-urile complexe cu gradienți, filtre și efecte."
      },
      {
        "question": "Dar fonturile încorporate?",
        "answer": "Fonturile încorporate în fișierele SVG sunt păstrate în PDF."
      }
    ]
  },
  "bmp-to-pdf": {
    "title": "BMP în PDF",
    "metaDescription": "Convertiți imaginile bitmap BMP în PDF. Suport de format vechi cu păstrarea calității.",
    "keywords": [
      "bmp în pdf",
      "converti bmp",
      "bitmap în pdf",
      "convertor bmp"
    ],
    "description": "<p>BMP în PDF convertește imaginile bitmap în documente PDF. BMP este un format de imagine vechi folosit în mod obișnuit în mediile Windows, iar acest instrument facilitează convertirea acestor fișiere în format PDF modern.</p>\n      <p>Combinați mai multe fișiere BMP într-un singur PDF cu setări personalizabile. Conversia comprimă fișierele BMP de obicei mari, menținând în același timp calitatea imaginii.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că imaginile dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișiere BMP",
        "description": "Trageți și plasați imaginile dvs. BMP sau faceți clic pentru a selecta fișierele."
      },
      {
        "step": 2,
        "title": "Configurați Opțiuni",
        "description": "Aranjați imaginile și selectați setările paginii."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a vă crea PDF-ul."
      }
    ],
    "useCases": [
      {
        "title": "Conversie fișier moștenit",
        "description": "Convertiți fișierele BMP vechi în format PDF modern.",
        "icon": "history"
      },
      {
        "title": "Capturi de ecran Windows",
        "description": "Convertiți capturile de ecran bitmap Windows în PDF.",
        "icon": "monitor"
      },
      {
        "title": "Modernizare arhivă",
        "description": "Actualizați arhivele vechi de imagini în format PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Dimensiunea fișierului va fi redusă?",
        "answer": "Da, fișierele BMP sunt de obicei comprimate semnificativ atunci când sunt convertite în PDF."
      },
      {
        "question": "Calitatea este păstrată?",
        "answer": "Da, calitatea imaginii este menținută în timpul conversiei."
      },
      {
        "question": "Ce adâncimi de culoare BMP sunt acceptate?",
        "answer": "Toate adâncimile de culoare BMP standard sunt acceptate, inclusiv pe 24 de biți și 32 de biți."
      }
    ]
  },
  "psd-to-pdf": {
    "title": "PSD în PDF",
    "metaDescription": "Convertiți fișierele Adobe Photoshop (PSD) în format PDF. Suportă mai multe fișiere și păstrează calitatea imaginii.",
    "keywords": [
      "PSD în pdf",
      "converti PSD",
      "Photoshop în pdf",
      "convertor PSD",
      "Adobe PSD în pdf"
    ],
    "description": "<p>PSD în PDF convertește fișierele Adobe Photoshop (PSD) în documente PDF. Acest instrument vă permite să vizualizați și să partajați modele PSD fără a fi nevoie să instalați Photoshop.</p>\n      <p>Puteți converti mai multe fișiere PSD simultan și le puteți combina într-un singur document PDF. Instrumentul procesează fiecare fișier PSD, redând straturile vizibile în pagini PDF de înaltă calitate.</p>\n      <p>Toate conversiile au loc local în browserul dvs., asigurându-vă că designurile dvs. rămân private și securizate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișiere PSD",
        "description": "Trageți și plasați fișierele PSD sau PSB sau faceți clic pentru a le selecta de pe dispozitiv."
      },
      {
        "step": 2,
        "title": "Aranjați comanda",
        "description": "Trageți și plasați miniaturile fișierelor pentru a le aranja în ordinea dorită."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a reda PSD-urile și pentru a descărca documentul PDF."
      }
    ],
    "useCases": [
      {
        "title": "Partajați modele",
        "description": "Partajați desene Photoshop cu clienții sau colegii care nu au Photoshop.",
        "icon": "share-2"
      },
      {
        "title": "Crearea portofoliului",
        "description": "Compilați-vă lucrările de design într-un portofoliu profesional PDF.",
        "icon": "layout"
      },
      {
        "title": "Pregătirea imprimării",
        "description": "Convertiți modelele în PDF pentru imprimare.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Am nevoie de Photoshop instalat?",
        "answer": "Nu, acest instrument funcționează în întregime în browser-ul dvs. fără a necesita Adobe Photoshop."
      },
      {
        "question": "Se păstrează straturile?",
        "answer": "Instrumentul redă starea vizibilă a PSD (imagine compozită). Straturile individuale sunt aplatizate în PDF."
      },
      {
        "question": "Care este dimensiunea maximă a fișierului?",
        "answer": "Puteți încărca fișiere de până la 100 MB fiecare. Procesarea fișierelor PSD mari poate dura un moment."
      }
    ]
  },
  "heic-to-pdf": {
    "title": "HEIC în PDF",
    "metaDescription": "Convertiți fotografiile iPhone HEIC în PDF. Conversia formatului de imagine Apple este ușoară.",
    "keywords": [
      "heic în pdf",
      "converti heic",
      "fotografie iPhone în pdf",
      "imagine Apple în pdf"
    ],
    "description": "<p>HEIC în PDF convertește fotografiile Apple cu format de imagine de înaltă eficiență în documente PDF. HEIC este formatul de fotografie implicit pe iPhone și iPad, iar acest instrument facilitează partajarea acestor fotografii.</p>\n      <p>Combinați mai multe fotografii HEIC într-un singur PDF, perfect pentru a crea albume foto sau arhive de documente din fotografiile iPhone.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că fotografiile dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișiere HEIC",
        "description": "Trageți și plasați fotografiile HEIC sau faceți clic pentru a selecta fișiere."
      },
      {
        "step": 2,
        "title": "Aranjați fotografii",
        "description": "Reordonați fotografiile și selectați setările paginii."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a vă crea PDF-ul."
      }
    ],
    "useCases": [
      {
        "title": "Albume foto iPhone",
        "description": "Creați albume PDF din fotografii iPhone pentru partajare.",
        "icon": "smartphone"
      },
      {
        "title": "Scanarea documentelor",
        "description": "Convertiți scanările documentelor iPhone în format PDF.",
        "icon": "scan"
      },
      {
        "title": "Partajare pe mai multe platforme",
        "description": "Convertiți HEIC în PDF pentru compatibilitate universală.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Ce este formatul HEIC?",
        "answer": "HEIC (High Efficiency Image Container) este formatul de imagine Apple care oferă o compresie mai bună decât JPEG."
      },
      {
        "question": "Sunt acceptate fotografiile live?",
        "answer": "Fotografiile live sunt convertite ca imagini statice folosind cadrul cheie."
      },
      {
        "question": "Sunt păstrate datele EXIF?",
        "answer": "Metadatele fotografiilor pot fi opțional păstrate sau eliminate în timpul conversiei."
      }
    ]
  },
  "tiff-to-pdf": {
    "title": "TIFF în PDF",
    "metaDescription": "Convertiți imaginile TIFF în PDF. Suport pentru fișiere TIFF cu mai multe pagini și conversie de înaltă calitate.",
    "keywords": [
      "tiff în pdf",
      "converti tiff",
      "tif în pdf",
      "tiff cu mai multe pagini"
    ],
    "description": "<p>TIFF în PDF convertește imaginile TIFF, inclusiv fișierele TIFF cu mai multe pagini, în documente PDF. TIFF este folosit în mod obișnuit pentru scanări de înaltă calitate și grafică profesională.</p>\n      <p>Fișierele TIFF cu mai multe pagini sunt convertite automat în PDF-uri cu mai multe pagini. Conversia păstrează calitatea înaltă a imaginilor dvs. originale.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că fișierele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișiere TIFF",
        "description": "Trageți și plasați fișierele TIFF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Configurați Opțiuni",
        "description": "Selectați setările paginii și opțiunile de compresie."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a vă crea PDF-ul."
      }
    ],
    "useCases": [
      {
        "title": "Documente scanate",
        "description": "Convertiți scanări de înaltă calitate din TIFF în PDF.",
        "icon": "scan"
      },
      {
        "title": "Grafică profesională",
        "description": "Convertiți grafica profesională TIFF pentru distribuție.",
        "icon": "image"
      },
      {
        "title": "Conversie în arhivă",
        "description": "Convertiți arhivele TIFF în format PDF mai accesibil.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Sunt acceptate TIFF-urile cu mai multe pagini?",
        "answer": "Da, fișierele TIFF cu mai multe pagini sunt convertite automat în PDF-uri cu mai multe pagini."
      },
      {
        "question": "Calitatea este păstrată?",
        "answer": "Da, calitatea TIFF este pe deplin păstrată în ieșirea PDF."
      },
      {
        "question": "Ce compresie este folosită?",
        "answer": "Puteți alege între opțiunile de compresie fără pierderi și cu pierderi."
      }
    ]
  },
  "txt-to-pdf": {
    "title": "Text în PDF",
    "metaDescription": "Convertiți fișierele text simplu în PDF. Personalizați fonturile, marginile și aspectul paginii.",
    "keywords": [
      "txt în pdf",
      "text în pdf",
      "convertiți fișierul text",
      "text simplu în pdf"
    ],
    "description": "<p>Text to PDF convertește fișierele text simplu în documente PDF formatate. Personalizați fonturile, dimensiunile, marginile și aspectul paginii pentru a crea documente cu aspect profesional din text simplu.</p>\n      <p>Perfect pentru a converti fișiere de cod, jurnale, note sau orice conținut text simplu în format PDF care poate fi partajat.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că fișierele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișierul text",
        "description": "Trageți și plasați fișierul .txt sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Personalizați formatarea",
        "description": "Alegeți fontul, dimensiunea, marginile și setările paginii."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a crea PDF-ul formatat."
      }
    ],
    "useCases": [
      {
        "title": "Documentația codului",
        "description": "Convertiți fișierele de cod sursă în PDF pentru documentare.",
        "icon": "code"
      },
      {
        "title": "Arhive de jurnal",
        "description": "Convertiți fișierele jurnal în PDF în scopuri de arhivare.",
        "icon": "file-text"
      },
      {
        "title": "Conversie de note",
        "description": "Convertiți note de text simplu în documente PDF formatate.",
        "icon": "sticky-note"
      }
    ],
    "faq": [
      {
        "question": "Ce fonturi sunt disponibile?",
        "answer": "Sunt disponibile mai multe fonturi, inclusiv fonturi monospațiu pentru cod."
      },
      {
        "question": "Înfășurarea liniei este automată?",
        "answer": "Da, liniile lungi sunt împachetate automat pentru a se potrivi paginii."
      },
      {
        "question": "Pot păstra formatarea?",
        "answer": "Spațiile albe și indentarea din textul original sunt păstrate."
      }
    ]
  },
  "json-to-pdf": {
    "title": "JSON în PDF",
    "metaDescription": "Convertiți fișierele JSON în PDF formatat. Evidențierea sintaxei și ieșirea structurată.",
    "keywords": [
      "json în pdf",
      "converti json",
      "json viewer",
      "formatator json"
    ],
    "description": "<p>JSON în PDF convertește fișierele de date JSON în documente PDF formatate și lizibile. Ieșirea include evidențierea sintaxei și indentarea adecvată pentru o citire ușoară.</p>\n      <p>Perfect pentru a documenta răspunsurile API, fișierele de configurare sau orice date JSON care trebuie partajate sau arhivate într-un format care poate fi citit.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că datele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișierul JSON",
        "description": "Trageți și plasați fișierul .json sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Configurați afișajul",
        "description": "Alegeți opțiunile de formatare și evidențierea sintaxelor."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a crea PDF-ul formatat."
      }
    ],
    "useCases": [
      {
        "title": "Documentația API",
        "description": "Convertiți răspunsurile API în PDF pentru documentare.",
        "icon": "code"
      },
      {
        "title": "Arhive de configurare",
        "description": "Arhivați fișierele de configurare în format PDF care poate fi citit.",
        "icon": "settings"
      },
      {
        "title": "Rapoarte de date",
        "description": "Creați rapoarte PDF din exporturile de date JSON.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "Este inclusă evidențierea de sintaxă?",
        "answer": "Da, sintaxa JSON este evidențiată cu culori pentru chei, valori și tipuri."
      },
      {
        "question": "Cum sunt gestionate datele imbricate?",
        "answer": "Obiectele imbricate și matricele sunt indentate corect pentru a fi lizibile."
      },
      {
        "question": "Dar fișierele JSON mari?",
        "answer": "Fișierele mari sunt paginate automat pe mai multe pagini."
      }
    ]
  },
  "word-to-pdf": {
    "title": "Word în PDF",
    "metaDescription": "Convertiți documente Word (DOCX) în PDF. Păstrați formatarea și aspectul în documentele dvs. convertite.",
    "keywords": [
      "cuvânt în pdf",
      "docx în pdf",
      "converti cuvânt",
      "convertor de cuvinte",
      "Microsoft Word în pdf"
    ],
    "description": "<p>Word to PDF convertește documentele Microsoft Word în format PDF, păstrând în același timp formatarea, aspectul și structura de conținut originale.</p>\n      <p>Încărcați fișierele dvs. DOCX și obțineți rezultate PDF de înaltă calitate, potrivite pentru partajare, imprimare sau arhivare. Conversia menține formatarea textului, stilurile de paragraf și structura de bază a documentului.</p>\n      <p>Toate conversiile au loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private și securizate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați document Word",
        "description": "Trageți și plasați fișierul .docx sau faceți clic pentru a selecta de pe dispozitiv."
      },
      {
        "step": 2,
        "title": "Așteptați procesarea",
        "description": "Instrumentul va încărca documentul și îl va pregăti pentru conversie."
      },
      {
        "step": 3,
        "title": "Descărcați PDF",
        "description": "Faceți clic pe Descărcare pentru a salva documentul PDF convertit."
      }
    ],
    "useCases": [
      {
        "title": "Partajarea documentelor",
        "description": "Convertiți documentele Word în PDF pentru partajare și vizualizare universală.",
        "icon": "share-2"
      },
      {
        "title": "Pregătirea imprimării",
        "description": "Creați PDF-uri gata de imprimat din documente Word.",
        "icon": "printer"
      },
      {
        "title": "Arhiva de documente",
        "description": "Arhivați documentele Word în format PDF stabil pentru stocare pe termen lung.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Formatul .doc este acceptat?",
        "answer": "În prezent, este acceptat doar formatul .docx. Vă rugăm să convertiți fișierele .doc în .docx mai întâi utilizând Microsoft Word sau LibreOffice."
      },
      {
        "question": "Imaginile sunt păstrate?",
        "answer": "Conținutul textului și formatarea de bază sunt păstrate. Aspectele complexe cu multe imagini pot avea randarea simplificată."
      },
      {
        "question": "Este conversia sigură?",
        "answer": "Da, toate procesările au loc în browser. Documentele dvs. nu părăsesc niciodată dispozitivul dvs."
      }
    ]
  },
  "excel-to-pdf": {
    "title": "Excel în PDF",
    "metaDescription": "Convertiți foile de calcul Excel (XLSX) în PDF. Păstrați tabelele și datele în documentele dvs. convertite.",
    "keywords": [
      "excel în pdf",
      "xlsx în pdf",
      "converti Excel",
      "foaie de calcul în pdf",
      "Microsoft Excel în pdf"
    ],
    "description": "<p>Excel în PDF convertește foile de calcul Microsoft Excel în format PDF, păstrând în același timp structura tabelului și organizarea datelor.</p>\n      <p>Încărcați fișierele XLSX și obțineți rezultate curate PDF cu tabele formatate corespunzător. Fiecare foaie din registrul de lucru devine o secțiune separată în PDF.</p>\n      <p>Toate conversiile au loc local în browserul dvs., asigurându-vă că datele dvs. rămân private și securizate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișierul Excel",
        "description": "Trageți și plasați fișierul .xlsx sau faceți clic pentru a selecta de pe dispozitiv."
      },
      {
        "step": 2,
        "title": "Așteptați procesarea",
        "description": "Instrumentul va încărca foaia de calcul și va converti toate foile."
      },
      {
        "step": 3,
        "title": "Descărcați PDF",
        "description": "Faceți clic pe Descărcare pentru a salva documentul PDF convertit."
      }
    ],
    "useCases": [
      {
        "title": "Partajare de raportare",
        "description": "Convertiți rapoartele Excel în PDF pentru a le distribui părților interesate.",
        "icon": "file-text"
      },
      {
        "title": "Arhivarea datelor",
        "description": "Arhivați datele foii de calcul în format PDF stabil.",
        "icon": "archive"
      },
      {
        "title": "Pregătirea imprimării",
        "description": "Creați PDF-uri gata de imprimat din foile de lucru Excel.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Sunt acceptate mai multe foi?",
        "answer": "Da, toate foile din registrul de lucru sunt convertite și incluse în PDF."
      },
      {
        "question": "Formatul .xls este acceptat?",
        "answer": "În prezent, este acceptat doar formatul .xlsx. Salvați mai întâi fișierele .xls ca .xlsx."
      },
      {
        "question": "Se păstrează formulele?",
        "answer": "PDF-ul arată valorile calculate. Formulele nu sunt executabile în format PDF."
      }
    ]
  },
  "pptx-to-pdf": {
    "title": "PowerPoint în PDF",
    "metaDescription": "Convertiți prezentările PowerPoint (PPTX) în PDF. Păstrați diapozitivele și conținutul pentru partajare ușoară.",
    "keywords": [
      "powerpoint în pdf",
      "pptx în pdf",
      "converti pptx",
      "prezentare în pdf",
      "diapozitive în pdf"
    ],
    "description": "<p>PowerPoint to PDF convertește prezentările Microsoft PowerPoint în format PDF, păstrând conținutul și textul diapozitivelor pentru partajare și vizualizare ușoară.</p>\n      <p>Fiecare diapozitiv devine o pagină în PDF, menținând fluxul de prezentare. Perfect pentru a partaja prezentări cu persoane care nu au PowerPoint instalat.</p>\n      <p>Toate conversiile au loc local în browserul dvs., asigurându-vă că prezentările dvs. rămân private și securizate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișierul PowerPoint",
        "description": "Trageți și plasați fișierul .pptx sau faceți clic pentru a selecta de pe dispozitiv."
      },
      {
        "step": 2,
        "title": "Așteptați procesarea",
        "description": "Instrumentul va extrage conținutul diapozitivelor și va crea PDF-ul."
      },
      {
        "step": 3,
        "title": "Descărcați PDF",
        "description": "Faceți clic pe Descărcare pentru a salva documentul PDF convertit."
      }
    ],
    "useCases": [
      {
        "title": "Partajarea prezentării",
        "description": "Partajați prezentări cu oricine fără a necesita PowerPoint.",
        "icon": "share-2"
      },
      {
        "title": "Crearea fișei",
        "description": "Creați documente PDF din diapozitivele dvs. de prezentare.",
        "icon": "file-text"
      },
      {
        "title": "Prezentări de arhivă",
        "description": "Arhivați prezentările în format PDF stabil.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Animațiile sunt păstrate?",
        "answer": "PDF este un format static, astfel încât animațiile și tranzițiile nu sunt păstrate. Fiecare diapozitiv devine o pagină statică."
      },
      {
        "question": "Formatul .ppt este acceptat?",
        "answer": "În prezent, este acceptat doar formatul .pptx. Vă rugăm să convertiți mai întâi fișierele .ppt în .pptx."
      },
      {
        "question": "Sunt incluse notele vorbitorului?",
        "answer": "În prezent, notele difuzorului nu sunt incluse în ieșirea PDF."
      }
    ]
  },
  "xps-to-pdf": {
    "title": "XPS în PDF",
    "metaDescription": "Convertiți documentele XPS în format PDF. Conversie de înaltă fidelitate păstrând aspectul și grafica.",
    "keywords": [
      "xps în pdf",
      "converti xps",
      "convertor xps",
      "Microsoft xps în pdf",
      "oxps în pdf"
    ],
    "description": "<p>XPS în PDF convertește documentele Microsoft XPS (XML Paper Specification) în format PDF, păstrând în același timp aspectul original, textul și grafica vectorială.</p>\n      <p>XPS este un format de document fix similar cu PDF. Acest instrument oferă o conversie de înaltă fidelitate folosind analiza XPS nativă, asigurând reproducerea exactă a documentelor dvs.</p>\n      <p>Toate conversiile au loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private și securizate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișierul XPS",
        "description": "Trageți și plasați fișierul .xps sau faceți clic pentru a selecta de pe dispozitiv."
      },
      {
        "step": 2,
        "title": "Așteptați procesarea",
        "description": "Instrumentul va analiza și converti documentul XPS."
      },
      {
        "step": 3,
        "title": "Descărcați PDF",
        "description": "Faceți clic pe Descărcare pentru a salva documentul PDF convertit."
      }
    ],
    "useCases": [
      {
        "title": "Format Conversie",
        "description": "Convertiți documentele XPS în format PDF mai acceptat.",
        "icon": "file"
      },
      {
        "title": "Partajarea documentelor",
        "description": "Partajați documente XPS cu utilizatorii care nu au vizualizatoare XPS.",
        "icon": "share-2"
      },
      {
        "title": "Migrare arhivă",
        "description": "Migrați arhivele XPS în format PDF pentru o mai bună compatibilitate.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Ce este formatul XPS?",
        "answer": "XPS (XML Paper Specification) este formatul de document fix al Microsoft, similar cu PDF. Este folosit în mod obișnuit pentru imprimarea Windows."
      },
      {
        "question": "Conversia este fără pierderi?",
        "answer": "Da, conversia păstrează textul, grafica și aspectul cu fidelitate ridicată."
      },
      {
        "question": "Sunt acceptate fișierele XPS cu mai multe pagini?",
        "answer": "Da, toate paginile din documentul XPS sunt convertite în PDF."
      }
    ]
  },
  "rtf-to-pdf": {
    "title": "RTF în PDF",
    "metaDescription": "Convertiți fișierele RTF (Rich Text Format) în PDF. Păstrați formatarea textului în documentele dvs.",
    "keywords": [
      "rtf în pdf",
      "converti rtf",
      "text îmbogățit în pdf",
      "convertor rtf"
    ],
    "description": "<p>RTF în PDF convertește fișierele Rich Text Format în documente PDF. RTF este un format de text acceptat pe scară largă, care include formatare de bază, cum ar fi fonturile, culorile și stilurile.</p>\n      <p>Încărcați fișierele RTF și obțineți rezultate curate PDF, păstrând în același timp conținutul text și formatarea de bază. Perfect pentru convertirea documentelor vechi în format PDF modern.</p>\n      <p>Toate conversiile au loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private și securizate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișierul RTF",
        "description": "Trageți și plasați fișierul .rtf sau faceți clic pentru a selecta de pe dispozitiv."
      },
      {
        "step": 2,
        "title": "Așteptați procesarea",
        "description": "Instrumentul va analiza și converti conținutul RTF."
      },
      {
        "step": 3,
        "title": "Descărcați PDF",
        "description": "Faceți clic pe Descărcare pentru a salva documentul PDF convertit."
      }
    ],
    "useCases": [
      {
        "title": "Conversie moștenită",
        "description": "Convertiți documentele RTF vechi în format PDF modern.",
        "icon": "history"
      },
      {
        "title": "Partajarea documentelor",
        "description": "Partajați documente RTF în format PDF care poate fi vizualizat universal.",
        "icon": "share-2"
      },
      {
        "title": "Documente de arhivare",
        "description": "Arhivați fișierele RTF în format PDF stabil pentru stocare pe termen lung.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Ce formatare se păstrează?",
        "answer": "Formatarea de bază a textului, inclusiv fonturile, paragrafele și stilurile sunt convertite. Caracteristicile complexe RTF pot fi simplificate."
      },
      {
        "question": "Pot converti mai multe fișiere RTF?",
        "answer": "În prezent, un fișier este convertit odată. Utilizați Merge PDF pentru a combina mai multe fișiere convertite."
      },
      {
        "question": "Sunt acceptate imaginile încorporate?",
        "answer": "Conținutul text este punctul central. Este posibil ca obiectele încorporate să nu fie redate."
      }
    ]
  },
  "epub-to-pdf": {
    "title": "EPUB în PDF",
    "metaDescription": "Convertiți cărțile electronice EPUB în PDF. Păstrați formatarea, imaginile și structura capitolelor.",
    "keywords": [
      "epub în pdf",
      "converti epub",
      "ebook în pdf",
      "convertor epub"
    ],
    "description": "<p>EPUB în PDF convertește fișierele de cărți electronice în documente PDF de înaltă calitate. EPUB este cel mai popular format de carte electronică, folosit de majoritatea e-readerelor și bibliotecilor digitale.</p>\n      <p>Acest instrument păstrează formatarea textului, imaginile și structura de capitole a cărților dvs. electronice. Perfect pentru tipărirea, arhivarea sau partajarea cărților electronice într-un format care poate fi vizualizat universal.</p>\n      <p>Toate conversiile au loc local în browserul dvs., folosind tehnologia avansată de randare, asigurându-vă că cărțile dvs. rămân private și conversia este rapidă.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișierul EPUB",
        "description": "Trageți și plasați fișierul .epub sau faceți clic pentru a selecta de pe dispozitiv."
      },
      {
        "step": 2,
        "title": "Așteptați conversia",
        "description": "Instrumentul va randa și va converti toate paginile cărții dvs. electronice."
      },
      {
        "step": 3,
        "title": "Descărcați PDF",
        "description": "Faceți clic pe Descărcare pentru a salva documentul PDF convertit."
      }
    ],
    "useCases": [
      {
        "title": "Imprimați cărți electronice",
        "description": "Convertiți cărți electronice în PDF pentru imprimare fizică.",
        "icon": "printer"
      },
      {
        "title": "Arhivă cărți",
        "description": "Stocați cărți electronice în format PDF stabil pe termen lung.",
        "icon": "archive"
      },
      {
        "title": "Partajați documente",
        "description": "Partajați cărți electronice cu oricine, chiar și fără un e-reader.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Formatarea este păstrată?",
        "answer": "Da! Acest instrument folosește redarea nativă EPUB, păstrând formatarea textului, imaginile și aspectul cu fidelitate ridicată."
      },
      {
        "question": "Sunt acceptate EPUB-urile protejate prin DRM?",
        "answer": "Nu, cărțile electronice protejate prin DRM nu pot fi convertite. Sunt acceptate numai fișierele EPUB fără DRM."
      },
      {
        "question": "Cum se determină dimensiunea paginii?",
        "answer": "Conținutul EPUB este redat la dimensiunea standard a paginii A4 pentru o lizibilitate optimă."
      }
    ]
  },
  "mobi-to-pdf": {
    "title": "MOBI în PDF",
    "metaDescription": "Convertiți cărțile electronice MOBI în PDF. Suport pentru formatul Kindle cu randare de înaltă calitate.",
    "keywords": [
      "mobi în pdf",
      "converti mobi",
      "kindle în pdf",
      "azw în pdf",
      "convertor mobi"
    ],
    "description": "<p>MOBI to PDF convertește fișierele de cărți electronice Amazon Kindle în documente PDF de înaltă calitate. Formatul MOBI (inclusiv AZW și AZW3) este formatul de carte electronică proprietar al Amazon, utilizat pe dispozitivele Kindle.</p>\n      <p>Acest instrument păstrează formatarea textului, imaginile și structura cărților tale Kindle. Perfect pentru imprimare, arhivare sau citire pe dispozitive care nu acceptă formatul MOBI.</p>\n      <p>Toate conversiile au loc local în browserul dvs., folosind tehnologia avansată de randare, asigurând că cărțile dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișierul MOBI",
        "description": "Trageți și plasați fișierul .mobi, .azw sau .azw3 sau faceți clic pentru a selecta de pe dispozitiv."
      },
      {
        "step": 2,
        "title": "Așteptați conversia",
        "description": "Instrumentul va randa și va converti toate paginile cărții dvs. electronice."
      },
      {
        "step": 3,
        "title": "Descărcați PDF",
        "description": "Faceți clic pe Descărcare pentru a salva documentul PDF convertit."
      }
    ],
    "useCases": [
      {
        "title": "Tipăriți cărți Kindle",
        "description": "Convertiți cărți electronice Kindle în PDF pentru imprimare fizică.",
        "icon": "printer"
      },
      {
        "title": "Arhivă cărți",
        "description": "Stocați cărți Kindle în format PDF universal.",
        "icon": "archive"
      },
      {
        "title": "Citire pe mai multe dispozitive",
        "description": "Citiți cărți Kindle pe dispozitive care acceptă numai PDF.",
        "icon": "tablet-smartphone"
      }
    ],
    "faq": [
      {
        "question": "Ce formate MOBI sunt acceptate?",
        "answer": "Acest instrument acceptă fișiere .mobi, .azw și .azw3 (versiuni non-DRM)."
      },
      {
        "question": "Sunt acceptate cărțile Kindle protejate prin DRM?",
        "answer": "Nu, cărțile electronice protejate prin DRM nu pot fi convertite. Sunt acceptate numai fișierele fără DRM."
      },
      {
        "question": "Formatarea mea va fi păstrată?",
        "answer": "Da! Instrumentul folosește redarea nativă MOBI pentru a păstra textul, imaginile și aspectul."
      }
    ]
  },
  "djvu-to-pdf": {
    "title": "DJVU în PDF",
    "metaDescription": "Convertiți fișierele de document DJVU în PDF. Redare de înaltă calitate pentru documente și cărți scanate.",
    "keywords": [
      "djvu în pdf",
      "converti djvu",
      "convertor djvu",
      "djvu pdf",
      "djv în pdf"
    ],
    "description": "<p>DJVU to PDF convertește fișierele de documente DjVu în documente PDF de înaltă calitate. DjVu este un format de fișier de computer conceput în principal pentru a stoca documente scanate, în special cele care conțin o combinație de text, desene și fotografii.</p>\n      <p>Acest instrument redă fiecare pagină a fișierului dvs. DJVU la DPI (puncte pe inch) alese de dvs. și le combină într-un document PDF care poate fi căutat. Perfect pentru a converti cărți scanate, manuale tehnice și documente de arhivă.</p>\n      <p>Toate conversiile au loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private și securizate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișierul DJVU",
        "description": "Trageți și plasați fișierul .djvu sau .djv sau faceți clic pentru a selecta de pe dispozitiv."
      },
      {
        "step": 2,
        "title": "Configurați Opțiuni",
        "description": "Alegeți DPI de ieșire (72, 150 sau 300) și calitatea imaginii pentru PDF."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Convertiți în PDF și descărcați documentul convertit."
      }
    ],
    "useCases": [
      {
        "title": "Documente de arhivare",
        "description": "Convertiți arhivele DJVU în format PDF universal.",
        "icon": "archive"
      },
      {
        "title": "Partajați cărți scanate",
        "description": "Partajați cărțile scanate în format PDF pentru o compatibilitate mai largă.",
        "icon": "share-2"
      },
      {
        "title": "Imprimați documente",
        "description": "Convertiți DJVU în PDF de înaltă calitate pentru imprimare.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Ce este formatul DJVU?",
        "answer": "DjVu este un format de fișier conceput pentru stocarea documentelor scanate, în special a celor cu text, desene și imagini. Oferă o compresie mai bună decât PDF pentru conținutul scanat."
      },
      {
        "question": "Ce DPI ar trebui să aleg?",
        "answer": "72 DPI este potrivit pentru vizualizarea web, 150 DPI pentru documente standard și 300 DPI pentru imprimare de înaltă calitate."
      },
      {
        "question": "Textul poate fi căutat?",
        "answer": "Textul va fi redat ca imagini. Dacă aveți nevoie de text care poate fi căutat, luați în considerare utilizarea instrumentului nostru OCR PDF după conversie."
      }
    ]
  },
  "fb2-to-pdf": {
    "title": "FB2 în PDF",
    "metaDescription": "Convertiți cărțile electronice FictionBook (FB2) în PDF. Suportă mai multe fișiere cu randare de înaltă calitate.",
    "keywords": [
      "fb2 în pdf",
      "converti fb2",
      "carte de ficțiune în pdf",
      "convertor fb2",
      "fb2.zip în pdf"
    ],
    "description": "<p>FB2 în PDF convertește fișierele de cărți electronice FictionBook (FB2) în documente PDF de înaltă calitate. FB2 este un format popular de cărți electronice bazat pe XML, utilizat pe scară largă în Rusia și Europa de Est.</p>\n      <p>Acest instrument acceptă atât fișierele .fb2, cât și .fb2.zip și poate procesa mai multe fișiere simultan. Păstrează formatarea textului, imaginile și structura de capitole a cărților dvs. electronice.</p>\n      <p>Toate conversiile au loc local în browserul dvs., folosind tehnologia avansată de randare, asigurându-vă că cărțile dvs. rămân private și conversia este rapidă.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișiere FB2",
        "description": "Trageți și plasați unul sau mai multe fișiere .fb2 sau .fb2.zip sau faceți clic pentru a selecta de pe dispozitiv."
      },
      {
        "step": 2,
        "title": "Selectați Calitate",
        "description": "Alegeți calitatea ieșirii: Scăzută (72 DPI), Medie (150 DPI) sau Înaltă (300 DPI)."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Convertiți în PDF și descărcați documentele convertite."
      }
    ],
    "useCases": [
      {
        "title": "Imprimați cărți electronice",
        "description": "Convertiți cărți electronice FB2 în PDF pentru imprimare fizică.",
        "icon": "printer"
      },
      {
        "title": "Conversie în lot",
        "description": "Convertiți simultan mai multe fișiere FB2 în PDF.",
        "icon": "layers"
      },
      {
        "title": "Format universal",
        "description": "Partajați cărți electronice în format PDF care funcționează pe orice dispozitiv.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Pot converti mai multe fișiere FB2 simultan?",
        "answer": "Da! Acest instrument acceptă conversia în lot a până la 20 de fișiere FB2 simultan."
      },
      {
        "question": "Fișierele .fb2.zip sunt acceptate?",
        "answer": "Da, instrumentul extrage și convertește automat fișierele FB2 din arhivele .fb2.zip."
      },
      {
        "question": "Formatarea este păstrată?",
        "answer": "Da! Instrumentul folosește randarea nativă FB2, păstrând formatarea textului, imaginile și structura capitolelor cu fidelitate ridicată."
      }
    ]
  },
  "pdf-to-jpg": {
    "title": "PDF în JPG",
    "metaDescription": "Convertiți paginile PDF în imagini JPG. Extracție de înaltă calitate cu rezoluție personalizabilă.",
    "keywords": [
      "pdf în jpg",
      "pdf în jpeg",
      "converti pdf în imagine",
      "extrage imagini pdf"
    ],
    "description": "<p>PDF în JPG convertește paginile documentelor PDF în imagini JPG de înaltă calitate. Extrageți toate paginile sau selectați anumite pagini de convertit, cu setări de rezoluție și calitate personalizabile.</p>\n      <p>Perfect pentru extragerea imaginilor din PDF-uri, crearea de miniaturi sau convertirea documentelor pentru utilizare web.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Selectați Pagini și calitate",
        "description": "Alegeți ce pagini să convertiți și setați opțiunile de calitate/DPI."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a extrage imaginile și a le descărca ca ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Publicare web",
        "description": "Convertiți paginile PDF în imagini pentru utilizarea site-ului web.",
        "icon": "globe"
      },
      {
        "title": "Social Media",
        "description": "Extrageți pagini ca imagini pentru partajarea rețelelor sociale.",
        "icon": "share-2"
      },
      {
        "title": "Prezentări",
        "description": "Convertiți diapozitive PDF în imagini pentru prezentări.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Ce setări de calitate sunt disponibile?",
        "answer": "Puteți seta DPI de la 72 la 300 și calitatea JPEG de la 1 la 100."
      },
      {
        "question": "Pot converti numai anumite pagini?",
        "answer": "Da, puteți selecta pagini individuale sau intervale de pagini de convertit."
      },
      {
        "question": "Cum sunt gestionate mai multe pagini?",
        "answer": "Fiecare pagină devine un fișier JPG separat, descărcat ca arhivă ZIP."
      }
    ]
  },
  "pdf-to-png": {
    "title": "PDF în PNG",
    "metaDescription": "Convertiți paginile PDF în imagini PNG. Calitate fără pierderi cu suport pentru transparență.",
    "keywords": [
      "pdf în png",
      "converti pdf în png",
      "extragerea imaginii pdf",
      "conversie pdf fără pierderi"
    ],
    "description": "<p>PDF în PNG convertește paginile documentelor PDF în imagini PNG de înaltă calitate, cu compresie fără pierderi. Formatul PNG păstrează perfect calitatea imaginii și acceptă transparența.</p>\n      <p>Ideal pentru extragerea de grafice, diagrame sau orice conținut în care păstrarea calității este esențială.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Configurați Opțiuni",
        "description": "Selectați paginile și setați opțiunile de rezoluție (DPI)."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a extrage imagini PNG."
      }
    ],
    "useCases": [
      {
        "title": "Extragere grafică",
        "description": "Extrageți diagrame și grafice cu o calitate perfectă.",
        "icon": "image"
      },
      {
        "title": "Design Assets",
        "description": "Convertiți desenele PDF în PNG pentru software-ul de editare.",
        "icon": "palette"
      },
      {
        "title": "Documentație",
        "description": "Creați imagini de înaltă calitate pentru documentația tehnică.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "De ce să alegeți PNG în locul JPG?",
        "answer": "PNG oferă suport pentru compresie și transparență fără pierderi, ideal pentru grafică și text."
      },
      {
        "question": "Sunt acceptate fundalurile transparente?",
        "answer": "Da, paginile PDF cu transparență sunt păstrate în format PNG."
      },
      {
        "question": "Ce DPI ar trebui să folosesc?",
        "answer": "Utilizați 150 DPI pentru vizualizarea pe ecran, 300 DPI pentru imprimare."
      }
    ]
  },
  "pdf-to-webp": {
    "title": "PDF în WebP",
    "metaDescription": "Convertiți paginile PDF în imagini WebP. Format modern cu compresie excelentă.",
    "keywords": [
      "pdf în webp",
      "converti pdf în webp",
      "format de imagine modern",
      "imagini optimizate web"
    ],
    "description": "<p>PDF în WebP convertește paginile de document PDF în imagini WebP, formatul modern de imagine Google care oferă o compresie excelentă la calitate înaltă.</p>\n      <p>Imaginile WebP sunt mai mici decât JPG sau PNG, păstrând în același timp o calitate comparabilă, ceea ce le face ideale pentru utilizarea web.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Setați Opțiuni de calitate",
        "description": "Alegeți paginile și setați setările de calitate/compresie."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a crea imagini WebP."
      }
    ],
    "useCases": [
      {
        "title": "Optimizare web",
        "description": "Creați imagini optimizate pentru web din conținut PDF.",
        "icon": "globe"
      },
      {
        "title": "Economii de lățime de bandă",
        "description": "Reduceți dimensiunile fișierelor de imagine pentru o încărcare mai rapidă.",
        "icon": "zap"
      },
      {
        "title": "Site-uri web moderne",
        "description": "Utilizați formate moderne de imagine pentru proiecte web contemporane.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Ce este formatul WebP?",
        "answer": "WebP este un format de imagine modern de la Google care oferă o compresie superioară."
      },
      {
        "question": "Este WebP acceptat pe scară largă?",
        "answer": "Da, toate browserele moderne acceptă formatul WebP."
      },
      {
        "question": "Cât de mici sunt fișierele WebP?",
        "answer": "Fișierele WebP sunt de obicei cu 25-35% mai mici decât fișierele JPG echivalente."
      }
    ]
  },
  "pdf-to-bmp": {
    "title": "PDF în BMP",
    "metaDescription": "Convertiți paginile PDF în imagini bitmap BMP. Format necomprimat pentru compatibilitate maximă.",
    "keywords": [
      "pdf în bmp",
      "converti pdf în bitmap",
      "imagini necomprimate",
      "format moștenit"
    ],
    "description": "<p>PDF în BMP convertește paginile documentelor PDF în imagini bitmap BMP. BMP este un format necomprimat care asigură compatibilitate maximă cu sistemele și aplicațiile vechi.</p>\n      <p>Deși fișierele BMP sunt mai mari decât formatele comprimate, ele oferă o calitate perfectă și compatibilitate universală.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Selectați Pagini",
        "description": "Alegeți ce pagini să convertiți și setați DPI."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a crea imagini BMP."
      }
    ],
    "useCases": [
      {
        "title": "Sisteme vechi",
        "description": "Creați imagini compatibile cu software-ul mai vechi.",
        "icon": "history"
      },
      {
        "title": "Aplicații Windows",
        "description": "Generați fișiere BMP pentru aplicațiile specifice Windows.",
        "icon": "monitor"
      },
      {
        "title": "Arhive necomprimate",
        "description": "Creați arhive de imagini necomprimate din PDF-uri.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "De ce să folosiți formatul BMP?",
        "answer": "BMP oferă calitate necomprimată și compatibilitate maximă cu sistemele vechi."
      },
      {
        "question": "Fișierele BMP sunt mai mari?",
        "answer": "Da, fișierele BMP sunt necomprimate și semnificativ mai mari decât JPG sau PNG."
      },
      {
        "question": "Ce adâncimi de culoare sunt acceptate?",
        "answer": "Sunt acceptate adâncimi de culoare pe 24 și 32 de biți."
      }
    ]
  },
  "pdf-to-tiff": {
    "title": "PDF în TIFF",
    "metaDescription": "Convertiți imagini PDF în TIFF. Calitate profesională cu suport pentru mai multe pagini.",
    "keywords": [
      "pdf în tiff",
      "converti pdf în tiff",
      "imagini profesionale",
      "tiff cu mai multe pagini"
    ],
    "description": "<p>PDF în TIFF convertește documentele PDF în imagini TIFF de înaltă calitate. TIFF este formatul preferat pentru imprimarea și arhivarea profesională datorită compresiei fără pierderi.</p>\n      <p>Creați fișiere TIFF cu o singură pagină sau combinați toate paginile într-un fișier TIFF cu mai multe pagini. Perfect pentru scopuri profesionale și de arhivă.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Configurați ieșirea",
        "description": "Alegeți TIFF cu o singură pagină sau cu mai multe pagini și setați DPI."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a crea imagini TIFF."
      }
    ],
    "useCases": [
      {
        "title": "Imprimare profesională",
        "description": "Creați fișiere TIFF gata de imprimare din documente PDF.",
        "icon": "printer"
      },
      {
        "title": "Arhivarea documentelor",
        "description": "Arhivați documente în format TIFF de înaltă calitate.",
        "icon": "archive"
      },
      {
        "title": "Editura",
        "description": "Convertiți PDF-uri în TIFF pentru a publica fluxurile de lucru.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Pot crea fișiere TIFF cu mai multe pagini?",
        "answer": "Da, puteți combina toate paginile PDF într-un singur TIFF cu mai multe pagini."
      },
      {
        "question": "Ce opțiuni de compresie sunt disponibile?",
        "answer": "LZW, ZIP și nicio opțiune de compresie sunt disponibile."
      },
      {
        "question": "Ce DPI ar trebui să folosesc pentru imprimare?",
        "answer": "Utilizați 300 DPI sau mai mare pentru imprimare profesională."
      }
    ]
  },
  "pdf-to-cbz": {
    "title": "PDF în CBZ",
    "metaDescription": "Convertiți documente PDF în arhive de înaltă definiție Comic Book ZIP (.cbz). Metadate Caliber OPF, ComicInfo XML și ZIP Comment încorporate pentru o catalogare perfectă cu mai multe cititoare.",
    "keywords": [
      "pdf în cbz",
      "pdf în benzi desenate",
      "ambalaj cbz",
      "arhivă de benzi desenate calibru",
      "metadatele comicinfo"
    ],
    "description": "<p>PDF to CBZ este creat la comandă pentru pasionații de benzi desenate și arhivații de cărți electronice digitale. Redă fiecare pagină a volumelor dvs. PDF în grafică rasterizată de înaltă fidelitate și le compilează într-un pachet standard Comic Book ZIP (.cbz).</p>\n      <p>Pentru a elimina răzuirea manuală frustrantă în sisteme precum Calibre, Komga, Kavita sau CDisplayEx, procesorul generează și injectează automat atât fișiere <strong>ComicInfo.xml</strong>, cât și <strong>metadata.opf</strong> în interior, în timp ce scrie simultan un <strong>metadatele ComicBookInfo JSON</strong> standardizate direct în comentariul fișierului ZIP.</strong>.\n      <p>Include glisoare de configurare complete pentru calitatea compresiei imaginii, scara dimensiunilor paginii, comutări de citire a aspectului de la dreapta la stânga (modul Manga) și filtrarea culorilor alb-negru în tonuri de gri.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați benzi desenate PDF",
        "description": "Trageți și plasați fișierul PDF principal de benzi desenate, artbook sau manga."
      },
      {
        "step": 2,
        "title": "Introduceți metadatele benzilor desenate",
        "description": "Completați câmpurile Series, Volum, Title, Writer și Publisher și comutați între aspectul sau optimizarea în tonuri de gri."
      },
      {
        "step": 3,
        "title": "Compilați și descărcați",
        "description": "Faceți clic pe Conversie pentru a compila și a prelua fișierul .cbz bogat în metadate, gata instantaneu pentru Calibre."
      }
    ],
    "useCases": [
      {
        "title": "Ambalaj de benzi desenate retrograd",
        "description": "Transformați cărțile PDF scanate brute în fișiere de benzi desenate CBZ compacte, conforme cu standardele, ușor de răzuit de către managerii de biblioteci de benzi desenate.",
        "icon": "book"
      },
      {
        "title": "Integrare calibru zero-efort",
        "description": "Schema încorporată metadata.opf îi permite lui Caliber să preia și să clasifice creatorii și problemele de volum fără o căutare manuală.",
        "icon": "database"
      },
      {
        "title": "Îmbunătățirea ecranului E-Ink",
        "description": "Prefiltrează canalele grafice de culoare în tonuri de gri cu contrast ridicat la compilare, sporind reîmprospătarea vizuală și claritatea pe ecranele E-ink, economisind în același timp spațiul de stocare.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Ce este un fișier .cbz?",
        "answer": "Un fișier CBZ este un format de container de arhivă specializat pentru seria de benzi desenate. Este formatat intern ca un pachet ZIP care conține imagini de pagină numerotate secvențial alături de fișiere XML cu metadate structurale."
      },
      {
        "question": "Cum sunt compatibile metadatele?",
        "answer": "Compilăm și încorporăm ComicInfo.xml, metadata.opf și comentariile fișierelor ZIP într-o singură trecere. Acest lucru garantează conformitatea absolută în mai multe ecosisteme de benzi desenate și cărți electronice."
      },
      {
        "question": "De ce să folosiți modul în tonuri de gri?",
        "answer": "Dacă citiți pe un cititor de cerneală electronică în tonuri de gri (cum ar fi Kindle sau Kobo), compilarea direct în tonuri de gri reduce imaginea fantomă a artefactelor, oferă niveluri de contrast superioare și micșorează dimensiunea finală a fișierului CBZ."
      }
    ]
  },
  "pdf-to-svg": {
    "title": "PDF în SVG",
    "metaDescription": "Convertiți paginile PDF în grafică vectorială SVG. Scalabilitate perfectă la orice dimensiune cu exportul de pagină individuală.",
    "keywords": [
      "pdf în svg",
      "converti pdf în svg",
      "grafică vectorială",
      "pdf scalabil",
      "convertor svg"
    ],
    "description": "<p>PDF în SVG convertește fiecare pagină a documentului PDF într-o grafică vectorială scalabilă (SVG). SVG este un format vectorial care menține calitatea perfectă la orice nivel de zoom sau dimensiune de imprimare.</p>\n      <p>Spre deosebire de formatele raster (JPG, PNG), graficele SVG nu devin niciodată pixelate atunci când sunt scalate. Acest lucru le face ideale pentru logo-uri, diagrame, desene tehnice și orice conținut care trebuie afișat la diferite dimensiuni.</p>\n      <p>Previzualizați fiecare pagină convertită și descărcați-le individual sau ca fișier ZIP. Toate procesările au loc local în browserul dvs., asigurând confidențialitate completă pentru documentele dvs.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a răsfoi și selecta."
      },
      {
        "step": 2,
        "title": "Configurați Opțiuni",
        "description": "Setați calitatea rezoluției și, opțional, specificați intervalele de pagini."
      },
      {
        "step": 3,
        "title": "Previzualizați și convertiți",
        "description": "Faceți clic pe Convertiți pentru a procesa. Previzualizează fiecare pagină făcând clic pe miniaturi."
      },
      {
        "step": 4,
        "title": "Descărcați",
        "description": "Descărcați fișiere SVG individuale sau toate paginile ca arhivă ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Sigle și grafice",
        "description": "Extrageți sigle și grafice vectoriale din PDF-uri pentru utilizare în software-ul de proiectare.",
        "icon": "pen-tool"
      },
      {
        "title": "Diagrame tehnice",
        "description": "Convertiți desenele tehnice și diagramele în format SVG scalabil.",
        "icon": "ruler"
      },
      {
        "title": "Dezvoltare web",
        "description": "Creați fișiere SVG gata pentru web din conținut PDF pentru site-uri web receptive.",
        "icon": "globe"
      },
      {
        "title": "Imprimați la orice dimensiune",
        "description": "Generați grafice vectoriale care se imprimă perfect la orice dimensiune.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Ce este formatul SVG?",
        "answer": "SVG (Scalable Vector Graphics) este un format de imagine vectorială care poate fi scalat la orice dimensiune fără a pierde calitatea. Este utilizat pe scară largă pentru logo-uri, pictograme și grafică web."
      },
      {
        "question": "Va fi SVG-ul cu adevărat vector?",
        "answer": "SVG conține o redare de înaltă rezoluție a paginii PDF. Pentru PDF-urile cu conținut vectorial, obțineți rezultate clare la orice scară."
      },
      {
        "question": "Pot previzualiza înainte de descărcare?",
        "answer": "Da! Faceți clic pe orice miniatură pentru a vedea o previzualizare la dimensiune completă a SVG-ului. Puteți descărca pagini individuale sau toate deodată."
      },
      {
        "question": "Ce rezoluție ar trebui să aleg?",
        "answer": "Rezoluție mai mare (216 sau 288 DPI) produce SVG-uri mai mari și mai detaliate. Utilizați setări mai mici pentru o procesare mai rapidă și fișiere mai mici."
      }
    ]
  },
  "pdf-to-greyscale": {
    "title": "PDF în tonuri de gri",
    "metaDescription": "Convertiți PDF color în tonuri de gri. Reduceți dimensiunea fișierului și pregătiți-vă pentru imprimarea alb-negru.",
    "keywords": [
      "pdf în tonuri de gri",
      "pdf în tonuri de gri",
      "pdf alb-negru",
      "elimina culorile"
    ],
    "description": "<p>PDF to Greyscale convertește documentele PDF color în tonuri de gri (alb-negru). Acest lucru reduce dimensiunea fișierului și pregătește documentele pentru imprimarea alb-negru.</p>\n      <p>Conversia păstrează claritatea textului și detaliile imaginii în timp ce elimină informațiile de culoare. Perfect pentru imprimarea schițelor sau pentru crearea de versiuni pentru imprimare.</p>\n      <p>Toate conversiile au loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF color sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Previzualizare conversie",
        "description": "Previzualizați cum va arăta versiunea în tonuri de gri."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a crea PDF-ul în tonuri de gri."
      }
    ],
    "useCases": [
      {
        "title": "Print Economii",
        "description": "Convertiți în tonuri de gri pentru a economisi costurile de imprimare color.",
        "icon": "printer"
      },
      {
        "title": "Proiect de documente",
        "description": "Creați schițe alb-negru pentru revizuire.",
        "icon": "file-text"
      },
      {
        "title": "Reducerea dimensiunii fișierului",
        "description": "Reduceți dimensiunea PDF eliminând informațiile de culoare.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Textul va rămâne lizibil?",
        "answer": "Da, claritatea textului este păstrată în timpul conversiei în tonuri de gri."
      },
      {
        "question": "Cât de mic va fi fișierul?",
        "answer": "Reducerea dimensiunii fișierului variază, dar poate fi de 20-50% pentru documentele cu culori intense."
      },
      {
        "question": "Pot converti numai anumite pagini?",
        "answer": "Da, puteți selecta ce pagini să le convertiți în tonuri de gri."
      }
    ]
  },
  "pdf-to-json": {
    "title": "PDF în JSON",
    "metaDescription": "Extrageți conținutul PDF în format JSON. Obțineți date structurate din documente PDF.",
    "keywords": [
      "pdf în json",
      "extrageți datele pdf",
      "analizator pdf",
      "date pdf structurate"
    ],
    "description": "<p>PDF în JSON extrage conținutul din documente PDF în format JSON structurat. Extrageți text, metadate, informații despre pagină și structura documentului pentru utilizare programatică.</p>\n      <p>Perfect pentru extragerea datelor, analiza documentelor sau integrarea conținutului PDF în aplicații și fluxuri de lucru.</p>\n      <p>Toată extragerea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Selectați Date de extras",
        "description": "Alegeți ce conținut să extrageți: text, metadate, structură."
      },
      {
        "step": 3,
        "title": "Extrageți și descărcați",
        "description": "Faceți clic pe Extract pentru a genera JSON și a descărca."
      }
    ],
    "useCases": [
      {
        "title": "Extragerea datelor",
        "description": "Extrageți date structurate din documente PDF.",
        "icon": "database"
      },
      {
        "title": "Analiza documentelor",
        "description": "Analizați structura și conținutul PDF în mod programatic.",
        "icon": "search"
      },
      {
        "title": "Integrare",
        "description": "Importați conținut PDF în aplicații prin JSON.",
        "icon": "plug"
      }
    ],
    "faq": [
      {
        "question": "Ce date sunt extrase?",
        "answer": "Conținut text, metadate, dimensiuni ale paginii, fonturi și structura documentului."
      },
      {
        "question": "Formatul JSON este documentat?",
        "answer": "Da, schema JSON este consecventă și bine documentată."
      },
      {
        "question": "Pot extrage din PDF-uri scanate?",
        "answer": "PDF-urile scanate necesită mai întâi OCR. Utilizați instrumentul nostru OCR PDF înainte de extracție."
      }
    ]
  },
  "pdf-to-pptx": {
    "title": "PDF în PowerPoint",
    "metaDescription": "Convertiți PDF în prezentare PowerPoint. Fiecare pagină devine un diapozitiv de înaltă calitate.",
    "keywords": [
      "pdf în pptx",
      "pdf în powerpoint",
      "converti diapozitive pdf",
      "prezentare pdf"
    ],
    "description": "<p>PDF în PowerPoint transformă documentele PDF în prezentări PowerPoint editabile (PPTX). Fiecare pagină PDF este transformată într-un diapozitiv de înaltă calitate, păstrând perfect aspectul vizual.</p>\n      <p>Acest instrument este ideal pentru a converti rapoarte, fișe sau orice conținut PDF în format de prezentare. Puteți alege calitatea imaginii (DPI) pentru a echilibra dimensiunea fișierului și claritatea vizuală.</p>\n      <p>Toate conversiile au loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private și securizate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a-l selecta de pe dispozitiv."
      },
      {
        "step": 2,
        "title": "Alegeți Setări de calitate",
        "description": "Selectați calitatea imaginii (DPI) pentru diapozitive. DPI mai mare înseamnă o calitate mai bună, dar o dimensiune mai mare a fișierului."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a crea prezentarea PowerPoint și descărca fișierul PPTX."
      }
    ],
    "useCases": [
      {
        "title": "Creare prezentare",
        "description": "Convertiți rapoarte sau documente PDF în diapozitive de prezentare pentru întâlniri.",
        "icon": "presentation"
      },
      {
        "title": "Materiale de instruire",
        "description": "Transformați documentele de instruire PDF în prezentări interactive PowerPoint.",
        "icon": "book-open"
      },
      {
        "title": "Reutilizarea conținutului",
        "description": "Convertiți conținutul PDF existent în format de diapozitive editabil pentru personalizare suplimentară.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Diapozitivele vor fi editabile?",
        "answer": "Fiecare diapozitiv conține o imagine de înaltă calitate a paginii PDF. Puteți adăuga text, forme și adnotări deasupra în PowerPoint."
      },
      {
        "question": "Ce DPI ar trebui să aleg?",
        "answer": "Utilizați 150 DPI pentru prezentările afișate pe ecrane. Utilizați 300 DPI pentru imprimare sau când aveți nevoie de cea mai înaltă calitate."
      },
      {
        "question": "Pot converti fișiere PDF cu mai multe pagini?",
        "answer": "Da, fiecare pagină a PDF-ului dvs. devine un diapozitiv separat în prezentarea PowerPoint."
      }
    ]
  },
  "pdf-to-excel": {
    "title": "PDF în Excel",
    "metaDescription": "Convertiți PDF în foaie de calcul Excel. Extrageți tabelele în format XLSX.",
    "keywords": [
      "pdf la excel",
      "pdf în xlsx",
      "converti tabelele pdf",
      "extrage tabele"
    ],
    "description": "<p>PDF to Excel convertește documentele PDF în foi de calcul Microsoft Excel editabile (XLSX). Instrumentul detectează automat tabelele din PDF și le extrage în foi separate.</p>\n      <p>Acest instrument este ideal pentru analiza rapoartelor financiare, facturilor sau a oricăror date prezentate în tabele. Tabelele fiecărei pagini sunt organizate în foi pentru o manipulare ușoară a datelor.</p>\n      <p>Toate conversiile au loc local în browserul dvs., asigurându-vă că datele dvs. rămân private și securizate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Proces",
        "description": "Instrumentul va identifica și extrage automat tabele."
      },
      {
        "step": 3,
        "title": "Descărcați Excel",
        "description": "Descărcați fișierul Excel cu tabelele extrase."
      }
    ],
    "useCases": [
      {
        "title": "Analiza financiară",
        "description": "Convertiți extrasele bancare sau facturile în Excel pentru analiză.",
        "icon": "trending-up"
      },
      {
        "title": "Extragerea datelor",
        "description": "Extrageți tabele de date din lucrări de cercetare sau rapoarte.",
        "icon": "database"
      },
      {
        "title": "Managementul inventarului",
        "description": "Convertiți listele de inventar din PDF în foaie de calcul.",
        "icon": "clipboard"
      }
    ],
    "faq": [
      {
        "question": "Cum sunt gestionate mesele?",
        "answer": "Tabelele detectate pe fiecare pagină sunt extrase în foile corespunzătoare din fișierul Excel."
      },
      {
        "question": "Ce se întâmplă dacă nu există mese?",
        "answer": "Va fi creată o fișă de informații care indică că nu au fost găsite tabele."
      },
      {
        "question": "Formatarea este păstrată?",
        "answer": "Datele sunt păstrate, dar formatarea vizuală complexă poate fi simplificată pentru utilizarea foilor de calcul."
      }
    ]
  },
  "ocr-pdf": {
    "title": "OCR PDF",
    "metaDescription": "Faceți căutările PDF-urilor scanate cu OCR. Extrageți text din imagini și documente scanate.",
    "keywords": [
      "ocr pdf",
      "PDF care poate fi căutat",
      "recunoaștere text",
      "scanează la text"
    ],
    "description": "<p>OCR PDF utilizează Recunoașterea optică a caracterelor pentru a extrage text din documentele scanate și din imaginile din PDF. Convertiți PDF-uri bazate pe imagini în documente text care pot fi căutate și selectabile.</p>\n      <p>Suportul pentru mai multe limbi asigură recunoașterea exactă a textului, indiferent de limba documentului. Aspectul original este păstrat în timp ce adăugați un strat de text care poate fi căutat.</p>\n      <p>Toată procesarea OCR are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF scanat",
        "description": "Trageți și plasați PDF-ul scanat sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Selectați Limba",
        "description": "Alegeți limba documentului pentru o recunoaștere exactă."
      },
      {
        "step": 3,
        "title": "Procesați și descărcați",
        "description": "Faceți clic pe Procesare pentru a rula OCR și a descărca PDF-ul care poate fi căutat."
      }
    ],
    "useCases": [
      {
        "title": "Digitizare arhive",
        "description": "Faceți că arhivele documentelor scanate pot fi căutate.",
        "icon": "archive"
      },
      {
        "title": "Căutare document",
        "description": "Activați căutarea textului în documentele scanate.",
        "icon": "search"
      },
      {
        "title": "Extragerea textului",
        "description": "Extrageți text din documentele scanate pentru editare.",
        "icon": "type"
      }
    ],
    "faq": [
      {
        "question": "Ce limbi sunt acceptate?",
        "answer": "Peste 100 de limbi sunt acceptate, inclusiv engleză, chineză, japoneză, coreeană și multe altele."
      },
      {
        "question": "Se va păstra aspectul original?",
        "answer": "Da, aspectul vizual original este păstrat cu un strat de text care poate fi căutat adăugat."
      },
      {
        "question": "Cât de precis este OCR?",
        "answer": "Precizia depinde de calitatea scanării, dar depășește de obicei 95% pentru documente clare."
      }
    ]
  },
  "alternate-merge": {
    "title": "Fuziune alternativă",
    "metaDescription": "Îmbinați fișierele PDF prin alternarea paginilor. Combinați scanările față și spate într-un singur document.",
    "keywords": [
      "fuziune alternativă",
      "intercalare pdf",
      "combinați scanări",
      "îmbinare față spate"
    ],
    "description": "<p>Alternate Merge combină două PDF-uri intercalând paginile lor alternativ. Acesta este perfect pentru a combina paginile față și spatele scanate separat într-un singur document.</p>\n      <p>Încărcați două fișiere PDF, iar instrumentul le va îmbina, luând câte o pagină din fiecare alternativ. De asemenea, puteți inversa ordinea unui document pentru scanarea din spate în față.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați două fișiere PDF",
        "description": "Încărcați paginile principale PDF și paginile din spate PDF."
      },
      {
        "step": 2,
        "title": "Configurați comanda",
        "description": "Alegeți dacă doriți să inversați al doilea document pentru scanările din spate în față."
      },
      {
        "step": 3,
        "title": "Îmbinați și descărcați",
        "description": "Faceți clic pe Merge pentru a intercala paginile și a descărca."
      }
    ],
    "useCases": [
      {
        "title": "Scanare duplex",
        "description": "Combinați paginile față și spatele scanate separat.",
        "icon": "copy"
      },
      {
        "title": "Asamblarea documentelor",
        "description": "Intercalați pagini din două documente conexe.",
        "icon": "layers"
      },
      {
        "title": "Scanarea cărților",
        "description": "Combină scanările de pagini par și impare în cărți complete.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Ce se întâmplă dacă documentele au un număr diferit de pagini?",
        "answer": "Pagini suplimentare din documentul mai lung sunt atașate la sfârșit."
      },
      {
        "question": "Pot inversa ordinea paginilor?",
        "answer": "Da, puteți inversa oricare document înainte de îmbinare."
      },
      {
        "question": "Este aceasta diferită de îmbinarea obișnuită?",
        "answer": "Da, îmbinarea obișnuită anexează documentele; alte pagini de îmbinare intercalează."
      }
    ]
  },
  "add-attachments": {
    "title": "Adăugați atașamente",
    "metaDescription": "Încorporați fișiere în documente PDF. Atașați orice tip de fișier la PDF-urile dvs.",
    "keywords": [
      "atașamente pdf",
      "încorporați fișiere",
      "atașați la pdf",
      "portofoliu pdf"
    ],
    "description": "<p>Adăugarea atașamentelor încorporează fișiere de orice tip în documentele dumneavoastră PDF. Atașați foi de calcul, imagini, fișiere sursă sau orice alte documente pentru a crea pachete PDF complete.</p>\n      <p>Atașamentele sunt încorporate în PDF și pot fi extrase de către destinatari folosind orice cititor PDF. Perfect pentru distribuirea fișierelor asociate împreună.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că fișierele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Adăugați atașamente",
        "description": "Selectați fișierele de atașat la PDF."
      },
      {
        "step": 3,
        "title": "Salvați și descărcați",
        "description": "Faceți clic pe Salvare pentru a încorpora atașamentele și a descărca."
      }
    ],
    "useCases": [
      {
        "title": "Pachete de proiecte",
        "description": "Combinați fișiere de proiect cu documente PDF-uri.",
        "icon": "package"
      },
      {
        "title": "Distribuirea rapoartelor",
        "description": "Atașați fișiere de date sursă pentru a raporta fișierele PDF.",
        "icon": "paperclip"
      },
      {
        "title": "Pachetele de contracte",
        "description": "Includeți documente justificative în contracte.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Ce tipuri de fișiere pot fi atașate?",
        "answer": "Orice tip de fișier poate fi atașat la un PDF."
      },
      {
        "question": "Există o limită de dimensiune?",
        "answer": "Dimensiunea totală a PDF-ului, inclusiv atașamentele, nu trebuie să depășească 500 MB."
      },
      {
        "question": "Destinatarii pot extrage atașamente?",
        "answer": "Da, orice cititor PDF poate extrage atașamente încorporate."
      }
    ]
  },
  "extract-attachments": {
    "title": "Extrageți atașamente",
    "metaDescription": "Extrageți fișierele încorporate din PDF-uri. Descărcați toate atașamentele din documentele PDF.",
    "keywords": [
      "extrageți atașamentele",
      "atașamente pdf",
      "descărcați fișiere încorporate",
      "extragere pdf"
    ],
    "description": "<p>Extract Attachments preia toate fișierele încorporate din documentele PDF. Descărcați atașamentele individual sau ca arhivă ZIP care conține toate fișierele.</p>\n      <p>Perfect pentru a accesa fișiere sursă, date sau materiale suplimentare încorporate în pachetele PDF.</p>\n      <p>Toată extragerea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Vizualizați atașamente",
        "description": "Vedeți o listă cu toate fișierele încorporate în PDF."
      },
      {
        "step": 3,
        "title": "Extrageți și descărcați",
        "description": "Descărcați fișiere individuale sau toate ca fișier ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Accesați fișierele sursă",
        "description": "Extrageți fișierele de date originale din rapoartele PDF.",
        "icon": "download"
      },
      {
        "title": "Recuperați atașamente",
        "description": "Preluați fișierele încorporate din pachetele PDF.",
        "icon": "folder-open"
      },
      {
        "title": "Extragerea lotului",
        "description": "Extrageți atașamentele din mai multe PDF-uri simultan.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "Ce se întâmplă dacă nu există atașamente?",
        "answer": "Instrumentul va indica dacă nu sunt găsite fișiere încorporate."
      },
      {
        "question": "Sunt acceptate toate tipurile de atașamente?",
        "answer": "Da, toate tipurile de fișiere încorporate pot fi extrase."
      },
      {
        "question": "Pot extrage din mai multe PDF-uri?",
        "answer": "Da, puteți procesa mai multe PDF-uri și puteți descărca toate atașamentele."
      }
    ]
  },
  "extract-images": {
    "title": "Extrageți imagini din PDF",
    "metaDescription": "Extrageți toate imaginile încorporate din fișierele PDF. Descărcați individual sau ca arhivă ZIP. Filtrați automat imaginile mici.",
    "keywords": [
      "extrage imagini pdf",
      "extragerea imaginii pdf",
      "obține imagini din pdf",
      "descărcați imagini pdf",
      "pdf la imagini"
    ],
    "description": "<p>Extragere imagini din PDF preia toate imaginile încorporate din documentele dumneavoastră PDF. Descărcați imagini de înaltă calitate individual sau ca arhivă ZIP convenabilă.</p>\n      <p>Instrumentul filtrează automat imaginile mici, cum ar fi pictogramele și decorațiunile, pe baza pragurilor de dimensiune personalizabile. Procesați mai multe PDF-uri simultan pentru extragerea eficientă a loturilor.</p>\n      <p>Toată extragerea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private și securizate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-urile",
        "description": "Trageți și plasați unul sau mai multe fișiere PDF sau faceți clic pentru a selecta de pe dispozitiv."
      },
      {
        "step": 2,
        "title": "Setați opțiunile de filtrare",
        "description": "Reglați lățimea minimă, înălțimea și dimensiunea fișierului pentru a filtra imaginile mici nedorite."
      },
      {
        "step": 3,
        "title": "Extrage imagini",
        "description": "Faceți clic pe Extras pentru a găsi toate imaginile încorporate în fișierele PDF."
      },
      {
        "step": 4,
        "title": "Descărcați",
        "description": "Descărcați imagini individuale sau toate imaginile ca arhivă ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Recuperare foto",
        "description": "Extrageți fotografii și imagini încorporate în documente PDF pentru reutilizare sau arhivare.",
        "icon": "image"
      },
      {
        "title": "Colectarea activelor",
        "description": "Adunați toate graficele și imaginile din rapoarte PDF, prezentări sau broșuri.",
        "icon": "folder"
      },
      {
        "title": "Reutilizarea conținutului",
        "description": "Extrageți imagini din PDF-uri pentru a le utiliza în alte documente, site-uri web sau prezentări.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Ce formate de imagine sunt extrase?",
        "answer": "Imaginile sunt extrase în formatul lor nativ (JPEG, PNG etc.) atunci când este posibil, sau convertite în PNG pentru date brute de imagine."
      },
      {
        "question": "De ce lipsesc unele imagini?",
        "answer": "Imaginile mici sub pragul de dimensiune sunt filtrate. Reglați setările filtrului pentru a extrage imagini mai mici."
      },
      {
        "question": "Pot extrage din PDF-uri scanate?",
        "answer": "PDF-urile scanate conțin de obicei scanarea ca o singură imagine mare pe pagină. Utilizați instrumentul PDF în imagine pentru conversia pagină cu pagină."
      }
    ]
  },
  "edit-attachments": {
    "title": "Editați atașamentele",
    "metaDescription": "Gestionați atașamentele PDF. Vizualizați, redenumiți și eliminați fișierele încorporate.",
    "keywords": [
      "editați atașamentele",
      "gestionați fișierele pdf",
      "eliminați atașamentele",
      "redenumiți atașamentele"
    ],
    "description": "<p>Editați atașamente vă permite să gestionați fișierele încorporate în documente PDF. Vizualizați toate atașamentele, redenumiți-le sau eliminați fișierele nedorite din PDF.</p>\n      <p>Perfect pentru curățarea pachetelor PDF sau pentru actualizarea informațiilor despre atașamente înainte de distribuire.</p>\n      <p>Toate editările au loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Gestionați atașamentele",
        "description": "Vizualizați, redenumiți sau ștergeți fișierele încorporate."
      },
      {
        "step": 3,
        "title": "Salvați și descărcați",
        "description": "Faceți clic pe Salvare pentru a aplica modificările și a descărca."
      }
    ],
    "useCases": [
      {
        "title": "Curățați PDF-urile",
        "description": "Eliminați atașamentele inutile din pachetele PDF.",
        "icon": "trash-2"
      },
      {
        "title": "Redenumiți fișierele",
        "description": "Actualizați numele atașamentelor pentru claritate.",
        "icon": "edit"
      },
      {
        "title": "Examinați conținutul",
        "description": "Auditează fișierele încorporate înainte de distribuire.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Pot adăuga noi atașamente aici?",
        "answer": "Utilizați instrumentul Adăugați atașamente pentru a încorpora fișiere noi."
      },
      {
        "question": "Este îndepărtarea permanentă?",
        "answer": "Da, atașamentele eliminate nu pot fi recuperate din fișierul de ieșire."
      },
      {
        "question": "Pot previzualiza atașamentele?",
        "answer": "Puteți vedea numele și dimensiunile fișierelor; utilizați Extrageți atașamente pentru a vizualiza conținutul."
      }
    ]
  },
  "divide-pages": {
    "title": "Împărțiți paginile",
    "metaDescription": "Împărțiți paginile PDF în mai multe secțiuni. Împărțiți paginile orizontal sau vertical.",
    "keywords": [
      "împărțiți paginile pdf",
      "împărțiți pagina",
      "tăiați pagina pdf",
      "secțiuni de pagină"
    ],
    "description": "<p>Divide Pages împarte paginile PDF individuale în mai multe secțiuni. Tăiați paginile orizontal, vertical sau într-o grilă pentru a crea mai multe pagini dintr-o singură pagină.</p>\n      <p>Perfect pentru împărțirea documentelor scanate cu mai multe elemente pe pagină sau pentru împărțirea paginilor de format mare în dimensiuni standard.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Setați diviziunea",
        "description": "Alegeți diviziunea orizontală, verticală sau grilă și setați numărul de secțiuni."
      },
      {
        "step": 3,
        "title": "Împărțiți și descărcați",
        "description": "Faceți clic pe Împărțire pentru a împărți paginile și a descărca."
      }
    ],
    "useCases": [
      {
        "title": "Split Scans",
        "description": "Împărțiți paginile scanate care conțin mai multe documente.",
        "icon": "scissors"
      },
      {
        "title": "Redimensionați paginile",
        "description": "Împărțiți paginile mari în dimensiuni standard de hârtie.",
        "icon": "maximize-2"
      },
      {
        "title": "Creați carduri",
        "description": "Împărțiți paginile în secțiuni de dimensiunea unui card pentru imprimare.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Pot împărți în secțiuni inegale?",
        "answer": "În prezent, diviziunile sunt egale. Utilizați Decupare PDF pentru secțiuni personalizate."
      },
      {
        "question": "Ce se întâmplă cu conținutul la liniile de divizare?",
        "answer": "Conținutul este împărțit la linia de divizare; asigurați-vă că conținutul important nu este la granițe."
      },
      {
        "question": "Pot împărți numai anumite pagini?",
        "answer": "Da, puteți selecta ce pagini să divizați."
      }
    ]
  },
  "add-blank-page": {
    "title": "Adăugați o pagină goală",
    "metaDescription": "Inserați pagini goale în documente PDF. Adăugați pagini goale în orice poziție.",
    "keywords": [
      "adăugați o pagină goală",
      "inserați pagina",
      "pagină goală",
      "inserarea paginii pdf"
    ],
    "description": "<p>Adăugați o pagină goală inserează pagini goale în documentele dvs. PDF în orice poziție. Adăugați pagini înainte, după sau între pagini existente cu dimensiune personalizabilă a paginii.</p>\n      <p>Perfect pentru a adăuga spațiu pentru note, pentru a crea separatoare de secțiuni sau pentru a pregăti documente pentru imprimare.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Alegeți Poziția",
        "description": "Selectați unde să inserați pagini goale și câte."
      },
      {
        "step": 3,
        "title": "Adăugați și descărcați",
        "description": "Faceți clic pe Adăugare pentru a insera pagini și a descărca."
      }
    ],
    "useCases": [
      {
        "title": "Notă Spațiu",
        "description": "Adăugați pagini goale pentru notele scrise de mână.",
        "icon": "edit-3"
      },
      {
        "title": "Separatoare de secțiuni",
        "description": "Introduceți pagini goale între secțiunile documentului.",
        "icon": "minus"
      },
      {
        "title": "Pregătirea imprimării",
        "description": "Adăugați pagini pentru alinierea imprimării duplex.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Pot alege dimensiunea paginii?",
        "answer": "Da, paginile goale se pot potrivi cu paginile existente sau pot utiliza dimensiuni personalizate."
      },
      {
        "question": "Pot adăuga mai multe pagini goale?",
        "answer": "Da, puteți adăuga orice număr de pagini goale simultan."
      },
      {
        "question": "Pot adăuga pagini colorate?",
        "answer": "Utilizați instrumentul Culoare de fundal după ce adăugați pagini goale pentru a adăuga culoare."
      }
    ]
  },
  "reverse-pages": {
    "title": "Pagini inversate",
    "metaDescription": "Inversați ordinea paginilor PDF. Întoarce paginile documentului de la ultima la prima.",
    "keywords": [
      "pdf invers",
      "ordine de flip page",
      "inversează paginile",
      "document invers"
    ],
    "description": "<p>Pagini inversate inversează ordinea paginilor din documentul PDF, punând prima pagină pe ultima și prima pagină pe ultima. Util pentru documente scanate în ordine inversă sau pentru nevoi specifice de imprimare.</p>\n      <p>Instrumentul procesează întregul document sau intervalele de pagini selectate, menținând tot conținutul și formatarea.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Selectați Pagini",
        "description": "Alegeți să inversați toate paginile sau un anumit interval."
      },
      {
        "step": 3,
        "title": "Inversați și descărcați",
        "description": "Faceți clic pe Reverse pentru a inversa ordinea paginilor și a descărca."
      }
    ],
    "useCases": [
      {
        "title": "Remediați comanda de scanare",
        "description": "Documentele corecte scanate în ordine inversă.",
        "icon": "refresh-cw"
      },
      {
        "title": "Pregătirea imprimării",
        "description": "Inversați paginile pentru cerințe specifice de imprimare.",
        "icon": "printer"
      },
      {
        "title": "Reordonarea documentelor",
        "description": "Întoarceți rapid comanda documentului pentru examinare.",
        "icon": "arrow-up-down"
      }
    ],
    "faq": [
      {
        "question": "Marcajele sunt actualizate?",
        "answer": "Da, marcajele sunt actualizate pentru a indica paginile inversate corecte."
      },
      {
        "question": "Pot inversa doar câteva pagini?",
        "answer": "Da, puteți selecta un interval de pagini de inversat."
      },
      {
        "question": "Este același lucru cu rotirea?",
        "answer": "Nu, inversarea modificărilor ordinii paginilor; rotirea schimbă orientarea paginii."
      }
    ]
  },
  "rotate-pdf": {
    "title": "Rotiți PDF",
    "metaDescription": "Rotiți paginile PDF. Întoarceți paginile cu 90, 180 sau 270 de grade.",
    "keywords": [
      "rotiți pdf",
      "întoarce paginile pdf",
      "rotație pdf",
      "fixați orientarea"
    ],
    "description": "<p>Rotirea PDF transformă paginile din document cu 90, 180 sau 270 de grade. Remediați scanările orientate incorect, rotiți paginile peisaj sau ajustați orientarea paginii pentru vizualizare.</p>\n      <p>Rotiți toate paginile în mod uniform sau selectați anumite pagini pentru a le roti individual. Instrumentul păstrează tot conținutul și formatarea.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Selectați Rotație",
        "description": "Alegeți unghiul de rotație și ce pagini să rotiți."
      },
      {
        "step": 3,
        "title": "Rotiți și descărcați",
        "description": "Faceți clic pe Rotire pentru a aplica modificările și a descărca."
      }
    ],
    "useCases": [
      {
        "title": "Remediați scanările",
        "description": "Orientarea corectă a documentelor scanate.",
        "icon": "rotate-cw"
      },
      {
        "title": "Pagini peisaj",
        "description": "Rotiți paginile peisaj pentru o vizualizare corectă.",
        "icon": "monitor"
      },
      {
        "title": "Orientare mixtă",
        "description": "Standardizați orientarea paginii în documente mixte.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Pot roti diferite pagini diferit?",
        "answer": "Da, puteți aplica diferite rotații pe pagini diferite."
      },
      {
        "question": "Rotirea afectează calitatea imprimării?",
        "answer": "Nu, rotația păstrează întreaga calitate a conținutului."
      },
      {
        "question": "Pot să mă rotesc după unghiuri personalizate?",
        "answer": "Rotația este limitată la incremente de 90 de grade (90, 180, 270)."
      }
    ]
  },
  "overlay-pdf": {
    "title": "Suprapune PDF",
    "metaDescription": "Suprapunerea sau suprapunerea paginilor dintr-un PDF pe altul. Perfect pentru ștampile, antet și compoziție de aspect.",
    "keywords": [
      "suprapunere pdf",
      "suport pdf",
      "ștampila pdf",
      "filigran pdf",
      "combina straturi"
    ],
    "description": "<p>Suprapunerea PDF vă permite să stratificați paginile unui document PDF deasupra sau dedesubtul altui document PDF. Este perfect pentru aplicarea antetului, adăugarea de grile de fundal, ștampilarea filigranelor sau îmbinarea schițelor de aspect.</p>\n      <p>Acceptă atât modul Overlay (stratul merge deasupra) cât și modul Underlay (stratul merge dedesubt). Specificați intervale de pagini țintă personalizate sau buclați documente suprapuse mai scurte pentru a acoperi automat întregul fișier de bază.</p>\n      <p>Toată prelucrarea este executată în întregime în browserul dvs. web local, garantând securitate totală și confidențialitatea datelor.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF principal",
        "description": "Trageți și plasați documentul PDF de bază principal."
      },
      {
        "step": 2,
        "title": "Încărcați stratul PDF",
        "description": "Furnizați documentul de suprapunere/subpunere care acționează ca strat."
      },
      {
        "step": 3,
        "title": "Configurați stratificarea",
        "description": "Alegeți modul de suprapunere sau subpunere, specificați intervalele de pagini și activați bucla de pagină."
      },
      {
        "step": 4,
        "title": "Compilați și descărcați",
        "description": "Faceți clic pe Compilare pentru a procesa și descărca PDF-ul rezultat în straturi."
      }
    ],
    "useCases": [
      {
        "title": "Antet corporative",
        "description": "Stratificați conținutul facturii peste șabloanele cu antet standard ale companiei.",
        "icon": "file-text"
      },
      {
        "title": "Filigrane și sigilii",
        "description": "Suprapuneți ștampile de securitate, sigilii de semnătură sau fundaluri peste documente.",
        "icon": "shield"
      },
      {
        "title": "Desenarea planurilor",
        "description": "Combinați arhitecturi în schiță sau grile de aspect sub blocuri de text.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Care este diferența dintre Overlay și Underlay?",
        "answer": "Suprapunerea plasează stratul secundar deasupra conținutului principal. Underlay îl plasează în partea de jos, acționând ca un șablon de fundal."
      },
      {
        "question": "Pot bucla stratul de suprapunere?",
        "answer": "Da, dacă stratul PDF este mai scurt decât documentul de bază, activarea Loop îl va ciclă (de exemplu, pagina 1, 2, 1, 2) pentru a acoperi toate paginile de bază."
      },
      {
        "question": "Este acceptat intervalul de pagini?",
        "answer": "Da, puteți viza anumite pagini folosind sintaxa intervalului, cum ar fi „1-5”, „impar”, „pare” sau liste separate prin virgulă."
      }
    ]
  },
  "timestamp-pdf": {
    "title": "Timp local PDF",
    "metaDescription": "Acest instrument creează o marcă temporală locală autosemnată folosind ceasul dispozitivului. Nu solicită și nu verifică o marcă de la TSA selectată.",
    "keywords": [
      "Timp local PDF",
      "PDF",
      "Ora dispozitivului"
    ],
    "description": "<p>Selectați un PDF pentru a adăuga o marcă temporală locală.</p><p>Acest instrument creează o marcă temporală locală autosemnată folosind ceasul dispozitivului. Nu solicită și nu verifică o marcă de la TSA selectată.</p><p>Procesarea are loc în browser; documentul și amprenta sa digitală nu sunt trimise unui serviciu TSA.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF",
        "description": "Selectați un PDF pentru a adăuga un marcaj de timp local."
      },
      {
        "step": 2,
        "title": "Eticheta de autoritate selectată",
        "description": "Alegeți un nume pentru semnătura locală. Acest nume nu se conectează la un TSA."
      },
      {
        "step": 3,
        "title": "Adăugați marcaj de timp local",
        "description": "Procesați fișierul, examinați rezultatul și descărcați PDF-ul."
      }
    ],
    "useCases": [
      {
        "title": "Schițe de lucru",
        "description": "Păstrați o copie datată local a unui document de lucru.",
        "icon": "file-text"
      },
      {
        "title": "Arhive personale",
        "description": "Salvați o copie marcată cu ora pentru referință.",
        "icon": "archive"
      },
      {
        "title": "Inspecția semnăturii",
        "description": "Inspectați semnătura și metadatele generate într-un cititor PDF.",
        "icon": "search"
      }
    ],
    "faq": [
      {
        "question": "Marca temporală este verificată independent?",
        "answer": "Acest instrument creează o marcă temporală locală autosemnată folosind ceasul dispozitivului. Nu solicită și nu verifică o marcă de la TSA selectată."
      },
      {
        "question": "Trebuie să încarc un certificat digital?",
        "answer": "Nu. Instrumentul generează un certificat local, autosemnat pentru această operațiune."
      },
      {
        "question": "Care ceas furnizează ora?",
        "answer": "Ora vine de la ceasul dispozitivului și nu este verificată independent."
      }
    ]
  },
  "add-page-labels": {
    "title": "Adăugați etichete de pagină",
    "metaDescription": "Aplicați etichete personalizate de pagină în catalogul dumneavoastră PDF. Acceptă numere romane, prefixe și intervale complexe disjunse.",
    "keywords": [
      "etichete de pagină pdf",
      "cifre romane pdf",
      "etichete de prefix pdf",
      "etichete de pagină disjunse",
      "indexare pdf"
    ],
    "description": "<p>Adăugați etichete de pagină vă permite să injectați metadate personalizate de etichetare a paginii (/PageLabels) în dicționarul de catalog rădăcină al PDF-ului. Aceasta personalizează etichetele afișate în barele laterale de navigare ale cititorului PDF profesional și în panourile de salt cu numărul paginii de sus (de exemplu, folosind numere romane pentru materialul din față, secvențe zecimale pentru corpul principal sau prefixe personalizate, cum ar fi A-0, A-1 pentru subsecțiunile tehnice).</p>\n      <p>Acceptă combinarea mai multor reguli personalizate fără probleme. În mod esențial, am creat un <strong>algoritm de tăiere cu intervale disjuncte</strong> foarte optimizat: chiar dacă declarați modele alternative complexe (de exemplu, stilul paginilor impare A, stilul paginilor pare B), instrumentul va diseca și va compune în mod elegant limitele pentru a asigura afișarea adecvată a standardelor, fără a pierde formatele în paginile nemapate.</p>\n      <p>Toate operațiunile sunt procesate în întregime în mediul de testare a browserului local, asigurând confidențialitatea absolută a datelor.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați documentul PDF",
        "description": "Furnizați documentul PDF țintă pe care doriți să-l etichetați."
      },
      {
        "step": 2,
        "title": "Configurați regulile de etichetare",
        "description": "Adăugați una sau mai multe reguli care specifică intervalele de pagini (de exemplu, „1-5”, „impare” sau liste separate prin virgulă), prefixul, stilul și secvența de pornire."
      },
      {
        "step": 3,
        "title": "Previzualizare și descărcare",
        "description": "Consultați previzualizarea listei de etichete de pagini live de mai jos, apoi compilați și descărcați documentul PDF actualizat."
      }
    ],
    "useCases": [
      {
        "title": "Formatarea tezei academice",
        "description": "Setați numere romane minuscule (i, ii, iii) pentru materia introductivă și trecerea la zecimală pentru capitolele principale.",
        "icon": "book"
      },
      {
        "title": "Prefixe ale planului de inginerie",
        "description": "Atașați abrevierile subsistemului (de exemplu, „A-1”, „M-5”) ca prefixe de etichetă de pagină, permițând echipelor să caute și să localizeze paginile în câteva secunde.",
        "icon": "layout"
      },
      {
        "title": "Aspecte alternante personalizate",
        "description": "Aplicați indexarea intervalului de pagini foarte specific la secvențele impare/pare sau la secțiunile necontigue cu libertate maximă.",
        "icon": "shuffle"
      }
    ],
    "faq": [
      {
        "question": "Ce sunt etichetele paginilor vs numerele paginii?",
        "answer": "Numerele obișnuite ale paginilor sunt blocuri de text vizual redate direct pe pânza de hârtie (vizibile atunci când sunt imprimate). Cu toate acestea, etichetele paginilor sunt metadate structurale injectate în catalogul PDF. Ei controlează ceea ce este afișat sub miniaturi și în caseta de căutare a paginii din interiorul unui software precum Adobe Acrobat sau Apple Preview."
      },
      {
        "question": "Ce se întâmplă dacă las intervalul de pagini gol?",
        "answer": "Lăsând intervalul de pagini gol, regula se aplică la nivel global tuturor paginilor documentului."
      },
      {
        "question": "Cum sunt gestionate regulile care se suprapun?",
        "answer": "Regulile sunt evaluate secvenţial în ordinea în care sunt listate. Dacă un interval de pagini dintr-o regulă ulterioară se suprapune cu una anterioară, regula ulterioară are prioritate și înlocuiește eticheta pentru pagina respectivă."
      }
    ]
  },
  "n-up-pdf": {
    "title": "N-Up PDF",
    "metaDescription": "Imprimați mai multe pagini PDF pe foaie. Creați machete de 2, 4 sau personalizate.",
    "keywords": [
      "n-up pdf",
      "mai multe pagini pe coală",
      "Imprimare 2-up",
      "impunerea paginii"
    ],
    "description": "<p>N-Up PDF aranjează mai multe pagini pe foi individuale, creând 2-up, 4-up, 6-up, 9-up sau machete personalizate. Perfect pentru economisirea hârtiei atunci când imprimați sau creați fișe.</p>\n      <p>Alegeți dintre aspecte prestabilite sau creați aranjamente personalizate. Instrumentul scalează și poziționează automat paginile pentru rezultate optime.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Alegeți Aspect",
        "description": "Selectați 2-up, 4-up, 6-up, 9-up sau grila personalizată."
      },
      {
        "step": 3,
        "title": "Creați și descărcați",
        "description": "Faceți clic pe Creare pentru a genera PDF-ul n-up și descărcați."
      }
    ],
    "useCases": [
      {
        "title": "Economisiți hârtie",
        "description": "Imprimați mai multe pagini pe coală pentru a reduce consumul de hârtie.",
        "icon": "leaf"
      },
      {
        "title": "Creați fișe",
        "description": "Realizați fișe compacte din diapozitive de prezentare.",
        "icon": "file-text"
      },
      {
        "title": "Consultați documentele",
        "description": "Imprimați documente în dimensiune redusă pentru examinare.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Ce machete sunt disponibile?",
        "answer": "Sunt disponibile machete de 2, 4, 6, 9 și personalizate."
      },
      {
        "question": "Pot adăuga margini între pagini?",
        "answer": "Da, puteți adăuga chenare și jgheaburi între pagini."
      },
      {
        "question": "Este păstrată ordinea paginilor?",
        "answer": "Da, paginile sunt aranjate în ordine de citire (de la stânga la dreapta, de sus în jos)."
      }
    ]
  },
  "combine-single-page": {
    "title": "Combinați la o singură pagină",
    "metaDescription": "Uniți paginile PDF într-o singură pagină continuă. Creați documente derulabile cu o singură pagină.",
    "keywords": [
      "combinați pagini",
      "pdf cu o singură pagină",
      "pagini cusături",
      "defilare continuă"
    ],
    "description": "<p>Combină la o singură pagină unește toate paginile PDF într-o singură pagină continuă. Creați documente care se pot derula perfecte pentru vizualizare pe web sau citire continuă.</p>\n      <p>Paginile sunt unite vertical cu spațiere personalizabilă. Rezultatul este o singură pagină lungă care conține tot conținutul.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Setați spațierea",
        "description": "Alegeți decalajul dintre paginile cusate."
      },
      {
        "step": 3,
        "title": "Combinați și descărcați",
        "description": "Faceți clic pe Combină pentru a crea PDF-ul cu o singură pagină."
      }
    ],
    "useCases": [
      {
        "title": "Documente Web",
        "description": "Creați PDF-uri care pot fi derulate pentru încorporarea web.",
        "icon": "globe"
      },
      {
        "title": "Citire continuă",
        "description": "Convertiți documentele paginate în defilare continuă.",
        "icon": "scroll"
      },
      {
        "title": "Conținut de formă lungă",
        "description": "Combinați paginile pentru o citire lungă fără întreruperi.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Există o limită de pagini?",
        "answer": "Documentele foarte lungi pot fi limitate de memoria browserului."
      },
      {
        "question": "Pot adăuga separatori între pagini?",
        "answer": "Da, puteți adăuga spații sau linii între paginile originale."
      },
      {
        "question": "Va funcționa asta pentru tipărire?",
        "answer": "Rezultatul este cel mai bun pentru vizualizarea pe ecran; utilizați N-Up pentru machete de imprimare."
      }
    ]
  },
  "view-metadata": {
    "title": "Vizualizați metadatele",
    "metaDescription": "Vizualizați proprietățile documentului PDF. Vedeți autorul, titlul, datele și alte metadate.",
    "keywords": [
      "metadate pdf",
      "proprietățile documentului",
      "informații pdf",
      "vizualizați detalii pdf"
    ],
    "description": "<p>Vizualizare metadate afișează toate proprietățile documentului și metadatele din fișierele PDF. Vedeți autorul, titlul, subiectul, cuvintele cheie, data creării, data modificării și multe altele.</p>\n      <p>Util pentru auditarea documentelor, verificarea informațiilor despre fișier sau verificarea autenticității documentului.</p>\n      <p>Toate vizualizările au loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Vizualizați proprietăți",
        "description": "Vedeți toate metadatele afișate într-un format organizat."
      },
      {
        "step": 3,
        "title": "Exportați dacă este necesar",
        "description": "Opțional, exportați metadatele ca JSON."
      }
    ],
    "useCases": [
      {
        "title": "Auditul documentelor",
        "description": "Examinați proprietățile documentului pentru conformitate.",
        "icon": "clipboard-check"
      },
      {
        "title": "Verificați autenticitatea",
        "description": "Verificați datele de creare și informațiile despre autor.",
        "icon": "shield"
      },
      {
        "title": "Informații despre fișier",
        "description": "Obțineți informații detaliate despre fișierele PDF.",
        "icon": "info"
      }
    ],
    "faq": [
      {
        "question": "Ce metadate sunt afișate?",
        "answer": "Titlu, autor, subiect, cuvinte cheie, creator, producător, date și versiunea PDF."
      },
      {
        "question": "Pot edita metadatele aici?",
        "answer": "Utilizați instrumentul Edit Metadata pentru a modifica proprietățile documentului."
      },
      {
        "question": "Sunt incluse metadatele XMP?",
        "answer": "Da, sunt afișate atât metadatele standard, cât și metadatele XMP."
      }
    ]
  },
  "edit-metadata": {
    "title": "Editați metadatele",
    "metaDescription": "Editați proprietățile documentului PDF. Schimbați titlul, autorul, subiectul și cuvintele cheie.",
    "keywords": [
      "editați metadatele PDF",
      "modificați proprietățile PDF",
      "autor pdf",
      "informații despre document"
    ],
    "description": "<p>Editare metadate vă permite să modificați proprietățile documentului în fișierele PDF. Schimbați titlul, autorul, subiectul, cuvintele cheie și alte câmpuri de metadate.</p>\n      <p>Perfect pentru corectarea informațiilor din document, adăugarea unei atribuiri adecvate sau pregătirea fișierelor pentru distribuire.</p>\n      <p>Toate editările au loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Editați proprietăți",
        "description": "Modificați titlul, autorul, subiectul, cuvintele cheie și alte câmpuri."
      },
      {
        "step": 3,
        "title": "Salvați și descărcați",
        "description": "Faceți clic pe Salvare pentru a aplica modificările și a descărca."
      }
    ],
    "useCases": [
      {
        "title": "Adăugați atribuire",
        "description": "Setați informațiile adecvate despre autor și creator.",
        "icon": "user"
      },
      {
        "title": "Optimizare SEO",
        "description": "Adăugați cuvinte cheie și descrieri pentru posibilitatea de căutare.",
        "icon": "search"
      },
      {
        "title": "Pregătirea documentelor",
        "description": "Pregătiți documente cu metadate adecvate înainte de partajare.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Ce câmpuri pot edita?",
        "answer": "Câmpurile titlu, autor, subiect, cuvinte cheie, creator și producător."
      },
      {
        "question": "Pot șterge toate metadatele?",
        "answer": "Utilizați instrumentul Eliminare metadate pentru a elimina toate proprietățile documentului."
      },
      {
        "question": "Datele pot fi editate?",
        "answer": "Datele de creare și modificare sunt actualizate automat."
      }
    ]
  },
  "pdf-to-zip": {
    "title": "PDF-uri în ZIP",
    "metaDescription": "Pachetați mai multe PDF-uri într-o arhivă ZIP. Comprimați și grupați fișiere PDF.",
    "keywords": [
      "pdf la zip",
      "comprimați pdf-uri",
      "pachet pdf-uri",
      "arhivați pdf-uri"
    ],
    "description": "<p>PDF to ZIP pachete mai multe fișiere PDF într-o singură arhivă ZIP. Comprimați și grupați fișierele PDF pentru a le partaja, a stoca sau a face backup mai ușor.</p>\n      <p>Instrumentul creează o arhivă comprimată care conține toate fișierele PDF, reducând dimensiunea totală și simplificând gestionarea fișierelor.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că fișierele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-uri",
        "description": "Trageți și plasați mai multe fișiere PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Configurați arhiva",
        "description": "Setați opțional numele arhivei și nivelul de compresie."
      },
      {
        "step": 3,
        "title": "Creați și descărcați",
        "description": "Faceți clic pe Creare pentru a genera arhiva ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Partajarea fișierelor",
        "description": "Agrupați mai multe PDF-uri pentru o partajare mai ușoară.",
        "icon": "share-2"
      },
      {
        "title": "Crearea copiei de rezervă",
        "description": "Creați copii de siguranță comprimate ale colecțiilor PDF.",
        "icon": "archive"
      },
      {
        "title": "Atașamente la e-mail",
        "description": "Combinați fișierele PDF într-un singur atașament pentru e-mail.",
        "icon": "mail"
      }
    ],
    "faq": [
      {
        "question": "Câtă compresie se aplică?",
        "answer": "Compresia ZIP reduce de obicei dimensiunea totală cu 10-30%."
      },
      {
        "question": "Există o limită de fișiere?",
        "answer": "Puteți include până la 100 de fișiere PDF într-o singură arhivă."
      },
      {
        "question": "Pot seta o parolă?",
        "answer": "Crearea ZIP protejată prin parolă nu este acceptată în prezent."
      }
    ]
  },
  "compare-pdfs": {
    "title": "Comparați PDF-urile",
    "metaDescription": "Comparați două documente PDF. Evidențiați diferențele dintre versiuni.",
    "keywords": [
      "compara pdf-uri",
      "pdf dif",
      "compararea documentelor",
      "comparație versiuni"
    ],
    "description": "<p>Compara PDFs analizează două documente PDF și evidențiază diferențele dintre ele. Perfect pentru revizuirea documentelor, pentru a verifica modificările contractului sau pentru a verifica modificările.</p>\n      <p>Vizualizați paginile randate una lângă alta, deplasați-vă între perechile de pagini și filtrați modificările evidențiate. Compară textul extras și numele fonturilor. Imaginile scanate și alte modificări vizuale nu sunt comparate.</p>\n      <p>Toate comparațiile au loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați două fișiere PDF",
        "description": "Încărcați documentele PDF originale și modificate."
      },
      {
        "step": 2,
        "title": "Comparați PDF-urile",
        "description": "Vizualizați paginile randate una lângă alta, deplasați-vă între perechile de pagini și filtrați modificările evidențiate."
      },
      {
        "step": 3,
        "title": "Evidențiați Filtre",
        "description": "Modificări ale textului · Modificări ale fontului · Antete și subsoluri · Text mutat"
      }
    ],
    "useCases": [
      {
        "title": "Revizuirea contractului",
        "description": "Comparați versiunile contractului pentru a identifica modificările.",
        "icon": "file-text"
      },
      {
        "title": "Revizuirea documentului",
        "description": "Examinați editările între versiunile documentului.",
        "icon": "git-compare"
      },
      {
        "title": "Asigurarea calității",
        "description": "Verificați dacă au fost făcute numai modificările intenționate.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Ce tipuri de diferențe sunt detectate?",
        "answer": "Modificări ale textului · Modificări ale fontului · Antete și subsoluri · Text mutat"
      },
      {
        "question": "Pot compara documentele scanate?",
        "answer": "Compară textul extras și numele fonturilor. Imaginile scanate și alte modificări vizuale nu sunt comparate."
      },
      {
        "question": "Este disponibilă comparația vizuală?",
        "answer": "Vizualizați paginile randate una lângă alta, deplasați-vă între perechile de pagini și filtrați modificările evidențiate. Compară textul extras și numele fonturilor. Imaginile scanate și alte modificări vizuale nu sunt comparate."
      }
    ]
  },
  "posterize-pdf": {
    "title": "Posterizați PDF",
    "metaDescription": "Împărțiți pagini PDF mari în plăci imprimabile. Creați postere din pagini PDF.",
    "keywords": [
      "posterizare pdf",
      "tigla pdf",
      "imprimare în format mare",
      "poster pdf"
    ],
    "description": "<p>Posterize PDF împarte paginile PDF mari în plăci mai mici care pot fi imprimate pe hârtie standard și asamblate în postere. Perfect pentru imprimarea diagramelor mari, a hărților sau a lucrărilor de artă.</p>\n      <p>Configurați dimensiunea și suprapunerea grilei pentru o asamblare ușoară. Instrumentul calculează automat dimensiunile plăcilor pentru dimensiunea de ieșire țintă.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați PDF-ul de format mare sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Configurați plăci",
        "description": "Setați dimensiunea grilei, suprapunerea și dimensiunea hârtiei de ieșire."
      },
      {
        "step": 3,
        "title": "Creați și descărcați",
        "description": "Faceți clic pe Creare pentru a genera plăci imprimabile."
      }
    ],
    "useCases": [
      {
        "title": "Imprimare poster",
        "description": "Imprimați postere mari pe hârtie standard.",
        "icon": "maximize-2"
      },
      {
        "title": "Imprimare hărți",
        "description": "Imprimați hărți mari în secțiuni pentru asamblare.",
        "icon": "map"
      },
      {
        "title": "Reproducere opere de artă",
        "description": "Creați printuri mari din ilustrații PDF.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Ce suprapunere ar trebui să folosesc?",
        "answer": "Se recomandă o suprapunere de 10-20 mm pentru o aliniere ușoară în timpul asamblarii."
      },
      {
        "question": "Pot adăuga semne de decupare?",
        "answer": "Da, pot fi adăugate semne de decupare pentru a ajuta la tăiere și aliniere."
      },
      {
        "question": "Ce dimensiuni de hârtie sunt acceptate?",
        "answer": "Sunt acceptate dimensiunile A4, Letter, A3 și personalizate."
      }
    ]
  },
  "fix-page-size": {
    "title": "Fixați dimensiunea paginii",
    "metaDescription": "Standardizați dimensiunile paginilor PDF. Convertiți toate paginile la dimensiuni uniforme.",
    "keywords": [
      "remediați dimensiunea paginii",
      "standardizare pdf",
      "pagini uniforme",
      "redimensionați paginile pdf"
    ],
    "description": "<p>Fix Page Size standardizează toate paginile din PDF la dimensiuni uniforme. Convertiți documente de dimensiuni mixte în dimensiuni de pagină consistente pentru prezentare sau imprimare profesională.</p>\n      <p>Alegeți dintre dimensiunile standard (A4, Letter etc.) sau setați dimensiuni personalizate. Conținutul este scalat sau poziționat pentru a se potrivi cu noua dimensiune a paginii.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Selectați Dimensiunea țintă",
        "description": "Alegeți o dimensiune standard sau introduceți dimensiuni personalizate."
      },
      {
        "step": 3,
        "title": "Aplicați și descărcați",
        "description": "Faceți clic pe Aplicare pentru a standardiza paginile și a descărca."
      }
    ],
    "useCases": [
      {
        "title": "Pregătirea imprimării",
        "description": "Standardizați paginile pentru o imprimare consistentă.",
        "icon": "printer"
      },
      {
        "title": "Curățare document",
        "description": "Remediați documentele cu dimensiuni de pagină inconsecvente.",
        "icon": "file-check"
      },
      {
        "title": "Documente profesionale",
        "description": "Creați documente uniforme pentru distribuire.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Cum este gestionat conținutul?",
        "answer": "Conținutul este scalat pentru a se potrivi sau centrat pe noua dimensiune a paginii."
      },
      {
        "question": "Pot păstra raportul de aspect?",
        "answer": "Da, conținutul poate fi scalat proporțional pentru a se potrivi."
      },
      {
        "question": "Ce dimensiuni standard sunt disponibile?",
        "answer": "A4, A3, Letter, Legal și alte dimensiuni comune."
      }
    ]
  },
  "linearize-pdf": {
    "title": "Linearizare PDF",
    "metaDescription": "Optimizați PDF-ul pentru vizualizare rapidă pe web. Activați încărcarea progresivă.",
    "keywords": [
      "linearizare pdf",
      "vizualizare web rapidă",
      "optimizați pdf",
      "pdf progresiv"
    ],
    "description": "<p>Linearize PDF vă optimizează documentele pentru vizualizare rapidă pe web. PDF-urile liniarizate pot începe să fie afișate înainte ca întregul fișier să fie descărcat, îmbunătățind experiența utilizatorului.</p>\n      <p>Cunoscută și sub denumirea de „Vizualizare rapidă pe web”, această optimizare reorganizează structura PDF pentru încărcare progresivă în browserele web.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Linearizare",
        "description": "Faceți clic pe Linearize pentru a optimiza pentru vizualizarea web."
      },
      {
        "step": 3,
        "title": "Descărcați",
        "description": "Descărcați PDF-ul optimizat."
      }
    ],
    "useCases": [
      {
        "title": "Publicare web",
        "description": "Optimizați fișierele PDF pentru descărcări de site-uri web.",
        "icon": "globe"
      },
      {
        "title": "Atașamente la e-mail",
        "description": "Creați PDF-uri care se deschid mai repede pentru destinatari.",
        "icon": "mail"
      },
      {
        "title": "Documente online",
        "description": "Îmbunătățiți experiența de vizualizare a documentelor online.",
        "icon": "cloud"
      }
    ],
    "faq": [
      {
        "question": "Ce este liniarizarea?",
        "answer": "Linearizarea reorganizează datele PDF pentru încărcare progresivă."
      },
      {
        "question": "Reduce dimensiunea fișierului?",
        "answer": "Linearizarea poate crește ușor dimensiunea fișierului datorită structurii adăugate."
      },
      {
        "question": "Este compatibil cu toți spectatorii?",
        "answer": "Da, PDF-urile liniarizate funcționează în toate cititoarele PDF."
      }
    ]
  },
  "page-dimensions": {
    "title": "Dimensiunile paginii",
    "metaDescription": "Analizați dimensiunile paginilor PDF. Vizualizați dimensiunile tuturor paginilor din documentul dvs.",
    "keywords": [
      "dimensiunea paginii pdf",
      "dimensiuni de pagină",
      "măsurători pdf",
      "dimensiunea documentului"
    ],
    "description": "<p>Dimensiunile paginii analizează și afișează dimensiunea fiecărei pagini din documentul PDF. Vizualizați dimensiunile în diferite unități (inci, mm, puncte) și identificați paginile cu dimensiuni nestandard.</p>\n      <p>Util pentru pregătirea tipăririi, analiza documentelor sau identificarea dimensiunilor de pagină inconsecvente.</p>\n      <p>Toate analizele au loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Vedeți dimensiuni",
        "description": "Vedeți dimensiunile paginilor afișate pentru toate paginile."
      },
      {
        "step": 3,
        "title": "Export Raport",
        "description": "Opțional, exportați dimensiunile ca JSON."
      }
    ],
    "useCases": [
      {
        "title": "Print Planning",
        "description": "Verificați dimensiunile paginii înainte de a imprima.",
        "icon": "printer"
      },
      {
        "title": "Analiza documentelor",
        "description": "Identificați pagini cu dimensiuni neobișnuite.",
        "icon": "search"
      },
      {
        "title": "Controlul calității",
        "description": "Verificați că dimensiunile paginilor respectă specificațiile.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Ce unități sunt disponibile?",
        "answer": "Inci, milimetri, centimetri și puncte."
      },
      {
        "question": "Arată orientare?",
        "answer": "Da, este indicată orientarea portret sau peisaj."
      },
      {
        "question": "Pot remedia dimensiuni inconsecvente?",
        "answer": "Utilizați instrumentul Fixare dimensiunea paginii pentru a standardiza dimensiunile."
      }
    ]
  },
  "remove-restrictions": {
    "title": "Eliminați restricțiile",
    "metaDescription": "Eliminați restricțiile PDF. Deblocați permisiunile de imprimare, copiere și editare.",
    "keywords": [
      "eliminați restricțiile pdf",
      "deblochează pdf",
      "permisiuni pdf",
      "pdf nerestricționat"
    ],
    "description": "<p>Eliminare restricții deblochează fișierele PDF care au restricții de permisiune care împiedică imprimarea, copierea sau editarea. Acest instrument elimină restricțiile privind parola proprietarului, păstrând în același timp conținutul documentului.</p>\n      <p>Notă: acest instrument nu poate elimina parolele de utilizator care împiedică deschiderea documentului. Utilizați Decriptarea PDF pentru fișiere protejate prin parolă.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF restricționat",
        "description": "Trageți și plasați PDF-ul restricționat sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Eliminați restricțiile",
        "description": "Faceți clic pe Eliminare pentru a debloca documentul."
      },
      {
        "step": 3,
        "title": "Descărcați",
        "description": "Descărcați PDF-ul nerestricționat."
      }
    ],
    "useCases": [
      {
        "title": "Activați imprimarea",
        "description": "Deblocați fișierele PDF care împiedică imprimarea.",
        "icon": "printer"
      },
      {
        "title": "Activați copierea",
        "description": "Permite selectarea și copierea textului.",
        "icon": "copy"
      },
      {
        "title": "Activați editarea",
        "description": "Eliminați restricțiile privind editarea documentelor.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "Este legal acest lucru?",
        "answer": "Eliminarea restricțiilor din documentele pe care le dețineți sau la care aveți drepturi este în general legală."
      },
      {
        "question": "Poate elimina parolele deschise?",
        "answer": "Nu, utilizați Decriptare PDF pentru documente protejate prin parolă."
      },
      {
        "question": "Conținutul va fi afectat?",
        "answer": "Nu, doar restricțiile sunt eliminate; continutul ramane neschimbat."
      }
    ]
  },
  "repair-pdf": {
    "title": "Reparați PDF",
    "metaDescription": "Remediați fișierele PDF corupte. Recuperați și reparați documentele deteriorate.",
    "keywords": [
      "reparație pdf",
      "remediați pdf",
      "recupera pdf",
      "pdf corupt"
    ],
    "description": "<p>Reparați încercările PDF de a remedia fișierele PDF corupte sau deteriorate. Instrumentul analizează structura documentului și o reconstruiește pentru a recupera cât mai mult conținut posibil.</p>\n      <p>Util pentru recuperarea fișierelor care nu se vor deschide, nu afișează erori sau au conținut lipsă din cauza corupției.</p>\n      <p>Toate reparațiile au loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF deteriorat",
        "description": "Trageți și plasați PDF-ul corupt sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Document de reparație",
        "description": "Faceți clic pe Reparare pentru a încerca recuperarea."
      },
      {
        "step": 3,
        "title": "Descărcați",
        "description": "Descărcați PDF-ul reparat dacă aveți succes."
      }
    ],
    "useCases": [
      {
        "title": "Recuperați fișiere",
        "description": "Recuperați PDF-urile care nu se vor deschide corect.",
        "icon": "refresh-cw"
      },
      {
        "title": "Remediați erorile",
        "description": "Reparați fișierele care arată mesaje de eroare.",
        "icon": "wrench"
      },
      {
        "title": "Restaurați conținut",
        "description": "Recuperați conținutul din fișiere parțial corupte.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Pot fi reparate toate PDF-urile?",
        "answer": "Succesul depinde de tipul și amploarea corupției."
      },
      {
        "question": "Va fi recuperat tot conținutul?",
        "answer": "Instrumentul recuperează cât mai mult posibil; fișierele grav deteriorate pot avea pierderi."
      },
      {
        "question": "Ar trebui să păstrez originalul?",
        "answer": "Da, păstrați întotdeauna fișierul original ca rezervă."
      }
    ]
  },
  "encrypt-pdf": {
    "title": "Criptați PDF",
    "metaDescription": "Protejează fișierele PDF prin parolă. Adăugați criptare și setați permisiuni.",
    "keywords": [
      "criptați pdf",
      "protecția prin parolă pdf",
      "pdf securizat",
      "criptare pdf"
    ],
    "description": "<p>Encrypt PDF adaugă protecție prin parolă și criptare documentelor dvs. PDF. Setați parole de utilizator pentru a preveni deschiderea și parolele de proprietar pentru a controla permisiunile precum imprimarea și copierea.</p>\n      <p>Alegeți dintre diferite niveluri de criptare (AES pe 128 de biți sau 256 de biți) pentru diferite nevoi de securitate.</p>\n      <p>Toată criptarea are loc în browserul dvs., asigurându-vă că parolele și documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Setați parole",
        "description": "Introduceți parola de utilizator și/sau parola proprietarului. Configurați permisiunile."
      },
      {
        "step": 3,
        "title": "Criptați și descărcați",
        "description": "Faceți clic pe Criptare pentru a vă asigura PDF-ul și a descărca."
      }
    ],
    "useCases": [
      {
        "title": "Documente confidențiale",
        "description": "Protejați documentele de afaceri sensibile.",
        "icon": "lock"
      },
      {
        "title": "Fișiere personale",
        "description": "Securizarea documentelor personale, cum ar fi declarațiile fiscale.",
        "icon": "shield"
      },
      {
        "title": "Distribuție controlată",
        "description": "Limitați ceea ce destinatarii pot face cu documentele.\ntasta",
        "icon": "key"
      }
    ],
    "faq": [
      {
        "question": "Care este diferența dintre parolele utilizatorului și cele ale proprietarului?",
        "answer": "Parola utilizator împiedică deschiderea; parola proprietarului controlează permisiunile."
      },
      {
        "question": "Ce criptare este folosită?",
        "answer": "Sunt disponibile opțiuni de criptare AES pe 128 sau 256 biți."
      },
      {
        "question": "Pot seta permisiuni fără o parolă de utilizator?",
        "answer": "Da, puteți seta o parolă de proprietar numai pentru a controla permisiunile."
      }
    ]
  },
  "sanitize-pdf": {
    "title": "Dezinfectează PDF",
    "metaDescription": "Eliminați datele ascunse din PDF-uri. Curățați metadate, scripturi și informații sensibile.",
    "keywords": [
      "dezinfectează pdf",
      "pdf curat",
      "eliminați datele ascunse",
      "pdf confidențialitate"
    ],
    "description": "<p>Sanitize PDF elimină datele ascunse și informațiile potențial sensibile din documentele dvs. Eliminați metadatele, scripturile încorporate, atașamentele, comentariile și alt conținut ascuns.</p>\n      <p>Estențial pentru pregătirea documentelor pentru distribuirea publică sau atunci când confidențialitatea este o problemă.</p>\n      <p>Toată dezinfectarea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Selectați Ce să eliminați",
        "description": "Alegeți ce tipuri de date ascunse să eliminați."
      },
      {
        "step": 3,
        "title": "Dezinfectați și descărcați",
        "description": "Faceți clic pe Dezinfectare pentru a curăța PDF-ul și a descărca."
      }
    ],
    "useCases": [
      {
        "title": "Lansare publică",
        "description": "Pregătiți documente pentru distribuirea publică.",
        "icon": "globe"
      },
      {
        "title": "Protecție a confidențialității",
        "description": "Eliminați informațiile personale înainte de a le partaja.",
        "icon": "shield"
      },
      {
        "title": "Conformitate cu securitatea",
        "description": "Îndeplinește cerințele de securitate pentru manipularea documentelor.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Ce date ascunse sunt eliminate?",
        "answer": "Metadate, scripturi, atașamente, comentarii, date de formular și straturi ascunse."
      },
      {
        "question": "Conținutul vizibil va fi afectat?",
        "answer": "Nu, numai datele ascunse sunt eliminate; rămâne conținut vizibil."
      },
      {
        "question": "Este reversibil?",
        "answer": "Nu, datele șterse nu pot fi recuperate. Păstrați o copie de rezervă a originalului."
      }
    ]
  },
  "find-and-redact": localizedRedactionContent('ro', 'find-and-redact', "Găsiți și redacționați"),
  "redact-pdf": localizedRedactionContent('ro', 'redact-pdf', "Anonimizează PDF"),
  "decrypt-pdf": {
    "title": "Decriptați PDF",
    "metaDescription": "Eliminați parola din fișierele PDF. Deblocați documente protejate prin parolă.",
    "keywords": [
      "decriptați pdf",
      "eliminați parola pdf",
      "deblochează pdf",
      "pdf pentru eliminarea parolei"
    ],
    "description": "<p>Decriptarea PDF elimină protecția prin parolă din documentele PDF. Introduceți parola curentă pentru a debloca fișierul și pentru a crea o copie neprotejată.</p>\n      <p>Acest instrument necesită să cunoașteți parola curentă. Nu poate sparge sau ocoli parolele necunoscute.</p>\n      <p>Toată decriptarea are loc în browserul dvs., asigurându-vă că parolele și documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF protejat",
        "description": "Trageți și plasați PDF-ul protejat prin parolă."
      },
      {
        "step": 2,
        "title": "Introduceți parola",
        "description": "Introduceți parola curentă a documentului."
      },
      {
        "step": 3,
        "title": "Decriptați și descărcați",
        "description": "Faceți clic pe Decriptare pentru a elimina protecția și a descărca."
      }
    ],
    "useCases": [
      {
        "title": "Eliminați parolele vechi",
        "description": "Deblocați documentele atunci când parola nu mai este necesară.",
        "icon": "unlock"
      },
      {
        "title": "Simplificați accesul",
        "description": "Creați copii neprotejate pentru o partajare mai ușoară.",
        "icon": "share-2"
      },
      {
        "title": "Documente de arhivare",
        "description": "Eliminați parolele înainte de arhivarea pe termen lung.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Poate sparge parole necunoscute?",
        "answer": "Nu, trebuie să cunoașteți parola curentă pentru a decripta."
      },
      {
        "question": "Fișierul original este modificat?",
        "answer": "Nu, este creată o nouă copie neprotejată."
      },
      {
        "question": "Ce se întâmplă dacă am uitat parola?",
        "answer": "Din păcate, nu putem recupera parolele uitate."
      }
    ]
  },
  "flatten-pdf": {
    "title": "Aplatizați PDF",
    "metaDescription": "Aplatizați formularele și adnotările PDF. Faceți conținutul needitabil.",
    "keywords": [
      "aplatiza pdf",
      "aplatiza formele",
      "aplatizați adnotările",
      "pdf needitabil"
    ],
    "description": "<p>Flatten PDF convertește elemente interactive precum câmpurile de formular și adnotările în conținut static. PDF-ul aplatizat arată la fel, dar nu mai poate fi editat.</p>\n      <p>Perfect pentru finalizarea formularelor completate, păstrarea adnotărilor sau crearea versiunilor de document care nu pot fi editate.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați PDF-ul cu formulare sau adnotări."
      },
      {
        "step": 2,
        "title": "Selectați Ce să aplatizați",
        "description": "Alegeți să aplatizați formele, adnotările sau ambele."
      },
      {
        "step": 3,
        "title": "Aplatizați și descărcați",
        "description": "Faceți clic pe Aplatizare pentru a crea PDF-ul static."
      }
    ],
    "useCases": [
      {
        "title": "Finalizați formularele",
        "description": "Blocați datele formularului completat pentru a preveni modificările.",
        "icon": "lock"
      },
      {
        "title": "Păstrați adnotările",
        "description": "Faceți adnotările permanente în document.",
        "icon": "check-circle"
      },
      {
        "title": "Documente de arhivare",
        "description": "Creați versiuni needitabile pentru arhivare.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Aplatizarea este reversibilă?",
        "answer": "Nu, aplatizarea este permanentă. Păstrați o copie de rezervă a originalului."
      },
      {
        "question": "Se va schimba aspectul?",
        "answer": "Nu, documentul arată la fel, dar nu mai este interactiv."
      },
      {
        "question": "Reduce dimensiunea fișierului?",
        "answer": "Uneori, elementele interactive sunt convertite în conținut mai simplu."
      }
    ]
  },
  "remove-metadata": {
    "title": "Eliminați metadatele",
    "metaDescription": "Eliminați metadatele din fișierele PDF. Eliminați autorul, datele și proprietățile documentului.",
    "keywords": [
      "elimina metadatele PDF",
      "bandă metadate",
      "pdf confidențialitate",
      "pdf anonim"
    ],
    "description": "<p>Eliminarea metadatelor elimină toate proprietățile documentului și metadatele din fișierele PDF. Eliminați numele autorilor, datele de creare, informațiile despre software și alte date de identificare.</p>\n      <p>Estențial pentru confidențialitate atunci când partajați documente sau când metadatele ar putea dezvălui informații sensibile.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Eliminați metadatele",
        "description": "Faceți clic pe Eliminare pentru a elimina toate metadatele."
      },
      {
        "step": 3,
        "title": "Descărcați",
        "description": "Descărcați PDF-ul fără metadate."
      }
    ],
    "useCases": [
      {
        "title": "Protecție a confidențialității",
        "description": "Eliminați informațiile personale înainte de a le partaja.",
        "icon": "shield"
      },
      {
        "title": "Documente anonime",
        "description": "Creați documente fără atribuirea autorului.",
        "icon": "user-x"
      },
      {
        "title": "Distribuție curată",
        "description": "Distribuiți documente fără metadate interne.",
        "icon": "send"
      }
    ],
    "faq": [
      {
        "question": "Ce metadate sunt eliminate?",
        "answer": "Informații despre autor, titlu, subiect, cuvinte cheie, date, creator și producător."
      },
      {
        "question": "Metadatele XMP sunt eliminate?",
        "answer": "Da, ambele metadatele standard și XMP sunt eliminate."
      },
      {
        "question": "Conținutul va fi afectat?",
        "answer": "Nu, numai metadatele sunt eliminate; conținutul documentului rămâne neschimbat."
      }
    ]
  },
  "change-permissions": {
    "title": "Modificați permisiunile",
    "metaDescription": "Modificați permisiunile PDF. Controlați accesul la imprimare, copiere și editare.",
    "keywords": [
      "permisiuni pdf",
      "modificați accesul la pdf",
      "restricționează pdf",
      "securitate pdf"
    ],
    "description": "<p>Schimbarea permisiunilor modifică controalele de acces pe documentele dvs. PDF. Activați sau dezactivați permisiunile de imprimare, copiere, editare și adnotare.</p>\n      <p>Setați o parolă de proprietar pentru a aplica aceste restricții. Destinatarii pot vizualiza documentul, dar sunt limitati în ceea ce privește acțiunile pe care le pot efectua.</p>\n      <p>Toată procesarea are loc în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Setați permisiunile",
        "description": "Activați sau dezactivați imprimarea, copierea, editarea și adnotările."
      },
      {
        "step": 3,
        "title": "Aplicați și descărcați",
        "description": "Setați parola proprietarului și descărcați PDF-ul restricționat."
      }
    ],
    "useCases": [
      {
        "title": "Preveniți copierea",
        "description": "Dezactivează copierea textului pentru a proteja conținutul.",
        "icon": "copy"
      },
      {
        "title": "Control de imprimare",
        "description": "Restricționați sau permiteți imprimarea documentelor.",
        "icon": "printer"
      },
      {
        "title": "Editare limită",
        "description": "Preveniți modificările documentului.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Am nevoie de o parolă?",
        "answer": "Este necesară o parolă de proprietar pentru a aplica permisiunile."
      },
      {
        "question": "Permisiunile pot fi eliminate?",
        "answer": "Da, cu parola proprietarului sau folosind instrumentul Eliminare restricții."
      },
      {
        "question": "Sunt compatibile toate cititoarele PDF?",
        "answer": "Majoritatea cititorilor PDF respectă permisiunile, dar este posibil ca unii să nu le impună."
      }
    ]
  },
  "pdf-to-docx": {
    "title": "PDF în Word",
    "metaDescription": "Convertiți PDF în documente editabile Word (DOCX). Păstrați formatarea și aspectul.",
    "keywords": [
      "pdf în word",
      "converti pdf în docx",
      "pdf în doc",
      "pdf editabil"
    ],
    "description": "<p>PDF to Word convertește documentele PDF în fișiere editabile Microsoft Word (DOCX). Instrumentul păstrează aspectul original, formatarea, imaginile și fluxul de text.</p>\n      <p>Editați cu ușurință conținutul PDF în Word fără a retasta. Perfect pentru contracte, rapoarte și CV-uri.</p>\n      <p>Toate conversiile au loc local în browserul dvs. folosind tehnologia WebAssembly, asigurându-vă că documentele dvs. nu părăsesc dispozitivul dvs.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Convertiți",
        "description": "Așteptați finalizarea procesului de conversie."
      },
      {
        "step": 3,
        "title": "Descărcați Word Doc",
        "description": "Descărcați fișierul DOCX complet editabil."
      }
    ],
    "useCases": [
      {
        "title": "Editați contracte",
        "description": "Convertiți contractele PDF în Word pentru editare și revizuire.",
        "icon": "file-text"
      },
      {
        "title": "Reluați actualizările",
        "description": "Actualizați CV-urile PDF vechi, transformându-le în Word.",
        "icon": "user"
      },
      {
        "title": "Reutilizarea conținutului",
        "description": "Extrageți conținut din rapoartele PDF pentru alte documente.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Formatarea este păstrată?",
        "answer": "Da, instrumentul urmărește să păstreze aspectul, fonturile și imaginile cât mai bine posibil."
      },
      {
        "question": "Pot converti PDF-urile scanate?",
        "answer": "PDF-urile scanate vor fi convertite ca imagini în Word, cu excepția cazului în care utilizați mai întâi OCR."
      },
      {
        "question": "Este compatibil cu Word?",
        "answer": "Da, rezultatul este un fișier standard .docx compatibil cu Microsoft Word și Google Docs."
      }
    ]
  },
  "pdf-to-markdown": {
    "title": "PDF în Markdown",
    "metaDescription": "Convertiți PDF în format Markdown. Extrageți text și păstrați formatarea precum titluri și liste.",
    "keywords": [
      "pdf la reducere",
      "converti pdf în md",
      "extragerea textului pdf",
      "convertor de reducere",
      "pdf în text"
    ],
    "description": "<p>PDF to Markdown convertește documentele PDF în fișiere Markdown curate și bine structurate. Instrumentul extrage în mod inteligent conținutul text și încearcă să păstreze formatarea precum titluri, liste și paragrafe.</p>\n      <p>Perfect pentru conversia documentelor PDF în formate editabile pentru documentare, luare de note sau sisteme de gestionare a conținutului care acceptă Markdown.</p>\n      <p>Toate conversiile au loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private și securizate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Configurați Opțiuni",
        "description": "Setați intervalul de pagini, alegeți să includeți numerele de pagină și ajustați setările de întrerupere de linie."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Faceți clic pe Conversie pentru a genera fișierul Markdown și a descărca."
      }
    ],
    "useCases": [
      {
        "title": "Documentație",
        "description": "Convertiți manuale și ghiduri PDF în Markdown pentru documentație controlată de versiune.",
        "icon": "file-text"
      },
      {
        "title": "Luarea de note",
        "description": "Extrageți conținut din articole și cărți PDF pentru sistemul dvs. de luare de note.",
        "icon": "edit-3"
      },
      {
        "title": "Migrarea conținutului",
        "description": "Migrați conținutul PDF pe platformele CMS care acceptă Markdown.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Formatarea este păstrată?",
        "answer": "Instrumentul încearcă să detecteze titluri pe baza mărimii fontului și a punctelor marcatoare/liste numerotate. Aspectele complexe pot necesita ajustare manuală."
      },
      {
        "question": "Pot converti anumite pagini?",
        "answer": "Da, puteți specifica un interval de pagini precum „1-3, 5, 7” pentru a converti numai acele pagini."
      },
      {
        "question": "Funcționează cu PDF-urile scanate?",
        "answer": "PDF-urile scanate conțin imagini, nu text. Utilizați mai întâi instrumentul nostru OCR pentru a extrage text înainte de a converti în Markdown."
      }
    ]
  },
  "deskew-pdf": {
    "title": "Aliniați PDF",
    "metaDescription": "Îndreptați automat paginile PDF scanate sau înclinate. Remediați documentele deformate cu detectarea precisă a unghiului.",
    "keywords": [
      "deskew pdf",
      "îndreptați pdf",
      "remediați scanarea înclinată",
      "rotire automată pdf",
      "unghiul pdf corect"
    ],
    "description": "<p>Deskew PDF detectează și corectează automat paginile înclinate sau deformate din documentele dvs. PDF utilizând analiza avansată a variației profilului de proiecție. Acest lucru este esențial pentru documentele scanate care au fost introduse în scaner într-un unghi.</p>\n      <p>Instrumentul analizează textul și alinierea conținutului în diferite unghiuri pentru a găsi rotația optimă, apoi aplică corecția. Puteți ajusta pragul de sensibilitate (1-30) și setările DPI (72-300) pentru rezultate optime.</p>\n      <p>Toată procesarea are loc local în browserul dvs. folosind tehnologia WebAssembly, asigurându-vă că documentele dvs. rămân private și securizate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF scanat sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Configurați setările",
        "description": "Reglați sensibilitatea pragului și DPI dacă este necesar pentru o detectare mai bună."
      },
      {
        "step": 3,
        "title": "Procesați și descărcați",
        "description": "Faceți clic pe Declinare pentru a îndrepta paginile și a descărca PDF-ul corectat."
      }
    ],
    "useCases": [
      {
        "title": "Documente scanate",
        "description": "Remediați paginile care au fost scanate în unghi de la alimentatoarele de documente.",
        "icon": "scan"
      },
      {
        "title": "Scanări mobile",
        "description": "Corectați fotografiile înclinate ale documentelor realizate cu smartphone-uri.",
        "icon": "smartphone"
      },
      {
        "title": "Restaurare arhivă",
        "description": "Îndreptați arhivele scanate vechi pentru o mai bună lizibilitate.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Cât de precisă este detectarea unghiului?",
        "answer": "Instrumentul utilizează analiza variației profilului de proiecție pentru a detecta unghiuri de înclinare de până la ±10 grade cu o precizie ridicată. Omite automat paginile cu unghiuri mai mici de 0,3 grade."
      },
      {
        "question": "Calitatea textului va fi afectată?",
        "answer": "Pentru rotații la multipli de 90 de grade, nu apare nicio pierdere de calitate. Pentru alte unghiuri, unealta se rotunjește la cel mai apropiat grad și își menține calitatea bună."
      },
      {
        "question": "Pot declina numai anumite pagini?",
        "answer": "Instrumentul analizează toate paginile, dar le corectează numai pe acelea cu denivelări detectate peste pragul de sensibilitate. Paginile cu înclinare minimă sunt lăsate neschimbate."
      },
      {
        "question": "Care este pragul de sensibilitate?",
        "answer": "Valorile 1-10 corectează numai înclinările evidente, 11-20 detectează deformarea moderată și 21-30 captează unghiuri subtile. Implicit este 10 pentru detecția echilibrată."
      },
      {
        "question": "Cât durează procesarea?",
        "answer": "Timpul de procesare depinde de dimensiunea fișierului și DPI. 150 DPI (implicit) oferă un echilibru bun între viteză și precizie. DPI mai mare este mai precis, dar mai lent."
      }
    ]
  },
  "pdf-booklet": {
    "title": "PDF Booklet Creator",
    "metaDescription": "Creați machete de broșuri din PDF pentru imprimare. Aranjați paginile pentru legare cu cusătură în șa cu mai multe opțiuni de grilă.",
    "keywords": [
      "broșură pdf",
      "creator de broșuri",
      "tipăriți broșura",
      "cusătură de șa",
      "impunere"
    ],
    "description": "<p>PDF Booklet Creator vă aranjează paginile PDF în machete de broșuri gata pentru producția de tipărire și pliare. Perfect pentru crearea de broșuri, fanzine, broșuri și publicații cusute în șa.</p>\n      <p>Alegeți dintre diferite moduri de grilă (1x2, 2x2, 2x4, 4x4), dimensiuni de hârtie și opțiuni de orientare. Instrumentul gestionează automat impunerea paginii pentru o secvență de pliere adecvată.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Încărcați documentul PDF pe care doriți să îl convertiți într-o broșură."
      },
      {
        "step": 2,
        "title": "Alegeți Aspect",
        "description": "Selectați modul grilă, dimensiunea hârtiei, orientarea și opțiunile de rotație."
      },
      {
        "step": 3,
        "title": "Creați și descărcați",
        "description": "Generați aspectul broșurii și descărcați pentru imprimare."
      }
    ],
    "useCases": [
      {
        "title": "Broșuri",
        "description": "Creați broșuri gata de pliere din documente PDF standard.",
        "icon": "book-open"
      },
      {
        "title": "Zines",
        "description": "Produceți zine-uri auto-publicate cu impunerea corectă a paginii.",
        "icon": "book"
      },
      {
        "title": "Programe de evenimente",
        "description": "Creați broșuri de programe profesionale pentru evenimente.",
        "icon": "calendar"
      }
    ],
    "faq": [
      {
        "question": "Ce este legarea cu cusătura în șa?",
        "answer": "Cusătura cu șaua este o metodă de legare în care foile pliate sunt imbricate și capsate prin pliu."
      },
      {
        "question": "Ce mod grilă ar trebui să folosesc?",
        "answer": "1x2 este standard pentru broșuri. Utilizați 2x2 sau mai mare pentru imprimarea în mai multe pagini pentru a economisi hârtie."
      },
      {
        "question": "Pot previzualiza aspectul?",
        "answer": "Da, instrumentul oferă o previzualizare vizuală înainte de a genera broșura finală."
      }
    ]
  },
  "rasterize-pdf": {
    "title": "Rasterizați PDF",
    "metaDescription": "Convertiți pagini PDF în imagini de înaltă calitate. Exportați ca PNG, JPEG sau WebP cu setări DPI personalizate.",
    "keywords": [
      "rasterizați pdf",
      "pdf la imagine",
      "pdf în png",
      "pdf în jpeg",
      "converti pagini pdf"
    ],
    "description": "<p>Rasterize PDF convertește paginile PDF în imagini raster de înaltă calitate. Alegeți dintre formatele de ieșire PNG, JPEG sau WebP cu control deplin asupra setărilor DPI și de calitate.</p>\n      <p>Perfect pentru crearea de miniaturi, grafice pentru rețelele sociale sau pentru arhivarea conținutului PDF ca imagini. Acceptă selecția intervalului de pagini și procesarea în lot.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a selecta."
      },
      {
        "step": 2,
        "title": "Configurați ieșirea",
        "description": "Selectați DPI, formatul de ieșire (PNG/JPEG/WebP), calitatea și intervalul de pagini."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Procesați paginile și descărcați imaginile individual sau ca arhivă ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Social Media",
        "description": "Convertiți diapozitivele PDF în imagini pentru postarea pe rețelele sociale.",
        "icon": "share-2"
      },
      {
        "title": "Miniaturi",
        "description": "Generați miniaturi de previzualizare pentru documentele PDF.",
        "icon": "image"
      },
      {
        "title": "Publicare web",
        "description": "Convertiți conținutul PDF în formate de imagine prietenoase pentru web.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Ce DPI ar trebui să folosesc?",
        "answer": "72 DPI pentru ecran, 150 DPI pentru uz general, 300 DPI pentru calitatea imprimării."
      },
      {
        "question": "Care format este cel mai bun?",
        "answer": "PNG pentru calitate/transparență, JPEG pentru dimensiuni mici, WebP pentru utilizare web modernă."
      },
      {
        "question": "Pot converti anumite pagini?",
        "answer": "Da, specificați intervale de pagini precum „1-5, 8, 10-15” pentru a converti numai acele pagini."
      }
    ]
  },
  "markdown-to-pdf": {
    "title": "Reducere la PDF",
    "metaDescription": "Convertiți fișierele Markdown în documente PDF frumos formatate. Suport pentru Markdown cu aromă GitHub și evidențierea sintaxelor.",
    "keywords": [
      "reducere la pdf",
      "md în pdf",
      "reducere de conversie",
      "gfm în pdf",
      "convertor de reducere"
    ],
    "description": "<p>Markdown to PDF convertește fișierele dvs. Markdown în documente PDF cu stil profesional. Compatibilitate pentru CommonMark și GitHub Flavored Markdown (GFM), inclusiv tabele, liste de activități și blocuri de cod.</p>\n      <p>Alegeți dintre mai multe teme (luminoasă, întunecată, GitHub) și personalizați dimensiunea paginii și marginile. Blocurile de cod sunt evidențiate de sintaxă pentru o mai bună lizibilitate.</p>\n      <p>Toate conversiile au loc local în browserul dvs., asigurându-vă că conținutul dvs. rămâne privat.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișierul Markdown",
        "description": "Încărcați fișierul .md sau .markdown."
      },
      {
        "step": 2,
        "title": "Alegeți Tema",
        "description": "Selectați o temă vizuală și configurați setările paginii."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Generați PDF-ul cu stil și descărcați."
      }
    ],
    "useCases": [
      {
        "title": "Documentație",
        "description": "Convertiți fișierele README și documentele în PDF-uri care pot fi partajate.",
        "icon": "file-text"
      },
      {
        "title": "Export de note",
        "description": "Exportați notele Markdown în PDF pentru imprimare sau partajare.",
        "icon": "edit-3"
      },
      {
        "title": "Rapoarte",
        "description": "Creați rapoarte din Markdown cu stil profesional.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "Este acceptat GitHub Flavored Markdown?",
        "answer": "Da, sunt acceptate tabelele, listele de sarcini, bararea și alte funcții GFM."
      },
      {
        "question": "Pot personaliza stilul?",
        "answer": "Alegeți dintre temele prestabilite sau adăugați CSS personalizat pentru control deplin."
      },
      {
        "question": "Blocurile de cod sunt evidențiate?",
        "answer": "Da, blocurile de cod includ evidențierea sintaxelor pentru limbile comune."
      }
    ]
  },
  "email-to-pdf": {
    "title": "E-mail în PDF",
    "metaDescription": "Convertiți fișierele de e-mail (.eml, .msg) în documente PDF. Păstrați formatarea, imaginile inline, linkurile pe care se poate face clic și încorporați atașamente.",
    "keywords": [
      "e-mail în pdf",
      "eml în pdf",
      "mesaj în pdf",
      "converti e-mail",
      "convertor de e-mail",
      "salvați e-mailul ca pdf",
      "Outlook în pdf"
    ],
    "description": "<p>Email to PDF convertește fișierele de e-mail (formatele .eml și .msg) în documente PDF bine formatate. Instrumentul păstrează informațiile din antetul e-mailului, conținutul corpului, imaginile inline cu înlocuirea CID, linkurile pe care se poate face clic și încorporează atașamente direct în PDF.</p>\n      <p>Personalizați opțiunile de ieșire, inclusiv dimensiunea paginii (A4, Letter, Legal), formatarea datei cu compatibilitate cu fusul orar și dacă să includeți câmpuri CC/BCC și informații despre atașamente.</p>\n      <p>Toate conversiile au loc local în browserul dvs., asigurându-vă că e-mailurile dvs. rămân private și securizate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișierul de e-mail",
        "description": "Încărcați fișierul de e-mail .eml sau .msg."
      },
      {
        "step": 2,
        "title": "Configurați Opțiuni",
        "description": "Setați dimensiunea paginii, formatul datei, fusul orar și alegeți ce câmpuri să includeți."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Convertiți în PDF cu atașamente încorporate și descărcați rezultatul."
      }
    ],
    "useCases": [
      {
        "title": "Înregistrări juridice",
        "description": "Arhivați e-mailurile importante ca PDF cu atașamente încorporate pentru documentația legală.",
        "icon": "scale"
      },
      {
        "title": "Arhivele de afaceri",
        "description": "Convertiți corespondența de afaceri în PDF pentru păstrarea înregistrărilor pe termen lung.",
        "icon": "briefcase"
      },
      {
        "title": "Păstrarea dovezilor",
        "description": "Salvați dovezile de e-mail cu imagini în linie și atașamente într-un format PDF needitabil.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Ce formate de e-mail sunt acceptate?",
        "answer": "Atât fișierele .eml (RFC 822) cât și .msg (Microsoft Outlook) sunt pe deplin acceptate."
      },
      {
        "question": "Sunt atașamentele incluse?",
        "answer": "Da! Atașamentele sunt încorporate direct în fișierul PDF. Le puteți extrage din PDF folosind un cititor PDF compatibil."
      },
      {
        "question": "Sunt afișate imaginile în linie?",
        "answer": "Da, imaginile inline la care se face referire prin CID (Content-ID) sunt convertite automat în URI de date base64 și afișate în PDF."
      },
      {
        "question": "Se pot face clic pe linkuri?",
        "answer": "Da, toate linkurile HTML (etichetele <a>) și adresele URL din e-mailurile cu text simplu sunt convertite în linkuri pe care se poate face clic în PDF."
      },
      {
        "question": "Formatarea e-mailului este păstrată?",
        "answer": "Da, e-mailurile HTML își mențin formatarea cât mai bine posibil, inclusiv stilurile, imaginile și linkurile."
      }
    ]
  },
  "cbz-to-pdf": {
    "title": "CBZ în PDF",
    "metaDescription": "Convertiți arhivele de benzi desenate (CBZ) în PDF. Păstrați ordinea și calitatea imaginilor pentru benzi desenate digitale.",
    "keywords": [
      "cbz în pdf",
      "benzi desenate în pdf",
      "converti cbz",
      "convertor de benzi desenate",
      "convertor cbz"
    ],
    "description": "<p>CBZ to PDF convertește fișierele Comic Book Archive în documente PDF. Instrumentul extrage toate imaginile din arhiva CBZ și le compilează într-un PDF, menținând în același timp ordinea corectă de citire.</p>\n      <p>Alegeți dintre diferitele opțiuni de dimensiune de pagină, inclusiv dimensiunile originale ale imaginii sau dimensiunile standardizate de benzi desenate. Perfect pentru citirea benzilor desenate pe dispozitive care acceptă PDF, dar nu CBZ.</p>\n      <p>Toate conversiile au loc local în browserul dvs., asigurându-vă că benzile desenate rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișierul CBZ",
        "description": "Încărcați fișierul dvs. de arhivă cu benzi desenate .cbz."
      },
      {
        "step": 2,
        "title": "Selectați Opțiuni",
        "description": "Alegeți setările pentru dimensiunea paginii și calitatea imaginii."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Convertiți în PDF și descărcați benzile desenate."
      }
    ],
    "useCases": [
      {
        "title": "Compatibilitate E-Reader",
        "description": "Convertiți CBZ în PDF pentru cititoarele electronice care acceptă numai PDF.",
        "icon": "book"
      },
      {
        "title": "Arhive de benzi desenate",
        "description": "Creați arhive PDF ale colecției tale de benzi desenate digitale.",
        "icon": "archive"
      },
      {
        "title": "Pregătirea imprimării",
        "description": "Convertiți benzi desenate digitale în PDF pentru imprimare.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Ce este formatul CBZ?",
        "answer": "CBZ este o arhivă ZIP care conține pagini de benzi desenate ca fișiere imagine, redenumite cu extensia .cbz."
      },
      {
        "question": "Calitatea imaginii este păstrată?",
        "answer": "Da, imaginile sunt încorporate la calitatea lor originală în PDF."
      },
      {
        "question": "Sunt acceptate folderele imbricate?",
        "answer": "Da, imaginile din toate folderele din arhivă sunt extrase și sortate."
      }
    ]
  },
  "pdf-to-pdfa": {
    "title": "PDF în PDF/A",
    "metaDescription": "Convertiți PDF în format de arhivă PDF/A. Asigurați conservarea documentelor pe termen lung conform standardelor ISO.",
    "keywords": [
      "pdf în pdfa",
      "convertor pdfa",
      "arhiva pdf",
      "arhivă pdf",
      "conservare pe termen lung"
    ],
    "description": "<p>PDF în PDF/A vă convertește documentele PDF în format PDF/A, standardul ISO pentru arhivarea documentelor pe termen lung. PDF/A asigură că documentele vor fi vizualizate și reproductibile timp de zeci de ani.</p>\n      <p>Alegeți dintre PDF/A-1b (conformitate de bază), PDF/A-2b (recomandat, acceptă transparență) sau PDF/A-3b (permite fișiere încorporate). Instrumentul încorporează fonturile și aplatizează transparența după cum este necesar.</p>\n      <p>Toate conversiile au loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Încărcați PDF-ul pe care doriți să-l convertiți în PDF/A."
      },
      {
        "step": 2,
        "title": "Selectați PDF/A Level",
        "description": "Alegeți nivelul de conformitate PDF/A-1b, PDF/A-2b sau PDF/A-3b."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Convertiți în PDF/A și descărcați documentul de arhivă."
      }
    ],
    "useCases": [
      {
        "title": "Arhivele Juridice",
        "description": "Convertiți documentele legale în PDF/A pentru stocare pe termen lung admisă de instanță.",
        "icon": "scale"
      },
      {
        "title": "Înregistrări guvernamentale",
        "description": "Respectați cerințele guvernamentale de arhivare folosind PDF/A.",
        "icon": "building"
      },
      {
        "title": "Arhivele de afaceri",
        "description": "Păstrați documentele de afaceri importante pentru accesibilitatea viitoare.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Ce nivel PDF/A ar trebui să folosesc?",
        "answer": "PDF/A-2b este recomandat pentru majoritatea utilizărilor. Utilizați 1b pentru compatibilitate maximă sau 3b dacă aveți nevoie de fișiere încorporate."
      },
      {
        "question": "Ce face PDF/A diferit?",
        "answer": "PDF/A încorporează fonturile, dezactivează criptarea și se asigură că toate elementele sunt autonome pentru vizionarea viitoare."
      },
      {
        "question": "Pot converti înapoi din PDF/A?",
        "answer": "Fișierele PDF/A sunt PDF-uri standard și pot fi deschise în mod normal. Caracteristicile de arhivă adaugă restricții, nu limitări."
      }
    ]
  },
  "font-to-outline": {
    "title": "Font la contur",
    "metaDescription": "Eliminați dependențele de fonturi din documentele PDF prin conversia paginilor în imagini de înaltă calitate. Asigură compatibilitatea cu toate sistemele.",
    "keywords": [
      "font de conturat",
      "fonturi de contur",
      "eliminați fonturile",
      "compatibilitate cu fonturile",
      "aplatiza fonturile pdf",
      "eliminarea fontului pdf"
    ],
    "description": "<p>Font to Outline elimină toate dependențele fonturilor din PDF-ul dvs. prin conversia fiecărei pagini în conținut rasterizat de înaltă calitate. Acest lucru vă asigură că documentul arată exact la fel pe orice sistem, chiar dacă fonturile originale nu sunt instalate.</p>\n      <p>Instrumentul redă fiecare pagină la DPI ales de dvs. (150-600), eliminând fonturile încorporate, păstrând în același timp aspectul vizual exact. Opțional, puteți adăuga un strat de text invizibil pentru a menține posibilitatea de căutare.</p>\n      <p>Acest lucru este esențial pentru pregătirea imprimării, compatibilitatea între platforme și evitarea problemelor de licențiere a fonturilor atunci când partajați documente. Toate procesările au loc local în browserul dvs.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Încărcați PDF-ul care conține fonturile pe care doriți să le eliminați."
      },
      {
        "step": 2,
        "title": "Configurați calitatea",
        "description": "Alegeți DPI (300 recomandat pentru imprimare, 150 pentru ecran). Activați textul care poate fi căutat dacă este necesar."
      },
      {
        "step": 3,
        "title": "Convertiți și descărcați",
        "description": "Procesați fișierul și descărcați PDF-ul independent de font."
      }
    ],
    "useCases": [
      {
        "title": "Pregătirea imprimării",
        "description": "Eliminați problemele de font la imprimantele comerciale prin eliminarea tuturor dependențelor de font.",
        "icon": "printer"
      },
      {
        "title": "Partajare pe mai multe platforme",
        "description": "Partajați documente care arată identic pe orice dispozitiv, indiferent de fonturile instalate.",
        "icon": "share-2"
      },
      {
        "title": "Licențierea fonturilor",
        "description": "Eliminați fonturile încorporate pentru a evita problemele legate de licențiere la distribuirea documentelor.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Cum funcționează?",
        "answer": "Instrumentul redă fiecare pagină la rezoluție înaltă (DPI ales de dvs.) și recreează PDF-ul din aceste imagini, eliminând toate dependențele de fonturi, păstrând în același timp aspectul vizual."
      },
      {
        "question": "Pot să selectez în continuare text după conversie?",
        "answer": "În mod implicit, nu. Textul devine parte a imaginii. Cu toate acestea, puteți activa „Păstrarea textului căutat” pentru a adăuga un strat de text invizibil pentru funcționalitatea de căutare și copiere."
      },
      {
        "question": "Ce DPI ar trebui să folosesc?",
        "answer": "300 DPI este recomandat pentru ieșire de calitate a imprimării. 150 DPI este suficient pentru vizualizarea pe ecran și produce fișiere mai mici. 600 DPI este pentru cea mai înaltă calitate, dar creează fișiere mari."
      },
      {
        "question": "Va crește dimensiunea fișierului?",
        "answer": "Mărimea fișierului depinde de DPI și de conținut. 150 DPI produce de obicei fișiere mai mici, 300 DPI poate crește dimensiunea, 600 DPI mărește semnificativ dimensiunea. Compresia este aplicată automat."
      },
      {
        "question": "Este reversibil?",
        "answer": "Nu, datele fonturilor sunt șterse definitiv. Păstrați o copie de rezervă a originalului dacă aveți nevoie de text editabil cu fonturile originale."
      },
      {
        "question": "Ce zici de grafica vectorială?",
        "answer": "Grafica vectorială (forme, linii) din PDF-ul original va fi convertită în raster împreună cu text. Calitatea vizuală este păstrată la DPI ales."
      }
    ]
  },
  "extract-tables": {
    "title": "Extrageți tabele din PDF",
    "metaDescription": "Detectați și extrageți tabele din documente PDF. Exportați în formate JSON, Markdown sau CSV.",
    "keywords": [
      "extrage tabele",
      "extragerea tabelului pdf",
      "pdf în csv",
      "pdf la excel",
      "detectarea tabelului"
    ],
    "description": "<p>Extract Tables from PDF detectează datele tabulare din documentele dvs. PDF și le exportă în formate structurate. Alegeți JSON pentru integrarea datelor, Markdown pentru documentație sau CSV pentru foi de calcul.</p>\n      <p>Instrumentul folosește algoritmi de detectare inteligenți pentru a identifica structurile tabelelor chiar și în documente complexe. Specificați intervalele de pagini și ajustați parametrii de detectare pentru rezultate optime.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Încărcați PDF-ul care conține tabelele pe care doriți să le extrageți."
      },
      {
        "step": 2,
        "title": "Configurați detectarea",
        "description": "Setați intervalul de pagini și pragurile minime pentru coloană/rând."
      },
      {
        "step": 3,
        "title": "Exportați și descărcați",
        "description": "Alegeți formatul de ieșire (JSON/Markdown/CSV) și descărcați."
      }
    ],
    "useCases": [
      {
        "title": "Analiza datelor",
        "description": "Extrageți datele din tabel pentru analize în foi de calcul sau baze de date.",
        "icon": "bar-chart"
      },
      {
        "title": "Procesarea raportului",
        "description": "Extrageți tabele din rapoartele PDF pentru procesare ulterioară.",
        "icon": "file-text"
      },
      {
        "title": "Documentație",
        "description": "Convertiți tabelele PDF în Markdown pentru documentația tehnică.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Poate detecta tabele complexe?",
        "answer": "Instrumentul funcționează cel mai bine cu tabele grilă simple. Celulele complexe îmbinate pot necesita ajustare manuală."
      },
      {
        "question": "Ce se întâmplă dacă nu se găsesc tabele?",
        "answer": "Încercați să ajustați pragul minim de coloane/rânduri sau verificați dacă PDF-ul conține structuri reale de tabel."
      },
      {
        "question": "Pot extrage din anumite pagini?",
        "answer": "Da, specificați un interval de pagini pentru a limita extragerea la anumite pagini."
      }
    ]
  },
  "ocg-manager": {
    "title": "PDF Layer Manager (OCG)",
    "metaDescription": "Gestionați straturi PDF (Grupuri de conținut opționale). Vizualizați, comutați, adăugați, ștergeți și redenumiți straturi din documentele dvs. PDF.",
    "keywords": [
      "straturi pdf",
      "manager ocg",
      "grupuri de conținut opționale",
      "vizibilitatea stratului pdf",
      "gestionați straturi pdf"
    ],
    "description": "<p>PDF Layer Manager vă permite să vizualizați și să gestionați grupurile de conținut opționale (OCG) în documentele dumneavoastră PDF. Straturile OCG sunt folosite în desene tehnice, hărți și documente complexe pentru a organiza conținutul în straturi care pot fi comutate.</p>\n      <p>Vizualizați toate straturile din PDF, comutați vizibilitatea acestora, adăugați straturi noi, ștergeți cele nedorite sau redenumiți straturile existente. Acest instrument este esențial pentru lucrul cu PDF-uri stratificate, cum ar fi planuri arhitecturale, exporturi CAD și documente gata de imprimare.</p>\n      <p>Toată procesarea are loc local în browserul dvs., asigurându-vă că documentele dvs. rămân private și securizate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF-ul",
        "description": "Încărcați un fișier PDF care conține straturi (OCG) sau unul la care doriți să adăugați straturi."
      },
      {
        "step": 2,
        "title": "Vizualizați straturi",
        "description": "Instrumentul listează automat toate straturile găsite în document cu starea lor de vizibilitate."
      },
      {
        "step": 3,
        "title": "Gestionați straturi",
        "description": "Comutați vizibilitatea straturilor, redenumiți straturi, adăugați altele noi sau ștergeți straturi nedorite."
      },
      {
        "step": 4,
        "title": "Salvați și descărcați",
        "description": "Descărcați PDF-ul modificat cu modificările layerului aplicate."
      }
    ],
    "useCases": [
      {
        "title": "Desene tehnice",
        "description": "Gestionați straturi în exporturile CAD pentru a afișa/ascunde dimensiuni, adnotări sau diferite vederi.",
        "icon": "ruler"
      },
      {
        "title": "Editare hărți",
        "description": "Comutați diferite straturi de hărți, cum ar fi topografie, drumuri și etichete pentru imprimări personalizate de hărți.",
        "icon": "map"
      },
      {
        "title": "Pregătirea imprimării",
        "description": "Pregătiți PDF-uri stratificate pentru imprimare prin comutarea straturilor adecvate pentru diferite versiuni.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Ce sunt straturile PDF (OCG)?",
        "answer": "Grupurile de conținut opționale (OCG) sunt straturi dintr-un PDF care pot fi afișate sau ascunse. Sunt utilizate în mod obișnuit în desene CAD, hărți și documente complexe."
      },
      {
        "question": "De ce PDF-ul meu nu afișează straturi?",
        "answer": "Nu toate PDF-urile conțin straturi. Straturile sunt adăugate de obicei în timpul creării PDF din software de proiectare sau aplicații CAD."
      },
      {
        "question": "Modificările stratului vor afecta conținutul original?",
        "answer": "Modificările vizibilității stratului afectează doar ceea ce este afișat sau imprimat. Conținutul real rămâne în document."
      }
    ]
  },
  "pdf-reader": {
    "title": "PDF Reader",
    "metaDescription": "Cititor PDF online gratuit. Vizualizați, navigați, măriți, rotiți și imprimați documente PDF direct în browser.",
    "keywords": [
      "cititor pdf",
      "vizualizator pdf",
      "vizualizați pdf online",
      "citiți pdf",
      "vizualizator de browser pdf"
    ],
    "description": "<p>PDF Reader este un vizualizator PDF complet care vă permite să citiți și să navigați în documente PDF direct în browser. Nu este necesară instalarea de software - trebuie doar să încărcați PDF-ul și să începeți să citiți.</p>\n      <p>Navigați între pagini, măriți și micșorați, rotiți vizualizarea și utilizați modul ecran complet pentru o citire fără distracție. De asemenea, puteți imprima documente sau le puteți descărca pentru acces offline.</p>\n      <p>Toate vizionările au loc local în browserul dvs. Documentele dvs. nu sunt niciodată încărcate pe niciun server, asigurând confidențialitate completă.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Deschideți PDF-ul",
        "description": "Faceți clic pentru a încărca sau trage și plasați un fișier PDF pentru a-l deschide în cititor."
      },
      {
        "step": 2,
        "title": "Navigați prin pagini",
        "description": "Utilizați comenzile paginii pentru a merge la pagina anterioară sau următoare sau pentru a sări la un anumit număr de pagină."
      },
      {
        "step": 3,
        "title": "Ajustați vizualizarea",
        "description": "Măriți sau micșorați, rotiți vizualizarea sau intrați în modul ecran complet pentru o citire confortabilă."
      },
      {
        "step": 4,
        "title": "Imprimați sau descărcați",
        "description": "Imprimați documentul sau descărcați-l pentru acces offline atunci când este necesar."
      }
    ],
    "useCases": [
      {
        "title": "Revizuirea documentelor",
        "description": "Examinați rapid documentele PDF fără a instala niciun software.",
        "icon": "book-open"
      },
      {
        "title": "Lectură mobilă",
        "description": "Citiți documente PDF pe orice dispozitiv cu un browser web.",
        "icon": "smartphone"
      },
      {
        "title": "Previzualizare rapidă",
        "description": "Previzualizați PDF-urile înainte de a decide să le descărcați sau să le imprimați.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Este documentul meu securizat?",
        "answer": "Da, documentul dumneavoastră este procesat în întregime în browser și nu este încărcat niciodată pe niciun server."
      },
      {
        "question": "Pot adnota sau edita PDF-ul?",
        "answer": "Acest instrument este doar pentru vizualizare. Utilizați instrumentele noastre Semnați PDF sau Adnotare PDF pentru editare."
      },
      {
        "question": "Funcționează pe dispozitive mobile?",
        "answer": "Da, PDF Reader funcționează pe toate dispozitivele cu un browser web modern."
      }
    ]
  },
  "digital-sign-pdf": {
    "title": "Semnătura digitală",
    "metaDescription": "Semnează digital documente PDF cu certificate PFX, P12 sau PEM. Adăugați local semnături bazate pe certificat în browser.",
    "keywords": [
      "semnătură digitală pdf",
      "certificat x509",
      "pfx semn pdf",
      "p12 semn pdf",
      "semn pem pdf",
      "semnează legal pdf"
    ],
    "description": "<p>Semnătura digitală vă permite să adăugați semnături digitale criptografice X.509 documentelor PDF. Spre deosebire de semnăturile simple desenate, semnăturile digitale oferă validitate legală și verificare a integrității documentelor.</p>\n      <p>Încărcați fișierul de certificat (format PFX, P12 sau PEM), introduceți parola și semnați PDF-ul. Puteți adăuga semnături vizibile cu text, imagini și poziționare personalizate sau semnături invizibile numai pentru integritatea documentului.</p>\n      <p>Toate semnările au loc local în browserul dvs. Certificatul și documentele dvs. nu sunt încărcate niciodată pe niciun server.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF",
        "description": "Încărcați documentul PDF pe care doriți să îl semnați digital."
      },
      {
        "step": 2,
        "title": "Încărcare certificat",
        "description": "Încărcați fișierul certificatului X.509 (.pfx, .p12 sau .pem) și introduceți parola."
      },
      {
        "step": 3,
        "title": "Configurați semnătura",
        "description": "Adăugați opțional motivul, locația și semnătura vizibilă cu text sau imagine personalizate."
      },
      {
        "step": 4,
        "title": "Semnați și descărcați",
        "description": "Faceți clic pe Semnați PDF pentru a aplica semnătura digitală și a descărca documentul semnat."
      }
    ],
    "useCases": [
      {
        "title": "Documente legale",
        "description": "Semnează contracte, acorduri și documente juridice cu semnături digitale obligatorii.",
        "icon": "scale"
      },
      {
        "title": "Aprobari de afaceri",
        "description": "Semnează digital facturile, comenzile de achiziție și documentele de aprobare pentru pistele de audit.",
        "icon": "briefcase"
      },
      {
        "title": "Integritatea documentului",
        "description": "Asigurați-vă că documentele nu au fost modificate după semnare.",
        "icon": "shield-check"
      }
    ],
    "faq": [
      {
        "question": "Ce formate de certificate sunt acceptate?",
        "answer": "Formatele de certificat PFX (.pfx), PKCS#12 (.p12) și PEM (.pem) sunt acceptate."
      },
      {
        "question": "Semnătura este valabilă din punct de vedere legal?",
        "answer": "Da, semnăturile digitale X.509 sunt recunoscute legal în majoritatea jurisdicțiilor atunci când se utilizează un certificat valid."
      },
      {
        "question": "Pot adăuga o semnătură vizibilă?",
        "answer": "Da, puteți adăuga o semnătură vizibilă cu text, imagine, poziție și stil personalizate."
      }
    ]
  },
  "validate-signature": {
    "title": "Validați semnătura",
    "metaDescription": "Verificați semnăturile digitale în documentele PDF. Verificați valabilitatea certificatului, informațiile despre semnatar și integritatea documentului.",
    "keywords": [
      "validați semnătura pdf",
      "verificați semnătura digitală",
      "verificați certificatul pdf",
      "verificarea semnăturii"
    ],
    "description": "<p>Validare semnătură vă permite să verificați semnăturile digitale în documente PDF. Verificați dacă semnăturile sunt valide, vedeți informațiile despre certificat și confirmați integritatea documentului.</p>\n      <p>Încărcați un PDF semnat pentru a vedea toate semnăturile, starea lor de valabilitate, informațiile despre semnatar și dacă documentul a fost modificat după semnare.</p>\n      <p>Toată validarea are loc local în browserul dvs. Documentele dvs. nu sunt niciodată încărcate pe niciun server.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF semnat",
        "description": "Încărcați un document PDF care conține semnături digitale."
      },
      {
        "step": 2,
        "title": "Vedeți rezultatele",
        "description": "Vedeți toate semnăturile găsite în document cu starea lor de valabilitate."
      },
      {
        "step": 3,
        "title": "Verificați detaliile",
        "description": "Vizualizați informațiile despre certificat, detaliile semnatarului și marcajul de timp al semnării."
      },
      {
        "step": 4,
        "title": "Export Raport",
        "description": "Opțional descărcați un raport JSON al rezultatelor validării."
      }
    ],
    "useCases": [
      {
        "title": "Verificarea documentului",
        "description": "Verificați dacă documentele semnate sunt autentice și nu au fost modificate.",
        "icon": "shield-check"
      },
      {
        "title": "Audit de conformitate",
        "description": "Verificați valabilitatea semnăturii în scopuri de conformitate și audit.",
        "icon": "clipboard-check"
      },
      {
        "title": "Revizuirea certificatului",
        "description": "Vizualizați detaliile certificatului și datele de expirare pentru documentele semnate.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "Ce înseamnă „valid”?",
        "answer": "O semnătură validă înseamnă că documentul nu a fost modificat de la semnare și lanțul de certificate este intact."
      },
      {
        "question": "Pot valida mai multe PDF-uri?",
        "answer": "Da, puteți încărca mai multe PDF-uri și puteți valida toate semnăturile în lot."
      },
      {
        "question": "De ce ar putea o semnătură să fie invalidă?",
        "answer": "Semnăturile pot fi invalide dacă documentul a fost modificat, certificatul a expirat sau certificatul nu este de încredere."
      }
    ]
  },
  "ai-pdf-reflower": {
    "title": "AI PDF Layout Reflower",
    "metaDescription": "Redistribuiți textul PDF pentru o citire mai ușoară pe mobil. Exportați conținutul extras ca Markdown sau EPUB în browser.",
    "keywords": [
      "pdf reflow",
      "pdf receptiv",
      "pdf la reducere",
      "export epub",
      "cititor pdf mobil"
    ],
    "description": "<p>AI PDF Layout Reflower este însoțitorul tău suprem pentru citirea documentelor PDF pe dispozitive mobile. PDF-urile tradiționale folosesc un aspect fix, care necesită adesea mărire nesfârșită și defilare orizontală pe smartphone-uri sau tablete, rezultând o experiență de citire plictisitoare.</p>\n      <p>Acest instrument analizează în mod inteligent fluxul de text, spația dintre linii și coordonatele fizice ale paginilor PDF, reconstruind paragrafele semantice și ierarhiile de titluri. Pentru documentele cu mai multe coloane sau cu două coloane, îmbină inteligent fluxurile de coloane într-un singur flux receptiv, asigurând o citire lină.</p>\n      <p>În plus, acceptă redarea formulelor matematice în LaTeX/MathJax și oferă mai multe teme de citire (Sepia, Întunecat, Verde pentru protecția ochilor). Puteți exporta aspectul redistribuit ca Markdown sau o carte electronică EPUB standard cu un singur clic.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișierul PDF",
        "description": "Trageți și plasați fișierul PDF sau faceți clic pentru a căuta și selectați-l."
      },
      {
        "step": 2,
        "title": "Selectați Tema de citire",
        "description": "Alegeți dimensiunea fontului și culorile temei preferate în simulatorul mobil 3D din dreapta."
      },
      {
        "step": 3,
        "title": "Document de export",
        "description": "Odată mulțumit, utilizați frânghia fizică pentru a exporta documentul ca Markdown sau EPUB."
      }
    ],
    "useCases": [
      {
        "title": "Lectură de literatură mobilă",
        "description": "Citiți lucrările academice și rapoartele de cercetare pe telefonul dvs. fără probleme, fără a mări constant.",
        "icon": "smartphone"
      },
      {
        "title": "Conversie Ebook",
        "description": "Convertiți fișiere PDF cu conținut greoi de text în fișiere EPUB și importați-le în Kindle sau în alte cititoare de cărți electronice.",
        "icon": "book"
      },
      {
        "title": "Arhiva de note",
        "description": "Convertiți direct conținutul PDF structurat în fișiere Markdown curate pentru baza dvs. de cunoștințe personale.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Gestionează corect fișierele PDF cu două coloane?",
        "answer": "Da, reînflorirea aspectului detectează coordonatele orizontale ale blocurilor de text și structurile coloanelor din stânga și din dreapta secvenţial, prevenind intercalarea liniilor."
      },
      {
        "question": "Se vor pierde imaginile și formulele matematice?",
        "answer": "Formulele matematice sunt convertite în sintaxa LaTeX/MathJax pentru redare web curată, iar imaginile sunt păstrate în pozițiile lor semantice corespunzătoare."
      },
      {
        "question": "Conversia se face în cloud?",
        "answer": "Nu, toate analizele de aspect și ambalarea formatelor sunt efectuate local în browserul dvs. pentru a garanta confidențialitatea absolută a documentelor dvs."
      }
    ]
  },
  "citation-linker": {
    "title": "Citation Linker",
    "metaDescription": "Transformați marcatorii de citare din PDF-uri în link-uri DOI pe care se poate face clic sau referințe de pagină. Adăugați navigare utilă documentelor de cercetare.",
    "keywords": [
      "linker de citare",
      "hyperlink pdf",
      "doi potrivire",
      "asistent academic",
      "referințe pdf"
    ],
    "description": "<p>Citation Linker este conceput special pentru cercetătorii academicieni. În multe lucrări PDF, marcatorii de citare (de exemplu, [1], [2]) sunt text simplu, forțând cititorii să deruleze înainte și înapoi la lista de referințe de la sfârșitul documentului, întrerupându-le concentrarea.</p>\n      <p>Acest instrument citește text PDF la nivel local, folosește recunoașterea modelelor pentru a potrivi marcatorii de citare cu intrările de referință corespunzătoare și suprapune adnotări pe linkuri PDF pe care se poate face clic folosind căutări DOI sau coordonate de salt de pagină.</p>\n      <p>De asemenea, generează o hartă interactivă a relațiilor de citare pentru a naviga vizual prin rețeaua de referință a documentului.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF academic",
        "description": "Încărcați o lucrare PDF sau o teză care conține o bibliografie/secțiune de referință."
      },
      {
        "step": 2,
        "title": "Revizuire citate",
        "description": "Inspectați perechile de citate din harta interactivă și editați manual sau adăugați link-uri DOI dacă este necesar."
      },
      {
        "step": 3,
        "title": "Injectați legături",
        "description": "Faceți clic pe butonul de activare pentru a suprapune hyperlinkuri pe PDF și pentru a descărca documentul actualizat."
      }
    ],
    "useCases": [
      {
        "title": "Lectură profundă de literatură",
        "description": "Faceți clic pe marcatorii de citare pentru a vedea imediat detaliile de referință sau pentru a naviga la pagini externe DOI.",
        "icon": "link"
      },
      {
        "title": "Pregătirea pre-publicării",
        "description": "Asigurați-vă că lucrările dvs. academice scrise au navigații pe hyperlink complet active înainte de trimiterea finală.",
        "icon": "award"
      },
      {
        "title": "Analiza hărții de referință",
        "description": "Înțelegeți ierarhiile și conexiunile din literatură prin intermediul hărții interactive de topologie a rețelei.",
        "icon": "git-network"
      }
    ],
    "faq": [
      {
        "question": "Ce se întâmplă dacă o referință nu are DOI?",
        "answer": "Dacă nu poate fi găsit un DOI, instrumentul revine la o acțiune internă „GoTo Page”, permițându-vă să faceți clic pe marcator și să sari direct la pagina de referință."
      },
      {
        "question": "Ce formate de citare sunt acceptate?",
        "answer": "Acceptă paranteze numerice comune (de exemplu, [1], [1-3]) și citările autor-an (de exemplu, Autor și colab., 202X)."
      },
      {
        "question": "Va modifica aspectul PDF-ului meu?",
        "answer": "Nu, injectează adnotări invizibile Link deasupra textului, păstrând aspectul original, fonturile și stilul documentului."
      }
    ]
  },
  "vector-extractor": {
    "title": "PDF Vector Extractor",
    "metaDescription": "Extrageți grafica vectorială din paginile PDF ca SVG. Selectați diagrame, diagrame și logo-uri pentru recolorare și export.",
    "keywords": [
      "extrage vectori din pdf",
      "pdf în svg",
      "diagrame vectoriale pdf",
      "extrage sigla",
      "desene vectoriale"
    ],
    "description": "<p>PDF Vector Extractor deblochează căi vectoriale și lucrări de artă încorporate în fișierele PDF. Extrageți cu ușurință diagrame vectoriale, diagrame sau sigle din documente pentru lucrări de proiectare sau imprimare.</p>\n      <p>Sub capotă, utilizează redarea SVG de înaltă fidelitate pentru a deconstrui căile vectoriale PDF în arbori de elemente SVG standard, curați, fără pierderi de precizie.</p>\n      <p>Interfața evidențiază elementele hover cu un efect de explozie a stratului 3D pe axa Z, complet cu un panou de selectare a culorilor pentru ca designerii să ajusteze și să extragă nodurile vectoriale.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați documentul PDF",
        "description": "Încărcați un PDF care conține elemente vectoriale, diagrame, diagrame sau sigle."
      },
      {
        "step": 2,
        "title": "Selectați Elemente",
        "description": "Plasați cursorul peste pânza vectorială pentru a evidenția elemente, apoi faceți clic pentru a selecta un nod."
      },
      {
        "step": 3,
        "title": "Personalizați și exportați",
        "description": "Ajustați atributele căii din panou, apoi descărcați ca SVG sau copiați codul sursă SVG."
      }
    ],
    "useCases": [
      {
        "title": "Extragerea activelor de proiectare",
        "description": "Extrageți rapid siglele companiei, pictogramele și ilustrațiile din ghidurile de brand sau broșuri.",
        "icon": "bezier"
      },
      {
        "title": "Export de diagrame științifice",
        "description": "Extrageți diagrame vectoriale din lucrări de cercetare pentru a le utiliza în tipărirea de înaltă rezoluție sau prezentări.",
        "icon": "presentation"
      },
      {
        "title": "Recolorare a activelor vectoriale",
        "description": "Modificați culoarea conturului și a umplerii elementelor extrase înainte de a le salva pentru proiecte web.",
        "icon": "crown"
      }
    ],
    "faq": [
      {
        "question": "De ce nu pot selecta anumite imagini?",
        "answer": "PDF-urile conțin atât imagini raster (cum ar fi fotografii sau pagini scanate) cât și ilustrații vectoriale (cum ar fi forme și curbe). Numai căile vectoriale pot fi deconstruite în căi SVG."
      },
      {
        "question": "Ieșirea SVG conține stiluri?",
        "answer": "Da, SVG-ul exportat păstrează toate proprietățile originale, inclusiv umplerile, liniile, opacitatea, gradienții și transformările de coordonate."
      },
      {
        "question": "Fișierele mari vor întârzia?",
        "answer": "Folosim accelerarea WebAssembly, dar randarea PDF-urilor cu desene CAD extrem de complexe sau mii de trasee vectoriale poate dura câteva secunde."
      }
    ]
  },
  "deep-sanitize": {
    "title": "Dezinfectant de metadate profunde",
    "metaDescription": "Eliminați metadatele, straturile ascunse și obiectele neutilizate din PDF-uri. Curățați informațiile documentului la nivel local înainte de partajare.",
    "keywords": [
      "igienizare pdf",
      "ștergeți metadatele",
      "anonimizează pdf",
      "bandă filigran ascuns",
      "pdf securizat"
    ],
    "description": "<p>Deep Metadata Sanitizer este cea mai bună apărare împotriva scurgerilor de metadate și a urmăririi ascunse. Pur și simplu desenarea unor casete negre peste textul vizibil din fișierele PDF nu este suficientă pentru a proteja secretele comerciale.</p>\n      <p>Acest instrument scanează structura binară PDF pentru a șterge complet informațiile despre autor, software-ul creatorului, jurnalele de editare (metadate XMP), memoria cache PieceInfo proprietară și grupurile de conținut opționale OCG (deseori utilizate pentru filigrane invizibile).</p>\n      <p>De asemenea, rescrie complet tabelele de referințe încrucișate (xref), eliminând toate blocurile de actualizare incrementală pentru a se asigura că datele istorice șterse sau modificate nu pot fi restaurate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF",
        "description": "Selectați fișierul PDF care conține date sensibile sau istoricul modificărilor."
      },
      {
        "step": 2,
        "title": "Rulați scanerul",
        "description": "Declanșați scanerul de izolare 3D pentru a verifica fișierul pentru metadate și straturi ascunse."
      },
      {
        "step": 3,
        "title": "Igienizare în profunzime",
        "description": "Faceți clic pe dezinfectare pentru a șterge elementele de urmărire și a descărca PDF-ul complet curat."
      }
    ],
    "useCases": [
      {
        "title": "Partajarea contractului",
        "description": "Eliminați înregistrările de schiță, căile și revizuirile anterioare înainte de a partaja contractele de afaceri cu terți.",
        "icon": "file-signature"
      },
      {
        "title": "Publicare anonimizată",
        "description": "Ștergeți adnotările și filigranele invizibile pentru a publica documente în mod anonim și în siguranță.",
        "icon": "eye-off"
      },
      {
        "title": "Optimizare PDF",
        "description": "Eliminați obiectele orfane și fluxurile de date gunoi pentru a face fișierele să se încarce mai rapid pe web.",
        "icon": "zap"
      }
    ],
    "faq": [
      {
        "question": "Cu ce ​​este diferită de eliminarea standard a metadatelor?",
        "answer": "Instrumentele standard șterg numai câmpurile de bază, cum ar fi titlul sau autorul. Deep Sanitizer reconstruiește întregul tabel PDF xref, ștergând PieceInfo, filigranele ascunse și revizuirile incrementale istorice."
      },
      {
        "question": "Va afecta acest lucru aspectul sau textul documentului?",
        "answer": "Nu, elimină doar fluxurile de descriere ascunse și datele de structură. Aspectul vizibil, textele și grafica rămân neschimbate."
      },
      {
        "question": "Aceasta elimină parolele PDF?",
        "answer": "Nu, dacă un PDF este criptat, trebuie să îl deblocați mai întâi înainte de a efectua o dezinfectare profundă."
      }
    ]
  },
  "booklet-folding-simulator": {
    "title": "Broșură 3D și Simulator de pliere",
    "metaDescription": "Aranjați paginile PDF pentru imprimarea broșurilor. Previzualizați foile pliate și machetele de cusătură în șa înainte de a exporta documentul gata de imprimare.",
    "keywords": [
      "Impunere 3D",
      "simulator de pliere",
      "cusătură de șa",
      "aspectul cărții",
      "verificare prin imprimare"
    ],
    "description": "<p>Simulator de broșuri 3D și pliere este un instrument avansat conceput pentru designerii de tipărire și profesioniștii în domeniul publicării. Aspectul tradițional al cărții necesită calcularea suprapunerilor de pagini complexe și a secvențelor de paginare de impunere. Acest instrument vizualizează și automatizează întregul proces.</p>\n      <p>Sub capotă, algoritmul nostru personalizat de impunere mapează o listă secvențială de pagini PDF în aspecte standard ale foilor de imprimare (cum ar fi îndouri de 4 pagini, cusături de șa de 8 pagini sau pliuri acordeon), îmbinând paginile pe fața și spatele foilor fizice mari.</p>\n      <p>În partea frontală, utilizăm transformări pure CSS 3D Matrix și curbe fizice cu arc-masă pentru a anima plierea foii pe orizontală și pe verticală, oferind o previzualizare a legăturii de tip fizic, cu un factor WOW ridicat.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișierul PDF",
        "description": "Trageți și plasați documentul PDF pe care doriți să îl configurați pentru imprimare."
      },
      {
        "step": 2,
        "title": "Selectați Aspect pliabil",
        "description": "Alegeți schema de impunere preferată (de exemplu, îndoire de 4 pagini, cusătură cu șa de 8 pagini, acordeon de 4 pagini)."
      },
      {
        "step": 3,
        "title": "Previzualizare 3D interactivă",
        "description": "Trageți cursorul pentru a vedea plierea foii în 3D și inspectați aspectul final de numerotare a paginii."
      },
      {
        "step": 4,
        "title": "Generați PDF impus",
        "description": "Faceți clic pe generare pentru a descărca PDF-ul fisei fizice rearanjate și îmbinate, gata pentru imprimare față-verso."
      }
    ],
    "useCases": [
      {
        "title": "Prototiparea broșurii",
        "description": "Vizualizați în prealabil secvența de pliere a pliurilor triple și a broșurilor pentru a preveni paginile inversate după imprimare.",
        "icon": "book-open"
      },
      {
        "title": "Cusătură de cărți",
        "description": "Generați automat foi de imprimare impuse pentru reviste sau broșuri cu mai multe pagini.",
        "icon": "layers"
      },
      {
        "title": "Ajutoare vizuale pentru imprimerie",
        "description": "Ajutați clienții să vizualizeze modul în care paginile sunt distribuite fizic și împăturite pe foile de imprimare.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Ce este „impunere”?",
        "answer": "Impunerea este un pas fundamental în tipărirea prepress. Deoarece presele comerciale tipăresc pe coli mari, paginile sunt aranjate în afara ordinii, astfel încât, odată tipărite, pliate și legate, paginile apar în ordinea succesivă corectă. Acest instrument calculează automat acel aspect."
      },
      {
        "question": "Previzualizarea 3D îmi modifică conținutul PDF?",
        "answer": "Nu, conținutul PDF original este redat doar ca mapări de textură pe foaia 3D. PDF-ul generat ajustează numai ordinea paginilor și plasarea; calitățile textului și graficului sunt păstrate intacte."
      },
      {
        "question": "Ce se întâmplă dacă numărul de pagini PDF nu este un multiplu de 4 sau 8?",
        "answer": "Optimizatorul adaugă automat pagini goale la sfârșit pentru a satisface cerințele matematice privind numărul de pagini ale aspectului de pliere selectat."
      }
    ]
  },
  "pdf-to-slide": {
    "title": "PDF în diapozitiv",
    "metaDescription": "Convertiți conținutul PDF în diapozitive PowerPoint. Exportați o prezentare PPTX cu text și imagini pentru editare ulterioară.",
    "keywords": [
      "PDF în PPT",
      "reconstrucție de diapozitive",
      "extragerea graficului",
      "prezentare academică",
      "Compilatorul PPTX"
    ],
    "description": "<p>AI PDF-to-Slide Reconstructor dă o nouă viață documentelor PDF statice, transformându-le în diapozitive PowerPoint (PPTX) moderne, foarte personalizabile.</p>\n      <p>Instrumentul folosește un extractor avansat de schiță de aspect care analizează automat nivelurile titlurilor documentului, liniile de paragraf și greutatea fonturilor pentru a stabili un cadru logic de diapozitive. De asemenea, izolează diagramele vectoriale și tabelele de înaltă rezoluție, eliminând artefactele de fundal pentru a le încorpora în mod curat ca elemente editabile independente.</p>\n      <p>Toate ieșirile PPTX sunt construite folosind elemente Office Open XML standard, ceea ce înseamnă că tot textul rămâne complet editabil și vectorii nu își pierd rezoluția. Partea frontală prezintă o animație fluidă de tranziție a cardului „campul stelelor” care vizualizează reconstrucția într-o manieră captivantă.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF academic/de afaceri",
        "description": "Încărcați un document PDF care conține secțiuni structurate și diagrame."
      },
      {
        "step": 2,
        "title": "Analizați contururile diapozitivelor",
        "description": "Inspectați structura diapozitivelor extrase, ajustați titlurile sau ștergeți blocurile de carduri care nu sunt necesare."
      },
      {
        "step": 3,
        "title": "Reconstruiți în PPTX",
        "description": "Porniți motorul de compilare pentru a primi un fișier de prezentare standard, editabil."
      }
    ],
    "useCases": [
      {
        "title": "Prezentarea lucrării de cercetare",
        "description": "Convertiți PDF-uri de jurnal academic, structuri de text și diagrame vectoriale în pachete de diapozitive pregătite pentru discuții.",
        "icon": "graduation-cap"
      },
      {
        "title": "Rezumatul raportului de afaceri",
        "description": "Distilați instantaneu rapoarte corporative anuale masive în schițe de prezentare curate, cu marcatori.",
        "icon": "presentation"
      },
      {
        "title": "Demo-uri cu mai multe dispozitive",
        "description": "Evitați copierea manuală a capturilor de ecran. Obțineți un cadru de aspect curat, complet editabil în câteva secunde.",
        "icon": "laptop"
      }
    ],
    "faq": [
      {
        "question": "Sunt diapozitivele editabile în Microsoft Office?",
        "answer": "Da. Fișierele sunt generate nativ în memorie conform specificației oficiale Office Open XML (OOXML). Textele, tabelele și substituenții sunt complet interactive în PowerPoint, Keynote și WPS."
      },
      {
        "question": "Cum sunt extrase diagramele?",
        "answer": "Motorul scanează căi vectoriale și straturi raster în PDF, detectează zonele delimitate care reprezintă grafice și le decupează ca noduri SVG independente sau imagini cu DPI ridicat."
      },
      {
        "question": "Funcționează acest lucru pe documentele scanate?",
        "answer": "Pentru PDF-urile scanate fără straturi de text reale, vă recomandăm să rulați mai întâi instrumentul nostru OCR înainte de a trece fișierul către Slide Reconstructor."
      }
    ]
  },
  "form-logic-designer": {
    "title": "Form Logic Designer",
    "metaDescription": "Creați reguli de formular PDF cu un designer vizual. Conectați câmpurile și adăugați logica interactivă de calcul și validare.",
    "keywords": [
      "Logica formularului PDF",
      "Injecție AcroJS",
      "flux de nod",
      "PDF interactiv",
      "dependențe de câmp"
    ],
    "description": "<p>Interactive Form Logic Designer este un instrument de pionierat care umple un gol masiv în capabilitățile PDF: crearea de câmpuri active, receptive în loc de formulare plate și moarte.</p>\n      <p>Prin pânza noastră vizuală care prezintă „noduri sticlomorfe strălucitoare” (construite pe React Flow), câmpurile de formular sunt reprezentate ca module conectate. Puteți trage link-uri pentru a defini relații: de exemplu, când o casetă de selectare este bifată ➜ activați o introducere de text ➜ calculați automat valorile și actualizați un câmp total.</p>\n      <p>Odată proiectat, motorul AcroJS compilează logica în JavaScript oficial Acrobat și o injectează în dicționarele „/AA” (Acțiuni suplimentare) ale AcroForm. Comportamentele interactive sunt apoi executate nativ în orice cititor PDF standard.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF interactiv",
        "description": "Furnizați un fișier PDF care are deja câmpuri de formular active (AcroForm)."
      },
      {
        "step": 2,
        "title": "Hartă logica în canvas",
        "description": "Conectați câmpurile ca noduri. Conectați evenimentele de ieșire (modificare, estompare) cu acțiunile vizate (afișare, ascunde, calculare, dezactivare)."
      },
      {
        "step": 3,
        "title": "Compilați și descărcați",
        "description": "Injectați logica JavaScript compilată în dicționarul PDF și salvați documentul inteligent final."
      }
    ],
    "useCases": [
      {
        "title": "Contracte inteligente de vânzare",
        "description": "Afișați sau ascundeți câmpurile de introducere suplimentare în mod dinamic pe baza termenilor selectați de client.",
        "icon": "file-signature"
      },
      {
        "title": "Formulare automate de cheltuieli",
        "description": "Însumați mai multe linii de cheltuieli și calculați impozitele dinamic, fără calcul manual.",
        "icon": "calculator"
      },
      {
        "title": "Chestionare interactive",
        "description": "Sari peste întrebările irelevante bazate pe răspunsurile anterioare, oferind o experiență mai curată de umplere mobilă.",
        "icon": "form-input"
      }
    ],
    "faq": [
      {
        "question": "Am nevoie de un PDF cu câmpuri preexistente?",
        "answer": "Da. Acest instrument este conceput pentru a lega reguli logice la câmpurile existente. Dacă PDF-ul dvs. nu are câmpuri interactive, utilizați instrumentul Creator de formulare pentru a adăuga mai întâi intrări și casete de selectare."
      },
      {
        "question": "Această logică va rula pe orice cititor PDF?",
        "answer": "Funcționează pe toate cititoarele PDF care respectă standardele Adobe PDF și acceptă Acrobat JavaScript (cum ar fi Adobe Acrobat Reader, Foxit Reader și principalele browsere web). Cititoarele mobile minimaliste pot accepta numai acțiuni de bază."
      },
      {
        "question": "Acest lucru afectează imprimarea pe hârtie?",
        "answer": "Deloc. Scripturile injectate rulează doar pe ecran în timpul completării formularului. La imprimare, starea curentă a câmpurilor este tipărită static, fără nicio vizualizare a nodului."
      }
    ]
  },
  "eink-optimizer": {
    "title": "e-Ink Reader Optimizer",
    "metaDescription": "Optimizați paginile PDF pentru cititoarele de cerneală electronică. Curățați fundalurile, măriți contrastul textului și ajustați documentele pentru o citire mai ușoară.",
    "keywords": [
      "eink optimizator",
      "binarizare",
      "text aldine",
      "lectură prietenoasă pentru ochi",
      "prag otsu"
    ],
    "description": "<p>E-Ink Reader Optimizer este un instrument indispensabil creat la comandă pentru pasionații de cititoare electronice care folosesc Kindle, Onyx Boox, Kobo sau alte dispozitive de hârtie electronică.</p>\n      <p>Multe cărți electronice PDF scanate suferă de litere slabe, fundaluri gri noroioase, zgomot sau umbre de scanare atunci când sunt vizualizate pe ecranele e-Ink. Acest instrument analizează histogramele cu valori de gri și aplică pragul de binarizare al lui Otsu pentru a separa textul de fundal, transformând fundalul gri în alb curat.</p>\n      <p>În plus, integrează dilatarea morfologică la caractere îndrăznețe și îngroșate, subțiri, estompate, oferind o tipografie clară și cu contrast ridicat. Glisorul de contrast amortizat prin inerție vă permite să reglați fin contrastul asemănător hârtiei în timp real.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF scanat",
        "description": "Încărcați cărți electronice sau documente scanate cu text slab sau fundal gri."
      },
      {
        "step": 2,
        "title": "Reglați glisorul de contrast",
        "description": "Trageți glisorul amortizat pentru a echilibra eliminarea fundalului și caracterele aldine în timp real."
      },
      {
        "step": 3,
        "title": "Optimizați și descărcați",
        "description": "Procesați întregul PDF pentru a genera un document cu contrast ridicat, prietenos pentru ochi, adaptat pentru e-Ink."
      }
    ],
    "useCases": [
      {
        "title": "Restaurarea manuscriselor antice",
        "description": "Îngroșați textul decolorat în scanările de cărți istorice sau manuscrise scrise de mână pentru a le face lizibile.",
        "icon": "scroll"
      },
      {
        "title": "Curățarea foii de examen",
        "description": "Înălbiți umbrele de fundal de la examenele fotocopiate sau fotografiate, returnând text negru curat pe hârtie albă.",
        "icon": "file-text"
      },
      {
        "title": "Croitorie dispozitive E-paper",
        "description": "Convertiți PDF-urile colorate în tonuri de gri optimizate, prevenind artefactele dezordonate, dithering pe ecranele monocrome.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Cum funcționează „aldinul caracterelor”?",
        "answer": "În procesarea imaginilor, aceasta se numește dilatare. Folosește o matrice de structurare pentru a extinde marginile caracterelor cu un pixel, îngroșând fizic liniile slabe pentru a le face lizibile."
      },
      {
        "question": "Acest proces va mări dimensiunea fișierului?",
        "answer": "Dimpotrivă. Prin binarizarea imaginilor color/în tonuri de gri complexe în aspecte simple alb-negru, compresia standard (cum ar fi CCITT Group 4) poate micșora semnificativ dimensiunea fișierului PDF."
      },
      {
        "question": "Acesta acceptă fișierele PDF cu text nativ?",
        "answer": "Da. PDF-urile vectoriale native sunt rasterizate la rezoluții înalte în fundal, optimizate și compilate înapoi, asigurând o citire unificată cu contrast ridicat."
      }
    ]
  },
  "cert-cryptor": {
    "title": "Certificat Criptare și semnare",
    "metaDescription": "Criptați și semnați digital documentele PDF folosind certificate. Lucrați cu fișierele de certificat local în browser.",
    "keywords": [
      "criptare certificat",
      "semnătură de sigiliu de ceară",
      "semnătură digitală",
      "criptă asimetrică",
      "semnătură PKCS7"
    ],
    "description": "<p>3D Wax-Seal & Certificate Cryptor oferă securitate de nivel militar și estetică premium de calitate fizică pentru fișierele, diplomele sau acordurile corporative sensibile.</p>\n      <p>Din punct de vedere tehnic, oferă criptare asimetrică cu cheie publică: importați certificatul de cheie publică al unui destinatar (.cer/.crt) pentru a bloca fluxul PDF; numai deținătorul cheii private corespunzătoare (.pfx) o poate decripta. De asemenea, generează semnături digitale standard PKCS#7 pentru a asigura integritatea documentelor inviolabile.</p>\n      <p>În mod vizual, prezentăm o ștampilă fizică 3D aurie sau roșie cu sigiliu de ceară. Când semnați, o ștampilă redată frumos coboară cu un sunet mecanic satisfăcător, lăsând pe pagină un sigiliu de ceară 3D cu variații realiste de înălțime și scurgeri de ceară, înconjurat de urme criptografice strălucitoare.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF și Cert",
        "description": "Adăugați PDF-ul și importați certificatul de semnare (.pfx) sau certificatul public al destinatarului (.cer)."
      },
      {
        "step": 2,
        "title": "Puneți ștampila 3D",
        "description": "Trageți și localizați sigiliul pe previzualizarea documentului și alegeți un stil de ceară (de exemplu, auriu, purpuriu)."
      },
      {
        "step": 3,
        "title": "Apăsați și semnați",
        "description": "Faceți clic pe executare pentru a urmări ceremonia de amprentare a sigiliului de ceară 3D, generând o semnătură digitală de calitate fizică."
      },
      {
        "step": 4,
        "title": "Descărcați PDF securizat",
        "description": "Salvați documentul de ieșire, acum blocat criptografic și ștampilat."
      }
    ],
    "useCases": [
      {
        "title": "Diplome și certificate",
        "description": "Atașați insigne de sigiliu de ceară 3D de mare valoare pe diplomele și premiile digitale, susținute de semnături digitale autentice.",
        "icon": "award"
      },
      {
        "title": "Acorduri confidențiale",
        "description": "Blocați contractele sensibile folosind certificatul public al clientului, astfel încât numai cardul fizic securizat să îl poată debloca.",
        "icon": "shield-alert"
      },
      {
        "title": "Comunicate oficiale de presă",
        "description": "Semnează digital anunțurile publice pentru a preveni editările rău intenționate sau falsificarea textului.",
        "icon": "stamp"
      }
    ],
    "faq": [
      {
        "question": "Sigiliul de ceară este doar o imagine sau o semnătură reală?",
        "answer": "Ambele. Sistemul redă o amprentă în ceară 3D incredibil de realistă cu adâncime mapată normală (stratul vizual) și codifică o semnătură criptografică PKCS#7 autentică, inviolabilă, în interiorul PDF-ului (stratul de date)."
      },
      {
        "question": "Ce este „Criptarea pe bază de certificat”?",
        "answer": "Este o tehnică de criptare fără parolă. Criptați fișierul folosind cheia publică a destinatarului. Cititorul caută automat certificatul privat local pentru a decripta fișierul fără probleme, asigurând o securitate robustă."
      },
      {
        "question": "Pot personaliza designul ștampilei?",
        "answer": "Da. Oferim mai multe modele, cum ar fi filigranul AwsomePDF sau o creasta regală, și puteți ajusta raza de topire a cerii și adâncimea de indentare a hărții normale în panou."
      }
    ]
  },
  "passport-id-composer": {
    "title": "Compozitor de identificare cu două fețe",
    "metaDescription": "Combinați fața și spatele unei cărți de identitate sau a unui pașaport pe o singură pagină PDF A4. Aranjați scanările și adăugați un filigran opțional.",
    "keywords": [
      "Compozitor cărți de identitate",
      "impunerea pașaportului",
      "Copie A4 față-verso",
      "imprimare carte de identitate",
      "filigran anti-contrafacere"
    ],
    "description": "<p>Compozitorul față-verso Passport & ID este un utilitar de productivitate incredibil de util pentru operațiuni standard de afaceri și personale.</p>\n      <p>Atunci când solicităm conturi bancare, acceptăm sau semnăm acorduri, avem nevoie frecvent de copii de pe ambele fețe ale cărților de identitate. Acest instrument acceptă imagini față/spate sau pagini PDF și le aranjează precis pe o singură pagină A4, respectând rezoluțiile standard naționale de aspect.</p>\n      <p>În plus, puteți personaliza filigranele translucide anti-contrafacere care se suprapun (de exemplu, „NUMAI PENTRU INCORPARE”) pentru a preveni reutilizarea neautorizată a documentelor. Dispune chiar și de un efect vizual de ușă a scanerului de scanare cu laser cu strălucire 3D pentru a oferi feedback premium.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișiere ID",
        "description": "Încărcați fotografii/scanări față și spate ale actului de identitate sau ale pașaportului (până la 2 fișiere)."
      },
      {
        "step": 2,
        "title": "Configurați filigran securizat",
        "description": "Introduceți o suprapunere de text personalizată pentru a restricționa replicarea neautorizată a documentelor."
      },
      {
        "step": 3,
        "title": "Compune și descarcă",
        "description": "Faceți clic pe executare pentru a genera un PDF A4 de o singură pagină gata de imprimare."
      }
    ],
    "useCases": [
      {
        "title": "Trimitere de participare HR",
        "description": "Aliniați rapid copiile ID-ului angajaților și aplicați filigrane de protecție.",
        "icon": "user"
      },
      {
        "title": "Serviciu guvernamental și bancar",
        "description": "Pregătiți printuri standardizate de identificare care îndeplinesc cerințele de arhivă fizică.",
        "icon": "landmark"
      },
      {
        "title": "Backup de călătorie",
        "description": "Aranjați paginile pașapoartelor și detaliile vizei pe o hârtie unificată A4.",
        "icon": "plane"
      }
    ],
    "faq": [
      {
        "question": "Filigranele vor bloca detaliile textului de identitate?",
        "answer": "Nu. Filigranul este redat cu o opacitate atent reglată de 15% pentru a bloca falsificarea fără a sacrifica lizibilitatea câmpurilor de text sau fotografie."
      },
      {
        "question": "Este corectă dimensiunea cardului compus?",
        "answer": "Da. Redă cartea de identitate la dimensiunea fizică standard de 85,6 mm × 54 mm scalată perfect pe pagina A4."
      },
      {
        "question": "Acceptă permisele de conducere?",
        "answer": "Da, funcționează minunat pentru orice scanare de identitate pe bază de card."
      }
    ]
  },
  "annotation-exporter": {
    "title": "Exportați adnotări",
    "metaDescription": "Exportați comentarii PDF, note, evidențieri și subliniere în Markdown sau JSON. Organizați adnotări pentru studiu, revizuire și cercetare.",
    "keywords": [
      "exportați adnotări",
      "extrage pdf evidențieri",
      "note pentru cititorul PDF",
      "caiete de contur markdown",
      "ajutor pentru rezumatul studiului"
    ],
    "description": "<p>Exportatorul inteligent de adnotări este un spațiu de lucru puternic care deblochează valoarea totală a adnotărilor PDF.</p>\n      <p>În timp ce desfășurăm recenzii de literatură sau citim cărți electronice extinse, folosim intens elementele evidențiate și note lipicioase. Acest instrument deserializează dicționarul <code>/Annots</code> PDF de nivel scăzut și extrage toate evidențierile, notele, subliniarile și marcatoarele de cerneală desenate manual.</p>\n      <p>Aliniază automat comentariile cu anteturile de schiță ale acestora, generând un caiet Markdown sau JSON structurat cu ancore de referință la pagină. Urmăriți-vă cele mai importante imagini plutind frumos în panoul de notebook din sticlă mată.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importați PDF adnotat",
        "description": "Încărcați orice eseu sau carte PDF care conține sublinierea, evidențierea sau comentariile dvs."
      },
      {
        "step": 2,
        "title": "Configurați filtrele și formatul",
        "description": "Selectați tipurile de adnotări pe care doriți să le extrageți și alegeți Markdown sau JSON."
      },
      {
        "step": 3,
        "title": "Extrage caiet",
        "description": "Faceți clic pe executare pentru a analiza fluxul de comentarii și a asambla rezumatul schiței."
      }
    ],
    "useCases": [
      {
        "title": "Sinteza literaturii științifice",
        "description": "Extrageți note de citire din mai multe lucrări în șabloane Markdown pentru a compune recenzii iluminate instantaneu.",
        "icon": "graduation-cap"
      },
      {
        "title": "Alcătuirea jurnalului de studiu",
        "description": "Colectați perspective frumoase și observații personale din manuale în bazele de date Obsidian.",
        "icon": "book"
      },
      {
        "title": "Documentarea auditului colaborativ",
        "description": "Adunați corecții de revizuire de la diferiți membri ai echipei și stabiliți liste de sarcini acționabile.",
        "icon": "users"
      }
    ],
    "faq": [
      {
        "question": "Poate extrage liniile de cerneală desenate manual de tabletă?",
        "answer": "Da. Atâta timp cât semnele desenate manual sunt stocate ca adnotări standard PDF Ink, instrumentul își poate izola și structura perfect pozițiile paginii."
      },
      {
        "question": "De ce unele extrase evidențiate sunt goale?",
        "answer": "Dacă PDF-ul este o imagine scanată care nu poate fi căutată, fără textul de bază, evidențiază doar coordonatele stocării. Mai întâi rulați OCR pe PDF, apoi extrageți adnotări."
      },
      {
        "question": "Linkurile Markdown trec înapoi la PDF?",
        "answer": "Fișierul exportat listează numere precise de pagină și titluri de contur originale pentru a face referințele încrucișate fără probleme."
      }
    ]
  },
  "batch-watermark-remover": {
    "title": "Batch Eliminare filigrane",
    "metaDescription": "Eliminați textul și filigranele de imagine care se potrivesc din PDF-uri. Examinați rezultatul pentru a verifica dacă conținutul documentului este păstrat.",
    "keywords": [
      "eliminați filigranul",
      "gumă de șters pdf filigran",
      "curățarea fluxului de conținut",
      "curățare filigran în lot",
      "eliminați filigranul nefinalizat"
    ],
    "description": "<p>Bach Watermark Remover este un dezinfectant PDF de ultimă generație care curăță fizic documentele.</p>\n      <p>Dispozitivele generice de îndepărtare a filigranelor de obicei doar suprapun blocuri albe sau distorsionează spațierea documentelor. Acest instrument utilizează o tehnică robustă de <strong>purgerea fluxului de conținut</strong>.</p>\n      <p>Parsează operatorii de redare de nivel scăzut ai fiecărei pagini, identifică comenzi specifice șirurilor de filigran (de exemplu, „Confidențial”, „CORȚĂ”) sau obiecte de imagine de fundal și le șterge sau le suprascrie fizic. Filigranele dispar complet, păstrând formatarea originală și calitatea vectorului.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați fișierul cu filigran",
        "description": "Furnizați documentul PDF care prezintă sigle comerciale sau etichete de securitate."
      },
      {
        "step": 2,
        "title": "Definiți filigranul țintă",
        "description": "Introduceți șirul exact de șters sau comutați curățirea translucidă a imaginii XObject."
      },
      {
        "step": 3,
        "title": "Rulați purjare fizică",
        "description": "Faceți clic pe executare pentru a curăța operatorii de conținut cu fidelitate ridicată."
      }
    ],
    "useCases": [
      {
        "title": "Arhivarea activelor corporative",
        "description": "Eliminați filigranele „Confidențial” sau „Ciornă” expirate pentru distribuția publicului larg.",
        "icon": "archive"
      },
      {
        "title": "Eliminarea dezordinei de fundal",
        "description": "Curățați imaginile de fundal grele care distrag atenția cititorilor de la scanarea textului.",
        "icon": "eye"
      },
      {
        "title": "Reutilizarea documentelor",
        "description": "Curățați vechile elemente de branding din subsolul paginii pentru a aplica cu ușurință noi șabloane corporative.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Filigranele epurate pot fi recuperate?",
        "answer": "Nu. Spre deosebire de măștile vizuale, rescriem fluxul binar al paginii pentru a șterge operatorii, fără a lăsa urme."
      },
      {
        "question": "Acceptă gradienți complexe?",
        "answer": "Dacă filigranul este stocat ca un nod text separat sau ca imagine XObject, instrumentul îl poate izola și șterge fizic."
      },
      {
        "question": "Va modifica textul normal al paginii?",
        "answer": "Nu. Motorul de curățare vizează numai operatorii care se potrivesc cu semnătura filigranului specificată; textul obișnuit rămâne neatins."
      }
    ]
  },
  "smart-data-redactor": localizedRedactionContent('ro', 'smart-data-redactor', "Redactarea datelor sensibile"),
  "bookmarks-auto-generator": {
    "title": "Generare automată a marcajelor",
    "metaDescription": "Generați marcaje PDF din titluri și modele de text. Adăugați un contur navigabil documentelor lungi, manualelor și rapoartelor.",
    "keywords": [
      "generați marcaje",
      "pdf contur constructor",
      "injectați marcaje pdf",
      "catalog dimensiune font",
      "contur constructor de arbori"
    ],
    "description": "<p>Generatorul automat de marcaje oferă o claritate absolută documentelor PDF lungi și nestructurate.</p>\n      <p>Scanarea prin cărți sau broșuri fără navigare în schiță este dureroasă. Acest instrument analizează ierarhiile tipografice (cum ar fi dimensiunile și greutățile fonturilor) împreună cu regulile regex (cum ar fi „Capitolul 1”, „Secțiunea 1.1”) pentru a deduce automat titlurile.</p>\n      <p>Apoi compilează și injectează aceste titluri direct în dicționarul PDF <code>/Outline</code>. Orice vizualizator standard va afișa apoi o bară laterală de navigare cu mai multe niveluri, frumos structurată, susținută de o previzualizare interactivă a arborelui 3D.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Furnizați PDF nestructurat",
        "description": "Încărcați broșuri mari, lucrări academice sau cărți electronice fără bară laterală de catalog."
      },
      {
        "step": 2,
        "title": "Ajustați regulile de titlu",
        "description": "Configurați strategii care specifică praguri minime pentru dimensiunea fontului și regulile de potrivire."
      },
      {
        "step": 3,
        "title": "Construiți și injectați",
        "description": "Faceți clic pe executare pentru a reda nodurile de contur și pentru a scrie fizic marcajele de contur."
      }
    ],
    "useCases": [
      {
        "title": "Organizare manuale tehnice",
        "description": "Compilați automat capitolele pe mai multe niveluri pentru liniile directoare standard, economisind ore de indexare manuală.",
        "icon": "tool"
      },
      {
        "title": "Pregătirea tezei",
        "description": "Injectați semne de carte curate imbricate care corespund standardelor academice exacte de trimitere.",
        "icon": "graduation-cap"
      },
      {
        "title": "Optimizarea navigației pentru cărți electronice",
        "description": "Structurați publicațiile de text scanat în capitole care pot fi citite pentru tablete sau cititoare mobile.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Se poate potrivi cu formatele de capitol personalizate?",
        "answer": "Da. Puteți adăuga modele regex personalizate în panoul barei laterale (de exemplu, „^Part\\s+\\w+`) pentru a viza aspecte unice."
      },
      {
        "question": "Va afecta acest lucru prezentarea vizuală a paginii?",
        "answer": "Nu. Instrumentul adaugă doar un catalog de marcaje structural intern. Textul și elementele vizuale ale paginilor rămân neatinse."
      },
      {
        "question": "Câte niveluri de marcaje sunt acceptate?",
        "answer": "Instrumentul acceptă structuri de marcaje profund imbricate, permițând aspectul capitolelor, secțiunilor și subsecțiunilor."
      }
    ]
  },
  "batch-barcode-injector": {
    "title": "Batch Inject Barcodes",
    "metaDescription": "Adăugați coduri QR sau coduri de bare Cod 128 în paginile PDF în bloc. Ajustați amplasarea pentru urmărirea documentelor, etichete și fluxuri de lucru de imprimare.",
    "keywords": [
      "generează qr pdf",
      "injector de coduri de bare",
      "etichetă de material pdf",
      "poziționare coordonate qr",
      "ștampila coduri de bare"
    ],
    "description": "<p>Injectorul de precizie Batch Barcode face legătura între urmărirea activelor digitale și indexarea documentelor fizice.</p>\n      <p>În depozitare, revizuire a contractelor sau logistică, de multe ori trebuie să ștampilăm coduri de bare unice pe facturi sau pe cardurile dispozitivului. Acest instrument îl face incredibil de ușor.</p>\n      <p>Generează coduri QR foarte lizibile sau coduri de bare Code128 și folosește spațiul nostru de lucru superb de aliniere cu ghidaje laser verzi pentru a le poziționa. Un bip audio de scanare curată se declanșează la plasare, oferind feedback foarte premium.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați documentul",
        "description": "Trageți și plasați PDF-uri cu o singură pagină sau cu mai multe pagini reprezentând acorduri sau liste de expediere."
      },
      {
        "step": 2,
        "title": "Poziționați coordonatele codului de bare",
        "description": "Setați tipul codului, valoarea și trageți caseta de plasare pentru a specifica coordonatele."
      },
      {
        "step": 3,
        "title": "Ștampile și descărcare",
        "description": "Faceți clic pe executare pentru a reda stratul de cod pe indicii paginii vizate."
      }
    ],
    "useCases": [
      {
        "title": "Urmărirea validării contractului",
        "description": "Aplicați un cod QR unic care arată detalii anti-contrafacere pe antetul contractelor.",
        "icon": "file-check"
      },
      {
        "title": "Codificarea listelor de expediere",
        "description": "Plasați coduri de bare Code128 în punctele țintă pentru validarea rapidă a armelor cu scanarea depozitului.",
        "icon": "truck"
      },
      {
        "title": "Cardare de înregistrare a activelor",
        "description": "Adăugați coduri QR de inventar care afișează specificațiile de întreținere pe foile echipamentului fizic.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Codurile de bare generate sunt foarte scanabile?",
        "answer": "Da. Încorporam reprezentări PNG de înaltă rezoluție fără pierderi, care rămân clare chiar și atunci când sunt imprimate la dimensiuni foarte mici."
      },
      {
        "question": "Pot injecta valori unice pe fiecare pagină?",
        "answer": "În prezent, rularea lotului aplică același cod configurat pe toate paginile selectate. Importul Excel cu valori multiple este planificat într-o actualizare viitoare."
      },
      {
        "question": "Ce reprezintă coordonata `pt`?",
        "answer": "`pt` (Punct) este unitatea fizică standard PDF (72 pt = 1 inch). Paginile A4 sunt reprezentate ca 595 × 842 pt."
      }
    ]
  },
  "signature-ink-optimizer": {
    "title": "Extrageți semnătura și ștampila",
    "metaDescription": "Extrageți o semnătură sau ștampilă dintr-o fotografie și eliminați fundalul acesteia. Descărcați un PNG transparent pentru utilizare în documente.",
    "keywords": [
      "extrage semnătura",
      "fundal transparent de semnătură",
      "fotografie ștampilă curată",
      "ascuți semnătura mâinii",
      "Producător de sigilii png"
    ],
    "description": "<p> Optimizatorul de cerneală Chroma pentru semnături și ștampile funcționează ca un purificator profesional de cerneală de înaltă fidelitate.</p>\n      <p>Semnăturile sau sigiliile corporative capturate pe telefoane suferă adesea de nuanță galbenă a hârtiei, umbre neuniforme și încrețirea paginii. Lipirea lor direct pe PDF-uri contractate pare amator.</p>\n      <p>Acest instrument separă canalul alfa în funcție de luminanță și spațiu de culoare. Înălbește complet fundalurile din hârtie, în timp ce accentuează roșul ștampilei (Chroma Ink) și negru scrisul de mână. Rezultatul este o ștampilă PNG premium, transparentă, cu texturi de cerneală autentice.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați o fotografie a sigiliului",
        "description": "Furnizați o fotografie capturată de telefon cu semnătura sau ștampila dvs."
      },
      {
        "step": 2,
        "title": "Reglați glisoarele de curățare",
        "description": "Mutați glisoarele de contrast și luminanță pentru a izola zgomotul de fundal în timp real."
      },
      {
        "step": 3,
        "title": "Descărcați semnătura curată",
        "description": "Exportați ca PNG transparent gata de a fi ștampilat pe acorduri formale de documente."
      }
    ],
    "useCases": [
      {
        "title": "Pregătirea profesională a semnăturii electronice",
        "description": "Convertiți fotografii cu semnătură gri în straturi frumoase și transparente pentru a semna acorduri.",
        "icon": "file-signature"
      },
      {
        "title": "Igienizare sigiliu corporativ",
        "description": "Curățați scanările fizice ale ștampilei prin eliminarea zgomotului din fibrele de hârtie, pregătind sigilii clare și transparente.",
        "icon": "stamp"
      },
      {
        "title": "Extracție de artă în linie trasată",
        "description": "Izolați liniile negre din caietele de schițe pentru a facilita fluxurile de lucru de colorat Photoshop.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "Prin ce diferă extracția Alpha auto-adaptativă de tastarea normală?",
        "answer": "Schimbarea cromatică standard face adesea ca detaliile semnăturii să pară blocate și pixelate. Algoritmul nostru izolează doar zgomotul de fundal alb/galben și netezește marginile de cerneală."
      },
      {
        "question": "Ce formate de imagine sunt acceptate?",
        "answer": "Acceptăm JPG, JPEG și PNG. Pentru cele mai bune rezultate, capturați fotografia dvs. semnătură sub o lumină puternică și uniformă."
      },
      {
        "question": "Detaliul scrisului de mână va fi modificat?",
        "answer": "Nu. Filtrarea pixelilor acționează asupra coordonatelor originale, sporind contrastul, menținând în același timp texturi de contur autentice."
      }
    ]
  },
  "dead-link-debugger": {
    "title": "Remediați legăturile moarte",
    "metaDescription": "Inspectați hyperlinkurile PDF și înlocuiți destinațiile rupte sau învechite. Scanați adnotările de link și salvați documentul actualizat.",
    "keywords": [
      "link mort pdf",
      "editați hyperlinkuri pdf",
      "validare link pdf",
      "link de redirecționare pdf",
      "actualizați adresele URL în pdf"
    ],
    "description": "<p>Dead Link Debugger este un editor structural profund care garantează calitatea interacțiunii cu linkurile în fișierele publicate.</p>\n      <p>Adresele URL sparte (404/500) din manuale, cărți albe sau ghiduri reduc autoritatea de branding. Acest instrument vă permite să gestionați fără probleme baza de date cu hyperlinkuri.</p>\n      <p>Parsează dicționarele de nivel inferior <code>/Link</code> de pe fiecare pagină, le sondează și afișează starea legăturilor într-o grilă interactivă (roșu pentru linkuri nefuncționale, portocaliu pentru redirecționări). Pur și simplu introduceți adresa URL de redirecționare actualizată, iar instrumentul scrie noua țintă direct înapoi în fluxul binar PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Furnizați documentul țintă",
        "description": "Încărcați manualul PDF sau catalogul care conține link-uri pentru depanare."
      },
      {
        "step": 2,
        "title": "Scanați și actualizați",
        "description": "Lăsați depanatorul să extragă toate entitățile URL. Introduceți noi adrese URL de redirecționare pentru articolele stricate."
      },
      {
        "step": 3,
        "title": "Salvați actualizările de redirecționare",
        "description": "Faceți clic pe executare pentru a rescrie acțiunile /URI și a descărca PDF-ul corectat."
      }
    ],
    "useCases": [
      {
        "title": "Remediere rapidă pentru linkuri rupte pentru pliante",
        "description": "Corectați instantaneu adresele URL greșite de pe pliantele publicate, fără a redeschide editorii de design original.",
        "icon": "refresh-cw"
      },
      {
        "title": "Verificarea link-urilor bibliografice",
        "description": "Verificați legăturile cu bibliografia academică din rapoarte, actualizând referințele pentru a menține autoritatea.",
        "icon": "book"
      },
      {
        "title": "Actualizări de rebranding corporative",
        "description": "Actualizați în serie adresele URL vechi în PDF-uri corporative atunci când numele de domenii ale companiei sunt modificate.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "De ce accesibilitatea linkului nu este verificată complet online?",
        "answer": "Browserele web impun politici CORS stricte care blochează verificarea directă a legăturilor cu mai multe origini. Instrumentul nostru listează linkurile în mod clar și vă permite să le remediați manual."
      },
      {
        "question": "Va modifica acest lucru reprezentarea vizuală a textului pe pagină?",
        "answer": "Nu. Modifică doar acțiunea de navigare subiacentă `/URI`. Textul linkului vizual rămâne neschimbat."
      },
      {
        "question": "Acceptă modificarea marcajelor de pagini interne?",
        "answer": "Acest instrument gestionează hyperlinkurile externe `/URI`. Pentru navigarea în aspect intern, utilizați instrumentul nostru interactiv TOC."
      }
    ]
  },
  "interactive-toc-generator": {
    "title": "Generați TOC interactiv",
    "metaDescription": "Adăugați un cuprins pe care se poate face clic în PDF-ul dvs. Creați legături la capitole și reveniți la navigare pentru o navigare mai ușoară a documentelor.",
    "keywords": [
      "generează cuprins",
      "toc interactiv pdf",
      "legătură de ancorare bidirecțională",
      "generator de pagini de index pdf",
      "acțiune de acces la pagină"
    ],
    "description": "<p>Interactive TOC Builder introduce o experiență de navigare revoluționară în fișierele PDF extinse.</p>\n      <p>Răsfoirea a sute de pagini în documente nestructurate pentru a localiza capitolele țintă este frustrantă. Acest instrument introduce <strong>compilarea TOC bidirecțională</strong>.</p>\n      <p>Scanează anteturile și generează o pagină premium de Cuprins inspirată de origami, inserată imediat după copertă. Pe lângă crearea de link-uri /GoTo pe care se poate face clic pentru fiecare rând de index, acesta injectează o ancoră mică și elegantă „TOC ↩” în colțul fiecărei pagini de capitol țintă. Cititorii pot sări înainte și înapoi instantaneu, bucurându-se de navigarea web.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Furnizați documentul PDF",
        "description": "Încărcați un raport, o carte electronică sau o propunere care necesită un catalog interactiv."
      },
      {
        "step": 2,
        "title": "Setați titlul și indexul TOC",
        "description": "Personalizați titlul principal și alegeți indexul paginii pentru a insera pagina TOC."
      },
      {
        "step": 3,
        "title": "Țesește ancore și salvează",
        "description": "Faceți clic pe executare pentru a compila paginile și pentru a scrie navigarea cu dublă legătură."
      }
    ],
    "useCases": [
      {
        "title": "Lustruirea raportului corporativ anual",
        "description": "Injectați o pagină index frumoasă după foaia de copertă pentru a permite acționarilor să sară între diagramele financiare.",
        "icon": "file-bar"
      },
      {
        "title": "Indexarea tezei",
        "description": "Compilare rapidă a indecșilor standard aliniați cu regulile de formatare ale universității.",
        "icon": "bookmark"
      },
      {
        "title": "Navigare manuală de operare",
        "description": "Ajutați cititorii de manuale să treacă rapid de la foile de depanare înapoi la cuprinsul principal.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Cum funcționează ancorele bidirecționale?",
        "answer": "Creăm adnotări standard Link pe pagina TOC care vizează paginile respective; apoi încorporam un link înapoi la pagina TOC pe toate foile de capitol țintă."
      },
      {
        "question": "Inserarea paginii TOC va rupe numerele de pagină existente?",
        "answer": "Nu. Compilatorul ține cont de offset-ul paginii TOC nou introduse, asigurându-se că toate destinațiile țintă sunt aliniate."
      },
      {
        "question": "Pagina TOC este validă atunci când este tipărită fizic?",
        "answer": "Da. TOC generat listează numerele de pagini fizice curate pentru a ghida cititorii de hârtie, activând în același timp linkurile pe care se poate face clic pe ecran."
      }
    ]
  },
  "global-invoice-parser": {
    "title": "Convertitorul sumei facturii PDF",
    "metaDescription": "Extrageți sumele facturilor din PDF-uri, convertiți totalurile între monede și adăugați un rezumat de calcul în document.",
    "keywords": [
      "traduce factura",
      "convertor de monedă pe factură",
      "calculator curs de schimb pdf",
      "ștampila moneda locală",
      "instrument global de factură"
    ],
    "description": "<p>Global Invoice Translator oferă o claritate maximă pentru echipele financiare internaționale și pentru cumpărătorii globali.</p>\n      <p>Gestionarea facturilor în mai multe monede ($ , € , ¥) implică adesea o aritmetică manuală plictisitoare. Acest instrument permite <strong>traducerea in loc a etichetelor și conversia cursurilor de schimb în timp real</strong>.</p>\n      <p>Scanează documentul pentru prețuri totale, efectuează calcule pe baza valorilor de referință valutare și ștampilă fizic pe marginea paginii un „registru al cursului de schimb” elegant din sticlă mată, semi-transparentă. Se redă cu un efect vizual numeric superb de la slot-machine, aducând control absolut asupra facturării globale.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați factura PDF",
        "description": "Importați orice factură facturată în valută străină (de exemplu, USD, EUR, JPY)."
      },
      {
        "step": 2,
        "title": "Selectați moneda locală",
        "description": "Alegeți moneda locală (de exemplu, CNY) și specificați un curs de schimb personalizat sau în timp real."
      },
      {
        "step": 3,
        "title": "Aplicați ștampila registrului",
        "description": "Faceți clic pe executare pentru a suprapune minunatul registru al cursului de schimb gata pentru contabilitate."
      }
    ],
    "useCases": [
      {
        "title": "Rambursare călătorie de afaceri în străinătate",
        "description": "Convertiți facturile de călătorie în moneda locală și detaliile de conversie a ștampilelor, ușurând fluxurile de lucru contabile.",
        "icon": "plane"
      },
      {
        "title": "Audit de cumpărături transfrontaliere",
        "description": "Traduceți coloanele de factură și izolați costul real al mărfurilor de comerț electronic.",
        "icon": "credit-card"
      },
      {
        "title": "Contabilitatea afacerilor internaționale",
        "description": "Ștampilați registre de conversie consecvente pe facturile corporative pentru a eficientiza auditurile de sfârșit de an.",
        "icon": "folder-open"
      }
    ],
    "faq": [
      {
        "question": "Cum detectează sumele facturilor?",
        "answer": "Scanează fluxurile de caractere pentru simboluri valutare și analizează titluri semantice precum „Total” sau „Durat” pentru a localiza suma finală a facturii."
      },
      {
        "question": "Cursurile de schimb sunt preluate în timp real?",
        "answer": "Da. În mod implicit, preia ratele de bază din API-urile financiare standard. De asemenea, puteți specifica tarife personalizate pentru auditurile interne."
      },
      {
        "question": "Registrul ștampilat va acoperi detalii importante ale facturii?",
        "answer": "Motorul scanează marginea paginii pentru a găsi poziționarea optimă. Registrul este, de asemenea, semi-transparent, aliniindu-se elegant cu aspectul dvs."
      }
    ]
  },
  "pdf-deskew-aligner": {
    "title": "Declinare scanare automată",
    "metaDescription": "Detectați local liniile de cerneală înclinate și potriviți conținutul corectat în pagina originală.",
    "keywords": [
      "pdf deskew",
      "alinierea paginii scanate",
      "rotire automată a paginii pdf",
      "îndreptați hârtia scanată",
      "instrument de aliniere a documentelor"
    ],
    "description": "<p>Detectați local linii de cerneală înclinate și potriviți conținutul corectat în pagina originală.</p>\n      <p>Paginile goale, scanările incerte și paginile cu adnotări rămân neschimbate.</p>\n      <p>Rezoluțiile mai mari durează mai mult. Paginile foarte mari folosesc o rezoluție de analiză mai mică.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Furnizați PDF înclinat",
        "description": "Încărcați orice foaie PDF care conține documente scanate rotite sau prost aliniate."
      },
      {
        "step": 2,
        "title": "Scanați setările de aliniere",
        "description": "Rezoluție analiză · Unghi maxim de corecție"
      },
      {
        "step": 3,
        "title": "Analizați și îndreptați",
        "description": "Descărcare · PDF aliniat"
      }
    ],
    "useCases": [
      {
        "title": "Arhivare chitanțe și contract",
        "description": "Îndreptați scanările rapide ale contractelor mobile înainte de a le salva ca arhive digitale formale PDF.",
        "icon": "file-text"
      },
      {
        "title": "Digitalizarea cărții academice",
        "description": "Dezinfectați scanările de cărți cu microfilm în cazul în care liniile de text ies din marginile orizontale.",
        "icon": "book"
      },
      {
        "title": "Notarea temelor elevilor",
        "description": "Instantanee corecte ale temelor făcute de telefoanele elevilor, relaxând ochii profesorilor care notează.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Cum este detectată deformarea documentului?",
        "answer": "Detectați local liniile de cerneală înclinate și potriviți conținutul corectat în pagina originală."
      },
      {
        "question": "Acest proces va tăia marginile paginii?",
        "answer": "Detectați local liniile de cerneală înclinate și potriviți conținutul corectat în pagina originală."
      },
      {
        "question": "Suportă documente completate cu diagrame?",
        "answer": "Paginile goale, scanările incerte și paginile cu adnotări rămân neschimbate."
      }
    ]
  },
  "pdf-two-column-reflower": {
    "title": "Redistribuire hârtie pe două coloane",
    "metaDescription": "Redistribuiți documentele PDF cu două coloane într-o singură coloană pentru o citire mai ușoară pe mobil. Ajustați documentele academice pentru ecrane mai mici.",
    "keywords": [
      "pdf cu două coloane în simplu",
      "reflow lucrare academică",
      "citește lucrări pe smartphone",
      "pdf reader reflow",
      "documente pentru mobil"
    ],
    "description": "<p>Reînflorirea academică pe două coloane rezolvă cel mai important punct dificil al cercetării digitale: citirea lucrărilor pe ecranele mobile standard.</p>\n      <p>Aspectele cu două coloane (utilizate de IEEE, ACM, Nature și rapoartele majore) sunt concepute pentru hârtie A4. Navigarea acestora pe ecranele telefonului sau pe dispozitivele Kindle necesită mărirea constantă, tragerea la dreapta, derularea în jos și derularea înapoi în sus. Încalcă complet înțelegerea lecturii.</p>\n      <p>Procesorul nostru implementează o <strong>redistribuire inteligentă a paragrafelor și o scanare a barierei de partiție verticală</strong>. Analizează coordonatele caracterelor pentru a mapa jgheaburile cu două coloane, împarte aspectul și țese segmentele pe verticală (în primul rând coloana din stânga, apoi din dreapta). Graficele, formulele și titlurile sunt rearanjate perfect într-un PDF cu defilare verticală fluid, cu o singură coloană.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați PDF cu două coloane",
        "description": "Furnizați raportul jurnalului IEEE/ACM sau foaia PDF cu mai multe coloane."
      },
      {
        "step": 2,
        "title": "Inspectați jgheabul despărțitorului",
        "description": "Verificați ghidajele roșii ale secțiunii partiției verticale. Reglați marginile pentru a preveni suprapunerea elementelor."
      },
      {
        "step": 3,
        "title": "Redistribuiți și salvați",
        "description": "Faceți clic pe executare pentru a compila paginile în machete fluide și descărcați instantaneu."
      }
    ],
    "useCases": [
      {
        "title": "Import de cărți e-Reader",
        "description": "Convertiți eseuri dense cu două coloane în documente confortabile cu o singură coloană, care se potrivesc cu ecranele Kindle și Onyx.",
        "icon": "tablet"
      },
      {
        "title": "Citirea telefonului metroului",
        "description": "Citiți confortabil literatura de cercetare cu gesturi de glisare verticală cu o singură mână în timpul tranzitului.",
        "icon": "smartphone"
      },
      {
        "title": "Formatarea jurnalului de arhivă",
        "description": "Modernizați ziarele vechi cu coloane înguste în formate web lizibile, cu o singură coloană.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "Cum sunt gestionate diagramele și ecuațiile generale?",
        "answer": "Motorul nostru aplică „detecția elementului span”. Când o ecuație sau o diagramă depășește lățimea normală a coloanei, este izolată ca element cu lățime completă, menținând proporțiile originale fără tăiere."
      },
      {
        "question": "Va modifica acest lucru rezoluția textului vectorial?",
        "answer": "Deloc. Rescriem matrice de transformare a obiectelor de text PDF la nivel de arbore de obiecte în loc de rasterizare, ceea ce înseamnă că textul rămâne 100% vector și complet selectabil."
      },
      {
        "question": "Funcționează acest lucru pe documente cu imagini scanate?",
        "answer": "Pentru fișierele PDF bazate pe imagini plate, vă recomandăm să rulați instrumentul OCR înainte de a executa procesul de redistribuire."
      }
    ]
  },
  "pdf-page-resizer-uniform": {
    "title": "Dimensiune uniformă a paginii PDF",
    "metaDescription": "Redimensionați paginile PDF mixte la o dimensiune uniformă. Normalizați paginile A4, A3 și Letter cu scalare proporțională și margini centrate.",
    "keywords": [
      "dimensiune uniformă a paginii",
      "redimensionați paginile pdf",
      "îmbina diverse pdf",
      "mediabox se normalizează",
      "scară de pagină lot"
    ],
    "description": "<p>Multi-Format PDF Resizer este standardizatorul suprem pentru documentele corporative aglomerate, nepotrivite.</p>\n      <p>Combinarea facturilor, a contractelor și a diagramelor suplimentare are ca rezultat adesea un PDF care conține pagini mari de registru A3, acorduri standard A4 și plicuri de dimensiunea Scrisoare. Răsfoirea acestora distrage foarte mult atenția, iar trimiterea lor către imprimante fizice de birou provoacă adesea erori de blocaj din cauza nepotrivirii dimensiunilor.</p>\n      <p>Acest instrument rescrie grilele de nivel inferior <code>/MediaBox</code> și <code>/CropBox</code> pe fiecare pagină. Mapează lățimile și înălțimile existente, scalează paginile originale proporțional pentru a se potrivi cu setările țintă (de exemplu, A4 standard) și introduce margini elegante și consistente din jur, făcând întregul fișier să arate incredibil de lustruit.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Furnizați PDF cu dimensiuni mixte",
        "description": "Încărcați un document PDF îmbinat care conține dimensiuni de pagină nepotrivite, dezordonate."
      },
      {
        "step": 2,
        "title": "Alegeți presetarea țintă",
        "description": "Selectați dimensiunea uniformă țintă (de exemplu, A4, Letter, A3) și comutați între modurile de scară."
      },
      {
        "step": 3,
        "title": "Aliniați și descărcați",
        "description": "Faceți clic pe executare pentru a declanșa alinierea foii 3D, descarcând un PDF frumos standardizat."
      }
    ],
    "useCases": [
      {
        "title": "Propuneri RFP corporative",
        "description": "Standardizați certificatele de calificare scanate și foile de licitație A4 înainte de imprimarea fizică.",
        "icon": "file-text"
      },
      {
        "title": "Integrarea graficului financiar",
        "description": "Scalați fluxurile de numerar financiare A3 largi în pagini A4 ordonate, păstrând standardele de imprimare.",
        "icon": "layout"
      },
      {
        "title": "Standardizare marjă de carte",
        "description": "Forțați paginile de carte scanate ușor variate într-o dimensiune absolut uniformă pentru o citire confortabilă.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Acest lucru îmi va deforma conținutul?",
        "answer": "Niciodată. Acceptăm atât „Conține” (scalare proporțională cu bare albe) cât și „Acoperire” (decupare centrată). Modul implicit Conține păstrează raporturile de aspect, prevenind distorsiunile."
      },
      {
        "question": "Formularele și adnotările existente vor rămâne pe care se poate face clic?",
        "answer": "Da. Algoritmul mapează factorii de scalare la matricele de coordonate Adnotare, casetele de legături de scalare, limitele semnelor și intrările pentru a se alinia perfect după redimensionare."
      },
      {
        "question": "Există o limită la câte pagini pot redimensiona?",
        "answer": "Nu. Deoarece toate operațiunile rulează local în mediul de testare client folosind JavaScript nativ, puteți procesa PDF-uri extinse care conțin sute de pagini în câteva secunde."
      }
    ]
  },
  "handwriting-ink-contrast-booster": {
    "title": "Îmbunătățiți cerneala pentru scris de mână",
    "metaDescription": "Îmbunătățiți scrisul de mână și contrastul semnăturii în imaginile scanate. Reduceți zgomotul de fundal al hârtiei și faceți cerneala mai ușor de citit.",
    "keywords": [
      "îmbunătățiți contractul scris de mână",
      "creșterea contrastului cernelii",
      "înălbiți hârtie scanată",
      "ascuți semnătura estompată",
      "extragerea semnăturii"
    ],
    "description": "<p>Boosterul de contrast al cernelii pentru scris de mână este un salvator pentru digitizarea acordurilor semnate și a arhivelor de manuscrise istorice.</p>\n      <p>Scanările documentelor semnate de mână par adesea plictisitoare din cauza reflexiei gri a sticlei scanerului, a nuanței galbene a hârtiei sau a cernelii decolorate. Retipărirea sau fotocopiarea acestor fișiere are ca rezultat semnături neclare, ilizibile. Instrumentele tradiționale de contrast întunecă întregul fundal, înrăutățind aspectul.</p>\n      <p>Acest instrument folosește **Contrast Limited Adaptive Histogram Equalization (CLAHE) și separarea culorilor pe bază de nuanță**. Într-un proces local Canvas securizat, izolează liniile scrise de mână (atât negre, cât și albastre) de pergamentul de fundal, albește complet ridurile de umbră și infuzează cernelurile decolorate cu un contrast profund și saturat, lăsând documentele să arate incredibil de clare și curate.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Import document semnat de mână",
        "description": "Furnizați un PDF care conține semnături decolorate, jurnale scrise de mână sau schițe."
      },
      {
        "step": 2,
        "title": "Configurați filtrul de cerneală",
        "description": "Selectați profilul de culoare de izolat (de exemplu, cerneală albastră, cerneală neagră sau ambele) și ajustați claritatea."
      },
      {
        "step": 3,
        "title": "Ascuțiți și descărcați",
        "description": "Faceți clic pe executare pentru a urmări culorile cu un efect de scaner radar și pentru a descărca PDF purificat."
      }
    ],
    "useCases": [
      {
        "title": "Reparații Contracte executate",
        "description": "Reparați acordurile scanate prost, ascuțirea semnăturilor și albirea fundalului hârtiei la A4-alb pur.",
        "icon": "file-check"
      },
      {
        "title": "Arhiva Manuscriselor Manuscrise",
        "description": "Digitalizați jurnale sau jurnale scrise, extragând linii negre clare în timp ce ștergeți petele legate de vârstă.",
        "icon": "book"
      },
      {
        "title": "Restaurare registru istoric",
        "description": "Restabiliți detaliile de cerneală slabă pe registrele de arhivă vechi, salvând coordonatele scrise de mână valoroase.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Cum diferă aceasta de conversia normală în tonuri de gri?",
        "answer": "Tonurile de gri transformă umbrele hârtiei în valori de gri. Algoritmul nostru adaptiv separă luminanța de fundal și izolează „spectrele de cerneală” semnături, purificând fundalul la alb absolut, lăsând marginile liniilor ascuțite."
      },
      {
        "question": "Voi pierde textura trăsăturii scrisului de mână?",
        "answer": "Nu. Algoritmul CLAHE funcționează la un nivel sub-pixel, păstrând presiunea naturală a creionului, estomparea cernelii și greutățile dinamice ale liniilor."
      },
      {
        "question": "Pot să păstrez semne roșii de ștampilă corporativă?",
        "answer": "Da. Prin activarea „Chroma Ink Preservation”, amplificatorul albește fundalul hârtiei și întunecă scrisul, păstrând în același timp culorile strălucitoare ale sigiliilor roșii și semnăturilor de cerneală albastră."
      }
    ]
  },
  "pdf-spine-bookbinder": {
    "title": "Calculați lățimea cotorului cărții",
    "metaDescription": "Calculați lățimea cotorului cărții din numărul de pagini și greutatea hârtiei. Generați un șablon de copertă imprimabil cu linii de îndoire a coloanei vertebrale.",
    "keywords": [
      "calculator de coloană a cărții",
      "grosimea cotorului de legare",
      "generează coperta cărții pdf",
      "semne de îndoire a coloanei vertebrale",
      "prepressă de legare perfectă"
    ],
    "description": "<p>PDF Spine Bookbinder este un salvator de pre-presare pentru designeri, autori de autopublicare și echipe de licitații comerciale.</p>\n      <p>La compilarea cataloagelor groase de cărți, a propunerilor de licitație sau a directoarelor anuale, legarea perfectă (legare cu lipici) necesită o copertă cu coordonate precise ale cotorului. Dacă lățimea coloanei este redusă chiar și cu 1 mm, capacul legat se va deforma, se va deplasa sau se va încreți. Calcularea numărului de pagini în raport cu greutatea hârtiei este complexă și predispusă la erori.</p>\n      <p>Acest instrument utilizează o <strong>bibliotecă modelată fizic GSM hârtie-la-grosime</strong>. Pur și simplu introduceți numărul de pagini PDF și selectați stocul de hârtie (de exemplu, 80 GSM offset, 100 GSM lucios). Motorul calculează lățimea coloanei până la micrometri și alcătuiește un PDF de copertă extra-larg, pregătit pentru imprimare, complet cu clape standard față/spate și cute precise ale semnelor de pliere.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Setați paginile și tipul stocului",
        "description": "Introduceți numărul de pagini ale documentului și selectați specificațiile stocului de hârtie țintă."
      },
      {
        "step": 2,
        "title": "Introduceți textul cotorului",
        "description": "Introduceți titlurile cărților, detaliile autorului și personalizați fundalurile cotorului/copertelor."
      },
      {
        "step": 3,
        "title": "Previzualizare și export 3D",
        "description": "Învârtiți și inspectați coperta cărții dvs. într-un leant 3D interactiv. Exportați PDF vector de înaltă rezoluție."
      }
    ],
    "useCases": [
      {
        "title": "Propuneri groase de licitare",
        "description": "Proiectați foi de copertă profesionale cu aliniere precisă a cutelor coloanei pentru oferte groase.",
        "icon": "layers"
      },
      {
        "title": "Legare hardcover pentru teză",
        "description": "Hartați lățimile perfecte ale structurii coloanei vertebrale pentru tezele de master/doctorat universitare.",
        "icon": "award"
      },
      {
        "title": "Coperți de romane auto-publicate",
        "description": "Calculați cu ușurință lățimea cotorului cărții înainte de a trimite fișiere către serviciile de publicare Print-on-Demand.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "Cât de precis este calculul GSM al grosimii hârtiei?",
        "answer": "Foarte precis. Biblioteca noastră de fizică se potrivește cu mediile din industrie (de exemplu, 70 GSM = 0,09 mm, 80 GSM = 0,10 mm, 150 GSM lucios = 0,125 mm). Includem, de asemenea, o comutare „Imprimare față-verso” pentru a reduce automat calculele la jumătate."
      },
      {
        "question": "Coperțile exportate sunt gata pentru imprimare directă?",
        "answer": "Da. Fișierele sunt PDF-uri perfecte pentru vectori, care poartă mărci de înregistrare standard, bare de culoare și ghidaje pentru coloana vertebrală, pe deplin compatibile cu presele comerciale offset și digitale."
      },
      {
        "question": "Pot încărca o imagine de fundal care se întinde pe coloana vertebrală?",
        "answer": "Da. Puteți încărca machete personalizate, iar compozitorul nostru va împacheta și alinia automat grafica pe pliurile coloanei vertebrale."
      }
    ]
  },
  "pdf-signature-anchor-helper": {
    "title": "Ghid de poziție a semnăturii",
    "metaDescription": "Plasați ghiduri de semnătură pe paginile PDF utilizând coordonatele X/Y. Previzualizează pozițiile lor înainte de a salva documentul actualizat.",
    "keywords": [
      "găsiți semnătura pdf",
      "injectați ancora semnului",
      "asistent la semnarea contractului",
      "faceți clic pentru a semna ghidul",
      "preveniți semnăturile lipsă"
    ],
    "description": "<p>Injectorul PDF Signature Guide garantează fluxuri de lucru de semnare curate, fără erori pentru acordurile cu mai multe pagini.</p>\n      <p>Atunci când trimit acorduri NDA de mai multe pagini, situații financiare sau contracte de închiriere comerciale, clienții deseori scapă de casetele de semnare esențiale, necesitând bucle nesfârșite de e-mail înainte și înapoi și tranzacții comerciale întârziate.</p>\n      <p>Instrumentul nostru folosește <strong>mapping semantic regex natural</strong>. Scanează harta de caractere PDF pentru a găsi termeni precum <code>Semnătura:</code>, <code>签字：</code>, <code>Martor:</code> sau <code>签署日期：</code>. Apoi, folosește <code>pdf-lib</code> pentru a injecta adnotări standard PDF interactive Link. Când sunt deschise în orice cititor standard, clienții văd săgeți intermitente, mărginite de neon, care îi ghidează instantaneu către casetele corecte, făcând semnarea fără greșeală.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Contract de afaceri de import",
        "description": "Încărcați contractul PDF sau NDA care necesită coordonatele semnăturii."
      },
      {
        "step": 2,
        "title": "X / Y",
        "description": "Faceți clic pe previzualizarea PDF reală sau introduceți coordonatele X și Y pentru pagina selectată."
      },
      {
        "step": 3,
        "title": "Proces",
        "description": "Procesați fișierul, examinați rezultatul și descărcați PDF-ul."
      }
    ],
    "useCases": [
      {
        "title": "Acorduri corporative NDA",
        "description": "Injectați ghiduri clare și intermitente lângă blocurile de semne pentru a preveni lipsa clauzelor angajaților de la bord.",
        "icon": "file-text"
      },
      {
        "title": "Contracte de închiriere comercială",
        "description": "Ghidați mai mulți cosemnatari prin documente imobiliare de mai multe pagini cu file colorate personalizate.",
        "icon": "users"
      },
      {
        "title": "Semnături OP pentru achiziții",
        "description": "Suprapuneți indicatoare interactive pe facturi și comenzi de achiziție pentru a accelera buclele de aprobare contabilă.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Vor apărea aceste ghiduri când voi tipări contractul?",
        "answer": "Nu. Ancorele sunt injectate cu flag-ul standard PDF `Printable` setat la fals. Acestea se afișează frumos pe ecranele computerului/tabletei, dar rămân complet invizibile atunci când sunt imprimate."
      },
      {
        "question": "Clienții pot sări cu ușurință între câmpurile de semnătură?",
        "answer": "Da. Țesem ancore interne bidirecționale. Clienții pot face clic pe marcajul „Ghid de semnături” pentru a trece automat la următorul slot de semnătură gol instantaneu."
      },
      {
        "question": "Funcționează acest lucru pe documente cu imagini scanate?",
        "answer": "Da. Pe lângă căutarea fluxurilor de text, analizatorul nostru spațial de aspect estimează liniile de semnătură pe baza regulilor orizontale și a casetelor de delimitare pe foile scanate."
      }
    ]
  },
  "pdf-lossless-slicer": {
    "title": "Tăiere de desen fără pierderi",
    "metaDescription": "Decupați o regiune a unui desen PDF, a unei hărți sau a unei diagrame folosind coordonate precise. Păstrați conținutul vectorial în PDF-ul exportat.",
    "keywords": [
      "pdf decupare vectorială",
      "secțiune PDF fără pierderi",
      "crop desen cad",
      "editarea matricei cropbox",
      "extrageți regiunea hărții"
    ],
    "description": "<p>Dispozitivul PDF Lossless Drawing Slicer este un instrument chirurgical de înaltă precizie, creat pentru arhitecți, ingineri și detalierii hărților.</p>\n      <p>Când extrageți o anumită cameră de pompe sau un miez de cip dintr-un plan masiv de inginerie CAD sau dintr-o hartă geografică PDF, capturile de ecran tradiționale au ca rezultat text pixelat și neclar. Instrumentele de decupare obișnuite plasează pur și simplu o mască peste coală, ceea ce înseamnă că fișierul masiv de 100 MB rămâne imens, iar conținutul ascuns poate fi extras în continuare.</p>\n      <p>Acest instrument editează matricele de pagină <code>/MediaBox</code>, <code>/CropBox</code> și <code>/BleedBox</code> la nivelul arborelui obiect. Izolează fizic nodurile vectoriale din afara regiunii selectate, menținând zona țintă 100% perfectă din punct de vedere vectorial (permițând mărirea infinită a măririi) în timp ce purifică căile și imaginile redundante în afara ecranului pentru a micșora dimensiunea fișierului cu 95%!</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importați planul mare",
        "description": "Încărcați CAD bogat în vectori, harta GIS sau PDF de catalog de înaltă rezoluție."
      },
      {
        "step": 2,
        "title": "Decupați dreptunghi",
        "description": "Introduceți X, Y, lățime și înălțime, apoi verificați pagina selectată în previzualizare."
      },
      {
        "step": 3,
        "title": "Proces",
        "description": "Procesați fișierul, examinați rezultatul și descărcați PDF-ul."
      }
    ],
    "useCases": [
      {
        "title": "Izolarea planului CAD",
        "description": "Separă un detaliu „sistem de răcire” dintr-un plan masiv de 100 MB pentru a le împărtăși sub-contractorilor.",
        "icon": "crop"
      },
      {
        "title": "Decupare hartă GIS",
        "description": "Extrageți un bloc fără pierderi, cu claritate vectorială, dintr-o hartă a străzilor orașului pentru un diapozitiv de prezentare fără pierderi de rezoluție.",
        "icon": "map"
      },
      {
        "title": "Urmărirea manuală a ilustrației",
        "description": "Izolați fără pierderi cifre de cărți științifice pentru a le încorpora în lucrări academice de înaltă calitate.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Cu ce ​​este diferită de decuparea standard?",
        "answer": "Decuparea standard ajustează doar limitele vizuale; vectorii ascunși rămân în fișier. Selectorul nostru decupează căile vectoriale suprapuse și purifică imaginile XObject din afara limitelor, asigurând izolarea completă a datelor și compresia maximă a fișierelor."
      },
      {
        "question": "Straturile de text vor rămâne căutate?",
        "answer": "Da. Orice caractere de text care se încadrează în limitele tăiate rămân complet clare din punct de vedere vectorial, pot fi căutate și pot fi selectate."
      },
      {
        "question": "Pot exporta regiuni tăiate în SVG?",
        "answer": "Rezultatul este un PDF vectorial standardizat. Puteți trece fișierul rezultat la instrumentul nostru PDF-to-SVG pentru a-l converti într-un format de grafică vectorială scalabil pe web."
      }
    ]
  },
  "pdf-scratchpad-canvas": {
    "title": "Grid Scratchpad Canvas",
    "metaDescription": "Adăugați marjele de grilă, rigle sau de note Cornell în paginile PDF. Creați spațiu suplimentar de scriere pentru note de studiu, calcule și pregătire pentru examen.",
    "keywords": [
      "marja pdf extinde",
      "adăugați o pagină scratchpad",
      "grilă de note Cornell",
      "spațiu de cusătură",
      "șablon de note pdf"
    ],
    "description": "<p>Extensorul de marjă PDF Scratchpad este un însoțitor de studiu esențial, adaptat studenților, cercetătorilor și candidaților profesioniști la examen.</p>\n      <p>Atunci când rezolvăm lucrări de test de practică, revizuiți diapozitive sau citiți manuale academice pe tablete digitale, marginile paginilor sunt incredibil de strânse. Deschiderea unei aplicații de note separate vă obligă să comutați între ecrane în mod constant, rupând focalizarea. Adăugarea de foi albe plate vă împiedică să vizualizați problema și calculul unul lângă altul.</p>\n      <p>Acest instrument rescrie dimensiunile lățimii sau înălțimii paginii în structura PDF de nivel scăzut, extinzând marjele <code>/MediaBox</code> cu 200~250 pt în partea dreaptă sau în jos. Apoi suprapune linii de grilă curate, linii de blocnotes guvernate de colegiu sau aspecte Cornell în noile margini, oferindu-vă panouri de schiță adiacente dedicate lângă fiecare diapozitiv sau întrebare!</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Încărcați diapozitivele cursului",
        "description": "Furnizați manualul PDF, diapozitivele sau lucrările de studiu."
      },
      {
        "step": 2,
        "title": "Alegeți stilul de marjă și grilă",
        "description": "Alegeți direcția de extindere a marginii (de exemplu, partea dreaptă pentru tablete) și selectați șablonul de grilă."
      },
      {
        "step": 3,
        "title": "Cusăți pânza și descărcați",
        "description": "Faceți clic pe executare pentru a genera pagini extinse complete cu grile de schiță frumoase."
      }
    ],
    "useCases": [
      {
        "title": "Pregătirea examenului STEM",
        "description": "Cusă-ți marginile grilei lângă întrebările de la examenul de matematică și fizică, rezolvând derivări chiar lângă întrebare.",
        "icon": "edit-3"
      },
      {
        "title": "Analiza citirii limbii",
        "description": "Adăugați margini de caiet cu rigle lângă eseuri în limbi străine pentru analiza vocabularului și traducerea paragrafelor.",
        "icon": "book"
      },
      {
        "title": "Audit de proiect arhitectural",
        "description": "Adăugați spații de marjă goale în partea laterală a planurilor pentru calculele de inginerie și comentariile de revizuire ale clienților.",
        "icon": "columns"
      }
    ],
    "faq": [
      {
        "question": "Acest lucru va distruge textul meu PDF original?",
        "answer": "Deloc. Algoritmul extinde dimensiunea hârtiei spre exterior. Conținutul original își păstrează aspectul, fonturile și rezoluția; pur și simplu întindem spațiul alb de pe margini și desenăm grile pe ele."
      },
      {
        "question": "Pixurile standard pentru scris de mână pot scrie pe bloc-notă?",
        "answer": "Da. Noile pagini PDF sunt compilate nativ. Aplicațiile populare de luare de note pentru tabletă, cum ar fi Goodnotes, Notability, Xodo și Acrobat, pot scrie, evidenția și doodle direct în noul spațiu grilă."
      },
      {
        "question": "Liniile de grilă sunt întunecate și distrag atenția?",
        "answer": "Am selectat trei culori subtile, prietenoase cu ochii (albastru-gri moale, maro cald și verde strălucitor). Liniile sunt subțiri și blânde, servind drept ghiduri fără a vă distrage atenția de la conținutul original al paginii."
      }
    ]
  },
  "photo-tiling-prepress": {
    "title": "ID Fotografie DIY Print Tiler",
    "metaDescription": "Decupați și aranjați fotografiile de identitate sau pașaport pe hârtie foto standard. Adăugați semne de decupare pentru imprimare pentru a ajuta la tăierea foii finite.",
    "keywords": [
      "placare foto id",
      "imprimați fotografia pașaportului",
      "hârtie foto standard cu gresie",
      "prepresare aspect fotografie id",
      "ștampila semne de decupare"
    ],
    "description": "<p>Instrumentul Prepress Photo Tiling este un compilator rentabil, de înaltă precizie, creat pentru carduri personale de înregistrare și studiouri de fotografie.</p>\n      <p>Imprimarea acasă a fotografiilor de pașaport, a fotografiilor de identitate sau a permiselor de conducere duce adesea la dimensiuni fizice incorecte (deseori tipărite prea mari sau prea mici), risipă de hârtie foto și aliniamente neuniforme. A merge la imprimerii profesionale pentru a realiza machete necesită mult timp.</p>\n      <p>Instrumentul nostru integrează un <strong>motor matrice de prepresare de precizie</strong>. Acceptă fotografii portret sau scanări de cărți de identitate, le decupează la dimensiuni standard (de exemplu, specificații pentru pașaport de 1\" sau 2\"), calculează numărul optim de plăci pentru hârtie foto standard (de exemplu, coli de 5\" sau 6\" și injectează linii de decupare clare, micro-pixeli pentru o tăiere fizică ușoară, generând un PDF imprimabil perfect.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importați fotografia pașaportului",
        "description": "Încărcați instantaneul portret al camerei sau imaginile pe două fețe ale cărții de identitate."
      },
      {
        "step": 2,
        "title": "Configurați hârtie și aspect",
        "description": "Selectați dimensiunea țintă a hârtiei de imprimare (de exemplu, 6\") și alegeți aspectul grilei (de exemplu, 8 copii ale fotografiilor de 1\")."
      },
      {
        "step": 3,
        "title": "Tiglați și exportați",
        "description": "Inspectați plăcile foto de pe grila noastră și exportați PDF-ul imprimabil cu DPI ridicat."
      }
    ],
    "useCases": [
      {
        "title": "Fotografii de pașaport cu autoservire",
        "description": "Aranjați portretele din pașapoarte fotografiate pe mobil pe o singură grilă de hârtie foto de 6 inchi și imprimați 8 copii pentru o fracțiune din costurile standard ale studioului.",
        "icon": "user"
      },
      {
        "title": "Cartea de identitate Copie față-verso",
        "description": "Formatați corect scanările față și spate ale cărților de identitate naționale pe coli standard Letter/A4 pentru trimiterile oficiale.",
        "icon": "file-text"
      },
      {
        "title": "Foi de miniaturi de fotografii în lot",
        "description": "Plasați mai multe amintiri de familie sau proiectați instantanee pe o hârtie grilă pentru a imprima eficient foile de contact cu miniaturi.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Dimensiunile imprimate se vor potrivi cu specificațiile oficiale de 1\" sau 2\"?",
        "answer": "Da. Motorul de grilă măsoară folosind puncte PDF standard (72 pt = 1 inch), redând fotografii de 1\" exact la 25x35mm și fotografii de 2\" la 35x49mm. Asigurați-vă că imprimați la „Dimensiune reală / scară 100%” în setările imprimantei."
      },
      {
        "question": "Pot combina fotografii de 1\" și 2\" pe o singură coală?",
        "answer": "Da. Oferim presetări de aspect hibrid organizate (de exemplu, „4 copii de 1” + 4 copii de 2”), permițându-vă să maximizați spațiul de hârtie foto."
      },
      {
        "question": "Șablonul include sângerări de chenar?",
        "answer": "Da. Aspectele de prepresare rezervă o marjă standard de imprimare de 4 mm pe marginile hârtiei, împiedicând rolele fizice ale imprimantei să decupeze fotografiile."
      }
    ]
  }
};
