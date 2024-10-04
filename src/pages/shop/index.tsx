import { BreadcrumbComponent } from "@features/ui";
import S from "./index.module.scss";

const ShopPage = () => {
  return (
    <div className={S.root}>
      <BreadcrumbComponent />
    </div>
  );
};

export default ShopPage;
