import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Work } from "./components/Work"
import { Skills } from "./components/Skills"
import { Github } from "./components/Github"
import { Experience } from "./components/Experience"
import { Education } from "./components/Education"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Github />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
