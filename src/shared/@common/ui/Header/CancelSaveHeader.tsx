import { useDecksStore } from '@/features/library/store/decksStore';
import { useFoldersStore } from '@/features/library/store/foldersStore';
import { usePathname, useRouter } from 'next/navigation';

type CancelSaveHeaderProps = {
  pageName: string;
  onCancel: () => void;
  onSave: () => void;
};

const CancelSaveHeader = ({ pageName, onCancel, onSave }: CancelSaveHeaderProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const saveType = pathName.includes('folder') ? 'folders' : 'cardDecks';
  const createDeck = useDecksStore(state => state.createDeck);
  const createFolder = useFoldersStore(state => state.createFolder);
  function handleSave() {
    //saveType === 'folders' ? createFolder() : createDeck();

    router.push(`/lib/${saveType}`);
  }
  return (
    <header className="w-[390px] h-[50px] bg-gray flex items-center px-3 fixed">
      <div className="flex justify-between items-center w-full">
        <button className="text-16 text-gray8 font-bold w-[30px] hover:text-primary" onClick={onCancel}>
          취소
        </button>
        <p className="text-18 font-bold text-center">{pageName}</p>
        <button className="text-16 text-gray8 font-bold w-[30px] hover:text-primary" onClick={onSave}>
          저장
        </button>
      </div>
    </header>
  );
};

export default CancelSaveHeader;
