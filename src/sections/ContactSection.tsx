import { motion } from "framer-motion";
import { SectionTemplate } from "./SectionTemplate";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const contacts = [
  {
    title: "Peek at My Resume",
    description: "Download the resume.",
    icon: FaDownload,
    link: "/RKSFullStackResume.pdf",
    glow: "#61DAFB",
  },
  {
    title: "Mail Me",
    description: "ronitkrshah1@gmail.com",
    icon: FaEnvelope,
    link: "mailto:ronitkrshah1@gmail.com",
    glow: "#f4c9a1",
  },
];

export default function ContactCardsSection() {
  return (
    <SectionTemplate title="Contact & Resume" id="contact">
      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-8">
        {contacts.map((contact, i) => {
          const Icon = contact.icon;
          return (
            <motion.a
              key={i}
              href={contact.link}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 25px ${contact.glow}80`,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col justify-between w-72 p-6 rounded-xl bg-white/10 backdrop-blur-xl text-white/90 shadow-md shadow-black/30 hover:bg-white/15 border border-transparent hover:border-white/20 transition relative"
            >
              {/* Glow outline */}
              <span
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  //   boxShadow: `0 0 15px ${contact.glow}60, 0 0 25px ${contact.glow}40`,
                  borderRadius: "12px",
                  zIndex: -1,
                }}
              />

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <Icon size={28} color={contact.glow} />
                <h3 className="text-xl font-semibold">{contact.title}</h3>
              </div>
              <p className="text-white/70 text-sm relative z-10">
                {contact.description}
              </p>
            </motion.a>
          );
        })}
      </div>
    </SectionTemplate>
  );
}
