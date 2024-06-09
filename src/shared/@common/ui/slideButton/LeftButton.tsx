'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { leftActiveButtonIcon, leftButtonIcon } from '../../../../../public/icons/SlideButton';

function LeftButton({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[3.125rem] h-[3.125rem]">
      <Image src={isHovered ? leftActiveButtonIcon : leftButtonIcon} alt="leftSlideButton" width={50} height={50} />
    </button>
  );
}

export default LeftButton;
