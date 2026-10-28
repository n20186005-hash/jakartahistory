import type { Topic } from "./topics";
import { areaSources } from "./topics-sources";

export const foodTopics: Topic[] = [
  {
    key: "restoran",
    group: "food",
    related: ["kafe", "kuliner", "jajanan", "rute-2-jam"],
    id: {
      slug: "restoran",
      title: "Restoran di Sekitar Fatahillah & Kota Tua",
      description: "Panduan restoran di sekitar Taman Fatahillah dan Kota Tua: mengelompokkan berdasar masa makan, jarak, dan anggaran, tanpa merekomendasikan tempat tertentu sebagai paling resmi.",
      h1: "Restoran di<br /><em>Sekitar</em>",
      lead: "Kawasan Kota Tua punya pilihan makan dari warung hingga restoran colonial. Halaman ini mengelompokkan pilihan agar mudah dipilih, bukan daftar peringkat.",
      sections: [
        {
          heading: "Dekat lapangan",
          body: [
            "Restoran dan kafe mengelilingi Taman Fatahillah, banyak menempati bangunan kolonial. Jarak berjalan kaki dari museum umumnya pendek (beberapa menit).",
          ],
          note: "Nama, menu, harga, dan status operasional tempat dapat berubah. Panduan ini tidak merekomendasikan tempat tertentu; pilih berdasar kebutuhan dan baca ulasan terkini.",
        },
        {
          heading: "Menurut masa makan",
          body: [
            "Sarapan dan kopi pagi tersedia di kafe sekitar lapangan; makan siang dan malam lebih beragam dengan restoran colonial dan warung. Malam hari lapangan sering lebih hidup.",
          ],
        },
        {
          heading: "Anggaran & jenis",
          body: [
            "Opsi beragam dari makanan sederhana hingga hidangan colonial lebih mahal. Sesuaikan dengan anggaran dan selera; tanyakan harga sebelum memesan jika tidak terpampang.",
          ],
        },
      ],
      faq: [
        { q: "Di mana restoran dekat museum?", a: "Mengelilingi Taman Fatahillah, banyak di bangunan kolonial. Jarak jalan kaki dari museum beberapa menit." },
        { q: "Apakah mahal?", a: "Bervariasi; ada opsi sederhana hingga restoran colonial lebih mahal. Tanyakan harga sebelum memesan." },
        { q: "Restoran buka malam?", a: "Sebagian buka malam dan lapangan lebih hidup saat itu. Konfirmasikan jam masing-tempat." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "restaurants",
      title: "Restaurants Near Fatahillah & Kota Tua",
      description: "Restaurant guide around Taman Fatahillah and Kota Tua: grouped by meal, distance, and budget, without ranking any place as most official.",
      h1: "Restaurants<br /><em>Around</em>",
      lead: "Kota Tua has dining from warungs to colonial restaurants. This page groups options for easy choice, not a ranking list.",
      sections: [
        {
          heading: "Near the square",
          body: [
            "Restaurants and cafés surround Taman Fatahillah, many in colonial buildings. Walking distance from the museum is generally short (a few minutes).",
          ],
          note: "Names, menus, prices, and operating status can change. This guide does not recommend a specific place; choose by need and read recent reviews.",
        },
        {
          heading: "By meal",
          body: [
            "Morning coffee and breakfast are available at cafés around the square; lunch and dinner are more varied with colonial restaurants and warungs. The square is often livelier at night.",
          ],
        },
        {
          heading: "Budget & type",
          body: [
            "Options range from simple meals to pricier colonial dining. Match your budget and taste; ask prices before ordering if not displayed.",
          ],
        },
      ],
      faq: [
        { q: "Where are restaurants near the museum?", a: "Around Taman Fatahillah, many in colonial buildings. Walking distance from the museum is a few minutes." },
        { q: "Is it expensive?", a: "Varies; there are simple options and pricier colonial restaurants. Ask prices before ordering." },
        { q: "Are restaurants open at night?", a: "Some are open at night and the square is livelier then. Confirm each place’s hours." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "kafe",
    group: "food",
    related: ["restoran", "cafe-batavia", "taman-fatahillah", "fotografi"],
    id: {
      slug: "kafe",
      title: "Kafe & Tempat Istirahat di Kota Tua",
      description: "Panduan kafe dan tempat istirahat di Kota Tua: cocok untuk istirahat, kerja santai, atau menunggu cuaca, dengan catatan harga dan jam bisa berubah.",
      h1: "Kafe &<br /><em>Tempat Istirahat</em>",
      lead: "Kota Tua punya banyak kafe, baik di bangunan colonial maupun warung kopi sederhana. Halaman ini membantu memilih tempat berhenti sejenak.",
      sections: [
        {
          heading: "Di sekitar lapangan",
          body: [
            "Kafe mengelilingi Taman Fatahillah dan jalan utama. Banyak menawarkan tempat duduk menghadap lapangan—nyaman untuk istirahat setelah jalan kaki.",
          ],
        },
        {
          heading: "Untuk cuaca & istirahat",
          body: [
            "Jika panas atau hujan, kafe adalah tempat berlindung sambil menunggu. Pilih yang ber-AC atau beranda teduh sesuai kebutuhan.",
          ],
          note: "Harga dan jam operasional kafe berubah. Periksa menu dan jam sebelum duduk; panduan ini tidak menjamin ketersediaan meja.",
        },
        {
          heading: "Memadukan dengan rute",
          body: [
            "Jadikan kafe sebagai jeda antara museum dan keliling Kali Besar. Satu istirahat singkat membantu menjaga ritme jalan kaki.",
          ],
        },
      ],
      faq: [
        { q: "Di mana kafe dekat lapangan?", a: "Mengelilingi Taman Fatahillah dan jalan utama, banyak dengan pemandangan lapangan." },
        { q: "Apakah ada kafe ber-AC?", a: "Beberapa menyediakan ruang ber-AC atau beranda teduh. Cek saat kedatangan." },
        { q: "Boleh hanya istirahat tanpa pesan banyak?", a: "Umumnya ya, tetapi tetaplah menghormati aturan tempat; periksa sebelum duduk." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "cafes",
      title: "Cafés & Rest Stops in Kota Tua",
      description: "Café and rest-stop guide in Kota Tua: good for a break, casual work, or waiting out the weather, with a note that prices and hours change.",
      h1: "Cafés &<br /><em>Rest Stops</em>",
      lead: "Kota Tua has many cafés, both in colonial buildings and simple coffee warungs. This page helps you pick a place to pause.",
      sections: [
        {
          heading: "Around the square",
          body: [
            "Cafés surround Taman Fatahillah and the main streets. Many offer seats facing the square—comfortable for a rest after walking.",
          ],
        },
        {
          heading: "For weather & rest",
          body: [
            "If it is hot or rainy, a café is a place to shelter while waiting. Choose one with air-conditioning or a shaded veranda as needed.",
          ],
          note: "Café prices and hours change. Check the menu and hours before sitting; this guide does not guarantee a table.",
        },
        {
          heading: "Fitting the route",
          body: [
            "Use a café as a break between the museum and a Kali Besar walk. One short rest helps keep the walking rhythm.",
          ],
        },
      ],
      faq: [
        { q: "Where are cafés near the square?", a: "Around Taman Fatahillah and the main streets, many with square views." },
        { q: "Are there air-conditioned cafés?", a: "Some offer air-conditioned rooms or shaded verandas. Check on arrival." },
        { q: "Can I just rest without ordering much?", a: "Generally yes, but respect the venue’s rules; check before sitting." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "cafe-batavia",
    group: "food",
    related: ["restoran", "kafe", "taman-fatahillah", "arsitektur"],
    id: {
      slug: "cafe-batavia",
      title: "Panduan Café Batavia di Kota Tua",
      description: "Panduan netral Café Batavia: letak di tepi Taman Fatahillah, suasana colonial, dan mengapa menu serta harga harus dicek langsung tanpa menganggap panduan ini merekomendasikan.",
      h1: "Panduan<br /><em>Café Batavia</em>",
      lead: "Café Batavia adalah nama dikenal di tepi Taman Fatahillah. Halaman ini memberi konteks netral dan tidak mempromosikan tempat tertentu.",
      sections: [
        {
          heading: "Letak & ciri",
          body: [
            "Café Batavia berada di salah satu sudut Taman Fatahillah, di bangunan colonial dengan interior khas. Lokasinya membuatnya mudah dijadikan titik istirahat sambil melihat lapangan.",
          ],
        },
        {
          heading: "Suasana",
          body: [
            "Tempat ini sering disebut memiliki nuansa colonial dan bersejarah. Untuk detail menu, harga, dan jam, cek langsung atau sumber terkini; panduan ini tidak menjamin informasi tersebut.",
          ],
          note: "Menu, harga, dan status operasional dapat berubah. Anggap panduan ini hanya konteks lokasi, bukan rekomendasi resmi atau jaminan pelayanan.",
        },
        {
          heading: "Cocok untuk siapa",
          body: [
            "Cocok bagi yang ingin duduk menghadap lapangan atau mencari suasana colonial. Bandingkan dengan kafe lain di sekitar untuk pilihan anggaran.",
          ],
        },
      ],
      faq: [
        { q: "Di mana Café Batavia?", a: "Di tepi Taman Fatahillah, salah satu sudut lapangan, di bangunan colonial." },
        { q: "Apakah panduan ini merekomendasikannya?", a: "Tidak. Halaman ini hanya memberi konteks netral dan lokasi, bukan promosi." },
        { q: "Apakah harga pasti?", a: "Tidak dijamin. Cek menu dan harga langsung atau sumber terkini." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "cafe-batavia",
      title: "Café Batavia Guide in Kota Tua",
      description: "Neutral guide to Café Batavia: location on Fatahillah Square’s edge, colonial ambience, and why menu and prices must be checked directly without this guide endorsing it.",
      h1: "Café Batavia<br /><em>Guide</em>",
      lead: "Café Batavia is a well-known name on the edge of Taman Fatahillah. This page gives neutral context and does not promote any venue.",
      sections: [
        {
          heading: "Location & character",
          body: [
            "Café Batavia sits on a corner of Taman Fatahillah, in a colonial building with a distinctive interior. Its location makes it an easy rest point while watching the square.",
          ],
        },
        {
          heading: "Ambience",
          body: [
            "The place is often described as colonial and historic in feel. For menu, price, and hours, check directly or recent sources; this guide does not guarantee that information.",
          ],
          note: "Menu, prices, and operating status can change. Treat this guide as location context only, not an official recommendation or service guarantee.",
        },
        {
          heading: "Who it suits",
          body: [
            "Good for those wanting to sit facing the square or seeking a colonial atmosphere. Compare with other cafés around for budget options.",
          ],
        },
      ],
      faq: [
        { q: "Where is Café Batavia?", a: "On the edge of Taman Fatahillah, on a corner of the square, in a colonial building." },
        { q: "Does this guide recommend it?", a: "No. This page only gives neutral context and location, not promotion." },
        { q: "Are prices certain?", a: "Not guaranteed. Check the menu and prices directly or recent sources." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "kuliner",
    group: "food",
    related: ["restoran", "jajanan", "glodok", "rute-2-jam"],
    id: {
      slug: "kuliner",
      title: "Kuliner Indonesia di Sekitar Kota Tua",
      description: "Panduan kuliner Indonesia di Kota Tua: hidangan umum, cara mencari, dan catatan harga serta halal bervariasi; tidak mengarang menu tertentu.",
      h1: "Kuliner Indonesia<br /><em>di Kota Tua</em>",
      lead: "Kota Tua menawarkan hidangan Indonesia dari nasi campur hingga jajanan. Halaman ini membantu menavigasi pilihan tanpa mengarang daftar menu.",
      sections: [
        {
          heading: "Hidangan umum",
          body: [
            "Di sekitar Kota Tua Anda dapat menemukan hidangan Indonesia seperti nasi goreng, soto, dan jajanan lokal, baik di warung maupun restoran. Ragam bergantung tempat dan hari.",
          ],
          note: "Jangan menganggap setiap hidangan tersedia di semua tempat. Pilih berdasar tampilan dan bacalah ulasan terkini.",
        },
        {
          heading: "Cara mencari",
          body: [
            "Jalan kaki di sekitar lapangan dan jalan utama memperlihatkan papan menu. Tanyakan isi dan harga jika tidak terpampang jelas.",
          ],
        },
        {
          heading: "Catatan halal & harga",
          body: [
            "Banyak tempat melayani makanan halal, tetapi status bervariasi. Tanyakan kepada penjual jika ragu; panduan ini tidak menjamin sertifikasi tertentu.",
          ],
        },
      ],
      faq: [
        { q: "Makanan apa yang umum di Kota Tua?", a: "Nasi goreng, soto, dan jajanan lokal di warung maupun restoran." },
        { q: "Apakah semuanya halal?", a: "Banyak yang halal, tetapi status bervariasi. Tanyakan kepada penjual jika ragu." },
        { q: "Apakah harga pasti?", a: "Tidak dijamin. Tanyakan harga sebelum memesan jika tidak terpampang." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "indonesian-food",
      title: "Indonesian Food Around Kota Tua",
      description: "Indonesian food guide around Kota Tua: common dishes, how to find them, with a note that prices and halal status vary; no invented menus.",
      h1: "Indonesian Food<br /><em>Around Kota Tua</em>",
      lead: "Kota Tua offers Indonesian dishes from mixed rice to snacks. This page helps navigate choices without inventing a menu list.",
      sections: [
        {
          heading: "Common dishes",
          body: [
            "Around Kota Tua you can find Indonesian dishes such as nasi goreng, soto, and local snacks, both at warungs and restaurants. The range depends on the place and day.",
          ],
          note: "Do not assume every dish is available everywhere. Choose by display and read recent reviews.",
        },
        {
          heading: "How to find them",
          body: [
            "Walking around the square and main streets reveals menu boards. Ask about contents and prices if not clearly shown.",
          ],
        },
        {
          heading: "Halal & price notes",
          body: [
            "Many places serve halal food, but status varies. Ask the seller if unsure; this guide does not guarantee any specific certification.",
          ],
        },
      ],
      faq: [
        { q: "What food is common in Kota Tua?", a: "Nasi goreng, soto, and local snacks at warungs and restaurants." },
        { q: "Is everything halal?", a: "Much is halal, but status varies. Ask the seller if unsure." },
        { q: "Are prices certain?", a: "Not guaranteed. Ask prices before ordering if not displayed." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "jajanan",
    group: "food",
    related: ["kuliner", "restoran", "glodok", "taman-fatahillah"],
    id: {
      slug: "jajanan",
      title: "Jajanan Kaki Lima di Kota Tua",
      description: "Panduan jajanan kaki lima Kota Tua: lokasi umum, waktu, dan pengingat bahwa lapak serta jam berjalan dapat berubah setiap hari.",
      h1: "Jajanan<br /><em>Kaki Lima</em>",
      lead: "Kaki lima menambah warna Kota Tua, terutama saat sore dan malam. Halaman ini memberi kerangka tanpa menjanjikan lapak tertentu selalu ada.",
      sections: [
        {
          heading: "Lokasi & waktu",
          body: [
            "Lapak kaki lima sering muncul di sekitar lapangan dan jalan utama, lebih banyak saat sore hingga malam. Kehadiran dan jenis lapak bervariasi harian.",
          ],
          note: "Jangan menganggap lapak tertentu selalu ada. Cek langsung saat kedatangan; panduan ini tidak menjamin ketersediaan.",
        },
        {
          heading: "Memilih dengan aman",
          body: [
            "Pilih lapak yang ramai dan tampak segar. Tanyakan harga sebelum membeli dan perhatikan kebersihan penyajian.",
          ],
        },
        {
          heading: "Menyatu dengan rute",
          body: [
            "Jajanan cocok sebagai selingan malam setelah keliling museum. Padukan dengan berjalan santai di lapangan.",
          ],
        },
      ],
      faq: [
        { q: "Di mana jajanan kaki lima?", a: "Di sekitar lapangan dan jalan utama, lebih banyak saat sore–malam." },
        { q: "Apakah selalu ada?", a: "Tidak dijamin. Kehadiran lapak bervariasi harian; cek langsung." },
        { q: "Aman membeli?", a: "Pilih lapak ramai dan segar, tanyakan harga, dan perhatikan kebersihan." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "street-food",
      title: "Street Food at Kota Tua",
      description: "Kota Tua street-food guide: general locations, timing, and a reminder that stalls and hours can change daily.",
      h1: "Street<br /><em>Food</em>",
      lead: "Street food adds colour to Kota Tua, especially in the late afternoon and evening. This page gives a framework without promising a specific stall is always there.",
      sections: [
        {
          heading: "Location & timing",
          body: [
            "Street stalls often appear around the square and main streets, more numerous from late afternoon into the evening. Their presence and type vary day to day.",
          ],
          note: "Do not assume a specific stall is always there. Check on arrival; this guide does not guarantee availability.",
        },
        {
          heading: "Choosing safely",
          body: [
            "Pick busy, fresh-looking stalls. Ask the price before buying and note serving hygiene.",
          ],
        },
        {
          heading: "Fitting the route",
          body: [
            "Street food suits an evening break after walking the museum. Pair it with a relaxed stroll on the square.",
          ],
        },
      ],
      faq: [
        { q: "Where is the street food?", a: "Around the square and main streets, more from late afternoon to evening." },
        { q: "Is it always there?", a: "Not guaranteed. Stall presence varies daily; check on arrival." },
        { q: "Is it safe to buy?", a: "Pick busy, fresh stalls, ask prices, and note hygiene." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "glodok",
    group: "food",
    related: ["kuliner", "jajanan", "wisata-sehari", "stasiun-jakarta-kota"],
    id: {
      slug: "glodok",
      title: "Kuliner Glodok dari Kota Tua",
      description: "Perpanjangan kuliner Glodok: jarak dari Kota Tua, transportasi, kondisi jalan kaki aman, dan cara menyambungkan ke rencana museum tanpa mengatakan Glodok ada di pinggir lapangan.",
      h1: "Kuliner<br /><em>Glodok</em>",
      lead: "Glodok adalah pusat kuliner Tionghoa Jakarta yang berjarak beberapa kilometer dari Kota Tua. Halaman ini menjelaskan cara menjangkaunya dengan jujur.",
      sections: [
        {
          heading: "Jarak & akses",
          body: [
            "Glodok berada di selatan Kota Tua, bukan di pinggir lapangan. Jaraknya beberapa kilometer; capai dengan berjalan kaki lebih lama, naik angkutan umum, atau ride-hailing.",
          ],
          note: "Jangan anggap Glodok hanya bersebelahan dengan lapangan. Siapkan waktu perjalanan terpisah dari kunjungan museum.",
        },
        {
          heading: "Kondisi jalan kaki",
          body: [
            "Menyambungkan kaki dari Kota Tua ke Glodok melewati jalan sibuk; lebih nyaman naik transportasi umum atau ride-hailing untuk sebagian rute.",
          ],
        },
        {
          heading: "Menyambungkan rencana",
          body: [
            "Glodok cocok sebagai lanjutan sehari penuh, bukan jeda singkat dari museum. Rencanakan makan malam di sana setelah Kota Tua siang hari.",
          ],
        },
      ],
      faq: [
        { q: "Apakah Glodok di sebelah lapangan?", a: "Tidak. Glodok berjarak beberapa kilometer di selatan Kota Tua." },
        { q: "Bagaimana ke sana?", a: "Naik angkutan umum, ride-hailing, atau berjalan lebih lama; jalan kaki melewati ruas sibuk." },
        { q: "Kapan terbaik mengunjungi?", a: "Sebagai lanjutan sehari penuh, dengan makan malam setelah Kota Tua siang hari." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "glodok",
      title: "Glodok Food Walk from Kota Tua",
      description: "Glodok food extension: distance from Kota Tua, transport, safe walking conditions, and how to connect it to a museum plan without saying Glodok is next to the square.",
      h1: "Glodok<br /><em>Food Walk</em>",
      lead: "Glodok is Jakarta’s Chinese-food hub several kilometres from Kota Tua. This page explains how to reach it honestly.",
      sections: [
        {
          heading: "Distance & access",
          body: [
            "Glodok sits south of Kota Tua, not at the square’s edge. It is several kilometres away; reach it by a longer walk, public transport, or ride-hailing.",
          ],
          note: "Do not treat Glodok as adjacent to the square. Budget separate travel time from your museum visit.",
        },
        {
          heading: "Walking conditions",
          body: [
            "Walking from Kota Tua to Glodok crosses busy roads; using public transport or ride-hailing for part of the route is more comfortable.",
          ],
        },
        {
          heading: "Connecting the plan",
          body: [
            "Glodok suits a full-day extension, not a quick museum break. Plan dinner there after a daytime Kota Tua visit.",
          ],
        },
      ],
      faq: [
        { q: "Is Glodok next to the square?", a: "No. Glodok is several kilometres south of Kota Tua." },
        { q: "How do I get there?", a: "Public transport, ride-hailing, or a longer walk; the walk crosses busy roads." },
        { q: "When is the best time to visit?", a: "As a full-day extension, with dinner after a daytime Kota Tua visit." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },
];
