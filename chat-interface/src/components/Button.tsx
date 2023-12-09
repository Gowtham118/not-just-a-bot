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
      className={`bg-white w-24 flex text-black border-[1px] border-[#27272a] justify-center gap-x-4 px-4 py-2 font-bold rounded-lg ${
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
