import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] =useState(false);

  useEffect(() => {
    console.log("useEffect starting");
    let timer;
    if (running) {
      timer = setInterval(() => setCounter((x) => x + 1), 3000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [running]);

  return (
    <>
      <div className="hi">{counter}</div>
      <div className="button">
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
