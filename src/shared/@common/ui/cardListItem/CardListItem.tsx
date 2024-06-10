import React from 'react';

function CardListItem() {
  return (
    <div className="w-full h-[10rem] bg-white rounded-[4px]">
      <div className="flex flex-col m-[1rem] gap-[1.5rem]">
        <div className="w-full flex flex-col gap-[1.5rem]">
          <div className="flex items-center justify-between">
            <p className="font-medium text-24">Job Security</p>
            <div className="bg-primary rounded-[5px] px-[10px] py-[5px] text-12 text-white">nn 단어</div>
          </div>
          <p className="text-text_secondary">the quick fox jumps over the lazy dog</p>
        </div>
        <div className="flex gap-[0.5rem] items-center justify-between">
          <p className="text-12 text-text_primary">호범</p>
          <ul className="flex stars">
            <li>별</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardListItem;
