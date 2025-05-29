import ProductItem from "@molecules/ProductItem";
import type { ComponentProps } from "react";
import * as S from "./styles";

type ProductListProps = ComponentProps<typeof S.List> & {
  products: Product[];
};
export default function ProductList({ products, ...rest }: ProductListProps) {
  return (
    <S.List {...rest}>
      {products.map((product) => (
        <S.ListItem key={product.id}>
          <ProductItem product={product} hasTips />
        </S.ListItem>
      ))}
    </S.List>
  );
}
