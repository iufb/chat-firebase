import { memo } from "react";
import { GetNickName } from "../../helpers/helpers";
import { Spinner } from "../../ui";
import { UserHeaderProps } from "./UserHeader.props";

export const UserHeader = memo(
  ({
    user,
    size = "w-10 h-10",
    text = "text-md",
    className,
    ...props
  }: UserHeaderProps): JSX.Element => {
    if (!user) return <Spinner size="md" />;
    const { avatar, name, email } = user;
    return (
      <div
        className={`${className} flex gap-2 center cursor-pointer  `}
        {...props}
      >
        {avatar ? (
          <img src={avatar} alt="userPhoto" className={`userCircle  ${size}`} />
        ) : (
          <div className="userCircle border-gray-400" />
        )}
        <div className=" flex-col flex ">
          <h2 className={`${text}`}>{name}</h2>
          <p className="text-gray-400 text-sm">
            {typeof email === "string" && GetNickName(email)}
          </p>
        </div>
      </div>
    );
  },
);
