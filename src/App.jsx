import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </>
  )
}

export default App
