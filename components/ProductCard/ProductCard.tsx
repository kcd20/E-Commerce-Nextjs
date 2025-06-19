import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import styles from './ProductCard.module.css';
import { useRouter } from 'next/navigation'
import ProductInterface from '@/types/ProductInterface';
import useCurrencyStore from '@/store/useCurrencyStore';

function ProductCard({ product }: { product: ProductInterface }) {
    const router = useRouter()
    const currency = useCurrencyStore((state) => state.currency)
    return (
        <div
            onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
            className={styles.productCard}
        >
            <div className={styles.imageContainer}>
                <Image
                    src={product.image[0]}
                    alt={product.name}
                    className={styles.productImage}
                    width={800}
                    height={800}
                />
                <button className={styles.heartButton}>
                    <Image
                        className={styles.heartIcon}
                        src={assets.heart_icon}
                        alt="heart_icon"
                    />
                </button>
            </div>

            <p className={styles.productName}>{product.name}</p>
            <p className={styles.productDescription}>{product.description}</p>
            <div className={styles.ratingContainer}>
                <p className={styles.ratingNumber}>{4.5}</p>
                <div className={styles.starIcons}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Image
                            key={index}
                            className={styles.starIcon}
                            src={
                                index < Math.floor(4)
                                    ? assets.star_icon
                                    : assets.star_dull_icon
                            }
                            alt="star_icon"
                        />
                    ))}
                </div>
            </div>

            <div className={styles.priceBuyContainer}>
                <p className={styles.price}>{currency}{product.price}</p>
                <button className={styles.buyNowButton}>
                    Buy now
                </button>
            </div>
        </div>
    )
}

export default ProductCard