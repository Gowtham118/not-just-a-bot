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
            <div>{label}</div>
            <input
                type={type}
                className="w-full text-black p-3 text-2xl rounded-2xl outline-none"
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                spellCheck={false}
            ></input>
        </div>
    );
};
