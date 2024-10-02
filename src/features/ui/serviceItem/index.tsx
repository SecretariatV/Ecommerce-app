import { FC } from "react";
import S from "./index.module.scss";
import { Icon } from "@assets/icon";
import { IServiceAdType } from "@utils/typeUtils";

interface IProps {
  data: IServiceAdType;
}

export const ServiceItem: FC<IProps> = ({ data }) => {
  return (
    <div className={S.root}>
      <Icon name={data.iconName} />
      <div className={S.info}>
        <span>{data.title}</span>
        <p>{data.detail}</p>
      </div>
    </div>
  );
};
