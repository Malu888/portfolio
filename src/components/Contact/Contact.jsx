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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (response.ok) {
      setStatus('Email sent successfuly')
      setMessage('')
      setEmail('')
      setName('')
    } else {
      setStatus('Error sending email')
    }

  }

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
          <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className={styles.form}>
          <input type="hidden" name="form-name" value="contact" />
            <div className={styles.column}>
              <label className={styles.label}>Name</label>
              <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} required className={styles.inputs}></input>
              <label className={styles.label}>Email</label>
              <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required className={styles.inputs}></input>
            </div>
            <div className={styles.row}>
              <label className={styles.label}>Message</label>
              <textarea type='text' name='message' value={message} onChange={(e) => setMessage(e.target.value)} required className={styles.textarea}></textarea>
            </div>
            <div className={styles.btn}>
              <button type="submit" className={styles.send}>Send</button>
              {status && (
                <p className={styles.status}>
                  {status}
                  {status.includes('successfuly') ? (
                    <BsEmojiSmileUpsideDown className={styles.sendIcon} />
                  ) : (
                    <PiSmileyXEyes className={styles.sendIcon} />
                  )}
                </p>
              )}

            </div>

          </form>
        </div>
      </section>
    </>
  )
}

export default Contact