export interface Machine {
  id: string;
  name: string;
  category: 'Tornitura' | 'Fresatura/Centri di Lavoro' | 'Controllo Qualità' | 'Attrezzature Ausiliarie';
  specs: string[];
  description: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
}

export const COMPANY_INFO = {
  name: "FERRARIS MECCANICA S.a.s.",
  subtitle: "Lavorazioni Meccaniche di Alta Precisione",
  tagline: "...dal disegno alla fornitura completa nei tempi stabiliti",
  experienceYears: 25,
  specialization: "Oil & Gas, Prototipazione e Serie",
  address: "Via Gritti, 11",
  postalCode: "24020",
  city: "Pradalunga",
  province: "Bergamo",
  country: "Italia",
  email: "ferraris.pa@tiscali.it",
  phone: "327 2061798",
  owner: "Paolo Ferraris",
  mapsUrl: "https://maps.google.com/?q=Via+Gritti+11+Pradalunga+Bergamo"
};

export const SERVICES: Service[] = [
  {
    id: "tornitura-cnc",
    title: "Tornitura Meccanica",
    shortDesc: "Tornitura ad alta precisione per componenti meccanici fino a 650mm di diametro.",
    fullDesc: "Specializzati nella lavorazione al tornio di componenti complessi per il settore energetico e industriale. Garantiamo tolleranze ristrette e finiture superficiali di alto livello.",
    iconName: "Disc",
    features: [
      "Tornitura massima diametro 650 mm",
      "Lunghezza massima di lavoro 1900 mm",
      "Lavorazione leghe speciali (Inconel, Duplex, Inox)",
      "Pezzi singoli, prototipi e serie"
    ]
  },
  {
    id: "fresatura-centri-lavoro",
    title: "Centri di Lavoro Orizzontali Multi-Pallet",
    shortDesc: "Centri di lavoro ad elevata produttività con sistemi multi-pallet a 10 tavole.",
    fullDesc: "Grazie al nostro centro di lavoro MATSUURA a 10 tavole, siamo in grado di gestire produzione continua e flessibile di particolari ad alta complessità geometrica.",
    iconName: "Cpu",
    features: [
      "10 tavole 500x500 mm in continuo",
      "Corse assi X: 750mm | Y: 640mm | Z: 600mm",
      "Teste D'Andrea per barenature e scanalature di precisione",
      "Riduzione drastica dei tempi di fermo macchina"
    ]
  },
  {
    id: "oil-gas-specialization",
    title: "Specializzazione Oil & Gas",
    shortDesc: "Componenti per l'industria petrolifera e valvolame ad alte prestazioni.",
    fullDesc: "Esperienza pluridecennale nella realizzazione di corpi valvole, componenti per attuatori e flange destinate agli impianti Oil & Gas più demanding.",
    iconName: "Flame",
    features: [
      "Lavorazione valvole e attuatori",
      "Rispettate le normative stringenti di settore",
      "Tracciabilità materiali e lavorazioni",
      "Fornitura completa chiavi in mano"
    ]
  },
  {
    id: "controllo-qualita",
    title: "Controllo Qualità e Metrologia",
    shortDesc: "Collaudo e misurazioni di precisione mediante strumenti digitali avanzati.",
    fullDesc: "Ogni componente viene sottoposto a rigorosi controlli dimensionali. Disponiamo di sala metrologica attrezzata per garantire la conformità al disegno.",
    iconName: "CheckCircle2",
    features: [
      "Altimetro TESA Mod Hite 700 (Utile 700 mm)",
      "Micrometri per interni a 3 punte (0 - 150 mm)",
      "Asta digitale per interni (150 - 1500 mm)",
      "Serie micrometri per esterni (0 - 300 mm)"
    ]
  }
];

