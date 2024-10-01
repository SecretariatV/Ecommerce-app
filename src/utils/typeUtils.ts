import { IconNames } from "@assets/icon/icons";

interface IRouterType {
  title: string;
  path: string;
  element: JSX.Element;
  children?: IRouterType[];
}

interface IAdvertiseType {
  icon: IIconProps;
  text: string;
}

interface IIconProps {
  iconName: IconNames;
  width?: string;
  height?: string;
}

export type { IRouterType, IAdvertiseType };
