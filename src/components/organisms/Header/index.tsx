import type { ComponentProps } from "react";
import * as S from "./styles";

import logo from "@assets/logo.png";
import CartIcon from "@atoms/CartIcon";
import FontAwesome from "@atoms/FontAwesome";
import Search from "@atoms/Search";
import { useQueryClient } from "react-query";
import { NavLink } from "react-router-dom";

type HeaderProps = ComponentProps<typeof S.Header>;

export default function Header({ ...rest }: HeaderProps) {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<AppResponse>(["home"]);

  if (!data) return null;
  const { instagram, facebook, tiktok, youtube, whatsapp } = data.configs;

  return (
    <S.Header {...rest}>
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
                  href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
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

        <Search placeholder="Digite o nome do produto" />

        <S.HeaderCartButton>
          <CartIcon data-value="1" />
        </S.HeaderCartButton>
      </S.HeaderTop>

      <S.HeaderBottom>
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
      </S.HeaderBottom>
    </S.Header>
  );
}
