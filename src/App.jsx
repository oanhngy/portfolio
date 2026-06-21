import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Expertise from './components/Expertise/Expertise'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <AboutMe />
        <Expertise />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
