import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "types/RootState";
import { initialState } from "./state";

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.app || initialState;

export const selectTrigger = createSelector(
  [selectDomain],
  (appState) => appState.token,
);
