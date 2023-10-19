import "../styles/css/common/Project.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectInfo from "./ProjectInfo";

export default function Project() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="project">
      <div className="project__title">Projects</div>
      <div className="project__content">
        <ProjectInfo title="Healthcare" />
        <ProjectInfo title="Beauty LAB" titlePosition="right" />
        <ProjectInfo title="Do-IT" />
      </div>
    </div>
  );
}
