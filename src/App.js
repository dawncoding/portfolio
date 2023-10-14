import "./styles/css/common/Container.css";
import "./styles/css/common/Reset.css";
import "./assets/font/Font.css";
import Header from "./components/Header";
import ParabolaBackground from "./components/ParabolaBackground";

function App() {
  return (
    <div className="container">
      <div className="container__header">
        <Header />
      </div>
      <div className="container__body">
        <ParabolaBackground />
      </div>
    </div>
  );
}

export default App;
