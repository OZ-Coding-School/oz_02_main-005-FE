import React from 'react';
import RatingStars from '../RatingStars/RatingStars';
import { usePathname, useRouter } from 'next/navigation';

interface CardListItemProps {
  title: string;
  count: number;
  description: string;
  constructor: string;
  stars: number;
}

function CardListItem({ title, count, description, constructor, stars }: CardListItemProps) {
  const router = useRouter();
  const currentPath = usePathname();

  function handleClickCardListItem() {
    router.push(`${currentPath}/${title}`);
  }
  return (
    <div
      onClick={handleClickCardListItem}
      className="w-[366px] h-[10rem] bg-white rounded-[4px] flex flex-col gap-[1.5rem] p-[0.75rem] outline outline-1 outline-grayc hover:outline-black">
      <div className="w-full flex flex-col gap-[1.5rem]">
        <div className="flex items-center justify-between">
          <p className="font-medium text-24">{title}</p>
          <div className="bg-primary rounded-[5px] px-[10px] py-[5px] text-12 text-white">{`${count} 단어`}</div>
        </div>
        <p className="text-text_secondary">{description}</p>
      </div>
      <div className="flex gap-[0.5rem] items-center justify-between">
        <p className="text-12 text-text_primary">{constructor}</p>
        <RatingStars initialStars={stars} />
      </div>
    </div>
  );
}

export default CardListItem;
