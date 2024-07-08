import { configureStore } from "@reduxjs/toolkit";
import AuthUserSlices from "./slices/AuthUserSlices";
import TypeSlices from "./slices/ShopCollection";
import SelectedSlices from "./slices/SelectedSlices";
import pageSlices from "./slices/pageSlices";

export const store = configureStore({
  reducer: {
    authUser: AuthUserSlices,
    deviceType : TypeSlices,
    selected: SelectedSlices,
    currentPage: pageSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
