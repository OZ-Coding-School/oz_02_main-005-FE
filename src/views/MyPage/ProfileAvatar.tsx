'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

type ProfileAvatarProps = {
  className?: string;
};

const ProfileAvatar = ({ className = '' }: ProfileAvatarProps) => {
  const router = useRouter();

  const handleAvatarClick = () => {
    router.push('/mypage/profileedit');
  };

  //TODO: 당장은 기본 avatar1 넣음
  return (
    <div className={`w-[65px] h-[65px] rounded-full overflow-hidden relative group ${className}`}>
      <Image 
        src='/images/avatar1.png'
        alt='profile avatar'
        width={65} 
        height={65} 
        className="object-cover" 
      />
      <div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black bg-opacity-50 flex items-center justify-center opacity-10 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
        onClick={handleAvatarClick}
      >
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
    </div>
  );
};

export default ProfileAvatar;
