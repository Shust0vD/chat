import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 17px;
`;

export const MessageDiv = styled.div<{ sender: 'bot' | 'user' }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.sender === 'bot' ? 'flex-start' : 'flex-end')};
`;
