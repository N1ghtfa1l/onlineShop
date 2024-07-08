import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  auth: boolean;
  user: string;
}

const initialState: CounterState = {
  auth: false,
  user: "",
};

export const counterSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsAuth, setUser } = counterSlice.actions;

export default counterSlice.reducer;
