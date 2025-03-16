import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold text-primary">
              Hashir Ali
            </Link>
            <p className="mt-2 text-muted-foreground">Coding Instructor & Software Engineer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://github.com/HashirAligb"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hashir-ali-b08736276/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:hashirali.ali21@qmail.cuny.edu"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">© {currentYear} Hashir Ali. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

