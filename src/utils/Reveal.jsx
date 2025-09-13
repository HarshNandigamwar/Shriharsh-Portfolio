
import { motion } from "framer-motion";

export default function Reveal({
  children,
  once = false,
  y = 40,
  duration = 0.1,
  delay = 0.1,
  ease = "easeOut",
  stagger = 0.1,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }} // amount ~ start position
      transition={{ staggerChildren: stagger }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration, delay, ease },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : (
          <motion.div
            variants={{
              hidden: { opacity: 0, y },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration, delay, ease },
              },
            }}
          >
            {children}
          </motion.div>
        )}
    </motion.div>
  );
}
