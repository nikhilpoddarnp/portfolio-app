import Navbar from "./components/Navbar"
import Intro from "./components/intro"
import About from "./components/about"
import Project from "./components/project"
import Contactme from './components/contact'
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
     <Navbar/> 
     <Intro/>
     <About/>
     <Project/>
     <Contactme/>
     <Footer/>

    </div>
  );
}

export default App;
