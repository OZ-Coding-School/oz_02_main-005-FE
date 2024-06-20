'use client';

import TestCardItem from '@/features/library/ui/TestCardItem';
import SlideButton from '@/shared/@common/ui/slideButton/SlideButton';

const DUMMY_ANSWERS = ['Allow me', 'are you going my way?', 'Can you give me another chance?', 'Anything you say'];

const Page = () => {
  return (
    <>
      <TestCardItem problem={'나한테 맡겨, 제가 할게요.'} answers={DUMMY_ANSWERS} testType={'subjective'} />
      <SlideButton />
    </>
  );
};

export default Page;
