import React from 'react';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';
import { MainDiv, MessageDiv } from './MessagesStyles';
import { MessagesProps } from 'intefaces/MessagesProps';
import Message from './Message/Message';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Messages.css';

const Messages: React.FC<MessagesProps> = ({ messages, setMessages }: MessagesProps) => {
  return (
    <MainDiv>
      <WelcomeMessage messages={messages} setMessages={setMessages} />

      <TransitionGroup>
        {messages.map((message) => (
          <CSSTransition key={messages.indexOf(message)} timeout={200} classNames="message">
            <MessageDiv sender={message.sender}>
              <Message sender={message.sender} text={message.text} time={message.time} />
            </MessageDiv>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </MainDiv>
  );
};

export default Messages;
