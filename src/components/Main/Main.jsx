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


/*Web Developer.  I was born in Brazil and spent most of my life in Portugal. Nearly two years ago, I moved to Seville, and around a year ago, I discovered my passion for programming. Since then, I’ve been deeply dedicated to learning and growing in this field.

          This portfolio is a space for me to share a bit about myself and showcase my work. I work with technologies like JavaScript, HTML, CSS, React, Node.js, Express, MongoDB, JWT, and more.

          Currently, I’m developing new projects to strengthen my skills, gain valuable experience, and, above all, make a positive impact through my work.

          Thank you for visiting!*/