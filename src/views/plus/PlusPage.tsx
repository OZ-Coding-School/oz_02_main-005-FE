'use client';
import SelectModal from '@/shared/comm/SelectModal';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const PlusPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter();

  function handleSelectModalItem(title: string) {
    switch (title) {
      case '폴더':
        router.replace('/plus/folder');
        return setIsModalOpen(false);
      case '카드 뭉치':
        router.replace('/plus/cardDeck');
        return setIsModalOpen(false);
    }
  }
  return (
    <SelectModal
      contents={['폴더', '카드 뭉치']}
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSelect={handleSelectModalItem}
    />
  );
};

export default PlusPage;
