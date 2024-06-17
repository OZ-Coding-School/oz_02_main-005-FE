'use client';

import { ExcelIcon } from '../../../../../public/icons/create';

const ExcelPage = () => {
  return (
    <button className="bg-white rounded-[12px] w-[22.875rem] h-[5.6875rem] p-[0.75rem] flex justify-center items-center">
      <div className="w-[3.1875rem] flex justify-center items-center">
        <ExcelIcon />
      </div>
      <div className="w-[17.9375rem] h-full text-start pl-[12px]">
        <p className="text-black font-bold">CSV (Docs, Excel, etc)</p>
        <p className="text-12 text-gray8">.csv 파일을 첨부해주세요</p>
        <p className="text-12 text-gray8 flex">
          A 필드: <p className="text-success">문제</p>, B 필드: <p className="text-success">답</p>
        </p>
      </div>
    </button>
  );
};

export default ExcelPage;
