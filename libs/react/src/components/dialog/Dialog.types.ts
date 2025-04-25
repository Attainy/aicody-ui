export interface DialogProps {
  triggerText?: string;
  title?: string;
  description?: string;
  initialName?: string;
  initialUsername?: string;
  initialEmail?: string;
  cancelButtonText?: string;
  saveButtonText?: string;
  kind?: 'primary' | 'secondary' | 'outline' | 'plain' | 'cancel';
}
