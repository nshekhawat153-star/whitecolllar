import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  as?: "button" | "a";
  href?: string;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export default function PrimaryButton({
  children,
  as: Tag = "button",
  href,
  fullWidth,
  style,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const cls = `btn-primary${fullWidth ? " w-full" : ""}`;

  if (Tag === "a" || href) {
    return (
      <a href={href} className={cls} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  );
}
