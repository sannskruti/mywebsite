import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/Ecowell.png";
import rmtdevImg from "@/public/Radiance.png";
import wordanalyticsImg from "@/public/webscrapper.png";
import reddit from "@/public/reddit.png";
import imageSearch from "@/public/imageSearch.png";
import todo from "@/public/ToDo.png";
import produce from "@/public/produce.png";




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
    title: "NBCUniversal, Boston (Remote)",
    // location: "Boston, MA (Remote)",
    designation:"SRE Intern",
    description:
      "Developed automation solutions using Ansible and GraphQL, and created a web app  with React.js achieving a 99% deployment time reduction.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2024 - Apr 2025",
  },
  {
    title: "Capgemini Netherlands, Amsterdam",
    // location: "Amsterdam",
    designation:"Software Engineer",
    description:
      "Streamlined CI/CD processes on Azure DevOps, developed an intake form dashboard and KYC use cases for financial services, achieving a 95% reduction in manual deployments.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2022 - Aug 2023",
  },
  {
    title: "Accenture, Pune, India",
    // location: "Pune, Maharashtra",
    designation:"Application Development Sr. Analyst",
    description:
      "Spearheaded the development of a pharmaceutical app with 5000+ products, delivering 20+ customizable features and enhancing onboarding UX, improving user flow by 40%.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2021 - May 2022",
  },
  {
    title: " Infosys Ltd, Pune/Mysore India",
    // location: "Pune, Maharashtra",
    designation:"Senior Systems Engineer",
    description:
      "Facilitated Scrum meetings, analyzed 50+ user requirements monthly, and developed 7+ low-code applications, boosting user story development by 50% and team productivity by 95%.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2018 - Jul 2021",
  },
] as const;

export const projectsData = [
  {
    title: "EcoWell",
    description:
      "Developed a nutritional analysis application that recommends recipes by scanning product barcodes.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Typescript","Redux"],
    imageUrl: corpcommentImg,
    link:"https://github.com/sannskruti/EcoWell"
  },
  {
    title: "Radiance",
    description:
      "Developed a Java application in NetBeans to track entrepreneur requests, integrating a database, Twilio SMS, and live performance reporting with SOLID principles.",
    tags: ["Java", "Netbeans", "Twilio", "DBo4", "Git"],
    imageUrl: rmtdevImg,
     link:"https://github.com/sannskruti/Radiance"
  },
  {
    title: "WordScrapper",
    description:
      "Developed a web-based word guessing game with user authentication, separate game states, and a user-friendly MVC design.",
    tags: ["Node.js", "Express.js", "HTML", "CSS", "JavaScript"],
    imageUrl: wordanalyticsImg, 
    link:"https://github.com/sannskruti/wordscrapper"
  },
  {
    title: "Reddit ModHub",
    description:
      "Spearheaded the 'ModHub' initiative to enhance moderation in the Reddit app, conducting 90+ user interviews, research, and competitive UX analysis.",
    tags: ["Figma", "User Research", "Competitive Analysis", "Prototyping"],
    imageUrl: reddit,
     link:"https://www.figma.com/proto/fk9BhyC1NcnaqeY1THAmUh/Protothon?type=design&node-id=136-9705&t=rHQ0WgmLNjGWdnrZ-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=136%3A9705"
  },
  {
    title: "Image Search App",
    description:
      "Developed an Image Search app enabling users to search, preview, and download images with seamless API integration and an intuitive interface.",
    tags: ["Node.js", "API", "HTML", "CSS", "JavaScript"],
    imageUrl: imageSearch,
     link:"https://github.com/sannskruti/ImageSearchApp"
  },
  {
    title: "Produce Pal",
    description:
      "Designed a user-centered mobile app for premium vegetable delivery, featuring a custom logo, user onboarding, and a sleek Figma-based design.",
    tags: ["Figma", "User Research", "Competitive Analysis", "Prototyping", "Mocqups"],
    imageUrl: produce,
     link:"https://www.figma.com/proto/HQh3RQ6pfyS9PZwf8oxxcJ/ProducePal?type=design&node-id=20-110&t=pJch1nLxurDYpWYt-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=20%3A110&prev-org-id=external-teams&show-proto-sidebar=1"
  },
  {
    title: "To Do List",
    description:
      "Created a user-friendly To-Do app with task management, reminders, and real-time synchronization using modern web technologies.",
    tags: ["Node.js", "API", "HTML", "CSS", "JavaScript"],
    imageUrl: todo,
     link:"https://github.com/sannskruti/To-doApp"
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Java",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "Redux",
  "GraphQL",
  "REST API",
  "MYSQL",
  "MongoDB",
  "Mongoose",
  "PostgreSQL",
  "Mendix ",
  "Azure",
  "AWS",
  "HTML",
  "CSS",
  "SASS",
  'Figma',
] as const;
