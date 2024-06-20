import React, { useRef, useState } from 'react';
import Button from '../@common/ui/Button/Button';
import CardDeckItem from './CardDeckItem';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface CardDeckListProps {
  title: "인기카드 뭉치" | "신규카드 뭉치" | "많이 저장한 카드 뭉치" | string;
  deckTitle: string;
  count: number;
  constructor: string;
  moreLink: string;
}

const createPath = (title: string) => {
  switch (title) {
    case '인기카드 뭉치':
      return 'popular';
    case '신규카드 뭉치':
      return 'new';
    case '많이 저장한 카드 뭉치':
      return 'download';
  }
};

const CardDeckList = ({ title, deckTitle, count, constructor, moreLink }: CardDeckListProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const router = useRouter();

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (scrollContainerRef.current) {
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const move = (x - startX) * 2;
      scrollContainerRef.current.scrollLeft = scrollLeft - move;
    }
  };

  return (
    <div className="flex flex-col gap-[0.75rem] w-full">
      <div className="flex justify-between font-bold">
        <p className="text-20 text-text_primary">{title}</p>
        <Link href={moreLink}>
          <Button 
            type="xs-more" 
            onClick={() => router.push(`comm/${listType[title as keyof typeof listType]}`)}
          >
            더보기
          </Button>
        </Link>
      </div>
      <div
        className="flex gap-[0.75rem] overflow-hidden w-[22.875rem] hidden-scrollbar cursor-grab active:cursor-grabbing"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
        <CardDeckItem deckTitle={deckTitle} count={count} constructor={constructor} />
        <CardDeckItem deckTitle={deckTitle} count={count} constructor={constructor} />
        <CardDeckItem deckTitle={deckTitle} count={count} constructor={constructor} />
      </div>
    </div>
  );
};

export default CardDeckList;
