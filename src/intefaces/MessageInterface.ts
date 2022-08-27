export interface MessageInterface {
  sender: 'bot' | 'user';
  text: string;
  time: string;
}
