import React, { useState } from 'react';
import Button from 'components/Button/Button';
import ChatWindow from 'components/ChatWindow/ChatWindow';

export default function Chat() {
  const [visible, setvisible] = useState(false);
  return (
    <>
      {visible && <ChatWindow />}
      <div onClick={() => setvisible(!visible)}>
        <Button />
      </div>
    </>
  );
}
