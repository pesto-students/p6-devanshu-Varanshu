import { LocalStorageKeys } from "./keys";

function set(key: string, value: string) {
    const isBrowser = typeof window !== 'undefined'
    if (isBrowser) {
        window.localStorage.setItem(key, value)
    }
}

function remove(key: string) {
    const isBrowser = typeof window !== 'undefined'
    if (isBrowser) {
        window.localStorage.removeItem(key)
    }
}

function get(key: string) {
    const isBrowser = typeof window !== 'undefined'
    if (!isBrowser) {
        return null
    }

    try {
        const item = window.localStorage.getItem(key)
        return item
    } catch (error) {
        return null
    }
}

export const LocalStorage = {
    get,
    set,
    remove
}