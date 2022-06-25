import { useUtilsSlice } from "../../app/getSlices";
import RegisterAsHire from "./register_hire";
import RegisterAsJobSeeker from "./register_seller";

import "./register.css";

function Register() {
  const [utils] = useUtilsSlice();

  return (
    <div className="register">
      {/* {(utils.registerMode === "AS_HIRE" && <RegisterAsHire />) || (
        <RegisterAsJobSeeker />
      )} */}
      <RegisterAsJobSeeker />
    </div>
  );
}

export default Register;
