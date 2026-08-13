interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "dark" | "outline-white";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer";

  const variants = {
    primary: "bg-cta text-white hover:bg-navy-2 shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white",
    dark: "bg-navy text-white hover:bg-navy-2 shadow-lg",
    "outline-white":
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-navy",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
