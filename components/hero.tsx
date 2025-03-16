"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"

const Hero = () => {
  const [typedText, setTypedText] = useState("")
  const fullText = "Coding Instructor"

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col bg-karbala text-white">
      <Navbar />

      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-medium text-primary">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold">Hashir Ali</h1>
            <div className="h-8">
              <p className="text-xl md:text-2xl text-muted-foreground">
                {typedText}
                <span className="animate-blink">|</span>
              </p>
            </div>
            <p className="text-lg text-muted-foreground max-w-lg">
              A passionate Computer Science student at CUNY Queens College with a focus on building innovative solutions
              and teaching the next generation of developers. I enjoy exploring new technologies and finding creative
              ways to solve problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/HashirAligb" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/hashir-ali-b08736276/" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:hashirali.ali21@qmail.cuny.edu" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
              <div className="absolute w-72 h-72 rounded-full bg-background flex items-center justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9774.jpg-k6pCHxUhNgYrTAnAlBluWlNzWFI2Dk.jpeg"
                    alt="Hashir Ali"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" asChild>
          <Link href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default Hero

