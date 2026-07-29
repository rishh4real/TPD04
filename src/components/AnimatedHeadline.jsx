import { motion } from 'framer-motion';

const lines = ['Food, loved.', 'Shared.', 'Empowered.'];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const lineVariant = {
  hidden: { y: 60, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function AnimatedHeadline() {
  return (
    <div className="animated-headline-wrap">
      <motion.h1
        className="animated-headline font-bold text-5xl md:text-7xl leading-tight text-[#1A1A1A]"
        variants={container}
        initial="hidden"
        animate="show"
        aria-label="Food, loved. Shared. Empowered."
      >
        {lines.map(line => (
          <span className="line-mask block overflow-hidden" key={line}>
            <motion.span className="line-inner block whitespace-nowrap" variants={lineVariant}>
              {line}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      <motion.p
        className="animated-subtext text-lg md:text-xl text-[#6B7280] max-w-[480px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        High protein. Small batch. Made with care.
      </motion.p>

      <motion.div
        className="animated-actions"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <a className="animated-cta primary" href="./menu.html">
          View Menu
        </a>
        <a className="animated-cta secondary" href="./order.html">
          How to Order
        </a>
      </motion.div>
    </div>
  );
}
