'use client';

import SlideButton from '@/shared/@common/ui/slideButton/SlideButton';
import TestCardItem from '@/shared/library/TestCardItem';

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
