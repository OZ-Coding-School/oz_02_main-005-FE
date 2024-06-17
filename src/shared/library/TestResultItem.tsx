import React from 'react';
import Button from '../@common/ui/Button/Button';
import ChoiceItem from './ChoiceItem';

interface TestResultsItemProps {
  data: {
    problem: string;
    answer: string;
    users_answer: string;
    choices: string[];
  };
}

const TestResultItem = ({ data }: TestResultsItemProps) => {
  const { problem, answer, users_answer, choices } = data;
  return (
    <div className="bg-white w-[22.875rem] h-[32.5rem] m-[0.75rem] flex flex-col rounded-[0.75rem] p-[0.75rem] shadow-md">
      <div className="flex justify-center items-center h-full">
        <p className="text-18 font-bold text-text_primary">{problem}</p>
      </div>
      <div className="h-full flex flex-col justify-center items-center gap-[0.75rem]">
        {choices.map((choice, idx) => {
          let choiceType: 'choice' | 'correct' | 'wrong' = 'choice';
          if (choice === answer) {
            choiceType = 'correct';
          } else if (choice === users_answer && choiceType === 'choice') {
            choiceType = 'wrong';
          }
          console.log(`Choice: ${choice}, Type: ${choiceType}`);
          return <ChoiceItem key={idx} choice={choice} type={choiceType} />;
        })}
      </div>
    </div>
  );
};

export default TestResultItem;
