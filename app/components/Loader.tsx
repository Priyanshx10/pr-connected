import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StatisticalLoader = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setCount(prevCount => prevCount + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => setIsVisible(false), 1000);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [count]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-teal-500 z-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-40 h-40 border-8 border-white rounded-full flex items-center justify-center mb-4"
        >
          <span className="text-4xl font-bold text-white">{count}%</span>
        </motion.div>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-white font-semibold"
        >
          Loading PR-Connect...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default StatisticalLoader;