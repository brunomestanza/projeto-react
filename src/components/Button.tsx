interface ButtonProps {
  handleButtonClick: () => void;
  title: string;
}

export function Button(props: ButtonProps) {
  return <button onClick={props.handleButtonClick}>{props.title}</button>;
}
