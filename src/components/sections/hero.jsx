import { LuRocket } from "react-icons/lu";
import { Button } from "../ui/button";
import HeroImage from "../../assets/img-hero.png";

export const Hero = () => {
  return (
    <section className="flex items-center w-full h-[75vh] max-w-screen-xl py-[120px] grid grid-cols-12 gap-8">
      <div className="col-span-7 w-full">
        <div className="flex flex-col items-start justify-center gap-10">
          <h1 className="text-7xl text-slate-950 font-bold leading-tight">
            Create Engaging Landing Pages
          </h1>
          <p className="font-mulish text-xl">
            Build beautiful landing pages in record time with{" "}
            <a
            className="text-blue-600 hover:underline"
              href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples"
              target="_blank"
            >
              Anima
            </a>
            ’s Landing Page UI kit for Figma. No code required!
          </p>
          <div className="flex justify-center items-center gap-5">
            <Button className="gap-2 py-4 px-12 rounded-[20px] h-15 bg-[#009379] hover:bg-[#006956] font-semibold text-base">
              <LuRocket />
              Get started
            </Button>
            <Button
              className="py-4 px-12 rounded-[20px] h-15 outline-[#009379] outline outline-2 font-semibold text-base text-[#009379] hover:text-[#009379] "
              variant="outline"
            >
              How it works
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-5 w-full">
        <img src={HeroImage} />
      </div>
    </section>
  );
};
