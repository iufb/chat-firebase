import { Button, Input } from "../../../ui";
import { ReactComponent as ImageIcon } from "../../../assets/image.svg";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IUpdateUserForm } from "./IUpdateUserForm";
import { ref } from "firebase/storage";
import { storage } from "../../../firebase/firebase";
import { useAuth } from "../../../helpers/hooks/useAuth";
import { addImage } from "../../../firebase/storage";
import { updateUser } from "../../../firebase/auth";
export const UpdateUserForm = (): JSX.Element => {
  const [url, setUrl] = useState<string | null>(null);
  const filePickerRef = useRef<HTMLInputElement>(null);
  const { user } = useAuth();
  const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (!e.target.files) return;
    const image = e.target.files[0];
    if (image) {
      reader.readAsDataURL(image);
    }
    reader.onload = (readerEvent) => {
      if (typeof readerEvent.target?.result === "string")
        setUrl(readerEvent.target?.result);
    };
  };
  const { register, handleSubmit } = useForm<IUpdateUserForm>();
  const navigate = useNavigate();
  const imgRef = ref(storage, `users/${user?.id}/avatar`);
  const onSubmit = (data: IUpdateUserForm) => {
    if (url) {
      addImage(imgRef, url).then((url) => {
        const newData = { ...data, photoURL: url };
        updateUser(newData);
        navigate("/home");
      });
    }
  };
  return (
    <form
      className="w-full max-w-[600px] flex center gap-4 flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        onClick={() => filePickerRef.current?.click()}
        className="cursor-pointer"
      >
        <p className="text-3xl text-center  gradientText font-bold">Avatar :</p>
        <ImageIcon className="w-48 h-48 fill-white" />
        <input type="file" ref={filePickerRef} onChange={getImage} hidden />
      </div>
      <Input
        type="text"
        id="First Name"
        {...register("firstName", { required: true })}
      />
      <Input
        type="text"
        id="Last Name"
        {...register("lastName", { required: true })}
      />
      <Button variant="white" className="w-full">
        Submit
      </Button>
    </form>
  );
};
