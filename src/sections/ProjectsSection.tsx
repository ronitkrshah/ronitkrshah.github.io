import { motion } from "framer-motion";
import { SectionTemplate } from "./SectionTemplate";
import { FaGithub, FaGlobe, FaNodeJs, FaMusic, FaVideo } from "react-icons/fa";
import { GiHighHeel } from "react-icons/gi";

const projects = [
  {
    title: "Echoify",
    description:
      "Echoify is a free, open-source, and tracker-free YouTube Music client for Android. Think of it as the YT Music app, minus the ads, spying, and general bloatware vibes.",
    icon: FaMusic,
    glow: "#a855f7",
    links: [
      {
        icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/ronitkrshah/echoify.git",
      },
    ],
  },
  {
    title: "Nubie.js",
    description:
      "Nubie is a small Decorator based WebAPI framework designed to simplify backend development. Built on Express and inspired by the structure of .NET WebAPI.",
    icon: FaNodeJs,
    glow: "#4ade80",
    links: [
      {
        icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/ronitkrshah/nubie.git",
      },
      {
        icon: FaGlobe,
        label: "Explore",
        href: "https://ronitkrshah.github.io/nubie",
      },
    ],
  },
  {
    title: "Waifu Walls",
    description:
      "Waifu Walls is a wallpaper app for Android that delivers beautifully seductive waifu wallpapers crafted to steal your attention—and your heart.",
    icon: GiHighHeel,
    glow: "#f4c9a1",
    links: [
      {
        icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/ronitkrshah/waifu-walls.git",
      },
    ],
  },
  {
    title: "Video Stream like Backend",
    description:
      "Video streaming backend with secure JWT authentication, allowing users to register, upload, and access videos efficiently. Built with MongoDB for fast storage and retrieval of user and video data",
    icon: FaVideo,
    glow: "#FF4C4C",
    links: [
      {
        icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/ronitkrshah/yt-like-backend.git",
      },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <SectionTemplate title="Projects" id="projects">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-6 md:px-10 py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {projects.map((project, i) => {
          const Icon = project.icon;

          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: `0 0 40px ${project.glow}40`,
                borderColor: project.glow,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl text-white shadow-lg flex flex-col gap-4"
            >
              {/* Floating Icon */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 left-6 p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md"
              >
                <Icon size={28} color={project.glow} />
              </motion.div>

              <h3 className="text-xl font-semibold text-white mt-6">
                {project.title}
              </h3>

              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>

              <div className="flex gap-4 mt-3 flex-wrap">
                {project.links.map((link, j) => {
                  const LinkIcon = link.icon;
                  return (
                    <motion.a
                      key={j}
                      href={link.href}
                      target="_blank"
                      whileHover={{
                        scale: 1.08,
                        background: "rgba(255,255,255,0.22)",
                        boxShadow: `0 0 18px ${project.glow}55`,
                        borderColor: project.glow,
                      }}
                      transition={{ type: "spring", stiffness: 230 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl 
             bg-white/10 backdrop-blur-xl
             border border-white/20 
             text-white/90 
             shadow-[0_0_10px_rgba(0,0,0,0.25)]
             hover:text-white"
                    >
                      <LinkIcon size={18} color={project.glow} />
                      <span className="text-sm font-medium tracking-wide">
                        {link.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionTemplate>
  );
}
