import "./styles/css/common/Container.css";
import "./styles/css/common/Reset.css";
import "./assets/font/Font.css";
import Header from "./components/Header";
import FrontendDeveloperText from "./components/FrontendDeveloperText";
import SunjinPortfolioText from "./components/SunjinPortfolioText";
import Circle from "./components/Circle";
import InfoButton from "./components/InfoButton";
import Introduction from "./components/Introduction";
import Skill from "./components/Skill";
import SkillInfo from "./components/SkillInfo";
import Activity from "./components/Activity";
import Project from "./components/Project";

function App() {
  return (
    <div className="container">
      <div className="container__header">
        <Header />
      </div>
      <div className="container__body">
        <div className="container__body--info">
          <FrontendDeveloperText />
          <SunjinPortfolioText />
          <InfoButton />
        </div>
        <div className="container__body--intro">
          <Introduction />
          {/* <Circle circleNumber="second" /> */}
        </div>
        <div className="container__body--skill">
          <Skill />
          {/* <Circle circleNumber="third" /> */}
          <SkillInfo title="HTML/CSS" />
          <SkillInfo title="Javascript" titlePosition="right" />
          <SkillInfo title="React" />
          <SkillInfo title="Node.js" titlePosition="right" />
          <SkillInfo title="AWS" />
        </div>
        <div className="container__body--activity">
          <Activity />
        </div>
        <div className="container__body--project">
          <Project />
        </div>
      </div>
    </div>
  );
}

export default App;
