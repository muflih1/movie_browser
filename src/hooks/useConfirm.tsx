import { useCallback, useState } from 'react';
import * as Dialog from '../components/AlertDialog';

export default function useConfirm(title: string, message: string) {
  const [promise, setPromise] = useState<{ resolve: Function } | null>(null);

  const confirm = useCallback(
    () =>
      new Promise((resolve, _reject) => {
        setPromise({ resolve });
      }),
    [setPromise]
  );

  const handleClose = useCallback(() => {
    setPromise(null);
  }, [setPromise]);

  const handleCinfirm = useCallback(() => {
    promise?.resolve(true);
    handleClose();
  }, [promise, handleClose]);

  const handleCancel = useCallback(() => {
    promise?.resolve(false);
    handleClose();
  }, [promise, handleClose]);

  const ConfirmationDialog = () => (
    <Dialog.Root open={promise !== null}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Message>{message}</Dialog.Message>
      <Dialog.Footer>
        <Dialog.Button type='secondry' onPress={handleCancel}>
          Cancel
        </Dialog.Button>
        <Dialog.Button type='primary' onPress={handleCinfirm}>
          Delete
        </Dialog.Button>
      </Dialog.Footer>
    </Dialog.Root>
  );

  return [confirm, ConfirmationDialog] as const;
}
