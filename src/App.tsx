import { CustomCursor, Header, SparklesBG } from "./components";
import { Fragment } from "react/jsx-runtime";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "./sections";

export function App() {
  return (
    <Fragment>
      <SparklesBG />
      <div className="min-h-screen flex-col flex">
        <Header />

        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <CustomCursor />
      </div>
    </Fragment>
  );
}
