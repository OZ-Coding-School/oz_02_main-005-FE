'use client';

import CardItem from '@/features/library/ui/CardItem';
import ProgressBar from '@/features/library/ui/ProgressBar';

const Page = () => {
  return (
    <>
      <ProgressBar count={1} totalStep={11} />
      <CardItem content="progress" />
    </>
  );
};

export default Page;
