import { Link } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { navlist } from "./Navbar";
interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const BurgerMenu = ({ setIsOpen }: Props): JSX.Element => {
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-[90%] fixed pr-9 start top-0 right-0 h-screen bg-gray-400 flex z-20 animate-slideRight backdrop-blur-sm bg-white/5">
      <CloseIcon
        onClick={handleClose}
        className="absolute top-4 right-9 w-8 h-8"
      />
      <ul className="flex gap-2 flex-col text-right mt-20">
        {navlist.map((link) => (
          <li key={link.name} className="text-3xl" onClick={handleClose}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
