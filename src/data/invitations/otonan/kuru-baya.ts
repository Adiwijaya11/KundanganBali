import type { InvitationData } from "@/types/invitation";

export const kuruBayaInvitation: InvitationData = {
  slug: "kuru-baya",
  category: "otonan",
  themeLabel: "Tiga Oton",
  hero: {
    greeting: "Om Swastiastu",
    subtitle: "Undangan Upacara Tiga Oton",
    displayTitle: "I Made Kurubaya",
    subline: "Upacara Otonan ke-3 (Tiga Oton)",
    coverImage: "/images/otonan/kuru-baya/hero.jpg",
    coverImageAlt: "Foto I Made Kurubaya mengenakan busana adat Bali putih dengan udeng",
    caption: "Tiga Oton · 25 November 2026",
    dateLocationSummary:
      "Rabu, 25 November 2026 · 15:00 WITA · Pejeng Kelod, Bali",
    quoteHeading: "Doa & Harapan",
    quote: {
      text: "Semoga Ida Sang Hyang Widhi Wasa melimpahkan kesehatan, kebijaksanaan, serta umur panjang bagi sang buah hati.",
    },
  },
  milestones: {
    eyebrow: "Perjalanan Tumbuh Kembang",
    heading: "Menuju Tiga Oton I Made Kurubaya",
    description:
      "Tahapan upacara otonan adat Bali yang menandai tumbuh kembang sang buah hati hingga menginjak usia Tiga Oton (630 hari penanggalan Bali).",
    items: [
      {
        step: "01",
        age: "Otonan ke-1",
        title: "Upacara Otonan Pertama",
        dateLabel: "Usia 210 Hari",
        description:
          "Upacara otonan pertama sebagai ungkapan syukur atas kesehatan dan tumbuh kembang sang buah hati.",
      },
      {
        step: "02",
        age: "Otonan ke-2",
        title: "Upacara Otonan Kedua",
        dateLabel: "Usia 420 Hari",
        description:
          "Memohon keselamatan, keteduhan hati, serta perlindungan di usia dua oton penanggalan Bali.",
      },
      {
        step: "03",
        age: "Otonan ke-3",
        title: "Upacara Tiga Oton",
        dateLabel: "25 November 2026",
        description:
          "Peringatan tiga oton (630 hari) sebagai wujud rasa syukur dan permohonan doa restu keluarga.",
      },
    ],
  },
  events: {
    targetIsoDate: "2026-11-25T15:00:00+08:00",
    targetDisplay: "Rabu, 25 November 2026 · 15:00 WITA",
    dressCode: "Pakaian Adat Madya / Bebas Rapi",
    detailsSummary:
      "Upacara Tiga Oton (Otonan ke-3) dilaksanakan pada usia 630 hari penanggalan Bali sebagai wujud syukur serta permohonan keselamatan, kesehatan, dan kebijaksanaan bagi sang buah hati.",
    items: [
      {
        id: "otonan-ceremony",
        title: "Upacara Tiga Oton (Otonan ke-3)",
        date: "Rabu, 25 November 2026",
        time: "15:00 WITA - Selesai",
        venue: "Br. Bitra, Desa Patemon",
        address: "Br. Bitra, Desa Patemon, Pejeng Kelod, Gianyar, Bali",
        notes:
          "Prosesi natab banten otonan dan ramah tamah bersama keluarga serta kerabat.",
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
      src: "/images/otonan/kuru-baya/gallery-2.jpg",
      alt: "Potret I Made Kurubaya mengenakan udeng Bali",
      title: "Momen Hangat",
      subtitle: "Kenangan 01",
      tiltClass: "-rotate-2 hover:rotate-0",
      direction: "left",
      imageClass: "object-[center_20%]",
    },
    {
      id: "foto-2",
      src: "/images/otonan/kuru-baya/hero.jpg",
      alt: "Potret I Made Kurubaya dalam busana adat Bali putih dan udeng",
      title: "Busana Adat",
      subtitle: "Kenangan 02",
      tiltClass: "rotate-2 hover:rotate-0 translate-y-2 sm:translate-y-4",
      direction: "right",
      imageClass: "object-[center_22%]",
    },
    {
      id: "foto-3",
      src: "/images/otonan/kuru-baya/gallery-3.jpeg",
      alt: "Potret I Made Kurubaya",
      title: "Senyum Manis",
      subtitle: "Kenangan 03",
      tiltClass: "rotate-1 hover:rotate-0",
      direction: "left",
      imageClass: "object-[center_20%]",
    },
    {
      id: "foto-4",
      src: "/images/otonan/kuru-baya/gallery-4.jpeg",
      alt: "Potret I Made Kurubaya",
      title: "Kasih Keluarga",
      subtitle: "Kenangan 04",
      tiltClass: "-rotate-2 hover:rotate-0 translate-y-2 sm:translate-y-4",
      direction: "right",
      imageClass: "object-[center_20%]",
    },
    {
      id: "foto-5",
      src: "/images/otonan/kuru-baya/gallery-5.jpeg",
      alt: "Potret I Made Kurubaya",
      title: "Ceria Pagi",
      subtitle: "Kenangan 05",
      tiltClass: "-rotate-1 hover:rotate-0",
      direction: "left",
      imageClass: "object-[center_20%]",
    },
    {
      id: "foto-6",
      src: "/images/otonan/kuru-baya/gallery-6.jpeg",
      alt: "Potret I Made Kurubaya",
      title: "Doa Restu",
      subtitle: "Kenangan 06",
      tiltClass: "rotate-2 hover:rotate-0 translate-y-2 sm:translate-y-4",
      direction: "right",
      imageClass: "object-[center_20%]",
    },
  ],
  closing: {
    title: "Matur Suksma",
    message:
      "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",
    blessing: "Om Shanti Shanti Shanti Om",
  },
  musicUrl: "/audio/otonan/kuru-baya.mp3",
};
