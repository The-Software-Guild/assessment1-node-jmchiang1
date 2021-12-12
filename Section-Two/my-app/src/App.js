import './App.css';
import Change from './Change';
import Click from './Click';
import Keypress from './Keypress';
import Mousmove from './Mousmove';
import Submit from './Submit';

function App() {
  return (
    <div className="App">
      <Change/>
      <Click/>
      <Keypress/>
      <Mousmove/>
      <Submit/>
    </div>
  );
}

export default App;
