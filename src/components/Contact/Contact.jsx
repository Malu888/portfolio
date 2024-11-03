import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import { PiSmileyXEyes } from "react-icons/pi";
import { useState } from 'react';
import styles from './Contact.module.css'

function Contact() {

  return (
    <>
      <section className={styles.containerContact} >
        <h1 className={styles.title}>contact.</h1>
        <div className={styles.contact}>
          <FaArrowRightLong className={styles.arrowIconLeft} />
          <p className={styles.subTitle}>Get in touch with me.</p>
          <FaArrowLeftLong className={styles.arrowIconRight} />
        </div>
        <div className={styles.contactIcons}>
          <a href="https://www.linkedin.com/in/mal%C3%BA-dietrich-0b3b83292/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href='https://github.com/Malu888' target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
        </div>
      </section>
      <section className={styles.containerForm}>
        <div className={styles.divForm}>
          <p className={styles.formTitle}>Send me an email <MdOutlineMarkEmailRead className={styles.sendIcon} /></p>


          <form name="contact" action="/contact" method="post" data-netlify="true" className={styles.form}>
          <input type="hidden" name="form-name" value="contact"/>
            <div className={styles.column}>
              <label className={styles.label}>Name</label>
              <input type='text' name='name' required className={styles.inputs}></input>
              <label className={styles.label}>Email</label>
              <input type='email' name='email' required className={styles.inputs}></input>
            </div>
            <div className={styles.row}>
              <label className={styles.label}>Message</label>
              <textarea type='text' name='message' required className={styles.textarea}></textarea>
            </div>
            <div className={styles.btn}>
              <button type="submit" className={styles.send}>Send</button>

            </div>

          </form>
        </div>
      </section>
    </>
  )
}

export default Contact