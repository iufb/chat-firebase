import { ForwardedRef, forwardRef } from "react";
import { InputProps } from "./Input.props";

export const Input = forwardRef(
  (
    { type, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <input
        className={`${className} px-2 py-2`}
        {...props}
        type={type}
        ref={ref}
      />
    );
  }
);
