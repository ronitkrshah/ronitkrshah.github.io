import { motion } from "framer-motion";
import { Glow } from "../../ui/Glow";
import { SectionTemplate } from "../SectionTemplate";
import { FaGithubAlt } from "react-icons/fa6";
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";

const ABOUT_ME =
  "Hey, I'm Ronit Kr Shah aka RKS! I’m a React Native Developer from West Bengal, India. Before diving into app development, I used to maintain Custom ROMs for Redmi K30 4G (phoenix), which really sparked my interest in coding. I enjoy building mobile apps that are smooth and user-friendly.";

const Socials = [
  {
    icon: FaGithubAlt,
    href: "https://github.com/ronitkrshah",
    hover: "hover:text-orange-600",
  },
  {
    icon: FaTelegramPlane,
    href: "https://telegram.me/ronitkrshah",
    hover: "hover:text-blue-400",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/ronitkrshah",
    hover: "hover:text-blue-700",
  },
];

export function AboutSection() {
  return (
    <SectionTemplate title="About Me" id="about">
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="px-8 max-w-[700px] text-center italic text-white/70"
      >
        {/* About Me */}
        {ABOUT_ME.split(" ").map((word, index) => (
          <span className="text-md md:text-lg" key={`${word}-${index}`}>
            {word}{" "}
          </span>
        ))}
      </motion.div>

      {/** Glow */}
      <Glow />

      {/** Social Icons */}
      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
      >
        {Socials.map((item) => (
          <a key={item.href} href={item.href} target="_blank">
            {item.icon({ size: 40, className: item.hover })}
          </a>
        ))}
      </motion.div>
    </SectionTemplate>
  );
}
