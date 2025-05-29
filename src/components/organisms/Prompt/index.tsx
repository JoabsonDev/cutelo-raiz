import Button from "@atoms/Button";
import Dialog from "@organisms/Dialog";

import { useState, type ComponentProps } from "react";
import * as S from "./styles";

type PromptProps = ComponentProps<typeof Dialog> & {
  open: boolean;
  title?: string;
  message?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

export default function Prompt({
  className,
  message,
  onCancel,
  onConfirm,
  ...rest
}: PromptProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Dialog {...rest} hasCloseButton={true} onClose={() => setIsLoading(false)}>
      <S.PromptMessage>{message}</S.PromptMessage>

      <S.PromptButtonContainer>
        <Button variation="secondary" onClick={onCancel}>
          cancelar
        </Button>
        <Button
          variation="danger"
          onClick={() => {
            setIsLoading(true);
            onConfirm!();
          }}
          isLoading={isLoading}
        >
          ok
        </Button>
      </S.PromptButtonContainer>
    </Dialog>
  );
}
