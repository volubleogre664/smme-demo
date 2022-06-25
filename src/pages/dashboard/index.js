import { useUtilsSlice } from "../../app/getSlices";
import Menu from "../../components/menu";
import NewUser from "../../components/new";
import Person from "../../components/person";
import SearchIcon from "@mui/icons-material/Search";
import "./dashboard.css";

function Dashboard() {
  const [{ utils }] = useUtilsSlice();

  return (
    <div className="dashboard">
      <Menu />

      <main className="dashboardMain">
        <header className="dashboardHeader">
          <h1>Find a professional</h1>
          <p>
            Whatever work you may need done, there's skilled person who can help
          </p>

          <section className="dashboardHeader__search">
            <header>
              <div className="searchContainer">
                <SearchIcon />
                <input type="text" placeholder="Job title or keyword" />
              </div>

              <div className="searchContainer">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Location (Municipality or Province)"
                />
              </div>

              <a href="#result">Search</a>
            </header>

            <footer>
              <p>Filter your search results:</p>
              <main>
                <select>
                  <option value="0">Employment type</option>
                  <option value="1">Freelance employment</option>
                  <option value="1">Permanent employment</option>
                </select>

                <select>
                  <option selected value="1">
                    Expected salary
                  </option>
                  <option value="1">R3000</option>
                  <option value="1">R5000</option>
                  <option value="3">R8000</option>
                  <option value="1">R10 000</option>
                </select>

                <button>Clear all</button>
              </main>
            </footer>
          </section>
        </header>

        <section className="searchResult" id="result">
          <h2>People who are ready to work</h2>

          <main>
            <Person personName="Jasmine Mokwena" />
            <Person personName="Jonathan Doe" />
            <Person personName="Not Elon Musk" />
            <Person personName="Katiana Almedia" />
          </main>
        </section>
      </main>

      {utils.isNewUser && <NewUser />}
    </div>
  );
}

export default Dashboard;
