import React, { useState } from 'react'
import styles from './todo-input.module.css';

const TodoInput = ({
    todoSubmit
}: {
    todoSubmit: any
}) => {
    const [title, setTitle] = useState('')
    const submit = (e: any) => {
        e.preventDefault()
        const date = new Date()
        todoSubmit(title, date.toDateString())
        setTitle('')
    }

    return (
        <form
            className={styles.container}
            onSubmit={submit}
        >
            <input type="text" className={styles.inputField} value={title} onChange={e => setTitle(e.target.value)} />
            <input type="submit" value="Add Task" className={styles.inputButton} />
        </form >
    )
}

export default TodoInput