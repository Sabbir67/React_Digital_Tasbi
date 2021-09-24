import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className = "App">
      <Counter></Counter>
    </div>
  );
}

function Counter(){

  const [count , setCount] = useState(1);

  const handelIncrease = () =>{
    const newCount = count + 1;
    setCount(newCount);
  }

  const handelDecrease = () => {
    if(count > 0){
      const newDecrease = count - 1;
      setCount(newDecrease);
    }
    
  }

  const resetValue = () => {
    const resetVal = 0;
    setCount(resetVal); 
  }
  return(
    <div>
        <h1 style = {{backgroundColor:'yellow'}}>React Digital Tasbi</h1>
        <h1>Count : {count} </h1>
        <button onClick={handelIncrease}>Increase</button>
        <button onClick={handelDecrease}>Decrease</button>
        <button onClick={resetValue}>Reset</button>
    </div>
  );
}

export default App;
