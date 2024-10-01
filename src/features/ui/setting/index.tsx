import { SETTING_DATA } from "@utils/dataUtils";
import S from "./index.module.scss";
import { ButtonComponent } from "../button";

export const SettingComponent = () => {
  return (
    <div className={S.root}>
      {SETTING_DATA.map((data) => (
        <ButtonComponent type={data.type} size={data.size} icon={data.icon} />
      ))}
    </div>
  );
};
