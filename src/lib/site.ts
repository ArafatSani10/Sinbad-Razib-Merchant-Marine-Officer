// Single source of truth for identity + contact details.
// Leave a social URL empty ("") to hide it from the site.
export const site = {
  name: "Sinbad Razib",
  legalName: "Mia Mohammad Razibul Islam",
  title: "Merchant Marine Officer",
  tagline: "Merchant Marine Officer and founder of Marine Animal Care.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: "Dhaka, Bangladesh",
  phone: "+880 1727-835974",
  phoneHref: "+8801727835974",
  whatsapp: "https://wa.me/8801727835974",
  emailPersonal: "contact@sinbadrazib.com",
  emailBusiness: "director@marineanimalcare.org",
  businessSite: "https://marineanimalcare.org",
  cv: "/cv/razibul islam cv (1).pdf",
  socials: {
    facebookProfile: "https://www.facebook.com/sinbad.razib",
    facebookPage: "", // TODO: paste Facebook page URL
    instagram: "",
    youtube: "",
    linkedin: "",
    x: "",
  },
};

export type RoleIcon = "anchor" | "press" | "shield" | "wheat" | "waves" | "users";
export type Role = {
  icon: RoleIcon;
  title: string;
  titleBn?: string;
  org: string;
  orgBn?: string;
  group: "Sea" | "Press" | "Public service" | "Conservation and associations";
};

// Taken from the official identity card.
export const roles: Role[] = [
  { icon: "anchor", group: "Sea", title: "Captain", org: "Merchant Marine Officer" },
  { icon: "press", group: "Press", title: "Chief Reporter", org: "Daily Vorer Khobor" },
  {
    icon: "shield",
    group: "Public service",
    title: "Joint Secretary General",
    titleBn: "যুগ্ম মহাসচিব",
    org: "Zia Cyber Force (ZCF)",
    orgBn: "জিয়া সাইবার ফোর্স",
  },
  {
    icon: "wheat",
    group: "Public service",
    title: "Joint Convener",
    titleBn: "যুগ্ম আহ্বায়ক",
    org: "Bangladesh Jatiyotabadi Krishak Dal, Dhaka Mahanagar Dakshin",
    orgBn: "বাংলাদেশ জাতীয়তাবাদী কৃষক দল, ঢাকা মহানগর দক্ষিণ",
  },
  {
    icon: "waves",
    group: "Conservation and associations",
    title: "Founder and Director",
    org: "Marine Animal Care",
  },
  {
    icon: "users",
    group: "Conservation and associations",
    title: "President",
    org: "Association of Maritime Professionals, Bangladesh",
  },
];

export const career = [
  {
    rank: "Chief Officer",
    entries: [
      { vessel: "MT Tiger 6", detail: "Crude oil tanker, Panama flag", company: "Canday Ship Management", period: "Apr 2025 – Oct 2025" },
    ],
  },
  {
    rank: "Second Officer",
    entries: [
      { vessel: "MT Shun Tai", detail: "Liberia flag", company: "Chemul Ship Management", period: "Nov 2022 – Jul 2023" },
      { vessel: "MT Beks Swan", detail: "Marshall Islands flag", company: "Bernhard Schulte Ship Management", period: "Jun 2022 – Jul 2022" },
      { vessel: "MT Ocean Autumn", detail: "Singapore flag", company: "", period: "Dec 2021 – May 2022" },
      { vessel: "MT Phoenix Star", detail: "VLCC, Thailand flag", company: "", period: "Feb 2021 – Sep 2021" },
    ],
  },
  {
    rank: "Third Officer",
    entries: [
      { vessel: "MT Omera Legacy", detail: "", company: "", period: "" },
      { vessel: "MT Omera Queen", detail: "", company: "", period: "" },
      { vessel: "MT Navarz", detail: "", company: "", period: "" },
      { vessel: "MT Queen 1", detail: "", company: "", period: "" },
    ],
  },
];


// From the CV and the previous site.
export const education = [
  { year: "2007", title: "SSC, Science", place: "Shailkupa Pilot High School" },
  { year: "2010", title: "HSC, Science", place: "Shailkupa Govt Degree College" },
  { year: "2012", title: "BMS, Nautical Science", place: "Bangladesh Marine Academy, Chittagong" },
];

export const skills = [
  "Maritime Safety and Compliance",
  "Crew Leadership and Training",
  "Crisis and Emergency Response",
  "Tanker Cargo Operations",
  "Bridge Resource Management",
  "Navigation",
];

export const dryDock = {
  vessels: [
    { type: "Aframax tanker", times: "2 times" },
    { type: "VLCC", times: "1 time" },
  ],
  places: ["Dubai", "China"],
};