export interface ButtonProps {
  text: string;
  padding: number;
  disabled: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <button disabled={props.disabled} style={{ padding: props.padding }}>
      {props.text}
    </button>
  );
}

export default Button;
