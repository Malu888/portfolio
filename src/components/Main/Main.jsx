import React from 'react'
import myPhoto from '../../assets/malusPhoto.jpg'
import styles from './Main.module.css'
import { Link } from 'react-router-dom';
import { VscCode } from "react-icons/vsc";

function Main() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Malú Dietrich <VscCode className={styles.icondev}/></h1>
        <p className={styles.description}>Junior Full-Stack developer based in Seville.</p>
        <div className={styles.buttons}>
        <Link to='./contact' className={styles.contactBtn}>
          Contact Me
        </Link>
        <a href="malu-dietrich-cv.pdf" download className={styles.downloadButton}>My resume</a>
        </div>
      </div>
      <img src={myPhoto} alt='Malu Dietrich Photo' className={styles.myPhoto} />
    </section>
  )
}

export default Main
