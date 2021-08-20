const APP_KEY = 'WONGAMES'

export function getStorageItem(key: string) {
  if (typeof window !== 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: string[]) {}
