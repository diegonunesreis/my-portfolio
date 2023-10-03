import './App.css';
import './Variables.css'
import Navbar from './Components/UI/Navbar/Navbar';
import Container from './Components/UI/Container/Container';
import Main from './Components/Sections/Main/Main';
import About from './Components/Sections/About/About';
import Experiences from './Components/Sections/Experiences/Experiences';
import 'rsuite/dist/rsuite-no-reset.min.css';

function App() {
  const scrollTo = (section) => {
    const targetSection = document.getElementById(section);
    targetSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">
      <Navbar />
      <Container>
        <Main scrollNext={() => scrollTo('about')} />
        <About scrollNext={() => scrollTo('experiences')} />
        <Experiences />
      </Container>
    </div>
  );
}

export default App;
