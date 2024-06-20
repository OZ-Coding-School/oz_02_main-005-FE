import React, { ButtonHTMLAttributes } from 'react';
import { DropdownIcon } from '../../../public/icons/comm';

interface SelectButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const SelectListButton = ({ title, ...props }: SelectButtonProps) => {
  return (
    <button
      {...props}
      className="border-2 border-grayc rounded-[0.5rem] h-[2.25rem] text-text_secondary flex items-center justify-center gap-2 flex-nowrap shadow-md">
      <p>{title}</p>
      <DropdownIcon />
    </button>
  );
};

export default SelectListButton;
