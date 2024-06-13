'use client';

import Button from '@/shared/@common/ui/button/Button';
import Link from 'next/link';
import React, { useState } from 'react';

//TODO: 만료된 경우와 디폴트는 인풋있는 페이지 먼저
const ResetPasswordPage = () => {
  const [isLinkExpired, setIsLinkExpired] = useState(false);

  const handleSavePassword = () => {
    console.log("비밀번호 저장하기");
    //TODO: 저장하기 
  };


  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container bg-white flex-grow py-[40px] px-[10px] flex flex-col items-center">
        {isLinkExpired ? (
          <> 
            <div className="flex flex-col flex-grow gap-[30px] items-center text-center">
              <p className='font-medium text-20'>비밀번호 재설정</p>
              <span className='text-14 font-regular text-gray6'>
                아래 버튼을 클릭하여 비밀번호 재설정 링크를 <br/>
                다시 요청하세요.
              </span>
            </div>
            <div className='flex flex-col gap-5'>
              <Link href='/confirmemail'>
                <Button type="xl-full-primary">
                  링크 보내기
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col flex-grow gap-[30px] items-center text-center">
              <p className='font-medium text-20'>비밀번호 재설정</p>
            </div>
              <div className='flex flex-col gap-5'>
                <Button 
                  type="xl-full" 
                  onClick={handleSavePassword}
                >
                  비밀번호 저장하기
                </Button>
              </div>
            </>
          )} 
      </div>
    </main>
  );
};

export default ResetPasswordPage;
