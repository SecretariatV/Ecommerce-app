import { Cart } from "./Cart";
import { Close } from "./Close";
import { Friendship } from "./FriendShip";
import { Hamburger } from "./Hamburger";
import { LeftArrow } from "./LeftArrow";
import { Like } from "./Like";
import { Notific } from "./Notific";
import { Payment } from "./Payment";
import { RightArrow } from "./RightArrow";
import { Search } from "./Search";
import { Squter } from "./Squter";
import { Store } from "./Store";
import { User } from "./User";

export const Icons = {
  Cart,
  Close,
  Friendship,
  Hamburger,
  LeftArrow,
  Like,
  Notific,
  Payment,
  RightArrow,
  Search,
  Squter,
  Store,
  User,
} as const;

export type IconNames = keyof typeof Icons;
