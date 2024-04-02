import React from 'react'
import styles from "@/app/ui/dashboard/dashboard.module.css"
import Card from '../ui/dashboard/card/card'
import VueJS from "@/public/VueJS.webp"
import Image from 'next/image'
import Coding from "@/public/coding.jpg"
const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.main}>
          <Image src={VueJS} alt='coding'/>
          <Image src={Coding} alt='coding'/>
        </div>
    </div>
  )
}

export default Dashboard
