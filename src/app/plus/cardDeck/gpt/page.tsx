'use client';

import Input from '@/shared/@common/ui/input/Input';
import validInput from '@/shared/@common/utils/validInput';
import React, { useState } from 'react';
import { GptIcon } from '../../../../../public/icons/create';
import Button from '@/shared/@common/ui/button/Button';

const GptPage = () => {
  const [input, setInput] = useState({
    title: '',
    description: '',
  });
  const [isValid, setIsValid] = useState({
    title: true,
    description: true,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, type: string) {
    setIsValid(state => ({ ...state, [type]: validInput('create', type, e.target.value) }));
    setInput(state => ({ ...state, [type]: e.target.value }));
  }

  return (
    <div className="flex flex-col justify-between flex-grow pb-[12px]">
      <div className="flex flex-col gap-[0.75rem]">
        <p className="w-full text-start  text-gray6 text-12">GPT에게 카드뭉치를 만들어 달라고 해보세요!</p>
        <div className="flex flex-col gap-[2px]">
          <p className="w-full text-start  text-gray6 text-10">난이도</p>
          <Button
            type="group"
            //onClick={handleClick}
            buttonContents={[{ label: '쉬움' }, { label: '보통' }, { label: '어려움' }]}
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="w-full text-start text-gray6 text-10">힌트</p>

          <Button
            type="group"
            //onClick={handleClick}
            buttonContents={[{ label: '힌트 있음' }, { label: '힌트 없음' }]}
          />
        </div>
        <Input
          label="카테고리"
          errorMessage="필수 항목"
          isValid={isValid.title}
          placeholder="카테고리를 입력해주세요."
          onChange={e => handleChange(e, 'title')}
          value={input.title || ''}
        />
        <div className="flex items-center">
          <GptIcon />
          <p className="text-gray6 text-12 pl-[12px]">입력값을 바탕으로 카드 뭉치를 생성 중입니다...</p>
        </div>
      </div>

      <Button
        type="l-delete"
        //onClick={handleClick}
      >
        다시 생성하기
      </Button>
    </div>
  );
};

export default GptPage;
