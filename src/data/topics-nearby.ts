import type { Topic } from "./topics";
import { areaSources } from "./topics-sources";

export const nearbyTopics: Topic[] = [
  {
    key: "museum-wayang",
    group: "nearby",
    related: ["museum-keramik", "museum-bank-indonesia", "museum-bank-mandiri", "arsitektur"],
    id: {
      slug: "museum-wayang",
      title: "Museum Wayang di Kota Tua",
      description: "Panduan Museum Wayang: tema koleksi wayang, jarak dari Taman Fatahillah, dan mengapa jam serta tiket harus dikonfirmasi ke pengelola.",
      h1: "Museum<br /><em>Wayang</em>",
      lead: "Museum Wayang adalah museum negara di sekitar Kota Tua yang memamerkan koleksi wayang. Halaman ini memberi konteks tanpa menjanjikan jam pasti.",
      sections: [
        {
          heading: "Tema koleksi",
          body: [
            "Museum ini fokus pada wayang—boneka bayangan dan teater tradisional Indonesia. Koleksinya mencakup berbagai jenis wayang dari berbagai daerah.",
          ],
        },
        {
          heading: "Lokasi & jarak",
          body: [
            "Museum Wayang berada tidak jauh dari Taman Fatahillah, dalam kawasan Kota Tua. Jarak berjalan kaki dari lapangan umumnya singkat (beberapa menit).",
          ],
          note: "Jam buka dan tiket museum negara dapat berbeda dari Museum Sejarah Jakarta. Konfirmasikan ke pengelola sebelum mendatangi.",
        },
        {
          heading: "Cocok digabung?",
          body: [
            "Sangat cocok digabung dengan Museum Sejarah Jakarta dalam satu kunjungan setengah hari, karena jaraknya dekat.",
          ],
        },
      ],
      faq: [
        { q: "Apa isi Museum Wayang?", a: "Koleksi wayang dan teater tradisional Indonesia dari berbagai daerah." },
        { q: "Berapa jauh dari lapangan?", a: "Dalam kawasan Kota Tua, berjalan kaki beberapa menit dari Taman Fatahillah." },
        { q: "Apakah jam sama dengan Museum Sejarah?", a: "Belum tentu. Konfirmasikan jam dan tiket ke pengelola museum negara." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "museum-wayang",
      title: "Museum Wayang in Kota Tua",
      description: "Museum Wayang guide: puppet collection theme, distance from Taman Fatahillah, and why hours and tickets must be confirmed with the operator.",
      h1: "Museum<br /><em>Wayang</em>",
      lead: "Museum Wayang is a state museum around Kota Tua exhibiting puppetry. This page gives context without promising exact hours.",
      sections: [
        {
          heading: "Collection theme",
          body: [
            "The museum focuses on wayang—Indonesian shadow puppets and traditional theatre. Its collection spans various wayang types from across the archipelago.",
          ],
        },
        {
          heading: "Location & distance",
          body: [
            "Museum Wayang is not far from Taman Fatahillah, within Kota Tua. Walking distance from the square is generally short (a few minutes).",
          ],
          note: "Hours and tickets for state museums can differ from Jakarta History Museum. Confirm with the operator before going.",
        },
        {
          heading: "Good to combine?",
          body: [
            "It pairs very well with Jakarta History Museum in one half-day visit because of the short distance.",
          ],
        },
      ],
      faq: [
        { q: "What is inside Museum Wayang?", a: "A collection of wayang and Indonesian traditional theatre from various regions." },
        { q: "How far from the square?", a: "Within Kota Tua, a few minutes’ walk from Taman Fatahillah." },
        { q: "Are hours the same as the History Museum?", a: "Not necessarily. Confirm hours and tickets with the state museum operator." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "museum-keramik",
    group: "nearby",
    related: ["museum-wayang", "museum-bank-indonesia", "arsitektur", "wisata-setengah-hari"],
    id: {
      slug: "museum-keramik",
      title: "Museum Seni Rupa & Keramik",
      description: "Panduan Museum Seni Rupa dan Keramik: tema seni & keramik, lokasi di Kota Tua, dan pengingat untuk mengonfirmasi status buka sebelum mendatangi.",
      h1: "Museum Seni Rupa<br /><em>& Keramik</em>",
      lead: "Museum ini memamerkan seni rupa dan keramik di kawasan Kota Tua. Karena status operasional museum dapat berubah, halaman ini menekankan konfirmasi.",
      sections: [
        {
          heading: "Tema",
          body: [
            "Museum Seni Rupa dan Keramik (dulu Museum Keramik) menampilkan keramik dan karya seni rupa. Ini melengkapi museum lain di Kota Tua.",
          ],
        },
        {
          heading: "Lokasi",
          body: [
            "Berada di sekitar Kota Tua, dekat Taman Fatahillah. Jarak berjalan kaki dari lapangan umumnya singkat.",
          ],
          note: "Seperti museum negara lain, konfirmasikan status buka, jam, dan tiket kepada pengelola sebelum mendatangi—panduan ini tidak menjamin keadaan hari ini.",
        },
        {
          heading: "Cocok digabung?",
          body: [
            "Dapat digabung dengan Museum Sejarah Jakarta dan Museum Wayang dalam kunjungan setengah atau sehari penuh.",
          ],
        },
      ],
      faq: [
        { q: "Apa isi museum ini?", a: "Keramik dan karya seni rupa; dulu dikenal sebagai Museum Keramik." },
        { q: "Di mana lokasinya?", a: "Di sekitar Kota Tua, dekat Taman Fatahillah, berjalan kaki singkat." },
        { q: "Apakah pasti buka?", a: "Konfirmasikan status buka, jam, dan tiket kepada pengelola sebelum mendatangi." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "museum-of-ceramics",
      title: "Museum of Fine Arts & Ceramics",
      description: "Museum of Fine Arts & Ceramics guide: art and ceramics theme, Kota Tua location, and a reminder to confirm open status before going.",
      h1: "Museum of Fine Arts<br /><em>& Ceramics</em>",
      lead: "This museum exhibits fine art and ceramics in Kota Tua. Because a museum’s operating status can change, this page emphasises confirmation.",
      sections: [
        {
          heading: "Theme",
          body: [
            "The Museum of Fine Arts and Ceramics (formerly the Ceramics Museum) displays ceramics and fine-art works. It complements other Kota Tua museums.",
          ],
        },
        {
          heading: "Location",
          body: [
            "It is around Kota Tua, near Taman Fatahillah. Walking distance from the square is generally short.",
          ],
          note: "Like other state museums, confirm open status, hours, and tickets with the operator before going—this guide does not guarantee today’s condition.",
        },
        {
          heading: "Good to combine?",
          body: [
            "It can be combined with Jakarta History Museum and Museum Wayang on a half- or full-day visit.",
          ],
        },
      ],
      faq: [
        { q: "What is inside this museum?", a: "Ceramics and fine-art works; formerly known as the Ceramics Museum." },
        { q: "Where is it located?", a: "Around Kota Tua, near Taman Fatahillah, a short walk." },
        { q: "Is it definitely open?", a: "Confirm open status, hours, and tickets with the operator before going." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "museum-bank-indonesia",
    group: "nearby",
    related: ["museum-bank-mandiri", "museum-wayang", "arsitektur", "wisata-setengah-hari"],
    id: {
      slug: "museum-bank-indonesia",
      title: "Museum Bank Indonesia di Kota Tua",
      description: "Panduan Museum Bank Indonesia: bekas gedung bank sentral, tema koleksi, lokasi dekat Kota Tua, dan konfirmasi jam serta tiket.",
      h1: "Museum<br /><em>Bank Indonesia</em>",
      lead: "Museum Bank Indonesia menempati bekas gedung bank sentral di Kota Tua, sering dikunjungi gratis. Halaman ini memberi konteks tanpa menjanjikan status pasti.",
      sections: [
        {
          heading: "Gedung & tema",
          body: [
            "Museum ini menggunakan bekas gedung De Javasche Bank (bank sentral era kolonial), dengan koleksi sejarah ekonomi, perbankan, dan uang.",
          ],
        },
        {
          heading: "Lokasi",
          body: [
            "Berada di sekitar Kota Tua, tidak jauh dari Taman Fatahillah. Jarak berjalan kaki dari lapangan umumnya singkat.",
          ],
          note: "Museum ini sering tidak dikenakan tiket, tetapi jam dan ketersediaan dapat berubah. Konfirmasikan status buka dan aturan kepada pengelola.",
        },
        {
          heading: "Cocok digabung?",
          body: [
            "Dapat digabung dengan Museum Sejarah Jakarta, Museum Bank Mandiri, dan Museum Wayang dalam kunjungan setengah atau sehari penuh.",
          ],
        },
      ],
      faq: [
        { q: "Apa isi Museum Bank Indonesia?", a: "Sejarah ekonomi, perbankan, dan uang di bekas gedung bank sentral kolonial." },
        { q: "Apakah berbayar?", a: "Sering tidak dikenakan tiket, tetapi konfirmasikan jam dan aturan kepada pengelola." },
        { q: "Di mana lokasinya?", a: "Di sekitar Kota Tua, berjalan kaki singkat dari Taman Fatahillah." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "museum-bank-indonesia",
      title: "Museum Bank Indonesia in Kota Tua",
      description: "Museum Bank Indonesia guide: former central-bank building, collection theme, Kota Tua location, and confirmation of hours and tickets.",
      h1: "Museum<br /><em>Bank Indonesia</em>",
      lead: "Museum Bank Indonesia occupies a former central-bank building in Kota Tua, often visited free. This page gives context without promising a fixed status.",
      sections: [
        {
          heading: "Building & theme",
          body: [
            "The museum uses the former De Javasche Bank building (the colonial-era central bank), with collections on economic, banking, and currency history.",
          ],
        },
        {
          heading: "Location",
          body: [
            "It is around Kota Tua, not far from Taman Fatahillah. Walking distance from the square is generally short.",
          ],
          note: "This museum is often free of charge, but hours and availability can change. Confirm open status and rules with the operator.",
        },
        {
          heading: "Good to combine?",
          body: [
            "It can be combined with Jakarta History Museum, Museum Bank Mandiri, and Museum Wayang on a half- or full-day visit.",
          ],
        },
      ],
      faq: [
        { q: "What is inside Museum Bank Indonesia?", a: "Economic, banking, and currency history in a former colonial central-bank building." },
        { q: "Is it paid?", a: "Often free of charge, but confirm hours and rules with the operator." },
        { q: "Where is it located?", a: "Around Kota Tua, a short walk from Taman Fatahillah." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "museum-bank-mandiri",
    group: "nearby",
    related: ["museum-bank-indonesia", "museum-wayang", "arsitektur", "wisata-setengah-hari"],
    id: {
      slug: "museum-bank-mandiri",
      title: "Museum Bank Mandiri di Kota Tua",
      description: "Panduan Museum Bank Mandiri: bekas gedung bank, koleksi perbankan, lokasi dekat stasiun Kota, dan konfirmasi jam serta tiket.",
      h1: "Museum<br /><em>Bank Mandiri</em>",
      lead: "Museum Bank Mandiri menempati bekas gedung bank di Kota Tua, dengan koleksi perbankan bersejarah. Halaman ini memberi konteks tanpa menjanjikan status pasti.",
      sections: [
        {
          heading: "Gedung & tema",
          body: [
            "Museum ini menggunakan bekas gedung Nederlandsche Handel-Maatschappij / bank, dengan koleksi peralatan perbankan, brankas, dan ruang bersejarah.",
          ],
        },
        {
          heading: "Lokasi",
          body: [
            "Berada di sekitar Kota Tua, dekat Stasiun Jakarta Kota. Jarak dari Taman Fatahillah umumnya beberapa menit berjalan kaki.",
          ],
          note: "Jam dan ketersediaan dapat berubah. Konfirmasikan status buka dan aturan kepada pengelola sebelum mendatangi.",
        },
        {
          heading: "Cocok digabung?",
          body: [
            "Sangat cocok digabung dengan Museum Bank Indonesia dan Museum Sejarah Jakarta dalam satu rute setengah hari.",
          ],
        },
      ],
      faq: [
        { q: "Apa isi Museum Bank Mandiri?", a: "Koleksi perbankan bersejarah: peralatan, brankas, dan ruang bank lama." },
        { q: "Di mana lokasinya?", a: "Di sekitar Kota Tua, dekat Stasiun Jakarta Kota, beberapa menit dari Taman Fatahillah." },
        { q: "Apakah pasti buka?", a: "Konfirmasikan status buka, jam, dan aturan kepada pengelola sebelum mendatangi." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "museum-bank-mandiri",
      title: "Museum Bank Mandiri in Kota Tua",
      description: "Museum Bank Mandiri guide: former bank building, banking collection, location near Jakarta Kota Station, and confirmation of hours and tickets.",
      h1: "Museum<br /><em>Bank Mandiri</em>",
      lead: "Museum Bank Mandiri occupies a former bank building in Kota Tua, with historic banking collections. This page gives context without promising a fixed status.",
      sections: [
        {
          heading: "Building & theme",
          body: [
            "The museum uses a former Nederlandsche Handel-Maatschappij / bank building, with collections of banking equipment, vaults, and historic rooms.",
          ],
        },
        {
          heading: "Location",
          body: [
            "It is around Kota Tua, near Jakarta Kota Station. Distance from Taman Fatahillah is generally a few minutes on foot.",
          ],
          note: "Hours and availability can change. Confirm open status and rules with the operator before going.",
        },
        {
          heading: "Good to combine?",
          body: [
            "It pairs very well with Museum Bank Indonesia and Jakarta History Museum on one half-day route.",
          ],
        },
      ],
      faq: [
        { q: "What is inside Museum Bank Mandiri?", a: "Historic banking collections: equipment, vaults, and old bank rooms." },
        { q: "Where is it located?", a: "Around Kota Tua, near Jakarta Kota Station, a few minutes from Taman Fatahillah." },
        { q: "Is it definitely open?", a: "Confirm open status, hours, and rules with the operator before going." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "kali-besar",
    group: "nearby",
    related: ["arsitektur", "taman-fatahillah", "sejarah-kota", "rute-kota-tua"],
    id: {
      slug: "kali-besar",
      title: "Wisata Kali Besar di Kota Tua",
      description: "Panduan Kali Besar: kanal bersejarah, bangunan tepi kanal, rute jalan kaki, dan koneksi ke Taman Fatahillah.",
      h1: "Wisata<br /><em>Kali Besar</em>",
      lead: "Kali Besar adalah kanal bersejarah di Kota Tua yang dikelilingi bangunan kolonial. Halaman ini memandu jalan kaki di tepiannya.",
      sections: [
        {
          heading: "Kanal & sejarah",
          body: [
            "Kali Besar (Sungai Besar) adalah kanal yang dulunya menjadi jalur air penting Batavia, dengan bangunan kolonial di kedua tepiannya.",
          ],
        },
        {
          heading: "Rute jalan kaki",
          body: [
            "Menyusuri tepi Kali Besar dari arah Stasiun Jakarta Kota ke Taman Fatahillah adalah jalur pejalan kaki yang nyaman dan fotogenik.",
          ],
          note: "Gunakan trotoar dan penyeberangan yang aman. Jarak berjalan kaki dari ujung kanal ke lapangan umumnya beberapa ratus meter hingga 1 km tergantung titik awal.",
        },
        {
          heading: "Koneksi ke lapangan",
          body: [
            "Kali Besar mengalir ke arah kawasan lapangan. Gabungkan dengan Taman Fatahillah dan Museum Sejarah Jakarta dalam satu rute pagi.",
          ],
        },
      ],
      faq: [
        { q: "Apa itu Kali Besar?", a: "Kanal bersejarah Batavia yang dikelilingi bangunan kolonial." },
        { q: "Bagaimana rute jalannya?", a: "Menyusuri tepi kanal dari Stasiun Jakarta Kota ke Taman Fatahillah." },
        { q: "Berapa jauh berjalan?", a: "Beberapa ratus meter hingga 1 km tergantung titik awal; gunakan trotoar aman." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "kali-besar",
      title: "Kali Besar Canal Walk in Kota Tua",
      description: "Kali Besar guide: historic canal, canal-side buildings, walking route, and its connection to Taman Fatahillah.",
      h1: "Kali Besar<br /><em>Canal Walk</em>",
      lead: "Kali Besar is a historic canal in Kota Tua lined with colonial buildings. This page guides a walk along its banks.",
      sections: [
        {
          heading: "Canal & history",
          body: [
            "Kali Besar (Great River) is a canal that was once a key waterway of Batavia, flanked by colonial buildings on both banks.",
          ],
        },
        {
          heading: "Walking route",
          body: [
            "Following the Kali Besar bank from Jakarta Kota Station toward Taman Fatahillah is a comfortable, photogenic pedestrian route.",
          ],
          note: "Use safe pavements and crossings. The walk from the canal end to the square is generally a few hundred metres to 1 km depending on the start point.",
        },
        {
          heading: "Connection to the square",
          body: [
            "Kali Besar leads toward the square area. Combine it with Taman Fatahillah and Jakarta History Museum on a morning route.",
          ],
        },
      ],
      faq: [
        { q: "What is Kali Besar?", a: "A historic Batavia canal lined with colonial buildings." },
        { q: "What is the walking route?", a: "Follow the canal bank from Jakarta Kota Station to Taman Fatahillah." },
        { q: "How far is the walk?", a: "A few hundred metres to 1 km depending on the start point; use safe pavements." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "jembatan-kota-intan",
    group: "nearby",
    related: ["kali-besar", "sejarah-kota", "arsitektur", "rute-kota-tua"],
    id: {
      slug: "jembatan-kota-intan",
      title: "Jembatan Kota Intan di Kota Tua",
      description: "Panduan Jembatan Kota Intan: sejarah jembatan, akses dari Taman Fatahillah, dan kondisi jalan kaki saat ini.",
      h1: "Jembatan<br /><em>Kota Intan</em>",
      lead: "Jembatan Kota Intan adalah jembatan bersejarah di dekat Kali Besar, tersisa dari masa Batavia. Halaman ini memberi konteks dan akses.",
      sections: [
        {
          heading: "Sejarah",
          body: [
            "Jembatan Kota Intan (dulu Jembatan Grooten Boom / Wooden Bridge) adalah salah satu jembatan tertua di Jakarta, menghubungkan sisi Kali Besar.",
          ],
        },
        {
          heading: "Akses",
          body: [
            "Jembatan berada tidak jauh dari Taman Fatahillah dan Kali Besar. Dapat dicapai dengan berjalan kaki dari lapangan sebagai bagian rute keliling kanal.",
          ],
          note: "Kondisi pejalan kaki dan akses ke jembatan bervariasi; gunakan trotoar aman dan konfirmasikan rute saat kedatangan.",
        },
        {
          heading: "Cocok digabung?",
          body: [
            "Gabungkan dengan wisata Kali Besar dan Taman Fatahillah dalam satu rute jalan kaki Kota Tua.",
          ],
        },
      ],
      faq: [
        { q: "Apa itu Jembatan Kota Intan?", a: "Jembatan bersejarah dekat Kali Besar, tersisa dari masa Batavia." },
        { q: "Bagaimana ke sana?", a: "Berjalan kaki dari Taman Fatahillah atau menyusuri Kali Besar." },
        { q: "Apakah mudah dijangkau?", a: "Relatif dekat, tetapi gunakan trotoar aman dan konfirmasikan rute." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "kota-intan-bridge",
      title: "Kota Intan Bridge in Kota Tua",
      description: "Kota Intan Bridge guide: bridge history, access from Taman Fatahillah, and current pedestrian conditions.",
      h1: "Kota Intan<br /><em>Bridge</em>",
      lead: "Kota Intan Bridge is a historic bridge near Kali Besar, remaining from the Batavia period. This page gives context and access.",
      sections: [
        {
          heading: "History",
          body: [
            "Kota Intan Bridge (formerly Grooten Boom / Wooden Bridge) is among Jakarta’s oldest bridges, spanning a side of Kali Besar.",
          ],
        },
        {
          heading: "Access",
          body: [
            "The bridge is not far from Taman Fatahillah and Kali Besar. It can be reached on foot from the square as part of a canal-loop route.",
          ],
          note: "Pedestrian conditions and bridge access vary; use safe pavements and confirm the route on arrival.",
        },
        {
          heading: "Good to combine?",
          body: [
            "Combine it with a Kali Besar walk and Taman Fatahillah on one Kota Tua walking route.",
          ],
        },
      ],
      faq: [
        { q: "What is Kota Intan Bridge?", a: "A historic bridge near Kali Besar, remaining from the Batavia period." },
        { q: "How do I get there?", a: "On foot from Taman Fatahillah or along Kali Besar." },
        { q: "Is it easy to reach?", a: "Relatively close, but use safe pavements and confirm the route." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "sunda-kelapa",
    group: "nearby",
    related: ["stasiun-jakarta-kota", "kali-besar", "sejarah-kota", "wisata-sehari"],
    id: {
      slug: "sunda-kelapa",
      title: "Pelabuhan Sunda Kelapa dari Kota Tua",
      description: "Perpanjangan ke Pelabuhan Sunda Kelapa: jarak dari Kota Tua, transportasi, dan pengingat bahwa ini pelabuhan kerja dengan akses terbatas.",
      h1: "Pelabuhan<br /><em>Sunda Kelapa</em>",
      lead: "Sunda Kelapa adalah pelabuhan historis di utara Kota Tua yang masih beroperasi. Halaman ini menjelaskan jarak dan cara menjangkaunya dengan jujur.",
      sections: [
        {
          heading: "Jarak & akses",
          body: [
            "Sunda Kelapa berada di utara Kota Tua, beberapa kilometer dari Taman Fatahillah. Capai dengan berjalan kaki lebih lama, naik angkutan umum, atau ride-hailing.",
          ],
          note: "Jangan anggap Sunda Kelapa hanya bersebelahan dengan lapangan. Siapkan waktu perjalanan terpisah dari kunjungan museum.",
        },
        {
          heading: "Pelabuhan kerja",
          body: [
            "Ini adalah pelabuhan yang masih beroperasi dengan kapal tradisional (pinisi). Akses ke area dermaga mungkin terbatas; jangan asumsikan wisatawan bebas masuk ke semua titik.",
          ],
        },
        {
          heading: "Menyambungkan rencana",
          body: [
            "Sunda Kelapa cocok sebagai lanjutan sehari penuh setelah Kota Tua, bukan jeda singkat dari museum. Rencanakan transportasi ke sana sebelumnya.",
          ],
        },
      ],
      faq: [
        { q: "Apakah Sunda Kelapa di sebelah Kota Tua?", a: "Tidak. Berjarak beberapa kilometer di utara Kota Tua." },
        { q: "Bagaimana ke sana?", a: "Naik angkutan umum, ride-hailing, atau berjalan lebih lama; pelabuhan di ujung utara." },
        { q: "Apakah bebas masuk?", a: "Ini pelabuhan kerja; akses dermaga mungkin terbatas. Jangan asumsikan akses penuh." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "sunda-kelapa",
      title: "Sunda Kelapa Port from Kota Tua",
      description: "Sunda Kelapa port extension: distance from Kota Tua, transport, and a reminder that this is a working port with limited access.",
      h1: "Sunda Kelapa<br /><em>Port</em>",
      lead: "Sunda Kelapa is a historic port north of Kota Tua that still operates. This page explains its distance and how to reach it honestly.",
      sections: [
        {
          heading: "Distance & access",
          body: [
            "Sunda Kelapa is north of Kota Tua, several kilometres from Taman Fatahillah. Reach it by a longer walk, public transport, or ride-hailing.",
          ],
          note: "Do not treat Sunda Kelapa as adjacent to the square. Budget separate travel time from your museum visit.",
        },
        {
          heading: "Working port",
          body: [
            "This is an operating port with traditional (pinisi) boats. Access to the dock area may be limited; do not assume tourists can freely enter all points.",
          ],
        },
        {
          heading: "Connecting the plan",
          body: [
            "Sunda Kelapa suits a full-day extension after Kota Tua, not a quick museum break. Plan transport there in advance.",
          ],
        },
      ],
      faq: [
        { q: "Is Sunda Kelapa next to Kota Tua?", a: "No. It is several kilometres north of Kota Tua." },
        { q: "How do I get there?", a: "Public transport, ride-hailing, or a longer walk; the port is at the northern end." },
        { q: "Is entry free?", a: "This is a working port; dock access may be limited. Do not assume full access." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },
];
