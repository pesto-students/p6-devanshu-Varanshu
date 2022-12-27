import React, { useState } from 'react'
import SectionDisplay from '../SectionDisplay/SectionDisplay'
import SectionInput from '../SectionInput/SectionInput'
import styles from './main-component.module.css'

const MainComponent = () => {

    const [value, setValue] = useState("")

    const submitFunction = (e: any) => {
        e.preventDefault();

    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>This application will shorten the link</p>
            <div className={styles.content}>
                <SectionInput submitFn={submitFunction} setter={setValue} />
                <SectionDisplay displayValue={value} />
            </div>
        </div>
    )
}

export default MainComponent