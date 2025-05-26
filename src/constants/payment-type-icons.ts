import PaymentType from "@constants/payment-type"

const PAYMENT_TYPE_ICONS: Record<keyof typeof PaymentType, any> = {
  CreditCard: {
    name: "credit-card",
    type: "solid",
  },
  DebitCard: {
    name: "credit-card",
    type: "regular",
  },
  Money: {
    name: "money-bill",
    type: "solid",
  },
  Pix: {
    name: "pix",
    type: "brands",
  },
} as const

export default PAYMENT_TYPE_ICONS
