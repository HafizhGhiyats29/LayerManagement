const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative bg-gray py-5 px-16 flex my-1 rounded-sm "
    >
      {children}
    </button>
  );
};

export default Button;
