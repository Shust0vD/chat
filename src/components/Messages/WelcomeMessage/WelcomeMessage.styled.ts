import styled from 'styled-components';

export const WelcomeH1 = styled.h1`
  margin-top: 80px;
  margin-bottom: 8px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 37px;
  color: #333333;

  @media screen and (max-width: 410px) {
    margin-top: 0px;
  }
`;

export const WelcomeText = styled.p`
  margin: 0px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #0c1014;
  margin-bottom: 8px;
`;

export const WelcomeButton = styled.button`
  width: 100%;
  height: 43px;
  margin-bottom: 8px;
  cursor: pointer;

  background: #ffffff;
  border: 1px solid #dee3e9;
  box-shadow: 0px 2px 4px rgba(44, 48, 52, 0.15);
  border-radius: 8px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  text-align: center;

  color: #0848c0;

  :hover {
    box-shadow: 0px 2px 4px rgba(44, 48, 52, 0.4);
  }
`;
