'use client';
import React from 'react';
import FolderListItem from '@/shared/library/FolderListItem';
import Button from '@/shared/@common/ui/button/Button';

function handlePlusButtonClick() {}

const LibraryFoldersPage = () => {
  return (
    <>
      <FolderListItem count={2} title="영어 회화" />
      <FolderListItem count={2} title="영어 회화" />
      <Button type="xl-line-plus" onClick={handlePlusButtonClick} />
    </>
  );
};

export default LibraryFoldersPage;
