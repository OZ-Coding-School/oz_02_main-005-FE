'use client';

import BottomMenuBar from '@/shared/@common/ui/bottomMenu/BottomMenuBar';
import React, { useState } from 'react';
import ProfileAvatar from './ProfileAvatar';

const MyPage = () => {
  //TODO: userId
  const [userId] = useState<string>('user123');
  
  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container bg-gray flex-grow py-[40px] px-[10px] flex flex-col items-center">
        <div className="flex flex-col flex-grow gap-[30px] items-center text-center">
          <div className='flex flex-col space-y-2'>
            <ProfileAvatar />
            {userId && <p className="font-medium text-14">{userId}</p>}
          </div>

          
        </div>
      </div>
      <BottomMenuBar />
    </main>
  );
};

export default MyPage;
