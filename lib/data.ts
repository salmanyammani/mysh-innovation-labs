/* Content for the marketing site. Ported from the Agency starter's data.jsx. */

export type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

export type TeamMember = {
  name: string;
  img: string;
};

export type Brand = {
  name: string;
  logo: string;
  active?: boolean;
};

export type Project = {
  title: string;
  date: string;
  tags: string[];
  image: string;
};

export type Milestone = {
  value: string;
  label: string;
};

export const users = [
  "/images/user-1.png",
  "/images/user-2.png",
  "/images/user-3.png",
];

export const teamMembers: TeamMember[] = [
  { name: "Member 1", img: "/images/user-4.png" },
  { name: "Member 2", img: "/images/user-2.png" },
  { name: "Member 3", img: "/images/user-1.png" },
];

export const services: Service[] = [
  {
    id: "01.",
    title: "Brand Identity",
    description:
      "We specialize in crafting unique brand identities that resonate with audiences. Our expertise lies in understanding the essence of your brand and translating it into compelling visuals and narratives.",
    tags: [
      "Graphic Design",
      "Brand Name",
      "Logo Design",
      "Package Design",
      "Typography",
      "Color Scheme",
      "Voice and Tone",
    ],
  },
  {
    id: "02.",
    title: "UI/UX Design",
    description:
      "We create intuitive digital experiences that delight users and drive results. Our process involves deep research, wireframing, and high-fidelity prototyping to ensure seamless interaction.",
    tags: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Mobile App Design",
      "Web Design",
    ],
  },
  {
    id: "03.",
    title: "Development",
    description:
      "Bringing designs to life with clean, scalable code. We build robust web and mobile applications using modern technologies and best practices to ensure peak performance.",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Full-stack",
      "API Integration",
      "Performance",
    ],
  },
];

export const servicesPlaceHolderImage =
  "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const brands: Brand[] = [
  { name: "coinbase", logo: "(coinbase)" },
  { name: "slack", logo: "(slack)", active: true },
  { name: "coinbase", logo: "(coinbase)" },
  { name: "spotify", logo: "(spotify)" },
];

export const miniPlaceHolderImage =
  "https://images.unsplash.com/photo-1660490987070-b7cc89e41b38?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const ourTeamImagePlaceHolder =
  "https://images.unsplash.com/photo-1646038572819-7fc51f66a979?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const projects: Project[] = [
  {
    title: "Chat Genius",
    date: "(2024 — Still on going)",
    tags: ["Website Design", "Development"],
    image:
      "https://images.unsplash.com/photo-1741348571852-fabd00511e92?q=80&w=629&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Field Type",
    date: "(2023 — Jan 2025)",
    tags: ["Branding", "Social Media"],
    image:
      "https://images.unsplash.com/photo-1604076984203-587c92ab2e58?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const milestones: Milestone[] = [
  { value: "15+", label: "Years of Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "20+", label: "Clients Worldwide" },
  { value: "100%", label: "Customer Satisfaction" },
];

export const navigateLinks = [
  "Home",
  "Projects",
  "Service",
  "About",
  "Contact",
];
export const socialLinks = ["Instagram", "Twitter (X)", "LinkedIn", "Dribbble"];

export const starIconPathDrawing =
  "M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z";

export const iconPathDrawing =
  "M12 2L15 9H9L12 2ZM12 22L9 15H15L12 22ZM2 12L9 9V15L2 12ZM22 12L15 15V9L22 12Z";
