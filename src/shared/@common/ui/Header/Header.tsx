'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import { getMember, MemberInfo } from '@/apis/getMember';
import { useUser } from '@/shared/context/UserContext';

const Header = () => {
  const { user } = useUser();
  const router = useRouter();

  // useEffect(() => {
  //   const fetchMemberInfo = async () => {
  //     try {
  //       const memberInfo: MemberInfo = await getMember();
  //       setAccount(memberInfo.account);
  //     } catch (error) {
  //       console.error('회원정보 조회 실패', error);
  //     }
  //   };
  //   fetchMemberInfo();
  // }, []);

  return (
    <header className="w-[390px] h-[50px] pl-[12px] bg-white flex items-center justify-between fixed top-0 z-10">
      <div 
        className="cursor-pointer" 
        onClick={() => router.push('/')}
      >
        <Image 
          src="/images/logo.png" 
          alt="logo" 
          width={200} 
          height={40} 
        />
      </div>
      <div className='w-24 h-[30px] pr-[12px] bg-primary flex items-center justify-end rounded-l-full'>
        <p className='text-white text-12'> 
          {user?.account} 님 
        </p>
      </div>
    </header>
  );
};

export default Header;
