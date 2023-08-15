import { browser } from "$app/environment"

const fromLocalStorage = (storageKey, fallbackValue) => {
    if (browser) {
        const storedValue = window.localStorage.getItem(storageKey)

        if (storedValue !== 'undefined' && storedValue !== null) {
            return (typeof fallbackValue === 'object')
                ? JSON.parse(storedValue)
                : storedValue
        }
    }

    return fallbackValue
}

const toLocalStorage = (store, storageKey) => {
    if (browser) {
        store.subscribe(value => {
            let storageValue = (typeof value === 'object')
                ? JSON.stringify(value)
                : value

            window.localStorage.setItem(storageKey, storageValue)
        })
    }
}

export { fromLocalStorage, toLocalStorage }