import React from 'react';
import { DeleteIcon } from '../../../../public/icons/create';

interface ProgressBarProps {
  count: number;
  totalStep: number;
}

const ProgressBar = ({ count, totalStep }: ProgressBarProps) => {
  return (
    <div className="w-full h-[3.125rem] flex flex-col justify-between">
      <div className="flex text-gray8 justify-center items-center h-full">
        <p className="relative">
          {count}/{totalStep}
        </p>
        <DeleteIcon className="absolute right-16" onClick={() => console.log('클릭')} />
      </div>

      <div className="mb-5 h-1 bg-gray8">
        <div className={`h-1 bg-primary w-[${count}/${totalStep}]`}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
