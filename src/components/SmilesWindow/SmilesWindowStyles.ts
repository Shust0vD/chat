import styled from 'styled-components';

export const MainDiv = styled.div`
  position: absolute;
  bottom: 70px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(51, 51, 51, 0.2);
  border-radius: 4px;
  width: 120px;
`;

export const SmileButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  padding: 5px;
  width: 30px;

  :hover {
    background: LightGray;
  }
`;
