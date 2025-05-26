import { create } from "zustand"

export type AlertStore = {
  alerts: Alert[]
  addAlert: (message: string, type: "success" | "error") => void
  removeAlert: (id: number) => void
}

/**
 * Tipo de dado para o alerta.
 *
 * @typedef {Object} Alert
 * @property {number} id - Identificador único do alerta.
 * @property {string} message - Mensagem do alerta.
 * @property {string} type - Tipo de alerta: "success" ou "error".
 */

/**
 * Estado global para alertas.
 *
 * @typedef {Object} AlertStore
 * @property {Alert[]} alerts - Lista de alertas armazenados no estado.
 * @property {function(string, "success" | "error"): void} addAlert - Função para adicionar um alerta.
 * @property {function(number): void} removeAlert - Função para remover um alerta por ID.
 */

/**
 * Hook para acessar e manipular o estado dos alertas.
 *
 * @returns {AlertStore} O estado e as funções para adicionar e remover alertas.
 */
const useAlertStore = create<AlertStore>((set) => {
  /**
   * Adiciona um alerta ao estado.
   *
   * @param {string} message - Mensagem do alerta.
   * @param {"success" | "error"} type - Tipo do alerta.
   */
  const addAlert = (message: string, type: "success" | "error") => {
    const id = Date.now()
    set((state) => ({
      alerts: [...state.alerts, { id, message, type }],
    }))

    // Auto-dismiss alert after 5 seconds
    setTimeout(() => {
      set((state) => ({
        alerts: state.alerts.filter((alert) => alert.id !== id),
      }))
    }, 5000)
  }

  return {
    alerts: [],
    addAlert,
    /**
     * Remove um alerta por ID.
     *
     * @param {number} id - ID do alerta a ser removido.
     */
    removeAlert: (id) =>
      set((state) => ({
        alerts: state.alerts.filter((alert) => alert.id !== id),
      })),
  }
})

export default useAlertStore
