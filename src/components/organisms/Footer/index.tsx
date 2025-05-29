import type { ComponentProps } from "react";
import * as S from "./styles";

import FontAwesome from "@atoms/FontAwesome";
import formatPhone from "@helpers/format-phone";
import { useQueryClient } from "react-query";

type FooterProps = ComponentProps<typeof S.Footer>;

export default function Footer({ ...rest }: FooterProps) {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<AppResponse>(["home"]);

  if (!data) return null;
  const { instagram, facebook, tiktok, youtube, whatsapp, phone, email } =
    data.configs;

  return (
    <S.Footer {...rest}>
      <span>ATENDIMENTO AO CLIENTE</span>
      <ul>
        {!!phone && (
          <li>
            <FontAwesome icon="phone" />
            Contato: {formatPhone(phone)}
          </li>
        )}
        {!!email && (
          <li>
            <FontAwesome icon="envelope" />
            E-mail: {email}
          </li>
        )}
        {!!whatsapp && (
          <li>
            <S.LinkWhatsButton
              href={`https://api.whatsapp.com/send?phone=55${whatsapp}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Contate-nos Via
              Whatsapp"
            >
              <FontAwesome type="brands" icon="whatsapp" /> Contate-nos Via
              Whatsapp
            </S.LinkWhatsButton>
          </li>
        )}
      </ul>

      <ul className="social">
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

      <p>
        © Copyright {new Date().getFullYear()} - Todos os Direitos Reservados
      </p>
    </S.Footer>
  );
}
