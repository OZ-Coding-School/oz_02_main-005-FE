'use client';

import BottomMenuBar from '@/shared/@common/ui/bottomMenu/BottomMenuBar';
import Button from '@/shared/@common/ui/button/Button';
import Tab from '@/shared/@common/ui/tab/Tab';
import { useState } from 'react';

const PointListPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  //TODO: point list > date, content, point
  const addList = [
    { date: '2024.05.03', content: '내 카드뭉치 별점평가', point: '5' },
    { date: '2024.05.01', content: '첫 가입', point: '100' },
    { date: '2024.05.02', content: '내 카드뭉치 저장', point: '10' },
    { date: '2024.06.11', content: '내 카드뭉치 저장', point: '10' },
  ];

  const useList = [
    { date: '2024.06.03', content: '커뮤니티 카드뭉치 저장', point: '50' },
    { date: '2024.05.01', content: '커뮤니티 카드뭉치 저장', point: '50' },
  ];

  const sortedAddList = [...addList].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const sortedUseList = [...useList].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container bg-gray flex-grow py-[40px] px-[10px] flex flex-col">
        <div className="flex flex-col flex-grow gap-[40px]">
          <div className='flex h-[24px] items-center justify-between'>
            <Button type="back"/>
            <p className="text-18 font-medium">내 포인트</p>
            <div className='bg-gray w-[24px]'/>
          </div>
          <div className='flex justify-center'>
            <Tab 
              tabs={['적립', '사용']} 
              onClick={handleTabClick} 
            />
          </div>
          <div className="flex flex-col gap-[20px] text-14">
            {activeTab === 0 && (
              <div className="flex flex-col gap-2 px-2">
                {sortedAddList.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <div className='flex gap-5'>
                      <p>{item.date}</p>
                      <p>{item.content}</p>
                    </div>
                    <p className='font-medium'>+{item.point}p</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 1 && (
              <div className="flex flex-col gap-2 px-2">
                {sortedUseList.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <div className='flex gap-5'>
                      <p>{item.date}</p>
                      <p>{item.content}</p>
                    </div>
                    <p className='font-medium'>-{item.point}p</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <BottomMenuBar />
    </main>
  );
};

export default PointListPage;
