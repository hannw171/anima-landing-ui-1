import BannerImage from "../../assets/img-banner.png";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";

export const Banner = () => {
  return (
    <section className="flex items-center w-full h-[75vh] max-w-screen-xl py-[120px] grid grid-cols-12 gap-8">
      <div className="col-span-6 w-full">
        <img src={BannerImage} />
      </div>
      <div className="col-span-6 w-full">
        <div className="flex flex-col items-start justify-center gap-10">
          <h2 className="text-6xl text-slate-950 font-bold leading-tight">
            Get Landing Page UI Kit Today!
          </h2>
          <p className="font-mulish text-xl">
            Break the Figma limits and explore the endless possibilities with
            Anima.
          </p>
          <div className="flex justify-center items-center gap-5">
            <Button className="gap-2 py-4 px-12 rounded-[20px] h-15 bg-[#009379] hover:bg-[#006956] font-semibold text-base">
              Get started
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
