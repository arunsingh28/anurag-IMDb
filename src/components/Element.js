import styled from "styled-components";

export const Container = styled.div `
  padding: 10px 50px;
  width: 100%;
  background-color: #262626;
  color: #fff;
`;
export const Flex = styled.div `
  display: flex;
  justify-content: center;
`;

export const H1 = styled.h1 `
  color: #d8d8d8;
  padding: 11px 8px 20px;
  font-weight: 100;
  font-size: 25px;
  text-align: center;
`;
export const Input = styled.input `
  height: 45px;
  border-radius: 3px;
  border: none;
  padding-left: 5px;
  width: 100%;
  font-size: 20px;
  margin-top: 10px;

  &::placeholder {
    font-size: 17px;
  }
`;
export const Error = styled.h1 `
  text-align: center;
  text-transform: uppercase;
  margin-top: 100px;
`;
export const Button = styled.button `
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  height: 45px;
  margin-top: 10px;
  padding: 0px 50px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    background-color: palevioletred;
  }
`;
export const Grid = styled.div `
  margin-top: 50px;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  /* align-items: center; */
`;

export const Card = styled.div `
  padding: 4px;
  border: 2px #757373 solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;