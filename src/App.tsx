import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {RiskService} from "./services/RiskService";
import {useInjection} from "./ioc/ioc.react";
import {Risk} from "./types/Risk";

const App: React.FC = () => {
  const riskService = useInjection<RiskService>('riskService');
  const [risks, setRisks] = useState<Risk[]>([])
  useEffect(() => {
    riskService.getRisks().then(r => setRisks(r))
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {risks.map(r => (<div key={r.id.toString()}>{r.title}</div>))}
      </header>
    </div>
  );
};

export default App;
