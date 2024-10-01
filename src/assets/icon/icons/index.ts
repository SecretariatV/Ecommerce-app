import { Friendship } from "./FriendShip";
import { Notific } from "./Notific";
import { Payment } from "./Payment";
import { Squter } from "./Squter";

export const Icons = {
  Friendship,
  Notific,
  Payment,
  Squter,
} as const;

export type IconNames = keyof typeof Icons;
