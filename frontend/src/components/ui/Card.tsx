import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated";
}

export default function Card({ children, className = "", variant = "default" }: CardProps) {
  const baseStyles = "rounded-xl p-8";
  const variantStyles = {
    default: "",
    elevated: "shadow-lg"
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={{ backgroundColor: '#363636' }}
    >
      {children}
    </div>
  );
}
