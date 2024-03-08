import {
  python,
  pythonlogo,
  jindalsteel,
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
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  datascience,
  softwaredeveloper,
  ml,
  c,
  autoelites,
  chatapp,
  foodibytes,
  portfolio,
  leukocyte,
  animerecom,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    alt: "Web Developer",
  },
  {
    title: "Backend Developer",
    icon: backend,
    alt: "Backend Developer",
  },
  {
    title: "Python Developer",
    icon: python,
    alt: "Python Developer",
  },
  {
    title: "Data Analyst",
    icon: datascience,
    alt: "Data Analyst",
  },
  {
    title: "Software Develeoper",
    icon: softwaredeveloper,
    alt: "Software Developer",
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
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
    name: "Python",
    icon: pythonlogo,
  },
  {
    name: "Machine Learning",
    icon: ml,
  },
  {
    name: "c",
    icon: c,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Jindal Steel and Power",
    icon: jindalsteel,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developed a robust and user-friendly JSPL Rake Movement system, using React.js, enabling seamless tracking and management of rakes.",
    ],
  },
];

const testimonials = [
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

const projects = [
  {
    name: "AUTOELITES",
    description:
      "Our group project is focused on creating a highly efficient and user-friendly website that streamlines the car buying and selling process, ensuring a seamless experience for all users.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Oracle-10g",
        color: "green-text-gradient",
      },
      {
        name: "Tomcat-server",
        color: "pink-text-gradient",
      },
    ],
    image: autoelites,
    source_code_link: "https://github.com/sahiltapu/AUTOELITES",
  },
  {
    name: "CHAT APP",
    description:
      "Developed a feature-rich chat application using MERN stack, incorporating Material UI, Daisy UI, Aceternity UI for frontend, Zustand for state management, and MongoDB for robust data storage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/sahiltapu/Chat_App",
  },
  {
    name: "FOODI-BYTES",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "daisyUI",
        color: "pink-text-gradient",
      },
      {
        name: "acenityUI",
        color: "green-text-gradient",
      },
    ],
    image: foodibytes,
    source_code_link: "https://github.com/sahiltapu/Foodie-Bites",
  },
  {
    name: "PORTFOLIO",
    description:
      "Crafted an impressive portfolio with seamless user experience using React, enhanced with the sleek design of Tailwind CSS, and powered by the dynamic components of AcenityUI, DaisyUI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "daisyUI",
        color: "pink-text-gradient",
      },
      {
        name: "acenityUI",
        color: "green-text-gradient",
      },
      {
        name: "three-js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/sahiltapu/SAHIL-PORTFOLIO",
  },
  {
    name: "LEUKOCYTE IMAGE CLASSIFICATION",
    description:
      "Built a Convolutional Neural Network model for accurate classification of Leukocyte types including Lymphocyte, Monocyte, Eosinophil and Neutrophil.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "cnn",
        color: "pink-text-gradient",
      },
    ],
    image: leukocyte,
    source_code_link:
      "https://github.com/sahiltapu/Leukocyte_image_classification",
  },
  {
    name: "ANIME RECOMMENDATION SYSTEM",
    description:
      "Developed a feature-based anime recommendation system that intelligently suggests 5 anime titles.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ipynb",
        color: "green-text-gradient",
      },
      {
        name: "knn",
        color: "pink-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: animerecom,
    source_code_link: "https://github.com/sahiltapu/Anime_recommendation",
  },
];

export { services, technologies, experiences, testimonials, projects };
