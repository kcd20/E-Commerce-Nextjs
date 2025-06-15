"use client";
import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import styles from "./HeaderSlider.module.css";

const HeaderSlider = () => {
    const sliderData = [
        {
            id: 1,
            title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
            offer: "Limited Time Offer 30% Off",
            buttonText1: "Buy now",
            buttonText2: "Find more",
            imgSrc: assets.header_headphone_image,
        },
        {
            id: 2,
            title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
            offer: "Hurry up only few lefts!",
            buttonText1: "Shop Now",
            buttonText2: "Explore Deals",
            imgSrc: assets.header_playstation_image,
        },
        {
            id: 3,
            title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
            offer: "Exclusive Deal 40% Off",
            buttonText1: "Order Now",
            buttonText2: "Learn More",
            imgSrc: assets.header_macbook_image,
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [sliderData.length]);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className={styles.sliderContainer}>
            <div
                className={styles.sliderWrapper}
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >
                {sliderData.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={styles.slideItem}
                    >
                        <div className={styles.slideContent}>
                            <p className={styles.offerText}>{slide.offer}</p>
                            <h1 className={styles.slideTitle}>
                                {slide.title}
                            </h1>
                            <div className={styles.buttonContainer}>
                                <button className={styles.buyButton}>
                                    {slide.buttonText1}
                                </button>
                                <button className={styles.findMoreButton}>
                                    {slide.buttonText2}
                                    <Image className={styles.arrowIcon} src={assets.arrow_icon} alt="arrow_icon" />
                                </button>
                            </div>
                        </div>
                        <div className={styles.slideImageWrapper}>
                            <Image
                                className={styles.slideImage}
                                src={slide.imgSrc}
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.dotNavigation}>
                {sliderData.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ""
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default HeaderSlider;