import React, { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';

type ButtonContent = {
  icon?: string;
  activeIcon?: string; 
  label?: string;
};

type ButtonProps = {
  type: 'xl-full' | 'xl-line' | 'xl-line-plus' | 'l-card' | 'l-delete' | 'l-rewrite' | 'm-line' | 'm-more' | 's-more' | 'xs-more' | 's-full' | 'xs-full' | 'black' | 'group';
  onClick: (index?: number) => void;
  children?: React.ReactNode;
  buttonContents?: ButtonContent[];
}

const Button = ({ type, onClick, children, buttonContents = [] }: ButtonProps) => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleClick = (index: number) => {
    setActiveButton(index);
    onClick(index);
  };

  useEffect(() => {
    if (type === 'group') {
      setActiveButton(0);
    }
  }, [type]);

  if (type === 'group') {
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
                    alt={content.label || 'icon'} 
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
    type === 'xl-full' ? (
      <button 
        className="w-[350px] h-[56px] text-white bg-grayc rounded-[6px] font-medium hover:bg-primary"
        onClick={() => onClick()}
      >
        {children}
      </button>
    ) : type === 'xl-line' ? (
      <button 
        className="w-[350px] h-[56px] text-gray8 outline outline-1 outline-grayc bg-white rounded-[6px] font-medium hover:text-text_primary hover:outline-black"
        onClick={() => onClick()}
      >
        {children}
      </button>
    ) : type === 'xl-line-plus' ? (
      <button 
        className="w-[367px] h-[44px] text-gray8 flex justify-center items-center outline outline-1 outline-grayc bg-white rounded-[6px] font-medium hover:text-text_primary hover:outline-black"
        onClick={() => onClick()}
      >
      <div className='w-[24px] h-[24px]'>
        <Image 
          src='/icons/plus.png' 
          alt='icon' 
          width={24} 
          height={24} 
        />
      </div>
      </button>
    ) : type === 'l-card' ? (
      <button 
        className="w-[390px] h-[36px] text-primary flex justify-center items-center bg-white rounded-[12px] font-medium hover:bg-grayc"
        onClick={() => onClick()}
      >
        <div className='flex items-center'>
          <div className='w-[20px] h-[20px] pr-1 flex items-center'>
            <Image 
              src='/icons/plus-primary.png' 
              alt='icon' 
              width={24} 
              height={24} 
            />
          </div>
          {children}
        </div>
      </button>
    ) : type === 'l-delete' ? (
      <button 
        className="w-[390px] h-[36px] text-danger flex justify-center items-center bg-dangerlight rounded-[12px] font-medium hover:bg-dangergray outline outline-1 outline-red-500"
        onClick={() => onClick()}
      >
        {children}
      </button>
     ) : type === 'l-rewrite' ? (
      <button 
        className="w-[346px] h-[44px] text-danger flex justify-center items-center bg-dangerlight rounded-[12px] font-medium hover:bg-dangergray outline outline-1 outline-red-500"
        onClick={() => onClick()}
      >
        {children}
      </button>
    ) : type === 'm-line' ? (
      <button 
        className="w-[155px] h-[55px] text-gray8 outline outline-1 outline-grayc bg-white rounded-[6px] font-medium hover:text-text_primary hover:outline-black"
        onClick={() => onClick()}
      >
        {children}
      </button> 
    ) : type === 'm-more' ? (
      <button 
        className="w-[189px] h-[56px] text-white bg-primary rounded-full font-medium hover:bg-gray8"
        onClick={() => onClick()}
      >
        <div className='flex items-center justify-center'>
          {children}
          <div className='w-[18px] h-[18px] flex items-center ml-2'>
            <Image 
              src='/icons/right-arrow-white.png' 
              alt='icon' 
              width={24} 
              height={24} 
            />
          </div>
        </div>
      </button>
     ) : type === 's-more' ? (
      <button 
        className="w-[104px] h-[40px] text-primary outline outline-1 outline-primary bg-white rounded-full font-medium hover:text-text_primary hover:outline-black"
        onClick={() => onClick()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='flex items-center justify-center ml-1'>
          {children}
          <div className='w-[15px] h-[15px] flex items-center ml-1'>
            <Image 
              src={isHovered ? '/icons/right-arrow-black.png' : '/icons/right-arrow-primary.png'} 
              alt='icon' 
              width={12} 
              height={12} 
            />
          </div>
        </div>
      </button>  
     ) : type === 'xs-more' ? (
      <button 
        className="w-[80px] h-[32px] text-gray8 text-12 outline outline-1 outline-grayc bg-white rounded-full font-medium hover:text-text_primary hover:outline-black"
        onClick={() => onClick()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='flex items-center justify-center ml-1'>
          {children}
          <div className='w-[12px] h-[12px] flex items-center ml-1'>
            <Image 
              src={isHovered ? '/icons/right-arrow-black.png' : '/icons/right-arrow-gray.png'} 
              alt='icon' 
              width={12} 
              height={12} 
            />
          </div>
        </div>
      </button>           
    ) : type === 's-full' ? (
        <button 
          className="w-[100px] h-[40px] text-white bg-primary rounded-[4px] font-medium hover:bg-gray8"
          onClick={() => onClick()}
        >
          {children}
        </button>
    ) : type === 'xs-full' ? (
      <button 
        className="w-[45px] h-[30px] text-12 text-white bg-primary rounded-[4px] font-medium hover:bg-gray8"
        onClick={() => onClick()}
      >
        {children}
      </button> 
    ) : type === 'black' ? (
      <button 
        className="w-[300px] h-[54px] text-white bg-black rounded-[6px] font-medium"
        onClick={() => onClick()}
      >
        {children}
      </button>
    ) : null
  );
};

export default Button;
