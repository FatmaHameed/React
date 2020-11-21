import Title from './components/header'
import './App.css';
import Main from './components/Main';
// import InputCity from './components/input'

function App() {
  return (
    <div className="App">
      <header className="header">
      <Title title ="Weather" />
      {/* <WeatherBox /> */}
      {/* <InputCity /> */}
      <Main />
      </header>
    </div>
  );
}

export default App;
