import type { Topic } from "./topics";
import { museumSources, areaSources } from "./topics-sources";

export const visitTopics: Topic[] = [
  {
    key: "tickets",
    group: "visit",
    related: ["jam-buka", "nama", "aksesibilitas", "taman-fatahillah"],
    id: {
      slug: "tiket",
      title: "Tiket Museum Sejarah Jakarta: Harga & Cara Membeli",
      description: "Panduan tiket Museum Sejarah Jakarta: tarif rujukan hari kerja & akhir pekan, kategori pengunjung, cara bayar, dan mengapa semua angka harus dikonfirmasi di loket.",
      h1: "Tiket Museum<br /><em>Sejarah Jakarta</em>",
      lead: "Museum mengenakan tiket masuk; lapangan Taman Fatahillah di depannya tidak. Halaman ini merangkum tarif rujukan dan cara membeli tiket tanpa menganggap angka sebagai harga pasti.",
      sections: [
        {
          heading: "Tarif rujukan (bukan harga resmi final)",
          body: [
            "Registri museum nasional mencantumkan Rp10.000 pada hari kerja dan Rp15.000 pada akhir pekan saat diperiksa 19 Oktober 2026. Angka ini tidak merinci kategori pengunjung di sampingnya.",
            "Jangan menganggap tarif rujukan berlaku pasti untuk WNA, anak, pelajar, atau rombongan. Artikel pemerintah daerah tahun 2023 mencantumkan Rp5.000; angka itu adalah informasi lama, bukan konfirmasi tarif saat ini.",
          ],
          note: "Tarif dapat berubah. Konfirmasikan kategori, tarif berlaku, dan cara bayar kepada loket sebelum membeli.",
        },
        {
          heading: "Cara membeli",
          body: [
            "Untuk objek retribusi daerah seperti museum ini, pembelian umumnya dilakukan di loket saat kedatangan. Tanyakan metode pembayaran yang diterima (tunai atau non-tunai) kepada petugas.",
            "Panduan ini tidak menjamin ketersediaan pembelian daring, diskon, pembebasan biaya, layanan pemandu, atau paket tertentu.",
          ],
        },
        {
          heading: "Tiket bukan untuk seluruh Kota Tua",
          body: [
            "Tiket museum hanya berlaku untuk gedung Museum Sejarah Jakarta. Lapangan Taman Fatahillah, museum lain, penyewaan sepeda, dan acara terbuka memiliki aturan sendiri.",
          ],
        },
      ],
      faq: [
        { q: "Berapa harga tiket Museum Sejarah Jakarta?", a: "Registri museum nasional mencantumkan Rp10.000 hari kerja dan Rp15.000 akhir pekan (diperiksa 19 Oktober 2026) tanpa rincian kategori. Konfirmasikan tarif kategori Anda dan cara bayar di loket." },
        { q: "Apakah ada tiket gratis untuk anak atau pelajar?", a: "Panduan ini tidak menemukan rincian kategori di sumber rujukan. Tanyakan keringanan, diskon, atau pembebasan biaya kepada loket saat kedatangan." },
        { q: "Bisakah membeli tiket daring?", a: "Sumber terbuka tidak menyebutkan saluran pembelian daring yang pasti. Asumsikan pembelian di loket dan konfirmasikan kepada pengelola sebelum berangkat." },
      ],
      sources: museumSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "tickets",
      title: "Jakarta History Museum Tickets: Prices & How to Buy",
      description: "Independent ticket guide for Jakarta History Museum: reference weekday and weekend tariffs, visitor categories, payment, and why every figure must be confirmed at the counter.",
      h1: "Jakarta History<br /><em>Museum tickets</em>",
      lead: "The museum charges admission; the Taman Fatahillah square in front of it does not. This page summarises reference tariffs and how to buy without treating the figures as guaranteed prices.",
      sections: [
        {
          heading: "Reference tariffs (not a final official price)",
          body: [
            "The national museum registry lists Rp10,000 on weekdays and Rp15,000 on weekends, checked on 19 October 2026. It does not separate visitor categories alongside those amounts.",
            "Do not assume the reference tariff is a fixed price for foreign visitors, children, students, or groups. A 2023 regional-government article lists Rp5,000; that is historical information, not confirmation of today’s tariff.",
          ],
          note: "Tariffs can change. Confirm your category, the current rate, and payment method at the ticket counter before buying.",
        },
        {
          heading: "How to buy",
          body: [
            "For this kind of regional-retribution museum, tickets are generally bought at the counter on arrival. Ask staff which payment methods (cash or non-cash) are accepted.",
            "This guide does not guarantee online purchase, discounts, exemptions, guide service, or any package.",
          ],
        },
        {
          heading: "The ticket is not for all of Kota Tua",
          body: [
            "The museum ticket only covers the Jakarta History Museum building. Taman Fatahillah square, other museums, bicycle rental, and open events have their own rules.",
          ],
        },
      ],
      faq: [
        { q: "How much are Jakarta History Museum tickets?", a: "The national registry lists Rp10,000 on weekdays and Rp15,000 on weekends (checked 19 October 2026) without category detail. Confirm your category’s rate and payment at the counter." },
        { q: "Is there free entry for children or students?", a: "This guide found no category breakdown in the reference source. Ask about concessions, discounts, or exemptions at the counter on arrival." },
        { q: "Can I buy tickets online?", a: "Open sources do not name a definite online channel. Assume counter purchase and confirm with the operator before travelling." },
      ],
      sources: museumSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "jam-buka",
    group: "visit",
    related: ["tiket", "nama", "durasi", "aksesibilitas"],
    id: {
      slug: "jam-buka",
      title: "Jam Buka Museum Sejarah Jakarta & Hari Libur",
      description: "Jam buka rujukan Museum Sejarah Jakarta, perbedaan sumber untuk akhir pekan, penutupan Senin, dan mengapa jam pengelola harus dikonfirmasi sebelum berangkat.",
      h1: "Jam Buka &<br /><em>Hari Libur</em>",
      lead: "Sumber yang tersedia tidak sepenuhnya sepakat soal jam tutup akhir pekan. Halaman ini merangkum catatan rujukan dan cara menghindari kejutan saat tiba.",
      sections: [
        {
          heading: "Catatan rujukan",
          body: [
            "Registri museum nasional mencantumkan Selasa–Jumat 09.00–15.00, Sabtu–Minggu 09.00–20.00, dan tutup Senin.",
            "Google Maps saat diperiksa 19 Oktober 2026 mencantumkan Selasa–Minggu 09.00–15.00 dan tutup Senin. Pangkalan data budaya yang lebih lama juga mencantumkan Selasa–Minggu 09.00–15.00.",
          ],
          note: "Sumber berbeda untuk jam tutup akhir pekan. Konfirmasikan kepada pengelola sebelum berangkat, terutama bila ingin datang setelah 15.00 atau pada hari libur.",
        },
        {
          heading: "Senin tutup",
          body: [
            "Ketiga sumber utama sepakat museum tutup pada Senin. Jika rencana jatuh pada Senin, gunakan hari itu untuk keliling lapangan Taman Fatahillah dan kawasan Kota Tua yang terbuka, bukan museum.",
          ],
        },
        {
          heading: "Jam berlaku hanya untuk museum",
          body: [
            "Jam di atas adalah jam museum. Lapangan Taman Fatahillah dan jalanan Kota Tua pada umumnya dapat diakses di luar jam museum, dengan catatan kegiatan malam tergantung acara setempat.",
          ],
        },
      ],
      faq: [
        { q: "Apakah Museum Sejarah Jakarta tutup Senin?", a: "Ya, sumber utama sepakat museum tutup Senin. Rencanakan kunjungan museum antara Selasa dan Minggu." },
        { q: "Jam buka akhir pekan berapa?", a: "Sumber berbeda: registri nasional mencantumkan sampai 20.00, sementara Maps dan pangkalan data budaya mencantumkan sampai 15.00. Konfirmasikan jam tutup sebenya kepada pengelola." },
        { q: "Apakah jam berlaku untuk Taman Fatahillah?", a: "Tidak. Lapangan adalah ruang terbuka di depan museum dan tidak mengikuti jam museum. Kegiatan di lapangan mengikuti aturan acara setempat." },
      ],
      sources: museumSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "opening-hours",
      title: "Jakarta History Museum Opening Hours & Closed Days",
      description: "Reference opening hours for Jakarta History Museum, conflicting weekend sources, Monday closure, and why you should confirm with staff before travelling.",
      h1: "Opening Hours &<br /><em>Closed Days</em>",
      lead: "The available sources do not fully agree on the weekend closing time. This page summarises reference notes and how to avoid surprises on arrival.",
      sections: [
        {
          heading: "Reference notes",
          body: [
            "The national museum registry lists Tuesday–Friday 09:00–15:00, Saturday–Sunday 09:00–20:00, and closed Monday.",
            "Google Maps checked on 19 October 2026 lists Tuesday–Sunday 09:00–15:00 and closed Monday. An older cultural database also lists Tuesday–Sunday 09:00–15:00.",
          ],
          note: "Sources disagree on the weekend closing time. Confirm with staff before travelling, especially if arriving after 15:00 or on a holiday.",
        },
        {
          heading: "Closed on Monday",
          body: [
            "All three main sources agree the museum is closed on Monday. If your plan lands on a Monday, spend it walking Taman Fatahillah square and the open parts of Kota Tua instead.",
          ],
        },
        {
          heading: "Hours apply to the museum only",
          body: [
            "The hours above are the museum’s. Taman Fatahillah square and Kota Tua streets are generally accessible outside museum hours, with evening activity depending on local events.",
          ],
        },
      ],
      faq: [
        { q: "Is Jakarta History Museum closed on Monday?", a: "Yes, the main sources agree the museum is closed on Monday. Plan your museum visit between Tuesday and Sunday." },
        { q: "What are the weekend opening hours?", a: "Sources differ: the national registry lists closing at 20:00, while Maps and the cultural database list 15:00. Confirm the actual closing time with staff." },
        { q: "Do these hours apply to Taman Fatahillah?", a: "No. The square is the open space in front of the museum and does not follow museum hours. Square activity follows local event rules." },
      ],
      sources: museumSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "nama",
    group: "visit",
    related: ["taman-fatahillah", "sejarah-kota", "jam-buka", "tiket"],
    id: {
      slug: "nama",
      title: "Nama & Cakupan: Museum, Fatahillah, Kota Tua",
      description: "Bedakan Museum Sejarah Jakarta, Museum Fatahillah, Taman Fatahillah, dan Kota Tua: nama, cakupan, dan aturan tiket atau jam yang berbeda agar tidak tertukar.",
      h1: "Nama &<br /><em>Cakupan</em>",
      lead: "Keempat nama ini sering dipakai bergantian, padahal merujuk pada tempat dengan aturan berbeda. Halaman ini memisahkan masing-masing agar rencana perjalanan tidak tertukar.",
      sections: [
        {
          heading: "Museum Sejarah Jakarta = Museum Fatahillah",
          body: [
            "Museum Sejarah Jakarta dan Museum Fatahillah adalah nama sama untuk satu gedung: mantan balai kota Batavia yang kini museum. Tiket dan jam berlaku untuk gedung ini.",
          ],
        },
        {
          heading: "Taman Fatahillah adalah lapangan",
          body: [
            "Taman Fatahillah adalah ruang terbuka di depan museum. Lapangan umumnya bebas masuk dan tidak mengikuti jam serta tiket museum; acara di lapangan memiliki aturan sendiri.",
          ],
        },
        {
          heading: "Kota Tua adalah kawasan",
          body: [
            "Kota Tua (Old Town) adalah kawasan bersejarah yang lebih luas, mencakup lapangan, museum lain, Kali Besar, dan jalanan sekitarnya. Mengatakan “ke Kota Tua” tidak berarti otomatis masuk museum.",
          ],
          note: "Gunakan pin museum untuk tujuan akhir perjalanan, bukan hanya nama kawasan, agar rute dan waktu lebih akurat.",
        },
      ],
      faq: [
        { q: "Apakah Museum Sejarah Jakarta sama dengan Museum Fatahillah?", a: "Ya, keduanya adalah nama sama untuk satu gedung museum. Taman Fatahillah adalah lapangan terbuka di depannya, bukan museum." },
        { q: "Apakah Taman Fatahillah berbayar?", a: "Lapangan umumnya bebas masuk. Tiket hanya berlaku untuk gedung museum; kegiatan khusus di lapangan mungkin memiliki aturan sendiri." },
        { q: "Apa bedanya Kota Tua dan museum?", a: "Kota Tua adalah kawasan historis luas; museum adalah satu gedung di dalamnya. Jam dan tiket museum tidak berlaku untuk seluruh kawasan." },
      ],
      sources: museumSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "names-scope",
      title: "Names & Scope: Museum, Fatahillah, Kota Tua",
      description: "Distinguish Jakarta History Museum, Museum Fatahillah, Taman Fatahillah and Kota Tua: names, scope, and different ticket or hour rules so plans do not get mixed up.",
      h1: "Names &<br /><em>Scope</em>",
      lead: "These four names are often used interchangeably, yet they refer to places with different rules. This page separates each so your itinerary does not get confused.",
      sections: [
        {
          heading: "Jakarta History Museum = Museum Fatahillah",
          body: [
            "Jakarta History Museum and Museum Fatahillah are two names for the same building: the former Batavia city hall, now a museum. Tickets and hours apply to this building.",
          ],
        },
        {
          heading: "Taman Fatahillah is the square",
          body: [
            "Taman Fatahillah is the open square in front of the museum. The square is generally free to enter and does not follow the museum’s hours or ticket; square events have their own rules.",
          ],
        },
        {
          heading: "Kota Tua is the district",
          body: [
            "Kota Tua (Old Town) is the wider historic district covering the square, other museums, Kali Besar, and surrounding streets. Saying “to Kota Tua” does not automatically mean entering the museum.",
          ],
          note: "Use the museum pin for your final destination rather than only the district name, so your route and timing stay accurate.",
        },
      ],
      faq: [
        { q: "Is Jakarta History Museum the same as Museum Fatahillah?", a: "Yes, they are two names for the same museum building. Taman Fatahillah is the open square in front of it, not the museum." },
        { q: "Is Taman Fatahillah paid?", a: "The square is generally free to enter. The ticket only covers the museum building; special square events may have their own rules." },
        { q: "What is the difference between Kota Tua and the museum?", a: "Kota Tua is a broad historic district; the museum is one building within it. Museum hours and tickets do not apply to the whole district." },
      ],
      sources: museumSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "stasiun-jakarta-kota",
    group: "visit",
    related: ["transjakarta", "taksi", "parkir", "rute-kota-tua"],
    id: {
      slug: "stasiun-jakarta-kota",
      title: "Dari Stasiun Jakarta Kota ke Museum & Fatahillah",
      description: "Rute jalan kaki dari Stasiun Jakarta Kota ke Museum Sejarah Jakarta dan Taman Fatahillah: pintu keluar, arah, kondisi trotoar, dan waktu tempuh perkiraan.",
      h1: "Dari Stasiun<br /><em>Jakarta Kota</em>",
      lead: "Stasiun Jakarta Kota (Beos) adalah gerbang kereta paling dekat ke Kota Tua. Dari sini, museum dan lapangan dapat dicapai dengan berjalan kaki pendek.",
      sections: [
        {
          heading: "Arah keluar dan rute",
          body: [
            "Keluar melalui sisi yang mengarah ke kawasan Kota Tua, lalu jalan ke arah barat/daya menyusuri Jalan Kali Besar atau Jalan Lada. Jarak dari halaman stasiun ke Taman Fatahillah umumnya sekitar 600–900 meter.",
            "Gunakan peta titik museum, bukan sekadar nama stasiun, untuk memastikan arah akhir. Kondisi trotoar bervariasi; siapkan waktu ekstra jika membawa kereta dorong atau koper.",
          ],
          note: "Angka jarak adalah perkiraan berjalan kaki, bukan jarak garis lurus. Waktu tempuh bergantung rute, keramaian, dan kondisi jalan.",
        },
        {
          heading: "Waktu tempuh",
          body: [
            "Jalan kaki santai dari stasiun ke lapangan biasanya 10–15 menit. Jika berhenti foto di Kali Besar, sediakan 20–30 menit.",
          ],
        },
        {
          heading: "Sebelum berangkat",
          body: [
            "Cek jadwal dan pintu keluar stasiun melalui operator kereta. Tanyakan akses tanpa tangga dan kondisi pejalan kaki kepada staf stasiun bila perlu.",
          ],
        },
      ],
      faq: [
        { q: "Berapa jauh Stasiun Jakarta Kota ke museum?", a: "Sekitar 600–900 meter berjalan kaki, tergantung rute. Waktu tempuh santai biasanya 10–15 menit." },
        { q: "Apakah aman jalan kaki dari stasiun?", a: "Rute melalui kawasan Kota Tua umumnya ramai di siang hari. Berjalanlah di trotoar dan waspada lalu lintas serta penyeberangan." },
        { q: "Stasiun mana yang paling dekat ke Kota Tua?", a: "Stasiun Jakarta Kota (Beos) adalah stasiun kereta paling dekat ke Museum Sejarah Jakarta dan Taman Fatahillah." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "jakarta-kota-station",
      title: "From Jakarta Kota Station to the Museum & Fatahillah",
      description: "Walking route from Jakarta Kota Station to Jakarta History Museum and Taman Fatahillah: exits, direction, pavement conditions, and estimated travel time.",
      h1: "From Jakarta<br /><em>Kota Station</em>",
      lead: "Jakarta Kota Station (Beos) is the nearest train gateway to Kota Tua. From here, the museum and square are a short walk.",
      sections: [
        {
          heading: "Exit and route",
          body: [
            "Leave through the side facing Kota Tua, then walk west/south-west along Kali Besar or Jalan Lada. The distance from the station forecourt to Taman Fatahillah is generally about 600–900 metres.",
            "Use the museum point on the map rather than only the station name to fix your final direction. Pavements vary; allow extra time with a stroller or luggage.",
          ],
          note: "Distances are walking estimates, not straight-line measurements. Travel time depends on route, crowds, and road conditions.",
        },
        {
          heading: "Travel time",
          body: [
            "A relaxed walk from the station to the square is usually 10–15 minutes. Allow 20–30 minutes if you stop for photos along Kali Besar.",
          ],
        },
        {
          heading: "Before you go",
          body: [
            "Check the train timetable and station exit with the rail operator. Ask station staff about step-free access and pedestrian conditions if needed.",
          ],
        },
      ],
      faq: [
        { q: "How far is Jakarta Kota Station from the museum?", a: "About 600–900 metres on foot, depending on the route. A relaxed walk is usually 10–15 minutes." },
        { q: "Is it safe to walk from the station?", a: "The route through Kota Tua is generally busy in daylight. Use the pavement and watch traffic and crossings." },
        { q: "Which station is closest to Kota Tua?", a: "Jakarta Kota Station (Beos) is the nearest train station to Jakarta History Museum and Taman Fatahillah." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "transjakarta",
    group: "visit",
    related: ["stasiun-jakarta-kota", "taksi", "parkir", "jam-buka"],
    id: {
      slug: "transjakarta",
      title: "Naik TransJakarta ke Museum & Kota Tua",
      description: "Cara menggunakan TransJakarta ke Kota Tua: halte terdekat, jalan kaki penyambung, sumber rute resmi, dan tips agar tidak salah turun.",
      h1: "Naik<br /><em>TransJakarta</em>",
      lead: "TransJakarta membuka akses bus ke Kota Tua dari banyak titik Jakarta. Halaman ini menunjukkan halte terdekat dan jalan penyambung tanpa mengganti informasi resmi.",
      sections: [
        {
          heading: "Halte terdekat",
          body: [
            "Kota Tua dilayani halte TransJakarta di sekitar kawasan, termasuk halte yang berdekatan dengan lapangan dan stasiun kereta. Nama dan rute koridor dapat berubah, jadi cek melalui aplikasi atau situs resmi TransJakarta sebelum berangkat.",
          ],
          note: "Rute dan nama halte TransJakarta berubah dari waktu ke waktu. Konfirmasikan halte dan koridor aktif melalui sumber resmi operator.",
        },
        {
          heading: "Jalan penyambung",
          body: [
            "Dari halte, berjalanlah ke arah lapangan Taman Fatahillah. Jarak halte ke lapangan bervariasi; siapkan 5–15 menit berjalan kaki tergantung titik turun.",
          ],
        },
        {
          heading: "Tips naik",
          body: [
            "Gunakan kartu uang elektronik atau metode pembayaran yang diterima. Cek tarif, jadwal, dan titik turun melalui operator. Hindari mengandalkan ingatan rute saat jam sibuk.",
          ],
        },
      ],
      faq: [
        { q: "Halte TransJakarta mana yang ke Kota Tua?", a: "Kota Tua dilayani halte di sekitar kawasan. Nama dan koridor dapat berubah; cek aplikasi atau situs resmi TransJakarta sebelum berangkat." },
        { q: "Berapa lama jalan dari halte ke museum?", a: "Biasanya 5–15 menit berjalan kaki tergantung halte tempat Anda turun." },
        { q: "Apakah TransJakarta sampai ke depan museum?", a: "Tidak ada janji halte persis di depan pintu museum. Turun di halte Kota Tua terdekat lalu jalan kaki ke lapangan dan museum." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "transjakarta",
      title: "By TransJakarta to the Museum & Kota Tua",
      description: "How to use TransJakarta to Kota Tua: nearest stops, walking connections, official route sources, and tips to avoid getting off at the wrong place.",
      h1: "By<br /><em>TransJakarta</em>",
      lead: "TransJakarta opens bus access to Kota Tua from many parts of Jakarta. This page shows the nearest stops and walking links without replacing official information.",
      sections: [
        {
          heading: "Nearest stops",
          body: [
            "Kota Tua is served by TransJakarta stops around the district, including stops near the square and the train station. Names and corridor routes can change, so check the official TransJakarta app or site before travelling.",
          ],
          note: "TransJakarta stop names and corridors change over time. Confirm the active stop and corridor via the operator’s official source.",
        },
        {
          heading: "Walking connection",
          body: [
            "From the stop, walk toward Taman Fatahillah square. The stop-to-square distance varies; allow 5–15 minutes on foot depending on where you alight.",
          ],
        },
        {
          heading: "Riding tips",
          body: [
            "Use an electronic money card or accepted payment method. Check fare, schedule, and alighting point with the operator. Avoid relying on a memorised route during peak hours.",
          ],
        },
      ],
      faq: [
        { q: "Which TransJakarta stop goes to Kota Tua?", a: "Kota Tua is served by stops around the district. Names and corridors can change; check the official TransJakarta app or site before departure." },
        { q: "How long is the walk from the stop to the museum?", a: "Usually 5–15 minutes on foot depending on the stop where you alight." },
        { q: "Does TransJakarta stop right in front of the museum?", a: "No stop is promised exactly at the museum door. Alight at the nearest Kota Tua stop and walk to the square and museum." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "taksi",
    group: "visit",
    related: ["stasiun-jakarta-kota", "transjakarta", "parkir", "aksesibilitas"],
    id: {
      slug: "taksi",
      title: "Taksi & Ride-hailing ke Kota Tua",
      description: "Naik taksi atau ride-hailing ke Museum Sejarah Jakarta: titik jemput-turun, batasan lalu lintas, dan cara berjalan dari titik turun ke lapangan.",
      h1: "Taksi &<br /><em>Ride-hailing</em>",
      lead: "Taksi dan aplikasi ride-hailing praktis untuk keluarga atau cuaca buruk, tetapi titik turun di Kota Tua perlu dipilih agar tidak terjebak jalan satu arah.",
      sections: [
        {
          heading: "Titik turun",
          body: [
            "Pilih titik turun di sekitar Taman Fatahillah atau tepi kawasan Kota Tua. Jalan di dalam area sering searah dan ramai; turun sedekat mungkin dari tujuan akhir menghemat berjalan.",
          ],
          note: "Arus lalu lintas Kota Tua dapat padat dan searah. Konfirmasikan titik jemput-turun dengan pengemudi dan aplikasi.",
        },
        {
          heading: "Dari titik turun ke museum",
          body: [
            "Sebagian jalan Kota Tua khusus pejalan kaki atau dibatasi kendaraan. Dari titik turun, ikuti trotoar atau jalur pejalan kaki ke lapangan dan museum (umumnya <300 meter).",
          ],
        },
        {
          heading: "Tips",
          body: [
            "Untuk kembali, pesan dari titik yang sama atau titik jempat yang ditunjuk aplikasi; malam hari titik tunggu bisa terbatas.",
          ],
        },
      ],
      faq: [
        { q: "Di mana turun taksi paling dekat museum?", a: "Turun di tepi Taman Fatahillah atau sekitar Kota Tua, lalu jalan kaki ke museum. Hindari turun jauh di luar kawasan." },
        { q: "Apakah Kota Tua ramah kendaraan?", a: "Sebagian jalan searah dan ramai. Lebih mudah turun di tepi kawasan lalu berjalan kaki." },
        { q: "Bagaimana pesan ride-hailing pulang?", a: "Pesan dari titik turun atau titik jemput yang ditunjuk aplikasi; titik tunggu malam hari bisa terbatas." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "taxi-ride-hail",
      title: "Taxis & Ride-hailing to Kota Tua",
      description: "Taxis and ride-hailing to Jakarta History Museum: drop-off points, traffic limits, and how to walk from the drop-off to the square.",
      h1: "Taxis &<br /><em>Ride-hailing</em>",
      lead: "Taxis and ride-hailing apps are handy for families or bad weather, but the drop-off point in Kota Tua should be chosen to avoid one-way streets.",
      sections: [
        {
          heading: "Drop-off point",
          body: [
            "Choose a drop-off around Taman Fatahillah or the edge of Kota Tua. Streets inside the area are often one-way and busy; alighting as close as possible to your final destination saves walking.",
          ],
          note: "Kota Tua traffic can be congested and one-way. Confirm the pickup/drop-off point with the driver and the app.",
        },
        {
          heading: "From drop-off to the museum",
          body: [
            "Some Kota Tua streets are pedestrian-only or vehicle-restricted. From the drop-off, follow the pavement or pedestrian path to the square and museum (generally under 300 metres).",
          ],
        },
        {
          heading: "Tips",
          body: [
            "For the return trip, order from the same point or the app’s designated pickup; waiting points may be limited at night.",
          ],
        },
      ],
      faq: [
        { q: "Where is the closest taxi drop-off to the museum?", a: "Alight at the edge of Taman Fatahillah or around Kota Tua, then walk to the museum. Avoid alighting far outside the district." },
        { q: "Is Kota Tua car-friendly?", a: "Some streets are one-way and busy. It is easier to alight at the district edge and walk." },
        { q: "How do I order a ride back?", a: "Order from your drop-off point or the app’s designated pickup; night waiting points may be limited." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "parkir",
    group: "visit",
    related: ["taksi", "stasiun-jakarta-kota", "transjakarta", "aksesibilitas"],
    id: {
      slug: "parkir",
      title: "Parkir di Kota Tua & Sekitar Museum",
      description: "Catatan parkir Kota Tua: pilihan umum, batasan jalan, dan mengapa lokasi serta tarif harus dikonfirmasi saat kedatangan.",
      h1: "Parkir di<br /><em>Kota Tua</em>",
      lead: "Kota Tua memiliki beberapa pilihan parkir umum, tetapi lokasi, kapasitas, dan tarif berubah. Halaman ini memberi kerangka tanpa menjamin ketersediaan tempat.",
      sections: [
        {
          heading: "Pilihan umum",
          body: [
            "Pengunjung biasanya menggunakan lahan parkir umum atau tepi kawasan Kota Tua. Detail lokasi dan tarif sangat bervariasi dan sering berubah, terutama saat akhir pekan atau acara.",
          ],
          note: "Panduan ini tidak menjamin ketersediaan, lokasi, atau tarif parkir tertentu. Cek langsung saat kedatangan dan ikuti petunjuk pengelola lahan.",
        },
        {
          heading: "Kendaraan dan jalan",
          body: [
            "Sebagian jalan Kota Tua searah atau dibatasi. Jika membawa mobil, pilih parkir di tepi kawasan lalu lanjut berjalan kaki ke lapangan dan museum.",
          ],
        },
        {
          heading: "Alternatif tanpa mobil",
          body: [
            "Kereta (Stasiun Jakarta Kota) dan TransJakarta mengurangi repot parkir. Jika cuaca buruk atau bersama anak, taksi atau ride-hailing dengan titik turun dekat lapangan sering lebih mudah.",
          ],
        },
      ],
      faq: [
        { q: "Apakah ada parkir di depan museum?", a: "Tersedia lahan parkir umum di sekitar Kota Tua, tetapi lokasi dan tarif berubah. Konfirmasikan saat kedatangan." },
        { q: "Berapa tarif parkir Kota Tua?", a: "Tarif bervariasi dan tidak dijamin sama. Cek papan tarif resmi di lahan parkir yang Anda gunakan." },
        { q: "Lebih baik bawa mobil atau naik transportasi umum?", a: "Transportasi umum (kereta/TransJakarta) dan ride-hailing mengurangi repot parkir, terutama saat akhir pekan atau acara." },
      ],
      sources: areaSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "parking",
      title: "Parking at Kota Tua & Near the Museum",
      description: "Kota Tua parking notes: public options, street limits, and why location and fees must be confirmed on arrival.",
      h1: "Parking at<br /><em>Kota Tua</em>",
      lead: "Kota Tua has several public parking options, but location, capacity, and fees change. This page gives a framework without guaranteeing a space.",
      sections: [
        {
          heading: "Public options",
          body: [
            "Visitors typically use public parking lots or the edge of Kota Tua. Locations and fees vary widely and change often, especially on weekends or during events.",
          ],
          note: "This guide does not guarantee the availability, location, or fee of any particular parking. Check on arrival and follow the lot operator’s signs.",
        },
        {
          heading: "Vehicle and streets",
          body: [
            "Some Kota Tua streets are one-way or restricted. If driving, park at the district edge and walk to the square and museum.",
          ],
        },
        {
          heading: "Car-free alternatives",
          body: [
            "The train (Jakarta Kota Station) and TransJakarta reduce parking hassle. For bad weather or with children, a taxi or ride-hailing drop-off near the square is often easier.",
          ],
        },
      ],
      faq: [
        { q: "Is there parking in front of the museum?", a: "Public parking exists around Kota Tua, but locations and fees change. Confirm on arrival." },
        { q: "What is the Kota Tua parking fee?", a: "Fees vary and are not guaranteed. Check the official rate board at the lot you use." },
        { q: "Is driving or public transport better?", a: "Public transport (train/TransJakarta) and ride-hailing reduce parking hassle, especially on weekends or event days." },
      ],
      sources: areaSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "durasi",
    group: "visit",
    related: ["rute-2-jam", "wisata-setengah-hari", "jam-buka", "taman-fatahillah"],
    id: {
      slug: "durasi",
      title: "Berapa Lama Mengunjungi Museum & Fatahillah",
      description: "Perkiraan waktu kunjungan Museum Sejarah Jakarta dan Taman Fatahillah: pilihan 1, 2, dan 4 jam beserta yang bisa dilakukan di setiap rentang.",
      h1: "Berapa Lama<br /><em>Mengunjungi?</em>",
      lead: "Waktu yang dibutuhkan bergantung apakah Anda hanya melihat lapangan, masuk museum, atau menyusuri seluruh Kota Tua. Halaman ini memberi tiga opsi.",
      sections: [
        {
          heading: "1 jam — sekilas lapangan",
          body: [
            "Cocok jika hanya ingin melihat Taman Fatahillah, berfoto di depan museum, dan merasakan suasana Kota Tua tanpa masuk gedung.",
          ],
        },
        {
          heading: "2 jam — museum + lapangan",
          body: [
            "Sisihkan sekitar 60–90 menit untuk museum (tergantung antrean tiket dan ruang terbuka) dan sisanya untuk lapangan serta foto singkat di sekitarnya.",
          ],
        },
        {
          heading: "4 jam — Kota Tua lebih luas",
          body: [
            "Tambahkan keliling Kali Besar, satu atau dua museum lain di sekitar lapangan, dan istirahat kafe. Ini memberi gambaran historis kawasan secara utuh.",
          ],
          note: "Waktu nyata bergantung antrean, cuaca, dan hari libur. Senin museum tutup, jadi rencana 4 jam hari itu lebih cocok untuk lapangan dan kawasan terbuka.",
        },
      ],
      faq: [
        { q: "Berapa lama di dalam museum?", a: "Kunjungan museum umumnya 60–90 menit, tergantung antrean tiket dan ruang yang terbuka hari itu." },
        { q: "Apakah 1 jam cukup untuk Kota Tua?", a: "Cukup untuk sekilas lapangan dan foto, tetapi tidak untuk masuk museum atau museum lain." },
        { q: "Bagaimana jika Senin?", a: "Museum tutup Senin. Gunakan hari itu untuk lapangan dan kawasan terbuka, atau pilih rute setengah/penuh hari tanpa museum." },
      ],
      sources: museumSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "how-long",
      title: "How Long to Visit the Museum & Fatahillah",
      description: "Visit-time estimates for Jakarta History Museum and Taman Fatahillah: 1-, 2-, and 4-hour options with what fits in each window.",
      h1: "How Long<br /><em>to Visit?</em>",
      lead: "Time needed depends on whether you only see the square, enter the museum, or explore all of Kota Tua. This page offers three options.",
      sections: [
        {
          heading: "1 hour — a glimpse of the square",
          body: [
            "Good if you only want to see Taman Fatahillah, photograph the museum front, and feel Kota Tua without entering the building.",
          ],
        },
        {
          heading: "2 hours — museum + square",
          body: [
            "Allow about 60–90 minutes for the museum (depending on ticket queues and open rooms) and the rest for the square and a short photo walk around it.",
          ],
        },
        {
          heading: "4 hours — wider Kota Tua",
          body: [
            "Add a walk along Kali Besar, one or two other museums near the square, and a café break. This gives a fuller picture of the historic district.",
          ],
          note: "Real time depends on queues, weather, and holidays. The museum is closed on Monday, so a 4-hour Monday plan suits the square and open district better.",
        },
      ],
      faq: [
        { q: "How long is the museum itself?", a: "A museum visit is generally 60–90 minutes, depending on ticket queues and rooms open that day." },
        { q: "Is 1 hour enough for Kota Tua?", a: "Enough for a glimpse of the square and photos, but not for entering the museum or other museums." },
        { q: "What if it is Monday?", a: "The museum is closed on Monday. Use that day for the square and open district, or pick a half/full-day route without the museum." },
      ],
      sources: museumSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },

  {
    key: "aksesibilitas",
    group: "visit",
    related: ["tiket", "jam-buka", "taksi", "parkir"],
    id: {
      slug: "aksesibilitas",
      title: "Aksesibilitas & Kereta Dorong di Museum",
      description: "Catatan aksesibilitas Museum Sejarah Jakarta: lantai, tangga, pintu masuk, toilet, dan mengapa fasilitas tertentu harus dikonfirmasi ke staf.",
      h1: "Aksesibilitas &<br /><em>Kereta Dorong</em>",
      lead: "Gedung museum adalah bangunan kolonial bersejarah dengan beberapa tangga dan ambang. Halaman ini merangkum apa yang perlu ditanyakan, bukan menjamin akses penuh.",
      sections: [
        {
          heading: "Bangunan bersejarah",
          body: [
            "Sebagai bekas balai kota kolonial, gedung memiliki tangga, ambang, dan lantai tidak rata yang umum pada bangunan tua. Akses tanpa tangga mungkin tidak tersedia di semua ruangan.",
          ],
          note: "Panduan ini tidak menjamin akses ke setiap ruangan atau toilet khusus. Tanyakan rute tanpa tangga dan fasilitas disabilitas kepada staf saat kedatangan.",
        },
        {
          heading: "Kereta dorong & anak",
          body: [
            "Lapangan Taman Fatahillah rata dan ramah kereta dorong. Di dalam museum, dorong kereta bisa sulit pada tangga; tanyakan titik masuk dan lift kepada petugas.",
          ],
        },
        {
          heading: "Toilet & istirahat",
          body: [
            "Fasilitas toilet umum ada di sekitar kawasan, tetapi lokasi dan kondisi bervariasi. Siapkan waktu untuk mencari dan konfirmasikan kepada staf atau penjaga kawasan.",
          ],
        },
      ],
      faq: [
        { q: "Apakah museum ramah kursi roda?", a: "Bangunan kolonial memiliki tangga dan ambang. Tanyakan rute tanpa tangga dan ketersediaan fasilitas disabilitas kepada staf." },
        { q: "Boleh bawa kereta dorong?", a: "Lapangan rata dan ramah kereta dorong; di dalam museum bisa sulit pada tangga. Tanyakan titik masuk kepada petugas." },
        { q: "Di mana toilet?", a: "Fasilitas toilet umum ada di sekitar Kota Tua, tetapi lokasi bervariasi. Konfirmasikan kepada staf atau penjaga kawasan." },
      ],
      sources: museumSources("id"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
    en: {
      slug: "accessibility",
      title: "Accessibility & Strollers at the Museum",
      description: "Jakarta History Museum accessibility notes: floors, stairs, entrance, toilets, and why specific facilities must be confirmed with staff.",
      h1: "Accessibility &<br /><em>Strollers</em>",
      lead: "The museum building is a historic colonial structure with some stairs and thresholds. This page summarises what to ask, rather than guaranteeing full access.",
      sections: [
        {
          heading: "Historic building",
          body: [
            "As a former colonial city hall, the building has stairs, thresholds, and uneven floors common to old structures. Step-free access may not exist in every room.",
          ],
          note: "This guide does not guarantee access to every room or a dedicated toilet. Ask staff about step-free routes and disability facilities on arrival.",
        },
        {
          heading: "Strollers & children",
          body: [
            "Taman Fatahillah square is flat and stroller-friendly. Inside the museum, a stroller can be difficult on stairs; ask staff about the entrance point and lift.",
          ],
        },
        {
          heading: "Toilets & rest",
          body: [
            "Public toilets exist around the district, but location and condition vary. Allow time to find them and confirm with staff or area attendants.",
          ],
        },
      ],
      faq: [
        { q: "Is the museum wheelchair-friendly?", a: "The colonial building has stairs and thresholds. Ask staff about step-free routes and disability facilities." },
        { q: "Can I bring a stroller?", a: "The square is flat and stroller-friendly; inside the museum it can be hard on stairs. Ask staff about the entrance point." },
        { q: "Where are the toilets?", a: "Public toilets exist around Kota Tua, but locations vary. Confirm with staff or area attendants." },
      ],
      sources: museumSources("en"),
      updated: "2026-10-28",
      checked: "2026-10-19",
    },
  },
];
