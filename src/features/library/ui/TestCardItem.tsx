import Button from '@/shared/@common/ui/Button/Button';
import Input from '@/shared/@common/ui/input/Input';
import React from 'react';

interface TestCardItemProps {
  problem: string;
  answers: string[];
  testType: 'multipleChoice' | 'subjective';
}

const TestCardItem = ({ problem, answers, testType }: TestCardItemProps) => {
  return (
    <>
      {testType === 'multipleChoice' && (
        <div className="bg-white w-[22.875rem] h-[37.5rem] m-[0.75rem] flex flex-col rounded-[0.75rem] p-[0.75rem] shadow-md">
          <div className="flex justify-center items-center h-full">
            <p className="text-18 font-bold text-text_primary">{problem}</p>
          </div>
          <div className="h-full flex flex-col justify-center items-center gap-[0.75rem]">
            {answers.map((answer, idx) => (
              <Button
                key={idx}
                type="l-select"
                //onClick={handleClick}
              >
                {answer}
              </Button>
            ))}
          </div>
        </div>
      )}
      {testType === 'subjective' && (
        <div className="bg-white w-[22.875rem] h-[14.8125rem] p-[0.75rem] flex flex-col m-[0.75rem] gap-[0.75rem] rounded-[0.75rem]">
          <p className="text-18 text-text_primary font-bold h-full flex items-center">{problem}</p>
          <div className="h-full">
            <Input label="정답" placeholder="정답을 입력하세요" width="21.375rem" />
          </div>
          <div className="w-full flex justify-end">
            <Button type="xs-full">다음</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default TestCardItem;
