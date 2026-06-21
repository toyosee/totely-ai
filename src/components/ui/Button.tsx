import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  target?: string;
  rel?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  target,
  rel,
  size = 'md',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-300';

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-100 hover:shadow-blue-200/50 hover:scale-105 hover:from-blue-700 hover:to-blue-800',
    secondary: 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-100 hover:shadow-purple-200/50 hover:scale-105 hover:from-purple-700 hover:to-purple-800',
    outline: 'border-2 border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50',
    ghost: 'text-gray-600 hover:text-blue-600 hover:bg-blue-50',
  };

  const combinedClassName = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && <ArrowRight size={18} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClassName} target={target} rel={rel} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick}>
      {content}
    </button>
  );
}