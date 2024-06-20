import CardListItem from '@/shared/@common/ui/cardListItem/CardListItem';
import { useParams } from 'next/navigation';
import React from 'react';

const CardsPage = () => {
  const params = useParams();
  const folderName = Array.isArray(params.folderName) ? params.folderName[0] : params.folderName;
  const decodeFolderName = decodeURIComponent(folderName);
  const cards = [
    {
      id: 2,
      title: '생물전공용어',
      status: true,
      file_uploads: 'biology.doc',
      gpt_input: '',
      folder_id: 1,
      created_at: '2024-05-20T14:50:40.439757',
      updated_at: '2024-05-21T14:51:38.736475',
    },
    {
      id: 1,
      title: '영숙어 10제',
      status: true,
      file_uploads: '10word.doc',
      gpt_input: '',
      folder_id: 1,
      created_at: '2024-05-20T14:50:40.439757',
      updated_at: '2024-05-20T14:51:38.736475',
    },
  ];

  return (
    <>
      <p className="w-full text-start text-24 pl-[0.75rem] font-bold text-black">{decodeFolderName}</p>
      {cards.map(({ created_at, file_uploads, folder_id, gpt_input, id, status, title, updated_at }) => (
        <CardListItem key={id} stars={4} creator="호범" count={2} description="초급 영어 회화 단어" title={title} />
      ))}
    </>
  );
};

export default CardsPage;
