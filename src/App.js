import './App.css';
import RiskCalculator from './components/RiskCalculator';

//variables and state need to live in this app and go to components to be modified and displayed

function App() {

/*
  let risk = 80;
 let totalFee = 30;
 if (totalFee < 2000001){
  risk = 0
}else if(totalFee >= 2000001 && totalFee < 3000000){
  risk = 5
}else if(totalFee >= 3000001){
  risk = 10
}
*/

  return (
    <div className="App">
      <h1>Contingency Vacancy Risk Calculator</h1>
      <form>
        <RiskCalculator />
      </form>
      <h2>This Vacancy has a XX% chance to be filled</h2>
    </div>
  );
}

export default App;
