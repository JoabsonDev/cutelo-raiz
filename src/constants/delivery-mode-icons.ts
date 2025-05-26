import DeliveryMode from "@constants/delivery-mode"

const DELIVERY_MODE_ICONS: Record<keyof typeof DeliveryMode, any> = {
  Delivery: {
    name: "motorcycle",
    type: "solid",
  },
  TakeAway: {
    name: "car-side",
    type: "solid",
  },
  InStore: {
    name: "utensils",
    type: "solid",
  },
} as const

export default DELIVERY_MODE_ICONS
