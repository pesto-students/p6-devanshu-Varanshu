import React from 'react'
import styles from  './header.module.css'

const Header = () => {
    console.log(styles);
    
    return (
        <header>
            <h1 className={styles.title}>Todo App</h1>
        </header>
    )
}

export default Header