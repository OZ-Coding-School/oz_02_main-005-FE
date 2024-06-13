import React from 'react';
import RatingStars from '../RatingStars/RatingStars';

interface CardListItemProps {
  title: string;
  count: number;
  description: string;
  constructor: string;
}

function CardListItem({ title, count, description, constructor }: CardListItemProps) {
  return (
    <div className="w-[366px] h-[10rem] bg-white rounded-[4px] flex flex-col m-[1rem] gap-[1.5rem] p-[0.75rem]">
      <div className="w-full flex flex-col gap-[1.5rem]">
        <div className="flex items-center justify-between">
          <p className="font-medium text-24">{title}</p>
          <div className="bg-primary rounded-[5px] px-[10px] py-[5px] text-12 text-white">{`${count} 단어`}</div>
        </div>
        <p className="text-text_secondary">{description}</p>
      </div>
      <div className="flex gap-[0.5rem] items-center justify-between">
        <p className="text-12 text-text_primary">{constructor}</p>
        <RatingStars />
      </div>
    </div>
  );
}

export default CardListItem;
