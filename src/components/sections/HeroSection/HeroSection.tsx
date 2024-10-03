import { Avatar } from "./Avatar";
import { Profile } from "./Profile";

export function HeroSection() {
  return (
    <section
      className="h-screen flex flex-1 flex-col-reverse md:flex-row items-center justify-center gap-4"
      id="hero"
    >
      <Profile />
      <Avatar />
    </section>
  );
}
