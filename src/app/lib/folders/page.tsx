'use client';
import { useFoldersStore } from '@/features/library/store/foldersStore';
import FoldersPage from '@/views/library/FoldersPage';

const LibraryFoldersPage = () => {
  const folders = useFoldersStore(state => state.folders);
  return <FoldersPage folders={folders} />;
};

export default LibraryFoldersPage;
