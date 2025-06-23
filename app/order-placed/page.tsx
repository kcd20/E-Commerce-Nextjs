'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from './OrderPlaced.module.css' // Import the CSS Module
import { useRouter } from 'next/navigation'

const OrderPlaced = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/my-orders')
        }, 5000)
    }, [router])

    return (
        <div className={styles.container}>
            <div className={styles.spinnerWrapper}>
                <Image className={styles.checkmark} src={assets.checkmark} alt='' />
                <div className={styles.spinner}></div>
            </div>
            <div className={styles.message}>Order Placed Successfully</div>
        </div>
    )
}

export default OrderPlaced