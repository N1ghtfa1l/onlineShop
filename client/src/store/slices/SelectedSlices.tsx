import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Type } from "../../types/type";

export interface CounterState {
  selectedType: Type | null;
  selectedBrand: Type | null;
}

const initialState: CounterState = {
  selectedType: null,
  selectedBrand: null,
};

export const counterSlice = createSlice({
  name: "selectedSlice",
  initialState,
  reducers: {
    setSelectedType: (state, action: PayloadAction<Type>) => {
      state.selectedType = action.payload;
    },
    setSelectedBrand: (state, action: PayloadAction<Type>) => {
      if (state.selectedBrand !== action.payload) {
        state.selectedBrand = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedType, setSelectedBrand } = counterSlice.actions;

export default counterSlice.reducer;
