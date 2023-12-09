import { CgProfile } from "react-icons/cg";

export const UserMessage = ({ data }: { data: string }) => {
  return (
    <div className="text-light-grey p-2">
      <div className="flex gap-x-6 items-center">
        <CgProfile className={"w-8 h-8"} />
        <p>{data}</p>
      </div>
    </div>
  );
};
