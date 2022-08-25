import React from 'react';
import { MessageInterface } from 'intefaces/MessageInterface';
import { MessageContent, Text, Time } from './Message.styled';

export default function Message({ sender, text, time }: MessageInterface) {
  const regex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;
  const textHtml = text.replace(regex, (url) => `<a href=${url}>${url}</a>`);

  return (
    <MessageContent sender={sender}>
      <Text dangerouslySetInnerHTML={{ __html: `${textHtml}` }}></Text>
      <Time>{time}</Time>
    </MessageContent>
  );
}
