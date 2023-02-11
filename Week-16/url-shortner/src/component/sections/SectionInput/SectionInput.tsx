import React, { useState } from 'react'
import styles from './section-input.module.css'

const SectionInput = ({
    submitFn,
    setter
}: {
    submitFn: any,
    setter: any
}) => {

    const [value, setValue] = useState("")
    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={e => submitFn(e)}>
                <input type="url"
                    className={styles.input}
                    placeholder="Shorten link here..."
                    onChange={e => setter(e.target.value)}
                />
                <input type="submit" value="Shorten it!" className={styles.submitButton} />
            </form>
        </div>
    )
}

export default SectionInput