import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const citySelector = (state: RootState) => state.citySlice;

export default weatherSlice.reducer;
