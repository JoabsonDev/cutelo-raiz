import { t } from "i18next"

type MenuPathFn = (companySlug: string, homePath?: string) => string

export const MENU_PATHS: Record<string, MenuPathFn> = {
  home: (companySlug, homePath) => homePath || `/${companySlug}`,
  orders: (companySlug) => `/${companySlug}/orders`,
  favorites: (companySlug) => `/${companySlug}/favorites`,
  cart: (companySlug) => `/${companySlug}/cart`,
}

export const MENU_ITEMS: MenuOptions[] = [
  {
    id: "home",
    icon: "house",
    label: t("menu.home"),
    path: "",
  },
  {
    id: "orders",
    icon: "receipt",
    label: t("menu.orders"),
    path: "",
  },
  {
    id: "favorites",
    icon: "heart",
    label: t("menu.favorites"),
    path: "",
  },
]

export const BOTTOM_NAVIGATION_ITEMS: MenuOptions[] = [
  ...MENU_ITEMS,
  {
    id: "cart",
    icon: "cart-shopping",
    label: t("menu.cart"),
    path: "",
  },
]
