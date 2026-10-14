import { localizedRedactionContent } from './redaction-locales';
/**
 * Contenu des outils en français pour le SEO
 * Contient des descriptions détaillées, des instructions, des cas d'utilisation et des FAQ pour les 67 outils
 * Exigences : 4.2-4.5 - Contenu de la page de l'outil (description, mode d'emploi, cas d'utilisation, FAQ)
 */

import { ToolContent } from '@/types/tool';

/**
 * Carte du contenu des outils en français
 * Chaque outil a : titre, méta-description, mots-clés, description, mode d'emploi (3+ étapes), cas d'utilisation (3+ scénarios), FAQ (3+ questions)
 */
export const toolContentFr: Record<string, ToolContent> = {
  "pdf-multi-tool": {
    "title": "Outil PDF Tout-en-un",
    "metaDescription": "Éditeur PDF tout-en-un : fusionner, diviser, organiser, supprimer, faire pivoter et extraire des pages en un seul outil puissant.",
    "keywords": [
      "outil pdf multi",
      "éditeur pdf",
      "fusionner pdf",
      "diviser pdf",
      "organiser pdf",
      "pdf tout en un"
    ],
    "description": "\n      <p>L'Outil PDF Tout-en-un est votre solution complète pour toutes les tâches de gestion de pages PDF. Cet outil puissant combine plusieurs opérations PDF en une seule interface intuitive, vous faisant gagner du temps et de l'énergie.</p>\n      <p>Que vous ayez besoin de fusionner plusieurs documents, de diviser un gros PDF en fichiers plus petits, de réorganiser des pages, de supprimer du contenu indésirable, de faire pivoter des pages ou d'extraire des sections spécifiques, cet outil gère tout cela sans changer d'application.</p>\n      <p>Tout le traitement s'effectue directement dans votre navigateur, garantissant que vos documents restent privés et sécurisés. Aucun fichier n'est téléchargé sur un serveur.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF dans la zone de téléchargement, ou cliquez pour parcourir et sélectionner des fichiers depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Choisissez votre opération",
        "description": "Sélectionnez parmi les opérations disponibles : fusionner, diviser, organiser, supprimer des pages, faire pivoter, ajouter des pages blanches ou extraire des pages."
      },
      {
        "step": 3,
        "title": "Configurez les options",
        "description": "Ajustez les paramètres spécifiques à l'opération choisie, tels que les plages de pages, les angles de rotation ou l'ordre de fusion."
      },
      {
        "step": 4,
        "title": "Traitez et téléchargez",
        "description": "Cliquez sur le bouton de traitement et téléchargez votre PDF modifié une fois l'opération terminée."
      }
    ],
    "useCases": [
      {
        "title": "Préparation de documents",
        "description": "Préparez des documents pour soumission en supprimant les pages inutiles, en réorganisant le contenu et en combinant plusieurs fichiers.",
        "icon": "file-check"
      },
      {
        "title": "Assemblage de rapports",
        "description": "Combinez plusieurs sections de rapport, ajoutez des pages de couverture et organisez les chapitres en un seul document professionnel.",
        "icon": "book-open"
      },
      {
        "title": "Gestion d'archives",
        "description": "Divisez de gros fichiers d'archive en sections gérables, extrayez les pages pertinentes et réorganisez les documents historiques.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Combien de PDF puis-je traiter à la fois ?",
        "answer": "Vous pouvez télécharger et traiter jusqu'à 10 fichiers PDF simultanément, avec une taille combinée maximale de 500 Mo."
      },
      {
        "question": "Mes signets seront-ils conservés ?",
        "answer": "Oui, lors de la fusion de PDF, l'outil conserve les signets existants et peut optionnellement les combiner en une structure de signets unifiée."
      },
      {
        "question": "Y a-t-il une limite de pages ?",
        "answer": "Il n'y a pas de limite stricte de pages. L'outil peut gérer des documents de centaines de pages, bien que les fichiers très volumineux puissent prendre plus de temps à traiter."
      }
    ]
  },
  "merge-pdf": {
    "title": "Fusionner PDF",
    "metaDescription": "Combinez plusieurs fichiers PDF en un seul document. Fusionneur PDF en ligne gratuit avec réorganisation par glisser-déposer.",
    "keywords": [
      "fusionner pdf",
      "combiner pdf",
      "joindre pdf",
      "assembleur pdf",
      "concaténer pdf"
    ],
    "description": "\n      <p>Fusionner PDF vous permet de combiner plusieurs documents PDF en un seul fichier rapidement et facilement. Que vous consolidiez des rapports, combiniez des documents numérisés ou assembliez une présentation, cet outil rend le processus fluide.</p>\n      <p>Il suffit de télécharger vos fichiers, de les organiser dans l'ordre souhaité par glisser-déposer, et de les fusionner en un document cohérent. L'outil préserve la qualité de vos fichiers originaux et peut optionnellement conserver les signets de chaque document source.</p>\n      <p>Toute la fusion se fait localement dans votre navigateur, assurant une confidentialité totale pour vos documents sensibles.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les fichiers PDF",
        "description": "Glissez-déposez plusieurs fichiers PDF dans la zone de téléchargement, ou cliquez pour sélectionner des fichiers depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Organisez l'ordre",
        "description": "Glissez-déposez les vignettes de fichiers pour les organiser dans l'ordre souhaité."
      },
      {
        "step": 3,
        "title": "Fusionnez et téléchargez",
        "description": "Cliquez sur le bouton Fusionner pour combiner tous les fichiers, puis téléchargez votre PDF fusionné."
      }
    ],
    "useCases": [
      {
        "title": "Combiner des rapports",
        "description": "Fusionnez des rapports mensuels ou trimestriels en un seul document annuel pour faciliter la distribution et l'archivage.",
        "icon": "file-text"
      },
      {
        "title": "Assembler des portfolios",
        "description": "Combinez plusieurs documents de projet, certificats ou exemples de travaux en un portfolio professionnel.",
        "icon": "briefcase"
      },
      {
        "title": "Consolider des factures",
        "description": "Fusionnez plusieurs factures ou reçus en un seul document pour la comptabilité et la tenue de registres.",
        "icon": "receipt"
      }
    ],
    "faq": [
      {
        "question": "Combien de PDF puis-je fusionner ?",
        "answer": "Vous pouvez fusionner jusqu'à 100 fichiers PDF à la fois, avec une taille totale combinée allant jusqu'à 500 Mo."
      },
      {
        "question": "Le PDF fusionné conservera-t-il la qualité originale ?",
        "answer": "Oui, le processus de fusion préserve la qualité originale de tous les documents sans aucune compression ni perte de qualité."
      },
      {
        "question": "Puis-je fusionner des PDF protégés par mot de passe ?",
        "answer": "Les PDF protégés par mot de passe doivent d'abord être déchiffrés. Utilisez notre outil Déchiffrer PDF pour supprimer le mot de passe avant la fusion."
      }
    ]
  },
  "split-pdf": {
    "title": "Diviser PDF",
    "metaDescription": "Divisez des fichiers PDF en plusieurs documents. Extrayez des pages spécifiques ou divisez par plages de pages.",
    "keywords": [
      "diviser pdf",
      "séparer pdf",
      "scinder pdf",
      "extraire pages",
      "découpeur pdf"
    ],
    "description": "\n      <p>Diviser PDF vous permet de séparer un seul document PDF en plusieurs fichiers plus petits. C'est parfait pour extraire des chapitres spécifiques, séparer des documents combinés ou créer des fichiers individuels à partir d'un PDF multipages.</p>\n      <p>Vous pouvez diviser par plages de pages spécifiques, extraire des pages individuelles ou diviser le document à intervalles réguliers. L'outil fournit un aperçu visuel de vos pages, facilitant la sélection exacte de ce dont vous avez besoin.</p>\n      <p>Tout le traitement est effectué localement dans votre navigateur, garantissant que vos documents restent privés et sécurisés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour parcourir et sélectionner le fichier que vous souhaitez diviser."
      },
      {
        "step": 2,
        "title": "Sélectionnez la méthode de division",
        "description": "Choisissez comment diviser : par plages de pages, extraire des pages spécifiques ou diviser à intervalles réguliers."
      },
      {
        "step": 3,
        "title": "Définissez les plages de pages",
        "description": "Entrez les numéros de page ou les plages que vous souhaitez extraire (ex: 1-5, 8, 10-15)."
      },
      {
        "step": 4,
        "title": "Divisez et téléchargez",
        "description": "Cliquez sur Diviser pour créer vos nouveaux fichiers PDF et téléchargez-les individuellement ou sous forme d'archive ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Extraire des chapitres",
        "description": "Divisez un livre ou un manuel en chapitres individuels pour faciliter la lecture ou la distribution.",
        "icon": "book"
      },
      {
        "title": "Séparer des scans combinés",
        "description": "Divisez un document numérisé par lots en fichiers individuels pour chaque document original.",
        "icon": "copy"
      },
      {
        "title": "Créer des documents à distribuer",
        "description": "Extrayez des diapositives ou des pages spécifiques d'une présentation pour créer des supports ciblés.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Puis-je diviser un PDF en pages individuelles ?",
        "answer": "Oui, vous pouvez diviser un PDF en fichiers d'une seule page en sélectionnant l'option \"Diviser chaque page\"."
      },
      {
        "question": "Qu'advient-il des signets lors de la division ?",
        "answer": "Les signets qui tombent dans la plage de pages extraite sont conservés dans les fichiers PDF résultants."
      },
      {
        "question": "Puis-je diviser des PDF protégés par mot de passe ?",
        "answer": "Vous devez d'abord déchiffrer le PDF en utilisant notre outil Déchiffrer PDF avant de le diviser."
      }
    ]
  },
  "grid-combine": {
    "title": "Combiner PDF en Grille",
    "metaDescription": "Combinez plusieurs fichiers PDF sur des pages uniques avec une mise en page en grille flexible. Organisez 2, 4, 6, 9 ou plus de PDF par page avec bordures et espacement.",
    "keywords": [
      "combiner grille",
      "fusionner pdf grille",
      "collage pdf",
      "plusieurs pdf une page",
      "pdf n-up",
      "grille pdf"
    ],
    "description": "\n      <p>L'outil Combiner en Grille offre une façon unique de fusionner plusieurs fichiers PDF séparés sur des pages uniques. Contrairement à l'outil standard \"Fusionner PDF\" qui ajoute simplement les pages, ou l'outil \"N-Up\" qui réorganise les pages d'un seul document, Combiner en Grille prend plusieurs fichiers d'entrée et les dispose côte à côte dans une mise en page en grille personnalisable.</p>\n      <p>Vous pouvez choisir parmi diverses configurations de grille telles que 2x1, 2x2, 3x3, etc. C'est parfait pour comparer plusieurs documents, créer des documents à distribuer à partir de différentes sources ou imprimer des versions compactes de plusieurs fichiers.</p>\n      <p>Personnalisez la sortie en contrôlant la taille de la page, l'orientation, les marges, l'espacement et les bordures. Tout le traitement se fait localement dans votre navigateur pour une confidentialité maximale.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser des fichiers PDF",
        "description": "Téléversez deux ou plusieurs fichiers PDF que vous souhaitez combiner. Vous pouvez les réorganiser dans l'ordre souhaité."
      },
      {
        "step": 2,
        "title": "Choisir la disposition en grille",
        "description": "Sélectionnez votre disposition de grille souhaitée (ex: 2x2 pour 4 fichiers par page, 3x3 pour 9 fichiers par page)."
      },
      {
        "step": 3,
        "title": "Personnaliser l'apparence",
        "description": "Ajustez les paramètres tels que la taille de la page (A4, Lettre), l'orientation, l'espacement entre les éléments et les bordures."
      },
      {
        "step": 4,
        "title": "Combiner et Télécharger",
        "description": "Cliquez sur \"Combiner PDFs\" pour générer votre nouveau document en grille et téléchargez le résultat."
      }
    ],
    "useCases": [
      {
        "title": "Comparaison Visuelle",
        "description": "Placez différentes versions d'un design ou d'un document côte à côte sur une seule page pour une comparaison facile.",
        "icon": "layout-grid"
      },
      {
        "title": "Imprimer des Documents",
        "description": "Combinez plusieurs documents courts ou diapositives sur une seule feuille pour économiser des coûts d'impression.",
        "icon": "printer"
      },
      {
        "title": "Création de Portfolio",
        "description": "Présentez plusieurs fichiers de projet dans un aperçu de grille propre et organisé.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Quelle est la différence avec N-Up ?",
        "answer": "N-Up prend les pages d'UN SEUL PDF et les met sur une feuille. Combiner en Grille prend PLUSIEURS FICHIERS PDF DIFFÉRENTS et les met sur une feuille."
      },
      {
        "question": "Combien de fichiers puis-je combiner ?",
        "answer": "Vous pouvez combiner jusqu'à 100 fichiers selon la mémoire de votre navigateur, mais les dispositions comme 4x4 accueillent jusqu'à 16 fichiers par page."
      },
      {
        "question": "Puis-je ajouter des bordures ?",
        "answer": "Oui, vous pouvez ajouter des bordures autour de chaque fichier PDF et personnaliser la couleur de la bordure."
      }
    ]
  },
  "compress-pdf": {
    "title": "Compresser PDF",
    "metaDescription": "Réduisez la taille des fichiers PDF tout en maintenant la qualité. Compresseur PDF en ligne gratuit pour des fichiers plus légers.",
    "keywords": [
      "compresser pdf",
      "réduire taille pdf",
      "compresseur pdf",
      "alléger pdf",
      "optimiser pdf"
    ],
    "description": "\n      <p>Compresser PDF réduit la taille de fichier de vos documents PDF tout en maintenant une qualité acceptable. C'est essentiel pour les pièces jointes d'e-mails, les téléchargements web ou pour économiser de l'espace de stockage.</p>\n      <p>L'outil offre plusieurs niveaux de compression pour équilibrer la réduction de la taille du fichier et la préservation de la qualité. Vous pouvez choisir une compression agressive pour une réduction maximale ou une compression légère pour maintenir une qualité supérieure.</p>\n      <p>Toute la compression se produit dans votre navigateur, garantissant que vos documents ne quittent jamais votre appareil.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document que vous souhaitez compresser."
      },
      {
        "step": 2,
        "title": "Choisissez le niveau de compression",
        "description": "Sélectionnez votre niveau préféré : Faible (meilleure qualité), Moyen (équilibré) ou Élevé (taille minimale)."
      },
      {
        "step": 3,
        "title": "Compressez et téléchargez",
        "description": "Cliquez sur Compresser pour réduire la taille du fichier, puis téléchargez votre PDF optimisé."
      }
    ],
    "useCases": [
      {
        "title": "Pièces jointes d'e-mail",
        "description": "Réduisez la taille du PDF pour respecter les limites des pièces jointes et assurer un envoi plus rapide.",
        "icon": "mail"
      },
      {
        "title": "Publication Web",
        "description": "Optimisez les PDF pour le téléchargement web afin d'améliorer les temps de chargement et l'expérience utilisateur.",
        "icon": "globe"
      },
      {
        "title": "Optimisation du stockage",
        "description": "Compressez les documents archivés pour économiser de l'espace disque tout en maintenant l'accessibilité.",
        "icon": "hard-drive"
      }
    ],
    "faq": [
      {
        "question": "De combien puis-je réduire la taille du fichier ?",
        "answer": "Les résultats varient selon le contenu. Les PDF riches en images peuvent souvent être réduits de 50 à 80%, tandis que les PDF contenant uniquement du texte peuvent voir des réductions plus faibles."
      },
      {
        "question": "La compression affectera-t-elle la qualité du texte ?",
        "answer": "Le texte reste net et lisible à tous les niveaux de compression. Seules les images et les graphiques sont affectés."
      },
      {
        "question": "Puis-je compresser plusieurs PDF à la fois ?",
        "answer": "Oui, vous pouvez télécharger et compresser jusqu'à 10 fichiers PDF simultanément."
      }
    ]
  },
  "edit-pdf": {
    "title": "Éditer PDF",
    "metaDescription": "Éditez des fichiers PDF en ligne. Ajoutez du texte, des images, des annotations, des surlignages et des formes à vos documents.",
    "keywords": [
      "éditer pdf",
      "éditeur pdf",
      "annoter pdf",
      "ajouter texte pdf",
      "modifier pdf"
    ],
    "description": "\n      <p>Éditer PDF fournit un ensemble complet d'outils pour modifier et annoter vos documents PDF. Ajoutez du texte, des images, des formes, des surlignages, des commentaires et plus encore sans avoir besoin de logiciels de bureau coûteux.</p>\n      <p>L'interface intuitive de l'éditeur facilite l'annotation de documents pour révision, l'ajout de notes pour la collaboration, la rédaction d'informations sensibles ou l'amélioration de documents avec du contenu supplémentaire.</p>\n      <p>Toute l'édition se fait localement dans votre navigateur, assurant une confidentialité totale pour vos documents sensibles.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document que vous souhaitez éditer."
      },
      {
        "step": 2,
        "title": "Sélectionnez l'outil d'édition",
        "description": "Choisissez dans la barre d'outils : texte, surlignage, formes, images, commentaires ou outils de rédaction."
      },
      {
        "step": 3,
        "title": "Faites vos modifications",
        "description": "Cliquez sur le document pour ajouter des annotations, faites glisser pour positionner les éléments et utilisez le panneau de propriétés pour personnaliser."
      },
      {
        "step": 4,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour appliquer vos modifications et téléchargez le PDF édité."
      }
    ],
    "useCases": [
      {
        "title": "Révision de documents",
        "description": "Ajoutez des commentaires, des surlignages et des annotations aux documents pour les processus de révision collaborative.",
        "icon": "message-square"
      },
      {
        "title": "Remplissage de formulaires",
        "description": "Remplissez des champs de texte, ajoutez des signatures et complétez des formulaires PDF sans imprimer.",
        "icon": "edit-3"
      },
      {
        "title": "Rédaction de contenu",
        "description": "Supprimez définitivement les informations sensibles des documents avant de les partager.",
        "icon": "eye-off"
      }
    ],
    "faq": [
      {
        "question": "Puis-je modifier le texte original du PDF ?",
        "answer": "Cet outil se concentre sur l'ajout d'annotations et de nouveau contenu. Pour éditer le texte existant, vous pourriez avoir besoin du document source original."
      },
      {
        "question": "Mes modifications sont-elles permanentes ?",
        "answer": "Les annotations peuvent être aplaties pour les rendre permanentes, ou conservées comme calques modifiables selon votre préférence."
      },
      {
        "question": "Puis-je annuler mes modifications ?",
        "answer": "Oui, l'éditeur prend en charge la fonctionnalité annuler/rétablir. Vous pouvez également réinitialiser le document original à tout moment avant d'enregistrer."
      }
    ]
  },
  "jpg-to-pdf": {
    "title": "JPG en PDF",
    "metaDescription": "Convertissez des images JPG en PDF. Combinez plusieurs fichiers JPG en un seul document PDF.",
    "keywords": [
      "jpg en pdf",
      "jpeg en pdf",
      "convertir jpg",
      "image en pdf",
      "photo en pdf"
    ],
    "description": "\n      <p>JPG en PDF convertit vos images JPEG en documents PDF rapidement et facilement. Que vous ayez une seule photo ou plusieurs images, cet outil crée des fichiers PDF d'aspect professionnel.</p>\n      <p>Vous pouvez combiner plusieurs fichiers JPG en un seul PDF, les organiser dans n'importe quel ordre et personnaliser la taille et l'orientation des pages. La conversion préserve la qualité de l'image tout en créant des fichiers PDF compacts et partageables.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos photos restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les images JPG",
        "description": "Glissez-déposez vos fichiers JPG ou cliquez pour sélectionner des images depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Organisez et configurez",
        "description": "Réorganisez les images en les faisant glisser, et sélectionnez les options de taille de page et d'orientation."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF et télécharger le résultat."
      }
    ],
    "useCases": [
      {
        "title": "Albums photo",
        "description": "Créez des albums photo PDF à partir de photos de vacances ou d'événements pour un partage facile.",
        "icon": "image"
      },
      {
        "title": "Numérisation de documents",
        "description": "Convertissez des photos de documents prises avec un téléphone en fichiers PDF propres.",
        "icon": "camera"
      },
      {
        "title": "Création de portfolio",
        "description": "Compilez des travaux de photographie ou des exemples de conception en un portfolio PDF professionnel.",
        "icon": "folder"
      }
    ],
    "faq": [
      {
        "question": "Combien d'images puis-je convertir ?",
        "answer": "Vous pouvez convertir jusqu'à 100 images JPG en un seul document PDF."
      },
      {
        "question": "La qualité de l'image sera-t-elle préservée ?",
        "answer": "Oui, les images sont intégrées à leur qualité originale. Vous pouvez optionnellement les compresser pour réduire la taille du fichier."
      },
      {
        "question": "Puis-je définir des tailles de page différentes pour différentes images ?",
        "answer": "L'outil applique une taille de page uniforme à toutes les pages. Chaque image est mise à l'échelle pour s'adapter à la taille de page sélectionnée tout en conservant son ratio d'aspect."
      }
    ]
  },
  "sign-pdf": {
    "title": "Signer PDF",
    "metaDescription": "Ajoutez des signatures électroniques aux documents PDF. Dessinez, tapez ou téléchargez votre signature.",
    "keywords": [
      "signer pdf",
      "signature électronique",
      "signature électronique",
      "signature numérique",
      "signer document"
    ],
    "description": "\n      <p>Signer PDF vous permet d'ajouter des signatures électroniques à vos documents PDF rapidement et en toute sécurité. Créez votre signature en la dessinant, en la tapant ou en téléchargeant une image, puis placez-la n'importe où sur votre document.</p>\n      <p>Vous pouvez ajouter plusieurs signatures à un seul document, les redimensionner et les positionner précisément, et enregistrer votre signature pour une utilisation future. L'outil est parfait pour les contrats, accords, formulaires et tout document nécessitant votre signature.</p>\n      <p>Toute la signature se fait localement dans votre navigateur, garantissant que vos documents et votre signature restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document que vous devez signer."
      },
      {
        "step": 2,
        "title": "Créez votre signature",
        "description": "Dessinez votre signature avec la souris ou le tactile, tapez votre nom pour générer une signature, ou téléchargez une image de signature. Vous pouvez aussi scanner la photo d’une signature écrite sur papier."
      },
      {
        "step": 3,
        "title": "Placez et ajustez",
        "description": "Cliquez sur le document pour placer votre signature, puis faites glisser pour positionner et redimensionner selon les besoins."
      },
      {
        "step": 4,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour appliquer votre signature et téléchargez le PDF signé."
      }
    ],
    "useCases": [
      {
        "title": "Signature de contrat",
        "description": "Signez des contrats et des accords électroniquement sans imprimer ni numériser.",
        "icon": "file-signature"
      },
      {
        "title": "Remplissage de formulaires",
        "description": "Ajoutez votre signature aux formulaires de candidature, formulaires de consentement et documents officiels.",
        "icon": "clipboard"
      },
      {
        "title": "Flux d'approbation",
        "description": "Signez des documents dans le cadre de processus de révision et d'approbation.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Une signature électronique est-elle juridiquement contraignante ?",
        "answer": "Les signatures électroniques sont reconnues légalement dans la plupart des pays. Cependant, certains documents peuvent nécessiter des types spécifiques de signatures numériques. Vérifiez vos réglementations locales."
      },
      {
        "question": "Puis-je enregistrer ma signature pour plus tard ?",
        "answer": "Oui, vous pouvez enregistrer votre signature dans le stockage local de votre navigateur pour un accès rapide lors de la signature de futurs documents."
      },
      {
        "question": "Puis-je ajouter plusieurs signatures à un document ?",
        "answer": "Oui, vous pouvez ajouter autant de signatures que nécessaire, en positionnant chacune indépendamment sur n'importe quelle page."
      }
    ]
  },
  "crop-pdf": {
    "title": "Recadrer PDF",
    "metaDescription": "Recadrez les pages PDF pour supprimer les marges et les zones indésirables. Rognez les documents PDF avec précision.",
    "keywords": [
      "recadrer pdf",
      "rogner pdf",
      "couper marges pdf",
      "redimensionner pages pdf",
      "outil recadrage pdf"
    ],
    "description": "\n      <p>Recadrer PDF vous permet de rogner les marges et de supprimer les zones indésirables de vos pages PDF. C'est utile pour supprimer les espaces blancs excessifs, se concentrer sur des zones de contenu spécifiques ou standardiser les dimensions des pages.</p>\n      <p>Vous pouvez recadrer toutes les pages uniformément ou ajuster chaque page individuellement. L'interface visuelle montre exactement ce qui sera conservé, facilitant l'obtention de résultats précis.</p>\n      <p>Tout le recadrage se fait localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document que vous souhaitez recadrer."
      },
      {
        "step": 2,
        "title": "Définissez la zone de recadrage",
        "description": "Faites glisser les poignées de recadrage pour définir la zone à conserver, ou entrez des mesures précises."
      },
      {
        "step": 3,
        "title": "Appliquez aux pages",
        "description": "Choisissez d'appliquer le recadrage à toutes les pages ou sélectionnez des pages spécifiques."
      },
      {
        "step": 4,
        "title": "Recadrez et téléchargez",
        "description": "Cliquez sur Recadrer pour appliquer les modifications et téléchargez votre PDF recadré."
      }
    ],
    "useCases": [
      {
        "title": "Supprimer les marges",
        "description": "Rognez les marges excessives des documents numérisés ou des PDF avec de grandes bordures.",
        "icon": "maximize-2"
      },
      {
        "title": "Cibler le contenu",
        "description": "Recadrez pour mettre en évidence des zones de contenu spécifiques, en supprimant les en-têtes, pieds de page ou barres latérales.",
        "icon": "target"
      },
      {
        "title": "Standardiser les pages",
        "description": "Rendez toutes les pages de la même taille en les recadrant à des dimensions uniformes.",
        "icon": "square"
      }
    ],
    "faq": [
      {
        "question": "Le recadrage supprime-t-il définitivement le contenu ?",
        "answer": "Oui, le recadrage supprime le contenu en dehors de la zone de recadrage. Assurez-vous de conserver une sauvegarde de votre fichier original."
      },
      {
        "question": "Puis-je recadrer différentes pages différemment ?",
        "answer": "Oui, vous pouvez appliquer différents paramètres de recadrage à des pages individuelles ou à des groupes de pages."
      },
      {
        "question": "Le recadrage affectera-t-il la qualité du texte ?",
        "answer": "Non, le recadrage ne supprime que les zones en dehors de la limite de recadrage. Le contenu restant conserve sa qualité originale."
      }
    ]
  },
  "extract-pages": {
    "title": "Extraire les pages",
    "metaDescription": "Extrayez des pages spécifiques de fichiers PDF. Sélectionnez et enregistrez des pages individuelles comme nouveaux documents.",
    "keywords": [
      "extraire pages pdf",
      "sauvegarder pages pdf",
      "copier pages pdf",
      "extracteur pages pdf"
    ],
    "description": "\n      <p>Extraire les pages vous permet de sélectionner et d'enregistrer des pages spécifiques d'un document PDF en tant que nouveaux fichiers. C'est parfait pour retirer des sections pertinentes, créer des extraits ou séparer des documents combinés.</p>\n      <p>Vous pouvez extraire des pages individuelles, des plages de pages ou plusieurs pages non consécutives. L'aperçu visuel des pages facilite l'identification et la sélection exacte des pages dont vous avez besoin.</p>\n      <p>Toute l'extraction se fait localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document dont vous souhaitez extraire des pages."
      },
      {
        "step": 2,
        "title": "Sélectionnez les pages",
        "description": "Cliquez sur les vignettes de page pour les sélectionner, ou entrez les numéros de page et les plages dans le champ de saisie."
      },
      {
        "step": 3,
        "title": "Extrayez et téléchargez",
        "description": "Cliquez sur Extraire pour créer un nouveau PDF avec vos pages sélectionnées et téléchargez-le."
      }
    ],
    "useCases": [
      {
        "title": "Créer des extraits",
        "description": "Extrayez des pages pertinentes de rapports ou de livres pour créer des documents de référence ciblés.",
        "icon": "file-minus"
      },
      {
        "title": "Partager du contenu spécifique",
        "description": "Retirez des pages spécifiques pour les partager sans envoyer l'intégralité du document.",
        "icon": "share-2"
      },
      {
        "title": "Archiver des pages importantes",
        "description": "Extrayez et enregistrez les pages clés de documents pour un archivage à long terme.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Puis-je extraire des pages non consécutives ?",
        "answer": "Oui, vous pouvez sélectionner n'importe quelle combinaison de pages, qu'elles soient consécutives ou dispersées dans le document."
      },
      {
        "question": "Les signets seront-ils conservés ?",
        "answer": "Les signets qui pointent vers des pages extraites sont conservés dans le nouveau document."
      },
      {
        "question": "Puis-je extraire des pages de plusieurs PDF ?",
        "answer": "Cet outil fonctionne avec un PDF à la fois. Pour combiner des pages de plusieurs PDF, utilisez l'outil Fusionner PDF."
      }
    ]
  },
  "organize-pdf": {
    "title": "Organiser PDF",
    "metaDescription": "Réorganisez, dupliquez et supprimez des pages PDF. Glissez-déposez pour réorganiser vos documents.",
    "keywords": [
      "organiser pdf",
      "réorganiser pages pdf",
      "arranger pdf",
      "organisateur pages pdf"
    ],
    "description": "\n      <p>Organiser PDF fournit une interface intuitive de glisser-déposer pour réorganiser les pages de vos documents PDF. Changez l'ordre des pages, dupliquez des sections importantes ou supprimez des pages indésirables en toute simplicité.</p>\n      <p>Les vignettes visuelles des pages facilitent l'identification du contenu et l'arrangement des pages exactement comme vous le souhaitez. Parfait pour restructurer des documents, créer des ordres de pages personnalisés ou nettoyer des fichiers numérisés.</p>\n      <p>Toute l'organisation se fait localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document que vous souhaitez organiser."
      },
      {
        "step": 2,
        "title": "Réorganisez les pages",
        "description": "Faites glisser les vignettes de page pour les réorganiser. Cliquez sur les boutons dupliquer ou supprimer sur chaque page selon les besoins."
      },
      {
        "step": 3,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour appliquer vos modifications et téléchargez le PDF réorganisé."
      }
    ],
    "useCases": [
      {
        "title": "Corriger l'ordre des pages",
        "description": "Corrigez l'ordre des pages qui ont été mal numérisées ou combinées.",
        "icon": "arrow-up-down"
      },
      {
        "title": "Créer un ordre personnalisé",
        "description": "Organisez les pages dans une séquence spécifique pour des présentations ou des rapports.",
        "icon": "list"
      },
      {
        "title": "Supprimer les pages indésirables",
        "description": "Supprimez les pages blanches, les doublons ou le contenu non pertinent des documents.",
        "icon": "trash-2"
      }
    ],
    "faq": [
      {
        "question": "Puis-je dupliquer des pages ?",
        "answer": "Oui, vous pouvez dupliquer n'importe quelle page et placer la copie n'importe où dans le document."
      },
      {
        "question": "Y a-t-il une fonction annuler ?",
        "answer": "Oui, vous pouvez annuler et rétablir les modifications. Vous pouvez également réinitialiser à l'ordre original à tout moment."
      },
      {
        "question": "Puis-je organiser plusieurs PDF ensemble ?",
        "answer": "Cet outil fonctionne avec un PDF à la fois. Pour combiner et organiser plusieurs PDF, fusionnez-les d'abord avec l'outil Fusionner PDF."
      }
    ]
  },
  "delete-pages": {
    "title": "Supprimer les pages",
    "metaDescription": "Supprimez les pages indésirables des fichiers PDF. Sélectionnez et supprimez des pages spécifiques facilement.",
    "keywords": [
      "supprimer pages pdf",
      "enlever pages pdf",
      "suppression pages pdf",
      "retirer pages pdf"
    ],
    "description": "\n      <p>Supprimer les pages vous permet de retirer rapidement et facilement les pages indésirables de vos documents PDF. Que vous ayez besoin de supprimer des pages blanches, du contenu obsolète ou des informations sensibles, cet outil simplifie la tâche.</p>\n      <p>Les vignettes visuelles des pages vous aident à identifier exactement quelles pages supprimer. Vous pouvez supprimer des pages individuelles ou plusieurs pages à la fois.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document dont vous souhaitez supprimer des pages."
      },
      {
        "step": 2,
        "title": "Sélectionnez les pages à supprimer",
        "description": "Cliquez sur les vignettes de page pour les marquer pour la suppression, ou entrez les numéros de page dans le champ de saisie."
      },
      {
        "step": 3,
        "title": "Supprimez et téléchargez",
        "description": "Cliquez sur Supprimer pour retirer les pages sélectionnées et téléchargez votre PDF mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Supprimer les pages blanches",
        "description": "Nettoyez les documents en supprimant les pages blanches incluses accidentellement.",
        "icon": "file-x"
      },
      {
        "title": "Supprimer le contenu sensible",
        "description": "Supprimez les pages contenant des informations confidentielles avant de partager les documents.",
        "icon": "shield"
      },
      {
        "title": "Rationaliser les documents",
        "description": "Supprimez les pages obsolètes ou non pertinentes pour créer des documents plus ciblés.",
        "icon": "filter"
      }
    ],
    "faq": [
      {
        "question": "Puis-je récupérer les pages supprimées ?",
        "answer": "La suppression est permanente dans le fichier de sortie. Gardez une sauvegarde de votre document original si vous pourriez avoir besoin des pages plus tard."
      },
      {
        "question": "Puis-je supprimer plusieurs pages à la fois ?",
        "answer": "Oui, vous pouvez sélectionner et supprimer plusieurs pages simultanément."
      },
      {
        "question": "La suppression de pages affectera-t-elle les signets ?",
        "answer": "Les signets pointant vers des pages supprimées seront retirés. Les signets vers les pages restantes sont conservés."
      }
    ]
  },
  "bookmark": {
    "title": "Éditer les signets",
    "metaDescription": "Ajoutez, modifiez, organisez ou supprimez tous les signets PDF. Gérez la navigation du document localement dans votre navigateur.",
    "keywords": [
      "signets pdf",
      "éditer signets",
      "ajouter signets",
      "navigation pdf",
      "table des matières pdf",
      "supprimer tous les signets pdf"
    ],
    "description": "\n      <p>Éditer les signets vous permet de créer, modifier et organiser des signets dans vos documents PDF. Les signets offrent une navigation rapide vers des sections spécifiques, rendant les longs documents plus faciles à utiliser.</p>\n      <p>Vous pouvez ajouter de nouveaux signets, modifier ceux existants, réorganiser la hiérarchie des signets ou importer des signets depuis des sources externes. Cet outil est essentiel pour créer des documents professionnels et navigables.</p>\n      <p>Toute l'édition se fait localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n      <p>Pour tout supprimer, cliquez sur Supprimer tous les signets et confirmez. Enregistrez et téléchargez pour exporter un PDF sans signets.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document que vous souhaitez éditer."
      },
      {
        "step": 2,
        "title": "Gérez les signets",
        "description": "Ajoutez de nouveaux signets, éditez ceux existants ou faites glisser pour réorganiser la hiérarchie. Pour tout supprimer, cliquez sur Supprimer tous les signets et confirmez. Enregistrez et téléchargez pour exporter un PDF sans signets."
      },
      {
        "step": 3,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour appliquer vos modifications et téléchargez le PDF avec les signets mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Créer une navigation",
        "description": "Ajoutez des signets aux longs documents pour aider les lecteurs à naviguer rapidement vers des sections spécifiques.",
        "icon": "navigation"
      },
      {
        "title": "Organiser les chapitres",
        "description": "Créez une structure hiérarchique de signets qui reflète l'organisation des chapitres de votre document.",
        "icon": "book-open"
      },
      {
        "title": "Améliorer l'accessibilité",
        "description": "Ajoutez des signets pour rendre les documents plus accessibles et conviviaux.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Puis-je créer des signets imbriqués ?",
        "answer": "Oui, vous pouvez créer une structure hiérarchique avec des signets parents et enfants."
      },
      {
        "question": "Puis-je importer des signets depuis un fichier ?",
        "answer": "Oui, vous pouvez importer des structures de signets à partir de fichiers JSON ou texte."
      },
      {
        "question": "Les signets fonctionneront-ils dans tous les lecteurs PDF ?",
        "answer": "Oui, les signets sont une fonctionnalité standard PDF prise en charge par tous les principaux lecteurs PDF."
      },
      { "question": "Puis-je supprimer tous les signets en une fois ?", "answer": "Pour tout supprimer, cliquez sur Supprimer tous les signets et confirmez. Enregistrez et téléchargez pour exporter un PDF sans signets." }
    ]
  },
  "table-of-contents": {
    "title": "Table des matières",
    "metaDescription": "Générez une table des matières pour votre PDF. Créez une navigation cliquable à partir des signets.",
    "keywords": [
      "table des matières pdf",
      "générateur sommaire",
      "index pdf",
      "navigation document"
    ],
    "description": "\n      <p>Table des matières génère une page de sommaire navigable pour vos documents PDF. La TDM peut être créée à partir de signets existants ou d'entrées personnalisées, offrant aux lecteurs une vue d'ensemble et une navigation rapide.</p>\n      <p>Personnalisez l'apparence avec différents styles, polices et mises en page. La table des matières générée inclut des liens cliquables qui sautent directement aux pages référencées.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Configurez la TDM",
        "description": "Choisissez de générer à partir des signets ou de créer des entrées personnalisées. Sélectionnez les options de style et de positionnement."
      },
      {
        "step": 3,
        "title": "Générez et téléchargez",
        "description": "Cliquez sur Générer pour créer la table des matières et téléchargez votre PDF mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Travaux académiques",
        "description": "Ajoutez une table des matières professionnelle aux thèses, mémoires et articles de recherche.",
        "icon": "graduation-cap"
      },
      {
        "title": "Rapports d'entreprise",
        "description": "Créez des rapports navigables avec des listes de sections claires pour les parties prenantes.",
        "icon": "bar-chart"
      },
      {
        "title": "Manuels d'utilisation",
        "description": "Générez des TDM complètes pour la documentation technique et les guides d'utilisation.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Puis-je personnaliser l'apparence de la TDM ?",
        "answer": "Oui, vous pouvez choisir parmi différents styles, polices et mises en page pour votre table des matières."
      },
      {
        "question": "Où la TDM est-elle insérée ?",
        "answer": "Par défaut, la TDM est insérée au début du document, mais vous pouvez choisir un emplacement différent."
      },
      {
        "question": "Les entrées de la TDM sont-elles cliquables ?",
        "answer": "Oui, chaque entrée est un lien cliquable qui navigue vers la page correspondante."
      }
    ]
  },
  "page-numbers": {
    "title": "Numéros de page",
    "metaDescription": "Ajoutez des numéros de page aux documents PDF. Personnalisez la position, le format et le numéro de départ.",
    "keywords": [
      "ajouter numéros page",
      "numéros page pdf",
      "numéroter pages pdf",
      "pagination pdf"
    ],
    "description": "\n      <p>Numéros de page ajoute une pagination personnalisable à vos documents PDF. Choisissez parmi divers formats, positions et styles pour correspondre au design de votre document.</p>\n      <p>Vous pouvez définir le numéro de départ, sauter certaines pages et utiliser différents formats de numérotation (1, 2, 3 ou i, ii, iii). Parfait pour créer des documents professionnels avec une pagination correcte.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Configurez la numérotation",
        "description": "Choisissez la position, le format, le numéro de départ et les pages à numéroter."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Cliquez sur Appliquer pour ajouter les numéros de page et téléchargez votre PDF mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Documents professionnels",
        "description": "Ajoutez des numéros de page aux rapports, propositions et documents commerciaux.",
        "icon": "file-text"
      },
      {
        "title": "Travaux académiques",
        "description": "Numérotez les pages selon les exigences de formatage académique.",
        "icon": "graduation-cap"
      },
      {
        "title": "Documents juridiques",
        "description": "Ajoutez une pagination correcte aux contrats et dossiers juridiques.",
        "icon": "scale"
      }
    ],
    "faq": [
      {
        "question": "Puis-je sauter la première page ?",
        "answer": "Oui, vous pouvez spécifier quelles pages numéroter et lesquelles sauter, comme les pages de titre ou de couverture."
      },
      {
        "question": "Quels formats de numéros sont disponibles ?",
        "answer": "Vous pouvez utiliser des chiffres arabes (1, 2, 3), des chiffres romains (i, ii, iii ou I, II, III) ou des lettres (a, b, c)."
      },
      {
        "question": "Puis-je ajouter le format \"Page X sur Y\" ?",
        "answer": "Oui, vous pouvez inclure le nombre total de pages dans votre format de numérotation."
      }
    ]
  },
  "add-watermark": {
    "title": "Ajouter un filigrane",
    "metaDescription": "Ajoutez des filigranes texte ou image aux fichiers PDF. Protégez et marquez vos documents.",
    "keywords": [
      "ajouter filigrane",
      "filigrane pdf",
      "tamponner pdf",
      "marque pdf",
      "protéger pdf"
    ],
    "description": "\n      <p>Ajouter un filigrane vous permet de placer des filigranes texte ou image sur vos documents PDF. Les filigranes peuvent indiquer le statut du document (Brouillon, Confidentiel), ajouter une marque ou dissuader la copie non autorisée.</p>\n      <p>Personnalisez la position, la taille, l'opacité, la rotation et la couleur du filigrane. Appliquez à toutes les pages ou sélectionnez des pages spécifiques. L'outil prend en charge à la fois les filigranes textuels et les filigranes images.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Créez le filigrane",
        "description": "Entrez le texte ou téléchargez une image pour votre filigrane. Ajustez la position, la taille, l'opacité et la rotation."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Cliquez sur Appliquer pour ajouter le filigrane et téléchargez votre PDF mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Protection de document",
        "description": "Ajoutez des filigranes \"Confidentiel\" ou \"Brouillon\" pour indiquer le statut du document.",
        "icon": "shield"
      },
      {
        "title": "Marquer les documents",
        "description": "Ajoutez des logos ou noms d'entreprise aux documents officiels.",
        "icon": "award"
      },
      {
        "title": "Avis de droit d'auteur",
        "description": "Ajoutez des informations de copyright pour protéger la propriété intellectuelle.",
        "icon": "copyright"
      }
    ],
    "faq": [
      {
        "question": "Puis-je utiliser une image comme filigrane ?",
        "answer": "Oui, vous pouvez télécharger des images PNG, JPG ou SVG pour les utiliser comme filigranes."
      },
      {
        "question": "Puis-je rendre le filigrane semi-transparent ?",
        "answer": "Oui, vous pouvez ajuster l'opacité de totalement transparent à totalement opaque."
      },
      {
        "question": "Puis-je appliquer différents filigranes à différentes pages ?",
        "answer": "L'outil applique le même filigrane aux pages sélectionnées. Pour des filigranes différents, traitez le document plusieurs fois."
      }
    ]
  },
  "header-footer": {
    "title": "En-tête et pied de page",
    "metaDescription": "Ajoutez des en-têtes et pieds de page aux documents PDF. Incluez des numéros de page, dates et texte personnalisé.",
    "keywords": [
      "en-tête pdf",
      "pied de page pdf",
      "ajouter en-tête",
      "lettre à en-tête pdf"
    ],
    "description": "\n      <p>En-tête et pied de page ajoute des en-têtes et pieds de page personnalisables à vos documents PDF. Incluez des numéros de page, des dates, des titres de document ou tout texte personnalisé dans les zones d'en-tête ou de pied de page.</p>\n      <p>Positionnez le contenu à gauche, au centre ou à droite. Utilisez un contenu différent pour les pages impaires et paires si nécessaire. Parfait pour créer des documents professionnels avec une mise en forme cohérente.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Configurez l'en-tête/pied de page",
        "description": "Entrez le texte pour les zones d'en-tête et de pied de page. Ajoutez des numéros de page, dates ou texte personnalisé."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Cliquez sur Appliquer pour ajouter les en-têtes/pieds de page et téléchargez votre PDF mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Documents d'affaires",
        "description": "Ajoutez le nom de l'entreprise et les numéros de page aux documents professionnels.",
        "icon": "briefcase"
      },
      {
        "title": "Documents juridiques",
        "description": "Incluez des numéros de dossier, des dates et des références de page dans les documents juridiques.",
        "icon": "scale"
      },
      {
        "title": "Travaux académiques",
        "description": "Ajoutez des en-têtes courants avec le titre du document et le nom de l'auteur.",
        "icon": "graduation-cap"
      }
    ],
    "faq": [
      {
        "question": "Puis-je avoir des en-têtes différents sur les pages impaires et paires ?",
        "answer": "Oui, vous pouvez configurer un contenu différent pour les pages impaires et paires."
      },
      {
        "question": "Puis-je inclure la date actuelle ?",
        "answer": "Oui, vous pouvez insérer des champs de date dynamiques qui affichent la date actuelle."
      },
      {
        "question": "Puis-je sauter l'en-tête/pied de page sur certaines pages ?",
        "answer": "Oui, vous pouvez spécifier quelles pages doivent avoir des en-têtes/pieds de page et lesquelles doivent être sautées."
      }
    ]
  },
  "invert-colors": {
    "title": "Inverser les couleurs",
    "metaDescription": "Inversez les couleurs PDF pour la lecture en mode sombre. Convertissez les documents en couleurs négatives.",
    "keywords": [
      "inverser couleurs pdf",
      "mode sombre pdf",
      "pdf négatif",
      "inverser couleurs"
    ],
    "description": "\n      <p>Inverser les couleurs inverse les couleurs de vos documents PDF, créant un effet d'image négative. C'est particulièrement utile pour créer des versions en mode sombre des documents pour une lecture plus facile dans des conditions de faible luminosité.</p>\n      <p>L'outil peut inverser tout le contenu ou préserver sélectivement certains éléments comme les images. Parfait pour réduire la fatigue oculaire lors de la lecture de documents la nuit.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Configurez les options",
        "description": "Choisissez d'inverser tout le contenu ou de préserver les images."
      },
      {
        "step": 3,
        "title": "Inversez et téléchargez",
        "description": "Cliquez sur Inverser pour traiter le document et télécharger le résultat."
      }
    ],
    "useCases": [
      {
        "title": "Lecture nocturne",
        "description": "Créez des versions en mode sombre des documents pour une lecture confortable la nuit.",
        "icon": "moon"
      },
      {
        "title": "Réduire la fatigue oculaire",
        "description": "Inversez les documents lumineux pour réduire la fatigue oculaire lors d'une lecture prolongée.",
        "icon": "eye"
      },
      {
        "title": "Économies d'impression",
        "description": "Inversez les documents pour réduire l'utilisation d'encre lors de l'impression de brouillons.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Les images seront-elles inversées aussi ?",
        "answer": "Par défaut, oui. Vous pouvez choisir de préserver les images originales tout en inversant le texte et les arrière-plans."
      },
      {
        "question": "Puis-je inverser uniquement des pages spécifiques ?",
        "answer": "Oui, vous pouvez sélectionner quelles pages inverser."
      },
      {
        "question": "L'inversion est-elle réversible ?",
        "answer": "Vous pouvez inverser le document à nouveau pour revenir approximativement aux couleurs originales."
      }
    ]
  },
  "background-color": {
    "title": "Couleur d'arrière-plan",
    "metaDescription": "Changez la couleur d'arrière-plan du PDF. Ajoutez des arrière-plans colorés aux pages du document.",
    "keywords": [
      "couleur fond pdf",
      "changer fond pdf",
      "pdf coloré",
      "couleur page pdf"
    ],
    "description": "\n      <p>Couleur d'arrière-plan vous permet de changer ou d'ajouter des couleurs d'arrière-plan à vos pages PDF. Cela peut améliorer la lisibilité, ajouter un intérêt visuel ou correspondre à vos exigences de marque.</p>\n      <p>Choisissez n'importe quelle couleur pour l'arrière-plan et appliquez-la à toutes les pages ou aux pages sélectionnées. L'outil préserve tout le contenu existant tout en ajoutant la couche d'arrière-plan.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Choisissez la couleur",
        "description": "Sélectionnez une couleur d'arrière-plan à l'aide du sélecteur de couleurs ou entrez un code hexadécimal."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Cliquez sur Appliquer pour ajouter l'arrière-plan et téléchargez votre PDF mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Améliorer la lisibilité",
        "description": "Ajoutez un arrière-plan crème clair ou sépia pour réduire la fatigue oculaire.",
        "icon": "eye"
      },
      {
        "title": "Marquer les documents",
        "description": "Utilisez les couleurs de la marque comme arrière-plans pour les supports marketing.",
        "icon": "palette"
      },
      {
        "title": "Mettre en évidence des sections",
        "description": "Utilisez différentes couleurs d'arrière-plan pour distinguer les sections du document.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "L'arrière-plan couvrira-t-il le contenu existant ?",
        "answer": "Non, l'arrière-plan est ajouté derrière le contenu existant, préservant tout le texte et les images."
      },
      {
        "question": "Puis-je utiliser différentes couleurs pour différentes pages ?",
        "answer": "Vous devrez traiter le document plusieurs fois pour avoir différentes couleurs sur différentes pages."
      },
      {
        "question": "Puis-je supprimer un arrière-plan existant ?",
        "answer": "Cet outil ajoute des arrière-plans. Pour supprimer des arrière-plans, vous devrez peut-être utiliser l'outil Éditer PDF."
      }
    ]
  },
  "text-color": {
    "title": "Changer la couleur du texte",
    "metaDescription": "Changez la couleur du texte dans les documents PDF. Modifiez la couleur de tout le contenu textuel.",
    "keywords": [
      "changer couleur texte pdf",
      "couleur texte pdf",
      "modifier couleur texte",
      "recolorer texte pdf"
    ],
    "description": "\n      <p>Changer la couleur du texte vous permet de modifier la couleur du texte dans vos documents PDF. C'est utile pour améliorer le contraste, correspondre à la marque ou créer des variations visuelles de documents.</p>\n      <p>Sélectionnez une nouvelle couleur et appliquez-la à tout le texte du document. L'outil traite les éléments textuels tout en préservant les images et autres contenus.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Choisissez la couleur",
        "description": "Sélectionnez une nouvelle couleur de texte à l'aide du sélecteur de couleurs ou entrez un code hexadécimal."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Cliquez sur Appliquer pour changer la couleur du texte et téléchargez votre PDF mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Améliorer le contraste",
        "description": "Changez la couleur du texte pour améliorer la lisibilité par rapport à l'arrière-plan.",
        "icon": "contrast"
      },
      {
        "title": "Cohérence de marque",
        "description": "Mettez à jour les couleurs du texte pour correspondre aux directives de la marque.",
        "icon": "palette"
      },
      {
        "title": "Accessibilité",
        "description": "Ajustez les couleurs du texte pour répondre aux exigences de contraste d'accessibilité.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Tout le texte sera-t-il modifié ?",
        "answer": "Oui, l'outil change la couleur de tous les éléments textuels du document."
      },
      {
        "question": "Puis-je changer uniquement un texte spécifique ?",
        "answer": "Cet outil change tout le texte. Pour des changements sélectifs, utilisez l'outil Éditer PDF."
      },
      {
        "question": "Le texte formaté (gras, italique) sera-t-il préservé ?",
        "answer": "Oui, le formatage du texte est préservé ; seule la couleur est modifiée."
      }
    ]
  },
  "add-stamps": {
    "title": "Ajouter des tampons",
    "metaDescription": "Ajoutez des tampons aux documents PDF. Utilisez des tampons prédéfinis ou personnalisés pour l'approbation, la révision et plus encore.",
    "keywords": [
      "tampons pdf",
      "ajouter tampon",
      "tampon approbation",
      "cachet pdf"
    ],
    "description": "\n      <p>Ajouter des tampons vous permet de placer des images de tampon sur vos documents PDF. Utilisez des tampons prédéfinis comme \"Approuvé\", \"Rejeté\", \"Brouillon\", ou téléchargez des images de tampon personnalisées.</p>\n      <p>Positionnez les tampons n'importe où sur la page, redimensionnez-les et appliquez-les à une ou plusieurs pages. Parfait pour les flux de travail documentaires, les approbations et les indicateurs de statut.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Sélectionnez le tampon",
        "description": "Choisissez un tampon prédéfini ou téléchargez une image de tampon personnalisée."
      },
      {
        "step": 3,
        "title": "Positionnez et appliquez",
        "description": "Cliquez pour placer le tampon, ajustez la position et la taille, puis téléchargez."
      }
    ],
    "useCases": [
      {
        "title": "Approbation de documents",
        "description": "Ajoutez des tampons \"Approuvé\" ou \"Rejeté\" aux documents dans les flux de révision.",
        "icon": "check-circle"
      },
      {
        "title": "Indication de statut",
        "description": "Marquez les documents comme \"Brouillon\", \"Final\" ou \"Confidentiel\".",
        "icon": "tag"
      },
      {
        "title": "Contrôle qualité",
        "description": "Ajoutez des tampons QC pour indiquer l'inspection ou l'achèvement de la révision.",
        "icon": "clipboard-check"
      }
    ],
    "faq": [
      {
        "question": "Quels tampons prédéfinis sont disponibles ?",
        "answer": "Les préréglages incluent Approuvé, Rejeté, Brouillon, Final, Confidentiel, Copie, et plus encore."
      },
      {
        "question": "Puis-je télécharger des tampons personnalisés ?",
        "answer": "Oui, vous pouvez télécharger des images PNG ou JPG pour les utiliser comme tampons personnalisés."
      },
      {
        "question": "Puis-je ajouter plusieurs tampons à un document ?",
        "answer": "Oui, vous pouvez ajouter plusieurs tampons et positionner chacun indépendamment."
      }
    ]
  },
  "remove-annotations": {
    "title": "Supprimer les annotations",
    "metaDescription": "Supprimez les annotations des fichiers PDF. Effacez les commentaires, surlignages et marquages.",
    "keywords": [
      "supprimer annotations pdf",
      "effacer commentaires",
      "enlever surlignage",
      "nettoyer pdf"
    ],
    "description": "\n      <p>Supprimer les annotations retire les commentaires, surlignages, notes autocollantes et autres annotations de vos documents PDF. Cela crée une version propre du document sans marquage.</p>\n      <p>Vous pouvez supprimer toutes les annotations ou supprimer sélectivement des types spécifiques. Parfait pour créer des versions finales de documents révisés ou supprimer des commentaires sensibles.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Sélectionnez les types d'annotations",
        "description": "Choisissez quels types d'annotations supprimer : commentaires, surlignages, liens, etc."
      },
      {
        "step": 3,
        "title": "Supprimez et téléchargez",
        "description": "Cliquez sur Supprimer pour retirer les annotations et téléchargez le PDF propre."
      }
    ],
    "useCases": [
      {
        "title": "Finaliser les documents",
        "description": "Supprimez les commentaires de révision et les marquages avant de publier les documents finaux.",
        "icon": "file-check"
      },
      {
        "title": "Protection de la vie privée",
        "description": "Supprimez les commentaires pouvant contenir des informations sensibles avant de partager.",
        "icon": "shield"
      },
      {
        "title": "Distribution propre",
        "description": "Créez des copies propres de documents annotés pour la distribution.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Quels types d'annotations peuvent être supprimés ?",
        "answer": "Les commentaires, surlignages, soulignements, barrés, notes autocollantes, tampons et liens peuvent tous être supprimés."
      },
      {
        "question": "Puis-je conserver certaines annotations ?",
        "answer": "Oui, vous pouvez sélectionner quels types d'annotations supprimer et lesquels conserver."
      },
      {
        "question": "Est-ce réversible ?",
        "answer": "Non, la suppression des annotations est permanente. Gardez une sauvegarde de l'original si nécessaire."
      }
    ]
  },
  "form-filler": {
    "title": "Remplir un formulaire",
    "metaDescription": "Remplissez des formulaires PDF en ligne. Complétez des formulaires PDF interactifs sans imprimer.",
    "keywords": [
      "remplir formulaire pdf",
      "remplisseur pdf",
      "compléter pdf",
      "pdf interactif"
    ],
    "description": "\n      <p>Remplir un formulaire vous permet de compléter des formulaires PDF interactifs directement dans votre navigateur. Remplissez des champs de texte, cochez des cases, sélectionnez des options et ajoutez des signatures sans imprimer le document.</p>\n      <p>L'outil prend en charge les formulaires PDF standard et les formulaires XFA. Vos données remplies peuvent être enregistrées et le formulaire peut être aplati pour empêcher toute modification ultérieure.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que les données de votre formulaire restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre formulaire PDF",
        "description": "Glissez-déposez votre formulaire PDF ou cliquez pour sélectionner le fichier."
      },
      {
        "step": 2,
        "title": "Remplissez le formulaire",
        "description": "Cliquez sur les champs du formulaire pour saisir du texte, cocher des cases ou sélectionner des options."
      },
      {
        "step": 3,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour préserver vos entrées et téléchargez le formulaire rempli."
      }
    ],
    "useCases": [
      {
        "title": "Formulaires de candidature",
        "description": "Complétez des candidatures d'emploi, des demandes de permis et des formulaires d'inscription.",
        "icon": "clipboard"
      },
      {
        "title": "Formulaires fiscaux",
        "description": "Remplissez des documents fiscaux et des formulaires financiers électroniquement.",
        "icon": "file-text"
      },
      {
        "title": "Contrats",
        "description": "Complétez des formulaires de contrat avec vos informations avant de signer.",
        "icon": "file-signature"
      }
    ],
    "faq": [
      {
        "question": "Puis-je enregistrer ma progression ?",
        "answer": "Oui, vous pouvez enregistrer des formulaires partiellement remplis et continuer plus tard."
      },
      {
        "question": "Qu'est-ce que l'aplatissement de formulaire ?",
        "answer": "L'aplatissement convertit les champs de formulaire en contenu statique, empêchant toute modification ultérieure."
      },
      {
        "question": "Les formulaires XFA sont-ils pris en charge ?",
        "answer": "Oui, l'outil prend en charge à la fois les AcroForms standard et les formulaires XFA."
      }
    ]
  },
  "form-creator": {
    "title": "Créateur de formulaire",
    "metaDescription": "Créez des formulaires PDF remplissables. Ajoutez des champs de texte, des cases à cocher et des listes déroulantes.",
    "keywords": [
      "créer formulaire pdf",
      "créateur pdf",
      "pdf remplissable",
      "ajouter champs formulaire"
    ],
    "description": "\n      <p>Créateur de formulaire transforme des documents PDF statiques en formulaires remplissables interactifs. Ajoutez des champs de texte, des cases à cocher, des boutons radio, des listes déroulantes et plus encore pour créer des formulaires professionnels.</p>\n      <p>Glissez-déposez des éléments de formulaire sur votre document, configurez les propriétés des champs et créez des formulaires qui peuvent être remplis électroniquement. Parfait pour créer des candidatures, des sondages et des formulaires de collecte de données.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document à convertir en formulaire."
      },
      {
        "step": 2,
        "title": "Ajoutez des champs de formulaire",
        "description": "Sélectionnez des types de champs dans la barre d'outils et cliquez pour les placer sur le document."
      },
      {
        "step": 3,
        "title": "Configurez et sauvegardez",
        "description": "Définissez les propriétés des champs, puis sauvegardez et téléchargez votre formulaire PDF remplissable."
      }
    ],
    "useCases": [
      {
        "title": "Formulaires de candidature",
        "description": "Créez des candidatures d'emploi, des formulaires d'adhésion et des inscriptions remplissables.",
        "icon": "user-plus"
      },
      {
        "title": "Sondages",
        "description": "Construisez des sondages interactifs et des questionnaires pour la collecte de données.",
        "icon": "clipboard-list"
      },
      {
        "title": "Bons de commande",
        "description": "Créez des bons de commande produits avec des champs de quantité et des cases à cocher.",
        "icon": "shopping-cart"
      }
    ],
    "faq": [
      {
        "question": "Quels types de champs puis-je ajouter ?",
        "answer": "Champs de texte, cases à cocher, boutons radio, listes déroulantes, sélecteurs de date et champs de signature."
      },
      {
        "question": "Puis-je rendre des champs obligatoires ?",
        "answer": "Oui, vous pouvez marquer des champs comme obligatoires et ajouter des règles de validation."
      },
      {
        "question": "Puis-je ajouter des calculs ?",
        "answer": "Des calculs de base comme la somme et la moyenne peuvent être ajoutés aux champs numériques."
      }
    ]
  },
  "remove-blank-pages": {
    "title": "Supprimer les pages blanches",
    "metaDescription": "Détectez et supprimez automatiquement les pages blanches des documents PDF.",
    "keywords": [
      "supprimer pages blanches",
      "supprimer pages vides",
      "nettoyer pdf",
      "effacer pages blanches pdf"
    ],
    "description": "\n      <p>Supprimer les pages blanches détecte et supprime automatiquement les pages vides de vos documents PDF. C'est utile pour nettoyer des documents numérisés, supprimer des pages de séparation ou éliminer des pages blanches incluses accidentellement.</p>\n      <p>L'outil utilise une détection intelligente pour identifier les pages vraiment blanches tout en préservant les pages avec un contenu minimal. Vous pouvez ajuster le seuil de sensibilité pour contrôler ce qui compte comme \"blanc\".</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document."
      },
      {
        "step": 2,
        "title": "Ajustez le seuil",
        "description": "Définissez le seuil de détection de blanc si nécessaire (la valeur par défaut fonctionne pour la plupart des documents)."
      },
      {
        "step": 3,
        "title": "Supprimez et téléchargez",
        "description": "Cliquez sur Supprimer pour effacer les pages blanches et téléchargez le PDF nettoyé."
      }
    ],
    "useCases": [
      {
        "title": "Nettoyer les documents numérisés",
        "description": "Supprimez les pages blanches des documents numérisés par lots.",
        "icon": "scan"
      },
      {
        "title": "Supprimer les séparateurs",
        "description": "Supprimez les pages de séparation blanches des documents fusionnés.",
        "icon": "minus"
      },
      {
        "title": "Réduire la taille du fichier",
        "description": "Supprimez les pages blanches inutiles pour réduire la taille du document.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Comment fonctionne la détection de blanc ?",
        "answer": "L'outil analyse le contenu de la page et considère les pages avec un contenu visible minimal ou nul comme blanches."
      },
      {
        "question": "Puis-je prévisualiser les pages qui seront supprimées ?",
        "answer": "Oui, les pages blanches détectées sont mises en évidence pour révision avant suppression."
      },
      {
        "question": "Et si une page a seulement un en-tête/pied de page ?",
        "answer": "Vous pouvez ajuster le seuil pour déterminer si les pages avec un contenu minimal doivent être considérées comme blanches."
      }
    ]
  },
  "image-to-pdf": {
    "title": "Image en PDF",
    "metaDescription": "Convertissez n'importe quelle image en PDF. Prise en charge des formats JPG, PNG, WebP, BMP, TIFF, SVG et HEIC.",
    "keywords": [
      "image en pdf",
      "convertir image",
      "photo en pdf",
      "image vers pdf"
    ],
    "description": "\n      <p>Image en PDF convertit des images de n'importe quel format en documents PDF. La prise en charge des formats JPG, PNG, WebP, BMP, TIFF, SVG et HEIC en fait le convertisseur d'images universel.</p>\n      <p>Combinez plusieurs images en un seul PDF, organisez-les dans n'importe quel ordre et personnalisez la taille et l'orientation des pages. Parfait pour créer des albums photo, des archives de documents ou des portfolios.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos images restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les images",
        "description": "Glissez-déposez des images de tout format pris en charge ou cliquez pour sélectionner des fichiers."
      },
      {
        "step": 2,
        "title": "Organisez et configurez",
        "description": "Réorganisez les images et sélectionnez les options de taille de page et d'orientation."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF et télécharger le résultat."
      }
    ],
    "useCases": [
      {
        "title": "Collections de photos",
        "description": "Combinez des photos de diverses sources en un seul album PDF.",
        "icon": "images"
      },
      {
        "title": "Documents multi-formats",
        "description": "Convertissez des images de différents formats en un PDF unifié.",
        "icon": "file-stack"
      },
      {
        "title": "Création d'archives",
        "description": "Créez des archives PDF à partir de collections d'images pour un stockage à long terme.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quels formats d'image sont pris en charge ?",
        "answer": "Les formats JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC et HEIF sont tous pris en charge."
      },
      {
        "question": "Puis-je mélanger différents formats d'images ?",
        "answer": "Oui, vous pouvez combiner des images de différents formats en un seul PDF."
      },
      {
        "question": "La qualité de l'image sera-t-elle préservée ?",
        "answer": "Oui, les images sont intégrées à leur qualité originale à moins que vous ne choisissiez de les compresser."
      }
    ]
  },
  "png-to-pdf": {
    "title": "PNG en PDF",
    "metaDescription": "Convertissez des images PNG en PDF. Préservez la transparence et combinez plusieurs fichiers PNG.",
    "keywords": [
      "png en pdf",
      "convertir png",
      "convertisseur png",
      "image transparente en pdf"
    ],
    "description": "\n      <p>PNG en PDF convertit vos images PNG en documents PDF tout en préservant la transparence. Parfait pour les graphiques, logos, captures d'écran et images avec arrière-plans transparents.</p>\n      <p>Combinez plusieurs fichiers PNG en un seul PDF, organisez-les dans n'importe quel ordre et personnalisez les paramètres de page. La conversion maintient la haute qualité de vos images originales.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos images restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les fichiers PNG",
        "description": "Glissez-déposez vos images PNG ou cliquez pour sélectionner des fichiers."
      },
      {
        "step": 2,
        "title": "Organisez et configurez",
        "description": "Réorganisez les images et sélectionnez les options de taille de page."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Portfolio graphique",
        "description": "Compilez des graphiques PNG et des conceptions en un portfolio professionnel.",
        "icon": "palette"
      },
      {
        "title": "Documentation de capture d'écran",
        "description": "Convertissez des captures d'écran en documentation PDF.",
        "icon": "monitor"
      },
      {
        "title": "Collections de logos",
        "description": "Créez des catalogues PDF de logos et d'actifs de marque.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "La transparence est-elle préservée ?",
        "answer": "La transparence PNG est préservée dans la sortie PDF."
      },
      {
        "question": "Qu'en est-il des animations PNG ?",
        "answer": "Les PNG animés sont convertis en images statiques utilisant la première image."
      },
      {
        "question": "Puis-je définir une couleur d'arrière-plan ?",
        "answer": "Oui, vous pouvez choisir une couleur d'arrière-plan pour les zones transparentes."
      }
    ]
  },
  "webp-to-pdf": {
    "title": "WebP en PDF",
    "metaDescription": "Convertissez des images WebP en PDF. Conversion de format d'image moderne avec préservation de la qualité.",
    "keywords": [
      "webp en pdf",
      "convertir webp",
      "convertisseur webp",
      "image web en pdf"
    ],
    "description": "\n      <p>WebP en PDF convertit les images WebP modernes en documents PDF. WebP est un format d'image web populaire, et cet outil facilite la conversion de ces images pour l'impression ou l'archivage.</p>\n      <p>Combinez plusieurs fichiers WebP en un seul PDF avec des paramètres de page personnalisables. La conversion préserve la qualité de l'image tout en créant des fichiers PDF compacts.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos images restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les fichiers WebP",
        "description": "Glissez-déposez vos images WebP ou cliquez pour sélectionner des fichiers."
      },
      {
        "step": 2,
        "title": "Configurez les options",
        "description": "Organisez les images et sélectionnez la taille et l'orientation de la page."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF."
      }
    ],
    "useCases": [
      {
        "title": "Archivage de contenu Web",
        "description": "Convertissez des images web en PDF pour un archivage hors ligne.",
        "icon": "globe"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Convertissez des images WebP en PDF à des fins d'impression.",
        "icon": "printer"
      },
      {
        "title": "Standardisation de format",
        "description": "Convertissez le WebP moderne en PDF universellement compatible.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que le format WebP ?",
        "answer": "WebP est un format d'image moderne développé par Google qui offre une compression supérieure pour les images web."
      },
      {
        "question": "La qualité est-elle préservée ?",
        "answer": "Oui, la conversion préserve la qualité originale de l'image."
      },
      {
        "question": "Puis-je convertir des WebP animés ?",
        "answer": "Les fichiers WebP animés sont convertis en images statiques."
      }
    ]
  },
  "svg-to-pdf": {
    "title": "SVG en PDF",
    "metaDescription": "Convertissez des graphiques vectoriels SVG en PDF. Préservez l'évolutivité et la qualité.",
    "keywords": [
      "svg en pdf",
      "convertir svg",
      "vecteur en pdf",
      "graphique évolutif en pdf"
    ],
    "description": "\n      <p>SVG en PDF convertit les graphiques vectoriels évolutifs en documents PDF tout en préservant leur qualité vectorielle. Les fichiers SVG restent nets à n'importe quelle taille, et cette qualité est maintenue dans la sortie PDF.</p>\n      <p>Parfait pour convertir des logos, icônes, illustrations et dessins techniques. Le PDF résultant maintient l'évolutivité des graphiques vectoriels originaux.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos fichiers restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les fichiers SVG",
        "description": "Glissez-déposez vos fichiers SVG ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurez les paramètres",
        "description": "Sélectionnez les options de taille de page et d'arrangement."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF vectoriel."
      }
    ],
    "useCases": [
      {
        "title": "Conversion de logo",
        "description": "Convertissez des logos SVG en PDF pour les supports d'impression.",
        "icon": "award"
      },
      {
        "title": "Dessins techniques",
        "description": "Convertissez des exports CAO et des illustrations techniques en PDF.",
        "icon": "ruler"
      },
      {
        "title": "Collections d'icônes",
        "description": "Créez des catalogues PDF d'ensembles d'icônes et de graphiques.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "La qualité vectorielle est-elle préservée ?",
        "answer": "Oui, la qualité vectorielle SVG est entièrement préservée dans la sortie PDF."
      },
      {
        "question": "Puis-je convertir des SVG complexes ?",
        "answer": "Oui, les SVG complexes avec dégradés, filtres et effets sont pris en charge."
      },
      {
        "question": "Qu'en est-il des polices intégrées ?",
        "answer": "Les polices intégrées dans les fichiers SVG sont préservées dans le PDF."
      }
    ]
  },
  "bmp-to-pdf": {
    "title": "BMP en PDF",
    "metaDescription": "Convertissez des images bitmap BMP en PDF. Prise en charge des formats hérités avec préservation de la qualité.",
    "keywords": [
      "bmp en pdf",
      "convertir bmp",
      "bitmap en pdf",
      "convertisseur bmp"
    ],
    "description": "\n      <p>BMP en PDF convertit les images bitmap en documents PDF. BMP est un format d'image hérité couramment utilisé dans les environnements Windows, et cet outil facilite la conversion de ces fichiers au format PDF moderne.</p>\n      <p>Combinez plusieurs fichiers BMP en un seul PDF avec des paramètres personnalisables. La conversion compresse les fichiers BMP généralement volumineux tout en maintenant la qualité de l'image.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos images restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les fichiers BMP",
        "description": "Glissez-déposez vos images BMP ou cliquez pour sélectionner des fichiers."
      },
      {
        "step": 2,
        "title": "Configurez les options",
        "description": "Organisez les images et sélectionnez les paramètres de page."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF."
      }
    ],
    "useCases": [
      {
        "title": "Conversion de fichiers hérités",
        "description": "Convertissez d'anciens fichiers BMP au format PDF moderne.",
        "icon": "history"
      },
      {
        "title": "Captures d'écran Windows",
        "description": "Convertissez des captures d'écran bitmap Windows en PDF.",
        "icon": "monitor"
      },
      {
        "title": "Modernisation d'archives",
        "description": "Mettez à jour les archives d'images héritées au format PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "La taille du fichier sera-t-elle réduite ?",
        "answer": "Oui, les fichiers BMP sont généralement compressés de manière significative lorsqu'ils sont convertis en PDF."
      },
      {
        "question": "La qualité est-elle préservée ?",
        "answer": "Oui, la qualité de l'image est maintenue pendant la conversion."
      },
      {
        "question": "Quelles profondeurs de couleur BMP sont prises en charge ?",
        "answer": "Toutes les profondeurs de couleur BMP standard sont prises en charge, y compris 24 bits et 32 bits."
      }
    ]
  },
  "heic-to-pdf": {
    "title": "HEIC en PDF",
    "metaDescription": "Convertissez des photos iPhone HEIC en PDF. Conversion de format d'image Apple facilitée.",
    "keywords": [
      "heic en pdf",
      "convertir heic",
      "photo iphone pdf",
      "image apple pdf"
    ],
    "description": "\n      <p>HEIC en PDF convertit les photos au format HEIC (High Efficiency Image Format) d'Apple en documents PDF. HEIC est le format photo par défaut sur iPhone et iPad, et cet outil facilite le partage de ces photos.</p>\n      <p>Combinez plusieurs photos HEIC en un seul PDF, parfait pour créer des albums photo ou des archives de documents à partir de vos photos iPhone.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos photos restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les fichiers HEIC",
        "description": "Glissez-déposez vos photos HEIC ou cliquez pour sélectionner des fichiers."
      },
      {
        "step": 2,
        "title": "Organisez les photos",
        "description": "Réorganisez les photos et sélectionnez les paramètres de page."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF."
      }
    ],
    "useCases": [
      {
        "title": "Albums photo iPhone",
        "description": "Créez des albums PDF à partir de photos iPhone pour le partage.",
        "icon": "smartphone"
      },
      {
        "title": "Numérisation de documents",
        "description": "Convertissez des scans de documents iPhone au format PDF.",
        "icon": "scan"
      },
      {
        "title": "Partage multi-plateforme",
        "description": "Convertissez HEIC en PDF pour une compatibilité universelle.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que le format HEIC ?",
        "answer": "HEIC (High Efficiency Image Container) est le format d'image d'Apple qui offre une meilleure compression que le JPEG."
      },
      {
        "question": "Les Live Photos sont-elles prises en charge ?",
        "answer": "Les Live Photos sont converties en images statiques utilisant l'image clé."
      },
      {
        "question": "Les données EXIF sont-elles préservées ?",
        "answer": "Les métadonnées photo peuvent être optionnellement préservées ou supprimées lors de la conversion."
      }
    ]
  },
  "tiff-to-pdf": {
    "title": "TIFF en PDF",
    "metaDescription": "Convertissez des images TIFF en PDF. Prise en charge des fichiers TIFF multipages et conversion haute qualité.",
    "keywords": [
      "tiff en pdf",
      "convertir tiff",
      "tif en pdf",
      "tiff multipages"
    ],
    "description": "\n      <p>TIFF en PDF convertit les images TIFF, y compris les fichiers TIFF multipages, en documents PDF. TIFF est couramment utilisé pour les scans de haute qualité et les graphiques professionnels.</p>\n      <p>Les fichiers TIFF multipages sont automatiquement convertis en PDF multipages. La conversion préserve la haute qualité de vos images originales.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos fichiers restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez les fichiers TIFF",
        "description": "Glissez-déposez vos fichiers TIFF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurez les options",
        "description": "Sélectionnez les paramètres de page et les options de compression."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF."
      }
    ],
    "useCases": [
      {
        "title": "Documents numérisés",
        "description": "Convertissez des scans de haute qualité de TIFF en PDF.",
        "icon": "scan"
      },
      {
        "title": "Graphiques professionnels",
        "description": "Convertissez des graphiques TIFF professionnels pour la distribution.",
        "icon": "image"
      },
      {
        "title": "Conversion d'archives",
        "description": "Convertissez des archives TIFF en format PDF plus accessible.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Les TIFF multipages sont-ils pris en charge ?",
        "answer": "Oui, les fichiers TIFF multipages sont convertis en PDF multipages automatiquement."
      },
      {
        "question": "La qualité est-elle préservée ?",
        "answer": "Oui, la qualité TIFF est entièrement préservée dans la sortie PDF."
      },
      {
        "question": "Quelle compression est utilisée ?",
        "answer": "Vous pouvez choisir entre des options de compression sans perte et avec perte."
      }
    ]
  },
  "txt-to-pdf": {
    "title": "Texte en PDF",
    "metaDescription": "Convertissez des fichiers texte brut en PDF. Personnalisez les polices, les marges et la mise en page.",
    "keywords": [
      "txt en pdf",
      "texte en pdf",
      "convertir fichier texte",
      "texte brut en pdf"
    ],
    "description": "\n      <p>Texte en PDF convertit des fichiers texte brut en documents PDF formatés. Personnalisez les polices, les tailles, les marges et la mise en page pour créer des documents d'aspect professionnel à partir de texte simple.</p>\n      <p>Parfait pour convertir des fichiers de code, des journaux, des notes ou tout contenu en texte brut en format PDF partageable.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos fichiers restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez le fichier texte",
        "description": "Glissez-déposez votre fichier .txt ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Personnalisez le formatage",
        "description": "Choisissez la police, la taille, les marges et les paramètres de page."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF formaté."
      }
    ],
    "useCases": [
      {
        "title": "Documentation de code",
        "description": "Convertissez des fichiers de code source en PDF pour la documentation.",
        "icon": "code"
      },
      {
        "title": "Archives de journaux",
        "description": "Convertissez des fichiers journaux en PDF pour l'archivage.",
        "icon": "file-text"
      },
      {
        "title": "Conversion de notes",
        "description": "Convertissez des notes en texte brut en documents PDF formatés.",
        "icon": "sticky-note"
      }
    ],
    "faq": [
      {
        "question": "Quelles polices sont disponibles ?",
        "answer": "Plusieurs polices sont disponibles, y compris des polices à chasse fixe pour le code."
      },
      {
        "question": "Le retour à la ligne est-il automatique ?",
        "answer": "Oui, les longues lignes sont automatiquement renvoyées à la ligne pour s'adapter à la page."
      },
      {
        "question": "Puis-je préserver le formatage ?",
        "answer": "Les espaces et l'indentation du texte original sont préservés."
      }
    ]
  },
  "json-to-pdf": {
    "title": "JSON en PDF",
    "metaDescription": "Convertissez des fichiers JSON en PDF formaté. Coloration syntaxique et sortie structurée.",
    "keywords": [
      "json en pdf",
      "convertir json",
      "visionneuse json",
      "formateur json"
    ],
    "description": "\n      <p>JSON en PDF convertit les fichiers de données JSON en documents PDF formatés et lisibles. La sortie inclut la coloration syntaxique et une indentation correcte pour une lecture facile.</p>\n      <p>Parfait pour documenter les réponses API, les fichiers de configuration ou toute donnée JSON devant être partagée ou archivée dans un format lisible.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos données restent privées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez le fichier JSON",
        "description": "Glissez-déposez votre fichier .json ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurez l'affichage",
        "description": "Choisissez les options de formatage et la coloration syntaxique."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer votre PDF formaté."
      }
    ],
    "useCases": [
      {
        "title": "Documentation API",
        "description": "Convertissez les réponses API en PDF pour la documentation.",
        "icon": "code"
      },
      {
        "title": "Archives de configuration",
        "description": "Archivez les fichiers de configuration en format PDF lisible.",
        "icon": "settings"
      },
      {
        "title": "Rapports de données",
        "description": "Créez des rapports PDF à partir d'exports de données JSON.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "La coloration syntaxique est-elle incluse ?",
        "answer": "Oui, la syntaxe JSON est mise en évidence avec des couleurs pour les clés, les valeurs et les types."
      },
      {
        "question": "Comment les données imbriquées sont-elles gérées ?",
        "answer": "Les objets et tableaux imbriqués sont correctement indentés pour la lisibilité."
      },
      {
        "question": "Qu'en est-il des gros fichiers JSON ?",
        "answer": "Les gros fichiers sont paginés automatiquement sur plusieurs pages."
      }
    ]
  },
  "pdf-to-jpg": {
    "title": "PDF en JPG",
    "metaDescription": "Convertissez des pages PDF en images JPG. Extraction de haute qualité avec résolution personnalisable.",
    "keywords": [
      "pdf en jpg",
      "pdf en jpeg",
      "convertir pdf en image",
      "extraire images pdf"
    ],
    "description": "\n      <p>PDF en JPG convertit les pages de documents PDF en images JPG de haute qualité. Extrayez toutes les pages ou sélectionnez des pages spécifiques à convertir, avec des paramètres de résolution et de qualité personnalisables.</p>\n      <p>Parfait pour extraire des images de PDF, créer des vignettes ou convertir des documents pour une utilisation web.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez pages et qualité",
        "description": "Choisissez quelles pages convertir et définissez les options de qualité/DPI."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour extraire les images et télécharger sous forme de ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Publication Web",
        "description": "Convertissez des pages PDF en images pour une utilisation sur site web.",
        "icon": "globe"
      },
      {
        "title": "Réseaux sociaux",
        "description": "Extrayez des pages sous forme d'images pour le partage sur les réseaux sociaux.",
        "icon": "share-2"
      },
      {
        "title": "Présentations",
        "description": "Convertissez des diapositives PDF en images pour des présentations.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Quels paramètres de qualité sont disponibles ?",
        "answer": "Vous pouvez régler le DPI de 72 à 300 et la qualité JPEG de 1 à 100."
      },
      {
        "question": "Puis-je convertir uniquement des pages spécifiques ?",
        "answer": "Oui, vous pouvez sélectionner des pages individuelles ou des plages de pages à convertir."
      },
      {
        "question": "Comment sont gérées les pages multiples ?",
        "answer": "Chaque page devient un fichier JPG séparé, téléchargé sous forme d'archive ZIP."
      }
    ]
  },
  "pdf-to-png": {
    "title": "PDF en PNG",
    "metaDescription": "Convertissez des pages PDF en images PNG. Qualité sans perte avec prise en charge de la transparence.",
    "keywords": [
      "pdf en png",
      "convertir pdf en png",
      "extraction image pdf",
      "conversion pdf sans perte"
    ],
    "description": "\n      <p>PDF en PNG convertit les pages de documents PDF en images PNG de haute qualité avec une compression sans perte. Le format PNG préserve parfaitement la qualité de l'image et prend en charge la transparence.</p>\n      <p>Idéal pour extraire des graphiques, des diagrammes ou tout contenu où la préservation de la qualité est critique.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurez les options",
        "description": "Sélectionnez les pages et définissez les options de résolution (DPI)."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour extraire les images PNG."
      }
    ],
    "useCases": [
      {
        "title": "Extraction graphique",
        "description": "Extrayez des diagrammes et des graphiques avec une qualité parfaite.",
        "icon": "image"
      },
      {
        "title": "Actifs de conception",
        "description": "Convertissez des conceptions PDF en PNG pour les logiciels d'édition.",
        "icon": "palette"
      },
      {
        "title": "Documentation",
        "description": "Créez des images de haute qualité pour la documentation technique.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Pourquoi choisir PNG plutôt que JPG ?",
        "answer": "PNG offre une compression sans perte et une prise en charge de la transparence, idéal pour les graphiques et le texte."
      },
      {
        "question": "Les arrière-plans transparents sont-ils pris en charge ?",
        "answer": "Oui, les pages PDF avec transparence sont préservées dans la sortie PNG."
      },
      {
        "question": "Quel DPI dois-je utiliser ?",
        "answer": "Utilisez 150 DPI pour l'affichage écran, 300 DPI pour l'impression."
      }
    ]
  },
  "pdf-to-webp": {
    "title": "PDF en WebP",
    "metaDescription": "Convertissez des pages PDF en images WebP. Format moderne avec une excellente compression.",
    "keywords": [
      "pdf en webp",
      "convertir pdf en webp",
      "format image moderne",
      "images optimisées web"
    ],
    "description": "\n      <p>PDF en WebP convertit les pages de documents PDF en images WebP, le format d'image moderne de Google qui offre une excellente compression avec une haute qualité.</p>\n      <p>Les images WebP sont plus petites que JPG ou PNG tout en maintenant une qualité comparable, ce qui les rend idéales pour une utilisation web.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Définissez les options de qualité",
        "description": "Choisissez les pages et définissez les paramètres de qualité/compression."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer les images WebP."
      }
    ],
    "useCases": [
      {
        "title": "Optimisation Web",
        "description": "Créez des images optimisées pour le web à partir du contenu PDF.",
        "icon": "globe"
      },
      {
        "title": "Économies de bande passante",
        "description": "Réduisez la taille des fichiers image pour un chargement plus rapide.",
        "icon": "zap"
      },
      {
        "title": "Sites web modernes",
        "description": "Utilisez des formats d'image modernes pour les projets web contemporains.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que le format WebP ?",
        "answer": "WebP est un format d'image moderne par Google offrant une compression supérieure."
      },
      {
        "question": "Le WebP est-il largement pris en charge ?",
        "answer": "Oui, tous les navigateurs modernes prennent en charge le format WebP."
      },
      {
        "question": "Combien plus petits sont les fichiers WebP ?",
        "answer": "Les fichiers WebP sont généralement 25 à 35% plus petits que les fichiers JPG équivalents."
      }
    ]
  },
  "pdf-to-bmp": {
    "title": "PDF en BMP",
    "metaDescription": "Convertissez des pages PDF en images bitmap BMP. Format non compressé pour une compatibilité maximale.",
    "keywords": [
      "pdf en bmp",
      "convertir pdf en bitmap",
      "images non compressées",
      "format hérité"
    ],
    "description": "\n      <p>PDF en BMP convertit les pages de documents PDF en images bitmap BMP. BMP est un format non compressé qui assure une compatibilité maximale avec les systèmes et applications hérités.</p>\n      <p>Bien que les fichiers BMP soient plus volumineux que les formats compressés, ils offrent une qualité parfaite et une compatibilité universelle.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez les pages",
        "description": "Choisissez quelles pages convertir et définissez le DPI."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer les images BMP."
      }
    ],
    "useCases": [
      {
        "title": "Systèmes hérités",
        "description": "Créez des images compatibles avec d'anciens logiciels.",
        "icon": "history"
      },
      {
        "title": "Applications Windows",
        "description": "Générez des fichiers BMP pour des applications spécifiques à Windows.",
        "icon": "monitor"
      },
      {
        "title": "Archives non compressées",
        "description": "Créez des archives d'images non compressées à partir de PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Pourquoi utiliser le format BMP ?",
        "answer": "BMP offre une qualité non compressée et une compatibilité maximale avec les systèmes hérités."
      },
      {
        "question": "Les fichiers BMP sont-ils plus gros ?",
        "answer": "Oui, les fichiers BMP sont non compressés et significativement plus volumineux que JPG ou PNG."
      },
      {
        "question": "Quelles profondeurs de couleur sont prises en charge ?",
        "answer": "Les profondeurs de couleur 24 bits et 32 bits sont prises en charge."
      }
    ]
  },
  "pdf-to-tiff": {
    "title": "PDF en TIFF",
    "metaDescription": "Convertissez PDF en images TIFF. Qualité professionnelle avec prise en charge multipages.",
    "keywords": [
      "pdf en tiff",
      "convertir pdf en tiff",
      "images professionnelles",
      "tiff multipages"
    ],
    "description": "\n      <p>PDF en TIFF convertit les documents PDF en images TIFF de haute qualité. TIFF est le format préféré pour l'impression professionnelle et l'archivage en raison de sa compression sans perte.</p>\n      <p>Créez des TIFF à page unique ou combinez toutes les pages en un fichier TIFF multipages. Parfait pour des fins professionnelles et archivistiques.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurez la sortie",
        "description": "Choisissez TIFF page unique ou multipages et définissez le DPI."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer les images TIFF."
      }
    ],
    "useCases": [
      {
        "title": "Impression professionnelle",
        "description": "Créez des fichiers TIFF prêts à l'impression à partir de documents PDF.",
        "icon": "printer"
      },
      {
        "title": "Archivage de documents",
        "description": "Archivez des documents en format TIFF de haute qualité.",
        "icon": "archive"
      },
      {
        "title": "Édition",
        "description": "Convertissez des PDF en TIFF pour les flux de travail d'édition.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Puis-je créer des TIFF multipages ?",
        "answer": "Oui, vous pouvez combiner toutes les pages PDF en un seul TIFF multipages."
      },
      {
        "question": "Quelles options de compression sont disponibles ?",
        "answer": "Des options de compression LZW, ZIP et sans compression sont disponibles."
      },
      {
        "question": "Quel DPI dois-je utiliser pour l'impression ?",
        "answer": "Utilisez 300 DPI ou plus pour une impression professionnelle."
      }
    ]
  },
  "pdf-to-greyscale": {
    "title": "PDF en niveaux de gris",
    "metaDescription": "Convertissez un PDF couleur en niveaux de gris. Réduisez la taille du fichier et préparez pour l'impression noir et blanc.",
    "keywords": [
      "pdf en niveaux de gris",
      "pdf noir et blanc",
      "convertir pdf gris",
      "supprimer couleurs"
    ],
    "description": "\n      <p>PDF en niveaux de gris convertit les documents PDF couleur en niveaux de gris (noir et blanc). Cela réduit la taille du fichier et prépare les documents pour l'impression noir et blanc.</p>\n      <p>La conversion préserve la clarté du texte et le détail de l'image tout en supprimant les informations de couleur. Parfait pour l'impression de brouillons ou la création de versions économiques à imprimer.</p>\n      <p>Toute la conversion se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF couleur ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Prévisualisez la conversion",
        "description": "Prévisualisez l'apparence de la version en niveaux de gris."
      },
      {
        "step": 3,
        "title": "Convertissez et téléchargez",
        "description": "Cliquez sur Convertir pour créer le PDF en niveaux de gris."
      }
    ],
    "useCases": [
      {
        "title": "Économies d'impression",
        "description": "Convertissez en niveaux de gris pour économiser sur les coûts d'impression couleur.",
        "icon": "printer"
      },
      {
        "title": "Documents brouillons",
        "description": "Créez des brouillons noir et blanc pour révision.",
        "icon": "file-text"
      },
      {
        "title": "Réduction de la taille du fichier",
        "description": "Réduisez la taille du PDF en supprimant les informations de couleur.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Le texte restera-t-il lisible ?",
        "answer": "Oui, la clarté du texte est préservée lors de la conversion en niveaux de gris."
      },
      {
        "question": "De combien le fichier sera-t-il plus petit ?",
        "answer": "La réduction de taille varie mais peut être de 20 à 50% pour les documents riches en couleurs."
      },
      {
        "question": "Puis-je convertir uniquement des pages spécifiques ?",
        "answer": "Oui, vous pouvez sélectionner quelles pages convertir en niveaux de gris."
      }
    ]
  },
  "pdf-to-json": {
    "title": "PDF en JSON",
    "metaDescription": "Extrayez le contenu PDF au format JSON. Obtenez des données structurées à partir de documents PDF.",
    "keywords": [
      "pdf en json",
      "extraire données pdf",
      "analyseur pdf",
      "données pdf structurées"
    ],
    "description": "\n      <p>PDF en JSON extrait le contenu des documents PDF dans un format JSON structuré. Extrayez le texte, les métadonnées, les informations de page et la structure du document pour une utilisation programmatique.</p>\n      <p>Parfait pour l'extraction de données, l'analyse de documents ou l'intégration de contenu PDF dans des applications et des flux de travail.</p>\n      <p>Toute l'extraction se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez les données à extraire",
        "description": "Choisissez quel contenu extraire : texte, métadonnées, structure."
      },
      {
        "step": 3,
        "title": "Extrayez et téléchargez",
        "description": "Cliquez sur Extraire pour générer le JSON et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Extraction de données",
        "description": "Extrayez des données structurées de documents PDF.",
        "icon": "database"
      },
      {
        "title": "Analyse de document",
        "description": "Analysez la structure et le contenu PDF par programmation.",
        "icon": "search"
      },
      {
        "title": "Intégration",
        "description": "Importez du contenu PDF dans des applications via JSON.",
        "icon": "plug"
      }
    ],
    "faq": [
      {
        "question": "Quelles données sont extraites ?",
        "answer": "Contenu textuel, métadonnées, dimensions de page, polices et structure du document."
      },
      {
        "question": "Le format JSON est-il documenté ?",
        "answer": "Oui, le schéma JSON est cohérent et bien documenté."
      },
      {
        "question": "Puis-je extraire de PDF numérisés ?",
        "answer": "Les PDF numérisés nécessitent un OCR d'abord. Utilisez notre outil OCR PDF avant l'extraction."
      }
    ]
  },
  "ocr-pdf": {
    "title": "PDF ROC",
    "metaDescription": "Rendez les PDF numérisés consultables avec l'OCR. Extrayez le texte d'images et de documents numérisés.",
    "keywords": [
      "ocr pdf\nType",
      "pdf consultable",
      "reconnaissance texte",
      "scan en texte"
    ],
    "description": "\n      <p>OCR PDF utilise la reconnaissance optique de caractères pour extraire le texte de documents numérisés et d'images dans les PDF. Convertissez des PDF basés sur des images en documents texte consultables et sélectionnables.</p>\n      <p>La prise en charge de plusieurs langues assure une reconnaissance précise du texte quelle que soit la langue du document. La mise en page originale est préservée tout en ajoutant une couche de texte consultable.</p>\n      <p>Tout le traitement OCR se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez le PDF numérisé",
        "description": "Glissez-déposez votre PDF numérisé ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez la langue",
        "description": "Choisissez la langue du document pour une reconnaissance précise."
      },
      {
        "step": 3,
        "title": "Traitez et téléchargez",
        "description": "Cliquez sur Traiter pour exécuter l'OCR et téléchargez le PDF consultable."
      }
    ],
    "useCases": [
      {
        "title": "Numériser les archives",
        "description": "Rendez les archives de documents numérisés consultables.",
        "icon": "archive"
      },
      {
        "title": "Recherche documentaire",
        "description": "Activez la recherche textuelle dans les documents numérisés.",
        "icon": "search"
      },
      {
        "title": "Extraction de texte",
        "description": "Extrayez le texte de documents numérisés pour l'édition.",
        "icon": "type"
      }
    ],
    "faq": [
      {
        "question": "Quelles langues sont prises en charge ?",
        "answer": "Plus de 100 langues sont prises en charge, y compris l'anglais, le chinois, le japonais, le coréen et plus encore."
      },
      {
        "question": "La mise en page originale sera-t-elle préservée ?",
        "answer": "Oui, la mise en page visuelle originale est préservée avec une couche de texte consultable ajoutée."
      },
      {
        "question": "Quelle est la précision de l'OCR ?",
        "answer": "La précision dépend de la qualité du scan mais dépasse généralement 95% pour des documents clairs."
      }
    ]
  },
  "alternate-merge": {
    "title": "Fusion alternée",
    "metaDescription": "Fusionnez des PDF en alternant les pages. Combinez des scans recto et verso en un seul document.",
    "keywords": [
      "fusion alternée",
      "entrelacer pdf",
      "combiner scans",
      "fusion recto verso"
    ],
    "description": "\n      <p>Fusion alternée combine deux PDF en entrelaçant leurs pages alternativement. C'est parfait pour combiner des pages recto et verso numérisées séparément en un seul document.</p>\n      <p>Téléchargez deux PDF et l'outil les fusionnera en prenant une page de chaque alternativement. Vous pouvez également inverser l'ordre d'un document pour un balayage verso-recto.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez deux PDF",
        "description": "Téléchargez le PDF des pages recto et le PDF des pages verso."
      },
      {
        "step": 2,
        "title": "Configurez l'ordre",
        "description": "Choisissez d'inverser le second document pour les scans verso-recto."
      },
      {
        "step": 3,
        "title": "Fusionnez et téléchargez",
        "description": "Cliquez sur Fusionner pour entrelacer les pages et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Numérisation duplex",
        "description": "Combinez des pages recto et verso numérisées séparément.",
        "icon": "copy"
      },
      {
        "title": "Assemblage de documents",
        "description": "Entrelacez des pages de deux documents liés.",
        "icon": "layers"
      },
      {
        "title": "Numérisation de livres",
        "description": "Combinez des scans de pages paires et impaires en livres complets.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Et si les documents ont un nombre de pages différent ?",
        "answer": "Les pages supplémentaires du document le plus long sont ajoutées à la fin."
      },
      {
        "question": "Puis-je inverser l'ordre des pages ?",
        "answer": "Oui, vous pouvez inverser l'un ou l'autre document avant la fusion."
      },
      {
        "question": "Est-ce différent de la fusion normale ?",
        "answer": "Oui, la fusion normale ajoute les documents ; la fusion alternée entrelace les pages."
      }
    ]
  },
  "add-attachments": {
    "title": "Ajouter des pièces jointes",
    "metaDescription": "Intégrez des fichiers dans des documents PDF. Joignez n'importe quel type de fichier à vos PDF.",
    "keywords": [
      "pièces jointes pdf",
      "intégrer fichiers",
      "attacher au pdf",
      "portfolio pdf"
    ],
    "description": "\n      <p>Ajouter des pièces jointes intègre des fichiers de n'importe quel type dans vos documents PDF. Joignez des feuilles de calcul, des images, des fichiers sources ou tout autre document pour créer des paquets PDF complets.</p>\n      <p>Les pièces jointes sont intégrées dans le PDF et peuvent être extraites par les destinataires utilisant n'importe quel lecteur PDF. Parfait pour distribuer des fichiers connexes ensemble.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos fichiers restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Ajoutez des pièces jointes",
        "description": "Sélectionnez des fichiers à joindre au PDF."
      },
      {
        "step": 3,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour intégrer les pièces jointes et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Dossiers de projet",
        "description": "Regroupez des fichiers de projet avec des PDF de documentation.",
        "icon": "package"
      },
      {
        "title": "Distribution de rapports",
        "description": "Joignez des fichiers de données sources aux rapports PDF.",
        "icon": "paperclip"
      },
      {
        "title": "Liasses contractuelles",
        "description": "Incluez des documents justificatifs avec les contrats.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Quels types de fichiers peuvent être joints ?",
        "answer": "N'importe quel type de fichier peut être joint à un PDF."
      },
      {
        "question": "Y a-t-il une limite de taille ?",
        "answer": "La taille totale du PDF incluant les pièces jointes ne doit pas dépasser 500 Mo."
      },
      {
        "question": "Les destinataires peuvent-ils extraire les pièces jointes ?",
        "answer": "Oui, n'importe quel lecteur PDF peut extraire les pièces jointes intégrées."
      }
    ]
  },
  "extract-attachments": {
    "title": "Extraire les pièces jointes",
    "metaDescription": "Extrayez les fichiers intégrés des PDF. Téléchargez toutes les pièces jointes des documents PDF.",
    "keywords": [
      "extraire pièces jointes",
      "pièces jointes pdf",
      "télécharger fichiers intégrés",
      "extraction pdf"
    ],
    "description": "\n      <p>Extraire les pièces jointes récupère tous les fichiers intégrés des documents PDF. Téléchargez les pièces jointes individuellement ou sous forme d'archive ZIP contenant tous les fichiers.</p>\n      <p>Parfait pour accéder aux fichiers sources, aux données ou aux documents supplémentaires intégrés dans des paquets PDF.</p>\n      <p>Toute l'extraction se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Voir les pièces jointes",
        "description": "Voyez une liste de tous les fichiers intégrés dans le PDF."
      },
      {
        "step": 3,
        "title": "Extrayez et téléchargez",
        "description": "Téléchargez les fichiers individuels ou tous sous forme de ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Accéder aux fichiers sources",
        "description": "Extrayez les fichiers de données originaux des rapports PDF.",
        "icon": "download"
      },
      {
        "title": "Récupérer les pièces jointes",
        "description": "Récupérez les fichiers intégrés des paquets PDF.",
        "icon": "folder-open"
      },
      {
        "title": "Extraction par lots",
        "description": "Extrayez les pièces jointes de plusieurs PDF à la fois.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "Et s'il n'y a pas de pièces jointes ?",
        "answer": "L'outil indiquera si aucun fichier intégré n'est trouvé."
      },
      {
        "question": "Tous les types de pièces jointes sont-ils pris en charge ?",
        "answer": "Oui, tous les types de fichiers intégrés peuvent être extraits."
      },
      {
        "question": "Puis-je extraire de plusieurs PDF ?",
        "answer": "Oui, vous pouvez traiter plusieurs PDF et télécharger toutes les pièces jointes."
      }
    ]
  },
  "edit-attachments": {
    "title": "Éditer les pièces jointes",
    "metaDescription": "Gérez les pièces jointes PDF. Visualisez, renommez et supprimez les fichiers intégrés.",
    "keywords": [
      "éditer pièces jointes",
      "gérer fichiers pdf",
      "supprimer pièces jointes",
      "renommer pièces jointes"
    ],
    "description": "\n      <p>Éditer les pièces jointes vous permet de gérer les fichiers intégrés dans les documents PDF. Visualisez toutes les pièces jointes, renommez-les ou supprimez les fichiers indésirables du PDF.</p>\n      <p>Parfait pour nettoyer les paquets PDF ou mettre à jour les informations des pièces jointes avant distribution.</p>\n      <p>Toute l'édition se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Gérez les pièces jointes",
        "description": "Visualisez, renommez ou supprimez les fichiers intégrés."
      },
      {
        "step": 3,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour appliquer les modifications et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Nettoyer les PDF",
        "description": "Supprimez les pièces jointes inutiles des paquets PDF.",
        "icon": "trash-2"
      },
      {
        "title": "Renommer les fichiers",
        "description": "Mettez à jour les noms des pièces jointes pour plus de clarté.",
        "icon": "edit"
      },
      {
        "title": "Réviser le contenu",
        "description": "Auditez les fichiers intégrés avant distribution.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Puis-je ajouter de nouvelles pièces jointes ici ?",
        "answer": "Utilisez l'outil Ajouter des pièces jointes pour intégrer de nouveaux fichiers."
      },
      {
        "question": "La suppression est-elle permanente ?",
        "answer": "Oui, les pièces jointes supprimées ne peuvent pas être récupérées du fichier de sortie."
      },
      {
        "question": "Puis-je prévisualiser les pièces jointes ?",
        "answer": "Vous pouvez voir les noms et tailles des fichiers ; utilisez Extraire les pièces jointes pour voir le contenu."
      }
    ]
  },
  "divide-pages": {
    "title": "Diviser les pages",
    "metaDescription": "Divisez les pages PDF en plusieurs sections. Divisez les pages horizontalement ou verticalement.",
    "keywords": [
      "diviser pages pdf",
      "couper page",
      "découper page pdf",
      "sections de page"
    ],
    "description": "\n      <p>Diviser les pages sépare les pages PDF individuelles en plusieurs sections. Coupez les pages horizontalement, verticalement ou en grille pour créer plusieurs pages à partir d'une seule.</p>\n      <p>Parfait pour diviser des documents numérisés avec plusieurs éléments par page, ou diviser des pages grand format en tailles standard.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Définissez la division",
        "description": "Choisissez la division horizontale, verticale ou en grille et définissez le nombre de sections."
      },
      {
        "step": 3,
        "title": "Divisez et téléchargez",
        "description": "Cliquez sur Diviser pour couper les pages et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Diviser les scans",
        "description": "Divisez les pages numérisées contenant plusieurs documents.",
        "icon": "scissors"
      },
      {
        "title": "Redimensionner les pages",
        "description": "Divisez les grandes pages en tailles de papier standard.",
        "icon": "maximize-2"
      },
      {
        "title": "Créer des cartes",
        "description": "Divisez les pages en sections de taille carte pour l'impression.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Puis-je diviser en sections inégales ?",
        "answer": "Actuellement, les divisions sont égales. Utilisez Recadrer PDF pour des sections personnalisées."
      },
      {
        "question": "Qu'advient-il du contenu aux lignes de division ?",
        "answer": "Le contenu est coupé à la ligne de division ; assurez-vous que le contenu important n'est pas aux limites."
      },
      {
        "question": "Puis-je diviser uniquement des pages spécifiques ?",
        "answer": "Oui, vous pouvez sélectionner quelles pages diviser."
      }
    ]
  },
  "add-blank-page": {
    "title": "Ajouter une page blanche",
    "metaDescription": "Insérez des pages blanches dans les documents PDF. Ajoutez des pages vides à n'importe quelle position.",
    "keywords": [
      "ajouter page blanche",
      "insérer page",
      "page vide",
      "insertion page pdf"
    ],
    "description": "\n      <p>Ajouter une page blanche insère des pages vides dans vos documents PDF à n'importe quelle position. Ajoutez des pages avant, après ou entre les pages existantes avec une taille de page personnalisable.</p>\n      <p>Parfait pour ajouter de l'espace pour des notes, créer des séparateurs de section ou préparer des documents pour l'impression.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Choisissez la position",
        "description": "Sélectionnez où insérer les pages blanches et combien."
      },
      {
        "step": 3,
        "title": "Ajoutez et téléchargez",
        "description": "Cliquez sur Ajouter pour insérer les pages et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Espace pour notes",
        "description": "Ajoutez des pages blanches pour des notes manuscrites.",
        "icon": "edit-3"
      },
      {
        "title": "Séparateurs de section",
        "description": "Insérez des pages blanches entre les sections du document.",
        "icon": "minus"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Ajoutez des pages pour l'alignement de l'impression recto-verso.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Puis-je choisir la taille de la page ?",
        "answer": "Oui, les pages blanches peuvent correspondre aux pages existantes ou utiliser des dimensions personnalisées."
      },
      {
        "question": "Puis-je ajouter plusieurs pages blanches ?",
        "answer": "Oui, vous pouvez ajouter n'importe quel nombre de pages blanches à la fois."
      },
      {
        "question": "Puis-je ajouter des pages colorées ?",
        "answer": "Utilisez l'outil Couleur d'arrière-plan après avoir ajouté des pages blanches pour ajouter de la couleur."
      }
    ]
  },
  "reverse-pages": {
    "title": "Inverser les pages",
    "metaDescription": "Inversez l'ordre des pages PDF. Retournez les pages du document de la dernière à la première.",
    "keywords": [
      "inverser pdf",
      "retourner ordre pages",
      "inverser pages",
      "document inversé"
    ],
    "description": "\n      <p>Inverser les pages retourne l'ordre des pages dans votre document PDF, mettant la dernière page en premier et la première page en dernier. Utile pour les documents numérisés dans l'ordre inverse ou pour des besoins d'impression spécifiques.</p>\n      <p>L'outil traite le document entier ou des plages de pages sélectionnées, maintenant tout le contenu et le formatage.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez les pages",
        "description": "Choisissez d'inverser toutes les pages ou une plage spécifique."
      },
      {
        "step": 3,
        "title": "Inversez et téléchargez",
        "description": "Cliquez sur Inverser pour retourner l'ordre des pages et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Corriger l'ordre de scan",
        "description": "Corrigez les documents numérisés dans l'ordre inverse.",
        "icon": "refresh-cw"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Inversez les pages pour des exigences d'impression spécifiques.",
        "icon": "printer"
      },
      {
        "title": "Réorganisation de document",
        "description": "Retournez rapidement l'ordre du document pour révision.",
        "icon": "arrow-up-down"
      }
    ],
    "faq": [
      {
        "question": "Les signets sont-ils mis à jour ?",
        "answer": "Oui, les signets sont mis à jour pour pointer vers les pages inversées correctes."
      },
      {
        "question": "Puis-je inverser seulement certaines pages ?",
        "answer": "Oui, vous pouvez sélectionner une plage de pages à inverser."
      },
      {
        "question": "Est-ce la même chose que pivoter ?",
        "answer": "Non, inverser change l'ordre des pages ; pivoter change l'orientation de la page."
      }
    ]
  },
  "rotate-pdf": {
    "title": "Faire pivoter PDF",
    "metaDescription": "Faites pivoter les pages PDF. Tournez les pages de 90, 180 ou 270 degrés.",
    "keywords": [
      "pivoter pdf",
      "tourner pages pdf",
      "rotation pdf",
      "corriger orientation"
    ],
    "description": "\n      <p>Faire pivoter PDF tourne les pages de votre document de 90, 180 ou 270 degrés. Corrigez les scans mal orientés, faites pivoter les pages paysage ou ajustez l'orientation de la page pour la lecture.</p>\n      <p>Faites pivoter toutes les pages uniformément ou sélectionnez des pages spécifiques pour les faire pivoter individuellement. L'outil préserve tout le contenu et le formatage.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez la rotation",
        "description": "Choisissez l'angle de rotation et quelles pages faire pivoter."
      },
      {
        "step": 3,
        "title": "Faites pivoter et téléchargez",
        "description": "Cliquez sur Faire pivoter pour appliquer les modifications et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Corriger les scans",
        "description": "Corrigez l'orientation des documents numérisés.",
        "icon": "rotate-cw"
      },
      {
        "title": "Pages paysage",
        "description": "Faites pivoter les pages paysage pour une visualisation correcte.",
        "icon": "monitor"
      },
      {
        "title": "Orientation mixte",
        "description": "Standardisez l'orientation des pages dans les documents mixtes.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Puis-je faire pivoter différentes pages différemment ?",
        "answer": "Oui, vous pouvez appliquer différentes rotations à différentes pages."
      },
      {
        "question": "La rotation affecte-t-elle la qualité d'impression ?",
        "answer": "Non, la rotation préserve toute la qualité du contenu."
      },
      {
        "question": "Puis-je faire pivoter selon des angles personnalisés ?",
        "answer": "La rotation est limitée aux incréments de 90 degrés (90, 180, 270)."
      }
    ]
  },
  "n-up-pdf": {
    "title": "PDF N-Up (Multi-pages)",
    "metaDescription": "Imprimez plusieurs pages PDF par feuille. Créez des mises en page 2-up, 4-up ou personnalisées.",
    "keywords": [
      "pdf n-up",
      "plusieurs pages par feuille",
      "impression 2 par page",
      "imposition page"
    ],
    "description": "\n      <p>PDF N-Up arrange plusieurs pages sur des feuilles uniques, créant des mises en page 2-up, 4-up, 6-up, 9-up ou personnalisées. Parfait pour économiser du papier lors de l'impression ou créer des documents à distribuer.</p>\n      <p>Choisissez parmi des mises en page prédéfinies ou créez des arrangements personnalisés. L'outil met automatiquement à l'échelle et positionne les pages pour des résultats optimaux.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Choisissez la mise en page",
        "description": "Sélectionnez 2-up, 4-up, 6-up, 9-up ou grille personnalisée."
      },
      {
        "step": 3,
        "title": "Créez et téléchargez",
        "description": "Cliquez sur Créer pour générer le PDF n-up et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Économiser du papier",
        "description": "Imprimez plusieurs pages par feuille pour réduire l'utilisation de papier.",
        "icon": "leaf"
      },
      {
        "title": "Créer des supports",
        "description": "Faites des supports compacts à partir de diapositives de présentation.",
        "icon": "file-text"
      },
      {
        "title": "Réviser les documents",
        "description": "Imprimez des documents en taille réduite pour révision.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Quelles mises en page sont disponibles ?",
        "answer": "Des mises en page 2-up, 4-up, 6-up, 9-up et grille personnalisée sont disponibles."
      },
      {
        "question": "Puis-je ajouter des bordures entre les pages ?",
        "answer": "Oui, vous pouvez ajouter des bordures et des gouttières entre les pages."
      },
      {
        "question": "L'ordre des pages est-il préservé ?",
        "answer": "Oui, les pages sont arrangées dans l'ordre de lecture (gauche à droite, haut en bas)."
      }
    ]
  },
  "combine-single-page": {
    "title": "Combiner en une seule page",
    "metaDescription": "Assemblez les pages PDF en une seule page continue. Créez des documents à page unique défilants.",
    "keywords": [
      "combiner pages",
      "pdf page unique",
      "assembler pages",
      "défilement continu"
    ],
    "description": "\n      <p>Combiner en une seule page assemble toutes les pages PDF en une seule page continue. Créez des documents défilants parfaits pour la visualisation web ou la lecture continue.</p>\n      <p>Les pages sont jointes verticalement avec un espacement personnalisable. Le résultat est une seule longue page contenant tout le contenu.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Définissez l'espacement",
        "description": "Choisissez l'espace entre les pages assemblées."
      },
      {
        "step": 3,
        "title": "Combinez et téléchargez",
        "description": "Cliquez sur Combiner pour créer le PDF à page unique."
      }
    ],
    "useCases": [
      {
        "title": "Documents Web",
        "description": "Créez des PDF défilants pour l'intégration web.",
        "icon": "globe"
      },
      {
        "title": "Lecture continue",
        "description": "Convertissez des documents paginés en défilement continu.",
        "icon": "scroll"
      },
      {
        "title": "Contenu long",
        "description": "Combinez des pages pour une lecture fluide de contenu long.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Y a-t-il une limite de page ?",
        "answer": "Les documents très longs peuvent être limités par la mémoire du navigateur."
      },
      {
        "question": "Puis-je ajouter des séparateurs entre les pages ?",
        "answer": "Oui, vous pouvez ajouter de l'espacement ou des lignes entre les pages originales."
      },
      {
        "question": "Cela fonctionnera-t-il pour l'impression ?",
        "answer": "Le résultat est meilleur pour la visualisation écran ; utilisez N-Up pour les mises en page d'impression."
      }
    ]
  },
  "view-metadata": {
    "title": "Voir les métadonnées",
    "metaDescription": "Visualisez les propriétés du document PDF. Voir l'auteur, le titre, les dates et d'autres métadonnées.",
    "keywords": [
      "métadonnées pdf",
      "propriétés document",
      "info pdf",
      "voir détails pdf"
    ],
    "description": "\n      <p>Voir les métadonnées affiche toutes les propriétés du document et les métadonnées de vos fichiers PDF. Voir l'auteur, le titre, le sujet, les mots-clés, la date de création, la date de modification, et plus encore.</p>\n      <p>Utile pour auditer les documents, vérifier les informations de fichier ou vérifier l'authenticité du document.</p>\n      <p>Toute la visualisation se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Visualisez les propriétés",
        "description": "Voyez toutes les métadonnées affichées dans un format organisé."
      },
      {
        "step": 3,
        "title": "Exportez si nécessaire",
        "description": "Optionnellement exportez les métadonnées en JSON."
      }
    ],
    "useCases": [
      {
        "title": "Audit de document",
        "description": "Révisez les propriétés du document pour la conformité.",
        "icon": "clipboard-check"
      },
      {
        "title": "Vérifier l'authenticité",
        "description": "Vérifiez les dates de création et les informations d'auteur.",
        "icon": "shield"
      },
      {
        "title": "Information fichier",
        "description": "Obtenez des informations détaillées sur les fichiers PDF.",
        "icon": "info"
      }
    ],
    "faq": [
      {
        "question": "Quelles métadonnées sont affichées ?",
        "answer": "Titre, auteur, sujet, mots-clés, créateur, producteur, dates et version PDF."
      },
      {
        "question": "Puis-je éditer les métadonnées ici ?",
        "answer": "Utilisez l'outil Modifier les métadonnées pour modifier les propriétés du document."
      },
      {
        "question": "Les métadonnées XMP sont-elles incluses ?",
        "answer": "Oui, les métadonnées standard et XMP sont affichées."
      }
    ]
  },
  "edit-metadata": {
    "title": "Modifier les métadonnées",
    "metaDescription": "Modifiez les propriétés du document PDF. Changez le titre, l'auteur, le sujet et les mots-clés.",
    "keywords": [
      "modifier métadonnées pdf",
      "changer propriétés pdf",
      "auteur pdf",
      "info document"
    ],
    "description": "\n      <p>Modifier les métadonnées vous permet de modifier les propriétés du document dans vos fichiers PDF. Changez le titre, l'auteur, le sujet, les mots-clés et d'autres champs de métadonnées.</p>\n      <p>Parfait pour corriger les informations du document, ajouter une attribution correcte ou préparer les fichiers pour la distribution.</p>\n      <p>Toute la modification se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Modifiez les propriétés",
        "description": "Modifiez le titre, l'auteur, le sujet, les mots-clés et d'autres champs."
      },
      {
        "step": 3,
        "title": "Sauvegardez et téléchargez",
        "description": "Cliquez sur Sauvegarder pour appliquer les modifications et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Ajouter une attribution",
        "description": "Définissez les informations correctes d'auteur et de créateur.",
        "icon": "user"
      },
      {
        "title": "Optimisation SEO",
        "description": "Ajoutez des mots-clés et des descriptions pour la recherche.",
        "icon": "search"
      },
      {
        "title": "Préparation de document",
        "description": "Préparez les documents avec des métadonnées correctes avant le partage.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Quels champs puis-je modifier ?",
        "answer": "Les champs titre, auteur, sujet, mots-clés, créateur et producteur."
      },
      {
        "question": "Puis-je effacer toutes les métadonnées ?",
        "answer": "Utilisez l'outil Supprimer les métadonnées pour effacer toutes les propriétés du document."
      },
      {
        "question": "Les dates sont-elles modifiables ?",
        "answer": "Les dates de création et de modification sont mises à jour automatiquement."
      }
    ]
  },
  "pdf-to-zip": {
    "title": "PDFs en ZIP",
    "metaDescription": "Empaquetez plusieurs PDF dans une archive ZIP. Compressez et regroupez des fichiers PDF.",
    "keywords": [
      "pdf en zip",
      "compresser pdfs",
      "regrouper pdfs",
      "archiver pdfs"
    ],
    "description": "\n      <p>PDFs en ZIP empaquette plusieurs fichiers PDF dans une seule archive ZIP. Compressez et regroupez vos PDF pour un partage, un stockage ou une sauvegarde plus faciles.</p>\n      <p>L'outil crée une archive compressée contenant tous vos fichiers PDF, réduisant la taille totale et simplifiant la gestion des fichiers.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos fichiers restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez des PDF",
        "description": "Glissez-déposez plusieurs fichiers PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurez l'archive",
        "description": "Optionnellement définissez le nom de l'archive et le niveau de compression."
      },
      {
        "step": 3,
        "title": "Créez et téléchargez",
        "description": "Cliquez sur Créer pour générer l'archive ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Partage de fichiers",
        "description": "Regroupez plusieurs PDF pour un partage plus facile.",
        "icon": "share-2"
      },
      {
        "title": "Création de sauvegarde",
        "description": "Créez des sauvegardes compressées de collections PDF.",
        "icon": "archive"
      },
      {
        "title": "Pièces jointes d'e-mail",
        "description": "Combinez des PDF en une seule pièce jointe pour e-mail.",
        "icon": "mail"
      }
    ],
    "faq": [
      {
        "question": "Quelle compression est appliquée ?",
        "answer": "La compression ZIP réduit généralement la taille totale de 10 à 30%."
      },
      {
        "question": "Y a-t-il une limite de fichiers ?",
        "answer": "Vous pouvez inclure jusqu'à 100 PDF dans une seule archive."
      },
      {
        "question": "Puis-je définir un mot de passe ?",
        "answer": "La création de ZIP protégés par mot de passe n'est pas actuellement prise en charge."
      }
    ]
  },
  "compare-pdfs": {
    "title": "Comparer des PDF",
    "metaDescription": "Comparez deux documents PDF. Mettez en évidence les différences entre les versions.",
    "keywords": [
      "comparer pdf",
      "différence pdf",
      "comparaison documents",
      "comparaison versions"
    ],
    "description": "\n      <p>Comparer des PDF analyse deux documents PDF et met en évidence les différences entre eux. Parfait pour réviser les versions de documents, vérifier les modifications de contrats ou vérifier les éditions.</p>\n      <p>Affichez les pages côte à côte, parcourez les paires de pages et filtrez les changements surlignés. Compare le texte extrait et les noms des polices. Les images numérisées et les autres changements visuels ne sont pas comparés.</p>\n      <p>Toute la comparaison se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez deux PDF",
        "description": "Téléchargez le document PDF original et le document modifié."
      },
      {
        "step": 2,
        "title": "Comparer les PDF",
        "description": "Affichez les pages côte à côte, parcourez les paires de pages et filtrez les changements surlignés."
      },
      {
        "step": 3,
        "title": "Filtres de surbrillance",
        "description": "Modifications de texte · Changements de police · En-têtes et pieds de page · Texte déplacé"
      }
    ],
    "useCases": [
      {
        "title": "Révision de contrat",
        "description": "Comparez les versions de contrat pour identifier les changements.",
        "icon": "file-text"
      },
      {
        "title": "Révision de document",
        "description": "Révisez les éditions entre les versions de document.",
        "icon": "git-compare"
      },
      {
        "title": "Assurance qualité",
        "description": "Vérifiez que seules les modifications prévues ont été apportées.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Quels types de différences sont détectés ?",
        "answer": "Modifications de texte · Changements de police · En-têtes et pieds de page · Texte déplacé"
      },
      {
        "question": "Puis-je comparer des documents numérisés ?",
        "answer": "Compare le texte extrait et les noms des polices. Les images numérisées et les autres changements visuels ne sont pas comparés."
      },
      {
        "question": "La comparaison visuelle est-elle disponible ?",
        "answer": "Affichez les pages côte à côte, parcourez les paires de pages et filtrez les changements surlignés. Compare le texte extrait et les noms des polices. Les images numérisées et les autres changements visuels ne sont pas comparés."
      }
    ]
  },
  "posterize-pdf": {
    "title": "Postériser PDF",
    "metaDescription": "Divisez de grandes pages PDF en tuiles imprimables. Créez des posters à partir de pages PDF.",
    "keywords": [
      "postériser pdf",
      "tuiler pdf",
      "impression grand format",
      "poster pdf"
    ],
    "description": "\n      <p>Postériser PDF divise de grandes pages PDF en tuiles plus petites qui peuvent être imprimées sur du papier standard et assemblées en posters. Parfait pour imprimer de grands diagrammes, cartes ou œuvres d'art.</p>\n      <p>Configurez la taille de la grille et le chevauchement pour un assemblage facile. L'outil calcule automatiquement les dimensions des tuiles pour votre taille de sortie cible.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre PDF grand format ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurez les tuiles",
        "description": "Définissez la taille de la grille, le chevauchement et la taille du papier de sortie."
      },
      {
        "step": 3,
        "title": "Créez et téléchargez",
        "description": "Cliquez sur Créer pour générer des tuiles imprimables."
      }
    ],
    "useCases": [
      {
        "title": "Impression d'affiches",
        "description": "Imprimez de grandes affiches sur du papier standard.",
        "icon": "maximize-2"
      },
      {
        "title": "Impression de cartes",
        "description": "Imprimez de grandes cartes en sections pour l'assemblage.",
        "icon": "map"
      },
      {
        "title": "Reproduction d'art",
        "description": "Créez de grandes impressions à partir d'œuvres d'art PDF.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Quel chevauchement dois-je utiliser ?",
        "answer": "Un chevauchement de 10-20mm est recommandé pour un alignement facile lors de l'assemblage."
      },
      {
        "question": "Puis-je ajouter des marques de coupe ?",
        "answer": "Oui, des marques de coupe peuvent être ajoutées pour aider à la découpe et à l'alignement."
      },
      {
        "question": "Quelles tailles de papier sont prises en charge ?",
        "answer": "A4, Lettre, A3 et des tailles personnalisées sont prises en charge."
      }
    ]
  },
  "fix-page-size": {
    "title": "Corriger la taille des pages",
    "metaDescription": "Standardisez les tailles de pages PDF. Convertissez toutes les pages à des dimensions uniformes.",
    "keywords": [
      "corriger taille page",
      "standardiser pdf",
      "pages uniformes",
      "redimensionner pages pdf"
    ],
    "description": "\n      <p>Corriger la taille des pages standardise toutes les pages de votre PDF à des dimensions uniformes. Convertissez des documents de tailles mixtes en tailles de pages cohérentes pour une présentation professionnelle ou une impression.</p>\n      <p>Choisissez parmi des tailles standard (A4, Lettre, etc.) ou définissez des dimensions personnalisées. Le contenu est mis à l'échelle ou positionné pour s'adapter à la nouvelle taille de page.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez la taille cible",
        "description": "Choisissez une taille standard ou entrez des dimensions personnalisées."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Cliquez sur Appliquer pour standardiser les pages et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Préparation à l'impression",
        "description": "Standardisez les pages pour une impression cohérente.",
        "icon": "printer"
      },
      {
        "title": "Nettoyage de document",
        "description": "Corrigez les documents avec des tailles de pages incohérentes.",
        "icon": "file-check"
      },
      {
        "title": "Documents professionnels",
        "description": "Créez des documents uniformes pour la distribution.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Comment le contenu est-il géré ?",
        "answer": "Le contenu est mis à l'échelle pour s'adapter ou centré sur la nouvelle taille de page."
      },
      {
        "question": "Puis-je préserver le ratio d'aspect ?",
        "answer": "Oui, le contenu peut être mis à l'échelle proportionnellement pour s'adapter."
      },
      {
        "question": "Quelles tailles standard sont disponibles ?",
        "answer": "A4, A3, Lettre, Légal et d'autres tailles courantes."
      }
    ]
  },
  "linearize-pdf": {
    "title": "Linéariser PDF",
    "metaDescription": "Optimisez le PDF pour une visualisation web rapide. Activez le chargement progressif.",
    "keywords": [
      "linéariser pdf",
      "vue web rapide",
      "optimiser pdf",
      "pdf progressif"
    ],
    "description": "\n      <p>Linéariser PDF optimise vos documents pour une visualisation web rapide. Les PDF linéarisés peuvent commencer à s'afficher avant que le fichier entier ne soit téléchargé, améliorant l'expérience utilisateur.</p>\n      <p>Aussi connu sous le nom de \"Fast Web View\", cette optimisation réorganise la structure du PDF pour un chargement progressif dans les navigateurs web.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Linéarisez",
        "description": "Cliquez sur Linéariser pour optimiser pour la visualisation web."
      },
      {
        "step": 3,
        "title": "Téléchargez",
        "description": "Téléchargez votre PDF optimisé."
      }
    ],
    "useCases": [
      {
        "title": "Publication Web",
        "description": "Optimisez les PDF pour les téléchargements de sites web.",
        "icon": "globe"
      },
      {
        "title": "Pièces jointes d'e-mail",
        "description": "Créez des PDF qui s'ouvrent plus rapidement pour les destinataires.",
        "icon": "mail"
      },
      {
        "title": "Documents en ligne",
        "description": "Améliorez l'expérience de visualisation pour les documents en ligne.",
        "icon": "cloud"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que la linéarisation ?",
        "answer": "La linéarisation réorganise les données PDF pour un chargement progressif."
      },
      {
        "question": "Cela réduit-il la taille du fichier ?",
        "answer": "La linéarisation peut légèrement augmenter la taille du fichier en raison de la structure ajoutée."
      },
      {
        "question": "Est-ce compatible avec tous les lecteurs ?",
        "answer": "Oui, les PDF linéarisés fonctionnent dans tous les lecteurs PDF."
      }
    ]
  },
  "page-dimensions": {
    "title": "Dimensions des pages",
    "metaDescription": "Analysez les tailles de pages PDF. Visualisez les dimensions de toutes les pages de votre document.",
    "keywords": [
      "taille page pdf",
      "dimensions page",
      "mesures pdf",
      "taille document"
    ],
    "description": "\n      <p>Dimensions des pages analyse et affiche la taille de chaque page de votre document PDF. Visualisez les dimensions dans diverses unités (pouces, mm, points) et identifiez les pages aux tailles non standard.</p>\n      <p>Utile pour la préparation à l'impression, l'analyse de documents ou l'identification de tailles de pages incohérentes.</p>\n      <p>Toute l'analyse se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Voir les dimensions",
        "description": "Voyez les tailles de page affichées pour toutes les pages."
      },
      {
        "step": 3,
        "title": "Exporter le rapport",
        "description": "Optionnellement exportez les dimensions en JSON."
      }
    ],
    "useCases": [
      {
        "title": "Planification d'impression",
        "description": "Vérifiez les tailles de page avant l'impression.",
        "icon": "printer"
      },
      {
        "title": "Analyse de document",
        "description": "Identifiez les pages avec des dimensions inhabituelles.",
        "icon": "search"
      },
      {
        "title": "Contrôle qualité",
        "description": "Vérifiez que les tailles de page répondent aux spécifications.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Quelles unités sont disponibles ?",
        "answer": "Pouces, millimètres, centimètres et points."
      },
      {
        "question": "Cela montre-t-il l'orientation ?",
        "answer": "Oui, l'orientation portrait ou paysage est indiquée."
      },
      {
        "question": "Puis-je corriger les tailles incohérentes ?",
        "answer": "Utilisez l'outil Corriger la taille des pages pour standardiser les dimensions."
      }
    ]
  },
  "remove-restrictions": {
    "title": "Supprimer les restrictions",
    "metaDescription": "Supprimez les restrictions PDF. Déverrouillez les permissions d'impression, de copie et d'édition.",
    "keywords": [
      "supprimer restrictions pdf",
      "déverrouiller pdf",
      "permissions pdf",
      "libérer pdf"
    ],
    "description": "\n      <p>Supprimer les restrictions déverrouille les PDF qui ont des restrictions de permission empêchant l'impression, la copie ou l'édition. Cet outil supprime les restrictions de mot de passe propriétaire tout en préservant le contenu du document.</p>\n      <p>Note : Cet outil ne peut pas supprimer les mots de passe utilisateur qui empêchent l'ouverture du document. Utilisez Déchiffrer PDF pour les fichiers protégés par mot de passe.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez le PDF restreint",
        "description": "Glissez-déposez votre PDF restreint ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Supprimez les restrictions",
        "description": "Cliquez sur Supprimer pour déverrouiller le document."
      },
      {
        "step": 3,
        "title": "Téléchargez",
        "description": "Téléchargez le PDF sans restrictions."
      }
    ],
    "useCases": [
      {
        "title": "Activer l'impression",
        "description": "Déverrouillez les PDF qui empêchent l'impression.",
        "icon": "printer"
      },
      {
        "title": "Activer la copie",
        "description": "Autorisez la sélection et la copie de texte.",
        "icon": "copy"
      },
      {
        "title": "Activer l'édition",
        "description": "Supprimez les restrictions sur l'édition du document.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "Est-ce légal ?",
        "answer": "Supprimer les restrictions des documents que vous possédez ou pour lesquels vous avez des droits est généralement légal."
      },
      {
        "question": "Peut-il supprimer les mots de passe d'ouverture ?",
        "answer": "Non, utilisez Déchiffrer PDF pour les documents protégés par mot de passe."
      },
      {
        "question": "Le contenu sera-t-il affecté ?",
        "answer": "Non, seules les restrictions sont supprimées ; le contenu reste inchangé."
      }
    ]
  },
  "repair-pdf": {
    "title": "Réparer PDF",
    "metaDescription": "Reparez les fichiers PDF corrompus. Récupérez et réparez les documents endommagés.",
    "keywords": [
      "réparer pdf",
      "fixer pdf",
      "récupérer pdf",
      "pdf corrompu"
    ],
    "description": "\n      <p>Réparer PDF tente de réparer les fichiers PDF corrompus ou endommagés. L'outil analyse la structure du document et la reconstruit pour récupérer autant de contenu que possible.</p>\n      <p>Utile pour récupérer des fichiers qui ne s'ouvrent pas, affichent des erreurs ou ont du contenu manquant en raison de la corruption.</p>\n      <p>Toute la réparation se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez le PDF endommagé",
        "description": "Glissez-déposez votre PDF corrompu ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Réparez le document",
        "description": "Cliquez sur Réparer pour tenter la récupération."
      },
      {
        "step": 3,
        "title": "Téléchargez",
        "description": "Téléchargez le PDF réparé si réussi."
      }
    ],
    "useCases": [
      {
        "title": "Récupérer des fichiers",
        "description": "Récupérez des PDF qui ne s'ouvrent pas correctement.",
        "icon": "refresh-cw"
      },
      {
        "title": "Corriger les erreurs",
        "description": "Réparez les fichiers affichant des messages d'erreur.",
        "icon": "wrench"
      },
      {
        "title": "Restaurer le contenu",
        "description": "Récupérez le contenu de fichiers partiellement corrompus.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Tous les PDF peuvent-ils être réparés ?",
        "answer": "Le succès dépend du type et de l'étendue de la corruption."
      },
      {
        "question": "Tout le contenu sera-t-il récupéré ?",
        "answer": "L'outil récupère autant que possible ; les fichiers gravement endommagés peuvent avoir des pertes."
      },
      {
        "question": "Dois-je garder l'original ?",
        "answer": "Oui, gardez toujours le fichier original comme sauvegarde."
      }
    ]
  },
  "encrypt-pdf": {
    "title": "Chiffrer PDF",
    "metaDescription": "Protégez les fichiers PDF par mot de passe. Ajoutez un chiffrement et définissez des permissions.",
    "keywords": [
      "chiffrer pdf",
      "mot de passe pdf",
      "sécuriser pdf",
      "cryptage pdf"
    ],
    "description": "\n      <p>Chiffrer PDF ajoute une protection par mot de passe et un chiffrement à vos documents PDF. Définissez des mots de passe utilisateur pour empêcher l'ouverture, et des mots de passe propriétaire pour contrôler les permissions comme l'impression et la copie.</p>\n      <p>Choisissez parmi différents niveaux de chiffrement (AES 128 bits ou 256 bits) pour des besoins de sécurité variables.</p>\n      <p>Tout le chiffrement se produit dans votre navigateur, garantissant que vos mots de passe et documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Définissez les mots de passe",
        "description": "Entrez le mot de passe utilisateur et/ou le mot de passe propriétaire. Configurez les permissions."
      },
      {
        "step": 3,
        "title": "Chiffrez et téléchargez",
        "description": "Cliquez sur Chiffrer pour sécuriser votre PDF et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Documents confidentiels",
        "description": "Protégez les documents commerciaux sensibles.",
        "icon": "lock"
      },
      {
        "title": "Fichiers personnels",
        "description": "Sécurisez les documents personnels comme les déclarations fiscales.",
        "icon": "shield"
      },
      {
        "title": "Distribution contrôlée",
        "description": "Limitez ce que les destinataires peuvent faire avec les documents.",
        "icon": "key"
      }
    ],
    "faq": [
      {
        "question": "Quelle est la différence entre les mots de passe utilisateur et propriétaire ?",
        "answer": "Le mot de passe utilisateur empêche l'ouverture ; le mot de passe propriétaire contrôle les permissions."
      },
      {
        "question": "Quel chiffrement est utilisé ?",
        "answer": "Des options de chiffrement AES 128 bits ou 256 bits sont disponibles."
      },
      {
        "question": "Puis-je définir des permissions sans mot de passe utilisateur ?",
        "answer": "Oui, vous pouvez définir un mot de passe propriétaire uniquement pour contrôler les permissions."
      }
    ]
  },
  "sanitize-pdf": {
    "title": "Assainir PDF",
    "metaDescription": "Supprimez les données cachées des PDF. Nettoyez les métadonnées, les scripts et les informations sensibles.",
    "keywords": [
      "assainir pdf",
      "nettoyer pdf",
      "supprimer données cachées",
      "confidentialité pdf"
    ],
    "description": "\n      <p>Assainir PDF supprime les données cachées et les informations potentiellement sensibles de vos documents. Supprimez les métadonnées, les scripts intégrés, les pièces jointes, les commentaires et autres contenus cachés.</p>\n      <p>Essentiel pour préparer les documents à la distribution publique ou lorsque la confidentialité est une préoccupation.</p>\n      <p>Tout l'assainissement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez ce qu'il faut supprimer",
        "description": "Choisissez quels types de données cachées supprimer."
      },
      {
        "step": 3,
        "title": "Assainissez et téléchargez",
        "description": "Cliquez sur Assainir pour nettoyer le PDF et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Diffusion publique",
        "description": "Préparez les documents pour la distribution publique.",
        "icon": "globe"
      },
      {
        "title": "Protection de la vie privée",
        "description": "Supprimez les informations personnelles avant de partager.",
        "icon": "shield"
      },
      {
        "title": "Conformité de sécurité",
        "description": "Respectez les exigences de sécurité pour la manipulation de documents.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Quelles données cachées sont supprimées ?",
        "answer": "Métadonnées, scripts, pièces jointes, commentaires, données de formulaire et calques cachés."
      },
      {
        "question": "Le contenu visible sera-t-il affecté ?",
        "answer": "Non, seules les données cachées sont supprimées ; le contenu visible reste."
      },
      {
        "question": "Est-ce réversible ?",
        "answer": "Non, les données supprimées ne peuvent pas être récupérées. Gardez une sauvegarde de l'original."
      }
    ]
  },
  "decrypt-pdf": {
    "title": "Déchiffrer PDF",
    "metaDescription": "Supprimez le mot de passe des fichiers PDF. Déverrouillez les documents protégés par mot de passe.",
    "keywords": [
      "déchiffrer pdf",
      "supprimer mot de passe pdf",
      "déverrouiller pdf",
      "enlever protection pdf"
    ],
    "description": "\n      <p>Déchiffrer PDF supprime la protection par mot de passe des documents PDF. Entrez le mot de passe actuel pour déverrouiller le fichier et créer une copie non protégée.</p>\n      <p>Cet outil nécessite que vous connaissiez le mot de passe actuel. Il ne peut pas craquer ou contourner les mots de passe inconnus.</p>\n      <p>Tout le déchiffrement se produit dans votre navigateur, garantissant que vos mots de passe et documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez le PDF protégé",
        "description": "Glissez-déposez votre PDF protégé par mot de passe."
      },
      {
        "step": 2,
        "title": "Entrez le mot de passe",
        "description": "Entrez le mot de passe actuel du document."
      },
      {
        "step": 3,
        "title": "Déchiffrez et téléchargez",
        "description": "Cliquez sur Déchiffrer pour supprimer la protection et télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Supprimer les anciens mots de passe",
        "description": "Déverrouillez les documents lorsque le mot de passe n'est plus nécessaire.",
        "icon": "unlock"
      },
      {
        "title": "Simplifier l'accès",
        "description": "Créez des copies non protégées pour un partage plus facile.",
        "icon": "share-2"
      },
      {
        "title": "Archiver des documents",
        "description": "Supprimez les mots de passe avant l'archivage à long terme.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Peut-il craquer des mots de passe inconnus ?",
        "answer": "Non, vous devez connaître le mot de passe actuel pour déchiffrer."
      },
      {
        "question": "Le fichier original est-il modifié ?",
        "answer": "Non, une nouvelle copie non protégée est créée."
      },
      {
        "question": "Et si j'ai oublié le mot de passe ?",
        "answer": "Malheureusement, nous ne pouvons pas récupérer les mots de passe oubliés."
      }
    ]
  },
  "flatten-pdf": {
    "title": "Aplatir PDF",
    "metaDescription": "Aplatissez les formulaires PDF et les annotations. Rendez le contenu non modifiable.",
    "keywords": [
      "aplatir pdf",
      "aplatir formulaires",
      "aplatir annotations",
      "pdf non modifiable"
    ],
    "description": "\n      <p>Aplatir PDF convertit les éléments interactifs comme les champs de formulaire et les annotations en contenu statique. Le PDF aplati a la même apparence mais ne peut plus être édité.</p>\n      <p>Parfait pour finaliser les formulaires remplis, préserver les annotations ou créer des versions non modifiables de documents.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre PDF avec formulaires ou annotations."
      },
      {
        "step": 2,
        "title": "Sélectionnez quoi aplatir",
        "description": "Choisissez d'aplatir les formulaires, les annotations ou les deux."
      },
      {
        "step": 3,
        "title": "Aplatissez et téléchargez",
        "description": "Cliquez sur Aplatir pour créer le PDF statique."
      }
    ],
    "useCases": [
      {
        "title": "Finaliser les formulaires",
        "description": "Verrouillez les données de formulaire remplies pour empêcher les modifications.",
        "icon": "lock"
      },
      {
        "title": "Préserver les annotations",
        "description": "Rendez les annotations permanentes dans le document.",
        "icon": "check-circle"
      },
      {
        "title": "Archiver des documents",
        "description": "Créez des versions non modifiables pour l'archivage.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "L'aplatissement est-il réversible ?",
        "answer": "Non, l'aplatissement est permanent. Gardez une sauvegarde de l'original."
      },
      {
        "question": "L'apparence changera-t-elle ?",
        "answer": "Non, le document a la même apparence mais n'est plus interactif."
      },
      {
        "question": "Cela réduit-il la taille du fichier ?",
        "answer": "Parfois, car les éléments interactifs sont convertis en contenu plus simple."
      }
    ]
  },
  "remove-metadata": {
    "title": "Supprimer les métadonnées",
    "metaDescription": "Supprimez les métadonnées des fichiers PDF. Enlevez l'auteur, les dates et les propriétés du document.",
    "keywords": [
      "supprimer métadonnées pdf",
      "effacer métadonnées",
      "confidentialité pdf",
      "pdf anonyme"
    ],
    "description": "\n      <p>Supprimer les métadonnées retire toutes les propriétés du document et les métadonnées de vos fichiers PDF. Supprimez les noms d'auteur, les dates de création, les informations logicielles et autres données d'identification.</p>\n      <p>Essentiel pour la confidentialité lors du partage de documents ou lorsque les métadonnées pourraient révéler des informations sensibles.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Supprimez les métadonnées",
        "description": "Cliquez sur Supprimer pour effacer toutes les métadonnées."
      },
      {
        "step": 3,
        "title": "Téléchargez",
        "description": "Téléchargez le PDF sans métadonnées."
      }
    ],
    "useCases": [
      {
        "title": "Protection de la vie privée",
        "description": "Supprimez les informations personnelles avant de partager.",
        "icon": "shield"
      },
      {
        "title": "Documents anonymes",
        "description": "Créez des documents sans attribution d'auteur.",
        "icon": "user-x"
      },
      {
        "title": "Distribution propre",
        "description": "Distribuez des documents sans métadonnées internes.",
        "icon": "send"
      }
    ],
    "faq": [
      {
        "question": "Quelles métadonnées sont supprimées ?",
        "answer": "Auteur, titre, sujet, mots-clés, dates, créateur et informations de producteur."
      },
      {
        "question": "Les métadonnées XMP sont-elles supprimées ?",
        "answer": "Oui, les métadonnées standard et XMP sont supprimées."
      },
      {
        "question": "Le contenu sera-t-il affecté ?",
        "answer": "Non, seules les métadonnées sont supprimées ; le contenu du document reste inchangé."
      }
    ]
  },
  "change-permissions": {
    "title": "Changer les permissions",
    "metaDescription": "Modifiez les permissions PDF. Contrôlez l'accès à l'impression, la copie et l'édition.",
    "keywords": [
      "permissions pdf",
      "changer accès pdf",
      "restreindre pdf",
      "sécurité pdf"
    ],
    "description": "\n      <p>Changer les permissions modifie les contrôles d'accès sur vos documents PDF. Activez ou désactivez l'impression, la copie, l'édition et les permissions d'annotation.</p>\n      <p>Définissez un mot de passe propriétaire pour appliquer ces restrictions. Les destinataires peuvent voir le document mais sont limités dans les actions qu'ils peuvent effectuer.</p>\n      <p>Tout le traitement se produit dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Définissez les permissions",
        "description": "Activez ou désactivez l'impression, la copie, l'édition et les annotations."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Définissez le mot de passe propriétaire et téléchargez le PDF restreint."
      }
    ],
    "useCases": [
      {
        "title": "Empêcher la copie",
        "description": "Désactivez la copie de texte pour protéger le contenu.",
        "icon": "copy"
      },
      {
        "title": "Contrôler l'impression",
        "description": "Restreignez ou autorisez l'impression du document.",
        "icon": "printer"
      },
      {
        "title": "Limiter l'édition",
        "description": "Empêchez les modifications du document.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Ai-je besoin d'un mot de passe ?",
        "answer": "Un mot de passe propriétaire est requis pour appliquer les permissions."
      },
      {
        "question": "Les permissions peuvent-elles être supprimées ?",
        "answer": "Oui, avec le mot de passe propriétaire ou en utilisant l'outil Supprimer les restrictions."
      },
      {
        "question": "Tous les lecteurs PDF sont-ils compatibles ?",
        "answer": "La plupart des lecteurs PDF respectent les permissions, mais certains peuvent ne pas les appliquer."
      }
    ]
  },
  "pdf-to-docx": {
    "title": "PDF en Word",
    "metaDescription": "Convertissez des PDF en documents Word (DOCX) modifiables. Préservez la mise en page et le formatage original.",
    "keywords": [
      "pdf en word",
      "convertir pdf en docx",
      "pdf vers word",
      "pdf éditable word"
    ],
    "description": "\n      <p>Convertissez vos documents PDF en fichiers Microsoft Word (DOCX) entièrement modifiables. Notre technologie d'analyse avancée préserve la mise en page originale, les polices, les tableaux et les images.</p>\n      <p>Modifiez facilement le contenu de vos PDF dans Word sans avoir à tout retaper. Parfait pour les contrats, les rapports et les CV.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, garantissant que vos documents ne quittent jamais votre ordinateur.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Glissez-déposez votre fichier PDF ou cliquez pour sélectionner le document à convertir."
      },
      {
        "step": 2,
        "title": "Conversion",
        "description": "Attendez que le processus de conversion automatique analyse la structure du document."
      },
      {
        "step": 3,
        "title": "Téléchargez le DOCX",
        "description": "Une fois prêt, téléchargez votre fichier Word éditable."
      }
    ],
    "useCases": [
      {
        "title": "Édition de contrats",
        "description": "Transformez un contrat PDF en Word pour modifier des clauses ou ajouter des commentaires.",
        "icon": "file-text"
      },
      {
        "title": "Mise à jour de CV",
        "description": "Récupérez le contenu d'un ancien CV au format PDF pour le mettre à jour facilement dans Word.",
        "icon": "user"
      },
      {
        "title": "Réutilisation de contenu",
        "description": "Extrayez des textes et des structures de rapports PDF pour de nouveaux documents.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "La mise en page sera-t-elle identique ?",
        "answer": "Nous nous efforçons de conserver une fidélité maximale. Les documents complexes peuvent nécessiter quelques ajustements mineurs."
      },
      {
        "question": "Puis-je convertir des scans ?",
        "answer": "Les PDF numérisés (images) seront convertis en images dans Word. Pour du texte éditable, utilisez d'abord notre outil OCR PDF."
      },
      {
        "question": "Est-ce compatible avec Google Docs ?",
        "answer": "Oui, le fichier .docx généré est standard et peut être ouvert dans Microsoft Word, Google Docs ou LibreOffice."
      }
    ]
  },
  "pdf-to-xlsx": {
    "title": "PDF en Excel",
    "metaDescription": "Extrayez des tableaux PDF vers des feuilles de calcul Excel (XLSX). Précision des données et structure conservée.",
    "keywords": [
      "pdf en excel",
      "extraire tableau pdf",
      "pdf vers xlsx",
      "conversion données pdf"
    ],
    "description": "\n      <p>Transformez vos données PDF en feuilles de calcul Excel organisées. Cet outil identifie automatiquement les tableaux dans vos documents et les convertit en cellules XLSX éditables.</p>\n      <p>Idéal pour l'analyse financière, la gestion d'inventaire ou le traitement de données statistiques sans saisie manuelle.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Sélectionnez le fichier contenant les tableaux de données."
      },
      {
        "step": 2,
        "title": "Analyse des données",
        "description": "L'outil scanne le document pour détecter les lignes et colonnes."
      },
      {
        "step": 3,
        "title": "Téléchargez l'Excel",
        "description": "Récupérez votre fichier XLSX prêt pour vos calculs."
      }
    ],
    "useCases": [
      {
        "title": "Analyse financière",
        "description": "Convertissez des relevés bancaires ou des rapports annuels PDF en Excel.",
        "icon": "bar-chart"
      },
      {
        "title": "Saisie de données",
        "description": "Évitez les erreurs de saisie en extrayant directement des listes de prix ou d'inventaires.",
        "icon": "database"
      },
      {
        "title": "Études scientifiques",
        "description": "Récupérez des tableaux de données de publications pour vos propres recherches.",
        "icon": "table"
      }
    ],
    "faq": [
      {
        "question": "Les formules sont-elles conservées ?",
        "answer": "Non, les PDF ne contiennent que des valeurs. L'outil extrait les données textuelles et numériques dans des cellules distinctes."
      },
      {
        "question": "Comment sont gérées les pages multiples ?",
        "answer": "Tous les tableaux détectés sont généralement regroupés dans une seule feuille ou des feuilles consécutives selon la structure."
      },
      {
        "question": "La précision est-elle garantie ?",
        "answer": "L'outil est très précis pour les tableaux avec des bordures claires, mais fonctionne aussi pour les structures de colonnes simples."
      }
    ]
  },
  "rotate-custom": {
    "title": "Rotation personnalisée",
    "metaDescription": "Faites pivoter les pages PDF selon n'importe quel angle. Rotation précise pour redresser les documents.",
    "keywords": [
      "rotation personnalisée pdf",
      "redresser pdf",
      "pivoter pdf angle",
      "inclinaison pdf"
    ],
    "description": "\n      <p>Allez au-delà de la rotation standard à 90 degrés. Cet outil vous permet de faire pivoter vos pages PDF selon l'angle précis de votre choix pour corriger les défauts d'inclinaison.</p>\n      <p>C'est la solution idéale pour redresser des documents numérisés de travers ou ajuster l'orientation de plans techniques et de dessins.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Sélectionnez le document dont vous souhaitez ajuster l'angle."
      },
      {
        "step": 2,
        "title": "Réglez l'angle",
        "description": "Utilisez le curseur ou entrez manuellement le degré précis de rotation."
      },
      {
        "step": 3,
        "title": "Appliquez et téléchargez",
        "description": "Visualisez le résultat et téléchargez votre PDF redressé."
      }
    ],
    "useCases": [
      {
        "title": "Correction de scans",
        "description": "Redressez les pages qui ont été numérisées avec un léger angle.",
        "icon": "scan"
      },
      {
        "title": "Dessins techniques",
        "description": "Ajustez l'orientation de schémas ou de plans pour une meilleure lecture.",
        "icon": "ruler"
      },
      {
        "title": "Mise en page créative",
        "description": "Appliquez des angles artistiques à vos documents pour des présentations uniques.",
        "icon": "pen-tool"
      }
    ],
    "faq": [
      {
        "question": "Puis-je redresser une seule page ?",
        "answer": "Oui, vous pouvez choisir d'appliquer la rotation à une seule page, à une plage ou à tout le document."
      },
      {
        "question": "Est-ce que cela coupe le contenu ?",
        "answer": "Non, les dimensions de la page sont automatiquement ajustées pour que tout le contenu pivoté reste visible."
      },
      {
        "question": "Peut-on entrer des décimales ?",
        "answer": "Oui, l'outil accepte des degrés de rotation précis pour un redressement parfait."
      }
    ]
  },
  "repair-pdf-advanced": {
    "title": "Réparation avancée PDF",
    "metaDescription": "Réparez les fichiers PDF gravement endommagés. Restaurez la structure et récupérez vos données.",
    "keywords": [
      "réparer pdf corrompu",
      "récupérer fichier pdf",
      "pdf illisible",
      "restauration pdf"
    ],
    "description": "\n      <p>Cet outil utilise des algorithmes de reconstruction profonde pour tenter de sauver les fichiers PDF qui refusent de s'ouvrir ou qui affichent des messages d'erreur de corruption.</p>\n      <p>Il analyse la table des objets du fichier et tente de reconstruire une structure valide pour permettre l'accès au contenu texte et image.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez le fichier corrompu",
        "description": "Sélectionnez le document PDF endommagé."
      },
      {
        "step": 2,
        "title": "Analyse et reconstruction",
        "description": "L'outil tente de réparer les erreurs de syntaxe et les tables de références croisées."
      },
      {
        "step": 3,
        "title": "Récupérez vos données",
        "description": "Téléchargez la version réparée et vérifiez l'intégrité du contenu."
      }
    ],
    "useCases": [
      {
        "title": "Échecs de téléchargement",
        "description": "Réparez les fichiers qui ont été mal téléchargés ou interrompus.",
        "icon": "download-cloud"
      },
      {
        "title": "Corruption de stockage",
        "description": "Tentez de sauver des fichiers provenant de clés USB ou disques durs défectueux.",
        "icon": "database"
      },
      {
        "title": "Erreurs logicielles",
        "description": "Réparez les PDF générés par des outils tiers qui ont produit un formatage invalide.",
        "icon": "alert-triangle"
      }
    ],
    "faq": [
      {
        "question": "La réparation réussit-elle toujours ?",
        "answer": "Le succès dépend du niveau de dommage binaire. Si les données essentielles sont effacées, la récupération totale peut être impossible."
      },
      {
        "question": "Mes images seront-elles sauvées ?",
        "answer": "L'outil tente de récupérer chaque objet. Si l'image n'est pas corrompue au niveau binaire, elle sera restaurée."
      },
      {
        "question": "Est-ce sécurisé ?",
        "answer": "Comme pour tous nos outils, la réparation se fait localement. Vos fichiers confidentiels ne sont jamais envoyés sur nos serveurs."
      }
    ]
  },
  "pdf-to-pptx": {
    "title": "PDF en PowerPoint",
    "metaDescription": "Convertissez des PDF en présentations PPTX éditables. Transformez vos pages en diapositives.",
    "keywords": [
      "pdf en ppt",
      "pdf en powerpoint",
      "convertir pdf en pptx",
      "slides pdf"
    ],
    "description": "\n      <p>Transformez vos documents PDF en présentations Microsoft PowerPoint (PPTX). Chaque page du PDF devient une diapositive individuelle avec des éléments de texte et d'image éditables.</p>\n      <p>Parfait pour mettre à jour des présentations dont vous n'avez que la version PDF.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléchargez votre PDF",
        "description": "Sélectionnez le document à transformer en présentation."
      },
      {
        "step": 2,
        "title": "Génération des diapositives",
        "description": "L'outil convertit les éléments graphiques et textuels en objets PowerPoint."
      },
      {
        "step": 3,
        "title": "Téléchargez le PPTX",
        "description": "Récupérez votre présentation et personnalisez vos diapositives."
      }
    ],
    "useCases": [
      {
        "title": "Réutiliser des slides",
        "description": "Transformez un catalogue ou une étude de cas PDF en présentation commerciale.",
        "icon": "presentation"
      },
      {
        "title": "Mise à jour de cours",
        "description": "Convertissez des supports de cours PDF en PowerPoint pour ajouter de nouvelles animations.",
        "icon": "graduation-cap"
      },
      {
        "title": "Réunion de dernière minute",
        "description": "Préparez une présentation à partir d'un document de recherche en quelques secondes.",
        "icon": "zap"
      }
    ],
    "faq": [
      {
        "question": "Le texte restera-t-il éditable ?",
        "answer": "Oui, dans la majorité des cas, le texte est extrait comme des boîtes de texte PowerPoint standard."
      },
      {
        "question": "Les images sont-elles de bonne qualité ?",
        "answer": "Oui, nous extrayons les images à leur résolution d'origine pour garantir une présentation nette."
      },
      {
        "question": "Puis-je modifier le design ?",
        "answer": "Une fois converti, vous pouvez utiliser tous les outils de PowerPoint pour changer les couleurs, les polices et la disposition."
      }
    ]
  },
  "email-to-pdf": {
    "title": "Email vers PDF",
    "metaDescription": "Convertissez des fichiers email (.eml, .msg) en documents PDF. Préserve le formatage, les images intégrées, les liens cliquables et les pièces jointes.",
    "keywords": [
      "email vers pdf",
      "eml vers pdf",
      "msg vers pdf",
      "convertir email",
      "outlook vers pdf"
    ],
    "description": "\n      <p>Email vers PDF convertit vos fichiers email (formats .eml et .msg) en documents PDF bien formatés. L'outil préserve les informations d'en-tête de l'email, le contenu du corps, les images intégrées avec remplacement CID, les liens cliquables et intègre les pièces jointes directement dans le PDF.</p>\n      <p>Personnalisez les options de sortie incluant la taille de page (A4, Letter, Legal), le format de date avec support de fuseau horaire, et si vous souhaitez inclure les champs CC/BCC et les informations de pièces jointes.</p>\n      <p>Toute la conversion se fait localement dans votre navigateur, garantissant que vos emails restent privés et sécurisés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger le Fichier Email",
        "description": "Téléchargez votre fichier email .eml ou .msg."
      },
      {
        "step": 2,
        "title": "Configurer les Options",
        "description": "Définissez la taille de page, le format de date, le fuseau horaire et choisissez les champs à inclure."
      },
      {
        "step": 3,
        "title": "Convertir et Télécharger",
        "description": "Convertissez en PDF avec pièces jointes intégrées et téléchargez le résultat."
      }
    ],
    "useCases": [
      {
        "title": "Dossiers Juridiques",
        "description": "Archivez des emails importants en PDF avec pièces jointes intégrées pour documentation légale.",
        "icon": "scale"
      },
      {
        "title": "Archives Professionnelles",
        "description": "Convertissez la correspondance professionnelle en PDF pour conservation à long terme.",
        "icon": "briefcase"
      },
      {
        "title": "Préservation de Preuves",
        "description": "Sauvegardez des preuves email avec images intégrées et pièces jointes dans un format PDF non modifiable.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Quels formats d'email sont supportés ?",
        "answer": "Les fichiers .eml (RFC 822) et .msg (Microsoft Outlook) sont tous deux entièrement supportés."
      },
      {
        "question": "Les pièces jointes sont-elles incluses ?",
        "answer": "Oui ! Les pièces jointes sont intégrées directement dans le fichier PDF. Vous pouvez les extraire du PDF en utilisant un lecteur PDF compatible."
      },
      {
        "question": "Les images intégrées sont-elles affichées ?",
        "answer": "Oui, les images intégrées référencées via CID (Content-ID) sont automatiquement converties en URIs de données base64 et affichées dans le PDF."
      },
      {
        "question": "Les liens sont-ils cliquables ?",
        "answer": "Oui, tous les liens HTML (balises <a>) et URLs dans les emails en texte brut sont convertis en liens cliquables dans le PDF."
      },
      {
        "question": "Le formatage de l'email est-il préservé ?",
        "answer": "Oui, les emails HTML maintiennent leur formatage autant que possible, incluant les styles, images et liens."
      }
    ]
  },
  "djvu-to-pdf": {
    "title": "DJVU vers PDF",
    "metaDescription": "Convertissez les fichiers de documents DJVU en PDF. Rendu haute qualité pour documents scannés et livres.",
    "keywords": [
      "djvu vers pdf",
      "convertir djvu",
      "convertisseur djvu",
      "djvu pdf",
      "djv vers pdf"
    ],
    "description": "\n      <p>DJVU vers PDF convertit les fichiers de documents DjVu en documents PDF haute qualité. DjVu est un format de fichier informatique conçu principalement pour stocker des documents scannés, en particulier ceux contenant une combinaison de texte, dessins au trait et photographies.</p>\n      <p>Cet outil rend chaque page de votre fichier DJVU à votre DPI choisi (points par pouce) et les combine en un document PDF consultable. Parfait pour convertir des livres scannés, manuels techniques et documents d'archives.</p>\n      <p>Toute la conversion se produit localement dans votre navigateur, garantissant que vos documents restent privés et sécurisés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger le Fichier DJVU",
        "description": "Glissez-déposez votre fichier .djvu ou .djv, ou cliquez pour sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Configurer les Options",
        "description": "Choisissez le DPI de sortie (72, 150 ou 300) et la qualité d'image pour le PDF."
      },
      {
        "step": 3,
        "title": "Convertir et Télécharger",
        "description": "Cliquez sur Convertir en PDF et téléchargez votre document converti."
      }
    ],
    "useCases": [
      {
        "title": "Documents d'Archives",
        "description": "Convertissez les archives DJVU au format PDF universel.",
        "icon": "archive"
      },
      {
        "title": "Partager des Livres Scannés",
        "description": "Partagez des livres scannés au format PDF pour une compatibilité plus large.",
        "icon": "share-2"
      },
      {
        "title": "Imprimer des Documents",
        "description": "Convertissez DJVU en PDF haute qualité pour l'impression.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que le format DJVU ?",
        "answer": "DjVu est un format de fichier conçu pour stocker des documents scannés, en particulier ceux avec texte, dessins et images. Il offre une meilleure compression que PDF pour le contenu scanné."
      },
      {
        "question": "Quel DPI dois-je choisir ?",
        "answer": "72 DPI convient à la visualisation web, 150 DPI pour les documents standard et 300 DPI pour l'impression haute qualité."
      },
      {
        "question": "Le texte sera-t-il consultable ?",
        "answer": "Le texte sera rendu comme images. Si vous avez besoin de texte consultable, envisagez d'utiliser notre outil OCR PDF après la conversion."
      }
    ]
  },
  "fb2-to-pdf": {
    "title": "FB2 vers PDF",
    "metaDescription": "Convertissez les livres électroniques FictionBook (FB2) en PDF. Prend en charge plusieurs fichiers avec rendu haute qualité.",
    "keywords": [
      "fb2 vers pdf",
      "convertir fb2",
      "fictionbook vers pdf",
      "convertisseur fb2",
      "fb2.zip vers pdf"
    ],
    "description": "\n      <p>FB2 vers PDF convertit les fichiers de livres électroniques FictionBook (FB2) en documents PDF haute qualité. FB2 est un format de livre électronique basé sur XML très populaire largement utilisé en Russie et en Europe de l'Est.</p>\n      <p>Cet outil prend en charge à la fois les fichiers .fb2 et .fb2.zip, et peut traiter plusieurs fichiers à la fois. Il préserve le formatage du texte, les images et la structure des chapitres de vos livres électroniques.</p>\n      <p>Toute la conversion se produit localement dans votre navigateur en utilisant une technologie de rendu avancée, garantissant que vos livres restent privés et la conversion est rapide.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger les Fichiers FB2",
        "description": "Glissez-déposez un ou plusieurs fichiers .fb2 ou .fb2.zip, ou cliquez pour sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Sélectionner la Qualité",
        "description": "Choisissez la qualité de sortie : Faible (72 DPI), Moyenne (150 DPI) ou Haute (300 DPI)."
      },
      {
        "step": 3,
        "title": "Convertir et Télécharger",
        "description": "Cliquez sur Convertir en PDF et téléchargez votre/vos document(s) converti(s)."
      }
    ],
    "useCases": [
      {
        "title": "Imprimer des Livres Électroniques",
        "description": "Convertissez les livres électroniques FB2 en PDF pour impression physique.",
        "icon": "printer"
      },
      {
        "title": "Conversion par Lots",
        "description": "Convertissez plusieurs fichiers FB2 en PDF à la fois.",
        "icon": "layers"
      },
      {
        "title": "Format Universel",
        "description": "Partagez des livres électroniques au format PDF qui fonctionne sur n'importe quel appareil.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Puis-je convertir plusieurs fichiers FB2 à la fois ?",
        "answer": "Oui ! Cet outil prend en charge la conversion par lots de jusqu'à 20 fichiers FB2 simultanément."
      },
      {
        "question": "Les fichiers .fb2.zip sont-ils pris en charge ?",
        "answer": "Oui, l'outil extrait et convertit automatiquement les fichiers FB2 depuis les archives .fb2.zip."
      },
      {
        "question": "Le formatage est-il préservé ?",
        "answer": "Oui ! L'outil utilise le rendu FB2 natif, préservant le formatage du texte, les images et la structure des chapitres avec une haute fidélité."
      }
    ]
  },
  "deskew-pdf": {
    "title": "Redresser PDF",
    "metaDescription": "Redressez automatiquement les pages PDF scannées ou inclinées. Corrigez les documents déformés avec détection précise d'angle.",
    "keywords": [
      "redresser pdf",
      "corriger pdf incliné",
      "corriger scan incliné",
      "rotation pdf automatique",
      "corriger angle pdf"
    ],
    "description": "\n      <p>Redresser PDF détecte et corrige automatiquement les pages inclinées ou déformées dans vos documents PDF en utilisant une analyse avancée de variance de profil de projection. Ceci est essentiel pour les documents scannés qui ont été introduits dans le scanner à un angle.</p>\n      <p>L'outil analyse l'alignement du texte et du contenu à différents angles pour trouver la rotation optimale, puis applique la correction. Vous pouvez ajuster le seuil de sensibilité (1-30) et les paramètres DPI (72-300) pour des résultats optimaux.</p>\n      <p>Tout le traitement se produit localement dans votre navigateur en utilisant la technologie WebAssembly, garantissant que vos documents restent privés et sécurisés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger votre PDF",
        "description": "Glissez-déposez votre fichier PDF scanné ou cliquez pour sélectionner."
      },
      {
        "step": 2,
        "title": "Configurer les Paramètres",
        "description": "Ajustez la sensibilité du seuil et DPI si nécessaire pour une meilleure détection."
      },
      {
        "step": 3,
        "title": "Traiter et Télécharger",
        "description": "Cliquez sur Redresser pour redresser les pages et télécharger le PDF corrigé."
      }
    ],
    "useCases": [
      {
        "title": "Documents Scannés",
        "description": "Corrigez les pages qui ont été scannées à un angle depuis les chargeurs de documents.",
        "icon": "scan"
      },
      {
        "title": "Scans Mobiles",
        "description": "Corrigez les photos inclinées de documents prises avec des smartphones.",
        "icon": "smartphone"
      },
      {
        "title": "Restauration d'Archives",
        "description": "Redressez les anciennes archives scannées pour une meilleure lisibilité.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quelle est la précision de la détection d'angle ?",
        "answer": "L'outil utilise l'analyse de variance de profil de projection pour détecter les angles de déformation jusqu'à ±10 degrés avec une grande précision. Il ignore automatiquement les pages avec des angles inférieurs à 0,3 degré."
      },
      {
        "question": "La qualité du texte sera-t-elle affectée ?",
        "answer": "Pour les rotations à des multiples de 90 degrés, aucune perte de qualité ne se produit. Pour d'autres angles, l'outil arrondit au degré le plus proche et maintient une bonne qualité."
      },
      {
        "question": "Puis-je redresser uniquement des pages spécifiques ?",
        "answer": "L'outil analyse toutes les pages mais ne corrige que celles avec une déformation détectée au-dessus du seuil de sensibilité. Les pages avec une déformation minimale sont laissées inchangées."
      },
      {
        "question": "Qu'est-ce que le seuil de sensibilité ?",
        "answer": "Les valeurs 1-10 corrigent uniquement les inclinaisons évidentes, 11-20 détectent une déformation modérée, et 21-30 capturent des angles subtils. La valeur par défaut est 10 pour une détection équilibrée."
      },
      {
        "question": "Combien de temps prend le traitement ?",
        "answer": "Le temps de traitement dépend de la taille du fichier et du DPI. 150 DPI (par défaut) offre un bon équilibre entre vitesse et précision. Un DPI plus élevé est plus précis mais plus lent."
      }
    ]
  },
  "pdf-to-pdfa": {
    "title": "PDF vers PDF/A",
    "metaDescription": "Convertissez PDF au format d'archivage PDF/A. Assurez la préservation à long terme des documents avec les normes ISO.",
    "keywords": [
      "pdf vers pdfa",
      "convertisseur pdfa",
      "archiver pdf",
      "archivage pdf",
      "préservation à long terme"
    ],
    "description": "\n      <p>PDF vers PDF/A convertit vos documents PDF au format PDF/A, la norme ISO pour l'archivage de documents à long terme. PDF/A garantit que les documents seront visualisables et reproductibles pendant des décennies.</p>\n      <p>Choisissez parmi PDF/A-1b (conformité de base), PDF/A-2b (recommandé, prend en charge la transparence) ou PDF/A-3b (permet les fichiers intégrés). L'outil intègre les polices et aplatit la transparence selon les besoins.</p>\n      <p>Toute la conversion se produit localement dans votre navigateur, garantissant que vos documents restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger votre PDF",
        "description": "Téléchargez le PDF que vous souhaitez convertir en PDF/A."
      },
      {
        "step": 2,
        "title": "Sélectionner le Niveau PDF/A",
        "description": "Choisissez le niveau de conformité PDF/A-1b, PDF/A-2b ou PDF/A-3b."
      },
      {
        "step": 3,
        "title": "Convertir et Télécharger",
        "description": "Convertissez en PDF/A et téléchargez le document d'archives."
      }
    ],
    "useCases": [
      {
        "title": "Archives Légales",
        "description": "Convertissez les documents légaux en PDF/A pour un stockage à long terme admissible en cour.",
        "icon": "scale"
      },
      {
        "title": "Registres Gouvernementaux",
        "description": "Conformez-vous aux exigences d'archivage gouvernemental en utilisant PDF/A.",
        "icon": "building"
      },
      {
        "title": "Archives d'Entreprise",
        "description": "Préservez les documents d'entreprise importants pour l'accessibilité future.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quel niveau PDF/A dois-je utiliser ?",
        "answer": "PDF/A-2b est recommandé pour la plupart des utilisations. Utilisez 1b pour une compatibilité maximale ou 3b si vous avez besoin de fichiers intégrés."
      },
      {
        "question": "Qu'est-ce qui rend PDF/A différent ?",
        "answer": "PDF/A intègre les polices, désactive le chiffrement et garantit que tous les éléments sont autonomes pour la visualisation future."
      },
      {
        "question": "Puis-je reconvertir depuis PDF/A ?",
        "answer": "Les fichiers PDF/A sont des PDF standard et peuvent être ouverts normalement. Les fonctionnalités d'archivage ajoutent des restrictions, pas des limitations."
      }
    ]
  },
  "digital-sign-pdf": {
    "title": "Signature Numérique",
    "metaDescription": "Signez numériquement des documents PDF avec des certificats PFX, P12 ou PEM. Ajoutez des signatures basées sur des certificats localement dans votre navigateur.",
    "keywords": [
      "signature numérique pdf",
      "certificat x509",
      "signature pfx",
      "signature p12",
      "signature pem",
      "signature électronique"
    ],
    "description": "<p>L'outil de Signature Numérique vous permet d'ajouter des signatures numériques X.509 cryptographiques aux documents PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger le PDF",
        "description": "Téléchargez le document PDF que vous souhaitez signer numériquement."
      },
      {
        "step": 2,
        "title": "Charger le Certificat",
        "description": "Téléchargez votre fichier de certificat X.509 (.pfx, .p12 ou .pem) et entrez le mot de passe."
      },
      {
        "step": 3,
        "title": "Signer et Télécharger",
        "description": "Cliquez sur Signer le PDF pour appliquer la signature numérique et téléchargez le document signé."
      }
    ],
    "useCases": [
      {
        "title": "Documents Légaux",
        "description": "Signez des contrats et documents légaux avec des signatures numériques juridiquement contraignantes.",
        "icon": "scale"
      },
      {
        "title": "Approbations Commerciales",
        "description": "Signez numériquement des factures et documents d'approbation pour les pistes d'audit.",
        "icon": "briefcase"
      },
      {
        "title": "Intégrité du Document",
        "description": "Assurez-vous que les documents n'ont pas été altérés après la signature.",
        "icon": "shield-check"
      }
    ],
    "faq": [
      {
        "question": "Quels formats de certificat sont pris en charge ?",
        "answer": "Les formats de certificat PFX (.pfx), PKCS#12 (.p12) et PEM (.pem) sont pris en charge."
      },
      {
        "question": "La signature est-elle légalement valide ?",
        "answer": "Oui, les signatures numériques X.509 avec un certificat valide sont légalement reconnues dans la plupart des juridictions."
      },
      {
        "question": "Puis-je ajouter une signature visible ?",
        "answer": "Oui, vous pouvez ajouter une signature visible avec du texte, une image, une position et un style personnalisés."
      }
    ]
  },
  "validate-signature": {
    "title": "Valider la Signature",
    "metaDescription": "Vérifiez les signatures numériques dans les documents PDF. Vérifiez la validité du certificat, les informations du signataire et l'intégrité du document.",
    "keywords": [
      "valider signature pdf",
      "vérifier signature numérique",
      "vérifier certificat pdf",
      "vérification de signature"
    ],
    "description": "<p>L'outil Valider la Signature vous permet de vérifier les signatures numériques dans les documents PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger le PDF Signé",
        "description": "Téléchargez un document PDF contenant des signatures numériques."
      },
      {
        "step": 2,
        "title": "Voir les Résultats",
        "description": "Voyez toutes les signatures trouvées dans le document avec leur statut de validité."
      },
      {
        "step": 3,
        "title": "Exporter le Rapport",
        "description": "Téléchargez optionnellement un rapport JSON des résultats de validation."
      }
    ],
    "useCases": [
      {
        "title": "Vérification de Documents",
        "description": "Vérifiez que les documents signés sont authentiques et n'ont pas été altérés.",
        "icon": "shield-check"
      },
      {
        "title": "Audit de Conformité",
        "description": "Vérifiez la validité des signatures à des fins de conformité et d'audit.",
        "icon": "clipboard-check"
      },
      {
        "title": "Examen des Certificats",
        "description": "Consultez les détails du certificat et les dates d'expiration des documents signés.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "Que signifie \"valide\" ?",
        "answer": "Une signature valide signifie que le document n'a pas été modifié depuis la signature et que la chaîne de certificats est intacte."
      },
      {
        "question": "Puis-je valider plusieurs PDF ?",
        "answer": "Oui, vous pouvez télécharger plusieurs PDF et valider toutes les signatures en lot."
      },
      {
        "question": "Pourquoi une signature pourrait-elle être invalide ?",
        "answer": "Les signatures peuvent être invalides si le document a été modifié, le certificat a expiré ou le certificat n'est pas de confiance."
      }
    ]
  },
  "form-logic-designer": {
    "title": "Logique de formulaire",
    "metaDescription": "Créez des règles de formulaire PDF avec un concepteur visuel. Connectez les champs et ajoutez une logique de calcul et de validation interactive.",
    "keywords": [
      "logique de formulaire PDF",
      "injection AcroJS",
      "flux de nœuds",
      "PDF interactif",
      "dépendances de champs"
    ],
    "description": "\n        <p>Le Concepteur Logique de Formulaire Interactif est un outil pionnier qui comble un manque majeur dans les fonctionnalités PDF : la création de champs actifs et réactifs au lieu de formulaires plats et statiques.</p>\n        <p>Grâce à notre canevas visuel doté de \"nœuds effet verre dépoli lumineux\" (basé sur React Flow), les champs de formulaire sont représentés comme des modules connectés. Vous pouvez faire glisser des liens pour définir des relations : ex., lorsqu'une case est cochée ➜ activer une saisie de texte ➜ calculer automatiquement les valeurs et mettre à jour un champ total.</p>\n        <p>Une fois conçu, le moteur AcroJS compile la logique en Acrobat JavaScript officiel et l'injecte dans les dictionnaires '/AA' (Actions Additionnelles) de l'AcroForm. Les comportements interactifs s'exécutent nativement dans tout lecteur PDF standard.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser un PDF Interactif",
        "description": "Fournissez un fichier PDF contenant déjà des champs de formulaire actifs (AcroForm)."
      },
      {
        "step": 2,
        "title": "Concevoir la Logique sur le Canevas",
        "description": "Connectez les champs sous forme de nœuds. Reliez les événements de sortie (changement, perte de focus) aux actions cibles (afficher, masquer, calculer, désactiver)."
      },
      {
        "step": 3,
        "title": "Compiler et Injecter",
        "description": "Injectez la logique JavaScript compilée dans le dictionnaire PDF et enregistrez le document intelligent final."
      }
    ],
    "useCases": [
      {
        "title": "Contrats Commerciaux Intelligents",
        "description": "Affichez ou masquez des champs de saisie supplémentaires de manière dynamique en fonction des conditions sélectionnées par le client.",
        "icon": "file-signature"
      },
      {
        "title": "Formulaires de Frais Automatisés",
        "description": "Additionnez plusieurs lignes de frais et calculez les taxes de manière dynamique sans calcul manuel.",
        "icon": "calculator"
      },
      {
        "title": "Questionnaires Interactifs",
        "description": "Passez les questions non pertinentes en fonction des réponses précédentes, offrant ainsi une expérience de saisie mobile plus propre.",
        "icon": "form-input"
      }
    ],
    "faq": [
      {
        "question": "Ai-je besoin d'un PDF avec des champs préexistants ?",
        "answer": "Oui. Cet outil est conçu pour lier des règles logiques à des champs existants. Si votre PDF n'a pas de champs interactifs, utilisez d'abord notre outil Créateur de Formulaires pour ajouter des saisies et des cases à cocher."
      },
      {
        "question": "Cette logique fonctionnera-t-elle sur n'importe quel lecteur PDF ?",
        "answer": "Elle fonctionne sur tous les lecteurs PDF conformes aux normes Adobe PDF et prenant en charge Acrobat JavaScript (tels qu'Adobe Acrobat Reader, Foxit Reader et les principaux navigateurs Web). Les lecteurs mobiles minimalistes peuvent ne prendre en charge que les actions de base."
      },
      {
        "question": "Cela affecte-t-il l'impression papier ?",
        "answer": "Pas du tout. Les scripts injectés s'exécutent uniquement à l'écran lors du remplissage du formulaire. Lors de l'impression, l'état actuel des champs est imprimé de manière statique sans aucune visualisation de nœuds."
      }
    ]
  },
  "global-invoice-parser": {
    "title": "Convertisseur du montant de la facture PDF",
    "metaDescription": "Extrayez les montants des factures des PDF, convertissez les totaux entre les devises et ajoutez un récapitulatif des calculs au document.",
    "keywords": [
      "traduire facture",
      "convertisseur devise facture",
      "calculatrice taux de change pdf",
      "tamponner monnaie locale",
      "outil facture globale"
    ],
    "description": "\n        <p>Le Traducteur de Factures Globales apporte une clarté maximale aux équipes financières internationales et aux acheteurs mondiaux.</p>\n        <p>La gestion de factures dans plusieurs devises ($, €, ¥) implique souvent une arithmétique manuelle fastidieuse. Cet outil permet la <strong>traduction des étiquettes en place et la conversion des taux de change en temps réel</strong>.</p>\n        <p>Il analyse le document pour trouver les totaux de prix, effectue des calculs basés sur les devises de référence et applique physiquement un élégant registre de taux de change effet verre dépoli semi-transparent dans la marge de la page. Il s'affiche avec un magnifique effet visuel de chiffres déroulants style machine à sous, apportant un contrôle absolu à la facturation globale.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser la Facture PDF",
        "description": "Importez toute facture libellée en devises étrangères (par exemple, USD, EUR, JPY)."
      },
      {
        "step": 2,
        "title": "Sélectionner la Devise Locale",
        "description": "Choisissez votre devise locale (par exemple, EUR) et spécifiez un taux de change personnalisé ou en temps réel."
      },
      {
        "step": 3,
        "title": "Appliquer le Sello",
        "description": "Cliquez sur exécuter pour superposer le registre de taux de change prêt pour la comptabilité."
      }
    ],
    "useCases": [
      {
        "title": "Remboursement de Déplacements Professionnels",
        "description": "Convertissez les factures de voyage dans la devise locale et tamponnez les détails de la conversion, simplifiant ainsi les flux de travail comptables.",
        "icon": "plane"
      },
      {
        "title": "Audit d'Achats Transfrontaliers",
        "description": "Traduisez les colonnes des factures et isolez le coût réel des biens de commerce électronique.",
        "icon": "credit-card"
      },
      {
        "title": "Comptabilité Commerciale Internationale",
        "description": "Tamponnez des registres de conversion cohérents sur les factures d'entreprise pour rationaliser les audits de fin d'année.",
        "icon": "folder-open"
      }
    ],
    "faq": [
      {
        "question": "Comment détecte-t-il les montants des factures ?",
        "answer": "Il scanne les flux de caractères à la recherche de symboles de devises et analyse les en-têtes sémantiques tels que \"Total\" ou \"Dû\" pour localiser la somme finale de la facture."
      },
      {
        "question": "Les taux de change sont-ils récupérés en temps réel ?",
        "answer": "Oui. Par défaut, il récupère les taux de base à partir d'API financières standard. Vous pouvez également spécifier des taux personnalisés pour les audits internes."
      },
      {
        "question": "Le tampon couvrira-t-il des détails importants de la facture ?",
        "answer": "Le moteur scanne la marge de la page pour trouver le positionnement optimal. Le tampon est semi-transparent, s'alignant élégamment avec vos mises en page."
      }
    ]
  },
  "pdf-to-cbz": {
    "title": "PDF en CBZ",
    "metaDescription": "Convertissez des fichiers PDF en archives de bandes dessinées CBZ. Conserve l'ordre et la qualité des images.",
    "keywords": [
      "pdf en cbz",
      "convertir bd",
      "convertisseur cbz"
    ],
    "description": "<p>PDF vers CBZ est conçu sur mesure pour les passionnés de bandes dessinées et les archivistes d'ebooks numériques. Il restitue chaque page de vos volumes PDF en graphiques rastérisés haute fidélité et les compile dans un ensemble Comic Book ZIP (.cbz) standard.</p>\n      <p>Pour éliminer le scraping manuel frustrant dans des systèmes comme Calibre, Komga, Kavita ou CDisplayEx, le processeur génère et injecte automatiquement les fichiers <strong>ComicInfo.xml</strong> et <strong>metadata.opf</strong> en interne, tout en écrivant simultanément une charge utile <strong>ComicBookInfo JSON</strong> standardisée directement dans les métadonnées de commentaire du fichier ZIP.</p>\n      <p>Comprend des curseurs de configuration complets pour la qualité de compression de l'image, l'échelle des dimensions de la page, les bascules de lecture de mise en page de droite à gauche (mode Manga) et le filtrage des couleurs en niveaux de gris noir et blanc.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger la bande dessinée PDF",
        "description": "Faites glisser et déposez votre fichier PDF principal de bande dessinée, d'artbook ou de manga."
      },
      {
        "step": 2,
        "title": "Saisir les métadonnées de la bande dessinée",
        "description": "Remplissez les champs Série, Volume, Titre, Auteur et Éditeur et activez la mise en page ou l'optimisation des niveaux de gris."
      },
      {
        "step": 3,
        "title": "Compiler et télécharger",
        "description": "Cliquez sur Convertir pour compiler et récupérer instantanément votre fichier .cbz riche en métadonnées, prêt pour Calibre."
      }
    ],
    "useCases": [
      {
        "title": "Emballage de bande dessinée rétrograde",
        "description": "Transformez des livres PDF numérisés bruts en fichiers de bandes dessinées CBZ compacts et conformes aux normes, facilement récupérables par les gestionnaires de bibliothèques de bandes dessinées.",
        "icon": "book"
      },
      {
        "title": "Intégration de calibre sans effort",
        "description": "Le schéma métadata.opf intégré permet à Caliber de récupérer et de classer les créateurs et les problèmes de volume sans recherche manuelle.",
        "icon": "database"
      },
      {
        "title": "Amélioration de l'écran E-Ink",
        "description": "Pré-filtrez les canaux de couleurs graphiques en niveaux de gris à contraste élevé lors de la compilation, améliorant ainsi le rafraîchissement visuel et la clarté sur les écrans E-ink tout en économisant de l'espace de stockage.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce qu'un fichier .cbz ?",
        "answer": "Un fichier CBZ est un format de conteneur d'archives spécialisé pour les séries de bandes dessinées. Il est formaté en interne sous la forme d'un package ZIP contenant des images de pages numérotées séquentiellement ainsi que des fichiers XML de métadonnées structurelles."
      },
      {
        "question": "Comment les métadonnées sont-elles compatibles ?",
        "answer": "Nous compilons et intégrons ComicInfo.xml, metadata.opf et les commentaires de fichiers ZIP en un seul passage. Cela garantit une conformité absolue dans plusieurs écosystèmes de bandes dessinées et de livres électroniques."
      },
      {
        "question": "Pourquoi utiliser le mode Niveaux de gris ?",
        "answer": "Si vous lisez sur un lecteur E-ink en niveaux de gris (comme Kindle ou Kobo), la compilation directement en niveaux de gris réduit les images fantômes d'artefacts, offre des niveaux de contraste supérieurs et réduit la taille finale du fichier CBZ."
      }
    ]
  },
  "overlay-pdf": {
    "title": "Superposer PDF",
    "metaDescription": "Superposez deux pages PDF en une seule. Parfait pour ajouter des tampons, des fonds et des filigranes.",
    "keywords": [
      "superposer pdf",
      "pdf overlay",
      "tampon pdf"
    ],
    "description": "<p>Overlay PDF vous permet de superposer les pages d'un document PDF au-dessus ou en dessous d'un autre document PDF. Il est parfait pour appliquer des en-têtes, ajouter des grilles d'arrière-plan, tamponner des filigranes ou fusionner des brouillons de mise en page.</p>\n      <p>Prend en charge le mode Superposition (le calque passe en haut) et le mode Sous-couche (le calque passe en dessous). Spécifiez des plages de pages cibles personnalisées ou bouclez des documents de superposition plus courts pour couvrir automatiquement l'intégralité du fichier de base.</p>\n      <p>Tous les traitements sont entièrement exécutés localement dans votre navigateur Web, garantissant une sécurité totale et la confidentialité des données.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger le PDF principal",
        "description": "Faites glisser et déposez votre document PDF de base principal."
      },
      {
        "step": 2,
        "title": "Télécharger le calque PDF",
        "description": "Fournissez le document de superposition/sous-couche qui fait office de calque."
      },
      {
        "step": 3,
        "title": "Configurer la superposition",
        "description": "Choisissez le mode superposition ou sous-couche, spécifiez des plages de pages et activez la boucle de page."
      },
      {
        "step": 4,
        "title": "Compiler et télécharger",
        "description": "Cliquez sur Compiler pour traiter et télécharger le PDF du résultat en couches."
      }
    ],
    "useCases": [
      {
        "title": "Papier à en-tête d'entreprise",
        "description": "Superposez le contenu des factures aux modèles de papier à en-tête standard de l'entreprise.",
        "icon": "file-text"
      },
      {
        "title": "Filigranes et sceaux",
        "description": "Superposez des tampons de sécurité, des sceaux de signature ou des arrière-plans sur les documents.",
        "icon": "shield"
      },
      {
        "title": "Plans de dessin",
        "description": "Combinez des brouillons d'architectures ou des grilles de mise en page sous des blocs de texte.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Quelle est la différence entre Overlay et Underlay ?",
        "answer": "La superposition place la couche secondaire au-dessus de votre contenu principal. Underlay le place tout en bas, agissant comme un modèle d'arrière-plan."
      },
      {
        "question": "Puis-je boucler le calque de superposition ?",
        "answer": "Oui, si le calque PDF est plus court que le document de base, l'activation de Loop le fera défiler (par exemple page 1, 2, 1, 2) pour couvrir toutes les pages de base."
      },
      {
        "question": "La plage de pages est-elle prise en charge ?",
        "answer": "Oui, vous pouvez cibler des pages spécifiques en utilisant une syntaxe de plage telle que « 1-5 », « impair », « pair » ou des listes séparées par des virgules."
      }
    ]
  },
  "timestamp-pdf": {
    "title": "Horodatage local de PDF",
    "metaDescription": "Cet outil crée un horodatage local autosigné avec l’horloge de votre appareil. Il ne demande ni ne vérifie un horodatage auprès de la TSA sélectionnée.",
    "keywords": [
      "Horodatage local de PDF",
      "PDF",
      "Heure de l’appareil"
    ],
    "description": "<p>Sélectionnez un PDF pour ajouter un horodatage local.</p><p>Cet outil crée un horodatage local autosigné avec l’horloge de votre appareil. Il ne demande ni ne vérifie un horodatage auprès de la TSA sélectionnée.</p><p>Le traitement reste dans votre navigateur ; aucun document ni hachage n’est envoyé à une TSA.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importer un PDF",
        "description": "Sélectionnez un PDF pour ajouter un horodatage local."
      },
      {
        "step": 2,
        "title": "Nom de l’autorité sélectionnée",
        "description": "Choisissez un nom pour la signature locale. Ce nom ne déclenche aucune connexion à une TSA."
      },
      {
        "step": 3,
        "title": "Ajouter un horodatage local",
        "description": "Traitez le fichier, examinez le résultat et téléchargez le PDF."
      }
    ],
    "useCases": [
      {
        "title": "Brouillons de travail",
        "description": "Conservez une copie datée localement d’un document de travail.",
        "icon": "file-text"
      },
      {
        "title": "Archives personnelles",
        "description": "Enregistrez une copie horodatée pour votre propre référence.",
        "icon": "archive"
      },
      {
        "title": "Inspection de signature",
        "description": "Examinez la signature générée et les métadonnées dans un lecteur PDF.",
        "icon": "search"
      }
    ],
    "faq": [
      {
        "question": "L’horodatage est-il vérifié indépendamment ?",
        "answer": "Cet outil crée un horodatage local autosigné avec l’horloge de votre appareil. Il ne demande ni ne vérifie un horodatage auprès de la TSA sélectionnée."
      },
      {
        "question": "Dois-je importer un certificat numérique ?",
        "answer": "Non. L’outil génère un certificat local autosigné pour cette opération."
      },
      {
        "question": "Quelle horloge fournit l’heure ?",
        "answer": "L’heure provient de l’horloge de votre appareil et n’est pas vérifiée indépendamment."
      }
    ]
  },
  "add-page-labels": {
    "title": "Ajouter des Étiquettes de Page",
    "metaDescription": "Définissez des étiquettes de page personnalisées (ex : I, II pour l'avant-propos). Améliore la navigation.",
    "keywords": [
      "etiquettes de page",
      "numerotation logique",
      "navigation pdf"
    ],
    "description": "<p>Ajouter des étiquettes de page vous permet d'injecter des métadonnées d'étiquetage de page personnalisées (/PageLabels) dans le dictionnaire racine du catalogue de votre PDF. Cela permet de personnaliser les étiquettes affichées dans les barres latérales de navigation du lecteur PDF professionnel et les panneaux de saut de numéro de page supérieure (par exemple, en utilisant des chiffres romains pour la première partie, des séquences décimales pour le corps principal ou des préfixes personnalisés tels que A-0, A-1 pour les sous-sections techniques).</p>\n      <p>Prend en charge la combinaison transparente de plusieurs règles personnalisées. Surtout, nous avons créé un <strong>algorithme de découpage de plages disjointes</strong> hautement optimisé : même si vous déclarez des modèles alternés complexes (par exemple, le style de pages impaires A, le style de pages paires B), l'outil disséquera et composera élégamment les limites pour garantir un affichage conforme aux normes sans fuite de formats dans des pages non mappées.</p>\n      <p>Toutes les opérations sont entièrement traitées dans le bac à sable de votre navigateur local, garantissant ainsi une confidentialité absolue des données.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger un document PDF",
        "description": "Fournissez le document PDF cible que vous souhaitez étiqueter."
      },
      {
        "step": 2,
        "title": "Configurer les règles d'étiquetage",
        "description": "Ajoutez une ou plusieurs règles spécifiant les plages de pages (par exemple, \"1-5\", \"impairs\" ou listes séparées par des virgules), le préfixe, le style et la séquence de départ."
      },
      {
        "step": 3,
        "title": "Aperçu et téléchargement",
        "description": "Consultez l'aperçu de la liste des étiquettes de page en direct ci-dessous, puis compilez et téléchargez votre document PDF mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Formatage de la thèse académique",
        "description": "Définissez les chiffres romains minuscules (i, ii, iii) pour l'introduction et la transition en décimal pour les chapitres principaux.",
        "icon": "book"
      },
      {
        "title": "Préfixes des plans d'ingénierie",
        "description": "Attachez les abréviations du sous-système (par exemple, « A-1 », « M-5 ») comme préfixes d'étiquette de page, permettant aux équipes de rechercher et de localiser les pages en quelques secondes.",
        "icon": "layout"
      },
      {
        "title": "Dispositions alternées personnalisées",
        "description": "Appliquez une indexation de plages de pages très spécifique aux séquences paires/impaires ou aux sections non contiguës avec une liberté maximale.",
        "icon": "shuffle"
      }
    ],
    "faq": [
      {
        "question": "Que sont les étiquettes de page et les numéros de page ?",
        "answer": "Les numéros de page ordinaires sont des blocs de texte visuels rendus directement sur la toile papier (visibles une fois imprimés). Toutefois, les étiquettes de page sont des métadonnées structurelles injectées dans le catalogue PDF. Ils contrôlent ce qui est affiché sous les vignettes et dans la zone de recherche de page dans des logiciels comme Adobe Acrobat ou Apple Preview."
      },
      {
        "question": "Que se passe-t-il si je laisse la plage de pages vide ?",
        "answer": "Si vous laissez la plage de pages vide, la règle s'appliquera globalement à toutes les pages du document."
      },
      {
        "question": "Comment les règles qui se chevauchent sont-elles gérées ?",
        "answer": "Les règles sont évaluées séquentiellement dans l'ordre dans lequel elles sont répertoriées. Si une plage de pages d'une règle ultérieure chevauche une règle antérieure, la règle la plus récente est prioritaire et remplace l'étiquette de cette page."
      }
    ]
  },
  "ai-pdf-reflower": {
    "title": "Réadaptation de Flux PDF par IA",
    "metaDescription": "Redistribuez le texte PDF pour une lecture plus facile sur mobile. Exportez le contenu extrait au format Markdown ou EPUB dans votre navigateur.",
    "keywords": [
      "reflow pdf",
      "pdf adaptatif",
      "pdf en markdown",
      "export epub"
    ],
    "description": "<p>AI PDF Layout Reflower est votre compagnon ultime pour lire des documents PDF sur des appareils mobiles. Les PDF traditionnels utilisent une mise en page fixe, ce qui nécessite souvent un zoom et un défilement horizontal sans fin sur les smartphones ou les tablettes, ce qui rend la lecture fastidieuse.</p>\n      <p>Cet outil analyse intelligemment le flux du texte, l'espacement des lignes et les coordonnées physiques des pages PDF, reconstruisant les paragraphes sémantiques et les hiérarchies de titres. Pour les documents à plusieurs ou deux colonnes, il fusionne intelligemment les flux de colonnes en un seul flux réactif, garantissant ainsi une lecture fluide.</p>\n      <p>De plus, il prend en charge le rendu des formules mathématiques dans LaTeX/MathJax et propose plusieurs thèmes de lecture (sépia, foncé, vert protecteur des yeux). Vous pouvez exporter la mise en page redistribuée au format Markdown ou dans un ebook EPUB standard en un seul clic.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger le fichier PDF",
        "description": "Faites glisser et déposez votre fichier PDF ou cliquez pour le parcourir et le sélectionner."
      },
      {
        "step": 2,
        "title": "Sélectionnez le thème de lecture",
        "description": "Choisissez votre taille de police et vos couleurs de thème préférées dans le simulateur mobile 3D à droite."
      },
      {
        "step": 3,
        "title": "Exporter un document",
        "description": "Une fois satisfait, utilisez la corde de traction physique pour exporter le document au format Markdown ou EPUB."
      }
    ],
    "useCases": [
      {
        "title": "Lecture de littérature mobile",
        "description": "Lisez des articles universitaires et des rapports de recherche sur votre téléphone en toute transparence, sans zoom constant.",
        "icon": "smartphone"
      },
      {
        "title": "Conversion de livres électroniques",
        "description": "Convertissez des PDF contenant beaucoup de texte en fichiers EPUB et importez-les dans Kindle ou d'autres lecteurs de livres électroniques.",
        "icon": "book"
      },
      {
        "title": "Archives de notes",
        "description": "Convertissez directement le contenu PDF structuré en fichiers Markdown propres pour votre base de connaissances personnelle.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Gère-t-il correctement les PDF à deux colonnes ?",
        "answer": "Oui, la refonte de la mise en page détecte les coordonnées horizontales des blocs de texte et structure les colonnes de gauche et de droite de manière séquentielle, empêchant ainsi l'entrelacement des lignes."
      },
      {
        "question": "Les images et les formules mathématiques seront-elles perdues ?",
        "answer": "Les formules mathématiques sont converties en syntaxe LaTeX/MathJax pour un rendu Web propre, et les images sont conservées dans leurs positions sémantiques correspondantes."
      },
      {
        "question": "La conversion est-elle effectuée dans le cloud ?",
        "answer": "Non, toutes les analyses de mise en page et de mise en forme sont effectuées localement dans votre navigateur pour garantir la confidentialité absolue de vos documents."
      }
    ]
  },
  "citation-linker": {
    "title": "Activateur de Liens de Citation",
    "metaDescription": "Transformez les marqueurs de citation dans les PDF en liens DOI cliquables ou en références de page. Ajoutez une navigation utile aux documents de recherche.",
    "keywords": [
      "liens de citation",
      "hyperlien pdf",
      "correspondance doi",
      "pdf academique"
    ],
    "description": "<p>Citation Linker est spécialement conçu pour les chercheurs universitaires. Dans de nombreux articles PDF, les marqueurs de citation (par exemple, [1], [2]) sont du texte brut, obligeant les lecteurs à faire défiler l'écran jusqu'à la liste de références à la fin du document, interrompant ainsi leur concentration.</p>\n      <p>Cet outil lit le texte PDF localement, utilise la reconnaissance de formes pour faire correspondre les marqueurs de citation aux entrées de référence correspondantes et superpose les annotations de liens PDF cliquables à l'aide de recherches DOI ou de coordonnées de saut de page.</p>\n      <p>Il génère également une carte interactive des relations entre citations pour naviguer visuellement dans le réseau de référence du document.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger le PDF académique",
        "description": "Téléchargez un article ou une thèse PDF contenant une section bibliographie/référence."
      },
      {
        "step": 2,
        "title": "Citations de révision",
        "description": "Inspectez les paires de citations dans la carte interactive et modifiez ou ajoutez manuellement des liens DOI si nécessaire."
      },
      {
        "step": 3,
        "title": "Injecter des liens",
        "description": "Cliquez sur le bouton d'activation pour superposer des hyperliens sur le PDF et télécharger le document mis à jour."
      }
    ],
    "useCases": [
      {
        "title": "Lecture approfondie de la littérature",
        "description": "Cliquez sur les marqueurs de citation pour afficher immédiatement les détails de la référence ou accéder aux pages DOI externes.",
        "icon": "link"
      },
      {
        "title": "Préparation pré-publication",
        "description": "Assurez-vous que vos articles académiques écrits comportent des navigations par hyperliens entièrement actives avant la soumission finale.",
        "icon": "award"
      },
      {
        "title": "Analyse de la carte de référence",
        "description": "Comprendre les hiérarchies et les connexions de la littérature via la carte interactive de la topologie du réseau.",
        "icon": "git-network"
      }
    ],
    "faq": [
      {
        "question": "Que faire si une référence n'a pas de DOI ?",
        "answer": "Si un DOI ne peut pas être trouvé, l'outil revient à une action interne « Aller à la page », vous permettant de cliquer sur le marqueur et d'accéder directement à la page de référence."
      },
      {
        "question": "Quels formats de citation sont pris en charge ?",
        "answer": "Il prend en charge les parenthèses numériques courantes (par exemple, [1], [1-3]) et les citations auteur-année (par exemple, Author et al., 202X)."
      },
      {
        "question": "Est-ce que cela modifiera l'apparence de mon PDF ?",
        "answer": "Non, il injecte des annotations de lien invisibles au-dessus du texte, préservant la mise en page, les polices et le style d'origine de votre document."
      }
    ]
  },
  "vector-extractor": {
    "title": "Extracteur de Vecteurs PDF",
    "metaDescription": "Extrayez les graphiques vectoriels des pages PDF au format SVG. Sélectionnez des graphiques, des diagrammes et des logos pour les recolorer et les exporter.",
    "keywords": [
      "extraire vecteur pdf",
      "export svg",
      "extraction logo",
      "graphique vectoriel"
    ],
    "description": "<p>PDF Vector Extractor déverrouille les chemins vectoriels et les illustrations intégrées dans les fichiers PDF. Extrayez facilement des graphiques vectoriels, des diagrammes ou des logos à partir de documents pour des travaux de conception ou d'impression.</p>\n      <p>Sous le capot, il utilise le rendu SVG haute fidélité pour déconstruire les chemins vectoriels PDF en arbres d'éléments SVG standards et propres sans perte de précision.</p>\n      <p>L'interface met en évidence les éléments survolés avec un effet d'explosion de calque 3D sur l'axe Z, complété par un panneau de sélection de couleurs permettant aux concepteurs d'ajuster et d'extraire les nœuds vectoriels.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger un document PDF",
        "description": "Téléchargez un PDF contenant des éléments vectoriels, des diagrammes, des graphiques ou des logos."
      },
      {
        "step": 2,
        "title": "Sélectionnez les éléments",
        "description": "Passez la souris sur le canevas vectoriel pour mettre en surbrillance les éléments, puis cliquez pour sélectionner un nœud."
      },
      {
        "step": 3,
        "title": "Personnaliser et exporter",
        "description": "Ajustez les attributs du chemin dans le panneau, puis téléchargez au format SVG ou copiez le code source SVG."
      }
    ],
    "useCases": [
      {
        "title": "Extraction des actifs de conception",
        "description": "Extrayez rapidement les logos, les icônes et les illustrations de l'entreprise à partir des directives ou des brochures de la marque.",
        "icon": "bezier"
      },
      {
        "title": "Exportation de cartes scientifiques",
        "description": "Extrayez des graphiques vectoriels à partir de documents de recherche pour les utiliser dans des impressions ou des présentations haute résolution.",
        "icon": "presentation"
      },
      {
        "title": "Recoloration des actifs vectoriels",
        "description": "Modifiez les couleurs de trait et de remplissage des éléments extraits avant de les enregistrer pour des projets Web.",
        "icon": "crown"
      }
    ],
    "faq": [
      {
        "question": "Pourquoi ne puis-je pas sélectionner certaines images ?",
        "answer": "Les PDF contiennent à la fois des images raster (comme des photos ou des pages numérisées) et des illustrations vectorielles (comme des formes et des courbes). Seuls les chemins vectoriels peuvent être déconstruits en chemins SVG."
      },
      {
        "question": "La sortie SVG contient-elle des styles ?",
        "answer": "Oui, le SVG exporté conserve toutes les propriétés d'origine, y compris les remplissages, les traits, l'opacité, les dégradés et les transformations de coordonnées."
      },
      {
        "question": "Les fichiers volumineux seront-ils à la traîne ?",
        "answer": "Nous utilisons l'accélération WebAssembly, mais le rendu des PDF contenant des dessins CAO extrêmement complexes ou des milliers de chemins vectoriels peut prendre quelques secondes."
      }
    ]
  },
  "deep-sanitize": {
    "title": "Nettoyage en Profondeur des Métadonnées",
    "metaDescription": "Supprimez les métadonnées, les calques cachés et les objets inutilisés des PDF. Nettoyez les informations du document localement avant de les partager.",
    "keywords": [
      "nettoyer pdf",
      "supprimer metadonnees",
      "confidentialite pdf",
      "anonymiser pdf"
    ],
    "description": "<p>Deep Metadata Sanitizer est votre défense ultime contre les fuites de métadonnées et le suivi caché. Il ne suffit pas de dessiner des cases noires sur le texte visible dans les fichiers PDF pour protéger les secrets commerciaux.</p>\n      <p>Cet outil analyse la structure binaire du PDF pour effacer complètement les informations sur l'auteur, le logiciel de création, les journaux d'édition (métadonnées XMP), les caches PieceInfo propriétaires et les groupes de contenu facultatifs OCG (souvent utilisés pour les filigranes invisibles).</p>\n      <p>Il réécrit également complètement les tables de références croisées (xréf), en supprimant tous les blocs de mise à jour incrémentielle pour garantir que les données historiques supprimées ou modifiées ne peuvent pas être restaurées.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger le PDF",
        "description": "Sélectionnez le fichier PDF contenant des données sensibles ou un historique des modifications."
      },
      {
        "step": 2,
        "title": "Exécuter le scanner",
        "description": "Déclenchez le scanner de confinement 3D pour vérifier le fichier pour les métadonnées et les couches cachées."
      },
      {
        "step": 3,
        "title": "Désinfection en profondeur",
        "description": "Cliquez sur Désinfecter pour effacer les éléments de suivi et télécharger le PDF entièrement propre."
      }
    ],
    "useCases": [
      {
        "title": "Partage de contrat",
        "description": "Supprimez les enregistrements de rédaction, les chemins et les révisions précédentes avant de partager des contrats commerciaux avec des tiers.",
        "icon": "file-signature"
      },
      {
        "title": "Publication anonymisée",
        "description": "Effacez les annotations et les filigranes invisibles pour publier des documents de manière anonyme et sécurisée.",
        "icon": "eye-off"
      },
      {
        "title": "Optimisation PDF",
        "description": "Supprimez les objets orphelins et les flux de données inutiles pour accélérer le chargement des fichiers sur le Web.",
        "icon": "zap"
      }
    ],
    "faq": [
      {
        "question": "En quoi est-ce différent de la suppression standard des métadonnées ?",
        "answer": "Les outils standard effacent uniquement les champs de base comme le titre ou l'auteur. Deep Sanitizer reconstruit l'intégralité du tableau xréf PDF, en effaçant PieceInfo, les filigranes cachés et les révisions incrémentielles historiques."
      },
      {
        "question": "Cela affectera-t-il la mise en page ou le texte du document ?",
        "answer": "Non, il supprime uniquement les flux de description cachés et les données de structure. La mise en page visible, les textes et les graphiques restent inchangés."
      },
      {
        "question": "Est-ce que cela supprime les mots de passe PDF ?",
        "answer": "Non, si un PDF est crypté, vous devez d'abord le déverrouiller avant d'effectuer une désinfection en profondeur."
      }
    ]
  },
  "booklet-folding-simulator": {
    "title": "Simulateur 3D d'Imposition et de Pliage",
    "metaDescription": "Organisez les pages PDF pour l'impression du livret. Prévisualisez les feuilles pliées et les mises en page agrafées à cheval avant d'exporter votre document prêt à imprimer.",
    "keywords": [
      "imposition 3d",
      "pliage papier",
      "reliure piquee",
      "maquette imprimerie"
    ],
    "description": "<p>3D Booklet & Folding Simulator est un outil avancé conçu pour les concepteurs d'impression et les professionnels de l'édition. La mise en page traditionnelle des livres nécessite le calcul de superpositions de pages complexes et de séquences de pagination d'imposition. Cet outil visualise et automatise l'ensemble de ce processus.</p>\n      <p>Sous le capot, notre algorithme d'imposition personnalisé mappe une liste de pages PDF séquentielles dans des mises en page de feuilles d'impression standard (telles que des plis en demi de 4 pages, des piqûres à cheval de 8 pages ou des plis en accordéon), en fusionnant les pages au recto et au verso de grandes feuilles physiques.</p>\n      <p>Sur le front-end, nous utilisons des transformations matricielles 3D CSS pures et des courbes physiques de masse à ressort pour animer le pliage des feuilles horizontalement et verticalement, offrant ainsi un aperçu de reliure de type physique avec un facteur WOW élevé.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger le fichier PDF",
        "description": "Faites glisser et déposez le document PDF que vous souhaitez mettre en page pour l'impression."
      },
      {
        "step": 2,
        "title": "Sélectionnez la disposition pliante",
        "description": "Choisissez votre schéma d'imposition préféré (par exemple, pli de 4 pages, piqûre à cheval de 8 pages, accordéon de 4 pages)."
      },
      {
        "step": 3,
        "title": "Aperçu 3D interactif",
        "description": "Faites glisser le curseur pour regarder la feuille se plier en 3D et inspecter la disposition finale de numérotation des pages."
      },
      {
        "step": 4,
        "title": "Générer un PDF imposé",
        "description": "Cliquez sur générer pour télécharger la feuille physique réorganisée et fusionnée PDF, prête pour l'impression recto verso."
      }
    ],
    "useCases": [
      {
        "title": "Prototypage de brochures",
        "description": "Pré-visualisez la séquence de pliage des plis en trois et des brochures pour éviter que les pages ne soient renversées après l'impression.",
        "icon": "book-open"
      },
      {
        "title": "Livre cousu à cheval",
        "description": "Générez automatiquement des feuilles d'impression imposées pour des magazines ou des livrets de plusieurs pages.",
        "icon": "layers"
      },
      {
        "title": "Aides visuelles pour l'imprimerie",
        "description": "Aidez les clients à visualiser comment les pages sont physiquement distribuées et pliées sur les feuilles d'impression.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que « l'Imposition » ?",
        "answer": "L'imposition est une étape fondamentale de l'impression prépresse. Étant donné que les presses commerciales impriment sur de grandes feuilles, les pages sont disposées dans le désordre de sorte qu'une fois imprimées, pliées et reliées, les pages apparaissent dans le bon ordre séquentiel. Cet outil calcule automatiquement cette mise en page."
      },
      {
        "question": "L'aperçu 3D modifie-t-il mon contenu PDF ?",
        "answer": "Non, le contenu PDF original est simplement restitué sous forme de mappages de texture sur la feuille 3D. Le PDF généré ajuste uniquement l'ordre et le placement des pages ; les qualités textuelles et graphiques restent intactes."
      },
      {
        "question": "Que faire si le nombre de pages de mon PDF n'est pas un multiple de 4 ou 8 ?",
        "answer": "L'optimiseur ajoute automatiquement des pages vierges à la fin pour satisfaire aux exigences mathématiques de nombre de pages de la disposition de pliage sélectionnée."
      }
    ]
  },
  "pdf-to-slide": {
    "title": "PDF en Diaporama",
    "metaDescription": "Convertissez le contenu PDF en diapositives PowerPoint. Exportez une présentation PPTX avec du texte et des images pour une édition ultérieure.",
    "keywords": [
      "pdf en ppt",
      "generer diaporama",
      "convertisseur pptx",
      "extraire graphique"
    ],
    "description": "<p>AI PDF-to-Slide Reconstructor insuffle une nouvelle vie aux documents PDF statiques, en les transformant en diapositives PowerPoint (PPTX) modernes et hautement personnalisables.</p>\n      <p>L'outil utilise un extracteur de plan de mise en page avancé qui analyse automatiquement les niveaux de titre des documents, les lignes de paragraphe et l'épaisseur des polices pour établir un cadre de diapositive logique. Il isole également les graphiques vectoriels et les tableaux haute résolution, en supprimant les artefacts d'arrière-plan pour les intégrer proprement en tant qu'actifs modifiables indépendants.</p>\n      <p>Toutes les sorties PPTX sont créées à l'aide d'éléments Office Open XML standard, ce qui signifie que tout le texte reste entièrement modifiable et que les vecteurs ne perdent pas leur résolution. Le frontal présente une animation fluide de transition de carte « champ d'étoiles » qui visualise la reconstruction de manière attrayante.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger un PDF académique/business",
        "description": "Téléchargez un document PDF contenant des sections et des diagrammes structurés."
      },
      {
        "step": 2,
        "title": "Analyser les plans des diapositives",
        "description": "Inspectez la structure des diapositives extraites, ajustez les titres ou supprimez les blocs de cartes inutiles."
      },
      {
        "step": 3,
        "title": "Reconstruire en PPTX",
        "description": "Démarrez le moteur de compilation pour recevoir un fichier de présentation standard et modifiable."
      }
    ],
    "useCases": [
      {
        "title": "Présentation du document de recherche",
        "description": "Convertissez les fichiers PDF de revues académiques, les structures de texte et les diagrammes vectoriels en présentations de diapositives prêtes pour les discussions.",
        "icon": "graduation-cap"
      },
      {
        "title": "Résumé du rapport d'activité",
        "description": "Transformez instantanément des rapports d'entreprise annuels massifs en brouillons de présentation clairs et à puces.",
        "icon": "presentation"
      },
      {
        "title": "Démonstrations multi-appareils",
        "description": "Évitez de copier les captures d'écran manuellement. Obtenez un cadre de mise en page propre et entièrement modifiable en quelques secondes.",
        "icon": "laptop"
      }
    ],
    "faq": [
      {
        "question": "Les diapositives sont-elles modifiables dans Microsoft Office ?",
        "answer": "Oui. Les fichiers sont générés nativement en mémoire selon la spécification officielle Office Open XML (OOXML). Les textes, tableaux et espaces réservés sont entièrement interactifs dans PowerPoint, Keynote et WPS."
      },
      {
        "question": "Comment les graphiques sont-ils extraits ?",
        "answer": "Le moteur analyse les chemins vectoriels et les couches raster dans le PDF, détecte les zones délimitées représentant des graphiques et les découpe en tant que nœuds SVG autonomes ou images haute résolution."
      },
      {
        "question": "Est-ce que cela fonctionne sur les documents numérisés ?",
        "answer": "Pour les PDF numérisés dépourvus de véritables calques de texte, nous vous recommandons d'exécuter d'abord notre outil OCR avant de transmettre le fichier au Slide Reconstructor."
      }
    ]
  },
  "eink-optimizer": {
    "title": "Optimiseur pour Liseuses e-Ink",
    "metaDescription": "Optimisez les pages PDF pour les lecteurs e-ink. Nettoyez les arrière-plans, augmentez le contraste du texte et ajustez les documents pour une lecture plus facile.",
    "keywords": [
      "optimisation eink",
      "binarisation otsu",
      "epaissement texte",
      "confort liseuse"
    ],
    "description": "<p>e-Ink Reader Optimizer est un outil indispensable, conçu sur mesure pour les amateurs de liseuses électroniques utilisant Kindle, Onyx Boox, Kobo ou d'autres appareils e-paper.</p>\n      <p>De nombreux livres électroniques PDF numérisés présentent des lettres pâles, des arrière-plans gris boueux, du bruit ou des ombres de numérisation lorsqu'ils sont visualisés sur des écrans e-Ink. Cet outil analyse les histogrammes de valeurs de gris et applique le seuil de binarisation d'Otsu pour séparer le texte de l'arrière-plan, convertissant ainsi les arrière-plans gris en blanc pur.</p>\n      <p>De plus, il intègre une dilatation morphologique pour mettre en gras et épaissir les caractères fins et décolorés, offrant ainsi une typographie nette et contrastée. Le curseur de contraste amorti par inertie vous permet d'affiner le contraste semblable à celui du papier en temps réel.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger un PDF numérisé",
        "description": "Téléchargez des livres électroniques ou des documents numérisés avec du texte pâle ou des arrière-plans gris."
      },
      {
        "step": 2,
        "title": "Ajuster le curseur de contraste",
        "description": "Faites glisser le curseur amorti pour équilibrer la suppression de l'arrière-plan et la mise en gras des caractères en temps réel."
      },
      {
        "step": 3,
        "title": "Optimiser et télécharger",
        "description": "Traitez l'intégralité du PDF pour générer un document à contraste élevé et convivial, adapté à l'e-Ink."
      }
    ],
    "useCases": [
      {
        "title": "Restauration de manuscrits anciens",
        "description": "Épaississez le texte décoloré dans les numérisations de livres historiques ou de manuscrits manuscrits pour les rendre lisibles.",
        "icon": "scroll"
      },
      {
        "title": "Nettoyage des feuilles d'examen",
        "description": "Blanchissez les ombres d'arrière-plan des examens photocopiés ou photographiés, en renvoyant un texte noir propre sur du papier blanc.",
        "icon": "file-text"
      },
      {
        "title": "Adaptation des appareils E-paper",
        "description": "Convertissez les PDF colorés en niveaux de gris optimisés, évitant ainsi les artefacts désordonnés et de tramage sur les écrans monochromes.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Comment fonctionne le « caractère gras » ?",
        "answer": "En traitement d'image, cela s'appelle une dilatation. Il utilise une matrice de structuration pour élargir les marges des caractères d'un pixel, épaississant physiquement les traits pâles pour les rendre lisibles."
      },
      {
        "question": "Ce processus va-t-il augmenter la taille du fichier ?",
        "answer": "Bien au contraire. En binarisant des images couleur/niveaux de gris complexes en mises en page simples en noir et blanc, la compression standard (comme le groupe 4 du CCITT) peut réduire considérablement la taille du fichier PDF."
      },
      {
        "question": "Est-ce que cela prend en charge les fichiers PDF en texte natif ?",
        "answer": "Oui. Les PDF vectoriels natifs sont rastérisés à haute résolution en arrière-plan, optimisés et compilés, garantissant une lecture unifiée à contraste élevé."
      }
    ]
  },
  "cert-cryptor": {
    "title": "Chiffrer le certificat",
    "metaDescription": "Cryptez et signez numériquement les documents PDF à l'aide de certificats. Travaillez avec les fichiers de certificat localement dans votre navigateur.",
    "keywords": [
      "chiffrement certificat",
      "sceau de cire 3d",
      "signature numerique",
      "pkcs7"
    ],
    "description": "<p>3D Wax-Seal & Certificate Cryptor offre une sécurité de niveau militaire et une esthétique de qualité physique haut de gamme pour les fichiers, diplômes ou accords d'entreprise sensibles.</p>\n      <p>Techniquement, il offre un cryptage asymétrique à clé publique : importez le certificat de clé publique d'un destinataire (.cer/.crt) pour verrouiller le flux PDF ; seul le détenteur de la clé privée correspondante (.pfx) peut la déchiffrer. Il génère également des signatures numériques PKCS#7 standard pour garantir l'intégrité inviolable des documents.</p>\n      <p>Visuellement, nous présentons un sceau de cire physique en or ou rouge en 3D. Lorsque vous signez, un tampon magnifiquement rendu descend avec un son mécanique satisfaisant, laissant un sceau de cire 3D avec des variations de hauteur réalistes et des écoulements de cire sur la page, entourés de pistes cryptographiques lumineuses.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger le PDF et le certificat",
        "description": "Ajoutez votre PDF et importez votre certificat de signature (.pfx) ou le certificat public du destinataire (.cer)."
      },
      {
        "step": 2,
        "title": "Placez le tampon 3D",
        "description": "Faites glisser et localisez le sceau sur l'aperçu du document, puis choisissez un style de cire (par exemple, or, cramoisi)."
      },
      {
        "step": 3,
        "title": "Appuyez et signez",
        "description": "Cliquez sur Exécuter pour regarder la cérémonie d'impression du sceau de cire en 3D, générant une signature numérique de qualité physique."
      },
      {
        "step": 4,
        "title": "Télécharger le PDF sécurisé",
        "description": "Enregistrez le document de sortie, désormais verrouillé et tamponné cryptographiquement."
      }
    ],
    "useCases": [
      {
        "title": "Diplômes et certificats",
        "description": "Apposez des badges de sceau de cire 3D de grande valeur sur les diplômes et récompenses numériques, soutenus par de véritables signatures numériques.",
        "icon": "award"
      },
      {
        "title": "Accords confidentiels",
        "description": "Verrouillez les contrats sensibles à l'aide du certificat public du client afin que seule sa carte-clé physique sécurisée puisse le déverrouiller.",
        "icon": "shield-alert"
      },
      {
        "title": "Communiqués de presse officiels",
        "description": "Signez numériquement les annonces publiques pour empêcher les modifications de texte malveillantes ou l'usurpation d'identité.",
        "icon": "stamp"
      }
    ],
    "faq": [
      {
        "question": "Le cachet de cire est-il juste une image ou une véritable signature ?",
        "answer": "Les deux. Le système restitue une empreinte de cire 3D incroyablement réaliste avec une profondeur mappée normale (couche visuelle) et code une signature cryptographique PKCS#7 authentique et inviolable à l'intérieur du PDF (couche de données)."
      },
      {
        "question": "Qu'est-ce que le « cryptage basé sur un certificat » ?",
        "answer": "Il s'agit d'une technique de cryptage sans mot de passe. Vous chiffrez le fichier à l'aide de la clé publique du destinataire. Le lecteur recherche automatiquement son certificat privé local pour décrypter le fichier de manière transparente, garantissant ainsi une sécurité robuste."
      },
      {
        "question": "Puis-je personnaliser le design du tampon ?",
        "answer": "Oui. Nous proposons plusieurs modèles comme le filigrane AwsomePDF ou un écusson royal, et vous pouvez ajuster le rayon de fusion de la cire et la profondeur d'indentation de la carte normale dans le panneau."
      }
    ]
  },
  "passport-id-composer": {
    "title": "Copie d'Identité Double Face'Identité",
    "metaDescription": "Combinez le recto et le verso d'une carte d'identité ou d'un passeport sur une page PDF A4. Organisez les numérisations et ajoutez un filigrane facultatif.",
    "keywords": [
      "photocopie carte identite",
      "recto verso a4",
      "copie passeport",
      "filigrane"
    ],
    "description": "<p>Le Passport & ID Double-face Composer est un utilitaire de productivité incroyablement utile pour les opérations professionnelles et personnelles standard.</p>\n      <p>Lors de la demande d'ouverture de compte bancaire, d'intégration ou de signature d'accords, nous avons souvent besoin de copies recto verso des cartes d'identité. Cet outil accepte les images recto/verso ou les pages PDF et les organise avec précision sur une seule page A4 conforme aux résolutions de mise en page standard nationales.</p>\n      <p>De plus, vous pouvez personnaliser des filigranes translucides anti-contrefaçon qui se chevauchent (par exemple « POUR L'ONBOARDAGE UNIQUEMENT ») pour empêcher la réutilisation non autorisée de documents. Il présente même un effet visuel de porte de scanner de copieur à balayage laser 3D pour fournir un retour de qualité supérieure.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger des fichiers d'identification",
        "description": "Téléchargez des photos/scans recto et verso de votre pièce d'identité ou de votre passeport (jusqu'à 2 fichiers)."
      },
      {
        "step": 2,
        "title": "Configurer le filigrane sécurisé",
        "description": "Saisissez une superposition de texte personnalisée pour restreindre la réplication non autorisée de documents."
      },
      {
        "step": 3,
        "title": "Composer et télécharger",
        "description": "Cliquez sur Exécuter pour générer un PDF A4 d'une seule page prêt à imprimer."
      }
    ],
    "useCases": [
      {
        "title": "Soumission d'intégration RH",
        "description": "Alignez rapidement les copies d'identité des employés et appliquez des filigranes de protection.",
        "icon": "user"
      },
      {
        "title": "Service gouvernemental et bancaire",
        "description": "Préparez des impressions d'identité standardisées qui répondent aux exigences d'archivage physique.",
        "icon": "landmark"
      },
      {
        "title": "Sauvegardes de voyage",
        "description": "Disposez les pages du passeport et les détails du visa sur un papier A4 unifié.",
        "icon": "plane"
      }
    ],
    "faq": [
      {
        "question": "Les filigranes bloqueront-ils les détails du texte d'identité ?",
        "answer": "Non. Le filigrane est rendu avec une opacité soigneusement ajustée de 15 % pour bloquer la contrefaçon sans sacrifier la lisibilité des champs de texte ou de photo."
      },
      {
        "question": "La taille de la carte composite est-elle exacte ?",
        "answer": "Oui. Il restitue la carte d'identité à la dimension physique standard de 85,6 mm × 54 mm, parfaitement mise à l'échelle sur la page A4."
      },
      {
        "question": "Est-il compatible avec les permis de conduire ?",
        "answer": "Oui, cela fonctionne à merveille pour toutes les analyses d'identité basées sur des cartes."
      }
    ]
  },
  "annotation-exporter": {
    "title": "Exporter les annotations'Annotations et Surlignages",
    "metaDescription": "Exportez les commentaires, notes, surlignages et soulignements PDF vers Markdown ou JSON. Organisez des annotations pour l’étude, la révision et la recherche.",
    "keywords": [
      "exporter annotations pdf",
      "extraire surlignage",
      "notes de lecture",
      "markdown"
    ],
    "description": "<p>L'exportateur d'annotations intelligent est un espace de travail puissant qui libère toute la valeur de vos annotations PDF.</p>\n      <p>Lorsque nous effectuons des revues de littérature ou lisons de nombreux ebooks, nous utilisons beaucoup les surlignages et les notes autocollantes. Cet outil désérialise le dictionnaire PDF <code>/Annots</code> de bas niveau et extrait tous les surlignages, notes, soulignements et marqueurs à l'encre dessinés à la main.</p>\n      <p>Il aligne automatiquement les commentaires avec leurs en-têtes de plan respectifs, générant ainsi un bloc-notes Markdown ou JSON structuré avec des ancres de référence de page. Regardez vos reflets flotter magnifiquement sur le panneau en verre dépoli du carnet de notes.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importer un PDF annoté",
        "description": "Téléchargez n'importe quel essai ou livre PDF contenant vos soulignements, surlignages ou commentaires."
      },
      {
        "step": 2,
        "title": "Configurer les filtres et le format",
        "description": "Sélectionnez les types d'annotations que vous souhaitez extraire et choisissez Markdown ou JSON."
      },
      {
        "step": 3,
        "title": "Extraire le carnet",
        "description": "Cliquez sur Exécuter pour analyser le flux de commentaires et assembler votre résumé."
      }
    ],
    "useCases": [
      {
        "title": "Synthèse de la littérature scientifique",
        "description": "Extrayez des notes de lecture sur plusieurs articles dans des modèles Markdown pour rédiger instantanément des critiques éclairées.",
        "icon": "graduation-cap"
      },
      {
        "title": "Compilation du journal d'étude",
        "description": "Collectez de belles idées et des remarques personnelles à partir de manuels scolaires dans les bases de données Obsidian.",
        "icon": "book"
      },
      {
        "title": "Audit collaboratif documentaire",
        "description": "Recueillez les corrections de révision auprès des différents membres de l'équipe et établissez des listes de tâches exploitables.",
        "icon": "users"
      }
    ],
    "faq": [
      {
        "question": "Peut-il extraire des traits d'encre dessinés à la main sur une tablette ?",
        "answer": "Oui. Tant que les marques dessinées à la main sont stockées sous forme d'annotations PDF Ink standard, l'outil peut parfaitement isoler et structurer leurs positions de page."
      },
      {
        "question": "Pourquoi certains extraits surlignés sont-ils vides ?",
        "answer": "Si le PDF est une image numérisée non consultable et dépourvue de texte sous-jacent, met en surbrillance uniquement les coordonnées du magasin. Exécutez d'abord l'OCR sur le PDF, puis extrayez les annotations."
      },
      {
        "question": "Les liens Markdown renvoient-ils au PDF ?",
        "answer": "Le fichier exporté répertorie les numéros de page précis et les titres de plan d'origine pour rendre les références croisées transparentes."
      }
    ]
  },
  "batch-watermark-remover": {
    "title": "Supprimer les filigranes",
    "metaDescription": "Supprimez les filigranes de texte et d'image correspondants des PDF. Examinez le résultat pour vérifier que le contenu du document est préservé.",
    "keywords": [
      "supprimer filigrane pdf",
      "retirer logo pdf",
      "nettoyer pdf"
    ],
    "description": "<p>Le Batch Watermark Remover est un désinfectant PDF de pointe qui nettoie physiquement les documents.</p>\n      <p>Les outils génériques de suppression de filigrane se contentent généralement de superposer des blocs blancs ou de déformer l'espacement des documents. Cet outil utilise une technique robuste de <strong>Content Stream Purge</strong>.</p>\n      <p>Il analyse les opérateurs de rendu de bas niveau de chaque page, identifie les commandes de chaîne de filigrane spécifiques (par exemple \"Confidentiel\", \"DRAFT\") ou les objets d'image d'arrière-plan, et les supprime ou les écrase physiquement. Les filigranes disparaissent complètement, préservant le formatage d'origine et la qualité vectorielle.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger un fichier filigrané",
        "description": "Fournir le document PDF montrant les logos commerciaux ou les étiquettes de sécurité."
      },
      {
        "step": 2,
        "title": "Définir le filigrane cible",
        "description": "Saisissez la chaîne exacte à supprimer ou activez le nettoyage de l'image XObject translucide."
      },
      {
        "step": 3,
        "title": "Exécuter une purge physique",
        "description": "Cliquez sur Exécuter pour nettoyer les opérateurs de contenu avec une haute fidélité."
      }
    ],
    "useCases": [
      {
        "title": "Archivage des actifs de l'entreprise",
        "description": "Supprimez les filigranes « Confidentiel » ou « Brouillon » expirés pour une distribution grand public.",
        "icon": "archive"
      },
      {
        "title": "Suppression du désordre en arrière-plan",
        "description": "Supprimez les images d'arrière-plan épaisses qui empêchent les lecteurs de numériser le texte.",
        "icon": "eye"
      },
      {
        "title": "Réutilisation de documents",
        "description": "Nettoyez les anciens éléments de marque du pied de page pour appliquer facilement de nouveaux modèles d'entreprise.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Les filigranes purgés peuvent-ils être récupérés ?",
        "answer": "Non. Contrairement aux masques visuels, nous réécrivons le flux binaire de la page pour effacer les opérateurs, ne laissant aucune trace."
      },
      {
        "question": "Prend-il en charge les dégradés complexes ?",
        "answer": "Si le filigrane est stocké en tant que nœud de texte distinct ou image XObject, l'outil peut l'isoler et l'effacer physiquement."
      },
      {
        "question": "Cela modifiera-t-il le texte normal de la page ?",
        "answer": "Non. Le moteur de nettoyage cible uniquement les opérateurs correspondant à la signature de filigrane spécifiée ; le texte normal reste intact."
      }
    ]
  },
  "smart-data-redactor": localizedRedactionContent('fr', 'smart-data-redactor', "Masquer les données sensibles"),
  "bookmarks-auto-generator": {
    "title": "Générer les signets",
    "metaDescription": "Générez des signets PDF à partir de titres et de modèles de texte. Ajoutez un plan navigable aux longs documents, manuels et rapports.",
    "keywords": [
      "signets pdf",
      "arborescence navigation",
      "creer table des matieres"
    ],
    "description": "<p>Le générateur de signets automatiques apporte une clarté absolue aux documents PDF longs et non structurés.</p>\n      <p>Parcourir des livres ou des brochures sans navigation schématique est pénible. Cet outil analyse les hiérarchies typographiques (telles que les tailles et les épaisseurs de police) ainsi que les règles d'expression régulière (comme \"Chapitre 1\", \"Section 1.1\") pour déduire automatiquement les titres.</p>\n      <p>Il compile et injecte ensuite ces rubriques directement dans le dictionnaire PDF <code>/Outline</code>. N'importe quel visualiseur standard affichera alors une barre latérale de navigation à plusieurs niveaux magnifiquement structurée, soutenue par un aperçu interactif de l'arborescence 3D.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Fournir un PDF non structuré",
        "description": "Téléchargez de grandes brochures, des articles universitaires ou des livres électroniques dépourvus de barre latérale de catalogue."
      },
      {
        "step": 2,
        "title": "Ajuster les règles de titre",
        "description": "Configurez des stratégies spécifiant des seuils minimum de taille de police et des règles de correspondance."
      },
      {
        "step": 3,
        "title": "Construire et injecter",
        "description": "Cliquez sur Exécuter pour restituer les nœuds de plan et écrire physiquement les signets de plan."
      }
    ],
    "useCases": [
      {
        "title": "Organisation des manuels techniques",
        "description": "Compilez automatiquement les chapitres à plusieurs niveaux pour les directives standard, économisant ainsi des heures d'indexation manuelle.",
        "icon": "tool"
      },
      {
        "title": "Préparation de thèse",
        "description": "Injectez des signets imbriqués propres correspondant aux normes exactes de soumission académique.",
        "icon": "graduation-cap"
      },
      {
        "title": "Optimisation de la navigation dans les ebooks",
        "description": "Structurez les publications textuelles numérisées en chapitres lisibles pour les tablettes ou les lecteurs mobiles.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Peut-il correspondre à des formats de chapitre personnalisés ?",
        "answer": "Oui. Vous pouvez ajouter des modèles d'expression régulière personnalisés dans le panneau de la barre latérale (par exemple, `^Part\\s+\\w+`) pour cibler des mises en page uniques."
      },
      {
        "question": "Cela affectera-t-il la présentation visuelle de la page ?",
        "answer": "Non. L'outil ajoute uniquement un catalogue de signets structurels internes. Le texte et les éléments visuels des pages restent intacts."
      },
      {
        "question": "Combien de niveaux de signets sont pris en charge ?",
        "answer": "L'outil prend en charge les structures de signets profondément imbriquées, permettant des dispositions de chapitre, de section et de sous-section."
      }
    ]
  },
  "batch-barcode-injector": {
    "title": "Injecter les codes en lot",
    "metaDescription": "Ajoutez des codes QR ou des codes-barres Code 128 aux pages PDF en masse. Ajustez le placement pour le suivi des documents, les étiquettes et les flux de travail d'impression.",
    "keywords": [
      "inserer qr code",
      "codes-barres en lot",
      "estampillage pdf"
    ],
    "description": "<p>L'injecteur de précision Batch Barcode fait le lien entre le suivi des actifs numériques et l'indexation des documents physiques.</p>\n      <p>Dans le domaine de l'entreposage, de la révision des contrats ou de la logistique, nous devons souvent apposer des codes-barres uniques sur les factures ou les cartes d'appareil. Cet outil rend les choses incroyablement faciles.</p>\n      <p>Générez des codes QR ou des codes-barres Code128 hautement lisibles et utilisez notre magnifique espace de travail d'alignement avec des guides laser verts pour les positionner. Un bip audio de balayage clair se déclenche lors du placement, fournissant un retour de qualité supérieure.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger le document",
        "description": "Faites glisser et déposez des PDF d'une ou plusieurs pages représentant des accords ou des listes d'expédition."
      },
      {
        "step": 2,
        "title": "Positionner les coordonnées du code-barres",
        "description": "Définissez le type de code, la valeur et faites glisser la zone de placement pour spécifier les coordonnées."
      },
      {
        "step": 3,
        "title": "Timbres et téléchargement",
        "description": "Cliquez sur Exécuter pour afficher la couche de code sur les index de page ciblés."
      }
    ],
    "useCases": [
      {
        "title": "Traçage de validation de contrat",
        "description": "Appliquez un code QR unique indiquant les détails anti-contrefaçon sur l'en-tête des contrats.",
        "icon": "file-check"
      },
      {
        "title": "Codage des listes d'expédition",
        "description": "Placez les codes-barres Code128 aux endroits cibles pour une validation rapide du pistolet de numérisation de l'entrepôt.\ncamion",
        "icon": "truck"
      },
      {
        "title": "Fiche d'enregistrement des actifs",
        "description": "Ajoutez des codes QR d'inventaire affichant les spécifications de maintenance sur les fiches d'équipement physique.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Les codes-barres générés sont-ils hautement lisibles ?",
        "answer": "Oui. Nous intégrons des représentations PNG haute résolution sans perte qui restent nettes même lorsqu'elles sont imprimées à de très petites dimensions."
      },
      {
        "question": "Puis-je injecter des valeurs uniques sur chaque page ?",
        "answer": "Actuellement, l'exécution par lots applique le même code configuré sur toutes les pages sélectionnées. L’importation Excel à valeurs multiples est prévue dans une future mise à jour."
      },
      {
        "question": "Que représente la coordonnée `pt` ?",
        "answer": "`pt` (Point) est l'unité physique PDF standard (72 pt = 1 pouce). Les pages A4 sont représentées comme 595 × 842 pt."
      }
    ]
  },
  "signature-ink-optimizer": {
    "title": "Extraire signatures et tampons",
    "metaDescription": "Extrayez une signature ou un tampon d'une photo et supprimez son arrière-plan. Téléchargez un PNG transparent à utiliser dans les documents.",
    "keywords": [
      "detourer signature",
      "digitaliser tampon",
      "png transparent"
    ],
    "description": "<p>L'optimiseur d'encre Chroma Signature & Stamp fonctionne comme un purificateur d'encre professionnel haute fidélité.</p>\n      <p>Les signatures ou les sceaux d'entreprise capturés sur les téléphones souffrent souvent d'une teinte de papier jaune, d'ombres inégales et de plis sur les pages. Les coller directement sur des PDF contractuels semble amateur.</p>\n      <p>Cet outil sépare le canal Alpha en fonction de la luminance et de l'espace colorimétrique. Il blanchit complètement les fonds de papier tout en accentuant le rouge du tampon (Chroma Ink) et le noir de l'écriture manuscrite. Le résultat est un tampon PNG transparent haut de gamme portant de véritables textures d'encre.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger la photo du sceau",
        "description": "Fournissez une photo prise par téléphone de votre signature ou de votre sceau."
      },
      {
        "step": 2,
        "title": "Ajustez les curseurs de nettoyage",
        "description": "Déplacez les curseurs de contraste et de luminance pour isoler le bruit de fond en temps réel."
      },
      {
        "step": 3,
        "title": "Téléchargez la signature propre",
        "description": "Exportez au format PNG transparent, prêt à être tamponné sur les accords de documents formels."
      }
    ],
    "useCases": [
      {
        "title": "Préparation professionnelle à la signature électronique",
        "description": "Convertissez les photos de signature grises en superbes calques transparents pour signer des accords.",
        "icon": "file-signature"
      },
      {
        "title": "Désinfection du sceau d'entreprise",
        "description": "Nettoyez les numérisations de tampons physiques en éliminant le bruit des fibres de papier et en préparant des sceaux de tampon transparents et nets.",
        "icon": "stamp"
      },
      {
        "title": "Extraction de dessins au trait",
        "description": "Isolez les traits noirs des carnets de croquis pour faciliter les flux de travail de coloration Photoshop.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "En quoi l'extraction Alpha auto-adaptative diffère-t-elle de la saisie normale ?",
        "answer": "L'incrustation chroma standard donne souvent aux détails des traits de signature un aspect en blocs et pixellisés. Notre algorithme isole uniquement le bruit de fond blanc/jaune et lisse les bordures d'encre."
      },
      {
        "question": "Quels formats d'images sont pris en charge ?",
        "answer": "Nous prenons en charge JPG, JPEG et PNG. Pour de meilleurs résultats, capturez votre photo signature sous un éclairage lumineux et uniforme."
      },
      {
        "question": "Le détail de l'écriture manuscrite sera-t-il modifié ?",
        "answer": "Non. Le filtrage des pixels agit sur les coordonnées d'origine, accentuant le contraste tout en conservant de véritables textures de trait."
      }
    ]
  },
  "dead-link-debugger": {
    "title": "Réparer les liens morts",
    "metaDescription": "Inspectez les hyperliens PDF et remplacez les destinations cassées ou obsolètes. Scannez les annotations des liens et enregistrez le document mis à jour.",
    "keywords": [
      "liens morts pdf",
      "corriger url pdf",
      "deboguer hyperliens"
    ],
    "description": "<p>Le Dead Link Debugger est un éditeur structurel approfondi qui garantit la qualité de l'interaction des liens dans les fichiers publiés.</p>\n      <p>Les URL brisées (404/500) dans les manuels, les livres blancs ou les guides réduisent l'autorité de la marque. Cet outil vous permet de gérer la base de données d'hyperliens de manière transparente.</p>\n      <p>Il analyse les dictionnaires <code>/Link</code> de bas niveau sur chaque page, les sonde et affiche l'état des liens dans une grille interactive (rouge pour les liens morts, orange pour les redirections). Tapez simplement l'URL de redirection mise à jour et l'outil réécrit la nouvelle cible directement dans le flux binaire PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Fournir le document cible",
        "description": "Téléchargez le manuel PDF ou le catalogue contenant des liens pour déboguer."
      },
      {
        "step": 2,
        "title": "Scanner et mettre à jour",
        "description": "Laissez le débogueur extraire toutes les entités URL. Saisissez de nouvelles URL de redirection pour les éléments cassés."
      },
      {
        "step": 3,
        "title": "Enregistrer les mises à jour de redirection",
        "description": "Cliquez sur exécuter pour réécrire les actions /URI et télécharger le PDF corrigé."
      }
    ],
    "useCases": [
      {
        "title": "Correctif des liens brisés du flyer",
        "description": "Corrigez instantanément les URL erronées sur les dépliants publiés sans rouvrir les éditeurs de conception d'origine.",
        "icon": "refresh-cw"
      },
      {
        "title": "Vérification des liens bibliographiques",
        "description": "Vérifier les liens vers la bibliographie académique dans les rapports, en mettant à jour les références pour maintenir l'autorité.",
        "icon": "book"
      },
      {
        "title": "Mises à jour du rebranding de l'entreprise",
        "description": "Mettez à jour par lots les anciennes URL dans les PDF d'entreprise lorsque les noms de domaine de l'entreprise sont modifiés.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Pourquoi l'accessibilité des liens n'est-elle pas entièrement vérifiée en ligne ?",
        "answer": "Les navigateurs Web appliquent des politiques CORS strictes qui bloquent la vérification directe des liens multi-origines. Notre outil répertorie clairement les liens et vous permet de les corriger manuellement."
      },
      {
        "question": "Cela modifiera-t-il la représentation visuelle du texte sur la page ?",
        "answer": "Non. Cela modifie uniquement l'action de navigation `/URI` sous-jacente. Le texte du lien visuel reste inchangé."
      },
      {
        "question": "Prend-il en charge la modification des signets de page internes ?",
        "answer": "Cet outil gère les hyperliens externes `/URI`. Pour la navigation dans la mise en page interne, utilisez notre outil TOC interactif."
      }
    ]
  },
  "interactive-toc-generator": {
    "title": "Générer un sommaire interactif",
    "metaDescription": "Ajoutez une table des matières cliquable à votre PDF. Créez des liens de chapitre et revenez à la navigation pour une navigation plus facile dans les documents.",
    "keywords": [
      "sommaire interactif",
      "table des matieres cliquable",
      "navigation pdf"
    ],
    "description": "<p>Le générateur de table des matières interactif introduit une expérience de navigation révolutionnaire dans les fichiers PDF volumineux.</p>\n      <p>Il est frustrant de parcourir des centaines de pages dans des documents non structurés pour localiser les chapitres cibles. Cet outil introduit la <strong>compilation bidirectionnelle de la table des matières</strong>.</p>\n      <p>Il analyse les en-têtes et génère une page de table des matières premium inspirée de l'origami, insérée juste après la couverture. En plus de créer des liens /GoTo cliquables pour chaque ligne d'index, il injecte une petite et élégante ancre flottante « TOC ↩ » au coin de chaque page de chapitre cible. Les lecteurs peuvent passer d'un endroit à l'autre instantanément, profitant d'une navigation de type Web.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Fournir un document PDF",
        "description": "Téléchargez un rapport, un livre électronique ou une proposition nécessitant un catalogue interactif."
      },
      {
        "step": 2,
        "title": "Définir le titre et l'index de la table des matières",
        "description": "Personnalisez le titre principal et choisissez l'index de la page pour insérer la page TOC."
      },
      {
        "step": 3,
        "title": "Tissez des ancres et enregistrez",
        "description": "Cliquez sur exécuter pour compiler les pages et écrire la navigation à double lien."
      }
    ],
    "useCases": [
      {
        "title": "Perfectionnement du rapport annuel d'entreprise",
        "description": "Injectez une belle page d'index après la page de garde pour permettre aux actionnaires de passer d'un tableau financier à l'autre.",
        "icon": "file-bar"
      },
      {
        "title": "Indexation des thèses",
        "description": "Compilation rapide d'index standards alignés sur les règles de formatage universitaires.",
        "icon": "bookmark"
      },
      {
        "title": "Navigation dans le manuel d'utilisation",
        "description": "Aidez les lecteurs du manuel à passer rapidement des feuilles de dépannage à la table des matières principale.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Comment fonctionnent les ancrages bidirectionnels ?",
        "answer": "Nous créons des annotations de lien standard sur la page TOC ciblant les pages respectives ; puis nous intégrons un lien vers la page TOC sur toutes les feuilles de chapitre cibles."
      },
      {
        "question": "L'insertion de la page de la table des matières brisera-t-elle les numéros de page existants ?",
        "answer": "Non. Le compilateur prend en compte le décalage de la page de table des matières nouvellement insérée, garantissant ainsi l'alignement de toutes les destinations cibles."
      },
      {
        "question": "La page TOC est-elle valide lorsqu'elle est imprimée physiquement ?",
        "answer": "Oui. La table des matières générée répertorie les numéros de page physiques propres pour guider les lecteurs papier tout en permettant des liens cliquables à l'écran."
      }
    ]
  },
  "pdf-deskew-aligner": {
    "title": "Redresser un scan penché",
    "metaDescription": "Détecte localement les lignes inclinées et ajuste le contenu corrigé à la page originale.",
    "keywords": [
      "redresser pdf scan",
      "corriger inclinaison",
      "alignement horizontal"
    ],
    "description": "\n      <p>Détecte localement les lignes inclinées et ajuste le contenu corrigé à la page originale.</p>\n      <p>Les pages vides, les scans incertains et les pages avec annotations restent inchangés.</p>\n      <p>Les résolutions élevées prennent plus de temps. Les très grandes pages utilisent une résolution d’analyse réduite.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Fournir un PDF asymétrique",
        "description": "Téléchargez toute feuille PDF contenant des documents numérisés pivotés ou mal alignés."
      },
      {
        "step": 2,
        "title": "Réglages de l’alignement",
        "description": "Résolution d’analyse · Angle maximal de correction"
      },
      {
        "step": 3,
        "title": "Analyser et redresser",
        "description": "Télécharger · PDF aligné"
      }
    ],
    "useCases": [
      {
        "title": "Archivage des reçus et des contrats",
        "description": "Redressez les analyses rapides de contrats mobiles portables avant de les enregistrer sous forme d'archives PDF numériques formelles.",
        "icon": "file-text"
      },
      {
        "title": "Numérisation de livres académiques",
        "description": "Désinfectez les numérisations de livres sur microfilms là où les lignes de texte dérivent des marges horizontales.",
        "icon": "book"
      },
      {
        "title": "Notation des devoirs des étudiants",
        "description": "Corrigez les instantanés des devoirs pris par les téléphones des étudiants, détendant ainsi les yeux des enseignants qui notent.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Comment le biais du document est-il détecté ?",
        "answer": "Détecte localement les lignes inclinées et ajuste le contenu corrigé à la page originale."
      },
      {
        "question": "Ce processus supprimera-t-il les bords de la page ?",
        "answer": "Détecte localement les lignes inclinées et ajuste le contenu corrigé à la page originale."
      },
      {
        "question": "Supporte-t-il les documents remplis de diagrammes ?",
        "answer": "Les pages vides, les scans incertains et les pages avec annotations restent inchangés."
      }
    ]
  },
  "pdf-two-column-reflower": {
    "title": "Réorganiser PDF double colonne",
    "metaDescription": "Redistribuez les documents PDF à deux colonnes en une seule colonne pour une lecture mobile plus facile. Ajustez les documents académiques pour des écrans plus petits.",
    "keywords": [
      "double colonne en simple",
      "reflow academique",
      "decoupe cropbox"
    ],
    "description": "<p>Le Reflower académique à deux colonnes résout le problème le plus important de la recherche numérique : la lecture d'articles sur des écrans mobiles standard.</p>\n      <p>Les mises en page à double colonne (utilisées par IEEE, ACM, Nature et les principaux rapports) sont conçues pour le papier A4. Leur navigation sur les écrans de téléphone ou les appareils Kindle nécessite un zoom constant, un glissement vers la droite, un défilement vers le bas et un panoramique vers le haut. Cela brise complètement la compréhension écrite.</p>\n      <p>Notre processeur met en œuvre une <strong>redistribution intelligente des paragraphes et une analyse des barrières de partition verticales</strong>. Il analyse les coordonnées des caractères pour cartographier les gouttières à double colonne, divise la mise en page et tisse les segments verticalement (colonne de gauche d'abord, puis de droite). Les graphiques, les formules et les titres sont réorganisés de manière transparente dans un PDF à défilement vertical fluide et à une seule colonne.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger un PDF à double colonne",
        "description": "Fournissez le rapport du journal IEEE/ACM ou la feuille PDF multicolonne."
      },
      {
        "step": 2,
        "title": "Inspecter la gouttière de séparation",
        "description": "Vérifiez les guides de tranche de partition verticale rouges. Ajustez les marges pour éviter que les éléments ne se chevauchent."
      },
      {
        "step": 3,
        "title": "Redistribuer et enregistrer",
        "description": "Cliquez sur Exécuter pour compiler les pages dans des mises en page fluides et les télécharger instantanément."
      }
    ],
    "useCases": [
      {
        "title": "Importation de livres de liseuse électronique",
        "description": "Convertissez des essais denses sur deux colonnes en documents confortables à une seule colonne correspondant aux écrans Kindle et Onyx.",
        "icon": "tablet"
      },
      {
        "title": "Lecture du téléphone du métro",
        "description": "Lisez confortablement la littérature de recherche avec des gestes de balayage vertical d'une seule main pendant le transit.",
        "icon": "smartphone"
      },
      {
        "title": "Formatage du journal d'archives",
        "description": "Modernisez les anciens journaux à colonnes étroites en formats Web lisibles à une seule colonne.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "Comment les grands graphiques et les équations sont-ils traités ?",
        "answer": "Notre moteur applique la « détection des éléments d'envergure ». Lorsqu'une équation ou un diagramme dépasse la largeur normale des colonnes, il est isolé en tant qu'élément pleine largeur, conservant ainsi ses proportions d'origine sans découpage."
      },
      {
        "question": "Cela modifiera-t-il la résolution du texte vectoriel ?",
        "answer": "Pas du tout. Nous réécrivons les matrices de transformation d'objets texte PDF au niveau de l'arborescence d'objets au lieu de les pixelliser, ce qui signifie que le texte reste 100 % vectoriel et entièrement sélectionnable."
      },
      {
        "question": "Est-ce que cela fonctionne sur les documents image numérisés ?",
        "answer": "Pour les PDF plats basés sur des images, nous vous recommandons fortement d'exécuter notre outil OCR avant d'exécuter le processus de redistribution."
      }
    ]
  },
  "pdf-page-resizer-uniform": {
    "title": "Uniformiser la taille des pages",
    "metaDescription": "Redimensionnez les pages PDF mixtes à une taille uniforme. Normalisez les pages A4, A3 et Letter avec une mise à l'échelle proportionnelle et des marges centrées.",
    "keywords": [
      "uniformiser taille page",
      "pdf en a4",
      "centrer contenu page"
    ],
    "description": "<p>Le Resizer PDF multiformat est le standardiseur ultime pour les documents d'entreprise encombrés et incompatibles.</p>\n      <p>La combinaison de factures, de contrats et de graphiques supplémentaires aboutit souvent à un PDF contenant d'énormes pages de grand livre A3, des accords A4 standard et des enveloppes au format Lettre. Les parcourir est très distrayant, et les envoyer vers des imprimantes de bureau physiques provoque souvent des erreurs de bourrage en raison d'une incompatibilité de taille.</p>\n      <p>Cet outil réécrit les grilles <code>/MediaBox</code> et <code>/CropBox</code> de bas niveau sur chaque page. Il mappe les largeurs et hauteurs existantes, met à l'échelle les pages originales proportionnellement pour correspondre aux préréglages cibles (par exemple A4 standard) et introduit des marges environnantes élégantes et cohérentes, donnant à l'ensemble du fichier un aspect incroyablement soigné.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Fournir un PDF de tailles mixtes",
        "description": "Téléchargez un document PDF fusionné contenant des tailles de page incompatibles et désordonnées."
      },
      {
        "step": 2,
        "title": "Choisissez le préréglage cible",
        "description": "Sélectionnez la taille uniforme cible (par exemple A4, Lettre, A3) et basculez les modes d'échelle."
      },
      {
        "step": 3,
        "title": "Aligner et télécharger",
        "description": "Cliquez sur Exécuter pour déclencher l'alignement de la feuille 3D et télécharger un PDF magnifiquement standardisé."
      }
    ],
    "useCases": [
      {
        "title": "Propositions d'appel d'offres d'entreprise",
        "description": "Normaliser les certificats de qualification numérisés et les feuilles d'appel d'offres A4 avant l'impression physique.",
        "icon": "file-text"
      },
      {
        "title": "Intégration des graphiques financiers",
        "description": "Transformez de larges flux de trésorerie financiers A3 en pages A4 soignées, en préservant les normes d'impression.",
        "icon": "layout"
      },
      {
        "title": "Standardisation des marges des livres",
        "description": "Forcez les pages numérisées du livre légèrement variées à une dimension absolument uniforme pour une lecture confortable.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Cela va-t-il déformer mon contenu ?",
        "answer": "Jamais. Nous prenons en charge à la fois « Contenir » (mise à l'échelle proportionnelle avec des barres blanches) et « Couvrir » (recadrage centré). Le mode Contenir par défaut préserve les proportions, évitant ainsi la distorsion."
      },
      {
        "question": "Les formulaires et annotations existants resteront-ils cliquables ?",
        "answer": "Oui. L'algorithme mappe les facteurs de mise à l'échelle sur les tableaux de coordonnées d'annotation, la mise à l'échelle des boîtes de liens, les limites des signes et les entrées pour les aligner parfaitement après le redimensionnement."
      },
      {
        "question": "Y a-t-il une limite au nombre de pages que je peux redimensionner ?",
        "answer": "Non. Étant donné que toutes les opérations s'exécutent localement dans votre sandbox client à l'aide de JavaScript natif, vous pouvez traiter des PDF volumineux contenant des centaines de pages en quelques secondes."
      }
    ]
  },
  "handwriting-ink-contrast-booster": {
    "title": "Améliorer l'écriture manuelle'Écriture Manuelle",
    "metaDescription": "Améliorez le contraste de l'écriture manuscrite et de la signature dans les images numérisées. Réduisez le bruit de fond du papier et rendez l’encre plus facile à lire.",
    "keywords": [
      "renforcer ecriture manuscrite",
      "nettoyer fond scanne",
      "contraste signature"
    ],
    "description": "<p>Le Handwriting Ink Contrast Booster est un sauveur pour la numérisation des accords signés et des archives de manuscrits historiques.</p>\n      <p>Les numérisations de documents signés à la main semblent souvent ternes en raison des reflets gris sur la vitre du scanner, de la teinte jaune du papier ou de l'encre délavée. La réimpression ou la photocopie de ces fichiers entraîne des signatures floues et illisibles. Les outils de contraste traditionnels assombrissent tout l'arrière-plan, ce qui aggrave la mise en page.</p>\n      <p>Cet outil utilise **l'égalisation adaptative limitée de l'histogramme (CLAHE) et la séparation des couleurs basée sur la teinte**. Dans le cadre d'un processus Canvas local sécurisé, il isole les traits d'écriture manuscrite (noirs et bleus) du parchemin de fond, blanchit complètement les rides d'ombre et imprègne les encres décolorées d'un contraste profond et saturé, donnant à vos documents un aspect incroyablement net et propre.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importer un document signé à la main",
        "description": "Fournissez un PDF contenant des signatures estompées, des journaux manuscrits ou des croquis."
      },
      {
        "step": 2,
        "title": "Configurer le filtre d'encre",
        "description": "Sélectionnez le profil de couleur à isoler (par exemple, encre bleue, encre noire ou les deux) et ajustez la netteté."
      },
      {
        "step": 3,
        "title": "Aiguiser et télécharger",
        "description": "Cliquez sur Exécuter pour tracer les couleurs avec un effet de scanner radar et télécharger un PDF purifié."
      }
    ],
    "useCases": [
      {
        "title": "Réparation des contrats exécutés",
        "description": "Réparez les accords mal numérisés, aiguisez les signatures et blanchissez le fond du papier en A4-blanc pur.",
        "icon": "file-check"
      },
      {
        "title": "Archives de manuscrits manuscrits",
        "description": "Numérisez des journaux ou des journaux écrits, en extrayant des traits noirs clairs tout en effaçant les taches liées à l'âge.",
        "icon": "book"
      },
      {
        "title": "Restauration du grand livre historique",
        "description": "Restaurez les détails à l'encre pâle sur les anciens registres d'archives, sauvant ainsi de précieuses coordonnées manuscrites.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "En quoi cela diffère-t-il de la conversion normale en niveaux de gris ?",
        "answer": "Grayscale convertit les ombres du papier en valeurs de gris. Notre algorithme adaptatif sépare la luminance de l'arrière-plan et isole les « spectres d'encre » caractéristiques, purifiant ainsi la toile de fond en un blanc absolu tout en laissant les bords des traits nets."
      },
      {
        "question": "Vais-je perdre la texture du trait d'écriture manuscrite ?",
        "answer": "Non. L'algorithme CLAHE fonctionne au niveau des sous-pixels, préservant la pression naturelle du trait du stylo, la décoloration de l'encre et l'épaisseur de trait dynamique."
      },
      {
        "question": "Puis-je conserver les cachets rouges de l'entreprise ?",
        "answer": "Oui. En activant la « Préservation de l'encre Chroma », le booster blanchit le fond du papier et assombrit l'écriture, tout en conservant les couleurs vives des sceaux rouges et des signatures à l'encre bleue."
      }
    ]
  },
  "pdf-spine-bookbinder": {
    "title": "Calculer la largeur du dos",
    "metaDescription": "Calculez la largeur du dos du livre à partir du nombre de pages et du grammage du papier. Générez un modèle de couverture imprimable avec des lignes de pliage au dos.",
    "keywords": [
      "calculer dos de livre",
      "epaisseur reliure",
      "maquette couverture pdf"
    ],
    "description": "<p>Le PDF Spine Bookbinder est un outil de prépresse idéal pour les concepteurs, les auteurs auto-édités et les équipes d'appel d'offres commerciales.</p>\n      <p>Lors de la compilation de catalogues de livres épais, de propositions d'appel d'offres ou d'annuaires annuels, la reliure parfaite (reliure collée) nécessite une couverture avec des coordonnées précises du dos. Si la largeur du dos est même de 1 mm, la couverture reliée se déformera, se déplacera ou se froissera. Calculer le nombre de pages par rapport au grammage du papier est complexe et sujet aux erreurs.</p>\n      <p>Cet outil utilise une <strong>bibliothèque papier-épaisseur GSM modélisée physiquement</strong>. Saisissez simplement le nombre de pages de votre PDF et sélectionnez le type de papier (par exemple 80 GSM offset, 100 GSM brillant). Le moteur calcule la largeur du dos jusqu'au micromètre et compile un PDF de couverture extra-large prêt à imprimer, complet avec des rabats avant/arrière standard et des plis précis.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Définir les pages et le type de stock",
        "description": "Saisissez le nombre de pages du document et sélectionnez les spécifications du papier cible."
      },
      {
        "step": 2,
        "title": "Saisir le texte du dos",
        "description": "Saisissez les titres des livres, les détails de l'auteur et personnalisez les arrière-plans du dos/de la couverture."
      },
      {
        "step": 3,
        "title": "Aperçu et exportation 3D",
        "description": "Faites tourner et inspectez la couverture de votre livre dans un classeur 3D interactif. Exportez un PDF vectoriel haute résolution."
      }
    ],
    "useCases": [
      {
        "title": "Propositions d'appel d'offres épaisses",
        "description": "Concevez des feuilles de couverture professionnelles avec des alignements précis des plis du dos pour les offres épaisses.",
        "icon": "layers"
      },
      {
        "title": "Thèse Reliure relié",
        "description": "Cartographiez les largeurs de disposition parfaites du dos pour les thèses universitaires de maîtrise/doctorat.",
        "icon": "award"
      },
      {
        "title": "Couvertures de romans en auto-édition",
        "description": "Calculez facilement la largeur du dos du livre avant de soumettre des fichiers aux services de publication d'impression à la demande.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "Quelle est la précision du calcul de l'épaisseur du papier GSM ?",
        "answer": "Très précis. Notre bibliothèque physique correspond aux moyennes de l'industrie (par exemple 70 GSM = 0,09 mm, 80 GSM = 0,10 mm, 150 GSM brillant = 0,125 mm). Nous incluons également une bascule « Impression recto-verso » pour réduire automatiquement de moitié les calculs."
      },
      {
        "question": "Les couvertures exportées sont-elles prêtes pour l'impression directe ?",
        "answer": "Oui. Les fichiers sont des PDF vectoriels parfaits comportant des marques de repérage standard, des barres de couleur et des guides de dos, entièrement compatibles avec les presses commerciales offset et numériques."
      },
      {
        "question": "Puis-je télécharger une image d'arrière-plan couvrant toute la colonne ?",
        "answer": "Oui. Vous pouvez télécharger des mises en page personnalisées, et notre compositeur enveloppera et alignera automatiquement les graphiques sur les plis du dos."
      }
    ]
  },
  "pdf-signature-anchor-helper": {
    "title": "Guide de position de signature'Ancrage de Signature",
    "metaDescription": "Placez des guides de signature sur les pages PDF en utilisant les coordonnées X/Y. Prévisualisez leurs positions avant d’enregistrer le document mis à jour.",
    "keywords": [
      "ancrage signature",
      "repere signature pdf",
      "guider signataire"
    ],
    "description": "<p>Le PDF Signature Guide Injector garantit des flux de travail de signature clairs et sans erreur pour les accords de plusieurs pages.</p>\n      <p>Lors de l'envoi d'accords NDA, d'états financiers ou de baux commerciaux de plusieurs pages, les clients oublient souvent des cases de signature critiques, ce qui nécessite des échanges d'e-mails sans fin et des transactions commerciales retardées.</p>\n      <p>Notre outil utilise le <strong>cartographie sémantique des regex naturelles</strong>. Il analyse la carte des caractères PDF pour localiser des termes tels que <code>Signature :</code>, <code>签字：</code>, <code>Témoin :</code> ou <code>签署日期：</code>. Il exploite ensuite <code>pdf-lib</code> pour injecter des annotations de lien interactif PDF standard. Lorsqu'ils sont ouverts dans n'importe quel lecteur standard, les clients voient des flèches clignotantes bordées de néon qui les guident instantanément vers les bonnes cases, rendant la signature infaillible.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Contrat commercial d'importation",
        "description": "Téléchargez le contrat PDF ou la NDA qui nécessite les coordonnées de signature."
      },
      {"step":2,"title":"X / Y","description":"Cliquez sur l’aperçu réel du PDF ou saisissez les coordonnées X et Y de la page sélectionnée."},
      {"step":3,"title":"Traiter","description":"Traitez le fichier, examinez le résultat et téléchargez le PDF."},
    ],
    "useCases": [
      {
        "title": "Accords NDA d'entreprise",
        "description": "Injectez des guides clairs et clignotants à côté des blocs de signalisation pour empêcher les employés d'intégration de manquer des clauses.",
        "icon": "file-text"
      },
      {
        "title": "Contrats de bail commercial",
        "description": "Guidez plusieurs cosignataires à travers des documents immobiliers de plusieurs pages avec des onglets de couleur personnalisée.",
        "icon": "users"
      },
      {
        "title": "Signatures des bons de commande d'approvisionnement",
        "description": "Superposez des pointeurs interactifs sur les factures et les bons de commande pour accélérer les boucles d'approbation comptable.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Ces guides apparaîtront-ils lorsque j'imprimerai le contrat ?",
        "answer": "Non. Les ancres sont injectées avec l'indicateur PDF standard `Printable` défini sur false. Ils s’affichent magnifiquement sur les écrans d’ordinateur/tablette mais restent complètement invisibles une fois imprimés."
      },
      {
        "question": "Les clients peuvent-ils facilement passer d'un champ de signature à l'autre ?",
        "answer": "Oui. Nous tissons des ancrages internes bidirectionnels. Les clients peuvent cliquer sur le signet « Guide de signature » pour passer automatiquement et instantanément à l'emplacement de signature vide suivant."
      },
      {
        "question": "Est-ce que cela fonctionne sur les documents image numérisés ?",
        "answer": "Oui. En plus de rechercher des flux de texte, notre analyseur de disposition spatiale estime les lignes de signature en fonction de règles horizontales et de cadres de délimitation sur les feuilles numérisées."
      }
    ]
  },
  "pdf-lossless-slicer": {
    "title": "Découpe de plans sans perte",
    "metaDescription": "Recadrez une région d'un dessin, d'une carte ou d'un graphique PDF en utilisant des coordonnées précises. Préservez le contenu vectoriel dans le PDF exporté.",
    "keywords": [
      "decouper plan pdf",
      "recadrage vectoriel",
      "cropbox mediabox"
    ],
    "description": "<p>Le PDF Lossless Drawing Slicer est un outil chirurgical de haute précision conçu pour les architectes, les ingénieurs et les dessinateurs de cartes.</p>\n      <p>Lors de l'extraction d'une salle des pompes ou d'un noyau de puce spécifique à partir d'un plan d'ingénierie CAO massif ou d'une carte géographique PDF, les captures d'écran traditionnelles génèrent un texte pixelisé et flou. Les outils de recadrage normaux placent simplement un masque sur la feuille, ce qui signifie que le fichier massif de 100 Mo reste énorme et que le contenu caché peut toujours être extrait.</p>\n      <p>Cet outil édite les matrices de page <code>/MediaBox</code>, <code>/CropBox</code> et <code>/BleedBox</code> au niveau de l'arborescence des objets. Il isole physiquement les nœuds vectoriels en dehors de la région sélectionnée, gardant la zone cible 100 % parfaite (permettant un grossissement de zoom infini) tout en purgeant les chemins et les images redondants hors écran pour réduire la taille du fichier de 95 % !</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importer un grand plan",
        "description": "Téléchargez la CAO riche en vecteurs, la carte SIG ou le catalogue PDF haute résolution."
      },
      {"step":2,"title":"Rectangle de recadrage","description":"Saisissez X, Y, la largeur et la hauteur, puis vérifiez la page sélectionnée dans l’aperçu."},
      {"step":3,"title":"Traiter","description":"Traitez le fichier, examinez le résultat et téléchargez le PDF."},
    ],
    "useCases": [
      {
        "title": "Isolation du plan CAO",
        "description": "Découpez un détail du « système de refroidissement » à partir d'un plan d'étage massif de 100 Mo à partager avec les sous-traitants.",
        "icon": "crop"
      },
      {
        "title": "Capture de carte SIG",
        "description": "Extrayez un bloc sans perte et sans perte de vecteur d'un plan de rue de la ville pour une diapositive de présentation sans perte de résolution.",
        "icon": "map"
      },
      {
        "title": "Traçage manuel des illustrations",
        "description": "Isolez sans perte les chiffres des livres scientifiques à intégrer dans des articles universitaires de haute qualité.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "En quoi est-ce différent du recadrage standard ?",
        "answer": "Le recadrage standard ajuste simplement les limites visuelles ; les vecteurs cachés restent dans le fichier. Notre slicer supprime les chemins vectoriels qui se chevauchent et purge les images XObject hors limites, garantissant ainsi une isolation complète des données et une compression maximale des fichiers."
      },
      {
        "question": "Les calques de texte resteront-ils consultables ?",
        "answer": "Oui. Tous les caractères de texte qui se trouvent à l’intérieur de la limite découpée restent entièrement vectoriels, consultables et sélectionnables."
      },
      {
        "question": "Puis-je exporter des régions découpées en SVG ?",
        "answer": "La sortie est un PDF vectoriel standardisé. Vous pouvez transmettre le fichier résultant à notre outil PDF vers SVG pour le convertir en un format graphique vectoriel évolutif pour le Web."
      }
    ]
  },
  "pdf-scratchpad-canvas": {
    "title": "Canevas de notes quadrillé",
    "metaDescription": "Ajoutez des marges de note quadrillées, lignées ou Cornell aux pages PDF. Créez un espace d'écriture supplémentaire pour les notes d'étude, les calculs et la préparation aux examens.",
    "keywords": [
      "marge de notes pdf",
      "papier quadrille pdf",
      "extension canevas"
    ],
    "description": "<p>Le PDF Scratchpad Margin Extender est un compagnon d'étude essentiel conçu pour les étudiants, les chercheurs et les candidats aux examens professionnels.</p>\n      <p>Lorsque vous résolvez des copies de tests pratiques, révisez des diapositives ou lisez des manuels académiques sur des tablettes numériques, les marges de page sont incroyablement serrées. L'ouverture d'une application de notes distincte vous oblige à basculer constamment entre les écrans, ce qui interrompt la concentration. L'ajout de feuilles vierges vous empêche de visualiser le problème et votre calcul côte à côte.</p>\n      <p>Cet outil réécrit les dimensions de largeur ou de hauteur de la page dans la structure PDF de bas niveau, en élargissant les marges <code>/MediaBox</code> de 200 à 250 pts à droite ou en bas. Il superpose ensuite des lignes de grille épurées, des lignes de cahier lignées par des universitaires ou des mises en page Cornell dans les nouvelles marges, vous offrant ainsi des tableaux de brouillon dédiés et adjacents à côté de chaque diapositive ou question !</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Télécharger des diapositives de cours",
        "description": "Fournissez le manuel PDF, les diapositives ou les documents d'étude."
      },
      {
        "step": 2,
        "title": "Choisissez le style de marge et de grille",
        "description": "Choisissez la direction d'expansion de la marge (par exemple, côté droit pour les tablettes) et sélectionnez le modèle de grille."
      },
      {
        "step": 3,
        "title": "Toile à broder et téléchargement",
        "description": "Cliquez sur Exécuter pour générer des pages développées avec de superbes brouillons de grilles."
      }
    ],
    "useCases": [
      {
        "title": "Préparation aux examens STEM",
        "description": "Cousez les marges de la grille à côté des questions d'examen de mathématiques et de physique, résolvant les dérivations juste à côté de la question.",
        "icon": "edit-3"
      },
      {
        "title": "Analyse de la lecture linguistique",
        "description": "Ajoutez des marges lignées dans un cahier à côté des essais en langue étrangère pour l'analyse du vocabulaire et la traduction des paragraphes.",
        "icon": "book"
      },
      {
        "title": "Audit du plan architectural",
        "description": "Ajoutez des espaces de marge vides sur le côté des plans pour les calculs techniques et les commentaires des clients.",
        "icon": "columns"
      }
    ],
    "faq": [
      {
        "question": "Est-ce que cela écrasera mon texte PDF original ?",
        "answer": "Pas du tout. L’algorithme étend la dimension du papier vers l’extérieur. Le contenu original conserve sa mise en page, ses polices et sa résolution ; nous étirons simplement l'espace blanc sur les bordures et dessinons des grilles dessus."
      },
      {
        "question": "Les stylos manuscrits standards peuvent-ils écrire dans le bloc-notes ?",
        "answer": "Oui. Les nouvelles pages PDF sont compilées nativement. Les applications de prise de notes sur tablette populaires telles que Goodnotes, Notability, Xodo et Acrobat peuvent écrire, surligner et griffonner directement dans le nouvel espace de grille."
      },
      {
        "question": "Les lignes de quadrillage sont-elles sombres et gênantes ?",
        "answer": "Nous avons sélectionné trois couleurs subtiles et respectueuses des yeux (bleu-gris doux, marron chaud et vert éclatant). Les lignes sont fines et douces, servant de guides sans vous distraire du contenu original de la page."
      }
    ]
  },
  "photo-tiling-prepress": {
    "title": "Planches photos d'identité",
    "metaDescription": "Recadrez et disposez les photos d'identité ou de passeport sur du papier photo standard. Ajoutez des repères de coupe d'impression pour aider à couper la feuille finie.",
    "keywords": [
      "planche photo identite",
      "tirage photo grille",
      "reperes de coupe"
    ],
    "description": "<p>L'outil Prepress Photo Tiling est un compilateur de mise en page économique et de haute précision conçu pour les cartes d'enregistrement personnelles et les studios de photographie.</p>\n      <p>L'impression de photos d'identité, de photos d'identité ou de permis de conduire à la maison entraîne souvent des dimensions physiques incorrectes (souvent imprimées en trop grand ou trop petit), un gaspillage de papier photo et des alignements inégaux. Se rendre dans des imprimeries professionnelles pour obtenir des mises en page prend beaucoup de temps.</p>\n      <p>Notre outil intègre un <strong>moteur matriciel de prépresse de précision</strong>. Il accepte les portraits photographiques ou les numérisations de cartes d'identité, les recadre aux dimensions standard (par exemple, spécifications de passeport 1\" ou 2\"), calcule le nombre optimal de carreaux pour les papiers photo standard (par exemple, feuilles de 5\" ou 6\") et injecte des lignes de coupe nettes de micro-pixels pour une découpe physique facile, générant ainsi un PDF imprimable parfait.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importer une photo d'identité",
        "description": "Téléchargez l'instantané du portrait de l'appareil photo ou les images de la carte d'identité recto-verso."
      },
      {
        "step": 2,
        "title": "Configurer le papier et la mise en page",
        "description": "Sélectionnez le format de papier d'impression cible (par exemple 6\") et choisissez les dispositions de grille (par exemple 8 copies de photos 1\")."
      },
      {
        "step": 3,
        "title": "Mosaïque et exportation",
        "description": "Inspectez les vignettes photo sur notre grille et exportez le PDF imprimable haute DPI."
      }
    ],
    "useCases": [
      {
        "title": "Photos de passeport en libre-service",
        "description": "Disposez vos portraits d'identité pris sur mobile sur une seule grille de papier photo de 6\" et imprimez 8 copies pour une fraction des coûts standard d'un studio.",
        "icon": "user"
      },
      {
        "title": "Copie recto verso de la carte d'identité",
        "description": "Formatez soigneusement les numérisations recto et verso des cartes d'identité nationales sur des feuilles Lettre/A4 standard pour les soumissions officielles.",
        "icon": "file-text"
      },
      {
        "title": "Feuilles de miniatures de photos par lots",
        "description": "Disposez plusieurs souvenirs de famille ou créez des instantanés sur un papier quadrillé pour imprimer efficacement des planches-contact miniatures.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Les dimensions imprimées correspondront-elles aux spécifications officielles de 1\" ou 2\" ?",
        "answer": "Oui. Le moteur de grille mesure à l'aide de points PDF standard (72 pt = 1 pouce), rendant les photos de 1\" exactement à 25 x 35 mm et les photos de 2\" à 35 x 49 mm. Assurez-vous d'imprimer à « Taille réelle / Échelle 100 % » dans les paramètres de votre imprimante."
      },
      {
        "question": "Puis-je combiner des photos 1\" et 2\" sur une seule feuille ?",
        "answer": "Oui. Nous proposons des préréglages de mise en page hybrides (par exemple « 4 copies de 1 » + 4 copies de 2 »), vous permettant de maximiser l'espace papier photo."
      },
      {
        "question": "Le modèle inclut-il des fonds perdus ?",
        "answer": "Oui. Les mises en page prépresse réservent une marge de sécurité d'impression standard de 4 mm sur les bordures du papier, empêchant les rouleaux physiques de l'imprimante de recadrer les photos."
      }
    ]
  },
  "psd-to-pdf": {
    "title": "PSD en PDF",
    "metaDescription": "Convertissez des fichiers Adobe Photoshop (PSD) au format PDF. Prend en charge plusieurs fichiers et préserve la qualité des images.",
    "keywords": [
      "psd en pdf",
      "convertir psd",
      "photoshop en pdf",
      "convertisseur psd",
      "adobe psd en pdf"
    ],
    "description": "\n      <p>L'outil PSD en PDF convertit les fichiers Adobe Photoshop (PSD) en documents PDF. Cet outil vous permet de visualiser et de partager des conceptions PSD sans avoir besoin d'installer Photoshop.</p>\n      <p>Vous pouvez convertir plusieurs fichiers PSD à la fois et les combiner en un seul document PDF. L'outil traite chaque fichier PSD en rendant les calques visibles dans des pages PDF de haute qualité.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, garantissant ainsi que vos conceptions restent privées et sécurisées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser les fichiers PSD",
        "description": "Faites glisser et déposez vos fichiers PSD ou PSB, ou cliquez pour les sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Organiser l'ordre",
        "description": "Faites glisser et déposez les miniatures des fichiers pour les organiser dans l'ordre souhaité."
      },
      {
        "step": 3,
        "title": "Convertir et télécharger",
        "description": "Cliquez sur Convertir pour générer les PSD et télécharger votre document PDF."
      }
    ],
    "useCases": [
      {
        "title": "Partager des conceptions",
        "description": "Partagez des conceptions Photoshop avec des clients ou des collègues qui ne possèdent pas Photoshop.",
        "icon": "share-2"
      },
      {
        "title": "Création de portfolio",
        "description": "Compilez vos travaux de conception dans un portfolio PDF professionnel.",
        "icon": "layout"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Convertissez des conceptions en PDF à des fins d'impression.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Dois-je installer Photoshop ?",
        "answer": "Non, cet outil fonctionne entièrement dans votre navigateur sans nécessiter Adobe Photoshop."
      },
      {
        "question": "Les calques sont-ils préservés ?",
        "answer": "L'outil restitue l'état visible du PSD (image composite). Les calques individuels sont aplatis dans le PDF."
      },
      {
        "question": "Quelle est la taille maximale des fichiers ?",
        "answer": "Vous pouvez téléverser des fichiers allant jusqu'à 100 Mo chacun. Le traitement des fichiers PSD volumineux peut prendre un moment."
      }
    ]
  },
  "word-to-pdf": {
    "title": "Word en PDF",
    "metaDescription": "Convertissez des documents Word (DOCX) en PDF. Préservez le formatage et la mise en page dans vos documents convertis.",
    "keywords": [
      "word en pdf",
      "docx en pdf",
      "convertir word",
      "convertisseur word",
      "microsoft word en pdf"
    ],
    "description": "\n      <p>L'outil Word en PDF convertit les documents Microsoft Word au format PDF tout en préservant la mise en forme originale, la mise en page et la structure du contenu.</p>\n      <p>Téléversez vos fichiers DOCX et obtenez un rendu PDF de haute qualité, idéal pour le partage, l'impression ou l'archivage. La conversion conserve la mise en forme du texte, les styles de paragraphe et la structure de base du document.</p>\n      <p>Toutes les conversions se font localement dans votre navigateur, ce qui garantit la confidentialité et la sécurité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le document Word",
        "description": "Faites glisser et déposez votre fichier .docx ou cliquez pour le sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Attendre le traitement",
        "description": "L'outil va charger le document et le préparer pour la conversion."
      },
      {
        "step": 3,
        "title": "Télécharger le PDF",
        "description": "Cliquez sur Télécharger pour enregistrer votre document PDF converti."
      }
    ],
    "useCases": [
      {
        "title": "Partage de documents",
        "description": "Convertissez des documents Word en PDF pour un partage et une visualisation universels.",
        "icon": "share-2"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Créez des PDF prêts à l'impression à partir de documents Word.",
        "icon": "printer"
      },
      {
        "title": "Archivage de documents",
        "description": "Archivez des documents Word au format PDF stable pour un stockage à long terme.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Le format .doc est-il pris en charge ?",
        "answer": "Actuellement, seul le format .docx est pris en charge. Veuillez d'abord convertir vos fichiers .doc en .docx à l'aide de Microsoft Word ou LibreOffice."
      },
      {
        "question": "Les images sont-elles conservées ?",
        "answer": "Le contenu textuel et le formatage de base sont préservés. Les mises en page complexes comportant de nombreuses images peuvent faire l'objet d'un rendu simplifié."
      },
      {
        "question": "La conversion est-elle sécurisée ?",
        "answer": "Oui, tout le traitement se déroule dans votre navigateur. Vos documents ne quittent jamais votre appareil."
      }
    ]
  },
  "excel-to-pdf": {
    "title": "Excel en PDF",
    "metaDescription": "Convertissez des feuilles de calcul Excel (XLSX) en PDF. Préservez les tableaux et les données dans vos documents convertis.",
    "keywords": [
      "excel en pdf",
      "xlsx en pdf",
      "convertir excel",
      "tableur en pdf",
      "microsoft excel en pdf"
    ],
    "description": "\n      <p>L'outil Excel en PDF convertit les feuilles de calcul Microsoft Excel au format PDF tout en préservant la structure des tableaux et l'organisation des données.</p>\n      <p>Téléversez vos fichiers XLSX et obtenez des documents PDF propres avec des tableaux correctement formatés. Chaque feuille de votre classeur devient une section distincte dans le PDF.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, garantissant que vos données restent privées et sécurisées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier Excel",
        "description": "Faites glisser et déposez votre fichier .xlsx ou cliquez pour le sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Attendre le traitement",
        "description": "L'outil chargera la feuille de calcul et convertira toutes les feuilles."
      },
      {
        "step": 3,
        "title": "Télécharger le PDF",
        "description": "Cliquez sur Télécharger pour enregistrer votre document PDF converti."
      }
    ],
    "useCases": [
      {
        "title": "Partage de rapports",
        "description": "Convertissez des rapports Excel en PDF pour les distribuer aux parties prenantes.",
        "icon": "file-text"
      },
      {
        "title": "Archivage de données",
        "description": "Archivez les données de feuilles de calcul sous un format PDF stable.",
        "icon": "archive"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Créez des PDF prêts à l'impression à partir de feuilles de calcul Excel.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Les classeurs contenant plusieurs feuilles sont-ils pris en charge ?",
        "answer": "Oui, toutes les feuilles du classeur sont converties et incluses dans le PDF."
      },
      {
        "question": "Le format .xls est-il pris en charge ?",
        "answer": "Actuellement, seul le format .xlsx est pris en charge. Veuillez d'abord enregistrer vos fichiers .xls sous le format .xlsx."
      },
      {
        "question": "Les formules sont-elles conservées ?",
        "answer": "Le PDF affiche les valeurs calculées. Les formules ne sont pas exécutables au format PDF."
      }
    ]
  },
  "pptx-to-pdf": {
    "title": "PowerPoint en PDF",
    "metaDescription": "Convertissez des présentations PowerPoint (PPTX) en PDF. Préservez les diapositives et le contenu pour un partage facile.",
    "keywords": [
      "powerpoint en pdf",
      "pptx en pdf",
      "convertir pptx",
      "presentation en pdf",
      "diapositives en pdf"
    ],
    "description": "\n      <p>L'outil PowerPoint en PDF convertit les présentations Microsoft PowerPoint au format PDF, en préservant le contenu et le texte des diapositives pour faciliter le partage et la consultation.</p>\n      <p>Chaque diapositive devient une page dans le PDF, maintenant le flux de la présentation. Parfait pour partager vos présentations avec des personnes qui n'ont pas installé PowerPoint.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, garantissant que vos présentations restent privées et sécurisées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier PowerPoint",
        "description": "Faites glisser et déposez votre fichier .pptx ou cliquez pour le sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Attendre le traitement",
        "description": "L'outil va extraire le contenu des diapositives et créer le PDF."
      },
      {
        "step": 3,
        "title": "Télécharger le PDF",
        "description": "Cliquez sur Télécharger pour enregistrer votre document PDF converti."
      }
    ],
    "useCases": [
      {
        "title": "Partage de présentations",
        "description": "Partagez des présentations avec n'importe qui sans avoir besoin de PowerPoint.",
        "icon": "share-2"
      },
      {
        "title": "Création de prospectus",
        "description": "Créez des documents PDF à distribuer à partir de vos diapositives de présentation.",
        "icon": "file-text"
      },
      {
        "title": "Archivage de présentations",
        "description": "Archivez les présentations sous un format PDF stable.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Les animations sont-elles conservées ?",
        "answer": "Le PDF étant un format statique, les animations et les transitions ne sont pas conservées. Chaque diapositive devient une page statique."
      },
      {
        "question": "Le format .ppt est-il pris en charge ?",
        "answer": "Actuellement, seul le format .pptx est pris en charge. Veuillez d'abord convertir vos fichiers .ppt en .pptx."
      },
      {
        "question": "Les notes de l'orateur sont-elles incluses ?",
        "answer": "Actuellement, les notes de l'orateur ne sont pas incluses dans le document PDF généré."
      }
    ]
  },
  "xps-to-pdf": {
    "title": "XPS en PDF",
    "metaDescription": "Convertissez des documents XPS au format PDF. Conversion haute fidélité préservant la mise en page et les graphiques.",
    "keywords": [
      "xps en pdf",
      "convertir xps",
      "convertisseur xps",
      "microsoft xps en pdf",
      "oxps en pdf"
    ],
    "description": "\n      <p>L'outil XPS en PDF convertit les documents Microsoft XPS (XML Paper Specification) au format PDF tout en préservant la mise en page, le texte et les graphiques vectoriels originaux.</p>\n      <p>Le format XPS est un format de document fixe similaire au PDF. Cet outil offre une conversion haute fidélité en utilisant un moteur d'analyse natif de l'XPS, garantissant une reproduction fidèle de vos documents.</p>\n      <p>Toutes les conversions se font localement dans votre navigateur, ce qui garantit la confidentialité et la sécurité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier XPS",
        "description": "Faites glisser et déposez votre fichier .xps ou cliquez pour le sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Attendre le traitement",
        "description": "L'outil va analyser et convertir le document XPS."
      },
      {
        "step": 3,
        "title": "Télécharger le PDF",
        "description": "Cliquez sur Télécharger pour enregistrer votre document PDF converti."
      }
    ],
    "useCases": [
      {
        "title": "Conversion de format",
        "description": "Convertissez les documents XPS vers le format PDF, plus largement pris en charge.",
        "icon": "file"
      },
      {
        "title": "Partage de documents",
        "description": "Partagez des documents XPS avec des utilisateurs ne disposant pas de visionneuse XPS.",
        "icon": "share-2"
      },
      {
        "title": "Migration d'archives",
        "description": "Migrez les archives XPS vers le format PDF pour une meilleure compatibilité.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que le format XPS ?",
        "answer": "Le format XPS (XML Paper Specification) est le format de document fixe de Microsoft, similaire au PDF. Il est couramment utilisé pour l'impression sous Windows."
      },
      {
        "question": "La conversion est-elle sans perte ?",
        "answer": "Oui, la conversion conserve le texte, les graphismes et la mise en page avec une grande fidélité."
      },
      {
        "question": "Les fichiers XPS de plusieurs pages sont-ils pris en charge ?",
        "answer": "Oui, toutes les pages du document XPS sont converties dans le PDF final."
      }
    ]
  },
  "rtf-to-pdf": {
    "title": "RTF en PDF",
    "metaDescription": "Convertissez des fichiers RTF (Rich Text Format) en PDF. Préservez la mise en forme du texte dans vos documents.",
    "keywords": [
      "rtf en pdf",
      "convertir rtf",
      "texte enrichi en pdf",
      "convertisseur rtf"
    ],
    "description": "\n      <p>L'outil RTF en PDF convertit les fichiers au format Rich Text Format (RTF) en documents PDF. Le RTF est un format texte largement pris en charge qui comprend des éléments de mise en forme de base tels que les polices, les couleurs et les styles.</p>\n      <p>Téléversez vos fichiers RTF et obtenez un rendu PDF propre tout en préservant le contenu textuel et la mise en forme de base. Idéal pour convertir les documents existants dans un format PDF moderne.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, garantissant que vos documents restent privés et sécurisés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier RTF",
        "description": "Faites glisser et déposez votre fichier .rtf ou cliquez pour le sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Attendre le traitement",
        "description": "L'outil va analyser et convertir le contenu RTF."
      },
      {
        "step": 3,
        "title": "Télécharger le PDF",
        "description": "Cliquez sur Télécharger pour enregistrer votre document PDF converti."
      }
    ],
    "useCases": [
      {
        "title": "Conversion d'anciens documents",
        "description": "Convertissez vos anciens documents RTF dans un format PDF moderne.",
        "icon": "history"
      },
      {
        "title": "Partage de documents",
        "description": "Partagez des documents RTF dans un format PDF universellement consultable.",
        "icon": "share-2"
      },
      {
        "title": "Archivage de documents",
        "description": "Archivez vos fichiers RTF au format PDF stable pour un stockage à long terme.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quels types de mise en forme sont conservés ?",
        "answer": "La mise en forme de base du texte, y compris les polices, les paragraphes et les styles, est convertie. Les fonctionnalités complexes du RTF peuvent être simplifiées."
      },
      {
        "question": "Puis-je convertir plusieurs fichiers RTF à la fois ?",
        "answer": "Actuellement, la conversion se fait un fichier à la fois. Vous pouvez utiliser l'outil Fusionner PDF pour combiner plusieurs fichiers convertis."
      },
      {
        "question": "Les images intégrées sont-elles prises en charge ?",
        "answer": "Le contenu textuel est le sujet principal du traitement. Il est possible que les objets intégrés ne soient pas rendus."
      }
    ]
  },
  "epub-to-pdf": {
    "title": "EPUB en PDF",
    "metaDescription": "Convertissez des livres électroniques EPUB en PDF. Préservez le formatage, les images et la structure des chapitres.",
    "keywords": [
      "epub en pdf",
      "convertir epub",
      "livre electronique en pdf",
      "convertisseur epub"
    ],
    "description": "\n      <p>L'outil EPUB en PDF convertit les fichiers de livres électroniques en documents PDF de haute qualité. L'EPUB est le format de livre électronique le plus populaire, utilisé par la majorité des liseuses et bibliothèques numériques.</p>\n      <p>Cet outil préserve la mise en forme du texte, les images et la structure des chapitres de vos livres électroniques. Parfait pour l'impression, l'archivage ou le partage de livres électroniques dans un format universellement consultable.</p>\n      <p>Toutes les conversions ont lieu localement dans votre navigateur à l'aide d'une technologie de rendu avancée, garantissant la confidentialité de vos livres et la rapidité de traitement.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier EPUB",
        "description": "Faites glisser et déposez votre fichier .epub ou cliquez pour le sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Attendre la conversion",
        "description": "L'outil va restituer et convertir toutes les pages de votre livre électronique."
      },
      {
        "step": 3,
        "title": "Télécharger le PDF",
        "description": "Cliquez sur Télécharger pour enregistrer votre document PDF converti."
      }
    ],
    "useCases": [
      {
        "title": "Imprimer des livres électroniques",
        "description": "Convertissez vos livres électroniques en PDF pour une impression physique.",
        "icon": "printer"
      },
      {
        "title": "Archiver des livres",
        "description": "Stockez vos livres électroniques sous un format PDF stable à long terme.",
        "icon": "archive"
      },
      {
        "title": "Partager des documents",
        "description": "Partagez des livres électroniques avec n'importe qui, même sans liseuse.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Le formatage est-il préservé ?",
        "answer": "Oui ! Cet outil utilise un moteur de rendu natif EPUB, préservant la mise en forme du texte, les images et la mise en page avec une haute fidélité."
      },
      {
        "question": "Les fichiers EPUB protégés par DRM sont-ils pris en charge ?",
        "answer": "Non, les livres électroniques protégés par DRM ne peuvent pas être convertis. Seuls les fichiers EPUB sans DRM sont pris en charge."
      },
      {
        "question": "Comment la taille des pages est-elle déterminée ?",
        "answer": "Le contenu EPUB est rendu au format A4 standard pour une lisibilité optimale."
      }
    ]
  },
  "mobi-to-pdf": {
    "title": "MOBI en PDF",
    "metaDescription": "Convertissez des livres électroniques MOBI en PDF. Prise en charge du format Kindle avec un rendu de haute qualité.",
    "keywords": [
      "mobi en pdf",
      "convertir mobi",
      "kindle en pdf",
      "azw en pdf",
      "convertisseur mobi"
    ],
    "description": "\n      <p>L'outil MOBI en PDF convertit les fichiers de livres électroniques Amazon Kindle en documents PDF de haute qualité. Le format MOBI (y compris AZW et AZW3) est le format de livre électronique propriétaire d'Amazon utilisé sur les appareils Kindle.</p>\n      <p>Cet outil préserve la mise en forme du texte, les images et la structure de vos livres Kindle. Parfait pour imprimer, archiver ou lire sur des appareils qui ne prennent pas en charge le format MOBI.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur à l'aide d'une technologie de rendu avancée, garantissant que vos livres restent privés.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier MOBI",
        "description": "Faites glisser et déposez votre fichier .mobi, .azw ou .azw3, ou cliquez pour le sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Attendre la conversion",
        "description": "L'outil va restituer et convertir toutes les pages de votre livre électronique."
      },
      {
        "step": 3,
        "title": "Télécharger le PDF",
        "description": "Cliquez sur Télécharger pour enregistrer votre document PDF converti."
      }
    ],
    "useCases": [
      {
        "title": "Imprimer des livres Kindle",
        "description": "Convertissez vos livres électroniques Kindle en PDF pour une impression physique.",
        "icon": "printer"
      },
      {
        "title": "Archiver des livres",
        "description": "Stockez vos livres Kindle au format PDF universel.",
        "icon": "archive"
      },
      {
        "title": "Lecture multiplateforme",
        "description": "Lisez des livres Kindle sur des appareils qui ne prennent en charge que le PDF.",
        "icon": "tablet-smartphone"
      }
    ],
    "faq": [
      {
        "question": "Quels formats MOBI sont pris en charge ?",
        "answer": "Cet outil prend en charge les fichiers .mobi, .azw et .azw3 (versions sans DRM)."
      },
      {
        "question": "Les livres Kindle protégés par DRM sont-ils pris en charge ?",
        "answer": "Non, les livres électroniques protégés par DRM ne peuvent pas être convertis. Seuls les fichiers sans DRM sont pris en charge."
      },
      {
        "question": "Le formatage sera-t-il préservé ?",
        "answer": "Oui ! L'outil utilise le rendu natif MOBI pour préserver fidèlement le texte, les images et la mise en page."
      }
    ]
  },
  "pdf-to-svg": {
    "title": "PDF en SVG",
    "metaDescription": "Convertissez des pages PDF en graphiques vectoriels SVG. Parfaite mise à l'échelle à n'importe quelle taille avec exportation de pages individuelles.",
    "keywords": [
      "pdf en svg",
      "convertir pdf en svg",
      "graphiques vectoriels",
      "pdf évolutif",
      "convertisseur svg"
    ],
    "description": "\n      <p>L'outil PDF en SVG convertit chaque page de votre document PDF en un graphique vectoriel adaptable (SVG). Le SVG est un format vectoriel qui conserve une qualité parfaite quel que soit le niveau de zoom ou la taille d'impression.</p>\n      <p>Contrairement aux formats matriciels (JPG, PNG), les graphiques SVG ne sont jamais pixélisés lorsqu'ils sont mis à l'échelle. Cela les rend idéaux pour les logos, les schémas, les dessins techniques et tout contenu devant être affiché à différentes tailles.</p>\n      <p>Prévisualisez chaque page convertie et téléchargez-les individuellement ou sous la forme d'un fichier ZIP. Tout le traitement se fait localement dans votre navigateur, garantissant la confidentialité absolue de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Faites glisser et déposez votre fichier PDF ou cliquez pour parcourir et sélectionner."
      },
      {
        "step": 2,
        "title": "Configurer les options",
        "description": "Définissez la qualité de résolution et spécifiez éventuellement des plages de pages."
      },
      {
        "step": 3,
        "title": "Prévisualiser et convertir",
        "description": "Cliquez sur Convertir pour traiter. Prévisualisez chaque page en cliquant sur les miniatures."
      },
      {
        "step": 4,
        "title": "Télécharger",
        "description": "Téléchargez des fichiers SVG individuels ou toutes les pages sous forme d'archive ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Logos et graphiques",
        "description": "Extrayez des logos et des graphiques vectoriels de vos PDF pour les utiliser dans des logiciels de conception.",
        "icon": "pen-tool"
      },
      {
        "title": "Schémas techniques",
        "description": "Convertissez des dessins techniques et des schémas au format SVG évolutif.",
        "icon": "ruler"
      },
      {
        "title": "Développement Web",
        "description": "Créez des fichiers SVG prêts pour le Web à partir de contenus PDF pour des sites Web réactifs.",
        "icon": "globe"
      },
      {
        "title": "Imprimer à n'importe quelle taille",
        "description": "Générez des graphiques vectoriels qui s'impriment parfaitement à n'importe quelle échelle.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que le format SVG ?",
        "answer": "Le SVG (Scalable Vector Graphics) est un format d'image vectorielle qui peut être redimensionné à n'importe quelle taille sans perte de qualité. Il est largement utilisé pour les logos, les icônes et les graphiques Web."
      },
      {
        "question": "Le fichier SVG sera-t-il vraiment vectoriel ?",
        "answer": "Le fichier SVG contient un rendu haute résolution de la page PDF. Pour les PDF contenant du contenu vectoriel, vous obtenez un résultat net à n'importe quelle échelle."
      },
      {
        "question": "Puis-je prévisualiser avant de télécharger ?",
        "answer": "Oui ! Cliquez sur n'importe quelle miniature pour voir un aperçu en taille réelle du SVG. Vous pouvez télécharger des pages individuelles ou toutes en même temps."
      },
      {
        "question": "Quelle résolution dois-je choisir ?",
        "answer": "Une résolution plus élevée (216 ou 288 DPI) produit des SVG plus volumineux et plus détaillés. Utilisez des paramètres plus bas pour un traitement plus rapide et des fichiers plus petits."
      }
    ]
  },
  "pdf-to-excel": {
    "title": "PDF en Excel",
    "metaDescription": "Convertissez des PDF en feuilles de calcul Excel. Extrayez les tableaux au format XLSX.",
    "keywords": [
      "pdf en excel",
      "pdf en xlsx",
      "convertir tableaux pdf",
      "extraire tableaux"
    ],
    "description": "\n      <p>L'outil PDF en Excel convertit vos documents PDF en feuilles de calcul Microsoft Excel modifiables (XLSX). L'outil détecte automatiquement les tableaux de votre PDF et les extrait dans des feuilles séparées.</p>\n      <p>Cet outil est idéal pour analyser des rapports financiers, des factures ou toute donnée présentée sous forme de tableaux. Les tableaux de chaque page sont organisés en feuilles de calcul pour une manipulation facile des données.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, garantissant que vos données restent privées et sécurisées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Faites glisser et déposez votre fichier PDF ou cliquez pour le sélectionner."
      },
      {
        "step": 2,
        "title": "Traitement",
        "description": "L'outil va identifier et extraire automatiquement les tableaux."
      },
      {
        "step": 3,
        "title": "Télécharger le fichier Excel",
        "description": "Téléchargez votre fichier Excel contenant les tableaux extraits."
      }
    ],
    "useCases": [
      {
        "title": "Analyse financière",
        "description": "Convertissez des relevés bancaires ou des factures en Excel pour analyse.",
        "icon": "trending-up"
      },
      {
        "title": "Extraction de données",
        "description": "Récupérez des tableaux de données à partir d'articles de recherche ou de rapports.",
        "icon": "database"
      },
      {
        "title": "Gestion des stocks",
        "description": "Convertissez des listes d'inventaire au format PDF en feuilles de calcul.",
        "icon": "clipboard"
      }
    ],
    "faq": [
      {
        "question": "Comment les tableaux sont-ils traités ?",
        "answer": "Les tableaux détectés sur chaque page sont extraits vers des feuilles correspondantes dans le fichier Excel."
      },
      {
        "question": "Que se passe-t-il s'il n'y a pas de tableau ?",
        "answer": "Une feuille d'information sera créée pour indiquer qu'aucun tableau n'a été trouvé."
      },
      {
        "question": "Le formatage est-il préservé ?",
        "answer": "Les données sont préservées, mais la mise en forme visuelle complexe peut être simplifiée pour l'utilisation dans la feuille de calcul."
      }
    ]
  },
  "extract-images": {
    "title": "Extraire les images d'un PDF",
    "metaDescription": "Extrayez toutes les images intégrées des fichiers PDF. Téléchargez-les individuellement ou sous forme d'archive ZIP. Filtrez automatiquement les petites images.",
    "keywords": [
      "extraire images pdf",
      "extraction image pdf",
      "recuperer images pdf",
      "telecharger images pdf",
      "pdf en images"
    ],
    "description": "\n      <p>L'outil Extraire les images d'un PDF récupère toutes les images intégrées de vos documents PDF. Téléchargez des images de haute qualité individuellement ou sous forme d'une archive ZIP pratique.</p>\n      <p>L'outil filtre automatiquement les petites images telles que les icônes et les décorations sur la base de seuils de taille personnalisables. Traitez plusieurs PDF à la fois pour une extraction par lots efficace.</p>\n      <p>Toute l'extraction s'effectue dans votre navigateur, ce qui garantit la confidentialité et la sécurité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser vos PDF",
        "description": "Faites glisser et déposez un ou plusieurs fichiers PDF ou cliquez pour les sélectionner depuis votre appareil."
      },
      {
        "step": 2,
        "title": "Définir les options de filtrage",
        "description": "Ajustez la largeur, la hauteur et la taille minimale des fichiers pour filtrer les petites images indésirables."
      },
      {
        "step": 3,
        "title": "Extraire les images",
        "description": "Cliquez sur Extraire pour trouver toutes les images intégrées dans vos PDF."
      },
      {
        "step": 4,
        "title": "Télécharger",
        "description": "Téléchargez des images individuelles ou toutes les images sous forme d'archive ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Récupération de photos",
        "description": "Extrayez des photos et des images intégrées dans des documents PDF pour les réutiliser ou les archiver.",
        "icon": "image"
      },
      {
        "title": "Collecte de ressources",
        "description": "Rassemblez tous les graphiques et images des rapports, présentations ou brochures PDF.",
        "icon": "folder"
      },
      {
        "title": "Réutilisation de contenu",
        "description": "Extrayez des images des PDF pour les utiliser dans d'autres documents, sites Web ou présentations.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Quels formats d'image sont extraits ?",
        "answer": "Les images sont extraites dans leur format d'origine (JPEG, PNG, etc.) lorsque cela est possible, ou converties en PNG pour les données d'image brutes."
      },
      {
        "question": "Pourquoi certaines images sont-elles manquantes ?",
        "answer": "Les petites images inférieures au seuil de taille sont filtrées. Ajustez les paramètres de filtrage pour extraire des images plus petites."
      },
      {
        "question": "Puis-je effectuer l'extraction à partir de PDF scannés ?",
        "answer": "Les PDF scannés contiennent généralement le scan sous forme d'une seule grande image par page. Utilisez plutôt l'outil PDF en Image pour une conversion page par page."
      }
    ]
  },
  "find-and-redact": localizedRedactionContent('fr', 'find-and-redact', "Rechercher et masquer"),
  "pdf-to-markdown": {
    "title": "PDF en Markdown",
    "metaDescription": "Convertissez des PDF au format Markdown. Extrayez le texte et préservez la mise en forme comme les titres et les listes.",
    "keywords": [
      "pdf en markdown",
      "convertir pdf en md",
      "extraction texte pdf",
      "convertisseur markdown",
      "pdf en texte"
    ],
    "description": "\n      <p>L'outil PDF en Markdown convertit vos documents PDF en fichiers Markdown propres et bien structurés. L'outil extrait intelligemment le contenu textuel et tente de préserver la mise en forme d'origine (titres, listes et paragraphes).</p>\n      <p>Parfait pour convertir des documents PDF en formats éditables pour de la documentation, de la prise de notes ou des systèmes de gestion de contenu (CMS) prenant en charge le Markdown.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, ce qui garantit la confidentialité et la sécurité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Faites glisser et déposez votre fichier PDF ou cliquez pour le sélectionner."
      },
      {
        "step": 2,
        "title": "Configurer les options",
        "description": "Définissez la plage de pages, choisissez d'inclure les numéros de page et ajustez les paramètres de saut de ligne."
      },
      {
        "step": 3,
        "title": "Convertir et télécharger",
        "description": "Cliquez sur Convertir pour générer votre fichier Markdown et le télécharger."
      }
    ],
    "useCases": [
      {
        "title": "Documentation",
        "description": "Convertissez des manuels et des guides PDF en Markdown pour une documentation gérée par contrôle de version.",
        "icon": "file-text"
      },
      {
        "title": "Prise de notes",
        "description": "Extrayez le contenu d'articles et de livres PDF pour votre système de prise de notes.",
        "icon": "edit-3"
      },
      {
        "title": "Migration de contenu",
        "description": "Migrez du contenu PDF vers des plateformes CMS qui prennent en charge le Markdown.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "La mise en forme est-elle préservée ?",
        "answer": "L'outil tente de détecter les titres en fonction de la taille de la police ainsi que les listes à puces et numérotées. Les mises en page complexes peuvent nécessiter des ajustements manuels."
      },
      {
        "question": "Puis-je convertir des pages spécifiques ?",
        "answer": "Oui, vous pouvez spécifier une plage de pages comme « 1-3, 5, 7 » pour ne convertir que ces pages."
      },
      {
        "question": "Cela fonctionne-t-il avec les PDF scannés ?",
        "answer": "Les PDF scannés contiennent des images et non du texte. Utilisez d'abord notre outil OCR pour extraire le texte avant de le convertir en Markdown."
      }
    ]
  },
  "pdf-booklet": {
    "title": "Créateur de livrets PDF",
    "metaDescription": "Créez des mises en page de livrets à partir de fichiers PDF pour l'impression. Organisez les pages pour une reliure à cheval avec plusieurs options de grille.",
    "keywords": [
      "livret pdf",
      "createur de livret",
      "imprimer livret",
      "piqure a cheval",
      "imposition"
    ],
    "description": "\n      <p>Le Créateur de livrets PDF organise vos pages PDF en mises en page de livrets prêtes pour l'impression et le pliage. Parfait pour créer des brochures, des fanzines, des livrets et des publications reliées par piqûre à cheval.</p>\n      <p>Faites votre choix parmi différents modes de grille (1x2, 2x2, 2x4, 4x4), tailles de papier et options d'orientation. L'outil gère automatiquement l'imposition des pages pour respecter la séquence de pliage.</p>\n      <p>Toute l'opération se fait localement dans votre navigateur, ce qui garantit la confidentialité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Téléversez le document PDF que vous souhaitez convertir en livret."
      },
      {
        "step": 2,
        "title": "Choisir la mise en page",
        "description": "Sélectionnez le mode de grille, la taille de papier, l'orientation et les options de rotation."
      },
      {
        "step": 3,
        "title": "Créer et télécharger",
        "description": "Générez la mise en page du livret et téléchargez-la pour l'impression."
      }
    ],
    "useCases": [
      {
        "title": "Brochures",
        "description": "Créez des brochures prêtes à être pliées à partir de documents PDF standard.",
        "icon": "book-open"
      },
      {
        "title": "Fanzines",
        "description": "Produisez des fanzines auto-publiés avec une imposition de page correcte.",
        "icon": "book"
      },
      {
        "title": "Programmes d'événements",
        "description": "Créez des livrets de programmes professionnels pour vos événements.",
        "icon": "calendar"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que la reliure par piqûre à cheval ?",
        "answer": "La piqûre à cheval est une méthode de reliure dans laquelle les feuilles pliées sont imbriquées et agrafées le long de la ligne de pliure."
      },
      {
        "question": "Quel mode de grille dois-je utiliser ?",
        "answer": "Le mode 1x2 est le standard pour les livrets. Utilisez 2x2 ou supérieur pour une impression sur plusieurs poses afin d'économiser du papier."
      },
      {
        "question": "Puis-je prévisualiser la mise en page ?",
        "answer": "Oui, l'outil fournit un aperçu visuel de la disposition avant de générer le livret final."
      }
    ]
  },
  "rasterize-pdf": {
    "title": "Pixelliser un PDF",
    "metaDescription": "Convertissez des pages PDF en images de haute qualité. Exportez au format PNG, JPEG ou WebP avec des paramètres DPI personnalisés.",
    "keywords": [
      "pixelliser pdf",
      "pdf en image",
      "pdf en png",
      "pdf en jpeg",
      "convertir pages pdf"
    ],
    "description": "\n      <p>L'outil Pixelliser un PDF convertit vos pages PDF en images matricielles de haute qualité. Choisissez parmi les formats de sortie PNG, JPEG ou WebP en contrôlant totalement le DPI et les paramètres de qualité.</p>\n      <p>Idéal pour créer des miniatures, des graphiques pour les réseaux sociaux ou pour archiver du contenu PDF sous forme d'images. Prend en charge la sélection de plages de pages et le traitement par lots.</p>\n      <p>Toutes les étapes de traitement s'effectuent localement dans votre navigateur, ce qui garantit la confidentialité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Faites glisser et déposez votre fichier PDF ou cliquez pour le sélectionner."
      },
      {
        "step": 2,
        "title": "Configurer la sortie",
        "description": "Sélectionnez la résolution (DPI), le format de sortie (PNG/JPEG/WebP), la qualité et la plage de pages."
      },
      {
        "step": 3,
        "title": "Convertir et télécharger",
        "description": "Traitez les pages et téléchargez les images individuellement ou sous forme d'archive ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Réseaux sociaux",
        "description": "Convertissez les diapositives de vos PDF en images pour les publier sur les réseaux sociaux.",
        "icon": "share-2"
      },
      {
        "title": "Miniatures",
        "description": "Générez des miniatures d'aperçu pour vos documents PDF.",
        "icon": "image"
      },
      {
        "title": "Publication Web",
        "description": "Convertissez du contenu PDF dans des formats d'image adaptés au Web.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Quel DPI dois-je utiliser ?",
        "answer": "72 DPI pour l'affichage écran, 150 DPI pour un usage général, 300 DPI pour une qualité d'impression."
      },
      {
        "question": "Quel format est le plus adapté ?",
        "answer": "Le PNG pour la qualité et la transparence, le JPEG pour une taille de fichier réduite, le WebP pour une utilisation web moderne."
      },
      {
        "question": "Puis-je convertir uniquement certaines pages ?",
        "answer": "Oui, indiquez des plages de pages comme « 1-5, 8, 10-15 » pour convertir uniquement ces pages spécifiques."
      }
    ]
  },
  "markdown-to-pdf": {
    "title": "Markdown en PDF",
    "metaDescription": "Convertissez des fichiers Markdown en documents PDF magnifiquement formatés. Prise en charge du format GitHub Flavored Markdown et de la coloration syntaxique.",
    "keywords": [
      "markdown en pdf",
      "md en pdf",
      "convertir markdown",
      "gfm en pdf",
      "convertisseur markdown"
    ],
    "description": "\n      <p>L'outil Markdown en PDF convertit vos fichiers Markdown en documents PDF au style professionnel. Prise en charge des spécifications CommonMark et GitHub Flavored Markdown (GFM), y compris les tableaux, les listes de tâches et les blocs de code.</p>\n      <p>Faites votre choix parmi plusieurs thèmes (clair, sombre, GitHub) et personnalisez la taille de la page ainsi que les marges. Les blocs de code bénéficient d'une coloration syntaxique pour une meilleure lisibilité.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, ce qui garantit la confidentialité de votre contenu.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier Markdown",
        "description": "Téléversez votre fichier .md ou .markdown."
      },
      {
        "step": 2,
        "title": "Choisir le thème",
        "description": "Sélectionnez un thème visuel et configurez les paramètres de page."
      },
      {
        "step": 3,
        "title": "Convertir et télécharger",
        "description": "Générez le PDF mis en forme et téléchargez-le."
      }
    ],
    "useCases": [
      {
        "title": "Documentation",
        "description": "Convertissez les fichiers README et autres documentations en PDF faciles à partager.",
        "icon": "file-text"
      },
      {
        "title": "Exportation de notes",
        "description": "Exportez vos notes Markdown au format PDF pour les imprimer ou les partager.",
        "icon": "edit-3"
      },
      {
        "title": "Rapports",
        "description": "Créez des rapports à partir de documents Markdown avec une mise en page professionnelle.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "Le format GitHub Flavored Markdown est-il pris en charge ?",
        "answer": "Oui, les tableaux, les listes de tâches, les textes barrés et les autres fonctionnalités spécifiques de la GFM sont pris en charge."
      },
      {
        "question": "Puis-je personnaliser le style ?",
        "answer": "Vous pouvez choisir parmi les thèmes prédéfinis ou ajouter votre propre CSS personnalisé pour un contrôle total."
      },
      {
        "question": "Les blocs de code sont-ils colorés ?",
        "answer": "Oui, les blocs de code bénéficient d'une coloration syntaxique automatique pour la plupart des langages de programmation."
      }
    ]
  },
  "cbz-to-pdf": {
    "title": "CBZ en PDF",
    "metaDescription": "Convertissez des archives de bandes dessinées (CBZ) en PDF. Préservez l'ordre et la qualité des images pour les bandes dessinées numériques.",
    "keywords": [
      "cbz en pdf",
      "bande dessinee en pdf",
      "convertir cbz",
      "convertisseur de bande dessinee",
      "convertisseur cbz"
    ],
    "description": "\n      <p>L'outil CBZ en PDF convertit les fichiers d'archives de bandes dessinées (CBZ) en documents PDF. L'outil extrait toutes les images de l'archive CBZ et les compile dans un PDF tout en conservant l'ordre de lecture d'origine.</p>\n      <p>Choisissez parmi différentes options de taille de page, y compris les dimensions d'image d'origine ou les tailles standard des bandes dessinées. Parfait pour lire des bandes dessinées sur des appareils qui prennent en charge le format PDF mais pas le format CBZ.</p>\n      <p>Toute la conversion s'effectue localement dans votre navigateur, garantissant la confidentialité de vos bandes dessinées.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser le fichier CBZ",
        "description": "Téléversez votre fichier d'archive de bande dessinée .cbz."
      },
      {
        "step": 2,
        "title": "Sélectionner les options",
        "description": "Choisissez la taille de la page et les paramètres de qualité d'image."
      },
      {
        "step": 3,
        "title": "Convertir et télécharger",
        "description": "Convertissez en PDF et téléchargez votre bande dessinée."
      }
    ],
    "useCases": [
      {
        "title": "Compatibilité liseuse",
        "description": "Convertissez des fichiers CBZ en PDF pour les liseuses qui ne prennent en charge que le PDF.",
        "icon": "book"
      },
      {
        "title": "Archivage de bandes dessinées",
        "description": "Créez des archives PDF de votre collection de bandes dessinées numériques.",
        "icon": "archive"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Convertissez des bandes dessinées numériques en PDF pour l'impression.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Qu'est-ce que le format CBZ ?",
        "answer": "Le CBZ est une archive ZIP contenant les pages d'une bande dessinée sous forme de fichiers d'images, renommée avec l'extension .cbz."
      },
      {
        "question": "La qualité des images est-elle préservée ?",
        "answer": "Oui, les images sont intégrées avec leur qualité d'origine dans le PDF."
      },
      {
        "question": "Les dossiers imbriqués sont-ils pris en charge ?",
        "answer": "Oui, les images de tous les dossiers de l'archive sont extraites et triées automatiquement."
      }
    ]
  },
  "font-to-outline": {
    "title": "Vectoriser les polices",
    "metaDescription": "Supprimez les dépendances de polices des documents PDF en convertissant les pages en images de haute qualité. Assure la compatibilité sur tous les systèmes.",
    "keywords": [
      "vectoriser polices pdf",
      "polices en contours",
      "supprimer polices pdf",
      "compatibilite polices",
      "aplatir polices pdf",
      "suppression polices pdf"
    ],
    "description": "\n      <p>L'outil Vectoriser les polices supprime toutes les dépendances de polices de votre PDF en convertissant chaque page en un contenu pixellisé de haute qualité. Cela garantit que votre document s'affiche exactement de la même manière sur n'importe quel système, même si les polices d'origine ne sont pas installées.</p>\n      <p>L'outil restitue chaque page au DPI de votre choix (150-600), supprimant les polices intégrées tout en préservant le rendu visuel exact. En option, vous pouvez ajouter une couche de texte invisible pour conserver les fonctions de recherche.</p>\n      <p>C'est une étape essentielle pour la préparation à l'impression, la compatibilité multiplateforme et pour éviter les problèmes de licence de polices lors du partage de documents. Tout le traitement se fait localement dans votre navigateur.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Téléversez le PDF contenant les polices que vous souhaitez supprimer."
      },
      {
        "step": 2,
        "title": "Configurer la qualité",
        "description": "Choisissez la résolution (DPI) : 300 recommandé pour l'impression, 150 pour l'écran. Activez le texte recherchable si nécessaire."
      },
      {
        "step": 3,
        "title": "Convertir et télécharger",
        "description": "Traisez le fichier et téléchargez le PDF indépendant des polices."
      }
    ],
    "useCases": [
      {
        "title": "Préparation à l'impression",
        "description": "Éliminez les problèmes de polices chez les imprimeurs commerciaux en supprimant toutes les dépendances de polices.",
        "icon": "printer"
      },
      {
        "title": "Partage multiplateforme",
        "description": "Partagez des documents qui s'affichent à l'identique sur n'importe quel appareil, quelles que soient les polices installées.",
        "icon": "share-2"
      },
      {
        "title": "Licences de polices",
        "description": "Supprimez les polices intégrées pour distribuer vos documents sans vous soucier des licences.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Comment cela fonctionne-t-il ?",
        "answer": "L'outil affiche chaque page en haute résolution (selon le DPI choisi) et recrée le PDF à partir de ces images, ce qui supprime toutes les dépendances de polices tout en préservant fidèlement l'apparence visuelle."
      },
      {
        "question": "Puis-je toujours sélectionner du texte après la conversion ?",
        "answer": "Par défaut, non. Le texte est converti en image. Cependant, vous pouvez activer l'option « Préserver le texte recherchable » pour ajouter une couche de texte invisible permettant les fonctions de recherche et de copie."
      },
      {
        "question": "Quel DPI dois-je utiliser ?",
        "answer": "300 DPI est recommandé pour une qualité d'impression optimale. 150 DPI suffit largement pour une lecture à l'écran tout en générant des fichiers plus petits. 600 DPI offre la meilleure qualité possible mais crée de très gros fichiers."
      },
      {
        "question": "La taille du fichier va-t-elle augmenter ?",
        "answer": "La taille finale dépend du DPI et du contenu. 150 DPI produit généralement des fichiers plus petits, 300 DPI peut augmenter la taille, 600 DPI l'augmente considérablement. Une compression automatique est appliquée."
      },
      {
        "question": "Cette action est-elle réversible ?",
        "answer": "Non, les données de police d'origine sont définitivement supprimées. Conservez toujours une copie de sauvegarde du fichier original si vous devez rééditer le texte avec les polices d'origine."
      },
      {
        "question": "Qu'en est-il des graphiques vectoriels ?",
        "answer": "Les graphiques vectoriels (formes, lignes) du PDF d'origine seront convertis en mode matriciel en même temps que le texte. La qualité visuelle est préservée au niveau de DPI que vous avez sélectionné."
      }
    ]
  },
  "extract-tables": {
    "title": "Extraire les tableaux d'un PDF",
    "metaDescription": "Détectez et extrayez les tableaux des documents PDF. Exportez aux formats JSON, Markdown ou CSV.",
    "keywords": [
      "extraire tableaux",
      "extraction tableau pdf",
      "pdf en csv",
      "pdf en excel",
      "detection de tableaux"
    ],
    "description": "\n      <p>L'outil Extraire les tableaux d'un PDF détecte les données tabulaires de vos documents PDF et les exporte sous des formats structurés. Choisissez le format JSON pour l'intégration de données, le Markdown pour la documentation ou le CSV pour les tableurs.</p>\n      <p>L'outil s'appuie sur des algorithmes de détection intelligents pour identifier les structures de tableaux, même dans les documents complexes. Spécifiez des plages de pages et ajustez les paramètres de détection pour obtenir de meilleurs résultats.</p>\n      <p>Tout le traitement s'effectue en local dans votre navigateur, assurant la confidentialité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Téléversez le PDF contenant les tableaux que vous souhaitez extraire."
      },
      {
        "step": 2,
        "title": "Configurer la détection",
        "description": "Définissez la plage de pages et les seuils minimaux de colonnes et de lignes."
      },
      {
        "step": 3,
        "title": "Exporter et télécharger",
        "description": "Choisissez le format de sortie (JSON/Markdown/CSV) et téléchargez le résultat."
      }
    ],
    "useCases": [
      {
        "title": "Analyse de données",
        "description": "Extrayez les données des tableaux pour les analyser dans des tableurs ou des bases de données.",
        "icon": "bar-chart"
      },
      {
        "title": "Traitement de rapports",
        "description": "Récupérez les tableaux des rapports PDF pour un traitement ultérieur.",
        "icon": "file-text"
      },
      {
        "title": "Documentation",
        "description": "Convertissez les tableaux PDF en Markdown pour vos documentations techniques.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Peut-il détecter des tableaux complexes ?",
        "answer": "L'outil est particulièrement efficace avec les tableaux simples sous forme de grille. Les cellules fusionnées complexes peuvent nécessiter des ajustements manuels."
      },
      {
        "question": "Que faire si aucun tableau n'est trouvé ?",
        "answer": "Essayez d'ajuster le seuil minimal de colonnes/lignes ou vérifiez si le PDF comporte de véritables structures de tableaux."
      },
      {
        "question": "Puis-je extraire des données de pages spécifiques ?",
        "answer": "Oui, spécifiez une plage de pages pour limiter l'extraction à ces pages."
      }
    ]
  },
  "ocg-manager": {
    "title": "Gestionnaire de calques PDF (OCG)",
    "metaDescription": "Gérez les calques PDF (Optional Content Groups). Affichez, basculez, ajoutez, supprimez et renommez des calques dans vos documents PDF.",
    "keywords": [
      "calques pdf",
      "gestionnaire ocg",
      "groupes de contenu facultatifs",
      "visibilite calques pdf",
      "gerer calques pdf"
    ],
    "description": "\n      <p>Le Gestionnaire de calques PDF vous permet de visualiser et de gérer les groupes de contenu facultatif (Optional Content Groups - OCG) de vos documents PDF. Les calques OCG sont couramment utilisés dans les dessins techniques, les cartes et les documents complexes pour organiser le contenu sous forme de calques activables.</p>\n      <p>Visualisez tous les calques de votre PDF, activez ou désactivez leur visibilité, ajoutez-en de nouveaux, supprimez ceux qui sont superflus ou renommez-les. Cet outil est indispensable pour travailler avec des PDF multicouches tels que les plans d'architecture, les exports de CAO et les documents prêts pour l'impression.</p>\n      <p>Tout le traitement s'effectue localement dans votre navigateur, assurant la confidentialité et la sécurité de vos documents.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Téléverser votre PDF",
        "description": "Téléversez un fichier PDF contenant des calques (OCG) ou un fichier auquel vous souhaitez ajouter des calques."
      },
      {
        "step": 2,
        "title": "Visualiser les calques",
        "description": "L'outil répertorie automatiquement tous les calques détectés dans le document avec leur état de visibilité."
      },
      {
        "step": 3,
        "title": "Gérer les calques",
        "description": "Activez ou désactivez la visibilité des calques, renommez-les, ajoutez de nouveaux calques ou supprimez les calques indésirables."
      },
      {
        "step": 4,
        "title": "Enregistrer et télécharger",
        "description": "Téléchargez votre PDF modifié après application des modifications de calques."
      }
    ],
    "useCases": [
      {
        "title": "Dessins techniques",
        "description": "Gérez les calques dans vos exports de CAO pour afficher ou masquer les dimensions, les annotations ou les différentes vues.",
        "icon": "ruler"
      },
      {
        "title": "Édition de cartes",
        "description": "Activez ou désactivez différentes couches de cartes (topographie, routes, étiquettes) pour des impressions cartographiques personnalisées.",
        "icon": "map"
      },
      {
        "title": "Préparation à l'impression",
        "description": "Préparez des PDF multicouches pour l'impression en masquant ou affichant les calques adéquats selon les versions.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Que sont les calques PDF (OCG) ?",
        "answer": "Les groupes de contenu facultatif (OCG, pour Optional Content Groups) sont des calques au sein d'un PDF qui peuvent être affichés ou masqués à volonté. Ils sont fréquents dans les dessins CAO, les cartes et les documents complexes."
      },
      {
        "question": "Pourquoi mon PDF n'affiche-t-il aucun calque ?",
        "answer": "Tous les PDF ne comportent pas de calques. Les calques sont généralement ajoutés lors de la phase de création du document depuis un logiciel de CAO ou de dessin."
      },
      {
        "question": "Les modifications de calques affectent-elles le contenu d'origine ?",
        "answer": "La modification de la visibilité d'un calque n'affecte que son affichage ou son impression. Le contenu réel reste présent dans le fichier PDF."
      }
    ]
  },
  "pdf-reader": {
    "title": "Lecteur PDF",
    "metaDescription": "Lecteur PDF en ligne gratuit. Visualisez, parcourez, zoomez, pivotez et imprimez des documents PDF directement dans votre navigateur.",
    "keywords": [
      "lecteur pdf",
      "visionneuse pdf",
      "voir pdf en ligne",
      "lire pdf",
      "visionneuse pdf navigateur"
    ],
    "description": "\n      <p>Le Lecteur PDF est une visionneuse PDF complète qui vous permet de lire et de parcourir vos documents PDF directement dans votre navigateur. Aucune installation de logiciel n'est nécessaire : téléversez simplement votre fichier et commencez votre lecture.</p>\n      <p>Naviguez facilement entre les pages, zoomez sur les détails, pivotez l'affichage et basculez en mode plein écran pour une lecture confortable et sans distraction. Vous pouvez également imprimer vos documents ou les télécharger pour y accéder hors ligne.</p>\n      <p>Toute la consultation s'effectue localement dans votre navigateur. Vos documents ne sont jamais envoyés vers un serveur, garantissant une confidentialité totale.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Ouvrir votre PDF",
        "description": "Cliquez pour téléverser ou faites glisser et déposez un fichier PDF pour l'ouvrir dans le lecteur."
      },
      {
        "step": 2,
        "title": "Naviguer dans les pages",
        "description": "Utilisez les commandes de pagination pour aller à la page précédente ou suivante, ou pour atteindre directement un numéro de page spécifique."
      },
      {
        "step": 3,
        "title": "Ajuster la vue",
        "description": "Zoomez en avant ou en arrière, faites pivoter l'affichage ou passez en mode plein écran pour un confort de lecture optimal."
      },
      {
        "step": 4,
        "title": "Imprimer ou télécharger",
        "description": "Imprimez le document ou téléchargez-le pour pouvoir le consulter hors ligne."
      }
    ],
    "useCases": [
      {
        "title": "Révision de documents",
        "description": "Consultez rapidement des documents PDF sans installer le moindre logiciel.",
        "icon": "book-open"
      },
      {
        "title": "Lecture sur mobile",
        "description": "Lisez des documents PDF sur n'importe quel appareil équipé d'un navigateur Web.",
        "icon": "smartphone"
      },
      {
        "title": "Aperçu rapide",
        "description": "Affichez un aperçu de vos PDF avant de décider de les télécharger ou de les imprimer.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Mon document est-il en sécurité ?",
        "answer": "Oui, votre document est traité intégralement dans votre navigateur et n'est jamais téléversé sur le moindre serveur."
      },
      {
        "question": "Puis-je annoter ou modifier le PDF ?",
        "answer": "Cet outil est uniquement destiné à la visualisation. Utilisez nos outils « Signer PDF » ou « Annoter PDF » pour les modifications."
      },
      {
        "question": "Le lecteur fonctionne-t-il sur les appareils mobiles ?",
        "answer": "Oui, le Lecteur PDF fonctionne sur tous les appareils équipés d'un navigateur Web moderne."
      }
    ]
  }
,
"redact-pdf": localizedRedactionContent('fr', 'redact-pdf', "Caviarder un PDF")
};
