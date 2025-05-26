import { t } from "i18next"

const LOCATION_PLACEHOLDER_FIELDS: Record<string, string> = {
  address: `${t("locations.form.fields.address")}`,
  number: `${t("locations.form.fields.number")}`,
  complement: `${t("locations.form.fields.complement")}`,
  neighborhood: `${t("locations.form.fields.neighborhood")}`,
  reference: `${t("locations.form.fields.reference")}`,
} as const

export default LOCATION_PLACEHOLDER_FIELDS
