'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/shared/@common/ui/button/Button';
import Link from 'next/link';

const LandingPage = () => {

  //TODO:
  const handleKakaoLogin = async () => {
    console.log("작동");
  };
  

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container bg-primary flex-grow py-[40px] items-center justify-center flex flex-col gap-[12px]">
        <div className="relative flex-grow flex items-center justify-center">
          <Image 
            src="/images/logo-character.png" 
            alt="logo" 
            width={137} 
            height={187}
            priority
          />
        </div>
        <div className='space-y-3'>
          <Link href="/signup">
            <Button type="xl-full-white">
              회원가입
            </Button>
          </Link>
          <div
            className="flex justify-center w-[350px] h-[56px] bg-[#fae101] items-center cursor-pointer rounded-md"
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
          <Link href="/login">
            <Button type="xl-full-primary">
              로그인
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default LandingPage