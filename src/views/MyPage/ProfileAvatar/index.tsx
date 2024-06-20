'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type ProfileAvatarProps = {
  className?: string;
};

// TODO: 일단 기본 이미지를 디폴트로 조회함
const ProfileAvatar = ({ className = '' }: ProfileAvatarProps) => {
  const defaultAvatar = '/images/avatar.png';
  const [avatarUrl, setAvatarUrl] = useState(defaultAvatar);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedAvatarUrl = localStorage.getItem('avatarUrl');
    if (savedAvatarUrl) {
      setAvatarUrl(savedAvatarUrl);
    }
    setIsLoading(false);
  }, []);

  return (
    <div className={`w-[65px] h-[65px] flex justify-center items-center rounded-full overflow-hidden relative group ${className}`}>
      {isLoading ? (
        <div className="w-[65px] h-[65px] flex justify-center items-center"></div>
      ) : (
        <Image 
          src={avatarUrl}
          alt='profile avatar'
          width={65} 
          height={65} 
          className="object-cover" 
        />
      )}
      <Link href='/profileedit'>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black bg-opacity-70 flex items-center opacity-0 justify-center group-hover:opacity-100 transition-opacity duration-200 cursor-pointer">
          <div className='relative'>
            <Image 
              src="/icons/edit.png" 
              alt="edit" 
              width={18}
              height={18} 
              priority 
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProfileAvatar;
