import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.title}>Shortly</div>
            <div className={styles.footerLinkContainer}>
                <div className={styles.linkContainer}>
                    <a className={`${styles.linkHeader} ${styles.link}`}>Features</a>
                    <a className={styles.link}>Link Shortening</a>
                    <a className={styles.link}>Branded Links</a>
                    <a className={styles.link}>Analytics</a>
                </div>
                <div className={styles.linkContainer}>
                    <a className={`${styles.linkHeader} ${styles.link}`}>Resources</a>
                    <a className={styles.link}>Blog</a>
                    <a className={styles.link}>Developers</a>
                    <a className={styles.link}>Support</a>
                </div>
                <div className={styles.linkContainer}>
                    <a className={`${styles.linkHeader} ${styles.link}`}>Company</a>
                    <a className={styles.link}>About</a>
                    <a className={styles.link}>Our Team</a>
                    <a className={styles.link}>Careers</a>
                    <a className={styles.link}>Contact</a>
                </div>
            </div>
            <div className={styles.footerLinkContainer}>
                <a className={`${styles.linkHeader}`}>Login</a>
                <a className={`${styles.linkHeader}`}>Sign Up</a>
            </div>
        </footer>
    )
}

export default Footer