import { t } from "i18next";
import type { ComponentProps } from "react";

import * as S from "./styles";

type SummaryValuesProps = ComponentProps<typeof S.SummaryValuesContainer>;

function SummaryValues({ children, ...rest }: SummaryValuesProps) {
  return (
    <S.SummaryValuesContainer {...rest}>
      <S.SummaryValuesTitle>{t("summaryValues.title")}</S.SummaryValuesTitle>
      {children}
    </S.SummaryValuesContainer>
  );
}

SummaryValues.Subtotal = S.SummaryValuesSubtotal;
SummaryValues.Discount = S.SummaryValuesDiscount;
SummaryValues.DeliveryPrice = S.SummaryValuesDeliveryPrice;
SummaryValues.Total = S.SummaryValuesTotal;

export default SummaryValues;
