import products from "@helpers/parse-products";
import NoData from "@molecules/NoData";
import FeaturedProductsCarousel from "@organisms/FeaturedProductsCarousel";
import ProductList from "@organisms/ProductList";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import * as S from "./styles";

const { getAll, getByCategory } = products();

export default function Home() {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<AppResponse>(["home"]);

  useEffect(() => {
    if (!category && data) {
      setProducts(getAll(data.content));
    } else if (category && data) {
      setProducts(getByCategory(data.content, category));
    }
  }, [category, data?.content]);

  const hasHighlight = products.some((product) => product.highlight === "Sim");

  return (
    <S.HomeContainer className="container">
      {hasHighlight && (
        <>
          <S.SectionTitle>Destaques</S.SectionTitle>
          <FeaturedProductsCarousel
            products={products.filter((product) => product.highlight === "Sim")}
          />
        </>
      )}
      {!data || products.length === 0 ? (
        <NoData>Não há produtos nessa categoria</NoData>
      ) : (
        <>
          <S.SectionTitle>Lista de produtos</S.SectionTitle>
          <ProductList products={products} />
        </>
      )}
    </S.HomeContainer>
  );
}
