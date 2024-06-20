'use client';
import DoughnutChart from '@/features/library/ui/DoughnutChart';
import TestResultItem from '@/features/library/ui/TestResultItem';
import React from 'react';

const DUMMY_CHOICES = ['Allow me', 'are you going my way?', 'Can you give me another chance?', 'Anything you say'];
const TEST_RESULTS_DATA = [
  {
    problem: '나한테 맡겨, 제가 할게요',
    answer: 'Allow me',
    users_answer: 'Anything you say',
    choices: DUMMY_CHOICES,
  },
  {
    problem: '나한테 맡겨, 제가 할게요',
    answer: 'Allow me',
    users_answer: 'Allow me',
    choices: DUMMY_CHOICES,
  },
];
const page = () => {
  return (
    <div className="flex flex-col m-[0.75rem] w-[22.875rem] items-center">
      <div className="flex flex-col items-start w-full">
        <p className="text-20 font-bold text-text_primary">끝까지 테스트를 보시느라 고생하셨습니다 ☺️</p>
        <div className="w-full flex justify-center">
          <DoughnutChart title="결과" data={[2, 8]} />
        </div>
        <p className="text-18 font-bold text-text_primary">회원님의 답</p>
      </div>
      {TEST_RESULTS_DATA.map((data, idx) => {
        return <TestResultItem key={idx} data={data} />;
      })}
    </div>
  );
};

export default page;
