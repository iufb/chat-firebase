import { memo } from "react";
import { Link } from "react-router-dom";
import { logOut } from "../../firebase/auth";
import { useAuth } from "../../helpers/hooks/useAuth";
import { navlist } from "./Navbar";
interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const BurgerMenu = memo(({ setIsOpen }: Props): JSX.Element => {
  const { user } = useAuth();
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className=" fixed  top-14 right-4 p-2 h-fit border-gray-300  bg-gray-600  rounded-md flex z-40   backdrop-blur-sm ">
      <ul className="flex gap-2 flex-col   text-white  divide-y  divide-white text-xl text-start">
        {navlist.map((link) => (
          <li key={link.name} onClick={handleClose}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
        {user ? (
          <li onClick={logOut} className="cursor-pointer">
            {user.name}
          </li>
        ) : (
          <Link to="/login">
            <li>Log in </li>
          </Link>
        )}
      </ul>
    </div>
  );
});
