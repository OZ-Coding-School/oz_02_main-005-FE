'use client';
import React from 'react';
import { EditIcon } from '../../../public/icons/lib';
import { useParams, usePathname, useRouter } from 'next/navigation';
import SlideButton from '@/shared/@common/ui/slideButton/SlideButton';
import Button from '@/shared/@common/ui/Button/Button';
import RatingStars from '@/shared/@common/ui/RatingStars/RatingStars';
import CommentArea from '@/shared/comm/CommentArea';

interface CardDeckItemPageProps {
  constructor: string;
  problem: string;
}

const CardDeckItemPage = ({ constructor, problem }: CardDeckItemPageProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const params = useParams();
  const deckName = Array.isArray(params.deck) ? params.deck[0] : params.deck;
  const decodeFolderName = decodeURIComponent(deckName);

  function handleClickStudyModeButton() {
    router.push(`${pathName}/study`);
  }
  function handleClickTestModeButton() {
    router.push(`${pathName}/test`);
  }
  function handleClick() {}

  return (
    <div className="flex flex-col gap-[0.75rem] items-center">
      <div className="w-full h-[3.75rem] flex flex-col justify-between">
        <div className="flex justify-between">
          <p className="text-20 font-bold">{decodeFolderName}</p>
          <EditIcon onClick={handleClick} />
        </div>
        <div className=" flex justify-between items-center">
          <p className="text-text_secondary text-12 ">{constructor}</p>
          <RatingStars initialStars={2} />
        </div>
      </div>
      <div className="bg-white rounded-[5px] h-[8.75rem] flex justify-center items-center w-full shadow-md">
        {problem}
      </div>
      <SlideButton />
      <div className="flex gap-6">
        <Button type="m-line" onClick={handleClickStudyModeButton}>
          학습 모드
        </Button>
        <Button type="m-line" onClick={handleClickTestModeButton}>
          시험 모드
        </Button>
      </div>
      <CommentArea comment="이 카드 뭉치 좋아요" reply="깔끔하고 편해요 자주할래요" creationTime="02:43" />
    </div>
  );
};

export default CardDeckItemPage;
