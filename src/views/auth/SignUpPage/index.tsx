'use client';

import Button from '@/shared/@common/ui/button/Button';
import React, { useState } from 'react';
import Image from 'next/image';
import Input from '@/shared/@common/ui/input/Input';
import { SIGN_UP_INPUT_PROPS } from '@/shared/@common/constants/input';
import validInput from '@/shared/@common/utils/validInput';
import { useRouter } from 'next/navigation';
import { createMember, MemberInfo } from '@/apis/createMember';

const SignUpPage = () => {
  const router = useRouter();

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

  const handleKakaoSignup = async () => {
    console.log("작동");
  };

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    currentPassword?: string
  ) => {
    const { value } = e.target;
    setInput(state => ({ ...state, [name]: value }));
    setIsValid(state => ({ ...state, [name]: validInput(name, value, currentPassword || '') }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (Object.values(isValid).every(value => value)) {
      try {
        await createMember(input as MemberInfo); 
        //이메일 인증 로직 보류
        //const emailQuery = encodeURIComponent(input.email);
        //router.push(`/verifyemail?email=${emailQuery}`);
        router.push('/home');
      } catch (error) {
        console.error('회원가입 실패', error);
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      }
    } else {
      alert('모든 필드를 올바르게 입력해주세요.');
    }
    console.log('제출', input);
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container bg-white flex-grow py-[40px] px-[10px] flex flex-col">
        <div className="flex flex-col flex-grow gap-[30px]">
          <Button type="back"/>
          <div className="px-[10px]">
            <p className="text-18 font-medium mb-[20px]">간편 회원 가입</p>
            <div
              className="flex justify-center w-[350px] h-[50px] bg-[#fae101] items-center cursor-pointer rounded-md"
              onClick={handleKakaoSignup}
            >
              <Image 
                src='/icons/kakao.svg'
                alt="kakao" 
                width={23}
                height={23}
                className="w-[25px] mr-5" 
              />
              카카오로 시작하기
            </div>
          </div>
          <div className="px-[10px] flex-grow flex flex-col">
            <p className="text-18 font-medium mb-[20px]">계정 만들기</p>
            <form id='signupForm'>
              {SIGN_UP_INPUT_PROPS.map(({ errorMessage, label, placeholder, type, name }) => (
                <Input
                  key={label}
                  name={name}
                  value={input[name] || ''}
                  label={label}
                  type={type}
                  placeholder={placeholder}
                  onChange={e => handleChangeInput(e, name, input.password)}
                  isValid={isValid[name]}
                  errorMessage={errorMessage}
                  width='350px'
                />
              ))}
            </form>
          </div>
        </div>
        <div className="mt-auto pt-[20px] px-[10px] flex flex-col text-center justify-center gap-[50px]">
          <span className="text-14 text-gray6">
            외워보까의 <span className="font-medium">개인정보 취급방침</span>에 동의 후 <br/>
            회원가입을 진행합니다.
          </span>
          <Button 
            type="xl-full" 
            onClick={handleSubmit}
          >
            회원가입
          </Button>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
