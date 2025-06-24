'use client';
import React, { useEffect, useState } from "react";
import { assets, orderDummyData } from "@/assets/assets";
import Image from "next/image";
import styles from "./Orders.module.css"; // Import the CSS module
import useCurrencyStore from "@/store/useCurrencyStore";
import Loading from "@/components/Loading/Loading";
import OrderInterface from "@/types/OrderInterface";

const Orders = () => {
    const currency = useCurrencyStore((state) => state.currency);

    const [orders, setOrders] = useState<OrderInterface[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchSellerOrders = async () => {
        setOrders(orderDummyData);
        setLoading(false);
    }

    useEffect(() => {
        fetchSellerOrders();
    }, []);

    return (
        <div className={styles.ordersContainer}>
            {loading ? <Loading /> :
                <div className={styles.contentWrapper}>
                    <h2 className={styles.heading}>Orders</h2>
                    <div className={styles.orderList}>
                        {orders.map((order, index) => (
                            <div key={index} className={styles.orderItem}>
                                <div className={styles.itemDetails}>
                                    <Image
                                        className={styles.boxIcon}
                                        src={assets.box_icon}
                                        alt="box_icon"
                                    />
                                    <p className={styles.productInfo}>
                                        <span className={styles.productName}>
                                            {order.items.map((item) => item.product.name + ` x ${item.quantity}`).join(", ")}
                                        </span>
                                        <span>Items : {order.items.length}</span>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <span className={styles.productName}>{order.address.fullName}</span>
                                        <br />
                                        <span>{order.address.area}</span>
                                        <br />
                                        <span>{`${order.address.city}, ${order.address.state}`}</span>
                                        <br />
                                        <span>{order.address.phoneNumber}</span>
                                    </p>
                                </div>
                                <p className={styles.orderAmount}>{currency}{order.amount}</p>
                                <div>
                                    <p className={styles.orderPaymentInfo}>
                                        <span>Method : COD</span>
                                        <span>Date : {new Date(order.date).toLocaleDateString()}</span>
                                        <span>Payment : Pending</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>}
        </div>
    );
};

export default Orders;