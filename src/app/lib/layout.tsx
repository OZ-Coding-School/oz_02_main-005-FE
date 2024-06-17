'use client';
import BaseFrame from '@/shared/@common/ui/baseFrame/BaseFrame';
import Tab from '@/shared/@common/ui/tab/Tab';
import { usePathname, useRouter } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathName = usePathname();
  const isStudyMode = pathName.endsWith('study') || pathName.endsWith('test') || pathName.endsWith('result');

  function handleTabClick(idx: number) {
    switch (idx) {
      case 0:
        return router.replace('/lib/folders');
      case 1:
        return router.replace('/lib/cardDecks');
    }
  }
  return (
    <BaseFrame>
      {!isStudyMode && <p className="font-bold text-text_primary text-32 text-start w-full p-[0.75rem]">보관함</p>}
      {!isStudyMode && <Tab tabs={['폴더', '카드 뭉치']} onClick={handleTabClick} />}
      {children}
    </BaseFrame>
  );
};

export default Layout;
