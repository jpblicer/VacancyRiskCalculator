import './App.css';
import Title from './components/VacacancyTitle'
import CalculateFee from './components/ExpectedFee'
import Headcount from './components/Headcount'
import ThreeCriteria from './components/threeCriteria/ThreeCriteria'
import AdditionalCriteria from './components/AdditionalCriteria';
import CalculateRisk from './components/CalculateRisk';


function App() {
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
      <CalculateRisk />
    </div>
  );
}

export default App;
