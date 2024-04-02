"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'
import styles from "./menuLink.module.css"
interface SubMenuItem {
    title: string,
    path: string,
    icon: ReactNode
}
const MenuLink = ({menu}:Readonly<{
    menu: SubMenuItem
}>) => {
    const pathname = usePathname()
  return (
    <Link href={menu.path} className={`${styles.container} ${pathname === menu.path && styles.active }`}>
        <span className={styles.icon}>
        {menu.icon}
        </span>
        <h1 className={styles.title}>
        {menu.title}
        </h1>
    </Link>
  )
}

export default MenuLink
