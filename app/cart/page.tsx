'use client'
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import styles from './Cart.module.css'; // Import the CSS module
import { useRouter } from "next/navigation";
import useProductStore from "@/store/useProductStore";
import useCartStore from "@/store/useCartStore";

const Cart = () => {
    const router = useRouter();
    const products = useProductStore((state) => state.products);
    const cart = useCartStore((state) => state.cart)
    const addToCart = useCartStore((state) => state.addToCart)
    const updateCart = useCartStore((state) => state.updateCart)
    const cartCount = useCartStore((state) => state.cartCount)

    return (
        <>
            <div className={styles.cartContainer}> {/* Apply .cartContainer */}
                <div className="flex-1">
                    <div className={styles.cartHeader}> {/* Apply .cartHeader */}
                        <p className={styles.cartTitle}> {/* Apply .cartTitle */}
                            Your <span className={styles.cartTitle}>Cart</span> {/* Nested span inherits from parent .cartTitle */}
                        </p>
                        <p className={styles.itemCount}>{cartCount()} Items</p> {/* Apply .itemCount */}
                    </div>
                    <div className={styles.tableContainer}> {/* Apply .tableContainer */}
                        <table className={styles.cartTable}> {/* Apply .cartTable */}
                            <thead className="text-left">
                                <tr>
                                    <th className={styles.tableHeaderTh}>Product Details</th> {/* Apply .tableHeaderTh */}
                                    <th className={styles.tableHeaderTh}>Price</th>
                                    <th className={styles.tableHeaderTh}>Quantity</th>
                                    <th className={styles.tableHeaderTh}>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(cart).map((itemId) => {
                                    const product = products.find(product => product._id === itemId);

                                    if (!product || cart[itemId] <= 0) return null;

                                    return (
                                        <tr key={itemId} className={styles.productRow}> {/* Apply .productRow */}
                                            <td className={styles.productDetailsCell}> {/* Apply .productDetailsCell */}
                                                <div>
                                                    <div className={styles.productImageWrapper}> {/* Apply .productImageWrapper */}
                                                        <Image
                                                            src={product.image[0]}
                                                            alt={product.name}
                                                            className={styles.productImage} // Apply .productImage
                                                            width={1280}
                                                            height={720}
                                                        />
                                                    </div>
                                                    {/* Mobile-only remove button */}
                                                    <button
                                                        className={`${styles.removeButton} ${styles.productNameAndRemoveMobile}`} // Apply .removeButton & .productNameAndRemoveMobile
                                                        onClick={() => updateCart(product._id, 0)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                                {/* Desktop-only product name and remove button */}
                                                <div className={styles.productNameAndRemoveDesktop}> {/* Apply .productNameAndRemoveDesktop */}
                                                    <p className={styles.productName}>{product.name}</p> {/* Apply .productName */}
                                                    <button
                                                        className={styles.removeButton} // Apply .removeButton
                                                        onClick={() => updateCart(product._id, 0)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </td>
                                            <td className={styles.tableCell}>${product.price}</td> {/* Apply .tableCell */}
                                            <td className={styles.tableCell}> {/* Apply .tableCell */}
                                                <div className={styles.quantityControls}> {/* Apply .quantityControls */}
                                                    <button
                                                        onClick={() => updateCart(product._id, cart[itemId] - 1)}
                                                        className={styles.quantityButton} // Apply .quantityButton
                                                    >
                                                        <Image
                                                            src={assets.decrease_arrow}
                                                            alt="decrease_arrow"
                                                            className={styles.quantityArrow} // Apply .quantityArrow
                                                        />
                                                    </button>
                                                    <input
                                                        onChange={e => updateCart(product._id, Number(e.target.value))}
                                                        type="number"
                                                        value={cart[itemId]}
                                                        className={styles.quantityInput} // Apply .quantityInput
                                                    ></input>
                                                    <button
                                                        onClick={() => addToCart(product._id)}
                                                        className={styles.quantityButton} // Apply .quantityButton
                                                    >
                                                        <Image
                                                            src={assets.increase_arrow}
                                                            alt="increase_arrow"
                                                            className={styles.quantityArrow} // Apply .quantityArrow
                                                        />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className={styles.tableCell}>${(product.price * cart[itemId]).toFixed(2)}</td> {/* Apply .tableCell */}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <button
                        onClick={() => router.push('/all-products')}
                        className={styles.continueShoppingButton} // Apply .continueShoppingButton
                    >
                        <Image
                            className={styles.arrowIcon} // Apply .arrowIcon
                            src={assets.arrow_right_icon_colored}
                            alt="arrow_right_icon_colored"
                        />
                        Continue Shopping
                    </button>
                </div>
                {/* <OrderSummary /> */}
            </div>
        </>
    );
};

export default Cart;