const assetBase = import.meta.env.BASE_URL;
const img = (name) => `${assetBase}img/${name}`;

export const projects = [
  {
    slug: "project-one",
    year: "2023",
    category: "academic",
    tags: ["HTML", "CSS", "JavaScript", "Figma", "MySQL", "PHP"],
    cover: img("fiction1.png"),
    gallery: [img("fiction2.png"), img("fiction3.png")],
    links: {
      live: "",
      repo: "https://github.com/lucas-cecon/Fiction-Corporation",
    },
  },
  {
    slug: "second-project",
    year: "2024",
    category: "academic",
    tags: ["HTML", "CSS", "JavaScript", "MySQL", "PHP", "JSON"],
    cover: img("komodo1.png"),
    gallery: [img("komodo2.png"), img("komodo3.png"), img("komodo4.png")],
    links: { live: "", repo: "" },
  },
  {
    slug: "third-project",
    year: "2024",
    category: "academic",
    tags: ["JavaScript", "Tailwind CSS", "PHP(Laravel)", "MySQL", "JSON"],
    cover: img("tcc1.png"),
    gallery: [img("tcc2.png"), img("tcc3.png"), img("tcc4.png")],
    links: { live: "", repo: "https://github.com/lucas-cecon/SecretariaTCC" },
  },
  {
    slug: "fourth-project",
    year: "2025",
    category: "academic",
    tags: ["HTML", "CSS", "JavaScript", "PostgreSQL", "Node.js"],
    cover: img("inpe1.png"),
    gallery: [
      img("inpe2.png"),
      img("inpe3.png"),
      img("inpe4.png"),
      img("inpe5.png"),
    ],
    links: { live: "", repo: "https://github.com/NightHawksDevelopers/ABP-1" },
  },
  {
    slug: "fifth-project",
    year: "2026",
    category: "personal",
    tags: ["React", "Tailwind CSS"],
    cover: img("portfolio.png"),
    gallery: [img("portfolio2.png"), img("portfolio3.png")],
    links: {
      live: "https://fatec-jacarei-dsm-portfolio.github.io/ra2581392523022/",
      repo: "https://github.com/lucas-cecon/portfolio",
    },
  },
  {
    // MATRIZ FOGO
    slug: "sixth-project",
    year: "2026",
    category: "academic",
    tags: ["Python"],
    cover: img("incendio.png"),
    gallery: [img("incendio2.png")],
    links: {
      live: "#",
      repo: "#",
    },
  },
  {
    // JOGO
    slug: "seventh-project",
    year: "2026",
    category: "academic",
    tags: ["HTML", "CSS", "JS"],
    cover: img("ocean.png"),
    gallery: [img("ocean2.png"), img("ocean3.png")],
    links: {
      live: "https://vitaixs.github.io/Ocean-Cleaner-JS/",
      repo: "https://github.com/Vitaixs/Ocean-Cleaner-JS",
    },
  },
  {
    // BD
    slug: "eighth-project",
    year: "2026",
    category: "academic",
    tags: ["TypeScript"],
    cover: img("bd.png"),
    gallery: [img("bd2.png"), img("bd3.png")],
    links: {
      live: "#",
      repo: "https://github.com/Gustavo-Zago/Mini_BD_QuickSort",
    },
  },
  {
    slug: "ninth-project",
    year: "2026",
    category: "academic",
    tags: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Docker"],
    cover: img("bot1.png"),
    gallery: [img("bo2.png"), img("bot3.png")],
    links: {
      live: "https://youtu.be/KwbX6P7E774",
      repo: "https://github.com/lucas-cecon/FATEC-JCR-2DSM-BDR-2026-1-LucasCecon",
    },
  },
];
