import { motion } from 'framer-motion';
import { Utensils, MapPin } from 'lucide-react';

const TransitionStep: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center -my-10"
    >
      <div className="relative w-64 h-64">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 720] }}
          transition={{ duration: 4, times: [0, 0.5, 1], repeat: Infinity }}
        >
          <Utensils size={64} className="text-pink-600" />
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, -360, -720] }}
          transition={{ duration: 4, times: [0, 0.5, 1], delay: 0.5, repeat: Infinity }}
        >
          <MapPin size={64} className="text-amber-400" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TransitionStep;