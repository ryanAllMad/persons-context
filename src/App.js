import React, { useContext } from "react"
import PersonContext from "./context/PersonContext"
import './App.css';
import Jason from './components/Jason';
import Mykol from './components/Mykol';
import Ryan from './components/Ryan';
import AriaLive from './components/AriaLive';

function App() {
  const { retreatStatus } = useContext(PersonContext)
  return (
    <div className="App" role="main">
      <h1>Person Context App</h1>
      <h2>These are people. They all are individuals, but they have one thing in common, 
        they won't go to a retreat unless their friends are going too.</h2>
      <Jason />
      <Mykol />
      <Ryan />
      {retreatStatus === 'going' && <AriaLive />}
    </div>
  );
}

export default App;
