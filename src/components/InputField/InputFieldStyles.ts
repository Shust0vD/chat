import styled from 'styled-components';

export const InputFieldDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;

  background: #ffffff;
  box-shadow: 0px 0px 1px 1px #d6dade;
  border-radius: 2px;
  border-color: grey;
`;

export const SmileButton = styled.button`
  margin-left: 9px;
  margin-right: 9px;
  margin-bottom: 16.5px;
  height: 18px;
  cursor: pointer;
  border: none;
  background: none;
`;

export const EnterMessageTextarea = styled.textarea`
  width: 162px;
  max-height: 80px;
  min-height: 48px;

  padding: 15px 0px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  word-break: break-word;
  box-sizing: border-box;

  border: none;
  background: none;
  outline: none;
  resize: none;

  :placeholder {
    color: #9ea4ac;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const AirplaneButton = styled.button`
  cursor: pointer;
  border: none;
  height: 16px;
  padding: 0px;
  margin-left: 119px;
  margin-right: 9px;
  margin-bottom: 16.5px;
  right: 0;
  background: none;
`;
