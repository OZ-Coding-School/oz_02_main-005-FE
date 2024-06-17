'use client';
import CardListItem from '@/shared/@common/ui/cardListItem/CardListItem';
import React from 'react';

const LibraryPage = () => {
  return (
    <>
      <CardListItem constructor="호범" count={2} description="초급 영어 회화 단어" title="영어 회화 카드 뭉치" />
    </>
  );
};

export default LibraryPage;
