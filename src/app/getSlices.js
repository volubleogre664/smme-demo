import { useSelector, useDispatch } from "react-redux";
import {
  selectUtlis,
  setRegister,
  setNewUser,
} from "../features/utils/utilsSlice";

function useUtilsSlice() {
  const dispatch = useDispatch();

  const dispatchUtils = (action) => {
    switch (action.type) {
      case "SET_REGISTER": {
        dispatch(setRegister(action.payload));
        break;
      }

      case "SET_NEW_USER": {
        dispatch(setNewUser(action.payload));
        break;
      }

      default:
        break;
    }
  };

  const utils = useSelector(selectUtlis);

  return [utils, dispatchUtils];
}

export { useUtilsSlice };
