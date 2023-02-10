import { Form } from "../../components/forms/Form";
import { singIn } from "../../firebase/auth";
import { Logo } from "../../ui";

export const LoginPage = (): JSX.Element => {
  return (
    <div className="page center bg-gradient-to-r from-purple-500 to-cyan-300 animate-bgPulse  bg-back flex flex-col">
      <Logo size="lg" color="white" />
      <Form title="Log in" eventHandler={singIn} path="home" />
    </div>
  );
};
