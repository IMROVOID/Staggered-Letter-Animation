import React from "react";
import { motion } from "framer-motion";
import './App.css'; // Import the CSS file

export const RevealLinks = () => {
  return (
    <section className="reveal-links-section">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">Linkedin</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
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
              // ---- FIX IS HERE ----
              // Move the text up a little more to ensure it's hidden
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
      <div className="flip-link-text-bottom">
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

function App() {
  return <RevealLinks />;
}

export default App;