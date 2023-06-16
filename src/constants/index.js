import {
  Fusion,
  curefelt,
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
  cryptodome,
  filmix,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  calibriya,
  tshirt,
  threejs,
  vitbhopal, 
  bbms
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
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
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Designer",
    icon: creator,
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

const experiences = [
  {
    title: "Vellore institute of technology, Bhopal",
    company_name: "CGPA: 8.95",
    icon: vitbhopal,
    iconBg: "#383E56",
    date: "May 2020 - May 2024",
    points: [
      "Secured 15 th rank in a vitBLions contest conducted by vit on hackerrank. ",
      "Quaranteam, Team Leader (Intra-University Hackathon Organised by codecademy), VIT Bhopal, (Jul 15,2021). Secured 3rd runner up position in that hackathon.",
      "Due to good academic record, recieved a scholarship of worth 2lacs",
      "Participated in code reviews challenges and providing constructive feedback to other student developers.",
    ],
  },
  {
    title: "Blue Bells Model School",
    company_name: "Percentage: 94.33",
    icon: bbms,
    iconBg: "#E6DEDD",
    date: "June 2017 - June 2019",
    points: [
      "Due to good academic and non-academic performance, became the head-girl.",
      "Secured 1st position in inter-school design competition.",
      "Top performer in 2019-2020 batch of coding ninjas(DSA and Introduction to programming).",
      "Recieved a scholarship of 1 lacs, for performing well in class 10th.",
    ],
  },
  {
    title: "Blue Bells Model School",
    company_name: "CGPA: 10",
    icon: bbms,
    iconBg: "#383E56",
    date: "June 2004 - June 2017",
    points: [
      "Started an intiative to spread awareness about the importance of sanitary pads and organised a trip for to rural areas for the same purpose.",
      "Maintained a streak of 10 CGPA for more than 9 years.",
      "Qualified Pre-Regional Mathematical Olypiad and Regional Mathematical Olypiad."
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "CureFelt - a cure to your mental health.",
    description:
      "Dealing with mental health is what makes us human. But for a lot of us, it's a struggle to be open about it.The web-app provides an option to read good news articles and some wholesome memes for recreation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "white-text-gradient",
      },
    ],
    // image: carrent,
    image: curefelt,
    source_code_link: "https://github.com/Bhumika-Sethi/CureFelt",
  },
  {
    name: "Cryptodome",
    description:
      " To enter the world of digital assets, we've got you covered. At Cryptodome, we strive to provide you with a comprehensive platform that offers the latest news, market insights, and robust exchange services, all designed to keep you informed and empower you in the dynamic realm of cryptocurrencies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    // image: jobit,
    image: cryptodome,
    source_code_link: "https://github.com/Bhumika-Sethi/cryptodome",
  },
  {
    name: "Custom Ink - 3D Customerizable t-shirts",
    description:
      "Create and customize stunning 3D models and geometries with various lights as well as with a camera and positioning of an object in space, you can view 3D model of your t-shirt.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "orange-text-gradient",
      },
      {
        name: "React Three Fiber",
        color: "purple-text-gradient",
      },
    ],
    // image: tripguide,
    image: tshirt,
    source_code_link: "https://github.com/Bhumika-Sethi/3D-Customerizable-T-Shirts",
  },
  {
    name: "Filmix",
    description:
      "Welcome to filmix, the leading online streaming platform that revolutionized the way we experience entertainment. With millions of subscribers worldwide, we offer an unmatched library of movies, TV shows, documentaries, and original content, all at your fingertips. Let's dive into the technical features that make Netflix the ultimate destination for immersive streaming.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "JQuery",
        color: "orange-text-gradient",
      },
    ],
    // image: tripguide,
    image: filmix,
    source_code_link: "https://github.com/Bhumika-Sethi/flimix",
  },
  {
    name: "Calibriya",
    description:
      "To solve the real time issue of getting notes/books from seniors just before exam, I have come up with a website which not only allows uploading books/notes and accessing it but also keeps the juniors up-to-date about the upcoming events organized by different clubs. In, this way alot of money, time and energy that is spent in promoting the events can be saved.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "MySql",
        color: "orange-text-gradient",
      },
      {
        name: "PHP",
        color: "purple-text-gradient",
      },
    ],
    // image: tripguide,
    image: calibriya,
    source_code_link: "https://github.com/Bhumika-Sethi/Calibriya",
  },
  {
    name: "FutureFusion",
    description:
      "Explore the metaverse world just by a Click. Now there is no need to go out and then explore this new metaverse concept. A simple laptop is sufficient to dive into the meta-universe. There are plenty of locations available for you to explore.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "orange-text-gradient",
      },
      {
        name: "React Three Fiber",
        color: "purple-text-gradient",
      },
    ],
    image: Fusion,
    source_code_link: "https://github.com/Bhumika-Sethi/FutureFusion",
  }
];

export { services, technologies, experiences, testimonials, projects };
