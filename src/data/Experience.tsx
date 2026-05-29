export type Experience = {
  date: string;
  company: string;
  role: string;
  type: string;
  tech: string[];
  accent: "blue" | "cyan" | "purple";
};

export const experiences: Experience[] = [
  {
    date: "Jun 2021 — Present · 5 yrs",
    company: "Vtimetech Inc.",
    role: "Software Developer",
    type: "Full-time",
    accent: "blue",
    tech: ["Codeigniter", "Laravel", "Springboot", "MySQL", "REST APIs", "Docker"],
  },
  {
    date: "Oct 2019 — Jun 2021 · 1 yr 8 mos",
    company: "Self-Employed",
    role: "Freelance Web Developer",
    type: "Freelance",
    accent: "cyan",
    tech: [
      "Laravel",
      "Livewire",
      "Blade",
      "jQuery",
      "Bootstrap",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    date: "Aug 2017 — Oct 2019 · 2 yrs 3 mos",
    company: "Corporate Holdings Management, Inc.",
    role: "IT Assistant / Full Stack Web Developer",
    type: "Full-time",
    accent: "purple",
    tech: [
      "Computer Hardware Troubleshooting",
      "IT Hardware Support",
      "PHP",
      "WordPress",
      "JavaScript",
      "AJAX",
      "jQuery",
      "CSS",
      "Bootstrap",
      "PhpMyAdmin",
      "Firebase",
      "MySQL",
      "Adobe Photoshop",
    ],
  },
];
