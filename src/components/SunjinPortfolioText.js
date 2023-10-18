import "../styles/css/common/SunjinPortfolioText.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Circle from "./Circle";

export default function SunjinPortfolioText() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="info__second" data-aos="fade-left">
      {/* <Circle circleNumber="first" /> */}
      <span>Sunjin</span>
      <span>Portfolio</span>
    </div>
  );
}
