/**
 * Formata um número de telefone brasileiro no padrão (XX) 9 XXXX-XXXX.
 *
 * @param {string} phone - O número de telefone bruto (apenas dígitos ou com caracteres mistos).
 * @returns {string} O número formatado, ou o valor original se não tiver 11 dígitos.
 *
 * @example
 * formatPhone("51996801895");
 * // Retorna: "(51) 9 9680-1895"
 *
 * @example
 * formatPhone("(51)996801895");
 * // Retorna: "(51) 9 9680-1895"
 */
function formatPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.length !== 11) return phone;

  const ddd = digits.slice(0, 2);
  const first = digits.slice(2, 3);
  const second = digits.slice(3, 7);
  const third = digits.slice(7);

  return `(${ddd}) ${first} ${second}-${third}`;
}

export default formatPhone;
