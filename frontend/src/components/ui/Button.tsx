import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  isLoading?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  isLoading = false,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "font-semibold py-3.5 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md";
  
  const variantStyles = {
    primary: "text-black hover:bg-gray-100",
    secondary: "text-white border-2 hover:bg-white/10",
    outline: "text-white border-2 hover:bg-white/10"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const getBackgroundStyle = () => {
    if (variant === "primary") {
      return { backgroundColor: '#f5f5f5' };
    }
    if (variant === "secondary" || variant === "outline") {
      return { borderColor: '#f5f5f5' };
    }
    return {};
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthClass} ${className}`}
      style={getBackgroundStyle()}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
