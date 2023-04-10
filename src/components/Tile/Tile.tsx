import { useRef, useContext, createContext, PropsWithChildren } from "react";

interface WrapperProps {
  numOfPages: number;
  scrollY: number;
}

interface TileContextValue {
  numOfPages: number;
  currentPage: number;
}

export const TileContext = createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0,
});

export const TileWrapper = ({
  children,
  numOfPages,
  scrollY,
}: PropsWithChildren & WrapperProps) => {
  const refContainer = useRef<HTMLDivElement>(null);
  let currentPage = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    currentPage = percentY * numOfPages;
  }
  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div
        ref={refContainer}
        className="relative bg-black text-white"
        style={{
          height: numOfPages * 100 + "vh",
        }}
      >
        {children}
      </div>
    </TileContext.Provider>
  );
};
export const TileBackground = ({ children }: PropsWithChildren) => (
  <div className="absolute h-full w-full">{children}</div>
);
export const TileContent = ({ children }: PropsWithChildren) => (
  <div className="sticky top-0 h-screen  ">{children}</div>
);
interface Props {
  page: number;
  renderContent: (props: { progress: number }) => any;
}
export const Tile = ({ page, renderContent }: Props) => {
  const { currentPage, numOfPages } = useContext(TileContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const progress = Math.max(0, currentPage - page);
  let opacity = Math.min(1, Math.max(0, progress * 4));
  if (progress > 0.85 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }
  return (
    <div
      ref={refContainer}
      className="absolute top-0 w-full"
      style={{
        pointerEvents: progress >= 0 || progress <= 1 ? "none" : undefined,
        opacity,
      }}
    >
      {renderContent({ progress })}
    </div>
  );
};
