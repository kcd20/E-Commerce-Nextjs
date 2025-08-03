'use client'
import React from 'react'
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from '@/assets/assets'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Navbar.module.css'
import { useRouter } from 'next/navigation'
import { useClerk, UserButton, useUser } from '@clerk/nextjs'
import useSellerStore from '@/store/useSellerStore'

const Navbar = () => {
  const router = useRouter()
  const { openSignIn } = useClerk()
  const { user } = useUser()
  const { isSeller } = useSellerStore()
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
        {user
          ? <><UserButton >
            <UserButton.MenuItems>
              <UserButton.Action label='Home' labelIcon={<HomeIcon />} onClick={() => router.push('/')} />
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action label='Product' labelIcon={<BoxIcon />} onClick={() => router.push('/all-products')} />
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action label='Cart' labelIcon={<CartIcon />} onClick={() => router.push('/cart')} />
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action label='My Orders' labelIcon={<BagIcon />} onClick={() => router.push('/my-orders')} />
            </UserButton.MenuItems>
          </UserButton></>
          : <li>
            <button onClick={() => openSignIn()} className={styles.accountBtn}>
              <Image src={assets.user_icon} alt="user icon" />
              Account
            </button>
          </li>
        }
      </ul>

      <div className={styles.mobileAccount}>
        {isSeller &&
          <button onClick={() => router.push('/seller')} className={styles.sellerButton}>
            Seller Dashboard
          </button>
        }
        {user
          ? <>
            <UserButton >
              <UserButton.MenuItems>
                <UserButton.Action label='Home' labelIcon={<HomeIcon />} onClick={() => router.push('/')} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label='Product' labelIcon={<BoxIcon />} onClick={() => router.push('/all-products')} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label='Cart' labelIcon={<CartIcon />} onClick={() => router.push('/cart')} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label='My Orders' labelIcon={<BagIcon />} onClick={() => router.push('/my-orders')} />
              </UserButton.MenuItems>
            </UserButton>
          </>
          : <li>
            <button onClick={() => openSignIn()} className={styles.accountBtn}>
              <Image src={assets.user_icon} alt="user icon" />
              Account
            </button>
          </li>
        }
      </div>
    </nav>
  )
}

export default Navbar
