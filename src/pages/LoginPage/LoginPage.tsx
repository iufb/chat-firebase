import { Link } from "react-router-dom";
import { Form } from "../../components/forms/Form";
import { singIn } from "../../firebase/auth";
import { Logo } from "../../ui";

export const LoginPage = (): JSX.Element => {
  return (
    <div className="pageScreen center  bgGradient flex flex-col">
      <Logo size="lg" color="white" />
      <Form title="Log in" eventHandler={singIn} path="home" />
      <p className="flex gap-2 text-white items-baseline">
        Don&apos;t have account?{" "}
        <Link to="/register">
          <span className="underline text-xl">Sign Up</span>
        </Link>
      </p>
    </div>
  );
};
