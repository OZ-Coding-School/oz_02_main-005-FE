import React, { useState } from 'react';
import RatingStars from '../@common/ui/RatingStars/RatingStars';
import CommentItem from './CommentItem';

interface CommentAreaProps {
  comment: string;
  reply: string;
  creationTime: string;
}

const CommentArea = ({ comment, reply, creationTime }: CommentAreaProps) => {
  return (
    <div className="flex flex-col gap-4 mt-[0.75rem]">
      <p className="w-full text-start text-16 font-bold">댓글</p>

      <div className="bg-white w-[22.875rem] rounded-[0.25rem] p-[0.75rem] flex flex-col  gap-[0.5rem]">
        <CommentItem comment={comment} creationTime={creationTime} />
        <CommentItem comment={comment} creationTime={creationTime} />
        <CommentItem comment={comment} creationTime={creationTime} />
      </div>
      <div className="bg-white w-[22.875rem] rounded-[0.25rem] flex flex-col gap-[0.5rem]">
        <RatingStars initialStars={0} />
      </div>
    </div>
  );
};

export default CommentArea;
