import images from "./images";

const navigations = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Work",
    url: "#work",
  },
  {
    id: "3",
    title: "Skill",
    url: "#skill",
  },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
  },
];

const about = [
  // {
  //   id: "0",
  //   title: "Backend Developer",
  //   description:
  //     "I am a backend developer with a passion for building beautiful and functional web applications.",
  //   imgUrl: images.about01,
  // },
  {
    id: "0",
    title: "Web Designer",
    description:
      "As a web designer, I combine artistic flair with technical proficiency to produce compelling digital experiences. Skilled in UI/UX principles and design tools such as Figma, I focus on creating visually appealing and functional websites that resonate with target audiences.",
    imgUrl: images.about05,
  },
  {
    id: "1",
    title: "Mobile Developer",
    description:
      "Experienced in mobile development, I specialize in creating user-friendly applications for iOS and Android platforms, utilizing languages like Swift for iOS and Kotlin for Android to deliver seamless mobile experiences.",
    imgUrl: images.about06,
  },
  {
    id: "2",
    title: "Frontend Developer",
    description:
      "Skilled in web development, I have a strong foundation in crafting visually appealing and user-friendly websites. With expertise in HTML, CSS, JavaScript, and frameworks like Vite.js and Reactjs library, I am adept at building responsive and interactive web applications.",
    imgUrl: images.about07,
  },
];

const projects = [
  {
    id: "0",
    title: "Repit Social",
    description: "",
    projectLink: "https://apps.apple.com/us/app/repitsocial/id1555105222",
    codeLink: "https://repitsocial.com/",
    imgUrl: images.repit,
    tags: ["Mobile App", "UI/UX", "All"],
  },
  {
    id: "1",
    title: "Toktok",
    description: "",
    projectLink: "https://apps.apple.com/ph/app/toktok-ph/id1522988322",
    codeLink: "https://toktok.ph/",
    imgUrl: images.toktok,
    tags: ["Mobile App", "UI/UX", "All"],
  },
  {
    id: "2",
    title: "Nutri Coach",
    description: "",
    projectLink:
      "https://play.google.com/store/apps/details?id=pro.nutricoach.client",
    codeLink: "https://www.nutricoach.com/us/",
    imgUrl: images.nutricoach,
    tags: ["Mobile App", "UI/UX", "All"],
  },
  {
    id: "3",
    title: "Sibs",
    description: "",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.sibsapp.prod&pli=1",
    codeLink: "https://www.sibs-app.com/",
    imgUrl: images.sibs,
    tags: ["Mobile App", "All"],
  },
  {
    id: "4",
    title: "Hand Raiser",
    description: "",
    projectLink:
      "https://github.com/Handraiser-Group-Project-Team-4/handraiser-project",
    codeLink:
      "https://github.com/Handraiser-Group-Project-Team-4/handraiser-project",
    imgUrl: images.handraiser,
    tags: ["Web App", "React JS", "All"],
  },
  {
    id: "5",
    title: "FOGS",
    description: "Forbes Online Grading System",
    projectLink:
      "https://drive.google.com/file/d/1B0PRhzl8bzYQGwBpu64vKvcv0MUE4pyO/view",
    codeLink:
      "https://drive.google.com/file/d/1B0PRhzl8bzYQGwBpu64vKvcv0MUE4pyO/view",
    imgUrl: images.gradingSystem,
    tags: ["Web App", "All"],
  },
  {
    id: "6",
    title: "Anime Api",
    description: "",
    projectLink: "https://anime-list-api.netlify.app/",
    codeLink: "https://anime-list-api.netlify.app/",
    imgUrl: images.anime,
    tags: ["Web App", "All"],
  },
  {
    id: "7",
    title: "Cryptocurrency",
    description: "",
    projectLink: "https://github.com/vhenbandagosa/Crypto-App",
    codeLink: "https://github.com/vhenbandagosa/Crypto-App",
    imgUrl: images.cryptocurrency,
    tags: ["React JS", "All"],
  },
  {
    id: "8",
    title: "Pokemon Catcher",
    description: "",
    projectLink: "https://github.com/vhenbandagosa/Crypto-App",
    codeLink: "https://github.com/vhenbandagosa/Crypto-App",
    imgUrl: images.pokemon,
    tags: ["React JS", "All"],
  },
];

