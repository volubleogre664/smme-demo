import { Link, useNavigate } from "react-router-dom";
import { useUtilsSlice } from "../../app/getSlices";
import logo from "../../assets/smart_trade.png";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [utils, dispatchUtils] = useUtilsSlice();

  const submit = (e) => {
    e.preventDefault();
    dispatchUtils({
      type: "SET_NEW_USER",
      payload: false,
    });
    navigate("/profile");
  };

  return (
    <div className="login__seeker">
      <div role="button" onClick={() => navigate("/")} className="header__logo">
        <img src={logo} alt="logo bafo" />
      </div>
      <main className="login__seekerMain">
        <h1>Login</h1>

        <h4>Welcome back</h4>
        <p>Greatness awaits on the other side</p>

        <form>
          <div>
            <div className="form__inputContainer">
              <label htmlFor="firstName">Email address</label>
              <input
                className="formInput"
                type="text"
                id="firstName"
                name="firstName"
              />
            </div>

            <div className="form__inputContainer">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="formInput"
              />
            </div>
          </div>

          <footer className="form__footer">
            <div>
              <input type="checkbox" name="sub" id="sub" />
              <label htmlFor="sub">Remember password and device</label>
            </div>

            <div>
              <button onClick={submit}>Login</button>
              <p>
                <Link to="/register">
                  Don't have an account? Create One Now
                </Link>
              </p>
            </div>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default Login;
