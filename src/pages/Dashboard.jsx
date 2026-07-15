import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useGoals } from '../context/GoalContext';

export default function Dashboard() {
  const navigate = useNavigate();
  const { goals } = useGoals();

  return (
    <motion.div 
      className="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="header">
        <button className="add-btn" onClick={() => navigate('/')}>+</button>
        <div className="profile-pic">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kate" alt="Profile" />
        </div>
      </header>

      <h1 className="title">My progress</h1>

      <div className="bubbles-container">
        {goals.map((g, i) => (
          <motion.div 
            key={g.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            className="bubble"
            style={{
              ...g.style,
              background: g.color,
              color: g.textCol || '#111',
              cursor: 'pointer'
            }}
            onClick={() => navigate(`/goal/${g.id}`)}
          >
            {g.name}
          </motion.div>
        ))}
      </div>

      <div className="subgoals-grid">
        <div className="subgoal-card card-blue" onClick={() => navigate('/goal/health')}>
          <span>2 of 3 subgoals</span>
          <h4>physically active life</h4>
        </div>
        <div className="subgoal-card card-orange" onClick={() => navigate('/goal/career')}>
          <span>1 of 6 subgoals</span>
          <h4>buy an apartment</h4>
        </div>
      </div>
    </motion.div>
  );
}
