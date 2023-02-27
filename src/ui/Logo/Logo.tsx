import { memo } from "react";
import { Link } from "react-router-dom";
import { LogoProps } from "./Logo.props";
import { ReactComponent as LogoIcon } from "./logoIcon.svg";
export const Logo = memo(
  ({ color, size, className, ...props }: LogoProps): JSX.Element => {
    const textColor = color && `text-${color}`;
    return (
      <Link to={"/home"}>
        <div className={`flex gap-3 ${className} items-center `} {...props}>
          <LogoIcon className={color && `${textColor}`} />
          <h2
            className={`${
              size == "lg" && "text-5xl lg:text-6xl "
            } lg:text-4xl text-3xl lg:block gradientText  underline`}
          >
            Connect
          </h2>
        </div>
      </Link>
    );
  }
);
