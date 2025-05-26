import type { ComponentProps } from "react";

import * as S from "./styles";

type FontAwesomeProps = ComponentProps<typeof S.Icon> & {
  type?: "solid" | "regular" | "light" | "thin" | "brands";
  icon: string;
  color?: string;
};

export default function FontAwesome({
  type = "solid",
  icon,
  color,
  ...rest
}: FontAwesomeProps) {
  const className = `fa-${type} fa-${icon} ${rest.className || ""}`.trim();
  return (
    <S.Icon aria-hidden={true} className={className} $color={color} {...rest} />
  );
}
