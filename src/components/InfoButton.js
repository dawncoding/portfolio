import "../styles/css/common/InfoButton.css";

export default function InfoButton() {
  return (
    <div className="info__button">
      <button className="info__button--email">sunnuri99@gmail.com</button>
      <button className="info__button--github">GITHUB</button>
      <button className="info__button--blog">BLOG</button>
      <button className="info__button--resume">RESUME</button>
    </div>
  );
}
