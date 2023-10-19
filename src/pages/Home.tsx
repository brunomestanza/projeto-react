import { useState } from 'react';

export function Home() {
  const [counter, setCounter] = useState(0);

  function handleIncreaseCounter() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <p>Contador: {counter}</p>
      <button onClick={handleIncreaseCounter}>Aumentar</button>
    </div>
  )
}