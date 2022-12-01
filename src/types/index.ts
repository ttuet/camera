export interface DialogProps {
  open: boolean;
  title: string;
  onCancel: () => void;
  onClose: () => void;
  onConfirm: () => void;
}
