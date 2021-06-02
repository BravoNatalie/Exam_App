import React, { InputHTMLAttributes } from 'react';
import { HiCheckCircle } from 'react-icons/hi';

import { Input } from '../Input';

import { AnswerContainer } from './AnswerContainer';


type AnswerProps = InputHTMLAttributes<HTMLInputElement> & {
  isCorrect: boolean;
  label: string;
  text: string;
}

export function Answer({isCorrect, label, text }: AnswerProps) {
  return (
    <AnswerContainer>
      <span>{label}</span>
      <Input 
        name="answer"
        Icon={HiCheckCircle}
        value={text}
        onChange={() => { }}
      />
    </AnswerContainer>
  );
}