import React from 'react';
import Button from '../@common/ui/button/Button';
import CardDeckItem from './CardDeckItem';

interface CardDeckListProps {
  title: string;
  deckTitle: string;
  count: number;
  constructor: string;
}

const CardDeckList = ({ title, deckTitle, count, constructor }: CardDeckListProps) => {
  return (
    <div className="flex flex-col gap-[0.75rem]">
      <div className="flex justify-between font-bold">
        <p className="text-24 text-text_primary">{title}</p>
        <Button type="xs-more">더보기</Button>
      </div>
      <div className="flex gap-[0.75rem] overflow-x-scroll w-[22.875rem]">
        <CardDeckItem deckTitle={deckTitle} count={count} constructor={constructor} />
        <CardDeckItem deckTitle={deckTitle} count={count} constructor={constructor} />
        <CardDeckItem deckTitle={deckTitle} count={count} constructor={constructor} />
      </div>
    </div>
  );
};

export default CardDeckList;
