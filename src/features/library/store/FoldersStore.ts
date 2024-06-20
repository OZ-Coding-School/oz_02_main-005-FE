import { create } from 'zustand';

const initialState = [
  {
    id: 1,
    created_at: '2024-05 14:50',
    folder_title: '영어 회화',
    member: 1,
    modified_at: '2024-05 15:30',
    count: 5,
  },
  {
    id: 2,
    created_at: '2024-05 14:50',
    folder_title: '수학',
    member: 1,
    modified_at: '2024-05 15:30',
    count: 5,
  },
  {
    id: 3,
    created_at: '2024-05 14:50',
    folder_title: '과학',
    member: 1,
    modified_at: '2024-05 15:30',
    count: 5,
  },
  {
    id: 4,
    created_at: '2024-05 14:50',
    folder_title: '중국어 회화 초급',
    member: 1,
    modified_at: '2024-05 15:30',
    count: 5,
  },
];

export interface FoldersState {
  folders: FolderItem[];
  createFolder: (folder_title: string, count: number) => void;
  id: number;
}

export const useFoldersStore = create<FoldersState>()(set => ({
  folders: initialState,
  createFolder: (folder_title, count) =>
    set(state => {
      const newFolder = { folder_title, count, created_at: new Date() + '', id: state.folders.length + 1 };
      return { folders: [...state.folders, newFolder] };
    }),
  id: 0,
}));
