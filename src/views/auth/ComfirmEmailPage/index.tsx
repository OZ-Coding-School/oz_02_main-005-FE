'use client';

import Button from '@/shared/@common/ui/button/Button';
import Link from 'next/link';
import React from 'react';

const ComfirmEmailPage = () => {

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container bg-white flex-grow py-[40px] px-[10px] flex flex-col items-center">
        <div className="flex flex-col flex-grow gap-[30px] items-center text-center">
          <p className='font-medium text-20'>이메일을 확인해주세요.</p>
          <span className='text-14 font-regular text-gray6'>
            등록된 이메일로 링크를 발송했습니다. <br/>
            받은 편지함에 이메일이 표시되지 않으면 <br/>
            스팸폴더를 확인하세요.
          </span>
        </div>
      </div>
    </main>
  );
};

export default ComfirmEmailPage;
