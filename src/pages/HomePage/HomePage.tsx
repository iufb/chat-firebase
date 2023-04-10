import { About } from "../../components/About/About";
import React, { useState } from "react";
import "../../index.css";
import { ConstactUs, Footer, HeadSection } from "../../components";
export const HomePage = (): JSX.Element => {
  const [scrollY, setScrollY] = useState<number>(0);
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollY(e.currentTarget.scrollTop);
  };

  return (
    <div
      className={`pageScreen  home overflow-auto max-h-200 scroll-m-4`}
      onScroll={handleScroll}
    >
      <HeadSection />
      <About scrollY={scrollY} />
      <ConstactUs />
      <Footer />
    </div>
  );
};
