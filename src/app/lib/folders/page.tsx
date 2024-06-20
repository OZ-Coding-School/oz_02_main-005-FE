'use client';
import useFetch from '@/shared/hooks/useFetch';
import FoldersPage from '@/views/library/FoldersPage';

const LibraryFoldersPage = () => {
  const { loading, data: folders } = useFetch();

  if (loading) {
    return <div>Loading...</div>;
  }

  return <FoldersPage folders={folders} />;
};

export default LibraryFoldersPage;
