import {
  commActiveIcon,
  commIcon,
  homeActiveIcon,
  homeIcon,
  infoActiveIcon,
  infoIcon,
  libraryActiveIcon,
  libraryIcon,
  plusActiveIcon,
  plusIcon,
} from '../../../../../public/icons/bottomMenuBar';
import BottomButton from './BottomButton';

function BottomMenuBar() {
  return (
    <div className="w-[390px] h-[65px] bg-white flex justify-between items-center px-[1.5625rem] fixed bottom-0 z-10">
      <BottomButton passiveIcon={homeIcon} activeIcon={homeActiveIcon} />
      <BottomButton passiveIcon={commIcon} activeIcon={commActiveIcon} />
      <BottomButton passiveIcon={plusIcon} activeIcon={plusActiveIcon} />
      <BottomButton passiveIcon={libraryIcon} activeIcon={libraryActiveIcon} />
      <BottomButton passiveIcon={infoIcon} activeIcon={infoActiveIcon} />
    </div>
  );
}

export default BottomMenuBar;
