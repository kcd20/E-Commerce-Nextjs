import styles from "./page.module.css";
import HeaderSlider from "@/components/HeaderSlider/HeaderSlider";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Banner from "@/components/Banner/Banner";
import HomeProducts from "@/components/HomeProducts.tsx/HomeProducts";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <HeaderSlider />
        <HomeProducts />
        <Banner />
        <FeaturedProducts />
        <NewsLetter />
      </div>
    </>
  );
}
