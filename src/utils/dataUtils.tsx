import MainLayout from "@features/layouts/mainLayout";
import {
  IAdvertiseType,
  INavType,
  IRouterType,
  IServiceAdType,
  ISettingType,
} from "./typeUtils";
import HomePage from "@pages/home";
import ShopPage from "@pages/shop";

const ROUTER_DATA: IRouterType[] = [
  {
    title: "Main Layout",
    path: "/",
    element: <MainLayout />,
    children: [
      { title: "Home", path: "", element: <HomePage /> },
      { title: "Shop", path: "/shop", element: <ShopPage /> },
    ],
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
    path: "shop",
    breadcrumb: ["Home", "Shop"],
  },
  {
    title: "Vegetables",
    key: "vegetables",
    breadcrumb: ["Home", "Shop", "Vegetables"],
    children: [
      {
        title: "Leafy Green",
        key: "leafy",
        breadcrumb: ["Home", "Shop", "Vegetables", "Leafy Green"],
      },
      {
        title: "Mushrooms",
        key: "mushroom",
        breadcrumb: ["Home", "Shop", "Vegetables", "Mushrooms"],
      },
      {
        title: "Root",
        key: "root",
        breadcrumb: ["Home", "Shop", "Vegetables", "Root"],
      },
    ],
  },
  {
    title: "Fresh Fruit",
    key: "fruit",
    breadcrumb: ["Home", "Shop", "Fresh Fruit"],
    children: [
      {
        title: "Apple & Stone Fruits",
        key: "apple",
        breadcrumb: ["Home", "Shop", "Fresh Fruit", "Apple & Stone Fruits"],
      },
      {
        title: "Barries",
        key: "barries",
        breadcrumb: ["Home", "Shop", "Fresh Fruit", "Barries"],
      },
      {
        title: "Tropical & Exotic",
        key: "tropical",
        breadcrumb: ["Home", "Shop", "Fresh Fruit", "Tropical & Exotic"],
      },
    ],
  },
  {
    title: "Meat",
    key: "meat",
    breadcrumb: ["Home", "Shop", "Meat"],
    children: [
      {
        title: "Chicken & Poultry",
        key: "chicken",
        breadcrumb: ["Home", "Shop", "Meat", "Chicken & Poultry"],
      },
      {
        title: "Meat Gift Baskets",
        key: "basket",
        breadcrumb: ["Home", "Shop", "Meat", "Meat Gift Baskets"],
      },
      {
        title: "Red Meat & Steaks",
        key: "steak",
        breadcrumb: ["Home", "Shop", "Meat", "Red Meat & Steaks"],
      },
    ],
  },
  {
    title: "Seafood",
    key: "seafood",
    breadcrumb: ["Home", "Shop", "Seafood"],
    children: [
      {
        title: "Fish",
        key: "fish",
        breadcrumb: ["Home", "Shop", "Seafood", "Fish"],
      },
      {
        title: "Lobsters",
        key: "lobster",
        breadcrumb: ["Home", "Shop", "Seafood", "Lobsters"],
      },
      {
        title: "Other Seafood",
        key: "other_sea",
        breadcrumb: ["Home", "Shop", "Seafood", "Other Seafood"],
      },
    ],
  },
  {
    title: "Baking",
    key: "baking",
    breadcrumb: ["Home", "Shop", "Baking"],
    children: [
      {
        title: "Bread",
        key: "bread",
        breadcrumb: ["Home", "Shop", "Baking", "Bread"],
      },
      {
        title: "Tortillas",
        key: "tortilla",
        breadcrumb: ["Home", "Shop", "Baking", "Tortillas"],
      },
    ],
  },
  {
    title: "Drinks",
    key: "drinks",
    breadcrumb: ["Home", "Shop", "Drinks"],
    children: [
      {
        title: "Juice",
        key: "juice",
        breadcrumb: ["Home", "Shop", "Drinks", "Juice"],
      },
      {
        title: "Water",
        key: "water",
        breadcrumb: ["Home", "Shop", "Drinks", "Water"],
      },
    ],
  },
  {
    title: "Other",
    key: "other",
    breadcrumb: ["Home", "Shop", "Other"],
    children: [
      {
        title: "Milk",
        key: "milk",
        breadcrumb: ["Home", "Shop", "Other", "Milk"],
      },
      {
        title: "Cheese",
        key: "cheese",
        breadcrumb: ["Home", "Shop", "Other", "Cheese"],
      },
      {
        title: "Eggs",
        key: "egg",
        breadcrumb: ["Home", "Shop", "Other", "Eggs"],
      },
    ],
  },
];

const CATEGORY_DATA: INavType[] = [
  {
    title: "Vegetables",
    key: "vegetables",
  },
  {
    title: "Fresh Fruit",
    key: "fruit",
  },
  {
    title: "Meat",
    key: "meat",
  },
  {
    title: "Seafood",
    key: "seafood",
  },
  {
    title: "Baking",
    key: "baking",
  },
  {
    title: "Drinks",
    key: "drink",
  },
  {
    title: "Milk",
    key: "milk",
  },
  {
    title: "Eggs",
    key: "egg",
  },
  {
    title: "Cheese",
    key: "cheese",
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

const SERVICE_DATA: IServiceAdType[] = [
  {
    iconName: "Squter",
    title: "Free Delivery Across the US!",
    detail: "Free delivery for all orders above $100",
  },
  {
    iconName: "Friendship",
    title: "100% Satisfaction Guarantee!",
    detail: "Providing help in case of dissatisfaction",
  },
  {
    iconName: "Notific",
    title: "Top-Notch Support",
    detail: "Chat with us if you've any questions",
  },
  {
    iconName: "Payment",
    title: "Secure Payments",
    detail: "We use safest payment technologies",
  },
];

export {
  ROUTER_DATA,
  ADVERTISE_DATA,
  NAV_DATA,
  SETTING_DATA,
  SERVICE_DATA,
  CATEGORY_DATA,
};
