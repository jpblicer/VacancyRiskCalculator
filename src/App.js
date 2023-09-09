import './App.css';
import Title from './components/VacacancyTitle'
import CalculateFee from './components/ExpectedFee'
import Headcount from './components/Headcount'
import ThreeCriteria from './components/threeCriteria/ThreeCriteria'
import AdditionalCriteria from './components/AdditionalCriteria';


function App() {
  const totalRisk = .87 * 100;
  
  
  return (
    <div className="App">
      <h1>Contingency Vacancy Risk Calculator</h1>
      <form>
        <Title />
        <CalculateFee />
        <Headcount />
        <ThreeCriteria />
        <AdditionalCriteria />
      </form>
      <h2>This Vacancy has a {totalRisk}% chance to be filled</h2>
    </div>
  );
}

export default App;
