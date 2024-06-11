'use client';
import { useRouter } from 'next/navigation';
import {
  commActiveIcon,
  commIcon,
  homeActiveIcon,
  homeIcon,
  infoActiveIcon,
  infoIcon,
  libActiveIcon,
  libIcon,
  plusActiveIcon,
  plusIcon,
} from '../../../../../public/icons/bottomMenuBar';
import BottomButton from './BottomButton';

const BUTTON_PROPS = [
  {
    passiveIcon: homeIcon,
    activeIcon: homeActiveIcon,
    url: '/',
  },
  {
    passiveIcon: commIcon,
    activeIcon: commActiveIcon,
    url: '/comm',
  },
  {
    passiveIcon: plusIcon,
    activeIcon: plusActiveIcon,
    url: '/plus',
  },
  {
    passiveIcon: libIcon,
    activeIcon: libActiveIcon,
    url: '/lib',
  },
  {
    passiveIcon: infoIcon,
    activeIcon: infoActiveIcon,
    url: '/info',
  },
];

function BottomMenuBar() {
  const router = useRouter();

  return (
    <div className="w-[390px] h-[65px] bg-white flex justify-between items-center px-[1.5625rem] fixed bottom-0 z-10">
      {BUTTON_PROPS.map(({ passiveIcon, activeIcon, url }) => (
        <BottomButton
          key={url}
          passiveIcon={passiveIcon}
          activeIcon={activeIcon}
          onClick={e => {
            e.preventDefault;
            router.push(url);
          }}
        />
      ))}
    </div>
  );
}

export default BottomMenuBar;