export const MACHINERY: Machine[] = [
  {
    id: "imts-tx-300",
    name: "Tornio IMTS TX 300",
    category: "Tornitura",
    specs: [
      "Tornitura Massima Diametro: 650 mm",
      "Lunghezza Massima Lavorabile: 1900 mm",
      "Alta rigidità di taglio per materiali resistenti"
    ],
    description: "Tornio ad elevate prestazioni per la lavorazione di componenti cilindrici di medie e grandi dimensioni con precisione centesimale."
  },
  {
    id: "matsuura-mc-700h",
    name: "Centro di Lavoro Orizzontale MATSUURA MC 700H - 50-PC10",
    category: "Fresatura/Centri di Lavoro",
    specs: [
      "Numero Tavole: 10 Pallet integrati",
      "Dimensione Tavola: 500 x 500 mm",
      "Corsa Assi: X 750 mm | Y 640 mm | Z 600 mm",
      "Equipaggiato con Teste D'Andrea a tornire"
    ],
    description: "Isola produttiva flessibile a 10 pallet, ideale per la produzione non presidiata e per lotti con elevato mix produttivo."
  },
  {
    id: "strumentazione-misura",
    name: "Parco Strumenti di Misura e Metrologia",
    category: "Controllo Qualità",
    specs: [
      "Altimetro TESA Mod Hite 700 (Utile 700 mm)",
      "Micrometri per interni a 3 punte (0 - 150 mm)",
      "Asta digitale per interni (150 - 1500 mm)",
      "Serie micrometri per esterni (0 - 300 mm)"
    ],
    description: "Strumentazione certificata per la verifica dimensionale e geometrica di tutte le tolleranze di progetto."
  },
  {
    id: "attrezzature-ausiliarie",
    name: "Attrezzature di Saldate e Movimentazione",
    category: "Attrezzature Ausiliarie",
    specs: [
      "Saldatrice a filo continuo pulsata",
      "Carrello Elevatore Mod. portata 18 Q.li (1.8 Ton)",
      "Gru di sollevamento e movimentazione pezzi pesanti"
    ],
    description: "Supporto logistico e di carpenteria complementare per la gestione sicura del grezzo e del finito."
  }
];

export const GALLERY_IMAGES = [
  { id: 1, src: "gallery/20171027_150628.jpg", title: "Lavorazione Meccanica di Precisione" },
  { id: 2, src: "gallery/20171214_221623.jpg", title: "Componente Industriale Tornito" },
  { id: 3, src: "gallery/20171214_221626.jpg", title: "Particolare Meccanico Oil & Gas" },
  { id: 4, src: "gallery/20171214_224948.jpg", title: "Flangia di Alta Precisione" },
  { id: 5, src: "gallery/20171214_224950.jpg", title: "Lavorazione su Centro di Lavoro" },
  { id: 6, src: "gallery/20171214_232632.jpg", title: "Particolare Meccanico Complesso" },
  { id: 7, src: "gallery/20171214_232636.jpg", title: "Finitura Superficiale di Precisione" },
  { id: 8, src: "gallery/20171219_081502.jpg", title: "Componente Valvola Meccanica" },
  { id: 9, src: "gallery/20171219_081509.jpg", title: "Corpo Valvola Oil & Gas" },
  { id: 10, src: "gallery/20171219_081512.jpg", title: "Lavorazione Speciale Inox" },
  { id: 11, src: "gallery/20180105_064311.jpg", title: "Particolare Tornito ad Alta Tolleranza" },
  { id: 12, src: "gallery/20180105_064313.jpg", title: "Dettaglio Foratura e Barenatura" },
  { id: 13, src: "gallery/20180105_064323.jpg", title: "Gruppo Meccanico Assemblato" },
  { id: 14, src: "gallery/20180105_064331.jpg", title: "Superfici Rettificate e Collaudate" },
  { id: 15, src: "gallery/20180105_064333.jpg", title: "Componente di Grande Diametro" },
  { id: 16, src: "gallery/20180105_064506.jpg", title: "Barenatura di Precisione" },
  { id: 17, src: "gallery/20180105_064509.jpg", title: "Controllo Dimensionale al Banco" },
  { id: 18, src: "gallery/20180105_064512.jpg", title: "Particolare per Attuatore Idraulico" },
  { id: 19, src: "gallery/20180105_064516.jpg", title: "Fornitura Completa su Disegno" },
  { id: 20, src: "gallery/20180105_064521.jpg", title: "Lotto di Produzione Programma" }
];
