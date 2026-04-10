import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import FormalizationFlow from './components/FormalizationFlow';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Dashboard />
      <FormalizationFlow />
    </div>
  );
}

export default App;