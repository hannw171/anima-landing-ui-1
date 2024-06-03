import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Banner } from "./components/sections/banner";
import { CTA } from "./components/sections/cta";
import { CTAForm } from "./components/sections/ctaForm";
import { Features } from "./components/sections/features";
import { Hero } from "./components/sections/hero";
import { Metrics } from "./components/sections/metrics";
import { Partners } from "./components/sections/partners";
import { Pricelist } from "./components/sections/pricelist";
import { Teams } from "./components/sections/teams";
import { Testimonials } from "./components/sections/testimonials";

function App() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#F8F9FF]">
        <Header />
        <main>
          <Hero />
          <Partners />
          <Features />
          <Metrics />
          <Banner />
          <Testimonials />
          <Pricelist />
          <Teams />
          <CTA />
          <CTAForm />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
