'use client';
import Tab from '@/shared/@common/ui/Tab/Tab';
import BaseFrame from '@/shared/@common/ui/baseFrame/BaseFrame';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathName = usePathname();
  const saveType = pathName.includes('folder');

  const [input, setInput] = useState({
    title: '',
    description: '',
  });
  const [isValid, setIsValid] = useState({
    title: true,
    description: true,
  });

  function handleCancel() {
    router.replace('/plus');
  }

  function handleSave() {
    if (isValid.title && isValid.description) {
      if (input.title === '') {
        setIsValid(state => ({ ...state, title: false }));
        return;
      }
      //save 로직
      router.push('/lib');
    }
  }

  function handleTabClick(idx: number) {
    switch (idx) {
      case 0:
        return router.replace('/plus/cardDeck/new');
      case 1:
        return router.replace('/plus/cardDeck/excel');
      case 2:
        return router.replace('/plus/cardDeck/gpt');
    }
  }
  return (
    <BaseFrame headerType="cancelSave" pageName="카드뭉치 만들기" onCancel={handleCancel} onSave={handleSave}>
      <Tab tabs={['새로 만들기', '엑셀 업로드', 'GPT']} onClick={handleTabClick} />
      {children}
    </BaseFrame>
  );
};

export default Layout;
