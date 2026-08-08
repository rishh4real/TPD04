import { motion } from 'framer-motion';

const titleReveal = {
  hidden: { y: 80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
};

const heroReveal = {
  hidden: { y: 46, opacity: 0 },
  show: delay => ({
    y: 0,
    opacity: 1,
    transition: { delay, duration: 0.78, ease: [0.76, 0, 0.24, 1] },
  }),
};

const heroFadeOnly = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 3.15, duration: 0.9, ease: 'easeInOut' },
  },
};

const highlightWipe = {
  hidden: { scaleX: 0, originX: 0 },
  show: delay => ({
    scaleX: 1,
    transition: { delay, duration: 0.35, ease: [0.76, 0, 0.24, 1] },
  }),
};

const highlightText = {
  hidden: { color: '#1A1A1A' },
  show: delay => ({
    color: '#FFFFFF',
    transition: { delay: delay + 0.1, duration: 0.18, ease: 'easeOut' },
  }),
};

function HighlightWord({ children, delay }) {
  return (
    <motion.span
      className="small-rebellion-highlight"
      variants={highlightText}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
    >
      <motion.span
        className="small-rebellion-marker"
        variants={highlightWipe}
        custom={delay}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        aria-hidden="true"
      />
      <span className="small-rebellion-highlight-text">{children}</span>
    </motion.span>
  );
}

export default function SmallRebellion() {
  return (
    <motion.section className="small-rebellion-hero" aria-label="A Small Rebellion">
      <div className="small-rebellion-hero-mask">
        <motion.h1 className="small-rebellion-hero-title" variants={titleReveal} initial="hidden" animate="show">
          A Small Rebellion.
        </motion.h1>
      </div>
      <div className="small-rebellion-hero-mask">
        <motion.p
          className="small-rebellion-hero-subline"
          variants={heroReveal}
          custom={1.18}
          initial="hidden"
          animate="show"
        >
          We have complicated food far too much.
        </motion.p>
      </div>
      <div className="small-rebellion-hero-mask small-rebellion-hero-warm-mask">
        <motion.p
          className="small-rebellion-line small-rebellion-hero-warm"
          variants={heroReveal}
          custom={1.82}
          initial="hidden"
          animate="show"
        >
          Food needs to be <HighlightWord delay={2.38}>loved</HighlightWord>,{' '}
          <HighlightWord delay={2.7}>shared</HighlightWord> &amp;{' '}
          <HighlightWord delay={3.02}>empowered</HighlightWord>.
        </motion.p>
      </div>
      <motion.p className="small-rebellion-hero-closing" variants={heroFadeOnly} initial="hidden" animate="show">
        That's our belief.
      </motion.p>
    </motion.section>
  );
}
