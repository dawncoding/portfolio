import "../styles/css/common/Skill.css";
import SkillFilter from "./SkillFilter.js";

export default function Skill() {
  return (
    <div className="skill">
      <div className="skill__title">Skill</div>
      <div className="skill__filter">
        <SkillFilter name="HTML/CSS"></SkillFilter>
        <SkillFilter name="Javascript"></SkillFilter>
        <SkillFilter name="jQuery"></SkillFilter>
        <SkillFilter name="React"></SkillFilter>
        <SkillFilter name="Node.js"></SkillFilter>
        <SkillFilter name="AWS"></SkillFilter>
      </div>
    </div>
  );
}
