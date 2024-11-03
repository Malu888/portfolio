import React from 'react'
import myPhoto from '../../assets/malusPhoto.jpg'
import styles from './Main.module.css'
import { Link } from 'react-router-dom';

function Main() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Malú</h1>
        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nihil culpa adipisci ipsa impedit minima a dolore voluptatibus, enim veniam quibusdam nobis nisi non excepturi maiores maxime!
          Nulla officia facilis corrupti!</p>
          <Link to='./contact' className={styles.contactBtn}>
          Contact Me
          </Link>
      </div>
      <img src={myPhoto} alt='Malu Dietrich Photo' className={styles.myPhoto}/>
    </section>
  )
}

export default Main