import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import styles from "./FeaturedProducts.module.css";
const products = [
    {
        id: 1,
        image: assets.girl_with_headphone_image,
        title: "Unparalleled Sound",
        description: "Experience crystal-clear audio with premium headphones.",
    },
    {
        id: 2,
        image: assets.girl_with_earphone_image,
        title: "Stay Connected",
        description: "Compact and stylish earphones for every occasion.",
    },
    {
        id: 3,
        image: assets.boy_with_laptop_image,
        title: "Power in Every Pixel",
        description: "Shop the latest laptops for work, gaming, and more.",
    },
];

const FeaturedProducts = () => {
    return (
        <div className={styles.featuredProductContainer}>
            <div className={styles.headingContainer}>
                <p className={styles.headingText}>Featured Products</p>
                <div className={styles.headingUnderline}></div>
            </div>

            <div className={styles.productsGrid}>
                {products.map(({ id, image, title, description }) => (
                    <div key={id} className={styles.productCard}>
                        <Image
                            src={image}
                            alt={title}
                            className={styles.productImage}
                        />
                        <div className={styles.productInfo}>
                            <p className={styles.productTitle}>{title}</p>
                            <p className={styles.productDescription}>
                                {description}
                            </p>
                            <button className={styles.buyButton}>
                                Buy now <Image className={styles.redirectIcon} src={assets.redirect_icon} alt="Redirect Icon" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;