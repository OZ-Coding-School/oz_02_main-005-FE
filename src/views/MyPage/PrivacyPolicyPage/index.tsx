'use client';

import BottomMenuBar from '@/shared/@common/ui/bottomMenu/BottomMenuBar';
import Button from '@/shared/@common/ui/button/Button';
import React from 'react';

const PrivacyPolicyPage = () => {
  const privacyPolicy = `
< 외워보까 >은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
○ 이 개인정보처리방침은 2022년 12월 1부터 적용됩니다.
제1조(개인정보의 처리 목적)
< 외워보까 >은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
홈페이지 회원가입 및 관리
회원 가입의사 확인 목적으로 개인정보를 처리합니다.
제2조(개인정보의 처리 및 보유 기간)
① < 외워보까 >은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
1.<홈페이지 회원가입 및 관리> <홈페이지 회원가입 및 관리>와 관련한 개인정보는 수집.이용에 관한 동의일로부터<지체없이 파기>까지 위 이용목적을 위하여 보유.이용됩니다.
보유근거 : 회원 정보 기반으로 서비스 제공
관련법령 :
예외사유 :
제3조(처리하는 개인정보의 항목)
① < 외워보까 >은(는) 다음의 개인정보 항목을 처리하고 있습니다.
1< 홈페이지 회원가입 및 관리 >
필수항목 : 이름
선택항목 :
제4조(개인정보의 제3자 제공에 관한 사항)
① < 외워보까 >은(는) 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
② < 외워보까 >은(는) 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.
개인정보를 제공받는 자 :
제공받는 자의 개인정보 이용목적 :
제공받는 자의 보유.이용기간:
제5조(개인정보처리의 위탁에 관한 사항)...
  `;

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container bg-gray flex-grow pt-[40px] pb-[65px] px-[10px] flex flex-col">
        <div className="flex flex-col flex-grow gap-[40px]">
          <div className='flex h-[24px] items-center justify-between'>
            <Button type="back"/>
            <p className="text-18 font-medium">개인정보 취급방침</p>
            <div className='bg-gray w-[24px]'/>
          </div>
          <div className="px-[10px]">
            <p className="font-medium">개인정보 취급방침</p>
            <pre className='text-12 text-gray8 whitespace-pre-wrap font-sans text-start'>{privacyPolicy}</pre>
          </div>
        </div>
      </div>
      <BottomMenuBar />
    </main>
  );
};

export default PrivacyPolicyPage;
