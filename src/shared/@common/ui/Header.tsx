import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-[414px] h-[50px] bg-white flex items-center justify-between px-3">
      <div>
        <Image 
          src="/images/logo.png" 
          alt="logo"
          width={200}
          height={40}
        />
      </div>
      <div className='w-24 h-[30px] bg-primary flex items-center justify-end rounded-l-full'>
        <p className='text-white pr-2 text-12 '> 
          {''} 님 
        </p>
      </div>
    </header>
  );
};

export default Header;
