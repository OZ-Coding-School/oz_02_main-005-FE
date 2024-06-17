'use client';
import Button from '@/shared/@common/ui/Button/Button';
import Input from '@/shared/@common/ui/input/Input';
import validInput from '@/shared/@common/utils/validInput';
import CardCreateItem from '@/shared/create/CardCreateItem';
import React, { useState } from 'react';

const PlusCardDeckPage = () => {
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
    <>
      <Input
        label="자신만의 카드뭉치를 만들어보세요!"
        errorMessage="필수 항목"
        isValid={isValid.title}
        placeholder="제목을 입력해주세요."
        onChange={e => handleChange(e, 'title')}
        value={input.title || ''}
      />
      <Input
        label="설명"
        errorMessage="최대 45글자 이하로 작성해주세요."
        isValid={isValid.description}
        placeholder="설명을 입력해주세요."
        onChange={e => handleChange(e, 'description')}
        value={input.description || ''}
      />
      <Button
        type="group"
        //onClick={handleClick}
        buttonContents={[
          { icon: '/icons/private.png', activeIcon: '/icons/private-active.png', label: '비공개' },
          { icon: '/icons/public.png', activeIcon: '/icons/public-active.png', label: '공개' },
        ]}
      />
      <CardCreateItem idx={1} />
      <Button
        type="l-card"
        //onClick={handleClick}
      >
        카드 추가
      </Button>
    </>
  );
};

export default PlusCardDeckPage;
