import SlideButton from '@/shared/@common/ui/slideButton/SlideButton';
import React from 'react';

const CardItem = ({ content }: { content: string }) => {
  return (
    <>
      <div className="bg-white w-[22.875rem] h-[33.5rem] flex flex-col rounded-[0.75rem] shadow-md">
        <div className="flex justify-center items-center h-full text-20 font-bold">{content}</div>
        <div className="bg-primary h-[2.1875rem] rounded-b-[0.75rem]" />
      </div>
      <SlideButton />
    </>
  );
};

export default CardItem;
