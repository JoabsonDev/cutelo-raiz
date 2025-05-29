import { useCallback, useEffect, useRef, type ComponentProps } from "react";

import FontAwesome from "@atoms/FontAwesome";

import * as S from "./styles";

type DialogProps = Omit<
  ComponentProps<typeof S.DialogWrapper>,
  "aria-labelledby"
> & {
  open?: boolean;
  onClose?: () => void;
  hasCloseButton?: boolean;
};

// TODO: criar transições entre outras propriedades do dialog
// TODO: criar listener para entender se fechou com ESC para atualizar o estado
// TODO: verificar problema ao apertar enter estando dentro do dialog
export default function Dialog({
  title,
  open,
  children,
  onClose,
  hasCloseButton = true,
  ...rest
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClose = useCallback(() => {
    if (!dialogRef.current) return;

    onClose?.();
    dialogRef.current.close();
    document.body.classList.remove("overflow-hidden");
  }, [onClose]);

  useEffect(() => {
    if (!dialogRef.current) return;

    const currentDialogRef = dialogRef.current;

    if (open) {
      currentDialogRef.showModal();
      document.body.classList.add("overflow-hidden");
    } else {
      handleClose();
    }

    const handleBackdropClick = (event: MouseEvent) => {
      if (!currentDialogRef) return;

      const rect = currentDialogRef.getBoundingClientRect();

      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        handleClose();
      }
    };

    currentDialogRef.addEventListener("click", handleBackdropClick);

    return () => {
      currentDialogRef.removeEventListener("click", handleBackdropClick);
    };
  }, [open, handleClose]);

  return (
    <S.DialogWrapper
      ref={dialogRef}
      {...rest}
      aria-labelledby={title ? "title" : undefined}
    >
      <S.DialogContainer>
        <S.DialogHeader>
          {title && <S.DialogTitle id="title">{title}</S.DialogTitle>}
          {hasCloseButton && (
            <S.DialogCloseButton
              onClick={handleClose}
              aria-label="Fechar modal"
            >
              <FontAwesome icon="xmark" />
            </S.DialogCloseButton>
          )}
        </S.DialogHeader>
        <S.DialogContent>{children}</S.DialogContent>
      </S.DialogContainer>
    </S.DialogWrapper>
  );
}
