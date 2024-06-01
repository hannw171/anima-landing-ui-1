import clientLogo1 from "../../assets/client-logo-1.svg";
import clientLogo2 from "../../assets/client-logo-2.svg";
import clientLogo3 from "../../assets/client-logo-3.svg";
import clientLogo4 from "../../assets/client-logo-4.svg";
import clientLogo5 from "../../assets/client-logo-5.svg";
import clientLogo6 from "../../assets/client-logo-6.svg";

export const Partners = () => {
  return (
    <section className="w-full max-w-screen-xl py-[120px] py-16">
      <div className="flex items-center gap-8 justify-between">
        <img src={clientLogo1} />
        <img src={clientLogo2} />
        <img src={clientLogo3} />
        <img src={clientLogo4} />
        <img src={clientLogo5} />
        <img src={clientLogo6} />
      </div>
    </section>
  );
};
