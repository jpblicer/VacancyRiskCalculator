import './App.css';
import RiskCalculator from './components/RiskCalculator';

//variables and state need to live in this app and go to components to be modified and displayed

function App() {

  return (
    <div className="App">
      <h1>Contingency Vacancy Risk Calculator</h1>
        <RiskCalculator />
    </div>
  );
}

export default App;
