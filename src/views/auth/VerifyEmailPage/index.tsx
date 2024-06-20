'use client';

import Button from '@/shared/@common/ui/Button/Button';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const VerifyEmailPage = () => {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleResendEmail = () => {
    alert(`${email}로 이메일을 보냈습니다.`);
    //TODO: 이메일 다시보내는 로직
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container bg-white flex-grow py-[40px] px-[10px] flex flex-col items-center">
        <div className="flex flex-col flex-grow gap-[30px] items-center text-center">
          <p className="font-medium text-20">회원가입을 위해 이메일을 확인해주세요.</p>
          <span className="text-14 font-medium text-gray6">
            <span className="text-black">{email}</span>로 이메일을 발송했습니다.
            <br />
            본인인증을 위해 이메일의 링크를 클릭해주세요.
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <Button type="xl-full-primary" onClick={handleResendEmail}>
            이메일 다시 보내기
          </Button>
        </div>
      </div>
    </main>
  );
};

export default VerifyEmailPage;
