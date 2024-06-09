'use client';

import CancelSaveHeader from "@/shared/@common/ui/CancelSaveHeader";
import Header from "@/shared/@common/ui/Header";

export default function Home() {
  const handleCancel = () => {
    console.log('취소버튼 클릭');
  };

  const handleSave  = () => {
    console.log('저장버튼 클릭');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <CancelSaveHeader 
        pageName="폴더 만들기"
        onCancel={handleCancel}
        onSave={handleSave}
      />

      <CancelSaveHeader 
        pageName="카드 만들기"
        onCancel={handleCancel}
        onSave={handleSave}
      />
    </main>
  );
}