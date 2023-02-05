import { Button, Input } from "../../ui";

export const RegisterForm = (): JSX.Element => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-2'>
      <Input />
      <Input />
      <Button>Register</Button>
    </form>
  );
};
