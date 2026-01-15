import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <div>
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-white mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 border-2 text-white rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 outline-none transition placeholder-gray-400 ${className}`}
        style={{ backgroundColor: '#292929', borderColor: '#444' }}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
