import React, { useMemo, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(0);

  // useMemo will memoize the result of this expensive calculation
  const expensiveCalculation = useMemo(() => {

    console.log('Expensive calculation running...');
    for (let i = 0; i < 1000000000; i++) {}
  }, [flag]);// run when flag changes 
   // Empty dependency array, so this function only runs once, when the component mounts

  return (
    <div>
      <h1>Expensive Calculation with useMemo</h1>
      <p>Expensive calculation result: {expensiveCalculation}</p>
      <p>Count: {count}</p>
      
      {/* Button to update the count state */}
      <button onClick={() => {
        setCount(count + 1)
        count===10? setFlag(1):setFlag(0)
        }}>Increase Count</button>
    </div>
  );
}

export default App;
