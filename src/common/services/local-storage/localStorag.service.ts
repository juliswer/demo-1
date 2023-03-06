import { type ILocalStorageService } from '@common/services/local-storage/localStorageInterface.service'

export class LocalStorageService implements ILocalStorageService {
  getItem<T>(key: string) {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : null
    } catch (error) {
      return null
    }
  }

  setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  removeItem(key: string) {
    localStorage.removeItem(key)
  }
}
export const localStorageService = new LocalStorageService()
