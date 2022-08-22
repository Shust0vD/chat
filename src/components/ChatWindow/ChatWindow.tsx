import React, { useEffect, useRef, useState } from 'react';
import { MainDiv, RectangleTopDiv, InputFieldDiv, MessagesDiv } from './ChatWindowStyles';
import { RectangleTop } from 'icons/index';
import InputField from 'components/InputField/InputField';
import Messages from 'components/Messages/Messages';
import { MessageInterface } from 'intefaces/MessageInterface';

export default function ChatWindow() {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const messagesRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  return (
    <MainDiv>
      <RectangleTopDiv>
        <RectangleTop />
      </RectangleTopDiv>

      <MessagesDiv ref={messagesRef}>
        <Messages messages={messages} setMessages={setMessages} />
      </MessagesDiv>

      <InputFieldDiv>
        <InputField messages={messages} setMessages={setMessages} />
      </InputFieldDiv>
    </MainDiv>
  );
}
