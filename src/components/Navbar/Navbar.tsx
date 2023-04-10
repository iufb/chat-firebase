import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../../firebase/auth";
import { useAuth } from "../../helpers/hooks/useAuth";
import { Button, Dropdown, Logo } from "../../ui";
import { NavbarProps } from "./Navbar.props";
import { ReactComponent as BurgerIcon } from "../../assets/burger.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { memo, useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { UserHeader } from "../UserHeader/UserHeader";
import { useIsMobile } from "../../helpers/hooks/useIsMobile";
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
export const Navbar = memo(
  ({ className, ...props }: NavbarProps): JSX.Element => {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [dropDown, setDropDown] = useState(false);
    const navigate = useNavigate();
    const { isMobile } = useIsMobile();
    const handleAuth = () => {
      if (user) {
        return logOut();
      }
    };
    return (
      <nav
        className={`${className} w-full h-full max-h-16 md:py-0 py-4 flex items-center justify-between  px-10 lg:px-20 sticky  top-0 gap-10 border-b bg-white border-gray-300`}
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
          {!isMobile && (
            <li>
              {user ? (
                <>
                  <UserHeader
                    user={user}
                    className="hoverCover"
                    onClick={() => setDropDown((prev) => !prev)}
                  />
                  {dropDown && (
                    <Dropdown setDropDown={setDropDown}>
                      <li>{user.email}</li>
                      <li
                        className="cursor-pointer font-bold"
                        onClick={handleAuth}
                      >
                        Log Out
                      </li>
                    </Dropdown>
                  )}
                </>
              ) : (
                <div className=" gap-2 center">
                  <Button variant="dark" onClick={() => navigate("/login")}>
                    Log In
                  </Button>
                  <p className="text-gray-400">or</p>
                  <Button variant="dark" onClick={() => navigate("/register")}>
                    Register
                  </Button>
                </div>
              )}
            </li>
          )}
          <li
            onClick={() => setIsOpen((prev) => !prev)}
            className={` block md:hidden cursor-pointer  `}
          >
            {isOpen ? <CloseIcon /> : <BurgerIcon />}
          </li>
        </ul>
        {isOpen && <BurgerMenu setIsOpen={setIsOpen} />}
      </nav>
    );
  }
);
