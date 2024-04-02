import React from 'react'
import styles from "./rightBar.module.css"
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src={"/astronaut.png"} alt='astronaut' className={styles.bg} fill/>
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis dolores culpa! 
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div> 
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Coming soon</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis dolores culpa! 
          </p>
          <button className={styles.button}>
            <MdReadMore/>
            Learn
          </button>
        </div> 
      </div>
    </div>
  )
}

export default Rightbar
