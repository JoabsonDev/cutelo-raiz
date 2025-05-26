import type { ComponentProps } from "react";

import * as S from "./styles";

type SearchProps = Omit<ComponentProps<typeof S.InputSearch>, "type"> & {};
export default function Search({ ...rest }: SearchProps) {
  return <S.InputSearch {...rest} />;
}
