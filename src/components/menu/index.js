import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";
import logo from "../../assets/smart_trade.png";

import "./menu.css";

function Menu() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div role="button" onClick={() => navigate("/")} className="header__logo">
        <img src={logo} alt="logo bafo" />
      </div>
      <div
        role="button"
        className="header__button"
        onClick={() => navigate("/profile")}
      >
        <img src={profile} alt="this is you mate" />
      </div>
    </header>
  );
}

export default Menu;
