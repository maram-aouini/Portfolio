import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Project Details",
    fullDescription: "This is a detailed description of Project 1. It includes all the features, technologies used, and the challenges overcome during development.",
    imgUrl: projImg1,
    category: "react",
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "https://example.com/project1",
    githubLink: "https://github.com/username/project1" 
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project Details",
    fullDescription: "This is a detailed description of Project 2. It includes all the features, technologies used, and the challenges overcome during development.",
    imgUrl: projImg2,
    category: "laravel",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    liveLink: null,  // No live link available
    githubLink: "https://github.com/username/project2"
  },
  {
    id: 3,
    title: "Project 3",
    description: "Project Details",
    fullDescription: "This is a detailed description of Project 3. It includes all the features, technologies used, and the challenges overcome during development.",
    imgUrl: projImg3,
    category: "react",
    technologies: ["React", "TypeScript", "Tailwind"],
    liveLink: "https://example.com/project3",
    githubLink: "https://github.com/username/project3"
  },
];