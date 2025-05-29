import NoData from "@molecules/NoData";
import FeaturedProductsCarousel from "@organisms/FeaturedProductsCarousel";
import Footer from "@organisms/Footer";
import Header from "@organisms/Header";
import ProductList from "@organisms/ProductList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as S from "./styles";

function getAllProducts(data: Record<string, Product[]>): Product[] {
  const products = Object.values(data).reduce((acc, produtos) => {
    return acc.concat(produtos);
  }, [] as Product[]);
  return products;
}

function getProductsByCategory(
  data: Record<string, Product[]>,
  category: string
): Product[] {
  const categoriaOriginal = Object.keys(data).find(
    (key) => key.toLowerCase() === category.toLowerCase()
  )!;

  return categoriaOriginal ? data[categoriaOriginal] : [];
}

export default function Home() {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);

  const { data, isLoading, isFetching, error } = useQuery<AppResponse | null>(
    ["home"],
    async () => {
      const { data } = await axios.get<AppResponse>(
        import.meta.env.VITE_API_URL
      );
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (!category && data) {
      setProducts(getAllProducts(data.content));
    } else if (category && data) {
      setProducts(getProductsByCategory(data.content, category));
    }
  }, [category, data?.content]);

  if (isLoading || isFetching)
    return (
      <S.HomeContainer>
        <div>shimmer aqui</div>
      </S.HomeContainer>
    );

  if (!data || error || products.length === 0)
    return (
      <S.HomeContainer>
        <NoData>Não há produtos nessa categoria</NoData>
      </S.HomeContainer>
    );

  const hasHighlight = products.some((product) => product.highlight === "Sim");

  return (
    <S.HomeGrid>
      <Header />

      <S.HomeContainer>
        <div className="container">
          {hasHighlight && (
            <>
              <S.SectionTitle>Destaques</S.SectionTitle>
              <FeaturedProductsCarousel
                products={products.filter(
                  (product) => product.highlight === "Sim"
                )}
              />
            </>
          )}
          {!data || error || products.length === 0 ? (
            <NoData>Não há produtos nessa categoria</NoData>
          ) : (
            <>
              <S.SectionTitle>Lista de produtos</S.SectionTitle>
              <ProductList products={products} />
            </>
          )}
        </div>
      </S.HomeContainer>
      <Footer />
    </S.HomeGrid>
  );
}
