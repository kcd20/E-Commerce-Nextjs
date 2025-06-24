'use client'
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import styles from "./AddAddress.module.css"; // Import the CSS module

const AddAddress = () => {

    const [address, setAddress] = useState({
        fullName: '',
        phoneNumber: '',
        pincode: '',
        area: '',
        city: '',
        state: '',
    })

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // You would typically handle form submission logic here, e.g., send data to an API
        console.log("Address submitted:", address);
    }

    return (
        <>
            <div className={styles.addAddressContainer}>
                <form onSubmit={onSubmitHandler} className="w-full">
                    <p className={styles.title}>
                        Add Shipping <span className={styles.title}>Address</span>
                    </p>
                    <div className={`${styles.formSpacing} max-w-sm`}>
                        <input
                            className={styles.inputField}
                            type="text"
                            placeholder="Full name"
                            onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                            value={address.fullName}
                        />
                        <input
                            className={styles.inputField}
                            type="text"
                            placeholder="Phone number"
                            onChange={(e) => setAddress({ ...address, phoneNumber: e.target.value })}
                            value={address.phoneNumber}
                        />
                        <input
                            className={styles.inputField}
                            type="text"
                            placeholder="Pin code"
                            onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                            value={address.pincode}
                        />
                        <textarea
                            className={styles.textareaField}
                            rows={4}
                            placeholder="Address (Area and Street)"
                            onChange={(e) => setAddress({ ...address, area: e.target.value })}
                            value={address.area}
                        ></textarea>
                        <div className={styles.cityStateContainer}>
                            <input
                                className={styles.inputField}
                                type="text"
                                placeholder="City/District/Town"
                                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                value={address.city}
                            />
                            <input
                                className={styles.inputField}
                                type="text"
                                placeholder="State"
                                onChange={(e) => setAddress({ ...address, state: e.target.value })}
                                value={address.state}
                            />
                        </div>
                    </div>
                    <button type="submit" className={`${styles.saveButton} max-w-sm`}>
                        Save address
                    </button>
                </form>
                <Image
                    className={styles.imageLocation}
                    src={assets.my_location_image}
                    alt="my_location_image"
                />
            </div>
        </>
    );
};

export default AddAddress;