import { useNavigate } from "react-router-dom";
import managementImg from "../../assets/cherry-business-solutions.png";
import aboutImg from "../../assets/experimental-lettering-tablet-about-company.png";
import dataImg from "../../assets/abstract-connection-through-satellite.png";
import learnImg from "../../assets/pablo-bibliophile.png";
import fundingImg from "../../assets/bonbon-banknotes-coins-and-a-credit-card-lying-in-a-brown-wallet.png";
import logo from "../../assets/smart_trade.png";
import "./home.css";
import Feature from "../../components/feature";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">
      <header className="home__header">
        <h2 className="home__headerLogo">
          <img src={logo} alt="the logo ya'll" />
          {/* <a href="#top">Kwame</a> */}
        </h2>
        <nav>
          <a href="#about">About</a>
          <a href="#features">Services</a>
          <a href="#mission">Our Mission</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="home__headerButtons">
          <button onClick={() => navigate("/login")} className="btn btn-login">
            Log In
          </button>
          <button
            onClick={() => navigate("/register")}
            className="btn btn-signIn"
          >
            Sign In
          </button>
        </div>
      </header>

      <section className="home__hero" id="top">
        <main className="home__heroMain">
          <h1>Discover Something Local</h1>
          <p>Whether you're a business or an individual. We've got you</p>
        </main>
      </section>

      <section className="home__about" id="about">
        <h1>About Us</h1>
        <div>
          <h2 className="home__aboutTitle">Who are we?</h2>
          {/* img */}
          <div className="home__aboutImage">
            <img src={logo} alt="who are we" />
          </div>
          {/* paragraph */}

          <div className="home__aboutPara">
            <h3>
              We are <span style={{ fontWeight: "900" }}>Smart Trade</span>
            </h3>
            <p>
              Smart Trade is a business management platform that is designed for
              SMME's. The platform has an array of features which include the
              business intelligence feature to help the business owners be aware
              of how their business is doing. Other feaatures include printable
              business profile and applying for funding to grow your business.
              There is also learning material to help witht he business soft
              skills.
            </p>
          </div>
        </div>
      </section>

      <section className="home__about" id="features">
        <h1>Our Services</h1>

        <div>
          <p>
            We have many features to help you manage your business and grow it
            to new heights
          </p>

          <section>
            <Feature
              imgSrc={managementImg}
              title="Business Managemnt"
              subTitle="A business managemnet system you can access anywhere and anytime"
            />

            <Feature
              imgSrc={aboutImg}
              title="Business Profile"
              subTitle="A beautifully designed business profile. Can be edited in anyway and it also printable for marketing purposes"
            />

            <Feature
              imgSrc={dataImg}
              title="Business Intelligence"
              subTitle="Stay aware of your market, their demands and how you are keeping up to the market's demannds"
            />

            <Feature
              imgSrc={learnImg}
              title="Education"
              subTitle="Learning never stops so go on ahead and learn more about being in business and many more"
            />

            <Feature
              imgSrc={fundingImg}
              title="Get Funding"
              subTitle="Take your business to a new level. Request for funding and we will find potential investors and many other ways to get funds for your business"
            />
          </section>
        </div>
      </section>

      <section
        className="home__about"
        id="mission"
        style={{ paddingBottom: "150px" }}
      >
        <h1>Our Mission</h1>
        <div>
          {/* paragraph */}

          <div className="home__aboutPara">
            <h3 style={{ fontWeight: "600" }}>
              Why we made this great platform?
            </h3>
            <p>
              The main aim of making this platform was for the betterment of our
              country's SMME sector. As we know that small businesses are
              valueble to a country's economy. By improving them the whole
              country will be improved in no time
            </p>
          </div>

          {/* img */}
          <div className="home__aboutImage">
            <img src={aboutImg} alt="who are we" />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
            incidunt consectetur id amet est quis eligendi? Vero, necessitatibus
            esse facilis, nesciunt consequuntur delectus saepe tempore itaque
            corporis doloremque repudiandae iure. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </section>

      <footer className="home__footer" id="contact">
        <h2>Contact</h2>

        <div>
          <h3>Feel free to contact us</h3>
          <p>Click on one of our details and give us a call or send an email</p>
          <div>
            <a href="mailto:support@kwametech.co.za">support@fake.mail.co.za</a>
            <a href="tel:+27212345467">(+27) 21 234 5467</a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Home;
