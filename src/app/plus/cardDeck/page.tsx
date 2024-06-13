'use client';
import Button from '@/shared/@common/ui/Button/Button';
import BaseFrame from '@/shared/@common/ui/baseFrame/BaseFrame';
import Input from '@/shared/@common/ui/input/Input';
import Tab from '@/shared/@common/ui/tab/Tab';
import validInput from '@/shared/@common/utils/validInput';
import CardCreateItem from '@/shared/create/CardCreateItem';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const PlusCardDeckPage = () => {
  const router = useRouter();
  const [input, setInput] = useState({
    title: '',
    description: '',
  });
  const [isValid, setIsValid] = useState({
    title: true,
    description: true,
  });

  function handleCancel() {
    router.replace('/plus');
  }

  function handleSave() {
    if (isValid.title && isValid.description) {
      if (input.title === '') {
        setIsValid(state => ({ ...state, title: false }));
        return;
      }
      //save 로직
      router.push('/lib');
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>, type: string) {
    setIsValid(state => ({ ...state, [type]: validInput('create', type, e.target.value) }));
    setInput(state => ({ ...state, [type]: e.target.value }));
  }
  return (
    <BaseFrame headerType="cancelSave" pageName="카드뭉치 만들기" onCancel={handleCancel} onSave={handleSave}>
      <Tab tabs={['새로 만들기', '엑셀 업로드', 'GPT']} />
      <Input
        label="자신만의 카드뭉치를 만들어보세요!"
        errormessage="필수 항목"
        isValid={isValid.title}
        path="create"
        placeholder="제목을 입력해주세요."
        onChange={e => handleChange(e, 'title')}
        value={input.title || ''}
      />
      <Input
        label="설명"
        errormessage="최대 45글자 이하로 작성해주세요."
        isValid={isValid.description}
        path="create"
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
    </BaseFrame>
  );
};

export default PlusCardDeckPage;
