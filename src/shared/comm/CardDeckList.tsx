import React from 'react';
import Button from '../@common/ui/button/Button';
import CardDeckItem from './CardDeckItem';
import { useRouter } from 'next/navigation';

interface CardDeckListProps {
  title: keyof typeof listType;
  deckTitle: string;
  count: number;
  constructor: string;
}

const listType = {
  '인기카드 뭉치': 'popular',
  '신규카드 뭉치': 'new',
  '많이 저장한 카드 뭉치': 'download',
};

const CardDeckList = ({ title, deckTitle, count, constructor }: CardDeckListProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-[0.75rem]">
      <div className="flex justify-between font-bold">
        <p className="text-24 text-text_primary">{title}</p>
        <Button type="xs-more" onClick={() => router.push(`comm/${listType[title]}`)}>
          더보기
        </Button>
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
