import { Link, useNavigate } from "react-router-dom";
import { useUtilsSlice } from "../../app/getSlices";
import logo from "../../assets/smart_trade.png";
import "./register_seller.css";

function RegisterAsJobSeeker() {
  const navigate = useNavigate();
  const [, dispatchUtils] = useUtilsSlice();

  const submit = (e) => {
    e.preventDefault();
    dispatchUtils({
      type: "SET_NEW_USER",
      payload: true,
    });
    navigate("/profile");
  };

  return (
    <div className="register__seeker">
      <div role="button" onClick={() => navigate("/")} className="header__logo">
        <img src={logo} alt="logo bafo" />
      </div>
      <main className="register__seekerMain">
        <h1>Register</h1>

        <h4>Find your trusted local supplier</h4>
        <p>
          Get products and services from local suppliers. Once you're inside you
          have the option to open your own business account.
        </p>

        <form>
          <div>
            <div className="form__inputContainer">
              <label htmlFor="firstName">First Name</label>
              <input
                className="formInput"
                type="text"
                id="firstName"
                name="firstName"
              />
            </div>

            <div className="form__inputContainer">
              <label htmlFor="number">Phone Number</label>
              <input
                type="text"
                id="number"
                className="formInput"
                name="numebr"
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

          <div>
            <div className="form__inputContainer">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="formInput"
              />
            </div>

            <div className="form__inputContainer">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="formInput"
              />
            </div>

            <div className="form__inputContainer">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="formInput"
              />
            </div>
          </div>

          <footer className="form__footer">
            <div>
              <input type="checkbox" name="sub" id="sub" />
              <label htmlFor="sub">
                Would you like to receive emails from us
              </label>
            </div>

            <div>
              <button onClick={submit}>Create Account</button>
              <p>
                <Link to="/login">Already have an account? Log in.</Link>
              </p>
            </div>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default RegisterAsJobSeeker;
