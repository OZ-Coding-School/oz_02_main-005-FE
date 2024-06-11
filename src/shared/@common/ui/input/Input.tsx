import React from 'react';

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col w-[366px] h-[58px] text-10 font-medium justify-between">
      <label htmlFor={label} className="text-gray6">
        {label}
      </label>
      <input
        name={label}
        type="text"
        placeholder={placeholder}
        className="border rounded-[5px] border-grayc w-full h-[2.625rem] text-16 p-[10px] font-regular text-grayc"
      />
    </div>
  );
}

export default Input;
