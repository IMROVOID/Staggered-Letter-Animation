import React from "react";
import { motion } from "framer-motion";
import './App.css'; // Import the CSS file

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: string;
  href: string;
}

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="flip-link"
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-110%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="flip-link-text"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="flip-link-text-overlay">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="flip-link-text"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const FlipLinkReversed: React.FC<FlipLinkProps> = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="flip-link"
    >
      <div className="flip-link-text-overlay">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "-100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="flip-link-text"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "110%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="flip-link-text"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

function App() {
  return (
    <main className="main-container">
      <section className="reveal-links-section">
        <FlipLink href="#">Twitter</FlipLink>
        <FlipLink href="#">Linkedin</FlipLink>
        <FlipLink href="#">Facebook</FlipLink>
        <FlipLink href="#">Instagram</FlipLink>
      </section>
      <section className="reveal-links-section reveal-links-section--dark">
        <FlipLinkReversed href="#">Twitter</FlipLinkReversed>
        <FlipLinkReversed href="#">Linkedin</FlipLinkReversed>
        <FlipLinkReversed href="#">Facebook</FlipLinkReversed>
        <FlipLinkReversed href="#">Instagram</FlipLinkReversed>
      </section>
    </main>
  );
}

export default App;