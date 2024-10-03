import { motion } from "framer-motion";
import { Logo } from "./ui";

const Links = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "About",
  },
  {
    href: "#",
    label: "Projects",
  },
  {
    href: "#",
    label: "Skills",
  },
  {
    href: "#",
    label: "Contact",
  },
];

export function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="container my-4 mx-auto"
    >
      <header className="backdrop-filter backdrop-blur-lg px-4 py-2 rounded-3xl bg-white/5 flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex gap-4">
            {Links.map((item, index) => (
              <AnchorLinks
                index={index}
                label={item.label}
                href={item.href}
                key={item.label}
              />
            ))}
          </ul>
        </nav>
      </header>
    </motion.div>
  );
}

type AnchorProps = {
  label: string;
  href: string;
  index: number;
};
/** Anchor Links */
function AnchorLinks({ href, label, index }: AnchorProps) {
  return (
    <motion.li
      style={{ display: "inline-block" }}
      initial={{
        opacity: 0,
        translateY: -10,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
      }}
    >
      <motion.a
        href={href}
        className="text-white/25 hover:text-white transition"
      >
        {label}
      </motion.a>
    </motion.li>
  );
}
