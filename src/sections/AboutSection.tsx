import { motion } from "framer-motion";
import { Glow } from "../components/ui";
import { SectionTemplate } from "./SectionTemplate";
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const ABOUT_ME = `JavaScript Developer with 1+ year of hands-on experience building cross-platform mobile apps with React Native,
and practical experience developing full-stack web applications using the MERN stack (MongoDB, Express, React,
Node.js). Experience with TypeScript, object-oriented programming (OOP), SOLID principles and API design.
Passionate about clean code and performance optimization.`;

const Socials = [
  {
    icon: FaGithubAlt,
    href: "https://github.com/ronitkrshah",
    hover: "hover:text-orange-600",
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
        className="px-8 container text-center text-white/70"
      >
        {/* About Me */}
        <span className="text-md md:text-lg">{ABOUT_ME} </span>
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
