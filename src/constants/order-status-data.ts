import { t } from "i18next"

import { OrderStatus } from "../types/order"
import theme from "./theme"

type IconLabelColor = {
  label: string
  icon: string
  color: string
}

const ORDER_STATUS_DATA: Record<OrderStatus, IconLabelColor> = {
  Created: {
    label: `${t("orders.status.created")}`,
    icon: "clipboard-list",
    color: theme.COLORS.GRAY[400],
  },
  Processing: {
    label: `${t("orders.status.processing")}`,
    icon: "spinner",
    color: theme.COLORS.ORANGE[500],
  },
  PaymentReceived: {
    label: `${t("orders.status.paymentReceived")}`,
    icon: "check-circle",
    color: theme.COLORS.GREEN[500],
  },
  PaymentFailed: {
    label: `${t("orders.status.paymentFailed")}`,
    icon: "times-circle",
    color: theme.COLORS.RED[500],
  },
  Canceled: {
    label: `${t("orders.status.canceled")}`,
    icon: "ban",
    color: theme.COLORS.RED[700],
  },
  InProduction: {
    label: `${t("orders.status.inProduction")}`,
    icon: "industry",
    color: theme.COLORS.ORANGE[600],
  },
  InTransit: {
    label: `${t("orders.status.inTransit")}`,
    icon: "truck",
    color: theme.COLORS.BLUE?.[500],
  },
  Delivered: {
    label: `${t("orders.status.delivered")}`,
    icon: "box-open",
    color: theme.COLORS.GREEN[600],
  },
  Returned: {
    label: `${t("orders.status.returned")}`,
    icon: "undo-alt",
    color: theme.COLORS.ORANGE[400],
  },
  Refunded: {
    label: `${t("orders.status.refunded")}`,
    icon: "money-bill-wave",
    color: theme.COLORS.GREEN[700],
  },
  OnHold: {
    label: `${t("orders.status.onHold")}`,
    icon: "pause-circle",
    color: theme.COLORS.GRAY[600],
  },
  Finished: {
    label: `${t("orders.status.finished")}`,
    icon: "flag-checkered",
    color: theme.COLORS.NEUTRAL[800],
  },
} as const

export default ORDER_STATUS_DATA
