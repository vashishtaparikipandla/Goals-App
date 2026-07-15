import React, { createContext, useState, useContext } from 'react';

const GoalContext = createContext();

export function GoalProvider({ children }) {
  const [goals, setGoals] = useState([
    { id: 'family', name: 'family', color: '#e0f2b3', style: { width: 100, height: 100, top: 20, left: 40 } },
    { id: 'friends', name: 'friends', color: '#f4d5ff', style: { width: 110, height: 110, top: 30, right: 30 } },
    { id: 'career', name: 'career', color: '#fff', style: { width: 80, height: 80, top: 140, left: 10 } },
    { id: 'financial', name: 'financial', color: '#ff7d3b', textCol: '#fff', style: { width: 80, height: 80, top: 150, left: 100 } },
    { id: 'health', name: 'health', color: '#5a9df5', textCol: '#fff', style: { width: 90, height: 90, top: 230, right: 60 } },
  ]);
  const [newGoalTheme, setNewGoalTheme] = useState(null);

  const addGoal = (goalStr, themeColor) => {
    setGoals(prev => [...prev, {
      id: Date.now().toString(),
      name: goalStr,
      color: themeColor,
      textCol: '#111',
      style: { width: 100, height: 100, top: 150, left: 150 } // Default center
    }]);
  };

  return (
    <GoalContext.Provider value={{ goals, setGoals, addGoal, newGoalTheme, setNewGoalTheme }}>
      {children}
    </GoalContext.Provider>
  );
}

export const useGoals = () => useContext(GoalContext);
