import storage from "@helpers/storage"

import { OrderResponse } from "../types/order"
import STORAGE_KEYS from "./storage-keys"

const DEFAULT_OPTIONS_STORE_USE_QUERY = {
  refetchOnWindowFocus: false,
  enabled: !storage.session.getItem(STORAGE_KEYS.ORDERS),
  initialData: () => {
    const storedData = storage.session.getItem(STORAGE_KEYS.ORDERS)
    return storedData ? JSON.parse(storedData) : null
  },
  onSuccess: (data: OrderResponse[]) => {
    if (data) storage.session.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(data))
  },
} as const

export default DEFAULT_OPTIONS_STORE_USE_QUERY
