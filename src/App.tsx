import { Experience } from './components/Experience';
import { SectionHeading } from './components/SectionHeading';
import { Profile } from './components/Profile';
import profileImg from './assets/profile.jpeg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { Button } from './components/Button';

const theme = {
  main: '#c2410c',
};

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <SectionHeading title="About me" />
        <p>
          The Generator App is an online tool that helps you to export
          ready-made templates ready to work as your future website. It helps
          you to combine slides, panels and other components and export it as a
          set of static files: HTML/CSS/JS.
        </p>
        <Profile src={profileImg} alt="" />
        <SectionHeading title="Work experience" />
        <Experience
          date="17/01/2000 - 10/10/2000"
          enterprise="Empresa 1"
          local="Local 1"
          title="Trabalhador honesto"
          workload="Tempo integral"
          tagColors={{ backgroundColor: '#166534', color: '#4ade80' }}
        />

        <Experience
          date="15/02/2010 - 10/10/2012"
          enterprise="Empresa 2"
          local="Local 2"
          title="Trabalhador desonesto"
          workload="Quando dá"
          tagColors={{ backgroundColor: '#991b1b', color: '#f87171' }}
        />
        <Button
          handleButtonClick={() => alert('Informações salvas!')}
          title="Salvar"
        />
        <Button
          handleButtonClick={() => alert('Upload cancelado!')}
          title="Cancelar"
        />
      </div>
    </ThemeProvider>
  );
}
