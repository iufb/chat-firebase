import { GetNickName } from "../../helpers/helpers";
import { UserHeaderProps } from "./UserHeader.props";

export const UserHeader = ({
  user,
  className,
  ...props
}: UserHeaderProps): JSX.Element => {
  if (!user) return <div>Loading</div>;
  const { photoURL, displayName, email } = user;
  return (
    <div
      className={`${className} flex gap-2 center cursor-pointer hoverCover `}
      {...props}
    >
      {photoURL ? (
        <img
          src={photoURL}
          alt="userPhoto"
          className="userCircle object-cover"
        />
      ) : (
        <div className="userCircle border-gray-400" />
      )}
      <div className="hidden flex-col md:flex ">
        <h2 className="text-md">{displayName}</h2>
        <p className="text-gray-400 text-sm">
          {typeof email === "string" && GetNickName(email)}
        </p>
      </div>
    </div>
  );
};
