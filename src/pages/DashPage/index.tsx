import Footer from "@organisms/Footer";
import Header from "@organisms/Header";
import axios from "axios";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import * as S from "./styles";

export default function Home() {
  const { isLoading, isFetching } = useQuery<AppResponse | null>(
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

  if (isLoading || isFetching)
    return (
      <S.DashPageContainer>
        <div>shimmer aqui</div>
      </S.DashPageContainer>
    );

  return (
    <S.DashPageGrid>
      <Header />

      <S.DashPageContainer>
        <Outlet />
      </S.DashPageContainer>
      <Footer />
    </S.DashPageGrid>
  );
}
