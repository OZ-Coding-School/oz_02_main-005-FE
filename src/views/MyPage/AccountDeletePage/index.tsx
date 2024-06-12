'use client';

import BottomMenuBar from '@/shared/@common/ui/bottomMenu/BottomMenuBar';
import Button from '@/shared/@common/ui/button/Button';

const AccountDeletePage = () => {

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container bg-gray flex-grow py-[40px] px-[10px] flex flex-col">
        <div className="flex flex-col flex-grow gap-[40px]">
          <div className='flex h-[24px] items-center justify-between'>
            <Button type="back"/>
            <p className="text-18 font-medium">계정삭제</p>
            <div className='bg-gray w-[24px]'/>
          </div>
          <div className="px-[10px] space-y-[15px]">
            <p className="font-medium text-14">
              계정삭제 버튼을 누를 시 15일 기간동안 비활성화 계정으로 전환됩니다. 15일 이후 외워보까 계정 및 계정과 관련된 모든 데이터를 영구적으로 삭제합니다. <br/>
              15일 이내에 로그인 시 비활성화 계정에서 정상 계정으로 전환됩니다. 이 작업은 취소할 수 없습니다.
            </p>
          </div>
          <div className='flex justify-center'>
            <Button type='xl-full'>
              계정삭제
            </Button>
          </div>
        </div>
      </div>
      <BottomMenuBar />
    </main>
  );
};

export default AccountDeletePage;
