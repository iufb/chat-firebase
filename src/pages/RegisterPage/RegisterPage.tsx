import { Form } from "../../components/forms/Form";
import { createUser } from "../../firebase/auth";
import { Logo } from "../../ui";

export const RegisterPage = (): JSX.Element => {
  return (
    <div className="pageScreen center bgGradient flex flex-col">
      <Logo size="lg" color="white" />
      <Form title="Register" eventHandler={createUser} path="update" />
    </div>
  );
};
