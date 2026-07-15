import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Processing() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate AI processing time
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div 
      className="dashboard flex-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ height: '100vh', flexDirection: 'column' }}
    >
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180] 
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ width: 100, height: 100, background: '#dceb8c', borderRadius: '40%' }}
      />
      <h2 style={{ marginTop: 32, fontFamily: 'var(--font-serif)' }}>AI is formulating your path...</h2>
    </motion.div>
  );
}
