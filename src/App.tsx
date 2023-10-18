import { ThemeProvider } from 'styled-components';
import './App.css';
import { useState } from 'react';

const theme = {
  main: '#c2410c',
};

interface StudentProps {
  name: string;
  registrationNumber: number;
}

export function App() {
  const [students, setStudents] = useState<StudentProps[]>([]);

  function handleLoadStudents() {
    setStudents([
      {
        name: 'Victor Italo',
        registrationNumber: 25,
      },
      {
        name: 'Jessica Sobreira',
        registrationNumber: 13,
      },
      {
        name: 'Bruna Fonseca',
        registrationNumber: 1,
      },
      {
        name: 'Rodrigo Minuzzo',
        registrationNumber: 19,
      },
    ]);
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        {students.length === 0 && <p>Informações não carregadas!</p>}
        {students.map((student) => {
          return (
            <div key={student.registrationNumber}>
              <p>Estudante: {student.name}</p>
              <p>Matricula: {student.registrationNumber}</p>
            </div>
          );
        })}
        <button onClick={handleLoadStudents}>Carregar...</button>
      </div>
    </ThemeProvider>
  );
}
