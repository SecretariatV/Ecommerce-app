import { useApp } from "@contexts/appContext";
import S from "./index.module.scss";
import { Icon } from "@assets/icon";

export const BreadcrumbComponent = () => {
  const { app } = useApp();

  return (
    <nav className={S.root}>
      <ul className={S.list}>
        {app.breadcrumb.map((data, index) => (
          <li className={S.list_item} key={index}>
            {data}
            <Icon
              name="RightArrow"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className={S.list_item_tag}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
