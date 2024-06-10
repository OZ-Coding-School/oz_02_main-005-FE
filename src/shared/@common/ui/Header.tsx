import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-[390px] h-[50px] pl-[12px] bg-white flex items-center justify-between ">
      <div>
        <Image 
          src="/images/logo.png" 
          alt="logo"
          width={200}
          height={40}
        />
      </div>
      <div className='w-24 h-[30px] pr-[12px] bg-primary flex items-center justify-end rounded-l-full'>
        <p className='text-white text-12'> 
          {''} 님 
        </p>
      </div>
    </header>
  );
};

export default Header;
