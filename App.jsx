import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] =useState(false);
  const extraClass =running ? "green" : "red" ;

  useEffect(() => {
    console.log("useEffect starting");
    let interval;
    if (running) {
      interval = setInterval(() => setCounter((x) => x + 1), 3000);
    }

    return () => {
      if (interval) {
        console.log ("interval:", interval);
        clearInterval (interval);
      }
    };
  
    
  }, [running]);

  return (
    <>
      <div className={`hi ${extraClass}`}>{counter}</div>
      <div className={`button ${extraClass}`}>
      <button onClick={() => setRunning(true)}> start </button>
      <p></p>
       <button onClick={() => setRunning(false)}> pause </button>
       <p></p>
       <button onClick={() => setCounter(0)}> restart </button>
       </div>
      <p className="hi">hello.</p>
      <p className="hi">goodbye.</p>
    </>
  );
}
export default App;
