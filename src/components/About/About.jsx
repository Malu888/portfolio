import React from 'react'
import styles from './About.module.css'
import { Link } from 'react-router-dom';
import imgAbout from '../../assets/malu.jpg'
import { BsEmojiSmileUpsideDown } from "react-icons/bs";

function About() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>About me.</h2>

            <div className={styles.imageAndText}>
                <img src={imgAbout} alt='aboutPhoto' className={styles.image} />

                <p className={styles.content}>I was born in Brazil and spent most of my life in Portugal.
                    Nearly two years ago, I moved to Seville, and around a year ago, I discovered my passion for programming.
                    Since then, I’ve been deeply dedicated to learning and growing in this field.
                    This portfolio is a space for me to share a bit about myself and showcase my work.
                    I work with technologies like JavaScript, HTML, CSS, React, Node.js, Express, MongoDB, JWT, and more.
                    Currently, I’m developing new projects to strengthen my skills, gain valuable experience, and, above all, make a positive impact through my work.
                </p>
                </div>
                <div className={styles.containerText}>
                <p className={styles.text}>Thank you for visiting <BsEmojiSmileUpsideDown /></p>
            </div>
            <div className={styles.button}>
            <Link to='/' className={styles.btn}>Back</Link>
            </div>
           

        </section>
    )
}

export default About