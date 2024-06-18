import React from 'react';
import RatingStars from '../@common/ui/ratingStars/RatingStars';


interface CardDeckItemProps {
  deckTitle: string;
  count: number;
  constructor: string;
}

const CardDeckItem = ({ deckTitle, count, constructor }: CardDeckItemProps) => {
  return (
    <div className="bg-white border border-gray border-1 min-w-[12.0625rem] rounded-[0.5rem] p-[0.75rem] shadow flex flex-col h-[9.125rem] justify-between">
      <div className="flex flex-col gap-[0.5rem]">
        <p className="text-20 font-bold text-text_primary">{deckTitle}</p>
        <div className="bg-primary rounded-[0.3125rem] w-[3.8125rem] text-12 px-[0.625rem] py-[0.3125rem] text-white flex justify-center items-center ">
          <p>{count} 단어</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-text_secondary h-4 text-12">{constructor}</p>
        <RatingStars />
      </div>
    </div>
  );
};

export default CardDeckItem;