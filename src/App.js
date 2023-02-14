import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from amplify</h1>
        <p><a href="https://hayden-auth.auth.us-east-1.amazoncognito.com/login?client_id=5ah8kmq78mcshfbrnkp52nb7b6&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fmaster.d2hvocywfqepj8.amplifyapp.com%2F">Register or Login</a></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
