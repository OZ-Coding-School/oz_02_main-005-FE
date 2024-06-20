import React from 'react';
import { DangerIcon, SuccessIcon } from '../../../../public/icons/lib';
interface ChoiceItemProps {
  type: 'correct' | 'choice' | 'wrong';
  choice: string;
}
const ChoiceItem = ({ type, choice }: ChoiceItemProps) => {
  return (
    <>
      {type === 'correct' && (
        <div className="w-[344px] h-[36px] px-[0.75rem] gap-[0.75rem] text-success flex justify-start items-center bg-successlight rounded-[12px] font-medium hover:bg-gray outline outline-1 ">
          <SuccessIcon />
          {choice}
        </div>
      )}
      {type === 'choice' && (
        <div className="w-[344px] h-[36px]  px-[0.75rem] gap-[0.75rem] text-gray8 flex justify-start items-center bg-white rounded-[12px] font-medium hover:bg-gray outline outline-1">
          {choice}
        </div>
      )}
      {type === 'wrong' && (
        <div className="w-[344px] h-[36px]  px-[0.75rem] gap-[0.75rem] text-danger flex justify-start items-center bg-dangerlight rounded-[12px] font-medium hover:bg-dangergray outline outline-1 outline-red-500">
          <DangerIcon />
          {choice}
        </div>
      )}
    </>
  );
};

export default ChoiceItem;
