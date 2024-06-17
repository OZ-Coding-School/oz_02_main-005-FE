'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type ButtonContent = {
  icon?: string;
  activeIcon?: string;
  label?: string;
};

type ButtonProps = {
  type:
    | 'xl-full'
    | 'xl-full-white'
    | 'xl-full-primary'
    | 'xl-line'
    | 'xl-line-primary'
    | 'xl-line-plus'
    | 'l-card'
    | 'l-delete'
    | 'l-select'
    | 'l-rewrite'
    | 'm-line'
    | 'm-more'
    | 's-more'
    | 'xs-more'
    | 's-full'
    | 'xs-full'
    | 'black'
    | 'back'
    | 'group';
  onClick?: (index?: number) => void;
  children?: React.ReactNode;
  buttonContents?: ButtonContent[];
};

const Button = ({ type, onClick, children, buttonContents = [], ...props }: ButtonProps) => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = (index?: number) => {
    if (type === 'group') {
      setActiveButton(index as number);
    }
    if (onClick) {
      onClick(index);
    }
    if (type === 'back') {
      router.back();
    }
  };

  useEffect(() => {
    if (type === 'group') {
      setActiveButton(0);
    }
  }, [type]);

  if (type === 'group') {
    return (
      <div className="w-[366px] h-[48px] bg-white rounded-[12px] flex space-x-2 p-2">
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
              {...props}>
              {iconSrc && (
                <div className="relative w-[30px] h-[30px]">
                  <Image src={iconSrc} alt="icon" fill />
                </div>
              )}
              {content.label}
            </button>
          );
        })}
      </div>
    );
  }

  const buttonClassName = (baseClass: string) => `${baseClass} ${isHovered ? 'hover:opacity-75' : ''}`;

  const buttonVariants = {
    'xl-full': buttonClassName('w-[350px] h-[56px] text-white bg-grayc rounded-[6px] font-medium hover:bg-primary'),
    'xl-full-white': buttonClassName(
      'w-[350px] h-[56px] text-primary bg-white rounded-[6px] font-medium hover:text-text_primary hover:bg-grayc',
    ),
    'xl-full-primary': buttonClassName(
      'w-[350px] h-[56px] text-white bg-primary rounded-[6px] font-medium hover:text-text_primary',
    ),
    'xl-line': buttonClassName(
      'w-[350px] h-[56px] text-gray8 outline outline-1 outline-grayc bg-white rounded-[6px] font-medium hover:text-text_primary hover:outline-black',
    ),
    'xl-line-primary': buttonClassName(
      'w-[350px] h-[56px] text-gray8 outline outline-1 outline-grayc bg-white rounded-[6px] font-medium hover:text-white hover:bg-primary',
    ),
    'xl-line-plus': buttonClassName(
      'w-[366px] h-[44px] text-gray8 flex justify-center items-center outline outline-1 outline-grayc bg-white rounded-[6px] font-medium hover:text-text_primary hover:outline-black',
    ),
    'l-card': buttonClassName(
      'w-[366px] h-[36px] text-primary flex justify-center items-center bg-white rounded-[12px] font-medium hover:bg-grayc',
    ),
    'l-delete': buttonClassName(
      'w-[366px] h-[36px] text-danger flex justify-center items-center bg-dangerlight rounded-[12px] font-medium hover:bg-dangergray outline outline-1 outline-red-500',
    ),
    'l-select': buttonClassName(
      'w-[342px] h-[36px] text-gray8 flex justify-center items-center bg-white rounded-[12px] font-medium hover:bg-primarylight hover:outline-primary hover:text-primary outline outline-1 outline-gray8',
    ),
    'l-rewrite': buttonClassName(
      'w-[346px] h-[44px] text-danger flex justify-center items-center bg-dangerlight rounded-[12px] font-medium hover:bg-dangergray outline outline-1 outline-red-500',
    ),
    'm-line': buttonClassName(
      'w-[155px] h-[55px] text-gray8 outline outline-1 outline-grayc bg-white rounded-[6px] font-medium hover:text-text_primary hover:outline-black',
    ),
    'm-more': buttonClassName('w-[189px] h-[56px] text-white bg-primary rounded-full font-medium hover:bg-gray8'),
    's-more': buttonClassName(
      'w-[104px] h-[40px] text-primary outline outline-1 outline-primary bg-white rounded-full font-medium hover:text-text_primary hover:outline-black',
    ),
    'xs-more': buttonClassName(
      'w-[80px] h-[32px] text-gray8 text-12 outline outline-1 outline-grayc bg-white rounded-full font-medium hover:text-text_primary hover:outline-black',
    ),
    's-full': buttonClassName('w-[100px] h-[40px] text-white bg-primary rounded-[4px] font-medium hover:bg-gray8'),
    'xs-full': buttonClassName(
      'w-[45px] h-[30px] text-12 text-white bg-primary rounded-[4px] font-medium hover:bg-gray8',
    ),
    black: buttonClassName('w-[300px] h-[54px] text-white bg-black rounded-[6px] font-medium'),
    back: buttonClassName('w-[24px] h-[24px] flex items-center justify-center'),
  };

  return (
    <button
      className={buttonVariants[type]}
      onClick={() => handleClick()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}>
      {type === 'back' ? (
        <div className="relative w-[24px] h-[24px]">
          <Image src="/icons/back-arrow.png" alt="back" fill />
        </div>
      ) : type === 'xl-line-plus' ? (
        <div className="relative w-[24px] h-[24px]">
          <Image src="/icons/plus.png" alt="icon" fill />
        </div>
      ) : type === 'l-card' ? (
        <div className="flex items-center">
          <div className="relative w-[20px] h-[20px] pr-1 flex items-center">
            <Image src="/icons/plus-primary.png" alt="icon" fill />
          </div>
          {children}
        </div>
      ) : type === 'm-more' ? (
        <div className="flex items-center justify-center">
          {children}
          <div className="relative w-[18px] h-[18px] flex items-center ml-2">
            <Image src="/icons/right-arrow-white.png" alt="icon" fill />
          </div>
        </div>
      ) : type === 's-more' ? (
        <div className="flex items-center justify-center ml-1">
          {children}
          <div className="relative w-[15px] h-[15px] flex items-center ml-1">
            <Image
              src={isHovered ? '/icons/right-arrow-black.png' : '/icons/right-arrow-primary.png'}
              alt="icon"
              fill
            />
          </div>
        </div>
      ) : type === 'xs-more' ? (
        <div className="flex items-center justify-center ml-1">
          {children}
          <div className="relative w-[12px] h-[12px] flex items-center ml-1">
            <Image src={isHovered ? '/icons/right-arrow-black.png' : '/icons/right-arrow-gray.png'} alt="icon" fill />
          </div>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
