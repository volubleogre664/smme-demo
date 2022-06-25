import profileImg from "../../assets/profile.png";
import "./person.css";

function Person({ personName }) {
  return (
    <div className="person">
      <div className="imageContainer">
        <img src={profileImg} alt="This is you mate" />
      </div>

      <main>
        <h3>{personName}</h3>
        <div>
          <span className="price">R5000</span>
          <span className="province">Eastern Cape</span>
          <span className="region">Greak Kei</span>
        </div>

        <div>
          <span className="workType">freelancer</span>
          <span className="workType">full-time</span>
        </div>
      </main>
    </div>
  );
}

export default Person;
