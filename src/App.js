import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skillss from "./components/Skillss";
import './index.css';  // Adjust the path as needed


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skillss />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
