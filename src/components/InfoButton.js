import "../styles/css/common/InfoButton.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function InfoButton() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // GitHub 버튼 클릭 시 이벤트 핸들러
  const handleGitHubClick = () => {
    window.open("https://github.com/dawncoding", "_blank");
  };

  // Blog 버튼 클릭 시 이벤트 핸들러
  const handleBlogClick = () => {
    window.open("https://dawnwithsun.tistory.com/", "_blank");
  };

  return (
    <div className="info__button">
      <button className="info__button--email" data-aos="fade-left">
        sunnuri99@gmail.com
      </button>
      <button
        className="info__button--github"
        data-aos="fade-left"
        onClick={handleGitHubClick}
      >
        GITHUB
      </button>
      <button
        className="info__button--blog"
        data-aos="fade-left"
        onClick={handleBlogClick}
      >
        BLOG
      </button>
      <button className="info__button--resume" data-aos="fade-left">
        RESUME
      </button>
    </div>
  );
}
