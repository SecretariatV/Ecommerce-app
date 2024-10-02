import { Icon } from "@assets/icon";
import S from "./index.module.scss";
import { SettingComponent } from "@features/ui";
import { ButtonComponent } from "@features/ui/button";
import { NAV_DATA } from "@utils/dataUtils";
import { useApp } from "@contexts/appContext";
import clsx from "clsx";
import useDeviceSize from "@hooks/useDeviceSize";
import { useEffect } from "react";
import { INavType } from "@utils/typeUtils";

const MobileMenu = () => {
  const { app, setApp } = useApp();
  const width = useDeviceSize();

  useEffect(() => {
    if (width >= 1200 && app.isMobileMenu) {
      setApp((prevState) => ({
        ...prevState,
        isMobileMenu: false,
        mobileSubData: [],
      }));
    }
  }, [width]);

  const handleCloseMobileMenu = () => {
    setApp((prevState) => ({
      ...prevState,
      isMobileMenu: false,
      mobileSubData: [],
    }));
  };

  const handleSetSubNavData = (data: INavType) => {
    if (data.children) {
      setApp((prevState) => ({
        ...prevState,
        mobileSubData: data.children ?? [],
      }));
    }
  };

  const handleBackNav = () => {
    setApp((prevState) => ({ ...prevState, mobileSubData: [] }));
  };

  return (
    <div className={clsx(S.root, app.isMobileMenu && S.active)}>
      <div className={S.header}>
        <button
          type="button"
          className={clsx(
            S.header_back,
            app.mobileSubData.length > 0 && S.active
          )}
          onClick={handleBackNav}
        >
          <Icon name="LeftArrow" viewBox="0 0 24 24" width="18" height="18" />
          BACK
        </button>
        <ButtonComponent
          type="primary"
          icon={{
            iconName: "Close",
            viewBox: "0 0 24 24",
            width: "48",
            height: "48",
          }}
          onClick={handleCloseMobileMenu}
        />
      </div>
      <div className={S.view}>
        <div className={clsx(S.body, app.mobileSubData.length > 0 && S.next)}>
          <ul className={S.body_nav}>
            {NAV_DATA.map((data) => (
              <div className={S.body_nav_item} key={data.key}>
                <ButtonComponent
                  size="md"
                  type="primary"
                  title={data.title}
                  onClick={() => handleSetSubNavData(data)}
                />
                {data.children && data.children.length > 0 && (
                  <Icon
                    name="RightArrow"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  />
                )}
              </div>
            ))}
          </ul>
        </div>
        <div className={S.subbody}>
          <ul className={S.body_nav}>
            {app.mobileSubData.map((data) => (
              <div className={S.body_nav_item} key={data.key}>
                <ButtonComponent
                  size="md"
                  type="primary"
                  title={data.title}
                  onClick={() => handleSetSubNavData(data)}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className={S.footer}>
        <SettingComponent />
      </div>
    </div>
  );
};

export default MobileMenu;
