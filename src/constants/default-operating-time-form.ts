import { OperatingTimeFormSchema } from "@schemas/operating-time-form"

const DEFAULT_OPERATING_TIME_FORM: OperatingTimeFormSchema = {
  sunday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
} as const

export default DEFAULT_OPERATING_TIME_FORM
