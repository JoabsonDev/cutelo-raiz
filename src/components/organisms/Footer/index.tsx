import type { ComponentProps } from "react";
import * as S from "./styles";

import Button from "@atoms/Button";
import FontAwesome from "@atoms/FontAwesome";
import { useQueryClient } from "react-query";

type FooterProps = ComponentProps<typeof S.Footer>;

export default function Footer({ ...rest }: FooterProps) {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["home"]);

  if (!data) return null;

  return (
    <S.Footer {...rest}>
      <span>ATENDIMENTO AO CLIENTE</span>
      <ul>
        <li>
          <FontAwesome icon="phone" />
          Contato: {"(51) 9 9680-1895"}
        </li>
        <li>
          <FontAwesome icon="envelope" />
          E-mail: email@gmail.com
        </li>
        <li>
          <Button variation="primary">
            <FontAwesome type="brands" icon="whatsapp" /> Contate-nos Via
            Whatsapp
          </Button>
        </li>
      </ul>

      <ul className="social">
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FontAwesome type="brands" icon="instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FontAwesome type="brands" icon="square-facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <FontAwesome type="brands" icon="tiktok" />
          </a>
        </li>
      </ul>

      <p>© Copyright 2025 - Todos os Direitos Reservados</p>
    </S.Footer>
  );
}
