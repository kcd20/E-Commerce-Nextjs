'use client'
import React, { useEffect, useState } from "react";
import styles from './OrderSummary.module.css'; // Import the CSS module
import { addressDummyData } from "@/assets/assets";
import AddressInterface from "@/types/AddressInterface";
import { useRouter } from "next/navigation";
import useCartStore from "@/store/useCartStore";
import useCurrencyStore from "@/store/useCurrencyStore";

const OrderSummary = () => {
    const router = useRouter();
    const currency = useCurrencyStore((state) => state.currency)
    const cartCount = useCartStore((state) => state.cartCount)
    const cartAmount = useCartStore((state) => state.cartAmount)

    const [selectedAddress, setSelectedAddress] = useState<AddressInterface>({
        _id: '',
        userId: '',
        fullName: '',
        phoneNumber: '',
        pincode: 0,
        area: '',
        city: '',
        state: '',
        __v: 0,
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userAddresses, setUserAddresses] = useState<AddressInterface[]>([]);

    const fetchUserAddresses = async () => {
        setUserAddresses(addressDummyData);
        // Optionally set a default selected address if there are any
        if (addressDummyData.length > 0) {
            setSelectedAddress(addressDummyData[0]);
        }
    };

    const handleAddressSelect = (address: AddressInterface) => {
        setSelectedAddress(address);
        setIsDropdownOpen(false);
    };

    const createOrder = async () => {
        // Add your order creation logic here
        console.log("Creating order...");
        console.log("Selected Address:", selectedAddress);
        console.log("Cart Count:", cartCount());
        console.log("Cart Amount:", cartAmount());

        // Example: Router push to a success page
        // router.push('/order-confirmation');
    };

    useEffect(() => {
        fetchUserAddresses();
    }, []);

    const taxAmount = Math.floor(cartAmount() * 0.02 * 100) / 100; // Calculate tax and fix to 2 decimal places
    const totalAmount = (cartAmount() + taxAmount).toFixed(2); // Calculate total and fix to 2 decimal places

    return (
        <div className={styles.orderSummaryContainer}> {/* Apply .orderSummaryContainer */}
            <h2 className={styles.orderSummaryHeader}>Order Summary</h2> {/* Apply .orderSummaryHeader */}
            <hr className={styles.divider} /> {/* Apply .divider */}

            <div className={styles.sectionSpaceY}> {/* Apply .sectionSpaceY */}
                {/* Select Address Section */}
                <div>
                    <label className={styles.label}>Select Address</label> {/* Apply .label */}
                    <div className={styles.addressDropdownContainer}> {/* Apply .addressDropdownContainer */}
                        <button
                            className={`${styles.addressDropdownButton} ${isDropdownOpen ? styles.open : ''}`} // Apply .addressDropdownButton and conditional .open
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span>
                                {selectedAddress
                                    ? `${selectedAddress.fullName}, ${selectedAddress.area}, ${selectedAddress.city}, ${selectedAddress.state}`
                                    : "Select Address"}
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor" // Use currentColor if stroke property matches text color
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <ul className={styles.addressDropdownList}> {/* Apply .addressDropdownList */}
                                {userAddresses.map((address, index) => (
                                    <li
                                        key={index}
                                        className={styles.addressDropdownItem} // Apply .addressDropdownItem
                                        onClick={() => handleAddressSelect(address)}
                                    >
                                        {address.fullName}, {address.area}, {address.city}, {address.state}
                                    </li>
                                ))}
                                <li
                                    onClick={() => router.push("/add-address")}
                                    className={`${styles.addressDropdownItem} ${styles.addNewAddress}`} // Apply .addressDropdownItem and .addNewAddress
                                >
                                    + Add New Address
                                </li>
                            </ul>
                        )}
                    </div>
                </div>

                {/* Promo Code Section */}
                <div>
                    <label className={styles.label}>Promo Code</label> {/* Apply .label */}
                    <div className={styles.promoCodeInputContainer}> {/* Apply .promoCodeInputContainer */}
                        <input
                            type="text"
                            placeholder="Enter promo code"
                            className={styles.promoCodeInput} // Apply .promoCodeInput
                        />
                        <button className={styles.applyButton}>Apply</button> {/* Apply .applyButton */}
                    </div>
                </div>

                <hr className={styles.divider} /> {/* Apply .divider */}

                {/* Totals Section */}
                <div className={styles.totalsSpaceY}> {/* Apply .totalsSpaceY */}
                    <div className={`${styles.totalRow} ${styles.totalRow}`}> {/* Apply .totalRow (doubled for font-medium) */}
                        <p className={styles.uppercase}>Items {cartCount()}</p> {/* Apply .uppercase */}
                        <p>{currency}{cartAmount()}</p>
                    </div>
                    <div className={styles.totalRow}> {/* Apply .totalRow */}
                        <p>Shipping Fee</p>
                        <p className={styles.totalRow}>Free</p> {/* Apply totalRow p:last-child implicitly */}
                    </div>
                    <div className={styles.totalRow}> {/* Apply .totalRow */}
                        <p>Tax (2%)</p>
                        <p>{currency}{taxAmount.toFixed(2)}</p> {/* Ensure tax is also fixed to 2 decimal places */}
                    </div>
                    <div className={`${styles.totalRow} ${styles.totalRow}`}> {/* Apply .totalRow and .totalRow.borderTop */}
                        <p>Total</p>
                        <p>{currency}{totalAmount}</p>
                    </div>
                </div>
            </div>

            <button onClick={createOrder} className={styles.placeOrderButton}> {/* Apply .placeOrderButton */}
                Place Order
            </button>
        </div>
    );
};

export default OrderSummary;