import { FC, ReactNode } from "react";
import { UilSpinnerAlt } from "@iconscout/react-unicons";

type Button = {
    label?: string;
    onClick: () => void;
    children: ReactNode;
    loading?: boolean;
    type?: "active" | "disabled";
};

export const Button: FC<Button> = ({ children, onClick, type, loading }) => {
    return (
        <button
            className={`bg-violet flex w-full text-white justify-center gap-x-4 p-4 font-bold rounded-2xl ${
                type === "disabled" ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={onClick}
            disabled={type === "disabled" || loading}
        >
            {children}
            {loading && (
                <span className="animate-spin">
                    <UilSpinnerAlt />
                </span>
            )}
        </button>
    );
};
