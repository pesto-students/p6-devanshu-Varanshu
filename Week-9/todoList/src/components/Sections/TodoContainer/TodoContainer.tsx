import React, { useState } from 'react'
import TodoInput from '../TodoInput/TodoInput'
import TodoItem from '../TodoItem/TodoItem'
import styles from './todo-container.module.css'
import { LocalStorage, LocalStorageKeys } from '../../../utils/LocalStorage';

interface todoListItem {
    id: number,
    title: string,
    date: string,
    open: boolean
}

const getInitialData = () => {
    const data = LocalStorage.get(LocalStorageKeys.LIST)
    if (data) {
        return JSON.parse(data)
    } else {
        return []
    }
}

const TodoContainer = () => {

    const [todoList, setTodoList] = useState<todoListItem[]>(getInitialData())

    const todoSubmit = (title: string, date: string) => {
        const arr = [
            ...todoList,
            {
                id: todoList.length,
                title: title,
                date: date,
                open: false
            }
        ]
        setTodoList(arr)
        LocalStorage.set(LocalStorageKeys.LIST, JSON.stringify(arr))
    }

    const todoListDone = (id: number, state: boolean) => {
        const sortedArray = todoList.map((item, index) => {
            if (item.id === id) {
                return {
                    id: id,
                    title: item.title,
                    date: item.date,
                    open: state
                }
            } else return item
        })
        setTodoList(sortedArray)
        LocalStorage.set(LocalStorageKeys.LIST, JSON.stringify(sortedArray))
    }

    const deleteTask = (id: number) => {
        const filteredArray = todoList.filter((item) => item.id !== id)
        setTodoList(filteredArray)
        LocalStorage.set(LocalStorageKeys.LIST, JSON.stringify(filteredArray))
    }

    return (
        <div className={styles.container}>
            <TodoInput todoSubmit={todoSubmit} />
            <div className={styles.listContainer}>
                {
                    todoList.map((item, index) => (
                        <TodoItem key={index} item={item} todoListDone={todoListDone} deleteTask={deleteTask} />
                    ))
                }
            </div>
        </div>
    )
}

export default TodoContainer