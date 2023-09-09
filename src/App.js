import './App.css';
import Title from './components/VacacancyTitle'
import CalculateFee from './components/ExpectedFee'
import Headcount from './components/Headcount'


function App() {
  return (
    <div className="App">
      <h1>Contingency Vacancy Risk Calculator</h1>
      <Title />
      <CalculateFee />
      <Headcount />
    </div>
  );
}

export default App;
