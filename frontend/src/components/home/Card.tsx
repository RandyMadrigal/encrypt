import { motion } from "framer-motion";
import { CardHeader } from "./CardHeader";
import { CardBody } from "./CardBody";

export const Card = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card w-full max-w-lg rounded-2xl p-8 flex flex-col gap-6"
    >
      <CardHeader />
      <CardBody />
    </motion.div>
  );
};
