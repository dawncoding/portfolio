import "./styles/css/common/Container.css";
import "./styles/css/common/Reset.css";
import "./assets/font/Font.css";
import Header from "./components/Header";
import ParabolaBackground from "./components/ParabolaBackground";
import FrontendDeveloperText from "./components/FrontendDeveloperText";
import SunjinPortfolioText from "./components/SunjinPortfolioText";
import Circle from "./components/Circle";

function App() {
  return (
    <div className="container">
      <div className="container__header">
        <Header />
      </div>
      <div className="container__body">
        <div className="container__body--info">
          <ParabolaBackground />
          <FrontendDeveloperText />
          <SunjinPortfolioText />
          <Circle circleNumber="first" />
          <Circle circleNumber="second" />
        </div>
      </div>
    </div>
  );
}

export default App;
