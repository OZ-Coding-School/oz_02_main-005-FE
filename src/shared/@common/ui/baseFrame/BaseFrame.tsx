import React from 'react';
import BottomMenuBar from '../bottomMenu/BottomMenuBar';
import Header from '../Header';

function BaseFrame({ children }: { children: any }) {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Header />
      <div className="container py-6 bg-gray mx-auto flex flex-col gap-[12px] calc_h">{children}</div>
      <BottomMenuBar />
    </main>
  );
}

export default BaseFrame;
