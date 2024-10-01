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
  viewBox?: string;
}

interface INavType {
  title: string;
  key: string;
  path?: string;
  icon?: IIconProps;
  children?: INavType[];
}

interface ISettingType {
  key: string;
  type: "primary";
  size: "md";
  icon: IIconProps;
}

export type { IRouterType, IAdvertiseType, INavType, ISettingType, IIconProps };
