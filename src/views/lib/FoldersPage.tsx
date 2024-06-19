'use client';
import React from 'react';
import FolderListItem from '@/shared/library/FolderListItem';
import Button from '@/shared/@common/ui/button/Button';
import { useRouter } from 'next/navigation';

const FoldersPage = () => {
  const router = useRouter();
  function handlePlusButtonClick() {
    router.push('/plus/folder');
  }
  return (
    <>
      <FolderListItem count={2} title="영어 회화" />
      <FolderListItem count={2} title="영어 회화" />
      <Button type="xl-line-plus" onClick={handlePlusButtonClick} />
    </>
  );
};

export default FoldersPage;
