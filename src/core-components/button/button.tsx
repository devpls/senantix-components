import { forwardRef } from "react";
import clsx from "clsx";

import { container, sizeVariants, variantVariants } from "./button.css.ts";
import { ButtonProps } from "./types.ts";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      onClick,
      iconLeft,
      iconRight,
      size = "medium",
      type = "button",
      variant = "primary",
    },
    ref,
  ) => {
    return (
      <button
        onClick={onClick}
        ref={ref}
        className={clsx(
          container,
          sizeVariants[size],
          variantVariants[variant],
        )}
        type={type}
      >
        {iconLeft && <div>{iconLeft}</div>}
        {label}
        {iconRight && <div>{iconRight}</div>}
      </button>
    );
  },
);
