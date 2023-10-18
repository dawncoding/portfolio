import "../styles/css/common/Activity.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Activity() {
  return (
    <div className="activity" data-aos="zoom-in">
      <div className="activity__title">Activity</div>
      <div className="activity__content">
        활동 내용 Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
}
