import "../styles/css/common/ParabolaBackground.css";
import parabola from "../assets/image/parabola.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ParabolaBackground() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="parabola" data-aos="zoom-out">
      <img src={parabola} alt="parabola"></img>
    </div>
  );
}
