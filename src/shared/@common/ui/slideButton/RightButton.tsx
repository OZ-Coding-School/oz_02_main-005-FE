'use client';
import React, { useState } from 'react';
import { rightActiveButtonIcon, rightButtonIcon } from '../../../../../public/icons/SlideButton';
import Image from 'next/image';

function RightButton({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[3.125rem] h-[3.125rem]">
      <Image src={isHovered ? rightActiveButtonIcon : rightButtonIcon} alt="leftSlideButton" width={50} height={50} />
    </button>
  );
}

export default RightButton;
