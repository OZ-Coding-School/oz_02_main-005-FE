'use client';

import Button from '@/shared/@common/ui/button/Button';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Input from '@/shared/@common/ui/input/Input';
import validInput from '@/shared/@common/utils/validInput';
import { SIGN_UP_INPUT_PROPS } from '@/shared/@common/constants/input';
import Modal from '@/shared/@common/ui/modal';

const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);

  const inputProps = SIGN_UP_INPUT_PROPS.reduce((fields, prop) => {
    fields[prop.name] = prop;
    return fields;
  }, {} as Record<string, typeof SIGN_UP_INPUT_PROPS[0]>);

  const [isValid, setIsValid] = useState<ValidationState>({
    account: true,
    nickname: false,
    password: true,
    check_password: false,
    email: true,
  });
  const [input, setInput] = useState<InputState>({
    account: '',
    nickname: '',
    password: '',
    check_password: '',
    email: '',
  });

  useEffect(() => {
    if (!isModalOpen) {
      setInput({
        account: '',
        nickname: '',
        password: '',
        check_password: '',
        email: '',
      });
      setEmailSent(false)
    }
  }, [isModalOpen]);

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    inputValue: string,
    currentPassword?: string,
  ) => {
    if (e.target) setInput(state => ({ ...state, [name]: inputValue }));
    setIsValid(state => ({ ...state, [name]: validInput( name, inputValue, currentPassword || '') }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit data:', input);
  };

  //TODO:
  const handleKakaoLogin = async () => {
    console.log("작동");
  };

  const handleLoginClick = () => {
    const form = document.getElementById('loginForm') as HTMLFormElement;
    if (form) form.requestSubmit();
  };

  const handleOpenModal = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const isFormValid = () => {
    return isValid.email && input.email;
  };

  const handleConfirm = () => {
    if (isFormValid() && modalType !== null) {
      const data = { email: input.email }; 
      console.log('Submit data:', data);
      setEmailSent(true);
    }
  };

  const handleResendEmail = () => {
    alert(`등록된 이메일: ${input.email} 로 재발송`);
    console.log(`이메일 재발송: ${input.email}`);
    //TODO: 이메일 다시 보내는 로직
    setIsModalOpen(false);
  };

  const modalContent = () => {
    return (
      <div>
        <p className="font-medium">
        {modalType === 'email' ? '아이디 찾기' : '비밀번호 찾기'}
          {/* {modalType === 'email' ? '아이디 찾기' : modalType === 'password' ? '비밀번호 찾기' : ''} */}
        </p>
        <p className="font-regular text-12 text-gray6 pb-[10px]">이메일 주소를 입력해주세요.</p>
        {emailSent ? (
          <p className="font-regular text-14 text-gray6">{input.email}로 이메일을 발송했습니다. <br/>메일함을 확인해주세요.</p>
        ) : (
          <form id="email">
            <Input
              name={inputProps.email.name}
              value={input.email}
              label={inputProps.email.label}
              type={inputProps.email.type}
              placeholder={inputProps.email.placeholder}
              onChange={e => handleChangeInput(e, inputProps.email.name, e.target.value)}
              isValid={isValid.email}
              // errormessage={inputProps.email.errormessage}
              errorMessage={input.email && !isValid.email ? inputProps.email.errorMessage : ''}
              width='350px'
            />
          </form>
        )}
      </div>
    );
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container bg-white flex-grow py-[40px] px-[10px] flex flex-col">
        <div className="flex flex-col flex-grow gap-[30px]">
          <Button type="back"/>
          <div className="px-[10px]">
            <p className="text-18 font-medium mb-[20px]">간편 로그인</p>
            <div
              className="flex justify-center w-[350px] h-[50px] bg-[#fae101] items-center cursor-pointer rounded-md"
              onClick={handleKakaoLogin}
            >
              <Image 
                src="/icons/kakao.svg"
                alt="kakao" 
                width={23} 
                height={23} 
                className="w-[23px] mr-5" 
              />
              카카오로 로그인하기
            </div>
          </div>
          <div className="px-[10px]">
            <p className="text-18 font-medium mb-[20px]">아이디 혹은 이메일로 로그인</p>
            <form id="loginForm" onSubmit={handleFormSubmit} className='flex flex-col gap-[10px]'>
              <Input
                name="account"
                value={input.account}
                label="아이디 또는 이메일"
                type={inputProps.account.type}
                placeholder="아이디 또는 이메일을 입력해주세요."
                onChange={e => handleChangeInput(e, inputProps.account.name, e.target.value)}
                isValid={isValid.account}
                errorMessage={inputProps.account.errorMessage}
                width='350px'
              />
              <Input
                name={inputProps.password.name}
                value={input.password}
                label={inputProps.password.label}
                type={inputProps.password.type}
                placeholder={inputProps.password.placeholder}
                onChange={e => handleChangeInput(e, inputProps.password.name, e.target.value)}
                isValid={isValid.password}
                errorMessage={inputProps.password.errorMessage}
                width='350px'
              />
            </form>
          </div>
        </div>
        <div className="mt-auto px-[10px] flex flex-col text-center justify-center gap-[50px]">
          <span className="text-14 text-gray6">
            <span 
              className="font-medium text-primary cursor-pointer"
              onClick={() => handleOpenModal('email')}
            >
              아이디 
            </span>
            <span> 또는 </span>
            <span 
              className="font-medium text-primary cursor-pointer"
              onClick={() => handleOpenModal('password')}
            >
              비밀번호
            </span> 
            <span> 찾기 </span>
          </span>
          <span className="text-14 text-gray6">
            외워보까의 
            <Link href='/privacypolicy'>
              <span className="font-medium"> 개인정보 취급방침</span>
            </Link>
            에 동의 후<br/>로그인을 진행합니다. 
          </span>
          <Button type="xl-full" onClick={handleLoginClick}>
            로그인
          </Button>
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={emailSent ? handleResendEmail : handleCloseModal}
        onConfirm={emailSent ? handleCloseModal: handleConfirm}
        closeLabel={emailSent ? "다시보내기" : "취소"}
      >
        {modalContent()}
      </Modal>
    </main>
  );
};

export default LoginPage;
