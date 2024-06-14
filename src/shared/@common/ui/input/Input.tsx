import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  path: string;
  label?: string;
  isValid: boolean;
  errormessage: string;
}

function Input({ path, label, isValid, ...props }: InputProps) {
  return (
    <div className="flex flex-col w-[350px] h-[74px] text-10 font-medium justify-start gap-[2px]">
      <label htmlFor={label} className={`text-gray6 h-[15px]`}>
        {path === 'rename' ? '' : label}
      </label>
      <input
        name={label}
        className={`border rounded-[5px] border-grayc w-full h-[2.625rem] text-16 p-[10px] font-regular text-grayc ${
          isValid ? 'border-grayc' : 'border-danger'
        }`}
        {...props}
      />
      {!isValid && (
        <label htmlFor={label} className="text-danger">
          {props.errormessage}
        </label>
      )}
    </div>
  );
}

export default Input;
