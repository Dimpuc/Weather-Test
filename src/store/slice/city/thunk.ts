import { createAsyncThunk } from "@reduxjs/toolkit";
import { get_city } from "../../../api/api";
// import { getCharacter } from "../../api/api";

export const getCity = createAsyncThunk("/", async (params: any) => {
  // const data = { name: params.name, page: params.page };
  const response = await get_city(params);

  console.log(response);

  // params.endLoading && params.endLoading();
  return response.data;
});
