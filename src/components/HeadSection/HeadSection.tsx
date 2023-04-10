import { ReactComponent as HeadSectionIcon } from "../../assets/Head.svg";
export const HeadSection = (): JSX.Element => {
  return (
    <section className="page center flex-col">
      <h1 className="lg:text-5xl text-3xl text-center text-gray-700">
        <span className="gradientText">Connect</span>, Grow and <br /> Inspire.
      </h1>
      <HeadSectionIcon className="w-full h-[750px]" />
    </section>
  );
};
