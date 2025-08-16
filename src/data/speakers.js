// src/data/speakers.js
const asset = (file) => `${import.meta.env.BASE_URL}images/${file}`;

export const speakersIntro =
  "MLV students have learned from founders, executives, and industry experts including:";

export const speakers = [
  {
    name: "Aadeel Akhtar",
    title: "Founder & CEO, PSYONIC",
    desc: "Creator of the Ability Hand; MIT TR35 honoree and Shark Tank alum.",
    avatar: asset("speakers/aadeel.webp"),
  },
  {
    name: "Simon Squibb",
    title: "Founder & CEO, HelpBnk",
    desc: "Serial entrepreneur and angel investor building a platform to help 10M people start businesses.",
    avatar: asset("speakers/simon.webp"),
  },
  {
    name: "Wesley Tian",
    title: "Co-Founder & CEO, Aragon AI",
    desc: "Leads the AI headshot platform used by professionals and teams worldwide.",
    avatar: asset("speakers/wesley.webp"),
  },
  {
    name: "Weilyn Chong",
    title: "Co-Founder & COO, swsh",
    desc: "Princeton graduate and Nasdaq Entrepreneurial Center board member building tech for stronger relationships.",
    avatar: asset("speakers/weilyn.webp"),
  },
  {
    name: "Reese Wong",
    title: "Founder, ISSIA HK",
    desc: "Youth-led nonprofit leader advancing global citizenship education; 100+ talks delivered worldwide.",
    avatar: asset("speakers/reese.webp"),
  },
  {
    name: "Sukone Hong",
    title: "Founder & GP, BlueBrown Partners",
    desc: "DeepTech investor and repeat founder; built a $3M fashion brand and raised $1M for wearable hardware.",
    avatar: asset("speakers/sukone.webp"),
  },
  {
    name: "Fr. Philip Larrey, PhD",
    title: "Chairman, Humanity 2.0",
    desc: "Boston College professor and philosopher focused on AI ethics and technology’s impact on society.",
    avatar: asset("speakers/philip.webp"),
  },
  {
    name: "Paul J. Kim",
    title: "Managing Director, CrimsonSherpa",
    desc: "Harvard and Columbia MBA graduate; consultant guiding clients to top universities and Fortune 500 careers.",
    avatar: asset("speakers/paul.webp"),
  },
  {
    name: "Danny Hwang",
    title: "Founder & CEO, NPX Point Avenue",
    desc: "Leading a $12M-funded EdTech company delivering international-level education in Southeast Asia.",
    avatar: asset("speakers/danny.webp"),
  },
];
