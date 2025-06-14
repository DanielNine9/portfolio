export interface Project {
  id: string;
  images: string[];
  title: string;
  team_size: number;
  description: string;
  repositories: {
    frontend: string | null;
    backend: string | null;
  };
  skills: {
    frontend: string[];
    backend: string[];
  };
  techStack: string[];
  deployment: {
    frontend: string | null;
    backend: string | null;
    database: string | null;
  };
  demoLink: string;
  note: string;
  startTime: string;
  endTime?: string | null;
  status: "Completed" | "In Progress";
}

export const projects: Project[] = [
  {
    id: "crown",
    images: ["/portfolio/img/crown_1.png", "/portfolio/img/crown_2.png"],
    title: "Crown",
    team_size: 1,
    description: "A perfume e-commerce platform designed for a friend, focusing on elegant UI and seamless user experience.",
    repositories: {
      frontend: "https://github.com/danielNine9/perfumeShopUI",
      backend: "https://github.com/DanielNine9/crown_be",
    },
    skills: {
      frontend: ["ReactJS", "HTML", "CSS", "JavaScript"],
      backend: ["Java", "Spring Boot"],
    },
    techStack: ["ReactJS", "Docker", "Spring Boot", "Redis", "PostgresQL", "MySQL", "Microservices", "Spring Cloud", "Keycloak", "Kafka", "Multi Module", "Spring Security"],
    deployment: {
      frontend: "Vercel",
      backend: "Cloudflare Tunnel",
      database: "Docker compose (MySQL, PostgresQL, Redis)",
    },
    demoLink: "https://perfume-shop-ui.vercel.app/",
    note: "This project is still in development and was designed for a friend.",
    startTime: "March 2025",
    endTime: null,
    status: "In Progress",
  },
  {
    id: "book-heaven",
    images: ["/portfolio/img/book_heaven_1.png", "/portfolio/img/book_heaven_2.png"],
    title: "Book Heaven",
    team_size: 1,
    description: "A web application for browsing and purchasing books online, featuring a user-friendly interface and robust backend.",
    repositories: {
      frontend: "https://github.com/DanielNine9/book_store_fe",
      backend: "https://github.com/DanielNine9/book_store_be",
    },
    skills: {
      frontend: ["ReactJS", "HTML", "CSS", "JavaScript"],
      backend: ["Golang", "Gin Framework"],
    },
    techStack: ["ReactJS", "Golang Gin", "PostgreSQL"],
    deployment: {
      frontend: "Vercel",
      backend: "Railway",
      database: "AivenCloud",
    },
    demoLink: "https://book-store-ui-mauve.vercel.app/",
    note: "This is my first project using the Gin framework for backend development.",
    startTime: "January 2025",
    endTime: "March 2025",
    status: "Completed",
  },
  {
    id: "car-manager",
    images: ["/portfolio/img/cars_1.png"],
    title: "Car Manager",
    team_size: 1,
    description: "A web application for managing car information, including details, pricing, and availability.",
    repositories: {
      frontend: "https://github.com/DanielNine9/car_management",
      backend: "https://github.com/DanielNine9/car_management",
    },
    skills: {
      frontend: ["ReactJS", "HTML", "CSS", "JavaScript"],
      backend: ["NestJS", "TypeScript"],
    },
    techStack: ["ReactJS", "NestJS", "PostgreSQL"],
    deployment: {
      frontend: "Vercel",
      backend: "OnRender",
      database: "Vercel",
    },
    demoLink: "https://car-manager-fm5o.vercel.app/",
    note: "My first full-stack project, built in 2023, with some known issues due to limited experience at the time.",
    startTime: "June 2023",
    endTime: "December 2023",
    status: "Completed",
  },
  {
    id: "talent-hub",
    images: ["/portfolio/img/talent_hub_1.png"],
    title: "Talent Hub",
    team_size: 5,
    description: "A dynamic job search platform designed to connect clients with freelancers, offering seamless job posting, talent discovery, and project management features.",
    repositories: {
      frontend: "https://github.com/tiendinh203/talenthub-UI",
      backend: "https://github.com/thanhtung795/FreelancerHub",
    },
    skills: {
      frontend: ["ReactJS", "HTML", "CSS", "JavaScript", "TypeScript"],
      backend: ["Spring Boot", "Java"],
    },
    techStack: ["ReactJS", "TypeScript", "Spring Boot", "MySQL", "WebSocket", "Redis", "OAuth 2.0"],
    deployment: {
      frontend: "Vercel",
      backend: "TryCloudflare",
      database: "Localhost (MySQL)",
    },
    demoLink: "https://talenthub.io.vn/",
    note: "The backend is hosted on TryCloudflare, which may result in occasional availability issues due to its tunneling nature.",
    startTime: "December 2024",
    endTime: null,
    status: "In Progress",
  },
  {
    id: "helpdesk-ai",
    images: ["/portfolio/img/helpdesk_1.png"],
    title: "Helpdesk AI",
    team_size: 5,
    description: "An AI-powered helpdesk platform designed to answer user queries, provide clear explanations, and enhance customer support experiences.",
    repositories: {
      frontend: null,
      backend: null,
    },
    skills: {
      frontend: ["ReactJS", "HTML", "CSS", "JavaScript"],
      backend: ["Django", "Django REST Framework", "Python"],
    },
    techStack: ["ReactJS", "Django REST Framework", "PostgreSQL"],
    deployment: {
      frontend: "Vercel",
      backend: "Cloudflare Tunnel",
      database: "Localhost (PostgreSQL)",
    },
    demoLink: "https://helpdesk-chatbot-ten.vercel.app/",
    note: "The backend is hosted via Cloudflare Tunnel, which may cause occasional availability issues due to its tunneling mechanism.",
    startTime: "January 2025",
    endTime: "April 2025",
    status: "Completed",
  },
];
