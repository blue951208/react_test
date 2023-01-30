import logo from './logo.svg';
import './App.css';
import R003_ImportConponent from "./R003_ImportConponent";

function App() {
  return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
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
        <div>
          <h1>Start React 200!</h1>
          <p>HTML 적용하기</p>
        </div>
          {/*컴포넌트 추가*/}
          <R003_ImportConponent></R003_ImportConponent>
      </>
  );
}

export default App;
