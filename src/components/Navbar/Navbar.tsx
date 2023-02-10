import { NavLink } from "react-router-dom";
import { Logo } from "../../ui";
import { NavbarProps } from "./Navbar.props";

const navlist = [
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
  return (
    <nav
      className={`${className} w-full flex items-center justify-between  lg:px-5 fixed gap-10 border-b border-gray-300`}
      {...props}
    >
      <Logo size="md" color="pink-300" />
      <ul className="flex items-center gap-10">
        {navlist.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive ? "text-red-500 px-2 py-2 shadow" : ""
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
