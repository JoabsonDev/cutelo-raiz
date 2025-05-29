import Button from "@atoms/Button";
import CartInput from "@atoms/CartInput";
import products from "@helpers/parse-products";
import toCurrency from "@helpers/to-currency";
import CartItem from "@molecules/CartItem";
import useCartStore from "@store/cart";
import { useQueryClient } from "react-query";
import * as S from "./styles";

const { getAll } = products();

export default function Cart() {
  const { cart, updateCart } = useCartStore();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<AppResponse>(["home"]);

  const products = getAll(data?.content!).filter(({ id }) =>
    cart.some((item) => item.productId === id)
  );

  const getCartProduct = (productId: number) =>
    cart.find((item) => item.productId === productId);

  const getTotal = () => {
    return cart.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId);
      if (product) {
        return (
          total + (product.promoPrice || product.price) * Number(item.quantity)
        );
      }
      return total;
    }, 0);
  };

  return (
    <S.CartContainer className="container">
      {!!cart.length && (
        <S.CartList>
          {products.map((product) => (
            <S.CartItem key={product.id}>
              <CartItem product={product} />
              <CartInput
                value={getCartProduct(product.id)?.quantity}
                onChange={(quantity) => {
                  updateCart({
                    ...getCartProduct(product.id)!,
                    quantity,
                  });
                }}
              />
            </S.CartItem>
          ))}
        </S.CartList>
      )}
      <S.Resume>
        <h2>Resumo da compra</h2>

        <div>
          <span>Produto</span>
          <span>{toCurrency(getTotal())}</span>
        </div>
        <div>
          <span>Frete</span>
          <span>A combinar</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>{toCurrency(getTotal())}</strong>
        </div>
        <div>
          <Button variation="primary" fullWidth>
            Finalizar compra
          </Button>
        </div>
      </S.Resume>
    </S.CartContainer>
  );
}
