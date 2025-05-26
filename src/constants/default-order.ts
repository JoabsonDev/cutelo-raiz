import { Order } from "../types/order"

const DEFAULT_ORDER: Order = {
  note: "",
  paymentMethod: "CreditCard",
  deliveryMode: "InStore",
  amountChange: 0,
  orderItems: [],
}

export default DEFAULT_ORDER
