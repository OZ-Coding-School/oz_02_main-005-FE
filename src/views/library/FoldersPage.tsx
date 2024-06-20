'use client';
import React from 'react';
import Button from '@/shared/@common/ui/Button/Button';
import { useRouter } from 'next/navigation';
import FolderListItem from '@/features/library/ui/FolderListItem';

const FoldersPage = ({ folders }: { folders: FolderItem[] }) => {
  const router = useRouter();
  function handlePlusButtonClick() {
    router.push('/plus/folder');
  }

  return (
    <>
      {folders.map(({ count, created_at, folder_title, id, member, modified_at }) => (
        <FolderListItem count={count} title={folder_title} key={created_at} />
      ))}
      <Button type="xl-line-plus" onClick={handlePlusButtonClick} />
    </>
  );
};

export default FoldersPage;
