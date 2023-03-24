import { ParticipantLayoutProps } from "./ParticipantLayout.props";

export const ParticipantLayout = ({
  children,
  className,
  ...props
}: ParticipantLayoutProps) => {
  return (
    <div
      className={`relative group max-w-[1280px] max-h-[720px] w-full h-full center gap-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
