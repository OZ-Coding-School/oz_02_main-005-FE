'use client';
import Banner from '@/shared/comm/Banner';
import CardDeckList from '@/shared/comm/CardDeckList';
import React from 'react';

const CommunityPage = () => {
  return (
    <div className="m-[0.75rem] h-full flex flex-col gap-[0.75rem]">
      <Banner count={10} />
      <CardDeckList moreLink="" title="인기카드 뭉치" constructor="호범" count={10} deckTitle="Job SecuritySec" />
      <CardDeckList moreLink="" title="신규카드 뭉치" constructor="호범" count={10} deckTitle="Job SecuritySec" />
      <CardDeckList
        moreLink=""
        title="많이 저장한 카드 뭉치"
        constructor="호범"
        count={10}
        deckTitle="Job SecuritySec"
      />
    </div>
  );
};

export default CommunityPage;
