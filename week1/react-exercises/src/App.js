// import logo from './logo.svg';
import './App.css';
import HobbyList from './components/ExtremeHobbies';
import Guarantee from './components/CustomerService';
import Counter from './components/Counting';

function App() {
  return (
    <div className="App">
      <HobbyList />
      <div className="guarantee">
        <Guarantee image='assets/f-delivery.png' title='Free shipping' description='This is the description for the first instance of customer service component' />

        <Guarantee image='assets/coin.png' title='100% Money back' description='This is the description for the second instance of customer service component' />

        <Guarantee image='assets/chat.png' title='Online support 24/7' description='This is the description for the third instance of customer service component' />
      </div>

    <Counter />
    </div>
  );
}

export default App;
