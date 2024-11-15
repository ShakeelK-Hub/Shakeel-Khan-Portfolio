
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Project/Projects';
import Contact from './Components/Contact';

function App() {

  
  return (
    <div className="App">

      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      
      

    </div>
    
    
    
   
  );
}

export default App;
