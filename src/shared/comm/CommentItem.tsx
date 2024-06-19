import React, { useState } from 'react';
import ReplyItem from './ReplyItem';
import RatingStars from '../@common/ui/RatingStars/RatingStars';
import Button from '../@common/ui/button/Button';
import WriteArea from './WriteArea';

interface CommentItemProps {
  comment: string;
  creationTime: string;
  replyCount: number;
  replies: string[];
  writer: string;
}
const CommentItem = ({ writer, comment, creationTime, replies, replyCount }: CommentItemProps) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [writeReply, setWriteReply] = useState(false);
  function handleClickReplyButton() {
    if (replies.length > 0) setIsReplyOpen(state => !state);
  }

  return (
    <div className="flex flex-col gap-[0.5rem] py-[1rem] border-b-[1px] border-grayc ">
      <div className="text-text_secondary text-12 flex items-end">{writer}</div>
      <div className="flex justify-between gap-[0.75rem] items-end">
        <div className="flex gap-[0.5rem] flex-col">
          <div className="bg-primarylight shadow rounded-[0.25rem] py-[0.3rem] px-[0.5rem] flex items-center ">
            <p> {comment}</p>
          </div>
          <div className="flex gap-2 items-center px-[0.2.5rem]">
            <div className="text-text_secondary text-12 flex items-end">{creationTime}</div>
            <div className="w-[3.75rem] flex items-end">
              <RatingStars initialStars={4} />
            </div>
          </div>
        </div>
        <Button type="xs-full" onClick={() => setWriteReply(state => !state)}>
          {writeReply ? '작성 취소' : '답글 작성'}
        </Button>
      </div>

      <button onClick={handleClickReplyButton}>
        <p className="text-text_primary hover:text-primary font-bold text-14">
          {isReplyOpen ? '답글 닫기' : `${replyCount}개의 답글`}
        </p>
      </button>
      {isReplyOpen && replies.map((reply, idx) => <ReplyItem key={idx} creationTime="01:11" reply={reply} />)}
      {writeReply && <WriteArea type="reply" />}
    </div>
  );
};

export default CommentItem;
