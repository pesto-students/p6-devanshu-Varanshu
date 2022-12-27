import React from 'react'
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Shortly</h1>
                <div className={`${styles.linkContainer}`}>
                    <a>Features</a>
                    <a>Pricing</a>
                    <a>Resources</a>
                </div>
                <div className={`${styles.linkContainer}`}>
                    <a>Login</a>
                    <a>Sign Up</a>
                </div>
            </div>
        </header>
    )
}

export default Header