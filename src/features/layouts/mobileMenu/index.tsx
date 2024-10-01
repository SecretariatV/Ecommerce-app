import { Icon } from "@assets/icon";
import S from "./index.module.scss";
import { SettingComponent } from "@features/ui";
import { ButtonComponent } from "@features/ui/button";
import { NAV_DATA } from "@utils/dataUtils";

const MobileMenu = () => {
  return (
    <div className={S.root}>
      <div className={S.header}>
        <button type="button" className={S.header_back}>
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
        />
      </div>
      <div className={S.body}>
        <ul className={S.body_nav}>
          {NAV_DATA.map((data) => (
            <div className={S.body_nav_item} key={data.key}>
              <ButtonComponent size="md" type="primary" title={data.title} />
            </div>
          ))}
        </ul>
      </div>
      <div className={S.footer}>
        <SettingComponent />
      </div>
    </div>
  );
};

export default MobileMenu;
