import { Header } from "./components/header";
import { Features } from "./components/sections/features";
import { Hero } from "./components/sections/hero";
import { Partners } from "./components/sections/partners";

function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
        <main>
          <Hero />
          <Partners />
          <Features />
        </main>
      </div>
    </>
  );
}

export default App;
