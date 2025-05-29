import { create } from "zustand";

import STORAGE_KEYS from "@constants/storage-keys";
import useAlertStore from "@store/alert";
import usePromptStore from "@store/prompt";

export type CartStore = {
  cart: OrderItem[];
  updateCart: (orderItem: OrderItem) => void;
  clearCart: () => void;
};

/**
 * Tipo de item no carrinho de compras.
 *
 * @typedef {Object} OrderItem
 * @property {string} productId - Identificador do produto.
 * @property {number} quantity - Quantidade do produto no carrinho.
 * @property {string} [note] - Notas adicionais sobre o produto no carrinho.
 */

/**
 * Estado global para o carrinho de compras.
 *
 * @typedef {Object} CartStore
 * @property {OrderItem[]} cart - Lista de itens no carrinho de compras.
 * @property {function(OrderItem): void} updateCart - Função para adicionar ou atualizar um item no carrinho.
 * @property {function(): void} clearCart - Função para limpar o carrinho de compras.
 */

/**
 * Função para carregar o carrinho armazenado no localStorage.
 *
 * @returns {OrderItem[]} O carrinho de compras armazenado.
 */
const loadCart = (): OrderItem[] => {
  const storedCart = localStorage.getItem(STORAGE_KEYS.CART);
  return storedCart ? JSON.parse(storedCart) : [];
};

/**
 * Função para salvar o carrinho no localStorage.
 *
 * @param {OrderItem[]} cart - O carrinho de compras a ser salvo.
 */
const saveCart = (cart: OrderItem[]) => {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
};

/**
 * Hook para acessar e manipular o estado do carrinho de compras.
 *
 * @returns {CartStore} O estado e as funções para manipular o carrinho.
 */
const useCartStore = create<CartStore>((set) => {
  const setConfig = usePromptStore.getState().setConfig;
  const addAlert = useAlertStore.getState().addAlert;

  return {
    cart: loadCart(),
    /**
     * Atualiza o carrinho de compras com um item novo ou alterado.
     *
     * @param {OrderItem} orderItem - O item do pedido a ser adicionado ou atualizado.
     */
    updateCart: ({ productId, quantity = 1 }: OrderItem) =>
      set((state) => {
        const existingItem = state.cart.find(
          (item) => item.productId === productId
        );

        if (String(quantity) === "0") {
          setConfig({
            open: true,
            title: "Atenção",
            message: "Tem certeza que deseja remover este item do carrinho?",
            callback: () => {
              const updatedCart = state.cart.filter(
                (item) => item.productId !== productId
              );
              addAlert("Produto removido do carrinho!", "success");
              saveCart(updatedCart);
              set({ cart: updatedCart });
            },
          });
          return state;
        }

        const updatedCart = existingItem
          ? state.cart.map((item) =>
              item.productId === productId ? { ...item, quantity } : item
            )
          : [...state.cart, { productId, quantity }];

        // Exibir mensagem apenas se o item não existia anteriormente
        if (!existingItem) {
          addAlert("Produto adicionado ao carrinho!", "success");
        }

        saveCart(updatedCart);
        return { cart: updatedCart };
      }),
    /**
     * Limpa todos os itens do carrinho de compras.
     */
    clearCart: () => {
      saveCart([]);
      set({ cart: [] });
    },
  };
});

export default useCartStore;
