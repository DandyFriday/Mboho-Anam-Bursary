import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

interface ButtonProps {
  text: string;
  navigateTo?: string;
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

const Button = ({
  text,
  navigateTo,
  className = "",
  onClick,
  icon,
}: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (navigateTo) navigate(navigateTo);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition ${className}`}
    >
      {text}
      {icon && <span className="text-lg">{icon}</span>}
    </button>
  );
};

export default Button;
