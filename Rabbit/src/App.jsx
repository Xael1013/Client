import Navbar from "./Sections/Navbar"
import Hero from "./Sections/Hero"
import About from "./Sections/About"
import Products from "./Sections/Products"
import Contact from "./Sections/Contact"

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl"> 
    <Navbar />
    <Hero />
    <About />
    <Products />
    <Contact />
 
      
    </div>
  )
}

export default App
