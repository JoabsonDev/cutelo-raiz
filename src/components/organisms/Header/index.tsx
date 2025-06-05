import { useEffect, type ComponentProps } from "react";
import * as S from "./styles";

import logo from "@assets/logo.png";
import CartIcon from "@atoms/CartIcon";
import FontAwesome from "@atoms/FontAwesome";
import Search from "@atoms/Search";
import useCartStore from "@store/cart";
import useSearchStore from "@store/search";
import { useQueryClient } from "react-query";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";

type HeaderProps = ComponentProps<typeof S.Header>;

export default function Header({ ...rest }: HeaderProps) {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { cart } = useCartStore();
  const navigate = useNavigate();
  const { query, setQuery } = useSearchStore();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<AppResponse>(["home"]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const searchArea = document.querySelector(".search-area");
      const resultsArea = document.querySelector(".search-results");

      if (
        (searchArea && !searchArea.contains(event.target as Node)) ||
        (resultsArea && !resultsArea.contains(event.target as Node))
      ) {
        const timeout = setTimeout(() => {
          setQuery("");
          clearTimeout(timeout);
        }, 100);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  if (!data) return null;

  const { instagram, facebook, tiktok, youtube, whatsapp } = data.configs;

  return (
    <S.Header {...rest}>
      <div className="container">
        <S.HeaderSocialMedia>
          <p>Visite também nossas redes socias!</p>

          <nav>
            <ul>
              {!!instagram && (
                <li>
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <FontAwesome type="brands" icon="instagram" />
                  </a>
                </li>
              )}

              {!!facebook && (
                <li>
                  <a
                    href={facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <FontAwesome type="brands" icon="square-facebook" />
                  </a>
                </li>
              )}

              {!!tiktok && (
                <li>
                  <a
                    href={tiktok}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok"
                  >
                    <FontAwesome type="brands" icon="tiktok" />
                  </a>
                </li>
              )}

              {!!youtube && (
                <li>
                  <a
                    href={youtube}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Youtube"
                  >
                    <FontAwesome type="brands" icon="youtube" />
                  </a>
                </li>
              )}

              {!!whatsapp && (
                <li>
                  <a
                    href={`https://api.whatsapp.com/send?phone=55${whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Whatsapp"
                  >
                    <FontAwesome type="brands" icon="whatsapp" />
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </S.HeaderSocialMedia>
        <S.HeaderTop>
          <S.HeaderLogo to="/">
            <img src={logo} alt="Logo" />
          </S.HeaderLogo>

          <Search
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Digite o nome do produto"
            className="search-area"
          />

          <S.HeaderCartButton onClick={() => navigate("/cart")}>
            <CartIcon data-value={cart.length} />
          </S.HeaderCartButton>
        </S.HeaderTop>
      </div>
      <S.HeaderBottom className="container">
        {!id && pathname !== "/cart" ? (
          <ul>
            <li>
              <NavLink to={`/`}>Todos</NavLink>
            </li>
            {Object.keys(data.content).map((category) => (
              <li key={category}>
                <NavLink to={`/${category.toLowerCase()}`}>{category}</NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            <li>
              <NavLink to={"/"}>
                <FontAwesome type="solid" icon="house" />
                Início
              </NavLink>
            </li>
          </ul>
        )}
      </S.HeaderBottom>
    </S.Header>
  );
}
