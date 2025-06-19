import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import HeaderSlider from "@/components/HeaderSlider/HeaderSlider";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Banner from "@/components/Banner/Banner";
import HomeProducts from "@/components/HomeProducts.tsx/HomeProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <HeaderSlider />
        <HomeProducts />
        <Banner />
        <FeaturedProducts />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
}
