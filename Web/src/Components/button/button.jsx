import "./button.css";

const Button = (props) => {
  const { typr, title } = props;

  return (
    <button
      className={`btn ${
        (type === "add" && "add") ||
        (type === "remove" && "remove") ||
        (type === "checkout" && "checkout")
      }`}
    >
      Button
    </button>
  );
};

export default Button;
