import React, { useEffect, useState } from 'react'
import styles from './section-display.module.css'

const SectionDisplay = ({
    displayValue,
    resultValue
}: {
    displayValue?: string,
    resultValue?: string
}) => {
    const [loading, setLoading] = useState(false)
    const [done, setDone] = useState(false)
    const clipBoard = async (e: any) => {
        setLoading(true)
        if (resultValue)
            try {
                await navigator.clipboard.writeText(resultValue);
                console.log('Content copied to clipboard');
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        setLoading(false)
        setDone(true)
    }

    useEffect(() => {
        setDone(false)
    }, [displayValue, resultValue])

    return displayValue && resultValue ? (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.inputContainer}>{displayValue}</p>
                {
                    resultValue
                        ? <div className={styles.outputContainer}>
                            <p
                                id="display-result-field"
                                className={styles.displayResultField}
                            >{resultValue}</p>
                            <button className={styles.copyButton} onClick={clipBoard}>{loading ? 'Loading' : done ? 'Copied' : 'Copy'}</button>
                        </div>
                        : null
                }
            </div>
        </div>
    ) : null
}

export default SectionDisplay