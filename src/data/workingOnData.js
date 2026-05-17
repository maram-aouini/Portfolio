import { Briefcase, BookOpen, Layers, Globe2 } from "lucide-react";
// Import placeholder images
import projImg1 from "../assets/img/projects/project1-img1.png";
import wipImg2 from "../assets/img/projects/wip-img1.png";
import projImg3 from "../assets/img/projects/project-img3.png";
import kivraHp from "../assets/img/projects/Kivra-HP.png";
import jobTrackerPlaceholder from "../assets/img/projects/project-placeholder1.png";
import flashcardsPlaceholder from "../assets/img/projects/flashcard_app_placeholder.svg";

export const workingOnData = [
  {
    id: "lang-btn",
    icon: Globe2,
    translationKey: "lang-btn",
    progress: 100,
    stageKey: "completed",
    technologies: ["React", "Context API"],
    imgUrl: projImg1,
    buildContext: {
      branch: "main",
      commit: "#72ab4f2",
      updated: "Just now",
      env: "Production"
    }
  },
  {
    id: "job-tracker",
    icon: Briefcase,
    translationKey: "jobTracker",
    progress: 45,
    stageKey: "backend",
    technologies: ["React", "Node.js", "MongoDB"],
    imgUrl: jobTrackerPlaceholder,
    buildContext: {
      branch: "develop",
      commit: "#bc3921a",
      updated: "5h ago",
      env: "Staging"
    }
  },
  {
    id: "kivra",
    icon: BookOpen,
    translationKey: "kivra",
    priority: true,
    progress: 80,
    stageKey: "fullstack",
    technologies: ["Angular", "Spring Boot", "Java", "REST API", "MySQL"],
    imgUrl: kivraHp,
    buildContext: {
      branch: "feature/bugfixes",
      commit: "#a12f8d3",
      updated: "10m ago",
      env: "Development",
      repoUrl: "https://github.com/maram-aouini/kivra"
    }
  },
  {
    id: "flashcards",
    icon: Layers,
    translationKey: "flashcards",
    progress: 15,
    stageKey: "planning",
    technologies: ["React", "TypeScript", "Algorithms"],
    imgUrl: flashcardsPlaceholder,
    buildContext: {
      branch: "design/v1",
      commit: "#ee4411b",
      updated: "3d ago",
      env: "Local"
    }
  }
];
