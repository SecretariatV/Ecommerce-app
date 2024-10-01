import { FC } from "react";
import { IconNames, Icons } from "./icons";

interface IProps {
  name: IconNames;
  width?: string;
  height?: string;
  className?: string;
}

export const Icon: FC<IProps> = ({ name, width, height, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "30"}
      height={height || "30"}
      viewBox="0 0 30 30"
      fill="none"
      className={className}
    >
      {Icons[name]()}
    </svg>
  );
};
