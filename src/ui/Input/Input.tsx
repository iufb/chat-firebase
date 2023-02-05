import { InputProps } from "./Input.props";

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return <input className={`${className}`} {...props} />;
};
