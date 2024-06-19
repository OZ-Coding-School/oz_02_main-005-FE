'use client';
import CardListItem from '@/shared/@common/ui/cardListItem/CardListItem';
import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
  const params = useParams();
  const folderName = Array.isArray(params.folderName) ? params.folderName[0] : params.folderName;
  const decodeFolderName = decodeURIComponent(folderName);

  return (
    <>
      <p className="w-full text-start text-24 pl-[0.75rem] font-bold text-black">{decodeFolderName}</p>
      <CardListItem
        stars={4}
        constructor="호범"
        count={2}
        description="초급 영어 회화 단어"
        title="영어 회화 카드 뭉치"
      />
    </>
  );
};

export default Page;
