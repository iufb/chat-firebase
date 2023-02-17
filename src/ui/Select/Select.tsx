import { SelectProps } from "./Select.props";

export const Select = ({
  users,
  className,
  setSelected,
  setSelectedId,
  setShowList,
  ...props
}: SelectProps): JSX.Element => {
  return (
    <div
      className={`${className} flex flex-col  gap-2 w-full max-w-[400px] bg-white  bg-opacity-50  rounded-md text-black p-2 divide-y divide-gray-300 backdrop-blur-sm`}
      {...props}
    >
      {users.map((user) => (
        <div
          className="flex gap-2  pt-2 cursor-pointer hover:bg-white hover:bg-opacity-70 rounded-md p-2"
          key={user.id}
          onClick={() => {
            setSelectedId(user.id);
            setSelected(user.name);
            setShowList(false);
          }}
        >
          <img
            src={user.avatar}
            className="w-10 h-10 rounded-full border-zinc-400"
          />
          <p className="text-xl ">{user.name}</p>
        </div>
      ))}
    </div>
  );
};
