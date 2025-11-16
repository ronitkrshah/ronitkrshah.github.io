import { motion } from "framer-motion";
import { SectionTemplate } from "./SectionTemplate";
import { Glow } from "../components/ui";
import { FaReact, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiFlutter, SiTypescript, SiExpress } from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "React Native",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#FFF",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#00ED64",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "#42A5F5",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    color: "#F7DF1E",
  },
  {
    name: "Git & GitHub",
    icon: FaGitAlt,
    color: "#F1502F",
  },
];

export default function SkillsSection() {
  return (
    <SectionTemplate title="Skills" id="skills">
      <motion.div
        className="flex flex-wrap justify-center gap-8 px-8 container"
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.03,
                boxShadow: `0 0 25px ${skill.color}20`,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
             rounded-xl bg-white/10 backdrop-blur-md text-white/80 shadow-md shadow-black/30 
             hover:bg-white/15"
            >
              <Icon
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                color={skill.color}
              />
              <span className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-sm font-medium text-center">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Subtle section background glow */}
      <Glow />
    </SectionTemplate>
  );
}
