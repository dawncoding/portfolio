import "../styles/css/common/Skill.css";
import SkillFilter from "./SkillFilter.js";

export default function Skill() {
  return (
    <div className="skill">
      <div className="skill__title">Skill</div>
      <div className="skill__filter">
        <SkillFilter name="HTML/CSS" />
        <SkillFilter name="Javascript" />
        <SkillFilter name="jQuery" />
        <SkillFilter name="React" />
        <SkillFilter name="Node.js" />
        <SkillFilter name="AWS" />
      </div>
    </div>
  );
}
