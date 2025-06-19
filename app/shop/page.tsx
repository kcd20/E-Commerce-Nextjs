'use client'
import React from 'react';

import styles from './shop.module.css'; // Import your CSS module
import useProductStore from '@/store/useProductStore';
import ProductCard from '@/components/ProductCard/ProductCard';

export default function Shop() {
    const products = useProductStore((state) => state.products);

    return (
        <div className={styles.container}>
            <div className={styles.headingSection}>
                <p className={styles.headingText}>All products</p>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.productsGrid}>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};