'use client';

import { SIGN_UP_INPUT_PROPS } from '@/shared/@common/constants/input';
import Button from '@/shared/@common/ui/Button/Button';
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
    name: string,
    inputValue: string,
    currentPassword: string,
  ) {
    if (e.target) setInput(state => ({ ...state, [name]: inputValue }));
    setIsValid(state => ({ ...state, [name]: validInput(path, name, inputValue, currentPassword) }));
  }
  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData();
    const data = Object.fromEntries(fd.entries());
    // const res = await signUp(data);
    // if(res.success) {
    //   redirect('/home');
    // } else {
    //   redirect('/signUp')
    // }
  }

  return (
    <BaseFrame>
      <CardListItem constructor="호범" count={5} description="영어 회화 초급자를 위한 영단어" title="영어 회화 단어" />
      <form onSubmit={handleSignUp}>
        {SIGN_UP_INPUT_PROPS.map(({ errormessage, label, path, placeholder, type, name }) => (
          <Input
            key={label}
            name={name}
            value={input[name] || ''}
            label={label}
            type={type}
            placeholder={placeholder}
            onChange={e => handleChangeInput(e, path, name, e.target.value, input.password)}
            path={path}
            isValid={isValid[name]}
            errormessage={errormessage}
          />
        ))}
        <Button type="xl-full" onClick={() => {}}>
          로그인
        </Button>
      </form>
      <SlideButton />
    </BaseFrame>
  );
};

export default Page;
