import { fiveMinutesSession } from "../App"

export const handleGetLocalData = (localKey = '@data') => {
    const data = JSON.parse(localStorage.getItem(localKey) || '[]')
    if (data.length > fiveMinutesSession) return []
    return data
}

export const handleSetLocalData = (data = [], localKey = '@data') => {
    localStorage.setItem(localKey, JSON.stringify(data))
}