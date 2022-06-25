import CloseIcon from "@mui/icons-material/Close";
import { useUtilsSlice } from "../../app/getSlices";
import profile from "../../assets/profile.png";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import "./new.css";

function NewUser() {
  const [, dispatchUtils] = useUtilsSlice();

  const closeClick = () => {
    dispatchUtils({
      type: "SET_NEW_USER",
      payload: false,
    });
  };

  const submit = (e) => {
    dispatchUtils({
      type: "SET_NEW_USER",
      payload: false,
    });
  };

  return (
    <div className="new">
      <main className="new__main">
        <div role="button" onClick={closeClick} className="iconContainer">
          <CloseIcon />
        </div>

        <h1>Business profile</h1>
        <p>
          A little more information to set up your business and everything will
          be ready to begin.
        </p>

        <form>
          <div className="formInputContainer profileImage">
            <label htmlFor="image">Add your business logo</label>
            <input
              type="file"
              accept="image/*"
              name="image"
              style={{ display: "none" }}
              id="image"
            />

            <div className="imageContainer">
              <div>
                <img src={profile} alt="this will be you after adding" />
              </div>

              <div className="iconContainer">
                <AddPhotoAlternateIcon />
              </div>
            </div>
          </div>

          <div className="formInputContainer filter">
            <p>Are you selling a product or serve and/or both</p>

            <div>
              <input type="checkbox" name="permanent" id="permanent" />
              <label htmlFor="permanent">Product</label>
            </div>

            <div>
              <input type="checkbox" name="gigs" id="gigs" />
              <label htmlFor="gigs">Service</label>
            </div>
          </div>

          {/* <div className="formInputContainer">
            <label htmlFor="profession">What is your profession</label>
            <input type="text" name="profession" id="profession" />
          </div> */}

          <div className="formInputContainer">
            <label htmlFor="profession">
              Which department or category does your business fall under
            </label>
            <input type="text" name="profession" id="profession" />
          </div>

          <div className="formInputContainer">
            <label htmlFor="certs">
              If your business is registered please provide us some proof of
              that.
            </label>
            <input
              type="file"
              name="certs"
              style={{ display: "none" }}
              id="certs"
            />
            <div className="fileInput">
              <button>Click to upload</button>
            </div>
          </div>

          <p>
            <small>
              Please know you can always change this information from your
              profile
            </small>
          </p>

          <button onClick={submit}>Submit Details</button>
        </form>
      </main>
    </div>
  );
}

export default NewUser;
