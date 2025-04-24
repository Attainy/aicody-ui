export interface AlertDialogProps {
  kind?: 'primary' | 'secondary' | 'plain';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  description?: string;
  triggerText?: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
}
