import type { Topic } from "./topics";
import { areaSources, museumSources } from "./topics-sources";

export const routeTopics: Topic[] = [
  {
    key: "rute-kota-tua",
    group: "routes",
    related: ["stasiun-jakarta-kota", "taman-fatahillah", "kali-besar", "rute-2-jam"],
    id: {
      slug: "rute-kota-tua",
      title: "Rute Jalan Kaki Kota Tua dari Stasiun",
      description: "Rute jalan kaki Kota Tua mulai dari Stasiun Jakarta Kota: kali Besar, Taman Fatahillah, museum, dan tips urutan agar tidak bolak-balik.",
      h1: "Rute Jalan Kaki<br /><em>Kota Tua</em>",
      lead: "Rute ini menghubungkan Stasiun Jakarta Kota dengan inti Kota Tua secara berurutan, sehingga Anda tidak perlu bolak-balik.",
      sections: [
        {
          heading: "Urutan rute",
          body: [
            "Mulai di Stasiun Jakarta Kota → menyusuri Kali Besar ke arah barat/daya → tiba di Taman Fatahillah → masuk Museum Sejarah Jakarta → selesaikan dengan keliling lapangan atau kafe di sekitarnya.",
          ],
          note: "Jarak dari stasiun ke lapangan umumnya 600–900 m berjalan kaki. Waktu tempuh santai 10–15 menit, lebih lama jika berhenti foto.",
        },
        {
          heading: "Tips urutan",
          body: [
            "Sisipkan museum di tengah, bukan di awal, agar antrean tiket tidak menghambat langkah pertama. Gunakan kafe sebagai jeda sebelum kembali ke stasiun.",
          ],
        },
        {
          heading: "Bila Senin",
          body: [
            "Museum tutup Senin. Putar rute menjadi: stasiun → Kali Besar → lapangan → kafe, tanpa masuk museum.",
          ],
        },
      ],
      faq: [
        { q: "Dari stasiun ke lapangan berapa jauh?", a: "Sekitar 600–900 m berjalan kaki; 10–15 menit santai." },
        { q: "Apakah rute ini mencakup museum?", a: "Ya, sebagai satu titik di tengah rute. Bila Senin, lewati museum." },
        { q: "Apakah perlu bolak-balik?", a: "Tidak. Urutan stasiun → Kali Besar → lapangan → museum dirancang tanpa putar balik." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "kota-tua-walking-route",
      title: "Kota Tua Walking Route from the Station",
      description: "Kota Tua walking route from Jakarta Kota Station: Kali Besar, Taman Fatahillah, the museum, and ordering tips to avoid backtracking.",
      h1: "Kota Tua<br /><em>Walking Route</em>",
      lead: "This route links Jakarta Kota Station with the core of Kota Tua in sequence, so you do not need to backtrack.",
      sections: [
        {
          heading: "Route order",
          body: [
            "Start at Jakarta Kota Station → follow Kali Besar west/south-west → arrive at Taman Fatahillah → enter Jakarta History Museum → finish with a square loop or a café nearby.",
          ],
          note: "The station-to-square distance is generally 600–900 m on foot. A relaxed walk is 10–15 minutes, longer with photo stops.",
        },
        {
          heading: "Ordering tips",
          body: [
            "Place the museum in the middle, not the start, so ticket queues do not block your first step. Use a café as a break before returning to the station.",
          ],
        },
        {
          heading: "On Mondays",
          body: [
            "The museum is closed on Monday. Turn the route into: station → Kali Besar → square → café, skipping the museum.",
          ],
        },
      ],
      faq: [
        { q: "How far is the station to the square?", a: "About 600–900 m on foot; 10–15 minutes relaxed." },
        { q: "Does this route include the museum?", a: "Yes, as one point in the middle. On Monday, skip the museum." },
        { q: "Do I need to backtrack?", a: "No. The station → Kali Besar → square → museum order avoids turnarounds." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "rute-2-jam",
    group: "routes",
    related: ["durasi", "taman-fatahillah", "jam-buka", "tiket"],
    id: {
      slug: "rute-2-jam",
      title: "Rute Dua Jam: Museum & Fatahillah",
      description: "Rencana dua jam untuk Museum Sejarah Jakarta dan Taman Fatahillah: urutan, estimasi waktu, dan cara menyesuaikan bila antrean panjang.",
      h1: "Rute<br /><em>Dua Jam</em>",
      lead: "Rute padat namun realistis untuk museum dan lapangan bila Anda hanya punya dua jam.",
      sections: [
        {
          heading: "Bagi waktu",
          body: [
            "0–15 menit: tiba dan beli tiket di lapangan. 15–75 menit: keliling museum. 75–120 menit: foto lapangan, penyewaan sepeda ontel singkat, atau kopi di tepi lapangan.",
          ],
        },
        {
          heading: "Tips antrean",
          body: [
            "Datang lebih awal untuk menghindari antrean tiket. Bila antrean panjang, mulailah dari lapangan lalu masuk museum menjelang tutup ruangan.",
          ],
          note: "Waktu nyata bergantung antrean dan ruangan terbuka. Senin museum tutup—alihkan 2 jam ke lapangan dan Kali Besar.",
        },
        {
          heading: "Sesuaikan",
          body: [
            "Jika cuaca panas, sisakan waktu di dalam museum yang lebih teduh. Jika hujan, gunakan kafe di tepi lapangan sebagai jeda.",
          ],
        },
      ],
      faq: [
        { q: "Apakah 2 jam cukup untuk museum?", a: "Cukup untuk kunjungan inti 60–90 menit, sisanya untuk lapangan." },
        { q: "Bagaimana bila antrean panjang?", a: "Mulai dari lapangan lalu masuk museum menjelang tutup ruangan." },
        { q: "Bagaimana bila Senin?", a: "Museum tutup; alihkan ke lapangan dan Kali Besar." },
      ],
      sources: museumSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "two-hour-route",
      title: "Two-Hour Route: Museum & Fatahillah",
      description: "A two-hour plan for Jakarta History Museum and Taman Fatahillah: order, time estimates, and how to adjust for long queues.",
      h1: "Two-Hour<br /><em>Route</em>",
      lead: "A tight but realistic route for the museum and square when you only have two hours.",
      sections: [
        {
          heading: "Split the time",
          body: [
            "0–15 min: arrive and buy a ticket at the square. 15–75 min: walk the museum. 75–120 min: square photos, a short vintage-bike rental, or coffee at the square edge.",
          ],
        },
        {
          heading: "Queue tips",
          body: [
            "Arrive early to avoid ticket queues. If the queue is long, start at the square and enter the museum toward closing of rooms.",
          ],
          note: "Real time depends on queues and open rooms. The museum is closed on Monday—shift the 2 hours to the square and Kali Besar.",
        },
        {
          heading: "Adjust",
          body: [
            "If it is hot, keep more time in the cooler museum. If it rains, use a café at the square edge as a break.",
          ],
        },
      ],
      faq: [
        { q: "Is 2 hours enough for the museum?", a: "Enough for a 60–90 minute core visit, the rest for the square." },
        { q: "What if the queue is long?", a: "Start at the square then enter the museum toward room closing." },
        { q: "What if it is Monday?", a: "The museum is closed; shift to the square and Kali Besar." },
      ],
      sources: museumSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "wisata-setengah-hari",
    group: "routes",
    related: ["museum-wayang", "museum-bank-indonesia", "kali-besar", "rute-2-jam"],
    id: {
      slug: "wisata-setengah-hari",
      title: "Wisata Setengah Hari Kota Tua & Museum",
      description: "Rencana setengah hari: Museum Sejarah Jakarta, Taman Fatahillah, satu atau dua museum lain, dan keliling Kali Besar dengan estimasi waktu.",
      h1: "Wisata<br /><em>Setengah Hari</em>",
      lead: "Rute setengah hari memberi gambaran historis Kota Tua secara utuh tanpa terburu-buru.",
      sections: [
        {
          heading: "Urutan",
          body: [
            "Mulai pagi di Taman Fatahillah → Museum Sejarah Jakarta (60–90 menit) → Museum Wayang atau Museum Bank Indonesia (30–45 menit) → keliling Kali Besar → kopi di tepi lapangan.",
          ],
        },
        {
          heading: "Estimasi waktu",
          body: [
            "Total umumnya 3–4 jam. Sisipkan waktu antrean tiket dan istirahat. Senin: lewati museum dan perpanjang keliling lapangan serta Kali Besar.",
          ],
          note: "Jam dan tiket museum negara berbeda; konfirmasikan sebelum mendatangi. Jangan asumsikan semua ruangan terbuka.",
        },
        {
          heading: "Cocok untuk siapa",
          body: [
            "Cocok untuk pengunjung yang ingin memahami sejarah kota, bukan sekadar foto cepat. Pas untuk keluarga atau solo traveler santai.",
          ],
        },
      ],
      faq: [
        { q: "Berapa lama wisata setengah hari?", a: "Umumnya 3–4 jam termasuk istirahat dan antrean." },
        { q: "Museum mana yang dikunjungi?", a: "Museum Sejarah Jakarta plus satu atau dua museum negara terdekat seperti Wayang atau Bank Indonesia." },
        { q: "Bagaimana bila Senin?", a: "Lewati museum; perpanjang lapangan dan Kali Besar." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "half-day-itinerary",
      title: "Half-Day Kota Tua & Museum Itinerary",
      description: "Half-day plan: Jakarta History Museum, Taman Fatahillah, one or two other museums, and a Kali Besar walk with time estimates.",
      h1: "Half-Day<br /><em>Itinerary</em>",
      lead: "A half-day route gives a full picture of Kota Tua’s history without rushing.",
      sections: [
        {
          heading: "Order",
          body: [
            "Start in the morning at Taman Fatahillah → Jakarta History Museum (60–90 min) → Museum Wayang or Museum Bank Indonesia (30–45 min) → Kali Besar walk → coffee at the square edge.",
          ],
        },
        {
          heading: "Time estimate",
          body: [
            "Total is generally 3–4 hours. Allow for ticket queues and breaks. On Monday: skip museums and extend the square and Kali Besar walk.",
          ],
          note: "State-museum hours and tickets differ; confirm before going. Do not assume all rooms are open.",
        },
        {
          heading: "Who it suits",
          body: [
            "Good for visitors who want to understand the city’s history, not just a quick photo. Fits families or relaxed solo travellers.",
          ],
        },
      ],
      faq: [
        { q: "How long is the half-day tour?", a: "Generally 3–4 hours including breaks and queues." },
        { q: "Which museums are visited?", a: "Jakarta History Museum plus one or two nearby state museums like Wayang or Bank Indonesia." },
        { q: "What if it is Monday?", a: "Skip museums; extend the square and Kali Besar walk." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "wisata-sehari",
    group: "routes",
    related: ["glodok", "sunda-kelapa", "wisata-setengah-hari", "stasiun-jakarta-kota"],
    id: {
      slug: "wisata-sehari",
      title: "Wisata Sehari Penuh Kota Tua & Glodok",
      description: "Rencana sehari penuh: Kota Tua pagi–siang, Glodok makan malam, dan alternatif bila museum tutup atau hujan.",
      h1: "Wisata<br /><em>Sehari Penuh</em>",
      lead: "Rute sehari penuh memadukan Kota Tua dengan Glodok, termasuk rencana cadangan bila cuaca atau hari libur berubah.",
      sections: [
        {
          heading: "Urutan",
          body: [
            "Pagi–siang: rute setengah hari Kota Tua (lapangan, museum, Kali Besar). Sore: istirahat kafe. Malam: makan di Glodok (beberapa kilometer di selatan).",
          ],
          note: "Glodok tidak di pinggir lapangan; siapkan transportasi terpisah ke sana. Jangan anggap selalu tersedia layanan tertentu.",
        },
        {
          heading: "Cadangan hujan / Senin",
          body: [
            "Bila hujan lebat atau museum tutup (Senin), perpanjang keliling lapangan, kafe, dan toko di Kota Tua; tunda Glodok ke malam.",
          ],
        },
        {
          heading: "Tips transportasi",
          body: [
            "Gunakan kereta atau TransJakarta ke Kota Tua, lalu ride-hailing atau angkutan umum ke Glodok untuk makan malam.",
          ],
        },
      ],
      faq: [
        { q: "Apakah sehari penuh mencakup Glodok?", a: "Ya, sebagai lanjutan malam beberapa kilometer di selatan Kota Tua." },
        { q: "Bagaimana bila hujan atau Senin?", a: "Lewati museum; perpanjang lapangan, kafe, dan toko, lalu Glodok malam." },
        { q: "Transportasi antar titik?", a: "Kereta/TransJakarta ke Kota Tua, ride-hailing atau angkutan umum ke Glodok." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "full-day-itinerary",
      title: "Full-Day Kota Tua & Glodok Itinerary",
      description: "Full-day plan: Kota Tua morning–afternoon, Glodok dinner, and alternatives if the museum is closed or it rains.",
      h1: "Full-Day<br /><em>Itinerary</em>",
      lead: "A full-day route combines Kota Tua with Glodok, including a backup if the weather or a holiday changes plans.",
      sections: [
        {
          heading: "Order",
          body: [
            "Morning–afternoon: the Kota Tua half-day route (square, museum, Kali Besar). Late afternoon: café break. Evening: dinner in Glodok (several kilometres south).",
          ],
          note: "Glodok is not at the square’s edge; budget separate transport there. Do not assume a specific service is always available.",
        },
        {
          heading: "Rain / Monday backup",
          body: [
            "If it rains heavily or the museum is closed (Monday), extend the square, café, and shop loop in Kota Tua; delay Glodok to the evening.",
          ],
        },
        {
          heading: "Transport tips",
          body: [
            "Use the train or TransJakarta to Kota Tua, then ride-hailing or public transport to Glodok for dinner.",
          ],
        },
      ],
      faq: [
        { q: "Does the full day include Glodok?", a: "Yes, as a southern evening extension several kilometres from Kota Tua." },
        { q: "What if it rains or is Monday?", a: "Skip the museum; extend the square, café, and shops, then Glodok in the evening." },
        { q: "Transport between points?", a: "Train/TransJakarta to Kota Tua, ride-hailing or public transport to Glodok." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },
];
