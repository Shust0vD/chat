import styled from 'styled-components';

export const MainDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 80%;
  max-height: 760px;
  right: 0;
  bottom: 100px;
  margin-right: 10px;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(51, 51, 51, 0.2);
  border-radius: 4px;

  @media screen and (max-width: 410px) {
    width: 100%;
    height: 100%;
    max-height: none;
    bottom: 0;
    margin: 0px;
  }
`;

export const RectangleTopDiv = styled.div`
  display: flex;
  height: 5px;
  top: 0;
  width: 100%;

  @media screen and (max-width: 410px) {
    display: none;
  }
`;

export const InputFieldDiv = styled.div`
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0px 16px 16px;
`;

export const MessagesDiv = styled.div`
  height: 550px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: none;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 410px) {
    top: 0;
    height: 100%;
  }
`;
