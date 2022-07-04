import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { HomePage } from "./pages/home-page";
import { citySelector } from "./store/slice/city";
import { getWeather } from "./store/slice/weather/thunk";
import { AppDispatch, useAppSelector } from "./store/store";

function App() {
  // const dispatch = useDispatch<AppDispatch>();

  // const { lat, lon } = useAppSelector(citySelector);

  // useEffect(() => {
  //   dispatch(
  //     getWeather({
  //       lat: lat,
  //       lon: lon,
  //     })
  //   );
  // }, [lat, lon]);
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
