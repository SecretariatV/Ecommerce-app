import { FC } from "react";
import * as S from "./index.styled";
import { IIconProps } from "@utils/typeUtils";
import { Icon } from "@assets/icon";

interface IProps {
  type: "primary" | "secondary";
  size?: "sm" | "md";
  icon?: IIconProps;
  title?: string;
}

export const ButtonComponent: FC<IProps> = ({ type, size, icon, title }) => {
  return (
    <S.Root $type={type === "primary" ? true : false} $size={size}>
      {icon && (
        <Icon
          name={icon.iconName}
          viewBox={icon.viewBox}
          height={icon.height}
          width={icon.width}
        />
      )}
      {title && <span>{title}</span>}
    </S.Root>
  );
};
