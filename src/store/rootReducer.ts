import { combineReducers } from "@reduxjs/toolkit";

import citySlice from "./slice/city";
import weatherSlice from "./slice/weather";

export const rootReducer = combineReducers({
  citySlice,
  weatherSlice,
});
