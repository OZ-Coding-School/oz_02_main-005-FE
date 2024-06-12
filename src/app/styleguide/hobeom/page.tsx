'use client';

import { LOGIN_INPUT_PROPS } from '@/shared/@common/constants/input';
import BaseFrame from '@/shared/@common/ui/baseFrame/BaseFrame';
import CardListItem from '@/shared/@common/ui/cardListItem/CardListItem';
import Input from '@/shared/@common/ui/input/Input';
import SlideButton from '@/shared/@common/ui/slideButton/SlideButton';
import validInput from '@/shared/@common/utils/validInput';
import { useState } from 'react';

const page = () => {
  const [isValid, setIsValid] = useState<ValidationState>({
    id: true,
    nickname: true,
    password: true,
    check_password: true,
    email: true,
  });
  const [input, setInput] = useState<InputState>({
    id: '',
    nickname: '',
    password: '',
    check_password: '',
    email: '',
  });

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>, path: string, type: string, inputValue: string) {
    if (e.target) setInput(state => ({ ...state, [type]: inputValue }));
    setIsValid(state => ({ ...state, [type]: validInput(path, type, inputValue) }));
  }

  return (
    <BaseFrame>
      <CardListItem />
      {LOGIN_INPUT_PROPS.map(({ errormessage, label, path, placeholder, type }) => (
        <Input
          key={label}
          value={input[type]}
          label={label}
          placeholder={placeholder}
          type={type}
          path={path}
          isValid={isValid[type]}
          errormessage={errormessage}
          onChange={e => handleChangeInput(e, path, type, e.target.value)}
        />
      ))}

      <SlideButton />
    </BaseFrame>
  );
};

export default page;
