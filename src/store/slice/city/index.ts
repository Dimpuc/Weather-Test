import { createSlice } from "@reduxjs/toolkit";
import { getCity } from "./thunk";
import { RootState } from "../../store";

interface initialStateType {
  city: any;
}

const initialState: initialStateType = {
  city: [],
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCity.fulfilled, (state, { payload }) => {
      state.city = payload;
    });
  },
});

export const citySelector = (state: RootState) => state.citySlice;

export default citySlice.reducer;
