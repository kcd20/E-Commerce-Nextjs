import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.bannerContainer}>
            <Image
                className={styles.jblSoundboxImage}
                src={assets.jbl_soundbox_image}
                alt="jbl_soundbox_image"
            />
            <div className={styles.contentContainer}>
                <h2 className={styles.title}>
                    Level Up Your Gaming Experience
                </h2>
                <p className={styles.description}>
                    From immersive sound to precise controls—everything you need to win
                </p>
                <button className={styles.buyButton}>
                    Buy now
                    <Image className={styles.arrowIcon} src={assets.arrow_icon_white} alt="arrow_icon_white" />
                </button>
            </div>
            <Image
                className={styles.mdControllerImage}
                src={assets.md_controller_image}
                alt="md_controller_image"
            />
            <Image
                className={styles.smControllerImage}
                src={assets.sm_controller_image}
                alt="sm_controller_image"
            />
        </div>
    );
};

export default Banner;