export interface Project {
  id: number;
  title: string;
  location: string;
  category: "rezidential" | "industrial";
  description: string;
  fullDescription: string;
  stats: {
    power: string;
    panels: string;
    inverter: string;
    battery: string;
    orientation: string;
    slope: string;
    mounting: string;
    monitoring: string;
  };
  gallery: string[];
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistem Fotovoltaic Rezidențial 10.2 kWp",
    location: "Constanța, jud. Constanța",
    category: "rezidential",
    description: "Instalare completă sistem on-grid cu panouri monocristaline și invertor hibrid.",
    fullDescription: "Acest proiect rezidențial a fost conceput pentru a asigura o independență energetică de peste 85% pentru o familie de 4 persoane. Sistemul include 24 de panouri LONGi de ultimă generație și un invertor hibrid Huawei care permite adăugarea ulterioară de baterii fără modificări hardware. Instalarea a fost finalizată în 48 de ore, inclusiv punerea în funcțiune și configurarea monitorizării online.",
    stats: {
      power: "10.2 kWp",
      panels: "24x LONGi 425W",
      inverter: "Huawei 10kW Hybrid",
      battery: "LUNA 5kW",
      orientation: "Sud (180°)",
      slope: "35°",
      mounting: "Acoperiș țiglă metalică",
      monitoring: "Huawei FusionSolar",
    },
    gallery: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    imageUrl: "/placeholder.jpg",
  },
  {
    id: 2,
    title: "Sistem Fotovoltaic Industrial 50 kWp",
    location: "Valu lui Traian, jud. Constanța",
    category: "industrial",
    description: "Soluție energetică pentru unitate de producție, optimizată pentru autoconsum.",
    fullDescription: "Pentru acest client industrial, prioritatea a fost reducerea facturilor de energie în timpul orelor de vârf de producție. Am implementat o soluție cu 112 panouri fotovoltaice și un invertor Fronius de înaltă eficiență. Sistemul este echipat cu senzori de monitorizare a consumului în timp real, permițând clientului să își ajusteze fluxul de lucru pentru a maximiza autoconsumul solar.",
    stats: {
      power: "50 kWp",
      panels: "112x LONGi 450W",
      inverter: "Fronius Symo 50kW",
      battery: "Fără baterie",
      orientation: "Est-Vest",
      slope: "15°",
      mounting: "Structură balastată pe terasă",
      monitoring: "Fronius Solar.web",
    },
    gallery: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    imageUrl: "/placeholder.jpg",
  },
  {
    id: 3,
    title: "Sistem Fotovoltaic Rezidențial 12.75 kWp",
    location: "Cumpăna, jud. Constanța",
    category: "rezidential",
    description: "Sistem hibrid cu stocare în baterii pentru independență energetică maximă.",
    fullDescription: "Un sistem premium dotat cu stocare în baterii LUNA de 10kW, oferind backup complet în cazul penelor de curent. Proiectul a presupus o planificare riguroasă a tabloului electric pentru a separa circuitele critice. Clientul beneficiază acum de energie verde chiar și pe timpul nopții, reducând dependența de rețea la minimum.",
    stats: {
      power: "12.75 kWp",
      panels: "30x LONGi 425W",
      inverter: "Huawei 10kW Hybrid",
      battery: "LUNA 10kW",
      orientation: "Sud",
      slope: "40°",
      mounting: "Acoperiș țiglă ceramică",
      monitoring: "Huawei FusionSolar",
    },
    gallery: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    imageUrl: "/placeholder.jpg",
  },
  {
    id: 4,
    title: "Sistem Fotovoltaic Industrial 150 kWp",
    location: "Năvodari, jud. Constanța",
    category: "industrial",
    description: "Proiect de anvergură pentru hală industrială, cu monitorizare avansată.",
    fullDescription: "Cel mai mare proiect din acest trimestru, instalat pe o hală de producție alimentară. Sistemul de 150 kWp a fost segmentat pe două invertoare Huawei de 100kW, oferind redundanță și eficiență maximă. Am integrat o stație de compensare a energiei reactive pentru a optimiza întregul profil energetic al locației.",
    stats: {
      power: "150 kWp",
      panels: "330x LONGi 455W",
      inverter: "Huawei 100kW",
      battery: "Fără baterie",
      orientation: "Sud",
      slope: "10° (Panouri sandwich)",
      mounting: "Structură K2 Systems",
      monitoring: "SmartLogger 3000A",
    },
    gallery: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    imageUrl: "/placeholder.jpg",
  },
];
