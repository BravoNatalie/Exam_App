import React, { TextareaHTMLAttributes } from 'react';
import { Input } from '../Input';

import { TextAreaContainer } from './TextAreaContainer';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  label: string;
}

export function TextArea({name, label, ...rest}: TextAreaProps) {
  return (
    <TextAreaContainer>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </TextAreaContainer>
  );
}