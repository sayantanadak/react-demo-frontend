import './App.css';
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";


function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;
