import MainLayout from "@features/layouts/mainLayout";
import { IAdvertiseType, IRouterType } from "./typeUtils";

const ROUTER_DATA: IRouterType[] = [
  {
    title: "Main Layout",
    path: "/",
    element: <MainLayout />,
    children: [],
  },
];

const ADVERTISE_DATA: IAdvertiseType[] = [
  {
    icon: { iconName: "Squter", width: "16", height: "16" },
    text: "Free Delivery Across the US!",
  },
  {
    icon: { iconName: "Friendship", width: "16", height: "16" },
    text: "100% Satisfaction Guarantee!",
  },
  {
    icon: { iconName: "Notific", width: "16", height: "16" },
    text: "Top-Notch Support",
  },
  {
    icon: { iconName: "Payment", width: "16", height: "16" },
    text: "Secure Payments",
  },
];

export { ROUTER_DATA, ADVERTISE_DATA };
