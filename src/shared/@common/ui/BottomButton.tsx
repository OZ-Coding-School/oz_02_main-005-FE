'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

interface IconProps {
  passiveIcon: StaticImageData;
  activeIcon: StaticImageData;
}

function BottomButton({ passiveIcon, activeIcon }: IconProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className="w-[2.1875rem] h-[2.1875rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Image width={35} height={35} alt="bottom menu" src={isHovered ? activeIcon : passiveIcon} />
    </button>
  );
}

export default BottomButton;
