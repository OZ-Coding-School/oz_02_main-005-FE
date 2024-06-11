
'use client';

import Button from '@/shared/@common/ui/button/Button';
import React from 'react';
import Image from 'next/image';
import kakao from '../../../../public/icons/kakao.svg';
import Link from 'next/link';

const SignUpPage = () => {

  const handleKakaoSignup = async () => {
    console.log("작동");
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
                src={kakao} 
                alt="kakao" 
                className="w-[23px] mr-5" 
              />
              카카오로 시작하기
            </div>
          </div>
          <div className="px-[10px] flex-grow flex flex-col">
            <p className="text-18 font-medium mb-[20px]">계정 만들기</p>
            <div>인풋 들어갈 자리</div>

          </div>
        </div>
        <div className="mt-auto px-[10px] flex flex-col text-center justify-center gap-[50px]">
          <span className="text-14 text-gray6">
            외워보까의 <span className="font-medium">개인정보 취급방침</span>에 동의 후 <br/>
            회원가입을 진행합니다.
          </span>
          <Link href="/verifyemail">
            <Button type="xl-full">
              회원가입
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
