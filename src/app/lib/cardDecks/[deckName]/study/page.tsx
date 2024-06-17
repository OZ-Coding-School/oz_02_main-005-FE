'use client';
import CardItem from '@/shared/library/CardItem';
import ProgressBar from '@/shared/library/ProgressBar';

const Page = () => {
  return (
    <>
      <ProgressBar count={1} totalStep={11} />
      <CardItem content="progress" />
    </>
  );
};

export default Page;
