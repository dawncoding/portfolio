import "../styles/css/common/Project.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectInfo({ title, titlePosition }) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="project__info" data-aos="flip-right">
      <div className={`project__info--title ${titlePosition}`}>{title}</div>
      <div className="project__info--content">Project 내용</div>
    </div>
  );
}
