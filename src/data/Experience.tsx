export type Experience = {
  company: string;
  role: string;
  type: string;
  date: string;
  tech: string[];
  experiences: string[];
  accent: "blue" | "cyan" | "purple";
};

export const experiences: Experience[] = [
  {
    company: "Vtimetech Inc.",
    role: "Software Developer",
    type: "Full-time",
    date: "Jun 2021 — Present · 5 yrs",
    tech: ["Codeigniter", "Laravel", "Springboot", "MySQL", "REST APIs", "Docker"],
    experiences: [
      "Maintained and enhanced legacy applications ensuring stability and performance.",
      "Designed and optimized RESTful APIs for business systems and integrations.",
      "Integrated third-party APIs enabling real-time bidirectional communication.",
      "Implemented financial features including transfer and wallet systems.",
      "Developed automated API tests using PHPUnit and Laravel Dusk.",
      "Collaborated with cross-functional teams for scalable solutions.",
      "Managed Docker environments for consistent deployments.",
      "Optimized MySQL databases for performance and integrity.",
      "Performed debugging, deployment, and production support.",
    ],
    accent: "blue",
  },
  {
    company: "Self-Employed",
    role: "Freelance Web Developer",
    type: "Freelance",
    date: "Oct 2019 — Jun 2021 · 1 yr 8 mos",
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
    experiences: [
      "Built custom web applications using Laravel and PHP technologies.",
      "Developed responsive UIs using Blade, Bootstrap, jQuery, and Livewire.",
      "Integrated REST APIs for business workflows.",
      "Managed MySQL, PostgreSQL, and MongoDB databases.",
      "Delivered end-to-end development from planning to deployment.",
    ],
    accent: "cyan",
  },
  {
    company: "Corporate Holdings Management, Inc.",
    role: "IT Assistant / Full Stack Web Developer",
    type: "Full-time",
    date: "Aug 2017 — Oct 2019 · 2 yrs 3 mos",
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
    experiences: [
      "Provided IT hardware support and troubleshooting.",
      "Developed web systems using PHP, JavaScript, WordPress, and MySQL.",
      "Built responsive UIs using Bootstrap, CSS, and jQuery.",
      "Managed databases and deployments via PhpMyAdmin.",
      "Assisted in graphic design using Adobe Photoshop.",
    ],
    accent: "purple",
  },
];
