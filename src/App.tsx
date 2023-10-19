import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';

const theme = {
  main: '#c2410c',
};

export function App() {
  const [counter, setCounter] = useState(0);

  function handleIncreaseCounter() {
    setCounter(counter + 1)
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <p>Contador: {counter}</p>
        <button onClick={handleIncreaseCounter}>Aumentar</button>
      </div>
    </ThemeProvider>
  );
}
