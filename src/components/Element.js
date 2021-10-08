import styled from "styled-components";

const mobile = 300;

export const Container = styled.div `
  padding: 10px 50px;
  width: 100%;
  background-color: #262626;
  color: #fff;

  @media (max-width: ${mobile}px) {
    padding: 0px 2px;
  }
`;
export const Flex = styled.div `
  display: flex;
  justify-content: center;

  @media (max-width: ${mobile}px) {
    display: inline;
  }
`;

export const H1 = styled.h1 `
  color: #d8d8d8;
  padding: 11px 8px 20px;
  font-weight: 100;
  font-size: 25px;
  text-align: center;
  white-space: pre-wrap;
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

  @media (max-width: ${mobile}px) {
    display: block;
    margin: 10px auto 0px 0px;
  }

  &:hover {
    color: #fff;
    background-color: palevioletred;
  }
`;
export const Grid = styled.div `
  margin-top: 40px;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;

  @media (max-width: ${mobile}px) {
    grid-template-columns: repeat(1, 1fr);
  }
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