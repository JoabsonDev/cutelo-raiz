import storage from "@helpers/storage"

import STORAGE_KEYS from "./storage-keys"

const DEFAULT_OPTIONS_HOMEPAGE_USE_QUERY = {
  enabled: false,
  initialData: () => {
    const storedData = storage.session.getItem(STORAGE_KEYS.HOMEPAGE)
    return storedData ? JSON.parse(storedData) : null
  },
} as const

export default DEFAULT_OPTIONS_HOMEPAGE_USE_QUERY
