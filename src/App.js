import './App.css';
import './Variables.css'
import Navbar from './Components/UI/Navbar/Navbar';
import Container from './Components/UI/Container/Container';
import Main from './Components/Sections/Main/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Main />
      </Container>
    </div>
  );
}

export default App;
