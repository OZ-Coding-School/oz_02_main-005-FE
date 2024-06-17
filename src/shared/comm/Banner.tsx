'use client';
import React from 'react';
import Button from '../@common/ui/button/Button';
import { useRouter } from 'next/navigation';

const Banner = ({ count }: { count: number }) => {
  const router = useRouter();
  function handleClick() {
    router.push('/comm/');
  }
  return (
    <div className="w-[22.875rem] bg-primarylight flex flex-col rounded-[0.5rem] h-[9.5rem] p-[1rem] gap-[0.5rem]">
      <p>하루에 {count}개 이상 카드뭉치가 공유되고 있어요!</p>
      <p className="text-12 font-medium text-text_secondary">다른 이용자들이 만든 카드뭉치를 함께 나누어봐요!</p>
      <div className="flex justify-end items-end h-full">
        <Button type="s-more" onClick={handleClick}>
          More
        </Button>
      </div>
    </div>
  );
};

export default Banner;
