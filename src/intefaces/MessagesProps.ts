import { MessageInterface } from './MessageInterface';

export interface MessagesProps {
  messages: MessageInterface[];
  setMessages: (messages: MessageInterface[]) => void;
}
