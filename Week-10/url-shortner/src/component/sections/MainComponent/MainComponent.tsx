import React, { useEffect, useState } from 'react'
import SectionDisplay from '../SectionDisplay/SectionDisplay'
import SectionInput from '../SectionInput/SectionInput'
import styles from './main-component.module.css'
import { useShorten } from '../../../hooks'

const MainComponent = () => {

    const [value, setValue] = useState("")
    const [resultValue, setResultValue] = useState("")
    const { findShorten, state } = useShorten()

    const submitFunction = async (e: any) => {
        e.preventDefault();
        console.log(value);
        const res = await findShorten(value)
        // console.log(abc);
        setResultValue(res.result.full_short_link)
    }

    useEffect(() => {
        setResultValue("")
    }, [value])

    console.log(state);


    return (
        <div className={styles.container}>
            <p className={styles.title}>This application will shorten the link</p>
            <div className={styles.content}>
                <SectionInput submitFn={submitFunction} setter={setValue} />
                <SectionDisplay displayValue={value} resultValue={resultValue} />
            </div>
        </div>
    )
}

export default MainComponent