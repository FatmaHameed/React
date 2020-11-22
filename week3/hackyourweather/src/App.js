import Title from './components/header'
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="header">
      <Title title ="Weather" />
      <Main />
      </header>
    </div>
  );
}

export default App;
