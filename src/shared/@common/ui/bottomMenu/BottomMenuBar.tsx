import {
  homeIcon,
  infoIcon,
  commIcon,
  libraryIcon,
  plusIcon,
  commActiveIcon,
  homeActiveIcon,
  infoActiveIcon,
  libraryActiveIcon,
  plusActiveIcon,
} from '../../../../../public/icons/bottomMenuBar';
import BottomButton from './BottomButton';

function BottomMenuBar() {
  return (
    <div className="w-[414px] h-[65px] bg-white flex justify-between items-center px-[1.5625rem]">
      <BottomButton passiveIcon={homeIcon} activeIcon={homeActiveIcon} />
      <BottomButton passiveIcon={commIcon} activeIcon={commActiveIcon} />
      <BottomButton passiveIcon={plusIcon} activeIcon={plusActiveIcon} />
      <BottomButton passiveIcon={libraryIcon} activeIcon={libraryActiveIcon} />
      <BottomButton passiveIcon={infoIcon} activeIcon={infoActiveIcon} />
    </div>
  );
}

export default BottomMenuBar;
