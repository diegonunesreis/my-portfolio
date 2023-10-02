import './App.css';
import './Variables.css'
import Navbar from './Components/UI/Navbar/Navbar';
import Container from './Components/UI/Container/Container';
import Main from './Components/Sections/Main/Main';
import About from './Components/Sections/About/About';

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
        <About />
      </Container>
    </div>
  );
}

export default App;
