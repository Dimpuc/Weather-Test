import axios from "axios";

export const get_city = (params: any) =>
  axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${params.q}&limit=5&appid=c4c707f35ee3ca4fc5cb6cb0f10c6a1e`
  );

export const get_weather = (params: any) =>
  axios.get(`
https://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&appid=c4c707f35ee3ca4fc5cb6cb0f10c6a1e
`);
