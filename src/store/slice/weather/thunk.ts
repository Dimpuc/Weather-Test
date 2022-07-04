import { createAsyncThunk } from "@reduxjs/toolkit";
import { get_weather } from "../../../api/api";

export const getWeather = createAsyncThunk("/", async (params: any) => {
  const response = await get_weather(params);

  return response.data;
});
