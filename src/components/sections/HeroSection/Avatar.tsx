import { motion } from "framer-motion";

export function Avatar() {
  return (
    <motion.img
      style={{
        boxShadow: "0px 0px 165px 0px rgba(105,47,214,0.29)",
      }}
      initial={{
        scale: 0.5,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        delay: 3, // Might take some time to load from network
        duration: 1,
      }}
      src="https://avatars.githubusercontent.com/u/118371892?v=4"
      className="h-[150px] w-[150px] rounded-full"
    />
  );
}
