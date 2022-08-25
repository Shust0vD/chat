import styled from 'styled-components';

export const MessageContent = styled.div<{ sender: 'bot' | 'user' }>`
  background: ${(props) => (props.sender === 'bot' ? '#f3f5f7' : '#DEECFD')};
  border-radius: 8px;
  margin-top: 16px;
  padding: 10px;
  max-width: 80%;
`;

export const Text = styled.p`
  margin: 0px;
  margin-right: 33px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  word-break: break-word;
  white-space: break-spaces;

  color: #000000;
`;

export const Time = styled.p`
  margin: 0px;
  text-align: right;
  bottom: 0;
  float: right;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #9ea4ac;
`;
