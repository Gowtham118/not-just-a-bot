import { FC } from "react";

type InputBox = {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  type?: "text" | "password";
};

export const InputBox: FC<InputBox> = ({
  label,
  placeholder,
  onChange,
  value,
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-light-grey">{label}</div>
      <input
        type={type}
        className="w-full text-white p-3 text-xl rounded-lg outline-none bg-black border-[1px] border-[#27272a]"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        spellCheck={false}
      ></input>
    </div>
  );
};
