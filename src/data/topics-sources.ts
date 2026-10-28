// Source helpers for topic pages. Kept separate from topics.ts to avoid a
// circular import (topics.ts imports the group files, which call these helpers
// at module-load time).

export interface TopicSource {
  label: string;
  url: string;
}

const M = {
  registry: "https://museum.kemenbud.go.id/museum/profile/museum%2Bsejarah%2Bjakarta",
  culture: "https://dinaskebudayaan.jakarta.go.id/museum/museum-sejarah-jakarta/548/4",
  opening: "https://retribusi.jakarta.go.id/informasi-terkini/museum-sejarah-jakarta-objek-retribusi",
  older: "https://budaya.data.kemdikbud.go.id/lembaga/objek/MS000056",
  maps: "https://maps.app.goo.gl/XaSitKkU9B9Wd5Lf6",
  indoTravel: "https://www.indonesia.travel/nl/en/travel-ideas/heritage/explore-jakarta-kota-tua-today-s-old-batavia",
  kemlu: "https://kemlu.go.id/files/publikasi/additional_file/1762932706691437e21d3f7__EN__Jakarta___Special_Capital_Region_of_Jakarta___Travel_Guide_Book__2025_.pdf",
};

export function museumSources(lang: "id" | "en"): TopicSource[] {
  return [
    { label: lang === "id" ? "Registri museum nasional — jam & tarif rujukan" : "National museum registry — hours & reference tariffs", url: M.registry },
    { label: lang === "id" ? "Dinas Kebudayaan DKI — profil & koleksi" : "Jakarta Culture Office — profile & collections", url: M.culture },
    { label: lang === "id" ? "Google Maps — lokasi tertanda" : "Google Maps — dated location listing", url: M.maps },
  ];
}

export function areaSources(lang: "id" | "en"): TopicSource[] {
  return [
    { label: lang === "id" ? "Indonesia Travel — Kota Tua" : "Indonesia Travel — Kota Tua", url: M.indoTravel },
    { label: lang === "id" ? "Panduan Jakarta (Kemlu) — PDF 2025" : "Jakarta Guide (Kemlu) — 2025 PDF", url: M.kemlu },
  ];
}
