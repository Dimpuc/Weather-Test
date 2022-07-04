import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { citySelector } from "../../store/slice/city";
import { getCity } from "../../store/slice/city/thunk";
import { AppDispatch } from "../../store/store";

// import * as S from "./styled";

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(
      getCity({
        q: searchValue,
      })
    );
  }, [searchValue]);

  return (
    <div>
      <Header value={searchValue} setValue={setSearchValue} />
      <h1>Title</h1>
    </div>
  );
};
