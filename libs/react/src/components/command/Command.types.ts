export interface Suggestion {
  id: string;
  label: string;
  action: () => void;
}

export interface CommandProps {
  suggestions?: Suggestion[];
}
