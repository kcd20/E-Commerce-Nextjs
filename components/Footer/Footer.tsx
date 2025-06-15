import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerTop}>
                <div className={styles.logoSection}>
                    <Image className={styles.logo} src={assets.logo} alt="logo" />
                    <p className={styles.description}>
                        Company description
                    </p>
                </div>

                <div className={styles.linkSection}>
                    <div>
                        <h2 className={styles.sectionTitle}>Company</h2>
                        <ul className={styles.linkList}>
                            <li><a className={styles.link} href="#">Home</a></li>
                            <li><a className={styles.link} href="#">About us</a></li>
                            <li><a className={styles.link} href="#">Contact us</a></li>
                            <li><a className={styles.link} href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.contactSection}>
                    <div>
                        <h2 className={styles.sectionTitle}>Get in touch</h2>
                        <div className={styles.contactInfo}>
                            <p>+1-234-567-890</p>
                            <p>contact@greatstack.dev</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className={styles.copyright}>
                Copyright 2025 © GreatStack.dev All Right Reserved.
            </p>
        </footer>
    );
};

export default Footer;
