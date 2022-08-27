import React from 'react';
import { MainDiv, SmileButton } from './SmilesWindow.styled';
import { Smiles } from 'icons/Smiles';
import { SmilesWindowProps } from 'intefaces/SmilesWindowProps';

export default function SmilesWindow({ message, setMessage }: SmilesWindowProps) {
  return (
    <MainDiv>
      {Smiles.map((smile) => (
        <SmileButton key={Smiles.indexOf(smile)} onClick={() => setMessage(message + smile)}>
          {smile}
        </SmileButton>
      ))}
    </MainDiv>
  );
}
