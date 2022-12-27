import React from 'react'
import styles from './section-display.module.css'

const SectionDisplay = ({
    displayValue,
    resultValue
}: {
    displayValue?: string,
    resultValue?: string
}) => {
    return displayValue && resultValue ? (
        <div className={styles.container}>
            <div className={styles.content}>
                <input type="text" value={displayValue} disabled className={styles.inputContainer} />
                {
                    !resultValue
                        ? <div className={styles.outputContainer}>
                            <input
                                type="text"
                                value={resultValue}
                                id="display-result-field"
                                className={styles.displayResultField}
                            />
                            <button className={styles.copyButton}>Copy</button>
                        </div>
                        : null
                }
            </div>
        </div>
    ) : null
}

export default SectionDisplay