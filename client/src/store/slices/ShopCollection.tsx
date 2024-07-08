import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Device, Type } from "../../types/type";

interface CounterState {
  deviceType: Type[];
  deviceBrand: any[];
  allDevice: Device[];
}

const initialState: CounterState = {
  deviceType: [],
  deviceBrand: [],
  allDevice: [],
};

export const counterSlice = createSlice({
  name: "deviceType",
  initialState,
  reducers: {
    setDeviceType: (state, action: PayloadAction<Type>) => {
      state.deviceType.push(action.payload);
    },
    setDeviceBrand: (state, action: PayloadAction<Type>) => {
      state.deviceBrand.push(action.payload);
    },
    setAllDevice: (state, action: PayloadAction<Device>) => {
      if (!state.allDevice.some((device) => device.id === action.payload.id)) {
        state.allDevice.push(action.payload);
      }
    },
    clearDevices: (state) => {
      state.allDevice = [];
    },
  },
});

export const { setDeviceType, setDeviceBrand, setAllDevice, clearDevices } =
  counterSlice.actions;

export default counterSlice.reducer;
