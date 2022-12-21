import React from 'react'
import styles from './todo-item.module.css'
const TodoItem = ({
    item,
    todoListDone,
    deleteTask
}: {
    item: {
        id: number,
        title: string,
        date: string,
        open: boolean
    },
    todoListDone: any,
    deleteTask: any
}) => {
    const {
        id,
        title,
        date,
        open
    } = item

    return (
        <div className={styles.listItem}>
            <input
                type="checkbox" name=""
                className={styles.listCheckbox}
                defaultChecked={open}
                id={`list-item-${id}`}
                onChange={e => {
                    todoListDone(id, !open)
                }}
            />
            <label htmlFor={`list-item-${id}`} className={styles.itemContent}>
                <div>
                    {title}
                </div>
            </label>
            <div className={styles.delete} onClick={e => deleteTask(id)}>Delete</div>
        </div>
    )
}

export default TodoItem