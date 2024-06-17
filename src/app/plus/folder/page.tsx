'use client';
import BaseFrame from '@/shared/@common/ui/baseFrame/BaseFrame';
import Input from '@/shared/@common/ui/input/Input';
import validInput from '@/shared/@common/utils/validInput';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const PlusFolderPage = () => {
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
      if (input.title !== '') {
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
    <BaseFrame headerType="cancelSave" pageName="폴더 만들기" onCancel={handleCancel} onSave={handleSave}>
      <Input
        label="폴더 이름"
        errormessage="필수 항목"
        isValid={isValid.title}
        path="create"
        placeholder="폴더 이름을 입력해주세요."
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
    </BaseFrame>
  );
};

export default PlusFolderPage;
