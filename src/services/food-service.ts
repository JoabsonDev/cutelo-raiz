import axios from "axios"

import { Homepage } from "../types/homepage"
import { OrderRequest, OrderResponse } from "../types/order"

// Configuração da instância Axios
const api = axios.create({
  baseURL: import.meta.env.APP_API_URL,
})

/**
 * Trata erros retornados pela API, lançando mensagens apropriadas.
 *
 * @param {unknown} error - Erro capturado, potencialmente retornado pelo Axios.
 * @throws {Error} Erro com mensagem detalhada, se disponível.
 */
function handleApiError(error: unknown): never {
  if (axios.isAxiosError(error) && error.response?.data) {
    const responseData: ResponseApi<any> = error.response.data
    throw new Error(
      responseData.failureReason || "Erro desconhecido na comunicação com a API"
    )
  }
  throw new Error("Erro inesperado na comunicação com a API")
}

/**
 * Busca os dados de uma homepage pelo slug.
 *
 * @param {string} slug - Identificador único da homepage.
 * @returns {Promise<Homepage | null>} Dados da homepage, ou null se não encontrado.
 * @throws {Error} Se ocorrer um erro na requisição ou se o slug for inválido.
 */
export async function getHome(
  slug: string,
  customer: string = ""
): Promise<Homepage | null> {
  if (!slug) throw new Error("Slug é obrigatório")

  try {
    const { data } = await api.get<ResponseApi<Homepage>>(
      `/homepage?slug=${slug}&customer=${customer}`
    )
    return data.payload
  } catch (error) {
    handleApiError(error)
  }
}

/**
 * Busca os dados de um produto pelo ID.
 *
 * @param {string} id - Identificador único do produto.
 * @returns {Promise<Product | null>} Dados do produto, ou null se não encontrado.
 * @throws {Error} Se ocorrer um erro na requisição ou se o ID for inválido.
 */
export async function getProduct(id: string): Promise<Product | null> {
  if (!id) throw new Error("ID do produto é obrigatório")

  try {
    const { data } = await api.get<ResponseApi<Product>>(`/products/${id}`)
    return data.payload
  } catch (error) {
    handleApiError(error)
  }
}

/**
 * Calcula o preço de entrega com base na localização.
 *
 * @param {string} companyId - ID da empresa que fará a entrega.
 * @param {string} latitude - Latitude do destino.
 * @param {string} longitude - Longitude do destino.
 * @returns {Promise<number | null>} Preço da entrega, ou null se não calculado.
 * @throws {Error} Se ocorrer um erro na requisição ou se os parâmetros forem inválidos.
 */
export async function getDeliveryPrice(
  companyId: string,
  latitude: string,
  longitude: string
): Promise<number | null> {
  if (!companyId || !latitude || !longitude) {
    throw new Error(
      "CompanyId, latitude e longitude são obrigatórios para calcular o preço de entrega"
    )
  }

  try {
    const { data } = await api.get<ResponseApi<number>>(
      `/geolocalization/calculate-price-delivery?CompanyId=${companyId}&Latitude=${latitude}&Longitude=${longitude}`
    )
    return data.payload
  } catch (error) {
    handleApiError(error)
  }
}

/**
 * Cria um pedido com os dados fornecidos.
 *
 * @param {Order} order - Dados do pedido a ser criado.
 * @returns {Promise<string>} Retorna o `orderId` do pedido criado, ou `null` se falhar.
 * @throws {Error} Se ocorrer um erro na requisição ou se os dados forem inválidos.
 */
export async function createOrder(order: OrderRequest): Promise<string | null> {
  if (!order) throw new Error("Os dados do pedido são obrigatórios")

  try {
    const { data } = await api.post<ResponseApi<string | null>>("/order", order)
    return data.payload
  } catch (error) {
    handleApiError(error)
  }
}

export async function getOrders(
  phoneNumber: string,
  companyId: string
): Promise<OrderResponse[]> {
  if (!phoneNumber && !companyId)
    throw new Error("Os dados do pedido são obrigatórios")

  try {
    const { data } = await api.get<ResponseApi<OrderResponse[]>>(
      `/order/customer?Phone=${phoneNumber}&CompanyId=${companyId}`
    )
    return data.payload || []
  } catch (error) {
    handleApiError(error)
  }
}

export async function getOrder(orderId: string): Promise<OrderResponse | null> {
  if (!orderId) throw new Error("O id do pedido é obrigatório")

  try {
    const { data } = await api.get<ResponseApi<OrderResponse>>(
      `/order/${orderId}`
    )
    return data.payload
  } catch (error) {
    handleApiError(error)
  }
}

/**
 * Inscreve um cliente para notificações push enviando os dados da inscrição para o backend.
 *
 * @param {string} customer - O número de telefone do cliente.
 * @param {PushSubscription} pushSubscription - A inscrição do push gerada pelo navegador.
 * @returns {Promise<string>} Uma mensagem de confirmação da inscrição.
 * @throws {Error} Lança um erro se `customer` ou `pushSubscription` não forem fornecidos.
 */
export async function subscribeToPushNotifications(
  customer: string,
  pushSubscription: PushSubscription
): Promise<string> {
  if (!customer && !pushSubscription)
    throw new Error("Customer e a inscrição do push são obrigatórios")

  try {
    const { data } = await api.post<ResponseApi<string>>("/push", {
      ...pushSubscription.toJSON(),
      keys: {
        ...pushSubscription.toJSON().keys,
        customer,
      },
    })

    return data.payload || "Inscrição realizada com sucesso"
  } catch (error) {
    handleApiError(error)
  }
}
