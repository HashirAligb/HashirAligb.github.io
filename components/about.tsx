import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Code, Lightbulb } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a second-year Computer Science student at CUNY Queens College with a passion for software engineering
            and teaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6">
              As a coding instructor at Huan Yu, I help students develop their programming skills and foster their
              interest in technology. My experience includes internships at RICH Inc. and NYC DOE, where I've worked on
              real-world projects and honed my technical abilities.
            </p>
            <p className="text-lg mb-6">
              I'm passionate about creating efficient, user-friendly applications that solve real problems. When I'm not
              coding, you might find me playing basketball, exploring scenic spots around the city, or enjoying a good book on technology trends.
            </p>
            <p className="text-lg">
              Currently, I'm actively seeking software engineering internships to further develop my skills and
              contribute to innovative projects that make a difference.
            </p>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Coding Instructor</h3>
                  <p className="text-muted-foreground">
                    Teaching programming fundamentals and advanced concepts to students at Huan Yu.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">CS Student</h3>
                  <p className="text-muted-foreground">
                    Pursuing a Computer Science degree at CUNY Queens College with a focus on software engineering.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                  <p className="text-muted-foreground">
                    Passionate about creating innovative solutions to complex technical challenges.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

