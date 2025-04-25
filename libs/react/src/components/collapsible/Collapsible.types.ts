export interface CollapsibleProps {
  triggerText?: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  kind?: 'primary' | 'secondary' | 'plain';
}
