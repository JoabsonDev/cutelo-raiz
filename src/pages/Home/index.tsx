import Footer from "@organisms/Footer";
import Header from "@organisms/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as S from "./styles";

function getAllProducts(data: Record<string, Product[]>): Product[] {
  return Object.values(data).reduce((acc, produtos) => {
    return acc.concat(produtos);
  }, [] as Product[]);
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

  const { data, isLoading, isFetching, error } = useQuery<Record<
    string,
    Product[]
  > | null>(
    ["home"],
    async () => {
      const { data } = await axios.get<Record<string, Product[]>>(
        "https://script.google.com/macros/s/AKfycbzpV6Hjrmz2oio5LQOwaQTLNNxCYwhZgfHVlfNa3QmrTeHqkwmpSRKr3A1yMI-P3_Q/exec"
      );
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (!category && data) {
      setProducts(getAllProducts(data));
    } else if (category && data) {
      setProducts(getProductsByCategory(data, category));
    }

    console.log(products);
  }, [category, data]);

  if (isLoading || isFetching)
    return (
      <S.HomeContainer>
        <div>shimmer aqui</div>
      </S.HomeContainer>
    );

  // if (!data || error || data.categories.length === 0)
  //   return (
  //     <S.HomeContainer>
  //       <NoData>bla bla bla</NoData>
  //     </S.HomeContainer>
  //   );

  // const hasRecommended =
  //   extractProducts(data.categories).filter(
  //     ({ isRecommended }) => isRecommended
  //   ).length > 0;

  return (
    <S.HomeGrid>
      <Header />

      <S.HomeContainer>
        {/* {hasRecommended && (
        <>
          <Title>{t("home.highlights.title")}</Title>
          <HomeSlider className="home-slider" />
        </>
      )} */}

        <S.SectionDescription>descrição</S.SectionDescription>

        {/* <CategoriesMenu
        categories={data.categories}
        className="categories-menu"
      />

      <ProductList /> */}
      </S.HomeContainer>
      <Footer />
    </S.HomeGrid>
  );
}
