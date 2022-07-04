import styled from "styled-components";

export const Container = styled.div`
  color: white;
  position: relative;
`;

export const HeaderWrapper = styled.div`
  background-color: #00a2ff;
  display: flex;
  align-items: center;
  padding-left: 50px;
  height: 70px;
  margin-top: 40px;
  width: 100vw;
`;

export const Title = styled.h3`
  text-transform: uppercase;
`;

export const SearchInputWrapper = styled.div`
  margin-left: 50px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  z-index: 100;
  padding: 5px;
  cursor: pointer;
  width: 140px;
  border-radius: 10px;
`;

export const TableWrapper = styled.div`
  width: 100%;
  position: absolute;
  background-color: black;
  opacity: 0.3;
`;
