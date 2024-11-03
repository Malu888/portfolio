import React, { useState} from 'react'
import styles from './Navbar.module.css'
import { RiMenu5Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }


    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>
               Portfolio
            </a>
            <div className={styles.menu}>
                {menuOpen ? (
                    <AiOutlineClose className={styles.icon} onClick={toggleMenu}/>
                    ) : (
                    <RiMenu5Fill className={styles.icon} onClick={toggleMenu} />)}
                    <ul className={ `${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`} onClick={ () => setMenuOpen(false)}>
                        <li><a href='projects'>Projects</a></li>
                        <li><a href='contact'>Contact</a></li>
                        <a href="malu-dietrich-cv.pdf" download className={styles.downloadButton}>Download CV</a>
                    </ul>
            </div>
        </nav>
    )
}

export default Navbar