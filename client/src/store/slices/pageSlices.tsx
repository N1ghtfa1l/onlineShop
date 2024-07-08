import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  currentPage: number;
  currentPageTotalCount: number;
  currentPageLimit: number;
}

const initialState: CounterState = {
  currentPage: 1,
  currentPageTotalCount: 0,
  currentPageLimit: 3,
};

export const counterSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setCurrentPageTotalCount: (state, action: PayloadAction<number>) => {
      state.currentPageTotalCount = action.payload;
    },
  },
});

export const { setCurrentPage, setCurrentPageTotalCount } = counterSlice.actions;

export default counterSlice.reducer;
