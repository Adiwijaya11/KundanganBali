export type PersonProfile = {
  fullName: string;
  shortName: string;
  childOrder: string;
  parents: string;
  origin?: string;
  instagram?: string;
};

export type CeremonyEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  notes?: string;
};

export type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  tiltClass?: string;
  direction?: "left" | "right";
  imageClass?: string;
};

export type MilestoneItem = {
  step: string;
  age: string;
  title: string;
  dateLabel: string;
  description: string;
};

export type InvitationData = {
  slug: string;
  category: "pernikahan" | "telubulanan";
  themeLabel: string;
  hero: {
    greeting: string;
    subtitle: string;
    displayTitle: string;
    subline: string;
    parentsLine?: string;
    coverImage: string;
    coverImageAlt: string;
    caption: string;
    dateLocationSummary: string;
    quoteHeading: string;
    quote: {
      text: string;
      source?: string;
    };
  };
  couple?: {
    nickname: string;
    groom: PersonProfile;
    bride: PersonProfile;
  };
  milestones?: {
    eyebrow: string;
    heading: string;
    description: string;
    items: MilestoneItem[];
  };
  events: {
    targetIsoDate: string;
    targetDisplay: string;
    dressCode?: string;
    detailsSummary?: string;
    items: CeremonyEvent[];
  };
  location: {
    venueName: string;
    address: string;
    mapsUrl: string;
    mapsEmbedUrl: string;
  };
  gallery: GalleryPhoto[];
  closing: {
    title: string;
    message: string;
    blessing: string;
    families?: string;
  };
  musicUrl?: string;
};
