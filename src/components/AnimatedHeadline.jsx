import { motion } from 'framer-motion';

const lines = ['Protein.', 'Thoughtfully Made.'];

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
        aria-label="Protein. Thoughtfully Made."
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
        High protein. Small batch. Delivered fresh.
      </motion.p>

      <motion.a
        className="animated-cta inline-flex items-center justify-center rounded-full bg-[#DC2626] px-8 py-4 font-semibold text-white transition hover:scale-[1.02] hover:bg-red-700"
        href="./order.html"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        Order Now
      </motion.a>
    </div>
  );
}
