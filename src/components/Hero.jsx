
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [showThreadIntro, setShowThreadIntro] = useState(true);

  useEffect(() => {
    if (reduceMotion) {
      setShowThreadIntro(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowThreadIntro(false);
    }, 4600);

    return () => clearTimeout(timer);
  }, [reduceMotion]);

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 35 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <section className="hero editorial-hero" id="home">

      {/* SIGNATURE THREAD INTRO */}
      {showThreadIntro && !reduceMotion && (
        <motion.div
          className="thread-intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3.8, duration: 0.8, ease: 'easeInOut' }}
        >
          <span className="thread-caption">
            PORTFOLIO / 2026
          </span>

          <div className="signature-wrap">
            <motion.span
              className="signature-name"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{
                duration: 2.8,
                delay: 0.3,
                ease: 'easeInOut',
              }}
            >
              Niva K.
            </motion.span>

            {/* Red thread underline */}
            <svg
              className="signature-thread"
              viewBox="0 0 500 45"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                d="M5 25 C90 5 130 40 215 20 S350 8 420 22 S470 28 490 8"
                fill="none"
                stroke="#E43D32"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2.5,
                  delay: 0.5,
                  ease: 'easeInOut',
                }}
              />
            </svg>
          </div>

          <span className="thread-footer">
            CREATIVE DEVELOPER
          </span>
        </motion.div>
      )}

      {/* DECORATIVE RED THREAD */}
      <svg
        className="hero-drawing"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M -50 720 C 250 620, 300 850, 550 680 S 950 480, 1100 650 S 1350 750, 1500 500"
          fill="none"
          stroke="#e43d32"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.5,
            delay: 0.8,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* TOP INFORMATION */}
      <div className="hero-topline container">
        <span>PORTFOLIO / 2026</span>
        <span>KOZHIKODE, INDIA</span>
      </div>

      {/* HERO CONTENT */}
      <div className="hero-editorial-content container">

        <div className="hero-copy">

          <motion.div className="hero-label" {...reveal}>
            <span className="hero-label-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          <motion.p
            className="hero-pretitle"
            {...reveal}
            transition={{
              ...reveal.transition,
              delay: 0.15,
            }}
          >
            HELLO, I'M NIVA K.
          </motion.p>

          <motion.h1
            className="editorial-title"
            initial={reduceMotion ? false : { opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Building
            <br />
            digital things
            <br />
            with <span>purpose.</span>
          </motion.h1>

          <motion.div
            className="hero-bottom-content"
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <p className="hero-description">
              I'm a developer who enjoys turning thoughtful ideas
              into clean, useful experiences on the web.
              Exploring the world of full-stack development,
              one project at a time.
            </p>

            <div className="hero-actions">
              <a className="editorial-button" href="#projects">
                Explore my work <span>↗</span>
              </a>

              <a
                className="editorial-link"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                VIEW RÉSUMÉ ↗
              </a>
            </div>
          </motion.div>
        </div>

        {/* PROFILE IMAGE */}
        <motion.div
          className="hero-portrait"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.45 }}
        >
          <div className="portrait-frame">
            <img src="/niva.png" alt="Niva K" />
          </div>

          <span className="portrait-caption">
            DEVELOPER / CREATIVE THINKER
          </span>

          <span className="portrait-index">
            01 — 06
          </span>
        </motion.div>
      </div>

      {/* BOTTOM INFORMATION */}
      <div className="hero-bottomline container">
        <span>DESIGNING & BUILDING FOR THE WEB</span>

        <span className="hero-scroll">
          SCROLL TO EXPLORE <span>↓</span>
        </span>
      </div>

    </section>
  );
}
