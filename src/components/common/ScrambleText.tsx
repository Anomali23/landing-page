import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrambleTextProps {
  originalText: string;
  interval?: number; // Optional interval for scrambling effect
  className?: string; // To allow custom styling
}

// Utility function to randomly pick a character from the charset
const getRandomChar = (charset: string) =>
  charset[Math.floor(Math.random() * charset.length)];

const ScrambleText: React.FC<ScrambleTextProps> = ({
  originalText,
  interval = 100,
  className = '',
}) => {
  const charset = 'abcdefghijklmnopqrstuvwxyz-.,+*!?@&%/='; // Character set for scrambling
  const [displayText, setDisplayText] = useState<string>(''); // Scrambled text display state
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Tracks which character is currently being scrambled

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger scramble effect only once when in view

  // Scrambling logic
  useEffect(() => {
    if (!isInView || currentIndex >= originalText.length) return; // Exit early if not in view or completed

    const scrambleInterval = setInterval(() => {
      setDisplayText(
        () =>
          originalText
            .split('')
            .map((char, index) =>
              index <= currentIndex ? char : getRandomChar(charset),
            )
            .join(''), // Update scrambled text progressively
      );
      setCurrentIndex((prev) => prev + 1); // Move to the next character

      if (currentIndex >= originalText.length - 1)
        clearInterval(scrambleInterval); // Stop once all characters are done
    }, interval);

    return () => clearInterval(scrambleInterval); // Cleanup interval on unmount
  }, [isInView, currentIndex, originalText, interval, charset]);

  return (
    <motion.h3 ref={ref} className={`text-3xl font-bold ${className}`}>
      {displayText}
    </motion.h3>
  );
};

export default ScrambleText;
