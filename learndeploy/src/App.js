import logo from './logo.svg';
import './App.css';
import IncrementNumber from './component/incrementNumber/index'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <IncrementNumber/>
      </header>
    </div>
  );
}

export default App;
