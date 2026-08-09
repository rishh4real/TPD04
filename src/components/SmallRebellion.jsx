import { motion } from 'framer-motion';

const titleReveal = {
  hidden: { y: 80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.35, duration: 1.2, ease: [0.76, 0, 0.24, 1] },
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

const slowTextReveal = {
  hidden: { y: 34, opacity: 0 },
  show: delay => ({
    y: 0,
    opacity: 1,
    transition: { delay, duration: 1.25, ease: [0.76, 0, 0.24, 1] },
  }),
};

const heroFadeOnly = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 3.65, duration: 0.9, ease: 'easeInOut' },
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
      animate="show"
    >
      <motion.span
        className="small-rebellion-marker"
        variants={highlightWipe}
        custom={delay}
        initial="hidden"
        animate="show"
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
          variants={slowTextReveal}
          custom={1.35}
          initial="hidden"
          animate="show"
        >
          We have complicated food far too much.
        </motion.p>
      </div>
      <motion.div
        className="small-rebellion-count-list"
        variants={slowTextReveal}
        custom={1.85}
        initial="hidden"
        animate="show"
        aria-label="We count it. Fear it. Earn it. Regret it."
      >
        <span>We count it.</span>
        <span>Fear it.</span>
        <span>Earn it.</span>
        <span>Regret it.</span>
      </motion.div>
      <div className="small-rebellion-hero-mask small-rebellion-hero-warm-mask">
        <motion.p
          className="small-rebellion-line small-rebellion-hero-warm"
          variants={heroReveal}
          custom={2.55}
          initial="hidden"
          animate="show"
        >
          Food needs to be <HighlightWord delay={3.05}>loved</HighlightWord>,{' '}
          <HighlightWord delay={3.34}>shared</HighlightWord> &amp;{' '}
          <HighlightWord delay={3.63}>empowered</HighlightWord>.
        </motion.p>
      </div>
      <motion.p className="small-rebellion-hero-closing" variants={heroFadeOnly} initial="hidden" animate="show">
        That's our belief.
      </motion.p>
    </motion.section>
  );
}
