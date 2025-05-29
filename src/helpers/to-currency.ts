// TODO: criar forma de internacionalizar
/**
 * Converte um valor numérico para formato de moeda no padrão brasileiro (BRL).
 *
 * @param {number} value - O valor numérico a ser convertido.
 * @returns {string} - O valor formatado como uma string no formato de moeda.
 */
function toCurrency(value: number): string {
  if (value === null || value === undefined) return ""

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

export default toCurrency
