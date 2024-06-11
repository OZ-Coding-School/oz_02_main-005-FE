import BaseFrame from '@/shared/@common/ui/baseFrame/BaseFrame';
import CardListItem from '@/shared/@common/ui/cardListItem/CardListItem';
import CommonInput from '@/shared/@common/ui/input/CommonInput';
import SlideButton from '@/shared/@common/ui/slideButton/SlideButton';

const page = () => {
  return (
    <BaseFrame>
      <CardListItem />
      <CommonInput label="아이디" placeholder="아이디를 입력해주세요." />
      <SlideButton />
    </BaseFrame>
  );
};

export default page;
