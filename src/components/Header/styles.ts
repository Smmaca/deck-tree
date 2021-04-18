import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgb(14, 17, 18);
  border-bottom: solid 2px #666;
  color: white;
  padding: 10px;
  font-size: 20px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const Toolbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
