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
  );
}

export default App;
