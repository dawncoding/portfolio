import "../styles/css/common/Skill.css";

export default function SkillInfo({ title, titlePosition }) {
  return (
    <div className="skill__info">
      <div className={`skill__info--title ${titlePosition}`}>{title}</div>
      <div className="skill__info--content">Skill 내용</div>
    </div>
  );
}
