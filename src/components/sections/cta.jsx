import { FaArrowRight } from "react-icons/fa6";
import imageCTA from "../../assets/img-banner-2.png";
import { Button } from "../ui/button";

export const CTA = () => {
  return (
    <section className="grid grid-cols-12 justify-center items-center w-full max-w-screen-xl bg-[#F2BFAF] h-fit overflow-hidden rounded-2xl mb-16">
      <div className="col-span-6 h-full flex flex-col gap-10 p-16">
        <div className="flex flex-col gap-5">
          <h2 className="text-5xl font-bold">Get Landing Page UI Kit Today!</h2>
          <p className="text-xl font-mulish leading-normal">
            Break the Figma limits and explore the endless possibilities with
            Anima.
          </p>
        </div>
        <Button className="w-fit gap-2 py-4 px-12 rounded-[20px] h-15 bg-[#009379] hover:bg-[#006956] font-semibold text-base">
          Get started
          <FaArrowRight />
        </Button>
      </div>
      <div className="col-span-6 mt-[-80px] h-[434px] w-full">
        <img src={imageCTA} alt="" srcset="" />
      </div>
    </section>
  );
};
