'use client'
import React from 'react'
import { assets } from '@/assets/assets'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Navbar.module.css'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  return (
    <nav className={styles.navbar}>
      <Image
        className={styles.logo}
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className={styles.navLinks}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/shop" className={styles.link}>Shop</Link>
        <Link href="/" className={styles.link}>About Us</Link>
        <Link href="/" className={styles.link}>Contact</Link>
      </div>

      <ul className={styles.icons}>
        <li><Image className={styles.icon} src={assets.search_icon} alt="search icon" /></li>
        <li>
          <button className={styles.accountBtn}>
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        </li>
      </ul>

      <div className={styles.mobileAccount}>
        <button className={styles.accountBtn}>
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </div>
    </nav>
  )
}

export default Navbar
