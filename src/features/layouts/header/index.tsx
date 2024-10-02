import { Icon } from "@assets/icon";
import S from "./index.module.scss";
import { Advertise, SettingComponent } from "@features/ui";
import clsx from "clsx";
import MobileMenu from "../mobileMenu";
import { useApp } from "@contexts/appContext";
import { NAV_DATA } from "@utils/dataUtils";
import { ButtonComponent } from "@features/ui/button";

const Header = () => {
  const { setApp } = useApp();

  const handleOpenMenu = () => {
    setApp((prevState) => ({ ...prevState, isMobileMenu: true }));
  };

  return (
    <>
      <MobileMenu />
      <Advertise />
      <div className={S.root}>
        <div className={S.wrapper}>
          <button
            type="button"
            className={clsx(S.button, S.hamburger)}
            onClick={handleOpenMenu}
          >
            <Icon name="Hamburger" viewBox="0 0 24 24" width="56" height="56" />
          </button>
          <picture className={S.logo}>
            <source media="(min-width: 1200px)" srcSet="./logo.webp" />
            <img src="./mini-logo.webp" alt="Mini logo image" />
          </picture>
          <button type="button" className={clsx(S.button, S.cart)}>
            <Icon name="Cart" viewBox="0 0 24 24" width="24" height="24" />
          </button>
          <ul className={S.nav}>
            {NAV_DATA.map((data) => (
              <ButtonComponent
                type="primary"
                size="md"
                title={data.title}
                key={data.key}
                className={S.nav_item}
              />
            ))}
          </ul>
          <SettingComponent className={S.setting} />
        </div>
      </div>
    </>
  );
};

export default Header;
