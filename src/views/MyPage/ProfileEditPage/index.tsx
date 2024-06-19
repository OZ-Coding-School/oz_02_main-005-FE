'use client';

import BottomMenuBar from '@/shared/@common/ui/bottomMenu/BottomMenuBar';
import Button from '@/shared/@common/ui/button/Button';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProfileEditPage = () => {

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);

  //TODO: 임시 아바타 조회데이터 
  const [avatars, setAvatars] = useState<string[]>([
    '/images/avatar1.png',
    '/images/avatar2.png',
    '/images/avatar3.png',
    '/images/avatar4.png',
    '/images/avatar5.png',
  ]);

  const router = useRouter();

  useEffect(() => {
    const savedAvatar = localStorage.getItem('avatarUrl');
    if (savedAvatar) {
      setAvatars((prevAvatars) => [savedAvatar, ...prevAvatars.filter(avatar => avatar !== savedAvatar)]);
      setSelectedAvatar(0); 
    }
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = reader.result as string;
        setAvatars((prevAvatars) => [newImage, ...prevAvatars]);
        setSelectedAvatar(0);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleAvatarClick = (index: number) => {
    setSelectedAvatar(index);
  };

  const handleSaveClick = () => {
    if (selectedAvatar !== null) {
      localStorage.setItem('avatarUrl', avatars[selectedAvatar]);
      router.push('/info');
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container bg-gray flex-grow pt-[40px] pb-[65px] px-[10px] flex flex-col">
        <div className="flex flex-col flex-grow gap-[40px]">
          <div className='flex h-[24px] items-center justify-between'>
            <Button type="back"/>
            <p className="text-18 font-medium">프로필 사진 변경</p>
            <div className='bg-gray w-[24px]'/>
          </div>
          <div className="px-[10px]">
            <p className="font-medium mb-[20px]">환경 설정</p>
            <div className='flex flex-wrap gap-1'>
              <div 
                className='w-[113px] h-[108px] bg-white outline outline-1 outline-grayc flex items-center justify-center cursor-pointer'
                onClick={handleSelectClick}
              >
                <div className='relative'>
                  <Image 
                    src="/images/avatar-select.png" 
                    alt="select" 
                    width={52}
                    height={52} 
                    priority 
                  />
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
              {avatars.map((avatar, index) => (
                <div 
                  key={index} 
                  className={
                    `w-[114px] h-[110px] flex items-center justify-center overflow-hidden cursor-pointer 
                    ${selectedAvatar === index ? 'border-8 border-primary' : 'border border-grayc'}`
                  }
                  onClick={() => handleAvatarClick(index)}
                >
                  <div className='relative'>
                    <Image 
                      src={avatar} 
                      alt="avatar"
                      width={114}
                      height={112} 
                      style={{ width: '114px', height: '110px', objectFit: 'cover' }}
                      priority 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='px-[10px] mb-[40px]'>
            <Button 
              type='xl-full'
              onClick={handleSaveClick}
            >
              저장
            </Button>
          </div>
        </div>
      </div>
      <BottomMenuBar />
    </main>
  );
};

export default ProfileEditPage;
