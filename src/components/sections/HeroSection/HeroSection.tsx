import { Avatar } from "./Avatar";
import { Profile } from "./Profile";

export function HeroSection() {
  return (
    <section
      className="h-screen flex flex-1 items-center justify-center gap-4"
      id="hero"
    >
      <Profile />
      <Avatar />
    </section>
  );
}
