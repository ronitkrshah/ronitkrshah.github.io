import { CustomCursor, Header, SparklesBG } from "./components";
import { Fragment } from "react/jsx-runtime";
import { AboutSection, HeroSection } from "./components/sections";

export function App() {
  return (
    <Fragment>
      <SparklesBG />
      <div className="min-h-screen flex-col flex">
        <Header />

        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <HeroSection />
          <HeroSection />
        </main>
        <CustomCursor />
      </div>
    </Fragment>
  );
}
