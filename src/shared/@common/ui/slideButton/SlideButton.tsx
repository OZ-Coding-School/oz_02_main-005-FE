'use client';
import { LeftButtonIcon, RightButtonIcon } from '../../../../../public/icons/SlideButton';

function SlideButton() {
  function handleSlide(direction: string) {
    if (direction === 'left') {
    } else {
    }
  }
  const BUTTON_ICONS = [
    {
      ButtonIcon: LeftButtonIcon,
      onClick: () => handleSlide('left'),
    },
    {
      ButtonIcon: RightButtonIcon,
      onClick: () => handleSlide('right'),
    },
  ];

  return (
    <div className="w-full h-[50px] gap-[2.25rem] flex justify-center">
      {BUTTON_ICONS.map(({ ButtonIcon, onClick }, idx) => (
        <button
          onClick={onClick}
          key={idx}
          className="w-[3.125rem] h-[3.125rem]  flex justify-center items-center  rounded-[50%] shadow-md  hover:bg-white">
          <ButtonIcon className={'fill-gray6 hover:fill-primary'} />
        </button>
      ))}
    </div>
  );
}

export default SlideButton;
