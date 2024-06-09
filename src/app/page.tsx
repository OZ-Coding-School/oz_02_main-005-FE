'use client';

import Button from "@/shared/@common/ui/Button";
import CancelSaveHeader from "@/shared/@common/ui/CancelSaveHeader";
import Header from "@/shared/@common/ui/Header";

export default function Home() {

  const handleCancel = () => {
    console.log("취소클릭")
  };

  const handleSave  = () => {
    console.log("저장클릭")
  };

  const handleClick = () => {
    console.log("버튼클릭")
  };

  return (
    <main className="flex flex-col h-screen gap-2 bg-alert p-10 items-center">
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

      <Button 
        type="default" 
        onClick={handleClick}
      >
        기본 버튼
      </Button>

      <Button 
        type="default-white" 
        onClick={handleClick}
      >
        라인 버튼
      </Button>

      <Button 
        type="switch" 
        onClick={handleClick} 
        buttonContents={[
          { label: '새로 만들기' },
          { label: '엑셀 업로드' },
          { label: 'GPT' },
        ]}
      />

      <Button 
        type="switch" 
        onClick={handleClick} 
        buttonContents={[
          { icon: '/icons/private.png', activeIcon: '/icons/private-active.png', label: '비공개' },
          { icon: '/icons/public.png',  activeIcon: '/icons/public-active.png', label: '공개' },
        ]}
      />
    </main>
  );
}