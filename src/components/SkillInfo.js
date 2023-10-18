import "../styles/css/common/Skill.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SkillInfo({ title, titlePosition }) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="skill__info" data-aos="flip-left">
      <div className={`skill__info--title ${titlePosition}`}>{title}</div>
      <div className="skill__info--content">Skill 내용</div>
    </div>
  );
}
