import Image, { StaticImageData } from 'next/image';
import React, { MouseEvent, useState } from 'react';

interface IconProps {
  passiveIcon: StaticImageData;
  activeIcon: StaticImageData;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function BottomButton({ passiveIcon, activeIcon, onClick }: IconProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      className="w-[2.1875rem] h-[2.1875rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Image width={35} height={35} alt="bottom menu" src={isHovered ? activeIcon : passiveIcon} />
    </button>
  );
}

export default BottomButton;
