import { AppState } from "./types";

export const initialState: AppState = {
  token: localStorage.getItem("access_token"),
};
