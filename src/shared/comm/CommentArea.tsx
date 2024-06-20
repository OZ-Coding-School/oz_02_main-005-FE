import CommentItem from './CommentItem';
import WriteArea from './WriteArea';

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
        <CommentItem
          writer="호범"
          replies={['좋아요', '멋져요']}
          comment={comment}
          creationTime={creationTime}
          replyCount={2}
        />
        <CommentItem
          writer="호범"
          replies={['좋아요', '멋져요']}
          comment={comment}
          creationTime={creationTime}
          replyCount={2}
        />
        <CommentItem
          writer="호범"
          replies={['좋아요', '멋져요']}
          comment={comment}
          creationTime={creationTime}
          replyCount={2}
        />
      </div>

      <WriteArea type="comment" />
    </div>
  );
};

export default CommentArea;
