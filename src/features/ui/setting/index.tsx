import { SETTING_DATA } from "@utils/dataUtils";
import S from "./index.module.scss";
import { ButtonComponent } from "../button";
import { FC } from "react";
import clsx from "clsx";

interface IProps {
  className?: string;
}

export const SettingComponent: FC<IProps> = ({ className }) => {
  return (
    <div className={clsx(S.root, className)}>
      {SETTING_DATA.map((data) => (
        <ButtonComponent type={data.type} size={data.size} icon={data.icon} />
      ))}
    </div>
  );
};
