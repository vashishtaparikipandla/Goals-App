import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useGoals } from '../context/GoalContext';

export default function Onboarding() {
  const navigate = useNavigate();
  const { addGoal, setNewGoalTheme } = useGoals();
  const [step, setStep] = useState(0);
  const [goalText, setGoalText] = useState('');

  const handleNext = () => {
    if (step === 0) setStep(1);
    else {
      addGoal(goalText || 'new goal', '#dceb8c');
      setNewGoalTheme('#dceb8c');
      navigate('/processing');
    }
  };

  return (
    <motion.div 
      className="dashboard"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center' }}
    >
      <div style={{ marginBottom: 40 }}>
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kate" alt="Avatar" style={{ width: 60, borderRadius: '50%', marginBottom: 20 }} />
        <h1 className="title" style={{ fontSize: '2.5rem', lineHeight: 1.2 }}>
          {step === 0 ? "Hello, Kate! What's your secret mantra today?" : "What is the key goal in this sphere?"}
        </h1>
      </div>

      {step === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bubbles-container" style={{ height: 'auto', background: 'transparent', display: 'flex', flexWrap: 'wrap', gap: 10 }}>
           <button className="pill" style={{ background: '#dceb8c', color: '#111', fontSize: '1rem', padding: '12px 20px' }} onClick={handleNext}>Personal Growth</button>
           <button className="pill" style={{ background: '#5a9df5', fontSize: '1rem', padding: '12px 20px' }} onClick={handleNext}>Health</button>
           <button className="pill" style={{ background: '#ff7d3b', fontSize: '1rem', padding: '12px 20px' }} onClick={handleNext}>Career</button>
           <button className="pill" style={{ background: '#f4d5ff', color: '#111', fontSize: '1rem', padding: '12px 20px' }} onClick={handleNext}>Random/Other</button>
        </motion.div>
      )}

      {step === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input 
            type="text" 
            placeholder="e.g. Stop bad habits, sleep more..."
            value={goalText}
            onChange={(e) => setGoalText(e.target.value)}
            style={{ padding: '16px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '1rem', fontFamily: 'var(--font-sans)' }}
          />
          <button 
            style={{ padding: '16px', borderRadius: '12px', background: '#111', color: '#fff', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
            onClick={handleNext}
          >
            Create Action Plan
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
