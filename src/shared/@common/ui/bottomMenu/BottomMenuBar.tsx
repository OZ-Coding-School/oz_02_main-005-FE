'use client';
import { usePathname, useRouter } from 'next/navigation';
import { homeIcon, commIcon, infoIcon, libIcon, plusIcon } from '../../../../../public/icons/bottomMenuBar';
import BottomButton from './BottomButton';
import { useState } from 'react';

const BUTTON_PROPS = [
  {
    Icon: homeIcon,
    url: '/home',
  },
  {
    Icon: commIcon,
    url: '/comm',
  },
  {
    Icon: plusIcon,
    url: '/plus',
  },
  {
    Icon: libIcon,
    url: '/lib/folders',
  },
  {
    Icon: infoIcon,
    url: '/info',
  },
];

function BottomMenuBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeUrl, setActiveUrl] = useState<string>(pathname);

  const handleButtonClick = (url: string) => {
    setActiveUrl(url);
    router.push(url);
  }

  return (
    <div className="w-[390px] h-[65px] bg-white flex justify-between items-center px-[1.5625rem] fixed bottom-0 z-10 shadow-md">
      {BUTTON_PROPS.map(({ Icon, url }) => (
        <BottomButton
          key={url}
          Icon={Icon}
          onClick={(e) => {
            e.preventDefault();
            handleButtonClick(url);
          }}
          className={activeUrl === url ? 'fill-primary' : 'fill-gray8'}
        />
      ))}
    </div>
  );
}

export default BottomMenuBar;
