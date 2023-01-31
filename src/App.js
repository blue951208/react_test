import logo from './logo.svg';
import './App.css';
import R003_ImportConponent from "./R003_ImportConponent";
import LifeCycle from "./R004_LifecycleEx";
import LifeCycleEx from "./R005_LifeCycleEx";
import LifeCycleEx2 from "./R006_LifecycleEx";

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
          <LifeCycle></LifeCycle>

          <LifeCycleEx/>
          {/* 컴포넌트 태그에 속성으로 컴포넌트에 값을 넘길수 있다 */}\
          {/* LifeCycleEx2 태그에 prop_value 속성이 있는경우
          R006컴포넌트에서 props.prop_value 로 사용가능 */}
          <LifeCycleEx2 prop_value = 'FromApp.js'/>
          {/*<LifeCycleEx2/>*/}
      </>
  );
}

export default App;
