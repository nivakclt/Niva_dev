
import { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { motion, useReducedMotion } from 'motion/react';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

import './App.css';
import 'lenis/dist/lenis.css';

function AnimatedSection({ children, reduceMotion }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
        amount: 0.12,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const items = document.querySelectorAll('.reveal');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.2,
        smoothTouch: false,
      }}
    >
      <Navbar />

      <main>
        <AnimatedSection reduceMotion={reduceMotion}>
          <Hero />
        </AnimatedSection>

        <AnimatedSection reduceMotion={reduceMotion}>
          <About />
        </AnimatedSection>

        <AnimatedSection reduceMotion={reduceMotion}>
          <Projects />
        </AnimatedSection>

        <AnimatedSection reduceMotion={reduceMotion}>
          <Contact />
        </AnimatedSection>
      </main>

      <Footer />
    </ReactLenis>
  );
}
