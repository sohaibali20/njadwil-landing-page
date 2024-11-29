import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animates only once when in view
    threshold: 0.5,    // Trigger animation when 50% of the element is visible
  });

  return (
    <div ref={ref} style={{ marginTop: '50px', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          backgroundColor: '#e0e0e0',
          padding: '20px',
          borderRadius: '8px',
          display: 'inline-block',
        }}
      >
        <h3>This section animates when you scroll!</h3>
      </motion.div>
    </div>
  );
};

export default ScrollAnimationSection;
