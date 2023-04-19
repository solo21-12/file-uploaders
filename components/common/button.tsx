import { ButtonProps } from "../../types/";

export const Button = ({ title, onClicke, Icons }: ButtonProps) => {
  return (
    <button
      className=" bg-black text-white text-xs md:text-sm px-2 py-2 md:px-3 md:py-2 rounded-md hover:text-slate-300 mb-5 flex gap-2 align-middle items-center"
      onClick={onClicke}
    >
      {Icons}
      {title}
    </button>
  );
};

