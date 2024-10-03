import { motion } from "framer-motion";
import { Glow } from "../../ui/Glow";

const ABOUT_ME =
  "Hey, I'm Ronit Kr Shah aka RKS! I’m a React Native Developer from West Bengal, India. Before diving into app development, I used to maintain custom ROMs for phoenix, which really sparked my interest in coding. I enjoy building mobile apps that are smooth and user-friendly.";

export function AboutSection() {
  return (
    <section
      className="h-screen flex flex-1 flex-col items-center justify-center gap-4"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <span className="text-[80px]">About Me</span>
      </motion.div>

      {/*  Description */}
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="max-w-[700px] text-center italic text-white/70"
      >
        {/* About Me */}
        {ABOUT_ME.split(" ").map((word, index) => (
          <span key={`${word}-${index}`}>{word} </span>
        ))}
      </motion.div>

      {/** Glow */}
      <Glow />
    </section>
  );
}
