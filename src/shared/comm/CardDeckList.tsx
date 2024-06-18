import React, { useRef, useState } from 'react';
import Button from '../@common/ui/button/Button';
import CardDeckItem from './CardDeckItem';

interface CardDeckListProps {
  title: string;
  deckTitle: string;
  count: number;
  constructor: string;
}

const CardDeckList = ({ title, deckTitle, count, constructor }: CardDeckListProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    <div className="flex flex-col gap-[0.75rem]">
      <div className="flex justify-between font-bold">
        <p className="text-20 text-text_primary">{title}</p>
        <Button type="xs-more">더보기</Button>
      </div>
      <div
        className="flex gap-[0.75rem] overflow-hidden w-[22.875rem] hidden-scrollbar cursor-grab active:cursor-grabbing"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <CardDeckItem deckTitle={deckTitle} count={count} constructor={constructor} />
        <CardDeckItem deckTitle={deckTitle} count={count} constructor={constructor} />
        <CardDeckItem deckTitle={deckTitle} count={count} constructor={constructor} />
      </div>
    </div>
  );
};

export default CardDeckList;
