import S from "./index.module.scss";
import { CATEGORY_DATA, SERVICE_DATA } from "@utils/dataUtils";
import { ServiceItem } from "@features/ui";

const HomePage = () => {
  return (
    <div className={S.root}>
      <div className={S.wrapper}>
        <section className={S.hero}>
          <div className={S.hero_left}>
            <span>Tasty Vegetables from Farm Vendors</span>
            <p>Every Fridays Check Best Market Deals!</p>
            <button type="button" className={S.hero_shop}>
              Shop Now
            </button>
          </div>
          <div className={S.hero_right}>
            <span>Delicious Fruits from South Africa</span>
            <p>Fresh & Non GMO Sweet Fruits</p>
            <button type="button" className={S.hero_shop}>
              Shop Now
            </button>
          </div>
        </section>
        <section className={S.service}>
          {SERVICE_DATA.map((data, index) => (
            <ServiceItem data={data} key={index} />
          ))}
        </section>
        <section className={S.product}>
          <div className={S.product_category}>
            <div className={S.product_category_header}>
              <img src="./home/market.webp" alt="Market image" />
              <span>Today Discounts</span>
              <button type="button" className={S.view}>
                view all →
              </button>
            </div>
            <div className={S.product_category_list}>
              <ul>
                {CATEGORY_DATA.map((data) => (
                  <li key={data.key}>{data.title}</li>
                ))}
              </ul>
              <button type="button" className={S.view}>
                view all →
              </button>
            </div>
          </div>
          <div className={S.product_list}></div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
