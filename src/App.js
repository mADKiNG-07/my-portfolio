import './App.css';
import Navbar from './Navbar/Navbar';
import Intro from './Intro/Intro';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App mt-12">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
