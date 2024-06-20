import Image from 'next/image';
import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { searchImage } from '../../../public/images';

const SearchInput = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="bg-white shadow-md h-[3rem] px-[1.25rem] py-[0.75rem] rounded-[0.25rem] text-text_primary placeholder-text_secondary flex items-center w-full ">
      <input className="w-full overflow-hidden" {...props} />
      <button className="w-4 h-4">
        <Image src={searchImage} alt="searchImage" width={16} height={16} />
      </button>
    </div>
  );
};

export default SearchInput;
