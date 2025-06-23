'use client'
import styles from './AllProducts.module.css'; // Import the CSS Module
import ProductCard from "@/components/ProductCard/ProductCard";
import useProductStore from "@/store/useProductStore";

const AllProducts = () => {
    const products = useProductStore((state) => state.products)

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.headingWrapper}>
                    <p className={styles.headingText}>All products</p>
                    <div className={styles.headingUnderline}></div>
                </div>
                <div className={styles.productsGrid}>
                    {products.map((product, index) => <ProductCard key={index} product={product} />)}
                </div>
            </div>
        </>
    );
};

export default AllProducts;