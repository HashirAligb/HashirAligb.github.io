import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import TechStack from "@/components/tech-stack"
import Interests from "@/components/interests"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <TechStack />
      <Interests />
      <Contact />
      <Footer />
    </main>
  )
}

