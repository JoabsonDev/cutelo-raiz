import styled from "styled-components"

export const DialogWrapper = styled.dialog`
  background-color: transparent;
  max-width: 40rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &:not([open]) {
    display: none;
  }

  &::backdrop {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
  }
`

export const DialogContainer = styled.div`
  background: ${(props) => props.theme.COLORS.WHITE};
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0 1rem;
  position: relative;
  width: 100%;
`

export const DialogHeader = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.COLORS.NEUTRAL[200]};
  padding: 1rem 1rem 0.75rem;
  min-height: 3rem;
  position: relative;
`

export const DialogTitle = styled.h2`
  font-weight: 600;
  color: ${(props) => props.theme.COLORS.NEUTRAL[700]};
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
`

export const DialogCloseButton = styled.button`
  ${({ theme }) => theme.CLEAR_BUTTON}
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  padding: 0.375rem;
  font-size: 1.125rem;
  color: ${(props) => props.theme.COLORS.NEUTRAL[700]};
  transition: color 0.2s;
  line-height: 1.75rem;

  &:hover,
  &:focus-visible {
    color: ${(props) => props.theme.COLORS.RED[500]};
  }
`

export const DialogContent = styled.div`
  padding: 1rem;
`
