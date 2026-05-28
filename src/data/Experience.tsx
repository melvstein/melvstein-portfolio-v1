export type Experience = {
  date: string;
  role: string;
  company: string;
  tech: string[];
  accent: "blue" | "cyan" | "purple";
};

export const experiences: Experience[] = [
  {
    date: "Jun 2021 — Present · 5 yrs",
    role: "Software Developer",
    company: "Vtimetech Inc.",
    accent: "blue",
    tech: ["Codeigniter", "Laravel", "Springboot", "MySQL", "REST APIs", "Docker"],
  },
  {
    date: "Oct 2019 — Jun 2021 · 1 yr 8 mos",
    role: "Freelance Web Developer",
    company: "Self-Employed",
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
    role: "IT Assistant / Full Stack Web Developer",
    company: "Corporate Holdings Management, Inc.",
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
