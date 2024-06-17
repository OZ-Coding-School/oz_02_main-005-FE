import React from 'react';
import SlideButton from '../@common/ui/slideButton/SlideButton';
import Button from '../@common/ui/Button/Button';
import { EditIcon } from '../../../public/icons/lib';
import { useParams, usePathname, useRouter } from 'next/navigation';
interface CardDeckInfoProps {
  constructor: string;
}

const CardDeckInfo = ({ constructor }: CardDeckInfoProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const params = useParams();
  const deckName = Array.isArray(params.deckName) ? params.deckName[0] : params.deckName;
  const decodeFolderName = decodeURIComponent(deckName);

  function handleClickStudyModeButton() {
    router.push(`${pathName}/study`);
  }
  function handleClickTestModeButton() {
    router.push(`${pathName}/test`);
  }
  return (
    <div className="flex flex-col gap-[0.75rem]">
      <div className="w-full h-[3.75rem] flex flex-col justify-between">
        <div className="flex justify-between">
          <p className="text-20 font-bold">{decodeFolderName}</p>
          <EditIcon />
        </div>
        <div className="text-text_secondary text-12">{constructor}</div>
      </div>
      <div className="bg-white rounded-[5px] h-[8.75rem] flex justify-center items-center">slide</div>
      <SlideButton />
      <div className="flex gap-6">
        <Button type="m-line" onClick={handleClickStudyModeButton}>
          학습 모드
        </Button>
        <Button type="m-line" onClick={handleClickTestModeButton}>
          시험 모드
        </Button>
      </div>
    </div>
  );
};

export default CardDeckInfo;
