import { Link } from "react-router-dom";
import { Form } from "../../components/forms/Form";
import { createUser } from "../../firebase/auth";
import { Logo } from "../../ui";

export const RegisterPage = (): JSX.Element => {
  return (
    <div className="pageScreen center bgGradient flex flex-col">
      <Logo size="lg" color="white" />
      <Form title="Register" eventHandler={createUser} path="update" />
      <p className="flex gap-2 text-white items-baseline">
        Already have account?{" "}
        <Link to="/login">
          <span className="underline text-xl">Log In </span>
        </Link>
      </p>
    </div>
  );
};
