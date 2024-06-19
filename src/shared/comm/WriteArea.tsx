import React from 'react';
import RatingStars from '../@common/ui/RatingStars/RatingStars';
import Button from '../@common/ui/button/Button';

const WriteArea = ({ type }: { type: 'comment' | 'reply' }) => {
  const object =
    type === 'comment'
      ? { bg: 'bg-white', placeholder: '댓글을 작성해주세요', buttonContent: '댓글 달기' }
      : { bg: 'bg-gray', placeholder: '답글을 작성해주세요', buttonContent: '답글 달기' };
  return (
    <div className={`${object.bg} w-full rounded-[0.25rem] flex flex-col gap-[0.5rem] p-[0.75rem]`}>
      <div className="flex justify-start">
        <RatingStars initialStars={0} />
      </div>
      <div className="w-full border border-grayc" />
      <textarea
        placeholder={object.placeholder}
        className={`resize-none ${object.bg}`}
        name="comment"
        id="comment"></textarea>
      <div className="w-full border border-grayc" />
      <div className="w-full flex justify-end">
        <Button type="s-full">{object.buttonContent}</Button>
      </div>
    </div>
  );
};

export default WriteArea;
