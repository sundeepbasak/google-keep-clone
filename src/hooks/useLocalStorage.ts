import { useState } from "react"

export type UseLocalStorageReturnType<TData> = [TData, (data: TData) => void]

export default function useLocalStorage<TData>(keyName: string, initialValue: TData): UseLocalStorageReturnType<TData> {
    const [storedValue, setStoredValue] = useState<TData>(() => {
        try {
            const item = localStorage.getItem(keyName);
            if (item) {
                return JSON.parse(item);
            } else {
                localStorage.setItem(keyName, JSON.stringify(initialValue))
                return initialValue;
            }
        } catch (error) {
            return initialValue
        }
    })

    const setValue = (newValue: TData) => {
        localStorage.setItem(keyName, JSON.stringify(newValue));
        setStoredValue(newValue);
    }

    return [storedValue, setValue]
}