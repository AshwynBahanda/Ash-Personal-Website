import logo from "./logo.svg";
import "./App.css";
import WelcomeUser from "./components/Welcome";

function App() {
  return (
    <div className='Main-layout'>
      <div className='testing'>
        <img src={logo} className='App-logo' alt='logo' />
        <WelcomeUser className='testing' name='Ashwyn'></WelcomeUser>
      </div>
    </div>
  );
}

export default App;
