import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "utils/@reduxjs/toolkit";
import { initialState } from "./state";

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    trigger: (state) => state,

    setPhoneToStoreTrigger: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const { actions, reducer, name } = appSlice;
