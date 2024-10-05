import { BreadcrumbComponent } from "@features/ui";
import S from "./index.module.scss";
import { useApp } from "@contexts/appContext";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { SHOP_CATEGORY_DATA } from "@utils/dataUtils";
import { INavType } from "@utils/typeUtils";

const ShopPage = () => {
  const { app, setApp } = useApp();

  const handleChangeCategory = (data: INavType) => {
    setApp((prev) => ({
      ...prev,
      activeBreadcrumb: data.title,
      breadcrumb: data.breadcrumb || [],
    }));
  };

  return (
    <div className={S.root}>
      <div className={S.header}>
        <BreadcrumbComponent />
        <span className={S.title}>{app.activeBreadcrumb}</span>
        <Carousel
          height={110}
          align="start"
          slidesToScroll={1}
          controlSize={24}
          styles={{
            container: {
              display: "flex",
              gap: "20px",
            },
          }}
        >
          {SHOP_CATEGORY_DATA.map((data) => (
            <Carousel.Slide
              key={data.key}
              className={S.slide}
              onClick={() => handleChangeCategory(data)}
            >
              <img src={data.image} alt={data.title} />
              <p>{data.title}</p>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ShopPage;
