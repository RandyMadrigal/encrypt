import { motion } from "framer-motion";
import { CardHeader } from "./CardHeader";
import { CardBody } from "./CardBody";

export const Card = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        w-full max-w-md
        p-6
        rounded-2xl
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        shadow-2xl
        flex flex-col gap-5 items-center

        transition-all duration-300
        hover:scale-[1.02]
      "
    >
      <CardHeader />
      <CardBody />
    </motion.div>
  );
};
