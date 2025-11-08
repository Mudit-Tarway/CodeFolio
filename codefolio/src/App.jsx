import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import About from "./components//about/About";
// import Navbar from "./components/Navbar";
import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";

function App(){
  return (
    <div>
      {/* <Navbar/> */}
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;