export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  kind?: 'primary' | 'secondary' | 'plain';
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
}
