import styled from 'styled-components';

export const Wrapper = styled.button`
  background-color: white;
  color: black;
  padding: 20px;
  width: 100%;
  margin: 10px 0;
  border-radius: 5px;
  font-size: 22px;
  font-family: sans-serif;
  cursor: pointer;

  :hover {
    box-shadow: inset 10px 10px 58px -19px rgba(0,0,0,0.75);
  }

  :active {
    background-color: #ccc;
  }
`;
