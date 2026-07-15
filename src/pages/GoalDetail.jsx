import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useGoals } from '../context/GoalContext';

export default function GoalDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { goals } = useGoals();
  const goal = goals.find(g => g.id === id) || { name: id, color: '#f0e9e1' };

  return (
    <motion.div 
      className="dashboard"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
    >
      <header className="header" style={{ justifyContent: 'flex-start', gap: 16 }}>
        <button className="add-btn" onClick={() => navigate('/dashboard')}><ArrowLeft size={20} /></button>
        <div className="profile-pic">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kate" alt="Profile" />
        </div>
      </header>

      <h1 className="title" style={{ color: goal.color === '#fff' ? '#111' : goal.color }}>{goal.name} Strategy</h1>
      <p style={{ color: '#555', marginBottom: 24 }}>Your personalized AI-driven path to achieve this.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ padding: 16, background: '#fff', borderRadius: 16, border: '1px solid #eee' }}>
            <h4 style={{ fontFamily: 'var(--font-sans)', marginBottom: 8 }}>Actionable Step {i}</h4>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input type="checkbox" style={{ width: 20, height: 20 }} />
              <span style={{ fontSize: '0.9rem' }}>AI generated task to overcome psychological barriers.</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40, padding: 24, borderRadius: 24, background: '#111', color: '#fff' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 8 }}>Need to pivot?</h3>
        <p style={{ fontSize: '0.85rem', color: '#ccc', marginBottom: 16 }}>Talk to your Secret Mantra AI to adjust timelines.</p>
        <button style={{ padding: '12px 24px', borderRadius: 20, background: goal.color, color: '#111', border: 'none', fontWeight: 'bold' }}>Chat with AI</button>
      </div>
    </motion.div>
  );
}
