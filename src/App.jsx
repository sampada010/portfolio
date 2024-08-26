import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
      <Footer/>
    </div>
  );
}

export default App;
