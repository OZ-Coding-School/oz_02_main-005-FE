import { jsonTypeApi } from './instance';

export interface Folder {
  id: number;
  folder_title: string;
  created_at: string;
  modified_at: string;
  member: number;
  count: number;
}

export const getFolders = async (): Promise<Folder[]> => {
  return [
    {
      id: 1,
      created_at: '2024-05 14:50',
      folder_title: '영어 회화',
      member: 1,
      modified_at: '2024-05 15:30',
      count: 5,
    },
    {
      id: 1,
      created_at: '2024-05 14:50',
      folder_title: '수학',
      member: 1,
      modified_at: '2024-05 15:30',
      count: 5,
    },
    {
      id: 1,
      created_at: '2024-05 14:50',
      folder_title: '과학',
      member: 1,
      modified_at: '2024-05 15:30',
      count: 5,
    },
    {
      id: 1,
      created_at: '2024-05 14:50',
      folder_title: '중국어 회화',
      member: 1,
      modified_at: '2024-05 15:30',
      count: 5,
    },
  ];
};
