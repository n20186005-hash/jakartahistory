import type { Topic } from "./topics";
import { museumSources, areaSources } from "./topics-sources";

export const placeTopics: Topic[] = [
  {
    key: "gedung",
    group: "history",
    related: ["koleksi", "sejarah-kota", "siapa-fatahillah", "nama"],
    id: {
      slug: "gedung",
      title: "Gedung Museum & Balai Kota Batavia",
      description: "Sejarah gedung Museum Sejarah Jakarta sebagai bekas Balai Kota Batavia: arsitektur, fungsi kolonial, dan perubahan menjadi museum pada 1974.",
      h1: "Gedung &<br /><em>Balai Kota Batavia</em>",
      lead: "Gedung yang kini menjadi museum dulunya adalah pusat pemerintahan Batavia. Halaman ini merangkum sejarah bangunan tanpa mengarang detail arsip.",
      sections: [
        {
          heading: "Dari balai kota menjadi museum",
          body: [
            "Gedung ini dibangun pada masa kolonial dan lama berfungsi sebagai balai kota (stadhuis) Batavia. Pemerintah Provinsi DKI Jakarta mencatat museum dibuka pada 30 Maret 1974.",
          ],
          note: "Tahun pembukaan museum (1974) tercantum dalam sumber pemerintah daerah. Detail arsitektur spesifik tidak dikarang; rujuk sumber resmi untuk penelitian mendalam.",
        },
        {
          heading: "Ciri arsitektur",
          body: [
            "Bangunan bergaya kolonial dengan struktur batu, lorong, dan halaman yang kini berhadapan dengan Taman Fatahillah. Ciri ini menjadi alasan kawasan Kota Tua dilindungi sebagai warisan.",
          ],
        },
        {
          heading: "Kunjungan hari ini",
          body: [
            "Pengunjung melihat bangunan dari luar di lapangan, dan masuk gedung dengan tiket untuk melihat koleksi. Beberapa ruangan mungkin tidak terbuka setiap hari; tanyakan kepada staf.",
          ],
        },
      ],
      faq: [
        { q: "Kapan gedung ini menjadi museum?", a: "Pemerintah DKI mencatat museum dibuka pada 30 Maret 1974." },
        { q: "Apakah gedung bekas balai kota?", a: "Ya, gedung lama berfungsi sebagai balai kota Batavia sebelum menjadi museum sejarah kota." },
        { q: "Boleh masuk semua ruangan?", a: "Tidak dijamin. Ruang yang terbuka bergantung pengaturan pengelola; tanyakan kepada staf saat kunjungan." },
      ],
      sources: museumSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "building-history",
      title: "The Building & Old Batavia City Hall",
      description: "History of the Jakarta History Museum building as the former Batavia city hall: architecture, colonial function, and its 1974 conversion to a museum.",
      h1: "The Building &<br /><em>Old Batavia City Hall</em>",
      lead: "The building that is now the museum was once the seat of Batavia’s government. This page summarises the building’s history without inventing archival detail.",
      sections: [
        {
          heading: "From city hall to museum",
          body: [
            "The building was constructed in the colonial period and long served as the city hall (stadhuis) of Batavia. Jakarta’s provincial government records the museum opening on 30 March 1974.",
          ],
          note: "The museum opening year (1974) is recorded in a regional-government source. Specific architectural details are not invented; consult official sources for deep research.",
        },
        {
          heading: "Architectural character",
          body: [
            "The building is colonial in style, with stone structure, corridors, and a courtyard now facing Taman Fatahillah. This character is why Kota Tua is protected as heritage.",
          ],
        },
        {
          heading: "Visiting today",
          body: [
            "Visitors see the building from the square outside, and enter the building with a ticket to view the collections. Some rooms may not be open daily; ask staff.",
          ],
        },
      ],
      faq: [
        { q: "When did the building become a museum?", a: "The DKI government records the museum opening on 30 March 1974." },
        { q: "Was the building a city hall?", a: "Yes, it long served as the city hall of Batavia before becoming the city history museum." },
        { q: "Can I enter every room?", a: "Not guaranteed. Open rooms depend on the operator’s arrangement; ask staff during your visit." },
      ],
      sources: museumSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "koleksi",
    group: "history",
    related: ["gedung", "sejarah-kota", "nama", "jam-buka"],
    id: {
      slug: "koleksi",
      title: "Koleksi & Sorotan Museum Sejarah Jakarta",
      description: "Ikhtisar koleksi Museum Sejarah Jakarta menurut Dinas Kebudayaan DKI: perkembangan kota, arkeologi, furnitur antik, keramik, prasasti, dan mengapa isi galeri bisa berubah.",
      h1: "Koleksi &<br /><em>Sorotan</em>",
      lead: "Museum menyajikan perkembangan Jakarta melalui benda-benda sejarah. Halaman ini merangkum tema koleksi yang disebut sumber resmi, bukan daftar pameran hari ini.",
      sections: [
        {
          heading: "Tema koleksi",
          body: [
            "Dinas Kebudayaan DKI Jakarta menyebut koleksi meliputi perkembangan kota, arkeologi, perabot antik, keramik, dan prasasti. Ini memberi gambaran umum tentang isi museum.",
          ],
          note: "Daftar benda yang sedang dipamerkan dapat berubah. Tanyakan ruang dan koleksi yang sedang dapat diakses kepada staf; panduan ini tidak menjamin susunan galeri.",
        },
        {
          heading: "Cara menikmati",
          body: [
            "Datang lebih awal untuk menghindari antrean, baca penjelasan di setiap ruangan, dan siapkan waktu karena sebagian ruangan berlantai tua.",
          ],
        },
        {
          heading: "Foto",
          body: [
            "Aturan foto bervariasi; tanyakan izin kamera, tripod, dan perekaman kepada staf sebelum mengambil gambar di dalam gedung.",
          ],
        },
      ],
      faq: [
        { q: "Apa saja koleksi museum?", a: "Dinas Kebudayaan menyebut perkembangan kota, arkeologi, perabot antik, keramik, dan prasasti." },
        { q: "Apakah semua koleksi dipamerkan?", a: "Tidak dijamin. Tanyakan ruang yang sedang terbuka kepada staf saat kunjungan." },
        { q: "Boleh foto di dalam?", a: "Aturan foto bervariasi; tanyakan izin kepada staf sebelum memotret di dalam gedung." },
      ],
      sources: museumSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "collections",
      title: "Jakarta History Museum Collections & Highlights",
      description: "Overview of Jakarta History Museum collections per Jakarta Culture Office: city development, archaeology, antique furniture, ceramics, inscriptions, and why the gallery can change.",
      h1: "Collections &<br /><em>Highlights</em>",
      lead: "The museum presents Jakarta’s development through historic objects. This page summarises collection themes named by official sources, not today’s exhibit list.",
      sections: [
        {
          heading: "Collection themes",
          body: [
            "Jakarta’s Culture Office describes collections covering the city’s development, archaeology, antique furniture, ceramics, and inscriptions. This gives a general picture of the museum’s contents.",
          ],
          note: "The list of objects currently on display can change. Ask staff which rooms and collections are accessible; this guide does not guarantee a gallery layout.",
        },
        {
          heading: "How to enjoy it",
          body: [
            "Arrive early to avoid queues, read the labels in each room, and allow time because some rooms have old floors.",
          ],
        },
        {
          heading: "Photography",
          body: [
            "Photo rules vary; ask staff about permission for cameras, tripods, and filming before taking pictures inside the building.",
          ],
        },
      ],
      faq: [
        { q: "What collections does the museum have?", a: "The Culture Office mentions city development, archaeology, antique furniture, ceramics, and inscriptions." },
        { q: "Are all collections on display?", a: "Not guaranteed. Ask staff which rooms are open during your visit." },
        { q: "Can I photograph inside?", a: "Photo rules vary; ask staff for permission before photographing inside the building." },
      ],
      sources: museumSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "sejarah-kota",
    group: "history",
    related: ["gedung", "siapa-fatahillah", "arsitektur", "kali-besar"],
    id: {
      slug: "sejarah-kota",
      title: "Jakarta, Jayakarta & Batavia",
      description: "Rentang sejarah Jakarta dari pelabuhan Sunda Kelapa, Jayakarta, hingga Batavia kolonial dan ibu kota modern, dengan museum dan Kota Tua sebagai pintu masuk.",
      h1: "Jakarta,<br /><em>Jayakarta & Batavia</em>",
      lead: "Nama kota berubah beberapa kali seiring kekuasaan yang berganti. Halaman ini merangkum garis besar sejarah tanpa mengarang tanggal atau peristiwa tertentu.",
      sections: [
        {
          heading: "Dari pelabuhan ke kota kolonial",
          body: [
            "Kawasan ini bermula sebagai pelabuhan Sunda Kelapa, lalu dikenal sebagai Jayakarta, dan kemudian menjadi Batavia di bawah kolonial. Lapisan sejarah ini masih terbaca di bangunan dan ruang Kota Tua.",
          ],
        },
        {
          heading: "Mengapa Kota Tua penting",
          body: [
            "Kota Tua menyimpan sisa-sisa Batavia: balai kota, rumah dagang, kanal, dan gereja. Museum Sejarah Jakarta menempatkan cerita ini dalam satu gedung.",
          ],
        },
        {
          heading: "Menuju ibu kota modern",
          body: [
            "Dari kota kolonial, Jakarta tumbuh menjadi ibu kota Indonesia. Koleksi dan bangunan Kota Tua membantu menghubungkan masa lalu dengan kota saat ini.",
          ],
          note: "Untuk penelitian mendalam, rujuk sumber sejarah resmi; panduan ini hanya ringkasan perjalanan, bukan catatan akademis.",
        },
      ],
      faq: [
        { q: "Apa bedanya Jayakarta dan Batavia?", a: "Jayakarta adalah nama kota sebelum masa kolonial panjang; Batavia adalah nama di bawah kekuasaan kolonial. Keduanya merujuk kawasan Jakarta lama." },
        { q: "Mengapa Kota Tua disebut Batavia?", a: "Karena menyimpan bangunan dan tata ruang dari masa Batavia kolonial." },
        { q: "Di mana memulai belajar sejarahnya?", a: "Mulai dari Museum Sejarah Jakarta dan keliling lapangan serta Kali Besar untuk melihat sisa kota lama." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "city-history",
      title: "Jakarta, Jayakarta & Batavia",
      description: "The historical arc of Jakarta from Sunda Kelapa port, through Jayakarta, to colonial Batavia and the modern capital, with the museum and Kota Tua as an entry point.",
      h1: "Jakarta,<br /><em>Jayakarta & Batavia</em>",
      lead: "The city’s name changed several times as powers changed. This page summarises the historical outline without inventing specific dates or events.",
      sections: [
        {
          heading: "From port to colonial city",
          body: [
            "The area began as the port of Sunda Kelapa, became known as Jayakarta, and later Batavia under colonial rule. This historical layering is still readable in the buildings and spaces of Kota Tua.",
          ],
        },
        {
          heading: "Why Kota Tua matters",
          body: [
            "Kota Tua preserves remnants of Batavia: the city hall, trading houses, canals, and churches. Jakarta History Museum places this story inside one building.",
          ],
        },
        {
          heading: "Toward the modern capital",
          body: [
            "From a colonial city, Jakarta grew into Indonesia’s capital. The collections and buildings of Kota Tua help connect the past with the present city.",
          ],
          note: "For deep research, consult official historical sources; this guide is a travel summary, not an academic record.",
        },
      ],
      faq: [
        { q: "What is the difference between Jayakarta and Batavia?", a: "Jayakarta was the city’s name before the long colonial period; Batavia was its name under colonial rule. Both refer to old Jakarta." },
        { q: "Why is Kota Tua called Batavia?", a: "Because it preserves buildings and layout from the colonial Batavia period." },
        { q: "Where do I start learning its history?", a: "Start at Jakarta History Museum and walk the square and Kali Besar to see remnants of the old city." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "taman-fatahillah",
    group: "history",
    related: ["nama", "fotografi", "kafe", "rute-2-jam"],
    id: {
      slug: "taman-fatahillah",
      title: "Panduan Taman Fatahillah: Lapangan & Kegiatan",
      description: "Panduan Taman Fatahillah: ciri lapangan, aktivitas, beda dengan museum, dan tips menikmati ruang terbuka Kota Tua tanpa menganggap acara tertentu pasti ada.",
      h1: "Panduan<br /><em>Taman Fatahillah</em>",
      lead: "Taman Fatahillah adalah ruang terbuka di depan museum—bukan museum itu sendiri. Halaman ini membantu Anda menikmati lapangan dengan benar.",
      sections: [
        {
          heading: "Ciri lapangan",
          body: [
            "Lapangan berpaving dengan bangunan kolonial di sekelilingnya, sering digunakan pejalan kaki, penyewaan sepeda ontel, dan pertunjukan jalanan. Lapangan umumnya bebas masuk.",
          ],
        },
        {
          heading: "Beda dengan museum",
          body: [
            "Museum memerlukan tiket dan punya jam tertentu; lapangan terbuka dan tidak mengikuti jam museum. Kegiatan di lapangan mengikuti aturan acara setempat, bukan pengelola museum.",
          ],
          note: "Acara, pertunjukan, atau penyewaan sepeda dapat berubah atau tidak tersedia setiap hari. Jangan menganggap kegiatan tertentu pasti ada saat kedatangan.",
        },
        {
          heading: "Tips menikmati",
          body: [
            "Datang pagi untuk cahaya foto lembut, siang untuk suasana ramai, atau sore untuk udara lebih sejuk. Bawa air dan topi; naungan terbatas di tengah lapangan.",
          ],
        },
      ],
      faq: [
        { q: "Apakah Taman Fatahillah berbayar?", a: "Lapangan umumnya bebas masuk. Tiket hanya untuk gedung museum di tepiannya." },
        { q: "Apa bedanya lapangan dan museum?", a: "Lapangan terbuka tanpa jam/tiket; museum butuh tiket dan punya jam tertentu." },
        { q: "Apakah selalu ada pertunjukan?", a: "Tidak dijamin. Acara jalanan bergantung hari dan cuaca; jangan mengandalkan pertunjukan tertentu." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "fatahillah-square",
      title: "Fatahillah Square Guide: The Square & Activities",
      description: "Fatahillah Square guide: square character, activities, how it differs from the museum, and tips to enjoy Kota Tua’s open space without assuming specific events exist.",
      h1: "Fatahillah<br /><em>Square Guide</em>",
      lead: "Taman Fatahillah is the open square in front of the museum—not the museum itself. This page helps you enjoy the square correctly.",
      sections: [
        {
          heading: "Square character",
          body: [
            "The paved square is surrounded by colonial buildings and is often used by pedestrians, vintage-bicycle rentals, and street performances. The square is generally free to enter.",
          ],
        },
        {
          heading: "Different from the museum",
          body: [
            "The museum needs a ticket and has set hours; the square is open and does not follow museum hours. Square activities follow local event rules, not the museum operator.",
          ],
          note: "Events, performances, or bicycle rental can change or be unavailable daily. Do not assume a specific activity will be there on arrival.",
        },
        {
          heading: "Enjoyment tips",
          body: [
            "Come in the morning for soft photo light, midday for a lively crowd, or late afternoon for cooler air. Bring water and a hat; shade in the square centre is limited.",
          ],
        },
      ],
      faq: [
        { q: "Is Taman Fatahillah paid?", a: "The square is generally free to enter. The ticket only covers the museum building at its edge." },
        { q: "What is the difference between the square and the museum?", a: "The square is open with no hours/ticket; the museum needs a ticket and has set hours." },
        { q: "Are there always performances?", a: "Not guaranteed. Street events depend on the day and weather; do not rely on a specific performance." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "siapa-fatahillah",
    group: "history",
    related: ["taman-fatahillah", "sejarah-kota", "arsitektur", "nama"],
    id: {
      slug: "siapa-fatahillah",
      title: "Siapa Fatahillah? Asal Nama Lapangan",
      description: "Latar belakang nama Fatahillah: tokoh sejarah yang dikaitkan dengan nama lapangan, sengketa penamaan, dan sumber yang perlu dirujuk untuk detail.",
      h1: "Siapa<br /><em>Fatahillah?</em>",
      lead: "Nama Taman Fatahillah merujuk pada tokoh yang sering dikaitkan dengan sejarah awal Jayakarta. Halaman ini menjelaskan konteks tanpa menciptakan fakta baru.",
      sections: [
        {
          heading: "Tokoh di balik nama",
          body: [
            "Fatahillah (juga ditulis Fatahillah/Falatehan) adalah nama yang lazim dikaitkan dengan pemimpin yang berperan dalam sejarah awal Jayakarta abad ke-16. Penulisan dan penyebutan bervariasi di berbagai sumber.",
          ],
          note: "Detail biografi dan peristiwa tertentu masih diperdebatkan antarsumber sejarah. Rujuk sumber sejarah resmi untuk penelitian mendalam; panduan ini hanya ringkasan perjalanan.",
        },
        {
          heading: "Sengketa penamaan",
          body: [
            "Beberapa sumber berbeda soal peran persis dan ejaan nama. Yang pasti: lapangan ini dinamai tokoh tersebut, dan namanya kini melekat pada kawasan Kota Tua.",
          ],
        },
        {
          heading: "Mengapa nama penting",
          body: [
            "Nama Fatahillah membantu membedakan lapangan dari gedung museum di tepiannya. Saat bertanya arah, sebut “Taman Fatahillah” untuk merujuk lapangan terbuka.",
          ],
        },
      ],
      faq: [
        { q: "Siapa Fatahillah?", a: "Nama yang lazim dikaitkan dengan pemimpin berperan dalam sejarah awal Jayakarta abad ke-16. Penulisan bervariasi di sumber." },
        { q: "Apakah namanya pasti?", a: "Tidak sepenuhnya; beberapa sumber berbeda soal peran dan ejaan. Rujuk sumber sejarah untuk detail." },
        { q: "Mengapa lapangan dinamai Fatahillah?", a: "Untuk mengenang tokoh tersebut; nama kini melekat pada kawasan Kota Tua." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "who-was-fatahillah",
      title: "Who Was Fatahillah? The Name Behind the Square",
      description: "Background of the name Fatahillah: the historical figure linked to the square’s name, naming disputes, and sources to consult for detail.",
      h1: "Who Was<br /><em>Fatahillah?</em>",
      lead: "The name Taman Fatahillah refers to a figure commonly linked to the early history of Jayakarta. This page explains the context without inventing new facts.",
      sections: [
        {
          heading: "The figure behind the name",
          body: [
            "Fatahillah (also written Fatahillah/Falatehan) is a name commonly linked to a leader who played a role in the early 16th-century history of Jayakarta. Spelling and references vary across sources.",
          ],
          note: "Specific biography and events are debated among historical sources. Consult official historical sources for deep research; this guide is only a travel summary.",
        },
        {
          heading: "Naming disputes",
          body: [
            "Some sources differ on the precise role and spelling. What is clear: the square is named after this figure, and the name now attaches to the Kota Tua district.",
          ],
        },
        {
          heading: "Why the name matters",
          body: [
            "The name Fatahillah helps separate the square from the museum building at its edge. When asking for directions, say “Taman Fatahillah” to mean the open square.",
          ],
        },
      ],
      faq: [
        { q: "Who was Fatahillah?", a: "A name commonly linked to a leader in early 16th-century Jayakarta history. Spelling varies across sources." },
        { q: "Is the name certain?", a: "Not entirely; some sources differ on role and spelling. Consult historical sources for detail." },
        { q: "Why is the square named Fatahillah?", a: "To honour that figure; the name now attaches to the Kota Tua district." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "arsitektur",
    group: "history",
    related: ["gedung", "sejarah-kota", "kali-besar", "fotografi"],
    id: {
      slug: "arsitektur",
      title: "Arsitektur Kolonial Kota Tua",
      description: "Ciri arsitektur Kota Tua: gedung kolonial, kanal, gereja, dan membedakan bangunan yang bisa dimasuki dari yang hanya dilihat dari luar.",
      h1: "Arsitektur<br /><em>Kolonial Kota Tua</em>",
      lead: "Kota Tua kaya akan bangunan kolonial yang masih berdiri. Halaman ini memandu Anda melihatnya sambil membedakan apa yang terbuka untuk dikunjungi.",
      sections: [
        {
          heading: "Ciri umum",
          body: [
            "Bangunan kolonial di kawasan ini umumnya batu, simetris, dengan jendela besar dan halaman. Gaya ini mencerminkan fungsi dagang dan pemerintahan masa lalu.",
          ],
        },
        {
          heading: "Yang bisa dimasuki",
          body: [
            "Beberapa gedung kini menjadi museum (seperti Museum Sejarah Jakarta, Bank Indonesia, Bank Mandiri) dan bisa dikunjungi dengan aturan masing-masing. Yang lain masih kantor atau tidak terbuka untuk umum.",
          ],
          note: "Jangan asumsikan setiap bangunan kolonial terbuka. Cek status dan jam masing-museum sebelum mendatangi.",
        },
        {
          heading: "Melihat dari luar",
          body: [
            "Banyak bangunan cukup dinikmati dari trotoar dan lapangan. Jalan kaki pelan di sekitar Kali Besar dan jalan-jalan utama memperlihatkan ragam fasad.",
          ],
        },
      ],
      faq: [
        { q: "Bangunan mana yang bisa dimasuki?", a: "Museum seperti Museum Sejarah Jakarta, Bank Indonesia, dan Bank Mandiri biasanya terbuka dengan aturan masing-masing." },
        { q: "Apakah semua gedung kolonial terbuka?", a: "Tidak. Sebagian masih kantor atau tidak terbuka untuk umum; nikmati dari luar." },
        { q: "Di mana titik arsitektur terbaik?", a: "Keliling lapangan Fatahillah, Kali Besar, dan jalan utama Kota Tua untuk ragam fasad." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "colonial-architecture",
      title: "Kota Tua Colonial Architecture",
      description: "Kota Tua architectural character: colonial buildings, canals, churches, and distinguishing buildings you can enter from those seen only outside.",
      h1: "Colonial<br /><em>Kota Tua Architecture</em>",
      lead: "Kota Tua is rich in standing colonial buildings. This page guides you to see them while distinguishing what is open to visit.",
      sections: [
        {
          heading: "General character",
          body: [
            "Colonial buildings here are generally stone, symmetrical, with large windows and courtyards. The style reflects past commercial and governmental functions.",
          ],
        },
        {
          heading: "What you can enter",
          body: [
            "Some buildings are now museums (such as Jakarta History Museum, Bank Indonesia, Bank Mandiri) and can be visited under their own rules. Others remain offices or are not open to the public.",
          ],
          note: "Do not assume every colonial building is open. Check each museum’s status and hours before going.",
        },
        {
          heading: "Viewing from outside",
          body: [
            "Many buildings are best enjoyed from the pavement and square. A slow walk around Kali Besar and the main streets reveals a variety of facades.",
          ],
        },
      ],
      faq: [
        { q: "Which buildings can I enter?", a: "Museums like Jakarta History Museum, Bank Indonesia, and Bank Mandiri are usually open under their own rules." },
        { q: "Are all colonial buildings open?", a: "No. Some remain offices or are not open to the public; enjoy them from outside." },
        { q: "Where is the best architecture spot?", a: "Walk around Fatahillah square, Kali Besar, and Kota Tua’s main streets for facade variety." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "fotografi",
    group: "history",
    related: ["taman-fatahillah", "arsitektur", "kali-besar", "rute-2-jam"],
    id: {
      slug: "fotografi",
      title: "Panduan Fotografi di Kota Tua",
      description: "Tips fotografi Museum Sejarah Jakarta dan Taman Fatahillah: waktu terbaik, sudut, naungan, dan sopan santun terhadap pengunjung lain serta aturan di dalam gedung.",
      h1: "Panduan<br /><em>Fotografi</em>",
      lead: "Kota Tua sangat fotogenik, tetapi pencahayaan dan keramaian bervariasi. Halaman ini memberi panduan praktis tanpa menjanjikan spot tertentu selalu kosong.",
      sections: [
        {
          heading: "Waktu terbaik",
          body: [
            "Pagi memberi cahaya lembut dan kerumunan tipis; sore hingga menjelang senja memberi warna hangat di fasad kolonial. Siang cerah cocok untuk detail bangunan.",
          ],
        },
        {
          heading: "Sudut & naungan",
          body: [
            "Lapangan Fatahillah dengan gedung museum di latar belakang adalah sudut klasik. Naungan terbatas di tengah lapangan; bawa topi atau berteduh di selasar bangunan.",
          ],
        },
        {
          heading: "Sopan santun & aturan",
          body: [
            "Hargai pengunjung dan pedagang lain; jangan halangi jalan. Di dalam museum, tanyakan izin kamera, tripod, dan perekaman kepada staf karena aturan bervariasi.",
          ],
          note: "Foto komersial atau tripod di dalam gedung sering butuh izin khusus. Konfirmasikan kepada pengelola.",
        },
      ],
      faq: [
        { q: "Kapan waktu terbaik foto?", a: "Pagi untuk cahaya lembut dan sepi; sore untuk warna hangat fasad." },
        { q: "Apakah boleh tripod di museum?", a: "Aturan bervariasi; tanyakan izin kepada staf. Tripod sering butuh izin khusus." },
        { q: "Di mana sudut foto klasik?", a: "Lapangan Fatahillah dengan gedung museum di latar belakang." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "photography",
      title: "Kota Tua Photography Guide",
      description: "Photography tips for Jakarta History Museum and Taman Fatahillah: best times, angles, shade, respect for others, and indoor-building rules.",
      h1: "Photography<br /><em>Guide</em>",
      lead: "Kota Tua is very photogenic, but light and crowds vary. This page gives practical guidance without promising any spot is always empty.",
      sections: [
        {
          heading: "Best time",
          body: [
            "Morning gives soft light and thin crowds; late afternoon to dusk gives warm colour on the colonial facades. Bright midday suits building detail.",
          ],
        },
        {
          heading: "Angles & shade",
          body: [
            "Taman Fatahillah with the museum building behind it is the classic angle. Shade in the square centre is limited; bring a hat or rest under building arcades.",
          ],
        },
        {
          heading: "Etiquette & rules",
          body: [
            "Respect other visitors and vendors; do not block paths. Inside the museum, ask staff about camera, tripod, and filming permission because rules vary.",
          ],
          note: "Commercial shooting or tripods indoors often need special permission. Confirm with the operator.",
        },
      ],
      faq: [
        { q: "When is the best photo time?", a: "Morning for soft light and fewer people; late afternoon for warm facade colour." },
        { q: "Are tripods allowed in the museum?", a: "Rules vary; ask staff. Tripods often need special permission." },
        { q: "Where is the classic photo angle?", a: "Taman Fatahillah with the museum building behind it." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },
];
