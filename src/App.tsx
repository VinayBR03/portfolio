import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="bg-theme-bg min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App