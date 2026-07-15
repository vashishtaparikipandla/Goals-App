import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Onboarding from './pages/Onboarding'
import Processing from './pages/Processing'
import Dashboard from './pages/Dashboard'
import GoalDetail from './pages/GoalDetail'
import './App.css'

function App() {
  const location = useLocation();
  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Onboarding />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/goal/:id" element={<GoalDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
