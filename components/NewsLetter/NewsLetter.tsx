import React from "react";
import styles from "./NewsLetter.module.css";

const NewsLetter = () => {
    return (
        <div className={styles.newsletterContainer}>
            <h1 className={styles.title}>
                Subscribe now & get 20% off
            </h1>
            <div className={styles.inputButtonContainer}>
                <input
                    className={styles.emailInput}
                    type="text"
                    placeholder="Enter your email"
                />
                <button className={styles.subscribeButton}>
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default NewsLetter;