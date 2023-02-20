import { MessageFieldProps } from "./MessageField.props";

export const MessageField = ({
  className,
  ...props
}: MessageFieldProps): JSX.Element => {
  return (
    <div className={`${className} w-full center mb-4 `} {...props}>
      <input className="w-full max-w-[500px] px-3 py-4 rounded-2xl      rounded-r-none rounded-t-2xl " />
      <div className="bg-white w-4 h-4 -mb-10 relative before:absolute  before:w-8 before:h-8  before:bg-black before:rounded-full before:-top-4" />
    </div>
  );
};
