import Button from "@atoms/Button";
import products from "@helpers/parse-products";
import toCurrency from "@helpers/to-currency";
import { SwiperWrapper } from "@organisms/FeaturedProductsCarousel/styles";
import useCartStore from "@store/cart";
import { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useQueryClient } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import * as S from "./styles";

const { getAll } = products();

export default function Product() {
  const { id } = useParams();
  const { cart, updateCart } = useCartStore();
  const location = useLocation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<AppResponse>(["home"]);

  const products = getAll(data?.content!);
  const product = products.find((product) => product.id === +id!);

  const [activeImage, setActiveImage] = useState(product?.image1 || "");

  useEffect(() => {
    setActiveImage(product?.image1 || "");
  }, [location.pathname]);

  return (
    <S.ProductContainer className="container">
      <S.ProductGalery>
        {!!product?.image1 && (
          <S.ProductDetailButtonTrigger
            className={activeImage === product?.image1 ? "active" : ""}
            onMouseEnter={() => setActiveImage(product?.image1 || "")}
          >
            <img
              src={product?.image1}
              alt={`Imagem do produto ${product?.name}`}
            />
          </S.ProductDetailButtonTrigger>
        )}
        {!!product?.image2 && (
          <S.ProductDetailButtonTrigger
            className={activeImage === product?.image2 ? "active" : ""}
            onMouseEnter={() => setActiveImage(product?.image2 || "")}
          >
            <img
              src={product?.image2}
              alt={`Imagem do produto ${product?.name}`}
            />
          </S.ProductDetailButtonTrigger>
        )}
        {!!product?.image3 && (
          <S.ProductDetailButtonTrigger
            className={activeImage === product?.image3 ? "active" : ""}
            onMouseEnter={() => setActiveImage(product?.image3 || "")}
          >
            <img
              src={product?.image3}
              alt={`Imagem do produto ${product?.name}`}
            />
          </S.ProductDetailButtonTrigger>
        )}
        {!!product?.image4 && (
          <S.ProductDetailButtonTrigger
            className={activeImage === product?.image4 ? "active" : ""}
            onMouseEnter={() => setActiveImage(product?.image4 || "")}
          >
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

      <S.ProductDetailMobileCarousel>
        <SwiperWrapper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          centeredSlides={true}
        >
          {!!product?.image1 && (
            <SwiperSlide>
              <img
                src={product?.image1}
                alt={`Imagem do produto ${product?.name}`}
              />
            </SwiperSlide>
          )}
          {!!product?.image2 && (
            <SwiperSlide>
              <img
                src={product?.image2}
                alt={`Imagem do produto ${product?.name}`}
              />
            </SwiperSlide>
          )}
          {!!product?.image3 && (
            <SwiperSlide>
              <img
                src={product?.image3}
                alt={`Imagem do produto ${product?.name}`}
              />
            </SwiperSlide>
          )}
          {!!product?.image4 && (
            <SwiperSlide>
              <img
                src={product?.image4}
                alt={`Imagem do produto ${product?.name}`}
              />
            </SwiperSlide>
          )}
        </SwiperWrapper>
      </S.ProductDetailMobileCarousel>

      <S.ProductDetail>
        <S.ProductDetailTitle>{product?.name}</S.ProductDetailTitle>
        <S.ProductDetailDescription>
          {product?.description}
        </S.ProductDetailDescription>

        <S.ProductDetailPriceContainer>
          {!!product?.promoPrice && (
            <S.ProductDetailPromotionalPrice>
              {toCurrency(product?.price)}
            </S.ProductDetailPromotionalPrice>
          )}
          <S.ProductDetailPrice
            className={!!product?.promoPrice ? "has-promo" : ""}
          >
            {product?.promoPrice!
              ? toCurrency(product?.promoPrice)
              : toCurrency(product?.price!)}
          </S.ProductDetailPrice>
        </S.ProductDetailPriceContainer>

        <Button
          variation="primary"
          onClick={() =>
            cart.some((item) => item.productId === product?.id)
              ? updateCart({ productId: product?.id!, quantity: 0 })
              : updateCart({ productId: product?.id!, quantity: 1 })
          }
        >
          {cart.some((item) => item.productId === product?.id)
            ? "Remover do carrinho"
            : "Adicionar ao carrinho"}
        </Button>
      </S.ProductDetail>
    </S.ProductContainer>
  );
}
