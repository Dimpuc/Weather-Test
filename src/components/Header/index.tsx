import { ChangeEvent, FC } from "react";
import { useSelector } from "react-redux";
import { citySelector } from "../../store/slice/city";
import * as S from "./styled";

interface HeaderProps {
  setValue: (value: string) => void;
  value: string;
}

export const Header: FC<HeaderProps> = ({ setValue, value }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const { city } = useSelector(citySelector);

  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.Title>Weather</S.Title>
        <S.SearchInputWrapper>
          <S.SearchInput value={value} onChange={handleChange} />
        </S.SearchInputWrapper>
      </S.HeaderWrapper>
      {value.length > 0 && city && (
        <S.TableWrapper>
          {city.map((item: any) => (
            <div>{item.name}</div>
          ))}
        </S.TableWrapper>
      )}
    </S.Container>
  );
};
