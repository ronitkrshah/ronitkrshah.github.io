import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Fragment } from "react/jsx-runtime";
import Typed from "typed.js";

export function Profile() {
  const typedElRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedElRef.current, {
      strings: [
        "React Native Developer",
        "Custom ROM Maintainer",
        "Open Source Contributor",
        "Android Enthusiast",
        "I Use Vim BTW",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Fragment>
      <motion.div className="flex flex-col leading-tight">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-[40px]"
        >
          Hi, I'm
        </motion.span>
        <motion.span
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="text-[60px]"
        >
          Ronit Kr Shah
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="text-xl italic font-jetbrains-mono text-white/35 flex"
        >
          <span ref={typedElRef}></span>
        </motion.div>
      </motion.div>
    </Fragment>
  );
}
