import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type Props = {
  title: string;
  id: string;
} & PropsWithChildren;

export function SectionTemplate({ title, children, id }: Props) {
  return (
    <section
      className="min-h-screen flex flex-1 flex-col items-center justify-center gap-4"
      id={id}
    >
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <span className="text-[40px] md:text-[80px]">{title}</span>
      </motion.div>
      {children}
    </section>
  );
}