const skills = [
  {
    id: "0",
    name: "React",
    bgColor: "",
    icon: images.react,
  },
  {
    id: "1",
    name: "React Native",
    bgColor: "",
    icon: images.rn,
  },
  {
    id: "2",
    name: "JavaScript",
    bgColor: "",
    icon: images.javascript,
  },
  {
    id: "3",
    name: "Node",
    bgColor: "",
    icon: images.node,
  },
  {
    id: "4",
    name: "Redux",
    bgColor: "",
    icon: images.redux,
  },
  {
    id: "5",
    name: "TypeScript",
    bgColor: "",
    icon: images.typescript,
  },
  {
    id: "6",
    name: "JSON",
    bgColor: "",
    icon: images.json,
  },
  {
    id: "7",
    name: "HTML",
    bgColor: "",
    icon: images.html,
  },
  {
    id: "8",
    name: "CSS",
    bgColor: "",
    icon: images.css,
  },
  {
    id: "9",
    name: "Git",
    bgColor: "",
    icon: images.git,
  },
  {
    id: "10",
    name: "Docker",
    bgColor: "",
    icon: images.docker,
  },
  {
    id: "11",
    name: "Postgres SQL",
    bgColor: "",
    icon: images.postgressql,
  },
  {
    id: "12",
    name: "Express",
    bgColor: "",
    icon: images.express,
  },
  {
    id: "13",
    name: "Vite",
    bgColor: "",
    icon: images.vite,
  },
  {
    id: "14",
    name: "Tailwind",
    bgColor: "",
    icon: images.tailwind,
  },
];

const works = [
  {
    id: "0",
    name: "Frontend Developer",
    company: "Google",
    description: "I've work as a frontend developer at Google",
  },
  {
    id: "2",
    name: "Mobile Developer",
    company: "Facebook",
    description: "I've work at Meta",
  },
  {
    id: "3",
    name: "Backend Developer",
    company: "Meta",
    description: "I worked with Nodejs",
  },
];
const experiences = [
  {
    id: "0",
    year: "2024 - Present",
    works: [
      {
        id: "0",
        name: "Freelance Software Engineer",
        company: "Contracting",
        description:
          "As a Freelance Software Engineer, I create tailored software solutions for diverse clients. I focus on quality, efficiency, and user experience, specializing in scalable application development.",
      },
    ],
  },
  {
    id: "1",
    year: "2022 - 2023",
    works: [
      {
        id: "0",
        name: "Software Engineer",
        company: "Genius Giant Company",
        description:
          "Maintaining, enhancing, and debugging React-based UIs for web and mobile apps, ensuring smooth functionality and adding new features as needed.",
      },
    ],
  },
  {
    id: "2",
    year: "2021 - 2022",
    works: [
      {
        id: "0",
        name: "Software Engineer",
        company: "Cloud Panda",
        description:
          "Responsible for designing, coding, and modifying applications according to client specifications, specializing in mobile technology for Android and iOS platforms.",
      },
    ],
  },
  {
    id: "3",
    year: "2020 - 2021",
    works: [
      {
        id: "0",
        name: "Mobile Developer",
        company: "Genius Giant Company",
        description:
          "Designing and implementing UIs and components using React for web and mobile apps. Requires expertise in React and full software development life cycle, including writing, testing, debugging, and implementation.",
      },
    ],
  },
  {
    id: "4",
    year: "2019 - 2020",
    works: [
      {
        id: "0",
        name: "Junior Web Developer",
        company: "Boomsourcing",
        description:
          "Responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack.",
      },
    ],
  },
  {
    id: "5",
    year: "2015 - 2019",
    works: [
      {
        id: "0",
        name: "Bachelors Degree",
        company: "Forbes College",
        description: "Bachelor of Science in Information Technology",
      },
    ],
  },
];

export { images, navigations, about, projects, skills, works, experiences };
