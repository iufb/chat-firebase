import { ForwardedRef, forwardRef } from "react";
import { InputProps } from "./Input.props";

export const Input = forwardRef(
  (
    { type, id, value, changeEvent, color, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={`${className} flex flex-col gap-2 w-full `}>
        <label
          htmlFor={id}
          className={`text-2xl  ${color ? `${color}` : "text-white "}`}
        >
          {id}
        </label>
        <input
          id={id}
          className={`px-2 py-2 border`}
          {...props}
          type={type}
          ref={ref}
          value={value}
          onChange={(e) => changeEvent && changeEvent(e.target.value)}
        />
      </div>
    );
  }
);
