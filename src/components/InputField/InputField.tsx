import React, { useEffect, useRef, useState } from 'react';
import { AirplaneButton, EnterMessageTextarea, InputFieldDiv, SmileButton } from './InputField.styled';
import { Airplane, Smile } from 'icons/index';
import SmilesWindow from 'components/SmilesWindow/SmilesWindow';
import { MessagesProps } from 'intefaces/MessagesProps';

export default function InputField({ messages, setMessages }: MessagesProps) {
  const [message, setMessage] = useState('');
  const [smilesVisible, setSmilesVisible] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '48px';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [message]);

  const NewMessage = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    setMessages([
      ...messages,
      {
        sender: 'user',
        text: message,
        time: `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`,
      },
      {
        sender: 'bot',
        text: 'Не могу ответить',
        time: `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`,
      },
    ]);
    setMessage('');
    setSmilesVisible(false);
  };

  return (
    <>
      {smilesVisible && <SmilesWindow message={message} setMessage={setMessage} />}
      <InputFieldDiv>
        <SmileButton onClick={() => setSmilesVisible(!smilesVisible)}>
          <Smile />
        </SmileButton>

        <EnterMessageTextarea
          placeholder="Введите сообщение..."
          value={message}
          ref={textareaRef}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setSmilesVisible(false)}
        />

        {message && (
          <AirplaneButton onClick={NewMessage}>
            <Airplane />
          </AirplaneButton>
        )}
      </InputFieldDiv>
    </>
  );
}
