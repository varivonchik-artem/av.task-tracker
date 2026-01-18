import React, { forwardRef } from "react";
import clx from "classnames";
import "./Button.scss";

export enum ButtonMode {}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;

  type?: "button" | "submit" | "reset";

  label?: string;
  isLabelVisible?: boolean;

  mode?: ButtonMode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, type = "button", label, isLabelVisible = true, mode, ...rest } = props;

  const buttonClasses = clx(className, "button", {
    [`button_${mode}`]: mode,
  });

  return (
    <button ref={ref} className={buttonClasses} type={type} {...rest}>
      {isLabelVisible && <span className="button__label">{label}</span>}
    </button>
  );
});

Button.displayName = "Button";
