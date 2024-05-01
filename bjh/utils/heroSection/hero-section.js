import "../heroSection/hero-section.css";
export default function Hero() {
  return (
    <div className="column ero-container">
      <div className="ero-element">
        <div className="column ero-text">
          <div className="text-1">Outstanding</div>
          <div className="text-2"> Coffee Shop</div>
          <div className="text-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour,
          </div>
        </div>
        <div className="row ero-buttuns">
          <div className="buttun-go-in"><a href="/">LEARN MORE</a></div>
          <div className="row buttun-swich">
            <div className="right">&#60;</div>
            <div className="left">&#62;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
