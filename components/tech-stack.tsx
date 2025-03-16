import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, FileCode, Laptop, Server, PenToolIcon as Tool } from "lucide-react"

const TechStack = () => {
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "UX/UI Design", "Responsive Design", "Tailwind CSS"],
    backend: ["Python", "Flask", "Groq API", "REST APIs", "Node.js", "Express"],
    databases: ["MySQL", "SQL", "Database Design", "Query Optimization"],
    languages: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
    tools: ["VS Code", "IntelliJ", "Git", "GitHub", "Figma", "Postman", "Docker"],
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The technologies, languages, and tools I work with to build modern applications. I'm particularly passionate
            about React and Python, but always eager to learn new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Tool className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FileCode className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Other Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Problem Solving</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Algorithms</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Data Structures</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Technical Writing</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Agile Methodology</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Team Collaboration</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Code Review</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default TechStack

