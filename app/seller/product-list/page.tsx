'use client'
import React, { useEffect, useState } from "react";
import { assets, productsDummyData } from "@/assets/assets";
import Image from "next/image";
import styles from "./ProductList.module.css"; // Import the CSS Module
import Loading from "@/components/Loading/Loading";
import { useRouter } from "next/navigation";
import ProductInterface from "@/types/ProductInterface";

const ProductList = () => {
    const router = useRouter()

    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchSellerProduct = async () => {
        setProducts(productsDummyData);
        setLoading(false);
    };

    useEffect(() => {
        fetchSellerProduct();
    }, []);

    return (
        <div className={styles.container}>
            {loading ? (
                <Loading />
            ) : (
                <div className={styles.contentWrapper}>
                    <h2 className={styles.title}>All Product</h2>
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead className={styles.tableHead}>
                                <tr>
                                    <th className={styles.tableHeadTh}>Product</th>
                                    <th className={`${styles.tableHeadTh} ${styles.hiddenSm}`}>Category</th>
                                    <th className={styles.tableHeadTh}>Price</th>
                                    <th className={`${styles.tableHeadTh} ${styles.hiddenSm}`}>Action</th>
                                </tr>
                            </thead>
                            <tbody className={styles.tableBody}>
                                {products.map((product, index) => (
                                    <tr key={index} className={styles.tableRow}>
                                        <td className={`${styles.tableCell} ${styles.productCell}`}>
                                            <div className={styles.imageWrapper}>
                                                <Image
                                                    src={product.image[0]}
                                                    alt="product Image"
                                                    className={styles.productImage}
                                                    width={1280}
                                                    height={720}
                                                />
                                            </div>
                                            <span className={styles.productName}>
                                                {product.name}
                                            </span>
                                        </td>
                                        <td className={`${styles.tableCell} ${styles.hiddenSm}`}>{product.category}</td>
                                        <td className={styles.tableCell}>${product.offerPrice}</td>
                                        <td className={`${styles.tableCell} ${styles.hiddenSm}`}>
                                            <button
                                                onClick={() => router.push(`/product/${product._id}`)}
                                                className={styles.actionButton}
                                            >
                                                <span className={styles.hiddenMd}>Visit</span>
                                                <Image
                                                    className={styles.redirectIcon}
                                                    src={assets.redirect_icon}
                                                    alt="redirect_icon"
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;