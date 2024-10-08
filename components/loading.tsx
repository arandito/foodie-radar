import React from 'react';
import { motion } from 'framer-motion';

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <motion.div
        className="w-16 h-16 border-t-4 border-pink-600 border-solid rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="mt-4 text-lg font-semibold text-slate-700 dark:text-slate-300">
        Finding delicious recommendations...
      </p>
    </div>
  );
};

export default LoadingPage;