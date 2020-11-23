import Title from './components/Header'
import './App.css';
import WeatherBox from './components/WeatherBoxes';


function App() {
  return (
    <div className="App">
      <Title title ="Weather" />
      <WeatherBox />
    </div>
  );
}


export default App;
