'use client';

import React from 'react';
import BaseFrame from '@/shared/@common/ui/baseFrame/BaseFrame';
import Button from '@/shared/@common/ui/button/Button';
import Link from 'next/link';
import CardDeckList from '@/shared/comm/CardDeckList';

const HomePage = () => {

  return (
    <BaseFrame>
    <div className='py-[20px] flex flex-col gap-[30px] items-center'>
      <div className='flex flex-col p-[16px] w-[366px] h-[184px] bg-[#ECE3FF] rounded-[8px] items-center justify-center gap-5'>
        <div>
          <p className='font-bold text-20'>{}님과 {}일 동안 함께하고 있어요!</p>
          <p className='font-regular'>성장을 위해 꾸준히 학습해보세요!</p>
        </div>
        <Button type="m-more">
          오늘 학습하러 가기
        </Button>
      </div>
      <div>
        <CardDeckList title="카드뭉치" constructor="휘연" count={20} deckTitle="Job SecuritySec" />
      </div>
      <div>
        <CardDeckList title="폴더" constructor="휘연" count={20} deckTitle="Job SecuritySec" />
      </div>
      <div>
        <CardDeckList title="다른 사용자와 유사한 카드뭉치" constructor="휘연" count={20} deckTitle="Job SecuritySec" />
      </div>
    </div>
    </BaseFrame>
  )
}

export default HomePage