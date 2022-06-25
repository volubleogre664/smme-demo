import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerMode: "HIRING",
  isNewUser: false,
};

const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setRegister(state, action) {
      state.registerMode = action.payload;
    },
    setNewUser(state, action) {
      state.isNewUser = action.payload;
    },
  },
});

export const { setRegister, setNewUser } = utilsSlice.actions;
export const selectUtlis = (state) => state;
export default utilsSlice.reducer;
