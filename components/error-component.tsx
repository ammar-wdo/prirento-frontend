"use client";
import { motion } from "framer-motion";

type Props = {
  title?: string;
  description: string;
};

const ErrorComponent = ({ title, description }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-rose-500/20 border border-rose-500 capitalize min-w-[300px] p-8 rounded-xl"
    >
      {title && <h3 className="capitalize font-medium">{title}</h3>}
      <p className="first-letter:capitalize text-sm">{description}</p>
    </motion.div>
  );
};

export default ErrorComponent;
