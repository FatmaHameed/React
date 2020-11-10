import Title from './components/header'
import './App.css';
import WeatherBox from './components/weatherBoxes';

const data = require('./city-weather.json');

function App() {
  return (
    <div className="App">
      <Title title ="Weather" />
      <WeatherBox />
    </div>
  );
}

export default App;
