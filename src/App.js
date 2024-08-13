import './App.css';
import TodoContainer from './components/TodoContainer';
import { useEffect, useState } from "react";

function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("isDarkMode"))) {
      setDark(JSON.parse(localStorage.getItem("isDarkMode")))
    }
  },[])

  useEffect(() => {
    // const isLocalDark = JSON.parse(localStorage.getItem("isDarkMode"))
    // if (isLocalDark != null) {
    //   setDark((isLocalDark))
    // }
    localStorage.setItem('isDarkMode', dark)

  }, [dark])

  return (
    <>
      <div className='switch-con' >
        <label className="switch" >
          <input type="checkbox" checked={dark} onChange={() => setDark(!dark)} />
          <span className="slider"></span>
        </label>
      </div>
      <div className={`container ${dark === true ? "dark-mode" : ""}`}>
        <h1>TODO LIST</h1>
        <TodoContainer dark={dark} />
      </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
