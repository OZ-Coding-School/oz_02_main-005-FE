import React, { FC, SVGProps } from 'react';

interface IconProps {
  Icon: FC<SVGProps<SVGElement>>;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

function BottomButton({ Icon, onClick, className }: IconProps) {
  return (
    <button onClick={onClick} className="flex justify-center items-center">
      <Icon className={`fill-gray8 hover:fill-primary ${className}`} />
    </button>
  );
}

export default BottomButton;
