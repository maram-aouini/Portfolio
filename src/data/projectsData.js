import projImg1 from "../assets/img/projects/project1-img1.png";
import projImg2 from "../assets/img/projects/project1-img2.png";
import projImg3 from "../assets/img/projects/project1-img3.png";
import projImg4 from "../assets/img/projects/project-img2.png";
import projImg5 from "../assets/img/projects/project-img3.png";
import projImg6 from "../assets/img/projects/project-img4.png";
import projImg7 from "../assets/img/projects/project2-img1.png";
/* 
import projImg6 from "../assets/img/projects/project-img6.png";
import projImg7 from "../assets/img/projects/project-img7.png";
import projImg8 from "../assets/img/projects/project-img8.png";
import projImg9 from "../assets/img/projects/project-img9.png";
import projImg10 from "../assets/img/projects/project-img10.png";
import projImg11 from "../assets/img/projects/project-img11.png";
import projImg12 from "../assets/img/projects/project-img12.png"; */

export const projectsData = [
  /* project 1 */
  {
    id: 1,
    title: "Responsive Portfolio Interface",
    category: "react",
    status: "live", /* can be placeholder, completed, wip, live */
    shortDescription: "My personal portfolio, built and deployed with React.",
    fullDescription: ["A fully responsive personal portfolio website built with React and Bootstrap. Showcases skills, projects, and contact information. Live demo available, with source code hosted on GitHub.", " This portfolio is a living project, continuously improved with new features and refactors."],
    imgUrl: projImg1,
    images: [projImg1, projImg2, projImg3],
    technologies: ["React", "CSS", "Bootstrap"],
    liveLink: "https://maramaouini.netlify.app/",
    githubLink: "https://github.com/maram-aouini/portfolio",
    psa: {
    problem: "The goal was to present my profile, skills, and projects in a clean, professional way that is easy to navigate and scalable over time.",
    solution: "I designed and developed a responsive portfolio using React, focusing on component reusability, clear information hierarchy, and smooth user experience.",
    outcome: "A fast, accessible portfolio that clearly communicates my skills and can be extended with new projects and features."
    },
    learned: [
  "Managing state across components",
  "Creating reusable UI components",
  "Debugging async logic",
  "Testing React hooks",
  "Responsive layouts with Flexbox/Grid",
  "Using modals and carousels",
  "Integrating libraries like Bootstrap and icons",
  "Conditional rendering based on data",
  "Optimizing component performance",
  "Organizing project data dynamically",
]
  },
  /* project 2 */
  {
  id: 2,
  title: "404 Cat-Astrophe Interactive Page",
  category: "frontend",
  status: "live",
  shortDescription: "An interactive, animated 404 page with draggable cats and surprise Easter eggs.",
  fullDescription: [
  "This project is a fully interactive 404 error page built in React. Beyond a simple error message, it includes draggable elements, randomized animations, and a hidden Easter egg mode with a 10% chance of unlocking a secret message for playful user engagement.", " Try visiting the page multiple times—you might just unlock a secret!",
  "The page handles complex animation sequences, state management for multiple dynamic elements, and ensures smooth performance even with overlapping timers and transitions.",
  "It demonstrates advanced React skills including hooks, useRef management, useLayoutEffect for layout measurement, and precise control over component mounting and animations."
],
  imgUrl: projImg7,
  images: [projImg7],
  technologies: [
    "React",
    "React Router",
    "React-Bootstrap",
    "JavaScript",
    "CSS Animations"
  ],
  liveLink: "https://maramaouini.netlify.app/404",
  githubLink: "https://github.com/maram-aouini/Portfolio/blob/main/src/components/NotFound.js",
  psa: {
    problem:
      "The goal was to create an engaging, interactive 404 page while maintaining smooth performance and predictable component behavior. Challenges included coordinating multiple animations, preventing layout flickering, and managing dynamic state for multiple draggable elements.",
    solution:
      "Implemented a controlled animation sequence with useLayoutEffect and useEffect to manage timing, used refs to track draggable cats and forbidden zones, and created fallback logic to ensure stable rendering. Added randomized messages and Easter eggs for enhanced user experience.",
    outcome:
      "Resulting page is visually dynamic, fully interactive, and robust against routing edge cases. Users can play with draggable cats, experience Easter egg surprises, and navigate back safely. The codebase now includes reusable patterns for complex interactive elements in React."
  },
  learned: [
  "Coordinated complex animations using React hooks.",
  "Managed multiple refs for interactive elements.",
  "Handled timers safely to avoid glitches.",
  "Created playful yet performant UI.",
  "Combined UX delight with technical stability."
]
},
  /* project 3 */
  {
    id: 3,
    title: "Full-Stack Web Platform",
    category: "laravel",
    status: "wip",
    shortDescription: "(Case Study in Progress)",
    fullDescription: ["Full details, source code, and live demo will be added soon."],
    imgUrl: projImg5,
    images: [projImg5],
    technologies: ["Node.js", "PHP", "Laravel"],
    liveLink: null,
    githubLink: null,
    psa: {
    problem: null,
    solution: null,
    outcome: null,
    },
    learned: []
  },
  /* project 4 */
  {
    id: 4,
    title: "Grocery Tracking App",
    category: "react",
    status: "placeholder",
    shortDescription: "(Coming Soon)",
    fullDescription: ["Full details, source code, and live demo will be added soon."],
    imgUrl: projImg6,
    images: [projImg6],
    technologies: ["React", "CSS"],
    liveLink: null,
    githubLink: null,
    psa: {
    problem: null,
    solution: null,
    outcome: null,
    },
    learned: []
  },
  /* project 5 */
  {
    id: 5,
    title: "User Management System",
    category: "react",
    status: "placeholder",
    shortDescription: " (Planned Case Study)",
    fullDescription: ["Full details, source code, and live demo will be added soon."],
    imgUrl: projImg4,
    images: [projImg4],
    technologies: ["React", "Node.js", "MySQL"],
    liveLink: null,
    githubLink: null,
    psa: {
    problem: null,
    solution: null,
    outcome: null,
    },
    learned: []
  }
  /* project 6 */

];