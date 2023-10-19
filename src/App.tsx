import { ThemeProvider } from 'styled-components';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './pages/router';

const theme = {
  main: '#c2410c',
};

export function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
