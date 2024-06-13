import React from 'react';
import BottomMenuBar from '../bottomMenu/BottomMenuBar';
import Header from '../Header/Header';

function BaseFrame({ children }: { children: any }) {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen">
      <Header />
      <div className="container pt-[50px] pb-[65px] bg-gray items-center justify-start flex flex-col gap-[12px] overflow-hidden calc_h">
        {children}
      </div>
      <BottomMenuBar />
    </main>
  );
}

export default BaseFrame;
