const asset = (file) => `${import.meta.env.BASE_URL}images/${file}`;

export const speakers = [
  { name: "Aadeel Akhtar", title: "Founder & CEO, PSYONIC", desc: "Bionics entrepreneur behind the Ability Hand; MIT TR35 honoree and Shark Tank alum.", avatar: asset("speakers/aadeel.jpeg") },
  { name: "Simon Squibb", title: "Founder & CEO, HelpBnk", desc: "Serial entrepreneur and investor on a mission to help 10M people start businesses.", avatar: asset("speakers/simon.jpeg") },
  { name: "Wesley Tian", title: "Co-Founder & CEO, Aragon AI", desc: "Leads the AI headshot platform used by professionals and teams worldwide.", avatar: asset("speakers/wesley.jpeg") },
  { name: "Weilyn Chong", title: "Co-Founder & COO, swsh", desc: "Launched a social app...", avatar: asset("speakers/weilyn.jpeg") },
  { name: "Reese Wong", title: "Founder, ISSIA HK", desc: "Youth-led nonprofit...", avatar: asset("speakers/reese.png") },
  { name: "Sukone Hong", title: "Founder & General Partner, BlueBrown Partners", desc: "DeepTech investor...", avatar: asset("speakers/sukone.jpeg") },
  { name: "Fr. Philip Larrey, PhD", title: "Chairman, Humanity 2.0", desc: "Philosopher and Boston College professor...", avatar: asset("speakers/philip.jpeg") },
  { name: "Paul J. Kim", title: "Managing Director, CrimsonSherpa", desc: "Harvard and Columbia MBA graduate...", avatar: asset("speakers/paul.jpeg") },
  { name: "Danny Hwang", title: "Founder & CEO, NPX Point Avenue", desc: "West Point graduate...", avatar: asset("speakers/danny.jpeg") },
];

  