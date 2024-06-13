'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/shared/@common/ui/button/Button';
import Link from 'next/link';

const LandingPage = () => {

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
        <div className='space-y-5'>
          <Link href="/signup">
            <Button type="xl-full-white">
              회원가입
            </Button>
          </Link>
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