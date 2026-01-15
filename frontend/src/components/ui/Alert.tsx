interface AlertProps {
  type: "error" | "success" | "warning" | "info";
  message: string;
  className?: string;
}

export default function Alert({ type, message, className = "" }: AlertProps) {
  const alertStyles = {
    error: "bg-red-500/10 border-red-500 text-red-500",
    success: "bg-green-500/10 border-green-500 text-green-500",
    warning: "bg-yellow-500/10 border-yellow-500 text-yellow-500",
    info: "bg-blue-500/10 border-blue-500 text-blue-500"
  };

  const icons = {
    error: "❌",
    success: "✅",
    warning: "⚠️",
    info: "ℹ️"
  };

  return (
    <div className={`p-3 rounded-lg border ${alertStyles[type]} ${className}`}>
      {icons[type]} {message}
    </div>
  );
}
