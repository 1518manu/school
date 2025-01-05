import { GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <motion.div
        className="bg-violet-800 rounded-full p-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2  }}
        whileTap={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <span className="text-white font-bold text-xl ">
          <GraduationCap className="h-6 w-12" />
        </span>
      </motion.div>
      <motion.span
        className="font-bold text-xl text-gray-100 px-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1, color: "#a78bfa" }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        School Name
      </motion.span>
    </Link>
  );
}
