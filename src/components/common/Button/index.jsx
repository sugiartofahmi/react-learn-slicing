const Button = ({ className, text, onMouseOver }) => {
  return (
    <button onMouseOver={onMouseOver} className={className}>
      {text}
    </button>
  );
};

export default Button;
