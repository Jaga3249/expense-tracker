"use client"; // required in Next.js 13+ app directory

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      className="py-12 px-8 bg-purple-100 flex flex-col items-center space-y-2  "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.p
        className="sm:text-lg md:text-xl lg:text- xl text-base font-semibold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Made with ❤️ by Jagannath Behera
      </motion.p>
      <motion.p
        className="text-sm text-gray-600"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Crafting clean UI and cool web experiences
      </motion.p>
    </motion.div>
  );
}
