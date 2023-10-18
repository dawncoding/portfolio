import "../styles/css/common/FrontendDeveloperText.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FrontendDeveloperText() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="info__first" data-aos="fade-right">
      <span>Frontend</span>
      <span>Developer</span>
    </div>
  );
}
