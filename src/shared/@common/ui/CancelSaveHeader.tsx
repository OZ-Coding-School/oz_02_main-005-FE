type CancelSaveHeaderProps = {
  pageName: string;
  onCancel: () => void;
  onSave: () => void;
}

const CancelSaveHeader = ({ pageName, onCancel, onSave }: CancelSaveHeaderProps) => {

  const handleCancelClick = () => {
    onCancel();
  };

  const handleSaveClick = () => {
    onSave();
  };

  return (
    <header className="w-[414px] h-12 white flex items-center px-3">
      <div className='flex justify-between items-center w-full'>
        <button 
          className="text-16 text-gray8 font-bold w-[30px] hover:text-primary"
          onClick={handleCancelClick}
        >
          취소
        </button>
        <p className="text-[18px] font-bold text-center">
          {pageName}
        </p>
        <button 
          className="text-16 text-gray8 font-bold w-[30px] hover:text-primary"
          onClick={handleSaveClick}
        >
          저장
        </button>
      </div>
    </header>
  );
};

export default CancelSaveHeader;
