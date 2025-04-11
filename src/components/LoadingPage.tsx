import React from "react";
import { motion } from "framer-motion";

const LoadingPage: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="inline-block"
          >
            Hi! Welcome to my portfolio
          </motion.span>
        </h1>
        <div className="flex justify-center items-center gap-3">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              initial={{ y: 0 }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              className="w-4 h-4 bg-gray-900 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingPage;
