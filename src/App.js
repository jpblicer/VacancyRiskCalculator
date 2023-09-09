import './App.css';
import Title from './components/VacacancyTitle'
import CalculateFee from './components/ExpectedFee'
import Headcount from './components/Headcount'
import ThreeCriteria from './components/threeCriteria/ThreeCriteria'

function App() {
  return (
    <div className="App">
      <h1>Contingency Vacancy Risk Calculator</h1>
      <Title />
      <CalculateFee />
      <Headcount />
      <ThreeCriteria />
    </div>
  );
}

export default App;
