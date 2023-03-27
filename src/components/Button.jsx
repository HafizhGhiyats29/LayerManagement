const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative right-0 bg-blue-500 hover:bg-blue-600 text-white py-1 px-7 flex my-1 rounded-full "
    >
      {children}
    </button>
  );
};

export default Button;
