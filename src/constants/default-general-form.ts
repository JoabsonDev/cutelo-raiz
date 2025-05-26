import { GeneralFormSchema } from "@schemas/general-form"

const DEFAULT_GENERAL_FORM: Record<keyof GeneralFormSchema, string> = {
  corporateName: "",
  fantasyName: "",
  cnpj: "",
  phone: "",
  slug: "",
} as const

export default DEFAULT_GENERAL_FORM
