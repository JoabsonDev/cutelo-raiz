import { create } from "zustand";

export type SearchStore = {
  /**
   * Texto atual da busca.
   */
  query: string;
  /**
   * Atualiza o texto da busca.
   * @param query - O novo texto da busca.
   */
  setQuery: (query: string) => void;
  /**
   * Texto da busca com atraso (debounced).
   */
  debouncedQuery: string;
};

const useSearchStore = create<SearchStore>((set) => ({
  query: "",
  debouncedQuery: "",
  setQuery: (query) => {
    set(() => ({ query }));
    clearTimeout((set as any).timeout);
    (set as any).timeout = setTimeout(() => {
      set(() => ({ debouncedQuery: query }));
    }, 300);
  },
}));

export default useSearchStore;
