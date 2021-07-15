import React, {useState} from 'react';

function App() {

  let [count, setCount] = useState(0);

  return (
    <div className="body">
      <h1 className="h1">Simple Counter App</h1>

      <div className="count">{count}</div>

      <div className="btnCont">
        <button className="btn" onClick={ () => checkCount(count - 1) ? setCount(count - 1) : null }>Decrement</button>
        <button className="btn" onClick={ () => setCount(0) }>Reset</button>
        <button className="btn" onClick={ () => checkCount(count + 1) ? setCount(count + 1) : null }>Increment</button>
      </div>
    </div>
  );
}

const checkCount = count => 0 <= count && count <= 25;

export default App;
