import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import PlanDetails from './components/PlanDetails';
import Button from './components/Button';
import './styles/global.css';

const App = () => {
  return (
    <div>
      <Header />
      <Summary />
      <PlanDetails />
      <Button text="Acetar" onClick={() => alert('confirmar!')} />
      <Button text="Cancelar" onClick={() => alert('Cancelar!')} />
    </div>
  );
};

export default App;
