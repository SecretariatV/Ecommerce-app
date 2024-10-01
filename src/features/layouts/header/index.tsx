import { Icon } from "@assets/icon";
import S from "./index.module.scss";
import { Advertise } from "@features/ui";
import clsx from "clsx";
import MobileMenu from "../mobileMenu";

const Header = () => {
  return (
    <>
      <MobileMenu />
      <Advertise />
      <div className={S.root}>
        <button type="button" className={clsx(S.button, S.hamburger)}>
          <Icon name="Hamburger" viewBox="0 0 24 24" width="56" height="56" />
        </button>
        <picture className={S.logo}>
          <img src="./mini-logo.webp" alt="Mini logo image" />
        </picture>
        <button type="button" className={clsx(S.button, S.cart)}>
          <Icon name="Cart" viewBox="0 0 24 24" width="24" height="24" />
        </button>
      </div>
    </>
  );
};

export default Header;
