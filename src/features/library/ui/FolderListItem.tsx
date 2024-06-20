import React from 'react';
import { FolderIcon } from '../../../../public/icons/lib';
import { useRouter } from 'next/navigation';

interface FolderListItemProps {
  count: number;
  title: string;
}

const FolderListItem = ({ count, title }: FolderListItemProps) => {
  const router = useRouter();

  function handleClickFolderListItem() {
    router.push(`/lib/folders/${title}`);
  }

  return (
    <div
      onClick={handleClickFolderListItem}
      className="bg-white rounded-[5px] p-[0.75rem] flex flex-col w-[22.875rem] outline outline-1 outline-grayc hover:outline-black">
      <p className="text-[0.5rem] text-gray8">{count} 카드 뭉치</p>
      <div className="h-full flex gap-[0.75rem] items-center">
        <FolderIcon />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default FolderListItem;
