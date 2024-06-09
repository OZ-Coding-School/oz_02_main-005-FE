import React, { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';

type ButtonContent = {
  icon?: string;
  activeIcon?: string; 
  label: string;
};

type ButtonProps = {
  type: 'default' | 'default-white' | 'switch';
  onClick: (index?: number) => void;
  children?: React.ReactNode;
  buttonContents?: ButtonContent[];
}

const Button = ({ type, onClick, children, buttonContents = [] }: ButtonProps) => {
  const [activeButton, setActiveButton] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveButton(index);
    onClick(index);
  };

  useEffect(() => {
    if (type === 'switch') {
      setActiveButton(0);
    }
  }, [type]);

  if (type === 'switch') {
    return (
      <div className="w-[390px] h-[48px] bg-white rounded-[12px] flex space-x-2 p-2">
        {buttonContents.map((content, index) => {
          const isActive = activeButton === index;
          const iconSrc = isActive && content.activeIcon ? content.activeIcon : content.icon;

          return (
            <button 
              key={index}
              className={`flex-1 h-full rounded-[8px] font-medium flex items-center 
                          ${content.icon ? 'justify-evenly pr-8' : 'justify-center'} 
                          ${isActive ? 'bg-gray text-primary' : 'bg-white text-gray8'}`}
              onClick={() => handleClick(index)}
            >
              {iconSrc && (
                <div className="w-[30px] h-[30px]">
                  <Image 
                    src={iconSrc} 
                    alt={content.label} 
                    width={24} 
                    height={24} 
                  />
                </div>
              )}
              {content.label}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    type === 'default' ? (
      <button 
        className="w-[350px] h-[56px] text-white bg-grayc rounded-[6px] font-medium hover:bg-primary"
        onClick={() => onClick()}
      >
        {children}
      </button>
    ) : (
      <button 
        className="w-[350px] h-[56px] text-gray8 outline outline-1 outline-grayc bg-white rounded-[6px] font-medium hover:text-text_primary hover:outline-text_primary"
        onClick={() => onClick()}
      >
        {children}
      </button>
    )
  );
};

export default Button;
