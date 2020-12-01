import Title from './components/Title.js';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CityChart from './components/CityChart';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Title title="Weather" />
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/:name" exact component={CityChart} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
