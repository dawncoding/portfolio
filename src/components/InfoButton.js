import "../styles/css/common/InfoButton.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function InfoButton() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="info__button">
      <button className="info__button--email" data-aos="fade-left">
        sunnuri99@gmail.com
      </button>
      <button className="info__button--github" data-aos="fade-left">
        GITHUB
      </button>
      <button className="info__button--blog" data-aos="fade-left">
        BLOG
      </button>
      <button className="info__button--resume" data-aos="fade-left">
        RESUME
      </button>
    </div>
  );
}
