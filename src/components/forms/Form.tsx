import { useForm } from "react-hook-form";
import { FormProps } from "./Form.props";
import { Button, Input } from "../../ui";
import { IForm } from "./IForm.interface";
import { useNavigate } from "react-router-dom";

export const Form = ({
  title,
  eventHandler,
  className,
  path,
  ...props
}: FormProps): JSX.Element => {
  const { register, handleSubmit } = useForm<IForm>();
  const navigate = useNavigate();
  const onSubmit = (data: IForm) => {
    eventHandler(data)
      .then((userCredential) => {
        console.log(userCredential.user);
        navigate(`/${path}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${className} flex flex-col gap-2 lg:max-w-lg md:max-w-md max-w-sm px-3 md:px-0 w-full `}
      {...props}
    >
      <label htmlFor="email" className="text-xl text-white">
        Email
      </label>
      <Input
        type="email"
        id="email"
        {...register("email", { required: true })}
      />
      <label htmlFor="pass" className="text-xl text-white">
        Password
      </label>
      <Input
        type="password"
        id="pass"
        {...register("password", { required: true })}
      />
      <Button className="xl:text-3xl lg:text-2xl text-lg mt-5">{title}</Button>
    </form>
  );
};
