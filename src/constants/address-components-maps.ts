const ADDRESS_COMPONENTS_MAPS: Record<string, string> = {
  route: "address",
  street_number: "number",
  administrative_area_level_2: "city",
  administrative_area_level_1: "state",
} as const

export default ADDRESS_COMPONENTS_MAPS
