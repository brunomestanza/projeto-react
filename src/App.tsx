import { ThemeProvider } from 'styled-components';
import './App.css';
import { useState } from 'react';

const theme = {
  main: '#c2410c',
};

export function App() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <div>
        {name.length > 3 && role.length > 3 ? (
          <p>
            Olá, sou {name} e meu cargo é {role}
          </p>
        ) : (
          <p>Digite um nome e um cargo</p>
        )}
        <input
          type="text"
          placeholder="Digite o nome"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Digite o cargo"
          onChange={(event) => setRole(event.target.value)}
        />
      </div>
    </ThemeProvider>
  );
}
