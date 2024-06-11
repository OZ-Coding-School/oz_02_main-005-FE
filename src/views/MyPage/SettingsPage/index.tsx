'use client';

import BottomMenuBar from '@/shared/@common/ui/bottomMenu/BottomMenuBar';
import Button from '@/shared/@common/ui/button/Button';
import Toggle from '@/shared/@common/ui/toggle/Toggle';
import Image from 'next/image';
import Link from 'next/link';

const SettingsPage = () => {

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container bg-gray flex-grow py-[40px] px-[10px] flex flex-col">
        <div className="flex flex-col flex-grow gap-[40px]">
          <div className='flex h-[24px] items-center justify-between'>
            <Button type="back"/>
            <p className="text-18 font-medium">설정</p>
            <div className='bg-gray w-[24px]'/>
          </div>
          <div className="px-[10px] space-y-[15px]">
            <p className="font-medium mb-[20px]">환경 설정</p>
            <div className='flex items-center w-[350px] h-[62px] text-14 pl-[15px] pr-[10px] bg-white border border-grayc rounded-[15px] justify-between hover:border-black'>
              <p>효과음</p>
              <Toggle />
            </div>
            <div className='flex items-center w-[350px] h-[62px] text-14 pl-[15px] pr-[10px] bg-white border border-grayc rounded-[15px] justify-between hover:border-black'>
              <p>다크 모드</p>
              <Toggle />
            </div>
          </div>
          <div className="px-[10px] space-y-[15px]">
            <p className="font-medium mb-[20px]">기타 정보</p>
            <div className='flex items-center w-[350px] h-[62px] text-14 pl-[15px] pr-[10px] bg-white border border-grayc rounded-[15px] justify-between hover:border-black'>
              <p>개인정보 취급방침</p>
              <Link href='/privacypolicy'>
                <div className='relative flex items-center space-x-3 cursor-pointer'>
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
          </div>
          <div className='px-[10px]'>
            <div className='mb-[15px]'>
              <Button type='xl-line-primary'>
                로그아웃
              </Button>
            </div>
            <Link href="/accountdelete">
              <Button type='xl-line-primary'>
                계정삭제
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <BottomMenuBar />
    </main>
  );
};

export default SettingsPage;
