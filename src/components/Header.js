import { ReactComponent as Nav } from "../assets/image/menu.svg";
import "../styles/css/common/Header.css";

export default function Header() {
  return (
    <header className="header">
      <button className="header__home">Portfolio</button>

      <Nav className="header__icon" />

      <nav className="header__nav">
        <ul>
          <li>
            <button className="header__nav--about">About</button>
          </li>
          <li>
            <button className="header__nav--skill">Skill</button>
          </li>
          <li>
            <button className="header__nav--activity">Activity</button>
          </li>
          <li>
            <button className="header__nav--projects">Projects</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
