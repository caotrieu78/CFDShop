import React, { useMemo } from "react";
import { Link } from "react-router-dom";

export const Button = ({
  variant = "primary",
  link = '',
  className,
  children,
  disabled,
  ...rest
}) => {
  // variants includes border and primary

  const variantClassName = useMemo(() => {
    if (disabled) {
      return "btn btn-light"
    }

    switch (variant) {
      case "primary":
        return "btn btn-primary";

      case "outline":
        return "btn btn-outline-primary-2";

      case "outline-black":
        return "btn btn-outline-dark-2";

      default:
        return "";
    }
  }, [variant, disabled]);

  if (!link) {
    return (
      <button className={`${variantClassName} ${className ?? ""}`} {...rest}>
        {children}
      </button>
    );
  }

  return (
    <Link
      to={link}
      className={`${variantClassName} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Link>
  );
};
