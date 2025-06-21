"use client"
import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";

import styles from "./Product.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import useProductStore from "@/store/useProductStore";
import Loading from "@/components/Loading/Loading";
import ProductInterface from "@/types/ProductInterface";

import useCartStore from "@/store/useCartStore";

const Product = () => {
    const { id } = useParams();
    const router = useRouter();
    const products = useProductStore((state) => state.products);
    const addToCart = useCartStore((state) => state.addToCart);

    const [mainImage, setMainImage] = useState('');
    const [productData, setProductData] = useState<ProductInterface>({
        _id: '',
        name: '',
        image: [],
        description: '',
        price: 0,
        category: '',
    });

    // Filter out the current product from the 'products' array for featured products
    const featuredProducts = products.filter(p => p._id !== id).slice(0, 5);

    useEffect(() => {
        const product = products.find(product => product._id === id);
        if (!product) {
            return;
        }
        setProductData(product);
        // Set main image if productData changes and mainImage is not already set
        if (product && !mainImage) {
            setMainImage(product.image[0]);
        }
    }, [id, products.length, products, mainImage]);

    if (!productData._id) {
        return <Loading />;
    }

    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.productGrid}>
                    <div className={styles.imageSection}>
                        <div className={styles.mainImageContainer}>
                            <Image
                                src={mainImage || productData.image[0]}
                                alt={productData.name || "Product image"}
                                className={styles.mainImage}
                                width={1280}
                                height={720}
                                priority
                            />
                        </div>

                        <div className={styles.thumbnailGrid}>
                            {productData.image.map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => setMainImage(image)}
                                    className={styles.thumbnailItem}
                                >
                                    <Image
                                        src={image}
                                        alt={`Thumbnail ${index + 1} for ${productData.name}`}
                                        className={styles.thumbnailImage}
                                        width={1280}
                                        height={720}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.detailsSection}>
                        <h1 className={styles.productName}>
                            {productData.name}
                        </h1>
                        <div className={styles.ratingWrapper}>
                            <div className={styles.starIcons}>
                                <Image className={styles.starIcon} src={assets.star_icon} alt="star icon" />
                                <Image className={styles.starIcon} src={assets.star_icon} alt="star icon" />
                                <Image className={styles.starIcon} src={assets.star_icon} alt="star icon" />
                                <Image className={styles.starIcon} src={assets.star_icon} alt="star icon" />
                                <Image
                                    className={styles.starIcon}
                                    src={assets.star_dull_icon}
                                    alt="dull star icon"
                                />
                            </div>
                            <p>(4.5)</p>
                        </div>
                        <p className={styles.productDescription}>
                            {productData.description}
                        </p>
                        <p className={styles.priceDisplay}>
                            ${productData.price}
                            <span className={styles.originalPrice}>
                                ${productData.price}
                            </span>
                        </p>
                        <hr className={styles.divider} />
                        <div className={styles.tableContainer}>
                            <table className={styles.productTable}>
                                <tbody>
                                    <tr>
                                        <td className={styles.tableKey}>Brand</td>
                                        <td className={styles.tableValue}>Generic</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.tableKey}>Color</td>
                                        <td className={styles.tableValue}>Multi</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.tableKey}>Category</td>
                                        <td className={styles.tableValue}>
                                            {productData.category}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={styles.actionButtons}>
                            <button onClick={() => addToCart(productData._id)} className={styles.addToCartBtn}>
                                Add to Cart
                            </button>
                            <button onClick={() => { addToCart(productData._id); router.push('/cart') }} className={styles.buyNowBtn}>
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.featuredProductsSection}>
                    <div className={styles.featuredHeadingWrapper}>
                        <p className={styles.featuredHeadingText}>Featured <span>Products</span></p>
                        <div className={styles.headingUnderline}></div>
                    </div>
                    <div className={styles.featuredGrid}>
                        {featuredProducts.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                    <button className={styles.seeMoreButton}>
                        See more
                    </button>
                </div>
            </div>
        </>
    );
};

export default Product;