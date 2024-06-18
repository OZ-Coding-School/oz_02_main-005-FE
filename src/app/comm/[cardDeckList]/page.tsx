'use client';
import CardDeckListPage from '@/views/community/CardDeckListPage';
import { usePathname } from 'next/navigation';
import React from 'react';

const titleType = {
  popular: '인기카드 뭉치 목록',
  new: '신규카드 뭉치 목록',
  download: '많이 저장한 카드 뭉치 목록',
};

const Page = () => {
  const pathName = usePathname();
  const pathList = pathName.split('/');
  const title = pathList[pathList.length - 1] as keyof typeof titleType;
  return <CardDeckListPage cardDeckList={[]} listTitle={titleType[title]} />;
};

export default Page;
