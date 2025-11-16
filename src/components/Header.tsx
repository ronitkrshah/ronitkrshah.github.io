import { motion } from "framer-motion";
import { useState } from "react";
import { Logo } from "./ui";
import { HiMenu, HiX } from "react-icons/hi";

const Links = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="z-40 top-0 left-0 right-0 mx-4 md:container my-4 fixed md:mx-auto backdrop-blur-md"
    >
      <header className="backdrop-filter px-4 py-2 rounded-3xl bg-white/5 flex justify-between items-center">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
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

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white/80 focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-2 backdrop-blur-md bg-white/5 rounded-2xl p-4 mx-4 flex flex-col gap-4 text-center"
        >
          {Links.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-white/70 hover:text-white text-lg font-medium transition"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>
      )}
    </motion.div>
  );
}

type AnchorProps = {
  label: string;
  href: string;
  index: number;
};

function AnchorLinks({ href, label, index }: AnchorProps) {
  return (
    <motion.li
      style={{ display: "inline-block" }}
      initial={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
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
