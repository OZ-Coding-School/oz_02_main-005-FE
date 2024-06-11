
'use client';

import Button from '@/shared/@common/ui/button/Button';
import React from 'react';
import Image from 'next/image';
import kakao from '../../../../public/icons/kakao.svg';
import Link from 'next/link';

const LoginPage = () => {

  const handleKakaoLogin = async () => {
    console.log("작동");
  };

  //TODO: 모달로 대체?
  const handleInputEmail = async () => {
    const email = prompt("이메일을 입력하세요:");
    if (email) {
      alert(`입력된 이메일: ${email}`);
    } 
  }

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
                src={kakao} 
                alt="kakao" 
                className="w-[23px] mr-5" 
              />
              카카오로 로그인하기
            </div>
          </div>
          <div className="px-[10px] flex-grow flex flex-col">
            <p className="text-18 font-medium mb-[20px]">아이디 혹은 이메일로 로그인</p>
            <div>인풋 들어갈 자리</div>

          </div>
        </div>
        <div className="mt-auto px-[10px] flex flex-col text-center justify-center gap-[50px]">
          <span className="text-14 text-gray6">
            <span 
              className="font-medium text-primary cursor-pointer"
              onClick={handleInputEmail}
            >
              아이디 
            </span>
            <span> 또는 </span>
            <span 
              className="font-medium text-primary cursor-pointer"
              onClick={handleInputEmail}
            >
              비밀번호
            </span> 
            <span> 찾기 </span>
          </span>
          <span className="text-14 text-gray6">
            외워보까의 
            <Link href='/privacypoilcy'>
              <span className="font-medium"> 개인정보 취급방침</span>
            </Link>
            에 동의 후<br/>로그인을 진행합니다. 
          </span>
          <Link href="/">
            <Button type="xl-full">
              로그인
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
