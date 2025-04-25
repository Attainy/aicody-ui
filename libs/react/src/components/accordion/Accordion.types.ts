export interface AccordionItem {
  id: string;
  triggerText: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  kind?: 'primary' | 'secondary' | 'plain';
  items: AccordionItem[];
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}
