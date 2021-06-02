  
import React, { InputHTMLAttributes } from 'react';
import { IconType } from "react-icons";

import { InputContainer } from './InputContainer';

type InputProps =  InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  Icon?: IconType;
}

export function Input ({ label, name, Icon, ...rest }: InputProps) {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      {/* { Icon ?
        ( 
          <div className="inputWithIcon">
            <input type="text" id={name} {...rest} />
            <i><Icon className="inputIcon"/></i>
          </div>
        )
        :
        ( <input type="text" id={name} {...rest} /> )
      } */}
      <input type="text" id={name} {...rest} />
    </InputContainer>
  );
}