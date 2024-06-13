'use client';
import BaseFrame from '@/shared/@common/ui/baseFrame/BaseFrame';
import Modal from '@/shared/@common/ui/modal';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const PlusPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter();
  function handleClickFolderButton() {
    router.push('/plus/folder');
    setIsModalOpen(false);
  }
  function handleClickCardDeckButton() {
    router.push('/plus/cardDeck/new');
    setIsModalOpen(false);
  }
  return (
    <BaseFrame>
      <Modal
        isOpen={isModalOpen}
        onConfirm={handleClickFolderButton}
        onClose={handleClickCardDeckButton}
        contents={{ first: '폴더', second: '카드 뭉치' }}></Modal>
    </BaseFrame>
  );
};

export default PlusPage;
