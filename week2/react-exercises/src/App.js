
import './App.css';
import Friend from './exercise1-NewFriend/Friend';
import DogGallery from './exercise2-DogPhoto/dogGallery'
import RandomJoke from './exercise3-RandomJoke/RandomJoke'

function App() {
  return (
    <div className="App">
      <div className="box">
        <Friend />
      </div>
      <div className="box">
        <DogGallery/>
      </div>
      <div className="box">
        <RandomJoke/>
      </div>
    </div>
    
  );
}

export default App;
