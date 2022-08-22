import React, { useState } from 'react';
import { Circle, MessageBox, CheckMark, Cross, TextLines3, TextLines4, GrayCircle } from 'icons/index';
import {
  ButtonDiv,
  MessageBoxDiv,
  CircleDiv,
  TextLines3Div,
  MessageBoxMirrorDiv,
  TextLines4Div,
  ConstantMessageBoxDiv,
  CheckMarkDiv,
  CrossDiv,
  GrayCircleDiv,
} from './ButtonStyles';

export default function Button() {
  const [visible, setvisible] = useState(false);
  return (
    <ButtonDiv onClick={() => setvisible(!visible)} visible={visible}>
      <CircleDiv visible={visible}>
        <Circle />
      </CircleDiv>

      <MessageBoxDiv visible={visible}>
        <MessageBox />
      </MessageBoxDiv>

      <TextLines3Div visible={visible}>
        <TextLines3 />
      </TextLines3Div>

      <MessageBoxMirrorDiv visible={visible}>
        <MessageBox />
      </MessageBoxMirrorDiv>

      <TextLines4Div visible={visible}>
        <TextLines4 />
      </TextLines4Div>

      <ConstantMessageBoxDiv visible={visible}>
        <MessageBox />
      </ConstantMessageBoxDiv>

      <CheckMarkDiv visible={visible}>
        <CheckMark />
      </CheckMarkDiv>

      <CrossDiv visible={visible}>
        <Cross />
      </CrossDiv>

      <GrayCircleDiv visible={visible}>
        <GrayCircle />
      </GrayCircleDiv>
    </ButtonDiv>
  );
}
