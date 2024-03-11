import { useForm } from "react-hook-form";
import { FormProps } from "./Form.props";
import { Button, Input, Spinner } from "../../ui";
import { IForm } from "./IForm.interface";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../helpers/hooks/useAuth";
import { useState } from "react";
import { LoginErrorHandler } from "../../helpers/helpers";

export const Form = ({
  title,
  eventHandler,
  className,
  path,
  ...props
}: FormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const { user } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (data: IForm) => {
    setLoading(true);
    setError(null);
    eventHandler(data)
      .then(() => {
        if (!error) navigate(`/${path}`);
        setLoading(false);
      })
      .catch((e) => {
        if (e instanceof Error) {
          console.log(e);
          setLoading(false);
          setError(e.message);
        }
      });
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
        {...register("email", { required: "Field" })}
      />
      <Input
        type="password"
        id="Password"
        {...register("password", { required: true })}
      />

      {error && (
        <p className="text-white p-1 pl-3 border-2 border-red-600 rounded-lg  text-xl">
          {LoginErrorHandler(error)}
        </p>
      )}
      <Button
        className=" w-full xl:text-3xl lg:text-2xl text-lg mt-5"
        variant="white"
        disabled={loading}
        type="submit"
      >
        {loading ? <Spinner size="md" /> : <span>{title}</span>}
      </Button>
    </form>
  );
};
