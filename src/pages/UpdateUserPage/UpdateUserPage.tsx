import { UpdateUserForm } from "../../components";
import { Logo } from "../../ui";

export const UpdateUserPage = (): JSX.Element => {
  return (
    <div className="pageScreen center bgGradient flex gap-2 flex-col px-4">
      <Logo size="lg" color="white" />
      <h1 className="lg:text-5xl  text-xl md:text-2xl  text-start  text-white  ">
        Add some information about yourself :
      </h1>

      <UpdateUserForm />
    </div>
  );
};
