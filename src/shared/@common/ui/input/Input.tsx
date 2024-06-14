import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isValid: boolean;
  errorMessage: string;
}

function Input({ label, isValid, errorMessage, ...props }: InputProps) {
  return (
    <div className="flex flex-col w-[366px] h-[65px] text-10 font-medium justify-start gap-[2px] relative">
      {label && (
        <label id={label} htmlFor={label} className={`text-gray6 h-[15px]`}>
          {label}
        </label>
      )}
      <input
        id={label}
        name={label}
        className={`border rounded-[5px] w-full h-[2.625rem] text-16 p-[10px] font-regular placeholder:text-grayc text-text_primary ${
          isValid ? 'border-grayc' : 'border-danger'
        }`}
        {...props}
      />
      {!isValid && (
        <label id={label} htmlFor={label} className="text-danger h-[15px]">
          {errorMessage}
        </label>
      )}
    </div>
  );
}

export default Input;
