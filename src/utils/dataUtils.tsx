import MainLayout from "@features/layouts/mainLayout";
import {
  IAdvertiseType,
  INavType,
  IRouterType,
  ISettingType,
} from "./typeUtils";

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

const NAV_DATA: INavType[] = [
  {
    title: "Shop",
    key: "shop",
  },
  {
    title: "Vegetables",
    key: "vegetables",
    children: [
      { title: "Leafy Green", key: "leafy" },
      { title: "Mushrooms", key: "mushroom" },
      { title: "Root", key: "root" },
    ],
  },
  {
    title: "Fresh Fruit",
    key: "fruit",
    children: [
      { title: "Apple & Stone Fruits", key: "apple" },
      { title: "Barries", key: "barries" },
      { title: "Tropical & Exotic", key: "tropical" },
    ],
  },
  {
    title: "Meat",
    key: "meat",
    children: [
      { title: "Chicken & Poultry", key: "chicken" },
      { title: "Meat Gift Baskets", key: "basket" },
      { title: "Red Meat & Steaks", key: "steak" },
    ],
  },
  {
    title: "Seafood",
    key: "seafood",
    children: [
      { title: "Fish", key: "fish" },
      { title: "Lobsters", key: "lobster" },
      { title: "Other Seafood", key: "other_sea" },
    ],
  },
  {
    title: "Baking",
    key: "baking",
    children: [
      { title: "Bread", key: "bread" },
      { title: "Tortillas", key: "tortilla" },
    ],
  },
  {
    title: "Drinks",
    key: "drinks",
    children: [
      { title: "Juice", key: "juice" },
      { title: "Water", key: "water" },
    ],
  },
  {
    title: "Other",
    key: "other",
    children: [
      { title: "Milk", key: "milk" },
      { title: "Cheese", key: "cheese" },
      { title: "Eggs", key: "egg" },
    ],
  },
];

const SETTING_DATA: ISettingType[] = [
  {
    key: "search",
    type: "primary",
    size: "md",
    icon: {
      iconName: "Search",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
    },
  },
  {
    key: "profile",
    type: "primary",
    size: "md",
    icon: {
      iconName: "User",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
    },
  },
  {
    key: "whitelist",
    type: "primary",
    size: "md",
    icon: {
      iconName: "Like",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
    },
  },
  {
    key: "cart",
    type: "primary",
    size: "md",
    icon: {
      iconName: "Cart",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
    },
  },
];

export { ROUTER_DATA, ADVERTISE_DATA, NAV_DATA, SETTING_DATA };
