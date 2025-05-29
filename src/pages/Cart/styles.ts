import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
`;

export const CartList = styled.ul`
  ${({ theme }) => theme.CLEAR_LIST};
  margin-top: 24px;
  flex: 1;
`;
export const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  border-top: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL[200]};
  padding-block: 8px;
`;
export const CartNote = styled.textarea`
  ${({ theme }) => theme.CLEAR_INPUT}
  width: 100%;
  min-width: 290px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL[300]};
  color: ${({ theme }) => theme.COLORS.NEUTRAL[600]};
  resize: vertical;
  min-height: 50px;
  margin-bottom: 16px;
`;

export const CartTotal = styled.span`
  display: block;
  width: 100%;
  text-align: right;
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD};
  font-size: clamp(16px, 2.5vw, 18px);
  color: ${({ theme }) => theme.COLORS.NEUTRAL[600]};
  margin-top: 16px;
`;

export const Resume = styled.div`
  position: sticky;
  top: 230px;
  width: 360px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL[300]};
  padding-bottom: 16px;

  h2 {
    padding: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL[300]};
    font-size: clamp(16px, 2.5vw, 18px);
  }

  div {
    padding-inline: 16px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: clamp(14px, 2.5vw, 16px);
      color: ${({ theme }) => theme.COLORS.NEUTRAL[600]};
    }
  }
`;
