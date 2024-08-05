export const ChangeButton = ({ onClick, className, children }) => {
  return (
    <button className={`w-36 flex gap-2 items-center hover:scale-105 transition-transform duration-500 active:scale-95 h-12 border ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
