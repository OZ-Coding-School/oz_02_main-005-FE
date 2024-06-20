interface ReplyItemProps {
  creationTime: string;
  reply: string;
}
const ReplyItem = ({ creationTime, reply }: ReplyItemProps) => {
  return (
    <div className="flex flex-col gap-[0.5rem] ml-[1.5rem]">
      <div className="text-text_secondary text-12 flex items-end">{'호범'}</div>
      <div className="flex gap-[0.5rem]">
        <div className="bg-primarylight shadow rounded-[0.25rem] py-[0.3rem] px-[0.5rem] flex items-center ">
          <p> {reply}</p>
        </div>
        <div className="text-text_secondary text-12 flex items-end">{creationTime}</div>
      </div>
    </div>
  );
};

export default ReplyItem;
