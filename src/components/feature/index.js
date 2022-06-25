import "./feature.css";

function Feature({ imgSrc, title, subTitle }) {
  return (
    <div className="feature">
      <header className="feature__header">
        <img src={imgSrc} alt="Yeap" />
      </header>

      <main className="feature__main">
        <h4>{title}</h4>
        <p>{subTitle}</p>
      </main>
    </div>
  );
}

export default Feature;
