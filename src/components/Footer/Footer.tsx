export const Footer = (): JSX.Element => {
  return (
    <section className="w-full  h-[10vh] bg-purple-700 text-center ">
      <span className="text-xl text-white text-center">
        © {new Date().getFullYear()} iufb. All rights reserved.
      </span>
    </section>
  );
};
