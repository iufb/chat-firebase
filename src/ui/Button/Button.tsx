import { ButtonProps } from "./Button.props";

export const Button = ({
  variant,
  children,
  type,
  disabled = false,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={` ${className} ${
        variant == "white" &&
        "focus:outline-none text-white bg-inherit border-white border hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      }  ${
        variant == "dark" &&
        "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      }
        ${variant == "icon" && "border border-gray-300 rounded-md p-2 shadow"}
`}
      {...props}
    >
      {children}
    </button>
  );
};
