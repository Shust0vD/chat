import React from 'react';
import { WelcomeH1, WelcomeText, WelcomeButton } from './WelcomeMessage.styled';
import { MessagesProps } from 'intefaces/MessagesProps';

const WelcomeMessage: React.FC<MessagesProps> = ({ messages, setMessages }: MessagesProps) => {
  const NewWelcomeMessage = (message: string) => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    setMessages([
      ...messages,
      {
        sender: 'bot',
        text: message,
        time: `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`,
      },
    ]);
  };
  return (
    <>
      <WelcomeH1>Здравствуйте 👋</WelcomeH1>
      <WelcomeText>
        Сотрудники службы поддержки mos.ru ответят на вопросы о работе портала, окажут помощь в получении госуслуг и
        поиске информации
      </WelcomeText>
      <WelcomeButton onClick={() => NewWelcomeMessage('Что-то про "Мои документы"')}>
        Центры госуслуг «Мои документы»
      </WelcomeButton>
      <WelcomeButton onClick={() => NewWelcomeMessage('Что-то про Личный кабинет')}>
        Вопросы по Личному кабинету
      </WelcomeButton>
      <WelcomeButton onClick={() => NewWelcomeMessage('Что-то про молочную кухню')}>Молочная кухня</WelcomeButton>
      <WelcomeButton onClick={() => NewWelcomeMessage('Что-то про карту Москвича')}>Карта Москвича</WelcomeButton>
      <WelcomeButton onClick={() => NewWelcomeMessage('Что-то про базу знаний')}>
        🔎 Найти ответ в базе знаний
      </WelcomeButton>
    </>
  );
};

export default WelcomeMessage;
