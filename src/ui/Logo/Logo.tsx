import { LogoProps } from "./Logo.props";
import { ReactComponent as LogoIcon } from "./logoIcon.svg";
export const Logo = ({
  color,
  size,
  className,
  ...props
}: LogoProps): JSX.Element => {
  const textColor = color && `text-${color}`;
  return (
    <div className={`flex gap-3 ${className} items-center`} {...props}>
      <LogoIcon className={color && `${textColor}`} />
      <h2
        className={`${
          size == "lg" && "text-5xl lg:text-6xl "
        } text-2xl hidden lg:block gradientText  underline`}
      >
        Connect
      </h2>
    </div>
  );
};
