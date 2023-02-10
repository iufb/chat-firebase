import { Form } from "../../components/forms/Form";
import { createUser } from "../../firebase/auth";
import { Logo } from "../../ui";

export const RegisterPage = (): JSX.Element => {
  return (
    <div className="page center bg-gradient-to-r from-purple-500 to-cyan-300 animate-bgPulse  bg-back flex flex-col">
      <Logo size="lg" color="white" />
      <Form title="Register" eventHandler={createUser} />
    </div>
  );
};
