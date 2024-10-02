import { IconNames } from "@assets/icon/icons";

interface IAppProps {
  isMobileMenu: boolean;
  mobileSubData: INavType[];
}

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

interface IServiceAdType {
  iconName: IconNames;
  title: string;
  detail: string;
}

export type {
  IRouterType,
  IAdvertiseType,
  INavType,
  ISettingType,
  IIconProps,
  IAppProps,
  IServiceAdType,
};
