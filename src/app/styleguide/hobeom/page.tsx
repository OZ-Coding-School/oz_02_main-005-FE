import BaseFrame from '@/shared/@common/ui/baseFrame/BaseFrame';
import BottomMenuBar from '@/shared/@common/ui/bottomMenu/BottomMenuBar';
import CardListItem from '@/shared/@common/ui/cardListItem/CardListItem';
import Input from '@/shared/@common/ui/input/Input';
import SlideButton from '@/shared/@common/ui/slideButton/SlideButton';

const page = () => {
  return (
    <BaseFrame>
      <CardListItem />
      <Input label="아이디" placeholder="아이디를 입력해주세요." />
      <SlideButton />
    </BaseFrame>
  );
};

export default page;
