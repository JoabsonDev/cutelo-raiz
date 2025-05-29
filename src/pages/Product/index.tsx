import { useParams } from "react-router-dom";
import * as S from "./styles";

export default function Product() {
  const { id } = useParams();

  return (
    <S.ProductContainer className="container">Product {id}</S.ProductContainer>
  );
}
