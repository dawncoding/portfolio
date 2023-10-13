import "./styles/css/common/Container.css";
import "./styles/css/common/Reset.css";
import "./assets/font/Font.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <div className="container__header">
        <Header />
      </div>
    </div>
  );
}

export default App;
