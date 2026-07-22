export const navLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/experience",
    name: "Experience",
  },
  {
    path: "/certifications",
    name: "Certifications",
  },
];

export const certifications = [
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    focus: "Cloud Fundamentals",
    icon: "aws",
    description:
      "Foundational knowledge of AWS Cloud concepts, core services, security, architecture, pricing, and support.",
  },
  {
    id: "scrum-foundation-professional",
    title: "Scrum Foundation Professional Certification (SFPC)",
    issuer: "CertiProf",
    focus: "Agile Delivery",
    icon: "scrum",
    description:
      "Foundational Scrum knowledge covering roles, events, artifacts, and agile product delivery principles.",
  },
  {
    id: "shopify-development-fundamentals",
    title: "Shopify Development Fundamentals",
    issuer: "Shopify",
    focus: "Shopify Development",
    icon: "shopify",
    description:
      "Core Shopify development concepts covering platform architecture, app workflows, integrations, and merchant-focused solutions.",
  },
  {
    id: "liquid-storefronts-theme-developers",
    title: "Liquid Storefronts for Theme Developers",
    issuer: "Shopify",
    focus: "Theme Development",
    icon: "shopify",
    description:
      "Liquid storefront development covering theme architecture, templates, sections, dynamic content, and storefront customization.",
  },
];

export const projects = [
  {
    id: "portfolio-v2",
    category: "Side Project",
    title: "v2",
    description:
      "A revamped version of my portfolio showcasing my skills and projects.",
    techstacks: ["Next.js", "Tailwind CSS", "Shadcn UI", "Sonner"],
    link: "https://github.com/rcortiz/v2",
  },
  {
    id: "scent-sense",
    category: "Shopify Custom App",
    title: "Scent Sense",
    description:
      "A fragrance discovery app with a custom scent profile builder, weighted quiz engine, and native storefront theme block.",
    techstacks: ["Remix", "TypeScript", "Polaris", "Shopify"],
    link: "https://github.com/rcortiz/scent-sense",
  },
  {
    id: "immortal-gg",
    category: "Side Project",
    title: "Immortal GG",
    description:
      "A real-time player ranking and statistics tracker built for the Dota 2 community.",
    techstacks: ["Next.js", "GraphQL", "Daisy UI", "Tailwind CSS"],
    link: "https://immortal-gg.vercel.app",
  },
  {
    id: "grab-express-mvp",
    category: "Shopify Custom App",
    title: "Grab Express MVP",
    description:
      "A same-day delivery app with an operations dashboard, booking and quote APIs, and real-time cart fee estimates.",
    techstacks: ["Remix", "TypeScript", "Polaris", "Shopify"],
    link: "https://github.com/rcortiz/ge-dashboard",
  },
];

export const experiences = [
  {
    id: "viseo-asia",
    company: "VISEO Asia",
    link: "https://asia.viseo.com/",
    role: "Software Engineer (React + Shopify) - Independent Contractor",
    year: "Jun 2025 - Present",
    location: "Cebu, Philippines",
    responsibility: [
      "Enhanced and maintained multi-market L'Occitane Shopify storefronts, supporting theme improvements, storefront fixes, localization updates, and client-specific feature requests across 14 regional Shopify stores.",
      "Developed and supported Shopify custom apps, middleware APIs, Python scripts, and Shopify Flow automations to improve internal workflows, third-party integrations, and operational efficiency.",
      "Implemented accessibility, cart, checkout, localization, and storefront enhancements, helping improve customer experience, release stability, and coordination across frontend, backend, and third-party systems.",
      "Projects handled: L'Occitane Shopify websites and Shopify custom apps including Locci Discounts, Product Hub, and Extensions.",
    ],
    techstacks: ["React", "Shopify", "JavaScript", "Python", "Shopify Flow"],
  },
  {
    id: "gma-new-media",
    company: "GMA New Media Inc.",
    link: "https://www.gmanmi.com/",
    role: "Software Engineer (React + Shopify)",
    year: "Sep 2023 - Apr 2026",
    location: "Manila, Philippines",
    responsibility: [
      "Built and delivered custom web applications, backend APIs, and MVP solutions for complex business integrations, improving operational workflows, third-party system connectivity, and overall platform functionality.",
      "Enhanced and maintained 3+ web applications by reviewing, configuring, and integrating third-party tools, ensuring they aligned with business requirements and worked smoothly with internal systems.",
      "Implemented frontend customizations, reusable components, dynamic content structures, and application enhancements using JavaScript, React, and backend API integrations, improving content flexibility, feature rollout speed, and long-term maintainability.",
      "Projects handled: Ayala Malls, Sureseats, Pet Express, Toy Kingdom, and Crate & Barrel Shopify websites.",
    ],
    techstacks: ["React", "Next.js", "Shopify", "Node.js", "JavaScript"],
  },
  {
    id: "medgrocer",
    company: "MedGrocer",
    link: "https://medgrocer.com/",
    role: "Software Engineer (React)",
    year: "Jan 2023 - Aug 2023",
    location: "Manila, Philippines",
    responsibility: [
      "Maintained and developed features for online pharmacy and clinic management platforms across 4 client accounts, improving system reliability and day-to-day platform usability.",
      "Resolved 150+ reported bugs and production issues, helping improve core workflows, user experience, and overall platform stability.",
      "Rebuilt a public-facing website using Next.js, Airtable CMS, GraphQL, and a custom component library, improving page load performance by approximately 45% and supporting better accessibility compliance aligned with WCAG 2.1 AA.",
      "Projects handled: MedGrocer, Accenture, Maxicare, and ePharmacy websites.",
    ],
    techstacks: ["React", "Next.js", "Airtable", "GraphQL", "Tailwind CSS"],
  },
];
