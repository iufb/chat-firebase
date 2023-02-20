import { GetNickName } from "../../helpers/helpers";
import { UserHeaderProps } from "./UserHeader.props";

export const UserHeader = ({
  user,
  size = "w-10 h-10",
  text = "text-md",
  className,
  ...props
}: UserHeaderProps): JSX.Element => {
  if (!user) return <div>Loading</div>;
  const { avatar, name, email } = user;
  return (
    <div
      className={`${className} flex gap-2 center cursor-pointer  `}
      {...props}
    >
      {avatar ? (
        <img
          src={avatar}
          alt="userPhoto"
          className={`userCircle object-cover ${size}`}
        />
      ) : (
        <div className="userCircle border-gray-400" />
      )}
      <div className="hidden flex-col md:flex ">
        <h2 className={`${text}`}>{name}</h2>
        <p className="text-gray-400 text-sm">
          {typeof email === "string" && GetNickName(email)}
        </p>
      </div>
    </div>
  );
};
