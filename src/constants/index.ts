import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  pinnacle,
  MIT,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  toDo29,
  weather29,
  crypto29,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "WEB",
    icon: web,
  },
  {
    title: "CLOUD",
    icon: mobile,
  },
  {
    title: "BACKEND",
    icon: backend,
  },
  {
    title: "AI/ML",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer",
    companyName: "Pinnacle India",
    icon: pinnacle,
    iconBg: "#E6DEDD",
    date: "January 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intern",
    companyName: "Pinnacle India",
    icon: pinnacle,
    iconBg: "#E6DEDD",
    date: "January 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Student",
    companyName: "MIT, Manipal",
    icon: MIT,
    iconBg: "#E6DEDD",
    date: "Auguest 2021 - June 2023",
    points: [
      "Developed strong soft skills, including communication, critical thinking, and time management, through academic and extracurricular activities.",
      "Contributed to open-source projects, expanding practical experience and building a global professional network",
      "Strong problem-solving skills developed through coursework and projects.",
      "Proficient in multiple programming languages, including Python, Java, C++, and JavaScript",
    ],
  },
  
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "toDo 29",
    description:
      "Web-based platform that allows users to add todo data to track and make their work productive",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      
    ],
    image: toDo29,
    sourceCodeLink: "https://todo29.vercel.app/",
  },
  {
    name: "weather 29",
    description:
      "WEB App built with React JS and open weather API. focused on providing weather information on provided location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "weatherAPI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather29,
    sourceCodeLink: "https://weather29.vercel.app/",
  },
  {
    name: "Crypto Tracker 29",
    description:
      "A dynamic website built with React JS and coinGecko API, focused on providing data on Trending Crypto currency.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "coingecoAPI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: crypto29,
    sourceCodeLink: "https://crypto29.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
