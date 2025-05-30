import useSearchStore from "@store/search";

import products from "@helpers/parse-products";
import toCurrency from "@helpers/to-currency";
import type { ComponentProps } from "react";
import { useQueryClient } from "react-query";
import * as S from "./styles";

const { getAll } = products();

type SearchListProps = ComponentProps<typeof S.SearchListContainer>;
export default function SearchList({ ...rest }: SearchListProps) {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<AppResponse>(["home"]);
  const { query } = useSearchStore();

  const products = getAll(data?.content!).filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  if (!products.length) {
    return (
      <S.SearchListContainer {...rest}>
        <S.SearchEmptyData>
          Não há produtos para exibir com esse filtro!
        </S.SearchEmptyData>
      </S.SearchListContainer>
    );
  }

  return (
    <S.SearchListContainer {...rest}>
      <S.List className="search-results">
        {products.map((product) => (
          <S.SearchListItem key={product.id}>
            <S.SearchListProduct to={`/product/${product.id}`}>
              <img
                src={product.image1}
                alt={`Imagem do produto ${product.name}`}
              />

              <span>{product.name}</span>
              <span>
                {product.promoPrice
                  ? toCurrency(product.promoPrice)
                  : toCurrency(product.price)}
              </span>
            </S.SearchListProduct>
          </S.SearchListItem>
        ))}
      </S.List>
    </S.SearchListContainer>
  );
}
