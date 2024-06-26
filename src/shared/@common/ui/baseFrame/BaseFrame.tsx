'use client';
import React from 'react';
import BottomMenuBar from '../bottomMenu/BottomMenuBar';
import CancelSaveHeader from '../Header/CancelSaveHeader';
import Header from '../Header/Header';

interface FrameProps {
  children?: React.ReactNode;
  headerType?: string;
  pageName?: string;
  onCancel?: () => void;
  onSave?: () => void;
}
function BaseFrame({ children, headerType = 'basic', pageName, onCancel, onSave }: FrameProps) {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen">
      {headerType === 'basic' && <Header />}
      {pageName && onCancel && onSave && headerType === 'cancelSave' && (
        <CancelSaveHeader pageName={pageName} onCancel={onCancel} onSave={onSave} />
      )}
      <div className="container flex-grow pt-[50px] pb-[65px] bg-gray items-center justify-start flex flex-col gap-[12px]">
        {children}
      </div>
      <BottomMenuBar />
    </main>
  );
}

export default BaseFrame;
