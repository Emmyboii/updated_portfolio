import { motion } from "framer-motion";
import { useState } from "react";

interface copyProps {
  text: string
  label: string
}

interface ContactCardProps {
  icon: string;
  title: string;
  value: string;
  link: string;
  onCopy?: () => void;
  highlight?: boolean;
}

const Contact = () => {
  const [toast, setToast] = useState("");

  const copyToClipboard = ({ text, label }: copyProps) => {
    navigator.clipboard.writeText(text);
    setToast(`${label} copied!`);
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#120a20] to-black px-6 py-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-purple-700/30 blur-3xl rounded-full"></div>

      {/* Toast */}
      {toast && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg z-50"
        >
          {toast}
        </motion.div>
      )}

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Let’s Work <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700">
              Together
            </span>
          </h1>

          <p className="mt-6 text-gray-400 sm:text-lg">
            Got a project, idea, or opportunity?
            Reach out directly — fast, simple, and personal.
          </p>

          {/* Glow Orb */}
          <div className="mt-10 w-40 sm:h-40 bg-purple-600/30 blur-3xl rounded-full"></div>
        </motion.div>

        {/* RIGHT SIDE (CONTACT CARDS) */}
        <div className="space-y-6">

          {/* EMAIL */}
          <ContactCard
            icon="📧"
            title="Email Me"
            value="olukoyae01@gmail.com"
            link="mailto:olukoyae01@gmail.com"
            onCopy={() => copyToClipboard({ text: "olukoyae01@gmail.com", label: "Email" })}
          />

          {/* PHONE */}
          <ContactCard
            icon="📞"
            title="Call Me"
            value="+234 903 682 6456"
            link="tel:+2349036826456"
            onCopy={() => copyToClipboard({ text: "+2349036826456", label: "Phone" })}
          />

          {/* WHATSAPP */}
          <ContactCard
            icon="💬"
            title="WhatsApp"
            value="Start Chat"
            link="https://wa.me/2349036826456"
            highlight
          />
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, title, value, link, onCopy, highlight }: ContactCardProps) => {
  return (
    <motion.div
      whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`relative group p-[1px] rounded-2xl ${highlight
          ? "bg-gradient-to-r from-green-400 to-green-600 animate-pulse"
          : "bg-gradient-to-r from-purple-500 to-purple-800"
        }`}
    >
      <div className="flex items-center justify-between gap-4 p-5 rounded-2xl bg-[#0b0b0f] backdrop-blur-xl border border-white/10">

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 w-full"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-xl">
            {icon}
          </div>

          <div>
            <p className="text-gray-400 text-sm">{title}</p>
            <p className="text-white font-semibold">{value}</p>
          </div>
        </a>

        {/* COPY BUTTON */}
        {onCopy && (
          <button
            onClick={onCopy}
            className="text-xs text-purple-400 hover:text-white transition"
          >
            Copy
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;