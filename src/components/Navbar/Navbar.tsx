import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../../firebase/auth";
import { useAuth } from "../../helpers/hooks/useAuth";
import { Button, Logo } from "../../ui";
import { NavbarProps } from "./Navbar.props";
import { ReactComponent as BurgerIcon } from "../../assets/burger.svg";
import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
export const navlist = [
  {
    name: "Home",
    to: "/home",
  },
  {
    name: "Conversations",
    to: "conversations",
  },
];
export const Navbar = ({ className, ...props }: NavbarProps): JSX.Element => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleAuth = () => {
    if (user) {
      return logOut();
    } else {
      return navigate("/login");
    }
  };
  return (
    <nav
      className={`${className} w-full h-full max-h-16 md:py-0 py-4 flex items-center justify-between  px-10 lg:px-20 sticky top-0 gap-10 border-b bg-white border-gray-300`}
      {...props}
    >
      <Logo size="md" color="gray-600 w-16" className="justify-self-center" />
      <ul className="flex items-center gap-10">
        {navlist.map((link) => (
          <li key={link.name} className="md:block hidden">
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "gradientText px-2  py-2 shadow lg:text-xl"
                  : "lg:text-xl px-2 text-gray-600"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <li>
          <Button
            color="dark"
            className="text-lg hidden lg:block"
            onClick={handleAuth}
          >
            {user ? "Sign Out" : "Log in"}
          </Button>
        </li>
        <li onClick={() => setIsOpen((prev) => !prev)}>
          <BurgerIcon className={` block md:hidden ${isOpen && "hidden"} `} />
        </li>
      </ul>
      {isOpen && <BurgerMenu setIsOpen={setIsOpen} />}
    </nav>
  );
};
