import { ContactUsForm } from "../forms/ContactUsForm/ContactUsForm";
export const ConstactUs = (): JSX.Element => {
  return (
    <section className="pageScreen bg-purple-700 center ">
      <div className=" bgGradient p-1 rounded-md lg:w-[50%] w-full mx-4 lg:mx-0">
        <div className="flex center p-10 flex-col gap-12 w-full h-full bg-gray-200">
          <h2 className="text-3xl gradientText">Contact Us</h2>
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};
