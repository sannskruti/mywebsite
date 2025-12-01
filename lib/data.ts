import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import corpcommentImg from "@/public/Ecowell.png";
import webcrawl from "@/public/webcrawl.png";
import rmtdevImg from "@/public/Radiance.png";
import wordanalyticsImg from "@/public/webscrapper.png";
import reddit from "@/public/reddit1.png";
import imageSearch from "@/public/imageSearch.png";
import produce from "@/public/producepal.png";
import hand3D from "@/public/hand3d.png";
import nbculogo from "@/public/logos/image.png";
import capgeminiLogo from "@/public/logos/capgemini.png";
import accentureLogo from "@/public/logos/accenture.png";
import infosysLogo from "@/public/logos/infosys.png";
import crispLogo from "@/public/logos/CRISP.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "NBCUniversal, New York City, NY ",
    designation: "Software Engineer Co-op",
    description:
      "Developed automation solutions and created a web app  with React.js achieving a 99% deployment time reduction",
    icon: React.createElement("img", {
      src: nbculogo.src,
      alt: "NBCUniversal",
      className: "w-7 h-7 rounded-full object-cover",
    }),
    date: "Sep 2024 - Apr 2025",
  },
  {
    title: "Capgemini Netherlands, Amsterdam",
    designation: "Senior Consultant - Fintech",
    description:
      "Deployed web applications using CI/CD on Azure DevOps, developed an intake form dashboard and KYC use cases for financial services, achieving a 95% reduction in manual deployments",
    icon: React.createElement("img", {
      src: capgeminiLogo.src,
      alt: "capgeminiLogo",
      className: "w-7 h-7 rounded-full object-cover",
    }),
    date: "Jul 2022 - Aug 2023",
  },
  {
    title: "Accenture, Pune, India",
    designation: "Full Stack Application Sr. Developer",
    description:
      "Spearheaded the development of a pharmaceutical app with 70000+ products, delivering 20+ customizable features and enhancing onboarding UX, improving user flow by 92%",
    icon: React.createElement("img", {
      src: accentureLogo.src,
      alt: "accentureLogo",
      className: "w-7 h-7 rounded-full object-cover",
    }),
    date: "Jul 2021 - May 2022",
  },
  {
    title: " Infosys Ltd, Pune & Mysore India",
    designation: "Senior Systems Engineer - Fintech",
    description:
      " Analyzed 50+ user requirements monthly, developed 7+ low-code applications, and facilitated scrum events, boosting user story development by 90%",
    icon: React.createElement("img", {
      src: infosysLogo.src,
      alt: "infosysLogo",
      className: "w-7 h-7 rounded-full object-cover",
    }),
    date: "Nov 2018 - Jul 2021",
  },
  {
    title:
      "Centre for Research and Industrial Staff Performance (CRISP), Bhopal, India",
    designation: "PHP Web Development Intern",
    description:
      " developed dynamic web applications following MVC architecture principles for clean, maintainable code structure, designed RESTful APIs implementing OAuth and JWT authentication mechanisms.",
    icon: React.createElement("img", {
      src: crispLogo.src,
      alt: "crispLogo",
      className: "w-7 h-7 rounded-full object-cover",
    }),
    date: "Jan 2017 - Aug 2017",
  },
] as const;

export const projectsData = [
  {
    title: "EcoWell",
    description:
      "A nutritional analysis application that recommends recipes by scanning product barcode id. It offers collaboration space and health profile analytics.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Google OAuth"],
    imageUrl: corpcommentImg,
    link: "https://github.com/sannskruti/EcoWell",
  },
  {
    title: "WebKrawler",
    description:
      "The web crawler process the web pages using asynchronous processing. The crawler performs breadth-first traversal of web pages, calculates PageRank, and represents the results as a graph in a graph database.",
    tags: ["Spring Boot", "Java", "D3.js", "React", "Neo4j"],
    imageUrl: webcrawl,
    link: "https://github.com/sannskruti/WebCrawler",
  },

  {
    title: "WordScrapper",
    description:
      "A web-based word guessing game that provides a dictionary of 5-letter words to guess, tracks word matches, attempts, and overall progress.",
    tags: ["Node.js", "Express.js", "JavaScript", "MVC", "User authentication"],
    imageUrl: wordanalyticsImg,
    link: "https://github.com/sannskruti/wordscrapper",
  },
  {
    title: "Hand Tracking 3D Modelling",
    description:
      "Hand tracking for interactive manipulation of a 3D model in a web browser. The 3D model can be scaled, rotated, and moved based on hand gestures captured by a webcam.",
    tags: ["Tensorflow.js", "Three.js", "GSAP", "WebGL", "GLTFLoader"],
    imageUrl: hand3D,
    link: "https://github.com/sannskruti/3D_HandGestureRecognition",
  },
  {
    title: "Radiance",
    description:
      "A resource tracker for entrepreneurs with SMS notifications and performance reporting to optimize workflows.",
    tags: ["Java", "Netbeans", "Twilio", "Git", "SOLID design principles"],
    imageUrl: rmtdevImg,
    link: "https://github.com/sannskruti/Radiance",
  },
  {
    title: "Produce Pal",
    description:
      "A user-focused mobile app for premium vegetable delivery, showcasing a custom logo, seamless user onboarding, and a sleek design created with Figma.",
    tags: [
      "Figma",
      "Prototyping",
      "Product Research",
      "SWOT Analysis",
      "Mocqups",
    ],
    imageUrl: produce,
    link: "https://www.figma.com/proto/HQh3RQ6pfyS9PZwf8oxxcJ/ProducePal?type=design&node-id=20-110&t=pJch1nLxurDYpWYt-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=20%3A110&prev-org-id=external-teams&show-proto-sidebar=1",
  },

  {
    title: "Reddit ModHub",
    description:
      "The 'ModHub' initiative to enhance moderation features in the Reddit app, conducting 90+ user interviews, research, and competitive UX analysis.",
    tags: [
      "User Research",
      "Case-Study",
      "Figma",
      "Prototyping",
      "Competitive Analysis",
    ],
    imageUrl: reddit,
    link: "https://www.figma.com/proto/fk9BhyC1NcnaqeY1THAmUh/Protothon?type=design&node-id=136-9705&t=rHQ0WgmLNjGWdnrZ-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=136%3A9705",
  },

  {
    title: "Image Search App",
    description:
      "An Image Search app that allows users to search, preview, and download images, featuring seamless API integration and a user-friendly interface.",
    tags: ["REST- API", "Node.js", "HTML", "CSS", "JavaScript"],
    imageUrl: imageSearch,
    link: "https://github.com/sannskruti/ImageSearchApp",
  },
] as const;

export const skillsData = [
  "Node.js",
  "Express",
  "React",
  "Redux",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Spring Boot",
  "Java",
  "Python",
  "Fast API",
  "REST API",
  "GraphQL",
  "AWS",
  "Azure",
  "GCP",
  "Docker",
  "Kubernetes",
  "Git",
  "SVN",
  "Redis",
  "Kafka",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Mongoose",
  "Neo4j",
  "Mendix ",
  "JIRA",
  "ServiceNow",
  "Postman",
  "Confluence",
  "HTML5",
  "CSS3",
  "SCSS",
  "Figma",
] as const;
