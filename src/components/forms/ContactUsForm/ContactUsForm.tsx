import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactUs } from "../../../firebase/contactUs";
import { Button, Input } from "../../../ui";
import { IContactForm } from "./IContactUsForm";

export const ContactUsForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>();
  const [success, setSuccess] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [sended, setSended] = useState<boolean>(false);
  const onSubmit = (data: IContactForm) => {
    setSuccess("");
    setIsSending(true);
    contactUs(data).then(() => {
      setSuccess(
        "Your message has been successfully sent. We will contact you very soon!"
      );
      setIsSending(false);
      setSended(true);
    });
  };
  return (
    <>
      {!sended ? (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            type="text"
            color="text-gray-900"
            id="Name"
            {...register("name", { required: true })}
          />
          <Input
            type="email"
            id="Email"
            color="text-gray-900"
            {...register("email", { required: true })}
          />
          <textarea
            className="w-[250px] p-4 border"
            placeholder="Additional information"
            {...register("additionalInformation", {
              required: true,
              minLength: { value: 8, message: "Minimum  8 characters." },
            })}
          />
          {errors.additionalInformation && (
            <p>{errors.additionalInformation.message}</p>
          )}
          <Button variant="dark">{isSending ? "Submitting" : "Submit"}</Button>
        </form>
      ) : (
        <h2 className="text-3xl gradientText text-center">{success}</h2>
      )}
    </>
  );
};
