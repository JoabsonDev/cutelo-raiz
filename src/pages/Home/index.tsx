import Header from "@organisms/Header";
import axios from "axios";
import { useQuery } from "react-query";
import * as S from "./styles";

export default function Home() {
  // const navigate = useNavigate();
  // const location = useLocation();

  const { data, isLoading, isFetching, error } = useQuery<any | null>(
    ["home"],
    async () => {
      const { data } = await axios.get<any>(
        "https://script.google.com/macros/s/AKfycbwpEAdgcPgHpoG8Bnu7bODpZIXFPHmSPnfZaxKdPGY9bTcpb3PYDgneaDOzoEYOwm-8/exec"
      );
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  console.log(data);

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
    <>
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
    </>
  );
}
