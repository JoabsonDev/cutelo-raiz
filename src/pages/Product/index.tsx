import products from "@helpers/parse-products";
import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import * as S from "./styles";

const { getAll } = products();

export default function Product() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<AppResponse>(["home"]);

  const products = getAll(data?.content!);
  const product = products.find((product) => product.id === +id!);

  const [activeImage, setActiveImage] = useState(product?.image1 || "");

  return (
    <S.ProductContainer className="container">
      <S.ProductGalery>
        {!!product?.image1 && (
          <S.ProductDetailButtonTrigger>
            <img
              src={product?.image1}
              alt={`Imagem do produto ${product?.name}`}
            />
          </S.ProductDetailButtonTrigger>
        )}
        {!!product?.image2 && (
          <S.ProductDetailButtonTrigger>
            <img
              src={product?.image2}
              alt={`Imagem do produto ${product?.name}`}
            />
          </S.ProductDetailButtonTrigger>
        )}
        {!!product?.image3 && (
          <S.ProductDetailButtonTrigger>
            <img
              src={product?.image3}
              alt={`Imagem do produto ${product?.name}`}
            />
          </S.ProductDetailButtonTrigger>
        )}
        {!!product?.image4 && (
          <S.ProductDetailButtonTrigger>
            <img
              src={product?.image4}
              alt={`Imagem do produto ${product?.name}`}
            />
          </S.ProductDetailButtonTrigger>
        )}

        <S.ReactImageMagnifyWrapper>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: `Imagem do produto ${product?.name}`,
                isFluidWidth: true,
                src: activeImage,
              },
              largeImage: {
                src: activeImage,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </S.ReactImageMagnifyWrapper>
      </S.ProductGalery>
    </S.ProductContainer>
  );
}
