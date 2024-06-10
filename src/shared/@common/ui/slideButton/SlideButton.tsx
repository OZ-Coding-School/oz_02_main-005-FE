'use client';
import RightButton from './RightButton';
import LeftButton from './LeftButton';

function SlideButton() {
  function handleSlideOnLeft() {}
  function handleSlideOnRight() {}
  return (
    <div className="w-full h-[50px] gap-[2.25rem] flex justify-center">
      <LeftButton onClick={handleSlideOnLeft} />
      <RightButton onClick={handleSlideOnRight} />
    </div>
  );
}

export default SlideButton;
