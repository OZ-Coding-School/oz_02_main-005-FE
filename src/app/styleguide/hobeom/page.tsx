'use client';

import { LOGIN_INPUT_PROPS } from '@/shared/@common/constants/input';
import BaseFrame from '@/shared/@common/ui/baseFrame/BaseFrame';
import CardListItem from '@/shared/@common/ui/cardListItem/CardListItem';
import Input from '@/shared/@common/ui/input/Input';
import SlideButton from '@/shared/@common/ui/slideButton/SlideButton';
import validInput from '@/shared/@common/utils/validInput';
import { useState } from 'react';

const Page = () => {
  const [isValid, setIsValid] = useState<ValidationState>({
    account: true,
    nickname: true,
    password: true,
    check_password: true,
    email: true,
  });
  const [input, setInput] = useState<InputState>({
    account: '',
    nickname: '',
    password: '',
    check_password: '',
    email: '',
  });

  function handleChangeInput(
    e: React.ChangeEvent<HTMLInputElement>,
    path: string,
    contentType: string,
    inputValue: string,
  ) {
    if (e.target) setInput(state => ({ ...state, [contentType]: inputValue }));
    setIsValid(state => ({ ...state, [contentType]: validInput(path, contentType, inputValue) }));
  }

  return (
    <BaseFrame>
      <CardListItem constructor="호범" count={5} description="영어 회화 초급자를 위한 영단어" title="영어 회화 단어" />
      {LOGIN_INPUT_PROPS.map(({ errormessage, label, path, placeholder, type, contentType }) => (
        <Input
          key={label}
          value={input[contentType]}
          label={label}
          placeholder={placeholder}
          type={type}
          path={path}
          isValid={isValid[contentType]}
          errormessage={errormessage}
          onChange={e => handleChangeInput(e, path, contentType, e.target.value)}
        />
      ))}

      <SlideButton />
    </BaseFrame>
  );
};

export default Page;
