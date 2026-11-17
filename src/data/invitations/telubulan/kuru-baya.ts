import type { InvitationData } from "@/types/invitation";

export const kuruBayaInvitation: InvitationData = {
  slug: "kuru-baya",
  category: "telubulanan",
  themeLabel: "Telubulanan",
  hero: {
    greeting: "Om Swastiastu",
    subtitle: "Undangan Upacara Telubulanan",
    displayTitle: "I Made Kuru Baya",
    subline: "Upacara Telubulanan (105 Hari)",
    coverImage: "/images/telubulan/kuru-baya/hero.jpg",
    coverImageAlt: "Foto I Made Kuru Baya mengenakan busana adat Bali putih dengan udeng",
    caption: "Nelu Bulanin : 12 Agustus 2026",
    dateLocationSummary:
      "Rabu, 25 November 2026 · 09:00 WITA · Pejeng Kelod, Bali",
    quoteHeading: "Doa & Harapan",
    quote: {
      text: "Semoga Ida Sang Hyang Widhi Wasa melimpahkan kesehatan, kebijaksanaan, serta umur panjang bagi sang buah hati.",
    },
  },
  milestones: {
    eyebrow: "Perjalanan Tumbuh Kembang",
    heading: "105 Hari Pertama I Made Kuru Baya",
    description:
      "Tahapan upacara adat Bali yang menandai tumbuh kembang sang buah hati sejak lahir hingga usia tiga bulan.",
    items: [
      {
        step: "01",
        age: "Hari ke-1",
        title: "Kelahiran Sang Buah Hati",
        dateLabel: "12 Agustus 2026",
        description:
          "Kelahiran I Made Kuru Baya dengan selamat dan penuh sukacita bagi keluarga.",
      },
      {
        step: "02",
        age: "Usia 42 Hari",
        title: "Upacara Tutug Kambuhan",
        dateLabel: "23 September 2026",
        description:
          "Upacara penyucian ibu dan bayi setelah genap satu bulan tujuh hari penanggalan Bali.",
      },
      {
        step: "03",
        age: "Usia 105 Hari",
        title: "Upacara Telubulanan (Nelu Bulanin)",
        dateLabel: "25 November 2026",
        description:
          "Momen pertama sang buah hati menapakkan kaki ke tanah dan menerima doa restu keluarga.",
      },
    ],
  },
  events: {
    targetIsoDate: "2026-11-25T09:00:00+08:00",
    targetDisplay: "Rabu, 25 November 2026 · 09:00 WITA",
    dressCode: "Pakaian Adat Madya / Bebas Rapi",
    detailsSummary:
      "Upacara Telubulanan dilaksanakan saat bayi berusia 105 hari (3 bulan kalender Bali) sebagai permohonan keselamatan, kesehatan, serta momen pertama sang buah hati menapakkan kaki ke tanah.",
    items: [
      {
        id: "telubulanan-ceremony",
        title: "Upacara Telubulanan (Nelu Bulanin)",
        date: "Rabu, 25 November 2026",
        time: "09:00 WITA - Selesai",
        venue: "Br. Bitra, Desa Patemon",
        address: "Br. Bitra, Desa Patemon, Pejeng Kelod, Gianyar, Bali",
        notes:
          "Prosesi natab banten telubulanan dan ramah tamah bersama keluarga serta kerabat.",
      },
    ],
  },
  location: {
    venueName: "Br. Bitra, Desa Patemon, Pejeng Kelod",
    address: "Br. Bitra, Desa Patemon, Pejeng Kelod, Gianyar, Bali",
    mapsUrl:
      "https://www.google.com/maps?q=-8.520026206970215,115.3014144897461&z=17&hl=id",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=-8.520026206970215,115.3014144897461&z=17&hl=id&output=embed",
  },
  gallery: [
    {
      id: "foto-1",
      src: "/images/telubulan/kuru-baya/gallery-2.jpg",
      alt: "Potret I Made Kuru Baya mengenakan udeng Bali",
      title: "Momen Hangat",
      subtitle: "Kenangan 01",
      tiltClass: "-rotate-2 hover:rotate-0",
      direction: "left",
      imageClass: "object-[center_20%]",
    },
    {
      id: "foto-2",
      src: "/images/demo/gallery-2.jpg",
      alt: "Potret I Made Kuru Baya",
      title: "Senyum Manis",
      subtitle: "Kenangan 02",
      tiltClass: "rotate-2 hover:rotate-0 sm:translate-y-4",
      direction: "right",
    },
    {
      id: "foto-3",
      src: "/images/telubulan/kuru-baya/hero.jpg",
      alt: "Potret I Made Kuru Baya dalam busana adat Bali putih dan udeng",
      title: "Busana Adat",
      subtitle: "Kenangan 03",
      tiltClass: "rotate-1 hover:rotate-0",
      direction: "left",
      imageClass: "object-[center_25%]",
    },
    {
      id: "foto-4",
      src: "/images/demo/gallery-1.jpg",
      alt: "Potret I Made Kuru Baya",
      title: "Kasih Keluarga",
      subtitle: "Kenangan 04",
      tiltClass: "-rotate-2 hover:rotate-0 sm:translate-y-4",
      direction: "right",
      imageClass: "object-[center_40%]",
    },
  ],
  closing: {
    title: "Matur Suksma",
    message:
      "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",
    blessing: "Om Shanti Shanti Shanti Om",
  },
  musicUrl: "/audio/telubulan/kuru-baya.mp3",
};
