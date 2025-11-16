import { motion } from "framer-motion";

export default function Glow() {
  return (
    <motion.div
      animate={{
        boxShadow: "0px 0px 232px 159px rgba(112,13,224,0.12)",
      }}
      initial={{
        opacity: 0,
        boxShadow: "0px 0px 0px 0px rgba(112,13,224,0.12)",
      }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute"
    />
  );
}
