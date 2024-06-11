'use client';

import BottomMenuBar from '@/shared/@common/ui/bottomMenu/BottomMenuBar';
import React, { useState } from 'react';
import ProfileAvatar from '../ProfileAvatar';
import Image from 'next/image';
import Link from 'next/link';

const MyPage = () => {
  //TODO: userId, nickname, email, point
  const [userId] = useState<string>('vocca');
  const userNickName = 'vocca1';
  const userEmail = 'vocca@email.com';
  const userPoint = '200';
  
  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container bg-gray flex-grow py-[40px] px-[10px] flex flex-col items-center">
        <div className="flex flex-col flex-grow gap-[30px] items-center">
          <div className='flex flex-col space-y-1'>
            <ProfileAvatar />
            {userId && <p className="font-medium text-center">{userId}</p>}
          </div>
          <div className='flex flex-col bg-white pt-[15px] border border-grayc rounded-[15px]'>
            <div className='w-[350px] pb-[10px] px-[15px] border-b border-grayc'>
              <p className='text-14'>아이디</p>
              <p className='text-gray6 text-14'>{userId}</p>
            </div>
            <div className='w-[350px] p-[10px] px-[15px] border-b border-grayc flex justify-between'>
              <div className='flex flex-col'>
                <p className='text-14'>닉네임</p>
                <p className='text-gray6 text-14'>{userNickName}</p>
              </div>
              <div 
                className='relative flex items-center cursor-pointer'
                //onClick
              >
                <Image 
                  src="/icons/edit-black.png" 
                  alt="edit" 
                  width={18}
                  height={18} 
                  priority 
                />
              </div>
            </div>
            <div className='w-[350px] p-[10px] px-[15px] border-b border-grayc flex justify-between'>
              <div className='flex flex-col'>
                <p className='text-14'>이메일</p>
                <p className='text-gray6 text-14'>{userEmail}</p>
              </div> 
              <div 
                className='relative flex items-center cursor-pointer'
                //onClick
              >
                <Image 
                  src="/icons/edit-black.png" 
                  alt="edit" 
                  width={18}
                  height={18} 
                  priority 
                />
              </div> 
            </div>
            <div className='w-[350px] h-[60px] px-[15px] flex items-center justify-between'>
              <p className='text-14'>비밀번호</p>
              <div 
                className='relative flex items-center cursor-pointer'
                //onClick
              >
                <Image 
                  src="/icons/edit-black.png" 
                  alt="edit" 
                  width={18}
                  height={18} 
                  priority 
                />
              </div>
            </div>
          </div>
          <div className='flex items-center w-[350px] h-[62px] text-14 pl-[15px] pr-[10px] bg-white border border-grayc rounded-[15px] justify-between'>
            <p>내 포인트</p>
            <Link href='/pointlist'>
              <div className='relative flex items-center space-x-3 cursor-pointer'>
                <p>{userPoint}p</p>
                <Image 
                  src="/icons/right-arrow-black.png" 
                  alt="edit" 
                  width={18}
                  height={16} 
                  priority 
                />
              </div>
            </Link>  
          </div>
          <div className='flex w-[350px] h-[62px] items-center text-14 pl-[15px] pr-[10px] bg-white border border-grayc rounded-[15px] justify-between'>
            <p>설정</p>
            <div className='relative flex items-center space-x-3 cursor-pointer'>
              <Image 
                src="/icons/right-arrow-black.png" 
                alt="edit" 
                width={18}
                height={16} 
                priority 
                // onClick={}
              />
            </div>
          </div>
        </div>
      </div>
      <BottomMenuBar />
    </main>
  );
};

export default MyPage;
