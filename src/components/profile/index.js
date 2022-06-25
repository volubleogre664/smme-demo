import Menu from "../menu";
import profile from "../../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { useUtilsSlice } from "../../app/getSlices";

import NewUser from "../new";

import "./profile.css";

function Profile() {
  const navigate = useNavigate();
  const [{ utils }, dispatch] = useUtilsSlice();

  return (
    <div className="profile">
      <Menu />

      <main className="profile__main">
        <header className="profile__mainHeader">
          <div className="banner">
            <h1>For the best couches on the market</h1>
          </div>

          <div className="introduction">
            <h3>Couch Fest</h3>
            <p>Number one stop for your all you can buy buffet of couches</p>
            <small className="address">
              15 Hiemstra street, Brandvag, Bleomfontein, Free State
            </small>
          </div>

          <div className="profile__image">
            <img src={profile} alt="Wola" />
          </div>
        </header>

        <section className="profile__mainIntro">
          <button
            className="add"
            onClick={() =>
              dispatch({
                type: "SET_NEW_USER",
                payload: false,
              })
            }
          >
            Add your business
          </button>

          <button onClick={() => navigate("/")} className="exit">
            Exit Smart Trade
          </button>
        </section>
      </main>

      {utils.isNewUser && <NewUser />}
    </div>
  );
}

export default Profile;
