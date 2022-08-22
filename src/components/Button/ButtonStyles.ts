import styled from 'styled-components';

export const CircleDiv = styled.div<{ visible: boolean }>`
  position: absolute;
  overflow-x: hidden;
  animation: showCircle 2s;
  z-index: 1;
  bottom: 0%;
  left: 0%;
  opacity: 1;

  @keyframes showCircle {
    from {
      bottom: -15%;
      opacity: 0;
    }

    to {
      bottom: 0%;
      opacity: 1;
    }
  }

  @media screen and (max-width: 410px) {
    opacity: ${(props) => (props.visible ? 0 : 1)};
  }
`;

export const GrayCircleDiv = styled.div<{ visible: boolean }>`
  opacity: 0;
  @media screen and (max-width: 410px) {
    position: absolute;
    opacity: ${(props) => (props.visible ? 1 : 0)};
    overflow-x: hidden;
    z-index: 1;
  }
`;

export const CrossDiv = styled.div<{ visible: boolean }>`
  position: absolute;
  overflow-x: hidden;
  animation: ${(props) => (props.visible ? 'showCross 1s' : 'hideCross 1s')};
  animation-fill-mode: ease-out;

  z-index: 2;
  bottom: 40%;
  left: 40%;
  opacity: ${(props) => (props.visible ? 1 : 0)};

  @keyframes showCross {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: scale(1) rotate(720deg);
      transform-origin: 50% 50%;
    }
  }
  @keyframes hideCross {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: scale(-1) rotate(720deg);
      transform-origin: 50% 50%;
    }
  }

  @media screen and (max-width: 410px) {
    bottom: 30%;
    left: 38%;
  }
`;

export const ButtonDiv = styled.div<{ visible: boolean }>`
  position: absolute;

  width: 78px;
  height: 78px;
  right: 15px;
  bottom: 15px;

  cursor: pointer;

  @media (max-width: 410px) {
    top: ${(props) => (props.visible ? '9px' : '')};
    right: ${(props) => (props.visible ? '9px' : '')};
    width: ${(props) => (props.visible ? '59px' : '')};
    height: ${(props) => (props.visible ? '59px' : '')};
  }
`;

export const MessageBoxDiv = styled.div<{ visible: boolean }>`
  position: absolute;
  overflow-x: hidden;
  animation: ${(props) => (props.visible ? 'none' : 'showMessageBox 5s 1s')};
  animation-fill-mode: forwards;

  z-index: 2;
  bottom: 30%;
  left: 35%;
  opacity: 0;

  @keyframes showMessageBox {
    from {
      bottom: 0%;
      opacity: 0;
    }

    25% {
      bottom: 30%;
      opacity: 1;
    }

    80% {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

export const TextLines3Div = styled.div<{ visible: boolean }>`
  position: absolute;
  overflow-x: hidden;
  animation: ${(props) => (props.visible ? 'none' : 'showTextLines3 2s 4s')};
  z-index: 3;
  bottom: 50%;
  left: 35%;
  opacity: 0;

  @keyframes showTextLines3 {
    from {
      bottom: 100%;
      opacity: 0;
    }

    20% {
      opacity: 0;
    }

    40% {
      bottom: 50%;
      opacity: 1;
    }

    80% {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

export const MessageBoxMirrorDiv = styled.div<{ visible: boolean }>`
  position: absolute;
  overflow-x: hidden;
  animation: ${(props) => (props.visible ? 'none' : 'showMessageBoxMirror 3s 6s')};
  animation-fill-mode: forwards;
  transform: scaleX(-1);

  z-index: 2;
  bottom: 30%;
  left: 35%;
  opacity: 0;

  @keyframes showMessageBoxMirror {
    from {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    80% {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

export const TextLines4Div = styled.div<{ visible: boolean }>`
  position: absolute;
  overflow-x: hidden;
  animation: ${(props) => (props.visible ? 'none' : 'showTextLines4 2s 7s')};
  z-index: 3;
  bottom: 45%;
  right: 35%;
  opacity: 0;

  @keyframes showTextLines4 {
    from {
      bottom: 100%;
      opacity: 0;
    }

    20% {
      opacity: 0;
    }

    40% {
      bottom: 45%;
      opacity: 1;
    }

    80% {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

export const ConstantMessageBoxDiv = styled.div<{ visible: boolean }>`
  position: absolute;
  overflow-x: hidden;
  animation: ${(props) => (props.visible ? 'none' : 'showConstantMessageBox 3s 9s')};
  animation-fill-mode: forwards;

  z-index: 2;
  bottom: 30%;
  left: 35%;
  opacity: 0;

  @keyframes showConstantMessageBox {
    from {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    to {
      opacity: 1;
    }
  }
`;

export const CheckMarkDiv = styled.div<{ visible: boolean }>`
  position: absolute;
  overflow-x: hidden;
  animation: ${(props) => (props.visible ? 'none' : 'showCheckMark 2s 10s')};
  z-index: 3;
  bottom: 45%;
  left: 40%;
  opacity: 0;

  @keyframes showCheckMark {
    from {
      opacity: 0;
    }

    40% {
      opacity: 1;
    }

    80% {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;
