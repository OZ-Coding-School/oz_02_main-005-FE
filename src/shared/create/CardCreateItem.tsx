import Image from 'next/image';
import React from 'react';
import { DeleteIcon, ImageIcon } from '../../../public/icons/create';

interface CreateItemProps {
  idx: number;
}

const CardCreateItem = ({ idx }: CreateItemProps) => {
  return (
    <div className="bg-white rounded-[12px] flex flex-col w-[22.875rem] p-[12px]">
      <div className="w-full flex justify-between items-center">
        <p className="text-text_primary">{idx}</p>
        <button className="text-danger w-[16px]">
          <DeleteIcon />
        </button>
      </div>

      <div className="w-full h-[4.125rem]">
        <input type="text" className="w-full border-b-[1.5px] border-b-black leading-10 " />
        <label className="text-12 text-gray8">단어</label>
      </div>

      <div className="w-full h-[4.125rem] flex justify-between">
        <div className="w-[17.375rem] flex flex-col justify-end">
          <input type="text" className="w-full h-[2.59375rem] border-b-[1.5px] border-b-black" />
          <label className="text-12 text-gray8">뜻</label>
        </div>

        <div className="">
          <div className="w-[3.125rem] h-[3.125rem] border-[2px] border-dashed border-gray8 rounded-[8px] flex justify-center items-center flex-col gap-[4px]">
            <ImageIcon />
            <p className="text-[8px] text-gray8">이미지 첨부</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCreateItem;
