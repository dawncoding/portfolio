import { ReactComponent as Nav } from "../assets/image/menu.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/css/common/Header.css";

export default function Header() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <header className="header" data-aos="fade-up">
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
