import { create } from "zustand"

const INITIAL_CONFIG = {
  open: false,
  title: "Deseja mesmo continuar com essa ação?",
  message: "A ação não poderá ser desfeita.",
  callback: () => {},
}

type PromptConfigStore = {
  open: boolean
  title?: string
  message?: string
  callback?: () => void
}

export type PromptStore = {
  config: PromptConfigStore
  setConfig: (config: PromptConfigStore) => void
}

/**
 * Store para gerenciar a configuração do prompt utilizando Zustand.
 *
 * @returns {PromptStore} O estado do prompt e a função para configurar.
 */
const usePromptStore = create<PromptStore>((set) => {
  return {
    config: {
      open: false,
    },
    /**
     * Atualiza a configuração do prompt.
     *
     * @param {PromptConfigStore} config - A nova configuração do prompt.
     */
    setConfig: (config) => {
      set({ config: { ...INITIAL_CONFIG, ...config } })
    },
  }
})

export default usePromptStore
