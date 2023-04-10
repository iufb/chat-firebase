import React, { PropsWithChildren, ReactNode } from "react";

export const FeatureContainer = ({ children }: PropsWithChildren) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
    {children}
  </div>
);

export const FeatureBackground = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
    <div className="bg-purple-700 h-[30vh] lg:h-auto"></div>
    <div className="bg-white h-[70vh] lg:min-h-screen">asdfaf</div>
  </div>
);
export const FeatureLeft: React.FC<{
  progress: number;
  children: ReactNode;
}> = ({ progress, children }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  return (
    <div
      className="center flex-col text-3xl h-[30vh] lg:h-auto"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="leading-10">{children}</div>
    </div>
  );
};
export const FeatureRight: React.FC<{
  progress: number;
  children: ReactNode;
}> = ({ progress, children }) => {
  const translateY = Math.max(-50, -(progress - 0.5) * 50);
  return (
    <div
      className="flex flex-1 lg:items-center justify-center h-screen"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0">
        {children}
      </div>
    </div>
  );
};
