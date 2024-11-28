import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import corpcommentImg from "@/public/Ecowell.png";
import rmtdevImg from "@/public/Radiance.png";
import wordanalyticsImg from "@/public/webscrapper.png";
import reddit from "@/public/reddit.png";
import imageSearch from "@/public/imageSearch.png";
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
    title: "NBCUniversal, Boston MA (Remote)",
    designation:"Site Reliability Engineer Intern",
    description:
      "Developed automation solutions using Ansible and GraphQL, and created a web app  with React.js achieving a 99% deployment time reduction",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2024 - Apr 2025",
  },
  {
    title: "Capgemini Netherlands, Amsterdam",
    designation:"Software Engineer",
    description:
      "Deployed web applications using CI/CD on Azure DevOps, developed an intake form dashboard and KYC use cases for financial services, achieving a 95% reduction in manual deployments",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2022 - Aug 2023",
  },
  {
    title: "Accenture, Pune, India",
    designation:"Application Development Sr. Analyst",
    description:
      "Spearheaded the development of a pharmaceutical app with 5000+ products, delivering 20+ customizable features and enhancing onboarding UX, improving user flow by 92%",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2021 - May 2022",
  },
  {
    title: " Infosys Ltd, Pune & Mysore India",
    designation:"Senior Systems Engineer (promoted)",
    description:
      " Analyzed 50+ user requirements monthly, developed 7+ low-code applications, and facilitated scrum events, boosting user story development by 90%",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2018 - Jul 2021",
  },
] as const;

export const projectsData = [
  {
    title: "EcoWell",
    description:
      "A nutritional analysis application that recommends recipes by scanning product barcode id. It offers collaboration space and health profile analytics.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Google OAuth"],
    imageUrl: corpcommentImg,
    link:"https://github.com/sannskruti/EcoWell"
  },
  {
    title: "Radiance",
    description:
      "A resource tracker for entrepreneurs with SMS notifications and performance reporting to optimize workflows.",
    tags: ["Java", "Netbeans", "Twilio", "Git","SOLID design principles"],
    imageUrl: rmtdevImg,
     link:"https://github.com/sannskruti/Radiance"
  },
  {
    title: "WordScrapper",
    description:
      "A web-based word guessing game that provides a dictionary of 5-letter words to guess, tracks word matches, attempts, and overall progress.",
    tags: ["Node.js", "Express.js", "JavaScript","MVC","User authentication"],
    imageUrl: wordanalyticsImg, 
    link:"https://github.com/sannskruti/wordscrapper"
  },
  {
    title: "Reddit ModHub",
    description:
      "The 'ModHub' initiative to enhance moderation features in the Reddit app, conducting 90+ user interviews, research, and competitive UX analysis.",
    tags: [ "User Research", "Case-Study","Figma", "Prototyping","Competitive Analysis"],
    imageUrl: reddit,
     link:"https://www.figma.com/proto/fk9BhyC1NcnaqeY1THAmUh/Protothon?type=design&node-id=136-9705&t=rHQ0WgmLNjGWdnrZ-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=136%3A9705"
  },
  {
    title: "Image Search App",
    description:
      "An Image Search app that allows users to search, preview, and download images, featuring seamless API integration and a user-friendly interface.",
    tags: [ "REST- API","Node.js", "HTML", "CSS", "JavaScript"],
    imageUrl: imageSearch,
     link:"https://github.com/sannskruti/ImageSearchApp"
  },
  {
    title: "Produce Pal",
    description:
      "A user-focused mobile app for premium vegetable delivery, showcasing a custom logo, seamless user onboarding, and a sleek design created with Figma.",
    tags: ["Figma", "Prototyping","Product Research", "SWOT Analysis", "Mocqups"],
    imageUrl: produce,
     link:"https://www.figma.com/proto/HQh3RQ6pfyS9PZwf8oxxcJ/ProducePal?type=design&node-id=20-110&t=pJch1nLxurDYpWYt-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=20%3A110&prev-org-id=external-teams&show-proto-sidebar=1"
  },
  // {
  //   title: "To Do List",
  //   description:
  //     "Created a user-friendly To-Do app with task management, reminders, and real-time synchronization using modern web technologies.",
  //   tags: ["Node.js", "API", "HTML", "CSS", "JavaScript"],
  //   imageUrl: todo,
  //    link:"https://github.com/sannskruti/To-doApp"
  // },
] as const;

export const skillsData = [
  "Node.js",
  "React",
  "TypeScript", 
  "JavaScript",
  "GraphQL",
  "REST API",
  "Azure",
  "Ansible",
  "Express",
  "Git",
  "Java", 
  "Python",
  "MYSQL",
  "MongoDB",
  "Mongoose",
  "PostgreSQL",
  "Mendix ",
  "AWS",
  "HTML",
  "CSS",
  "SASS",
  'Figma',
] as const;
