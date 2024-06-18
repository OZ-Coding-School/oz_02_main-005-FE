import React, { useState } from 'react';

interface CommentItemProps {
  comment: string;
  creationTime: string;
}
const CommentItem = ({ comment, creationTime, reply }: CommentItemProps) => {
  const [isSpread, setIsSpread] = useState(false);
  function handleClickSpreadButton() {
    setIsSpread(true);
  }

  return (
    <div className="flex flex-col gap-[0.5rem]">
      <div className="text-text_secondary text-12 flex items-end">{'호범'}</div>
      <div className="flex gap-[0.5rem]">
        <div className="bg-primarylight shadow rounded-[0.25rem] py-[0.3rem] px-[0.5rem] flex items-center ">
          <p> {comment}</p>
        </div>
        <div className="text-text_secondary text-12 flex items-end">{creationTime}</div>
      </div>
      <button onClick={handleClickSpreadButton}>
        <p className="text-text_primary font-bold text-14">nn 개의 답글</p>
      </button>
    </div>
  );
};

export default CommentItem;
