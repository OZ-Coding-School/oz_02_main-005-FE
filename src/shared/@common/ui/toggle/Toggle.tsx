'use client';

import React, { useState } from 'react';

const Toggle = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`w-[45px] h-[24px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isActive ? 'bg-primary' : 'bg-grayc'
      }`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white w-[19px] h-[18px] rounded-full shadow-md transform transition-transform duration-300 ${
          isActive ? 'translate-x-[18px]' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
