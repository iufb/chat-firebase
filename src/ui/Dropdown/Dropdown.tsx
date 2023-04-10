import { useRef } from "react";
import { useOnClickOutside } from "../../helpers/hooks/useOnClickOutside";
import { DropdownProps } from "./Dropdown.props";

export const Dropdown = ({
  children,
  setDropDown,
  className,
  ...props
}: DropdownProps): JSX.Element => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    setDropDown(false);
  });
  return (
    <ul
      ref={ref}
      className={`${className} absolute p-4 flex flex-col center text-gray-600 gap-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      {...props}
    >
      {children}
    </ul>
  );
};
