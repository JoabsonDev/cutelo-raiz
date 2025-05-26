import styled from "styled-components"

export const SummaryValuesContainer = styled.div``
export const SummaryValuesTitle = styled.h3`
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.NEUTRAL[600]};
  font-size: clamp(16px, 2.5vw, 20px);
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL[300]};
  margin-bottom: 8px;
  padding-bottom: 8px;
`
export const SummaryValuesSubtotal = styled.div`
  display: flex;
  gap: 4px;

  span {
    flex: 1;
    font-size: 14px;

    &:first-child {
      color: ${({ theme }) => theme.COLORS.NEUTRAL[600]};
    }

    &:last-child {
      text-align: right;
      color: ${({ theme }) => theme.COLORS.NEUTRAL[900]};
    }
  }
`
export const SummaryValuesDiscount = styled(SummaryValuesSubtotal)`
  span {
    &:last-child {
      color: ${({ theme }) => theme.COLORS.RED[500]};
    }
  }
`
export const SummaryValuesDeliveryPrice = styled(SummaryValuesSubtotal)`
  span {
    &:last-child {
      color: ${({ theme }) => theme.COLORS.NEUTRAL[600]};
    }
  }
`
export const SummaryValuesTotal = styled(SummaryValuesSubtotal)`
  span {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.NEUTRAL[900]} !important;
  }
`
