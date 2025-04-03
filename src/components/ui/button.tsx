interface ButtonProps {
  tip: string;
  onClickButton: (text: string) => void;
  text: string;
}

const Button = ({ tip, onClickButton, text }: ButtonProps) => {
  return (
    <button
      style={{
        color: tip === "error" ? "red" : "unset",
        backgroundColor: tip === "error" ? "black" : "unset",
      }}
      onClick={() => onClickButton(text)}
    >
      {text}
    </button>
  );
};

export default Button;