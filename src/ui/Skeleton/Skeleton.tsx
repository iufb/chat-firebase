import { useIsMobile } from "../../helpers/hooks/useIsMobile";

export const Skeleton = () => {
  const { isMobile } = useIsMobile();
  return (
    <div className="w-full h-full">
      <div
        className={`flex h-20   justify-between ${
          isMobile ? " items-center  gap-6 " : "  items-start"
        }    w-full     top-16 p-2 lg:p-4 bg-white border-b border-gray-300`}
      >
        <p className="h-12 w-32 bg-gray-200 rounded animate-pulse"></p>
        <p className="h-14 w-14 bg-gray-200 rounded animate-pulse mr-4"></p>
      </div>
    </div>
  );
};
