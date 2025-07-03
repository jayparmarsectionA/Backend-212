import Overview from './components/Overview';
import Education from './components/education';
import Projects from './components/Projects';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container style={{ paddingTop: '15px', paddingBottom: '15px' }}>
      <Overview />
      <Education />
      <Projects />
    </Container>
  );
}

export default App;
