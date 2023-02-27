import { useForm } from "react-hook-form";
import { FormProps } from "./Form.props";
import { Button, Input } from "../../ui";
import { IForm } from "./IForm.interface";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../helpers/hooks/useAuth";

export const Form = ({
  title,
  eventHandler,
  className,
  path,
  ...props
}: FormProps): JSX.Element => {
  const { register, handleSubmit } = useForm<IForm>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const onSubmit = (data: IForm) => {
    try {
      eventHandler(data);
      navigate(`/${path}`);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${className} flex flex-col gap-2 lg:max-w-lg md:max-w-md max-w-sm px-3 md:px-0 w-full `}
      {...props}
    >
      <Input
        type="email"
        id="Email"
        {...register("email", { required: true })}
      />
      <Input
        type="password"
        id="Password"
        {...register("password", { required: true })}
      />
      <Button
        className=" w-full xl:text-3xl lg:text-2xl text-lg mt-5"
        variant="white"
        type="submit"
      >
        {title}
      </Button>
    </form>
  );
};
