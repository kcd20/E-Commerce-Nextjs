'use client'
import React, { useEffect } from "react";
import styles from "./HomeProducts.module.css";
import ProductCard from "../ProductCard/ProductCard";
import useProductStore from "@/store/useProductStore";
import { useRouter } from "next/navigation";
import { productsDummyData } from "@/assets/assets";

export default function HomeProducts() {
    const router = useRouter()
    const products = useProductStore((state) => state.products)
    const updateProducts = useProductStore((state) => state.updateProducts)

    useEffect(() => {
        updateProducts(productsDummyData)
    })

    return (
        <div className={styles.homeProductsContainer}>
            <p className={styles.heading}>Popular products</p>
            <div className={styles.productsGrid}>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
            <button
                onClick={() => {
                    router.push("/shop");
                }}
                className={styles.seeMoreButton}
            >
                See more
            </button>
        </div>
    );
};