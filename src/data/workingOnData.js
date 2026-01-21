import { Package, BookOpen, Calendar, Globe2 } from "lucide-react";
// Import placeholder images
import projImg1 from "../assets/img/projects/project1-img1.png";
import wipImg2 from "../assets/img/projects/wip-img1.png";
import projImg3 from "../assets/img/projects/project-img3.png";

export const workingOnData = [
  {
    id: "lang-btn",
    icon: Globe2,
    translationKey: "lang-btn",
    priority: true,
    progress: 90,
    stageKey: "building",
    technologies: ["React", "Context API"],
    imgUrl: projImg1,
    buildContext: {
      branch: "main",
      commit: "#72ab4f2",
      updated: "2h ago",
      env: "Production"
    }
  },
  {
    id: "grocery",
    icon: Package,
    translationKey: "grocery",
    progress: 45,
    stageKey: "backend",
    technologies: ["React", "Node.js", "MongoDB"],
    imgUrl: wipImg2,
    buildContext: {
      branch: "develop",
      commit: "#bc3921a",
      updated: "5h ago",
      env: "Staging"
    }
  },
  {
    id: "library",
    icon: BookOpen,
    translationKey: "library",
    progress: 15,
    stageKey: "frontend",
    technologies: ["React", "API Integration"],
    imgUrl: projImg3,
    buildContext: {
      branch: "feature/api",
      commit: "#df982cc",
      updated: "1d ago",
      env: "Development"
    }
  },
  {
    id: "calendar",
    icon: Calendar,
    translationKey: "calendar",
    progress: 10,
    stageKey: "planning",
    technologies: ["Planning", "Design"],
    imgUrl: projImg1,
    buildContext: {
      branch: "design/v1",
      commit: "#ee4411b",
      updated: "3d ago",
      env: "Local"
    }
  }
];
